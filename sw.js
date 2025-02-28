/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f4d12caca4d5518cd4d1b2070c89baa7"],["/archives/2024/04/index.html","70b152016163d7b4fc2afbbc988c93e2"],["/archives/2024/index.html","ac93bd2eba49851ffd83aee1f007862f"],["/archives/2025/02/index.html","07ef381bfb47b0a978077ffd20495d4a"],["/archives/2025/02/page/2/index.html","4d7fa3adfd8db7d379af32c8f866a319"],["/archives/2025/02/page/3/index.html","5184a1f9025e253fbf76f7115faba58a"],["/archives/2025/02/page/4/index.html","825bf4e690376bd899d23fb2ab619b2e"],["/archives/2025/02/page/5/index.html","01db31edc2b63130b94f9d07393b852b"],["/archives/2025/09/index.html","e0b9b92545cb45c718dcb850a74e4f2e"],["/archives/2025/index.html","2cbd51126d8eca300d88f5b2b7503af2"],["/archives/2025/page/2/index.html","2153a83a6470fe9a7e65f21fd841282a"],["/archives/2025/page/3/index.html","bbd495d5b96020ce60b3e89616db9058"],["/archives/2025/page/4/index.html","ade41e9528757973ed4a0fe4b8bd758e"],["/archives/2025/page/5/index.html","736e96cb389e4074da74e9131443f4e5"],["/archives/2025/page/6/index.html","b6a0f939cba671d8d1be71209732418c"],["/archives/2026/02/index.html","8cea67285cb12aeba356adf1b3a20d81"],["/archives/2026/index.html","19e19f46be37b41563af980b27bae3a3"],["/archives/2925/01/index.html","6140ce3c12cb23b0c1cea1d78a02b36f"],["/archives/2925/index.html","0359a2f9b8c86d37305a902f9dfc4ff5"],["/archives/index.html","e8bab86af55f643c3a1686f48199e9af"],["/archives/page/2/index.html","a580e44ccaa9451d005c9fc2842c8db2"],["/archives/page/3/index.html","8cced86e0099e938b15801d97a9657d5"],["/archives/page/4/index.html","87b2fdf5400f79e5dea1818974c7475e"],["/archives/page/5/index.html","0144dfb9b62dbd46974850ec17775195"],["/archives/page/6/index.html","475f6242bbe9db52680724f98e37bc78"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","7a7b79c34d75f2ddf21594d25220a6ee"],["/categories/galgame/page/2/index.html","a32345c5f0c0ec0f2d89390143b22ff3"],["/categories/公告/index.html","1668267cc2f004decfae600a706fad58"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","baee68ec8336f61dc1136550415c6b65"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","bfc6f1f77956e8255b4737d818c1e3c2"],["/page/2/index.html","9be37b521cffddff98ac17a47617baa3"],["/page/3/index.html","acddafc2d6ca00afbd1c4315a917888f"],["/page/4/index.html","908ae9e064accd79e532b959690e7380"],["/page/5/index.html","0aaf8b83e50a38e1028423ee9252f52f"],["/page/6/index.html","6c67d64279f9674f609679f3c5d2eb13"],["/posts/10c9dd98.html","d5acf502e175470842eddc8c2a1596a2"],["/posts/1370342.html","bafc6789b627fb27401b253e3b1d50c2"],["/posts/15ef14c2.html","03d00b1da1cabf643bb845135d262254"],["/posts/15f3959d.html","bb00e01568704b7f7af5c0483a49ad06"],["/posts/18ab785d.html","c9d00f41e3dc4d3a5fa7594aa1c6d270"],["/posts/1d59b71f.html","4fd4714b44d27dad55bfd737302fcc27"],["/posts/20b3f3a4.html","56168c317a5583526596caaca8c8fc60"],["/posts/28397adc.html","19514836f20eeed830efb3ecad038d1b"],["/posts/2cf620f0.html","e9b77e64bd81f19106cb975fd0f105a7"],["/posts/303007ad.html","a8d243e53abe8ae426fb639f344e2954"],["/posts/3f7d823a.html","3b2ec4997cf24683cd7b408c6c42a214"],["/posts/44124a6b.html","84f98b9d03773eb2dbf99d10d7084b1a"],["/posts/4b689be3.html","5f4eeb646621c64bf40f1e74815f5020"],["/posts/4cf8423f.html","9e8970bb73bbd1429a052750d6330fcc"],["/posts/4dcf85c.html","0257dba754df0ade7149e72480616904"],["/posts/51c9b1ff.html","49dfa2f672ca9879f83d923713f2f6a8"],["/posts/52b5b3c6.html","5cabdca2253394610ee15917f5182347"],["/posts/5f6e0c59.html","fa97ab636697beb66a82090b93ae1127"],["/posts/6432d61a.html","a6306dc718448745394bd2e8a7a4ef17"],["/posts/6515f032.html","caf193b423adff0efc00290b5a00af92"],["/posts/71131d34.html","2f9deaa4f26ddc39fbf64f2e85650561"],["/posts/78a8a8d3.html","fe03812b9b7eca2da3e5f78f71ae0dc3"],["/posts/7e3aa3e2.html","07f8ba9ee564020c265fc8f4633c7d61"],["/posts/80fe2691.html","ed70f6cc2fc2af7ec12a11e9a39312a0"],["/posts/81ac52e9.html","ce233001cc8a122ef7534e9adcea3c8f"],["/posts/886f8d3.html","a47da950585d2f36ee7cb60f3602f8f0"],["/posts/8dd520d9.html","5433c276a387894322203fa254e26bfa"],["/posts/8f555654.html","b1d61f4ea47325c9a86bc797e7c75982"],["/posts/92a980c2.html","f6588ef5f51bf6c4481f81e9a7a899e1"],["/posts/94d3c794.html","968e0096f5065f62774307f3b2ff67c2"],["/posts/97f50eea.html","e32a22c78b1c59c39b17f74662b3d244"],["/posts/98662d05.html","0b5a33cc04eb77095859146182e6d243"],["/posts/9a2f6162.html","ac8508619a276956a1347e108fe1b7cb"],["/posts/9b22a48d.html","ac2719d6616465fbb817cf73307faf30"],["/posts/9cb455b1.html","bd99c6336bf227b69c1c373b08c58c8c"],["/posts/9f61c1a0.html","768e6b5a163c20f7a2cdb65880935725"],["/posts/b497b647.html","d442d8e2808c83d669db18fcd3d06b12"],["/posts/b5fb773f.html","bfcc75750dbc2f0c776223e48cf3eff8"],["/posts/b8d46b32.html","7a696ceedd9dcffe19eab13a50e571ee"],["/posts/c1b2c6c9.html","a2708edbcea4ff42475fd7c57b02c883"],["/posts/c316c2e8.html","bfbb5d4f18f392c94b0bfe4a8fac4e7a"],["/posts/c497a412.html","587827761b4f6d5ce5def1350e08e153"],["/posts/c5de299a.html","c2cb15d897612a269e14964c15a2b8f4"],["/posts/c70bba9c.html","b2f0258efa139049f0daaf4ddcae34a1"],["/posts/cbebef2b.html","f81116fda975ae6a2e245e9c90b51910"],["/posts/ce25023e.html","d71efb0c63d380bb62fc8b3db3c2bbf0"],["/posts/d2fd4837.html","e9e715d4a735ceae9a03940bf655ab14"],["/posts/d3a745a8.html","c07a9b233b200425725d4a9c7751b666"],["/posts/e3ab6ad8.html","ebcbd8db0a0643d9fa4bd42b6cd5a779"],["/posts/e5018da6.html","f42052880cc27e5ab0f2251463073b22"],["/posts/e91abb63.html","619890dba3445e2763ac8cdece01b438"],["/posts/ee1ed673.html","c02a5f8d839c8bb2808eb7e5132939cd"],["/posts/f230b0fd.html","dff217faccd47cc2ed757d5d3dd5bba1"],["/posts/fc04d0d4.html","baa2f01a587398578c0e2df8eb563938"],["/sumire/index.html","a96e0bb881733a895f4063683978be54"],["/sw-register.js","3c90c3d3da9cd5719e670d82f0847067"],["/tags/CHUNSOFT/index.html","1720d6e315624962f9b5db4a3d1eaf3d"],["/tags/Circle-Mebius/index.html","f09038b6cfe1ccafcb2d4346f1b930d8"],["/tags/Omegaの視界/index.html","967b9209cc50369f8903eed0760cfb7f"],["/tags/PC88/index.html","ca1d7624e57b9a08ed3a2da09a82a572"],["/tags/Witch/index.html","22048a5c9110c80a6cc0551192cc62c9"],["/tags/galgame/index.html","c0bd33f57216bfc59233c27bb1a07775"],["/tags/galgame/page/2/index.html","943bf93ff7d1466b33c81a29459249a9"],["/tags/gal资源/index.html","0b62ba9ced744656b2e71fc7d6d81315"],["/tags/gal资源/page/2/index.html","f2a864f5cccca910384b6342961972a9"],["/tags/gal资源/page/3/index.html","ed48001e1706c92e4a2e93be3d8727ba"],["/tags/index.html","f88cbea4cde50da15865159440b2e721"],["/tags/rkr/index.html","2839c3a12467013872155a6217554eea"],["/tags/ねこねこソフト/index.html","129f2b28fe5106670f6c4ab2eba6aeab"],["/tags/ねこバナナ/index.html","0e278fc9c6ce683976951ffb93c40ae9"],["/tags/停产/index.html","f1d7180b71f4ebfaebc3622761ed81e6"],["/tags/公告/index.html","d8864d687d7ce270ac3f21e8a8e4c125"],["/tags/同人/index.html","a1b69c0eb1e0db8f7c58bbf68d5fab8c"],["/tags/堀井雄二/index.html","9ac2d22fb384d3ed240176c1afb34626"],["/tags/已停产/index.html","c37ffe9fd1294572553554ea08b8c964"],["/tags/水仙/index.html","d3a02b8192fd9329626e70dbd0ffc4a2"],["/tags/片冈智/index.html","89090435f7c0eeb564921084c8830c22"],["/tags/猫猫社/index.html","7b417e3ef23fb9806094bc1ba6598801"],["/tags/画集/index.html","723806337fc27f4c7ca048c87bec7d16"],["/tags/閂夜明/index.html","3143edab3f37bc3f15cc0c513d9536b6"]];
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
