const dateBetween = (startDate, endDate) => {
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24
  const distance = endDate - startDate

  if (distance < 0) return false

  const days = Math.floor(distance / day)
  const hours = Math.floor((distance % day) / hour)
  const minutes = Math.floor((distance % hour) / minute)

  return {
    days,
    hours,
    minutes
  }
}

export default dateBetween
