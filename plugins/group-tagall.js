let handler = async (m, { conn, text, participants }) => {
	let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`${text ? `${text}\n\n` : ''}` + users.map(v => '@' + v.replace(/@.+/, '')).join`\n`, null, { mentions: users })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = /^(tagall)$/i
handler.group = true
handler.botAdmin = true

export default handler
