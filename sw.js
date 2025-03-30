/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c0848bc5eb3ae696b65ec683f2c11a79"],["/archives/2024/04/index.html","23420f4b7e2a520b1a3d1a5b6d17d54d"],["/archives/2024/index.html","5592c3b389a5be77d75e67a5bc8ec093"],["/archives/2025/02/index.html","6daf5be079cb180338c10a37b046c8a6"],["/archives/2025/02/page/2/index.html","dd6c3899370fefe4d501e262f607abc3"],["/archives/2025/02/page/3/index.html","651d2499d6631fb140e2dc8045d08ef8"],["/archives/2025/02/page/4/index.html","f7d0c3c183532c3aa53054af3ebb8dbb"],["/archives/2025/02/page/5/index.html","2edda730ac6e529ef8c2b2316adb1036"],["/archives/2025/03/index.html","fbddae8a40150db826dff12bad62c08b"],["/archives/2025/03/page/2/index.html","381002dfa8c83f248e1d32dcdd7a1b48"],["/archives/2025/03/page/3/index.html","e4e1f5526c86b29dda291ac9fdb5dfb7"],["/archives/2025/03/page/4/index.html","b0f6b715ed93716d035ee927aad2761a"],["/archives/2025/03/page/5/index.html","e5ea7aeae1ae37b6a96e679646fd0cc6"],["/archives/2025/index.html","b1643e27904dc815cff7f11d77f43840"],["/archives/2025/page/10/index.html","9fea5e06cb41a34fb964502419e62bab"],["/archives/2025/page/2/index.html","51e48f901e7ca6a13aba41f1226ee277"],["/archives/2025/page/3/index.html","0478a0fc847f742c5106d9699908f81a"],["/archives/2025/page/4/index.html","e26ea35ad15be7da4d350c7a431a1d21"],["/archives/2025/page/5/index.html","357934a1752dae8787175e2c11550752"],["/archives/2025/page/6/index.html","453dee82fb71b7051a1e9f110b12005c"],["/archives/2025/page/7/index.html","696bbfe9a148393e1e8ed4ed71e6b28e"],["/archives/2025/page/8/index.html","dde36211dddde4a3bfe1980c141c5477"],["/archives/2025/page/9/index.html","409a1559572341495e1d414d6903b899"],["/archives/2026/02/index.html","a876ee9cc7c91e1aa61b887c33c0696e"],["/archives/2026/index.html","5137efcedc5a275eafdef470eb4a9e8d"],["/archives/2925/01/index.html","e5279307dfa2ea51751b29ace0e8246f"],["/archives/2925/index.html","8b582dfa70f7d84a23d1b9966c39e122"],["/archives/index.html","1e0f1aa891368e94b8fc348016763453"],["/archives/page/10/index.html","db17abddebd53034a7415543f99f52f1"],["/archives/page/2/index.html","78198e3fef76302d319a2890d75fc5d5"],["/archives/page/3/index.html","4f211bc7e578d1a3cb97d57014c66f33"],["/archives/page/4/index.html","53fcb4bdcadadc41f33a84fa26c88e78"],["/archives/page/5/index.html","d079203f752fad49cc6359a7f9f7f196"],["/archives/page/6/index.html","bd777e2240acf93e60e846f40e408a4f"],["/archives/page/7/index.html","c772bd0140a908a3c1e161ffc29097b4"],["/archives/page/8/index.html","8ef70d6c4afbdea491bbdc3c1965d7cf"],["/archives/page/9/index.html","cc22bc22375bfb96f3ecc0eb6033f6d6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","196d96828a69351fa4f1532862203ddb"],["/categories/galgame/page/2/index.html","2798a6bd2176d8fc16234c9a2458b48f"],["/categories/公告/index.html","5655ad12354586bed589dcd3ab77d0a5"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","80af5a2d761f97e6aadf8bd7afe3da6e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","ec24cf91d0de70ae59ff874db45fe185"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","0e5823282afd8d95250db86c1af6e373"],["/page/10/index.html","9b96eae09618e13e74139fbb411f4b73"],["/page/2/index.html","244bf1e44a448d63653e75c615acbabe"],["/page/3/index.html","b4be0670fe5c4b8f8816d3a867c2e091"],["/page/4/index.html","a47c73d2259ec187fa0e071e72262f89"],["/page/5/index.html","3afaa347fa175b0eedb9d276336098ea"],["/page/6/index.html","1f5c37a566a5f9d7b9bdbf541173acd7"],["/page/7/index.html","f614d9151558c9283583dfbd539aa57a"],["/page/8/index.html","6a6ca9bbe226b86503faba44aa0a0908"],["/page/9/index.html","963b9c475f8ea977aee70d2d88b2c9d8"],["/posts/10c9dd98.html","9a3454a671f11b10375a403e93926527"],["/posts/1295b569.html","372b05bec4f90228e19b7743504820a2"],["/posts/1370342.html","b8189dcd36fb8ea4ac7ff4cf8fe01907"],["/posts/15ef14c2.html","2254e9df56076be8914b9b3fccc055a8"],["/posts/15f3959d.html","3da6a3f72d80a09421736a0085cbfa13"],["/posts/18ab785d.html","b4379a7f07adef874e62f4d4f5265be8"],["/posts/1d59b71f.html","260165cd32458c35ff09fd5dbbe28b28"],["/posts/20b3f3a4.html","ac39dd8232aa3f20d044069721ec8206"],["/posts/245f1c7d.html","369806fd1b703ffbc6f49eb86a82b7b4"],["/posts/252658f.html","7f965ade5208bf0dd68a71117bfdd8ee"],["/posts/28397adc.html","5af5ec142dd60b068b0bf20cecbdebac"],["/posts/2c0a6836.html","ea32482eff59680384b8d081ee77f7d7"],["/posts/2cf620f0.html","f83ae2e8e809482f392ae86797b1ab11"],["/posts/2e30fd6d.html","493b3a2900cca2fd622d65cb3c4e7698"],["/posts/34292736.html","5dd99b40a7e4ae14212371303942a8cb"],["/posts/3468cbe.html","70f6b00d216758dc45fdd04c3b0e7994"],["/posts/3e118dbf.html","36361292bd171e86baad180f5896d920"],["/posts/3f7d823a.html","001405ef76d373ad4d5d396e20057745"],["/posts/43945723.html","11a99413864ea2cd0e71b8951836f80c"],["/posts/44124a6b.html","f054a951b42634cf93c7ab244b890ce7"],["/posts/47abb61d.html","9cdb3850cf981cb06e8e6225dc34b01d"],["/posts/4b689be3.html","826ae67243edf41bc8eef75759f56659"],["/posts/4cf8423f.html","08bdd7d8692885d3b3cb41d9f4ee4ef5"],["/posts/4dcf85c.html","fe7b79d4efaf8ccfe0e32f8eeba11b62"],["/posts/500cd322.html","8bdff8ae7e049933abf23aa23992b617"],["/posts/51c9b1ff.html","9c1e370ddad935d6c074fc014b5e85b0"],["/posts/52b5b3c6.html","f94b22263f41b07d45e6287d1ad6cd55"],["/posts/5f6e0c59.html","ebb15a82d81d85b2b254320c8716428a"],["/posts/61a63a84.html","24b0d8a89384715035e837c07b55bd3d"],["/posts/6336a2f9.html","3e3ec8bc549ab2bd923680a6d969d0b6"],["/posts/6432d61a.html","64f18994d8b70826ba4c8a48e10080ec"],["/posts/6515f032.html","93286a28e12d60cdcc264742bd8b8ad1"],["/posts/6720ccdd.html","c6811ef221665039b67eddf336023035"],["/posts/6a4b5ac8.html","cb77bd2caef4c8a252453f6f7ad01d72"],["/posts/6aa4177c.html","3d87e2c0d3e74c63d14e04583729bde1"],["/posts/6b15f81f.html","a80f5bc7f8d8235d9cbe50d22bfa9857"],["/posts/71131d34.html","3407d005929d0dc066d9465223c4716f"],["/posts/78a8a8d3.html","470df19ac011b4808724bda36d54454f"],["/posts/7a5ef3d0.html","9196f792abfb82b6ca285335bc7d7514"],["/posts/7b41e1ac.html","c0ec5fa10b6ea058fc76b96acf93e8dc"],["/posts/7b51011d.html","f5351f7f3bfd99aa141e80a997d0cf22"],["/posts/7e3aa3e2.html","6900eb837abd419715f20c66400f983f"],["/posts/80fe2691.html","2287295f0622258add566ebaeecb85db"],["/posts/81ac52e9.html","ecfadd37498d652ce20bcc831379e9da"],["/posts/8486f6f9.html","9f84455f6f85693579ccbaf0fa946ce2"],["/posts/849b40f8.html","030292b9c3272e58ecdc9c740d03eded"],["/posts/85c51d68.html","e68795f88b4a6d9a772e37d292737508"],["/posts/886f8d3.html","40889e078a7b9685a2d7b7faac0d12ff"],["/posts/8a7cba10.html","2d025e39b8ccce3d5224ae14f69d8760"],["/posts/8ac11b41.html","2f7386a55f99e02e61e06ceebd51095f"],["/posts/8dd520d9.html","5cef2aa025bf380e791ff3a5eb616010"],["/posts/8f555654.html","f3116655a1e6b79275c73e98257eec4d"],["/posts/92a980c2.html","cacdcc6761fdd03b6ca0ca4a47b49830"],["/posts/92ce16.html","ec005ddffb930da9521c2c4b6e23912a"],["/posts/93e9943b.html","fdd4357e5278c59651de4c2e6fe41d46"],["/posts/94d3c794.html","1e9996267bc102c72c2fb177a0cb8a83"],["/posts/97f50eea.html","e78a3d7a97fe3309e7364f9640889f00"],["/posts/97fca8be.html","2c695e878be483944041397058a7eaf8"],["/posts/98662d05.html","d579ae7a9c17fb9f80b21a8056c561b7"],["/posts/9a2f6162.html","9b943ef8ce61c8ed48787a6c7b4f1c5d"],["/posts/9b22a48d.html","7d1f8091d0473ff40f7750cd83497d4a"],["/posts/9cb455b1.html","d9b320d3dd52f9789cf0a6e2cf59e1b0"],["/posts/9efd7701.html","0030f6a01f95b365676e7dd0c90d7a7e"],["/posts/9f61c1a0.html","c9d8d385ef297619b436d22132f3eb8f"],["/posts/a1de710.html","390708abf8286e5cea686dbd284ef536"],["/posts/af1807ef.html","7e8302a9076f82cdd0714356731d0d20"],["/posts/b497b647.html","e8a2e6cfd91de06016d532eca069fece"],["/posts/b4d464b0.html","d747480441d0e063cc317cc173781053"],["/posts/b5fb773f.html","b90545c0cd91f151d36bc589cbd7d4b0"],["/posts/b8d46b32.html","802d008786a478942e5129f6eae35b1f"],["/posts/c1b2c6c9.html","76045d72e3c94e26c21d336c24e0bfec"],["/posts/c2111cbf.html","c867b933dd770748c9db8468f9c2497e"],["/posts/c316c2e8.html","1a1a17a581703e90b48efd52dfe4e4d1"],["/posts/c43e60b5.html","e7e293588ab369a1497b4ea401ba9719"],["/posts/c497a412.html","1462bcc15da7835f42d52bc798b9c075"],["/posts/c5de299a.html","c95fae05aaa29ca3c2d3bf048a27ce4d"],["/posts/c70bba9c.html","68b2c8d12ae903bdf24b68f526e8b633"],["/posts/c797535e.html","f16ad09a21ea8d9dc28a204cd5bee63e"],["/posts/c7a62c79.html","8a915a4bcbed3776c9c367a434ae35c4"],["/posts/cae2c959.html","dd590ec4babad3e196c9a1f040362b52"],["/posts/cbebef2b.html","213e6b8d7fd4533f55ad66c3dbaa7ed9"],["/posts/ce25023e.html","4aa59e54ed30eadd5baef637e85599f2"],["/posts/d2fd4837.html","feee1b1edc873cb91cfdfc2ccd3a09dc"],["/posts/d3233cbb.html","7c9b65e2148cf340af21dc2e219718aa"],["/posts/d3a745a8.html","00ec865ffff8a41d990a1dd0ef7dbbd5"],["/posts/dc815d5.html","3cb851eafaf94e04951bd1f2b90ee5ef"],["/posts/e3ab6ad8.html","81f134fb32e155b4bc2fb9e87f1d7d9d"],["/posts/e5018da6.html","c6480035baa87ece0d21cd47500019cc"],["/posts/e5963272.html","59d2fc9bf5c13a0892f6261a668c1126"],["/posts/e624b065.html","5fc8ce333a0bf579319a7cf3331b24ae"],["/posts/e7c703bb.html","7eeed25aabba372f3a59fe31a4c5bf50"],["/posts/e8f14b6c.html","007c8cfb71a63813e53e7130beba21ef"],["/posts/e91abb63.html","9cde5b1b66d6bb5a1efc7847396c49ec"],["/posts/ea9a8808.html","77fb3f1686196444fdffb7e41b1e6238"],["/posts/ebaf2232.html","9a3dd4c51260a0c85cef4042dc8ca4a2"],["/posts/ee1ed673.html","fe52292b4a73928903bbfda60ebe30df"],["/posts/f0c3ed61.html","d83bbc81f88f2ae9e7b958c3b6aac784"],["/posts/f21e7f84.html","a8f7de1c16da71fe57dd95a6bbb586b3"],["/posts/f230b0fd.html","bb1a412ab1aec98a7d153e9e36a5e47b"],["/posts/fc04d0d4.html","3da51892b67617b9eb6de753504518f0"],["/sumire/index.html","e0c0cf2f2b2bb8258afe2d15542c2dfe"],["/sw-register.js","3632c053aa693b9a922f1751120d3d98"],["/tags/APPLE-project/index.html","b3c2a4301b3cd0158c1b3a1f568ee863"],["/tags/BELL-DA/index.html","9637ab2d8a1d08f6e78709c3cef90eb0"],["/tags/BL-Game/index.html","dd1e82ca445a79d9b9534a59a15264f2"],["/tags/CHUNSOFT/index.html","9c4c83bb46cc09ea3ea988c1a0c17cce"],["/tags/Cherry-Pie/index.html","f62214326a494782d1543bd85f47590b"],["/tags/Circle-Mebius/index.html","fcfcf1574e721631e3cee8aec1e5e6d5"],["/tags/CresCENT-BLANK/index.html","6d2085d8b8e4c9fdcbddd981f9be0aa3"],["/tags/Dopamine-Software/index.html","9c78cfd12042a360b21edb71d7847f2a"],["/tags/Dos/index.html","44b0ab454d3794860ae2e33adf88c82e"],["/tags/Earth-Well/index.html","2549dca9fc05ddf7b80b383f5298296d"],["/tags/Kanon/index.html","fc6430d8a1290bf7e7d5beb4846fe671"],["/tags/MANATSU-8/index.html","e9439c4b5e9152d0adedea42706afea9"],["/tags/MIO/index.html","d2b7886093894008a0521737a880526b"],["/tags/Nmyu/index.html","66335055fb55e31394464ad2bf946b92"],["/tags/O-S-I/index.html","9ae27e8eca65513a2438fc8c23922d0b"],["/tags/Omegaの視界/index.html","b0e0718d2bae52d813abe88734c3b039"],["/tags/PC88/index.html","28567d19e5dea390780f0f930827e01a"],["/tags/PC98/index.html","82c78bac82965d256607feef1f013f35"],["/tags/Perpetual-Room/index.html","38e0e70bf7bfb0070977b99179b9d176"],["/tags/Pleiades-Company/index.html","ac499ed30a2f657a5d45d762bc0f4eaa"],["/tags/Reverv/index.html","d9272e92c2e45400f4d45f0ae91275d2"],["/tags/Saihate-SOFT/index.html","3a64b6d176b36cc35e7e587a9b865325"],["/tags/StrayMoon/index.html","2ed8052416f522e339e5079f25ea7ed7"],["/tags/ToHeart/index.html","8964a56992b1b0a1be621fef33fd4dde"],["/tags/Traumend/index.html","40fd5ec7eb3de53e2a19d72bd9121f60"],["/tags/Witch/index.html","1baaab78913757c6cc7200cc7c761c08"],["/tags/adonis-project/index.html","a2a9ad51310dbe89171ff3c63e900a15"],["/tags/flash/index.html","11f3d7f11ca775ff3ea55a057c2abb0b"],["/tags/galgame/index.html","4fbdc998866390e7c3274dbcae109edf"],["/tags/galgame/page/2/index.html","5c63904e7af149eb6d3479bce23e2b6e"],["/tags/gal资源/index.html","9763b9c125e7795f366e2ca400c52a01"],["/tags/gal资源/page/2/index.html","441bb52924f4828a7d9f9cee4a046f4a"],["/tags/gal资源/page/3/index.html","e11571d1113c30e35ead6382a7de5d19"],["/tags/index.html","4d2e12ddb37f4f0e4564f8021fab0658"],["/tags/rkr/index.html","e494265a6da032efe666c377fa434696"],["/tags/team-eye-mask/index.html","a16b6713785d07357430162040ad277c"],["/tags/いつものところ/index.html","ed8abe9b8949e13f673d13f50f6b905f"],["/tags/きつねみみ饅頭/index.html","57efa5be908e1646e992d0b5fffc5edf"],["/tags/ねこねこソフト/index.html","f833eb79bc50a294fb6fe19eb36f8c26"],["/tags/ねこバナナ/index.html","95c6381794007aa3cf2df37e02e44abc"],["/tags/はちみつくまさん/index.html","d61befc2fc01e4eea03894984dc468b2"],["/tags/ろりちせ/index.html","1ae4768ed62f0238c03eceef5ed4e595"],["/tags/アイル【チーム・TATU】/index.html","8bb142c423cdc04395cc1680e58d324d"],["/tags/アークシステムワークス/index.html","5ed1b3cc42e3a894116b740360819553"],["/tags/ブロッコリー/index.html","1e46e057fd13e6c22d0b32f6d1c4f1b0"],["/tags/乙女/index.html","4c22813a64aeee6da474e14ff4458384"],["/tags/停产/index.html","6f3f88fe6bc1306da44997c0fdc2aca9"],["/tags/公告/index.html","15b14cb62360b5a1dc8f36727b226612"],["/tags/同人/index.html","977a38485a1c8457a6b63ea26b39c5a7"],["/tags/堀井雄二/index.html","f2d4e1db8f6bd1c243d310de17d8342b"],["/tags/外海なおき/index.html","1e0c30d65b809da14b5c02748c87d13d"],["/tags/機械式少女/index.html","289a86529dbf54922984add77b74ece6"],["/tags/水仙/index.html","260234f6af1ecbe8826f7e2c0dd94ce8"],["/tags/汉化/index.html","f8c8bfb42dad101f6a8629240b8720cf"],["/tags/片冈智/index.html","733b124ccbfa8e954f03ce7ebf3926ed"],["/tags/片岡とも/index.html","ae9b27800eb98ef193561b74fe407853"],["/tags/牙の刻印制作委員会/index.html","14da692b504c2c366a35f1e307486947"],["/tags/牛カルビ定食-FLAT/index.html","46d528f7920b8d11159cd77b9ca9a61d"],["/tags/牧尾屋/index.html","3589a32b997341de90dd9c0cf63ab500"],["/tags/猫猫社/index.html","e2a28db413afeca1058836398714a218"],["/tags/王宮魔法劇団/index.html","3aa8073b5e063d23dd1e04a7155bd714"],["/tags/画集/index.html","de91856cd6c65ee6d9718978818f0b40"],["/tags/索引/index.html","1e498028fbf025d549fdc9e23a2176c1"],["/tags/郷愁花屋/index.html","d0b703d3f5b4a3bf9af9c66577139c5c"],["/tags/閂夜明/index.html","f52c52a99cd4d3c11f6f194278a080a5"],["/tags/音乐美/index.html","3a9c7f1288a1cb462390fefe1a42c0d5"],["/tags/黒†救/index.html","6dfe9afb52133785177f9be8464dd872"]];
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
