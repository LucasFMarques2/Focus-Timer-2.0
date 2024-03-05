import state from './state.js'
import * as el from './elements.js'
import * as action from './actions.js'

export function coundDonw() {
   clearTimeout(state.coutdonwId)
   
    if (!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if (seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        action.stop()
        return
      }
    updateDisplay(minutes, seconds)
   state.coutdonwId = setTimeout(() => coundDonw(), 1000)
}

export function plusTimer(){
    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);

 
    let newMinutes = minutes + 5;

    
    if(newMinutes > 60){
        newMinutes = 60
        seconds = 0
    }
    
    updateDisplay(newMinutes, seconds);

}

export function lessTimer(){
    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);
    
    if (minutes < 5 ) {
        minutes = 0;
        seconds = 0;
        updateDisplay(minutes, seconds);
        return
    }
    
    let newMinutes = minutes - 5;
   

 
    updateDisplay(newMinutes, seconds);
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, '0')
    el.seconds.textContent = String(seconds).padStart(2, '0')

}