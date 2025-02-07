/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a694c57843441fed026af3bb10dd26ee"],["/archives/2024/04/index.html","d7561aa4bc116758084105c972e78dac"],["/archives/2024/index.html","9f9b89bc31132fef39b6e55d77d79c0b"],["/archives/2025/02/index.html","1ba47849ca0fe3d0dae0fcd42bb08b88"],["/archives/2025/02/page/2/index.html","81dadeda1cd5baf19f3f4d223fad9f33"],["/archives/2025/02/page/3/index.html","fe5ea6b58d7c67e3cf5735ffd342be1c"],["/archives/2025/02/page/4/index.html","b8bef40542dc797c8aabda8a1c380024"],["/archives/2025/index.html","5d0318bdee1e6ac6dfec959c6c2d6c12"],["/archives/2025/page/2/index.html","3d400fb75e3685b407c823a1fa054464"],["/archives/2025/page/3/index.html","bfceb7c73f011d2e750e628f5399f8cc"],["/archives/2025/page/4/index.html","7d3732eb42341b403886a6ceb194b58f"],["/archives/2026/02/index.html","92c61ce0b7f896e7f009074ca5736fa3"],["/archives/2026/index.html","932e0fdf57a7a2a390659a698b993f9e"],["/archives/2925/01/index.html","489f74eb0ff4d55792edc55d6a96b039"],["/archives/2925/index.html","77340b3e7c3e843efdc36770341368fb"],["/archives/index.html","36a01c825756298790e8654c2148b1f1"],["/archives/page/2/index.html","a5100da6d173aff3d4962580a354c42d"],["/archives/page/3/index.html","cb4a3a34e80adf5542f17267166bf848"],["/archives/page/4/index.html","ca33e7b1868526f13210b66d4865dadf"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","29b7691603c6405c249e554bf6780994"],["/categories/公告/index.html","301a3f7638f34992a16304170d8fd62f"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","af5d62f30f9ff4eaef6caf6640a9081d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","aea64bfa92e849fb214084a0df5c5dda"],["/page/2/index.html","7568e064e263cca280c4e2f0569749ab"],["/page/3/index.html","54350da7a3a207e84365ee35b9d0071e"],["/page/4/index.html","aea77beb8d5a20017b1de583c039f7cb"],["/posts/10c9dd98.html","cbbe4cf801ab807cd01291a4f745ae1b"],["/posts/15ef14c2.html","ea83de4df5827454ae3a02c379379981"],["/posts/15f3959d.html","824d7776651d94fd47d3ef085b3340a4"],["/posts/1d59b71f.html","b577322ae5ae1677e4a1c8bbc22b9c3c"],["/posts/2cf620f0.html","c30f66b46b22733d3b4d603c2bb98ba4"],["/posts/3f7d823a.html","05be54c01123d33c3fe6447378589619"],["/posts/44124a6b.html","6cec8a338dad6559d1f0501997d203dd"],["/posts/4b689be3.html","6d192d5811215e60ddf770bf94776a4a"],["/posts/4cf8423f.html","c26706bb54216fb536eaced237c7fbc4"],["/posts/4dcf85c.html","d26bd59d4af2353c57b11905e713253b"],["/posts/52b5b3c6.html","37be0395fbd528db36e9590b7df9a4aa"],["/posts/6515f032.html","428db167d72d3ab9be6c0917865485e1"],["/posts/71131d34.html","be6cfcd81b87e16e5c2ebb9a28b9e483"],["/posts/78a8a8d3.html","4e67f7550e99b05fa8bc2c317d462138"],["/posts/7e3aa3e2.html","a49fc07facee273568d0a287901b8937"],["/posts/80fe2691.html","2552af9781195ad017bae450c7559a85"],["/posts/886f8d3.html","8044f1a78a6da13e07da024d0ed40157"],["/posts/8dd520d9.html","4129c4fe93b6bf737b9fefcaa2d67e7d"],["/posts/8f555654.html","7edbbe178ea0ce080f9b7435845f0556"],["/posts/94d3c794.html","7360b37676d97f26392b42d403f8a1bc"],["/posts/97f50eea.html","3071cb7407c687e672ce38c5a2b684bd"],["/posts/98662d05.html","ba5ed03f2e43483bc7a35d4f7cd51558"],["/posts/9a2f6162.html","b397b0391c92be64207815df04f92d15"],["/posts/9b22a48d.html","27786313dd27882235b824f629417d61"],["/posts/9f61c1a0.html","1a1702091c9871fe235ffe2698440974"],["/posts/b5fb773f.html","8e27a63a61ec9155f71d2fdb76ebc3e4"],["/posts/c1b2c6c9.html","fb9e8ff071141c1dc86998ade653d95e"],["/posts/c497a412.html","610d627aeee2e6189aeb44fc04f47861"],["/posts/c5de299a.html","18475d8454844e67833ad398a2b034ed"],["/posts/cbebef2b.html","a41ab6d3f68d77bbc8555f3363997f3c"],["/posts/ce25023e.html","0bf2b861f2d7f9d8b92bbd0b6d66f4aa"],["/posts/d2fd4837.html","440b9cb0a300244e4ba923fadf723e5c"],["/posts/d3a745a8.html","9cd848b7f4b0c7ef78aa55313db9dcc7"],["/posts/ee1ed673.html","6bafca2e0d09506fcf26c04c569f727a"],["/sw-register.js","d1fada22fd04d5eeaadfb737832b75f7"],["/tags/Circle-Mebius/index.html","077b2a49da93e9c28dfd6d4f1877aa02"],["/tags/Omegaの視界/index.html","2f641871cf5e38627628770b16e933a5"],["/tags/Witch/index.html","8c164df8f46e31819cf06a1ce44b6b10"],["/tags/galgame/index.html","a5c97353ccbd01012eb68b2da1db24bd"],["/tags/gal资源/index.html","6f8bf4b6027f89df851b566d37f6a435"],["/tags/gal资源/page/2/index.html","d340ca9b2f1356153c1288a762621a91"],["/tags/gal资源/page/3/index.html","de0581ea6a886dcafa1abdd8e3b0f47f"],["/tags/index.html","4ac07dcfeb4ba0d2685f448efc8f6f7b"],["/tags/rkr/index.html","21da41d7ba328f7caa96e9c6074b6fd4"],["/tags/公告/index.html","0e78fa1d1d6a4db0559f78e90e9dd2a6"],["/tags/同人/index.html","434c628bc518ed44c5c624b06c6d0065"],["/tags/水仙/index.html","19180034b315de5a88190e0aec328f88"],["/tags/猫猫社/index.html","61749bc0ddd345a8fcc41ecf0256f206"]];
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
