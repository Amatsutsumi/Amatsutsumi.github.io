/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","64e0d282f36d473c619cc86eacb7eccd"],["/archives/2024/04/index.html","207d98a5ad577f03427d03aea79b1b55"],["/archives/2024/index.html","cde470ecac190acb1fdf594d6959ae7d"],["/archives/2025/02/index.html","f621ef78905e2581b066653d4559b669"],["/archives/2025/02/page/2/index.html","1da508769c8ac82b6e40ecc88f1ab535"],["/archives/2025/02/page/3/index.html","54b0ebc6e3e2b835e11bae44f13a908d"],["/archives/2025/02/page/4/index.html","fcff321fdc2001c7735d68d42655cd22"],["/archives/2025/02/page/5/index.html","f8cb8c2578e84bdaa87f31e931de50fb"],["/archives/2025/03/index.html","208d9cb94f71a5b1d3c2ac9203c433a1"],["/archives/2025/03/page/2/index.html","f22c1126bfc3553f9c470019d7a8104c"],["/archives/2025/03/page/3/index.html","c4db321846fddc21fc255a5c74efca57"],["/archives/2025/03/page/4/index.html","fa7f04f257c22b3c65c6c8c19dfebc52"],["/archives/2025/03/page/5/index.html","219699cbe9bbaf093ca234f97a7fd471"],["/archives/2025/03/page/6/index.html","512305fcf21572a45b3d5d99a20ecfe9"],["/archives/2025/04/index.html","498ff07af442b54d546ef5a141cace6e"],["/archives/2025/04/page/2/index.html","28f9bfa3b73261281f8f5143e741a974"],["/archives/2025/04/page/3/index.html","d4818079387fbc54905ecd1374506a94"],["/archives/2025/05/index.html","263975ecd9d4140a01da3a4c16dce118"],["/archives/2025/index.html","a03e196c6fdcea40c63550a4c7676e6b"],["/archives/2025/page/10/index.html","bf8f184818c197f4a350769fb2984ba4"],["/archives/2025/page/11/index.html","ad5f56ac265167adfadeccc5b151955f"],["/archives/2025/page/12/index.html","0d4806b17a5d8f5a095b65e0c3b94245"],["/archives/2025/page/13/index.html","f5bc406c2964ffa2a79bf18d373277b3"],["/archives/2025/page/14/index.html","3f1520243b02ffa5e4e87e1568f0bb44"],["/archives/2025/page/2/index.html","2d1912cf60b010c1f26d1ad4f7cf5546"],["/archives/2025/page/3/index.html","3908ac28b429824d0ee01bcfd60a8bd7"],["/archives/2025/page/4/index.html","fedd9f22b0174465b77655c9062d7a2f"],["/archives/2025/page/5/index.html","0003f9ff1c93e7ad82af5227873bcdb8"],["/archives/2025/page/6/index.html","6a3e7860e5178adf61abf586d0ab292d"],["/archives/2025/page/7/index.html","dbbce5325495aeb413f406231f25aafb"],["/archives/2025/page/8/index.html","9fa4e34d36266e261373dd16052c516a"],["/archives/2025/page/9/index.html","17e1df673c1774ac9711eb7c0509610d"],["/archives/2026/02/index.html","0ed50e7d9995a9d9d37246bfcee70afe"],["/archives/2026/index.html","8d3b30aae75d9db5a371225e7985ba4e"],["/archives/2825/04/index.html","e217f582eb74ef66b8279ffb87580e3a"],["/archives/2825/index.html","0ecd760b1c206338455172bb207f24f2"],["/archives/2925/01/index.html","b710d0bf15ef2c6b985cc6387fec5f5b"],["/archives/2925/index.html","1b87c97f347450b90495df592dfa5cac"],["/archives/index.html","08cafccac7459a1d372992334ad3c8cd"],["/archives/page/10/index.html","786afecf9285b0727e0bb10b4c30bac6"],["/archives/page/11/index.html","727d1788a453d87803e34dbeccc59279"],["/archives/page/12/index.html","79511715787cc4fbbc2e52a9ce160a63"],["/archives/page/13/index.html","cf213fc7ec1873238d8142bd1662f663"],["/archives/page/14/index.html","9c08b81ab6cf9b25fabd0de172ba7ecf"],["/archives/page/15/index.html","9fe58a17b1ae33ab9372fbf2a9ff6c10"],["/archives/page/2/index.html","a27cf2763302a27e788889a642090930"],["/archives/page/3/index.html","3e3f8c82106fb1e13be9bac3397808f9"],["/archives/page/4/index.html","da4e0f9028a451225ba40a5422db1848"],["/archives/page/5/index.html","69aa06f3713ee4d53c5f58f03293370e"],["/archives/page/6/index.html","d90edc08ba59c132129c36c143b461bf"],["/archives/page/7/index.html","03dce46cd3b9eea2b285858ea71702e1"],["/archives/page/8/index.html","c2f67447d9b63096b5ab303f819118fb"],["/archives/page/9/index.html","32ea1a6905dbdf4278910fef22e9caf2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","a0906238e94f433cafb5b89921aca58c"],["/categories/galgame/page/2/index.html","e936c7890221205ea8b8536d83d18c9b"],["/categories/公告/index.html","0989a9ac7c18b74b63900cef2e390867"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","a2c24e9e1cbc97558aa29cfa691816be"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","03b91d2f05075b9f461a6c3c38066434"],["/page/10/index.html","27cabcc7395709e56835f31883be163d"],["/page/11/index.html","4d386457a850695f56e441bb7cfc48c6"],["/page/12/index.html","754bb6f4341c7037192ea0d1903d50d8"],["/page/13/index.html","e888227fc1926487b1a601a135715ffa"],["/page/14/index.html","e964fecd9de818b84a18e132cf02f7ba"],["/page/15/index.html","2dc189a1774af42fd51df4d4da573306"],["/page/2/index.html","1384932e443d7d34867162ad59b1c01e"],["/page/3/index.html","b381586a8b8982001c68445c4cefa12f"],["/page/4/index.html","4e3e78c50bb3338115e853a89351d69c"],["/page/5/index.html","44599aae2e1d427867465f036642a8ae"],["/page/6/index.html","34ca550f2179fe4adb51da9011b460cd"],["/page/7/index.html","5e464fe96d9c8cc881c5d0cf804d1c97"],["/page/8/index.html","ddef8a853b0379c6ef66911cb240e42f"],["/page/9/index.html","0671cb8b2b7d85ab85b459fcc6db20bb"],["/posts/10c9dd98.html","63cd0c148d84192c2825e08ff2d25c13"],["/posts/126ebb99.html","38be077683fa2ef9af3cf95aa0d7b495"],["/posts/1295b569.html","ad54488b3902e1dd9ed7d2d3233e06a4"],["/posts/1370342.html","ca4c797f906eba26131349d1898078fc"],["/posts/15ef14c2.html","4ebe00beea45f85919f6b3798010dd44"],["/posts/15f3959d.html","c12a25b550011723b3f1355278eb3964"],["/posts/18ab785d.html","a01af9dae80e8815a4844d0a1678dfaf"],["/posts/1d59b71f.html","ea341a1b45a5f37d38f7fc8eea5c15d6"],["/posts/20b3f3a4.html","61b56d2c31abc963f7d80f5e7e87cf5d"],["/posts/245f1c7d.html","b1caa74013439c1391ea405f6a5e42dd"],["/posts/252658f.html","316e97bdd3056b4cd6727440e148cbd6"],["/posts/28397adc.html","f5b018c84e8f3b906dc34f6b8b3d1f70"],["/posts/2ad07f54.html","0626d298f805ef1f3cef7a6cfed3eb6c"],["/posts/2b38bce0.html","7b387b5d87ebd8b2d8b0b9298c0e9520"],["/posts/2c0a6836.html","7e1d2703ab60a3574bf4123634236630"],["/posts/2ce39bcc.html","d79ae1f2886945cf475430b5c8bb2af5"],["/posts/2cf620f0.html","a72544cdd71efcc7b79690685ef50031"],["/posts/2e30fd6d.html","cd72a3c414e536853068357b2fbc1353"],["/posts/30a413ad.html","5bcb5b6981a823c4de8615e71d46c36e"],["/posts/34292736.html","22ac1d9f2ad69347e481da27ab6568cc"],["/posts/3468cbe.html","5382c42a639cd42dad87cf7d94acfd73"],["/posts/39176dc0.html","b69c82610759a328e181420e2616da54"],["/posts/3be6a165.html","6d7e49f676129e0e40f46b8feb1b4f17"],["/posts/3daf73b4.html","93d2e02e0a94d132cfea93cc2fe21364"],["/posts/3e118dbf.html","4b909864e83ae4cc2b3ecb9b48ac9c95"],["/posts/3f7d823a.html","72e1a0904aa5c4618feb9123d0f5bbe1"],["/posts/3f978819.html","058572a4b5536a4bbc7b8f8a86e2fd00"],["/posts/41dac80e.html","ed294b8c8f529e8b3acb694cf925a370"],["/posts/43945723.html","f876897a118f66f795ddae04a48fefb1"],["/posts/44124a6b.html","c37240a327baf9035814ee9ac0d82410"],["/posts/476a3006.html","7f1a4338206abca04e76d45dcf12f188"],["/posts/47abb61d.html","48f2c059be3eff308d5295c1a3c6649b"],["/posts/4996478a.html","7721690004e2de883230a1a19275f1f0"],["/posts/4b689be3.html","95c2c6b3b8550bb723bc9315cc3cc729"],["/posts/4cf8423f.html","29ee54a1e965042a384bfe208b1dba42"],["/posts/4dcf85c.html","5079404c933bc93c88544433c23f07b1"],["/posts/500cd322.html","49c4defdbe22548445a0eafe0affe08e"],["/posts/51c9b1ff.html","72eeac455dfb7945403a0fee558ebd7e"],["/posts/52b5b3c6.html","6f2b1da40263efc87ba5a03ee0468013"],["/posts/54f496ad.html","d9fe39b97640156e55ecbf8a7a87deff"],["/posts/558e1f30.html","5e7163f1b661ce0e95ec92eaa8fff4c2"],["/posts/5d8bea92.html","11d8acd1d1010fb1b34747a1282252a9"],["/posts/5f6e0c59.html","57152f01425030d010dfea3cbd1afb3e"],["/posts/61a63a84.html","4d220e5bfcea1ee67b8407584be00091"],["/posts/625ab7bf.html","8db11c0c0ff2aadbfbc0cc4e94bdf19c"],["/posts/6336a2f9.html","ff80df8a2e37eecb74d761ff28456d57"],["/posts/6432d61a.html","026a7a0c61ef51e94f111f84911b9528"],["/posts/6515f032.html","c44f827f13543a9e2a37733ff0e3382d"],["/posts/6720ccdd.html","c7ce6e14696b026af209f05a0ef7e950"],["/posts/6a4b5ac8.html","e7d38c5680b91f6f6bc3d7531c4a69a0"],["/posts/6aa4177c.html","24333f7f830cf64139ba5f305e244699"],["/posts/6b15f81f.html","467c4d294564579d206036d74523cbc2"],["/posts/71131d34.html","b3acbbb0a4cfe737006e584fdcda529b"],["/posts/742fd48d.html","c65cd91da5806a70994542e2d3a4cf49"],["/posts/78a8a8d3.html","78db7b232fd1b60dc62d5ed72005c72c"],["/posts/7a5ef3d0.html","81a405bca8e783a1aef1934bc05f2ffc"],["/posts/7b41e1ac.html","1a95b89e9b62985838069744f7655a16"],["/posts/7b51011d.html","570253fb8f689e1dabc9c8bb80754578"],["/posts/7e3aa3e2.html","dfdc18515eadacab7b850f59d55f6ea1"],["/posts/80fe2691.html","ca2b46a4db781cf819001c80b2547b6e"],["/posts/81ac52e9.html","0e49825fbd47dad39bb22de24e78f11e"],["/posts/82332d11.html","47e305ec8e3b048e616e944bf2e40aeb"],["/posts/8486f6f9.html","3a30fecdeb0b63f365d0ff3f9c9584d8"],["/posts/849b40f8.html","9a97c5d5765416e7a3166c1eaa1e5bec"],["/posts/85c51d68.html","da8a7fa7fdcca37d7ac5c2c625712b69"],["/posts/86a6c500.html","4bc1ef7730d75e39235c1a8399c96071"],["/posts/886f8d3.html","fd106a90407e19cba7d4a510ed0e58cd"],["/posts/8a7cba10.html","4282d5fd95c78d9a1b5d63bec5995ff4"],["/posts/8ac11b41.html","2cee24d8aad366ca0e5324afd35d4d4f"],["/posts/8c3f2fd8.html","7bb02a4086cd82e26dddec8a3d173acf"],["/posts/8dd520d9.html","d47c594f62e0d04c4993ad11a9d40337"],["/posts/8f555654.html","10b5ef7f1dc9c6068209313ea615bee8"],["/posts/92a980c2.html","9ba6cb99885b838893d92b4e05a818cc"],["/posts/92ce16.html","c194506daaba174be1b0b1d3d208d0a9"],["/posts/93e9943b.html","55ca1fa667b5f575986b3ae68e259796"],["/posts/94d3c794.html","d57ca1f5a54991664fbeba2491f8948a"],["/posts/96b281f2.html","a78be6a7b9d4f0d2c247707af0249360"],["/posts/97f50eea.html","a7db37aff92686a0a9a79f3a4c5aa43f"],["/posts/97fca8be.html","610e5f4746965d226600e164896a1945"],["/posts/98662d05.html","70b0220ae83a4bf147c221d991119a59"],["/posts/9a2f6162.html","44f2da06334776b62fc36616df0a1478"],["/posts/9b22a48d.html","f51cf896e4ccde474660885598d7eebe"],["/posts/9cb455b1.html","4b1c58ea416173e51ac2ea1c9ea3c6c1"],["/posts/9ecdeecc.html","3fd0b492e2d7e82e069b1f34ee62ba06"],["/posts/9efd7701.html","7303354a37ef4a7488190721bf861c78"],["/posts/9f61c1a0.html","08ae6f62683df767aef73b12f49140f7"],["/posts/a1de710.html","b4027664e8d3921d08b13f0170dd049b"],["/posts/a30eb0cd.html","064eb353b220dd19e9228be8ed9fc212"],["/posts/a72f71c2.html","e3277beed8f1bff3fd5c4d250f223f92"],["/posts/a7634b5d.html","c8d1273121dc44cc0667cec897344ffa"],["/posts/a8c593b5.html","1d95624b5ccb81375104f642f87cafa3"],["/posts/ad0c1efa.html","bcac7bcddd4410f9d30d9489fd0c4d52"],["/posts/ada3f440.html","6eb7d25e03b4a1f4099b3c299be060fa"],["/posts/af1807ef.html","ef553d1c33c2aa1ac9da10d4ebe29d7f"],["/posts/b397bf03.html","276d49e6754f04132a7995ac4b182300"],["/posts/b497b647.html","395475f5337fa25ea11452859afd4c43"],["/posts/b4d464b0.html","5c78a7affdb944fd3e5fee95e78ca03f"],["/posts/b5fb773f.html","fc7ac0621809f145cb07d947dbf5ea32"],["/posts/b8d46b32.html","1601c4a0720688db927838b4a6b27198"],["/posts/c1b2c6c9.html","9b40dc1358ea2e16f19bbb6844f5a343"],["/posts/c2111cbf.html","1c1d9d15bb6edddc8af9e3f63c657e32"],["/posts/c316c2e8.html","cf7cc1da8735bbe8ba937e1dd06fe7c1"],["/posts/c43e60b5.html","53bb6d505041f66fac17c857116e35f3"],["/posts/c497a412.html","112bf869227ce53f57b8a10bb755c94b"],["/posts/c5395ba3.html","5e1718c94de1a73f40a3c13c2b0f2472"],["/posts/c5de299a.html","25d0690cff4d083551f86aaf46124ec4"],["/posts/c70bba9c.html","3747a1359bdedd806568117236ddef4e"],["/posts/c797535e.html","7585d9aa4f51b4616e13e0fb8060ae9f"],["/posts/c7a62c79.html","9ec4389bd3564a0ad187c6c1aa4d60e7"],["/posts/cae2c959.html","db42cfbc1924380f84017f404a9dd068"],["/posts/cbebef2b.html","f5e41ad9ccf30890951f72bfed708a75"],["/posts/cc4c0017.html","ee20e3c205e9b189e801865e677bbc4b"],["/posts/ce25023e.html","3b520822fe8ce291e106b374cbbdafe4"],["/posts/d2fd4837.html","7ff8f2ab2360e6ce1cc05ac09952f182"],["/posts/d3233cbb.html","71dc1e8e075d826497df736ee5f9ad98"],["/posts/d3a745a8.html","b4e7665663f8c09c1f5225104946517d"],["/posts/d7e940d2.html","9bc12ff6718527c0c61f8f4d0d84a24a"],["/posts/dc815d5.html","3264f575ebaf76071c3ef44aa0dada73"],["/posts/de25b0be.html","2cd1a9d92182994c69d67ec108265c72"],["/posts/e2623b4e.html","270c93215d051567f8edb287229a0776"],["/posts/e3ab6ad8.html","f94249a4db274c06aeeb00574b33ee24"],["/posts/e5018da6.html","0bd4631f264a0967bf8407fd0c3b7070"],["/posts/e5963272.html","c3986e682f22ff6db67ff28edcb0f10d"],["/posts/e5ef4c3c.html","4d05465473b86fe49f0b287659162380"],["/posts/e624b065.html","1236eed28b93a3ea78aff8f5539507b6"],["/posts/e7c703bb.html","05c3e5b0f16a1ba33903e2c9402c5496"],["/posts/e8f14b6c.html","eb088be5423f759719fa4fd0f8e2df82"],["/posts/e91abb63.html","8e0f15e2e83f1a8fe5385a96a396dae1"],["/posts/ea9a8808.html","6323f0a9014b922467098085cbcecfad"],["/posts/eb784749.html","76ca7edd18b86804e8df3eb8b7e87283"],["/posts/ebaf2232.html","fcea3fe2ad61ba36bd9de0beb3df505f"],["/posts/ed75f185.html","f20fd24a449aca698bafa145785252e5"],["/posts/ee1ed673.html","eaca49106e93af53c9f7d8c44806073d"],["/posts/f0c3ed61.html","d86457062c3ed6d5464922e9e2117f4a"],["/posts/f151ff43.html","2ede8437b250a42966557c4d4604cf97"],["/posts/f21e7f84.html","5d28b417886ada85d32ad50a53b1dfff"],["/posts/f230b0fd.html","27c6a5fef34ecdd456802eae5a9b7328"],["/posts/f28a7877.html","00db463bd7dfefdc6a7162a5a193892c"],["/posts/f663d5cc.html","0498fef1b265798c9240b1bec9606055"],["/posts/f730ad18.html","e1548117cebfcbbf3c10e1000491df1e"],["/posts/fb5d4608.html","995b02e5f794e7464ef9cf756e8a1fbc"],["/posts/fc04d0d4.html","32cba95c4873fed3c38f3c7a2b1785b9"],["/posts/fc455f81.html","ba1ced2077d05f7e95a4bee729b73317"],["/sumire/index.html","457b4ad9953e7aa49f55e40b85dd0889"],["/sw-register.js","fa698454725d16daab7faf3f0883cd93"],["/tags/AKo/index.html","733de466fd33cd55b8e2df1d6b288c37"],["/tags/APPLE-project/index.html","fae0e7fc68cde1aa8c8c0c79182ff0a2"],["/tags/Ankrache/index.html","954e323adaa291897d6e69346bb7bd4c"],["/tags/BELL-DA/index.html","39a17964472cfc4cff46980838f5cde2"],["/tags/BL-Game/index.html","2f61ff30635908c7ef681096122dd99b"],["/tags/Blue-Dahlia-Digital-Creators/index.html","8ca7b317ec1433888e06f09cf64e8265"],["/tags/Blue-Line-Games/index.html","d5fc19f2f934b714cb260113495cbb55"],["/tags/CHUNSOFT/index.html","5fa8a5148c2f8df3fe7c39c0254b1a0e"],["/tags/Check＆Stripe/index.html","5fa685ef356bcbb5ee6365466fefa2f1"],["/tags/Cherry-Pie/index.html","3819c8c291fed8922304674575846597"],["/tags/Circle-Mebius/index.html","2dca0993fad7ecd2691f0d984458b50d"],["/tags/Cosmillica/index.html","0a02cac2c3dbff924724f77a4fb9b538"],["/tags/CresCENT-BLANK/index.html","afae30f6acb54b20d97a86f99f13142c"],["/tags/Dopamine-Software/index.html","8eceef6514b7f478b95d5244f2dea836"],["/tags/Dos/index.html","1bc13dad2614753ec4c92355fc913ea0"],["/tags/Earth-Well/index.html","41621e16ad4aef1a79b2e78567d489c7"],["/tags/Forest/index.html","47ec9b6b64005bb7aca9c8c19762f8fa"],["/tags/HaccaWorks/index.html","3b7926485f7ac255b1ab9970386e84e4"],["/tags/Kanon/index.html","decba7f116d290bb3a959dc9940b2a42"],["/tags/MANATSU-8/index.html","b321b0c8501309c12667732837a292a1"],["/tags/MARINE/index.html","fa6dc469d78db585b3de9c1d8185bcbf"],["/tags/MIO/index.html","a1e981c82d146f383460d4db58013060"],["/tags/NAOX/index.html","2dc0d5b30fd16b80b7a96ea30adc0d17"],["/tags/Namikaze-no-Uta/index.html","aa5ec7f22b2a8471852cb7c93b5a05cf"],["/tags/Nmyu/index.html","dcdaabb5411427f2842bd45bbefc1853"],["/tags/O-S-I/index.html","b256a27d7b9718c04905e9d409dd2a45"],["/tags/Omegaの視界/index.html","7359d60479d33c9608c7b55338009a1f"],["/tags/PC88/index.html","6ce9b73183c66829e45999ff618e8fbf"],["/tags/PC98/index.html","41b04230de7ec4dedc196c2cf6ae4205"],["/tags/Perpetual-Room/index.html","4044af839de15b2c8a8bf53febd21df4"],["/tags/Pleiades-Company/index.html","c3aa071f88da17947c0808a0eebfac81"],["/tags/Project-Twintail/index.html","5cb8c367b35b9c319ddec29f45fef6a4"],["/tags/RIFF-RAFF/index.html","67cfd5484974eca7f2f135300fdd78a0"],["/tags/RPG/index.html","6ae73e05526e47557f5e224287249983"],["/tags/RPG2000/index.html","34236e799ec50b7b6f33d9cd9d978d7a"],["/tags/Reverv/index.html","d31ec858ac846d5da699763b566037c8"],["/tags/SENTIVE/index.html","4dc84f0c0a90595cad71cf0d9904b87b"],["/tags/Saihate-SOFT/index.html","1c2ad42c2aff4fc96d460f91d32b5b11"],["/tags/Scrubbing/index.html","e8bd788eb115435d39fb559505d0794d"],["/tags/Sky-On-R-imaginAtion/index.html","ae4b8348906ed5c1649e5b6995569de5"],["/tags/StrayMoon/index.html","22cdbca314d4082e3fe155813c2af898"],["/tags/Studio-Bu-Sa/index.html","4f08d2439881fdca4dee769506fce2cb"],["/tags/TRANSPARENCY/index.html","d3406dd5dbd456f206dd224de4eaab9b"],["/tags/ToHeart/index.html","1b933d0fe40e9a7f599e0f94f380d608"],["/tags/Traumend/index.html","1c874451e0e40af7c8ba9dd92ea8faa3"],["/tags/Witch/index.html","374632dc0faf6b7671bdeff08f25d6ff"],["/tags/adonis-project/index.html","447640f48f8bcc122fad786869214d0b"],["/tags/capriccio-suite/index.html","ce416dde6f785b906f9d9d45c555451c"],["/tags/flash/index.html","f66238217e23620d6d625d69ca78bba5"],["/tags/galgame/index.html","d1f144e620266ab89b5a68df7b297b7d"],["/tags/galgame/page/2/index.html","515f22ec1bf6201ca799faed3e7f1bba"],["/tags/gal资源/index.html","4a772fd66b5699570c7a3c8eb652bc28"],["/tags/gal资源/page/2/index.html","b3a1231c3be425fc053649531ed1ee85"],["/tags/gal资源/page/3/index.html","e9aad9d516941b1cbbf2b71cf203204c"],["/tags/index.html","4ef4cc423c11bc18230a73300117bef3"],["/tags/m-kz/index.html","92e2decfe65ef400a460059c62e818ed"],["/tags/purgatory/index.html","46c456811521c91277c357051ac62ed2"],["/tags/rkr/index.html","ec4c5431a19c389e723a1b5066a28659"],["/tags/team-eye-mask/index.html","1bf65472a2f3aa87f304d80d600aa48a"],["/tags/ありすくろいつ/index.html","17a403caf210a6cec418cad74333033a"],["/tags/いつものところ/index.html","907d941fdcad99db41810534693f7adc"],["/tags/きつねみみ饅頭/index.html","d4834c5be196f674156fce7b2c48c9b4"],["/tags/ねこねこソフト/index.html","9aa60191864e52b9e02387c71a45c7b8"],["/tags/ねこバナナ/index.html","fa6609f6554ae1ed0f221cdd678e9e31"],["/tags/はちみつくまさん/index.html","658357ab102b359d0cbcee0e16d33842"],["/tags/ろりちせ/index.html","644b21818a42503a4e6b6d942f7c177f"],["/tags/アイル【チーム・TATU】/index.html","1677214321625f9ce7d305898f9f58f4"],["/tags/アクアポラリス/index.html","14409ddf49efc93d204ee9b2ea59112c"],["/tags/アークシステムワークス/index.html","d6cbf5d319ed198be05975e39e5362c7"],["/tags/ブロッコリー/index.html","97af225b8f51c0f9f94dd31aa6283818"],["/tags/乙女/index.html","a9090e7fa2c84a308710256a8f5f36ff"],["/tags/乙游/index.html","dd2c76446459a3c45ac35c862f7661f3"],["/tags/停产/index.html","9cd045553232d1c31314600b412b09d8"],["/tags/公告/index.html","aed6c23d2e3c2fe8819f2997032d7976"],["/tags/同人/index.html","737013d633e4d4e25e46e1440d49d231"],["/tags/堀井雄二/index.html","63352e37658c1c2db46d12f507e9c9fb"],["/tags/外海なおき/index.html","c4f6d0d5c6625a9c597ecebd1631696e"],["/tags/女性向/index.html","5d0fa03223cad80cbd5b5fdbb3d5e77c"],["/tags/御茶ノ水電子製作所/index.html","fb938987154ecb544ac73448719ebd11"],["/tags/月の水/index.html","7b6e2111f23a51a102bf6051df8f9218"],["/tags/桃野衿/index.html","aa989c52b2bac0958f06a88689ad7573"],["/tags/機械式少女/index.html","cadb0f3beb9dc454d4f6d4f325fef912"],["/tags/水仙/index.html","87e7747f39282a2db4bec328c8d14cda"],["/tags/汉化/index.html","679c9b64aed625a83a7338b815d2e022"],["/tags/熊月温泉/index.html","cce9d4b7fd7ff16e92357a2dd6005e11"],["/tags/片冈智/index.html","92cc95ea484667b3716ae66ce172dde8"],["/tags/片岡とも/index.html","ce545d6bb2f7d89dda5eef8fe77417ce"],["/tags/牙の刻印制作委員会/index.html","533b087598fcb95f2ea2a7ef5bf3f637"],["/tags/牛カルビ定食-FLAT/index.html","bf2edf514c70177a741658a407637926"],["/tags/牧尾屋/index.html","e7f55bbfd18d76e41acf239807c1a55f"],["/tags/犬茶屋/index.html","d8aecf3c72654699c1bf530a0ce204b7"],["/tags/猫猫社/index.html","96821daf31512ffe51ed14c930896590"],["/tags/王宮魔法劇団/index.html","77b5f17371e529e063d91184d4f8f266"],["/tags/画集/index.html","0d594c277612fb67abbc36dfb0788f87"],["/tags/索引/index.html","4f56db8d5fef72e28eb614e6afafd938"],["/tags/缺失/index.html","955d97a05c7fc5119f66bf40178a7360"],["/tags/自购/index.html","0e2194f9b14eddc8472c406bec344b07"],["/tags/茶葉☆姫/index.html","78604286b103f3243c4e63191452af5f"],["/tags/郷愁花屋/index.html","21693908593d54a749e43999570ff497"],["/tags/閂夜明/index.html","d56cd03c295852f5a004ea3dcc5d05be"],["/tags/音乐美/index.html","4107f0d301eedcbd249d90ac4c379f54"],["/tags/黒†救/index.html","8088fda0547882ca32e1e1fda68c1486"],["/tags/黒百合っ子大集合/index.html","462e15970e333fcdf164a44f751a5a4c"]];
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
