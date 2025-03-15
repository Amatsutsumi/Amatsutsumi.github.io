/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","91301b95b65569544c8f7240ea57702e"],["/archives/2024/04/index.html","432d495f87c6678a3dc209a3f4d988ef"],["/archives/2024/index.html","65e6540eea33c036103302b54a691541"],["/archives/2025/02/index.html","01ee5e618e74f0bf4e9f4a4c6db208dc"],["/archives/2025/02/page/2/index.html","c18aff85ffbb73cba245b8e69678376a"],["/archives/2025/02/page/3/index.html","6bf53625a04e3af24c475f064507a102"],["/archives/2025/02/page/4/index.html","9e52052d2401106b970a3b7375844d5d"],["/archives/2025/02/page/5/index.html","1af90db10de0e2d304b9dc800c91f0b7"],["/archives/2025/03/index.html","699ca2046db0ac2534062a506b1c87af"],["/archives/2025/03/page/2/index.html","a390e238dc1f363839dcdd1e4c39398f"],["/archives/2025/03/page/3/index.html","12b8a8431b12fc739b5cc2e7eb3a453c"],["/archives/2025/03/page/4/index.html","8c1451243466147050c9a4ddc40b6592"],["/archives/2025/index.html","3cc334872fbb5a296daff91bb7355f80"],["/archives/2025/page/2/index.html","0bbb67662d6f0288e399616801fa7877"],["/archives/2025/page/3/index.html","0ddd8766ac5ea19b7dc878a370084c87"],["/archives/2025/page/4/index.html","66d46d2e238e224c14677858d270176e"],["/archives/2025/page/5/index.html","115c923bf306d74485c91ce1e15e28af"],["/archives/2025/page/6/index.html","86434e208e44bde38fd859933029c7da"],["/archives/2025/page/7/index.html","3b55c302eebfe50b6b15dc2860bcde67"],["/archives/2025/page/8/index.html","83879854a2e11ee8e08d663f1058e854"],["/archives/2025/page/9/index.html","99ffb0f652c412009194a1256239caf0"],["/archives/2026/02/index.html","db91070f38660cfed4a8488105003d5c"],["/archives/2026/index.html","29daecd078e01e44d7a4ebcd2d14bdf8"],["/archives/2925/01/index.html","c0113f551d23a7ef264ae9d993cbfa3f"],["/archives/2925/index.html","e3adab11b0119dfcf4b2dfd12d864517"],["/archives/index.html","afbda1b385f79cd5f2d76e7c3406e4bd"],["/archives/page/2/index.html","d674131f072f3ab329261df99a03d235"],["/archives/page/3/index.html","8e0da3cb9c5036fa976271cbe26241ce"],["/archives/page/4/index.html","977b4871b812825e331f8ef6a2d2d0f2"],["/archives/page/5/index.html","3d14f5f05479f37947a6caa1705df2c0"],["/archives/page/6/index.html","d3b3a4e1a1d0ff77398ef0c31e2f2934"],["/archives/page/7/index.html","eb11f7bf694d06017114f769eeaded66"],["/archives/page/8/index.html","4b298c2583ad19fee0162cf86f6dc3af"],["/archives/page/9/index.html","ca47b7f1c53f6bd1d3f550eeca0edf7d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","fffacff900877ab7162d4781f486ea46"],["/categories/galgame/page/2/index.html","ec9d2f7333b5cfdfa40f9c3514e1fa5e"],["/categories/公告/index.html","b4297862e78531b25daacef86887fa71"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","5d38aa649db0d00d8f519401b0fddc65"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","534d5ecf69b98db02ac8feacb3d15c01"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","1b161e15a46e17da62b1eb3760ff0b0b"],["/page/2/index.html","8d42332282cf81674b90aeaaad691a44"],["/page/3/index.html","e60631ebc2d6d89e033c8ea1ef2a968e"],["/page/4/index.html","aaf9cebdef94384a6d44214324c35174"],["/page/5/index.html","fb4f6dcf8cc23fa0cdcb05263684aa15"],["/page/6/index.html","80a7a3ff73d5a60b99764c3161856d8f"],["/page/7/index.html","7d893280400789a4c658224ee2490b04"],["/page/8/index.html","494863029601c5addb703dca6dc54d77"],["/page/9/index.html","38652ac60baa6205a5e77287c1cdfa6e"],["/posts/10c9dd98.html","0798c08f2422f43221f5fee62535bbe9"],["/posts/1295b569.html","a620c9b47e11952c56d75355c42958df"],["/posts/1370342.html","565dc379a8282b7e49976416036a9583"],["/posts/15ef14c2.html","b2c82e2ff64763ecf2b303c268b0c672"],["/posts/15f3959d.html","6fcba51275d98098b7e53d3af94eb10f"],["/posts/18ab785d.html","41df6cffaa353c5c8911b73d1e45e5ec"],["/posts/1d59b71f.html","e1fe8de2388a81cb3b0690e5a200bef9"],["/posts/20b3f3a4.html","a4fda1e1b0db4f9497ea38530b120f64"],["/posts/245f1c7d.html","914087fb4bf9cb8c471bac33545a6aee"],["/posts/252658f.html","09ee89dcf022661a76564200272ea71e"],["/posts/28397adc.html","d402935d019f4fb93b79b2dfca530f5a"],["/posts/2c0a6836.html","6be2d52224c143bf3386739e1e61d381"],["/posts/2cf620f0.html","6d77ac11749a883973b047f802bc4b13"],["/posts/2e30fd6d.html","8a4ada78c5bb10f081b009149122805c"],["/posts/34292736.html","d5be5d6bdaf51a05d911ebdaab71f0fc"],["/posts/3468cbe.html","bd8afbdfc41223d984d9655fbdef96ac"],["/posts/3e118dbf.html","91962308ff503f200a7b463f83dff7f3"],["/posts/3f7d823a.html","96d45be71ffea0023d84e440e23c4cdf"],["/posts/43945723.html","782bd376afe8566bf29b73faca49248c"],["/posts/44124a6b.html","0653313e5bf2f9bd6fed4025f961e410"],["/posts/47abb61d.html","30fc3027420b31d69715fd01da45c961"],["/posts/4b689be3.html","dbaeda725389b26f639baac1489136fc"],["/posts/4cf8423f.html","c7876d9a1724b8d97fead7384de357ff"],["/posts/4dcf85c.html","6023b3c518acc9c9a6767502371ce8a7"],["/posts/500cd322.html","fb135fe357a664771bdc183d083dc093"],["/posts/51c9b1ff.html","98f319f6bd6b45d29c9ccd2da6c5fceb"],["/posts/52b5b3c6.html","6f64bc3fecd97372f0e8fd65fc52fba8"],["/posts/5f6e0c59.html","990a89213de25cc2bccc3c89bea4e1df"],["/posts/6336a2f9.html","89118b764054367b2a4907101820c208"],["/posts/6432d61a.html","f8c96fb754b6b0345ebf730b5ae45c0c"],["/posts/6515f032.html","01028da86af33f51d389151637ac6dd8"],["/posts/6720ccdd.html","13d65277cb5b8f37a9484d2be9f900a8"],["/posts/6a4b5ac8.html","5da105d040238e17ea5712b256ac5468"],["/posts/6aa4177c.html","50ebd766364db2c0ab8e1f7ca4962959"],["/posts/6b15f81f.html","b1faa72866e48dc975f71f35415ddf43"],["/posts/71131d34.html","77a00a7408246b82c3e6e7d2c9f2f63d"],["/posts/78a8a8d3.html","f9e5cccbf54d94e16d0b87f1ae1f80bb"],["/posts/7a5ef3d0.html","144017a07d376b5e79ede5dfbb6224fa"],["/posts/7b41e1ac.html","16c5eb6ee79b0135164c5687a6c4dfb5"],["/posts/7b51011d.html","255c07f9dafe34aa5be50335a405da8e"],["/posts/7e3aa3e2.html","6d6df488f9f9160feb038cca099eccda"],["/posts/80fe2691.html","17ffcea6ab959883724deee39e020a48"],["/posts/81ac52e9.html","2378e3c2aceca011c60495e8154e0661"],["/posts/849b40f8.html","b90cb05267826e1f87c7d01fa294ba8b"],["/posts/85c51d68.html","9c5b93fbc861c6e29a25ef9306b7bd28"],["/posts/886f8d3.html","14e5debc08563b1c17e5e590730e2978"],["/posts/8ac11b41.html","763318f3c737faf0cef0d42c675a159c"],["/posts/8dd520d9.html","7a839a0fd009b2795d2d70e3703f3045"],["/posts/8f555654.html","11abeb8d78325e5e4f1782a92b97b3ed"],["/posts/92a980c2.html","1ef7703fdb809e296b3a78cfe4bd161a"],["/posts/94d3c794.html","fca18c635eb4ea2adebafd654cd36c44"],["/posts/97f50eea.html","5d1ca71b983077f201da59c997808e51"],["/posts/97fca8be.html","1e36380b5c57535137efa2216a7e7a47"],["/posts/98662d05.html","59d11ff5357d777233117b1f8626391c"],["/posts/9a2f6162.html","8b7974c1959cd553fa5b831e6a6668a7"],["/posts/9b22a48d.html","b70957424fe2a7e5238db6ba25a7487e"],["/posts/9cb455b1.html","78ae2c7131912c7f5d469c6cf5251fa8"],["/posts/9f61c1a0.html","775c89229e040765c273ff58cc75a8e5"],["/posts/b497b647.html","8c8dee177854b644dbee586d581027a4"],["/posts/b5fb773f.html","25a02ad492ba653cbb427321fcc066c9"],["/posts/b8d46b32.html","28e68e70bcd77381b852b7e3d110cbf2"],["/posts/c1b2c6c9.html","262f60f6631321ec0d8df4e99a74ab64"],["/posts/c2111cbf.html","522b48417ddfcb1ef839c0d68e14d202"],["/posts/c316c2e8.html","58dc9c2fd2505755bdca088908920b5c"],["/posts/c43e60b5.html","f9df96611eb9214ba17a1f9e787457b0"],["/posts/c497a412.html","b326f8ba2d3b0a44c280eef9e77f5cdc"],["/posts/c5de299a.html","cf34cb6e49419e789b8cb890ba6cf410"],["/posts/c70bba9c.html","5be40b0d3cc2749797e7a2e46c9163ed"],["/posts/cae2c959.html","8b63aa058027dc36fc05cd4d3ae0729f"],["/posts/cbebef2b.html","d1811ca9d7fbb53c38911737007fdff6"],["/posts/ce25023e.html","fcf383614150fb2a6b580c8b2f818c71"],["/posts/d2fd4837.html","74a16bb6b5e818b9353aff188f48f7b3"],["/posts/d3233cbb.html","5e5a38c3ab39b97d66639184ca2cd529"],["/posts/d3a745a8.html","dd79b40b95ba44513142c6a6eb4a63c7"],["/posts/e3ab6ad8.html","2df1616d1a88f52bd2fe4fd1f5c01e06"],["/posts/e5018da6.html","61384ed78f5a2b743d1eb06d84c68d18"],["/posts/e5963272.html","f99d5c19752003b663505eeb561c9937"],["/posts/e624b065.html","5cd9ebac55d160f2772d48f0c708bba1"],["/posts/e91abb63.html","1f5f38a88191af2b4850fa27f7a83ab7"],["/posts/ebaf2232.html","644706ddd50ea12aa4422136961af500"],["/posts/ee1ed673.html","42d55fe3f32d2a5b13c3d622bfc55a23"],["/posts/f0c3ed61.html","5caca31d04c2885d5157582cd128308e"],["/posts/f21e7f84.html","0975578758c2fdf4307794c8665f8630"],["/posts/f230b0fd.html","b6de64f74349ab2eca6cb911c864be6b"],["/posts/fc04d0d4.html","f8184ddb8a3853c7196dfdeb1d774acc"],["/sumire/index.html","50e9ab60a9a1e82bc6961d387b71f154"],["/sw-register.js","e6a3c655420b0bd096d680f359181819"],["/tags/BL-Game/index.html","7600ae4893f32230569c21408f131b37"],["/tags/CHUNSOFT/index.html","fa898dedc53c84ebd04b216b4bdcd595"],["/tags/Cherry-Pie/index.html","3e1560556720ad35cd033b29ce925a27"],["/tags/Circle-Mebius/index.html","8ccb51289928ab6c4834b6c8212a3d1d"],["/tags/Dopamine-Software/index.html","275e24eebf8f4252217c3e5e2b8dbe69"],["/tags/Dos/index.html","7de04c0de9d3cde124cd481b5c1d2ee3"],["/tags/Earth-Well/index.html","ffd1094e3674b5c6b4e5b7ef615f746a"],["/tags/Kanon/index.html","228687f2ff49e023070709a1f7a7083e"],["/tags/MANATSU-8/index.html","45227883757bc9bebf5651a4565542ae"],["/tags/O-S-I/index.html","be7b8ea24cfef8fb10a8a66fba68b7a1"],["/tags/Omegaの視界/index.html","2272848c56fe57119b77f33ab3ff8f70"],["/tags/PC88/index.html","83d8d0eac0a6f126c88847931c3ea7b6"],["/tags/PC98/index.html","9c8908ebda4cf7e64b07cc32be9f7bf2"],["/tags/Pleiades-Company/index.html","37c93663093140c169266e5aaf2e9206"],["/tags/Reverv/index.html","c1978dd0856c13ac472fdf38748946b8"],["/tags/Saihate-SOFT/index.html","45ef4cc0b0c72e443cf9de40935ee66a"],["/tags/StrayMoon/index.html","92332ca3c585567d2448696704fe1dd8"],["/tags/ToHeart/index.html","df117e06e5cc35be02558c88de1b072f"],["/tags/Traumend/index.html","5ae0c4ff0f62f5e2aa8a921dbbcd1f57"],["/tags/Witch/index.html","ee42bea69a5f39e4ca5612bc15704966"],["/tags/adonis-project/index.html","9de732a36e05ff801484c672c22d63ec"],["/tags/flash/index.html","f249b9f8738786a2f540dfaa6244ddec"],["/tags/galgame/index.html","11f45db3d6f8a620cf4ea89e25785ddc"],["/tags/galgame/page/2/index.html","aa0b58b3a4f271f2790ec95604fe9af0"],["/tags/gal资源/index.html","5be292af106efd0466ffb21432248747"],["/tags/gal资源/page/2/index.html","b7d20b40a6f4b7f2df758bac989aa5b8"],["/tags/gal资源/page/3/index.html","dfbd9b97796b4d2a75b277699e270a39"],["/tags/index.html","904dc07198dc3c6eab7d71541de1fc62"],["/tags/rkr/index.html","25bd21d137127d6af08620a6adb4cb26"],["/tags/team-eye-mask/index.html","debfade4981b950cd5c1a34a9784c4d0"],["/tags/いつものところ/index.html","2fe326a36eb3aa6738a0c39b0ff866e6"],["/tags/きつねみみ饅頭/index.html","538732fbb300bd72870ff843ded121d2"],["/tags/ねこねこソフト/index.html","e0d472fcd0b80981da6750e417acd4f7"],["/tags/ねこバナナ/index.html","34b3de499d989732507b4ee6867a93d6"],["/tags/はちみつくまさん/index.html","3f6cc87230a4b43f1f816b4fa75a5703"],["/tags/停产/index.html","695d63f8be4486cce3e8e772eb8453be"],["/tags/公告/index.html","fafc81cb58593fcfe028da48d01bd335"],["/tags/同人/index.html","30057b2b56fe34a1addbc15f6cab1012"],["/tags/堀井雄二/index.html","ef7503d424562e7b239e176b36459468"],["/tags/外海なおき/index.html","fc04f0de5b83c3915837360c7525997d"],["/tags/機械式少女/index.html","9449aba0ac38ead3e23781810d9669f2"],["/tags/水仙/index.html","16fe7312b4104bb7d75151b6146d8e5d"],["/tags/片冈智/index.html","27ba3d180d197d46b0b0d68f8b026b6b"],["/tags/片岡とも/index.html","ef040cf6184d44c7e76b5a1842ddbe80"],["/tags/牙の刻印制作委員会/index.html","3b1427a544332dfb39e235f6f7670f85"],["/tags/牛カルビ定食-FLAT/index.html","b11372a767dea69e59c3fdadd0b77c34"],["/tags/牧尾屋/index.html","0b47ea37bb6d56ee856ecd9947fe952e"],["/tags/猫猫社/index.html","acfc75ac663702c82c36702a9f78a489"],["/tags/王宮魔法劇団/index.html","b4e9288ff94d61fceceb8bf75d23da65"],["/tags/画集/index.html","d5c1a846fd479ac5d5463454c1ff0c25"],["/tags/索引/index.html","74f0c4f5775b49de9771a80170dee024"],["/tags/閂夜明/index.html","86f0c1607fea816e5e4b32ceaecb430c"]];
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
