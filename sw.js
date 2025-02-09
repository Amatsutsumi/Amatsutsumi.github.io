/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1995.html","b150936a9ec46577a6ac88ec065c6e1b"],["/about/index.html","873ce14fb0ddb43c128dc43eb1dcfeb5"],["/archives/2024/04/index.html","0c910ded8501ea64eeada1d2f96e670c"],["/archives/2024/index.html","92596096f26413799df1db422ec99edc"],["/archives/2025/02/index.html","86a7bbbf448d072241c9372eb1222726"],["/archives/2025/02/page/2/index.html","3fd12fa6b200d9bac1e898e096b57642"],["/archives/2025/02/page/3/index.html","3dcf433d3ad4e8dfa55a010df4c82540"],["/archives/2025/02/page/4/index.html","e75095c6d1b137f9d0efbdfcdda5fbbc"],["/archives/2025/index.html","544d529d41b386271731ee63e33384bb"],["/archives/2025/page/2/index.html","fe7787a527096c0d19c50ade777ab736"],["/archives/2025/page/3/index.html","e418ac8f812d3932044a5d235e2ad8a6"],["/archives/2025/page/4/index.html","44366b55c5fde0465b3788825ee58680"],["/archives/2026/02/index.html","5261c80525aec5ff29eca38e3e3d84aa"],["/archives/2026/index.html","d00290fb80f5769c257b51ffb93e23d0"],["/archives/2925/01/index.html","d7e040bc9f5d042eb2b6c1f2b40a9007"],["/archives/2925/index.html","e820409b6d1be9a96302ec1e5726d849"],["/archives/index.html","c9dc3e1f06edcc7d4949a789b0dd37ba"],["/archives/page/2/index.html","d6eb5d80a72216ea9a90d02b4d4f8672"],["/archives/page/3/index.html","59f7101d88316140bbd57b73bb6fe3f9"],["/archives/page/4/index.html","a593269c8510d40ade27c9006b7a86c1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","a720852cddf2bf1f63d3bcc454f80f00"],["/categories/galgame/page/2/index.html","1c4a7cce247db8ab39903f693f2291dd"],["/categories/公告/index.html","780d398a2d0dcc9599124be4b440b75f"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","b5d00f5c979cb5de9b2a718ff1e51843"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","5bfe2a6df510ad5febbfd4f858e99794"],["/page/2/index.html","95187f10dfe238c24cdac2e451527a4f"],["/page/3/index.html","e189b2be18ef48af532db8cd5d3837a7"],["/page/4/index.html","8c4a776acb4324a45bb7ab063fb74d4b"],["/posts/10c9dd98.html","7f66a3b39e547dd90b544b8db34b6112"],["/posts/15ef14c2.html","024ac84da113afe02d4f9c6128c60896"],["/posts/15f3959d.html","69a03a015a491f1e5245fb5d87a6aadc"],["/posts/1d59b71f.html","f704796baa4a24174c0d0a58a0d337fe"],["/posts/2cf620f0.html","5ac1c018a01cd229807107c3728d1712"],["/posts/303007ad.html","1efb2e130018e7b963fb139c0cdfb65a"],["/posts/3f7d823a.html","17d0195f4ebb8c86f29daa6fdadc8417"],["/posts/44124a6b.html","e8bd05bc23f664167f0a9c81f71ccdf5"],["/posts/4b689be3.html","7084722fe66185abebcf6a7db268ca17"],["/posts/4cf8423f.html","96dbf0a1a4a4dd0fb32126289f82649c"],["/posts/4dcf85c.html","4667126fb1c9a4afc98a5d06daf0a8bb"],["/posts/51c9b1ff.html","b28309c28d20a95ce27a20af3511f9b5"],["/posts/52b5b3c6.html","5d9c5c2d4c80f344ccdff696985ab281"],["/posts/6515f032.html","86beefccadee2fb9f73a73a3e87ff385"],["/posts/71131d34.html","76bf1396688f6bf1b6ee06eac82ea210"],["/posts/78a8a8d3.html","66c2e4cda03517cb90daf67fb2ea1bb9"],["/posts/7e3aa3e2.html","5d4bb036c3c2e0a30a6baae5024c4242"],["/posts/80fe2691.html","e3f6e99d413028541348ab47ce3d54d4"],["/posts/81ac52e9.html","cea512ad66af7628064081efe879de6d"],["/posts/886f8d3.html","c600a2e95fa86e5d716956e206a930ea"],["/posts/8dd520d9.html","4aee5a76f2aeb53a01b8a7927e6fec56"],["/posts/8f555654.html","5147ec167c4ae9916c1497605c7722f3"],["/posts/94d3c794.html","98ac9349d664a586afcddd5741b47e65"],["/posts/97f50eea.html","b7a2bd67baadcae5034345dd5ca8c6c8"],["/posts/98662d05.html","03d4156a874645ec8a389ef26e9efe25"],["/posts/9a2f6162.html","50d3d6866d86928dba913091b1b9bca5"],["/posts/9b22a48d.html","7daadae1329ea9bb6283368109c8ec84"],["/posts/9f61c1a0.html","d811810b792aa66f0483a52490cdb127"],["/posts/b5fb773f.html","fc6232cc4754c97412ce8d263d5e0d71"],["/posts/c1b2c6c9.html","c535b677fae1b2175e96ae76f5f01006"],["/posts/c497a412.html","d34ebe59f8b8771989bd5752a5010240"],["/posts/c5de299a.html","aa4bb1d65c0bff189f0e11e8e04741ab"],["/posts/cbebef2b.html","7cfb91cc4ccc039610c2ba14e2d6c036"],["/posts/ce25023e.html","8fdd6a560e2be83f4fdac350989b816e"],["/posts/d2fd4837.html","e1c25337cc134e5111e51108bb844bd3"],["/posts/d3a745a8.html","4c099a2be405348a11963c07b32f6696"],["/posts/ee1ed673.html","586dec44670f950cb96b5d1fa36188c6"],["/sw-register.js","d3e1013ec98dbdb42be2672629ce52d9"],["/tags/Circle-Mebius/index.html","dd6ac6961f6af00a5c2cec5567cb46f5"],["/tags/Omegaの視界/index.html","a18bfbf460d9d573d2deee4e1328682a"],["/tags/Witch/index.html","8d350218f736251811639cad3360e6fc"],["/tags/galgame/index.html","37091c296d49e6b91712677f50fd1fa5"],["/tags/gal资源/index.html","32f623908acc154851d56471b8a59359"],["/tags/gal资源/page/2/index.html","7ef57a1dccf6be984b7f58c1c2ec0cd4"],["/tags/gal资源/page/3/index.html","2b762ed3c51b36def769204e3a83901e"],["/tags/index.html","7e25b1224783badc5c25b0fad735bc73"],["/tags/rkr/index.html","ae3ff652cf5e06380b940470b10d9604"],["/tags/停产/index.html","ae567a599edf8481aa76463f0b6442b5"],["/tags/公告/index.html","024453986fb16f8eca4df49b3e47e3c4"],["/tags/同人/index.html","269ff21d4b1b2470b1b08478cd80430a"],["/tags/水仙/index.html","9aaa0464df00dcf107733e87a5f2684f"],["/tags/猫猫社/index.html","b66528efe82be3cb0eafd4d4685c6719"]];
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
