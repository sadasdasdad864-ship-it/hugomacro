// ===== HugoMacro Konfiguration =====
// Hier deine echten Links eintragen:
window.HUGO_CONFIG = {
  // Discord Invite (fuer Tickets / Verify)
  discordInvite: "https://discord.gg/m5UtNVuy2N",

  // Discord OAuth2 Login-URL (Dashboard-Verify).
  // response_type=token -> Frontend liest Token direkt aus Browser.
  // redirect_uri MUSS exakt unter Discord-OAuth2-Redirects stehen!
  discordOAuthURL: "https://discord.com/oauth2/authorize?client_id=1526452104057589761&response_type=token&redirect_uri=https%3A%2F%2Fhugomacro.js.org%2F&scope=identify",

  // URL deines Lizenz-Servers (server.py). Ersetze mit deiner Domain.
  licenseServer: "http://154.43.52.66:8787",  // <-- hier deine Server-URL eintragen

  // Endpoint des Bots, der nach Key-Aktivierung die HugoMacro+ Rolle vergibt.
  // Bot laeuft lokal -> ueber Cloudflare-Tunnel/ngrok erreichbar machen.
  grantRole: "http://127.0.0.1:8788",  // <-- Bot Grant-Endpoint (tunneln!)

  // Download-Link zur .jar (z.B. GitHub Release)
  downloadURL: "https://cdn.discordapp.com/attachments/1440429787603800247/1526721977623253123/HugoMacro.jar?ex=6a580e24&is=6a56bca4&hm=35757a1bbb26049f5d9b1f3f7e834c7533514bb385ff5476295b1dec3d900c2c&",

  // Letzte Version / Datum (Anzeige)
  version: "v1.7.0",
  lastUpdated: "14. Juli 2026"
};
