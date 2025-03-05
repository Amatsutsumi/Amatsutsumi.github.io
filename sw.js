/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9c70a682eaa2bd1f165743555d7d7e23"],["/archives/2024/04/index.html","2b9e2c437c6a6adabc9bf8b0395d190d"],["/archives/2024/index.html","d2ceb7c375d45bab0885d6d0835882cb"],["/archives/2025/02/index.html","f428bf79ac488e1bba06b64fb09a42e9"],["/archives/2025/02/page/2/index.html","1910b12d6eacd2c28549dfe40ff7eb66"],["/archives/2025/02/page/3/index.html","b7cf88dd4b24ea0bb74a767d6fd9dafe"],["/archives/2025/02/page/4/index.html","a0fd10e697a41c481804f5d7fc8e9f68"],["/archives/2025/02/page/5/index.html","11990f43115510aa7d939965ed696e66"],["/archives/2025/03/index.html","84435de5c0da64b81a9391b8ac622e90"],["/archives/2025/03/page/2/index.html","264acfedfdabb29af1c0fe4395887a9b"],["/archives/2025/09/index.html","238707e21d26e84c7511d68622d529c1"],["/archives/2025/index.html","d0d57325c80407eda78b8eb762b16c8f"],["/archives/2025/page/2/index.html","38585b947492a71520c244a76bc7a0c6"],["/archives/2025/page/3/index.html","e1edb0bce01099dfc5f22b2fb911a52e"],["/archives/2025/page/4/index.html","33f87ecca0c91682c77aed0ed97146c9"],["/archives/2025/page/5/index.html","30c8a7b13ad4fd00c743cb3f57e67b6b"],["/archives/2025/page/6/index.html","42170592f4c9caa5e5356be95324881b"],["/archives/2025/page/7/index.html","e6c00cb8a046ae35ec50c44f20717320"],["/archives/2026/02/index.html","c6bbf1e6705d45512c581836abeff245"],["/archives/2026/index.html","0214a3a9edbc1745108b2cb47acc82a9"],["/archives/2925/01/index.html","ba5efaf1f0e0ce6cc7cd0a1e6a0d3a17"],["/archives/2925/index.html","50cdeadee72a88b432ec9c20c045feb9"],["/archives/index.html","549926ca8e29b9ffc6902757614659ca"],["/archives/page/2/index.html","ac1321f605d4a32b6ad327819828dc05"],["/archives/page/3/index.html","ce1fb8ccc3c555d1d9492ad671378489"],["/archives/page/4/index.html","d0eb0cf217d0a0bbde7f200381d26f85"],["/archives/page/5/index.html","46314f472603c1cd499f68c1303c45cd"],["/archives/page/6/index.html","5ebbd308c127597f6bd42c6b8cebaa35"],["/archives/page/7/index.html","a5c52459e1bb5f73e0e8082961b4db8a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","00659bc3ff3c54d8caf911f2747e0fe1"],["/categories/galgame/page/2/index.html","456957aa6c8beabf718f548949789160"],["/categories/公告/index.html","ee67ecbe8bb2ffc71abb4c9d3f42d5da"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","aea45f529ffe1ab329057deae8f025a0"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","4ab8ef17a87096462b0ed814c70b2a81"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","a95a37f4e05a069cd075bdaccdd8b463"],["/page/2/index.html","2bc7637b908d62f660d2b35ef57bb483"],["/page/3/index.html","a889d7fbf5ad702b9d9552f346e9d9e2"],["/page/4/index.html","612c6413e1ef4a03d2372c884692d91d"],["/page/5/index.html","38ada15ba1c5dcc3c88016096229d807"],["/page/6/index.html","7c706210c5d8ebeed71383ca0ea2b67f"],["/page/7/index.html","41cb5dc6a084441ad2dbff0c423e4a5c"],["/posts/10c9dd98.html","67f52891b620d286194fa5f35ce15e13"],["/posts/1370342.html","c7445d74a70a531adc523061dce4a2bb"],["/posts/15ef14c2.html","2b200500d0be17ef9d7667d6abf4722b"],["/posts/15f3959d.html","be5f2beccb21d3610b65a8207fd61353"],["/posts/18ab785d.html","968e57284786269bc5d7c3b282d57a66"],["/posts/1d59b71f.html","6beb136c28f5d0613276ad7b51430194"],["/posts/20b3f3a4.html","82560ac378061f89736bf3232409f833"],["/posts/245f1c7d.html","f30a775f80f527b0e68e4aebddebc875"],["/posts/28397adc.html","c2dc9184ba33320026891e0392a2e746"],["/posts/2c0a6836.html","c2e4f73d9c47b40141c1b3bf99996ef7"],["/posts/2cf620f0.html","2b5411253ea122ebad2181ebadc2d3c5"],["/posts/303007ad.html","0d5c00d91cb319e6d47e5cc825255f79"],["/posts/3f7d823a.html","e5fce29bc37ca3a1e1d9f3b8b61847aa"],["/posts/44124a6b.html","d898058bb9042f3eb317b20eac5bd021"],["/posts/47abb61d.html","43e50e68e99f97e54ca656b220c01461"],["/posts/4b689be3.html","5aa10da24a0fe8a7d507584ed02c7872"],["/posts/4cf8423f.html","23969d9691b14391402438ef1f8d8b23"],["/posts/4dcf85c.html","d7f1eac5a5d3fd9a27eb11752b750d9e"],["/posts/500cd322.html","c96f2ef6f841fd7caab7a892db5f3554"],["/posts/51c9b1ff.html","a1af5c0336c52d22f3bc7f2a294d2661"],["/posts/52b5b3c6.html","043c6d88e9c17adf462357dcfd45da5e"],["/posts/5f6e0c59.html","10f2af8872df0f412cdfbe97714a017d"],["/posts/6336a2f9.html","1c10bd51125e6a49284537e8a378dacc"],["/posts/6432d61a.html","0db229bfa6fbbaba5c32836ad8300190"],["/posts/6515f032.html","20e689e1b37794f2d4277d553f196fbb"],["/posts/6720ccdd.html","fc3a6f458cfe4f2469ba7a984aa191b2"],["/posts/6a4b5ac8.html","6c37121a2486cd5bdc37b4eded5c0cd5"],["/posts/6aa4177c.html","855cc086a03f19a617245228ef1a2c2d"],["/posts/6b15f81f.html","6b859da7ecbe5f7ace8db9a98a592372"],["/posts/71131d34.html","7ff9139277faff433a4426d82b689f0f"],["/posts/78a8a8d3.html","a7c3277f8b5d42e54242027b29f2ae8b"],["/posts/7e3aa3e2.html","19ccfa9e137877e49be91d2e31891c31"],["/posts/80fe2691.html","c309a8563e37a0cd884a094a3574fdc5"],["/posts/81ac52e9.html","404b9b5a29d9dbf751049b673d760c82"],["/posts/849b40f8.html","dbb9bd633aef3a29aabead932745f477"],["/posts/85c51d68.html","175d03e06632e822d2018f782fab8597"],["/posts/886f8d3.html","a6aec3350309ab9e87e9eb701a0e577b"],["/posts/8dd520d9.html","122b63fcc3675142760716f0a46adafd"],["/posts/8f555654.html","fd3b73896ad340d78da9c39b58038dd6"],["/posts/92a980c2.html","0847d540210627adb04fccff60ba516b"],["/posts/94d3c794.html","f9ce3a102ee295ab9b09900a2fb7d543"],["/posts/97f50eea.html","7002f4d408c0fd6c6fa84e8b4aeb0b40"],["/posts/98662d05.html","88ab36fa71207376622bae761e51b308"],["/posts/9a2f6162.html","e85eda6f75778d24b8bb1fcef1ec0ce9"],["/posts/9b22a48d.html","eddf4c299a4e99e79092e57e09a1f4aa"],["/posts/9cb455b1.html","85f78b6f2f7a952aa1e80f6545305ea5"],["/posts/9f61c1a0.html","a9a45fd2709f9e02ba13936a0a05c56d"],["/posts/b497b647.html","dcaf0ebab0aec28a0df51ccc1da9f569"],["/posts/b5fb773f.html","a0a089a4d5601168ba1989126d6ab6c9"],["/posts/b8d46b32.html","c38518fe695e11e1b7fa8d65050794bb"],["/posts/c1b2c6c9.html","38dfe4730bba1492ca678a5de518c9fd"],["/posts/c316c2e8.html","731380794ca5c15d19f426aa2de78c7b"],["/posts/c497a412.html","a35fa3203a1b06d0d58db3f290db71bc"],["/posts/c5de299a.html","a759bc2e036f0a1be2a81092172a15d1"],["/posts/c70bba9c.html","e1f0ea3ec66a7534a911eab03c5e6af0"],["/posts/cae2c959.html","3003eecaa92c5750e01c609ccb433563"],["/posts/cbebef2b.html","ab337219cef55346219eecccfe253dc6"],["/posts/ce25023e.html","0aca8ea42c311f0c30dc5506e411905b"],["/posts/d2fd4837.html","36305dd586cf1af54278c1ad169989da"],["/posts/d3a745a8.html","fa5f56f104fb128bb070eba4475af4e1"],["/posts/e3ab6ad8.html","8c983e0d5d093690274eb5bdbb223c9d"],["/posts/e5018da6.html","51490f28461542fe5454f42de5fb68b5"],["/posts/e5963272.html","b48b240c5ee77b5264fa171e26e3fe8b"],["/posts/e624b065.html","e610c8cf9cf4bd015733921c5a621981"],["/posts/e91abb63.html","db0488eba61cf4de787154db9961b530"],["/posts/ee1ed673.html","5d890825ce436655ce99145e99f8be9a"],["/posts/f21e7f84.html","22f7741d0cec5a17a844385bd5cf87e6"],["/posts/f230b0fd.html","0567ef5a4cf4cce19f76fecb55c5e092"],["/posts/fc04d0d4.html","af2755069a7853f675a8e6a2a4fcaf0c"],["/sumire/index.html","df9db84d2b45689a4c1a6be0748d19f8"],["/sw-register.js","123b11dd6e19e157d07916c8b987170d"],["/tags/BL-Game/index.html","6db98999e66d17ece956d43ac961cb41"],["/tags/CHUNSOFT/index.html","e5dd3793427ce6b554e7a198de2feaea"],["/tags/Cherry-Pie/index.html","7669ca15659bf226d365283ba40166a3"],["/tags/Circle-Mebius/index.html","a68ddd0f61aef94a2c90ef30d63d09da"],["/tags/Dos/index.html","4ed60791b7ba0fe875f57b8f32be9c81"],["/tags/Kanon/index.html","42363db217abf1b3c25226e8770822fa"],["/tags/O-S-I/index.html","7f7ea33ec18b323040b6f9f7b140d8bb"],["/tags/Omegaの視界/index.html","ab33c045e60d3836ed8e97de945e9f4a"],["/tags/PC88/index.html","6d5016f0318f15101d117386e04f8b38"],["/tags/PC98/index.html","93f16d2c842ebc9aebab8d7dc2b94c66"],["/tags/Pleiades-Company/index.html","1877a30c6c172a357adca7c0c6082345"],["/tags/ToHeart/index.html","fefa7f610601b34f0d3eba3cdb3d3e22"],["/tags/Traumend/index.html","0d1b647b3cee484161ce6f3651f5b772"],["/tags/Witch/index.html","ba32db9715d86ec3d1c68f6413a595e5"],["/tags/flash/index.html","8eea39d8ff61be35ba1f8d089e716554"],["/tags/galgame/index.html","75219e41221418e7f3d226764f0ffc47"],["/tags/galgame/page/2/index.html","e5f2e49eeeae4b7e9e42bd92aa0daf6a"],["/tags/gal资源/index.html","8741dbb7bf43d9716fa53cd648888c6c"],["/tags/gal资源/page/2/index.html","b139a30aa862bf1cef695dc1393bb816"],["/tags/gal资源/page/3/index.html","c02cfe2f23d8a9a8f0572d5c29193a59"],["/tags/gal资源/page/4/index.html","1caec11bebc9e8b3bac8d1f9c514fc61"],["/tags/index.html","7a8a66fd11688d1711f8bb334b261a4c"],["/tags/rkr/index.html","bfc28c1387bf85b53e8fd60f42790300"],["/tags/team-eye-mask/index.html","21c5c145dc717c169f7cf69209f6c5c2"],["/tags/ねこねこソフト/index.html","96e414b9272e06a9f75aea5d5faf5a0b"],["/tags/ねこバナナ/index.html","24040a96523bd26e93f17e65151bfdc8"],["/tags/停产/index.html","cef0bd4bc0a11845ddf57ba06318f239"],["/tags/公告/index.html","262bb26812a277d0a21760815801a5d6"],["/tags/同人/index.html","10392fb89ceb956d9480301f8a4f4367"],["/tags/堀井雄二/index.html","c65e4208adf3d8104d7727801c583329"],["/tags/外海なおき/index.html","b92d7c72dd4859a967040a702a3cc20e"],["/tags/水仙/index.html","8e03d4bb49933561383d328f581e26a6"],["/tags/片冈智/index.html","184b433f22ad2e1b829b78f8da1bc85e"],["/tags/牧尾屋/index.html","f0b23b06baaadbc77f9c891737e494ce"],["/tags/猫猫社/index.html","63bde2cd2b5cbda7ccebbe2f112f70e1"],["/tags/画集/index.html","4026deccf96452fed5149eeca18d4027"],["/tags/索引/index.html","d6ac6a315e4e6909499b940efc396b60"],["/tags/閂夜明/index.html","a6f307924f68ac93b18c188a1e6f793f"]];
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
