export default `/* Claude Like 暗色主题
 * Anthropic Claude 风格，暗色温暖衬线体
 */
:root {
  --cl-text-color: #ddd4ca;
  --cl-heading-color: #f2e9df;
  --cl-bg-color: #151210;
  --cl-accent-color: #d59567;
  --cl-accent-hover: #efb892;
  --cl-border-color: #2f2924;
  --cl-control-text: #a7998b;
  --cl-font-body: "Anthropic Serif", Georgia, "Times New Roman", "Songti SC", "Noto Serif CJK SC", "PingFang SC", serif;
  --cl-font-ui: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Segoe UI", sans-serif;
  --cl-font-mono: Menlo, Monaco, "SF Mono", Consolas, monospace;
  --cl-code-bg: #1d1917;
  --cl-code-text: #e8dfd5;
  --cl-code-border: #332b25;
  --cl-code-muted: #9f8f81;
  --cl-code-keyword: #b899ff;
  --cl-code-string: #81cb82;
  --cl-code-number: #d9a56f;
  --cl-code-symbol: #89b1ea;
  --cl-inline-code-color: #e1a092;
  --cl-inline-code-bg: #241d19;
  --cl-inline-code-border: #3a3029;
  --cl-quote-bg: #1c1815;
  --cl-quote-border: #4c4037;
  --cl-quote-text: #d0c2b4;
  --cl-table-border: #5a4c41;
  --cl-table-row-border: rgba(232, 223, 213, 0.14);
  --cl-table-hover: rgba(213, 149, 103, 0.06);
}
/* 全局属性 */
#nice {
  font-family: var(--cl-font-body);
  color: var(--cl-text-color);
  background-color: var(--cl-bg-color);
  line-height: 1.62;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}
/* 段落 */
#nice p {
  margin: 0.78em 0;
  line-height: 1.62;
  color: var(--cl-text-color);
}
/* 一级标题 */
#nice h1 {
  font-size: 1.84em;
  font-weight: 600;
  color: var(--cl-heading-color);
  line-height: 1.16;
  margin-top: 0.35rem;
  margin-bottom: 0.7rem;
  font-family: var(--cl-font-body);
}
/* 二级标题 */
#nice h2 {
  font-size: 1.48em;
  font-weight: 600;
  color: var(--cl-heading-color);
  line-height: 1.2;
  margin-top: 1.45rem;
  margin-bottom: 0.7rem;
  font-family: var(--cl-font-body);
}
/* 三级标题 */
#nice h3 {
  font-size: 1.24em;
  font-weight: 600;
  color: var(--cl-heading-color);
  line-height: 1.32;
  margin-top: 1.45rem;
  margin-bottom: 0.7rem;
  font-family: var(--cl-font-body);
}
/* 四级标题 */
#nice h4 {
  font-size: 1.12em;
  font-weight: 600;
  color: var(--cl-heading-color);
  margin-top: 1.45rem;
  margin-bottom: 0.7rem;
  font-family: var(--cl-font-body);
}
/* 五级标题 */
#nice h5 {
  font-size: 1em;
  font-weight: 600;
  color: var(--cl-heading-color);
  margin-top: 1.45rem;
  margin-bottom: 0.7rem;
}
/* 六级标题 */
#nice h6 {
  font-size: 1em;
  font-weight: 600;
  color: var(--cl-control-text);
  margin-top: 1.45rem;
  margin-bottom: 0.7rem;
}
/* 无序列表 */
#nice ul {
  padding-left: 1.45rem;
  margin: 0.78em 0;
  color: var(--cl-text-color);
}
/* 有序列表 */
#nice ol {
  padding-left: 1.45rem;
  margin: 0.78em 0;
  color: var(--cl-text-color);
}
/* 列表内容 */
#nice li section {
  padding-left: 0.15rem;
  margin: 0;
  color: var(--cl-text-color);
}
/* 引用 */
#nice blockquote {
  border-left: 2px solid var(--cl-quote-border);
  background-color: var(--cl-quote-bg);
  padding: 0.55rem 1rem;
  color: var(--cl-quote-text);
  border-radius: 10px;
  margin: 0.78em 0;
}
/* 引用文字 */
#nice blockquote p {
  margin: 0;
  color: var(--cl-quote-text);
}
/* 目录链接 */
#nice .table-of-contents a {
  color: var(--cl-accent-color);
}
/* 链接 */
#nice a span {
  color: var(--cl-accent-color);
  text-decoration: none;
  border-bottom: none;
}
/* 加粗 */
#nice strong {
  font-family: var(--cl-font-ui);
  font-weight: 700;
  color: var(--cl-heading-color);
  letter-spacing: 0;
}
/* 斜体 */
#nice em {
  color: var(--cl-text-color);
}
/* 加粗斜体 */
#nice em strong {
  color: var(--cl-heading-color);
}
/* 删除线 */
#nice del {
  color: var(--cl-control-text);
}
/* 分隔线 */
#nice hr {
  height: 1px;
  background-color: var(--cl-border-color);
  border: 0 none;
  overflow: hidden;
  opacity: 0.8;
  margin: 26px 0;
}
/* 图片 */
#nice img {
  max-width: 100%;
  border-radius: 6px;
}
/* 图片描述文字 */
#nice figcaption {
  text-align: center;
  color: var(--cl-control-text);
  font-size: 0.9em;
}
/* 行内代码 */
#nice p code, #nice li code {
  font-family: var(--cl-font-mono);
  border: 1px solid var(--cl-inline-code-border);
  background-color: var(--cl-inline-code-bg);
  color: var(--cl-inline-code-color);
  border-radius: 999px;
  padding: 0.08em 0.42em 0.1em;
  font-size: 0.9em;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
}
/* 代码块 */
#nice pre code {
  font-family: var(--cl-font-mono);
  border: 1px solid var(--cl-code-border);
  background-color: var(--cl-code-bg);
  color: var(--cl-code-text);
  border-radius: 8px;
  padding: 0.9rem 1rem 0.85rem;
  font-size: 0.9em;
  display: block;
  line-height: 1.55;
  overflow-x: auto;
}
/* 表格 */
#nice table {
  width: 100%;
  border-collapse: collapse;
  border-top: 1px solid var(--cl-table-border);
  border-bottom: 1px solid var(--cl-table-border);
}
#nice table tr {
  background-color: transparent;
  border-top: 1px solid var(--cl-table-row-border);
}
#nice table tr:nth-child(2n) {
  background-color: rgba(255, 255, 255, 0.03);
}
#nice table tr th,
#nice table tr td {
  border: 1px solid var(--cl-table-row-border);
  padding: 12px 18px 12px 0;
  text-align: left;
  font-size: 0.93rem;
  line-height: 1.56;
  font-family: var(--cl-font-body);
  color: var(--cl-text-color);
}
/* 表头 */
#nice table thead tr th {
  font-weight: 600;
  color: var(--cl-heading-color);
  border-bottom: 1px solid var(--cl-table-border);
  background-color: transparent;
  font-variant-numeric: lining-nums tabular-nums;
}
/* 表格单元格 */
#nice table tbody tr td {
  font-weight: 400;
  font-variant-numeric: lining-nums tabular-nums;
  vertical-align: top;
}
/* 微信代码块 */
#nice .code-snippet__fix {
  color: var(--cl-code-text);
  background-color: var(--cl-code-bg);
  border-color: var(--cl-code-border);
}
#nice .code-snippet__fix .code-snippet__line-index li {
  color: var(--cl-control-text);
}
#nice .code-snippet__fix .code-snippet__line-index li::before {
  color: var(--cl-control-text);
}
/* 脚注文字 */
#nice .footnote-word {
  color: var(--cl-accent-color);
}
/* 脚注上标 */
#nice .footnote-ref {
  color: var(--cl-accent-color);
}
/* "参考资料"四个字 */
#nice .footnotes-sep:before {
  color: var(--cl-heading-color);
}
/* 参考资料编号 */
#nice .footnote-num {
  color: var(--cl-control-text);
}
/* 参考资料文字 */
#nice .footnote-item p {
  color: var(--cl-control-text);
  font-size: 0.9em;
}
/* 参考资料解释 */
#nice .footnote-item p em {
  color: var(--cl-text-color);
}
/* 行间公式 */
#nice .block-equation svg {
}
/* 行内公式 */
#nice .inline-equation svg {
}`;
