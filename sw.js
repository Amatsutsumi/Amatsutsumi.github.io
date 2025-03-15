/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","5fc12ecf4410b8d07a623ed1e69c4e15"],["/archives/2024/04/index.html","0d69a6d7c0edb2edd98a7be18699841a"],["/archives/2024/index.html","b25e7a7bd927fa6500a781128c8dbe30"],["/archives/2025/02/index.html","32b1dcbf78791d5aec4aedaad34a2516"],["/archives/2025/02/page/2/index.html","70cc851a63e7c6c485d36c90c541884b"],["/archives/2025/02/page/3/index.html","fac88e85b05e3182c4e9cdd555709c81"],["/archives/2025/02/page/4/index.html","ff3a61073eb482d38a509a5ae023c6d6"],["/archives/2025/02/page/5/index.html","a056cb200c690e75adf7f46e1e03512a"],["/archives/2025/03/index.html","9ef029d664abcde92ebbda71e6376c12"],["/archives/2025/03/page/2/index.html","d8d6c7f8c73eb728f907e8b909b838a9"],["/archives/2025/03/page/3/index.html","ddd11f68dae00e48df4bd677482205fe"],["/archives/2025/index.html","20c837d10cddb5e4c58c50a08a73ddd9"],["/archives/2025/page/2/index.html","cec7911df01d1fee6146c6999f3d9ebf"],["/archives/2025/page/3/index.html","facec38bc5f649fe878310e52eb8cf4e"],["/archives/2025/page/4/index.html","6ab05b912751aa550b4d7d7a6799f8b1"],["/archives/2025/page/5/index.html","d0286ae86bd19d729854e8b39d807450"],["/archives/2025/page/6/index.html","c75689e3e8d85de2112c7d28742bbc9c"],["/archives/2025/page/7/index.html","124fec0a936c881a3c705a6475aa2475"],["/archives/2025/page/8/index.html","2fa4bb23c65fd8ce8bd39a1a6b38c264"],["/archives/2026/02/index.html","bfb2246a5c8066c52145e5d4992b7633"],["/archives/2026/index.html","f910ad975cf2ee0d986390d00ce6dfad"],["/archives/2925/01/index.html","40200c3846871ceeabb873ee702f5953"],["/archives/2925/index.html","65914cccffd76b6329053f2e446b3577"],["/archives/index.html","7fb074a6b8c869c5da6c8a80b7861224"],["/archives/page/2/index.html","90fe3e8145b859dec3f8d9ed32a9f5d3"],["/archives/page/3/index.html","526f7264edfe407fecdbd632df5597f6"],["/archives/page/4/index.html","77f6458b182cdef6ce66ceb1fdb15d4d"],["/archives/page/5/index.html","f2e0669f9723c18b52caa5aa8ac61ce1"],["/archives/page/6/index.html","265e109705e85333a62a0936204871f3"],["/archives/page/7/index.html","9fd968ab6590db0c7975234caebffff4"],["/archives/page/8/index.html","4905b8b58f9f8bad8fbf4b1124144a1b"],["/archives/page/9/index.html","69fb6f8be210ff4a3e72e7737216c1f8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","94c565f38f3feed7fcf2f9f625a39727"],["/categories/galgame/page/2/index.html","ce8843e7377dcc715004ff75dc07bd86"],["/categories/公告/index.html","78255491fc599490e1ac15ad91a3fcc8"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","6040f49122fe42897b9ed4bc1d2c802c"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","d6f7ab43904ab03da0ee46a2755144db"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","e21c41c5858ae2af916d01f9f3ef19f3"],["/page/2/index.html","750dcf835d57ff3f8ce00106d29bba1b"],["/page/3/index.html","bc3efd30a9eed988c5d45111ca7cf21d"],["/page/4/index.html","f38a8e1cb37d9ce7e0a1fb2863f150bd"],["/page/5/index.html","88cdd3b9cec070bc78496af5ee31d5fd"],["/page/6/index.html","39b4a2b862764267dab1ee64964098f1"],["/page/7/index.html","5fad7dafdb66a8265a2d6db6ac661d45"],["/page/8/index.html","e3808fe39ff790043f89b8bc1860b48b"],["/page/9/index.html","ac16b6e9e3ab53c185d92d3fe82f3575"],["/posts/10c9dd98.html","38b7d5cd1fed0cef991f2efe4b9a8ae4"],["/posts/1295b569.html","0fca8e9ffe349073906709417552f64d"],["/posts/1370342.html","d6f6b17695ecf88da35aaa1205e29475"],["/posts/15ef14c2.html","e6599ad5325f1b9df25b550855897907"],["/posts/15f3959d.html","9c311f803a86fe8982f7e20ec356402c"],["/posts/18ab785d.html","04ffbb1c8b91109a981156b075ddec1b"],["/posts/1d59b71f.html","eb398d98f8febc2cd17406f82620ae3a"],["/posts/20b3f3a4.html","21b5d23b8cadf654319fa78905e5230a"],["/posts/245f1c7d.html","c4084f2568c12e27fe8c43e43d1eb485"],["/posts/252658f.html","7a5ca8db0d8ef683a9c065a8d3fbf474"],["/posts/28397adc.html","3e6d43cb2c1cda71420736b3c6564d8f"],["/posts/2c0a6836.html","0d62dfada5a82aa48433597b691e2b32"],["/posts/2cf620f0.html","227b2192600492ab73c8d6a8fb163f2f"],["/posts/2e30fd6d.html","07ad9eb211c1f3d98ad3d070f3475091"],["/posts/34292736.html","e0ee059ac0d3d64ad0f0d88a0af834c6"],["/posts/3e118dbf.html","9e19cb9612f69e1c42c02f425b6b13c5"],["/posts/3f7d823a.html","e5bf8187394e1b3fe3976b8047bb3bfd"],["/posts/44124a6b.html","5da38a31b8ba0fe4b0f3677b0ffee9df"],["/posts/47abb61d.html","c039ffe578f305d47e07e9715a304c9d"],["/posts/4b689be3.html","e217fd5cc29b32b9bf0f7278eb47ff9e"],["/posts/4cf8423f.html","c232b8a52e498db14e47ee4dfe6aff08"],["/posts/4dcf85c.html","e96c9b6088b2eb94ea58498808368746"],["/posts/500cd322.html","1be2d67b90d85ce4b7ba3bbeceaaf0b1"],["/posts/51c9b1ff.html","09b74fbf394392e4c54b5520e66f4e87"],["/posts/52b5b3c6.html","777e4e72d4e875c7fa9f8c3dadec95e0"],["/posts/5f6e0c59.html","40facc82adbd4a6153deee417a2dc7e8"],["/posts/6336a2f9.html","77df75196fbad7c28f5c541c79dc00d7"],["/posts/6432d61a.html","bbf20bc4311e2d1d7513ad327ff5c958"],["/posts/6515f032.html","5978743f5128f3188ac3e890972f90bc"],["/posts/6720ccdd.html","1ee111f8a5d64b7803a8ab78e53927ef"],["/posts/6a4b5ac8.html","6544eb17bc285fd36edef2deddb82537"],["/posts/6aa4177c.html","2549d12016c063cfdd7447b09e6f41b2"],["/posts/6b15f81f.html","f83b1c58aa6b08392abf0f6e8c0dbf93"],["/posts/71131d34.html","9796b61db149e6809f1b022b9f75e604"],["/posts/78a8a8d3.html","29bee858f5e7e665344c7d8ca5b7d9c7"],["/posts/7b41e1ac.html","be25eeb3dfafcb025455425d04924ca8"],["/posts/7b51011d.html","334dbee6e0a56dc195810cd7c6aff151"],["/posts/7e3aa3e2.html","72f114ff67de2528785ba2a8b8056426"],["/posts/80fe2691.html","ab459d8a746bb693f95c735800771028"],["/posts/81ac52e9.html","3f455bfade20198207a007c06d1eed42"],["/posts/849b40f8.html","c8b2d937f08ebd4021b1c6ef0b5f8e55"],["/posts/85c51d68.html","768b61b0402c0da7a2c74adbb7993c79"],["/posts/886f8d3.html","6fcb192807b69d6ed1daa1c7d0cf45bf"],["/posts/8ac11b41.html","fbcdf547ab838408fa60dd7a5a47e252"],["/posts/8dd520d9.html","6d8d77ba0bb9b5d57a76fb5c6be30f3e"],["/posts/8f555654.html","6c65cc9a04043984b1b94e26f12b721b"],["/posts/92a980c2.html","72888572c8f4c9b7bbc3a8cddc4d11db"],["/posts/94d3c794.html","59a86fe946215a53eaef454a26b66f60"],["/posts/97f50eea.html","514216290400a97a32d2fa1d19ee9f83"],["/posts/97fca8be.html","1c40292ebbdc48328e61640c0a4eb01e"],["/posts/98662d05.html","b1fb39cadab681c905320937d9232508"],["/posts/9a2f6162.html","7c668401ad88e68b3afb90fb0d4ce087"],["/posts/9b22a48d.html","187cd5778a5bff5876f9def56da796cf"],["/posts/9cb455b1.html","88476be7aa4fd927f75beaefa36cb910"],["/posts/9f61c1a0.html","8e0d50bbac4de4f6d39f6e422565ba95"],["/posts/b497b647.html","4e1bfdcd58e78cbcef12bd5d2aee997b"],["/posts/b5fb773f.html","255681c210411c5df1d0140579890b53"],["/posts/b8d46b32.html","d73c22e9181956868d9dfffbd93d35bb"],["/posts/c1b2c6c9.html","c15dd42da94684558f003b79f0578713"],["/posts/c2111cbf.html","c41a17f2883d825a3e24f1627dbd6b76"],["/posts/c316c2e8.html","8c8116ed1aa6b2d26f119d8376356199"],["/posts/c497a412.html","ccb06d2b4da9181502e0cb553d8dcfdc"],["/posts/c5de299a.html","3db7e477ce564263588f799d81631a98"],["/posts/c70bba9c.html","176e961d28c0a991b9c08ebe304c9ac0"],["/posts/cae2c959.html","98785e31d68daff0f30836a6462c77ac"],["/posts/cbebef2b.html","1f91cc967e71d496aa2a1dd56c0d25a1"],["/posts/ce25023e.html","44b3dd6702a907038663d89272d33a48"],["/posts/d2fd4837.html","6f271d804f6699501d2539d9cd0576cf"],["/posts/d3233cbb.html","c579aea97ad67a6b19a0804f2dc4d4e5"],["/posts/d3a745a8.html","d7bc13f55299f0228ee174bcc9615e26"],["/posts/e3ab6ad8.html","6c13285e6a7545eb19dbdcb4fd2cc914"],["/posts/e5018da6.html","5d49e248acde483a727db37fafc0534f"],["/posts/e5963272.html","f18bffc7df1f98784fbf414d00214d16"],["/posts/e624b065.html","2c7b324c5067547153593fdc023d931c"],["/posts/e91abb63.html","08158964bc039f56dc6291276fe1c298"],["/posts/ebaf2232.html","ba3bc2d73c042997b558bd6f637ee47d"],["/posts/ee1ed673.html","6b4ad07704387e4bed4a4a64e8ee5626"],["/posts/f0c3ed61.html","f031301d152a856e9844b003a2444e44"],["/posts/f21e7f84.html","3f958084b2419c8f2b3423646f210536"],["/posts/f230b0fd.html","2dbaa8c386d6f62f311bc73badb63376"],["/posts/fc04d0d4.html","7d507adc849ae7ee8a2b0bad718970ba"],["/sumire/index.html","572b3b7657792a5cbfdfd3ebb4d229de"],["/sw-register.js","cef07e8e02337209ee47d278be515a7d"],["/tags/BL-Game/index.html","d567849a0ccc37066e32f782cc6000e1"],["/tags/CHUNSOFT/index.html","89013a0e6a03d9103bdc8674ce068147"],["/tags/Cherry-Pie/index.html","55ee9f54ef9375653b12728b2cc72634"],["/tags/Circle-Mebius/index.html","b60bf880dbf23c94b32bc39ee42eb795"],["/tags/Dopamine-Software/index.html","4e22d280be4e19778f967b765d4435d1"],["/tags/Dos/index.html","871dfcf2175483e8e42754f02a42384f"],["/tags/Earth-Well/index.html","c953139307553e9f9e47a4a37ebaea72"],["/tags/Kanon/index.html","2722b3e94263aee8e7642e160fcac9f6"],["/tags/MANATSU-8/index.html","de1068116b7264b42f0d8474bb047db1"],["/tags/O-S-I/index.html","bf2958ac83c5ab720c8b7e0cc15580bf"],["/tags/Omegaの視界/index.html","c40827119123b7500fd43c80568fd80c"],["/tags/PC88/index.html","be371a7cd269f3a840dfdbeb18fb7ced"],["/tags/PC98/index.html","3739539d294ce12b2e10a1b7e90d10fd"],["/tags/Pleiades-Company/index.html","e3e3ab44dcff58dbd185b319ff7318b7"],["/tags/Saihate-SOFT/index.html","b2397696e696d50226f030ac5bc5bd62"],["/tags/ToHeart/index.html","8c6aed6270f39395524bb90dd1088a9e"],["/tags/Traumend/index.html","850b67db3e4517e8b91053b416983148"],["/tags/Witch/index.html","d19a944ece6ef53d62b396661295296f"],["/tags/adonis-project/index.html","da0755fe0913a6fceb1d4ff54c353126"],["/tags/flash/index.html","193ccb762e54a3ab377b608d52fbd779"],["/tags/galgame/index.html","834815c883dbcb6841773f5e9d3ba929"],["/tags/galgame/page/2/index.html","be6bc9d9cbc85836faa5e2660f460c5a"],["/tags/gal资源/index.html","2ce837c377c13b45cbca6f4fffa57b5a"],["/tags/gal资源/page/2/index.html","0e7a686af5d820ff4c72d2a9594abb02"],["/tags/gal资源/page/3/index.html","335edb92910b9421180e23dcc64f61a5"],["/tags/index.html","d99dbeca12454c2f743c91a904a16b60"],["/tags/rkr/index.html","0c3453af92d584b0f63c7195728eb607"],["/tags/team-eye-mask/index.html","46648943b4e231198d4f527bcd68580c"],["/tags/いつものところ/index.html","3a0919a81bbe9614a0e04641bb7570ce"],["/tags/きつねみみ饅頭/index.html","aa6a5bc360eed574d483f84331cec333"],["/tags/ねこねこソフト/index.html","c9ac90125fb95e2a3e5474f3f3c0b765"],["/tags/ねこバナナ/index.html","340729c491ffca9ec28c78b4f0467c97"],["/tags/はちみつくまさん/index.html","2f9df70c3a709470204c399ab455a822"],["/tags/停产/index.html","bca81b04994f37bd006057ba8ed07dd0"],["/tags/公告/index.html","35b4540142477729b353a1de07b67b53"],["/tags/同人/index.html","8431ca27a11abe4225b7f4eda586abd9"],["/tags/堀井雄二/index.html","b4c272a1c7e6398e67e2bf921b34b703"],["/tags/外海なおき/index.html","e0c7cc9f0e0332d79a5f86d6a293ae46"],["/tags/水仙/index.html","d021a36ff59ffe4666d0dd5e15a1b42a"],["/tags/片冈智/index.html","80add0daf45cdc3796520b81575db134"],["/tags/片岡とも/index.html","1d5be760824aab4dd2fce7cf07cef2d3"],["/tags/牙の刻印制作委員会/index.html","379d6f6ee85b496d7eccaeeacbe9d2be"],["/tags/牛カルビ定食-FLAT/index.html","3d2501ab2a7bf0f1030f4348a359f998"],["/tags/牧尾屋/index.html","844ff8d4e857a7ba21aa2aa561f2c368"],["/tags/猫猫社/index.html","85b9bcc7ea850712a88143e38a0a4393"],["/tags/王宮魔法劇団/index.html","f40b7322e3d5101aaad073ac6cd8991e"],["/tags/画集/index.html","f85d75e101bfcadda4b9b0a7bbc38cf4"],["/tags/索引/index.html","3aca83008a54c69e8e7ef9b09ca8f0d9"],["/tags/閂夜明/index.html","415733ab4a6b715069ecc721b2a6ebee"]];
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
