/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","df08a4add843f70e525782382df9a90e"],["/archives/2024/04/index.html","28ec203934f8f7ca18e2bd2cd52ff53f"],["/archives/2024/index.html","9db421a1bbcffde5d70525db5a68e35d"],["/archives/2025/02/index.html","5da1f9680f466ad1814f98ec2d34e316"],["/archives/2025/02/page/2/index.html","64b4a90ef25a66e200e3ab47132bf2db"],["/archives/2025/02/page/3/index.html","a9f9100abe35aa74d9284953abd80a31"],["/archives/2025/02/page/4/index.html","10b41422e0715ac3d2278fa853e3c325"],["/archives/2025/02/page/5/index.html","ce118e9b97ca55030ebb6039180b5bb3"],["/archives/2025/03/index.html","740c8342a84cca65c14e24e4f3c373ae"],["/archives/2025/03/page/2/index.html","a2ea1ab1d3750b61abb6b41ca561856d"],["/archives/2025/03/page/3/index.html","851e126f8501cbf62816d694d461a5f3"],["/archives/2025/03/page/4/index.html","cf3e5f1f010c950e8889d20224158a14"],["/archives/2025/03/page/5/index.html","bc277d0b30d776e9f694e23050cc2db0"],["/archives/2025/index.html","ad914e23f661874c19aefc5816ad3386"],["/archives/2025/page/10/index.html","9e3b24a2ad26f14befdf083120f9a501"],["/archives/2025/page/2/index.html","d918afe7b197ce267c120eeb2be29eda"],["/archives/2025/page/3/index.html","5db00399e87122c856fd273074886e6b"],["/archives/2025/page/4/index.html","c69a87ab0f4d937390007586e9d7b86d"],["/archives/2025/page/5/index.html","38b3b34dd2f86b00d3784aab56663dcb"],["/archives/2025/page/6/index.html","0ad8f45d1ce2454d02dd323f877cdca8"],["/archives/2025/page/7/index.html","24cce782469f182b578db9ad3f2cc4aa"],["/archives/2025/page/8/index.html","5e74b6065fe124b1947d323a3c0400a5"],["/archives/2025/page/9/index.html","56705d416820a4a8ed88319fe7a2bc9b"],["/archives/2026/02/index.html","2ee2898eb99ffdacb838c819731230e1"],["/archives/2026/index.html","94d74786276ea858882276cfe7ec3d58"],["/archives/2925/01/index.html","2b1c9e6ec05b4d018ef9c061595ff7d3"],["/archives/2925/index.html","5a160a5b4de73a5386ce95a88dc50357"],["/archives/index.html","9b14cafa82bc92e178e9a181875a4dac"],["/archives/page/10/index.html","ca09542dd218e6136ea458c44201442f"],["/archives/page/2/index.html","97d3a323d5f4b83cfbc8a4bf1c0508e2"],["/archives/page/3/index.html","ed1b624418caf395e9a36be79715d1ef"],["/archives/page/4/index.html","a23be0ef75c7818f6808998a5ceac612"],["/archives/page/5/index.html","2b0294c5e9f97055a9959f5ac382e7ba"],["/archives/page/6/index.html","428ab8bd0124fd622e24e0d57ba43542"],["/archives/page/7/index.html","a8b9a452eb5f7337d4e3c753169265b8"],["/archives/page/8/index.html","76d753efbdec334cbd58d55f8e262c99"],["/archives/page/9/index.html","3defbbb68af0cf1690112c250d22188c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","876bcfdb7c6a7e63b8778d516bb7bfff"],["/categories/galgame/page/2/index.html","579a01fb773e79719e2e06574f4da417"],["/categories/公告/index.html","35f9084326cf7f16ba2305b950682320"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","0b5f5aecbd844abcb5f710320c5577ed"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","53188fb548c4961776e0fe8e862be1df"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","0b2e53e27ff0284cb99d183eb958525d"],["/page/10/index.html","e25f043c73cd8e394741476e67774c42"],["/page/2/index.html","0e9b71b937a1df9454d5115ad7495c3c"],["/page/3/index.html","cfd8ba93c4d1a91d0b29ddb72f4a59e3"],["/page/4/index.html","c447cfe7bcfd527a42d1df1437111981"],["/page/5/index.html","805bbee4959e10948e665ade5c299c4c"],["/page/6/index.html","558c33fb9a9d1eda4aaf3a81a179c60e"],["/page/7/index.html","cacbc4ea4653a7bacf3486989da6c595"],["/page/8/index.html","3f333d8e34ef9d0e2b651dc4876255f9"],["/page/9/index.html","33767fdd76002b14eda04644b3b50a9e"],["/posts/10c9dd98.html","4ff2b04d8f0309cf8a49384645051756"],["/posts/1295b569.html","64fc31322ea8363b35b9e3cd1633038b"],["/posts/1370342.html","9720263aed060d64b3f6166aefd2f1a0"],["/posts/15ef14c2.html","59bcc170fbbbebf0e31a119bcd58a650"],["/posts/15f3959d.html","6cce66302135aa0ad682ba6196d7a847"],["/posts/18ab785d.html","f422966027fe7a085eb0d8c957fd7f14"],["/posts/1d59b71f.html","9ad35abfffab08a0c59f7a9cc355c704"],["/posts/20b3f3a4.html","3dcc8819f4563e80dc671058198ad394"],["/posts/245f1c7d.html","991a421773d7b01d5a76826228e59b8a"],["/posts/252658f.html","47556c5fa307feda64c8ad0d6cf5b2bd"],["/posts/28397adc.html","a8dd2776842fd347503ab2500cdbcac0"],["/posts/2c0a6836.html","d6fede1fe4b9c1b3076b6a5707e1a781"],["/posts/2cf620f0.html","bb85b668bcc5d141909ae8ac8fab959e"],["/posts/2e30fd6d.html","ddc1f1cf1b5caf3a07792a0b3b4d9af8"],["/posts/34292736.html","f57ad19e43bcae77cbc3126b9be454c7"],["/posts/3468cbe.html","27505734828423b1c4efbc6d3800a379"],["/posts/3e118dbf.html","e5a3a305d55a931b8fa4a8ff068bc91c"],["/posts/3f7d823a.html","395d029c7d35344a4a835d2b55f4919b"],["/posts/43945723.html","64d843b2e1ebcb7657a9cc2d04e9481f"],["/posts/44124a6b.html","2adf99b13ef22dbe5410635c6c95fb8b"],["/posts/47abb61d.html","c89cd4a15bd647c202c9f716abaaafb4"],["/posts/4b689be3.html","038c76dd6cca9e5960ed059d0556d7d6"],["/posts/4cf8423f.html","78a9466d36adbdebaf44f153df0897e7"],["/posts/4dcf85c.html","05a151bf66cf079f9a3a72ecf084524d"],["/posts/500cd322.html","f8af05d1e222e11e8a13fbae6ac9466b"],["/posts/51c9b1ff.html","aa511c06a27710f7a35e00f659101e53"],["/posts/52b5b3c6.html","3ada351470bbd1078ed63edc6e82ea4a"],["/posts/5f6e0c59.html","f6e09a63ba71233a7564ab043a9e2a6e"],["/posts/61a63a84.html","6bceb2611b5210dc8142d13c4c582344"],["/posts/6336a2f9.html","d4e843a187ffea2f1eea9e607d7a8583"],["/posts/6432d61a.html","2027d26a064265f1d2919ceb127c1df4"],["/posts/6515f032.html","8608be3c114e452211699c25f5033d91"],["/posts/6720ccdd.html","75b76bed3dffe58bf9741ce57093ca68"],["/posts/6a4b5ac8.html","e368590eed6e1e7059e4f7e6adea38b0"],["/posts/6aa4177c.html","6e7ffe37af15f14a4e0ce3647f251b94"],["/posts/6b15f81f.html","9945520647104e246685b4687cd51c31"],["/posts/71131d34.html","de88a69a9a94b8f8570a6d78177c9780"],["/posts/78a8a8d3.html","320078715d166e4723dbaf96c3ef0424"],["/posts/7a5ef3d0.html","316549845109ee08300019ac74da8ac5"],["/posts/7b41e1ac.html","33678b0d0bfd72cdfe99b16f49faeb7f"],["/posts/7b51011d.html","1a09d5f75ed583865d6075efaae2f075"],["/posts/7e3aa3e2.html","ba2f00d13231f051f63db28054a92b30"],["/posts/80fe2691.html","59fc3ee84526deb1d8d5118566ae732e"],["/posts/81ac52e9.html","05faf95eb56de9742e7f77ca8baebdcd"],["/posts/8486f6f9.html","04ee2ac275ac70325d25bd0eb5c8328f"],["/posts/849b40f8.html","769c130a5d79c53b3eb45e0eb8aa4c6a"],["/posts/85c51d68.html","b5ada019af76c30f9cf0cfbd39f24d01"],["/posts/886f8d3.html","4a2065bdde6b14ce05b5a5fb8438f72c"],["/posts/8a7cba10.html","606c66aa238bbf0467865b50167489ac"],["/posts/8ac11b41.html","c54a4f80372b55d9941cf09452faab31"],["/posts/8dd520d9.html","a7085a587cd102b1be3f14057df5dd53"],["/posts/8f555654.html","32393055ac302daab2517dc964995a16"],["/posts/92a980c2.html","9536d831b3b5f44f0504f09de33a5829"],["/posts/92ce16.html","b0f4be8979140880036d5e443122a9bf"],["/posts/93e9943b.html","6b4f69a747a09d41dac42f29048ba8d8"],["/posts/94d3c794.html","eebcf26a75c786da807919e1430c63ed"],["/posts/97f50eea.html","c3a5ff54d71c84e4290264a3fdd99214"],["/posts/97fca8be.html","77635ec54d428697f36cff958157529f"],["/posts/98662d05.html","3f84afad86b30105ecf8136f14157fbe"],["/posts/9a2f6162.html","db10a59a2251d4827b53e9c882354b65"],["/posts/9b22a48d.html","588fd90d34b640ca9568de680686abac"],["/posts/9cb455b1.html","00744ad877ecbb223818a0f3a8e6abc6"],["/posts/9efd7701.html","25a8bc38634475b7bfe296b3881cc97c"],["/posts/9f61c1a0.html","05e9ddb7427b41534dc4a04e491c8343"],["/posts/a1de710.html","e96fafb2da23b331f95f54946302b7e4"],["/posts/af1807ef.html","d6053c959b811cb2fb36ba2032f5b20e"],["/posts/b497b647.html","77cd5000d151b6419a8b06e13f6d8108"],["/posts/b4d464b0.html","66108af054c4794b4b7fcfc849db21b1"],["/posts/b5fb773f.html","20fda89705299cdd5ac965d96d8f35ce"],["/posts/b8d46b32.html","f80d4662db63b0b562761dea3f8d9d14"],["/posts/c1b2c6c9.html","2bd388cf693cc9321fa503d4fd3b04b3"],["/posts/c2111cbf.html","f68c7efc803d67b68d09720682b966c3"],["/posts/c316c2e8.html","82cc7fd6d3ddbff1711f71795a095217"],["/posts/c43e60b5.html","e573d18785823111c4bc3fcec5fc8fc1"],["/posts/c497a412.html","387657756ad1fe4aaeaf90340382da94"],["/posts/c5de299a.html","5d7ee220694e9e9f141c20566dd7eea0"],["/posts/c70bba9c.html","7f518497b11f8d75b362efb5434e087a"],["/posts/c797535e.html","5fc07730ef45b745512c262403aeff3b"],["/posts/c7a62c79.html","f3353c4c35eaf3ed40d891e6ec3f7591"],["/posts/cae2c959.html","4116954497e01aa4599c00d01ae038c3"],["/posts/cbebef2b.html","ac92578348b6686b16b680f3ac3164ad"],["/posts/ce25023e.html","d0de2a7a0e06b3fed75b3d684122770a"],["/posts/d2fd4837.html","eba59e50ff536084765a32295299ad95"],["/posts/d3233cbb.html","7662a8ef3350394d7bfecd454970b617"],["/posts/d3a745a8.html","d5691e27098341cd4850fdcea88d09d0"],["/posts/dc815d5.html","8d8044a70630988e27933ffcc005f3f1"],["/posts/e3ab6ad8.html","0b93f26eaad01a61dfd33742bdf195ce"],["/posts/e5018da6.html","07fb6376da3b54d5e7c04a22957b8006"],["/posts/e5963272.html","d8aca5f53697169d3d22d5d0f3d4041c"],["/posts/e624b065.html","f22098eab3540cec709ea9175f7362f1"],["/posts/e7c703bb.html","4970f5d0864ac894ca0cd9db0cd28903"],["/posts/e8f14b6c.html","616bb3cd7ac22b8590e908640fbfcff8"],["/posts/e91abb63.html","70d9a1a0dec630d133f1bf97591df5a4"],["/posts/ea9a8808.html","0108f765725c194340eb92149593ec89"],["/posts/ebaf2232.html","7b8c5a671d83e5e628116fbfd60b6f1a"],["/posts/ee1ed673.html","fd3ede303607608a33b8a82a7c10f1b5"],["/posts/f0c3ed61.html","46aba15b011356049a12cfdf2e6e23c4"],["/posts/f21e7f84.html","ca203003b310e15d299363d1993fe24d"],["/posts/f230b0fd.html","8031aecf2dca96875c76fee464ac6cf8"],["/posts/fc04d0d4.html","569d163e5ff945b55db2a3a62adf2f90"],["/sumire/index.html","451a7f6dcc6ff370c1bbb981c09ddfca"],["/sw-register.js","9f5704ef60e7fb1db378fe77d8c06f49"],["/tags/APPLE-project/index.html","f9b171c6d8dabe1ac92aeacb7445de08"],["/tags/BELL-DA/index.html","000877d27decf5af1a0503650fc04d2f"],["/tags/BL-Game/index.html","cb2413bcb5512cee03501b18765348f0"],["/tags/CHUNSOFT/index.html","d5a656b64dcb74a20ce6847016eb352d"],["/tags/Cherry-Pie/index.html","c3782f35fbb5f2526090e260543bd636"],["/tags/Circle-Mebius/index.html","f269eaf639671019d11f0dd2374002e6"],["/tags/CresCENT-BLANK/index.html","e3e52f305a22a4b6004f27fcc27b4f9a"],["/tags/Dopamine-Software/index.html","0ec91f836da7189e2051543f336f30b9"],["/tags/Dos/index.html","715160c82dcfa5a2ca62b9f44eb99d90"],["/tags/Earth-Well/index.html","32db18d8c4acf534f026107ac5afb8ef"],["/tags/Kanon/index.html","476def02a9dff080d0f86c0e3e413b26"],["/tags/MANATSU-8/index.html","1b289ee191a1d0107d45d3da1299a8e1"],["/tags/MIO/index.html","908fb99049351fffb7236fce85bb6eac"],["/tags/Nmyu/index.html","89063bd8eae54272fb04f204e89e650d"],["/tags/O-S-I/index.html","a9a9c07cb39754e925e5e50ae9aa6a5b"],["/tags/Omegaの視界/index.html","1b05721d278fb45089ba83b7ca622cfa"],["/tags/PC88/index.html","76f691e9a4a36ba7096931e376088763"],["/tags/PC98/index.html","05b51d755217177826d068819d952bf0"],["/tags/Perpetual-Room/index.html","e217cf9fe6a183951897d49ad330c712"],["/tags/Pleiades-Company/index.html","c8d729c542d56dd5592e888fbfffd6f1"],["/tags/Reverv/index.html","6a74e963ffe4b5f87d56d5ddfa67b866"],["/tags/Saihate-SOFT/index.html","61a9289e835fd71f5f68d503bba9073c"],["/tags/StrayMoon/index.html","dcf89a3dfb82d9763620fec89a1f0071"],["/tags/ToHeart/index.html","7786af0cf40d92c1b7b7cd888a56256c"],["/tags/Traumend/index.html","37a77ef814e07a4a2bd97a3adf666741"],["/tags/Witch/index.html","5318195cdbb9ef708e107df6222851ae"],["/tags/adonis-project/index.html","fae152f49913585720144c9ae9b88002"],["/tags/flash/index.html","efd859e27a405983ec19d7b73e04a9f5"],["/tags/galgame/index.html","53d03c54d56fda9d7f5ce327723ddb26"],["/tags/galgame/page/2/index.html","c05a18a51122308a855ae4ee7317c7db"],["/tags/gal资源/index.html","cc16540c6480f82595319fec340f2fe4"],["/tags/gal资源/page/2/index.html","6713d4c1a9c80648b9462b1d69f90d20"],["/tags/gal资源/page/3/index.html","f7f9e479b01e255d6e35b61a9b5999ba"],["/tags/index.html","2a7a9ec35061d1d8d3b78514407e6ee6"],["/tags/rkr/index.html","1ed63b3eeb43716f3d0cefc80d338c4c"],["/tags/team-eye-mask/index.html","0d69449ef023fe35e88c069277bd34bd"],["/tags/いつものところ/index.html","bc8d569963a08b314588d5221590af15"],["/tags/きつねみみ饅頭/index.html","cd6825fd9f8ce866d4d7f098e0ed9f95"],["/tags/ねこねこソフト/index.html","54a1983aa4fa29922a859a678617b5f0"],["/tags/ねこバナナ/index.html","bb3a0ade30035897cca98c542c6ae390"],["/tags/はちみつくまさん/index.html","4817d10880df87285bec79d9187fedca"],["/tags/ろりちせ/index.html","885db081481c1255f4e33eeffa4a19c6"],["/tags/アイル【チーム・TATU】/index.html","43fbe1eb80c784e94adeaa3db61cecf9"],["/tags/アークシステムワークス/index.html","c2c2a05fe0835a28b79ba615d91db2b7"],["/tags/ブロッコリー/index.html","d26a67da0765b16f0987b14da74e998e"],["/tags/乙女/index.html","5c7d31ec73d1fd6712fa42be1d3b2069"],["/tags/停产/index.html","6ef06dbb75bd739918a830d19a0d3f60"],["/tags/公告/index.html","450fde8b1578a890f69e2353d1f1e051"],["/tags/同人/index.html","4641bede29b4455d43baf159688096b5"],["/tags/堀井雄二/index.html","0658cec70e99a67b078c3efd9f468ea7"],["/tags/外海なおき/index.html","3471b10ccd4fee079ab8346abc427c6b"],["/tags/機械式少女/index.html","9efdac61a18471170e38b6d7bb07d905"],["/tags/水仙/index.html","995cda93b83cea42f0b98f4792ca7f17"],["/tags/汉化/index.html","0b74faa4df8952fc079de3161e75c721"],["/tags/片冈智/index.html","a2ba8cdf2fe3ca67ff1abb03e12a4dfd"],["/tags/片岡とも/index.html","5bbe11cdb998790f5269d7acf9bf7608"],["/tags/牙の刻印制作委員会/index.html","e798a26c1dabdaae93b0b29f8ab4e411"],["/tags/牛カルビ定食-FLAT/index.html","7b4947db5bec3f205c649c048e5e3803"],["/tags/牧尾屋/index.html","502fd50924f1ca8cc6fa4efdccf9d25f"],["/tags/猫猫社/index.html","53637894c2d8b709d83eb2b4c9c0b2bc"],["/tags/王宮魔法劇団/index.html","1214f8c51002bd1c8374eda2966075b7"],["/tags/画集/index.html","b7a60147cb42524b56958d7cc5eb3045"],["/tags/索引/index.html","4a88e1e0a741e8f17ea38735f78ec013"],["/tags/郷愁花屋/index.html","176c2558300420932f3e1b9ab554ff84"],["/tags/閂夜明/index.html","6e6627986cc29bdc4e86571f513e46b5"],["/tags/音乐美/index.html","de11b90db9353dab7d850e210b2fafdc"],["/tags/黒†救/index.html","cf958ce29eb2c3ffd291d35a27a6de17"]];
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
