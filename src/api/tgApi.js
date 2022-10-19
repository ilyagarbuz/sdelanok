import axios from "axios";

const TOKEN = "5658343859:AAEYyxX3sxke77K5eltXmpbzcMyZhGC5h0U";
const CHAT_ID = "-1001558962047";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

async function sendMessage(message) {
  return axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });
}

export { sendMessage };
