# 障害当事者のためのハローワーク求職登録ガイド

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

障害のある求職者がハローワークのオンラインサービスを安心して利用できるよう作成された、包括的で使いやすいWebガイドです。

## 🌟 特徴

- **📱 レスポンシブデザイン** - PC・スマートフォン・タブレットに対応
- **♿ アクセシビリティ重視** - スクリーンリーダー対応、キーボードナビゲーション完備
- **🔗 直接連携** - ハローワーク公式サイトへの直接リンク
- **🎨 モダンなUI** - ダークモード対応、見やすいデザイン
- **⚡ 高パフォーマンス** - 最適化されたコードで快適な閲覧体験

## 📖 コンテンツ

### 主なセクション

1. **はじめに** - オンライン登録のメリットと概要
2. **サービス概要** - ハローワークインターネットサービスの説明
3. **事前準備** - 登録前に必要なものリスト
4. **登録ステップ** - 8章構成の詳細な登録手順
5. **窓口手続き** - 利用登録者になるための方法
6. **マイページ活用** - 求職者マイページの使い方
7. **プライバシー設定** - 公開・非公開設定の注意点
8. **FAQ** - よくある質問と回答
9. **まとめ** - 次のステップへの案内

### 障害当事者への配慮

- 障害種別・等級の入力方法
- 配慮事項の具体的な記載方法
- 支援機関との連携方法
- プライバシー保護の重要性

## 🚀 使い方

### ローカルで表示

1. リポジトリをクローン
```bash
git clone https://github.com/76kozo/hellowwork-guide.git
cd hellowwork-guide
```

2. ブラウザで `index.html` を開く
```bash
# ファイルを直接開く
open index.html

# または HTTP サーバーを起動
python3 -m http.server 8000
# http://localhost:8000 でアクセス
```

### GitHub Pages で公開

このサイトは GitHub Pages で公開されています：
**https://76kozo.github.io/hellowwork-guide/**

## 🛠️ 技術仕様

### フロントエンド技術

- **HTML5** - セマンティックマークアップ、ARIA対応
- **CSS3** - CSS Custom Properties、Flexbox、Grid
- **JavaScript (ES6+)** - モジュラー設計、クラスベース

### アーキテクチャ

```
├── index.html          # メインHTML
├── style.css           # 統合CSSファイル
├── app.js             # モジュール化されたJavaScript
└── README.md          # このファイル
```

#### JavaScript モジュール構成

- **NavigationManager** - ナビゲーション制御
- **ScrollManager** - スクロール動作管理
- **IntersectionManager** - セクション監視
- **FAQManager** - FAQ機能制御
- **App** - アプリケーション初期化

#### CSS設計

- **Design System** - 統一されたデザイントークン
- **Theme Support** - ライト/ダークモード対応
- **Responsive Design** - モバイルファースト設計
- **Accessibility** - 高コントラスト対応

## ♿ アクセシビリティ

### 対応項目

- ✅ **WCAG 2.1 AA準拠**
- ✅ **キーボードナビゲーション**
- ✅ **スクリーンリーダー対応**
- ✅ **高コントラストモード**
- ✅ **モーション低減対応**
- ✅ **フォーカス管理**

### ARIA実装

- `role` 属性による意味的構造
- `aria-label` でのラベル提供
- `aria-expanded` での状態表示
- `aria-describedby` での説明関連付け

## 🔗 関連リンク

- [ハローワークインターネットサービス](https://www.hellowork.mhlw.go.jp/)
- [求職者マイページ登録](https://www.hellowork.mhlw.go.jp/member/sy_mem_inputmethod.html)
- [厚生労働省 障害者雇用](https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/shougaishakoyou/)

## 📝 ライセンス

このプロジェクトは [MIT License](LICENSE) の下で公開されています。

## 🤝 コントリビューション

プルリクエストや issue の作成を歓迎します。改善提案がありましたら、お気軽にお知らせください。

### 開発に参加する場合

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📧 お問い合わせ

プロジェクトに関するご質問は、GitHub Issues でお願いします。

---

**このガイドが、障害のある求職者の就労支援に少しでも貢献できれば幸いです。**

> 🤖 このプロジェクトは [Claude Code](https://claude.ai/code) を使用して開発されました。