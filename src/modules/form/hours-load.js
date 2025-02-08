import dayjs from "dayjs";
import {openingHours} from "../../utils/open-hours.js";

const hours = document.querySelector("#hours");

export function hoursLoad({ date } ) {
  const opening = openingHours.map((hour) => {
    //Recupera somente a hora
    const [scheduleHour] = hour.split(":");


    //Adiciona a hora na data e verifica se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());
    
    return {
      hour,
      avaliable: isHourPast,
    };
  });

  // Renderiza os Horarios
  opening.forEach(({ hour, avaliable }) => {
    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(avaliable ? "hour-available" : "hour-unavailable");
    li.textContent = hour;
    hours.append(li);
  });
}