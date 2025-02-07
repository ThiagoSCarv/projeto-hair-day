import dayjs from "dayjs";

const form = document.querySelector('form');
const selectedDate = document.getElementById('date');

//Data atual para o input date
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

//Carega a data atual e Define a data mínima para o input date
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  event.preventDefault();
  
}
