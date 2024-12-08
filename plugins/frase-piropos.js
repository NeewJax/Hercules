/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

let handler = async (m, { conn, text}) => {

m.reply(`*╔═══════════════════════════*\n➢ *"${pickRandom(global.piropo)}"*\n*╚═══════════════════════════*`)
}
handler.tags = ['frases']
handler.command = ['elogios']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.piropo = ["Gostaria de ser papel para poder embrulhar esse chocolate.", "Você é como wi-fi sem senha, todo mundo está te procurando", "Quem foi um ônibus para passear pelas curvas do seu coração." , "Quero voar sem asas e sair desse universo, entrar no seu e te amar em silêncio.", "Gostaria de ser manteiga para derreter na sua arepa.", "Se a beleza fosse pecado, você já estar no inferno.", "Gostaria de ser um gato para passar 7 vidas ao seu lado.", "Roubar é errado, mas um beijo na sua boca roubaria de mim.", "Como é lindo o céu quando está claro, mas o amor é mais linda quando tenho você ao meu lado.", "Bonito, ande na sombra, o sol derrete os chocolates.", "Se fosse um e-mail, você seria minha senha.", "Gostaria que você fosse para as montanhas para te dar um facão", "Perdi meu número de telefone, você pode me dar o seu?", "Qual é o seu nome para pedir um presente ao Papai Noel?", "Há muitas estrelas no céu, mas as mais brilhantes está na Terra e é você.", "Você só O sol nasce ou é o sorriso que você me dá hoje?", "Não é a cachaça nem a cerveja, é você que me subiu à cabeça", "Se falarmos sobre matemática você é a soma de todos os meus desejos.", "Você parece o Google porque tem tudo o que procuro.", "Meu café favorito é aquele com seus olhos.", "Quero ser fotografado para retoque todo o corpo.", "Gostaria que você fosse cereal, para te dar de colher de manhã.", "Quem tiver fome, para te dar três vezes ao dia."]
