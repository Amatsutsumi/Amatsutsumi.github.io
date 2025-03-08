/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","473ac13c3186cd260c344fe1e7a1d997"],["/archives/2024/04/index.html","5d72095cf2c9add7b89dba258b1c503f"],["/archives/2024/index.html","e95a7b42e1b49b495b7d232adf24c9f5"],["/archives/2025/02/index.html","4a4c79d7a905af2363b1802b36f3bb73"],["/archives/2025/02/page/2/index.html","88a8ed62025740a8058439ce8b8b6158"],["/archives/2025/02/page/3/index.html","667abc6a4175d54da76fadc8d65ae527"],["/archives/2025/02/page/4/index.html","f1ed93333905364e4699ac02ee335c31"],["/archives/2025/02/page/5/index.html","bd153931aa6a961f8e0b055847835d4f"],["/archives/2025/03/index.html","4a5f5308f852dcade3b62faa8b331c16"],["/archives/2025/03/page/2/index.html","3022b4932a30702f36a29968edf6c672"],["/archives/2025/index.html","6e4fd0019968be3360d1d2296873e843"],["/archives/2025/page/2/index.html","32957f43458fcaa6c04aac5ae696a1f3"],["/archives/2025/page/3/index.html","4894c36d954de020b8089bad0036efa2"],["/archives/2025/page/4/index.html","a448fa0c8bf626b9535e61b5a1695e21"],["/archives/2025/page/5/index.html","209f7143d716d65c92d2c98c89a6ea0f"],["/archives/2025/page/6/index.html","1c93e08abaa23cfed365e8c85698464f"],["/archives/2025/page/7/index.html","1a256b22cf404c789f29d636406c0da3"],["/archives/2026/02/index.html","6b0ce35542fc9ecbf7ff762978bf68e5"],["/archives/2026/index.html","acee9d19344fcd6f92b4a792ab99f735"],["/archives/2925/01/index.html","c57aa41799ba27794aaa2d9adaa82d32"],["/archives/2925/index.html","3802ddeb2e1f55799664034fabd7fa70"],["/archives/index.html","62a799765496ff2f2ae1a65bf87ddca6"],["/archives/page/2/index.html","8d1e0cdf891be7154d0edf8254ec7272"],["/archives/page/3/index.html","48d850b4c63263ccb7538aa2400472a7"],["/archives/page/4/index.html","76f6850b0cf0c8662448af4d74e2f6c0"],["/archives/page/5/index.html","b00f3cfc8d219d00e009a43312291492"],["/archives/page/6/index.html","48694f247811b64888a87a87fc929381"],["/archives/page/7/index.html","b766ccd29b70ff7fcefb309925235570"],["/archives/page/8/index.html","8dbf781534cb1f80d937e5d9b932ae02"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","0dc58dfaa0bd5f99d7b07b1613ad3ac3"],["/categories/galgame/page/2/index.html","691b515d9c99baad1ed9aedcb8811fa1"],["/categories/公告/index.html","957c875c61c4d211e80bd8800f9bd172"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","95d43e125e5c7c4f1c49dc3da19f3271"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","f40ce9f33e5df39e5c210eaa51a8a980"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","129d8f9ef05288fbdf778c5cc04d742c"],["/page/2/index.html","2b373e60ae6a78b1f3b8870c2ed048ec"],["/page/3/index.html","f211da16bbddd6e9fd490d8784be7d7f"],["/page/4/index.html","5308d4015347e52cfb331c528f03c1bd"],["/page/5/index.html","71e3ac6a0b31c3f3a8e205ded93d1a56"],["/page/6/index.html","6746a8f5ce7865d94233ec25e8aa0a5b"],["/page/7/index.html","cff11bd3ec1511194a5da5c14321ae23"],["/page/8/index.html","8ef9920e2dec3e41cd9967af38fb7129"],["/posts/10c9dd98.html","37fa4e49ed0043fb71f1a1035e0d9e53"],["/posts/1370342.html","42dbbd9de3fbdeba0510da77bf384ea7"],["/posts/15ef14c2.html","2b5adf68c824ac65df46d5cfa6ab99c7"],["/posts/15f3959d.html","2fc9f395c9b93a9f51f8f37b94e06e2d"],["/posts/18ab785d.html","5933d106ae9572f7a7af4f3a7c49717b"],["/posts/1d59b71f.html","6c86b18a1b9f090e22709d2653f3a0a8"],["/posts/20b3f3a4.html","57531f60a7af3168dad2e870951a46ea"],["/posts/245f1c7d.html","a8f299a95278a091a46076f8cce385da"],["/posts/252658f.html","e995286569bb818262eae04a61a5168b"],["/posts/28397adc.html","ee469e2a701e06fb1713b355fb236eec"],["/posts/2c0a6836.html","4f751d3b070361b394d19a44bb30fe70"],["/posts/2cf620f0.html","da684a8b68d4a6231373cf4bbf91801f"],["/posts/2e30fd6d.html","cab3466ff189e2bf3e7c00a443480ba7"],["/posts/3f7d823a.html","7aed5b06e154b93b013ab57225a7c8ce"],["/posts/44124a6b.html","58e26d6d409fe79a4f75bcd610de4173"],["/posts/47abb61d.html","b5b0e0ec95999ebd8b1dab06b38e23e0"],["/posts/4b689be3.html","aca8bc41635bc6ab7594c2e4820c894b"],["/posts/4cf8423f.html","f2dfbc178cad08bbed8d8884e20f1cf7"],["/posts/4dcf85c.html","7ec2182487778655a8fa0b439378bfd9"],["/posts/500cd322.html","330e2aab3fe1dacc305fc7eb44e96152"],["/posts/51c9b1ff.html","908d2d9cfa72dc059276534e742b1886"],["/posts/52b5b3c6.html","b79448a8ed67e353528f40bc378936ac"],["/posts/5f6e0c59.html","bacd75c190b3e16bd3cb059450e3d894"],["/posts/6336a2f9.html","0d109d59cdbbde1fd332851aaf7ea18b"],["/posts/6432d61a.html","0e33e109d2cbef07a80606420fae9262"],["/posts/6515f032.html","0f3a592544e451d176f5a6001d9d6dae"],["/posts/6720ccdd.html","4488c89582515dc18271578554e1855b"],["/posts/6a4b5ac8.html","aa39d772be81eb5721a90a3b4a6e237a"],["/posts/6aa4177c.html","0ad0563ac3c18897c8e1a3368c9cd8b5"],["/posts/6b15f81f.html","e4e47399449ca6eccf3b3efb5e01af67"],["/posts/71131d34.html","db10f9134b7cbaf3ca0aafafadcf44f6"],["/posts/78a8a8d3.html","98ed5827c503ffe02154a4b191306b85"],["/posts/7b41e1ac.html","08b77d6e1f4f56147718afea50fd2035"],["/posts/7e3aa3e2.html","d690fe6d7cfdf5c2a1022a1a552a463a"],["/posts/80fe2691.html","b0bb504f4b0ade38030a9232f41c0e42"],["/posts/81ac52e9.html","8e6dc148cec0add3ac193edb6f969ab9"],["/posts/849b40f8.html","aab7b54d4b5efbb4d5122335174b0cd3"],["/posts/85c51d68.html","7ade2ccd929b74b2bc4053a24305ff5a"],["/posts/886f8d3.html","b0ac9f37ef5182c5a8bca56b7edf64f5"],["/posts/8ac11b41.html","c0da9c248349522be4257efb50abbbcd"],["/posts/8dd520d9.html","efa1400c5efa668ee909511e525624ba"],["/posts/8f555654.html","a3b43d694e8ccbc5a11bdcee2a856b0b"],["/posts/92a980c2.html","cfa0afc02cb4dda2df5fff1e94979266"],["/posts/94d3c794.html","beeb0da74069c19f2968bb586f1173dc"],["/posts/97f50eea.html","519c958e309df56462d94e1fc1a7b0ba"],["/posts/98662d05.html","fce029d0c5b05e8dabc4790e28431c85"],["/posts/9a2f6162.html","ae6146893dff7075ca3c5117c3a287d6"],["/posts/9b22a48d.html","d835ef1a865d998dc913b9fe95f8da15"],["/posts/9cb455b1.html","36178cc786eac328bc135b0d6b711dd1"],["/posts/9f61c1a0.html","dddc8fd60d5765b03278dd366e0544f9"],["/posts/b497b647.html","092cb03732a8ff23a3cbb5988dd4eaa3"],["/posts/b5fb773f.html","8075b8327dd9aa0792947ae109676bdf"],["/posts/b8d46b32.html","856879f1feb2f83f7b022aaa7de36d19"],["/posts/c1b2c6c9.html","07f1524e1b859aeaa65732e96e519410"],["/posts/c316c2e8.html","889587d9aabc8a8509f5572a828b359e"],["/posts/c497a412.html","e7560d47d70caebb384f3cb0b8b5ad7b"],["/posts/c5de299a.html","8e764eab25f4462b4b61fdec4005c8f0"],["/posts/c70bba9c.html","897bb74cd0bf1ebebac617b80c7127ae"],["/posts/cae2c959.html","5428e101e7be7b1920c6a2b2f231f228"],["/posts/cbebef2b.html","b8afd218a0544a8e463626f1330195cf"],["/posts/ce25023e.html","37d8b0fd0d76679f068698e6c7288040"],["/posts/d2fd4837.html","d3c1638bd50bd8c1ecf4886bdccce5bf"],["/posts/d3a745a8.html","827977ce0ca7ba7cbfa52d18f520c23f"],["/posts/e3ab6ad8.html","50728696fafa75b6817f6b96a1a062be"],["/posts/e5018da6.html","fd66e3b82f5699c6bcbb101f7e2b0578"],["/posts/e5963272.html","67843a62787c09df6a4bfe0ca243190e"],["/posts/e624b065.html","9e1fba57d046af3dd6a92839b0443969"],["/posts/e91abb63.html","7118d001afe470d60dba311eb4bfb558"],["/posts/ee1ed673.html","8e495250f5eb6eb0722de07df3639efd"],["/posts/f21e7f84.html","31123e4f1f39d77b0561d77a494b8702"],["/posts/f230b0fd.html","2d66b7afbd12b99f2e04208478bcdea1"],["/posts/fc04d0d4.html","700fa4adc9ed5a54bb0e1972b79c3c99"],["/sumire/index.html","8ff1dfda2b29acc4d87571aabb9c3d47"],["/sw-register.js","93f710584abf0dfd316a69cdcd8e21e7"],["/tags/BL-Game/index.html","9d3f1d32795262fdfeb89b09ab3621cc"],["/tags/CHUNSOFT/index.html","a493cebb2c53c41d785184988c3bcbd3"],["/tags/Cherry-Pie/index.html","a540041d7c3ae769d68a43faed517827"],["/tags/Circle-Mebius/index.html","ab245969adef3962b3733737598c16c6"],["/tags/Dos/index.html","89cb69c6b1638e2e1a57844f83aa74b1"],["/tags/Kanon/index.html","6e7c84d0ab5605de94caafd7daa77429"],["/tags/O-S-I/index.html","42a7a189facc3597c4390b3bb4154941"],["/tags/Omegaの視界/index.html","900cf8bbc9f8e1d40e379a407486f1eb"],["/tags/PC88/index.html","9fa9d4127d5789b898ce45c4b57cf677"],["/tags/PC98/index.html","0aa058028f0237783a1503baf10a2656"],["/tags/Pleiades-Company/index.html","a2e68672fcb73cecdf780a50f7b6402f"],["/tags/ToHeart/index.html","4ef8d4354bc26f4b5c80c05c94c1b3d3"],["/tags/Traumend/index.html","ef64211dd6678d5c245dcba6076da111"],["/tags/Witch/index.html","decbd3243d0a9a80efbbbd86ebb9c007"],["/tags/flash/index.html","ad7542e1f80ecb6c5aeff59fa3c95ece"],["/tags/galgame/index.html","b8340105da1e3f86c4b69fc4fdf2823e"],["/tags/galgame/page/2/index.html","0ecc3441df49866d9dd2e67088542a63"],["/tags/gal资源/index.html","48daf1f100488f114b9f17932907173f"],["/tags/gal资源/page/2/index.html","04adf67fb1b7d6e9e665a40dcfc2af1f"],["/tags/gal资源/page/3/index.html","0bd83fb3eb66acbabb0e23ba81c3ae8b"],["/tags/gal资源/page/4/index.html","eb1a65b65983934df883ace1d42b366d"],["/tags/index.html","1ac55921d43666d38d7e79a0527ddb75"],["/tags/rkr/index.html","d16291f300249c93687b0f292e0d0ab2"],["/tags/team-eye-mask/index.html","053623487976ec3d3079091a531d4b37"],["/tags/いつものところ/index.html","065ae3c8dba111a94e4ba957af52048a"],["/tags/ねこねこソフト/index.html","d938528aa5bb251fcce4770aa05808da"],["/tags/ねこバナナ/index.html","975b94ec803316fd58e6ce2e6fdba58b"],["/tags/停产/index.html","f76376cede5cba3f0768ec2d839b1231"],["/tags/公告/index.html","497d9fc841ee1e1d3669f95f79150861"],["/tags/同人/index.html","6196832318b199fe3c2ba8d693197fee"],["/tags/堀井雄二/index.html","d4b4e22e7c6abeca3e9544627744df30"],["/tags/外海なおき/index.html","e7af300df067ebd4d7b2227a9e32b3ab"],["/tags/水仙/index.html","fa7f5a05b37efbea62b8b90db5c1a564"],["/tags/片冈智/index.html","e61057c5a0b2338737b43b4977096894"],["/tags/牧尾屋/index.html","88dde0593fdf2bc05c813e7c137b4f5a"],["/tags/猫猫社/index.html","2a1479b2eb33d57969cb58b2d2ece96c"],["/tags/画集/index.html","29cfad3f54fd404847cf37d37b985bda"],["/tags/索引/index.html","75ea5662054c74c23710bb64924000aa"],["/tags/閂夜明/index.html","5870d16df7f93af136b2cb764f5d74de"]];
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
