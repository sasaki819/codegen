# 今後のプラン

## Step.1
`./doc/description.md` に記載されたプロジェクトのフォルダ構成に従ったディレクトリツリーを準備する

## Step.2
`./doc/description.md` の仕様に基づき、アプリケーション全体で利用する共通コンポーネント（ヘッダー、メッセージエリア、ボタン、各種フォーム入力部品など）を `src/common/components` 配下に実装する。

## Step.3
`./doc/swagger/openapi.yaml` を参照してサンプルとしてEmployeesに対するメタデータJSONを作成してみる（`metadata/dynamic` 配下に定義する）

## Step.4
ソース自動生成は一旦考えず、素直にシンプルにEmployeesに対するCRUD操作ができるReact画面を実装する（`src/dynamic` 配下に実装する）
※テンプレートエンジンが生成すべき成果物を先に作成して動作確認する
※この時、メニューやルーティングに関する考慮を実装する
※API通信や状態管理のロジックは、再利用可能なカスタムフック（`useSearch`, `useDetail`など）として `src/common/hooks` に切り出すことを意識する

## Step.5
Step.4で実装したソースをテンプレートで生成できるよう、Handlebarsのテンプレート定義に落とし込む

## Step.6
Step.5で定義したテンプレートを使用してStep.4で実装したソースコードを生成できるよう生成スクリプトを実装する

## Step.7
Step.4で実装したソースを破棄して生成スクリプトでビルド時に生成し、同じ画面が動作できているか確認する

## Step.8
Productsのメタデータを作成する（`metadata/static` 配下に定義する）

## Step.9
Productsのメタデータからソースを生成する（手動実行して `src/static` 配下に出力する）

## Step.10
static/dynamicともに正常に動作することを確認する

## Step.11
Departmentsについても同様にdynamicとして実装し、動作確認する