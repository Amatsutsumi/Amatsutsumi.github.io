/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","ec2c7aae199bd3aeacdcce38e111bccf"],["/archives/2024/04/index.html","9d4445e96511273e23f5c0d7a598c7e6"],["/archives/2024/index.html","afd1d4ecb94a8df537b4c8d146b3ff9d"],["/archives/2025/02/index.html","23e54350a07b4f29436eb2346c3c8f45"],["/archives/2025/02/page/2/index.html","b543def21acf69ad357b10885f68158a"],["/archives/2025/02/page/3/index.html","7cbf45d013c8dfaf11893beff8ec199e"],["/archives/2025/02/page/4/index.html","a9a97896c8be6575a48a1ae971579682"],["/archives/2025/02/page/5/index.html","d3c47204f2997bc7bebad0ea206c011e"],["/archives/2025/09/index.html","ed07adb501807ee8e2d71f6debb98afb"],["/archives/2025/index.html","e842ff3eeb35a2c47e9b5f01f30cf300"],["/archives/2025/page/2/index.html","e0695d6846458a0539aaa78907ef7d18"],["/archives/2025/page/3/index.html","91177209b209f7d8fbd7ed6f7f1bcc86"],["/archives/2025/page/4/index.html","266f2aa5a696af9e6b8a2334313d8caa"],["/archives/2025/page/5/index.html","613c8a6127a654fabb2b8ca51f4fc41a"],["/archives/2026/02/index.html","6760f6ab8166972f84e741bf0b70f13c"],["/archives/2026/index.html","7a087de91f0acde8f041ba8c29a5bc4f"],["/archives/2925/01/index.html","26e88cbd04a6fd3a6e058fab07b8bada"],["/archives/2925/index.html","57aab52ff2312eb98166c9cc757db630"],["/archives/index.html","fd5a7d39c68961117542c042586e2409"],["/archives/page/2/index.html","a75185cce49805abd6ceb0525fba6a24"],["/archives/page/3/index.html","090352de42bfe2a07f1840856f293ff5"],["/archives/page/4/index.html","cd1bc64f1940d5f29d260c5b59a91391"],["/archives/page/5/index.html","3dbedca60124fb32c15846acbfcda465"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","33b5a29f6ec9e937aeae7107d03de1ee"],["/categories/galgame/page/2/index.html","d64bb924a6f6ee135195cd49a5a3e662"],["/categories/公告/index.html","04acf41d0e33d4ff953ddfcd73a7c948"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","a5d2d7ba51e08e489b274499a2228cff"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","fbdae6ee1814bd98858f380ac060c4e4"],["/page/2/index.html","00417ac685fc803bb14f25fe2b575e09"],["/page/3/index.html","54b7bd71352200e10a81428ea499b3d9"],["/page/4/index.html","2e03e5a9e6ed2057cd9f9e3320cf6b71"],["/page/5/index.html","d8657b6cbadc1fac4ab9a43d46d80db6"],["/posts/10c9dd98.html","b8fcdd388f287625d52a0c6126ba5762"],["/posts/1370342.html","e0d7efa36c83a328a0579ba3c247df5d"],["/posts/15ef14c2.html","c2e23c241ce4e70f991d0b2bc1baa808"],["/posts/15f3959d.html","d706f3cf1dcd148c0d6b5ef6dc17b17c"],["/posts/18ab785d.html","d0f8b477eb3c400b5776156efb0d997c"],["/posts/1d59b71f.html","27bf417b0d4edbef13b558a663727e65"],["/posts/20b3f3a4.html","b1498e8b0788a45f0af0e92711310de7"],["/posts/28397adc.html","38c62599f3af7c72fe4b827d83dcf6dd"],["/posts/2cf620f0.html","5041c461eb576352794d30928a2726f9"],["/posts/303007ad.html","cb91926c53022161212f07ebcc800e1d"],["/posts/3f7d823a.html","b821ea8410d422817233434f85d9504f"],["/posts/44124a6b.html","14e0496031a104529e47efb50336e069"],["/posts/4b689be3.html","b23a28a7a24ffafbbc6250349bfdb86b"],["/posts/4cf8423f.html","b66987a752ee61abc16381eeb1aad8e0"],["/posts/4dcf85c.html","8b07308d351b7cf73a800937af0b7c45"],["/posts/51c9b1ff.html","38dc0f991a5e1af913364c40b8f860ba"],["/posts/52b5b3c6.html","15b949ea66806afa907ecd7a315f10c0"],["/posts/5f6e0c59.html","b4750397234f1c93b6d8db19b9f61b16"],["/posts/6515f032.html","ac9f306ecc30cab600a3160fb38f1207"],["/posts/71131d34.html","d0448f577194e82c00380e4ae190750c"],["/posts/78a8a8d3.html","2d1ea5d0ef2ee90c4814a6e84d26931b"],["/posts/7e3aa3e2.html","b97bc4499c58392e046cab40b577a525"],["/posts/80fe2691.html","f17dfaec7ecb3ab9c31ba1dd42bde7fe"],["/posts/81ac52e9.html","4f9945c0935791184337b0ea9c6801c0"],["/posts/886f8d3.html","2474134c654425e69808de4b34fb9a71"],["/posts/8dd520d9.html","b510de4bd96dd6f0b8b4f339bff8f1ac"],["/posts/8f555654.html","e5a24261064e9ff6a755ea9d59d60dbe"],["/posts/94d3c794.html","0199d75468fefb60c8ffd9815bf9fea6"],["/posts/97f50eea.html","b3cba8459d2a79ff4872fa9aa23bfa79"],["/posts/98662d05.html","83f022a851bd7095a8718245c3b65392"],["/posts/9a2f6162.html","6a2de81b0635b18289f53922a9b0af4e"],["/posts/9b22a48d.html","0e093405af1881c239260e9c3c693060"],["/posts/9f61c1a0.html","727734e59181907819cc9481af2cf5bf"],["/posts/b5fb773f.html","41c379714d1cae20f6d5b6c0be11df0e"],["/posts/c1b2c6c9.html","c901a708fe78f415f9433f1033579a5c"],["/posts/c316c2e8.html","a6ec5f1ff9180f1b8dc72189b022e423"],["/posts/c497a412.html","2baed9294a6f0b206cce8dfafaf32eb2"],["/posts/c5de299a.html","6ac8835a1e13c159f7c0cc1de87c6dfc"],["/posts/c70bba9c.html","d4f036cb7ee44b98887ca399201d0711"],["/posts/cbebef2b.html","e9d49c05bb8d0cd52dd3215bc68a6647"],["/posts/ce25023e.html","205706eddbf1bfe9529de63c911deb43"],["/posts/d2fd4837.html","c40ced310d81d366b806752985a9eb51"],["/posts/d3a745a8.html","e07033a5ab793b7b0203e6e2f14a35c6"],["/posts/e3ab6ad8.html","52e07d7d21e675827aa08323b87fd42a"],["/posts/e5018da6.html","958da78947b79b702bbb53232762a32c"],["/posts/e91abb63.html","488b7cf69b5db2ddd7506a7758e867c7"],["/posts/ee1ed673.html","607030ce6f0ca8b07049a1116d253bbc"],["/posts/f230b0fd.html","ea2a92941fb211b3021f1dd097f3e324"],["/sumire/index.html","19a49aae3ecf95fbd4dfef10669fbb5f"],["/sw-register.js","862991a0a24cec9a516fea3ae1097e92"],["/tags/Circle-Mebius/index.html","86c90203dfdffbcb33cd320f3b027076"],["/tags/Omegaの視界/index.html","93dd8d8af4d3bd80109cc9fb60624426"],["/tags/Witch/index.html","3d4142d259937af61244a601ed295b66"],["/tags/galgame/index.html","4dc12c99e3b5937dc6feb2b85d32c409"],["/tags/galgame/page/2/index.html","03bf27338bfbf1357a7ecef4c1bb7a02"],["/tags/gal资源/index.html","593eab6482cae8d7be1f66bd5d56befc"],["/tags/gal资源/page/2/index.html","d87cb802bc6068e2f7e981024e7d090c"],["/tags/gal资源/page/3/index.html","22c267524e238206166d6bb5bf331d5e"],["/tags/index.html","e618acf94a14d05c81763a06528cf7df"],["/tags/rkr/index.html","8443028ae25f8bc2f8dbd3d110b12acb"],["/tags/停产/index.html","40d390a2b1ff703245315d5f94a0a2e5"],["/tags/公告/index.html","76ce00e2d7b173ff8807519bb3e73545"],["/tags/同人/index.html","9381a54bd16c06b688b0585e3406c95d"],["/tags/已停产/index.html","3800639838dde1a02c9f1d82d54415bf"],["/tags/水仙/index.html","cd6ee6dd19029470f851bad1be44f75b"],["/tags/猫猫社/index.html","003cd9cf1fd4f5b0ab926c0cd52237f8"],["/tags/画集/index.html","3fb95e866a33f05f5098a759ad3f768c"]];
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
