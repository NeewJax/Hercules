import axios from "axios"
let handler = async (m, { args }) => {
if (!args[0]) throw "*[❗𝐈𝐍𝐅𝐎❗] Escreva o nome do seu país ou cidade*"
try {
const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
const res = await response
const name = res.data.name
const Country = res.data.sys.country
const Weather = res.data.weather[0].description
const Temperature = res.data.main.temp + "°C"
const Minimum_Temperature = res.data.main.temp_min + "°C"
const Maximum_Temperature = res.data.main.temp_max + "°C"
const Humidity = res.data.main.humidity + "%"
const Wind = res.data.wind.speed + "km/h"
const wea = `「 📍 」Lugar: ${name}\n「 🗺️ 」País: ${Country}\n「 🌤️ 」Tempo: ${Weather}\n「 🌡️ 」Temperatura: ${Temperature}\n「 💠 」 Temperatura mínima: ${Minimum_Temperature}\n「 📛 」 Temperatura máxima: ${Maximum_Temperature}\n「 💦 」Umidade: ${Humidity}\n「 🌬️ 」 Vento: ${Wind}`
m.reply(wea)
} catch {
return "*[❗𝐈𝐍𝐅𝐎❗]  NENHUM RESULTADO ENCONTRADO, VERIFIQUE SE VOCÊ DIGITOU CORRETAMENTE SEU PAÍS OU CIDADE*"}}
handler.help = ['clima *<cidade/país>*']
handler.tags = ['herramientas']
handler.command = /^(clima|tempo)$/i
export default handler
