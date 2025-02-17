/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","7ee65f2ce50a808373f3de9f0cf66c0c"],["/archives/2024/04/index.html","ee5c0174e65f0cc6003c638de414b23d"],["/archives/2024/index.html","75ccef17323d3f00dc34b82cdb718ed8"],["/archives/2025/02/index.html","914dbeed060297d776e2802a8b0e8417"],["/archives/2025/02/page/2/index.html","829a1c355dcdf7595562cf2515205db0"],["/archives/2025/02/page/3/index.html","5e1e2f7157066f7c0e94a569a2743c06"],["/archives/2025/02/page/4/index.html","a5477efa74c844af5adc3bca8ea1758d"],["/archives/2025/09/index.html","2446daed300d4b560d8a0ed5734199f8"],["/archives/2025/index.html","e98e84716d158bcf074e7e15ac6f58ca"],["/archives/2025/page/2/index.html","a4682720d1dd51b07eb0cdce27878a07"],["/archives/2025/page/3/index.html","d73a6a13e30c050c258adc73e8b9c4f1"],["/archives/2025/page/4/index.html","e303552c5505243ecc521c20c6d5e201"],["/archives/2026/02/index.html","d653efbb86a58ee62ac0234efe3469f2"],["/archives/2026/index.html","d5470468a7ea1d97594a942b95ddfa76"],["/archives/2925/01/index.html","466e4195987ad298e01b0209f6a88731"],["/archives/2925/index.html","867bca0486c7bfbcc6669328f891ee72"],["/archives/index.html","71f927d660f0cc6aea3a3c823d67d934"],["/archives/page/2/index.html","782a8647bbc09c8d7bcb99e45f2ac929"],["/archives/page/3/index.html","2005bfae25df3cdf29051ac5ac90f893"],["/archives/page/4/index.html","0710dbbae61f3f3f43b4aadcc21aa3a6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","b1601222c8f50f88c26e8d56688c33df"],["/categories/galgame/page/2/index.html","dd2f77de5deed4924e8c824db1c41351"],["/categories/公告/index.html","e0253198fd681f45229805c7fec11cea"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","efa0c25e784d85fe065268a7c75fe590"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","27c41765c362bc50920a1efacb3e3a30"],["/page/2/index.html","9ac01d2369eee60d691e6c54dba64996"],["/page/3/index.html","1837a4056d0e486a757c9f39c4ceab44"],["/page/4/index.html","7c730c72423eae53e54b3665f80364ce"],["/posts/10c9dd98.html","78f18d2ea6a811f9c13fd0da872663a8"],["/posts/15ef14c2.html","3672cb4e682532db1cacfc03c38b905e"],["/posts/15f3959d.html","92b0820321bcba11e34d7e84b5910fa0"],["/posts/1d59b71f.html","524700436649b6b05ef224f921bd19ad"],["/posts/28397adc.html","29c075d3f6f6efbf534a8276c96de2f8"],["/posts/2cf620f0.html","c11161a37027399f042def0e72fd9e6e"],["/posts/303007ad.html","42d86ed0815af5a065783bf73107ca39"],["/posts/3f7d823a.html","3efaed2510a87f8e947ffb7085946b88"],["/posts/44124a6b.html","faa0a6c66fb8096dd60efc25e4b78500"],["/posts/4b689be3.html","3277ceb9a7f6391d1f4258acf30196c5"],["/posts/4cf8423f.html","cee09759c0b55b5d647e6d9a81d74de7"],["/posts/4dcf85c.html","0c62f5efcdd67b2b7b9dfdaac29ae611"],["/posts/51c9b1ff.html","47728ce8a4945b5d5bce096796b9cd39"],["/posts/52b5b3c6.html","0268dd5bf31fe10a3d0f3780f2b8c44f"],["/posts/6515f032.html","9d169bd10f238b582b0ff51a2af86936"],["/posts/71131d34.html","dc16673ed3be9f26eb249d62fd48f725"],["/posts/78a8a8d3.html","1814ac62c4e641894b471c4944bd97fd"],["/posts/7e3aa3e2.html","163910185ceeb72fe65c374d55a83b5c"],["/posts/80fe2691.html","4ae98060150d895a2e8292a05aab6e0a"],["/posts/81ac52e9.html","dd6f8ae2d7e7e9c1b76819eab1b89c68"],["/posts/886f8d3.html","25e009b2ca0438b00c29f7ca652eb5fa"],["/posts/8dd520d9.html","4dfd072e9e5b385b36f8bfadae2cde10"],["/posts/8f555654.html","a3b7d86104a3a0eff74dcd027522b87f"],["/posts/94d3c794.html","762753ab7dcc59fe6ea9cc0b8333e884"],["/posts/97f50eea.html","c62fb8e0e38b7c1a9cffb58456efc00b"],["/posts/98662d05.html","ca67a720ecc2232cf42d8049d1739e38"],["/posts/9a2f6162.html","c2352f38e907d128b382a4945d7ca91f"],["/posts/9b22a48d.html","f20a7964aa24c938570aa18903f7e964"],["/posts/9f61c1a0.html","12a722347c17c3d0d184ee016b5215c3"],["/posts/b5fb773f.html","9001cc927a8d027b42acffc8e3f078bc"],["/posts/c1b2c6c9.html","cc05df0b82734bcdb64c15382ba0664c"],["/posts/c497a412.html","a59ec6dba0288f64105ad40b7db54de8"],["/posts/c5de299a.html","8ba3900d9ec4af6966e90a9b917ad328"],["/posts/c70bba9c.html","778e9371e68ba1dd5b08f663378aa58a"],["/posts/cbebef2b.html","7a0454794e0f189859147a1555450364"],["/posts/ce25023e.html","e29952363680755a6056e99c5d416a41"],["/posts/d2fd4837.html","51e2d4b48a0b5949c7b167cd0b5d47fa"],["/posts/d3a745a8.html","2c47fa7e32edf2b2320a1661ef5375f3"],["/posts/e3ab6ad8.html","ff456f2c9e2a3fc609c1c9fce2bba9b2"],["/posts/ee1ed673.html","9044201d1f902050b0ee0af8dc072501"],["/sw-register.js","46020761baa615aa7c3c51efb66adf6a"],["/tags/Circle-Mebius/index.html","9d2f649df10e8df817a6e529a7f4d401"],["/tags/Omegaの視界/index.html","37b3dad3bea9fd02386fd52137543103"],["/tags/Witch/index.html","e02bd074749299fa8f40ee60f063645f"],["/tags/galgame/index.html","f079c934c003683cfad4dd6288487d62"],["/tags/galgame/page/2/index.html","7a66831b60c14dc0451693b80ccde954"],["/tags/gal资源/index.html","0c718181e807c1c866161398fd75d05a"],["/tags/gal资源/page/2/index.html","f728dfe201e95f73864be7c6e4783889"],["/tags/gal资源/page/3/index.html","0b66c61dc10e5ad29886cb883de2b9e0"],["/tags/index.html","bd640addfae7f96f9434c03f651d4bee"],["/tags/rkr/index.html","84844d7e24cdcb075e37bd597baea621"],["/tags/停产/index.html","3949ff6ec0b75c4516ff96882817e1af"],["/tags/公告/index.html","a596830d359d5c92f1e3682da68aeb09"],["/tags/同人/index.html","060bf98e75b505f4787ea301686128a5"],["/tags/水仙/index.html","e1f06f5225881244dff15bb411137ad2"],["/tags/猫猫社/index.html","10cba77bfdb4744834c7daa9b96cf43d"]];
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
