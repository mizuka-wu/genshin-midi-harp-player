/* eslint-disable no-unused-vars */
const MidiPlayer = require('midi-player-js')
// const throttle = require('lodash/throttle')
const robot = require('robotjs')
const fs = require('fs')
const path = require('path')
const countdown = require('node-countdown')

robot.setKeyboardDelay(1)

const KEY_TOGGLE = {
  DOWN: 'down',
  UP: 'up'
}

const KEYBOARD_NOTENUMBER = JSON.parse(fs.readFileSync(
  path.join('.', 'keyboard.json')
  , 'utf-8'))

/**
 * 按键/支持按多个
 */
const pressKey = function (keys) {
  const list = keys.split('')
  list.forEach(key => robot.keyToggle(key, KEY_TOGGLE.DOWN))
  list.forEach(key => robot.keyToggle(key, KEY_TOGGLE.UP))
}

const Player = new MidiPlayer.Player(function ({ noteName }) {
  const key = KEYBOARD_NOTENUMBER[noteName]

  if (!noteName) {
    console.log('空音节')
  }

  if (key) {
    pressKey(key)
    console.log('按下：', noteName, key)
  } else if (noteName) {
    console.log('未找到对应按键：', noteName)
  }
})

const filePath = path.join('.', 'data.mid')

if (fs.existsSync(filePath)) {
// Load a MIDI file
  Player.loadFile(filePath)
  countdown.start(5000, { suffix: '后开始模拟按键，请打开游戏' }, function (err) {
    err
      ? console.log(err.message)
      : Player.play()
  })
} else {
  console.log('请在当前目录放置data.mid', filePath)
}
