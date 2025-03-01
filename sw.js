/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","508dee4e054626b73723a5f2d1f705a2"],["/archives/2024/04/index.html","b1c64e349705815fcc93a12bc528b408"],["/archives/2024/index.html","c93e6b701bef44a208dd9f92942ec221"],["/archives/2025/02/index.html","7b5a1adb393ba5414e92f33532c3576d"],["/archives/2025/02/page/2/index.html","869b820a4c4ca74d8afaa2e168891e7d"],["/archives/2025/02/page/3/index.html","cf15f2f718253ca85080c80d24e3df01"],["/archives/2025/02/page/4/index.html","e2c7ce7ffaf36dba6af185d97ea24770"],["/archives/2025/02/page/5/index.html","f922047d07f81d3454fc69009b5c876a"],["/archives/2025/09/index.html","fdd08b52fe086df6e7a5a2d109ac4b66"],["/archives/2025/index.html","e95f6ef3b98aec2a437e989dc37c1523"],["/archives/2025/page/2/index.html","67aa3093854b514c85964ee5acfa71a5"],["/archives/2025/page/3/index.html","1bbacfcd34d38ec6c2fcf4be483ac58b"],["/archives/2025/page/4/index.html","f97269972147995f8e4a714d89cd241d"],["/archives/2025/page/5/index.html","6229fa0bbe66eb13b80c3d2d7edb1377"],["/archives/2025/page/6/index.html","778f6c911b6971a20ace289267281b09"],["/archives/2026/02/index.html","eee6c917dc1c882aa31dd921b0cef7df"],["/archives/2026/03/index.html","980ea405638845aef6c718993c4b52e6"],["/archives/2026/index.html","92630a76db23632b5b075857fe3b913f"],["/archives/2925/01/index.html","a80190c13199fc15fe7548f81dfaa2d2"],["/archives/2925/index.html","712ee9aab6786b803e145880c9275419"],["/archives/index.html","ebaa4b212a7cce588b43cef2f73f56d3"],["/archives/page/2/index.html","8a74bab85218c69fa770ca0a2e8a9acf"],["/archives/page/3/index.html","cb17bb1eeaf686051061ef0c24929092"],["/archives/page/4/index.html","d6f3caf3ab7b9dbc7ffefe5712be4310"],["/archives/page/5/index.html","b859ad0319fff8a4616410ce9794aa3d"],["/archives/page/6/index.html","46b84e8fe0041e942336cd24b35da0ad"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","79496cc46a6f76644939bfc1c4c5047f"],["/categories/galgame/page/2/index.html","2cd598af6e695ca7a5e5ec927ed0b67e"],["/categories/公告/index.html","c33e8a22c3f3cb9c02785c809f804cd8"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","25323a85ddb230bb676335d908e6c2f1"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","33498ff13fb5e79cb3c379e1b34a8dfb"],["/page/2/index.html","2f6d13581c5381aa0b44664338ae8bde"],["/page/3/index.html","c5c895d754ca5f05697856a8fc2c0500"],["/page/4/index.html","454a17857f67a762b2e97592e38cde95"],["/page/5/index.html","6836dfa934a4ab5a5fc1b1cf5b670b78"],["/page/6/index.html","aacca5cfc08df6d03d39bde986985530"],["/posts/10c9dd98.html","e548539d2c46d8953268d21f897d9c78"],["/posts/1370342.html","03cfc54a69639dc72d3827a17db0c5c4"],["/posts/15ef14c2.html","11dc4056b4e3ec5a3314620a7134b051"],["/posts/15f3959d.html","3b438ac1830a12c9e4af7e6ee2d7b670"],["/posts/18ab785d.html","b93294457c9c43850b088d1fc3f1d2b3"],["/posts/1d59b71f.html","ea028e9b9d3f1003eece718fc1291f4c"],["/posts/20b3f3a4.html","f60dafee1e7f65702d1d73a148ba8a83"],["/posts/28397adc.html","2fd0c38e6c65d61522e77c63537c4c75"],["/posts/2cf620f0.html","eee8dc21f9b49a79ab6a82a2da3a8049"],["/posts/303007ad.html","fd0d4ae2a328e780506f1c22d002c2b7"],["/posts/3f7d823a.html","552ed9fe37a416e82dc7c4a8b0677609"],["/posts/44124a6b.html","e3d64a37e42d0de8268a82c7cd2bdefe"],["/posts/4b689be3.html","ff43a5a6517f58752f46cfbb761c03b4"],["/posts/4cf8423f.html","9dc311b8b97ca681845eb9cf3110f23e"],["/posts/4dcf85c.html","52bc5990f7315a754c6717b1d3ac892a"],["/posts/51c9b1ff.html","79edc7429e1dedd389c4045da0e7f513"],["/posts/52b5b3c6.html","46c2308f7bd34cafa919054a5a7ede9b"],["/posts/5f6e0c59.html","015f89038029e7a7e897cf43f5fd68df"],["/posts/6432d61a.html","37525cf90c6ee7c37d619d93645c33ad"],["/posts/6515f032.html","b6c54a9b888796c6a0b07d859b2b933d"],["/posts/71131d34.html","31dd11245f1327627eb3ce2bd69b64bf"],["/posts/78a8a8d3.html","61a32e672a3ca91eb61a56b17ba3613b"],["/posts/7e3aa3e2.html","d934ee3e74ff3571f2031fb990f71b36"],["/posts/80fe2691.html","ce050dfd6225a09be50e0d845cbcee44"],["/posts/81ac52e9.html","8e6efecae599f7a74b189676eee8a84d"],["/posts/886f8d3.html","a582038232115d6fa1a6d8f75cb79ff9"],["/posts/8dd520d9.html","8aad18f3e29d36a8ab8812deb3d51218"],["/posts/8f555654.html","02889af72c4d8d029d8c27756fe9559d"],["/posts/92a980c2.html","adf6dba176a138d8269eee28dc48eca0"],["/posts/94d3c794.html","3b8b069388e78cd9273c79dbeab08f51"],["/posts/97f50eea.html","7c1f017c8e5be301cefe01a75fd776f2"],["/posts/98662d05.html","719e770ea91902af388c68cc4fbae354"],["/posts/9a2f6162.html","a341af7dc9a68a0f3754577c8fcd95c6"],["/posts/9b22a48d.html","85fee6b7f77b927971792ebf0d5740ae"],["/posts/9cb455b1.html","39b9ea271ce1ee7c08755c42d506fce2"],["/posts/9f61c1a0.html","562ac13e82885b04abb83db38d52d753"],["/posts/b497b647.html","6f1f5b4fbd3f40c17d65f22d471106da"],["/posts/b5fb773f.html","2487e21c46e3f0eeac9f0889cc8785e8"],["/posts/b8d46b32.html","4226dee7a508b2c5560013211654a781"],["/posts/bfad94b7.html","d03b15607adc18730f1f24e0cfc8b952"],["/posts/c1b2c6c9.html","6a33b19d6d3b57c58e54458b4b282706"],["/posts/c316c2e8.html","75cafe4cb5ee278ee779a9bed8654122"],["/posts/c497a412.html","06621ad9de8eeb0fcb4336db099513be"],["/posts/c5de299a.html","514c162f10e3e71ed8ecf7d95464b40d"],["/posts/c70bba9c.html","1866ec5455b2d2356337afd2665ea140"],["/posts/cbebef2b.html","feb9998a586bc9a920350b26cc67b21c"],["/posts/ce25023e.html","f29b43457b187b8cdb3c82468872e5b4"],["/posts/d2fd4837.html","a1a2e0152573102a1d688bd3e0b8edcb"],["/posts/d3a745a8.html","3637acdc4952c59e646e1f387ea7e3f2"],["/posts/e3ab6ad8.html","5d683a4a5cad70abf429e87645dcdbe1"],["/posts/e5018da6.html","04b4584a692e9fb12735b2c768c2aa21"],["/posts/e91abb63.html","bc96c8a86ca81c7924a45f17d67dcdcf"],["/posts/ee1ed673.html","77f2e94024ad00ca267756f7bb2dff20"],["/posts/f230b0fd.html","3aae068d6710eded12844c1005288c4b"],["/posts/fc04d0d4.html","882787e915ecb3c32ed6d4f530de3dce"],["/sumire/index.html","ffcea73a78f2b655d0d6169c3dca8afd"],["/sw-register.js","9fded0a5823272645166846c587e878c"],["/tags/CHUNSOFT/index.html","c8b6fd06240949e2d10ea379c0c77813"],["/tags/Circle-Mebius/index.html","8a769e91ceadb7b218dd25d03a8d6f08"],["/tags/Omegaの視界/index.html","eb70b4709ea3f19b7efe5085b7d84b3d"],["/tags/PC88/index.html","d159b469a81a11138a3d1850be22e99f"],["/tags/Witch/index.html","067488f43440cf3749eadbcb53da14ad"],["/tags/galgame/index.html","e8a80c869854cc4b830e9e285d63bcbd"],["/tags/galgame/page/2/index.html","ff814fc60c5df3ad0a0bf0586a5036f0"],["/tags/gal资源/index.html","4a1c84fd10c29f0ade6db13b34ce4439"],["/tags/gal资源/page/2/index.html","da0cb8cbc80502800798fb89dbdd8846"],["/tags/gal资源/page/3/index.html","6f27cb36bab6d282d61d2ee8adda73ad"],["/tags/gal资源/page/4/index.html","d167e183b9471334d20b8f00f438924e"],["/tags/index.html","08e42fbc25bf2121e061cb887c22464a"],["/tags/rkr/index.html","f46b6b8dafd47978ce88344f1166e9b6"],["/tags/ねこねこソフト/index.html","e7836020bb4dc88d1a2bf38164fe17e7"],["/tags/ねこバナナ/index.html","e7c1057b515e2b8d5bc34fc15e627fbd"],["/tags/停产/index.html","727aacab29d3149c4e77b3b267c47027"],["/tags/公告/index.html","e615818db8f733cde17df19a5a60fc07"],["/tags/同人/index.html","ad27e20887786213116ecadadbddbd0c"],["/tags/堀井雄二/index.html","8d42ddfed8ee4f74546922752236643a"],["/tags/已停产/index.html","919832528c2e25723d79f8b2301881dc"],["/tags/水仙/index.html","6c3a20d6563391f8377bc895797bc177"],["/tags/片冈智/index.html","f44f90ff6b222794fa36686128491b9e"],["/tags/猫猫社/index.html","30ee4e8d8be71da87bcb4e74e965c736"],["/tags/画集/index.html","c065d5a6b8dc0664799ba99b672064de"],["/tags/閂夜明/index.html","9a8b687e6da5104adbe1838b2cdb8888"]];
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
