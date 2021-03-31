# 原神弹琴工具

本工具通过读取`midi`文件转为对应的按键来模拟竖琴

一些`midi`可以从[这个连接](https://www.midiclouds.com/forum-1-1.html)下载

## 关于琴谱

因为原神限制，所以能够演奏的音只有`21`个，推荐使用卡林巴琴的曲谱来生成`midi`文件

[mp3 转 midi](https://evano.com/audio/mp3-to-midi-online-converter)

## 依赖

- midi-player-js
- robotjs

## 使用方法

### exe

因为打包了`node`所以比较大

1. 下载你要演奏的乐曲的`mid`文件并重命名为`data.mid`
2. 下载`playe.zip`并解压
3. 将`data.mid`和`player.zip`解压出的文件放在一起
4. 以管理员模式运行`exe`

### 源码

1. 下载本项目
2. `npm ci`
3. 下载你要演奏的乐曲的`mid`文件并重命名为`data.mid`到项目目录
4. `powershell`以管理员模式运行`node index.js`

`5s`后自动开始模拟按键，请将游戏打开演奏页面

## 其他

本项目模拟的是钢琴按键，如果有对应的钢琴键可以对应按键，请编辑`keyboard.json`

欢迎一起完善
