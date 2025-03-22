/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6220c9d4f61da5deb29ee1360df02bce"],["/archives/2024/04/index.html","57a2f033671ea04a7e4b1c1d88c553fb"],["/archives/2024/index.html","894218eeeb2d766df52598d4ebc64106"],["/archives/2025/02/index.html","18ef71231a164c3fb5b99c6e455686ef"],["/archives/2025/02/page/2/index.html","b3cbb6d7c3450f289c160770abca3274"],["/archives/2025/02/page/3/index.html","45ecfb3c14697e1f1bcd941edb723e42"],["/archives/2025/02/page/4/index.html","3461e7632cc18bb3e88c405b1935824e"],["/archives/2025/02/page/5/index.html","89ca32e3e8bac43b99227a7acc8d56cd"],["/archives/2025/03/index.html","ccd28ba9a031431e2dfe8963804fd6f7"],["/archives/2025/03/page/2/index.html","7fafc105e26c6a269a881e2d6e4d99ac"],["/archives/2025/03/page/3/index.html","a3c7b267fcfb960c1d72e928f9dc794a"],["/archives/2025/03/page/4/index.html","d8e4166915425218d439384d6962896f"],["/archives/2025/index.html","cabfa8c71af9d2a139cd19e5ef2006d4"],["/archives/2025/page/2/index.html","075f39078ccb605a401ec13867523f51"],["/archives/2025/page/3/index.html","46c38a153415b49d5a3936b50abe1fb5"],["/archives/2025/page/4/index.html","9bb0ce2e6f858220633d049fc9cbd6b0"],["/archives/2025/page/5/index.html","6c357f2b578c652ca064e021aaf0e4e0"],["/archives/2025/page/6/index.html","8078671a5d51e5f95d4a8b87e9947e26"],["/archives/2025/page/7/index.html","07f235c04ebe86aa81486ac517468c33"],["/archives/2025/page/8/index.html","60adb7f964b22dfd9192b4f00f40e18f"],["/archives/2025/page/9/index.html","c00476bd20015e538c25db3871260c29"],["/archives/2026/02/index.html","c7f4f1ad018d6e7879634fecb2cd1a74"],["/archives/2026/index.html","277ddf9c97254da890bd8e168de0ffde"],["/archives/2925/01/index.html","3c0df0ff4b83ffa30a7d88489ab5302b"],["/archives/2925/index.html","aaf65f6ddec4cd100fb8a46a3425ff34"],["/archives/index.html","9687563a09e4785ad6fbd50db98de9d6"],["/archives/page/10/index.html","447497cb498c5f734d34ed8ea132ca27"],["/archives/page/2/index.html","e59429854042cd8250de03c41c615f89"],["/archives/page/3/index.html","5f8fdac8e9db0be49105e96778a35fe9"],["/archives/page/4/index.html","b228e5e12ccf2f1b83edc3cfb819ffa8"],["/archives/page/5/index.html","68127f0eacc68d06da1b4219be5bd84b"],["/archives/page/6/index.html","75ab898a2f5c9c86f772e794465fcab0"],["/archives/page/7/index.html","d1be25fd73b3deb23f0ad673b99c5965"],["/archives/page/8/index.html","59c3cb7e61a2b80e7bf1788ae1cd6378"],["/archives/page/9/index.html","9d80c5ac8647aea653664d1f968cbc6b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","2d33d118fcda15c230473daf10594130"],["/categories/galgame/page/2/index.html","6441afad9d9b0a2fd7912a87dd8cdc72"],["/categories/公告/index.html","af8835feb0a4b70f446df4a9491b34b7"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","43019254ddb92ffa82677a6cdfba3dfb"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","1a64e32c00f9d3817664769702378ee8"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","9d4408c165bb5eb8d17429b699a5be09"],["/page/10/index.html","43a501251810992fbfc3eb2cb18dc21a"],["/page/2/index.html","395e1985c9797efe4e666a41c0676d22"],["/page/3/index.html","6212328abca0c22ffc9a7b6bed4dd732"],["/page/4/index.html","ba0cee5434d4a4b80f40eff8f29aa9d2"],["/page/5/index.html","2f86bd13eb04029094c2cd0c65b1ef1b"],["/page/6/index.html","c813b7dc9da47f515df23f3cb9f74241"],["/page/7/index.html","cf50c8a5e2dafc7f3fefeaed5bd0edd4"],["/page/8/index.html","7076abf6f3a12fc62e3354a0b10e452d"],["/page/9/index.html","1c33a185657415c518b5e19940f90d26"],["/posts/10c9dd98.html","f88feaea3490def4f73b6a69670edfbe"],["/posts/1295b569.html","ad86dd9deb8f96164d2dc883c451d26f"],["/posts/1370342.html","8587d358598fe75ba832ec51f8b87274"],["/posts/15ef14c2.html","3e8ad626ae05d3110255b41f337a3dd2"],["/posts/15f3959d.html","01ecebe365f7e8ed45baf74e8e7ae9f1"],["/posts/18ab785d.html","4cdf8d584e38ed7d665a2c55fbe189c8"],["/posts/1d59b71f.html","81f58a2794155f6e39cc0f2c173a6f12"],["/posts/20b3f3a4.html","c5622f66598f93437aec02f998243dc7"],["/posts/245f1c7d.html","d8d2f0262348a8261edcb27fcc37af7e"],["/posts/252658f.html","51a0938668e1907bf5df7273d944a0d5"],["/posts/28397adc.html","95a8588925b15de8060798e545819aa9"],["/posts/2c0a6836.html","c17e176e66d22f279bd14e63f227b2d8"],["/posts/2cf620f0.html","e93e45e9463261ac3060971b44d4a777"],["/posts/2e30fd6d.html","c8554fa54ea4d38090a179b83168a881"],["/posts/34292736.html","0e49b99452164dd3ce07e024b964c8c7"],["/posts/3468cbe.html","4a8abc765da5ada8eeba5ced51799f4a"],["/posts/3e118dbf.html","94e5e39a673bb5c10161c1f9b6a3e55e"],["/posts/3f7d823a.html","36f870a1ff1303f1b470bba6a41159e7"],["/posts/43945723.html","405c4a13ff0ad24e12a92a544086ab32"],["/posts/44124a6b.html","3b05e40d33a1550b9a1fe5579c7aca64"],["/posts/47abb61d.html","a262004d5842d0e9aee645f911fe0d4f"],["/posts/4b689be3.html","54a5f203beaa001938139e6810373098"],["/posts/4cf8423f.html","803f3bafd67ced382a9889f71a169d19"],["/posts/4dcf85c.html","f8c78fcf970d5294d28808348633bc87"],["/posts/500cd322.html","7561863b34699aa748a283e7d4965bc8"],["/posts/51c9b1ff.html","c6cdc53b35d0d6d67f9e0adb29692597"],["/posts/52b5b3c6.html","6e743f1eceb24b24b91ea3c7d8c3b1ff"],["/posts/5f6e0c59.html","863cc0a62353bc835bdd987c138fdea7"],["/posts/6336a2f9.html","82d898061594c2e79ab4c300d8e88042"],["/posts/6432d61a.html","4fd87021d2a93d0432b0480ed2d618f4"],["/posts/6515f032.html","5a9bcc40b4170b60d57002b2532dfd72"],["/posts/6720ccdd.html","a608625f114aa13c88e4bfadb7946cfa"],["/posts/6a4b5ac8.html","1440ddd000022b94fdac0f6294089051"],["/posts/6aa4177c.html","a994608f617a20221f267d3bf56c4a93"],["/posts/6b15f81f.html","2e4e1dfc30ae942178b42cfb23544833"],["/posts/71131d34.html","fb6afb9b60d3dbca616ffa9bb85417ea"],["/posts/78a8a8d3.html","20ae20c2afc5aa6dcae3163e32e13b05"],["/posts/7a5ef3d0.html","c8d96ad9ef14f8c7632df03eb17e5ac0"],["/posts/7b41e1ac.html","c7c7c8cc484a924f7ac80fc8e3af5038"],["/posts/7b51011d.html","88855a7587a2f671ecd25e0953c937cd"],["/posts/7e3aa3e2.html","1dab7c14273ab0abcc38423685540885"],["/posts/80fe2691.html","51bee1e7d37c6267af883a24ad79c832"],["/posts/81ac52e9.html","4533a0321645a9d86034dabd78910e2b"],["/posts/849b40f8.html","a8ff3ae21d348fe972750768e15c1234"],["/posts/85c51d68.html","2670276e5eb68062b112f1eab502df7d"],["/posts/886f8d3.html","3e7ea3b0b58bbd875872be27edda6de4"],["/posts/8a7cba10.html","cfb2ecf56f7cd9d052e202c0f2d34c0e"],["/posts/8ac11b41.html","b0dab1eb79cba488dd2f17b75bc762d7"],["/posts/8dd520d9.html","c5c7939627d22c6505ec5aaac94e8574"],["/posts/8f555654.html","fe2ed03eb0cafcad38846542c5abdfe2"],["/posts/92a980c2.html","4a00c977ce4456cee3aab93af718be36"],["/posts/92ce16.html","73b4dff59af666900b6bbeb0a791e0a9"],["/posts/94d3c794.html","96e97aa9a3d79f5bb35108b7635ae4b0"],["/posts/97f50eea.html","7106ced711c460bab64e9f3a748b8f5e"],["/posts/97fca8be.html","608592963be1821210ff9607e611c589"],["/posts/98662d05.html","52d8fa2e0224739d76a3af7574edce96"],["/posts/9a2f6162.html","0a72a68fd403192489ebb8237639abb4"],["/posts/9b22a48d.html","a0c8d770a029e9ea484134d5cc6edb05"],["/posts/9cb455b1.html","f874d03cf05208567c4d3b38c791f051"],["/posts/9efd7701.html","07575a952de450a3233ec71742545255"],["/posts/9f61c1a0.html","a5be2290c6fdcacef89378ca19e456b7"],["/posts/b497b647.html","c26b6975493645878885fc2fd6594984"],["/posts/b4d464b0.html","5d2500245abc86d4aa59c683d5078d36"],["/posts/b5fb773f.html","f6c232f53fd56223b7a0defd7482e643"],["/posts/b8d46b32.html","22238d68f973e24417bdf097aaab6cd6"],["/posts/c1b2c6c9.html","2c7ac9729d26481227a5a09154664688"],["/posts/c2111cbf.html","41459c36e0f5047a5af63ec8f836828d"],["/posts/c316c2e8.html","ca1714fe8a9239376a560864383d0351"],["/posts/c43e60b5.html","32d0dc216239a418f00aac078c75e14b"],["/posts/c497a412.html","ac2858f62790761a124c6dc26dd27186"],["/posts/c5de299a.html","88dd3db2e576e0dc248c2688c4c84992"],["/posts/c70bba9c.html","7a2f90e1f237cfd561d4e6935c75ea2b"],["/posts/cae2c959.html","6505dcff2c1791fa30ce39a3b8cba055"],["/posts/cbebef2b.html","62523f038b2b2f1ade8976d5bea461c7"],["/posts/ce25023e.html","8421eb0bc948f0b5d086ffd1b3701f36"],["/posts/d2fd4837.html","19873008df2fca7f1bad689f2ae45378"],["/posts/d3233cbb.html","6c24a6ccb95b9306c39d8474b6dc3cd4"],["/posts/d3a745a8.html","f48f3dc22a5b744a5e8aaac1d0dabc2f"],["/posts/dc815d5.html","e48f6875a35ad1f7340e7c445e85370e"],["/posts/e3ab6ad8.html","eea1729b0b514acb3956f2891a0de57b"],["/posts/e5018da6.html","d8c1af8a70f08fab9f64dff2b3ec5853"],["/posts/e5963272.html","aad6ace90b68668e3ba2683ed4515234"],["/posts/e624b065.html","7457a5436b2f4b18c444ba232292878a"],["/posts/e8f14b6c.html","a919a6fb99a542ce0e0130360af57ddf"],["/posts/e91abb63.html","f6157bb61e32a72955eba8051db5e68b"],["/posts/ea9a8808.html","2d5ad4bc45c14b8ec01d9fa19b61d7d8"],["/posts/ebaf2232.html","6bb9041cf2dbbf43e59f1fb8347f5fcf"],["/posts/ee1ed673.html","c8d42387e1279134e8ea62e2e1a74025"],["/posts/f0c3ed61.html","90fe838171fe32659b3bd55e007acd6e"],["/posts/f21e7f84.html","d1d540257efc369f032ccec66fe437ef"],["/posts/f230b0fd.html","1ea63b1a75eeb4e2ff22faee9df37c40"],["/posts/fc04d0d4.html","5ec0a6e0ce0968c3dc9f20b1c9a86b91"],["/sumire/index.html","c0cfd1f42206acfab5ba483143691235"],["/sw-register.js","839d6a8546caeaaa2dbd52a9ba0d5301"],["/tags/APPLE-project/index.html","d6973093dba5e110b973c57b3a084f67"],["/tags/BL-Game/index.html","910b4bbe6c41b24180197d101da5f89d"],["/tags/CHUNSOFT/index.html","b5eb034a8c95e132ca5c353ed3e99063"],["/tags/Cherry-Pie/index.html","1072ac3171156c84b6441480fe54f282"],["/tags/Circle-Mebius/index.html","d188ba3bf01c81aa8e2c4caa90d6b6c3"],["/tags/CresCENT-BLANK/index.html","5fe468ace0fe161dbbd4beb073a289ee"],["/tags/Dopamine-Software/index.html","0fa1f08eb60abe4d85c480fc636e9e04"],["/tags/Dos/index.html","2a75c12f8ebc377af9ff9e8ce5afc319"],["/tags/Earth-Well/index.html","7bb70448de5e66a168b8adcb807990de"],["/tags/Kanon/index.html","d6eaa56087d32e47ef8f1f739887b797"],["/tags/MANATSU-8/index.html","24146a2773dc3c497fad38cce417bfa9"],["/tags/O-S-I/index.html","1b8a039a0e8c875d3ad03ca9548ad49e"],["/tags/Omegaの視界/index.html","eba40f455a2aaec28ae9164330e0b5d2"],["/tags/PC88/index.html","18a8830d67114a2a27eec1be2fb66270"],["/tags/PC98/index.html","7383ae4f1c53c3619b108b9204b8c0bb"],["/tags/Perpetual-Room/index.html","792e48b6ff275d5710313c2aff5c69b5"],["/tags/Pleiades-Company/index.html","e9b8cfcc045b0be549ed2c4bf8a561db"],["/tags/Reverv/index.html","ea01c397dbeb63accf1dbfd31cc91fbb"],["/tags/Saihate-SOFT/index.html","05886f7fc152696ab2f23f64db31126a"],["/tags/StrayMoon/index.html","c9fe66ee012f3d0a1df4a9bc8d0da740"],["/tags/ToHeart/index.html","400692fd7227a1bc4945a8c9ff30a991"],["/tags/Traumend/index.html","e707ca48eec508d486b6ed37337caec5"],["/tags/Witch/index.html","eb02d438d08d749c8afb64be4ba28dec"],["/tags/adonis-project/index.html","a9b30d6ec5e0da0c509b860ec749f865"],["/tags/flash/index.html","f736cbf3b5585dd724dcfb84f353ab43"],["/tags/galgame/index.html","95122a570fda03117bc457b906496cfd"],["/tags/galgame/page/2/index.html","3a8c0637b4be30b2c65bfff33c495d60"],["/tags/gal资源/index.html","fdd81120b348cbfcf367c615fbb8f05c"],["/tags/gal资源/page/2/index.html","20792673ee1b889af0615afc7b926553"],["/tags/gal资源/page/3/index.html","4baef71d4948a9f28152c8cb363bf2ca"],["/tags/index.html","238450dc640d51012d82e8dc78515960"],["/tags/rkr/index.html","9e3c298cc9ad56ea965e00fdad119b55"],["/tags/team-eye-mask/index.html","e1651a8ba5eafcbee70e70a250da6166"],["/tags/いつものところ/index.html","177968b5466b9b95adc69cf884a97b82"],["/tags/きつねみみ饅頭/index.html","ce62a1c0f2055965f5b590fd60dd1671"],["/tags/ねこねこソフト/index.html","cf4c6346c64435bb0d103392e69de972"],["/tags/ねこバナナ/index.html","2fb9454613acb2bc56754de9befbca7d"],["/tags/はちみつくまさん/index.html","bc81fd7ee38ba22645fdbe391a6ed6e2"],["/tags/ろりちせ/index.html","216fa51d92bb00052701ff78f9c81417"],["/tags/アイル【チーム・TATU】/index.html","1940e81b372733f9995682777475816f"],["/tags/停产/index.html","e71a4dd27d89089f91236caf56f95d91"],["/tags/公告/index.html","529b3731a8fc995c34619763ebfab78d"],["/tags/同人/index.html","427b429e592eb571da8ddfa2f9709e63"],["/tags/堀井雄二/index.html","307dad5129d31feff64362e109bf3e4c"],["/tags/外海なおき/index.html","821e669457947a8decf0341c9da82a1c"],["/tags/機械式少女/index.html","fa3c04ac5e82bd56e9d6ae96aa356699"],["/tags/水仙/index.html","ba8a1405a44e60be92d4389b411383a9"],["/tags/片冈智/index.html","461a90681116c5930d2b4462da7b7326"],["/tags/片岡とも/index.html","7bee95b017f51632b91e9ace60403e52"],["/tags/牙の刻印制作委員会/index.html","af867f8fd57e9461702637d020d21b9c"],["/tags/牛カルビ定食-FLAT/index.html","fcfee387865a0947df9ee4c8e0b6cbdb"],["/tags/牧尾屋/index.html","f92026855666716287e6759659f63648"],["/tags/猫猫社/index.html","389852c5ed9f3b502c48a13653da2b96"],["/tags/王宮魔法劇団/index.html","ddaadd05ab1f6f30595304f08f56cb49"],["/tags/画集/index.html","153718ec0947b65a13e8c1517d4fe093"],["/tags/索引/index.html","0cc0610b2d19373892a8b3d8c484be9f"],["/tags/閂夜明/index.html","988208a8a16237f9ae154eb05731b985"],["/tags/音乐美/index.html","8490dad49b56a0d82cb4b72c14536c34"],["/tags/黒†救/index.html","c79328c5b3a177768188ca5a065c6ccd"]];
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
