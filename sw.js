/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","cc9692014501399b533a03e7739ad2c9"],["/archives/2024/04/index.html","f30a5cf7e68d51958a0a7248da31d479"],["/archives/2024/index.html","8adf0a721153af9b412fb1fec8762711"],["/archives/2025/02/index.html","76d97b6b9ca7a8107675f325fbe63674"],["/archives/2025/02/page/2/index.html","d7223aa27dcc02e830eb6ed842cdc6f2"],["/archives/2025/02/page/3/index.html","8df4fdddfc85dc7bc294c1a922603ba8"],["/archives/2025/02/page/4/index.html","20e973574107606f76b352323e194ea6"],["/archives/2025/02/page/5/index.html","a5309ddeb9b06c14cd66f86195983a91"],["/archives/2025/03/index.html","ddbf8a1e996ac960bb2d994b06ff6b37"],["/archives/2025/03/page/2/index.html","823501ffbd587e29d0034919a456ac10"],["/archives/2025/09/index.html","7bfa8d783e25c2dd1020d1788681c39b"],["/archives/2025/index.html","29a83e4f96a44246075dbfd9c521b487"],["/archives/2025/page/2/index.html","6f289a3397aa1928c0a612d939e126b9"],["/archives/2025/page/3/index.html","0f5b532f71fe1fc36793570627ce1d78"],["/archives/2025/page/4/index.html","32f2b29608e840bd54078e816b92b006"],["/archives/2025/page/5/index.html","3e7a5773504c9ddea76cb214595f243b"],["/archives/2025/page/6/index.html","d2e965ace73658ec6289d12a1b5c9ece"],["/archives/2025/page/7/index.html","c9af6952463dd3787fcbab24631ab7c9"],["/archives/2026/02/index.html","f9024fcfb531832140298f378ed40f11"],["/archives/2026/index.html","981e2f7a26843a948d4e8911585140ce"],["/archives/2925/01/index.html","e451d4133c43ee81059ecc9386308a14"],["/archives/2925/index.html","eb2e7241638a0a1f146e2f09d8c26678"],["/archives/index.html","485fae9ae55809149236a1375170623e"],["/archives/page/2/index.html","320c476b0c1769d33d18148e5cdd2578"],["/archives/page/3/index.html","e50f3ff4e5a1856b52b0311b2158b519"],["/archives/page/4/index.html","a87e0b1e8c599a03d7fbade770252e1a"],["/archives/page/5/index.html","f33c4c15f802abf1fa1c6bdbedc1ed4a"],["/archives/page/6/index.html","bf27ccaa2eb22863a57e6cd1ecb6b18f"],["/archives/page/7/index.html","552feefbc778363753296374d241d1bd"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","1fa3e072d477d592f04fefc552b92436"],["/categories/galgame/page/2/index.html","bded3da43e5a399531ac6b883673ffa2"],["/categories/公告/index.html","1eb575c8038e514fb2fe960207a5d1e5"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","20a859d9829e145ece842a6fa299cc5e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","5788d9bffc2b19e49dd382e049a0c723"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","f2f8c05c99b7b0f747347666da567dc3"],["/page/2/index.html","04dc445449d10bce9a654d6ba43b4804"],["/page/3/index.html","9bb2e138452b2d0d9d743f11b7171be4"],["/page/4/index.html","8fc6a2ff88ad7afaba72f8cd3b100a91"],["/page/5/index.html","da8e1958ab5af658820ae6257ada58d2"],["/page/6/index.html","482f1addeb5cecdd41aae1ca1ea5a3ba"],["/page/7/index.html","cca4434e2ec244580d35581d04e58f8d"],["/posts/10c9dd98.html","ca9fdd9649bf6b3b950ba8378f37ab7e"],["/posts/1370342.html","c7445d74a70a531adc523061dce4a2bb"],["/posts/15ef14c2.html","2b200500d0be17ef9d7667d6abf4722b"],["/posts/15f3959d.html","6168cfd29371f7b720e97675d6994a9a"],["/posts/18ab785d.html","968e57284786269bc5d7c3b282d57a66"],["/posts/1d59b71f.html","9f6666ae188941a2b1decfa8a2e66391"],["/posts/20b3f3a4.html","a745890480e96e6787f76188dfde8f45"],["/posts/245f1c7d.html","f30a775f80f527b0e68e4aebddebc875"],["/posts/28397adc.html","7c55c0f6ad8498c781ccc9554d7a9dd8"],["/posts/2c0a6836.html","c2e4f73d9c47b40141c1b3bf99996ef7"],["/posts/2cf620f0.html","e8fe13d19a922827f7246db6f0fb59bc"],["/posts/303007ad.html","c4d7197cd982968b1d86064c25f604ce"],["/posts/3f7d823a.html","fa05f1af0028e125841356bdd5def13e"],["/posts/44124a6b.html","52755321e7b72e9927f7ebf8058ad103"],["/posts/47abb61d.html","43e50e68e99f97e54ca656b220c01461"],["/posts/4b689be3.html","f647bf191168ec7225e5941946080e64"],["/posts/4cf8423f.html","23969d9691b14391402438ef1f8d8b23"],["/posts/4dcf85c.html","cd2d37e67f66180f41ee8570e23d39d1"],["/posts/500cd322.html","c96f2ef6f841fd7caab7a892db5f3554"],["/posts/51c9b1ff.html","58906ab31729715bc27bd908195fff0d"],["/posts/52b5b3c6.html","947228f4c0f71737b0478dac324855ac"],["/posts/5f6e0c59.html","10f2af8872df0f412cdfbe97714a017d"],["/posts/6336a2f9.html","e310b83d6d18cd6090f38ce12eaf1654"],["/posts/6432d61a.html","0db229bfa6fbbaba5c32836ad8300190"],["/posts/6515f032.html","a7facd2f97cd4685cf526e4723faad77"],["/posts/6720ccdd.html","457e5b6d3bde889d27c35d558b3313c7"],["/posts/6a4b5ac8.html","659f10d9102b0ceb957c3a885ed44d2f"],["/posts/6aa4177c.html","855cc086a03f19a617245228ef1a2c2d"],["/posts/6b15f81f.html","6b859da7ecbe5f7ace8db9a98a592372"],["/posts/71131d34.html","9a4eda0652f25ad70c4da62cf9202027"],["/posts/78a8a8d3.html","c9c74aa2e12b7bf9082070f6f99be580"],["/posts/7e3aa3e2.html","bba0e9fc33174566660a8ef59ed0e54a"],["/posts/80fe2691.html","a5c72a53ede112e31e9b3a0adb76bff3"],["/posts/81ac52e9.html","404b9b5a29d9dbf751049b673d760c82"],["/posts/849b40f8.html","7a5086a4bcadb45f37e105067a3af9f6"],["/posts/85c51d68.html","d42f53f289c14f179cd4902bb632a109"],["/posts/886f8d3.html","b14fcc3c87bb50f30758cf96054da7c5"],["/posts/8dd520d9.html","122b63fcc3675142760716f0a46adafd"],["/posts/8f555654.html","015902f0b051bede7ce6135e4aa2a1e0"],["/posts/92a980c2.html","0847d540210627adb04fccff60ba516b"],["/posts/94d3c794.html","e0c4894f3f3c49d1de856b50c1faaab8"],["/posts/97f50eea.html","5d3774c38e087cc0a74f2d0cf60e5900"],["/posts/98662d05.html","b3af1cc2e6354f967296fbb21dfa53bf"],["/posts/9a2f6162.html","e85eda6f75778d24b8bb1fcef1ec0ce9"],["/posts/9b22a48d.html","17e5e3e16c937fa976fca12d6338eb16"],["/posts/9cb455b1.html","543f196386ad3ff7bc285b2af6292c3b"],["/posts/9f61c1a0.html","a9a45fd2709f9e02ba13936a0a05c56d"],["/posts/b497b647.html","1c26d28e9de38140fb2d8715050a4f44"],["/posts/b5fb773f.html","5fea69d3c504c512419dbcfacb1577d2"],["/posts/b8d46b32.html","c38518fe695e11e1b7fa8d65050794bb"],["/posts/c1b2c6c9.html","38dfe4730bba1492ca678a5de518c9fd"],["/posts/c316c2e8.html","57fcb3749b7a97b2dc9b4d938ac4d329"],["/posts/c497a412.html","561f3e027a8a8487c453bac2b42786d0"],["/posts/c5de299a.html","2778a3d2d8cbd58ffe7f14945ef17fb3"],["/posts/c70bba9c.html","98a4e6e6c6a74e99603ddff18d994fe6"],["/posts/cae2c959.html","781e3ef9eb74e4024c057ad7688cf8ed"],["/posts/cbebef2b.html","b76dc279515eae184299624882ff70c7"],["/posts/ce25023e.html","2998fc2e3a53f6ef109c971888c6c622"],["/posts/d2fd4837.html","debbf186709e89693973a06cddfae180"],["/posts/d3a745a8.html","ee7938c96446c835143eac8ce0630be8"],["/posts/e3ab6ad8.html","d3c0ce7365cf56e585eabe75c9a6294a"],["/posts/e5018da6.html","70b78737404dd07c4157ad47c2999295"],["/posts/e5963272.html","df0095855663e077eab9499deb69176f"],["/posts/e624b065.html","bc2d4225256839ad3192be98b436c817"],["/posts/e91abb63.html","ecda030456009e497c8081b7adb11615"],["/posts/ee1ed673.html","607182d479ec9aac9181923a524974f0"],["/posts/f21e7f84.html","666eedb9e01a72388b576a6798e13386"],["/posts/f230b0fd.html","cbacb43ef45cc6b0f32da18bb7dbd8d1"],["/posts/fc04d0d4.html","af2755069a7853f675a8e6a2a4fcaf0c"],["/sumire/index.html","c4927a1717a7bcb5cbfa8d76bd68a47c"],["/sw-register.js","45556a14a0e5cef8aa62efaaac70415e"],["/tags/BL-Game/index.html","a65268727556a4a381c7a8e38d173d40"],["/tags/CHUNSOFT/index.html","0ccbf2320fe0388295c6e4c48257fbb8"],["/tags/Cherry-Pie/index.html","ea9c75898bedead6f23ae69c499f2b8c"],["/tags/Circle-Mebius/index.html","0f7ae059d8c83cde52bbda3b0015057d"],["/tags/Dos/index.html","c369b0e41f2c7db330da88c23933d184"],["/tags/Kanon/index.html","8f37208da7f8654f42f819459c127d2f"],["/tags/O-S-I/index.html","c618f611d28d1a298574a2df92c474b9"],["/tags/Omegaの視界/index.html","00875892829c5b1bd9f2d216e4c7e20e"],["/tags/PC88/index.html","cda2743bc1e97bad4a58be8f842f0137"],["/tags/PC98/index.html","83e0835cbda7a3c5611326606bffb1b1"],["/tags/Pleiades-Company/index.html","d0f140b326f6f67a2221e50e6973077c"],["/tags/ToHeart/index.html","f60ff6709f3a301a27377c60482993a7"],["/tags/Traumend/index.html","6cb6851f62e7e5717fa990820af81327"],["/tags/Witch/index.html","dc713a1f974fd804d36883a0d7e37943"],["/tags/flash/index.html","dc3d4af471ab564e2367263de387b511"],["/tags/galgame/index.html","d1979212fa17bf7190e79360d9bcf609"],["/tags/galgame/page/2/index.html","41cbde563a6db39b3c84782e651d6eec"],["/tags/gal资源/index.html","42ee83e6a5a3c268e3bbe39284891ee1"],["/tags/gal资源/page/2/index.html","7db302bc781ca715f401cf77172ad7b0"],["/tags/gal资源/page/3/index.html","73045976685cb5565977c0843de8eb51"],["/tags/gal资源/page/4/index.html","fa9f7a3189492dab10011f63517c954f"],["/tags/index.html","a965e3371b6854474ff8e7215e987258"],["/tags/rkr/index.html","ee4a1da141217ed6e950d8a8d9cedb07"],["/tags/team-eye-mask/index.html","282a9f2a820dd0febefb9328d18246cd"],["/tags/ねこねこソフト/index.html","7d64cca7629b0a4e252a262f5a8f337a"],["/tags/ねこバナナ/index.html","003eb821ab0ea61259a7b0a14e3ff8b7"],["/tags/停产/index.html","996c6ef7da2ade23f9ac712891450280"],["/tags/公告/index.html","4104c92bce9c81c9b7e55b6093dbb987"],["/tags/同人/index.html","2e06c3c1bed8dc8d8d3f37a0c3a827c3"],["/tags/堀井雄二/index.html","35de5b7a2d317ab1fc36af495d381fc4"],["/tags/外海なおき/index.html","a68f5613225b4fa8d5daf56c2244b771"],["/tags/水仙/index.html","8b4f1e5a7ac369f390039450f1314b74"],["/tags/片冈智/index.html","4aba1ffe38e16277f1f6ca5a4e3c42b6"],["/tags/牧尾屋/index.html","a15d9368255e3f29e0ade5754f15c70d"],["/tags/猫猫社/index.html","77bf78f17f2b6ad377be2a6eb4e08075"],["/tags/画集/index.html","ebf50e452ddb589af818599e941a0ca8"],["/tags/索引/index.html","0b5cd72dce0ce0ba82eaee0c28ee2a22"],["/tags/閂夜明/index.html","237871df1ca2f2d6c2e6bf040009c303"]];
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
