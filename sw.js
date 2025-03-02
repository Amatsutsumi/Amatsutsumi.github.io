/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","897b0b3afeaa0d1f86b81ea64d64411b"],["/archives/2024/04/index.html","8cb4fa1d39c6089f56e43528fbb8ee16"],["/archives/2024/index.html","02b3770d4a18144c8980e09d2eebba07"],["/archives/2025/02/index.html","b7c87abf082069fa585f022ed7f68324"],["/archives/2025/02/page/2/index.html","edfc81f1488b432d8e5aedabf0fcacea"],["/archives/2025/02/page/3/index.html","3d3acd573cbb921867b1fb1f5db76545"],["/archives/2025/02/page/4/index.html","d977969ae38cc739160ab701c5acfc6f"],["/archives/2025/02/page/5/index.html","87dfa93b1eb9c29577de2b161b9ce64b"],["/archives/2025/03/index.html","f8841909853883d988a72a122d4c5428"],["/archives/2025/09/index.html","c8e65b2d2ccb9847f232e91f359aad9e"],["/archives/2025/index.html","7e9543c5a0ac6f3cc16b150052c72a3a"],["/archives/2025/page/2/index.html","123cae22d6ac9bc11844a5fa4a377c22"],["/archives/2025/page/3/index.html","f72698801dd95c80b07eeea6caa97fa6"],["/archives/2025/page/4/index.html","d4610d9bb0ffa0d849b0af6ba5139462"],["/archives/2025/page/5/index.html","4bac83b479c0bbd5844a9dec0aed504d"],["/archives/2025/page/6/index.html","0fc822c055e4605500b2201c504edabc"],["/archives/2026/02/index.html","c4e371222634b2dc45535bd959ce6b75"],["/archives/2026/index.html","742f21cf9253fdec5e2cbf353d7007f9"],["/archives/2925/01/index.html","159d06790a92da2b1d862c4a79030ce4"],["/archives/2925/index.html","20ed20a44a78cceb57b996d9ef350d2d"],["/archives/index.html","5d0c4b79a3632b81081f11c09ba93788"],["/archives/page/2/index.html","1797afd25e4acee53c6bd5b1d3bd4079"],["/archives/page/3/index.html","e17e404b2a0b781e61cbca0358d56303"],["/archives/page/4/index.html","36b4a3657608d506426e67412e68f6b9"],["/archives/page/5/index.html","1a559dfe98448b2ebdc86ef57af132a6"],["/archives/page/6/index.html","a98a9cde13098f4511c49d799cb15577"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","dd8079fdf5a31b66064ad705df17d5db"],["/categories/galgame/page/2/index.html","442ee478a9928225ca1e85a4028dc3f9"],["/categories/公告/index.html","fa27e612c48317b63938fb1fd8968029"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","bad221f3b76483fb31cc6ac045e81b69"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","358457a6ef14db1400143b96b4d67a14"],["/page/2/index.html","d72afe9d41b49335eae51e2b12546e67"],["/page/3/index.html","48f93229e8cc047bb0bd934644ff9245"],["/page/4/index.html","debccccbf6c66539d9b381f205d9d82c"],["/page/5/index.html","b3fdaf6b915a594c9a69b67f4652e5e0"],["/page/6/index.html","a1f3fd85a19ca7841ba2feff8d03ed7f"],["/posts/10c9dd98.html","fa6ebcd64c90ca6ef92fd4161cd6ac7e"],["/posts/1370342.html","26a80204aa460edec0a0cc8d048b23c7"],["/posts/15ef14c2.html","cd5c71355ca822e880d0c2608841b47b"],["/posts/15f3959d.html","af048686a80fadd89da7f43a00223b99"],["/posts/18ab785d.html","43d5cbe643aed9598cd624599b0ceac5"],["/posts/1d59b71f.html","141013bd14bd35507889bc0ff62ad0ce"],["/posts/20b3f3a4.html","22a5fd8c09b9bda7305e9efb0b103cb4"],["/posts/28397adc.html","53440135832f6b56c54fe35e784b4b7d"],["/posts/2cf620f0.html","7529101ef1a74d706f197ef3e845d8f2"],["/posts/303007ad.html","be5cc8edffaab7126eaa7f539d9c7ecb"],["/posts/3f7d823a.html","14d023a62ac2d6f0d1931268c8102bd6"],["/posts/44124a6b.html","ad30c7003d81339131a5153f598fd4ec"],["/posts/4b689be3.html","efca479ce3574cead592f646752346c0"],["/posts/4cf8423f.html","3a2dbfb6c432c57be9d9a1d94b661277"],["/posts/4dcf85c.html","b99b1ff536b54eefad35949334d45c21"],["/posts/51c9b1ff.html","e12d8e2782d92cd329f7d1ac9e58c1e0"],["/posts/52b5b3c6.html","c7ce35d0b9b5094ad80f9e5d16a2b345"],["/posts/5f6e0c59.html","783d774630c19a3549c2c6cbcef550f0"],["/posts/6432d61a.html","b4ed7f34020749b9eb0e28670eade750"],["/posts/6515f032.html","47f87c2c686558de6072e3a7a46c2c7b"],["/posts/71131d34.html","ac37a3f245724154b3af3f15294e9e06"],["/posts/78a8a8d3.html","37ed08a9961030b0562444a4e3db5535"],["/posts/7e3aa3e2.html","570b76bf1a5ac86b1e448b24dced572f"],["/posts/80fe2691.html","17f43b292fb5669d13ae1f268921f1ab"],["/posts/81ac52e9.html","33889730ac6410b001b06cd02f5eccca"],["/posts/886f8d3.html","65fdba0f7c752796dbb94a6670c834fb"],["/posts/8dd520d9.html","657e599b9202c5b681faead3caab0167"],["/posts/8f555654.html","cf197c089156c0beb05601ea17fee8bc"],["/posts/92a980c2.html","afac5b352e6ff04e7d4a93d8f57a043d"],["/posts/94d3c794.html","68cb49488ffb09eb38608f56732f6af5"],["/posts/97f50eea.html","2acf9eead85967a5ee35748b30887bb0"],["/posts/98662d05.html","47ef53fd4d6522375fff3f83f645e448"],["/posts/9a2f6162.html","c9a9c3d1789a83369e5470c44a3086ee"],["/posts/9b22a48d.html","7016346a946220eb2bfabc448030dbd5"],["/posts/9cb455b1.html","c3a6837174ecc55d811193277722b94c"],["/posts/9f61c1a0.html","2c70fd5b31ea949cddcc0d86dc6017a8"],["/posts/b497b647.html","d3fb2c651eeda54344c5ccb77bed2a63"],["/posts/b5fb773f.html","a19a9173012b0c98989c1348be84aab7"],["/posts/b8d46b32.html","6c35eb88d7f5233ec66bee481dc5a4d0"],["/posts/c1b2c6c9.html","d682aa116ac78732d6c8bb2453ced088"],["/posts/c316c2e8.html","f8d1f8ce9334ef059eb5b80c577c9327"],["/posts/c497a412.html","4d5dbcecbe3a2794df1ef2dfebf0cd49"],["/posts/c5de299a.html","7bf4854120e0d225f7f1d913e16d0160"],["/posts/c70bba9c.html","1ed06793b8f429b6228a19a8b14a7cf5"],["/posts/cbebef2b.html","a596a788d41f1ac46cd998b9f90440d0"],["/posts/ce25023e.html","e69d5deba0b2b3109cbee535b9b9e65e"],["/posts/d2fd4837.html","dbff71a71d352789576d02432746aaac"],["/posts/d3a745a8.html","a7715bf786deda64618e2b397a60fa34"],["/posts/e3ab6ad8.html","d41744f482b00260dd9351e6c7d94d03"],["/posts/e5018da6.html","6badae2a67686d9f4f99e701772f03a1"],["/posts/e624b065.html","75f7ce1d1a0eeaeb631bf4037ca89861"],["/posts/e91abb63.html","140a470daaf216f9f732ef90274f8f52"],["/posts/ee1ed673.html","43cdf805139afe5094a5c2cb76d8d02b"],["/posts/f230b0fd.html","3c4daf958ff58e2c67fa7b22edd2f170"],["/posts/fc04d0d4.html","b436081e9befb28783a1d8f0e555f283"],["/sumire/index.html","6a73dc892c0d73529a714af0027cc833"],["/sw-register.js","da6b3d74dd46b65cac56595086009b5d"],["/tags/CHUNSOFT/index.html","95f029045e1924194aa93a3b12141eb8"],["/tags/Circle-Mebius/index.html","16ef9cc927f4bc0a4f1f7160eef71329"],["/tags/Omegaの視界/index.html","764ce46594eeb6790ff12376c93565d0"],["/tags/PC88/index.html","5b837b3abfe3c8f4fef813ab8d524eb3"],["/tags/Witch/index.html","0eb720076014ad3bc76473896cf8e31a"],["/tags/galgame/index.html","220e054b05c8f9aef3b17c372be48712"],["/tags/galgame/page/2/index.html","3a5da101963fc7b6ee15118ca94024be"],["/tags/gal资源/index.html","e50b6f64259c5968260236d47ce40820"],["/tags/gal资源/page/2/index.html","4d469e2adaa7523aaa3421ad50e1f2a9"],["/tags/gal资源/page/3/index.html","85b427f3fb9418fe9ce95b3434803d42"],["/tags/gal资源/page/4/index.html","5a26ed72398f5f566feeb62fb62a09e0"],["/tags/index.html","77e7b44a6739abbadb5b7671879f9858"],["/tags/rkr/index.html","ba4b370be681c1cad6311f8826562cb8"],["/tags/ねこねこソフト/index.html","a351428a70246c339181d2746b678a8b"],["/tags/ねこバナナ/index.html","e98fa9524d67d71aec38f4395b92b8a9"],["/tags/停产/index.html","a2b6d00a21c5f07c1a9939278a785970"],["/tags/公告/index.html","5bb73c54d3e00917cdcddc88e9d2f5e7"],["/tags/同人/index.html","2b293563083ec19faee157d5a4551e0e"],["/tags/堀井雄二/index.html","afc1c8ea72f952845e08aa0046162733"],["/tags/已停产/index.html","df6391a063d44c3a406bdb2f1e955236"],["/tags/水仙/index.html","27caad01f32516bf6dcdd15f2ec4a55c"],["/tags/片冈智/index.html","c933f6bf5e7b01d54bfd7076329449d3"],["/tags/猫猫社/index.html","8484bfd3696e106e30af558b482af1a0"],["/tags/画集/index.html","a971e3082023ed399ba533ae613db1ba"],["/tags/閂夜明/index.html","44d79877c627380fdef0b578df15d7fc"]];
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
