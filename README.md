# ![GitHub](https://img.shields.io/github/license/teobler/spider-cobweb.svg?color=blue&style=plastic) ![npm](https://img.shields.io/npm/v/spider-cobweb.svg?color=blue&style=plastic) ![CircleCI branch](https://img.shields.io/circleci/project/github/teobler/spider-cobweb/master.svg?label=circleci&style=plastic) ![Coveralls github branch](https://img.shields.io/coveralls/github/teobler/spider-cobweb/master.svg?style=plastic) ![build action](https://github.com/teobler/spider-cobweb/workflows/build%20&%20test/badge.svg)

## 原则

1. 所有组件不得存储数据（state），只能从外部接受数据（props），并把数据的变化用事件的形式发出（event）。如果一定要存储数据，必须由用户开启此功能。
2. 所有组件不得将容器的样式（尤其是宽高和zIndex）写死，必须可以接受外部 CSS 的覆盖。
3. 分支覆盖率不得低于 90%。
4. 除了 react、react-dom 和 prop-types，不得有其他外部依赖

## 命名

1. 普通变量只能用名词，如 let user = {...} 对，let getUser = {...} 错
    1. 不允许添加 info、data 后缀，如 userInfo 错，userData 错
2. 布尔变量只能有下面几种形式
    1. 形容词，如 active
    2. be 动词接名词，如 isAdmin
    3. 动词的完成态（也就是动词的ed形态），如 created, destroyed, broken 
    4. has 接名词，如 hasChildren
    5. 介词接名词，如 inCache
3. 函数
    1. 无参数函数用不及物动词，如 die()
    2. 有参数函数用及物动词，如 remove(id)
    3. 回调函数用介词（before、after、on）加动词或动词的名词形式，如 onClickButton、afterAnimation
        1. 不推荐用 handleClick
    4. getter/setter用名词形式，如 person.name
    5. 钩子函数跟 React 风格统一，用表时态的动词，如 willAnimate, didAnimate
4. 缩写
    1. 禁止任何缩写，如 cnt 错，cls 错，btn 错，str 错
    2. 如果某个缩写是行业共识，则可以使用，如 html、dom
        1. 但是如果这些缩写需要大写，请只大写第一个字母，如 renderHtml 对，renderHTML 错
    0. 禁止用 2 表示 to，如 string2Date 必须写成 stringToDate

## commit message
commit message采用简易版的Angular团队规范，在明确改动的同时方便生成change log

1. feat：新功能（feature）
2. fix：修补bug
3. docs：文档（documentation）
4. style： 格式（不影响代码运行的变动）
5. refactor：重构（即不是新增功能，也不是修改bug的代码变动）
6. test：增加测试
7. chore：构建过程或辅助工具的变动

commit采用小步提交原则，一句话的commit message需要将清楚该次commit做了什么改动
