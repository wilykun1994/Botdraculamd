const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	webnya: 'https://api.lolhuman.xyz',
	webnya: 'https://api.dapuhy.xyz',
}

global.APIKeys = {
	'https://api.lolhuman.xyz': 'Wilykun1994',
	'https://api.dapuhy.xyz': 'Kirbotz123',
}

global.owner = ['6289688206739']
global.premium = ['6289688206739']
global.packname = 'W I L Y - B O T'
global.author = 'Wa : https://wa.me/6289688206739\nYT : Wily×\nIG : Wily\nGH : Wily\nTT : Wily'
global.sessionName = 'kirbotz'
global.namabotnya = 'H E N T A I - B O T'
global.namaownernya = 'W I L Y'
global.lolkey = 'Atakbotz'
global.dapkey = 'Kirbotz123'
global.wame = 'https://wa.me/6289688206739'
global.gckirbotz = 'https://chat.whatsapp.com/CAPptYDgkOI3V4vAOcC3tW'
global.ownerNumber = ["6289688206739@s.whatsapp.net"]
global.email = 'kagakpunya@gmail.com'
global.yt = 'https://chat.whatsapp.com/CAPptYDgkOI3V4vAOcC3tW'
global.region = 'Indonesia'
global.prefa = ['','!','.','#','-','•']
global.sp = '⭔'
global.mess = {
    success: '```S U C C E S 💯```',
    admin: 'Fitur Khusus Admin Group!!!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!!!',
    owner: 'Fitur Khusus Owner Bot!!!',
    group: 'Fitur Digunakan Hanya Untuk Group!!!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!!!',
    bot: 'Fitur Khusus Pengguna Nomor Bot!!!',
    error: 'Error Kak Silahkan Chat Owner',
    wait: '```❗L O A D I N G...```',
    noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
    banned: 'Maaf Kamu Sudah Di Banned Silahkan Chat Owner Untuk Membuka Banned Nya',
}


global.limitawal = {
    premium: "Infinity",
    free: 5
}


global.thumb = fs.readFileSync('./Image/kirbotz.jpg')
global.thumbrpg = fs.readFileSync('./Image/kirbotzrpg.jpg')
global.imgjoinrpg = fs.readFileSync('./Image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./Image/mining.jpg')

global.imgdevil = fs.readFileSync('./Image/img/devil.jpg')
global.imgslime = fs.readFileSync('./Image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./Image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./Image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./Image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./Image/img/behemoth.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
