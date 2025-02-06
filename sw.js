/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","22bbe20c1ae87a1225f7c639f6ebb8dc"],["/archives/2024/04/index.html","99bbaf28753c7e81657fbeaf4acd72a1"],["/archives/2024/index.html","493c606b091036b5170316fb18943e2a"],["/archives/2025/02/index.html","43fc7d6718b30abbb49fbb37a92302f0"],["/archives/2025/02/page/2/index.html","f0e32f2aedc450e338c8e69a2c184b79"],["/archives/2025/02/page/3/index.html","09193b0135b78b74c59c2733dce72988"],["/archives/2025/index.html","55e1b3c44adb7951e5ac6b8be0c8bdea"],["/archives/2025/page/2/index.html","e1949df7954507ba21182c9abd260701"],["/archives/2025/page/3/index.html","8a1cbecd77db09da4e029f6e68ed69dc"],["/archives/2026/02/index.html","cbd09064cc7af84f8562081629eaa5c8"],["/archives/2026/index.html","34055c131b0b6725bed8587c9d81b1fd"],["/archives/2925/01/index.html","735473e99b4ad9a21916385490b72986"],["/archives/2925/index.html","3c5fa115b954f9700db34d77d1519368"],["/archives/index.html","55abd9c485981a470e56471eb8437a51"],["/archives/page/2/index.html","a72961351313495938475d1b1dbb2d96"],["/archives/page/3/index.html","6ebd16c6175b73f34622bc205f2c9251"],["/archives/page/4/index.html","845f4a346c4f7d786924cd5debca7628"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","7ce54b0a61464ec71b8ef8d6438c0d58"],["/categories/公告/index.html","da80788453cd66f8a97967d3e05fb846"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","7f396e8f37708b6ff909f653fde38dd5"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","d91ca7297937b6761683667b36e5d3ff"],["/page/2/index.html","35b19d4e9840438d60936fb245e2f473"],["/page/3/index.html","af3b1b9fe573defd50d01db58dd9bf10"],["/page/4/index.html","de8c2b6ac487734ab1fd81bd3ed0d41f"],["/posts/10c9dd98.html","32e0879a0e177694ea4962affa49dcb9"],["/posts/15ef14c2.html","0c60ff50da4506e4f4b7bf59cb5a18d3"],["/posts/15f3959d.html","4c7608de81f3650509e1b6d98d4ed26d"],["/posts/1d59b71f.html","36a08c6b56886b75395dd3b286868125"],["/posts/2cf620f0.html","5c2139968ffa5067a5f51040cb5280d3"],["/posts/44124a6b.html","c83e44432824dc0d6c1378f8641f49df"],["/posts/4b689be3.html","7defb773531cc8dd85616ebe78dbd91b"],["/posts/4cf8423f.html","348086cc349ae1a1a21f936b482b289f"],["/posts/4dcf85c.html","1687768b28883fb046864394e46affb3"],["/posts/52b5b3c6.html","4d7683966fd5639943c49d6ea000bc0f"],["/posts/6515f032.html","d5cf7f81a95c07a108473ad829526f6f"],["/posts/78a8a8d3.html","c0385e7a8f03bbda1e67c2622ee82768"],["/posts/7e3aa3e2.html","ed966517b0caba4d5c77f4dcc6c53121"],["/posts/80fe2691.html","7426c7ee3a714129c89923bf4279736a"],["/posts/886f8d3.html","f258a77ef7d5bf98e0b20d35aa3ad261"],["/posts/8dd520d9.html","d3123c728b5f34c8c3e010176d953545"],["/posts/8f555654.html","65fb4c8dce7d9c1448f3efc0712f050b"],["/posts/94d3c794.html","8203e4edaa8d09c0b1c3595194ae8493"],["/posts/97f50eea.html","acca0119fed99e78bf2d4d1d0aeda265"],["/posts/98662d05.html","09ef2cfa2fae79916f76af7614e58dac"],["/posts/9a2f6162.html","51a39eb407109438fb227c9ebe776640"],["/posts/9b22a48d.html","d0704499fefb34470a8bcd15e9291708"],["/posts/9f61c1a0.html","687219a6760b8fd074d6c1f72742e951"],["/posts/b5fb773f.html","aa0b5eec097804d63e3d57bf5a6906c4"],["/posts/c1b2c6c9.html","2ae8375805a3307d1f74e127ab225d79"],["/posts/c497a412.html","30eb0877093990132bd6bc4c620924c9"],["/posts/c5de299a.html","bebb12ae3433bd6db46213ae701732a4"],["/posts/cbebef2b.html","677e8fedf81215806d80a1e9ec86c015"],["/posts/ce25023e.html","2f9b19edd1f9511181540b2c5a13b024"],["/posts/d2fd4837.html","1a8cbc703883d5ccc1c176e30c006165"],["/posts/d3a745a8.html","b72caa4787733481c77845771c2da17b"],["/posts/ee1ed673.html","b0bcdf8c4156760fa9bf7bf2c04ec40c"],["/sw-register.js","50577024d56444b7295f76e3db41dc0b"],["/tags/Circle-Mebius/index.html","1962f43b8e71872d03a446b4dccef39f"],["/tags/Omegaの視界/index.html","0ea3391b2b0195c3ffe461704472caa6"],["/tags/Witch/index.html","f7bbbf6d73965ce9f3666998c60c5c4e"],["/tags/galgame/index.html","c20a6953183a2a8c3f46b81ca0945a3a"],["/tags/gal资源/index.html","535fc73101d228feb0c4286dbbf2e0a2"],["/tags/gal资源/page/2/index.html","5b6a58cb6b80ff388ce938c9af9ffddc"],["/tags/gal资源/page/3/index.html","84a99e075b3874405e71cca663ed43ba"],["/tags/index.html","6d8e752d501a514023e95084cf9bcbc4"],["/tags/rkr/index.html","6c5ed2560f6368d535564441a6d6d849"],["/tags/公告/index.html","48265e7e66dc26af88e90c5af94ff505"],["/tags/同人/index.html","6040cd689a05b83a8f0e2b58eae50fbf"],["/tags/水仙/index.html","e8d2c71c521ab6f13756ef020d499d2b"],["/tags/猫猫社/index.html","26788138028fac94381fff3c69e7dc24"]];
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
