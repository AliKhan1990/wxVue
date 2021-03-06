var program = require('commander');
function list(val) {
  console.log(val);
  return val.split(',');
}
program
  .version('1.0.1','-V --version', 'a' )
  .option('-u, --uid [value]', '实例ID')
  .option('-a, --app [value]', '系统名称')
  .option('-h, --html [value]', '系统名称')

  .option('-e, --env [value]', '环境')
  .option('-d, --debug', '启动调试')
  .option('-m, --module', '启动模块')
  .option('-t, --title [value]', 'Title')
  .option('-i, --ico [value]', 'Ico')

  // .option('-V, --version', '版本信息')
  .description('企业钱包服务')
  .parse(process.argv);
program.app = program.app || 'main';
program.html = program.html || 'main';
console.log('title: ' + program.title);
console.log('ico: ' + program.ico);
global._program = JSON.parse(JSON.stringify(program));
