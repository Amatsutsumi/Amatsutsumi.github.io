/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","02a33b78fa9c79522cd6b04bc207f48b"],["/archives/2024/04/index.html","d575fd5b4c7cec93bd735f64f49b85df"],["/archives/2024/index.html","d879b11946c5226c8631a5e31f042513"],["/archives/2025/02/index.html","b2b4b094e54729603279b7394d329e3b"],["/archives/2025/02/page/2/index.html","f9b64b96e2630064bbac09bf1db2e1b6"],["/archives/2025/02/page/3/index.html","c729796b5218280120f2d3d0c910bc2d"],["/archives/2025/02/page/4/index.html","43936821bbf647f1c91ec9885ac7df19"],["/archives/2025/02/page/5/index.html","8b2febe91e43a8d653c290aa3a1aa6b9"],["/archives/2025/03/index.html","3c739f9b7f6d8bd5bb8119f2af490a54"],["/archives/2025/03/page/2/index.html","0c3005eb14d6ed123c06809deb557265"],["/archives/2025/03/page/3/index.html","a1cb61106dbc446f21d9c61652cfe732"],["/archives/2025/03/page/4/index.html","980528eb41506ac838764af4a6331503"],["/archives/2025/index.html","0e9e791836b27a41638bfe8a99225118"],["/archives/2025/page/2/index.html","44cffbbb92bf8cce6fbf0196d69e244c"],["/archives/2025/page/3/index.html","120d63e5c6d3d836430267908f80c94e"],["/archives/2025/page/4/index.html","2a49399a6cfeac9097902d4eddf592a6"],["/archives/2025/page/5/index.html","9ae9a4350f8167c6825a5aa7775d051c"],["/archives/2025/page/6/index.html","bd88ab27e09c92e00a3e756373de0758"],["/archives/2025/page/7/index.html","7b7d4e5d104f00d9b790a85cafedf92c"],["/archives/2025/page/8/index.html","c45791faec172b6a43832a80c17809a7"],["/archives/2025/page/9/index.html","9e8db42d452fe9106cdcb9118a88f92c"],["/archives/2026/02/index.html","4f4aeb683417e604a513fd144393fcdd"],["/archives/2026/index.html","eb93822ea0b88ebe9cefd3736918d089"],["/archives/2925/01/index.html","a780f533ca93e0b9d38c1e6906cf345b"],["/archives/2925/index.html","01bd688763c334c73157f52457ada02c"],["/archives/index.html","a4e87a4034e1872c01ba6b6ebccd5a03"],["/archives/page/10/index.html","33368556ff8e92a394c843542a13312a"],["/archives/page/2/index.html","72e7bd418e89dac96da9ad3211c23fd0"],["/archives/page/3/index.html","d0fea545bcbb255b7f52c3bc90a65084"],["/archives/page/4/index.html","f5d6f4264b01611cedfbd0c6b15a8a55"],["/archives/page/5/index.html","a7b52af446cb0495692eedf484f26dd3"],["/archives/page/6/index.html","c5e32b1cf9c9e40650ce622425a1f534"],["/archives/page/7/index.html","f2dc886e788d11de4cd6c1d5e84098cc"],["/archives/page/8/index.html","c7cf2c20521a2b6af3fc4ccf29b0a8fb"],["/archives/page/9/index.html","3b0a7e437bff3355021c7d2a6beb423f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","fca27f346cdf3cc760d9d5a71956c5bd"],["/categories/galgame/page/2/index.html","d4aadbc956d8b6b72a2456ff8bf1d335"],["/categories/公告/index.html","4049649e11715322d7b19ac7e1fd1cb8"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","38d4ac1fdc2f695290c7eb072c5123fb"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","1aae52393833995c0a9c370f52837399"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","1d1fc17b5fc6a3ff1a8e5567d0ab9866"],["/page/10/index.html","600e3aadc4d783440db7913845aab32e"],["/page/2/index.html","b17fc79c2352b760881cbbd5f8950995"],["/page/3/index.html","0a57183056e7d410066b76548ba5b698"],["/page/4/index.html","9deb850079c1b19d90d90ea2e8b44e02"],["/page/5/index.html","c2938b8feb091d058c8d1cef1821195b"],["/page/6/index.html","13545651826c2fb873e14c87e27d5601"],["/page/7/index.html","91d6472271f8c722c8def776fcde8d35"],["/page/8/index.html","3e4208d18e1209de7cd128a0f6844e94"],["/page/9/index.html","7c70050801608bfcad19e0c18364d31c"],["/posts/10c9dd98.html","2dfc614d27a5646e45854bbf5f1d181a"],["/posts/1295b569.html","1bc43daad12b845f7a85beef2ed81fe1"],["/posts/1370342.html","a104cfd723895076538006a381eb7e8e"],["/posts/15ef14c2.html","6792477c0e82f37c96d30c3c370b140c"],["/posts/15f3959d.html","c690a36cc34b1893a9b3ee2abeb75dc1"],["/posts/18ab785d.html","533696d2b589386007bb952230698168"],["/posts/1d59b71f.html","e5bd42d5ab2f15863efe617e86eaf31e"],["/posts/20b3f3a4.html","4af8a62c2419f006c69bbec735545ab1"],["/posts/245f1c7d.html","92eafa860f7ff8638234a187c4be7a67"],["/posts/252658f.html","c33b0a7d742dc7cd846f60a684ba6a92"],["/posts/28397adc.html","d4882494c6e839620436b642a3354079"],["/posts/2c0a6836.html","8e216cb65a1017ba34608e4aadf0ac82"],["/posts/2cf620f0.html","2dd63037e7b9618fd248fb23f0143aeb"],["/posts/2e30fd6d.html","362051358f8d35271fe3005083a3afe1"],["/posts/34292736.html","9f9d09cab79423984e14330e2a6ac935"],["/posts/3468cbe.html","34e24985e65d9752027545fc5c8d3ded"],["/posts/3e118dbf.html","ae1bfeca5eec1af39035cfbcbcf079cb"],["/posts/3f7d823a.html","fc954030547b688786c66c25ad888514"],["/posts/43945723.html","8efdb603fc5b1d6a51a09ce5afeb24e5"],["/posts/44124a6b.html","de7abfddedfa8c95ba35b5c4effbf98c"],["/posts/47abb61d.html","57b2bc1a28a632b17c67815dec3b4053"],["/posts/4b689be3.html","cc33e37a5d7bef68195103ddd9928b2b"],["/posts/4cf8423f.html","3a45f6bc4630e7e5b5fc4ebdac7859da"],["/posts/4dcf85c.html","41770a4b2326d48faeeca8082e2be4b4"],["/posts/500cd322.html","ccf0b79d705cd2e4bb1f7c14771847eb"],["/posts/51c9b1ff.html","cd9064f93f560d03d3b7b535a325d638"],["/posts/52b5b3c6.html","6dbe95798b8f7a8a32956a19832ff1d3"],["/posts/5f6e0c59.html","3b02c1c9e308cbe870d475de74de6d3c"],["/posts/6336a2f9.html","42e27d28118b86ce77ac809e898a9e4a"],["/posts/6432d61a.html","619cbf5399a5ddb030838e646e105e6d"],["/posts/6515f032.html","2e708fe710a700d9cc02c66b493b3dc7"],["/posts/6720ccdd.html","0b11ed0c64550b51fb62afd3b40f9173"],["/posts/6a4b5ac8.html","c80cca4640140c87316905c90e0116f7"],["/posts/6aa4177c.html","be7bb0d97746253a89b885d57136e3c7"],["/posts/6b15f81f.html","fefa98d5e982c64a9eccba47bc864971"],["/posts/71131d34.html","69aa549133c7fb3ecb34cd5137651462"],["/posts/78a8a8d3.html","0a8d32027d7a5455b12cac3bfd04d5d4"],["/posts/7a5ef3d0.html","479b7ffad8a232bc8c45d5bb8b946616"],["/posts/7b41e1ac.html","a2f596a48478ed78fc27b3096a856bb3"],["/posts/7b51011d.html","a60cad4f1e5c6e52f1b30718e1ea3a7e"],["/posts/7e3aa3e2.html","09b997298904ac6c56c67be82ec9d15f"],["/posts/80fe2691.html","0c58f0dd2c2ae7e9822aad190d1d9cc4"],["/posts/81ac52e9.html","f1ee041f7b150d65d3273a765ac27eaf"],["/posts/849b40f8.html","4963903da299776463c7d7860e291dd9"],["/posts/85c51d68.html","6a37be7daa2bb5339b640e867fb501c5"],["/posts/886f8d3.html","f9466d4ffc422545d48fcd908129c390"],["/posts/8a7cba10.html","d65363c64bfb973671c9b8924f521cbe"],["/posts/8ac11b41.html","70fbf24c1cbb43806b435bd00273aab2"],["/posts/8dd520d9.html","ef56616fba1990889a4d925a5cc93cc1"],["/posts/8f555654.html","64b0b2b031c647fd2f73145036e13cb9"],["/posts/92a980c2.html","ea29a6fd4eac1d7f8ddda8ae93ca6c90"],["/posts/92ce16.html","b15ab5e8b7df298cee7e1f80d7f7cb47"],["/posts/94d3c794.html","8a5430636b3b70994fb2c22ddd443454"],["/posts/97f50eea.html","d5731653924cc3d8426bccc392f29948"],["/posts/97fca8be.html","ea7f80df1c423abe41ebe546aa71e73c"],["/posts/98662d05.html","6cf00b771dc054525ede981bc49289c9"],["/posts/9a2f6162.html","1a218a65131fadf13bfc447182ffc91e"],["/posts/9b22a48d.html","5e336cc7b00ca82f556cd7983d99b309"],["/posts/9cb455b1.html","4cea32462ed5909d9862aa5bf935edd2"],["/posts/9efd7701.html","d7d65cbae1a710a550d45e26947f5c04"],["/posts/9f61c1a0.html","c3794f3115e6bce0c76b04c71182f0ef"],["/posts/a1de710.html","b2d853b9f67116ba6e5d8cbed3e067f3"],["/posts/b497b647.html","02d25f5e1c569dabdbd94664c31e516c"],["/posts/b4d464b0.html","13a626753174e0a293e4f9b8e6aa66e6"],["/posts/b5fb773f.html","8f4a3abceb03cf4911d105803d3f3364"],["/posts/b8d46b32.html","6d135194199c08ff43a6bd407728f05a"],["/posts/c1b2c6c9.html","e97b163e4ef2b141897ea2cc3b61ac1c"],["/posts/c2111cbf.html","6216415d6c0429037eb90f0ef27d0198"],["/posts/c316c2e8.html","7ba151c1cf898ae43d9e284e8d024d36"],["/posts/c43e60b5.html","c8fe37fb14b1931abc01ddcd23f16051"],["/posts/c497a412.html","5089171d5f5ac0ed6a6f07060c4b80c9"],["/posts/c5de299a.html","f4843f5c053cd31aeb6b1531ef042eab"],["/posts/c70bba9c.html","5cf13faa1b6ed5237f94741895786c1f"],["/posts/cae2c959.html","d9c4a96cdc2a60b1655dbe2c328eeea6"],["/posts/cbebef2b.html","40ce55cb9478e2fa414e26c2359ffe44"],["/posts/ce25023e.html","3e49e86d6453a0160906fac6535a21b8"],["/posts/d2fd4837.html","13153466f484564ea67de8ed62927c59"],["/posts/d3233cbb.html","009fca058e06ad71d9376a06b0201b19"],["/posts/d3a745a8.html","f2c6720a078b9654ed98e03e821e19bf"],["/posts/dc815d5.html","487ffcaaa99e60680b257151bc0ab333"],["/posts/e3ab6ad8.html","165e90eb933c717c55ad068531a75f8e"],["/posts/e5018da6.html","1a71499b9182ed32415f789abcc93504"],["/posts/e5963272.html","f05e6e814effb63c30a1d818e576739e"],["/posts/e624b065.html","985a4f068f9e11afa41e8089ef1f1ffd"],["/posts/e8f14b6c.html","7f1193069bcb402f78bf30a8244c2a3a"],["/posts/e91abb63.html","57489cf239db1332e1530e3cacf338fc"],["/posts/ea9a8808.html","4e4eb65b189ed9dbf0e77511e82fdad9"],["/posts/ebaf2232.html","7dca499d9ec821196eedda27ee655bdd"],["/posts/ee1ed673.html","83c3cb5db19c36a8764755fa8a51a050"],["/posts/f0c3ed61.html","5038a7a36b418f044c5438cb6bb2c11a"],["/posts/f21e7f84.html","34e3fc1b5c386a3f55563750cfe40ede"],["/posts/f230b0fd.html","b0716e31d9d5ec72540d5d976e966deb"],["/posts/fc04d0d4.html","015b78bba6c92d69875faea5da3043e1"],["/sumire/index.html","c30a2ba9d353408b0e6d1f86bbe93bbd"],["/sw-register.js","e6b28061f1ca9fe1bb64f75107b580fa"],["/tags/APPLE-project/index.html","bf5a86edf3a0115100fb0c87ceed001a"],["/tags/BL-Game/index.html","5a76898a603916f5858f7831038bb859"],["/tags/CHUNSOFT/index.html","e4a9da56902354d5092e2de98d8a8e87"],["/tags/Cherry-Pie/index.html","3d25caa548ccc2776a80861b5dc15414"],["/tags/Circle-Mebius/index.html","c6d0756db88fdda4a425b637241a5f86"],["/tags/CresCENT-BLANK/index.html","f0e19cd8a310b2486bd53a2a899b598d"],["/tags/Dopamine-Software/index.html","8986a98f10873577780c44e4b373499b"],["/tags/Dos/index.html","8851ab15c40ef5fedae55c0ed1e15315"],["/tags/Earth-Well/index.html","6e0949ccf5732c580fd10b794b727490"],["/tags/Kanon/index.html","2457d26a94b45bd6c81f46931eac1b81"],["/tags/MANATSU-8/index.html","1fceb3246b74978f0e8aa7e58e9e69f3"],["/tags/O-S-I/index.html","19fb0a9dda1d41a66fc47584e6b09d4a"],["/tags/Omegaの視界/index.html","302291867be3d727c16ae4e5f7dbc9c5"],["/tags/PC88/index.html","8428a3f94e55b800f23bdba6750beb29"],["/tags/PC98/index.html","487f929f82de354db170de8b99b2ea4a"],["/tags/Perpetual-Room/index.html","f0063d49ee15800edd87d07afd9fef02"],["/tags/Pleiades-Company/index.html","ea6564bf83ec8cca40d85355adbf87fa"],["/tags/Reverv/index.html","a13b9890acdc03535b785eb7c30afd99"],["/tags/Saihate-SOFT/index.html","ed29fab6130c6721c293afaae4cf5bc2"],["/tags/StrayMoon/index.html","6fe54103e2198c6bf201ddddaad08d03"],["/tags/ToHeart/index.html","c73afc2a9e655ab6de8771596238b3e3"],["/tags/Traumend/index.html","f649fe4d332efdc34309e304d463d84b"],["/tags/Witch/index.html","029387b1c7934b60c5d4ca786c4dbe19"],["/tags/adonis-project/index.html","9dafecefa680e58c64e719fc8c6d84dd"],["/tags/flash/index.html","8832e6f0d7a6c957c4e75c28d9efd0b8"],["/tags/galgame/index.html","109e7426047809d89b52ba45f331f8d5"],["/tags/galgame/page/2/index.html","d0cfc7fd02e6874168f996abee485367"],["/tags/gal资源/index.html","fd5913d16d7bd2a1a6eb2b3737507db0"],["/tags/gal资源/page/2/index.html","78f18ed6be61a3f73d318554387fca1d"],["/tags/gal资源/page/3/index.html","6c8315fd38c877db554802c0e469a715"],["/tags/index.html","ef7c1ca565a6ee7535af5677a6a8d3a1"],["/tags/rkr/index.html","da553d512d2b9b8f539da49e2c2edef7"],["/tags/team-eye-mask/index.html","ed3a3ebb9f3db665f3aba78e83e5e422"],["/tags/いつものところ/index.html","50d5ef88eb4f51c21c26687992d1d620"],["/tags/きつねみみ饅頭/index.html","79e368516220f8d540fea50039c60d3d"],["/tags/ねこねこソフト/index.html","dfd42967c96248cf80f9bc240e401b28"],["/tags/ねこバナナ/index.html","0f08ddffe3614d876a7f5b62866e7c80"],["/tags/はちみつくまさん/index.html","ae7009f8cf3502fde6b057fef0301b75"],["/tags/ろりちせ/index.html","b1ef033a8781eeae9b995f431c8b8ff7"],["/tags/アイル【チーム・TATU】/index.html","4816625f9e661e269ea196019159f301"],["/tags/ブロッコリー/index.html","ff72452633fcda83850cca3b837ce702"],["/tags/停产/index.html","214a5e5d594c2127393b0674dfdb3c7b"],["/tags/公告/index.html","77e26768bd0c37b691b3cba482e8f0f4"],["/tags/同人/index.html","528e66bc49a00590b51b6a7ddea27699"],["/tags/堀井雄二/index.html","f84589c0accb421ff25d44ee556eded8"],["/tags/外海なおき/index.html","8f8af0bd9bfd55621660ef89f9885e31"],["/tags/機械式少女/index.html","8515a6eabc3646113d9dfe7b2021c16a"],["/tags/水仙/index.html","eb5b42fa4ce337a428cb06c47d58dd62"],["/tags/片冈智/index.html","b1985ae8309732740e8ab07f3c30521a"],["/tags/片岡とも/index.html","a7586832633e9287554f526f4e081e35"],["/tags/牙の刻印制作委員会/index.html","fa8da504b5b20005a48fcbeb844c4e3c"],["/tags/牛カルビ定食-FLAT/index.html","c1ea58904f195c3fc895b57a18f97b9b"],["/tags/牧尾屋/index.html","e584fd0d8103d647142583a984bf813c"],["/tags/猫猫社/index.html","bcadf8b95fbb38399c95c8fcc77d5559"],["/tags/王宮魔法劇団/index.html","d788fb14d0e56b0687104ab18fa27ac2"],["/tags/画集/index.html","e57b083872a3f5c572dbf0b06470152b"],["/tags/索引/index.html","0d0c695aee0d527566c1481b6354feec"],["/tags/閂夜明/index.html","9e7475fbae030a83f0fa0eb1dceed0a3"],["/tags/音乐美/index.html","74d8c564c25525868683d0e3154f495a"],["/tags/黒†救/index.html","4b3e94eb676f28a3bb70137cd7880b20"]];
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
