/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d7a4135bb66c8c473d239b1751869d22"],["/archives/2024/04/index.html","b18f288e1dcdf58e36863399597bf4d9"],["/archives/2024/index.html","0f5ac962b41e47c0547ffd11c4da3fb6"],["/archives/2025/02/index.html","42cf4a198ffad8227b1bbad624561f2a"],["/archives/2025/02/page/2/index.html","bbebaba8f11a9b250c20d49a48192cb5"],["/archives/2025/02/page/3/index.html","8d27df79685dc87e6d191e6ae89fc02d"],["/archives/2025/02/page/4/index.html","c1968cd85ad56d109fd2b9d73a1e5769"],["/archives/2025/02/page/5/index.html","f8639b2abe2d87ba9fb8521614327bfe"],["/archives/2025/03/index.html","4e48bef81120154eddd50248c5577a00"],["/archives/2025/03/page/2/index.html","62c874be8a8b19c5cf75c4805f937d62"],["/archives/2025/03/page/3/index.html","5a3dea149f65bd6dc380d431ff1aa546"],["/archives/2025/03/page/4/index.html","4d12bcce7dad686e6aab638c26031ff8"],["/archives/2025/03/page/5/index.html","db2bcb79840dcb93e14e2a065a6d8bca"],["/archives/2025/03/page/6/index.html","b90ccebc5017102e630efcac9b666fc3"],["/archives/2025/04/index.html","108c87abc546770f152c3933179ccc31"],["/archives/2025/04/page/2/index.html","778b3f5858cb08e1f7b48c2add43bd0b"],["/archives/2025/04/page/3/index.html","13d2282907b66f7177e4451d769bc832"],["/archives/2025/index.html","aa7ba01be784820c724afd9cca1e60f5"],["/archives/2025/page/10/index.html","3d43ba218f18ca3f637d5e5af183fc92"],["/archives/2025/page/11/index.html","e71e83eca87f9c34af84ef53e7a3ccdd"],["/archives/2025/page/12/index.html","b34bc8db1f8eb4687bdb8f62acd7656d"],["/archives/2025/page/13/index.html","5e2dd9e6d511529256c1424b51a986e1"],["/archives/2025/page/2/index.html","c98298f8805cf290c5034c2f989d76c2"],["/archives/2025/page/3/index.html","0cc887e2723d35ee70ab784653e2ec11"],["/archives/2025/page/4/index.html","b289df39b5f3917a7efeab816a740b95"],["/archives/2025/page/5/index.html","ff558810aee70eca381cde386877e5f3"],["/archives/2025/page/6/index.html","456e095f51873ae9144ec8742689166c"],["/archives/2025/page/7/index.html","d10773a4e997d7a0ed9e7e353ebfb67f"],["/archives/2025/page/8/index.html","4a98147f160d43b08395be9470287366"],["/archives/2025/page/9/index.html","7cc35525e3dff33ecd6f395c24e61003"],["/archives/2026/02/index.html","56337a92417ab63fa6fe777bcf8793a3"],["/archives/2026/index.html","c9fc1c035a5953934d5c64d8d9d6899c"],["/archives/2825/04/index.html","8f729875c2202eb728f6325b71bbc48d"],["/archives/2825/index.html","dd19775e8cfb32e04454a28e7230d480"],["/archives/2925/01/index.html","152175feaed8bd1922507e72cb11d5a1"],["/archives/2925/index.html","b2e213e0d46d1e7f4c092e0a04158fa2"],["/archives/index.html","3196a93513cd25699156a3d7310b426b"],["/archives/page/10/index.html","694743d1c1bfa73a521fff317140eb89"],["/archives/page/11/index.html","bbae614d23bb6ab6d542daf281513653"],["/archives/page/12/index.html","ac55c55a92630354e48e790e2da3c122"],["/archives/page/13/index.html","1f4b533af46f0c0c092af27b8ff21a1b"],["/archives/page/14/index.html","dd4cb721f847d91e73ff2f9907ff042a"],["/archives/page/2/index.html","3e4a5b8a045ed7e93a0a5713f298bcfa"],["/archives/page/3/index.html","0734888e2424ef3da6ba77946c920089"],["/archives/page/4/index.html","ab31126660a312fa7bd82949fa0f8651"],["/archives/page/5/index.html","e38dcb7e7adb714da289aaddaf2d7140"],["/archives/page/6/index.html","82a85235593b78977c2b514ca7e11c2f"],["/archives/page/7/index.html","78785438db656c848f13641f5b12080e"],["/archives/page/8/index.html","fa3491e04234eb14c8e34a859ffeaff4"],["/archives/page/9/index.html","eb2e17a55291bdbf5639aeea8600f0b4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","e603fefca2f9126fbe9c450a8f97ab4b"],["/categories/galgame/page/2/index.html","1f9e404e331d42ba0f5d844cb915911d"],["/categories/公告/index.html","f532dd2217b50722fb509aa79da2ff5c"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","40c90a7bc035805f0ea3b8576f0ea1f8"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","a8b1955c9dc503d52f7226c7e488f610"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","d6f292f8ec9e6bae7a1e500ee26c4388"],["/page/10/index.html","756552e96a11c2476e04ba0c7c4bfd95"],["/page/11/index.html","a02b5edb9553fc6614e77a21a24ff0ce"],["/page/12/index.html","9181747ec42689b603389cfffdc1379c"],["/page/13/index.html","0c18ee5f68c092c73a1a61b8569f9130"],["/page/14/index.html","b8907aa032de1710f54cb54b271e5999"],["/page/2/index.html","0260d6f745ad88a7027dea1efc59e637"],["/page/3/index.html","9e3ed03df27f8134682262ca097d2335"],["/page/4/index.html","1b6bdee0bc14457a738f457e0f4397b5"],["/page/5/index.html","6e3ec607c5e25ce31425eb1d300aa15c"],["/page/6/index.html","1d7eacd163639cefb76500bcb8426e52"],["/page/7/index.html","75270e226d262e1d6ec1491d3c739570"],["/page/8/index.html","84fe4a97dbcb8a1d3d142d22b2a4fb9d"],["/page/9/index.html","f605c852068433ca0c1c1a03e35ae263"],["/posts/10c9dd98.html","1b548a96b0dce23c09e197d0f7736f6f"],["/posts/1295b569.html","172b6cd52488729fbddb41e070ad4bc3"],["/posts/1370342.html","62bff4de655ebb106451ce46786e7971"],["/posts/15ef14c2.html","a2865fa91929cfc8707a7684c4628126"],["/posts/15f3959d.html","6a5607e293066054d1e4e1f165333545"],["/posts/18ab785d.html","0fb1097c7a89bc56a74908a8a816283d"],["/posts/1d59b71f.html","5d79a59c83b5ee788a30536b17786652"],["/posts/20b3f3a4.html","16bd7117da5c01b945a87e5cc654a04b"],["/posts/245f1c7d.html","8522a54c3cb98cc8197d945b42e072bc"],["/posts/252658f.html","51b89a6d6bb3b337c9012dc23ef7ded4"],["/posts/28397adc.html","5b0a8a2cfdd2e5afc1cf75da630f6501"],["/posts/2ad07f54.html","ed0ee7bbb37e08c407ecab3fedcac8e6"],["/posts/2b38bce0.html","9bb106a8e1086fded525ffd7c00f26d6"],["/posts/2c0a6836.html","50c3481480f36ecb9634cb97d4e2ba4c"],["/posts/2ce39bcc.html","6b11d6db492e79d99c58cbbec2bd4b06"],["/posts/2cf620f0.html","b1d169a6f6b66b46e0444fbb3891635f"],["/posts/2e30fd6d.html","af78e47bc5ccd6c33c167fe18d2ab7b7"],["/posts/30a413ad.html","1dacc8c16887b7670697339c7a8ad693"],["/posts/34292736.html","677d444b2b4ff976e1ca9c5925cad2b2"],["/posts/3468cbe.html","fc3d6f9230d572368f4c99afab77a52e"],["/posts/39176dc0.html","e99e8140935c3da3d305b7ceb2322c5d"],["/posts/3e118dbf.html","2b8ae96a320867a07ac781d9fa431438"],["/posts/3f7d823a.html","6e055aea09dcc00cc534df37e7fd3ef3"],["/posts/3f978819.html","bb063cf20d87b773ae3608b2b90eb085"],["/posts/41dac80e.html","6f8e88d237cfe08285218a9d2f1ad010"],["/posts/43945723.html","6d034a1ad0cedddbc653b707b42bb39a"],["/posts/44124a6b.html","cf7ba261d8822757ea1be34376b2ddfc"],["/posts/47abb61d.html","2e63b9ca69293c7bcfb304fea4c441c8"],["/posts/4996478a.html","2af93558271200ea6691e46db340d944"],["/posts/4b689be3.html","c8444795bce2dd502564f18cd24dc88a"],["/posts/4cf8423f.html","aed29199699235886371437715d99190"],["/posts/4dcf85c.html","9fbaea06b88b0cd425d6e008fa85aaa1"],["/posts/500cd322.html","012716dc76cab5adcac06f810ef4a7cf"],["/posts/51c9b1ff.html","7d55307b5f579e198c9ebf798b076a90"],["/posts/52b5b3c6.html","8f2c1a8b81a2231aa031fa9227c9ab4c"],["/posts/54f496ad.html","5bf8022286de938a846319bf8959c6b7"],["/posts/558e1f30.html","067602069eb7f020be5a10370f1291dc"],["/posts/5d8bea92.html","3e9f07db7a647239b1479d1faf02a935"],["/posts/5f6e0c59.html","57dc4a7eccb8099b0df655706cb9e898"],["/posts/61a63a84.html","fccb961456a8f6b38dd3ce032fc86d75"],["/posts/625ab7bf.html","5a77018f8914aaff0d114069a694cc56"],["/posts/6336a2f9.html","8e07d9f1a552c49de61e01f54007f8fe"],["/posts/6432d61a.html","28c6164d9836975d0b40f26169e799bc"],["/posts/6515f032.html","15c00224671995ba0c6a63b762596b62"],["/posts/6720ccdd.html","8cc6346069037124c2387a2c98537a6f"],["/posts/6a4b5ac8.html","9e487fcc683118059da3a70a16068640"],["/posts/6aa4177c.html","81fc2b68342c27a9865e848dabe8b438"],["/posts/6b15f81f.html","b2bed23e8a34547782f250ff5944fb7c"],["/posts/71131d34.html","0e927fe90c397b83107a4ae289438e7a"],["/posts/742fd48d.html","0f41f5b457acb91e29767ea790b8147b"],["/posts/78a8a8d3.html","5734361ae73dea6c2a12aa1e93aad754"],["/posts/7a5ef3d0.html","40344022d04c93888d5bf6677c3bf2bc"],["/posts/7b41e1ac.html","13f9884e887b412a130e219d0ad5938c"],["/posts/7b51011d.html","36d6de0c1a38d18a64f1d59940319490"],["/posts/7e3aa3e2.html","af62efef70d0f795164a8ef96a5eb66d"],["/posts/80fe2691.html","bb0017f61983d862ab1ccdaa193f2f85"],["/posts/81ac52e9.html","a75346412374a90900e2315ccb4c70af"],["/posts/82332d11.html","cbb0b00567e4670dcc58d40c7e7a737b"],["/posts/8486f6f9.html","0c864c5820a7f7f625ecc16a669fb60e"],["/posts/849b40f8.html","3d0b4028d1ee91e60bc957bf82a49a3a"],["/posts/85c51d68.html","f9670147b6fe848b34bf7a21c8dd6b38"],["/posts/86a6c500.html","f4ae73d5f579e4a60b180334f6906c58"],["/posts/886f8d3.html","07a5a892146db9714e14e970a0e1072b"],["/posts/8a7cba10.html","153ce5f1ace0bf0a051073660d74e279"],["/posts/8ac11b41.html","c583060da07e2b61972b842d6fa63a35"],["/posts/8dd520d9.html","ca6ae122794477149195063564cc2c1d"],["/posts/8f555654.html","dbd98c754a13d361ad7d1c2007f13ebc"],["/posts/92a980c2.html","0021765e401f4e7eaace9696c6989a4b"],["/posts/92ce16.html","2f6179291c1709ea62ac348d8c49fd1e"],["/posts/93e9943b.html","275811126172b5aca672a9656d5007c2"],["/posts/94d3c794.html","e2f5b5f12fc2d514f7c70962365ed491"],["/posts/96b281f2.html","a670d1255271e4a85495d9d8933eb386"],["/posts/97f50eea.html","dae1cc975c1c59fce0907b127805b0bd"],["/posts/97fca8be.html","2afb0d1269a00d1cf9183035c1880560"],["/posts/98662d05.html","3fcf0ec950b7cf1ce310958f77eb3a69"],["/posts/9a2f6162.html","4726acaf24633aa14fb9398a768498f4"],["/posts/9b22a48d.html","c089f343820d5a315975b0fddff2f021"],["/posts/9cb455b1.html","e8fcf0a7d5db6f86399d7553fb3bef54"],["/posts/9ecdeecc.html","72519d16b611818cc9d2e04d7267632a"],["/posts/9efd7701.html","16c545709007313ca4b9e6e3863353c5"],["/posts/9f61c1a0.html","4f5bd0ab0ddf22dff8cc0527ea888326"],["/posts/a1de710.html","ecec66b8ceea5a8244bf2a98ed8c0425"],["/posts/a30eb0cd.html","7f00bee468527431182274fc7360f6c5"],["/posts/a7634b5d.html","0097a0344cdb214baf12f32628ffb51c"],["/posts/a8c593b5.html","333296215320b4e94f88c01f8e9f5a7e"],["/posts/ad0c1efa.html","2427bad27186c7c4c8a4a28e6db262c7"],["/posts/ada3f440.html","1e2a29b3ab8f46774625d09fc02beaf1"],["/posts/af1807ef.html","98807db3981ffaa4ec16cc87852cbef1"],["/posts/b497b647.html","592548236cc7041a02e56dab47111c50"],["/posts/b4d464b0.html","1c0401cddaf106d06cee6b6d1b79d175"],["/posts/b5fb773f.html","d56af23ed9d34fe5c465f8d34ff85a5d"],["/posts/b8d46b32.html","ab031cbe5a5307d1b231be87b8333cf8"],["/posts/c1b2c6c9.html","55328e54b6fe507b5b2b7978b43112ba"],["/posts/c2111cbf.html","16c49f7cd5eee77c88f0fa9642b2010b"],["/posts/c316c2e8.html","f83240e7be925151cd0fcf61983c51bd"],["/posts/c43e60b5.html","e3e2c1d0b546c4222f588a0fa4e62613"],["/posts/c497a412.html","bfb30250bd6a7b0539c4fce48d8e3ec1"],["/posts/c5395ba3.html","b2b518019c330cbaba9b5fbc241c3494"],["/posts/c5de299a.html","59d623b6844f79fd5eb9e24b7e6e4df7"],["/posts/c70bba9c.html","a0357180709ba2ce097f0bf54a874e3c"],["/posts/c797535e.html","754c02b2e90586dc1f4e401a2e1e7133"],["/posts/c7a62c79.html","51c2a463e80bb8d6dfc4ecdd9895a62d"],["/posts/cae2c959.html","3e96f806113abf6bb07a938cfbc21b5c"],["/posts/cbebef2b.html","f69793b0167b5694d326fbc81c5bc557"],["/posts/cc4c0017.html","09debc3b6968d5970a6a8340d70a5888"],["/posts/ce25023e.html","8ee01a49bc7d4a4d3ff4f3d1f707073d"],["/posts/d2fd4837.html","68fe458ce68fa18a92878ac16fe66833"],["/posts/d3233cbb.html","a7af97c9176b1d212146ca295268a206"],["/posts/d3a745a8.html","3b5d17f6ebb50ace0888825439eeda10"],["/posts/d7e940d2.html","9060ba780b3e212ff51956275eab025f"],["/posts/dc815d5.html","fb4a601030cb052d6569cf075b764c9a"],["/posts/de25b0be.html","9443cebee6d73d8e021b5c5a2589375a"],["/posts/e2623b4e.html","afac35dbf51d0270f705695902bb457c"],["/posts/e3ab6ad8.html","2b9fd472117a56dbbef7196ff560304a"],["/posts/e5018da6.html","706e6ca16c4dfe95289d5b1dc892931b"],["/posts/e5963272.html","3177e3368c8db863f02c4296507241f1"],["/posts/e5ef4c3c.html","955a526bd9d9f433caf4dddd3dd1d558"],["/posts/e624b065.html","5412bcef757c8d277b56318212cac6c1"],["/posts/e7c703bb.html","a01f88494d57aaa80b31b24e6d4309f8"],["/posts/e8f14b6c.html","a66d64a0753ef2615ebf28077c34417c"],["/posts/e91abb63.html","e49fc0e019c1fad655e9cfaaeb430985"],["/posts/ea9a8808.html","b45dccfe56b83f8eb62164f3446c2df7"],["/posts/eb784749.html","2b9f862230f7b2a510f17a0fcb1821f8"],["/posts/ebaf2232.html","ff7fe1edadb8e70e6324e1faf77a47e3"],["/posts/ee1ed673.html","f7c9fbaaf74da15961e6bc5615226804"],["/posts/f0c3ed61.html","ee2ea09e3bcc63987202fdb8f7c58c4e"],["/posts/f151ff43.html","f44beff2ad8c6175167c2b5b23263658"],["/posts/f21e7f84.html","b47cc5005f22e975184ceb0b75a9602f"],["/posts/f230b0fd.html","e11971e86e70b2e7de228873de00754e"],["/posts/f663d5cc.html","d390c7b34a793faf6f279baaf94fcb78"],["/posts/f730ad18.html","07c59f8a8b2bf07adcc191fa8f970b43"],["/posts/fc04d0d4.html","24b722a4b602823d50dd06f2c7cb1b6f"],["/sumire/index.html","4e4a190eceb379baf76a8ebc6e95a05f"],["/sw-register.js","b09be5840f230bb6914bfd2bd296286b"],["/tags/APPLE-project/index.html","aa8a6510938516ca86b7cd23a68315f4"],["/tags/BELL-DA/index.html","94fe98a3ad56bfc35b857b3b2d7576a8"],["/tags/BL-Game/index.html","c4049f583dc27f46a1b578c022e5b80f"],["/tags/Blue-Dahlia-Digital-Creators/index.html","d0058a26795b649276e1fde4cf647385"],["/tags/CHUNSOFT/index.html","e59960f38893aa537a4bad166360de9a"],["/tags/Check＆Stripe/index.html","15ff41a23d5c82f8d5e1bb89427b06ec"],["/tags/Cherry-Pie/index.html","e9fc7355989a5313a5a9f8ab47c69ab3"],["/tags/Circle-Mebius/index.html","0a8525f2879b22fd05aded3baef8fead"],["/tags/CresCENT-BLANK/index.html","484466dd836348b52946ad1aa96a9133"],["/tags/Dopamine-Software/index.html","19042a23d940ebb5556e35225d713a10"],["/tags/Dos/index.html","f0d7c31ee41faca87534dafc82408194"],["/tags/Earth-Well/index.html","6bca108a118335be249f5f01a9449c1b"],["/tags/Forest/index.html","8f20edc949c111f5c74f90b29b4d0db9"],["/tags/HaccaWorks/index.html","40e684105304b4bfbc53cf186dc5ac0c"],["/tags/Kanon/index.html","40df99ad5d0927b385eb26f12a657751"],["/tags/MANATSU-8/index.html","3ea327c09c36eb14ab5c95badab35a50"],["/tags/MARINE/index.html","22e4cc38ea2378400dd1349295ade6a6"],["/tags/MIO/index.html","89fc7861161c21060accf8ffa8bb953c"],["/tags/NAOX/index.html","8801705c3094a7a7665a4282307c89a3"],["/tags/Nmyu/index.html","07be1c021f19913654edb37bcbfa92ec"],["/tags/O-S-I/index.html","aaab06829c47623771ceb56e5b2988dc"],["/tags/Omegaの視界/index.html","573eb0d640ac37e535d31595dfe07839"],["/tags/PC88/index.html","8636dde08f19f089114bb320b85a4b34"],["/tags/PC98/index.html","12732157de7c94a42ef2cada2c0fcbc0"],["/tags/Perpetual-Room/index.html","3ae146c64efa7113f913b9859fed46c8"],["/tags/Pleiades-Company/index.html","0a5bbb3a64acf818acf5ea61a9f6c15e"],["/tags/Project-Twintail/index.html","a8ff7f4345db6444ac23e2c8c69c7d79"],["/tags/RIFF-RAFF/index.html","8c3c1b4e1440e0e749559a00bcea2569"],["/tags/RPG2000/index.html","503e41c299a2ca31f8c67885c83a8629"],["/tags/Reverv/index.html","d5043a8d94c03b8da37ef34d2c488d6a"],["/tags/SENTIVE/index.html","8a558f334a0c65ac9eae947691856e70"],["/tags/Saihate-SOFT/index.html","fcbaa913b7f7dfa2759f82dc593d4b3d"],["/tags/Scrubbing/index.html","6c2a7042813cf62d1afff63321e894ca"],["/tags/Sky-On-R-imaginAtion/index.html","6b2f9a37ef0290c166c1ac9e46e1b335"],["/tags/StrayMoon/index.html","00c7b15aead3fea2460d563db8de46cb"],["/tags/Studio-Bu-Sa/index.html","0c2a5e83c0ba26c456c81ad35904af2a"],["/tags/TRANSPARENCY/index.html","6eb0a1bcc2cb6a98d7f4a8740d9247e3"],["/tags/ToHeart/index.html","08d88cafd85180673229a7a25ff6c58a"],["/tags/Traumend/index.html","598aaf011b5a40135f89716821c86da9"],["/tags/Witch/index.html","d4ebf84111433f64d191a6ec870c0570"],["/tags/adonis-project/index.html","42d8733ec06dafae6294fe4b216d4045"],["/tags/capriccio-suite/index.html","c368250cb51b9f38293f58d759eebfbd"],["/tags/flash/index.html","16b0c5e3a161dcb81acad1874955f350"],["/tags/galgame/index.html","892f46a21c56e00353aad50be30bb734"],["/tags/galgame/page/2/index.html","71a9281745c8883ca952b8a01d32a979"],["/tags/gal资源/index.html","178e5072d06fec71253b3eb9dcee5f51"],["/tags/gal资源/page/2/index.html","769863bf36e825a6765d4fbf66cf9aed"],["/tags/gal资源/page/3/index.html","edcc215c9392799e37dde0cafc3b1a1b"],["/tags/index.html","f6577f6c8b4937a727fadf35720e861b"],["/tags/rkr/index.html","92f84bdca7a26b28f75f186155d4b137"],["/tags/team-eye-mask/index.html","a8d2f48e1f922669e5d3e1b5f4076fa9"],["/tags/ありすくろいつ/index.html","f6a0320f20ed17797018496c605d2829"],["/tags/いつものところ/index.html","98d6128f07a75dfedbcba1b4df0a959b"],["/tags/きつねみみ饅頭/index.html","a17790d5be50ea31c0d0104c93f66102"],["/tags/ねこねこソフト/index.html","4ee61edec6538a2be1f8e1748fbc840c"],["/tags/ねこバナナ/index.html","a15af8bcfac550d4d813f920e87bda6b"],["/tags/はちみつくまさん/index.html","b1822672b3a6fa99fedb0c8cfe6b8f08"],["/tags/ろりちせ/index.html","e760062227510fbf080ffa1c0fe9d9e5"],["/tags/アイル【チーム・TATU】/index.html","ca4398f460ac055d58a4737630764029"],["/tags/アークシステムワークス/index.html","135e55b9f562faed99cdb691337338d4"],["/tags/ブロッコリー/index.html","e64f0dae671fd124374a395607d6b07d"],["/tags/乙女/index.html","acd74b8184fd37366cc608d71c6e85f4"],["/tags/乙游/index.html","2e7bdaecfc4625e2d6a05311526f4d03"],["/tags/停产/index.html","4a0a3aadd960d29d3b158c9324ed299c"],["/tags/公告/index.html","414d0bf408548e5eba08580feddb7e22"],["/tags/同人/index.html","5ede90c163a3d45c7fab10396adc2482"],["/tags/堀井雄二/index.html","7d0751b83b357a6f40dbce50ea26dfe5"],["/tags/外海なおき/index.html","03c5aaac24898964d59475dcfd8cca04"],["/tags/女性向/index.html","07606b211ec00c612a0552dd2c7b13dd"],["/tags/御茶ノ水電子製作所/index.html","7545fe5ed8017b73580cef33bd5c3d4e"],["/tags/月の水/index.html","3a0de196df7501f94fc924cfa92d5ad8"],["/tags/桃野衿/index.html","81aa7ec5e573f862305f94a06afe3927"],["/tags/機械式少女/index.html","82c596f1b7653b7bd032dd438b491831"],["/tags/水仙/index.html","76e914078dc61a57eae85cb037c083cd"],["/tags/汉化/index.html","7f764b2237253a79aed20d73b95fabfc"],["/tags/熊月温泉/index.html","6e089c428cb33048015d45270fc95887"],["/tags/片冈智/index.html","7986d9e6c7bb87770ce1e860923e614c"],["/tags/片岡とも/index.html","01255095770a07bfc0c14854070fc51d"],["/tags/牙の刻印制作委員会/index.html","90ffbe613ed50e1bfc1859241e44315f"],["/tags/牛カルビ定食-FLAT/index.html","c6c66afcab760d1a3fc10384247ec651"],["/tags/牧尾屋/index.html","7617071742d9960018ec5c6e31d726b8"],["/tags/犬茶屋/index.html","a5f66dce256079b3421185477036b0ef"],["/tags/猫猫社/index.html","a2daa177fe96dc2194300af66bbe4184"],["/tags/王宮魔法劇団/index.html","48207e4b6299351f9d461daafbf7450a"],["/tags/画集/index.html","cdd11e8dc2648df98bac4632cd9fdac0"],["/tags/索引/index.html","34013219f96945ce89d1c04c5dead97f"],["/tags/缺失/index.html","6e6514f370a1e1e25adac484c4d82a8e"],["/tags/自购/index.html","b0856019091737c67a14bff97a664a46"],["/tags/茶葉☆姫/index.html","b0f4032f6bdad0d9a2c48fadd50060a0"],["/tags/郷愁花屋/index.html","0002a15b0e9906d2675f05630ed6ea9c"],["/tags/閂夜明/index.html","d823385f3a971c9f5e54f5b7b07c52ad"],["/tags/音乐美/index.html","fe218c5dface1ec1e8ab1e736ddf8d2b"],["/tags/黒†救/index.html","c3fd6876e507f35deca1e2ffd07a0a58"]];
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
