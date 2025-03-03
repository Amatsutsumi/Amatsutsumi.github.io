/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","ead48526816164a6761dc530049c96ef"],["/archives/2024/04/index.html","a110ecc0ce0f9c01541df1e823645b0d"],["/archives/2024/index.html","85ffc61faf0c9e0f1fdd08c6f475ae9d"],["/archives/2025/02/index.html","81dd01113627d9b5fa7c780b3b90ac38"],["/archives/2025/02/page/2/index.html","a0a3f486ac319fbc5d6aef2fde8b5cfb"],["/archives/2025/02/page/3/index.html","596a0ae48fc64d4e87def8b66409e999"],["/archives/2025/02/page/4/index.html","ed2e29b602573c27c534215cb56d66d8"],["/archives/2025/02/page/5/index.html","508ee28aea38d035b71af4284c192168"],["/archives/2025/03/index.html","e85dcec65a1c4613f9f5ed0f59c6b543"],["/archives/2025/09/index.html","e77ec8c1a3e78443707d98a97cb2391c"],["/archives/2025/index.html","e320de210ef25b5ac838ebdf9bad838a"],["/archives/2025/page/2/index.html","05661276f1e9ad5b6a1ac0b65944b4a7"],["/archives/2025/page/3/index.html","da6273adf44f02126958aab95b0ccb55"],["/archives/2025/page/4/index.html","759ca475eff2a093b7cbd29e88be0595"],["/archives/2025/page/5/index.html","70b90befcf32a5a1f0e3ba845669a811"],["/archives/2025/page/6/index.html","77ae9a9632ff60ad2c092a2b0ac1210b"],["/archives/2026/02/index.html","ffd961aa26f385615ebae704c8fb1ef6"],["/archives/2026/index.html","6a14f93b2f6be32a571d65817e6e63a2"],["/archives/2925/01/index.html","fd37914a708b365e9261a29e8938c68d"],["/archives/2925/index.html","2cbda170bccbc9d44218244dbe56b1e9"],["/archives/index.html","dbafa44f8aa5130f7edac682980e1a6a"],["/archives/page/2/index.html","23eb29a10b66f24e4f60d813eac2158d"],["/archives/page/3/index.html","1cfd8c70f973149131c1761561cbf312"],["/archives/page/4/index.html","7a5265ad083adb699709cfd9a0e0b3ad"],["/archives/page/5/index.html","31e744e912a29a47fc3aabc8e1a25af9"],["/archives/page/6/index.html","a15f608f4fbca7d12c00a2751afb170e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","302175051296dfbb935664700086486c"],["/categories/galgame/page/2/index.html","153bb4fceb0586afb6f85a06ce80a6a2"],["/categories/公告/index.html","800964de9ee1423c9e006e6a58d7e27d"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","265024b47ed4e4930e6faee9451aa39f"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","6f418af0cbaab80e216da776d0b1da72"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","e8a12568cb809f78c71c15b68be70a49"],["/page/2/index.html","7e02af6871e430c08b5d2a58124d7017"],["/page/3/index.html","acb70d3bbc4d1d8e62c187fe88b4af94"],["/page/4/index.html","aea560bfd29aae05981eb3f4108ae747"],["/page/5/index.html","6437771bae681c80d1ac2324061c3a78"],["/page/6/index.html","11e5d2dfacde9c276b5cea9e965287fa"],["/posts/10c9dd98.html","41c8a4b08dd9ae2be0e3e232d7865195"],["/posts/1370342.html","b437bcd43004332293b3dbccaf802303"],["/posts/15ef14c2.html","d35dabd1fc8a4e36e46a04a65c7abcc6"],["/posts/15f3959d.html","d50752f0dbe53ab4bb8dd950f9dcd8d9"],["/posts/18ab785d.html","6ecba2664509bf00b0ed67a88a830084"],["/posts/1d59b71f.html","ef34cb684a3856a5563298f346b95058"],["/posts/20b3f3a4.html","0fed519547cadbf35f33704cacb24fd9"],["/posts/28397adc.html","543d6f21288c05ad9a5d8bef9f434e8b"],["/posts/2cf620f0.html","cb2d7dee305ba009a3624fecf3645c53"],["/posts/303007ad.html","8ad2124716a387eb46e9575050a74c46"],["/posts/3f7d823a.html","8aff4a2804a9c50c62d87899fc499c7c"],["/posts/44124a6b.html","2675dd7582a85884e58fd7b58c9798b3"],["/posts/4b689be3.html","9f51eba26853aa378ba5b4208dffc61f"],["/posts/4cf8423f.html","1ae5aaae1a7d44c95febb9d98b6d4cb2"],["/posts/4dcf85c.html","fb3ef392d5d64f1cf88af090a71407b3"],["/posts/51c9b1ff.html","91ea153c00f9154e291e6135074057a8"],["/posts/52b5b3c6.html","167b18036a1c950b9db780256a966e12"],["/posts/5f6e0c59.html","726579090467b4c29eabfa4925f4016c"],["/posts/6432d61a.html","47f1797b3302db57f914a1603f271667"],["/posts/6515f032.html","a2fb7fe835644e811b42308fd4a9b813"],["/posts/6720ccdd.html","f88f2092b747b0b2810e9d4812be70e8"],["/posts/6aa4177c.html","6c2a885c304920516d880d8283f41fd8"],["/posts/71131d34.html","e6f7331ea8a480223bcaef19f529f63f"],["/posts/78a8a8d3.html","cad1be83e75c8b94c1b33297c6639c76"],["/posts/7e3aa3e2.html","65d118a5c610504ec7057d607936ac2d"],["/posts/80fe2691.html","b1f3d4d7c3e6e5171be511201793c771"],["/posts/81ac52e9.html","a4c3c670a741d51ac6fd9688fd5dadbd"],["/posts/849b40f8.html","39da00744a68cdfb75b4d6e87b6e312f"],["/posts/886f8d3.html","694cb439af20f68d707704f06d5f1daf"],["/posts/8dd520d9.html","63f3d181d9f38f5eb9b5151495ba8a85"],["/posts/8f555654.html","f5cd080df0cebddc64637d9954f44ec6"],["/posts/92a980c2.html","dc3a9d096afd20053d4d5a362dab31d0"],["/posts/94d3c794.html","f02ae2d03117fc0becb193040e108e0f"],["/posts/97f50eea.html","0a8062b3258ad4e4d69d64c403cfc66e"],["/posts/98662d05.html","628573ddd1796925ba45aaa710bdbd4e"],["/posts/9a2f6162.html","12901f1c2010697714f43ef67c14fbe3"],["/posts/9b22a48d.html","5ab8bb3c112f896ebb28e0bb3621e7ae"],["/posts/9cb455b1.html","80841bbfd895fa97b556f65dd221d40c"],["/posts/9f61c1a0.html","e37004345fb8c191dc1206bc4f914de9"],["/posts/b497b647.html","1b7f765fa3f1964eac09d783360bd0dd"],["/posts/b5fb773f.html","db91d1c4f416a095e9d28acfcef4ccc5"],["/posts/b8d46b32.html","53392b4e6cd1a672fba0453b0528ec63"],["/posts/c1b2c6c9.html","f5980092b9f14f0c91c378c4a508e3c9"],["/posts/c316c2e8.html","5d6d17e30d604d9daf0b4af5f0d60f4b"],["/posts/c497a412.html","5ffd47cd154832271bb7e9832d902011"],["/posts/c5de299a.html","cca4f347f6b9b8e7388a34de4b0673f2"],["/posts/c70bba9c.html","6368d97e2de7ac32a420111acc561c2b"],["/posts/cae2c959.html","2b647a32823a42e0d88638714fc791a8"],["/posts/cbebef2b.html","80fe74edbfbdf41c2545b0150c0f2e01"],["/posts/ce25023e.html","ac06f16165a7e77f4b10b19845337c26"],["/posts/d2fd4837.html","2828295ad6ec27bf762c5a79b4bef41f"],["/posts/d3a745a8.html","67bfb9df7b3fd294c7358ca32c550106"],["/posts/e3ab6ad8.html","faab6bbe1e6a8daf0e7fea95e1032f25"],["/posts/e5018da6.html","b17d206cc0c26598d9c558523f576329"],["/posts/e624b065.html","c3b4363a699a05c787e0943b348c5d46"],["/posts/e91abb63.html","b0cd52c101ccff7c347eee8b15f61619"],["/posts/ee1ed673.html","47ba4eb4e1029932843d8eb07b1be917"],["/posts/f230b0fd.html","978c63e8e0a1ba4a5d5512a1f1213a9e"],["/posts/fc04d0d4.html","07111ebe6051536205b56f35840c71ff"],["/sumire/index.html","683878862789b5db06938f2fa8bbcd4a"],["/sw-register.js","d37863bb9b80d3ad801469c1aede4119"],["/tags/CHUNSOFT/index.html","511b8f8d93db68a1a45979fbab21bc23"],["/tags/Cherry-Pie/index.html","871253e36a0598cefa9e95811359f895"],["/tags/Circle-Mebius/index.html","b79b1334bbd1943697d2872ee523c0a3"],["/tags/Dos/index.html","6d513af934d5d5c5b0bb4dcc6cad9bbd"],["/tags/Kanon/index.html","48528f49c21db24ed3f832aba4cf3054"],["/tags/O-S-I/index.html","2af01e90861b366592972a2850a56818"],["/tags/Omegaの視界/index.html","4785d9167eb8b36e8ad79a1ea7989ead"],["/tags/PC88/index.html","c66ea5afde85841cf119195ffe1298c7"],["/tags/Witch/index.html","0e66e77926bb8528eeaa6ffd9f200ed5"],["/tags/galgame/index.html","9eddebc17c334e0936b143a6fe7d8cd2"],["/tags/galgame/page/2/index.html","20994377bc592f85e2b3ed6fc8309997"],["/tags/gal资源/index.html","f5f2a766473c7da74c565550d968bd41"],["/tags/gal资源/page/2/index.html","2e2b97d7e86b9742c178d1c0fa6de631"],["/tags/gal资源/page/3/index.html","4f71715c996c15c7d7e76eff45df9296"],["/tags/gal资源/page/4/index.html","98368cc9750a818da33b20f6e24ec030"],["/tags/index.html","6f9ac67436dcf72907ad20c57caae215"],["/tags/rkr/index.html","e02cecd1ee33d9c51ea2167d60e5c559"],["/tags/ねこねこソフト/index.html","88187f6e544d01e588d2c319505dc124"],["/tags/ねこバナナ/index.html","51f1dea42c4057456d5d5fceff17c9e9"],["/tags/停产/index.html","fa19b3b1f84fee403ab181aeae2a17e6"],["/tags/公告/index.html","28d2019d2710b9f0f3c143ef4b8de5f0"],["/tags/同人/index.html","c6c20abf7e1de12499eea050e46e3fb4"],["/tags/堀井雄二/index.html","3caaec358f4ca664635568726a554aa7"],["/tags/外海なおき/index.html","b381eaa46b74d350485434ad5e067b93"],["/tags/已停产/index.html","c484de47c2193d7a9f89c93ea19d1242"],["/tags/水仙/index.html","786e91669a5ed664a98bd61de745fa7e"],["/tags/片冈智/index.html","4d0b7c2c5b5b1aea45e37438fd13bddb"],["/tags/猫猫社/index.html","fee6fc53b154416f7d36d50b71c5a5a4"],["/tags/画集/index.html","3cf66ebd6771241050f926558cb1709d"],["/tags/閂夜明/index.html","408799303b78515964924df5d4dade67"]];
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
