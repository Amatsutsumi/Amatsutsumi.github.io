/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","dfb1742bb19eb7c810d434006be8a4ed"],["/archives/2024/04/index.html","da6ceab45886bff5abaa6486f3f41491"],["/archives/2024/index.html","eb2afb288e8f75b1aa6ef125c4f66365"],["/archives/2025/02/index.html","6b1eddb139d56e2e54bb922201e7959b"],["/archives/2025/02/page/2/index.html","5298e1659622c53f553d52f740af4d03"],["/archives/2025/02/page/3/index.html","f896ecc05b1f4340f6bd58a8e66a14cc"],["/archives/2025/02/page/4/index.html","b49a29d96427aac72705502eb84b64dd"],["/archives/2025/02/page/5/index.html","5bb75f7e5a65032763f20c3aff8fe9e4"],["/archives/2025/03/index.html","1e0dc4c2764e735f72b41db308a594b8"],["/archives/2025/03/page/2/index.html","e6b8b1a0c7e77b8d2c306aac0b1091c2"],["/archives/2025/03/page/3/index.html","33f148b3194c428eb0fa4eb30a144924"],["/archives/2025/03/page/4/index.html","db5959fa8f4ff22352b141fe9d30ce48"],["/archives/2025/index.html","a1421f8f63125d3c6375379fc779a6ba"],["/archives/2025/page/2/index.html","b36e8ac3aa27a60e48c0229865304c58"],["/archives/2025/page/3/index.html","52a73de271694fbb711dc1fe73d3cb52"],["/archives/2025/page/4/index.html","708aa8410e43752fb2dd741ec2fef29e"],["/archives/2025/page/5/index.html","27ff8f763ddbfe5910075968969dc0e7"],["/archives/2025/page/6/index.html","b103b2c1ef28883597920719b26f2690"],["/archives/2025/page/7/index.html","bb27629b1d452fff40e4e462a26f7160"],["/archives/2025/page/8/index.html","eed76e77264723b3443e629b0c748a26"],["/archives/2025/page/9/index.html","ad4ffdc3dfcf4699d61239d6464d69de"],["/archives/2026/02/index.html","887cd12863e96eeddf808670096d37ab"],["/archives/2026/index.html","88ea4dea8d52af51cc642aa31d012bbc"],["/archives/2925/01/index.html","ce4988bd1e2e20bae485869be234d8f0"],["/archives/2925/index.html","fce4b7593d68c1f06f34c38b82d68dad"],["/archives/index.html","14940f950c9adfc80ad7091ca15255e5"],["/archives/page/2/index.html","9c22917b7223fa7deef63cb116c86f3b"],["/archives/page/3/index.html","6f689e734caa74654d8c3934c6588376"],["/archives/page/4/index.html","ece9fd781bfbe23eb7b775d6445480eb"],["/archives/page/5/index.html","6874c734e202e7479e812efbf65ad6b7"],["/archives/page/6/index.html","3b17351848f4778cd5c6dd98baf7c088"],["/archives/page/7/index.html","397d67e506c7e665b82b5828d5728300"],["/archives/page/8/index.html","915b96cde32a44d0335d7ae4e15fb166"],["/archives/page/9/index.html","31a470ec01cb4d048e85236291a373d3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","e3899028fd296d90b9c377317303eb75"],["/categories/galgame/page/2/index.html","835b899a6597741e31380abec3620071"],["/categories/公告/index.html","1fdf9bff6c37b9dfb898800f45a5e0eb"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","9c85bf2d9f53666f00c1e220184e910f"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","8315af7e560b60a2d8954a2fa4d2b641"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","485805791495df9b50da78dd323c7579"],["/page/2/index.html","6953d2718849105e55342db8497b1be4"],["/page/3/index.html","07047ae88b614bb58cc2d1e58e318a49"],["/page/4/index.html","ab80da7d419bb700507a4ad9cca83e02"],["/page/5/index.html","74aaab383906e6160ded022cbcb3b382"],["/page/6/index.html","8986ca62d610db2049a59d5858b4b867"],["/page/7/index.html","63ba1a093b7752c8b6732af9d0a90c6b"],["/page/8/index.html","92b01c0b689a043467833919fd375580"],["/page/9/index.html","64daa424a7ae9d893ae55bc5576c6536"],["/posts/10c9dd98.html","e22bdae45d83846ee9ceafd3e674f28e"],["/posts/1295b569.html","74204607cfb238a0f26ea655c671b9bb"],["/posts/1370342.html","17958c783c9816f72f40f7788c9f1c6a"],["/posts/15ef14c2.html","3bcadd494ff464b7e57957973d644b2c"],["/posts/15f3959d.html","b01016a369a4c0d94815bee03de3269a"],["/posts/18ab785d.html","be68cf48ef2e5b2aaa6955eee8b9caf0"],["/posts/1d59b71f.html","c97727d4ae19a85ebeb399eecdde5118"],["/posts/20b3f3a4.html","89a06b8bf2e5a6ba21b7a00b62dafa5c"],["/posts/245f1c7d.html","4253305c0650ba33925cd828c37a09d5"],["/posts/252658f.html","508156311cf4062cdac8edd373bf48c7"],["/posts/28397adc.html","5ed162ed361f4998a265323fd867e629"],["/posts/2c0a6836.html","2b1210920d3d7c190735de8aa1711041"],["/posts/2cf620f0.html","39f215711103b9fd755ff28dd717ccbe"],["/posts/2e30fd6d.html","78c34289591ba7d3608cbf950ad26387"],["/posts/34292736.html","5b9f4ed5478c1d6366f222e54ec1d7c6"],["/posts/3468cbe.html","da8f4bb5d5fc2cf88d0abbac4c22e9ca"],["/posts/3e118dbf.html","29c674adcecddb15c3953992b9251f98"],["/posts/3f7d823a.html","3fa0e31d5a28e6cf8168691504108a04"],["/posts/43945723.html","aad292cebd831859912ce4e3e79f6094"],["/posts/44124a6b.html","29ea185b2d322051917358633a2f8b2e"],["/posts/47abb61d.html","b6777485df3b2d07f2fa9d6d3bc03f1d"],["/posts/4b689be3.html","af77073de489135c75238287f5cc3b02"],["/posts/4cf8423f.html","b4fb8d168307da7fafbc8c9c4874bec3"],["/posts/4dcf85c.html","d5c6319fc0754112b3057b7e791b929f"],["/posts/500cd322.html","7431eb5e14e13938fe6f22837d960cd6"],["/posts/51c9b1ff.html","d85e9fff88c84fdfbe45e5d8af2f2337"],["/posts/52b5b3c6.html","074296caec1390de21a7a3043d42f87f"],["/posts/5f6e0c59.html","86fbaaacf9d2a3f120659e9493e5a723"],["/posts/6336a2f9.html","7aa74fe39f38b04920551ce40e7b1e0f"],["/posts/6432d61a.html","445e0afbb0fc2e5530786fa606327c87"],["/posts/6515f032.html","d9853b3d39a0350332aa9ce18272ce39"],["/posts/6720ccdd.html","510553734cce85e0236f3095ec4fec2f"],["/posts/6a4b5ac8.html","7bb993fac99e9ccdff38f4bfa98f97e6"],["/posts/6aa4177c.html","2044116ddaa3a0d2fa0dba120c5fc9e6"],["/posts/6b15f81f.html","1e4b857ce304c7016245120d4e9691f6"],["/posts/71131d34.html","19baa14411bf8414c29d9103bcac7c57"],["/posts/78a8a8d3.html","e7d3b8db2b30ed088d7f40c9b203ed2d"],["/posts/7a5ef3d0.html","e888af3cd65a519322958b280d32e2d9"],["/posts/7b41e1ac.html","a34304e8d5b84b7a3bba71e6aee4be67"],["/posts/7b51011d.html","0367baca25e03e8cabc0aba75ab07226"],["/posts/7e3aa3e2.html","6cf1ff51fd2a00a07f1cf5131a136151"],["/posts/80fe2691.html","5ebe5d0f9786a2498443728ec1a51c9a"],["/posts/81ac52e9.html","632501aef3a98c0ef9412923d56d0c30"],["/posts/849b40f8.html","14951910d0459b8a43bc33b51b4556ee"],["/posts/85c51d68.html","712f5126c2c21c1ad33126869255bd4b"],["/posts/886f8d3.html","92c67d94776e2f95bc25bfe2898e16ad"],["/posts/8a7cba10.html","4fa8d5a66e841e523fe395803835bb35"],["/posts/8ac11b41.html","2404a62f022544dc5a244cd20ebe171e"],["/posts/8dd520d9.html","0ad22ed0942175a0411959578cb075d9"],["/posts/8f555654.html","11bac05b7f12ee48f2a5073a735a445e"],["/posts/92a980c2.html","f60e81513e014de591c50bc1ef895d68"],["/posts/94d3c794.html","9e15ab5865c9e88693e78ce63163eafd"],["/posts/97f50eea.html","f78e142728e991e06d0960fcabf9d80e"],["/posts/97fca8be.html","ecf59a133d038e06b906299165605e23"],["/posts/98662d05.html","4d81493dcad7f86b805b4ceff779eeee"],["/posts/9a2f6162.html","3ea1ad2250217cb0e86bcb348df20cba"],["/posts/9b22a48d.html","f330976218adb3ee183fbc8959c49528"],["/posts/9cb455b1.html","b3963a2ad513df985c4720c302ea861f"],["/posts/9f61c1a0.html","4ad0cf942f32fab75d5d481a8788e8dc"],["/posts/b497b647.html","7aee4552178c188b329f5f6c95db3258"],["/posts/b4d464b0.html","9fdc8a88ff1d34643dc9592c3f95435c"],["/posts/b5fb773f.html","e091909d4e9c05694c118542c34428a8"],["/posts/b8d46b32.html","bfe02954c583d8f6b3ad0a02dfd1826e"],["/posts/c1b2c6c9.html","437102a4e22c1b7f6feeaede96e56758"],["/posts/c2111cbf.html","a9f7777b017a12ec5935a2ba6e6d42d8"],["/posts/c316c2e8.html","95e1935596956176376da1b950b68c7d"],["/posts/c43e60b5.html","63740b65eea5b0a8660d6777305e5e4c"],["/posts/c497a412.html","7ab147b61f09ab05fa9098c1cf89dade"],["/posts/c5de299a.html","4d80d7e885bb626790e8602d750d78a9"],["/posts/c70bba9c.html","bfd1bf928a7551ce6d6a87c1bf9b993e"],["/posts/cae2c959.html","2385e818b30e07fa63022c7acdf80e2a"],["/posts/cbebef2b.html","6e589796f64829d20808629818708068"],["/posts/ce25023e.html","7113f1571921dcbf3708a261bfd0cf10"],["/posts/d2fd4837.html","39eb6a87ad6128a722b46c1ebd2f54a7"],["/posts/d3233cbb.html","a72f54d5cd2248d61364bd6117b310f7"],["/posts/d3a745a8.html","d2460e7cc55e358afdcf2c70715ea5e1"],["/posts/dc815d5.html","f688f964c3103d6c9e39f2df8901bf57"],["/posts/e3ab6ad8.html","491b709793299ef4cca5b97b6741b217"],["/posts/e5018da6.html","95a6038e7ff2d00978fb8503b111995c"],["/posts/e5963272.html","6b420e115ba42ff7c8f3952dd478bbf1"],["/posts/e624b065.html","4069621345c1bb2e792de8e6fe1f66fd"],["/posts/e91abb63.html","2dbc0cb027c240ea72fe88ff5f701d49"],["/posts/ebaf2232.html","2599ec3e2194e37adf4d4ed997995834"],["/posts/ee1ed673.html","0d77c90c66ba0e5d146a4457dfb6c3de"],["/posts/f0c3ed61.html","7c713efb0caae53d18db7e3d54689177"],["/posts/f21e7f84.html","df5f09199f5e56264f6a6ee56a42d7c8"],["/posts/f230b0fd.html","9db2ccf841ebe2813789ddb77295a1a9"],["/posts/fc04d0d4.html","f48839162cad4f5979d470f9fe7268f5"],["/sumire/index.html","f476f02d654f2231f3ecef3caaf506cf"],["/sw-register.js","8966349bbcd4c52fafa5b0d20fd6457c"],["/tags/APPLE-project/index.html","8ceb667d4524200e27eae6af3040bb28"],["/tags/BL-Game/index.html","ba8295ad387f07e5e360f97bfb249f10"],["/tags/CHUNSOFT/index.html","b5fc08b83cd681bd46f1646aef381890"],["/tags/Cherry-Pie/index.html","e394f97a02eaec7a454931350cf7e05b"],["/tags/Circle-Mebius/index.html","a13a299899868cd4908e0be0773f6ef1"],["/tags/CresCENT-BLANK/index.html","c253b2b82369bbdfbcf488eaeb6c618a"],["/tags/Dopamine-Software/index.html","51deb24847872f330bda5ebf6b3ddc9f"],["/tags/Dos/index.html","0f2781c57c10ae4be9ab179118a53303"],["/tags/Earth-Well/index.html","897b038a23f03f3f3a3d5b47c51f525b"],["/tags/Kanon/index.html","cfd5f3d8588dd3f4c44ab574d8e9100f"],["/tags/MANATSU-8/index.html","234699bb0f86ed2f8f0da74c410f1084"],["/tags/O-S-I/index.html","bb003d164456f4528b8b23942ac837a6"],["/tags/Omegaの視界/index.html","0aa5018a9bf6a50980e9a4b0fad4d653"],["/tags/PC88/index.html","46629627737699b9bfa7b92741eae389"],["/tags/PC98/index.html","149cee7ca7da16533496fe31919da89e"],["/tags/Pleiades-Company/index.html","31d1237329010c78f51fe07d96033042"],["/tags/Reverv/index.html","b9e36ff859347434dc3be4e8002d8954"],["/tags/Saihate-SOFT/index.html","3c30cc7099e68366ee3391fc1ceeca2e"],["/tags/StrayMoon/index.html","aafd323b64fc9d14c28d528ef3a972af"],["/tags/ToHeart/index.html","aa5c9bba968457c252ae4852d7f3e806"],["/tags/Traumend/index.html","eef9de537016a7db6f26b64dcc8502a6"],["/tags/Witch/index.html","4e9d64a78a120e6f1a73edacd2c3a4da"],["/tags/adonis-project/index.html","5d7875e385536e65d3948ee4bccdfb46"],["/tags/flash/index.html","b241fb9dcbe2a9d5dc50ec1759e172ed"],["/tags/galgame/index.html","50097e6a7d7a3f34436e551dd472b26f"],["/tags/galgame/page/2/index.html","54a9d763a9c57f6eb0a4dd2b9ee63bd3"],["/tags/gal资源/index.html","5665abaa23d34d736312d6be979c7c52"],["/tags/gal资源/page/2/index.html","ae21e60f9632d12f3893d25c823c0d76"],["/tags/gal资源/page/3/index.html","190ea62a34d4229d6108fcc1414a50fd"],["/tags/index.html","0d5a170b27229400c418628a67bc90c9"],["/tags/rkr/index.html","1c7b2b7d36a6e5460763a3054cb27f2a"],["/tags/team-eye-mask/index.html","b72eee3abc7ab3953ba29467f248391f"],["/tags/いつものところ/index.html","544f8fb4095f2cb04e69f98b7de57387"],["/tags/きつねみみ饅頭/index.html","75ea8aae1f6929b576a51139a803814a"],["/tags/ねこねこソフト/index.html","77aef2ed7312b7f0d8951057ddaadb2f"],["/tags/ねこバナナ/index.html","ad2e3d54162238d39ea392375ee564c6"],["/tags/はちみつくまさん/index.html","c2242efb7974d60c55e59e96fe345f3c"],["/tags/ろりちせ/index.html","8cd4bd79d581b67760787119097e064c"],["/tags/停产/index.html","49f9a8cc7b1749f1c56eca38f913d81d"],["/tags/公告/index.html","1fa566fdb57e274b85650c317ee43840"],["/tags/同人/index.html","677adfca46c89b16c0ade0cba13a40e8"],["/tags/堀井雄二/index.html","7be5ddccdaa8c0bdf8ee67be537e3777"],["/tags/外海なおき/index.html","e5f93dc90735c475a689b3b92dcca8da"],["/tags/機械式少女/index.html","a0739f0f961f86994d6f4f825d402112"],["/tags/水仙/index.html","0ffb1b1e484882be8da52df46c640ca5"],["/tags/片冈智/index.html","6a7c57ed243cbf9fbc152fb8b1e40dc1"],["/tags/片岡とも/index.html","c69bc28e958234aefa16361a1641bc84"],["/tags/牙の刻印制作委員会/index.html","bac2c8e7076689830338069d3e153868"],["/tags/牛カルビ定食-FLAT/index.html","519ec636ac2744f2a769e7f0c15edab5"],["/tags/牧尾屋/index.html","94a3b48d211f5196735cb2d1f074d771"],["/tags/猫猫社/index.html","3b9f23fd4d1db1be24addacdac8b19f6"],["/tags/王宮魔法劇団/index.html","9ed6e25d987a0a9d25385b1013c2a954"],["/tags/画集/index.html","8c514375e7f5bb9b57158001b01931f7"],["/tags/索引/index.html","33feb7e4efd22ecc454e5dd7ba9e596d"],["/tags/閂夜明/index.html","34366fd29deec6ee2765656bf1db3186"]];
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
