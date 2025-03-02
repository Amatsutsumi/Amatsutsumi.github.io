/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","651c31f5d6b5657da5e9d7a4bdbd24fe"],["/archives/2024/04/index.html","4c750d8fbd5ddc2d9e0e8a82f8446ab7"],["/archives/2024/index.html","35a175f5a0bcd1f204086e748c4fe24d"],["/archives/2025/02/index.html","988883698f629b98f03017daa4f305cf"],["/archives/2025/02/page/2/index.html","2874d4e406d9a52be66a8dd922a0bb9d"],["/archives/2025/02/page/3/index.html","f3119332ac9909cfad694d6c21a1c636"],["/archives/2025/02/page/4/index.html","bdbc317dea9a8df5b6675d62f6d2d7fc"],["/archives/2025/02/page/5/index.html","026d4b0d6f6ec48bd907e097bf05c799"],["/archives/2025/03/index.html","d30c9e8cc9e199d446421ca9d16a6bc4"],["/archives/2025/09/index.html","7dce5626d939a74ded93b2e36a54bd75"],["/archives/2025/index.html","050049ec9dfe89e4eb243102702df643"],["/archives/2025/page/2/index.html","c255e9e4005143cc95c58f991b3d83e6"],["/archives/2025/page/3/index.html","f3e7cdfce6e452a87f8d0740f378fdf9"],["/archives/2025/page/4/index.html","bda03838aceb8b9123cccee230f72ff2"],["/archives/2025/page/5/index.html","1b1f525a0df702a1d179dab8020f003e"],["/archives/2025/page/6/index.html","167fca3f55b654f5095ecb52efe2460d"],["/archives/2026/02/index.html","d4bf2ff6dab6a5ea8620a16056655eb0"],["/archives/2026/index.html","f4b526b59be440bb8367ad3fd1cb2f15"],["/archives/2925/01/index.html","4530230b545f66bb55d5661489d1e754"],["/archives/2925/index.html","a280be595ede99a04d683b1a490c862e"],["/archives/index.html","8b3c6ae52b371e36245f1a61685e6076"],["/archives/page/2/index.html","32c95d0e9d061a1366db5e11d8dcc439"],["/archives/page/3/index.html","8392c6632bcaceec0b9312d6d98aee88"],["/archives/page/4/index.html","a930f0d0bc22d8bcc8e603741bd5152f"],["/archives/page/5/index.html","655f0b65f1fe9316bb81ec750831a370"],["/archives/page/6/index.html","79a63d1272365f67a2f9f5bbc4c43cf2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","8fc37ccac6f61e084590278c5054ddbb"],["/categories/galgame/page/2/index.html","241bc3ef71ed4def01e67322cf0f6d6e"],["/categories/公告/index.html","fc4b27ad3e1252e5bb01d18f744367c0"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","7fa6bca1e7039f95613a5998c57302d1"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","cdf4b832917c59e3f75c64b32bd2bfa9"],["/page/2/index.html","3179794158911ff6c0d76e30e722fc1f"],["/page/3/index.html","ff945098df813e690735816e3a52b62b"],["/page/4/index.html","edbff777ce3b3a99a0e5b4011dbf1cde"],["/page/5/index.html","ab390fc9f75a606c7fe1d29a6cde35e0"],["/page/6/index.html","9cd528e0464fb5d37f2e45d2d96c30bf"],["/posts/10c9dd98.html","ffae6bcb5d927065f2d19f59d0a8b007"],["/posts/1370342.html","1a845e6fc8b2b0245c74c09f302bda76"],["/posts/15ef14c2.html","ef6e91eb3ecac240dfcaaedf388deeae"],["/posts/15f3959d.html","e6472d328f52dd578182923b2171ea89"],["/posts/18ab785d.html","50dc25fd7b52428ca9d8b57472f7ffc6"],["/posts/1d59b71f.html","808f26b1d9d643510c5b5a60d123a93d"],["/posts/20b3f3a4.html","aa5f06995c19f1e1f90d40d764e8732a"],["/posts/28397adc.html","b306fd4f3354936c97570a37a1cb5b48"],["/posts/2cf620f0.html","c9724f70d06d3a4e68f8a1dbb6e5aa0a"],["/posts/303007ad.html","653fc9c9a724c57eb02a56159771b8a7"],["/posts/3f7d823a.html","e9b0ba2190c78c22047c9306ab4b7ab5"],["/posts/44124a6b.html","71865d1b1fcfd10fc771618dd32a5099"],["/posts/4b689be3.html","ddb564e26719c457aabb9a2394403411"],["/posts/4cf8423f.html","a1b69b964a261e377f44d119a98e0ccf"],["/posts/4dcf85c.html","85678633f2ae1b9120adc93db9e154d9"],["/posts/51c9b1ff.html","9dd37202faeb4b40e616039d06b52a13"],["/posts/52b5b3c6.html","2bca38325933caecdeeda4cb22020d5f"],["/posts/5f6e0c59.html","324b2ec5e0df893594a68dfcc3c6c100"],["/posts/6432d61a.html","14b5cfc14c953712e3ede240ecd6aec1"],["/posts/6515f032.html","e0ce88fef65f6e52e499c84e782a69c5"],["/posts/71131d34.html","f1eca7a279389a6eb8738069f842b516"],["/posts/78a8a8d3.html","6604294d598a8bd24de4c0dba313f940"],["/posts/7e3aa3e2.html","92d89257e99fd2e4f1900cd6abf13b34"],["/posts/80fe2691.html","fe7e6a66ac1afec9d61b124177fb647d"],["/posts/81ac52e9.html","4fd7e4d51264527903c33d3a00b33fec"],["/posts/886f8d3.html","7b913200e3fea8fe8599cd4b05f8ff6b"],["/posts/8dd520d9.html","c06eeb3924ea917eef13fe7d2b46a611"],["/posts/8f555654.html","bed0d662e2b1a3a5319ddfa3c041a735"],["/posts/92a980c2.html","cb78fbbae86da4c07d608c5167912022"],["/posts/94d3c794.html","40a3dd831c9094fb2712ee49a0eaaa75"],["/posts/97f50eea.html","24cc8b1dab367c03ad13441149b3ff7b"],["/posts/98662d05.html","2c2828271325661f22ae2de825a5179f"],["/posts/9a2f6162.html","1cca0c986df7221fdb922f4b51bb52f2"],["/posts/9b22a48d.html","985bba09ed55d6e351fb7de67c40f724"],["/posts/9cb455b1.html","6024c647c422571e3bab505d696ac682"],["/posts/9f61c1a0.html","dcd75af2452efea2e88c1b16fb1f35d7"],["/posts/b497b647.html","d81e851f0f2124cddde3c95215525e8a"],["/posts/b5fb773f.html","30d4542602d43da2a89bfaec656aeb42"],["/posts/b8d46b32.html","1a85fc67a6ca183f391e9ec7e4861557"],["/posts/c1b2c6c9.html","6ac32aadc819e18740f2d950deb0dc79"],["/posts/c316c2e8.html","78d3dfa268d75323e24fc35ad6b538a0"],["/posts/c497a412.html","cb64d865eb0116d21c6660bf52756f57"],["/posts/c5de299a.html","76c80fb3f0d9e631053a8222a23a2267"],["/posts/c70bba9c.html","fe67a1e0295f9213d8a05ba6f8638b1a"],["/posts/cbebef2b.html","044d8d95ba4dd99a2cc301642a6860d6"],["/posts/ce25023e.html","c1c4c3b2360bf6aaca926b5eb9f391ac"],["/posts/d2fd4837.html","1134f254bab78f81743e3f3b650f88eb"],["/posts/d3a745a8.html","48b801eaaee2b607a3af085a61366d47"],["/posts/e3ab6ad8.html","f699df7da9e0f54d511e49535640224e"],["/posts/e5018da6.html","28c14336f8c8e26be4833b302db22b4e"],["/posts/e624b065.html","90fd3a96cef32326b21f1f037a73e83e"],["/posts/e91abb63.html","7d15608ec8e8b8508de0e2ba9c85e043"],["/posts/ee1ed673.html","7a1c541d809383bf43a1caa57cf9caa4"],["/posts/f230b0fd.html","1d14430149e9e866f9a486e3547f1ee9"],["/posts/fc04d0d4.html","bdd3284f2e92405896383d3da6b32fb7"],["/sumire/index.html","fcc25d8a1463aa592f24c50d9f121e4d"],["/sw-register.js","7e8d23853af44702ae39db6d20aaf5a3"],["/tags/CHUNSOFT/index.html","d143093128f819ccd6f415018b9e0546"],["/tags/Circle-Mebius/index.html","f591ebd28ff9b02ea490359a607af6c1"],["/tags/Omegaの視界/index.html","ff16f2320b6f2ba941995d77ca798996"],["/tags/PC88/index.html","bb3ffe2cc535a6586dc41c078f2675e3"],["/tags/Witch/index.html","3654de1282fb8f12b25633bf13838e14"],["/tags/galgame/index.html","67d7da9e708349cd25ac17f1ea456348"],["/tags/galgame/page/2/index.html","cee45c6eafa4d6a5045f9b4900bbbb61"],["/tags/gal资源/index.html","42bda3294129551bb23b30c7613b3d6f"],["/tags/gal资源/page/2/index.html","cfa4a00c73d6d21c28c3394ede1c1d36"],["/tags/gal资源/page/3/index.html","6c8c6542ae051346a05e2ce84f2a6386"],["/tags/gal资源/page/4/index.html","8cf24ee8f62ff032f87baeed726a9bc7"],["/tags/index.html","11fd639fc41d3f7bb1f17171d266d008"],["/tags/rkr/index.html","2028819ba1c083e86bf7c47a02bf86ba"],["/tags/ねこねこソフト/index.html","1645fdf5681d8fe5c3cc098446eeb04e"],["/tags/ねこバナナ/index.html","0ffad550202a255931363e25859d2f2e"],["/tags/停产/index.html","fab82fb3dc10de2072320702f20b7732"],["/tags/公告/index.html","c49adbee590ece98c5be03e97f4d59ce"],["/tags/同人/index.html","21b06d833f8cc21f465062cd31a4ba82"],["/tags/堀井雄二/index.html","c3d6d264fc75edb7af687e22b8d6bc09"],["/tags/已停产/index.html","3e6d06bf1caab9a37d36fce05451b7ea"],["/tags/水仙/index.html","ffae9e26cc6923672470957b622c1eb8"],["/tags/片冈智/index.html","81ee9e3eb4e1716d430baadc597ac003"],["/tags/猫猫社/index.html","5d67d4c0c4fb026ae7b9350a851717ca"],["/tags/画集/index.html","0a274b102b13730671e6bf0bc594a1c0"],["/tags/閂夜明/index.html","1b29966eb17922b4a4e6f9b33b11d1c8"]];
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
