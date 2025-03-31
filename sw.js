/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6602625fe40757cb5ac172f8166a5d2a"],["/archives/2024/04/index.html","fa2bab01e15e174a7f448d4efb630f0f"],["/archives/2024/index.html","85dbf226b052bf19efd0b4ed0dd600d2"],["/archives/2025/02/index.html","aece5655ca64342fd476cd4f194087cc"],["/archives/2025/02/page/2/index.html","a695ddefa70fa899f5b91c90898a8add"],["/archives/2025/02/page/3/index.html","d3b3a0522e970155776bac3038209ba7"],["/archives/2025/02/page/4/index.html","6602b3119b62110447d2577cc842c061"],["/archives/2025/02/page/5/index.html","af127db7403755005bd794f00a9c5eea"],["/archives/2025/03/index.html","297dcb19d7261a86188c12950158f644"],["/archives/2025/03/page/2/index.html","62ba4deb6d9bbeeabf86b6492b24d383"],["/archives/2025/03/page/3/index.html","18209514a489f98d5e9b1b71ba17f634"],["/archives/2025/03/page/4/index.html","11b3b46e5654a6470cb55f36cfc11a00"],["/archives/2025/03/page/5/index.html","289a91de292266377ee1b0643ebbe3cc"],["/archives/2025/03/page/6/index.html","66bab501e4c6ce8e63f9ddc854dce832"],["/archives/2025/index.html","fc95fc2a00cd97c70d8f795bbbabd89b"],["/archives/2025/page/10/index.html","0d9392534d4ab40dcbec4f74c12adce0"],["/archives/2025/page/11/index.html","1fd8e31a880fc9ec54037260b88166b0"],["/archives/2025/page/2/index.html","e66f07982c812f22afaa7ee966617cce"],["/archives/2025/page/3/index.html","48c77e27f0b87072a5537c6050b4a96c"],["/archives/2025/page/4/index.html","8aa155327ac3538ef10d4c0ed01d06b3"],["/archives/2025/page/5/index.html","a960e632de74cac7047121c2cc7b23f7"],["/archives/2025/page/6/index.html","add9ea67c9b9e1d809db7892ae891dff"],["/archives/2025/page/7/index.html","fb207060bb615ede88cc99f0da5ccb91"],["/archives/2025/page/8/index.html","d54b8c65ab63ff3899e22d22918ebedf"],["/archives/2025/page/9/index.html","b4224ff3da0da8358d4784240f4d8b84"],["/archives/2026/02/index.html","a6d9537c557be770f8c24e62fb23bd70"],["/archives/2026/index.html","863ec50e32672c69f547f456e7e23372"],["/archives/2925/01/index.html","6cdf02718fdae6a4700a59a60f55b918"],["/archives/2925/index.html","1e0ddb11f2fc6affa5263604f044c86f"],["/archives/index.html","369b949c80596196f3046bf3ed891e9c"],["/archives/page/10/index.html","ad52722e92a3a122b45d2c7cacedfc3c"],["/archives/page/11/index.html","6bd1b23ee44648dc6dce801de4ba1121"],["/archives/page/2/index.html","1eaedb5b1e8752f3f0a762044d18c1c8"],["/archives/page/3/index.html","94dff76e0cfd4ff3fa060e5b20b6ca68"],["/archives/page/4/index.html","555390acdab581e047c90ba3568b35ac"],["/archives/page/5/index.html","95ab5e32dceb50e4af76d9aaa8e22868"],["/archives/page/6/index.html","a8a0aa6b3a13450f17e6bee1981122f4"],["/archives/page/7/index.html","3f5979eb2adf5604f0261e1ee9cb375c"],["/archives/page/8/index.html","0ffdae53328827ecb3ad6f29050231db"],["/archives/page/9/index.html","ce1ea6b866abab52c6ff9e0f3fcb3a66"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","ebd02d8359088be8651bb66fadae27f0"],["/categories/galgame/page/2/index.html","839b0d04f7e116a9075e112841129c8e"],["/categories/公告/index.html","0c437fc0b5986615e65df496bf4e4e6f"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","1be6ae54a8930623470b431f39034261"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","8b481c9410da752ce0a82638f8ee2eb0"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","9859ffdd1363b3a2b9304947e45edd06"],["/page/10/index.html","4cdbaa38d6873d5181fcdf5bdf6502b7"],["/page/11/index.html","50ccf18ef57e50397a6df295e5b32ad6"],["/page/2/index.html","beb7f7904383bfa5c189557cd77da1eb"],["/page/3/index.html","d72a0e3a5f6a5c3df5758e10ff876607"],["/page/4/index.html","026ad325229828c45ed1bf40a96af570"],["/page/5/index.html","9e172281b2a65b5c1bfc5ce840a20c10"],["/page/6/index.html","72692c566562a578b97a1293e99addea"],["/page/7/index.html","c4305fd36f050d809b6efc5b03305f70"],["/page/8/index.html","3fc0b09c8775f32a38e128f3390a8b6c"],["/page/9/index.html","aeb93d18c179e4e019f54ad446721314"],["/posts/10c9dd98.html","a4be1606911d3645949c8c77da51954f"],["/posts/1295b569.html","a9e8c6eeff821d2b0c52eb46667444a2"],["/posts/1370342.html","b9c77e2570429a5d70ad6b4c4dd745a3"],["/posts/15ef14c2.html","d379a5b4985a4877c4e4dd4969417a3c"],["/posts/15f3959d.html","2550b5b3ddefe6d7c4e909345c59cc6f"],["/posts/18ab785d.html","90e62805f6c688f18a2f2510b81d22ac"],["/posts/1d59b71f.html","85118ab752864aaaf213c15bd29f5169"],["/posts/20b3f3a4.html","3fcfb2814b17a353880b659f26668f87"],["/posts/245f1c7d.html","e1282e6e3322e58608f9c14951e984d0"],["/posts/252658f.html","c246954c06e819e9a5d0bb5e8fd2e39e"],["/posts/28397adc.html","08c9c8f8c4c4cbfda1399a7697341212"],["/posts/2b38bce0.html","e72aaad3754483b8d435d676a05a747b"],["/posts/2c0a6836.html","27769c1e856ed80d7cf85ebd4a4637f6"],["/posts/2cf620f0.html","fe3079f9a328646aefb85c7df6a37548"],["/posts/2e30fd6d.html","cb97164a70ccf4fd6182fdbb892e85e6"],["/posts/34292736.html","76d961fe4cd2319a1ea01d87eb4a823b"],["/posts/3468cbe.html","7717720febfd11c265fcb2bf4c3c8803"],["/posts/39176dc0.html","319ea41e55ddd697d89769b42633ece8"],["/posts/3e118dbf.html","228a345e2b70dba0e746e9e539d61ca6"],["/posts/3f7d823a.html","c9285aa62e97a527f6b4ea10924b42e0"],["/posts/3f978819.html","e0ddeb476d99b7db15dfc1e2260e75fa"],["/posts/43945723.html","91484360bba6a331cbb94278ef2abb02"],["/posts/44124a6b.html","4b4d8d6f884f1cee9b78db712e193a53"],["/posts/47abb61d.html","a593ba343c45f4772f0bae9b937c277f"],["/posts/4b689be3.html","99b10a66a04b730bf9fe37166d2096ec"],["/posts/4cf8423f.html","b1f72417e3160edd9910c6685756713c"],["/posts/4dcf85c.html","f527157c5d2ec61f82827d265cdb90fa"],["/posts/500cd322.html","1afa3a14c9117553efe90049a5b4db46"],["/posts/51c9b1ff.html","52353c27a4cf217d5fbbb2d5e2d6504b"],["/posts/52b5b3c6.html","f0574b2cb4e84f386bb727c6eada810a"],["/posts/5f6e0c59.html","9df3607660dc301f58a7432e48ffa560"],["/posts/61a63a84.html","580ca9a84b56e156bd46ebc1eda18dbc"],["/posts/625ab7bf.html","c8a5b971821499796aafb111eb34dafa"],["/posts/6336a2f9.html","773c7a6d0ed2319a3e13804bb9b94248"],["/posts/6432d61a.html","45bebf9174f92fdf0baff96dde9784f9"],["/posts/6515f032.html","f45ecc27c9e9d6ee94bf1b5bf2b140a1"],["/posts/6720ccdd.html","5d8d56c5d7bbca7dd6506ff1937d61e0"],["/posts/6a4b5ac8.html","2a022a74234164d0424267370b66cd4d"],["/posts/6aa4177c.html","61ad9ef90d9547ce36b18c93fff1c7a5"],["/posts/6b15f81f.html","e514f1598dfe1a7e119092fd49cd1626"],["/posts/71131d34.html","9e6113d25f276b1cd09f871c76836ae0"],["/posts/78a8a8d3.html","57f0f477d05d8ac7fc3de95bc023bab8"],["/posts/7a5ef3d0.html","972ae3cc055daa9a6a9a11e67fba1a5f"],["/posts/7b41e1ac.html","6b1c9a3907bfb593d08d739c10d05fe8"],["/posts/7b51011d.html","866edd444c813c0d947fa33d4d3a3f56"],["/posts/7e3aa3e2.html","00c84978945abd12de0c499507f8a2c0"],["/posts/80fe2691.html","3755fe53276cd580820b2f23f04b808c"],["/posts/81ac52e9.html","3fd346ec8f5099675995af949068671d"],["/posts/8486f6f9.html","94d94d6b4c5ce483b22ea617298965eb"],["/posts/849b40f8.html","5adfee1a79cb27bcbfe77b405b549fbd"],["/posts/85c51d68.html","0fe752c245d84e9dc454fa671f821705"],["/posts/886f8d3.html","9a24aed6341de3f5a5f43af53f811423"],["/posts/8a7cba10.html","3e17ca863a8c95d5194ffd088358c283"],["/posts/8ac11b41.html","18d27f3ca88cb994f844e19e7f0f48a2"],["/posts/8dd520d9.html","a336342f299b92f757078055730915a0"],["/posts/8f555654.html","971e329ba078a1c3449b8558870bd64e"],["/posts/92a980c2.html","a3900a38667110ad2bb898d42d0b1f99"],["/posts/92ce16.html","c95973988b0b2d3ebb836a80f20567d1"],["/posts/93e9943b.html","4b076c6f780f8a7f213c432971499ba6"],["/posts/94d3c794.html","c620b1c78a753254c5e1f187fdd8cc5b"],["/posts/97f50eea.html","c2644dfadf77b0bc185424e0ce47e387"],["/posts/97fca8be.html","5191cc80fee3283352ac363f02862357"],["/posts/98662d05.html","2bcdda4453f09b9d3274e41499467621"],["/posts/9a2f6162.html","e4309fdc3e1399f7fd24977449aea3ef"],["/posts/9b22a48d.html","8d5dfe8b55f152ae908142bab7b04be0"],["/posts/9cb455b1.html","9a25339e8f4974242a9aafff8b0d1a6d"],["/posts/9ecdeecc.html","b7da530cb7612fa74a99306c9c6aeb40"],["/posts/9efd7701.html","90af2f8c3120b8b4e49fe0ff6eae5cb4"],["/posts/9f61c1a0.html","2774a2360caa73e540123b92e412bcd0"],["/posts/a1de710.html","4f6cd096d3153ffb1eed8603ce1992f0"],["/posts/af1807ef.html","08f2097900dca30c67de2bd928ac8383"],["/posts/b497b647.html","61d8821b8f6aeb513136acaf15e7a1be"],["/posts/b4d464b0.html","fb30b834c2ca45ac19e3459d5b6ba548"],["/posts/b5fb773f.html","f7ec3c9bb4af65a049e3bf095f2298a1"],["/posts/b8d46b32.html","2d7216c4b27c2742143ca71826f9330d"],["/posts/c1b2c6c9.html","0532ac9f3f70adc7a900740cad325742"],["/posts/c2111cbf.html","2763ed172633baf04655be2daceaec35"],["/posts/c316c2e8.html","4035702943b0682191cc422eeb2b978e"],["/posts/c43e60b5.html","25336a10e668f0e35d63b33c0f5957bd"],["/posts/c497a412.html","0498360617784542aff4573146063a75"],["/posts/c5de299a.html","69d8b4e76de400c7a502bff9254c96fc"],["/posts/c70bba9c.html","d35bdf91f8caaaf302cb1c17fcc5c3ce"],["/posts/c797535e.html","a9c07d272edac45e1b2cc256a485f822"],["/posts/c7a62c79.html","5a00168ea9f0c361908f15833646b6e6"],["/posts/cae2c959.html","d76fb2850f444320dbc63d46df9b321c"],["/posts/cbebef2b.html","9c53162af17bbcff24af94ae10e1670c"],["/posts/ce25023e.html","44759fe9ac48f8f65e75707c68e9e1fe"],["/posts/d2fd4837.html","095b5b503cda73c2e6fe64f204ff175f"],["/posts/d3233cbb.html","6c1b357e72d2f9eb89df3839eb5ae3d6"],["/posts/d3a745a8.html","3274d0f5b265bbcabca1772f632cf649"],["/posts/dc815d5.html","a7e278dd40439453f93ecff4e14ff4ad"],["/posts/e3ab6ad8.html","0eb22089ec691be6aeda823c21c1a3a0"],["/posts/e5018da6.html","7b0910d71e9807cf35fc592798293a2f"],["/posts/e5963272.html","8246104e6545b75f9558e29bc3f5f80e"],["/posts/e624b065.html","5f050a5a30feae2e26f2cc50563bfc65"],["/posts/e7c703bb.html","61ce77a8e3add0e083d44259b466685f"],["/posts/e8f14b6c.html","91d4c65cface1a37bad9e81c728f6470"],["/posts/e91abb63.html","8ba19ebc7d296909ce6dd1db55152fc5"],["/posts/ea9a8808.html","a2bd70d2f85ae9743a02b7ecc7abbf25"],["/posts/ebaf2232.html","4332da7f0036c6ec8073795beb9e526c"],["/posts/ee1ed673.html","ba5facd2660bafeb9846e8b9c4ad0eed"],["/posts/f0c3ed61.html","ef371044cdecfc61e7c867cdbecf619f"],["/posts/f21e7f84.html","6e3b16d81002e612adcb0aa8b70e0ccf"],["/posts/f230b0fd.html","cb6fd970def5c4ec79bb894c4d224419"],["/posts/fc04d0d4.html","77a5e0176ae68e46fc1b03818926e75e"],["/sumire/index.html","c078253fd1dfcae9b95348083a824c25"],["/sw-register.js","869873c792be2322f61706d1c134179b"],["/tags/APPLE-project/index.html","86455b96a1270c1207ff0c9b4aee9342"],["/tags/BELL-DA/index.html","90c2499a9a47c253c53e962729deb1f4"],["/tags/BL-Game/index.html","fb6ec41e01a4bd743edbbc8480d7d5ce"],["/tags/Blue-Dahlia-Digital-Creators/index.html","41f6438c1bcd5619a2c5652a8458f88b"],["/tags/CHUNSOFT/index.html","6a53fff5fc321edeadf0e95c8962e36a"],["/tags/Cherry-Pie/index.html","bc0e37561508c6f3768b0a7992047585"],["/tags/Circle-Mebius/index.html","73dd21647083efacb2391059d9d0392e"],["/tags/CresCENT-BLANK/index.html","b7b36e79babcd6e9b9c126abba721147"],["/tags/Dopamine-Software/index.html","c4d76f2049ce128c289ec02abbee5a8d"],["/tags/Dos/index.html","2922919d87fba5d82c43a59e41817399"],["/tags/Earth-Well/index.html","35728d63758becc576495cc31db339a1"],["/tags/Kanon/index.html","a4cb85bfc886d70411ab71a3ba97fcf3"],["/tags/MANATSU-8/index.html","fd322cd786fe21b1273ddfc1d51df907"],["/tags/MIO/index.html","de30c77c97e6c6c1274bc049629fdfae"],["/tags/Nmyu/index.html","89b54e575ea3735f0a6426199d886711"],["/tags/O-S-I/index.html","77bc24230cda8b7639a5fb52e877e8ea"],["/tags/Omegaの視界/index.html","668a3478e9579b9a437368fce65bd41f"],["/tags/PC88/index.html","01835dbb3154c82b676f4cb2f05a86d2"],["/tags/PC98/index.html","2608c2dac8f19b230bd3387f7a64106c"],["/tags/Perpetual-Room/index.html","5952d80bea295a348a31340430225047"],["/tags/Pleiades-Company/index.html","18ad10a3b57e21e197276c501d9bc8e9"],["/tags/Project-Twintail/index.html","fc581368aaa81b19b05e2ca0c6960c67"],["/tags/Reverv/index.html","2db585b149cf0b91178d159820d1c0f8"],["/tags/Saihate-SOFT/index.html","bbe778801ab486af9d4732455bf9c5e9"],["/tags/StrayMoon/index.html","e3141a6d9a0413192bbbdd619fba657f"],["/tags/Studio-Bu-Sa/index.html","7cd34b7e7ebeed527d32d061457406fa"],["/tags/ToHeart/index.html","e0e70773a10f37bb3472f943e1e9c55d"],["/tags/Traumend/index.html","3e35e73e26ce9e691f4c98d670fadeb6"],["/tags/Witch/index.html","1711f4c3d3307ebb02a1e0dbd6f592f2"],["/tags/adonis-project/index.html","599b9c1a7fe08deb53bab48cc6081be9"],["/tags/flash/index.html","4f7627ee0a9256b3380a69cfba04c3de"],["/tags/galgame/index.html","43e2893b6d00aa7192d5a25a3373b208"],["/tags/galgame/page/2/index.html","6ffc32f9ebc094b0ae9e20893a49fbc9"],["/tags/gal资源/index.html","e3678c774c594964fb3522201f984bf8"],["/tags/gal资源/page/2/index.html","991ea0569c8a3ec779671f3a37aba70e"],["/tags/gal资源/page/3/index.html","024551826f121dcd9729533f58f5ec72"],["/tags/index.html","2b6ed206df13990e5fa82a24faaca35b"],["/tags/rkr/index.html","3d59b5bbe4ed48e0d270cfb016c8bf4f"],["/tags/team-eye-mask/index.html","a34efe9d8025f75844dbc3fd42222e4a"],["/tags/ありすくろいつ/index.html","c80ca987be73168dda5bfbcd0e50221b"],["/tags/いつものところ/index.html","51b8176a92f6a71a72a8993b41bd5bda"],["/tags/きつねみみ饅頭/index.html","2ee59daee447f7004d9a8be9cd6497dd"],["/tags/ねこねこソフト/index.html","e5cc7ea2b123e96ea6e889edf0b6499f"],["/tags/ねこバナナ/index.html","95e78a9768c11e27b167fd39740526c2"],["/tags/はちみつくまさん/index.html","3ff43517782b60590a1620a14c2ab464"],["/tags/ろりちせ/index.html","72199896083f5ab35586ce937960e846"],["/tags/アイル【チーム・TATU】/index.html","c54abf20dd20a709c8da4ab9358dbe25"],["/tags/アークシステムワークス/index.html","21bb9779f411132a6a6348dd72574eb5"],["/tags/ブロッコリー/index.html","895878db95cae8c066075f6949f748ec"],["/tags/乙女/index.html","9f73d7190f7b035679668a4fa0cf8398"],["/tags/停产/index.html","1d317f8c555a8fae9bd61c2e2b60090e"],["/tags/公告/index.html","1cf60351524ffe8de48ceb62d91d06c6"],["/tags/同人/index.html","66e4c399b84aa87fff2c7c83a78f2398"],["/tags/堀井雄二/index.html","745650280523968c3e5a581013f25cfa"],["/tags/外海なおき/index.html","772d61b143de8c524f08853643091656"],["/tags/機械式少女/index.html","ff09cfb3d4f927273afd214a5cca542d"],["/tags/水仙/index.html","09236b7339a3270f6b9190d7e220986b"],["/tags/汉化/index.html","4f737d66f85fea7f2b34c9937794294c"],["/tags/片冈智/index.html","abca7098bf2c5706bc2dc278cf39ab68"],["/tags/片岡とも/index.html","7cae87fdf9831e5890c8c8afb36aac95"],["/tags/牙の刻印制作委員会/index.html","19f28e8ac889291769110252679852a6"],["/tags/牛カルビ定食-FLAT/index.html","7020258390e09c431d766d0e5d2c1647"],["/tags/牧尾屋/index.html","4dd3f3eb401cb84c29f954c420518862"],["/tags/猫猫社/index.html","d4ea99a277fbdc88461c0ec676231289"],["/tags/王宮魔法劇団/index.html","3beb6c6ce0c2ecb226bb1255dcdd5852"],["/tags/画集/index.html","5e978d2ed15ab649e53d5f976197ad99"],["/tags/索引/index.html","66a37ee7b50e1c911a5072a7071f6b6c"],["/tags/自购/index.html","fffa1cfa875744a36aa700ae952a6195"],["/tags/郷愁花屋/index.html","a22d7af47d8115630949ba16f10712c3"],["/tags/閂夜明/index.html","b08a42da8e552e69bd28855d810a8cab"],["/tags/音乐美/index.html","e0875701317493384e6c67e2e18b5dee"],["/tags/黒†救/index.html","11fc42e3d4100722c76c190b31435f51"]];
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
