/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6055a52d83f75f1552b11471fde43580"],["/archives/2024/04/index.html","55b0e9de7cca20b4f842a40d6e644370"],["/archives/2024/index.html","3a0a5cfdef078c26440c8b6f79f415dc"],["/archives/2025/02/index.html","06d59859625b1d63cc67ff5b21813a35"],["/archives/2025/02/page/2/index.html","e3b558f6086d7139795b6e8d812ad316"],["/archives/2025/02/page/3/index.html","ee56655ec053e520943cf9320f21f3a6"],["/archives/2025/02/page/4/index.html","8dce486eeab289e02b3227dddb5e29a8"],["/archives/2025/02/page/5/index.html","ffba058f356e6f961d8f2c77686e7949"],["/archives/2025/03/index.html","0535f60c93b6602c873e95ae5352c737"],["/archives/2025/03/page/2/index.html","8da8605d61a4ad1a13960bb5d05ca69e"],["/archives/2025/03/page/3/index.html","03c4513b397035d3f99db3dbee028d9b"],["/archives/2025/03/page/4/index.html","d3f21a6680d2e1823ec5d3f143a6ff17"],["/archives/2025/index.html","6dfbbe5404089654f230eae770e67b60"],["/archives/2025/page/2/index.html","89604b1f0aac666b168f3a122e348f65"],["/archives/2025/page/3/index.html","26a17666951136f9f4ad73761209680a"],["/archives/2025/page/4/index.html","8925b003d1a374889f04bdf5315e186c"],["/archives/2025/page/5/index.html","52206329d016587e12771518a67355ae"],["/archives/2025/page/6/index.html","78b7ef1749bb3473fcd7c9c9355565fb"],["/archives/2025/page/7/index.html","5b25fa991ebf8f50f07b3752a23a857d"],["/archives/2025/page/8/index.html","76f6f85fa47e721e4bc89f37ecad9daf"],["/archives/2025/page/9/index.html","6cea980eeb1e190152e7dbd5f4975220"],["/archives/2026/02/index.html","9b61feb5b2a9d51352eda0993d7527a7"],["/archives/2026/index.html","0f5b7ed8f90fa9dd1c3d3546c57bf096"],["/archives/2925/01/index.html","2e654f92b16caa99e077cfa2ae643bf0"],["/archives/2925/index.html","31e4fa543c21e0430926afbff251ea30"],["/archives/index.html","b31ed0894689f32474b6cf2952058dfa"],["/archives/page/2/index.html","6129c06dc99dd539d322dd5b6a1e76ff"],["/archives/page/3/index.html","8f0a1468264ebcd3e27cd5d91904b61e"],["/archives/page/4/index.html","ebb07ef1cd50a85b9c2ed657091fb34e"],["/archives/page/5/index.html","6e65ef47a9468e50b067ce11285a3cd8"],["/archives/page/6/index.html","ee4bf9ccf7e1199f8fa5ec70d547298b"],["/archives/page/7/index.html","29cfee2111268cbd6f077b696ac46a34"],["/archives/page/8/index.html","9eb7d91e729b21e3811727488e26a277"],["/archives/page/9/index.html","bffbfcecda3118c4b0c193bc5f988ea1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","390d18d9f0f1ed59468c8750c0579792"],["/categories/galgame/page/2/index.html","3fd7e15d6c7d51cf544fae15229c3a08"],["/categories/公告/index.html","85d28f92c924175be0f3c819739b98fc"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","80517a67ea2ace96d101b17dd96711f5"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","45875475baea7edc82182c48d56e7a87"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","537e9752c98edf45c9483df1cdb12766"],["/page/2/index.html","e0e24b206f3a2a92922243f752c415a9"],["/page/3/index.html","8e1ce72e8149bff2751e15f344bc2bc7"],["/page/4/index.html","b4a5ebf38ba60d6783781099616362c6"],["/page/5/index.html","c30b7dfd4e6035f97c175d9bb342f139"],["/page/6/index.html","3747b57733fdb1eb986b4cd059533b26"],["/page/7/index.html","1e543db0108fcbd3f2450270d35893c4"],["/page/8/index.html","13b304aec605e876bbb3d244abe9f60f"],["/page/9/index.html","699ac13c47689f3f63b6a413f6c8e927"],["/posts/10c9dd98.html","e22bdae45d83846ee9ceafd3e674f28e"],["/posts/1295b569.html","74204607cfb238a0f26ea655c671b9bb"],["/posts/1370342.html","2c6e13b5d09ae401a033e8aa39dea343"],["/posts/15ef14c2.html","3bcadd494ff464b7e57957973d644b2c"],["/posts/15f3959d.html","b01016a369a4c0d94815bee03de3269a"],["/posts/18ab785d.html","be68cf48ef2e5b2aaa6955eee8b9caf0"],["/posts/1d59b71f.html","db732dd5fa95508fba6bfce5f7b22d71"],["/posts/20b3f3a4.html","e818fdc6b08fe49991bf1f7e03744d5a"],["/posts/245f1c7d.html","4253305c0650ba33925cd828c37a09d5"],["/posts/252658f.html","508156311cf4062cdac8edd373bf48c7"],["/posts/28397adc.html","5ed162ed361f4998a265323fd867e629"],["/posts/2c0a6836.html","2b1210920d3d7c190735de8aa1711041"],["/posts/2cf620f0.html","97caffe26d2be8d5002455bd6c556ecc"],["/posts/2e30fd6d.html","78c34289591ba7d3608cbf950ad26387"],["/posts/34292736.html","5b9f4ed5478c1d6366f222e54ec1d7c6"],["/posts/3468cbe.html","da8f4bb5d5fc2cf88d0abbac4c22e9ca"],["/posts/3e118dbf.html","29c674adcecddb15c3953992b9251f98"],["/posts/3f7d823a.html","3fa0e31d5a28e6cf8168691504108a04"],["/posts/43945723.html","aad292cebd831859912ce4e3e79f6094"],["/posts/44124a6b.html","29ea185b2d322051917358633a2f8b2e"],["/posts/47abb61d.html","b6777485df3b2d07f2fa9d6d3bc03f1d"],["/posts/4b689be3.html","3da6a755cc46d71a8a62ad5eebdd8541"],["/posts/4cf8423f.html","b4fb8d168307da7fafbc8c9c4874bec3"],["/posts/4dcf85c.html","c64314e506ea3913c603a841443c9d5b"],["/posts/500cd322.html","7431eb5e14e13938fe6f22837d960cd6"],["/posts/51c9b1ff.html","d85e9fff88c84fdfbe45e5d8af2f2337"],["/posts/52b5b3c6.html","397b206fccb45476b41167f26499d3a2"],["/posts/5f6e0c59.html","7fd07d9852e0a3869f0df21f377abd1c"],["/posts/6336a2f9.html","cb4e2dbd6c3eb3878acc1a203499409f"],["/posts/6432d61a.html","445e0afbb0fc2e5530786fa606327c87"],["/posts/6515f032.html","3d4b5e9fc6b95d9fcf6159575a37527b"],["/posts/6720ccdd.html","c62edf0bc89c588cd47145a6d4a5d5f9"],["/posts/6a4b5ac8.html","7bb993fac99e9ccdff38f4bfa98f97e6"],["/posts/6aa4177c.html","2044116ddaa3a0d2fa0dba120c5fc9e6"],["/posts/6b15f81f.html","1e4b857ce304c7016245120d4e9691f6"],["/posts/71131d34.html","19baa14411bf8414c29d9103bcac7c57"],["/posts/78a8a8d3.html","d36438a3fce989128386ed1dbfc1d121"],["/posts/7a5ef3d0.html","e888af3cd65a519322958b280d32e2d9"],["/posts/7b41e1ac.html","986eb597ec715403b43e9e72219ed2f5"],["/posts/7b51011d.html","0367baca25e03e8cabc0aba75ab07226"],["/posts/7e3aa3e2.html","84c08b56edbd14140a4418e44440c096"],["/posts/80fe2691.html","3b06894b302bacf742fd1f2837edfabd"],["/posts/81ac52e9.html","632501aef3a98c0ef9412923d56d0c30"],["/posts/849b40f8.html","1937cddf7a3786d9ca3d7d814a06aa93"],["/posts/85c51d68.html","712f5126c2c21c1ad33126869255bd4b"],["/posts/886f8d3.html","0d7210e919e01de81af5df0fcc0d2a7b"],["/posts/8a7cba10.html","4fa8d5a66e841e523fe395803835bb35"],["/posts/8ac11b41.html","2404a62f022544dc5a244cd20ebe171e"],["/posts/8dd520d9.html","0ad22ed0942175a0411959578cb075d9"],["/posts/8f555654.html","17d3d27bb526c1e1a7fd7a0136f778e7"],["/posts/92a980c2.html","f60e81513e014de591c50bc1ef895d68"],["/posts/94d3c794.html","9e15ab5865c9e88693e78ce63163eafd"],["/posts/97f50eea.html","f78e142728e991e06d0960fcabf9d80e"],["/posts/97fca8be.html","ecf59a133d038e06b906299165605e23"],["/posts/98662d05.html","a103adfc6ee539119406c46b4bc74e4b"],["/posts/9a2f6162.html","3ea1ad2250217cb0e86bcb348df20cba"],["/posts/9b22a48d.html","f330976218adb3ee183fbc8959c49528"],["/posts/9cb455b1.html","ccdba671d8b14fc174a617deab2c2159"],["/posts/9f61c1a0.html","4ad0cf942f32fab75d5d481a8788e8dc"],["/posts/b497b647.html","e97f8c7a8fac9c0670bb3d7b5ccfad2b"],["/posts/b4d464b0.html","9fdc8a88ff1d34643dc9592c3f95435c"],["/posts/b5fb773f.html","f159e774d4f97a29b3fd9e56fb41eb3a"],["/posts/b8d46b32.html","bfe02954c583d8f6b3ad0a02dfd1826e"],["/posts/c1b2c6c9.html","437102a4e22c1b7f6feeaede96e56758"],["/posts/c2111cbf.html","a9f7777b017a12ec5935a2ba6e6d42d8"],["/posts/c316c2e8.html","b3c58925f016dc4a75815373ef334e95"],["/posts/c43e60b5.html","63740b65eea5b0a8660d6777305e5e4c"],["/posts/c497a412.html","b1c36a830867a7602c2368940c8182e2"],["/posts/c5de299a.html","4d80d7e885bb626790e8602d750d78a9"],["/posts/c70bba9c.html","bfd1bf928a7551ce6d6a87c1bf9b993e"],["/posts/cae2c959.html","8def7b8611c327eba3f3704eda4e6607"],["/posts/cbebef2b.html","9226336befa39fd9cc678b9a0bcbb578"],["/posts/ce25023e.html","9b92bfc806e47e618ecdbc02603134a2"],["/posts/d2fd4837.html","ac8f9232a08d4b835ce51c3a58f9a183"],["/posts/d3233cbb.html","a72f54d5cd2248d61364bd6117b310f7"],["/posts/d3a745a8.html","e1fe0c67c3babafcfa61ac10a96cc78f"],["/posts/dc815d5.html","08e25c83388218340196e51b4b9497e0"],["/posts/e3ab6ad8.html","491b709793299ef4cca5b97b6741b217"],["/posts/e5018da6.html","42b80180f2f2e39dbcc20e07e791800d"],["/posts/e5963272.html","6b420e115ba42ff7c8f3952dd478bbf1"],["/posts/e624b065.html","dcc5f4abb1b7a433774cb422f52a16a0"],["/posts/e91abb63.html","726a1fbd5be0739f5f10a5fceb15e149"],["/posts/ebaf2232.html","2599ec3e2194e37adf4d4ed997995834"],["/posts/ee1ed673.html","0d77c90c66ba0e5d146a4457dfb6c3de"],["/posts/f0c3ed61.html","7c713efb0caae53d18db7e3d54689177"],["/posts/f21e7f84.html","df5f09199f5e56264f6a6ee56a42d7c8"],["/posts/f230b0fd.html","477d6e046d14e31664a9d0e5b576c333"],["/posts/fc04d0d4.html","f48839162cad4f5979d470f9fe7268f5"],["/sumire/index.html","6a03f35167d84faa040dd03af8ac4cae"],["/sw-register.js","92a74f2e442ae71541e1ae0f8ecfffb9"],["/tags/APPLE-project/index.html","55662a2f2b11252019e91959184ba3be"],["/tags/BL-Game/index.html","95aa0cca13b7ed454b6488a7e18dbc8b"],["/tags/CHUNSOFT/index.html","e75b0e70f258340088e43433fe726e73"],["/tags/Cherry-Pie/index.html","8c92074c652178efd8bfb8d11cf9f0ee"],["/tags/Circle-Mebius/index.html","a0e99b229f7e48c60a4496d3f6f9a913"],["/tags/CresCENT-BLANK/index.html","24bf2d74d130d3070b2239fcc57e1715"],["/tags/Dopamine-Software/index.html","28da12defb5fd0a0c321a246cdcec954"],["/tags/Dos/index.html","88c6b5d354ca3007c4fc851b1677a16a"],["/tags/Earth-Well/index.html","b595416f4af04502683f399976f1665d"],["/tags/Kanon/index.html","5578f777804cc9f5cb03d0f2ae2cdb3f"],["/tags/MANATSU-8/index.html","f6cfc772dca66546615c110e8283353a"],["/tags/O-S-I/index.html","25864d749062f892b3b9af6f693834ed"],["/tags/Omegaの視界/index.html","c7ae4f8eae2e2162c4642e0630febfaa"],["/tags/PC88/index.html","761904655231bd9628732f68bf54eb42"],["/tags/PC98/index.html","5106e75b9066a62ddbda5a6372c7e66f"],["/tags/Pleiades-Company/index.html","9c217720954040618b51c4ec9438052b"],["/tags/Reverv/index.html","1d422f7e84f0b538b0e3e7a187757ba3"],["/tags/Saihate-SOFT/index.html","85185c2e1cdfb5297ff48a5a44fb2e0d"],["/tags/StrayMoon/index.html","011cc8ac70d992c5e3cc3acac195c038"],["/tags/ToHeart/index.html","dc44febd10422f74c3e572844a5c0dbe"],["/tags/Traumend/index.html","0ec4c3d110444b8d498f1da77a508d70"],["/tags/Witch/index.html","27639f40109ad5b7423a1a8083933663"],["/tags/adonis-project/index.html","42c296d7a2e1e73aa82f8cd0977f8a7a"],["/tags/flash/index.html","76450d270832cd0691376e7b2ba4a9bc"],["/tags/galgame/index.html","d76ba16200a3ee52f18a4a7b6a9ec849"],["/tags/galgame/page/2/index.html","5bc05e2c9c989f5333846091ef25e0cd"],["/tags/gal资源/index.html","337b28ac8735db4c492b92de60202ef0"],["/tags/gal资源/page/2/index.html","ed57edb84728eecf30bff57c54ce640d"],["/tags/gal资源/page/3/index.html","2c6f1119514e7d29de48792df8afa111"],["/tags/index.html","98f906ccced0e63ed725a1b2c028dc1b"],["/tags/rkr/index.html","0025c19bf87a34aa3e94e9fe85196316"],["/tags/team-eye-mask/index.html","ebde906b409493088e6d182909a60b36"],["/tags/いつものところ/index.html","16b45d59c3c9adde21a7df22f97436cc"],["/tags/きつねみみ饅頭/index.html","3e3a8435b817c38d1691e44d5ef98d8f"],["/tags/ねこねこソフト/index.html","63fd28d35c90d22d7ffbc083a77a1ed6"],["/tags/ねこバナナ/index.html","ec1c48d725b915945ae501d06e1971af"],["/tags/はちみつくまさん/index.html","b0116ced8d1fe8c69fe6717a3bcd41db"],["/tags/ろりちせ/index.html","9f82e91288b8d761d28161268575b9bb"],["/tags/停产/index.html","5d7e21b9233b9c1db331f2bfda72b0f3"],["/tags/公告/index.html","93e75d3f94db064301ce8514021fdb31"],["/tags/同人/index.html","0442355e85ae8f17b5ed3e9220dfcc17"],["/tags/堀井雄二/index.html","46d7795e95f0bb7142280f90b063cbc7"],["/tags/外海なおき/index.html","8a3a538a937f8450c67c810946c0dc6a"],["/tags/機械式少女/index.html","8eb5d254be45362ce9c36ec49c31fff8"],["/tags/水仙/index.html","abfaa6f65817183acc8432f21d15573a"],["/tags/片冈智/index.html","a748d19a24790231f1befad01138af86"],["/tags/片岡とも/index.html","c0256538ed2e1213a63bf5366c57ba5f"],["/tags/牙の刻印制作委員会/index.html","ead51a5df1f4afb153b28a40bcd91772"],["/tags/牛カルビ定食-FLAT/index.html","1fcdb40f11e6f2f793eb44c87357ebae"],["/tags/牧尾屋/index.html","0f8400f5d6d9e3d7d0615800ff5abe4a"],["/tags/猫猫社/index.html","5ba9df6dffe54331812e3fbcd2929b04"],["/tags/王宮魔法劇団/index.html","c4fe1f7907a02d299b4ba2f8a05ae076"],["/tags/画集/index.html","5695b4cb7b089124005a4745794081bb"],["/tags/索引/index.html","aca5f97e34b762bfa8e330d8fff6876b"],["/tags/閂夜明/index.html","2ff5c4bd93f3f00eff6aca3665541660"]];
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
