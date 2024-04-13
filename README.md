vue3-pbstar-books是一个图书主题的pc端网站，该项目有首页、全部书籍页、书籍分类页、书籍详情页和关于页五个页面。该方案结合了 Vue3、Element-Plus、TypeScript、Pinia 和 Vite 等先进技术，实现高效的页面布局、状态管理和构建体验。同时，后端采用基于 json-server 提供数据接口服务。
## 0.项目截图
### 0.1 首页
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/00f189587c254df79f0dcfa5ea2ec6e5.png)
### 0.2 全部图书
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/c1c61d7c05bc4b5a8477e318836cfa74.png)
### 0.3 图书详情
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/2e5141562dd149eebe3f3530821dfc06.png)

## 1.项目准备
项目GitHub地址：[https://github.com/pbstar/vue3-pbstar-books](https://github.com/pbstar/vue3-pbstar-books)
## 2.安装项目

```
1.nodejs环境要求
nodejs版本要求：18+
2.从GitHub上克隆项目
git clone https://github.com/pbstar/vue3-pbstar-books.git
```
## 3.启动项目
### 3.1 前端模块

```
1.进入项目目录
cd vue3-pbstar-books
2.安装依赖
npm install
3.运行项目前端模块
npm run dev
4.打包项目前端模块（非必须）
npm run build
```
### 3.2 后端模块

```
1.进入项目目录
cd vue3-pbstar-books
cd server
2.运行项目后端模块
json-server db.json
```
## 4.项目目录结构

```
├── public             # 静态资源
├── server             # 服务端模块
│ ├── public           # 静态资源
│ └── db.json          # 服务端入口文件 
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
