
const formRef = document.querySelector('.form')
const inputDelay = document.querySelector('input[name=delay]')
const inputAmount = document.querySelector('input[name=amount]')
const inputStep = document.querySelector('input[name=step]')
const btn = document.querySelector('button')
import { Notify } from 'notiflix/build/notiflix-notify-aio';


formRef.addEventListener('submit', () => { 
//  e.preventDefault
  let positionNumber = 0
  for (i = 0; i <= inputAmount.value; i += 1){
    positionNumber += 1;
    const delayCount = inputDelay.value + inputStep.value
  
  }
})
 
function createPromise(position, delay) {
  
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
       if (shouldResolve) {
      resolve ({position, delay})
  } else {
      reject ({position, delay})
  }
    },delay)
  }) 
}

createPromise(2, 1500)
  
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    return
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    return
  })

console.log()