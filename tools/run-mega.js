const cp = require('child_process');
cp.execSync('ng serve mega-main --prod', { stdio: [0, 1, 2] });
