import dayjs from 'dayjs'

export function formatMonthDay(date) {
  return dayjs(date).format("MM月DD日")
}

export function getDiffDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day")
}

export function addTime(date, add, type = 'day', format = "MM月DD日") {
  return dayjs(date).add(add, type).format(format)
}

export function subtractTime(date, subtract, type = 'day', format = "MM月DD日") {
  return dayjs(date).subtract(subtract, type).format(format)
}