/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f9d080cefa37c7bc822cbc33f3cea2f6"],["/archives/2024/10/index.html","077633678b4bddff62e95bc026547388"],["/archives/2024/11/index.html","a9df5fb83cc08f48d582d46401fc62ab"],["/archives/2024/12/index.html","88edfb7b992a6d4b499945e3b991c5da"],["/archives/2024/12/page/2/index.html","02e1022af9d594cdb638d8b98ff956f9"],["/archives/2024/index.html","5cc2ff172e5467a9960f1eb757f03a6f"],["/archives/2024/page/2/index.html","03d2ce825cfc703841825127f7737f07"],["/archives/2024/page/3/index.html","470a1412d0e813f8bfa44f249756c5c4"],["/archives/2025/01/index.html","1c2dceb599519caa935f9fe4fe7575a6"],["/archives/2025/01/page/2/index.html","6ff44fd1cc7d88b2b9579f2eaa5b43c7"],["/archives/2025/02/index.html","6407ccfdd0b3442eecde10708fdeb3f4"],["/archives/2025/03/index.html","032ff4ccfbe75f0fd68ec0dc9c37d0e3"],["/archives/2025/04/index.html","42c2c2713d659bb4c9c6485d90dbab1b"],["/archives/2025/07/index.html","42dfe9fed807586a279df6c4dfd9c677"],["/archives/2025/index.html","a5f53c9b48b9c38f8c5e4ec3b4890268"],["/archives/2025/page/2/index.html","37fdaefb2cf8082589a92f3eab9ff986"],["/archives/2025/page/3/index.html","a7708e1bf16425b65cc1101d16c51823"],["/archives/2999/07/index.html","7a0de464a916a93a8eead9e90b0efad2"],["/archives/2999/index.html","116957d5438736623188857ad711eb99"],["/archives/index.html","0d9f8725b64d50f7ac97f72853116998"],["/archives/page/2/index.html","192e97eb64d14cd6d624ba86e64396c8"],["/archives/page/3/index.html","febfac7b4b3c8170c1badf22e0205677"],["/archives/page/4/index.html","6d4837bdfe8b65d07e5c9bbab922e2cf"],["/archives/page/5/index.html","5fe59d360a700d8cc5bbc49c52ae5281"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Unity/index.html","1f9b9c3c4db9d13e78bc4e1e8187230e"],["/categories/学习/index.html","c5993801e9a426cdbc9d82fd30f284df"],["/categories/学习/page/2/index.html","a0e89936e7d1b33964e6bcb263c1207a"],["/categories/学习/page/3/index.html","e301f868fc776714595e3aea12e96c5a"],["/categories/学习/page/4/index.html","5f46befc4446586582bd7ce935981ef5"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","ec80ed1ed8bf650fa79da178e0a3189c"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","7e6bd227afc9b9fb2b8014517def248d"],["/page/2/index.html","3aa2a1aaec58170bff1b29fceceb0752"],["/page/3/index.html","a8a9ceb92369097042cdf03887b0e514"],["/page/4/index.html","0318fbbbf70bc8a58acdb436348ab047"],["/page/5/index.html","d1ab2d1845591de26242ae4c16aed57d"],["/posts/1008f769.html","ee7f5adf25e0cbf8e3fbebb9f019104d"],["/posts/10cc2d44.html","3d20c6856923d7b86e766238a92adb01"],["/posts/113e835e.html","2f1132883fc1984cef7132c24d261192"],["/posts/159a8932.html","fdee209a8ae4f60c594cb1c1d440d7c9"],["/posts/24e1190f.html","22c665c556ef8e9f07c27ee54f3d6c38"],["/posts/292422ce.html","6374eb9a0dc7d3dbb57d9ce16d034fa3"],["/posts/2c10891b.html","85343978194652f9f0b015057669d9e0"],["/posts/3aeb9189.html","6a66732c981a089f4ad85b4ff68db9c1"],["/posts/3bb2d0de.html","58fc4e6c388fa8ff8f5d26faceb8f516"],["/posts/473f11.html","c1dd6cd8334758535c5d95ab82061d21"],["/posts/4a18176f.html","cf9e8325fa4ab05142048bfd8ea06f27"],["/posts/4a6f70eb.html","1f9b73694df2cadf4250bacbcd70fc65"],["/posts/501f2de6.html","ae335a0a688593f6ab51ebde3fe12166"],["/posts/59f2b96e.html","03bdf5e33bda193d690e788d25a1031c"],["/posts/630e02a7.html","abc63f82d10126e6740d9000f600797f"],["/posts/66b94565.html","becd5d5354142dbf229ab958a9581389"],["/posts/6ef7598e.html","358adbcbdfec3090fdf84129d83a6c5a"],["/posts/72eba54.html","cc4294001eb5d9aee0e2686710ec13f1"],["/posts/749c06c5.html","4a38326b24e07ff7f88aefdaa79971d6"],["/posts/77524bae.html","4d2d314c6094b44086a3301750880f27"],["/posts/7779f102.html","9e18a9fe211653809d567112d6d3d2d7"],["/posts/78b2fcfe.html","f0b95aea239556476ba927f608569b5f"],["/posts/825fca5b.html","cc2f5831770dae1ee34eac7ad6fbe0da"],["/posts/860f6e9a.html","03f95f6cc862c6a3b72a5f876f941cf6"],["/posts/8aa56fba.html","d22ec4dcce82e8d23eb4bb62adeab22b"],["/posts/8c1c015.html","f230c22d35d809595934e0b944d548a6"],["/posts/8de056bd.html","fadad58aef9d15da8965b00e04ac5044"],["/posts/9f1fd314.html","9551b0745a358c0e1778752aa4923473"],["/posts/a1c99550.html","21fee3ca9997ee7b7192840025a861a5"],["/posts/a40d3f0b.html","63c733f75a2bea9294aa58be677629ec"],["/posts/a67123d2.html","0e0601f66bde4d7c301f918749b628ee"],["/posts/a75738e6.html","48055fd21285b16adb18c80d9f6a18e5"],["/posts/aa9e0f69.html","2d672a2f14d5138cb4c666fc4c34213f"],["/posts/b30facc8.html","e1b8f010f0a57430827167d93e8e33d5"],["/posts/b390e62c.html","540c84a868fe8fc94b4642702e23f779"],["/posts/b6be7a76.html","85cced7668e39a76d3ab08dd348e5363"],["/posts/baa95f04.html","584e47917476e73177606c3acbc10f5a"],["/posts/c2f88e40.html","6dc0e623451cc15e0cb03eac2e856c06"],["/posts/cb15ae68.html","83a20e15b20f5fa97b57df392b156a18"],["/posts/d9f6770c.html","f0ad23c94f39cc459517c9383bad7270"],["/posts/e816fd63.html","b6dc8eb54917a85c2c761d97f3570892"],["/posts/ec6c5f44.html","dd4169c3787f57adbd3a2d89d1796c24"],["/posts/edf7ffc8.html","285e9d66f1c7a945a8cb9d230c43f0af"],["/posts/f48e37fa.html","46ff6677b7f58b552839251a058a5699"],["/posts/f85ddf3d.html","8087414d2a6b157863968509cfa40ee4"],["/sumire/index.html","02a13c387e55ca1a989d915ee49d0e8f"],["/sw-register.js","6dd13c8e6d35e610b15e74aa222aa7e0"],["/tags/API/index.html","52367cdf0fd320ec98d04885c982d935"],["/tags/ARPG/index.html","1da414afb57ee06638eeee6209d8a602"],["/tags/Alist/index.html","111b0caf804afd3129582167e6061bb2"],["/tags/C/index.html","1c8485869cb1bc6fef55be529a380c63"],["/tags/CSS/index.html","ddbb431cb20c33b4817fba8ede4672c2"],["/tags/C盘清理/index.html","fcddbb1db1ff669f698f839d224a91ac"],["/tags/FC2/index.html","2c325aeddc3ac139bddd4f497b9ace9a"],["/tags/MonoManager/index.html","e3cd339189c43cda8e2e8f85d6261485"],["/tags/Mono管理器/index.html","9a611733bda0cc19bb8ea4ba82d0c66f"],["/tags/Unity/index.html","c07946e12266c4d24f3e81363429e549"],["/tags/Unity/page/2/index.html","b20167186c5801723d774c4b9623b232"],["/tags/Unity/page/3/index.html","e0b8c4a62eb3009add93c559950cf53d"],["/tags/Unity/page/4/index.html","a2aeb72729661a7b48dadad1c5721b13"],["/tags/bbs/index.html","05cfe2f331ecc85187881b775799596c"],["/tags/docsify/index.html","0e909de05745a53244c7069da4562202"],["/tags/github/index.html","e8e78da8be505c741613625cf22c9616"],["/tags/index.html","76cc56df296ed741b0aad37e8160c474"],["/tags/javaScript/index.html","f94465f1cb25267610ca1085a5259b37"],["/tags/伤害检测/index.html","75aab3fa561aa362d1343b0013ceef3d"],["/tags/公告/index.html","80fe847247b36380ea54bfc045434e7d"],["/tags/前端/index.html","435f33f79b78341d4a5f3383146f855b"],["/tags/单例模式/index.html","0dae975aa11752138452c74ddd383646"],["/tags/学习/index.html","0c2838f0600814b0548ec9882ef3f5c6"],["/tags/对象池/index.html","ec499facdafcad02c2138b8ab296d7e6"],["/tags/怪物AI/index.html","0cc768265857d21908e2138224a38a6f"],["/tags/技能编辑器/index.html","214bb931fe3c54ca7aff4cf97c43a47b"],["/tags/拓展工具/index.html","82f753d22c0682eb2b295314ed973ce4"],["/tags/有限状态机/index.html","58fc4f7728f7e01a33a3b9d4f3bb9580"],["/tags/汉诺塔/index.html","aff3f97adcf4af3f13bfc15398301f53"],["/tags/游戏开发/index.html","988dd1d67931a3f66050bdc21219e7a7"],["/tags/游戏框架/index.html","5588b52db5347def351e83d7f5539439"],["/tags/游戏框架/page/2/index.html","5bf00958f9e84a77029a9779651eb47b"],["/tags/爬虫/index.html","64920657520ca864c4096a443e04649a"],["/tags/算法/index.html","540d0bcfe744465779da2dd77f82af8e"],["/tags/编程/index.html","d5fdcd0a09bbff91632470aa08cc0fc9"],["/tags/网站搭建/index.html","668806537889d956bb53239f05061bc0"],["/tags/行为树/index.html","09c07f74b6e61e4d428e85134da2f26f"],["/tags/输入系统/index.html","ed3927f426aef3a42f6bd1f04c18abdf"],["/tags/连招/index.html","4554168248e814eb65f0260926bf2840"],["/tags/连招思路/index.html","7f5d73bab3b391a52892d7534af87bcf"],["/tags/连招系统/index.html","77b4092338bcddc5c60f97e1ed874506"]];
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
