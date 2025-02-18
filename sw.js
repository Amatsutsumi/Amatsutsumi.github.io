/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","58d974d1b4a34954be63878491e702e9"],["/archives/2024/04/index.html","3b19797dc8f67501f105c8150d6be353"],["/archives/2024/index.html","8b25037f7ffd97e20c661174337e97c6"],["/archives/2025/02/index.html","a6608f7d7845ae998a6aa27829a4a295"],["/archives/2025/02/page/2/index.html","221e27dd640b9ca4b248523af9af23f7"],["/archives/2025/02/page/3/index.html","5f40a17fd1210fda7f9d7a52326b22f6"],["/archives/2025/02/page/4/index.html","f302a62d329b69458277b400bff9462c"],["/archives/2025/09/index.html","a0d6d704d6b95833921a32b093399415"],["/archives/2025/index.html","95bc67b593e7c14710984854bbe6516e"],["/archives/2025/page/2/index.html","4f2a127cb5b1eb9052cdb7ce64e01550"],["/archives/2025/page/3/index.html","dc1f1ed3c40ef6bea270a847691df3f9"],["/archives/2025/page/4/index.html","0a43a4267c054cdff7e876d498381945"],["/archives/2026/02/index.html","bd72f69a6538cf41d1692c0fc98bf94a"],["/archives/2026/index.html","09f82ae2a01497fcb9fa1ac29ba0a8af"],["/archives/2925/01/index.html","461fd2a11ff9f7c43007043993303abf"],["/archives/2925/index.html","234622e1e4b662e32f049bcf9b55cece"],["/archives/index.html","24d8d40adf9a618de5e696b89310a794"],["/archives/page/2/index.html","d894f263e6ebbc0a9b69c429b1b2ef5e"],["/archives/page/3/index.html","864ab13272befd9ee35a1c63e9e37b7d"],["/archives/page/4/index.html","6c96d0b7d9bfcd7f80be9bb3a5f85458"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","d61650f72f4428b572ef49bccb53a409"],["/categories/galgame/page/2/index.html","2d90f5047b93c1cc200444bf2978f9bd"],["/categories/公告/index.html","f417e6c7ee22c7cf06098a6f45d40c37"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","dc386b928e48f104a3196547d54a4cf9"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","22320aad6c1d1d24af043de1e891211d"],["/page/2/index.html","5057127760af5922535ebbb82b43028a"],["/page/3/index.html","df09e526c63c6ff6a9922e5ce860f460"],["/page/4/index.html","1adea4c0044f471e6c0960d08feac37a"],["/posts/10c9dd98.html","b4cde22e066848de96b49fc4f272783a"],["/posts/15ef14c2.html","f83d67b2811c8536a642c79b1c852c62"],["/posts/15f3959d.html","851b8bafc4bdfb5c7a8e7790b4420d2a"],["/posts/1d59b71f.html","2f4b0ca830eea503bba169e2c5f8466e"],["/posts/28397adc.html","bdc28bbf7e762c0e7549660f02077d5e"],["/posts/2cf620f0.html","2659814c1f55be770211343d90738315"],["/posts/303007ad.html","19316b4d02a313f18a30f61dfcd057c1"],["/posts/3f7d823a.html","4383715516bffb0796b52482a2208d0f"],["/posts/44124a6b.html","7abf92a98661595f6d1e29bf2cc74c9a"],["/posts/4b689be3.html","12cb455972f65671221f3608f209604f"],["/posts/4cf8423f.html","b9a3ce3b84f33ceae4079fb1cc1647dd"],["/posts/4dcf85c.html","2a91c8a112d46f1e52e14c0381cad05a"],["/posts/51c9b1ff.html","685a670f24f678cd93624536557e7e87"],["/posts/52b5b3c6.html","b493af76a83dd2ba047413df33a3af28"],["/posts/6515f032.html","ce7b5859299ffd515be1b992d4d63197"],["/posts/71131d34.html","6c02bf374d8d775ad3dc071ccea7ee26"],["/posts/78a8a8d3.html","3efa5bf028c6aba69ba1ada34524f226"],["/posts/7e3aa3e2.html","1b2d77ee5341e857d7a17bbe6b6b1d9f"],["/posts/80fe2691.html","c857d486e21feefb5f49ecdd633a41f5"],["/posts/81ac52e9.html","d529d575118d181e1fdaa718cbda094f"],["/posts/886f8d3.html","acfddd0882060c30f26ecde03dc24e4d"],["/posts/8dd520d9.html","6171d39061521a0441879afcc3a5a892"],["/posts/8f555654.html","ed236dc4da2c7aeec825a760a56d4e38"],["/posts/94d3c794.html","92fd0ff8a209acf8149e088a29774cb0"],["/posts/97f50eea.html","11041dec944198e66a7d73c6b6b452db"],["/posts/98662d05.html","c7325fe52d3ea11ae6b4ae8c4651cdf2"],["/posts/9a2f6162.html","074c26a532ddb0fce58d44fbb28e95fc"],["/posts/9b22a48d.html","12383e75a6c30d13bff5d6e5edfb2164"],["/posts/9f61c1a0.html","39a70185a2acf1abf3104dae9bee2f6c"],["/posts/b5fb773f.html","896d41e9f7d0283c864a6f99caae6dd5"],["/posts/c1b2c6c9.html","d54ce2c85bf51ced635a341d3e05cdb7"],["/posts/c497a412.html","27910a68ca7472b828cab58692788bb1"],["/posts/c5de299a.html","33ce5c0cdc6e02f2ee77c96f5de411dd"],["/posts/c70bba9c.html","16670a18bb31395f11a98a1e2ba3aa4f"],["/posts/cbebef2b.html","ad37dcf7ec45225d7101897ae855ddaa"],["/posts/ce25023e.html","6b7321bdc86d7515af1d4ca117151212"],["/posts/d2fd4837.html","bfc7f46160d51881749df4651b27c650"],["/posts/d3a745a8.html","bb91e7d3a770f051b42630279e9dad16"],["/posts/e3ab6ad8.html","256d11718cf5bf7872474ea0c633f4f3"],["/posts/ee1ed673.html","02b6ec4d144055e38c6bcbc0c8728df6"],["/sw-register.js","5bfa45780f331c37ea45fc32d90ab8c2"],["/tags/Circle-Mebius/index.html","aa88743bf0d1c20ddcbdbc308a85af13"],["/tags/Omegaの視界/index.html","8a0f026b6f8d70ede978d4e3e3d9f764"],["/tags/Witch/index.html","a4d23ec44760edfa1794f98fb8ecf362"],["/tags/galgame/index.html","a01acd07283e29ff09c7c898b25acc2c"],["/tags/galgame/page/2/index.html","7db4d7a3055378a639f24f63f5d625e8"],["/tags/gal资源/index.html","98792922ed116899c38aeebb034ca4d5"],["/tags/gal资源/page/2/index.html","f93b85b5dcf12cdafd650d379691dcc2"],["/tags/gal资源/page/3/index.html","0cf61887e095cf2f270729f9b8f68a92"],["/tags/index.html","06ecbd2d6215ddbef19d035c7da5f9b7"],["/tags/rkr/index.html","0cf27743005942d54953427250914684"],["/tags/停产/index.html","138651e05451b200eed5cd1dd5edca41"],["/tags/公告/index.html","421428ef5b20e4e742a188c59ce2813e"],["/tags/同人/index.html","ae6a358f0ae7c90fa5893eba1ac85137"],["/tags/水仙/index.html","bd912561c7a1bf2ce63b6e56faf4ff73"],["/tags/猫猫社/index.html","a54d33305b80051d12ab77c9ba3ddb4e"]];
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
