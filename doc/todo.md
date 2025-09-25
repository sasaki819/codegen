# [issue0001-サンプルタスク]

## status

<!-- META BEGIN -->

|name          |value                                   |description                                |
|--------------|----------------------------------------|-------------------------------------------|
|id            |issue0123                               |issue+連番4桁                               |
|title         |サンプルタスク                            |タスクの簡潔な概要                            |
|status        |open                                    |open / doing / review / done / cancel      |
|updated_at    |YYYY-MM-DD HH:mm                        |YYYY-MM-DD HH:mm                           |
|branch        |feature/issue0123-short-title           |ex)feature/issue0123-short-title           |
|last commit id|ceefcbaa024ae083a8ed92fb66d6ef0ec568e0da|ex)ceefcbaa024ae083a8ed92fb66d6ef0ec568e0da|
|related_issues|issue0001, issue0456                    |ex)issue0001, issue0456                    |

<!-- META END -->

## task

- これはタスク管理のサンプルです。  
- ここにタスクの実施内容を記載します。  
- statusはopen/doing/done/cancelのいずれかとします。  
- このセクションでタスクの内容を把握し、対応してください。  
- 対応が完了したらこのファイルのstatusを更新し、resultに対応結果を記入してください。  
- また、補足すべき事項が生じている場合はnoteに記載してください。

## result

- ここにタスクの実行結果を記載します。  
- xxxをyyyがzzzするように修正し、関連テストを実施、オールグリーンを確認済み。  
- 修正後ソースコードはfeature/xxxへプッシュ済み。  

### modified file list

- A src/some/source.ts
- M src/some/another/source.tsx
- D unnecessary/file.md

## note

- 補足事項があればここに記載します。  
- 特になければ「特になし」と記載します。  
- 上記「modified file list」には当該ファイルは含めません。  
- 新たなタスクを追加する際はissueNNNNの連番部分をインクリメントしたタスクIDでこのファイルの末尾に追記してください。
- 追記する際は前のタスクとの間に空行を１行設けてください。

# [issue0002-OpenAPI仕様書作成]

## status

<!-- META BEGIN -->

|name          |value                                   |description                                |
|--------------|----------------------------------------|-------------------------------------------|
|id            |issue0002                               |issue+連番4桁                               |
|title         |OpenAPI仕様書作成                         |タスクの簡潔な概要                            |
|status        |done                                    |open / doing / review / done / cancel      |
|updated_at    |2025-09-25 14:30                        |YYYY-MM-DD HH:mm                           |
|branch        |feature/issue0002-create-openapi-yaml   |ex)feature/issue0002-create-openapi-yaml   |
|last commit id|                                        |ex)ceefcbaa024ae083a8ed92fb66d6ef0ec568e0da|
|related_issues|                                        |ex)issue0001, issue0456                    |

<!-- META END -->

## task

- ReactアプリケーションのAPIモック作成のため、APIのIFをOpenAPIのYAML形式で作成する
- 作成したYAMLファイルを./api/swagger配下に格納する
- 仕様書には以下のAPIエンドポイントを３セット含める：
  - 検索（GET）
  - 登録（POST）
  - 更新（PUT）
  - 削除（DELETE）
  - CSVダウンロード（POST）
  - CSV一括登録（POST）
- 加えてプルダウンの選択肢を取得するための参照専用APIとして以下のエンドポイントを含める：
  - 種別取得（GET）　※ value と name のペアの配列をレスポンスするAPI
- description.mdに記載されているAPI仕様に基づいて作成する
- 完了後、feature/issue0002-create-openapi-yamlブランチとしてpushする

## result

- `description.md` のAPI仕様に基づき、OpenAPI仕様書(YAML)を作成しました。
- `api/swagger/openapi.yaml` としてファイルを配置しました。

### modified file list

- A api/swagger/openapi.yaml
- M doc/todo.md

## note

- 特になし

# [issue0003-APIサーバー作成]

## status

<!-- META BEGIN -->

|name          |value                                   |description                                |
|--------------|----------------------------------------|-------------------------------------------|
|id            |issue0003                               |issue+連番4桁                               |
|title         |APIサーバー作成                           |タスクの簡潔な概要                            |
|status        |done                                    |open / doing / review / done / cancel      |
|updated_at    |2025-09-25 17:00                        |YYYY-MM-DD HH:mm                           |
|branch        |feature/issue003-api-server             |ex)feature/issue0123-short-title           |
|last commit id|                                        |ex)ceefcbaa024ae083a8ed92fb66d6ef0ec568e0da|
|related_issues|issue0001, issue0456                    |ex)issue0001, issue0456                    |

<!-- META END -->

## task

- json-serverパッケージを使用してAPIのモックサーバーを作成する
- APIのIFは./doc/swagger/openapi.yamlに従う
- json-server用のdb.jsonは./api/db.jsonに格納する
- ./api/db.jsonに定義するデータはデータのバリエーションを意識して架空のemployeesデータを180件程度、departmentsデータを25件程度、Productsデータを75件程度用意する
- json-serverがcsvのダウロード／アップロードのAPIを提供できるよう、./api/middlewares/csv.jsを実装し、json-server起動時に--middlewaresに指定する
- json-serverをviteの開発サーバー（vite run dev）と同時に起動／停止させるためconcurrentlyを導入する
- package.jsonのscripts.devでconcurrentlyを使用してviteとjson-serverを同時に実行するよう設定する
- json-serverのデフォルトポート3000は一般的すぎるので3012に変更する
- concurrentlyの--kill-othersオプションを指定して、どちかのプロセスが停止したらもう一方も停止させる
- vite(localhost:5173)へapiリクエストしたらjson-server(localhost:3012)へプロキシするようvite.config.tsにproxyを設定する

## result

- `json-server`と`concurrently`をインストールしました。
- `api/db.json`にモックデータを生成しました。
- `api/middlewares/csv.js`にCSVダウンロード用のミドルウェアを実装しました。
- `package.json`の`dev`スクリプトを更新し、`concurrently`でViteとjson-serverを同時実行するようにしました。
- `vite.config.ts`にAPIリクエストをプロキシする設定を追加しました。

### modified file list

- M package.json
- M vite.config.ts
- A api/db.json
- A api/middlewares/csv.js
- M doc/todo.md

## note

- CSVアップロード機能は、`multer`のような追加ライブラリが必要なため、`csv.js`内では基本的な枠組みのみ実装し、未実装である旨をコンソールとレスポンスで返すようにしています。

# [issue0004-APIパスへの/apiプレフィックス導入]

## status

<!-- META BEGIN -->

|      name      |            value             |                 description                 |
| ------------ | -------------------------- | ----------------------------------------- |
|       id       |          issue0004           |                 issue+連番4桁                  |
|     title      |     APIパスへの/apiプレフィックス導入     |         APIエンドポイントのベースパスを/apiに統一する          |
|     status     |             done             |    open / doing / review / done / cancel    |
|   updated_at   |       2025-09-25 18:00       |              YYYY-MM-DD HH:mm               |
|     branch     | feature/issue0004-api-prefix |      ex)feature/issue0123-short-title       |
| last commit id |                              | ex)ceefcbaa024ae083a8ed92fb66d6ef0ec568e0da |
| related_issues |          issue0003           |           ex)issue0001, issue0456           |

<!-- META END -->

## task

- プロジェクト全体のAPIエンドポイント設計をより安全でスケーラブルにするため、すべてのAPIパスの先頭に`/api`プレフィックスを導入する。
- 以下のファイルを修正する。
  - **1. `vite.config.ts`**:
    - プロキシ設定を、個別パスの指定から`/api`への単一ルールに変更する。
  - **2. `doc/description.md`**:
    - `#APIエンドポイントについて` および `#API仕様` セクションに記載されているパスの例を、`/api`プレフィックス付きのものに更新する。（例: `/feature.id` -> `/api/feature.id`）
  - **3. `doc/swagger/openapi.yaml`**:
    - すべてのパス定義（`/employees`, `/products` 等）の先頭に`/api`を追加する。
  - **4. `api/middlewares/csv.js`**:
    - リクエストパスからリソース名を抽出するロジックを、新しいパス階層に合わせて修正する。（例: `req.path.split('/')[1]` -> `req.path.split('/')[2]`）
- 今後の実装（フロントエンドのAPI呼び出し、コード生成ロジック）は、この`/api`プレフィックスを前提とすることを開発チームに周知する。

## result

- タスク定義に基づき、関連ファイルすべてに対してAPIパスの先頭に`/api`プレフィックスを付与する修正を実施しました。

### modified file list

- M vite.config.ts
- M doc/description.md
- M doc/swagger/openapi.yaml
- M api/middlewares/csv.js
- M doc/todo.md

## note

- 特になし

# [issue0005-フォルダ構成準備]

## status

<!-- META BEGIN -->

|name          |value                                   |description                                |
|--------------|----------------------------------------|-------------------------------------------|
|id            |issue0005                               |issue+連番4桁                               |
|title         |フォルダ構成準備                          |タスクの簡潔な概要                            |
|status        |open                                    |open / doing / review / done / cancel      |
|updated_at    |                                        |YYYY-MM-DD HH:mm                           |
|branch        |feature/issue0005-prepare-directories   |ex)feature/issue0123-short-title           |
|last commit id|                                        |ex)ceefcbaa024ae083a8ed92fb66d6ef0ec568e0da|
|related_issues|                                        |ex)issue0001, issue0456                    |

<!-- META END -->

## task

- `plan.md` の Step.1 に基づき、`doc/description.md` に記載されたプロジェクトのフォルダ構成に従ったディレクトリツリーを準備する。

## result

- 

### modified file list

- 

## note

- 特になし

# [issue0006-共通コンポーネント実装]

## status

<!-- META BEGIN -->

|name          |value                                       |description                                |
|--------------|--------------------------------------------|-------------------------------------------|
|id            |issue0006                                   |issue+連番4桁                               |
|title         |共通コンポーネント実装                        |タスクの簡潔な概要                            |
|status        |open                                        |open / doing / review / done / cancel      |
|updated_at    |                                            |YYYY-MM-DD HH:mm                           |
|branch        |feature/issue0006-implement-common-components|ex)feature/issue0123-short-title           |
|last commit id|                                            |ex)ceefcbaa024ae083a8ed92fb66d6ef0ec568e0da|
|related_issues|                                            |ex)issue0001, issue0456                    |

<!-- META END -->

## task

- `plan.md` の Step.2 に基づき、`doc/description.md` の仕様に従って共通コンポーネントを `src/common/components` 配下に実装する。
- 対象コンポーネント:
  - ヘッダー
  - メッセージエリア
  - ボタン
  - 各種フォーム入力部品

## result

- 

### modified file list

- 

## note

- 特になし

# [issue0007-Employeesメタデータ作成]

## status

<!-- META BEGIN -->

|name          |value                                   |description                                |
|--------------|----------------------------------------|-------------------------------------------|
|id            |issue0007                               |issue+連番4桁                               |
|title         |Employeesメタデータ作成                   |タスクの簡潔な概要                            |
|status        |open                                    |open / doing / review / done / cancel      |
|updated_at    |                                        |YYYY-MM-DD HH:mm                           |
|branch        |feature/issue0007-create-employees-meta |ex)feature/issue0123-short-title           |
|last commit id|                                        |ex)ceefcbaa024ae083a8ed92fb66d6ef0ec568e0da|
|related_issues|                                        |ex)issue0001, issue0456                    |

<!-- META END -->

## task

- `plan.md` の Step.3 に基づき、`doc/swagger/openapi.yaml` を参照して、サンプルとしてEmployeesに対するメタデータJSONを作成する。
- 作成したファイルは `metadata/dynamic/employees.json` として配置する。

## result

- 

### modified file list

- 

## note

- 特になし
