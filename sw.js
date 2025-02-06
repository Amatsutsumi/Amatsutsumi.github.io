/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a61a4233bdaa220630ebbdc708ca7a9e"],["/archives/2024/04/index.html","48ed57db238da95d0553e33ff1aa0be6"],["/archives/2024/index.html","0174df7117db159aca9a33d98b352e4b"],["/archives/2025/02/index.html","9bd5d8aaac15f9116afc5e95acea922b"],["/archives/2025/02/page/2/index.html","f6d69be1de6eeed033f083bfe599d80b"],["/archives/2025/02/page/3/index.html","03bc57250a7811f0bd9aa830ed04160b"],["/archives/2025/index.html","1e5e7a464f483962ebbf6933cbcc2442"],["/archives/2025/page/2/index.html","6d980dc48add1ca95e449bdf66ef142e"],["/archives/2025/page/3/index.html","41985b8d768f67457c54fd74919eca65"],["/archives/2026/02/index.html","0d440d25935b97cb71edecbe4fee1e0c"],["/archives/2026/index.html","821c132598a4aed921b1489ed2e4d89e"],["/archives/2925/01/index.html","ac9f6930a027061f621570e93a401264"],["/archives/2925/index.html","064c85ded2f9939d6636b7fae5c6c738"],["/archives/index.html","e822e70e9916d358c55a7acbc6d47079"],["/archives/page/2/index.html","91544dad27cee113432004b8c5cb6d58"],["/archives/page/3/index.html","91c9ce0efa4a7f2f145f092f76fdc3a8"],["/archives/page/4/index.html","94eef5b6afb452cf29508bb913c89a6a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","f67f05fa29b53a7951294471b358d226"],["/categories/公告/index.html","d3c32378c6fd0d08f5190a46e1194912"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","75afa42ac540aeac9b797eeb74036748"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","e78cd938750d5ad486f78674264bc447"],["/page/2/index.html","ef37db7f84faccd06777808e71763adb"],["/page/3/index.html","c3b68d156e772bd93ec0e0a3764d56e4"],["/page/4/index.html","54637bc251f21e64463a383e192f89cc"],["/posts/10c9dd98.html","9d9ba7c9a2ee6702bf627a693d14d009"],["/posts/15ef14c2.html","0c60ff50da4506e4f4b7bf59cb5a18d3"],["/posts/15f3959d.html","3662226bfac2c9bcf5d7b4c84dd7f701"],["/posts/1d59b71f.html","56e95803fc07fecf728f7a5c24db21d0"],["/posts/2cf620f0.html","a1fb26aefe9d2783106c405cb85b1590"],["/posts/44124a6b.html","c83e44432824dc0d6c1378f8641f49df"],["/posts/4b689be3.html","60746ef328f08eb28a50931d5eb8d1eb"],["/posts/4cf8423f.html","11d567899845eea7d75b2f395557f3c9"],["/posts/4dcf85c.html","fb3ac6c349320024061a7a2ea530468a"],["/posts/52b5b3c6.html","b74b0890651aaaa1647e2d28546cc9d6"],["/posts/6515f032.html","c7371b1a6909480c69f1ef1a9ebe883e"],["/posts/78a8a8d3.html","5e45b60c799fde0c00f2899768496c69"],["/posts/7e3aa3e2.html","03d1d5b4406da2a5d8e2b4dd0ab2db5f"],["/posts/80fe2691.html","45de8e710ce6ad2548de83a0071a2c48"],["/posts/886f8d3.html","c5d32e2e953a73e11eac5ebcc396225d"],["/posts/8dd520d9.html","d3123c728b5f34c8c3e010176d953545"],["/posts/8f555654.html","8dbb1354c609a26c5167235bae5291a0"],["/posts/94d3c794.html","8203e4edaa8d09c0b1c3595194ae8493"],["/posts/97f50eea.html","acca0119fed99e78bf2d4d1d0aeda265"],["/posts/98662d05.html","396e9b2132ce7e3f0d91547dac271422"],["/posts/9a2f6162.html","51a39eb407109438fb227c9ebe776640"],["/posts/9b22a48d.html","d0704499fefb34470a8bcd15e9291708"],["/posts/9f61c1a0.html","687219a6760b8fd074d6c1f72742e951"],["/posts/b5fb773f.html","8e2c473d3c91d4ae1dd9bf7c46129f8f"],["/posts/c1b2c6c9.html","2ae8375805a3307d1f74e127ab225d79"],["/posts/c497a412.html","e1cdfb56069239b81253f441ea0f5078"],["/posts/c5de299a.html","bebb12ae3433bd6db46213ae701732a4"],["/posts/cbebef2b.html","81a819ffc4b6b83f848d74d3c525d840"],["/posts/ce25023e.html","fdea9890551ab0ebcc05dfd3b8fa2250"],["/posts/d2fd4837.html","5cf776ddcfac47a320c4c21bb7e36c94"],["/posts/d3a745a8.html","f54801dfcebc1066bca52eff8f35503e"],["/posts/ee1ed673.html","a09c164bdee168689df0b9f71de770ad"],["/sw-register.js","0233579a12e5a1d3df34bea7ac835068"],["/tags/Circle-Mebius/index.html","b9d53771a3396780cdfefbb93dd1aea9"],["/tags/Omegaの視界/index.html","370049918c26fda8c7e717f7d747976e"],["/tags/Witch/index.html","d5f67a38f3c3d285f3fb71513e70dc94"],["/tags/galgame/index.html","eb0effcb3ad75ab35df8ed6bfb26fc42"],["/tags/gal资源/index.html","2858b3160593eef9f81749cc7dcbe3e1"],["/tags/gal资源/page/2/index.html","6d49069e894f1671a90a68528a19f816"],["/tags/gal资源/page/3/index.html","5c53f3f5b56195db00447b7702b1f797"],["/tags/index.html","66b6f81ce4e92d3ad9e7d663a741a4c9"],["/tags/rkr/index.html","23a48d6cdba01232e4d1750e080111f1"],["/tags/公告/index.html","11b3666857cd47c3887c24bdb046694b"],["/tags/同人/index.html","e5c588da5a4837f3222389541bdc6923"],["/tags/水仙/index.html","47fc38837995f97ace173e66ac7f728e"],["/tags/猫猫社/index.html","2d26fb89e8e597ddc2554b0504923ca4"]];
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
