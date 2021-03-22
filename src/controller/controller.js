import fetch from 'node-fetch';
import redisClient from '../db/redis.js';
import {config} from '../config/config.js';

const getData = async (ctx) => {
    try {

        const options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        let response = await fetch('https://jsonplaceholder.typicode.com/comments', options);
        let responseParseData = await response.json();

        //saving to cache 
        await redisClient.set("comments", JSON.stringify(responseParseData), 'EX', config.ttl);

        return ctx.body = responseParseData
    } catch (error) {
        ctx.body = error
    }
}

export { getData }
