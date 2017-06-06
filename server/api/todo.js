import apiUtil from '../utils/apiUtil';
import models from '../models/index';

/**
 * Todo api
 */
const get = {
    page: async (ctx) => {
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
        let result = null;
        try {
            const delCnt = await models.Todo.destroy({
                where: {
                    id: id
                }
            });
            result = delCnt >= 1 ? apiUtil.success() : apiUtil.failure();
        } catch (e) {
            result = apiUtil.failure();
        }
        ctx.body = result;
    },
    save: async (ctx) => {
        let {title, content, startTime} = ctx.query;
        let result = null;
        try {
            await models.Todo.create({
                title: title,
                content: content,
                startTime: startTime || new Date()
            }, {
                logging: true
            });
            result = apiUtil.success();
        } catch (e) {
            result = apiUtil.failure('', 1, e.message);
        }
        ctx.body = result;
    }
};

export default {
    get,
    post
};
