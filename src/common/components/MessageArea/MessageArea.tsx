import React from 'react';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';

export type MessageLevel = 'info' | 'warn' | 'error';

export type MessageItem = {
  id: string;
  level: MessageLevel;
  code?: string;
  message: string;
  allowDelete?: boolean;
};

type MessageAreaProps = {
  messages: MessageItem[];
  onRemoveMessage: (id: string) => void;
};

export const MessageArea: React.FC<MessageAreaProps> = ({
  messages,
  onRemoveMessage,
}) => {
  if (!messages || messages.length === 0) {
    return null;
  }

  const getSeverity = (level: MessageLevel): 'success' | 'warn' | 'error' => {
    switch (level) {
      case 'info':
        return 'success';
      case 'warn':
        return 'warn';
      case 'error':
        return 'error';
      default:
        return 'success';
    }
  };

  const getIcon = (level: MessageLevel): string => {
    switch (level) {
      case 'info':
        return 'pi pi-info-circle';
      case 'warn':
        return 'pi pi-exclamation-triangle';
      case 'error':
        return 'pi pi-times-circle';
      default:
        return 'pi pi-info-circle';
    }
  };

  return (
    <div className="message-area p-3">
      {messages.map((msg) => (
        <div key={msg.id} className="mb-2">
          <Message
            severity={getSeverity(msg.level)}
            text={
              <div className="flex justify-content-between align-items-center">
                <div>
                  {msg.code && <span className="font-bold mr-2">[{msg.code}]</span>}
                  <span>{msg.message}</span>
                </div>
                {msg.allowDelete !== false && (
                  <Button
                    icon="pi pi-times"
                    className="p-button-rounded p-button-text p-button-sm ml-2"
                    onClick={() => onRemoveMessage(msg.id)}
                    aria-label="メッセージを削除"
                  />
                )}
              </div>
            }
            icon={getIcon(msg.level)}
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
};
