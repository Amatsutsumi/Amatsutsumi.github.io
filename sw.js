/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","930d5141211fa0c8ea589870f6bc7c20"],["/archives/2024/04/index.html","6e5b114ff3566801acf9c6f2ce433168"],["/archives/2024/index.html","ef4c5b186815c4fb3d027a137e239f3b"],["/archives/2025/02/index.html","c7aeb0045801e497cff0d74e7644bdba"],["/archives/2025/02/page/2/index.html","50290949ced014b007aff7c2232d33d9"],["/archives/2025/02/page/3/index.html","2a9a521a93c86df2947f800c781cf20f"],["/archives/2025/02/page/4/index.html","ade1ccf1505b67d9f2a76a791f959b31"],["/archives/2025/02/page/5/index.html","231e942f5afa2315a289e2921654cb27"],["/archives/2025/03/index.html","f11f36504dfec6e217572fbd7b207551"],["/archives/2025/03/page/2/index.html","454155b1eca1f49bed07583bef745930"],["/archives/2025/03/page/3/index.html","9835cf53c82e23074d8e12e3fc73082c"],["/archives/2025/index.html","dbcdc63ef5c05fda1f945982946a3ed1"],["/archives/2025/page/2/index.html","fe0677db8446957d93795835284a5e3f"],["/archives/2025/page/3/index.html","ce15ea08cda9619d5f4ff2ae1cfa558c"],["/archives/2025/page/4/index.html","a4dba2601e1c5268a5966bf8e1b71630"],["/archives/2025/page/5/index.html","b747ef46a321019220c90b3a66916f38"],["/archives/2025/page/6/index.html","a9d9c92f370c4c09bf688cc5f714710b"],["/archives/2025/page/7/index.html","f629a15817280407420af88e325ab966"],["/archives/2025/page/8/index.html","aab26dd667fa91c9ac66f7de5d575b9d"],["/archives/2026/02/index.html","b4e45658729413cc3859633a5f498a1c"],["/archives/2026/index.html","2698f0c3f63740545117770262bb22d4"],["/archives/2925/01/index.html","e8c66873537757871162211d1391df36"],["/archives/2925/index.html","eb2d4272d5243f31616e3a658d841a34"],["/archives/index.html","4697d5b1efc40fcbcb911b000fc36ffb"],["/archives/page/2/index.html","87aaf0e76c76052afafd5203be543262"],["/archives/page/3/index.html","e4f970b0b154e4939449fb737500f322"],["/archives/page/4/index.html","d6a03ee19344647e77a0b9200b641731"],["/archives/page/5/index.html","162f04510dc9fd0c1ff5ce700bf03ebe"],["/archives/page/6/index.html","6d16bbdd71f2504d0bdd5ef90cda01ca"],["/archives/page/7/index.html","4a8852fc9dd2d7c8e005f0549626a0d7"],["/archives/page/8/index.html","1631ca72bf2a371c3f2126a3d54843c4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","5b15786293bcb7fd798f09d40a51da50"],["/categories/galgame/page/2/index.html","5f5c8679d267e3171af9a09f3423076a"],["/categories/公告/index.html","4a6bc930f069ad2835b861940adf4028"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","97443fdb5d1e3768690358fe8ef6081e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","fc548a1c9a104b295431766ff204e1dd"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","73534d7ad1c611083300fabf948e9eb2"],["/page/2/index.html","fb91f504bbdd7080cabbdd332f09a6c8"],["/page/3/index.html","013c6131ff766cf76ce1c5a40435651f"],["/page/4/index.html","e9cbf3e771cdf6e2c003ef6c0d714f78"],["/page/5/index.html","7d2e311557dcd06d1afb31d1953eb37b"],["/page/6/index.html","92cbe1062bccca0a3172586b768f615e"],["/page/7/index.html","fd4f26d9e6100c726099959ba4581d0f"],["/page/8/index.html","619fc6ca712c3e4e49a7248d62441afb"],["/posts/10c9dd98.html","8fd6b803019838ddc30991a8f87740c5"],["/posts/1370342.html","2a31361bc38952fd0fc9101284f3fed3"],["/posts/15ef14c2.html","8c9d087a19cbd4f3b70ed975aaedcc2a"],["/posts/15f3959d.html","57a758dedc1fbf551e6b94977456dcd5"],["/posts/18ab785d.html","b48140d075becd421e6e65112d103253"],["/posts/1d59b71f.html","025e201b0602038a2fcbbf344bbee98c"],["/posts/20b3f3a4.html","3d9fcb87b16db64fbf4c141aec7208a2"],["/posts/245f1c7d.html","04cba152fc10fe9be1b7be2172229f25"],["/posts/252658f.html","47289669036792065f86299d7188391a"],["/posts/28397adc.html","e750d771beaf892cb93d95274fec97ff"],["/posts/2c0a6836.html","4b6b518b1fe6f90e0c4b5f11303fe999"],["/posts/2cf620f0.html","55784295097b7a9806d413fd6c83c9ba"],["/posts/2e30fd6d.html","81d6d7abba19570d5cb11418fe2e30e8"],["/posts/3f7d823a.html","e37b8540925a95b0fcf6ef852cafb601"],["/posts/44124a6b.html","007c6ab58888d98d2b7a0557971699f7"],["/posts/47abb61d.html","0ec8031db7af7d34142a89bcfc0d10bf"],["/posts/4b689be3.html","9a2b06de369b5b53c55c96d70ae64beb"],["/posts/4cf8423f.html","42b144e75b49a5491592e3f2c2fe5102"],["/posts/4dcf85c.html","9da1e402627450043a8dcc75c254af02"],["/posts/500cd322.html","fbee1a6c872a8a0494989f14a6fcaad2"],["/posts/51c9b1ff.html","79336c3f14d513c240f687f283897003"],["/posts/52b5b3c6.html","3470e179f18918cd9c4777f483546a87"],["/posts/5f6e0c59.html","5aef0a1bd1c1224c15d00f0cfc31414c"],["/posts/6336a2f9.html","eaaf1df9763428a7584ba5ff72b49dc5"],["/posts/6432d61a.html","7bc6b22599f8fb2a17311ad7c20b6de5"],["/posts/6515f032.html","af9e0902582f143808ec6c6d272d00cc"],["/posts/6720ccdd.html","1edca8c37c4e2e16ddd6c2f5c4cd9bee"],["/posts/6a4b5ac8.html","6146a6c48a916e1d84e428f0c6021b83"],["/posts/6aa4177c.html","392a7da589958182827e8acd7759fab8"],["/posts/6b15f81f.html","0f0837a6c3be424af0b686ac6711b869"],["/posts/71131d34.html","49634f0165b0918177c7a7b06412372c"],["/posts/78a8a8d3.html","f8342c1e5ada68173b421e6cc6ac371c"],["/posts/7b41e1ac.html","6a036150632b42dfc64f9871a980f7e4"],["/posts/7b51011d.html","4ae2e12f71cdb3c487aa496fccea9b15"],["/posts/7e3aa3e2.html","6ec6e24d166bac0db281106899930394"],["/posts/80fe2691.html","5e0a3c330de827e0fd2525bfd35bb748"],["/posts/81ac52e9.html","b14612026a8c1a5b7572951aae198003"],["/posts/849b40f8.html","a3291379bf30cdd0497eeebc2f5866db"],["/posts/85c51d68.html","8d7fb4fbded0e5e778904b915c66197a"],["/posts/886f8d3.html","87c2bdaaf104e710dd76bc0c84a0e11c"],["/posts/8ac11b41.html","2eff478de75fc68a1edb05a8d03de271"],["/posts/8dd520d9.html","01abc32852ddbdd177181c9fd60f1eea"],["/posts/8f555654.html","d0f3ebe0696fc17f4fa7f4d3bf30f776"],["/posts/92a980c2.html","12b54400f6052da59330926a68959693"],["/posts/94d3c794.html","cc09e3d6c0d5917014f011365bb51160"],["/posts/97f50eea.html","72a001a7a84958ebe0f3810d87e6d0cf"],["/posts/98662d05.html","76b6049251bde97cda1267f9c72b64bd"],["/posts/9a2f6162.html","78f0a5ff0860175307a889e97669d6be"],["/posts/9b22a48d.html","d79a8a56c78118d00ae1c0f34f76d9bb"],["/posts/9cb455b1.html","796f6661990e301f55636699cc43a350"],["/posts/9f61c1a0.html","42da938682883b063a1067a123d53444"],["/posts/b497b647.html","1dd180cc28867ddd80e2a59c8d1fd755"],["/posts/b5fb773f.html","0e337745b9efb3fbecb3a17bc28f60a2"],["/posts/b8d46b32.html","5760c4edbb9abc58c75318159a01967c"],["/posts/c1b2c6c9.html","165e78f6aedd2c02e0b79dc19a0ea243"],["/posts/c2111cbf.html","b7b9a623b170ae4a30a517818c99711e"],["/posts/c316c2e8.html","1bd1ca83f7004dd4379f908edaf5e78f"],["/posts/c497a412.html","68b75ec1353f248bcf5e7b6f3677e775"],["/posts/c5de299a.html","1cf2097bb0433ff49c1b573b48e94a63"],["/posts/c70bba9c.html","db8f21bac577d8dca1c31a3208c5327e"],["/posts/cae2c959.html","8dafae7cd9b90253a3180fabafe1e970"],["/posts/cbebef2b.html","9cdaeb18d0902e9c249f389c496b03e9"],["/posts/ce25023e.html","aee371b0cbc6f5c94102ca2f8bfc2868"],["/posts/d2fd4837.html","3f5c949a44a2388fbc0afed104b09f65"],["/posts/d3a745a8.html","5b0e17b747d5bc1609c193fdebe202b0"],["/posts/e3ab6ad8.html","bdbf06eb9f890c600775ba3a53cdf7a2"],["/posts/e5018da6.html","4cc95109f978746cb958ed91376cddf8"],["/posts/e5963272.html","032d464ce0b0daa8f627df80c2faf6f4"],["/posts/e624b065.html","885bf608850ff3dc212ae4cbd0584790"],["/posts/e91abb63.html","79e04c78cf803cb40bee7a006e567826"],["/posts/ee1ed673.html","7d0e3ba0a57398b20a46d04f59936684"],["/posts/f21e7f84.html","93846c9a58121d0698938311f0c63c20"],["/posts/f230b0fd.html","617448115d94d33ab65e999657ff97da"],["/posts/fc04d0d4.html","c14071612bde0d4ee598687e54ca0808"],["/sumire/index.html","50c50488e3169e043d0213ebc012b6f9"],["/sw-register.js","37293aa32d255ecfe578822abdbf72b1"],["/tags/BL-Game/index.html","07c35180065970d5a1fa412f414308f5"],["/tags/CHUNSOFT/index.html","fc7ff1eda603f1e3e6e40d32a4f8eaea"],["/tags/Cherry-Pie/index.html","8142c013d95fa2ecb7033868c377a24d"],["/tags/Circle-Mebius/index.html","5fef2a6c5a5205a2722dbc72fb7f7a3f"],["/tags/Dopamine-Software/index.html","6a1b0026c80f916de4925c6903bf883e"],["/tags/Dos/index.html","274ebf5265cbd68ed8c97b9578934911"],["/tags/Kanon/index.html","6845de285f3b69e52869fefe94d593bd"],["/tags/MANATSU-8/index.html","744153600e559af0584f592456fc1973"],["/tags/O-S-I/index.html","d7115049445cab49df12d978bd28138d"],["/tags/Omegaの視界/index.html","69307a03938f4db831be011bbf8b5250"],["/tags/PC88/index.html","7891f19b76c9ca1c604cd24b92a753fa"],["/tags/PC98/index.html","d713e256779ae2552e2f11eed26e9483"],["/tags/Pleiades-Company/index.html","355dbcd8a0684a0af35413a6492b1d37"],["/tags/ToHeart/index.html","861c960e93979aa969b060f193474caa"],["/tags/Traumend/index.html","7fb1e2a71ea6a64f40d6ad0992612467"],["/tags/Witch/index.html","5e7067a29ac5edfaaec06e81c8d28af5"],["/tags/flash/index.html","d67a6d7b16c7eae4db84512106260968"],["/tags/galgame/index.html","bd287f5eeca226c22fbd68b06011d4f3"],["/tags/galgame/page/2/index.html","aff9eadc06ca847c91ac77ae507f89de"],["/tags/gal资源/index.html","74dbe385d954a23a6c57d29afa68a2db"],["/tags/gal资源/page/2/index.html","0ee4d5b745a3fa8cb7576ce890cf20cd"],["/tags/gal资源/page/3/index.html","a55366d01722cb8a5188a8ae257175f2"],["/tags/index.html","d309626a035b8594002adedc1503ed2d"],["/tags/rkr/index.html","decc419c2ab34cb2f25e108810147e5d"],["/tags/team-eye-mask/index.html","1ea580b43a295ebd9fd1de53c0e4bdc2"],["/tags/いつものところ/index.html","bfa22196c5f332cd07997da79ce3f401"],["/tags/きつねみみ饅頭/index.html","3e98fdb4e2574f2d8dc70415d06c3dee"],["/tags/ねこねこソフト/index.html","dcc161518d67476441f6309a2968fe09"],["/tags/ねこバナナ/index.html","f2c21df12b1ca61776bcf8f9caf6956f"],["/tags/停产/index.html","2e2f8a1e684580e2ccce07cb14cbd0e5"],["/tags/公告/index.html","cf935ef1dca676134fda64d5a8922900"],["/tags/同人/index.html","4e3f5138605d99b31e3529fd12a9d818"],["/tags/堀井雄二/index.html","87adec395758c223b7e07cfde93bd7e5"],["/tags/外海なおき/index.html","ecebb496fc081991cd933fe6d9b18f16"],["/tags/水仙/index.html","588d03c9d4e409e404ac73c8f06c1f11"],["/tags/片冈智/index.html","c656e7864de19e6b0c8c5af08d2ede62"],["/tags/片岡とも/index.html","d9364b3edb0bd4361a8bae552cc9ebfa"],["/tags/牧尾屋/index.html","8b2f93b966db019276882a3cd6c49e7a"],["/tags/猫猫社/index.html","dd478d6780966069fff98f2605ceedf0"],["/tags/画集/index.html","ee84804590575c2b9ed806da841600f3"],["/tags/索引/index.html","428e61e4cfd551799e47445f1fa5da94"],["/tags/閂夜明/index.html","2eb1e7b58c802a2c4f5ead5a56950d99"]];
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
