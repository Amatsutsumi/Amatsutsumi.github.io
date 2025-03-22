/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","32298ecd7645c2d51a90082c20b42650"],["/archives/2024/04/index.html","9b0d4e5bc8b71e78e99bc5cb3ec04f07"],["/archives/2024/index.html","5450150a88a346f78c187fd74f355d95"],["/archives/2025/02/index.html","eb588eaf56fcef27fe7615b7d37a63c0"],["/archives/2025/02/page/2/index.html","5b93e9ae1fe6b60967fdfe1bb3d45b5f"],["/archives/2025/02/page/3/index.html","af2122f27ea35e1bdede95e5b80b9dc2"],["/archives/2025/02/page/4/index.html","cc53539a302a2fc073b4971d2307f034"],["/archives/2025/02/page/5/index.html","d3d0af0f06edb76d6014b3ec315efd57"],["/archives/2025/03/index.html","e8d1d5c46b8f1f0bec2333f4e1451e96"],["/archives/2025/03/page/2/index.html","75847926deea1a1618740d529fb513ee"],["/archives/2025/03/page/3/index.html","499a6836c190284c12a9adc836e97de9"],["/archives/2025/03/page/4/index.html","554b63a5db965654103ed162fe5b5497"],["/archives/2025/index.html","991fe94c0ffc5e9f8fa9d13c10223751"],["/archives/2025/page/2/index.html","9a1e56f1b7f25e447c9f7ca3569701d5"],["/archives/2025/page/3/index.html","d6aed34ab5671c7e0277e554479cda2d"],["/archives/2025/page/4/index.html","edb2f71da671caef0607ccae7f7980d4"],["/archives/2025/page/5/index.html","0356b84d282416aa7a37937fa2ff78f0"],["/archives/2025/page/6/index.html","ada7478cdce5f1e7221bfca345941977"],["/archives/2025/page/7/index.html","a763528a7321311488b998ef5ae21592"],["/archives/2025/page/8/index.html","b8228042d9d5ad89daf181c1e779fe6f"],["/archives/2025/page/9/index.html","ebf4b8bc056672e831feb60750db3088"],["/archives/2026/02/index.html","fdcc660a53032c26f6349ffa110d13d6"],["/archives/2026/index.html","a034d516676394d0f6539b549384e97c"],["/archives/2925/01/index.html","e989aca17901b9e9855255ded9b97f00"],["/archives/2925/index.html","205293d810db993664d9674eaf2b7d45"],["/archives/index.html","459dd570760acf081b9a1d7c16c6b48a"],["/archives/page/10/index.html","b87a11cb1e94b465058419229f569e3c"],["/archives/page/2/index.html","041698faf67e0321d3f1527937dfecce"],["/archives/page/3/index.html","4e3d7b442ac6c6b4a5e4e829b41d3a6b"],["/archives/page/4/index.html","9d5b7ff73a5f91c5f4f8220100171538"],["/archives/page/5/index.html","3644bebe5cedcf48ab5c9846179b2f31"],["/archives/page/6/index.html","8313ed21aea74f8bba55ea4e530ed26f"],["/archives/page/7/index.html","5582bcb20029f75bf1045f1a25cfcf3e"],["/archives/page/8/index.html","2e7fc5e412f666946c3a14e5e33d5f08"],["/archives/page/9/index.html","83df76004ea15f0dfd4bb1343f3cf922"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","9dc95cc6f13e8488e17498d7c199225e"],["/categories/galgame/page/2/index.html","a056e8e151ce0c0e7e18f770e299daac"],["/categories/公告/index.html","b79eb0d63e7dc60309dea4ac371ec932"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","2e719e114b77a97e230d5f0bf2b72027"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","0ed1c9dce0edda3697d464aa2d5a323a"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","8414e8c56cc53b4dbb3f13eaf3899696"],["/page/10/index.html","1ff5ed43f74ef1f67522ffc2587cfd5b"],["/page/2/index.html","083878072cda779ae369c581bbc7be9b"],["/page/3/index.html","b3cb5c05a21ebebb19d18f3fd3ad2e11"],["/page/4/index.html","1b2c80b49bc4886e852f3ef3605c1ec4"],["/page/5/index.html","598075114e86d36e18b11ff33a23ab40"],["/page/6/index.html","748e003fae1198dc05897e97e9f57606"],["/page/7/index.html","9fc66d56f3e768ffe94da95939f1a7ba"],["/page/8/index.html","9223639e426d4e6127037597c787cc9f"],["/page/9/index.html","33f9fcc239aba3d2a26b9046074c2898"],["/posts/10c9dd98.html","b05cfe0c22aeb927473ef82f53f4b823"],["/posts/1295b569.html","ad86dd9deb8f96164d2dc883c451d26f"],["/posts/1370342.html","8587d358598fe75ba832ec51f8b87274"],["/posts/15ef14c2.html","3e8ad626ae05d3110255b41f337a3dd2"],["/posts/15f3959d.html","01ecebe365f7e8ed45baf74e8e7ae9f1"],["/posts/18ab785d.html","4cdf8d584e38ed7d665a2c55fbe189c8"],["/posts/1d59b71f.html","262bfe7d6bb9f9b44337307f133a7cf7"],["/posts/20b3f3a4.html","5358b694b6fe0580e438e021c1adb658"],["/posts/245f1c7d.html","d8d2f0262348a8261edcb27fcc37af7e"],["/posts/252658f.html","51a0938668e1907bf5df7273d944a0d5"],["/posts/28397adc.html","a16f3a0f6aa4a90150aa243be17ecccd"],["/posts/2c0a6836.html","c17e176e66d22f279bd14e63f227b2d8"],["/posts/2cf620f0.html","0b3da404259dad3a806dc76b027b1eaa"],["/posts/2e30fd6d.html","c8554fa54ea4d38090a179b83168a881"],["/posts/34292736.html","0e49b99452164dd3ce07e024b964c8c7"],["/posts/3468cbe.html","4a8abc765da5ada8eeba5ced51799f4a"],["/posts/3e118dbf.html","94e5e39a673bb5c10161c1f9b6a3e55e"],["/posts/3f7d823a.html","36f870a1ff1303f1b470bba6a41159e7"],["/posts/43945723.html","405c4a13ff0ad24e12a92a544086ab32"],["/posts/44124a6b.html","3b05e40d33a1550b9a1fe5579c7aca64"],["/posts/47abb61d.html","a262004d5842d0e9aee645f911fe0d4f"],["/posts/4b689be3.html","8de3e66e8f85b42c5143697e27096bf7"],["/posts/4cf8423f.html","803f3bafd67ced382a9889f71a169d19"],["/posts/4dcf85c.html","efd85d899b26c62401b8ec7cefcc6cd9"],["/posts/500cd322.html","7561863b34699aa748a283e7d4965bc8"],["/posts/51c9b1ff.html","c6cdc53b35d0d6d67f9e0adb29692597"],["/posts/52b5b3c6.html","3374f9690693bd5e285e1de77bff2898"],["/posts/5f6e0c59.html","863cc0a62353bc835bdd987c138fdea7"],["/posts/6336a2f9.html","2220799b39b787d5beca4db7427b1548"],["/posts/6432d61a.html","0ab3b105622ee6c2318039946afe6575"],["/posts/6515f032.html","a74f7595bdaf32a5e32f7c62d011fa10"],["/posts/6720ccdd.html","e7d38ce65efdb04018fc7c32e98e59a1"],["/posts/6a4b5ac8.html","1440ddd000022b94fdac0f6294089051"],["/posts/6aa4177c.html","a994608f617a20221f267d3bf56c4a93"],["/posts/6b15f81f.html","2e4e1dfc30ae942178b42cfb23544833"],["/posts/71131d34.html","fb6afb9b60d3dbca616ffa9bb85417ea"],["/posts/78a8a8d3.html","d7b50348760b3abe110d5b1c00022a2e"],["/posts/7a5ef3d0.html","c8d96ad9ef14f8c7632df03eb17e5ac0"],["/posts/7b41e1ac.html","c7c7c8cc484a924f7ac80fc8e3af5038"],["/posts/7b51011d.html","88855a7587a2f671ecd25e0953c937cd"],["/posts/7e3aa3e2.html","d07e40a02ddae9dc600f097aff10d197"],["/posts/80fe2691.html","e0a55d4c5c63bb7816c1d4cffbf0da15"],["/posts/81ac52e9.html","efb081f962b7b3efeb84be306d459bea"],["/posts/849b40f8.html","f6b23512ea22f8942a96c695300218d6"],["/posts/85c51d68.html","2670276e5eb68062b112f1eab502df7d"],["/posts/886f8d3.html","4560e2a4dd6e3f9e7da0451df8e20890"],["/posts/8a7cba10.html","cfb2ecf56f7cd9d052e202c0f2d34c0e"],["/posts/8ac11b41.html","b0dab1eb79cba488dd2f17b75bc762d7"],["/posts/8dd520d9.html","c5c7939627d22c6505ec5aaac94e8574"],["/posts/8f555654.html","7db5038d44b81b0dda4c9f340e14268e"],["/posts/92a980c2.html","4a00c977ce4456cee3aab93af718be36"],["/posts/92ce16.html","f5a52e21776b2b388c10c45366258adf"],["/posts/94d3c794.html","96e97aa9a3d79f5bb35108b7635ae4b0"],["/posts/97f50eea.html","7106ced711c460bab64e9f3a748b8f5e"],["/posts/97fca8be.html","608592963be1821210ff9607e611c589"],["/posts/98662d05.html","ed2db480a6f88bb45fb110c3d83bad29"],["/posts/9a2f6162.html","0a72a68fd403192489ebb8237639abb4"],["/posts/9b22a48d.html","a0c8d770a029e9ea484134d5cc6edb05"],["/posts/9cb455b1.html","cb6b228a6f396f0c34a989fd83f63221"],["/posts/9efd7701.html","07575a952de450a3233ec71742545255"],["/posts/9f61c1a0.html","a5be2290c6fdcacef89378ca19e456b7"],["/posts/b497b647.html","e381743ddc8aa537d8a363dbb6dc7b75"],["/posts/b4d464b0.html","5d2500245abc86d4aa59c683d5078d36"],["/posts/b5fb773f.html","77659437c198e1c181e34fd8ab2c1023"],["/posts/b8d46b32.html","f2510d9e9a9a462caf4e4fdc969f5bc2"],["/posts/c1b2c6c9.html","2c7ac9729d26481227a5a09154664688"],["/posts/c2111cbf.html","41459c36e0f5047a5af63ec8f836828d"],["/posts/c316c2e8.html","87124c441e2c85b50ee086ce1ae308cf"],["/posts/c43e60b5.html","32d0dc216239a418f00aac078c75e14b"],["/posts/c497a412.html","5ddcc1aba29c456f705b94a059bbad36"],["/posts/c5de299a.html","88dd3db2e576e0dc248c2688c4c84992"],["/posts/c70bba9c.html","7a2f90e1f237cfd561d4e6935c75ea2b"],["/posts/cae2c959.html","539882ec227663f0690ff2e291ae8ba3"],["/posts/cbebef2b.html","ba51554823ad5bdee7c786062806b1b9"],["/posts/ce25023e.html","ebb996daa744d7cfe82fb69ad64e7a27"],["/posts/d2fd4837.html","f413cb4c002f8c2cbfb3afce263877a0"],["/posts/d3233cbb.html","6c24a6ccb95b9306c39d8474b6dc3cd4"],["/posts/d3a745a8.html","8b59484b03086ccc2e80f2e446357fdd"],["/posts/dc815d5.html","f499704dda223207dcba65e41af48728"],["/posts/e3ab6ad8.html","eea1729b0b514acb3956f2891a0de57b"],["/posts/e5018da6.html","1dd7a4820dde16c535fc1563fa81c1ff"],["/posts/e5963272.html","aad6ace90b68668e3ba2683ed4515234"],["/posts/e624b065.html","cd2ed9ed16b36948845ca60af988cb69"],["/posts/e8f14b6c.html","a919a6fb99a542ce0e0130360af57ddf"],["/posts/e91abb63.html","2b347e1fffb1debcf3d43dd4bfff8987"],["/posts/ea9a8808.html","2d5ad4bc45c14b8ec01d9fa19b61d7d8"],["/posts/ebaf2232.html","6bb9041cf2dbbf43e59f1fb8347f5fcf"],["/posts/ee1ed673.html","c8d42387e1279134e8ea62e2e1a74025"],["/posts/f0c3ed61.html","90fe838171fe32659b3bd55e007acd6e"],["/posts/f21e7f84.html","e5abe65308b046d6fcc80c1b9cc230ff"],["/posts/f230b0fd.html","3cf758a85213ccb073394b11f96f7481"],["/posts/fc04d0d4.html","5ec0a6e0ce0968c3dc9f20b1c9a86b91"],["/sumire/index.html","a51f91caa779a64e18e7813b11b82bae"],["/sw-register.js","3d7fed5ce57f00b709bb24a16555acae"],["/tags/APPLE-project/index.html","e584fb576422df46d4ff3725620cc5a0"],["/tags/BL-Game/index.html","2380addf3848b4e000333354402cd225"],["/tags/CHUNSOFT/index.html","e71499ccd6c9b57450b2d9bb6f0c91ef"],["/tags/Cherry-Pie/index.html","0c42f2c74daf859c10907688328a9a94"],["/tags/Circle-Mebius/index.html","061d1fd3a3b887fb44b074811a437798"],["/tags/CresCENT-BLANK/index.html","fca86a3d707b21c148c798f4aa657c3a"],["/tags/Dopamine-Software/index.html","fbdb4a6325ef0e4bb8984f64cbb49609"],["/tags/Dos/index.html","3df843cec4323119013f40a4a46d006e"],["/tags/Earth-Well/index.html","6106bdf9f90474f0113244eaceff346f"],["/tags/Kanon/index.html","c6a494c9c17443c60774538d7e17a815"],["/tags/MANATSU-8/index.html","794fc1a2949d906e71885166b06495cb"],["/tags/O-S-I/index.html","7709bdbdaba16bd3afa632f27f338ad7"],["/tags/Omegaの視界/index.html","18835ccabfca4582178400a32e64d1df"],["/tags/PC88/index.html","6d8298eda4d2de92895f80bbae51889d"],["/tags/PC98/index.html","eb6b5a8f1e85f7bccae9adf1853d4d18"],["/tags/Perpetual-Room/index.html","01c1ba4339b5070af1bfebecc69d4340"],["/tags/Pleiades-Company/index.html","19689779b9d775973e433fd162d9f2cb"],["/tags/Reverv/index.html","d411d65678fa0ec026e09f69bc7c2d89"],["/tags/Saihate-SOFT/index.html","8282568a73723ed34b91296181cc943c"],["/tags/StrayMoon/index.html","78a9eb095b87f99e0c2e67904152dff5"],["/tags/ToHeart/index.html","9383c3a1cd59f1c18c7ef0ea5bb65d7c"],["/tags/Traumend/index.html","955fa8a2e8178ac602bc3549901cf3a8"],["/tags/Witch/index.html","206e5238b7d72b3d6a87f651e73d993d"],["/tags/adonis-project/index.html","cf453b818b70447e75d5984c31692dbd"],["/tags/flash/index.html","fb2c5fd4c0b3cf54731e78b638435065"],["/tags/galgame/index.html","3f3eb4adbcc01b420fc5ed6172a534ec"],["/tags/galgame/page/2/index.html","151385add253ae1f760c3956dbc646e1"],["/tags/gal资源/index.html","1c4f984cd78516b57da28f7346f27d03"],["/tags/gal资源/page/2/index.html","8ad2dd61be61ea975e3b4af6490d7c92"],["/tags/gal资源/page/3/index.html","448d665609a1f887e9d908a1d70a9b38"],["/tags/index.html","f3ca81b4cb202f3380bc150043e2423b"],["/tags/rkr/index.html","27f7b700ae3a7a7e063623bce21d3253"],["/tags/team-eye-mask/index.html","8fa14dc4c7a3edbc4a2219f169f5563a"],["/tags/いつものところ/index.html","617a3dcbb1cda050f123fff10ced07b9"],["/tags/きつねみみ饅頭/index.html","ec437aaaeadc4758c3ea0c3ffb0086a1"],["/tags/ねこねこソフト/index.html","f0f9a717b04607b09f1ab0d4895ce349"],["/tags/ねこバナナ/index.html","94a0e1b03ade8c4da1176782eafb6d7e"],["/tags/はちみつくまさん/index.html","573ffc1f8aa12f8b1712211dfbe03a56"],["/tags/ろりちせ/index.html","54beb4657141a6da3ead941e654f89bc"],["/tags/アイル【チーム・TATU】/index.html","86bed02d012e9bc4bbe57ba43b845cef"],["/tags/停产/index.html","cb3716dbd7f34779edd30b7a4cc34d72"],["/tags/公告/index.html","61878078502ac447beaac5ec7dd778af"],["/tags/同人/index.html","caf7d5ba62b7d5d44fb04f72ccf8806c"],["/tags/堀井雄二/index.html","8591665cef2a0bfc336c1a823ffcb20e"],["/tags/外海なおき/index.html","569bd4c052b52f176c3cf39d6c09ffec"],["/tags/機械式少女/index.html","b251a92f67187161b7c546605ea07de9"],["/tags/水仙/index.html","3599f3d7fb7a28e5c8cbd0f9aace3a04"],["/tags/片冈智/index.html","21cf169ee54d19e9f4d589cb1195a9bf"],["/tags/片岡とも/index.html","b441267315ca946654b1b3570526dfea"],["/tags/牙の刻印制作委員会/index.html","f56cd591c793ea230a74eec91b5e3f04"],["/tags/牛カルビ定食-FLAT/index.html","e588d04e3783d14d70d5bc051d9965ea"],["/tags/牧尾屋/index.html","686073498f7cb0364b169cba05f5cf1a"],["/tags/猫猫社/index.html","63b9563a1bc940335e57cedf3e368235"],["/tags/王宮魔法劇団/index.html","f1e0b7ee937ed9b40cb06c3bc8f3a7b6"],["/tags/画集/index.html","8391f78c948244427089156a033245ae"],["/tags/索引/index.html","bb747086ca09389e3215553d6e3de6f3"],["/tags/閂夜明/index.html","d8bf756da393c7b257282de7d64afb59"],["/tags/音乐美/index.html","2c12a921d0aad3e1ca206f77351afc4d"],["/tags/黒†救/index.html","00d9b728e413512bf5019ce43ee647c6"]];
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
