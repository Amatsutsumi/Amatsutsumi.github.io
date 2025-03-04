/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a66d919a8f9f402956468097ac4b79a4"],["/archives/2024/04/index.html","669ddca1f51147dd6288cbae1fe7d3ad"],["/archives/2024/index.html","7eb707ccb8ea1be180ad044807177730"],["/archives/2025/02/index.html","d7bac1dc9dad3dfd689d2146cbe9b39f"],["/archives/2025/02/page/2/index.html","bb3741f378e08cf0d2983ac315d168c2"],["/archives/2025/02/page/3/index.html","ff1aa0dd266270a1e932748852dadf5f"],["/archives/2025/02/page/4/index.html","a27666091934b7efde75705c5d09bb2c"],["/archives/2025/02/page/5/index.html","69059a57300850e44a174912610f9ee5"],["/archives/2025/03/index.html","aabd7dee20ad6af2728f5a37f1d20e3b"],["/archives/2025/09/index.html","aa197b0cb7221dc17a899194defe5017"],["/archives/2025/index.html","80323765cbed37b56ed8891aed70de60"],["/archives/2025/page/2/index.html","45520946d65eb03bc257655649db13ae"],["/archives/2025/page/3/index.html","56408dc71ee85b5276ce9a66f843388e"],["/archives/2025/page/4/index.html","6f60febe3b83fad0748feb6b080c23f9"],["/archives/2025/page/5/index.html","9688f5e2b467c6c535d1ad94a0a1c2f2"],["/archives/2025/page/6/index.html","6d8ea2e35f71c13ff4c63f411deb4053"],["/archives/2026/02/index.html","0b8a5b4ec0d392af1cd5d9adae1b6c70"],["/archives/2026/index.html","12b98a9bfb53c27563a291bdaa2ab7b2"],["/archives/2925/01/index.html","e744109b3c25673dc272b416f921a7e5"],["/archives/2925/index.html","a81ba88e6d77faa884a6cb8ee86f5e1f"],["/archives/index.html","39f4559130ea86d8dcff6c1221839246"],["/archives/page/2/index.html","31ae6792bcc3423f32067df11fe5bd93"],["/archives/page/3/index.html","1e03945119af1b75047d1476dd28bb19"],["/archives/page/4/index.html","0fffcf13e2768f04b291227924eed494"],["/archives/page/5/index.html","dd2de40a9395b6dade36f40fa4b9ea5b"],["/archives/page/6/index.html","77f2a500b4f261231871ae19d5e0e1f9"],["/archives/page/7/index.html","884f076311b635d3cf0bfb7729844f4c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","2feedddfabfaebcfc408c727c16ed509"],["/categories/galgame/page/2/index.html","72df2974509ae0b8ee6ed490756b10fa"],["/categories/公告/index.html","166080d7584b9b2eac01d564c37f790c"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","31a2ee81107da5154bb69164311acd61"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","e6e36a88250d59bc9af2c4cc62f14221"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","6a960c417e8274685e6b08b30c4216fd"],["/page/2/index.html","cd02269659ea3c843a28bead0a89574f"],["/page/3/index.html","e84e787bad4806443befb1e92786f48f"],["/page/4/index.html","40ade7799f143dc6dfb285d7d1c61e94"],["/page/5/index.html","cfdd0fd1bfd09f8e82083a8a6fdb89b8"],["/page/6/index.html","a35ef510cc9948a1db27685d0c1cfb1b"],["/page/7/index.html","b2698276ef7bdf965a06178b721de5cf"],["/posts/10c9dd98.html","959e2b38e74346f4c09ca095cf026f8a"],["/posts/1370342.html","c4ba3c529b3818fef3e55ad8a3ae6019"],["/posts/15ef14c2.html","6ab4b97bdb8511576c15edd73adc8880"],["/posts/15f3959d.html","aae5464f9fb725c259c5b26e44014b75"],["/posts/18ab785d.html","d570404ae4ca49a95f47b84c2d1cddfd"],["/posts/1d59b71f.html","f1a736320a132275ccdf2b565d1271f6"],["/posts/20b3f3a4.html","a651e495b29183e0a0d83888135532f5"],["/posts/245f1c7d.html","f7b8a160eece300f8582049931256542"],["/posts/28397adc.html","f3beffedec02797fa6d3ad89847541bb"],["/posts/2cf620f0.html","9d1d1e109db5ba837ea6942b7f4f989c"],["/posts/303007ad.html","f4c639c9397fc17928c9aee26b82d25c"],["/posts/3f7d823a.html","48bbcd7d9c01cd1805273a8a10afe5d3"],["/posts/44124a6b.html","d5f094ead5b7bf3bfc0270e58c8148d1"],["/posts/4b689be3.html","f28dd9a0fb7652151bad81d4d4272266"],["/posts/4cf8423f.html","9ee669a57d9c590dca8b6623fce25636"],["/posts/4dcf85c.html","f2d64ef897fb9d47db3bf6be69d12e28"],["/posts/500cd322.html","8f82a111f979b9587e5e3ddefc523647"],["/posts/51c9b1ff.html","aaf16ee5d5a973d84276cb503506d93f"],["/posts/52b5b3c6.html","92c88c903fe5986e35ec4942c6289fbe"],["/posts/5f6e0c59.html","1117fb5f7e183905a4be98b39e5d3699"],["/posts/6336a2f9.html","a99b9038b91d8f2c62cfff8034439f48"],["/posts/6432d61a.html","fed989a1c279d212d223134a51d81ff2"],["/posts/6515f032.html","325a119d8c7e996dbe01a6f44677d070"],["/posts/6720ccdd.html","139cf75f7f7dd7162c5dbe6dac2bd9a2"],["/posts/6aa4177c.html","3456c75db0644078948f25576c3dfec4"],["/posts/6b15f81f.html","e95bbaf5143fadbe28d256f8e34b3f4a"],["/posts/71131d34.html","701e0f7ec4c4c5a1c4e70d9613ea79cf"],["/posts/78a8a8d3.html","72ede3acc48fc9f1860745d08b7fec94"],["/posts/7e3aa3e2.html","70af0a30ea78ceee6c4fd53724636528"],["/posts/80fe2691.html","6a5976d167bf8bef45acdae809a5d48e"],["/posts/81ac52e9.html","733f16be741a0c4897358590603c8782"],["/posts/849b40f8.html","e1cefa9b23febe7c66fabf16123a20e4"],["/posts/886f8d3.html","206a7efc11299bc015fc5cd2a38914f2"],["/posts/8dd520d9.html","171e262b101e8e2cd61998198cad868a"],["/posts/8f555654.html","06d7dd7452b9116feb28dfd460e82221"],["/posts/92a980c2.html","da48d9875898227585378003a239a9cf"],["/posts/94d3c794.html","9e13f23d561a9592118e1b64e1db3dab"],["/posts/97f50eea.html","8045d5d0911c5f030a1f658bc75ef0f9"],["/posts/98662d05.html","ae36a1e5c9d179166b4b2b0b185b807b"],["/posts/9a2f6162.html","03f2400f9cc7f03382ca3605f43a716e"],["/posts/9b22a48d.html","d6cf0596752b0cea25fd382153a1b716"],["/posts/9cb455b1.html","8213978ff9c48ca66b0060165426c603"],["/posts/9f61c1a0.html","c7c10a278fe38ab2c0f1025c9f4971fe"],["/posts/b497b647.html","bdcd5e46cdd9d906e13e22dfb46cee82"],["/posts/b5fb773f.html","5f2816620a8751f5d0cc57a409fb6879"],["/posts/b8d46b32.html","7ea0a9d7c9bcc86697f7a6869093a164"],["/posts/c1b2c6c9.html","b22adf78d1bedd7a24b943ba1ca82d57"],["/posts/c316c2e8.html","48f2bf6a43c016345523043f5f04116f"],["/posts/c497a412.html","9af7272df5664e466808f7ac33868676"],["/posts/c5de299a.html","a3117ce08c9255d286baaa0aa98c5ee3"],["/posts/c70bba9c.html","aed4d41e02b8bcbcedfd60cfc675bb09"],["/posts/cae2c959.html","83855c91f5e5ee4de292975ec445323b"],["/posts/cbebef2b.html","e1e3260073d320810299dfafd83a24af"],["/posts/ce25023e.html","62dd2a981961f1b4a65f71af8b374ff7"],["/posts/d2fd4837.html","0c0b9b8e9e6d3b94ec16323a9ef2a68e"],["/posts/d3a745a8.html","bfa0ac2b710c80cb24d898051b2485e0"],["/posts/e3ab6ad8.html","8f78a0e7d260e023d5d074c94f6da059"],["/posts/e5018da6.html","5a17a604d4c1e4be9abb3247281511e7"],["/posts/e624b065.html","0782084031b9af93a65bcfe8b8c61212"],["/posts/e91abb63.html","adcf2d83185f1812372e751eb5836fec"],["/posts/ee1ed673.html","3bff4075b99b32832c4fa365ce0fe9fc"],["/posts/f230b0fd.html","efcc0d3ca3b3f7296aa5e3f9d1f5386f"],["/posts/fc04d0d4.html","9bb2e0e04b6a3ef7371ebfc58721fdab"],["/sumire/index.html","488102e5f8ff0f2d0a966eed463f50a8"],["/sw-register.js","9888f4c1ba5e1519b8085298554fed9d"],["/tags/BL-Game/index.html","ea3aac910ff028eccc36ed2d2a53cf7c"],["/tags/CHUNSOFT/index.html","01651125f622c76db9ad6d3233077988"],["/tags/Cherry-Pie/index.html","5a61ad1c87102babeea18d4c3cc51a20"],["/tags/Circle-Mebius/index.html","39544da825dcdf73e19c7fe63054d026"],["/tags/Dos/index.html","34c3660100009991684a8d02675d778e"],["/tags/Kanon/index.html","886e91e68647d93c58f2ee60fa845ec8"],["/tags/O-S-I/index.html","cf505ed1b441613878342f367574ddbd"],["/tags/Omegaの視界/index.html","7cc443f0a33bb341fc0fc1d25a3bd505"],["/tags/PC88/index.html","4a332d8af8ae8f7c4c2b2936bf0e5454"],["/tags/ToHeart/index.html","f271de30d9e81452e90a8163df1c6a1a"],["/tags/Witch/index.html","cbbe57e201962252c35f3b640b3d0633"],["/tags/galgame/index.html","4a862e003631e096347888327c4b05ca"],["/tags/galgame/page/2/index.html","e08b7dad488d62384ad38d477aef0658"],["/tags/gal资源/index.html","e775ea4672d6319e57841a53be4c5a2d"],["/tags/gal资源/page/2/index.html","063b106b2aecdc9c464a5eafabb52b63"],["/tags/gal资源/page/3/index.html","d0423a39dcdac54b92563149c16a610e"],["/tags/gal资源/page/4/index.html","5b5c62859e27a179bc7e89c53896f163"],["/tags/index.html","ef88cdd61b78d32419e14c6098b5740d"],["/tags/rkr/index.html","ebb81f196bfadd8e277512ff078f127b"],["/tags/ねこねこソフト/index.html","8101c6ff2d7a4c7a69dad02ad205d76d"],["/tags/ねこバナナ/index.html","2763b55fcdea0e1fe8ca506f3ead339a"],["/tags/停产/index.html","fc89f9ff197997e174be29b7656de593"],["/tags/公告/index.html","63deb44b39c470db30aaf9ce4d616cd5"],["/tags/同人/index.html","efdc5e80f5d86d81c761622083bf59c3"],["/tags/堀井雄二/index.html","3775c06af33a1ddeda0f2981f79b940d"],["/tags/外海なおき/index.html","2fbf8a6724f4c10dc1792edeb3832597"],["/tags/已停产/index.html","68f47577d04d32772a2f5f693f5d9278"],["/tags/水仙/index.html","e88d8adc5032388e159095ee452bf261"],["/tags/片冈智/index.html","8ab54a3937c5915c160fa8c2ea6bd88f"],["/tags/猫猫社/index.html","cf34a191340d989e739e717f63405c9d"],["/tags/画集/index.html","8debe04a3baff994c209dbd89b0f28f3"],["/tags/閂夜明/index.html","f5dcd05c7d976663b4dc030b7a87c3b3"]];
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
