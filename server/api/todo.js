import apiUtil from '../utils/apiUtil';
import models from '../models/index';

/**
 * Todo api
 */
const get = {
    list: async (ctx) => {
        const result = await models.Todo.findAndCount({
            limit: 10,
            offset: ctx.params.start,
            logging: true
        });
        ctx.body = apiUtil.success({
            list: result.rows,
            count: result.count
        });
    }
};

const post = {
    del: async (ctx) => {
        ctx.body = apiUtil.success();
    },
    save: async (ctx) => {
        const result = await models.Todo.create({
            title: 'title-' + (new Date()).getTime(),
            content: 'content-' + (new Date()).getTime(),
            startTime: new Date()
        }, {
            logging: true
        });
        ctx.body = apiUtil.success();
    }
};

export default {
    get,
    post
};
