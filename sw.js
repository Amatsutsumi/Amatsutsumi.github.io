/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","375e699662db92eed73e69dc2b3500ca"],["/archives/2024/04/index.html","532f57ca3b88bd17419a74ec87a836f6"],["/archives/2024/index.html","ea9caa32647a97a49c560ff5f591d497"],["/archives/2025/02/index.html","7b3ce6ad9f40154ac398b287c6c23188"],["/archives/2025/02/page/2/index.html","e8dc566e9087ef1cf2df2a80f773bf6a"],["/archives/2025/02/page/3/index.html","a99195de9f29a265718ad5c239d96596"],["/archives/2025/02/page/4/index.html","62fa994b9ee68c830c2df0b50032f0aa"],["/archives/2025/02/page/5/index.html","83f9520537d1d40ed2224bd5b57d0656"],["/archives/2025/03/index.html","18c3464c2c143e3cf521c97c77435e2a"],["/archives/2025/03/page/2/index.html","3949282d84e5dc8fd86761e8a5551f31"],["/archives/2025/03/page/3/index.html","a65e6bcc7be3b722e981594701e11be9"],["/archives/2025/index.html","8a754dd3ca68bc22d08cf60462883f99"],["/archives/2025/page/2/index.html","81b45c4a704f0f5069d6952d45506cb6"],["/archives/2025/page/3/index.html","02cb5dee81a91adffc5b0669c055e480"],["/archives/2025/page/4/index.html","826b71feb86ece673a213aaa49dd0e0e"],["/archives/2025/page/5/index.html","ac6f2cc653333419080995f848ab0fb3"],["/archives/2025/page/6/index.html","e20f05973106ecee4381697664da1afe"],["/archives/2025/page/7/index.html","351799ac075749669cdd894da3c3664f"],["/archives/2025/page/8/index.html","63df97ffec1ba1be5c3030eaecacb1a1"],["/archives/2026/02/index.html","2ce75d8ca1939fa920533b42114ede62"],["/archives/2026/index.html","74a38abfeb1df802207eb515854386b2"],["/archives/2925/01/index.html","40f9bd168e5aaa7fde9a976752a9962c"],["/archives/2925/index.html","fb3c7af5cf2750abba6813bfdaa0957b"],["/archives/index.html","6a5477265d05ea680654e96de4337bec"],["/archives/page/2/index.html","f34072f8f6f0777bae4552b49fdfdf9c"],["/archives/page/3/index.html","5c29745754cc10be4e2600ceebf79f5e"],["/archives/page/4/index.html","2f0ae00148b1309a3c405d1c274460cc"],["/archives/page/5/index.html","ecb978e0929f0a283f3d1d07e6db77e4"],["/archives/page/6/index.html","50b939b6bde4015d6570c9f37b32d332"],["/archives/page/7/index.html","15d580daeb9656dbe3e3d3c2329aa8e0"],["/archives/page/8/index.html","44598c735d2fb2f1497b0419ffb8e99b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","c3c7e539c12d6470442819a9f2f92b69"],["/categories/galgame/page/2/index.html","73c7fc25ddf9eea9ab0656f23f4ae954"],["/categories/公告/index.html","64004f254fc4cdbc7edfa81e8efd4474"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","815d529c27cf1c62d985f5c702ba25cf"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","8452d4c049fea797911c1ddd9cbba823"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","b0f908fa3e6c9609665b15b2eb5c989d"],["/page/2/index.html","3aa4748716203b4e86d23e19f0215bd9"],["/page/3/index.html","c428343eec1bf519a17eac4aa0d3fca7"],["/page/4/index.html","6a0980f843890ef7e63a135e85f248aa"],["/page/5/index.html","750087a41acf2e2ae196831cf7e5415c"],["/page/6/index.html","1e1b21dd508c5d150d11e726311124d5"],["/page/7/index.html","356d6e78f31e5f1edfa5958b30c8b4a4"],["/page/8/index.html","8b10c25228bf69f9f6749efac757b3bd"],["/posts/10c9dd98.html","bfbe603247a5623b29ee91ac8627d75e"],["/posts/1295b569.html","5dd416e6189c015993f0490cc77d16df"],["/posts/1370342.html","ab9337755562d8b82b4b56cf935313f5"],["/posts/15ef14c2.html","3953ce75f44f5b0c59ed4081b3feafb9"],["/posts/15f3959d.html","2577fa2f0d3b494c5095186eb34c57cb"],["/posts/18ab785d.html","85f6c1ac927f7bb64a11b28222d0fe36"],["/posts/1d59b71f.html","c0df46b1da85e8e31b702a58b1bb796f"],["/posts/20b3f3a4.html","5214bdc5ba7c3c7d480f82ccd0c8b1b8"],["/posts/245f1c7d.html","9a3b564d98673ce627645884b4b718c9"],["/posts/252658f.html","599909ac86d2bbeeebaafb5a3c5ef4b7"],["/posts/28397adc.html","4ed0a5f72098cbea73330af0a81351de"],["/posts/2c0a6836.html","537a2e320ec855ee4fd23d7d3f4ee831"],["/posts/2cf620f0.html","7455b467f795e80cee434b18eb9c020f"],["/posts/2e30fd6d.html","6ec3dd61dfc525484042a163718fcf4c"],["/posts/34292736.html","6fcbe422276ecb78c888c122737eb65b"],["/posts/3f7d823a.html","f5006315e436a5597d26dde5c075e4d1"],["/posts/44124a6b.html","ed23cb6d1ae168be49ea9fd24b5b92b5"],["/posts/47abb61d.html","878cd267b5223b16fb0c8983b054a9b7"],["/posts/4b689be3.html","fb7cafb75da30def7bf3f4e7fda8c969"],["/posts/4cf8423f.html","54152ac1b1dfbe355bcc7707966af20a"],["/posts/4dcf85c.html","42615f33f59cc2c89be8f87e03ba5f7e"],["/posts/500cd322.html","bcf6da22e009145817312c9f91b1e4c9"],["/posts/51c9b1ff.html","61370dde707072871b2ecec9c835e99c"],["/posts/52b5b3c6.html","2c44d24edae5f6c8c4d184ce47a61bad"],["/posts/5f6e0c59.html","c975b21b9cdbfb72815753dbf23c21b2"],["/posts/6336a2f9.html","30d02ce94520b71858a89fe35a44b320"],["/posts/6432d61a.html","2e1a2afbba518b30e6859702b28d4897"],["/posts/6515f032.html","f8b90bc948a09b73bbf46eef53d0aca4"],["/posts/6720ccdd.html","b584945fb5b77299d6b90787ef79cc85"],["/posts/6a4b5ac8.html","60329839b4bb273186c0457da4b59f69"],["/posts/6aa4177c.html","1e0c4c0c36a9ff46123b3b63a0a340e1"],["/posts/6b15f81f.html","1eaf832ececb770b1a686161bce44b10"],["/posts/71131d34.html","94e386fd589782608117663574e9ef2f"],["/posts/78a8a8d3.html","049fee086827626d1346cfc90ea12cde"],["/posts/7b41e1ac.html","1f986f5354035a9a2f5ef2e063a685bc"],["/posts/7b51011d.html","34b4f13363f01740c277edd8301a70b8"],["/posts/7e3aa3e2.html","4120e4aa9de846bba01aadfd07226df8"],["/posts/80fe2691.html","ffee0f3a08eb734a4523c025dcc4ef24"],["/posts/81ac52e9.html","381b5938966c3db65ab577105b5916ac"],["/posts/849b40f8.html","448aa97feccfcf2150b44b4f4a908b83"],["/posts/85c51d68.html","1e872d967f404f3f9e05610194733e4e"],["/posts/886f8d3.html","e0e270c12dc53cb82c60ff9501b73574"],["/posts/8ac11b41.html","0d1026032593808c64808a624d22fe55"],["/posts/8dd520d9.html","b7a3eb97e4a3a04bbb19534bd7428acb"],["/posts/8f555654.html","109bfa6c69b0c0344949df1dd89a3b79"],["/posts/92a980c2.html","f9cf0ea93d85b128e7dd088ada5cc241"],["/posts/94d3c794.html","f5a79436357975fa6933358466bf0c2d"],["/posts/97f50eea.html","4d471eec715f726cd84b20fcf796f622"],["/posts/97fca8be.html","4a530702875fddaed07a6be3ed19b9ff"],["/posts/98662d05.html","1615fe3e7bec21f7020da275caf7d893"],["/posts/9a2f6162.html","becd715a2d6ca32ddb8cc7d4535a4195"],["/posts/9b22a48d.html","f586fd13e5fd800d0dc3abdb8cc97121"],["/posts/9cb455b1.html","aef9851802b22d095d0d661e84199d15"],["/posts/9f61c1a0.html","fe6436558ad02ac15d309dd64da190f7"],["/posts/b497b647.html","1e0d85a05f066e4360cfbbcce1401dd2"],["/posts/b5fb773f.html","29441067c41747ef649410cc89f43406"],["/posts/b8d46b32.html","3e179e8da9a70665ce850f5fcdfe669d"],["/posts/c1b2c6c9.html","8e9d6480e5fa1073af8ab82eec9933be"],["/posts/c2111cbf.html","27ce252458ef1b89e7d35ae1811688a4"],["/posts/c316c2e8.html","87677c31c9702611f3207aef3d911dfd"],["/posts/c497a412.html","04a06997f47a0e582c262dadb42f85bf"],["/posts/c5de299a.html","9eb2720356b45e75b24adbff96a59071"],["/posts/c70bba9c.html","46ea75c407bda0c1188596806c6e8f31"],["/posts/cae2c959.html","e70d7e777ededf2b9505b8d81303e3c8"],["/posts/cbebef2b.html","e63d77709b444dae9dc488ff4f71013f"],["/posts/ce25023e.html","aac34363c4b1547c84470c4c2cbb0cb2"],["/posts/d2fd4837.html","d3cf957144b3e4f2795c2e54ca1e62ce"],["/posts/d3233cbb.html","e5eab0283ff08d21d5fd1e2b49e5e129"],["/posts/d3a745a8.html","bb72597737eb83d87c89f63384084147"],["/posts/e3ab6ad8.html","e3ef8fd3fc817be87c4b232493af88a5"],["/posts/e5018da6.html","65ad021ba1411eafa0e246c38f149d36"],["/posts/e5963272.html","5c5c3eaa1af5e0dc7157af1b10fa2262"],["/posts/e624b065.html","a098f5e9499fccc5dbf0b6cc390e7e33"],["/posts/e91abb63.html","be44b4efb57e89df128f8821681d4df5"],["/posts/ee1ed673.html","f97be3bfd26d9b0725a36ee10fb6bd25"],["/posts/f0c3ed61.html","6b8f5b87bb103271c494c32aeb7c045e"],["/posts/f21e7f84.html","b708f975f03dd339977505110d710c2d"],["/posts/f230b0fd.html","ca7ca621ea5a4eada39f990f0a5a8b5e"],["/posts/fc04d0d4.html","5f725805f4aa0dea45134014606e9a05"],["/sumire/index.html","5bed593f4d6cdc2ffba8799f864cbdbf"],["/sw-register.js","8af0f5c0823efc565eb7ace51084e53a"],["/tags/BL-Game/index.html","f58aa153642c9beb3b3737c510f062e2"],["/tags/CHUNSOFT/index.html","524e215e2be52015f1cdad197f67edfa"],["/tags/Cherry-Pie/index.html","4590b0ded64c24d6199e24ac65e955bb"],["/tags/Circle-Mebius/index.html","8e97b1308289526222935011cfde3193"],["/tags/Dopamine-Software/index.html","458ec7638c7cad0a68858c5d310a10e4"],["/tags/Dos/index.html","9fbabb7aa15b7d805973508ffd6aa4f8"],["/tags/Kanon/index.html","594a74755f18fd030d71789c322c6313"],["/tags/MANATSU-8/index.html","2fbb61e66d38af44eb5d0f42af41a7d4"],["/tags/O-S-I/index.html","1a6ba372f23bbcb3cc7d9431cc3470d6"],["/tags/Omegaの視界/index.html","0469e3c54cdbc70f2a4754a33a0b4cd7"],["/tags/PC88/index.html","91589409c12ed904f1056ed1d57dab7b"],["/tags/PC98/index.html","e9d343c3060fb2436b3edd0efc87545e"],["/tags/Pleiades-Company/index.html","c8cdeeb4509cc963a518381da1aca547"],["/tags/Saihate-SOFT/index.html","1f225891f646d680d532491e59567577"],["/tags/ToHeart/index.html","d1a7c5171ad839d446b72c336e08c030"],["/tags/Traumend/index.html","aa46eb771f7d3f0ff85235c95607554d"],["/tags/Witch/index.html","6d96545f1c995cf83934166b02162704"],["/tags/adonis-project/index.html","53bb92d40af5a092b012ac93f0163803"],["/tags/flash/index.html","0d60fe6076e1f97fb0f007ad40db3452"],["/tags/galgame/index.html","9240d3cb92fe7b37a17473df70006b3c"],["/tags/galgame/page/2/index.html","11e3e9723688d134e6e88f0f25375139"],["/tags/gal资源/index.html","02d3baa528f5d5bd67c98a11526d4151"],["/tags/gal资源/page/2/index.html","e0a8e6b2fd8a0132b5f9f5a99d45563f"],["/tags/gal资源/page/3/index.html","61fe417030448d85f8d3836213de29bc"],["/tags/index.html","2f2e226a4ac2d0719ec185bf03ff7dc6"],["/tags/rkr/index.html","3caca0338dab5dd678b98f7ce9b4530b"],["/tags/team-eye-mask/index.html","eb3aff5265b391d16a753fd8f713f4fb"],["/tags/いつものところ/index.html","c7353970d293ce905099e48502efe8bc"],["/tags/きつねみみ饅頭/index.html","a67fb051be6ac9a3ea530109f6b43aa2"],["/tags/ねこねこソフト/index.html","646629615ccafa6e2109f4fbd990335c"],["/tags/ねこバナナ/index.html","93658988d7c811c7faf166363c690fc8"],["/tags/はちみつくまさん/index.html","cfbdc42e370c128c284900b7015b5687"],["/tags/停产/index.html","357bdcb74834fd24dc511b6ff02f2fe4"],["/tags/公告/index.html","920eb1f68ae8d7fce1f9dfd123bdea91"],["/tags/同人/index.html","820bf4c0d613062916b910d0f5cf566a"],["/tags/堀井雄二/index.html","a973ad1908cc437d58714807d0359220"],["/tags/外海なおき/index.html","e22a28890564a8b2bfd1cb7b048a5f21"],["/tags/水仙/index.html","811446bb9d7fa0e808e3788efd51ed86"],["/tags/片冈智/index.html","c390b6c263b02762348d18eaa5194126"],["/tags/片岡とも/index.html","f85b2640a4004e1d23f10d244a9aea04"],["/tags/牙の刻印制作委員会/index.html","c75008c51f518e789651944808f4dafb"],["/tags/牧尾屋/index.html","12592feced4089add2a3c29e6ec47a7f"],["/tags/猫猫社/index.html","1437ad849baa3bf54516d8c3ac137980"],["/tags/王宮魔法劇団/index.html","fb93f5fd7634e9cc43077a0ed5d5c31d"],["/tags/画集/index.html","c604edffdb1abf6a8b29b0c5d3be092d"],["/tags/索引/index.html","5f67af20a58065c18d65811fde3a5f7a"],["/tags/閂夜明/index.html","d56c670be79f4ea69dffa88e2f5647b8"]];
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
