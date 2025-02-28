/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","216261807551c3ccbc14b41c39433f50"],["/archives/2024/04/index.html","388010a6607c8d14efc2d274c253d589"],["/archives/2024/index.html","878201b95426cc1dbca12700343dd8c2"],["/archives/2025/02/index.html","a449f81915613ef28047a28c21ffe3f9"],["/archives/2025/02/page/2/index.html","e6a20d564c5f6b21f739d7a2bd58e75d"],["/archives/2025/02/page/3/index.html","1e07361827703e0bf205c831b6f25d5c"],["/archives/2025/02/page/4/index.html","e7ba78199b722f9c0ae405224ac699da"],["/archives/2025/02/page/5/index.html","2b9302b8f8f4a861f26d1f2551c9c93c"],["/archives/2025/09/index.html","6337750f1d019cb3f5735db6304ed235"],["/archives/2025/index.html","a48058760c66917df8d366ebace40f3b"],["/archives/2025/page/2/index.html","fdfd8140a2c7391b895abb9d33d91fb4"],["/archives/2025/page/3/index.html","2d864c6cffcd8a23a97556354e9a3c05"],["/archives/2025/page/4/index.html","65f778ea099f25663b8bc5b1eb90d1fa"],["/archives/2025/page/5/index.html","481bfd46dd4133fd0349e5759e49e8ac"],["/archives/2025/page/6/index.html","ca1b43486e5ada5cff186fdf38f22bc6"],["/archives/2026/02/index.html","98f70a6d3a5ba2090389eed1c84b4f0d"],["/archives/2026/index.html","7ad9bbce5d468ea4ab55f7755420e07d"],["/archives/2925/01/index.html","fb34e4527e0cb620b5a213d97f424401"],["/archives/2925/index.html","061ad1567bf015c42a54e67d20bc8ef9"],["/archives/index.html","5a03aa681ff1e891933d57a30b1f622e"],["/archives/page/2/index.html","a73cbb36adefdef3ba8cf29376ae2633"],["/archives/page/3/index.html","b6b6ed85eba066e26207147c16979229"],["/archives/page/4/index.html","ddb2da3d8680e404a415ee8caf9015df"],["/archives/page/5/index.html","6be74b881c6d3b36f3286cb7b3855ddc"],["/archives/page/6/index.html","7d2c297083278dc34fc07f0984602e41"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","9dfa20c391b03b1bfa1b8f79e2e40cc8"],["/categories/galgame/page/2/index.html","f23651551cb70499df58e4e12a798ba2"],["/categories/公告/index.html","352f5192ff5246c590f7945e95f4d9b7"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","e52be3fc0acee4e252dad226dd4b6c14"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","55b8eef50f93980363047cd21d1d6bb5"],["/page/2/index.html","8d668d08e5d3bb3fdaa8612365ba6e25"],["/page/3/index.html","3faae607d16f0c31e14cebd71ad99650"],["/page/4/index.html","d0823539bf81925e0004a280777dd878"],["/page/5/index.html","18d6b628d64c9ffaacf94956459562bd"],["/page/6/index.html","d9f675cc5703c8148e822e1e4a2053dc"],["/posts/10c9dd98.html","9d9e394494250a9b7f81becd72888943"],["/posts/1370342.html","9390ae06802278eb1d8dfaa8b0c126b8"],["/posts/15ef14c2.html","6870a1608cb15d2d7064371a5a6d6ab1"],["/posts/15f3959d.html","d4a49659acfafb2b2a8a9fd5d6984199"],["/posts/18ab785d.html","00e76cde1f88c29ae6a61745db1bdacb"],["/posts/1d59b71f.html","66911076813c4430730d4023cb0b2ce6"],["/posts/20b3f3a4.html","73de02833b388003328cd00def87b6d6"],["/posts/28397adc.html","c00025bcb1ec509cbbfd6f1766d60ab7"],["/posts/2cf620f0.html","04b8f1590be142ed9ea1af1b5391ae4f"],["/posts/303007ad.html","dd9fb8fa64b2eff5b9ae8d09606ec23e"],["/posts/3f7d823a.html","7dffe05bbbfc3e3ee3b6cb1eac004ca4"],["/posts/44124a6b.html","43d467d8d8dccee5312ef9635c1bed66"],["/posts/4b689be3.html","86b186ffefbad156e470f785ccbe7581"],["/posts/4cf8423f.html","088869bfcba7f0fe64cad20acacc4a7c"],["/posts/4dcf85c.html","c2f8a1ff6b9c220b5df4aa8e186bb35e"],["/posts/51c9b1ff.html","c3949e9a48149f18edbaed1e30c3776f"],["/posts/52b5b3c6.html","a93d6d5210bc17407304c0c30b6482c9"],["/posts/5f6e0c59.html","ee5c5ce5b6de4360553cd5357f18161c"],["/posts/6432d61a.html","622bb7d71b46090dab153497b81ba3ec"],["/posts/6515f032.html","1d8f6a027440f973cb106684cf6b429e"],["/posts/71131d34.html","2e2447ce205d589c2fb5d42d32f71b95"],["/posts/78a8a8d3.html","f4cd0aa0dfdd01fba598d7a7b24e021c"],["/posts/7e3aa3e2.html","458fae12c5a90cf5bd14211f69b595df"],["/posts/80fe2691.html","e0fd43adf4eeb6c9cc0e7a815eaa0a0b"],["/posts/81ac52e9.html","d32088449e18d74fdea6683524a48faf"],["/posts/886f8d3.html","a7d4792db9786dcfc23123cf4369965f"],["/posts/8dd520d9.html","538e33e5cd70fdcb69a6610a17deaabc"],["/posts/8f555654.html","931c5914c122b893aef5d2be1db9b1d0"],["/posts/94d3c794.html","64a4d5bb919160e9b5d9a205050d957e"],["/posts/97f50eea.html","a78efe91746d5e52a24943bd0a5d790a"],["/posts/98662d05.html","11f2dfd16421adabb555e2b378df8bf6"],["/posts/9a2f6162.html","0b73dc8c0ab0f8f4ac716c7f50a25787"],["/posts/9b22a48d.html","394b1be3bfb869d7f80271b2f6167ac0"],["/posts/9f61c1a0.html","b21f3ea3df928087cf5b2558299f79ec"],["/posts/b497b647.html","8f285457f4a74b34d9f292ed741d2786"],["/posts/b5fb773f.html","7061c1adda819bed2c421602135f80e6"],["/posts/b8d46b32.html","5e7d210b71c63301870ecc2630484e54"],["/posts/c1b2c6c9.html","af547a69b264edc4fa51f5ec85b06f91"],["/posts/c316c2e8.html","4e8a4fe8a3dfd7646aed7b4eac17fa1c"],["/posts/c497a412.html","0903e8a7991eb1c9e05245fcc872d1c1"],["/posts/c5de299a.html","d76772b653c98258fb1d009fe359e8d2"],["/posts/c70bba9c.html","4ca49e7a4413cf7869fdedc3ba90b208"],["/posts/cbebef2b.html","e4ff5cac1d241e05c80ba0bcf81ea10e"],["/posts/ce25023e.html","554e52c9c6fe150526c14fd1cf8ddc01"],["/posts/d2fd4837.html","3e8659239917ff01356f34a143f10400"],["/posts/d3a745a8.html","a9e6518e4c336b03ac42dfe2ac76cf08"],["/posts/e3ab6ad8.html","afa2051a7e08043e694a4cecac218a05"],["/posts/e5018da6.html","45d1f6bacec5969eeea4375e203c68ad"],["/posts/e91abb63.html","283e0c97aa4cb45fd4dd761104d6ef17"],["/posts/ee1ed673.html","a257ecfb1bbb3d585951092fa070344a"],["/posts/f230b0fd.html","786a8fa388b0aceeb3da38fb1b6ab002"],["/posts/fc04d0d4.html","280feadaf4cb34317e74dab32405dcfa"],["/sumire/index.html","63350f422a985ffe09ab631234593ac9"],["/sw-register.js","d10ca074d2f9529596155443690fe187"],["/tags/CHUNSOFT/index.html","141b4a0642755e5cd0d4b4e393d0f6d6"],["/tags/Circle-Mebius/index.html","9f4a459df3e47be86713df7871fd971b"],["/tags/Omegaの視界/index.html","180c5d91aca1c0e9a2a77cc45b88959b"],["/tags/PC88/index.html","b0f3c9cc326135f4bcab71303e9913fa"],["/tags/Witch/index.html","c4778049231ebbc4aba35741cb0aba0b"],["/tags/galgame/index.html","45d4b9ba82d6826e4d5e80fc97c918b7"],["/tags/galgame/page/2/index.html","cd89facdee1f27f1f16f56638dd3e199"],["/tags/gal资源/index.html","c8968cd507f77046f2bd876c4c5709d2"],["/tags/gal资源/page/2/index.html","dc9e4a7f81a771f942e61f5a3e763e21"],["/tags/gal资源/page/3/index.html","af707c5c4cfcf82daf437f7c5d4f4d5f"],["/tags/index.html","6ef72eef7e60bececcd2986e557580fa"],["/tags/rkr/index.html","7c13aa104a6c87e589951f5c83d0f4bf"],["/tags/ねこねこソフト/index.html","3574ecc18dd35a089233dad5d013ccef"],["/tags/ねこバナナ/index.html","97136aa972c3d2c8fa099b4209fe9977"],["/tags/停产/index.html","9d2f7ba60844529e0ca1e7092dbf8164"],["/tags/公告/index.html","9bddbd3c47eee7fcf24e6576e9164c8a"],["/tags/同人/index.html","7a6702ae01dc56097adc7ca94501853c"],["/tags/堀井雄二/index.html","8670d81450e97d0caa53a38b6b1f632d"],["/tags/已停产/index.html","8e871e8219f3bd7d79195503287366a3"],["/tags/水仙/index.html","13da6b699dabbb7308a687c42c72ed89"],["/tags/片冈智/index.html","c6947bca72964c1c7107bbbe36134ffc"],["/tags/猫猫社/index.html","74ffc38cfee06a99fa7d4b7f159df124"],["/tags/画集/index.html","c1b62d49b33805bc9000d3fa816caa76"],["/tags/閂夜明/index.html","98f0a4d50a57d875607bfc99a7ebb65a"]];
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
