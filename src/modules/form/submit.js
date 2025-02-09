import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";

const form = document.querySelector('form');
const clientName = document.getElementById('client');
const selectedDate = document.getElementById('date');

//Data atual para o input date
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

//Carega a data atual e Define a data mínima para o input date
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault();
  
  try {
    //Recuperando nome do cliente
    const name = clientName.value.trim();

    if (!name) {
      alert('Preencha o nome do cliente');
      return;
    }

    //Recuperando o horario agendado
    const hourSelected = document.querySelector('.hour-selected');

    if (!hourSelected) {
      alert('Selecione um horário');
      return;
    }

    //Recuperando somente o horário
    const [hour] = hourSelected.innerText.split(":");

    //Insere data na hora selecionada
    const when = dayjs(selectedDate.value).add(hour, 'hour')

    //Gera um ID único para o agendamento
    const id = new Date().getTime();

    await scheduleNew({ id, name, when });
    
  } catch (error) {
    alert('Erro ao enviar formulário');
    console.error(error);
    
  }
}
