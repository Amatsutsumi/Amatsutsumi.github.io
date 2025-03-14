/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","567dccaa456faa44380a274ca06206aa"],["/archives/2024/04/index.html","17fa11d8f87f3a7ae164ee6801abcd83"],["/archives/2024/index.html","c2635dcfb5da3ec5991aa8ac76c62960"],["/archives/2025/02/index.html","d418fe7ef3930b0ecedca0a9e2f08ad7"],["/archives/2025/02/page/2/index.html","85498b575cc1e2d52ac80255ca060287"],["/archives/2025/02/page/3/index.html","c066931f1d70246e7acde0d754cdde06"],["/archives/2025/02/page/4/index.html","532b837c55d25eba82b39d51bcefaa24"],["/archives/2025/02/page/5/index.html","5363a1a237cc4a7d79379f783bdf0dd2"],["/archives/2025/03/index.html","dc1c7d617ee37a7fb42645311b46611c"],["/archives/2025/03/page/2/index.html","b2b0e6fae73bba5519657bc490ea0200"],["/archives/2025/03/page/3/index.html","2c6ecc555ac91263dbf14613c4e5d499"],["/archives/2025/index.html","8c77b2a1b2d2a897e16246e9df80b530"],["/archives/2025/page/2/index.html","8954ae06da91e5981ba5fd4719f1bc0c"],["/archives/2025/page/3/index.html","1363947d01cf960c5a9a80faebc8818e"],["/archives/2025/page/4/index.html","a42d058a9f58a80b9ce93d5e8746da70"],["/archives/2025/page/5/index.html","59bd302d72c5f9b14999802fa5eac264"],["/archives/2025/page/6/index.html","219be69b089e08f35ab475d2200b2bf9"],["/archives/2025/page/7/index.html","541dd1787a23639151192b67b12985fe"],["/archives/2025/page/8/index.html","dbb4ac043750d099452f67d86c56c42b"],["/archives/2026/02/index.html","faa37e224f77209a5d720f702f56460b"],["/archives/2026/index.html","8fc41da7160e39b70997be8ae5423487"],["/archives/2925/01/index.html","d57f1fdd6f2712f89b5c5584907dde77"],["/archives/2925/index.html","40e00630c3edfc700c96d86a6f45441a"],["/archives/index.html","1b69a540e1f790bbebed87816b015341"],["/archives/page/2/index.html","904c71237066e1486110c0144bca16ae"],["/archives/page/3/index.html","428bd0a54fc703a7f34fef12b28a72cf"],["/archives/page/4/index.html","bdb7f4aa239a7843f857d7dc1b09ea79"],["/archives/page/5/index.html","402acc0ec316423e400933df3f3640bf"],["/archives/page/6/index.html","a777c9d811d54bf7e430c8a391cff5d7"],["/archives/page/7/index.html","df0bd7a2038183357e0115dd20ddf03d"],["/archives/page/8/index.html","b3542ae47f1492e5711a742ab637e92a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","377e06e93f9805b8aa1657dc3c00d230"],["/categories/galgame/page/2/index.html","7349f42c88b332564c0ff4d545556d73"],["/categories/公告/index.html","a3e5c01e0a8b74259631d3bf3b019f0d"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","e094ac49995e7a59f7bac2eb85cc3360"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","89184f0f8c828ce62bb857a7dc4bc010"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","c3ed59373b388d5ed198dc2bcfd666d8"],["/page/2/index.html","b1d7f9a7447f0a9028664ee6f076c4eb"],["/page/3/index.html","e1b6b85a21439004ce6faf82e04f4b23"],["/page/4/index.html","6239dac1f897c4f637bc60d87ccd54d8"],["/page/5/index.html","2f20d5e874c42aeaed7d69818fe3bb8c"],["/page/6/index.html","ee7c9160fc60e41ea34869915ecddd14"],["/page/7/index.html","c5545fd6f875c7e97fcef4f0ce310032"],["/page/8/index.html","164235126c16fa6c604065dd82bda5ca"],["/posts/10c9dd98.html","00d8c436fa50d0980d661c60e9b29fa0"],["/posts/1295b569.html","192c90d5abe4f6d8c3b3beebce1ec138"],["/posts/1370342.html","fac72862d3985596d4edc36cabf27218"],["/posts/15ef14c2.html","dd355a21e7ed7281494b5ff1f23d2b3c"],["/posts/15f3959d.html","6654045dbb33c0a1588d446e0035b07d"],["/posts/18ab785d.html","1a3a9941e7328176caed890c84a434d8"],["/posts/1d59b71f.html","275a198b0730070bce10c5861e35da79"],["/posts/20b3f3a4.html","a14f6b8b88105cddff853f2632cc00dd"],["/posts/245f1c7d.html","97af05fdb227ea6896630996e24da777"],["/posts/252658f.html","96c9bb82e1731d18790582e3761e303b"],["/posts/28397adc.html","71f8b87ef8a74b53a3f3c9e510c64d48"],["/posts/2c0a6836.html","d48806356661e9b66b865c053beaec83"],["/posts/2cf620f0.html","6e42fa4448cc041e30fd853f24db29e8"],["/posts/2e30fd6d.html","60c044dcc636d543f99d05b3f6e38c90"],["/posts/34292736.html","edf8aff1258bcf01a2f9837fdfd9459f"],["/posts/3e118dbf.html","943998b131215b1f956ff361b6178207"],["/posts/3f7d823a.html","c3c4ea5e7b87dd43b5d832fb55a9934d"],["/posts/44124a6b.html","439d92a1a6909ad8a6410b4464a31a13"],["/posts/47abb61d.html","317cb167cb003bb388290136588d2a14"],["/posts/4b689be3.html","8cc13bd0212cf437fcf3256b80ab023f"],["/posts/4cf8423f.html","8e9b2d83f26cf93f55938d59fda12c58"],["/posts/4dcf85c.html","997d4f5a5771c4ab4ee0725445947b4b"],["/posts/500cd322.html","b4e1769bd99c779fdf124e2efb83151e"],["/posts/51c9b1ff.html","36ec942a0d8702200120f39689aebba6"],["/posts/52b5b3c6.html","e050ddfa3fb274f0c810d6300805edc1"],["/posts/5f6e0c59.html","fd2446002f4ee79dc7b39dd97ae94be5"],["/posts/6336a2f9.html","935710cf858ced9779be4f793ae5c6ac"],["/posts/6432d61a.html","240f0fe049d7de9658f63502828aabe1"],["/posts/6515f032.html","71de93127ee5ea133f99c8fe683b7733"],["/posts/6720ccdd.html","c2d7d271152897e147677aeaa48464e7"],["/posts/6a4b5ac8.html","c575e21beece01df5bd88ff75f5016de"],["/posts/6aa4177c.html","d8104a35ed0c0b5f5e6ae9e14b5b658f"],["/posts/6b15f81f.html","e7c716552999b5f7dc402d888b2da592"],["/posts/71131d34.html","3f70bc35c6841e2207deaa79adde29fd"],["/posts/78a8a8d3.html","c82c043d7681ae8a74ef033672d71e0e"],["/posts/7b41e1ac.html","938db1a368d4f5557f63afecb2b089d7"],["/posts/7b51011d.html","090817f608c6fc6d73cbb21a64849490"],["/posts/7e3aa3e2.html","29ce02468aceb3a07fd2861fa4fc87de"],["/posts/80fe2691.html","3a977a55e171ab3eb729813ef67372b3"],["/posts/81ac52e9.html","9e6f8f4c54128e5c1a2f28ec22f1db36"],["/posts/849b40f8.html","734f5f7c9ac1389d019fe40f611b1d98"],["/posts/85c51d68.html","b999ebf4bbf316da0eefe43abd3673f1"],["/posts/886f8d3.html","bbe7afe509b8dd9d6fee155aee466a55"],["/posts/8ac11b41.html","5e03d65c8d13c0215aec8fabc4d2ccf7"],["/posts/8dd520d9.html","eaf9f572fc8bbc4e8c5dc2010dddb067"],["/posts/8f555654.html","dcaa80a6e70acf24ad8dc0cc5cdb3d64"],["/posts/92a980c2.html","e0c65c0af7a61837c333b029433fb357"],["/posts/94d3c794.html","7925bd7898144c1cf404ac88ab33877f"],["/posts/97f50eea.html","2a301d481f1174781288f28275068ec0"],["/posts/97fca8be.html","28ce956543bdc57d01f1dad49c7ef8c9"],["/posts/98662d05.html","f789ab808f4b97e38f41d4f124b43ee3"],["/posts/9a2f6162.html","f7dc0f3e33dd99d865d45e30ca51c637"],["/posts/9b22a48d.html","8580d2e4e782c9ac17168d38e22698ba"],["/posts/9cb455b1.html","8c0fd61dbec71805b82d17666d6a5b0f"],["/posts/9f61c1a0.html","b2dbeef90fd1b9d8a6ea518af8c1cfdc"],["/posts/b497b647.html","cdc6e53475278ad4427c482c903f51cb"],["/posts/b5fb773f.html","c567daa1c011f72de7d7e49d13088335"],["/posts/b8d46b32.html","b05074d4d8acc96d8eaaabda9ebfbb46"],["/posts/c1b2c6c9.html","21044613df103023d5dbf4d28165a513"],["/posts/c2111cbf.html","5bc3fc2940616a652a94d81f911af304"],["/posts/c316c2e8.html","871a2e44747df190294fda2113d6490f"],["/posts/c497a412.html","357852cff270fe4149b0e174608bcdbc"],["/posts/c5de299a.html","f760330b2b757c7062e92a619bfce6ed"],["/posts/c70bba9c.html","cee5d6862d96714c1e31cf09fb404e7b"],["/posts/cae2c959.html","4f30a23c8bc2c0068faa0edfcee3f0c1"],["/posts/cbebef2b.html","6498b31e49b94016a1e1968fed94b361"],["/posts/ce25023e.html","e358b144dc2af5ba8e0f05be5d7cd058"],["/posts/d2fd4837.html","e6865d364866181da6e53a6cab253fa5"],["/posts/d3233cbb.html","b69018f5808bdd8747bdfbd2e488c0d7"],["/posts/d3a745a8.html","a4c74d7aaf410807170c50de7ee54a56"],["/posts/e3ab6ad8.html","fa221409e561ec55c472386fdc1410da"],["/posts/e5018da6.html","3cff88c8bdf85e252bde0f9d029d3338"],["/posts/e5963272.html","a64b1af90429ae662aa10339daf6845a"],["/posts/e624b065.html","5ee2a89db9c174951f01c896396fd846"],["/posts/e91abb63.html","b9ffedad82d0775731c41e28947c7d32"],["/posts/ee1ed673.html","ba9903831e1935b51e048c497b3b7ccd"],["/posts/f0c3ed61.html","4bb9889aa287f5507dc7044b73c7de7f"],["/posts/f21e7f84.html","e937216a665cfcdf4cebe2c559ea64ea"],["/posts/f230b0fd.html","95688eaeaede80eb34c08de8afb95c9a"],["/posts/fc04d0d4.html","1f63db5c7b9cd4183f4dd9fd76f43a70"],["/sumire/index.html","c460698c38b34c9ec65cf40cabdae672"],["/sw-register.js","c78513b72d5cf88c9aa48efa1ae6223e"],["/tags/BL-Game/index.html","d3d6a8cc2fd3c9ab02130644b837397b"],["/tags/CHUNSOFT/index.html","2b83e17bb48608a4a1c0fead205b1888"],["/tags/Cherry-Pie/index.html","2ff905f8ebaae20c095e9a06cd240f49"],["/tags/Circle-Mebius/index.html","b47c38473f633701d187364e30385ec0"],["/tags/Dopamine-Software/index.html","dfd1cfb9f81712059bb01307c28adcb9"],["/tags/Dos/index.html","e3073a0873f62f6cddb52d748f144640"],["/tags/Earth-Well/index.html","241908c169d4ab5ef251468e72ac39bd"],["/tags/Kanon/index.html","26406de217e29bca880d4d2c2ad110b7"],["/tags/MANATSU-8/index.html","c96aa47e7627defc6d2bc9223fde79bf"],["/tags/O-S-I/index.html","4953e8de8db1f503601ccada4244c00f"],["/tags/Omegaの視界/index.html","cd8a32ebc80dc883545d34ff58e80a5e"],["/tags/PC88/index.html","c3fbcb2775694abc98e8a84e24775a6b"],["/tags/PC98/index.html","d34c2e88da226a2495f3821a57af06ef"],["/tags/Pleiades-Company/index.html","4d8c749d0178d5615dac3279e766a68a"],["/tags/Saihate-SOFT/index.html","c897d9f67d34938677fbd7a7036a4d26"],["/tags/ToHeart/index.html","ef63c9f4aa8af69f68fc8725e5d0902d"],["/tags/Traumend/index.html","31c6dfca5c53dbe8f358dca599bc7f55"],["/tags/Witch/index.html","577353b5ed6b1f697a436cca70b12d12"],["/tags/adonis-project/index.html","9c82cb8a7afac603fd1f42af1e95d9cd"],["/tags/flash/index.html","c6b7d928774c30ea7244b07189de03fc"],["/tags/galgame/index.html","c49e6f5ef6ef287e774116dc8ff42577"],["/tags/galgame/page/2/index.html","9d526ef8394a6582e72708f9883c9a4d"],["/tags/gal资源/index.html","c344c3b07137558b1fa5e9789453b168"],["/tags/gal资源/page/2/index.html","4e792eb7edc52f3952719278d6784d6a"],["/tags/gal资源/page/3/index.html","e186b8e215fbea3cad757f49d9d6b513"],["/tags/index.html","48a4a84e23d22165ce047e51c6743025"],["/tags/rkr/index.html","d37f7d1d8fa759402167400119ee4bee"],["/tags/team-eye-mask/index.html","6c529b2bc6bb3fc286577003e0cdc929"],["/tags/いつものところ/index.html","9533fb41dafcca98b398e3082eee4d52"],["/tags/きつねみみ饅頭/index.html","a308b49a41b638391abff811a35bc99a"],["/tags/ねこねこソフト/index.html","6ac7cd69a422df3cd4d9b70124e4e9f1"],["/tags/ねこバナナ/index.html","048d8389a6e1d1e503b707f7914c6ecb"],["/tags/はちみつくまさん/index.html","e324b5c6514e6b13c3b5ed6451e7ea31"],["/tags/停产/index.html","446b8cb98a0b09a28a89b54e7f826818"],["/tags/公告/index.html","fba9720e142bc78733ca7535ccc1b24e"],["/tags/同人/index.html","a882937fb23b357ae2d3f85aac9f50ae"],["/tags/堀井雄二/index.html","a5cd6673946ed6a51ee015fe7e1c8a32"],["/tags/外海なおき/index.html","f1c7c6c6689593caf96b630150c0c0ef"],["/tags/水仙/index.html","ea7e72aa8c47b728d98e166c3195eed1"],["/tags/片冈智/index.html","e34a7a299a2a1dd0509117cbd0f69544"],["/tags/片岡とも/index.html","c3a91719004da63917fbe36da36b5347"],["/tags/牙の刻印制作委員会/index.html","c9b0bf8520630562bb28d3c665acfec8"],["/tags/牧尾屋/index.html","5acfc5579b5771e41630d0598d2452c2"],["/tags/猫猫社/index.html","7170746de1ab082fb7677a7240dd49cf"],["/tags/王宮魔法劇団/index.html","f72de2b19907538d7aeeb6eb421580e4"],["/tags/画集/index.html","41e7b46ec260bb7dbd3922ac1f9a7c35"],["/tags/索引/index.html","81e10156cca5f909a51b5dd01a989282"],["/tags/閂夜明/index.html","c7c2320cdd5521a21ca984b3a79edce1"]];
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
