import redisClient from '../db/redis.js';

const checkInCache = async (ctx, next) => {
    //if key found in redis then response will return from redis
    try {
        let response = await redisClient.get('comments');
        console.log('response ',response)
        if (response) return ctx.body = await JSON.parse(response);
        await next();
    } catch (error) {
        await next();
    }

}
export default checkInCache;