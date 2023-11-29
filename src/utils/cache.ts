import Redis from 'ioredis';

// Initialize a Redis client
const redisClient = new Redis();


// Function to set data in the cache with an expiration time (in seconds)
export const setCache = (key: string, data: any, expireTimeSeconds: number = 60) => {
    redisClient.setex(key, expireTimeSeconds, JSON.stringify(data));
  };

  // Function to get data from the cache
export const getCache = async (key: string) => {
    const cachedData = await redisClient.get(key);
    return cachedData ? JSON.parse(cachedData) : null;
  };

  