/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","b633c54bf7ea68880a324b9792872d56"],["/archives/2024/04/index.html","0e028fa6befaa39132ae28a3ee8e9353"],["/archives/2024/index.html","1c495f9aedeb3bea7e4ae249ff285775"],["/archives/2025/02/index.html","32cf555d9337574ff200a180148c622f"],["/archives/2025/02/page/2/index.html","6dd83ff0691eff823e340d7b172aa045"],["/archives/2025/02/page/3/index.html","035771c938136795355b9a7a0e20ee91"],["/archives/2025/02/page/4/index.html","1b68b8a6cd28704c7c4cc42840529c2e"],["/archives/2025/02/page/5/index.html","f3015b31f241025e6ea1417a302d395e"],["/archives/2025/03/index.html","6a79467bead6053390a511898b78c45c"],["/archives/2025/03/page/2/index.html","1e04263728d7234d72f379cde527fb14"],["/archives/2025/03/page/3/index.html","7e5d396629fa4cc8ab33561fa8a4081b"],["/archives/2025/03/page/4/index.html","e770337bd49fba797f9c66b80aa45bdd"],["/archives/2025/03/page/5/index.html","3821664739818045518b3665701ac0e5"],["/archives/2025/03/page/6/index.html","d5e628cae6912197a319cf80b509d26e"],["/archives/2025/index.html","53aa5ab5547788342f5f2dea5113d7ef"],["/archives/2025/page/10/index.html","1fe26f76df98536d3a1dc6efec8d8ddc"],["/archives/2025/page/11/index.html","91237a6ee8628b74341fb703c9477b9c"],["/archives/2025/page/2/index.html","2bec1feb3d69f7a9c20466c0fdb36334"],["/archives/2025/page/3/index.html","b7c71ec1ed0dc57737dbb4a81617e67f"],["/archives/2025/page/4/index.html","d04e5c10e4a7bd353a0914fcd5362776"],["/archives/2025/page/5/index.html","141ef72376ec794d4a9478ec3caa452e"],["/archives/2025/page/6/index.html","aec00138bdf808c6e7823f3bbcfe927a"],["/archives/2025/page/7/index.html","2f4d9d81267b15b261c083500ff1564c"],["/archives/2025/page/8/index.html","f8813c7fa1fbe7423c91ee01deb91676"],["/archives/2025/page/9/index.html","e1ff663afa59d465d1c6cf0ab5350b94"],["/archives/2026/02/index.html","bc9eb40f2a728bc2d64cae167894a3a7"],["/archives/2026/index.html","bc0e8cdef3464fb5908d804a06f1b07e"],["/archives/2925/01/index.html","db44f5475aa79992c6f2301b00d25392"],["/archives/2925/index.html","da196f0e2bafab205823838e104a5ca3"],["/archives/index.html","fcbed97ac00a7480d33b5891275fcaad"],["/archives/page/10/index.html","18f46e64728f202389b961ade5edb40e"],["/archives/page/11/index.html","2b339bcb78314b633bb7083726f469b8"],["/archives/page/2/index.html","bf6f607fb1aead5ce0778e9bfa45eabb"],["/archives/page/3/index.html","dc5ed304f4860bf48da18a461dd35968"],["/archives/page/4/index.html","7c60cc389509add6cbf920f4dab3ed9f"],["/archives/page/5/index.html","e79de18dcd8b9924c83396cf15bf62c1"],["/archives/page/6/index.html","f456de2eaecb2123987a106d20108a57"],["/archives/page/7/index.html","abefee587e22dc61adbf01c249546089"],["/archives/page/8/index.html","e10760657273247f88e4f055fa8498cc"],["/archives/page/9/index.html","2bc573c4d6146d792dbee8bfe02cff4e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","300e05321fea10efc1786cad886fa859"],["/categories/galgame/page/2/index.html","82dd17db5720a543be140f5ab457fb49"],["/categories/公告/index.html","e639ef8c46aa1213cbea948a0f3ec6aa"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","36f20d626d73b31bf9587e187c03ee04"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","3444c89e946183e89a8ed887fe4ebd81"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","3f61c70e7f96f44aaecc6b5292080963"],["/page/10/index.html","49382ed3e3dfd3e855a808b11a98dd78"],["/page/11/index.html","8f044d22811ce5164b4e71826e5809e0"],["/page/2/index.html","13b46a8b24b26f485a4ce52ff67c6b6c"],["/page/3/index.html","fdf9b150ef6f3a0a58d272f7687b3864"],["/page/4/index.html","3642ff5130b73fd513b5ef3dc85cc96b"],["/page/5/index.html","fc4b7e8821c272a9b31467ec2e74b5a0"],["/page/6/index.html","fad1404df65f40440f61b2492447dfd0"],["/page/7/index.html","8caaf6bed9479eb5be9c6088e87230e1"],["/page/8/index.html","af9fe230745cc90d20f611be3a812b62"],["/page/9/index.html","2c0fa11e82f4ca7e0700bc88379951fe"],["/posts/10c9dd98.html","27bca1a0a424420a08643622ee83ca44"],["/posts/1295b569.html","e660994502c25bd098453c58e21ea592"],["/posts/1370342.html","c5ce40efe061b98ccf7f2cd30d795a6a"],["/posts/15ef14c2.html","ed2d36c78d017bbfaa43a720346fc06e"],["/posts/15f3959d.html","347c4fb80f02f4f95727c3dae6c9ad7c"],["/posts/18ab785d.html","b26ab2d22ee771c3d800165823f582c6"],["/posts/1d59b71f.html","4df77ed41c01256b5681a1f137cb397c"],["/posts/20b3f3a4.html","ad303e708f1425d18afead11256f202b"],["/posts/245f1c7d.html","0773c00f3815e1a388316110a70e4499"],["/posts/252658f.html","22a349bc4d20dbcd30f1f9fd9882fd4e"],["/posts/28397adc.html","ec48ceeafe22f049e692e45acc32624b"],["/posts/2b38bce0.html","472d09d650ebf3500b294a003e85442b"],["/posts/2c0a6836.html","0a6cb88da055e8aebe95fc2446a81c8b"],["/posts/2cf620f0.html","b8e6744f7f48d80657a5a8280cea6e83"],["/posts/2e30fd6d.html","a472ec23f3a790fbc259a1b83867788d"],["/posts/34292736.html","f966998f2a27dd9b78811c0a4cd0b304"],["/posts/3468cbe.html","2d1aed16d88bf88d87c601212a99d572"],["/posts/39176dc0.html","ebcfd00b95454c4e6d85a0c52bc09ba3"],["/posts/3e118dbf.html","a0882b60f30c09aa3fd01add7af2696e"],["/posts/3f7d823a.html","f1ceab9b9c9ae3497a11618f95a618da"],["/posts/3f978819.html","e2621c5a55ddb52afd2f6716f6edd77c"],["/posts/43945723.html","bcce417c65ddc844855a163cb8725bea"],["/posts/44124a6b.html","2292c64c9cd7e0b48b0b15cdcc0d8202"],["/posts/47abb61d.html","4343dd023b78022f2f9c7aeb73ee1239"],["/posts/4b689be3.html","f1de24dcdab0eb3f81549a554c6f07b7"],["/posts/4cf8423f.html","72d887b9acf22d2c8a9e6a8e1c9f07f1"],["/posts/4dcf85c.html","20c4f03e48adf7c3faa7eb9a3fca5e45"],["/posts/500cd322.html","3b45dd78e9a14073c3b48ffd54321e90"],["/posts/51c9b1ff.html","396b91007e92ee7b9b7b4585ab49f707"],["/posts/52b5b3c6.html","ee09fc3611201ef6006f5c1e1562ae65"],["/posts/5f6e0c59.html","22edf3921a327daff78c4d1bb01fc4e3"],["/posts/61a63a84.html","40fff760553f87955276a53e7c089303"],["/posts/625ab7bf.html","90c601b38d662357239d5340c1c039b0"],["/posts/6336a2f9.html","751fd92d680703635c2e9b01dc9dc3a0"],["/posts/6432d61a.html","f17b036f48d543f2ff4ad410657f0d06"],["/posts/6515f032.html","58886bd74c57af1744a42d2bf286b904"],["/posts/6720ccdd.html","642ba8b5d0eb703fd98bb1ce45bc1dbd"],["/posts/6a4b5ac8.html","1a1094345a94e068d89ad2d36d2089ca"],["/posts/6aa4177c.html","1f18017b907c6ea2eaba49814d314871"],["/posts/6b15f81f.html","c2edc74e08bdb837d09466a333c478da"],["/posts/71131d34.html","f534d7ec8075a4052f1d03b2693f4f74"],["/posts/78a8a8d3.html","82f28df12a2cb0dc4b75ae6588b4e524"],["/posts/7a5ef3d0.html","5baedecfe04dbeb32e473f565a8918ec"],["/posts/7b41e1ac.html","879fbe893ae19c713812f5f5e17b9f5b"],["/posts/7b51011d.html","83395b9759e7af7836931dfeaa360321"],["/posts/7e3aa3e2.html","fd6654db0088152fae6b6a357fe78296"],["/posts/80fe2691.html","54bc5ece2d1bdbd8fc835884ea4138ed"],["/posts/81ac52e9.html","f821f8e360a6b8f367f9858ee1fbcff8"],["/posts/8486f6f9.html","bfeb26a9d71547396a39948dade6209b"],["/posts/849b40f8.html","4df09a8983d2186939453bac6811b19c"],["/posts/85c51d68.html","d092895a4c40e32a67cfc9c5c90c5799"],["/posts/886f8d3.html","9d181bdebc1062ad92b682dc27ac698e"],["/posts/8a7cba10.html","c1fe37ad60d0dd1e4da9476a62da4524"],["/posts/8ac11b41.html","b4217dc356e43001861133f6320df237"],["/posts/8dd520d9.html","d6f40c5e67e03a23450f1fc6f4d8a030"],["/posts/8f555654.html","8721fcd087834155b90a8cca9c773242"],["/posts/92a980c2.html","4ba7bed1b31c86d3824622a96b8fbbd5"],["/posts/92ce16.html","4b5c331c3b892246a7c93a76035117b3"],["/posts/93e9943b.html","d1758c69bfbd006ac0751d6cae51b663"],["/posts/94d3c794.html","84b45b9578d66f3fda6e85f0eef33ecd"],["/posts/97f50eea.html","59d11766c21dd47f38275eadbc55a08f"],["/posts/97fca8be.html","d430cca92f80c0cdb6647f184ad83726"],["/posts/98662d05.html","3ce037dacc46e8ce851050e1d45a2f4d"],["/posts/9a2f6162.html","2d3e464584f16779eb68010b69c2774b"],["/posts/9b22a48d.html","8de30ee025ddbc3632d6de8bfdeb50b7"],["/posts/9cb455b1.html","bb97a1dffe1c719edd508be287c21afa"],["/posts/9ecdeecc.html","8ea92addf6d9ebd51d4747a6d0a92a5e"],["/posts/9efd7701.html","cc0dd54452e1719dd745b8929946ae15"],["/posts/9f61c1a0.html","d3579f4d8320f338162430add69e2c14"],["/posts/a1de710.html","71ed491e96e19efecd5d829a03c86ec6"],["/posts/a30eb0cd.html","e5b9fb5c43db2354227c7c0a5c03ad8b"],["/posts/af1807ef.html","616c68657e41e8b896a4c53a8e415060"],["/posts/b497b647.html","15b3bda69bbfc17d60ed78b0a579a419"],["/posts/b4d464b0.html","6f9b0d0d5c4a7c1603840ceb0faed1f4"],["/posts/b5fb773f.html","c698a38bf9524823ab5749e0c52f49b0"],["/posts/b8d46b32.html","e34231aee17787e2e406393123ef8b36"],["/posts/c1b2c6c9.html","22a1d553175c321d9360f290d3d18197"],["/posts/c2111cbf.html","003d9628bef65adbb23d250434ea66d4"],["/posts/c316c2e8.html","f1dcd898b2d493cec0c0a3c51d5a9f81"],["/posts/c43e60b5.html","7d801ad9bb71b46ed13c126a8e7dcda7"],["/posts/c497a412.html","36970abe480eda33039bbe048892ce68"],["/posts/c5de299a.html","c055deb7256c4cf84c37de421ff7481e"],["/posts/c70bba9c.html","8d93177b3fc0f5e1322f0bff71572c39"],["/posts/c797535e.html","b3d789b29aeb65443dce881a4d678ff9"],["/posts/c7a62c79.html","3ea780f79d7b65549c1eef66aea1d43e"],["/posts/cae2c959.html","5464c067d8eda7b6e7c99857cd044a65"],["/posts/cbebef2b.html","9805c69780c586453eb199c850a79e00"],["/posts/ce25023e.html","d1d671aa381d0429b88ad5efbca9be06"],["/posts/d2fd4837.html","736048e7e37b65d919420f170f4aa3de"],["/posts/d3233cbb.html","b5ac92b417ad20cd4c36b298125f950e"],["/posts/d3a745a8.html","43edc67e261a6fe714b5090a355cec4d"],["/posts/dc815d5.html","3fe34540a09241fea185a1560c8261fd"],["/posts/e3ab6ad8.html","e96fdc3c6c8b1ae006175b23db61b4c7"],["/posts/e5018da6.html","c048945a8fc718397cf8b601aacd7200"],["/posts/e5963272.html","b08f4b345f621e4ccea95ee6474e938d"],["/posts/e624b065.html","82aacda9fc5e042570788204dc0d1f64"],["/posts/e7c703bb.html","4d4a95b00b84e9cbfb86b9540f2badc6"],["/posts/e8f14b6c.html","18b8592f4087f9b72df6c46ac9ae89c6"],["/posts/e91abb63.html","c10553e8ba96e28e7a8e299ab1de46a4"],["/posts/ea9a8808.html","d0a35f24f479462b304b8f3941d1bb8f"],["/posts/ebaf2232.html","87cd1265687927246cdba9c5d9c108b6"],["/posts/ee1ed673.html","9e4239479172b7870f606f0567ddc7b1"],["/posts/f0c3ed61.html","fe5c629d1d5efc1bcb002b51331e01c8"],["/posts/f21e7f84.html","9b64877c63eb7ebfffd5d063c54d41cf"],["/posts/f230b0fd.html","3524694feab6a0d402f2cb4bb8282d74"],["/posts/fc04d0d4.html","67b8e5299f966dacdc09b4db0aedeb62"],["/sumire/index.html","0a81f67327e09faae6eae0cd288b9f62"],["/sw-register.js","b5161180331952f2b6fa80e89988bb84"],["/tags/APPLE-project/index.html","58f0dd6d28a22855263167876bdeef02"],["/tags/BELL-DA/index.html","73a54903c57d67ab28976c8b679412e8"],["/tags/BL-Game/index.html","e5a48a9b4b175e4400e4cda5caf57272"],["/tags/Blue-Dahlia-Digital-Creators/index.html","a35e1094970b081944f78a2365d8fa0b"],["/tags/CHUNSOFT/index.html","dd36934e9f34a3d904a8762c40940402"],["/tags/Cherry-Pie/index.html","e4961ef837a1fc388d5c38bfde7d42bf"],["/tags/Circle-Mebius/index.html","1719d58da94952cffb1693c028f1f563"],["/tags/CresCENT-BLANK/index.html","1ce8c20ace0200128575f414ed17d0dd"],["/tags/Dopamine-Software/index.html","4cca8b35a6a07446ca106f77f999eeaa"],["/tags/Dos/index.html","9526f991cea8e0079a18536d2e25e1bb"],["/tags/Earth-Well/index.html","1a6414b6fdf966cbe1c65211fcbbe2c8"],["/tags/Kanon/index.html","9711544434a3031dbd9066d5158b40b9"],["/tags/MANATSU-8/index.html","a37bdb31aa5728457f699b96436157c9"],["/tags/MIO/index.html","61166f1bb44f2e329f1b12bb9b768afb"],["/tags/Nmyu/index.html","a7de34a5bd57f7bc405d8bf38dc304ca"],["/tags/O-S-I/index.html","4797d75fdbb1236de3b02a21f2dd6908"],["/tags/Omegaの視界/index.html","d1e38e68e9b4821c0b08ff0232b958bf"],["/tags/PC88/index.html","acec15c7365706578a6e4e0bfae13f80"],["/tags/PC98/index.html","02976ce2cf7e3d1583e23ac6ebf43ca4"],["/tags/Perpetual-Room/index.html","cfa0b1a2cb1d484f0b44594257c89294"],["/tags/Pleiades-Company/index.html","25df35933bb770303d780ca2e4a53257"],["/tags/Project-Twintail/index.html","9554e21cbe719b3299b7f225e07ac7fa"],["/tags/Reverv/index.html","ea7caa774751ae76010aa28ccbbe2fbe"],["/tags/Saihate-SOFT/index.html","85bbde2b80932d5e2df2cfa41ee477bc"],["/tags/Sky-On-R-imaginAtion/index.html","5a1ef9f4892a8a33d36dca7331807585"],["/tags/StrayMoon/index.html","6d3b889b149a10f0bc644075e62d9a62"],["/tags/Studio-Bu-Sa/index.html","e9ae59635c7bcbc0204fc0543a440e08"],["/tags/ToHeart/index.html","4ed9a9e0ddfa295c5098cd91485ce97b"],["/tags/Traumend/index.html","489bc8e19eca729f6e3d35b2f38c0f00"],["/tags/Witch/index.html","a27c9ac4e9161ee5b8dad1f661e71478"],["/tags/adonis-project/index.html","3df1c068fd20da8756a0ec75863544af"],["/tags/flash/index.html","7f0b90bcc99476aa91f43945a7d61c64"],["/tags/galgame/index.html","0341961b3eac02103288e704ac9f98dd"],["/tags/galgame/page/2/index.html","744bbe046978a341332a1cda39298626"],["/tags/gal资源/index.html","3aaf242a7c0162432e67887383cdbecf"],["/tags/gal资源/page/2/index.html","0a0f36c1c3f5d929f283866b0e00ba36"],["/tags/gal资源/page/3/index.html","3c589a00e3c440b96b780e176f109243"],["/tags/index.html","8daba41bc13944e6ab0ab72b2edd9556"],["/tags/rkr/index.html","7f9ae716c512231acf9872689b68ac0b"],["/tags/team-eye-mask/index.html","4060d58c5671ac75d454dc51c2d4edc0"],["/tags/ありすくろいつ/index.html","f9de741dbb13ad28e74a730ef66c9df4"],["/tags/いつものところ/index.html","caae61b64f428f883c43b8c023b8f0ca"],["/tags/きつねみみ饅頭/index.html","76677df4bfd768e2f58a2080863795a0"],["/tags/ねこねこソフト/index.html","85e722784e4fd968667fb319ef8314d8"],["/tags/ねこバナナ/index.html","4cbb50c42134a22db52175a112169476"],["/tags/はちみつくまさん/index.html","1130b47504c95448ad3b216f6e7243b2"],["/tags/ろりちせ/index.html","a8081c35e0a8fea8894c4b0de46247e7"],["/tags/アイル【チーム・TATU】/index.html","3a286077a8cafdbbd00222e00405ac39"],["/tags/アークシステムワークス/index.html","9e9c0d47e1917a9ccf15951ff5f80502"],["/tags/ブロッコリー/index.html","1f32c8bff06736c9b17a892b87b43747"],["/tags/乙女/index.html","f62e60ad2a81b8fa780f5b1f22e24314"],["/tags/停产/index.html","0f780831bb05b0b348929740d9967ba0"],["/tags/公告/index.html","60bcfd14d028a75c1a837388a8de1d84"],["/tags/同人/index.html","f63a3b7ddf1c096b20c42f7c7aeb533d"],["/tags/堀井雄二/index.html","6615ba3a873e3205b4188267dc62eeb9"],["/tags/外海なおき/index.html","49782b409b2c328cf29bc12a58394dff"],["/tags/機械式少女/index.html","c3a4d502e8aa20c09bb5ef82831ce752"],["/tags/水仙/index.html","c823eb2aaa685dd896107b58747e31aa"],["/tags/汉化/index.html","35f48d66ed658e01c97e5e429e0c24ed"],["/tags/片冈智/index.html","f14fda85565b504457dfa066ba7a8569"],["/tags/片岡とも/index.html","52c0ebad7a0c4688f99148fd1de87329"],["/tags/牙の刻印制作委員会/index.html","3a63ad0cde9dcb1027b0d4f06fc5ce80"],["/tags/牛カルビ定食-FLAT/index.html","bb28c6710a91946a17e1bbca32d546c7"],["/tags/牧尾屋/index.html","567e8bbbe59aad68c3eb8abfb04add94"],["/tags/猫猫社/index.html","ce2a484e595fc535cbf01f25df954fb0"],["/tags/王宮魔法劇団/index.html","fdfb863eb72f7bbac671d3e89432d59a"],["/tags/画集/index.html","dd7e4c38ff590cb38346b8d46b6849b1"],["/tags/索引/index.html","0559c31e658828c9b3c3e0f80cbb10b7"],["/tags/自购/index.html","8f838f4d927e33306d272e1c855bc7bb"],["/tags/郷愁花屋/index.html","aaa54f530a9cee2c77ee75ac4fe43cf7"],["/tags/閂夜明/index.html","6dab9940e76893bde09c49d252f6b57d"],["/tags/音乐美/index.html","3b01ec5bfb5e51beca496ca273799a58"],["/tags/黒†救/index.html","b30374ce5bda6e99ecd8b31c5b6d93d6"]];
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
