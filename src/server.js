
import Koa from 'koa';
import endpoints from './router/routes.js';
import {config} from './config/config.js';

//initialization of application
const app = new Koa();

//routers endpoints
app.use(endpoints.routes()).use(endpoints.allowedMethods());

//server start
app.listen(config.port || 3000,function(){
  console.log(`server is started here...`);
});
