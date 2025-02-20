/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","615c54974e27432a01e60c0a3677d9b5"],["/archives/2024/04/index.html","145504882ae1c43cdd9911c5cba1d2d9"],["/archives/2024/index.html","ae82c176129fa81593629d81543487e6"],["/archives/2025/02/index.html","91ab723bdb8f773374c3e9c4b8d0322d"],["/archives/2025/02/page/2/index.html","ecd06e394ba4fd1e50f5276af14cb818"],["/archives/2025/02/page/3/index.html","b3fb62403d5f175b92fe67fb76221b02"],["/archives/2025/02/page/4/index.html","024b1dcb10c0f4c62ab283762e89098b"],["/archives/2025/02/page/5/index.html","97e7c96862e76bfef3b9d1acbf67e435"],["/archives/2025/09/index.html","0bd8dbed385a5ea554407d86b0aaf335"],["/archives/2025/index.html","1e94e47daad6b92cb97a6a5846915b83"],["/archives/2025/page/2/index.html","4a535dc254145ae52ccfac2f001d0f15"],["/archives/2025/page/3/index.html","22bcdf569a739ae148fe34a6d05efeaa"],["/archives/2025/page/4/index.html","9e7f174c2c2eb587aed752d98d26d595"],["/archives/2025/page/5/index.html","1faec4fe4a04d2ec8dfce2915575e4f1"],["/archives/2026/02/index.html","36277698dee01959ecb24afca644d375"],["/archives/2026/index.html","6ca2231127e0f6b3ce4144297356d351"],["/archives/2925/01/index.html","770ded26808871563f7bde69a9daf5e5"],["/archives/2925/index.html","e16716f56e8dbbdbbd501e3a9ca22585"],["/archives/index.html","f07e2a4bdd64e134c70d7e50aeeb287b"],["/archives/page/2/index.html","f9236bfdc219595729cb0d7b07cd7085"],["/archives/page/3/index.html","8e169270ae06e72488da88623bb1b5fe"],["/archives/page/4/index.html","b71aea2da39cfc40e43029c17f341e8c"],["/archives/page/5/index.html","69e50099b3d94dde7cfbdcabc870016f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","6d34e759ed9fd47c7f078dcf82d43c35"],["/categories/galgame/page/2/index.html","2d3e5eadeb94ce2d0c107fddf36ac5d5"],["/categories/公告/index.html","ac410f9785eadb3b8b01d3ad54b6692a"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","8bb6377f31c3f3e2e4c6ed12a897b2d0"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","98813cc843ed5bde48a735c2a6813578"],["/page/2/index.html","4a20e9a03207018bc29efef20ffcca49"],["/page/3/index.html","b8e5a56659247d16dae617afc2700c37"],["/page/4/index.html","fc9cd9a257ced417f6a36a46395b748f"],["/page/5/index.html","526f26db865087f8fea767d8c676b30f"],["/posts/10c9dd98.html","644170ffa422d52ac2f2237e6aac5ed9"],["/posts/1370342.html","35a2ec86796c186e00aa2ae7568349d3"],["/posts/15ef14c2.html","7be215b72a8644b629a80c07a6e29d0c"],["/posts/15f3959d.html","e93cb005e436457cd88f01d143a0e101"],["/posts/1d59b71f.html","cd3bae128303a6fd01b087bac8dbf9e3"],["/posts/20b3f3a4.html","5546087acf1b781ffb4656397aecfb27"],["/posts/28397adc.html","9f01406ae32823d45cef17420ab0da2c"],["/posts/2cf620f0.html","e73fcba6692b5f1c95d127f23373c952"],["/posts/303007ad.html","a712a301ab55af3391bc6492a69dc79a"],["/posts/3f7d823a.html","c031d6e568725db8c5ccaace62f9e595"],["/posts/44124a6b.html","16cca9b2a04d19ff110aa444d77bc6ce"],["/posts/4b689be3.html","5a6ed17c81645a4b0479703a0c321e27"],["/posts/4cf8423f.html","20949c03e33f9a3f0e10fbe174558612"],["/posts/4dcf85c.html","fb447d0f5cbe4a34f0a9c7033091098a"],["/posts/51c9b1ff.html","1f3e75fe738b1e629b58738560b73148"],["/posts/52b5b3c6.html","4e9c0a376b49298ea06abe01710061f3"],["/posts/5f6e0c59.html","a262a9c1b87ed6a7c476617cd612f51d"],["/posts/6515f032.html","c7adcb621b0cf3108ebb2f69f1988ea9"],["/posts/71131d34.html","3c7d432e4f31c825b27096b5a478ef56"],["/posts/78a8a8d3.html","125f9a91d00b8d15d5a2cc25e4a69002"],["/posts/7e3aa3e2.html","0a8d3c97e02e36f36cee83b1fafb8ff7"],["/posts/80fe2691.html","73b0ceeac4e16ff192c7b7aa7a73e487"],["/posts/81ac52e9.html","bccb156aabe6f4154607d286c8915e01"],["/posts/886f8d3.html","72d8ca368e82697cf7bd868d7984425a"],["/posts/8dd520d9.html","4a2ec82d9f1d068a48f5fd1006f548d1"],["/posts/8f555654.html","61f4a9c8677f0fe37aa59b527c6cf8ce"],["/posts/94d3c794.html","4ae6fe2876ff7e1fbc4d68d1e1eb50e4"],["/posts/97f50eea.html","c34ca4a080466bbde639dc664517fb7e"],["/posts/98662d05.html","33f6eb34b7c7da904b8881e158eb8984"],["/posts/9a2f6162.html","cf724492e58371d0cd2950e96e1d1ac9"],["/posts/9b22a48d.html","9851367a7ee67d797ab5696a05fc3f9d"],["/posts/9f61c1a0.html","fedd7c8f4ed1a678766707e7f7df754b"],["/posts/b5fb773f.html","b805665103b3af930068cfd010a6c927"],["/posts/c1b2c6c9.html","2a6bbd4b080052da35699fd8b0e6756b"],["/posts/c497a412.html","369ab214d4fbb09ac5786ac67fb42b0b"],["/posts/c5de299a.html","444cd43a6448ea7ed9a8ea819cdc6dfb"],["/posts/c70bba9c.html","863748e144ca1d9a85cb16b80fdce317"],["/posts/cbebef2b.html","7ed9bd3611c0278f997e45b3021a0615"],["/posts/ce25023e.html","96e73058c94ceaf298975f61a77fd818"],["/posts/d2fd4837.html","49a4dd46fc5d9bf289c9e8a48411bf06"],["/posts/d3a745a8.html","1831a4822b0c729c5c85dc968a51231d"],["/posts/e3ab6ad8.html","5de21165643fa8622df0e395a5b0aa68"],["/posts/e91abb63.html","f93185d3685d921bf149ede98c6e76ba"],["/posts/ee1ed673.html","32c13db5d850141c20f6d821edf00149"],["/posts/f230b0fd.html","2c4e4d661aa6cdce8630b91b6640bfcb"],["/sumire/index.html","d4ccb745c690494f744ee0c39395b66e"],["/sw-register.js","70c7dd8e1f8bcc6fcb84f3e8527db051"],["/tags/Circle-Mebius/index.html","f51c79e146afea1e47d314d28a56daa3"],["/tags/Omegaの視界/index.html","281a6be44f043330126ef9ac7b393452"],["/tags/Witch/index.html","71a83b64cea6c94fe244e213347c7086"],["/tags/galgame/index.html","18cb0b7e97b5b3f474c1e33157c82c64"],["/tags/galgame/page/2/index.html","80c4d7e667d8c7c3e8ddded53b04c4d6"],["/tags/gal资源/index.html","cdc3b57d9be1d37e9d80a43489919a6a"],["/tags/gal资源/page/2/index.html","ed3f7cc6ec10c90202bca86b3f0978d2"],["/tags/gal资源/page/3/index.html","70428dba9b86cf7100452a978155a45d"],["/tags/index.html","1d112e9d1dcf89fa6c7ca5ac610a3e24"],["/tags/rkr/index.html","f8d4ca020c44b8b6e858e76edb8cbfca"],["/tags/停产/index.html","90b536cf3a712111bdc515cffe912d4b"],["/tags/公告/index.html","e775fcbbd35c9b9256b37cd8d4c78a86"],["/tags/同人/index.html","4a6ae22dcd9b8749d7f7cef3298571c4"],["/tags/已停产/index.html","6e49a8b3fdb24dac5f5617db37a2f9a9"],["/tags/水仙/index.html","a6eff7c5f44ea07439f57ad9c1e77a62"],["/tags/猫猫社/index.html","f51e1414297c6090f98d6376c0bef6f5"]];
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
