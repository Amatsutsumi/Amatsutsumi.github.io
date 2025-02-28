/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","853a6b98775d373ce5b1981857205dea"],["/archives/2024/04/index.html","fd8912099134f45e9bea09aafbf5c8eb"],["/archives/2024/index.html","f2f9730b5b94ccfa92b9a3e47a8c63db"],["/archives/2025/02/index.html","5927f5fc97b7595911c8b0bcdfd0c263"],["/archives/2025/02/page/2/index.html","a979e3ea0d26a4f85e1ba34bbb012034"],["/archives/2025/02/page/3/index.html","9fa77a64c341ce0beb1951bcb699a2b0"],["/archives/2025/02/page/4/index.html","6031c426ad661c94a683e898b1c3d933"],["/archives/2025/02/page/5/index.html","55e0b49b505d967f6fd430b2dc2c2c21"],["/archives/2025/09/index.html","b6db251f7a475ba49528f256157e6aff"],["/archives/2025/index.html","76d6b44bf617029c5adc2584e4e50826"],["/archives/2025/page/2/index.html","de72f4bbf5c7e830da93ca157d5a0cb0"],["/archives/2025/page/3/index.html","0a85e33cdd8aaf726eac00d8abda261f"],["/archives/2025/page/4/index.html","d3aaf0db6d1799013434a2e19c925d5f"],["/archives/2025/page/5/index.html","acfe0cfd0b873bf519a3869f10c88650"],["/archives/2026/02/index.html","d03009bf32c62a30d077128a074ac0df"],["/archives/2026/index.html","e1883a57f89fb15663116a2a33a7225d"],["/archives/2925/01/index.html","9bdcbcb17465a5a3b135b6a99a60c742"],["/archives/2925/index.html","ac5d5f960ac714f46aeeb7803d487852"],["/archives/index.html","f87720824c510e33af6ef188400fb26a"],["/archives/page/2/index.html","61f14b48cfa4f28372c2cabee0f63cc5"],["/archives/page/3/index.html","84a0c0fdf7785ee0a232a70f89546f04"],["/archives/page/4/index.html","e8053818d0730f699e5742ec0691cd9c"],["/archives/page/5/index.html","5889a84895933ae66880cfa91eda40ed"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","adad23aad887013c7d1be4e3b748d187"],["/categories/galgame/page/2/index.html","ced7c61125feecbcd7c85f8d83caf13a"],["/categories/公告/index.html","b6538f2d2689203435482d69e390aaaa"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","47af9b79a6aeb4d08a7294df39f877e5"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","0efe09973cffb7c9c8edebc91967dae8"],["/page/2/index.html","bcfc0b61f97e54356147f47476c4c558"],["/page/3/index.html","100de4c8f318bbcc0a4306a37ea075b6"],["/page/4/index.html","5abeaab461a0dcf0cd1c821817e01b71"],["/page/5/index.html","df710b1c19a2407068601753bdfea509"],["/posts/10c9dd98.html","99fda7546c34908364bd01918f2f73ba"],["/posts/1370342.html","4f29f4db44a7136b8c66ab1cd49c27b9"],["/posts/15ef14c2.html","e3622d51cce3e83e0bac89e478f53441"],["/posts/15f3959d.html","d9edac9ef8048b609297b545d65eebbb"],["/posts/18ab785d.html","3fc200a1d61c59d8eeb56a94a452da19"],["/posts/1d59b71f.html","3980eea7a86997dd16c6c4cd58a09b21"],["/posts/20b3f3a4.html","3d41d243b54b92a02bcf7fab11a0cdbb"],["/posts/28397adc.html","e00c48dde1d0e777fc59b0ce7c7a3e0c"],["/posts/2cf620f0.html","fdd99d1da14aa18a3825aab8bf98c693"],["/posts/303007ad.html","393e02c4c0ae46fad98583f0a6f9cef2"],["/posts/3f7d823a.html","a98a38159f94d96e2b679f7fdca45e3a"],["/posts/44124a6b.html","7ccd195379114331f2bbdeb034f057b4"],["/posts/4b689be3.html","65fa7efc0f25f695bd449e2d4054e2f3"],["/posts/4cf8423f.html","591b0e955c123a0c4d66ba50b945bfb4"],["/posts/4dcf85c.html","d21d8f3dccda6faefaacbfa3ce073642"],["/posts/51c9b1ff.html","58d96e539cdb5bfbb3a5fabed71e8305"],["/posts/52b5b3c6.html","a268d62470dc539c8a0938ec0b6987fc"],["/posts/5f6e0c59.html","176cec4de6c64e99c49007ea23b4146b"],["/posts/6515f032.html","30966c562df04a77373d94c63b508061"],["/posts/71131d34.html","7d15d407eaa80c45db5f151aa03385e2"],["/posts/78a8a8d3.html","cba568419c90b7cbaef803ba25b66a96"],["/posts/7e3aa3e2.html","e833899152d3a24d67151140a5a0bc2f"],["/posts/80fe2691.html","3b47dd7208dc5b19a3944ca4de3cd65e"],["/posts/81ac52e9.html","e316524647a5beb5c53b6f95519a2820"],["/posts/886f8d3.html","33fa29f6517e1dae696243df3d36617a"],["/posts/8dd520d9.html","66805096f6a2755847e232065c1139dc"],["/posts/8f555654.html","d9197f42a144762992124eea9ab1b3b9"],["/posts/94d3c794.html","1ca7b818fbd9cd3f27b89f51936f6bf7"],["/posts/97f50eea.html","f22592df87af87afff23c1e2b4d43e83"],["/posts/98662d05.html","43b6fbb5ad5a0a83e6c5cf327110cc11"],["/posts/9a2f6162.html","0d7411caaff25abcc292668db83ed073"],["/posts/9b22a48d.html","6543ca4435da86f2c6e4c6df081bbe72"],["/posts/9f61c1a0.html","f303cd5409ac5a22e37483fdc05c9845"],["/posts/b497b647.html","3157308f017081558a07c571c2473603"],["/posts/b5fb773f.html","f2edd3e636f660e8aefcf34dc26d09ff"],["/posts/c1b2c6c9.html","c6b40156418ebaaafee9ebadb586ab46"],["/posts/c316c2e8.html","a504cda79e25e1f1523f574c8e1ad95b"],["/posts/c497a412.html","c4f3e47403cf06343a3663fd4569c5ab"],["/posts/c5de299a.html","fe7687c506082c4a460e881404577b49"],["/posts/c70bba9c.html","e6dc03ec654af3b9665572a3a8a4fbcf"],["/posts/cbebef2b.html","c875fd0ae5a949535284cceb70c39dd7"],["/posts/ce25023e.html","a648f9f8601d14ad5b12c1a84202f808"],["/posts/d2fd4837.html","f470a85726b13a0514e7657109067678"],["/posts/d3a745a8.html","b0c3c6520abc1079cdf0f14458eb6206"],["/posts/e3ab6ad8.html","5ab1694f83513fb464cf235fb6b9b8a0"],["/posts/e5018da6.html","86a76066d07f72d1d5373af26b889698"],["/posts/e91abb63.html","bd94f78a302fadf2b8ae0e92c6846aae"],["/posts/ee1ed673.html","621b2d192dd51188f4a09b22ff1419a7"],["/posts/f230b0fd.html","5244740c65f1655e84974a089c7ed299"],["/sumire/index.html","5a07621b731a04ffff509bd77cbddd00"],["/sw-register.js","81baabe00055910e7dc1fb2e2d9733d2"],["/tags/Circle-Mebius/index.html","bc58e7407b3e4323db4aa0ea9c2a5547"],["/tags/Omegaの視界/index.html","9717573453441008940d727864fde86f"],["/tags/Witch/index.html","6e207c52746583467acc34e148997fa0"],["/tags/galgame/index.html","d5760dbb4098a87699664ea05d6cbdb6"],["/tags/galgame/page/2/index.html","c28fdb286775d7ceec625836b1f275e1"],["/tags/gal资源/index.html","493e4bbec2b4483620765301a0a53871"],["/tags/gal资源/page/2/index.html","00e1ee1e0cab34aa2f0859e023e7af07"],["/tags/gal资源/page/3/index.html","70ecb5011951dbed5597edb19b5f4717"],["/tags/index.html","ff5803a067efbe2ed01bd2f6e04c63c3"],["/tags/rkr/index.html","378b7e5fdfb8e89fd7b71c1e469661a2"],["/tags/ねこバナナ/index.html","737366a25d30f9846dabae1abfcdd264"],["/tags/停产/index.html","317de38f7a7ee2d365712a038a123c75"],["/tags/公告/index.html","da5d7f3a7465df9c0af33efb20985161"],["/tags/同人/index.html","e6305e4e081cae6caf6ff6c4e62b60fd"],["/tags/已停产/index.html","48d10c68508acbb84cc146940c1c8ad9"],["/tags/水仙/index.html","2489b7a4ae1608d6609f54cbb5eee0c6"],["/tags/猫猫社/index.html","fd88c54348c216e455bfbea8573ac9de"],["/tags/画集/index.html","93d93a7af60c853b05d2279dd1ead515"],["/tags/閂夜明/index.html","f9e1b431606c3a472fadd636908be31d"]];
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
