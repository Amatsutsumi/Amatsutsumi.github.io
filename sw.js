/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","5db3c8fabe0412d9845fe5ecb86001c9"],["/archives/2024/04/index.html","fe9d987d15131f2c71ac7eabcbced6ea"],["/archives/2024/index.html","705d3d60eba9843ed9092fa019133175"],["/archives/2025/02/index.html","4e2e0774d66a8afe9f579824195eb26c"],["/archives/2025/02/page/2/index.html","af32193bfef58f0308f2d77a15bb47a9"],["/archives/2025/02/page/3/index.html","b191f46d199e543986cd825709efba7d"],["/archives/2025/02/page/4/index.html","5c47ecfc03b33f22b2e9ee0be50fe1b5"],["/archives/2025/02/page/5/index.html","b2748c5b350e359e85bccae68fdab364"],["/archives/2025/09/index.html","80dafe945568e8c2755bfe01a03d4444"],["/archives/2025/index.html","4666dbf7fef4e6eacd61d0430f7a57ac"],["/archives/2025/page/2/index.html","72e9fce167baede7a31064166990c8ac"],["/archives/2025/page/3/index.html","0e5332d38e5e0f553f1aca251bf95fcb"],["/archives/2025/page/4/index.html","07fd4f46ec7c1e93b695e113396aaec3"],["/archives/2025/page/5/index.html","dd85e2d2375a7046a540e61861826735"],["/archives/2026/02/index.html","7ec40f64c747f7939e0c6de24fb2b931"],["/archives/2026/index.html","cadd349235a97736571f859af42f5c0e"],["/archives/2925/01/index.html","071753b2971c3342d1522f89ff27b6dc"],["/archives/2925/index.html","6697075d019c675b0e41c6fcc75737a5"],["/archives/index.html","2577ccdf7323d4f271c6b5a104545c33"],["/archives/page/2/index.html","d4bf05da9f12c660889a2569a077c12d"],["/archives/page/3/index.html","4dad8baa87643fbae81564e8ffa5dc55"],["/archives/page/4/index.html","a5a14c8301797f00e0d0983a457a8935"],["/archives/page/5/index.html","061b7bf6e96bfc5ff3e0134cf8dea453"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","3242f1f90a698a95c257edbdfc0f9db5"],["/categories/galgame/page/2/index.html","c9542c612ad24bf245c75e71134f99c7"],["/categories/公告/index.html","178e98b4c5adc763a74161e3cd269a19"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","78a862d67e6a00be4f5473bd8c031b9c"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","31afbc1af51df84ab8b4ba101192c484"],["/page/2/index.html","3dfebef7f987ae9b779c09efea348738"],["/page/3/index.html","1652583a2efcc3c73c993e195feeb5fb"],["/page/4/index.html","8a9d3a0959e41536809db37c322b6ee8"],["/page/5/index.html","9a5eaf22ccc79b614628e085bcab667a"],["/posts/10c9dd98.html","fffc6c8433587210b91a517310d66bdf"],["/posts/1370342.html","c0d750431058b3c38d786599bed1bc72"],["/posts/15ef14c2.html","e3622d51cce3e83e0bac89e478f53441"],["/posts/15f3959d.html","bf4e5572cea034c5af1bdd258d47bd0a"],["/posts/18ab785d.html","3fc200a1d61c59d8eeb56a94a452da19"],["/posts/1d59b71f.html","47586ab095041cabf09f59d6d44d9f52"],["/posts/20b3f3a4.html","4ac7bfad5f2bce3a8de4681fb410f594"],["/posts/28397adc.html","5981cc12a108e5d95bcb73f12b657c7d"],["/posts/2cf620f0.html","f78c131e83bd9f3cdb18206d87801ae1"],["/posts/303007ad.html","c55608d0a87716f3c46c2dce33dccc41"],["/posts/3f7d823a.html","8dc265609ae2eda380bd544a67a12a5a"],["/posts/44124a6b.html","7ccd195379114331f2bbdeb034f057b4"],["/posts/4b689be3.html","9c53639f171e9af9e178572a97798cb1"],["/posts/4cf8423f.html","cc2602e455c19030b519c98b991325a5"],["/posts/4dcf85c.html","dd74ce5ce64d506d3bde7542877e36a7"],["/posts/51c9b1ff.html","5b96bd983f05a9e27843b1a5264f9728"],["/posts/52b5b3c6.html","3be8bfd8ba61223500ea46d51659b228"],["/posts/5f6e0c59.html","2d4d977204628f74b07ed524d3bc31b1"],["/posts/6515f032.html","4573d10160d11551e746f52ac030ceee"],["/posts/71131d34.html","7d15d407eaa80c45db5f151aa03385e2"],["/posts/78a8a8d3.html","4f19e62aadc1aae0db66370f7a11cdd9"],["/posts/7e3aa3e2.html","7402c1a4119e20ce5306afa466d5e331"],["/posts/80fe2691.html","520668f2faf284f1922b741e4cf90da5"],["/posts/81ac52e9.html","d27794c584d8cf6bd17a73426c61db8e"],["/posts/886f8d3.html","66fde43501ed396a660375d509ac0236"],["/posts/8dd520d9.html","66805096f6a2755847e232065c1139dc"],["/posts/8f555654.html","03c284541af9eef0ac6e9b23d6887024"],["/posts/94d3c794.html","1ca7b818fbd9cd3f27b89f51936f6bf7"],["/posts/97f50eea.html","c0b8737cdf575ec3a0aa1bf80f3c6e9d"],["/posts/98662d05.html","b006b69faceede792e4d66aeb684cf19"],["/posts/9a2f6162.html","0d7411caaff25abcc292668db83ed073"],["/posts/9b22a48d.html","c156e3fa1a64960969bdb0b4696f1ab0"],["/posts/9f61c1a0.html","f303cd5409ac5a22e37483fdc05c9845"],["/posts/b497b647.html","a4b96d8d11aedce1ea2b40052fce41b1"],["/posts/b5fb773f.html","23c38bd0f4042784f091a889d7d949c3"],["/posts/c1b2c6c9.html","5439a09b25bc8cb223d92e9e2ef78ed1"],["/posts/c316c2e8.html","69f5725226da3ab507685741e5ed86b0"],["/posts/c497a412.html","edef3855e5ae4b3af9a02d2abbb8a272"],["/posts/c5de299a.html","fe7687c506082c4a460e881404577b49"],["/posts/c70bba9c.html","0362474920d8f3dc1002cbe1909f34de"],["/posts/cbebef2b.html","ac8a17ddf77b2af437bf0e2edb52956d"],["/posts/ce25023e.html","ced7c17615ff7beb1ba13c44058dd641"],["/posts/d2fd4837.html","7b8a7722b044f990db5c91aca5f548bd"],["/posts/d3a745a8.html","5880514f63e8e4010ab06752940b1cde"],["/posts/e3ab6ad8.html","071ceef7e2dd25964fb7d7fc1ea4db0a"],["/posts/e5018da6.html","8e3d8e8828aa1181e88c22037fa7e001"],["/posts/e91abb63.html","0c8103b0851e95c5502d9f729a5d3ffa"],["/posts/ee1ed673.html","e4eb556f1132197f309372023d91c18a"],["/posts/f230b0fd.html","04c2cc7129caec7978181ca710feffba"],["/sumire/index.html","8e1bb19bfa1c34501b25fa936691b5c4"],["/sw-register.js","56696e740606cb687ee97cb74dab76b8"],["/tags/Circle-Mebius/index.html","7e0a33d94b09b401ce455fa0d96acf45"],["/tags/Omegaの視界/index.html","210bf3d0b763218b669b0608e1595e8f"],["/tags/Witch/index.html","4fee1195e1e2a826084d9cf7044461e2"],["/tags/galgame/index.html","429e2c120a602278f6391c91088c893d"],["/tags/galgame/page/2/index.html","4264c94b3e3de44864ed23e19cd3e5ae"],["/tags/gal资源/index.html","8f95b559fa59027dc3d0058c8db65807"],["/tags/gal资源/page/2/index.html","7baba6d24c0559dbfa17f2c0edcfdcca"],["/tags/gal资源/page/3/index.html","1ccb97f33e4fccdfca3492b10a69cbf2"],["/tags/index.html","4b3c1cd25801141896dfb40278e5a68d"],["/tags/rkr/index.html","2a87ebe2c3041b78856fb68b5f6fcfaa"],["/tags/ねこバナナ/index.html","b2bc7ee5586bfc9456b3cc195a7c3205"],["/tags/停产/index.html","641b6546b1d398efd0b13359db187346"],["/tags/公告/index.html","86062037e77442faeba8215463bb4a99"],["/tags/同人/index.html","27cfd5f25a2c13c6608a7def73fdf240"],["/tags/已停产/index.html","a6472228a6c3455c32bf8df0640027bb"],["/tags/水仙/index.html","3ceec4a112cb42f48ce807aff2d6d20a"],["/tags/猫猫社/index.html","928f4d953722cdf492ad32b6cab39e3f"],["/tags/画集/index.html","cf7118a0eca625067d26350ee646bde1"],["/tags/閂夜明/index.html","5ad23872b046f0f6d34d38708ad131de"]];
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
