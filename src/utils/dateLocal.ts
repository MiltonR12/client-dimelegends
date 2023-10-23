export const dateBattle = (dateVersus: string) => {
  return new Date(dateVersus).toLocaleString("es", {
    day: "numeric",
    month: "long",
  });
};

export const hoursBattle = (hoursVersus: string) => {
  return new Date(hoursVersus).toLocaleString("es", {
    hour: "2-digit",
    minute: "numeric",
    hour12: true,
  });
};

export const compareTime = (curretDate: string) => {
  const oldDate = new Date();
  const compare =
    oldDate.getFullYear() +
    (oldDate.getMonth() + 1).toString().padStart(2, "0") +
    oldDate.getDate().toString().padStart(2, "0");
  return parseInt(compare) < parseInt(curretDate)
};
