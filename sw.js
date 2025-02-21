/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f109c13dc0b3740c53db82a0cefca391"],["/archives/2024/04/index.html","64f731fbf0bc4e61a4ee10a4aa723598"],["/archives/2024/index.html","7211868636d54e484cb3c5b22fd031ba"],["/archives/2025/02/index.html","77b789e80257bfedc8642cf40316a5a5"],["/archives/2025/02/page/2/index.html","5ed895846cc2fd54a423a59dc7a19b92"],["/archives/2025/02/page/3/index.html","1425a6d90ddb0562433ecd9b0739f2c3"],["/archives/2025/02/page/4/index.html","b5adae0b1ec99293c46a513f70fa474f"],["/archives/2025/02/page/5/index.html","e155c9b4d4fd5dbaa4d416796dd1019e"],["/archives/2025/09/index.html","b9e9d9631a204a67c08989f64a1af65b"],["/archives/2025/index.html","a3f5e4f5a0a0f7511ef8fc6388d0ca38"],["/archives/2025/page/2/index.html","e36740d1c8bd49b0481ab4de0718c6ce"],["/archives/2025/page/3/index.html","38f1f42d1f8835d121808f613fe37bad"],["/archives/2025/page/4/index.html","1e005e9ccc69cef07de42cd2aacdaed2"],["/archives/2025/page/5/index.html","620e83e747646f869b4e01cbc6d08108"],["/archives/2026/02/index.html","1702efe16cd895338764c934050a033b"],["/archives/2026/index.html","8caf728d4d65fbcc2fb29b3f864b2e46"],["/archives/2925/01/index.html","9911499f6d969dd59269cd59eb90d7cc"],["/archives/2925/index.html","d5306aa1ac64535191307a466c9959be"],["/archives/index.html","003d0d2f00b37d256dafd2cfd1459147"],["/archives/page/2/index.html","8b0fc5e3db7faeaab36d37e78b099410"],["/archives/page/3/index.html","046664efe372a55f15472d1e317df251"],["/archives/page/4/index.html","cd0071bdf598375b4e956447e36d1b9e"],["/archives/page/5/index.html","a1eca78c48c8952063fdbacb5f97b9a6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","65498ca80ecd2005b8c82cb454838d23"],["/categories/galgame/page/2/index.html","f909e8eb92c3f13d8c0384102ac116a9"],["/categories/公告/index.html","4fb17e169bc509d9b56737c479650c84"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","5aa8c9dfff72785d68b1233087d6bff9"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","f42380ab0cb4d4828c3e9aae2744bb08"],["/page/2/index.html","7d6cf11b758474e405491ec43e95f66d"],["/page/3/index.html","718a250788187a8979adad984cf37e11"],["/page/4/index.html","85425355690027e3220c0de4f6d753ca"],["/page/5/index.html","9bb3a5891a75f97b20ec803b479740ef"],["/posts/10c9dd98.html","41690db8ab13ad13febe204b826ec01f"],["/posts/1370342.html","0545c110eb6d2e2bffb4a3f371511597"],["/posts/15ef14c2.html","8c250d4961fabf3310e935d4746fac23"],["/posts/15f3959d.html","970d38c05a46452eab1f2e563ce984e2"],["/posts/18ab785d.html","3306756b83bffbae3b49bb985f1568c5"],["/posts/1d59b71f.html","db6d73e4813987cfb81e1e18bcfadffa"],["/posts/20b3f3a4.html","c8f281252daf366dd7eb0933f988d61e"],["/posts/28397adc.html","fb3f74eabbe0d90d7d26d24abcba0a35"],["/posts/2cf620f0.html","4bece539536852a6255990f0e36bd569"],["/posts/303007ad.html","d5b0ba4f219dd9e7a1482e84bbf6f447"],["/posts/3f7d823a.html","74bfebf6af46237f082d43d318c1e420"],["/posts/44124a6b.html","96db806e68ccc107e263e5e20d639a59"],["/posts/4b689be3.html","01df98367388efa34f6c2d11aeea416c"],["/posts/4cf8423f.html","33bca6a4a65e7ce0085f669d2cf06970"],["/posts/4dcf85c.html","8fcdf615515e5e2d3e055c8b31aadf20"],["/posts/51c9b1ff.html","594496c84b0ff9ab02903284b0709091"],["/posts/52b5b3c6.html","81955a147046276c38e11d6c96feb2ef"],["/posts/5f6e0c59.html","18095123aa7c95adead29a1cf9e93aee"],["/posts/6515f032.html","991a358c97c3228a78163475e23d0c5b"],["/posts/71131d34.html","de41f6f98612196dc3f1652b88e38029"],["/posts/78a8a8d3.html","dc83dd5e8f5fb6e1d1a2d35393f18116"],["/posts/7e3aa3e2.html","110fa04429aaacefe446e0d1e5b3e17f"],["/posts/80fe2691.html","48ed07de88bebcdb4a9baefdfb4be6c3"],["/posts/81ac52e9.html","28c1581c1a5fa23ca6401ca97f25843b"],["/posts/886f8d3.html","3030d33b3534f30c10bceca3d4e59ac2"],["/posts/8dd520d9.html","8d1905ffac93c983df64c3cb220983e8"],["/posts/8f555654.html","25a0503bbeed99163700227afa84f475"],["/posts/94d3c794.html","f564d05255cc712af1530e8c979a1d3d"],["/posts/97f50eea.html","09c37b3c59cad94816a80fae355134e2"],["/posts/98662d05.html","582a3e010865d812e9b790d97e2be1ee"],["/posts/9a2f6162.html","56a25e5dc981417f25d6bf1aa349a15b"],["/posts/9b22a48d.html","89412eab3651a84917e30c0f9a655588"],["/posts/9f61c1a0.html","659984ce9ef41d4d95eed7150752a25e"],["/posts/b5fb773f.html","7d3a4bfce1fa3d8269f77520b9dbc8c4"],["/posts/c1b2c6c9.html","e3bac10f1ba3d617eac738c234605a8e"],["/posts/c497a412.html","fcb9c0c33db6f677b50ed59d01473e9a"],["/posts/c5de299a.html","b682f5b1b8ca695e5d229eb90eeb19a9"],["/posts/c70bba9c.html","bb54576f168b588960c8642ff2eb3ae2"],["/posts/cbebef2b.html","ee50e0af4535340531a689b23d30b27d"],["/posts/ce25023e.html","e421276b35587740211f4a73a2e2d9f6"],["/posts/d2fd4837.html","acc925052a986ce13549ad2f80e398cc"],["/posts/d3a745a8.html","b131be2ae9a51b01ee38551cbe2dd4f9"],["/posts/e3ab6ad8.html","c4384dc40a8129bc211d536c3634eb97"],["/posts/e91abb63.html","7b12022bed5f9e1ca5746e2f6456cdb1"],["/posts/ee1ed673.html","5acde169f213384c8859cde6812a894b"],["/posts/f230b0fd.html","2ed012bb9d73adb5b5680260a939e1f0"],["/sumire/index.html","ee45158614d0b3d0a3e346eadb6c5d2e"],["/sw-register.js","4cd1cf7ebd0455d2af88547889f47c9b"],["/tags/Circle-Mebius/index.html","a37e41ddafe9f019fe6c8bb8511fa8be"],["/tags/Omegaの視界/index.html","10dee25dc689ed617976c7046ffce553"],["/tags/Witch/index.html","c8fd59999b92c114b2109e3e059d62f5"],["/tags/galgame/index.html","e1f9a5a8e1422ac113f39096867cdb3f"],["/tags/galgame/page/2/index.html","bcc50d4bbf37986c12ed98a66a408e19"],["/tags/gal资源/index.html","1835c35d1faae2c4fea2030eb1ecfd9c"],["/tags/gal资源/page/2/index.html","45f870b1638ea2fe70114dbcfd9b4af3"],["/tags/gal资源/page/3/index.html","ba6688dee594024699c7abb0e5fb8ffa"],["/tags/index.html","788d05435653e932419db3f93a62dc15"],["/tags/rkr/index.html","a7804b602a8109599f99586909e7dd6b"],["/tags/停产/index.html","363c8f7346e9604d5bddafe025fb00e5"],["/tags/公告/index.html","c8a44cb964f746de45bc4b69ce0f147f"],["/tags/同人/index.html","cf9cec99cbb84e621a0c2e198e29710b"],["/tags/已停产/index.html","1632c1ed0fed56a6a156da0d2a825da1"],["/tags/水仙/index.html","6a13b6c3cef628e3db96b35f4de21f05"],["/tags/猫猫社/index.html","3a13d1d939a4ed55d09122508f37532b"],["/tags/画集/index.html","f992663aff193e388b290ce6f9ec69d7"]];
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
