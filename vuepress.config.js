import { defineUserConfig, defaultTheme } from 'vuepress';
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'

export default defineUserConfig({
  base: '/blog',
  plugins: [
    backToTopPlugin(),
    nprogressPlugin(),
  ],
  theme: defaultTheme({
    lastUpdated: false,
    contributors: false,
    // sidebar: false,

    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'front-end',
        link: '/front-end/',
      },
      // {
      //   text: 'FE',
      //   children: [
      //     {
      //       text: 'home',
      //       link: '/front-end/index.html',
      //       activeMatch: '/front-end/index.html',
      //     },
      //     {
      //       text: 'js-base',
      //       link: '/front-end/js-base',
      //       activeMatch: '/front-end/js-base',
      //     },
      //     {
      //       text: 'es6',
      //       link: '/front-end/es6',
      //       activeMatch: '/front-end/es6',
      //     },
      //   ],
      // },
      // 控制元素何时被激活
      {
        text: 'algorithm and data structure',
        link: '/algorithm-and-data',
      },
    ],
  })
});
