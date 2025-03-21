/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3dec2b7dcfb9647a8de5ae4f5db1b68b"],["/archives/2024/04/index.html","920114c0af69b46499b573d792cb1e0e"],["/archives/2024/index.html","34b28d0be4a4c3e6919612bde6ced97c"],["/archives/2025/02/index.html","74c00e01b228fb6b7565f75a67838549"],["/archives/2025/02/page/2/index.html","1242243312a9ab6947391dbe81e1b90b"],["/archives/2025/02/page/3/index.html","fde7cc89cd33cbabde84dddd957a1754"],["/archives/2025/02/page/4/index.html","ec20d79f28aa1873c5a73b87ef30c61a"],["/archives/2025/02/page/5/index.html","76575bc9162c844e3526f8c048b58439"],["/archives/2025/03/index.html","349c2ea6f2622fe3516c3a21ee9c2884"],["/archives/2025/03/page/2/index.html","6f1ba7be16bff49667c46d2e0854190a"],["/archives/2025/03/page/3/index.html","a14230a8cf154e0ce6a8129d43841167"],["/archives/2025/03/page/4/index.html","856d7433e29f900dda5dde3d2a758ee5"],["/archives/2025/index.html","d729fc6f9a27ced0a059018e9a407405"],["/archives/2025/page/2/index.html","8c9a34f29b977cbb43d7dc83cb2ae466"],["/archives/2025/page/3/index.html","c43eb5c422a9ba6cee72111716b2e199"],["/archives/2025/page/4/index.html","8fd2e3cd65af88d3b18f0bc1869eb57a"],["/archives/2025/page/5/index.html","c35809cf8a5e3cf9a4b2addaced7c7f0"],["/archives/2025/page/6/index.html","3d74f4dbab0fd234cb72896530ed382b"],["/archives/2025/page/7/index.html","5ab52dc6c1b2ab8ba02d0592d63b9ca6"],["/archives/2025/page/8/index.html","407b5ff94e001991edc12fbe00259f7d"],["/archives/2025/page/9/index.html","392b85fe8f560dcad018dabe1368750e"],["/archives/2026/02/index.html","c1f373f7fe1b181322f9be67a67a8109"],["/archives/2026/index.html","a3f9458fabec5af4a56eb226bc522455"],["/archives/2925/01/index.html","531a6b7363ef29763f9f8c917f5a8bc9"],["/archives/2925/index.html","3915232292bd980142e056f533f63e14"],["/archives/index.html","c85e2651aa596dd189eb316fc726d303"],["/archives/page/2/index.html","ff80f5a31c3214793d20c64e6b8ea526"],["/archives/page/3/index.html","f4554651391a68ce122efa858541545a"],["/archives/page/4/index.html","6cfd89d8ce06c66f78fd99cd626a9248"],["/archives/page/5/index.html","dc299446b2ecf17464863e21ae888b0e"],["/archives/page/6/index.html","78b6f6615fe16055dbcdce951d9d55c4"],["/archives/page/7/index.html","6e416d2ff06ae42e351b92949a861d18"],["/archives/page/8/index.html","4689ff099ef961c5b90b51fdd969563a"],["/archives/page/9/index.html","b4231262ccf7dcbd3efb939025869b4d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","553433bfceebdb9e9154ad435a8697b0"],["/categories/galgame/page/2/index.html","0af151deb2ff44f9697a5597786aa668"],["/categories/公告/index.html","88535e35ade0877b263838b5b7922137"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","cdf933e9ebad3e4575e6386dbf1a64d7"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","ff6c2119d761f1c0c0687ae49a802ea0"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","b49f2ffabad187abe0cd2cd10d80afef"],["/page/2/index.html","e8db47f892327398d042e72d7157af87"],["/page/3/index.html","ec80e359028c740d0fd1471bdc087dd4"],["/page/4/index.html","522ea3478fbcc09152ce119418dd7e99"],["/page/5/index.html","f6ca06c81afa9cecf09a195c5ddf887a"],["/page/6/index.html","848e80afa34b445a290f25d61900796b"],["/page/7/index.html","004d547f56bc7826c690e8f925f62bd1"],["/page/8/index.html","8b071d1618818c32d274feb83a8c4d94"],["/page/9/index.html","1a905fea0fdd0baae718fe05d6fb6d47"],["/posts/10c9dd98.html","4b6a81d5ee32bd504c08cad8bbac4e6d"],["/posts/1295b569.html","3f1e4503560ba8217c6987ed2f4f928d"],["/posts/1370342.html","1f9cd6ee64ef33499f4f120f0dad5294"],["/posts/15ef14c2.html","a6a98042d359a5a9115c0e119b74bc95"],["/posts/15f3959d.html","7adae5326cdc3c0185d6446f17379aa5"],["/posts/18ab785d.html","f79efbbd371f4cddd19e11358e0b04cf"],["/posts/1d59b71f.html","377cc7ea0404e9f7f4f41d5d1e04b4b4"],["/posts/20b3f3a4.html","d58b563c7ead5cbce71390d026656b6c"],["/posts/245f1c7d.html","aaad66f5ee999d4e1e2de030c6697fb6"],["/posts/252658f.html","c96515d63d4e727f022093d7c4886f42"],["/posts/28397adc.html","bb48182de7c86b2403644bc25a78c0af"],["/posts/2c0a6836.html","88c9e72c85ed6e63b8e350b840d769cc"],["/posts/2cf620f0.html","5cf7e75dc826f0ed253e793b23450f4a"],["/posts/2e30fd6d.html","0de32f5cf23ac5451b74ce6a7eb17b9e"],["/posts/34292736.html","c0401c6e42ee1e56ad7ded04b41264e4"],["/posts/3468cbe.html","a6a4df281bf8dca351fe57bb0d9a857e"],["/posts/3e118dbf.html","d401f9ea047af4722e2bdfddb23d6c55"],["/posts/3f7d823a.html","e56039870b71e9b0ece4e0967fdf6c47"],["/posts/43945723.html","8a29ca147dcc81cd306c5aa4fd0eef24"],["/posts/44124a6b.html","b22300b8ddd4d2128421ef1b449299a7"],["/posts/47abb61d.html","cd0b474d473e600082923fb807e548ae"],["/posts/4b689be3.html","25d589da6d6b48ef7b9bdeeb1ddc3636"],["/posts/4cf8423f.html","4cf4865130b25512952ae505b1f9c408"],["/posts/4dcf85c.html","7ba8c9844cd93b6b0039248d49015c24"],["/posts/500cd322.html","bf7136a24febc296440f2ecc1bfb2576"],["/posts/51c9b1ff.html","56a3b156544fa7a922dddf9d0be1b437"],["/posts/52b5b3c6.html","b5cbcd3c2f3a48413c40c32e517dae65"],["/posts/5f6e0c59.html","d1fe18ea9cfebf9192abcce72b529d8c"],["/posts/6336a2f9.html","267e8dbe1ee507916da63efd82444e97"],["/posts/6432d61a.html","0ce466a475dd8550ebb1419c24da7a28"],["/posts/6515f032.html","ced5e019f4c69e22fcd9626f45f43c36"],["/posts/6720ccdd.html","577e2147deae493939eed180bc56cfbb"],["/posts/6a4b5ac8.html","28b74033ee274557ba207cd930d0fc78"],["/posts/6aa4177c.html","023177328adfb84f56cebba9c58da0af"],["/posts/6b15f81f.html","afc660d0c6bb3079b6606acd354d7a6d"],["/posts/71131d34.html","29723a418903a5c86483d46530efb096"],["/posts/78a8a8d3.html","0bce5328469b793b5544adc4756a0ad7"],["/posts/7a5ef3d0.html","2785546bbc41aeb0c05949bb62f8f2e5"],["/posts/7b41e1ac.html","978b53a73b1b73da5e40375153a3145f"],["/posts/7b51011d.html","965bbedec59e7eac206e00b2ad378006"],["/posts/7e3aa3e2.html","2e0f6821fcba7568a169095cb1af63b4"],["/posts/80fe2691.html","4bf67b3336ffa2dfeaa5ae7e22144c65"],["/posts/81ac52e9.html","bd3354bca032f4eda442dc34192cd231"],["/posts/849b40f8.html","b58456d1303836ede3c259d1cccdd304"],["/posts/85c51d68.html","00c764d3c234383d06aa1d41f14bec4b"],["/posts/886f8d3.html","29ce07ff3d1f432be5e61e04d37e334e"],["/posts/8a7cba10.html","fc882ddcf90501985b5787a8dcc6e388"],["/posts/8ac11b41.html","3ad921b9f25e7202cfd0a9e3e6f8c36d"],["/posts/8dd520d9.html","3a738c31c01c189ada1bc732cca9c959"],["/posts/8f555654.html","d25aea3886ff8d0c604254e953e98f04"],["/posts/92a980c2.html","c8651f7734deedeefca25fe463dfe6aa"],["/posts/94d3c794.html","6601d7694185733ac2886f646476ca2f"],["/posts/97f50eea.html","edf1e291b4422dc9ad8fadcad9e7c2c3"],["/posts/97fca8be.html","0ecbff98132eacc38bb3df757ed1e075"],["/posts/98662d05.html","e31e58ce11bb1dfa7f9a193a94003ffb"],["/posts/9a2f6162.html","03da0204e4b8c19db8d6414d1922a9be"],["/posts/9b22a48d.html","6b206ca5e4f7fa09c3bb37cbe43e717c"],["/posts/9cb455b1.html","55a84b16575bd3b939cbc465da1972cb"],["/posts/9efd7701.html","965fd4f158373bcce881e7f51213e1fb"],["/posts/9f61c1a0.html","ae5fe5de2c4d387069134b74db55e540"],["/posts/b497b647.html","6c0efba8083f55b1817661e37bdd7112"],["/posts/b4d464b0.html","d99aa13b36ebd9b53dccef00ce918828"],["/posts/b5fb773f.html","5067c90bae6c5a32506fa19c3dd26088"],["/posts/b8d46b32.html","f96a52a0f5fda44d33b82e3ce547a2cf"],["/posts/c1b2c6c9.html","01c744695f3718cbd0f7cdf5b45920ff"],["/posts/c2111cbf.html","45f3d449de097dd2f8dcac5fee2ca277"],["/posts/c316c2e8.html","c5260c507c2863061ed308129a2dcefa"],["/posts/c43e60b5.html","b1b21fed919c8c36acb2d2bc3ad380e6"],["/posts/c497a412.html","d8ef4a96c33c33835def132e565d3a02"],["/posts/c5de299a.html","a88abe786049bf23e0351e0084dd6685"],["/posts/c70bba9c.html","d6bcc68128b8151eba3a82d4a17ccf28"],["/posts/cae2c959.html","a443e3867f7d3f7f2b1b38f6ce96775f"],["/posts/cbebef2b.html","4d5f7e024178a5379733b2017a81f21b"],["/posts/ce25023e.html","90edda2452d25e2c198437f0daecd9aa"],["/posts/d2fd4837.html","f211a9dae96916e160a7ce2cb4b60613"],["/posts/d3233cbb.html","e4971b198dbba402b25cb0534043fb41"],["/posts/d3a745a8.html","3be0f1d5ae6cc3947a31d9de1834bd55"],["/posts/dc815d5.html","81ca95ae3cedaadac5824cdca9dc69ff"],["/posts/e3ab6ad8.html","2e6e0149f325c7832b4729335f478e03"],["/posts/e5018da6.html","1227b7c064b808ec413315aa50de635b"],["/posts/e5963272.html","2f40bdf3d59d1a56a4e21a64d5c282a7"],["/posts/e624b065.html","126278d179d5a606f9e98e14e4eda943"],["/posts/e8f14b6c.html","d019cb773bfbeb221ceba7f1055d5ea7"],["/posts/e91abb63.html","8608c83489fd939a545874741ff9622c"],["/posts/ebaf2232.html","8bbf67a76d048f6b2760985c29be5434"],["/posts/ee1ed673.html","88ec9dae14a89d3812a388fb15b97eb9"],["/posts/f0c3ed61.html","731324e21e07f7ab832907726973fec5"],["/posts/f21e7f84.html","6a9912a3dba6633829ebf7fb3506dba8"],["/posts/f230b0fd.html","2de0e3a0cf5e224f24db3603b2ce69f4"],["/posts/fc04d0d4.html","3c7c8ea6de69bd4c68306d7414ce1875"],["/sumire/index.html","0cedbe8f82fa20f722109f4caa40d1da"],["/sw-register.js","8c3335dbd9557e0cbd08c1af8587edb1"],["/tags/APPLE-project/index.html","ff0a42ca496a798675f7a45de7743ff5"],["/tags/BL-Game/index.html","69559d450ab018a0c5ed0def12269586"],["/tags/CHUNSOFT/index.html","0ffcf863286297e2ab534c4a9fd0ce84"],["/tags/Cherry-Pie/index.html","06bbbf7d4741651ecd2f2e7ad3957eb0"],["/tags/Circle-Mebius/index.html","5034b5c6a57f5c0cbe00fb09d6b5f138"],["/tags/CresCENT-BLANK/index.html","4debc905c3dcbd225969e1e2ecd6e10c"],["/tags/Dopamine-Software/index.html","8508fb67b8f1764d8d6e2192b4c14cc6"],["/tags/Dos/index.html","47875d73486fb091cfece115d234bd05"],["/tags/Earth-Well/index.html","57606366a384870a3ab29f51d3dbb01b"],["/tags/Kanon/index.html","6775d8281de3102ebea4c2e532f7bc3d"],["/tags/MANATSU-8/index.html","e1d2813036bf249343dfefcc685f3d2d"],["/tags/O-S-I/index.html","e5403743bce868c64198df10f68fa3b6"],["/tags/Omegaの視界/index.html","7e7f29e6c9a6eaac6d44c7bbed881039"],["/tags/PC88/index.html","138a81e5214f21dddbc4e6ea1bac7322"],["/tags/PC98/index.html","fd02af9cad95773a0a2d1af6afba6887"],["/tags/Perpetual-Room/index.html","c0fcb0c23f04a4b37faf160725f62401"],["/tags/Pleiades-Company/index.html","e0ebfe48221d169266a395a63f090da2"],["/tags/Reverv/index.html","471832657438a41ddc5610ba605abda3"],["/tags/Saihate-SOFT/index.html","3ff46e36d0132c07c31f049640ad9e1e"],["/tags/StrayMoon/index.html","7bff21307b9a2313fc66bf5822b012b3"],["/tags/ToHeart/index.html","7438205d293d0bba1a4f1973aa778b3d"],["/tags/Traumend/index.html","c7a8fa7bd7b38e7a3b8327e490293e36"],["/tags/Witch/index.html","7acb8876e3305c8e8ceea9b1d8b89576"],["/tags/adonis-project/index.html","0383ae36764e8af0cca604dd38c3c4a5"],["/tags/flash/index.html","33252957f6e0ddb6056b4bb36746c1a0"],["/tags/galgame/index.html","e5b1a6dd54c8f451f1fe7dabaf356a23"],["/tags/galgame/page/2/index.html","5113ab4a5be314450d33a81faf6b2339"],["/tags/gal资源/index.html","4c8d99747344c6aea8e5e34add5a719e"],["/tags/gal资源/page/2/index.html","68d92e2f8b510a96283286d47799a12e"],["/tags/gal资源/page/3/index.html","4de9ed86ebc18b71e427a27e8e7fbb10"],["/tags/index.html","2b8f89cb273a5f51b09459d73d0e87dd"],["/tags/rkr/index.html","08e9f2943c9de139de2777fdc348a44a"],["/tags/team-eye-mask/index.html","bb14400d5c8c1e62aca4982e41de3d21"],["/tags/いつものところ/index.html","4ff86363893daa49659e99915dade47b"],["/tags/きつねみみ饅頭/index.html","011f648c3fca9adb509337f847524b21"],["/tags/ねこねこソフト/index.html","ad77182a7fe9321aa088014c282cf786"],["/tags/ねこバナナ/index.html","1efc7784db22cab3d974f30b45bf581a"],["/tags/はちみつくまさん/index.html","11a984007891ebec4b559bc09ddfcdde"],["/tags/ろりちせ/index.html","6e72a3acf35ac47244df5a25549f079b"],["/tags/停产/index.html","e3efa6430891f135757b67ce4aa684f6"],["/tags/公告/index.html","04612bb3ea7cad7a119891e9044a412d"],["/tags/同人/index.html","f59cbfd480dcf1f33109c7b7cb1065d0"],["/tags/堀井雄二/index.html","61634883ff40933fc16e9da0c2cf01c8"],["/tags/外海なおき/index.html","23b5d20c0085ccb8d1d0299ffbc5b6ad"],["/tags/機械式少女/index.html","8b2ac76f3ca835edfa1fa4aff10e8caf"],["/tags/水仙/index.html","f2a3a5c3d3fa26db863a1dfc6393fde0"],["/tags/片冈智/index.html","dd1e53959d4e17ce5095f7029391c224"],["/tags/片岡とも/index.html","87a917cbfcb9f594ed9f0bd6ac4a0b2e"],["/tags/牙の刻印制作委員会/index.html","151bf220875623e74ac197ac72bbe065"],["/tags/牛カルビ定食-FLAT/index.html","84a7c981736d41aa68d47038924c724f"],["/tags/牧尾屋/index.html","d0be77e36f6fc45723d0debd849afb40"],["/tags/猫猫社/index.html","c18f5b78e305c4d6104db05652b986f0"],["/tags/王宮魔法劇団/index.html","06772b8364d37bc2993300d54affd66f"],["/tags/画集/index.html","6221e96ab5d33cd70ca2159df2fb696d"],["/tags/索引/index.html","fbbf9977f5407f3aa0f2be0201062dfc"],["/tags/閂夜明/index.html","9889dd31a4fc7d1557a6756f96f8da64"],["/tags/音乐美/index.html","6b8aead23fb63dfa1decd32be43b82a6"]];
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
