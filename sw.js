/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","4a99cdc00bbca09d11b3fbacf60f6b9c"],["/archives/2024/04/index.html","f82d8b73b186cbca40f4361f46ac82cf"],["/archives/2024/index.html","8f0ccb77aecbfe7332e27fb1235faa20"],["/archives/2025/02/index.html","ad20b8b77e36a07f58624a009cc492f3"],["/archives/2025/02/page/2/index.html","ca0028196d6a8968acdb47a74cf1107f"],["/archives/2025/02/page/3/index.html","dbb36cf4cb79d8f59c935df14c56bf42"],["/archives/2025/02/page/4/index.html","b12c406609b2171076872b6bb91ec28b"],["/archives/2025/02/page/5/index.html","f087dac3969a53a732c18dd994c74928"],["/archives/2025/03/index.html","3c1fc8fe432db71347cde3b618cb8144"],["/archives/2025/03/page/2/index.html","f67a766b3abbd0790db701acde63dba8"],["/archives/2025/03/page/3/index.html","0955547ca29970c920aa7dd4f68e95f1"],["/archives/2025/03/page/4/index.html","c2bb516b4ffe1aad42eebbf68e4bac4b"],["/archives/2025/03/page/5/index.html","3c272175721bbab4c2f7f3b91ff7b9af"],["/archives/2025/03/page/6/index.html","976264b44a5a97e3e9387e475f3ea102"],["/archives/2025/index.html","eff92b25cde1214cdd247f7fc2ce404e"],["/archives/2025/page/10/index.html","64058b3f765abddaee44ba9e9d9f3dc9"],["/archives/2025/page/11/index.html","fa825b5eb0b5f80feb80dd9a0c088178"],["/archives/2025/page/2/index.html","6aafeccea5b8bc3a76038bf42b9eb22a"],["/archives/2025/page/3/index.html","05a3c572aa07360d1389886d6236f8a3"],["/archives/2025/page/4/index.html","debbe6ea47af4d2420b4d1f528d2eaec"],["/archives/2025/page/5/index.html","cca6da2886e881df15a0edd508c4cfc4"],["/archives/2025/page/6/index.html","07daa25a3ccb38051e253336f4fa1a4e"],["/archives/2025/page/7/index.html","20eab523bebc1febd5446255634ff05e"],["/archives/2025/page/8/index.html","45f93edf5e542845da2768f99ca3053f"],["/archives/2025/page/9/index.html","756cdd17e101f59539413062409ae726"],["/archives/2026/02/index.html","32425f2798cc837a1d3ca3c1ba4cd6d0"],["/archives/2026/index.html","393d2df94b0ba9dc6ef216879f905478"],["/archives/2925/01/index.html","ccb29740060683a19e22579e4af40914"],["/archives/2925/index.html","5af1948eded477f068628b1cc00a6472"],["/archives/index.html","68fa4fe670cae5bf2c12a26f83dfc534"],["/archives/page/10/index.html","899c9349ae86496b6ffa977f71b38b44"],["/archives/page/11/index.html","faa6918baa096a8c55f16e1de27c12ce"],["/archives/page/2/index.html","b00e4b9e564c259ab3af4e5f3e35ab8a"],["/archives/page/3/index.html","6545ad2b6dc82ba42b93c7d9470215d7"],["/archives/page/4/index.html","4ce4469f0b5c8fc34d3eede416e30558"],["/archives/page/5/index.html","2c669fa0bb65d76ccd7d4f8492a412bf"],["/archives/page/6/index.html","742f9c118cb6a842c459459355f36130"],["/archives/page/7/index.html","d8aea02daccf5b7a7fd39362316c3133"],["/archives/page/8/index.html","9c40f83feb68befc1940ef342c6c4c33"],["/archives/page/9/index.html","dd3df6052c553704078993e39d1e5a35"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","25f1f50d1ac993abe550ed51e44a8cff"],["/categories/galgame/page/2/index.html","c40bb357d1b0f84e0c47e44d7d28adae"],["/categories/公告/index.html","0749838710644b9993d4335ca7517209"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","ea5b0d114a8a3f39262c588f93037a2f"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","fdf9d7c33b3f8742f04a7ef41709c763"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","c5678609e2a5357b31baa03b9b3ba2d6"],["/page/10/index.html","f8f36b94d02e64a900813cc4ce63c3fe"],["/page/11/index.html","b515209f9e8a7be9f19e61afcd75982f"],["/page/2/index.html","d20e55e556c232f1037b50443e9a36fb"],["/page/3/index.html","bd1ffd1b21217e62549b56226f7c61ec"],["/page/4/index.html","9912ac140e282b930ed368797052bb69"],["/page/5/index.html","e4f80ca5fed7609f5aded455435d0fbe"],["/page/6/index.html","54a135acbfb89433d6dabfb82374eefc"],["/page/7/index.html","6e4e818f14c1d62d4e9640fc00f11325"],["/page/8/index.html","f13b10ae2e058188c9e1d6e256c079a3"],["/page/9/index.html","86fe470d9cc0877065f0fdb0792c8a96"],["/posts/10c9dd98.html","d2ed6042fa764e0771fddf83e4960822"],["/posts/1295b569.html","b60adbe8d984cab56becd6a7835a800f"],["/posts/1370342.html","9447e35c1fa4cd2fd73b5791b2e4b950"],["/posts/15ef14c2.html","9d11ffe8426117c479a7fae52570c21a"],["/posts/15f3959d.html","d4721da9f65a5b128afd2de1b786ca2b"],["/posts/18ab785d.html","2c498b0defe59c32e01870a4202773fa"],["/posts/1d59b71f.html","a9a934067542439b76e1bf2270e73dd3"],["/posts/20b3f3a4.html","b415c627fe76f3bd8a05c331c6d1b8b6"],["/posts/245f1c7d.html","63ced527fc2aa5c9766b71b0e4ee0554"],["/posts/252658f.html","9f5d144624c6f64ac08f4e4f60bc4ff0"],["/posts/28397adc.html","98fc80c9c93b742f768f3f1ebbe151a5"],["/posts/2b38bce0.html","3aff6746f3add3f683fd4a31779a639a"],["/posts/2c0a6836.html","d30ad62322bf1f1ba925e6f8d9c3fa21"],["/posts/2cf620f0.html","fb3ec857dbaab1be1d926f02dd240b81"],["/posts/2e30fd6d.html","d03dbcdba4377a1d2b7aa19bf34c8a86"],["/posts/34292736.html","d4899a7491c018d38970427da5f13bae"],["/posts/3468cbe.html","003e4b24c694dc104deaba97d9ce3a3f"],["/posts/39176dc0.html","e0befd80ee65aad46860c6f33d5f96ec"],["/posts/3e118dbf.html","8b36d29c3e7e166c457d353663329eb9"],["/posts/3f7d823a.html","e5b1ddbba09877450371bde3ef2b4964"],["/posts/3f978819.html","46ae7b6158b89631937a77956eb79822"],["/posts/43945723.html","e3325080a1bcdebe8ee4e333318cdd5c"],["/posts/44124a6b.html","83dcf41079b19f048e7b2e88a9286634"],["/posts/47abb61d.html","b8ec808a2e57b7e278da93fde8718f95"],["/posts/4b689be3.html","dc3822cdd43cce0528523ea52156a952"],["/posts/4cf8423f.html","7c9f719a40437a85e6afc2a8ea4591c2"],["/posts/4dcf85c.html","522982d943e91bd08a72d6318b553f1d"],["/posts/500cd322.html","71ede7925abd6948a57aadaea066a549"],["/posts/51c9b1ff.html","5451daeecdc1f72cabd3bf872bdaa0db"],["/posts/52b5b3c6.html","d5353839334ab27cfa034adf669cfa2b"],["/posts/5f6e0c59.html","9b3d6a1bfc9df417bdc759b207b16e81"],["/posts/61a63a84.html","b4d72a154062d216155e22b739495081"],["/posts/625ab7bf.html","95a8ed004be43f9994188ce71c772af5"],["/posts/6336a2f9.html","c37da03f4ff2ad9c9f0bea476d0d8e98"],["/posts/6432d61a.html","e31c2e0e617bcdbbc904287490ce0c0a"],["/posts/6515f032.html","2487f1f3e7bb631a6e719bcf59f2befc"],["/posts/6720ccdd.html","453d310e43e054635c14af2a07178910"],["/posts/6a4b5ac8.html","5c82cc38e2c00ed9c6f8d092c6596a55"],["/posts/6aa4177c.html","0456363a29283549e9c8b430877abec6"],["/posts/6b15f81f.html","3435c34233b9e09b0096e89d860a6aeb"],["/posts/71131d34.html","ac66200af006e2b9ef6758512754b09a"],["/posts/78a8a8d3.html","69a9eb5dbe49986f7856fb61ff13946c"],["/posts/7a5ef3d0.html","1a5542e2a15fa36cf46718eecb6e2d1b"],["/posts/7b41e1ac.html","369716a04baaf43f5812f3dee4a2cb63"],["/posts/7b51011d.html","6d441dadd1e7ca860790e31b283dd7b2"],["/posts/7e3aa3e2.html","58ef6dc55fdc57d14458ec18d3328d17"],["/posts/80fe2691.html","be88a7df0ecc2ba78ed55265100ca904"],["/posts/81ac52e9.html","31b81e69e744322be658203fd8742c47"],["/posts/8486f6f9.html","89e80db86ae96d10827f75e8fc44e6fe"],["/posts/849b40f8.html","5c537ab2c65e5bd35c194e888297a02b"],["/posts/85c51d68.html","652b5fa3ef94b291a7bd3f2602891b2f"],["/posts/886f8d3.html","2722d25c30c6c9334be58c341d8c1de0"],["/posts/8a7cba10.html","92171e2dbec8765404dd2aa29d132ba0"],["/posts/8ac11b41.html","0aa83db8feddda6e058f7e5e97d73f87"],["/posts/8dd520d9.html","7cae2b0c21d53409161b635eb932eee3"],["/posts/8f555654.html","2b79e20783aeb379b3886a106d5cf7c7"],["/posts/92a980c2.html","bfe375a320172ce7ed6afb4df015a91b"],["/posts/92ce16.html","8154d1e48d5589c6a9742b69b7b90766"],["/posts/93e9943b.html","c97ff40c5d5294560fca5bca169226cc"],["/posts/94d3c794.html","63bdb1b25de1483391f2c253bcb7c045"],["/posts/97f50eea.html","706b618c129465e6aba5c9c5fa947c5b"],["/posts/97fca8be.html","d6cc10e5fefeb0bc4a8bc07d30c0d9b0"],["/posts/98662d05.html","ae851759156710837d40b805e499ddfb"],["/posts/9a2f6162.html","49b1ed9256cd0ffbbae12fe7d7d9caba"],["/posts/9b22a48d.html","025e0fafd214abf137bb84eb05225fe3"],["/posts/9cb455b1.html","e84505159d57af4b6c1f72bb237d7679"],["/posts/9ecdeecc.html","646a022a73042f5962ece2e0cbf0b672"],["/posts/9efd7701.html","09b33f8da2d1a2870766a877a1f3e7a4"],["/posts/9f61c1a0.html","d148acae24e08d24086242f1c34d008b"],["/posts/a1de710.html","7a36f442a8795c2e6044b4d3b3d1303a"],["/posts/a30eb0cd.html","a22e49ad886d7de1f3ebd6d7cd2987b4"],["/posts/af1807ef.html","da77274b1c7dce95d1e616356a793f35"],["/posts/b497b647.html","9d95ec417edf702c74d0c0dc3083a064"],["/posts/b4d464b0.html","2cb61ea018447d9e3f3440c396379509"],["/posts/b5fb773f.html","f9663a3a41b904bdcfd233242ee04d67"],["/posts/b8d46b32.html","f9db83af5b911bad4b8f9420cff73250"],["/posts/c1b2c6c9.html","1f43316ca219c5ee532de49dd538620a"],["/posts/c2111cbf.html","7d7a7dfe79a3986977b80e502a2805c1"],["/posts/c316c2e8.html","68544dffc5ed4a99362ce1242709b3bb"],["/posts/c43e60b5.html","55718aaa4c71d7d47a758618a019d39c"],["/posts/c497a412.html","c1977ec8353a423ede73e79f07f3ca13"],["/posts/c5de299a.html","b318ca6663f10893d0f16076ddd2e5aa"],["/posts/c70bba9c.html","6c70c149dc59042ed243cdd399c89eb9"],["/posts/c797535e.html","87e9e9165ba623d0239030b4d0c34f98"],["/posts/c7a62c79.html","991c99cc2c068d56730cbfedbf265fc7"],["/posts/cae2c959.html","65cb35e3d04e6fc6c27613e7bcc2386b"],["/posts/cbebef2b.html","61827c263aed70aa71943db0621aeea9"],["/posts/ce25023e.html","35c2ffbfe6f0e522ae5e2b8c2b69c8db"],["/posts/d2fd4837.html","0aca02847bc84269d7c94787b58fabeb"],["/posts/d3233cbb.html","a5eda8600106fc96172e7159f4aff773"],["/posts/d3a745a8.html","89c6f992e7463109e60aeb6caf1bf243"],["/posts/dc815d5.html","0ab48991e4a9c665e303c8cb5ab79f16"],["/posts/e3ab6ad8.html","cb655a27d0dd2c5f772fb0a5c6415459"],["/posts/e5018da6.html","20ce08561cd8914ece2fae8af0a4d308"],["/posts/e5963272.html","13a41f04c7ff1b45bc186f59edd066de"],["/posts/e624b065.html","e06c3cf29e849bbb258020bd6fdac236"],["/posts/e7c703bb.html","ddc762a0aebdb1b352badfb1c23d77e9"],["/posts/e8f14b6c.html","5dd8990a4b8a015b74528f0935d6e9bb"],["/posts/e91abb63.html","0d5be79fbd90d86ecaf7598c926a31de"],["/posts/ea9a8808.html","225e468fc6e6328a6557b6c253eaa387"],["/posts/ebaf2232.html","d996a87634cbc26b382eb379b5986041"],["/posts/ee1ed673.html","8bc4714f11828c2914d74832a144698a"],["/posts/f0c3ed61.html","1dea655fd543503d0f10e376113b1b58"],["/posts/f21e7f84.html","d268ddc400de7b863d544134c9b028c0"],["/posts/f230b0fd.html","b338775be1389837c3f6cf3670f8c134"],["/posts/fc04d0d4.html","0fca0643ed80e22f3a4f228486960215"],["/sumire/index.html","5ba53f0748e3750d2b141e8404b48b18"],["/sw-register.js","929fcb5cb8778cfcde553ae5351ab8cc"],["/tags/APPLE-project/index.html","12a969dfa4235d34ea0d380d796bb71b"],["/tags/BELL-DA/index.html","af814fd1d5a8463e1e5f1859bc7ee3fb"],["/tags/BL-Game/index.html","0ef20829ace75c207f61bab89e3d8b8d"],["/tags/Blue-Dahlia-Digital-Creators/index.html","f2d67908fa5c28368f2df4c54e7db93d"],["/tags/CHUNSOFT/index.html","c17e4a0ff6ddcf6313a38c994df3bc2d"],["/tags/Cherry-Pie/index.html","1bde02fab76ecd2ca5276eeecf8c9354"],["/tags/Circle-Mebius/index.html","d3c5927c910cfe4b19b7d0358ba8e3db"],["/tags/CresCENT-BLANK/index.html","7a54f893bbaee1a43516c2ef0d7a221d"],["/tags/Dopamine-Software/index.html","d486118035ea1c988bd1ea432d7bf720"],["/tags/Dos/index.html","ab1ef729422f8f3bc19399f28a5be009"],["/tags/Earth-Well/index.html","bc95d4994bdbf804bc5ce715a87d8da7"],["/tags/Kanon/index.html","4a8bad52f2b950e0a23e5f90286b5b7a"],["/tags/MANATSU-8/index.html","a74ee6a073eae1348c601429722fc02f"],["/tags/MIO/index.html","84cda3c5f4819183065b7870c9f2daf4"],["/tags/Nmyu/index.html","986a0d381fd397ccbf9ca26fed220ff8"],["/tags/O-S-I/index.html","37cb5d16a6a4e4c8e2337ad470bad77d"],["/tags/Omegaの視界/index.html","0f4e243025c3c6d66212ca319ec28b31"],["/tags/PC88/index.html","71714498cc0e5b608961be5c54171a44"],["/tags/PC98/index.html","5ce934a7af02b64bd0a8667d4226d9d9"],["/tags/Perpetual-Room/index.html","e73d624c357bfe83df88a5a32aa71d05"],["/tags/Pleiades-Company/index.html","e942848b59d5115a5e15bc4ef9b12a1c"],["/tags/Project-Twintail/index.html","e24aa80c50a7ea94882e1019d7cb271a"],["/tags/Reverv/index.html","a8bcce7395a842ec34943bf1fceb1f45"],["/tags/Saihate-SOFT/index.html","37356c32b1533d22a3e308c6a28f29f5"],["/tags/Sky-On-R-imaginAtion/index.html","0c08f62d33a32bf344332f71c36a1367"],["/tags/StrayMoon/index.html","2d82a515b7d7140bc91f70505e1a1ce1"],["/tags/Studio-Bu-Sa/index.html","ee39d77f7c96a9d6a0d7f94c8574b5f9"],["/tags/ToHeart/index.html","4b65aba887fd9b5853a7511992e63b5a"],["/tags/Traumend/index.html","a0a0d38ceb030b449f9cdfa928eb3bfd"],["/tags/Witch/index.html","33bddf0db014044b1b6a239a8bd3f732"],["/tags/adonis-project/index.html","2acb32f2e6d4fe6f42f9142b04d2e9c9"],["/tags/flash/index.html","c3db945af41c9bf28fed492badeeca01"],["/tags/galgame/index.html","917e574f37fbc935110563f5144427d1"],["/tags/galgame/page/2/index.html","107f47e1cc8742635ebe863147633bfb"],["/tags/gal资源/index.html","363b00ff8c4b7b4fe3ee0d3a5470bd2d"],["/tags/gal资源/page/2/index.html","a8591562fd646af3517e38edc55f52a1"],["/tags/gal资源/page/3/index.html","7413b50e984cbf695fd6b1a15d8b4daa"],["/tags/index.html","1da4da9c5fcd5e8f772382002dc13bf1"],["/tags/rkr/index.html","1a7c72ba136e2f0f3dd87c9a855ea79c"],["/tags/team-eye-mask/index.html","a69392e7439185a1e84db5ce52f5c7d7"],["/tags/ありすくろいつ/index.html","bb52a2e568b569162691df17fbba45fe"],["/tags/いつものところ/index.html","afe1f929922bfe3ca92fa53fb3bba8b4"],["/tags/きつねみみ饅頭/index.html","395a18517796f0b08ccf87d56b2ee34a"],["/tags/ねこねこソフト/index.html","25258a2e49ac763678bc6542536da010"],["/tags/ねこバナナ/index.html","ad718f5f178ad3a8134d2a93d874c832"],["/tags/はちみつくまさん/index.html","06d1c86ded211068521b9e0ecd1cc852"],["/tags/ろりちせ/index.html","29be0b4cc867f2e4a699a5ef34a6472c"],["/tags/アイル【チーム・TATU】/index.html","94dbe065df8ae7809298d2dbdf89f10f"],["/tags/アークシステムワークス/index.html","bb3bb3457f5620eae8686884d0f4c96e"],["/tags/ブロッコリー/index.html","ad173769839cda8f2ebdd849c85378ad"],["/tags/乙女/index.html","d845fffb70d1250b00ec428519ecdb55"],["/tags/停产/index.html","038f6ea3db3ec6612704e63b8a068d99"],["/tags/公告/index.html","331cc6fda4d98150425dfa2cb9da0e12"],["/tags/同人/index.html","d6561ae00a8ad3a5f84e4f14fda69bd5"],["/tags/堀井雄二/index.html","aa930fbfaae9c2f0a27ef11019e98fe1"],["/tags/外海なおき/index.html","bb10a69503f7912298296e95beef4fad"],["/tags/機械式少女/index.html","048303408d29902b2ae390ef30372bdc"],["/tags/水仙/index.html","e73327a32bac5e667283622500e8b31f"],["/tags/汉化/index.html","9b206b3add7f636ce2ee300053626897"],["/tags/片冈智/index.html","33febaf0409fca688eb59ea487f0ed4c"],["/tags/片岡とも/index.html","61579da2c164a7b566178b2512f00381"],["/tags/牙の刻印制作委員会/index.html","dd7199747be60d070c770a13445f2a24"],["/tags/牛カルビ定食-FLAT/index.html","0f8b16e0ca3bd8ee99f430b6e3f9658f"],["/tags/牧尾屋/index.html","0148b21111e41e290a9376f99bcc6917"],["/tags/猫猫社/index.html","613ef0ce00122dd79a247a52bf6f78c3"],["/tags/王宮魔法劇団/index.html","0dbf57b6c63bf61a1870d62e155497a4"],["/tags/画集/index.html","36e1e8efca72e3a25fcc938b16b2beb3"],["/tags/索引/index.html","9ddd1e31ae962d0e533b964e8d3ee714"],["/tags/自购/index.html","e4eee3637556a104742616e37749fd5f"],["/tags/郷愁花屋/index.html","c8d4879c7a07fd8505879ba3373a4213"],["/tags/閂夜明/index.html","61d5511b3c2f86d3c59bd7e8851fe1fb"],["/tags/音乐美/index.html","6ab23f30f522d5277822437a5d316e23"],["/tags/黒†救/index.html","ac3c3402f438c2267e068c064243e852"]];
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
