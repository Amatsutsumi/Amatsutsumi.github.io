/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1995.html","c9c82d4278e4b9c52842495ca6816db9"],["/about/index.html","e80ddb0bf616edc4438900a64da7029e"],["/archives/2024/04/index.html","d49b4218f2d514eccd45b9afddcc1499"],["/archives/2024/index.html","b90b232a2816a258189a4e4ae17eeab1"],["/archives/2025/02/index.html","abb20820ef0e986e4f815e3b6d31e0bb"],["/archives/2025/02/page/2/index.html","b953bfc9087b44aaa7e22b25793b05f2"],["/archives/2025/02/page/3/index.html","2ef63e6f697c90f3869ca7c1d395bd50"],["/archives/2025/02/page/4/index.html","5849e4c9a7c3e99758945a75d12124ae"],["/archives/2025/index.html","eecfae999ba82ddc30075ddce5847d53"],["/archives/2025/page/2/index.html","9017f6085484ce1e28a1f6d6a9946c3d"],["/archives/2025/page/3/index.html","34148446920255756ff7cfc5a5c6adc4"],["/archives/2025/page/4/index.html","c221d6355cef4b33ff3643d16a6535c4"],["/archives/2026/02/index.html","8905984f09908513fcfa1ba4a1af365e"],["/archives/2026/index.html","2ef6b4d9217d90e7796bb8450dde6b27"],["/archives/2925/01/index.html","50fab9a996a0edaff500cc6f2578fb4b"],["/archives/2925/index.html","7aa10b0ed0f9112e2d5ad6d0c1aef5e5"],["/archives/index.html","287d87d55b94703426e7f078ba77d35c"],["/archives/page/2/index.html","86b7fc3516d8009e4ac37e15a4e5a582"],["/archives/page/3/index.html","bf4781bfbd8e2e7b7c3794ab6ab803e0"],["/archives/page/4/index.html","c6138c67535e33b22179c447afc0d13f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","73e3f12f931164b733a841184cc2e6f5"],["/categories/galgame/page/2/index.html","1db2bcedbe346908a8bbda53b61fd988"],["/categories/公告/index.html","9d4755b04cf14a5e7df9bf1d0f3725e0"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","53680b4819824ca1c399aa7b4d92db8a"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","cc789f35b68d70713e814de6a5bc46a2"],["/page/2/index.html","decf2091e6b68922dbd14d38be96c100"],["/page/3/index.html","43ef76a322fbd444c1f824d1889e5ae8"],["/page/4/index.html","de9a58aee8334d7c7e302a1b889087b8"],["/posts/10c9dd98.html","a1856f2e13c3e1445a14b51e0f50fe79"],["/posts/15ef14c2.html","024ac84da113afe02d4f9c6128c60896"],["/posts/15f3959d.html","cb110711a31af077be8ac44725a9342a"],["/posts/1d59b71f.html","5f9629e44cd0b6cdc822b924a31f3743"],["/posts/2cf620f0.html","6679d061d71a96daf199fb47cc5a583f"],["/posts/303007ad.html","1efb2e130018e7b963fb139c0cdfb65a"],["/posts/3f7d823a.html","17d0195f4ebb8c86f29daa6fdadc8417"],["/posts/44124a6b.html","e8bd05bc23f664167f0a9c81f71ccdf5"],["/posts/4b689be3.html","4c977fe1ad0dcca30ae960b4e0293bc2"],["/posts/4cf8423f.html","5def2b09f028e715dece7d3e6fb497db"],["/posts/4dcf85c.html","fa34e9495dd019c2ed303745588e0333"],["/posts/51c9b1ff.html","b28309c28d20a95ce27a20af3511f9b5"],["/posts/52b5b3c6.html","fdd1f30051be5d97618056bfed4af5de"],["/posts/6515f032.html","8b86061ba36f9ad0d01e7e259092a010"],["/posts/71131d34.html","76bf1396688f6bf1b6ee06eac82ea210"],["/posts/78a8a8d3.html","af9532f1471538d5967cef12d3c623f9"],["/posts/7e3aa3e2.html","a5f1d6a48b8bbb2e1ce18c2d761c53d4"],["/posts/80fe2691.html","2fe881eeb1c404bb93bdf3e7ac04a40c"],["/posts/81ac52e9.html","cea512ad66af7628064081efe879de6d"],["/posts/886f8d3.html","4b96d86b143c0cc5026affdaa921a281"],["/posts/8dd520d9.html","4aee5a76f2aeb53a01b8a7927e6fec56"],["/posts/8f555654.html","532bcec8a1a00eca1d56bf509c21b1e1"],["/posts/94d3c794.html","98ac9349d664a586afcddd5741b47e65"],["/posts/97f50eea.html","b7a2bd67baadcae5034345dd5ca8c6c8"],["/posts/98662d05.html","0909f7c8294d628dfdc6c2fd5cf08244"],["/posts/9a2f6162.html","50d3d6866d86928dba913091b1b9bca5"],["/posts/9b22a48d.html","7daadae1329ea9bb6283368109c8ec84"],["/posts/9f61c1a0.html","d811810b792aa66f0483a52490cdb127"],["/posts/b5fb773f.html","f3348ea444ecaa47ab880b6de82d6cdb"],["/posts/c1b2c6c9.html","c535b677fae1b2175e96ae76f5f01006"],["/posts/c497a412.html","543c7226489f042c4b2ffc575779545a"],["/posts/c5de299a.html","aa4bb1d65c0bff189f0e11e8e04741ab"],["/posts/cbebef2b.html","23676b8fd4ccba6b34a53038aa7847da"],["/posts/ce25023e.html","c3ff420ec1a91474a5ec4e68b9279764"],["/posts/d2fd4837.html","cd225ceb87ea3adc6be400fc9094bd4b"],["/posts/d3a745a8.html","a6fa60611e776cec97ec841a206aef64"],["/posts/ee1ed673.html","586dec44670f950cb96b5d1fa36188c6"],["/sw-register.js","e2cec33c326b510ecc741ee6c95a7a5c"],["/tags/Circle-Mebius/index.html","7bfe2504d56437824cbb6490a65886ce"],["/tags/Omegaの視界/index.html","aa844bf9494e1fbd2e062d0f2cbdeff7"],["/tags/Witch/index.html","d4889f0e8d9da72de4b2fafbae1e6a5f"],["/tags/galgame/index.html","bbbea8eb12c7a5a7603edcbd4ac1ec3e"],["/tags/gal资源/index.html","4b610fb33a18a93156337564c30ebe6c"],["/tags/gal资源/page/2/index.html","958435892165a3845c6c8ff5e5ab4cc9"],["/tags/gal资源/page/3/index.html","544a1bd41a997c72e2705d5175912e60"],["/tags/index.html","ad989f61cf9db98a5bc2083c59e75368"],["/tags/rkr/index.html","58383bb839ae13f50ba9a9f0c02b532d"],["/tags/停产/index.html","1702200842a27c04fc17c2ce4abb4f63"],["/tags/公告/index.html","6cfc46b21cc599b464a1453b4f3958f5"],["/tags/同人/index.html","7935cda1cc0caa0cede7b34b34c9a4c2"],["/tags/水仙/index.html","dd24e461b1feb5531fe8d7c9f0cd58be"],["/tags/猫猫社/index.html","99cfc2930ac4d2ec7126768c9580751a"]];
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
