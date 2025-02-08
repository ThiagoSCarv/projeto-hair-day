import dayjs from "dayjs";
import {openingHours} from "../../utils/open-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.querySelector("#hours");

export function hoursLoad({ date } ) {
  //Limpa os horarios
  hours.innerHTML = "";
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

    if (hour === "9:00") {
      hoursHeaderAdd("Manhã");
    }else if (hour === "13:00") {
      hoursHeaderAdd("Tarde");
    }else if (hour === "18:00") {
      hoursHeaderAdd("Noite");
    }

    hours.append(li);
  });

  // Adiciona o evento de click
  hoursClick();
}

function hoursHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}