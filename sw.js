/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","351e03c539d8b6d649ce9c98d2a70dbe"],["/archives/2024/04/index.html","cff25e467cc2b895183b0340e5bd960c"],["/archives/2024/index.html","0029922ebf4045f0b669ff477513f215"],["/archives/2025/02/index.html","6ff394a98486f005098acb8f2d378147"],["/archives/2025/02/page/2/index.html","43b18a3959fbb0b9cd5f0f9b126d2cbb"],["/archives/2025/02/page/3/index.html","62a3ced7258404f6d9354c64d871d572"],["/archives/2025/02/page/4/index.html","b681f7707e3dfe47a1e65bc52f437963"],["/archives/2025/02/page/5/index.html","71a6bfd7f3b89f3a67cb773817f24a7a"],["/archives/2025/03/index.html","c836146828ca0e4f432aa6527dc6fca4"],["/archives/2025/03/page/2/index.html","9e30666f183451558e71cfbcbc195d1a"],["/archives/2025/03/page/3/index.html","e36a0dec0d2b0612bf6992af39d28069"],["/archives/2025/03/page/4/index.html","4c7a1a7f8b28b92ea20847449418fac8"],["/archives/2025/index.html","069f6cdb183f93cb704047722f258e45"],["/archives/2025/page/2/index.html","1c2eb2bcd96993eaa4cd26afac2261c9"],["/archives/2025/page/3/index.html","83fe2d051802c69275e780980be16a76"],["/archives/2025/page/4/index.html","410b94c1b90bfb22919ebd0389398bd9"],["/archives/2025/page/5/index.html","c2e638539af281e5ec2852655488dfdd"],["/archives/2025/page/6/index.html","5eda690588cadf72747532f69d35670e"],["/archives/2025/page/7/index.html","b3c13dae2f3f9d5050edd1ae87716857"],["/archives/2025/page/8/index.html","b919a0b71701f55975d255427eae3013"],["/archives/2025/page/9/index.html","0b2628c26e55525e0cd9a67f36c1fb29"],["/archives/2026/02/index.html","1e897b52e50b618cfe74a675604bb6da"],["/archives/2026/index.html","492e7303499678743f2f7138cf5dbf09"],["/archives/2925/01/index.html","e08d0087557eabe00bc634c0efa40bd1"],["/archives/2925/index.html","c7937d1827120a1683bc0e3925a96300"],["/archives/index.html","629c04fb5acfcea00c2614d4c0c2bacf"],["/archives/page/2/index.html","e9d0cfd54b8eeaab4efc53e081de9e63"],["/archives/page/3/index.html","426c1837f0a6ea870ceb9e64e8adf40f"],["/archives/page/4/index.html","6201744a09fdb11dc5a4c2fe61352c5e"],["/archives/page/5/index.html","be27ae959e1eeffba143790c5a37ed25"],["/archives/page/6/index.html","843c4dad45ddad366709c7e69e34bbec"],["/archives/page/7/index.html","7ddcffb5f6c8e4a40599d6bd66a5d605"],["/archives/page/8/index.html","31d96afcbf53d71c15e3a31c65688383"],["/archives/page/9/index.html","dc1a11e6911a459df896a001885f2a51"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","894baa6ed09faaafc0957f3c8dc3fbbb"],["/categories/galgame/page/2/index.html","d2ff6d9e23d3980246a598a1e55c6a67"],["/categories/公告/index.html","f81f06b4582ccbcce0de9eb5309a0857"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","12bfcf7d13590ae99cbef6190375604f"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","a4d07b9c8da331b213760ddbe2ac0e56"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","97c60936bf99db932cdaafe289ad4648"],["/page/2/index.html","cad21ce03c8533d2e3b4fa65edd359f7"],["/page/3/index.html","cd7ba929a0c50434df455f6554270f4d"],["/page/4/index.html","0091e61f6ecf23cadbbcd2d2dc354435"],["/page/5/index.html","11f26a070e0e76143133f5cc42a3a04a"],["/page/6/index.html","22a51416f088d229960c789f759ccf1d"],["/page/7/index.html","a86fd6e7c306793bcabaab422fe6bd60"],["/page/8/index.html","3ef6b5d99615266d57abbdd85bd7de2d"],["/page/9/index.html","c1617b1bd4e59126647efb737811f12f"],["/posts/10c9dd98.html","b79ae18e6dd9c0bfa338bc176bf2a074"],["/posts/1295b569.html","51c98da9cdbc136d8a1d21140d91a63c"],["/posts/1370342.html","4a02613af7643fdf115196400c9f472a"],["/posts/15ef14c2.html","a8c5a92d7a84f48df0c3b06f4b0d8d4c"],["/posts/15f3959d.html","33cf0d5c00e442de36fb550e3f527d69"],["/posts/18ab785d.html","a3868ab447a6738a649a912634140e82"],["/posts/1d59b71f.html","77f76aff9cea69696c1f8eab6bbab5c6"],["/posts/20b3f3a4.html","c7cd3b47e5e37f3470eed32bdb1b4fcb"],["/posts/245f1c7d.html","2609a7b44b123f83ded6ffaaa7436cd4"],["/posts/252658f.html","015ea78ca169096af9532164ba88170d"],["/posts/28397adc.html","1910cc64a2ae4ceb4c4d7e7babd271d7"],["/posts/2c0a6836.html","a31d55762738fda572efb339f1134737"],["/posts/2cf620f0.html","55a7d65d68887323ab1b7779b75dd32e"],["/posts/2e30fd6d.html","f35e9f635cbb113878167afbbe052dc5"],["/posts/34292736.html","987ad44862ecb0754978ed580fa03b69"],["/posts/3468cbe.html","89d9d8ceb862c2b4a58c2b3b346d8c6d"],["/posts/3e118dbf.html","1ea13d1f112642f03bcc7379eb638f7c"],["/posts/3f7d823a.html","c7967e30cba67ea39560bbb161b4487f"],["/posts/43945723.html","a09dfa856ac23b780d19d2b63e7a0271"],["/posts/44124a6b.html","8c352e703471ba32e2fc355898142b32"],["/posts/47abb61d.html","5e266cdee831235e38fd47ceb6e093c0"],["/posts/4b689be3.html","e720e6c6eb0004d5b66acfa84fed869b"],["/posts/4cf8423f.html","918c1f4e20c8997cb50f64bafe7897ad"],["/posts/4dcf85c.html","dcd18ce7f883447728de25edf315f339"],["/posts/500cd322.html","90155f2b32abbbaa98b09a088cd11946"],["/posts/51c9b1ff.html","a8681c8fc83dcf653e8b9562e23076ad"],["/posts/52b5b3c6.html","ef77f4e54832b6754c8d82fd83a5ff3e"],["/posts/5f6e0c59.html","02b696747c87f2dcf847de23ccbdbf7d"],["/posts/6336a2f9.html","e13e00a4823ec14fbaf5cba757d74500"],["/posts/6432d61a.html","3ba1791e37fcb8dabdb3ac1f6a2694df"],["/posts/6515f032.html","d9a168ac4ec8db4b8f0b62d480856f0f"],["/posts/6720ccdd.html","e7d8aa042d69f1d290d7c2a977f6a1b9"],["/posts/6a4b5ac8.html","a3de35a350033627331e482fa70c352e"],["/posts/6aa4177c.html","c17169e6d99dece5ff49088d691df048"],["/posts/6b15f81f.html","24097fb59bd2c01173a5cf124aad6fd4"],["/posts/71131d34.html","5afa448818fe57b11b9c2e6e0f651578"],["/posts/78a8a8d3.html","086ddbbcff52ee0f7a646933248c5e01"],["/posts/7a5ef3d0.html","af6724f5acfbfa267f3a3839fa2c99b2"],["/posts/7b41e1ac.html","f1c395d54a8490c9a210930341f266a5"],["/posts/7b51011d.html","1bffcbbe678c72b9c2304db29b85a276"],["/posts/7e3aa3e2.html","df6f80b8cd5a38228ce867b048ff062a"],["/posts/80fe2691.html","264699e435bf66309499e974cc64f1d9"],["/posts/81ac52e9.html","cf79e3d841cc20ad2b2c42842c935adf"],["/posts/849b40f8.html","7083873c7f761e9749a933b0ffda4fc6"],["/posts/85c51d68.html","803e7ce5549e736e00429d66eab4541b"],["/posts/886f8d3.html","ec7e320c523f54d8e32712a76f15f741"],["/posts/8ac11b41.html","a072807841ee4ea682dc6b17e604942e"],["/posts/8dd520d9.html","2d225e1b114685e248ac1f6a521af919"],["/posts/8f555654.html","0ec56237c4dd4dd5fd5ba009d30281a0"],["/posts/92a980c2.html","8b68ec36080b2c99e702f6f7f9bebc63"],["/posts/94d3c794.html","8f71007d3ad813981c64fc3d8371fe00"],["/posts/97f50eea.html","fbca5135003551917f0fd60858ae468c"],["/posts/97fca8be.html","03701159d705aed64370db57d95ca264"],["/posts/98662d05.html","c1f49eb54694ae95a90019bff27e8754"],["/posts/9a2f6162.html","aa1e4b4cd8518a1d2183365a24d9c4cd"],["/posts/9b22a48d.html","8610a225555e86825c68e01d897ce513"],["/posts/9cb455b1.html","3c472546040bd904e482bfd2c001fa12"],["/posts/9f61c1a0.html","e4d56f4d8e7e9f5ff1b13bccf5170075"],["/posts/b497b647.html","efd468b075de2052c818bf6793b736fb"],["/posts/b5fb773f.html","254a95160705f2fa39f48c6ef45a3aac"],["/posts/b8d46b32.html","4c4db99277aaf36b82a9bea0293e9126"],["/posts/c1b2c6c9.html","d2504fe8dd3b98ef4e0dd3509d4e52db"],["/posts/c2111cbf.html","8cf6ea4632b6ee3fd317e32160a9ff87"],["/posts/c316c2e8.html","1474f4622c2916403a63bf75c78d189c"],["/posts/c43e60b5.html","c9eab6789e134e50595bc7aea1e2c926"],["/posts/c497a412.html","082668a8e197e97b65bd70b1c2fc20c2"],["/posts/c5de299a.html","be752d87c2a37baf1894d38d5c5db00c"],["/posts/c70bba9c.html","0a951abb74d82d927c56b278a077778e"],["/posts/cae2c959.html","b662b8fd5a461da97e257058116f1582"],["/posts/cbebef2b.html","45a250d0076fccd02bf82b05fb463d91"],["/posts/ce25023e.html","b21770faba092f9901bd697fd92c78b5"],["/posts/d2fd4837.html","3b1c1e4a23b444a24037bb97049bdbcd"],["/posts/d3233cbb.html","3069aa857dbf9d53777c67f96058c935"],["/posts/d3a745a8.html","eea084cccdf8f3f8068f9829be869ce9"],["/posts/dc815d5.html","d2c1a2e8f7b3a88b31d667906d00741a"],["/posts/e3ab6ad8.html","b22af51089a1ec64fce06ca5284d2da3"],["/posts/e5018da6.html","da137b3b1cc13824da697ecc6ad4fd1a"],["/posts/e5963272.html","6b03613269bb3c6533989e2afd0b7775"],["/posts/e624b065.html","131bbdde96865ffe38a3fec205cbe508"],["/posts/e91abb63.html","f556ea30d70b36e6b669731d6f285849"],["/posts/ebaf2232.html","4e23262554a5e59553ee0c2d2c7ffdf3"],["/posts/ee1ed673.html","175400b08731b8142225231635cbd237"],["/posts/f0c3ed61.html","62cc98c8a2f30fba81f5a65e67266e99"],["/posts/f21e7f84.html","05e733a67843f941d65d1652cb99bb71"],["/posts/f230b0fd.html","211640d26cde2f7cd76ca5a128122a3b"],["/posts/fc04d0d4.html","b20e605615546e6268603eae7be9c65c"],["/sumire/index.html","6cd870cb8ffbe351ca42adf41e6d54ec"],["/sw-register.js","bc79e64dc54832f82b9da750c2bbd997"],["/tags/BL-Game/index.html","d052de2331a1c6ff36c682241ebcc841"],["/tags/CHUNSOFT/index.html","88c41334f6edde5788c96120a8e97fbb"],["/tags/Cherry-Pie/index.html","32614820ffc2be41c2248c6ca1a7bc4a"],["/tags/Circle-Mebius/index.html","532b1dd8643bfdfa50481461655b3f4d"],["/tags/Dopamine-Software/index.html","7ec25bd2a5e1ba3e10cecbf0cc1a53ac"],["/tags/Dos/index.html","a22c6732f0c008c99634e92f6452619d"],["/tags/Earth-Well/index.html","a9521459a7f944bd68fe8c67b373e476"],["/tags/Kanon/index.html","0e1abbdc41ade62cbe37c4fc96034a57"],["/tags/MANATSU-8/index.html","4e0606beca85e6d7728f9fcc38620e14"],["/tags/O-S-I/index.html","cea6d2036f14b59beae9ea666a9dd151"],["/tags/Omegaの視界/index.html","b5af0eb18870bb156427fe731da73e1d"],["/tags/PC88/index.html","0002dff08e7cc2fe1f12d3753c7166d0"],["/tags/PC98/index.html","ff850864cc326bbc16e5507b4fb8c776"],["/tags/Pleiades-Company/index.html","00b48b391234bdfeabada266b5e0ff12"],["/tags/Reverv/index.html","89b33f8486192a774d2a4f7d10adfe7a"],["/tags/Saihate-SOFT/index.html","82254976718ef6c55a8a6dd6b0b6a76e"],["/tags/StrayMoon/index.html","508eeabc28bfd135d970034beedfcb9b"],["/tags/ToHeart/index.html","86acf91e77a90cc425b2c4fef5db5b47"],["/tags/Traumend/index.html","80246cc97fcd68272c12e45ac4793e2f"],["/tags/Witch/index.html","23f4d7ae56b81d455becebf232b13a04"],["/tags/adonis-project/index.html","e1fe6c671d2de28384dc52aba297e85a"],["/tags/flash/index.html","d2abb219812d00e19d22254d7228809e"],["/tags/galgame/index.html","63a65141a076ede67b3310b2f377c9fb"],["/tags/galgame/page/2/index.html","ea516db483670250fe8a550274dfad1c"],["/tags/gal资源/index.html","2bcb6464cb9c1dd7d2ebfe1cc13e66f6"],["/tags/gal资源/page/2/index.html","430e8e4d3625074f5e73961f4cec53e9"],["/tags/gal资源/page/3/index.html","090c6f99d81ccbb25492262cb6e44cf9"],["/tags/index.html","1d2c3e89e84dac92a11b4ba352f700f9"],["/tags/rkr/index.html","9c6662f2fa801dfe05ca2101a59725e3"],["/tags/team-eye-mask/index.html","9befbc7b3865a19df645c0a225168294"],["/tags/いつものところ/index.html","ca62759fc1aa8d40d9f2cd0037b7bcc9"],["/tags/きつねみみ饅頭/index.html","d34f27ee0781b297bbf15ab824c3fbf2"],["/tags/ねこねこソフト/index.html","454b8f90eb3b3730409d3fb28c709c29"],["/tags/ねこバナナ/index.html","b8fc50ecf3e3e42d54ca3184de52cef6"],["/tags/はちみつくまさん/index.html","09ef397c9ce32b595e0d05bf1e265577"],["/tags/ろりちせ/index.html","d3b76087b424ea1d001a68873ffa7f32"],["/tags/停产/index.html","14e2aea395ca341a39f9ce07cb34fe6d"],["/tags/公告/index.html","2935b837dcce0657a5dffbd3e9a282d1"],["/tags/同人/index.html","9473e82a773c407dbd4ab09846b65c9e"],["/tags/堀井雄二/index.html","8ae4877c3085dde6237bcf071271db74"],["/tags/外海なおき/index.html","32fb03256c6efca71995637bf76f844a"],["/tags/機械式少女/index.html","e1e3e9c2890c895264b77faa455a20e0"],["/tags/水仙/index.html","f8c485a2af6ea08fbb22e7911b1dbe70"],["/tags/片冈智/index.html","eab8c15d8deed150dd565ac19d910531"],["/tags/片岡とも/index.html","a4e0b3f0b324b274d545ef96de580520"],["/tags/牙の刻印制作委員会/index.html","b5e204d896c6b322558932a459b785f6"],["/tags/牛カルビ定食-FLAT/index.html","464c5e33270a91913809c0d6b1bcb14a"],["/tags/牧尾屋/index.html","1e0d75c162164167031f8841808e24c3"],["/tags/猫猫社/index.html","df94db112ced8b53a6910649109cf68f"],["/tags/王宮魔法劇団/index.html","2c6b33b58e03b53d00fa295cd24ae05a"],["/tags/画集/index.html","a995a1386fa2d86d28e7aabfb4b2e563"],["/tags/索引/index.html","add450f6b6061a121a80ade4d261d089"],["/tags/閂夜明/index.html","dd85c52f19fcb81c8978e8ae553fedc3"]];
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
