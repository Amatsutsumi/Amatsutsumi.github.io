/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","beee0baf9026b1ce5a1f738528286878"],["/archives/2024/04/index.html","ab69857a575f43372bdfebb547e71983"],["/archives/2024/index.html","e55c9b94fbb318ce199016628a886aaf"],["/archives/2025/02/index.html","d3a8f53a665a1598ba883bc25e7cd484"],["/archives/2025/02/page/2/index.html","2a5332f7a1529533ebe33974dfe46d71"],["/archives/2025/02/page/3/index.html","ea0331949e6564334cec6f717e4568c0"],["/archives/2025/02/page/4/index.html","7246387d838f1d3cd636dd2f5549bdef"],["/archives/2025/09/index.html","0e2ef7da00e84af52de74ff15fcd6c35"],["/archives/2025/index.html","cad0fa50e207c5de23898118ff38a7da"],["/archives/2025/page/2/index.html","7fa3cf64246bdf82d17df99b9fc0924f"],["/archives/2025/page/3/index.html","9854e5a9c2b323bf56c5920a8b702ea2"],["/archives/2025/page/4/index.html","51a8ce379973c200c9d8d893fda2cf0e"],["/archives/2026/02/index.html","c8048490edc67bcd677f02313fbb51f2"],["/archives/2026/index.html","4020076e53dad4bc1f15b96d5af34732"],["/archives/2925/01/index.html","85a6dbcec914002dde95ace8d8193157"],["/archives/2925/index.html","2d0ceeadc9a161c04ef5c33011387784"],["/archives/index.html","79cff0db846d092147d30153f7b0b64e"],["/archives/page/2/index.html","011e0b71221d95c2a5f4130204abac7e"],["/archives/page/3/index.html","cb56b1e090f61b2929c8be60f94a7ad7"],["/archives/page/4/index.html","e962d4b175e67f3138cabb2377cf4318"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","17a1a0e88cbe908e7768e525ac32b9ba"],["/categories/galgame/page/2/index.html","5c4495747a49354d0d4e0fa7950fa016"],["/categories/公告/index.html","98472d2d38f41e6d62a295da3aeaea6a"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","7b343d73753322dc7f9f41b04d6d84f1"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","89a1020ee594bb293aa2d6d5d1e10e68"],["/page/2/index.html","e031412475488ff6831bba3b1b0972b1"],["/page/3/index.html","0e2c110fad5cc31376cca3b180d1b698"],["/page/4/index.html","e82be99b4d4cd70e6db11bb7e84b877c"],["/posts/10c9dd98.html","e730254d752405fd7f8cd31f353babaf"],["/posts/15ef14c2.html","5b45aa81295b785df929dc1b1f911d88"],["/posts/15f3959d.html","58d98dff55c14586ddab757786c9ea93"],["/posts/1d59b71f.html","8f103efdf30c5ab11764af04ea8d8b23"],["/posts/28397adc.html","5561befd0499cd9674904779072218ba"],["/posts/2cf620f0.html","f1c7de62be933f1fbf0d2857e66d2f79"],["/posts/303007ad.html","8bee91d5731a385896c60f2f96dbb55b"],["/posts/3f7d823a.html","ea1dbabc110f58dae995ffdcfa473c75"],["/posts/44124a6b.html","294ce9c990a961d236563be115fc994e"],["/posts/4b689be3.html","bbb3aa0c82160e579be58c8f39e47b36"],["/posts/4cf8423f.html","be792a32e72c4bef2184a1218ddb2616"],["/posts/4dcf85c.html","44aeae764778f1edc85e8c7845706680"],["/posts/51c9b1ff.html","0fc0f1ad89f5755aa7204d3c99ec4317"],["/posts/52b5b3c6.html","fe73c8fe9bd0d2c8e08e8789643454dc"],["/posts/6515f032.html","6931d657d0704020f3e631d69e764612"],["/posts/71131d34.html","b885b74c6fa1eb131e5c6800f736d21d"],["/posts/78a8a8d3.html","c61a2ed4ea86c31beb851814e4ec7d46"],["/posts/7e3aa3e2.html","565b187340b0918a2cdb927b5614f2cb"],["/posts/80fe2691.html","1c87906723e119596c0eed72b872089a"],["/posts/81ac52e9.html","4771a3d0a5f34fe2c55708dbf9b7b1e3"],["/posts/886f8d3.html","d98b9b0d105e8db3036b15a842c6e268"],["/posts/8dd520d9.html","07c10f0f61506b4e97869046e1835ace"],["/posts/8f555654.html","82ab26bed4f13142c37098456d5a4358"],["/posts/94d3c794.html","6e41a2d4b99bba0b3dcbeb1f25c1449b"],["/posts/97f50eea.html","c227573a9f5eebf5ec65c88b0579f7c2"],["/posts/98662d05.html","5ba013aa01ff4c4ad33cfabe0fc2412f"],["/posts/9a2f6162.html","e5ddb347dbb3416e10744ba5ee275ccb"],["/posts/9b22a48d.html","07b1faa398673428d225d8a904c9fe3f"],["/posts/9f61c1a0.html","8e096b4e2c3b54102970418363d425af"],["/posts/b5fb773f.html","2fabfd8c5d5744ac0989152f34d982c5"],["/posts/c1b2c6c9.html","4397152841ebfd5ff3a25986bbd50d44"],["/posts/c497a412.html","2e4f4dabcadd4617bb67f5b9302a02a3"],["/posts/c5de299a.html","e806474862bcd92148900327d494b6ee"],["/posts/c70bba9c.html","36427dbc7c357b52fd2326638315069f"],["/posts/cbebef2b.html","9d59bb25d9f82da7dcde9eed13808190"],["/posts/ce25023e.html","c62146414fb951bf0d224fbc0255c989"],["/posts/d2fd4837.html","8ed53d6095fb689fd9786bc3a51d012d"],["/posts/d3a745a8.html","5ef52115043c6d200f0468becd5a3c83"],["/posts/e3ab6ad8.html","3377d24307d2bb8e8f82d85b8ce0157a"],["/posts/ee1ed673.html","68a4afb900a7a3324f25468af65630e1"],["/sw-register.js","d5382c2ab5aa4d7a7808dc0042d044ed"],["/tags/Circle-Mebius/index.html","3997f3a755b50d7e34702640d2111fe3"],["/tags/Omegaの視界/index.html","88d81ee19c3905e84349172a29da371f"],["/tags/Witch/index.html","fe1df7a6161372d86947c96e75bf9ce9"],["/tags/galgame/index.html","6b179fc87c1fecb2450c4d8601d02aa7"],["/tags/galgame/page/2/index.html","20168e87be17270199a1c33ad3629d95"],["/tags/gal资源/index.html","0d6c00538bd989f5ef92066c6f8c8b3e"],["/tags/gal资源/page/2/index.html","5b95fa6a37a1f2b9f3510816445f1188"],["/tags/gal资源/page/3/index.html","2bcff46415298a6a205683334b776ebc"],["/tags/index.html","594da17030ba9a420b3abccd188fb2ed"],["/tags/rkr/index.html","15d40ec46fd557d1ef1d9eb6dc32df31"],["/tags/停产/index.html","1420e4a78232fa1c4b0b3511166f4103"],["/tags/公告/index.html","0c77be35b83f66fb2ecc05fedeac69dc"],["/tags/同人/index.html","2ee1465744a78769dab4c15fa21f762c"],["/tags/水仙/index.html","4b62bdf0dcdac6dafb0c6f1c3f8a2089"],["/tags/猫猫社/index.html","54244a24c0a05b37ca023c8c2a3208f4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
