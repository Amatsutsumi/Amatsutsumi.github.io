/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","bcded73c27f8ec35020e7e849c057df2"],["/archives/2024/04/index.html","7b234b3f5920e48e4c9156ed4427a86b"],["/archives/2024/index.html","46a04037003073d98edcec635a8e8485"],["/archives/2025/02/index.html","1bf834c2cb7fb1e06c98693e90e47452"],["/archives/2025/02/page/2/index.html","38a7ba81cc46b718aac0976e6a7cc843"],["/archives/2025/02/page/3/index.html","9cba8cdd046f89bd2e27620e20913c98"],["/archives/2025/02/page/4/index.html","cd9241c24c87b49ea9b7ad9561c99228"],["/archives/2025/index.html","b6734805fc517d029c41c042cfe4b479"],["/archives/2025/page/2/index.html","29dafb91592ffe6943aff23ce0cd84d5"],["/archives/2025/page/3/index.html","2a20becfcd65fa1fe65a36546b473f15"],["/archives/2025/page/4/index.html","4ed56d3b1d60f93c5c29a5725630db8e"],["/archives/2026/02/index.html","420c27e314d6591b7b21aef87fa802a4"],["/archives/2026/index.html","9a79a65582460441b69e3ebbbf833e99"],["/archives/2925/01/index.html","95c833e2e7322f6c0c7a5e58c416d201"],["/archives/2925/index.html","d020239958f791e1b2928f6df3f33360"],["/archives/index.html","09ffbefcabb7426b101146f506590704"],["/archives/page/2/index.html","abefe4f2c935dab0ff7570b48fa37301"],["/archives/page/3/index.html","6b6564c7200febe686072acd7a01d0aa"],["/archives/page/4/index.html","3d966f94b1501137b83d9572c16d8a3a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","0aa529dbddb13a98de8412ccaf9d0e88"],["/categories/galgame/page/2/index.html","fc29cdb929fbbd229ec62886e72d05b7"],["/categories/公告/index.html","6747b2d0189fa02b72941cf85c64ea28"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","4ab12a4c3b93672ecf580be151167490"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","56a1995fe22a653a958fb049c2ca38ce"],["/page/2/index.html","e8023dc26633e59abe9eb772c1d5a4aa"],["/page/3/index.html","8c95c923256e5c4e3adbedf8ad5f4ee9"],["/page/4/index.html","848ee9c1d1c350cf05cea6d1aee5fdf2"],["/posts/10c9dd98.html","366cf1490b089cdc51c339c69013fa42"],["/posts/15ef14c2.html","024ac84da113afe02d4f9c6128c60896"],["/posts/15f3959d.html","d86074e972f4d1b4625d4f1fe818536b"],["/posts/1d59b71f.html","af2e26d5d8634817ecc40194f95af942"],["/posts/2cf620f0.html","f8b06b1a631988cbcc9606911b7e220f"],["/posts/303007ad.html","8ac39849f40dd4192966fbe70f79f35b"],["/posts/3f7d823a.html","17d0195f4ebb8c86f29daa6fdadc8417"],["/posts/44124a6b.html","e8bd05bc23f664167f0a9c81f71ccdf5"],["/posts/4b689be3.html","5236f5ca83dd9fec75af3194b4df9c69"],["/posts/4cf8423f.html","df698bd830c8dc9b10dd5eaee7c3bad5"],["/posts/4dcf85c.html","afacf3ea6f0874aa605521046579ff83"],["/posts/51c9b1ff.html","0005f1b67c8094b6e59885a684d1e2c4"],["/posts/52b5b3c6.html","22536daa23ab24e068698c33084943ed"],["/posts/6515f032.html","9ba49ab05830c741b871c1936ee40f62"],["/posts/71131d34.html","01203c0cb01f51a3b468d54cda8d5864"],["/posts/78a8a8d3.html","f5d0e08b60b0b85780f28f2108b07a92"],["/posts/7e3aa3e2.html","b48926428c473b7ca7302043a2e75990"],["/posts/80fe2691.html","b3e690eb347445a18e30dfe9fecb4f60"],["/posts/81ac52e9.html","3b13a432d98973a40358093c2a5bf7ce"],["/posts/886f8d3.html","c717a9d4421e424f81a191377eb8efaa"],["/posts/8dd520d9.html","4aee5a76f2aeb53a01b8a7927e6fec56"],["/posts/8f555654.html","90966b81d446179ded5e8466f40b1730"],["/posts/94d3c794.html","bdaf2eaf0e3a45bf0ab396e9d14b5a2d"],["/posts/97f50eea.html","b7a2bd67baadcae5034345dd5ca8c6c8"],["/posts/98662d05.html","205185286ebbd80391b2afe35cb4c932"],["/posts/9a2f6162.html","50d3d6866d86928dba913091b1b9bca5"],["/posts/9b22a48d.html","7daadae1329ea9bb6283368109c8ec84"],["/posts/9f61c1a0.html","d811810b792aa66f0483a52490cdb127"],["/posts/b5fb773f.html","9dd8d9c0cce148ea514a2a2bfedf64ba"],["/posts/c1b2c6c9.html","393940ce5b07be6b6b9f55a71131bc46"],["/posts/c497a412.html","8d95f8c68e69f0295af80640973b7976"],["/posts/c5de299a.html","aa4bb1d65c0bff189f0e11e8e04741ab"],["/posts/cbebef2b.html","76de4beda6b7cb39790b3f46302f5924"],["/posts/ce25023e.html","8374312987db1e17e14c840f5a54a2fa"],["/posts/d2fd4837.html","2a72028addb70c3395d6438ca56f9c7f"],["/posts/d3a745a8.html","27c3410ffced74d1037f84575bf81cb0"],["/posts/ee1ed673.html","586dec44670f950cb96b5d1fa36188c6"],["/sw-register.js","14f45b37920bcef6dc9a641eed57c296"],["/tags/Circle-Mebius/index.html","b9598e60a235fe7a14b1a0a5922eeb22"],["/tags/Omegaの視界/index.html","c1bf5722035be436335446a760c8f778"],["/tags/Witch/index.html","cecaed4a099f87b627741f2172a0d776"],["/tags/galgame/index.html","e301609f16fac62a56da53d980319efb"],["/tags/gal资源/index.html","f4af6698d9cc7e76d8ae5a318596c33b"],["/tags/gal资源/page/2/index.html","41af6f00e858f0d6eab9206469ae6aac"],["/tags/gal资源/page/3/index.html","eb419b79291b958cf4ca205fe911cb2b"],["/tags/index.html","b8a082c2dc218a3fb3c0e7069c055622"],["/tags/rkr/index.html","5178298f36555859a4cb9c0d3dcc66ee"],["/tags/停产/index.html","72ca26df6d26d2c7bd64618f258c180a"],["/tags/公告/index.html","12cf0074c5595ffac92b29b300252a5c"],["/tags/同人/index.html","5ecd76a243973b543a1501be6311858a"],["/tags/水仙/index.html","bd41a64681d787da7f19c0332e9b5096"],["/tags/猫猫社/index.html","1b8293c459d751fe2ca122c6a49fb770"]];
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
