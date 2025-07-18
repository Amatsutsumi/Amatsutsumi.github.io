/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","7e7c9b07842db6f0f7b5ceb3243bcda2"],["/archives/2024/10/index.html","997a8eb20a9c81165e9bcfcf1db6111f"],["/archives/2024/11/index.html","10ff5b2b22f31bdb144b8eabc4f294c7"],["/archives/2024/12/index.html","c0da102b16b481b93fe7454c6c5b951a"],["/archives/2024/12/page/2/index.html","b7b0b2c7c21ce32b256c0c608bf260e5"],["/archives/2024/index.html","6632803a00862586b686384b8584f617"],["/archives/2024/page/2/index.html","b1334dc250de65f08a73eb1a7237d06e"],["/archives/2024/page/3/index.html","31c78d6b1892299c665f9ad3bd3ec8de"],["/archives/2025/01/index.html","282f032be2bb64e1b094ecb4cad461fe"],["/archives/2025/01/page/2/index.html","a52fd43afacde2a9a6e94486f59c1b12"],["/archives/2025/02/index.html","46360e1f3e082379ca706bcc9ed180f0"],["/archives/2025/03/index.html","6827c949e324412eea514696e4b0afed"],["/archives/2025/04/index.html","8d3c12ca803753dca0d233a044da310c"],["/archives/2025/07/index.html","b2449f345ee843bc05ca69579cbdf63e"],["/archives/2025/index.html","97a2de6d3541df2cfdd82dc73ec46802"],["/archives/2025/page/2/index.html","153cb1f9f058cecc5cea9769d756e926"],["/archives/2025/page/3/index.html","c69a8b46a4658ccdcd34caf66c9687eb"],["/archives/2999/07/index.html","bef13ac6bd199fbc5b8283e96ed4965c"],["/archives/2999/index.html","530d44d4356167a2cd063e62c14ad37c"],["/archives/index.html","7126619c67b5bf8bcd1c7a1fd759df33"],["/archives/page/2/index.html","2f149d1e2ea24c2d8ef253a12f8b307b"],["/archives/page/3/index.html","87fba5552299d9e15777b2cfde41cd2f"],["/archives/page/4/index.html","a2c4c1ad4f68c65a097e3932d7c56065"],["/archives/page/5/index.html","f01760d46fb82618c8722723eb45bc56"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Unity/index.html","dc2ef2c79329ea18ddb8785b4af71c4b"],["/categories/学习/index.html","13409f5640d9c4b93ae96a912e044f21"],["/categories/学习/page/2/index.html","0d3c8b5595f58590e5d08fdb4563a5a1"],["/categories/学习/page/3/index.html","aa33c6032ebf376fd4689129ef2fc0fa"],["/categories/学习/page/4/index.html","57f5d8469fd1ea6d9b2c3a682b8ee277"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","8e0e374b04673fbab57613ac58ca3949"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","828acd4b3e0d9e3061f2c5e326ad168b"],["/page/2/index.html","4525faef1ffa80a38a7e33d8e8208846"],["/page/3/index.html","1cf6113259ea021951f19bae0d3e7a98"],["/page/4/index.html","5ef93e72dbc1fc2d209589f9f82f9a50"],["/page/5/index.html","f574742e057ade65ea21b431def83f80"],["/posts/1008f769.html","a3e1048bc27ee30f849b364013b9a530"],["/posts/10cc2d44.html","69c08a53b8593bf68de95c25ab99222e"],["/posts/113e835e.html","3bc6ebbef7dc318487cfb690773e3ed3"],["/posts/159a8932.html","a66f5c28d756447afccbfe49e043abb5"],["/posts/24e1190f.html","0208b36d49d326a243d2a61826bab72d"],["/posts/292422ce.html","74a7e38967a1c42986ac5856b2322e6b"],["/posts/2c10891b.html","5b04394fdea5a9e658670c3fc763e451"],["/posts/3aeb9189.html","f25488c5b3248335e3b8834cf739a103"],["/posts/3bb2d0de.html","4836de36b613aaa10461c8a3791d9eb4"],["/posts/473f11.html","99ddbff94a17e28f5266d8076fd914d4"],["/posts/4a18176f.html","584326375f301cd4a605e6a96c9107ea"],["/posts/4a6f70eb.html","5f61f4adf260f0911c2da11270a00dc3"],["/posts/501f2de6.html","c79152b6994a173787312a0ee9b034c4"],["/posts/59f2b96e.html","90f05aab0beb8c3731b7fe975bf4b8be"],["/posts/630e02a7.html","2ae99daaa4c4aa807b3cc6d1e38991df"],["/posts/66b94565.html","280662c6f1bb334f9f1530fb8dbc6434"],["/posts/6ef7598e.html","4bde463f8f8648b2f5ee5d7e8f6acf8f"],["/posts/72eba54.html","327421f288f7f8f66eec5de40a5f7349"],["/posts/749c06c5.html","15861d3ebcdffd6282f61819b11033de"],["/posts/77524bae.html","8826dd816374b92f61aea360a84471ca"],["/posts/7779f102.html","896deb9feb60033a3e3cc7e01b9901cf"],["/posts/78b2fcfe.html","ad7efc2dc5f3b12a7c94199e8a3f56f9"],["/posts/825fca5b.html","33ca7c85cb1781f6a7965ce36d135155"],["/posts/860f6e9a.html","94ea5acd90079787ccbae995ed8ba0d4"],["/posts/8aa56fba.html","fac46603f733f3cdb02a69a4a8eb79e8"],["/posts/8c1c015.html","0d3b7ca62f69cd19852bf60ca67aedb4"],["/posts/8de056bd.html","2c29e2dd7010b80b78c4195825108f79"],["/posts/9f1fd314.html","2c82a7b90ed27f3c872f6e8d0f1da591"],["/posts/a1c99550.html","8384d98e6787ed6f4aa1a492d458353b"],["/posts/a40d3f0b.html","6c3e0ee1febef703dc4dd270103016af"],["/posts/a67123d2.html","a409e96b79811f3f10287ea8c5b1532e"],["/posts/a75738e6.html","899e61278f36f21b32758145bf3457c8"],["/posts/aa9e0f69.html","a893f8fd3fe40ce723fdef634d7d84b3"],["/posts/b30facc8.html","2fbc7b0d6de218671e50ad78e75c89cd"],["/posts/b390e62c.html","36f48eac33bf5db5a12e6f6c2d4278d4"],["/posts/b6be7a76.html","7779d49ca0fe400e2f4f95425ee890bc"],["/posts/baa95f04.html","35783f75239fc3bd569f09d9036dfbf1"],["/posts/c2f88e40.html","3fea6aa4749b830e3b1e5f9174cbb5e4"],["/posts/cb15ae68.html","e4092d7607682388b144a2c9e6ecf88a"],["/posts/d9f6770c.html","1965449888ab47840430e46a04c1b289"],["/posts/e816fd63.html","42094abffc30b4a46729bf4c9c187503"],["/posts/ec6c5f44.html","248f5b07b9bf460120c2aef87e386c99"],["/posts/edf7ffc8.html","87b3a1266fc40d9b1aa4193cc1e7fe0c"],["/posts/f48e37fa.html","0dc67fd5aaa02fb7e2da1f1a6483c70c"],["/posts/f85ddf3d.html","a93c3e7ba9ed4567dcffec6286bc7089"],["/sw-register.js","f453b469ac89db31e0c994ffc6977fde"],["/tags/API/index.html","91a281d90caae5f9ad16f48f6657649c"],["/tags/ARPG/index.html","54c78771533a6e336864e171cd1ebf56"],["/tags/Alist/index.html","661118c532fcc6d1626b42754a984575"],["/tags/C/index.html","eca3390cfb667cff0f9c1f6195a8ea76"],["/tags/CSS/index.html","69d81ff15b433b4076f04b329f1920b9"],["/tags/C盘清理/index.html","86e8e24841695ec47d4b1bebb5b3d67c"],["/tags/FC2/index.html","030424d17579e486e09063ea1d228d67"],["/tags/MonoManager/index.html","f8985aee14ecbae98daed560cbb010cd"],["/tags/Mono管理器/index.html","ebc2571d6ff355679bafaf95f4ff9851"],["/tags/Unity/index.html","b4ccc1ec10e3908a0440864967650137"],["/tags/Unity/page/2/index.html","549d23580cade1cfbc5078b8e8ce3384"],["/tags/Unity/page/3/index.html","3d6a8d1bdeb0024c17bb7658af2e3d17"],["/tags/Unity/page/4/index.html","5e6f16849a5c69eb6b350c2918b9dced"],["/tags/bbs/index.html","9c922cb66e10194ab092c3cf49056890"],["/tags/docsify/index.html","ba30fc1f73a61d2f9e65130b4f79b81a"],["/tags/github/index.html","547c9d7c461e0e30d2c8e9cb8a4ef0af"],["/tags/index.html","8104662f3ba343d3d56f130b50e6b2a4"],["/tags/javaScript/index.html","6f43d9e71b073a85937c8d8c9352024b"],["/tags/伤害检测/index.html","5c2eb1182dac543043ce60f00773b262"],["/tags/公告/index.html","ea5c47deb360cac0b9fa8a2ab6653039"],["/tags/前端/index.html","2a7aa3fb1f46f65214a6f0166a77c329"],["/tags/单例模式/index.html","54349d771a0b5a414a0b8bc996139d46"],["/tags/学习/index.html","75900795413f76480afe0fffd6c06755"],["/tags/对象池/index.html","1daf4d92195ec769e81db66b1ecca26f"],["/tags/怪物AI/index.html","1e19d4180b9ae4b8487664d5984551a0"],["/tags/技能编辑器/index.html","a9ef713c68f5b602c803e0efe87dfe08"],["/tags/拓展工具/index.html","e8e224e7be71436e4e1ed88172e866c9"],["/tags/有限状态机/index.html","2699a21e0b563f9acdba51db8d16d8c2"],["/tags/汉诺塔/index.html","0045796189666036a52d1a53163f2a61"],["/tags/游戏开发/index.html","06d9a5408837b14dbc15c444a5fa175c"],["/tags/游戏框架/index.html","8050b658554be70f555aaec2f0603022"],["/tags/游戏框架/page/2/index.html","c326bf814f9fef23c3bbb33ac9d7e675"],["/tags/爬虫/index.html","89df5e249aac36750a17100f52be2ab2"],["/tags/算法/index.html","5d4da890f910475b4ff099b6786b32fe"],["/tags/编程/index.html","ba11849d06a2a0d113023065e1b651e5"],["/tags/网站搭建/index.html","0b5d95d2b21cbce6b7fc3331c98deed5"],["/tags/行为树/index.html","78b76a4416c0b5e4a42e10ec46a259ff"],["/tags/输入系统/index.html","7c25a3fa494b7026fd678006989504d2"],["/tags/连招/index.html","6a5c3c76cae8bd94d2ab0e81ab36058b"],["/tags/连招思路/index.html","1daf9d115a1d692b8d5f52adf2cd5924"],["/tags/连招系统/index.html","92122ef0b137dacc907d602b1196a802"]];
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
