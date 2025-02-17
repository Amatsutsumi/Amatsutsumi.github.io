/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","de8c26cb65e77e31079bd76cb1b9d33f"],["/archives/2024/04/index.html","869b14885ff5807f64e0974702fd6b85"],["/archives/2024/index.html","ed47b8a1dd5fdd1b5c854d56dc63ef39"],["/archives/2025/02/index.html","da893c36a44c3b69e69fa8f7b5637ce9"],["/archives/2025/02/page/2/index.html","d0560702633277c6856b3f0ae9a7d114"],["/archives/2025/02/page/3/index.html","32a7e7b575002665713e8238b6419332"],["/archives/2025/02/page/4/index.html","971a3b31274ec9544d3e7e5ac967eacc"],["/archives/2025/09/index.html","9c6a3b3397c1a4753a08d3a562ce17dc"],["/archives/2025/index.html","64d1ea8df8216b478bed6bc0d84abb28"],["/archives/2025/page/2/index.html","9e7a30f5884fbfff712cf352494eda82"],["/archives/2025/page/3/index.html","d3e0a95a00ce3afebe39201435b9b1e4"],["/archives/2025/page/4/index.html","59e08f93a77f173d79ae00ee0b84c73f"],["/archives/2026/02/index.html","3ac32622c30deac2f975d4f154d0705d"],["/archives/2026/index.html","e76ed6b8198a1ac5949ca4fd033f5699"],["/archives/2925/01/index.html","81fdb8d123ec26b907504864c131a2fc"],["/archives/2925/index.html","2cd0f127f535b04cad9b6e0bc6357d04"],["/archives/index.html","c5d9872e7ef3aa3162ca5a6634dec979"],["/archives/page/2/index.html","046cfac3012bade48591c184202eb651"],["/archives/page/3/index.html","0d9855c2273f1eaf4daabde028cc5e3f"],["/archives/page/4/index.html","1d91b157b44caf73d057f53fb66e1fc8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","97d32e59715e903ec67e38d12b9ad470"],["/categories/galgame/page/2/index.html","12cf7b7df6f0022d90ec4018397def02"],["/categories/公告/index.html","fd83e32424fe96c5835871f1ff732246"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","8ad48ae6a36aac3487404203ecc84b18"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","5df960d5ae708d23811e187b8a668010"],["/page/2/index.html","b16cfabca1e49854d62ec11844a6bd1e"],["/page/3/index.html","916e3915b4df9cef7a52081e1e60a8ba"],["/page/4/index.html","caf14978a8caa0a8bc841a942f531183"],["/posts/10c9dd98.html","05e610e30d9b2f825c25ff4af9af1b37"],["/posts/15ef14c2.html","3672cb4e682532db1cacfc03c38b905e"],["/posts/15f3959d.html","87f5dbdf9ed1fb8963e8241833eb0f2c"],["/posts/1d59b71f.html","0a4322206480758e8b68d8c7698034b5"],["/posts/28397adc.html","03c39ec4531510aa68db296abc60bd4b"],["/posts/2cf620f0.html","c11161a37027399f042def0e72fd9e6e"],["/posts/303007ad.html","507ba52e8ca475e16b26bde69841f249"],["/posts/3f7d823a.html","33d85dd33c175540ba582728e324a410"],["/posts/44124a6b.html","faa0a6c66fb8096dd60efc25e4b78500"],["/posts/4b689be3.html","48cd6bc03ed5a5d142cfa33e3be26985"],["/posts/4cf8423f.html","f56d03b87faebd62bb5bc73a736ea154"],["/posts/4dcf85c.html","16810e3a38b309a1cb5d369d7867f930"],["/posts/51c9b1ff.html","ac1e74cc362ced4e558ce71e0f01e6eb"],["/posts/52b5b3c6.html","2cf1689deab4977633dc553b8d44333d"],["/posts/6515f032.html","0b4175e73c2a8d5a42eb1da845579cb3"],["/posts/71131d34.html","c47258fd6ddd799497d5723b04190da8"],["/posts/78a8a8d3.html","a81fb1862105f9d565ca1ef03ee7f794"],["/posts/7e3aa3e2.html","0e72e7144d838ec5039c63d37a1a318c"],["/posts/80fe2691.html","c4d552d2a7f1dba855624232adcb8dee"],["/posts/81ac52e9.html","caf968719b87aea479ee4cc3c83684a9"],["/posts/886f8d3.html","56360c64263d1ded0a55ad9d60b0c21a"],["/posts/8dd520d9.html","4dfd072e9e5b385b36f8bfadae2cde10"],["/posts/8f555654.html","0fc60a0504e475cda1c7fd1d5f708f2b"],["/posts/94d3c794.html","ed68b7d713b385061d4854756dbefc66"],["/posts/97f50eea.html","3892fd7ceb7e440de4fb7078a4e82902"],["/posts/98662d05.html","fc7411d74b99f3c1b4ad3a1017e86ca7"],["/posts/9a2f6162.html","c2352f38e907d128b382a4945d7ca91f"],["/posts/9b22a48d.html","2000c14a0146e63f9c322800aee1da8d"],["/posts/9f61c1a0.html","12a722347c17c3d0d184ee016b5215c3"],["/posts/b5fb773f.html","ac1e6fae13e36bdfeb56c28d77497892"],["/posts/c1b2c6c9.html","b4899779eb33846ebb61659eba42e9e6"],["/posts/c497a412.html","87de14b1f459344c8acff5e53bde358a"],["/posts/c5de299a.html","a01e3c51f31b4450dbec2cef8a98bb8e"],["/posts/c70bba9c.html","6ed20e1f3733953e9e744fc746b0e944"],["/posts/cbebef2b.html","e8a4c561338d2916fb4b4e4ca54507a5"],["/posts/ce25023e.html","d56a3a4260fb73c682dcf6b872eb84e8"],["/posts/d2fd4837.html","547cddc626e61797b4a8c372c6c9a97b"],["/posts/d3a745a8.html","f3695a400bd3b0caad35ca9dec535247"],["/posts/e3ab6ad8.html","d72292e3beb25ef844a2cd78f69a3e0d"],["/posts/ee1ed673.html","91ac913c428c3ad025e34fbc3ca345fc"],["/sw-register.js","3902d3d4c466e4514cd284a36dfe60c5"],["/tags/Circle-Mebius/index.html","25f94787540b23b6f918d09428853d27"],["/tags/Omegaの視界/index.html","4cd2ed745842a0f809baabb25f36080b"],["/tags/Witch/index.html","76ba75420049c5905c862971ce29b728"],["/tags/galgame/index.html","4c7c361e982e0dae340045fe49cf32b1"],["/tags/galgame/page/2/index.html","a63cd3b1129d36d90f7bfe283dc2c784"],["/tags/gal资源/index.html","04f5c5b7d087e05c9e642c30917867b4"],["/tags/gal资源/page/2/index.html","58ddb20fcd4174d90af693e48aec3b4f"],["/tags/gal资源/page/3/index.html","c28e328259f2e932997e4d467a1f56c3"],["/tags/index.html","0deff4b69ad00ece0e6cee034592d4a9"],["/tags/rkr/index.html","1c77737d67dcd627ac1eecb445f4fd24"],["/tags/停产/index.html","68949b89984dd6525ce9ff9796a79bd2"],["/tags/公告/index.html","a2779ce12bc4dd4f91d1ce770d220d88"],["/tags/同人/index.html","bbbb885013c5226a40b064b61bd76edd"],["/tags/水仙/index.html","733f74d749d422202172328447a103f7"],["/tags/猫猫社/index.html","a6a5060f57edd607b7b2c46f13084be0"]];
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
