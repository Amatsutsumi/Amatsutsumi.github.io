/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","b19711f92357f5f89cf681a9f594ab95"],["/archives/2024/04/index.html","88d9d8e464b53b4522fca6dd08c25510"],["/archives/2024/index.html","d52fd2aeab2bf74e05d1d7f372158c26"],["/archives/2025/02/index.html","47758249c0e2447af645ae8cff61d037"],["/archives/2025/02/page/2/index.html","3604d1c247ad99a8f7b444147b30b28a"],["/archives/2025/02/page/3/index.html","d9eb5734bb7c3c2594357f61a34fe3fb"],["/archives/2025/02/page/4/index.html","95d22840c75042aa8afc1a2e2f9b7cd1"],["/archives/2025/02/page/5/index.html","dba6cd205eed22988dca6b762395e52f"],["/archives/2025/03/index.html","10c470adb781ada1c7ec9632fc81b51b"],["/archives/2025/03/page/2/index.html","330a4d7bc7277c00c34b9d96ff1bc239"],["/archives/2025/03/page/3/index.html","704ac5ccc18d7a5c1a97f057c3420ed4"],["/archives/2025/index.html","eb27c03d49908bf9ee81d420179343d2"],["/archives/2025/page/2/index.html","1e32266df714418e614021b0bcc15c74"],["/archives/2025/page/3/index.html","5bba09e06595d712a3098f12f6a90799"],["/archives/2025/page/4/index.html","11257a630bf1c05778ff325fea861741"],["/archives/2025/page/5/index.html","b82b77ce2223c2b9bb61a3787affcaac"],["/archives/2025/page/6/index.html","6bdb98b7969e9d9b521af558cfc15c28"],["/archives/2025/page/7/index.html","3a27c2cbe483ab3082b3cd8877962e1f"],["/archives/2025/page/8/index.html","d4ba0b7977ebc9917e4c93d0d64a014e"],["/archives/2026/02/index.html","56ca75b778a455f8603d10766d9c5f84"],["/archives/2026/index.html","83a0df9076b0b14d48c9e90d2c0a231e"],["/archives/2925/01/index.html","316679c79c159fbe0dbc49c26588966d"],["/archives/2925/index.html","e22f35c7ae35fd31b60f98af327316ca"],["/archives/index.html","607ad9131a153dbf90be34fad112f04e"],["/archives/page/2/index.html","15bab900268f5ab8c1118c70d19e82a5"],["/archives/page/3/index.html","c22e941176952fd3132eab19111b7914"],["/archives/page/4/index.html","5dcbc1ad0c24ab62d7fe471b3810cbc3"],["/archives/page/5/index.html","988670c9ffb6dd9105037bf98897e9f9"],["/archives/page/6/index.html","1dbc41cd17451c847f0b41a146087cde"],["/archives/page/7/index.html","6beb91820b36cb9c788ba4118bf4a5fc"],["/archives/page/8/index.html","498815b9003121a772c32fb17b16d710"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","e7d83559b3ba4839d2e36bfa7a333eab"],["/categories/galgame/page/2/index.html","36b3c3076146f8ed89b794bf5445d364"],["/categories/公告/index.html","6704caf36a7bcae613c2f9f6da35ffe5"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","651317b5e93672f4ad43e36906910d13"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","10f29bf02d5ee850e5a6c11fc5ef8b10"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ed1afaac1bf1e92c29fa6320ac37ad2e"],["/page/2/index.html","93b68444019166b8edf3262f4277b8de"],["/page/3/index.html","ff2af39ec4846727b1365142acdc7347"],["/page/4/index.html","9ea4c3ae9df97ccc2ee5dacb892b2e41"],["/page/5/index.html","b46cc115ebd84756243886f0be7f464b"],["/page/6/index.html","96ba075792da644d33768ea9ef63b87c"],["/page/7/index.html","8067e570703bb4d4f18bffc3dd8f82e1"],["/page/8/index.html","f151cd41cca52651baa2cf5950741873"],["/posts/10c9dd98.html","f0af2109682b4f8b05b782cf46c3b23d"],["/posts/1370342.html","989312edbc415fb6969f4987bf05a9ca"],["/posts/15ef14c2.html","27554fd57dd4559694241bc0aafe6b4c"],["/posts/15f3959d.html","0e62262e34b6a249620764d7a31e7280"],["/posts/18ab785d.html","0743c9445a798a1bb2c328cd8f2a8ce2"],["/posts/1d59b71f.html","b9ec29554cad95fc630d3d96587d0bcc"],["/posts/20b3f3a4.html","c27b82041d078a12ea6492b22ea84ad8"],["/posts/245f1c7d.html","017319ccc447ba3da097d2c993e54b5c"],["/posts/252658f.html","56229c2769a38ac575c805e965892544"],["/posts/28397adc.html","a456cc35dee91d85277a0e067c4dfaeb"],["/posts/2c0a6836.html","76d1dc7505fecb9f56ed35e522103b58"],["/posts/2cf620f0.html","9768bb2e10b3f77748bbfedd41e04b9e"],["/posts/2e30fd6d.html","d597016d7b263c3736890d283d80d05d"],["/posts/34292736.html","34b78adf62c37ce1edf0688f40e95ed6"],["/posts/3f7d823a.html","2306414f73d7c03c74a7db8084dc1520"],["/posts/44124a6b.html","7d3889081b5f0446c2769dcdffe2add4"],["/posts/47abb61d.html","6e213f9d0f86b29f1daec9305bcccc88"],["/posts/4b689be3.html","9e5520b7b33523f5ca46d1633f64832a"],["/posts/4cf8423f.html","8610633a403e5a3eda2e875e05357c59"],["/posts/4dcf85c.html","f65f5bee93cfc4d50f14e499c7bff19e"],["/posts/500cd322.html","a6d73dc8be8fe7d9366eaa81f21c6e40"],["/posts/51c9b1ff.html","a34e78a31b1daf4acc31bba0ea8f3bba"],["/posts/52b5b3c6.html","e38b5081d7557d088816c8135ce72ad4"],["/posts/5f6e0c59.html","4e982a3e03b4c43b7dab6f474205afbb"],["/posts/6336a2f9.html","1930ed9c6c2f65ff87f09d4814fff1f0"],["/posts/6432d61a.html","2714e8fbaf9c4128ea17f724ddf50be1"],["/posts/6515f032.html","d2903e364beaabf09a838a29687a07a8"],["/posts/6720ccdd.html","87b80b4a6b31c87b797240985f3a5ff8"],["/posts/6a4b5ac8.html","2b817c13e941ce941c2b8ef2ffc7a215"],["/posts/6aa4177c.html","caf2e4afc89d0c7c016c286af5374a1f"],["/posts/6b15f81f.html","8dd58b9b65c3c5881ed63335c7639aaa"],["/posts/71131d34.html","42920718d8e33e0110de355d46ca9879"],["/posts/78a8a8d3.html","56ae472edeba7fd28b35e8b174439232"],["/posts/7b41e1ac.html","d96bf38d5615ace937db28a11a01f014"],["/posts/7b51011d.html","0b768ead68ecb1aaaafbdf46794ba12d"],["/posts/7e3aa3e2.html","79913462c2b1834e3afd8a4583b2eb5b"],["/posts/80fe2691.html","8cdf1ebbd314368dc7a306d591c6d71a"],["/posts/81ac52e9.html","d0638440a46b992803a09c911a172feb"],["/posts/849b40f8.html","a912efce599b846640adad89e7b45444"],["/posts/85c51d68.html","4dfc09112b5af8e48edbe141f78af1de"],["/posts/886f8d3.html","7220a47939dbddf7d1091efa37c21bc1"],["/posts/8ac11b41.html","78c5bf4b33cf1f842272cde3ed8a9739"],["/posts/8dd520d9.html","beae050b1d567dd3edfced250b239547"],["/posts/8f555654.html","7d65a1892a57418d4840db223b761770"],["/posts/92a980c2.html","0818aeb8ef0e9be865a5b70158246b79"],["/posts/94d3c794.html","4271a71028bb9c35568f0b6c0cf25ac4"],["/posts/97f50eea.html","657e005fac2947e707058475a86c8e77"],["/posts/97fca8be.html","e6831cb52d5ca23a47a881d0d53b537c"],["/posts/98662d05.html","061fb59de55f248d46fed0a2f57a1ff8"],["/posts/9a2f6162.html","6656b32962bf254d0e0d01d48259cf55"],["/posts/9b22a48d.html","ed8a327fed51d33b250332e600413d32"],["/posts/9cb455b1.html","b53617ec44a41afc54f0b94fcdaefe57"],["/posts/9f61c1a0.html","3de8120ea5113a2e649f36e712efb497"],["/posts/b497b647.html","00daf2257974e74c2f73aeae09af6f9c"],["/posts/b5fb773f.html","8ef1624cce0a9e4a5dfb8c71669cfa98"],["/posts/b8d46b32.html","acaf547370727837e2ffb7fb7fc29552"],["/posts/c1b2c6c9.html","aa346e369ab4b242285fddf15707bbd0"],["/posts/c2111cbf.html","b69d3c8d7f5ea0344620a45a183f932a"],["/posts/c316c2e8.html","121074d01066a7c12003076058468780"],["/posts/c497a412.html","b715eb58511bf89bebc9588dd1900a46"],["/posts/c5de299a.html","354dd9df4c2dbdc04005498d99196fc1"],["/posts/c70bba9c.html","a289eece8c19a9456522a633e2ab8a28"],["/posts/cae2c959.html","69668aef9498795095268cef697b6309"],["/posts/cbebef2b.html","b9020b850e66c3d52365748f0742788f"],["/posts/ce25023e.html","4f03686f9d829850effddb677a274209"],["/posts/d2fd4837.html","875212fc4b662469e8ab307e62e84670"],["/posts/d3233cbb.html","20f5bce4682d0b3449edc077a0f113ed"],["/posts/d3a745a8.html","31705bbc5b44f6bed9b6ade97070b0d5"],["/posts/e3ab6ad8.html","fc3a15cc663714e8765c452b6959058b"],["/posts/e5018da6.html","d7ba4f8406a74339fcf04ada10f474c8"],["/posts/e5963272.html","029a211a870b351c5a7016e9a714a195"],["/posts/e624b065.html","61dafce89a31b2eec7756d738c79797e"],["/posts/e91abb63.html","4543501d856affee6c1d27db40aca451"],["/posts/ee1ed673.html","8111f5c011027d653e5b468009774068"],["/posts/f0c3ed61.html","8dc660087db6027d213844f40bc8655b"],["/posts/f21e7f84.html","e70d41890f3c5e05aa2a579345a031e1"],["/posts/f230b0fd.html","1e256388a37ca522b416d9168d51ef26"],["/posts/fc04d0d4.html","167e9acb80c0028e78b7b262adc203e2"],["/sumire/index.html","88fd79c6e94facdb678d439b052d2635"],["/sw-register.js","31dc458ca865a5acb4a578d98f13e614"],["/tags/BL-Game/index.html","a9b7f7215a6b4b70f007826ad7492e29"],["/tags/CHUNSOFT/index.html","ae0dc1b3f49a5f8676bc622d3b417c95"],["/tags/Cherry-Pie/index.html","d1f1db3eeca6d845054bea22f0cc8ce4"],["/tags/Circle-Mebius/index.html","966f4d37f41a98363f8b32cc6b970c9b"],["/tags/Dopamine-Software/index.html","e420b59bb02366328ea60e31a6e10202"],["/tags/Dos/index.html","7618ea2dcabfed0d942a7cbef08787c9"],["/tags/Kanon/index.html","e11a0ae898e383930c421d8020084698"],["/tags/MANATSU-8/index.html","3a743c7d95dfca1bdecdad5d2947dc13"],["/tags/O-S-I/index.html","3bdc075e1ffa06073f17694799d9775d"],["/tags/Omegaの視界/index.html","1b21741c41864335a5dd4e5a78cf9c74"],["/tags/PC88/index.html","7d1e8dc65ed95d40deeac91d91b4e1f8"],["/tags/PC98/index.html","cd181611b2ea1dbbc5b26831bcd7a48f"],["/tags/Pleiades-Company/index.html","aed396e931b36f88d1c544387979220e"],["/tags/Saihate-SOFT/index.html","fe56b6dc3d8fa0a384a73d5bff1407dd"],["/tags/ToHeart/index.html","62291c1e9957592a78167a669733474c"],["/tags/Traumend/index.html","91b4c46c66ecb6bc2c5fc395b14df2f5"],["/tags/Witch/index.html","b98234f62981987bf05feb235f88ac81"],["/tags/adonis-project/index.html","bbd63f8a136e78018d1e70330eed515a"],["/tags/flash/index.html","d376fff0698c7463a9d837b15ddafd2a"],["/tags/galgame/index.html","e052d33ed30956194e6f5db835795875"],["/tags/galgame/page/2/index.html","7ad75c677b7cafa4c78dc2121d1504e5"],["/tags/gal资源/index.html","dc00686e708da344cfbdb28c592f5d05"],["/tags/gal资源/page/2/index.html","c3c4560c3d9bb49751564e4f840c2290"],["/tags/gal资源/page/3/index.html","9b00d1067079fa1326f6632d6e0ced33"],["/tags/index.html","95642209f901de6a6ec4596368640552"],["/tags/rkr/index.html","31c097027893304119afae124fbb455f"],["/tags/team-eye-mask/index.html","2e3e4ce5f389a54ea2a0171d11cb3816"],["/tags/いつものところ/index.html","0227d98edf7110419f72d8699a44c3cc"],["/tags/きつねみみ饅頭/index.html","2407699e8552dc15a29f8e80c7514f0b"],["/tags/ねこねこソフト/index.html","d341c5186d081c5cd4387168557488f5"],["/tags/ねこバナナ/index.html","417435de8ec4552926a7dae653ce4027"],["/tags/停产/index.html","a19abdf529616f7c6ac4dd9a50109856"],["/tags/公告/index.html","52a2d2d129182a41c341248737f91ae2"],["/tags/同人/index.html","8c70cae50cbf9eb87171d5d496739a35"],["/tags/堀井雄二/index.html","7f4e29576a7dc6810e78f59e6be53588"],["/tags/外海なおき/index.html","142d2e94ad3c1a704b58f9f15ad89449"],["/tags/水仙/index.html","44876a8e33883f3a7307976c3df9359e"],["/tags/片冈智/index.html","55bba30d0e03a3197b76262fa72d86df"],["/tags/片岡とも/index.html","e8934c3cd9757ae5695aa813ce702bf1"],["/tags/牙の刻印制作委員会/index.html","8d93d1e554ce402b616aaf83e6b117aa"],["/tags/牧尾屋/index.html","d101ccd0c2370ac41516401c0cbb2816"],["/tags/猫猫社/index.html","61f5fd2fa2bfb46272332cc244e27fd0"],["/tags/王宮魔法劇団/index.html","b405e75de44a84e7de2874e35e10471e"],["/tags/画集/index.html","b36f67046e73e607be4fc0c8ee58929e"],["/tags/索引/index.html","ee4d6cf239d60db5603567fadbfe9b10"],["/tags/閂夜明/index.html","b5b5bb420a7b7a9bd45dc2097d722cf3"]];
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
