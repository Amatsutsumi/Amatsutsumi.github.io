/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","4ff0aece4d9af31efe99fd893f57878a"],["/archives/2024/04/index.html","842210df8b0875b99b0fc4e4c14acc54"],["/archives/2024/index.html","3b94bb6aa71e4d977edcdae25ff504ff"],["/archives/2025/02/index.html","e6cd9c3fc372868fc41093b1cff365c8"],["/archives/2025/02/page/2/index.html","1ea35c5ab922b39c4af7539d655f838c"],["/archives/2025/02/page/3/index.html","ab115945a127613a5b3d08826b398a1a"],["/archives/2025/02/page/4/index.html","2839be8730ea81469ec7e473cd1a9dd9"],["/archives/2025/02/page/5/index.html","725e1c0ad8f1e238c08178026f2a5fec"],["/archives/2025/03/index.html","75dbb1e0d126ac132cfd812962e1949c"],["/archives/2025/03/page/2/index.html","399a1b9a794de58da03f815a5edbad19"],["/archives/2025/03/page/3/index.html","5005cb1ee050ffef6a035358bd93311f"],["/archives/2025/03/page/4/index.html","cc25676093e37a21575716f778ba2fa7"],["/archives/2025/index.html","9ba60892a72b703ee0256541774d1393"],["/archives/2025/page/2/index.html","89b6eb62e97b934b1242646140036a12"],["/archives/2025/page/3/index.html","d8caf9655bb5fdac394a18438acd2f9f"],["/archives/2025/page/4/index.html","be26db80cfbbc048f86970370e63bf4e"],["/archives/2025/page/5/index.html","3308e0eec7e2c2c392ae267aff57ab25"],["/archives/2025/page/6/index.html","3fa0c49bc68fe188bd7dd866e7f0bb56"],["/archives/2025/page/7/index.html","20bf2f70f8446c374a3c2d0e9bf9cd66"],["/archives/2025/page/8/index.html","f100b624ab0fd3ba3ec2ae9973d21fec"],["/archives/2025/page/9/index.html","3cf6c9a2f85b88b1bf2de4cf07343728"],["/archives/2026/02/index.html","a3cda199479e308475efcc346e457041"],["/archives/2026/index.html","94c84ffdd18955eb91ed4491851eaf38"],["/archives/2925/01/index.html","9b6241965986bee9c0c9c3f19b042f79"],["/archives/2925/index.html","0996d4c44ccdeb0236ad8e8ed3d020c9"],["/archives/index.html","ecc62251bd6af4fcdb63ab1541758e2d"],["/archives/page/2/index.html","99cc9ac7d0b98562b508893b1cef31c6"],["/archives/page/3/index.html","884102d09bad57a84787ac7622409d73"],["/archives/page/4/index.html","2d9add4361fb4301999226e0b9e19b67"],["/archives/page/5/index.html","bba7bca745dbc375e80c908d1d47649e"],["/archives/page/6/index.html","9be9cf61d40529cd022fb252e21e89f6"],["/archives/page/7/index.html","75a160e21d7cf3295c41e9803c7eaa4f"],["/archives/page/8/index.html","5245b3789096a403903a54fb132ba050"],["/archives/page/9/index.html","a18c6b64c9c79fa6c00fe040560bcb3e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","09881d3711c829550af8f6a127102fb4"],["/categories/galgame/page/2/index.html","7ac2e0e38d2dbc563708b40a91497a79"],["/categories/公告/index.html","7ef83e8ff75371a9503e0992a488506b"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","ea6b01a1c09a1f759a0a0729a1e87c97"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","f3c73fb17e84af542ecd3f766b631340"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","25fc7b960cf5fe1c2ab36c874969f386"],["/page/2/index.html","bdcd86c86542fd2632d27897cc86b037"],["/page/3/index.html","92432bc76e298033917d7569a3c1aff6"],["/page/4/index.html","06439d54f95fb54cb00eea51d50e1f00"],["/page/5/index.html","e7cb0b85d2bf6e41209d4eb353976cc3"],["/page/6/index.html","3e75820777d053708bf4a6cedf194918"],["/page/7/index.html","db1f72c1a2f8a3c12fc9e0534d9098b4"],["/page/8/index.html","f4ffd27713400656049a785e94b8a4be"],["/page/9/index.html","5e3de9b744d498ac89cd02372326c092"],["/posts/10c9dd98.html","369325740af44cda761dbaf667eb4def"],["/posts/1295b569.html","51c98da9cdbc136d8a1d21140d91a63c"],["/posts/1370342.html","4a02613af7643fdf115196400c9f472a"],["/posts/15ef14c2.html","a8c5a92d7a84f48df0c3b06f4b0d8d4c"],["/posts/15f3959d.html","33cf0d5c00e442de36fb550e3f527d69"],["/posts/18ab785d.html","a3868ab447a6738a649a912634140e82"],["/posts/1d59b71f.html","2d64612c4c748c5c87ded5340a01ce5a"],["/posts/20b3f3a4.html","6d78dcd2adf0ffd0e0c450e41757c198"],["/posts/245f1c7d.html","2609a7b44b123f83ded6ffaaa7436cd4"],["/posts/252658f.html","86832f2175c97509f194601fcb170c4e"],["/posts/28397adc.html","d8199fb7c4399032569bc6ae27007888"],["/posts/2c0a6836.html","a31d55762738fda572efb339f1134737"],["/posts/2cf620f0.html","cebe017e4af08dc3dff963d82f52b7f2"],["/posts/2e30fd6d.html","f35e9f635cbb113878167afbbe052dc5"],["/posts/34292736.html","987ad44862ecb0754978ed580fa03b69"],["/posts/3468cbe.html","89d9d8ceb862c2b4a58c2b3b346d8c6d"],["/posts/3e118dbf.html","1ea13d1f112642f03bcc7379eb638f7c"],["/posts/3f7d823a.html","c7967e30cba67ea39560bbb161b4487f"],["/posts/43945723.html","a09dfa856ac23b780d19d2b63e7a0271"],["/posts/44124a6b.html","8c352e703471ba32e2fc355898142b32"],["/posts/47abb61d.html","5e266cdee831235e38fd47ceb6e093c0"],["/posts/4b689be3.html","5ce6956a1d47ac3bac84776a43f74596"],["/posts/4cf8423f.html","918c1f4e20c8997cb50f64bafe7897ad"],["/posts/4dcf85c.html","35307a6a173e945b0a64cabca0b8b000"],["/posts/500cd322.html","90155f2b32abbbaa98b09a088cd11946"],["/posts/51c9b1ff.html","37718e03e0ff541368e26856a5a5904a"],["/posts/52b5b3c6.html","f09ee91397d6a160f8a0ceb0fafcb7c4"],["/posts/5f6e0c59.html","02b696747c87f2dcf847de23ccbdbf7d"],["/posts/6336a2f9.html","667f9020424ca7fec384f0b1f7b24d91"],["/posts/6432d61a.html","3ba1791e37fcb8dabdb3ac1f6a2694df"],["/posts/6515f032.html","f9154d4f5f2239d5b185920ad8b2833e"],["/posts/6720ccdd.html","91ec09b89145e1cef715e431bb3f64af"],["/posts/6a4b5ac8.html","6d44c75be00cb00ab911f0e4eaefdb4c"],["/posts/6aa4177c.html","c17169e6d99dece5ff49088d691df048"],["/posts/6b15f81f.html","24097fb59bd2c01173a5cf124aad6fd4"],["/posts/71131d34.html","5afa448818fe57b11b9c2e6e0f651578"],["/posts/78a8a8d3.html","e9ce88801782327f52c57509e125be2b"],["/posts/7a5ef3d0.html","af6724f5acfbfa267f3a3839fa2c99b2"],["/posts/7b41e1ac.html","f1c395d54a8490c9a210930341f266a5"],["/posts/7b51011d.html","1bffcbbe678c72b9c2304db29b85a276"],["/posts/7e3aa3e2.html","2366749a0b214a16f7f8b17b525501c1"],["/posts/80fe2691.html","df1f3a2d3cddb199fcef300a70b21893"],["/posts/81ac52e9.html","491171c66cf8ac7503b17f0a88147642"],["/posts/849b40f8.html","e859e40850b50972c40ff86c0dcc440e"],["/posts/85c51d68.html","803e7ce5549e736e00429d66eab4541b"],["/posts/886f8d3.html","30b1be243aef1eeb4e37eac2a13abe2c"],["/posts/8ac11b41.html","a072807841ee4ea682dc6b17e604942e"],["/posts/8dd520d9.html","2d225e1b114685e248ac1f6a521af919"],["/posts/8f555654.html","6a70cd61316f3f4a7b4c888feea15560"],["/posts/92a980c2.html","8b68ec36080b2c99e702f6f7f9bebc63"],["/posts/94d3c794.html","b268a53e5c584616d42ee1cade668b29"],["/posts/97f50eea.html","fbca5135003551917f0fd60858ae468c"],["/posts/97fca8be.html","03701159d705aed64370db57d95ca264"],["/posts/98662d05.html","a705eed9c0407c7a56a46677308b0902"],["/posts/9a2f6162.html","aa1e4b4cd8518a1d2183365a24d9c4cd"],["/posts/9b22a48d.html","943e0ac30a2fc926c1d5adedced2b9c0"],["/posts/9cb455b1.html","168537b489c9b1e17efb839827fde12f"],["/posts/9f61c1a0.html","e4d56f4d8e7e9f5ff1b13bccf5170075"],["/posts/b497b647.html","392eaaebc9beb241b5e470f8b923c1f5"],["/posts/b5fb773f.html","77eedc9f01d96d50f679de2b0ec93530"],["/posts/b8d46b32.html","4c4db99277aaf36b82a9bea0293e9126"],["/posts/c1b2c6c9.html","147b882ded4ad44e106e003a37f8e567"],["/posts/c2111cbf.html","8cf6ea4632b6ee3fd317e32160a9ff87"],["/posts/c316c2e8.html","dbdc1f64aa51ca68f321fad46ade85ad"],["/posts/c43e60b5.html","c9eab6789e134e50595bc7aea1e2c926"],["/posts/c497a412.html","14c5b1fae5326f0d357fef47dec20d1f"],["/posts/c5de299a.html","be752d87c2a37baf1894d38d5c5db00c"],["/posts/c70bba9c.html","39af6c427aefacefe2a17a56b19db70a"],["/posts/cae2c959.html","328cb459c8a6574539b79fa97263a1c9"],["/posts/cbebef2b.html","01f2c71aa43dc4f6075d8c4a6ab80a07"],["/posts/ce25023e.html","9f9708227c8f2e1f70804488b9262f28"],["/posts/d2fd4837.html","5783c90722e0bae250dd0e8da2695375"],["/posts/d3233cbb.html","3069aa857dbf9d53777c67f96058c935"],["/posts/d3a745a8.html","3ffd80d37020433365233d7d73016cfc"],["/posts/dc815d5.html","44060fae78d3c503d997b56a858895b9"],["/posts/e3ab6ad8.html","05d1712fbee6ba19f19c2010b3f0783f"],["/posts/e5018da6.html","9e3e0a134a4f18a9443bd5d35ff812d8"],["/posts/e5963272.html","6b03613269bb3c6533989e2afd0b7775"],["/posts/e624b065.html","85c8231479dbb10407efd65849d720f6"],["/posts/e91abb63.html","b71b7750c476d98cbee2e79d2fb3f013"],["/posts/ebaf2232.html","4e23262554a5e59553ee0c2d2c7ffdf3"],["/posts/ee1ed673.html","175400b08731b8142225231635cbd237"],["/posts/f0c3ed61.html","62cc98c8a2f30fba81f5a65e67266e99"],["/posts/f21e7f84.html","6d4f7f831dc58010d3756508e2e85519"],["/posts/f230b0fd.html","17b45c14c521fece7f270d4a1ee4d1aa"],["/posts/fc04d0d4.html","b49e4d72945f44419b44b77b1471d94a"],["/sumire/index.html","83d27de001b85d9b1f74d1624bef9848"],["/sw-register.js","b00d586b210a44612c5a7984458fa548"],["/tags/BL-Game/index.html","f47d4e93e2ad966fd2312b1f8a0b272e"],["/tags/CHUNSOFT/index.html","131c467390ec7ed2820a14b4da2fd96b"],["/tags/Cherry-Pie/index.html","efa575eced449187be25881163fcae8d"],["/tags/Circle-Mebius/index.html","2eee0daccd4292b87e3303db06cf490d"],["/tags/Dopamine-Software/index.html","bec7e250f360b89aa518b99c57bf8c5e"],["/tags/Dos/index.html","738ec4140ce6682ab21c6e69f6dbb129"],["/tags/Earth-Well/index.html","593229f5fb0f6ecfc1634235c65d3541"],["/tags/Kanon/index.html","92c79bc21d8c69dccc9258c7e8955009"],["/tags/MANATSU-8/index.html","055fba3a58a681a46f50ae261ca2d355"],["/tags/O-S-I/index.html","801553d21e282d2a7fd05eb1fdda98f3"],["/tags/Omegaの視界/index.html","05f8e50b1a3cca9e86b788bcfc5e0381"],["/tags/PC88/index.html","3bf0975a65c19a59697ff4d9a43a51de"],["/tags/PC98/index.html","f330f8360564b35e1279bf90d9726c58"],["/tags/Pleiades-Company/index.html","a4a576bf633e7ae0548d4cf416daf236"],["/tags/Reverv/index.html","781d966607b8f0d3193f8fb7138cf5b0"],["/tags/Saihate-SOFT/index.html","881dcd248b5a9e4fe38212be37cf5ada"],["/tags/StrayMoon/index.html","c77c092677683cf31445af18de66f6b1"],["/tags/ToHeart/index.html","c6179aeb304a6e8d29e6bb1e28e78d2d"],["/tags/Traumend/index.html","6ca2d56b5d791bf172b0fb2182f17c6b"],["/tags/Witch/index.html","40840b0e5e38131701e86140b0cd8f1c"],["/tags/adonis-project/index.html","fd890d59b9b7f61b2021292a98b3339a"],["/tags/flash/index.html","73d18068639bc614a01e9feac2fc8fe9"],["/tags/galgame/index.html","9a74bcd53f633104f26519d6e66c3194"],["/tags/galgame/page/2/index.html","f85d4b5bd05f612fa42f03f8470b2f69"],["/tags/gal资源/index.html","90591ac05189a38218143e448d91766a"],["/tags/gal资源/page/2/index.html","4a80db0bd80f5e72d7f3d3329ada11b9"],["/tags/gal资源/page/3/index.html","c140c23b3f87d6ef4fb8e16b5ea7e7d4"],["/tags/index.html","80423181812610c618dae91321abbe95"],["/tags/rkr/index.html","5eb6af409bc81cb1e580b9c9a7e430f9"],["/tags/team-eye-mask/index.html","f8778840824c4bf513b317e1221d1fcb"],["/tags/いつものところ/index.html","c67badea399beb43334667393734e184"],["/tags/きつねみみ饅頭/index.html","e674e1794167569f6e96c405ea9157c7"],["/tags/ねこねこソフト/index.html","a06832e290c268d2b862ae55b39ce564"],["/tags/ねこバナナ/index.html","8cd3d292d86fa6235cbbbdf4aa40b13b"],["/tags/はちみつくまさん/index.html","f034300fbe4ceb9b7cd8f976e7ca1097"],["/tags/ろりちせ/index.html","eb757a56dddfc541112f6807b272dc04"],["/tags/停产/index.html","a0ce1bd283fa094ab47d62c7601d0006"],["/tags/公告/index.html","92e8dd5f2f778e4b679d975b57835b69"],["/tags/同人/index.html","f427b1474a87aacc8337e7022f50af42"],["/tags/堀井雄二/index.html","9a14d48e237cdfc4a5b00d6582ed270c"],["/tags/外海なおき/index.html","9f244060b5c03d1f28750ca512f879cb"],["/tags/機械式少女/index.html","0c5a52a03baf4fc3ec0cf91560933d9a"],["/tags/水仙/index.html","996cbd15da3d0db8843c00a3fc531141"],["/tags/片冈智/index.html","4b694ee964b97d9ac3e60aedd7504d46"],["/tags/片岡とも/index.html","982819756ec14654ec7e1cc5e6cca407"],["/tags/牙の刻印制作委員会/index.html","3bb5bfcb065da16c8d1ff55efa52be1b"],["/tags/牛カルビ定食-FLAT/index.html","af646e7d756858092d1b21a8751552dc"],["/tags/牧尾屋/index.html","6932417dd64391010d31ad152a8335b5"],["/tags/猫猫社/index.html","2a4225e26194eb04e49028411300e5a5"],["/tags/王宮魔法劇団/index.html","ad5bec6216d16d4c862cc4b4304b9dda"],["/tags/画集/index.html","42936dc13ba5fb3651f508c1816506f3"],["/tags/索引/index.html","69812e0e1d65d2b38085e0b2a509de38"],["/tags/閂夜明/index.html","5550a69dd64d95e4db0732889fd328e4"]];
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
