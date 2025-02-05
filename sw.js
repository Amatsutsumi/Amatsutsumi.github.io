/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6396f82f9df75d2b78130392be734494"],["/archives/2024/04/index.html","4a4a45d720ab34cc530fc1e7563cb6f6"],["/archives/2024/index.html","bf29f47920250bdc6f0725514a96e249"],["/archives/2025/02/index.html","b342fbd5a130c033cb33837a611e144f"],["/archives/2025/02/page/2/index.html","7093c70867e56932c8035e8517b5f82f"],["/archives/2025/index.html","cfb01c297084e09eb3a5e1ab8c32cdec"],["/archives/2025/page/2/index.html","8577ed62af1f9ab4be106fd13ced2eb3"],["/archives/2026/02/index.html","8a575080f745379d3cfd3526fc3f821c"],["/archives/2026/index.html","58086b98aa0a331a9ff4abb3f607fd1b"],["/archives/2925/01/index.html","ccdb0a35d874dd7109455e8c2c58c008"],["/archives/2925/index.html","2bf89fe639b01000170dc97ac347ba59"],["/archives/index.html","9197ae4d93640b7615ae6e77e87e9031"],["/archives/page/2/index.html","6e97eb2a017178590f8100e0722870f6"],["/archives/page/3/index.html","ef83aa0ee07834fb59a997931824a876"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","089718f83f6a3fd5e1dfc7c5a0bd567e"],["/categories/公告/index.html","50b36244934240898bd463f62fbc3ac5"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","d7d4eb1782c2cdc1a1855e21c7183647"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","5f0ad88691db3a9a9a4cb8ddd3e774a8"],["/page/2/index.html","62c778c3651f56ad123dba8fd2ebb18b"],["/page/3/index.html","4b22520e1d5fb63fc3146f516d5293d1"],["/posts/15ef14c2.html","577462a540988870994a1c39eb2b3db5"],["/posts/15f3959d.html","d3b3ed9b1683bab8bbbcc6390e4bd0f8"],["/posts/1d59b71f.html","30bdaf76c17e063c3a9b988fedf8b482"],["/posts/2cf620f0.html","191b730fd811302c8dc89f2cab58452a"],["/posts/44124a6b.html","27db8d442434037648527a9a4beac056"],["/posts/52b5b3c6.html","4fe5a0b51ed77ecde6b54ef2cff2ed73"],["/posts/6515f032.html","cbcdfb3f4de8dd834ee2c430d5a17756"],["/posts/80fe2691.html","b9b37643c472ace861a6fdb3cfc01711"],["/posts/886f8d3.html","04051b291c1b4c1f5a32c4efd52212ee"],["/posts/8dd520d9.html","196485fa3db9aad4d757f438c764c2e3"],["/posts/8f555654.html","ef2f2740cbf548f82a17e36fcb88d531"],["/posts/94d3c794.html","aa8bfbe4a3b7c690db03818a142370ad"],["/posts/98662d05.html","e415cd9679c8b4af05bdd91871828c06"],["/posts/9a2f6162.html","c6de9ee6da59d64e99de3aa3c38bbff8"],["/posts/9f61c1a0.html","3291c4a70f1b53d29a2ce2bb019b523e"],["/posts/b5fb773f.html","1bfbce59b4afe2cd5ff44aa49c779bee"],["/posts/c1b2c6c9.html","99258562f013eea3297c3109bc18699e"],["/posts/c497a412.html","58401ee7dbd5a1f1f1bc454ebd4a11db"],["/posts/c5de299a.html","0bf315481763d3d2939e7643dc0e661f"],["/posts/cbebef2b.html","a347acd8c9c592b47086fdf1e0a4af8f"],["/posts/ce25023e.html","94e1b96eb060e655b0c95421cccf0d72"],["/posts/d3a745a8.html","379cea576d6097191ec28a4555b02326"],["/sw-register.js","f50f380f124873a9728f5268d3eac9fd"],["/tags/Circle-Mebius/index.html","fc2a410e3e901add6c1566252df6c1b7"],["/tags/Omegaの視界/index.html","dcab2c77b6e17ad28d78d170d0b89eb1"],["/tags/Witch/index.html","7116412c56b1a567c7ca654419865245"],["/tags/galgame/index.html","93b3c4946bd2690e4a495da34fb7993f"],["/tags/gal资源/index.html","284ee2c84ae3ad5d2c5fc8db189ec407"],["/tags/gal资源/page/2/index.html","7b7e226fa5ed6815de364c8b22e1c048"],["/tags/index.html","f68498e1599b6cc6367edda3f94b5d18"],["/tags/rkr/index.html","1939b59730a4ca22c44365eaa8eb2307"],["/tags/公告/index.html","bc5fd4352558270d3d983a3eb6bfc62f"],["/tags/水仙/index.html","a2218d60e6112a2be70ddddd352faa7e"],["/tags/猫猫社/index.html","2f2a057dbd8964750a8b5053d10dc051"]];
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
