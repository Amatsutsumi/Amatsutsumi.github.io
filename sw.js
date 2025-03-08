/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","49b28fef0765be582283d8777fdc5c3e"],["/archives/2024/04/index.html","e222afb6d62efc2d903d002b508aa10f"],["/archives/2024/index.html","b6d7c12532e29696b1be1e9c85aa5530"],["/archives/2025/02/index.html","3ea9e06fbd06aeea3166631007ee74a2"],["/archives/2025/02/page/2/index.html","0efe4b8f627dda807d992dd1f831ae05"],["/archives/2025/02/page/3/index.html","f52d831ca87407577ce55a773db22a5d"],["/archives/2025/02/page/4/index.html","388ed7b9d55d066555c3d3a5a6344636"],["/archives/2025/02/page/5/index.html","7bdfd6e68ff9dc738cb2afa18d81a4f0"],["/archives/2025/03/index.html","f8fbfebe101451f95851db24bbf9c3a9"],["/archives/2025/03/page/2/index.html","365905d10373a0daa380424d3e272e5c"],["/archives/2025/03/page/3/index.html","ff8662e5d0f6f073b02fbf625ee513e7"],["/archives/2025/index.html","82c3c94008210fd1b08ada8d52ce9026"],["/archives/2025/page/2/index.html","5b5fc77e9be2126908c3e0de9c780071"],["/archives/2025/page/3/index.html","f5fc4821d0e1b6e798f509c24a749c16"],["/archives/2025/page/4/index.html","9d86ac8561aff14001e4a5fab5da0813"],["/archives/2025/page/5/index.html","e4e4f530f6776f318198468177eeb015"],["/archives/2025/page/6/index.html","9b7ff72cf27d79674abf84e27db0bf0e"],["/archives/2025/page/7/index.html","64b13e5de79e9c7a2f90695cbde8668a"],["/archives/2025/page/8/index.html","7fcfb092261d61572b0819a02dc4a1b4"],["/archives/2026/02/index.html","1adbb7bff82d5af6580c0989b6add4fe"],["/archives/2026/index.html","d0afd738a4d16c47784b9c07ac6cbef3"],["/archives/2925/01/index.html","8279d51ce94100c211ba88e3f4866481"],["/archives/2925/index.html","b01da60e3c5f5f08b4b2b9d33236db81"],["/archives/index.html","5f3cb53132f7fbac9214c8794706e029"],["/archives/page/2/index.html","f1101e64b4b3aa5f9e26b3950a58fd83"],["/archives/page/3/index.html","9d62d67b950bd4f39b0029c0186f58f5"],["/archives/page/4/index.html","2aab4d700b1c66f14ea3cca4f78fad86"],["/archives/page/5/index.html","754cd53b311cdbe19c8de208eb06ae17"],["/archives/page/6/index.html","53bf7d8d48ba048e7f5e21c489929ca2"],["/archives/page/7/index.html","28c30f13d72e626ec589623576c0ed96"],["/archives/page/8/index.html","b428e638a7265b37a3b3611842ee139a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","e4b2f0660b35b5954d310d6f6708c026"],["/categories/galgame/page/2/index.html","450fe438f5ad753e0074ced57aa486f6"],["/categories/公告/index.html","ded67c58ada974e6e7ba9d1151c81fae"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","1aa877168dc3d8551903712f6c443c9d"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","196fe088be0cfbf0d4875b465676f30d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","353764931384ccf4e0e54e67e80f4534"],["/page/2/index.html","7b81e1e5efed4dad885f4c853688200a"],["/page/3/index.html","2226878dc73a5cf5ecb9fe1d437edb15"],["/page/4/index.html","743bc6a8a94530885ecfa8d40950a2c8"],["/page/5/index.html","0f49a573f864bc6656a347e2fc54dcc7"],["/page/6/index.html","7eb73d7e8a9b50db02cb6eea7dc42200"],["/page/7/index.html","44983ab8434f56cf072aec8d03b90fef"],["/page/8/index.html","af0b34ea33d6380a806c903d25836d29"],["/posts/10c9dd98.html","d70e6ed20762ff0823f09fb0bfaebd2f"],["/posts/1370342.html","47a097aabbeeb5c848a69c7db1ce94b4"],["/posts/15ef14c2.html","8c9d087a19cbd4f3b70ed975aaedcc2a"],["/posts/15f3959d.html","57a758dedc1fbf551e6b94977456dcd5"],["/posts/18ab785d.html","b48140d075becd421e6e65112d103253"],["/posts/1d59b71f.html","317647e838f0602d2880e1eb88876be3"],["/posts/20b3f3a4.html","78595e161029a7c596ce4b2a17f23027"],["/posts/245f1c7d.html","04cba152fc10fe9be1b7be2172229f25"],["/posts/252658f.html","414c2c2057837b73172e9efdb68b45a5"],["/posts/28397adc.html","93c9a5a0a465923ead664c97f54661c0"],["/posts/2c0a6836.html","4b6b518b1fe6f90e0c4b5f11303fe999"],["/posts/2cf620f0.html","801ec6888f4238a4f85be3b1b7453555"],["/posts/2e30fd6d.html","81d6d7abba19570d5cb11418fe2e30e8"],["/posts/3f7d823a.html","d42fa57de47e20f263a93ec5ff25a6a3"],["/posts/44124a6b.html","007c6ab58888d98d2b7a0557971699f7"],["/posts/47abb61d.html","0ec8031db7af7d34142a89bcfc0d10bf"],["/posts/4b689be3.html","fbc2b50833a5cfd0aad5f9335e64f3cb"],["/posts/4cf8423f.html","42b144e75b49a5491592e3f2c2fe5102"],["/posts/4dcf85c.html","8b289329b18b4a30990ffaebbf6ab36e"],["/posts/500cd322.html","fbee1a6c872a8a0494989f14a6fcaad2"],["/posts/51c9b1ff.html","b0bca76bef4a34449c7cbc8e7689316e"],["/posts/52b5b3c6.html","ab60f30bbf0636b6ddc635ba95e205fa"],["/posts/5f6e0c59.html","5aef0a1bd1c1224c15d00f0cfc31414c"],["/posts/6336a2f9.html","fd5fd847284ee93e5daac077b01d5329"],["/posts/6432d61a.html","7bc6b22599f8fb2a17311ad7c20b6de5"],["/posts/6515f032.html","e1f1d27267e8774d45e030df7295dfc7"],["/posts/6720ccdd.html","0cb7d8cdfcd3b61818f7f7316a29f8a9"],["/posts/6a4b5ac8.html","6146a6c48a916e1d84e428f0c6021b83"],["/posts/6aa4177c.html","392a7da589958182827e8acd7759fab8"],["/posts/6b15f81f.html","0f0837a6c3be424af0b686ac6711b869"],["/posts/71131d34.html","abf3d0938b68dd45518452388b37ed24"],["/posts/78a8a8d3.html","649a7dba9f0df826bcaa93c10ed38dab"],["/posts/7b41e1ac.html","4504a4fdc6eb238486ad147d94009741"],["/posts/7b51011d.html","6813c7cdffeec38ac2fb9fc7702fcf89"],["/posts/7e3aa3e2.html","e861913cbd5bf21e812b2a83509f7bb0"],["/posts/80fe2691.html","ccfe9db44297b4c0dd6d49802bf4443a"],["/posts/81ac52e9.html","49ec64d46ae6c995c2c13a89d8f71fd3"],["/posts/849b40f8.html","dded37775978d6e38f0b4a0e1b510082"],["/posts/85c51d68.html","8d7fb4fbded0e5e778904b915c66197a"],["/posts/886f8d3.html","3968a194b934addcf8ecddda32d9fe35"],["/posts/8ac11b41.html","2eff478de75fc68a1edb05a8d03de271"],["/posts/8dd520d9.html","01abc32852ddbdd177181c9fd60f1eea"],["/posts/8f555654.html","59eedd9873fa0aff9121a3080a0c875c"],["/posts/92a980c2.html","12b54400f6052da59330926a68959693"],["/posts/94d3c794.html","bc854b1ca8f2da163a4cc79d95a0da76"],["/posts/97f50eea.html","264e4c70ca30bd063594ed0339162db7"],["/posts/98662d05.html","dfe2d1eb186b2186d4105651f907acb8"],["/posts/9a2f6162.html","78f0a5ff0860175307a889e97669d6be"],["/posts/9b22a48d.html","c93a3e9c8277e75d0659b09d4146900d"],["/posts/9cb455b1.html","2f07cb7b2433a2d82059913ad0906a81"],["/posts/9f61c1a0.html","42da938682883b063a1067a123d53444"],["/posts/b497b647.html","94dff0d4427001b7ebd3e6da6b729546"],["/posts/b5fb773f.html","5900db948b639de1b154e7082bdfd242"],["/posts/b8d46b32.html","5760c4edbb9abc58c75318159a01967c"],["/posts/c1b2c6c9.html","1b36a1d4bfc5e1c5be1969b2da1c7abe"],["/posts/c2111cbf.html","b7b9a623b170ae4a30a517818c99711e"],["/posts/c316c2e8.html","4a2e9a04ec631fb619dbadd371a2941e"],["/posts/c497a412.html","cb6fc48a4be45b466dee4c70293b944d"],["/posts/c5de299a.html","1cf2097bb0433ff49c1b573b48e94a63"],["/posts/c70bba9c.html","36dd1ffd6cdc35b4c0058f41636791fb"],["/posts/cae2c959.html","0ccc926605fe083973cce620f07faa7f"],["/posts/cbebef2b.html","8e4669ded0e6662aed0f47809ea203dd"],["/posts/ce25023e.html","57e28a25b768179646c2a616e3218723"],["/posts/d2fd4837.html","f18b7a65c7830097b1556284dc9173c8"],["/posts/d3a745a8.html","1e406ce4d79489aa64e45009557fb1a7"],["/posts/e3ab6ad8.html","08312b678e2548f8b0e5bfbbd62ced5e"],["/posts/e5018da6.html","82ffcfa9ff7be43a13e00ef4ffb5987d"],["/posts/e5963272.html","032d464ce0b0daa8f627df80c2faf6f4"],["/posts/e624b065.html","a17af4c2542ef7a17dc27a85231cb3d3"],["/posts/e91abb63.html","279173dd1a0c69a4e682780e5974f412"],["/posts/ee1ed673.html","61b192ee953ec1f8003d7d11c5dd43b5"],["/posts/f21e7f84.html","6af3a9ee0aca58fbfb605b8220dbadaf"],["/posts/f230b0fd.html","2f00a45f4837681d22202a058361dbc1"],["/posts/fc04d0d4.html","c14071612bde0d4ee598687e54ca0808"],["/sumire/index.html","64b2d918669c3d15c0e712727be5738f"],["/sw-register.js","5d1631f9406cff260e9bc22f3a77d988"],["/tags/BL-Game/index.html","00e9fe7632452b6e3af0ee88e1c00b6e"],["/tags/CHUNSOFT/index.html","7dcb968d6ac20e2412187a653e8ee26a"],["/tags/Cherry-Pie/index.html","684167ceebbef959a38bb68394d866d0"],["/tags/Circle-Mebius/index.html","13af0b201946ff9a23a1ff7787dd294f"],["/tags/Dopamine-Software/index.html","a30a4ba32401f942f14d7dbeb56fea1b"],["/tags/Dos/index.html","c05d5a7604b673a16a843a8a41ad610a"],["/tags/Kanon/index.html","c4bb4c972ae32ed395d3cba49380cd87"],["/tags/MANATSU-8/index.html","d9532eed42784edcd4a4221785ed7358"],["/tags/O-S-I/index.html","32d5d0a24017327a645ba01cb1b153f0"],["/tags/Omegaの視界/index.html","b463ddc397ba520617dcc6b8cc587d5c"],["/tags/PC88/index.html","7fd8b2cf15ae50e4c6084b907ca606b2"],["/tags/PC98/index.html","4b033695d2111955ee7dfb0f076b94d4"],["/tags/Pleiades-Company/index.html","271a8475c6092e17da72f577703de009"],["/tags/ToHeart/index.html","3ef920e0e2a21a77bef7fc86979244a3"],["/tags/Traumend/index.html","c168fa53f5b476afbaa1e846d641501e"],["/tags/Witch/index.html","733d3853fcb548b6db58529dc13b3c00"],["/tags/flash/index.html","cdb48302c2ff4120eed3ccfd843eac64"],["/tags/galgame/index.html","28276d072fcc903f8c1571c64e872e76"],["/tags/galgame/page/2/index.html","3c69540a25734d505bb0bffc1520c8e0"],["/tags/gal资源/index.html","8c33a9811924a53e24df62b6d40e360f"],["/tags/gal资源/page/2/index.html","c9bfed36674cb7eaf73d9c1efbcdad4c"],["/tags/gal资源/page/3/index.html","cafb7a3602bd022ecc9525955620c270"],["/tags/index.html","3dd46158cfe74622d8b8c00dbd2db93c"],["/tags/rkr/index.html","2cb23d5eb6cd24befbacae532e5afa4a"],["/tags/team-eye-mask/index.html","e2e08d9ab22949dc0ee1aa7094063693"],["/tags/いつものところ/index.html","6935d6d78457b8690623db1adcd8ff03"],["/tags/きつねみみ饅頭/index.html","3276c2adc48f36f64bedacdefc83fad2"],["/tags/ねこねこソフト/index.html","13b8c4f574ec7b5dc92e1b65dd143fe5"],["/tags/ねこバナナ/index.html","33bd899807be7889f322a3a7624e2a4a"],["/tags/停产/index.html","8f2dff2462699f6034a787075748a4e8"],["/tags/公告/index.html","0e0fa2e254d4fdd90b4248fcda5210b1"],["/tags/同人/index.html","65e39f3c80360d9af1683f8e8dbb42de"],["/tags/堀井雄二/index.html","48561f2869d0913066baf612ab0728ee"],["/tags/外海なおき/index.html","9acf3870d5067b812d9e9d643c69fb13"],["/tags/水仙/index.html","7b60a1b576524cd1d323a4892069c157"],["/tags/片冈智/index.html","41c935b8d946023d70f418f7f2384986"],["/tags/片岡とも/index.html","8ec707736ae9cb64f1260587aff90df3"],["/tags/牧尾屋/index.html","4c4e6f57d44ff0a87c7fc3b99837bb86"],["/tags/猫猫社/index.html","62d4660a96d6d3cc9bd05ba444d2db7b"],["/tags/画集/index.html","b0e962b4057b3faab332d51b14479d91"],["/tags/索引/index.html","dafe71def015aa62e20e0dca86c49e76"],["/tags/閂夜明/index.html","61d0f437b6a5d906c2cd452e7fd2e977"]];
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
