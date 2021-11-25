# Sequelize Sqlite Demo

## 简介

- 使用 sequelize orm 操作 sqlite，约定 model 文件存放路径及 model 格式
- 自动初始化 model，减少重复声明工作
  - 约定 model column 以驼峰命名，符合 js 对象属性命名规则，并转化为下划线方式补充 field，符合数据库 column 命名规则
  - 定制化主键 id，defaultValue=Date.now() + randomString(10)
- 建议先走一遍[入门教程](https://demopark.github.io/sequelize-docs-Zh-CN/core-concepts/getting-started.html)，了解基础的使用方式

## 项目结构

```bash
sequelize-sqlite
├── database
|  ├── config.js        # sequelize config
|  ├── index.js
|  ├── initModel.js     # auto init model
|  └── models           # sequelize models
|     └── sendLog.js
├── index.js
├── package.json
├── README.md
└── yarn.lock

```

## `/database` 目录

### index.js

sequelize 入口文件，约定扫描 `database/models` 里的文件自动初始化 model，同步表

### config.js

sequelize 实例配置文件，`models` 的路径在此修改

### initModel.js

自动初始化 model 的文件

### models 目录

存放 model 文件

## 其他资料

- [Sequelize 官方文档](https://sequelize.org/master/class/lib/model.js~Model.html)
- [Sequelize Docs 中文版](https://demopark.github.io/sequelize-docs-Zh-CN/)
