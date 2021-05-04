const ownerNumber = ["919080896537@s.whatsapp.net","13153887211@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '919080896537' 
// mude para seu numero

const cr = 'well\n' 
// texto do simbolo de verificado

const prefix = '&' 
// prefixo


// MENSAGENS DE BAN

const banmsgtype = '*Goodbye toad abortion, your ban is close*'
// mensagem de ban no anti tipos de mensagem

const adminmsgtype = '*You are adm, respect, you must not send prohibited messages*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Hmmm pajin with antiporn activated, you know, you know ...'
// mensagem de ban no antiporn

const adminmsgporn = '*You are adm, I wont forbid you to send porn*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'Goodbye, the ban is near UwU...'
// mensagem de ban no antilink

const adminmsglink = 'This is a friend link ... ah, you are adm so okay 🙃'
// mensagem de quando adm manda link


// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.ibb.co/XSGQ7r6/Screenshot-20210401-220856-1.jpg'
const textmsgday = 'Good morning group'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/vv4X2P5/Screenshot-20210401-215736-1.jpg'
const textmsgeve = `Onii-chan, accept that coffee ☕`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/dDvj9fR/Screenshot-20210401-212646-1.jpg'
const textmsgnig = 'Konbanwa Onii-chan, I hope you had a nice day ☺️'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Try again:/'
// mensagem de erro

// MENSAGENS DE AUTOREPLY

const botlindo = ' 😊'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfofo = 'Have you seen yourself in a mirror? 😡'
const cadebot = 'onii-chan 👉👈?'
const botfdp = 'Fuck you moron, you fell out of the crib when you were a baby?'
const botgostoso = 'Arigato  😳👉👈'
const botbaianor = 'I invited your girlfriend to watch Netflix'
const botcorno = 'Fuck you, ff gamer, rat boy'
const botputa = 'Go fuck yourself😡'
const botgay = 'Hahaha you are pvto😡'
const botviado = 'The group clown said it😡'
const numbotfeio = 'Son of ...😡'
// KEYS

const apiTobz = 'key'
// pra pegar a key do Tobz va até o numero 
//wa.me/447418349954 se registre no bot
// e depois escreva #generateapikey que o 
//bot do tobz vai gerar sua key

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ You hope or you wait?⌛',
    success: '✔️Success! ✔️',
    error: {
        stick: '❌ Failed, there was an error converting the image to a sticker ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ ¡This command can only be used in groups! ❌',
        ownerG: '❌ ¡This command can only be used by my owner! ❌',
        ownerB: '❌ ¡This command can only be used by the owner number! ❌',
        admin: '❌ ¡This command can only be used by group administrators! ❌',
        Badmin: '❌ ¡This command can only be used when the bot becomes admin! ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:naru >_<\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=919080896537:+91 9080896537\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde


// Nem ouse mexer aqui se n quiser que de erro

exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.apiTobz = apiTobz
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
