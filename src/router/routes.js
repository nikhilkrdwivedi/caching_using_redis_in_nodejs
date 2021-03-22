import  {getData}  from '../controller/controller.js';
import Router from '@koa/router';
import checkInCache from '../middleware/middleware.js';

const router = new Router();

router.get('/',checkInCache ,getData);

export default router;