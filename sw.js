/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","27472aa2f23b9fd2f01b9919dda817ff"],["/archives/2024/04/index.html","02d6bd916f9f99f6f2d51f3c359eba18"],["/archives/2024/index.html","a5762cff960ef5d355cb3996b6030746"],["/archives/2025/02/index.html","5e8a87f0cc300cd3f660339555e9a314"],["/archives/2025/02/page/2/index.html","f30ccf41f58c7f3cf3736df4336194bf"],["/archives/2025/02/page/3/index.html","5e2fe1e9c6b248da9eb544953379238e"],["/archives/2025/02/page/4/index.html","ce5b5ba55f53e92aa774d3cb0eb8c056"],["/archives/2025/02/page/5/index.html","1f21998382c90603d1316076eab7ab93"],["/archives/2025/09/index.html","f4ec83731bc12aeb18cf9ffa14d14d5d"],["/archives/2025/index.html","178e2541026e5cff6a0e18576f0cd7fc"],["/archives/2025/page/2/index.html","0dea2b0a916b4040dd80890f38719a2c"],["/archives/2025/page/3/index.html","2cb233bffac4b8b684838c1b4bbbe27b"],["/archives/2025/page/4/index.html","34abb158852c494ca8adb49dad577b89"],["/archives/2025/page/5/index.html","834fe23bc5971967379acb24f09beba1"],["/archives/2025/page/6/index.html","db947685c36f183997a5c49414e2c023"],["/archives/2026/02/index.html","61087986445a5d677dd95bad7a131ab1"],["/archives/2026/index.html","4217a30520eb6dcef66e575aa2bc3122"],["/archives/2925/01/index.html","8eb7a7efe5b0b296b3b3f5d0b017faee"],["/archives/2925/index.html","0a241572373493ffb72ff0c05442e730"],["/archives/index.html","00aebb0d944807db02349fb8909b2f18"],["/archives/page/2/index.html","fe745dee4ddd3c75206649a615c20359"],["/archives/page/3/index.html","26f854e094695b19f6565eeb335a94d6"],["/archives/page/4/index.html","f3f0995064b10bd1ce4e43a4f9a11ae9"],["/archives/page/5/index.html","975028d0406898951e9df060a426f6c6"],["/archives/page/6/index.html","5335d711336a0e99f2af02be800eaeff"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","582b2395d03678f593947f838c37be7c"],["/categories/galgame/page/2/index.html","2e16c6d060de57843b54bcd6a68caf54"],["/categories/公告/index.html","28d6e5a0a86960801bcc6694dc4a88cd"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","22f9e4c06349f73c2c0c75cd28f7f813"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","7b5dbb92a9b394cf40cf55cc63d639ae"],["/page/2/index.html","1f8129de4d4192351e2b22355a5d438b"],["/page/3/index.html","6baab8c73cb078ba3f27a2966c2d8dcc"],["/page/4/index.html","4f69f6d5625d3b8aca99a500a59e8908"],["/page/5/index.html","3ddb6e9123475c2ed5f54df165ad1456"],["/page/6/index.html","f372b5ed70950777737942e6ee8a587e"],["/posts/10c9dd98.html","03b3a929d87f276358f0c67698e39d24"],["/posts/1370342.html","782d7c7f8f5a08685963189d867cf26e"],["/posts/15ef14c2.html","06f6a321da4091563cd582dcb9aea690"],["/posts/15f3959d.html","4b1d1f75272da4f063f3e5107f7f9f78"],["/posts/18ab785d.html","09ffe4a37a918bba54a5e6048cb7176a"],["/posts/1d59b71f.html","5ac71da7cbee255756461984be209e2d"],["/posts/20b3f3a4.html","7b2604786bf49ebf17145aad84477492"],["/posts/28397adc.html","98b1124d8f818c4d9b4d92a86c335a6d"],["/posts/2cf620f0.html","b70fe54bc708824a43e41af3553e8399"],["/posts/303007ad.html","2e799554e9f141bf24638c95782154de"],["/posts/3f7d823a.html","981f894adbd42d4541e20ec8e3dd7799"],["/posts/44124a6b.html","e673dbcae462bdfc6569b18f61eb580e"],["/posts/4b689be3.html","79c44d12a956d45b01ee877669db2c6f"],["/posts/4cf8423f.html","9fbdeaba492c4c969057c701514469f6"],["/posts/4dcf85c.html","2d74d7a3afcbe733f08ac7e588e4ae2c"],["/posts/51c9b1ff.html","898655174ecffb357e24f8857f7549ca"],["/posts/52b5b3c6.html","eb718e731cef97fe7ccd386a09bf0e11"],["/posts/5f6e0c59.html","d103f23f7c22168e10b5cfb5f675cbe7"],["/posts/6432d61a.html","5d2d61eea65d7cd3a0875a718bde44a5"],["/posts/6515f032.html","768b1f9c62b5ed493efa2496f2ca986f"],["/posts/71131d34.html","45f830cd861c3f70e6fef55d7c6382ee"],["/posts/78a8a8d3.html","200f851eea72c4a56a72417f14fc2af1"],["/posts/7e3aa3e2.html","fca228b516bde5d79c8dc08bbb12f8d4"],["/posts/80fe2691.html","f6e1f8098b19f632731ae8d88f2d7060"],["/posts/81ac52e9.html","c126742f86f258fd275e04c3466d5d34"],["/posts/886f8d3.html","c21cf57a2b98070578a03c5823d4f62b"],["/posts/8dd520d9.html","a4a7f89d8c78c6143643afb52428bf14"],["/posts/8f555654.html","09bba698a4fb3047c9cf93fee283c99a"],["/posts/92a980c2.html","0a1a07f83e756b03cc42e87fe87b9ed5"],["/posts/94d3c794.html","bab84f970a0828b451b23b5cabcbfa66"],["/posts/97f50eea.html","7e23a6cdc3802187dc943f473002079f"],["/posts/98662d05.html","7641849be05d3fe019cef16896e33727"],["/posts/9a2f6162.html","39319971751eef03e489bc722a0de763"],["/posts/9b22a48d.html","280dcdeb688faad1a7eb05cf674168ec"],["/posts/9cb455b1.html","80d98c9fa032006de5c735e082eb7dbd"],["/posts/9f61c1a0.html","6b49250fa3e4d577db8124388e7df0b2"],["/posts/b497b647.html","5b836f90260f5fb2888caba913f1cbdb"],["/posts/b5fb773f.html","1174c3c65d9d271e6c7673bfdd1970ac"],["/posts/b8d46b32.html","e689db7483cfd5c726f677dc372de498"],["/posts/c1b2c6c9.html","6628423f17cf61966ba91ac0862c8ea3"],["/posts/c316c2e8.html","6f8e6bfcaf945d46834cd0602a08a916"],["/posts/c497a412.html","80d864e3622d98548a7f6e70b11daa5a"],["/posts/c5de299a.html","9654f2c559351eaf28db0c2f3c11f1ee"],["/posts/c70bba9c.html","eef1aac84f9a47b13d64b70fd0b8015e"],["/posts/cbebef2b.html","1569c47a0b7d5636d0ccec7d7d4ece45"],["/posts/ce25023e.html","9b851b7e608158850052c0884e9fe28c"],["/posts/d2fd4837.html","eedac3d2e3bc2b57a757c27f3a4561d5"],["/posts/d3a745a8.html","5c1e163f167d698ab33febecc057a59c"],["/posts/e3ab6ad8.html","4cce5b20f06fd9a1a98274ece5ca571d"],["/posts/e5018da6.html","4d74fc0f38abfb8f3e3f37bba400a783"],["/posts/e91abb63.html","d05d3e1fbe62b7faaee9dc7a59b56ada"],["/posts/ee1ed673.html","6471dc81fced941e843886c1436dd41b"],["/posts/f230b0fd.html","90da6cdef3a53ff49556bfc9ccae9354"],["/posts/fc04d0d4.html","0447e76a0f321ed6c70a5feb470531f1"],["/sumire/index.html","0042bae6cf1ddc1a44890309b5049223"],["/sw-register.js","8e3d42f8fa851a0aee848f031d8b7cad"],["/tags/CHUNSOFT/index.html","37c8cc28a74a62c45d6c5fa0005f6d72"],["/tags/Circle-Mebius/index.html","9cc3fc77062973b4e04ef7d8ad0e5594"],["/tags/Omegaの視界/index.html","832aa8c6e0e563335ddd366fd034aa7c"],["/tags/PC88/index.html","80f1180a067dc26024d74bf18e15d4aa"],["/tags/Witch/index.html","ade0bdff328dc022f3e1811239aa0916"],["/tags/galgame/index.html","3f84c93631affbd98075a44743761c34"],["/tags/galgame/page/2/index.html","582230f7100873605c6637b50be9057c"],["/tags/gal资源/index.html","ded78dbf55edeae1fe2bdf8a9fa1c95a"],["/tags/gal资源/page/2/index.html","acb84940e873a8ea8c419ca99785cff3"],["/tags/gal资源/page/3/index.html","59e2671f6a86a0301ae8da34f93d029b"],["/tags/index.html","0628d7d5d28bcf06e80ffe34af4552c6"],["/tags/rkr/index.html","b65cacf2c58741cc0587c8b617c003ef"],["/tags/ねこねこソフト/index.html","641024bd9bef0560a7a1bd583041723f"],["/tags/ねこバナナ/index.html","ca305d1ecbefac15bf157bca1b1b819b"],["/tags/停产/index.html","f8072bfa8db87e22799df4025c36b57a"],["/tags/公告/index.html","19037d04d8451a06afe367e26fb8f6b2"],["/tags/同人/index.html","668bfc0f7c134348e3132dc21f24d0e9"],["/tags/堀井雄二/index.html","11e29379863d0c38df4cffacd3a734fa"],["/tags/已停产/index.html","9b6cb51d65383fe9a15e0e16287f8bdd"],["/tags/水仙/index.html","255e8278c1e27ec3e567a279c8e7a334"],["/tags/片冈智/index.html","3b0d9a60f3cebb9929f9071f58279848"],["/tags/猫猫社/index.html","223b4e29721a0c35b90bb014a1c005c2"],["/tags/画集/index.html","93f8e362987bcafcbd4e6e61b933fe06"],["/tags/閂夜明/index.html","898f76e526daa45d7d74bc0e877f16aa"]];
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
