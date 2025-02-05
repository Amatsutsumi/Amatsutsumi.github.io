/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a56cb562bd62c83260a5fd0deb4b0c6a"],["/archives/2024/04/index.html","689edd5e8c5e85426f767e0545dc8eeb"],["/archives/2024/index.html","b99dd70c1930d54c364904cf8e1b4f16"],["/archives/2025/02/index.html","42b7371e25ebedf028d66020de3edd11"],["/archives/2025/02/page/2/index.html","e34b9a8ee61f770a76a87f67ab574dce"],["/archives/2025/02/page/3/index.html","f2ae0bce5934852ad3f73afa0056c911"],["/archives/2025/index.html","8321d3fb848d1ebd762c3f9dc5c79043"],["/archives/2025/page/2/index.html","7bc9c3bfa8cda008eb818309f923e62f"],["/archives/2025/page/3/index.html","cb960b4f2b88b5ddcdd876eac908a0b3"],["/archives/2026/02/index.html","70fbca5f4b1854aa4436b0cb4b0740d4"],["/archives/2026/index.html","c4d9eaf1ca42bc490c83381ba580127b"],["/archives/2925/01/index.html","3bb5c940f1f4fa18590aa6ed5189c4f8"],["/archives/2925/index.html","27507aed3905a47434a588f085729020"],["/archives/index.html","b7062a25c604c1321ca2fdcd0c8feaa8"],["/archives/page/2/index.html","072f3ccaf2e1b3d6187037b2e1df55a6"],["/archives/page/3/index.html","6f36f3ac52d0766e056b614778270da7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","7cd72ce7067cc97049228428a8ede07c"],["/categories/公告/index.html","8be1b5cf0748686bd74df9d58b7ecddd"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","1175154c97fd0360794ec875f5f6244d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","a1ebb87f951aa907350af68388c1dbe1"],["/page/2/index.html","55103261107128c061f3676225235d70"],["/page/3/index.html","1e0fe896b28e44f750999af707ff9262"],["/posts/15ef14c2.html","a7e73cc9a8d5c8f33b7fe1e9b0d72210"],["/posts/15f3959d.html","7a7bac00d369372282c018dfd12f92cc"],["/posts/1d59b71f.html","6399a91d942a49b473c54a71ace296dd"],["/posts/2cf620f0.html","acd8af6f3ec4bd6f81b08bc005eb0586"],["/posts/44124a6b.html","b7327c520b31d3e7ef5de917a76a8d35"],["/posts/52b5b3c6.html","a4acbf604d26abbd2cb92b95fd025828"],["/posts/6515f032.html","1d3e3158bd648c29c870bd2020b1d884"],["/posts/80fe2691.html","f04887f2cbf80c91bb825a90c9816d27"],["/posts/886f8d3.html","541cefadc4d83f5ff567faf9d64654da"],["/posts/8dd520d9.html","c1845bf1b03f1a882d9b294774553486"],["/posts/8f555654.html","26e556287a27ac8c1b943c735fd56154"],["/posts/94d3c794.html","1e86e6d9fd7f4a2013857f5d441995aa"],["/posts/97f50eea.html","723a3f232a8de79f4fce356f8ff8ba84"],["/posts/98662d05.html","d1db6fbf418c92164385b946301acbde"],["/posts/9a2f6162.html","7905400643623d3f3f2905e66181aad0"],["/posts/9b22a48d.html","56acd2d61456c31d619b5bcaca9fb25a"],["/posts/9f61c1a0.html","56e86bec8d63fecd43324be19b8b6327"],["/posts/b5fb773f.html","bb49f461cdc997ff6cfc214b03254fce"],["/posts/c1b2c6c9.html","22cf41d4dd1122598d2330e63d0399f8"],["/posts/c497a412.html","d2f53b81f7a24e1064461bb07bdf88bd"],["/posts/c5de299a.html","7b55bb2e98f67f96ea14316454e40f2d"],["/posts/cbebef2b.html","4e093b672cf87321a35b5d96a16e2ad5"],["/posts/ce25023e.html","4f04d2daf1b8cab0b89e07558a4ffc53"],["/posts/d3a745a8.html","ed03928868744bd009cd25f4ed670bd7"],["/sw-register.js","ec0f9bc2a9b3f48b9306b0a787da2b9a"],["/tags/Circle-Mebius/index.html","538484a70cab2e3f61080a49cf695af7"],["/tags/Omegaの視界/index.html","50ea73e40293d036f1e0f1a1f74fc2d3"],["/tags/Witch/index.html","09e588c61ee600a64d433767a2ebedbe"],["/tags/galgame/index.html","4d5aa563510c94f92ffd7f91e9a6eb06"],["/tags/gal资源/index.html","30c53edc44877761dc593ac140215b20"],["/tags/gal资源/page/2/index.html","791ee1ea7839ce90b7d8a28103becd8b"],["/tags/index.html","8c925214443a90a31b0e4d5e3349a3d3"],["/tags/rkr/index.html","1024dfe4ab4a4c828c4a0a66c44a7cf2"],["/tags/公告/index.html","1e563599698ae288c2e7f1e4c744820f"],["/tags/同人/index.html","d2b059fd88addd015d08b60e6ddcd6c1"],["/tags/水仙/index.html","3cdfbaaaeaa6efaf7705f5b9b8b249f9"],["/tags/猫猫社/index.html","74b0eddc3643ffbf6ddac079e987d726"]];
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
