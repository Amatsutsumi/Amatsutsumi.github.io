/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","b4aad150179527f53e239099ede90127"],["/archives/2024/04/index.html","f4377edd774ca88b64b8575a78b74e0d"],["/archives/2024/index.html","b1e2a60cdb29ee2f6bc49d324b7090b9"],["/archives/2025/02/index.html","2bede0489223566d0c23688aec5539d9"],["/archives/2025/02/page/2/index.html","1880608e7c004c070e651295740c42c1"],["/archives/2025/index.html","bf0fdabed2b2d253bde05bfb4f402fdc"],["/archives/2025/page/2/index.html","b2de0019ab8eb6b7cc3510e184db9127"],["/archives/2026/02/index.html","8d03cad3bc761989d9f55ae7604f2e73"],["/archives/2026/index.html","c242c74d166e0b52531109ddc681eb7a"],["/archives/2925/01/index.html","9617a898ba705c3df34b8f4ec0c1d4bb"],["/archives/2925/index.html","1ea84b1f631fe2582ca62149ea704ed3"],["/archives/index.html","1e2e3b3959e48ff51c4e46c67784b637"],["/archives/page/2/index.html","7d212d83cb1f1931e6fe1d077bba4545"],["/archives/page/3/index.html","0b5bf2059414593dc9a51484370c8923"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","55ec18c194ca3d57a41d7b8af3ae434b"],["/categories/公告/index.html","04b8acd730769061787740821ed237ae"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","00dfcc7665af4db3912e19b572817d90"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ec1aec8c3b851fa8e99b3ebd8eaddc1e"],["/page/2/index.html","bd897dc316823093f6f5cad31516a972"],["/page/3/index.html","62912b68ebdf8e47a0dc0528b5f29597"],["/posts/15ef14c2.html","66eae77e98928a7d02cf5feb7cba0424"],["/posts/15f3959d.html","c720e9dd4f216b3eea1af508fa3dee8d"],["/posts/1d59b71f.html","544c75b621687012bee68010f0f33cc4"],["/posts/2cf620f0.html","6b07d92994a87660867eee20c11d768b"],["/posts/44124a6b.html","bca5db9b0188720d32fb4d0c2baabcb4"],["/posts/52b5b3c6.html","c1d44f24f7a00360c71c5d752b8020c5"],["/posts/6515f032.html","c52f17e6c2a757b597c1b97238d9d71d"],["/posts/80fe2691.html","65faa7a31dc536137662db7c77e4e975"],["/posts/886f8d3.html","73637eeefe8427e5502acb858392e5d4"],["/posts/8dd520d9.html","93a0c2b2be028efe95ef11e94400a831"],["/posts/8f555654.html","b5f52363081297ed3c13a4ba0ccfeed6"],["/posts/94d3c794.html","e0ea8607fa9006d7e3fb80dba5555f4b"],["/posts/98662d05.html","b5250a2ca76b64b18ec188c7a8029145"],["/posts/9a2f6162.html","ff817bfbec972ededfbffa0dc3ad1ce4"],["/posts/9b22a48d.html","2a2fe58c8efa02a90631a1fb26770fe6"],["/posts/9f61c1a0.html","694a45ec5867f2aa071c27d2e1f81b49"],["/posts/b5fb773f.html","254f9f90b12f5b4eeb9438f81305dd57"],["/posts/c1b2c6c9.html","33d97f4e0198a52ef8309f79942efbce"],["/posts/c497a412.html","ab7a1019ca51ae63ad7e0b6cb360dd0e"],["/posts/c5de299a.html","3cadccfa1d4b8d216265f047b8d9fb53"],["/posts/cbebef2b.html","0a806810cb4212610ea84afdb05ca9d8"],["/posts/ce25023e.html","4c9aef2206fd265e942049412c69c0e2"],["/posts/d3a745a8.html","538e5574a7fc3b3f0289862414480cc8"],["/sw-register.js","6538b3c3c2c631a256380610b72b2645"],["/tags/Circle-Mebius/index.html","6b02b210f923bdaa045e4f9de0dfef09"],["/tags/Omegaの視界/index.html","caaf3843134606cdda17d1f07b5fcfe3"],["/tags/Witch/index.html","3cd9ed6ab853224936f1df6fce434f46"],["/tags/galgame/index.html","b33beebaa1b50f061733e9016a775b18"],["/tags/gal资源/index.html","421a5a78a98f3265af4ecabebd7939b2"],["/tags/gal资源/page/2/index.html","4033ce655c58e472949c695e3b095e4f"],["/tags/index.html","9afeed2f15fe23dd6f271a716d8469f0"],["/tags/rkr/index.html","c74ccd54df69341c87d4006148f75c67"],["/tags/公告/index.html","8c0614505e5d14d6a15c50247df9cb5a"],["/tags/水仙/index.html","a15e812e434b9b753c913253063e7da0"],["/tags/猫猫社/index.html","6487f0414743a817dea5266ea0c89d26"]];
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
