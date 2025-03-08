/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f99c9646a89b5e0c04dcb4eb9cbf7e47"],["/archives/2024/04/index.html","6f39f88021b9433aad7b60995b86d4d5"],["/archives/2024/index.html","12af9fab2f8e7c551ceb7afd29f49978"],["/archives/2025/02/index.html","ffc389d3c50f079749b493c74d3627fb"],["/archives/2025/02/page/2/index.html","aa09653058cc209c6779b8bca9f15506"],["/archives/2025/02/page/3/index.html","d23fd810f083bf4d9c13989084af2d28"],["/archives/2025/02/page/4/index.html","2a7867ee8da1aa429ef831fcd9421b35"],["/archives/2025/02/page/5/index.html","a12f76800a01d78c4941e1c4b3ef9e67"],["/archives/2025/03/index.html","9461e5d337c16207a2d7fb92a71c84da"],["/archives/2025/03/page/2/index.html","cf0565843c09acdfdb61292180c83510"],["/archives/2025/index.html","ddcdfdfb0d26bcd1097d131ffe78b004"],["/archives/2025/page/2/index.html","b58def6a6862dde8f00a0e758d9b6de4"],["/archives/2025/page/3/index.html","d737f9c6ba5787632d3c6eefc5fc038b"],["/archives/2025/page/4/index.html","11d66251e51621ae3ace306357f361b3"],["/archives/2025/page/5/index.html","133382ea1de8d21535b64259c4376ef4"],["/archives/2025/page/6/index.html","2f6275f0fbc3337b4ab050a0c4930e0c"],["/archives/2025/page/7/index.html","5ed7652d86106ef867ea44a3d7b9b3cd"],["/archives/2026/02/index.html","b5b0e41135211c7abd9dbb91419ac19b"],["/archives/2026/index.html","02eb64cb2267d281df7eeb957bc5e08c"],["/archives/2925/01/index.html","a6b28870b747e6879eb7a858ac28d768"],["/archives/2925/index.html","2cc997dc33a2cddd463fcea07821a92a"],["/archives/index.html","19bc869866315442a3a489f2b4d65f27"],["/archives/page/2/index.html","6bd7fee02049a5b2143a5e28d3c2ac38"],["/archives/page/3/index.html","81c6c02354e9bdf8af6cdff60d429d60"],["/archives/page/4/index.html","a35de37f2516473a54de77a9656965fb"],["/archives/page/5/index.html","f4daeb2c17057327e8cd601431a20d37"],["/archives/page/6/index.html","04f77aadbcf2fe4d6feaae3ad689fa90"],["/archives/page/7/index.html","71d8d02080997d788893636b6fc2060e"],["/archives/page/8/index.html","7dec2bfb7ba2435b378dd1797ca00337"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","c23628a17445a6e27158d1dd4d3f253c"],["/categories/galgame/page/2/index.html","549d83e393f8f634ee5e324c52da581a"],["/categories/公告/index.html","afe3f4c7f7df2894eeb2661f4669f269"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","a3a6311c040a585babe34dc3d2ffda12"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","56f0b3890cf28c2c7cc29830148a4261"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","0269fc012dfd5e80e5d1851eb3fc664a"],["/page/2/index.html","c193d82b6fa73c03e4edd7df423af7e6"],["/page/3/index.html","b242bf6723736825409978090549a00f"],["/page/4/index.html","3c154de261a911dc50be1f17a432bce7"],["/page/5/index.html","d63547cd701a4939032d8cb16ca919c8"],["/page/6/index.html","95eb1f586bcad3c3c1f1016d579f95cd"],["/page/7/index.html","8b6eeb0d7e6623e6680267f811894631"],["/page/8/index.html","2e6536f76d05b1e70ed3cec22b201b09"],["/posts/10c9dd98.html","f26c6aac9623b43a715e8324d087f601"],["/posts/1370342.html","560db1554787845e41a172a025c6a2ae"],["/posts/15ef14c2.html","ae85195329a74c834fd2124d6667c653"],["/posts/15f3959d.html","baf24334ca0c52a21d3688246ed5fa47"],["/posts/18ab785d.html","e47d3bee631547462073d8837f6580ef"],["/posts/1d59b71f.html","bf5eac2553d59ef4d7e96e8a12567e67"],["/posts/20b3f3a4.html","36a2db2c93bb43110b985a16ba0abe40"],["/posts/245f1c7d.html","477a5510990cadbeb485420d417cd2ca"],["/posts/252658f.html","8dd408288ea9af7586fd1549ffc03afb"],["/posts/28397adc.html","f9903a36b1661edeae4729298147257f"],["/posts/2c0a6836.html","ee0577ae34d698bf6b0a18fb675d1cbe"],["/posts/2cf620f0.html","3529c7e5b7dbe4d3d8ea4a3162aa3eb9"],["/posts/2e30fd6d.html","fc5cd1592a5ae150173cd1279406df97"],["/posts/3f7d823a.html","571cb2278d4d86b9ad775abe11da1072"],["/posts/44124a6b.html","aa78104986e502b9498ff01c11386bb3"],["/posts/47abb61d.html","9795d355fe2f922ff12e9fccbb339004"],["/posts/4b689be3.html","c62d90b21dedd5396a55f84735c0d2f0"],["/posts/4cf8423f.html","0602b58f7144ca576f3a562979270d69"],["/posts/4dcf85c.html","322e85ea7b539d6e0c9198a632a3826f"],["/posts/500cd322.html","2f59d72c210de0d5037cac2c86552e04"],["/posts/51c9b1ff.html","af7772c2894cca9339e5d8a6955cf9cf"],["/posts/52b5b3c6.html","950ada8ecf6c303ce5bdcc10792be0d1"],["/posts/5f6e0c59.html","289986bdc1ad821f60a2c97c0045c868"],["/posts/6336a2f9.html","59e5cd5fac3c4267fa0746d052e3ad4c"],["/posts/6432d61a.html","e0f0b45822cae4cee640468970089693"],["/posts/6515f032.html","5c8118b8a7d051193c04d6d63dd0913a"],["/posts/6720ccdd.html","ccc1ea7c3939080d64445b9f05fa5643"],["/posts/6a4b5ac8.html","f2472aecd4234292e3eba745f056f0f3"],["/posts/6aa4177c.html","59dab8fbae6e947033ba075b3b697bf3"],["/posts/6b15f81f.html","510809fa8c7c1835d45a96bdb092fbac"],["/posts/71131d34.html","07cab7fabe6f150d362341ab8bea5e9a"],["/posts/78a8a8d3.html","258da4c376c006a7dd195abc592546bd"],["/posts/7b41e1ac.html","eff8809475872c0b48eaf14a4618574d"],["/posts/7e3aa3e2.html","b837e2245970f5cb0ea73ce55b20cc3b"],["/posts/80fe2691.html","3e951c78076402bf636fc51da4e442fd"],["/posts/81ac52e9.html","cdf3e717ef622bedceec8634178a8d31"],["/posts/849b40f8.html","ad66561709af245c6d204b0461555696"],["/posts/85c51d68.html","928605ef12a2a83455d18d134ebb5835"],["/posts/886f8d3.html","148b8ab8510a2b42f688d590a502e57c"],["/posts/8ac11b41.html","9298e9c13facdabb6027739004ea962f"],["/posts/8dd520d9.html","ee1cd00f0b8113bcafb9682f23e8e928"],["/posts/8f555654.html","a4bb973f3835427b768d7ec9c5c6c427"],["/posts/92a980c2.html","0af2f95e42c5af6490d09cadb0dafca8"],["/posts/94d3c794.html","9a6392e29d97a4bef66e136aa8547d16"],["/posts/97f50eea.html","85750e6d67e001a385f48a220891700d"],["/posts/98662d05.html","daaf2072fed2c44add8acddd56881192"],["/posts/9a2f6162.html","fceeddef8f4e35800b20d23ab6a057da"],["/posts/9b22a48d.html","8f8250925f2a8b115585cf53c2b39e9e"],["/posts/9cb455b1.html","b58c7aac0c0bed5027abf87394fa3753"],["/posts/9f61c1a0.html","27c80b94bbee3f0e3f8f08c15c60f31f"],["/posts/b497b647.html","ee7831951d0ac641aa3558f69d2f1e80"],["/posts/b5fb773f.html","aeee96602e0ab1aa2c18f9ed85687f07"],["/posts/b8d46b32.html","2ecb5afc2f033ee0e00365c2ef576468"],["/posts/c1b2c6c9.html","d3443a73b5699972bffcae6e39ba5f69"],["/posts/c316c2e8.html","80b37596dc09931f56e720b7a7e947e6"],["/posts/c497a412.html","36a5dd3f76300aa5de6ea5125d71ee0e"],["/posts/c5de299a.html","58197793d2107b2b7c8a912bf33b6332"],["/posts/c70bba9c.html","417fecd37ddd936181fa955c6bb59071"],["/posts/cae2c959.html","44dd3b174e16316777137eba2d036bdd"],["/posts/cbebef2b.html","d3393c2df16b34b8ef61007d96e6bf8d"],["/posts/ce25023e.html","f896e193185128bceb243e4dabd1aa52"],["/posts/d2fd4837.html","6338f7da502a5bc8c9421d095ca8e9ee"],["/posts/d3a745a8.html","fdb34dd9b7982ec8614215c39cb622b9"],["/posts/e3ab6ad8.html","4ca200bbcdde6dddfbc7298bcd345360"],["/posts/e5018da6.html","9dc088658840fb29bfc0c368f195e35e"],["/posts/e5963272.html","242ced721e31659fa6e9ed25553d9bba"],["/posts/e624b065.html","2209e238009cd9f559ddedb304d93ed0"],["/posts/e91abb63.html","93c8a34cb80488c81fa0f4ac3b28a993"],["/posts/ee1ed673.html","4480408c8a7e3cdb2b1e89917fd04adb"],["/posts/f21e7f84.html","c8755d1164e3f6ef527ed7c6b715a238"],["/posts/f230b0fd.html","37722da27315199b7eed70f08d8ff691"],["/posts/fc04d0d4.html","5d47282572cb8be3002661e8b0679c7a"],["/sumire/index.html","ba8a7103056f17c17dd188b687c31eb4"],["/sw-register.js","31de847666ccd7ed8c03fc6089dac9ec"],["/tags/BL-Game/index.html","e60d234fc07977ec1140f05b2146d38e"],["/tags/CHUNSOFT/index.html","c8f6eaf413f43909ebdc4017d4ceb657"],["/tags/Cherry-Pie/index.html","21736bc686b33ca068c6c0b05836cb4d"],["/tags/Circle-Mebius/index.html","093751fc4466b5e1aacbcb82fa5885f0"],["/tags/Dos/index.html","92f63aa676acd5b3e099881cc0a392ee"],["/tags/Kanon/index.html","7e5bc582a97ec0fb1181d6f3efdcd8e3"],["/tags/MANATSU-8/index.html","2e236a74cab1e4981bf24ea4bdb7c1cf"],["/tags/O-S-I/index.html","2b4afa18cf8fec3d3b505f9d62e340ac"],["/tags/Omegaの視界/index.html","19c433697a6d6e68bfc9dab0c2c250fa"],["/tags/PC88/index.html","68fd3d4bed7dd41c82573defc8225b63"],["/tags/PC98/index.html","f3c5c044b82f7dbc76692e517553b492"],["/tags/Pleiades-Company/index.html","b756c304a9cccdae76762e29e6398e52"],["/tags/ToHeart/index.html","4fcd65a3114a7fc6dbdc640b7444690c"],["/tags/Traumend/index.html","1ab96f54c1812d44d974ab4913f763e7"],["/tags/Witch/index.html","84a5b2ff0766357e137be74eb072c816"],["/tags/flash/index.html","b88d3b2c4dbec266d0ee766ddf5460ad"],["/tags/galgame/index.html","ccae263ef1815bffe6441773af86e3d4"],["/tags/galgame/page/2/index.html","956c4b282274e8fda13f4b6f3fbd7a89"],["/tags/gal资源/index.html","a00b018bd1e3bc31a675ff680c369fb6"],["/tags/gal资源/page/2/index.html","032da8d7887b434e241e410ff497a0c8"],["/tags/gal资源/page/3/index.html","5cc2ebe37b4cdbe67f60755311590267"],["/tags/index.html","813e42b6ac040c8c63b3536aa9c55995"],["/tags/rkr/index.html","a5b48c88c320fd0437a71d3db3adb78a"],["/tags/team-eye-mask/index.html","f5a0d976196f200dad2ad7258d791a09"],["/tags/いつものところ/index.html","4ea488ba0647bee5ad266111df56cd58"],["/tags/ねこねこソフト/index.html","bbbe8ad2c47f7b2acd27e3cd9306325c"],["/tags/ねこバナナ/index.html","ad3ced1b4a7e7288198452ffc0f4ae45"],["/tags/停产/index.html","a66eb7e52d7bbcfba84527c6c056a139"],["/tags/公告/index.html","dd9ddd941cebd76be9d4aae475139e71"],["/tags/同人/index.html","d9784d26eb701c03814754a89f9ffa39"],["/tags/堀井雄二/index.html","62c201d8cc16b207320be23e135d557a"],["/tags/外海なおき/index.html","df189bd6a99040a7a7b695b53c8ecc19"],["/tags/水仙/index.html","ec88070d6b546fb74469eb80afeac86f"],["/tags/片冈智/index.html","c94040250574e1afb08f4037354e1ce3"],["/tags/片岡とも/index.html","ceadc977bb7f4aa6f842805abe59d6c0"],["/tags/牧尾屋/index.html","7ba7f58b90db3a7dacb3d11879ca12b3"],["/tags/猫猫社/index.html","883babb60760d7dd979174d7d7f29419"],["/tags/画集/index.html","4302661113a40be21595e1a6de135117"],["/tags/索引/index.html","9302c735394163e1f3b4d1ca58021180"],["/tags/閂夜明/index.html","e227fe30947822a1ba69dbe6f398d3e1"]];
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
