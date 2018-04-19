import dotenv from 'dotenv';
import Koa from 'koa';
import mount from 'koa-mount';
import serve from 'koa-better-serve';

dotenv.config(); // load .env config vars onto process.env

const serverPort = process.env.SERVER_PORT || 9000;

const app = new Koa();

const publicFiles = new Koa();
publicFiles.use(serve('./public'));

const distFiles = new Koa();
distFiles.use(serve('./dist'));

app
  .use(mount('/assets/synthetik', distFiles))
  .use(mount('/', publicFiles))

  .listen(serverPort);

console.log(`Listening at port ${serverPort}`);
