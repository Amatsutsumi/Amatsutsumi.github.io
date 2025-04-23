/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6471145d975ef24b449f935a21363a78"],["/archives/2024/04/index.html","ef7a174a9119599c4a86d017a9939769"],["/archives/2024/index.html","9f01708fc9df1da027838ff0c216e44d"],["/archives/2025/02/index.html","48254a5e8d1d2bff7606574f53d6e6d0"],["/archives/2025/02/page/2/index.html","1506b166900dabfc27e6a8bee192dece"],["/archives/2025/02/page/3/index.html","6e245fa61a15ff60229ac35ae6b5b24b"],["/archives/2025/02/page/4/index.html","adf7c39cc75e0e6964e0575e7f463677"],["/archives/2025/02/page/5/index.html","bda4a6e8551e4324f081950ba3582a9a"],["/archives/2025/03/index.html","c8d0441850dfe9bfcba4a0c7843f66b4"],["/archives/2025/03/page/2/index.html","b51a1b6513b7b830d1c61c0e835bf5b6"],["/archives/2025/03/page/3/index.html","37d241740b0a284f100c0dd9d8217253"],["/archives/2025/03/page/4/index.html","31aeaafb6117c65f781544515bdb1caf"],["/archives/2025/03/page/5/index.html","913c1e84de9df2e8b574a23ba033c5d1"],["/archives/2025/03/page/6/index.html","2c3fcde27ba3619e86078b92c684f43b"],["/archives/2025/04/index.html","2018012b68848a9e99405f7617cacc6f"],["/archives/2025/04/page/2/index.html","19e486b869119c87d691dad8c9b9428d"],["/archives/2025/04/page/3/index.html","d86b3f6eb7ea44da89dc6295cb88c96c"],["/archives/2025/index.html","b220797ea76e5e438e858e516039fa17"],["/archives/2025/page/10/index.html","228e85bbc70f17c0bc68bc10fe0938e0"],["/archives/2025/page/11/index.html","db07d640764a540714cfd3f55619ec7c"],["/archives/2025/page/12/index.html","979f66153c2c4289c9a891fc82dabd9a"],["/archives/2025/page/13/index.html","306bae5a1ce5aea65c80df895ed651ed"],["/archives/2025/page/2/index.html","83ca8bf6c4a655f5012e0c35efe93555"],["/archives/2025/page/3/index.html","b71df9c4b7e156e83f6833c39702788e"],["/archives/2025/page/4/index.html","d5e55f22bc7ecfcbe62a183958e81485"],["/archives/2025/page/5/index.html","baf714bec2e961fedbcb8aee6a938284"],["/archives/2025/page/6/index.html","9dbb4ba5e2cb4b4ed14cfaa31c3da1e8"],["/archives/2025/page/7/index.html","1c68eeba0dd8d8698bf5d070ad11f4a0"],["/archives/2025/page/8/index.html","cc32e25a0605418b97c75c176eef9248"],["/archives/2025/page/9/index.html","2417c7620b309969f94fba5a11f048e2"],["/archives/2026/02/index.html","e26692e050934b441e8c84183d23ce70"],["/archives/2026/index.html","157e2f5878c2c2bd444e693892bd5713"],["/archives/2825/04/index.html","413aa06b75f6fb69115e3981224fe7bb"],["/archives/2825/index.html","ac7128fcc1efb390f46c0f7b118c57a7"],["/archives/2925/01/index.html","f65cdfcfa0d6b610c0b6bad5352e4815"],["/archives/2925/index.html","d9ced60fc6c3b9ce174e98d4047930f4"],["/archives/index.html","ae416b84b1c34a30ece7229ec658a25f"],["/archives/page/10/index.html","210ef9a52a53781b24d120d15558376d"],["/archives/page/11/index.html","4b9cf94089ddbcc64697cea5f83a8078"],["/archives/page/12/index.html","c7876e1b6a2b49841d6540ce095f9ed2"],["/archives/page/13/index.html","0d4a6cf9edba08db7c7edb1b5f188b18"],["/archives/page/14/index.html","2c80ad1cb1692eb4e4066b9ac6982505"],["/archives/page/2/index.html","e476c8e29691147a17bb0d37c7b29950"],["/archives/page/3/index.html","d4159c1a37c694673de7523d5bce874b"],["/archives/page/4/index.html","84ff4452412ba6cf162e25053ecf83fb"],["/archives/page/5/index.html","ef6b5f0fbc64a04d7a752aed99d4a157"],["/archives/page/6/index.html","76c38f439f92fc7820edcba7ad45569f"],["/archives/page/7/index.html","acec8c215dcea234604cc0d97f88ce8f"],["/archives/page/8/index.html","118049c8302bc930963216cc73f5577d"],["/archives/page/9/index.html","a41d5f846fa8002cf99ce0c80cca304a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","081940c738bd563c50f5f2a2d330949c"],["/categories/galgame/page/2/index.html","7fb4fc0710dd8a0e83a673670430b1f8"],["/categories/公告/index.html","3ee1c74d9ad7e62ce43a77200cc4875e"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","74ff1d6b5f941eaee587f8fa36690687"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","3909b881b904168a82edd4cc75a4bba4"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","6366938cffd84c898e43a111c06bbc54"],["/page/10/index.html","66ab716f9ebfcc50d4226dbb48d6fcd5"],["/page/11/index.html","40f1516e0cc1f81fd4455de6cfd4c368"],["/page/12/index.html","f90501eac7a0fb60cf663f08a6e035f0"],["/page/13/index.html","30cb1c7e94561e8294c121f12eef19c5"],["/page/14/index.html","a7efb39cf62168a65b3a945345b8cdb7"],["/page/2/index.html","b91fb15b5891b56759fabe4f6270d1a6"],["/page/3/index.html","6d941df0a8d571ed760091a519332cf2"],["/page/4/index.html","f2cea0708c326bddede4f8c1319ea63f"],["/page/5/index.html","10cba8b5d9ead212912fc29cc4193ff4"],["/page/6/index.html","2711eedf8198ed98bc07b200e9490d69"],["/page/7/index.html","c9114c5c50aa8cde0e90d36c5e6906c3"],["/page/8/index.html","57cb6cd38b33006890bf5208ec5f0fe5"],["/page/9/index.html","8836a2121f45bb62dead0d2e2375c95c"],["/posts/10c9dd98.html","367997c439683a43442c2557a6c1a4e9"],["/posts/1295b569.html","0706c04f26e37339e354460d9ea84bd9"],["/posts/1370342.html","3d903f0d45d2b7fa086691fdff0de519"],["/posts/15ef14c2.html","a7717664183d8d894dfd52b8a9b3bcef"],["/posts/15f3959d.html","405af68e13cec4a71dce3b02b08ef74f"],["/posts/18ab785d.html","e70fdc49508c22d9611d57dc1844895b"],["/posts/1d59b71f.html","4e1f2d463d953df03b9fe4c37d3a0cd8"],["/posts/20b3f3a4.html","9487be84b0e0c198c1d0489c0457ad81"],["/posts/245f1c7d.html","99fbd259148e583398fe042625abf68d"],["/posts/252658f.html","d30f024b6eb2192c59c3f88752349bc0"],["/posts/28397adc.html","3c087170b0b242360dfd46e1bba705ad"],["/posts/2ad07f54.html","b9bd2d8b7f615c35b7cadc3b39e46ae0"],["/posts/2b38bce0.html","365ff17af2787a13e4479e6610946135"],["/posts/2c0a6836.html","05cc4f0d39a82dbd79d81e93861dca6b"],["/posts/2ce39bcc.html","eff487d509281439dbd20691435b5457"],["/posts/2cf620f0.html","ef5ecdb5aba4a30acf7d8dbb202f0883"],["/posts/2e30fd6d.html","781abb3d3527daac21b0294b066a6ce5"],["/posts/30a413ad.html","2017e15a7950c1eb0fbd342034f90071"],["/posts/34292736.html","a7c71a69e14a06ff05e4b83259cb93dc"],["/posts/3468cbe.html","15a9923f2625dec6ccc73994dbb362c3"],["/posts/39176dc0.html","528a9aec3d2eb527707dc985fbe6a995"],["/posts/3e118dbf.html","b6d13bbdc1124b720b9ca83f89959b65"],["/posts/3f7d823a.html","621b56e69ff509c125e9f11ba256cacc"],["/posts/3f978819.html","74ef2488d3982994e995f67fb7a69489"],["/posts/41dac80e.html","e681129175952eae6b53422ccc696825"],["/posts/43945723.html","59fb3b1d157fcb96e88ce92971e1c16a"],["/posts/44124a6b.html","2160ed5f40ecabc31267d2193b4386f0"],["/posts/47abb61d.html","fc291a3247cb969260e2897096fc1d0a"],["/posts/4996478a.html","08b2fb2d74695df81155207a65d6ff97"],["/posts/4b689be3.html","29f43f222a22d8b8a005c05703417999"],["/posts/4cf8423f.html","ff318536da9f1f6b1f00a727299a3a72"],["/posts/4dcf85c.html","2f89b851b2046a2791a9faf406f10a56"],["/posts/500cd322.html","6da6bb75ad0bbe8a6fed058de7a92cdc"],["/posts/51c9b1ff.html","2f2b61b260ea2c7ee4206a44c9c1b1d7"],["/posts/52b5b3c6.html","3137d384e30412e6e3712884c9276be9"],["/posts/54f496ad.html","a5fcd5699ba7d7e369c6a6812b1b1231"],["/posts/558e1f30.html","fef4f704eb9812da6cf23c082ff985f0"],["/posts/5d8bea92.html","dfc19d1240f82df789f003d2fe88d328"],["/posts/5f6e0c59.html","30d3db19cb7bca7da80132f9d03f77c2"],["/posts/61a63a84.html","118f7a8cbc211b97ab9047a9c8c05a17"],["/posts/625ab7bf.html","9299205f4246f42714ee8f9e75842f09"],["/posts/6336a2f9.html","19765060232661ab3e8e2d7d5533a78a"],["/posts/6432d61a.html","e98355d8e41a38e2802718ae96a00ffd"],["/posts/6515f032.html","b6ba3edc27602462c08bcdba21ddcc66"],["/posts/6720ccdd.html","b2ac5013eb3caf373ff6f48a09dfa021"],["/posts/6a4b5ac8.html","dcbc8fac8141db7c43511d27c9b242cd"],["/posts/6aa4177c.html","f33ad3158f3a8a38344f320cbd5a0ab0"],["/posts/6b15f81f.html","0ad58afb61c6962934b045f6578a2aaa"],["/posts/71131d34.html","58b83fbda332ad31b9540ac0d4b30828"],["/posts/742fd48d.html","9c2db6c5421cea2fae21977a21b83ed0"],["/posts/78a8a8d3.html","51e13ecf7cefc7393eef360a3c7b2f37"],["/posts/7a5ef3d0.html","c75b3ce7266b70283de7042131adc881"],["/posts/7b41e1ac.html","439fd61aafa9a7f6c710e39852fd68f6"],["/posts/7b51011d.html","2f3256ca4e64eae8f608107aa5b158f1"],["/posts/7e3aa3e2.html","0aec6c069925e84bd3cade07858eea5e"],["/posts/80fe2691.html","58786f80fc1b7758da925ababe1ca0c1"],["/posts/81ac52e9.html","4140e0ce42f9a62db2899770175d22e2"],["/posts/82332d11.html","e3ef48e57757dbfbf60c9641c572103b"],["/posts/8486f6f9.html","c8c43c5a154722577edbd82d0913aefa"],["/posts/849b40f8.html","aefc7a0e07a04924e95d5371eb96d7ed"],["/posts/85c51d68.html","76ccac571164cd22d5ef1d5129b44a1f"],["/posts/86a6c500.html","842530c6667472b213be708fd1822663"],["/posts/886f8d3.html","965485137699c27fe43f5248e214d77a"],["/posts/8a7cba10.html","2988b9a23ed115fa3e7804639be89088"],["/posts/8ac11b41.html","18b96444bea352c8498347559ef95c3e"],["/posts/8dd520d9.html","e5a1902dcba853ebb2d0835480fb4e7d"],["/posts/8f555654.html","850f199a83a9a1be3cfcd1153d7028de"],["/posts/92a980c2.html","096cda3c2e18095342416cc1b3e9eb80"],["/posts/92ce16.html","36163cb792c8be4d0d486859ced8a4e9"],["/posts/93e9943b.html","811dd5bfec2ffcc8f34c3151e34b303d"],["/posts/94d3c794.html","66ddd048323a18e8de9db9c812e98de3"],["/posts/97f50eea.html","16edce01394ade4cb3acab295ccd818a"],["/posts/97fca8be.html","cb0e116cc79dae32c7d485cf3773970b"],["/posts/98662d05.html","34ab0b4804c91eae82eadd22f1379f8c"],["/posts/9a2f6162.html","85e428ecdc769d62f49a8c163932259d"],["/posts/9b22a48d.html","f005e611ae55d573e6106182bf6e8903"],["/posts/9cb455b1.html","0c8b3a8f3c71bce39d5ce0c25a0b41b4"],["/posts/9ecdeecc.html","1d24b46e524e690cdbbc0249ce9734e7"],["/posts/9efd7701.html","6c16bc7169f8012906c949c0b14ae9c8"],["/posts/9f61c1a0.html","015f7b20f20ea3bc849378416c479eb7"],["/posts/a1de710.html","32ba7ba93f0527a9f8e923ccf2989b6e"],["/posts/a30eb0cd.html","ca99cc5eb55045fc012863b5c2a7e864"],["/posts/a7634b5d.html","21ec9b385e36e76cb842023214a82dcb"],["/posts/a8c593b5.html","541a2d042e11e841c207761d701e793f"],["/posts/ad0c1efa.html","6f905564e2e4ece9f4a36eede6491810"],["/posts/ada3f440.html","a0b88e3cb2257d1a9fa7e2205132bdeb"],["/posts/af1807ef.html","152232c1276f67c3b29feb0afd1089c4"],["/posts/b497b647.html","d6bbc75c1558b305b4c653279a0f0471"],["/posts/b4d464b0.html","1d751fde8ebfe893756c253e3e884037"],["/posts/b5fb773f.html","0ce47472f4c0ed0caaed622cb11371d1"],["/posts/b8d46b32.html","36023c0afd55954b17dda60b55a112a1"],["/posts/c1b2c6c9.html","af39d278fccb7b6f07dfdae296508834"],["/posts/c2111cbf.html","fea8f82ff898313f904da84ed91ac0b3"],["/posts/c316c2e8.html","82e03090fd0828dcbe37cfe6049d9e91"],["/posts/c43e60b5.html","e0b8135495fbfc7fedde8b4e1f49e2e8"],["/posts/c497a412.html","56024b31c7b59cdf946dfc9cb6b0f068"],["/posts/c5395ba3.html","2adb328a0d2f4d8af34f06e0ef3dcd72"],["/posts/c5de299a.html","fcfdca3ac1a25914ffb282a43d7b82d3"],["/posts/c70bba9c.html","83c5c474b200508c00f5af3c461d67bb"],["/posts/c797535e.html","3aac3de642e4a8567946d0320f1b6e62"],["/posts/c7a62c79.html","5035223963f56c3753e415a76d44f263"],["/posts/cae2c959.html","8d2c96fc9adc7d5cb97d226544bd2acf"],["/posts/cbebef2b.html","30112eefbc927d392403a87334b9e1d8"],["/posts/cc4c0017.html","df1db8bef1651ffaa5422f5361a1fc7b"],["/posts/ce25023e.html","a66476b02bb8257648fc9d9392f34245"],["/posts/d2fd4837.html","53457cfd19798aa5acc71be94a6c7034"],["/posts/d3233cbb.html","e4b966dbfd64643fd2664f03f30ad1c9"],["/posts/d3a745a8.html","27d46dd0c7e2c89a7986546c5b81ffa8"],["/posts/d7e940d2.html","4ff87e947175c0ce00409ce65c4ba55f"],["/posts/dc815d5.html","d03eaa6bd1b13a53f0e7b1b2774202e3"],["/posts/de25b0be.html","6dea6d65c272ad79f7f026742b15ed4e"],["/posts/e2623b4e.html","66855036fd73632236d39f640d10ea1a"],["/posts/e3ab6ad8.html","3c9fea7b96c4346cc4d5e2e39546c24a"],["/posts/e5018da6.html","fa8224545095d2177223da779f957b3b"],["/posts/e5963272.html","34848c1bab2ab404d8b4e8ca72dbff0b"],["/posts/e5ef4c3c.html","a3944d18a4fe6211306c6618dc667634"],["/posts/e624b065.html","3681443bf65f3ddad97a9d2285b295af"],["/posts/e7c703bb.html","767195d7d86cd6050fe8c4bf153d10d7"],["/posts/e8f14b6c.html","2a7966c9bbf5dcbe2c57cb9c556d42c6"],["/posts/e91abb63.html","3353459a2fa6f9689eea58972b018ed1"],["/posts/ea9a8808.html","aee4b132a53e2b8d7bb3504f0acef995"],["/posts/eb784749.html","3cab8e2c67e9d86726965d0beb5e6501"],["/posts/ebaf2232.html","1371a38856b56d29a9a9cebe3c525c32"],["/posts/ee1ed673.html","1c0dd712889708bf0dee8743d54e0ca1"],["/posts/f0c3ed61.html","ba69c8a32087a467d37e9f0867fdaccf"],["/posts/f151ff43.html","ca19131faa39c092735e61e36af098c1"],["/posts/f21e7f84.html","d04dfbfa9a065091fb20de25d26febeb"],["/posts/f230b0fd.html","1fc2e38de0728dc22683719fb84d1749"],["/posts/f663d5cc.html","61f342eabed10b39a24ebcd096168069"],["/posts/f730ad18.html","5c326c3e436ecd0d25d1e7fb140d12a5"],["/posts/fc04d0d4.html","c2e5dd731c7920e2d094a753758669f0"],["/sumire/index.html","6eb1d29ee5404eb0acbe498af892a5b5"],["/sw-register.js","a74a1d04c2f399197aac95ae083819ca"],["/tags/APPLE-project/index.html","b586fc8a48dbe6df7a1bba11716f438b"],["/tags/BELL-DA/index.html","90ff8fdae5780bb844035f45164e8d8e"],["/tags/BL-Game/index.html","d16479fc6e4b184c8da642bcadc63347"],["/tags/Blue-Dahlia-Digital-Creators/index.html","ea91f7ad5cd3896e4bf29ff6a78e857c"],["/tags/CHUNSOFT/index.html","d4a75d2d065727e8cd93a3bf5c48c8e7"],["/tags/Check＆Stripe/index.html","9b669ffe9e0dedf783379e74222061e6"],["/tags/Cherry-Pie/index.html","e9fe89080a01f560577b3a42f5d5bf92"],["/tags/Circle-Mebius/index.html","88a9ce068c7c83ac2b0656f4bfc181a8"],["/tags/CresCENT-BLANK/index.html","ac5b753266aae1687929a34b42c03a73"],["/tags/Dopamine-Software/index.html","58eddf44a43857b7de7608645973c73e"],["/tags/Dos/index.html","a2ad87ec04bd1a1684198be83e31084c"],["/tags/Earth-Well/index.html","3b28dce6209227c6f54f69982384a3e9"],["/tags/Forest/index.html","5e13f35816b4a69a49ff4c5642bb2d5d"],["/tags/HaccaWorks/index.html","ce243415720717c0e90082a067291ff9"],["/tags/Kanon/index.html","a79b02088547085117fe30a7bfc60c9d"],["/tags/MANATSU-8/index.html","f4df412a46c5abb91f1034ba804309d4"],["/tags/MARINE/index.html","c33b99cb6cb918cd7cfe87543eebcf38"],["/tags/MIO/index.html","2274aaff820a908c9cea90abb39c2128"],["/tags/NAOX/index.html","68826090aa15ac68b28182b9944adbb4"],["/tags/Nmyu/index.html","34278453fcf79aa90e30f243cc0a95ba"],["/tags/O-S-I/index.html","024f00f3f0ce4d55f077014955f73a04"],["/tags/Omegaの視界/index.html","afa9c596ed88a8774c2170d29fb6c53a"],["/tags/PC88/index.html","f388f78efb254b011590d96329d83b08"],["/tags/PC98/index.html","8b4b33fdc10e0fd903933ab7ae393f4e"],["/tags/Perpetual-Room/index.html","8f71a31d28a03fce75e4443e741c9398"],["/tags/Pleiades-Company/index.html","0ada4d36dbad53a8b6ea54abda43a4ae"],["/tags/Project-Twintail/index.html","d773c14c32c67b4adeb78b6308dce74e"],["/tags/RIFF-RAFF/index.html","da10555b918603d7baeee9aa6c1dba63"],["/tags/Reverv/index.html","a13a6ff7fd3bdb78ca9622831c8d85a9"],["/tags/SENTIVE/index.html","932160b8e13c4ee0908860d691324583"],["/tags/Saihate-SOFT/index.html","e9ebc92a4b4c762e834205f9b4c9fc30"],["/tags/Scrubbing/index.html","76e470fb11829b6309efa298bb3e2177"],["/tags/Sky-On-R-imaginAtion/index.html","26c91f6186ea6a9f8cd1ef79ad61cb87"],["/tags/StrayMoon/index.html","4a7f70e625c87bbd87ea09b46189351b"],["/tags/Studio-Bu-Sa/index.html","c2d9f63d5ef35788a83ed09c9191ea96"],["/tags/TRANSPARENCY/index.html","1041b0c1c2d6fb4e0276637da2395fa1"],["/tags/ToHeart/index.html","5a01baee3ee73c09d4fc9b3988ec345a"],["/tags/Traumend/index.html","c4b514f6ce61582e9de23fda41dc5f0b"],["/tags/Witch/index.html","96c0c3cf19dd963faffd82fa0fdaa868"],["/tags/adonis-project/index.html","5ebbdbd3ab3c4e92dac7689f7ba50f1c"],["/tags/capriccio-suite/index.html","b72cb3099119c2e866a770700f110e71"],["/tags/flash/index.html","22172cdc89f575452407ca95c8b5b151"],["/tags/galgame/index.html","f269dd9d6811fa90c0839b7636bcff02"],["/tags/galgame/page/2/index.html","122cb192ad7058221653a47637580246"],["/tags/gal资源/index.html","659ff5bf5038e1929f9c1255c036fd06"],["/tags/gal资源/page/2/index.html","d0665b7e1c41920f56edb4be32c8093a"],["/tags/gal资源/page/3/index.html","f8b45cf78ac2393751c4f1158a4ca593"],["/tags/index.html","ffb23f9a9154834225346a37cadcf990"],["/tags/rkr/index.html","d25a9a617ddc3ccd1efa7a9885862114"],["/tags/team-eye-mask/index.html","2255ca30f35a6aeaa66084884640e41e"],["/tags/ありすくろいつ/index.html","3b285dd4e6eaf170b6587b541e0e7696"],["/tags/いつものところ/index.html","655398906b8fb444183e417a5a51db5b"],["/tags/きつねみみ饅頭/index.html","41a1b4a2081bcd81503fe4b35e43ed9f"],["/tags/ねこねこソフト/index.html","d0b20dd27c1e95949dc90182a78885f1"],["/tags/ねこバナナ/index.html","c5d4af2d4fe1588d2cf03f5ec0c10872"],["/tags/はちみつくまさん/index.html","7758bfa5ff4048e21eead95368d518f0"],["/tags/ろりちせ/index.html","4515d143730a28addeca403f81ec13d0"],["/tags/アイル【チーム・TATU】/index.html","f7f182fc5b4a889efb29090336c2f535"],["/tags/アークシステムワークス/index.html","45571289039eb029b253a8056382f83a"],["/tags/ブロッコリー/index.html","17280cdbbae1fb1a305de5b688a34ed4"],["/tags/乙女/index.html","8e47153b398a2204468b5975f3d7114a"],["/tags/乙游/index.html","d0dd377e99879b2f36177a8fcf41e407"],["/tags/停产/index.html","221bb564a3260cf47a9f186dbd807823"],["/tags/公告/index.html","c8837b98a883523fc8989f66f22cf19f"],["/tags/同人/index.html","304b0e0bad430e758b4b1bf96cd50c98"],["/tags/堀井雄二/index.html","8b101229e6c6c49b8782611acbf965b6"],["/tags/外海なおき/index.html","6c63dc0efbee4aa5add495241cac4c51"],["/tags/女性向/index.html","cb80c910eaafe89e090cf682aaf7587c"],["/tags/御茶ノ水電子製作所/index.html","5500bd0a5a6d2c01c2a8cee8f54a15b0"],["/tags/月の水/index.html","05279ab9e623e9cdf5e754174fd233b1"],["/tags/桃野衿/index.html","26bda2d0e006fc3989fb9e982b2566b7"],["/tags/機械式少女/index.html","21377afde419e27f87fd837726f996ff"],["/tags/水仙/index.html","fffa9b126740fac8ad3e9df0037f81c6"],["/tags/汉化/index.html","b874f45d9852ecdcf7e184c1e17c6237"],["/tags/熊月温泉/index.html","afeec6207d348823b8b116994eccf66a"],["/tags/片冈智/index.html","4f77f9a661153aa0369232564ad55f46"],["/tags/片岡とも/index.html","85dddf22cdee212dc1390a5aac5c8bbb"],["/tags/牙の刻印制作委員会/index.html","92115fa3517e9b428b26404f49550fd8"],["/tags/牛カルビ定食-FLAT/index.html","dd03c85c389c5502fd79d670b39b371f"],["/tags/牧尾屋/index.html","23c2bb34b1c38acefba1d28435586a14"],["/tags/犬茶屋/index.html","946d58ff2948e1900d2f9b2c516adac0"],["/tags/猫猫社/index.html","897360df566acbf18636dd30c34b8c10"],["/tags/王宮魔法劇団/index.html","54ba9e123db22f58efe940878786e278"],["/tags/画集/index.html","f1d53b9cd6013032b5af56227717f558"],["/tags/索引/index.html","4ba703afa474f92a1e62b45b234c4414"],["/tags/缺失/index.html","1faf3485a680337508e1c8baaeb97630"],["/tags/自购/index.html","2f2db1b4107c8a0d96f0bc36b9d4a1e7"],["/tags/茶葉☆姫/index.html","3d112ebe68e9f9261080fe7cadb4b16b"],["/tags/郷愁花屋/index.html","0eef4e423aab88754dc00014ee5e3f2e"],["/tags/閂夜明/index.html","bd4e0634bea8db0c79a33f2449be7005"],["/tags/音乐美/index.html","aeddfadc2b555a01f955f5daeb37bd07"],["/tags/黒†救/index.html","6b0300d7dfd1edceba31457ecc4f8fbd"]];
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
