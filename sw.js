/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","921f7807b965bf209ca105e9dbd6fafc"],["/archives/2024/04/index.html","1137bd565e2b9fc3c606aca92dd69f99"],["/archives/2024/index.html","f48fe927573db382fb75983209e35ce0"],["/archives/2025/02/index.html","a53dec0cf9c17501aca4556f6dfb8fa9"],["/archives/2025/02/page/2/index.html","76d8eddead05383ff2aff3f492b54c84"],["/archives/2025/02/page/3/index.html","ad45b7956e6e88b02c474efabcd68a70"],["/archives/2025/02/page/4/index.html","be408ce9319fef00d29f8682eb130221"],["/archives/2025/02/page/5/index.html","b0629bcb4c38410fcfa83825ec66d9a8"],["/archives/2025/03/index.html","ed8ee383c9d475bc95f21cf997194c3d"],["/archives/2025/03/page/2/index.html","75da4b79fcb1d8117fa6c2fe74075a3c"],["/archives/2025/03/page/3/index.html","65178d9edc9e7fe9a016d2aa9bd7c270"],["/archives/2025/03/page/4/index.html","3e5cae9c4799f036cf2c2b4264213adc"],["/archives/2025/03/page/5/index.html","d9f4f33b2842790a0f47983db0e33b49"],["/archives/2025/03/page/6/index.html","4602f8cdcdc1a8cfd456b917502abe9b"],["/archives/2025/04/index.html","e29939fbc82a2e84b4283e6769af2ae5"],["/archives/2025/04/page/2/index.html","727988818b521bbd8e736c2ac08c1bf2"],["/archives/2025/04/page/3/index.html","5ca5ccfd36818b2497a3a9997c81f65f"],["/archives/2025/index.html","539bca8a1b7be61e0537886908247a0a"],["/archives/2025/page/10/index.html","3933f4d6c6ff0d138753a8c866713934"],["/archives/2025/page/11/index.html","ab2cfb0c44a3b224b6dcdde5d4b8f87d"],["/archives/2025/page/12/index.html","505db74a3502a06acb344510338e12da"],["/archives/2025/page/13/index.html","3d7ebb8da2b54b7c15d56c79724ccc65"],["/archives/2025/page/2/index.html","6758bad47e6bfb26b8ba97c118a3ff9b"],["/archives/2025/page/3/index.html","bd2b2f96bb7211ae8a847e834e2d12d9"],["/archives/2025/page/4/index.html","e8916a7d91512b40c48fab3603ccac75"],["/archives/2025/page/5/index.html","e185eeef384a683c768db517034a5f4e"],["/archives/2025/page/6/index.html","7c90ddfd651ea7fdf0dcdef4f0eb8b18"],["/archives/2025/page/7/index.html","082671a2a7b30b7f7338036278097215"],["/archives/2025/page/8/index.html","64f4966ffa8fbc93754fca484971bdec"],["/archives/2025/page/9/index.html","b8d1a12b081482091158dbf38c27288a"],["/archives/2026/02/index.html","da8acbde1f9befcd1c3dfd40122f2676"],["/archives/2026/index.html","133183d723e61645d5ec102d80e8fd81"],["/archives/2825/04/index.html","250a7ead9948b0cb5142d14f0e52fd7e"],["/archives/2825/index.html","0b8e50f54afc85e89f5cf5e7b06b185a"],["/archives/2925/01/index.html","7a465f40c2378fddfe28c0596719a481"],["/archives/2925/index.html","8822f820b5bb2bb72cce12ad1057d14e"],["/archives/index.html","b566b60a32b0887152510c383ae0c655"],["/archives/page/10/index.html","c3b4b50ac122016383d28f045d0b8391"],["/archives/page/11/index.html","2ee8e8a3efe86670dfde96f5cc430d9a"],["/archives/page/12/index.html","1275d3649399ee8b30bc98e61983374f"],["/archives/page/13/index.html","bc52e846c6c449064d25e010134ee839"],["/archives/page/14/index.html","eac9d7fe0a1aa600226700f34564e6c0"],["/archives/page/2/index.html","74e92a7ac0bab89f2cf1f86326ca3e30"],["/archives/page/3/index.html","364c7e9cb89f3b6418db70fa1a3cc5ea"],["/archives/page/4/index.html","b28eb64196bc71d0e43d0c05fb057f32"],["/archives/page/5/index.html","7beb1a29422a70831ad3d2386e121a30"],["/archives/page/6/index.html","1e8f5e0d3ec41aaae723bbccfdadd1d4"],["/archives/page/7/index.html","507ffc59650b30cf784dff9b3b78a078"],["/archives/page/8/index.html","1ffe784f8df735c463aef9037b6d81ad"],["/archives/page/9/index.html","cd9a4b012e20ecba3180b12018471bee"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","13ec3015e647f69ff6542051845caa9d"],["/categories/galgame/page/2/index.html","8d26c982c0870a17ea123a584f158b2f"],["/categories/公告/index.html","dacfe219e474b149101c7935365abdb6"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","06134e668309430876200a964ad2fa76"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","eeec718af69025ec924489f5717b5307"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","348becbf880720ab0bee6d9a52a70d46"],["/page/10/index.html","56ebce0b59d9da0c6d6d69e42719be74"],["/page/11/index.html","0240142ed8b9bfce9518c1877dd5eb51"],["/page/12/index.html","a55efbafc411e4876d59e50f340d7ed2"],["/page/13/index.html","9f62307b185b94ead3e0970bff8d1e1c"],["/page/14/index.html","a1eac2c991dc43a4289dd4c0ba81fc12"],["/page/2/index.html","bd1aff24a9f88fd68841c4e63fc49a20"],["/page/3/index.html","90b8f1608e6bb9c70bb3aaa72dc81fd7"],["/page/4/index.html","53cb321ad7de29415ff5f2eba0d4b773"],["/page/5/index.html","7b3e817a7617753a024adb77d5266956"],["/page/6/index.html","b5fa9b1b333cd67aa48aa08cb290690c"],["/page/7/index.html","5326675558f977fe7ffecc3bfb2ae7d3"],["/page/8/index.html","2b43f4340cc799d903691e52d3ca74e1"],["/page/9/index.html","4d6a451996f08824b1311fd0942f23ac"],["/posts/10c9dd98.html","3c7331ea8e8d32c11de0bb85a96bc15b"],["/posts/1295b569.html","7493cdd43250dd0fdcf0ce41d85edf46"],["/posts/1370342.html","4628b137a04d2964b2787ccd5e64c3d0"],["/posts/15ef14c2.html","1b377107fe87f4875a62734fea8623e0"],["/posts/15f3959d.html","9052a9e05d210192003099445735b2cb"],["/posts/18ab785d.html","861e1bd735a024390178204bde375f2a"],["/posts/1d59b71f.html","5ec0deb28f8472bdfc21b9bcbd81e414"],["/posts/20b3f3a4.html","9cf85ff836cffa0c19b21629f80d9bc4"],["/posts/245f1c7d.html","2c5285729f750b965044073201881a35"],["/posts/252658f.html","d7e9ae1d0b425aa24d17a79fe70fa66c"],["/posts/28397adc.html","0adb5da6e522c1feb5c44b258dcd78a3"],["/posts/2ad07f54.html","93db10e30871268bffe0e99db2246aa3"],["/posts/2b38bce0.html","cab3339e5d3402d74a30078ac35bf31f"],["/posts/2c0a6836.html","2b37af3793217c0072a02a67168e08c1"],["/posts/2ce39bcc.html","3eab77809050062d164fe4911cbb2b24"],["/posts/2cf620f0.html","9674cfdb8d4029f414627c65f6b62d9b"],["/posts/2e30fd6d.html","97b860c3bc2edef0d329b6952f02d5d2"],["/posts/30a413ad.html","28957d6f262fb688287ff0a0a6d9ddae"],["/posts/34292736.html","0cce1914d5b1f44e526b630bedc53c3c"],["/posts/3468cbe.html","5828260c796a5766417f0beb711f3811"],["/posts/39176dc0.html","8106eda15d099f82d6ef7f69b05136bf"],["/posts/3e118dbf.html","c779de55ac979c01c34c2541c67ccb47"],["/posts/3f7d823a.html","8b41df131fb58d705ebac60c1375cf9e"],["/posts/3f978819.html","22c662aaa881107c74b22ecfafdcdb59"],["/posts/41dac80e.html","1d5259f6c53a0802d25b289d5eef5f8b"],["/posts/43945723.html","2881071cccf7ff03cedbccf531ed1bb2"],["/posts/44124a6b.html","e82bdc6924085ecccc8903f5ce2d3858"],["/posts/47abb61d.html","767729794f58331f2cba09c5d8a163cb"],["/posts/4996478a.html","30a8e572d32156956683eee839ddba88"],["/posts/4b689be3.html","a84d78a7308a539d382da49607a15540"],["/posts/4cf8423f.html","ad1b5c58937482963707d17badac62c4"],["/posts/4dcf85c.html","276089a1f647f8191a6a35f9f5802e30"],["/posts/500cd322.html","dd514e332e5f96e3b33a16f724b1776b"],["/posts/51c9b1ff.html","4e76985a50298e2763d368656786e81b"],["/posts/52b5b3c6.html","0c69ef041f38aae9712b3d202d7bce15"],["/posts/54f496ad.html","a38245e16648f0d9c321b952ec542089"],["/posts/558e1f30.html","e986e5d6c2ebe984a372d45e4da93b97"],["/posts/5d8bea92.html","7c28a8492a4387e58cdadf1ec059d584"],["/posts/5f6e0c59.html","4f60de2105babf9ece807d31c2e5592d"],["/posts/61a63a84.html","02b31b80365766f22097f592ce2f1d98"],["/posts/625ab7bf.html","7041d4f73d514d601e9cab7369de5677"],["/posts/6336a2f9.html","91e1691e5231686898e9f26ba685e53e"],["/posts/6432d61a.html","938fbd51c3cbb385081ebf00d7794369"],["/posts/6515f032.html","adfdc8e513628ed7c49a7ab9bf81dad2"],["/posts/6720ccdd.html","df432172238f56606185f7e5c301d748"],["/posts/6a4b5ac8.html","a67a189b8a07cc1280ca776df1cd25f3"],["/posts/6aa4177c.html","4bda8ce8e1ce0b10c28216b0787a1b33"],["/posts/6b15f81f.html","bea55b423195bea26ef59999989a84d5"],["/posts/71131d34.html","b5c23ce38f99219cfb05db8795c9a0ae"],["/posts/742fd48d.html","05829c1776bc352665f882ed6293a43f"],["/posts/78a8a8d3.html","dd1ed95da8a1695fe84773a76b188b76"],["/posts/7a5ef3d0.html","d29a3913e2b27c47f91d9a07e5529372"],["/posts/7b41e1ac.html","df7ba9831f7839735fe7282effb219c1"],["/posts/7b51011d.html","08ca5ef9326d592d9785c6172fcb824c"],["/posts/7e3aa3e2.html","ee89aafeb06af2ad6516b96adea60383"],["/posts/80fe2691.html","c4c122112958f9ba390bf6e8939c98f8"],["/posts/81ac52e9.html","76c3d0efa5621ab1ac290dab03cdaa54"],["/posts/82332d11.html","e9dab7aa781b8cbdc983d775b3232dd9"],["/posts/8486f6f9.html","17110c9246fb2aa8b9d431ac0d6b3cb5"],["/posts/849b40f8.html","6385683d6f0b5b4f9cfb0ca6e422c81e"],["/posts/85c51d68.html","0cc79d983e427bbac90f522d18ef98f6"],["/posts/86a6c500.html","ca52b348359dd4c7f2e5842abc7f5bd5"],["/posts/886f8d3.html","ebb166946613649a87cf44fa0fb971b5"],["/posts/8a7cba10.html","89193fb2cb402d2d2e8bcbfb31ec6d3a"],["/posts/8ac11b41.html","2883b2da77bac044bdde47da98c995b8"],["/posts/8dd520d9.html","ae667d9b4d60bdaeaa04806f5ee9b7a8"],["/posts/8f555654.html","99e51249437d4efabb58e02169ce0d83"],["/posts/92a980c2.html","7a3832c6c697ccbca893f2c1dccc7314"],["/posts/92ce16.html","860ed05d1f96d15adf8d23562d889f81"],["/posts/93e9943b.html","f2c4085f4e412cfdb54ee6a17565c296"],["/posts/94d3c794.html","0cd1d5436ca10d4960aa9531855e2cf6"],["/posts/96b281f2.html","66b1d8d58d93aa0a23c60215bcbb1578"],["/posts/97f50eea.html","5d522f8a8de958c211827a7ce69fceee"],["/posts/97fca8be.html","a05fd5d3ec5fb3ca3d3dce0ad625bb60"],["/posts/98662d05.html","3a777d786a6dcb7189c034d3633d1559"],["/posts/9a2f6162.html","b6c424a7ab90afff4697d87478079567"],["/posts/9b22a48d.html","2f967ca95c6aaa6719f027c87ca485d2"],["/posts/9cb455b1.html","c683413c8bb03bd510332853a1362e15"],["/posts/9ecdeecc.html","20ed3afab56719f850b9d15cb8f448f0"],["/posts/9efd7701.html","f53ebc031b99c3cf1d7b2159a5f9e781"],["/posts/9f61c1a0.html","8f78a69f47130fbd447af2315fa55719"],["/posts/a1de710.html","b41bed0895f1abbd2ee6e6b6243dad96"],["/posts/a30eb0cd.html","d6bc0954fafecaae52a2b6441835ed3f"],["/posts/a7634b5d.html","61220dca12a8deb6465f32a671280913"],["/posts/a8c593b5.html","3a8759e1679120b48b1fe73256ed8bed"],["/posts/ad0c1efa.html","1d29e1342312a4f7119faf99981be6af"],["/posts/ada3f440.html","3e9a90ec202b70d3f21fa4abe1ebacc6"],["/posts/af1807ef.html","6f2c16507444d8ca53eb9cd729ab632e"],["/posts/b397bf03.html","ab84b1f58103bacb47bb78a38cdceb0e"],["/posts/b497b647.html","f2038afe0c53c7fa412c795cfac08d7a"],["/posts/b4d464b0.html","778a856d0a27cacd42593f84f6409daf"],["/posts/b5fb773f.html","dc65ffe7c683b5e237ec16b02a0a9f65"],["/posts/b8d46b32.html","1f43e74c99b077c2d0caba00d11f996c"],["/posts/c1b2c6c9.html","d53e3a5ae58d4da77d9a8f24d4d3e38a"],["/posts/c2111cbf.html","d75341cc54ecf09008ad454f9966e966"],["/posts/c316c2e8.html","e524051e423308a9f29ab3febc2bc7ba"],["/posts/c43e60b5.html","973ae6d34fcc3144abac58a808581c3d"],["/posts/c497a412.html","66d5a23063ffbeadc77bd4e3bc560dca"],["/posts/c5395ba3.html","2f38c85cadb635d04683c99074459702"],["/posts/c5de299a.html","dcfa3129cef25b6d79eb8ce0fe287b1d"],["/posts/c70bba9c.html","3a0aa90e32c36d91b301e5f092f2424a"],["/posts/c797535e.html","100eb374fdc2b50f47ed78916b3cfb09"],["/posts/c7a62c79.html","b0e2d28f58acfb9c3def0b750c62c36e"],["/posts/cae2c959.html","6e6f8cdb565f3ab10eafe968d2cd52dd"],["/posts/cbebef2b.html","2a0d007ae014476c45071afee3459a7c"],["/posts/cc4c0017.html","065e34a7cf722697e6b6b3748e910fdc"],["/posts/ce25023e.html","add58b7f4553536036e807b90aa6f3a9"],["/posts/d2fd4837.html","0fb26c34e89bbfd94bee19bc1d4b113b"],["/posts/d3233cbb.html","ca704cb660e3a291b5542ea65dee7edb"],["/posts/d3a745a8.html","91af1c8015fa700e5bb89642659fd316"],["/posts/d7e940d2.html","44b51b1e7ad1ccb5706f4c479e715417"],["/posts/dc815d5.html","cca63f0cec384efd4321345d34b8c88a"],["/posts/de25b0be.html","591541fd0d8e11f8024662d7a7361e92"],["/posts/e2623b4e.html","f8da346e948c25926e657b2114a61fb2"],["/posts/e3ab6ad8.html","c648d2ac4a0615de04f9e7ca7bb2f0ff"],["/posts/e5018da6.html","1ebfb4d71bb9c3d1c2f807372f7d656e"],["/posts/e5963272.html","1830237d597af731712499624362ecd9"],["/posts/e5ef4c3c.html","097200288878534de23456a548978007"],["/posts/e624b065.html","727e9abfbf64a539d528bafe4c7105fc"],["/posts/e7c703bb.html","9c79f16e469a93877c48ccdf92e6ce7b"],["/posts/e8f14b6c.html","c55812d46f867a878a07a715c901db32"],["/posts/e91abb63.html","d1307624b5aaa33b52d6af4eb942b49f"],["/posts/ea9a8808.html","718d8566ac4ab3cf70a2e8adb2a62dfa"],["/posts/eb784749.html","9062d214cfe9b8053bcda939ec59cc48"],["/posts/ebaf2232.html","a7b636fda2781523a77d7699213df2ab"],["/posts/ed75f185.html","38181fafefb7facae786dffe8b07f360"],["/posts/ee1ed673.html","359d748f26471cd44c2f292e46eaae1c"],["/posts/f0c3ed61.html","2e9c2725795ae9de1f96749597b74e2a"],["/posts/f151ff43.html","52b3102a8cf30eb37e9480136e7405ea"],["/posts/f21e7f84.html","81eda2aa87bf1efcba44279e95e93220"],["/posts/f230b0fd.html","44c09b2359f9c84cde635f9694e36029"],["/posts/f663d5cc.html","259b9494befd2964bc1a49291cbef58a"],["/posts/f730ad18.html","a94b4c62871ef9eadd11ba91e879770c"],["/posts/fc04d0d4.html","34aaa0a892407a97c8151387ca34ad36"],["/sumire/index.html","808724644da389c21d9d49777434d9c1"],["/sw-register.js","e393a7e2a644df20402dd674f30e2c4c"],["/tags/APPLE-project/index.html","00e0d8ee74fb5ec78dabc730a6ae81af"],["/tags/Ankrache/index.html","aaf2532e83a073647abc4a007453e37c"],["/tags/BELL-DA/index.html","ef6980bf6977b57069607aa3b4395606"],["/tags/BL-Game/index.html","ba809481f3fe3fbd43dafd2689260917"],["/tags/Blue-Dahlia-Digital-Creators/index.html","62f5eb2398bbaef5bf2fec3ad9136793"],["/tags/Blue-Line-Games/index.html","02067dce1dcec7e1a1103212b35b4a82"],["/tags/CHUNSOFT/index.html","97eef7a65209f858c9a02e15a44ed80f"],["/tags/Check＆Stripe/index.html","39fe70704b339dabc646486b6f8c01e6"],["/tags/Cherry-Pie/index.html","693040da62fb0c9d3c7744a101c709d4"],["/tags/Circle-Mebius/index.html","a5f783643c3127898bae650582c518d9"],["/tags/CresCENT-BLANK/index.html","aad53ad3d0bf45285be4e954777492ee"],["/tags/Dopamine-Software/index.html","ed50e7d849b77638f31bf5f4561eb201"],["/tags/Dos/index.html","e7258993614d66711f12dc34ee7d438f"],["/tags/Earth-Well/index.html","163975327b46ac6d937f632a2a1b1d61"],["/tags/Forest/index.html","834d6dac057ccbde2e9b761ca0cbbed2"],["/tags/HaccaWorks/index.html","07f08a28708efdae31e2cecad3934147"],["/tags/Kanon/index.html","4523914c76e06d6902377b95664cfcb5"],["/tags/MANATSU-8/index.html","52d2ae0a12c228fe59ba48c9631ba93e"],["/tags/MARINE/index.html","e8c1cb5a7fddfa91e35be7dfc29fb570"],["/tags/MIO/index.html","3bc20dd4c517a367c692faaca7d7c3c8"],["/tags/NAOX/index.html","d5b5f595892af461c9663663645a4c2c"],["/tags/Nmyu/index.html","ea20b514cc5a5dcdcc05a77949e1cf89"],["/tags/O-S-I/index.html","f167aa0a1fef5ad944def1855cdafec4"],["/tags/Omegaの視界/index.html","391fb8efd5600183ea91c40c195dd0d4"],["/tags/PC88/index.html","32e3895c90822619f4a4def436ffb7e3"],["/tags/PC98/index.html","8967ae0e0faa6f1bd3592f48c29ef8f9"],["/tags/Perpetual-Room/index.html","0151269dcea479a593ab6c43fcc76878"],["/tags/Pleiades-Company/index.html","7edd921399d81168ced91596a384780b"],["/tags/Project-Twintail/index.html","6f92aba7e506c033ec0f5b3e43380717"],["/tags/RIFF-RAFF/index.html","667d15c346d0070863616e3fb748074a"],["/tags/RPG2000/index.html","59fa73d1c0a259a398ca63053404d410"],["/tags/Reverv/index.html","aa038550635cc89f7e4d4815ff9c1275"],["/tags/SENTIVE/index.html","3075796eb5eec41ea63b7c13cb893fde"],["/tags/Saihate-SOFT/index.html","934440ddde2f4882e0bd676585b82adc"],["/tags/Scrubbing/index.html","67e94631fabff5c6c7a4fd5efe150ba5"],["/tags/Sky-On-R-imaginAtion/index.html","da27d7f82f163083f92eb4b6391419a8"],["/tags/StrayMoon/index.html","c836863321bbe331c0836226a8e049bc"],["/tags/Studio-Bu-Sa/index.html","3d0ae99cd604f31fa5fc2cce297b8bdf"],["/tags/TRANSPARENCY/index.html","18957dd6e8a80bb60e64c4d711784cb0"],["/tags/ToHeart/index.html","a31fe6ba4d1bd71f5ed7d4f44b7023bc"],["/tags/Traumend/index.html","dde6ee1cdca7998bc4b45dde7992c145"],["/tags/Witch/index.html","55453ea2a5ecefd87f7c76fbd5eef620"],["/tags/adonis-project/index.html","4f2ca4d1c4cb312a4f1b45c6d0e3519b"],["/tags/capriccio-suite/index.html","ab0ae60488d47b637d45e55a02c9525e"],["/tags/flash/index.html","7c5b13ad52fb588ec17dd83aa9813f47"],["/tags/galgame/index.html","406c41201e16c36f1ebf81367d92657c"],["/tags/galgame/page/2/index.html","bfddca969cdcbec6424bd0dcfe27b599"],["/tags/gal资源/index.html","e13ab256a1d82d6331b3f1765c5e6682"],["/tags/gal资源/page/2/index.html","4a00743e7ecaab255ce9b126a335ec35"],["/tags/gal资源/page/3/index.html","dca11b89de02331298bda79479b35915"],["/tags/index.html","926893a67b1b6e7f0725ecec72691310"],["/tags/rkr/index.html","d16c4b567e1b015e528ba3b55c382511"],["/tags/team-eye-mask/index.html","7d3a29f00d50c9d3364b671b29b4598e"],["/tags/ありすくろいつ/index.html","401216768244751e1e4ac4f3f831ebe4"],["/tags/いつものところ/index.html","ce2f951f235bd4b100ae6ef661174d43"],["/tags/きつねみみ饅頭/index.html","0daeb83aa9b39a470bceff51a1f81157"],["/tags/ねこねこソフト/index.html","51f1b4d44698d53e5da160f8669fd08e"],["/tags/ねこバナナ/index.html","1d30b3bde6d3b1d31fd5dbda1c4beba0"],["/tags/はちみつくまさん/index.html","408a50938c98d5a7fcba9fb63054ecc0"],["/tags/ろりちせ/index.html","00e2fc22aa81f8cd1bb61798bca00226"],["/tags/アイル【チーム・TATU】/index.html","73d5201e12aa22262cc0d8db6a15c1aa"],["/tags/アークシステムワークス/index.html","19663f6b35d2fbe8057de03544bda234"],["/tags/ブロッコリー/index.html","371d7615ea71a4fc3ef4a671bbd2e715"],["/tags/乙女/index.html","9c97d6aa8455e706ffd4fd558b473465"],["/tags/乙游/index.html","91e49c573894990f2575b8d74506d463"],["/tags/停产/index.html","f1c4b3da80896a79a707c3697c43901e"],["/tags/公告/index.html","e816dcdf130bb9b974c3325a2cd88e1d"],["/tags/同人/index.html","0413b4eff96d263074d62bb6f9e90e16"],["/tags/堀井雄二/index.html","235d48d3580823dc4d4ca5979dbdd32d"],["/tags/外海なおき/index.html","e20c3d3d1af2c132416d28e0a257aa09"],["/tags/女性向/index.html","48da9467f392b4b262b1f6f5b9e8910a"],["/tags/御茶ノ水電子製作所/index.html","1b3abd47a082926f5ffb9a4ac4f05c80"],["/tags/月の水/index.html","8d1c1bd0e7045d0e6b407fb6a4c353e1"],["/tags/桃野衿/index.html","473d6a9d5f0c009e4b0ab65027379d80"],["/tags/機械式少女/index.html","90ffcf9b28660eda2a2ae571f131bc18"],["/tags/水仙/index.html","47de67be12661483ca52a03704a205f6"],["/tags/汉化/index.html","d6407b4eb9e0fdbdfa5364434c1be2b3"],["/tags/熊月温泉/index.html","0b07fdded25e0b02f83cf829550615f7"],["/tags/片冈智/index.html","a9e4a3260296672bd7a1db076200cdc8"],["/tags/片岡とも/index.html","eea88fe72d249f524b24c5141e2aebfe"],["/tags/牙の刻印制作委員会/index.html","84faa051159433f9cd64ffe3f9e7c42a"],["/tags/牛カルビ定食-FLAT/index.html","f9ad383ff7b1d023bf943892d14ae9b2"],["/tags/牧尾屋/index.html","14904e7891c093c026bff7ce4fd475fd"],["/tags/犬茶屋/index.html","bc45193fd255ffa673a837b55ade0ab2"],["/tags/猫猫社/index.html","b5a2ad6f3e9c14941bdb140c6e18c00b"],["/tags/王宮魔法劇団/index.html","6c57903f1461d4a7be4bfa84be3322bf"],["/tags/画集/index.html","09e7027b21f201239dc5938ca228e0c5"],["/tags/索引/index.html","cb5e77ce8c04a0db9dde1c404f6de65a"],["/tags/缺失/index.html","1d48fee5f9d42c5da75c21fe272846a7"],["/tags/自购/index.html","5ba186d3a017b57efce831c72f1bc6a7"],["/tags/茶葉☆姫/index.html","1120e0eed32f7fc14f3a799b6f3553c0"],["/tags/郷愁花屋/index.html","d473410e58b2e5b310b9cab8c9c1d205"],["/tags/閂夜明/index.html","484a91c38d5ec48d294fc1a474254c20"],["/tags/音乐美/index.html","e617b73f758ea1efce8857083e28ff88"],["/tags/黒†救/index.html","58661f826f10885b7f66e58a29b01b98"]];
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
