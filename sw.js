/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6c9b671d566bd3e99fdb02bfb0ec0c32"],["/archives/2024/04/index.html","6797f6d91d1b0103682fca6d2f6fe9ea"],["/archives/2024/index.html","2a28499ed312f9079c3b72e1d8df9343"],["/archives/2025/02/index.html","34d5dc437dd524f8befc1a68be5a4582"],["/archives/2025/02/page/2/index.html","0bd5cbd269bb5b0167d8a4b157303354"],["/archives/2025/02/page/3/index.html","0e6cf3ebe167a780a9c82ea9709a2785"],["/archives/2025/02/page/4/index.html","90998493301fbe6c89af500e9fe985cb"],["/archives/2025/02/page/5/index.html","fa741226e8f990bd6beccf515c56d389"],["/archives/2025/03/index.html","04afa06bc4de69c22701ad81e2a32153"],["/archives/2025/03/page/2/index.html","7bdad6aa7be1846d3a0fe63b2b380053"],["/archives/2025/03/page/3/index.html","0d0542ce0b9eef5a9e0aaa41d844077b"],["/archives/2025/03/page/4/index.html","d6bdbd241cf20ace2d1f9a4aedd7af19"],["/archives/2025/03/page/5/index.html","dca7ddf153aa307d23c780440ca21761"],["/archives/2025/03/page/6/index.html","f89eb6434b78c1a4677969f2c6ba6f60"],["/archives/2025/04/index.html","cbfec5883cd2c03e36cd88660e00664f"],["/archives/2025/04/page/2/index.html","52bde0f744f26b755014c0d43776f799"],["/archives/2025/index.html","fe62d8ea6ad329591ebfe0933b8d1af7"],["/archives/2025/page/10/index.html","6c4934e835288ecbaa05cdbb7da01c21"],["/archives/2025/page/11/index.html","08b019b6bdf44ad20f4ed7e2a1b74e9f"],["/archives/2025/page/12/index.html","9efee3a5fccd0ea78af99684123adf54"],["/archives/2025/page/2/index.html","9beb073fbbdebc046f8fc36b102387c8"],["/archives/2025/page/3/index.html","a9e7e6ca1b5cd4dcea6c7672a57db99f"],["/archives/2025/page/4/index.html","db1f884f4f2ebbe51c84143d266c52fb"],["/archives/2025/page/5/index.html","affe66cac3afbbe47e654d85c2952163"],["/archives/2025/page/6/index.html","a2c50c4d73355626b70bbd6bc7235736"],["/archives/2025/page/7/index.html","6413f282ff1da7ca71d562f354f67a40"],["/archives/2025/page/8/index.html","1beb8eaa0045bf967fbc0397f8655d57"],["/archives/2025/page/9/index.html","26b3e9748aaa9a49e72dee9fab843ef4"],["/archives/2026/02/index.html","1ddbecf5b4c7d1ed0fcfb35e3b363889"],["/archives/2026/index.html","9e6ad90a089ed42de80df3b076118f55"],["/archives/2825/04/index.html","40ab248f761ee0f2c4abc153dfecc6d5"],["/archives/2825/index.html","f66e899fa6e8685a0deb321c19be3172"],["/archives/2925/01/index.html","3e59e6b7c9a0dea3b954d27a979454c9"],["/archives/2925/index.html","2cb8bf659192dc3c7ccfaa4f0448b1a9"],["/archives/index.html","e92fa847e60ac467aa323ee15ceef527"],["/archives/page/10/index.html","10e5ab47b9993d81573daf542ae23f9b"],["/archives/page/11/index.html","6887474b1a0f0a0075333281cf6ef174"],["/archives/page/12/index.html","def3b7a6193dbe74d850160e33682ec0"],["/archives/page/13/index.html","857cb975c5eac99d14e9db1e05d083f9"],["/archives/page/2/index.html","d859fc09c8ad5cacb8b94a1925968514"],["/archives/page/3/index.html","0c6207a286276b80b199fa98439e4284"],["/archives/page/4/index.html","6633e7ecc58143e78400df9046a01910"],["/archives/page/5/index.html","bec094aca8fd5c685e38c3b0d7a09aa4"],["/archives/page/6/index.html","ed7809e18e78398ba8ee3469247272bd"],["/archives/page/7/index.html","b39081f584ae7453badf4708242c9dda"],["/archives/page/8/index.html","d5949c972fdd2a14d0b7e6c904ee628e"],["/archives/page/9/index.html","98923c6f112a66415d5d1eb2b495c612"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","aa7edc9c89f6271ede5ec7d8d08d3b5b"],["/categories/galgame/page/2/index.html","203e9c503d32a05b7556725f9c2cafe3"],["/categories/公告/index.html","4a13a30cc516f797c7738f52cf02199c"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","ddfbcb559903d11aadbbe3a255b2fd89"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","9bc91d9a966cc369d8ea08ba089c7adf"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ecf7988e9ebc5aa8799edc04eb56e44e"],["/page/10/index.html","9a07eec2ec366b93d8eea5d6a0151890"],["/page/11/index.html","0aa1fd94c3cc47ddd70873cd7cf5910a"],["/page/12/index.html","1e8f365f81bbb5c3cc353e535c0b220b"],["/page/13/index.html","783612f1dc30d70c709d560b0c66ba73"],["/page/2/index.html","9a7b96b367155c3b6d7f1440f3b69b92"],["/page/3/index.html","b682a9003acfcf2ad320bb4063e7c5fe"],["/page/4/index.html","02254d97c36d0b54a8289f40580db905"],["/page/5/index.html","904170044e1b9549aa16424a6de4e1f7"],["/page/6/index.html","a20a232185e274f290a67ca9896c3d76"],["/page/7/index.html","3ebfa987fb55adcff6bcea787450d96e"],["/page/8/index.html","21f8e4787da981cb7de0007438da4121"],["/page/9/index.html","0c6d41e62831fd9ef27fad0c90b3187e"],["/posts/10c9dd98.html","d64aea23dc7ef72c7e844c45affa0eb4"],["/posts/1295b569.html","373ca6cea8bf24a7c66d52d87d018477"],["/posts/1370342.html","2aaccf9d298217e7c962480e0ccb0705"],["/posts/15ef14c2.html","7539640e52ff17c37e089d4567b0152c"],["/posts/15f3959d.html","ff55a6ea3bc05a2a4db5609d8b67efc1"],["/posts/18ab785d.html","c1dea881ce23d092fc2b852f087b46a5"],["/posts/1d59b71f.html","f3e52fb86df4863d8f38db746c2ba71b"],["/posts/20b3f3a4.html","216c73f3376ebcd4aaba999d3dda2eae"],["/posts/245f1c7d.html","1e0c7757de9917309ab12b0c89df21cd"],["/posts/252658f.html","bc7a8298f1e84c6e3248ff67d541e90c"],["/posts/28397adc.html","8ca1a7a1d734e705412f92d3647437f6"],["/posts/2ad07f54.html","e25be5ddd3bb632d40ff38869b09b769"],["/posts/2b38bce0.html","066472c8dbbff525cde86a64107e8040"],["/posts/2c0a6836.html","46ebc50a8b53c8d721bf7a21a04ff832"],["/posts/2ce39bcc.html","e9293bdd58535c9989e4880e403a3482"],["/posts/2cf620f0.html","a2f0b9c5408f4f066494cf57b0ccde30"],["/posts/2e30fd6d.html","fc1cb0c91c8959d019e8296f407d7584"],["/posts/30a413ad.html","15e1c00eef71891bf6ef2a5f942e7a0a"],["/posts/34292736.html","15a5e7b6566d6978418aa2d03ef07786"],["/posts/3468cbe.html","9d256fe1ac8fae915976dba8813f5330"],["/posts/39176dc0.html","c8990b201ff4f3db1748fcaa1ccd9f5c"],["/posts/3e118dbf.html","dcc7072adb8be24e6283ab7b13f9f04b"],["/posts/3f7d823a.html","80cca2abc057ea663e769c2712ef6a43"],["/posts/3f978819.html","4b863d431af854cfb9f00b3f30bf087c"],["/posts/43945723.html","8970546ff6a6f68fbcd82bc020850e46"],["/posts/44124a6b.html","297cb9a7b68d675553edf3b1091fa82b"],["/posts/47abb61d.html","47502e0919494e5de0a3c9642bffa851"],["/posts/4996478a.html","acbdb73689b4a4a8f38f22c5da898f82"],["/posts/4b689be3.html","e75385526b47cd11ca6f8fba88986aab"],["/posts/4cf8423f.html","d4b28b688dc367ed5806d5b9e63191e8"],["/posts/4dcf85c.html","1cb80b1e7d2b167b01e799b87dbced81"],["/posts/500cd322.html","80bf0047b8e7b48b367c671459c6f009"],["/posts/51c9b1ff.html","4b3ba26db7b45da042c6bf181e9f7c63"],["/posts/52b5b3c6.html","2c0175610a0fe67e4c183630e198bff0"],["/posts/54f496ad.html","2348ea4ecedfc2ef9eb04ce6d3d85fac"],["/posts/558e1f30.html","f3cac85a9e294a17c4ea01371e62ef91"],["/posts/5d8bea92.html","c4f37b89354f0c9b0147569831b2b529"],["/posts/5f6e0c59.html","92392ab2f79f18d7d20caed1cd45c3f2"],["/posts/61a63a84.html","b43c438a924135020a5a6e2b5e62312e"],["/posts/625ab7bf.html","0e41ab700273a3a5e33a77cbd70633e1"],["/posts/6336a2f9.html","d4238a858bc37b80774f1e9a650edded"],["/posts/6432d61a.html","5e57433fb8a7d5d1529f25c59a55da71"],["/posts/6515f032.html","e785b5288359b27593df9b99d4416a45"],["/posts/6720ccdd.html","58fc1f72bc3693bbf1dd984aa7bfb492"],["/posts/6a4b5ac8.html","29596ac43e83d3353bfc7ea8e640206e"],["/posts/6aa4177c.html","d18d2407700056ae35aeda0ec32ba8bf"],["/posts/6b15f81f.html","4e5b74e431265f626d5ef99d899fa2d1"],["/posts/71131d34.html","beb02bb9066873e78b7e176011325904"],["/posts/742fd48d.html","b25bed8424866abb287eacc8ec862356"],["/posts/78a8a8d3.html","b45eaa3a9065331bb239c336a32feb5b"],["/posts/7a5ef3d0.html","76ed662889dc69040bb35e01be82c4df"],["/posts/7b41e1ac.html","a7e02714a321385382c5889d7d1b90d8"],["/posts/7b51011d.html","58cca6473f239479bd74ab64334f4d2e"],["/posts/7e3aa3e2.html","860b6ab9d77b3788ca46f75410797dda"],["/posts/80fe2691.html","3900e418d8d9323369cb6cce246b1aeb"],["/posts/81ac52e9.html","90ef06c1ac52d388ba95e62f7a39db45"],["/posts/82332d11.html","03ec96af353ff205a097a90babe3e47d"],["/posts/8486f6f9.html","890255b3f1dca614b51c92832804526b"],["/posts/849b40f8.html","204db74ec099a84cc20f16e68148f786"],["/posts/85c51d68.html","7e74c3899c1816ac0a4de1eb647fb8a3"],["/posts/86a6c500.html","bd6f805fb2b3a4f6ee7ca9749e9985ac"],["/posts/886f8d3.html","8a2ca82c97584903775783fa76e6a15a"],["/posts/8a7cba10.html","8d1616797e6640efac68a52edf593590"],["/posts/8ac11b41.html","3f478449f62d36c310beb6daa9ed233b"],["/posts/8dd520d9.html","b09cc10d04b5526a08cfd8ce3983a79d"],["/posts/8f555654.html","a16b5c2eac03e96309f906a2c94604d7"],["/posts/92a980c2.html","8cc0379423be3a8ea11572cc17a50753"],["/posts/92ce16.html","d241cacd57bb38de483e200abdc11550"],["/posts/93e9943b.html","7b8de4458163c1724698a020e0174cb2"],["/posts/94d3c794.html","04bcb3e6b0957c8d0cb620e375769915"],["/posts/97f50eea.html","267f02ff5c04d88b3c61addb69444883"],["/posts/97fca8be.html","3def13761f0cf56e49329a2b0ee8dfd8"],["/posts/98662d05.html","02edffa28716aada671bd308f2e80c5d"],["/posts/9a2f6162.html","1762805bf88d2016de9b2c630b4f4860"],["/posts/9b22a48d.html","56679672f3392a6a1b6aea1652db0a88"],["/posts/9cb455b1.html","ba253fda03fbfdde7bbf906a6034f08b"],["/posts/9ecdeecc.html","c40adbd74efde3467f8c298dc3f3ccd6"],["/posts/9efd7701.html","c845182a1ad8f5d00a91b22bd32527de"],["/posts/9f61c1a0.html","a8c1a1e70d59bd5f9fe188271b6d4406"],["/posts/a1de710.html","7eb936f6dffe855bb55c7cd9a8c1ff3d"],["/posts/a30eb0cd.html","8cb30de69f5d2326f0e2d96a5156cb26"],["/posts/ada3f440.html","78e8ec29285b04735454cd19689980ae"],["/posts/af1807ef.html","ebea5a8adaf1be89ace2bf2df6dd3c2b"],["/posts/b497b647.html","ed12d27cdc313e768da7b48746664e4b"],["/posts/b4d464b0.html","26e990a60c89f0311e4928bf8a5aed5e"],["/posts/b5fb773f.html","c8753a84c830f10aed0637e20f541527"],["/posts/b8d46b32.html","ef0c9aef75f5ce5d90ed883bafd70d67"],["/posts/c1b2c6c9.html","79a95553e8178b81eb280090ead2a74f"],["/posts/c2111cbf.html","f6530164f2d62bbb7a5ffcc1e2e1551a"],["/posts/c316c2e8.html","3261c55dff378ee6d05352cca0180842"],["/posts/c43e60b5.html","c74929fa355652bfa3d59c85a666d9ff"],["/posts/c497a412.html","7f42fb3619a15d44efdf2beb5a35d119"],["/posts/c5de299a.html","5d637e69f28441194dfcc0dc68dd83e9"],["/posts/c70bba9c.html","eec61b6a0442405d1ca3a163f188e4c0"],["/posts/c797535e.html","ac799c40a16c1b2739eb60d4222cd8c6"],["/posts/c7a62c79.html","2f31609d87b68a7201f42123fb096702"],["/posts/cae2c959.html","9b391c4f5bae21a13689f103bcec820d"],["/posts/cbebef2b.html","dfbfa19fe83ef688e959cdea04e62d8a"],["/posts/ce25023e.html","1c4ebecc2fb976d7ff5cbad4d1076dcc"],["/posts/d2fd4837.html","8f725a7e8277c750c58982027cf32840"],["/posts/d3233cbb.html","d1d8625be1a4e72945aacb32e684000e"],["/posts/d3a745a8.html","3365f258f35d08e4a19dd8c8e7215abc"],["/posts/d7e940d2.html","b10ee6e2bbb4b8d5834f4e7d9117d627"],["/posts/dc815d5.html","595d6ff7206e254c512183ad08588229"],["/posts/de25b0be.html","0bc6d3908781f94fa25dbb5c0307680a"],["/posts/e2623b4e.html","ea4b83123ac52532abe30e3956bd0862"],["/posts/e3ab6ad8.html","b6e772b8b19f357e93b7771c706ee5bd"],["/posts/e5018da6.html","81ea9bdc88ef16f9089746661593b250"],["/posts/e5963272.html","934a41e607c16d42449e5c21be744c65"],["/posts/e624b065.html","1599a99ce36543e5e5d0b0d7dceec157"],["/posts/e7c703bb.html","446e42803390bd3af7f7a26621325105"],["/posts/e8f14b6c.html","c5d8e8c6c0b5c75dc8faa3e273cc6411"],["/posts/e91abb63.html","e907302ca551e6a924c9fb436b7d9d4f"],["/posts/ea9a8808.html","e2e0465eacb372cc4e9412999d2c7883"],["/posts/eb784749.html","dc2ca8644f9d6a3a6db4e052ef765283"],["/posts/ebaf2232.html","592b51ee3d886a725a3531acb2a2592b"],["/posts/ee1ed673.html","37ef162f8dbbed891476f4c436773e99"],["/posts/f0c3ed61.html","7a565326da79ab95e460c74cb6f2355f"],["/posts/f151ff43.html","79a5fd93b6389fc6ba1440ccfd63f8e1"],["/posts/f21e7f84.html","54ee7a5f2dbe0d8c544c3219a60c1366"],["/posts/f230b0fd.html","18cf1ba56b8af077fbf29d1bae78cd5a"],["/posts/f663d5cc.html","5bbd40f8117d4e81c4a732ff4c136db3"],["/posts/f730ad18.html","791f58fc0735b6efa5c7c61d8e25772b"],["/posts/fc04d0d4.html","e9cac29271c1a91db9bd100fc51a4e9e"],["/sumire/index.html","552126199ac098084ada55d5b7c5f85c"],["/sw-register.js","862d16edc06e025e6074bc5feb666bad"],["/tags/APPLE-project/index.html","cae261deb15e2bcc1d83fbe85705ab8a"],["/tags/BELL-DA/index.html","df2b6f56a3b9be1bca1370105ac174c8"],["/tags/BL-Game/index.html","a8970fbd9e576ca991680a3060af965e"],["/tags/Blue-Dahlia-Digital-Creators/index.html","298eb0a1ecde0890b76a1b47a922f354"],["/tags/CHUNSOFT/index.html","6b9d2f57a2b710c765453908776329f5"],["/tags/Check＆Stripe/index.html","a43b0f90e5d4542b3dbda638ab9e3ac5"],["/tags/Cherry-Pie/index.html","2f0673f91a0f2165009c265da91c7573"],["/tags/Circle-Mebius/index.html","c01a4c4415329899bb457c22282bb418"],["/tags/CresCENT-BLANK/index.html","fc60669a6d8fe88340e5f66139cfcd93"],["/tags/Dopamine-Software/index.html","af5a773b5c599f9d0407eabaafed208c"],["/tags/Dos/index.html","ede14ce007c8b902dfb574bf7053875f"],["/tags/Earth-Well/index.html","7ea4c903aeb7035d272bd235f31b0895"],["/tags/Forest/index.html","a0f00d7b2801c4400b5c157b1dffb671"],["/tags/HaccaWorks/index.html","e21abea2855bc073e68676c02b5c892f"],["/tags/Kanon/index.html","79ab081ac343cfa219979e2fe5fc8515"],["/tags/MANATSU-8/index.html","0d18ab55442a059ad3a2f7f51bd43960"],["/tags/MARINE/index.html","8148a252453de9f7d9e3e156c36e08ed"],["/tags/MIO/index.html","19b34f5f6b8b16e9a1c70fc3a5115871"],["/tags/Nmyu/index.html","6a8e4bf66ab63f421e2cdc6b48fae38c"],["/tags/O-S-I/index.html","c4b83b246659b8535403ca880b59bb52"],["/tags/Omegaの視界/index.html","23756bb8929fa3746763f608087315df"],["/tags/PC88/index.html","e7710c836bfd4a5aca3f20cb2b7ad935"],["/tags/PC98/index.html","19b45b1d60b1515b83a5952032c8d17e"],["/tags/Perpetual-Room/index.html","1fca57a996758cdf6dfd79e6ed1ebde6"],["/tags/Pleiades-Company/index.html","82a60af00d82a814d9a900f86d0feac2"],["/tags/Project-Twintail/index.html","7b15ecc92f4021045ff9d6a8b9a286a3"],["/tags/RIFF-RAFF/index.html","f00ac6d605173ba49c004b3138ffcc10"],["/tags/Reverv/index.html","decb324586c7613484b3e10db63abf11"],["/tags/SENTIVE/index.html","2aa2dc65f60915b17887b2384d1f8610"],["/tags/Saihate-SOFT/index.html","6b27ede664ab134dea996a8a75d64240"],["/tags/Scrubbing/index.html","d2797cf26ff64a28a14fbdd1424314d8"],["/tags/Sky-On-R-imaginAtion/index.html","b583f234dcda121770fb3688888e8b0b"],["/tags/StrayMoon/index.html","9700446ffb6bdb9ca8906545e3030480"],["/tags/Studio-Bu-Sa/index.html","414d29bf2a2eccb066eb38eb89d867ad"],["/tags/TRANSPARENCY/index.html","1f00f01cdd3d9d7febb0e1a3740db9df"],["/tags/ToHeart/index.html","d2a8a96b80423e215c255986830fdab4"],["/tags/Traumend/index.html","c8c0578cf3dbe8fee13c58406b3f0584"],["/tags/Witch/index.html","64df1b49f02d0fa9ce170624f9689bba"],["/tags/adonis-project/index.html","4d2b5f100cf425230af543570afd4bfe"],["/tags/flash/index.html","fd40b64745576fd36b572fa1c5ad4524"],["/tags/galgame/index.html","6f0f2931907a78fe517aff379918cdec"],["/tags/galgame/page/2/index.html","88bbaeb00ddc607e8a96c30b67d3d3c2"],["/tags/gal资源/index.html","0e3d573d4c78c323e0d473dcd752ea3a"],["/tags/gal资源/page/2/index.html","7c225d8ae00d54e5f99db8a96e4cc5ca"],["/tags/gal资源/page/3/index.html","29de13e7f9a45fb7bbf09d816e5ded0a"],["/tags/index.html","2cf3a53f3b2760412cc7ace29b42bdaa"],["/tags/rkr/index.html","17902c3994e6a107f25dd3d49354674c"],["/tags/team-eye-mask/index.html","d22d1ba90ca4a5d553c57ab4e4e346a3"],["/tags/ありすくろいつ/index.html","11644dabd25cca074cc5dccdb07c3ae9"],["/tags/いつものところ/index.html","8a816ef37bda08b8212abf8b3f094a3f"],["/tags/きつねみみ饅頭/index.html","aaff2808a14b0d4d082ab7b7ae2ce738"],["/tags/ねこねこソフト/index.html","4441c3f0b66de3bc19d129230e00a650"],["/tags/ねこバナナ/index.html","d14d88a6096bd21ccd1c1e36a78e893a"],["/tags/はちみつくまさん/index.html","83c44de3ddecb2c98c3786b2b1dea9c2"],["/tags/ろりちせ/index.html","3c8a6b6823a492d7aa8d5921de7514ff"],["/tags/アイル【チーム・TATU】/index.html","d1662fd622e0c3de50dc2ac32bdaf690"],["/tags/アークシステムワークス/index.html","bc37a993c114cd8ddc8042190c66901c"],["/tags/ブロッコリー/index.html","635064d9662879b18816702a81f28869"],["/tags/乙女/index.html","d02a7fa9412551c4fb81dff89e30e309"],["/tags/乙游/index.html","e9f3c8cbd99ec226e184c8ad43647bc7"],["/tags/停产/index.html","ffedff71e018f1e25985d64779f7288c"],["/tags/公告/index.html","7b6f5c4fe4d1a234d961f2d6658c04c9"],["/tags/同人/index.html","71afddb5afd820e31888f53962ccae73"],["/tags/堀井雄二/index.html","3ea6ed33f51b6320aaa92c1e0cafd663"],["/tags/外海なおき/index.html","8474a7d662dd0075ea37da4f12850d8d"],["/tags/女性向/index.html","957dc126562699e35c27f3018ac24b96"],["/tags/桃野衿/index.html","93abb934934b3f515d9caef07a40cccc"],["/tags/機械式少女/index.html","9fc9a56b7520471362d66ac7477ec5c7"],["/tags/水仙/index.html","5c4f5dbeb669a8c5beb78bb3d0c5a5a1"],["/tags/汉化/index.html","3defb3983352d2afc86c2f069bea79bc"],["/tags/片冈智/index.html","59d35d7d86c78df383dded8c24277cdc"],["/tags/片岡とも/index.html","1ccb4945c99e335623bd0f7721e9272c"],["/tags/牙の刻印制作委員会/index.html","29b32da803f1d57fad75ae37af793994"],["/tags/牛カルビ定食-FLAT/index.html","544fefbc8647d25956e6d424c74fdbf1"],["/tags/牧尾屋/index.html","3da30e688b18ac05fefba2fef0ab5286"],["/tags/猫猫社/index.html","be1bc55d3b1659edd5585b8d2ca75429"],["/tags/王宮魔法劇団/index.html","4694e6fee5efcc991c97463dc32d80ea"],["/tags/画集/index.html","9a83efdb8533372d2641424c6a37d1bd"],["/tags/索引/index.html","23eb1fedce731bbfce81111d10cc1728"],["/tags/缺失/index.html","44bd2ea11bec94058d0c943d0ce08b4c"],["/tags/自购/index.html","fc1918b9667e6155ea8dcd50641ecd4e"],["/tags/茶葉☆姫/index.html","5ca08eca3cdfb38ea4487c94f243f882"],["/tags/郷愁花屋/index.html","dcbed5f306d13e5dd597846107f29709"],["/tags/閂夜明/index.html","5a7b44a89663dfb63f5ce13d97911b03"],["/tags/音乐美/index.html","6da5009a619771852258549ba6848d27"],["/tags/黒†救/index.html","612f2e159c4cb7d2178cc5c88e28929d"]];
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
