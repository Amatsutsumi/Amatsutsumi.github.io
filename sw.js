/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","937f2894f7b7f192cc1be289de4d72aa"],["/archives/2024/04/index.html","219f2d448d6bf3049dda31b5045ebe15"],["/archives/2024/index.html","35672770dd14a7c792d3a36cd9be8481"],["/archives/2025/02/index.html","6517116a9dfdcde81d77c04a5b2c903f"],["/archives/2025/02/page/2/index.html","95dbaccb6c4cfd6939ec0ef6ff8e48ad"],["/archives/2025/02/page/3/index.html","9c57e1ac90c4250e49907db4e30e2bec"],["/archives/2025/02/page/4/index.html","8afb6abf2ffae14b1ce53a5b5856205a"],["/archives/2025/02/page/5/index.html","066953db452b24915157470cf467dbdb"],["/archives/2025/03/index.html","171220a51f1a37d88e3e8de4ed999ddc"],["/archives/2025/03/page/2/index.html","6bd12e97e921c18ee5eb4c58e6fa3bd4"],["/archives/2025/03/page/3/index.html","3c02f45be8296918ac5b546b089897da"],["/archives/2025/03/page/4/index.html","4c5552fbad7b81912a63ba5107e0a9a5"],["/archives/2025/index.html","39eabbbc014afbe506c6c40155163eff"],["/archives/2025/page/2/index.html","cefb1f4c295e8fe389e898c4626679cf"],["/archives/2025/page/3/index.html","ee29c904ced4cd47ded18e2f146c1383"],["/archives/2025/page/4/index.html","1986afdffaf4ace324725a3858a69879"],["/archives/2025/page/5/index.html","f588e823e843eafbf2b8071475b2914c"],["/archives/2025/page/6/index.html","053e3da3a363121ec5d21ab1d5fa39f5"],["/archives/2025/page/7/index.html","0360d3456945baf57dce000e503555bc"],["/archives/2025/page/8/index.html","81b2a1dd0cd1b47529d1a57503cffe86"],["/archives/2025/page/9/index.html","f84197179f801d6505492d4dbb6a7eba"],["/archives/2026/02/index.html","1c15283bac2ccc71ef34f33bfea76deb"],["/archives/2026/index.html","632c8b232f473bb423b0618e4e06e40d"],["/archives/2925/01/index.html","1620cad442b0b37dab02aabac471cc3c"],["/archives/2925/index.html","43c1fa609336f8c41877b5f67d85a1b7"],["/archives/index.html","7de5b0ac468e81100d30ff49a5cfa1e3"],["/archives/page/10/index.html","485b3264e6757c085a1fed68e236374e"],["/archives/page/2/index.html","9fa7feb06a17c554db3b738d13e049f0"],["/archives/page/3/index.html","5e47977a65ee794784fd04255f851d5c"],["/archives/page/4/index.html","57b74fd08054a95690a56c3fafae620f"],["/archives/page/5/index.html","7fdd74887c7ea7a72b15ab10cf8b5fc3"],["/archives/page/6/index.html","fe07870e2cf1251c3e190b46bd67261a"],["/archives/page/7/index.html","0d72703db7c8c31dcd9b9d123a611912"],["/archives/page/8/index.html","4261760773188e972025f17392762a43"],["/archives/page/9/index.html","6c373e823020c24ef96390c8c8db8847"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","516eb1d17219297f51dbd54ff260a024"],["/categories/galgame/page/2/index.html","777c32117a7219e04d1a310b67a97988"],["/categories/公告/index.html","da2631a944205456ed993ad8ebf6f6d5"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","6df70639e2143e2b5e00baef891cdcb7"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","5f49ee6c55b3abf7a8750ca1bf4c42bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","08af221d77c7a6a4b0913a6e00c179e9"],["/page/10/index.html","8a3c7c5df3de4509bf1c4ff6042b753a"],["/page/2/index.html","c7b19bf2daf7c6f1ed1631bf7687be10"],["/page/3/index.html","d2f1cb881ce9c50c810a875861885332"],["/page/4/index.html","1b963c1e1821432ee9b742386acd1bbf"],["/page/5/index.html","b5d8dcfe777920272e2f142e9ec2f6c3"],["/page/6/index.html","10c6da1d9129ccd85f38c9d32d02e0fc"],["/page/7/index.html","68f067c8bdc4e71dfb6a60527fd251f5"],["/page/8/index.html","9252de8ba9800e6ac84bcbb3af7b76db"],["/page/9/index.html","2c0c496e60268df15406fe3b452f8aea"],["/posts/10c9dd98.html","ab9fe5ddd3761384e0f485f09bf14086"],["/posts/1295b569.html","35d2405d4644f214dfee06d6629e396c"],["/posts/1370342.html","70dee31ba266597c0fe69f64b949e256"],["/posts/15ef14c2.html","c84e8ad487e086cf953a020af27ebf33"],["/posts/15f3959d.html","b4788c4c68a04a3729f7e06cc902acef"],["/posts/18ab785d.html","863a3f04c079a2b74005f1a939f89ae9"],["/posts/1d59b71f.html","a2b9edc2ccfde28df7d4536f097afe9c"],["/posts/20b3f3a4.html","e42de5a189f5acce934226e62678023b"],["/posts/245f1c7d.html","34f16d6b5a38d3ca39828616509bf2fe"],["/posts/252658f.html","064f27027f7c7ce035f6eb5e20951b10"],["/posts/28397adc.html","2fff701b688c5bda7ca98bd8ee8e628c"],["/posts/2c0a6836.html","28174e3d1ab0377e01d83b0e5bac94f1"],["/posts/2cf620f0.html","73c90e937ad49faad3d83079a7ec8d51"],["/posts/2e30fd6d.html","f63dfb776686fb24ef5117e6a4082361"],["/posts/34292736.html","8cf7847543f23c3fef23452456839dea"],["/posts/3468cbe.html","eb0bedb285ef4836c580071c3aaec805"],["/posts/3e118dbf.html","1eee23b5480ba0e6895df36432ebb438"],["/posts/3f7d823a.html","db2caafb4b637b8b60619adde5da5add"],["/posts/43945723.html","10c27b34f455787e199dfa7684e572c2"],["/posts/44124a6b.html","cb78c79f2ddd26edc83139b8964c9c33"],["/posts/47abb61d.html","45d61a19be7788f0e02b0826c00afebf"],["/posts/4b689be3.html","cec04a1215434dbf198515a467deab9a"],["/posts/4cf8423f.html","ee23832485f4f27e08f1baa9f320b566"],["/posts/4dcf85c.html","fb1cecf2cc56e2fbb083dc48e75c62af"],["/posts/500cd322.html","accaf10ee2c8c38849fb628967ad2ea5"],["/posts/51c9b1ff.html","4ba0d4a35c3ad35c8ab98116db1e6cbe"],["/posts/52b5b3c6.html","7e99ed3e155390913de1d9f73c4ab811"],["/posts/5f6e0c59.html","867cca66dca00c39ab9b0ebb0f9b7204"],["/posts/6336a2f9.html","17da8fd562cc4ec93e8c714f79a9d6fa"],["/posts/6432d61a.html","59dee1e5c203cc2fe9017fc1bea7fa7f"],["/posts/6515f032.html","c47a13fee5776f0753b6cd315d4397cf"],["/posts/6720ccdd.html","5f3dc59d68e071c9d6ec23ff7466823d"],["/posts/6a4b5ac8.html","0fcf1a7b71d4343b5ed68590c5bd4dd2"],["/posts/6aa4177c.html","3afbcfe4d20eaf21faca19cd0839aac4"],["/posts/6b15f81f.html","ef1275e6ef57e5cb13c49f71b981ba69"],["/posts/71131d34.html","34f45e2f2dc33902b44101c3ce4bd704"],["/posts/78a8a8d3.html","8764635312a4b1d97c2ee8d9886b5cb3"],["/posts/7a5ef3d0.html","6f32edf5a30d44b93acb7af0ee06a535"],["/posts/7b41e1ac.html","26f072c436de72609ebc1f0b96550388"],["/posts/7b51011d.html","d5eed5544dbb21eb5a0c871c94034392"],["/posts/7e3aa3e2.html","66572fae3045718799fe0fff9d622f6f"],["/posts/80fe2691.html","022492b3a42b05c39af7044f265ebd62"],["/posts/81ac52e9.html","80270e73aa1f3d8f51e0c249b5b6b166"],["/posts/849b40f8.html","040dcb472a4ef9d5630430803bb545ce"],["/posts/85c51d68.html","1c4defa8a5b5fa0d58783b736c565693"],["/posts/886f8d3.html","71c33f17c40419ac5a98aae6dd7cd818"],["/posts/8a7cba10.html","c88a45534c7a78928df0fb3c08b21e5d"],["/posts/8ac11b41.html","dd1725c957d4ce0377ae8e69dde5457d"],["/posts/8dd520d9.html","38d76a4f5dfff5da42443708b5fbc483"],["/posts/8f555654.html","1d8c44975f55d195cf0995b0997b219d"],["/posts/92a980c2.html","325e7b3539a20bae4f4fa5c105d9f6de"],["/posts/94d3c794.html","5d55a7052f76c3babae58fbd7825f77f"],["/posts/97f50eea.html","47abab29c76a7652a9a43ee8d4a24d6c"],["/posts/97fca8be.html","710519b232eab841f661e9fd4137464a"],["/posts/98662d05.html","7d2434d9c8af47ac92faba78d221ef8f"],["/posts/9a2f6162.html","f4f2cecdea8ba0005372d719b7ea84f1"],["/posts/9b22a48d.html","c018d07852812c74d38a8d596ddaf2a7"],["/posts/9cb455b1.html","d2eab5d8ab8896d6d3162c87638b6708"],["/posts/9efd7701.html","2d9123fbfa7b3967fa9c8f4951eeeb94"],["/posts/9f61c1a0.html","6f67abf8cff0f241a9066ab29f1500ed"],["/posts/b497b647.html","71d8aaaa4cf9a2a9458be41af5e87669"],["/posts/b4d464b0.html","a52756fbfc9a0439022dadcec6e29d20"],["/posts/b5fb773f.html","613255d2552fe05fb6bc4afe620a368d"],["/posts/b8d46b32.html","e383b05cdecc53cb70b7e1cb19844743"],["/posts/c1b2c6c9.html","3ae020e05897517ddcf94accb3eda17f"],["/posts/c2111cbf.html","c0ae00c7f85a89fd0dba166c59f7f8a4"],["/posts/c316c2e8.html","0d85f1d9d9dcc8a1537baa17f5e88ffe"],["/posts/c43e60b5.html","1776eb6fa63aaa97b2bd34bee1812300"],["/posts/c497a412.html","afc2e8e940b3a25c0869c047b174a85c"],["/posts/c5de299a.html","5b83dac27709e66a239b7c01bdc33354"],["/posts/c70bba9c.html","5be23a98a222e6a1c7a92518780977a8"],["/posts/cae2c959.html","c02f2d3d579049c2232aff583a12612d"],["/posts/cbebef2b.html","0aae2edb3e91a6db8089261a953960dd"],["/posts/ce25023e.html","9b90bd2f4a6fd176885b89a3c84a49c2"],["/posts/d2fd4837.html","92aabfd8afc05a00ead6ffb784176c25"],["/posts/d3233cbb.html","38cf009ccb99d7c335edd501c131e546"],["/posts/d3a745a8.html","29f0fe95ca55ce6318f7acfa8e388d58"],["/posts/dc815d5.html","7c9facbe67638711aafbf6944a203320"],["/posts/e3ab6ad8.html","8f17cef0a2e5d7fe14671f92ec202695"],["/posts/e5018da6.html","a668de93c223d427e6b6df3f05624e58"],["/posts/e5963272.html","7d4d74e0e8d8deb32468387af32ce562"],["/posts/e624b065.html","98f0c91288f5ba8eb673ae01eef09dd3"],["/posts/e8f14b6c.html","d84669e629e3fe3d1c53d1093c258a7f"],["/posts/e91abb63.html","8510390d729bb0fa3dea176a929842f1"],["/posts/ea9a8808.html","467f4b17cb62c4a2080dd1fa0e3ea6c9"],["/posts/ebaf2232.html","2d74fa5bc80d27cd791a16dccdad4af4"],["/posts/ee1ed673.html","e15ae33b67347b6b5d28e6c9b6e5e770"],["/posts/f0c3ed61.html","616c2d5d9e47f583bf61ca745efafd4d"],["/posts/f21e7f84.html","8dd4561a176b3a6ff27d45b06e51a058"],["/posts/f230b0fd.html","f8c53e5e654f61b10feb3744b974d858"],["/posts/fc04d0d4.html","3d6db9f1850a912606e30ab18185bb93"],["/sumire/index.html","be4845115347bdbfa4bf62d4a77440bb"],["/sw-register.js","90e540132e4d9958d34795c029ccb82e"],["/tags/APPLE-project/index.html","0303fefa0f28eb547ed314603945e20c"],["/tags/BL-Game/index.html","c3934c35353179ca664d868858f890f3"],["/tags/CHUNSOFT/index.html","0ab03ec9b059aca3bb3a51d52c10b825"],["/tags/Cherry-Pie/index.html","a9dbc5d5c806f556c1583c070673382e"],["/tags/Circle-Mebius/index.html","c2edae4cb8b8665cad990af284e42b59"],["/tags/CresCENT-BLANK/index.html","a7e4d5983a4d75229f812837c27e467b"],["/tags/Dopamine-Software/index.html","b284280060ca6a43e43eac1cfd3023c7"],["/tags/Dos/index.html","8d009559a9fc98f9f849d4fb354e093e"],["/tags/Earth-Well/index.html","34cd37927ae84dcf99c9a4c9861d0c8c"],["/tags/Kanon/index.html","b4a2d9180e232063cb563b6b72f83d29"],["/tags/MANATSU-8/index.html","a1873425a3ad80ef807c2a0191b0e16a"],["/tags/O-S-I/index.html","144887ce59b98dffb3029ce05a9e448b"],["/tags/Omegaの視界/index.html","71c4fffae3e312810bc6bb8a4ebd805e"],["/tags/PC88/index.html","3b9015e039864054370876eae3156e2d"],["/tags/PC98/index.html","0ffaf566513dc1dfe7d159c2696253b7"],["/tags/Perpetual-Room/index.html","fab239b567aa34e4da5388c1c7bca7f7"],["/tags/Pleiades-Company/index.html","6765246eb4f44dc0bbdac3f5c488a6e2"],["/tags/Reverv/index.html","fc31d6425d89428e00b32a617cbfe064"],["/tags/Saihate-SOFT/index.html","44e628b0ebe133cb984d2703ebdc79b6"],["/tags/StrayMoon/index.html","6d7d284495b6442e3c2a6480c8355faa"],["/tags/ToHeart/index.html","e24ce4a2ba44b48be5c0814a112701bf"],["/tags/Traumend/index.html","25b4fd25d0f8bf9c086cd5d6226dfe12"],["/tags/Witch/index.html","8a374ff477ad129b6af29f2d22a3d89e"],["/tags/adonis-project/index.html","94a3140951fefc8aa51e8bea1b0afcf0"],["/tags/flash/index.html","e7fadb7851498ef7b4148ee3755e61b1"],["/tags/galgame/index.html","022cae7088854d7a20d1f99f2c9ff3be"],["/tags/galgame/page/2/index.html","c676d54ef948a2d55132ba983c050ec7"],["/tags/gal资源/index.html","83ff0fe09712a41fdd6c78923c69e6eb"],["/tags/gal资源/page/2/index.html","a40c3c40fad9ab4d0b6924a5c9a4f393"],["/tags/gal资源/page/3/index.html","0f72220b35cf5a1d64a338a2ed1c7fbe"],["/tags/index.html","b9045f75b8950a26462fcfcbd184537b"],["/tags/rkr/index.html","3750f4855c68493987ab7d2873a47127"],["/tags/team-eye-mask/index.html","8727f8168dbdf2b2b923a945987dda37"],["/tags/いつものところ/index.html","ea2f5aa8b7bbaae30601e809a6510fe0"],["/tags/きつねみみ饅頭/index.html","8d90d615df6d513a231894878d37b75c"],["/tags/ねこねこソフト/index.html","e97e8c9a2753b1683b5df08c5894e45c"],["/tags/ねこバナナ/index.html","2437d2ccd86f760a0d27a1136650b9f4"],["/tags/はちみつくまさん/index.html","8fa00e99d7f8ff2b9941d58a6759abcf"],["/tags/ろりちせ/index.html","3206a2b8a11ad0bd739c16ff31ebca1a"],["/tags/アイル【チーム・TATU】/index.html","0257da1e6e354a035ed4bf547b8b52ae"],["/tags/停产/index.html","27a949941e00ffdf373a99340c74c511"],["/tags/公告/index.html","f5ee3949e75ed981828e27b3337b4296"],["/tags/同人/index.html","2f8f3da16e291f43cb58f0d8256978ef"],["/tags/堀井雄二/index.html","44305b432e71481989a8f1941a4dc104"],["/tags/外海なおき/index.html","6644de76a39af2ab2615871163121767"],["/tags/機械式少女/index.html","67d441bf3b5de1472701d04fbdb1ce84"],["/tags/水仙/index.html","87595b65bc3f920feaf46d9678508d1d"],["/tags/片冈智/index.html","3882dcab5e57f6fc5022fcfbc72eb526"],["/tags/片岡とも/index.html","7c104950e34de626b72873df6650e0ec"],["/tags/牙の刻印制作委員会/index.html","e487db373283108585861d29a8c6e534"],["/tags/牛カルビ定食-FLAT/index.html","1771dc8b6589588496e0f8f489c3e0a3"],["/tags/牧尾屋/index.html","d38b94d85f02d42d052089d125525d3f"],["/tags/猫猫社/index.html","f021e592529b115d4c8f6b870f89168e"],["/tags/王宮魔法劇団/index.html","4d83552a2117a73d8af629b574371b59"],["/tags/画集/index.html","76564023a7a8fc523ca565e776d88c88"],["/tags/索引/index.html","8e6f2d98a5f3017815275fdc77fe0040"],["/tags/閂夜明/index.html","05ff3d559f1731cc20823de146110138"],["/tags/音乐美/index.html","1d98f1b1bcb9cba0f0813430b0012637"]];
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
