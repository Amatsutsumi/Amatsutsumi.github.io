/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","fe1adaee3c72b472b205713c215af4ae"],["/archives/2024/04/index.html","5ce845f1984a0e0886e3ca598539e08d"],["/archives/2024/index.html","06ea66e3f2d4377414ae0c4e5bd142e8"],["/archives/2025/02/index.html","4b52614268741e423252d6fd33e7cb9a"],["/archives/2025/02/page/2/index.html","5ce897d86cf6708dfcfeed680991c176"],["/archives/2025/02/page/3/index.html","f5aa5c957719a2eeb52ade0d69032bf7"],["/archives/2025/02/page/4/index.html","9da24a9961569892da9788e38179308f"],["/archives/2025/02/page/5/index.html","124bdc07a4d23dc9395eb3ff4279908c"],["/archives/2025/03/index.html","9f5b51c20ece99294cfb2abc1bf63f84"],["/archives/2025/09/index.html","9bcacb9f1daa719aeef6670b4f7e2c91"],["/archives/2025/index.html","8e397c80b72ab6ca7fcfb7757a98dc2e"],["/archives/2025/page/2/index.html","7d93b16c5fc5ce2c6e66ae33fa4cb651"],["/archives/2025/page/3/index.html","2d8c4bf3383c3cdb23c6ed76fd5a691b"],["/archives/2025/page/4/index.html","3eaefa6f7648222b56235beed7b28ad7"],["/archives/2025/page/5/index.html","4665464e2980044494252c4d03f477f7"],["/archives/2025/page/6/index.html","94b4af6f4aa4f82d83c6bea428fca6ad"],["/archives/2026/02/index.html","ecaa23714b02f281b9eaff0e72f2d084"],["/archives/2026/index.html","2b59129c0c0a92895b0e3bc0f51172ef"],["/archives/2925/01/index.html","9be0b8a55e6cb1da50665297b416e545"],["/archives/2925/index.html","3db34aa4f5b3d0294af985e0347d24a4"],["/archives/index.html","074864ac55844fa9fe24c2cc6e33ed51"],["/archives/page/2/index.html","cc7e4e484f3c92c7306008f0b927a3d0"],["/archives/page/3/index.html","4e611fc11273fe909600feb41f1a97bd"],["/archives/page/4/index.html","875a848f407a9764b9850618866e914b"],["/archives/page/5/index.html","c0c98209f3ab32a047169f695da3a79a"],["/archives/page/6/index.html","f048d4a2c7d6cbc42388c245cf1aa210"],["/archives/page/7/index.html","8d903410502a83959fe2b10d23832791"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","4d0f0c631bb185cae571b949d2095850"],["/categories/galgame/page/2/index.html","36e51c282638fc8d0f5c633b93ef0d0f"],["/categories/公告/index.html","1ae5c69077818eb08328d66261f0e797"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","233c5395c09198be67b1de083f1efd33"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","1beb87655dc18d5264884a79a978c8d3"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","c40a3c86cf799c4cb34fff2e507533af"],["/page/2/index.html","4aed49ea3a0223d1ce285f50619c9dd2"],["/page/3/index.html","4895247fc26610e7bcd495192de308bd"],["/page/4/index.html","e23139a7f4946dfd71ae11e49f13f162"],["/page/5/index.html","4e24b60fd190cd7ab1ce5eb85b8f013e"],["/page/6/index.html","273bc5618de55c81f476faef0ba610a4"],["/page/7/index.html","25f18bc6dc216549aea7ce91e5b64209"],["/posts/10c9dd98.html","253ad074f495342eebfc7879a3ad7a7d"],["/posts/1370342.html","d46dd3dc1a131e7ee129c8b36d7f1a98"],["/posts/15ef14c2.html","b71808909306d64dd4bf6d38fe4a8b49"],["/posts/15f3959d.html","72a64cff6b88a15780fc06a23a62c845"],["/posts/18ab785d.html","a0e24fce678404a598616ef4998cb1a2"],["/posts/1d59b71f.html","e39fd17bfd877bc946db55e13b883b59"],["/posts/20b3f3a4.html","9cc5317d43482d4eaf5ad1b96b405cf0"],["/posts/245f1c7d.html","41eb921cf7a68c8843bc9f54d2d83c0a"],["/posts/28397adc.html","ab703be78ea0e7650641787d14e1e341"],["/posts/2cf620f0.html","5c995ab9c3aef93cfa86039f531bec8d"],["/posts/303007ad.html","c669d6f0adf1d1ccba3244a007a3e1f2"],["/posts/3f7d823a.html","8cf2ac36622c395048577fa5ea7eef70"],["/posts/44124a6b.html","99c881d562c7cef746b8826c59cb9b6c"],["/posts/4b689be3.html","75a3e36ae7f8c24695c8b3ef74c902e4"],["/posts/4cf8423f.html","4b828a2ea24c6afad05324884d18e9c8"],["/posts/4dcf85c.html","00779496f7a77de75a2bc45d0e1694e7"],["/posts/500cd322.html","e168a76137329b0243bb03ec959bd8ab"],["/posts/51c9b1ff.html","d268e2bf9cc4b7f4a61177fa5e3ded1d"],["/posts/52b5b3c6.html","0ddf3a0d44832b20c7ae227f1c51be84"],["/posts/5f6e0c59.html","81d9cc58e41c960bd9758eab9f090dff"],["/posts/6336a2f9.html","4b4c9f8625acef3531524c45eee01787"],["/posts/6432d61a.html","2225218329b4a6e0b5d8429b7a8ddf94"],["/posts/6515f032.html","8c65690f266295d2590d7a93bedde485"],["/posts/6720ccdd.html","3bfb7c91653d79e0a3ec58a18d279e34"],["/posts/6aa4177c.html","552e3f8bf5b3a6d49f34fde257edad10"],["/posts/6b15f81f.html","9b8a76b4312479c2729b117a99270a19"],["/posts/71131d34.html","73679475b025a211fb60d83df796cd3d"],["/posts/78a8a8d3.html","eed825e3c9de931c4ce2a4c8a9cdb06c"],["/posts/7e3aa3e2.html","0da556719d58e4902a56a6250b79e7af"],["/posts/80fe2691.html","de908b9340403396ee26426a8c8a05c2"],["/posts/81ac52e9.html","7e919ff020239eb4c2b18ac1c54ba168"],["/posts/849b40f8.html","0345546d57c9c05ebc383d8efe112a7c"],["/posts/886f8d3.html","3e25755009620edaa0b5ea1e5afb77ec"],["/posts/8dd520d9.html","eead63d7e128e9cc66ef21b3f6df2a86"],["/posts/8f555654.html","ec942ea5d1ec72eedcd3368b3e700c02"],["/posts/92a980c2.html","20feeb290d60895f55ab36fe853a7745"],["/posts/94d3c794.html","fb00a3b68bc40d70b5b29fec10a87104"],["/posts/97f50eea.html","5ed8e7c1970981bde1b38c66b6e86faa"],["/posts/98662d05.html","eff01a563168ef63cb1203662fcda18e"],["/posts/9a2f6162.html","56853ca528300b4f0fdbdfdb76eb1253"],["/posts/9b22a48d.html","0f1720152bc5e7bb30f93b36e503038a"],["/posts/9cb455b1.html","43c5d6ee0804c6d1574f1f2f28901659"],["/posts/9f61c1a0.html","76ff31864488ae736d88352ce5160bed"],["/posts/b497b647.html","11bd1a5e6f8793aa7866f5ee12b4d04d"],["/posts/b5fb773f.html","8c47961cfaaa2f9dd91f7e88c6f1a7ff"],["/posts/b8d46b32.html","ae0b4793abf6842549182aff59efa373"],["/posts/c1b2c6c9.html","da18e6471512bede16b8ca0c760cae93"],["/posts/c316c2e8.html","d19d5a27c04a879a4950928e540e2285"],["/posts/c497a412.html","2a000d8cd85d5bd5cf8d863c8702a7c5"],["/posts/c5de299a.html","94acc32f37fd5e8045e01816581919d9"],["/posts/c70bba9c.html","5582584cab75a4f8ae6ac8c746042f1e"],["/posts/cae2c959.html","e17d70e44114680bd5261510d48494fc"],["/posts/cbebef2b.html","1ee144149e7000bdc672855948c4648f"],["/posts/ce25023e.html","2aad8aef75565554bee55ced59218475"],["/posts/d2fd4837.html","a9ff897b761fd2f1b51070b621393198"],["/posts/d3a745a8.html","b2fc92524ec4d49a274094e5d22921a5"],["/posts/e3ab6ad8.html","758a86487c61aaf8dd8aaad56632dc70"],["/posts/e5018da6.html","e9b728d3ec667411dd1ace32a29ffcea"],["/posts/e624b065.html","b80c4d4f2911d9895f76a216d45b6529"],["/posts/e91abb63.html","a53acfdc94744e027740d9d5f27e4bc9"],["/posts/ee1ed673.html","1b8967c915a962954d82785e46632263"],["/posts/f230b0fd.html","31298f1be907af002c9723c80fc54a84"],["/posts/fc04d0d4.html","b9dfb4b661058c613677532318038905"],["/sumire/index.html","e3e6d756996e94caace35ca2445a55ec"],["/sw-register.js","d08b9e60d54b56c7534f4af6c40a7418"],["/tags/BL-Game/index.html","8c96389f833846dc3d0a43ba8d4ab130"],["/tags/CHUNSOFT/index.html","d4d8399d933b4b5c38acc0e7b5cc96c0"],["/tags/Cherry-Pie/index.html","75695672ed3cfef20fe599a9ff55cc81"],["/tags/Circle-Mebius/index.html","99fc85545c9c93a3c82f8837355cf3a8"],["/tags/Dos/index.html","44b0840b2f4358cf08706d9cdfe3c18f"],["/tags/Kanon/index.html","15ae9e6780451a4909b92d627dc49c1c"],["/tags/O-S-I/index.html","4b23a7c69fb349d4f0a9b3edc7c5ddc3"],["/tags/Omegaの視界/index.html","c9a35abf4415855272cf7aad868a3c36"],["/tags/PC88/index.html","964c450665f17c6c27a60dbd25ef5250"],["/tags/ToHeart/index.html","b9fa7af09c511146871a538bfd68590e"],["/tags/Witch/index.html","1f34167f9be32da81edf7338b7852d13"],["/tags/galgame/index.html","6dc5f3fbe7a94290aaeb82d4e9a722f7"],["/tags/galgame/page/2/index.html","227073c7a2bde33f4cc3ead3fe827d55"],["/tags/gal资源/index.html","1f6797565f055c75faa5fffe292d1d01"],["/tags/gal资源/page/2/index.html","a00fd804324fef18c40b2284ad5269c8"],["/tags/gal资源/page/3/index.html","037ff99950db7a436062652b996aed37"],["/tags/gal资源/page/4/index.html","e4dac261b2b1454712b3983f7bc266af"],["/tags/index.html","c56d2429b97d83f45cf54c84dc2ef09c"],["/tags/rkr/index.html","a3fe27887ab74a4c66f7e83ece547f6a"],["/tags/team-eye-mask/index.html","65c69a13a699805dd00397fc7f74d24c"],["/tags/ねこねこソフト/index.html","9a516cb9b2d3224c50c4c18b43ae01f5"],["/tags/ねこバナナ/index.html","f48b0cd1c5699359bcfe24ee829bea49"],["/tags/停产/index.html","61d6090acc317a64974581f483e6628b"],["/tags/公告/index.html","7abdcf197b068fa374b140f1c6445325"],["/tags/同人/index.html","46af220409d9b08631f4a9c4b7e0dcd2"],["/tags/堀井雄二/index.html","afee794b35b2ccdf89f60bc1d3043f07"],["/tags/外海なおき/index.html","b1430d976d5f1d69456abab692c75c20"],["/tags/已停产/index.html","64339b25911996f761a833898a006b0b"],["/tags/水仙/index.html","c552f620d875a08b373f4654e39d2438"],["/tags/片冈智/index.html","18fd4ca1de4d4b0288b2f6c4c9d8917e"],["/tags/猫猫社/index.html","b0a2e1700e741b295c4ef7ef05829fce"],["/tags/画集/index.html","8608373947872862489bead7ddad387c"],["/tags/閂夜明/index.html","04dc6e8809f19ee405271c9681a64200"]];
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
