import {WEB_SERVER_SETTINGS} from './constants/global'
import * as Koa from 'koa'
import knexConfig from './knex';

const app = new Koa();

const {PORT} = WEB_SERVER_SETTINGS

app.use(async ctx => {
  ctx.body = 'Hello World';
});

// 1 Create web server
// 2 Install DB -> pg
// 2.5 TS
// 3 ORM => sequlize, TypeORM, Knex/Objection

app.listen(PORT, () => {console.log(`serveR is started ${PORT}`);});