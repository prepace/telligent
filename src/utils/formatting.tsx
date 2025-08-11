export const formatDate = (dateString: string) => {
  const date = new Date(dateString)

  const month = date.getMonth() + 1; // Months are zero-indexed in JavaScript
  const day = date.getDate();
  const year = date.getFullYear();

  // Pad month and day with leading zeros if necessary
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  return `${formattedMonth}/${formattedDay}/${year}`;
};

export function formatDateArticle(input: string) {
  const date = new Date(input);

  // Define months and weekdays
  const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];

  // const weekdays = [
  //     "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  // ];

  // Format the date
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();

  // Determine AM/PM and convert hour to 12-hour format
  let ampm = "a.m.";
  let hours12 = hour;
  if (hours12 >= 12) {
      ampm = "p.m.";
      if (hours12 > 12) hours12 -= 12;
  } else if (hours12 === 0) {
      hours12 = 12;
  }

  // Add leading zero for minutes if necessary
  const minutes = minute < 10 ? "0" + minute : minute;

  // Format the final string
  const formattedDate = `${month} ${day}, ${year} at ${hours12}:${minutes} ${ampm} EDT`;

  return formattedDate;
};
;