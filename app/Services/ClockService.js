import { ProxyState } from "../AppState.js"


class ClockService{
  setClock(){
    let currentTime = new Date()
    let dayOfWeek = currentTime.getUTCDay()
      if (dayOfWeek == 1){dayOfWeek = 'Monday'}else if (dayOfWeek == 2){dayOfWeek = 'Tuesday'}else if (dayOfWeek == 3){dayOfWeek = 'Wednesday'}else if (dayOfWeek == 4){dayOfWeek = 'Thursday'}else if (dayOfWeek == 5){dayOfWeek = 'Friday'}else if (dayOfWeek == 6){dayOfWeek = 'Saturday'} else if (dayOfWeek == 7){dayOfWeek = 'Sunday'}
    let day = currentTime.getDate()
    let month = currentTime.getMonth()
    if (month == 1){month = 'February'}else if (month == 2){month = 'March'}else if (month == 3){month = 'April'}else if (month == 4){month = 'May'}else if (month == 5){month = 'June'}else if (month == 6){month = 'July'} else if (month == 7){month = 'August'} else if (month == 8){month = 'September'} else if (month == 9){month = 'October'} else if (month == 10){month = 'November'} else if (month == 11){month = 'December'} else if (month == 12){month = 'January'}
    let year = currentTime.getFullYear()
    let hour = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let suffix = 'AM'
    hour = this.updateClock(hour)
    if (hour >= 12){
      suffix = 'PM'
    }
    if (hour >= 13){
      hour -= 12
    }
    minutes = this.updateClock(minutes)
    ProxyState.time = `${hour}:${minutes} ${suffix}`
    ProxyState.date = `${dayOfWeek}, ${month} ${day}, ${year}`
  }

  updateClock(time){
    if (time < 10){
      return "0" + time
    }
    return time
  }

  change(){
    console.log("change time")
  }
}


export const clockService = new ClockService()