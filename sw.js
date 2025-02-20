/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e32ecbd9639351565f25a1be56bbfacb"],["/archives/2024/04/index.html","dab0afa58baf7c4bd46f99bced3ec786"],["/archives/2024/index.html","4abdaa826524ea3747cda095f381155d"],["/archives/2025/02/index.html","081c9a487027d8d5f2d090067038fdc5"],["/archives/2025/02/page/2/index.html","7fe859935f4fa008f589c7c2f6c63823"],["/archives/2025/02/page/3/index.html","a0dab80f72dc2de4e6174a86cd1819f1"],["/archives/2025/02/page/4/index.html","cbd5c926cfbc232c7d25d855cc0df60a"],["/archives/2025/02/page/5/index.html","a482a22a9bc67e2dd6df1e1107a901bf"],["/archives/2025/09/index.html","bb7a3546638fe2d8dc88a56092cb889b"],["/archives/2025/index.html","e9cc5278a1a66b6a14bd43c4305cb43e"],["/archives/2025/page/2/index.html","86fde5977528ebcb594235d2a128b06b"],["/archives/2025/page/3/index.html","cac6a2d6db2992ab7deabb5b53776e99"],["/archives/2025/page/4/index.html","3b4e7435364aa3f9ad461113db8cb5de"],["/archives/2025/page/5/index.html","0ed752a037f56d592608d0b33752e55b"],["/archives/2026/02/index.html","cb7b2e2711846dc1d8d5d8545f6f67aa"],["/archives/2026/index.html","7f3b2823a6892907d659cb5ed988069a"],["/archives/2925/01/index.html","9cdb287c649907d40b8bf02dd4771097"],["/archives/2925/index.html","99caa482da382c8527a39d7b381053c6"],["/archives/index.html","c9f2972bdda35203318ca30561588cde"],["/archives/page/2/index.html","29986ac49c1507b092bf18b39a0147ea"],["/archives/page/3/index.html","e591a34e8520f6acc397001b9e04cbda"],["/archives/page/4/index.html","f93ad8cf89d8dbee1216315805e10af7"],["/archives/page/5/index.html","7cdb41d41a08b9bf6292f222ca26b0c2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","89b9053241a02d820669f998d02b80cc"],["/categories/galgame/page/2/index.html","4360afbbd7ed7e4323f6924a711e8321"],["/categories/公告/index.html","9327947dab76805e467a760c98144ad2"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","a9d704261b3f8a59f6e58951b42b950a"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","105475f0b54c40f4e73ea0deaec2838f"],["/page/2/index.html","8c11d39ac83274a2f98069e7e45f1337"],["/page/3/index.html","de6bb753c5919ef65f3c3749baebedef"],["/page/4/index.html","249618d588813344c1c2868bc93c6a64"],["/page/5/index.html","24c05dfda4b63f70520690a18784d3f5"],["/posts/10c9dd98.html","9d93858651e1d7cefe3f243f72922047"],["/posts/1370342.html","555c7c76468adca38609dc6158b5b68a"],["/posts/15ef14c2.html","96d97064eb23a3dce58c33b376c45065"],["/posts/15f3959d.html","fd7605b2ff21622d7b0dd0faebf41a73"],["/posts/1d59b71f.html","656ace17029ce71dc7d2ff46b7de0379"],["/posts/20b3f3a4.html","e3e92e3bbba20d05ea40fe557a8c77c3"],["/posts/28397adc.html","a6cad5ebbb65ebb283e8d9363fed107b"],["/posts/2cf620f0.html","5930fcbfe4862f7f84d5ab4616cbe0c2"],["/posts/303007ad.html","7b2d1b1ecbc030c2a1c3cf6dc300cd6b"],["/posts/3f7d823a.html","c876cec941c530cba63f9d841f0c44f8"],["/posts/44124a6b.html","ef0ecc3576b711b1309da3b5456b43fb"],["/posts/4b689be3.html","bf70f400ce95a1be7d9cf88dfd866280"],["/posts/4cf8423f.html","25eca9d32750b8f2c1211e07b1a20c14"],["/posts/4dcf85c.html","fb0e08bc574cb6d1487ee08a0e89b932"],["/posts/51c9b1ff.html","452bfdcba6a6ab642eed9e6c473f0926"],["/posts/52b5b3c6.html","5527e0abf9fd6a7e412e11f4ef039439"],["/posts/5f6e0c59.html","fb19e3f0c43c690f1e99cb00d21c2491"],["/posts/6515f032.html","dfcaf32c360c20e3ae87a983c6683733"],["/posts/71131d34.html","8edd05aefbda50cdfc7c389b51e92a30"],["/posts/78a8a8d3.html","9cae10ca7c168555ffa55cc70751e5aa"],["/posts/7e3aa3e2.html","49b4f899793c7d693daff240169668e7"],["/posts/80fe2691.html","1f91d0eabed752c3fc05bcef81febea0"],["/posts/81ac52e9.html","ef7725f5229d578e325da9a511892cb7"],["/posts/886f8d3.html","85769ccbf1011437cd7f7d2081380f24"],["/posts/8dd520d9.html","be8891d27485832d8d72a2867a9b02d7"],["/posts/8f555654.html","cae3af34222e2c96ef53869b17c35ec4"],["/posts/94d3c794.html","5ddc9c6c41a83890278b5bd5914ea8d2"],["/posts/97f50eea.html","7b9b3854294835148f337cb1a7611b77"],["/posts/98662d05.html","3db629afbb3af07db2b5e2b8ec13304b"],["/posts/9a2f6162.html","dac85d55f1d87e9077eb931b1ab4114b"],["/posts/9b22a48d.html","3470bbd10c97f2c34f1a83f08d0cdda3"],["/posts/9f61c1a0.html","5fda6f12c9d2a8fac94a25bccbb1533a"],["/posts/b5fb773f.html","de493b2ce61f710be7e2444e051f9542"],["/posts/c1b2c6c9.html","89e408166e0f015b2cba8cb92e194105"],["/posts/c497a412.html","85438680418c0de9f1f9df3076aaf349"],["/posts/c5de299a.html","3149b6e47735a04128d7209b1422292f"],["/posts/c70bba9c.html","4e92eaa475a06ab286cc2ccedb8e25cf"],["/posts/cbebef2b.html","bd4fefbec97b897a6ae35298c6f4ce9c"],["/posts/ce25023e.html","50a524754c512d2b2ed450e78f685f16"],["/posts/d2fd4837.html","211a4c05edb303de13147a55de9922f1"],["/posts/d3a745a8.html","2abf6ceff64e89935324c5c0f5fd0cb6"],["/posts/e3ab6ad8.html","58a96904428e7034b31a9adf96e2f593"],["/posts/e91abb63.html","7965c126ea08e626a10a93f704167dc6"],["/posts/ee1ed673.html","beb4e9f0d4050f34202a3855954dccc7"],["/posts/f230b0fd.html","9611dce9236e46f3a85578f3f96c5db1"],["/sumire/index.html","e083a9faa87a1f2f533f9b49a1c6834f"],["/sw-register.js","ec93d776decb9a0b953e2234ab25029f"],["/tags/Circle-Mebius/index.html","54884e7de247202be2c2660b2deedac9"],["/tags/Omegaの視界/index.html","b658c6e6699e7de07497978a881c5be2"],["/tags/Witch/index.html","35152ce01a4695a387dd7c437850b435"],["/tags/galgame/index.html","349d6486c5943e10f182a02936fbb1ed"],["/tags/galgame/page/2/index.html","3cf00cd6c79c766c31c4cecd98295ea6"],["/tags/gal资源/index.html","337d90d2d243f373b379d7ef3e4804d4"],["/tags/gal资源/page/2/index.html","675516b6bde58324286f4b5424ea729c"],["/tags/gal资源/page/3/index.html","f472ddd731e281c245adc47bc605fd9c"],["/tags/index.html","c82e995ee73358e4069abf61ec014852"],["/tags/rkr/index.html","86ca7169cecc3c580113c2725e4d05c5"],["/tags/停产/index.html","0cb06a744396b14a53bd0ea2292ebe25"],["/tags/公告/index.html","924757794ef88d03943360494292844b"],["/tags/同人/index.html","59c80c89ca116de564427908d2928d70"],["/tags/已停产/index.html","2490791022ac35c0fe4a564ad4602b99"],["/tags/水仙/index.html","c33e13e8e31aa90a69817f366ce8eebc"],["/tags/猫猫社/index.html","d5c46697203fb95b6101ee1a7964c812"]];
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
