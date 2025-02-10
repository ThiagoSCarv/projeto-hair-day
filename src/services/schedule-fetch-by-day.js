import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay(date) {
  try {
    //Fazendo a requisição.
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    // Converte para JSON.
    const data = await response.json();

    //Filtra os agendamentos pelo dia selecionado.
    const dailySchedules = data.filter((schedule) => {
      const scheduleDate = dayjs(schedule.when).format("YYYY-MM-DD");
      const date = dayjs(date).format("YYYY-MM-DD");
      const isSameDate = dayjs(scheduleDate).isSame(date, "day");
      return isSameDate
    })
    return dailySchedules;
  } catch (error) {
    console.log(error)
    alert("Não foi possivel buscar os agendamentos do dia")
  }
};