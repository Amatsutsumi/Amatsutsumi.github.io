/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c482a9240ce7ae0a720bfa310186e6b6"],["/archives/2024/04/index.html","9e90a008f2b9f267f7a5176e792d43e9"],["/archives/2024/index.html","d786a29f6c1ed63ad3bcafd9198d2f1f"],["/archives/2025/02/index.html","14d6dc5879ae3afca74aa2517cdc7df1"],["/archives/2025/02/page/2/index.html","11315b025348a29f54b0bbb34c4676a3"],["/archives/2025/02/page/3/index.html","4009a870eea8e15fe620bb4f10704981"],["/archives/2025/02/page/4/index.html","dd931469385820d433b34e42a2b0d8d0"],["/archives/2025/02/page/5/index.html","7cb4af39bb5b49a93006dfdde4dce0d8"],["/archives/2025/09/index.html","28cd0597a7bc7114e4ee9c87b19157a2"],["/archives/2025/index.html","6583392b6ee8f75a945217f2cc4a86e1"],["/archives/2025/page/2/index.html","6d5a3ebb4f900ac83be17735244046e7"],["/archives/2025/page/3/index.html","c9e1ef2d5f166b2c1b1ad3921239453c"],["/archives/2025/page/4/index.html","d68239eeeed8f567add0fac0cb844f22"],["/archives/2025/page/5/index.html","feef28df1cb4ddc0a2f14c18345f5881"],["/archives/2025/page/6/index.html","c55f491fb6cb1d5675651bf63ba219e8"],["/archives/2026/02/index.html","0ef0faf091e367cc277280f612ab9bd8"],["/archives/2026/03/index.html","7a6782c59993b9ad040974ffd74d0454"],["/archives/2026/index.html","2ae49e34a9795667d9691e9ae4fb1d87"],["/archives/2925/01/index.html","8c91c400501d0949bc0cf101620aa905"],["/archives/2925/index.html","2a56d25590c2bac74619ab34982895c3"],["/archives/index.html","5b33ffc1468a0f73cdc5967529d8ba2f"],["/archives/page/2/index.html","a5bb5a7bad0e034e3f9b52d9cdc4dbf2"],["/archives/page/3/index.html","4feaab60cc520e5213b4bcec3b6724c6"],["/archives/page/4/index.html","140d7495198f905949dbdb2ae74ca683"],["/archives/page/5/index.html","7861fe3aaae26ef72653c9f160a1f8e9"],["/archives/page/6/index.html","d879c5001c8b72a8dfa0b401ba3c1fd2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","7f5ffbdcee471e2a7fe9aa41d724811e"],["/categories/galgame/page/2/index.html","1ae81e241bda50f08d230cd73a6486d2"],["/categories/公告/index.html","ed643a3f3d2f08404f5456b3c861ab52"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","7fbea17bca42f9c09c53faba894ba795"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","47b84fd6f114075169499a048deebd3f"],["/page/2/index.html","d1d204a5290fa18e1197527d7dce71ad"],["/page/3/index.html","1305f884e3c23fb69bb51f6cf1fd1328"],["/page/4/index.html","db62264816d56cff2349e2efbb2deb5f"],["/page/5/index.html","1fc1d695e3e735d681589bd7caf6df02"],["/page/6/index.html","5260d4d393611550187c741308767ec2"],["/posts/10c9dd98.html","c0933188e19a2732e41c083014390b5a"],["/posts/1370342.html","b76635ccc011452030460d0837809743"],["/posts/15ef14c2.html","11dc4056b4e3ec5a3314620a7134b051"],["/posts/15f3959d.html","bd8a571da6b01739019f67f52a3f9724"],["/posts/18ab785d.html","b93294457c9c43850b088d1fc3f1d2b3"],["/posts/1d59b71f.html","7cedcff23ea36f36eeeb42ce2663d088"],["/posts/20b3f3a4.html","4635a24be7e070e247c5273beb72ece9"],["/posts/28397adc.html","2fd0c38e6c65d61522e77c63537c4c75"],["/posts/2cf620f0.html","d45c574eeb9423e9df4cf4073ff5de0f"],["/posts/303007ad.html","fd0d4ae2a328e780506f1c22d002c2b7"],["/posts/3f7d823a.html","552ed9fe37a416e82dc7c4a8b0677609"],["/posts/44124a6b.html","e3d64a37e42d0de8268a82c7cd2bdefe"],["/posts/4b689be3.html","ab4523463d3e3181c76375350c55125c"],["/posts/4cf8423f.html","278a3d6df7d25bd2c1b1b277a2d8bcdd"],["/posts/4dcf85c.html","d909a37036c017471ed32bef4313d225"],["/posts/51c9b1ff.html","79edc7429e1dedd389c4045da0e7f513"],["/posts/52b5b3c6.html","cacc8876994a966361cb2c8eaf0f5625"],["/posts/5f6e0c59.html","ec03afdc45645ef2157a6b077febbffa"],["/posts/6432d61a.html","37525cf90c6ee7c37d619d93645c33ad"],["/posts/6515f032.html","f56329eb5146f382fa250b6a95fa5d10"],["/posts/71131d34.html","31dd11245f1327627eb3ce2bd69b64bf"],["/posts/78a8a8d3.html","701ae0ee75db2384eec94b736bc5fd7f"],["/posts/7e3aa3e2.html","d12e1271774f43b55c627a8f31b29c11"],["/posts/80fe2691.html","57a1a7ce2aefbf554d359afa3ff5f558"],["/posts/81ac52e9.html","8e6efecae599f7a74b189676eee8a84d"],["/posts/886f8d3.html","3b1f9ee4367749eb601bdbc61ee6c6ba"],["/posts/8dd520d9.html","8aad18f3e29d36a8ab8812deb3d51218"],["/posts/8f555654.html","858c8f4676ab46277c5dfab682613273"],["/posts/92a980c2.html","4a7b4aedd315aee21813018e1e3301bf"],["/posts/94d3c794.html","3b8b069388e78cd9273c79dbeab08f51"],["/posts/97f50eea.html","7c1f017c8e5be301cefe01a75fd776f2"],["/posts/98662d05.html","3224abfddb47220f19d288a700bcc59f"],["/posts/9a2f6162.html","a341af7dc9a68a0f3754577c8fcd95c6"],["/posts/9b22a48d.html","85fee6b7f77b927971792ebf0d5740ae"],["/posts/9cb455b1.html","d560fe306514eaae551107235287c3ea"],["/posts/9f61c1a0.html","562ac13e82885b04abb83db38d52d753"],["/posts/b497b647.html","d46016b439568320a35a1fafa25ae287"],["/posts/b5fb773f.html","4cfa15f6650aedc650a1b2a45e0b464a"],["/posts/b8d46b32.html","4226dee7a508b2c5560013211654a781"],["/posts/c1b2c6c9.html","6a33b19d6d3b57c58e54458b4b282706"],["/posts/c316c2e8.html","f5f5ba0df65b0eab60eb0e711c51d603"],["/posts/c497a412.html","06621ad9de8eeb0fcb4336db099513be"],["/posts/c5de299a.html","514c162f10e3e71ed8ecf7d95464b40d"],["/posts/c70bba9c.html","1866ec5455b2d2356337afd2665ea140"],["/posts/cbebef2b.html","e006a84855d78ab530b468cad44b1f3d"],["/posts/ce25023e.html","f29b43457b187b8cdb3c82468872e5b4"],["/posts/d2fd4837.html","626c8a891db38820ba5ad91c5b20a7c5"],["/posts/d3a745a8.html","8d241b91d96913b53711802e44c6b4b4"],["/posts/e3ab6ad8.html","5d683a4a5cad70abf429e87645dcdbe1"],["/posts/e5018da6.html","3c38689e605195cc69921b38d6a4eaa2"],["/posts/e91abb63.html","8abc28db9fb4c5611d417c443c5153ea"],["/posts/ee1ed673.html","59f791406414b3b48e8c928245f64523"],["/posts/f230b0fd.html","d95dfb914ea7e4fcf82e42e9b91412f1"],["/posts/fc04d0d4.html","882787e915ecb3c32ed6d4f530de3dce"],["/sumire/index.html","05ca3343de3135b189a6fde83ad01778"],["/sw-register.js","d1dff5d8686e21c729290d8b125272bf"],["/tags/CHUNSOFT/index.html","347e66d2b52ae47a9947cf312125ef6e"],["/tags/Circle-Mebius/index.html","ea1fdadd7159c4ce3c8c1396aee6edc2"],["/tags/Omegaの視界/index.html","9ca39324770954c78b2cb32ec379132e"],["/tags/PC88/index.html","080b30f33369184b3918b20281c43c3a"],["/tags/Witch/index.html","299e035630ceae8890b75d816febd626"],["/tags/galgame/index.html","649af3ceff68bf6d3c1ad7d3aa4534aa"],["/tags/galgame/page/2/index.html","1334784fefa7f41790ca2b74f11c34b7"],["/tags/gal资源/index.html","e245377ef966554183e5f27ac07c910c"],["/tags/gal资源/page/2/index.html","9b6cc58ace88fcf333618ad9ff2ae267"],["/tags/gal资源/page/3/index.html","120cfe4b8d3a3eeb0c8557f8ac977f95"],["/tags/gal资源/page/4/index.html","34163d07a0e9ea05fec9d885af75de6b"],["/tags/index.html","82cca62c947296b8524a752362f9aff7"],["/tags/rkr/index.html","55efb155e6230e92adcb54a31331da3e"],["/tags/ねこねこソフト/index.html","c943084e0061fcbb1457f080eededa12"],["/tags/ねこバナナ/index.html","09dbf5023fbe9ee4258c71106e2df250"],["/tags/停产/index.html","5393e51a8b9d77ee8c19f53db02c813a"],["/tags/公告/index.html","4f136c70212bf971e9d0f232a23365a5"],["/tags/同人/index.html","a518c4a4b453438551daf661966a9220"],["/tags/堀井雄二/index.html","9bac776d1dfeaedc1e5536d7074348c3"],["/tags/已停产/index.html","ca265babee8965c1e153faa76d660dd7"],["/tags/水仙/index.html","9936ea55bff3519bdcce43399cdd936c"],["/tags/片冈智/index.html","368219fdb216d3baaf8232f59f325dc1"],["/tags/猫猫社/index.html","448a4e67cfc321622aa940a83309260e"],["/tags/画集/index.html","160185a1ce10c7bb6200e9bd49cc36ad"],["/tags/閂夜明/index.html","1867c82942eab1e76a20b5efb928b32e"]];
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
