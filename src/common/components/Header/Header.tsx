import React from 'react';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

type HeaderProps = {
  appName: string;
  pageTitle: string;
  userId: string;
  onLogout: () => void;
  isRootPage?: boolean;
};

export const Header: React.FC<HeaderProps> = ({
  appName,
  pageTitle,
  userId,
  onLogout,
  isRootPage = false,
}) => {
  const leftContent = (
    <div className="flex align-items-center">
      <h1 className="mr-4">{appName}</h1>
      {!isRootPage && <Link to="/">メニュー</Link>}
    </div>
  );

  const centerContent = (
    <div>
      <h2>{pageTitle}</h2>
    </div>
  );

  const rightContent = (
    <div className="flex align-items-center">
      <span className="mr-4">{userId}</span>
      <Button label="ログアウト" icon="pi pi-sign-out" onClick={onLogout} className="p-button-text" />
      <Button icon="pi pi-question-circle" className="p-button-rounded p-button-text ml-2" />
    </div>
  );

  return (
    <header className="flex justify-content-between align-items-center p-3 shadow-2">
      <div>{leftContent}</div>
      <div>{centerContent}</div>
      <div>{rightContent}</div>
    </header>
  );
};
