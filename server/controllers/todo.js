const index = async (ctx, next) => {
    await ctx.render('todo', {
    });
};

export default {
    index
}
