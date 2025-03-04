/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","2c249c580e555fbc9f7525aefbb87f2a"],["/archives/2024/04/index.html","b98e488dac02b1ce5668585c1949d195"],["/archives/2024/index.html","f90b9818fdfa2aae7e5aff00578a5981"],["/archives/2025/02/index.html","7f5c9353be513c84d5fc82edfb742e51"],["/archives/2025/02/page/2/index.html","fa11a5817bd816ed339069d49e7c85ca"],["/archives/2025/02/page/3/index.html","6b59736766bbc7030a67a4177cd55704"],["/archives/2025/02/page/4/index.html","c90d70e857fb12b496fb34c967a23733"],["/archives/2025/02/page/5/index.html","ac96e1dac7025b1fcc9eeea39b81ba03"],["/archives/2025/03/index.html","5a1f512b696fa53c7d32149a89c94ff8"],["/archives/2025/09/index.html","ad0267d4dcc18be716f6de8983bdda3a"],["/archives/2025/index.html","106dd06de880dcc9416ad9fc64719b58"],["/archives/2025/page/2/index.html","dfee60bd4bc1f7e9501797e7214a0020"],["/archives/2025/page/3/index.html","07f62690d58759cc4b206b3cbea7b1e9"],["/archives/2025/page/4/index.html","b72fdd90713fcfca09f0a1395dbf34ef"],["/archives/2025/page/5/index.html","6f336b70c6a7e429dbf6cf00136afce6"],["/archives/2025/page/6/index.html","bdaf1210ebc143a47a73166f843aaeee"],["/archives/2025/page/7/index.html","95b2eea715b9cb9bad0afe1dced2c33d"],["/archives/2026/02/index.html","59cdf21df61f4792880cbaf0d03dcc25"],["/archives/2026/index.html","a095ae3d38b000106c90d1ff2492af1c"],["/archives/2925/01/index.html","3642f59e009cb99af9c68376f022e253"],["/archives/2925/index.html","de47ece5de2de84bc53c2deeaf60535c"],["/archives/index.html","dbfa01c398768f0d8b2d65daa69b3faa"],["/archives/page/2/index.html","112264c08e1912ea1f88548362e4d483"],["/archives/page/3/index.html","908a02f2eaf9cf028cf8b2cab094cebe"],["/archives/page/4/index.html","980af895d99d5eb4a93f353f05fd2687"],["/archives/page/5/index.html","30d26e03cc765b2fa1f46489f562ce46"],["/archives/page/6/index.html","3d30c84532680c188147ad2ea668c3a7"],["/archives/page/7/index.html","edb083d22d2aba0c866327c7018c1e7c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","893dbc758a6e835b95d6220885860166"],["/categories/galgame/page/2/index.html","08661b2a49eb618c79f31c668c401b50"],["/categories/公告/index.html","2df3e09b9ffc395f17074dc603717537"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","0b7e8585e8be627e1bf587f34f3e5ba0"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","bdd15eb7cbb40afad764bdc665b5a52a"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","19f8b7ddfaf89401dbf0e0d76112e335"],["/page/2/index.html","719e738d6bd6e7c45da4db2d060b608e"],["/page/3/index.html","a52add26655ea59752d464e3d4864d09"],["/page/4/index.html","090ae82e6d7681333a5239b2e594f216"],["/page/5/index.html","8b2ca1ff27f05def43e18622c8b5f3ec"],["/page/6/index.html","07b25e5f8f356e945733c8f77a8538fa"],["/page/7/index.html","c8e1493d48be02a546b09c7a823185d2"],["/posts/10c9dd98.html","99cd112cb438edcacae032f3e3e4fbf5"],["/posts/1370342.html","1b13eb03938b863d964a4ff2c166416e"],["/posts/15ef14c2.html","0bdb27d3993879c047fcb03ac72f6035"],["/posts/15f3959d.html","afe12854a0122eda9ddde7bc0705ac88"],["/posts/18ab785d.html","8e7a1e5140c1240110281bd7750d8c51"],["/posts/1d59b71f.html","245c2c48142dbb7d3a59f196d5f99c0c"],["/posts/20b3f3a4.html","7021006ba81c95ab434e047217401a9d"],["/posts/245f1c7d.html","e09fc703c8382e08b86d0db07da6e531"],["/posts/28397adc.html","0bb405794f4d8507de97cd01025fc699"],["/posts/2c0a6836.html","c6d4fc0205212ebd2b5dc350309cddb6"],["/posts/2cf620f0.html","3f5c3c03b8b2e47fdd1219cdd0fa1391"],["/posts/303007ad.html","998e465da8baf32af27f876951a90808"],["/posts/3f7d823a.html","168215dfebce4a5227b80bb84e32b14f"],["/posts/44124a6b.html","c0a3f5e2800eaebfa1774c80b9853a2e"],["/posts/47abb61d.html","9c019d5a218846c9ba6feabc852c6e8a"],["/posts/4b689be3.html","dd925ee30f3fa024e3e01bf95f52b81c"],["/posts/4cf8423f.html","55c4f8937a3e7e9800820257fd7a40de"],["/posts/4dcf85c.html","49a56d94372f70de0af19daed0815159"],["/posts/500cd322.html","08fbfb3a406c40e161fc227d5c1a38fe"],["/posts/51c9b1ff.html","79ac8e5bb755550a2fb0552f19018983"],["/posts/52b5b3c6.html","3e523375ddae85bf56d7b9652a51a7f9"],["/posts/5f6e0c59.html","38d72335373dff3fb52f21d835019a6f"],["/posts/6336a2f9.html","e9d7c2bda0a9d6079ea13b4ca9b84649"],["/posts/6432d61a.html","a0aaf1430de186b842dc8b8eb9600a11"],["/posts/6515f032.html","123441b2f808a31b2c66cdc11096db95"],["/posts/6720ccdd.html","5136e9ed1092a41ccdca99917da90e32"],["/posts/6aa4177c.html","af596b2b16412bcb1e1420d806663062"],["/posts/6b15f81f.html","e0c7c6a72a7f82a3c851bcafb6bc94c1"],["/posts/71131d34.html","e3edabec999762dc8d5312ade50245c4"],["/posts/78a8a8d3.html","ad4e0e8f4168f28723390e8045d8aec6"],["/posts/7e3aa3e2.html","a629d46ce5002576d795ab371941dbfc"],["/posts/80fe2691.html","c25dac339e38c293a40e5ca4e1314b26"],["/posts/81ac52e9.html","a4ad52c1404f3efa52d0269f19a62f1d"],["/posts/849b40f8.html","98f8a4bd3825acd3da53dbf54afb42ab"],["/posts/886f8d3.html","e40b4a86ea281ab2e39650dfc5e2b733"],["/posts/8dd520d9.html","e3a9b9f05a4bdadf12cb83e455fff929"],["/posts/8f555654.html","2f2bab4f9aeea176441647886b6e2d82"],["/posts/92a980c2.html","bceecc2e210008827b57660aa7250171"],["/posts/94d3c794.html","1209f985fb38d4e2ed3eddaa841aead0"],["/posts/97f50eea.html","0fe10547480118f60de7d2bbe4480c07"],["/posts/98662d05.html","fb5aefb220e28a846e9d9c26c9b51e22"],["/posts/9a2f6162.html","82f2ee2ca3bbcbed3e1cbd97e1d55d91"],["/posts/9b22a48d.html","bf4fa2df3d24f873b8ad0cc32c8898e7"],["/posts/9cb455b1.html","8020de2371590112b9b6eb1ac6006b28"],["/posts/9f61c1a0.html","7d4d5d2dc9a907338c231c45c65e3895"],["/posts/b497b647.html","147d430b98df15b3e61134f8cfe05a3f"],["/posts/b5fb773f.html","73eedb876be041c7730e2ccb583209ef"],["/posts/b8d46b32.html","01d39fc11dd2f543690736fa0d80b42a"],["/posts/c1b2c6c9.html","70bc5b8e64ad419dc20c80da0f2c6280"],["/posts/c316c2e8.html","ee6138ed98a10c7d5e10e62a2d97648e"],["/posts/c497a412.html","338ec795e09f348f18333acee935fe5e"],["/posts/c5de299a.html","4134b18a378b365efe0f3d64952e2be8"],["/posts/c70bba9c.html","691dca297256f84d5e83f085b26c94d4"],["/posts/cae2c959.html","434d008c1ba83a1b10cf6635497a4e1b"],["/posts/cbebef2b.html","82330f40e58140edd0bd027a307fd543"],["/posts/ce25023e.html","a0f3bd8f5ba67d3227cdba6909bcdf61"],["/posts/d2fd4837.html","983ff6ef3eb98374e0b42d75b60e5e64"],["/posts/d3a745a8.html","1b58e811ecc47e1c1fd2aaab2912736c"],["/posts/e3ab6ad8.html","2a62a6d03b80df790f310d7fc29fdd8f"],["/posts/e5018da6.html","eb23fd3145ef11f637c7d32d07075f78"],["/posts/e624b065.html","d4fe23bcfad6ef596104de17da44b5f2"],["/posts/e91abb63.html","4a4724c919589b83a9002fa0d29c8d82"],["/posts/ee1ed673.html","c831a1adaba2b4ea910c143ff1f44f93"],["/posts/f230b0fd.html","6a9226692091dcb931a1d5e36437dcda"],["/posts/fc04d0d4.html","ba67551ea1d7744305b833e616e41b3c"],["/sumire/index.html","c727f2ad9205760d5b856e5dbbdd3d77"],["/sw-register.js","76f3d62db6979467662cb0031a4cde4f"],["/tags/BL-Game/index.html","42f3a4d8d8960cd47aa62e0e244362af"],["/tags/CHUNSOFT/index.html","2e46634edcadab3fc28130bdd1207c34"],["/tags/Cherry-Pie/index.html","aae80a991ce0049fe95ab784fcd5bed8"],["/tags/Circle-Mebius/index.html","0667287312a7ba7c078447e11257e3eb"],["/tags/Dos/index.html","ed66cbf54b0b4b51fa54bdcd808fbd52"],["/tags/Kanon/index.html","1a490c58b7095f92246dad5f9be8dfbc"],["/tags/O-S-I/index.html","573694930a11952e45c7ab21a1065bbd"],["/tags/Omegaの視界/index.html","3a7513a2fd14fe678015ef96813d3faf"],["/tags/PC88/index.html","4c86d0ef19368fbf3d205ce6cdaf8702"],["/tags/PC98/index.html","463e6b157f6eec5e06e0229a5586251d"],["/tags/Pleiades-Company/index.html","0686aa73d3799401980078bb06617c24"],["/tags/ToHeart/index.html","6b1ffa4227ff96b7ed5d33ed8041fb6d"],["/tags/Traumend/index.html","a5a1ac7a34a9dec16a9d80d9f1d69f8f"],["/tags/Witch/index.html","fbbaf6c5696cfee0daa92dc389351c84"],["/tags/galgame/index.html","f5d36360370872edeb89e1a0bb4df63e"],["/tags/galgame/page/2/index.html","9415421a58a788f9832b1e4940012680"],["/tags/gal资源/index.html","e0d1f28f44b587982b2cec3b16cfbb81"],["/tags/gal资源/page/2/index.html","f66b1ac2db6c0d0ba64cbb004a137f17"],["/tags/gal资源/page/3/index.html","c997713c1f45cf753d8d221f77dd26a8"],["/tags/gal资源/page/4/index.html","b352f3e296539ec9017d6fc73040e3a1"],["/tags/index.html","4e24f9fe8540e45089351e7b379cb314"],["/tags/rkr/index.html","0750ae8a2171e09eedb2223a4d26b50c"],["/tags/team-eye-mask/index.html","97387442a52c862f1539b0fa7f02b372"],["/tags/ねこねこソフト/index.html","fe99f63626d26ce8ee89673f721ef14f"],["/tags/ねこバナナ/index.html","702e5c53e94636924c377483299fb9aa"],["/tags/停产/index.html","e773b78254bed44264b44bd856a45311"],["/tags/公告/index.html","61b0c6d70bf0f184699316b473265ea4"],["/tags/同人/index.html","896436c1d090eca75ebbaf0008e86450"],["/tags/堀井雄二/index.html","023ac0e6870484f952654cd10ab757a3"],["/tags/外海なおき/index.html","9d2bb27fee44b51e9049f7ee40ed511b"],["/tags/水仙/index.html","ad9c9945cde20c1ca5bcc5f4bc107487"],["/tags/片冈智/index.html","075b6dac4a1d4e53aa6d5540a6aabc3b"],["/tags/牧尾屋/index.html","ceb80e59b4454d64bf86d3a20161cc9e"],["/tags/猫猫社/index.html","9c13ee01ab99334729a6096b54bd74ab"],["/tags/画集/index.html","7f1f35860cd0021e3dbf9808414dbd94"],["/tags/索引/index.html","18ec3ca061deccea0cd7bdd5404379dd"],["/tags/閂夜明/index.html","bde79b65081cca86fbe9e506fccbbacf"]];
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
