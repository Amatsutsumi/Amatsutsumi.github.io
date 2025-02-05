/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d923dcf3e24bf69895af6bba0656c3ab"],["/archives/2024/04/index.html","45b11be135cd9a1434fdf53d43844955"],["/archives/2024/index.html","be404ed407193e66cf852dc2e4a5c3d0"],["/archives/2025/02/index.html","e2b65f9f30695200602362d90c66df9d"],["/archives/2025/02/page/2/index.html","33da67b4f1ee1748d5dc61a0565c028f"],["/archives/2025/index.html","8d5251b2a7c3a6bcaa1ad2d44a823230"],["/archives/2025/page/2/index.html","84fa7533fe4148307ad8a7bd59fe44f4"],["/archives/2026/02/index.html","4945796ab395ec10b253c6666dd9e273"],["/archives/2026/index.html","b31685352f6ace10fff822a03cc5fb4f"],["/archives/2925/01/index.html","e4116f18a6a04b0220861bd7480df08f"],["/archives/2925/index.html","0e620ec80b6b59579907c3ab6e781e2f"],["/archives/index.html","7fa383715ed0998b0d30e56c6d582f94"],["/archives/page/2/index.html","9cd554bde1dc8ef6344dfe29b083b40b"],["/archives/page/3/index.html","0999e3b104b897fdd3fe700c0bd0be77"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","4b98962e2cb9a9fb1b3a8b5773a47d8f"],["/categories/公告/index.html","70699a49042e24f478466dc2288b6d29"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","e6282f22e8db091782b2163ccf795e84"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","de950d89998e109e8bb2c575a383f050"],["/page/2/index.html","ea6a388f267eb84685459bb77dc325e3"],["/page/3/index.html","c436544a41949e9bd91adc5a87aba3f7"],["/posts/15ef14c2.html","3c0cee6128a741190ce96301f430c11a"],["/posts/15f3959d.html","cf9882a215e84f4dade3f5936fc39bdf"],["/posts/1d59b71f.html","409561c1e6c042e953f9d0b7831f1258"],["/posts/2cf620f0.html","8a535c34e5e7e4a06cc36bf5579d1762"],["/posts/44124a6b.html","ed5d8e84826d446ec37f23c81a86bb2f"],["/posts/52b5b3c6.html","047ba9453f5d12225b4d41afbcf192c1"],["/posts/6515f032.html","896fc42b40b7fff56dc6f336cbf35c0e"],["/posts/80fe2691.html","9dc949d4e79f0fa4d4092c1def00243c"],["/posts/886f8d3.html","128ec6b5f8b4ecf5839319f7e7d6512b"],["/posts/8dd520d9.html","ad92f8361f31b3cb6d473836962946b5"],["/posts/8f555654.html","f58a77560d05c1ebc8a79dc0222f5362"],["/posts/94d3c794.html","82078913f979aa85ef48eeb6e92294a0"],["/posts/98662d05.html","992c395f9596d0dbe8dbc1c5489c4a64"],["/posts/9a2f6162.html","48417c531d6f79d5f356d4b8fef35c02"],["/posts/9b22a48d.html","d49511a54090636ddeaf825e189cbc05"],["/posts/9f61c1a0.html","454de62e436cee003323af8dc93921f9"],["/posts/b5fb773f.html","8a3a0a5d505e8394a573d6a54b70615f"],["/posts/c1b2c6c9.html","6d83b1a71fc6a6de5c94d700d910e381"],["/posts/c497a412.html","a88d3394b57be1717883cc24fc63b05b"],["/posts/c5de299a.html","f50f5588bdfdb92028b45d5c017ad049"],["/posts/cbebef2b.html","0d50cb5df42bfae12b47e461643c889a"],["/posts/ce25023e.html","4eb18ad999df4ae094eec4d7e150449d"],["/posts/d3a745a8.html","649a03d4c29fcc26888101a0a144c5be"],["/sw-register.js","6bf03e79f5d65213331b8bffa23294d5"],["/tags/Circle-Mebius/index.html","275834daac905a1adfe1c6ab6e950f5c"],["/tags/Omegaの視界/index.html","eabcf0a6970962275ab511290bc2a98d"],["/tags/Witch/index.html","e1901ec8c0a1b755511729ab7122e7cb"],["/tags/galgame/index.html","74bdbb494a62f9b96da2e1ba51b8211d"],["/tags/gal资源/index.html","2269354aa6909d424d267f070de5587c"],["/tags/gal资源/page/2/index.html","6765ce4d64102f111ee517f6a6029e19"],["/tags/index.html","690409a85f2340c3b8337dae8cbce16b"],["/tags/rkr/index.html","53dd8d73cf6890e2f8985c231f27db3e"],["/tags/公告/index.html","50cbf63f02219cfa0acafeb2d695bdf0"],["/tags/水仙/index.html","a9457133d27b200d4894f9c17abece90"],["/tags/猫猫社/index.html","3e8f83f02525c538a5b958ad4e4dbd56"]];
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
