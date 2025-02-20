/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","94dbc76c15cabb3a2c54c19f7382b9c0"],["/archives/2024/04/index.html","271f0f14d8e613f9c1274ceb89dae24a"],["/archives/2024/index.html","d1a5df2fcf4e79cafcc4c5696b066240"],["/archives/2025/02/index.html","bad8b8a01773318d5f74b68b91bf21b7"],["/archives/2025/02/page/2/index.html","0c7b47b87df23f2ad69d90a2781b3111"],["/archives/2025/02/page/3/index.html","3e6531dbe5c819929555d8c483d5073a"],["/archives/2025/02/page/4/index.html","801da65ee37a288bac72e59b8a252be9"],["/archives/2025/09/index.html","3f971f25e27d39a91deb0518153e47e7"],["/archives/2025/index.html","c1f14f4c32a2d75265fe3ac0bb37a910"],["/archives/2025/page/2/index.html","8f6be076e0807c50531b3be1e0af42bf"],["/archives/2025/page/3/index.html","be7030749dc0fe0f8a24dcfdb506a712"],["/archives/2025/page/4/index.html","04a3812fa6f6eec5634ccc4563618b75"],["/archives/2026/02/index.html","e9a31b59ecf9938e106116cd2df761b5"],["/archives/2026/index.html","b20b136caeb9139bc67a5238ec847563"],["/archives/2925/01/index.html","1dec2b935404bda13e7de3bf32a8f4f8"],["/archives/2925/index.html","9dbae96f33975b718f51251394d47984"],["/archives/index.html","9646e342429d49a05e596bdfb8bd0cc2"],["/archives/page/2/index.html","173e80edb83bd7ca7de39916b8b0708b"],["/archives/page/3/index.html","d17ed82b20c98659c1133c4e292e7444"],["/archives/page/4/index.html","b7ae22ef643a534ab4b3ca8fb29ef91e"],["/archives/page/5/index.html","2e4a4992edb6f4aad8a8321beb32fdfe"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","c6161f8bcfece553d1e7fb8dcfc18ff7"],["/categories/galgame/page/2/index.html","8ce34671a4666e04b20caad9e0d08420"],["/categories/公告/index.html","5b6cd8306aa5da6317ab500863253db2"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","a6c51819ccca2f7bf0c9c36a4f9f6f63"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","93f0ef6b3d9784adf9e8ecbde9ffd317"],["/page/2/index.html","1a2c1cdcdf07050f252d67fc9d627332"],["/page/3/index.html","9ed56c8a5c900bea32788fb5254e78d2"],["/page/4/index.html","9f07ed751a438d36fa00834b27cde49b"],["/page/5/index.html","caab329f9a392e8a07bf236be6786a60"],["/posts/10c9dd98.html","0a303d3a61a4ba741a36ed44db53423e"],["/posts/1370342.html","5a49cdfa8cff8e62a1cde2b5b377705f"],["/posts/15ef14c2.html","7c98d76e42e6c5e5c355c90416ab3272"],["/posts/15f3959d.html","b0490b3d03193ef5dc7f91ea1ea6c46e"],["/posts/1d59b71f.html","dc51e185eab7e3e4fcc29dcff49c4605"],["/posts/28397adc.html","c185e8369e69004bb57bf4199042841c"],["/posts/2cf620f0.html","31bf29c4f33304368780eaae31b4cba7"],["/posts/303007ad.html","fc05b3c88a2428dfa5e57595bb3de66c"],["/posts/3f7d823a.html","ff3551d153a9555a6b9c4da7c6da7c1c"],["/posts/44124a6b.html","3a46d95ce4525ab313a2f3a2c797152c"],["/posts/4b689be3.html","7acf02bb1e5fbf17c968ac082cbb6985"],["/posts/4cf8423f.html","b6943aded0cf11921413953fc8e9b361"],["/posts/4dcf85c.html","85122ee707f6169436ddc989ef58dfd4"],["/posts/51c9b1ff.html","88f016d84c7811942de75dff412f6651"],["/posts/52b5b3c6.html","5e357ecbb227959110cfa7415e7b47b6"],["/posts/6515f032.html","63ef4ed0903c62557483cbc43cf6676d"],["/posts/71131d34.html","d8cfce92906e5177ddebd739eaf711fd"],["/posts/78a8a8d3.html","6c04cfbcef9efc78bfe8a8783812714c"],["/posts/7e3aa3e2.html","dbd1863ee16c6d037f220bddec85098d"],["/posts/80fe2691.html","5d706248d45fec504d95396f27cce536"],["/posts/81ac52e9.html","f5dccd0df3e8b2f72537c18df063a41f"],["/posts/886f8d3.html","8cf58d69a17289686b1d88de673ab101"],["/posts/8dd520d9.html","7277051f630b233ed6f0520483f6eea6"],["/posts/8f555654.html","defe6633760dd1cd9979c0069531d7fa"],["/posts/94d3c794.html","7708c7d273b622b616dd399dbf0535c3"],["/posts/97f50eea.html","12bd1b56e06bafa8eda07ed6d21a0654"],["/posts/98662d05.html","63135ace22f11e7192d06e3eda45cf91"],["/posts/9a2f6162.html","e91b1b77e43a23bc7b2640db60ffedfe"],["/posts/9b22a48d.html","23351bc4a1e12d5f38c461a05fbccaf6"],["/posts/9f61c1a0.html","c4b52b287d9ee7a8d5e778a9236034fb"],["/posts/b5fb773f.html","125e2c21ec7cc73dedf825966af89432"],["/posts/c1b2c6c9.html","4f7652ab47e07ae29d24e983904bd3e5"],["/posts/c497a412.html","745e3c82dd62d80d046de30f4603e016"],["/posts/c5de299a.html","767d585ce687acbd664bf39b8c2daead"],["/posts/c70bba9c.html","d90a83b9d6ba76ced904a416c8d53f12"],["/posts/cbebef2b.html","ac6eeac727ed784b9a261fe93667a8a3"],["/posts/ce25023e.html","279e37be66b87a129c70223638b7ef77"],["/posts/d2fd4837.html","b9f08de8153b9ec98d11ceb6130475a9"],["/posts/d3a745a8.html","adba22a1e0e3485e2967245c8bcfba7f"],["/posts/e3ab6ad8.html","34cdaf425b1c5f3d6468662e157e9e00"],["/posts/e91abb63.html","f4f2e720da8be27acf04e3bde7b75805"],["/posts/ee1ed673.html","e3cf89de0ed0535856ade08d4eadc345"],["/posts/f230b0fd.html","a94eaa5be11e86b712c18cefcb180d86"],["/sw-register.js","64c36af25dc243770cce58634bd18d45"],["/tags/Circle-Mebius/index.html","fddfb79047a396cd236db348d637164f"],["/tags/Omegaの視界/index.html","176d8f94a364aef955d9d28fd3655daa"],["/tags/Witch/index.html","375935c21c21ed002be5a6e1d776bb75"],["/tags/galgame/index.html","fa31d40435d4ce8b1b9fe8088ad68b09"],["/tags/galgame/page/2/index.html","e8637103f457af704caf73cd8dee055d"],["/tags/gal资源/index.html","334535f4b41858a3998df7388abe6f6f"],["/tags/gal资源/page/2/index.html","9fe9b1d47cb4897d52ba84bbcbd2a644"],["/tags/gal资源/page/3/index.html","c1c3dc6de4d39e35e21eb6bb62b0be75"],["/tags/index.html","60b8f7f5070ec12f12f5fb0a30323367"],["/tags/rkr/index.html","aa04c2500bbb8499c54aed950ef452aa"],["/tags/停产/index.html","71817e2ff1a2e17936dd1fb324ccd0a7"],["/tags/公告/index.html","ec417f2716b0b4c13765b9a4273addfd"],["/tags/同人/index.html","1b2e3303c00ac7784c63a4cf0839809d"],["/tags/已停产/index.html","6a5869f51d9a6e0061fc4331f04f3573"],["/tags/水仙/index.html","42c383f0d88d44db5163a0f74828e0e0"],["/tags/猫猫社/index.html","bb7666251e0044761545daf8639cd187"]];
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
