/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d3fdddd4d6f7bfdbdbdfaaf5f6f4187e"],["/archives/2024/04/index.html","0b9595099331a061fc6c3ce99ce58eb0"],["/archives/2024/index.html","dec3972e549c5cd1375d153186ce9ef7"],["/archives/2025/02/index.html","8c7a47b7aed86f6445215055019c5fc2"],["/archives/2025/02/page/2/index.html","496088fc8f9194d1d22b77dc013ac189"],["/archives/2025/02/page/3/index.html","971ea11c625db98c621eeb0763e272a8"],["/archives/2025/02/page/4/index.html","7ae4dafce020a681bcd1266d3c5d6693"],["/archives/2025/02/page/5/index.html","809731d5518d520233fe97aa773517dc"],["/archives/2025/09/index.html","94f8b37eac5ddd39e8aacd8f59b8d0df"],["/archives/2025/index.html","78eedc5e749bdea2bb8960d335e58e63"],["/archives/2025/page/2/index.html","e085b9b3c35341fbbe769f394e049cc1"],["/archives/2025/page/3/index.html","df3a0a6b9ed0c2e950a2a933b0ac56fd"],["/archives/2025/page/4/index.html","986f825e53016b0d82c59f470a621869"],["/archives/2025/page/5/index.html","22aa5fc263594d52c3da9d3a6545727c"],["/archives/2025/page/6/index.html","a8d43b53875a0e26a34038db2837f4dd"],["/archives/2026/02/index.html","8d49b84d9a714649105cd033bc914a65"],["/archives/2026/index.html","2b4fc26b51bf14dcbce788d26350bfc6"],["/archives/2925/01/index.html","282e2a5b47e1b0c640952b00265fcdf5"],["/archives/2925/index.html","1b6618d28ee98935a0b43cfebb437f19"],["/archives/index.html","d8ea6646cf810a3dc29476bec5cc7045"],["/archives/page/2/index.html","2b48b222965f83944cbe7292872cd865"],["/archives/page/3/index.html","4e4d755ae1abfc1471292aa04888e5e2"],["/archives/page/4/index.html","19172a2d8623f076f82bd97d54750f61"],["/archives/page/5/index.html","1d465b5824152887c420c870d8faa903"],["/archives/page/6/index.html","86b2ec9f4745efaf9c15b8051e9d1358"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","907eadf085328ec5498b9672c7bc7159"],["/categories/galgame/page/2/index.html","79fc22ca844121b022e1bb7b601d1a43"],["/categories/公告/index.html","993e8ee3c41920ef1f43a7d8cd7afd9f"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","df2c11779da7764a51f1a2e170fd8cf7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","3b5a1c796a9dd7c3d2653fd8e9dc3af2"],["/page/2/index.html","416f5b03aee6e486ad1246540a18111c"],["/page/3/index.html","488c7b7e648e1d06ff900b5f3b958903"],["/page/4/index.html","c391675283977867a36bb85bcfe1172f"],["/page/5/index.html","c8682c27ab538e42a64a05e2e2cd0789"],["/page/6/index.html","843323062620210ca93e33cf76704d47"],["/posts/10c9dd98.html","767b84f1b63bd2ca5958b4a9796cacea"],["/posts/1370342.html","1731dc09b4cd93b35b6dec696546b057"],["/posts/15ef14c2.html","03d00b1da1cabf643bb845135d262254"],["/posts/15f3959d.html","21d6c2df8f87feb140b558599e00439a"],["/posts/18ab785d.html","7f4a5679bcb314855981a72950ea59d2"],["/posts/1d59b71f.html","032518a1127ade3560d419cb007e9a50"],["/posts/20b3f3a4.html","05c0f332cb419c3a25ea8e3a7ea58930"],["/posts/28397adc.html","b6450ac0ca60c516d74a843c4cd53566"],["/posts/2cf620f0.html","0e7ae49011c1b817989ccf87b1a11cac"],["/posts/303007ad.html","a8d243e53abe8ae426fb639f344e2954"],["/posts/3f7d823a.html","3b2ec4997cf24683cd7b408c6c42a214"],["/posts/44124a6b.html","84f98b9d03773eb2dbf99d10d7084b1a"],["/posts/4b689be3.html","89ebffa4e92d575440938e29291ba87a"],["/posts/4cf8423f.html","261b34c4a98713045b9c6472411f9f32"],["/posts/4dcf85c.html","ff0b9a3a581bd2cc21a261f250f20c60"],["/posts/51c9b1ff.html","49dfa2f672ca9879f83d923713f2f6a8"],["/posts/52b5b3c6.html","b31c02ea3d91a78baade69c132c6c0d7"],["/posts/5f6e0c59.html","946ca12ffd606e25ca91c8c1084accec"],["/posts/6432d61a.html","a6306dc718448745394bd2e8a7a4ef17"],["/posts/6515f032.html","45d898e04b965d55a55f1bbb4be9aa9b"],["/posts/71131d34.html","2f9deaa4f26ddc39fbf64f2e85650561"],["/posts/78a8a8d3.html","32abd29c134f7573f9beaca818b75c07"],["/posts/7e3aa3e2.html","d4f57172c8f9926befdc0c9a2c9ba69a"],["/posts/80fe2691.html","63ab2baec03a86d3fad5a613673bffb0"],["/posts/81ac52e9.html","c2d92216d5e85ff1c10d16299386363a"],["/posts/886f8d3.html","4253d114a90ae6ca8940c0409f8436c7"],["/posts/8dd520d9.html","5433c276a387894322203fa254e26bfa"],["/posts/8f555654.html","c9ea411c44ef59bbaf369d29d2e51e65"],["/posts/92a980c2.html","d14bd58c9db5a1c0eb1aa2bc21652afc"],["/posts/94d3c794.html","968e0096f5065f62774307f3b2ff67c2"],["/posts/97f50eea.html","e32a22c78b1c59c39b17f74662b3d244"],["/posts/98662d05.html","644518591327d4693151bb02e4b6ff91"],["/posts/9a2f6162.html","ac8508619a276956a1347e108fe1b7cb"],["/posts/9b22a48d.html","ac2719d6616465fbb817cf73307faf30"],["/posts/9cb455b1.html","7ed438476f0aeb5098605c9539aafefb"],["/posts/9f61c1a0.html","768e6b5a163c20f7a2cdb65880935725"],["/posts/b497b647.html","57b14fb6e7cfc5996b8891200cae0bfe"],["/posts/b5fb773f.html","f0f622b18f0043f9f9528febe7c684c2"],["/posts/b8d46b32.html","7a696ceedd9dcffe19eab13a50e571ee"],["/posts/c1b2c6c9.html","a2708edbcea4ff42475fd7c57b02c883"],["/posts/c316c2e8.html","915402900df81e6bc35d4204b9077be0"],["/posts/c497a412.html","fb8cc036b31681c9c4f6cd411999fc2d"],["/posts/c5de299a.html","c2cb15d897612a269e14964c15a2b8f4"],["/posts/c70bba9c.html","b2f0258efa139049f0daaf4ddcae34a1"],["/posts/cbebef2b.html","b78b8cb2795600f67690a21aa89b48bc"],["/posts/ce25023e.html","04da9116fd96eb1c421bb131c4fa2dcf"],["/posts/d2fd4837.html","5664be7eae238d76ca663e983db708c4"],["/posts/d3a745a8.html","a1ccfb9e9ec800bb29c08c566ccd9b2b"],["/posts/e3ab6ad8.html","ebcbd8db0a0643d9fa4bd42b6cd5a779"],["/posts/e5018da6.html","07682d6107cab79fab02488518f4ce13"],["/posts/e91abb63.html","9591844bc14499cee6efeba778fb3576"],["/posts/ee1ed673.html","ca4c070064daadfdbe8e18ea8456b092"],["/posts/f230b0fd.html","ba39c460f7284103cbb24659292b92ce"],["/posts/fc04d0d4.html","baa2f01a587398578c0e2df8eb563938"],["/sumire/index.html","9e8b689bd10034b4dce89d689e570c55"],["/sw-register.js","4619e72a475c3be6143c32d574f17013"],["/tags/CHUNSOFT/index.html","ba1a2ff9787b2f91aa7b69da10fca1d2"],["/tags/Circle-Mebius/index.html","57465b9ef93f3efc1886f28033de8bf2"],["/tags/Omegaの視界/index.html","807b1951206d7bdd89dabf8dd00a90bb"],["/tags/PC88/index.html","3bcfd4698c12282bee0ee296f4b6ff7e"],["/tags/Witch/index.html","0dece4bbcb15c72d07b504ffc6635dac"],["/tags/galgame/index.html","89236de424caeeb21aea527bbe1cd83c"],["/tags/galgame/page/2/index.html","415d07f80033781b9ef3e20b881fee91"],["/tags/gal资源/index.html","851a16a24e8a2e74070c4ac484f4953d"],["/tags/gal资源/page/2/index.html","a8b96afe6300991e218f47f2b7dcc50c"],["/tags/gal资源/page/3/index.html","1cb917615e1bb00e912e413112a0280f"],["/tags/index.html","1561849f341a464d09743e925ecc9423"],["/tags/rkr/index.html","12957a20657386ef377bb6653fe7c8cf"],["/tags/ねこねこソフト/index.html","b71a852933ec22dc466d28f6167c1fc9"],["/tags/ねこバナナ/index.html","ef8578bf3f3d6b9ade29466918491534"],["/tags/停产/index.html","9d9e501ad37b417cdb1d9136f0cac16d"],["/tags/公告/index.html","152d94b7cbf22131406fb67e191cf198"],["/tags/同人/index.html","8adc41f4ed4c6e1c5e06575fc8dad63a"],["/tags/堀井雄二/index.html","70ccbaba6da41f56078dd548c13c6b4e"],["/tags/已停产/index.html","546eb935ebf3e668cbd500fe62b2580e"],["/tags/水仙/index.html","9e4032a2b665b5747b5a826a311d7d0c"],["/tags/片冈智/index.html","55543d7e52e155f197392328a9a160f2"],["/tags/猫猫社/index.html","638e5e32d8626962f5551ac298b79127"],["/tags/画集/index.html","b21723b967167d4305faea95128f508c"],["/tags/閂夜明/index.html","08c8c62686b7e1ccad1721472a7de324"]];
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
