import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      //Faz a requisição para enviar dados do agendamento
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        when,
      }),
    });

    alert("Agendamento criado com sucesso");
    
  } catch (error) {
    console.error(error);
    alert("Erro ao criar agendamento"); 
  }
}