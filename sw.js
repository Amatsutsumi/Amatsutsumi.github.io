/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","426a15c5a2467088a7c557b760d53975"],["/archives/2024/04/index.html","288a9ba752eda4a172d97971a35c9c79"],["/archives/2024/index.html","bc57e1f43e9acb586b39f4469011ecb0"],["/archives/2025/02/index.html","3686764a489fae7b3c31c10e9e1193f2"],["/archives/2025/02/page/2/index.html","cbd1d344f6a5c965434258fd885c3244"],["/archives/2025/02/page/3/index.html","2575bc0717c96ee1a418b0f2f80f36e6"],["/archives/2025/02/page/4/index.html","ebdbbbaedfe57230aa2f98f3ec75093d"],["/archives/2025/02/page/5/index.html","a071d1ed49b476c82f3a6cd009a19f26"],["/archives/2025/03/index.html","017e0717a8a002be42d67fa5acc2afcb"],["/archives/2025/03/page/2/index.html","701ca3747dbbe1704a8879822a695d57"],["/archives/2025/03/page/3/index.html","dc3e0aeb7b3e37f27e320fdaa87e0372"],["/archives/2025/03/page/4/index.html","806be65cef7eab9c7adc1a68a3335129"],["/archives/2025/03/page/5/index.html","84f1148dbdc04fd5d23862d849967f2e"],["/archives/2025/03/page/6/index.html","bcba5653d30f7ea2470225ac23c95cc5"],["/archives/2025/04/index.html","29cbde377da40fbf4842f9371cb60f36"],["/archives/2025/04/page/2/index.html","91ea08487bb2376d4073d1e4a421a5e5"],["/archives/2025/index.html","042c55e39b220a6aa7d41dcaf2bccfd2"],["/archives/2025/page/10/index.html","141d0a8e16e33062084d7b0fbdab88b9"],["/archives/2025/page/11/index.html","a6a3423319604c3f0c801f55264e8ada"],["/archives/2025/page/12/index.html","a24f7c4c5544258c127f42af947add05"],["/archives/2025/page/2/index.html","c205a5db7993e5b9e2addc774cb17e13"],["/archives/2025/page/3/index.html","c574c571dde82f6a1ccfaf05836eb9c7"],["/archives/2025/page/4/index.html","a944e18ab7de6a5aa2b1caaee3bc8c91"],["/archives/2025/page/5/index.html","ce5dea12576eba73eb7b6b9bc5523ec8"],["/archives/2025/page/6/index.html","a54f1d41f721c27cc8ae8cf53b95b896"],["/archives/2025/page/7/index.html","1f1fbbd767207a5ce54980db7ecf3dcb"],["/archives/2025/page/8/index.html","dd4e234ba0fd060890da8bdeab9f6251"],["/archives/2025/page/9/index.html","4f40786372423df0af6950eb93593c2f"],["/archives/2026/02/index.html","bcdbc79e6c100e9a2f0a8ecf24193322"],["/archives/2026/index.html","fc901da1771e39aedfb916726545bf07"],["/archives/2825/04/index.html","45a8391eb9c00f29d4a0edd266a28284"],["/archives/2825/index.html","676d929b146b5c7d6056c171002e0a08"],["/archives/2925/01/index.html","9ab47b36b370af5a692f35536c66a2db"],["/archives/2925/index.html","fac66ad427241166b1ec69c18057a4ec"],["/archives/index.html","5738aeb5dbd70b8af2b4556cc5ae6663"],["/archives/page/10/index.html","99c65a66bff839bf0c9bfbc9848ed94c"],["/archives/page/11/index.html","4b756a593cccd17bcef957973f4380e3"],["/archives/page/12/index.html","0e2114c03914337814ae826970d77017"],["/archives/page/13/index.html","cdddd9a590c1509c4c5b81addec55451"],["/archives/page/2/index.html","8e9e3eaf6a6f87ff3467608c962ae786"],["/archives/page/3/index.html","4273eb526bf0c7301ee677548921ccdf"],["/archives/page/4/index.html","8350db83b2fd3513e32117eb909c5919"],["/archives/page/5/index.html","62363fd273d885749771b49241775aa6"],["/archives/page/6/index.html","fc971d7a9761a4d7fa9a3aa021ca3dcc"],["/archives/page/7/index.html","f2ed90c14325465ce5a366e18a0ef8d0"],["/archives/page/8/index.html","1b39b3349afa83de4d34435718d1ac43"],["/archives/page/9/index.html","e9cf2275cfd0f581077863df92218453"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","f4d1d900fba8f342d131b5f36660a440"],["/categories/galgame/page/2/index.html","f8cf77657bb17a672a80455be9a7d52b"],["/categories/公告/index.html","d3b339c9df59fadc862b77ab4d5289c3"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","0051837fc14021f365f01e1616731443"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","2d8d2d0dc7533a3c5cbd6914162417f0"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","d4768b357a8983ca841293e5521dda5a"],["/page/10/index.html","8f8f5d8110af649baa9f6d2d8a453601"],["/page/11/index.html","6f9d7fea8faf772b63b0f45a40381572"],["/page/12/index.html","52401f29e0cc2c2f9b33b7777a7e94d6"],["/page/13/index.html","553d403d1149d071fd9ede8775fbecd5"],["/page/2/index.html","a44e4f69cc4c4bd9e71c98c3daead6f8"],["/page/3/index.html","02587329e495dffce96c492dd7059a65"],["/page/4/index.html","c6b7d6f334de30fe582b87b3b3818155"],["/page/5/index.html","b7dcfaa72a80f1d8e2d7a485d8ac3131"],["/page/6/index.html","4636053f4b2dba5254964e2e24e06ed6"],["/page/7/index.html","6b179ff4b5584402646646728fbe9eae"],["/page/8/index.html","28d4abb85a21b73a50ac8ba4c8fcf1ea"],["/page/9/index.html","e38d3ac2721671279a7c136bc36e4781"],["/posts/10c9dd98.html","e7f3214e62752417f95d027733a3a276"],["/posts/1295b569.html","373ca6cea8bf24a7c66d52d87d018477"],["/posts/1370342.html","07dfe2ce0370441c8360e9b178b1b01f"],["/posts/15ef14c2.html","7539640e52ff17c37e089d4567b0152c"],["/posts/15f3959d.html","ff55a6ea3bc05a2a4db5609d8b67efc1"],["/posts/18ab785d.html","c1dea881ce23d092fc2b852f087b46a5"],["/posts/1d59b71f.html","308f8463f04d19276a13c06be44fa77c"],["/posts/20b3f3a4.html","5ad20d35ee4655cc7d84d86ff7e42b65"],["/posts/245f1c7d.html","1e0c7757de9917309ab12b0c89df21cd"],["/posts/252658f.html","bc7a8298f1e84c6e3248ff67d541e90c"],["/posts/28397adc.html","8ca1a7a1d734e705412f92d3647437f6"],["/posts/2ad07f54.html","e25be5ddd3bb632d40ff38869b09b769"],["/posts/2b38bce0.html","066472c8dbbff525cde86a64107e8040"],["/posts/2c0a6836.html","46ebc50a8b53c8d721bf7a21a04ff832"],["/posts/2ce39bcc.html","e9293bdd58535c9989e4880e403a3482"],["/posts/2cf620f0.html","c8876571a6ec90d320df4d1ce15b3a64"],["/posts/2e30fd6d.html","fc1cb0c91c8959d019e8296f407d7584"],["/posts/30a413ad.html","7b3f0f16b5575085001e2b44d6833d7f"],["/posts/34292736.html","15a5e7b6566d6978418aa2d03ef07786"],["/posts/3468cbe.html","9d256fe1ac8fae915976dba8813f5330"],["/posts/39176dc0.html","c8990b201ff4f3db1748fcaa1ccd9f5c"],["/posts/3e118dbf.html","dcc7072adb8be24e6283ab7b13f9f04b"],["/posts/3f7d823a.html","80cca2abc057ea663e769c2712ef6a43"],["/posts/3f978819.html","7a92684a858fb4b16087cef8c0276123"],["/posts/43945723.html","8970546ff6a6f68fbcd82bc020850e46"],["/posts/44124a6b.html","297cb9a7b68d675553edf3b1091fa82b"],["/posts/47abb61d.html","47502e0919494e5de0a3c9642bffa851"],["/posts/4996478a.html","8d49142cda554ae5fc806804274a2141"],["/posts/4b689be3.html","98643485b6d4c0e49e85ff7930c2aaca"],["/posts/4cf8423f.html","d4b28b688dc367ed5806d5b9e63191e8"],["/posts/4dcf85c.html","4f7252ab3f9b55ca9732bbeb83ecd3c6"],["/posts/500cd322.html","80bf0047b8e7b48b367c671459c6f009"],["/posts/51c9b1ff.html","4b3ba26db7b45da042c6bf181e9f7c63"],["/posts/52b5b3c6.html","fc39d832a2cb77cc0dedd5809ee44437"],["/posts/54f496ad.html","8411f32f84471044c47071a74610ec4f"],["/posts/558e1f30.html","a105428ba0df91dd92094516f7a8751c"],["/posts/5d8bea92.html","c4f37b89354f0c9b0147569831b2b529"],["/posts/5f6e0c59.html","92392ab2f79f18d7d20caed1cd45c3f2"],["/posts/61a63a84.html","b43c438a924135020a5a6e2b5e62312e"],["/posts/625ab7bf.html","0e41ab700273a3a5e33a77cbd70633e1"],["/posts/6336a2f9.html","b91b5d7cb530d254552a62ca2c7db664"],["/posts/6432d61a.html","5e57433fb8a7d5d1529f25c59a55da71"],["/posts/6515f032.html","87fa78094b9e138def2607e45bc63583"],["/posts/6720ccdd.html","b5ea078d9890f70f530ca4bdf9d901d1"],["/posts/6a4b5ac8.html","29596ac43e83d3353bfc7ea8e640206e"],["/posts/6aa4177c.html","d18d2407700056ae35aeda0ec32ba8bf"],["/posts/6b15f81f.html","4e5b74e431265f626d5ef99d899fa2d1"],["/posts/71131d34.html","beb02bb9066873e78b7e176011325904"],["/posts/742fd48d.html","b25bed8424866abb287eacc8ec862356"],["/posts/78a8a8d3.html","b0876dacb6f02075c832f4ae0027111c"],["/posts/7a5ef3d0.html","76ed662889dc69040bb35e01be82c4df"],["/posts/7b41e1ac.html","a7e02714a321385382c5889d7d1b90d8"],["/posts/7b51011d.html","58cca6473f239479bd74ab64334f4d2e"],["/posts/7e3aa3e2.html","989dbd1c3abf90ca9140a7a9db91ff49"],["/posts/80fe2691.html","e4a0d98fd0d7e571727508929d9845ca"],["/posts/81ac52e9.html","90ef06c1ac52d388ba95e62f7a39db45"],["/posts/82332d11.html","03ec96af353ff205a097a90babe3e47d"],["/posts/8486f6f9.html","890255b3f1dca614b51c92832804526b"],["/posts/849b40f8.html","dfec8984dac5866df285f4e64b1a454c"],["/posts/85c51d68.html","7e74c3899c1816ac0a4de1eb647fb8a3"],["/posts/86a6c500.html","bd6f805fb2b3a4f6ee7ca9749e9985ac"],["/posts/886f8d3.html","4bd0c518e21aa664b4b88bb03de2e8f0"],["/posts/8a7cba10.html","8d1616797e6640efac68a52edf593590"],["/posts/8ac11b41.html","3f478449f62d36c310beb6daa9ed233b"],["/posts/8dd520d9.html","b09cc10d04b5526a08cfd8ce3983a79d"],["/posts/8f555654.html","e5fda525796501a8da5c2f93d6ecc590"],["/posts/92a980c2.html","5e070812b2971eefa3df9e89fc75a091"],["/posts/92ce16.html","d241cacd57bb38de483e200abdc11550"],["/posts/93e9943b.html","c8ff585e00c2b6ea53ff4e0d542af19f"],["/posts/94d3c794.html","04bcb3e6b0957c8d0cb620e375769915"],["/posts/97f50eea.html","267f02ff5c04d88b3c61addb69444883"],["/posts/97fca8be.html","3def13761f0cf56e49329a2b0ee8dfd8"],["/posts/98662d05.html","c9ac6cbc91252a0ef3c2dbaef85df1eb"],["/posts/9a2f6162.html","1762805bf88d2016de9b2c630b4f4860"],["/posts/9b22a48d.html","56679672f3392a6a1b6aea1652db0a88"],["/posts/9cb455b1.html","8fd2358052c21b71368a6cc7d07ce0fb"],["/posts/9ecdeecc.html","c40adbd74efde3467f8c298dc3f3ccd6"],["/posts/9efd7701.html","c845182a1ad8f5d00a91b22bd32527de"],["/posts/9f61c1a0.html","a8c1a1e70d59bd5f9fe188271b6d4406"],["/posts/a1de710.html","7eb936f6dffe855bb55c7cd9a8c1ff3d"],["/posts/a30eb0cd.html","8cb30de69f5d2326f0e2d96a5156cb26"],["/posts/ada3f440.html","78e8ec29285b04735454cd19689980ae"],["/posts/af1807ef.html","ebea5a8adaf1be89ace2bf2df6dd3c2b"],["/posts/b497b647.html","032c123d73e6f9b10e9c2b32b3a03224"],["/posts/b4d464b0.html","26e990a60c89f0311e4928bf8a5aed5e"],["/posts/b5fb773f.html","3b5318bda53d66bd872d1e7f10387f7d"],["/posts/b8d46b32.html","ef0c9aef75f5ce5d90ed883bafd70d67"],["/posts/c1b2c6c9.html","79a95553e8178b81eb280090ead2a74f"],["/posts/c2111cbf.html","f6530164f2d62bbb7a5ffcc1e2e1551a"],["/posts/c316c2e8.html","2aa47431d5f634777d806555c27faecf"],["/posts/c43e60b5.html","c74929fa355652bfa3d59c85a666d9ff"],["/posts/c497a412.html","867d6677b89596cdd33e8840167945f5"],["/posts/c5de299a.html","da93080a92f95e20e00510839b681401"],["/posts/c70bba9c.html","eec61b6a0442405d1ca3a163f188e4c0"],["/posts/c797535e.html","ac799c40a16c1b2739eb60d4222cd8c6"],["/posts/c7a62c79.html","2f31609d87b68a7201f42123fb096702"],["/posts/cae2c959.html","78ed8109cde2e8b6cfba228b9fb30e72"],["/posts/cbebef2b.html","75d4a13a9d9c97ba5059f095d76985d8"],["/posts/ce25023e.html","8adf079dd37c453bf8151776eda94489"],["/posts/d2fd4837.html","c8e77c45a6233e81e4657d063b3384b1"],["/posts/d3233cbb.html","d1d8625be1a4e72945aacb32e684000e"],["/posts/d3a745a8.html","e818d45b094a1564e26203abb9b10967"],["/posts/d7e940d2.html","b10ee6e2bbb4b8d5834f4e7d9117d627"],["/posts/dc815d5.html","1d57cb34073c8744839e80bea4ab637f"],["/posts/de25b0be.html","0bc6d3908781f94fa25dbb5c0307680a"],["/posts/e2623b4e.html","ea4b83123ac52532abe30e3956bd0862"],["/posts/e3ab6ad8.html","b6e772b8b19f357e93b7771c706ee5bd"],["/posts/e5018da6.html","81ea9bdc88ef16f9089746661593b250"],["/posts/e5963272.html","934a41e607c16d42449e5c21be744c65"],["/posts/e624b065.html","4eaeb80835b22f8fa02298ee3d6487be"],["/posts/e7c703bb.html","446e42803390bd3af7f7a26621325105"],["/posts/e8f14b6c.html","c5d8e8c6c0b5c75dc8faa3e273cc6411"],["/posts/e91abb63.html","e907302ca551e6a924c9fb436b7d9d4f"],["/posts/ea9a8808.html","e2e0465eacb372cc4e9412999d2c7883"],["/posts/eb784749.html","dc2ca8644f9d6a3a6db4e052ef765283"],["/posts/ebaf2232.html","592b51ee3d886a725a3531acb2a2592b"],["/posts/ee1ed673.html","37ef162f8dbbed891476f4c436773e99"],["/posts/f0c3ed61.html","7a565326da79ab95e460c74cb6f2355f"],["/posts/f151ff43.html","85dddd93d2c6539e5016e6472bc63891"],["/posts/f21e7f84.html","08f816bef5536eac1099db11327ac7f0"],["/posts/f230b0fd.html","b3276a79243c885b87fc81247ae14966"],["/posts/f663d5cc.html","5bbd40f8117d4e81c4a732ff4c136db3"],["/posts/f730ad18.html","3728b947770b7f44b819e5e3c99ee91e"],["/posts/fc04d0d4.html","e9cac29271c1a91db9bd100fc51a4e9e"],["/sumire/index.html","6d406a0d60c71a8efbe347fa5742cd94"],["/sw-register.js","97af3040a47d770b0396bd95d2b650aa"],["/tags/APPLE-project/index.html","62898f1a6383c7fd3bd8e34d8a6c4071"],["/tags/BELL-DA/index.html","30b30f5fe9ce060bfc397d77c0282d16"],["/tags/BL-Game/index.html","be85045673d271e6de60e05af536b30d"],["/tags/Blue-Dahlia-Digital-Creators/index.html","81e9fd4ed97fa4b3ab08c1ea3ce4f287"],["/tags/CHUNSOFT/index.html","adcfa0f8cd212c368e27f739e042c517"],["/tags/Check＆Stripe/index.html","32a6f456fa68583748983ebe5b88a7d2"],["/tags/Cherry-Pie/index.html","b33555b81150606b66cc7407706b2b3b"],["/tags/Circle-Mebius/index.html","998060c7ee7393d293a7a02d52e90d4b"],["/tags/CresCENT-BLANK/index.html","f7e343c8ba6d8ea582105d3b61752fa1"],["/tags/Dopamine-Software/index.html","ad7810352b121768e727a2f78161e893"],["/tags/Dos/index.html","12da2a12c1e27456c641b398a4938218"],["/tags/Earth-Well/index.html","a00dbc1cea76fa550db31976ef4043f0"],["/tags/Forest/index.html","26425e463416f8bc6e32be88cf1d5f19"],["/tags/HaccaWorks/index.html","06eecef77acd8854eff9a791f7deef92"],["/tags/Kanon/index.html","ec1471f3a38540cf8caef805510415ed"],["/tags/MANATSU-8/index.html","6ab128fcaa5f06a4d7f0551772eb02aa"],["/tags/MARINE/index.html","e253d49c0d04027fc5de7e35c154516c"],["/tags/MIO/index.html","6fde163448728632249eb613fc59d3d9"],["/tags/Nmyu/index.html","6070da1e416b0a40f9ea895d9257d9d5"],["/tags/O-S-I/index.html","dad239e0a2ab52a44fc1f200ad458eee"],["/tags/Omegaの視界/index.html","3267324d8bd230a47b0d56662d2f6544"],["/tags/PC88/index.html","f342617cb67b597d7124acf252af57d0"],["/tags/PC98/index.html","e8451c41ada030ac7315adcd81c24c3d"],["/tags/Perpetual-Room/index.html","e9eecc6afda62fa104ccb282fa6a0a70"],["/tags/Pleiades-Company/index.html","290c7daaea6e312520a5f88c5b61529e"],["/tags/Project-Twintail/index.html","96e0fae9a4cbb3fdbd260174b800da07"],["/tags/RIFF-RAFF/index.html","c8ca72d6d000105b5912e367249d08c1"],["/tags/Reverv/index.html","0ddae8a4c8a9e7ccf70922ef195c85cf"],["/tags/SENTIVE/index.html","c5695c872f6c6de1c29759248207e1dd"],["/tags/Saihate-SOFT/index.html","6660582b534b5909fafdeffee48e694a"],["/tags/Scrubbing/index.html","c77d8dd730e12907acd31e34f2e15b83"],["/tags/Sky-On-R-imaginAtion/index.html","25f185f85929f6753d9b94d050a5693d"],["/tags/StrayMoon/index.html","0487055206b8b6d5abebaf4e7688e28d"],["/tags/Studio-Bu-Sa/index.html","786318a455b3d1aaaaed7e6eae5f0dd6"],["/tags/TRANSPARENCY/index.html","45299850029cba56b527231e4820f5d6"],["/tags/ToHeart/index.html","54c3ba2c08bdea1ae5e0f60d27ab2e68"],["/tags/Traumend/index.html","d923950cac317d361c0b13d8a2627ee4"],["/tags/Witch/index.html","e46e72359a1a1b3c27c5b2633d007626"],["/tags/adonis-project/index.html","f6315d238660976441b2cc96ee87bdfe"],["/tags/flash/index.html","9cccc33a9db9007a90342208d776c84b"],["/tags/galgame/index.html","e14270aa97796b2adffc4b78ae5ab6f2"],["/tags/galgame/page/2/index.html","58ea2904d59f43d17c276b0fd3db2f26"],["/tags/gal资源/index.html","4ad91d41759643f3a3321625e027c269"],["/tags/gal资源/page/2/index.html","978b1a7e41b8fad5d9da52e07c4d364d"],["/tags/gal资源/page/3/index.html","bdbc4925ee06ac569ac267c7c765f6b9"],["/tags/index.html","5dd44151cbfb14eb04a3cbbcb2e2883c"],["/tags/rkr/index.html","98335666248d38fd984d1584ef92bfab"],["/tags/team-eye-mask/index.html","4b6c6bdf1746286fb5a3a1a26b9f3389"],["/tags/ありすくろいつ/index.html","34d1e563443cd81c35ba3d5c6d2ef13f"],["/tags/いつものところ/index.html","77a2ccefdc3a6a5f53766ceb27088fd7"],["/tags/きつねみみ饅頭/index.html","15935053dd0b6aa6ab63266fc469e686"],["/tags/ねこねこソフト/index.html","c7ca8b1de291720054e1c0d489e8fa47"],["/tags/ねこバナナ/index.html","6da07a6c2b8aa0dcff99119ccd8a2a85"],["/tags/はちみつくまさん/index.html","003ce82cb594257918a9da90e05a9fc8"],["/tags/ろりちせ/index.html","c8683d4671274a903c64ada554a329c2"],["/tags/アイル【チーム・TATU】/index.html","e3b0b6e3b5aa1c539c391ae23b818049"],["/tags/アークシステムワークス/index.html","99373ca4332109b250650f8f90c3095b"],["/tags/ブロッコリー/index.html","0cd6344624cc97f7f797beb7f6c77e56"],["/tags/乙女/index.html","106ce45f9066bf5fe2595bcf5837e3e9"],["/tags/乙游/index.html","f751e325fcbf45c10af6a24012b8f9f7"],["/tags/停产/index.html","cade9e8c75594a52664f9b168e022d96"],["/tags/公告/index.html","87690413db51fac430689fbb41dcd633"],["/tags/同人/index.html","dc71882329557e56e1102dc078a48722"],["/tags/堀井雄二/index.html","41906564f76ebcb0a41c57990e99d977"],["/tags/外海なおき/index.html","26962a3a9730aacad3a9272bb33a031f"],["/tags/女性向/index.html","5fe851ba62a2ec0293ed6c183ed0a63e"],["/tags/桃野衿/index.html","e6cacaa80cb60ac0a9026dada8602cf8"],["/tags/機械式少女/index.html","ffca009f31f7c968a8a7d1edbc803b7a"],["/tags/水仙/index.html","60f8c37d415d5ed8c602236489b6e8fa"],["/tags/汉化/index.html","07d3e8745e859bbc2ab8b2d16eb60f60"],["/tags/片冈智/index.html","c7b65938360685083a795cde06ad3e23"],["/tags/片岡とも/index.html","dd86bb97e7187212d8609bddb43a9548"],["/tags/牙の刻印制作委員会/index.html","59f4da4e183a20be2c83c957cc6fcad2"],["/tags/牛カルビ定食-FLAT/index.html","f2217ffd69ecefdd8821614124b554cd"],["/tags/牧尾屋/index.html","3cf0dfa831cf01471963d46606a3b332"],["/tags/猫猫社/index.html","14a62d18e4451931654c862cced42474"],["/tags/王宮魔法劇団/index.html","340240f7b980d5637583246c2079cf52"],["/tags/画集/index.html","65a49fd4670700c360774a6010eb7ad0"],["/tags/索引/index.html","b930dae314e68739fe3a8e0fff8e2205"],["/tags/缺失/index.html","07952ebe9323d5b8432ccc46b932ae69"],["/tags/自购/index.html","79262496c60eab7f8f42500e044eb767"],["/tags/茶葉☆姫/index.html","e1df179d9812cbd13f32eec92890814f"],["/tags/郷愁花屋/index.html","4cbe3bb63b13afca121db10c77932c03"],["/tags/閂夜明/index.html","0380e244e5381af7e399c052522d14a4"],["/tags/音乐美/index.html","e0c009341cd19860a5f8aeeb84efde88"],["/tags/黒†救/index.html","ebebc9053297f2515d3a51ead6b3e9f0"]];
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
