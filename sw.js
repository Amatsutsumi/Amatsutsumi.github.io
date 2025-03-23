/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","7f6d8c5652dc9e943708b712c8e2d9aa"],["/archives/2024/04/index.html","b4003c2dd6d100dcfb98385dadd6f5b0"],["/archives/2024/index.html","4b07e527aa63e70237817a49aaad6488"],["/archives/2025/02/index.html","bdbf7a4d5e196645f7d346fc33f8e3ff"],["/archives/2025/02/page/2/index.html","bfd310aba8d7bc51483ea1f372f447e9"],["/archives/2025/02/page/3/index.html","5892e28bfa3e82dd8ca51d78c7cba31f"],["/archives/2025/02/page/4/index.html","33b4d83d1f21c8b5b32b94054ee1eb8f"],["/archives/2025/02/page/5/index.html","55c44ecd08d1e32bf2e4f2d8f372b86d"],["/archives/2025/03/index.html","566b0d7e500a828d8c11488b28d56336"],["/archives/2025/03/page/2/index.html","64b174410ae60d691524be6cb0a9722d"],["/archives/2025/03/page/3/index.html","fc4a7c3e641dd1148709b718765427b9"],["/archives/2025/03/page/4/index.html","15f997777e37feaf92f02323fff85dad"],["/archives/2025/index.html","becf118fb2d0c2f8f72f41121c804535"],["/archives/2025/page/2/index.html","0a248e226bb35dd35a85a78f90eee0ee"],["/archives/2025/page/3/index.html","de28a3c04db6b7f652f86596968ec104"],["/archives/2025/page/4/index.html","f7c8cba450e0bf1437f28a93e8babd4c"],["/archives/2025/page/5/index.html","28e913808a8a62cbb23b25c38db4309c"],["/archives/2025/page/6/index.html","3bc27e0ae4e16cb6ba87b7aaecea35e4"],["/archives/2025/page/7/index.html","a1cfed9eea55aff0fb615c0b6fd0ed25"],["/archives/2025/page/8/index.html","066c806ee987cff3b8e1d17e7353a0a7"],["/archives/2025/page/9/index.html","b715e04f5e72055e2b39f7ffa53563b0"],["/archives/2026/02/index.html","366fab3a613f07e079febc688268c4fc"],["/archives/2026/index.html","db43b112b90ba736ca301838264ac2e0"],["/archives/2925/01/index.html","e79511c73e127ce70c634ae2cbf114ba"],["/archives/2925/index.html","9c79b6885040218e95465c9001df8522"],["/archives/index.html","f5bafa07aac79cd21e9877f2076c6463"],["/archives/page/10/index.html","ce2fbc1697f28eda30a9622d36c99374"],["/archives/page/2/index.html","a05b6a9871540f28a34017a87223d2fa"],["/archives/page/3/index.html","cfd8953c2b84853f0e470dc4e0416b1f"],["/archives/page/4/index.html","ec1dc1be7c241536df41889d842a3fc4"],["/archives/page/5/index.html","4262b1cc2b0b3acaa603d3e0b9589245"],["/archives/page/6/index.html","e5ff734d605256e677d4266a7eb8f695"],["/archives/page/7/index.html","83f882be71801c20723faab0aa82d352"],["/archives/page/8/index.html","27735df5721a49e64e20f4759861e61b"],["/archives/page/9/index.html","b1f20c9c086209cc673211d1094410d7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","7325ad5da9a76617570ca755c278c23a"],["/categories/galgame/page/2/index.html","4c23aeb6743efacf0d013a2a1575e8fd"],["/categories/公告/index.html","8be15cb204a7dc9b9a24de47ed56f14f"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","0a3413b1b7a3007cec2c1fa2afd1ef5e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","07c279a8f50b1826c3e2703eec6f93af"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","b0cd1f9efd11fea923a4272982bec4e7"],["/page/10/index.html","12f68a560b63a4c00574e591e8fefc81"],["/page/2/index.html","89f8ea955ee2fc26b3a0d7ac16a248b6"],["/page/3/index.html","0d1a1d46629e62bf16cc5b1cb2288eeb"],["/page/4/index.html","dd468df143aac7fc517c5aa95ceab4bc"],["/page/5/index.html","abe32e74e3e52de1643fc4f7429199d2"],["/page/6/index.html","04e965847f17ad73717072cd146f5761"],["/page/7/index.html","3da5dcc4369734ec7a76fe19d63c2d3f"],["/page/8/index.html","86cd2c2e6942285a1bf14533d451b167"],["/page/9/index.html","f385409d6628d100acc20f1191098a35"],["/posts/10c9dd98.html","2dfc614d27a5646e45854bbf5f1d181a"],["/posts/1295b569.html","1bc43daad12b845f7a85beef2ed81fe1"],["/posts/1370342.html","2935d6ab05e139d475703ab8860cdb41"],["/posts/15ef14c2.html","6792477c0e82f37c96d30c3c370b140c"],["/posts/15f3959d.html","c690a36cc34b1893a9b3ee2abeb75dc1"],["/posts/18ab785d.html","533696d2b589386007bb952230698168"],["/posts/1d59b71f.html","e5bd42d5ab2f15863efe617e86eaf31e"],["/posts/20b3f3a4.html","4af8a62c2419f006c69bbec735545ab1"],["/posts/245f1c7d.html","92eafa860f7ff8638234a187c4be7a67"],["/posts/252658f.html","c33b0a7d742dc7cd846f60a684ba6a92"],["/posts/28397adc.html","89f810b9cb907b9d2fd3178be952041d"],["/posts/2c0a6836.html","8e216cb65a1017ba34608e4aadf0ac82"],["/posts/2cf620f0.html","2dd63037e7b9618fd248fb23f0143aeb"],["/posts/2e30fd6d.html","362051358f8d35271fe3005083a3afe1"],["/posts/34292736.html","9f9d09cab79423984e14330e2a6ac935"],["/posts/3468cbe.html","34e24985e65d9752027545fc5c8d3ded"],["/posts/3e118dbf.html","ae1bfeca5eec1af39035cfbcbcf079cb"],["/posts/3f7d823a.html","7c1036bbf05b958daaa66881e1889c3b"],["/posts/43945723.html","8efdb603fc5b1d6a51a09ce5afeb24e5"],["/posts/44124a6b.html","420dd0d04083d4c74df0e5c3533fcdc9"],["/posts/47abb61d.html","57b2bc1a28a632b17c67815dec3b4053"],["/posts/4b689be3.html","cc33e37a5d7bef68195103ddd9928b2b"],["/posts/4cf8423f.html","3a45f6bc4630e7e5b5fc4ebdac7859da"],["/posts/4dcf85c.html","41770a4b2326d48faeeca8082e2be4b4"],["/posts/500cd322.html","ccf0b79d705cd2e4bb1f7c14771847eb"],["/posts/51c9b1ff.html","188733e2948eca2eefcc379f45a64396"],["/posts/52b5b3c6.html","6dbe95798b8f7a8a32956a19832ff1d3"],["/posts/5f6e0c59.html","3b02c1c9e308cbe870d475de74de6d3c"],["/posts/6336a2f9.html","258dc792c54c8b62235f55c45cde4b94"],["/posts/6432d61a.html","619cbf5399a5ddb030838e646e105e6d"],["/posts/6515f032.html","2e708fe710a700d9cc02c66b493b3dc7"],["/posts/6720ccdd.html","0b11ed0c64550b51fb62afd3b40f9173"],["/posts/6a4b5ac8.html","c80cca4640140c87316905c90e0116f7"],["/posts/6aa4177c.html","be7bb0d97746253a89b885d57136e3c7"],["/posts/6b15f81f.html","fefa98d5e982c64a9eccba47bc864971"],["/posts/71131d34.html","e1f79ed706bc3aaaa6742f854cea2093"],["/posts/78a8a8d3.html","0a8d32027d7a5455b12cac3bfd04d5d4"],["/posts/7a5ef3d0.html","479b7ffad8a232bc8c45d5bb8b946616"],["/posts/7b41e1ac.html","a2f596a48478ed78fc27b3096a856bb3"],["/posts/7b51011d.html","a60cad4f1e5c6e52f1b30718e1ea3a7e"],["/posts/7e3aa3e2.html","09b997298904ac6c56c67be82ec9d15f"],["/posts/80fe2691.html","0c58f0dd2c2ae7e9822aad190d1d9cc4"],["/posts/81ac52e9.html","f1ee041f7b150d65d3273a765ac27eaf"],["/posts/849b40f8.html","4963903da299776463c7d7860e291dd9"],["/posts/85c51d68.html","6a37be7daa2bb5339b640e867fb501c5"],["/posts/886f8d3.html","f9466d4ffc422545d48fcd908129c390"],["/posts/8a7cba10.html","d65363c64bfb973671c9b8924f521cbe"],["/posts/8ac11b41.html","70fbf24c1cbb43806b435bd00273aab2"],["/posts/8dd520d9.html","ef56616fba1990889a4d925a5cc93cc1"],["/posts/8f555654.html","64b0b2b031c647fd2f73145036e13cb9"],["/posts/92a980c2.html","ea29a6fd4eac1d7f8ddda8ae93ca6c90"],["/posts/92ce16.html","b15ab5e8b7df298cee7e1f80d7f7cb47"],["/posts/94d3c794.html","65e1def421024830227bed2765783657"],["/posts/97f50eea.html","2f67e72a2df804a45ee231bdf4fb6928"],["/posts/97fca8be.html","ea7f80df1c423abe41ebe546aa71e73c"],["/posts/98662d05.html","6cf00b771dc054525ede981bc49289c9"],["/posts/9a2f6162.html","1a218a65131fadf13bfc447182ffc91e"],["/posts/9b22a48d.html","f07766cd0458ee3f750408921f4eb41c"],["/posts/9cb455b1.html","4cea32462ed5909d9862aa5bf935edd2"],["/posts/9efd7701.html","d7d65cbae1a710a550d45e26947f5c04"],["/posts/9f61c1a0.html","c3794f3115e6bce0c76b04c71182f0ef"],["/posts/a1de710.html","eef51761b168d8db3fb7b87fdbd19864"],["/posts/b497b647.html","02d25f5e1c569dabdbd94664c31e516c"],["/posts/b4d464b0.html","13a626753174e0a293e4f9b8e6aa66e6"],["/posts/b5fb773f.html","8f4a3abceb03cf4911d105803d3f3364"],["/posts/b8d46b32.html","6d135194199c08ff43a6bd407728f05a"],["/posts/c1b2c6c9.html","e97b163e4ef2b141897ea2cc3b61ac1c"],["/posts/c2111cbf.html","6216415d6c0429037eb90f0ef27d0198"],["/posts/c316c2e8.html","7ba151c1cf898ae43d9e284e8d024d36"],["/posts/c43e60b5.html","c8fe37fb14b1931abc01ddcd23f16051"],["/posts/c497a412.html","5089171d5f5ac0ed6a6f07060c4b80c9"],["/posts/c5de299a.html","b36a6d92bc0194d22a73bd1ac2aa8039"],["/posts/c70bba9c.html","4262b76fa31629c8c396558c8a75a04c"],["/posts/cae2c959.html","6d12268c8e7c644ce5838d97c9d8dbf9"],["/posts/cbebef2b.html","40ce55cb9478e2fa414e26c2359ffe44"],["/posts/ce25023e.html","3e49e86d6453a0160906fac6535a21b8"],["/posts/d2fd4837.html","13153466f484564ea67de8ed62927c59"],["/posts/d3233cbb.html","009fca058e06ad71d9376a06b0201b19"],["/posts/d3a745a8.html","f2c6720a078b9654ed98e03e821e19bf"],["/posts/dc815d5.html","6936c2b0d277e919bdb54053b8bae151"],["/posts/e3ab6ad8.html","a8815947faad311e100116be4a74620a"],["/posts/e5018da6.html","1a71499b9182ed32415f789abcc93504"],["/posts/e5963272.html","f05e6e814effb63c30a1d818e576739e"],["/posts/e624b065.html","985a4f068f9e11afa41e8089ef1f1ffd"],["/posts/e8f14b6c.html","7f1193069bcb402f78bf30a8244c2a3a"],["/posts/e91abb63.html","57489cf239db1332e1530e3cacf338fc"],["/posts/ea9a8808.html","4e4eb65b189ed9dbf0e77511e82fdad9"],["/posts/ebaf2232.html","7dca499d9ec821196eedda27ee655bdd"],["/posts/ee1ed673.html","a821ce6e6164cad4628999f191a6e77a"],["/posts/f0c3ed61.html","5038a7a36b418f044c5438cb6bb2c11a"],["/posts/f21e7f84.html","34e3fc1b5c386a3f55563750cfe40ede"],["/posts/f230b0fd.html","b0716e31d9d5ec72540d5d976e966deb"],["/posts/fc04d0d4.html","015b78bba6c92d69875faea5da3043e1"],["/sumire/index.html","80aed88a0462643e537d2c61a1b300d8"],["/sw-register.js","a2ba0da82bba498a36653fb9af05c332"],["/tags/APPLE-project/index.html","f200f51a2aa0dff66386c54a04c1efcd"],["/tags/BL-Game/index.html","1db2a60cb13c6d6c18988fbb9e31aba7"],["/tags/CHUNSOFT/index.html","6f7c58da8acf418a49d391220f14e478"],["/tags/Cherry-Pie/index.html","b97791a2b3a3bf08c7e262ce70db9e01"],["/tags/Circle-Mebius/index.html","9b4880b7c7221345e8684808057da679"],["/tags/CresCENT-BLANK/index.html","150e8fc0d3b6f1db266646acfa463d75"],["/tags/Dopamine-Software/index.html","9c2191c3a8dd5f81537daa58afbe5488"],["/tags/Dos/index.html","2a05be226dd0ec767fa8208ebedb7075"],["/tags/Earth-Well/index.html","91fbcc90d8a0f33d27c0e60cb240fc63"],["/tags/Kanon/index.html","2301799efc35fadc5f2e89d76b6fb945"],["/tags/MANATSU-8/index.html","26d99bcc301b7d7bf9fe5b9749c97603"],["/tags/O-S-I/index.html","b5c6d2eadbee67cb23c3884b97e67a6d"],["/tags/Omegaの視界/index.html","3b1426c5dac4653450a674785a4e6ac1"],["/tags/PC88/index.html","06425f7c439278ea48b0bbc219c96ce4"],["/tags/PC98/index.html","d753e7b45cf498063a17fd511862cde0"],["/tags/Perpetual-Room/index.html","a706a85b76cca8b23ae48e291824008f"],["/tags/Pleiades-Company/index.html","d02794682e8c352a514f015d5a04f566"],["/tags/Reverv/index.html","2ba3c6a74b4979b8b619e3569b87c4e4"],["/tags/Saihate-SOFT/index.html","b583618d25a0867e081b04cc5ecf31f8"],["/tags/StrayMoon/index.html","676507204fa74ba452db4823c42e36c3"],["/tags/ToHeart/index.html","77a4f3374946b31d0ad246a3cf76b8e7"],["/tags/Traumend/index.html","4886b2345a8862b631b9feb0bdc2d159"],["/tags/Witch/index.html","0b32cd34f860668230d2f887896a37d5"],["/tags/adonis-project/index.html","154b664712682cb417d39807ffb64dab"],["/tags/flash/index.html","ee2c2933e6ed98bec7424fdc412b7eaf"],["/tags/galgame/index.html","b07fe47e0d56317bbdd5c70e9b6d1223"],["/tags/galgame/page/2/index.html","02b0b55edb3659b028402d4a7d04c427"],["/tags/gal资源/index.html","d5214ab2ff02d5aabbf38aada01ffbe2"],["/tags/gal资源/page/2/index.html","1465fe5ccd86e3ae73b5c159ed9fd90e"],["/tags/gal资源/page/3/index.html","f16bc7b32496174a2a9826dfeda2a5ab"],["/tags/index.html","9232bab3663b43ed5e6bf71324b5cc25"],["/tags/rkr/index.html","3c6f386fb2bbf47eb8cc18091ec32b7b"],["/tags/team-eye-mask/index.html","e3c811220b48dd55b46c771fe1895532"],["/tags/いつものところ/index.html","450a9cf4343dd28fea83a669bb5983ba"],["/tags/きつねみみ饅頭/index.html","d2b249015d735f5afc60a3f84248e029"],["/tags/ねこねこソフト/index.html","ce849bbc5f8f2e6395cf1642fabadfcb"],["/tags/ねこバナナ/index.html","6e3577bc64313a9850331fc3d647a00a"],["/tags/はちみつくまさん/index.html","e78e605aa848d1f093fe5961d3735f49"],["/tags/ろりちせ/index.html","9bef5a3b4ab78e36310494d31c6230bb"],["/tags/アイル【チーム・TATU】/index.html","c8f97f28e49fc2957099aea8da0b8403"],["/tags/ブロッコリー/index.html","7e97d0d1d8ec9375d29c9b28b350ac37"],["/tags/停产/index.html","f89c47a0b2e4aa96c33785dffae1ebf0"],["/tags/公告/index.html","25171acbbc9211d57db0630739f6e3f3"],["/tags/同人/index.html","f7aca96e33c2fe41a12e33e30c94d2c4"],["/tags/堀井雄二/index.html","f8267b5c248d75641afef37d8c014fc5"],["/tags/外海なおき/index.html","fbcb0033f7bbd0535d813df78793021c"],["/tags/機械式少女/index.html","1517dd0e58d0493a55bf4cc671496c1a"],["/tags/水仙/index.html","079edecb1e836e7fae63da62b52b9d76"],["/tags/片冈智/index.html","07739d4cd37eab8c27a36169fdfbe420"],["/tags/片岡とも/index.html","2032bdd09667af9372a45f2fd0b23d7b"],["/tags/牙の刻印制作委員会/index.html","1ae5870bd6a676cab415b8219b81f481"],["/tags/牛カルビ定食-FLAT/index.html","81950c25ca13a7efb30f6df6e0f946c2"],["/tags/牧尾屋/index.html","393965993fe96168a46dbeeb56bc7dd8"],["/tags/猫猫社/index.html","f54f56b07874eb53056d0244e7cba38e"],["/tags/王宮魔法劇団/index.html","f98f22591189ee22d7bdd42f0866b514"],["/tags/画集/index.html","609195ebf5bb225a2665443dadb5282f"],["/tags/索引/index.html","c46409eb700dc1c0d06d8f21ccc4f506"],["/tags/閂夜明/index.html","eaf0275a892b906bc636a04e2c1109db"],["/tags/音乐美/index.html","f38197ae7ad5682b30600a7c82401b5a"],["/tags/黒†救/index.html","ba17cf8477fdd9874abd14ad1368a89d"]];
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
