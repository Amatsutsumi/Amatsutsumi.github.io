/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","511d1ef609a12a5d248f96aed96c11d1"],["/archives/2024/04/index.html","5923e3c652d9e402d679f2e6a65e7522"],["/archives/2024/index.html","ba4d8fb56646039ae09d1d772cc990e1"],["/archives/2025/02/index.html","f7b1e485808ccebc5b85ebd81787a418"],["/archives/2025/02/page/2/index.html","1f4f072ce01d881b422471a6bc4c123a"],["/archives/2025/02/page/3/index.html","4493ec34faac5e9f4d965e1a437a79ea"],["/archives/2025/02/page/4/index.html","c15267bb187033263ad3cf61eb0bb2e9"],["/archives/2025/02/page/5/index.html","41fbcaf3dba58838eaad470a2bd4b456"],["/archives/2025/03/index.html","e235f1e8fdfae23337d45ffde78bd640"],["/archives/2025/03/page/2/index.html","736cc372e0478f88e1b79c014ea0581d"],["/archives/2025/03/page/3/index.html","fc2bd08766fabd21a56f1030d4f0fe58"],["/archives/2025/03/page/4/index.html","c25442b2e93f72d7c9ce6c79b20ec241"],["/archives/2025/index.html","6575f2759dd6632d74a301925fdf9c55"],["/archives/2025/page/2/index.html","6037271876696e9236091a3e25c3f930"],["/archives/2025/page/3/index.html","752aeae4149e051d4ad7c4f3d6bd4a3d"],["/archives/2025/page/4/index.html","1c7a2c397c2b30bc8ea2132368680321"],["/archives/2025/page/5/index.html","c845af336e80a41244b997237992f1f4"],["/archives/2025/page/6/index.html","07f55b9c7dc8eb2925e30b50b1af23c5"],["/archives/2025/page/7/index.html","91ef36888fe557b871e034e315ae21a0"],["/archives/2025/page/8/index.html","6bfb11d18bbd7c5e0e7cbc88a9f941c3"],["/archives/2025/page/9/index.html","3b719c61d4e7164fb62dd4342ee5c95f"],["/archives/2026/02/index.html","f1c8dff8f2ba75325b89266040998f19"],["/archives/2026/index.html","020b93328507a66bef6ecc2c2bd6e589"],["/archives/2925/01/index.html","c58264fdb8df877601b8cc1759a35f31"],["/archives/2925/index.html","1949a6074b0d788b09ee8045130a92af"],["/archives/index.html","73fa1fea09b02d075752f939b8243403"],["/archives/page/2/index.html","8c1e85bb986b272b08918755f3b453ff"],["/archives/page/3/index.html","eff7ca9c1f10358968796c78cac41e0a"],["/archives/page/4/index.html","21e3e1e5bf3c0d8a35f220238ea52d6a"],["/archives/page/5/index.html","c066d2b0d193d9263b76f9b58c234b32"],["/archives/page/6/index.html","3570801d0a0cc10a169840d4dd1e9dd0"],["/archives/page/7/index.html","50f27ecd26a77f51d037324ddc671074"],["/archives/page/8/index.html","6de558959ac285f1cd0f7eb16363b72c"],["/archives/page/9/index.html","8c09aadfca3ab5ee285a64e578a44181"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","9d065ffa407d8e647265e87d686671f6"],["/categories/galgame/page/2/index.html","3a9f3d1ba0e2bbd5ca1336b37669f80e"],["/categories/公告/index.html","8c8e06e319df600d5bb468f103e8a890"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","2eb0d0a615357d2c8dcefd233205a280"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","4db9973819b0040b39baa02861ca18fb"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","38f7f92f07c25806dce7f035bc90faa8"],["/page/2/index.html","ad6352675a848c15422b62d0e8fe8a13"],["/page/3/index.html","f0b3acd36a1376f6276b8c2bafc1a6a1"],["/page/4/index.html","19ac38df333e0f3ddb2f64375f1086ce"],["/page/5/index.html","86842a32e57b45f34c4ed63c730ca760"],["/page/6/index.html","09fd25cfc0a34e9e652cdc1e17ce7118"],["/page/7/index.html","e76383e9f1da8b58589f3a8203f99e96"],["/page/8/index.html","9a804fb839b7033b8c714ce199e9a4c0"],["/page/9/index.html","dd2da1372badc05d908d99d79305477f"],["/posts/10c9dd98.html","369325740af44cda761dbaf667eb4def"],["/posts/1295b569.html","51c98da9cdbc136d8a1d21140d91a63c"],["/posts/1370342.html","99c92c73c03f5c651eb6a51b988c06e7"],["/posts/15ef14c2.html","a8c5a92d7a84f48df0c3b06f4b0d8d4c"],["/posts/15f3959d.html","33cf0d5c00e442de36fb550e3f527d69"],["/posts/18ab785d.html","a3868ab447a6738a649a912634140e82"],["/posts/1d59b71f.html","2d64612c4c748c5c87ded5340a01ce5a"],["/posts/20b3f3a4.html","6d78dcd2adf0ffd0e0c450e41757c198"],["/posts/245f1c7d.html","2609a7b44b123f83ded6ffaaa7436cd4"],["/posts/252658f.html","15433b1003697d4d64c4289f8f0266c4"],["/posts/28397adc.html","6f2e6fe70d0005314168ee76603a3772"],["/posts/2c0a6836.html","a31d55762738fda572efb339f1134737"],["/posts/2cf620f0.html","cebe017e4af08dc3dff963d82f52b7f2"],["/posts/2e30fd6d.html","f35e9f635cbb113878167afbbe052dc5"],["/posts/34292736.html","987ad44862ecb0754978ed580fa03b69"],["/posts/3468cbe.html","89d9d8ceb862c2b4a58c2b3b346d8c6d"],["/posts/3e118dbf.html","1ea13d1f112642f03bcc7379eb638f7c"],["/posts/3f7d823a.html","b19edab1cd79047910da00cb39a68f65"],["/posts/43945723.html","a09dfa856ac23b780d19d2b63e7a0271"],["/posts/44124a6b.html","8c352e703471ba32e2fc355898142b32"],["/posts/47abb61d.html","5e266cdee831235e38fd47ceb6e093c0"],["/posts/4b689be3.html","5ce6956a1d47ac3bac84776a43f74596"],["/posts/4cf8423f.html","918c1f4e20c8997cb50f64bafe7897ad"],["/posts/4dcf85c.html","35307a6a173e945b0a64cabca0b8b000"],["/posts/500cd322.html","90155f2b32abbbaa98b09a088cd11946"],["/posts/51c9b1ff.html","68d07ad918f233a47a81b5194228266c"],["/posts/52b5b3c6.html","f09ee91397d6a160f8a0ceb0fafcb7c4"],["/posts/5f6e0c59.html","02b696747c87f2dcf847de23ccbdbf7d"],["/posts/6336a2f9.html","fe85a5f33792c0f62c0f1c37c4a2fe1d"],["/posts/6432d61a.html","3ba1791e37fcb8dabdb3ac1f6a2694df"],["/posts/6515f032.html","f9154d4f5f2239d5b185920ad8b2833e"],["/posts/6720ccdd.html","91ec09b89145e1cef715e431bb3f64af"],["/posts/6a4b5ac8.html","6d44c75be00cb00ab911f0e4eaefdb4c"],["/posts/6aa4177c.html","c17169e6d99dece5ff49088d691df048"],["/posts/6b15f81f.html","24097fb59bd2c01173a5cf124aad6fd4"],["/posts/71131d34.html","0802fd61574bb0ecd9e92e0ad2fac32f"],["/posts/78a8a8d3.html","e9ce88801782327f52c57509e125be2b"],["/posts/7a5ef3d0.html","af6724f5acfbfa267f3a3839fa2c99b2"],["/posts/7b41e1ac.html","f1c395d54a8490c9a210930341f266a5"],["/posts/7b51011d.html","1bffcbbe678c72b9c2304db29b85a276"],["/posts/7e3aa3e2.html","2366749a0b214a16f7f8b17b525501c1"],["/posts/80fe2691.html","df1f3a2d3cddb199fcef300a70b21893"],["/posts/81ac52e9.html","491171c66cf8ac7503b17f0a88147642"],["/posts/849b40f8.html","e859e40850b50972c40ff86c0dcc440e"],["/posts/85c51d68.html","803e7ce5549e736e00429d66eab4541b"],["/posts/886f8d3.html","30b1be243aef1eeb4e37eac2a13abe2c"],["/posts/8ac11b41.html","a072807841ee4ea682dc6b17e604942e"],["/posts/8dd520d9.html","2d225e1b114685e248ac1f6a521af919"],["/posts/8f555654.html","6a70cd61316f3f4a7b4c888feea15560"],["/posts/92a980c2.html","941e00b6ae8a1f6f38c571a5bb6545ae"],["/posts/94d3c794.html","774df736a35ccb77eb65ef650b895639"],["/posts/97f50eea.html","df10dc15f3d6bd22c73599553c4a1d3a"],["/posts/97fca8be.html","03701159d705aed64370db57d95ca264"],["/posts/98662d05.html","a705eed9c0407c7a56a46677308b0902"],["/posts/9a2f6162.html","aa1e4b4cd8518a1d2183365a24d9c4cd"],["/posts/9b22a48d.html","102e1a9953fef5202ee828a5a3e73100"],["/posts/9cb455b1.html","2b9931f069225cf4b76447cdee46bc92"],["/posts/9f61c1a0.html","e4d56f4d8e7e9f5ff1b13bccf5170075"],["/posts/b497b647.html","392eaaebc9beb241b5e470f8b923c1f5"],["/posts/b5fb773f.html","77eedc9f01d96d50f679de2b0ec93530"],["/posts/b8d46b32.html","4c4db99277aaf36b82a9bea0293e9126"],["/posts/c1b2c6c9.html","0917c460e2ebd13dd55c655e81365f82"],["/posts/c2111cbf.html","8cf6ea4632b6ee3fd317e32160a9ff87"],["/posts/c316c2e8.html","dbdc1f64aa51ca68f321fad46ade85ad"],["/posts/c43e60b5.html","c9eab6789e134e50595bc7aea1e2c926"],["/posts/c497a412.html","14c5b1fae5326f0d357fef47dec20d1f"],["/posts/c5de299a.html","be752d87c2a37baf1894d38d5c5db00c"],["/posts/c70bba9c.html","72a558c5d369db66f02b4ec9109dc6b6"],["/posts/cae2c959.html","94f2b48838185e6cbf14d11d1c65f61d"],["/posts/cbebef2b.html","01f2c71aa43dc4f6075d8c4a6ab80a07"],["/posts/ce25023e.html","9f9708227c8f2e1f70804488b9262f28"],["/posts/d2fd4837.html","5783c90722e0bae250dd0e8da2695375"],["/posts/d3233cbb.html","3069aa857dbf9d53777c67f96058c935"],["/posts/d3a745a8.html","3ffd80d37020433365233d7d73016cfc"],["/posts/dc815d5.html","7725b3ffe4cba0d88fca61af6fdbf0bc"],["/posts/e3ab6ad8.html","25bd9a4f2881c91847183e226db50876"],["/posts/e5018da6.html","9e3e0a134a4f18a9443bd5d35ff812d8"],["/posts/e5963272.html","6b03613269bb3c6533989e2afd0b7775"],["/posts/e624b065.html","85c8231479dbb10407efd65849d720f6"],["/posts/e91abb63.html","b71b7750c476d98cbee2e79d2fb3f013"],["/posts/ebaf2232.html","4e23262554a5e59553ee0c2d2c7ffdf3"],["/posts/ee1ed673.html","c350cf6208c2881dc2d46bd05a70d270"],["/posts/f0c3ed61.html","62cc98c8a2f30fba81f5a65e67266e99"],["/posts/f21e7f84.html","6d4f7f831dc58010d3756508e2e85519"],["/posts/f230b0fd.html","17b45c14c521fece7f270d4a1ee4d1aa"],["/posts/fc04d0d4.html","b20e605615546e6268603eae7be9c65c"],["/sumire/index.html","1b9ed14c5897429059c2f7def921bc12"],["/sw-register.js","a90a9824373729d356584ef0cdea920c"],["/tags/BL-Game/index.html","5e61f7da7022edae61da43507acaf596"],["/tags/CHUNSOFT/index.html","9960349275c9cbca2f850e318ddf1297"],["/tags/Cherry-Pie/index.html","603045ff48e7fb6c2ab79b01586d0ae4"],["/tags/Circle-Mebius/index.html","5043176e6bf764785a3f7614eaf3b191"],["/tags/Dopamine-Software/index.html","c1228d091cec30529889607863ad782f"],["/tags/Dos/index.html","50df607956143921266653c8bb216fb5"],["/tags/Earth-Well/index.html","470a279e6c4eb79ab4098016733e1fa3"],["/tags/Kanon/index.html","e0da0d65d2a12b36f8908d32302dae05"],["/tags/MANATSU-8/index.html","cb8bf0056c870a61b80931981691d042"],["/tags/O-S-I/index.html","e7e31588dc557aaba953aa238ac69fbc"],["/tags/Omegaの視界/index.html","258737736472e157af7962696f47fe88"],["/tags/PC88/index.html","eeaa5f0f6255bd0389616303a7d7196b"],["/tags/PC98/index.html","dd9cbfe36a4476428577fac7fd4f696f"],["/tags/Pleiades-Company/index.html","885c8940989bd22f15f0764a4b61b45e"],["/tags/Reverv/index.html","38fe0f856409f38bb281930a01757918"],["/tags/Saihate-SOFT/index.html","00e4f21b99ffb0ae3a8e54b79bff331d"],["/tags/StrayMoon/index.html","1f75eaedb743ff3d59cc7f93dc86d72f"],["/tags/ToHeart/index.html","948ca15242f0a11c8fed3d5779b4025f"],["/tags/Traumend/index.html","f9b6f9aba3d6074b30595f641604ce04"],["/tags/Witch/index.html","10a322f6e4186a56a7e1e671b8d5efde"],["/tags/adonis-project/index.html","49e3e76db60890b96591b4b1b8275898"],["/tags/flash/index.html","41c552c763ddafe5bb99bac3b090d3ec"],["/tags/galgame/index.html","fa569ec00e2c7ddadcc30ff510e1ceca"],["/tags/galgame/page/2/index.html","9d3921d2667679cb7597c1f1cc8985d9"],["/tags/gal资源/index.html","e5640afb84318fa73aa4f839803186cf"],["/tags/gal资源/page/2/index.html","ecd76d1ab00df7d05a43e2083984a2d3"],["/tags/gal资源/page/3/index.html","cb5106c905bde3b1fbdb978afebc7c24"],["/tags/index.html","5fdbb9bf76041f030d098e36b16cd247"],["/tags/rkr/index.html","52254d3556641f7d1bc46ecadfc83478"],["/tags/team-eye-mask/index.html","8aa65da7743659b894ecea710fe15cfe"],["/tags/いつものところ/index.html","d042a50ed6337b26138dbb511483a22e"],["/tags/きつねみみ饅頭/index.html","53fdb60912db8f463eb5948dac3cb134"],["/tags/ねこねこソフト/index.html","d86fb0880c27949460e9e45c5439ed92"],["/tags/ねこバナナ/index.html","974d857e5f3e6e41d1fbad31868ff2aa"],["/tags/はちみつくまさん/index.html","b30e9c79fe52dfa4d51035679d9cc296"],["/tags/ろりちせ/index.html","05e5f1fa56cfe841da9d5fa15834fa12"],["/tags/停产/index.html","2a079b4ef25ece78aa4f13a94500378c"],["/tags/公告/index.html","9d53fec21b53430afa01308280610741"],["/tags/同人/index.html","612fb708859cf45946b870ade91361fb"],["/tags/堀井雄二/index.html","22e9ebb9cabae50ad31c6aa82dc83b2b"],["/tags/外海なおき/index.html","e754d6a393f1057013b8cbd36a0dbd35"],["/tags/機械式少女/index.html","8ad115b7988ae34b8d2058ffb29a59d3"],["/tags/水仙/index.html","47a8bda6490d1845668b8b931bd801bf"],["/tags/片冈智/index.html","0afd73d5a0e70ade4c7ab38857aae1d3"],["/tags/片岡とも/index.html","dbcec51741e7de3973f8ecee5e02c763"],["/tags/牙の刻印制作委員会/index.html","ac4c0f3caf36af7606a4e77530cd93d8"],["/tags/牛カルビ定食-FLAT/index.html","d818cde6fb9e57135ce76465fd2150f7"],["/tags/牧尾屋/index.html","c71971cf54ef69b5af3b8dbb9fbc2528"],["/tags/猫猫社/index.html","1afc44e0cfbe7d6cc637556edf712d5c"],["/tags/王宮魔法劇団/index.html","be46ef09526be4b46c71abef425f1b13"],["/tags/画集/index.html","81c92a12dd7f63a0326dbde3f7657c88"],["/tags/索引/index.html","71038121c1cdcb78423d1a950ec8abc0"],["/tags/閂夜明/index.html","f4089d9e93673e37f1fb54aca670b1e5"]];
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
