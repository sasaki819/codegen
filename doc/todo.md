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
