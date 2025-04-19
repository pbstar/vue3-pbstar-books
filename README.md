vue3-pbstar-books 是一个图书主题的 pc 端网站，该项目有前台（首页、全部书籍页、书籍分类页、书籍详情页、关于页和登录页）和后台（图书管理）两个模块采用 Vue3、Element-Plus、TypeScript、Pinia、Vite 和 json-server 等技术。

## 一、项目要求

![请添加图片描述](https://i-blog.csdnimg.cn/direct/d470c97535054c008976d9c3fdf867da.jpeg)

## 二、页面截图

### 1.前台（首页、登录页）

![请添加图片描述](https://i-blog.csdnimg.cn/direct/2b8400d20b0746f4b727e708857cf2f6.jpeg)
![请添加图片描述](https://i-blog.csdnimg.cn/direct/43155ee487174c918830dd77b41b882b.jpeg)

### 2.后台（图书管理）

![请添加图片描述](https://i-blog.csdnimg.cn/direct/654744a9974f418fa325c2a0f99e0c99.jpeg)

## 三、开发指南

### 1.项目准备

项目 GitHub 地址：[https://github.com/pbstar/vue3-pbstar-books](https://github.com/pbstar/vue3-pbstar-books)【记得点个免费 start 哦】
基础版（没有登录以及后台）：[https://github.com/pbstar/vue3-pbstar-books/releases/tag/%E5%9F%BA%E7%A1%80%E7%89%88](https://github.com/pbstar/vue3-pbstar-books/releases/tag/%E5%9F%BA%E7%A1%80%E7%89%88)

### 2.下载代码

```
1.nodejs环境要求
nodejs版本要求：18+
2.从GitHub上克隆项目
git clone https://github.com/pbstar/vue3-pbstar-books.git
```

### 3.启动项目

```
1.进入项目目录
cd vue3-pbstar-books
2.安装依赖
npm install
3.运行项目前端模块
npm run dev
4.运行项目后端模块
npm run start
```

### 4.项目结构

```
├── public             # 静态资源
├── server             # 服务端模块
│ ├── public           # 静态资源
│ └── db.json          # 数据库文件
├── src                # 源代码
│ ├── api              # 接口
│ ├── assets           # 静态资源
│ ├── components       # 组件
│ ├── router           # 路由
│ ├── stores           # 状态管理
│ ├── views            # 所有页面
│ ├── App.vue          # 根页面
│ └── main.ts          # 入口文件
├── .env               # 全局配置文件
├── .gitignore         # git配置文件
├── index.html         # html入口文件
├── vite.config.ts     # vite配置
└── package.json       # package配置
```
