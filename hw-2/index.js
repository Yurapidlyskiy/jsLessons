//за допогою методу toLocale string і обєкту options настроїти час в німеччині та італії


const date = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "numeric",
  timeZoneName: "long",
};

const dateInGerman = date.toLocaleString("de-DE", options);
console.log(dateInGerman);

const dateInItaly = date.toLocaleString("it-It", options);
console.log(dateInItaly);