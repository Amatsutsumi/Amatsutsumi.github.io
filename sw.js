/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","728657dd3f0d2695ef86f9713e129b6e"],["/archives/2024/10/index.html","b06ab963408bc6929e6d5e1a15cad32a"],["/archives/2024/11/index.html","f0cc884c3a52d15971faaa2cc45e1344"],["/archives/2024/12/index.html","2584252ea1f86fdc93c5f35d67070dcd"],["/archives/2024/12/page/2/index.html","3366c298b6b7d1437bd2fab7e680f84b"],["/archives/2024/index.html","89ace14f1c70febc40e858bba9da4ee5"],["/archives/2024/page/2/index.html","252a381483d694a86b935f4753f557b7"],["/archives/2024/page/3/index.html","5995f92325099671f73395c908369edf"],["/archives/2025/01/index.html","ec239a755862fbc36b57bb234bbed340"],["/archives/2025/01/page/2/index.html","b78d270ab92a1055187cc651f62434cb"],["/archives/2025/02/index.html","79bcbbfaf96a5098f6c204761ab367ce"],["/archives/2025/03/index.html","74cb2af3439dd6767533e361317abe3b"],["/archives/2025/04/index.html","749473c4495f21a43006f35923de6040"],["/archives/2025/07/index.html","f6fe83bb76f2a96caa7b9172d258dee3"],["/archives/2025/index.html","0fa93224e033f674f904a244b506f66e"],["/archives/2025/page/2/index.html","4f9604c363b14e0dd032d1b8dab5dac1"],["/archives/2025/page/3/index.html","172e1607dfea9c34f6db97ca059091eb"],["/archives/2999/07/index.html","bf45e6886923ca259ca8bf6adfe9d464"],["/archives/2999/index.html","a69dc9f2b717155948a02396f7283846"],["/archives/index.html","f9a14b23e013db7a6ec317ae76827339"],["/archives/page/2/index.html","5a5735d37e8753b1461bb362b8a2c76b"],["/archives/page/3/index.html","c6f250a55ef3a8127aeeeb8d2128209d"],["/archives/page/4/index.html","e98bf9f66643efc056ea0531cfdd905d"],["/archives/page/5/index.html","3aa16c01d99be6eabea0ebfc0df56039"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Unity/index.html","b79f757537608bef4e2f1011bd3b36ab"],["/categories/学习/index.html","55db0878f71a30d04241fa2ecf9a8ec7"],["/categories/学习/page/2/index.html","cffd685a33ca415c0a1612f64d8cf51f"],["/categories/学习/page/3/index.html","e1a0b98572c61904fe58c49a1b85f060"],["/categories/学习/page/4/index.html","a89cfadc28d9ddbfa1f35c56eff3737a"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","7e138cecdcbcb7d104c2f92fa1b37243"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ee48ce9bb0e95c634d221c73b1bc6a77"],["/page/2/index.html","ff9a86a762ee779652c5793b8f659706"],["/page/3/index.html","75992f8ac84eda0724505d5f22e37382"],["/page/4/index.html","77e75724e0c3a3dca63ccf35347ffc63"],["/page/5/index.html","c2410dd9a5b331e331650437c9dd140d"],["/posts/1008f769.html","c22faec18850a0deb71d9d0ba47c2398"],["/posts/10cc2d44.html","bbd62beb551abd6fd1067feeabefefa4"],["/posts/113e835e.html","4e190f60d0ce6de7d2576af53064b589"],["/posts/159a8932.html","67c4c8b82f0157cb5f9ff44b0bbadaeb"],["/posts/24e1190f.html","ac6f3f6ad6fe4ac0bcec3081f85b28fd"],["/posts/292422ce.html","937f12c12531f47e7f762bf1c895e1d9"],["/posts/2c10891b.html","de7a5be1c3671c09a9558a2a7667c7a9"],["/posts/3aeb9189.html","fcabb869073ff3f9f5077e8b53f25e22"],["/posts/3bb2d0de.html","640cac72fd606d4c25c55d9f0aaf5b19"],["/posts/473f11.html","99ddbff94a17e28f5266d8076fd914d4"],["/posts/4a18176f.html","584326375f301cd4a605e6a96c9107ea"],["/posts/4a6f70eb.html","5f61f4adf260f0911c2da11270a00dc3"],["/posts/501f2de6.html","be6227192e077775f727f70cbc172cad"],["/posts/59f2b96e.html","90f05aab0beb8c3731b7fe975bf4b8be"],["/posts/630e02a7.html","2ae99daaa4c4aa807b3cc6d1e38991df"],["/posts/66b94565.html","68f5e5bacfa888144ead1601b981a87d"],["/posts/6ef7598e.html","4bde463f8f8648b2f5ee5d7e8f6acf8f"],["/posts/72eba54.html","4ea62f0f1bb3e0751496858f629f1286"],["/posts/749c06c5.html","809eb927e0f6f70235618bab4a8821b3"],["/posts/77524bae.html","8826dd816374b92f61aea360a84471ca"],["/posts/7779f102.html","896deb9feb60033a3e3cc7e01b9901cf"],["/posts/78b2fcfe.html","ad7efc2dc5f3b12a7c94199e8a3f56f9"],["/posts/825fca5b.html","4dbdd3488a50cbc7072445772dfe6f22"],["/posts/860f6e9a.html","94ea5acd90079787ccbae995ed8ba0d4"],["/posts/8aa56fba.html","fac46603f733f3cdb02a69a4a8eb79e8"],["/posts/8c1c015.html","47833bb5e94f8850f333619bba7d587c"],["/posts/8de056bd.html","2c29e2dd7010b80b78c4195825108f79"],["/posts/9f1fd314.html","6919b9f61852310a33f8ab89186281fe"],["/posts/a1c99550.html","e943a8c2b4ed3ad57d5de37612c54f59"],["/posts/a40d3f0b.html","ac8460d19a247dec374f9773ce69ea7e"],["/posts/a67123d2.html","279c8b3c3f0235c6c798574a44bd3839"],["/posts/a75738e6.html","899e61278f36f21b32758145bf3457c8"],["/posts/aa9e0f69.html","7387d806a2d7791df428cb8f2775341b"],["/posts/b30facc8.html","2fbc7b0d6de218671e50ad78e75c89cd"],["/posts/b390e62c.html","31e2fbcfe509c68d8cd2029d5d512292"],["/posts/b6be7a76.html","7779d49ca0fe400e2f4f95425ee890bc"],["/posts/baa95f04.html","35783f75239fc3bd569f09d9036dfbf1"],["/posts/c2f88e40.html","3fea6aa4749b830e3b1e5f9174cbb5e4"],["/posts/cb15ae68.html","e4092d7607682388b144a2c9e6ecf88a"],["/posts/d9f6770c.html","b3a2dbbaa893299de49703c5f7cf8d49"],["/posts/e816fd63.html","12775be5163c029ec4db06974ba68db0"],["/posts/ec6c5f44.html","9dbb875405840606d65507fd34e17dcc"],["/posts/edf7ffc8.html","87b3a1266fc40d9b1aa4193cc1e7fe0c"],["/posts/f48e37fa.html","2a958c62aa2febd983991909fb236264"],["/posts/f85ddf3d.html","a2fcad1580b9396e20263e0f425888f7"],["/sw-register.js","501b9f7c2b157b43701bf1f90ba8d7f3"],["/tags/API/index.html","546e6b44cd70b1485a3184aad628374d"],["/tags/ARPG/index.html","b31fb9fe58401fa8c9f45bb966293fc5"],["/tags/Alist/index.html","107cdd0b414e0cf75ce2b78ff14f9f41"],["/tags/C/index.html","e6f8add11794f51d2e6a39444059e715"],["/tags/CSS/index.html","579d43a8ab908f25c0c939dabc426013"],["/tags/C盘清理/index.html","8d35768d3ab400cf330891d27d6967c2"],["/tags/FC2/index.html","8fd3f54bc7ff0773194f8e54f158c8fc"],["/tags/MonoManager/index.html","114c314ec899b65958cbbf537286a2ba"],["/tags/Mono管理器/index.html","b7cba4064c2be5d9601efe21c82dc2e6"],["/tags/Unity/index.html","7bcd27977a6d518c7d17bfb8d59cbf2c"],["/tags/Unity/page/2/index.html","48588f097125b0b525de70c885388503"],["/tags/Unity/page/3/index.html","be034f48b4a0567bbd3f1da30dc15285"],["/tags/Unity/page/4/index.html","5a4eb52efaef9db0d659608b809f18d3"],["/tags/bbs/index.html","bb0ffcaf9ea87a1c9fa5748cc11d2740"],["/tags/docsify/index.html","e1a83df47926b5f17774cc66a6334a1a"],["/tags/github/index.html","86b0a63749a8e34596e584e67e128673"],["/tags/index.html","9678a4438ce45a8fec4340fd6a01869d"],["/tags/javaScript/index.html","516a5a66141acb5e2d7d8b7ec6dfd945"],["/tags/伤害检测/index.html","f04de2bcd2d39fcca468e7eb97c9f074"],["/tags/公告/index.html","a7c2cc1dabbf160c21fff978b21930c0"],["/tags/前端/index.html","7113b3bd68477082d46c3d5e8f904e46"],["/tags/单例模式/index.html","2dc3f8473fe08e6586f8419780f4b1c4"],["/tags/学习/index.html","2698e30b22fc52016fdfb0f646b2ea39"],["/tags/对象池/index.html","42fc729f28032c5e1e909f6737448571"],["/tags/怪物AI/index.html","240c67ab60ec4abd30a3f2042093e603"],["/tags/技能编辑器/index.html","d169fc4c83b9838eed41726e76c18d49"],["/tags/拓展工具/index.html","46186fc320cadb787ab6be55849ac7f3"],["/tags/有限状态机/index.html","ae5f0fff663bcfa7f20abe65c5cac128"],["/tags/汉诺塔/index.html","76414fcf60c359c48400c86d99da4e77"],["/tags/游戏开发/index.html","c5622aeb668f23e120496d7efc029c90"],["/tags/游戏框架/index.html","91704d5d6ed3f2d5bee6a65e112a9f9e"],["/tags/游戏框架/page/2/index.html","7f1213cafaa686e17ba66b2aa1348ed8"],["/tags/爬虫/index.html","24896e80571e50860f63829fb69a1d6f"],["/tags/算法/index.html","f06cb29f06ad367dcf6e6f21b0da50bf"],["/tags/编程/index.html","21f66433471fff07e21f83bf86e88043"],["/tags/网站搭建/index.html","e8ad0a56223c12f5d6d7c1a0a3210a78"],["/tags/行为树/index.html","118b3c0b909de415d6b165df54157153"],["/tags/输入系统/index.html","729f05655b77f43d6226ff8fb10fa4b3"],["/tags/连招/index.html","322b8b8f569c18a108aa7dad12b2fd7d"],["/tags/连招思路/index.html","3a6e503103607d317bbb00c54ab42fdb"],["/tags/连招系统/index.html","afab884e400eef4ea9b9c4f563f4b9a6"]];
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
