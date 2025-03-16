/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","60161898e26b79faf7ae7c28b8d1c6fc"],["/archives/2024/04/index.html","6368faacb7431ae53b431b360d6a8ac1"],["/archives/2024/index.html","df1c13c7ffbc5fd09a9547c57dd1229f"],["/archives/2025/02/index.html","61da77166fdc34b2cfe1809ab22909ff"],["/archives/2025/02/page/2/index.html","55d8737faecdd6eaa3a4fab737972647"],["/archives/2025/02/page/3/index.html","e73e8bb4102c90246e8eacdfe5e4324a"],["/archives/2025/02/page/4/index.html","438c6a6b0c776979614f7fb396716fbb"],["/archives/2025/02/page/5/index.html","123065c0989effd9eecf76a12d091a3b"],["/archives/2025/03/index.html","4df7a0540398908da1fc3ece88d1dba7"],["/archives/2025/03/page/2/index.html","be82a95247508749a057bbbc4d6a85d9"],["/archives/2025/03/page/3/index.html","dafed7fc1aedc48f74fc9aad289927b7"],["/archives/2025/03/page/4/index.html","66839f2d93840eeff74f39022950e658"],["/archives/2025/index.html","f79e1e5335bdfd8dfe76225a176e7f4d"],["/archives/2025/page/2/index.html","584189c7456f19712fb5785d98a4cb0e"],["/archives/2025/page/3/index.html","3cbb58c3fc03f129f5b3867719ae82d1"],["/archives/2025/page/4/index.html","53018de2871f8e3a24ca5c9d7ca10ef6"],["/archives/2025/page/5/index.html","3d75e290c3edd4d4fa65bccdeefa7a98"],["/archives/2025/page/6/index.html","045cecd08def86f447b8a1b1da442e40"],["/archives/2025/page/7/index.html","30956607b3b5b6fddd19a51b8b25c6a2"],["/archives/2025/page/8/index.html","00af24a6a16021ffd4816e464039161f"],["/archives/2025/page/9/index.html","a9d3dc2d6673dfaf9ae2b949f5435796"],["/archives/2026/02/index.html","d3879912059eb69f364f0191057d5d11"],["/archives/2026/index.html","8aa507e106500448fe079ee0ad493e2f"],["/archives/2925/01/index.html","4fcffe6ccd575eacc4416df16124ddd2"],["/archives/2925/index.html","41f294849ed1f2598dd0f8790df4488b"],["/archives/index.html","656502b8143a9765eb56b8096b997928"],["/archives/page/2/index.html","cefff45422ad9a705304962abf953ca9"],["/archives/page/3/index.html","857ccd9dbd54c7b7ade9c3a5e71788f2"],["/archives/page/4/index.html","77d7b813fb334ecd26646a0c14ff27ed"],["/archives/page/5/index.html","c5718da8f5849f2d5b5375c0c69e25f7"],["/archives/page/6/index.html","d677b0f36a63a2d6e0250dc65810c859"],["/archives/page/7/index.html","b3f14d049af0439765119d9cee1d75b3"],["/archives/page/8/index.html","b0bc5bfe816337e9401ef93f0ea2afe3"],["/archives/page/9/index.html","5015ef281fadc7d3b8c8561ae2c77479"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","2aee5910836d898714904f4cb8ba7203"],["/categories/galgame/page/2/index.html","6ac0c73561685ecaee008d5965551caf"],["/categories/公告/index.html","839d3ec761aa98befa96a7499c33ced1"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","68f3fec3e025b30c1cd4fb9980bf8889"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","adfb85ac42153598a2f8cad3675f4fe1"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","080560ce0cf069a6e7e00482bad8e675"],["/page/2/index.html","419f1ad94c657fefe16c86f5ed5d103b"],["/page/3/index.html","f386ff7149b72021406ff4cf39a2ee32"],["/page/4/index.html","55293b655a62c23571a0d93aa476dcb1"],["/page/5/index.html","381fa17ed822158183a4dbdefec60067"],["/page/6/index.html","41d54f48c644e2bf93a63623bb0089e9"],["/page/7/index.html","5d3216d7442c4ee90f4321e4803e8fbc"],["/page/8/index.html","b6ea8a8e902dd0eb7023290d496f297b"],["/page/9/index.html","940b67d6dc1e061064bd01687d7a71df"],["/posts/10c9dd98.html","17212985a67274488bb42bfc534367c7"],["/posts/1295b569.html","00bfd439a2455711b565ae6c558518da"],["/posts/1370342.html","cd5457eebf242918c8af4f6170d1fcc2"],["/posts/15ef14c2.html","7d1e68a009c7dc1547dfa75caa86830e"],["/posts/15f3959d.html","27ab32ce889fc7db270f0ea164f50554"],["/posts/18ab785d.html","294c97eb5cb09f8dc69ff69ead96d98c"],["/posts/1d59b71f.html","dd24e271d4c81489da9cf3a57c2b1641"],["/posts/20b3f3a4.html","cfa9fb164b255c78118e587a3d339e3e"],["/posts/245f1c7d.html","ab26f418e28ad856aecf401e1e499a68"],["/posts/252658f.html","e192b114a3a26c39c295015b927d4cec"],["/posts/28397adc.html","c1bb491d2813b6f732ae383e19aff9b6"],["/posts/2c0a6836.html","1d22864c3c3775a8bba99f32997f1648"],["/posts/2cf620f0.html","292352ab2a07c7d4b1421c75c1fe2655"],["/posts/2e30fd6d.html","03e81407aee025368e153dd619e760ca"],["/posts/34292736.html","c4b18da734bd60535ffb138aeab9787e"],["/posts/3468cbe.html","fb060a67b088d956ef9f2b038483987a"],["/posts/3e118dbf.html","0241d3d6e008178fc562b7ee585045f0"],["/posts/3f7d823a.html","46c4a81638255edfb00212bcb40373bb"],["/posts/43945723.html","dd87bf0e2cf1fb5efb6dcb2faa366596"],["/posts/44124a6b.html","7206610be8522fbfc800fcf79e3bcc38"],["/posts/47abb61d.html","e7039efe81e805897125d445e6ef9402"],["/posts/4b689be3.html","c8d7bd6fe0ddfbfacf777f3a957e97fe"],["/posts/4cf8423f.html","c43b8f1b06667ea0c6aff67975074bdc"],["/posts/4dcf85c.html","f153464b02b145c41b6a907c85244e31"],["/posts/500cd322.html","248d031b2a20c3ecf2c3ae366b1dc8fe"],["/posts/51c9b1ff.html","9ba1d47758defd58cf862551b6ccec82"],["/posts/52b5b3c6.html","cd6a8a478e1a9e8dc296fa97cbe9832c"],["/posts/5f6e0c59.html","2522a41e68f60de9503e470e2c32fdf3"],["/posts/6336a2f9.html","60168ed7bd3f93d69006f3d099eaf7d6"],["/posts/6432d61a.html","600c158283fc8cd65f68ba22055bc8df"],["/posts/6515f032.html","ed34ed58360c745bce0ef036d32b433d"],["/posts/6720ccdd.html","bde4e08cd2e19f7cacaa72960eddd33a"],["/posts/6a4b5ac8.html","2520e78348ac91417702e4d0fbbd3cbd"],["/posts/6aa4177c.html","3e7aea1e90b81d6798f87ee25c27c68c"],["/posts/6b15f81f.html","bb1f697b909294e33faa771d04eb797b"],["/posts/71131d34.html","1b241b116fbaefac2c57baf36b02560d"],["/posts/78a8a8d3.html","f404dbae51deaf091b8f24cdb05f3f4b"],["/posts/7a5ef3d0.html","ebdbd8f1aad8195c3f53a6b2d70ac859"],["/posts/7b41e1ac.html","8ed58fd3b94844364034d95b38d951ec"],["/posts/7b51011d.html","b9bce9c6156348e65d3ba30088693173"],["/posts/7e3aa3e2.html","6b89125bff91dd333d09c5f6a787cae5"],["/posts/80fe2691.html","87a28f412890e001c0ebd30221634ef0"],["/posts/81ac52e9.html","6a32faae120dc944cbf984b65fb3dd70"],["/posts/849b40f8.html","695969c95d8230fc5fb1aba8fd871ecd"],["/posts/85c51d68.html","5326b09155186437766caa9bf8cf7eb1"],["/posts/886f8d3.html","a2d573328a40592435fcd6055b1e4a7f"],["/posts/8ac11b41.html","2e4a412c8d4c1f7d401444bf26816700"],["/posts/8dd520d9.html","433a39ae6d28b209d11f9f5551f0a086"],["/posts/8f555654.html","0c257a545ec78fbb4435e7332231770a"],["/posts/92a980c2.html","eeea57041141fc550f2f65ebb7aabe6f"],["/posts/94d3c794.html","fee972b2654ad4c49a4f6adf791294c5"],["/posts/97f50eea.html","cbd91d1e902b4ed70b9482e0bbae0e36"],["/posts/97fca8be.html","d462a60be759fe163cd8e28ced06898f"],["/posts/98662d05.html","f1949bbe2ccc64ccab3d1b2b1d183122"],["/posts/9a2f6162.html","c9465e5f164176295e8da3239edb0a8f"],["/posts/9b22a48d.html","53961a5f6e2cc0009dd506c09f149942"],["/posts/9cb455b1.html","976c061aff33c0f7ab71d89e3fb42a41"],["/posts/9f61c1a0.html","03e6291afe7bb519fd464fba9ffc0b49"],["/posts/b497b647.html","c70e8783f75a902be560d651e19ff297"],["/posts/b5fb773f.html","ebb67da52dd4ab03bf96069e11cf99fb"],["/posts/b8d46b32.html","8ff28f0e884821efb997bb36c50a696f"],["/posts/c1b2c6c9.html","a96ec12a7de55b986e2255948b1f6e95"],["/posts/c2111cbf.html","45641ce9b65f4d012036f5ea58c10440"],["/posts/c316c2e8.html","b3d67781e501f0d7f09e90bfbd9f6392"],["/posts/c43e60b5.html","9f4a0fb4c76eb8ab5eeaaf76461f4afe"],["/posts/c497a412.html","abdacd5d53ae7809770b2fff889fb7db"],["/posts/c5de299a.html","f727e14ef13af699336039dd6d9eeb41"],["/posts/c70bba9c.html","d8eac2128c87557a57ad7a20b3e82bc1"],["/posts/cae2c959.html","7dd0794e7ecc49136cde4af5df52d20a"],["/posts/cbebef2b.html","fff378138e11e2591dc8dfdbe7f1a6dc"],["/posts/ce25023e.html","fa7f0c2dcca78fe715391b1756e7f502"],["/posts/d2fd4837.html","293893ceab11ff840e0084546e2609bf"],["/posts/d3233cbb.html","7c5ee1ea6cbc9e5fd5fdf811c8a29b9b"],["/posts/d3a745a8.html","f72f9979fcc96bcc83989d8ee338ca1c"],["/posts/dc815d5.html","b199b3926cb601cce6ae84968df97237"],["/posts/e3ab6ad8.html","6af5642c50d525c44730b43971731868"],["/posts/e5018da6.html","fb196d1a03ad8b99017f1981346798b9"],["/posts/e5963272.html","26bac717aa30b3711b6118128360f281"],["/posts/e624b065.html","81e502fcac505ca333ff144446df4397"],["/posts/e91abb63.html","48b6e4401ae6e4ab6186f22b8e2b21c1"],["/posts/ebaf2232.html","7e6b4449a6a4ff235fe696c939d87a43"],["/posts/ee1ed673.html","5d2a62b75a101e93c2cba58b2ea8a05b"],["/posts/f0c3ed61.html","597d7f682b19b1e9bb2d408d59ed02e2"],["/posts/f21e7f84.html","4e684c9c3cd0616bd7502003c086b4dc"],["/posts/f230b0fd.html","9fc16fd69312a3a10cec0b5cc7545c71"],["/posts/fc04d0d4.html","4c91bd37f195ae8460486fe8ba8095b6"],["/sumire/index.html","69e7595138c21953a8476f65e1815c19"],["/sw-register.js","d21474fdf700d5d65ff461e90e741947"],["/tags/BL-Game/index.html","d1e10a9bba68b392434c96c2b9e29442"],["/tags/CHUNSOFT/index.html","54460ac567e47d89e83809ac76a7575b"],["/tags/Cherry-Pie/index.html","d3ee7c690b5aa9c649623423e6d11a68"],["/tags/Circle-Mebius/index.html","f7c93206cd4cfd4ad11a462e80a0f365"],["/tags/Dopamine-Software/index.html","095a3abc125036ad34a1c74a46ecb419"],["/tags/Dos/index.html","554f76f965bbab786ac1412f33c953c2"],["/tags/Earth-Well/index.html","df0e2d97a4c25e07f22de764f26fa602"],["/tags/Kanon/index.html","8930c3c707599b39255e9f4427dc71b7"],["/tags/MANATSU-8/index.html","4f7c91ca3afe931960bbb9985713c794"],["/tags/O-S-I/index.html","0c54813f067bee3f649d1bc07a07d560"],["/tags/Omegaの視界/index.html","a4437e2d94d58e8d4595a4f51012c84d"],["/tags/PC88/index.html","76e2270afcf879568ef6a95d4bc9e433"],["/tags/PC98/index.html","b2b9b1b20e190900a64b037bf5ecfe80"],["/tags/Pleiades-Company/index.html","f90433f02249bef53b6b46a1c6c3d7b0"],["/tags/Reverv/index.html","89ad0e982fb76a9077988aec4f4ea198"],["/tags/Saihate-SOFT/index.html","d303d8bf58161ec77226fb23fa6e513d"],["/tags/StrayMoon/index.html","28c095153a5a1490d475feb66398a3ef"],["/tags/ToHeart/index.html","501cfdac56303ea5a987f0e7fd19836d"],["/tags/Traumend/index.html","3b5ad004176c2ba630a2c22426a3e8e8"],["/tags/Witch/index.html","4c955ac16bded01f7e928d2cfb99c88c"],["/tags/adonis-project/index.html","b6a75f7300a6cdffe359ee7cf1106a3c"],["/tags/flash/index.html","1af0cacb0fc98e82444a1922043398d1"],["/tags/galgame/index.html","4c3c8d99fe2dfa42933e219b6e68b68d"],["/tags/galgame/page/2/index.html","04ad60f089fdb967e89a1c1807f8c9f5"],["/tags/gal资源/index.html","b634277c4951dff74c5db6370a522533"],["/tags/gal资源/page/2/index.html","82a43c6a306547041e192b557229d89b"],["/tags/gal资源/page/3/index.html","0b9a871829e802ad1e0f5e07eb2f51a1"],["/tags/index.html","bcd978e862894ab4dd6ae3265c5346bb"],["/tags/rkr/index.html","74294d799d0fa23f137cbd3f0721a8cf"],["/tags/team-eye-mask/index.html","605cc67aba7e36fc65088a064ae56a01"],["/tags/いつものところ/index.html","96a1d37603bfaddca2f00b4920dccd77"],["/tags/きつねみみ饅頭/index.html","c8bb550126cf5c28095ba4be05f44c1f"],["/tags/ねこねこソフト/index.html","335451f6c7c65110f7f44cd41484933b"],["/tags/ねこバナナ/index.html","a327f76e260727d06dc696d227a8661d"],["/tags/はちみつくまさん/index.html","fc662f2ac8dc8075a8ec14d7cde4c246"],["/tags/ろりちせ/index.html","790a46a7b37383b14c9a87c42aab3182"],["/tags/停产/index.html","1a33ed81f43bfd52f9744e4de1784ce9"],["/tags/公告/index.html","8ee33b6882e07df9ffbda284760c6bba"],["/tags/同人/index.html","b8d3cf5472e6747970a99489b98f0462"],["/tags/堀井雄二/index.html","fcf16bb76a7db2bf11f6e8c86be74d3d"],["/tags/外海なおき/index.html","ad9dc4df1b74258975ea790be1d3e0ba"],["/tags/機械式少女/index.html","16d3c68a2c638295fb2bd570dda4c6d7"],["/tags/水仙/index.html","c29ec0794d416457c7fa2fa1b550eacd"],["/tags/片冈智/index.html","e5a330363322c6542d5b8118b4d1b733"],["/tags/片岡とも/index.html","fa33af9ea699476fac5686141d0d0e5a"],["/tags/牙の刻印制作委員会/index.html","5543ecc643b4f70d046c552ce5db7a87"],["/tags/牛カルビ定食-FLAT/index.html","61f08181390c7702253ee1b8f14637d8"],["/tags/牧尾屋/index.html","cb8efb0a7b5d7f491642c41b0c961c67"],["/tags/猫猫社/index.html","0368ee8f66badc8fbb66161d3b9ba2f3"],["/tags/王宮魔法劇団/index.html","17c5c9d96b940325efea52377b682d6c"],["/tags/画集/index.html","1353c6611305e88b61d265c9e9c7ad64"],["/tags/索引/index.html","05d5ba522272989e6f726466a5510418"],["/tags/閂夜明/index.html","05a9f63b75a0d1f21f5e537ca09bf0ca"]];
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
