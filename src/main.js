// This file is bundled by Vite into dist/, and dist/ is what the Desktopr
// build action embeds in the desktop app.
const status = document.querySelector("#status");
status.textContent = `This page is running inside the app, from its own files (built ${new Date().toISOString()}).`;
