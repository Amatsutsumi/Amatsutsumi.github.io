/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a48501cfcae3cf4fdeb980d26d2998b3"],["/archives/2024/04/index.html","4820ded931ff71478930f1c2891993b8"],["/archives/2024/index.html","506d27fe693b0a9a7fbabe41af5bcde4"],["/archives/2025/02/index.html","6f4e6ecd72e9ccd108dd827aba4df36c"],["/archives/2025/02/page/2/index.html","1281faf57f7d2a1081ff9666a0663846"],["/archives/2025/02/page/3/index.html","b5526f28b3852431c82b2b73dd28c442"],["/archives/2025/02/page/4/index.html","16aaf1f6c8854a6f834b5f9cc6efef9f"],["/archives/2025/02/page/5/index.html","2bbb0e6b998d5a10aa23e142975b1fd3"],["/archives/2025/03/index.html","6df46b62318cf610bd5c991a14c315a8"],["/archives/2025/03/page/2/index.html","53af3e8bc8a1fa53d6656a1c4ab91482"],["/archives/2025/03/page/3/index.html","ee1268431a8f689dd558951c9dc25eb6"],["/archives/2025/03/page/4/index.html","cdbc3b9479b6e041de39aa3f19ea439b"],["/archives/2025/index.html","b8ee8bc800854869225c6cb0d43285e7"],["/archives/2025/page/2/index.html","cf606d737a3c1ed2096b9ba6260d256a"],["/archives/2025/page/3/index.html","4ce3987470f3509e50656dc9dcbce0c8"],["/archives/2025/page/4/index.html","41753900580df896cfcd6373fbf78d8c"],["/archives/2025/page/5/index.html","72f272f4916b1b4817b2bfff30fe9520"],["/archives/2025/page/6/index.html","3dffee500db676ff4e1477fc6d2958ca"],["/archives/2025/page/7/index.html","4a442af3ef55fc52ba9b82e2208745ed"],["/archives/2025/page/8/index.html","ce964f6aab69c40ed5b67bd27b8551ff"],["/archives/2025/page/9/index.html","49c7b4eacb6626afaeb20ffb90d03226"],["/archives/2026/02/index.html","264b318441b8e4cf92886946280664bd"],["/archives/2026/index.html","df0ff9c767a153933d819f7d3d45c3ca"],["/archives/2925/01/index.html","540addc1e21aa6d6c8e6c82b43c50618"],["/archives/2925/index.html","957eebf7da42809e61b4647c6c303208"],["/archives/index.html","0c5cf8d574d032005f2a8b1312223a15"],["/archives/page/2/index.html","a143b0bff8d0056686d781f6afabaea0"],["/archives/page/3/index.html","156794a0cfc8a175b6459cd9cda621c8"],["/archives/page/4/index.html","4ae666e06b228b064e5d60f21ae42308"],["/archives/page/5/index.html","d7e7210c1364ad269a403cc44fdda0ca"],["/archives/page/6/index.html","7a3b2ba33136f12beec7bfdbf0f4fe9d"],["/archives/page/7/index.html","638f49a47cc724615ddcec83a8c80e7e"],["/archives/page/8/index.html","028e85275d34949586f3af7f6129d5ca"],["/archives/page/9/index.html","264849254de29cddf80eed846557589a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","cddd37e5a9fd2672ffd9671937587141"],["/categories/galgame/page/2/index.html","23b63cb2518c3a593011c6e9f853c474"],["/categories/公告/index.html","36879ea3bdc62e4ae77cbc7d0c0e83f8"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","4bb66610a0af20ac08c6f139c24eede6"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","86aa314492dc0ae84fe6091007f9d6ed"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","84fa068ae959d5c2301c49c0085c47d1"],["/page/2/index.html","713c6a8c6d73901af511e06b71a9d450"],["/page/3/index.html","c72d8f84c6e74941eac1e37a424948cc"],["/page/4/index.html","4512f920ba991b50261d77a7337a6052"],["/page/5/index.html","eb4026bf617418ff499d08e646ad6a43"],["/page/6/index.html","a062bef0380d03746a7bd6425a49f436"],["/page/7/index.html","d581ebed73d962fed35f01ed1372d627"],["/page/8/index.html","0ec09fd09b75654c95360163fc3a7417"],["/page/9/index.html","91baeeb2c84cad8e324cd9fcb8f6ca3c"],["/posts/10c9dd98.html","369325740af44cda761dbaf667eb4def"],["/posts/1295b569.html","51c98da9cdbc136d8a1d21140d91a63c"],["/posts/1370342.html","4a02613af7643fdf115196400c9f472a"],["/posts/15ef14c2.html","a8c5a92d7a84f48df0c3b06f4b0d8d4c"],["/posts/15f3959d.html","33cf0d5c00e442de36fb550e3f527d69"],["/posts/18ab785d.html","a3868ab447a6738a649a912634140e82"],["/posts/1d59b71f.html","2d64612c4c748c5c87ded5340a01ce5a"],["/posts/20b3f3a4.html","6d78dcd2adf0ffd0e0c450e41757c198"],["/posts/245f1c7d.html","2609a7b44b123f83ded6ffaaa7436cd4"],["/posts/252658f.html","86832f2175c97509f194601fcb170c4e"],["/posts/28397adc.html","95357a0628982389d944867950a786bb"],["/posts/2c0a6836.html","a31d55762738fda572efb339f1134737"],["/posts/2cf620f0.html","cebe017e4af08dc3dff963d82f52b7f2"],["/posts/2e30fd6d.html","f35e9f635cbb113878167afbbe052dc5"],["/posts/34292736.html","987ad44862ecb0754978ed580fa03b69"],["/posts/3468cbe.html","89d9d8ceb862c2b4a58c2b3b346d8c6d"],["/posts/3e118dbf.html","1ea13d1f112642f03bcc7379eb638f7c"],["/posts/3f7d823a.html","c7967e30cba67ea39560bbb161b4487f"],["/posts/43945723.html","a09dfa856ac23b780d19d2b63e7a0271"],["/posts/44124a6b.html","8c352e703471ba32e2fc355898142b32"],["/posts/47abb61d.html","5e266cdee831235e38fd47ceb6e093c0"],["/posts/4b689be3.html","5ce6956a1d47ac3bac84776a43f74596"],["/posts/4cf8423f.html","918c1f4e20c8997cb50f64bafe7897ad"],["/posts/4dcf85c.html","35307a6a173e945b0a64cabca0b8b000"],["/posts/500cd322.html","90155f2b32abbbaa98b09a088cd11946"],["/posts/51c9b1ff.html","37718e03e0ff541368e26856a5a5904a"],["/posts/52b5b3c6.html","f09ee91397d6a160f8a0ceb0fafcb7c4"],["/posts/5f6e0c59.html","02b696747c87f2dcf847de23ccbdbf7d"],["/posts/6336a2f9.html","8250f80ea8a953d3820e6c5088752a26"],["/posts/6432d61a.html","3ba1791e37fcb8dabdb3ac1f6a2694df"],["/posts/6515f032.html","f9154d4f5f2239d5b185920ad8b2833e"],["/posts/6720ccdd.html","91ec09b89145e1cef715e431bb3f64af"],["/posts/6a4b5ac8.html","6d44c75be00cb00ab911f0e4eaefdb4c"],["/posts/6aa4177c.html","c17169e6d99dece5ff49088d691df048"],["/posts/6b15f81f.html","24097fb59bd2c01173a5cf124aad6fd4"],["/posts/71131d34.html","5afa448818fe57b11b9c2e6e0f651578"],["/posts/78a8a8d3.html","e9ce88801782327f52c57509e125be2b"],["/posts/7a5ef3d0.html","af6724f5acfbfa267f3a3839fa2c99b2"],["/posts/7b41e1ac.html","f1c395d54a8490c9a210930341f266a5"],["/posts/7b51011d.html","1bffcbbe678c72b9c2304db29b85a276"],["/posts/7e3aa3e2.html","2366749a0b214a16f7f8b17b525501c1"],["/posts/80fe2691.html","df1f3a2d3cddb199fcef300a70b21893"],["/posts/81ac52e9.html","cf79e3d841cc20ad2b2c42842c935adf"],["/posts/849b40f8.html","e859e40850b50972c40ff86c0dcc440e"],["/posts/85c51d68.html","803e7ce5549e736e00429d66eab4541b"],["/posts/886f8d3.html","30b1be243aef1eeb4e37eac2a13abe2c"],["/posts/8ac11b41.html","a072807841ee4ea682dc6b17e604942e"],["/posts/8dd520d9.html","2d225e1b114685e248ac1f6a521af919"],["/posts/8f555654.html","6a70cd61316f3f4a7b4c888feea15560"],["/posts/92a980c2.html","941e00b6ae8a1f6f38c571a5bb6545ae"],["/posts/94d3c794.html","b268a53e5c584616d42ee1cade668b29"],["/posts/97f50eea.html","fbca5135003551917f0fd60858ae468c"],["/posts/97fca8be.html","03701159d705aed64370db57d95ca264"],["/posts/98662d05.html","a705eed9c0407c7a56a46677308b0902"],["/posts/9a2f6162.html","aa1e4b4cd8518a1d2183365a24d9c4cd"],["/posts/9b22a48d.html","943e0ac30a2fc926c1d5adedced2b9c0"],["/posts/9cb455b1.html","168537b489c9b1e17efb839827fde12f"],["/posts/9f61c1a0.html","e4d56f4d8e7e9f5ff1b13bccf5170075"],["/posts/b497b647.html","392eaaebc9beb241b5e470f8b923c1f5"],["/posts/b5fb773f.html","77eedc9f01d96d50f679de2b0ec93530"],["/posts/b8d46b32.html","4c4db99277aaf36b82a9bea0293e9126"],["/posts/c1b2c6c9.html","147b882ded4ad44e106e003a37f8e567"],["/posts/c2111cbf.html","8cf6ea4632b6ee3fd317e32160a9ff87"],["/posts/c316c2e8.html","dbdc1f64aa51ca68f321fad46ade85ad"],["/posts/c43e60b5.html","c9eab6789e134e50595bc7aea1e2c926"],["/posts/c497a412.html","14c5b1fae5326f0d357fef47dec20d1f"],["/posts/c5de299a.html","be752d87c2a37baf1894d38d5c5db00c"],["/posts/c70bba9c.html","39af6c427aefacefe2a17a56b19db70a"],["/posts/cae2c959.html","a411304e31c359b6e2d719c43ed324a8"],["/posts/cbebef2b.html","01f2c71aa43dc4f6075d8c4a6ab80a07"],["/posts/ce25023e.html","9f9708227c8f2e1f70804488b9262f28"],["/posts/d2fd4837.html","5783c90722e0bae250dd0e8da2695375"],["/posts/d3233cbb.html","3069aa857dbf9d53777c67f96058c935"],["/posts/d3a745a8.html","3ffd80d37020433365233d7d73016cfc"],["/posts/dc815d5.html","2f6ed2a0b6c8254b3a2fc659ba89b0dc"],["/posts/e3ab6ad8.html","05d1712fbee6ba19f19c2010b3f0783f"],["/posts/e5018da6.html","9e3e0a134a4f18a9443bd5d35ff812d8"],["/posts/e5963272.html","6b03613269bb3c6533989e2afd0b7775"],["/posts/e624b065.html","85c8231479dbb10407efd65849d720f6"],["/posts/e91abb63.html","b71b7750c476d98cbee2e79d2fb3f013"],["/posts/ebaf2232.html","4e23262554a5e59553ee0c2d2c7ffdf3"],["/posts/ee1ed673.html","175400b08731b8142225231635cbd237"],["/posts/f0c3ed61.html","62cc98c8a2f30fba81f5a65e67266e99"],["/posts/f21e7f84.html","6d4f7f831dc58010d3756508e2e85519"],["/posts/f230b0fd.html","17b45c14c521fece7f270d4a1ee4d1aa"],["/posts/fc04d0d4.html","b20e605615546e6268603eae7be9c65c"],["/sumire/index.html","641fe7675dc8a6705a8cb191c71b773b"],["/sw-register.js","a228e4d8043142b0d7545fe5a090c7b6"],["/tags/BL-Game/index.html","bf0561a81bf53e5a3bfd6498ed34ae0d"],["/tags/CHUNSOFT/index.html","d9810b73d334a279b7ce551290e34355"],["/tags/Cherry-Pie/index.html","8c8aa47c20064246d292a6ecbc9b7c6f"],["/tags/Circle-Mebius/index.html","23a8455dd6da6ab6828aa374571b6f1c"],["/tags/Dopamine-Software/index.html","7fbd068baaa2fd942641f16afa7ba5f5"],["/tags/Dos/index.html","08542bd2e490231ed9018bc142d7651d"],["/tags/Earth-Well/index.html","153487ee676210736017fa8e07c866e7"],["/tags/Kanon/index.html","65fac2243b8b86f1d9cc667a8e20ecf6"],["/tags/MANATSU-8/index.html","e0a5ee8e410de461e0b75d6ac5790d4f"],["/tags/O-S-I/index.html","ee8ce409307f55904a3c893c7c51b0a2"],["/tags/Omegaの視界/index.html","962f41acd36f7b9fbe30cd8b4360a8b1"],["/tags/PC88/index.html","e16469ab2c783f69f7c5bb8ac461dc98"],["/tags/PC98/index.html","75173ea56cf4ac5733c7cfe939f3e6dd"],["/tags/Pleiades-Company/index.html","1d5a6a2a9852d571e5ea875d039d8b46"],["/tags/Reverv/index.html","add92c97d0aaf9cf789cc23b393d8d26"],["/tags/Saihate-SOFT/index.html","261c89db120a1def1e6d886851497853"],["/tags/StrayMoon/index.html","3ce2fcdef28f81bed6677b03ab9b2967"],["/tags/ToHeart/index.html","a6ef00261ee9b69207a106f88812d40a"],["/tags/Traumend/index.html","d921971b78322bb8232b0c50d4e4b854"],["/tags/Witch/index.html","a60b852871664b8848e506101c143b45"],["/tags/adonis-project/index.html","728056b061ee6c711f2ad3b8bd05e019"],["/tags/flash/index.html","d8a225002d39cfcfd51c925ae9a46e64"],["/tags/galgame/index.html","493d79d453240cfb48bc1308fbba5063"],["/tags/galgame/page/2/index.html","40b32cd8209e71dc78296345d0e48f9a"],["/tags/gal资源/index.html","88c645e7760f68378d41878bc6a0d990"],["/tags/gal资源/page/2/index.html","c4d41e05a8ee0f546fa955c4562b1db7"],["/tags/gal资源/page/3/index.html","e065958548633c723e8b237399efb330"],["/tags/index.html","562c28485b534e5b5001e587de657e33"],["/tags/rkr/index.html","ef7e9d733bfaa9bb2d110ef1da5c81e7"],["/tags/team-eye-mask/index.html","e77605df420e3f2dc00821486a4351ef"],["/tags/いつものところ/index.html","f3a83ab394a72613b9fa41359a23a2a2"],["/tags/きつねみみ饅頭/index.html","9a580c7eafcfdd41515017e7aff520c4"],["/tags/ねこねこソフト/index.html","269930d6bce3451be3aa9c0ee6995ddd"],["/tags/ねこバナナ/index.html","aedf9bf466551b7d5384c78a2d10c11e"],["/tags/はちみつくまさん/index.html","73f8aa626c372d2bb5ee82417dddcfd5"],["/tags/ろりちせ/index.html","41c673f4cd7a69a1db41389a9aa79b9d"],["/tags/停产/index.html","06b7b911b2e74f6f7ee095d291a7b791"],["/tags/公告/index.html","20d0ef8400a63e1b5a2bc31116d01a0e"],["/tags/同人/index.html","f3b939179eae3d313b2ef28b06d0781e"],["/tags/堀井雄二/index.html","deb35091068a4a36408a8a39107d94ad"],["/tags/外海なおき/index.html","dc805887c80cc15232e015f992395dda"],["/tags/機械式少女/index.html","2a09e0cdb0f96514e46da669c0e01bc1"],["/tags/水仙/index.html","b64749590f67353c0e6933f7220a73ca"],["/tags/片冈智/index.html","fa9403379154f23450074e368796e43e"],["/tags/片岡とも/index.html","34b2b16d2d57e439a530a18f2d1494f4"],["/tags/牙の刻印制作委員会/index.html","5ed37d2a831cf6f170ae4f0d23741aa7"],["/tags/牛カルビ定食-FLAT/index.html","74325bfb7f257df9df266326f968cf7d"],["/tags/牧尾屋/index.html","b5969e0f96e966617a5fa7f41c36933a"],["/tags/猫猫社/index.html","aa12e0982a2fcdfd9593ec6812641c71"],["/tags/王宮魔法劇団/index.html","fa31d0a7d090b749a3ae21cb3c4875dc"],["/tags/画集/index.html","52e69179e574db5003227d907e34a02b"],["/tags/索引/index.html","869a797bd859734eb9fa59971657ca8c"],["/tags/閂夜明/index.html","a1c2616939ad7cc4a1e460a552d2a02a"]];
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
