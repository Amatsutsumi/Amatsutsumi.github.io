/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d483cc8beb715e8083f808edf07895d5"],["/archives/2024/04/index.html","674689a1a6cb160c741bc39a2010abce"],["/archives/2024/index.html","a98ce93e3a271c6a86e042ae0b9bf8a3"],["/archives/2025/02/index.html","c6c9be6ebf14a3c6df4dc849b6adf3e0"],["/archives/2025/02/page/2/index.html","da38763072ab18809eae03fbb7c3e474"],["/archives/2025/02/page/3/index.html","c844ae4f9e113d58fb1dfbc84fd04c75"],["/archives/2025/02/page/4/index.html","ed2dd772936a419d0e55bfc1212b9a93"],["/archives/2025/02/page/5/index.html","76b14bbf7989ff0e59b4b039af4f7b26"],["/archives/2025/03/index.html","6322685efc00c09d9ff3447b57c7ee31"],["/archives/2025/09/index.html","0fc3ef8061a563dbfc238edcbd0bcb0d"],["/archives/2025/index.html","06431ab78b80f4eb03c60c943ba451b0"],["/archives/2025/page/2/index.html","bf897de41996aefb809981fabff5314d"],["/archives/2025/page/3/index.html","9b7e570a84a2a596a33f569d4666ed01"],["/archives/2025/page/4/index.html","6e1becee347974cec9fc75d3b6af7e50"],["/archives/2025/page/5/index.html","4ac4522720bb53f3bc3de61ea8687f55"],["/archives/2025/page/6/index.html","d33f26490d862224c07d71066ebf1be2"],["/archives/2026/02/index.html","6967e4a3b3d56687a56dfdec63af8970"],["/archives/2026/index.html","1793abd23d472105b38f1e6292724a6a"],["/archives/2925/01/index.html","830642a8a8ac66f41903f4b583b8a69c"],["/archives/2925/index.html","d45277e8cfa775d717b16222d4d2855d"],["/archives/index.html","6047fef5c128b05514dfde238d265217"],["/archives/page/2/index.html","57cab78867151a523e5b4eb39c4983ae"],["/archives/page/3/index.html","51a3dadada0a50a23599eb726542f55b"],["/archives/page/4/index.html","faa84035dbf5cea05ce9de482bf47660"],["/archives/page/5/index.html","c3153d79cbc24687d45577b9907d63c7"],["/archives/page/6/index.html","da356200d314a762973706d4df508895"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","70116cba451c5245a0d49321333bcd3e"],["/categories/galgame/page/2/index.html","f0d7ce9e75b53a994d7e4b152171042a"],["/categories/公告/index.html","4e46e61a334de835890966c0de7a7c09"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","2b26151f0c20cc2b67faada1b3978831"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","1682bff320969c087de57c8c2844b0c5"],["/page/2/index.html","cfa5ddf4bcc66d73c5a9a17e2d94e537"],["/page/3/index.html","1f372fbb184221ad9c7e668d5622284d"],["/page/4/index.html","25c41b0d2b02f8f399bd0d919d039642"],["/page/5/index.html","c6f8b80de76f58ad32cf60290569af5f"],["/page/6/index.html","099da236435c44387f2ef7297f14fe00"],["/posts/10c9dd98.html","e9f0181a86d9fe01749e4bf6e1016501"],["/posts/1370342.html","3ab25b81d5038a2c86226b275ec89b31"],["/posts/15ef14c2.html","cd5c71355ca822e880d0c2608841b47b"],["/posts/15f3959d.html","64ddc4b2bc1320960f6a4a29d2bda687"],["/posts/18ab785d.html","c17f466f4d4df5d52fa9f97d35afafcc"],["/posts/1d59b71f.html","5834519167f05c5f5e63cda13e760784"],["/posts/20b3f3a4.html","14aa2e96b5874fa34865a2931df723b3"],["/posts/28397adc.html","6d330552f4c2f54a280f5fcdc68b48ea"],["/posts/2cf620f0.html","c4d0d27c93ec727b9652e84229581966"],["/posts/303007ad.html","be5cc8edffaab7126eaa7f539d9c7ecb"],["/posts/3f7d823a.html","14d023a62ac2d6f0d1931268c8102bd6"],["/posts/44124a6b.html","ad30c7003d81339131a5153f598fd4ec"],["/posts/4b689be3.html","37602810f03e8c250ca755dd5e4c8e1e"],["/posts/4cf8423f.html","25412195543609f6a327d385761a0c4c"],["/posts/4dcf85c.html","b06d22ed97f57ed0e6d67b5e858f6179"],["/posts/51c9b1ff.html","e12d8e2782d92cd329f7d1ac9e58c1e0"],["/posts/52b5b3c6.html","e9052567f6d1caf236e2d6cd18e61ac4"],["/posts/5f6e0c59.html","a1e39f53f5e30c3bf7917583bb97b338"],["/posts/6432d61a.html","b4ed7f34020749b9eb0e28670eade750"],["/posts/6515f032.html","c8062885509df6b03f5807955eb03f75"],["/posts/71131d34.html","ac37a3f245724154b3af3f15294e9e06"],["/posts/78a8a8d3.html","5c9d2d0b6bea9b776cc6734feb81a870"],["/posts/7e3aa3e2.html","8495f23d288cf3f251b0378c29abe5f3"],["/posts/80fe2691.html","653d75478ec16b6240e50508c68e2ec4"],["/posts/81ac52e9.html","d73ff549defb43291b323ed8b9f772db"],["/posts/886f8d3.html","7d9af34fb0923bbc3b788127fc5efb33"],["/posts/8dd520d9.html","657e599b9202c5b681faead3caab0167"],["/posts/8f555654.html","5764159c27643e0ad0439d83138eefa2"],["/posts/92a980c2.html","afac5b352e6ff04e7d4a93d8f57a043d"],["/posts/94d3c794.html","68cb49488ffb09eb38608f56732f6af5"],["/posts/97f50eea.html","2acf9eead85967a5ee35748b30887bb0"],["/posts/98662d05.html","549081df6f88d9cec9a518535e0df800"],["/posts/9a2f6162.html","c9a9c3d1789a83369e5470c44a3086ee"],["/posts/9b22a48d.html","7016346a946220eb2bfabc448030dbd5"],["/posts/9cb455b1.html","ac3fa499584f6d5e390391e318396e30"],["/posts/9f61c1a0.html","2c70fd5b31ea949cddcc0d86dc6017a8"],["/posts/b497b647.html","c081a941f8d37f08a42a575d8ee1af27"],["/posts/b5fb773f.html","127e6c59a20b7773d165a9255076805f"],["/posts/b8d46b32.html","6c35eb88d7f5233ec66bee481dc5a4d0"],["/posts/c1b2c6c9.html","d682aa116ac78732d6c8bb2453ced088"],["/posts/c316c2e8.html","e1e971b121b342f8d4b26046cd62e409"],["/posts/c497a412.html","8701e40330709b19bbf22c1d197ed67d"],["/posts/c5de299a.html","7bf4854120e0d225f7f1d913e16d0160"],["/posts/c70bba9c.html","1ed06793b8f429b6228a19a8b14a7cf5"],["/posts/cbebef2b.html","6f90d49b5448b293740a095245c94a55"],["/posts/ce25023e.html","799ec70fe7120501ffc84ea75b0ecda0"],["/posts/d2fd4837.html","1a6153fdf72c66c960e4c20a4c93265c"],["/posts/d3a745a8.html","f872a9f4d5ac7b41578f1974f4a0e022"],["/posts/e3ab6ad8.html","d41744f482b00260dd9351e6c7d94d03"],["/posts/e5018da6.html","e860f7aca694275030551952576f37d7"],["/posts/e624b065.html","73ee25aa3682cb03b66049a9694b86ec"],["/posts/e91abb63.html","84748eda7fbf664389fc128b750f3829"],["/posts/ee1ed673.html","43cdf805139afe5094a5c2cb76d8d02b"],["/posts/f230b0fd.html","40f311f20eeade57855b275d13e87010"],["/posts/fc04d0d4.html","b436081e9befb28783a1d8f0e555f283"],["/sumire/index.html","298babc8154dd0b396fcb80bf22079a0"],["/sw-register.js","594e2cbcacb86c3ab336e8ee00c5b052"],["/tags/CHUNSOFT/index.html","554e8f6b863f0158984813bc75cecbad"],["/tags/Circle-Mebius/index.html","33822f610d41874ea68a60af73154cb5"],["/tags/Omegaの視界/index.html","0f50901cff6cf192ca10733c8001344e"],["/tags/PC88/index.html","17c48c0b484c2eb14c0a6d9b6d7b21b3"],["/tags/Witch/index.html","fa05c01f72b1ea39376a058e1b07fcac"],["/tags/galgame/index.html","e2a88031edbe1abb283cbbb6678dcc7d"],["/tags/galgame/page/2/index.html","24c875dd89847eeffb9bbc237701e8b7"],["/tags/gal资源/index.html","466e7bf7fa80f60cbab383ae435b6964"],["/tags/gal资源/page/2/index.html","4c064f27d0891ac764b812f4c204b1b4"],["/tags/gal资源/page/3/index.html","26a0727701e98816eae4bdbdfa4e33f5"],["/tags/gal资源/page/4/index.html","76e2eb09063c8952e84b7908943350c6"],["/tags/index.html","0843c6b058f459cab68ce98f4662eb9e"],["/tags/rkr/index.html","25c2fc11d1807c869c5290baf26956bb"],["/tags/ねこねこソフト/index.html","727a6d2acc0f5ec7ab5bb715cb832cde"],["/tags/ねこバナナ/index.html","106cfc16810c5801c0e824249800e32d"],["/tags/停产/index.html","e302e374066d9b2bf77c5600e59945ff"],["/tags/公告/index.html","e9d0ebcb616f00c7604f64565f99529f"],["/tags/同人/index.html","fd2e941a11a09f87d613f1ea94445392"],["/tags/堀井雄二/index.html","e2e6d80f290fef070caf849614ebe214"],["/tags/已停产/index.html","ab3c1ec36346e523df16694f6c8b1e0c"],["/tags/水仙/index.html","8577ecc1255da76e8ba8685d4c6dacfb"],["/tags/片冈智/index.html","c8db39f8b5c449a0f7314c020986bb37"],["/tags/猫猫社/index.html","6fb11384476d755dfd86cf90904ce699"],["/tags/画集/index.html","ff75f97321a3aef93736ce1ed6e99738"],["/tags/閂夜明/index.html","6d39d7e11aff058855818bfabace6ba8"]];
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
