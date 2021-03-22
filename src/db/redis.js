
import asyncRedis from 'async-redis';
import {config} from '../config/config.js';

const client = asyncRedis.createClient(config.redisConfig);

export default client;