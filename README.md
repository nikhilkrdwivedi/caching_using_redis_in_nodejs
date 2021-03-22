# Caching Using Redis in Nodejs with Koa
##### _Developer : Nikhil Kumar_

###### `A cache is a temporary storage area. For example, the files you automatically request by looking at a Web page are stored on your hard disk in a cache subdirectory under the directory for your browser. When you return to a page you've recently looked at, the browser can get those files from the cache rather than the original server, saving you time and saving the network the burden of additional traffic.`

This is demo project of caching using Redis in Nodejs. This repository contains following folders/file. 
  - src
  - screenshots
  - .gitignore
  - README.md
  - package-lock.json
  - package.json
### Requirements 
Following setup required to make sure project up and run:
  - Nodejs 
  - Redis
  - Postman [optional]
  - VS Code [optional]
  
### Project Start Guide
##### Step-1
- Check if Node is installed in machine or not by using command `node -v`.
- That will return version of node.
- if Node is not installed, install `Node v14.15.3` or above.
- Installation guide is [here](https://nodejs.org/en/download/package-manager/)

#### Step-2
- Check if Redis is installed in machine or not by using command `redis-cli --version
`.
- That will return version of Redis.
- if Redis is not installed, install Redis.
- Installation guide is [here](https://redis.io/topics/quickstart)

#### Step-3
- Go to root folder and run following commands -
    ```sh
    $ npm install or  yarn install
    ```
- To run app, you can type following  command
    ```sh
    $ npm start
    ```
- This will start app at `http://localhost:3000/`
### Project Structure and  Flow
#### Structure:
- Package.json file contains `all dependencies` of project.
- Server.js file is use for starting server using `Koa framework`
- Route folder contains router.js file for `routes`.
- Controller folder contains controller.js file for `request handling` and response.
- Middleware folder contains middleware.js file for `middleware function`.
- db folder contains redis.js file which is exporting a `connection for redis-cli`.
- Config folder contains config.js file for configuration.
#### Flow:
- When user first time hit `http://localhost:3000/`. API call will happen on `https://jsonplaceholder.typicode.com/comments` and fetch data. Here in controller file, we are saving this response in Redis and returning actual data. Here we are saving data in Redis with `TTL [time to live]` so after certain amount of time. This data will deleted from Redis. When user again hit on `3000` port. This time `checkInCache` middleware check if comments keys exists or not. If yes then it will  return data from cache else using `next middleware` it redirect to main `getData` function.
- ###### Note: `Before caching time of response: 664ms`

- ![Before Cache](https://raw.githubusercontent.com/NikhilKrDwivedi/caching_using_redis_in_nodejs/master/screenshots/response_from_api_call.png)
- ###### Note: `After caching time of response: 92ms`


- ![Before Cache](https://raw.githubusercontent.com/NikhilKrDwivedi/caching_using_redis_in_nodejs/master/screenshots/response_from_redis_cache.png)
###### `So, As we can see using caching we can reduce response time. Also it's depends upon usecase where to use cache or not.I hope this helps you to understand caching.`




###### I have tried my best to give best documentation so that any one can easily undersatnd and use this project. But there is always hope of improvement so feel free to reach out to me your valuable suggestions will always welcome. Also, I would like to thank jsonplaceholder site for their open API. 

#### Nikhil Kumar
[linkedin](https://www.linkedin.com/in/nikhilkrdwivedi/) | nikhil.dwivedi@outlook.com | https://www.codeforcoder.com
