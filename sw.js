/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e8e9461f78d56c8af671c0f9c1911d61"],["/archives/2024/04/index.html","9b132018210ee1a52ef4cf7361649cd5"],["/archives/2024/index.html","497d437324ab0088f2583f8484518e27"],["/archives/2025/02/index.html","5cfaaaa1254c96c11a0a25f650f6b40b"],["/archives/2025/02/page/2/index.html","d94d8f064e6879cd58b29e15ae4bf1e4"],["/archives/2025/02/page/3/index.html","7d055dc49983c35ab60334a2a0db7bf2"],["/archives/2025/02/page/4/index.html","adaa9511c64034ffb1e5d5c9ca1ed6c7"],["/archives/2025/02/page/5/index.html","1ef52cad20b6d1c6931a61e88eba7739"],["/archives/2025/03/index.html","da438cf2a45eaee64cbe11d0c88cb863"],["/archives/2025/03/page/2/index.html","4a81ff43997f323a9f68b887cf30548b"],["/archives/2025/03/page/3/index.html","575760be1f484df53d2254b05a04ad48"],["/archives/2025/index.html","6f99df383a267abfbb2d9e50eedd42a9"],["/archives/2025/page/2/index.html","b08d25d3a42ac4bb044c4a42062fb618"],["/archives/2025/page/3/index.html","8890196b20d2ab6f3cd75cd824b31f30"],["/archives/2025/page/4/index.html","b465ad3d77d0b239ba50527a7ebe0b39"],["/archives/2025/page/5/index.html","246f1184d4a340f2885c9f933e3b694c"],["/archives/2025/page/6/index.html","0bc60b153e2f11c0a4a1d6ae8a54502c"],["/archives/2025/page/7/index.html","e3a856f5fb40632ed875a82a6d1345ee"],["/archives/2025/page/8/index.html","0d96fe29c93935f6de5a65d1315d1bf1"],["/archives/2026/02/index.html","3fa0762ec313aea31bfde3dbfc548ed3"],["/archives/2026/index.html","6d4ef9282595963bd91f824ab7992819"],["/archives/2925/01/index.html","49468dd7696e46985555a82c9b3113de"],["/archives/2925/index.html","50a7136f36fce5e282c5d096fce47e55"],["/archives/index.html","395dbdb169c27be8afbe3385394c6461"],["/archives/page/2/index.html","7f4cb93105275fea660f86e47d10658d"],["/archives/page/3/index.html","bae8f33360e117c59521593a9d16428c"],["/archives/page/4/index.html","6d20c0e2c8a463af8a34ad325c0b4d5b"],["/archives/page/5/index.html","eefe8c70df3f08f833d39418179dad02"],["/archives/page/6/index.html","c8588c62fb737afa2d6eaeb5670ce938"],["/archives/page/7/index.html","e12622aaf1ddde3b1f1d21b6ccb93b36"],["/archives/page/8/index.html","0ff02120d4071c302ab4225db1bae865"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","2bb5e28a47c6a942cf59891df0617b8a"],["/categories/galgame/page/2/index.html","0c78673cd1ea6b8dd0059fc1d76a160c"],["/categories/公告/index.html","3a6f52dc775251de71d06b2df303c520"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","0eda636b8573e3b92413f2ab5bb2177e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","4c58d831b6b2015ee8c8b43120d4fa2a"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","d3281846b7363716ab6862424474fea5"],["/page/2/index.html","62904df57208b3460a7fe3b6a7ba6916"],["/page/3/index.html","2ad1d6662f74d3a01dbe1e5482c59581"],["/page/4/index.html","b600a751408f34ebb93e40351e6b1b38"],["/page/5/index.html","1240749b88161a67ff5fc510e1384a28"],["/page/6/index.html","b04e09fe3baa35b2fb10be45b7f7bab7"],["/page/7/index.html","c4200c67a3f58b612f0b1e139e5c8dcf"],["/page/8/index.html","d00d5fb3c006e83c962867c85354e44c"],["/posts/10c9dd98.html","8b88d526e1981841f63151968b3457f2"],["/posts/1370342.html","989312edbc415fb6969f4987bf05a9ca"],["/posts/15ef14c2.html","8b81f222b865416007ddf06084db9b73"],["/posts/15f3959d.html","0e62262e34b6a249620764d7a31e7280"],["/posts/18ab785d.html","0743c9445a798a1bb2c328cd8f2a8ce2"],["/posts/1d59b71f.html","8d1913bbb12c5f755843aa9ebd9f66c9"],["/posts/20b3f3a4.html","214fb90b0a2de63d9553432e5b71fc8c"],["/posts/245f1c7d.html","017319ccc447ba3da097d2c993e54b5c"],["/posts/252658f.html","56229c2769a38ac575c805e965892544"],["/posts/28397adc.html","1a5b6b96934a687862a9bab12fe7d239"],["/posts/2c0a6836.html","76d1dc7505fecb9f56ed35e522103b58"],["/posts/2cf620f0.html","92da24489d85815c48078e67e4458359"],["/posts/2e30fd6d.html","d597016d7b263c3736890d283d80d05d"],["/posts/34292736.html","34b78adf62c37ce1edf0688f40e95ed6"],["/posts/3f7d823a.html","2306414f73d7c03c74a7db8084dc1520"],["/posts/44124a6b.html","7d3889081b5f0446c2769dcdffe2add4"],["/posts/47abb61d.html","6e213f9d0f86b29f1daec9305bcccc88"],["/posts/4b689be3.html","b1ac8af816a68155d1ca5499832af9cb"],["/posts/4cf8423f.html","8610633a403e5a3eda2e875e05357c59"],["/posts/4dcf85c.html","3cbb456b51872dc694770d0e3ab10a12"],["/posts/500cd322.html","a6d73dc8be8fe7d9366eaa81f21c6e40"],["/posts/51c9b1ff.html","a34e78a31b1daf4acc31bba0ea8f3bba"],["/posts/52b5b3c6.html","4bb8779f43fc432fe6c33d7062dbe3d6"],["/posts/5f6e0c59.html","4e982a3e03b4c43b7dab6f474205afbb"],["/posts/6336a2f9.html","fa9b0806cb53e968816a24020e4e42c8"],["/posts/6432d61a.html","2714e8fbaf9c4128ea17f724ddf50be1"],["/posts/6515f032.html","b4f6ca86ccabfab03deec46f059be108"],["/posts/6720ccdd.html","a8ed5a83c68d9ef2444601529a4d348b"],["/posts/6a4b5ac8.html","2b817c13e941ce941c2b8ef2ffc7a215"],["/posts/6aa4177c.html","caf2e4afc89d0c7c016c286af5374a1f"],["/posts/6b15f81f.html","8dd58b9b65c3c5881ed63335c7639aaa"],["/posts/71131d34.html","42920718d8e33e0110de355d46ca9879"],["/posts/78a8a8d3.html","06a861ac09bd34b4e7e649329c470905"],["/posts/7b41e1ac.html","c4bdc22bf34888d922e2fdc42e15077f"],["/posts/7b51011d.html","0b768ead68ecb1aaaafbdf46794ba12d"],["/posts/7e3aa3e2.html","b0dc15d8df789df3c1cbb0722adc5e56"],["/posts/80fe2691.html","a1d2b81781632e8052e83a3d62d63c8e"],["/posts/81ac52e9.html","d0638440a46b992803a09c911a172feb"],["/posts/849b40f8.html","afc98366562541b722e2e9fc1d7c4727"],["/posts/85c51d68.html","4dfc09112b5af8e48edbe141f78af1de"],["/posts/886f8d3.html","83b0a26cac9e9c6d7e281b1dd5a0bd0d"],["/posts/8ac11b41.html","78c5bf4b33cf1f842272cde3ed8a9739"],["/posts/8dd520d9.html","beae050b1d567dd3edfced250b239547"],["/posts/8f555654.html","4031d80e1239e82cfcf2c67a8b70a3fa"],["/posts/92a980c2.html","0818aeb8ef0e9be865a5b70158246b79"],["/posts/94d3c794.html","4271a71028bb9c35568f0b6c0cf25ac4"],["/posts/97f50eea.html","657e005fac2947e707058475a86c8e77"],["/posts/97fca8be.html","e6831cb52d5ca23a47a881d0d53b537c"],["/posts/98662d05.html","b2a4737a625df0655c699d52dd4b3042"],["/posts/9a2f6162.html","6656b32962bf254d0e0d01d48259cf55"],["/posts/9b22a48d.html","ed8a327fed51d33b250332e600413d32"],["/posts/9cb455b1.html","0158e9dc617871d9b6be9fef9635f5f1"],["/posts/9f61c1a0.html","3de8120ea5113a2e649f36e712efb497"],["/posts/b497b647.html","60e5ac3c395d10cc492de61f8e3cc7a0"],["/posts/b5fb773f.html","e92729d1c01c4450b5fd0856ead09e1a"],["/posts/b8d46b32.html","acaf547370727837e2ffb7fb7fc29552"],["/posts/c1b2c6c9.html","aa346e369ab4b242285fddf15707bbd0"],["/posts/c2111cbf.html","b69d3c8d7f5ea0344620a45a183f932a"],["/posts/c316c2e8.html","6eed127b79c4e9eb9fa5f172a25ef85e"],["/posts/c497a412.html","1f8ce1614a905d74d5c07db36a5b6b46"],["/posts/c5de299a.html","354dd9df4c2dbdc04005498d99196fc1"],["/posts/c70bba9c.html","624ffe26864d00647a72467fd697ebf4"],["/posts/cae2c959.html","2eb181be5db19e97ff7dd9b5ca0228d3"],["/posts/cbebef2b.html","24b78d8b16a3973f8c82ca59dde3ca8e"],["/posts/ce25023e.html","4a24d2dbc5b9c1cce3c952ab03e2b5c1"],["/posts/d2fd4837.html","48f46dcb9785e466a5c70d28aee8d8e6"],["/posts/d3233cbb.html","20f5bce4682d0b3449edc077a0f113ed"],["/posts/d3a745a8.html","43507edf723047b368e5d6f8681e2258"],["/posts/e3ab6ad8.html","72fde778bfe15f1647355a419e170a95"],["/posts/e5018da6.html","dd403847a6318c33fcaff2b9ed922f1c"],["/posts/e5963272.html","029a211a870b351c5a7016e9a714a195"],["/posts/e624b065.html","13716ca010230b43b11610fb67697eea"],["/posts/e91abb63.html","a072fc9d1e2b637943b88ef86b327fa6"],["/posts/ee1ed673.html","8111f5c011027d653e5b468009774068"],["/posts/f0c3ed61.html","8dc660087db6027d213844f40bc8655b"],["/posts/f21e7f84.html","e70d41890f3c5e05aa2a579345a031e1"],["/posts/f230b0fd.html","8e5291013aa17910319847343ed09a2d"],["/posts/fc04d0d4.html","167e9acb80c0028e78b7b262adc203e2"],["/sumire/index.html","a00f408baae163281b47bd36f7dbfbb1"],["/sw-register.js","da5a5e513876c408812ade5c437c8453"],["/tags/BL-Game/index.html","3afdd6ee912ed91dbc4ccca3450bfe87"],["/tags/CHUNSOFT/index.html","4ea00bd486691c8973ea426a883a82cb"],["/tags/Cherry-Pie/index.html","63c50923f1f5b10085b0227bf0a35778"],["/tags/Circle-Mebius/index.html","d11959d96fae2cc502571093ed289529"],["/tags/Dopamine-Software/index.html","4acb836d7a672468140860ae34132b54"],["/tags/Dos/index.html","edac39c8436cba96fcacfc890b0193ce"],["/tags/Kanon/index.html","b43c59b18587415c81cb2dcabd297c92"],["/tags/MANATSU-8/index.html","7f4b483e0a6a850e10c2a227c10c03c7"],["/tags/O-S-I/index.html","6073437bdc56c09fe7dba2b68367273c"],["/tags/Omegaの視界/index.html","024905b61c8512a6f00b8976f2b5b8c8"],["/tags/PC88/index.html","f82fc45f7cde38cb34f6814488d18f68"],["/tags/PC98/index.html","86ccfbee1229e6112a29416403eac43c"],["/tags/Pleiades-Company/index.html","1ec2e5b3e670f689e2b0311c3900c0a4"],["/tags/Saihate-SOFT/index.html","3d3cbfc4c761251364ab9bfa94c7f0b2"],["/tags/ToHeart/index.html","9991bf171518eccfc3733ace7594f6da"],["/tags/Traumend/index.html","106c0584b5024698bf9a570c34c1f871"],["/tags/Witch/index.html","c33d465065a17b58b3fcacb93d4168ae"],["/tags/adonis-project/index.html","67e88c772565d24e7bdc8e0b6d2ba3c8"],["/tags/flash/index.html","f0b6ffcbca05c668606d16fbc1873566"],["/tags/galgame/index.html","b5a61552fc3657fcb40cd07eee78f8d8"],["/tags/galgame/page/2/index.html","19976072c8d84011bf235757c474c856"],["/tags/gal资源/index.html","2643260f0e3c7214b78b2f592f931554"],["/tags/gal资源/page/2/index.html","e819ee776026b46573dc8635bcfd8acb"],["/tags/gal资源/page/3/index.html","3e08d6de8368d61f07771ed834fb6a49"],["/tags/index.html","9dea72b36abe3012c632d06380b935e3"],["/tags/rkr/index.html","7fcd3eca7b53ca257eba6a78ed800d9b"],["/tags/team-eye-mask/index.html","36e23036e23b6cd79ffebff5ed2d4bc4"],["/tags/いつものところ/index.html","abd8cd0cb640dd199542337fdf2dac72"],["/tags/きつねみみ饅頭/index.html","9bfca19025491de87f22f29ec5c1c84a"],["/tags/ねこねこソフト/index.html","efa7293a5266b0eeb0bf3e5b927a08ee"],["/tags/ねこバナナ/index.html","a7fa69bbeca4b10cc5e50d6b98aa1b13"],["/tags/停产/index.html","a0fe838e540841aafddc3ac802c58c6f"],["/tags/公告/index.html","a161ee641ec3d5035a811b34980cc29c"],["/tags/同人/index.html","af519d051949f111c11e99fb19c63ddd"],["/tags/堀井雄二/index.html","9ef9279b83c03fe934d5519a8d03be1e"],["/tags/外海なおき/index.html","01b1903eedc058385eff3939d8e9a000"],["/tags/水仙/index.html","f2cbe7f90f1e05615e8d62c74ecf7b27"],["/tags/片冈智/index.html","fc9579ae6b53d560decf13d193f81e00"],["/tags/片岡とも/index.html","01177c960bb583565adbc77aa8c32e86"],["/tags/牙の刻印制作委員会/index.html","0cbd87290c093fad7edf137f2defba6a"],["/tags/牧尾屋/index.html","71ed8263ee673b3bd427c66b3e67e93f"],["/tags/猫猫社/index.html","3542f6aefcf883f797087391919838d1"],["/tags/王宮魔法劇団/index.html","4607ba83e44091336e0f831205044ed4"],["/tags/画集/index.html","c717310218726194dcf25ea2513742c2"],["/tags/索引/index.html","829ea6a5bb983e6e9efba150380857d6"],["/tags/閂夜明/index.html","34f04d4a86f55db4dbdc04b1d51d5c6c"]];
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
