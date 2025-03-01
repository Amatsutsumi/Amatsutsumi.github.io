/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","80d7bca8a6b97e6a7113d02f777d287f"],["/archives/2024/04/index.html","b6aa87e261826dbfb5fbad2243791633"],["/archives/2024/index.html","8188b09e4244b7e0a5bf6d56874db8eb"],["/archives/2025/02/index.html","6b638a64049238f3eb25d7fe29001b9e"],["/archives/2025/02/page/2/index.html","e63baccba1297c7b1bc6de12ad83bd1e"],["/archives/2025/02/page/3/index.html","3d358306a8c4cd6874d67ba9e5ec8345"],["/archives/2025/02/page/4/index.html","44584db476c0417a69e2b7225a8fec9a"],["/archives/2025/02/page/5/index.html","b1b1f3b3e7db9429bc2c7c76decf93f7"],["/archives/2025/03/index.html","62aec6a76c3ebf531491715e45f77956"],["/archives/2025/09/index.html","ded2ce2567e3e9e8d90511f0aae490b1"],["/archives/2025/index.html","a2eb98c3ddfe619eef611826c8160680"],["/archives/2025/page/2/index.html","b05b9bdb159385742968c0f52cc54500"],["/archives/2025/page/3/index.html","bddfbda1efbba1476b2f6e42bce5140d"],["/archives/2025/page/4/index.html","129ce161d8874395d96b837bdf4b9e98"],["/archives/2025/page/5/index.html","9f0be49519f6595ab8f0ec5f914fbb2c"],["/archives/2025/page/6/index.html","aa8c8af6058ff38d38d6414cbbe11a94"],["/archives/2026/02/index.html","fb4f84440228344db3be633f2549b4d0"],["/archives/2026/index.html","8d4a02de1904cb9a2b71e89687654eff"],["/archives/2925/01/index.html","468dabf51ebb11278146955fdbb81ca8"],["/archives/2925/index.html","2e9a4f9adc505b238c68fbd5dea35bce"],["/archives/index.html","d8f926b10cbd790fd3074f4fc1380d2a"],["/archives/page/2/index.html","1f5e3b2a6fa4143edff6b3f87a1e2429"],["/archives/page/3/index.html","0c3318d4386f4b20af7b6778f1bf86a2"],["/archives/page/4/index.html","b0caed032f0ce087e403cad2751a7200"],["/archives/page/5/index.html","bd431947bec8e4b63803c711de3ac415"],["/archives/page/6/index.html","3353dbf3068ffbdd13a4cfa0bf72909d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","2c08535a48a48023b44ef1e0f32977fb"],["/categories/galgame/page/2/index.html","b27721102fdc12e78430f0b34d818739"],["/categories/公告/index.html","cc5902a3e3da6f23c029eb05dbf8ca78"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","ae2ce49d6da26b1056779d9bebc4809d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","8383349c8b311546e78b45d8c160c008"],["/page/2/index.html","38d6990d5765f1ca8fdf97a8fcc626d7"],["/page/3/index.html","25a62440b6afafd6b5b55a3c7d7c41a8"],["/page/4/index.html","513df941d917ada5f0ef146e37c73e09"],["/page/5/index.html","e54819b9e8f14479fd5c276b8c694875"],["/page/6/index.html","33cf24d84d2a55cc91b9505d0fa8f835"],["/posts/10c9dd98.html","68a1ce8482b016e11d181525d893ce75"],["/posts/1370342.html","42987ca92e63c97185d01a5bcd27189f"],["/posts/15ef14c2.html","b03f02e2d9e4206149b6962c73983801"],["/posts/15f3959d.html","889ebcf539b810e3b3d445d9f13132fc"],["/posts/18ab785d.html","063ba450eebb5548d03d8beb8e499d10"],["/posts/1d59b71f.html","51d9974d7450132a89217e11e7180ed6"],["/posts/20b3f3a4.html","ff2de2b6e692c2a3fa8c0615d910546f"],["/posts/28397adc.html","7d5e5bf69bfcadb2fe3700abba898757"],["/posts/2cf620f0.html","2d7f01b106699f8a2a9db00e4f544bab"],["/posts/303007ad.html","ac17ba75b298e7728c5b3f21840d4430"],["/posts/3f7d823a.html","cd962875c4c875b9b8ef31aad74d69ce"],["/posts/44124a6b.html","71865d1b1fcfd10fc771618dd32a5099"],["/posts/4b689be3.html","03ffe0eb3fc38bd6fb9c170cacd0043a"],["/posts/4cf8423f.html","588b2f2ccd75c840a54956a10f7f8428"],["/posts/4dcf85c.html","491e21c5df09bc0fa37cb7f4696610e1"],["/posts/51c9b1ff.html","e41816cd0b97ed0e2f699b69a41d9635"],["/posts/52b5b3c6.html","8eb19f736eaba621f8885cb76da82f52"],["/posts/5f6e0c59.html","e0d2ef4be1135a31b68647ff15a615e3"],["/posts/6432d61a.html","14b5cfc14c953712e3ede240ecd6aec1"],["/posts/6515f032.html","c114851472d91607144938ad9e4b6ef2"],["/posts/71131d34.html","5e40a41ec5f551dc3465ac48c30d8911"],["/posts/78a8a8d3.html","c44bba13e8596a27867cf97156932ec7"],["/posts/7e3aa3e2.html","edc9d2909e1dfccc7b2dfda88103b5fa"],["/posts/80fe2691.html","18a33426c08bd15266d7a19da4da7f74"],["/posts/81ac52e9.html","d80c7b63292849b9a32747f97d4c8199"],["/posts/886f8d3.html","e6e07a893df95f4c31e80be3f21039a9"],["/posts/8dd520d9.html","c06eeb3924ea917eef13fe7d2b46a611"],["/posts/8f555654.html","7982815a0ca38cb3914289e48ca2704a"],["/posts/92a980c2.html","eedd9a7fac8e0eedb5e911d5481d0815"],["/posts/94d3c794.html","e5322efbc7bd6e4daa0223e74c6cccfc"],["/posts/97f50eea.html","18741258660af5c492b2a194c5e2255d"],["/posts/98662d05.html","81e8f545c7c082c4d7b454b1229dae45"],["/posts/9a2f6162.html","1cca0c986df7221fdb922f4b51bb52f2"],["/posts/9b22a48d.html","49f237f47b3d30b6e2b89fe1d984ae4d"],["/posts/9cb455b1.html","8770ed3ece54e6a9b28e2486208758f4"],["/posts/9f61c1a0.html","dcd75af2452efea2e88c1b16fb1f35d7"],["/posts/b497b647.html","e13c85c7af86ad5dbb9d4a4acd4f4ae9"],["/posts/b5fb773f.html","f8a474de27f504faf00083f3c7129ea8"],["/posts/b8d46b32.html","1a85fc67a6ca183f391e9ec7e4861557"],["/posts/c1b2c6c9.html","55fd03a42e69de6be8c9da0edc283247"],["/posts/c316c2e8.html","c9d8577a5faa705a84cd85aaf7b20bae"],["/posts/c497a412.html","9ccaa34968f8a5d57c9e456d3bdf1df5"],["/posts/c5de299a.html","76c80fb3f0d9e631053a8222a23a2267"],["/posts/c70bba9c.html","161f4263218a89999e334c36cbcd8225"],["/posts/cbebef2b.html","dc51dcabc007fb2036818986306281ef"],["/posts/ce25023e.html","bed738c649c239cb525b52b27d81cdae"],["/posts/d2fd4837.html","8b1c5560fa573029ae752728d223232d"],["/posts/d3a745a8.html","cd0b2f88acfb107d032c545259d7f314"],["/posts/e3ab6ad8.html","be0b91f2e3f9817edfd9ee5c43850350"],["/posts/e5018da6.html","76465dc33e2183a53ea722144b7bd816"],["/posts/e624b065.html","beb4f1eaed3f109a9894bdc04207484b"],["/posts/e91abb63.html","46e15152e71cbcd6af274aa21ed48646"],["/posts/ee1ed673.html","9bb8737548343badc7589b19f8cde19c"],["/posts/f230b0fd.html","f0a4c21d758099e3fb854a2d7fe8aabb"],["/posts/fc04d0d4.html","bdd3284f2e92405896383d3da6b32fb7"],["/sumire/index.html","46f3d6cd8dd0fab3e444c1ff05aac711"],["/sw-register.js","69b78f1398284bd92583d79f56a6bf8b"],["/tags/CHUNSOFT/index.html","1261f6301a4d7bd4bdea81d434aa00f6"],["/tags/Circle-Mebius/index.html","d66649e76e13748347c497687822223c"],["/tags/Omegaの視界/index.html","3ace6683a6952c5f371462a474fbbd44"],["/tags/PC88/index.html","42d26d7965001b2d56a6ffb0e51b3583"],["/tags/Witch/index.html","e0541ab57bcc369e7527ea5fabe170f5"],["/tags/galgame/index.html","f567508381f8d3903b256d7846501209"],["/tags/galgame/page/2/index.html","0b7d38e8cd9644dd6940bbac775d6354"],["/tags/gal资源/index.html","164291049c9dcd43ace909056012440b"],["/tags/gal资源/page/2/index.html","3ff544706d7a6270ca75b79072538500"],["/tags/gal资源/page/3/index.html","3cda2ef3a2ec36c07ac16dece570afd9"],["/tags/gal资源/page/4/index.html","582878a6ad58258d33b5a55d28194eaa"],["/tags/index.html","798aeb2f90bd209417c098289a302a6c"],["/tags/rkr/index.html","6faf996752c38ae9f34b86beefaed312"],["/tags/ねこねこソフト/index.html","bfd8f74841b7b3a39ca5376fefd3e07e"],["/tags/ねこバナナ/index.html","5d26b56e38d2716ebf89f0d92bee1e59"],["/tags/停产/index.html","955ddbb0100632f1278743554fc62cd7"],["/tags/公告/index.html","caf88eed220fdf919b7a9c13860b0907"],["/tags/同人/index.html","7c5d0c5d19ab50687160da148d2aec5f"],["/tags/堀井雄二/index.html","ce7940ad0708e8e9aa8ca37c3ce2371b"],["/tags/已停产/index.html","08788afd51a477ffba4549156b7b0d6d"],["/tags/水仙/index.html","567e81c69639d37b033ac0bf085a00c7"],["/tags/片冈智/index.html","c1dbb919149728b895cdeb1bd051d92f"],["/tags/猫猫社/index.html","d23187371d9733c9ae120f98bb57155e"],["/tags/画集/index.html","804943950e2e3ea92b384fafe482b8f4"],["/tags/閂夜明/index.html","362348e50ca0186904d1ff8b3d081b03"]];
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
