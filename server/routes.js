import Router from 'koa-router';
import path from 'path';
import json from 'koa-json';
import moduleUtil from './utils/moduleUtil';

const routes = Router();
const apiRouter = Router({
    prefix: '/api/v1'
});
const pageRouter = Router();

// api controller路由设置
let apiController = moduleUtil.getAllModulesInDir(path.join(__dirname, './api'));
apiRouter.get('/:controller/:action', async (ctx, next) => {
    let {controller, action} = ctx.params;
    await apiController[controller]['get'][action](ctx, next);
});
apiRouter.post('/:controller/:action', async (ctx, next) => {
    let {controller, action} = ctx.params;
    await apiController[controller]['post'][action](ctx, next);
});

// page controller路由设置
let pageController = moduleUtil.getAllModulesInDir(path.join(__dirname, './controllers'));
let regPaths = ['/:controller/:action', '/:controller', '/'];
regPaths.forEach(path => {
    pageRouter.get(path, async (ctx, next) => {
        let {controller, action} = ctx.params;
        (controller == null) && (controller = 'index');
        (action == null) && (action = 'index');
        let ctrl = pageController[controller];
        if (!ctrl) {
            return;
        }
        await ctrl[action](ctx, next);
    });
});

routes.use(apiRouter.routes());
routes.use(pageRouter.routes());

export default routes;
