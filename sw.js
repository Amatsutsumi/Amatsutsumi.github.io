/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","ea76c04a29b7dc5f187f947ebef0ff13"],["/archives/2024/04/index.html","eb35fcc3cf68d2747429bff663bb648e"],["/archives/2024/index.html","c14cf9f1893e147de04490c2043ff3b3"],["/archives/2025/02/index.html","bb2dc73ed18f677fb0b1ac5d742be86f"],["/archives/2025/02/page/2/index.html","4b864edacb12e6d96eb8e39f5c89ba32"],["/archives/2025/02/page/3/index.html","664d9c3d740ed7295851626393d0aa19"],["/archives/2025/02/page/4/index.html","31a13866eceec5d5e62c5940c3f402bd"],["/archives/2025/02/page/5/index.html","1d28cb2e201ec4167c35a623d960860e"],["/archives/2025/09/index.html","9080fb694235727e976bc22b6a712cf0"],["/archives/2025/index.html","51f500521dee1ac33e34bab76416c02f"],["/archives/2025/page/2/index.html","072adf7a43ee7217d7f5d36005de6dbb"],["/archives/2025/page/3/index.html","82c15fb60300a40f86777636546c10e8"],["/archives/2025/page/4/index.html","478fedaec69f9df695ef8a250fa8b61b"],["/archives/2025/page/5/index.html","24156371411a09db8dc3dd33668c2bf4"],["/archives/2026/02/index.html","91e058ea956aa31d708b9f8395b21b92"],["/archives/2026/index.html","e04f19f18e280577898f8e471778d0c5"],["/archives/2925/01/index.html","100a15e6351ec91f68702291b7abd905"],["/archives/2925/index.html","cb4c3baac52aa05e2e128b937fcd0c16"],["/archives/index.html","62fa97dd964a309a16aa06091ecc0f32"],["/archives/page/2/index.html","a6605543be0740658caa0a6af86ad092"],["/archives/page/3/index.html","a76e54ca89e9f381a54b6e81cfb5a7da"],["/archives/page/4/index.html","09932d416793681ad4a8927698a0ee3a"],["/archives/page/5/index.html","c7fac819c33cd23654d1b7578a6e38b8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","a40fcb5295385a237904e57b7a80701b"],["/categories/galgame/page/2/index.html","c2066f15a90290393f336125082c4cf9"],["/categories/公告/index.html","d72f3af0cee33909fe4abce2d7333f5e"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","8d1bb49ec2701f041abe9c1d2371b76c"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","f8e5cc2ec827c142e86ba36aaee4aa0d"],["/page/2/index.html","0e82eb7f7d8dbbc672d236b69d71b047"],["/page/3/index.html","0e9b23f71267348c3f96177e47656d25"],["/page/4/index.html","55c252458a26e77f5b6e988e73f95b88"],["/page/5/index.html","b776ca53283bb77a52982b79bf48bff9"],["/posts/10c9dd98.html","c619d434fbc5009b132bb7317e0ae791"],["/posts/1370342.html","86ddeafc223401926676a8fd6e222be6"],["/posts/15ef14c2.html","5427d23666eda77be94e9be97f8e38f2"],["/posts/15f3959d.html","18bb44c91f86c12c371bf4b99e81a255"],["/posts/1d59b71f.html","39e58c0e8e11349a08d3991e2a48dbaa"],["/posts/20b3f3a4.html","849ee576279b4a29fa0cecfff1be8b75"],["/posts/28397adc.html","9c7183848efcb80411f1befe2db32612"],["/posts/2cf620f0.html","1ef4a57b62e3a4eb67ea89c7b9fb9977"],["/posts/303007ad.html","1d1929e80ba25ec092678f970f3fca9e"],["/posts/3f7d823a.html","4a31c1bf56bab2208956a3d5521d2e3e"],["/posts/44124a6b.html","95524567097b98fee4cefa001bfd5f12"],["/posts/4b689be3.html","cffc04219424a385c94e321bd508a802"],["/posts/4cf8423f.html","6fa8e272a9c38fa5c894ce77002ad472"],["/posts/4dcf85c.html","7c82c51e24f441a190b51334e86aa12b"],["/posts/51c9b1ff.html","dbbdf1fd288b14c136a662d2f511831c"],["/posts/52b5b3c6.html","841600b385ecb55d38537f17ff4362e8"],["/posts/5f6e0c59.html","02864a3a4d32f4afdd1e87c17c295d7c"],["/posts/6515f032.html","74f49670908e2e95e62711d1ef4a2d29"],["/posts/71131d34.html","cd5f37e4d0eae76488bc40c925d44934"],["/posts/78a8a8d3.html","cc66c7bd8f2190a7fcf5f6186bf7d724"],["/posts/7e3aa3e2.html","b0f4b4d0849479b8e7ae6902a52b00a8"],["/posts/80fe2691.html","f7511d3e4de44e84bac046aed310aac0"],["/posts/81ac52e9.html","8b05490947aedb92d1fb1e306d7db6d9"],["/posts/886f8d3.html","1f8dff8133a7ab2059a14c34d277b6fa"],["/posts/8dd520d9.html","f8b676199f6a6a3bda9c34ca8565590f"],["/posts/8f555654.html","76cf1961025d1add6f5738a94bd3f19b"],["/posts/94d3c794.html","65000d98e1ded06ff545092bb3156ccf"],["/posts/97f50eea.html","fb1da997bbb2e3c372e9954cf5c544db"],["/posts/98662d05.html","a15d0457b6d4d9c5a040910a7fea5ef2"],["/posts/9a2f6162.html","2c5b1ca4a2f61516244a592e2d43abd7"],["/posts/9b22a48d.html","32c8d2dda9328d057a2e604d240a08bd"],["/posts/9f61c1a0.html","c7bbc3d31b0724c6dec63b33a36a3336"],["/posts/b5fb773f.html","beba97292a4384c7ec27521353d2c0e6"],["/posts/c1b2c6c9.html","dfa72e7fc89afa0ac359de4c87839b78"],["/posts/c497a412.html","23e21bec20ee7aac6911df377177bbac"],["/posts/c5de299a.html","9bf3922ee7cacc3d40d33cc726417fb5"],["/posts/c70bba9c.html","7ca004ef150b43d78e2899ee6801f644"],["/posts/cbebef2b.html","49d58f4f9d4d76e8606867a177514fcf"],["/posts/ce25023e.html","f2cc06f8ab88beba0ee08021980ef303"],["/posts/d2fd4837.html","059d60918ecb9dddf22f1e2632cd7eed"],["/posts/d3a745a8.html","a7f77a89f8708fcaee966ee281660ca3"],["/posts/e3ab6ad8.html","2f9682bfbb03065562e1c3ed48049d66"],["/posts/e91abb63.html","33d7fb04844e5e2311da37bb9294b85b"],["/posts/ee1ed673.html","bfcdef6c33d3b22dbe2a8e5fb39b92fe"],["/posts/f230b0fd.html","a22b0ff78905b0e4793048dc74c3a751"],["/sw-register.js","f6de53999e5005d91fafd7e98a27aca8"],["/tags/Circle-Mebius/index.html","20cff84d9943408cbed8777d31341f55"],["/tags/Omegaの視界/index.html","3a3ef23029791a090b2a89cc2a6f1ef5"],["/tags/Witch/index.html","c2fa2aaf45852a440d38adee81a051f0"],["/tags/galgame/index.html","3111563d6de194011f672288e489ebf4"],["/tags/galgame/page/2/index.html","82a9d0005ca5914f6c7b3a72ed46c3f1"],["/tags/gal资源/index.html","d44607ff9a27bd3624be92f7485dc563"],["/tags/gal资源/page/2/index.html","6c55ede42924d911ae1f5fa3d7b374f4"],["/tags/gal资源/page/3/index.html","554c0fe37997123762a0f30932bf9491"],["/tags/index.html","774759534bee4f37107caccae0e5b0ac"],["/tags/rkr/index.html","180fcfccbaa305e36dc0eb7ed94c3a0d"],["/tags/停产/index.html","465992a235f13d9152ac8a8bad517faa"],["/tags/公告/index.html","f043ae9f3d0eef7b95343e83d54abcf0"],["/tags/同人/index.html","9580bfccc828977600756f9b3ddf2e9f"],["/tags/已停产/index.html","c5763b7b8f31d0534a0e002037a069e0"],["/tags/水仙/index.html","056ec50d6b27445d1c734c2e448bafed"],["/tags/猫猫社/index.html","fbf06a0e08ea88670bb63414fad0e47d"]];
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
