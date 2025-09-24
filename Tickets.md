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