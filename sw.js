/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","30f4bc3bd3c09c1de810cfb96229f03d"],["/archives/2024/04/index.html","2282357c58e030dc55c8106afdce93cc"],["/archives/2024/index.html","8cffd2bce4c7193578d7009a23abbb3d"],["/archives/2025/02/index.html","5030395f1c26dd757e465239708c4c9a"],["/archives/2025/02/page/2/index.html","2635b212c00e1ecdbabb6e71e1118049"],["/archives/2025/02/page/3/index.html","fc1ac80e5d07401d44874d52832a7145"],["/archives/2025/02/page/4/index.html","f14a526bee7146dbcedac16f2958ff0b"],["/archives/2025/02/page/5/index.html","51a4b8034164d6698ea765edff76a10d"],["/archives/2025/09/index.html","d97eaae85e1f7d3c6d4da9ce24343d3f"],["/archives/2025/index.html","e26aa54c30f0553c2a2c75b48512b85e"],["/archives/2025/page/2/index.html","15451f8f090dfcf6f879b1917c201f06"],["/archives/2025/page/3/index.html","0057a8b0a07d009e66cdc4a384776883"],["/archives/2025/page/4/index.html","0dbbe0af9c38c98413abc08cb7db880f"],["/archives/2025/page/5/index.html","63cc7dc28f06ae25c5bf2016c58aaf6d"],["/archives/2025/page/6/index.html","2589b9d9162befa4c37ff95004ae9115"],["/archives/2026/02/index.html","3cf050723d362c36066028c8c8653550"],["/archives/2026/index.html","0c2d2b8dd6826f693d52d754fb311426"],["/archives/2925/01/index.html","a77bb836668e5486868f33ec1ef7ca67"],["/archives/2925/index.html","ccd46797974388227c649f9c53eec2df"],["/archives/index.html","ff31bf701662ad5728c4da794870e015"],["/archives/page/2/index.html","d1562cee8b4de7237bd9524ef4db60ea"],["/archives/page/3/index.html","2489164763148496cc5b63fd5eddbce0"],["/archives/page/4/index.html","805db262b6747f9d79e58ed236d547da"],["/archives/page/5/index.html","ad8ae1a27f6035c997d0b685cbce0b09"],["/archives/page/6/index.html","1c9916368b2395349ce4987bbfc93c85"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","3dd81f908b3b952026893c9b013bb806"],["/categories/galgame/page/2/index.html","f1b4eb18b4ac84fdebab89ff8d97db74"],["/categories/公告/index.html","fec8a7e2e539c2890c953dd0f0e64626"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","29f2b8286cc3558f4b07a054afbb9352"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","7acd6c6cab8669cfe68ccb8b2887c1dc"],["/page/2/index.html","ea4c6a2e9d616f36a5d23ecdec621655"],["/page/3/index.html","ea5d621719e4f1b5944b1e91318102d0"],["/page/4/index.html","fb1798727b9d6d22ea32b1372b2259bc"],["/page/5/index.html","aa2613120d887e02f8aabd441e48f546"],["/page/6/index.html","f770b48f3ff0c57811ffb84a494162f1"],["/posts/10c9dd98.html","b96fc35eabe6148309deb3dbf23c4b7c"],["/posts/1370342.html","b2e2256009a80cbde14c20ee4231fa41"],["/posts/15ef14c2.html","2f4e412cba29210d2c68c2b8570d580b"],["/posts/15f3959d.html","f9a1d52cc59192daa109966ad300e96f"],["/posts/18ab785d.html","92f8eca7aa40233bf5a1e38139a3729c"],["/posts/1d59b71f.html","3c016bce9fcf04b0d529e0ae4dbfaf9e"],["/posts/20b3f3a4.html","fa45531fd901f39af1c730b56a13be94"],["/posts/28397adc.html","0a876f04eff9a20cdc0420a9fb2fbfd3"],["/posts/2cf620f0.html","47d431880749895f908262c628a46b69"],["/posts/303007ad.html","efba6d0d4b54194e4e82a9aeb6a5a3ae"],["/posts/3f7d823a.html","fcad18fb2649deff3a7a0c3ee908fa0c"],["/posts/44124a6b.html","7b3b7b12ef53849ff25c42cb56eb56af"],["/posts/4b689be3.html","98c7aba8457b8e668c71c2700cf8a0d7"],["/posts/4cf8423f.html","bfcfef53fecb86cb75d19b11057709e2"],["/posts/4dcf85c.html","c1987cedec7cdfe2c5d0bc5c1a527a13"],["/posts/51c9b1ff.html","27b258957a9743bd0fbf43d2206f2498"],["/posts/52b5b3c6.html","2ad8108c1553cde909ecd0aaa2279033"],["/posts/5f6e0c59.html","c4b2b670dfa91df57b1e50f3b63104a8"],["/posts/6432d61a.html","71a0aad764f1ef305c34aab71bd6a5ff"],["/posts/6515f032.html","88f3447b9e958e09afad91e717f1539a"],["/posts/71131d34.html","14e199ca2300c837acf8de49f803755a"],["/posts/78a8a8d3.html","bd60ddc3400991ce4becb2c92da99420"],["/posts/7e3aa3e2.html","a650d52b886fcc1cd894cfa0262d35cc"],["/posts/80fe2691.html","b610f6069c24a0ab5cc85f11eab52958"],["/posts/81ac52e9.html","6b61fd611c8526e8b22f5db391ae80d3"],["/posts/886f8d3.html","1dcec2d3229e015dd9df323af777f6b3"],["/posts/8dd520d9.html","a416fab374660de9dfc9df1a9dc5833f"],["/posts/8f555654.html","ca78957d347526dfddde2bbb34e26418"],["/posts/92a980c2.html","ec3cf327c923abca731466511c0f2b8c"],["/posts/94d3c794.html","adbf5319b1f7c2181722178f5aff7596"],["/posts/97f50eea.html","3698896127d2c79c4a0735e17474223c"],["/posts/98662d05.html","a8acf23f1a0227bd482b44812ad239e6"],["/posts/9a2f6162.html","9b0165e012967cbd114595894f686431"],["/posts/9b22a48d.html","82169ea009938b4f337e1f763a73ea31"],["/posts/9cb455b1.html","9827bbe810326d3ed042d25d4706d4e0"],["/posts/9f61c1a0.html","b4e1319c51ed32409ed93a1cc49df6e5"],["/posts/b497b647.html","a45383bc6066b4ff3b40e50f7b07d551"],["/posts/b5fb773f.html","bb61ceaf4d917b4cb8d090c480e93418"],["/posts/b8d46b32.html","6c6a5896918b54e0473e8d2dc955c926"],["/posts/c1b2c6c9.html","7254b512eaf39112e372c43c035c8f00"],["/posts/c316c2e8.html","fe09c4f7db8dbcd60de9f2cd3631d189"],["/posts/c497a412.html","d2e24b7298877cb1a3cc262eea3d09f9"],["/posts/c5de299a.html","816097c69031753cd1b3efc3ff1be71c"],["/posts/c70bba9c.html","48f1eb75df00376d089df20aec23c93f"],["/posts/cbebef2b.html","c510dab93091223a2e3ccc8f88370bc1"],["/posts/ce25023e.html","7eeaf5e784b4d2314ea9c0015657b988"],["/posts/d2fd4837.html","d9918be08b4015cfb6c19a62eb82c25e"],["/posts/d3a745a8.html","92fa0720cbc2eaae417fe4bfa352f7e4"],["/posts/e3ab6ad8.html","5fe78c13d585cc8c6f13aa167189c528"],["/posts/e5018da6.html","672b950cf33f415edaed15a38cfd484e"],["/posts/e91abb63.html","91713da36208592bf4df9ce60bc829f6"],["/posts/ee1ed673.html","d5def48ee1bdaa36853e2b618d9de279"],["/posts/f230b0fd.html","0a295e208656aa181dbc07fc688dc980"],["/posts/fc04d0d4.html","ad947481ff47798683fd7cc0a6d117a0"],["/sumire/index.html","a77ee4d95964ebb194b0448a0f341b59"],["/sw-register.js","3395febd829aa507a0ddfd9a788c1767"],["/tags/CHUNSOFT/index.html","845b44e66c59c243b572f212ff685c7b"],["/tags/Circle-Mebius/index.html","0a9b1fb6cf9fd0e796cde3fcbee5ffdc"],["/tags/Omegaの視界/index.html","7383c3aeab27d098d6716b68f071833a"],["/tags/PC88/index.html","659e0dfe2718624f9cb896c935a80a43"],["/tags/Witch/index.html","c1e08ebf69fbf306e3ba14b02fef2619"],["/tags/galgame/index.html","21d7a100c6f11b7ac0da2e8f2e2cfd86"],["/tags/galgame/page/2/index.html","974326632420e62e3ffeb3a96297b152"],["/tags/gal资源/index.html","1ddd827bab5936b1869152fb0d70e902"],["/tags/gal资源/page/2/index.html","08ca7d9388117b9b53963a912705a9e8"],["/tags/gal资源/page/3/index.html","74e3392a728c48acdc31a62fa1e242ff"],["/tags/index.html","0f756c50867692eac9b4d47e57ecf5b0"],["/tags/rkr/index.html","3b0cb6e9bec8fb6b50952ca3130045c9"],["/tags/ねこねこソフト/index.html","ca6716799c88cf34a0bb3eacc7086353"],["/tags/ねこバナナ/index.html","c8556975c09f029fd9716187a0af1452"],["/tags/停产/index.html","edf398c82bc260239afe1cb81195c869"],["/tags/公告/index.html","4a2eb0dd889e7970eca947857c1c8f2d"],["/tags/同人/index.html","101a3ad4170a971f7034afe09d740c23"],["/tags/堀井雄二/index.html","bd64ded5d7ad2c3d8b36477f41d8c0d9"],["/tags/已停产/index.html","30e7b513f2035db688d1787e95172e71"],["/tags/水仙/index.html","211cfa792f8d62a1451f2621c639e457"],["/tags/片冈智/index.html","b87abdb7cb3fa904806e995ea5a16d1e"],["/tags/猫猫社/index.html","99ee6084800464a668ff8cc65e140257"],["/tags/画集/index.html","d30ec0661f465e554a6351c03efb4beb"],["/tags/閂夜明/index.html","8ae451752ba140600d3aa2ab5c504b1e"]];
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
