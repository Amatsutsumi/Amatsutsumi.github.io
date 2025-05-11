/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c0e27df0dddf54c631f698c84ed0bfed"],["/archives/2024/04/index.html","174b5178e1d1b3df904fb5f47b7e7722"],["/archives/2024/index.html","b14e8d87f0c20ed86da5fc48977b94e2"],["/archives/2025/02/index.html","120a790e0f5264568934a0b2dc7fa751"],["/archives/2025/02/page/2/index.html","569cb5e9a7396e0c6674b9ae687bff3e"],["/archives/2025/02/page/3/index.html","e57e83db133441409cef21d294292a50"],["/archives/2025/02/page/4/index.html","6328d6d3f4ec6bab0094f39ec6bc7739"],["/archives/2025/02/page/5/index.html","aeca8c3a79a3d01c93e6626ec1572b22"],["/archives/2025/03/index.html","610fdfa52b1160e668c166f3664f2e00"],["/archives/2025/03/page/2/index.html","82bf2130471c22beb51611358e2bb702"],["/archives/2025/03/page/3/index.html","ee42ff3c4ea7efc865282a746dcb5787"],["/archives/2025/03/page/4/index.html","bf31c22d2c67e9e7c1b47aac9469020b"],["/archives/2025/03/page/5/index.html","c8694c2067bb888011ce7a815721a1d6"],["/archives/2025/03/page/6/index.html","2c084ee751129fb2863e94d29c05777e"],["/archives/2025/04/index.html","04f05e2e5ba80ff0458ce2ef64d82a2d"],["/archives/2025/04/page/2/index.html","8cf451a36e3c24b06cf54d3978f6745d"],["/archives/2025/04/page/3/index.html","71d33e01045ac6c3bcacf5e3ddea3b8c"],["/archives/2025/05/index.html","af559fd73fc17754745fca37ab8a824b"],["/archives/2025/index.html","b4837295d5a6c32f35f98ae8d02ba7c0"],["/archives/2025/page/10/index.html","13aeecd2aef2bea92754fa2f9ea72db2"],["/archives/2025/page/11/index.html","0533c0b0a342cf6930deb7041fcd243a"],["/archives/2025/page/12/index.html","e49bca17a55a169e10fa80487167aece"],["/archives/2025/page/13/index.html","255bc1948105a513436a8364e40d41f5"],["/archives/2025/page/14/index.html","9f943899cc299789b038c362e011eb0a"],["/archives/2025/page/2/index.html","5617584f3f949d99a0f4e66d541c5414"],["/archives/2025/page/3/index.html","87b0206dec28fef916e1cded1131e2ff"],["/archives/2025/page/4/index.html","2c3456b0542969fce9ea841feaa62859"],["/archives/2025/page/5/index.html","d969e9c3468e0b90ce55ddaad95ef57e"],["/archives/2025/page/6/index.html","a86766dd4b1cbaa346c4134b5297bde6"],["/archives/2025/page/7/index.html","082f774179310b599b58bf80d87f6bd9"],["/archives/2025/page/8/index.html","331d18ef337b3dbea895181dd3bb942f"],["/archives/2025/page/9/index.html","a15485626b4e004da601e21fe21d04ed"],["/archives/2026/02/index.html","2ffd7c315e7eef7e30e1057da18eb85a"],["/archives/2026/index.html","3f830062b9a5d18566437b6faf793d95"],["/archives/2825/04/index.html","f77f1f4bd722cf6fa3843ff40ee7da24"],["/archives/2825/index.html","5b9dd1dff22b3d74a93ff95419e3809e"],["/archives/2925/01/index.html","52060a3efe578db94dc43801e51304bd"],["/archives/2925/index.html","18a763cd38aa0fe39c27be7fce9cbdfe"],["/archives/index.html","ad6200cfb92a638f8b5ca8eade1b95c9"],["/archives/page/10/index.html","573da514232589f390d5af0b4b5e0954"],["/archives/page/11/index.html","e6490293158a5bd73960dfdc234fc64f"],["/archives/page/12/index.html","abca53dd805fc820b6df7e7a49059e35"],["/archives/page/13/index.html","111f290f0ff5f0555ea8d90c89e8c369"],["/archives/page/14/index.html","a15ce68a81841d641c8a455223ad0ba1"],["/archives/page/15/index.html","9b743a1dde71b8e036c925bcca78adfd"],["/archives/page/2/index.html","91783173009e317b69e845d4a5906713"],["/archives/page/3/index.html","9afb691e4498ca124bd4d6cf95e27a50"],["/archives/page/4/index.html","8bc551fd7c51f12109edc6e98cf0992e"],["/archives/page/5/index.html","7e2b67c4eb36113c325436dd3fe8cbf9"],["/archives/page/6/index.html","0947bd184d71046c7b099946c71a5efa"],["/archives/page/7/index.html","231cbe7ab49842631a173fbdf0e6653e"],["/archives/page/8/index.html","074d27c7f13e5fd8d8ceea0815a0d5dd"],["/archives/page/9/index.html","b0ef84e5ad2703508cea529c1b5d2cde"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","3b8e0b7d5e5a00048fd472af857b7544"],["/categories/galgame/page/2/index.html","d4dd87bd6ea4aa7c1bbaeac930b0b324"],["/categories/公告/index.html","63f8dbbdaad73afe329bcd8885ada94c"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","56c02b516793688e325354cc78caa8f6"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","54cf787b22bab02d8c0c175d319d0fcc"],["/page/10/index.html","a944ccb8ae6d32e945f7200716dd4648"],["/page/11/index.html","bf2cdad66bd43738685a0543cf0ad944"],["/page/12/index.html","c60bd418a8fb76c90e67fbdc029ba848"],["/page/13/index.html","2d2749edcfb169a9568cb09bee71f163"],["/page/14/index.html","1506dde4e794cf74a554f4bb9a74cb2a"],["/page/15/index.html","f9fbc66d3d719fc3aa4916d7b13c7d93"],["/page/2/index.html","7a1cbd67132baa34e5c4ec2cadbd9f86"],["/page/3/index.html","47fcec00c4fab1fd323eac9e2c8e60b2"],["/page/4/index.html","a7a538e0e90d3a33edc8fe70832d9336"],["/page/5/index.html","305ce41440e9049b2916dd096a897d78"],["/page/6/index.html","137660321655e02ce9f63c6208456c5d"],["/page/7/index.html","ce632b17843a559ad5106a3e7b557d43"],["/page/8/index.html","7b0f0d118fcfa2ddedaa4470e846f49d"],["/page/9/index.html","9a30253b72e4ed717f153e297761ecf2"],["/posts/10c9dd98.html","6006388554c931a561b68d7d6b02766b"],["/posts/126ebb99.html","38be077683fa2ef9af3cf95aa0d7b495"],["/posts/1295b569.html","ad54488b3902e1dd9ed7d2d3233e06a4"],["/posts/1370342.html","ca4c797f906eba26131349d1898078fc"],["/posts/15ef14c2.html","4ebe00beea45f85919f6b3798010dd44"],["/posts/15f3959d.html","c12a25b550011723b3f1355278eb3964"],["/posts/18ab785d.html","a01af9dae80e8815a4844d0a1678dfaf"],["/posts/1d59b71f.html","f99b6e760cdd922cf033f84282fac2bc"],["/posts/20b3f3a4.html","47694b1e53300d647a3b1e2144b388b4"],["/posts/245f1c7d.html","b1caa74013439c1391ea405f6a5e42dd"],["/posts/252658f.html","316e97bdd3056b4cd6727440e148cbd6"],["/posts/28397adc.html","b3384cfd3a7b3ebdc8c3e3ca911c69f0"],["/posts/2ad07f54.html","0626d298f805ef1f3cef7a6cfed3eb6c"],["/posts/2b38bce0.html","7b387b5d87ebd8b2d8b0b9298c0e9520"],["/posts/2c0a6836.html","7e1d2703ab60a3574bf4123634236630"],["/posts/2ce39bcc.html","d79ae1f2886945cf475430b5c8bb2af5"],["/posts/2cf620f0.html","fae04edf3374f7f9113f875921d14194"],["/posts/2e30fd6d.html","cd72a3c414e536853068357b2fbc1353"],["/posts/30a413ad.html","8bab1eb556a1f2a272914a32fb3572aa"],["/posts/34292736.html","22ac1d9f2ad69347e481da27ab6568cc"],["/posts/3468cbe.html","5382c42a639cd42dad87cf7d94acfd73"],["/posts/39176dc0.html","b69c82610759a328e181420e2616da54"],["/posts/3be6a165.html","6d7e49f676129e0e40f46b8feb1b4f17"],["/posts/3daf73b4.html","93d2e02e0a94d132cfea93cc2fe21364"],["/posts/3e118dbf.html","4b909864e83ae4cc2b3ecb9b48ac9c95"],["/posts/3f7d823a.html","72e1a0904aa5c4618feb9123d0f5bbe1"],["/posts/3f978819.html","058572a4b5536a4bbc7b8f8a86e2fd00"],["/posts/41dac80e.html","ed294b8c8f529e8b3acb694cf925a370"],["/posts/43945723.html","f876897a118f66f795ddae04a48fefb1"],["/posts/44124a6b.html","c37240a327baf9035814ee9ac0d82410"],["/posts/476a3006.html","b13fb106cf43d8240ce9edbd32a6a1dd"],["/posts/47abb61d.html","48f2c059be3eff308d5295c1a3c6649b"],["/posts/4996478a.html","7721690004e2de883230a1a19275f1f0"],["/posts/4b689be3.html","270d2aace75d36277ef722a05d2dc148"],["/posts/4cf8423f.html","29ee54a1e965042a384bfe208b1dba42"],["/posts/4dcf85c.html","c6320253df744fba966b00291d19f6d7"],["/posts/500cd322.html","49c4defdbe22548445a0eafe0affe08e"],["/posts/51c9b1ff.html","72eeac455dfb7945403a0fee558ebd7e"],["/posts/52b5b3c6.html","dde56590807b447c42a35301822fbb2c"],["/posts/54f496ad.html","a01be79dac241e60741132a516d2b601"],["/posts/558e1f30.html","5e7163f1b661ce0e95ec92eaa8fff4c2"],["/posts/5d8bea92.html","11d8acd1d1010fb1b34747a1282252a9"],["/posts/5f6e0c59.html","57152f01425030d010dfea3cbd1afb3e"],["/posts/61a63a84.html","4d220e5bfcea1ee67b8407584be00091"],["/posts/625ab7bf.html","8db11c0c0ff2aadbfbc0cc4e94bdf19c"],["/posts/6336a2f9.html","d2981ec8943e14806d49e74daa2da401"],["/posts/6432d61a.html","026a7a0c61ef51e94f111f84911b9528"],["/posts/6515f032.html","214a351cc01abe0743afa5bfa0e51d36"],["/posts/6720ccdd.html","3009c4dc1935cc861721412c454b1a39"],["/posts/6a4b5ac8.html","3cb60c9b881ccdbeffa1df835b47421f"],["/posts/6aa4177c.html","24333f7f830cf64139ba5f305e244699"],["/posts/6b15f81f.html","467c4d294564579d206036d74523cbc2"],["/posts/71131d34.html","b3acbbb0a4cfe737006e584fdcda529b"],["/posts/742fd48d.html","014bf946f009008c19bd6dbc43f8d6de"],["/posts/78a8a8d3.html","e8db5787638ab46e6d52d6cf0bcb38b5"],["/posts/7a5ef3d0.html","81a405bca8e783a1aef1934bc05f2ffc"],["/posts/7b41e1ac.html","0bd05bdee9b570d5c3b50a90a42f9fb7"],["/posts/7b51011d.html","570253fb8f689e1dabc9c8bb80754578"],["/posts/7e3aa3e2.html","30a744630a88ee68f95a15435ec8eff8"],["/posts/80fe2691.html","ac93086a483812c1f039c98baa3bb45e"],["/posts/81ac52e9.html","d5e1363111c94348dab4d9da30117b93"],["/posts/82332d11.html","47e305ec8e3b048e616e944bf2e40aeb"],["/posts/8486f6f9.html","3a30fecdeb0b63f365d0ff3f9c9584d8"],["/posts/849b40f8.html","14d71ba2508a455c91a454cd18a05109"],["/posts/85c51d68.html","da8a7fa7fdcca37d7ac5c2c625712b69"],["/posts/86a6c500.html","4bc1ef7730d75e39235c1a8399c96071"],["/posts/886f8d3.html","0fa7bde8e52f62c48fffbb92be776aec"],["/posts/8a7cba10.html","4282d5fd95c78d9a1b5d63bec5995ff4"],["/posts/8ac11b41.html","2cee24d8aad366ca0e5324afd35d4d4f"],["/posts/8c3f2fd8.html","39d51ade7265bbbcc65c37d300431335"],["/posts/8dd520d9.html","d47c594f62e0d04c4993ad11a9d40337"],["/posts/8f555654.html","a1f1c66df2ea6a676791952fe063942b"],["/posts/92a980c2.html","9ba6cb99885b838893d92b4e05a818cc"],["/posts/92ce16.html","c194506daaba174be1b0b1d3d208d0a9"],["/posts/93e9943b.html","55ca1fa667b5f575986b3ae68e259796"],["/posts/94d3c794.html","d57ca1f5a54991664fbeba2491f8948a"],["/posts/96b281f2.html","a78be6a7b9d4f0d2c247707af0249360"],["/posts/97f50eea.html","a7db37aff92686a0a9a79f3a4c5aa43f"],["/posts/97fca8be.html","610e5f4746965d226600e164896a1945"],["/posts/98662d05.html","05af620eb1021fdd312b437c8942fffd"],["/posts/9a2f6162.html","44f2da06334776b62fc36616df0a1478"],["/posts/9b22a48d.html","f51cf896e4ccde474660885598d7eebe"],["/posts/9cb455b1.html","4b1c58ea416173e51ac2ea1c9ea3c6c1"],["/posts/9ecdeecc.html","3fd0b492e2d7e82e069b1f34ee62ba06"],["/posts/9efd7701.html","7303354a37ef4a7488190721bf861c78"],["/posts/9f61c1a0.html","08ae6f62683df767aef73b12f49140f7"],["/posts/a1de710.html","b4027664e8d3921d08b13f0170dd049b"],["/posts/a30eb0cd.html","064eb353b220dd19e9228be8ed9fc212"],["/posts/a72f71c2.html","6ed47bbd18a7b2f8f4eabbf8eb2e4aa7"],["/posts/a7634b5d.html","c8d1273121dc44cc0667cec897344ffa"],["/posts/a8c593b5.html","1d95624b5ccb81375104f642f87cafa3"],["/posts/ad0c1efa.html","bcac7bcddd4410f9d30d9489fd0c4d52"],["/posts/ada3f440.html","ec945259da6cc4668e7c0690b5ebd7f3"],["/posts/af1807ef.html","ef553d1c33c2aa1ac9da10d4ebe29d7f"],["/posts/b397bf03.html","276d49e6754f04132a7995ac4b182300"],["/posts/b497b647.html","2184047c895cd787c760443e12b115f1"],["/posts/b4d464b0.html","5c78a7affdb944fd3e5fee95e78ca03f"],["/posts/b5fb773f.html","137fcb6dcb7ce07e90b0922047b2d4d0"],["/posts/b8d46b32.html","1601c4a0720688db927838b4a6b27198"],["/posts/c1b2c6c9.html","9b40dc1358ea2e16f19bbb6844f5a343"],["/posts/c2111cbf.html","1c1d9d15bb6edddc8af9e3f63c657e32"],["/posts/c316c2e8.html","f9b1f721ee71b595139f3651bcab1f4f"],["/posts/c43e60b5.html","53bb6d505041f66fac17c857116e35f3"],["/posts/c497a412.html","9c7568b057cb28ca9013011a142f48e3"],["/posts/c5395ba3.html","5e1718c94de1a73f40a3c13c2b0f2472"],["/posts/c5de299a.html","25d0690cff4d083551f86aaf46124ec4"],["/posts/c70bba9c.html","3747a1359bdedd806568117236ddef4e"],["/posts/c797535e.html","7585d9aa4f51b4616e13e0fb8060ae9f"],["/posts/c7a62c79.html","9ec4389bd3564a0ad187c6c1aa4d60e7"],["/posts/cae2c959.html","79cbb412e6b22f45867328c6d51ace1c"],["/posts/cbebef2b.html","1496355e9992d04bbeffd5f78ee43050"],["/posts/cc4c0017.html","ee20e3c205e9b189e801865e677bbc4b"],["/posts/ce25023e.html","210042488836942a2c63bee7cc51e68d"],["/posts/d2fd4837.html","35db77d0181f75884cadbc852018cc59"],["/posts/d3233cbb.html","71dc1e8e075d826497df736ee5f9ad98"],["/posts/d3a745a8.html","4150bc77e602cb9ea3f835ba103c07c7"],["/posts/d7e940d2.html","9bc12ff6718527c0c61f8f4d0d84a24a"],["/posts/dc815d5.html","1cd485abb96b5fe7528bde592be412ae"],["/posts/de25b0be.html","2cd1a9d92182994c69d67ec108265c72"],["/posts/e2623b4e.html","270c93215d051567f8edb287229a0776"],["/posts/e3ab6ad8.html","f94249a4db274c06aeeb00574b33ee24"],["/posts/e5018da6.html","a33bbf12efd88c84918d78cd616d5829"],["/posts/e5963272.html","c3986e682f22ff6db67ff28edcb0f10d"],["/posts/e5ef4c3c.html","4d05465473b86fe49f0b287659162380"],["/posts/e624b065.html","df6fdbf4526634220dd0fa5f78bd509c"],["/posts/e7c703bb.html","05c3e5b0f16a1ba33903e2c9402c5496"],["/posts/e8f14b6c.html","eb088be5423f759719fa4fd0f8e2df82"],["/posts/e91abb63.html","8e0f15e2e83f1a8fe5385a96a396dae1"],["/posts/ea9a8808.html","6323f0a9014b922467098085cbcecfad"],["/posts/eb784749.html","76ca7edd18b86804e8df3eb8b7e87283"],["/posts/ebaf2232.html","fcea3fe2ad61ba36bd9de0beb3df505f"],["/posts/ed75f185.html","f20fd24a449aca698bafa145785252e5"],["/posts/ee1ed673.html","eaca49106e93af53c9f7d8c44806073d"],["/posts/f0c3ed61.html","d86457062c3ed6d5464922e9e2117f4a"],["/posts/f151ff43.html","d7daff3a80d98478a42fd3853081e06d"],["/posts/f21e7f84.html","3e6a7d1f04e3bd69eb0bf4bba73934a4"],["/posts/f230b0fd.html","fcd924ea2aca64931af347d6292eee12"],["/posts/f28a7877.html","7937feeafd8896c9930a6a18c1007567"],["/posts/f663d5cc.html","0498fef1b265798c9240b1bec9606055"],["/posts/f730ad18.html","e1548117cebfcbbf3c10e1000491df1e"],["/posts/fb5d4608.html","e41ec7bd82f1789873181adce0bec5f9"],["/posts/fc04d0d4.html","32cba95c4873fed3c38f3c7a2b1785b9"],["/posts/fc455f81.html","c6e41915f305d76eae71145d569495d8"],["/sumire/index.html","c96718cb25e7c6058115453cdb43aba2"],["/sw-register.js","27587bddab27a75c55ac81b67f4641d3"],["/tags/AKo/index.html","42c73a0d102c5a411334bc1c1e812868"],["/tags/APPLE-project/index.html","5bc987a26231dae9cfa73b5bd800b210"],["/tags/Ankrache/index.html","90c3bd10227e20a706c3ec45d7e74692"],["/tags/BELL-DA/index.html","4c2fb79c530f4c19d25c22cae8a69650"],["/tags/BL-Game/index.html","d95e9cb75e6c64f7b45b9b0411c19630"],["/tags/Blue-Dahlia-Digital-Creators/index.html","dc765abb3213462fd7fd0f4a7e1a78e8"],["/tags/Blue-Line-Games/index.html","1013e16dac0258bed21e4baf8033d92e"],["/tags/CHUNSOFT/index.html","0713e16a668a4b7aa24c4002d4cd70a0"],["/tags/Check＆Stripe/index.html","3338716a87c7858eee78246ddfaa0479"],["/tags/Cherry-Pie/index.html","1a2d3a61bc7702ea6ea20ee0f0ad3b7b"],["/tags/Circle-Mebius/index.html","91b7a6e78513f574fb4085468e547561"],["/tags/Cosmillica/index.html","772daaf0cdf979843ad58b130db4cd40"],["/tags/CresCENT-BLANK/index.html","f4585d7dd38f006464c8db1f640bf26e"],["/tags/Dopamine-Software/index.html","cfe6c9f8c8620ae7f0fcba8028b3de1d"],["/tags/Dos/index.html","6ef793cb1e08c8dba46926db1a9d5b6e"],["/tags/Earth-Well/index.html","a5e36f249328c0f8d1e90031a5d7e508"],["/tags/Forest/index.html","1765f450ef9b1a6d40848cf19f043e6b"],["/tags/HaccaWorks/index.html","db2d8687066c2485f8aaeac04ee32423"],["/tags/Kanon/index.html","f3db41b732a3d4b7ec086b76e5c7e422"],["/tags/MANATSU-8/index.html","b904599b82230b90d24ea8cef9f0468e"],["/tags/MARINE/index.html","75cf4539139b215e526d0d14205ba4c6"],["/tags/MIO/index.html","8e8e073511165ce81f88313c03fe3dd4"],["/tags/NAOX/index.html","134df2362365397f261c0ec2b1001a21"],["/tags/Namikaze-no-Uta/index.html","482a81565b88005a789687d2f1ec2a40"],["/tags/Nmyu/index.html","d7b941a4e08d9fc93a4a7332524fe2f2"],["/tags/O-S-I/index.html","0bba31fc7b8c3c2a87f52cd4f9515d2b"],["/tags/Omegaの視界/index.html","7a05478c7bbf1f8a83e2acf1fe9d181f"],["/tags/PC88/index.html","037187c23fef712bc74a174644ca1c50"],["/tags/PC98/index.html","8bc7eabd29f106a814b6bc2244085f8a"],["/tags/Perpetual-Room/index.html","1535d4d9131445a79941afcb229c6643"],["/tags/Pleiades-Company/index.html","e3e8da74930253014a1978f4440d0abc"],["/tags/Project-Twintail/index.html","c408a333ac3a7c48b1fee413b64c356f"],["/tags/RIFF-RAFF/index.html","023762a48a93c6a054faad6a274ef363"],["/tags/RPG/index.html","a1236bb3a522726e202f993cf10f0cd8"],["/tags/RPG2000/index.html","e38ffb3de27d9d05baa4d3a915b98631"],["/tags/Reverv/index.html","44474d6bb428e260896ecf15ac7f9654"],["/tags/SENTIVE/index.html","bba39c676de9958b34f759419905ea9b"],["/tags/Saihate-SOFT/index.html","69ebf139a1211afc67c2301b805d0e03"],["/tags/Scrubbing/index.html","65f9909791e4168eb87eeae5ab1067a6"],["/tags/Sky-On-R-imaginAtion/index.html","3a889eed082b0292ae4dc5e2ecc76cde"],["/tags/StrayMoon/index.html","280e8a1aebbce539a88d3c6b7df00474"],["/tags/Studio-Bu-Sa/index.html","1f197df43c3ba9df900ca1594c8b6b96"],["/tags/TRANSPARENCY/index.html","1bc32bfe3037d31f9738cd674d558344"],["/tags/ToHeart/index.html","55165031a5bc5dfd590a124858e1c294"],["/tags/Traumend/index.html","5b23fd1d6cc5328ef143579f5b9b4725"],["/tags/Witch/index.html","23e250b201b87ee2c90d6e8742755306"],["/tags/adonis-project/index.html","1424b0aadf9bf300de79820eaa32e6d6"],["/tags/capriccio-suite/index.html","039124fb7ef9717b63ee36097f0e4cfb"],["/tags/flash/index.html","3a06ba29df11535af9da37e8fca2c7bc"],["/tags/galgame/index.html","437c31d16f8c87bbedff3dca3ff0ba19"],["/tags/galgame/page/2/index.html","a64ac401e91001ebbe054a2f9b81b822"],["/tags/gal资源/index.html","da66a9c6ad61c1484b0d93afc8cc2a0b"],["/tags/gal资源/page/2/index.html","64ab359a611ee4b149cd763c986ebac5"],["/tags/gal资源/page/3/index.html","402e1eabac7f27e3055733d2267ac9b1"],["/tags/index.html","837193006df0671249f016666196f784"],["/tags/m-kz/index.html","cec2c1cf89c5c2ac1a094c7842a10cf2"],["/tags/purgatory/index.html","93019cb19ae7504651359b37bfd74b49"],["/tags/rkr/index.html","4cec2be4298d66779d05a879039bb12e"],["/tags/team-eye-mask/index.html","e3e9cc1e94e15a5143cf5ba9bba59b31"],["/tags/ありすくろいつ/index.html","dfbe796eb0dd29ee08a9bb4d5ece5eaa"],["/tags/いつものところ/index.html","e1d3adaa2987de498ab19fe4e95657d5"],["/tags/きつねみみ饅頭/index.html","081d59bb6e040e90532164ba7e7cbeab"],["/tags/ねこねこソフト/index.html","e2c83b4afaa5db09093ce3ae1cdc8546"],["/tags/ねこバナナ/index.html","a699bed24948edf1103e940dfcf653a3"],["/tags/はちみつくまさん/index.html","e164c7655b899c951ba9a8bab2bd5bde"],["/tags/ろりちせ/index.html","e71903c69e706a68f35ecea98d7c5e8e"],["/tags/アイル【チーム・TATU】/index.html","af493f78d7a855f5f6e7222d0022147a"],["/tags/アクアポラリス/index.html","56634bbdff44ff2bcc0e8123cf9919c9"],["/tags/アークシステムワークス/index.html","49782d81df0e91361317fbbfd26f25e0"],["/tags/ブロッコリー/index.html","a8a96a9fd87a5adae6adc0e040264d5a"],["/tags/乙女/index.html","7dddd0dd8729fe980f349b1d33cbd7e1"],["/tags/乙游/index.html","232d982df0a2c5f98f58960b8f9ad40e"],["/tags/停产/index.html","b976af83c665d0596a50a2ea40bb3380"],["/tags/公告/index.html","d95a1979df04b0cdf0b8530c0be1d0e9"],["/tags/同人/index.html","ce7633ff89c6d8019fb36ac5213e90af"],["/tags/堀井雄二/index.html","14233f1d7361cb248eb8a3b3cf55c7c0"],["/tags/外海なおき/index.html","c17574991a3e991b2c45f8d6eef8a714"],["/tags/女性向/index.html","0a2e0110009a8307fbf0f30da1f695bc"],["/tags/御茶ノ水電子製作所/index.html","bd573ee83c47d8e37f8f0eaaeebeca66"],["/tags/月の水/index.html","f8673a42d1d8700ab8d8d6ab1cbc4bc9"],["/tags/桃野衿/index.html","ca58ab64342b43d56631a61c5bdf54e3"],["/tags/機械式少女/index.html","04a60cab17126faa80097f4b4e7d5b7e"],["/tags/水仙/index.html","4bc4bf7cd7526212ee10f3fb33d336cc"],["/tags/汉化/index.html","7302f085347d133b031d633edacb3723"],["/tags/熊月温泉/index.html","2aea991e9f336211a6602591ee835358"],["/tags/片冈智/index.html","8de8c92bbb4a1fcb0c3a2a58ada2babd"],["/tags/片岡とも/index.html","4b68c906bb5b0cdf2c1fb72a2335222f"],["/tags/牙の刻印制作委員会/index.html","fdf5a360d1a7a113285cda4bf235ce86"],["/tags/牛カルビ定食-FLAT/index.html","c04ce0b075154032d3108cddc16e38e2"],["/tags/牧尾屋/index.html","bb344a2c8821dd947cb3d07227021b83"],["/tags/犬茶屋/index.html","d10aefb4fdef4e67767d98aa358755e2"],["/tags/猫猫社/index.html","fabf13722258047b863f612c4f6b525e"],["/tags/王宮魔法劇団/index.html","04ef4b8aab305c5a2c173d3e6fc1f108"],["/tags/画集/index.html","b999fe3816cc900d7a05c64b282f6965"],["/tags/索引/index.html","38d68d9091a80a35f9bf0be9e5087040"],["/tags/缺失/index.html","ea29181deebd74770d9dae5c391e3198"],["/tags/自购/index.html","4b1030a55629f50eb2c80fcb6be01b9e"],["/tags/茶葉☆姫/index.html","b2d07da47fe11c2e4b1ee6a25a4e3a8e"],["/tags/郷愁花屋/index.html","bdbd00932f7337208db2c13e483f4e58"],["/tags/閂夜明/index.html","cf4d9f85b738505f96b8cc6380fb9c40"],["/tags/音乐美/index.html","1c37625b05d9020a60262658e56cdc84"],["/tags/黒†救/index.html","baeaad86bcaeb62cd5f726f07aa819e1"],["/tags/黒百合っ子大集合/index.html","22d282eaef1bfe3e70aa6b573617ea1a"]];
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
