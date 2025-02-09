/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","cc014d2e54ba2353178fc157203a4ab3"],["/archives/2024/04/index.html","230e0784040b425074db36e285f478f8"],["/archives/2024/index.html","6a1cc632dbe721e88ac75c3e615a9561"],["/archives/2025/02/index.html","37c71f33525b577a343ac67e820de2f1"],["/archives/2025/02/page/2/index.html","bbe122827625192fa20e5207132d91f9"],["/archives/2025/02/page/3/index.html","ff9bbd219835dc63020aaf7f2e7be395"],["/archives/2025/02/page/4/index.html","2d900237e93d7d933c579cd02e40ab3d"],["/archives/2025/index.html","bfae59739bebe6124a3d28a841a9609d"],["/archives/2025/page/2/index.html","3b5ab38d58a7bcc346334cc8fc2b315e"],["/archives/2025/page/3/index.html","c9556a842a1c3f0a4f3e91ce2d6c6443"],["/archives/2025/page/4/index.html","1f472f2af39429e1240d77487dbc3649"],["/archives/2026/02/index.html","134bfb58c2ad9c02ca4d65002ddd7ee0"],["/archives/2026/index.html","ea930d05139742212bfbae17110d3c90"],["/archives/2925/01/index.html","1d2613ff736e2aa6c492b674853f0c77"],["/archives/2925/index.html","9cfb22c3351f6464507a0eb5ad956a6c"],["/archives/index.html","5c7b5571dfef28390e4c3fb032874e70"],["/archives/page/2/index.html","995703772ce0fd8cf1bebd2f7c1d3c81"],["/archives/page/3/index.html","d734438eba5e47ebec2b6bb71c4c84c0"],["/archives/page/4/index.html","0c5d90d8fd400e2f27b63ed238d59571"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","863156c37fc2d783dad7dc950c812eb6"],["/categories/galgame/page/2/index.html","27032db04b00061a1dc02c2bd6ff3c2a"],["/categories/公告/index.html","cbb3c27fa05dba5b6398ffd0651fa0ae"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","bf1dbcdcd1253c34493f05f239f38c62"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","7a131ddf5dc88cda7cb1693e7f83c90a"],["/page/2/index.html","aef013b62cc1ea0a1fef504194f580f1"],["/page/3/index.html","afe1af1e9ea4b0ab963c55ee163d8de9"],["/page/4/index.html","d79eab8b202997b2490b91cea5235d0f"],["/posts/10c9dd98.html","43352962b2afad4820c61c843835682e"],["/posts/15ef14c2.html","024ac84da113afe02d4f9c6128c60896"],["/posts/15f3959d.html","ad06874e717723d453b5c1fac0375388"],["/posts/1d59b71f.html","231f0be90a8ba6e70a1cfebee235fb3a"],["/posts/2cf620f0.html","261140b1e2caf05c416f234c6872cf05"],["/posts/303007ad.html","1efb2e130018e7b963fb139c0cdfb65a"],["/posts/3f7d823a.html","17d0195f4ebb8c86f29daa6fdadc8417"],["/posts/44124a6b.html","e8bd05bc23f664167f0a9c81f71ccdf5"],["/posts/4b689be3.html","7c98c6aed3fe9ec4b6e832e20b42d824"],["/posts/4cf8423f.html","d83a084450fce3d33c3f8a51baec8b11"],["/posts/4dcf85c.html","3c00ae18d20214f76a2e95d6b9c1c776"],["/posts/51c9b1ff.html","b28309c28d20a95ce27a20af3511f9b5"],["/posts/52b5b3c6.html","f457d546e4790456a92f7a4db0c02817"],["/posts/6515f032.html","7c11ab868d4e81bd63457ba464bed955"],["/posts/71131d34.html","76bf1396688f6bf1b6ee06eac82ea210"],["/posts/78a8a8d3.html","86b9fd7735516a74802d5b7ed461b81e"],["/posts/7e3aa3e2.html","bbe63cf24f14081461be8a7eb2f2e3ae"],["/posts/80fe2691.html","f9d3a55488fb23fc87218da4f0c205c9"],["/posts/81ac52e9.html","cea512ad66af7628064081efe879de6d"],["/posts/886f8d3.html","a66d68ad90352a26492108de674389d8"],["/posts/8dd520d9.html","4aee5a76f2aeb53a01b8a7927e6fec56"],["/posts/8f555654.html","1b0358bb9895b40fae0850d0e4ff75cc"],["/posts/94d3c794.html","98ac9349d664a586afcddd5741b47e65"],["/posts/97f50eea.html","b7a2bd67baadcae5034345dd5ca8c6c8"],["/posts/98662d05.html","94c903e213ceb53a330a65d75ae90275"],["/posts/9a2f6162.html","50d3d6866d86928dba913091b1b9bca5"],["/posts/9b22a48d.html","7daadae1329ea9bb6283368109c8ec84"],["/posts/9f61c1a0.html","d811810b792aa66f0483a52490cdb127"],["/posts/b5fb773f.html","9216e586c0d721e763daa9e5691d21e1"],["/posts/c1b2c6c9.html","c535b677fae1b2175e96ae76f5f01006"],["/posts/c497a412.html","78b3e4670fcab92c281c08731cdc3647"],["/posts/c5de299a.html","aa4bb1d65c0bff189f0e11e8e04741ab"],["/posts/cbebef2b.html","1452ed3aed5eacb261af124cdbbcd7e6"],["/posts/ce25023e.html","d4c606043214b4ba688984ad42ddb1a4"],["/posts/d2fd4837.html","f3069fdca3afbe4c6fbf3c05efea9994"],["/posts/d3a745a8.html","bc428bbc95e0b6a0ad93a3b5317499bc"],["/posts/ee1ed673.html","586dec44670f950cb96b5d1fa36188c6"],["/sw-register.js","992309d9c7db3ec499fbd48a79d2a7fb"],["/tags/Circle-Mebius/index.html","196b21bdc489ed9d05477ed14f37fee5"],["/tags/Omegaの視界/index.html","d076e9625598abb77a54581f3c419ba3"],["/tags/Witch/index.html","3532eaa1603525b5882467ac3347adde"],["/tags/galgame/index.html","a239e35e9d1d3168bbc5ac003b1d6273"],["/tags/gal资源/index.html","323029f1b41c660ba54b2ee1545d62be"],["/tags/gal资源/page/2/index.html","508d721e2aa3270a57a07c2120df4558"],["/tags/gal资源/page/3/index.html","99aa1cb2efea496486cc06bab76f4844"],["/tags/index.html","5bf2d0b602e006208225f4dd82d04972"],["/tags/rkr/index.html","7693a21bd38ed3f49e96532fad1e1411"],["/tags/停产/index.html","2236075a76eb7799573f5bc09d688ee3"],["/tags/公告/index.html","049374251e0a21cf0e2ba9c951ba0288"],["/tags/同人/index.html","d78df8665d0b39faa695fb279d2f73ad"],["/tags/水仙/index.html","fd1352af4e9f2642a27ebc940e5d2767"],["/tags/猫猫社/index.html","2bd8f921a9911a4e27ec654b751d3782"]];
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
