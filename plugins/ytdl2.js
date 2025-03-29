const {getContextInfo} = require('./new')
const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 

// video

cmd({ 
    pattern: "video", 
    alias: ["mp4", "ytv"], 
    react: "🎥", 
    desc: "Download Youtube song", 
    category: "download", 
    use: '.song < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("*𝐏lease provide a YouTube url or Video Name..*");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }
        
        let ytmsg = `╔═══〔 *PRINCE MDXI ᪳* 〕═══❒
║╭───────────────◆  
║│ *❍ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*
║╰───────────────◆
╚══════════════════❒
╔══════════════════❒
║ ⿻ *ᴛɪᴛʟᴇ:*  ${yts.title}
║ ⿻ *ᴅᴜʀᴀᴛɪᴏɴ:*  ${yts.timestamp}
║ ⿻ *ᴠɪᴇᴡs:*  ${yts.views}
║ ⿻ *ᴀᴜᴛʜᴏʀ:*  ${yts.author.name}
║ ⿻ *ʟɪɴᴋ:*  ${yts.url}
╚══════════════════❒
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ*`;

        // Send video details
        await conn.sendMessage(from, { image: { url: data.result.thumbnail || '' }, caption: ytmsg,
        contextInfo: getContextInfo(m.sender)                        
        }, { quoted: mek });
        
        // Send video file
        await conn.sendMessage(from, { video: { url: data.result.download_url }, mimetype: "video/mp4" }, { quoted: mek });
        

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
}); 

// VIDEO DOC

cmd({ 
    pattern: "videodoc", 
    alias: ["mp4doc", "ytvdoc"], 
    react: "🎥", 
    desc: "Download Youtube song", 
    category: "download", 
    use: '.songdoc < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("*𝐏lease provide a YouTube url or Video Name..*");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }
        
        let ytmsg = `╔═══〔 *PRINCE MDXI ᪳* 〕═══❒
║╭───────────────◆  
║│ *❍ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*
║╰───────────────◆
╚══════════════════❒
╔══════════════════❒
║ ⿻ *ᴛɪᴛʟᴇ:*  ${yts.title}
║ ⿻ *ᴅᴜʀᴀᴛɪᴏɴ:*  ${yts.timestamp}
║ ⿻ *ᴠɪᴇᴡs:*  ${yts.views}
║ ⿻ *ᴀᴜᴛʜᴏʀ:*  ${yts.author.name}
║ ⿻ *ʟɪɴᴋ:*  ${yts.url}
╚══════════════════❒
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ*`;

        // Send video details
        await conn.sendMessage(from, { image: { url: data.result.thumbnail || '' }, caption: ytmsg, contextInfo: getContextInfo(m.sender) }, { quoted: mek });
        
        
        // Send document file 
        await conn.sendMessage(from, { 
            document: { url: data.result.download_url }, 
            mimetype: "video/mp4", 
            fileName: `${data.result.title}.mp4`, 
            caption: `*${yts.title}*\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ*`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
}); 


       
// play

cmd({ 
     pattern: "playy", 
     alias: ["yta", "mp3"], 
     react: "🎶", 
     desc: "Download Youtube song",
     category: "download", 
     use: '.song < Yt url or Name >', 
     filename: __filename }, 
     async (conn, mek, m, { from, prefix, quoted, q, reply }) => 
     
     { try { if (!q) return await reply("*𝐏lease providea YouTube url or Song Name.*");

const yt = await ytsearch(q);
    if (yt.results.length < 1) return reply("No results found!");
    
    let yts = yt.results[0];  
    let apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(yts.url)}`;
    
    let response = await fetch(apiUrl);
    let data = await response.json();
    
    if (data.status !== 200 || !data.success || !data.result.downloadUrl) {
        return reply("Failed to fetch the audio. Please try again later.");
    }
    
    let ytmsg = `╔══〔 *PRINCE MDXI* 〕══❒
║╭───────────────◆  
║│ *❍ ᴏᴡɴʟᴏᴀᴅᴇʀ*
║╰───────────────◆
╚══════════════════❒
╔══════════════════❒
║ ⿻ *ᴛɪᴛʟᴇ:*  ${yts.title}
║ ⿻ *ᴅᴜʀᴀᴛɪᴏɴ:*  ${yts.timestamp}
║ ⿻ *ᴠɪᴇᴡs:*  ${yts.views}
║ ⿻ *ᴀᴜᴛʜᴏʀ:*  ${yts.author.name}
║ ⿻ *ʟɪɴᴋ:*  ${yts.url}
╚══════════════════❒
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ*`;



// Send song details
    await conn.sendMessage(from, { image: { url: data.result.image || '' }, caption: ytmsg, contextInfo: getContextInfo(m.sender)}, { quoted: mek });
    
    // Send audio file
    await conn.sendMessage(from, { audio: { url: data.result.downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });
    
    
} catch (e) {
    console.log(e);
    reply("An error occurred. Please try again later.");
}

});



cmd({ 
     pattern: "playdoc", 
     react: "🎶", 
     desc: "Download Youtube song",
     category: "download", 
     use: '.song < Yt url or Name >', 
     filename: __filename }, 
     async (conn, mek, m, { from, prefix, quoted, q, reply }) => 
     
     { try { if (!q) return await reply("*𝐏lease providea YouTube url or Song Name.*");

const yt = await ytsearch(q);
    if (yt.results.length < 1) return reply("No results found!");
    
    let yts = yt.results[0];  
    let apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(yts.url)}`;
    
    let response = await fetch(apiUrl);
    let data = await response.json();
    
    if (data.status !== 200 || !data.success || !data.result.downloadUrl) {
        return reply("Failed to fetch the audio. Please try again later.");
    }
    
    let ytmsg = `╔═══〔 *PRINCE MDXI* 〕═══❒
║╭───────────────◆  
║│ *❍ dᴏᴡɴʟᴏᴀᴅᴇʀ*
║╰───────────────◆
╚══════════════════❒
╔══════════════════❒
║ ⿻ *ᴛɪᴛʟᴇ:*  ${yts.title}
║ ⿻ *ᴅᴜʀᴀᴛɪᴏɴ:*  ${yts.timestamp}
║ ⿻ *ᴠɪᴇᴡs:*  ${yts.views}
║ ⿻ *ᴀᴜᴛʜᴏʀ:*  ${yts.author.name}
║ ⿻ *ʟɪɴᴋ:*  ${yts.url}
╚══════════════════❒
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ*`;



// Send song details
    await conn.sendMessage(from, { image: { url: data.result.image || '' }, caption: ytmsg }, { quoted: mek });
    
    // Send document file
    await conn.sendMessage(from, { 
        document: { url: data.result.downloadUrl }, 
        mimetype: "audio/mpeg", 
        fileName: `${data.result.title}.mp3`, 
        caption: `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ `
    }, { quoted: mek });
    
    
} catch (e) {
    console.log(e);
    reply("An error occurred. Please try again later.");
}

});


cmd({ 
    pattern: "play", 
    alias: ["yta", "mp3"], 
    react: "🎶", 
    desc: "Download YouTube song", 
    category: "download", 
    use: ".play <Song Name>", 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("*🔗 Please provide a YouTube song name.*");

        // Perform YouTube search using the song name
        let yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("❌ No results found for the song name!");

        let videoUrl = yt.results[0].url; // Use the first search result as the video URL

        // Construct API URL using the video URL
        let apiUrl = `https://apis.giftedtech.web.id/api/download/ytmp3?apikey=gifted&url=${encodeURIComponent(videoUrl)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();

        // Check if the response is valid and contains the necessary data
        if (!data.success || !data.result || !data.result.download_url) {
            return reply("❌ Failed to fetch the audio. Please try again later.");
        }

        let songData = data.result;

        let ytmsg = `╔══〔 *PRINCE MDXI* 〕══❒
║╭───────────────◆  
║│ *❍ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*
║╰───────────────◆
╚════════════════❒
╔════════════════❒
║ ⿻ *ᴛɪᴛʟᴇ:*  ${songData.title || "Unknown"}
║ ⿻ *ǫᴜᴀʟɪᴛʏ:*  ${songData.quality || "128Kbps"}
║ ⿻ *ʟɪɴᴋ:*  ${videoUrl}
╚════════════════❒
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ*`;

        // Send song details (thumbnail, title, quality, etc.)
        await conn.sendMessage(from, { 
            image: { url: songData.thumbnail || "" }, 
            caption: ytmsg, 
            contextInfo: getContextInfo(m.sender) 
        }, { quoted: mek });

        // Send the audio file
        await conn.sendMessage(from, { 
            audio: { url: songData.download_url }, 
            mimetype: "audio/mpeg" 
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("❌ An error occurred. Please try again later.");
    }
});


cmd({ 
    pattern: "plaay", 
    alias: ["yta", "mp3"], 
    react: "🎶", 
    desc: "Download YouTube song", 
    category: "download", 
    use: ".play <Song Name>", 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("*🔗 Please provide a YouTube song name.*");

        // Perform YouTube search using the song name
        let yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("❌ No results found for the song name!");

        let videoUrl = yt.results[0].url; // Use the first search result as the video URL

        // Construct API URL using the video URL for the 'dlmp3' API
        let apiUrl = `https://apis.giftedtech.web.id/api/download/dlmp3?apikey=gifted&url=${encodeURIComponent(videoUrl)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();

        // Check if the response is valid and contains the necessary data
        if (!data.success || !data.result || !data.result.download_url) {
            return reply("❌ Failed to fetch the audio. Please try again later.");
        }

        let songData = data.result;

        let ytmsg = `╔══〔 *PRINCE MDXI* 〕══❒
║╭───────────────◆  
║│ *❍ ᴏᴡɴʟᴏᴀᴅᴇʀ*
║╰───────────────◆
╚══════════════════❒
╔══════════════════❒
║ ⿻ *ᴛɪᴛʟᴇ:*  ${songData.title || "Unknown"}
║ ⿻ *ǫᴜᴀʟɪᴛʏ:*  ${songData.quality || "128Kbps"}
║ ⿻ *ʟɪɴᴋ:*  ${videoUrl}
╚══════════════════❒
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ*`;

        // Send song details (thumbnail, title, quality, etc.)
        await conn.sendMessage(from, { 
            image: { url: songData.thumbnail || "" }, 
            caption: ytmsg, 
            contextInfo: getContextInfo(m.sender) 
        }, { quoted: mek });

        // Send the audio file
        await conn.sendMessage(from, { 
            audio: { url: songData.download_url }, 
            mimetype: "audio/mpeg" 
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("❌ An error occurred. Please try again later.");
    }
});
