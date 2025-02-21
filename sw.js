/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","08ce0ac788915df7b50b00119d19f0e9"],["/archives/2024/04/index.html","0abca65275f7c03d75fbfb15fcad6fb6"],["/archives/2024/index.html","a3e757df9cf941a85dc6810d314154f9"],["/archives/2025/02/index.html","b228be6526ef4f37fae0da843969686f"],["/archives/2025/02/page/2/index.html","7e385f8da5b0389a0ffe0301fbac895c"],["/archives/2025/02/page/3/index.html","d56d5945a1919cf615dd6833e8823cef"],["/archives/2025/02/page/4/index.html","35ce726f5fd57d49b27f297aeae86826"],["/archives/2025/02/page/5/index.html","79a989edde6fee602bc381b689800bc0"],["/archives/2025/09/index.html","bd9222657fa05b3a286600e174944860"],["/archives/2025/index.html","d478d1d9c539779c890d09ce5e8d1a1e"],["/archives/2025/page/2/index.html","26f26d38cb98d5550df41b483faabc6c"],["/archives/2025/page/3/index.html","c1c478b5e6b826c0dbb96ce7defeb5ac"],["/archives/2025/page/4/index.html","1ae57d2ae0aaba299f14f2bebb1171f0"],["/archives/2025/page/5/index.html","4d6384accf74b6fc2ed10b7b827c76f9"],["/archives/2026/02/index.html","de43dca86c2840feaae1b21ddc92e885"],["/archives/2026/index.html","e7d49d1700214c7d4990400ca1c95979"],["/archives/2925/01/index.html","3628c7eec7210e153c15e8a85e7ec0ce"],["/archives/2925/index.html","376dfafcf71ffa22a41c5c60cd1ef336"],["/archives/index.html","5409d28187e340a1395aff5499109ce0"],["/archives/page/2/index.html","7fc2a659fe9dbc48a5bec9da8bab240b"],["/archives/page/3/index.html","87a65199341ff57fef61d90bb17e2ade"],["/archives/page/4/index.html","728588e29d420dbde5bc3a518ecf13ef"],["/archives/page/5/index.html","9f0758d3a0e27a801b406dfdf207ee6b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","fe46253e90facf477366926400104428"],["/categories/galgame/page/2/index.html","1f8c5b289421f32229843edaffda1f10"],["/categories/公告/index.html","87bf6cde45c971fb60205ccdc36a7109"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","f66824bd370af56eead5561e108182a9"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","c48a3d9dbe7e081cbb8432a156adf81b"],["/page/2/index.html","a3ff1e0ccf0b95a825edc3195a1c6f80"],["/page/3/index.html","3f681fd32f3aa8cf406bf3940a1ab917"],["/page/4/index.html","56ea21364b2074fd7f6505f2aab7cc6a"],["/page/5/index.html","194fd323ff536b2d654d6f13566a0b66"],["/posts/10c9dd98.html","b1ccab19dbf58f6939d2f717bfbc49a3"],["/posts/1370342.html","10db9c7b7767fbaaae15a73eac3e41d9"],["/posts/15ef14c2.html","3f2bf149a27c430ee19db5cb32a38c8b"],["/posts/15f3959d.html","3d03066ec8490eb8b300bd96cd4996ad"],["/posts/18ab785d.html","adc43dc174db2ebc0b45342260c87af7"],["/posts/1d59b71f.html","8562e458f5125e7025ce2853da1d8513"],["/posts/20b3f3a4.html","fcfe7346f4a59c80470321337d2ddf69"],["/posts/28397adc.html","565c7394284257b642526bcdf06fa86a"],["/posts/2cf620f0.html","0a44ca05c3ca116c0caa13a96d3aa458"],["/posts/303007ad.html","5890063183592610d137128ddd3aba24"],["/posts/3f7d823a.html","59cc5f989d2dd7eb7d13785de6ba10a9"],["/posts/44124a6b.html","37ceaeaf47209d8418b9d6049f685772"],["/posts/4b689be3.html","ee743169c4b175dbe0ef1aded1682644"],["/posts/4cf8423f.html","70bb1a98ac7102af0f364f4fe63b48b4"],["/posts/4dcf85c.html","9ce6ea6e97234f741a1e129f232af5e1"],["/posts/51c9b1ff.html","f4ffaa40a4a7b140ac1b84566f33d0cf"],["/posts/52b5b3c6.html","ac3f97f717930f2f235417cbc65d9057"],["/posts/5f6e0c59.html","a7eb5d11fd369440dec4cd39813c71f1"],["/posts/6515f032.html","c1594c0f38ebe28acfba266525cdb238"],["/posts/71131d34.html","fe4694aa9dfc16c9e5defb8c1a58412b"],["/posts/78a8a8d3.html","e64d5e99cb737f9dfe577fe6138b040f"],["/posts/7e3aa3e2.html","035de44cd570aa98617fcb84b3512aa5"],["/posts/80fe2691.html","9c3c7b60f9e1ac972fe7c701f175b8d6"],["/posts/81ac52e9.html","60208841f2fe2f6dae488cb75310c493"],["/posts/886f8d3.html","36a5a43f46629a03e08e338e55ab9978"],["/posts/8dd520d9.html","f8d421c6082314428a6363e69b9524d8"],["/posts/8f555654.html","1c1d6157aab9cf14feb5ff1d44a933c3"],["/posts/94d3c794.html","d86170a7df0f46bfe2bf2ccd89964bf3"],["/posts/97f50eea.html","a54c66a454a1775e8a52fb6c3889b793"],["/posts/98662d05.html","aabed4e74a0569c4404caeffd42dbf9c"],["/posts/9a2f6162.html","cff8012e5700159bda09b554bb369af8"],["/posts/9b22a48d.html","402501c5f1732e3884158357e4853f4a"],["/posts/9f61c1a0.html","5bbd1c1f0fc634a9409fd2cc6105ce47"],["/posts/b5fb773f.html","da19722d87c8448ed1a393a4a4304ffb"],["/posts/c1b2c6c9.html","70d03fc8338fa709f74231da2ef3d63a"],["/posts/c497a412.html","004c454d2806fbce094ef5afda5a723d"],["/posts/c5de299a.html","13ea100d36e05f2016549f2cfd3bc5b2"],["/posts/c70bba9c.html","fc7fd5f95063ae7fc1b69ab4051a8144"],["/posts/cbebef2b.html","46612ca384b9704e0b14d78d03b804a6"],["/posts/ce25023e.html","4e3391d3451fbe2413a4ce36cb04afd7"],["/posts/d2fd4837.html","e45a25ada257b7da12e5a02b0f881cb7"],["/posts/d3a745a8.html","9bbaa6c40f4ec0212431c4ea635af3ce"],["/posts/e3ab6ad8.html","34438859dc2cdca3ce1f31268517f7f7"],["/posts/e91abb63.html","f071b9308eae5289355035a84c8e77a4"],["/posts/ee1ed673.html","fa5d3ecf1a94eb154f660c5f33799cf5"],["/posts/f230b0fd.html","de7e46a38bf50e8341cf52a54cf2e61c"],["/sumire/index.html","24ec87372088df69079d075d9d128c86"],["/sw-register.js","f478a47d1cc9aaafd5f91147485bbe2b"],["/tags/Circle-Mebius/index.html","5ca67c8579d623a8cc7d72cf46e7218b"],["/tags/Omegaの視界/index.html","a4889e5810477ee83c7914852f760cbc"],["/tags/Witch/index.html","ddfa5cb178dc5a18ad095e78677e7997"],["/tags/galgame/index.html","7c017fc9365f4d693c04cfd333dea3c7"],["/tags/galgame/page/2/index.html","704197f994cdc39e49c30d469cf409ff"],["/tags/gal资源/index.html","e69dc16c54b3a2f086596a4e45edcd6e"],["/tags/gal资源/page/2/index.html","2e7415ef04247179e524553220eceb78"],["/tags/gal资源/page/3/index.html","68071b18131978903f2a8a99fbfe415a"],["/tags/index.html","d27a506017261bb8553cc91f3c2ee789"],["/tags/rkr/index.html","defcfd535ed9a49637b9156ac87180b6"],["/tags/停产/index.html","d9aef12f11df1173df4dedd9bd6e1e4c"],["/tags/公告/index.html","363c4aee725b6593e7cb0a54d97c6072"],["/tags/同人/index.html","5a3ccb8075a3028b0ca809871ef6ae52"],["/tags/已停产/index.html","7d7625f86fbb4b326169aed3145c28b3"],["/tags/水仙/index.html","1f49813713e0d10579ca5fbe2119752e"],["/tags/猫猫社/index.html","93f9c9a80a959942cf9e9c662c9f7ff3"],["/tags/画集/index.html","fe71506488fa69848e148a83799baa1b"]];
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
