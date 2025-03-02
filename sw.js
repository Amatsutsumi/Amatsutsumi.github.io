/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","7c79163fe661bfc66a3651991a35c95b"],["/archives/2024/04/index.html","26474e33ffebfb2aee3de33974542140"],["/archives/2024/index.html","73f6c5e26b99007ad79136b95050800f"],["/archives/2025/02/index.html","89c0ecec18aa17a12b98140393944568"],["/archives/2025/02/page/2/index.html","5aefe0ae9301fb397ca0f0c8fa9de00d"],["/archives/2025/02/page/3/index.html","1936c4311cc1125e7d757d37b42eb3c7"],["/archives/2025/02/page/4/index.html","8d4b77dba0f55b7c7a883deb22d79a8e"],["/archives/2025/02/page/5/index.html","f339a108f7034e62fb0a10344a85460b"],["/archives/2025/03/index.html","5b4a2e8a4b39c3672221b86a1e003e5d"],["/archives/2025/09/index.html","4ca9d9e0d14fa79772e380f1ca4e2957"],["/archives/2025/index.html","2dcc55e0cd691abeac67edd56e094b28"],["/archives/2025/page/2/index.html","6c7aee2daec0d02318416b8fd2d79954"],["/archives/2025/page/3/index.html","3a716d2627ce3bfaa10a8f7139576313"],["/archives/2025/page/4/index.html","bc5d00ebffa9c7baf71945004b48238f"],["/archives/2025/page/5/index.html","f2483745ddeb5388780c732a6d0935c1"],["/archives/2025/page/6/index.html","5c29f84845bb47976b89f3b4c37a614b"],["/archives/2026/02/index.html","5304ca706bd07418b0c31875a4bbb4b9"],["/archives/2026/index.html","44433eeb71fd25e884678d68a3d1f2d5"],["/archives/2925/01/index.html","0c4e242f7a87f2916ba1a759e582138c"],["/archives/2925/index.html","705f732f33d037ee43b7f650bfa7c327"],["/archives/index.html","32832fd7c3185e415994f02d7974be4a"],["/archives/page/2/index.html","70592d4c5e238f21ae0c6fa8671dc02d"],["/archives/page/3/index.html","8ee99c531639470bd3d973ee286c0bce"],["/archives/page/4/index.html","2fbd6b20885dbf0e9ce3fba3c5bafd5f"],["/archives/page/5/index.html","c85789c15c929f530cb04d8a591295d4"],["/archives/page/6/index.html","18ead437f059e5dfc40bf274415a34db"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","eb50f63e75a9d44778b27e0c0eb9152d"],["/categories/galgame/page/2/index.html","2652ee61c0b00f7a4a6c44ff32c7efdc"],["/categories/公告/index.html","8ef413a10fb31ba2b9fff59bb52637b1"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","0d1832a515ebe1098d5402b527c14b4a"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","d32cf9b4caef2978d47a50931a4f61f1"],["/page/2/index.html","427884fa772a2f00ef1b25e6c7e9249b"],["/page/3/index.html","cc41a141741567d5001250b9c9c85589"],["/page/4/index.html","3fe7ef2fd1556bb5b5d2d57e38cf4ede"],["/page/5/index.html","55c9a214d52e9fa844b6dda18828a3a9"],["/page/6/index.html","251ef84b97af73da9d6aea937371bfa5"],["/posts/10c9dd98.html","fa6ebcd64c90ca6ef92fd4161cd6ac7e"],["/posts/1370342.html","26a80204aa460edec0a0cc8d048b23c7"],["/posts/15ef14c2.html","cd5c71355ca822e880d0c2608841b47b"],["/posts/15f3959d.html","af048686a80fadd89da7f43a00223b99"],["/posts/18ab785d.html","43d5cbe643aed9598cd624599b0ceac5"],["/posts/1d59b71f.html","141013bd14bd35507889bc0ff62ad0ce"],["/posts/20b3f3a4.html","22a5fd8c09b9bda7305e9efb0b103cb4"],["/posts/28397adc.html","53440135832f6b56c54fe35e784b4b7d"],["/posts/2cf620f0.html","7529101ef1a74d706f197ef3e845d8f2"],["/posts/303007ad.html","a7b8353d832a538a679b6fccd36c17a9"],["/posts/3f7d823a.html","14d023a62ac2d6f0d1931268c8102bd6"],["/posts/44124a6b.html","ad30c7003d81339131a5153f598fd4ec"],["/posts/4b689be3.html","efca479ce3574cead592f646752346c0"],["/posts/4cf8423f.html","3a2dbfb6c432c57be9d9a1d94b661277"],["/posts/4dcf85c.html","b99b1ff536b54eefad35949334d45c21"],["/posts/51c9b1ff.html","aabc1140ecbc6548b9f291b3babe2518"],["/posts/52b5b3c6.html","c7ce35d0b9b5094ad80f9e5d16a2b345"],["/posts/5f6e0c59.html","783d774630c19a3549c2c6cbcef550f0"],["/posts/6432d61a.html","b4ed7f34020749b9eb0e28670eade750"],["/posts/6515f032.html","47f87c2c686558de6072e3a7a46c2c7b"],["/posts/71131d34.html","492721b68852d75d4cc5fd46977e4ed6"],["/posts/78a8a8d3.html","37ed08a9961030b0562444a4e3db5535"],["/posts/7e3aa3e2.html","570b76bf1a5ac86b1e448b24dced572f"],["/posts/80fe2691.html","17f43b292fb5669d13ae1f268921f1ab"],["/posts/81ac52e9.html","33889730ac6410b001b06cd02f5eccca"],["/posts/886f8d3.html","65fdba0f7c752796dbb94a6670c834fb"],["/posts/8dd520d9.html","657e599b9202c5b681faead3caab0167"],["/posts/8f555654.html","cf197c089156c0beb05601ea17fee8bc"],["/posts/92a980c2.html","afac5b352e6ff04e7d4a93d8f57a043d"],["/posts/94d3c794.html","345069df2a13c1943243f0de07fa9195"],["/posts/97f50eea.html","2acf9eead85967a5ee35748b30887bb0"],["/posts/98662d05.html","47ef53fd4d6522375fff3f83f645e448"],["/posts/9a2f6162.html","c9a9c3d1789a83369e5470c44a3086ee"],["/posts/9b22a48d.html","7016346a946220eb2bfabc448030dbd5"],["/posts/9cb455b1.html","c3a6837174ecc55d811193277722b94c"],["/posts/9f61c1a0.html","2c70fd5b31ea949cddcc0d86dc6017a8"],["/posts/b497b647.html","d3fb2c651eeda54344c5ccb77bed2a63"],["/posts/b5fb773f.html","a19a9173012b0c98989c1348be84aab7"],["/posts/b8d46b32.html","6c35eb88d7f5233ec66bee481dc5a4d0"],["/posts/c1b2c6c9.html","e86668603cee61546168d7823a08bf7a"],["/posts/c316c2e8.html","f8d1f8ce9334ef059eb5b80c577c9327"],["/posts/c497a412.html","4d5dbcecbe3a2794df1ef2dfebf0cd49"],["/posts/c5de299a.html","7bf4854120e0d225f7f1d913e16d0160"],["/posts/c70bba9c.html","1ed06793b8f429b6228a19a8b14a7cf5"],["/posts/cbebef2b.html","a596a788d41f1ac46cd998b9f90440d0"],["/posts/ce25023e.html","e69d5deba0b2b3109cbee535b9b9e65e"],["/posts/d2fd4837.html","dbff71a71d352789576d02432746aaac"],["/posts/d3a745a8.html","a7715bf786deda64618e2b397a60fa34"],["/posts/e3ab6ad8.html","d41744f482b00260dd9351e6c7d94d03"],["/posts/e5018da6.html","6badae2a67686d9f4f99e701772f03a1"],["/posts/e624b065.html","75f7ce1d1a0eeaeb631bf4037ca89861"],["/posts/e91abb63.html","140a470daaf216f9f732ef90274f8f52"],["/posts/ee1ed673.html","5f90d530da85f385378a0cd64914c10e"],["/posts/f230b0fd.html","3c4daf958ff58e2c67fa7b22edd2f170"],["/posts/fc04d0d4.html","b436081e9befb28783a1d8f0e555f283"],["/sumire/index.html","94e67ce0bb2db8824c7624e6e58d0416"],["/sw-register.js","c6bfc886995bee321b3a02b4a185be1c"],["/tags/CHUNSOFT/index.html","f514b011e42aa917c6da63d0f88e7e84"],["/tags/Circle-Mebius/index.html","1caa47fd560126623e69940061b01f76"],["/tags/Omegaの視界/index.html","886380b7ec185bd36ef61a48f4268ec8"],["/tags/PC88/index.html","e474a42b9e604c5292f6776dfb4fbcc3"],["/tags/Witch/index.html","2010bb97d575493f30740a0e6e9473c8"],["/tags/galgame/index.html","94e8f4514195dbacb4e1fcc18fceee50"],["/tags/galgame/page/2/index.html","1f3d4800d3797b32d48e6bf9d643c8ef"],["/tags/gal资源/index.html","9d52910560da5f31cad13e9d77ccf95b"],["/tags/gal资源/page/2/index.html","00686c603ce89d9c913d73e311be492c"],["/tags/gal资源/page/3/index.html","aad5b3887a6f771df994099c9f09792a"],["/tags/gal资源/page/4/index.html","a0f0b0ebd7d9bdf674b71f32a2ac2b6a"],["/tags/index.html","fd9e65c080b9fa4cf66a93c9e65387c3"],["/tags/rkr/index.html","3f5b2fafc82889b21c4f6f712c9e4dd1"],["/tags/ねこねこソフト/index.html","9569faebc85d2bd466826fd25e0f4888"],["/tags/ねこバナナ/index.html","3ecf3e079124ce6a8ad44231c0bc2469"],["/tags/停产/index.html","c31a7fff84a9ce7150eb47a2593362fd"],["/tags/公告/index.html","56f9220ffe4123f9f26da214ccde494c"],["/tags/同人/index.html","dbe858f3dd9037d10d976a69deb52aa7"],["/tags/堀井雄二/index.html","de040431feec5fcceaedc8f9fe5b1883"],["/tags/已停产/index.html","564327a4bd3c6e67cf8e984c1be2f963"],["/tags/水仙/index.html","85132c75b698f08ed49ac4289783cbac"],["/tags/片冈智/index.html","6c1bb03e2d69f742a0b0e56d23a616a2"],["/tags/猫猫社/index.html","b4f3ec350b61b2c73b1de609f5a63090"],["/tags/画集/index.html","dfffcb3f857738e7ecc01ff6a9720178"],["/tags/閂夜明/index.html","79933511f39a3b4c0f45cb06f9a6e59f"]];
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
