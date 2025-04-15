/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","da8a804cc0aff40ddef3265867867e78"],["/archives/2024/04/index.html","ada3cd6b0c3212f4938981571733dfa6"],["/archives/2024/index.html","1c603d0e6d0a4824f263d6497e7aa464"],["/archives/2025/02/index.html","faa112466e2245955a65f40b4b452bbc"],["/archives/2025/02/page/2/index.html","611c18ad2633e89b07f6101e78fc063c"],["/archives/2025/02/page/3/index.html","48e93f5c94e1d6f309e80ce7b818642a"],["/archives/2025/02/page/4/index.html","4476194f7837c39a9e4f58fb6ec85102"],["/archives/2025/02/page/5/index.html","794d0fa21c0bc2841e7d402c63af1a7f"],["/archives/2025/03/index.html","6a4038bc9a243148750294b0a471840e"],["/archives/2025/03/page/2/index.html","6846feb89f4d206131ed84e5cbcf4f0f"],["/archives/2025/03/page/3/index.html","d4312e1e267c41f0e244c28593230a86"],["/archives/2025/03/page/4/index.html","7a30a01cc51e572961d45577f029c074"],["/archives/2025/03/page/5/index.html","314c639c39e5966de625ae50708c1409"],["/archives/2025/03/page/6/index.html","4c82d3d47dc48da5e8b2e8113a9adb29"],["/archives/2025/04/index.html","cf4382470b1d0053f847a16c20c15205"],["/archives/2025/index.html","3c79250627a97283461d53f7cb0b190e"],["/archives/2025/page/10/index.html","407b6f0c30827cb25fc1abfe41d2ab9b"],["/archives/2025/page/11/index.html","e43aba15db07e278ba33e9cadcdb5a24"],["/archives/2025/page/12/index.html","bc4cf3eafea909f30bbb8b1d629c5708"],["/archives/2025/page/2/index.html","e00f100033850a97d1f707cf67e90e47"],["/archives/2025/page/3/index.html","d40edb3b523ab2d44f09f9416f693c4a"],["/archives/2025/page/4/index.html","0f1485d2359924e1b807ca512817cfa6"],["/archives/2025/page/5/index.html","85efb78a26c8cbe21795123c4d9253d4"],["/archives/2025/page/6/index.html","a08f8797fa5dfd088008c3bf520f3ceb"],["/archives/2025/page/7/index.html","8950ab2bb289d0bf5c8049cf1486d2cf"],["/archives/2025/page/8/index.html","10c01efbd30457a5970cbe715f4dbb52"],["/archives/2025/page/9/index.html","b097da4afbb57ce5a0421f1688827bfe"],["/archives/2026/02/index.html","cc2ea91ffaf04ddff3631fc237e35f4e"],["/archives/2026/index.html","40b1c7f14881a728b47acd17c4d5d864"],["/archives/2825/04/index.html","abe3dbadef2ed173bd1cd342325fbeb4"],["/archives/2825/index.html","3b341ee4bf9b504f8c83d9723fd5040c"],["/archives/2925/01/index.html","44db3d959d82bccbea52a178f75d294c"],["/archives/2925/index.html","d346d2ed4c9cbb1187b9984887deda33"],["/archives/index.html","104df3d82367c92c66948f016629872c"],["/archives/page/10/index.html","db0c3c83e03f6cf6cb1c8a8280eac5d4"],["/archives/page/11/index.html","7db0c7536126ab3d8a3e3226df9b1f66"],["/archives/page/12/index.html","deaf461824f8bfa4d23686e1c5eef376"],["/archives/page/2/index.html","703eac5635f3f06c35b3f77bbe04ba47"],["/archives/page/3/index.html","2070ab5c87f99aa2f5ff5cb96f8180f8"],["/archives/page/4/index.html","479f58586455e3171aef7dc04460ef10"],["/archives/page/5/index.html","e7c505840a05e0c289b10f624da165e7"],["/archives/page/6/index.html","a887132e99de513c3854ef6726401c06"],["/archives/page/7/index.html","7d645d4c37039ddba4505901fc1b56f8"],["/archives/page/8/index.html","ba194942a5a3036c3f357e923e99906f"],["/archives/page/9/index.html","0088aeb8b59e952ecf250b12dcb66767"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","05138dd0a54a91fdd4945293c6ec37af"],["/categories/galgame/page/2/index.html","f3916b09fc8611c9c192b838082534f8"],["/categories/公告/index.html","083806fe3d2079d7ec7e57a1e85b8ad5"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","8447f264af8e2e91d10ecee25477a058"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","c13fca068dc21c652231809df330607b"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","4ba53051ee4e41135644a7a87116bf6a"],["/page/10/index.html","b114d8eb2eb13c7d5d607e3dbf5227c2"],["/page/11/index.html","93d53b96129cf81b9482e05057f1f24d"],["/page/12/index.html","12f5bd63fa0827f32ce914dd87cd47c9"],["/page/2/index.html","95b92bfcbd6ac62def3cddd32b1fbc51"],["/page/3/index.html","de7e60424024afcb5565199270592df5"],["/page/4/index.html","664ddc4185f74aa1590906398a287482"],["/page/5/index.html","ed90b0d19792afdc1845caed333265c3"],["/page/6/index.html","155f1341b95890d2fbc6a17e9f53b7b9"],["/page/7/index.html","8c206d715a36dc98c96b817472d05059"],["/page/8/index.html","468c3eb5efba2a9395d624152bca0935"],["/page/9/index.html","7da59ac8e760a83e31000511942d61a1"],["/posts/10c9dd98.html","fbc409bdf9e25f4e2c746187bde2d1f7"],["/posts/1295b569.html","5f80ab8a103c106c1fcf4ef9c2b1f9c6"],["/posts/1370342.html","e4fdf2d535813aad1f2bf76410d2aee8"],["/posts/15ef14c2.html","f58ea7ecbed9341266d3a74153aeabc9"],["/posts/15f3959d.html","876c6e25b7ab27a4e2d92073ced57378"],["/posts/18ab785d.html","6bf4e62b978d9b4b421acb6f5e9fcf27"],["/posts/1d59b71f.html","686f9b77f0fdf0d096e89097337922d1"],["/posts/20b3f3a4.html","e7e9844bb87d239c5c44b78a33e10c5e"],["/posts/245f1c7d.html","d55f532ab2689f9493ddb56101787e73"],["/posts/252658f.html","d1e864ba13e6be5143c3a2cbc5c82132"],["/posts/28397adc.html","12597d62538ee84a8f75cbab0fc48ff5"],["/posts/2b38bce0.html","bd5ba31eeba786edb475f2ca2836abb6"],["/posts/2c0a6836.html","7984a0923657f85b282283e0417daabe"],["/posts/2ce39bcc.html","b2b742ed678775d0c12c79ec2ba76902"],["/posts/2cf620f0.html","2385013f5a58e97b9d6be7b65358eba5"],["/posts/2e30fd6d.html","4571cae8f8697c40569ce4691b04c55b"],["/posts/34292736.html","b572b8db9f69b9208166a82b39fa74a2"],["/posts/3468cbe.html","4a1b0ac644472d809bb4c259d8a6ffaa"],["/posts/39176dc0.html","f6e02bc95b63dc1e30213ac037c67178"],["/posts/3e118dbf.html","b308f8c46266f46825e4cee07afbfd66"],["/posts/3f7d823a.html","2f326cd267bfb9f0c24806aaed32f13e"],["/posts/3f978819.html","4921c5135582adc9155fdf096d6eccda"],["/posts/43945723.html","13e18ceb77564baeadad5abb4bd1ded9"],["/posts/44124a6b.html","c210d203806e00a2b685ce2a097ca06a"],["/posts/47abb61d.html","17174e7eaa5ccb7e002add9c45b5b8f2"],["/posts/4b689be3.html","5eee03a65308199db55d8891ce903366"],["/posts/4cf8423f.html","8a1b1360aa1b5b32ed804d0bbf77e322"],["/posts/4dcf85c.html","7152bcc53e4752cab3d82ab80d400310"],["/posts/500cd322.html","4c90da8f964d4ac38b948e27826e728a"],["/posts/51c9b1ff.html","a598fc8de00197ebabc22f7a7df86bec"],["/posts/52b5b3c6.html","c88ff8020f9587da62a8b2ff19049ad3"],["/posts/5d8bea92.html","48aac6e68bb7a63e881a38e5dae20cde"],["/posts/5f6e0c59.html","6fe888b1ace042b6d20358971a956165"],["/posts/61a63a84.html","ec2c27802489993b559254a62221d7e4"],["/posts/625ab7bf.html","3ebe944c86b8963b4d636be214dbe286"],["/posts/6336a2f9.html","8a56f12133134587c727a1ed79a6e62b"],["/posts/6432d61a.html","2766bf386853f1d70426529e2bbca499"],["/posts/6515f032.html","75b5ea248561cc75bd9f0453c9b1252b"],["/posts/6720ccdd.html","83162e0dd3f27fc6952610630d0eca44"],["/posts/6a4b5ac8.html","522e2ebf38c2d4417c00711c62e0dfe2"],["/posts/6aa4177c.html","c5c1c6e8fb6d1e5f07c288ad1c56f29b"],["/posts/6b15f81f.html","2236532cc4de1c5242e88387775068b1"],["/posts/71131d34.html","6774b6913715b1b936b7369f7406f91b"],["/posts/78a8a8d3.html","f1075fe2e4346d1fabfb2899f009222f"],["/posts/7a5ef3d0.html","cca0dfbb8c97c006edb595fb50a34d6a"],["/posts/7b41e1ac.html","115dfc4fa0091ae3c2f6f3480bc8f824"],["/posts/7b51011d.html","3c72c1d2ed5a5ecb674d732521201b33"],["/posts/7e3aa3e2.html","8656b171a3b9ae834964b17d71614f59"],["/posts/80fe2691.html","0fb3d1ff92027b6017752b16db2a86c1"],["/posts/81ac52e9.html","0b85e6eff6d5221a8b932587b86e6496"],["/posts/82332d11.html","2090809bd849bbdfe3b0e64a271a9d44"],["/posts/8486f6f9.html","c50c02d63e9c85564d408bbcf0da9075"],["/posts/849b40f8.html","e300a3a78e488248ea40d6c15b7bfb9d"],["/posts/85c51d68.html","b701ea21e5c401bf330e9d01365b0a25"],["/posts/86a6c500.html","1fce858b01bd1fa8aacd114a15cd5803"],["/posts/886f8d3.html","74bf598734e886e5439649dd38a68e0f"],["/posts/8a7cba10.html","11f36005565faff9e3c4c2eed283e2a2"],["/posts/8ac11b41.html","3a8cd4a0aa24103818da314a62cc7790"],["/posts/8dd520d9.html","140ed812acbde9ca2d318d78737837dd"],["/posts/8f555654.html","8666b0bb3310de1f59ee6b864b20621f"],["/posts/92a980c2.html","7a8d0fdb347dfb905b4d34479fce6a1a"],["/posts/92ce16.html","316846e94136c0887e664476e3488c8c"],["/posts/93e9943b.html","7287a7c8f94a100c7d51a0baa671e2bd"],["/posts/94d3c794.html","693007c1d5d69a1f40c121a2d56b0337"],["/posts/97f50eea.html","9dd4fc1eb82b593849edc23ab35fa4ac"],["/posts/97fca8be.html","834ca5f923b3c5c8cd1beeaa1f342e99"],["/posts/98662d05.html","6b2ee10a316e110345c5a6d61f012f77"],["/posts/9a2f6162.html","42607d77fb7065f92daaa01d275b8b62"],["/posts/9b22a48d.html","b9e8d1cc48cd413dcc747c614e04e686"],["/posts/9cb455b1.html","d2c2f4e50885e7894882b9fd2de8d65f"],["/posts/9ecdeecc.html","9a733bf2c7451217c1add183f149a5a3"],["/posts/9efd7701.html","29c19858503f8054f572db172c79041a"],["/posts/9f61c1a0.html","4944d3df59fede88e04b9c91bb32bdb1"],["/posts/a1de710.html","106a3a2b842c80a5e4f501b26d6eba66"],["/posts/a30eb0cd.html","3a05f193e82db11ec902bdebcf8333b1"],["/posts/ada3f440.html","ef2ae0d76ab7799e41a439d6257eff7c"],["/posts/af1807ef.html","e6f1e0ab74cd3ed62589bf514559367f"],["/posts/b497b647.html","798da741d08a1ae37fb2c2a628a38b26"],["/posts/b4d464b0.html","04aed87a2db1898202bee46394f33234"],["/posts/b5fb773f.html","54a46a1ec8f5391e2457a3587a6bec63"],["/posts/b8d46b32.html","4ee1b8eeec43e2b1e846d13e70214950"],["/posts/c1b2c6c9.html","069372775247782ce7742b2568547793"],["/posts/c2111cbf.html","4b8e027704ad73c2420d7c6bbba9cb06"],["/posts/c316c2e8.html","bad030658a58269ee7f41315cf01cba7"],["/posts/c43e60b5.html","dd9e26c8cae5dc26a8b46ccb7b66e943"],["/posts/c497a412.html","323ec72298675e8ff3e219f3d19e4f03"],["/posts/c5de299a.html","2ae4a35cadb2afd3882152aa22c2efae"],["/posts/c70bba9c.html","aceb2a1fb5090b1a70c56e72ad19acea"],["/posts/c797535e.html","cb7de293a484c5bc9115d7ae827753bb"],["/posts/c7a62c79.html","6f9bc49469805a07ef904f7955fe97bf"],["/posts/cae2c959.html","4350263e608e03ff8e1d4c7f51890d74"],["/posts/cbebef2b.html","310daa73cb283d6cb83fcfd172bb4c30"],["/posts/ce25023e.html","9c88eedf837ceca274b5b9512018a610"],["/posts/d2fd4837.html","30a93118767ecc4e8bbd07b3c10f9409"],["/posts/d3233cbb.html","e539b852367a23e455b229133ebdacf6"],["/posts/d3a745a8.html","227e7f03ee8a74a85bc78f536421a649"],["/posts/d7e940d2.html","3d0412ed77eb27b20cdd8d424add204e"],["/posts/dc815d5.html","070b659c06443b26d8ebbe069ece37db"],["/posts/de25b0be.html","3a0f1711f7b1380a16f8fe52edb05c8e"],["/posts/e2623b4e.html","cf8fd48dd47e9471751c8f60b901ae0c"],["/posts/e3ab6ad8.html","037436f300946c1a8086dd611e724e7f"],["/posts/e5018da6.html","43c8b2e627b9ae4e5786274d769c48d8"],["/posts/e5963272.html","d0d3c84b3d1a6ff870ffdbacd6491007"],["/posts/e624b065.html","0a39ec0e6a1a74638ed8c73a943de1af"],["/posts/e7c703bb.html","a62ac47cbf34161b4f200f8e49fac60d"],["/posts/e8f14b6c.html","83937e84b5d452340a24f62b30ec7716"],["/posts/e91abb63.html","4254de142aeb132aa72cda764f769dc5"],["/posts/ea9a8808.html","8ffbe2eee0e0cdf843c652210df8dc01"],["/posts/eb784749.html","bbc054eaba1c8b6adee174c976354258"],["/posts/ebaf2232.html","eeb8ce21e3e02ab9d75259896e7cf9f6"],["/posts/ee1ed673.html","5de79e9fa7d8ec53baa4555cbc95e743"],["/posts/f0c3ed61.html","52a8ed1336f5885793b46ab986f32109"],["/posts/f21e7f84.html","04e3b7af3ef54c324ce4d9c4849f83f8"],["/posts/f230b0fd.html","c2e9f86d21196b9d898bb0f95c2f3514"],["/posts/f663d5cc.html","a50a960e8b9885b3b15150a9bf6b85cc"],["/posts/fc04d0d4.html","aaef8dd64754ce35d6d89936cb422d9f"],["/sumire/index.html","0a002e872d730e9a51d72acf7b0ea6b2"],["/sw-register.js","056b07efab0218c7869bbf3a0cb21464"],["/tags/APPLE-project/index.html","54b16875be57e16ffe4b6de997ac68ef"],["/tags/BELL-DA/index.html","3c449b64f0310f7f4f717f2b95a781f9"],["/tags/BL-Game/index.html","0445e2c7c9bd5cd550a9a684eec55e6b"],["/tags/Blue-Dahlia-Digital-Creators/index.html","e1db7b89a89d00b1162ae4d3d739edf7"],["/tags/CHUNSOFT/index.html","a4572a124d5758b5455f9d06ef55aec4"],["/tags/Check＆Stripe/index.html","5fd9e137458cbde8e6b15b9b05842195"],["/tags/Cherry-Pie/index.html","6bb10d5037cf97fb468763245a3ddca0"],["/tags/Circle-Mebius/index.html","77aece9ce326d1282599bfce8b686804"],["/tags/CresCENT-BLANK/index.html","ad7cd24c0e2119a82da468c18fec4c93"],["/tags/Dopamine-Software/index.html","cebf3c2397cb044567c8b1b1cab6977a"],["/tags/Dos/index.html","fab88a767e96746134e5de1d01856238"],["/tags/Earth-Well/index.html","8e172544a2dd87006cb44e8408b17ad0"],["/tags/Forest/index.html","581a7b370226a9dc9652c3f1fa5868f4"],["/tags/Kanon/index.html","047bf5afbc96fe07eadf86091cf64834"],["/tags/MANATSU-8/index.html","62e623e8e15123e11621300955effa4d"],["/tags/MARINE/index.html","7ff2704283941fa3a18d962d931a72a2"],["/tags/MIO/index.html","82132aba901df165e6bfdc94a99c9933"],["/tags/Nmyu/index.html","0a1efa89f2b01af6cbb11db491513a1e"],["/tags/O-S-I/index.html","c823fcb39728bd71d256abcc327ffa84"],["/tags/Omegaの視界/index.html","1b6e1bc9cdae14d988056a55a7bf8c74"],["/tags/PC88/index.html","bea03144049143c8fa338b9032dfb492"],["/tags/PC98/index.html","bc876c0ceb8c1cde7f585c4185f4cff2"],["/tags/Perpetual-Room/index.html","ed84b3fa109e00353004ee503a259cda"],["/tags/Pleiades-Company/index.html","e1b199e1ed0c199d0f0996272f2e031a"],["/tags/Project-Twintail/index.html","62b9699fc1d1b512f31008cc872ceb95"],["/tags/RIFF-RAFF/index.html","8437e1450700154b5c858dd0aa7aa6fa"],["/tags/Reverv/index.html","fa3912cd30a6f6e4d9f803b3d055f1b2"],["/tags/SENTIVE/index.html","3e794c5409561c4045aafdc296ad8d9a"],["/tags/Saihate-SOFT/index.html","bd25b55966f3f5e165e3ad19717c2c7d"],["/tags/Sky-On-R-imaginAtion/index.html","803575f0cb59d96a326c5161b3786b60"],["/tags/StrayMoon/index.html","116570997d3baacef5c0acb96630d6e9"],["/tags/Studio-Bu-Sa/index.html","b76679a6666680be5014316f27e5036a"],["/tags/ToHeart/index.html","6a225eb5d7512b17ee30fe2d0122f1e6"],["/tags/Traumend/index.html","7d7f69b40802c01b78bcdf4d7febc6d4"],["/tags/Witch/index.html","4c6f94a5a4c7c629d494ee6e507dfcd6"],["/tags/adonis-project/index.html","f38f061dc1d33f5dc2bf4aacb0e808c9"],["/tags/flash/index.html","d3b22f9caba39f1f35444af28705822e"],["/tags/galgame/index.html","26132eb73e507b81af13c7fb87236806"],["/tags/galgame/page/2/index.html","6552ca72f6a6763f39bb98eb81f74ad1"],["/tags/gal资源/index.html","79cd4d8d0f9ef463d2ec66c5ced12ca7"],["/tags/gal资源/page/2/index.html","72e4886207ec58e60e24989a548f2222"],["/tags/gal资源/page/3/index.html","5bbe6317e24b693d084853d7b0cb0c5e"],["/tags/index.html","5180613290f27208787833683504a37e"],["/tags/rkr/index.html","d148fbf9c3f0094c8d82bf99e3d04558"],["/tags/team-eye-mask/index.html","1c509cc1daebd51ecd210eeaaf084aa0"],["/tags/ありすくろいつ/index.html","a3d4f5dec620ed0802c3939004e9f24d"],["/tags/いつものところ/index.html","63c8edca8618de5520778ad16cedeef0"],["/tags/きつねみみ饅頭/index.html","0296871ec83a7cbbc87b83d34724253b"],["/tags/ねこねこソフト/index.html","fff4bdf7ff6d7285faee483918267525"],["/tags/ねこバナナ/index.html","d7e920852c1e917fccc1c97525aece9d"],["/tags/はちみつくまさん/index.html","29b62b2ad462fb7f323d9f46f0ffa6a9"],["/tags/ろりちせ/index.html","65bf517928085826951ff99dd8092475"],["/tags/アイル【チーム・TATU】/index.html","35e7db0bbb13e723bc0bc239e2df98fd"],["/tags/アークシステムワークス/index.html","e5ce2cdf3ea2338b6208be82309bee44"],["/tags/ブロッコリー/index.html","e320d23b9519f9125e2669a43f8df3ac"],["/tags/乙女/index.html","f3f43d484b60bf1aa44b117d93479eef"],["/tags/停产/index.html","5a4cbad597fec8f4b725a8e19fa8c6a9"],["/tags/公告/index.html","5e233eb29c19fc927edb6472e3fff255"],["/tags/同人/index.html","31167b443ffd4d452bc30a028ff16a27"],["/tags/堀井雄二/index.html","6c00d8bb3968da1cc5c2c878638034aa"],["/tags/外海なおき/index.html","155eeed3ea7717323870f6b1029a0587"],["/tags/桃野衿/index.html","126a243ed2f5e778be0d301782c405c8"],["/tags/機械式少女/index.html","c9398ce76fe2e1771042b62c1daf3970"],["/tags/水仙/index.html","12d9c2ae4246eb922fe1c99a19499397"],["/tags/汉化/index.html","90570fa18109b358a0589244ae2639ed"],["/tags/片冈智/index.html","6938db9476ab47c0807ff5aec9140270"],["/tags/片岡とも/index.html","0bf808498280fc1828b663a2d5a221e5"],["/tags/牙の刻印制作委員会/index.html","64ae2166e3d99c7a8fd9e332887e5a54"],["/tags/牛カルビ定食-FLAT/index.html","bf4800e497825d2022c46abb6c61540b"],["/tags/牧尾屋/index.html","3953dd5f32adffd13553f51f5c0dd16c"],["/tags/猫猫社/index.html","6108062565277c3190dc509b23fc4355"],["/tags/王宮魔法劇団/index.html","664d242d231a68a859f0d5c462c208d9"],["/tags/画集/index.html","c6410b733996ae3081bf21b7c7285a0c"],["/tags/索引/index.html","8a9d4e1e562ef7307c5cb06ddd96ec7c"],["/tags/缺失/index.html","321dd2257def7f7c69a3852e834b78e1"],["/tags/自购/index.html","c39e09c7124c54be20631381a7ed02f5"],["/tags/茶葉☆姫/index.html","f68a3d59b264418134cc0bb24ef636ab"],["/tags/郷愁花屋/index.html","643134015562a93e265029dcf958cf20"],["/tags/閂夜明/index.html","51d140769f723049fe6df4b32a2e61e9"],["/tags/音乐美/index.html","ebb7efb6880d7cb24f639cd2a40c7962"],["/tags/黒†救/index.html","cb454f5090c3a8b7db5d48fc516a060d"]];
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
