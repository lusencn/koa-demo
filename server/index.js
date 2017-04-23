import Koa from 'koa';
//import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';
import kstatic from 'koa-static';
import views from 'koa-views';
import config from '../config/config';
import routes from './routes';

const app = new Koa();

// 解析静态资源
config.serveStatic && app.use(convert(kstatic(__dirname + '/../dist')));

console.log(1);

// cookie签名密钥
app.keys = [config.secretKey];

// 集成视图层（含模板引擎）
app.use(views(__dirname + '/views', {extension: 'pug'}));

// 集成路由
app.use(routes.routes());
//app.use(bodyParser());

if (process.argv[2] && process.argv[2] == 'console') {
    const repl = require('repl');
    let replObj = repl.start('> ');
    replObj.on('exit', () => {
        process.exit();
    });
} else {
    app.listen(config.port);
}

export default app;
