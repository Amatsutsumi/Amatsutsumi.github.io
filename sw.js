/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","46d1a9df329a4875029bd645cc3019d3"],["/archives/2024/04/index.html","e0e5c80f28267d4f25278dc70f79e43f"],["/archives/2024/index.html","94be673e2cd458fd24fc33618598b908"],["/archives/2025/02/index.html","6029549f70755367783b7aaeed7d4165"],["/archives/2025/02/page/2/index.html","55fdf2997aae2454596f372b8dc8ec49"],["/archives/2025/02/page/3/index.html","3bd62a1b8d61f4bc2317b0620f2ee19b"],["/archives/2025/02/page/4/index.html","5870e4fc71b183fef3eae9576b67b2db"],["/archives/2025/02/page/5/index.html","8b8442176c89bcc10cb5a42c71ac1410"],["/archives/2025/03/index.html","18815c30679e249f391c4329099ad61a"],["/archives/2025/09/index.html","8bc2c23016053026731714d6a25b301e"],["/archives/2025/index.html","7bb34524754c7ac75b74f6e8231e97aa"],["/archives/2025/page/2/index.html","09a418b431adc1945dfdee521a3bfc38"],["/archives/2025/page/3/index.html","17e19fc08fc8cc0964c79ee3db891918"],["/archives/2025/page/4/index.html","37b7d54a322d8c684e60eaa24990c26b"],["/archives/2025/page/5/index.html","c4f28bb1a7236572d567630c06fef1df"],["/archives/2025/page/6/index.html","d3968442f4c0554b38081ddd5084cbbd"],["/archives/2026/02/index.html","c3f7fb252af9e5475e186a92ba93f631"],["/archives/2026/index.html","f061806be6d9e4e65e44ede75cc1b17c"],["/archives/2925/01/index.html","faff4075506dbb7e822ff328e36290cf"],["/archives/2925/index.html","4c0c1dfa44e83878f27095b6dc355bdb"],["/archives/index.html","cec86b59142136d416d8c95a2dd50e46"],["/archives/page/2/index.html","4e61f58223d38b67a0928a4ec84fa445"],["/archives/page/3/index.html","7b316f49c3c028c9f26bacdc7d26445c"],["/archives/page/4/index.html","5d780bb25afe4b7c3e4c58bea3a01398"],["/archives/page/5/index.html","71a2ad2bf51ae0f5d62fcd0a45d37297"],["/archives/page/6/index.html","df669a611585644826c0a5475d356007"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","12fc4da7f93f52d04f67d5a301dd28eb"],["/categories/galgame/page/2/index.html","66f66b5c5541fc15906548fca9a18958"],["/categories/公告/index.html","16b63d25d807ee5872f47eafa3ca8507"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","7ccd9958b9805f314d1e37dc101e6d78"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","a4d6349aa2d63587e32d57281768cf83"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","b0812087488c6e273e72feb38373b825"],["/page/2/index.html","f945f255fb19be58b957ec4a09d53d4d"],["/page/3/index.html","2cd13f3a9488dc0227fa29651060a6bd"],["/page/4/index.html","deb490a56fecf3d06ac3a09fac7e06fe"],["/page/5/index.html","6fc83da349bf36cc773a724de8b70ea6"],["/page/6/index.html","e145c7f7f6577246d04f048a4e87d124"],["/posts/10c9dd98.html","a1368b622297f6ba4cd897cc9b9dadfe"],["/posts/1370342.html","4a53b158620a3b49c056abaf1f4ea064"],["/posts/15ef14c2.html","cd5c71355ca822e880d0c2608841b47b"],["/posts/15f3959d.html","25461375a927b26080468b4d5d3ab48c"],["/posts/18ab785d.html","43d5cbe643aed9598cd624599b0ceac5"],["/posts/1d59b71f.html","73ecc0cfdc0507966bf436d6353c081f"],["/posts/20b3f3a4.html","75192644812dcc566c37faad72adf80f"],["/posts/28397adc.html","53440135832f6b56c54fe35e784b4b7d"],["/posts/2cf620f0.html","ea1583a00069d10b24f7c65cffef4f17"],["/posts/303007ad.html","72b69384ccc4659f7614599aefb1af71"],["/posts/3f7d823a.html","6223c9ce441fb951c89375b964bb8f7d"],["/posts/44124a6b.html","ad30c7003d81339131a5153f598fd4ec"],["/posts/4b689be3.html","f2e8aa4fc5dea07594675875533af133"],["/posts/4cf8423f.html","54da1109a91269c0b29723420480d519"],["/posts/4dcf85c.html","51bd7cf49cde4ff6c310361757af67d0"],["/posts/51c9b1ff.html","63fac5ed2dcba2fc85565ea1a54af7b9"],["/posts/52b5b3c6.html","3a9473b6cbc582580b3c9977f99dc2dc"],["/posts/5f6e0c59.html","846a7bac80d1be99a9a72c0f48d83a4d"],["/posts/6432d61a.html","b4ed7f34020749b9eb0e28670eade750"],["/posts/6515f032.html","bda752e4d7172b4ab9dbc0c82f142160"],["/posts/71131d34.html","7b956b89fabeccdbdbbb9558ee7ecd31"],["/posts/78a8a8d3.html","34fdd26d3ee1128b2d8390e17c55a97f"],["/posts/7e3aa3e2.html","9218c288caec6dc742422e31db797cf9"],["/posts/80fe2691.html","18aa4f607bb858007ac24b9f65401b1b"],["/posts/81ac52e9.html","33889730ac6410b001b06cd02f5eccca"],["/posts/886f8d3.html","639d8f04973fc57fb32b81df2bc4cd02"],["/posts/8dd520d9.html","657e599b9202c5b681faead3caab0167"],["/posts/8f555654.html","947385b9ea270c6f8ccb43e8cb359e94"],["/posts/92a980c2.html","afac5b352e6ff04e7d4a93d8f57a043d"],["/posts/94d3c794.html","76019e4e10b531ea0526aebdfe57601c"],["/posts/97f50eea.html","5b2e4469c0c53cd30aa538d6f637b345"],["/posts/98662d05.html","cbc1d69526dbc5ad911216f4a7ac3cb3"],["/posts/9a2f6162.html","c9a9c3d1789a83369e5470c44a3086ee"],["/posts/9b22a48d.html","391561afd2d0efb6a0bc50048dee7526"],["/posts/9cb455b1.html","bf53735ab3d21692040b948bccee8f37"],["/posts/9f61c1a0.html","2c70fd5b31ea949cddcc0d86dc6017a8"],["/posts/b497b647.html","69d970b59f6814683837daa3a9a1ff51"],["/posts/b5fb773f.html","348f896ba75fdda62158f26d4c7d042d"],["/posts/b8d46b32.html","6c35eb88d7f5233ec66bee481dc5a4d0"],["/posts/c1b2c6c9.html","d682aa116ac78732d6c8bb2453ced088"],["/posts/c316c2e8.html","f04ef131469333c00228bd6149b6b937"],["/posts/c497a412.html","98953a0a3a5f917f96bf59dd34a7c5e6"],["/posts/c5de299a.html","7bf4854120e0d225f7f1d913e16d0160"],["/posts/c70bba9c.html","1ed06793b8f429b6228a19a8b14a7cf5"],["/posts/cbebef2b.html","847db33ec45f64f2940f8a548767e109"],["/posts/ce25023e.html","29743216c91efbe5a9099cf987bc91b9"],["/posts/d2fd4837.html","4027ed09a0a52bf66c4c91e523627a42"],["/posts/d3a745a8.html","af972bfbf92cb4aa30e4095e5ad0d8b2"],["/posts/e3ab6ad8.html","d41744f482b00260dd9351e6c7d94d03"],["/posts/e5018da6.html","27c2357c7d3b24ecd1c61fba9e2f8880"],["/posts/e624b065.html","11557a2126bf17459eef871d0768fa1c"],["/posts/e91abb63.html","a86863067bcb2f5df27d8325b21a63c5"],["/posts/ee1ed673.html","7ca142c4748ac77b681f67454253e007"],["/posts/f230b0fd.html","318aa1540ad20e0ff0977780be690d26"],["/posts/fc04d0d4.html","b436081e9befb28783a1d8f0e555f283"],["/sumire/index.html","a355ad7f564b6a8a6b3674c94f184e29"],["/sw-register.js","ba0884a5bc1fd29eb688a1a5ad41f9e9"],["/tags/CHUNSOFT/index.html","cec670b6e70cb15c1573a09775b2ae93"],["/tags/Circle-Mebius/index.html","a8af2b632b3a4bee5e0c296017701ab2"],["/tags/Omegaの視界/index.html","282c7bf76310f0c92ecdf88a86715747"],["/tags/PC88/index.html","b6f186408258c5fb5e5e9eecf5314234"],["/tags/Witch/index.html","92ca1ccde010564c954e0e7dae9eb793"],["/tags/galgame/index.html","e2c7a27318fa6819c86294ae7f4b37e6"],["/tags/galgame/page/2/index.html","999a90c0f2e66b64c61f57bf91ab1aa8"],["/tags/gal资源/index.html","ea65470ea50d8cf47d6df37ef7598b2c"],["/tags/gal资源/page/2/index.html","c008dc46df0edd1a249e3b8ff15af133"],["/tags/gal资源/page/3/index.html","df3e53a152cf1e80024a25a7cb37791f"],["/tags/gal资源/page/4/index.html","e168d8883484d5afdd1651645868529e"],["/tags/index.html","5ea2682ca8e45f36176e5ee50d01a7c0"],["/tags/rkr/index.html","2d885c5eae3e60b770561fb8eb1d06c8"],["/tags/ねこねこソフト/index.html","bff5b5851c666ff34e6e8022f27d0b78"],["/tags/ねこバナナ/index.html","406fc14cdd4e8f3aa5f9da211fcc42b5"],["/tags/停产/index.html","623997e203f8cad04949daa5930d95f9"],["/tags/公告/index.html","7b598583f08f85ff4cb51243877ab0df"],["/tags/同人/index.html","b77c1429e54ad2e9eb7a22bfbe441545"],["/tags/堀井雄二/index.html","47be7b857d63b269734b83a0016335b0"],["/tags/已停产/index.html","c90e3c539d21b486d59e55a86060980a"],["/tags/水仙/index.html","4446158c1d2d20629068347ae2d385b6"],["/tags/片冈智/index.html","eebd3e34bd4e33240330138e494b4917"],["/tags/猫猫社/index.html","7cae74547eeed7a9e48928de8cfe080f"],["/tags/画集/index.html","1024745595cb2880c089d9e31926c690"],["/tags/閂夜明/index.html","1c852a50634e40ee33e0ea2e9e5976fb"]];
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
