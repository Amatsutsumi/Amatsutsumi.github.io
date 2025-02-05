/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d25f3c0f01791d527e23845f169c8bcf"],["/archives/2024/04/index.html","d9eb808e8cc672201dbb9bfba70edb3e"],["/archives/2024/index.html","81e4dfb00b3fa9299b5823005d23b741"],["/archives/2025/02/index.html","83d138cffe7682ec989ac019cfe7f0df"],["/archives/2025/02/page/2/index.html","1feb88895e8ae26cc976211f19cdd387"],["/archives/2025/index.html","fd6387d146fe41e833edce659aa99956"],["/archives/2025/page/2/index.html","3d0b0cbc0f8d28fa742331c3ece7a9cd"],["/archives/2026/02/index.html","2e1d6c76f43975cd7bb04992fa63c1df"],["/archives/2026/index.html","55956c8837fdfe864b9ef69bf9dfb03c"],["/archives/2925/01/index.html","ccb621f887c0ed3cc6ada03d9ad2811a"],["/archives/2925/index.html","23738109cfb7bdfeb643e94d250f92c7"],["/archives/index.html","b33681208e1c6fd02dd06118cd6f1ef6"],["/archives/page/2/index.html","50c8b28617f6aa5d37868f277b261af8"],["/archives/page/3/index.html","6197694ea9f902098b6c3d52c006e2a7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","9d59a6af60d58e246870e019d93544c6"],["/categories/公告/index.html","6f9b84f5e3dc197842aa08061eb671d1"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","129f6dda4880e5d9748c6e33461df746"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","c10d14d4a656f71a0c243b1de3719e03"],["/page/2/index.html","8f827fb8e2405d21f4749f4d827d58a1"],["/page/3/index.html","56eedffb0ba0ea69809ae5b18dea75cb"],["/posts/15ef14c2.html","d0b3636892a6b16c60bd9571d61e4eb4"],["/posts/15f3959d.html","2009b019ee18be895bc54e931efa3713"],["/posts/1d59b71f.html","cd8c0d38c89376c824eae88635f591f9"],["/posts/2cf620f0.html","f4dc12a303f88bd1f7d2a96f49e6ad25"],["/posts/44124a6b.html","bca5db9b0188720d32fb4d0c2baabcb4"],["/posts/52b5b3c6.html","1001d942b722b67560c499987e65a07c"],["/posts/6515f032.html","1c80f91e280eadf8481a5f87dcafa4fc"],["/posts/80fe2691.html","d462e1adb5457b2313034db2866d2858"],["/posts/886f8d3.html","88e79760a50bcd4e7827f6bc1f8c2203"],["/posts/8dd520d9.html","93a0c2b2be028efe95ef11e94400a831"],["/posts/8f555654.html","6efb10b6c0366a8691c5a60ba6a089a9"],["/posts/94d3c794.html","e0ea8607fa9006d7e3fb80dba5555f4b"],["/posts/98662d05.html","3d14cd300bd7f3dcbc8581f933d01d76"],["/posts/9a2f6162.html","ff817bfbec972ededfbffa0dc3ad1ce4"],["/posts/9b22a48d.html","2a2fe58c8efa02a90631a1fb26770fe6"],["/posts/9f61c1a0.html","694a45ec5867f2aa071c27d2e1f81b49"],["/posts/b5fb773f.html","06c0ee5dcc6c1fc595310f5e90a7ba6d"],["/posts/c1b2c6c9.html","33d97f4e0198a52ef8309f79942efbce"],["/posts/c497a412.html","dfc93d72cd7319df2f0f06653bc679fc"],["/posts/c5de299a.html","3cadccfa1d4b8d216265f047b8d9fb53"],["/posts/cbebef2b.html","e55867a1a369439bbb96b57e8f881528"],["/posts/ce25023e.html","70e3a6fceb4bf1e78c7d121006a2364f"],["/posts/d3a745a8.html","bcb2cc74f3c6025101ec4d5ff6cdc908"],["/sw-register.js","ebed2f6b1840abb751e8b6f792c55675"],["/tags/Circle-Mebius/index.html","5a9b21a2c0710706a67404c7c55732e0"],["/tags/Omegaの視界/index.html","07d18955fd916ad3d126647fc94c2b47"],["/tags/Witch/index.html","772b4935d5353c884a2b5dfab0ad5936"],["/tags/galgame/index.html","6334818ce8de0a0ea48fe47e3a828f4b"],["/tags/gal资源/index.html","38beee9331d8c8c12fa7c020fad27cb8"],["/tags/gal资源/page/2/index.html","e38aa9dab1b9f843cf4e509caf7a737d"],["/tags/index.html","ab049ea60a7a58df2e3c3d366c1a2b48"],["/tags/rkr/index.html","8130bc47d39f196c9484c53ed324b9fa"],["/tags/公告/index.html","17468fed4c425a436b032afe0b65ffa8"],["/tags/水仙/index.html","160efb94fe8ebb2fc17897993c550a80"],["/tags/猫猫社/index.html","240b294b6eaebffebb194ad4c1c97e6e"]];
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
