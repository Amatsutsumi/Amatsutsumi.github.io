/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","51aabef51435bad021dfde35a5b07f62"],["/archives/2024/04/index.html","da4f9a091944434750902a0729b60b90"],["/archives/2024/index.html","9b3c9ae6bd57131a6e3679136a6cf252"],["/archives/2025/02/index.html","aea32e62c9d76d95efeebfba0935b721"],["/archives/2025/02/page/2/index.html","cb0ed74c134e7186e79acf71f2dcb881"],["/archives/2025/02/page/3/index.html","7948ef88a7e11bbcdbbe8155a8f9ed01"],["/archives/2025/02/page/4/index.html","c3fc5a980a40ca0da28570f52c82a256"],["/archives/2025/02/page/5/index.html","e85c48e94c90370facbb3528e697af1d"],["/archives/2025/03/index.html","380bcdcf03e14c13027eb4de8007a7cd"],["/archives/2025/03/page/2/index.html","d1f85b866fcaba6bba27aac4a81f5c5d"],["/archives/2025/03/page/3/index.html","2e7668fa062559f262f807c42ef6cb3b"],["/archives/2025/03/page/4/index.html","a0e21d3fb09cde36680b23e25fb2e0f8"],["/archives/2025/03/page/5/index.html","c1c30cf19a9f2bd5db52396d2332f5bb"],["/archives/2025/03/page/6/index.html","3f5ac4125129234087c3faaf1bb9c98d"],["/archives/2025/04/index.html","e3667a26e9955a393bf93ea1ea31d5b5"],["/archives/2025/04/page/2/index.html","fe17c45ccf01034e4fd717a17f285fe1"],["/archives/2025/index.html","ee16ee3254e4b331fc0242a536f641a6"],["/archives/2025/page/10/index.html","caead2194dec73498d3b19cc44b7d81e"],["/archives/2025/page/11/index.html","d31cb66186be48aaee07fd60b4d4f7cb"],["/archives/2025/page/12/index.html","d92d27ea8c7f9c6d4d97987e54c1502f"],["/archives/2025/page/13/index.html","ce357e8f4cfe37c21857b30b669de348"],["/archives/2025/page/2/index.html","b1be599cc21bab5efc7430f0d1bab8cf"],["/archives/2025/page/3/index.html","66173b617b98783a6787659c51abe711"],["/archives/2025/page/4/index.html","d772e792bf862aed52fb5e5645f72d7b"],["/archives/2025/page/5/index.html","d5bef9ddc21ea1d96042ba1dd5e76ebd"],["/archives/2025/page/6/index.html","e7f87b199c0bdae143445285b92d013f"],["/archives/2025/page/7/index.html","d7c5294b80b91d0430c6e06ba8158a85"],["/archives/2025/page/8/index.html","6ca0b2a880c177229d8d49d5af81739c"],["/archives/2025/page/9/index.html","ec8872b2f686774cb24b9ced1ef391c8"],["/archives/2026/02/index.html","176c306264369b0370cf6e6d636412eb"],["/archives/2026/index.html","7caa5f8e587e3b750ad8933c5d98e07d"],["/archives/2825/04/index.html","62b623eada7412ad6820800dd6099aad"],["/archives/2825/index.html","a3134878c8d15a59345ed3d27beab1eb"],["/archives/2925/01/index.html","cfe6a06da244450f255e54e1e2ae07ff"],["/archives/2925/index.html","85695444d10fe4212b0b06fb078aa3de"],["/archives/index.html","e4ce1a9bcab2aa8c1f625772f6f11fdc"],["/archives/page/10/index.html","0daaf762f23f15c62a104ef7b44567b7"],["/archives/page/11/index.html","3e277fafd08d8f596ab503d388766401"],["/archives/page/12/index.html","7a864632ff80fa0b78b4e371680cc58c"],["/archives/page/13/index.html","e74bbb5c4c9a0311e54b403c7e235656"],["/archives/page/2/index.html","a7e4da0199689d2eac25760aef3d5453"],["/archives/page/3/index.html","553543a97c5d58bb04d19db2d79dfe06"],["/archives/page/4/index.html","b8448ab77040227030138368cd10004e"],["/archives/page/5/index.html","956c7523153833ef45882beb91fde5cb"],["/archives/page/6/index.html","c1ee1adb9e2efa97fa47b287f83c2fd1"],["/archives/page/7/index.html","c5cd96271755f441dd886f0049773149"],["/archives/page/8/index.html","1762c99c345573c5c0a89ab52f503029"],["/archives/page/9/index.html","8d428798ac3d0169e5f8fdb06b597145"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","0fdc67cc088c55ddc27604104786d081"],["/categories/galgame/page/2/index.html","a88a0092cb39c64d07390eaee36d23d8"],["/categories/公告/index.html","b6e3910d7d2d480bdc5938b8d4454104"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","83edf56d76a12a9bc7eb7c8b30168360"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","d95e74d346a905c8d1646e95a4fe462b"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","8ee730970190e457075c109b80f7209c"],["/page/10/index.html","dc258f2e0a64d0ef9d55d640a1812ac3"],["/page/11/index.html","f8c938b54384bcda1aad5592e6f74e3f"],["/page/12/index.html","f605cc33d459f5ea3d187a0c69adc0fb"],["/page/13/index.html","4094616d7ee43529910f7689cb7b05db"],["/page/2/index.html","7076aa3db093b3ef7b3e93992df8f768"],["/page/3/index.html","dbe7ae5fc5b47251ddb70051933e9b43"],["/page/4/index.html","fc88883c3cc1d3187fa214d9993feaea"],["/page/5/index.html","c61049159185d6d3d393fdc989aa5a99"],["/page/6/index.html","699ee78d4cb99c7fbc1a410eb7768dfd"],["/page/7/index.html","04439f4c9e5e12b2eef39e26a842a75b"],["/page/8/index.html","17c9e935facbf99bb2ee472de7f0885d"],["/page/9/index.html","c894e2ebdfba134808de489509523b33"],["/posts/10c9dd98.html","4f2c0ac93e86d763398818e7a279dcda"],["/posts/1295b569.html","91c7149a2ec8de03144e3901ed50e708"],["/posts/1370342.html","8543a99371545f42109317871976fc48"],["/posts/15ef14c2.html","2d02732ebb5e8a202b6ce6c5486e9624"],["/posts/15f3959d.html","0d6b3577a99a19763920fdc595deb46d"],["/posts/18ab785d.html","ce260b2381dab1cb861afb97f6fbb9b6"],["/posts/1d59b71f.html","7e4a974df3812d55853adf660e172321"],["/posts/20b3f3a4.html","b3399baef581afad2b24927332ca2ab3"],["/posts/245f1c7d.html","3f0fe77a1ab45b8951c7a12b6641f453"],["/posts/252658f.html","d52ad8caf853e8a4fc234291d2e598f6"],["/posts/28397adc.html","e7fefded231b8abfb83a1f9ae46dcb06"],["/posts/2ad07f54.html","bb5dd747b4d2defcc52c1aa355a0a939"],["/posts/2b38bce0.html","dea6561e0a2d9ecb570f392bff387046"],["/posts/2c0a6836.html","99ec9c01f211cf6bc071a58e71cce0d1"],["/posts/2ce39bcc.html","026c80cb131fe6d91948767e1639f7da"],["/posts/2cf620f0.html","4a3caa75ba4d5babbd9783947156268a"],["/posts/2e30fd6d.html","fcca4f7ccf811f36bc810432e3051d95"],["/posts/30a413ad.html","47aa3dae53c6798065fc6c078b35be7a"],["/posts/34292736.html","1a4f56f1548125d9d44adf85e974a55b"],["/posts/3468cbe.html","925af8c0ed680536ba273b4e0cbb4a54"],["/posts/39176dc0.html","7841bd43bffd374c79d471e18d036934"],["/posts/3e118dbf.html","009ae8d64971a7c6f0393e4564265b38"],["/posts/3f7d823a.html","75908fbd4394e2c5e5159f3b1b06f5be"],["/posts/3f978819.html","41eff02d55e189a5d5d0a7902966bc35"],["/posts/43945723.html","2d0b542500bcc258dbe50517302f88b6"],["/posts/44124a6b.html","fc69241fde4f6f5297257bcbacda3353"],["/posts/47abb61d.html","d6c7b1e635330b5ed75df85fec3357f3"],["/posts/4996478a.html","4fe04f15c64d07ddc4cfb3c1dde06497"],["/posts/4b689be3.html","313b7a62943fcf391ef04122c7b195d0"],["/posts/4cf8423f.html","ddb48c8e7078ddb20a582a12bcd8df0f"],["/posts/4dcf85c.html","1323da0d9bd14dc24cc8b1d9cf75fd89"],["/posts/500cd322.html","1ef83323572f3e481a733f6db9d4c826"],["/posts/51c9b1ff.html","7e0cb0dd079816ecfdbb4f3bf63cc24d"],["/posts/52b5b3c6.html","49464ee6169d632ac70f32c8c623848c"],["/posts/54f496ad.html","929e699d9a79621421441e003d3a4f84"],["/posts/558e1f30.html","45cff16525705faea52dd3f706fc1627"],["/posts/5d8bea92.html","493db56ff0d9ddaccbb924fbd6a7bd6b"],["/posts/5f6e0c59.html","d5b4a4a88c10c47bb06fcb90c06c0dfe"],["/posts/61a63a84.html","5fa1cbf161d92a137fefe7f462ca4a17"],["/posts/625ab7bf.html","e61861afb53bff8573f98230b0f95c94"],["/posts/6336a2f9.html","e14c5ce77a5537c3fecca8bba1210717"],["/posts/6432d61a.html","4282c32e06e8dab154f736a4692f0aaf"],["/posts/6515f032.html","c0332ff5a61942ac45fe56dcaf2c10e0"],["/posts/6720ccdd.html","ce6da019dc5b412305a6f255ba2c36b4"],["/posts/6a4b5ac8.html","718e34ab466d6be4eff5821509b0c03b"],["/posts/6aa4177c.html","ec4f135bf558cb3a84b05853a64fe5a8"],["/posts/6b15f81f.html","a379385b3f3c47fbb6814ffa41fe1f63"],["/posts/71131d34.html","16b062113ff188fb3e901d2da95c35bb"],["/posts/742fd48d.html","0ea6ae1e20131aa89dc7596b2fc5863a"],["/posts/78a8a8d3.html","d314e5790fd319ed57ab0b9709f252af"],["/posts/7a5ef3d0.html","49343220b3f21d343945d2f2c6769749"],["/posts/7b41e1ac.html","f73d6ddd64e05b6aa33e9b4efbe517fb"],["/posts/7b51011d.html","a3059da67673028ab91a2f18467ef4a4"],["/posts/7e3aa3e2.html","57e589c3f3fe8ecd99988ae050b6d564"],["/posts/80fe2691.html","8690d527927ae575c754acd6156a219a"],["/posts/81ac52e9.html","c1a3c03bf0c2b87a3f2ab935c881e59c"],["/posts/82332d11.html","bb84ddbb5023fbf02ee3d195d846f858"],["/posts/8486f6f9.html","f2db272ede72a591b37e6523f3e26d08"],["/posts/849b40f8.html","f74761460ef3e1124766c67298b21ab6"],["/posts/85c51d68.html","2d21653f92b201b768d1d39018696a80"],["/posts/86a6c500.html","f1e94a55880dd3342f89ed80d80db527"],["/posts/886f8d3.html","113080a7e29a31a884325d553f6442ee"],["/posts/8a7cba10.html","2b0e8076fba7df46b90313f9f8564748"],["/posts/8ac11b41.html","6a259a4dafa808e8a1a8c81be16e60f7"],["/posts/8dd520d9.html","92b8257e795c22f60fb3d807f6a8eaf2"],["/posts/8f555654.html","1e27aff1875e5542a5d2c59389a02b9f"],["/posts/92a980c2.html","b9fb665f253f592598d683ac8a27d36e"],["/posts/92ce16.html","08cc937d8bd0461b84dbe39e34ceb441"],["/posts/93e9943b.html","699eeb988696d77a244e0b27f629a44c"],["/posts/94d3c794.html","e4f1b2932c1e07c58df9ac1d1e51de8f"],["/posts/97f50eea.html","25dae234551d8bdf9e5ead0296e428df"],["/posts/97fca8be.html","3471c7ac03403e063f51575f5a1a1be8"],["/posts/98662d05.html","b3ef694a3c4a28f90485cce42bdc1b2c"],["/posts/9a2f6162.html","521db25b7584e795920026e96263fb3e"],["/posts/9b22a48d.html","cc84af6d1e192dc57b0b8a73297284e2"],["/posts/9cb455b1.html","c7434b0c84891587d9b93c12ac28da8d"],["/posts/9ecdeecc.html","3407d687ed8de532adacd65c7acff68d"],["/posts/9efd7701.html","a2dba11fb70984a389ac64e9a80e8290"],["/posts/9f61c1a0.html","b5e6d68aab18f0d9d83d020b59a5c1e6"],["/posts/a1de710.html","49dcdac214a4fd3f546cb176b581ab21"],["/posts/a30eb0cd.html","2318b35fe6cbd08c3b0028c260fb00f4"],["/posts/ad0c1efa.html","be0439f288856ce6c0631ebeab76c8a3"],["/posts/ada3f440.html","c18994001d32b6e5a63c5c283b04dc33"],["/posts/af1807ef.html","aa46f691bc84f9552e7e718ac0b71ee5"],["/posts/b497b647.html","80bdd9f1507292ad0147aa6e6bf58b01"],["/posts/b4d464b0.html","281994194f512d0c951a283164987725"],["/posts/b5fb773f.html","f49bb071145e7a28fbb4370b3df3cae6"],["/posts/b8d46b32.html","a30bb2c04fa42c42e6a99c06773f47dd"],["/posts/c1b2c6c9.html","5c67b76e657644698dcc7b8bbe7c38ca"],["/posts/c2111cbf.html","95d5435284f5d5cd4291ea45de18332a"],["/posts/c316c2e8.html","1422e14141d31b005261191683aa0fb2"],["/posts/c43e60b5.html","0720fd57e1c517588dcdd186d86806f8"],["/posts/c497a412.html","f09f0643e3d8d7ac89090ac9642cb02c"],["/posts/c5395ba3.html","7931b1c4decd99372956acff0ae57996"],["/posts/c5de299a.html","4be94fc4bb8e942c4e6b6ec03679da74"],["/posts/c70bba9c.html","0ae8a687b3965c7c1bcf331604fa88a8"],["/posts/c797535e.html","ff7206c4dd6c863802c594df0324fcdc"],["/posts/c7a62c79.html","c01d21a9bf050119ff818a71ffab8549"],["/posts/cae2c959.html","b6632fcea82552931ed89223a0ff3f09"],["/posts/cbebef2b.html","8018ec531e23c712815b5b848fb9fd0d"],["/posts/cc4c0017.html","199ecccfe3368eda5b2a11107f6c5f85"],["/posts/ce25023e.html","a8464244974b9c31823be88660390a10"],["/posts/d2fd4837.html","7db5eb9d3899483e6e8cbcbe6e6588d7"],["/posts/d3233cbb.html","7616359b8cd0a38fcae5e920f994ff5d"],["/posts/d3a745a8.html","46fb61447ec922401e43f47f8e96485c"],["/posts/d7e940d2.html","813a301da5e70b01539e8c11c345b8cc"],["/posts/dc815d5.html","cca490c3b92606d56d55760607f76242"],["/posts/de25b0be.html","07ff25b117542066dc8b1b4bd4eb6e91"],["/posts/e2623b4e.html","674248d61e2b012bb699fb613acb2a14"],["/posts/e3ab6ad8.html","07b185527be21d2dad630302d5747cbe"],["/posts/e5018da6.html","d6c257065972d2cbaaf57bdb549a9ea4"],["/posts/e5963272.html","e9516887661db9fe89e6119872730c8a"],["/posts/e624b065.html","f2306bbd342f7574b90e8b7b3f979d9f"],["/posts/e7c703bb.html","2e5a8c0cccf651c5d2cff1fa06824f2f"],["/posts/e8f14b6c.html","4c168778d8a8aa65bee89bd83b83e6fc"],["/posts/e91abb63.html","5b19cf100f0ef313f716be35cba9b9da"],["/posts/ea9a8808.html","278aa2a8e8bba00e2a1b39cfaf216e84"],["/posts/eb784749.html","63f8d8782d34ce12ae0cf516dc110eb1"],["/posts/ebaf2232.html","9ff212d5cdd55fa6fcc8e6228687f623"],["/posts/ee1ed673.html","5ab3bb6272542700a2e14c7c82ae300b"],["/posts/f0c3ed61.html","10901cab8dd4639998b459cf5e4e3605"],["/posts/f151ff43.html","251f8bdfd7057df114fedcc2cc2952ad"],["/posts/f21e7f84.html","15d4e9a12eb157fe15f6254864c618d1"],["/posts/f230b0fd.html","096c39e287cea9fae46602e5374ed66e"],["/posts/f663d5cc.html","2befb96b2871769a76b61c433d273fa0"],["/posts/f730ad18.html","f595e7dc3def6e8f41c2681ed9ab0844"],["/posts/fc04d0d4.html","9c23c64e965ecf50676934985597dd3c"],["/sumire/index.html","7481c78ba4762a5c28e29ee7235492d5"],["/sw-register.js","26ed2d6a4ba0623deca3a2861ac06576"],["/tags/APPLE-project/index.html","55d2d0edef92b363efe3291d7a83065a"],["/tags/BELL-DA/index.html","b6d484146cf1e11012b318d7f97575e9"],["/tags/BL-Game/index.html","14cf5a748954412ca9473e93efe33373"],["/tags/Blue-Dahlia-Digital-Creators/index.html","bc38ed6119e59ebd00339c0904ab8706"],["/tags/CHUNSOFT/index.html","d0fe76bea5c49752aff3853c118623c4"],["/tags/Check＆Stripe/index.html","c00e01f06023f9d126f5f7135e96c5e9"],["/tags/Cherry-Pie/index.html","95b21656e2c7e89539c9f11e606d66a4"],["/tags/Circle-Mebius/index.html","012e89d171422d17f17e8f09f0dac780"],["/tags/CresCENT-BLANK/index.html","eeb5fa214e9d9504dcee4940aade4722"],["/tags/Dopamine-Software/index.html","5249eca6a7705db2edd57c3235c174dd"],["/tags/Dos/index.html","266d3ac3d00bbaffeaad13bd62ce4330"],["/tags/Earth-Well/index.html","25be617083ecfde7af571c324f1d4aef"],["/tags/Forest/index.html","0abcf7e15709b6cb76be8a0e722e6471"],["/tags/HaccaWorks/index.html","a6e614d2894f9e8459a6f63d3a1a0d54"],["/tags/Kanon/index.html","969a3239a015c47c41e10d4b08dec31c"],["/tags/MANATSU-8/index.html","340e3f358f3a687fc67c937d00153da4"],["/tags/MARINE/index.html","f15323d5c40dc8fd1e9df39eb7fc660f"],["/tags/MIO/index.html","d42425a85b3a58121885e6bd49be3217"],["/tags/NAOX/index.html","48710d7d8120f0856c8a4a967c244a37"],["/tags/Nmyu/index.html","ebfdf710d45c3b18e2320436041854ee"],["/tags/O-S-I/index.html","24e9e99f5c315d974cd08a607d592729"],["/tags/Omegaの視界/index.html","ae06ad9210a3162eb8d22763962f191a"],["/tags/PC88/index.html","89b3f51ee9008113f57c4b11af6166c3"],["/tags/PC98/index.html","2007293f5f0176e4d4782588b11b4746"],["/tags/Perpetual-Room/index.html","517f94220230ab59aaa5d80a28e1dddd"],["/tags/Pleiades-Company/index.html","4a8f341e0d58e74f8f6d2970cbf1dc54"],["/tags/Project-Twintail/index.html","6d4874294bf36f0f206ce92d3f654b71"],["/tags/RIFF-RAFF/index.html","8b68feebfd1351b9c5e8528ae8e87b4f"],["/tags/Reverv/index.html","224ddcbde230469f4d774523e04c907d"],["/tags/SENTIVE/index.html","b2ce96672073800340c085209c69b4cc"],["/tags/Saihate-SOFT/index.html","dc8be687332ed695c38e82a82e431eca"],["/tags/Scrubbing/index.html","dd5c826644c22d393bd995d761d09bc9"],["/tags/Sky-On-R-imaginAtion/index.html","190218d3420153299c5515bca77ccd4e"],["/tags/StrayMoon/index.html","2050f487bb96ead99e039e470cdae5fe"],["/tags/Studio-Bu-Sa/index.html","439b6c8238b058b4fd1b6fd9cddd3b21"],["/tags/TRANSPARENCY/index.html","9e66de3cfe53b805f01be5d3e34d2b17"],["/tags/ToHeart/index.html","26841e7d9926e5c7cd465bec203c6ad9"],["/tags/Traumend/index.html","c31d7d5e94448843c38c6294a0389440"],["/tags/Witch/index.html","2f56d259d92a16c9e0afc5344b0c0fc3"],["/tags/adonis-project/index.html","49ff17b00783b9206c0d22e8ebd84efa"],["/tags/capriccio-suite/index.html","c0ee6a4347726daf13be53a9531b3a2e"],["/tags/flash/index.html","06af4c2cb5c729896499379faa58298f"],["/tags/galgame/index.html","dc7b30daa762af650235b34543b7ad15"],["/tags/galgame/page/2/index.html","bebeecd77aacfe3b18adba98f6463356"],["/tags/gal资源/index.html","7d6eb2edadd44c4073fa865ae7ea48b4"],["/tags/gal资源/page/2/index.html","edbc0b630a8616186771919e50110484"],["/tags/gal资源/page/3/index.html","54e3ae2e9b5e4ad7c7652de20ae2d0a5"],["/tags/index.html","8105ac9f33767622c3ed8e076187b2ac"],["/tags/rkr/index.html","598935bd2f1898fd12d4afc378fa6def"],["/tags/team-eye-mask/index.html","474a20446f646a0dc8876fffc757b0a5"],["/tags/ありすくろいつ/index.html","c1ff4b768c9b90ee2b0c81339887a9b0"],["/tags/いつものところ/index.html","00976f05039d2d5d5197dbc1028852e5"],["/tags/きつねみみ饅頭/index.html","a5ba9d1c70461b549b27673352eed505"],["/tags/ねこねこソフト/index.html","f64b8a44daaa04997909b25f4dccfa78"],["/tags/ねこバナナ/index.html","962165ddf2b4d20540c42f9dcbb35ede"],["/tags/はちみつくまさん/index.html","0f9383106555c3e4b120ee248307a5e6"],["/tags/ろりちせ/index.html","92047c20f427986fcd20a128d5e981b6"],["/tags/アイル【チーム・TATU】/index.html","c228a8635b9b57deb7222f8e3594a6da"],["/tags/アークシステムワークス/index.html","90a12fda3c2fb5d496f390c2ce1e13cf"],["/tags/ブロッコリー/index.html","09c7d913479b07c49138ccdb0c458b8c"],["/tags/乙女/index.html","1f1b00c7b734d7dd4893769849cf8ae3"],["/tags/乙游/index.html","dfaafa25d3e5b41a11408a27d0854a9b"],["/tags/停产/index.html","810087dde049758b0dfd443c0790296f"],["/tags/公告/index.html","d5db861c301cf37da6d450cf68be6cd3"],["/tags/同人/index.html","8030b8ca1a80aad2d2faa37a697b71d7"],["/tags/堀井雄二/index.html","06248fb9f71141d77de343555413cbd2"],["/tags/外海なおき/index.html","c52b896e42efa5f3a22653e2b91e42b9"],["/tags/女性向/index.html","66e014385180a45d28ac80860f97ee81"],["/tags/桃野衿/index.html","4bdf4d22b9858a5cafa187b61beb8c62"],["/tags/機械式少女/index.html","ce6cf98bb8692b4a2be91b94eb89c5b8"],["/tags/水仙/index.html","d4f42a33fcf7039b71ab79ae74d82689"],["/tags/汉化/index.html","26dbbb3da5b68491dc9d6b85b0905188"],["/tags/片冈智/index.html","c830d428cad3de02fe91a4c58f739d97"],["/tags/片岡とも/index.html","6211e9507eb932576e1784adcdb1389b"],["/tags/牙の刻印制作委員会/index.html","0ea4315b2bcf1f00c7c3249adc610322"],["/tags/牛カルビ定食-FLAT/index.html","513ab7136a6c43cff082f1df9c239798"],["/tags/牧尾屋/index.html","2923ba1f20f9196b3723e26491a0a9f1"],["/tags/犬茶屋/index.html","bd8f3ee21eef6a5431df8de2bd63d1c4"],["/tags/猫猫社/index.html","fb39f39409ed0048e733a647455941f6"],["/tags/王宮魔法劇団/index.html","122c1061d70c72c271e70c7c5f5be07e"],["/tags/画集/index.html","d697003b062edf07727f0996552e355d"],["/tags/索引/index.html","cda098c062682812fca88177b5a8d827"],["/tags/缺失/index.html","b556eebfd4fa90c4c2a36f3f420d2b82"],["/tags/自购/index.html","69a94983c769e7a1e86b3b6c8832773b"],["/tags/茶葉☆姫/index.html","3eee3baf2cadaea99cec8ba465e6e3b7"],["/tags/郷愁花屋/index.html","f73179ea03031d76bd9dc9c6666e060f"],["/tags/閂夜明/index.html","81af17e03fa08d656501941b0bd4edc8"],["/tags/音乐美/index.html","b1a7e173ab245d495e8457ed7ec16cde"],["/tags/黒†救/index.html","61f68263850dba07d089f1953d22fd71"]];
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
