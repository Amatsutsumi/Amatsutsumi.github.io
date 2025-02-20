/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3c8bd86cccbe8e138a0ef8aea5bcee23"],["/archives/2024/04/index.html","19c3cf5fe75fa19f9e0fbc86f567ac55"],["/archives/2024/index.html","519f70e11d0c70082a63c37453b7ff78"],["/archives/2025/02/index.html","4523a58b5e7f5b15f3e3c0945cd20544"],["/archives/2025/02/page/2/index.html","e497ee23a35a11bc96d639c26805cb47"],["/archives/2025/02/page/3/index.html","b5ea66031b4efc5d8969018e185bc8a8"],["/archives/2025/02/page/4/index.html","ffd01a9adb80980257f4953aadb235b1"],["/archives/2025/09/index.html","b0fd8e969b20e2e144d7fb2dcf0c716c"],["/archives/2025/index.html","adec6d69e9ac992e1f11feaee7cbd0cc"],["/archives/2025/page/2/index.html","0b401dcad45e2ac5c0cef3a97e9797a8"],["/archives/2025/page/3/index.html","e224cf5efecd4b35d1bfe99f21a7f5a0"],["/archives/2025/page/4/index.html","7b67ca82f320a9532df0456561973255"],["/archives/2025/page/5/index.html","63669733e5166f1e592403949f3f5c0f"],["/archives/2026/02/index.html","fa6b116604fa36b5389e26b27e180aa7"],["/archives/2026/index.html","fb604f14e92a2c30c9fa9d812e9de82e"],["/archives/2925/01/index.html","8e4886401e8f13433204b89a97e2cc32"],["/archives/2925/index.html","006d3ab74ca97124789a8adf69f09fa2"],["/archives/index.html","a350fd4c6956382966725ccc50557d45"],["/archives/page/2/index.html","d6f029983a33d1352f3e022e1bbfe79c"],["/archives/page/3/index.html","ce09c87b5d35da55ff89453806df1142"],["/archives/page/4/index.html","b1c75fb8056d11270637d3c59bb211ce"],["/archives/page/5/index.html","c9c1939f1ed2f8724cbeca7209de61de"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","bce4acb1b5b263db97923acd9c106540"],["/categories/galgame/page/2/index.html","ca01979168e232828fc4232d3b59ef54"],["/categories/公告/index.html","9629d87e03191eb725a8892911034fa3"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","72e8d4e380bb01a85b0bf404be3d87c6"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","5c8836edc5953addcd0f5045ac36a6fe"],["/page/2/index.html","e43165e8f048cbbdcaac9a2c02b25f32"],["/page/3/index.html","004e807d58a3fa38c83a8f542e0912c1"],["/page/4/index.html","55f75b181bd462fb4b9a088ed29699df"],["/page/5/index.html","f0882b7d6de2abc353a8dc2c67cf3081"],["/posts/10c9dd98.html","e93170196b16709d2e8fafa2062505f4"],["/posts/1370342.html","ee8b14ecc5bd7a0d5fa79cbc42f31942"],["/posts/15ef14c2.html","d9f238abedbb7ca7d8500737eb424072"],["/posts/15f3959d.html","fa791bdfa54a2368c24432c663f8571c"],["/posts/1d59b71f.html","600c8dafebd5ed7b780883d0bd61f3c7"],["/posts/28397adc.html","2d99496430a18267e29e96de0cee6468"],["/posts/2cf620f0.html","672b89b370b1f332fccc99a919bb6a43"],["/posts/303007ad.html","ac4f2bc8a7535c2fb8c9c2eae7c36f87"],["/posts/3f7d823a.html","a4bdce6effe4f39b3b9380189d3e2960"],["/posts/44124a6b.html","731e96b20f487d621613ab8301a32aab"],["/posts/4b689be3.html","dee58574339384bb84d9f62a7771765c"],["/posts/4cf8423f.html","43d836fe50f145bff02da514bf4494e7"],["/posts/4dcf85c.html","f17be4a46bfcc2d5dd5af4693757c0ba"],["/posts/51c9b1ff.html","b1c79020eee0ada8df97cc5fb566cfea"],["/posts/52b5b3c6.html","3e0dbe7e1f110f43f02a81d933b33e47"],["/posts/5f6e0c59.html","8d384eb77ab5b203d7e3aec8b1c9c1ee"],["/posts/6515f032.html","4bbae25b8a72dbf7c6f743faf1651f40"],["/posts/71131d34.html","c63c1b63fe99e9bdf01bfc4430922880"],["/posts/78a8a8d3.html","70ed2e93e191fc425639fe07790daf2d"],["/posts/7e3aa3e2.html","d548fde876ddf9afd2e41d3ea74dd15d"],["/posts/80fe2691.html","472ed3e45cca985341d6cbe3b941341f"],["/posts/81ac52e9.html","9d94f53f0c410b2f5a88b5b39146f8ea"],["/posts/886f8d3.html","182f4f3f8c58d45f44082932e52f21a3"],["/posts/8dd520d9.html","cfbeccef1f2e8f995026b71d2ea0876f"],["/posts/8f555654.html","a4e4e671e7b8ed1d431428f77e72d04a"],["/posts/94d3c794.html","58a08a49ffc2956b383ca8ec5b8e7a03"],["/posts/97f50eea.html","d8d1916365faf783ae1c50076bcf7d16"],["/posts/98662d05.html","4c4bd8a41b4904331ae1e581f4ce4392"],["/posts/9a2f6162.html","070741216e3480cd5e526f23a6cd20b5"],["/posts/9b22a48d.html","b39aaf3b08cb6c859a00ab20cd580c7e"],["/posts/9f61c1a0.html","e0a2df77eab81bc605b3ffca9a653735"],["/posts/b5fb773f.html","01695020d7e027a5293d72d12968d493"],["/posts/c1b2c6c9.html","22f3905adc95481310177ef547e4dddb"],["/posts/c497a412.html","ac463f30b24aca3deb8effdc46219bec"],["/posts/c5de299a.html","a1d60582ee8d6660c5b5b714141d9adb"],["/posts/c70bba9c.html","62951d8c0e42773edf2035128ec531b9"],["/posts/cbebef2b.html","73154253b97e46b106739e4e37790544"],["/posts/ce25023e.html","09385489e461c897045b1449357cc328"],["/posts/d2fd4837.html","2489545ede754e0e20e36cfdadbe4ca8"],["/posts/d3a745a8.html","9971014467d085656e6bd7e8f0eaeb0b"],["/posts/e3ab6ad8.html","50aaaa007f114919e93b1c52c94aff45"],["/posts/e91abb63.html","bcbf72448bc54b1a241c70b3f4ba4d24"],["/posts/ee1ed673.html","29e465abc41c403ee9d41e96b3db2756"],["/posts/f230b0fd.html","072d81065a2afecaac08ebb448dde2b7"],["/sw-register.js","a3f22854ab257cb41f53c3ca0505be5f"],["/tags/Circle-Mebius/index.html","4c14f399b25d5cd02a5c7599cbbda1fc"],["/tags/Omegaの視界/index.html","2f0377462fca503952dd19f3a5fbbb88"],["/tags/Witch/index.html","266042140f62c78d0797b770b5035ec5"],["/tags/galgame/index.html","5d8acde410cdefcd02e3da9fdaaf9ecc"],["/tags/galgame/page/2/index.html","693e30c708d9fcf2614fe200b02478cf"],["/tags/gal资源/index.html","e10536b159ebb9627f9d9294d3051c35"],["/tags/gal资源/page/2/index.html","4f7825673d114aa3e90bd84284d7fd22"],["/tags/gal资源/page/3/index.html","1d7b244aa1ce9f94c2c33189b09b76be"],["/tags/index.html","644773c2f8e9f10ef3efc9331f00be43"],["/tags/rkr/index.html","a6391e4c74b42dc4c3721b61926eb7b1"],["/tags/停产/index.html","a8fe70089d43a5e5a612bff3e5a81a4f"],["/tags/公告/index.html","890cb6f4413004bb50e22628f8126d5e"],["/tags/同人/index.html","54ef50613e7d91379bcf11307dc23a2c"],["/tags/已停产/index.html","171886153ee68d602dff88fd0125631c"],["/tags/水仙/index.html","4e3ee02c15033625085fceb70290e3ee"],["/tags/猫猫社/index.html","a1866b867af8bc0431016214ba960556"]];
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
