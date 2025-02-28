/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","efe683c4cb40d799c20f62a18f01abe0"],["/archives/2024/04/index.html","4484811ca7dcda41b4d79909227ab15a"],["/archives/2024/index.html","8ed327696c1e2d443e76f5a7783899b4"],["/archives/2025/02/index.html","bb45c8767c3af1a5dac151217708d003"],["/archives/2025/02/page/2/index.html","01a07859b744d743b8199ff1d9b3c732"],["/archives/2025/02/page/3/index.html","cd71ed928ae0895abab2d7b17024dd15"],["/archives/2025/02/page/4/index.html","66970318d4078f1913237a9b7c67f05d"],["/archives/2025/02/page/5/index.html","10fb15709012f97f32dcc71c640e78c6"],["/archives/2025/09/index.html","87290aaf6e6cdfa7739d6fa74b8f943f"],["/archives/2025/index.html","fc9231bec64f12544e62366430b84e3e"],["/archives/2025/page/2/index.html","d2a3e87a97520f7990e99b671cb96ce9"],["/archives/2025/page/3/index.html","8ded7793d55dc2a5ef092a038bdce6eb"],["/archives/2025/page/4/index.html","9073519717a3253d71ccb5c4a36597b8"],["/archives/2025/page/5/index.html","d220f851f40b9fe0ce66218f18875ac7"],["/archives/2025/page/6/index.html","a312443ff1e7967cda6af90df332a978"],["/archives/2026/02/index.html","b88d4764cfaf414c2fb682c1689e5aae"],["/archives/2026/index.html","00d792d8a22e236a5ceb7fc90b40c4da"],["/archives/2925/01/index.html","2e5df23084d4455f829fac32239d1f32"],["/archives/2925/index.html","28a3104f372fb31f9ec34de8c134baa6"],["/archives/index.html","45e78b5a999ddc5c263b6b7704fefc4a"],["/archives/page/2/index.html","1dac7ba56af798192679fbc14901c772"],["/archives/page/3/index.html","3fe28e53ac6d3944ce5c42330d3ae954"],["/archives/page/4/index.html","d87cbcbb794e9cce9b610a632ed6a6a2"],["/archives/page/5/index.html","038d5addf34c75a9fe3718d42db320a4"],["/archives/page/6/index.html","514b737ef8d8a856382511e1db5dbd08"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","e82993e0f7368cb0f1a8931388f1d760"],["/categories/galgame/page/2/index.html","5f93a674bef097eca457834cd51a1212"],["/categories/公告/index.html","ee51dfe4a156c2713a2e4b3009a70d0d"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","6899eb7e9f35a957f22c8606f933e034"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","a82115dc3813dcb6d296168fe02ba67c"],["/page/2/index.html","4c5e0b51d388e0fd617713d6106b6bec"],["/page/3/index.html","4bf0557dc386a15cc60787201d987549"],["/page/4/index.html","d94f4e3749ed9ac0fedb159b93cf2b0c"],["/page/5/index.html","2cdafab93c3d9238ff3d9c252f9031ff"],["/page/6/index.html","e06f5746515687fef40ed2a59be58f19"],["/posts/10c9dd98.html","179b6f84bcb68e810a76bb8f75e5040e"],["/posts/1370342.html","521705b8add4cd1fdf373483165e3d9d"],["/posts/15ef14c2.html","6870a1608cb15d2d7064371a5a6d6ab1"],["/posts/15f3959d.html","d9b323d24ee6dc61a08db938550e06c6"],["/posts/18ab785d.html","00e76cde1f88c29ae6a61745db1bdacb"],["/posts/1d59b71f.html","583c7422b6d23a9bad89c9b69b15982b"],["/posts/20b3f3a4.html","e35bfa4c7adaabdfb9c56f3edcd2f1a7"],["/posts/28397adc.html","c00025bcb1ec509cbbfd6f1766d60ab7"],["/posts/2cf620f0.html","e053aab3d2a77afe3b74e22e029574cb"],["/posts/303007ad.html","dd9fb8fa64b2eff5b9ae8d09606ec23e"],["/posts/3f7d823a.html","7dffe05bbbfc3e3ee3b6cb1eac004ca4"],["/posts/44124a6b.html","1691a34022f8d7ff115135354699423b"],["/posts/4b689be3.html","8fc371dd1fca43f16276d91796d8737b"],["/posts/4cf8423f.html","101a7efbf40350629234c3ed2ca1293f"],["/posts/4dcf85c.html","8de45d93074d450478b5bc312f5d9e7a"],["/posts/51c9b1ff.html","c3949e9a48149f18edbaed1e30c3776f"],["/posts/52b5b3c6.html","2fca88a5fa8ea3ff7bd333648c4ac27c"],["/posts/5f6e0c59.html","b8ed641b47b83149c805edcb00804d74"],["/posts/6432d61a.html","a502f880419c000c9a35d5c2bf23ceaa"],["/posts/6515f032.html","88011f369b6c84c568e7d9cb0a4b8025"],["/posts/71131d34.html","2e2447ce205d589c2fb5d42d32f71b95"],["/posts/78a8a8d3.html","2059445edf3eb7c3673b5e4a0069a4be"],["/posts/7e3aa3e2.html","228059b6ded414660f47abc8a075af62"],["/posts/80fe2691.html","d611934005e83b35794103e92354f8f5"],["/posts/81ac52e9.html","d32088449e18d74fdea6683524a48faf"],["/posts/886f8d3.html","f9229d17ec9b9b8cf2301975386365d0"],["/posts/8dd520d9.html","538e33e5cd70fdcb69a6610a17deaabc"],["/posts/8f555654.html","83bd93eb922db97284e76de61cc8c052"],["/posts/92a980c2.html","f68416747fb2b0c2b9ab836dbfce0a22"],["/posts/94d3c794.html","64a4d5bb919160e9b5d9a205050d957e"],["/posts/97f50eea.html","a78efe91746d5e52a24943bd0a5d790a"],["/posts/98662d05.html","ef95e1e4b7548dde04b70fea3748093c"],["/posts/9a2f6162.html","0b73dc8c0ab0f8f4ac716c7f50a25787"],["/posts/9b22a48d.html","394b1be3bfb869d7f80271b2f6167ac0"],["/posts/9f61c1a0.html","fdbb9cfc2718e03262cf221b62828164"],["/posts/b497b647.html","96d1ef04c01747a5825090ebcbbd1bf1"],["/posts/b5fb773f.html","5943a93e3e583c42c96a67204842d701"],["/posts/b8d46b32.html","884c0739970d548797efc34744f9e0e3"],["/posts/c1b2c6c9.html","af547a69b264edc4fa51f5ec85b06f91"],["/posts/c316c2e8.html","48b6881cb9773fd3fb53a678bf74951e"],["/posts/c497a412.html","7300eddb7a3624f6337ea44ad12e694f"],["/posts/c5de299a.html","bf84f1bd089c5e62729d20a7d975feb2"],["/posts/c70bba9c.html","4ca49e7a4413cf7869fdedc3ba90b208"],["/posts/cbebef2b.html","14a57768bd1134528d06b4b3b85aa938"],["/posts/ce25023e.html","32c63a85dee089efad3e9e5266c267e9"],["/posts/d2fd4837.html","4c2d4a2adbfff62b863d7a95706351bc"],["/posts/d3a745a8.html","741a1f1d5b1a8758074cb17cbf71488e"],["/posts/e3ab6ad8.html","afa2051a7e08043e694a4cecac218a05"],["/posts/e5018da6.html","edc7cd3afba5780dbeda7ba34604a52b"],["/posts/e91abb63.html","bec2b57384f4bf8819d3b7ba8818ec71"],["/posts/ee1ed673.html","f97252ad5ea65121c9e8827dbbc4350b"],["/posts/f230b0fd.html","d2bb1739416a902bb2b3922ea995eda6"],["/posts/fc04d0d4.html","565853c00afa1a4f4a2ce4d31aed15a0"],["/sumire/index.html","68b64efe40a833faa0e43cac8f90939c"],["/sw-register.js","3120f7a1fab5e04955e02d850485298c"],["/tags/CHUNSOFT/index.html","1e8f1b3b5c221df5abf80f3b33306e04"],["/tags/Circle-Mebius/index.html","d030c979e7f06d4d2b94d2d46ee1b62a"],["/tags/Omegaの視界/index.html","cb62afe73a06f10b1328759ecd55da2a"],["/tags/PC88/index.html","b11ab07713ab56b6a3b6b357f2c022df"],["/tags/Witch/index.html","88ff4660c8390e429d5ee83a3766a3aa"],["/tags/galgame/index.html","2b03b2a6fe2c2fcfcee4849cd84c94b1"],["/tags/galgame/page/2/index.html","f109cfa72df1e38ebf02fcf544b759b8"],["/tags/gal资源/index.html","8d6288d445c7c02cadf32c17ce96088e"],["/tags/gal资源/page/2/index.html","d51060bf4ee9f7aa3b9646bc1f12d945"],["/tags/gal资源/page/3/index.html","616a00f93546cfe0d204875e87ac4c31"],["/tags/index.html","d0076e6ba68234a497324bd505d2ccb4"],["/tags/rkr/index.html","7bd721a2ae9844ba34ccd8a6ff4bd256"],["/tags/ねこねこソフト/index.html","498dcf8effc94096db4f6ee4c92ae11f"],["/tags/ねこバナナ/index.html","fd0167cfb9c9e793eddf22d60e145b60"],["/tags/停产/index.html","bf1f5ba7777f153572ccabe1950a3c58"],["/tags/公告/index.html","743bdb6a1a0c6162e4775fab67cfb352"],["/tags/同人/index.html","594ed9d99eed2f45bfb02129e25e373e"],["/tags/堀井雄二/index.html","4021e90d75022f5a21b44b54f587661d"],["/tags/已停产/index.html","f54504f6772993478932b7527fc3c7b2"],["/tags/水仙/index.html","fa03657f319eb60f83a8815e20574dc0"],["/tags/片冈智/index.html","0d3a623798f1393aa4f7cf53f15ca3ea"],["/tags/猫猫社/index.html","b8d4dc5cf814e50ce06d71d45af76c51"],["/tags/画集/index.html","707addd2b78dd1b166a641eac4332c40"],["/tags/閂夜明/index.html","99a6b42cee9ee4fc20721f69f1a52d1c"]];
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
