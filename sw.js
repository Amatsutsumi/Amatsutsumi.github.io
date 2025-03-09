/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c45887afd001de508251e5436eaca4c0"],["/archives/2024/04/index.html","7255b3d966a2198baa8d8d27f3672e16"],["/archives/2024/index.html","34d97885f5c84622f3440cf3fd468a75"],["/archives/2025/02/index.html","9f853c20af96a13ffc127cc8ce5d8eff"],["/archives/2025/02/page/2/index.html","736ca052d1b03c57bedd8223c9e73d45"],["/archives/2025/02/page/3/index.html","a0a61251002a335631ea89fd55201895"],["/archives/2025/02/page/4/index.html","12094eefeeb73a3a39fb2aa834616f93"],["/archives/2025/02/page/5/index.html","e2402002dd156c44c3c207e5ccd10f86"],["/archives/2025/03/index.html","8f63de7440c5555b26150a07fa52738b"],["/archives/2025/03/page/2/index.html","82f1351e34a02a95567f3815203f5e0d"],["/archives/2025/03/page/3/index.html","4c047c367bab2ff1bc7f754261e21e69"],["/archives/2025/index.html","be3de8da31bc3cd36b06d270efb359ae"],["/archives/2025/page/2/index.html","e91622d1397343dd9abab26b63c2e808"],["/archives/2025/page/3/index.html","6acd68fe1dd8eb97e418b70fc105fa21"],["/archives/2025/page/4/index.html","3676bf90eb57b612825af0d3ed8e3a4e"],["/archives/2025/page/5/index.html","0c6a319189a5ddee87238d193bb5b741"],["/archives/2025/page/6/index.html","786de477b2328a49129c54a58cb18f69"],["/archives/2025/page/7/index.html","05bdce87879b2d8c0f4cb713c72a2583"],["/archives/2025/page/8/index.html","e60e3e7c497ca292a57a1879f688043d"],["/archives/2026/02/index.html","58b59032004dd8e8000fb23a6556b18a"],["/archives/2026/index.html","94742d917f682ef2f400883145ee8a13"],["/archives/2925/01/index.html","6fbbe802979f702090849da74ddd41c5"],["/archives/2925/index.html","422432915886f7b54c5fc96803b50438"],["/archives/index.html","0f63492ec47608218ee8f2dc4679cd6b"],["/archives/page/2/index.html","822e18a33c3eca98e2b75c7ec8c12c2a"],["/archives/page/3/index.html","0f5f7d48b72444b3edda3507afa4bcb3"],["/archives/page/4/index.html","014407e5210ee0ff5d6a9361f585efc1"],["/archives/page/5/index.html","ed06002f4988178bb43ef4bc88d268e6"],["/archives/page/6/index.html","f73cbde10ae52a844198e09d7ab02734"],["/archives/page/7/index.html","48f0824fcfcd484dda95f40e2b20d25a"],["/archives/page/8/index.html","4d55f6e1a060144df8ac0922980546cc"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","b7fe006b0f83ff6833f7c6a9854d3f74"],["/categories/galgame/page/2/index.html","e5ec732c9d60fc135f65b3b8df52f658"],["/categories/公告/index.html","1c534d762af989dbc30d8af00bf653d9"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","42d58d7a2134666b13171f0486b7beff"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","1d57740cb95bc11e31d77f9a1c1536da"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","45b6091d799b747fbced3aff5321365f"],["/page/2/index.html","aead55f1cc192c4771875cbe29004022"],["/page/3/index.html","52b55a11df5d3da8e8d2c3a0bb31f45b"],["/page/4/index.html","bb52cb7b6b1684d92171478a8c8e48f6"],["/page/5/index.html","d72a0a649afd7014c038ea26b8fd8373"],["/page/6/index.html","bbbebd97283a4bee9d747338eac613cd"],["/page/7/index.html","ea1500f0c6316c1537ce6eed5d68683d"],["/page/8/index.html","ea07c28ae96debcc9b0524eff388b9f2"],["/posts/10c9dd98.html","2cb4a8873167ed4675072edec8823220"],["/posts/1370342.html","0bcb8ea4a6c09f1839455a1c6cdb8593"],["/posts/15ef14c2.html","8b81f222b865416007ddf06084db9b73"],["/posts/15f3959d.html","0e62262e34b6a249620764d7a31e7280"],["/posts/18ab785d.html","0743c9445a798a1bb2c328cd8f2a8ce2"],["/posts/1d59b71f.html","c9723aa589a646743ccafa3af61c6c43"],["/posts/20b3f3a4.html","2c3569db081ca3b404c5b033277fc726"],["/posts/245f1c7d.html","017319ccc447ba3da097d2c993e54b5c"],["/posts/252658f.html","d10a4edf79822595510d1466df4f0260"],["/posts/28397adc.html","4d408016714fc236c2096b10699ca430"],["/posts/2c0a6836.html","76d1dc7505fecb9f56ed35e522103b58"],["/posts/2cf620f0.html","7cfc5a85e7f2dc4c3d293322ac1c510a"],["/posts/2e30fd6d.html","d597016d7b263c3736890d283d80d05d"],["/posts/34292736.html","34b78adf62c37ce1edf0688f40e95ed6"],["/posts/3f7d823a.html","ef6d9bcf12786edf7f98d66d356bee49"],["/posts/44124a6b.html","7d3889081b5f0446c2769dcdffe2add4"],["/posts/47abb61d.html","6e213f9d0f86b29f1daec9305bcccc88"],["/posts/4b689be3.html","bc9cc811ca3fb0ba708312e39d8783d7"],["/posts/4cf8423f.html","8610633a403e5a3eda2e875e05357c59"],["/posts/4dcf85c.html","33b40c33dec82f1e6cee0a7d15f3442b"],["/posts/500cd322.html","a6d73dc8be8fe7d9366eaa81f21c6e40"],["/posts/51c9b1ff.html","a3c005b7b6cb74abce2b25bfc2b91cbe"],["/posts/52b5b3c6.html","a7eeb88307c5ea2908b3624c9cc4dd8c"],["/posts/5f6e0c59.html","4e982a3e03b4c43b7dab6f474205afbb"],["/posts/6336a2f9.html","97ae636db077abbe23eec7609af61ff9"],["/posts/6432d61a.html","2714e8fbaf9c4128ea17f724ddf50be1"],["/posts/6515f032.html","e211bf604a871aeaef3135146aa7d44f"],["/posts/6720ccdd.html","ae9b17e77eac7a16aef9e675f5bea2c9"],["/posts/6a4b5ac8.html","2b817c13e941ce941c2b8ef2ffc7a215"],["/posts/6aa4177c.html","caf2e4afc89d0c7c016c286af5374a1f"],["/posts/6b15f81f.html","8dd58b9b65c3c5881ed63335c7639aaa"],["/posts/71131d34.html","687df2283b0f8ddf109d58c30a3678fa"],["/posts/78a8a8d3.html","773dbb880f65b97249cf38d020db8f23"],["/posts/7b41e1ac.html","c4bdc22bf34888d922e2fdc42e15077f"],["/posts/7b51011d.html","0b768ead68ecb1aaaafbdf46794ba12d"],["/posts/7e3aa3e2.html","2e9fef08180bf7858b09172c4710c649"],["/posts/80fe2691.html","55066f9468ec3dfac466d83b1a21a56a"],["/posts/81ac52e9.html","8d86b079ac6cd6a47191d3bebd27a3e6"],["/posts/849b40f8.html","62c8bb98f380b4b956fcd64f2bc54d8f"],["/posts/85c51d68.html","4dfc09112b5af8e48edbe141f78af1de"],["/posts/886f8d3.html","c024177569ebca84f87fd0d66ab61bb7"],["/posts/8ac11b41.html","78c5bf4b33cf1f842272cde3ed8a9739"],["/posts/8dd520d9.html","beae050b1d567dd3edfced250b239547"],["/posts/8f555654.html","67b8a7d313b084307ec5457c8378885e"],["/posts/92a980c2.html","0818aeb8ef0e9be865a5b70158246b79"],["/posts/94d3c794.html","54f1efbcc7a19ba5357957ccd4902ba9"],["/posts/97f50eea.html","222fd026baa7bc5f2216bbb9a659abea"],["/posts/97fca8be.html","43a7a2be4601fe92c235aa3a683a2520"],["/posts/98662d05.html","0d36543213633bfc609a425ba613598e"],["/posts/9a2f6162.html","6656b32962bf254d0e0d01d48259cf55"],["/posts/9b22a48d.html","9ce43a5228d4b93dde4d221bdf591bff"],["/posts/9cb455b1.html","0bb1a5ce7db5c7f298c48364e0122d6b"],["/posts/9f61c1a0.html","3de8120ea5113a2e649f36e712efb497"],["/posts/b497b647.html","046ac47f09019212042695dfe35e5e4a"],["/posts/b5fb773f.html","8357d37098eb44f9b34c6c8d7a7ac145"],["/posts/b8d46b32.html","acaf547370727837e2ffb7fb7fc29552"],["/posts/c1b2c6c9.html","11473cd0fbebef0330599cbfa4309dc8"],["/posts/c2111cbf.html","b69d3c8d7f5ea0344620a45a183f932a"],["/posts/c316c2e8.html","6650dd690f302f1d6c67308818b73691"],["/posts/c497a412.html","11eab1156589aceb08ec6c792277fa26"],["/posts/c5de299a.html","354dd9df4c2dbdc04005498d99196fc1"],["/posts/c70bba9c.html","63ebca71079ab97b2d1544697d1dc23f"],["/posts/cae2c959.html","ef0320af6b51dc80f38f940279a5c200"],["/posts/cbebef2b.html","219c87e8c5696380918e1a992f777334"],["/posts/ce25023e.html","42dd714d7dfa510071da4344c77c54ef"],["/posts/d2fd4837.html","a64787af8b23af4cf44e0d42570842f4"],["/posts/d3233cbb.html","20f5bce4682d0b3449edc077a0f113ed"],["/posts/d3a745a8.html","6f9d30bf70584106852864c730ebda4b"],["/posts/e3ab6ad8.html","dd612a65c8e260fba867d23dc20fc453"],["/posts/e5018da6.html","8dc0558a00c0c1d33bcd31a0a5e8eec3"],["/posts/e5963272.html","029a211a870b351c5a7016e9a714a195"],["/posts/e624b065.html","054781db45da9f6a4aa516351de5aad8"],["/posts/e91abb63.html","47c9682f8de7f5f6e3954db8aa80ede5"],["/posts/ee1ed673.html","c43c76f3ecfb9a43faba9f62ad388acd"],["/posts/f0c3ed61.html","8dc660087db6027d213844f40bc8655b"],["/posts/f21e7f84.html","e70d41890f3c5e05aa2a579345a031e1"],["/posts/f230b0fd.html","225b64577b3b89d853d3d9b997963885"],["/posts/fc04d0d4.html","167e9acb80c0028e78b7b262adc203e2"],["/sumire/index.html","5698fcca32c6755a9740e43ea02af2ba"],["/sw-register.js","d24141640407bddb9271445bf2a5d0d2"],["/tags/BL-Game/index.html","f76787c254c04a10926311e07b19e9d0"],["/tags/CHUNSOFT/index.html","c9bde146aa386e47d389927ee903382f"],["/tags/Cherry-Pie/index.html","6de0e203ad7fa2b7c2ccfb22b17b1405"],["/tags/Circle-Mebius/index.html","a8ac890f6a999df04805542ca71da237"],["/tags/Dopamine-Software/index.html","e0e5006c01f02bcc1cadf909d9d25283"],["/tags/Dos/index.html","2fa69bb1fecb64283dcf549d8000dc2f"],["/tags/Kanon/index.html","ec60990c4d5638e801606675e55e5bd4"],["/tags/MANATSU-8/index.html","3beca406a5b6b44dc5958dfca1636023"],["/tags/O-S-I/index.html","b5f2c7697a0e69e992493447bfe9ebaf"],["/tags/Omegaの視界/index.html","df3828c78ab468004cfb187c5a69febf"],["/tags/PC88/index.html","b34814f127b8dbb75701b36389007a18"],["/tags/PC98/index.html","3378d3db3ac326e8b9dba3b2afc69b4b"],["/tags/Pleiades-Company/index.html","219fd8fa0f168969df37345ee5cf43b2"],["/tags/Saihate-SOFT/index.html","18c4f3187df5299ccdbfdf53c5652e60"],["/tags/Team-Eye-mask/index.html","d2ad285e388706b61af399b50e36b939"],["/tags/ToHeart/index.html","414edd3159e812a67da0ffe862be3137"],["/tags/Traumend/index.html","dfcea28aa5407658971cf477ce7ccc99"],["/tags/Witch/index.html","dff17bc15f160225035eb5a65fbb9310"],["/tags/adonis-project/index.html","999297014c7cc41036346cfeec8474dc"],["/tags/flash/index.html","a7f2502f7f7f7106f4a442dbd086bd2c"],["/tags/galgame/index.html","eedf7a1c803021dedb723f63a467b137"],["/tags/galgame/page/2/index.html","2a7b2bd520adbcb2b2b207d50d622f68"],["/tags/gal资源/index.html","8584bf41cf26870c30f5f6732f4407b0"],["/tags/gal资源/page/2/index.html","27c3b5e6bf670744c3fcbb14a140389e"],["/tags/gal资源/page/3/index.html","ee4a4a97baafffb3d90c4a5c1fa83a74"],["/tags/index.html","3c87a7df0942b89a58e45837d60086d8"],["/tags/rkr/index.html","caf479792f14e91be8826e484fac4a1e"],["/tags/いつものところ/index.html","ae9b0c4f4dafdd2bc33905cbfe07e909"],["/tags/きつねみみ饅頭/index.html","3ff14b69ee96575f6674b52a635499fa"],["/tags/ねこねこソフト/index.html","db993fa1e55e3b641caf377fc3499b77"],["/tags/ねこバナナ/index.html","a6e83f3b9b42f3543ba34e18d86c27b1"],["/tags/停产/index.html","15c9cf1c9608b82712799f4fa7a9920d"],["/tags/公告/index.html","e1ee4b09b774712bbd58085082ec9a7e"],["/tags/同人/index.html","556a7a91a695d2a42a5a97815cc8c015"],["/tags/堀井雄二/index.html","0ffcdb2ce37bf2bc8c9e9417ed2999ba"],["/tags/外海なおき/index.html","c2ac822e3a1f2ccb7e5ea8b518ea2950"],["/tags/水仙/index.html","9694160fda154921b3ba025f19d8fbf3"],["/tags/片冈智/index.html","93db8927b354a936aac653079d5fcf50"],["/tags/片岡とも/index.html","bb470863bd339f6a615d07e0ac6d0783"],["/tags/牙の刻印制作委員会/index.html","c561a4f5757562596c1dda036eab2ae5"],["/tags/牧尾屋/index.html","b435ac0f17ffe8ccfe3d34e001427a90"],["/tags/猫猫社/index.html","a15b8a8fb9b4952ca7d4712f20c306d7"],["/tags/王宮魔法劇団/index.html","e6825af69c54f2f89eeee517b2249642"],["/tags/画集/index.html","978f4c5f748529017186ee3f6cb31907"],["/tags/索引/index.html","df1ce3349e857143f94e5818506a3cbc"],["/tags/閂夜明/index.html","5b9ad401897e6b61263b6900f4d7ce5c"]];
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
