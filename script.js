const posts = [
  {
    id: "slow-thinking",
    title: "慢节奏下的清晰思考：如何更好地做设计和写作",
    date: "2026-09-22",
    tags: ["设计", "方法论", "写作"],
    summary: "在信息噪音越来越大的时代，如何让思考更清晰、表达更准确，是我一直在反复练习的事。",
    content: `
# 慢节奏下的清晰思考：如何更好地做设计和写作

> 我越来越意识到，真正可靠的判断往往来自于慢一点、观察多一点、表达稳一点。

## 1. 先理解问题，再急着给答案

很多时候，问题并不是“缺一个答案”，而是“看起来像问题，其实是边界没有讲清”。

设计和写作都一样：先把问题和目标说清楚，比赶着落一个方案更重要。这样做的好处，是后续的讨论与迭代都更顺。

## 2. 清晰来自于删减，而不是堆叠

当你说得越多，越容易让信息失去重量。好的文章和好的界面，都倾向于减少多余的噪音，让真正重要的东西更显眼。

```js
const goal = '让复杂信息更容易被理解';
const result = goal.replace(/复杂/g, '清晰');
console.log(result);
```

## 3. 让反馈循环更短

设计不是在桌面上“想一万次”，而是不断地让作品和用户之间形成对话。

- 先做草稿
- 观察接受度
- 再迭代细节

这样比一次性做大而全的方案，更容易找到真实问题。

## 4. 把写作当成思考工具

写作最有价值的地方，不是在于输出，而是在于把模糊的想法变成可校验的表达。你一旦开始写，就会看到问题的边界、逻辑漏洞和不一致之处。

## 5. 让细节真正服务于体验

页面中的留白、字距、层级、动画都不是“装饰”，而是帮助用户理解事物和行动的节奏。

---

## 结语

我想做的，不是最“炫”的作品，而是那些能让人愿意停留、愿意继续理解、愿意回头看的东西。
`
  },
  {
    id: "markdown-practice",
    title: "从 Markdown 到博客：一个适合静态站点的内容方案",
    date: "2026-08-17",
    tags: ["前端", "Markdown", "工程化"],
    summary: "用简单且稳妥的方式，把 Markdown 文档转换成可读、可维护、可扩展的博客内容页。",
    content: `
# 从 Markdown 到博客：一个适合静态站点的内容方案

一个适合个人博客或文档站的内容方案，核心价值在于“低维护 + 高可扩展”。

## 方案总览

通常我会把文章拆成几层：

1. 元数据：标题、日期、标签、摘要
2. 正文：Markdown 格式内容
3. 结构：目录生成与锚点链接
4. 表现：代码高亮、排版和响应式布局

```bash
npm install marked prismjs
```

## 为什么选 Markdown

Markdown 非常适合内容创作，因为它把文案编辑和结构表现分离开来，而且适合 GitHub Pages 这类静态站点的托管环境。

## 目录生成的思路

在滚动文章时，读取页面中的 `h1/h2/h3`，自动生成目录树。这样既有利于阅读，也方便后续加长文章时继续维护导航。

```js
const headings = document.querySelectorAll('h1, h2, h3');
headings.forEach((heading, index) => {
  heading.id = heading.id || `section-${index + 1}`;
});
```

## 代码高亮

技术文章最怕的，是难以阅读的代码块。Prism 这类工具能让代码结构更清晰，阅读体验会明显提升。

## 结论

如果你想搭建一个不依赖复杂后端的个人博客，这个方案已经足够稳妥：内容可维护，部署简单，跨平台兼容性高。
`
  },
  {
    id: "product-and-ui",
    title: "优秀产品，往往不是“功能很多”，而是“更容易被理解”",
    date: "2026-07-11",
    tags: ["产品", "设计", "体验"],
    summary: "从界面的层级、交互反馈和认知负担三个方面，谈如何做出更自然、更好的产品体验。",
    content: `
# 优秀产品，往往不是“功能很多”，而是“更容易被理解”

一个产品真正有价值，不一定是它有多少功能，而是用户是否知道该做什么、下一步该怎么做。

## 1. 让重要的信息先出现

用户在打开页面时，并不会仔细阅读每一块内容。最重要的内容需要在最容易看到的位置出现，并有明确的视觉层级。

## 2. 反馈不能“静默”

点击按钮后出现短暂的加载状态，表单提交完成后给出结果反馈，这些细节决定了用户是否信任你的界面。

```css
button {
  transition: transform 0.15s ease;
}

button:hover {
  transform: translateY(-1px);
}
```

## 3. 减少认知负担

很多复杂流程并不是因为功能太多，而是因为步骤太难理解。把流程拆成更小的动作，更容易让用户完成任务。

## 4. 一致性是最强的可用性工具

使用统一的颜色、字重、组件和反馈方式，可以让用户在很短时间内建立信任感。

---

## 结语

好产品和好界面，都是在“让用户最少思考”中达成的。真正难的，不是多做什么，而是知道什么该省略。
`
  },
  {
    id: "engineering-habit",
    title: "工程效率的本质：减少重复劳动和误判",
    date: "2026-06-08",
    tags: ["成长", "团队", "方法论"],
    summary: "长期来看，工程效率提升的关键，不是加班，而是把流程、沟通和反馈设计成更顺畅的状态。",
    content: `
# 工程效率的本质：减少重复劳动和误判

很多人把效率理解为“做得更快”，但真正有效的效率，往往是从减少重复和误判开始的。

## 1. 先明确交付目标

在做任何功能前，如果需求、边界和验收条件没有说清楚，后续的沟通成本会越来越高。

## 2. 标准化是放大效率的关键

代码模板、组件库、协作流程、任务模板，都会降低重复劳动。标准化解决的是“每次重新发明轮子”的问题。

```bash
git checkout -b feature/blog-layout
npm run lint
npm run build
```

## 3. 反馈越早越好

迭代节奏越短，误判越容易被及时纠正。界面、开发和产品之间如果能快速沟通，就更容易避免返工。

## 4. 把复杂问题拆成小步

复杂需求分拆以后，评估范围会更清晰，风险也更容易被识别。

---

## 结语

我越来越认可一个观点：好的工程效率，不是靠“更猛地输出”，而是靠更好的判断和更少的无效劳动。
`
  },
  {
    id: "city-cafe-notes",
    title: "城市里的咖啡店与写作日常",
    date: "2026-05-03",
    tags: ["生活", "观察", "随笔"],
    summary: "关于写作、安静的空间和人们在城市里寻找自己的节奏。",
    content: `
# 城市里的咖啡店与写作日常

在城市里，很多人都在寻找一个安静的地方。对我来说，写作最重要的，不是有多少灵感，而是是否有一个让我能停下来思考的场景。

## 1. 空间影响表达

咖啡馆里发出的声音、窗外的光线、桌上的杯子温度，都会影响我写作时的状态。好的空间并不一定特别美，而是足够让我停下来。

## 2. 写作是观察的延伸

我喜欢观察人如何在城市里生活，观察一个人慌忙、匆忙、想快点完成事情的样子，也观察那些愿意慢下来思考的人。

## 3. 节奏比效率更重要

很多创作都不是在“很忙”的状态下完成的，而是在你终于不再追赶时间时，事��自己浮出来。

---

## 结语

生活不是为了追赶，而是为了保留那些你愿意认真感受的片刻。
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

const getAllTags = () => [...new Set(posts.flatMap((post) => post.tags))];

const renderTagFilters = (selectedTag = "全部") => {
  const tagContainer = document.getElementById("tag-filters");
  if (!tagContainer) return;

  const allTags = ["全部", ...getAllTags()];
  tagContainer.innerHTML = allTags
    .map((tag) => {
      const active = tag === selectedTag ? "active" : "";
      return `<button class="tag ${active}" type="button" data-tag="${tag}">${tag}</button>`;
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
              ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");
};

const renderLatestPosts = () => {
  const latestContainer = document.getElementById("latest-posts");
  if (!latestContainer) return;

  const latest = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  latestContainer.innerHTML = latest
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
              ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
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
    ${marked.parse(post.content)}
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
    document.querySelectorAll("pre code").forEach((element) => Prism.highlightElement(element));
  }
};

const renderProjects = () => {
  const projectGrid = document.querySelector(".project-grid");
  if (!projectGrid) return;

  const projects = [
    {
      title: "组件文档站",
      description: "为产品与前端团队建立统一的设计语言和组件手册，提升协作效率和代码一致性。",
      link: "#"
    },
    {
      title: "内容型博客平台",
      description: "支持文章沉淀、标签筛选、目录导航与代码高亮的静态站点，适合长期写作和知识复用。",
      link: "#"
    },
    {
      title: "运营数据看板",
      description: "将业务数据转换为易读的决策视图，帮助团队在复杂信息中更快发现关键变化。",
      link: "#"
    },
    {
      title: "设计系统实践",
      description: "从原子设计到组件治理，帮助团队更快速建立可持续维护的前端体系。",
      link: "#"
    },
    {
      title: "个人品牌站",
      description: "结合写作、项目和作品展示，帮助创作者形成清晰且稳定的在线表达。",
      link: "#"
    },
    {
      title: "内容增长实验",
      description: "围绕用户行为、内容结构和信息设计展开持续优化，提升阅读体验和传播效率。",
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
  renderProjects();
});
