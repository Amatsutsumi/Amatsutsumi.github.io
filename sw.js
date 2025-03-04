/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","ed5fe8ff73379a5d05ec59f8d355905a"],["/archives/2024/04/index.html","1ae4aa7df09f0355a277e697d409e6d7"],["/archives/2024/index.html","a6457e47ea29cc2f7a53d52dcc958743"],["/archives/2025/02/index.html","98929dde9233b92605f540c9181f1d13"],["/archives/2025/02/page/2/index.html","f7b0f3c89e902a27f6363ab9398ea9fb"],["/archives/2025/02/page/3/index.html","2f560fd8dc02000ce623a4cc099df404"],["/archives/2025/02/page/4/index.html","681006a85ba0011d3ff09d95223d38ed"],["/archives/2025/02/page/5/index.html","e84a7f092eaa6e796b6f5341acaf5e32"],["/archives/2025/03/index.html","3b21da0a2833a8c906df3a9d1de659c4"],["/archives/2025/03/page/2/index.html","abb3924d3eda0024c5d64dd57d04ef43"],["/archives/2025/09/index.html","1a98cb3a6e78bff68d4e60c6c8d6147f"],["/archives/2025/index.html","922dc4ce5489e3654e1ae684b4c52e4f"],["/archives/2025/page/2/index.html","4e62e49493869104e492b8efe8c5a838"],["/archives/2025/page/3/index.html","fd9ef1f636d618b7efdd6f43e6ead6eb"],["/archives/2025/page/4/index.html","ec83749e8dcfe36e18022a61fb7c4c8d"],["/archives/2025/page/5/index.html","2d99c7d794e6048a05f43e576b63e98f"],["/archives/2025/page/6/index.html","97ab9ffcfcf3f04357dbb27d75d2ea17"],["/archives/2025/page/7/index.html","bafa7521bea491b59b836e61585089b2"],["/archives/2026/02/index.html","178816784b8b8be8020da55e90373f06"],["/archives/2026/index.html","70342e10beb2b57854fdc70492a17f0e"],["/archives/2925/01/index.html","28ba6119c17d0304fe4698686e71fa80"],["/archives/2925/index.html","4c7486b922748e2d356955ee1b909c4b"],["/archives/index.html","6a1a3c698fef070ebfc670af3045b59f"],["/archives/page/2/index.html","f354858cc4d6f07802d7eb6f8432b97f"],["/archives/page/3/index.html","dc140fb3e353b5fe4e80f2b3e52e8623"],["/archives/page/4/index.html","40ca364b0704e798a40d7e48a7f4aa65"],["/archives/page/5/index.html","9f828e540715fdcb6523701025a5475d"],["/archives/page/6/index.html","9000d04a79b57287ca0c0be766f09fd9"],["/archives/page/7/index.html","2033b12a4b9f1fd8f4234515037e020e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","30bc0b34202f6602a9bf334781439aaa"],["/categories/galgame/page/2/index.html","e14e5cbc86ddc1f2081328dec6cad5b4"],["/categories/公告/index.html","e44f925ca34562581267f5b82bfdf705"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","b4279126d12c5814afa66daad8d0d778"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","80908a0352b82f065a685b7952c96933"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","d68b0dc4589fb542d85bd7f45bdd55df"],["/page/2/index.html","0c57331be7341e902d535b50254c5644"],["/page/3/index.html","6c261c6b478089f0bb695225dd8e0aac"],["/page/4/index.html","0f6b45e2794dc29992fd4f5829dea6d8"],["/page/5/index.html","c8b5e8bbe041ae14e36b6abc6438c1e2"],["/page/6/index.html","a08fd2105ef677dd62aa071ababb0001"],["/page/7/index.html","d17207765c000286fa658e785a65e565"],["/posts/10c9dd98.html","f6e8a88d2111674316ed4efb2e994c6b"],["/posts/1370342.html","243a6ef99ab45164dc6e8f64c2ae57ae"],["/posts/15ef14c2.html","2ffa20b85a8b5384e008933792a05188"],["/posts/15f3959d.html","5dadfbc1f26a91c1256e59699f474261"],["/posts/18ab785d.html","fd6a72118a1ad57596c2d97abe2b35cc"],["/posts/1d59b71f.html","9f44930106d161882eb1eed4608d373f"],["/posts/20b3f3a4.html","572ead1fa50c7c57f0752931e5501c47"],["/posts/245f1c7d.html","4134e62ce05a3604d2c366b586173f3b"],["/posts/28397adc.html","861658b7559ab3820b6dc6b408772af9"],["/posts/2c0a6836.html","3abbc95c828723d5c28ce8eea1d70606"],["/posts/2cf620f0.html","7cbf8498a5ffdcb801b6d98edf96f5bd"],["/posts/303007ad.html","7860967943c99ea0e9a91456a4b5fc30"],["/posts/3f7d823a.html","cb9dc8245e5bbabbc3526f61fd304100"],["/posts/44124a6b.html","22e00b0ff5f3132d0648e96507cceec1"],["/posts/47abb61d.html","fca110c450fe0f3fd683765f0f12e949"],["/posts/4b689be3.html","9e11dd79a3aee50a33c4a1195809030e"],["/posts/4cf8423f.html","3c8a6a5f3768a366fae2bdb0e41c4a27"],["/posts/4dcf85c.html","7c1a343203184205a2ceccc392bce82a"],["/posts/500cd322.html","645615ca10f2cc2c8c96f3a2f0a94b19"],["/posts/51c9b1ff.html","b9eb8bb379b12443be1b03ef02f96ec0"],["/posts/52b5b3c6.html","c6be4aade50fe69cb5733cb871281d5c"],["/posts/5f6e0c59.html","00f1d3c861758901651108e6244a0023"],["/posts/6336a2f9.html","d6b32d0c31ec1840201e2cfb6810b608"],["/posts/6432d61a.html","49d4ba93fea3508d25cac31c89dbe677"],["/posts/6515f032.html","4407a3c61bbec99acb30726f8d735c61"],["/posts/6720ccdd.html","d5b1997600a38df981fc4b8ee9d76630"],["/posts/6a4b5ac8.html","e83ff38c9acef10f8553a745d220de39"],["/posts/6aa4177c.html","49c8169846ee81fabf4b1c6028c37a0e"],["/posts/6b15f81f.html","4b10914188b9af76d0cba7ee1134067f"],["/posts/71131d34.html","7dce5517b32e84d8c31daa69d40f724b"],["/posts/78a8a8d3.html","eaea4afa60002e244b069da07b339862"],["/posts/7e3aa3e2.html","4648cdfc98f94896597a412fa62f09ff"],["/posts/80fe2691.html","9b0214e10566c434d9c2b54ccd1bd52b"],["/posts/81ac52e9.html","47684812f65dcf2877f3d5351afffbce"],["/posts/849b40f8.html","f06e19e8a78ca671ce382326cbb6940f"],["/posts/85c51d68.html","c856ee9b5b81c8032862c4456ca1c442"],["/posts/886f8d3.html","0d7ef7491d32cb17ff91365d222264a3"],["/posts/8dd520d9.html","d087b1da854338097464bf7a410ec9e2"],["/posts/8f555654.html","f87adcd93b908f2a9f980fcdef9a9b55"],["/posts/92a980c2.html","88eb5a76484c531d99da5697750f6661"],["/posts/94d3c794.html","f1cbdbcee7fb822468628787b532aaf5"],["/posts/97f50eea.html","0a4573e4cb991c93879af4749c39f5a4"],["/posts/98662d05.html","a4adb0a7f83a47021045c3ffca644a31"],["/posts/9a2f6162.html","b5eb5e637656f9d81f512ff971f545f2"],["/posts/9b22a48d.html","4d86d6ede5cd7f2a64fc7ca55ed944d5"],["/posts/9cb455b1.html","4afb59d447623f1e8274c5696f0bd910"],["/posts/9f61c1a0.html","5c5d2d5e9407f3e45f0479cdaac17313"],["/posts/b497b647.html","d318ddd70913d80d1875c4187265d5a3"],["/posts/b5fb773f.html","863b41193bb1acf5d50ca40c04a8cf5f"],["/posts/b8d46b32.html","885571aed8962f5d5ad76a04942c3141"],["/posts/c1b2c6c9.html","b856c69799eb017b8e7e614984b95abd"],["/posts/c316c2e8.html","1e2693422910d2ae5fec9fae78de3ec8"],["/posts/c497a412.html","94d1e01af6a9b4eb9ac61eaf100e248f"],["/posts/c5de299a.html","2f73bfbb910fc0f4284cc6bfba80c2cb"],["/posts/c70bba9c.html","82e76c7e2a2c2a9415eb1bb3be32db41"],["/posts/cae2c959.html","9648128e7e2733fdf6b9a046fdc6486e"],["/posts/cbebef2b.html","6777d206e680f1105c9d809a448013f9"],["/posts/ce25023e.html","8c0460555b4b4d1cd830ce18f2d1bceb"],["/posts/d2fd4837.html","10c00b7faa217560df362b855f50a32c"],["/posts/d3a745a8.html","346ed02c0bb4353842387fab4b98f775"],["/posts/e3ab6ad8.html","ed811fec36334bebb60cf97f6f34c8f2"],["/posts/e5018da6.html","0c0a626c5e05d7ae2e63d056fa7be807"],["/posts/e624b065.html","0fca30516eef61f4c4d54bd3e7d20151"],["/posts/e91abb63.html","822c5e87bdbeb16910ae328fbf9bcb47"],["/posts/ee1ed673.html","0aee0dbdd00da87b57c2675c3a176d0d"],["/posts/f21e7f84.html","362688d48e7a692137d5646255c349a4"],["/posts/f230b0fd.html","d428e28870a5860a5ede7ca98b822f41"],["/posts/fc04d0d4.html","9aca37eb635404b753c95dae59ddf2cd"],["/sumire/index.html","7a15b59fb8cfa38e18cdfed6298a784a"],["/sw-register.js","181be0f57e8877f36d46b530cc5fa334"],["/tags/BL-Game/index.html","fab10e7956b982c627d180441efbdc93"],["/tags/CHUNSOFT/index.html","44185d2027aa11838a22a80a48906885"],["/tags/Cherry-Pie/index.html","702046765e52a0c82c89b5f37c738ed0"],["/tags/Circle-Mebius/index.html","dd4e32721e91a044d9616da54ef1f76b"],["/tags/Dos/index.html","2cad93684cfd94cd3685ff439e98ede0"],["/tags/Kanon/index.html","b38b5980ceabad0b5f7f7a984d9d022a"],["/tags/O-S-I/index.html","424f0d10aa41a2458e71368917eaec3e"],["/tags/Omegaの視界/index.html","cc344d71bbb0a6df2160b8139fe1bc85"],["/tags/PC88/index.html","8e4b97e8c5210897ed757cf399811514"],["/tags/PC98/index.html","2bfc1413cf9a652c0514c07903a7aec5"],["/tags/Pleiades-Company/index.html","61800c33bb262464c06aa3f0decff9c0"],["/tags/ToHeart/index.html","2ba21c4d37be179026dcd66e6ccad2e2"],["/tags/Traumend/index.html","697c994974d0e9eb244d137facea953c"],["/tags/Witch/index.html","a0da8cac3290de9ed403468d9cdb7fdf"],["/tags/flash/index.html","403413c03b86ae1e4ed9e2c5e5c15931"],["/tags/galgame/index.html","4f99d9412b5c75ca85aba7e30c86f73b"],["/tags/galgame/page/2/index.html","cb5199f5bc104027cc1bcb2d64d1865e"],["/tags/gal资源/index.html","348c42b7aebb1d35a269954b9974a1f3"],["/tags/gal资源/page/2/index.html","d260d27a3c219b51beff1a62106291da"],["/tags/gal资源/page/3/index.html","5c22548cb4517c09b161609e283afcfd"],["/tags/gal资源/page/4/index.html","f81b8680983eafcafb55505140c53b9f"],["/tags/index.html","248e081dba4359edcff2af8f1d985572"],["/tags/rkr/index.html","632948858f948f3552a0abbef86189f2"],["/tags/team-eye-mask/index.html","22c76475b6ab1c90e485b307af6081d8"],["/tags/ねこねこソフト/index.html","c6e915d2d592e3c2a371aa44facf0776"],["/tags/ねこバナナ/index.html","04d247079c91b6f1294be80d8d4cfe57"],["/tags/停产/index.html","976f6afd9e25a331710699b2542d2e66"],["/tags/公告/index.html","9d05918f8a7b0bee6a4fe357a702cfe0"],["/tags/同人/index.html","bdecaccbb5fb169df665f499aa5026d6"],["/tags/堀井雄二/index.html","3109041561b6ccf50ce6b32768676694"],["/tags/外海なおき/index.html","2add04d45d6aed9700048117f60e9dae"],["/tags/水仙/index.html","d0e58ba249ebdd157914fa8898a965b9"],["/tags/片冈智/index.html","e70eb770bcd680361a7c10a2831c10ef"],["/tags/牧尾屋/index.html","dbf33c627c83cf51dc5898950825f872"],["/tags/猫猫社/index.html","e22d512f051ca35f077c20dd4739609e"],["/tags/画集/index.html","59b11be3c5ebc154a2af79c4c4e58c7c"],["/tags/索引/index.html","a19838ed6711d7ab6fe27e6111b5e972"],["/tags/閂夜明/index.html","3e64fa88e887e887cbf7e65be78ec9e9"]];
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
