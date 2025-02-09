/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6fe1d27e4264ded6aa66425b5e069c89"],["/archives/2024/04/index.html","130ea89333495a019102c7c9f7eaa95f"],["/archives/2024/index.html","6b856495bbae75e637c0ba368393ff01"],["/archives/2025/02/index.html","66a18af16075f0097c3be3771d9d9248"],["/archives/2025/02/page/2/index.html","ca61b49b6a7626073a78524afa95dffd"],["/archives/2025/02/page/3/index.html","716b7ed81d4271bd011f29cbf6b2d36c"],["/archives/2025/02/page/4/index.html","974d16ff399ad1a157bce407b1a096d9"],["/archives/2025/09/index.html","c68c2633c4b3ea62be2bc42e3771aaf6"],["/archives/2025/index.html","d9d54c9c432c0ed27ec2c27547cda46a"],["/archives/2025/page/2/index.html","3316a848fdad97f5bd966d8f0c37d748"],["/archives/2025/page/3/index.html","6f1220a85abdcaf661036808ab14f21b"],["/archives/2025/page/4/index.html","ed73697e5449dbd1134079a5b5178a22"],["/archives/2026/02/index.html","1764dab753f076e96a458597b9eb13f3"],["/archives/2026/index.html","4c3ef7f1c432b58e88b7f8f331ce4a36"],["/archives/2925/01/index.html","d3f189cc1a6217fab556778e45f58027"],["/archives/2925/index.html","67d1113176b6dbe65e1e8e7c41291b9e"],["/archives/index.html","a3334d75d9fe4ad0531b31006987f324"],["/archives/page/2/index.html","641818a90bc24e91c3eabecff782d49e"],["/archives/page/3/index.html","94fa4ad19b52bcf1254c25b116e730eb"],["/archives/page/4/index.html","b9d8799666d3c5eda282530d1837d4eb"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","7730014cca143dfcfcab6f9afc2a0a15"],["/categories/galgame/page/2/index.html","20fae26ce0309db48226e9ce543cae04"],["/categories/公告/index.html","1bc1eccd2bc1e32845e93a4670d79fe3"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","7df98a7c9e24a445ea97df4da7fca336"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","a597a0bce349d99cd9536189d67ce763"],["/page/2/index.html","6677df22a00aa129434072925de623bd"],["/page/3/index.html","73bd5162f7b726229f9b1f0a1488edb6"],["/page/4/index.html","cf54555726ee68b666653385e24fa409"],["/posts/10c9dd98.html","bb5d62253dc9f4e044dc0106771f33e0"],["/posts/15ef14c2.html","aca812596416c29a3a2f91c12ff83b7a"],["/posts/15f3959d.html","ea830d057cab7089838e6181b6c944e0"],["/posts/1d59b71f.html","d7b03b8ca2ff3e717ad9093eb794b527"],["/posts/28397adc.html","88566bd0cec7e2f958c986aea98a2f91"],["/posts/2cf620f0.html","af5ffdd078f4289315e290f22347c0f6"],["/posts/303007ad.html","69e335dbaf4ffe201a63074c5abfbc57"],["/posts/3f7d823a.html","626eec5c92deee89741f4682e754da91"],["/posts/44124a6b.html","a4d937ad257e930b3c39dae8a44faa42"],["/posts/4b689be3.html","99eb90b18525ffb70e27142377c9f8d6"],["/posts/4cf8423f.html","3de3bc75f91edbc822b90bf5bcfd6b7d"],["/posts/4dcf85c.html","3d0ca297ae21ab7bd4559627b75faf94"],["/posts/51c9b1ff.html","0a9ce4361d6f1e0c071c6160d2823fd3"],["/posts/52b5b3c6.html","192c12931d030e4d017db55855cc5a74"],["/posts/6515f032.html","acfbbbfdf2a2299b8d820932a39bf837"],["/posts/71131d34.html","40b6216879a8c24aed560a1a22b2e30c"],["/posts/78a8a8d3.html","2df127f2ae84bcbc53cc4ae79e9d6438"],["/posts/7e3aa3e2.html","782cae9a9b2485ff6275bb50c95a333a"],["/posts/80fe2691.html","5e90d6a88bcaf02ecbf592182eb738e7"],["/posts/81ac52e9.html","63546190ff25ab677c49f8004fc5b5ce"],["/posts/886f8d3.html","2721bf76cadb0fdeeea22caf9f1fbf61"],["/posts/8dd520d9.html","6a2ea5ac60ca4d743e995b33ea366929"],["/posts/8f555654.html","cce2fbe46d52e26a11f96a3f19591877"],["/posts/94d3c794.html","f526f4a68d3b69833fb11a7d32f755ee"],["/posts/97f50eea.html","c148ab2b6da403e070dbdc21202fb4fd"],["/posts/98662d05.html","2a7258978b146ebf0a1fdf4ea2a19560"],["/posts/9a2f6162.html","b420b33081a5876f8df9d45ebba14157"],["/posts/9b22a48d.html","1d86d0107c9a648146bfa6742d282eda"],["/posts/9f61c1a0.html","428b4151d3722e5981892f048a49305d"],["/posts/b5fb773f.html","c44c2f883a7fe4189f2705b9bb1ba7a9"],["/posts/c1b2c6c9.html","6f7a51cc979954002d39f4f94671b5df"],["/posts/c497a412.html","371ca221da156415e00ee0ad81c73b82"],["/posts/c5de299a.html","d4876e4af728cba3860586cbe40c3aa8"],["/posts/c70bba9c.html","0abadb7d738cd9d2e7dc163964bbfea0"],["/posts/cbebef2b.html","0014d1aafb30ed90b21562d629313264"],["/posts/ce25023e.html","519653812debfaea973d0238f1673cfa"],["/posts/d2fd4837.html","b6b8c82863e503974b3473386bd88673"],["/posts/d3a745a8.html","d1d40dd5f7651533d16235941840b625"],["/posts/e3ab6ad8.html","5499cd0ed43a285946133f44efbad4d1"],["/posts/ee1ed673.html","6c25f6928cd3ac52988f876d359677fe"],["/sw-register.js","ac4c81dc0f535a8ae76348143cab6c72"],["/tags/Circle-Mebius/index.html","3d304d425522404d1fc099ce594be5ac"],["/tags/Omegaの視界/index.html","07bb51059d5bdadd4672f4d3c1bb586e"],["/tags/Witch/index.html","a2fddb44dd7c98997d55b89c2f62c65f"],["/tags/galgame/index.html","d9114a677abcba8e1a18223eb2e097c8"],["/tags/galgame/page/2/index.html","cde178df61d4ef666127be1af866ff8c"],["/tags/gal资源/index.html","b295fc75cdb6c7707d40203ecb57f32f"],["/tags/gal资源/page/2/index.html","622b535805e00ab2ca6bee05f252cd22"],["/tags/gal资源/page/3/index.html","3d52be6e8576dc90da9cc13ee761b9d3"],["/tags/index.html","4803d2d29446c08d9b09e328cbefdf87"],["/tags/rkr/index.html","697df5dddf0cc772425f05c6c6546d42"],["/tags/停产/index.html","2a6e144e12bedbaa4594fd319e5fc360"],["/tags/公告/index.html","03256b9a97bbf26124b730818ce5074a"],["/tags/同人/index.html","dccd8801827c3f8f8a823510cd470c2f"],["/tags/水仙/index.html","c0603ac7d2694320cc23eed306691295"],["/tags/猫猫社/index.html","805b33a49102772f0bfc216f300631ca"]];
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
