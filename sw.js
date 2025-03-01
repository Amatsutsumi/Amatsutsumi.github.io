/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6641832552a10c1d5759f72b818a2231"],["/archives/2024/04/index.html","e1b1ea113ab905af2985b13318261c81"],["/archives/2024/index.html","b81fbadf6c59ab881c29fa78b7dba242"],["/archives/2025/02/index.html","b2e931f4bc35669f44cdacf2b3fc819b"],["/archives/2025/02/page/2/index.html","9981525103a317c1ff1838bb9a4a1e2f"],["/archives/2025/02/page/3/index.html","c58f0c77cdc8db19281e4f5b956a5700"],["/archives/2025/02/page/4/index.html","23ba466f5a24b3dd0f15f44f458173fe"],["/archives/2025/02/page/5/index.html","8a64c0d39b0a43116399de85e3911aec"],["/archives/2025/03/index.html","40c0959daf62a04f3b6cfbdfa7e082d1"],["/archives/2025/09/index.html","a30dec72cdcd37fcc99545a64c2203d2"],["/archives/2025/index.html","75bc7a9785274aba922a516c048ece50"],["/archives/2025/page/2/index.html","60fc61f5073c7446a35af83bfc51d9e6"],["/archives/2025/page/3/index.html","f71028609e9bf481067532590888993c"],["/archives/2025/page/4/index.html","9a090c29f96f85657d9596a64f2f94c2"],["/archives/2025/page/5/index.html","9226c273417850265761d4df644359e3"],["/archives/2025/page/6/index.html","e1c58394a5c78aa2714e6634b452d46a"],["/archives/2026/02/index.html","a8ed7b45eda80ea7a9d78ad1fa59f6d9"],["/archives/2026/index.html","34020773123ebadd93debbe3bcf20b81"],["/archives/2925/01/index.html","58a4f601e952ec20de6da75a2c83aa82"],["/archives/2925/index.html","2f61ec8fe36fd8e43837d4c6762f7781"],["/archives/index.html","74721e061d927b2aaab71f932a8b2ce6"],["/archives/page/2/index.html","12d91ea8a6dc8b4a96c0adafcb20e38e"],["/archives/page/3/index.html","9a7b7d7f275b343a7affa2d794a583ff"],["/archives/page/4/index.html","9cb9bb269b17b9e19aea9005ab8146e0"],["/archives/page/5/index.html","91b37a6149764b2f3d7ec8bbfdff17c2"],["/archives/page/6/index.html","9bae195fa256a6c5b519cc5482a2812c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","45acce9f05fb716aced31cd4a878c5a8"],["/categories/galgame/page/2/index.html","52ef5c005afc493862a050c2be5cf685"],["/categories/公告/index.html","742affab2be930496552c7f66bb2693c"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","e2eb9bb6016d919bb88c52303f1a0f20"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","51134b3373c7f06729a04b17055f6cf5"],["/page/2/index.html","ce6295f889d30eba41e754e9a381a26f"],["/page/3/index.html","931ce6cde97ca3273e3290b6e4ce63d4"],["/page/4/index.html","2397347a315c3ecb30bd41c298a16af6"],["/page/5/index.html","b2dd84054f68c300fea0a36a1eaa6ada"],["/page/6/index.html","ec27d52ce22a2f932616caff0a657e82"],["/posts/10c9dd98.html","b52da80d00316e0b7a259408b910005b"],["/posts/1370342.html","d3611e5298b26bdfc1fc63441f136279"],["/posts/15ef14c2.html","ef6e91eb3ecac240dfcaaedf388deeae"],["/posts/15f3959d.html","9cba436897d1b0319d7f0ea5200cf0d3"],["/posts/18ab785d.html","063ba450eebb5548d03d8beb8e499d10"],["/posts/1d59b71f.html","aba5fc1f26f4cbf04ce57afaeb2c7ccb"],["/posts/20b3f3a4.html","4a85c28637139e50dc566ee7f8c340dd"],["/posts/28397adc.html","341d1e0d87d4d2c6c66b77619bf15379"],["/posts/2cf620f0.html","eda5a7cdf7b8075bbba6e4b6fcd8ce5e"],["/posts/303007ad.html","653fc9c9a724c57eb02a56159771b8a7"],["/posts/3f7d823a.html","cd962875c4c875b9b8ef31aad74d69ce"],["/posts/44124a6b.html","71865d1b1fcfd10fc771618dd32a5099"],["/posts/4b689be3.html","ddb564e26719c457aabb9a2394403411"],["/posts/4cf8423f.html","2254e63d3a7bd7fe5f733de4c077fb1a"],["/posts/4dcf85c.html","1eb67a6ccc180d3a838ed7893d14a9eb"],["/posts/51c9b1ff.html","83bd47f5b70fe1c0136944faaa224cc4"],["/posts/52b5b3c6.html","f5a3fb78cee36bf91d4e6edf51c7aeae"],["/posts/5f6e0c59.html","059e2073fdeda44066afea76ee2bcfa8"],["/posts/6432d61a.html","14b5cfc14c953712e3ede240ecd6aec1"],["/posts/6515f032.html","5af30694a79d950fdf4047f61dd911b1"],["/posts/71131d34.html","f39958589b8f2f7cf8f49386baf6f9ca"],["/posts/78a8a8d3.html","461342eb0ecc6f41bf4b022c362d3e94"],["/posts/7e3aa3e2.html","b1884d4a9c49a5ce61c07c985b3ff334"],["/posts/80fe2691.html","c819e9b060d412905da7ff8bf7b27bce"],["/posts/81ac52e9.html","9505216ee1d54e4d896f9544e362f0fa"],["/posts/886f8d3.html","8809aa44f687fae9bbcf18970edb1d03"],["/posts/8dd520d9.html","c06eeb3924ea917eef13fe7d2b46a611"],["/posts/8f555654.html","f0d7487cce5ce82bc6f1557954e3dfc7"],["/posts/92a980c2.html","cb78fbbae86da4c07d608c5167912022"],["/posts/94d3c794.html","824a3affcb002073989718395a901fd4"],["/posts/97f50eea.html","18741258660af5c492b2a194c5e2255d"],["/posts/98662d05.html","44e7dda3e35132e988cae0873d817f66"],["/posts/9a2f6162.html","1cca0c986df7221fdb922f4b51bb52f2"],["/posts/9b22a48d.html","49f237f47b3d30b6e2b89fe1d984ae4d"],["/posts/9cb455b1.html","aea784f3a9a531bc9be3ad72b63ddee9"],["/posts/9f61c1a0.html","dcd75af2452efea2e88c1b16fb1f35d7"],["/posts/b497b647.html","470349ecd5c06b1588edc55a3a9e6fc2"],["/posts/b5fb773f.html","07f0ff5fe140bb6caaeea821efd513bc"],["/posts/b8d46b32.html","1a85fc67a6ca183f391e9ec7e4861557"],["/posts/c1b2c6c9.html","6ac32aadc819e18740f2d950deb0dc79"],["/posts/c316c2e8.html","9e2b8aa4d8e88ea3b9606454c535c33e"],["/posts/c497a412.html","9a776dd24fa530d83cc26244025796f2"],["/posts/c5de299a.html","76c80fb3f0d9e631053a8222a23a2267"],["/posts/c70bba9c.html","161f4263218a89999e334c36cbcd8225"],["/posts/cbebef2b.html","d90c6c83cdf69f1f8bfb5cbd15dd2247"],["/posts/ce25023e.html","bd33dbd6ba5cd31eb9098ba3ef88be5c"],["/posts/d2fd4837.html","f7c3d22de9145c4868668f2342f3559a"],["/posts/d3a745a8.html","c19e3de7de08bddadbe277cbf6162beb"],["/posts/e3ab6ad8.html","be0b91f2e3f9817edfd9ee5c43850350"],["/posts/e5018da6.html","37f8eeb27cafbd7fb14e65f46d184821"],["/posts/e624b065.html","b481f91b9d5ffca75b1ad02750342744"],["/posts/e91abb63.html","4fee54d3ad5df11caa90a01d5e196a71"],["/posts/ee1ed673.html","8f417235f035e92e0be7493c91be3dd6"],["/posts/f230b0fd.html","d2b8741e257634a51977f43ce3f440e2"],["/posts/fc04d0d4.html","bdd3284f2e92405896383d3da6b32fb7"],["/sumire/index.html","42bc873336270cf55b12ed1f2e4d4a7a"],["/sw-register.js","27cd28546ff587b6d00d2b23de4bc1c4"],["/tags/CHUNSOFT/index.html","f13300fb103f48fd765910ecc2153fc8"],["/tags/Circle-Mebius/index.html","2407fbc1a71684ef3c4099ab006fe1a4"],["/tags/Omegaの視界/index.html","2c3e6f1ca9ee46239daff05883679bca"],["/tags/PC88/index.html","caad84347432886ac21bb7b790be10fe"],["/tags/Witch/index.html","ee192ebf32a79aaf0b66ff9073ef1ca2"],["/tags/galgame/index.html","1ad276f75e1c9b82b8c0b9ef37b03399"],["/tags/galgame/page/2/index.html","bf7f6c3fdd2fb53ed5ef7be92dccd196"],["/tags/gal资源/index.html","a27200a811e739cbdb98ca75fd8f4e96"],["/tags/gal资源/page/2/index.html","d7bd4d5d47e897c2bf0998dfacfafd7b"],["/tags/gal资源/page/3/index.html","b3e3ef47853748e8f5d1035459b22453"],["/tags/gal资源/page/4/index.html","b7906af142abe9370a5596b890ec94dc"],["/tags/index.html","416b1821380ffc89e6a56d8218bcc13a"],["/tags/rkr/index.html","fb1ae9c4f8d73843e3b503e35e3a930f"],["/tags/ねこねこソフト/index.html","e2570fe3e7f2f7c26fc03e32324f0b58"],["/tags/ねこバナナ/index.html","c6081ae2e73c060b3b4132824d37504d"],["/tags/停产/index.html","8fa443946ef782f382f5d30ed3471940"],["/tags/公告/index.html","6f9d5d123fb7c77cd57d08068ca298e2"],["/tags/同人/index.html","626ca799bcc39cf78330a010d8b43574"],["/tags/堀井雄二/index.html","856e45fca81989bc2fe558e10ba58526"],["/tags/已停产/index.html","3e430c8263685c3a7b014891d36b117d"],["/tags/水仙/index.html","532680458c10d4db142ca927d4e8a9a0"],["/tags/片冈智/index.html","c38a8cb7f36eee0ba0bfdd396ce1bf34"],["/tags/猫猫社/index.html","d3ee9ee258f956bc4a24c5446d049345"],["/tags/画集/index.html","dd92c4d42a41d8c44dfb6c38186896a7"],["/tags/閂夜明/index.html","98a54791406cb92e3e0c596574426024"]];
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
