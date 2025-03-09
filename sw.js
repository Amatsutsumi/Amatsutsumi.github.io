/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","76a4fb3a58dc841f53ce5411cd63d990"],["/archives/2024/04/index.html","203ba667a92f5ffff3c66e976c6f14e1"],["/archives/2024/index.html","940e18a716c70695d76f8089c82b9291"],["/archives/2025/02/index.html","fb42a7a02d6d7970b056dedef712c8df"],["/archives/2025/02/page/2/index.html","d0688fa5316234926c0951be127859bf"],["/archives/2025/02/page/3/index.html","6fbb4c7b67d38928a2200669ae7cbcaa"],["/archives/2025/02/page/4/index.html","bc91591a88ba4a85edf38707a99d8c98"],["/archives/2025/02/page/5/index.html","f64e78abccbff112e116a4e6f00492cd"],["/archives/2025/03/index.html","9c28a5baf5695f873e6ee5a686205a64"],["/archives/2025/03/page/2/index.html","02c3849680744b2b261448ee6d50624b"],["/archives/2025/03/page/3/index.html","4bb7d2eff5e03769d86e0a3b9235c119"],["/archives/2025/index.html","9d13da840a7024d1549e86ad0f54a774"],["/archives/2025/page/2/index.html","d6cb83202a5805b412a74b14c335ecb3"],["/archives/2025/page/3/index.html","d40159e58cbd1d25e9be7c79978a6133"],["/archives/2025/page/4/index.html","26bed44a4bd5adb5df361b357815a16b"],["/archives/2025/page/5/index.html","4e8453b9e28c7c079cfe5cb83609b42f"],["/archives/2025/page/6/index.html","4da8db15fc4a5c6442bb022f33a34739"],["/archives/2025/page/7/index.html","757bff744a6cec9dc8b452621712a89a"],["/archives/2025/page/8/index.html","3d6dfa97a56464a412dd01d0fe5fc49e"],["/archives/2026/02/index.html","930ef5dd5d3ccc7f92139b9a63547511"],["/archives/2026/index.html","cc88aa795fea4729ad1ca6cde97c6629"],["/archives/2925/01/index.html","17341e5d38bf473cf206bb6da84928df"],["/archives/2925/index.html","390b9a9a32c639bdd5393dc91ce8ecd0"],["/archives/index.html","fc731dd8b8ee8247d25291f5c9fca046"],["/archives/page/2/index.html","2b2fde710cdcd6c56944c10dfe8ec42f"],["/archives/page/3/index.html","53503e56353461787486a60d67aef224"],["/archives/page/4/index.html","af159092151cf17c17e9e12e4ef2673a"],["/archives/page/5/index.html","34a19f2454361e6781f7a3db2f20c708"],["/archives/page/6/index.html","1b6407304e6397d2b55399c199f6de86"],["/archives/page/7/index.html","e2efdf62be96a7532fa9da8c131fa26a"],["/archives/page/8/index.html","cd204a30b1fb6ce96683e8f979a4f62e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","cab75f8674dc729b7ead33082325531a"],["/categories/galgame/page/2/index.html","9256f5aeb6b3ea44c4cd25a84b0d4356"],["/categories/公告/index.html","bdcea879a28a636e0526cb1866562486"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","b32ae3ee03095dcfbbb18ca2740c4587"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","737b34fa71017f8f1c9067cf56affea8"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","9b32e15c726fd4fe3dda75dc86541648"],["/page/2/index.html","ff169fff1ae100ea2b8f9e236b42a82f"],["/page/3/index.html","e89a70cd339a3cc861f25c4e905c62d9"],["/page/4/index.html","ac5792aba186bc208cf7f4f384e0d337"],["/page/5/index.html","0e0a5bf885a8ca798b80628703b60b0a"],["/page/6/index.html","09c38e34795e8b07f95793aa59970abf"],["/page/7/index.html","7eef6e96191e137428844e6cc6b61532"],["/page/8/index.html","cad1cda3d6cacf96630f7453fee43153"],["/posts/10c9dd98.html","8863659ddd6f21559c5ce6f8e5075b9b"],["/posts/1370342.html","250c0cc66332afba74248495c64c4d99"],["/posts/15ef14c2.html","86a22665013beb1301ba45fe3b1e5d61"],["/posts/15f3959d.html","a8f400ef516360109fd4a8a7a60033a3"],["/posts/18ab785d.html","bc4559efd1dc871bb405fce3bdb978bd"],["/posts/1d59b71f.html","2d2dc06ca1c0f86cff289105f319c629"],["/posts/20b3f3a4.html","419debaf9c9c080f74dcc80af27575e2"],["/posts/245f1c7d.html","b395744ad7b0e699fef7bd9c35cd8fc9"],["/posts/252658f.html","3d580eb80c2f45a2290ff80bad2066e0"],["/posts/28397adc.html","5abb183b9fc6189bb0878e1e4704fb88"],["/posts/2c0a6836.html","2f29eaff13fd75bd2af09d76f403e5d6"],["/posts/2cf620f0.html","0caa3df8e44bec02cb4bbad09dfeeb53"],["/posts/2e30fd6d.html","3236d47e9ee962ac698c2b8315b99c56"],["/posts/3f7d823a.html","069cdd23b223dae567fe8bf82bdf5b6c"],["/posts/44124a6b.html","f8644c3f2fe8050a5c5bf0feb14f51be"],["/posts/47abb61d.html","070eba813ec4a3828a1dea8e6a64765e"],["/posts/4b689be3.html","3f4b5c7043aed94fa4423254199af2e7"],["/posts/4cf8423f.html","0f5a02ef4b2fd53d731983867fb3fa9b"],["/posts/4dcf85c.html","d11e14ab144ec763aad93eb75820abcc"],["/posts/500cd322.html","8c6ac655f135dbc404808e47dbd92e4e"],["/posts/51c9b1ff.html","de903a4b7e948d13e9f958c38427a89b"],["/posts/52b5b3c6.html","4d5a9b7d6040e5a42c50859e43a15cc2"],["/posts/5f6e0c59.html","3bfa950a9cbb690daa37d760ee23be02"],["/posts/6336a2f9.html","0cb474ed13ebf6b3c256a63104122d38"],["/posts/6432d61a.html","925c0e716d670b924bc408dd28e2e84f"],["/posts/6515f032.html","c268176d7f7fa875ad350587d9cb326c"],["/posts/6720ccdd.html","2c048f81659a1f68770078ef72dadfb6"],["/posts/6a4b5ac8.html","8d06045470ba7ff26bcb1aaa5cc0cf3d"],["/posts/6aa4177c.html","55495d1f756571aff339a1dd3185e484"],["/posts/6b15f81f.html","033225bddb0e6e230cd85e53ec1479e8"],["/posts/71131d34.html","fe3667923dc3d9e20c65f75c211016a9"],["/posts/78a8a8d3.html","069f5afc38a0a5ff42d0b8ea87e2ceed"],["/posts/7b41e1ac.html","53f4fb2c015b023ae6c29fd1367ca190"],["/posts/7b51011d.html","727209698a926b0e8346f9267c4d68e1"],["/posts/7e3aa3e2.html","018a1a0c945b1a87f788f08c3695aa2e"],["/posts/80fe2691.html","593cde01ca0259c27753a1d240dcbae5"],["/posts/81ac52e9.html","11bfb07773cd204a55ee70fe8307e631"],["/posts/849b40f8.html","03106f43a18d59bce3125249d1fb62c2"],["/posts/85c51d68.html","5049988fc9da5bee7f3d5f1801e82c1a"],["/posts/886f8d3.html","67eafb026085389b2e475b8fc87d258e"],["/posts/8ac11b41.html","51f2cdb01269f4d2c309ed9a0047f964"],["/posts/8dd520d9.html","08120f4b4899961d93e3de6ed2b2b0c2"],["/posts/8f555654.html","58189d456bccc747ad7ce3ecdb7f2b1e"],["/posts/92a980c2.html","8983853c4d65dc077e6c5b9a77b67636"],["/posts/94d3c794.html","8ff7d5933ccaa85dabab79c024081962"],["/posts/97f50eea.html","96a29fabf39775073447220b88efa488"],["/posts/98662d05.html","ad15a76179eec4dcee1f0183758f3598"],["/posts/9a2f6162.html","a673ccf683dcc522c47696a4605886ea"],["/posts/9b22a48d.html","ab0ead273a993034458fb66c85972c85"],["/posts/9cb455b1.html","d70067977d07de45f4230d5255009a9a"],["/posts/9f61c1a0.html","550901f43f03f994f9de0dbc206ea23a"],["/posts/b497b647.html","a56536a188b47a388639581a3614c877"],["/posts/b5fb773f.html","7a8d0ea3059ca2dbca8c29fe0033a977"],["/posts/b8d46b32.html","0c664041833804fa513b7275cc500021"],["/posts/c1b2c6c9.html","4278a252dae20b8a2f69957e84350c13"],["/posts/c2111cbf.html","89ffe622ad97b060b710bad03470fc32"],["/posts/c316c2e8.html","0efbf5bc6eaf6ac7fc6ddd996b501569"],["/posts/c497a412.html","f4c1d2250650de4113274e55e80497db"],["/posts/c5de299a.html","67882add794426b44c3b605e408fa4f6"],["/posts/c70bba9c.html","6215b6b94a42e1dd5c9568738d61a332"],["/posts/cae2c959.html","c6ddaacd6839840f9b270edb9472614e"],["/posts/cbebef2b.html","52044184c31a21ec7c14a5ff8b3ba3b0"],["/posts/ce25023e.html","ce73c55540e4c0b7d4030a588a168673"],["/posts/d2fd4837.html","a2376e937984b48bbb48bec1a86165c3"],["/posts/d3233cbb.html","e42ea3d0a2c0d0f55810763bc3025c8c"],["/posts/d3a745a8.html","a69a46a10b2481efa548109c85da1c14"],["/posts/e3ab6ad8.html","b6084eaf4d2087a5a5a38a151720acd7"],["/posts/e5018da6.html","279e4fa8158718706dd0d82ef34b29d0"],["/posts/e5963272.html","43b2bd5f888d28f103d8a17aebbad047"],["/posts/e624b065.html","38f67cd8875973f3f0408791f2ea6b7e"],["/posts/e91abb63.html","3645d5228bd4a3b25a01fbdb578a50dd"],["/posts/ee1ed673.html","a821eeb1d7cf0e013f44b0934979b0ea"],["/posts/f0c3ed61.html","b2475d6fab81611c272605aad53b4537"],["/posts/f21e7f84.html","3b86d26e9e4b57b8e57fb645e7402b20"],["/posts/f230b0fd.html","6b34b2b6cdcbcf26b7388c7a530028e7"],["/posts/fc04d0d4.html","048af4cffc7f1ec4dce1952ff59b04d8"],["/sumire/index.html","8e4efa94854be527246248481f79773f"],["/sw-register.js","2fbfd9b70fa6517fd415aa86e41030cb"],["/tags/BL-Game/index.html","6a1732867ef6127dd62d09274f17fe0a"],["/tags/CHUNSOFT/index.html","844b6784c41afb3985e05908ba28be3b"],["/tags/Cherry-Pie/index.html","6c2a28b179e6587792379291baf8b77a"],["/tags/Circle-Mebius/index.html","7a00988bea140b4cd479d22faabc00e4"],["/tags/Dopamine-Software/index.html","73ddb67b4cabb5a587a05adc12c5c93a"],["/tags/Dos/index.html","932097dfc2c545e88ae85867ed621f91"],["/tags/Kanon/index.html","59a61444ee8b0f5aef2b7f295ca1c652"],["/tags/MANATSU-8/index.html","5aac0db0c07512e1526273ed72213706"],["/tags/O-S-I/index.html","ce16e20f2482f3b552a449a9c44e9aed"],["/tags/Omegaの視界/index.html","fa34de531782f34dcfa51cf3498eb71d"],["/tags/PC88/index.html","9b699e7e2e7bcc218dfbc752cdeb422e"],["/tags/PC98/index.html","f879560481a8cf03570e53774cf09b10"],["/tags/Pleiades-Company/index.html","4ca32ee03340d1b84c3e58ba6bf43a78"],["/tags/Saihate-SOFT/index.html","5724d3977a361c020bef105f46126b02"],["/tags/ToHeart/index.html","1dd62bd907521695d3253477c21fda2a"],["/tags/Traumend/index.html","9ef1d273a640186b1b25b2e9fb9c64bb"],["/tags/Witch/index.html","21d4a6ba5d315c8134876900cbb73512"],["/tags/flash/index.html","38cdebbafe0a510e10b772270d024c46"],["/tags/galgame/index.html","a88fb194a4ac3afb1e8086dd0f0cc265"],["/tags/galgame/page/2/index.html","cf0ffafc54fa1b250b3e950e9615cf61"],["/tags/gal资源/index.html","6b6ac88b72c73e9c195693f6ee564af2"],["/tags/gal资源/page/2/index.html","c805b6ed9ee5ef136097bae9dad8bdc1"],["/tags/gal资源/page/3/index.html","ffdd27260497866506aa76815fee8438"],["/tags/index.html","c325d65df4453d48f64f73a8770559a7"],["/tags/rkr/index.html","c2247e68efb9b0db90177ccc7f1ae985"],["/tags/team-eye-mask/index.html","4a41c4da397677e90b06895235327d07"],["/tags/いつものところ/index.html","4c75a11dea9ec3e556123c9857d58828"],["/tags/きつねみみ饅頭/index.html","34f40db5b395103cf7c82a2163b43155"],["/tags/ねこねこソフト/index.html","e1e0f88e10334efe71c7e0a716ec56c5"],["/tags/ねこバナナ/index.html","5f53a33e5ca29f9ce46cb75c4fb628ec"],["/tags/停产/index.html","b13079b347293af01db1eddb5705c77d"],["/tags/公告/index.html","522597a160abe7ee35ff4e6718c4aba3"],["/tags/同人/index.html","45529c3d78b70e6f70f702d1f07972b5"],["/tags/堀井雄二/index.html","cc13068d62d1de212cff32137dedd903"],["/tags/外海なおき/index.html","5c0adcfa85c50fa9ac628e2fe876a99c"],["/tags/水仙/index.html","afb29e217a8e9e49561ad811aa9202e1"],["/tags/片冈智/index.html","22871941164981d1171099cd8740ef3a"],["/tags/片岡とも/index.html","23ae35ee99d4e54f7887b0f51d904337"],["/tags/牙の刻印制作委員会/index.html","546e205a648c27308969efcbfb7336b2"],["/tags/牧尾屋/index.html","fb61f8ec9b74475235fce8a2a951bb80"],["/tags/猫猫社/index.html","fd142a34a67ac6e34f0eec56254c397d"],["/tags/画集/index.html","a3aa335a859f4ef0c5f7d89342b33b0e"],["/tags/索引/index.html","52bd4e05d18ed41cef656ea156f5a92d"],["/tags/閂夜明/index.html","14ad1597c2c9d9cdc69584c2e4888b01"]];
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
