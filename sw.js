/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a9205e982e52ab7503d1c35d3de66ab7"],["/archives/2024/04/index.html","68bbe449969f582a0b1c176750f80ca7"],["/archives/2024/index.html","f8ae0b62165e20bef79c4de8820a4905"],["/archives/2025/02/index.html","973dd57393b66d4941f237c83b51be74"],["/archives/2025/02/page/2/index.html","e4ec923a9c17783a1fb54983ee4b907f"],["/archives/2025/02/page/3/index.html","01b802134451127d6c872c5ea860b80b"],["/archives/2025/02/page/4/index.html","a4f240432f10ec8dd09bc354b621d7f3"],["/archives/2025/02/page/5/index.html","00ca94c52c1de6817fddb5977a4acbf1"],["/archives/2025/09/index.html","d238c8da9f5f9252943bb7ac6d5104ad"],["/archives/2025/index.html","36e3a9cc64b146906ad9b1d614eb9616"],["/archives/2025/page/2/index.html","526068065932114d833a94b3cf923a55"],["/archives/2025/page/3/index.html","bd9a723059845321cf91873673b819f3"],["/archives/2025/page/4/index.html","4fef4aae9321adc3da58af3decc7e85d"],["/archives/2025/page/5/index.html","459f1fb0513144e4e5e509b1f8224fcd"],["/archives/2025/page/6/index.html","088243a5c23cc1ac967564d27a2df45c"],["/archives/2026/02/index.html","2a0c9ad07819349bad8cde6eac633e1e"],["/archives/2026/index.html","f9ea48ef0cb796e291b67ed8c043dcc5"],["/archives/2925/01/index.html","fea9eb8d9c947229260a6c5379afe95e"],["/archives/2925/index.html","dc4ce72215b13f48c0ec18bfed2ba3b7"],["/archives/index.html","59adc7fecaa749e5c95222e7588e0e67"],["/archives/page/2/index.html","cb40ab7813d56672fe311b81c99f5342"],["/archives/page/3/index.html","f165261a457390ab60af69760a795bd0"],["/archives/page/4/index.html","97ee813a57dd240c37f1e31306244178"],["/archives/page/5/index.html","b85865dd546a01d550ef1d0726ac2e8f"],["/archives/page/6/index.html","429d18b4d16472a12825511bc370fe69"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","736ca9aa17f0adbbb54af101f639d969"],["/categories/galgame/page/2/index.html","d973c0d1534abf947ba1ca8362a61e70"],["/categories/公告/index.html","1b362bceec4b6a746b394dde141051f8"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","dc924b49024b7d6638b0c055ee9b148a"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","7eca4c304c0ff3bcde620880fbb85653"],["/page/2/index.html","09a1133271fe9f6b0243ab25dc1fd5f5"],["/page/3/index.html","ebb6b7abe46a30dc1a6df11ed5f17274"],["/page/4/index.html","b7c0c2530117e1478e0dcfda01e3b499"],["/page/5/index.html","07bca731096118870457a6fd25fd9c80"],["/page/6/index.html","d4e923c326f9aff1cbef48dab5eb9ede"],["/posts/10c9dd98.html","0b0e883bc90d584dafdc147620e47a5f"],["/posts/1370342.html","ebadfd4cacad31408992cd68b3a1326d"],["/posts/15ef14c2.html","03d00b1da1cabf643bb845135d262254"],["/posts/15f3959d.html","a7e946f7e79ab6ac19965872fd52675d"],["/posts/18ab785d.html","c9d00f41e3dc4d3a5fa7594aa1c6d270"],["/posts/1d59b71f.html","1ff9a76891bc4ca34a366c3497dfd33b"],["/posts/20b3f3a4.html","ce98e41f4e6d568faf107351a32131b3"],["/posts/28397adc.html","b6450ac0ca60c516d74a843c4cd53566"],["/posts/2cf620f0.html","c4766a8c155036194bf8a7c6e4c615a0"],["/posts/303007ad.html","a8d243e53abe8ae426fb639f344e2954"],["/posts/3f7d823a.html","3b2ec4997cf24683cd7b408c6c42a214"],["/posts/44124a6b.html","84f98b9d03773eb2dbf99d10d7084b1a"],["/posts/4b689be3.html","81cf9906f1992d2949524c0bf0ada9b6"],["/posts/4cf8423f.html","1dd157cf49338d87ff452f8e40af674d"],["/posts/4dcf85c.html","c68ffeb4eef2ec80e2d519c75c21292a"],["/posts/51c9b1ff.html","f0ce0a0f109037a02e85bc8603c96366"],["/posts/52b5b3c6.html","3a76decff093c014bb7a5ba17ab39c11"],["/posts/5f6e0c59.html","77b51558956d86717db29c4762ad92d9"],["/posts/6432d61a.html","a6306dc718448745394bd2e8a7a4ef17"],["/posts/6515f032.html","0fd487ecc604d8c73bc30d98d80c32a6"],["/posts/71131d34.html","18a55cd1ff0fc46bdca20748872ee1d1"],["/posts/78a8a8d3.html","e47e277a044dcb7d352a251c3a17304a"],["/posts/7e3aa3e2.html","f79c1c05660345d5d29c90df7da4ea69"],["/posts/80fe2691.html","fc448b9a8a7575902535f2ac9da57bb9"],["/posts/81ac52e9.html","c2d92216d5e85ff1c10d16299386363a"],["/posts/886f8d3.html","f22ae67e8ff34ccd59ffdf277d323680"],["/posts/8dd520d9.html","5433c276a387894322203fa254e26bfa"],["/posts/8f555654.html","7e59b9cabe8a8805456b85822f420a26"],["/posts/92a980c2.html","f6588ef5f51bf6c4481f81e9a7a899e1"],["/posts/94d3c794.html","b1182bba5ce72637197ac02b331556b5"],["/posts/97f50eea.html","e32a22c78b1c59c39b17f74662b3d244"],["/posts/98662d05.html","c10758cf734a63b7baa461e22ddcd847"],["/posts/9a2f6162.html","ac8508619a276956a1347e108fe1b7cb"],["/posts/9b22a48d.html","ac2719d6616465fbb817cf73307faf30"],["/posts/9f61c1a0.html","768e6b5a163c20f7a2cdb65880935725"],["/posts/b497b647.html","5dc0628157059bf3f83d7ad43314f772"],["/posts/b5fb773f.html","70d4e3eeac42b6d24c1bab8efc0dd13a"],["/posts/b8d46b32.html","7a696ceedd9dcffe19eab13a50e571ee"],["/posts/c1b2c6c9.html","0d9e3bb160d80a24f3d93b712ec4c6ec"],["/posts/c316c2e8.html","9c603ac4e1a7f9dbd496be1f1bf24f1d"],["/posts/c497a412.html","ee5bf1409610a9c9bf7c91e1161ded51"],["/posts/c5de299a.html","c2cb15d897612a269e14964c15a2b8f4"],["/posts/c70bba9c.html","b2f0258efa139049f0daaf4ddcae34a1"],["/posts/cbebef2b.html","064c8796db63313eef905b5d1260b4b5"],["/posts/ce25023e.html","b35115492e9280b048d8b71852d35acf"],["/posts/d2fd4837.html","4303d5475053107d4156666263e2daee"],["/posts/d3a745a8.html","9d167dce9f0ec7bbc11396bcc10a0518"],["/posts/e3ab6ad8.html","ebcbd8db0a0643d9fa4bd42b6cd5a779"],["/posts/e5018da6.html","f6c47fafbe6cd4d7212449c7cb17403f"],["/posts/e91abb63.html","d47b2fbcb5514f7cb0adad0216fa4102"],["/posts/ee1ed673.html","c02a5f8d839c8bb2808eb7e5132939cd"],["/posts/f230b0fd.html","c57508d9ff92c40d37fd4dc77f6bf9dc"],["/posts/fc04d0d4.html","baa2f01a587398578c0e2df8eb563938"],["/sumire/index.html","bd3e49811046ec88e253576a799a2a66"],["/sw-register.js","adb6fe5c89e2ebad4c5fb569696cd8e1"],["/tags/CHUNSOFT/index.html","6f70c9506c8371ebcd7be2c9f7106f97"],["/tags/Circle-Mebius/index.html","800fafec28d85c8d5c31190657965c5f"],["/tags/Omegaの視界/index.html","7625ce7b02fd6ea327e55f9d25ddfd4e"],["/tags/PC88/index.html","240bcefc850c0890a7109d0ce25659e8"],["/tags/Witch/index.html","2e0417accb3c6412ef3d9b0ec1f03aa9"],["/tags/galgame/index.html","7baf4f752f70c7a895cbcce7cecf384c"],["/tags/galgame/page/2/index.html","2890f9b138aea47619c32fee25f8317a"],["/tags/gal资源/index.html","e3f2d277b1509e68cf95581393e10452"],["/tags/gal资源/page/2/index.html","4274c01c29bf05084dcfa4ed81734edb"],["/tags/gal资源/page/3/index.html","576bff9e0dce196843e571368746b860"],["/tags/index.html","f5a4c6a43693e292bd4218613e2ccdec"],["/tags/rkr/index.html","54b6caac4145bbabbec78c4bba21f209"],["/tags/ねこねこソフト/index.html","99576664a5f88e120fb6d0d28d3f298a"],["/tags/ねこバナナ/index.html","1d6ef7a5d169eae583a6e61832b2d435"],["/tags/停产/index.html","27c15f0f2ddf498f00165139ee6e81aa"],["/tags/公告/index.html","de3eadcd998402855455605747178847"],["/tags/同人/index.html","692e054a669253c40b09ffd7375d2b47"],["/tags/堀井雄二/index.html","edb0d0ca769c340258e4dc26fa550cc6"],["/tags/已停产/index.html","b4efa12fbea8029607b20d78545b3a43"],["/tags/水仙/index.html","422bbface8ebd2bf187452b5c1a88680"],["/tags/片冈智/index.html","48bf4f95e5940f5ec1f053a9ee00f39f"],["/tags/猫猫社/index.html","31a1f263cbc6930f6f00d4a2dfd9ddb3"],["/tags/画集/index.html","52b782319f1e4c3c9fe81eac48a5d9cc"],["/tags/閂夜明/index.html","1092881346df6b99b871414989b4b966"]];
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
