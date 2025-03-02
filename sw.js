/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","ded241241323f0759ce5987bc3ea693d"],["/archives/2024/04/index.html","5479ed7d19f11e1216a9aec63bcc0ee4"],["/archives/2024/index.html","785f9908fa16e2170c489375947b9fca"],["/archives/2025/02/index.html","62a2614480cc629122e833648c8031ea"],["/archives/2025/02/page/2/index.html","e532a9beec21ffcae5cb332f3ecdb622"],["/archives/2025/02/page/3/index.html","25a1591e5d1664968d4b3b7cae22a327"],["/archives/2025/02/page/4/index.html","cdaec0adb267f4f6ea17958a232d8897"],["/archives/2025/02/page/5/index.html","9eb1456f65d88cc8f3da801450d9426a"],["/archives/2025/03/index.html","a6aea02d0ba65ead2bc18a2db611b90c"],["/archives/2025/09/index.html","8fac1adcc3bd5ec47ca7244408c61423"],["/archives/2025/index.html","5f5b3946346b5bcb3a003f059ae2d231"],["/archives/2025/page/2/index.html","2b0741fe1b6a3e42fb299508223c59cc"],["/archives/2025/page/3/index.html","6e20439f4eee568a2b60d777609ec742"],["/archives/2025/page/4/index.html","1e5d32ef97fcdc46ebbce6885718a797"],["/archives/2025/page/5/index.html","b9c7a3695be25821149eb1bf58b710c5"],["/archives/2025/page/6/index.html","807ab5aa6f09550124aa6422f9742d57"],["/archives/2026/02/index.html","b1af887fa57ac2ce02378556bbdaa9d0"],["/archives/2026/index.html","5d7e7bea32d0575d0348db0f78b196ad"],["/archives/2925/01/index.html","b53b90504b59d5e573a9785827c3cb72"],["/archives/2925/index.html","5642120e3b6f83770c5f1c6791550949"],["/archives/index.html","56e8478cf7b9127ae1ad26fa0f210651"],["/archives/page/2/index.html","024e635e0b505921a43a398ce696f963"],["/archives/page/3/index.html","5033175885fe6b1e180b43f899c3046e"],["/archives/page/4/index.html","c9e6ef52824834d3acf9fe2353543580"],["/archives/page/5/index.html","8c6cf87f9e16c5a4e7fc44fc75964cd5"],["/archives/page/6/index.html","c297204bed444f3a110ec33b818324be"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","a93d31567590eea88099854d45041787"],["/categories/galgame/page/2/index.html","9b7896c6fd7911b04be6f6074800ed25"],["/categories/公告/index.html","3a36f7d7882dd62852d56d06d93042be"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","0d184852608da5895df675c07f4fa9ec"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","75bb63c7ff629dcaec1c1256d3bb0582"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","1ff6a9c83b62bdbe8f496155d81f871d"],["/page/2/index.html","e3330701e81676b9b9c2c91372d6b6df"],["/page/3/index.html","f059ad711bc0feecd04c71359a5959ef"],["/page/4/index.html","ed2d53394dadf1398e21ed99d2deb525"],["/page/5/index.html","068059ecd68659e2952cef216833c658"],["/page/6/index.html","10c099b9d3a150ddd7b49df3dc101c6f"],["/posts/10c9dd98.html","fa6ebcd64c90ca6ef92fd4161cd6ac7e"],["/posts/1370342.html","26a80204aa460edec0a0cc8d048b23c7"],["/posts/15ef14c2.html","cd5c71355ca822e880d0c2608841b47b"],["/posts/15f3959d.html","af048686a80fadd89da7f43a00223b99"],["/posts/18ab785d.html","43d5cbe643aed9598cd624599b0ceac5"],["/posts/1d59b71f.html","141013bd14bd35507889bc0ff62ad0ce"],["/posts/20b3f3a4.html","22a5fd8c09b9bda7305e9efb0b103cb4"],["/posts/28397adc.html","6d330552f4c2f54a280f5fcdc68b48ea"],["/posts/2cf620f0.html","7529101ef1a74d706f197ef3e845d8f2"],["/posts/303007ad.html","a7b8353d832a538a679b6fccd36c17a9"],["/posts/3f7d823a.html","14d023a62ac2d6f0d1931268c8102bd6"],["/posts/44124a6b.html","ad30c7003d81339131a5153f598fd4ec"],["/posts/4b689be3.html","efca479ce3574cead592f646752346c0"],["/posts/4cf8423f.html","3a2dbfb6c432c57be9d9a1d94b661277"],["/posts/4dcf85c.html","b99b1ff536b54eefad35949334d45c21"],["/posts/51c9b1ff.html","aabc1140ecbc6548b9f291b3babe2518"],["/posts/52b5b3c6.html","c7ce35d0b9b5094ad80f9e5d16a2b345"],["/posts/5f6e0c59.html","783d774630c19a3549c2c6cbcef550f0"],["/posts/6432d61a.html","b4ed7f34020749b9eb0e28670eade750"],["/posts/6515f032.html","47f87c2c686558de6072e3a7a46c2c7b"],["/posts/71131d34.html","492721b68852d75d4cc5fd46977e4ed6"],["/posts/78a8a8d3.html","37ed08a9961030b0562444a4e3db5535"],["/posts/7e3aa3e2.html","570b76bf1a5ac86b1e448b24dced572f"],["/posts/80fe2691.html","17f43b292fb5669d13ae1f268921f1ab"],["/posts/81ac52e9.html","d73ff549defb43291b323ed8b9f772db"],["/posts/886f8d3.html","65fdba0f7c752796dbb94a6670c834fb"],["/posts/8dd520d9.html","657e599b9202c5b681faead3caab0167"],["/posts/8f555654.html","cf197c089156c0beb05601ea17fee8bc"],["/posts/92a980c2.html","afac5b352e6ff04e7d4a93d8f57a043d"],["/posts/94d3c794.html","345069df2a13c1943243f0de07fa9195"],["/posts/97f50eea.html","2acf9eead85967a5ee35748b30887bb0"],["/posts/98662d05.html","47ef53fd4d6522375fff3f83f645e448"],["/posts/9a2f6162.html","c9a9c3d1789a83369e5470c44a3086ee"],["/posts/9b22a48d.html","7016346a946220eb2bfabc448030dbd5"],["/posts/9cb455b1.html","c3a6837174ecc55d811193277722b94c"],["/posts/9f61c1a0.html","2c70fd5b31ea949cddcc0d86dc6017a8"],["/posts/b497b647.html","d3fb2c651eeda54344c5ccb77bed2a63"],["/posts/b5fb773f.html","a19a9173012b0c98989c1348be84aab7"],["/posts/b8d46b32.html","6c35eb88d7f5233ec66bee481dc5a4d0"],["/posts/c1b2c6c9.html","e86668603cee61546168d7823a08bf7a"],["/posts/c316c2e8.html","f8d1f8ce9334ef059eb5b80c577c9327"],["/posts/c497a412.html","4d5dbcecbe3a2794df1ef2dfebf0cd49"],["/posts/c5de299a.html","7bf4854120e0d225f7f1d913e16d0160"],["/posts/c70bba9c.html","1ed06793b8f429b6228a19a8b14a7cf5"],["/posts/cbebef2b.html","a596a788d41f1ac46cd998b9f90440d0"],["/posts/ce25023e.html","e69d5deba0b2b3109cbee535b9b9e65e"],["/posts/d2fd4837.html","dbff71a71d352789576d02432746aaac"],["/posts/d3a745a8.html","a7715bf786deda64618e2b397a60fa34"],["/posts/e3ab6ad8.html","d41744f482b00260dd9351e6c7d94d03"],["/posts/e5018da6.html","6badae2a67686d9f4f99e701772f03a1"],["/posts/e624b065.html","75f7ce1d1a0eeaeb631bf4037ca89861"],["/posts/e91abb63.html","140a470daaf216f9f732ef90274f8f52"],["/posts/ee1ed673.html","43cdf805139afe5094a5c2cb76d8d02b"],["/posts/f230b0fd.html","3c4daf958ff58e2c67fa7b22edd2f170"],["/posts/fc04d0d4.html","b436081e9befb28783a1d8f0e555f283"],["/sumire/index.html","10bd587fbf39f694d5e14be6f1f90cb1"],["/sw-register.js","8656d08a2e38c3a083c1bda17bb77a54"],["/tags/CHUNSOFT/index.html","a71cdfc8727a58a6ea20b5b9ec597386"],["/tags/Circle-Mebius/index.html","80ffcca15ceea0f605a3756ce16bd022"],["/tags/Omegaの視界/index.html","60846db36b559ce5dbc55373833763d5"],["/tags/PC88/index.html","3835b43e987d5be0bdc1b3d2a3f69bf8"],["/tags/Witch/index.html","916ca0e8dafbaf47fb20717e0821c195"],["/tags/galgame/index.html","3b0f190652f869e59213742c4ab9bff9"],["/tags/galgame/page/2/index.html","a1b23a8351b6312b4f43e8318927aca5"],["/tags/gal资源/index.html","e6543b188a718afb0fce63e7d2e2cf6c"],["/tags/gal资源/page/2/index.html","55e7acebb96b7bbb6016092ac0615995"],["/tags/gal资源/page/3/index.html","e8449d1d37a90efd062aa4e3ee8a944c"],["/tags/gal资源/page/4/index.html","5a3362fa2e8196cc4de9e82a1b35a7d0"],["/tags/index.html","29c3cf908f9dfc6cf84cb8388c261394"],["/tags/rkr/index.html","cd33b893287d201141da90396a9e0000"],["/tags/ねこねこソフト/index.html","37922491d9b13db384ed1526deb57872"],["/tags/ねこバナナ/index.html","e3b7141ed5b85259c612ee1be917d5e3"],["/tags/停产/index.html","a1f92ad2b847d28afab0acbc6aeb5150"],["/tags/公告/index.html","44d5a3b2ad499e90b269e3c0eadb0ae8"],["/tags/同人/index.html","c7a1577b930c0e0858e552f68a92e31b"],["/tags/堀井雄二/index.html","7348e464f53e6fd04a5a948579cb909b"],["/tags/已停产/index.html","33416be0401544e81cd983aef216d3ea"],["/tags/水仙/index.html","ae35742d765f91d6f0cc250606549bc2"],["/tags/片冈智/index.html","0a26af5a8eb3b5ab08de2df23d73eab2"],["/tags/猫猫社/index.html","6a9e5a021fffbfe828c3fc382110d058"],["/tags/画集/index.html","b9dab7bc41b47e81681725fcbe07071c"],["/tags/閂夜明/index.html","3cfa2cc6eed08b22290e816306c4d832"]];
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
