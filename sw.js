/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","733063d3714d2054698f47f8598d45fa"],["/archives/2024/04/index.html","57d8f1248f554cb1e9857884176a1896"],["/archives/2024/index.html","7d37155d73fb7e102de34f383303c0a3"],["/archives/2025/02/index.html","392fdb35f54c34a0191cf488f049628b"],["/archives/2025/02/page/2/index.html","76a34244a55ed573d7da48d6152373c9"],["/archives/2025/02/page/3/index.html","3beebc247e48449f4780ef3453696d90"],["/archives/2025/02/page/4/index.html","8d8d250d370573de667ee6f39e5bfccb"],["/archives/2025/02/page/5/index.html","b2cb6081e731d594a3733bf6d4d8c539"],["/archives/2025/03/index.html","d6cade5c1841186a47663f3393688bba"],["/archives/2025/09/index.html","8415054c0236b751b0311ae733ee8416"],["/archives/2025/index.html","2d36017a584065b1a4577da2d192759f"],["/archives/2025/page/2/index.html","c01a124ec4a8d9a2a08a3901044a5e10"],["/archives/2025/page/3/index.html","2b5f4ea23119ba3ccc1b1028547b2826"],["/archives/2025/page/4/index.html","63fa2fc131ffeae57e2b888da269f4af"],["/archives/2025/page/5/index.html","fc78f50933d0dcff054c52d505b31578"],["/archives/2025/page/6/index.html","107b3a35bf76165dbab5f6616a8f0552"],["/archives/2026/02/index.html","54303bccc3aee8f806a7936a52cb171c"],["/archives/2026/index.html","89d17aecc3f1493b164416332d9a7d38"],["/archives/2925/01/index.html","1a03a27afc64cec6429257a29b9d05fb"],["/archives/2925/index.html","14496c0729ec07172d8476852cc09f01"],["/archives/index.html","e3301d3957f531ff9eb033c234e0d97b"],["/archives/page/2/index.html","119c43dbf5529b9959a39701e0d49a03"],["/archives/page/3/index.html","c4bae7516b3c89b11c0a20546a152fd6"],["/archives/page/4/index.html","2ed2ecf4c7965ffd9b23c28a554305a5"],["/archives/page/5/index.html","ddc7c5a71adfba77195904ec88372eb9"],["/archives/page/6/index.html","daa8ffac695b2738df2a9ee03569b747"],["/archives/page/7/index.html","66f304d0a391b6efd30ceaae18723db8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","e04ddb6af6e7e39e82f8f590933eb1f9"],["/categories/galgame/page/2/index.html","b18a0e4dc39d6826f21e5d4f1aa74f89"],["/categories/公告/index.html","49f5a4e26ca514c70ed253264b041568"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","f39f8a60497023ec696f98d716b28240"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","a9bf172131d6ea30027cd1174c229c81"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","6ce57c9493f9dd13a616b45d4757cf60"],["/page/2/index.html","a362c3e5d5c69c0fd9c351961b8ca6a0"],["/page/3/index.html","dd896cb4083fa7eb747f5f0d4a93b7d6"],["/page/4/index.html","80d73f5e74cff74101a8ab017fe921b1"],["/page/5/index.html","f9cbb52833a6bbf09c8cfe2611d9066b"],["/page/6/index.html","c03242c7803986df93fd669c19cc574c"],["/page/7/index.html","08ff193dca9f3a26c8783f48c5f5516d"],["/posts/10c9dd98.html","efd6d8348789eddddc12964d8914a488"],["/posts/1370342.html","7e0b3086ebb1c6a4e74fd97c7b03adb6"],["/posts/15ef14c2.html","c634031057656807db74a4241b7a441b"],["/posts/15f3959d.html","c690f3054e1a0d871d6bee4559f5b04f"],["/posts/18ab785d.html","53e3bc86debdafee8e9c6b388463ff75"],["/posts/1d59b71f.html","420197480792acf3dea844017bf096c9"],["/posts/20b3f3a4.html","4b4aec6f8b6420e027e806e97a5e2c91"],["/posts/245f1c7d.html","fecafa4463c48aa451a2cae1bb4b071a"],["/posts/28397adc.html","75050fa95fdda931cd2d982c33f4ff39"],["/posts/2cf620f0.html","d72c37a7177793bf2e8d58679c4dbd74"],["/posts/303007ad.html","6e3b45b3dee0f2fc3ef7633c315a44d8"],["/posts/3f7d823a.html","2922713e509cbf49978fa7368b10f291"],["/posts/44124a6b.html","27cded203c7a4533681e55f96044727f"],["/posts/4b689be3.html","78df3281707ea0b7a20ba895c5eaa43a"],["/posts/4cf8423f.html","336e57b01f328a622f07cc3ea5e2cfbd"],["/posts/4dcf85c.html","2e2922393d7ab51d5ca62aceb44b0e42"],["/posts/500cd322.html","37eb8b87171084fdeea72a003d811b9b"],["/posts/51c9b1ff.html","ff3412ced22f7d8d77209bfacb3c1b66"],["/posts/52b5b3c6.html","9fb7332a4fe9d89dcc5f980fb39dcbce"],["/posts/5f6e0c59.html","17bb7d396f8418d6119b0d279963f126"],["/posts/6336a2f9.html","21705ecce633a0b558d5073d61d0f7fc"],["/posts/6432d61a.html","161c9dd7c7f6a810d8e60b2a57bc5b36"],["/posts/6515f032.html","3c186b94aba0840b8a3c1e133726a35e"],["/posts/6720ccdd.html","0ff8151dcf77aeead7eba8c09872369a"],["/posts/6aa4177c.html","38c1d2e147d4514009d5c4f2f83e1199"],["/posts/6b15f81f.html","6008b446371b9ea08f5bbe7026431145"],["/posts/71131d34.html","1488993645a34dd83bdd0acaf6507ee6"],["/posts/78a8a8d3.html","803d8f6bc4ce3639c7bc8e0e20869889"],["/posts/7e3aa3e2.html","2608c2739ba0fd6ac8c753f4678bfc46"],["/posts/80fe2691.html","b11817e034de6f6edf0de8786fa1714f"],["/posts/81ac52e9.html","69e4d109cb4c435eaee610acbca53001"],["/posts/849b40f8.html","0ea2ebd1daf8895662016dd7e2285709"],["/posts/886f8d3.html","b6e4aab0980c4dbb0c198b139a3829ba"],["/posts/8dd520d9.html","82e82ec49031afea5cb901e7e3d2cbcb"],["/posts/8f555654.html","f7faa265596c608d2c6dcbc27167dee3"],["/posts/92a980c2.html","f105ca03fc668fcd355ef373313e8dbb"],["/posts/94d3c794.html","81a16a48d58d2c4fb8f5407076168770"],["/posts/97f50eea.html","6bff50a478a3e43b2f575ac1e59f7641"],["/posts/98662d05.html","e383b300e1bccb17afcadf1566a9e76f"],["/posts/9a2f6162.html","0f814ba5775728c121601ee052b898ae"],["/posts/9b22a48d.html","4016111207321b568fc9de9112562c97"],["/posts/9cb455b1.html","c8fad00ee46f6478bd4f2316a9260323"],["/posts/9f61c1a0.html","42f014057c1c515476ddac5634de3014"],["/posts/b497b647.html","62affb95d574b526664ab045e89eafca"],["/posts/b5fb773f.html","929bbc41456e0473848b5af5d2d84cdb"],["/posts/b8d46b32.html","ebdda39dc7b6331e5956cf63d2a9470b"],["/posts/c1b2c6c9.html","98d6765da1bef35937407fdc19e1386e"],["/posts/c316c2e8.html","5122203ec5c0c9e6fcaff669b9ec92f4"],["/posts/c497a412.html","82d8ea5dcc5b94571f656cc5cae9e3cd"],["/posts/c5de299a.html","930b9a432e963426bfe8c65186f2914c"],["/posts/c70bba9c.html","3d1f4069c51fb54dac6d5f29afdfed75"],["/posts/cae2c959.html","5db2a3e8043c9ad4fe9ccf5931abb32a"],["/posts/cbebef2b.html","d09eb13df0457757f74b874a8e733a03"],["/posts/ce25023e.html","06597585938c0c374b6a66f71023da88"],["/posts/d2fd4837.html","116b7b3016003be8d5b5e4902f322ac6"],["/posts/d3a745a8.html","7d1ee0963961c7767970e6cd53fda0f7"],["/posts/e3ab6ad8.html","f6e4c5d43ab32695259b8e551e719ecf"],["/posts/e5018da6.html","c11ff3e70029fa9390f2aa1d7a2d139a"],["/posts/e624b065.html","470e87450d14c62492daddc988a78a6e"],["/posts/e91abb63.html","fe034726a54a9c980d1de0f9a46d82d7"],["/posts/ee1ed673.html","e81337f8719455b6783ca0649246a23a"],["/posts/f230b0fd.html","417196461e57ba9218ddcc959441220c"],["/posts/fc04d0d4.html","e98844f2475c5251baf11183400fe958"],["/sumire/index.html","734bca6aae31d110a3b11045f52ee357"],["/sw-register.js","3e756afa0627e35f12a238d472cf788f"],["/tags/BL-Game/index.html","0dbec940e02eb0014e3b07a15ea9eb3f"],["/tags/CHUNSOFT/index.html","650d86e758b441a30dadffe823863e6e"],["/tags/Cherry-Pie/index.html","2ae0c42bea3f6f09f3265233f473f110"],["/tags/Circle-Mebius/index.html","5cfd669bfcfa6bf2fb082950d8f62401"],["/tags/Dos/index.html","927e25bcf8ad39320172a5e4b4e2a5f2"],["/tags/Kanon/index.html","ef0fd6402b05f94b74ba0152112f7371"],["/tags/O-S-I/index.html","ff7dd8ffa84b6f5a8fce34e449026183"],["/tags/Omegaの視界/index.html","b72cc0e5fbc4da27a30d29661e5e9e2f"],["/tags/PC88/index.html","bbaee4e554362f836d5f22e714ef9b98"],["/tags/ToHeart/index.html","11281cb767f57bc88eb63b87efd5b47a"],["/tags/Witch/index.html","f02026b027b213dd8513f7843990871b"],["/tags/galgame/index.html","0f6134759a841dd860f3a49cb246b901"],["/tags/galgame/page/2/index.html","6d756c2c58502cb5e6f327e5fb2d9c3f"],["/tags/gal资源/index.html","c4cc554196d945d8aad60f8bb366408f"],["/tags/gal资源/page/2/index.html","ff00cbf834916cd901c57acd5b8d92d8"],["/tags/gal资源/page/3/index.html","5c625d1b3e4fda0a2b6016b813ebf98a"],["/tags/gal资源/page/4/index.html","6ef4e20146c1102b33b71cadfd64a382"],["/tags/index.html","6a96fab158aa4b0a28c7f2c19008eca1"],["/tags/rkr/index.html","4f122e9a5fc674767bc10b228b024df0"],["/tags/ねこねこソフト/index.html","a752890b50437643370725e01e2f8eae"],["/tags/ねこバナナ/index.html","ab1d42d95d9fe99eb01838c638b6edfc"],["/tags/停产/index.html","0b6e81447eba534e2de8f5de49bc49c3"],["/tags/公告/index.html","14fd2812c70452cbbd57e62cc64eb631"],["/tags/同人/index.html","0e9dc9bddb8851226c834a954befe540"],["/tags/堀井雄二/index.html","86f1b403481137aa6ddc843b732c764c"],["/tags/外海なおき/index.html","30e0398b25426561272e3091babe79e8"],["/tags/已停产/index.html","83618d614e9b194c7f8be5f27c5da764"],["/tags/水仙/index.html","8ee3d1a347756316684df99ac0aa2306"],["/tags/片冈智/index.html","e65d7a18f5a3e8af63c81b5b6875543b"],["/tags/猫猫社/index.html","117b28348baa3a308f5c54adc8eaf849"],["/tags/画集/index.html","a2c2aff5e975629c7554d5b1e5f7110a"],["/tags/閂夜明/index.html","00dcba01a7028569da11041251b8ef5f"]];
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
