import '../css/common.css'
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"
//import { format, compareAsc } from 'date-fns'
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const timerRef = document.querySelector('.timer')
const input = document.querySelector('#datetime-picker')
const startBtn = document.querySelector('button[data-start]')
const selectedDates = []
 let endTime = null; 


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,    
    onClose(selectedDates) {
    console.log(selectedDates[0]);   
      endTime = selectedDates[0].getTime() 
      if (endTime <= Date.now()) {
      startBtn.disabled = true
      Notify.failure("Please choose a date in the future", notifyOptions= {
        width: 200,
        clickToClose: true,
        backOverlay: true
      }, );     
      return
      }
      startBtn.disabled = false;      
  },   
    
};

flatpickr('#datetime-picker', options)
 
const timer = {
  intervald: null,
  // isActive:false,
  refs: {
    // timerdays: document.querySelector('[data-days]'),   
    // timerhours: document.querySelector('[data-hours]'),
    // timerminutes: document.querySelector('[data-minutes]'),
    // timerseconds: document.querySelector('[data-seconds]')    
  }, 
     
  start(rootSelector, endTime) {
   const delta = endTime - Date.now();
    // if (isActive) {
    //   clearInterval(this.intervalId);
    // }
    this.getRefs(rootSelector);
    
    this.intervalId= setInterval(() => {      
      const diff = endTime - Date.now();        
      const { days, hours, minutes, seconds } = convertMs(diff)
       console.log(diff)
      this.refs.timerdays.textContent = addLeadinZero(convertComponents)
      this.refs.timerhours.textContent = addLeadinZero(convertComponents.hours)
      this.refs.timerminutes.textContent = addLeadinZero(convertComponents.minutes)
      this.refs.timerseconds.textContent = addLeadinZero(convertComponents.seconds) 
       
   },1000) 
    startBtn.addEventListener('click', () => {
      timer.start()
    } )
       
    // startBtn.addEventListener('click', () => {
    //   this.intervald = setInterval(() => {
    //     const delta = deadLine - Date.now();       
    //     const convertComponents = convertMs(delta)
    //     const { days, hours, minutes, seconds } = this.refs
    //     this.refs.days.textContent = addLeadinZero(convertComponents.days)
    //     this.refs.hours.textContent = addLeadinZero(convertComponents.hours)
    //     this.refs.minutes.textContent = addLeadinZero(convertComponents.minutes)
    //     this.refs.seconds.textContent = addLeadinZero(convertComponents.seconds)    
    //   }, 1000)
  
    // })   
  },

  getRefs(rootSelector) {
    
    this.refs.timerdays.textContent = rootSelector.querySelector('[data-days]'), 
    this.refs.timerhours.textContent = rootSelector.querySelector('[data-hours]'), 
    this.refs.timerminutes.textContent = rootSelector.querySelector('[data-minutes]'), 
    this.refs.timerseconds.textContent = rootSelector.querySelector('[data-seconds]') 
  },
 

  addLeadinZero(value) {
    return String(value).padStart(2, '0');
}, 
  
};

 
timer.start(getRefs, endTime)


    
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
 }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}



