const index = async (ctx, next) => {
    await ctx.render('index', {
        name: 'Hello World'
    });
};

export default {
    index
}
