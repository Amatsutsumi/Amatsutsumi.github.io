/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","237343fee260360994c0ae5642a7ac27"],["/archives/2024/04/index.html","88888875987e31ce501d146e8f8f5aeb"],["/archives/2024/index.html","e260674971d470d9ae08f31bf3f802f4"],["/archives/2025/02/index.html","70ba7f07930a3eb030e7d62bf34ab951"],["/archives/2025/02/page/2/index.html","e8dbb3b29312e1306b1f0110fac66af8"],["/archives/2025/02/page/3/index.html","4084474f3735eda796d8e21892b7b5aa"],["/archives/2025/02/page/4/index.html","aad55dab92b9219c151d7191e70847fe"],["/archives/2025/02/page/5/index.html","f5c57d762a2869fc35a0c991ce313f1b"],["/archives/2025/03/index.html","1b9a3df20a44f78e36b998434b4abf1e"],["/archives/2025/03/page/2/index.html","587bbd6ac16bcb484bf27afc5753d9be"],["/archives/2025/09/index.html","1571035c66da3d64913197924f8e4785"],["/archives/2025/index.html","3b1e5158339e068e8911ed7906af6f7f"],["/archives/2025/page/2/index.html","995490335bfb1c75e23c0d455e46a185"],["/archives/2025/page/3/index.html","337b38fbec08434fb7cd3282386ddd43"],["/archives/2025/page/4/index.html","7f3e6a3b3e8c875960264321792155ef"],["/archives/2025/page/5/index.html","c40bca6dcac9e451610d5312bf2ddbf5"],["/archives/2025/page/6/index.html","823c8012cd69a41616508227729efcbe"],["/archives/2025/page/7/index.html","38ffcb850594c9699f3e52ca756ba646"],["/archives/2026/02/index.html","b9b30209d579cd946facdb72f783db5a"],["/archives/2026/index.html","3aaf2075de4506df087ac674ec3f8162"],["/archives/2925/01/index.html","70f5e20b34b83b886781322e095d40bc"],["/archives/2925/index.html","6235c786935a899c13ec4c5f75659407"],["/archives/index.html","71389b37ea148da9ed525cb1787a4cfa"],["/archives/page/2/index.html","d822d423713ea9b7d430600fdf6cef78"],["/archives/page/3/index.html","2a600d19c8ffda146beaf55386341e4f"],["/archives/page/4/index.html","82a092822996b1abc6a0b31d2321e397"],["/archives/page/5/index.html","ffd0bf7577adab81f4a506d0cdef3a79"],["/archives/page/6/index.html","37be1591fcd65cf3f03c308276ff7cba"],["/archives/page/7/index.html","b1865a21d65b239063c866ee62d3cb56"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","0084307f6bb53791af65f4592676e284"],["/categories/galgame/page/2/index.html","4e47ae6c0030f59273b212a6c8b3e5e7"],["/categories/公告/index.html","911624ec3741340c67144b1ef87b2a95"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","f0d26200ac9a93a771be4b8689dbc8b4"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","4fff1100407471e3a112b4b115668984"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","7bf64984a26c3aab87e35c36a3ffb600"],["/page/2/index.html","9ccfc9581d95f3bd4e4c826e0aa1ea53"],["/page/3/index.html","4a0cd8905f668b3c9479025a1d08da57"],["/page/4/index.html","b551d75a6adbd9a692c3aace11273f69"],["/page/5/index.html","de0ccb66ae7b104f59ccab2b6802a511"],["/page/6/index.html","225cff5acf5542feeb3da71a201121d6"],["/page/7/index.html","a5070580a98b11c8159d3958d16c17f7"],["/posts/10c9dd98.html","67fd18beb270dd637d02c97ace1a804f"],["/posts/1370342.html","09d93fc13155065211e5dfe35861a3e9"],["/posts/15ef14c2.html","e37e96e7734bc0d723c9f1ae99e05124"],["/posts/15f3959d.html","b07bd947b1292650b706a84abf62f997"],["/posts/18ab785d.html","978b695c0600674c5ede2a26b982277c"],["/posts/1d59b71f.html","4bc1702c7f7fb66d822013954a23d5c2"],["/posts/20b3f3a4.html","bfdbd88fd4020048e066be58c2722369"],["/posts/245f1c7d.html","926ac5d1d85f7ce883df79e6dc919610"],["/posts/252658f.html","4f003d02610ccf558017e2c56b09e983"],["/posts/28397adc.html","94948f3db08c44b1be84a441a0edb070"],["/posts/2c0a6836.html","c4720a716668885dd8a29a5199ca0bee"],["/posts/2cf620f0.html","02651e0025402fb75d77fa67fd0b6143"],["/posts/3f7d823a.html","9b4dd724717afa049e1ef8cc9d639bbb"],["/posts/44124a6b.html","291652f2544e1eb90d370fed1249a65f"],["/posts/47abb61d.html","ea21354150da80fd0335d51a52d2966b"],["/posts/4b689be3.html","4b1ed2f2009e10be347a95605a78c2a5"],["/posts/4cf8423f.html","2996c8e8b0a709657c2f1f29be3cf34b"],["/posts/4dcf85c.html","6676ac398ffe35056b2a67f514f805fc"],["/posts/500cd322.html","7bfc066c1b351754f35478fd1e674621"],["/posts/51c9b1ff.html","7b366c609d3953daad2ef9c83722c907"],["/posts/52b5b3c6.html","1b2379c867d35d1306a88a942af6ef67"],["/posts/5f6e0c59.html","9bb71807dcee130358bb57c9929fa02b"],["/posts/6336a2f9.html","eda768823ae117a6cd9d42b2cac34505"],["/posts/6432d61a.html","d1420e544177aa7dfb8454de5a13eae4"],["/posts/6515f032.html","eb707aa6d003245a38b2be3a4bd09e3e"],["/posts/6720ccdd.html","b9d206de4b75ab1750dcb19d35c91c2b"],["/posts/6a4b5ac8.html","6c7262ebd5d96941cf695fb4fbfde53b"],["/posts/6aa4177c.html","add0a9e3f2778743bef90502633b1544"],["/posts/6b15f81f.html","7ca8c45709b35fa7fed7aa4af090bf20"],["/posts/71131d34.html","c0c901119a18abf0eec3bec2c71ac61e"],["/posts/78a8a8d3.html","1bc65ae89d514a508c5bf817707e02b7"],["/posts/7e3aa3e2.html","45b371cc37536e7044a03e98af0c7207"],["/posts/80fe2691.html","21acf488b2825de69ade75a13635a8d9"],["/posts/81ac52e9.html","7b087e33334b799b1ea6e599fc123095"],["/posts/849b40f8.html","d773b90ea75b3bbc026bc944815a17bb"],["/posts/85c51d68.html","7210f02f4228eaa1cac2cde7b612d5fe"],["/posts/886f8d3.html","fc86d6f5becf80af5ef48231d8d1c2d9"],["/posts/8dd520d9.html","c573c1deb26216d0eaeda213201d873e"],["/posts/8f555654.html","5aa284b3e305d9beb90a6845b661389f"],["/posts/92a980c2.html","c5487bd2ea9665063a8e57feed5ff706"],["/posts/94d3c794.html","5425a6b9fd7ff820b022c78f21fc16b6"],["/posts/97f50eea.html","b8e14b19cd1829b448d5143c36a8a3bd"],["/posts/98662d05.html","f9f2b6fd440ac44634cb6aa450f00c03"],["/posts/9a2f6162.html","35fdccb2480d16cb876e1ff07ddd0f2f"],["/posts/9b22a48d.html","e34b3ed40600a5b299856e883cd6099a"],["/posts/9cb455b1.html","dc72733b5c392251ffdd3b184f902f06"],["/posts/9f61c1a0.html","c567b1bcc1222a0e6d4d7cc05ac7100e"],["/posts/b497b647.html","33907dc5167aee32708f09989a454d60"],["/posts/b5fb773f.html","832018ec5ae43bfdbd020263c2474a5f"],["/posts/b8d46b32.html","b8c92ddb812845373428d54140914d35"],["/posts/c1b2c6c9.html","2c73bb744ecd670ce038db048be6769b"],["/posts/c316c2e8.html","438a3033e6899a765054b33d042bd6de"],["/posts/c497a412.html","b2d5e9c7d12645677b0f2867dece3955"],["/posts/c5de299a.html","ed19dc8b5e9b84686fde66c921611720"],["/posts/c70bba9c.html","484fe0178c2dad2bcbbbb4f979498876"],["/posts/cae2c959.html","d783fa9d852df90881f37dc82df69003"],["/posts/cbebef2b.html","e50e613d30f9963c401705a31ffde042"],["/posts/ce25023e.html","d388cde40c458af1b42fd0daacfac002"],["/posts/d2fd4837.html","9884bbafb00b578608ca9a745a3131f0"],["/posts/d3a745a8.html","b26bd2d44d7519831a2251b8d3df027a"],["/posts/e3ab6ad8.html","dc2560c45623db174ac6cd26fc3d0e1c"],["/posts/e5018da6.html","49c126fdc0ff41c9a7ebe7975b08c246"],["/posts/e5963272.html","d72235ab3491ad80c4c06dbd16c855b3"],["/posts/e624b065.html","a0d570b7669d3a354b285333eff2e298"],["/posts/e91abb63.html","998e320b9c8e114765a25f2ef8196804"],["/posts/ee1ed673.html","0885f90e6fdbeed99dfb4197924517d1"],["/posts/f21e7f84.html","e8adb01aec6630192a9ec962d52fb110"],["/posts/f230b0fd.html","4b4c4255346e2db9e3bf506c12b19433"],["/posts/fc04d0d4.html","22a87d2532c270b75fd1c6d2507736e8"],["/sumire/index.html","6df6668e9bffac621442471289208a08"],["/sw-register.js","47088bca52ba6b43a080751e9e81940f"],["/tags/BL-Game/index.html","c751692dff1fdcfc2877dc6fef43343c"],["/tags/CHUNSOFT/index.html","a7df35e9f82d8551ee06b9db9aebb64b"],["/tags/Cherry-Pie/index.html","0b2ed4faed094c72c9bf8904d8acb434"],["/tags/Circle-Mebius/index.html","8068eff6b33bf45969470fd5628b1130"],["/tags/Dos/index.html","7f4798cf2c0af88cc8c97486f0a4381f"],["/tags/Kanon/index.html","85804c1d9f25aa50a27ba9b87a0769ac"],["/tags/O-S-I/index.html","b166a3732d2a4dc5292812c10f80daf0"],["/tags/Omegaの視界/index.html","46b46244df722d84ffa26c3a5dc31e1f"],["/tags/PC88/index.html","a8e79202033f5e6aec4166976004d381"],["/tags/PC98/index.html","0ba2e65829e9b0ce1d68a64310d68af5"],["/tags/Pleiades-Company/index.html","84b41d7e03c4764c30bd6dce94e252fa"],["/tags/Team-Eye-mask/index.html","bcc4716de39d330aac9b4ee1749acaed"],["/tags/ToHeart/index.html","1d5e2e6b1ab21cc6bf6883dba3602354"],["/tags/Traumend/index.html","a47dd3a679a8fbdda55c5826bfdd49d7"],["/tags/Witch/index.html","bce53b8d0a593463f5d4bd484f762214"],["/tags/flash/index.html","2edf83854c10ef3f421ab11a66a156a8"],["/tags/galgame/index.html","3db53343c56237b2fa5636bef85a31cc"],["/tags/galgame/page/2/index.html","9333641aef5a528e77672539180e351b"],["/tags/gal资源/index.html","b57673dbbc74c06fa9cd13e88a34a685"],["/tags/gal资源/page/2/index.html","50787769cc26d2d38b1f2a418a31db30"],["/tags/gal资源/page/3/index.html","a8e90a026ad65c2dc5ec9351a3b4ed43"],["/tags/gal资源/page/4/index.html","e55430e6ac22818f5542f9af42242732"],["/tags/index.html","0bb34fcc2de4a10ec5fe88d1a64d20be"],["/tags/rkr/index.html","82a06cee1321b821f50250e65113e450"],["/tags/ねこねこソフト/index.html","3d6e528b08d2448e7fb95d30f8d0d9e8"],["/tags/ねこバナナ/index.html","ae98558fff92f2765a372503bae2ba8d"],["/tags/停产/index.html","b95a65d8ecd239513f689139ab2d1513"],["/tags/公告/index.html","1c73a0e051278888e189bc3511bc957f"],["/tags/同人/index.html","facad4e7e78df43ac8e5fad05c35e002"],["/tags/堀井雄二/index.html","b62f04de3912311381fb385906bd2cfe"],["/tags/外海なおき/index.html","7e44dd9dbf15c88b6079def71af52c63"],["/tags/水仙/index.html","f858528bb2112f669427d3215df386ee"],["/tags/片冈智/index.html","5a0bdfdcab2c82e0e772c6222bcc6024"],["/tags/牧尾屋/index.html","55e8eafdb4292528da3ce1217196c16b"],["/tags/猫猫社/index.html","4802478d004a4eb54feff341b17f1937"],["/tags/画集/index.html","2d9d28d768678fe77da241a2b1372791"],["/tags/索引/index.html","c941a17b7edd09dc7b7c60c3ed3483e6"],["/tags/閂夜明/index.html","62d4c34fed520551e0a7b5fe7d9eab6a"]];
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
