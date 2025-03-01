/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","b35fdacde2e292d438f51db1ae67a246"],["/archives/2024/04/index.html","c8669c21f43ab91ae6913c5c3eae2fc3"],["/archives/2024/index.html","809b277ef1cecf36f6d2ea8fe2da4cc0"],["/archives/2025/02/index.html","67e603afeb6cb9572565ca81f1d445a5"],["/archives/2025/02/page/2/index.html","4dfe3b04e32b3cdc505a08ee2f553db6"],["/archives/2025/02/page/3/index.html","2111d04325b5d2a87613e3a966f67323"],["/archives/2025/02/page/4/index.html","c18257a317e29642f4455ce1e5fef936"],["/archives/2025/02/page/5/index.html","1e1b526ae5d5d7cb6aafeeadce449f52"],["/archives/2025/03/index.html","feaa575882310cb260a82444400f0eba"],["/archives/2025/09/index.html","d188785f93c1ae3bb0755a1c2f15a523"],["/archives/2025/index.html","8fcd538704607a607755b1a40613cd8e"],["/archives/2025/page/2/index.html","b69e3a158916cccac701324a63f393ee"],["/archives/2025/page/3/index.html","4faa948168de0dd0cebb7624fef4bef5"],["/archives/2025/page/4/index.html","184156b1a112924fc17268769b7567d0"],["/archives/2025/page/5/index.html","bf8ba25db8497a3d8ade49bf279deb09"],["/archives/2025/page/6/index.html","0879d941f3f2098024711662e156642c"],["/archives/2026/02/index.html","34aaed383adaa988af4fc6aa1e82f1cf"],["/archives/2026/index.html","137f9d1d0f38ff199dd92ece8374508d"],["/archives/2925/01/index.html","bd35bc7b0a469b9e726264cd8e72a286"],["/archives/2925/index.html","0f3069b0ec8aa2bdbfefffcf7ae22afc"],["/archives/index.html","c990c150c232c9563a96bb7c4347839a"],["/archives/page/2/index.html","9849445a4851fda4c289049abb6499f1"],["/archives/page/3/index.html","438f334386cce5b46b74161965d74098"],["/archives/page/4/index.html","9dbca9093dc46fea18ea4d4dfa7c266f"],["/archives/page/5/index.html","ca9a9c980a207f01ecc9ebccee7d31b5"],["/archives/page/6/index.html","f8458f5ed53cb2dccb28e9614a71aad3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","a1168f7dc7140fd655d69af3b6b4ffe2"],["/categories/galgame/page/2/index.html","e8eb8dd3c3adec5d634d0d2416d35ac3"],["/categories/公告/index.html","47aebf1dd52a3760e3f4a6d575062cbd"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","29a11414f97da656bf89182cd7993218"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","f03af056d07c9144f3cb3e336502bdd7"],["/page/2/index.html","cb201ac4027dda662cfffc3bc744a544"],["/page/3/index.html","fd7b7ca81143403752624e8b50e72755"],["/page/4/index.html","066b021eba122d1fe62a639aac4524c6"],["/page/5/index.html","35bb35c140cba28ebc4ff0a06d0813a2"],["/page/6/index.html","f1c82b0581f855098485f4841498e0a6"],["/posts/10c9dd98.html","420873ede4c8d7c8fac1fea62a4b60f0"],["/posts/1370342.html","6670f76db01ff1a94719be3f84bb82be"],["/posts/15ef14c2.html","b03f02e2d9e4206149b6962c73983801"],["/posts/15f3959d.html","ea417e909e202b11f27cd5330301e5ab"],["/posts/18ab785d.html","063ba450eebb5548d03d8beb8e499d10"],["/posts/1d59b71f.html","85418c59a9ee7fa1c2a8f62d0d7c00c0"],["/posts/20b3f3a4.html","e79ed43b219f317b35af881a95e38990"],["/posts/28397adc.html","b306fd4f3354936c97570a37a1cb5b48"],["/posts/2cf620f0.html","b3e8d73eb8c218a466d49767a421df01"],["/posts/303007ad.html","653fc9c9a724c57eb02a56159771b8a7"],["/posts/3f7d823a.html","e9b0ba2190c78c22047c9306ab4b7ab5"],["/posts/44124a6b.html","71865d1b1fcfd10fc771618dd32a5099"],["/posts/4b689be3.html","f8328e251d84f31bcde350dbb708d60c"],["/posts/4cf8423f.html","c4780678682112f3dda75adcd35301f7"],["/posts/4dcf85c.html","d63da66716b569bbbaa2ec92c5ea9403"],["/posts/51c9b1ff.html","9dd37202faeb4b40e616039d06b52a13"],["/posts/52b5b3c6.html","8ccb87c28b8ab0c4bd1aff32f8ec9897"],["/posts/5f6e0c59.html","abbb2e73b06700ab6573b98e1c9e1881"],["/posts/6432d61a.html","14b5cfc14c953712e3ede240ecd6aec1"],["/posts/6515f032.html","57e2e96fa55b169bffb52c4505ab73ef"],["/posts/71131d34.html","f1eca7a279389a6eb8738069f842b516"],["/posts/78a8a8d3.html","c44bba13e8596a27867cf97156932ec7"],["/posts/7e3aa3e2.html","309457ac6e1d0f8be0e55f13c6b9fc3b"],["/posts/80fe2691.html","77a9a1fd19628f4375f0ba2891863240"],["/posts/81ac52e9.html","4fd7e4d51264527903c33d3a00b33fec"],["/posts/886f8d3.html","cd9829a2194d6434825cb44d0a2f8fcc"],["/posts/8dd520d9.html","c06eeb3924ea917eef13fe7d2b46a611"],["/posts/8f555654.html","5b6315bacf2a222e593d8013b5e40fbe"],["/posts/92a980c2.html","cb78fbbae86da4c07d608c5167912022"],["/posts/94d3c794.html","40a3dd831c9094fb2712ee49a0eaaa75"],["/posts/97f50eea.html","24cc8b1dab367c03ad13441149b3ff7b"],["/posts/98662d05.html","5c428088f08f0c4264dde21f52ca9232"],["/posts/9a2f6162.html","1cca0c986df7221fdb922f4b51bb52f2"],["/posts/9b22a48d.html","985bba09ed55d6e351fb7de67c40f724"],["/posts/9cb455b1.html","71fa143a2bab9dc57349be236f88bd62"],["/posts/9f61c1a0.html","dcd75af2452efea2e88c1b16fb1f35d7"],["/posts/b497b647.html","4612d6998eb948759e34232b77ffbbc4"],["/posts/b5fb773f.html","cc766b5f09d34630236c0d6423c948d4"],["/posts/b8d46b32.html","1a85fc67a6ca183f391e9ec7e4861557"],["/posts/c1b2c6c9.html","6ac32aadc819e18740f2d950deb0dc79"],["/posts/c316c2e8.html","8ac63db780eeb8a9136f8cc72152013e"],["/posts/c497a412.html","e8726e076cd7c2535d7341a2d8cebe3c"],["/posts/c5de299a.html","76c80fb3f0d9e631053a8222a23a2267"],["/posts/c70bba9c.html","fe67a1e0295f9213d8a05ba6f8638b1a"],["/posts/cbebef2b.html","0828afd61b82bb2c84768950c8b2dd0e"],["/posts/ce25023e.html","01a5a6406578f6cd30fa0f41268627e4"],["/posts/d2fd4837.html","ed56f467bd5e13d173b9b908f89be403"],["/posts/d3a745a8.html","0ef014273b4cd1393bc571cd9928b7bd"],["/posts/e3ab6ad8.html","f699df7da9e0f54d511e49535640224e"],["/posts/e5018da6.html","3d6c512448a6951111bdc975a57f2569"],["/posts/e624b065.html","0d69bd2281746ea183eaf202d71a5c29"],["/posts/e91abb63.html","a303a0cc5439af8b6a641a352b036327"],["/posts/ee1ed673.html","7a1c541d809383bf43a1caa57cf9caa4"],["/posts/f230b0fd.html","d05f3495e0ee9e2012efe52c400c1c90"],["/posts/fc04d0d4.html","bdd3284f2e92405896383d3da6b32fb7"],["/sumire/index.html","b2f101d5bec7c3138bc8c43b63e757ec"],["/sw-register.js","9aba8bf393083fe05f16e096f897f62e"],["/tags/CHUNSOFT/index.html","f25373de05c74f83b83b3b59b5c55d53"],["/tags/Circle-Mebius/index.html","bf27a4ec41879425f66fbe4dcd84ad36"],["/tags/Omegaの視界/index.html","8c4af9f28edb041f51b99db8ffbac3a0"],["/tags/PC88/index.html","45585a97575a99d008fe77ecec408f8e"],["/tags/Witch/index.html","05a44e1b99cf808d588bd5cc3c0c8d10"],["/tags/galgame/index.html","5b1efb8f2c54608b731ad22973bd170b"],["/tags/galgame/page/2/index.html","af4929a6800d16d36e288057f45f1d88"],["/tags/gal资源/index.html","95a4b2cb959825342564b3557de7b2ba"],["/tags/gal资源/page/2/index.html","b1385a5567ea6c9d1650c36dd093c4b9"],["/tags/gal资源/page/3/index.html","a5ae893ff91bfff2b9c731be8bc5e7d8"],["/tags/gal资源/page/4/index.html","108f0c6a98c4c4d866fa2b3640aa1ebd"],["/tags/index.html","db1d1bffb3230d36d501a75430d813b2"],["/tags/rkr/index.html","6573163a978b392c2709469b2a9553e5"],["/tags/ねこねこソフト/index.html","d35b351f9165ed62819e327fe932be6b"],["/tags/ねこバナナ/index.html","f583ba06fb9a15ee2e4cb3a52ab7dc2c"],["/tags/停产/index.html","e9fb3961698d9088aed78cb48bca947e"],["/tags/公告/index.html","2f85462643046979b26af48aa1a4f017"],["/tags/同人/index.html","7d3258d95a9db544a8338566756f6b52"],["/tags/堀井雄二/index.html","0ad1978bb93a4744f2d9515a73084782"],["/tags/已停产/index.html","ea242757bab5cbac12989d8985fe59b4"],["/tags/水仙/index.html","dc3058ad71df1e45f60d62366cf3b455"],["/tags/片冈智/index.html","89d6d9fd50480fcf270d92722013f940"],["/tags/猫猫社/index.html","6aa4181405b6b6a1c2aae7206d1c6c40"],["/tags/画集/index.html","b895c30c205a7592ac59467b2d980880"],["/tags/閂夜明/index.html","d1ae7232091cbaecc9df8a41a3ed738f"]];
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
