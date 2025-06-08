---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Lunari"
  text: "嵌入式开发学习文档"
  tagline: 点亮一个LED，也可能是点亮一整个人生
  actions:
    - theme: brand
      text: 开始学习
      link: /getting-started/introduction
    - theme: alt
      text: GitHub
      link: /#

features:
  - title: 嵌入式基础
    details: 配备图文讲解，从点亮第一个 LED 开始，带你逐步掌握 GPIO、串口、定时器等核心原理，打好扎实基础。
  - title: 项目实践
    details: 每个知识点都结合图文示例与真实项目应用，帮你建立开发思维，贴近企业一线的工作流程与需求。
  - title: 技术思想
    details: 技术不只是技能，更是主体意识的体现。我们通过图文内容，探讨开源、自由与共建的价值，让学习成为深度参与的过程。

---

## 🛠 技术栈

<TechStack />

---

<script setup>
import TechStack from "./.vitepress/theme/components/TechStack.vue"
</script>