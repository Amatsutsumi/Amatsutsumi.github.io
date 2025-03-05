/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","de16ed64787ea3f0bc46912f018ca05e"],["/archives/2024/04/index.html","db3b70228cea10ec87bc80bfca6092dd"],["/archives/2024/index.html","de75a708409c8ec60448867156b22089"],["/archives/2025/02/index.html","05e719909e2852bea395d73affe14f18"],["/archives/2025/02/page/2/index.html","000255d7cc7f548cd29509ce840bd461"],["/archives/2025/02/page/3/index.html","501b33f23a8fe8a8579992089b7d9f7c"],["/archives/2025/02/page/4/index.html","5b7e2d958b82f95d5bf8afbb81e69f1c"],["/archives/2025/02/page/5/index.html","ef4ef104c78bc56332ba06fcd327c6b8"],["/archives/2025/03/index.html","999e34a1a5c8f08dc62845dc3fefc2cd"],["/archives/2025/03/page/2/index.html","ea96e3ed16d41abcd94c5691ed89c184"],["/archives/2025/09/index.html","d93200d7959e58936bd6e9e6e66ede57"],["/archives/2025/index.html","379246a8f9598fd387c1f131dfae037a"],["/archives/2025/page/2/index.html","a72e272f8f9935ea6703a84369b29680"],["/archives/2025/page/3/index.html","8fd439c8cd2a3587ea7467bc2bdeba9b"],["/archives/2025/page/4/index.html","c175f75d057387e05cf27e4e30f91999"],["/archives/2025/page/5/index.html","5b6f2f9aae49ecca6960cb4130100917"],["/archives/2025/page/6/index.html","3c6a640caa85c8c52dced4e7f46bb962"],["/archives/2025/page/7/index.html","d1cd10a768af3d0f9b193654e539db5a"],["/archives/2026/02/index.html","f251aae07640f0141c91fa2f420e7cec"],["/archives/2026/index.html","40fb053500bb180d335090724ce81a74"],["/archives/2925/01/index.html","5b1ce548d048ee4a7e2b9397557a46cd"],["/archives/2925/index.html","2e361fccc7f76d0071fa0bbe1a90d2e3"],["/archives/index.html","0dabfee14621018dedb1ec09666bbcc3"],["/archives/page/2/index.html","dfee8c7e915d2b600c082e90d1e3c9de"],["/archives/page/3/index.html","8e3e719e098266fd4dc5a1898187925a"],["/archives/page/4/index.html","cb7acd57f05f574450b4ac52aa2b8a19"],["/archives/page/5/index.html","ea8ea070990757923234f2c9a298a299"],["/archives/page/6/index.html","7e4f254cc7db41f2881171313bd4f300"],["/archives/page/7/index.html","8387533a2c1c6cbb0350e0eb6a10265c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","e054b2f0389f20700909e56cad2713e1"],["/categories/galgame/page/2/index.html","f8029e6a62351fa5cd896d624d22c34a"],["/categories/公告/index.html","d7d2e3795b196f28b4e57559acffba6e"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","96041de0ed6dfc9301707d95af254435"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","0a88a35c40e99482bf6077766d00671c"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","45884367c70bca7485aa2795b0eefe58"],["/page/2/index.html","716a223c36c76c3a7d4324e9fd1fd724"],["/page/3/index.html","49ae812bad3fef7fea57ff3f96d9dd4b"],["/page/4/index.html","5671dadbb3d0a06b79abde035d3cec96"],["/page/5/index.html","df78ffcb4579839ee4f21b89f4f7c379"],["/page/6/index.html","85856103d8744b679939fa354ed9e9ca"],["/page/7/index.html","b9455ef0f84064e46bcd4334fe59133c"],["/posts/10c9dd98.html","9f3f04bfefc81034ded1bdc18256924a"],["/posts/1370342.html","46e8d94ebb62974a55c728c6ca3a310a"],["/posts/15ef14c2.html","e5ac4c11f84e99714efd6bf47186b701"],["/posts/15f3959d.html","a3cf7ccac6956ca68736a792bd4920d6"],["/posts/18ab785d.html","8aff5b491af4db2d49c337c807b75b8b"],["/posts/1d59b71f.html","1dbf52460a849f145c0956974ca1778d"],["/posts/20b3f3a4.html","9e85f8226b7996127e9a30b0b2dfba15"],["/posts/245f1c7d.html","4fbfd9756118773ecbda2b6b7dedfbde"],["/posts/28397adc.html","1069b623676091e39267dfc61ac3d739"],["/posts/2c0a6836.html","84f9840bf8c2c24c1e6191d8bc23ab29"],["/posts/2cf620f0.html","0d040af3c956d2782c4fd20370f32cc9"],["/posts/303007ag.html","07043f9db1e1d25f69d504b80942b184"],["/posts/3f7d823a.html","88c145f2068eae273a0e5997ed33d722"],["/posts/44124a6b.html","b1a1c8b5988414cab26144d50dcd401f"],["/posts/47abb61d.html","dbe59eecf72e5ea15033a5148d255b43"],["/posts/4b689be3.html","bb568cc7d636ab636e4a2e321500f5e5"],["/posts/4cf8423f.html","f7ee21075f8cb1545be5665effe6e92b"],["/posts/4dcf85c.html","3fc77f018b8fa3398de5504bccf063b9"],["/posts/500cd322.html","1e01fc7bc8bcd682fa702e1495340478"],["/posts/51c9b1ff.html","9abdb7db2574ab9ab6975390c3bd3518"],["/posts/52b5b3c6.html","210e80b51ac86b215d579feb5f1a24ed"],["/posts/5f6e0c59.html","b8401649861c80f94c2511f878a34809"],["/posts/6336a2f9.html","c03865132176263e77ba2401e139ff05"],["/posts/6432d61a.html","490dbd85cbcea1f36b7763368ba2fe83"],["/posts/6515f032.html","635d7f47aabd835b3717a745a09c3a14"],["/posts/6720ccdd.html","124dc5e97df9d036064279b21e856cc2"],["/posts/6a4b5ac8.html","b577de1a787443783c5162f4f818e101"],["/posts/6aa4177c.html","def5ee8e4ad4e698b3e6979f0af542b1"],["/posts/6b15f81f.html","07b8f082d6a817dfd8cbd4f22835d2f0"],["/posts/71131d34.html","28b862b5f20a42021e862a24ade7b8ab"],["/posts/78a8a8d3.html","65eac6c13b9345a02abaa2ea7fc978c6"],["/posts/7e3aa3e2.html","f4526e81cc3506fe4b081729e5e50b4b"],["/posts/80fe2691.html","f8b856951edd6216269cc68224324c69"],["/posts/81ac52e9.html","ec2a3ab743b025fa4ba2690b88e81c59"],["/posts/849b40f8.html","212280a2ec9b0b22bcb1998c16355374"],["/posts/85c51d68.html","757c59f46df0afbe5209e0910ececfc8"],["/posts/886f8d3.html","1898b3904125451c1af08757195a7d4d"],["/posts/8dd520d9.html","516fc89020942ee563c1d1aa8a0a351b"],["/posts/8f555654.html","226414b73a7adb8c8d3d4da52ccf246e"],["/posts/92a980c2.html","f6ec01d6c88fba00fb891de6657dcda2"],["/posts/94d3c794.html","bbaabe5b00ca01bdaccf9876b93e772e"],["/posts/97f50eea.html","b300a6df53ddbc7a85da14017f818e46"],["/posts/98662d05.html","1072f9b7eca0cc8c3fe2e4289fd7c062"],["/posts/9a2f6162.html","9e28d1b77accbdf761f824376caec968"],["/posts/9b22a48d.html","7ef5d4eb8f105b7503619f6fc6701df1"],["/posts/9cb455b1.html","7f577b5bfd71e60e8fb506a2c1210b50"],["/posts/9f61c1a0.html","42689d960eee912330a69ba265d3d671"],["/posts/b497b647.html","97abeeed5a3146047aa45d7b24a1aeec"],["/posts/b5fb773f.html","f1d9af84cac07d568a542e6602c6ae45"],["/posts/b8d46b32.html","1e0f59bab7f9cf462c3ec2b989f62244"],["/posts/c1b2c6c9.html","145cf21fe4e8326de1be1c621f4674f1"],["/posts/c316c2e8.html","3417da84a3b3667533c7bcdac2e82c6b"],["/posts/c497a412.html","843688bfb2915c3a68c7a9af7f62a2b4"],["/posts/c5de299a.html","9c7155dc022d6e38daf52963a9b7614f"],["/posts/c70bba9c.html","9bffeaee426c625221e98ab123c1e15b"],["/posts/cae2c959.html","1addcf55d031f10914f1e47a31eacbe0"],["/posts/cbebef2b.html","c1cdf98c5b95bccd98c3e0ced478e997"],["/posts/ce25023e.html","c37f2db760e9acf8695d8f11935698bc"],["/posts/d2fd4837.html","dc83ed4e694e67e8ab22ecacac0d6363"],["/posts/d3a745a8.html","ec1efd0a33135e53ec6132f079569312"],["/posts/e3ab6ad8.html","cb5a42f32d6a7c2f0b63181737eaad44"],["/posts/e5018da6.html","eaa04c8db8782e1e0cf970549c2d066f"],["/posts/e5963272.html","1d6e3ae2bb508637ec429d4cd82b15af"],["/posts/e624b065.html","dcf7fb06447f4736ba0bf9e6e49d619f"],["/posts/e91abb63.html","74c699a101e700ba6a133e569445ad2e"],["/posts/ee1ed673.html","9d2287343ece5f11a65701158408b9cb"],["/posts/f21e7f84.html","9d1fa85fe153fa824c2efd2d25af0eef"],["/posts/f230b0fd.html","547722130fbb2938056300b60afe1b63"],["/posts/fc04d0d4.html","2cedf53b84b0b5c692253120086cb933"],["/sumire/index.html","8f7d8eb9f138227881200d6e1c03374f"],["/sw-register.js","0a5f0788b880f4a9287f58e8a7f723b7"],["/tags/BL-Game/index.html","3253f2fc4398e1d040b32be8b5ee0782"],["/tags/CHUNSOFT/index.html","eabeaa68e1ed41fae970de43f9fbb9a1"],["/tags/Cherry-Pie/index.html","f38ee348ff314ca6281e2ad3244eef55"],["/tags/Circle-Mebius/index.html","561e3f4da7e5016717993c8834001f9f"],["/tags/Dos/index.html","f4d2be8927a83b2cb218f4d3adaf0367"],["/tags/Kanon/index.html","17399d94332511debc1ae6f31aa4b559"],["/tags/O-S-I/index.html","2ccf4b0df62f66bedbd05f1b88ddadee"],["/tags/Omegaの視界/index.html","d9ce3a2d2c89a8cffa0892cca74d9a19"],["/tags/PC88/index.html","7ec418f3b4b4bf1df595d23c367d614d"],["/tags/PC98/index.html","5d42150621fb8120ab2833de8cb26b5a"],["/tags/Pleiades-Company/index.html","24bc7103cead9660ae666e2e8bb8f464"],["/tags/ToHeart/index.html","b2ec2f628fba2c1ff93044a309d61b06"],["/tags/Traumend/index.html","6c1f143cf422203d04c9fb043be5219c"],["/tags/Witch/index.html","0820cacde07e39719e6b1d66ae10d2a3"],["/tags/flash/index.html","d947f6676576d336f266b86550151279"],["/tags/galgame/index.html","e872a2cabd2dc4ea8e63885c4e435cf2"],["/tags/galgame/page/2/index.html","b42c540b2c703d12a7896443f40ded99"],["/tags/gal资源/index.html","4f20ce4c0d997631ef67365858d31630"],["/tags/gal资源/page/2/index.html","ddf43d5a3980afcb41033f1b87236d5f"],["/tags/gal资源/page/3/index.html","3d897d070fe28225158957c5470bc56f"],["/tags/gal资源/page/4/index.html","874d14b0f6182265d0715743daa37b49"],["/tags/index.html","eacf09e4eea70014132833a008061274"],["/tags/rkr/index.html","22dbde6ceb4d78621074d1964b52b56f"],["/tags/team-eye-mask/index.html","6e681714b016f9c2a9d492db2408228d"],["/tags/ねこねこソフト/index.html","9d8dd0fd6a9db5b3dc0a48c300249f38"],["/tags/ねこバナナ/index.html","c6508d755aeafcdd59294223810a7f73"],["/tags/停产/index.html","d7b561f73bbb7082aee83d83c0a602b9"],["/tags/公告/index.html","4235c6f88f498bdc9a9c6e3fe12e0ab9"],["/tags/同人/index.html","f381725af56bbdbf0f96a3815245a467"],["/tags/堀井雄二/index.html","23ab6826be1f7584a2c307e2441b88f2"],["/tags/外海なおき/index.html","ce1a1aaa767aa5e94e2ffe8135202755"],["/tags/水仙/index.html","8947fe5f59ca87c131801fce97a0178c"],["/tags/片冈智/index.html","d1d6319d350125c23a64e3262a2f94f2"],["/tags/牧尾屋/index.html","71436483b38e425b9a8614ffa5dcc0b6"],["/tags/猫猫社/index.html","5f9e78e8a10602a970e4795b8827513a"],["/tags/画集/index.html","129e49534c5f25af79d7ad74ee52ae86"],["/tags/索引/index.html","3e8bb6e0316cc316f2fb6c22cdfdc7cd"],["/tags/閂夜明/index.html","e58a8c9f533382ed11ded564b206cc15"]];
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
