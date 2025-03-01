/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9837193830c6ab7aa0a0ab9eeab46d2d"],["/archives/2024/04/index.html","fb8adf9568f7e7e240b0abb856f631d2"],["/archives/2024/index.html","6fd1aa33201ed90022c97d813bb17087"],["/archives/2025/02/index.html","489d4c69bfe632a0eb029d59dfe7e3b2"],["/archives/2025/02/page/2/index.html","a4c8e52e14bf1d63314d0ecb0a51e166"],["/archives/2025/02/page/3/index.html","7bf40c1577f6881efc69b48010af60e9"],["/archives/2025/02/page/4/index.html","485f71fcb3ba2114abff46ec2e2759bd"],["/archives/2025/02/page/5/index.html","0a2ea8ff717eb9149a21929f8a314881"],["/archives/2025/09/index.html","363735d5be9096cfae0580719623ed50"],["/archives/2025/index.html","33f9716f775a1b53a06f8487f3a3edeb"],["/archives/2025/page/2/index.html","a958a3f1360214fa47da3467269badec"],["/archives/2025/page/3/index.html","90b7c9b174b5301a6c93ab6958d06479"],["/archives/2025/page/4/index.html","37ba413a032f23cfa92f357056e6f158"],["/archives/2025/page/5/index.html","457f264162e34e254cd88166dd8cb8bf"],["/archives/2025/page/6/index.html","4a2e713a9defef0faa4e98efaf00452e"],["/archives/2026/02/index.html","dd519c281ad4321293f086c1de5993ee"],["/archives/2026/index.html","edb493b6b2784926587d6a178d593560"],["/archives/2925/01/index.html","d2bf6bc15e000cf4b9d41996901209d3"],["/archives/2925/index.html","09de919eb20189e76b147769de88e753"],["/archives/index.html","0641cc328c573877d9ab1e52ab8c2820"],["/archives/page/2/index.html","6b2022f66a0e0f0640f3facd8736644d"],["/archives/page/3/index.html","acefe3fa211528e282101bfda512fb9f"],["/archives/page/4/index.html","ac47787d397f3bfbb6d693295173d6dd"],["/archives/page/5/index.html","c03f82b62f810b1f30eed11d21cfd47c"],["/archives/page/6/index.html","6f2c4c5388a5b97465d1d61c0fc7cfba"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","fb76e4cef1082193955ba11385750124"],["/categories/galgame/page/2/index.html","c6dd7d6dfbecc5840707748d8b45a0e1"],["/categories/公告/index.html","dfa70c15f31d1c855e48520fe1d6920f"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","c0f41d351cfbbb0dd7e5e968f1981c9c"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","39b6cbc16a79539cc64e8bd5150e5a34"],["/page/2/index.html","6ce393c7e9b97f7a7b145247c2fcacbc"],["/page/3/index.html","297a429e88d2ff7b03290ff6338d13c0"],["/page/4/index.html","a0352790d9ed648f3a5dfd5a7521859e"],["/page/5/index.html","a7c91b6d94c8f6f3e3bef6c3f7fb34f9"],["/page/6/index.html","623a85ef41761ef7d43858164a696a4e"],["/posts/10c9dd98.html","533d1680d211ee54a8b7b23b5c5a55b0"],["/posts/1370342.html","3e4f6c6103624f74f6fa39bac1655fae"],["/posts/15ef14c2.html","08df437b300f0536da2e6f0670425270"],["/posts/15f3959d.html","43cec9c736dfc6b9dc3aeba9190d4b22"],["/posts/18ab785d.html","aaf994b168e9d3cf3e53233c00a0f2c2"],["/posts/1d59b71f.html","e731c793cdf89967f2610ff7391028cd"],["/posts/20b3f3a4.html","ada59bd852ed817395a2ce04aa17edd4"],["/posts/28397adc.html","9429334a219c787663f3d34055cda99c"],["/posts/2cf620f0.html","9d03771154ab942d0f566a48ad5e0b92"],["/posts/303007ad.html","9dbc7ffb8fbfdb2f4e764ee6c286d02e"],["/posts/3f7d823a.html","460fc95ec1ce548ecd74dfe22825957b"],["/posts/44124a6b.html","502f75610ff72cffc0a1fe994fabfc32"],["/posts/4b689be3.html","a23d119a095959876f6c9e8db99d54da"],["/posts/4cf8423f.html","7cee38dbee825ec8de9486fec9cd3b8a"],["/posts/4dcf85c.html","8eeea1b1c4f47a06d8c8f0a09bb0f03d"],["/posts/51c9b1ff.html","1545d2a5f29015f2d23f2dc49a42b205"],["/posts/52b5b3c6.html","f5fa80f05dab390e927f2ff7590693d2"],["/posts/5f6e0c59.html","dd671b4662be19aa61f2f3b651dcdcb7"],["/posts/6432d61a.html","cfb03c83544abf1b20bbbf8fd8c5d48c"],["/posts/6515f032.html","f9b1144509cace2aa2f4e7491e393987"],["/posts/71131d34.html","bd170fa23cfee32b771100506ae587da"],["/posts/78a8a8d3.html","ad392c330d756076a7eef0004e28045c"],["/posts/7e3aa3e2.html","f15068e06ab84dfe2a3332291ea92cdd"],["/posts/80fe2691.html","27887e52e0725f68a8f7cb5ece5940f0"],["/posts/81ac52e9.html","c4ece06f231ee9bbe8e28e86aafd293c"],["/posts/886f8d3.html","bde99b9cbcb4829d528c98af579a9e03"],["/posts/8dd520d9.html","ebd6da53e8ba6d7706928fcff50d101d"],["/posts/8f555654.html","98d03849630b02e414958388b3e78583"],["/posts/92a980c2.html","25af5a3f6bceba1b7540d7325e6876f4"],["/posts/94d3c794.html","300839ad023371dd6c90421e56de17d9"],["/posts/97f50eea.html","a465c26bee72b512c564336e859037ef"],["/posts/98662d05.html","a9aa1036e94715d66c4e3ad9711ecf54"],["/posts/9a2f6162.html","a07a2472de93647228db330357b84f97"],["/posts/9b22a48d.html","6606266cb91dd5804f9b0eb30a59c059"],["/posts/9cb455b1.html","79ed9efad95b05723d63375ff859887d"],["/posts/9f61c1a0.html","cf27da6fc0f609c96863fcf35181ab62"],["/posts/b497b647.html","adf17379975bfda3f0af3d9c522cd05b"],["/posts/b5fb773f.html","bb5d9ef02671b0d5f376a236e4eb8f43"],["/posts/b8d46b32.html","8f10eca561d302068f75de44d3d34735"],["/posts/c1b2c6c9.html","401b2cfffb38b56e153c78ce044b4135"],["/posts/c316c2e8.html","f3e2efca1d86e0e7dbb8b31f9e4bd9d1"],["/posts/c497a412.html","270acc27494a014b258b1e62dcbbcbc1"],["/posts/c5de299a.html","01eab45023794fb7b33ea7d31b41d80a"],["/posts/c70bba9c.html","df9bcbb58bf68184b4b0ead4291681a3"],["/posts/cbebef2b.html","868383b9e62e8ea86bbf5a7d3415e95b"],["/posts/ce25023e.html","d94a78c2a66e22ca62edcb870e447366"],["/posts/d2fd4837.html","fe946fa504508e1e19cec6a224786d71"],["/posts/d3a745a8.html","12a9f83c6fe5192746d471eb3380d482"],["/posts/e3ab6ad8.html","5e1685b48cb63283d364aec640b1e49f"],["/posts/e5018da6.html","1152d692f7c65c5f0c50008e33dd8d59"],["/posts/e91abb63.html","9e279e78d353ef806bd959176366732a"],["/posts/ee1ed673.html","2da598f8eb11db63c5d1d606b498af0a"],["/posts/f230b0fd.html","9885cee88f0c0b4256a51a553d39da91"],["/posts/fc04d0d4.html","2fa19e5491bc3bfa2e1015f576797675"],["/sumire/index.html","a9f290b2690502d41e15f0c19e36c091"],["/sw-register.js","a31c20e407f92a43204a209798ba5b17"],["/tags/CHUNSOFT/index.html","e59d8ca9a9792d7b2ea127d862c8d1db"],["/tags/Circle-Mebius/index.html","71b0921f7caa5c0507905a1ab0ce7bdf"],["/tags/Omegaの視界/index.html","8dd856aa9f10908fe31f8807c48c3b24"],["/tags/PC88/index.html","e0faf777346fe84732700384570b64dc"],["/tags/Witch/index.html","fcc4c1294bbc8fb2702ac414a63b4ea5"],["/tags/galgame/index.html","58c8c7db8b61c62533c3a7cbd9964291"],["/tags/galgame/page/2/index.html","c7a0d85e7554956018dafd5ecdf74708"],["/tags/gal资源/index.html","40b41ca3ed81118c10a34e8e57cd6000"],["/tags/gal资源/page/2/index.html","bf30b49b5a4532c100cf9b80c729ba76"],["/tags/gal资源/page/3/index.html","052adccdc36766f9c8dadffb61c49bb6"],["/tags/index.html","62f163d5a9b6d268e00239f12d2b96af"],["/tags/rkr/index.html","12d8742bb9d49a9ec6e10973adca231b"],["/tags/ねこねこソフト/index.html","9cbd62b73b28eef9d9927955aee731bb"],["/tags/ねこバナナ/index.html","f9ff5fdf1dd16ba6a8cd771e2100d027"],["/tags/停产/index.html","5bfd591c876fd14b3393d642b934ff78"],["/tags/公告/index.html","27909479d9afc63b3014c7449fee7ce0"],["/tags/同人/index.html","1865ec47a5859829cc4aaf5768a1a027"],["/tags/堀井雄二/index.html","e4b406b2f00b48d56c2968ba49e5d910"],["/tags/已停产/index.html","d11dbe662783e95c4f89edd087bb78a9"],["/tags/水仙/index.html","fe9da082ce78656a633d40f367ae3af0"],["/tags/片冈智/index.html","9921b1bd752751946fb230ad9102533d"],["/tags/猫猫社/index.html","26583554d122d5b59dbdf453448e1e6e"],["/tags/画集/index.html","a5c5595aa180f0e3e8b23d0e49428a6d"],["/tags/閂夜明/index.html","6db6ff5af1ea59c1ba005511ae1943aa"]];
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
