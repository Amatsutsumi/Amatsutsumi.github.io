/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","26dac7ab35421007c7616c400989dd79"],["/archives/2024/04/index.html","04b10a4700248957b89cff0a8bb7919e"],["/archives/2024/index.html","953e3e1d11906fcff1c25dcd14713eb1"],["/archives/2025/02/index.html","1f16bfbd685dd68d0f04142c0ac08f35"],["/archives/2025/02/page/2/index.html","a0d89d488f98a52939678c15771e119b"],["/archives/2025/02/page/3/index.html","15d1d69cfdfde1ac1245d90292d7098d"],["/archives/2025/02/page/4/index.html","c3f23976aecb260b93cda66777d0eff6"],["/archives/2025/index.html","fbc55809b599fa9b7c44e61956064659"],["/archives/2025/page/2/index.html","81cc81863339fc5c5517ae53d6a6265c"],["/archives/2025/page/3/index.html","0c6fecf4cc56a9b31b90e4ffd68097dd"],["/archives/2025/page/4/index.html","6d8f99869728bfa59bf1290732bf0bb9"],["/archives/2026/02/index.html","b0936810157320ba3dd53dcc2d1f7a09"],["/archives/2026/index.html","59c1314c3afcd05433842a2343f61527"],["/archives/2925/01/index.html","c1ffe3888c062a52b4b7362bdc0bb43d"],["/archives/2925/index.html","65c2760ff58c4392244dc3d6d69a996d"],["/archives/index.html","0481e3d76e502f4281e70e56ced5d5ca"],["/archives/page/2/index.html","bbfefb30abc0aa113f16d4b52202ce7e"],["/archives/page/3/index.html","8d51035fa41e63be5361aa2aca6dcf27"],["/archives/page/4/index.html","4f37fc7b2d282615e6b2450655a78be0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","846eed6ceeab910d8ea1fa6570f9b2f5"],["/categories/galgame/page/2/index.html","090c99d4adbdf1b2c40d5d629076ad64"],["/categories/公告/index.html","6811cb5aca04b7608392cdf688c8efc7"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","33b54c1147caa8ee704d306102ae6402"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","66813c1aa548a5b81fd807a320c78925"],["/page/2/index.html","7723ec4b0aaaa6e33a017c17a4cff442"],["/page/3/index.html","4033ded133ec151bb06e77496669460c"],["/page/4/index.html","eaf7d9fbaca4e95df98d0e2bc1360174"],["/posts/10c9dd98.html","5c993efc4aad6d1a69581b489f1829d5"],["/posts/15ef14c2.html","c4ac04fcb22718e4ce65f981c85c9326"],["/posts/15f3959d.html","408115a7f18e006b928385692f57684b"],["/posts/1d59b71f.html","629c58e7a7e7129f1d3cc5dd4bcfb9ec"],["/posts/2cf620f0.html","fe3eecd08a1fb95eaa1884d93ddff68f"],["/posts/3f7d823a.html","3c67e225c39e4fd13b7f498aee608c42"],["/posts/44124a6b.html","713f19f5a9bb9dc9580b7dacbc66b278"],["/posts/4b689be3.html","9a569647cf29b98f42af4d33888725f6"],["/posts/4cf8423f.html","c2f8b7de6dab0915112cd678075ff4a0"],["/posts/4dcf85c.html","a66398e5b03d29f643c2a71025ab0404"],["/posts/51c9b1ff.html","190299747233de5820d93cb5410ee318"],["/posts/52b5b3c6.html","aa8d2dc1910927cce9831e86121f3787"],["/posts/6515f032.html","f23e3d3fc9945eafe42e95feec1e456f"],["/posts/71131d34.html","36997fef861d696902dd245154680a8b"],["/posts/78a8a8d3.html","1e6ad03abaf18488c98de2598026dfb0"],["/posts/7e3aa3e2.html","801f8ebce6b8e5054c95c4e324498826"],["/posts/80fe2691.html","c855840545176df7b389c11372061f2a"],["/posts/81ac52e9.html","5a6cd495e1c7a397ce689500ab9eb9c1"],["/posts/886f8d3.html","8c4f3dd3605187bfae852fc39fa9a245"],["/posts/8dd520d9.html","342417ee0b1c3e25fc71ccb706e1c6cb"],["/posts/8f555654.html","d706f3d30acf2eb0c38338f180babfe8"],["/posts/94d3c794.html","e78cccff77fd54c7592dd3c6c5a7b7c0"],["/posts/97f50eea.html","9f5fc0d42baa3902c5990fc8c2608e20"],["/posts/98662d05.html","97f62d048cefa709c7c2cfda3d55b766"],["/posts/9a2f6162.html","32ca676a2f65acaa69e1f2368f77bd60"],["/posts/9b22a48d.html","61284d583973ab3f26e0200197e64529"],["/posts/9f61c1a0.html","ccaae32dbfab2bbeced7d65411e055bf"],["/posts/b5fb773f.html","75fdae98f258f7bd15665eedbfd7fadf"],["/posts/c1b2c6c9.html","fc49a431a9d986e68008db92c4646b3a"],["/posts/c497a412.html","616bdc4bf3e631078519ffb5fa0adc79"],["/posts/c5de299a.html","b76e148493b4ce4c6d07f4de8626518b"],["/posts/cbebef2b.html","321563b81f803b75c7721230989c1b27"],["/posts/ce25023e.html","28e1b25c43c3101dc349ecdf6b35f64d"],["/posts/d2fd4837.html","ca38f67a4e152edbdc373a488a2b9c62"],["/posts/d3a745a8.html","fe036d942c4cec95ec0f68b450e0bf9a"],["/posts/ee1ed673.html","f638acc1ff92defc7029f37c00f7a658"],["/sw-register.js","a1b585634dd35b72fb04e5c51df3d6c4"],["/tags/Circle-Mebius/index.html","816ad3ecf083c89ea77d51112e9f9d4c"],["/tags/Omegaの視界/index.html","25ae68a63115bf59e3fbe827544bd5dc"],["/tags/Witch/index.html","9ced91c9aa2d59338ee8dcc0284a61c5"],["/tags/galgame/index.html","2e5f76b7d95ac9e42c712d21def57eae"],["/tags/gal资源/index.html","03f1d66f2b1a14de39adbb5221068dfd"],["/tags/gal资源/page/2/index.html","f75d6c693cefe6a55fffa29028746329"],["/tags/gal资源/page/3/index.html","e862aac1d3ded71ce30ae2800a6607ff"],["/tags/index.html","9cb17d8eef6f7c1f5812a93d8aad9c6a"],["/tags/rkr/index.html","592259226173af06d781fe0eea822f9a"],["/tags/停产/index.html","adfb080ddeca0507a47f510111337987"],["/tags/公告/index.html","2c70bbf5aaf5344279b58bfbd21ab0f0"],["/tags/同人/index.html","064840162f701f07db9b088c6e3cebb0"],["/tags/水仙/index.html","030f1d1ee11d9a033f9490c36007112c"],["/tags/猫猫社/index.html","e0ac32a7e07e37e913bed926cef2a166"]];
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
