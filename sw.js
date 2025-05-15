/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c8217f4e7cad5ea325c13ed86fa3a035"],["/archives/2024/04/index.html","cc57dc01be7ca000c8617dd4717cbab5"],["/archives/2024/index.html","59c4790750e32bbffcc25c4760f175fa"],["/archives/2025/02/index.html","a432e247ab445720e7b47e9baf4e8592"],["/archives/2025/02/page/2/index.html","4cb04ecbbb87d697e48fab89639a53cf"],["/archives/2025/02/page/3/index.html","650a86c14954a8c0749b96a95b246c1b"],["/archives/2025/02/page/4/index.html","4f05e434da400a698cdf6196673f233e"],["/archives/2025/02/page/5/index.html","7662b0f132b0aaf9efa7df9a0e67b9ad"],["/archives/2025/03/index.html","f8a8342c99584e90c98f0406bad21b0a"],["/archives/2025/03/page/2/index.html","52ec8f1c4b2d90bcedfece07915a4411"],["/archives/2025/03/page/3/index.html","60cc24201fe2a01e39df71e8676fb2f7"],["/archives/2025/03/page/4/index.html","3f3bfddf63838e62c20777d620ee53a8"],["/archives/2025/03/page/5/index.html","d9d9a7d29b14b8d2cfdadca513f25c80"],["/archives/2025/03/page/6/index.html","7ecfc11072205b093b68be6605342765"],["/archives/2025/04/index.html","b081762cc702fbabd473e4de35c9b818"],["/archives/2025/04/page/2/index.html","38dd84f9ea6600b8d9acca7ce40fd226"],["/archives/2025/04/page/3/index.html","c231d1e271b6447d9d10fdb913055fc2"],["/archives/2025/05/index.html","ca85ee2c529e76a51c02ce9296f58312"],["/archives/2025/index.html","6d1bb6b7327fa0f171da62d4363371d8"],["/archives/2025/page/10/index.html","7999096f5e62ad806b1d635a3dbc8ffb"],["/archives/2025/page/11/index.html","7818e7d34bc3ce637bcd089b38daba5b"],["/archives/2025/page/12/index.html","5624afb56a2c933a2b323a5e4e6b7f47"],["/archives/2025/page/13/index.html","5b0c8a07d0f096705b5901d8cb0ea5ad"],["/archives/2025/page/14/index.html","301389ecb161d211a76eaf5acfa3c8d2"],["/archives/2025/page/2/index.html","31499a7e7889bd04385ab3a119f9fe33"],["/archives/2025/page/3/index.html","5e73745d2f028080351994b53389bd4b"],["/archives/2025/page/4/index.html","51a94a95c34762d28948d8d81a910100"],["/archives/2025/page/5/index.html","9fcc8dcabd23dc6d6abc5285d107dd19"],["/archives/2025/page/6/index.html","c67da78c967843007190f690041cfab5"],["/archives/2025/page/7/index.html","f032d32226fb3fd6bb81b07d2530b7b4"],["/archives/2025/page/8/index.html","f69f56c5deab8bdf9db2e4f86f6ac542"],["/archives/2025/page/9/index.html","12aae1a066976657965c334a9d394d26"],["/archives/2026/02/index.html","46f946853e16694c8b13dc7dba1a711a"],["/archives/2026/index.html","829a406c0b824eab1f7bfba2b2701ac8"],["/archives/2825/04/index.html","f9d416de623173df2424b51e9c31fb80"],["/archives/2825/index.html","441898a8f8630923f85d760f28296eac"],["/archives/2925/01/index.html","b3c48af9b17fd7ebfac38730d7d401df"],["/archives/2925/index.html","b743eca71e36486041e3815d1ded9c47"],["/archives/index.html","1c2c69ff10621cbcaea39e342f9433a6"],["/archives/page/10/index.html","285a616c1a4923bc60b13ccd53d5513d"],["/archives/page/11/index.html","fcfa5b44ec5cf18fb17c78886cbe3de3"],["/archives/page/12/index.html","ac179983a5f67731b6da85a8cf2266ef"],["/archives/page/13/index.html","d6b434ea344e58d751275c7b229662a6"],["/archives/page/14/index.html","188264047abf64d3bcb1f39fa6dffc66"],["/archives/page/15/index.html","e1e86d0205f44b1100ac36d9e7ca0003"],["/archives/page/2/index.html","3a9821ba826ce96ae63d4dec8a73c9d8"],["/archives/page/3/index.html","602492445580481dd4a8b6a8aad1daaa"],["/archives/page/4/index.html","40ab71ef159a09875be2a628043196f6"],["/archives/page/5/index.html","a14ff87c5da0d3c37f057d5ec6083fd0"],["/archives/page/6/index.html","688777cee9d5d56c4f46b2e62fcb7d51"],["/archives/page/7/index.html","a4e2d2766f92222ec1e81f877435354a"],["/archives/page/8/index.html","be1b4294bc9a0b3230df14a5cb68a642"],["/archives/page/9/index.html","858530b97c8a4d36fc60b45ea54853ad"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","be485e4921595ff61a26ad7c4e78bc47"],["/categories/galgame/page/2/index.html","c3cb0d825d83cab39dccf8f99e346084"],["/categories/公告/index.html","222ec0ef2cd57bda984bdba00632adf7"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","e5cbe484f9d4873994e211562af26b46"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","5688bcd490ddf2827429cfa31adf05b3"],["/page/10/index.html","94d41e745b18f905088a30fd17b48237"],["/page/11/index.html","6d1adace7d6d938ead2bb25689ac6825"],["/page/12/index.html","08682f8ff02cf96cd170e22497827105"],["/page/13/index.html","28864c4ae8c46df2a80dd0c0654d0f40"],["/page/14/index.html","8a72c9546edc88ab9d21ef56b6e9e54f"],["/page/15/index.html","82eee5c97b342a8cd5a793188d4873eb"],["/page/2/index.html","01424c0376efd20bc4dcdc5ad4867741"],["/page/3/index.html","1c4b992df308c411a711c5e256d31051"],["/page/4/index.html","592fdd9fe2a73d85b535898e3ae937ff"],["/page/5/index.html","1d85c3e0e0bfe303d06ca976e1b4ab62"],["/page/6/index.html","f7e77cc6ec07b98d3299b79bb38e0bc1"],["/page/7/index.html","0de30c3a8085f67098117e3c77b22946"],["/page/8/index.html","7cccdb46a7274b3c6c0070f5007ccd1f"],["/page/9/index.html","12ef993ec87e32a0c46a0e38f62f65c9"],["/posts/10c9dd98.html","6006388554c931a561b68d7d6b02766b"],["/posts/126ebb99.html","38be077683fa2ef9af3cf95aa0d7b495"],["/posts/1295b569.html","ad54488b3902e1dd9ed7d2d3233e06a4"],["/posts/1370342.html","ca4c797f906eba26131349d1898078fc"],["/posts/15ef14c2.html","1891bb9f6390d119f171c36918a9b946"],["/posts/15f3959d.html","c12a25b550011723b3f1355278eb3964"],["/posts/18ab785d.html","a01af9dae80e8815a4844d0a1678dfaf"],["/posts/1d59b71f.html","f99b6e760cdd922cf033f84282fac2bc"],["/posts/20b3f3a4.html","47694b1e53300d647a3b1e2144b388b4"],["/posts/245f1c7d.html","b1caa74013439c1391ea405f6a5e42dd"],["/posts/252658f.html","316e97bdd3056b4cd6727440e148cbd6"],["/posts/28397adc.html","f5b018c84e8f3b906dc34f6b8b3d1f70"],["/posts/2ad07f54.html","0626d298f805ef1f3cef7a6cfed3eb6c"],["/posts/2b38bce0.html","7b387b5d87ebd8b2d8b0b9298c0e9520"],["/posts/2c0a6836.html","7e1d2703ab60a3574bf4123634236630"],["/posts/2ce39bcc.html","d79ae1f2886945cf475430b5c8bb2af5"],["/posts/2cf620f0.html","fae04edf3374f7f9113f875921d14194"],["/posts/2e30fd6d.html","cd72a3c414e536853068357b2fbc1353"],["/posts/30a413ad.html","44bae76bbe6b3597de0feab710b3d49e"],["/posts/34292736.html","22ac1d9f2ad69347e481da27ab6568cc"],["/posts/3468cbe.html","5382c42a639cd42dad87cf7d94acfd73"],["/posts/39176dc0.html","b69c82610759a328e181420e2616da54"],["/posts/3be6a165.html","6d7e49f676129e0e40f46b8feb1b4f17"],["/posts/3daf73b4.html","93d2e02e0a94d132cfea93cc2fe21364"],["/posts/3e118dbf.html","4b909864e83ae4cc2b3ecb9b48ac9c95"],["/posts/3f7d823a.html","72e1a0904aa5c4618feb9123d0f5bbe1"],["/posts/3f978819.html","058572a4b5536a4bbc7b8f8a86e2fd00"],["/posts/41dac80e.html","ed294b8c8f529e8b3acb694cf925a370"],["/posts/43945723.html","f876897a118f66f795ddae04a48fefb1"],["/posts/44124a6b.html","c37240a327baf9035814ee9ac0d82410"],["/posts/476a3006.html","7f1a4338206abca04e76d45dcf12f188"],["/posts/47abb61d.html","48f2c059be3eff308d5295c1a3c6649b"],["/posts/4996478a.html","7721690004e2de883230a1a19275f1f0"],["/posts/4b689be3.html","270d2aace75d36277ef722a05d2dc148"],["/posts/4cf8423f.html","29ee54a1e965042a384bfe208b1dba42"],["/posts/4dcf85c.html","c6320253df744fba966b00291d19f6d7"],["/posts/500cd322.html","49c4defdbe22548445a0eafe0affe08e"],["/posts/51c9b1ff.html","72eeac455dfb7945403a0fee558ebd7e"],["/posts/52b5b3c6.html","1d30037e9d6808eb7c478ed67b192e85"],["/posts/54f496ad.html","d9fe39b97640156e55ecbf8a7a87deff"],["/posts/558e1f30.html","5e7163f1b661ce0e95ec92eaa8fff4c2"],["/posts/5d8bea92.html","11d8acd1d1010fb1b34747a1282252a9"],["/posts/5f6e0c59.html","57152f01425030d010dfea3cbd1afb3e"],["/posts/61a63a84.html","4d220e5bfcea1ee67b8407584be00091"],["/posts/625ab7bf.html","8db11c0c0ff2aadbfbc0cc4e94bdf19c"],["/posts/6336a2f9.html","22ca2061e89685417a9630714f709637"],["/posts/6432d61a.html","026a7a0c61ef51e94f111f84911b9528"],["/posts/6515f032.html","214a351cc01abe0743afa5bfa0e51d36"],["/posts/6720ccdd.html","3009c4dc1935cc861721412c454b1a39"],["/posts/6a4b5ac8.html","3cb60c9b881ccdbeffa1df835b47421f"],["/posts/6aa4177c.html","24333f7f830cf64139ba5f305e244699"],["/posts/6b15f81f.html","467c4d294564579d206036d74523cbc2"],["/posts/71131d34.html","b3acbbb0a4cfe737006e584fdcda529b"],["/posts/742fd48d.html","c65cd91da5806a70994542e2d3a4cf49"],["/posts/78a8a8d3.html","e8db5787638ab46e6d52d6cf0bcb38b5"],["/posts/7a5ef3d0.html","81a405bca8e783a1aef1934bc05f2ffc"],["/posts/7b41e1ac.html","1a95b89e9b62985838069744f7655a16"],["/posts/7b51011d.html","570253fb8f689e1dabc9c8bb80754578"],["/posts/7e3aa3e2.html","30a744630a88ee68f95a15435ec8eff8"],["/posts/80fe2691.html","ac93086a483812c1f039c98baa3bb45e"],["/posts/81ac52e9.html","0e49825fbd47dad39bb22de24e78f11e"],["/posts/82332d11.html","47e305ec8e3b048e616e944bf2e40aeb"],["/posts/8486f6f9.html","3a30fecdeb0b63f365d0ff3f9c9584d8"],["/posts/849b40f8.html","14d71ba2508a455c91a454cd18a05109"],["/posts/85c51d68.html","77cfee78fd3ea0eff6bf8f4331eed02b"],["/posts/86a6c500.html","4bc1ef7730d75e39235c1a8399c96071"],["/posts/886f8d3.html","0fa7bde8e52f62c48fffbb92be776aec"],["/posts/8a7cba10.html","4282d5fd95c78d9a1b5d63bec5995ff4"],["/posts/8ac11b41.html","2cee24d8aad366ca0e5324afd35d4d4f"],["/posts/8c3f2fd8.html","7bb02a4086cd82e26dddec8a3d173acf"],["/posts/8dd520d9.html","d47c594f62e0d04c4993ad11a9d40337"],["/posts/8f555654.html","a1f1c66df2ea6a676791952fe063942b"],["/posts/92a980c2.html","9ba6cb99885b838893d92b4e05a818cc"],["/posts/92ce16.html","c194506daaba174be1b0b1d3d208d0a9"],["/posts/93e9943b.html","55ca1fa667b5f575986b3ae68e259796"],["/posts/94d3c794.html","d57ca1f5a54991664fbeba2491f8948a"],["/posts/96b281f2.html","a78be6a7b9d4f0d2c247707af0249360"],["/posts/97f50eea.html","a7db37aff92686a0a9a79f3a4c5aa43f"],["/posts/97fca8be.html","610e5f4746965d226600e164896a1945"],["/posts/98662d05.html","05af620eb1021fdd312b437c8942fffd"],["/posts/9a2f6162.html","44f2da06334776b62fc36616df0a1478"],["/posts/9b22a48d.html","f51cf896e4ccde474660885598d7eebe"],["/posts/9cb455b1.html","4b1c58ea416173e51ac2ea1c9ea3c6c1"],["/posts/9ecdeecc.html","3fd0b492e2d7e82e069b1f34ee62ba06"],["/posts/9efd7701.html","7303354a37ef4a7488190721bf861c78"],["/posts/9f61c1a0.html","08ae6f62683df767aef73b12f49140f7"],["/posts/a1de710.html","b4027664e8d3921d08b13f0170dd049b"],["/posts/a30eb0cd.html","064eb353b220dd19e9228be8ed9fc212"],["/posts/a72f71c2.html","e3277beed8f1bff3fd5c4d250f223f92"],["/posts/a7634b5d.html","c8d1273121dc44cc0667cec897344ffa"],["/posts/a8c593b5.html","1d95624b5ccb81375104f642f87cafa3"],["/posts/ad0c1efa.html","bcac7bcddd4410f9d30d9489fd0c4d52"],["/posts/ada3f440.html","8c365e944bec7815404e422962dc9062"],["/posts/af1807ef.html","ef553d1c33c2aa1ac9da10d4ebe29d7f"],["/posts/b397bf03.html","276d49e6754f04132a7995ac4b182300"],["/posts/b497b647.html","2184047c895cd787c760443e12b115f1"],["/posts/b4d464b0.html","5c78a7affdb944fd3e5fee95e78ca03f"],["/posts/b5fb773f.html","137fcb6dcb7ce07e90b0922047b2d4d0"],["/posts/b8d46b32.html","1601c4a0720688db927838b4a6b27198"],["/posts/c1b2c6c9.html","9b40dc1358ea2e16f19bbb6844f5a343"],["/posts/c2111cbf.html","1c1d9d15bb6edddc8af9e3f63c657e32"],["/posts/c316c2e8.html","f9b1f721ee71b595139f3651bcab1f4f"],["/posts/c43e60b5.html","53bb6d505041f66fac17c857116e35f3"],["/posts/c497a412.html","9c7568b057cb28ca9013011a142f48e3"],["/posts/c5395ba3.html","5e1718c94de1a73f40a3c13c2b0f2472"],["/posts/c5de299a.html","25d0690cff4d083551f86aaf46124ec4"],["/posts/c70bba9c.html","3747a1359bdedd806568117236ddef4e"],["/posts/c797535e.html","7585d9aa4f51b4616e13e0fb8060ae9f"],["/posts/c7a62c79.html","9ec4389bd3564a0ad187c6c1aa4d60e7"],["/posts/cae2c959.html","96f4d69aacd45d456961ee661a764cc5"],["/posts/cbebef2b.html","1496355e9992d04bbeffd5f78ee43050"],["/posts/cc4c0017.html","ee20e3c205e9b189e801865e677bbc4b"],["/posts/ce25023e.html","210042488836942a2c63bee7cc51e68d"],["/posts/d2fd4837.html","35db77d0181f75884cadbc852018cc59"],["/posts/d3233cbb.html","71dc1e8e075d826497df736ee5f9ad98"],["/posts/d3a745a8.html","4150bc77e602cb9ea3f835ba103c07c7"],["/posts/d7e940d2.html","9bc12ff6718527c0c61f8f4d0d84a24a"],["/posts/dc815d5.html","c355325ea7b931a3863debf8ce6c85e6"],["/posts/de25b0be.html","2cd1a9d92182994c69d67ec108265c72"],["/posts/e2623b4e.html","270c93215d051567f8edb287229a0776"],["/posts/e3ab6ad8.html","f94249a4db274c06aeeb00574b33ee24"],["/posts/e5018da6.html","a33bbf12efd88c84918d78cd616d5829"],["/posts/e5963272.html","c3986e682f22ff6db67ff28edcb0f10d"],["/posts/e5ef4c3c.html","4d05465473b86fe49f0b287659162380"],["/posts/e624b065.html","df6fdbf4526634220dd0fa5f78bd509c"],["/posts/e7c703bb.html","05c3e5b0f16a1ba33903e2c9402c5496"],["/posts/e8f14b6c.html","eb088be5423f759719fa4fd0f8e2df82"],["/posts/e91abb63.html","8e0f15e2e83f1a8fe5385a96a396dae1"],["/posts/ea9a8808.html","6323f0a9014b922467098085cbcecfad"],["/posts/eb784749.html","76ca7edd18b86804e8df3eb8b7e87283"],["/posts/ebaf2232.html","fcea3fe2ad61ba36bd9de0beb3df505f"],["/posts/ed75f185.html","f20fd24a449aca698bafa145785252e5"],["/posts/ee1ed673.html","eaca49106e93af53c9f7d8c44806073d"],["/posts/f0c3ed61.html","d86457062c3ed6d5464922e9e2117f4a"],["/posts/f151ff43.html","2ede8437b250a42966557c4d4604cf97"],["/posts/f21e7f84.html","3e6a7d1f04e3bd69eb0bf4bba73934a4"],["/posts/f230b0fd.html","fcd924ea2aca64931af347d6292eee12"],["/posts/f28a7877.html","00db463bd7dfefdc6a7162a5a193892c"],["/posts/f663d5cc.html","0498fef1b265798c9240b1bec9606055"],["/posts/f730ad18.html","1bc5cf01012c0938b9433320082e865a"],["/posts/fb5d4608.html","995b02e5f794e7464ef9cf756e8a1fbc"],["/posts/fc04d0d4.html","32cba95c4873fed3c38f3c7a2b1785b9"],["/posts/fc455f81.html","ba1ced2077d05f7e95a4bee729b73317"],["/sumire/index.html","ab05e5f26d5d218dae174aa7505f2298"],["/sw-register.js","21a07e06df5781dd2bd6fb1a3b25f13c"],["/tags/AKo/index.html","b52af30fe2dec4c9dd57e7c571881170"],["/tags/APPLE-project/index.html","c608b9ea306b3651224694219fc4e700"],["/tags/Ankrache/index.html","0b0a4948e243c7fdabe98214411d8c4c"],["/tags/BELL-DA/index.html","6a95dbb2fc96d8007745efe8a4765a5f"],["/tags/BL-Game/index.html","f2fc67c7a127dc6c1e9fa328ba24b148"],["/tags/Blue-Dahlia-Digital-Creators/index.html","1efae13247f19d9970a4571ca06e2fcd"],["/tags/Blue-Line-Games/index.html","a250cbf8d91c4723b27d4b7dd654065c"],["/tags/CHUNSOFT/index.html","fbc8e88325c7f27bc6eea04aac76ab72"],["/tags/Check＆Stripe/index.html","23750396d1e7e1b6b2960e22f0286665"],["/tags/Cherry-Pie/index.html","f1d261b67fe91e4b1a9b0e8284f0cc9c"],["/tags/Circle-Mebius/index.html","b2b33b0ad13a680cad34fead919c1776"],["/tags/Cosmillica/index.html","0d216bcfc139fbcf32b747a38a927c55"],["/tags/CresCENT-BLANK/index.html","da4572de529c2add54c600569a59227b"],["/tags/Dopamine-Software/index.html","cc2a6d6e4bf19785d29dfae64a9a17c9"],["/tags/Dos/index.html","d8ecaa0dee45fec99216996fd729092a"],["/tags/Earth-Well/index.html","5f0ab6222179caf3aa8de8d60525e1d6"],["/tags/Forest/index.html","c2135c33912486429753f1a8d636010c"],["/tags/HaccaWorks/index.html","2b7cc0606145f55325f0f0b91a328bec"],["/tags/Kanon/index.html","c978917d788bf645059813a05de0e9a3"],["/tags/MANATSU-8/index.html","df525cb7ac2579de10d3d3fe62bb2023"],["/tags/MARINE/index.html","53fd79503c3cf90d9e13be85db763eb7"],["/tags/MIO/index.html","2c8813dce922c88b733fa3d8ca3bc508"],["/tags/NAOX/index.html","8b743fc4a532e88c467e9650ddf411b0"],["/tags/Namikaze-no-Uta/index.html","495095b356cc27a28367b2b922f2f0ff"],["/tags/Nmyu/index.html","e3b7e20c1c01d01e4ead44e357ab1c5b"],["/tags/O-S-I/index.html","15a610b90bafe528e1789eaed066cc59"],["/tags/Omegaの視界/index.html","f7d2637c9991d7ae57268e6861135d34"],["/tags/PC88/index.html","66feab5777abda016fd57046693fdd9f"],["/tags/PC98/index.html","7abe3c1acb74169a9fb72c82f9591f12"],["/tags/Perpetual-Room/index.html","27a292afa5aee9e85c99ffe53e7b0bbb"],["/tags/Pleiades-Company/index.html","da50d109491c60f16935e0aa1bf8eb3a"],["/tags/Project-Twintail/index.html","1436bf97d68a9e961ed536f17f6eeead"],["/tags/RIFF-RAFF/index.html","d8cfa57828533cc50d74b1314e5ec391"],["/tags/RPG/index.html","91a555020b82338cf6835c9446320bf1"],["/tags/RPG2000/index.html","56c44124ba41d00a761b7966173c0289"],["/tags/Reverv/index.html","4e8c2e1f070fde65abad59077e3cd564"],["/tags/SENTIVE/index.html","9cffc1046ca2d640d1a1b1ab74486d90"],["/tags/Saihate-SOFT/index.html","59f477e256775287e7b21d72608e7c4e"],["/tags/Scrubbing/index.html","233ac514c2973ecec6fe6f3c45d95f5e"],["/tags/Sky-On-R-imaginAtion/index.html","1cb205c0645fe1b75b4da661cf8f5ef1"],["/tags/StrayMoon/index.html","9db22267adf95eea85b66e2d292b5c6e"],["/tags/Studio-Bu-Sa/index.html","61e49ab08c1260977360f94f8d298ae0"],["/tags/TRANSPARENCY/index.html","511f41831258205be9ce5f81b59d32ba"],["/tags/ToHeart/index.html","ca503f5647965b42a56fc9f8fa6dc691"],["/tags/Traumend/index.html","371127d108fcd19da66d8ed3f4cc4360"],["/tags/Witch/index.html","ac1bcf8642960a1ff988469806657282"],["/tags/adonis-project/index.html","f4c2e0e20de965dfa1164a0c893da250"],["/tags/capriccio-suite/index.html","295b7c59579db7ca701172324c1eb719"],["/tags/flash/index.html","57bfb36abf9bd94e6285a1b1a4f9ad42"],["/tags/galgame/index.html","bdc3a09f616aa6e7e2737d107be4cf55"],["/tags/galgame/page/2/index.html","7efb15ed9983b4d533fdf7de2ec17946"],["/tags/gal资源/index.html","ca4bcad7bbb9f99ccc9fe319a349eb8e"],["/tags/gal资源/page/2/index.html","4205b43b6d38c20e4a9b2715342fd7d1"],["/tags/gal资源/page/3/index.html","88896e9e786173b0eed79730fe28fc7e"],["/tags/index.html","664c40ca18d90cb84810a24077c4a482"],["/tags/m-kz/index.html","9e05f8806a637d2046042c187e92c2ce"],["/tags/purgatory/index.html","3c7290eb52a8fca75fe00cadc39c9121"],["/tags/rkr/index.html","757467fa5c48eab37f05155f3d37768a"],["/tags/team-eye-mask/index.html","b6ae3a2ebdf77b22a45eba786663844b"],["/tags/ありすくろいつ/index.html","1d82cc3e2e86e72c749a4cbff0fc004f"],["/tags/いつものところ/index.html","1a1a16c7cfd824abec04d8a7f4ed9290"],["/tags/きつねみみ饅頭/index.html","de44d951e0151e808cda51cd45d4e368"],["/tags/ねこねこソフト/index.html","faf817d03e0a631d0fc814a3025ab703"],["/tags/ねこバナナ/index.html","fa7062da0d761c79c67a663f8f0b2ca1"],["/tags/はちみつくまさん/index.html","2aebce7b360f7f8580104d8b3dd061aa"],["/tags/ろりちせ/index.html","ae25ab98405e39be918b126220eb1164"],["/tags/アイル【チーム・TATU】/index.html","225ba6ccf4e5dc9e2f140aad1cc8daf8"],["/tags/アクアポラリス/index.html","e0532ef0a40f670454672e35c3386dba"],["/tags/アークシステムワークス/index.html","4e4d607c98f09f687d3552794464d040"],["/tags/ブロッコリー/index.html","727b2f0839a593ea5bb8d0cffd351620"],["/tags/乙女/index.html","40a5fb5b7880eb068b5cc34954fbd17c"],["/tags/乙游/index.html","b85411ae50bb75cdc984840065d17e4b"],["/tags/停产/index.html","b17e95a272bf56c54aaf618c10949f1a"],["/tags/公告/index.html","7c9dd635dce1a0036d6f151ff9667506"],["/tags/同人/index.html","7c023ad446b1b1a45415be35bcbe4f97"],["/tags/堀井雄二/index.html","93f88fa49dbf3714b3712b6c8fcea902"],["/tags/外海なおき/index.html","4035d0c1924a1d4c4f10e78a0107e99b"],["/tags/女性向/index.html","a2d0f4605a519ad8a18854e8e11504b1"],["/tags/御茶ノ水電子製作所/index.html","0af5486f1b22ced3a840339a041e22bc"],["/tags/月の水/index.html","de55467f5f6601eabff071b26c17f091"],["/tags/桃野衿/index.html","addd8a2de6ff5d8c4e0dead163bc01ba"],["/tags/機械式少女/index.html","21cc2acbec1657d47dbc6f58bb619d12"],["/tags/水仙/index.html","06653592752ca5d988ff9b851629cbe8"],["/tags/汉化/index.html","f7d67a9c0059eb2d38460889b363e567"],["/tags/熊月温泉/index.html","aa60cf8adab32756635ceacaf422ba46"],["/tags/片冈智/index.html","7b34638286282b142b6815853ed188ff"],["/tags/片岡とも/index.html","ddcdbbbbd0d57784aa152c642d84131e"],["/tags/牙の刻印制作委員会/index.html","69392667a2ccfa2fe6ca8b9adb48c9a0"],["/tags/牛カルビ定食-FLAT/index.html","a4c65e18dc82bfc078044ecb83d0e153"],["/tags/牧尾屋/index.html","bf90afcda42471364a5bc3312d8d9fbc"],["/tags/犬茶屋/index.html","4c475929623fbed9531f29b55951a369"],["/tags/猫猫社/index.html","56e70f75be9bf3a6a08ad31f8f9a2b3b"],["/tags/王宮魔法劇団/index.html","0dc543c210a9eec7630373cee067b181"],["/tags/画集/index.html","2b49c307fb71d8bd4a2f3eb78ef11c56"],["/tags/索引/index.html","7b514e4aae63e859cf1798866e279e21"],["/tags/缺失/index.html","3bc1cd070d6b5cda5c17c9ee1cb74b34"],["/tags/自购/index.html","c9d013c2ac5cd6dcf215102e8f5b8501"],["/tags/茶葉☆姫/index.html","907e18139e11b61cb57946e6071d20e4"],["/tags/郷愁花屋/index.html","571ff553b748525f68ff22f3fc52427a"],["/tags/閂夜明/index.html","b3c5e15d7c50e110b005f3556bef7a1b"],["/tags/音乐美/index.html","948b81c23edc71fa488c000a5dc3641e"],["/tags/黒†救/index.html","c6b1a059c57ad076b01c8988b6f5dbe6"],["/tags/黒百合っ子大集合/index.html","af50179506ecb0898c07c42361f5ced4"]];
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
