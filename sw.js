/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","78fc782731cc7e3371ab938344e066a6"],["/archives/2024/04/index.html","c41c126c8bed0978b718bcff7929458e"],["/archives/2024/index.html","c01414ab6e67900919bfca4ba82b6446"],["/archives/2025/02/index.html","3da188c38ceb48aa69f9c40f5099fab1"],["/archives/2025/02/page/2/index.html","42de1748a3aee73ab4ce71f52e242cc6"],["/archives/2025/02/page/3/index.html","1ec21ee3e7e5635108e86436d2481c9a"],["/archives/2025/02/page/4/index.html","39f8383991e126c47ddf8ae64f5d05f5"],["/archives/2025/index.html","a58d6aeb9ed3b0672cef170b27737272"],["/archives/2025/page/2/index.html","e1bc5882d4b776da7e6fb139e3fda0ee"],["/archives/2025/page/3/index.html","686929a94de485d55700ffa56cf80881"],["/archives/2025/page/4/index.html","63a31ba6b2d076adc43a607ac16997bf"],["/archives/2026/02/index.html","be16794c761bb040586f402d934582b6"],["/archives/2026/index.html","f1bedea556434c84dd72548a6b2f323f"],["/archives/2925/01/index.html","316dd17b9162c86d1920beeaf26b1b27"],["/archives/2925/index.html","a5f6cf87de2ade5e47b66e626e4502ef"],["/archives/index.html","95f0b1ad2c62c226b3344e4229b2be6d"],["/archives/page/2/index.html","70fcfceb1b36fbf351755e7b40d28391"],["/archives/page/3/index.html","d67fc413f7419ec7ccdf1916aae9e487"],["/archives/page/4/index.html","bbb5baff6ec935adbc0e6be60f477e3c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","5909304828ec4ea621c1b7fde49787c6"],["/categories/galgame/page/2/index.html","d8dddefc95f4162a58f337dbf27cee0c"],["/categories/公告/index.html","bc5ecd3fea8a734898903079ee9ffe5c"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","f1be615ee470027096dd78628881cfa1"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","541a69efb56b96bfd3dd29819ee9a418"],["/page/2/index.html","39323a652db6e9d9ef605ca98ec23156"],["/page/3/index.html","ac887ae754e8f8fac731a201097787b3"],["/page/4/index.html","b5bf6e0ccd266501b0b3aaa37829bb72"],["/posts/10c9dd98.html","69cbd055437d78bf55b068cfd6deddc0"],["/posts/15ef14c2.html","87c4ebfe75d57b91611b526b66d28bf4"],["/posts/15f3959d.html","ccb1a2a6030d16c926c8c01cb051a40d"],["/posts/1d59b71f.html","3c6589b7e0f5dc7e444a5716f6a4d703"],["/posts/2cf620f0.html","af5db4dfb3edddf8bb5f5d87e6be31cb"],["/posts/303007ad.html","e1dbfbd151eac37a5c9aef297f1b1341"],["/posts/3f7d823a.html","c2e6ed9b99b3560987a9a43fdcce1dbc"],["/posts/44124a6b.html","0ff3aca5be00a1a1afd354a1c65f1049"],["/posts/4b689be3.html","d777d77f127545d11958f3fbe486b4ef"],["/posts/4cf8423f.html","ce70c15290e387a9aebdd41ba8265fc5"],["/posts/4dcf85c.html","8e79a084d36df00697c40d2192795429"],["/posts/51c9b1ff.html","de8952423fb6c8cad6c04f5a5c23d30b"],["/posts/52b5b3c6.html","d06eb8a33d5b94fc44a1aa304a261ba8"],["/posts/6515f032.html","99574913f4802d9293daf9b702e80fb6"],["/posts/71131d34.html","0bba9fcfb18924af7855efab85e97545"],["/posts/78a8a8d3.html","3defe44b16e43fdbb995c82f0eebcefd"],["/posts/7e3aa3e2.html","52343839be4bac42e3db3608d262f94c"],["/posts/80fe2691.html","08f8d7baa98426814252110e5931138a"],["/posts/81ac52e9.html","2a62148c119005dd6ddb570ff539ce76"],["/posts/886f8d3.html","fef673f72e322a5d015ceda6588e653e"],["/posts/8dd520d9.html","a004387471922a8fbe90301c15010449"],["/posts/8f555654.html","f129d19f849c293302aced3755075883"],["/posts/94d3c794.html","ffc780dd28d413624553e9f0168241ff"],["/posts/97f50eea.html","a0c47038fbbf1774db4a6c36641e2711"],["/posts/98662d05.html","f9b91a73c74484d703bc5413f247fedf"],["/posts/9a2f6162.html","707b2253e18b1fa170a1669e99c60f8e"],["/posts/9b22a48d.html","00adeeaab35ebb4e2e252322e8ab098c"],["/posts/9f61c1a0.html","2e292e1c0278085927d8c46ccc652625"],["/posts/b5fb773f.html","271fd051f331dbee486a82f2a5d7a450"],["/posts/c1b2c6c9.html","d18f530f49948c46b6f4337b992192db"],["/posts/c497a412.html","e0d54efe42a558ad8a3605186d6d25e7"],["/posts/c5de299a.html","ee1da35762e5c4db6eee510d64e21d6a"],["/posts/cbebef2b.html","5978aed194f9897807cd77a1be275554"],["/posts/ce25023e.html","a106a72f86f08990c2a54330c0ccda8e"],["/posts/d2fd4837.html","44103a3239e2f52148b3c3cb154aef67"],["/posts/d3a745a8.html","0983379d9bb8d8f7836f71b72cf58c19"],["/posts/ee1ed673.html","3c2b78ae2ecdc643b70c8d7029c87e08"],["/sw-register.js","9f4a4ebc57e6e7e70a45fd8dd4a76e83"],["/tags/Circle-Mebius/index.html","e2a802ab86e7aa6b80837e65a929a0a2"],["/tags/Omegaの視界/index.html","d4a01e65b92680dac5c378f2a677df1f"],["/tags/Witch/index.html","b8dd14bc751e1aed57d109196fb8ad09"],["/tags/galgame/index.html","6e416b73006f6301a53b9ad158e17b65"],["/tags/gal资源/index.html","6157ee38c809f6ef5602fb2f95ce3aef"],["/tags/gal资源/page/2/index.html","882981bd3a4c846607fc61cfa361fc2f"],["/tags/gal资源/page/3/index.html","1ebf3f787f4985b9b40ae28f18fa72ea"],["/tags/index.html","092fc8cbbd8d630c080a916d597a8d84"],["/tags/rkr/index.html","adb8e1d328d18f2a5b8a261fafd3a448"],["/tags/停产/index.html","75441e9c4db8e35e2448be35c9e5c236"],["/tags/公告/index.html","7d24be2ef03683c4b4c739f95ea3e7be"],["/tags/同人/index.html","5f8eb1464265180973482eb651425f4a"],["/tags/水仙/index.html","eb28b9dbebc8994dc5cee070b1dc8f14"],["/tags/猫猫社/index.html","ca26cebb5f198d1bcb34fb6c8c12ce8f"]];
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
