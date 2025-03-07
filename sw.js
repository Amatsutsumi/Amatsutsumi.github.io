/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","685e8f1cc962ad8256e32ccdca46c350"],["/archives/2024/04/index.html","7133dac70493c49f2d2d42b71d758d2f"],["/archives/2024/index.html","6024222b61020f0e37190633432cf476"],["/archives/2025/02/index.html","dd8b0be46f047a7f3f0af74f8c29b6c7"],["/archives/2025/02/page/2/index.html","17c209beb7b998acd7b9f2983b269f43"],["/archives/2025/02/page/3/index.html","7431d665f1329c13f8491526c8c2b1a2"],["/archives/2025/02/page/4/index.html","3240aedf37c26529f5bbec0ec37cc28e"],["/archives/2025/02/page/5/index.html","6f33fe6019c790d705c8bd59da70b103"],["/archives/2025/03/index.html","e5d9385e2b4c9a8fbd186e925d49b095"],["/archives/2025/03/page/2/index.html","3e1edcbaa5a11c23890ade5275d9044e"],["/archives/2025/index.html","6f1b51dc4377fd22f36cbb10e500fefb"],["/archives/2025/page/2/index.html","704d930230a3ce3964085938ddf6689a"],["/archives/2025/page/3/index.html","841769d94bfa140a1c6edea87835deed"],["/archives/2025/page/4/index.html","bba1946dc7aa79339d223a4b3d45ff34"],["/archives/2025/page/5/index.html","d538fb9d4320b23c94ccbebccf418024"],["/archives/2025/page/6/index.html","4c49abdade312f1c15db7d4b5989606e"],["/archives/2025/page/7/index.html","d1f2b504014e45912ab5b312686f4d4e"],["/archives/2026/02/index.html","39e9a3003cfde0b2142cf1979fddc453"],["/archives/2026/index.html","b7001625d11ea0bee01ce64207f9eba6"],["/archives/2925/01/index.html","9513e07ab0633199143c50a31c9991c9"],["/archives/2925/index.html","f1653ffc55b983bad831dcbe8fc2efd7"],["/archives/index.html","db0d5bf44847dcf57f9f256e1ed0b3ce"],["/archives/page/2/index.html","93b62569d98e01452777987f849e4807"],["/archives/page/3/index.html","3f4b180f461cdd33e7a1fb96765d0691"],["/archives/page/4/index.html","83432f1d0577f6a3ccd0529656d714b3"],["/archives/page/5/index.html","ee759f3f404017b891c17c0bdd4ce2d5"],["/archives/page/6/index.html","9f864527404d889efbccd210eeeceb72"],["/archives/page/7/index.html","8347d84a60cc879943b4217135954738"],["/archives/page/8/index.html","a8df865779d691ef9185bd6b6f87d2f5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","e6a0dc11b89e0abe32bf686c27b634c5"],["/categories/galgame/page/2/index.html","4f0af838b1f154cadfeb1b526b8526bf"],["/categories/公告/index.html","4272142756406c9bfcfd23c114f7846f"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","96817c2703446443ac6122d0c8e2a607"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","7b5f7122205c99cc03a995540cd8fe69"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","6b49042228bc18987ec450b65eaebabc"],["/page/2/index.html","8c17ad0674a15f367e9983ecd7696479"],["/page/3/index.html","c02fe1fc3f80f03de33c277507e5fb4c"],["/page/4/index.html","74cdb9d3b9997831c38876d4b95c6ea1"],["/page/5/index.html","adec8b4fdc1dcb0798df13ca3b7f50cc"],["/page/6/index.html","357aaf3cdb2e48c0acb38d6d493bfabb"],["/page/7/index.html","07d5a84bd070eb9a3d800d1b1d3f5fa7"],["/page/8/index.html","4f8bdd257c7bad86bfec5a88140c9718"],["/posts/10c9dd98.html","0ded42842f15a872a95f70d59d60075d"],["/posts/1370342.html","fccd251b1cd37830e7f11d93910c3da8"],["/posts/15ef14c2.html","5fa9ab7c2c91407ce250b64f736ee16e"],["/posts/15f3959d.html","c19f9f5713920586a4b793d9fb684e0a"],["/posts/18ab785d.html","7c3487be1367901a79c48da6ac834f68"],["/posts/1d59b71f.html","8ce2a8b5717fd8f7e914989bfe84ac30"],["/posts/20b3f3a4.html","603c9508d221e670ed22bfbc08e00792"],["/posts/245f1c7d.html","3019fdb8baf74858da3b09956a068b2f"],["/posts/252658f.html","b8b70c50a755a86c585a61cb24d45789"],["/posts/28397adc.html","068f8ef06c7b723335ffab5be7ef7b12"],["/posts/2c0a6836.html","ea57447759c219cf860ebc349c46738a"],["/posts/2cf620f0.html","10cc889fcb64cd6544fabcb1b33931b8"],["/posts/2e30fd6d.html","cf68e3f96b3da8a5320ce8b7371536d5"],["/posts/3f7d823a.html","c4e6d5809fd8ae6c1ad40a428327c653"],["/posts/44124a6b.html","7919a144f9f599e83e6746ec2e75f39d"],["/posts/47abb61d.html","102dcc90d6fcc76dc3f7a4eac1fe4b78"],["/posts/4b689be3.html","46c3b27c0581757a7552603898e488eb"],["/posts/4cf8423f.html","917f60daf1950f4d88f9c6724d4dc7d9"],["/posts/4dcf85c.html","bc296db660dd1ae91f219b9f032f9f67"],["/posts/500cd322.html","9b51471f22f2f8f8162c1d7413c40cbb"],["/posts/51c9b1ff.html","4c37ecea5d853be79ec40d686e959096"],["/posts/52b5b3c6.html","2538579ef5a773459c07c61265eba2eb"],["/posts/5f6e0c59.html","6e744a189283f001b109ce37f96454a5"],["/posts/6336a2f9.html","cd168cb2cb02df0802bf8dd0c4044f17"],["/posts/6432d61a.html","1e40931aeeb90176fe48fe9e38fb7979"],["/posts/6515f032.html","319694fb4052e2481c94b8fc7a50e4f4"],["/posts/6720ccdd.html","59a13ca6e23f7287062e244f3fb229f6"],["/posts/6a4b5ac8.html","0bfb07039910c4c4eb07b85a74f9390d"],["/posts/6aa4177c.html","90fb90bf621f2a521e92656688739a03"],["/posts/6b15f81f.html","e258b84bc5c098241cadbec6c38ffa79"],["/posts/71131d34.html","a7fffb538d6236f2e7e1989ae28d1c59"],["/posts/78a8a8d3.html","94ec9916287ce848883369a0c16beae6"],["/posts/7b41e1ac.html","6f9ff2ea39cada77efa3eedb55d37070"],["/posts/7e3aa3e2.html","0871d497a1f8c7bbb98d6e9321a88938"],["/posts/80fe2691.html","3f03d98e58c3311d33d937bf8b4cab2d"],["/posts/81ac52e9.html","8da4cd3a606e996541fff446434c8cc8"],["/posts/849b40f8.html","3b1db0700cf59c0460192344595c0218"],["/posts/85c51d68.html","cfcb25e5f58cf37d1af6925d87c52836"],["/posts/886f8d3.html","83efffa58d875c1328c6467f627b33ce"],["/posts/8dd520d9.html","7f094d149ed07543f58b4053d93a0c6e"],["/posts/8f555654.html","615117645dfa6214b93ac911d4420e07"],["/posts/92a980c2.html","8976c16d59b3a642401517d4b061d929"],["/posts/94d3c794.html","dbda7c75e3ec3381eda8e51621895605"],["/posts/97f50eea.html","672f46f1a6805c43481b586099da9931"],["/posts/98662d05.html","3b9eae6361ab22bd1e5816d3dcd0f12d"],["/posts/9a2f6162.html","7b76f4ee526b891cf48dac3063567dc9"],["/posts/9b22a48d.html","5116ebb3a29b04f8beb66865e1f7e66a"],["/posts/9cb455b1.html","9cb2bbc9319b02093ab1585874f129ca"],["/posts/9f61c1a0.html","983ac9007a13f71074214c5458cf8328"],["/posts/b497b647.html","07ab18f9a8ad1c5249b2592890ba9c8c"],["/posts/b5fb773f.html","47f369233e3e6cfcb2e212777bbd6286"],["/posts/b8d46b32.html","bb295179560f270ffb9ce9fe23dcf1cb"],["/posts/c1b2c6c9.html","4e780ef9075ca191cc66cca3355d0be0"],["/posts/c316c2e8.html","a1d0f8bcd70a454cc1eb46cbd4f02cb8"],["/posts/c497a412.html","6f025bb063e8c30198112fccfeaa3503"],["/posts/c5de299a.html","20a29790ba35c2da54c47eb98a7240dc"],["/posts/c70bba9c.html","46900d92d659bc10e4e831b10bec7b1d"],["/posts/cae2c959.html","7188ce986f91090742ac9a7cc0696539"],["/posts/cbebef2b.html","56e7ba152cfa81b9487c17c3b306de7f"],["/posts/ce25023e.html","62ac55b36aadd23ffe15013aff0c6123"],["/posts/d2fd4837.html","5b561fa0e687a5a136ae6e05b17d1d79"],["/posts/d3a745a8.html","273cb1ce85bb3c6f53f88a5b227f0da1"],["/posts/e3ab6ad8.html","d4fe444b5a48754851692e662912934d"],["/posts/e5018da6.html","d1abc0b136308b6ccac62ca0a04beecb"],["/posts/e5963272.html","29cf5c57307697bf00bb71a07ab72290"],["/posts/e624b065.html","bb99ec76c46754fa8b13cb2b741b255b"],["/posts/e91abb63.html","65ff2483cbfbbe14c3bd1b0df04f6f34"],["/posts/ee1ed673.html","5778273b1a7c5525600da2f5523fc617"],["/posts/f21e7f84.html","ed480baa1582c3d41107a19ded206197"],["/posts/f230b0fd.html","e479c9930bcc836aa07133576924ae9f"],["/posts/fc04d0d4.html","8d346811de91592a4a6c759be48b57e6"],["/sumire/index.html","0c47be8653f9cb4c7b1d3567c72bd521"],["/sw-register.js","31b8de2010c3848fdeedddac1dbab07e"],["/tags/BL-Game/index.html","d8f0e31d791a3e3f511c156072fd6e9b"],["/tags/CHUNSOFT/index.html","99b70235bae841b20274d59973f81726"],["/tags/Cherry-Pie/index.html","ac803ffb69685e63fe0a885df6bca328"],["/tags/Circle-Mebius/index.html","70df74d177092e9d8274d2b159ddbbfb"],["/tags/Dos/index.html","ee4fe73d29101b1e7a29fc59d0a8a25c"],["/tags/Kanon/index.html","2f6584056c0a3ea767a0f5fdb048f578"],["/tags/O-S-I/index.html","7aa3d4e36e177e5a1812263ff75b5f7f"],["/tags/Omegaの視界/index.html","42e774c291464862811a6c4fd827e173"],["/tags/PC88/index.html","0f605601809e7f9c4e5d47ee2be31cb1"],["/tags/PC98/index.html","6687297ad5a1e91c41b1616104c77860"],["/tags/Pleiades-Company/index.html","1a2ff05b23cc88ca666189395cbe3f9d"],["/tags/Team-Eye-mask/index.html","cc728751902a7125d9c2d7b9e18dd991"],["/tags/ToHeart/index.html","4f4da6540b0e9afdcecae4d7e92e535a"],["/tags/Traumend/index.html","25d2e57201a3a69d0538b49f61dc11f2"],["/tags/Witch/index.html","aa1854e29399b0408c07e45b37b947f5"],["/tags/flash/index.html","8c0a1f4fbe9b6935dd33be904ee2f716"],["/tags/galgame/index.html","410208a9f4437ca44245b91179bded39"],["/tags/galgame/page/2/index.html","01fab410bc9ec4c5fb1234574e622fcd"],["/tags/gal资源/index.html","3867858d3ab3df482a345544fe457a7c"],["/tags/gal资源/page/2/index.html","8b8c34e737392846cae4a9fcacd62634"],["/tags/gal资源/page/3/index.html","30c3e734378e9356c89e578265daec66"],["/tags/gal资源/page/4/index.html","35e0a73d65fa335b645d9e9479d8af28"],["/tags/index.html","31fa179bd838b402e7035fa78ef3473d"],["/tags/rkr/index.html","74dad66dbbffd53c2e8c10a1cbe5b5f0"],["/tags/ねこねこソフト/index.html","174a794a254f530e1413295cfdc9faaa"],["/tags/ねこバナナ/index.html","3cf2035eb9fdf9b3a1ba2e7027ee0701"],["/tags/停产/index.html","8e42c4d34f05ce35154df452930dbfe4"],["/tags/公告/index.html","36871564fb4229d7b363fcf4501802a4"],["/tags/同人/index.html","877a5217b55e1d9c7ed7ab9f3e704826"],["/tags/堀井雄二/index.html","1544318b41af22e8a58db5f513c80698"],["/tags/外海なおき/index.html","6c8274a82c1d5cb6612c99b3663a36ea"],["/tags/水仙/index.html","9438c34120a57ff00aae49a621878e12"],["/tags/片冈智/index.html","e01dd495471426e06995b04bbdc6205b"],["/tags/牧尾屋/index.html","ed9d74e7071c3e15f986dc37db75d1cf"],["/tags/猫猫社/index.html","818b0b864b370bb851f68957928cac9a"],["/tags/画集/index.html","3000de47c300861c0b0a36eee0b86963"],["/tags/索引/index.html","ff10cbbeaa31456c9141e9c89908fc10"],["/tags/閂夜明/index.html","05f564e51f565ead4a377d6f019b6c70"]];
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
