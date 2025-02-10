import dayjs from "dayjs";

//Selecionar as sessões manhã, tarde e noite
const periodMorning = document.querySelector('#period-morning');
const periodAfternoon = document.querySelector('#period-afternoon');
const periodNight = document.querySelector('#period-night');

export function scheduleShow({ dailySchedules }) {
  try {
    //Limpa os agendamentos
    periodMorning.innerHTML = '';
    periodAfternoon.innerHTML = '';
    periodNight.innerHTML = '';
    
    //Renderizar os agendamentos por período
    dailySchedules.forEach((schedule) => {
      const item = document.createElement('li');
      const time = document.createElement('strong');
      const name = document.createElement('span'); 

      //Adiciona o id do agendamento ao item
      item.setAttribute('data-id', schedule.id);

      time.textContent = dayjs(schedule.when).format('HH:mm');
      name.textContent = schedule.name;

      //Cria o icone de cancelamento de agendamento
      const cancelIcon = document.createElement('img');
      cancelIcon.classList.add('cancel-icon')
      cancelIcon.setAttribute('src', './src/assets/cancel.svg');
      cancelIcon.setAttribute('alt', 'Cancelar agendamento');

      //Adiciona tempo, nome e icone de cancelamento ao item
      item.append(time, name, cancelIcon);

      //Obtem somente a hora
      const hour = dayjs(schedule.when).hour();

      //Renderiza o agendamento na sessão correta
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }

    });
  } catch (error) {
    console.error(error);
    alert('Não foi possível exibir os agendamentos'); 
  }
}
