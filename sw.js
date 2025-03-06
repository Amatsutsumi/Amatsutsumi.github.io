/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6fe8a76ad9dc34ac77a827a70a6c62b7"],["/archives/2024/04/index.html","14df31a6b88da5aba9032682d6acdfab"],["/archives/2024/index.html","0dc0d6d0640780170319dd6dc3c362a6"],["/archives/2025/02/index.html","b549f0eb6306c809aec422182c29bc0a"],["/archives/2025/02/page/2/index.html","90a21a017a4874064f11c052fc5e05c9"],["/archives/2025/02/page/3/index.html","c4930052e9b95f383c0cb557ff1c9b45"],["/archives/2025/02/page/4/index.html","c93b5a193cca18e5bf12d2fcdb3f100a"],["/archives/2025/02/page/5/index.html","b55862e16da71090e0b1a2f2e23fe9e3"],["/archives/2025/03/index.html","386ffec70afb7b21e8edf7a4cd34590b"],["/archives/2025/03/page/2/index.html","5307d6a6152460218771212bf114d7a0"],["/archives/2025/index.html","7e2f2203677ac96cfa6c93def3494776"],["/archives/2025/page/2/index.html","538977731e4003ca011094e64fa04ec2"],["/archives/2025/page/3/index.html","59fddad2b7653c675a9849702a99f83d"],["/archives/2025/page/4/index.html","15c2897353cc66e1befa2a527e41d154"],["/archives/2025/page/5/index.html","9ab856185423f3a80ab58c34909584d9"],["/archives/2025/page/6/index.html","057fe680bdb7687e9843831e704bd22a"],["/archives/2025/page/7/index.html","953dcea3bf8958ed6780e4672ac48db9"],["/archives/2026/02/index.html","84d5eb0cac713159813c36a71ed39ad1"],["/archives/2026/index.html","7576a5a6a4ad5e71b1e652edee21aa7d"],["/archives/2925/01/index.html","ccc503722b3b44a50f5206d3cebffde5"],["/archives/2925/index.html","d6bdf58bb2f352ceda9acaeaf169e0fe"],["/archives/index.html","1a5f7f921c6350a7d6a34aaf08b42c95"],["/archives/page/2/index.html","a8720990a77fb9ab764785be12b629c3"],["/archives/page/3/index.html","f951d7b89272b8f730602017c7881b69"],["/archives/page/4/index.html","9968ae6f982211e955a6f5fb5c06eb44"],["/archives/page/5/index.html","87070f3c8ba6e526ea76fa5821c227c7"],["/archives/page/6/index.html","56be8650580af6fcb8c18048a069642a"],["/archives/page/7/index.html","a4d3fcaff4e4eb01b2491901ca8fbc6e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","63ef06d7c31213ba2eecc738259dfb25"],["/categories/galgame/page/2/index.html","f7f2df223b72ad375db9a9fa245427ba"],["/categories/公告/index.html","9b1f33e64cdc8007bd282795113139f4"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","efb1bf99ee592c1424d2e474b897e07d"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","e3b94468f6c0dc1bfb9c6d42f4aae26f"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","e41a6aa9c94b58519a91eb4d19f81eb8"],["/page/2/index.html","a114369d39804d7b36b1b6df70de19e3"],["/page/3/index.html","f4b056f741b196d0e50e7f65e2cfeebb"],["/page/4/index.html","64a13f56b83a154c29c2693c0cef9f8f"],["/page/5/index.html","c1fb86972bc1e37c2cd7e0c0640348c2"],["/page/6/index.html","a45f5b52acbf4cef7660db102a48831b"],["/page/7/index.html","69675701dae6960744242e4f0198e4d8"],["/posts/10c9dd98.html","74e4a8b3dc6856f31f4eb8f71af4c618"],["/posts/1370342.html","92348cec9b2a968c9e100ae6f5ae4c76"],["/posts/15ef14c2.html","d10439c8789d2a45e1dbddfac9f656d5"],["/posts/15f3959d.html","007ce96a5f5abf9e38d4d1c6682a54c2"],["/posts/18ab785d.html","e0ab35b26606588e799defb4e58bee49"],["/posts/1d59b71f.html","10c6d1b2842233cac532dc4d98b3407d"],["/posts/20b3f3a4.html","2915072edc3cd838409ca48261880ed6"],["/posts/245f1c7d.html","81e288297c77d778399fa378a8c07be5"],["/posts/252658f.html","188e55ef69a0cfd0a82816e30494feac"],["/posts/28397adc.html","4bba5026192d0b22bbc6effec611f364"],["/posts/2c0a6836.html","41e9e2f235da3c498cdebb757b1053ef"],["/posts/2cf620f0.html","c75314b391c1c6ebe5f0e55d1a07c332"],["/posts/3f7d823a.html","37d5c1b245c045927c16a3baf0200b29"],["/posts/44124a6b.html","8f2bc96f5623c965bf92c193af9bdecf"],["/posts/47abb61d.html","10d3ccbec8737520b89b9b8076439adb"],["/posts/4b689be3.html","2aaf1ae00c2ce7b81eea93c11d78a9af"],["/posts/4cf8423f.html","7b5b1299e736c261542951662e126cd8"],["/posts/4dcf85c.html","4f5aec49bdb8293f9bd65d3f67c7fec6"],["/posts/500cd322.html","e83b4689f9aa89fb01bc44c434c4ffee"],["/posts/51c9b1ff.html","2d7807a0159d0e3b1e87a7d444171e85"],["/posts/52b5b3c6.html","e268d7b88a00c9c38887d47268dfba52"],["/posts/5f6e0c59.html","06ee0f18e2f9d0fb1f9e935a40ccea89"],["/posts/6336a2f9.html","2c826479dc89cf8c6c99bd46a857fa8d"],["/posts/6432d61a.html","3b6da34cfbf60a9a845813cdee1e5274"],["/posts/6515f032.html","7d6a98f70ae31b4436c1653b8acabf9e"],["/posts/6720ccdd.html","8cb28af11a3755503cc1b869dd74f374"],["/posts/6a4b5ac8.html","23ebec9352d74350941b107216fd48d7"],["/posts/6aa4177c.html","7f7011622265f59d5b65f0b9732ab292"],["/posts/6b15f81f.html","31c498c5a3ba56594f4db971bd6b0a46"],["/posts/71131d34.html","2f83a7672276ef0ffb8b84c5985a3538"],["/posts/78a8a8d3.html","9fd173f966ae1af28e0bdc923f8484f4"],["/posts/7b41e1ac.html","77388c74e15f087999376470f62ad8c7"],["/posts/7e3aa3e2.html","f9d99844b250fd3722225106029321a3"],["/posts/80fe2691.html","7615ea168f0083723b07dda7940e8fb0"],["/posts/81ac52e9.html","73e61f6a840459ef34aa4c07f78e85b5"],["/posts/849b40f8.html","8af0934971af8eec6277ecb56e754196"],["/posts/85c51d68.html","8973fea0ed901f34ef49f58ded50c1bb"],["/posts/886f8d3.html","ac36adc8293193397e7f247bd3a23c54"],["/posts/8dd520d9.html","7b40a991620bfbe40b789f58e2aa4d69"],["/posts/8f555654.html","b48c33443761f3bcf27a8d929628a53b"],["/posts/92a980c2.html","294be90a8aa2752a987bb95e47585c35"],["/posts/94d3c794.html","924d125fb6c5c822bfa95b0ec8d5aaab"],["/posts/97f50eea.html","0d44a217b9f6504399b80d80fd310d4d"],["/posts/98662d05.html","a37c55e5fc0a1ead6846e87c5660ff60"],["/posts/9a2f6162.html","d2ef6e354b25cba3c5fd248611b168cc"],["/posts/9b22a48d.html","dc033dabaf62fdbbf9d027103fa6f072"],["/posts/9cb455b1.html","ceb30f1851a56ddc6e8f76396373751c"],["/posts/9f61c1a0.html","f6605c15fdb3f86ba466a6f45e330b27"],["/posts/b497b647.html","c701757bf57d3b60e9f84f97265ef2b7"],["/posts/b5fb773f.html","4f408a3c3bf87c3287d1c3a2d9887c63"],["/posts/b8d46b32.html","3bb2eaed32c0279757f61c42fa29540d"],["/posts/c1b2c6c9.html","22f563b6730a0d3afe8aee0bb9cd126f"],["/posts/c316c2e8.html","a33098cf04935720670039eab0197c57"],["/posts/c497a412.html","f6c55b294ced20b1006e2f41e1abe4fe"],["/posts/c5de299a.html","f13d5851509ef1945ce802dc1d778f1f"],["/posts/c70bba9c.html","74659c47b419b37a1b3fc41ad7dfd0f9"],["/posts/cae2c959.html","dd74f8c4d88909eeeb997b1a36dfd00a"],["/posts/cbebef2b.html","e4da8147480c7bebf75be6eebb701b70"],["/posts/ce25023e.html","b0eb0b8d17873694723d5c60e7f7da18"],["/posts/d2fd4837.html","28191e6ea18ec41d540e7243201fbc98"],["/posts/d3a745a8.html","dcecba49592e0f660fb99a474926d296"],["/posts/e3ab6ad8.html","d9c70dc3d96976ea8c4fad1a8bd7ef1b"],["/posts/e5018da6.html","4c2b1211c7705f720e345705987718a0"],["/posts/e5963272.html","5825565ae30ae755d01dc9df0bf48e0f"],["/posts/e624b065.html","186fe07abe0131d20be0e8f27c980be1"],["/posts/e91abb63.html","e7677c564ccb88201ce6fac2f96f9733"],["/posts/ee1ed673.html","96bce8a95ef7d3a6fe1cad1e65520270"],["/posts/f21e7f84.html","fa1ba62a80734d1fb3af476ff2d90a9f"],["/posts/f230b0fd.html","a8981bc785b4b9034b17c296b74823ef"],["/posts/fc04d0d4.html","e99e06a2831c656763ef5e1b739b7f76"],["/sumire/index.html","df99b467a07c6acda801644bd8b6d6a0"],["/sw-register.js","e65af9f3969c648fdf5dcb3c64b73870"],["/tags/BL-Game/index.html","8e75c0d53b3a767a5d8837d49421dba0"],["/tags/CHUNSOFT/index.html","32ba12a85c8b21e9c7b84399b97fe3a1"],["/tags/Cherry-Pie/index.html","d0aa3c2713332c0c9416548ba586bf5e"],["/tags/Circle-Mebius/index.html","146d607e926dbb28b723e806e61c0be5"],["/tags/Dos/index.html","f7f626788fe353d3d592456ce3001c2b"],["/tags/Kanon/index.html","b17fe31120d4555661b2b08e6ef52e9e"],["/tags/O-S-I/index.html","a7419729a9e62cca527fa134da680a5e"],["/tags/Omegaの視界/index.html","1e2fde895ab2e65a09b5496da27c611f"],["/tags/PC88/index.html","6977c9750453a29e7948994ae57e3d31"],["/tags/PC98/index.html","2f5511ff5b2e9501ad07fe95cbf07fe0"],["/tags/Pleiades-Company/index.html","bb35f81dd1f4cbfaac78204f7794a823"],["/tags/ToHeart/index.html","359043ebff304c97e6efd7f021cab868"],["/tags/Traumend/index.html","e53a55e6538aa424a6e8d77cbc128994"],["/tags/Witch/index.html","115fbb97a9ea2dbe2e98b25c3061a7d8"],["/tags/flash/index.html","7de46c7a495fcbde4e8f2c805aae309b"],["/tags/galgame/index.html","ac331d3c4b99071a809a5f9628067b19"],["/tags/galgame/page/2/index.html","2184c2568196f480fee559dac3254322"],["/tags/gal资源/index.html","0c9199f94acd2e882c830d81fa8d6271"],["/tags/gal资源/page/2/index.html","a12c70fe08e98c59b0a9d5699b17f7f7"],["/tags/gal资源/page/3/index.html","eff925829333ac4d54fb5b14a76c6b05"],["/tags/gal资源/page/4/index.html","a83a32328f19077c59798e021543b422"],["/tags/index.html","1690e9420a57b07dac3aa5b407f98c5e"],["/tags/rkr/index.html","d37889ec08dd0b5ec270351d68dc97dd"],["/tags/team-eye-mask/index.html","b19cc9ca0e8903183be4c475d5ba06e6"],["/tags/ねこねこソフト/index.html","702afe038245b790f83b6fae42359e19"],["/tags/ねこバナナ/index.html","ac65cf3dd20f3d24ded25eb8e728011d"],["/tags/停产/index.html","e18211453cb51279565b3e58d33c08ed"],["/tags/公告/index.html","6e1acc63a564843e403f15fac7ee64e5"],["/tags/同人/index.html","09b6b3284523318ccb1d81710678998b"],["/tags/堀井雄二/index.html","9b2881dea1e9a1194d91c7b4f613be6d"],["/tags/外海なおき/index.html","1897e0f0a010fb3e5d3125e4c4190a5b"],["/tags/水仙/index.html","14f9530493afeb39827d05ce63f31dd2"],["/tags/片冈智/index.html","98078569add54a0d01ca506d82a8ef31"],["/tags/牧尾屋/index.html","eed77dfe7e78376789ef5ce613906b9b"],["/tags/猫猫社/index.html","b774bd352094593739eb8ec0754def14"],["/tags/画集/index.html","a8fce0a68d63c60778180d7757e208ef"],["/tags/索引/index.html","4f8b43b8a277189e4ee49630a283e663"],["/tags/閂夜明/index.html","68f6b8ca03ce16d47d6158df3cb85cd7"]];
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
