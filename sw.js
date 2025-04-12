/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","457af072c7818f1974461713e8336ad9"],["/archives/2024/04/index.html","a9f7ba35a35f6d83e385f77cc7a90740"],["/archives/2024/index.html","4d8e479d5c41dd3206cb5711c1d49107"],["/archives/2025/02/index.html","403e5b77c2e50d44e393f90a2b655d55"],["/archives/2025/02/page/2/index.html","d30ad0b482e81ff3b981ff12fc544f21"],["/archives/2025/02/page/3/index.html","d70c419bc30729c33ea2cbe69e347ce3"],["/archives/2025/02/page/4/index.html","7c4d9fd04cbb0faedca65bb4ca76d45a"],["/archives/2025/02/page/5/index.html","bd488eee346290a0fa5242088ea03a8b"],["/archives/2025/03/index.html","042e9e22f6feb9652727eeb1f71b8d5b"],["/archives/2025/03/page/2/index.html","fbdde71fb151a20f38f362c5d2c723ea"],["/archives/2025/03/page/3/index.html","c3c294c7405feccd48cc95fe9ae67744"],["/archives/2025/03/page/4/index.html","0da0e40e73a9abe4d43a378bfbc48a12"],["/archives/2025/03/page/5/index.html","34958dcb8aa68925fd221a65068ad64b"],["/archives/2025/03/page/6/index.html","e6538c7ffdc5fed1c765afdb0861e20a"],["/archives/2025/04/index.html","84b4551826c2aeefa359b899ec6a4880"],["/archives/2025/index.html","8f2ec97f793a75d4308696b146ddcb26"],["/archives/2025/page/10/index.html","af7cb22b63989ccafa506b4bf7391de8"],["/archives/2025/page/11/index.html","85e393cec75daa89e11d5531013ea44d"],["/archives/2025/page/2/index.html","6d86f9fd82a31418ad42bd83a5f5bb3c"],["/archives/2025/page/3/index.html","8d0201f3a24549788f10b6ef3f41fd5e"],["/archives/2025/page/4/index.html","815c21974e0bc8a65ac1c2360fa3feeb"],["/archives/2025/page/5/index.html","5d7ab96dd076ebfd18df9cf7371a811d"],["/archives/2025/page/6/index.html","0e00d5ab068022c2516c6e6bd54fef1b"],["/archives/2025/page/7/index.html","66f67358e613c66852d097a0c523ca25"],["/archives/2025/page/8/index.html","0896d3f0e7efd0c36992fe382a141208"],["/archives/2025/page/9/index.html","a36b1bd85ab027157edf095caafd3064"],["/archives/2026/02/index.html","6f4fde21a51aba45db25a0e0d1901ef5"],["/archives/2026/index.html","71e8911c0bc7c963b5c3f9dcec0cc3df"],["/archives/2925/01/index.html","229c6d6a4cf96df201cd6de2294d19a8"],["/archives/2925/index.html","453112cc34ad0f4f9e6a3ca40d6a6709"],["/archives/index.html","83836211990c3b23aa94a6044097a031"],["/archives/page/10/index.html","6cafb7d645151fd402033409652f3eea"],["/archives/page/11/index.html","228a03937e29a0aa49986f7ccf1e65b2"],["/archives/page/12/index.html","327475f6c19fa4703df0fbe86c2484a7"],["/archives/page/2/index.html","03d59342f96d75cb2c2f26e5a31b448e"],["/archives/page/3/index.html","d73bcfeca0cd3cd91d1a2d92f56423b3"],["/archives/page/4/index.html","4ade8325e445d9d8e5f0766909c70a81"],["/archives/page/5/index.html","3a88c23211f32bf33fdbc0f29d446c2f"],["/archives/page/6/index.html","9de4b26b4cd354d647ccd85b2881842b"],["/archives/page/7/index.html","71516f142165f9c937e483972d357f9a"],["/archives/page/8/index.html","f593adbe43735941cfe94827ed209469"],["/archives/page/9/index.html","03944ee2e2f1e9eccbc80a7b6b8b7b2d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","fbad0dc5ca42c28baddeb49d8eb6a22b"],["/categories/galgame/page/2/index.html","842a2e3dd7d758cec992ede7e84810f0"],["/categories/公告/index.html","1c3e8143d4d4d0bb703b7d1e99125da5"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","f9b0c4758acab61ed6fd3681de657a63"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","bcf7046e85cfee6a88e93408f71d8fcd"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","f1f356495c66db3a5e8020079b36bcf9"],["/page/10/index.html","baa7e3b18c6c92b94c1f7e32a03cbb36"],["/page/11/index.html","d78dc85f4b9375cdced2d923ecf6062e"],["/page/12/index.html","6a963a3d9cf413965275da490bac38ae"],["/page/2/index.html","5e7ac92966b6fabecc7a61c241b8dd7a"],["/page/3/index.html","ab7cf82aa409ba20f356f1ef586032c6"],["/page/4/index.html","69d64a403360082441e5392f5cdc05ad"],["/page/5/index.html","d15ca706af0a13060eee6b63bd648d68"],["/page/6/index.html","a15ed7ed5cce3310db5c1dbace37dd9f"],["/page/7/index.html","57dbd7b823846be25fcbc8566b1a40c8"],["/page/8/index.html","05ff2d51789a91ef564ce72645519194"],["/page/9/index.html","e1da86c65187f5a8bf662fa274d6366c"],["/posts/10c9dd98.html","454a05a6d34e9e516d26af2678a79b74"],["/posts/1295b569.html","cc5a4c49dbaaceac13a84e0abd8a301e"],["/posts/1370342.html","3787cd29a58f7a657e974a60cf1d705f"],["/posts/15ef14c2.html","148c5edd574e677a289907e2217cb659"],["/posts/15f3959d.html","973d112e7b77c4b87a7f10b09044496a"],["/posts/18ab785d.html","a5b25e90247289967f019851a54d741d"],["/posts/1d59b71f.html","de8c60155a07646e76e592627ab4d752"],["/posts/20b3f3a4.html","3d2804cdd6b182a39348d7ec8e1ed4af"],["/posts/245f1c7d.html","cec8376174d8705376b27d60f14ec3ab"],["/posts/252658f.html","1af5adb9ea67b727c0d2b3405e306057"],["/posts/28397adc.html","48d68dca9142a99d15503a732001c1c6"],["/posts/2b38bce0.html","9fdbc827ab1ab28597e3d22528fcc145"],["/posts/2c0a6836.html","9e9b3a359a50c08f5d9b1c17473f821a"],["/posts/2ce39bcc.html","dd026d230b35547c0e8676f256168353"],["/posts/2cf620f0.html","20a50435f7236f4834a6b79a78f9501d"],["/posts/2e30fd6d.html","92b9e37e871c81d6f4cda7dc5de19894"],["/posts/34292736.html","2b3bfdd341988e9e69d90c710b97ad68"],["/posts/3468cbe.html","f52fad016783e8915a67108c0004b991"],["/posts/39176dc0.html","f97969f83f6a727e6e40ae048d027dca"],["/posts/3e118dbf.html","9fdc1794440eb59afa6054074908b96f"],["/posts/3f7d823a.html","9f3639f703b079421c35addf8f05f7c3"],["/posts/3f978819.html","03c70f7d5886034f6a8904263d34752b"],["/posts/43945723.html","3a5e1cae50c971a7741a0496db6369ad"],["/posts/44124a6b.html","94e4fcc7f1d0e8171dcee3e879547efc"],["/posts/47abb61d.html","e2d7e6f6d75ceb21d73cf3ee35d46531"],["/posts/4b689be3.html","5ff7a4989a2d9a6f6aa80dcce9102982"],["/posts/4cf8423f.html","1d7d4c696236e971bbdfefba05a3bfa9"],["/posts/4dcf85c.html","064b5bbbded38455d7829028d39f936d"],["/posts/500cd322.html","20d031f8466f2a321902b1569707f014"],["/posts/51c9b1ff.html","0a809aa17ec018417879ad21f0fa4658"],["/posts/52b5b3c6.html","870d39e6288fd67ad8f7dba06a360b7a"],["/posts/5d8bea92.html","9f34f3b0b652202102d1d6d44a98c5d5"],["/posts/5f6e0c59.html","0ab6831262ea9fca176b082949c1b812"],["/posts/61a63a84.html","dc7e613cfb5c27d1fc59e5fcfeaae5f1"],["/posts/625ab7bf.html","2ce4b2086e5b1a2687a098b4ace4559d"],["/posts/6336a2f9.html","fd565e0d264faf4f3087fc9ecc9e21db"],["/posts/6432d61a.html","7a06d88e95dcf58db9a90d8dedd1f9f2"],["/posts/6515f032.html","2f4fec2a4c6895ea3838d2f2324da5b8"],["/posts/6720ccdd.html","e4f32222410053e94a51f5ddc12aa760"],["/posts/6a4b5ac8.html","d0f287b30d73bd27f42172da9bc08c35"],["/posts/6aa4177c.html","b7821d2891092c0f7ac2a49255c9006d"],["/posts/6b15f81f.html","d3d17fe762b45e7f74c81fdab876e8f3"],["/posts/71131d34.html","95f31979bf76a0e10e6aff780c36dfc5"],["/posts/78a8a8d3.html","671e54c082d885807bba2edd0ab84c30"],["/posts/7a5ef3d0.html","1ef0e29b62e11bffaa6cbc430af56490"],["/posts/7b41e1ac.html","a8a499c9dc647b97169c1cc2494265cc"],["/posts/7b51011d.html","0d0e28012c354699fb0d63e0a748c82c"],["/posts/7e3aa3e2.html","c5db861bbf29f8cbdb5148c374b51cd9"],["/posts/80fe2691.html","74c77c16cf82f640b6c6f75eae5d7827"],["/posts/81ac52e9.html","d641b2e7dfc79c6c8e0cd30ee33526a3"],["/posts/8486f6f9.html","046817ba8586affa5d2c2eb568332af1"],["/posts/849b40f8.html","6486ad4ed8eb5ea84cb56a1155c7ad70"],["/posts/85c51d68.html","22ebdab80018cb39b78095bb25548b02"],["/posts/86a6c500.html","bd2d7b5fea80df6eed99ee8422caa6b5"],["/posts/886f8d3.html","94ccc5d0aa767124b5ec30f7cd6993aa"],["/posts/8a7cba10.html","134437e546317241de2598e63dcec526"],["/posts/8ac11b41.html","43ff2c29cf88fec77a494a7a10e30458"],["/posts/8dd520d9.html","6c682be0b422ee455ae3a688a56f2405"],["/posts/8f555654.html","1114f9a35120e376836e9bf794e05620"],["/posts/92a980c2.html","fac7c6e12567cc02dfecc22582845516"],["/posts/92ce16.html","39ee3ae39959e49a3c95a96355d6e685"],["/posts/93e9943b.html","5992e77ee0398e66df1b9920028bdb47"],["/posts/94d3c794.html","f226ecb05af1a982c7bba1237d8fee6a"],["/posts/97f50eea.html","bb8d8de06085f565ad84a4a406175ef3"],["/posts/97fca8be.html","68f0fc4c2fe3807978705fba9b4ce283"],["/posts/98662d05.html","a6175d0ed22b43cade957db9105a3213"],["/posts/9a2f6162.html","d8d089bebaab7f6aab7fb48a8c445fc5"],["/posts/9b22a48d.html","fc36ed4acb719ee821729fb11ad2477d"],["/posts/9cb455b1.html","dfc5fc6cb9ea5955afc62c5582c860fe"],["/posts/9ecdeecc.html","6694156d0e7e44431c3a5c4e3ee0e1bf"],["/posts/9efd7701.html","9f2a1e8b4dc35f22dd4d857a566cb508"],["/posts/9f61c1a0.html","4573572acfa9f3c4aea4b25388c99288"],["/posts/a1de710.html","6d813a3f84f203a40d05e1710eeb1e1a"],["/posts/a30eb0cd.html","ec835bea918bafaa3b17555d9dce106c"],["/posts/af1807ef.html","234501a54468b19f33420d4e9e1486c5"],["/posts/b497b647.html","54735f5a1620cf1f3516f29a2b47f81b"],["/posts/b4d464b0.html","02ca4582c0438e9f370710beb9615c0d"],["/posts/b5fb773f.html","b5b699093c4023242964c44a01a29c8a"],["/posts/b8d46b32.html","34b7dd32526ae6a00b70a1a15958dc01"],["/posts/c1b2c6c9.html","172d723a3f955d79f64a5001a94b09c4"],["/posts/c2111cbf.html","e7f74b09aabf26fcdc48d5f7717bb904"],["/posts/c316c2e8.html","29f8aeb19c20eebf7f1bd58f01ef7630"],["/posts/c43e60b5.html","e8e17b9bae517e34dee53ee3cbe2b73b"],["/posts/c497a412.html","458bbeb1d9139e93b27430eb46fa98a6"],["/posts/c5de299a.html","b787749caa5cbb6ecbeb122c8c1b41fb"],["/posts/c70bba9c.html","b83b335c8807c8858e52946023b5411b"],["/posts/c797535e.html","fd851d5e7d0a05ffde373da2793f647c"],["/posts/c7a62c79.html","acbfed15943c50f9628b6abc84be7505"],["/posts/cae2c959.html","21774323293ba226a860d4a584ef3589"],["/posts/cbebef2b.html","6576bca35770143847d0bc1209c6c044"],["/posts/ce25023e.html","323f6865764782e5f684ad6b00868db9"],["/posts/d2fd4837.html","073964ea97e4c2833465333664fbd8f7"],["/posts/d3233cbb.html","0c334e1b004eba0a6bbed3afa0c29b44"],["/posts/d3a745a8.html","bad770a6d643e89fc64ae435c2385e45"],["/posts/d7e940d2.html","e735c655bb3a65eee3f2ac8c97703cb5"],["/posts/dc815d5.html","eeaf1cc0d84d5fcc963f7c293bd3691e"],["/posts/de25b0be.html","427afe67799e2a28a4aef1f673d6b9d5"],["/posts/e3ab6ad8.html","4b6ef15f2faa9ab723a98597706eb040"],["/posts/e5018da6.html","1d6ade0a48091ef449aaf94bec05fd13"],["/posts/e5963272.html","70a6add30b7e1cf1bcff9d129504323e"],["/posts/e624b065.html","05c5560cef3fa335f5b34ee97ed09f21"],["/posts/e7c703bb.html","fc3557850261414c5051fb9a145310e4"],["/posts/e8f14b6c.html","9621d1ef5e0859b091b5006945363fa7"],["/posts/e91abb63.html","c3509040cfad9e18a26327cb861f127d"],["/posts/ea9a8808.html","e56557131afa72c0fda13ab150ed90a7"],["/posts/eb784749.html","267c055a91505dd6938897c9fccbfb9b"],["/posts/ebaf2232.html","082ade9aedc4f984e53e4acc7d434d96"],["/posts/ee1ed673.html","870647dceab62dd3d8f8135ed1fc861d"],["/posts/f0c3ed61.html","b35d3ac492db75a45cfa29f342e3d3f5"],["/posts/f21e7f84.html","081cebdb3a06a04f8c8b74f3ca63dcbe"],["/posts/f230b0fd.html","91075392195690b803bc67581920bd28"],["/posts/f663d5cc.html","d377053ddf920e1eeef3baa1392ef0c8"],["/posts/fc04d0d4.html","636c6567a6909b8fc9bd1d60905e0756"],["/sumire/index.html","3059c5947eb1dff83337a688692d0bee"],["/sw-register.js","e9b6936b1d4a06bd04fe650e5be6c042"],["/tags/APPLE-project/index.html","d7c60e254be18bfaffe5e466d809c5e6"],["/tags/BELL-DA/index.html","b17643801e927615d0e01e8d1162be0e"],["/tags/BL-Game/index.html","90814080e550912ddca2ce7d9cb845b2"],["/tags/Blue-Dahlia-Digital-Creators/index.html","8bf00a975cba5590ac3e3c5eebbe7140"],["/tags/CHUNSOFT/index.html","6736639501656a5c8d7651df44ec461c"],["/tags/Cherry-Pie/index.html","0ed33e9bceaae86b41e05d1a6423431f"],["/tags/Circle-Mebius/index.html","04523c0415656752213c28ba2c59c329"],["/tags/CresCENT-BLANK/index.html","5daeac3615e504ece81ca91f7141ec67"],["/tags/Dopamine-Software/index.html","92e33fdd095040332fe3722a46000ba5"],["/tags/Dos/index.html","392bd56125eb5b307155383688c50fb5"],["/tags/Earth-Well/index.html","3ea6abe1e7d9430975eb1a808cf375f6"],["/tags/Kanon/index.html","872d5507654e6c39e02da5948b599d84"],["/tags/MANATSU-8/index.html","436744b1730d39a643ed4dc430cd495b"],["/tags/MARINE/index.html","98d6fe9f6754144e4861b4338bde52df"],["/tags/MIO/index.html","a771651d78c66f9730b74870c093b950"],["/tags/Nmyu/index.html","77c9190305d0652631bcedbe311306a2"],["/tags/O-S-I/index.html","a6581b981aaef202acde76aa7a357e36"],["/tags/Omegaの視界/index.html","9401777e0167efd502d071143691e895"],["/tags/PC88/index.html","04290e6281b652c3c21e865f1f0e0167"],["/tags/PC98/index.html","79e6da97a47188de33d0345d0c52fb55"],["/tags/Perpetual-Room/index.html","fd762d62d8c0d5f893661cf31ef1c266"],["/tags/Pleiades-Company/index.html","67d6457640386ff75aa22c686c177a0e"],["/tags/Project-Twintail/index.html","3c70007ef45efad41ad9e338ed25b335"],["/tags/RIFF-RAFF/index.html","7c64d63f79740265c03e6bf3c55b2c7c"],["/tags/Reverv/index.html","b7279ab4f786a3d6d598754ed1c6b4dd"],["/tags/SENTIVE/index.html","f51e5f2907164fc6ee00c8cfc96ddf85"],["/tags/Saihate-SOFT/index.html","adec42dce07363e02321bf3105c71c63"],["/tags/Sky-On-R-imaginAtion/index.html","4d14fd9595cdcb3318815a12792b3502"],["/tags/StrayMoon/index.html","6c2c453c767bf325db6abce2c586be6c"],["/tags/Studio-Bu-Sa/index.html","c8651b180ba5bb34eea74d09389ad476"],["/tags/ToHeart/index.html","97dacda3e788c44faecae5f0fee892af"],["/tags/Traumend/index.html","2d5c394fde18605b6cb69a2f566e2361"],["/tags/Witch/index.html","79f8c708b023e97620a01adb10295170"],["/tags/adonis-project/index.html","47b026b2f3234188566fb60c38defeaa"],["/tags/flash/index.html","fe98ee59ab2906d7119e1096c333616b"],["/tags/galgame/index.html","a3874c07b45befcf109689f50062539b"],["/tags/galgame/page/2/index.html","78dcb17af4b97f9d51fb2a18b989baf5"],["/tags/gal资源/index.html","b2ea80c63fd56e514a34a5abb107663a"],["/tags/gal资源/page/2/index.html","46d0415211c17c609a9a5be5504d6f23"],["/tags/gal资源/page/3/index.html","7e0d71981fad35639bdd15bbcbcf2d13"],["/tags/index.html","102d6c5cca9b5020da67f2d2d02f7d47"],["/tags/rkr/index.html","7edcb865df707713122d421358f15ee2"],["/tags/team-eye-mask/index.html","78225a9a1603c55659a16a70d28c6137"],["/tags/ありすくろいつ/index.html","18ea757dc12de7c0c1bc52c69b8284ee"],["/tags/いつものところ/index.html","308ff027192859fa6e645175260ad7fa"],["/tags/きつねみみ饅頭/index.html","d5ff41d4945767a9bad2681bb39671c8"],["/tags/ねこねこソフト/index.html","cd6bd9a3fb32b4abbba5e68779e7113b"],["/tags/ねこバナナ/index.html","065bb2caca61c846c362795c1bcdac1d"],["/tags/はちみつくまさん/index.html","5ecfa6544efe313d7bff012bc5b9ba8c"],["/tags/ろりちせ/index.html","fde870ac063b91c84599e1800f5b428e"],["/tags/アイル【チーム・TATU】/index.html","3e3783ebdf7f1031fb9c6d06e0473c1a"],["/tags/アークシステムワークス/index.html","49222ef88183ff317aa84aa3450c837a"],["/tags/ブロッコリー/index.html","d48df54d2a0d468e594b1acbe9ae1c86"],["/tags/乙女/index.html","cacf69099bc9a23319ef27d72f86fe37"],["/tags/停产/index.html","29346592877889e5e79a1a0d78607427"],["/tags/公告/index.html","dec67930c56dd19c2b0af76ed1191ab1"],["/tags/同人/index.html","5f1cfd4b8fb322d853ebfb2bb780ac04"],["/tags/堀井雄二/index.html","58e1063923e36856ed1b51a955a3a577"],["/tags/外海なおき/index.html","ca488efd76b76326adb3e14366c484a9"],["/tags/桃野衿/index.html","043088ad6e02f11960130a773eda3163"],["/tags/機械式少女/index.html","afb47386cba36b2ad64e823530b585c9"],["/tags/水仙/index.html","bbc1fc059f5f770472e5f099bd324381"],["/tags/汉化/index.html","ae4a78cc291c8a4e2f2469978ee3fa8a"],["/tags/片冈智/index.html","f0d63f958cb5aad71259fb85d8f3c44a"],["/tags/片岡とも/index.html","ad70c268fcbe0628fbc506dc095c59c5"],["/tags/牙の刻印制作委員会/index.html","2c2112fb0fe79e8480bdba83301b4e47"],["/tags/牛カルビ定食-FLAT/index.html","748ab607dcd2722214f6e0a790ece8e8"],["/tags/牧尾屋/index.html","7c444293a92bddfc925e087086c8b725"],["/tags/猫猫社/index.html","e423368bb15970112f009aba0264f6d7"],["/tags/王宮魔法劇団/index.html","a1a00bd9ff632fd834a52099459b2b1e"],["/tags/画集/index.html","74933ddd4a6579af80d4678f976f59f1"],["/tags/索引/index.html","04e410d4463179a0649152c1d5f224ba"],["/tags/自购/index.html","3b270a5d52c1190b86e90a9f6700e562"],["/tags/茶葉☆姫/index.html","ec0876a501c2e390256eb53ca278cd97"],["/tags/郷愁花屋/index.html","dfd8e82e1e9980bdecb274bf1891bccc"],["/tags/閂夜明/index.html","4348059562864f91b3e446f622ef16f7"],["/tags/音乐美/index.html","8a3670635827bcee87a889c34287ee39"],["/tags/黒†救/index.html","dc9c8f77ed2b7892ac983bd90432fbea"]];
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
