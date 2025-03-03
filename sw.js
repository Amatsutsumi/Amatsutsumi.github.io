/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9ed8e68865cc2d3bb1248349b5560ca3"],["/archives/2024/04/index.html","fecf3aa471ec2428c6b14544e068f482"],["/archives/2024/index.html","9edbcd747f7bd369975bdf9e66c7cfde"],["/archives/2025/02/index.html","155e648ad67b80bdbebf7018b1c200a7"],["/archives/2025/02/page/2/index.html","09fb7782725fa5500e63ee2e2c1fd957"],["/archives/2025/02/page/3/index.html","d07cc1c6c27c65872d0473b43a76b10d"],["/archives/2025/02/page/4/index.html","63a020230c4a0587e4cd038615badcc7"],["/archives/2025/02/page/5/index.html","264fa1d2d0e08485143dd7677d2415f4"],["/archives/2025/03/index.html","1d13a5f1c823eebe1a82e90246317b21"],["/archives/2025/09/index.html","4f0cc0d03e684aaf232acc1edbba6bb9"],["/archives/2025/index.html","55ff2d100c1190209750f59ef7d1585c"],["/archives/2025/page/2/index.html","6ca6acc2a0d91755fe277e4118a06ebc"],["/archives/2025/page/3/index.html","800cc96272fe55bbce6bab9fa991b7c9"],["/archives/2025/page/4/index.html","54f8c99654be76d857c582c11b75c7ee"],["/archives/2025/page/5/index.html","6d5ca1aedb65870b3b102b992c1fa1db"],["/archives/2025/page/6/index.html","0ace847b41324431234b58c9eab693e7"],["/archives/2026/02/index.html","ffc4eb03a1a352d7d5f1c6b7a5b9270a"],["/archives/2026/index.html","794b7773215d37d368b6ea36b817ee92"],["/archives/2925/01/index.html","260dda0bf0eb255222b8f4519141a24d"],["/archives/2925/index.html","93a0160d2c112021ec208a2feb4edfed"],["/archives/index.html","1316d001eb72ce27d7bd27ac272103d8"],["/archives/page/2/index.html","98f8921616cb5c47f7cc4298eae4c8eb"],["/archives/page/3/index.html","f30d7d53f11e2a8efdf3c095fb1a371f"],["/archives/page/4/index.html","a69ef0cc5c466ce49fbc0773b5f1c021"],["/archives/page/5/index.html","21cac21f24867c000d001015ace528ac"],["/archives/page/6/index.html","55e638560e204b0b82964640ea07eb9e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","1e36331d60c04ee8a5c3458e28b8f5e7"],["/categories/galgame/page/2/index.html","0edd8ee1c3fbf82d229829e5fcba2374"],["/categories/公告/index.html","08b33cb46508f190c6ac3071af9a03b1"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","54973a5e66d52841d272432cbc735702"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","bed98d8327f28159eef095f634eae588"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","102004707c1b92d991c867bd8cbb91c6"],["/page/2/index.html","dac0b81a6afadfc51d4d337905797d56"],["/page/3/index.html","495b9672c55bacaadcb3ba33348e96eb"],["/page/4/index.html","2fdf690a007565a4fa9bdbe3e1664de8"],["/page/5/index.html","ec073397626d9f85d485a51df3f07185"],["/page/6/index.html","f1879d530095527d859d6d4e405d7342"],["/posts/10c9dd98.html","b389184f50b8624e5533ee524d4fe216"],["/posts/1370342.html","905695d3effc695b7e339b160b2a5745"],["/posts/15ef14c2.html","e15242ceb126576283bd551037074300"],["/posts/15f3959d.html","db2237c649697bfb208572841c43e0f0"],["/posts/18ab785d.html","23fd8c9ecf3b5b07eb84fbccd4af54a4"],["/posts/1d59b71f.html","2a7c4302e6d5f44b35bf48252b782bac"],["/posts/20b3f3a4.html","21d686f92ab4c56fcc269b3e52ca398e"],["/posts/28397adc.html","1657934040af3746ce195ace153d60e2"],["/posts/2cf620f0.html","3eb3b3b3ca52e0c010084bb992431718"],["/posts/303007ad.html","24a1a2a42856fa62ca619a752147af54"],["/posts/3f7d823a.html","5315bfe5a48ca1e3c80ff086527573f2"],["/posts/44124a6b.html","f7a8269ca892db2d4272ef703b2b1e1f"],["/posts/4b689be3.html","61dbcecc83f0c13fbf149c17a1fd411d"],["/posts/4cf8423f.html","246919e1d1c5ffef5b895d97e31f3679"],["/posts/4dcf85c.html","95ca17ec472453d3fc7bf9024d6c5399"],["/posts/51c9b1ff.html","7f880b727069104841eddafeca9419e5"],["/posts/52b5b3c6.html","297065c33e8e7969c398a4d191382179"],["/posts/5f6e0c59.html","5c08d6edc65ee919443cc434aec60c36"],["/posts/6432d61a.html","35c96320a4d5366a2410450b31b73769"],["/posts/6515f032.html","060209e99512269e58cfa924caa219b2"],["/posts/6720ccdd.html","6fdf9ea4799c5e78e0fc19d35120fcc9"],["/posts/71131d34.html","fc8a8d824bbe8e04448f610ab851f563"],["/posts/78a8a8d3.html","5e2b40ece010aaeec0f6dacb0218f79d"],["/posts/7e3aa3e2.html","00c5e23a1535948e6f233018abb925b4"],["/posts/80fe2691.html","85e6328c3a9c166a1996188f4c3fb61f"],["/posts/81ac52e9.html","47b36fe0aa1af9daa6072fc2f9b20cda"],["/posts/849b40f8.html","9c43c2e36bfe7da9b280e7b4e89b9fa0"],["/posts/886f8d3.html","631ba7ff7433c32046b19792a255a9da"],["/posts/8dd520d9.html","f97864c776dd162e23e699883b2755fb"],["/posts/8f555654.html","baca8121e12a569cd91d8ff5f1d99a17"],["/posts/92a980c2.html","728c915df55a9de00a1022e10a9cf964"],["/posts/94d3c794.html","da30e6bf79b99b8231f4772266267a6a"],["/posts/97f50eea.html","3b2f4c7053a1b8c8e1e6285f2b05e9b6"],["/posts/98662d05.html","6402a1dc54e26986b0ffdc3936fc158a"],["/posts/9a2f6162.html","294ae152ddc67e40ec7265c80bf7a292"],["/posts/9b22a48d.html","6d3cf7261e3646e4d8dda186e48d0bba"],["/posts/9cb455b1.html","0bcef47ba8dd62c50eb14d3752a56616"],["/posts/9f61c1a0.html","6ac0ac5e16a856a7acd0f9b69b3457f3"],["/posts/b497b647.html","74fee27fb829490b5b2d54d8056e90cc"],["/posts/b5fb773f.html","701013133e2917443e2f697f61a8d4dd"],["/posts/b8d46b32.html","ad9e63be4d1a50a9c7bb2da479eed4da"],["/posts/c1b2c6c9.html","12966323869063ad58364183306f29fc"],["/posts/c316c2e8.html","095b58a4799d7aefec50cdfb47b77cd8"],["/posts/c497a412.html","7e0d62130a1ab49209cfe1da3c68ff96"],["/posts/c5de299a.html","ed58fe745745c089557c2ecc69bf23db"],["/posts/c70bba9c.html","41640a9a254325160f53883742beb268"],["/posts/cbebef2b.html","2fa7b506a16f371615f6a26692aee064"],["/posts/ce25023e.html","094edf6811007b6485a3e020f44e2173"],["/posts/d2fd4837.html","659939bd6229ab1c9a385dfb545e577a"],["/posts/d3a745a8.html","5e1a729c871e20867717a7ca750e4cf8"],["/posts/e3ab6ad8.html","7d2d2b3aae313df00009816d587cc29b"],["/posts/e5018da6.html","f511708edbce6ad06c091cc80f1ef5cb"],["/posts/e624b065.html","79d1883a0406d0bf90dd0cbb8a4c6d7d"],["/posts/e91abb63.html","4486e0cf8af10bad5c704f294c9a1374"],["/posts/ee1ed673.html","348a4c702468173bf2688af2763d62c9"],["/posts/f230b0fd.html","ecd141963e7d23dd5a8a1e3a90456b6b"],["/posts/fc04d0d4.html","bda4a48bc846a47af0e91efaf5ccd81d"],["/sumire/index.html","b4d6a3a9aca604e21733a9448492f367"],["/sw-register.js","34cd366cf8ec0b413103f22ff65d3665"],["/tags/CHUNSOFT/index.html","0ca2400cb24539c9d6063da29129e273"],["/tags/Circle-Mebius/index.html","918912f2e302b2be4da1025fc169bb72"],["/tags/Dos/index.html","989712837630976a40ff19537224855d"],["/tags/Omegaの視界/index.html","903716ba536b7210c255d8c97f488631"],["/tags/PC88/index.html","294e4032fb06f801eb5058aa49b8cfe7"],["/tags/Witch/index.html","6b5a771bbdd35fd5b6fbb8b7aab174b9"],["/tags/galgame/index.html","5a9a9c13f771d555ccca26618d4c0a52"],["/tags/galgame/page/2/index.html","b657146b7baf1876321e2e212aa5ce7d"],["/tags/gal资源/index.html","6ab86acb87e6e7cae02a9038432f733d"],["/tags/gal资源/page/2/index.html","5849fe068e88a332c31b31fe8a6c790c"],["/tags/gal资源/page/3/index.html","69413dc4d2577c32f642b6840ab80e5c"],["/tags/gal资源/page/4/index.html","c0a808eeb4d20062bbc285996a3412e7"],["/tags/index.html","7cf889a660ce5a5b4badcfde4c10b736"],["/tags/rkr/index.html","260a64495d9f15341fbd7019faa14a94"],["/tags/ねこねこソフト/index.html","20739aa573ff758b291ea508cc82c7b4"],["/tags/ねこバナナ/index.html","fc85f1ce32d14676e3556cfccad58370"],["/tags/停产/index.html","69a349ae9b4b069cc4f157fad8b27951"],["/tags/公告/index.html","777c3a42d0d57182e57556b83040b406"],["/tags/同人/index.html","505523195c089a1e91284a358235461c"],["/tags/堀井雄二/index.html","ae74640c3dbf08b1c10e2162c794a905"],["/tags/已停产/index.html","53f83d350746216f673ab3f330b05b51"],["/tags/水仙/index.html","1031711f0117d86bc33527ef52c5b69a"],["/tags/片冈智/index.html","515b489cb84729b19d9684320e4efce1"],["/tags/猫猫社/index.html","12517a0297760c8f57ab90e1fbc8e61f"],["/tags/画集/index.html","662c0f1ab0498352578f53159ce02fde"],["/tags/閂夜明/index.html","4a138037e3388fc711a92915434943c0"]];
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
