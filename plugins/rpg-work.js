// creditos a https://github.com/FG98F
let handler = async (m, { conn, isPrems}) => {
let hasil = Math.floor(Math.random() * 5000)
let time = global.db.data.users[m.sender].lastwork + 600000
if (new Date - global.db.data.users[m.sender].lastwork < 600000) throw `*Estas cansado, você precisa descansar no mínimo ${msToTime(time - new Date())} para voltar a trabalhar!*`

m.reply(`${pickRandom(global.work)} *${hasil} XP*`)
global.db.data.users[m.sender].lastwork = new Date * 1
}
handler.help = ['work']
handler.tags = ['xp']
handler.command = ['work', 'trabalhar']
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s " 
}


function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

global.work = ["Você trabalha como cortador de biscoitos e ganha", "Trabalhe para uma empresa militar privada, ganhando", "Realize um evento de degustação de vinhos e ganhe",
"Você é sequestrado e levado para um coliseu subterrâneo onde lutou contra monstros com pessoas que nunca conheceu antes. Você venceu", "Você limpa a chaminé e encontra",
"Você desenvolve jogos para viver e ganha",
"Por que esse comando é chamado de trabalho? Você nem está fazendo nada relacionado ao trabalho. No entanto, você ganha", "Você trabalhou horas extras no escritório por",
"Você trabalha como sequestrador de noivas e ganha",
"Alguém veio e fez uma peça. Eles te deram para assistir", "Você comprou e vendeu itens e ganhou", "Você trabalha no restaurante da vovó como cozinheiro e você ganha",
"Você trabalha 10 minutos em uma Pizza Hut local. Você ganhou",
"Você trabalha como escritor de biscoitos da sorte e ganha", "Você vasculha sua bolsa e decide vender alguns itens inúteis de que não precisa. Acontece que todo aquele lixo valeu a pena",
"Você vê alguém lutando para colocar uma caixa em seu carro, você corre para ajudá-lo antes que ele se machuque. Depois de ajudá-lo, ele gentilmente lhe dá",
"Você desenvolve jogos para viver e ganha",
"Você ganhou um concurso de comer pimenta quente. O prêmio é,",
"Você trabalha o dia todo na empresa para",
"Você ajuda a moderar o grupo DyLux por", "Você criou um logotipo para *FG* por",
"Você moderou o grupo quando *FG* não estava, o pagamento foi",
"Ela trabalhou melhor em uma gráfica que estava contratando e ganhou sua parte justa!",
"Você trabalha como aparador de arbustos para *FG98* e ganha", "A demanda por jogos para celular aumentou, então você cria um novo jogo cheio de microtransações. Com seu novo jogo você ganha um total de",
"Você trabalha como dublador do Bob Esponja e conseguiu vencer",
"Você estava cultivando e ganhou", "Você trabalha como construtor de castelos de areia e ganha", "Você trabalhou e ganhou",
"Você trabalha como artista de rua e ganha", "Você fez um trabalho social por uma boa causa! Pela sua boa causa você recebeu",
"Você leva as mulheres à loja para"
]
