import dayjs, { Dayjs } from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }) {
  try {
    //Fazendo a requisição.
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    // Converte para JSON.
    const data = await response.json();

    //Filtra os agendamentos pelo dia selecionado.
    const dailySchedules = data.filter((schedule) => {
      const isSameDate = dayjs(date).isSame(schedule.when, "day");
      return isSameDate
    })

    console.log(dailySchedules)
    return dailySchedules;
  } catch (error) {
    console.log(error)
    alert("Não foi possivel buscar os agendamentos do dia")
  }
};