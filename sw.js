/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","4442f00c6be4dcaa1acf71e1b91273e9"],["/archives/2024/04/index.html","0bcdf3376911b0c627c42cfcc29e2a81"],["/archives/2024/index.html","23304e9eba1c370da5eb2f1ca03a969a"],["/archives/2025/02/index.html","22157db1394d7897f0e9c0414c25c8cc"],["/archives/2025/02/page/2/index.html","af29bf0756a96d3ec2a8ede3a7964910"],["/archives/2025/02/page/3/index.html","b0d9bd755124eddd0142ab715975a4fe"],["/archives/2025/02/page/4/index.html","2b9184e3d5526bd4f1c250d68a725408"],["/archives/2025/09/index.html","c308c895afc3fdb2d00d7ec2d0d0e6e1"],["/archives/2025/index.html","c0f6d5eed28a2cafd0d3774aeaf2b711"],["/archives/2025/page/2/index.html","eca392af9f32cf28cb6e9c9b57f83cd8"],["/archives/2025/page/3/index.html","3cc67f95885a28cb1c651bd8706ca0d4"],["/archives/2025/page/4/index.html","6239009cf7e56f2784f89245f3387de4"],["/archives/2026/02/index.html","9193346aaa0536320730d3a936f2b29a"],["/archives/2026/index.html","9d02c4e10565f152bb9f77af59cde723"],["/archives/2925/01/index.html","a59f4c334fcf80696416ae7c1b1f5098"],["/archives/2925/index.html","fdbbe0a457e128c17835335d9a09ca98"],["/archives/index.html","39aedb319193ce3a16a683766b369eca"],["/archives/page/2/index.html","02c029739dca874d3cbcf732d46e1155"],["/archives/page/3/index.html","7febcd476170c7a3cced1d97b8a7d23c"],["/archives/page/4/index.html","7e3002e3fd20d556e7e7c2677b8bb23e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","1c9cef10c1a2add94e1d944df4e7f332"],["/categories/galgame/page/2/index.html","9ee0b178bec084f1b6e7d8f3065aa757"],["/categories/公告/index.html","44704aac40c4ccc11ee5b7467524899a"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","149cba226830583ce2ea01d7a8229046"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","2f1818dde99345b06c5d9d50efb191bc"],["/page/2/index.html","a3a6e4804ad6f8bc2641c5935ce4f3c2"],["/page/3/index.html","cec449778056fc0c5d931909658dfdd1"],["/page/4/index.html","1ad92e577a2e61663ad451476947f69e"],["/posts/10c9dd98.html","15286381656c78fd4be509d58d196483"],["/posts/15ef14c2.html","3672cb4e682532db1cacfc03c38b905e"],["/posts/15f3959d.html","e771ee80fd5de5b1fd58622c2b1d4230"],["/posts/1d59b71f.html","6a1538cd7588fe82cc89132dc6dd2a93"],["/posts/28397adc.html","7ec1b8c154663ea51ebbf9fa9b501aee"],["/posts/2cf620f0.html","6aae3afeb8f2698557d384a365f7d4db"],["/posts/303007ad.html","507ba52e8ca475e16b26bde69841f249"],["/posts/3f7d823a.html","33d85dd33c175540ba582728e324a410"],["/posts/44124a6b.html","faa0a6c66fb8096dd60efc25e4b78500"],["/posts/4b689be3.html","17ca893c5f5d6de9983489eb618f3e16"],["/posts/4cf8423f.html","7ecb66713cb0abc76cf83e93fe4de15f"],["/posts/4dcf85c.html","e2180f10f25aefa9b4aba140240d2057"],["/posts/51c9b1ff.html","573bd55f2b5e5d74265920b25e75d307"],["/posts/52b5b3c6.html","2c53db406b207dfc0a24216390265395"],["/posts/6515f032.html","60fbfe9b6fc252bf24ebc96a79c9ba78"],["/posts/71131d34.html","dc16673ed3be9f26eb249d62fd48f725"],["/posts/78a8a8d3.html","1bcda1432336e5c2e0547b9410399249"],["/posts/7e3aa3e2.html","e0a6e0d3af32783068d58fb9152c3d06"],["/posts/80fe2691.html","14f756eb1be6bc3d6fb44ab3cf3484b4"],["/posts/81ac52e9.html","e6f550c60f743cc338a51230d51521e8"],["/posts/886f8d3.html","1a80353c0bf2134961ceda71deb0aab6"],["/posts/8dd520d9.html","4dfd072e9e5b385b36f8bfadae2cde10"],["/posts/8f555654.html","619898f8cf3337c8327362e29bfb0f78"],["/posts/94d3c794.html","762753ab7dcc59fe6ea9cc0b8333e884"],["/posts/97f50eea.html","3892fd7ceb7e440de4fb7078a4e82902"],["/posts/98662d05.html","d9088141090432abd88e1cd5d4f0f9bd"],["/posts/9a2f6162.html","c2352f38e907d128b382a4945d7ca91f"],["/posts/9b22a48d.html","2000c14a0146e63f9c322800aee1da8d"],["/posts/9f61c1a0.html","12a722347c17c3d0d184ee016b5215c3"],["/posts/b5fb773f.html","5ad5d5db63af47d52ea012099b343f3d"],["/posts/c1b2c6c9.html","70d125cb8a4e0d29be1068bfa065a437"],["/posts/c497a412.html","7a63dd62c0d5d42b6eb154cb85249e93"],["/posts/c5de299a.html","cc05586fe97ca3c326722ecc03236a97"],["/posts/c70bba9c.html","6ed20e1f3733953e9e744fc746b0e944"],["/posts/cbebef2b.html","f1990245b06abd92bf25bf8d5eb367cb"],["/posts/ce25023e.html","09c9d053d41c4beb8d3b26c9892dce07"],["/posts/d2fd4837.html","c2a01ba5808759db8c7029bfe3abfba7"],["/posts/d3a745a8.html","af0bdd0df6ea1d2cd9f82cc2b70b5e02"],["/posts/e3ab6ad8.html","d72292e3beb25ef844a2cd78f69a3e0d"],["/posts/ee1ed673.html","3d4f10fcdfaeac30af8ff73bb05ea399"],["/sw-register.js","ce9be28a5335ce1d88a6471bea7c2b0c"],["/tags/Circle-Mebius/index.html","9e4b729288a04bc4772ba0eb6010c278"],["/tags/Omegaの視界/index.html","e279062f83f12495c5ed4033cced604d"],["/tags/Witch/index.html","25d9be51ee99330039af5bf6e025d6a7"],["/tags/galgame/index.html","3417a947f7e05be4341fbd61e541c030"],["/tags/galgame/page/2/index.html","5580e3ad045329df8b90bf444b32dceb"],["/tags/gal资源/index.html","e0c6af0f0918e45a8d82a047d233af01"],["/tags/gal资源/page/2/index.html","f044cc4bff2a92315f2ece3874aa8b39"],["/tags/gal资源/page/3/index.html","9860f28692eb6f01d187fe5e6b6d5244"],["/tags/index.html","740909bb27095e93f4a108a5d64f47a2"],["/tags/rkr/index.html","2d4872990a8e2fcd6473fda0ef8ed811"],["/tags/停产/index.html","e4ae0ab5db21479bdb2a179816ceafa1"],["/tags/公告/index.html","1a565af3fd4cb7b970e99cc82ff79bfa"],["/tags/同人/index.html","e1acf7472f5fb9b94a2545d9f7b8d609"],["/tags/水仙/index.html","d33e9aceec5ddc95ffb3c19dc64244c9"],["/tags/猫猫社/index.html","65af942dbe23bfccc589d9632633bd0e"]];
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
