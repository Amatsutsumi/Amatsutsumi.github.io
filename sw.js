/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a2cac7e6939171a8bbff6f9394d761bd"],["/archives/2024/04/index.html","d05841e3b69fc03de0e9702b8c0c0922"],["/archives/2024/index.html","b37db13fe36c82e743eef68ca75280fa"],["/archives/2025/02/index.html","e6f9e23e92874bdd81505c037287d8a2"],["/archives/2025/02/page/2/index.html","2fc932922e83dfffa57cc42392ef9d34"],["/archives/2025/02/page/3/index.html","f707eadcca54adca428060d7bb98c562"],["/archives/2025/02/page/4/index.html","572673786685a6f2e80f9e2bc9821c14"],["/archives/2025/02/page/5/index.html","429de3bd7d8d8c90bef1b8d109bf8f1c"],["/archives/2025/09/index.html","e6a824bc60922624fe45bbe8f2c8e170"],["/archives/2025/index.html","d3c04e07b0924aa7354d383ef0a04720"],["/archives/2025/page/2/index.html","d30f796900612cf2fb676139e1833406"],["/archives/2025/page/3/index.html","17c2c2ecba831d3c4d54965083fbd669"],["/archives/2025/page/4/index.html","99bcc7a346a3dbaf0322f5953b6cf219"],["/archives/2025/page/5/index.html","772aeec618616a38d7c4b4f6476867d9"],["/archives/2026/02/index.html","76c37c9b8b52d619e3e04aee7310b8dd"],["/archives/2026/index.html","f90e379769297dd71827fa705f64052f"],["/archives/2925/01/index.html","884a3f062c15a917cda254895c070228"],["/archives/2925/index.html","26e235296dd3a5337a6262b990ba64c0"],["/archives/index.html","79c539cf1a381b1f15f886b5e95cea7a"],["/archives/page/2/index.html","7ad6675627b72cb2496549418297e203"],["/archives/page/3/index.html","03395a1a72663f3747b96e72528b42da"],["/archives/page/4/index.html","f31a9e24267d7ba8d3ae3f69be020a00"],["/archives/page/5/index.html","3889bc0ea8c845df59ddef2d3eb6a336"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","edb1ab79d571b1db182a2f3f39574bf5"],["/categories/galgame/page/2/index.html","bca2d3fa141af335fd79fa3791abc22f"],["/categories/公告/index.html","902dc2cd82a61c7d36f23f72e34bfee8"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","3da63c17eb7080ecb3139c0c399e6606"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","0cd7937a4b8d46a96ba8af400aecd00c"],["/page/2/index.html","726e11d52cf0b1e03367b0e2dce08efa"],["/page/3/index.html","d6be4894180ce437406a4eaa2c864941"],["/page/4/index.html","6e7b01d548ac119183cc2deb6c54cd1e"],["/page/5/index.html","3956789e3f9d25a3a7a9c9bca4175317"],["/posts/10c9dd98.html","472bc6666a8d7e1d8e0a20d5cfce93ab"],["/posts/1370342.html","580223223238b292c013f790a4017010"],["/posts/15ef14c2.html","704871663e8e711cff5166a779b86920"],["/posts/15f3959d.html","78090acdab0fc7919afb9393b6834e2e"],["/posts/1d59b71f.html","72682ad680e8c38cb5bad95e091ff3ee"],["/posts/20b3f3a4.html","4cb999713c7a51a89eeabd91900bf0c5"],["/posts/28397adc.html","4e67d15e88d4b631844923e88cd0c4f7"],["/posts/2cf620f0.html","b7e889732bbc62b6f05694adfe006df9"],["/posts/303007ad.html","789895ce73b931568c1c0e150de83b72"],["/posts/3f7d823a.html","d7d01c1528059e2698641e5635ce8cb7"],["/posts/44124a6b.html","ae48ffbadede61b57784f74a032bfdf1"],["/posts/4b689be3.html","cefe54346c85e5c2bebfae1b9a5ad127"],["/posts/4cf8423f.html","c9d13f63a7cfcd3856cb9b6b9f9e6d39"],["/posts/4dcf85c.html","84e75d40cab0bc649989359238ee58fc"],["/posts/51c9b1ff.html","5aab41026a495637c41733332a20fb5d"],["/posts/52b5b3c6.html","b8cd652c52b7fe4f7732d97d9b43cfd6"],["/posts/5f6e0c59.html","c21026f14501ea559a7d09e2d9f0abf9"],["/posts/6515f032.html","e77bf99444b4e9cab550c448526b92be"],["/posts/71131d34.html","1b71ab6613ccccdaa4f00fe677a91d77"],["/posts/78a8a8d3.html","cad0b5be317d01de1d8e7b840b4f663e"],["/posts/7e3aa3e2.html","9d2a1ab9fc0153b99af05afc33c540b8"],["/posts/80fe2691.html","283754b2077211067069b31406a694cc"],["/posts/81ac52e9.html","4b6c411a84536c8154084ba3ec101d71"],["/posts/886f8d3.html","db27201b64672bf89bb471c0550480c4"],["/posts/8dd520d9.html","c30bc69205d170eb244d39df3ffe8371"],["/posts/8f555654.html","caf713340bc11daf29d4b0a453d45604"],["/posts/94d3c794.html","c65a2bdec4d09a3af3fa6340ce5512f5"],["/posts/97f50eea.html","934cffa9ce5c606391630ba5e3d3ecc2"],["/posts/98662d05.html","6d127b2f922111e279aae33ec3380647"],["/posts/9a2f6162.html","947648663277c32f10f4393ca91a2433"],["/posts/9b22a48d.html","85725aff18b5d9721da568a70bfa2fb8"],["/posts/9f61c1a0.html","f0b74d1e3aea048ab0ff8cb48431ebcc"],["/posts/b5fb773f.html","3c6a18babc3499142d38b38c929149d7"],["/posts/c1b2c6c9.html","33665fef370173c36677270026a0317c"],["/posts/c497a412.html","f115fb772214f5f7044a80f5ce0bb03d"],["/posts/c5de299a.html","a6ef96c3aa7b09a83c4098fc9f2fdce5"],["/posts/c70bba9c.html","9e783b6044b3d2b55858c8c43aa870b6"],["/posts/cbebef2b.html","f449289c7cded0930ca4cb3d48ac0c02"],["/posts/ce25023e.html","084527e57a7bc4a588fb4b1f28916e24"],["/posts/d2fd4837.html","a9bf50cd98c7d63bf481e25aa85b3148"],["/posts/d3a745a8.html","8172f29add02b436d914d3919adcb052"],["/posts/e3ab6ad8.html","634eeccf6a504096ff38b0458c18c5ba"],["/posts/e91abb63.html","4bca99acbfe1a60f96cf45e2f0b439a0"],["/posts/ee1ed673.html","e916027c281ba119f6af464c6a71214b"],["/posts/f230b0fd.html","c15f0190c5bdd3ff82a1210aa4b181e7"],["/sumire/index.html","affb30a7f4c368de1041359b0f27b44b"],["/sw-register.js","73f0e0207e33f8f604826fa960ce82d3"],["/tags/Circle-Mebius/index.html","88f4a1829afb183b6efbab718c6e3502"],["/tags/Omegaの視界/index.html","42845a53bb8d6287da6140ad9ed3349e"],["/tags/Witch/index.html","48d317de32c2d868f04335ac60bdc1e3"],["/tags/galgame/index.html","d6af113fc32845283447ade585e7e698"],["/tags/galgame/page/2/index.html","a09d2f59ddb541ea92a10870445ba05e"],["/tags/gal资源/index.html","18ac25994407aec09e8eaf01753ab0dc"],["/tags/gal资源/page/2/index.html","fe59d55d30175e15e3d1b01b749a2047"],["/tags/gal资源/page/3/index.html","e0a3102ab36e38193680ce869f95bfe0"],["/tags/index.html","a17bdb65fce52a3037c9e6a790dea3f8"],["/tags/rkr/index.html","352392db86430615badb1aedf1e4881c"],["/tags/停产/index.html","3a06eb91cf86da02fc539506e199ab2d"],["/tags/公告/index.html","c94a99ba5f249ed350de224bc92b9949"],["/tags/同人/index.html","989eedefe45b54c4761a525d4281c43e"],["/tags/已停产/index.html","b777f5b20b0f6436f4348870467210a1"],["/tags/水仙/index.html","b2e96ad9577d58921097cb8a80e0cb3f"],["/tags/猫猫社/index.html","1d05355f0a2f7943c6aed4b970728e29"]];
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
