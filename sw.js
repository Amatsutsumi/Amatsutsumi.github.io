/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","530b62d1d6979919bce796d8535a4e83"],["/archives/2024/04/index.html","dcf3200b9c8baad7eb5268924a415f93"],["/archives/2024/index.html","38dee8d9cf3251b46ddf280081faadc8"],["/archives/2025/02/index.html","9bd42768dd17acfe279e39c541765774"],["/archives/2025/02/page/2/index.html","988237b1e03a807f19611c91f7ccc957"],["/archives/2025/02/page/3/index.html","464e3022a769e77532edf08075c84a7c"],["/archives/2025/02/page/4/index.html","6f00877cba44f09d15d9432991faf7c8"],["/archives/2025/02/page/5/index.html","91d173c23fa6d85c33c1af8214103d04"],["/archives/2025/03/index.html","4537c7824e0cc2b5277e424688a4d42a"],["/archives/2025/03/page/2/index.html","5344223461b00d9226a5a2603faf9e67"],["/archives/2025/03/page/3/index.html","f94ebd8cee9e48d30717ff287bd92ff5"],["/archives/2025/03/page/4/index.html","db93aa12eabd39c29e277b158b35814d"],["/archives/2025/index.html","ff1c204014eb4b5b46247b3604f571d1"],["/archives/2025/page/2/index.html","5d7e4895ebbbb325566391545f39f0df"],["/archives/2025/page/3/index.html","51532079065ece2e5ca2e9896653e138"],["/archives/2025/page/4/index.html","e3e8a32eb583dce606c77fb7ebac39d1"],["/archives/2025/page/5/index.html","a0aedef7b27b0c03707cd116ea8db7c4"],["/archives/2025/page/6/index.html","e9fe986f9e77cdc85786be3154909455"],["/archives/2025/page/7/index.html","63f6bab3fab141684fc0e895d7d25eb6"],["/archives/2025/page/8/index.html","35dd953190d44dc8a73c0ce069959485"],["/archives/2025/page/9/index.html","4e73cda836c37f23291021bd083cf319"],["/archives/2026/02/index.html","f322b3d9e17f125fb23e2e590aad1b3d"],["/archives/2026/index.html","a3469a67f8f2a92c396e58c520dc2b50"],["/archives/2925/01/index.html","6ab69bb6327999f20db9b31415df5dd3"],["/archives/2925/index.html","b2c1b4cc7b68bfd797a64e98958ccf8c"],["/archives/index.html","8693b41be288b508a1d31f1db9274e3b"],["/archives/page/2/index.html","44c522f5b131cce7605cfd6bf5244b0c"],["/archives/page/3/index.html","0ec88cf96d1d33ba23377f97ba98d37a"],["/archives/page/4/index.html","6cc2ac5c3232930d24dd5606de09bac2"],["/archives/page/5/index.html","9d1d7038be1c6646fae98fbb5100ab48"],["/archives/page/6/index.html","b7134b917deff94a1a7b639cec46013b"],["/archives/page/7/index.html","0b530793ee162d3c931e0adfd5cf39c6"],["/archives/page/8/index.html","93362c390a2467123e3e8b08ad42496a"],["/archives/page/9/index.html","419ad27948553c961cf2e4b616f6ccb4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","ff28c22038d6eca35dec78357fbc812b"],["/categories/galgame/page/2/index.html","696501fdeb524f4bab8a7b379a28b254"],["/categories/公告/index.html","a67fdf70f54636860241ffe0a1c1e538"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","b67737e92485f869f2d4ad61027384fa"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","7f062f3c27c1199bd012420c81ddd555"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","7ac841f1f95f4c3da55005e761a83792"],["/page/2/index.html","b8e9a171e0cf95b953932a63cda047ba"],["/page/3/index.html","cdcce03fc2a6fbfbefaa72377e37d97a"],["/page/4/index.html","b9e476ea3d6385a3856dc208e403ee6e"],["/page/5/index.html","77a268b4dc6fba7d4c0a50a418595d46"],["/page/6/index.html","371643c6b9386e99fa28aca40d00d6e5"],["/page/7/index.html","9be04085a79c63a07d7ca2492331b455"],["/page/8/index.html","d5868e5c1336810bf2c8e5903894b1cd"],["/page/9/index.html","1a6edea741e0537b76cfa4f5003b4dd8"],["/posts/10c9dd98.html","e22bdae45d83846ee9ceafd3e674f28e"],["/posts/1295b569.html","74204607cfb238a0f26ea655c671b9bb"],["/posts/1370342.html","17958c783c9816f72f40f7788c9f1c6a"],["/posts/15ef14c2.html","3bcadd494ff464b7e57957973d644b2c"],["/posts/15f3959d.html","b01016a369a4c0d94815bee03de3269a"],["/posts/18ab785d.html","be68cf48ef2e5b2aaa6955eee8b9caf0"],["/posts/1d59b71f.html","db732dd5fa95508fba6bfce5f7b22d71"],["/posts/20b3f3a4.html","e818fdc6b08fe49991bf1f7e03744d5a"],["/posts/245f1c7d.html","4253305c0650ba33925cd828c37a09d5"],["/posts/252658f.html","508156311cf4062cdac8edd373bf48c7"],["/posts/28397adc.html","5ed162ed361f4998a265323fd867e629"],["/posts/2c0a6836.html","2b1210920d3d7c190735de8aa1711041"],["/posts/2cf620f0.html","97caffe26d2be8d5002455bd6c556ecc"],["/posts/2e30fd6d.html","78c34289591ba7d3608cbf950ad26387"],["/posts/34292736.html","5b9f4ed5478c1d6366f222e54ec1d7c6"],["/posts/3468cbe.html","da8f4bb5d5fc2cf88d0abbac4c22e9ca"],["/posts/3e118dbf.html","29c674adcecddb15c3953992b9251f98"],["/posts/3f7d823a.html","3fa0e31d5a28e6cf8168691504108a04"],["/posts/43945723.html","aad292cebd831859912ce4e3e79f6094"],["/posts/44124a6b.html","29ea185b2d322051917358633a2f8b2e"],["/posts/47abb61d.html","b6777485df3b2d07f2fa9d6d3bc03f1d"],["/posts/4b689be3.html","3da6a755cc46d71a8a62ad5eebdd8541"],["/posts/4cf8423f.html","b4fb8d168307da7fafbc8c9c4874bec3"],["/posts/4dcf85c.html","c64314e506ea3913c603a841443c9d5b"],["/posts/500cd322.html","7431eb5e14e13938fe6f22837d960cd6"],["/posts/51c9b1ff.html","d85e9fff88c84fdfbe45e5d8af2f2337"],["/posts/52b5b3c6.html","397b206fccb45476b41167f26499d3a2"],["/posts/5f6e0c59.html","86fbaaacf9d2a3f120659e9493e5a723"],["/posts/6336a2f9.html","48b9ff5f5c5f166b73bb91bf67c5a6a0"],["/posts/6432d61a.html","445e0afbb0fc2e5530786fa606327c87"],["/posts/6515f032.html","3d4b5e9fc6b95d9fcf6159575a37527b"],["/posts/6720ccdd.html","c62edf0bc89c588cd47145a6d4a5d5f9"],["/posts/6a4b5ac8.html","7bb993fac99e9ccdff38f4bfa98f97e6"],["/posts/6aa4177c.html","2044116ddaa3a0d2fa0dba120c5fc9e6"],["/posts/6b15f81f.html","1e4b857ce304c7016245120d4e9691f6"],["/posts/71131d34.html","19baa14411bf8414c29d9103bcac7c57"],["/posts/78a8a8d3.html","d36438a3fce989128386ed1dbfc1d121"],["/posts/7a5ef3d0.html","e888af3cd65a519322958b280d32e2d9"],["/posts/7b41e1ac.html","986eb597ec715403b43e9e72219ed2f5"],["/posts/7b51011d.html","0367baca25e03e8cabc0aba75ab07226"],["/posts/7e3aa3e2.html","84c08b56edbd14140a4418e44440c096"],["/posts/80fe2691.html","3b06894b302bacf742fd1f2837edfabd"],["/posts/81ac52e9.html","632501aef3a98c0ef9412923d56d0c30"],["/posts/849b40f8.html","1937cddf7a3786d9ca3d7d814a06aa93"],["/posts/85c51d68.html","712f5126c2c21c1ad33126869255bd4b"],["/posts/886f8d3.html","0d7210e919e01de81af5df0fcc0d2a7b"],["/posts/8a7cba10.html","c18588888f67fef17b51f6cab9cff910"],["/posts/8ac11b41.html","2404a62f022544dc5a244cd20ebe171e"],["/posts/8dd520d9.html","0ad22ed0942175a0411959578cb075d9"],["/posts/8f555654.html","17d3d27bb526c1e1a7fd7a0136f778e7"],["/posts/92a980c2.html","f60e81513e014de591c50bc1ef895d68"],["/posts/94d3c794.html","9e15ab5865c9e88693e78ce63163eafd"],["/posts/97f50eea.html","f78e142728e991e06d0960fcabf9d80e"],["/posts/97fca8be.html","ecf59a133d038e06b906299165605e23"],["/posts/98662d05.html","a103adfc6ee539119406c46b4bc74e4b"],["/posts/9a2f6162.html","3ea1ad2250217cb0e86bcb348df20cba"],["/posts/9b22a48d.html","f330976218adb3ee183fbc8959c49528"],["/posts/9cb455b1.html","ccdba671d8b14fc174a617deab2c2159"],["/posts/9f61c1a0.html","4ad0cf942f32fab75d5d481a8788e8dc"],["/posts/b497b647.html","820991b9277c3b206a62d3bbd6c03527"],["/posts/b4d464b0.html","d5dd28680e6efc60331729113deade19"],["/posts/b5fb773f.html","f159e774d4f97a29b3fd9e56fb41eb3a"],["/posts/b8d46b32.html","bfe02954c583d8f6b3ad0a02dfd1826e"],["/posts/c1b2c6c9.html","437102a4e22c1b7f6feeaede96e56758"],["/posts/c2111cbf.html","a9f7777b017a12ec5935a2ba6e6d42d8"],["/posts/c316c2e8.html","b3c58925f016dc4a75815373ef334e95"],["/posts/c43e60b5.html","63740b65eea5b0a8660d6777305e5e4c"],["/posts/c497a412.html","b1c36a830867a7602c2368940c8182e2"],["/posts/c5de299a.html","4d80d7e885bb626790e8602d750d78a9"],["/posts/c70bba9c.html","bfd1bf928a7551ce6d6a87c1bf9b993e"],["/posts/cae2c959.html","43abe026370995cc633e1a199a59402e"],["/posts/cbebef2b.html","9226336befa39fd9cc678b9a0bcbb578"],["/posts/ce25023e.html","9b92bfc806e47e618ecdbc02603134a2"],["/posts/d2fd4837.html","ac8f9232a08d4b835ce51c3a58f9a183"],["/posts/d3233cbb.html","a72f54d5cd2248d61364bd6117b310f7"],["/posts/d3a745a8.html","e1fe0c67c3babafcfa61ac10a96cc78f"],["/posts/dc815d5.html","6a4d3f7e0a6f1b999006dcec512d2c17"],["/posts/e3ab6ad8.html","491b709793299ef4cca5b97b6741b217"],["/posts/e5018da6.html","42b80180f2f2e39dbcc20e07e791800d"],["/posts/e5963272.html","6b420e115ba42ff7c8f3952dd478bbf1"],["/posts/e624b065.html","dcc5f4abb1b7a433774cb422f52a16a0"],["/posts/e91abb63.html","57da472ad9bba689a2b685f392d2f42c"],["/posts/ebaf2232.html","2599ec3e2194e37adf4d4ed997995834"],["/posts/ee1ed673.html","0d77c90c66ba0e5d146a4457dfb6c3de"],["/posts/f0c3ed61.html","7c713efb0caae53d18db7e3d54689177"],["/posts/f21e7f84.html","df5f09199f5e56264f6a6ee56a42d7c8"],["/posts/f230b0fd.html","9db2ccf841ebe2813789ddb77295a1a9"],["/posts/fc04d0d4.html","f48839162cad4f5979d470f9fe7268f5"],["/sumire/index.html","9b1beb4dbd0752aa392c1c3650392b9a"],["/sw-register.js","185d35ed32dc536dba884eebee29a906"],["/tags/APPLE-project/index.html","5629c0e0650c36dd3aadc2a34bffba5e"],["/tags/BL-Game/index.html","9362961def26dcf72f25143c105c3454"],["/tags/CHUNSOFT/index.html","8e6e7c65cb145222bce55cb77fc6e23d"],["/tags/Cherry-Pie/index.html","5acc5f7ce0a38df2d138381fe88286a5"],["/tags/Circle-Mebius/index.html","fa5d314a9167b0212bf68959e182ed44"],["/tags/CresCENT-BLANK/index.html","6fd31638ce243fefc0056edef5f66c1e"],["/tags/Dopamine-Software/index.html","f7668783591733d0613f6c348ba46501"],["/tags/Dos/index.html","3988f9b42f57b0783e8a6aaf870d56be"],["/tags/Earth-Well/index.html","51d11a24386cff17737bf3b189f36936"],["/tags/Kanon/index.html","309cbcbb51080cd97f5bbd0604dd81b8"],["/tags/MANATSU-8/index.html","e7f06b873f4494d1e2df862988dd7043"],["/tags/O-S-I/index.html","1df1e2c8c2c7e080f2acb1c3a003097e"],["/tags/Omegaの視界/index.html","10f231e7865fd59a8e402536c557f585"],["/tags/PC88/index.html","602caf780fb5cdc84add1aa135d854a0"],["/tags/PC98/index.html","cbcaa4acd87b41297d730376c762c4a9"],["/tags/Pleiades-Company/index.html","e358182bcd53c1cf9d1e1150dc974678"],["/tags/Reverv/index.html","14ceda6dc043aca59f363e6fad7e32bb"],["/tags/Saihate-SOFT/index.html","dd961542ed67c6280209b0b5aa82a226"],["/tags/StrayMoon/index.html","4244d5a42643e6af94b1e9e0538d237e"],["/tags/ToHeart/index.html","b3699ec8693153eb7cf8ade44da9084d"],["/tags/Traumend/index.html","d024cbbe846116dbb62eaeded46ca9ac"],["/tags/Witch/index.html","4072f32c86d3882aacf81c82597559c7"],["/tags/adonis-project/index.html","154191b9e53b8cd126554646833dae02"],["/tags/flash/index.html","205dd8d6dfa6361877cce4d8be713909"],["/tags/galgame/index.html","9a9018bb089332517c574b03209b46eb"],["/tags/galgame/page/2/index.html","015c6147b4c658bddedd67b129c10844"],["/tags/gal资源/index.html","9847ce32bd316cd7dad4e2e9835d3c42"],["/tags/gal资源/page/2/index.html","484633a4def8279fca20e8121040376d"],["/tags/gal资源/page/3/index.html","6f72fe25ad4300e1ad7bb76b78b2250f"],["/tags/index.html","192ec64f87ff5bae11793cd673aca271"],["/tags/rkr/index.html","8037618e20ff498564ff776087607cf0"],["/tags/team-eye-mask/index.html","2edb31280ba48177e355ebd70b8f588b"],["/tags/いつものところ/index.html","5af725621d5925cf2722f191c91bc702"],["/tags/きつねみみ饅頭/index.html","1b2b346ff21ca798b027c8a65f2458f6"],["/tags/ねこねこソフト/index.html","2a30c7521d5f2d61145e70c6f57c99c2"],["/tags/ねこバナナ/index.html","4e8839ca4add821c0eeaf2f07cf39466"],["/tags/はちみつくまさん/index.html","121ab8c06d3148d798ef9e552e018261"],["/tags/ろりちせ/index.html","fe25f30b2573871a876413070e4bbc29"],["/tags/停产/index.html","a298baeea62d60167e431644cb616471"],["/tags/公告/index.html","82572107285da8fa5c23cb9bfeeaea9e"],["/tags/同人/index.html","6b5d44b2c690543cd37c0254c0293ef6"],["/tags/堀井雄二/index.html","d11b328bf44b6c8db6c89d769392916e"],["/tags/外海なおき/index.html","ed727596b09d564bc2c039798c2f67d6"],["/tags/機械式少女/index.html","2be3d49c183ccb44f191dc24758c6836"],["/tags/水仙/index.html","b0b0707aae340c2ec6ced38760af62ac"],["/tags/片冈智/index.html","65559b3e88585dc5f6acd250c6b818c7"],["/tags/片岡とも/index.html","876489ad9dc7eac7257ca0dca1c12124"],["/tags/牙の刻印制作委員会/index.html","92812ba360e7e34bb88cb359ac750f0d"],["/tags/牛カルビ定食-FLAT/index.html","3c9a74b72f55ff81d73cbc50230ab5cb"],["/tags/牧尾屋/index.html","f31373ba7ba5493ab004acdd755afc37"],["/tags/猫猫社/index.html","1a57a0fe49cb6773f0919984986e33c7"],["/tags/王宮魔法劇団/index.html","9b123aff53a53fd26e427e84ec83e24d"],["/tags/画集/index.html","4652875da626f7596fe1e192ad307c89"],["/tags/索引/index.html","498959b4ecf0f67637c9ddb8bac8d4d7"],["/tags/閂夜明/index.html","473720a5510c3d01180aea5212d0954e"]];
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
