/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","b00a644e7fb28556cb8af53255214022"],["/archives/2024/04/index.html","ec76ce185afe670ef30c64c8b82e0251"],["/archives/2024/index.html","c000acd32fc3889c1b2585e63e8a0dc7"],["/archives/2025/02/index.html","b7f5bcd7ba8decda52342f804985d890"],["/archives/2025/02/page/2/index.html","1e35324c73b9147808914af8bb0be77c"],["/archives/2025/02/page/3/index.html","d5b80c9cb1a634042a2fdf5f9232d940"],["/archives/2025/02/page/4/index.html","b512c3b4f29d106bd31ed8c54937e573"],["/archives/2025/02/page/5/index.html","34221cdc4656a6d8aeccccd7f2aadc17"],["/archives/2025/03/index.html","b20cfa291610fb22bcd74dcf273239f8"],["/archives/2025/09/index.html","8db01e37351ea9b4f29716b12e36d68e"],["/archives/2025/index.html","d0aced34d745854a33d9e0e0eeb30174"],["/archives/2025/page/2/index.html","4ddc3b788c76fbdb88068551d9676381"],["/archives/2025/page/3/index.html","0a4ae8b224c2ffad9a2a279df4804e2b"],["/archives/2025/page/4/index.html","5b60a3d35bc875756c7e2f60ca8249d4"],["/archives/2025/page/5/index.html","3007c58d6a52bb994ff4436679ab2c00"],["/archives/2025/page/6/index.html","b3630bcf462eeafdd56f189d318ad037"],["/archives/2026/02/index.html","c3c07d20e35bfc060a4199e9f60f0f6b"],["/archives/2026/index.html","afb5c4c07446d51155be012463c180af"],["/archives/2925/01/index.html","bf623bc1725ba356650b1959f7810635"],["/archives/2925/index.html","c593e6d10443fbac8eec47bd76ed9c27"],["/archives/index.html","b1ba595df76a305d6f5c6292be7df488"],["/archives/page/2/index.html","55fe6f9f98b8552d88cfdd71bd313f2c"],["/archives/page/3/index.html","f017978d2c01bf82075784ae69b49878"],["/archives/page/4/index.html","e45ac0452e813a8c2e190e4113c123b4"],["/archives/page/5/index.html","0a81baefc6879022f9e3953696b5fcac"],["/archives/page/6/index.html","b03189be9438b85be059103eb915173a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","221ae1720087527eab818129e136daa6"],["/categories/galgame/page/2/index.html","e181d71c637dd5d600ea7708b78a1088"],["/categories/公告/index.html","062becee7ce7faf30f0edf3597c568a2"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","e23377977b1c1400049eb4e5e474df86"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","b3a3284293515c3ca25e221ac3bd997d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ef87ca550e916a2790198ae1f7307e90"],["/page/2/index.html","ee72635cd466152b7c631f454995f182"],["/page/3/index.html","6c962a83360eb4065ca459a2eaf26a6b"],["/page/4/index.html","8024197cdddf2fe1087ae13477850ab9"],["/page/5/index.html","cc081d368ba60cff71e12fd764493f7e"],["/page/6/index.html","f72208f21d1a0f064a3f183e9fff3781"],["/posts/10c9dd98.html","14f934228a91153bfff13751b4bede72"],["/posts/1370342.html","cbce23b03570aaff72382c610be0c383"],["/posts/15ef14c2.html","cd5c71355ca822e880d0c2608841b47b"],["/posts/15f3959d.html","68a036fd40e14535577a851632173a09"],["/posts/18ab785d.html","43d5cbe643aed9598cd624599b0ceac5"],["/posts/1d59b71f.html","42ebe658a5332b9cb54075518ebd12b8"],["/posts/20b3f3a4.html","14c3ee824d14563ffd5ed54ca5ee8a1e"],["/posts/28397adc.html","53440135832f6b56c54fe35e784b4b7d"],["/posts/2cf620f0.html","160e7b36fb69a7438b7c1802778614eb"],["/posts/303007ad.html","be5cc8edffaab7126eaa7f539d9c7ecb"],["/posts/3f7d823a.html","14d023a62ac2d6f0d1931268c8102bd6"],["/posts/44124a6b.html","ad30c7003d81339131a5153f598fd4ec"],["/posts/4b689be3.html","e8f073d890b1c8d24e630320acbd2885"],["/posts/4cf8423f.html","d432a4ca74e335a335faeb2f5c594435"],["/posts/4dcf85c.html","da945822894547df9d5a7dcc9a39316e"],["/posts/51c9b1ff.html","e12d8e2782d92cd329f7d1ac9e58c1e0"],["/posts/52b5b3c6.html","f86df6439816194b774d0f280a8bdb7e"],["/posts/5f6e0c59.html","3f4d6fd37722259233edf476b30f791d"],["/posts/6432d61a.html","b4ed7f34020749b9eb0e28670eade750"],["/posts/6515f032.html","d3c9722df3b93a468eab762bf7c6393c"],["/posts/71131d34.html","ac37a3f245724154b3af3f15294e9e06"],["/posts/78a8a8d3.html","2308ae2a74dba32a3babf45e3a27ae75"],["/posts/7e3aa3e2.html","8ba6235dfb628f6178e6c1594922cec7"],["/posts/80fe2691.html","2d64e6cb9fbe85141a5fc55c1425b29b"],["/posts/81ac52e9.html","33889730ac6410b001b06cd02f5eccca"],["/posts/886f8d3.html","1377f0225cc4a8933ca772ed62d98e11"],["/posts/8dd520d9.html","657e599b9202c5b681faead3caab0167"],["/posts/8f555654.html","a61689b492345dc705ca3e260db26868"],["/posts/92a980c2.html","775dec2dd0d89c238a6f2d9d7148526e"],["/posts/94d3c794.html","68cb49488ffb09eb38608f56732f6af5"],["/posts/97f50eea.html","2acf9eead85967a5ee35748b30887bb0"],["/posts/98662d05.html","4fa345619f0891f273c7273125738840"],["/posts/9a2f6162.html","c9a9c3d1789a83369e5470c44a3086ee"],["/posts/9b22a48d.html","7016346a946220eb2bfabc448030dbd5"],["/posts/9cb455b1.html","d72cec77266ad87c827e254866d6eb19"],["/posts/9f61c1a0.html","2c70fd5b31ea949cddcc0d86dc6017a8"],["/posts/b497b647.html","d311abee68875f5db7240302724382fd"],["/posts/b5fb773f.html","b53180b8b7c65f4615abab1e34e11eba"],["/posts/b8d46b32.html","6c35eb88d7f5233ec66bee481dc5a4d0"],["/posts/c1b2c6c9.html","d682aa116ac78732d6c8bb2453ced088"],["/posts/c316c2e8.html","519c11559c3eb1f2ea3cf074916c267b"],["/posts/c497a412.html","8e8e2e4b9eb412c96a1cb79820429c47"],["/posts/c5de299a.html","7bf4854120e0d225f7f1d913e16d0160"],["/posts/c70bba9c.html","1ed06793b8f429b6228a19a8b14a7cf5"],["/posts/cbebef2b.html","4244f8fbb34b60906c984511b308db27"],["/posts/ce25023e.html","cfdb510af560e3d9070be90146d8864b"],["/posts/d2fd4837.html","7d76b77837839e189b782fa1bd80bd5c"],["/posts/d3a745a8.html","2abd38b30e3011d8d481ca2c02aefb33"],["/posts/e3ab6ad8.html","d41744f482b00260dd9351e6c7d94d03"],["/posts/e5018da6.html","1063c2c0d52f99fb77699abe1f99b12c"],["/posts/e624b065.html","3130baba65a7ac016d002daf258c07b5"],["/posts/e91abb63.html","7658d5fd1f7f8e9a8d9a9e25587e4e9a"],["/posts/ee1ed673.html","43cdf805139afe5094a5c2cb76d8d02b"],["/posts/f230b0fd.html","7ccb6c9bc8b8093cb771b2bd54d22e64"],["/posts/fc04d0d4.html","b436081e9befb28783a1d8f0e555f283"],["/sumire/index.html","441ce231fb9d5a3ada02c460da8ac97b"],["/sw-register.js","18ca8d2997113ff1af52663875cb811b"],["/tags/CHUNSOFT/index.html","028b03b6e501691067051e2b5949a049"],["/tags/Circle-Mebius/index.html","bc185c3a32725435749a5ba852c703ae"],["/tags/Omegaの視界/index.html","0a25879129b03270b1b7561ea37edd69"],["/tags/PC88/index.html","b9ae2a492bdf75b7947d80074f0e2206"],["/tags/Witch/index.html","8c4494c72cfbf41b3d5cdce0225e9ada"],["/tags/galgame/index.html","c91a9934f87c24c7baa63ada14442f7f"],["/tags/galgame/page/2/index.html","3226d664a0fb6bacfc4c3284ce31c47f"],["/tags/gal资源/index.html","6fa582dfbb83cc7c97224ee67ae3aff8"],["/tags/gal资源/page/2/index.html","7be6fbf72044e2655e6d60a7a7c87329"],["/tags/gal资源/page/3/index.html","5d4c1b9e0d5a2877ef19e3a6a515acb4"],["/tags/gal资源/page/4/index.html","1567c7789e557117bc66ad3044b2787d"],["/tags/index.html","642ca8545414d8d07fa144a75d4d9e5c"],["/tags/rkr/index.html","36b9f09291ecee713b7618373a247dc2"],["/tags/ねこねこソフト/index.html","7f9e1a3dd396129b05cf8b3bdc53a85b"],["/tags/ねこバナナ/index.html","5e616befe02b5bb32e81820ebcd1c331"],["/tags/停产/index.html","fa5883671c705fd3eec2465dcacfd5de"],["/tags/公告/index.html","a55c1a7c5732733f32eb3ac423aea69d"],["/tags/同人/index.html","0b30437356bd5e46e701f4ccd49229b3"],["/tags/堀井雄二/index.html","e117cecfc686c4728cadddb112e2b804"],["/tags/已停产/index.html","7a4a1f0456ba1f800a3f4f7b41e17a1e"],["/tags/水仙/index.html","4e0e9575dfc7f6c629db1c6d32b16210"],["/tags/片冈智/index.html","f3ea0f4015dd7de25fb17ac4d03b7e1b"],["/tags/猫猫社/index.html","41658b27bfb3d442840e2667f648e2d8"],["/tags/画集/index.html","7d8121b77dd10199bbc97c3ae580f796"],["/tags/閂夜明/index.html","db7cefcd37c0b59dc5ebbb624e4de8e8"]];
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
