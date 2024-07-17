const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254710665116" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254710665116";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_51_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxODksXG4gICAgICAgIDExNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwLFxuICAgICAgICA0MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY4LFxuICAgICAgICA1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY5LFxuICAgICAgICA2OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjksXG4gICAgICAgIDYxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICA1MixcbiAgICAgICAgNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMixcbiAgICAgICAgMjI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDcsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAwLFxuICAgICAgICA4MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDksXG4gICAgICAgIDMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDUzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxODQsXG4gICAgICAgIDczLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS3cwUXhkRkFHMHNpZFl6Z1NOUUgrZStlb1l4SDhhOExXVjFxTzlRc09BZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MTA2NjUxMTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM2MTlFREI3OUE4QTgxMDdFN0E1M0I4MjdGNDdBNDkxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTI1NjcwNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSQlREbThhVlFaU1FlQTNEdzF2a2F3XCIsXG4gIFwicGhvbmVJZFwiOiBcImNmNjEwNTRhLTI5ZjgtNDY4MS1iZjc2LTc3ZmQ4ZDY4MjljMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTgsXG4gICAgICA5MSxcbiAgICAgIDEzMCxcbiAgICAgIDEwLFxuICAgICAgMTkxLFxuICAgICAgMTAzLFxuICAgICAgOTcsXG4gICAgICAxNDMsXG4gICAgICAxNDgsXG4gICAgICAxMzksXG4gICAgICAxNzIsXG4gICAgICAxMDksXG4gICAgICA4MixcbiAgICAgIDIzMCxcbiAgICAgIDE2MCxcbiAgICAgIDUxLFxuICAgICAgMjAxLFxuICAgICAgMzAsXG4gICAgICAyMDEsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgMTQ0LFxuICAgICAgNDAsXG4gICAgICAxNzQsXG4gICAgICAyOCxcbiAgICAgIDExMixcbiAgICAgIDgyLFxuICAgICAgMTU2LFxuICAgICAgMTQsXG4gICAgICAwLFxuICAgICAgMjQ3LFxuICAgICAgMjUxLFxuICAgICAgMjQyLFxuICAgICAgMjEyLFxuICAgICAgMTczLFxuICAgICAgMTQwLFxuICAgICAgMTcxLFxuICAgICAgMTU1LFxuICAgICAgMSxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZBMVo1NzZMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MTA2NjUxMTY6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NjUwNjMxMTU2NTQ5NDo0MEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJMb3JlZSDwn5icXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXo2eU1BREVQYVY0YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNM2EzMTZLdVBRS2ZSa3ZHMThCZ2tSakJyTjV0RkZaRFZDSEYvZ2ZucFRnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZXUmRLSm9PUDBjTUhoZWR0akZDTGZpMlQ0WVdCZ3N5bEhzaTl0UGJBbVd1OVR5M3ZKNXdISzUvWWxVWDA0NlpzVlFCcnp4S0dnMVExbHNBVGdmQkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlNMHVianFzcHpCdnFHRjNIT2hpdTZQRHlPTTFIdDRHQzJoNjlEMkV1elk2UWp0a01lUUIzQjFCY3FMa2pmMDZSaGRwZHhhakJLQWxVK3ZyNzEyZmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcxMDY2NTExNjo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjU2Njk4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSk9oXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKT2guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5TWVDM25PZnNuSXZPTHFmYkhINGNEZVVXdTVmanZiTVJNUEpqWW9TZTJNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk0MDcxOTM3MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Loree 😜",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
