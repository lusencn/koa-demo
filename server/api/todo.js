import apiUtil from '../utils/apiUtil';

/**
 * Todo api
 */
const get = {
    list: async (ctx) => {
        ctx.body = apiUtil.success({
            list: [],
            count: 0
        });
    }
};

const post = {
    save: async (ctx) => {
        ctx.body = apiUtil.success();
    },
    del: async (ctx) => {
        ctx.body = apiUtil.success();
    }
};

export default {
    get,
    post
};
