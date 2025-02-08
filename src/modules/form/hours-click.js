export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");


  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {

      // Remove a classe de selecionado de todos os horarios
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      // Adiciona a classe de selecionado no horario clicado
      selected.target.classList.add("hour-selected");
    });
  });
}