const posts = [
  {
    id: "frontend-performance-essentials",
    title: "前端性能优化的 7 个关键点",
    date: "2026-09-18",
    tags: ["前端", "性能", "实践"],
    summary: "从网络、渲染和资源管理三个角度，梳理提升页面体验的实际策略。",
    content: `
# 前端性能优化的 7 个关键点

> 好的性能不是在追求速度本身，而是在用户感知中减少等待和不确定性。

## 1. 先识别真正的瓶颈

在做任何优化之前，最重要的是先找到主要的性能拖慢因素。常见检查方式包括：

- 使用 Lighthouse 评估 Core Web Vitals
- 观察资源加载顺序
- 检查网络请求是否有重复或冗余

```bash
npm run build
npx lighthouse https://example.com --preset=desktop
```

## 2. 优化图片和媒体资源

通过响应式图片、懒加载和 WebP/AVIF 这类格式，能够显著减少首屏成本。

```html
<img src="hero.webp" alt="Hero" loading="lazy" />
```

## 3. 减少阻塞渲染的脚本

把非关键脚本延迟，优先保留用户需要立即看到的内容。在很多场景中，首屏渲染比“更强的交互能力”更关键。

## 4. 合理缓存资源

使用 HTTP cache、服务端缓存和静态资源版本号，降低重复请求的成本。静态站点尤其适合做长缓存策略。

## 5. 避免过多的重绘与重排

在 DOM 结构复杂时，频繁写入样式会造成大量布局计算。可以通过批量更新、减少DOM节点和使用 transform 做动画来优化。

## 6. 关注体验而不是单纯指标

性能不能只看数值，还要看：

- 首屏出现时间
- 交互响应速度
- 页面切换是否流畅

## 7. 持续监控，而非一次性优化

性能是一个持续迭代的过程。最好把 Lighthouse 和真实用户性能数据接入到评审流程中，让问题持续被发现。

---

## 结论

真正成熟的前端优化，是在用户感知层面提升体验，同时避免低价值的工程投入。先解决慢的路径，再优化细节，通常更有效。
`
  },
  {
    id: "markdown-blog-system",
    title: "从 Markdown 到博客页面的渲染方案",
    date: "2026-08-29",
    tags: ["Markdown", "前端", "工程化"],
    summary: "介绍一个从内容到页面的简单方案，适合静态博客和作品集项目。",
    content: `
# 从 Markdown 到博客页面的渲染方案

静态博客的核心问题往往不是“写作”，而是“如何让内容稳定、可维护、便于扩展”。

## 方案概览

一个常见的实现方式是：

1. 把文章内容保存在 Markdown 文件或统一数据源
2. 在前端使用 `marked` 这类库解析
3. 把标题提取成目录
4. 对代码块做语法高亮

```js
const markdown = '# Hello';
const html = marked.parse(markdown);
```

## 目录生成

文章目录最重要的价值，是帮助读者快速找到内容结构。推荐在渲染后扫描所有 `h1`、`h2`、`h3`，并生成导航项。

## 代码高亮

代码高亮能显著改善技术文档的可读性，Prism 或 Highlight.js 都是不错的选择。下面是一个简单的示例：

```css
pre code {
  display: block;
  padding: 1rem;
  border-radius: 12px;
}
```

## 实践建议

- 把内容和样式分离
- 保留标题层级清晰
- 对比不同文章的 tag 结构
- 让文章页支持移动端阅读

这类方案特别适合 GitHub Pages 这类静态托管平台，因为部署成本很低，也容易演进。
`
  },
  {
    id: "ui-design-principles",
    title: "做一个让人愿意停留的界面",
    date: "2026-07-10",
    tags: ["设计", "产品", "体验"],
    summary: "从信息层级、视觉节奏和交互反馈三个方向，谈可持续的界面设计原则。",
    content: `
# 做一个让人愿意停留的界面

很多人误以为“漂亮”是界面设计的核心，但真正影响使用体验的，是信息是否容易被理解，以及操作是否顺畅。

## 1. 优先清晰的层级

最有效的页面结构，通常来自于明确的阅读顺序：

- 标题
- 关键动作
- 解释信息
- 辅助操作

## 2. 不要让表单“抢走注意力”

用户真正想做的是目标行为，而不是理解每一项的设计逻辑。让交互变得显眼、明确和低认知负担，是提升转换率的重要方法。

## 3. 反馈要及时

点击、提交、切换状态都应该有明确反馈。如果用户看不出系统在响应，信任感会迅速下降。

```js
button.addEventListener('click', () => {
  button.textContent = '提交中...';
  button.disabled = true;
});
```

## 4. 一致性胜于“花哨”

重用设计语言，比反复设计新模式更靠谱。用户适应产品的速度，来自系统的一致性，而不是视觉炫技。

## 结论

好的界面从来不是“堆砌效果”，而是让用户理解、判断和行动更轻松。
`
  },
  {
    id: "personal-growth",
    title: "提升工程效率的一些真实经验",
    date: "2026-06-15",
    tags: ["成长", "方法论", "团队"],
    summary: "总结我在工程协作中逐步建立的几个效率原则，均来自真实项目反馈。",
    content: `
# 提升工程效率的一些真实经验

工程效率不是靠“加班”获得的，而是靠清晰边界、标准和反馈闭环。

## 1. 先定义输出，再开始设计

在需求进入开发前，最重要的是把“产出什么”讲清楚。否则越写越乱，越改越难。

## 2. 把重复动作标准化

组件库、脚手架、模版和代码规范，都是减少重复劳动的重要工具。

## 3. 从反馈里修正流程

往往最值得优化的，不是代码本身，而是沟通与协作节奏。小的迭代反馈，可以显著减少返工。

```bash
git checkout -b feature/refactor-ui
npm run lint
npm run test
```

## 4. 让“可见性”提升协作效率

状态同步、设计文档、任务跟踪和变更记录，都会让团队对整体进度更有掌控感。

## 结论

真正的效率，是在减少不必要的沟通成本、重复劳动和错误修正。工程能力的提升，最终体现在团队的节奏和输出质量上。
`
  }
];

const formatDate = (value) => {
  const date = new Date(value);
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
};

const getAllTags = () => {
  return [...new Set(posts.flatMap((post) => post.tags))];
};

const renderTagFilters = (selectedTag = "全部") => {
  const tagContainer = document.getElementById("tag-filters");
  if (!tagContainer) return;

  const allTags = ["全部", ...getAllTags()];
  tagContainer.innerHTML = allTags
    .map((tag) => {
      const activeClass = tag === selectedTag ? "active" : "";
      return `<button class="tag ${activeClass}" type="button" data-tag="${tag}">${tag}</button>`;
    })
    .join("");

  tagContainer.querySelectorAll(".tag").forEach((button) => {
    button.addEventListener("click", () => {
      const tag = button.dataset.tag;
      renderBlogPosts(tag);
      renderTagFilters(tag);
    });
  });
};

const renderBlogPosts = (selectedTag = "全部") => {
  const blogContainer = document.getElementById("blog-posts");
  if (!blogContainer) return;

  const filtered = selectedTag === "全部"
    ? posts
    : posts.filter((post) => post.tags.includes(selectedTag));

  blogContainer.innerHTML = filtered
    .map(
      (post) => `
        <article class="post-card">
          <div class="thumb" aria-hidden="true"></div>
          <div class="post-body">
            <div class="meta-line">
              <span>${formatDate(post.date)}</span>
              <span>${post.tags.length} 个标签</span>
            </div>
            <h3><a href="post.html?id=${post.id}">${post.title}</a></h3>
            <p>${post.summary}</p>
            <div class="tag-list">
              ${post.tags
                .map((tag) => `<span class="tag">${tag}</span>`)
                .join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");
};

const renderLatestPosts = () => {
  const container = document.getElementById("latest-posts");
  if (!container) return;

  const latest = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
  container.innerHTML = latest
    .map(
      (post) => `
        <article class="post-card">
          <div class="thumb" aria-hidden="true"></div>
          <div class="post-body">
            <div class="meta-line">
              <span>${formatDate(post.date)}</span>
              <span>${post.tags[0]}</span>
            </div>
            <h3><a href="post.html?id=${post.id}">${post.title}</a></h3>
            <p>${post.summary}</p>
            <div class="tag-list">
              ${post.tags
                .map((tag) => `<span class="tag">${tag}</span>`)
                .join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");
};

const renderArticle = () => {
  const articleRoot = document.getElementById("article-content");
  const tocRoot = document.getElementById("article-toc");
  if (!articleRoot || !tocRoot) return;

  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");
  const post = posts.find((item) => item.id === postId) || posts[0];

  const html = marked.parse(post.content);
  articleRoot.innerHTML = `
    <div class="article-top">
      <p class="eyebrow">Article</p>
      <h1>${post.title}</h1>
      <div class="meta-line">
        <span>${formatDate(post.date)}</span>
        <span>${post.tags.join(" / ")}</span>
      </div>
      <div class="meta-tags">
        ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
    <div class="article-body">${html}</div>
  `;

  const headings = articleRoot.querySelectorAll("h1, h2, h3");
  const tocItems = Array.from(headings).map((heading, index) => {
    const level = Number(heading.tagName.substring(1));
    const id = heading.id || `section-${index + 1}`;
    heading.id = id;
    return `<a class="level-${level}" href="#${id}">${heading.textContent}</a>`;
  });

  tocRoot.innerHTML = tocItems.join("");

  if (window.Prism) {
    document.querySelectorAll("pre code").forEach((element) => {
      Prism.highlightElement(element);
    });
  }
};

const initProjectsPage = () => {
  const projectGrid = document.querySelector(".project-grid");
  if (!projectGrid) return;

  const projects = [
    {
      title: "设计系统文档站",
      description: "为团队构建统一的组件指南与设计语义，提升迭代效率和前端一致性。",
      link: "#"
    },
    {
      title: "Markdown 博客模板",
      description: "支持文章列表、标签筛选、代码高亮和目录导航的静态博客方案。",
      link: "#"
    },
    {
      title: "企业数据看板",
      description: "将复杂运营指标进行聚合展示，提升决策速度和可视化表达。",
      link: "#"
    }
  ];

  projectGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-visual" aria-hidden="true"></div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-links">
            <span>Explore</span>
            <a href="${project.link}">↗</a>
          </div>
        </article>
      `
    )
    .join("");
};

document.addEventListener("DOMContentLoaded", () => {
  renderLatestPosts();
  renderBlogPosts();
  renderTagFilters();
  renderArticle();
  initProjectsPage();
});
