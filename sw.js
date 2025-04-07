/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","361fa4e580b9f802062671a2216f3389"],["/archives/2024/04/index.html","878d19f558fd4fb23ebbcce011987205"],["/archives/2024/index.html","760c49f8e946917a70c94d6f05676882"],["/archives/2025/02/index.html","49e05298bb89464deb2d5f18567726be"],["/archives/2025/02/page/2/index.html","1c60bf0d2bac3770be933904d6c43f7b"],["/archives/2025/02/page/3/index.html","58fd65254592fd243314692f4919fa60"],["/archives/2025/02/page/4/index.html","9f89911754e3ad5bf4c3ac8a48f54f91"],["/archives/2025/02/page/5/index.html","e19ad66ee8b81b0fc24ae4b7f68f80fb"],["/archives/2025/03/index.html","eba6b2878c9caf3acb0b8231d0e9b6db"],["/archives/2025/03/page/2/index.html","f5c0f965f4c9818ce6d0d6c0e7ae1789"],["/archives/2025/03/page/3/index.html","05b8844a478d6921ae4fb4711f4bef5d"],["/archives/2025/03/page/4/index.html","40a3f4e1ea61c384431b612e0def7fd3"],["/archives/2025/03/page/5/index.html","84074b5eb9313b62fdb9da0fba00335c"],["/archives/2025/03/page/6/index.html","51aec59d8e783a1ce40e1d59cf3a2a35"],["/archives/2025/index.html","c1b5cefbe9298960842d5afb463eb18d"],["/archives/2025/page/10/index.html","2947e6f440adc2e03e0b4c7a01ee4f6b"],["/archives/2025/page/11/index.html","7ca4c5db709d08ab22716b0a20b515b1"],["/archives/2025/page/2/index.html","73b1543b854e0b9875647c7af7e5758f"],["/archives/2025/page/3/index.html","5a9ffd7335f7542c3423f8fabedfe5f8"],["/archives/2025/page/4/index.html","fc8a7b37df63c53151136c20eea135fe"],["/archives/2025/page/5/index.html","862e63481193a7d0e8b8fcfaec914ffd"],["/archives/2025/page/6/index.html","2452e1888eff8ac06a6a99d4ac953fa2"],["/archives/2025/page/7/index.html","0b6e7252e3a72dec703e8f526d9c847f"],["/archives/2025/page/8/index.html","38b14d3935db9725d8d00ca173431a34"],["/archives/2025/page/9/index.html","fd11c5b94b2288c330807ee110bf9ceb"],["/archives/2026/02/index.html","bc5e0f345d9e9a8c67092d280746053f"],["/archives/2026/index.html","e3905153893509da2dacaebf4162faa5"],["/archives/2925/01/index.html","6e3820b41eb49fcef2f2caa92630ab6e"],["/archives/2925/index.html","3c7d5b7cb34c3d56b3912e7dcea61cec"],["/archives/index.html","78ca3d28a5f5df0e31941cb44509e800"],["/archives/page/10/index.html","325371833661950f343e58b7adfae083"],["/archives/page/11/index.html","3259199f07da37654248122933cc9156"],["/archives/page/2/index.html","9b58f40b6f3bd69f77d89245db975044"],["/archives/page/3/index.html","0968e23e1d774597f7152fd6a3c342d4"],["/archives/page/4/index.html","e8bdf86a6f0a6a0a5e7a0663a1a59604"],["/archives/page/5/index.html","dede194e1c1e148bcf81ffcc3a8bef72"],["/archives/page/6/index.html","2bc6403baed455d32dc63e8c3d3c626b"],["/archives/page/7/index.html","7dd56541ce8195f9cd4d809b3a64ad3f"],["/archives/page/8/index.html","c3eada392f40f6023b8e55fb72934caa"],["/archives/page/9/index.html","83bb1ff2e617a8752cea7069b98c9fe7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","e9c29af11e3d20a8561d113aeb47c647"],["/categories/galgame/page/2/index.html","5d5e912ce82ece3160de74478b063e05"],["/categories/公告/index.html","9299f02eb68a9507cf25b6a2c6d317a1"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","e4dcda7d20b6409b1a779e358f508cb2"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","3d2bf772404743b58a2f5a95cd1f08e8"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","e918a49de0e97b1c086069ba4e167889"],["/page/10/index.html","64ac686547f5c89365f100c5c38bdce6"],["/page/11/index.html","5ff59e04837a0827b033e03531f691fc"],["/page/2/index.html","1aa732055acc65b4e9b81fe08f4aeab7"],["/page/3/index.html","48ca112962ae755a15648c02187b0dad"],["/page/4/index.html","8d254131ca1d580d0fef0b154d1b7b6f"],["/page/5/index.html","ce0402e9a0d0f5f50cab1de0e81f5332"],["/page/6/index.html","43bb5ff85aee105778cb5a312e443263"],["/page/7/index.html","da1a5306151e73fe304604c692b09dac"],["/page/8/index.html","edc59662aa60aa493f82d6e2dece65e3"],["/page/9/index.html","0fb41f8a752142329aa2efec12ac75a4"],["/posts/10c9dd98.html","d2ed6042fa764e0771fddf83e4960822"],["/posts/1295b569.html","b60adbe8d984cab56becd6a7835a800f"],["/posts/1370342.html","9447e35c1fa4cd2fd73b5791b2e4b950"],["/posts/15ef14c2.html","ce1ff6ff5c513454c2ef19eb50ec3cb0"],["/posts/15f3959d.html","d4721da9f65a5b128afd2de1b786ca2b"],["/posts/18ab785d.html","2c498b0defe59c32e01870a4202773fa"],["/posts/1d59b71f.html","a9a934067542439b76e1bf2270e73dd3"],["/posts/20b3f3a4.html","b415c627fe76f3bd8a05c331c6d1b8b6"],["/posts/245f1c7d.html","63ced527fc2aa5c9766b71b0e4ee0554"],["/posts/252658f.html","9f5d144624c6f64ac08f4e4f60bc4ff0"],["/posts/28397adc.html","f14aa9ed5417b2068159a33dabfd7c22"],["/posts/2b38bce0.html","3aff6746f3add3f683fd4a31779a639a"],["/posts/2c0a6836.html","d30ad62322bf1f1ba925e6f8d9c3fa21"],["/posts/2cf620f0.html","fb3ec857dbaab1be1d926f02dd240b81"],["/posts/2e30fd6d.html","d03dbcdba4377a1d2b7aa19bf34c8a86"],["/posts/34292736.html","d4899a7491c018d38970427da5f13bae"],["/posts/3468cbe.html","003e4b24c694dc104deaba97d9ce3a3f"],["/posts/39176dc0.html","e0befd80ee65aad46860c6f33d5f96ec"],["/posts/3e118dbf.html","8b36d29c3e7e166c457d353663329eb9"],["/posts/3f7d823a.html","92b03b98f7bf523aae59f9376be17920"],["/posts/3f978819.html","1dcc5b5e79bc086f1dadd75f3d4fd74b"],["/posts/43945723.html","e3325080a1bcdebe8ee4e333318cdd5c"],["/posts/44124a6b.html","83dcf41079b19f048e7b2e88a9286634"],["/posts/47abb61d.html","b8ec808a2e57b7e278da93fde8718f95"],["/posts/4b689be3.html","dc3822cdd43cce0528523ea52156a952"],["/posts/4cf8423f.html","7c9f719a40437a85e6afc2a8ea4591c2"],["/posts/4dcf85c.html","522982d943e91bd08a72d6318b553f1d"],["/posts/500cd322.html","71ede7925abd6948a57aadaea066a549"],["/posts/51c9b1ff.html","db5fd686c35e11d19d75a3603d60278b"],["/posts/52b5b3c6.html","d5353839334ab27cfa034adf669cfa2b"],["/posts/5f6e0c59.html","9b3d6a1bfc9df417bdc759b207b16e81"],["/posts/61a63a84.html","b4d72a154062d216155e22b739495081"],["/posts/625ab7bf.html","95a8ed004be43f9994188ce71c772af5"],["/posts/6336a2f9.html","d897f5cb9f5381673bd526f8dc64f2c0"],["/posts/6432d61a.html","e31c2e0e617bcdbbc904287490ce0c0a"],["/posts/6515f032.html","2487f1f3e7bb631a6e719bcf59f2befc"],["/posts/6720ccdd.html","453d310e43e054635c14af2a07178910"],["/posts/6a4b5ac8.html","5c82cc38e2c00ed9c6f8d092c6596a55"],["/posts/6aa4177c.html","0456363a29283549e9c8b430877abec6"],["/posts/6b15f81f.html","3435c34233b9e09b0096e89d860a6aeb"],["/posts/71131d34.html","b8f05e3a7e82365d17384e05495b70f6"],["/posts/78a8a8d3.html","69a9eb5dbe49986f7856fb61ff13946c"],["/posts/7a5ef3d0.html","1a5542e2a15fa36cf46718eecb6e2d1b"],["/posts/7b41e1ac.html","369716a04baaf43f5812f3dee4a2cb63"],["/posts/7b51011d.html","6d441dadd1e7ca860790e31b283dd7b2"],["/posts/7e3aa3e2.html","58ef6dc55fdc57d14458ec18d3328d17"],["/posts/80fe2691.html","be88a7df0ecc2ba78ed55265100ca904"],["/posts/81ac52e9.html","31b81e69e744322be658203fd8742c47"],["/posts/8486f6f9.html","89e80db86ae96d10827f75e8fc44e6fe"],["/posts/849b40f8.html","5c537ab2c65e5bd35c194e888297a02b"],["/posts/85c51d68.html","652b5fa3ef94b291a7bd3f2602891b2f"],["/posts/886f8d3.html","2722d25c30c6c9334be58c341d8c1de0"],["/posts/8a7cba10.html","92171e2dbec8765404dd2aa29d132ba0"],["/posts/8ac11b41.html","0aa83db8feddda6e058f7e5e97d73f87"],["/posts/8dd520d9.html","7cae2b0c21d53409161b635eb932eee3"],["/posts/8f555654.html","2b79e20783aeb379b3886a106d5cf7c7"],["/posts/92a980c2.html","bfe375a320172ce7ed6afb4df015a91b"],["/posts/92ce16.html","8154d1e48d5589c6a9742b69b7b90766"],["/posts/93e9943b.html","c97ff40c5d5294560fca5bca169226cc"],["/posts/94d3c794.html","ad55129912fcae24790983e68d54298e"],["/posts/97f50eea.html","bb88915c78344a0e9a68bfc1d7127ab5"],["/posts/97fca8be.html","d6cc10e5fefeb0bc4a8bc07d30c0d9b0"],["/posts/98662d05.html","ae851759156710837d40b805e499ddfb"],["/posts/9a2f6162.html","49b1ed9256cd0ffbbae12fe7d7d9caba"],["/posts/9b22a48d.html","06aad5d3c2f5b66d2be88b3f09208d06"],["/posts/9cb455b1.html","e84505159d57af4b6c1f72bb237d7679"],["/posts/9ecdeecc.html","646a022a73042f5962ece2e0cbf0b672"],["/posts/9efd7701.html","09b33f8da2d1a2870766a877a1f3e7a4"],["/posts/9f61c1a0.html","d148acae24e08d24086242f1c34d008b"],["/posts/a1de710.html","7a36f442a8795c2e6044b4d3b3d1303a"],["/posts/a30eb0cd.html","a22e49ad886d7de1f3ebd6d7cd2987b4"],["/posts/af1807ef.html","da77274b1c7dce95d1e616356a793f35"],["/posts/b497b647.html","9d95ec417edf702c74d0c0dc3083a064"],["/posts/b4d464b0.html","2cb61ea018447d9e3f3440c396379509"],["/posts/b5fb773f.html","f9663a3a41b904bdcfd233242ee04d67"],["/posts/b8d46b32.html","f9db83af5b911bad4b8f9420cff73250"],["/posts/c1b2c6c9.html","1f43316ca219c5ee532de49dd538620a"],["/posts/c2111cbf.html","7d7a7dfe79a3986977b80e502a2805c1"],["/posts/c316c2e8.html","68544dffc5ed4a99362ce1242709b3bb"],["/posts/c43e60b5.html","55718aaa4c71d7d47a758618a019d39c"],["/posts/c497a412.html","c1977ec8353a423ede73e79f07f3ca13"],["/posts/c5de299a.html","b318ca6663f10893d0f16076ddd2e5aa"],["/posts/c70bba9c.html","5975d815ceb5a82c1c063cc029cfd452"],["/posts/c797535e.html","87e9e9165ba623d0239030b4d0c34f98"],["/posts/c7a62c79.html","991c99cc2c068d56730cbfedbf265fc7"],["/posts/cae2c959.html","b48d648c915e0abdb93a299a1b60ff7a"],["/posts/cbebef2b.html","61827c263aed70aa71943db0621aeea9"],["/posts/ce25023e.html","35c2ffbfe6f0e522ae5e2b8c2b69c8db"],["/posts/d2fd4837.html","0aca02847bc84269d7c94787b58fabeb"],["/posts/d3233cbb.html","a5eda8600106fc96172e7159f4aff773"],["/posts/d3a745a8.html","89c6f992e7463109e60aeb6caf1bf243"],["/posts/dc815d5.html","0d3d42f9f168357f798b81fe085724f0"],["/posts/e3ab6ad8.html","e793f6f6311b3547f3fe9f0d3ec10d96"],["/posts/e5018da6.html","20ce08561cd8914ece2fae8af0a4d308"],["/posts/e5963272.html","13a41f04c7ff1b45bc186f59edd066de"],["/posts/e624b065.html","e06c3cf29e849bbb258020bd6fdac236"],["/posts/e7c703bb.html","ddc762a0aebdb1b352badfb1c23d77e9"],["/posts/e8f14b6c.html","5dd8990a4b8a015b74528f0935d6e9bb"],["/posts/e91abb63.html","0d5be79fbd90d86ecaf7598c926a31de"],["/posts/ea9a8808.html","225e468fc6e6328a6557b6c253eaa387"],["/posts/ebaf2232.html","d996a87634cbc26b382eb379b5986041"],["/posts/ee1ed673.html","3a6322549500a47a93a52c02ad888a8b"],["/posts/f0c3ed61.html","1dea655fd543503d0f10e376113b1b58"],["/posts/f21e7f84.html","d268ddc400de7b863d544134c9b028c0"],["/posts/f230b0fd.html","b338775be1389837c3f6cf3670f8c134"],["/posts/fc04d0d4.html","0fca0643ed80e22f3a4f228486960215"],["/sumire/index.html","011114b1e17ab529d8e6995afa8f2d1e"],["/sw-register.js","94fc3ada45e0ffd6b624046f459c1649"],["/tags/APPLE-project/index.html","4e0749bb220d28bf447a0151e6fbdc4a"],["/tags/BELL-DA/index.html","e65c7a208edf0f9919205e95ffdcc763"],["/tags/BL-Game/index.html","7ca48cbae91c992f1dd35280c227ecd4"],["/tags/Blue-Dahlia-Digital-Creators/index.html","a6e43392ed1e3bf095eb7b8ef3bbb127"],["/tags/CHUNSOFT/index.html","7225dc81f0df07d78806a5b8977493f4"],["/tags/Cherry-Pie/index.html","90943b3ddce92bc38e24c6448aa1d247"],["/tags/Circle-Mebius/index.html","16a437c7ca93fa5a70e891f3181c72d0"],["/tags/CresCENT-BLANK/index.html","8119a811b581d3aa8ccf9bfd5632fcff"],["/tags/Dopamine-Software/index.html","4869fae18bded4562186dbe96fae958f"],["/tags/Dos/index.html","772d20a51e71246c068dbdab03d85fed"],["/tags/Earth-Well/index.html","00e8f80f5bb9948986506a37e9ba4a10"],["/tags/Kanon/index.html","d3c77908d4803cc39f2eeed4b31a6df3"],["/tags/MANATSU-8/index.html","18398218a59512f36b95bb72dcf7a352"],["/tags/MIO/index.html","4db8242d5b9c641d09a0fb7b0eecc8a5"],["/tags/Nmyu/index.html","6638acb9c6a10176379ad75129388df8"],["/tags/O-S-I/index.html","f27b0cdc7d9a53e826931cc27b0f59b5"],["/tags/Omegaの視界/index.html","1f41e367213137bd167ca6764f60b67b"],["/tags/PC88/index.html","a0e613b805a909cdf681ee2db4a54404"],["/tags/PC98/index.html","54cb1c8990b48dae6f090fb58fff65e6"],["/tags/Perpetual-Room/index.html","0e375ecded6c9dfd84df2abf99326223"],["/tags/Pleiades-Company/index.html","3dfa7b709f004621b278da08754b256e"],["/tags/Project-Twintail/index.html","ea34bcc0d8375bfdee8bf8e80f735e84"],["/tags/Reverv/index.html","52dab3a1d85f2eec31a01835e3fdf4aa"],["/tags/Saihate-SOFT/index.html","0cca420c4e6c341328e0fe4d641a3f62"],["/tags/Sky-On-R-imaginAtion/index.html","8a2ddface3d164ad09848530eb1e568b"],["/tags/StrayMoon/index.html","238557d4bc414413638f1e0b7c3a1603"],["/tags/Studio-Bu-Sa/index.html","48d01e9a9ea980b66ef38da665c1b312"],["/tags/ToHeart/index.html","31f849f438f7cc8f42c052058e1d573c"],["/tags/Traumend/index.html","28875f75a454e6c111a19d0aacb8aef2"],["/tags/Witch/index.html","964a5da2e17e5984f55d0271ea3c5ee0"],["/tags/adonis-project/index.html","cee7066122c03082fcb06b7c2d813810"],["/tags/flash/index.html","8763d41f2cc1fa53b1e736ee8de28a4c"],["/tags/galgame/index.html","4a40aac8c4727598c06e192990608499"],["/tags/galgame/page/2/index.html","636124ee90fb7dd2a3f589582b911ea0"],["/tags/gal资源/index.html","c5d65a4c23a1081264056b9efc82b8e2"],["/tags/gal资源/page/2/index.html","90b591441ab368157b41980928450aeb"],["/tags/gal资源/page/3/index.html","7efb58964d647f188c090f86a6d5a803"],["/tags/index.html","15d25e4198e0837a39dd8e881a85ccaf"],["/tags/rkr/index.html","a1e9bd4f4a24632c963160fa7bd36c32"],["/tags/team-eye-mask/index.html","e07b832a7a514a27f218ef8a818aaf96"],["/tags/ありすくろいつ/index.html","291d600af5d423a4bd78b7803f8e8d30"],["/tags/いつものところ/index.html","cd113f4056f847151895d89dea28dc9b"],["/tags/きつねみみ饅頭/index.html","84d687ba156e127a42f1c01ecf16e768"],["/tags/ねこねこソフト/index.html","c1f1c4e2f2d694bfa00c63c24de05995"],["/tags/ねこバナナ/index.html","56a599b0d34a2006d82b6dd42c3ce719"],["/tags/はちみつくまさん/index.html","7255f62e5a30be6ff8382b87310aafd7"],["/tags/ろりちせ/index.html","0204f846260418f09bb509f00ba24f55"],["/tags/アイル【チーム・TATU】/index.html","50656bdc1ed0350ee92f25c8f25819c7"],["/tags/アークシステムワークス/index.html","845db0a4b8272378b63fdb2005e2d881"],["/tags/ブロッコリー/index.html","9e39830701c40dda10b34a4906673874"],["/tags/乙女/index.html","f12e674e4d9b333520aa8ff2980c0a01"],["/tags/停产/index.html","03c33ad8c90380d9df08f1ef62f4f995"],["/tags/公告/index.html","3733e2c1d6336250287092e1f4238942"],["/tags/同人/index.html","b5baeb101a2ef9e9450340e471fc9899"],["/tags/堀井雄二/index.html","6f168eefbb913f4cb2b7c6549fb99628"],["/tags/外海なおき/index.html","a2e6a3a5694c52ec77f0c085ae9bfe64"],["/tags/機械式少女/index.html","c238ce549fb668b73fb4f15368499547"],["/tags/水仙/index.html","d882a45f12ab7a73c205f17127d28ee8"],["/tags/汉化/index.html","c3f864e0f3fa08490b631ee40c1e4718"],["/tags/片冈智/index.html","31c3e9cd92c0d5ba32d21096482526ea"],["/tags/片岡とも/index.html","2c6b0cfab193deeba6b92c42d9701e86"],["/tags/牙の刻印制作委員会/index.html","1f24cef894570e921ab2655bb615ae4a"],["/tags/牛カルビ定食-FLAT/index.html","a4d6c74a7dca98c21bc7b8afba4d220f"],["/tags/牧尾屋/index.html","1489559824399fdca57a1eb2749f347e"],["/tags/猫猫社/index.html","363e9f1ee693ef0b416c68d9a288a5d2"],["/tags/王宮魔法劇団/index.html","1f5adcf643357100198025023c32e1eb"],["/tags/画集/index.html","c3edf5e8204d8594f7926978cb28b3f1"],["/tags/索引/index.html","b95678ac8ab493e82f8be8d816960678"],["/tags/自购/index.html","de63b6f2f04dbf25d9145d7a1951927f"],["/tags/郷愁花屋/index.html","50c0caf577fef1759bd5d1737e5dbb1a"],["/tags/閂夜明/index.html","71daaebc73576635fd3267d93e64f0c0"],["/tags/音乐美/index.html","ce1840ca0688236c96be5b514c1d6b37"],["/tags/黒†救/index.html","4fd2984b306ddeb99d445b978129d034"]];
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
