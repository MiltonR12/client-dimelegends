export const dateBattle = (dateVersus: string) => {
  return new Date(dateVersus).toLocaleString("es", {
    day: "numeric",
    month: "long"
  })
}

export const hoursBattle = (hoursVersus: string) => {
  return new Date(hoursVersus).toLocaleString("es", {
    hour: "2-digit",
    minute: "numeric",
    hour12: true
  })
}