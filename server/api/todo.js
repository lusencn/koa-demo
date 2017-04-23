import apiUtil from '../utils/apiUtil';
import models from '../models/index';

/**
 * Todo api
 */
const get = {
    list: async (ctx) => {
        let {startIndex, pageSize} = ctx.query;
        const result = await models.Todo.findAndCount({
            limit: pageSize || 10,
            offset: startIndex,
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
        let {id} = ctx.query;
        const result = await models.Todo.destroy({
            where: 'id=' + id
        });
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
