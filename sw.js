/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","deabfc25dc7d0d65c773279dd99063e8"],["/archives/2024/04/index.html","d95bc03cf6cd040d8787ce025a8fac49"],["/archives/2024/index.html","5cf139f3762dfa579e13159f00a7dea7"],["/archives/2025/02/index.html","d96fdb5fd250eacc37251533d0f29be2"],["/archives/2025/02/page/2/index.html","8a60bba9c4e4aba179645c8b675e4971"],["/archives/2025/02/page/3/index.html","9abb40700c591980c7eb15c4f5b3f2f9"],["/archives/2025/02/page/4/index.html","5c470e14b38283f5fab56871ed6e0a8c"],["/archives/2025/02/page/5/index.html","c48dd0bc9134fa9126d92d3389883cfb"],["/archives/2025/09/index.html","cbedcc90d2c2b2ad1c33043c51290d1a"],["/archives/2025/index.html","d404e069b695e2bc7933e0f4e6c8d22d"],["/archives/2025/page/2/index.html","fce99ad2d2129b17d203fc97fa6dd8d5"],["/archives/2025/page/3/index.html","a6e892900a022b1bf9948aaec8434c05"],["/archives/2025/page/4/index.html","efbc429213f4f8f3cd2efe7ff3d179ee"],["/archives/2025/page/5/index.html","4c399717950033d89bd8551bf5219f0f"],["/archives/2026/02/index.html","4616f29411b68c0f5ec566bce7cb15bd"],["/archives/2026/index.html","32097e16561f662e8d4c9f5e9e2d8884"],["/archives/2925/01/index.html","cc968846e064c56d483fd94598a52cc4"],["/archives/2925/index.html","70985f2dc3507dafcad158084e617248"],["/archives/index.html","9ccbda2d266a6b0948d9859b9dfc9dda"],["/archives/page/2/index.html","14e016a5c47ce2fbf14b3b2e3df7621a"],["/archives/page/3/index.html","56466ebd2c604509947ff0e099e0f614"],["/archives/page/4/index.html","c43e350b0d47fa9ff7309770522f5c9d"],["/archives/page/5/index.html","38223c7ad1eaf3a30d86f3530fff9c00"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","fd02865ff21d6ccbc670a44fa55c2c24"],["/categories/galgame/page/2/index.html","fdc54c225dc97c3468960eece983fd72"],["/categories/公告/index.html","aa86069bd31c64a532e138c2ea21a448"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","30bf7ca57bac7c9e360b4de6bc377364"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","593cc6d57a86609391748e702bcfcb3c"],["/page/2/index.html","1e6b0d3b983b9365416e7ff2f84a7b61"],["/page/3/index.html","e987bf759520e0a63737bd0acd63b518"],["/page/4/index.html","9fd592e2d6b0e8754cc64d705e797311"],["/page/5/index.html","cd5a1abb96fa2e2ef20da932d3538b39"],["/posts/10c9dd98.html","3b2e6e742e07c9920089e460d712f7af"],["/posts/1370342.html","e3e5af2cf7135ed9a02567e06ae18b87"],["/posts/15ef14c2.html","8c250d4961fabf3310e935d4746fac23"],["/posts/15f3959d.html","23d114d4b0fcee50dfc474fa899c3fc4"],["/posts/18ab785d.html","3306756b83bffbae3b49bb985f1568c5"],["/posts/1d59b71f.html","8787b27ba15c5d582c2b6b387cded18c"],["/posts/20b3f3a4.html","63488334ec80fcd8709527693f7bcfaf"],["/posts/28397adc.html","fb3f74eabbe0d90d7d26d24abcba0a35"],["/posts/2cf620f0.html","cf0e26fbd9c7c01c828bc4440e4834f3"],["/posts/303007ad.html","b5bfae096f4588a117725361f9e16454"],["/posts/3f7d823a.html","f341833ebf0929d75b0e92691aae7114"],["/posts/44124a6b.html","96db806e68ccc107e263e5e20d639a59"],["/posts/4b689be3.html","d667baee4ec6a136243af1d422255014"],["/posts/4cf8423f.html","7b1d89fc796348fa02cee7b6a87ef30c"],["/posts/4dcf85c.html","139360d3f971b5a4309a8277ac72d95b"],["/posts/51c9b1ff.html","c8a4c707b8957f08af11d5549f9d6c5e"],["/posts/52b5b3c6.html","4c8e691e0bc1eb008cf7de037419279c"],["/posts/5f6e0c59.html","d8f98db7014c0109d10eb05bc10e8c24"],["/posts/6515f032.html","245fc30208463ed646e2af52891dc27b"],["/posts/71131d34.html","976838b6748541c50e61e6ce4cb9e346"],["/posts/78a8a8d3.html","f5f156214646503df62232ae4df86a16"],["/posts/7e3aa3e2.html","534f0e61fdb36c0aeadf58c2b0edd699"],["/posts/80fe2691.html","a44dcb9ce2a7e90fe7a1006c956177da"],["/posts/81ac52e9.html","28c1581c1a5fa23ca6401ca97f25843b"],["/posts/886f8d3.html","ce0d573b6cd91809d32ca1c9cd085d9d"],["/posts/8dd520d9.html","8d1905ffac93c983df64c3cb220983e8"],["/posts/8f555654.html","261678874d30e8becd0d69a3f1352d04"],["/posts/94d3c794.html","6eec1fdff822dadbdbeabd8924575e6f"],["/posts/97f50eea.html","adeae57a1034c66eb12537973becc96d"],["/posts/98662d05.html","5ccbaf84b9b442c14a5878bd963c3a37"],["/posts/9a2f6162.html","56a25e5dc981417f25d6bf1aa349a15b"],["/posts/9b22a48d.html","7b4ad33297ec236245e9bf578da786d3"],["/posts/9f61c1a0.html","659984ce9ef41d4d95eed7150752a25e"],["/posts/b5fb773f.html","2dfddfc4e5e73ab4fbfa3d8b117cdfe8"],["/posts/c1b2c6c9.html","e3bac10f1ba3d617eac738c234605a8e"],["/posts/c497a412.html","fcb9c0c33db6f677b50ed59d01473e9a"],["/posts/c5de299a.html","b682f5b1b8ca695e5d229eb90eeb19a9"],["/posts/c70bba9c.html","bb54576f168b588960c8642ff2eb3ae2"],["/posts/cbebef2b.html","005a97dca2beb5d9505ece1d57d8537e"],["/posts/ce25023e.html","09e3685eae44a82043f6939f3113cfca"],["/posts/d2fd4837.html","8bd95add8c8dc77e3d1cc2edf1f974d4"],["/posts/d3a745a8.html","b131be2ae9a51b01ee38551cbe2dd4f9"],["/posts/e3ab6ad8.html","c4384dc40a8129bc211d536c3634eb97"],["/posts/e91abb63.html","ff747d311076d14d110e3cd814ecc910"],["/posts/ee1ed673.html","eadbbcb31c5d5c97802313a362f604eb"],["/posts/f230b0fd.html","868c5c581363b19e9d27aa8bea7b3948"],["/sumire/index.html","37190286f4e57ed897893a53b57f6e26"],["/sw-register.js","2d8e4939a477ec63322f07590762d08d"],["/tags/Circle-Mebius/index.html","2f7fb58dcf236e3b262e76ee43e41957"],["/tags/Omegaの視界/index.html","a7511462228b1be7c77e544a376ed862"],["/tags/Witch/index.html","aed3223faf41b2b947348b7cf963b912"],["/tags/galgame/index.html","372bb5646f2324bf5265c62a83184819"],["/tags/galgame/page/2/index.html","3b8fe3280d9bc73861115c32c04342df"],["/tags/gal资源/index.html","4016a798e3c749d7844ad2d2ee7aaac2"],["/tags/gal资源/page/2/index.html","e4bf015e90e05c6b5c83680c9fbb207f"],["/tags/gal资源/page/3/index.html","49363f1c2393fd73320b83665e781c33"],["/tags/index.html","aa28fa6446d4d6be75a2e88be1691102"],["/tags/rkr/index.html","4f51e61c489868f9d5c509d3031ddcda"],["/tags/停产/index.html","2cf77979b34202ef49002c0dbf7517a2"],["/tags/公告/index.html","f87faf6bd9f443aadc33874dcf7a4573"],["/tags/同人/index.html","6f621b208877d34a3d73bbdbce74c15d"],["/tags/已停产/index.html","e1543078298b3d182441ff83a42adf60"],["/tags/水仙/index.html","55a7572077ff326aa471292841e96b09"],["/tags/猫猫社/index.html","a890fd667b10b1fe4093051b5138e889"],["/tags/画集/index.html","24915c16366b2c29ffe8f2b0590fe6b4"]];
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
