/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","ca2ec956a58cf908b34ec668a2c00562"],["/archives/2024/04/index.html","cc0f8004880704f47f25ea3fca666db4"],["/archives/2024/index.html","ad3cb4896ed76951050726fdfb4774db"],["/archives/2025/02/index.html","66f6a193c497c42f01e84a34f7537661"],["/archives/2025/02/page/2/index.html","fb990382462dfd3774382c2becd67f8e"],["/archives/2025/02/page/3/index.html","23fc7411d62f5dc9c0461249cb3630a7"],["/archives/2025/02/page/4/index.html","eee6a0b82c7b0463612defc0f4dbcad3"],["/archives/2025/02/page/5/index.html","e3c79be970973f27f8e38c7b12b69faa"],["/archives/2025/03/index.html","7199d811afd26a0ddd4f4fc6f62a57b4"],["/archives/2025/03/page/2/index.html","a34bfb2b9d5c1d1d9ccff99c4a288a14"],["/archives/2025/03/page/3/index.html","d6900a2e06fc5cd95df9c55cd055ef49"],["/archives/2025/03/page/4/index.html","b5296ed6c0d9a5d626caa784ee4e8028"],["/archives/2025/index.html","f4b23b19758e913360ade1beebe14073"],["/archives/2025/page/2/index.html","4e0e5bdb612df34c5a26071cd25cf7aa"],["/archives/2025/page/3/index.html","545b38ba0f3b2bb1fd744c32b236e6a2"],["/archives/2025/page/4/index.html","b709e4444cf120e208498b9d7af932aa"],["/archives/2025/page/5/index.html","1ec3460cdfb12d7e2a2b1bf98b9ee9b4"],["/archives/2025/page/6/index.html","cc06e57fe905bf7d84bf91910b7c9778"],["/archives/2025/page/7/index.html","a27c50cfb2a6987ef4436f51b3a57e01"],["/archives/2025/page/8/index.html","bfcb5b2e5f9ce02db3bf6c8e10130c18"],["/archives/2025/page/9/index.html","08e44ca3e579a266823ec07e9ad4ac1a"],["/archives/2026/02/index.html","d6cdedd158ebaeadc92165a7cf37309f"],["/archives/2026/index.html","e66e446d575c6285d11ddbe9d4ef221d"],["/archives/2925/01/index.html","12049af32bba389606f5d6bbb79225be"],["/archives/2925/index.html","cbea6ef8a6204c848d3492c1ed70288b"],["/archives/index.html","7e70a2d88d179000631cb391015bbbcb"],["/archives/page/2/index.html","77655f0a5a6fbc96fcfcc9dffdde14cd"],["/archives/page/3/index.html","289a00906f7e9ce80cfca1c1d2c2e64c"],["/archives/page/4/index.html","de2f29ccad4aa51b1d710ab59153f105"],["/archives/page/5/index.html","0210d529ec9f3e80ae9d8e441e4f9ffc"],["/archives/page/6/index.html","91f37689e59f33e4d01a1d5367014aea"],["/archives/page/7/index.html","884909227fa12680d89aad35ffae299a"],["/archives/page/8/index.html","1540ace97df9af99327a777783596ec6"],["/archives/page/9/index.html","34d33c6cf7237ba4a08f1f8701f2c968"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","c136f183edde95a0595b8d796a3d6e2f"],["/categories/galgame/page/2/index.html","c06a743202e875eb76d29e14d63eb4f9"],["/categories/公告/index.html","660fd54610a6cfadbb6610e03f9d5daa"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","7f7164ca53b026cfdbefdaea76fed531"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","5beb9d2a598b67ebd477a69d849dc915"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","a241925b8b2c17779c3721983b7e5bea"],["/page/2/index.html","263e75d1e4d6f484a85bac566bc307fd"],["/page/3/index.html","bbe519ef421990e5906430f21480565e"],["/page/4/index.html","609cd78acf24ccdaa9834a985a4beeb8"],["/page/5/index.html","920c6de255b3e23868fc0d120fdbaa51"],["/page/6/index.html","808284e19cc802d857c6b98554d308a1"],["/page/7/index.html","26780e0342a16916be528643c00d6113"],["/page/8/index.html","279eebe138e38062e6b254ac8b84adc4"],["/page/9/index.html","ca932b88d7db636efce2d6a14b3c88ea"],["/posts/10c9dd98.html","13af2a8811b2fd1e5d9c5d5850d7d0be"],["/posts/1295b569.html","51c98da9cdbc136d8a1d21140d91a63c"],["/posts/1370342.html","4a02613af7643fdf115196400c9f472a"],["/posts/15ef14c2.html","a8c5a92d7a84f48df0c3b06f4b0d8d4c"],["/posts/15f3959d.html","33cf0d5c00e442de36fb550e3f527d69"],["/posts/18ab785d.html","a3868ab447a6738a649a912634140e82"],["/posts/1d59b71f.html","911e8a759c2fdf6e402c8df101bbfeea"],["/posts/20b3f3a4.html","41b56a653fc0cd2ccc2ea9fdce1dae98"],["/posts/245f1c7d.html","2609a7b44b123f83ded6ffaaa7436cd4"],["/posts/252658f.html","86832f2175c97509f194601fcb170c4e"],["/posts/28397adc.html","95357a0628982389d944867950a786bb"],["/posts/2c0a6836.html","a31d55762738fda572efb339f1134737"],["/posts/2cf620f0.html","49ea10f3cf3a19e1dd1a93ff7afa6cf8"],["/posts/2e30fd6d.html","f35e9f635cbb113878167afbbe052dc5"],["/posts/34292736.html","987ad44862ecb0754978ed580fa03b69"],["/posts/3468cbe.html","89d9d8ceb862c2b4a58c2b3b346d8c6d"],["/posts/3e118dbf.html","1ea13d1f112642f03bcc7379eb638f7c"],["/posts/3f7d823a.html","c7967e30cba67ea39560bbb161b4487f"],["/posts/43945723.html","a09dfa856ac23b780d19d2b63e7a0271"],["/posts/44124a6b.html","8c352e703471ba32e2fc355898142b32"],["/posts/47abb61d.html","5e266cdee831235e38fd47ceb6e093c0"],["/posts/4b689be3.html","7c27ce1fef04d2a475812c5582c21569"],["/posts/4cf8423f.html","918c1f4e20c8997cb50f64bafe7897ad"],["/posts/4dcf85c.html","b00e41d7ee0a1e3d1a71bf6c4e2baa5e"],["/posts/500cd322.html","90155f2b32abbbaa98b09a088cd11946"],["/posts/51c9b1ff.html","37718e03e0ff541368e26856a5a5904a"],["/posts/52b5b3c6.html","c4a35f30f737648c7f24394a2af9733e"],["/posts/5f6e0c59.html","02b696747c87f2dcf847de23ccbdbf7d"],["/posts/6336a2f9.html","03e45a34769236726ac76f7c7a480a6e"],["/posts/6432d61a.html","3ba1791e37fcb8dabdb3ac1f6a2694df"],["/posts/6515f032.html","2d05a8f8f82070f3eda7fc339804f673"],["/posts/6720ccdd.html","4a07a62778e56331d70e1fc2d60f45c8"],["/posts/6a4b5ac8.html","6d44c75be00cb00ab911f0e4eaefdb4c"],["/posts/6aa4177c.html","c17169e6d99dece5ff49088d691df048"],["/posts/6b15f81f.html","24097fb59bd2c01173a5cf124aad6fd4"],["/posts/71131d34.html","5afa448818fe57b11b9c2e6e0f651578"],["/posts/78a8a8d3.html","1dbaecc098b9fe828f2b0463e99a0bda"],["/posts/7a5ef3d0.html","af6724f5acfbfa267f3a3839fa2c99b2"],["/posts/7b41e1ac.html","2a2dfde05cfc5602a68b7667ab62bc57"],["/posts/7b51011d.html","1bffcbbe678c72b9c2304db29b85a276"],["/posts/7e3aa3e2.html","600d26ab3a8421a2867bebcc00a3caba"],["/posts/80fe2691.html","4b6812a0fa7b291508850f959ff664a7"],["/posts/81ac52e9.html","cf79e3d841cc20ad2b2c42842c935adf"],["/posts/849b40f8.html","8b45a834eb6f9b8e8be73e81126a3fe9"],["/posts/85c51d68.html","bef4f29b3ceaa80fa7cbfbc1acbe343f"],["/posts/886f8d3.html","df7ac8f827df85fbcb222e722334fd6d"],["/posts/8ac11b41.html","a072807841ee4ea682dc6b17e604942e"],["/posts/8dd520d9.html","2d225e1b114685e248ac1f6a521af919"],["/posts/8f555654.html","44f8a4394d7f78b7cc4f1f2b8a0c84b2"],["/posts/92a980c2.html","8b68ec36080b2c99e702f6f7f9bebc63"],["/posts/94d3c794.html","b268a53e5c584616d42ee1cade668b29"],["/posts/97f50eea.html","fbca5135003551917f0fd60858ae468c"],["/posts/97fca8be.html","03701159d705aed64370db57d95ca264"],["/posts/98662d05.html","38562a1cf92090abb5b9b4db25148ddf"],["/posts/9a2f6162.html","aa1e4b4cd8518a1d2183365a24d9c4cd"],["/posts/9b22a48d.html","943e0ac30a2fc926c1d5adedced2b9c0"],["/posts/9cb455b1.html","9ee098c4bb5583283e8d1b887a22b14b"],["/posts/9f61c1a0.html","e4d56f4d8e7e9f5ff1b13bccf5170075"],["/posts/b497b647.html","5b9f06e21d85acbe2182ff1eff94a4a4"],["/posts/b5fb773f.html","b169aa93968cd02e50fee5aed7c515c6"],["/posts/b8d46b32.html","4c4db99277aaf36b82a9bea0293e9126"],["/posts/c1b2c6c9.html","147b882ded4ad44e106e003a37f8e567"],["/posts/c2111cbf.html","8cf6ea4632b6ee3fd317e32160a9ff87"],["/posts/c316c2e8.html","09eef751f587697388bc7768cedb7cbb"],["/posts/c43e60b5.html","c9eab6789e134e50595bc7aea1e2c926"],["/posts/c497a412.html","3057e4320e7a577c74f265c154771b43"],["/posts/c5de299a.html","be752d87c2a37baf1894d38d5c5db00c"],["/posts/c70bba9c.html","39af6c427aefacefe2a17a56b19db70a"],["/posts/cae2c959.html","f109bcbc33b8d6bdd757e1c763c9126a"],["/posts/cbebef2b.html","47f4f916a3663d92dda42b4c75ea3adb"],["/posts/ce25023e.html","c75023abfc2d4e8f2beb67bb93718515"],["/posts/d2fd4837.html","a90625e00f018d41ef402523fe65b4b4"],["/posts/d3233cbb.html","3069aa857dbf9d53777c67f96058c935"],["/posts/d3a745a8.html","66007efea29161e71326474729f20b4a"],["/posts/dc815d5.html","1e1d3dbc138efefd241fc0ebcedf41ba"],["/posts/e3ab6ad8.html","05d1712fbee6ba19f19c2010b3f0783f"],["/posts/e5018da6.html","7b46bab4a1b3405fd0dfefcfe9a7dc18"],["/posts/e5963272.html","6b03613269bb3c6533989e2afd0b7775"],["/posts/e624b065.html","04e72f14875cdee2caea4e1458834860"],["/posts/e91abb63.html","9fd72e9da5311baafb32c081cf8846c7"],["/posts/ebaf2232.html","4e23262554a5e59553ee0c2d2c7ffdf3"],["/posts/ee1ed673.html","175400b08731b8142225231635cbd237"],["/posts/f0c3ed61.html","62cc98c8a2f30fba81f5a65e67266e99"],["/posts/f21e7f84.html","6d4f7f831dc58010d3756508e2e85519"],["/posts/f230b0fd.html","25cdf38b65dfeaf4ff635614ec73285a"],["/posts/fc04d0d4.html","b49e4d72945f44419b44b77b1471d94a"],["/sumire/index.html","2f883d45d3e4803987ae7530e8e6dd71"],["/sw-register.js","e8e0cc826a87c6ce6199e2bc79e9fc4d"],["/tags/BL-Game/index.html","e9bab89879ef30a557950952e783750e"],["/tags/CHUNSOFT/index.html","025ff4e584b1ceb88d05f4827f3f04f1"],["/tags/Cherry-Pie/index.html","8fa5352dea04dee4dd0aae1bc5d18389"],["/tags/Circle-Mebius/index.html","01de28e2321d013bdb6b650d660884b0"],["/tags/Dopamine-Software/index.html","b734c5e3e4cd2251fd517b4a5673a0cc"],["/tags/Dos/index.html","65a7a707e59b0be1dbd258ea9d07b8b7"],["/tags/Earth-Well/index.html","3927c4e663ba92faef05d565547d5f25"],["/tags/Kanon/index.html","e782bb20d403f85aa5d25ff896de947c"],["/tags/MANATSU-8/index.html","a6df02715b217f14177e9298d5b68f04"],["/tags/O-S-I/index.html","68f8632169b681005f0b85de8a84668d"],["/tags/Omegaの視界/index.html","225be9b0d10f1ac7e30efdc9bbe21d2f"],["/tags/PC88/index.html","ca3b1a03675e3b43f24104dc9ab30b9a"],["/tags/PC98/index.html","0d6391c17e28e6b1bb867a675ed3143a"],["/tags/Pleiades-Company/index.html","d0b421967167d92f46df1febadb2b07d"],["/tags/Reverv/index.html","04b50bdb6ad2f3a08283f707be4a8bec"],["/tags/Saihate-SOFT/index.html","64449dc5e5da828ab2cbdc0b84f408ec"],["/tags/StrayMoon/index.html","0165c11fb6c74e3002936e8f81e13ff1"],["/tags/ToHeart/index.html","1eb166a6874f07ce784526a3dd6dbe30"],["/tags/Traumend/index.html","a861f9b84f4f0bc61ca17909ee1c85c9"],["/tags/Witch/index.html","d6007c34683ea02daca73166d7b91091"],["/tags/adonis-project/index.html","1aa680bf23e9243abda0101bc5a34ef8"],["/tags/flash/index.html","4fd49a28e3ad704ac0cb415e470e1fbb"],["/tags/galgame/index.html","bc51c6003745addc89db7b25e5bb510d"],["/tags/galgame/page/2/index.html","cc4ddcf367150d0a730ff6ee5cde4bae"],["/tags/gal资源/index.html","d99d1fb20967fdef5e7b29ff2ab6e327"],["/tags/gal资源/page/2/index.html","58bf273f69eb2f01c6400ab2c5d1af4d"],["/tags/gal资源/page/3/index.html","3464b1308516d393a8b034a5d72a0ef5"],["/tags/index.html","32f95118ef5ccca1473bca39bafb7ee4"],["/tags/rkr/index.html","dbb5c6f18f2a3782609ceda8ed34f555"],["/tags/team-eye-mask/index.html","3b8887518e10f68c73fe35dc94b41c90"],["/tags/いつものところ/index.html","9820a76109c2cbcf2736b7aa4175fd98"],["/tags/きつねみみ饅頭/index.html","ca1eb000154d8ec362dfc66610e049d1"],["/tags/ねこねこソフト/index.html","2ecd9bf43fca5896b882a90f3f401dba"],["/tags/ねこバナナ/index.html","c6bd1c8677f3df8a26e0a3a987519422"],["/tags/はちみつくまさん/index.html","fd3ca8646bdab5a56cd6265a07c06ed2"],["/tags/ろりちせ/index.html","8a956cae69d2e3dd8e14e1253864e19a"],["/tags/停产/index.html","5e94cab754f09698ef856da27d23ac31"],["/tags/公告/index.html","62f5a44830951e9f2206b83b1d2d9f73"],["/tags/同人/index.html","534ae2f6b5cd64624feee98b77f00352"],["/tags/堀井雄二/index.html","a5563d03cbbe88b60e3d0b86e5b9a56d"],["/tags/外海なおき/index.html","2068aac143eb7a76f2215ce5a043acd2"],["/tags/機械式少女/index.html","53c230b3caf8996405d774c1ecbdf565"],["/tags/水仙/index.html","4dc9750658944e8f5a300c6cf108367b"],["/tags/片冈智/index.html","c92d4e691063c96b47c171c9f5cd04e5"],["/tags/片岡とも/index.html","50e753d9b255e29eb99b8b7808cafaf5"],["/tags/牙の刻印制作委員会/index.html","6d988247b5a8b1bccc9c0b14b51cd89d"],["/tags/牛カルビ定食-FLAT/index.html","8b8961787773cf090f7cf64c2ce8e999"],["/tags/牧尾屋/index.html","8ea61ce71b90a582a98069c64fe79732"],["/tags/猫猫社/index.html","ba07c1dc83b417ada3f987bab6d29ac5"],["/tags/王宮魔法劇団/index.html","1f86047e7761b704611b8f4339df9ffd"],["/tags/画集/index.html","349d02f00f858e9f86cca72fb683f7c4"],["/tags/索引/index.html","37a57d347452306981ec8f4a37e8968c"],["/tags/閂夜明/index.html","a75b7f91a0e2ad266bc67d28aed3df87"]];
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
