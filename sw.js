/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6cc099113ec54d41a6eddc3dbabec169"],["/archives/2024/04/index.html","4b28b187639856b681936c28033e96b5"],["/archives/2024/index.html","b851b0b4c2365eba2a08dab0b7455fe4"],["/archives/2025/02/index.html","8177a59e3eda577ee937365a7e23eef4"],["/archives/2025/02/page/2/index.html","56e3e5bc26d608d2fa0610183b1a8e39"],["/archives/2025/02/page/3/index.html","7b595ed28b413da9ebde412b8ddf302b"],["/archives/2025/02/page/4/index.html","55820df1bb55da35886608b56ed477c3"],["/archives/2025/02/page/5/index.html","2a8d95ada759238e1ba694b0d9621d57"],["/archives/2025/03/index.html","972d918200f3cfc26e938512822830c5"],["/archives/2025/03/page/2/index.html","9513c54a35f6658137d089b83425dd21"],["/archives/2025/03/page/3/index.html","e1bf4d46f55000204e5f6611b4145de7"],["/archives/2025/index.html","165b0a4b494259027e8a812be5a32d6e"],["/archives/2025/page/2/index.html","442799c60c0a18e562a88691157ac998"],["/archives/2025/page/3/index.html","8f93a270267ecaa8c168f5a5950c2dee"],["/archives/2025/page/4/index.html","37057087f32f661045fb5d7adedbc39f"],["/archives/2025/page/5/index.html","99fbb6bd8f3d71b66f815e36c645a9d7"],["/archives/2025/page/6/index.html","6a9810c655d2ee306a2879aaacc747c5"],["/archives/2025/page/7/index.html","36a7c8a009d71a1fc0baed72b66902d7"],["/archives/2025/page/8/index.html","691f939092255d326c9ac0d74e9472d6"],["/archives/2026/02/index.html","65989e4e659a99339f855fb1420ad43f"],["/archives/2026/index.html","6a18b65cfe039a403411a6dedc06efc6"],["/archives/2925/01/index.html","8125c0fc39878cb291cda5016e079ad5"],["/archives/2925/index.html","8c0aa10d3da87701214c1e6d6807f09d"],["/archives/index.html","a06a4587f91f5e9aba60722133b6cb06"],["/archives/page/2/index.html","c3306f2132b6dbe3a13c888fa8abfffb"],["/archives/page/3/index.html","86f38f7d26b3dd0c0faa3347d4f72d9d"],["/archives/page/4/index.html","92417d5cf4eacdf3c64f11a65cb89766"],["/archives/page/5/index.html","878796323a9522149f8234694c079669"],["/archives/page/6/index.html","703b3f9273c033c6412223cc96387410"],["/archives/page/7/index.html","3326d8f46e7d7ed7a748153c6ca193f0"],["/archives/page/8/index.html","6175f84e6c6e7538e4fa49e236c802a7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","784164e4e86ea68503f0d2084b1252f7"],["/categories/galgame/page/2/index.html","ba2f5e69b6f1286901c6e8888f018761"],["/categories/公告/index.html","d0917196d114cb7687f7b52608d44dad"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","2ace863279e907ac9bdc79737c2e6719"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","80c3ee1d2fbec850a6fefee89b647077"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ce79450049c2258722c9eee345d6cf0b"],["/page/2/index.html","23ac126db5d77996637d596b85354a06"],["/page/3/index.html","4a7d9bf24e1684e3f92eca68b3b828eb"],["/page/4/index.html","831845f93bb72e3a26e46ef300113570"],["/page/5/index.html","91285839a9005815de0e8de5eee92c69"],["/page/6/index.html","2e8a2e0a4951dd96a3b4a79262b947f1"],["/page/7/index.html","f22f6b4bb3d745b9958a0da497afa9c9"],["/page/8/index.html","f2c611ed4e21ecd23f8124774d9bc520"],["/posts/10c9dd98.html","a686982e8eb0dc56fe40af0013d2f6cd"],["/posts/1295b569.html","2fad439990dbafd9188c7b6cafbef832"],["/posts/1370342.html","ab9337755562d8b82b4b56cf935313f5"],["/posts/15ef14c2.html","cdeae694ac61c0cd83bdc38261a4ab06"],["/posts/15f3959d.html","2577fa2f0d3b494c5095186eb34c57cb"],["/posts/18ab785d.html","85f6c1ac927f7bb64a11b28222d0fe36"],["/posts/1d59b71f.html","54c6f8190579747fbc7d016b7679a83d"],["/posts/20b3f3a4.html","178d09f73dbe6663a973136c748386eb"],["/posts/245f1c7d.html","9a3b564d98673ce627645884b4b718c9"],["/posts/252658f.html","599909ac86d2bbeeebaafb5a3c5ef4b7"],["/posts/28397adc.html","5eace71de6edebed95ab059641a70ebb"],["/posts/2c0a6836.html","537a2e320ec855ee4fd23d7d3f4ee831"],["/posts/2cf620f0.html","7aaf08f3bbe25bdff346db8d8e470170"],["/posts/2e30fd6d.html","6ec3dd61dfc525484042a163718fcf4c"],["/posts/34292736.html","6fcbe422276ecb78c888c122737eb65b"],["/posts/3f7d823a.html","b4d5eff56fc0a5eadd9eabc7e8e5d3ee"],["/posts/44124a6b.html","1b4a79f56aca43a45394e9c3a814e5fa"],["/posts/47abb61d.html","878cd267b5223b16fb0c8983b054a9b7"],["/posts/4b689be3.html","7dd33c09082fbde929e2cdda2879458b"],["/posts/4cf8423f.html","54152ac1b1dfbe355bcc7707966af20a"],["/posts/4dcf85c.html","c8fa9e573ec563d20dbb4a5e2f38b513"],["/posts/500cd322.html","bcf6da22e009145817312c9f91b1e4c9"],["/posts/51c9b1ff.html","6f6612cf1689a9a3f09614ce56b6b714"],["/posts/52b5b3c6.html","eb3e76bd66de2922370a294def40cae5"],["/posts/5f6e0c59.html","c975b21b9cdbfb72815753dbf23c21b2"],["/posts/6336a2f9.html","14bd8d05e89f399c696fed49f50fe22a"],["/posts/6432d61a.html","2e1a2afbba518b30e6859702b28d4897"],["/posts/6515f032.html","31b8b089d6d4fd357ff178626d880983"],["/posts/6720ccdd.html","7e52d86bcf85993df23f724106761551"],["/posts/6a4b5ac8.html","60329839b4bb273186c0457da4b59f69"],["/posts/6aa4177c.html","1e0c4c0c36a9ff46123b3b63a0a340e1"],["/posts/6b15f81f.html","1eaf832ececb770b1a686161bce44b10"],["/posts/71131d34.html","27572ac8ae5c114294e5793e38f83aff"],["/posts/78a8a8d3.html","8a4c72269cd63233c4849c24b23021fe"],["/posts/7b41e1ac.html","3994fe2552bb5bb45ec8b6f09e3ab666"],["/posts/7b51011d.html","34b4f13363f01740c277edd8301a70b8"],["/posts/7e3aa3e2.html","05f7ea5af3a41cddb31dc0264d76e0f5"],["/posts/80fe2691.html","c2f7b55f8c0d1b146b4e2331a514ab1a"],["/posts/81ac52e9.html","fa2b91f2c19b20fd401ce972dce7d483"],["/posts/849b40f8.html","9cd99a8ba938d3757723fdb09c56e1bd"],["/posts/85c51d68.html","1e872d967f404f3f9e05610194733e4e"],["/posts/886f8d3.html","793cb8749521f6adddbe0567c5ba225a"],["/posts/8ac11b41.html","0d1026032593808c64808a624d22fe55"],["/posts/8dd520d9.html","b7a3eb97e4a3a04bbb19534bd7428acb"],["/posts/8f555654.html","635399389b960596c12cf802d6cd6705"],["/posts/92a980c2.html","f9cf0ea93d85b128e7dd088ada5cc241"],["/posts/94d3c794.html","c81fccb15fb46056d5b399ed478f5282"],["/posts/97f50eea.html","3dd491588cf2e915a128962d38173ba3"],["/posts/97fca8be.html","4a530702875fddaed07a6be3ed19b9ff"],["/posts/98662d05.html","dd9fd0a9c4a9f17b57793405f5fcb621"],["/posts/9a2f6162.html","becd715a2d6ca32ddb8cc7d4535a4195"],["/posts/9b22a48d.html","3e118273a499682ab06e7e9d9061e24c"],["/posts/9cb455b1.html","d5cb80a548860a6d162f276a2cd01f06"],["/posts/9f61c1a0.html","fe6436558ad02ac15d309dd64da190f7"],["/posts/b497b647.html","e7532d757300e0e1b2154274216539f0"],["/posts/b5fb773f.html","8b4023cffac024e0f819725badae3af9"],["/posts/b8d46b32.html","b2d915ba19c7acea9a2aa570a4756d26"],["/posts/c1b2c6c9.html","8e9d6480e5fa1073af8ab82eec9933be"],["/posts/c2111cbf.html","27ce252458ef1b89e7d35ae1811688a4"],["/posts/c316c2e8.html","389a31d7de0e1004edb215903acf1b61"],["/posts/c497a412.html","0d28e85bbb8e7ad05daa41131dc8e29c"],["/posts/c5de299a.html","b237db0b2c0223b1d821fd5391888b8e"],["/posts/c70bba9c.html","4c7423ba988e9c8b63dce9106d49c7e1"],["/posts/cae2c959.html","03f6220ae2c6c75686fb2a650abd6e97"],["/posts/cbebef2b.html","91044f91d1a96b8eabe9bd6f30b3b8a0"],["/posts/ce25023e.html","6a9b18dc3e702f81383135d095104f76"],["/posts/d2fd4837.html","02899cd42f7cc9277e77d6207bb12ee4"],["/posts/d3233cbb.html","e5eab0283ff08d21d5fd1e2b49e5e129"],["/posts/d3a745a8.html","d70deb14193bce1e94926ab988c4c172"],["/posts/e3ab6ad8.html","9eaebeb2a403d63e7154015ffe6ecc35"],["/posts/e5018da6.html","23814be5c83ad47b5990bd46d68b61e8"],["/posts/e5963272.html","5c5c3eaa1af5e0dc7157af1b10fa2262"],["/posts/e624b065.html","4a224f128bbf91b27f0195e43a36dfa6"],["/posts/e91abb63.html","ab836d7abbbc58bddd0c10e0935bec55"],["/posts/ee1ed673.html","b51bb82b1ff277a95cc6f91125cc0b21"],["/posts/f0c3ed61.html","6b8f5b87bb103271c494c32aeb7c045e"],["/posts/f21e7f84.html","b708f975f03dd339977505110d710c2d"],["/posts/f230b0fd.html","cf4a51875e0e3d9806825cc4dd0d7edb"],["/posts/fc04d0d4.html","bc9c2a826e42ce1937516f53a74be00d"],["/sumire/index.html","73c7c26612eef5d4d4bdc6faf68de78d"],["/sw-register.js","9c5de02c749266334c39b583daca0f12"],["/tags/BL-Game/index.html","4c154c5fc4ee31bda6971b8ef8b037a0"],["/tags/CHUNSOFT/index.html","2c41dba9802c1afb0781f3953dc3634d"],["/tags/Cherry-Pie/index.html","5fa0e2ba3f5853157e74bd96ecef2340"],["/tags/Circle-Mebius/index.html","5b0005263429a1dfca66af5d5bc9591e"],["/tags/Dopamine-Software/index.html","3f4f54104f75c3c0ef6302b0f88c324c"],["/tags/Dos/index.html","118ec564c1438b9bd364cb80b0f143f0"],["/tags/Kanon/index.html","349e1be74430b5ba063f63ca5ad1229d"],["/tags/MANATSU-8/index.html","a2f316b494f1ff5b61ee2c04e7497f46"],["/tags/O-S-I/index.html","26e618d38e8f12ce85cf800da2d02610"],["/tags/Omegaの視界/index.html","0b8799632a14648b3442ce2872424e53"],["/tags/PC88/index.html","01df800d8dec1497a36c87f2931a9c4a"],["/tags/PC98/index.html","b8d39df38b86e9b46ed5ffbcfa74c627"],["/tags/Pleiades-Company/index.html","d0266f3563198ea000c236ecfa06a980"],["/tags/Saihate-SOFT/index.html","e7996af54025f083854ece51fcaea91e"],["/tags/ToHeart/index.html","6f9deefe22b95592c5d68cf162fad956"],["/tags/Traumend/index.html","ef5f6312c318d46c7811bb282962c817"],["/tags/Witch/index.html","ad4234366f909e14b226643b94f03e97"],["/tags/adonis-project/index.html","9ba5226efeb4c3b0bd86faac7b9f6462"],["/tags/flash/index.html","43ebb0ce5334617ca3e17028f1052a6c"],["/tags/galgame/index.html","31816b5ce285d13e343d68bf2e10360c"],["/tags/galgame/page/2/index.html","dd195bc4f26e511202a9a681e831a382"],["/tags/gal资源/index.html","eea221efd3891b6d68dd328ea7e25f75"],["/tags/gal资源/page/2/index.html","3f58f4ddcf2bdc56aafc6e7809dbd7fb"],["/tags/gal资源/page/3/index.html","0e675a554bea9993882a65e93c59903b"],["/tags/index.html","cf0cbd232adc175529e7b8deabe82b8a"],["/tags/rkr/index.html","b056c8786c18caf393eda50a7a44e9af"],["/tags/team-eye-mask/index.html","f57c22cc9ccbbd2dea6a27a9fdb39230"],["/tags/いつものところ/index.html","340b47ecd4515abf2f2495a4c1aa85ff"],["/tags/きつねみみ饅頭/index.html","d55f05fc5c156474a81f62c4f3ee4b1a"],["/tags/ねこねこソフト/index.html","597abdb7cab98ef6f5df3710566a6956"],["/tags/ねこバナナ/index.html","f7d66eed4fd0132e44404dd377e550fa"],["/tags/はちみつくまさん/index.html","6ad926bcd198a1a089dd80a3e4fbc9af"],["/tags/停产/index.html","9015adbc29d253468079959814e72b2e"],["/tags/公告/index.html","dea60b7563f6f85f827c1192d0278665"],["/tags/同人/index.html","e4d3dc5038b341056c1efc8b158fbaff"],["/tags/堀井雄二/index.html","684228f6e2a0351611527dd84666330e"],["/tags/外海なおき/index.html","10fc562c29348f7717a343b670cc8dc2"],["/tags/水仙/index.html","316e747514e8d2a4a56373d90c24cb39"],["/tags/片冈智/index.html","e013bc4787f70f4f22c2bbc95e78c639"],["/tags/片岡とも/index.html","fccb345f55637a0100fdd964b3fbdead"],["/tags/牙の刻印制作委員会/index.html","c213de01ad660e905c7891dcf146006e"],["/tags/牧尾屋/index.html","f1eabf86813f1142e83b2426a2ae884d"],["/tags/猫猫社/index.html","1f3747df408f00e37dc5cb0f595a387d"],["/tags/王宮魔法劇団/index.html","23921d9a1a7807fd5c86276424a6b711"],["/tags/画集/index.html","d24dc9a4f4a34243a3f3230aa6a70625"],["/tags/索引/index.html","94d82930058e3b4d6d62e3823d538aad"],["/tags/閂夜明/index.html","6fa791871d15a0f2d7a6c033cce0c356"]];
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
