/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a60b05784c443bed44bf57113659ca4c"],["/archives/2024/10/index.html","813549ab8135fc2c1e4b366b1a50b4d2"],["/archives/2024/11/index.html","f2074f616f6f03a3d391ac3ca9d9f309"],["/archives/2024/12/index.html","4963a920f51109a1da47bc972b352313"],["/archives/2024/12/page/2/index.html","6ecaec672323770398be525a92d8c22d"],["/archives/2024/index.html","a60e2f815e1fdeb42b98f2b8ebd79ef0"],["/archives/2024/page/2/index.html","90bbbac978aec69452e0de2928892d32"],["/archives/2024/page/3/index.html","afeb535d3c453e1476bd9655bde7627e"],["/archives/2025/01/index.html","5066885c2c88053a3ca603ac6ef05c18"],["/archives/2025/01/page/2/index.html","aba304436805573e4a865dc65cd65938"],["/archives/2025/02/index.html","e80d88bb845af32fb0db1e385d5b1b19"],["/archives/2025/03/index.html","802caf93e9636ba9fa709dcee5e71184"],["/archives/2025/04/index.html","725cf125fae8fe603908a8d4f790e4a0"],["/archives/2025/07/index.html","957064742a0135772f5044e5b131bed5"],["/archives/2025/index.html","dab2ddc40ec01f47f1cdead504c79dae"],["/archives/2025/page/2/index.html","20a96dadc770a5fca601810a5e940f16"],["/archives/2025/page/3/index.html","795022afc28f723c231a3aea26a40bfa"],["/archives/2999/07/index.html","7e2eec9fe41233a2c72be7362897ca7b"],["/archives/2999/index.html","c9ee0774c34f239d3ab13690bc2e4076"],["/archives/index.html","f2ee09734a58cbd1149d76206902e694"],["/archives/page/2/index.html","8406aa692a5fd3c0778c252434f8ca77"],["/archives/page/3/index.html","a30e4b5bbf6e9d5628196d6bb282fdea"],["/archives/page/4/index.html","947ba9203690e605b3de38520f9b067d"],["/archives/page/5/index.html","67a8ea448320764923fb3988dcc346e7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Unity/index.html","6103c38c435b6aad4be967225ee9efe1"],["/categories/学习/index.html","c15c6651100f5fabe5c60cb72cfec7a6"],["/categories/学习/page/2/index.html","20363bd1dba65faa5a1b50720ad5908e"],["/categories/学习/page/3/index.html","15d83f9dd44d613df04b5bdc55de05f4"],["/categories/学习/page/4/index.html","36cf14bd107e241098f41ce7e22f8dec"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","4f4d31874f881c4e884e91b4b0f5ada6"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","98baac28ab19033e68381bb38f851447"],["/page/2/index.html","1454ae2efa91abbda056067a87752ac1"],["/page/3/index.html","2a992acfe7f36fb4e37859cd4c671098"],["/page/4/index.html","494f16034fb7cf6d21b21fe5938b0d3d"],["/page/5/index.html","2bdd8ac6b2cb0848c06bff4127425fe2"],["/posts/1008f769.html","462ee2f3ce1ca1c103c5322c71d1864c"],["/posts/10cc2d44.html","a9183130b65bc154b1dda2e57a40c5c9"],["/posts/113e835e.html","32c9c40f80f8ff585f96a6b8ae603779"],["/posts/159a8932.html","bbff5bd1b98a58e77d2665291aa842ce"],["/posts/24e1190f.html","8b33d321ba0761e14337c90c9bc5b21a"],["/posts/292422ce.html","a1de2bbfb0b51eba3024b118fb06798d"],["/posts/2c10891b.html","b7a5b7c2a95323c783bf9991d0f78dc3"],["/posts/3aeb9189.html","72f3686fc93040b3a067a93fe8876377"],["/posts/3bb2d0de.html","4a1088bc94ee6c481f041dad056b4419"],["/posts/473f11.html","71ecfe21012d0731d14ea8f29f542c49"],["/posts/4a18176f.html","8185a7bcfc4145e8b1808dcbd81cd5b4"],["/posts/4a6f70eb.html","a0bdc0860bf10c6a5ad3ccc640a181d1"],["/posts/501f2de6.html","ebfd2a8931c865a82ff38c3670340e6f"],["/posts/59f2b96e.html","e72db439a8fdca53f909f219a6db79d0"],["/posts/630e02a7.html","c1dd388c472cd30f6a8ea22d7c575204"],["/posts/66b94565.html","94a64867ac80c2c6f1c9269eb8fc19b9"],["/posts/6ef7598e.html","2bb1486e26b5852fde2156250f0b8e7d"],["/posts/72eba54.html","fb54286b0a23ad087f24223319c7e751"],["/posts/749c06c5.html","1269028953d5c6a6549f5948eef2ae37"],["/posts/77524bae.html","5462b4b45a49b226c1edfb2d0c2815cc"],["/posts/7779f102.html","24a76013703a374c2ddadcd19e7b3f27"],["/posts/78b2fcfe.html","9d8ce29db80beb4ff1d827814dbe0dc9"],["/posts/825fca5b.html","b2fc44324bae3ed489af9dce2d35d7a0"],["/posts/860f6e9a.html","6ef6a3e135fc69ff4c1918aeaa3affa8"],["/posts/8aa56fba.html","ace2ec999522ada37fe3f091cbc22b99"],["/posts/8c1c015.html","d610163a195ec4bee85c9afbad8e2149"],["/posts/8de056bd.html","b86737dc655e2fbd71008e9b84664d68"],["/posts/9f1fd314.html","23dd4f88604e1e8a2a577523ad79d816"],["/posts/a1c99550.html","7989613c6c9fe0825921202cbf5cee22"],["/posts/a40d3f0b.html","ea9e7e116623ec2b16d0b54f0eb8b2dd"],["/posts/a67123d2.html","cb0354702b41768b2230089685efdbf9"],["/posts/a75738e6.html","543118779824f42ad3e78137d969ed09"],["/posts/aa9e0f69.html","0de8511f7f3326e0702d1a3736f12f26"],["/posts/b30facc8.html","9943b7ea897ae0f7a450a458135882b4"],["/posts/b390e62c.html","4d460df9f4f4cc752d4df33e9ddb5b8f"],["/posts/b6be7a76.html","631318bf3098475b9d7310f698dc0b3b"],["/posts/baa95f04.html","8964edc4356369f193c91bf04b90d2db"],["/posts/c2f88e40.html","32001d9ed16012466fdb677226105ba2"],["/posts/cb15ae68.html","b01d67870c8f0ab823786c5ebfdbcd73"],["/posts/d9f6770c.html","5c01faf509ebac8f60005ac1aa97c6d8"],["/posts/e816fd63.html","99df38775eeba95c68f061227bbc6453"],["/posts/ec6c5f44.html","dedba38f21d5fa5491e24e74ff3e3698"],["/posts/edf7ffc8.html","d66c3ac63fce6d5349c05bcb950d2fa8"],["/posts/f48e37fa.html","b24a4687bb5136405e8748a31e480b38"],["/posts/f85ddf3d.html","53a91e3ce3d6dce009c552f8edd95220"],["/sw-register.js","8999f90d0a6972912a004b9ffd10bb05"],["/tags/API/index.html","c34e28f7a878d880af0ed99056d7fae4"],["/tags/ARPG/index.html","50d8f2a2f94330a5be0828b0e1dddc62"],["/tags/Alist/index.html","24ebab74c558c4a579be9c8ae6c43eac"],["/tags/C/index.html","3ac0a1db89d350bf36af0b5d9d81f801"],["/tags/CSS/index.html","6f838ac76f6d4fe1b67f85367995c74f"],["/tags/C盘清理/index.html","5d5d246d3669268aa75c293074134c5e"],["/tags/FC2/index.html","91b3fc25511fd8877804445c0113f974"],["/tags/MonoManager/index.html","e892382db51df28b9f10786e12755e23"],["/tags/Mono管理器/index.html","fdf8ddcfafb683b23f7ca8b44f1f2786"],["/tags/Unity/index.html","06f8ae3bc32af475d928c9f5d2325ce8"],["/tags/Unity/page/2/index.html","033d81aabdad5c5998bc8c7b737d3891"],["/tags/Unity/page/3/index.html","7a1b95265a1d63ca28f3a3c8e97343ed"],["/tags/Unity/page/4/index.html","7446653e55c751d207ed18690e9e4c54"],["/tags/bbs/index.html","d7fdea1a5b095f340a9fd849ff9186da"],["/tags/docsify/index.html","47498b46c3c0b53cf7146c62631ab7a1"],["/tags/github/index.html","748512ece7cc9e4ff616d3d0ad192a21"],["/tags/index.html","9d127a58b314a0fee12e859c844ffd7f"],["/tags/javaScript/index.html","f595ffdead1928a7f4cb035de574f4f7"],["/tags/伤害检测/index.html","1ca5fa60ff29521e880d74d6cdaf986b"],["/tags/公告/index.html","74b57964feee40fe2249795b051754de"],["/tags/前端/index.html","3cdd99251c68d29819b64967bcc80691"],["/tags/单例模式/index.html","bee92b449ac079629768758758a6fd8e"],["/tags/学习/index.html","2ae4a9e4317e91ea481162af34443456"],["/tags/对象池/index.html","594f410aa726b24ae4322192ee410d05"],["/tags/怪物AI/index.html","2113111663d3f4a3698551f753f665e1"],["/tags/技能编辑器/index.html","6db791f79a5fc425a8f2ddb1c798cfc5"],["/tags/拓展工具/index.html","c574ee2efb61dab01044389d73f2fc9a"],["/tags/有限状态机/index.html","26b454050256a468b2dcae02a0572567"],["/tags/汉诺塔/index.html","ee237eaccf61d3337f6c90a93cc3f3b8"],["/tags/游戏开发/index.html","13a92713c900ebd54aec796874374811"],["/tags/游戏框架/index.html","f17cce29944d95a9d373ffa253d8a56a"],["/tags/游戏框架/page/2/index.html","a6a86198d9ae82c3415de9ef2de66ed8"],["/tags/爬虫/index.html","e5eccf7c532f4f415e643b3db019c892"],["/tags/算法/index.html","3ff61e8a835e4aa29dfde10ba6f4aca2"],["/tags/编程/index.html","7fc7626fcff0ca6595c5d04b2d105a33"],["/tags/网站搭建/index.html","8bd31882b89b8a951c9bdb78ffdf3274"],["/tags/行为树/index.html","3a7af0975d8176c13a8b34a5f3e2855c"],["/tags/输入系统/index.html","8ec7d73e878acffb14e90601fc93d242"],["/tags/连招/index.html","87f656b578815a472c332a2a824bcf10"],["/tags/连招思路/index.html","ae32132c17179b5af11c4310b67f1540"],["/tags/连招系统/index.html","62a678652eb90f358ca4326f61bb53d9"]];
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
