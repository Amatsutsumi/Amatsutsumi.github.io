/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","180a8321677c5d7a4831955b11732123"],["/archives/2024/04/index.html","61a660676a5a4b34afb291ae325d98dd"],["/archives/2024/index.html","188967db5c0028d04cb0b4eca09fdeec"],["/archives/2025/02/index.html","fc379fd772ec446f903a9236122ad938"],["/archives/2025/02/page/2/index.html","4636a5d96487e7f51674fbd5b15c073c"],["/archives/2025/02/page/3/index.html","9a5134703472044e571737fae4f23e10"],["/archives/2025/02/page/4/index.html","c26ce8b20e0ff7fe1386fefd2543e496"],["/archives/2025/index.html","ec7d89230bb83d61ffd4ad32b1b850f5"],["/archives/2025/page/2/index.html","c4df83e3a1e07af032a8c929c0e8db27"],["/archives/2025/page/3/index.html","571daacd0cd7408f2029cd3d5600e796"],["/archives/2025/page/4/index.html","e96cbe4ed0742d7add88b3ca986b25fd"],["/archives/2026/02/index.html","1d216101745db2ecb50fdbc289e390d3"],["/archives/2026/index.html","994af8e29ab1cc51446bcf5e0a2ee29c"],["/archives/2925/01/index.html","7fd598cd27d7ccc209e9fe9b6a768d99"],["/archives/2925/index.html","43cc5774bcd4011160075b148bbfb45c"],["/archives/index.html","8b3a831ab66ba94f3e231060545c842b"],["/archives/page/2/index.html","d40372457b6509ec5c86a7a4420439d7"],["/archives/page/3/index.html","c31e1386cae05479d28039d1e18cefdb"],["/archives/page/4/index.html","bff47149182c3ee8f37f3243bd25ba9b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","3c92e1acea199c1e7a600597ac8072c1"],["/categories/公告/index.html","e7d4b2953d8e5286b218fcd868f71754"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","c95960ddf0c1f7e16215c3ee31b90b2f"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","bf34af3e58e14f1bde74ba03e5e6ec7f"],["/page/2/index.html","6b8f36bab0afea5064246504bb72fe2d"],["/page/3/index.html","af623f657d29c4bce1eeaaa849d8fa50"],["/page/4/index.html","40ab1ee8ff772f166946fed0f603d5b0"],["/posts/10c9dd98.html","9ed5ab4bb24e04a7429011ca1700dee5"],["/posts/15ef14c2.html","ea83de4df5827454ae3a02c379379981"],["/posts/15f3959d.html","9056b433239bfd765ca170040618fcc0"],["/posts/1d59b71f.html","bb997a9ed31314c95cecd5992636ee2b"],["/posts/2cf620f0.html","2238a629152f381d4555836d058101a0"],["/posts/3f7d823a.html","7acff2b242b9c908f9bd03730bfcf24a"],["/posts/44124a6b.html","6cec8a338dad6559d1f0501997d203dd"],["/posts/4b689be3.html","e0c758a57ab46f33000427efd121a83e"],["/posts/4cf8423f.html","16d19e0cb225104e30748ac31c3661e5"],["/posts/4dcf85c.html","7cbb9102185cc9d2e280f0f0dfc0bbbf"],["/posts/52b5b3c6.html","a3a66311cb43620753f8d40978e1e10a"],["/posts/6515f032.html","c8a30f06c9651fdc2e211e60cd635344"],["/posts/71131d34.html","2ec6c094e5deec6e5b736f657356ebaa"],["/posts/78a8a8d3.html","203fcf716045b4c26ef5bce68443ba4a"],["/posts/7e3aa3e2.html","0bcd4bafdb0455bfe6a3091fabf0d0f2"],["/posts/80fe2691.html","97fe1a85376e1893b73c3f63fe2c2ee1"],["/posts/886f8d3.html","cbdba4c941ffe25cf1a390b73306ff53"],["/posts/8dd520d9.html","4129c4fe93b6bf737b9fefcaa2d67e7d"],["/posts/8f555654.html","9f94922b09d42aa70d9c6d21d3a76a1e"],["/posts/94d3c794.html","2727c10cea850ac8f9acac9856dac198"],["/posts/97f50eea.html","37aea3608f5e8fa0467ea27ab84a22d7"],["/posts/98662d05.html","9e1b6b01010cc547c0cf9a1866dfaa5d"],["/posts/9a2f6162.html","b397b0391c92be64207815df04f92d15"],["/posts/9b22a48d.html","03a0e7775ce39491ced74237c7415d5e"],["/posts/9f61c1a0.html","1a1702091c9871fe235ffe2698440974"],["/posts/b5fb773f.html","269fc6293a9a879b7479c73d9b139e85"],["/posts/c1b2c6c9.html","781b00c615edaad25c48340593376f28"],["/posts/c497a412.html","3b21764beaf379d9f0c280c8a19fc5ee"],["/posts/c5de299a.html","18475d8454844e67833ad398a2b034ed"],["/posts/cbebef2b.html","0af6776d1126ea4c6ff1fd40f369da5f"],["/posts/ce25023e.html","5d7770aba5f1d2a5282e3f56e36ba81e"],["/posts/d2fd4837.html","1e6f8bec80538dbaac6f9e8dcb7ad783"],["/posts/d3a745a8.html","d7aa846cc745e6b95c178900e3e125a7"],["/posts/ee1ed673.html","83412644236f45649af1435157267b50"],["/sw-register.js","f01a1c1449b371f414a8c3308cece653"],["/tags/Circle-Mebius/index.html","71a96e5ea77784623dd686d3fbcfba2a"],["/tags/Omegaの視界/index.html","37f7ad55e1880c68308c085f34035d69"],["/tags/Witch/index.html","37d48a351ee01ba794deb07366939784"],["/tags/galgame/index.html","afbf7e4c20351befb366e3db19ec15a0"],["/tags/gal资源/index.html","63e740336cc4076cf654cc6c391932f8"],["/tags/gal资源/page/2/index.html","43470ea8bffcdc371ee3775f9221d6fd"],["/tags/gal资源/page/3/index.html","81a95fb162074fc71e093b77425252e7"],["/tags/index.html","a0be1857628f6ad4cd0a117c9bfce54b"],["/tags/rkr/index.html","c82e500aaaf5882d33e7c2bc61342055"],["/tags/公告/index.html","014080fc06992dd22cd9d84c1a019453"],["/tags/同人/index.html","7b578719332a0000de31a4b3b56db56f"],["/tags/水仙/index.html","6b8321da9d71cd4d39a1a4a8d19939bb"],["/tags/猫猫社/index.html","71d87a768f7816d18acc7d44a348e7e1"]];
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
