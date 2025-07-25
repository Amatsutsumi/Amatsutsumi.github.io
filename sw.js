/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e63d1dab34f4e1a3e2810b10b8771a11"],["/archives/2024/10/index.html","609aaf48909ca7c30a4e86349eab3736"],["/archives/2024/11/index.html","0e4d00cfbd6d9185f67d9f9a50019759"],["/archives/2024/12/index.html","5a24eec8c1f42cbfbfb9eda480e08781"],["/archives/2024/12/page/2/index.html","5e122898a388fcd4739a5bb63cd67e63"],["/archives/2024/index.html","f15f0ca04f9deb322bc83f411ea5a393"],["/archives/2024/page/2/index.html","13229899a3d65e0b9c709c8432f23c1a"],["/archives/2024/page/3/index.html","3d210add29b41e7ea18451d7d1f55cb1"],["/archives/2025/01/index.html","83b696c3e8af2e64d207085a666a61f8"],["/archives/2025/01/page/2/index.html","e18d9c384b003b00e6e96c9349339936"],["/archives/2025/02/index.html","691b9ef8eda70f571864475e502c604a"],["/archives/2025/03/index.html","080f916b0fe430a6178b5c01dfbb3d77"],["/archives/2025/04/index.html","c52ab57f68ee76774906b3c69e3c26ce"],["/archives/2025/07/index.html","bdeebe9c6dc958cd36e0e8d08777987e"],["/archives/2025/index.html","4a0cb3c201f198fcfc2cd14e2a31ce12"],["/archives/2025/page/2/index.html","cb642333cb5b7e9d995678ed93e4e294"],["/archives/2025/page/3/index.html","760ae111018a90a5104e2f2b55b1b60e"],["/archives/2999/07/index.html","b2086bce43efe479f38e7c4509c17dc0"],["/archives/2999/index.html","018f712f4db4aecada649103a75f9215"],["/archives/index.html","6136cfb83f2a882a94689650f62a2a76"],["/archives/page/2/index.html","f5c770686fa142e1d7e9b8963b30ed5d"],["/archives/page/3/index.html","3c7ae5ddc632c5bc0eb0d6cd02cc9ad2"],["/archives/page/4/index.html","78a4963628414a87689743e6278cb20d"],["/archives/page/5/index.html","4fd615a0c937f8363c16a651a29be83c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Unity/index.html","3e91861b4e6a6cc5073df6777bc5ee88"],["/categories/学习/index.html","43e76b37b292dd06a3d9401fa4c9f7e0"],["/categories/学习/page/2/index.html","d4296c649b802a41f8333a793ac804a1"],["/categories/学习/page/3/index.html","95a4aa29e4b48d6e0f1c54d19472777f"],["/categories/学习/page/4/index.html","4653d7ac7fd3ec0a51f5fa092156dea2"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","3e75d52cfec3160003fb792178ded0e8"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","5933f66f75df1d4890464b3c905314f9"],["/page/2/index.html","a42d014425720b3b5a8c88a25e13fbd0"],["/page/3/index.html","0df8a11884514869df4188ac67eb3206"],["/page/4/index.html","0d3ae06f9c34d0ecb77e9c6993d4c769"],["/page/5/index.html","9e6e59c5076a2e72b6bd31ff3af129fc"],["/posts/1008f769.html","83322b4b76f30e1926f645c50cfea9eb"],["/posts/10cc2d44.html","c432d3d867fd40aa3406a313b6392486"],["/posts/113e835e.html","708b0199525feb7f2cd6a07ba57f0935"],["/posts/159a8932.html","420d0ee4fcdfca5ec36d728cd55c6a51"],["/posts/24e1190f.html","850d265ec8b5825b4a9f6800609f6091"],["/posts/292422ce.html","3c2ce830ea08d66f45ac05847c37cbdb"],["/posts/2c10891b.html","2a9896ab9f68ee9d14d8588289e9a4f7"],["/posts/3aeb9189.html","8f562fb00c27aaf350cc064d0fda2531"],["/posts/3bb2d0de.html","78b0ee1bffda46de156354be6922809d"],["/posts/473f11.html","20d90985ba3cfb395c6588daea89a2d7"],["/posts/4a18176f.html","7cb6a9e2588786549299f69748f0914c"],["/posts/4a6f70eb.html","ba6535096f764055339ef261904ccdd9"],["/posts/501f2de6.html","5cb742b3d8157e107f1ac159d284a521"],["/posts/59f2b96e.html","e566f27e9883b9d1ecce79890235ba6d"],["/posts/630e02a7.html","e22ba9b909d329d6735d0917b6ab5ee5"],["/posts/66b94565.html","ccf722d0fcb2945cfeb7422f2b4ed617"],["/posts/6ef7598e.html","b3ee489c1e1d933774c1a5bf1d499023"],["/posts/72eba54.html","5a8d3a358f5d820d9040f11ac6ce99c0"],["/posts/749c06c5.html","7fc2c45034aa95a853a2db47080621b4"],["/posts/77524bae.html","d86cc1ebb309f5eb1f1f645ada00522a"],["/posts/7779f102.html","b232284a95483b5af4af3bba6bdc6820"],["/posts/78b2fcfe.html","bd0cbcf6ddbc04fcf46b9ddaa496890c"],["/posts/825fca5b.html","ea518c403a57127904f23def5a903bb0"],["/posts/860f6e9a.html","b531b8dfca3424a4f5226d2232c19952"],["/posts/8aa56fba.html","1e1849a250660e0e6cb9ef143c66c91b"],["/posts/8c1c015.html","190a72772523924db148f81b44c3f122"],["/posts/8de056bd.html","60d33944a8bf9f62cfd620049ea62b14"],["/posts/9f1fd314.html","a09e8495c0419a8edb34fcc3816df226"],["/posts/a1c99550.html","4b24cfcb3085fff449a37ab80a007bb3"],["/posts/a40d3f0b.html","d5b2e0242b473e16c71a8ee4ae78d81a"],["/posts/a67123d2.html","65469c15e8d9db483e6d68235ef23593"],["/posts/a75738e6.html","a26cbea96588b4d635c4e7623cec21d6"],["/posts/aa9e0f69.html","510e110eec3fe7e65a71e1ef0702613c"],["/posts/b30facc8.html","87219cd74901e04c27bed1a9b2a4d0a0"],["/posts/b390e62c.html","1f72b0e83f25e5db77decdbcd6594790"],["/posts/b6be7a76.html","17b0228c2dd8a4f3304fc35a6424c2af"],["/posts/baa95f04.html","cedda633267fcd0f155513ea7cdf9f37"],["/posts/c2f88e40.html","5e785aa2796c5805353393ee38e4d983"],["/posts/cb15ae68.html","1f84beafcbd0d4a39aaeaf2d8b7f6aa1"],["/posts/d9f6770c.html","4efef896045285b1d20284b13fa38cc8"],["/posts/e816fd63.html","e1446c9222cd88054ada415967be1a85"],["/posts/ec6c5f44.html","2e24cf27ab0a8f3fd41dcf065f50c44f"],["/posts/edf7ffc8.html","cf2a2a2259310071abcd7a99557b9dcf"],["/posts/f2664b99.html","014430ed6f8709fbda0a9c5e86767344"],["/posts/f48e37fa.html","c8f99030caab4eb3a7475965ecb9251d"],["/posts/f85ddf3d.html","c00cc731ba17732df7b354e159b23010"],["/sumire/index.html","3f8f6eaa65f870d18e0b5a9776ee3146"],["/sw-register.js","b8ef0d8f9cbbd168c5474fab00a84697"],["/tags/API/index.html","d43ee38d488c6cc82f97f37a230f7d7e"],["/tags/ARPG/index.html","42e70082fd1324fa34494fcc7cf132a8"],["/tags/Alist/index.html","8491ead2125d267faa09196072236e1d"],["/tags/C/index.html","8d36b528ffad2603aea295048cc253c9"],["/tags/CSS/index.html","5da0dc9475d352a5f0e0e54743cbfda3"],["/tags/C盘清理/index.html","7fb5cb77dfb9dd7e6db586e04bd35b9a"],["/tags/FC2/index.html","a245352bb8b6638615110983cc71ebbd"],["/tags/MonoManager/index.html","f2fb9d52ea486d94cd52ad58eaeea5d3"],["/tags/Mono管理器/index.html","31cf54f69c95cc0b4f27c91b865431d6"],["/tags/Unity/index.html","3e76c6397be0848183221d77a7afbad4"],["/tags/Unity/page/2/index.html","4ac3c98e0e77e67f1795fe6f7f6c4c2e"],["/tags/Unity/page/3/index.html","acd66519e86ce0a728bb86153276d8c0"],["/tags/Unity/page/4/index.html","8832c59e292c9a6d0e208ddffd77c427"],["/tags/bbs/index.html","91f515807970cbe9cb964a8f1adeece5"],["/tags/docsify/index.html","c10e51d93282e69cbd7a7a73f60f3a02"],["/tags/github/index.html","fa49dc35db0258d6879936ea9b5ddce3"],["/tags/index.html","4570c6c61c69f4675c9b6c85fc1d9fd1"],["/tags/javaScript/index.html","c360b69280a77058b42ab134d5582389"],["/tags/伤害检测/index.html","92daea40452cb420ae11eb3c8d931427"],["/tags/公告/index.html","1cf8731b15217571a1600f8030242ba8"],["/tags/前端/index.html","351e7893e39a5c79c2bd8c2fc9a8901a"],["/tags/单例模式/index.html","6686e0a4adffdfc68d5e6e141c00e362"],["/tags/学习/index.html","1f9742ed021fd4a53667ab635ca40c39"],["/tags/对象池/index.html","05b98888d794a57103c8b6a279ef9317"],["/tags/怪物AI/index.html","9239c66316f50cdedf1ee1de3bc7605d"],["/tags/技能编辑器/index.html","d9b5e9302f10240bdac2fc6426fa7a0b"],["/tags/拓展工具/index.html","0706b4dc6a3f1905a77e66f3aa2d05a1"],["/tags/有限状态机/index.html","25dcdc4c978af76a31c6445b60175b46"],["/tags/汉诺塔/index.html","2cd8b7c19ce050150289da3495944aa1"],["/tags/游戏开发/index.html","7abdb15af00de16587f0b1762c01d794"],["/tags/游戏框架/index.html","61024ca32c3013980f97d5ee1f326d99"],["/tags/游戏框架/page/2/index.html","9304de9e9293a8669a28332a2bd30e3f"],["/tags/爬虫/index.html","9e50ce21c54d669f90f8e48d53f7b825"],["/tags/算法/index.html","9cd046a70220d0b94e0667bfe01fb1d6"],["/tags/编程/index.html","5b4cba7583d0def1e5431aa7ec6e3997"],["/tags/网站搭建/index.html","3a80858f3fb94f368d2e7911c573c283"],["/tags/行为树/index.html","eb2acae40abb4e8a9117b6a23118238c"],["/tags/输入系统/index.html","ed07a55430a06f28a3c6c18ec0a37693"],["/tags/连招/index.html","09f62a951cf73d34f613871484a57ff5"],["/tags/连招思路/index.html","285abde6b2c4273f18b5ae0804b5dc4f"],["/tags/连招系统/index.html","ab35a19f715c40ac546c8e51cbc202de"]];
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
