/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","76bfc242145f6ab0224052145a0efe7c"],["/archives/2024/04/index.html","8076a3ee4d89027d8963d9a651e1bec7"],["/archives/2024/index.html","200bb8b89bc1c19d0454e710e6528254"],["/archives/2025/02/index.html","849c1ad56d8ad4e50c7dcc19141b0c5e"],["/archives/2025/02/page/2/index.html","be3dfd23e08055bff0396c3744a05559"],["/archives/2025/02/page/3/index.html","b0cc2ec0fe286a0e98cf15de2431f99c"],["/archives/2025/02/page/4/index.html","025ce99f270fcbce970d3844a2e752dd"],["/archives/2025/02/page/5/index.html","b6c9448afcbb6c9e4cc5f12564270250"],["/archives/2025/03/index.html","4cf2e49b10cbea76f08bb4a0efcff4d1"],["/archives/2025/09/index.html","fe70ac0d462aa21a4c27f9defa60b538"],["/archives/2025/index.html","2472ddb4c54d9fa196c5fc96f239c801"],["/archives/2025/page/2/index.html","1cbdc4da0ed264b8745bd0a5c5cdf5be"],["/archives/2025/page/3/index.html","e342bae05ca895a8d172af519aedac25"],["/archives/2025/page/4/index.html","84602594db58ee053c5d057df2a1de54"],["/archives/2025/page/5/index.html","056ed03eec856b9016af4402f391dc84"],["/archives/2025/page/6/index.html","75e7d63c3604cc93a08fb00da789d323"],["/archives/2026/02/index.html","7263ede94fac5ca1d313509c73c4c6e9"],["/archives/2026/index.html","6196ce6bccef291d0019e565c84caed9"],["/archives/2925/01/index.html","be4a35ec0edf3bfb6177e77da2b6316b"],["/archives/2925/index.html","76faf7036a6b2ff437ec7494def1d14c"],["/archives/index.html","8c7d0f633c8138f157188df1badcebe4"],["/archives/page/2/index.html","1b5fbc1030ccaae056b9514e8506e3ba"],["/archives/page/3/index.html","24becdcc084fd2cb07b737bbbddc339d"],["/archives/page/4/index.html","7e9fab2e67e24f013480e71dc92cb5e9"],["/archives/page/5/index.html","8c48d1d65554206ffdbb3705e3cd8761"],["/archives/page/6/index.html","f494b6ba0b6d3236143edb98a2e7681e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","e96d45d7f365fbdcdb33e9e390937d93"],["/categories/galgame/page/2/index.html","408a8f32bdc0d09d105a92c67ddd0d54"],["/categories/公告/index.html","b4230c1ce66e46da3d5ffd5597b4482f"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","3029bcb7f7fcc41e6f32f6973ecc1ddf"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","30482c46031fd7d6c6b40ab7be2d9944"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","360469e95256cd98c47ac2b4c48010f1"],["/page/2/index.html","4a4ffd752dab4d38e313b52c0fa7f465"],["/page/3/index.html","a48de4f123e3f53903218bf91fdd52fb"],["/page/4/index.html","fb9c01babeed8afc7ff22bf74f73e1b3"],["/page/5/index.html","cc6edc0b8c6eaaa17bacc8d1989fffc5"],["/page/6/index.html","6f1d2517ae74585d745ac4ae89e55a9a"],["/posts/10c9dd98.html","429024516fb64edfdc91ba968f25fd7b"],["/posts/1370342.html","28fa283bb12d657abcff8f65f8e4e70d"],["/posts/15ef14c2.html","36705a3dcc5835a452f0e97311f2fbe5"],["/posts/15f3959d.html","3b66fa19a90f50df4c70402edd79852a"],["/posts/18ab785d.html","4f8e16e5e245276fda49ae535a3206c4"],["/posts/1d59b71f.html","5349852339d02e8149fa5a8ae71e9361"],["/posts/20b3f3a4.html","9137228092467b13d1032328136ffaa0"],["/posts/28397adc.html","8a38b9eb882afc0ad90d45fd1f4001b1"],["/posts/2cf620f0.html","a140197d40269affe833aae850326289"],["/posts/303007ad.html","98cee718e4956f13c5ff41372696e93b"],["/posts/3f7d823a.html","dd25b6bb13199102b64f42c1210924d9"],["/posts/44124a6b.html","5e4715f501aff4760e7e32b798822aeb"],["/posts/4b689be3.html","c8847d24eabe2376d5e52ce5cb719b4d"],["/posts/4cf8423f.html","c18f0c0b74b332c6ce36a565f4c8d7a6"],["/posts/4dcf85c.html","14c7cbddd4f46f4ce859e39cb4b26cdb"],["/posts/51c9b1ff.html","a190d04405d56b274bfdd0bcb0cc2c0f"],["/posts/52b5b3c6.html","26564029446187f065cbf49a4ad4e4c9"],["/posts/5f6e0c59.html","86188c1922ecb642150468603cd97c55"],["/posts/6432d61a.html","81491385114a23476879ba4d1a79e886"],["/posts/6515f032.html","96cb9410cc067eed5faee950a5a44849"],["/posts/71131d34.html","318df583361467835b6b3a88213ec6af"],["/posts/78a8a8d3.html","3a29cd6de9ef33247bdafaea34e1c55c"],["/posts/7e3aa3e2.html","ee85e6ae018b9c1f1b347b437a1a226f"],["/posts/80fe2691.html","057ea35240d6107774f4c857596d9ca7"],["/posts/81ac52e9.html","de84e0a09124cbde0e5e7bcfaaa09f51"],["/posts/849b40f8.html","d466a30c507e551c7030f324c3c44961"],["/posts/886f8d3.html","c7f97a2132ec0becc944d10b2c38eb28"],["/posts/8dd520d9.html","87219aec3f519f02c8cea3a25fc47e93"],["/posts/8f555654.html","7497d9c95bb8a2555efb5f3b18a1f692"],["/posts/92a980c2.html","09a813a0b7097fdbf8a0fdedfdee20c2"],["/posts/94d3c794.html","19bf63df40e977cef2aceda4ea1516a0"],["/posts/97f50eea.html","c7135b5c3bc97af277eff70be1700eae"],["/posts/98662d05.html","46d009e2896483074063bf48c77179ef"],["/posts/9a2f6162.html","8177748d09ccfa6d98e91f0a239d0afe"],["/posts/9b22a48d.html","b8e90dbd7fad606a76cccd04eaedf491"],["/posts/9cb455b1.html","7a87cedb44a015f5f2fdbfb0f2c8dfe1"],["/posts/9f61c1a0.html","bcd787daa4020288554c51ce13682a52"],["/posts/b497b647.html","b6dbe3f91ed473c725832b9894943803"],["/posts/b5fb773f.html","608d70d067e7023a64f52ea38e69c25b"],["/posts/b8d46b32.html","7a58964851cf9bb2c22c5bc8b6beef32"],["/posts/c1b2c6c9.html","13d1de24e76c4bf6269d6100f666bdf7"],["/posts/c316c2e8.html","c10c7125f71c435c9a2812d45f608797"],["/posts/c497a412.html","585234f887fc65f0df2cbf70b2f5be3b"],["/posts/c5de299a.html","7d676a5e827f6131a841b51a91066b79"],["/posts/c70bba9c.html","d9c73db4a5be737206a7ae2e06c98b6b"],["/posts/cbebef2b.html","f2d873c3c4d1b735f4ddadb5700091f4"],["/posts/ce25023e.html","ab3b5941cfbdbef4db6dc663c5b5ee73"],["/posts/d2fd4837.html","fe13ad1f2f59afba20dc62e0ea6e2a4b"],["/posts/d3a745a8.html","c16379a5a2523268fc9cfeeedc5e7e96"],["/posts/e3ab6ad8.html","dc80f7ec5dcfdb3f1dc8ced6ea555621"],["/posts/e5018da6.html","f0cbe1985345afd8b6663795b74c97da"],["/posts/e624b065.html","6e9a3a0f2f1edfa4e85c402e9f4eeeda"],["/posts/e91abb63.html","fb894ef90eeff4a8d03d6c858a8b8e25"],["/posts/ee1ed673.html","340cbdb6e68830bec7d5c30488ec222e"],["/posts/f230b0fd.html","80dab029851599ef66a23f167c210ced"],["/posts/fc04d0d4.html","f06bd7248351830d8411368f757fb13f"],["/sumire/index.html","3cc6eb08aaaff129fcdef89ab36c8cd3"],["/sw-register.js","8c3a3965cb03cf7b87b26ce4351faee1"],["/tags/CHUNSOFT/index.html","29e0691f7a6b62fff7836a5f76e6f191"],["/tags/Circle-Mebius/index.html","80ac39aa2c23e4e807bfc34f649844f7"],["/tags/Omegaの視界/index.html","44db8ed6e5b051076d165f46d394ffa3"],["/tags/PC88/index.html","13c791fef167b44e86ecc64fb0af3ec8"],["/tags/Witch/index.html","71f00687400b0b776db98320685b377c"],["/tags/galgame/index.html","bc76ffb21033df733a26b697f362181c"],["/tags/galgame/page/2/index.html","f08c4681be04f15c8fd38895821b988c"],["/tags/gal资源/index.html","45403fdeabc529f7aa032d03351fcf76"],["/tags/gal资源/page/2/index.html","f1209fa9dd4cbbf089f13d0aa58bf2ce"],["/tags/gal资源/page/3/index.html","11e5fe3bc9983c6ac000fa34ff6a4df6"],["/tags/gal资源/page/4/index.html","eb20611b08fe49110f1fbe242da7bc72"],["/tags/index.html","6d03c570d9623dffc37d1528572a3c00"],["/tags/rkr/index.html","c440c7365337c4cbbe7499ecff183cc1"],["/tags/ねこねこソフト/index.html","a4939f43fce226ba92c44de23eac763c"],["/tags/ねこバナナ/index.html","a7f3455dc819af5d02fe93ba4eda6d7e"],["/tags/停产/index.html","6421d57aa42d31c86674a4e69a6714ea"],["/tags/公告/index.html","eb90e954d7da17eb1847c5ff464683be"],["/tags/同人/index.html","7baa37140f89e13392737e7c183f4314"],["/tags/堀井雄二/index.html","a6fb32a564074e9ba93f709219f86c64"],["/tags/已停产/index.html","68746b49bea64aa655347b2408e93dbc"],["/tags/水仙/index.html","f2234a33cf01df2b475682492fad9cd8"],["/tags/片冈智/index.html","05797342f2165dc7c8e8f710dd5339ad"],["/tags/猫猫社/index.html","b19a1b7e1ab6e45725931718a3e73084"],["/tags/画集/index.html","2c6545423640062d90b2d98c115d12e0"],["/tags/閂夜明/index.html","e7bc8e38dc9e87fcc9649f335675e03d"]];
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
