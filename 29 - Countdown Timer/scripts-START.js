let countdown;
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')

buttons.forEach(button => button.addEventListener('click', startTimer))

function timer (seconds) {
  clearInterval(countdown)
  
  const now = Date.now()
  const then = now + seconds * 1000
  displayTimeLeft(seconds)
  displayEndTime(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    if (secondsLeft < 0 ) {
      clearInterval(countdown)
      return
    }
  displayTimeLeft(secondsLeft)
  }, 1000)
}

function displayTimeLeft (seconds) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const reminderSeconds = seconds % 60
  const display = 
    `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`

  document.title = display
  timerDisplay.textContent = display
}

function displayEndTime (timestamp) {
  const end = new Date(timestamp)
  const hours = end.getHours()
  const minutes = end.getMinutes()
  const display =
  
  endTime.textContent = `Be back at ${hours <= 12 ? hours : hours - 12}:${minutes < 10 ? '0' : ''}${minutes}`
}

function startTimer () {
  const seconds = parseInt(this.dataset.time)
  timer(seconds)
}
