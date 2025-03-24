/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","eef77fd9fe09db40a1b63c350b4a1591"],["/archives/2024/04/index.html","5a2309f0491dbef5e46e15fd3f99ac26"],["/archives/2024/index.html","c3eabe2772b38486053e4045c2c0b175"],["/archives/2025/02/index.html","4c81b9b677cb3d60b6a44f226be1beca"],["/archives/2025/02/page/2/index.html","569702302dd50ae1b824611c92f4a237"],["/archives/2025/02/page/3/index.html","e7926f3dd6213a14afc97dbacacb6085"],["/archives/2025/02/page/4/index.html","cc7374dedbff92042a61d5bf94a30045"],["/archives/2025/02/page/5/index.html","ec11944900f1b9bf7bf80fa88f717cd8"],["/archives/2025/03/index.html","eb30bdf867d0cbc94007b29d6b1c3a80"],["/archives/2025/03/page/2/index.html","a9ca44ea8f522cb8183f1617c615f73f"],["/archives/2025/03/page/3/index.html","6990e4aef75927947f38ad3923397442"],["/archives/2025/03/page/4/index.html","e4cc7ea99be4f2e90c410877a0a54f87"],["/archives/2025/03/page/5/index.html","39802d5be94da6c01047de40f44794c8"],["/archives/2025/index.html","9d268d051e4d7d0aa5eb2994a1380e77"],["/archives/2025/page/10/index.html","ef40d62f42681ac9564757f86160c4ab"],["/archives/2025/page/2/index.html","754797a6dce27637277ea07d86879896"],["/archives/2025/page/3/index.html","edb9d7dfa886d63b5bd808af50afe8d7"],["/archives/2025/page/4/index.html","f71ce3e94c0dd5fa937fe5fa4fedd863"],["/archives/2025/page/5/index.html","fd95c09339c9865515a235110fb0de30"],["/archives/2025/page/6/index.html","eec4ff61d1d60c62aabae94212544323"],["/archives/2025/page/7/index.html","7ed19643f05bee61cabcd3375ca2763d"],["/archives/2025/page/8/index.html","edfa26af55ff7596e11a0229003a9b2f"],["/archives/2025/page/9/index.html","05d7b1a1fb03e07fa4472aeb92e7ac0a"],["/archives/2026/02/index.html","33ce97a6c6caf2fd3e86466e6f19c52f"],["/archives/2026/index.html","402319d059103ec3d293581da9473685"],["/archives/2925/01/index.html","f7aea2c3707117dc9df3f4271580b43e"],["/archives/2925/index.html","9185d967ca04ac3f71dc9a42564ea319"],["/archives/index.html","d1cd2b0ca4d419a68e32b4504a26a945"],["/archives/page/10/index.html","d9931ae7b53a074e18881a4d83753c4b"],["/archives/page/2/index.html","90e9abbc0ff1239cf82e9b0026f4944b"],["/archives/page/3/index.html","3c846cbc14ef137a4c937673737642e2"],["/archives/page/4/index.html","d459f686f5f2ee3e4df3d401b23518bd"],["/archives/page/5/index.html","2aa4a93d6e00788611a6b698ae925e7f"],["/archives/page/6/index.html","6713c8bb9925ecf95a95d90f7314eca8"],["/archives/page/7/index.html","3058ff0b08b46030ba4bfa820edd6aba"],["/archives/page/8/index.html","ef8564e14ec7e45e90dac424b857993c"],["/archives/page/9/index.html","bb2b8c6a20225841c8dc9867cef0ad56"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","83964a8307b0c975fb943136be6dadea"],["/categories/galgame/page/2/index.html","8a2a02b2da8f016cccd173c236817ae7"],["/categories/公告/index.html","7783b10a4313b8fbb79769843fce00bd"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","88c7ec97765c847b7f0c2e6de217c8d1"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","df8c04822c2598aba312af126154e431"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","14eed0a8f0aff357c126c8ab81311bce"],["/page/10/index.html","484f2d3ea746fa0d5dc5f7756efb833d"],["/page/2/index.html","4cbfe78e63ddefd4246166b5fe8a25eb"],["/page/3/index.html","213c2906abc440d15fe866a25c224c1e"],["/page/4/index.html","61396c0d7f64ec0268a58703d58f7c9e"],["/page/5/index.html","07d2fd7f6a34b4303d22d5b87ac1c31d"],["/page/6/index.html","075f1b781e63177033fe4365751f3baa"],["/page/7/index.html","b2cfc7d332d32b0f7c41e9239170800c"],["/page/8/index.html","84de40bacfeb12ef998207b4b74c306b"],["/page/9/index.html","3e2fd777321cf23b499f2ed684aaed91"],["/posts/10c9dd98.html","20541d13b2430991897117d74ed8991d"],["/posts/1295b569.html","94c97740130df1a29250311271eb1c9e"],["/posts/1370342.html","5fc3847ac556f24d879e6bc644dd8097"],["/posts/15ef14c2.html","a8d3f0fe5fa327c513e41d8a4284458c"],["/posts/15f3959d.html","24a0ed7b8518f84e8038bf28083917ba"],["/posts/18ab785d.html","6cea18da3ff87f2f67b9505bf021721a"],["/posts/1d59b71f.html","a9dfea5936e0567a975509d368ceea0b"],["/posts/20b3f3a4.html","4354c265b1e88d8ee734ee03052eac52"],["/posts/245f1c7d.html","c76b409f2fe255304e82b62f9ffe8803"],["/posts/252658f.html","447ab721a2417770c12b5d18939e0ca0"],["/posts/28397adc.html","6ca26e77466014cd79e7a49c5ca4106a"],["/posts/2c0a6836.html","8c93307e2f13a1b6a2494514f00d224d"],["/posts/2cf620f0.html","f2b6a1db2e677ef09b8f1bd0a290bdb8"],["/posts/2e30fd6d.html","d9d94d781bb841bf4fc752f1a30e5bc4"],["/posts/34292736.html","0bedc25fea2f58731848f6a0c223201b"],["/posts/3468cbe.html","f1d76c5d3a90d4df7714ad6bfc2476d1"],["/posts/3e118dbf.html","1e25825cac1cf5523e6c3938f92251ee"],["/posts/3f7d823a.html","56044dbdebe7a6c73030646cad30cf01"],["/posts/43945723.html","09f12934135ff4d45a6122c63cae7a82"],["/posts/44124a6b.html","b40d493cbb2d41df88a9667b52ca0f7b"],["/posts/47abb61d.html","99ea137bd807c0a1e99f76c4bb06f1e3"],["/posts/4b689be3.html","96d1e4c7774a7fcecd4ede7352a5b72e"],["/posts/4cf8423f.html","6c75214249e15fc3494b2e76f617e2f0"],["/posts/4dcf85c.html","116494ff2e9d2b638f720f5d1e7aea06"],["/posts/500cd322.html","274c4e0ddb4880dfc932f17fb0573126"],["/posts/51c9b1ff.html","281f41b7b1e023796ab21f8c9af13b72"],["/posts/52b5b3c6.html","9858d342acece6425c2f27ad92fa1a03"],["/posts/5f6e0c59.html","81dd969291785aeaa8cc77c771313fc8"],["/posts/6336a2f9.html","ceceed63b8cdb70a98b4b7354568dac8"],["/posts/6432d61a.html","d6c72d351a577f5fd810609ac8c62cb9"],["/posts/6515f032.html","6f8d9332329612ad194c0a6991b2ac97"],["/posts/6720ccdd.html","61bbeb7c68106065accf3648bfeb34bb"],["/posts/6a4b5ac8.html","ed97a5c08d56dc52be16a9a93cb5cfb1"],["/posts/6aa4177c.html","a09f5737aa24cc26e8785ece06d2f7dc"],["/posts/6b15f81f.html","cde6385046d9385ae41fa9da0f18fde0"],["/posts/71131d34.html","3e5b86f476fa96290695f4d2982dfdfc"],["/posts/78a8a8d3.html","20c7f008b9f38bb11363abe6317c54ef"],["/posts/7a5ef3d0.html","f9cbd82576aa098e0ef622106547a923"],["/posts/7b41e1ac.html","bf091e9dbb9be97cf9e8090ebb6f5720"],["/posts/7b51011d.html","432ccaec4951b3da9d4d814dcf6e206c"],["/posts/7e3aa3e2.html","31b86a165916395eb97c6d166a0a2207"],["/posts/80fe2691.html","ec10220a10c1de8df78c960edc9474a1"],["/posts/81ac52e9.html","a7a9d8f60a4abd0964bb06acce1a83c5"],["/posts/8486f6f9.html","03dc5818c338bf3b95eb11b95d8f2699"],["/posts/849b40f8.html","ce738d1cae3f12b97efa5c5991c925de"],["/posts/85c51d68.html","bb03ab4b98ff348a0a2ebf625f43c8a8"],["/posts/886f8d3.html","f2c0f174868218140f53a047dc68f9c1"],["/posts/8a7cba10.html","45b393fb616cdb798b205e87515e598a"],["/posts/8ac11b41.html","43abe35af73007315ea27cfd102fd0eb"],["/posts/8dd520d9.html","5f4fc3de91ef117d1b7006f5f4c91a51"],["/posts/8f555654.html","99e578e0323aac651886e1417e28886d"],["/posts/92a980c2.html","712748eef3e2c58c11ff3599e98d3f25"],["/posts/92ce16.html","9ba16c99381634c1f95e039705e9b9f1"],["/posts/93e9943b.html","90d8371d1bbc77a632f88d705d6ac31c"],["/posts/94d3c794.html","5633167ba87a511f41e86fbe972edf38"],["/posts/97f50eea.html","ad0aa44ee7a7ec007b3b8bc4d7222e2a"],["/posts/97fca8be.html","eed441aec45bbfe9322073cb39577b58"],["/posts/98662d05.html","07a6748007ed3d32b76c41232233c545"],["/posts/9a2f6162.html","29fb55db3889b2c0bb79db0118115c0c"],["/posts/9b22a48d.html","8cbce4412b8ea588dc7722bef0b06a28"],["/posts/9cb455b1.html","f8f35339b680036cd2449905f4081b3e"],["/posts/9efd7701.html","3258d3f404919ff90008479e722f77a8"],["/posts/9f61c1a0.html","e7d7b3cd63cfe2b11dd72989ec080268"],["/posts/a1de710.html","75901123d5677f289f756828ad70b185"],["/posts/b497b647.html","496aaf45d2d67de052fa4cc5d020afc3"],["/posts/b4d464b0.html","b5d62f14b3dc811e9c1ea4e8251a350a"],["/posts/b5fb773f.html","9a996053d194393ed577c3c81e160653"],["/posts/b8d46b32.html","acba62426914b45c96efdc411be60cdc"],["/posts/c1b2c6c9.html","56e41017ca7f4d4fa9a15d865df487ba"],["/posts/c2111cbf.html","331e5893907dda6c8e78eab9c5073397"],["/posts/c316c2e8.html","8801df30720d83c3997577bcd641d6fd"],["/posts/c43e60b5.html","28eee93d97de9375b682947e536085a8"],["/posts/c497a412.html","e74c71b03a163f3371b0921124f072cb"],["/posts/c5de299a.html","8e140e4664fcbb7c74cd1c80dccb7d7c"],["/posts/c70bba9c.html","f94da99eb06c3cf97cea950bea92088d"],["/posts/cae2c959.html","3b1d3928f9db65c2860ea737e1f82152"],["/posts/cbebef2b.html","0e8a2c5199927aa26178781ed9318d35"],["/posts/ce25023e.html","e01574628690ed9b40276ba51d28b187"],["/posts/d2fd4837.html","efe1de5ce6b3d34e2b5dee23751a5947"],["/posts/d3233cbb.html","db64ab967d91ad21595fb737625b800d"],["/posts/d3a745a8.html","dedd027b5a6389d46a0e3ad7cad35f84"],["/posts/dc815d5.html","4b99722dccdf9628b49592db5845226e"],["/posts/e3ab6ad8.html","6e09a27db031a968324235c570856c9c"],["/posts/e5018da6.html","5d17688bc2833597d5c7a58911a5df9c"],["/posts/e5963272.html","79caf4398a6a3170b9c5e74f44b78283"],["/posts/e624b065.html","ea20bb076e9059a52431fad7bdea2f91"],["/posts/e8f14b6c.html","a614f97f0c771eca202316804d00a777"],["/posts/e91abb63.html","2aae179f150c2fe4f5e7bad738154e3c"],["/posts/ea9a8808.html","3795914686cdd9056534a98bfd0ee7cd"],["/posts/ebaf2232.html","baf9aad98a5f6c3960693cb899d2ed80"],["/posts/ee1ed673.html","bc494e3f7142a72270426125f3d5f976"],["/posts/f0c3ed61.html","51aee6bb167967230562e2d74166b975"],["/posts/f21e7f84.html","cd3cb6e5814bd711e2b705b17aeba4de"],["/posts/f230b0fd.html","009e37906f704941544322ffb2408737"],["/posts/fc04d0d4.html","8e333061c5459b679c5b618bfe68ebec"],["/sumire/index.html","beda210190f78f47da9fa9e2308503b3"],["/sw-register.js","46b653d62b8bc76b00650a480c3da854"],["/tags/APPLE-project/index.html","ee88982055b461fbe0616b9cc219d5a6"],["/tags/BELL-DA/index.html","253983ecd5e38c432b8bc75e1d24ac19"],["/tags/BL-Game/index.html","30a26b08574d636ccfbc471de68f965f"],["/tags/CHUNSOFT/index.html","f46f04830d9ca2fa1dd831c15959a77b"],["/tags/Cherry-Pie/index.html","96a26255805a114648ac802499e87c95"],["/tags/Circle-Mebius/index.html","3d9e19a35fab2f2b67e37c2a5e036304"],["/tags/CresCENT-BLANK/index.html","4180608a83949bf12da9af5603255d18"],["/tags/Dopamine-Software/index.html","a3879e6a022f1264e3832bbedc13b2ec"],["/tags/Dos/index.html","475b8d1f458e131b2cbe9ffbcf06f70e"],["/tags/Earth-Well/index.html","6e4f19d67851c95cfd41a4b696771dd8"],["/tags/Kanon/index.html","25f930de5734d74ee011457874e6eabb"],["/tags/MANATSU-8/index.html","9e6418aa830e5ea2a877bb343d251b33"],["/tags/O-S-I/index.html","20a349709e28ffbd856f73dc0d842c4f"],["/tags/Omegaの視界/index.html","a9cd41b55efb014a8fd093030c7f8ffa"],["/tags/PC88/index.html","8b359ef09be95e831aac4f1eac352dce"],["/tags/PC98/index.html","b4e70847de30dfbf96b5e78253191c58"],["/tags/Perpetual-Room/index.html","9193411d610b5ae4339c627a4b8913cd"],["/tags/Pleiades-Company/index.html","291b21b82ec308208eaf249e49f21f27"],["/tags/Reverv/index.html","749519594bbc9102c08b668f2264cdfe"],["/tags/Saihate-SOFT/index.html","27bf92a5085c93c1d81761cd0c300fde"],["/tags/StrayMoon/index.html","50dcd348e47f091da279774e4bb012b7"],["/tags/ToHeart/index.html","9d739431dea6ae521e26f59cb53afaf3"],["/tags/Traumend/index.html","c7faabf8c8a46337cd2fc12b55fbcc95"],["/tags/Witch/index.html","516220c300a4af5de40b3e89885bb9e0"],["/tags/adonis-project/index.html","36f9218db77d468ce2d75e0e85574831"],["/tags/flash/index.html","b78d746220d7ca2e1f43276c1761c2d9"],["/tags/galgame/index.html","aab4a08e12895723cfb4f2438c0c1848"],["/tags/galgame/page/2/index.html","2f579efa3e1352d76b65198741104782"],["/tags/gal资源/index.html","690504327c56637be6822a0bd8f3bbe5"],["/tags/gal资源/page/2/index.html","a20b289a14906c9b46f816a1ddbea1ab"],["/tags/gal资源/page/3/index.html","c69c57fcdb50770149474ba9d215e3ca"],["/tags/index.html","e0b46bd9f614dd59ffc6ed6e4bcfee37"],["/tags/rkr/index.html","afd12b815375e618ab1425224a8ff01a"],["/tags/team-eye-mask/index.html","c2e67c2a5a696c6f67d297068fb37e3a"],["/tags/いつものところ/index.html","0011140df52adb8c7cab31dab595c06e"],["/tags/きつねみみ饅頭/index.html","728d6ad3262dd29468d0fa13bce24213"],["/tags/ねこねこソフト/index.html","49bdd66e66f56364202e08c1dd6d8e07"],["/tags/ねこバナナ/index.html","66a0684d1b9f8dd0eb0b017ee36cef39"],["/tags/はちみつくまさん/index.html","41509787b7d6c7f0ac5dff95754f061d"],["/tags/ろりちせ/index.html","f33bcd11bbd02db73d2a8cb6c2f1aa11"],["/tags/アイル【チーム・TATU】/index.html","894103d025053588d4b6b6f149741503"],["/tags/ブロッコリー/index.html","dd3e41639b7ecc1a3d7447d221626746"],["/tags/停产/index.html","d2e593f7c74a65eb0475fd18f2b65a66"],["/tags/公告/index.html","a52cb369ce8ca793de47f6cbe8a7af36"],["/tags/同人/index.html","4f9a96d4f5a03e2246d762000e7e5c8d"],["/tags/堀井雄二/index.html","840fe571229b73ffa282ea1f993d87b9"],["/tags/外海なおき/index.html","62f577a14680e9de6549fffd310afb10"],["/tags/機械式少女/index.html","d5fcf196dda81be0df34913e17cc4be0"],["/tags/水仙/index.html","745cca063482c5dde4c368237b1007fa"],["/tags/片冈智/index.html","22aad74e58ec4af696559a4d0c87ade9"],["/tags/片岡とも/index.html","95f28d38c06ca645d9313e69396cc636"],["/tags/牙の刻印制作委員会/index.html","b7051c0503325846508b193d8d338fde"],["/tags/牛カルビ定食-FLAT/index.html","e29cd340d2a093216600bb41f7dfc142"],["/tags/牧尾屋/index.html","d558cb5e7923bf306bcbc1a22c5907c3"],["/tags/猫猫社/index.html","ea0edbe5fd6614e6467cb8e24f4530a2"],["/tags/王宮魔法劇団/index.html","12d288ca3e3c9902dafd934586f25515"],["/tags/画集/index.html","bdccf60bcbcd8c28d33ee8da802649f5"],["/tags/索引/index.html","d7f2a4cea7aa8c1c7f1e275aa1c64f6c"],["/tags/閂夜明/index.html","5f3b70206971305e1f5d00eae2688c11"],["/tags/音乐美/index.html","c33416a93f22987a274b1b50d61310ef"],["/tags/黒†救/index.html","77783b233734f28281afcb07ccefeed9"]];
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
