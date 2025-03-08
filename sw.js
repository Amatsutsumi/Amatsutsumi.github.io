/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","1e076d751dadbb7e9d5cd42593eb9614"],["/archives/2024/04/index.html","0adc68362756cf4ece94b283651c4138"],["/archives/2024/index.html","f3f9dfb5a3897e937ceb3e610a15dcfa"],["/archives/2025/02/index.html","4e871b2719646740bf2477e0b741300b"],["/archives/2025/02/page/2/index.html","8e3ccd50777664d685b85cbf2f9ad07d"],["/archives/2025/02/page/3/index.html","40ca00b5f8ab61cd17bb3bcecfef265b"],["/archives/2025/02/page/4/index.html","43a2c1b819ccd2da4b8123302c56d526"],["/archives/2025/02/page/5/index.html","02fbc7b9fb8d9309c48bcbd2b8871fdd"],["/archives/2025/03/index.html","78f60e222f2f92c6e70e352dce20b024"],["/archives/2025/03/page/2/index.html","d63ad831a9bd58130d0dfff33af28d88"],["/archives/2025/index.html","557bf33bf560073159ef76b91aa1b7ae"],["/archives/2025/page/2/index.html","32ef320cd5a6ee9850101c3521920ef2"],["/archives/2025/page/3/index.html","311de6ccce99ce8b0a12646c2919d58c"],["/archives/2025/page/4/index.html","10f371e1327ad139a8e5075d59758583"],["/archives/2025/page/5/index.html","e5c2b5f047fa76e084b461202886c109"],["/archives/2025/page/6/index.html","f2c0da75766ea966d5197554b34ee23c"],["/archives/2025/page/7/index.html","912ba04760a55745bcba462fbd8042ff"],["/archives/2026/02/index.html","164364fec39c0d65a6dfd9aaf4a6db7c"],["/archives/2026/index.html","47754f0bfebd7ac7edde6d9d46c33211"],["/archives/2925/01/index.html","d522ef35d31f0f5d1fee4b4247824f26"],["/archives/2925/index.html","218e42a20853787e5a69dd2a238c8d8e"],["/archives/index.html","5258b44f0fe5ad9a4469bc03f79a60b9"],["/archives/page/2/index.html","efe02ba618414109310a661be17cd7d3"],["/archives/page/3/index.html","3aa5a73f834e68e2a4c4531b5be5d4a0"],["/archives/page/4/index.html","e78d7907ad0f6d301b176a97f5c42413"],["/archives/page/5/index.html","c8e27af49d3e22259be1758dfc54ac3e"],["/archives/page/6/index.html","ee39ab754fbb3aff1b033a5470f32668"],["/archives/page/7/index.html","42886d2dedf861c33414b11874f79840"],["/archives/page/8/index.html","34eed227af09b3ea373e5ee7b36288de"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","ea05c665d913e69ca6a88595fe582edc"],["/categories/galgame/page/2/index.html","fd68e8177e75caaa2219db60480aeb36"],["/categories/公告/index.html","518b580be09dc236d74ddf2d3b4c2915"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","f7af54e34297274df2c9a5716d786345"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","0241e819767b3d0198e39c9da372b840"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","2773a759ba8fe5ca95d28ea9b56f90d4"],["/page/2/index.html","17d1f60dc875c267cb3036f16746d3d4"],["/page/3/index.html","8fb700ee706e9bfc5c8cbd5d91294c7c"],["/page/4/index.html","11e03398c0fefe578e055eba028bbe5b"],["/page/5/index.html","25c43b132e7f57099f8b2f783f61efb4"],["/page/6/index.html","d5c0dd7c8e9d6c9c3f36cd568adb4815"],["/page/7/index.html","af242f88f375cf773c7704b79d91c93f"],["/page/8/index.html","328dde0e9c389475155f3c5365f762ee"],["/posts/10c9dd98.html","2857739fe470149862ced2b0796af856"],["/posts/1370342.html","feb6bf7ed22d70ea012daec013a34b7e"],["/posts/15ef14c2.html","5d61917528015514057186e8282b9ac3"],["/posts/15f3959d.html","4a8f5db7c66c95eebf8ec8b4799b0db1"],["/posts/18ab785d.html","c159c5e19a680dba22f7d4ed3dd5b9d3"],["/posts/1d59b71f.html","0ab0733fd028761dd35ef42288a27036"],["/posts/20b3f3a4.html","64430c4a17449cbb3eb07cdabdce864e"],["/posts/245f1c7d.html","18fb9757c02aea2c2b69e7703a5e7c4b"],["/posts/252658f.html","940c939da7454b048942423bee0b4df8"],["/posts/28397adc.html","ed762ffa4307c96ef04cab5718d292ee"],["/posts/2c0a6836.html","0cf4c83b426d1a5052b6bafb690ca0a5"],["/posts/2cf620f0.html","f4973c939f03e2f2031f22dd2cb9b5dc"],["/posts/2e30fd6d.html","fb464d9f4684bca524649d0350f9cf98"],["/posts/3f7d823a.html","81e3d22db48f587d0100bc4d9d984c10"],["/posts/44124a6b.html","afb364ccc33b9133774f6d11dbdda89c"],["/posts/47abb61d.html","5327eef7ab039ab9c5339e0494bb81a0"],["/posts/4b689be3.html","eb95af9aa1798e6ca57811213a422a6c"],["/posts/4cf8423f.html","f6fe2eefdff982db0da496cab77a88eb"],["/posts/4dcf85c.html","a501bd95a3408699649d7dbf69acce9e"],["/posts/500cd322.html","ef628c4fd4d7da6adf82dfa8ce6e3abf"],["/posts/51c9b1ff.html","75ac53ac02b1442fb6821589d0fb41e9"],["/posts/52b5b3c6.html","da4b29ca40dcad1b505d28715ef5971d"],["/posts/5f6e0c59.html","7cc9dfe6c20b8c15b283d033ca0da1d4"],["/posts/6336a2f9.html","87fb9d97f99911958aa7f3d66acb490a"],["/posts/6432d61a.html","6a774ba06ff947e1d85555c412d5de82"],["/posts/6515f032.html","5456c75be7cca1d793eb6833ee9aa8d1"],["/posts/6720ccdd.html","be2957cb32cbcf9623fa5ae4e22492d8"],["/posts/6a4b5ac8.html","55ab6661a673b8a2bf04edc7037739c7"],["/posts/6aa4177c.html","e2c1f4873d8aeba3a9f056f65721e00b"],["/posts/6b15f81f.html","5b4677f207b8842ea79b0345cc435595"],["/posts/71131d34.html","efcf305625626561c57df293acd32215"],["/posts/78a8a8d3.html","d06efc3a9e42b5f97a7c603440422a66"],["/posts/7b41e1ac.html","3382d24bb75ce58c6aa5164e0afc76cf"],["/posts/7e3aa3e2.html","4d14a7e36afbb7281d8ba9ac88d88019"],["/posts/80fe2691.html","2f66ccd951ae16904def34833f31773b"],["/posts/81ac52e9.html","cccdc5c94f916c8cbe090cf4d001fa1c"],["/posts/849b40f8.html","cc0da7052445da673d3e55577a020fa5"],["/posts/85c51d68.html","e7baf9da0d7ef0839f53846bb7f5c40f"],["/posts/886f8d3.html","3e054687c2c0764dc30d3bcbe1fbebc9"],["/posts/8ac11b41.html","489d1bbecb59be70b9d7a1aecfe349f2"],["/posts/8dd520d9.html","649c27f03516a0e61b2cc1c3b435938e"],["/posts/8f555654.html","f71e04d6f64c0404bb6002d1186380f2"],["/posts/92a980c2.html","064277f42b67068767d378c3338406ab"],["/posts/94d3c794.html","129fcc8f1bd7da4ad6aa500fff1a7010"],["/posts/97f50eea.html","f9bc420312dffcc5b24d530d6233c11d"],["/posts/98662d05.html","e3b28da2b34768be6e64cf4bab8fed55"],["/posts/9a2f6162.html","3d246e8d4d7bd399b80e5fcf4fb24dda"],["/posts/9b22a48d.html","15c0003adc1803e310280364c2ee2070"],["/posts/9cb455b1.html","0e66ff862e4e7cb57b3cf55622d7b02f"],["/posts/9f61c1a0.html","72281da71010c93e60f6538d8b690b57"],["/posts/b497b647.html","d3c347a14a27ccff18edf276cfc9369c"],["/posts/b5fb773f.html","48ee8c80b0136df4006851628ad558ed"],["/posts/b8d46b32.html","f02e46587e13fc4a6d7000946b278348"],["/posts/c1b2c6c9.html","b213ff4bf40a2dba0751b22b20007a24"],["/posts/c2111cbf.html","5d3878b9acb0d806efa6c9cc4ae6f1c0"],["/posts/c316c2e8.html","bcd644aeb5cac61192bd796a3ee5593f"],["/posts/c497a412.html","8facd1a6631f8817c59b89925a0e759a"],["/posts/c5de299a.html","824c32e5ba9f8085a6d3e32c12c56b6e"],["/posts/c70bba9c.html","5a7d0f4a4690e03065208dd0e3a5478b"],["/posts/cae2c959.html","51bf3b7b886d89f7cb289b1f611a708d"],["/posts/cbebef2b.html","8af7b109fc90f54abe7f54f85786f078"],["/posts/ce25023e.html","d09d59ce92caebeb0dc6caf96e51545b"],["/posts/d2fd4837.html","05b9084ecf044551f1c698e867e070bc"],["/posts/d3a745a8.html","6a34bd829645a26241afcb5cee6cd178"],["/posts/e3ab6ad8.html","8b5507a51fea4fa38c269b4cbb7d97f0"],["/posts/e5018da6.html","5b8229e5bff2dd463d32f1c4d3b9737d"],["/posts/e5963272.html","455fafa703e8420c2a8a2bd22bd4904b"],["/posts/e624b065.html","b610732ea8e68106a89193570b74cb33"],["/posts/e91abb63.html","7d5ffbf835eb4dc68d9b45e13b5d471b"],["/posts/ee1ed673.html","679f2e3ddfada53babe8e13d677ddb3f"],["/posts/f21e7f84.html","5e452e5e1572362c807e2b96de2fd07f"],["/posts/f230b0fd.html","ec45974ada70ac354f872cb851e1da47"],["/posts/fc04d0d4.html","25bda21906d370424db74f9a9acf397c"],["/sumire/index.html","bb80f08336ef892016d77ce1bb742553"],["/sw-register.js","17e233572f42d7c43eb1a7a1cb095be2"],["/tags/BL-Game/index.html","0d721222ff5d4a867ff69aff6274f4c2"],["/tags/CHUNSOFT/index.html","49a95ec37dfbf61fc90f8ca79f361450"],["/tags/Cherry-Pie/index.html","5edf617bc8cab8499615dc4dce021497"],["/tags/Circle-Mebius/index.html","94cb050b070d1a21b1ffd667de1fd0c4"],["/tags/Dopamine-Software/index.html","4b541c9916cd807fc8eaf897defae087"],["/tags/Dos/index.html","f1df87557713a2b13554f28c18810913"],["/tags/Kanon/index.html","14046b5c7e4f5a0efbd77cb26d1e7331"],["/tags/MANATSU-8/index.html","8bcfa210bffdcb15015c14ccbf2b756d"],["/tags/O-S-I/index.html","7c614cbcbf3e8f3d3b608b355584d0c1"],["/tags/Omegaの視界/index.html","2bc0a54f93a434644e9b8c233a57871e"],["/tags/PC88/index.html","19fc3e8d9997f7263d9da777368f474d"],["/tags/PC98/index.html","10f397bd4ca8733ce2fa482e249bd653"],["/tags/Pleiades-Company/index.html","9669eee165c86434992068dd0d41a5ae"],["/tags/ToHeart/index.html","85ce9de2fd76a4b7f52944d093d04846"],["/tags/Traumend/index.html","c683770e30b3c3c4fdfa4f8178cb01d0"],["/tags/Witch/index.html","7b6c2b4b19939de1cd342ee2d949e948"],["/tags/flash/index.html","f97948d01d4a41808aba2fe538390d6a"],["/tags/galgame/index.html","8b55102ab45009eb486b878b8215339d"],["/tags/galgame/page/2/index.html","73b5022b6c869802f17203ab92483faf"],["/tags/gal资源/index.html","9873c17424e0c8bd8a5c36e72fd3c288"],["/tags/gal资源/page/2/index.html","335c058121ea89ddf4cab02b5b128a5a"],["/tags/gal资源/page/3/index.html","12620eadfb5e100aee2dd8859a13cec3"],["/tags/index.html","15dad26fbbdc30d3d071421ebac92eb3"],["/tags/rkr/index.html","7c52bcf62c8685926d5fda7869bc12b9"],["/tags/team-eye-mask/index.html","c556085187d6e89849d91a693e08e94b"],["/tags/いつものところ/index.html","2559302881c1486f73e10b4ec2a91be9"],["/tags/ねこねこソフト/index.html","2a2760835718b5086be26536060b9d09"],["/tags/ねこバナナ/index.html","5a65b3b4a4533e31d6a5a149440dda40"],["/tags/停产/index.html","dfc0c628dadcfdcc89b91ad778e06b0a"],["/tags/公告/index.html","4a1d7d8d7f4e60cc22fe55f3d980a66b"],["/tags/同人/index.html","27d0fe242ebbd5eb5408d3b8fad326f2"],["/tags/堀井雄二/index.html","1cad5fe8cdd97308994f18eaee58dc8f"],["/tags/外海なおき/index.html","f33b69ba94b13c23339d38e8446a20be"],["/tags/水仙/index.html","6714f315f323f0405bb4a2d957d8afae"],["/tags/片冈智/index.html","5b224b9851dd43ff128b8261c167ff7c"],["/tags/片岡とも/index.html","59d3eeaa7e9d847de956bf433b07b98a"],["/tags/牧尾屋/index.html","4f2b9119b68c9eceb1d5bdac2cf06536"],["/tags/猫猫社/index.html","4ef194c39fe2ca4bd9c0a0673471c5a6"],["/tags/画集/index.html","0fe1a32d06464057c371101680c3d742"],["/tags/索引/index.html","67229064619d3b5ae4ead577da0e2f8e"],["/tags/閂夜明/index.html","fc5a3551eb5efda088b9c282e7e1210b"]];
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
