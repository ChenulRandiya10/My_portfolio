import { execFile } from 'child_process';

const port = process.env.PORT || '5005';

function run(command, args) {
  return new Promise(resolve => {
    execFile(command, args, { windowsHide: true }, () => resolve());
  });
}

async function freePort() {
  if (process.platform !== 'win32') {
    return;
  }

  const command = 'powershell.exe';
  const args = [
    '-NoProfile',
    '-Command',
    `Get-NetTCPConnection -LocalPort ${port} -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }`,
  ];

  await run(command, args);
}

freePort().then(() => {
  process.exit(0);
});
