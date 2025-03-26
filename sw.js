/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","558d8f10b90dce01dcee4202b985795a"],["/archives/2024/04/index.html","199f956c534cc3680862ee1d0d72664e"],["/archives/2024/index.html","da8c3c08ed22b05820cf2deb0dbf9b66"],["/archives/2025/02/index.html","fb0241aeb9354c3124d73ab5fddf8b46"],["/archives/2025/02/page/2/index.html","da2f339d149174b28d0455b57c2233e3"],["/archives/2025/02/page/3/index.html","9b8082237448b0021c053b4a84a8e256"],["/archives/2025/02/page/4/index.html","e0afe93ad7152ee177d03efc77992bb7"],["/archives/2025/02/page/5/index.html","ed28efece5e5498580f0eeaa187e3726"],["/archives/2025/03/index.html","19e5e5be4ff2df014f414de817e636f5"],["/archives/2025/03/page/2/index.html","fb24c9df2ec4001724613013d83194a6"],["/archives/2025/03/page/3/index.html","1debf0b914018b9c2e179162c07ab3df"],["/archives/2025/03/page/4/index.html","bf51f6ff6e45fec1d90e5f9b8c3bba8f"],["/archives/2025/03/page/5/index.html","dd996f009f44e4eeac5e6b49f41a6c40"],["/archives/2025/index.html","86815b7c9203d630f7b839948036894d"],["/archives/2025/page/10/index.html","9d1ac8b695e4242906535a73b5bd31b2"],["/archives/2025/page/2/index.html","4b569c094e8f04591f0d86e5c9d98115"],["/archives/2025/page/3/index.html","cc7c0a4b34abc7daff04522372784059"],["/archives/2025/page/4/index.html","0880326c0799c6fcbe898d484b69ed02"],["/archives/2025/page/5/index.html","a04f31420583bf2945e6cfc796c7c620"],["/archives/2025/page/6/index.html","6044fc7c7b525004a32d24cdb8262004"],["/archives/2025/page/7/index.html","07ceb9b109cfc52114e4204d6acac901"],["/archives/2025/page/8/index.html","87705cc10c1cedc835d4d24fa97fcfc4"],["/archives/2025/page/9/index.html","772a3c55e583ad0d6f64add1ff3241d0"],["/archives/2026/02/index.html","3b6c8cb15d5e1901565928719a99526d"],["/archives/2026/index.html","434fb45f9b4e2700858510fc25283980"],["/archives/2925/01/index.html","b34ff38e77ce527a33dece230ed58151"],["/archives/2925/index.html","7290903e1dd2060f4e7e7fd5d9967dcd"],["/archives/index.html","111cf956d89154802cad76d81e28becc"],["/archives/page/10/index.html","b4e69872079affe9704915c3a8a04099"],["/archives/page/2/index.html","56496e36c3b8c9b80f91004734eeebd0"],["/archives/page/3/index.html","60feac02a1205796cb994380d8f268fd"],["/archives/page/4/index.html","ba9c656fa32d0b905703621eba68e229"],["/archives/page/5/index.html","c2514d060a04da82aa0c21c0b11556a5"],["/archives/page/6/index.html","68d239cc5346439c5c10c72f3d90fc55"],["/archives/page/7/index.html","d8aedc17167796f1bc4fecd3c52d5d9f"],["/archives/page/8/index.html","c8cfe83bee34114d51cefca270102152"],["/archives/page/9/index.html","459fa8cc3eb4d068ff405b548d8068b3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","6ed507a3dc3f0d301ad0d1e66a4cd299"],["/categories/galgame/page/2/index.html","8af690c3ebece1e1f3981be29a65aa8d"],["/categories/公告/index.html","2d6e75a62ec6f4c384f1d44bfd66e818"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","a1fed671bd9246e3765af4d90fd60a36"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","adc46968703bc388c60e36feaaef8d3c"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","878c8d226c4f5aaebbfad334241a5348"],["/page/10/index.html","14ffd36c36b2e89c6333504061041698"],["/page/2/index.html","7b7d022970e9f424363e1aee0dbc66b7"],["/page/3/index.html","67a0226a732611d143eeab6982a474fa"],["/page/4/index.html","ae925068d4586b162efb696b974f178b"],["/page/5/index.html","eaf6b041007dcaa6db92a6ba5ed01ff7"],["/page/6/index.html","b75b53d0bdcb27751f63b86cbfd29e01"],["/page/7/index.html","c1d25ecc2705e307aa31f8c53c461872"],["/page/8/index.html","797ad1c03ea75d6bd5e766a305ebd1f9"],["/page/9/index.html","b84c90d4fc036a13d5b60cbe65e97bfc"],["/posts/10c9dd98.html","20541d13b2430991897117d74ed8991d"],["/posts/1295b569.html","94c97740130df1a29250311271eb1c9e"],["/posts/1370342.html","5fc3847ac556f24d879e6bc644dd8097"],["/posts/15ef14c2.html","a8d3f0fe5fa327c513e41d8a4284458c"],["/posts/15f3959d.html","24a0ed7b8518f84e8038bf28083917ba"],["/posts/18ab785d.html","6cea18da3ff87f2f67b9505bf021721a"],["/posts/1d59b71f.html","a9dfea5936e0567a975509d368ceea0b"],["/posts/20b3f3a4.html","4354c265b1e88d8ee734ee03052eac52"],["/posts/245f1c7d.html","c76b409f2fe255304e82b62f9ffe8803"],["/posts/252658f.html","447ab721a2417770c12b5d18939e0ca0"],["/posts/28397adc.html","769ea567719b8df889de13fc59c73b98"],["/posts/2c0a6836.html","8c93307e2f13a1b6a2494514f00d224d"],["/posts/2cf620f0.html","f2b6a1db2e677ef09b8f1bd0a290bdb8"],["/posts/2e30fd6d.html","d9d94d781bb841bf4fc752f1a30e5bc4"],["/posts/34292736.html","0bedc25fea2f58731848f6a0c223201b"],["/posts/3468cbe.html","f1d76c5d3a90d4df7714ad6bfc2476d1"],["/posts/3e118dbf.html","1e25825cac1cf5523e6c3938f92251ee"],["/posts/3f7d823a.html","56044dbdebe7a6c73030646cad30cf01"],["/posts/43945723.html","09f12934135ff4d45a6122c63cae7a82"],["/posts/44124a6b.html","b40d493cbb2d41df88a9667b52ca0f7b"],["/posts/47abb61d.html","99ea137bd807c0a1e99f76c4bb06f1e3"],["/posts/4b689be3.html","96d1e4c7774a7fcecd4ede7352a5b72e"],["/posts/4cf8423f.html","6c75214249e15fc3494b2e76f617e2f0"],["/posts/4dcf85c.html","116494ff2e9d2b638f720f5d1e7aea06"],["/posts/500cd322.html","274c4e0ddb4880dfc932f17fb0573126"],["/posts/51c9b1ff.html","281f41b7b1e023796ab21f8c9af13b72"],["/posts/52b5b3c6.html","4b8e7d559f27b7c326c9fcb543e12d0a"],["/posts/5f6e0c59.html","81dd969291785aeaa8cc77c771313fc8"],["/posts/6336a2f9.html","2728006f59c81a0f79b88e3328af6e7b"],["/posts/6432d61a.html","d6c72d351a577f5fd810609ac8c62cb9"],["/posts/6515f032.html","6f8d9332329612ad194c0a6991b2ac97"],["/posts/6720ccdd.html","61bbeb7c68106065accf3648bfeb34bb"],["/posts/6a4b5ac8.html","ed97a5c08d56dc52be16a9a93cb5cfb1"],["/posts/6aa4177c.html","a09f5737aa24cc26e8785ece06d2f7dc"],["/posts/6b15f81f.html","cde6385046d9385ae41fa9da0f18fde0"],["/posts/71131d34.html","3e5b86f476fa96290695f4d2982dfdfc"],["/posts/78a8a8d3.html","20c7f008b9f38bb11363abe6317c54ef"],["/posts/7a5ef3d0.html","f9cbd82576aa098e0ef622106547a923"],["/posts/7b41e1ac.html","bf091e9dbb9be97cf9e8090ebb6f5720"],["/posts/7b51011d.html","432ccaec4951b3da9d4d814dcf6e206c"],["/posts/7e3aa3e2.html","31b86a165916395eb97c6d166a0a2207"],["/posts/80fe2691.html","ec10220a10c1de8df78c960edc9474a1"],["/posts/81ac52e9.html","f9ad406b305bf76bc7c31ce28c098333"],["/posts/8486f6f9.html","03dc5818c338bf3b95eb11b95d8f2699"],["/posts/849b40f8.html","ce738d1cae3f12b97efa5c5991c925de"],["/posts/85c51d68.html","20c7af0b0590bac88901b63e3e3754ac"],["/posts/886f8d3.html","f2c0f174868218140f53a047dc68f9c1"],["/posts/8a7cba10.html","45b393fb616cdb798b205e87515e598a"],["/posts/8ac11b41.html","43abe35af73007315ea27cfd102fd0eb"],["/posts/8dd520d9.html","5f4fc3de91ef117d1b7006f5f4c91a51"],["/posts/8f555654.html","99e578e0323aac651886e1417e28886d"],["/posts/92a980c2.html","712748eef3e2c58c11ff3599e98d3f25"],["/posts/92ce16.html","9ba16c99381634c1f95e039705e9b9f1"],["/posts/93e9943b.html","b2dd42581ef4d698fcf758017a839edb"],["/posts/94d3c794.html","5633167ba87a511f41e86fbe972edf38"],["/posts/97f50eea.html","ad0aa44ee7a7ec007b3b8bc4d7222e2a"],["/posts/97fca8be.html","eed441aec45bbfe9322073cb39577b58"],["/posts/98662d05.html","07a6748007ed3d32b76c41232233c545"],["/posts/9a2f6162.html","29fb55db3889b2c0bb79db0118115c0c"],["/posts/9b22a48d.html","8cbce4412b8ea588dc7722bef0b06a28"],["/posts/9cb455b1.html","f8f35339b680036cd2449905f4081b3e"],["/posts/9efd7701.html","3258d3f404919ff90008479e722f77a8"],["/posts/9f61c1a0.html","e7d7b3cd63cfe2b11dd72989ec080268"],["/posts/a1de710.html","75901123d5677f289f756828ad70b185"],["/posts/b497b647.html","496aaf45d2d67de052fa4cc5d020afc3"],["/posts/b4d464b0.html","b5d62f14b3dc811e9c1ea4e8251a350a"],["/posts/b5fb773f.html","9a996053d194393ed577c3c81e160653"],["/posts/b8d46b32.html","acba62426914b45c96efdc411be60cdc"],["/posts/c1b2c6c9.html","56e41017ca7f4d4fa9a15d865df487ba"],["/posts/c2111cbf.html","331e5893907dda6c8e78eab9c5073397"],["/posts/c316c2e8.html","8801df30720d83c3997577bcd641d6fd"],["/posts/c43e60b5.html","28eee93d97de9375b682947e536085a8"],["/posts/c497a412.html","e74c71b03a163f3371b0921124f072cb"],["/posts/c5de299a.html","8e140e4664fcbb7c74cd1c80dccb7d7c"],["/posts/c70bba9c.html","f94da99eb06c3cf97cea950bea92088d"],["/posts/cae2c959.html","b2cf61d1aa270363d0da3e6e79c57329"],["/posts/cbebef2b.html","0e8a2c5199927aa26178781ed9318d35"],["/posts/ce25023e.html","e01574628690ed9b40276ba51d28b187"],["/posts/d2fd4837.html","efe1de5ce6b3d34e2b5dee23751a5947"],["/posts/d3233cbb.html","db64ab967d91ad21595fb737625b800d"],["/posts/d3a745a8.html","dedd027b5a6389d46a0e3ad7cad35f84"],["/posts/dc815d5.html","e8c573afc243e1d9586daec3a331492e"],["/posts/e3ab6ad8.html","6e09a27db031a968324235c570856c9c"],["/posts/e5018da6.html","5d17688bc2833597d5c7a58911a5df9c"],["/posts/e5963272.html","79caf4398a6a3170b9c5e74f44b78283"],["/posts/e624b065.html","ea20bb076e9059a52431fad7bdea2f91"],["/posts/e8f14b6c.html","a614f97f0c771eca202316804d00a777"],["/posts/e91abb63.html","2aae179f150c2fe4f5e7bad738154e3c"],["/posts/ea9a8808.html","3795914686cdd9056534a98bfd0ee7cd"],["/posts/ebaf2232.html","baf9aad98a5f6c3960693cb899d2ed80"],["/posts/ee1ed673.html","bc494e3f7142a72270426125f3d5f976"],["/posts/f0c3ed61.html","51aee6bb167967230562e2d74166b975"],["/posts/f21e7f84.html","cd3cb6e5814bd711e2b705b17aeba4de"],["/posts/f230b0fd.html","009e37906f704941544322ffb2408737"],["/posts/fc04d0d4.html","8e333061c5459b679c5b618bfe68ebec"],["/sumire/index.html","7734373f808204dca3bd20ba47f2f7ac"],["/sw-register.js","29d766fe93b06124f8cb45e0a7466218"],["/tags/APPLE-project/index.html","39f2f67503b5d243a9c1743d292c891f"],["/tags/BELL-DA/index.html","72296f0e2d8673c1082f19c69cf40b38"],["/tags/BL-Game/index.html","84262c7400515c49b1bbb007010061a8"],["/tags/CHUNSOFT/index.html","1e6c2ece21744f4986cf062363f29ec6"],["/tags/Cherry-Pie/index.html","62d90d09a176ee13a01bfcf8c9d550a8"],["/tags/Circle-Mebius/index.html","a507992cf7a57bafd3de929e5d6522e0"],["/tags/CresCENT-BLANK/index.html","edc9b71a63e1e2db8d6e395506f2bc85"],["/tags/Dopamine-Software/index.html","6a34948e4bfa4b3f2c9de74f114a11c8"],["/tags/Dos/index.html","4a356de5e0a18bc90ae12ad4122d3c78"],["/tags/Earth-Well/index.html","af41a219670a09d9718b8a685c325fbc"],["/tags/Kanon/index.html","eb95205cb68d6a32067d1a29088c4733"],["/tags/MANATSU-8/index.html","168a75a539ab7ce212db264ff18d9c66"],["/tags/O-S-I/index.html","1a595f5f9a7adf59cd1e6967192c71b8"],["/tags/Omegaの視界/index.html","5ef781441c28a06cd52091f6567c9f19"],["/tags/PC88/index.html","9c77291ecd464a305718f753f02e7647"],["/tags/PC98/index.html","ca3911c651e4dc73c4711b06364b10ec"],["/tags/Perpetual-Room/index.html","750acb5ae43c451b4a3017efc818d436"],["/tags/Pleiades-Company/index.html","1a5f291c2d3e619ec77096f61a7d6640"],["/tags/Reverv/index.html","3c2c11486b578833b7e84698d9bc7bde"],["/tags/Saihate-SOFT/index.html","30b72fc6dd7fc579edef6243cc2976cb"],["/tags/StrayMoon/index.html","a0752142510e343a9c0d9f6387959089"],["/tags/ToHeart/index.html","0b68427e915626279c2ad2283b65519c"],["/tags/Traumend/index.html","91d1e454da3dd49433ffbfa117ff951d"],["/tags/Witch/index.html","8ac8fceff822cdd18a8b86de29912fff"],["/tags/adonis-project/index.html","ffd510e62d45054c4715fe83c943f3a0"],["/tags/flash/index.html","a9d6bed41cc333aa21032c30e1c17c47"],["/tags/galgame/index.html","60019c2f364785267c0b0081d9b383e1"],["/tags/galgame/page/2/index.html","7f5a1aae09dbbf9c440b9c937e31f065"],["/tags/gal资源/index.html","782f57ea08e5d95462d4f076ee47ecad"],["/tags/gal资源/page/2/index.html","7aec8088c091bbbceac16ccddea21b61"],["/tags/gal资源/page/3/index.html","965aef7ed8e8ab04c6e987bdf1a91fa9"],["/tags/index.html","95a87dc9d11471cad0ae4530d4d973ef"],["/tags/rkr/index.html","a734b6b7990b275a5c94053345802477"],["/tags/team-eye-mask/index.html","217ee6129fe7f1fe62e414bfd3d53e7e"],["/tags/いつものところ/index.html","a6e77c5f003023b9a72668cb2d654693"],["/tags/きつねみみ饅頭/index.html","be4102b31824924abbe7d3a636ceceaf"],["/tags/ねこねこソフト/index.html","9c4aa9a012a780afc823093f113245b4"],["/tags/ねこバナナ/index.html","f7865396cbea71dba163167f2b9dec58"],["/tags/はちみつくまさん/index.html","5a937270a14b9d989b7e8f4b3f58de08"],["/tags/ろりちせ/index.html","d159d9b4499daefe39b9c77bbf8abe86"],["/tags/アイル【チーム・TATU】/index.html","c1ed0bf76d0792b9c036e7113a699da0"],["/tags/ブロッコリー/index.html","04e6a51d8f82410712bcc5ec6b4bbdef"],["/tags/停产/index.html","df26719acceb14dd43557a20d0f6790d"],["/tags/公告/index.html","c1184a64e19cbc884a31b12f4130a551"],["/tags/同人/index.html","77309b52d0cc92c16b8f546e0eec7854"],["/tags/堀井雄二/index.html","05bcf4716d30ba039b86b6a95eff8204"],["/tags/外海なおき/index.html","7ee9bf0604adc98e3ed54f4c34a427a0"],["/tags/機械式少女/index.html","878d629d385b728daf55ef0390fe5f2d"],["/tags/水仙/index.html","e377a1ce60d97c7f52634454aa2868d0"],["/tags/片冈智/index.html","bcc472e6a2a5817671181cc47c7f07f5"],["/tags/片岡とも/index.html","60b3f521502fce6ceaf30ee76b33f644"],["/tags/牙の刻印制作委員会/index.html","8543d82256e2b208859b46b08b72fa0e"],["/tags/牛カルビ定食-FLAT/index.html","61227c1e4d62ff7a92bfe0576aad291d"],["/tags/牧尾屋/index.html","bfa525511a64034b116d408d6f6309de"],["/tags/猫猫社/index.html","cc9e1f6afa8952afcc35d81c60064f0c"],["/tags/王宮魔法劇団/index.html","539a4cc58f12792f10db1efb21bb27cd"],["/tags/画集/index.html","86c2c844243acab30cd53bbe96399ce0"],["/tags/索引/index.html","1d380440c09a99fbf89676c3095de135"],["/tags/閂夜明/index.html","6d7039504f7e8b0791f7b8aded3bc148"],["/tags/音乐美/index.html","78ec5cc3ddcd12166b447a8a4373b204"],["/tags/黒†救/index.html","9001ee8869e8134f9ee7de48150860d9"]];
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
