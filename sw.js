/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","601607ee89cd0901522691bff4ce914f"],["/archives/2024/04/index.html","c92b003e1409b3f9be4811f9e3581ac8"],["/archives/2024/index.html","47a68015fcb7ab11238c9bedd1f30eed"],["/archives/2025/02/index.html","037e59961f948c18ef216901452bb124"],["/archives/2025/02/page/2/index.html","67544087dc2dbb8c1e256b0ed3d98134"],["/archives/2025/02/page/3/index.html","3af457df6d872a26044ebc31232f24fc"],["/archives/2025/02/page/4/index.html","1823389d07ba82f2452e8c6ce43a77fd"],["/archives/2025/02/page/5/index.html","02cbed959c2e5581d17abaf7a4e311e9"],["/archives/2025/03/index.html","4eafdf236a14984d6682cfe47f388daf"],["/archives/2025/03/page/2/index.html","ab8c9730c2d1c247152ea63af239f84d"],["/archives/2025/03/page/3/index.html","e1b41a8a5589691c3dd604d85e6dd40b"],["/archives/2025/03/page/4/index.html","101d4611e7f19e9c9267e77fd8d7803e"],["/archives/2025/03/page/5/index.html","5f0c48c71d680ec5ca3fe8f55d33a817"],["/archives/2025/index.html","076fe069a4c78eca20df9f2207b3423f"],["/archives/2025/page/10/index.html","f240268b5afc285886fdce64c3ee9d0c"],["/archives/2025/page/2/index.html","4f4237f60bdca5637e20e2c4493b5e70"],["/archives/2025/page/3/index.html","bb423de76c0de01f13509100014a8656"],["/archives/2025/page/4/index.html","84011309889c246ecb9131b9c3ca289b"],["/archives/2025/page/5/index.html","d4c50746eb4bccb3fd08db9256b45747"],["/archives/2025/page/6/index.html","a5a3ee1c5a0f89764bf401f414f98848"],["/archives/2025/page/7/index.html","c9c794fd978a79a44493aadf8dd70255"],["/archives/2025/page/8/index.html","21adb8e2d31de4ab07c830cf7c6633c9"],["/archives/2025/page/9/index.html","e928893093593726558818a93f0f0e1c"],["/archives/2026/02/index.html","b1375e4c91bfc1d2d3b880f4a3e4f8d7"],["/archives/2026/index.html","5068d07ff58a9b77b427db145552d614"],["/archives/2925/01/index.html","e3c79a2e46f46eeb2e330f3c26501bf7"],["/archives/2925/index.html","b666b681fbf28211b17b641b2bf6d599"],["/archives/index.html","ccc0bf370d1624ad74d6000b10f09384"],["/archives/page/10/index.html","4842b8e49c98d6a03f43e3cbf0f80c70"],["/archives/page/2/index.html","43e98bc7e4246c42db6726eb20a2c2be"],["/archives/page/3/index.html","43a53ed734c17651f64f34ff2566c382"],["/archives/page/4/index.html","726506ecfda10751725925279fbe0087"],["/archives/page/5/index.html","d047422c6eb6b990ef09d456085a42f3"],["/archives/page/6/index.html","809439162a1a9657dc464ee0e590c51e"],["/archives/page/7/index.html","3734b8c7b950d938296b174f203098e7"],["/archives/page/8/index.html","8f97ee1225a95ccac62aa33874d02ddd"],["/archives/page/9/index.html","0eddae9a3df7c8cd42334cebccc7048e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","2cdfcbdfef982c8b8012e23111e50d78"],["/categories/galgame/page/2/index.html","2b21d9d55529d493600ccc5c9b480a00"],["/categories/公告/index.html","258a1706ff100c91fd3518aadf68273a"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","3aa7a26918655ee8fccc21379fcd0475"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","712c6994c608e5c4d1a456e163e70d73"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","d0efd3a2fb3cc3ece15ae0063c8ff029"],["/page/10/index.html","6a40f716ebbf7aced25bd388cb6450f0"],["/page/2/index.html","1460ffbb77cbf24c68a0124637264889"],["/page/3/index.html","3963980de8faf9025deb04e7409ff861"],["/page/4/index.html","219ea10f60c554f1f66197877cdfddea"],["/page/5/index.html","1b2c4e05ddfc278cbebe593539d088fc"],["/page/6/index.html","fea5d4eb34ccddb47cd84fa144101eca"],["/page/7/index.html","a9d65f7a6b6fac373f96f8d591660d01"],["/page/8/index.html","b17154e107e6e66d6e18fc0cd6edcacb"],["/page/9/index.html","f2f6a599429ea6ea2fa8a079288670f4"],["/posts/10c9dd98.html","366f45332ef6d8103b296ba95cf31440"],["/posts/1295b569.html","79061613fe5c867ee801df1d00e39375"],["/posts/1370342.html","b0bb0333f3c6492bb9676ca5490eb046"],["/posts/15ef14c2.html","e680c8ecf3cc511036d1da1ef1d80370"],["/posts/15f3959d.html","b7fbc67e6e5b80a9cc9d35ccf0f91a69"],["/posts/18ab785d.html","a6f2be635c779bda213377ff971f127b"],["/posts/1d59b71f.html","6ba4cc81278a61e65a16c211bb203402"],["/posts/20b3f3a4.html","ef841965aa46088b1f28e730805302dd"],["/posts/245f1c7d.html","0c508670489c6f78b374cf71b419e94a"],["/posts/252658f.html","750da52ccbf595e5a8670e07b9bf49cc"],["/posts/28397adc.html","477c53dac6f359c189efddc65f09a286"],["/posts/2c0a6836.html","6bf9080c6889f6b4f79d64a048ebf125"],["/posts/2cf620f0.html","9284e39925393f8e8031a6e03de2431c"],["/posts/2e30fd6d.html","edc1c30b097854b0feb833100fe153f2"],["/posts/34292736.html","7bcadea07fd6ada1b2bad5f166ea9ff1"],["/posts/3468cbe.html","b153c82ba215e80322b32578da439203"],["/posts/3e118dbf.html","2398dd7b6adb914e3a65b6d38e5f1ec9"],["/posts/3f7d823a.html","3c562be0e75833bb5f7897b4ef4e6325"],["/posts/43945723.html","09ba15e3ba9f6bf40d4611e8ad9782ad"],["/posts/44124a6b.html","81c9098d3634fa007f000522745b95cc"],["/posts/47abb61d.html","ce6752bccb427c7159bfe7a03e15fa93"],["/posts/4b689be3.html","f22ec60ab0a4acae52e595e39d6dcb82"],["/posts/4cf8423f.html","1cc62d4cdef1e2aaece086003e94710e"],["/posts/4dcf85c.html","e95d953bc79a355cbdd653cff96abd8e"],["/posts/500cd322.html","969cf73d79c4c483b7e546c1bb099387"],["/posts/51c9b1ff.html","bb2f7deeeacee04831468119f9f8ad2f"],["/posts/52b5b3c6.html","785c5d2b23c73ef0881e31b791befa78"],["/posts/5f6e0c59.html","5a664bae2dea5e5f4b5c32711404a9a8"],["/posts/6336a2f9.html","3a5920ae1d9ab17b4427de36c8f0483f"],["/posts/6432d61a.html","9068583a17d901d374f7044b9a837652"],["/posts/6515f032.html","55c00788070d9a3b8e5cf7cc2b42497a"],["/posts/6720ccdd.html","b3d7041a348209626c921f9bc13c1ad9"],["/posts/6a4b5ac8.html","a33220b7d34664b0e1970bc63eb2cc5d"],["/posts/6aa4177c.html","e3f35103070742abf3078a06a92c569b"],["/posts/6b15f81f.html","2262117cbdf44b6a694402724200d69b"],["/posts/71131d34.html","9173e98768fae84d09392f6a7ef9c24d"],["/posts/78a8a8d3.html","9006611d242db69adbc628a4f0ba03a6"],["/posts/7a5ef3d0.html","4bc73ba27393c6e8ef45c3d1b5bd8bba"],["/posts/7b41e1ac.html","321216c40f76578cd838884e9cf642fc"],["/posts/7b51011d.html","5a76287bcab9922c35df25713385632d"],["/posts/7e3aa3e2.html","6a2543cfde99654739dd7e4cb7d840ca"],["/posts/80fe2691.html","71f316c30cab37091eb3738b0ccb2156"],["/posts/81ac52e9.html","503a5c0c874e36439e7d9fbc266aa4b7"],["/posts/8486f6f9.html","f6a5e3d17e97c38354af304061b7d3a5"],["/posts/849b40f8.html","90848e8388f57a40b99eb18bdcd6c724"],["/posts/85c51d68.html","c739ae22e69327dec4665cfb7666fe53"],["/posts/886f8d3.html","4ddccae9ea6d3d7e9e788b7500d3a84c"],["/posts/8a7cba10.html","dfbd75dbb52aae7f35a20ea96a4014a4"],["/posts/8ac11b41.html","36a2d9675c45fe50b7a5c7e901498df8"],["/posts/8dd520d9.html","2ba8db6f5cc8ebc71ab6eb3a8c73d610"],["/posts/8f555654.html","bec2980b4a94227820345d032c32b144"],["/posts/92a980c2.html","107a909b73a7926c0a24e55b9427f856"],["/posts/92ce16.html","e49090754f5fcb59bf03c0b9ba9c83da"],["/posts/93e9943b.html","7dea84002aead4aa338aecd01c68b49e"],["/posts/94d3c794.html","8b936765f5efd23e86f56988826b29d3"],["/posts/97f50eea.html","48a107ce80d485c6dd41053d07bf0c67"],["/posts/97fca8be.html","b61db1ba5053a978e6a30a64a1a065a9"],["/posts/98662d05.html","e8ace98a1bba1667eced25c87e8a0ee2"],["/posts/9a2f6162.html","9ab7de7eef0515f4df59f1b6a5f4a83e"],["/posts/9b22a48d.html","a3ab12cacc0e25f8767a08aa6aa37fb2"],["/posts/9cb455b1.html","5f5b6288b6760a7c8c7a69673d0fe118"],["/posts/9efd7701.html","6f8f0a8db818d9b2769e00700563275e"],["/posts/9f61c1a0.html","aa63fa1c3248262040913b925fc65cf4"],["/posts/a1de710.html","1b6cb54116693909a306127e0b229af7"],["/posts/b497b647.html","14d1b6e354d2478bfc06ee4f903dec8b"],["/posts/b4d464b0.html","5835efe72883cab28f27b0a37a04e4ca"],["/posts/b5fb773f.html","dc7975b22f6c39b06007191b1f8ef635"],["/posts/b8d46b32.html","59e3af7f416702df33d3afd818c9e9fb"],["/posts/c1b2c6c9.html","3839100256fb87f7ccae21f3e9285f80"],["/posts/c2111cbf.html","e3d5ad3f76b08c01b9ed1b5be8e0d06f"],["/posts/c316c2e8.html","e651c452103938406f558f0e78a7e355"],["/posts/c43e60b5.html","2f76a8c0ee1bace338075e8c18938da4"],["/posts/c497a412.html","9513008bf3b00e7a58dfb5c922ddead2"],["/posts/c5de299a.html","79637019af9c7667b333d3e2a844c063"],["/posts/c70bba9c.html","814d1899e0eb55070bc95c3ec9b934a8"],["/posts/c7a62c79.html","8860bab8ddf5aede51d79fa6c13aa931"],["/posts/cae2c959.html","cebbfca1590e4107f52becfa7d0259a0"],["/posts/cbebef2b.html","0dbf99b398f11ca21de4c57d9179ac0d"],["/posts/ce25023e.html","cc9d76f41624414b7e1082abf201c428"],["/posts/d2fd4837.html","8574ab9a2726d8ba7cb06e801cdd23ae"],["/posts/d3233cbb.html","e2cefb31e23a7a4065f7a1406f2c739f"],["/posts/d3a745a8.html","316e97d631505b99a6a7ab13bc240b16"],["/posts/dc815d5.html","1939f7e0466fcf4dd4069d6d7e15155e"],["/posts/e3ab6ad8.html","eadbad76098e8db790476180300cfb1d"],["/posts/e5018da6.html","c047481db2db1f8bec0bead72e47c1a7"],["/posts/e5963272.html","bb797d5087ae30fd68dcadde44be02c9"],["/posts/e624b065.html","494b3ea7b2335d3be0026194aeba8747"],["/posts/e8f14b6c.html","969b1a556e08a6170837851419cac806"],["/posts/e91abb63.html","693df0e5c9c165d2d2c0624fc51fa40f"],["/posts/ea9a8808.html","e42b5d41e269f56a5d130d3cc7a8f821"],["/posts/ebaf2232.html","10719e6b30a7a578a167097c9a7d887f"],["/posts/ee1ed673.html","e43eacb3c794dc360f9eab2871796a9a"],["/posts/f0c3ed61.html","f19bdd14ee1192ddd1d5169fff17c5a9"],["/posts/f21e7f84.html","4a2097fb0dab35a183d44c8fc2e66998"],["/posts/f230b0fd.html","5f8c650010370a74962f949d3c23a2cb"],["/posts/fc04d0d4.html","4b212fbfcda59f285dbd5c8a0268eafb"],["/sumire/index.html","85eda6669a9b4d8f10012c54857ceea4"],["/sw-register.js","8896e9b7e16612eba66d0ebc7422f5e4"],["/tags/APPLE-project/index.html","611cf6208baff24d7ccc29236442e155"],["/tags/BELL-DA/index.html","a73c0f179518585dd903f80101e20aa5"],["/tags/BL-Game/index.html","4a555948c99875801e78184b2e77b843"],["/tags/CHUNSOFT/index.html","2e552717b6bae59db483b0c75620d28b"],["/tags/Cherry-Pie/index.html","019499053bc6139126ea1dd152468ca6"],["/tags/Circle-Mebius/index.html","49dbe149773c3cde2acb34445e187b4c"],["/tags/CresCENT-BLANK/index.html","fad0a9aaaad9c2b754f66bd59f4b7b6a"],["/tags/Dopamine-Software/index.html","222ea11049411ebdd041ceb7b7b45d1d"],["/tags/Dos/index.html","d8644170b690e09ee462c87b28ce1205"],["/tags/Earth-Well/index.html","fae3287a61ce6019e0ba543e8e507435"],["/tags/Kanon/index.html","ebfc66bfebb01d1eeb07625100029b37"],["/tags/MANATSU-8/index.html","b5a887a99ff11b839b0649e21fa0fb70"],["/tags/MIO/index.html","e73c24509753711353b44c68f79dfcd2"],["/tags/O-S-I/index.html","871c6c7170f231abfb5cbdf137f28985"],["/tags/Omegaの視界/index.html","f32418a1fa789d11e23f50da571e046d"],["/tags/PC88/index.html","0d9fb822c5fa15a8357467a78126132a"],["/tags/PC98/index.html","b40a661115b1b623b581b2acf6f1c08e"],["/tags/Perpetual-Room/index.html","cb0de72ed7b07d6c3f8d78254c677b42"],["/tags/Pleiades-Company/index.html","035e2ae99bd1452e51ca2e287da13382"],["/tags/Reverv/index.html","ca5f80cb9fff1d360a6427124739d40b"],["/tags/Saihate-SOFT/index.html","e6a7ffb036cef445f648b5a0eb1255c3"],["/tags/StrayMoon/index.html","f7154dd14d3ef1511dbba4b122421a35"],["/tags/ToHeart/index.html","8a165d060f1a36472e4ad23aabecd81c"],["/tags/Traumend/index.html","a085db4fd65db6f99490d68ef9e50cd5"],["/tags/Witch/index.html","1091557e056688c7dd4bbb2413c0f177"],["/tags/adonis-project/index.html","b063ce21dbe2734241e3478cc7724f59"],["/tags/flash/index.html","7335ad1b9b677120b05bde183798b6f0"],["/tags/galgame/index.html","bcb25cb8490cf0b19e547ec9adaaabf9"],["/tags/galgame/page/2/index.html","444fcd5b07853c61c5131b9c3bde5bae"],["/tags/gal资源/index.html","b3480dae0c15c13d84914e0990800e38"],["/tags/gal资源/page/2/index.html","a0a48fcda117e8ba70c8738dbe98ca6a"],["/tags/gal资源/page/3/index.html","734700cde1b8f92765e1b8d14cdc9683"],["/tags/index.html","d1d990fdae8b2a9ebb3f3926d74939dc"],["/tags/rkr/index.html","5e4215c844ab7a12f4b90fb0105b2e51"],["/tags/team-eye-mask/index.html","556aaea4e42917220a0b2110084d0512"],["/tags/いつものところ/index.html","7eb8ce29cda51927e973590a33e29ca1"],["/tags/きつねみみ饅頭/index.html","3ee6fe28b617893e91a70cbd40efdc9d"],["/tags/ねこねこソフト/index.html","c9044c0884b7c5f2e4702ca88cda19cc"],["/tags/ねこバナナ/index.html","23150b0740b2109ff096afe5676a225c"],["/tags/はちみつくまさん/index.html","c9ec4ba7c7c60c2005e9a04ea7d79acd"],["/tags/ろりちせ/index.html","8f17d7e36e81d70e9efce0919e611476"],["/tags/アイル【チーム・TATU】/index.html","35750a87cd4ade6ec7b39c24ae375714"],["/tags/ブロッコリー/index.html","ab0cc7925d78ca5ef0ee6c95612555cf"],["/tags/乙女/index.html","f30157d8e77b742d896dc5bd07a55fff"],["/tags/停产/index.html","a4918244e14c0c0c2ad887618dce5982"],["/tags/公告/index.html","ca06268caaca26fd9e257d3a040f4a42"],["/tags/同人/index.html","0ae6098955b7466597661ed5d6f4afb0"],["/tags/堀井雄二/index.html","aa30cfb047620769f44602f9c0b0e317"],["/tags/外海なおき/index.html","d5ba9f26b6e8353d267e994e3e1653e7"],["/tags/機械式少女/index.html","ca78b02cfceb81fc3ea6d91f417b3378"],["/tags/水仙/index.html","4fc339711b114b77c842c04143437ea9"],["/tags/汉化/index.html","57733862d651652a4c67ea392f2a7086"],["/tags/片冈智/index.html","4cfaea2300d6c7146a50687d0c81f769"],["/tags/片岡とも/index.html","508e75468545c5d8bb0c9d3bacdd490e"],["/tags/牙の刻印制作委員会/index.html","7b50a49c76f4b820b271a5900e609c5c"],["/tags/牛カルビ定食-FLAT/index.html","15580a6d0b20cfa516723a9f8c085154"],["/tags/牧尾屋/index.html","f61d9e6329934fe869cca68fb3cb1a65"],["/tags/猫猫社/index.html","540ef90cc08dc2f0b09a0c114c97dfef"],["/tags/王宮魔法劇団/index.html","df900b09390492130bfe0d75aedaceca"],["/tags/画集/index.html","4ca53b568f9908b689b2b9c1c661c932"],["/tags/索引/index.html","d11f06bde328d2db145a145d0b17007f"],["/tags/閂夜明/index.html","04577cd095eda517abb92b4da8d7ac0a"],["/tags/音乐美/index.html","193c1eb16e60b555399aa2928c8e351b"],["/tags/黒†救/index.html","9dd9b2bfa968fcc4be6b98096dd90aa4"]];
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
