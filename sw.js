/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c035ce85e05e628de5975d913194e0d8"],["/archives/2024/04/index.html","6f770dbbea615e33c9f08d89c711c7a1"],["/archives/2024/index.html","b9482b2b90636490552f86e6a2fb5f6b"],["/archives/2025/02/index.html","97c77d18e157edd279cfbfe35d9e88ab"],["/archives/2025/02/page/2/index.html","bbc359339b8f56446b588f086ab48fb2"],["/archives/2025/02/page/3/index.html","a5e7d842214d058ddce96921a784a198"],["/archives/2025/02/page/4/index.html","851826dcf5a17875ac97d2abb1e7dc88"],["/archives/2025/02/page/5/index.html","3ceec52b47208027b4ae77429d96a6c6"],["/archives/2025/03/index.html","1fd47972e292e690361772c242c8433b"],["/archives/2025/03/page/2/index.html","93f1df4185c0ebc7b1eaa32143b059aa"],["/archives/2025/03/page/3/index.html","dbd0da9b6acf47c2a7b27c5920d1edc7"],["/archives/2025/03/page/4/index.html","32dbb78afba6eea90475c5dc712762a0"],["/archives/2025/03/page/5/index.html","2343c7e9ec98727d1735bfd451580771"],["/archives/2025/03/page/6/index.html","1f5c9a05ca4b56b09d7c73c168a0dd17"],["/archives/2025/index.html","8d953128275a7cfd0041473048c8fce2"],["/archives/2025/page/10/index.html","5657754ead77303654b782b7ab6c5764"],["/archives/2025/page/11/index.html","2c05a70f144f5c0300b805e9ed3e9a03"],["/archives/2025/page/2/index.html","499eed2463184ccb436c10a756eb4ffa"],["/archives/2025/page/3/index.html","8f81db23ee657ee07e8f380f225742f1"],["/archives/2025/page/4/index.html","b7953751a4f51e63bc15fee280600acf"],["/archives/2025/page/5/index.html","3261fba5f43c2f71af0f7fa7fa5c7001"],["/archives/2025/page/6/index.html","606db13c0d21a02ab182807056e37472"],["/archives/2025/page/7/index.html","91d9b6c22a5583518ebeafc73911c5fe"],["/archives/2025/page/8/index.html","b0b28993f8bcbad29500aaab3f638e7d"],["/archives/2025/page/9/index.html","ff45474e5919b9c4f995f6f003497754"],["/archives/2026/02/index.html","eaec7abf95c22918f2edaaeacd7bff1e"],["/archives/2026/index.html","24e1e1ba71833163640413f4a55749b0"],["/archives/2925/01/index.html","c9fb926d39f1c4da01faa8ce8207ebd2"],["/archives/2925/index.html","aa14b676b892713e7fbae2d861b49a93"],["/archives/index.html","4ecdf2d8d6005492c0596e9455f08d81"],["/archives/page/10/index.html","bd20cac54c70be03a536bb73790c9635"],["/archives/page/11/index.html","55da80537741bbfdc5e6782e6706182d"],["/archives/page/2/index.html","441428b346c06fe530a96f143ee3a5c4"],["/archives/page/3/index.html","0abf82e0b528eb542b96b4eaf1ce076e"],["/archives/page/4/index.html","4b1ae61cdb9d4f703eceeaa2d5c49cb6"],["/archives/page/5/index.html","d1042e287823ddff62e189bd1fe89204"],["/archives/page/6/index.html","93a691cc40ec52e58797fcf22f99c939"],["/archives/page/7/index.html","84ea031a49844e8b0abd842e689dd1c4"],["/archives/page/8/index.html","66961ddfb420c42574fff379fad5a0a1"],["/archives/page/9/index.html","f656215dca6385aec816fb0f10e4a402"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","155b0b0ca07a8611be3dce4b6d4da6d7"],["/categories/galgame/page/2/index.html","58990738c5af65a230a06168feecc3fa"],["/categories/公告/index.html","b7b318cc37b5b452f249a35d062bc897"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","32ed1fac236a4fe8d0d69e10fac89634"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","da8c1a8bd9e2ec5bef50b3477c40d974"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","acc2fc25868fee74f06d49f1a12f610f"],["/page/10/index.html","99d72cf71ab760766d6affe80043cdd6"],["/page/11/index.html","388a92b8cc24265a469c85fa68529d53"],["/page/2/index.html","66257d18e4a350454b3170fa38e9ae61"],["/page/3/index.html","2e61c72377f92ec01224de4b76fe3232"],["/page/4/index.html","bfcefbba64d152aa0151233df57e7a48"],["/page/5/index.html","4c2381e7774b0cce08c1a8d5ee5e92fd"],["/page/6/index.html","84223949b59bfb4fe9a858aef7b66683"],["/page/7/index.html","3acfc10c7abdd954ce6cfb82d480c669"],["/page/8/index.html","22096977e50e7812ce474f4837d7584d"],["/page/9/index.html","2ff834536ed652adfb8e0d499623f68b"],["/posts/10c9dd98.html","f0ae713d77d4518784f9ec6c85a43df7"],["/posts/1295b569.html","0c1dacfbb5c75928725952df7fe9860e"],["/posts/1370342.html","0d5a8c902d1cb17484d852a1c2564f4e"],["/posts/15ef14c2.html","e364e281f6dc4b46381ccd2475203023"],["/posts/15f3959d.html","f38d9fd253ed4aab67d4156157ed16cf"],["/posts/18ab785d.html","72d8b4849ed81594a3297df21c8db6b9"],["/posts/1d59b71f.html","b88ea533a678ec0bf26862f2b17cd3a8"],["/posts/20b3f3a4.html","21198957fd224e3d5fde48736b5637cb"],["/posts/245f1c7d.html","431a14431272e9adce7fbb8c98529253"],["/posts/252658f.html","297c02ca24baccaf461bfd75badc02cc"],["/posts/28397adc.html","826c2fdecff33cadff6c498602863dba"],["/posts/2b38bce0.html","3b8d60e8097bc081eea690f2a61e646b"],["/posts/2c0a6836.html","a2aa985996c171dd25b0a81d45614103"],["/posts/2cf620f0.html","109dc73516899bfd14feb2e8330a22e2"],["/posts/2e30fd6d.html","759c90cbf043347cf6513fd1753b05fb"],["/posts/34292736.html","f46207fd915e3987e8240d8ce3a0acd3"],["/posts/3468cbe.html","99b99471388d053ad4ae5cbd02718cfd"],["/posts/39176dc0.html","dee656bae04db8d51fe7388af21da549"],["/posts/3e118dbf.html","cfcbc974074c91de0480a24cf0a4dfd2"],["/posts/3f7d823a.html","dac44ee0ecbeebf0cf27ca0123b718aa"],["/posts/3f978819.html","34e2c72e926274da8fdcf2cad53e4eec"],["/posts/43945723.html","750b80f069435bfb84f278d6eb76abc2"],["/posts/44124a6b.html","7d180bb66c3b65d6b726d98fc3f013f7"],["/posts/47abb61d.html","cfb29eec3cf61e4b3241299dc3795b9f"],["/posts/4b689be3.html","34b4bd85b531617c12a944288a74840d"],["/posts/4cf8423f.html","2e331bb07c6d831dbd5d134359480cb2"],["/posts/4dcf85c.html","ba5b9afc1667b5a68625858a61e3b371"],["/posts/500cd322.html","2cc531d63fcf4aace447470d7a4ab261"],["/posts/51c9b1ff.html","0efc0165ff81612a3eaca7f44a0fba65"],["/posts/52b5b3c6.html","e49238a4dc19998a71e0aa888a1fb2d0"],["/posts/5f6e0c59.html","e1654942d92814f2e3c14276cc1ef1c2"],["/posts/61a63a84.html","574617b8005ae9a59f93d4ca3d94b11d"],["/posts/625ab7bf.html","276cbd1b1cc2c81af242e2c3db288b0d"],["/posts/6336a2f9.html","bcc28ed0e8b5b48a6881802904790cde"],["/posts/6432d61a.html","5f154b1a513db6dfc9f0f276dbeb2c8f"],["/posts/6515f032.html","ec9d17366b62f22f0b9fb42afedf047d"],["/posts/6720ccdd.html","c3e0e0c8670b7a1279f1698e23629e43"],["/posts/6a4b5ac8.html","647b516cd01308063fd464e973fc850b"],["/posts/6aa4177c.html","dbb8993b32b5c7243c80a96dc91bc265"],["/posts/6b15f81f.html","ab7cd7e2d2ee1454abed5685dad04370"],["/posts/71131d34.html","54df7475ebc7c3ce55b25a5570ac9b4c"],["/posts/78a8a8d3.html","dca5cb1cb9b0aadd4fce2a1a8fec00e9"],["/posts/7a5ef3d0.html","51e46cf4c4202515bf2137c197d52836"],["/posts/7b41e1ac.html","4d3c89445d7af3b8d066b8dc73300a43"],["/posts/7b51011d.html","c5ed7bb12c33992cc2515a6d148215d6"],["/posts/7e3aa3e2.html","52fe8dea9ca6b724c5e231e5e94ef718"],["/posts/80fe2691.html","5685fd0c93c953e858aa44add7a4bb9f"],["/posts/81ac52e9.html","7621e1061b6fafdac1eca33e3d20d2d5"],["/posts/8486f6f9.html","3c75844686273e7db59650d605b283ab"],["/posts/849b40f8.html","c13ef53949c3e8d29080b0dab585ebc2"],["/posts/85c51d68.html","d3155240aa227466e4e86b4963b00104"],["/posts/886f8d3.html","bdeff653c8522a0668e3fe28e8ab8d04"],["/posts/8a7cba10.html","da44f974b7b4478c7087b3dda1a5465b"],["/posts/8ac11b41.html","41deeb5a0a6a131564d0b1f8f92c47a7"],["/posts/8dd520d9.html","6b043b220640f73fa49f36d32aead183"],["/posts/8f555654.html","6da5812d088811f502b836cfec58d293"],["/posts/92a980c2.html","8da93945869ad57473c3fdc83f8ef41b"],["/posts/92ce16.html","d0ad3a1164ae6a3c98b58f37dc687a8a"],["/posts/93e9943b.html","3f5a618e61b8151da137ede8d390e9d1"],["/posts/94d3c794.html","3b247a87d55bb92484e9c8864569f3fa"],["/posts/97f50eea.html","3f87a6652843acd7e24ea1f36dac695d"],["/posts/97fca8be.html","9ab744b58433f619d9590772eb001e2e"],["/posts/98662d05.html","ec45a3c39721cc0025fa8881c69f019c"],["/posts/9a2f6162.html","f90c624843cd900dd0a373a3f03563d0"],["/posts/9b22a48d.html","f7a6f71129de5b441bb7ec68d54a0e7d"],["/posts/9cb455b1.html","e84865cc452aa4418569cc86984a5b05"],["/posts/9ecdeecc.html","38b91317ba213c615a2b8bb15aa2721f"],["/posts/9efd7701.html","cf6a213ae976a3bb80626c885023dfd8"],["/posts/9f61c1a0.html","2749fb7052b7a4081e5fd529e8cdf196"],["/posts/a1de710.html","2aedbd9128c431bc6784936da3ffb366"],["/posts/a30eb0cd.html","57b72bafdbc669c2e0dc2f3802d468a3"],["/posts/af1807ef.html","d07f985cd76c1d5eb7073cee1fe615c2"],["/posts/b497b647.html","4b59f84444ca95f54b466513f1a5a0da"],["/posts/b4d464b0.html","ac5d62ae080614aa20e884d4b2497941"],["/posts/b5fb773f.html","c22020606834d87f9614b0f79e55af22"],["/posts/b8d46b32.html","3035dc1111a4f7df3c6682179d0a2c9b"],["/posts/c1b2c6c9.html","32dde2478d468ddd361aa095f55f8467"],["/posts/c2111cbf.html","4f7bb534152f472ee71a7ae48a23d871"],["/posts/c316c2e8.html","f16478866d92c0e2dd762e97cfd333f2"],["/posts/c43e60b5.html","946e9bb224582b00b9f2149570dfb114"],["/posts/c497a412.html","5cff26f3484f5121ddb650a99e8abaa7"],["/posts/c5de299a.html","1794845f1c4ba02fb55b3ec88cf05a3a"],["/posts/c70bba9c.html","ae0c25ad2606edc3eb34b19d8e35e783"],["/posts/c797535e.html","c32a113b4ba29f1d32123e2b475cc899"],["/posts/c7a62c79.html","6a507d493d091bf10584fc601c49ec66"],["/posts/cae2c959.html","b3b84c6783465b4d50e0cb1673e3626d"],["/posts/cbebef2b.html","d65cee758be2518e2e0a459d07d06371"],["/posts/ce25023e.html","efc0f50792c75e0c8730888b7f8dcb99"],["/posts/d2fd4837.html","090b33f5ee3de7001d51023fe399ff4b"],["/posts/d3233cbb.html","d00e7aacdf3c74c41966609a0fd16ffc"],["/posts/d3a745a8.html","24d37dc1a2b9a71c6945286d84046466"],["/posts/dc815d5.html","2cdbf3d612782a0fdde7a322af78f9c2"],["/posts/e3ab6ad8.html","fe28250baf06df71f4628bc37f5f09d4"],["/posts/e5018da6.html","b36fd702a31f3098863df4fd4b395c10"],["/posts/e5963272.html","7e3b76e84503baa316e53c65fe275d73"],["/posts/e624b065.html","2e240fa745f2743c96dd28fc524c71d6"],["/posts/e7c703bb.html","592f86854670bd2b4819a227119e60d1"],["/posts/e8f14b6c.html","f495349d69331ce14114048ccd5d597e"],["/posts/e91abb63.html","ba786ff580f73fe4b831428ffaaecbbd"],["/posts/ea9a8808.html","661f467c13e3fcb4c6556cce8c97de24"],["/posts/ebaf2232.html","8432d966f649fd6c93d3dab2f973b167"],["/posts/ee1ed673.html","414272238c22b2c8b4d8b385d7b9bdc1"],["/posts/f0c3ed61.html","e262aba4f4c0ed28dbf9e868f82816cf"],["/posts/f21e7f84.html","af1022a54f8006ef5e491b43b053c917"],["/posts/f230b0fd.html","9f6bcac01fde5a4dc8bf4787fabeb2ad"],["/posts/fc04d0d4.html","50ffe9c39edbb6b9b01e7b3991bece4f"],["/sumire/index.html","95210e9e453ebbf0f205ccc1e0d70138"],["/sw-register.js","814f957fef7fd711ae0316e33e0d860a"],["/tags/APPLE-project/index.html","cac6088163f5b0a10d9100d54b048d13"],["/tags/BELL-DA/index.html","4c25f20e399a7a17415d19bb08d3c724"],["/tags/BL-Game/index.html","e861e2c823c88625d0eba69143d52726"],["/tags/Blue-Dahlia-Digital-Creators/index.html","b8e6ba217fa10b2cfa0c891e526302bb"],["/tags/CHUNSOFT/index.html","e07abd68a0f80f10cc6a619d887d7b11"],["/tags/Cherry-Pie/index.html","a4d9e8efaa072ce733fdfb9e46149c79"],["/tags/Circle-Mebius/index.html","b89883a0576b03dcc1fc3b00ebbddd28"],["/tags/CresCENT-BLANK/index.html","74c836fdc44e3cae7bf6881c15afd846"],["/tags/Dopamine-Software/index.html","5eca86863c58f01ee0f5d6e335cb14f0"],["/tags/Dos/index.html","d30b066ea207291159348e7d53e1ce33"],["/tags/Earth-Well/index.html","0d9370e714220d4b6273dbbd12f80eb9"],["/tags/Kanon/index.html","1d91b832c6a764e1524eb9e021f8ce21"],["/tags/MANATSU-8/index.html","aefbe514d8965d0ffe5b874bbd94e75f"],["/tags/MIO/index.html","7c8f9d2c659086478f5b07cba98c946e"],["/tags/Nmyu/index.html","fd2f16e0333e3aa174f74876ba66afa0"],["/tags/O-S-I/index.html","7817c284bc7be8d3d00a6987441f5bd3"],["/tags/Omegaの視界/index.html","9fd6043d4166504f1c4e7a601230a879"],["/tags/PC88/index.html","dfce6ab52fe67ce374a2807251f39591"],["/tags/PC98/index.html","f67a472211c6a7b3502f9e98a698597c"],["/tags/Perpetual-Room/index.html","0e94b26bf7de8b20601ac8e1775d17f2"],["/tags/Pleiades-Company/index.html","9453d873194e37ba6afd5949101abc6d"],["/tags/Project-Twintail/index.html","eb47ec856ef09224b727a2bafdbcdc19"],["/tags/Reverv/index.html","2e0a4104fc2dd36d4ce42a610bd2a396"],["/tags/Saihate-SOFT/index.html","0af1ccdc38a38ea94603d2b16b8f1b3d"],["/tags/Sky-On-R-imaginAtion/index.html","5ab49bf824e226782637d9c643bc8acc"],["/tags/StrayMoon/index.html","f10066e1b80908fad2caf20ee1d47cf9"],["/tags/Studio-Bu-Sa/index.html","37cd3f606a573145f44cba19a9e1ba62"],["/tags/ToHeart/index.html","b8ec824cf5b50f46c671c584fbd4babc"],["/tags/Traumend/index.html","3575afa53d6f97077aabfe6fe2b632d9"],["/tags/Witch/index.html","d85ea2287262bf30eeabfc1c0da1515f"],["/tags/adonis-project/index.html","ba09dfa2335d90b9ab662b72d4a61b96"],["/tags/flash/index.html","dce98ccfbe200d7b92d8ef83bef72e95"],["/tags/galgame/index.html","413e06da35e37924d8f7ae19f81e8cd0"],["/tags/galgame/page/2/index.html","e0ae5f1ba890a8b2f76253df99d9fdb8"],["/tags/gal资源/index.html","6708c276ded9d9c351e10f0815f106d4"],["/tags/gal资源/page/2/index.html","d7dde05fcb9b0ca0aa876f8224f812a6"],["/tags/gal资源/page/3/index.html","9a30745830d85b19eb5bf94d85b2847b"],["/tags/index.html","13f04f8baafd84aba4bc2ce1831d7b95"],["/tags/rkr/index.html","d0a8c69eb0718a9db822a6015cc146de"],["/tags/team-eye-mask/index.html","7fd2256e131a1434bbc6ff937dbf7c58"],["/tags/ありすくろいつ/index.html","61fb975d32a6e5951c86abea8897962f"],["/tags/いつものところ/index.html","ec85a83ed05d10eb41cf6b83eac05b20"],["/tags/きつねみみ饅頭/index.html","7a6d00eecf02fad42ac25390cd2f90fe"],["/tags/ねこねこソフト/index.html","dfff9ea9da8a6eebac032fa9357d4b36"],["/tags/ねこバナナ/index.html","07544cc558f8eca20550bb2fa738acd1"],["/tags/はちみつくまさん/index.html","afd72eb78db501d42892d37246fd44de"],["/tags/ろりちせ/index.html","aafe7ebf8bbc691f5e70695a81b018b7"],["/tags/アイル【チーム・TATU】/index.html","efa560d82e6b44823260e59b4aefba83"],["/tags/アークシステムワークス/index.html","19a2f6dafb7d8cf21eb7b5be4d849f9a"],["/tags/ブロッコリー/index.html","e6f36a63bb729b8e0ca279308926e6cd"],["/tags/乙女/index.html","84c6083c911197e123433e2e609b2ed3"],["/tags/停产/index.html","f932216dabe72ff13b188088ad634e84"],["/tags/公告/index.html","b3d31484ed3b98c0854565b22d0b7f91"],["/tags/同人/index.html","8bb38bd6a3fd7c1addd12a2d103be4b1"],["/tags/堀井雄二/index.html","a53e1158bde4b0cc728154cc49a862eb"],["/tags/外海なおき/index.html","2c2b33a42ba71c12ea89089be59095ef"],["/tags/機械式少女/index.html","851c0233372108b4b74c0a8823054085"],["/tags/水仙/index.html","9fe6a78c5eb06f99a8eb59a9abe7f6cb"],["/tags/汉化/index.html","a92aad83a2efa471349eb5c496211a8d"],["/tags/片冈智/index.html","89392a65f99b35e8898cef1b3e48ec9f"],["/tags/片岡とも/index.html","bd38f53550735a3ab45fc7624aca574c"],["/tags/牙の刻印制作委員会/index.html","83b0b635509827756161fcee4c2097c8"],["/tags/牛カルビ定食-FLAT/index.html","b3e5bf909943d210d431304b2aebb310"],["/tags/牧尾屋/index.html","c8f70e0e011a7aeb43c36f0053f3e516"],["/tags/猫猫社/index.html","9398bfb642e878bbb954648fafcba0b6"],["/tags/王宮魔法劇団/index.html","b56989ca5db79782662c6a113505c197"],["/tags/画集/index.html","141437ea791ba74e9ebd83fef769c852"],["/tags/索引/index.html","bfd1aa072b70006e8439233dc1fbedb0"],["/tags/自购/index.html","7e4c7b6f0517a0c4180324bf6fb421ea"],["/tags/郷愁花屋/index.html","d9dcd696d710d5efea1e4eab79d7845a"],["/tags/閂夜明/index.html","33eddc7cac45df30f652ece3c62abca0"],["/tags/音乐美/index.html","78fabeabbc06728360c5e631df05bbdd"],["/tags/黒†救/index.html","e67c198b4d4379375f3f8436820fab52"]];
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
