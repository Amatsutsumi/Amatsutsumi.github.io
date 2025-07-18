/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c753c29a2d25c5d23ac43b8e5f16b110"],["/archives/2024/10/index.html","8fffdfd39b1030429458ce5b3e15d851"],["/archives/2024/11/index.html","0f74c6dc4651f69c69dce4ff1dc90270"],["/archives/2024/12/index.html","44a0787ba7a8e1bb6999cd0c35c230ed"],["/archives/2024/12/page/2/index.html","380348e130647b40f630629ed95ebfdc"],["/archives/2024/index.html","9fdcb8fde215e6e15e2c67169a65755f"],["/archives/2024/page/2/index.html","42e9d9462e079622a61a6ee9dbeeaa88"],["/archives/2024/page/3/index.html","994300b2918bf37ca769fffadc8829fd"],["/archives/2025/01/index.html","d59aed11a2cafb376aab8c12d777e3b6"],["/archives/2025/01/page/2/index.html","ff0783a364b7e320abf37753e5904763"],["/archives/2025/02/index.html","83a590620d5d2608ad5639abe6917066"],["/archives/2025/03/index.html","391f82dd413788a3b83dc9bdd06b0561"],["/archives/2025/04/index.html","27eb26c4674eacfbc44c5f661668b40b"],["/archives/2025/07/index.html","6f6f8537dd12450a48bb2e7b714cc8bd"],["/archives/2025/index.html","32e27f3efacb0465791f01e6b3ce7145"],["/archives/2025/page/2/index.html","ec73bd01631a08c27821f56e89402e97"],["/archives/2025/page/3/index.html","f752c70bcb84838fcd07886861660923"],["/archives/2999/07/index.html","a41f4757ce506c9a6bbee467a77b6b53"],["/archives/2999/index.html","947aab9bf5be5982dc28260cc61d9432"],["/archives/index.html","9c7b4dc61c885b99207f681e9c991be3"],["/archives/page/2/index.html","79a8290505ed7311fa4b0332c0215a66"],["/archives/page/3/index.html","76b4a9daba63a355a90a5a867e07985e"],["/archives/page/4/index.html","ea1b53df24bc319f41fca04ac0a2b9d3"],["/archives/page/5/index.html","a94a54eab900d514a5bd5116d1cd2355"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Unity/index.html","1e0f470672792a27e4dbc43a1659d836"],["/categories/学习/index.html","26f23a884c81666d6083f7e6e24b49ce"],["/categories/学习/page/2/index.html","68f182d63736f81b37608d9e4f435cef"],["/categories/学习/page/3/index.html","48540cd9c9bdd05c7473c2d987d5d237"],["/categories/学习/page/4/index.html","ceed80876a90d3c11e02abcc348fe7a3"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","40bf5d626771282848a342f25d7cd840"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","cf0db4fd354e44033251a2efc2c2dc50"],["/page/2/index.html","bfd72bdea12ff73102c9af12d4ba3c46"],["/page/3/index.html","3da5d6f22899e533404a0edc6386f11f"],["/page/4/index.html","454420c3e1b1c09f596e4db818c7ebba"],["/page/5/index.html","9daf1188d6fb25d879e40f247369699b"],["/posts/1008f769.html","9de7e6a1f221d578f6199b09f1e056e5"],["/posts/10cc2d44.html","69c08a53b8593bf68de95c25ab99222e"],["/posts/113e835e.html","e7d819b83f967123f8e6ee0aabcc848e"],["/posts/159a8932.html","cfe127610be3273aebb9148ccaf3c8d6"],["/posts/24e1190f.html","4bc5bcffdfb87f904a542bda937e4cc9"],["/posts/292422ce.html","d46490e891bc872e5b88bd77fbf49f9a"],["/posts/2c10891b.html","0d92a8e914e86c61d419b4b032ad1d2c"],["/posts/3aeb9189.html","a2497efaf4209ead093d728aea9514c4"],["/posts/3bb2d0de.html","55d61cab4ec50cd9d4fd7fdbf292ab96"],["/posts/473f11.html","99ddbff94a17e28f5266d8076fd914d4"],["/posts/4a18176f.html","584326375f301cd4a605e6a96c9107ea"],["/posts/4a6f70eb.html","9e819c3abf91c2a30be7d150d1483a54"],["/posts/501f2de6.html","677870d50e4b035b83164bb256af7d69"],["/posts/59f2b96e.html","90f05aab0beb8c3731b7fe975bf4b8be"],["/posts/630e02a7.html","8e95a57d4e1f12defcd47dc568c6a81a"],["/posts/66b94565.html","081f7ec4d69a6546f6c54d19730f5c9d"],["/posts/6ef7598e.html","4bde463f8f8648b2f5ee5d7e8f6acf8f"],["/posts/72eba54.html","799163c7766b16ce38fbd65edfdaba6c"],["/posts/749c06c5.html","be81070036c39166ca50dd5fd12d6e5e"],["/posts/77524bae.html","8826dd816374b92f61aea360a84471ca"],["/posts/7779f102.html","896deb9feb60033a3e3cc7e01b9901cf"],["/posts/78b2fcfe.html","ad7efc2dc5f3b12a7c94199e8a3f56f9"],["/posts/825fca5b.html","bb291266c60a75e0b9eed0e63d939932"],["/posts/860f6e9a.html","94ea5acd90079787ccbae995ed8ba0d4"],["/posts/8aa56fba.html","0fe013ecd023212a3e4aef55272c3971"],["/posts/8c1c015.html","e13c485f8c213d03dd0aef51a7638d11"],["/posts/8de056bd.html","2c29e2dd7010b80b78c4195825108f79"],["/posts/9f1fd314.html","aec3da2157cade036f483d02e215caff"],["/posts/a1c99550.html","5aec6f01ed9ca228e9aba2c885ff9f42"],["/posts/a40d3f0b.html","36d1da17157b3d36541ef3b7195b09a2"],["/posts/a67123d2.html","29baa4783dd723ca13c2cbff458730d2"],["/posts/a75738e6.html","7ee66829bdb90b399ed0d67d3d76dfed"],["/posts/aa9e0f69.html","71dc8c058714a96b7ee3de027d8b29db"],["/posts/b30facc8.html","2fbc7b0d6de218671e50ad78e75c89cd"],["/posts/b390e62c.html","b6e212807a664dabcac089d79ccc9c51"],["/posts/b6be7a76.html","7779d49ca0fe400e2f4f95425ee890bc"],["/posts/baa95f04.html","35783f75239fc3bd569f09d9036dfbf1"],["/posts/c2f88e40.html","3fea6aa4749b830e3b1e5f9174cbb5e4"],["/posts/cb15ae68.html","e4092d7607682388b144a2c9e6ecf88a"],["/posts/d9f6770c.html","c6c6c44c195751953444057496248063"],["/posts/e816fd63.html","846ad3fe1152a851ef2436709c702d9b"],["/posts/ec6c5f44.html","3d792247050ad5b26608873b5c8e1f6c"],["/posts/edf7ffc8.html","87b3a1266fc40d9b1aa4193cc1e7fe0c"],["/posts/f48e37fa.html","0dc67fd5aaa02fb7e2da1f1a6483c70c"],["/posts/f85ddf3d.html","b83df469456b6adf7119b533a543c6b4"],["/sw-register.js","192730e54a170947cd4553db76a04cef"],["/tags/API/index.html","225a9e53ed28cbc11f33d73490b9bf61"],["/tags/ARPG/index.html","3edd000bb0f9ee5ccc8696562b4e47f4"],["/tags/Alist/index.html","6c5b9915dd335c2c51c899df332ab20e"],["/tags/C/index.html","5db664b881f1c61f3dbdbc6433873941"],["/tags/CSS/index.html","53cac77e2b78e1fc626d96b0ea7b35f8"],["/tags/C盘清理/index.html","719d017ece5d2dbb6e491c1f485680d7"],["/tags/FC2/index.html","883670857430c2470827eb22f24d2cf4"],["/tags/MonoManager/index.html","8bd1d6af48527174e96cf1dd47bdc8f3"],["/tags/Mono管理器/index.html","dbfdcf70ffb40872ec0011d7b5d85fd1"],["/tags/Unity/index.html","0a17e1bcaa6485bc87b5d763f496ba38"],["/tags/Unity/page/2/index.html","ea2197d98a364f350f680db3d2281aba"],["/tags/Unity/page/3/index.html","ef8dac9e58da4c8d018f43d90070c306"],["/tags/Unity/page/4/index.html","cacef5c6527c3bba2b48655b19b473a6"],["/tags/bbs/index.html","3ff7b2320065e5029bac2615ab81cf18"],["/tags/docsify/index.html","05e171776bde3446fdfe10348784fca9"],["/tags/github/index.html","8a4ec1ec17038655f82968e3a5ee9cff"],["/tags/index.html","da544154b8590a13a6ddddadb9b19624"],["/tags/javaScript/index.html","7abf385bf35ebff781ad1596664bb920"],["/tags/伤害检测/index.html","8b9c5335ce10d7de9f14900a4ccd1b58"],["/tags/公告/index.html","6840778d9bc9c5a579c17ac29b181c16"],["/tags/前端/index.html","a7edb6ee713bf2c2310b0c779ae0e380"],["/tags/单例模式/index.html","a53189224177d7e01b1c4a773253e74e"],["/tags/学习/index.html","0db45131ae75993ce9b01ed48e5eaa52"],["/tags/对象池/index.html","4f2db97938bac38121da633bea445476"],["/tags/怪物AI/index.html","eee30ec6b476eb3f0aea2d5aa6906dd5"],["/tags/技能编辑器/index.html","46c6fb496226fccc391d3c734969b694"],["/tags/拓展工具/index.html","e4fe03b59e60a90ce813fc3213c4fea2"],["/tags/有限状态机/index.html","e54d72770f6b7d9053b50936e3d207b4"],["/tags/汉诺塔/index.html","d7d8573596f44f3552cc8ecf611041d6"],["/tags/游戏开发/index.html","3f680460ab8686c78b7f0c8b878608ec"],["/tags/游戏框架/index.html","b41854a90db43f16b4bc25990faf7051"],["/tags/游戏框架/page/2/index.html","7f1ed8655bda0f2cb07303d6aaa8967d"],["/tags/爬虫/index.html","a1d4b1bfce66186a29ce5673b1f92944"],["/tags/算法/index.html","52d9b5b60b7ea345a0e3a63bf9d187f2"],["/tags/编程/index.html","548e92a94febc599a77981e5c03ba9c6"],["/tags/网站搭建/index.html","3c510f629c55d511602e9ff68bf48f9b"],["/tags/行为树/index.html","26f6c7a053523ce51dc9a8e8df5ddae0"],["/tags/输入系统/index.html","b0717867946b9e812d869933f1e95506"],["/tags/连招/index.html","53d22226a9fe57931055b30b8cf74015"],["/tags/连招思路/index.html","bc52fc4076b5ad079b90f39d6911de6c"],["/tags/连招系统/index.html","f1d35edf586e92c9afc11724ef5d176d"]];
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
