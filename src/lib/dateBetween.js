const dateBetween = (startDate, endDate, options) => {
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24
  const distance = endDate - startDate

  if (distance < 0) return false

  const days = Math.floor(distance / day)
  const hours = Math.floor((distance % day) / hour)
  const minutes = Math.floor((distance % hour) / minute)
  const seconds = Math.floor((distance % minute) / second)

  return {
    days,
    hours,
    minutes,
    seconds
  }
}

export default dateBetween
