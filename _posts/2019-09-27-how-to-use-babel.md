---
layout: post
title: 바벨을 이용하여 컴파일 하기
date: 2019-09-27 17:00:00 +0900
description: 바벨을 설정 방법 및 config 파일들 설정
img: babel.png
fig-caption:
tags: [Javascript, babel, react, webpack]
---

## Babel을 실행하는 방법

- @babel/cli로 실행하기

- webpack에서 babel-loader로 실행하기

- ~~@babel/core를 직접 실행하기~~

  > 잘 사용하지 않을 것 같음

- ~~@babel/register로 실행하기~~

  > reactjs에서는 자주 사용하지 않으므로 제외

### @babel/cli로 실행하기

---

- 필수 설치 모듈

```bash
npm install @babel/cli @babel/core
```

> 하지만 실질적인 컴파일을 위해서는 plugin과 preset이 필요하다.

​

- plugin

```bash
npm install @babel/plugin-transform-arrow-functions babel/plugin-transform-template-literals babel/preset-react
```

예상

> @babel/plugin-transform-arrow-functions : arrow function을 위한 plugin
>
> @babel/plugin-transform-template-literals: \`hi this is \${name}` 과 같은 template literal 처리
>
> babel/preset-react : jsx 문법 변환

#### babel.config.js 작성

> Babel 6 까지는 .babelrc 파일로 설정값 관리, 7부터는 babel.config.js 파일로 관리

```javascript
const presets = ["@babel/preset-react"];
const plugins = [
  "@babel/plugin-transform-template-literals",
  "@babel/plugin-transform-arrow-functions",
];

module.exports = { presets, plugins };
```

- 실행

```bash
npx babel src.js --out dist.js
```

### webpack에서 babel-loader로 실행하기

---

- 필수 설치 모듈

```bash
npm install webpack webpack-cli babel-loader
```

#### webpack.config.js 작성

```javascript
const path = require("path");
module.exports = {
  entry: "./src.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "src.bundle.js",
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }],
  },
  optimization: { minimizer: [] },
};
```

> entry : bundle 할 파일들
>
> output : 결과 파일 경로와 파일명
>
> module: babel-loader가 babel.config.js 파일내용을 기반으로 바벨 설정하도록
>
> optimization : plugin을 추가해서 minimizer 설정 가능

- 실행

```bash
npx webpack
```
