/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","4cf1db70dbb5586dfdfe13e328d028b2"],["/archives/2024/04/index.html","2e2478a6cb9e9bf7d397ca90f8b59235"],["/archives/2024/index.html","dc3755d8f49a6008051fdc525db4684e"],["/archives/2025/02/index.html","2516b1317d2c0d041690a7651282748f"],["/archives/2025/02/page/2/index.html","7dd76f15440e3fdbf72aa8bc5201bfc7"],["/archives/2025/02/page/3/index.html","a36018d32a2197091834929301f61dee"],["/archives/2025/02/page/4/index.html","899f1f947a3b3cb003f72a538ebb4b18"],["/archives/2025/02/page/5/index.html","28c8ca317e8bf4a761c8a68c2a6e4195"],["/archives/2025/03/index.html","a45e30f267010729ac2111ea4173ef39"],["/archives/2025/03/page/2/index.html","c58f3b9c6eb2720da9de14e44a4e9074"],["/archives/2025/03/page/3/index.html","8cc2d15b777248383d11f16f2251f52f"],["/archives/2025/03/page/4/index.html","a0ef048d891f19fa0e9af30d40959a5f"],["/archives/2025/03/page/5/index.html","12c7dabc8f40b67d5298451b32fe4645"],["/archives/2025/03/page/6/index.html","7f4425d940cc07d3cf83d78406e6a3f3"],["/archives/2025/index.html","53421239ed3345d1f00865d25435dbe6"],["/archives/2025/page/10/index.html","89f9c17ed47831e81e407ea329738547"],["/archives/2025/page/11/index.html","5661b3daf39ee1357f1d164d7de51d44"],["/archives/2025/page/2/index.html","42e24886f0582f8caa6bf227c1e881e4"],["/archives/2025/page/3/index.html","99fa0f67c792494f03f04ac1bd274934"],["/archives/2025/page/4/index.html","edd10894f092f1b282dfeda0318f552c"],["/archives/2025/page/5/index.html","f185f224a97c8375eb486115f41ee0f1"],["/archives/2025/page/6/index.html","b757e8f0b3527834b7e46db7423928cb"],["/archives/2025/page/7/index.html","a5d326aa189efcfbab1457aa5b603ad1"],["/archives/2025/page/8/index.html","7b97fd21222420b21f3d17d18198b150"],["/archives/2025/page/9/index.html","c15e5d80b3bb331f62783c26a4e0707e"],["/archives/2026/02/index.html","367efe193ad2c2eb8b97787ded1e9481"],["/archives/2026/index.html","3a8e87ced323081dd575c7158cd99951"],["/archives/2925/01/index.html","1ea6e1267ecc89226d6bf58f1fb3727e"],["/archives/2925/index.html","e63487ccab768fe3f4dc722f9d6bf5cd"],["/archives/index.html","341024d9939c12215a607a86011d3320"],["/archives/page/10/index.html","c52017263b43eaa78ed1a022f620e2b4"],["/archives/page/11/index.html","3efc9a5e3e2a76e811bd60389a322097"],["/archives/page/2/index.html","855269bb794be65ed0412fa3883f4a63"],["/archives/page/3/index.html","cc7bcf2685b5c82f9911a403615f7abf"],["/archives/page/4/index.html","6dee9bfd5e97eed77851e0460f59273a"],["/archives/page/5/index.html","39a211fcc20167c22fed3075b2bd83b4"],["/archives/page/6/index.html","afe1f69692df25e81665831c301e1114"],["/archives/page/7/index.html","1cff90bf953a92baff42ac2c693f5798"],["/archives/page/8/index.html","1bc1a4643b426a163be38f0664ce650b"],["/archives/page/9/index.html","ccd0df71b0434d7fb6c2218db69eff11"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","4fae6653aa383783c8804b3504f17337"],["/categories/galgame/page/2/index.html","41bd39a0f2b39cbd09dcfead16d27cc1"],["/categories/公告/index.html","a746f73898abd9ac38f793f3006f4f4f"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","e839e53e5d5b8cca5fd480d85c3acf1f"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","5e26d485d69dc413886e63228070980a"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","53fae61f22f90c3eb3d707a59040c282"],["/page/10/index.html","3d719e5a4621563cdf22b31556c0a70f"],["/page/11/index.html","6e2b0592a0049307ff8c7f3bfe7d89e6"],["/page/2/index.html","43d20f01f909ecf395fd0468b98cddab"],["/page/3/index.html","a36e7634b592d8d527849a2ae64cb2e1"],["/page/4/index.html","17b9b38777b1f85f1e5c4e8da6b48921"],["/page/5/index.html","dc66c02ce658a0a020fd39088394456e"],["/page/6/index.html","d3ee1f3922766f5fc7791da0ee260f21"],["/page/7/index.html","8aa590138bb43670e7f4e8b4748574a6"],["/page/8/index.html","4f742aeec66dec91a6d80b83497ac893"],["/page/9/index.html","b2366a9b5dbcf0b8cea0fa0cc27a1b32"],["/posts/10c9dd98.html","d2ed6042fa764e0771fddf83e4960822"],["/posts/1295b569.html","b60adbe8d984cab56becd6a7835a800f"],["/posts/1370342.html","9447e35c1fa4cd2fd73b5791b2e4b950"],["/posts/15ef14c2.html","963ac69a4e57e40eede1c62b50909bfa"],["/posts/15f3959d.html","d4721da9f65a5b128afd2de1b786ca2b"],["/posts/18ab785d.html","2c498b0defe59c32e01870a4202773fa"],["/posts/1d59b71f.html","a9a934067542439b76e1bf2270e73dd3"],["/posts/20b3f3a4.html","b415c627fe76f3bd8a05c331c6d1b8b6"],["/posts/245f1c7d.html","63ced527fc2aa5c9766b71b0e4ee0554"],["/posts/252658f.html","c118885620d79af08501b68b5b67709d"],["/posts/28397adc.html","6b01527b53e3434e83d19053a1304fdc"],["/posts/2b38bce0.html","3aff6746f3add3f683fd4a31779a639a"],["/posts/2c0a6836.html","d30ad62322bf1f1ba925e6f8d9c3fa21"],["/posts/2cf620f0.html","fb3ec857dbaab1be1d926f02dd240b81"],["/posts/2e30fd6d.html","d03dbcdba4377a1d2b7aa19bf34c8a86"],["/posts/34292736.html","d4899a7491c018d38970427da5f13bae"],["/posts/3468cbe.html","003e4b24c694dc104deaba97d9ce3a3f"],["/posts/39176dc0.html","e0befd80ee65aad46860c6f33d5f96ec"],["/posts/3e118dbf.html","8b36d29c3e7e166c457d353663329eb9"],["/posts/3f7d823a.html","e5b1ddbba09877450371bde3ef2b4964"],["/posts/3f978819.html","1dcc5b5e79bc086f1dadd75f3d4fd74b"],["/posts/43945723.html","e3325080a1bcdebe8ee4e333318cdd5c"],["/posts/44124a6b.html","83dcf41079b19f048e7b2e88a9286634"],["/posts/47abb61d.html","b8ec808a2e57b7e278da93fde8718f95"],["/posts/4b689be3.html","dc3822cdd43cce0528523ea52156a952"],["/posts/4cf8423f.html","7c9f719a40437a85e6afc2a8ea4591c2"],["/posts/4dcf85c.html","522982d943e91bd08a72d6318b553f1d"],["/posts/500cd322.html","71ede7925abd6948a57aadaea066a549"],["/posts/51c9b1ff.html","d4f0619d661108357857245a21fb8bf1"],["/posts/52b5b3c6.html","d5353839334ab27cfa034adf669cfa2b"],["/posts/5f6e0c59.html","9b3d6a1bfc9df417bdc759b207b16e81"],["/posts/61a63a84.html","b4d72a154062d216155e22b739495081"],["/posts/625ab7bf.html","95a8ed004be43f9994188ce71c772af5"],["/posts/6336a2f9.html","7d28914137aeb277e7ca921bacd13e7a"],["/posts/6432d61a.html","e31c2e0e617bcdbbc904287490ce0c0a"],["/posts/6515f032.html","2487f1f3e7bb631a6e719bcf59f2befc"],["/posts/6720ccdd.html","453d310e43e054635c14af2a07178910"],["/posts/6a4b5ac8.html","5c82cc38e2c00ed9c6f8d092c6596a55"],["/posts/6aa4177c.html","0456363a29283549e9c8b430877abec6"],["/posts/6b15f81f.html","3435c34233b9e09b0096e89d860a6aeb"],["/posts/71131d34.html","ac66200af006e2b9ef6758512754b09a"],["/posts/78a8a8d3.html","69a9eb5dbe49986f7856fb61ff13946c"],["/posts/7a5ef3d0.html","1a5542e2a15fa36cf46718eecb6e2d1b"],["/posts/7b41e1ac.html","369716a04baaf43f5812f3dee4a2cb63"],["/posts/7b51011d.html","6d441dadd1e7ca860790e31b283dd7b2"],["/posts/7e3aa3e2.html","58ef6dc55fdc57d14458ec18d3328d17"],["/posts/80fe2691.html","be88a7df0ecc2ba78ed55265100ca904"],["/posts/81ac52e9.html","31b81e69e744322be658203fd8742c47"],["/posts/8486f6f9.html","89e80db86ae96d10827f75e8fc44e6fe"],["/posts/849b40f8.html","5c537ab2c65e5bd35c194e888297a02b"],["/posts/85c51d68.html","652b5fa3ef94b291a7bd3f2602891b2f"],["/posts/886f8d3.html","2722d25c30c6c9334be58c341d8c1de0"],["/posts/8a7cba10.html","92171e2dbec8765404dd2aa29d132ba0"],["/posts/8ac11b41.html","0aa83db8feddda6e058f7e5e97d73f87"],["/posts/8dd520d9.html","7cae2b0c21d53409161b635eb932eee3"],["/posts/8f555654.html","2b79e20783aeb379b3886a106d5cf7c7"],["/posts/92a980c2.html","bfe375a320172ce7ed6afb4df015a91b"],["/posts/92ce16.html","8154d1e48d5589c6a9742b69b7b90766"],["/posts/93e9943b.html","c97ff40c5d5294560fca5bca169226cc"],["/posts/94d3c794.html","6bcc873a690d714cc1eaa0b5468c44c9"],["/posts/97f50eea.html","706b618c129465e6aba5c9c5fa947c5b"],["/posts/97fca8be.html","d6cc10e5fefeb0bc4a8bc07d30c0d9b0"],["/posts/98662d05.html","ae851759156710837d40b805e499ddfb"],["/posts/9a2f6162.html","49b1ed9256cd0ffbbae12fe7d7d9caba"],["/posts/9b22a48d.html","5057acb9bd5c9f8b860b5f0120d6d923"],["/posts/9cb455b1.html","e84505159d57af4b6c1f72bb237d7679"],["/posts/9ecdeecc.html","646a022a73042f5962ece2e0cbf0b672"],["/posts/9efd7701.html","09b33f8da2d1a2870766a877a1f3e7a4"],["/posts/9f61c1a0.html","d148acae24e08d24086242f1c34d008b"],["/posts/a1de710.html","7a36f442a8795c2e6044b4d3b3d1303a"],["/posts/a30eb0cd.html","a22e49ad886d7de1f3ebd6d7cd2987b4"],["/posts/af1807ef.html","da77274b1c7dce95d1e616356a793f35"],["/posts/b497b647.html","9d95ec417edf702c74d0c0dc3083a064"],["/posts/b4d464b0.html","2cb61ea018447d9e3f3440c396379509"],["/posts/b5fb773f.html","f9663a3a41b904bdcfd233242ee04d67"],["/posts/b8d46b32.html","f9db83af5b911bad4b8f9420cff73250"],["/posts/c1b2c6c9.html","7acd52271b7c9d8073ccd113825c2e29"],["/posts/c2111cbf.html","7d7a7dfe79a3986977b80e502a2805c1"],["/posts/c316c2e8.html","68544dffc5ed4a99362ce1242709b3bb"],["/posts/c43e60b5.html","55718aaa4c71d7d47a758618a019d39c"],["/posts/c497a412.html","c1977ec8353a423ede73e79f07f3ca13"],["/posts/c5de299a.html","b318ca6663f10893d0f16076ddd2e5aa"],["/posts/c70bba9c.html","e95b803432b7dd1c47de1ea9762df723"],["/posts/c797535e.html","87e9e9165ba623d0239030b4d0c34f98"],["/posts/c7a62c79.html","991c99cc2c068d56730cbfedbf265fc7"],["/posts/cae2c959.html","52cf1c89e0a75ac3aac6e2bc47184d7a"],["/posts/cbebef2b.html","61827c263aed70aa71943db0621aeea9"],["/posts/ce25023e.html","35c2ffbfe6f0e522ae5e2b8c2b69c8db"],["/posts/d2fd4837.html","0aca02847bc84269d7c94787b58fabeb"],["/posts/d3233cbb.html","a5eda8600106fc96172e7159f4aff773"],["/posts/d3a745a8.html","89c6f992e7463109e60aeb6caf1bf243"],["/posts/dc815d5.html","09d6fdf2d5b490ab1a425f033e6a467e"],["/posts/e3ab6ad8.html","6439e72cdce7778c6db62119f664e162"],["/posts/e5018da6.html","20ce08561cd8914ece2fae8af0a4d308"],["/posts/e5963272.html","13a41f04c7ff1b45bc186f59edd066de"],["/posts/e624b065.html","e06c3cf29e849bbb258020bd6fdac236"],["/posts/e7c703bb.html","ddc762a0aebdb1b352badfb1c23d77e9"],["/posts/e8f14b6c.html","5dd8990a4b8a015b74528f0935d6e9bb"],["/posts/e91abb63.html","0d5be79fbd90d86ecaf7598c926a31de"],["/posts/ea9a8808.html","225e468fc6e6328a6557b6c253eaa387"],["/posts/ebaf2232.html","d996a87634cbc26b382eb379b5986041"],["/posts/ee1ed673.html","8bc4714f11828c2914d74832a144698a"],["/posts/f0c3ed61.html","1dea655fd543503d0f10e376113b1b58"],["/posts/f21e7f84.html","d268ddc400de7b863d544134c9b028c0"],["/posts/f230b0fd.html","b338775be1389837c3f6cf3670f8c134"],["/posts/fc04d0d4.html","0fca0643ed80e22f3a4f228486960215"],["/sumire/index.html","fa7b688dbf6e68c8c0ac564a6ffd7412"],["/sw-register.js","a756fe2c47c75ab9869be00df93212b5"],["/tags/APPLE-project/index.html","322208f104fa938941c73029ae689f61"],["/tags/BELL-DA/index.html","dacb53c8ca460690c766551c2b206546"],["/tags/BL-Game/index.html","0573904a2947e5ca187b539d6e95992e"],["/tags/Blue-Dahlia-Digital-Creators/index.html","c983bcf3420f97156510bc1106624b1d"],["/tags/CHUNSOFT/index.html","a63f189dc90fe304c61e240a6ecdeb53"],["/tags/Cherry-Pie/index.html","055b31d89e9023a24a59752753ba6747"],["/tags/Circle-Mebius/index.html","404b8fdb0c9fc8f1932db8f46c627ed0"],["/tags/CresCENT-BLANK/index.html","2f4600949b4e267aab76bd6291059036"],["/tags/Dopamine-Software/index.html","90bb5d6c45549ab96dd5a5cdc7bb13e5"],["/tags/Dos/index.html","2829d7228c4212a3c8607830502d861e"],["/tags/Earth-Well/index.html","8ffae5dabdf430b8b2fa07e320abd045"],["/tags/Kanon/index.html","01d22955c2eab0e674f126accf532a80"],["/tags/MANATSU-8/index.html","f3198852103fe916054dc98db0dcc068"],["/tags/MIO/index.html","ec5b02dc20456d0a52d9a031183a16fa"],["/tags/Nmyu/index.html","33617896d9388843ba7e2c4f9ee7f504"],["/tags/O-S-I/index.html","225e7e4fddfc4b4af5659e43159794c8"],["/tags/Omegaの視界/index.html","b3187f72c99e7a06f4a8914f4128183f"],["/tags/PC88/index.html","137c42c6902a10a68bc878cf59220d8f"],["/tags/PC98/index.html","0056765b5b4aab2295c6a86a1af39003"],["/tags/Perpetual-Room/index.html","24e094a8084238d66501322a725268ce"],["/tags/Pleiades-Company/index.html","ecfa1a11d94f6d849039328f92c51bbf"],["/tags/Project-Twintail/index.html","0f7c32c937c3726c48d597036411197f"],["/tags/Reverv/index.html","f983c34ec1087c75815b25f221f2907d"],["/tags/Saihate-SOFT/index.html","aaf720a8f470d8036e279551732168d5"],["/tags/Sky-On-R-imaginAtion/index.html","3a51f9aee5da891f780a28a6bb4d6560"],["/tags/StrayMoon/index.html","53d362509bd81ce3106b40e20acc6d1e"],["/tags/Studio-Bu-Sa/index.html","b8f97fc8732b79de04ec028b1995fa1d"],["/tags/ToHeart/index.html","c9e9218a8f602c736f616e42bb86794a"],["/tags/Traumend/index.html","ea72a5dd9b250125d7f026040d914bc7"],["/tags/Witch/index.html","65eb61b6f234f3ce1a29d73f17b6f64e"],["/tags/adonis-project/index.html","accbc4e757ba9f46d2968547435bc091"],["/tags/flash/index.html","643ff325cb5832ef50d3ee2d9650b6b5"],["/tags/galgame/index.html","1c575a42ed084b52f6ee3634c16c634f"],["/tags/galgame/page/2/index.html","2c7c7cadab24a4d9522a497d6818161f"],["/tags/gal资源/index.html","b29eb0e0126f59f9b24217d828d766ea"],["/tags/gal资源/page/2/index.html","eab74b27f7fc915cfae3b905f7f503a0"],["/tags/gal资源/page/3/index.html","c710d314c4758f9e0cbbaaee11577ff6"],["/tags/index.html","3d8871afd48e96297a7ccf423e3f96bc"],["/tags/rkr/index.html","e8522122bbbd738525f2e6036fa8f6bd"],["/tags/team-eye-mask/index.html","7d42b65a6d0c52d511a6a0ae53d1ee4e"],["/tags/ありすくろいつ/index.html","5c7ca9d032fd882b1fd66c61fa5439ee"],["/tags/いつものところ/index.html","d286f61906215626b32cba62e8f75592"],["/tags/きつねみみ饅頭/index.html","9ae5476c01732d61ef734ef70564b02b"],["/tags/ねこねこソフト/index.html","14479cb59f46ed076066f434a935d25e"],["/tags/ねこバナナ/index.html","6d1b818ac3919175297aa530186a10d7"],["/tags/はちみつくまさん/index.html","3167071e2850f2cebee2524b26dfb846"],["/tags/ろりちせ/index.html","d7717a8ac52f9b600ac629a33ccb2d48"],["/tags/アイル【チーム・TATU】/index.html","1b984b80966ab4a195f2a230f4a849a9"],["/tags/アークシステムワークス/index.html","764d6b5af30fe1c969b8e1ba7873e50a"],["/tags/ブロッコリー/index.html","34b08aed64a2cc619220f10f40d2a993"],["/tags/乙女/index.html","0d6d17571e28a933d04be2b623b8e1f8"],["/tags/停产/index.html","c025c961c99902f5010dbe6e948fb261"],["/tags/公告/index.html","799f383e8001f2b984556e33220e6cb7"],["/tags/同人/index.html","9d2b095af06b8682d1b367f50a3343ee"],["/tags/堀井雄二/index.html","425ce2265e06834b5148ef3f8f4375d3"],["/tags/外海なおき/index.html","c6760a73ca0b995b73e1fba16c1bd2e1"],["/tags/機械式少女/index.html","7e51987bc8b31a62fce7901ad3fb2fbc"],["/tags/水仙/index.html","fac48e4175cb504d3b0159bfc6b60c5c"],["/tags/汉化/index.html","977617892bcc20c8cf543cbcafe213f4"],["/tags/片冈智/index.html","9b2db80a4979d0629b9fe2f3ec1129dc"],["/tags/片岡とも/index.html","6a6ad05ef8c65fd1dbe8a77a1fd8dd36"],["/tags/牙の刻印制作委員会/index.html","9a57f3476f458607a55be6d9b72038a4"],["/tags/牛カルビ定食-FLAT/index.html","4cb22ba9a64a41f12f3441779e74d292"],["/tags/牧尾屋/index.html","7be53821496bf54e0f75d039991ffd62"],["/tags/猫猫社/index.html","e40821dd6c9ff67ad1bf0ddac270ea35"],["/tags/王宮魔法劇団/index.html","32afb7bec28971787be406615a42dc4e"],["/tags/画集/index.html","64a521a4b5b5c923a1f92ad2518459d7"],["/tags/索引/index.html","09e89dfdeb59174c01a652ba22560bb8"],["/tags/自购/index.html","5e4b640b15b40bda31f2aed11fbc6c9f"],["/tags/郷愁花屋/index.html","33ca2698c09276799909df800cad2ab4"],["/tags/閂夜明/index.html","5249adaf1325ca0cec157fef51ef5afb"],["/tags/音乐美/index.html","147bd3309db14b99a47295c25794294e"],["/tags/黒†救/index.html","bda2d53fe361717ff23970b861496ae3"]];
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
