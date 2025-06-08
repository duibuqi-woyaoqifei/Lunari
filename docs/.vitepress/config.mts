import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "开源共享，助力技术成长 - Lunari",
  description: "Embedded development documentation",
  head: [
    ['link', { rel: 'icon', href: '/lunari.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      label: '目录'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '入门指南', link: '/getting-started/introduction', activeMatch: '/getting-started/' },
      { text: '项目实践', link: '/projects/project1_light_up_led', activeMatch: '/projects/' },
      { text: '常见问题', link: '/faq/installation', activeMatch: '/faq/' }
    ],
    logo: '/logo.png',
    siteTitle: '',
    sidebar: {
      '/getting-started/': [
        {
          text: '介绍',
          collapsed: false,
          items: [
            { text: '初学门槛', link: '/getting-started/introduction' },
            { text: '什么是嵌入式开发', link: '/getting-started/what_is_embedded' },
            {
              text: '基础知识',
              collapsed: false,
              items: [
                { text: '硬件基础', link: '/getting-started/basics/hardware' },
                { text: '软件基础', link: '/getting-started/basics/software' },
                { text: 'STM32', link: '/getting-started/basics/stm32' },
              ]
            }
          ]
        },
        {
          text: '准备工作',
          collapsed: false,
          items: [
            {
              text: '安装',
              collapsed: false,
              items: [
                { text: '安装VS Code', link: '/getting-started/preparation/install/VS_code' },
                { text: '安装GCC ARM Embedded', link: '/getting-started/preparation/install/gcc_arm' },
                { text: '安装STM32CubeMX', link: '/getting-started/preparation/install/STM32CubeMX' },
                { text: '安装OpenOCD', link: '/getting-started/preparation/install/OpenOCD' },
              ]
            },
            { text: '硬件连接', link: '/getting-started/preparation/hardware_connection' },
            { text: '初始化项目', link: '/getting-started/preparation/init_project' },
            { text: 'VS Code配置', link: '/getting-started/preparation/vscode_config' },
          ]
        }
      ],
      '/projects/': [
        {
          text: '项目实践',
          items: [
            { text: '项目1：LED点亮', link: '/projects/project1_light_up_led' },
            { text: '项目2：传感器读取', link: '/projects/project2' }
          ]
        }
      ],
      '/faq': [
        {
          text: '常见问题',
          items: [
            { text: '安装问题', link: '/faq/installation' },
            { text: '调试技巧', link: '/faq/debugging' },
            { text: '性能优化', link: '/faq/performance' }
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
