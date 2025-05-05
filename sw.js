/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","7f12cc8cde684f40f8efc9fa9631ee31"],["/archives/2024/04/index.html","60303402782ebd0dfd0bfc4cf95e1393"],["/archives/2024/index.html","0ca301db0d00ccf0b0655aaa377386c7"],["/archives/2025/02/index.html","302b8e8e1aa1102441a1fc06740e4a4d"],["/archives/2025/02/page/2/index.html","e04c174b6ff99fffb7ad634b5e938e83"],["/archives/2025/02/page/3/index.html","c7389975e5ce16d9fa8a6eac4859d031"],["/archives/2025/02/page/4/index.html","a8c4e7f1f970c8dac288e054b06fc39b"],["/archives/2025/02/page/5/index.html","75aaa7bae4945e0736bbe79119bc310c"],["/archives/2025/03/index.html","b59d0b6e8d96419e2bb32b2a066840b5"],["/archives/2025/03/page/2/index.html","ad9309f72325efad78dbc09f277f5a99"],["/archives/2025/03/page/3/index.html","aa76548c5f55c6d9844b9c47897c7037"],["/archives/2025/03/page/4/index.html","45d1e1a1d4cf007ff6aea67fd76fbd9a"],["/archives/2025/03/page/5/index.html","87ee4294ccde52e83b3504d5cd9d7c5e"],["/archives/2025/03/page/6/index.html","a043195c370b1eadbd57f2f7adc32691"],["/archives/2025/04/index.html","2e40340d9378f16ff4aa001c6c1364f8"],["/archives/2025/04/page/2/index.html","d5051fe13c4f3da4bee7288e854b9b26"],["/archives/2025/04/page/3/index.html","2a081d8181221dc2d206974aa1d39918"],["/archives/2025/05/index.html","7ebd812cfa49194d13049b895fdb84dc"],["/archives/2025/index.html","b667a459507c53136a260b6f5c0e5639"],["/archives/2025/page/10/index.html","3335cc5550f586aba284210afe3d8b23"],["/archives/2025/page/11/index.html","984a5a963290865a1c0f5a202e8f36dd"],["/archives/2025/page/12/index.html","2d05e8683f530ee8899930c2f7aec7b8"],["/archives/2025/page/13/index.html","ab72951d694e7a0c34804ac7be0332f1"],["/archives/2025/page/14/index.html","db9cd36a71aa1d743e96604b092a8518"],["/archives/2025/page/2/index.html","8ae44a46a90cd062fdb786c07739a639"],["/archives/2025/page/3/index.html","a9dc2e1f59d469a3844111f78e608351"],["/archives/2025/page/4/index.html","2f1ad3201e8f940916fe50c7ca88e500"],["/archives/2025/page/5/index.html","279c431ef1d99d817008f5dbce6e864b"],["/archives/2025/page/6/index.html","a29a0084a70fce6c9599cc050c1c1c5f"],["/archives/2025/page/7/index.html","b80358f63f3c558cfd746b214577a5e9"],["/archives/2025/page/8/index.html","ec5efb82bd0d08c13d63fa4bcbc66a74"],["/archives/2025/page/9/index.html","2b3da955435cd6fefb95cc0028780d0d"],["/archives/2026/02/index.html","1a395d08b6b72f7674cc70ee52ff8383"],["/archives/2026/index.html","6eb3ee915a969daf0cc42f292e0fa8cc"],["/archives/2825/04/index.html","251f921dac2af6e44b3bbe8b5bc4ad7a"],["/archives/2825/index.html","d6fac438348ba3228d75e0218512d09b"],["/archives/2925/01/index.html","ef8c86879a79e4bde847057c12d2a7ae"],["/archives/2925/index.html","906acccd6f7488368d924d69f2615269"],["/archives/index.html","abd06dff838adf4478c1815ea01d4110"],["/archives/page/10/index.html","325ee7a834e983765cadd19d2650f848"],["/archives/page/11/index.html","ecd7d3d24c885a696d1cb04ea8e68b3e"],["/archives/page/12/index.html","762e90eb32ffd964508b1505de962d4d"],["/archives/page/13/index.html","cc95e8d003584df6c304f7f2a65c1974"],["/archives/page/14/index.html","236e52c3eda39dc70d365005dff87b85"],["/archives/page/2/index.html","194ad418573b310c9ebc00a6938e0e40"],["/archives/page/3/index.html","38ee6106a35309afd77bfb78211639e5"],["/archives/page/4/index.html","bdc334f7930219952be0212d463684ec"],["/archives/page/5/index.html","7750014908c4322d6eb2dd075e4ac2af"],["/archives/page/6/index.html","214aad3870bf18d21abf77ac2dafa888"],["/archives/page/7/index.html","35e7960c16bb0b15e2a0004bb66eb84b"],["/archives/page/8/index.html","209a8405648a944ec5ba81f04c5e3069"],["/archives/page/9/index.html","826e39ce88d86cac5793ec16f570e96e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","bf68871f237cfbd86ab60b96fafef00e"],["/categories/galgame/page/2/index.html","122abad71910e073e2e42c21152b430f"],["/categories/公告/index.html","d74b80c84a375a7670b68a7f32f96fbb"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","a8392917e9d8c07197b7b83dbc5bad76"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","b422a276296d0aef2421c41129afde48"],["/page/10/index.html","4ea64bf2540a1f07b1ad8e0e5745a3a5"],["/page/11/index.html","37d4367920938fa439f1dd4f61625729"],["/page/12/index.html","ab12a8faa2c5950a4dc850ba855e75fa"],["/page/13/index.html","13a90c1b44997504833e3ba2c38f38ba"],["/page/14/index.html","132e184143d208e171e8e91306827d79"],["/page/2/index.html","69f67168f2372f72d5bbef24d1eb3f7d"],["/page/3/index.html","9376892f770c3f029d9b4ce808f2c9d2"],["/page/4/index.html","4068be62b97b436318a0f1af7cbb3588"],["/page/5/index.html","a9172be9eb61c2088fce7e7f4b57615b"],["/page/6/index.html","edc4386217b8d2372c9acb7137d0d5d9"],["/page/7/index.html","1b60f0e665bffc7eb987be292ea27df2"],["/page/8/index.html","1d7ad7fbcb6fa82b4237992ac4f575e8"],["/page/9/index.html","2f45894b386b56ef0b943d0b33d3f4fa"],["/posts/10c9dd98.html","6392fd2595e4c94730cbacc7254e4aea"],["/posts/126ebb99.html","ff9964d830cc9037f2ccc0ed5f45980f"],["/posts/1295b569.html","20f20bd681f52bcdd3ad95024391f421"],["/posts/1370342.html","a188daa298662cff288d4c83dda894df"],["/posts/15ef14c2.html","2541d0d1f44f47310d2e05d7185eaf80"],["/posts/15f3959d.html","1fe204e0c4d78ac1bd9b6c18e1d74288"],["/posts/18ab785d.html","d1bcb01920fd7c8b82eb8be416308ada"],["/posts/1d59b71f.html","c51fb806aa512dd019d8d7477658fe4c"],["/posts/20b3f3a4.html","a4839dc7f8010b82e22e1d9ab91e6cab"],["/posts/245f1c7d.html","151eb94c16f72f012cc8233490db1646"],["/posts/252658f.html","45db3ae216fe2abebef4de9e9eea371f"],["/posts/28397adc.html","c23ad1e6883a86476dd3ac9c26eaf6fd"],["/posts/2ad07f54.html","fdd61a570370a0416ca581dc9d7462f5"],["/posts/2b38bce0.html","5d92f6281dfa138fef85d6c0b7850b2c"],["/posts/2c0a6836.html","defbfbbc9118534867102bc79eefc1d8"],["/posts/2ce39bcc.html","a0f4bf1e5f689476ca2a8ee7e61fe761"],["/posts/2cf620f0.html","e8ee41686835a99a9f2e5ef9812540ae"],["/posts/2e30fd6d.html","5a55d8f467baf49d0ae51cf609a49f85"],["/posts/30a413ad.html","c3d8766bdcd02cc98f674c9680ff9136"],["/posts/34292736.html","2e56a9754cf3c4de4b4ee2ac328ff60c"],["/posts/3468cbe.html","fb64a29ddb886a258112193282cd0409"],["/posts/39176dc0.html","fe146c579595b0bb88cba33799c853dd"],["/posts/3be6a165.html","0e7a7d746ed2d06d30011989e8edf0d8"],["/posts/3daf73b4.html","5a1d51ee35452ef49c017a2d885740d3"],["/posts/3e118dbf.html","32d07ceaaf5ec1fcaf232a60c4a13003"],["/posts/3f7d823a.html","41a39396f8c57879e2720d17a1510e15"],["/posts/3f978819.html","ca75e2697c8657424e417fef2fd3d91d"],["/posts/41dac80e.html","3c9382e104368354af96b6ec99583536"],["/posts/43945723.html","00188a9cbd65174c22e2584e07f6e69d"],["/posts/44124a6b.html","ec310aedc6707760835dc44c23abfc3d"],["/posts/47abb61d.html","98d6f19ad1f5abb560771c9b8072cf56"],["/posts/4996478a.html","19552cf399fdd74244a64a056eb43604"],["/posts/4b689be3.html","938605c95300f5e275a164a08af21eb2"],["/posts/4cf8423f.html","79d60568f58f4c27296febcc6aa3a00e"],["/posts/4dcf85c.html","405aff7aa90e2fd470b0586bd3a8be3d"],["/posts/500cd322.html","da73f01c21cbc2cc36e42cc311ecfde3"],["/posts/51c9b1ff.html","a3bf2284b23e6d29ecd9eabbf4728c99"],["/posts/52b5b3c6.html","223a9d0930e40fa4c607b73720516f4e"],["/posts/54f496ad.html","884a5f530793d155fe7cef233589914a"],["/posts/558e1f30.html","2a98b33f6777a34ed8c7eab5744e57e8"],["/posts/5d8bea92.html","f239d6bd85cb7000dcb9eaf55fe0be1e"],["/posts/5f6e0c59.html","4a1b3730369edfe3988ccc34bdc84a9c"],["/posts/61a63a84.html","cd2d0e28cbb3edce375980087a1730fc"],["/posts/625ab7bf.html","715a79f8bb0fe6fef338812ff643b317"],["/posts/6336a2f9.html","0933cb5d84bae543c630e1ecd7a8b46c"],["/posts/6432d61a.html","64e3ede9d8471eb1fdecbdeafd275ff2"],["/posts/6515f032.html","983b53a69d84841b84546ff11af13cb3"],["/posts/6720ccdd.html","93d04b898e756b979b806ac1ca3798d5"],["/posts/6a4b5ac8.html","9e8c0d0ea72a267b2b6cd1e33ba3b79f"],["/posts/6aa4177c.html","fe01e03ee0978bc0e709ff0daf1b4b1e"],["/posts/6b15f81f.html","3d4737682c3424bb361abdc7ebe2d615"],["/posts/71131d34.html","01fc1711a70faab0c36559fc115d65d1"],["/posts/742fd48d.html","f77b858c773c2d561ba14a46f903c3e4"],["/posts/78a8a8d3.html","b623125d1992515a6958056a95d92666"],["/posts/7a5ef3d0.html","27dd364ad24ff14535ed32f458be90f0"],["/posts/7b41e1ac.html","1c88117b3270bdccb690b86fad5d8d0f"],["/posts/7b51011d.html","9fd7adca3d6fcec776a330238df809b9"],["/posts/7e3aa3e2.html","573f8f8a4338137bb724be0d56256af3"],["/posts/80fe2691.html","d993fe801930cf4250062299d1a15ba7"],["/posts/81ac52e9.html","023c058c9bd602a7626e194d3b5eeefa"],["/posts/82332d11.html","cc43359206e29d6e671a23f991892d1e"],["/posts/8486f6f9.html","69dae67a9742d7f545deede33588c7ba"],["/posts/849b40f8.html","ee0e30976591b1d6a792ca7e83aff783"],["/posts/85c51d68.html","70243b5161e524299c80a48bbc41bc78"],["/posts/86a6c500.html","2148a05be5e64135a1ac2769fad4772d"],["/posts/886f8d3.html","c623b97314a8f70ca1968dc0564e4e3b"],["/posts/8a7cba10.html","d79df92f47cb2f0a9bc6577b5bd96fef"],["/posts/8ac11b41.html","8e826207a87baaf6422dd2d93046a649"],["/posts/8c3f2fd8.html","9485f5a1bb905019312ca7b7b1068459"],["/posts/8dd520d9.html","61cc2816221776e548d6d82b2224182f"],["/posts/8f555654.html","5a743e65104938e30f75bbf3be8f33da"],["/posts/92a980c2.html","db6b5928bf11d54107d4a6b5ba583a70"],["/posts/92ce16.html","da6579353b6a86341c479dc36e961f28"],["/posts/93e9943b.html","acf07f827881e54d8a873b0a8a03af46"],["/posts/94d3c794.html","f0b28936dda541391680cbea5326d727"],["/posts/96b281f2.html","57abfbba11bab5dfb47cf0e9bb5f3c0a"],["/posts/97f50eea.html","8678bf5524471fea7855b8c8d70d13eb"],["/posts/97fca8be.html","018bb9407b01fdc50937ddcf7c20bbc6"],["/posts/98662d05.html","0372645cb8612bfe2c03d3b42a17aad5"],["/posts/9a2f6162.html","2c7f7ba6d86e9299d726ba7e7794bc3d"],["/posts/9b22a48d.html","bcc4dbd1cebcf6f485af8ee9e7144e00"],["/posts/9cb455b1.html","a8f3500f5741055da9954d4c1d5c56e9"],["/posts/9ecdeecc.html","f652397fe0772e4469f8231f40f48496"],["/posts/9efd7701.html","b896712ac27a0955515b84f3af7a840b"],["/posts/9f61c1a0.html","1a39e0eb0ecce403877197d8083b6efa"],["/posts/a1de710.html","e537511f6bb912494e20532d466fe4f4"],["/posts/a30eb0cd.html","c60d44dc0028ed2f387eb1873897b211"],["/posts/a7634b5d.html","fe0a40a8d0543ac1a023dd52aebaf3db"],["/posts/a8c593b5.html","21d8afa4d43838f3172c2ebc911baff1"],["/posts/ad0c1efa.html","5b3f5f42c14c74bff1d31e927b63bc73"],["/posts/ada3f440.html","c596f5ca2928fa96370bc5185b133772"],["/posts/af1807ef.html","8fb9e03da7466c253df5a61dad0617f5"],["/posts/b397bf03.html","f832d5677b460cdfb6dc3ab67d160393"],["/posts/b497b647.html","07bcc0de0e7c42b132160e5b3941b78f"],["/posts/b4d464b0.html","b839f284612256d17c51445d8ec2dd20"],["/posts/b5fb773f.html","5ac15708f8fdcf3ad14f04bf92e5d419"],["/posts/b8d46b32.html","901677d8fca339cd8777de01efd95504"],["/posts/c1b2c6c9.html","dd5821db352d2b9b50a79bd8b0a1807a"],["/posts/c2111cbf.html","fb1d4719d1806501640012c697b21440"],["/posts/c316c2e8.html","60caef32274edfb0fa07f15e41617e28"],["/posts/c43e60b5.html","9a789d23d7319a46c3a8ab62ef838034"],["/posts/c497a412.html","5905ddaf2f4282729f9cf5cb7ace722a"],["/posts/c5395ba3.html","e15c24a9fa1a65897b932b5c31e5d4aa"],["/posts/c5de299a.html","4cafb94e5a8932cdcf7ea01aaf8bd6b9"],["/posts/c70bba9c.html","1ae35e3f191ec8a6d5af867c293408be"],["/posts/c797535e.html","3ba944cf63c99ca816a9c2e7ac2886ce"],["/posts/c7a62c79.html","14a2b5d09565e3111dd1f635ba8ddd60"],["/posts/cae2c959.html","4c4bc5c88db1411d7960f109dcf6a5cf"],["/posts/cbebef2b.html","5ffb97b311512645b28d1b347e39a937"],["/posts/cc4c0017.html","d1ae07566598e142bf803fd90781f414"],["/posts/ce25023e.html","bbee1134ae1b19af554c88a682fcba93"],["/posts/d2fd4837.html","f1092135694fd316446f6bd58a13d857"],["/posts/d3233cbb.html","e9b3240e01eeedc36d2a086731a1dab8"],["/posts/d3a745a8.html","ba3f5717b80e6624e78382e0b7260c6a"],["/posts/d7e940d2.html","4951765f6f12f759e09caa449956b94f"],["/posts/dc815d5.html","203fa0c94687de149932f8caf3b8943d"],["/posts/de25b0be.html","d5d37e67665939217af1f6c5d0cc476c"],["/posts/e2623b4e.html","4e7aa3dd940a708d7a2b80817741234a"],["/posts/e3ab6ad8.html","6a0209f96cc69f1b69324730213aeef6"],["/posts/e5018da6.html","88143c225a0f8ec96423d5f61459c745"],["/posts/e5963272.html","7e7108d7267026f4d9d0b7663fac75b9"],["/posts/e5ef4c3c.html","0461efba1abe81dd551c621bb8cab682"],["/posts/e624b065.html","61446adec142355d5e624902ff2b4372"],["/posts/e7c703bb.html","a0b6370ca91fa9eecfefdac9cc4bec38"],["/posts/e8f14b6c.html","bbadeb90526a84f80243f7641285a4c8"],["/posts/e91abb63.html","bfdb824773f08ef6acf55e6b933004a5"],["/posts/ea9a8808.html","92c078a12ffc9433caa85b097a7d188b"],["/posts/eb784749.html","aaaf697d89913ba5259b47e95124bc69"],["/posts/ebaf2232.html","68a8ebaf68a67c2b7558e4b46f091430"],["/posts/ed75f185.html","543015d4be95b5748d6067ca85a8c330"],["/posts/ee1ed673.html","c6bd049c9a6b1731401f8e4f2c6e330d"],["/posts/f0c3ed61.html","b8d89886a96e78c57fcb0fbba395dfc1"],["/posts/f151ff43.html","c8ee07d77347b8255cb0b5e58c370011"],["/posts/f21e7f84.html","f26e255689795c4f83583066671b0c47"],["/posts/f230b0fd.html","5908e5d10295e2848c4dc23adceb1927"],["/posts/f28a7877.html","fc075f69d39bef68089b2bb1962e899b"],["/posts/f663d5cc.html","59d63aba1e269a386b0edc0313cf7983"],["/posts/f730ad18.html","768ad26bb6dd9131025be8ca0d12ddb1"],["/posts/fb5d4608.html","aacc934d5ed03334d437c7da9eade3b2"],["/posts/fc04d0d4.html","774a519db17337814b31b199e905ea7d"],["/sumire/index.html","c8785db49835abac9d77962b220ee0be"],["/sw-register.js","2ec58e0dc1ba09be0c180cf9653b1a43"],["/tags/AKo/index.html","794a30b29c6528a1f684816efe393d92"],["/tags/APPLE-project/index.html","c7e29fc4d973d3bd44e1fc0df42a531a"],["/tags/Ankrache/index.html","ba8a92b9f650f49bbdc6aa989a681a96"],["/tags/BELL-DA/index.html","f2ffdee79c7e1d3d85f83abbacedf932"],["/tags/BL-Game/index.html","8720a050ecfd1c32904e570777eb78f6"],["/tags/Blue-Dahlia-Digital-Creators/index.html","373fc47bb8fd1b77c3ab43ee40409476"],["/tags/Blue-Line-Games/index.html","81af6c32714e0b5bb7b371b36191c970"],["/tags/CHUNSOFT/index.html","855c580310ed836719a9bf15c9fe1847"],["/tags/Check＆Stripe/index.html","8dbe2ba844bc977bdd9e0a34467eb0e9"],["/tags/Cherry-Pie/index.html","69a892cc0fb663cd3ea54275dfa59816"],["/tags/Circle-Mebius/index.html","64a131fbf9577461b7c402cd970282b6"],["/tags/CresCENT-BLANK/index.html","7f9d1bf264e8e5f9ea94d4c177311161"],["/tags/Dopamine-Software/index.html","0c23d1327fbe64e7d6b197ddd11b49cd"],["/tags/Dos/index.html","ed205f43cdf6b005ad36830c8b285bd6"],["/tags/Earth-Well/index.html","2134b6773bb6c248c89b5e2a3d346d99"],["/tags/Forest/index.html","096ff18b7012cdf0920e69c689bd8e2e"],["/tags/HaccaWorks/index.html","b49412891f9dbcc8364c8356aa816ae4"],["/tags/Kanon/index.html","b0aeef0be03eff083a1404dfb7504fd6"],["/tags/MANATSU-8/index.html","43a63c381bca4a6f8f995d079f11f04b"],["/tags/MARINE/index.html","60be2bd32b181e599f3fc65fcf1005f6"],["/tags/MIO/index.html","812e64541512979e5e0ede5b6ca7f7de"],["/tags/NAOX/index.html","7ae14a2967de6061f1e6d457b393effb"],["/tags/Namikaze-no-Uta/index.html","d835a7e1d209fbe689efec8971ceaa29"],["/tags/Nmyu/index.html","2057ce9cff4c7063551e13cb9edbc145"],["/tags/O-S-I/index.html","3769574ec68c78d1127af7d7ccd5c6da"],["/tags/Omegaの視界/index.html","780a5e14e34aea57600d371013eb2688"],["/tags/PC88/index.html","80a43aaaac0f25c95729489aac7377f6"],["/tags/PC98/index.html","7ebbc3e7909334d69cc887706a1c811d"],["/tags/Perpetual-Room/index.html","172faf4a4c1bf9b3cd8d3441d2b01fe2"],["/tags/Pleiades-Company/index.html","219b213ff495e823ee80ca9d5f23ccee"],["/tags/Project-Twintail/index.html","60df6253bfbd0c4a4b4940cd2447485c"],["/tags/RIFF-RAFF/index.html","30efae7c1433fb226cadb77c4ebc90fb"],["/tags/RPG/index.html","032ed8e06649fa00bd797a494ebf13a5"],["/tags/RPG2000/index.html","a6ec166a3f351ee6493a35c7a62bcbb3"],["/tags/Reverv/index.html","311f1feb8cee27ffc55719dea826a546"],["/tags/SENTIVE/index.html","38c825d7da99fa25239944f6e49fae0b"],["/tags/Saihate-SOFT/index.html","226e38c7c2168607ec06bcb60ae6ebe4"],["/tags/Scrubbing/index.html","351dd5b3ac32b75f1a0277d17651c803"],["/tags/Sky-On-R-imaginAtion/index.html","70b69011bbc3c3ab3810f7dee269c8fd"],["/tags/StrayMoon/index.html","bb9bfe6d22364535c82bfea9c9f560dd"],["/tags/Studio-Bu-Sa/index.html","239bccbf1968a3623308ddc22c6281c8"],["/tags/TRANSPARENCY/index.html","840a81d8b99c240d58bea43de4f7cee8"],["/tags/ToHeart/index.html","a544cc994f083a7e63bb17dcfac326d7"],["/tags/Traumend/index.html","877e8ae344826fe02d3abdda07ef4325"],["/tags/Witch/index.html","335c8b3fc2918409b981cb0ee8db1314"],["/tags/adonis-project/index.html","c4e46995b14198d06bc237e581227c5e"],["/tags/capriccio-suite/index.html","4782044e775ece78e4eb015b5257196b"],["/tags/flash/index.html","6a4772a2c2e44aee2fbd2ce55d37ba04"],["/tags/galgame/index.html","647aa7c9ff2da47f2bfb6396032002ab"],["/tags/galgame/page/2/index.html","fe598cc194d6117d3927978f1b10260b"],["/tags/gal资源/index.html","c438ac71eb97a1d5756e0b2a8174938d"],["/tags/gal资源/page/2/index.html","6bc43f2f73dc8f91be443d3f6dfd8a0f"],["/tags/gal资源/page/3/index.html","fd4eac9ea2a6d9cc5e8467b256160f6b"],["/tags/index.html","5e7bfcd39076f86620ca13cc973a6962"],["/tags/m-kz/index.html","d5869cd4bfdb042c1957a9a8709dea59"],["/tags/purgatory/index.html","a0333508edad8c0d80976c3945a369ae"],["/tags/rkr/index.html","327a8f8ba7102109c959fcce8eeeed96"],["/tags/team-eye-mask/index.html","2a5f25791e8d889ab89cb463b931e280"],["/tags/ありすくろいつ/index.html","c0ce0b769c064c04612e50e79ae49672"],["/tags/いつものところ/index.html","d9498f56803c2eb95b72494b323412cb"],["/tags/きつねみみ饅頭/index.html","a11756b8520325ef5cacdb45b90d5476"],["/tags/ねこねこソフト/index.html","c581938e0d01b7bf67ab7ce9671e1b51"],["/tags/ねこバナナ/index.html","25f06cdc86b063dd43a60f03d7ee019f"],["/tags/はちみつくまさん/index.html","81cbf7cd2b0efeef88d8042eecbb48a1"],["/tags/ろりちせ/index.html","88c21b977d2e3e2f24a21213f14e1c0a"],["/tags/アイル【チーム・TATU】/index.html","98787a0e748e98d35346213951313504"],["/tags/アクアポラリス/index.html","0f940095a427ae82817891a2898faa52"],["/tags/アークシステムワークス/index.html","e5dcc756872eaa76a4581c7df559c6ad"],["/tags/ブロッコリー/index.html","ecf5ef6ccce186068f900a2d27d0bb0a"],["/tags/乙女/index.html","1d251c63c04b9425d9c055210f8bafeb"],["/tags/乙游/index.html","8b70d594f908e8dc709d082816f95370"],["/tags/停产/index.html","b8da92f0cb366cee135e6c3a82dc5828"],["/tags/公告/index.html","ccebc1e1ab5d9aa980b3acdae32ee34c"],["/tags/同人/index.html","4864da50e2b54e8f976fec637b2deba6"],["/tags/堀井雄二/index.html","b5523ed6d3e1de95e7e4fa649dd675e4"],["/tags/外海なおき/index.html","64b11b13457ec8cd7e27f8cdcb23910d"],["/tags/女性向/index.html","1461532f725af162387698b85388551f"],["/tags/御茶ノ水電子製作所/index.html","7499cfcc9e8c625d571b8b54dd3cfb83"],["/tags/月の水/index.html","6fc7bfa0101804e16124f9d8ba224073"],["/tags/桃野衿/index.html","f74fdc29ef72317f285ef43818e49476"],["/tags/機械式少女/index.html","103f807a4ed316dfc89a5ee11d678241"],["/tags/水仙/index.html","1d08844e0414a106d70a2aa98e0ca898"],["/tags/汉化/index.html","19608b199f59b8052fe3355b6bf82b21"],["/tags/熊月温泉/index.html","3b2c7a948a5c935ad648be813fe33f61"],["/tags/片冈智/index.html","2b81993710a405f47b17129826dd87ac"],["/tags/片岡とも/index.html","81100f83fc917a7042a5ae96b50c4d52"],["/tags/牙の刻印制作委員会/index.html","ba3980961ab9d7b82d4021ecdd0d3d5b"],["/tags/牛カルビ定食-FLAT/index.html","e182b77f44e30b4e3cb8e9ee59490408"],["/tags/牧尾屋/index.html","c19b9608b9848487a57938f397fe7d94"],["/tags/犬茶屋/index.html","474e938b3debfc1f0f1008fb7f7f4a55"],["/tags/猫猫社/index.html","46eaa50f0f6f9d240e38c8bd1428ccab"],["/tags/王宮魔法劇団/index.html","d3c2c0fd2caaecef9eb949c31df7d0d0"],["/tags/画集/index.html","b10b5fdd2e8a654d2a8e8f49c995b215"],["/tags/索引/index.html","3102e99fba9f0ec93801af6fe78cb519"],["/tags/缺失/index.html","521e8904c8c81a87e30a0b5f42e6f0d9"],["/tags/自购/index.html","6bbd37a837f1e55f11bd836a6c9514be"],["/tags/茶葉☆姫/index.html","667be47faed380110d8c55fc31fa47fc"],["/tags/郷愁花屋/index.html","904a1ccafebb81c9efd64ff10b2bb732"],["/tags/閂夜明/index.html","62abd4042403b51872dfe0959a307f07"],["/tags/音乐美/index.html","2b92740130cf964fc84d7ec6615f7d39"],["/tags/黒†救/index.html","c2d806ba55223300dbf748fc5f1753d7"]];
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
