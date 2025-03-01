/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","703fd1b06c5430bc369843bfe8ab9b61"],["/archives/2024/04/index.html","65f9ba7063972362c62d2e7e391d1144"],["/archives/2024/index.html","edd6bc3a328c16e9db54f77562249cc6"],["/archives/2025/02/index.html","44a02caeb4b7ae856e3f821e2fe735d8"],["/archives/2025/02/page/2/index.html","a0ce851caf2adff8b158d70fa6411b97"],["/archives/2025/02/page/3/index.html","2d113024a7dd0cca467a71ffb692b147"],["/archives/2025/02/page/4/index.html","a7f792b1573cd855ed9df27030238149"],["/archives/2025/02/page/5/index.html","0bc09bf6fcc34e5014d019361604de40"],["/archives/2025/09/index.html","1f17e9ba671e04638b238df6fd5d6e77"],["/archives/2025/index.html","5f7fb0639f4acefe0db55c2d33c294e9"],["/archives/2025/page/2/index.html","93012dfe374338f10050d898709a00d2"],["/archives/2025/page/3/index.html","b9a0f030854c8ff6bfb22b3cfb248049"],["/archives/2025/page/4/index.html","901b6e485963ccd61542d0c3493b786b"],["/archives/2025/page/5/index.html","2cc4fb7fd6f5a0ac0938090a6195a387"],["/archives/2025/page/6/index.html","3b5676f4678b02363daa0ad1872c538d"],["/archives/2026/02/index.html","2b955673325f9ff9c92e60188c7c8984"],["/archives/2026/index.html","15766a3fb8979f5dc9da886534cf645a"],["/archives/2925/01/index.html","d2424c1c50ed6ff5522097ec25eaa419"],["/archives/2925/index.html","575a00d0fdf587159df9a676a6f07126"],["/archives/index.html","8bfad0e50f63dbcfb89b54709e19d970"],["/archives/page/2/index.html","188b31e00bb15c28a30c6a044dae6c09"],["/archives/page/3/index.html","05a92bf171347f7ab848f16cb674c65a"],["/archives/page/4/index.html","11d987002cda2d628019edb113bad1c6"],["/archives/page/5/index.html","b5e085fa90d3ae223d607914d3861bf4"],["/archives/page/6/index.html","bf57b262d7ba82d97514fc0d2da18c75"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","512cfd7b52a9164f4d079c3a48d8abf2"],["/categories/galgame/page/2/index.html","e1bcb53192e780d8504b3b1908df44a1"],["/categories/公告/index.html","2f5e00166d31bce12783d50bb0f4fe36"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","c917fddde4dca9823d065fafd81524a4"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","957f5180b47f593aae8eb951de4ee390"],["/page/2/index.html","7ab6d11aeed4c292f11018150664fa7f"],["/page/3/index.html","71105661ed08a6d6f098e66092171888"],["/page/4/index.html","173c23d28e478b62ca422dd4f77529d5"],["/page/5/index.html","56f153c3d7233ca38dfe6c14db90e1ea"],["/page/6/index.html","e62c54fbe4c41600c7f311f3b8e2b41d"],["/posts/10c9dd98.html","848e67959421100f004628e5120f5522"],["/posts/1370342.html","826254b936b9526d3e30028dc5653dc4"],["/posts/15ef14c2.html","03d00b1da1cabf643bb845135d262254"],["/posts/15f3959d.html","190055b19e9f06550c9b8d168a2b03db"],["/posts/18ab785d.html","c9d00f41e3dc4d3a5fa7594aa1c6d270"],["/posts/1d59b71f.html","bf192ba136c2b65b9a2f3846e32398b6"],["/posts/20b3f3a4.html","ba1cda069d94be69036927d056ab4bde"],["/posts/28397adc.html","b6450ac0ca60c516d74a843c4cd53566"],["/posts/2cf620f0.html","81b9d334541269c5878f9b8f33d4f678"],["/posts/303007ad.html","a8d243e53abe8ae426fb639f344e2954"],["/posts/3f7d823a.html","3b2ec4997cf24683cd7b408c6c42a214"],["/posts/44124a6b.html","84f98b9d03773eb2dbf99d10d7084b1a"],["/posts/4b689be3.html","75d8ddc52d288d74c08add6ae607a4aa"],["/posts/4cf8423f.html","6afb563209e5ad8f73f4077c9e935bb3"],["/posts/4dcf85c.html","8fd14e0ae1cc02f9407cd5fcb36ea054"],["/posts/51c9b1ff.html","49dfa2f672ca9879f83d923713f2f6a8"],["/posts/52b5b3c6.html","47046e5e6c8047fff011f0662e42c30c"],["/posts/5f6e0c59.html","f696d4c7de534475c8c8361dfb49cb09"],["/posts/6432d61a.html","a6306dc718448745394bd2e8a7a4ef17"],["/posts/6515f032.html","3764e4a4dbdebf8b1e3111e41942f12f"],["/posts/71131d34.html","2f9deaa4f26ddc39fbf64f2e85650561"],["/posts/78a8a8d3.html","fe03812b9b7eca2da3e5f78f71ae0dc3"],["/posts/7e3aa3e2.html","e0fab5202526913a00046d46507b5076"],["/posts/80fe2691.html","51b225cb6e0d6d6be4f3d278e134ca6d"],["/posts/81ac52e9.html","c2d92216d5e85ff1c10d16299386363a"],["/posts/886f8d3.html","9f797b0923f2c8a482f5be6373653bb3"],["/posts/8dd520d9.html","5433c276a387894322203fa254e26bfa"],["/posts/8f555654.html","517684e3db33bc89686329b3c8bfa5cb"],["/posts/92a980c2.html","f6588ef5f51bf6c4481f81e9a7a899e1"],["/posts/94d3c794.html","968e0096f5065f62774307f3b2ff67c2"],["/posts/97f50eea.html","e32a22c78b1c59c39b17f74662b3d244"],["/posts/98662d05.html","8b10865e1423c2a6929a417c31f6c4be"],["/posts/9a2f6162.html","ac8508619a276956a1347e108fe1b7cb"],["/posts/9b22a48d.html","ac2719d6616465fbb817cf73307faf30"],["/posts/9cb455b1.html","47b7a8b51ca237e983f4137f300784af"],["/posts/9f61c1a0.html","768e6b5a163c20f7a2cdb65880935725"],["/posts/b497b647.html","49aaafbd03c97454621ed3f982e1859f"],["/posts/b5fb773f.html","255bd12a91c2d2b55d27f480adcb0c3b"],["/posts/b8d46b32.html","7a696ceedd9dcffe19eab13a50e571ee"],["/posts/c1b2c6c9.html","a2708edbcea4ff42475fd7c57b02c883"],["/posts/c316c2e8.html","464e815df3d45ad238ca673c8488b3e1"],["/posts/c497a412.html","f5abf6381df9b138fd471fd7aea8ec4b"],["/posts/c5de299a.html","c2cb15d897612a269e14964c15a2b8f4"],["/posts/c70bba9c.html","b2f0258efa139049f0daaf4ddcae34a1"],["/posts/cbebef2b.html","1f96993f06525aaa1217bb54681f0e02"],["/posts/ce25023e.html","69ede95e01f8a0b2714fe0b65d18e1ee"],["/posts/d2fd4837.html","0548fb4e5a184a72a90c1b46572b0e79"],["/posts/d3a745a8.html","cfb8bd58712a850f71561895d3610a36"],["/posts/e3ab6ad8.html","ebcbd8db0a0643d9fa4bd42b6cd5a779"],["/posts/e5018da6.html","6ff16eff4ace489b86296e0ea4fceeae"],["/posts/e91abb63.html","cffe3d5658fab3f7f4ce91f90a97d1d8"],["/posts/ee1ed673.html","c02a5f8d839c8bb2808eb7e5132939cd"],["/posts/f230b0fd.html","bed341e3ed882a7363b84543628c630f"],["/posts/fc04d0d4.html","baa2f01a587398578c0e2df8eb563938"],["/sumire/index.html","a369373c7b22654791062ca960fc2a8f"],["/sw-register.js","33a9ffa8a97ddee252c0a99a85d5bece"],["/tags/CHUNSOFT/index.html","4b09a749f3f96dbd99b4528b7f5a919c"],["/tags/Circle-Mebius/index.html","32fcb9d97572cc7a907b3cc61d54e796"],["/tags/Omegaの視界/index.html","97e5b257039f8dd2bc9ece9a370d5e02"],["/tags/PC88/index.html","e34f57dea504a361838a8ee6d08c2e10"],["/tags/Witch/index.html","b49fc2408dc1514a0a10920a1d366fb1"],["/tags/galgame/index.html","d8c42c804c801e564b0c52ae6c96f138"],["/tags/galgame/page/2/index.html","0a770a7f241298ca420404bee77311ce"],["/tags/gal资源/index.html","8c6d507e6136be8ffae2ad3fe067f326"],["/tags/gal资源/page/2/index.html","03283776afbbe3bdc88046ba63223d93"],["/tags/gal资源/page/3/index.html","f9be7463383a1e4407801bcbdd0864ce"],["/tags/index.html","22f56d5cc844c2c80cf0d85a965a6886"],["/tags/rkr/index.html","a3290973143d471a56447c3b44abc0d3"],["/tags/ねこねこソフト/index.html","5a6f83b2c8d84b317560fe04c4f81e88"],["/tags/ねこバナナ/index.html","80b7e0842afdc04c0d03b3aa1ef3f6d1"],["/tags/停产/index.html","cbde02fc1e73995721e91cfcc005dbb4"],["/tags/公告/index.html","2138cdf1c85cbd6190524d6e9ceb9c05"],["/tags/同人/index.html","8a46630a0438f70d3c46c00f78a23215"],["/tags/堀井雄二/index.html","4099c728613e8162d9f04a6f5dbc070d"],["/tags/已停产/index.html","b9461c1c22ce14577fd9ba87678154bc"],["/tags/水仙/index.html","2912d840e131b19ddb6d8f0340352127"],["/tags/片冈智/index.html","46b97e2449d1947e0d33f6b8d7cab46a"],["/tags/猫猫社/index.html","6cf2f08a12d1e3ec71f87d374932e976"],["/tags/画集/index.html","6be71aa740059e7f07b92e0b7f2f71e1"],["/tags/閂夜明/index.html","b3cdf9df481cb71afcf64bc233e13da7"]];
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
