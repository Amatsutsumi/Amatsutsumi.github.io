/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e452828c4c43498ffa888ef0f5901678"],["/archives/2024/04/index.html","9cd182f7d41c61f70b0a97c83c0eec5e"],["/archives/2024/index.html","fd89f36d043355d3cde8bc6ac51d2498"],["/archives/2025/02/index.html","ef24ace4aaa77c02298653cc24157526"],["/archives/2025/02/page/2/index.html","d1f4d433f0a634c46009bbd85aecfe47"],["/archives/2025/02/page/3/index.html","7a94fd7f6b011151332ba38f5972c8e7"],["/archives/2025/02/page/4/index.html","18182f8bc578c90e1d03703ee74de0b5"],["/archives/2025/02/page/5/index.html","62bfd0642f06f963afefbe734dd2d478"],["/archives/2025/03/index.html","ec1f5be7214214aa1c60b31f8b8c6fe1"],["/archives/2025/03/page/2/index.html","8e2ae7d5a5c933c41258a6d2021d8698"],["/archives/2025/09/index.html","c4feebece1478a9cc552083f4133093f"],["/archives/2025/index.html","0398a7fd72785e870853359d2a3723a9"],["/archives/2025/page/2/index.html","bcfbe4b230f7ed22f6edd2ac57c0b44d"],["/archives/2025/page/3/index.html","89df1d935139b36e53e23ad99780116e"],["/archives/2025/page/4/index.html","61aef286367e49fad2ab33605bee52fa"],["/archives/2025/page/5/index.html","fa338e06a9468c03e7a41e06899e07e2"],["/archives/2025/page/6/index.html","a11904c9920ba88f8b2c49f4febfe416"],["/archives/2025/page/7/index.html","7529a29dc7786b2007cf28ec52996ffd"],["/archives/2026/02/index.html","4ad304b96ee3bbc5d15c95c1260f84cf"],["/archives/2026/index.html","9560bd866ecb6910e125f7ed1f4b4066"],["/archives/2925/01/index.html","6c14fa079490486da6f9f58bbd66ebf9"],["/archives/2925/index.html","15c7c1524d9c1677e6355d60ab690e1e"],["/archives/index.html","c4e7f0a4ac2d493a4d138bff9f944328"],["/archives/page/2/index.html","a11a99ca80f73fd2db240df8f80ca20c"],["/archives/page/3/index.html","6950542fe14c9983b7b5019b85cd4d73"],["/archives/page/4/index.html","c59d8bb90237a24c523189669f729721"],["/archives/page/5/index.html","e92072f07f33e8b1c4d5915051514b46"],["/archives/page/6/index.html","ddc52cfa8f998197bba17eb00b489610"],["/archives/page/7/index.html","50c10370312d6701e6f1c9b8f039fe90"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","73df5b190731828304c137b811130422"],["/categories/galgame/page/2/index.html","6d5fccf474b495fe775067dacc8f01d3"],["/categories/公告/index.html","4380efdfcae045c6e6f184511c4ce561"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","e1d3da50435e92a4cff56eb2e3b7d5bb"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","b54cad6e90237fbdb7cfd4da3d451e2e"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","5d65c695c6493ef78fb7c005ae406a67"],["/page/2/index.html","888932d0b273653adac016a8ed301015"],["/page/3/index.html","8bb240a999a19462887730614abc556d"],["/page/4/index.html","f7282e3032cdddc5de49d431c769ed64"],["/page/5/index.html","169eebb37805435b1dafe0cf04515eee"],["/page/6/index.html","0a29f6f5dd69c0998a409b4b8adf69d1"],["/page/7/index.html","5e1d5aeefc11743633782540e98654d2"],["/posts/10c9dd98.html","416feb42ac3e5b2a3fa8e7f529f8e4dc"],["/posts/1370342.html","74bb96339f22c25a77058e2e37f36120"],["/posts/15ef14c2.html","ee59633bce7fbb9022c91ca30c4831b0"],["/posts/15f3959d.html","0b5e5c916a5d8df5a46a7d7329a6691b"],["/posts/18ab785d.html","87105292892600e05d30102983484838"],["/posts/1d59b71f.html","b2c60ee89fac51857367d912ddea1a61"],["/posts/20b3f3a4.html","f97dbeca3f4d9113af15921a20c5971f"],["/posts/245f1c7d.html","01d137b8a820d32287db82430064b4c1"],["/posts/252658f.html","bcdb2693b2fdf98dd77162e30aba6c69"],["/posts/28397adc.html","65527ecdd5c541c9e2b54c5b28318411"],["/posts/2c0a6836.html","a8fc0a9f9a1780da673b4eeb9bc351fc"],["/posts/2cf620f0.html","5445eb722e9d183305a20b5362f40023"],["/posts/3f7d823a.html","f85b5afaccdbe2806a91618ed2636bc7"],["/posts/44124a6b.html","27681892c849d557f44c32229ebf9773"],["/posts/47abb61d.html","6fb80e59579ad6b582aff188d0c7dece"],["/posts/4b689be3.html","0becbae933382d1dab0294096bca0929"],["/posts/4cf8423f.html","b5f3b36a2be2cdcd64d9d3dedebf8325"],["/posts/4dcf85c.html","eca20278ad3e948860c0613d56d42284"],["/posts/500cd322.html","00318b35763d9fa7dc3cb938b75fb47d"],["/posts/51c9b1ff.html","65a3300987167f8480a33e6c994a1bd2"],["/posts/52b5b3c6.html","5abd8883d4d1e62c2dce8e4dd315c4e3"],["/posts/5f6e0c59.html","d8602fa2293fd7e63ea0ee113588859b"],["/posts/6336a2f9.html","2215d40116f4028c54306d4b10792c68"],["/posts/6432d61a.html","5762eb0fb9e86fed182af9d4888809bc"],["/posts/6515f032.html","b6c1506e8e4fdeb6be7bcd3335b9476c"],["/posts/6720ccdd.html","fadd69251ef6cfc27f1d86715d33015c"],["/posts/6a4b5ac8.html","8d47c10ac7d394d47d1848fa2b7cab16"],["/posts/6aa4177c.html","51a019bc49a45e2e588c1da0e3adbbe7"],["/posts/6b15f81f.html","1fd292cae74fe81004cf4997931d2199"],["/posts/71131d34.html","5e6f827841a398c59d8ff8e5b26e36a4"],["/posts/78a8a8d3.html","e2f9d30dd74eb5fa84dad825e5c41c62"],["/posts/7b41e1ac.html","3532123450d62f1ddfdf72aad7026bd6"],["/posts/7e3aa3e2.html","dd52a590f1950b03e26038e994623440"],["/posts/80fe2691.html","f34be84162462df8fc4461c7fd188eeb"],["/posts/81ac52e9.html","c683b7bf211f09d1556490ac51a51174"],["/posts/849b40f8.html","0ec8092d2ba109fcdab62ab157db610c"],["/posts/85c51d68.html","5315c2b11f5e22b29193f3b7c67782a6"],["/posts/886f8d3.html","43a2efef3be64f5faaf70163bcb30b4a"],["/posts/8dd520d9.html","c6e7c340f2b7d9cc996b03b37c433035"],["/posts/8f555654.html","97dd552392d52df03134c0b346f04f45"],["/posts/92a980c2.html","eed377524a316af3ff6c71bf5b31b49a"],["/posts/94d3c794.html","bf67ab086e06a8fd4e7894dd46cf8676"],["/posts/97f50eea.html","331f62b18098ff469d3d2c5c3aa8e1a6"],["/posts/98662d05.html","b35dc8d9ac8f7fe8da5bb75ec86abd9e"],["/posts/9a2f6162.html","fdd74f79770b6905e00bec89388e3379"],["/posts/9b22a48d.html","bdc91e999a06b5c6a4fa7873a11d9348"],["/posts/9cb455b1.html","475a1fb383d43742d4068d1ab673d1f5"],["/posts/9f61c1a0.html","eb575f488b116d595926a254de6bbe83"],["/posts/b497b647.html","66ae95b9ec590503da6ff518287aec3d"],["/posts/b5fb773f.html","92525ddabbce5e149cdf2f0857d86d53"],["/posts/b8d46b32.html","971d27fb59a385cbae3eb5629675e7f1"],["/posts/c1b2c6c9.html","33f669bb5389d84f5342967d85d4bf32"],["/posts/c316c2e8.html","3aabd33b857efb633574e25f8fb6c2e0"],["/posts/c497a412.html","acc6ae5f731a72f3e88b764a892ea1ea"],["/posts/c5de299a.html","18d7d50e608f0e1169ae1cc713a7e4cd"],["/posts/c70bba9c.html","cc8079fa54b3f6781e41bb8672b5affb"],["/posts/cae2c959.html","df0a2bd2a553e22a7315a3bd7b113c0e"],["/posts/cbebef2b.html","6f2fec80980fcd3b8bb884446e52e11d"],["/posts/ce25023e.html","cd23c86e02338fc5e0963f8507335677"],["/posts/d2fd4837.html","57c5aa02cf309f49ef96979ef1aba684"],["/posts/d3a745a8.html","43a9b92685a630b82f558793b944ed5d"],["/posts/e3ab6ad8.html","83ecb02e212ee39434724eaa5101515b"],["/posts/e5018da6.html","f8f9b6be4a9b59f6454a05df22716bf5"],["/posts/e5963272.html","799706ce41a0cc3b5c03d5bd1438e004"],["/posts/e624b065.html","ea6b71a7909b93b14f8dba8f0f308847"],["/posts/e91abb63.html","3475577b312a186b06f6f9514890941a"],["/posts/ee1ed673.html","b703b7aadf27c26f526aba4899857e7c"],["/posts/f21e7f84.html","d7ae2a182cbb3edd7e1c931804f45214"],["/posts/f230b0fd.html","81655931cc2e91e53a18004bb5560cfb"],["/posts/fc04d0d4.html","9fce0e9c6ce2d80ac69aa249cd3ebd78"],["/sumire/index.html","88a1bc122e985a6276a2158d73a6dbc8"],["/sw-register.js","b9c1bdb2d858f6781f7c6695de2664bf"],["/tags/BL-Game/index.html","41a638162147230d4d9f6b249b8e996f"],["/tags/CHUNSOFT/index.html","c4f3c7fbf616665987dccc2da8200f32"],["/tags/Cherry-Pie/index.html","df04bdfcce1e65b629b2cfef454e24f4"],["/tags/Circle-Mebius/index.html","246516b6540e8eea11b16be0c88ab62c"],["/tags/Dos/index.html","dc9cc3a705ba3df85dff55d66989613c"],["/tags/Kanon/index.html","af9c8e5e41c5cb1c281c4c4f0736d8be"],["/tags/O-S-I/index.html","4a64d635204212870ce2191318f9167c"],["/tags/Omegaの視界/index.html","ad0524dba44b9ebcdfd3ee768990d9b6"],["/tags/PC88/index.html","03934569eba76c0d6019615ea4b1f7af"],["/tags/PC98/index.html","fac208ee6afef41fa9d50e734900ba3c"],["/tags/Pleiades-Company/index.html","d10b60c1aaa5ae8a055db34fe1563960"],["/tags/ToHeart/index.html","2501bcf23edb8d541648bc302a1f8602"],["/tags/Traumend/index.html","afaa33f2760f2b23f2a6d1f2893e26d5"],["/tags/Witch/index.html","44c10f8ea852bbde9e9d9f275a3c5e75"],["/tags/flash/index.html","004f4a5b9327690284d1ea65eff58357"],["/tags/galgame/index.html","83c2195e52f61bc5783dcb12f9e2c4d9"],["/tags/galgame/page/2/index.html","77a22d0c7bf03d4d69b46a02e49c0618"],["/tags/gal资源/index.html","65ccc6100c8dbdf7efcf9913d20f639b"],["/tags/gal资源/page/2/index.html","1099a993af02b3b464a4e523e548acdb"],["/tags/gal资源/page/3/index.html","ac2d0310ca2d9acc74d4d77a34ae942b"],["/tags/gal资源/page/4/index.html","b8486e25a4167f08561d80ad3e202ca3"],["/tags/index.html","8f9860a9920088fdfdbe0b8b1ed24ca7"],["/tags/rkr/index.html","d9d442036b05f61f7904367dce16b94d"],["/tags/team-eye-mask/index.html","510283ed48def769db1073640d28f241"],["/tags/ねこねこソフト/index.html","d6ecf686927a8b065433ab427b726ac9"],["/tags/ねこバナナ/index.html","d2867b365818f345ec3128c0c310c00e"],["/tags/停产/index.html","a17edd551e030720729b14da00b52592"],["/tags/公告/index.html","3cf71724e7637cb946bfa7414be47a9d"],["/tags/同人/index.html","d465d0263646fee86dece7054c5e7615"],["/tags/堀井雄二/index.html","493d99c3b51c2b63b99dd8556752960f"],["/tags/外海なおき/index.html","1ffc084aa2d1dc7ce407a26f8c067b09"],["/tags/水仙/index.html","fd29de1cc35369d16835e16db9548643"],["/tags/片冈智/index.html","f8715da5183d0673843cd5b9b2190f32"],["/tags/牧尾屋/index.html","a58e952efbfe041cb4baeb97e5f9ac29"],["/tags/猫猫社/index.html","27961a62137d54de8b0f9a61241229ba"],["/tags/画集/index.html","c26f344cd9606bd4330762a3a07c42d8"],["/tags/索引/index.html","8ed4fb6a8793a3b21651539b02def601"],["/tags/閂夜明/index.html","1343af3c16ac9fd6bdc66a4950393d9d"]];
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
