import dayjs from "dayjs";

export const generateDate = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const dates = [];

  //generate previous month's dates
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    dates.push({ date: firstDateOfMonth.day(i),
         currentMonth: false });
  }

  //generate current date
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    dates.push({ date: firstDateOfMonth.date(i),
         currentMonth: true,
        today : firstDateOfMonth.date(i).toDate().toDateString() == dayjs().toDate().toDateString() }); // or just i ?
  }

  const remaining = 42 - dates.length; // 42 because total number of dates = 6rows * 7columns

  //generate next month's dates
  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remaining;
    i++
  ) {
    dates.push({ date: lastDateOfMonth.date(i),
         currentMonth: false });
  }

  return dates;
};


export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"

]

