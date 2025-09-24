使い方：
  以下のサンプルブロックをコピーしてチケットを追加、status等を随時更新しながら対応状況を管理する。
  更新の際はupdatedAtを上書きすること。
<!-- サンプルここから -->
# CSVダウンロードAPI実装（/feature.id/download）

---
id: T-YYYYMMDD-XXX
status: wip         # wip|waiting|pending|review|done|cancelled
priority: P1           # P0|P1|P2|P3
owner: sasaki
due: 2025-09-30
labels: [backend, csv, api]
deps: []
blocks: [T-20250924-002]
estimate: 6h
createdAt: 2025-09-24
updatedAt: 2025-09-24
pr: []
issue: []
---

## Goal
- JSON要求→CSV応答の `POST /<feature.id>/download` を提供する

## Acceptance Criteria
- [ ] `Content-Disposition: attachment; filename="<feature.id>_YYYYMMDD_HHmmss.csv"`
- [ ] `Content-Type: text/csv; charset=UTF-8`、BOM=ON、LF、区切り`,`
- [ ] 100,000行超過で 400 JSON（code/message/limit）
- [ ] `columns/orderBy/order/includeHistory` を反映

## Plan / Subtasks
- [ ] DTO定義（入力検証）
- [ ] サービス実装（クエリ→CSVストリーム）
- [ ] CSVエンコーダ（BOM/囲み/エスケープ）
- [ ] E2E（ヘッダ/ファイル名/制限超過）
- [ ] Readme更新リンク

## Test Plan
- 正常: 小規模でダウンロード可
- 制限: limit+1 → 400 JSON
- フォーマット: クォート/カンマ/改行のエスケープ

## Notes
- Readmeの「CSV仕様」「API仕様」に準拠
- 非同期は不要方針

## Result
### 変更
- M `src/.../download.ts`
- A `src/.../csv.ts`
### 確認
- ブラウザ操作で既定ダウンロードフォルダに自動保存
### テスト
- E2E 4件成功

## Changelog
- 2025-09-24: 初稿
<!-- サンプルここまで -->

# 生成コア実装（Handlebarsテンプレート適用ロジック）

---
id: T-20250924-002
status: pending         # wip|waiting|pending|review|done|cancelled
priority: P0            # P0|P1|P2|P3
owner: sasaki
due: 
labels: [generator, templates]
deps: []
blocks: [T-20250924-003, T-20250924-004]
estimate: 8h
createdAt: 2025-09-24
updatedAt: 2025-09-24
pr: []
issue: []
---

## Goal
- JSONメタデータからページ/部品のソースを生成する共通ロジックを実装する

## Acceptance Criteria
- [ ] Handlebarsの部分テンプレート/ヘルパを登録できる
- [ ] メタデータの `feature`/`resource` を入力に、テンプレートへ安全に流し込める
- [ ] 出力パスを可変（dynamic/static）で切替可能

## Plan / Subtasks
- [ ] テンプレート読み込み/キャッシュ
- [ ] ヘルパ群（ifEq, json, upper, dateFmt 等）
- [ ] 出力ライター（上書き/スキップ戦略）
- [ ] 単体テスト

## Test Plan
- サンプルメタデータで各ページの生成が成功
- 差分がない場合に再生成しても上書き発生しない

## Notes
- 将来のメタデータ拡張に備え、未使用フィールドは無視

## Result
- 生成コア `scripts/generate_code.ts`

## Changelog
- 2025-09-24: 初稿


# Viteプラグイン（自動生成）実装

---
id: T-20250924-003
status: pending
priority: P1
owner: sasaki
due: 
labels: [generator, vite]
deps: [T-20250924-002]
blocks: []
estimate: 6h
createdAt: 2025-09-24
updatedAt: 2025-09-24
pr: []
issue: []
---

## Goal
- ビルド時に `metadata/dynamic` を走査して `src/dynamic` に自動生成する

## Acceptance Criteria
- [ ] Vite起動/ビルド時に自動生成が走る
- [ ] 変更検知（watch）で再生成
- [ ] ログ抑制とエラー表示が分かりやすい

## Plan / Subtasks
- [ ] プラグイン雛形
- [ ] ファイル監視
- [ ] generate_code 呼び出し

## Result
- `scripts/generate_dynamic_vite_plugin.ts`


# CLI（手動生成）実装

---
id: T-20250924-004
status: pending
priority: P1
owner: sasaki
due: 
labels: [generator, cli]
deps: [T-20250924-002]
blocks: []
estimate: 4h
createdAt: 2025-09-24
updatedAt: 2025-09-24
pr: []
issue: []
---

## Goal
- `metadata/static` を読み取り `scripts/dist` に生成するCLIを提供

## Acceptance Criteria
- [ ] `pnpm gen:static` で実行可能
- [ ] 出力先のクリーン/上書き挙動を選択可

## Result
- `scripts/generate_static_cli.ts`


# 共通UIコンポーネント実装（ヘッダ/メッセージ/アクション/TOPへ）

---
id: T-20250924-005
status: pending
priority: P1
owner: sasaki
due: 
labels: [frontend, ui]
deps: []
blocks: []
estimate: 10h
createdAt: 2025-09-24
updatedAt: 2025-09-24
pr: []
issue: []
---

## Goal
- 画面共通部品を `src/common/components` に実装

## Acceptance Criteria
- [ ] ヘッダ（左/中/右・ログアウト/ヘルプ）
- [ ] メッセージエリア（level別色・削除ボタン・非表示制御）
- [ ] アクションエリア（横並び）
- [ ] TOPへボタン（スクロール時のみ表示）

## Result
- `src/common/components/*`


# 検索ページ実装（フォーム/一覧/ページネーション）

---
id: T-20250924-006
status: pending
priority: P0
owner: sasaki
due: 
labels: [frontend, page]
deps: [T-20250924-005]
blocks: []
estimate: 16h
createdAt: 2025-09-24
updatedAt: 2025-09-24
pr: []
issue: []
---

## Goal
- 検索フォームと結果表、操作列、ページネーションを実装

## Acceptance Criteria
- [ ] 主キー入力、`allowLikeSearch`/`hasHistory` のチェック
- [ ] No列/操作列（明細/コピー/更新/削除）
- [ ] ページサイズ 25/50/100（デフォルト25）
- [ ] 印刷ボタンの挙動（ページ全体印刷）

## Result
- `src/*/pages/index.tsx`


# CRUD個別ページ実装（create/detail/update/delete）

---
id: T-20250924-007
status: pending
priority: P1
owner: sasaki
due: 
labels: [frontend, page]
deps: [T-20250924-005]
blocks: []
estimate: 14h
createdAt: 2025-09-24
updatedAt: 2025-09-24
pr: []
issue: []
---

## Goal
- 新規/明細/更新/削除ページのテンプレートと動作

## Acceptance Criteria
- [ ] 入力不可項目の扱い
- [ ] 戻るで検索条件/結果の復元
- [ ] 削除ページはボタンのみ差替え

## Result
- `src/*/pages/{create,detail,update,delete}.tsx`


# 入力コンポーネント/型バリデーション実装（Text/Code/Integer/Decimal/Date 等）

---
id: T-20250924-008
status: pending
priority: P0
owner: sasaki
due: 
labels: [frontend, validation]
deps: []
blocks: []
estimate: 18h
createdAt: 2025-09-24
updatedAt: 2025-09-24
pr: []
issue: []
---

## Goal
- `resource.type` ごとの入力/表示/検証を実装（zod + react-hook-form）

## Acceptance Criteria
- [ ] Text/MultiText/Code（regexp, maxLen/minLen）
- [ ] Integer/Decimal（precision/scale, comma表示, 接頭/接尾）
- [ ] Date/DateFromTo（JST・表示/IFフォーマット・From<=To）
- [ ] TwoState/Radio/StaticList/DynamicList（url取得/マッピング）

## Result
- `src/common/components/inputs/*`


# サービス層/通信実装（axios + tanstack-query）

---
id: T-20250924-009
status: pending
priority: P0
owner: sasaki
due: 
labels: [frontend, api]
deps: []
blocks: []
estimate: 10h
createdAt: 2025-09-24
updatedAt: 2025-09-24
pr: []
issue: []
---

## Goal
- エンドポイントアクセス、スピナー制御、共通エラーフォーマット処理

## Acceptance Criteria
- [ ] 検索/登録/更新/削除のIF（クエリ主キー）
- [ ] 正常時レスポンス標準形式に準拠
- [ ] エラーJSON `{code,message,details}` のハンドリング

## Result
- `src/common/services/http.ts`, `src/*/services/*.ts`


# CSVダウンロード/アップロード機能（フロント）

---
id: T-20250924-010
status: pending
priority: P1
owner: sasaki
due: 
labels: [frontend, csv]
deps: [T-20250924-009]
blocks: []
estimate: 8h
createdAt: 2025-09-24
updatedAt: 2025-09-24
pr: []
issue: []
---

## Goal
- ダウンロード要求JSON→CSV保存、アップロードmultipart→結果JSON表示

## Acceptance Criteria
- [ ] `Content-Disposition: attachment` による自動保存
- [ ] 20MB超で413表示
- [ ] 集計結果と行別エラーの提示

## Result
- `src/*/pages/index.tsx`（CSVボタン連携）


# ルーティング/メニュー自動生成

---
id: T-20250924-011
status: pending
priority: P2
owner: sasaki
due: 
labels: [frontend, routing]
deps: [T-20250924-003, T-20250924-004]
blocks: []
estimate: 6h
createdAt: 2025-09-24
updatedAt: 2025-09-24
pr: []
issue: []
---

## Goal
- ビルド時にページとメニュー配列をマージして最終ルーティングを生成

## Acceptance Criteria
- [ ] `feature.menu` 階層からメニューを構築
- [ ] dynamic/static をマージ
- [ ] ルート変更でページ遷移（検索/作成/明細/更新/削除）

## Result
- `src/common/routes/routes.tsx`, `src/dynamic_routes.ts`, `src/static_routes.ts`
