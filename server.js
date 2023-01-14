import koa from 'koa';
import Image from "./index";
import { download } from './download';

const app = new koa();

app.use(async ctx => { 
    if (!ctx.query.path) {
        return;        
    }

    const target = await download(ctx.query.path);
    const instance = new Image(target);
    const topColorList = await instance.exec();
    ctx.body = '此图像的前3色彩是 ' + topColorList.join('、');
});

app.listen(7001)
console.log("listenimg on http://127.0.0.1:7001");

