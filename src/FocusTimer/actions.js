import { seconds } from './elements.js'
import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

/*Controle de timer*/
export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.coundDonw()
}

export function stop() {
  state.isRunning = false
  document.documentElement.classList.remove('running')

  state.minutes = 0
  state.seconds = 0

  timer.updateDisplay()
}

export function less() {
  timer.lessTimer()
}

export function plus() {
  timer.plusTimer()
}

/*Controle de sons*/
export function tree() {
  sounds.treeAudio.play()
  sounds.fire.pause()
  sounds.rain.pause()
  sounds.store.pause()

}

export function cloud() {
  sounds.rain.play()
  sounds.fire.pause()
  sounds.treeAudio.pause()
  sounds.store.pause()
}
export function fire() {
  sounds.fire.play()
  sounds.rain.pause()
  sounds.treeAudio.pause()
  sounds.store.pause()
}
export function store() {
  sounds.store.play()
  sounds.rain.pause()
  sounds.fire.pause()
  sounds.treeAudio.pause()
}