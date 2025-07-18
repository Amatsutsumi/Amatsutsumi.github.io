/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","2127c620f64ea3d8b418ef4271a5467b"],["/archives/2024/10/index.html","14711c731accfc6217055b6caa46b40f"],["/archives/2024/11/index.html","348033449d3d1ef213f92dd2ecff75fe"],["/archives/2024/12/index.html","309a13f049beba7d0bd71706d10eb34f"],["/archives/2024/12/page/2/index.html","66a7926cf8a62fdb6a0248f9695002dc"],["/archives/2024/index.html","b31755c8e0a6f748687d1cb08727de97"],["/archives/2024/page/2/index.html","63d5c00ea0aae88e4704e0c8c9012b87"],["/archives/2024/page/3/index.html","c5083001ed6cbea398ea71605a9d5b3c"],["/archives/2025/01/index.html","736674b537a3e4da7a10e9bcba26ec54"],["/archives/2025/01/page/2/index.html","89f7d91d96daabb6e1783b8cf0f053b5"],["/archives/2025/02/index.html","83a13f6403abc18e559f6ef1ee1c2bd8"],["/archives/2025/03/index.html","e4b9cfac4b5d4ccbfbc1c151bd3e13e8"],["/archives/2025/04/index.html","45018d27942ff29fea250b592469085a"],["/archives/2025/07/index.html","46c3ee9c5a70aa326f833cd0549ae00a"],["/archives/2025/index.html","12ccf80ed3bc48859401569a92dbf6db"],["/archives/2025/page/2/index.html","ec75fbbc2e375998024b2b07260b3642"],["/archives/2025/page/3/index.html","ed927e91af35a90945427c029fa94658"],["/archives/2999/07/index.html","55c72abaf45f60c6b369b96a988f1fa7"],["/archives/2999/index.html","ada1d0297d44dcb05ee8975a4e381c6c"],["/archives/index.html","336cd08f1299986bed3e0a9f53f412d0"],["/archives/page/2/index.html","10040767d0e7ef3efc1c44c60dccd547"],["/archives/page/3/index.html","fce6a713409355591a56d842d2f6eafe"],["/archives/page/4/index.html","a04e4837c6a5293bd36c8a422c9b866e"],["/archives/page/5/index.html","95e31bfcd8943c2d13de0c2e43d60cf0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Unity/index.html","58348f3ccf71d4fdca2f532bf85a8a41"],["/categories/学习/index.html","1c9af460f83a008f417a17ab84ba2053"],["/categories/学习/page/2/index.html","9adfefcd86eb002dc05e3d4a3755235d"],["/categories/学习/page/3/index.html","05d1c0f5e1de398f670ff2741d698563"],["/categories/学习/page/4/index.html","db12e728dc6e74f150f0d21ed01580e9"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","51bfdd5b5dbe68d28a7fbf3de4c3e29c"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","cf8474b07421a694b54db1864060e76f"],["/page/2/index.html","3e27c20e07550f72b768d30d47500515"],["/page/3/index.html","4b2d25c659510928405a0f76421081be"],["/page/4/index.html","cb30bc99291985ac0538e5d04ff2e94f"],["/page/5/index.html","23104c49eb64b1c6e953c6c6f2e98abd"],["/posts/1008f769.html","0074ab7a35f98de25ef201848343a4a7"],["/posts/10cc2d44.html","69c08a53b8593bf68de95c25ab99222e"],["/posts/113e835e.html","d72a4d02ca1721e0e7cfbedebd844389"],["/posts/159a8932.html","a66f5c28d756447afccbfe49e043abb5"],["/posts/24e1190f.html","a51cfb1366eb76ef0327fd24836c0b64"],["/posts/292422ce.html","04ea7d0799268908baf710c982bc6439"],["/posts/2c10891b.html","43eca9161ea79fad627fe7aaa8ee284e"],["/posts/3aeb9189.html","f93c982336445c861daa702db827649a"],["/posts/3bb2d0de.html","86178c604402ec3497fc072140abb555"],["/posts/473f11.html","7c72d83bb81cf3c5c654c8c97fb510d2"],["/posts/4a18176f.html","9968b749a07e70cfc6c8a689435bb7bf"],["/posts/4a6f70eb.html","4dbc3d02f6cb900066fa304226c93040"],["/posts/501f2de6.html","d36f7b045596ea8d46a5e52eccd6c15f"],["/posts/59f2b96e.html","90f05aab0beb8c3731b7fe975bf4b8be"],["/posts/630e02a7.html","2e62eea71a544dc0533f982498985cb1"],["/posts/66b94565.html","baadc0597d603e2cd5fe61bc5a5b1635"],["/posts/6ef7598e.html","4bde463f8f8648b2f5ee5d7e8f6acf8f"],["/posts/72eba54.html","0f399171963254442493f50bbb2eadd5"],["/posts/749c06c5.html","623798ab74e12f086c458030dd19338b"],["/posts/77524bae.html","30cdbcf6a9f386b25e07bfed49603533"],["/posts/7779f102.html","4066a5fa29deec189596fb58435c83d1"],["/posts/78b2fcfe.html","98ef87b93408c8075415fc1093abd3ff"],["/posts/825fca5b.html","aafbd2e0896beb17f786b176d2a41b69"],["/posts/860f6e9a.html","eb9052094ebc5b8855f15ecb1fe4dd14"],["/posts/8aa56fba.html","fac46603f733f3cdb02a69a4a8eb79e8"],["/posts/8c1c015.html","63fc27a29bd49016ad577be3bf13416d"],["/posts/8de056bd.html","29515d3f3a42265691ab691dc7473061"],["/posts/9f1fd314.html","5346044743113fbca0e03a818cf63e69"],["/posts/a1c99550.html","598d38e6d84a404fdbcc8941af0baa68"],["/posts/a40d3f0b.html","65f88e5e4a807103156f62fb83f09709"],["/posts/a67123d2.html","90430ce62ed99c3a6db1a14bcdaddd9f"],["/posts/a75738e6.html","899e61278f36f21b32758145bf3457c8"],["/posts/aa9e0f69.html","e0842c0abcc3ee0f671a453b0739bd87"],["/posts/b30facc8.html","b6d2a568262540db220dcbe7029b1383"],["/posts/b390e62c.html","ec06d3a84f5fadb51da2c56619ca2b7e"],["/posts/b6be7a76.html","7779d49ca0fe400e2f4f95425ee890bc"],["/posts/baa95f04.html","8ed15199c369dcff0ee86053c21b3031"],["/posts/c2f88e40.html","3fea6aa4749b830e3b1e5f9174cbb5e4"],["/posts/cb15ae68.html","e4092d7607682388b144a2c9e6ecf88a"],["/posts/d9f6770c.html","1965449888ab47840430e46a04c1b289"],["/posts/e816fd63.html","42094abffc30b4a46729bf4c9c187503"],["/posts/ec6c5f44.html","725c20fb3615df3ebef09a92d76c150d"],["/posts/edf7ffc8.html","87b3a1266fc40d9b1aa4193cc1e7fe0c"],["/posts/f48e37fa.html","0dc67fd5aaa02fb7e2da1f1a6483c70c"],["/posts/f85ddf3d.html","a93c3e7ba9ed4567dcffec6286bc7089"],["/sw-register.js","356059a35d2cc1d0007cc06db043e9b7"],["/tags/API/index.html","0c61a3176d9d0372314277d9455741d7"],["/tags/ARPG/index.html","4c2d282824dda49ea2ece67623669a6f"],["/tags/Alist/index.html","9d8cf71215c3d67a07c7552259bf8a66"],["/tags/C/index.html","61946242482875d25481bccc8b81893d"],["/tags/CSS/index.html","bddf3a268abc722599a426a9d5f18db1"],["/tags/C盘清理/index.html","4db570e22ec0aabb4105173ec220cee5"],["/tags/FC2/index.html","188002020f8d368d1d6654364341cd83"],["/tags/MonoManager/index.html","9e47b11998cc02761a4dae8f1355407b"],["/tags/Mono管理器/index.html","e8a52723798dd6e34af4d0ccc739e974"],["/tags/Unity/index.html","fab2d2f8ca9d031feb0418d7aabc16f5"],["/tags/Unity/page/2/index.html","863d89143f3d47788637376a0969b04f"],["/tags/Unity/page/3/index.html","693b1f14a0d4a3237f8c4e42972795b5"],["/tags/Unity/page/4/index.html","5429747e8438033a9a04908f6b395d2a"],["/tags/bbs/index.html","baae8346c675075617f4c120de9b32bb"],["/tags/docsify/index.html","380de486219831f7c25cc086bf4200a5"],["/tags/github/index.html","bccb7e103e2f29ec226010ee97387165"],["/tags/index.html","21816cce47a00b690c7432e14876f2d0"],["/tags/javaScript/index.html","c42d02bd4d41953a99f10cac1706fac9"],["/tags/伤害检测/index.html","10b9f58803affad53548c7ecd3aba1cc"],["/tags/公告/index.html","0ad3cc8846398a66a1d8377e03b77b96"],["/tags/前端/index.html","d0ff727280e798e70fe1b91afe939120"],["/tags/单例模式/index.html","be9f38e162bf02a0f4922307b1523528"],["/tags/学习/index.html","7efe5498f27bbf40fffbb51b7baa286f"],["/tags/对象池/index.html","1f30d4d66517e59effe81dc47c6c7c48"],["/tags/怪物AI/index.html","db0c9cf2593c06691b815eea48e8a2ce"],["/tags/技能编辑器/index.html","8af95c42a6c6a88cae813b08f20b1a23"],["/tags/拓展工具/index.html","864a4a1efff8037a2e4f368b3647691d"],["/tags/有限状态机/index.html","d839956f67852c5b7d9c7fd7756fb00c"],["/tags/汉诺塔/index.html","ebe9c87e89f0a61b2f7aaec8044fe2e3"],["/tags/游戏开发/index.html","7b306d3f811c7486969ae30770af772b"],["/tags/游戏框架/index.html","1128485be7f81dacd92bfe1ccba85cde"],["/tags/游戏框架/page/2/index.html","f70f1a5f56c3a7f828774552a0477b12"],["/tags/爬虫/index.html","28ddb253933fb7904e27e7c7225fcac4"],["/tags/算法/index.html","2fe6c6302b64c128459079d139d2454a"],["/tags/编程/index.html","c7d2f5376c5df05343372925b43ca570"],["/tags/网站搭建/index.html","e1610ebeaaff90210f5e2ba0d928efe8"],["/tags/行为树/index.html","f4f83e72b1090444890ea8573396fda0"],["/tags/输入系统/index.html","86146e834fd8d03a4dc8dc560e575f7e"],["/tags/连招/index.html","19003034124e3032b895114418b0cc1b"],["/tags/连招思路/index.html","9cbcb05003a88c51577e17433ed1daff"],["/tags/连招系统/index.html","d58bb13becc106bdc9062f273c810b40"]];
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
