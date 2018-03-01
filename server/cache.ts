import * as redis from "redis";

const redisClient = redis.createClient();

const cacheInterface = {
    /*
     * @param {String} key cache key
     * @param {String} value cache value
     * @param {Number} expiration expiration time in minutes
     */
    set: (key, value, expiration: string) => {
        redisClient.set(key, value, "EX", 60 * expiration);
    },
    get: (key, callback) => redisClient.get(key, callback)
};

export default cacheInterface;
