/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","56a857ae821c8b763f879c63d2403bba"],["/archives/2024/04/index.html","6cf13987c8c4cd873196979be17bff51"],["/archives/2024/index.html","34fb55ccf15461dd19cf0cd153e55a81"],["/archives/2025/02/index.html","9238e79053e32e32bb5156003ab6dcab"],["/archives/2025/02/page/2/index.html","a3e4204b22849fbd7c98bd4eb310d558"],["/archives/2025/02/page/3/index.html","39b1463a379179f51d5a6cd06524fafd"],["/archives/2025/02/page/4/index.html","fd2645f8921ea61d04a672c2c20688c8"],["/archives/2025/09/index.html","f71d73a1d93233f9b6c268486ef72ed4"],["/archives/2025/index.html","d5f55fcb022fbcde1d33e3f4b4086ade"],["/archives/2025/page/2/index.html","37d09fe003551e0615c01a0a6e34c968"],["/archives/2025/page/3/index.html","93c86d38c1e0d21e249f7be3c546bab9"],["/archives/2025/page/4/index.html","e5e24021306a423f770a131c6544902e"],["/archives/2025/page/5/index.html","ba46245becd8b9358142fc8afec87c73"],["/archives/2026/02/index.html","e075dae792a8ea731438bf570f1459ea"],["/archives/2026/index.html","dbb639fad3338ca1a2f0de4f7fa9e9a5"],["/archives/2925/01/index.html","87427a43c93b67f6ee78fe7caa71a5eb"],["/archives/2925/index.html","0dbc91f4fb5cee58ae3eef27e81ca734"],["/archives/index.html","fecfd5bf0c7f926fe5389bc2babf4c74"],["/archives/page/2/index.html","b087ea78e2d9fa2389bb1aa844ae6e25"],["/archives/page/3/index.html","150f15ffe032fe950849a6adb33e7fdf"],["/archives/page/4/index.html","97bea0af7a52ec5e106a05f94cbe190f"],["/archives/page/5/index.html","70031cba2498b1834c9f51e10a634f65"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","c281bd0ac147f261e73688b4265c0e97"],["/categories/galgame/page/2/index.html","cf875bca05c2033ee12a5322f143599d"],["/categories/公告/index.html","793061323ec921fe7e180df561fb353b"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","c1e6df8415a6f468d054749357f267b8"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ef5bf9bcb346f2d6123813383639e911"],["/page/2/index.html","3a01e0fd8f9c90fcca344b65dc3b7c68"],["/page/3/index.html","c576cf5cbdd8cdcf264797ff6f1f2865"],["/page/4/index.html","0b4a76c08758e2a13d8ab90ad0293b40"],["/page/5/index.html","af1ca028d1b627c920649f9604aae02a"],["/posts/10c9dd98.html","7e9737dfca5821f2ef86f65a3940bcea"],["/posts/1370342.html","3a31b0adc8ceb3c7edbda3cb371f5f65"],["/posts/15ef14c2.html","b225dad6caae619e03733e3ac9835446"],["/posts/15f3959d.html","1294251d4c988df901212414ab78d2d7"],["/posts/1d59b71f.html","9c630f120edaab0087b7c46c07e63d8a"],["/posts/28397adc.html","2d99496430a18267e29e96de0cee6468"],["/posts/2cf620f0.html","ce87d9ececb5b9fc567aa6b5245c23f6"],["/posts/303007ad.html","ac4f2bc8a7535c2fb8c9c2eae7c36f87"],["/posts/3f7d823a.html","2b80db2bd7b2640939d56e90df880a54"],["/posts/44124a6b.html","731e96b20f487d621613ab8301a32aab"],["/posts/4b689be3.html","ec238e299fc1ae2ebaaaa9c08ec055e1"],["/posts/4cf8423f.html","18749419d4e2d64a14ecb599a5b9d480"],["/posts/4dcf85c.html","2c51cefdda21ac8d890ad3e933b9cdba"],["/posts/51c9b1ff.html","93affb342578eda33ff7cbf4b0e55d3d"],["/posts/52b5b3c6.html","414aa7ec1c3991880d559a1775b3a406"],["/posts/5f6e0c59.html","a80cb364e7aa1711dfa0bc09739c5765"],["/posts/6515f032.html","975c04a9f8769a4ead5336dd49e6fca1"],["/posts/71131d34.html","19c6c6d09bb2876b3d75f8742de033d2"],["/posts/78a8a8d3.html","9f2d12ca9b44b1d9eb7ad9107ce9f0d7"],["/posts/7e3aa3e2.html","a666855b1c98bb64abb84d3a8699d591"],["/posts/80fe2691.html","20995b665ae18ef8b978b36b49c3801a"],["/posts/81ac52e9.html","9d94f53f0c410b2f5a88b5b39146f8ea"],["/posts/886f8d3.html","486cf36e9396b382572671ae3a4e1ed8"],["/posts/8dd520d9.html","cfbeccef1f2e8f995026b71d2ea0876f"],["/posts/8f555654.html","89a2e1d3fe84fde9190a46a6d66ea280"],["/posts/94d3c794.html","cd981375a727387721df769704d2b065"],["/posts/97f50eea.html","c4ef4c9046dd35cc2efeb27872568261"],["/posts/98662d05.html","273e8b7a901c45b50ca72c61246f8272"],["/posts/9a2f6162.html","070741216e3480cd5e526f23a6cd20b5"],["/posts/9b22a48d.html","b39aaf3b08cb6c859a00ab20cd580c7e"],["/posts/9f61c1a0.html","e0a2df77eab81bc605b3ffca9a653735"],["/posts/b5fb773f.html","4d2141c5bcbf525c0bf0ac9860df6614"],["/posts/c1b2c6c9.html","492bc772bdf12908fc8b72df5f86a6b5"],["/posts/c497a412.html","bbf11890db289fe69060b91944ab7f25"],["/posts/c5de299a.html","a1d60582ee8d6660c5b5b714141d9adb"],["/posts/c70bba9c.html","62951d8c0e42773edf2035128ec531b9"],["/posts/cbebef2b.html","5f901824f5031a66c26e14fc59b9a5da"],["/posts/ce25023e.html","5b10802d15496b67eac5bdf658723fd9"],["/posts/d2fd4837.html","85d163e77cd772f31d4af99e4d8461bb"],["/posts/d3a745a8.html","dd075d2e15929ef859e3e56b9a48bda4"],["/posts/e3ab6ad8.html","50aaaa007f114919e93b1c52c94aff45"],["/posts/e91abb63.html","abcd5b4ed3122b48c0ff7d233084cb17"],["/posts/ee1ed673.html","7546096dd2c7a7fe784daf293df8fb78"],["/posts/f230b0fd.html","2c11ca99aec11e0a02edd3d1258e2b7b"],["/sw-register.js","4a0a7fcc01cca2e2c6a19c420527b1de"],["/tags/Circle-Mebius/index.html","618db9a74b5284dc9b6bc5c98e4387d9"],["/tags/Omegaの視界/index.html","5cf6dcfbc9d67bf1c3ffcac02f3b6aa2"],["/tags/Witch/index.html","c1388b83360769fc31b934cfcb3733ed"],["/tags/galgame/index.html","34984789ee54dc8cbed25a097108f739"],["/tags/galgame/page/2/index.html","d09819147f0b3e027f5643e4c38e84d3"],["/tags/gal资源/index.html","217347360eea37c0176bda2db17f717b"],["/tags/gal资源/page/2/index.html","8e12885b8fb6b2585d32018df60576a7"],["/tags/gal资源/page/3/index.html","e5a2e672ba171f9a87450a68c0ffced7"],["/tags/index.html","c54e4949f95512b92b23cc1daad65998"],["/tags/rkr/index.html","52621c1fcb5e032ac544481706e63f26"],["/tags/停产/index.html","302c41c29d25ffdf8c76e313b0bee854"],["/tags/公告/index.html","cb56ddb59052c939676744739baef143"],["/tags/同人/index.html","f17b50617ad57a307c231810d7ab81fe"],["/tags/已停产/index.html","3f402f9272b9513f57d3a0d8047132c2"],["/tags/水仙/index.html","f7fc8b9044104ac060ce88a9a0e7656c"],["/tags/猫猫社/index.html","c9c628a5101de078435aef1d78fd40e2"]];
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
