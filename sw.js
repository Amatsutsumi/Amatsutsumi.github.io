/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","476d96f3226b215ac9df01e47c31337e"],["/archives/2024/04/index.html","fb779a35d9c85b72a25411574569d9df"],["/archives/2024/index.html","e8ecf046c6721759454ee0e8594ec43d"],["/archives/2025/02/index.html","3dc502c1ed2347105651eebd8bceae83"],["/archives/2025/02/page/2/index.html","a0db0b29571f23bc9247183491165e85"],["/archives/2025/02/page/3/index.html","c580551fa3230d80df0bccffde6e78a9"],["/archives/2025/02/page/4/index.html","73df895097ccf3d83ed81edcacd0b449"],["/archives/2025/09/index.html","8b5c097ffb4d38ee12ae0e9c0d29e4aa"],["/archives/2025/index.html","e9f5c4ee2530e298e7273e5510a05406"],["/archives/2025/page/2/index.html","f56adf12933e424239d341373cd6ca13"],["/archives/2025/page/3/index.html","2a9ff91d7ba7bcd36fae5d312ffa0293"],["/archives/2025/page/4/index.html","ec3dbb5690b3069a60e087bbfac02ecc"],["/archives/2026/02/index.html","3e0a141267153c8e3abe6e665629570c"],["/archives/2026/index.html","db7498974e52bd8368faf72620f0ca67"],["/archives/2925/01/index.html","1cc4add058f40593f572fa782298dbd2"],["/archives/2925/index.html","105f3ef4e3c9d79efa4934f67a5354fc"],["/archives/index.html","699a715cbc8e135e1e5d25a7939999cd"],["/archives/page/2/index.html","dcce72a3f0d5331350059a63e2e9c8dd"],["/archives/page/3/index.html","1d00addfb2d621de1ad915f95421c938"],["/archives/page/4/index.html","cc00dfc692d74238403865786f8c96a0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","d5ca12093d82c0bd114610c5bf84da56"],["/categories/galgame/page/2/index.html","763be2be35a76d9b39565d457f05bf32"],["/categories/公告/index.html","9e75a9171b3d92d28ba6298e0e65e69b"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","f0dec95320275870cfeb3eac8b700aaf"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","6c92b0d814543ddeeef4187564aba90f"],["/page/2/index.html","041259fe910f7c0e8e58ce3874852796"],["/page/3/index.html","5e5095c53742a94b9f4232d01c549220"],["/page/4/index.html","c80059e2efe1f4ee8bdf99cf2dfd13ad"],["/posts/10c9dd98.html","4e19a1026fa14d3fdd43f0108c032df1"],["/posts/15ef14c2.html","f83d67b2811c8536a642c79b1c852c62"],["/posts/15f3959d.html","22f66641296b3e2582b9aea68736dcd0"],["/posts/1d59b71f.html","4322ace0e9890b4ee0190e3d28f6e7ae"],["/posts/28397adc.html","bdc28bbf7e762c0e7549660f02077d5e"],["/posts/2cf620f0.html","5ad6d566c24bdc1dadc24faa0113fbaf"],["/posts/303007ad.html","19316b4d02a313f18a30f61dfcd057c1"],["/posts/3f7d823a.html","4383715516bffb0796b52482a2208d0f"],["/posts/44124a6b.html","7abf92a98661595f6d1e29bf2cc74c9a"],["/posts/4b689be3.html","ea5a98f1a084ca6dd885b4fe47deec29"],["/posts/4cf8423f.html","5781ea796b9dbc6225ed2fb0a49f0d4a"],["/posts/4dcf85c.html","9a22b4f2c4eb745cd5a4aa34b88c64ad"],["/posts/51c9b1ff.html","685a670f24f678cd93624536557e7e87"],["/posts/52b5b3c6.html","48144a5c64bb3d57cff2753da82c6e21"],["/posts/6515f032.html","1366995a6d08f42d95ddce20c527c273"],["/posts/71131d34.html","6c02bf374d8d775ad3dc071ccea7ee26"],["/posts/78a8a8d3.html","30dfd0292bc94705590fc22d241ec003"],["/posts/7e3aa3e2.html","ca042b6901562c8bc3521dbe97d43ae7"],["/posts/80fe2691.html","8e0aefbc5ca39163f0f19696189cdaf1"],["/posts/81ac52e9.html","d529d575118d181e1fdaa718cbda094f"],["/posts/886f8d3.html","92e94c6f6bae918ea445a5c4d64e80d6"],["/posts/8dd520d9.html","6171d39061521a0441879afcc3a5a892"],["/posts/8f555654.html","02872edb36d9036340377bdab11eaa75"],["/posts/94d3c794.html","92fd0ff8a209acf8149e088a29774cb0"],["/posts/97f50eea.html","11041dec944198e66a7d73c6b6b452db"],["/posts/98662d05.html","9da5160b60d6685d02a386c5516eae5e"],["/posts/9a2f6162.html","074c26a532ddb0fce58d44fbb28e95fc"],["/posts/9b22a48d.html","12383e75a6c30d13bff5d6e5edfb2164"],["/posts/9f61c1a0.html","39a70185a2acf1abf3104dae9bee2f6c"],["/posts/b5fb773f.html","2a1604144d7fd2b1d170e0aa5d481f12"],["/posts/c1b2c6c9.html","d54ce2c85bf51ced635a341d3e05cdb7"],["/posts/c497a412.html","5616199b633f9761329ca5f8f7ea553c"],["/posts/c5de299a.html","33ce5c0cdc6e02f2ee77c96f5de411dd"],["/posts/c70bba9c.html","16670a18bb31395f11a98a1e2ba3aa4f"],["/posts/cbebef2b.html","10dc3bbfbef94bd0b124f82613b7935c"],["/posts/ce25023e.html","57e139d1f21a6050c3f15e17ad77fd95"],["/posts/d2fd4837.html","a911dd2de005d6a9e38e25559855ddda"],["/posts/d3a745a8.html","8b28cb0587ab74d83f5f1159ff14a104"],["/posts/e3ab6ad8.html","256d11718cf5bf7872474ea0c633f4f3"],["/posts/ee1ed673.html","02b6ec4d144055e38c6bcbc0c8728df6"],["/sw-register.js","ef7633ff93d1a21a8d0f56ab5bba85be"],["/tags/Circle-Mebius/index.html","65eec2af8c6450d5cc156e310fbd5a46"],["/tags/Omegaの視界/index.html","80e2f784d801241388e18d39ed88476e"],["/tags/Witch/index.html","3c155dc439d4cff557abb609901aecc9"],["/tags/galgame/index.html","d0c737a973199f228ad3cec10763d14b"],["/tags/galgame/page/2/index.html","6f16bd05a10a365c9191ded65805581c"],["/tags/gal资源/index.html","f88b349b83484d1e2b442a2ccb29a7f9"],["/tags/gal资源/page/2/index.html","177005d1a0e834a907897f218faae8c9"],["/tags/gal资源/page/3/index.html","69d722b13f43459d1861ac88be58d0a6"],["/tags/index.html","443c8a687d02cfb5787453f2d444226c"],["/tags/rkr/index.html","b0532e8207ba7231b9285aecefe1d70e"],["/tags/停产/index.html","9328d7f93c9f66b5be84b3811948f36f"],["/tags/公告/index.html","19415dd642f94b14fcfa33148a5a30e2"],["/tags/同人/index.html","e107f3569ab3e314a3e845924e54dbb8"],["/tags/水仙/index.html","e324810c53e4a16a1f49f753ff9e20bb"],["/tags/猫猫社/index.html","acc8a03c560967fdcd426b9b43c3e8c4"]];
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
