import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import {scheduleShow} from "../schedules/show.js";

//Seleciona o input date
const selectedDate = document.querySelector('#date');

export async function schedulesDay() {
  //Obtem a data do input
  const date = selectedDate.value;

  //Busca na API os agendamentos.
  const dailySchedules = await scheduleFetchByDay({ date });

  //Exibe os agendamentos do dia
  scheduleShow({ dailySchedules });

  // Renderiza as horas disponiveis

  hoursLoad({ date, dailySchedules });
}