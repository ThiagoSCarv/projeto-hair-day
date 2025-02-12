import { schedulesDay } from '../schedules/load.js';

const selectedDate = document.querySelector('#date');

//Recarregar a lista de horários quando a data for alterada
selectedDate.onchange = () => schedulesDay();
