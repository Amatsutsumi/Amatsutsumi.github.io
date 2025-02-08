/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","80575121346721df23575f07d6f7e0a4"],["/archives/2024/04/index.html","f0c20e1b83cf76dd45c88ec5ee0c42b8"],["/archives/2024/index.html","3eb822767f8dd9972d9980d6dccc25ee"],["/archives/2025/02/index.html","9688a018a7620f9e513056ee59aa8588"],["/archives/2025/02/page/2/index.html","9eed810fe1be68dcc5797fa8f200ed84"],["/archives/2025/02/page/3/index.html","45286f795ad629930c23f65de079c733"],["/archives/2025/02/page/4/index.html","f236ee0828746f339d91b79eecd725bc"],["/archives/2025/index.html","64b9e83eb1f6cfc770a8fdb3e0afe634"],["/archives/2025/page/2/index.html","48f97cfcb10761deeae62c684c4cbb1c"],["/archives/2025/page/3/index.html","c99f5569998294cec592d6f5af72100c"],["/archives/2025/page/4/index.html","6176961163e36ace6929523f9697a5b8"],["/archives/2026/02/index.html","62c3a1b7c8789902a1782a9d672fedc5"],["/archives/2026/index.html","c7830c8a0f0130591019f2a477351e84"],["/archives/2925/01/index.html","ef8653d5c126c9f35575b33c9308ac5c"],["/archives/2925/index.html","2fab9baf8b9a9702b6a2818be5385510"],["/archives/index.html","b27aaa40eaf237074a1dce83d25875b7"],["/archives/page/2/index.html","4da3f5cfdb5b47405b596d55e1b7a064"],["/archives/page/3/index.html","2525e5d61cfe908468f069bf54fb6d0c"],["/archives/page/4/index.html","06089f53e999e3c2ee504c126cc9282d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","d9344e5098decd91e9e16aa06a40a68d"],["/categories/galgame/page/2/index.html","e13bbdb5217f955f66009c433633307b"],["/categories/公告/index.html","25c3fdb8d09e0781b9244f2965ee1f24"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","26bcbf8458253396119e2541013fa2cd"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","a6fc09133c7722f957c1ad4e82e1019c"],["/page/2/index.html","60a8c609d94ee34fee9189ecb5c82688"],["/page/3/index.html","763785525d02dddae0ce030a2cc0cb58"],["/page/4/index.html","85fcb885de61c6d7ba3c330190852cb9"],["/posts/10c9dd98.html","3dbe159d824609e11c05d22e1c1cba8c"],["/posts/15ef14c2.html","c4ac04fcb22718e4ce65f981c85c9326"],["/posts/15f3959d.html","85b74829eaed0bd9f817b433d69a4e92"],["/posts/1d59b71f.html","7f1409226f86225f49efb353a53f721e"],["/posts/2cf620f0.html","80c701154633c0c8cd54c2f4d3628e79"],["/posts/3f7d823a.html","3c67e225c39e4fd13b7f498aee608c42"],["/posts/44124a6b.html","713f19f5a9bb9dc9580b7dacbc66b278"],["/posts/4b689be3.html","880a3df13e06f82092e7c8869846b4a6"],["/posts/4cf8423f.html","564c4cbbdae0ed34e1f9d3fb0bf7e216"],["/posts/4dcf85c.html","a7e69972d309e14bab6b5b8b42558947"],["/posts/51c9b1ff.html","439875e625e2ffa798ab3c17a18731cb"],["/posts/52b5b3c6.html","70728ab98c60d0df03b97a9b92200f85"],["/posts/6515f032.html","50aff96e3856a441d38a3cfdbc8815d0"],["/posts/71131d34.html","1f226458da4b2eb1a4f4a5d7341e0651"],["/posts/78a8a8d3.html","b597bac7e1ce2cac53d8be2a5ce81b69"],["/posts/7e3aa3e2.html","4437fbfa4ac3d4250f8cda2d75fd3d7d"],["/posts/80fe2691.html","ffa568ac4976a7422ad9fd43694b81a1"],["/posts/81ac52e9.html","8ef98e63bfc33cbf3bc943e483ac28e9"],["/posts/886f8d3.html","a92df28f5f554591ff2a5cdfcf51b436"],["/posts/8dd520d9.html","342417ee0b1c3e25fc71ccb706e1c6cb"],["/posts/8f555654.html","9baf5fbdedb9dfe2b3626635d8c841c1"],["/posts/94d3c794.html","a5d68d253636625beee1566c63cf9aa9"],["/posts/97f50eea.html","9f5fc0d42baa3902c5990fc8c2608e20"],["/posts/98662d05.html","e6c490a1ffea5f152f41117bcab23d61"],["/posts/9a2f6162.html","32ca676a2f65acaa69e1f2368f77bd60"],["/posts/9b22a48d.html","61284d583973ab3f26e0200197e64529"],["/posts/9f61c1a0.html","ccaae32dbfab2bbeced7d65411e055bf"],["/posts/b5fb773f.html","e8b05f6c10524800b18f91ff8776cb0e"],["/posts/c1b2c6c9.html","efba8532454f0e789e5642a3ca97a21e"],["/posts/c497a412.html","7d2145127eafd0e96b3ac843dc7d5703"],["/posts/c5de299a.html","b76e148493b4ce4c6d07f4de8626518b"],["/posts/cbebef2b.html","d4bc47063a72c66eb09a99f93f89748c"],["/posts/ce25023e.html","2d8bb4547a4377afc7838b1ebff7b023"],["/posts/d2fd4837.html","805300139b55de71925af491da6006f5"],["/posts/d3a745a8.html","41a8337aa4f80d8fb032ec8b3a95c557"],["/posts/ee1ed673.html","f638acc1ff92defc7029f37c00f7a658"],["/sw-register.js","c7f28275ede9ddeeef275295d1bb5351"],["/tags/Circle-Mebius/index.html","241df98fef32572cdca0947bc8c5f923"],["/tags/Omegaの視界/index.html","6f4bbf6dcc9317aad113eb5becad5af0"],["/tags/Witch/index.html","1f68f40dbdbdf3070d9e22ff8180275d"],["/tags/galgame/index.html","58f1ead568f2d57966859248ed38ce5b"],["/tags/gal资源/index.html","bf498df03e6fbf329c5e9e5a3542b30a"],["/tags/gal资源/page/2/index.html","d546745ac8f85cb3bd063108612813d8"],["/tags/gal资源/page/3/index.html","790cc1e589d250165cdb201ba4a93d48"],["/tags/index.html","0bada7e2b896ceeda4e40f94a953421e"],["/tags/rkr/index.html","1b95fb2f90ac9fe75a7529c008832454"],["/tags/停产/index.html","3038b42dd8094bc04c39318585b6942c"],["/tags/公告/index.html","03d9f3d916bb703fa7209f582181dd3c"],["/tags/同人/index.html","6a01ac4f2135922d8970e80523b39c30"],["/tags/水仙/index.html","0dcc8a229407be53a3405064e04aa4f6"],["/tags/猫猫社/index.html","dc8c8e821c499110eac8fc297ed7391b"]];
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
