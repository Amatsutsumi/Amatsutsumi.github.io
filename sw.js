/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","62bbaf4147eaa1a7ae70b3ce3aa09e70"],["/archives/2024/04/index.html","33315d53078c260bd37dc03e04c7024e"],["/archives/2024/index.html","bdca016a1c7b4d0105cd70f5215c131b"],["/archives/2025/02/index.html","93a28b508862e99f5d3f028685de967d"],["/archives/2025/02/page/2/index.html","2fc1b8e1d55a828f47d2a647ba264f13"],["/archives/2025/02/page/3/index.html","f12e043bce24642def9eee9b53ea689d"],["/archives/2025/02/page/4/index.html","f9adf8612423e02c78935361cf4c2f18"],["/archives/2025/02/page/5/index.html","013f509d621863458ec1ad85aa4ce0d3"],["/archives/2025/03/index.html","b598b5947c8c9bb126148e454d7306b2"],["/archives/2025/09/index.html","9cfa18ddc311363f262d9196a48ccf8e"],["/archives/2025/index.html","d81ca8f2e11f2cf69d06b638223c3881"],["/archives/2025/page/2/index.html","bc31ab4219efcd88bf5dcdc8e5fecbe5"],["/archives/2025/page/3/index.html","47a75e1477148563db1d40f67894c698"],["/archives/2025/page/4/index.html","acb2e62ffdca07e2fee5b44667d9ee1c"],["/archives/2025/page/5/index.html","cf79a9534630016e5d766774ab45a268"],["/archives/2025/page/6/index.html","97d8bb2fb2ba35c358e1814cc392965f"],["/archives/2026/02/index.html","a73993be42a0640f8565d0868debf71c"],["/archives/2026/index.html","e0e464d52c1bcbb3fe9a5756a65b79ff"],["/archives/2925/01/index.html","d1ad14145bcb1827e3b792dea21f2bb4"],["/archives/2925/index.html","7578f2c81c5c611ffe02e3442b23fd9d"],["/archives/index.html","d20adec9558c3d2ed55d2c9b3285d210"],["/archives/page/2/index.html","7a9bbae7d521b7cad68444e7916b63e6"],["/archives/page/3/index.html","8ed548d2e4979d82e0acd913b74626f6"],["/archives/page/4/index.html","5c5cea2c64617e0b3e51e43e4a643a0f"],["/archives/page/5/index.html","34ad7cd5927fdb20336157cd78fa887b"],["/archives/page/6/index.html","cac6e804049a03eca671d48a6489979a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","56c73c4691251545ba7ba2cea73a7c34"],["/categories/galgame/page/2/index.html","cd679e9a8273e2c8c8829e48dde7b757"],["/categories/公告/index.html","fc3b5975f681bdb548ab4ab56ae9a3aa"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","afc4d7b3748018eb81f4ac0997f273d1"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","6643ee9cfad29be68b2bde2a91d3087e"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","988be06a856b61c3216d8946d7ff49f2"],["/page/2/index.html","55b255dc38a7bca6963e412ab71aa619"],["/page/3/index.html","7a28cba87f7c39ec634e3094f074ccc7"],["/page/4/index.html","de528fbeb04b0c41530a69aa3c183af3"],["/page/5/index.html","f17c337461c2f1828d67de3ffb27ae9d"],["/page/6/index.html","cbf87577f13194bf9169b32e36df25c3"],["/posts/10c9dd98.html","5eeb91bcd66899ce4547bb5a55cc5e50"],["/posts/1370342.html","b4cceb1a982ba99974ff41a5b2b4cbdf"],["/posts/15ef14c2.html","e3df1b89768a7cb37ea21dce514e619d"],["/posts/15f3959d.html","1fd0309d5f7525abd42f13735ba5632b"],["/posts/18ab785d.html","161ff456d5d0704d05efbe845a9f7b07"],["/posts/1d59b71f.html","cac159200bdaa6cf9ef2b6ee8b66b301"],["/posts/20b3f3a4.html","73b728a79ebb5ee35137670fe6e38d13"],["/posts/28397adc.html","c6cd94d044f09b3ec72e998fc4e2d56e"],["/posts/2cf620f0.html","434c6e7b08207199d4106e9874f68495"],["/posts/303007ad.html","2ae9fb2ff1e473e3c223b4e96b091387"],["/posts/3f7d823a.html","ee1a2056970ecd59c201026186dfbd3c"],["/posts/44124a6b.html","445d4747b4032af19dd34d4a2dbc2d20"],["/posts/4b689be3.html","e5c2afd0bacced23be2899a14f33f0f7"],["/posts/4cf8423f.html","1eff8b3c070a5a9ef97af96072589ea7"],["/posts/4dcf85c.html","c22866fe0b5e85f9028aa7ff62d73b13"],["/posts/51c9b1ff.html","26151e779bbeecba7944643de1527397"],["/posts/52b5b3c6.html","38fbd8c5a7bb7c31feb3086620633d8a"],["/posts/5f6e0c59.html","fd3aa29e45893a5e03b8ec2e60607765"],["/posts/6432d61a.html","a861da55798a80f3d8ecdf96e03c76ae"],["/posts/6515f032.html","f7f4c1dfb4f510fc95d380c76108647b"],["/posts/6720ccdd.html","d6a2f8309017f4c7975b2b3fd39e1029"],["/posts/71131d34.html","381f87073eed17c61cd377d0cc7669b1"],["/posts/78a8a8d3.html","a80826c0c68cacf68a4ff2e364c2f8a3"],["/posts/7e3aa3e2.html","ed1b7bc693f30620dd8ebbb32482ff5e"],["/posts/80fe2691.html","3f4e0993db7aa6f175e6471cf23e401d"],["/posts/81ac52e9.html","b8c584da2e8886bb471f71ea8a4c30f7"],["/posts/849b40f8.html","9f2c38d82a7c26bdd2976b55e2aea2c5"],["/posts/886f8d3.html","37fe40d2fb2adcfc73db228b7fdf182b"],["/posts/8dd520d9.html","89733ebf16048eaafe223ac89ecf7346"],["/posts/8f555654.html","a405774208335b151c752e28e642b7f3"],["/posts/92a980c2.html","2537a5708885f9a4a0c7180a49cce92b"],["/posts/94d3c794.html","a751d24a5671dd0c2747da285029e0ea"],["/posts/97f50eea.html","286da5af4bdb38595f3685de8ac112be"],["/posts/98662d05.html","3723908170be8e52f7e4958031f9c04a"],["/posts/9a2f6162.html","11cbd67840bf05589658b5196992abaf"],["/posts/9b22a48d.html","a0c067a173e86ae3df6914e86c107fbf"],["/posts/9cb455b1.html","3782f93a81dab8494e363d3fe7eff2c0"],["/posts/9f61c1a0.html","56041c8167f11abce82bbcf3d1ba9b26"],["/posts/b497b647.html","ef2c874e41c752a9c2e032d93ce2463c"],["/posts/b5fb773f.html","926412c82de52dca14087749d84ded6f"],["/posts/b8d46b32.html","ddea6871ec20ada500defc72204f347e"],["/posts/c1b2c6c9.html","23b8bdd243a8deed1994e47f34afef08"],["/posts/c316c2e8.html","67f057a194fbba2f5c94bbc2444de0c6"],["/posts/c497a412.html","f615b61d32ab780a845695a3e9703dfd"],["/posts/c5de299a.html","38064ba221ddc722b96a5dcdbf64b648"],["/posts/c70bba9c.html","f7d38e4254b9b5470b7b4b478183448e"],["/posts/cae2c959.html","6baf7776597144184cebe0b85ab2a46d"],["/posts/cbebef2b.html","96da3d729b9293c1a95c7b262348edb3"],["/posts/ce25023e.html","2acef2d2f267b96afacd1827250256d1"],["/posts/d2fd4837.html","00a74f2023d17ecc7cfac5cae3eb35c2"],["/posts/d3a745a8.html","2f571021c758a82b455b71d8f607dc81"],["/posts/e3ab6ad8.html","db1c1506a832b1f453bca0a13f4bce71"],["/posts/e5018da6.html","fbeb013676df3bc0b4fbcd4ae5eb2c57"],["/posts/e624b065.html","16d6e77091270dff392c261d124fe8fe"],["/posts/e91abb63.html","1887a485ca2be84141c06a95af226f41"],["/posts/ee1ed673.html","b0490979111571d6a3bf321676dee461"],["/posts/f230b0fd.html","73d6273624bbe03193b5abf104c7c919"],["/posts/fc04d0d4.html","06add3956005b15e57da92e198cf2bea"],["/sumire/index.html","529012aea1ef0d2b76d75fc0d806c8cc"],["/sw-register.js","564c2b6f61cec4549bc30a207643fab2"],["/tags/CHUNSOFT/index.html","59cdca83ff91d37b3ee982723754a66b"],["/tags/Circle-Mebius/index.html","cb9bcd00fc7cd797dbfebf52c1fdd336"],["/tags/Dos/index.html","f21bdbbaa93fc29a21997c394d13cc38"],["/tags/Omegaの視界/index.html","7a90e1bdc93e13189ccd7c6e384e4513"],["/tags/PC88/index.html","9edb31f61b0c6c67c750cd740249cd45"],["/tags/Witch/index.html","0283f3bcebe9683fee95940609b24e2f"],["/tags/galgame/index.html","861f745852d44486f9125cb8e57f2e75"],["/tags/galgame/page/2/index.html","998e7259af410dfceb1aa09967f77a3b"],["/tags/gal资源/index.html","ca26c5308d94ad921566a341791d2672"],["/tags/gal资源/page/2/index.html","b3c8a0a432ab23ad0020ec79ece6ebf5"],["/tags/gal资源/page/3/index.html","8be7a2004641727d530f4f6b7e5a678a"],["/tags/gal资源/page/4/index.html","9c70d453aaa895c51cf7f7dfb2f7e3e4"],["/tags/index.html","0b01d4ad16bcb18356ae0f7219d44090"],["/tags/rkr/index.html","f6444d94bc7d8261eae847ab74c9b870"],["/tags/ねこねこソフト/index.html","53a6507eb8a5dda18701a28e37f54ff0"],["/tags/ねこバナナ/index.html","2b0416693c916899a949b100a71fa518"],["/tags/停产/index.html","dbb54cdafb9035bf64d8d806ed381a9e"],["/tags/公告/index.html","beb66e0b9edbbe9d0379525869fc1ec4"],["/tags/同人/index.html","ac25597b773c3cc355d6601a94114fc9"],["/tags/堀井雄二/index.html","d428eed4a222f552713e74c11e94f7f5"],["/tags/已停产/index.html","c28a15ae238054c5a0fdbf0edd92b4f0"],["/tags/水仙/index.html","8aebacfa98fc153f89f5806454210e8a"],["/tags/片冈智/index.html","6947e2eb8c03e480cd004452dd88e359"],["/tags/猫猫社/index.html","f82c4f434312f1e632215654edc9a928"],["/tags/画集/index.html","022619e7557e793b302ae1b9a65dc1c1"],["/tags/閂夜明/index.html","be6281ab7aafd586c8dfa3b99223b627"]];
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
