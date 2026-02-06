const handler = async (sock, msg, from, args, msgInfoObj) => {
	const { sendMessageWTyping, startTime, updateName } = msgInfoObj;

	const uptime = process.uptime();
	const hours = Math.floor(uptime / 3600);
	const minutes = Math.floor((uptime % 3600) / 60);
	const seconds = Math.floor(uptime % 60);
	const simpleUptime = `${hours}h ${minutes}m ${seconds}s`;

	const diff = process.hrtime(startTime);
	const responseTime = (diff[0] * 1e9 + diff[1]) / 1e6;
	const responseTimeInSeconds = responseTime / 1000;

	const memoryUsage = process.memoryUsage();
	const usedMB = (memoryUsage.rss / 1024 / 1024).toFixed(2);

	const nodeVersion = process.version;
	const platform = `${process.platform} (${process.arch})`;

	const response =
		`*👋🏻 ʜᴇʟʟᴏ ${updateName}*\n\n` +
		`*🎾 ᴀǫᴏᴏᴘᴇʀ is Online!*\n` +
		`*🟢 ʟᴀᴛᴇɴᴄʏ:* ${
			responsetime >= 1000 ? `${responseTimeInSeconds.toFixed(2)}s` : `${responseTime.toFixed(2)}ms`
		}\n` +
		`*⏱️ ᴜᴘᴛɪᴍᴇ:* ${simpleUptime}\n` +
		`*🧠 ʀᴀᴍ ᴜsᴀɢᴇ:* ${usedMB} MB\n` +
		`*🛠️ ᴠᴇʀsɪᴏɴ:* ${nodeVersion}\n` +
		`*🌍 ᴘʟᴀᴛғᴏʀᴍ:* ${platform}\n` +
   `*♥︎© ᴏᴡɴᴇʀ: 𝐁ʟᴀǫ-ʙᴏʏ ᴛᴇᴄʜ}`;

	return sendMessageWTyping(from, { text: response }, { quoted: msg });
};

export default () => ({
	cmd: ["a", "alive", "ping"],
	desc: "Check if bot is alive",
	usage: "alive | ping | a",
	handler,
});
