const cp = require('child_process');
const shell = require('shelljs');

cp.execSync('ng build shared-bundles-home --prod', { stdio: [0, 1, 2] });
cp.execSync('ng build shared-bundles-card --aot', { stdio: [0, 1, 2] });

shell.cp(
  'dist/apps/shared-bundles/card/main.card.js',
  'dist/apps/shared-bundles/home/main.card.js'
);

cp.execSync('http-server dist/apps/shared-bundles/home -p 4200', {
  stdio: [0, 1, 2]
});
