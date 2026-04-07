export default `/* Claude Like 亮色主题
 * Anthropic Claude 风格，温暖衬线体
 */
:root {
  --cl-text-color: #2b2621;
  --cl-heading-color: #1c1815;
  --cl-bg-color: #faf9f5;
  --cl-accent-color: #bc6a3a;
  --cl-accent-hover: #9d552d;
  --cl-border-color: #ddd5ca;
  --cl-control-text: #72695e;
  --cl-font-body: "Anthropic Serif", Georgia, "Times New Roman", "Songti SC", "Noto Serif CJK SC", "PingFang SC", serif;
  --cl-font-ui: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Segoe UI", sans-serif;
  --cl-font-mono: Menlo, Monaco, "SF Mono", Consolas, monospace;
  --cl-code-bg: #fcfcfa;
  --cl-code-text: #1c1815;
  --cl-code-border: #e9e2d8;
  --cl-code-muted: #6f665d;
  --cl-code-keyword: #7b2ff7;
  --cl-code-string: #2f8f2f;
  --cl-code-number: #c06a2a;
  --cl-code-symbol: #2c5ec6;
  --cl-inline-code-color: #b14a40;
  --cl-inline-code-bg: #f2eeea;
  --cl-inline-code-border: #d7cec5;
  --cl-quote-bg: #f3ede5;
  --cl-quote-border: #d8cbbb;
  --cl-quote-text: #625950;
  --cl-table-border: #cbb9a6;
  --cl-table-row-border: rgba(114, 105, 94, 0.26);
  --cl-table-hover: rgba(188, 106, 58, 0.05);
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
}
/* 有序列表 */
#nice ol {
  padding-left: 1.45rem;
  margin: 0.78em 0;
}
/* 列表内容 */
#nice li section {
  padding-left: 0.15rem;
  margin: 0;
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
}
/* 加粗斜体 */
#nice em strong {
}
/* 删除线 */
#nice del {
}
/* 分隔线 */
#nice hr {
  height: 1px;
  background-color: var(--cl-border-color);
  border: 0 none;
  overflow: hidden;
  opacity: 0.75;
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
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45);
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
#nice table tr th,
#nice table tr td {
  border: 0;
  padding: 12px 18px 12px 0;
  text-align: left;
  font-size: 0.93rem;
  line-height: 1.56;
  font-family: var(--cl-font-body);
  border-bottom: 1px solid var(--cl-table-row-border);
}
/* 表头 */
#nice table thead tr th {
  font-weight: 600;
  color: var(--cl-heading-color);
  border-bottom: 1px solid var(--cl-table-border);
  font-variant-numeric: lining-nums tabular-nums;
}
/* 表格单元格 */
#nice table tbody tr td {
  font-weight: 400;
  font-variant-numeric: lining-nums tabular-nums;
  vertical-align: top;
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
}
/* 参考资料编号 */
#nice .footnote-num {
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
