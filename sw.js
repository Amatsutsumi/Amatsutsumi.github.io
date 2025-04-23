/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","81526e1330ca9855c0272198aceb9596"],["/archives/2024/04/index.html","b17a33687374c822aa42d1a1ff346f61"],["/archives/2024/index.html","24742fca550748ad18b8b783efffaab9"],["/archives/2025/02/index.html","23b179a9e09d39cee2d05b6e016876de"],["/archives/2025/02/page/2/index.html","edc08ae02a4b3783252f8054d1ea32cb"],["/archives/2025/02/page/3/index.html","34d0fa48487bcef43c01e35be6f34d7f"],["/archives/2025/02/page/4/index.html","02607447bf98d3fc719ec1e23c277236"],["/archives/2025/02/page/5/index.html","343caf37c82ce7f86341276ac85e908a"],["/archives/2025/03/index.html","23a37dff4b7ca09f1f2c6fdec99a345a"],["/archives/2025/03/page/2/index.html","0cb1f91ad31f1d081d73fb4046b62765"],["/archives/2025/03/page/3/index.html","9f6198dc2aa6f8d9b30e7aa28a3b499f"],["/archives/2025/03/page/4/index.html","3da6513032c23ee395b5774e0ed0f579"],["/archives/2025/03/page/5/index.html","5de7b22e4b2cd9bace334d141b8b00f6"],["/archives/2025/03/page/6/index.html","f3dc83786b6b5a0aaccd8dffcce554b1"],["/archives/2025/04/index.html","f567be843a96e380adff22e1daebcfb1"],["/archives/2025/04/page/2/index.html","c74ce81a2e7562ae77539607e4d62cf3"],["/archives/2025/04/page/3/index.html","8b966b395c73fe0f3bd06343432ede94"],["/archives/2025/index.html","be5a956eb07bb68c579d6749ee2b9a33"],["/archives/2025/page/10/index.html","536d9a6c563daaf7d2aee1d266a6a8a6"],["/archives/2025/page/11/index.html","e25ff0aaf7df26bdccdaa2f9f298b8b4"],["/archives/2025/page/12/index.html","176878a674fd58f8e65a60a3a3cb911b"],["/archives/2025/page/13/index.html","2d25e5fcff0e54e6e210e7d75c730778"],["/archives/2025/page/2/index.html","a6bf4fd61c3e9e6d5b8d2310ea2964f6"],["/archives/2025/page/3/index.html","14bbd559aa78909d56a0b061d0b70117"],["/archives/2025/page/4/index.html","729b00519b407a9959c5076b02080bde"],["/archives/2025/page/5/index.html","0a267744289b51e56fb1a75b41e9c46b"],["/archives/2025/page/6/index.html","d08bfce46f962bb91ac7b723ceedc16d"],["/archives/2025/page/7/index.html","d62f00f3ef57ac5d976927eb7ac702a1"],["/archives/2025/page/8/index.html","a84cb44212a3a56cc7991d1340abcd7d"],["/archives/2025/page/9/index.html","4b5c587da7e330eb67360ca167f50d30"],["/archives/2026/02/index.html","120876694a7321c37a10c9c2485a723d"],["/archives/2026/index.html","51e9a4c37ea426f54656100b86985655"],["/archives/2825/04/index.html","df2de2ff4894742fae583949434d6487"],["/archives/2825/index.html","15d648297f9d93aa3cf3a3ac7a1d5955"],["/archives/2925/01/index.html","1c1bf7239f833a14afdcf35c683055bd"],["/archives/2925/index.html","b9f0b9dffe25f8f5fa5ef7bc3d3143a3"],["/archives/index.html","e0af7ef38d10ff73f423c7ada7a21e06"],["/archives/page/10/index.html","dc1a0379a39431f7197edd6f19e8816a"],["/archives/page/11/index.html","13942a7a9f3a10dbf6340969c68abf89"],["/archives/page/12/index.html","f7b569492343b007a5f8d12f96e8cd6a"],["/archives/page/13/index.html","523d853e9702e12ca853c68329a42184"],["/archives/page/14/index.html","d50e9d5ea058134374eee2806679800a"],["/archives/page/2/index.html","a15824459de9eb1227380e251a0f382e"],["/archives/page/3/index.html","6ecd4b4210e1daec90258ac3ef90c3a0"],["/archives/page/4/index.html","67e4a9c55751b17927e867db7e167af3"],["/archives/page/5/index.html","dcb12c53860466c09e198bc1cb24e9d9"],["/archives/page/6/index.html","1b77eab8e97fbb72808ff880018cc4d3"],["/archives/page/7/index.html","bc856b150d4ae500caf454c64b6470dd"],["/archives/page/8/index.html","d1c212532fde53755fcd93d66e1bf7b7"],["/archives/page/9/index.html","e67d6e5c75f6d6c2d604ca58692cf302"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","c00878892f8780eed258eaf0d7c09c07"],["/categories/galgame/page/2/index.html","b42b2d65e6e413b0524b070d06c358fb"],["/categories/公告/index.html","6af28bcf401f0e0c433d292e54524e24"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","3f4f9d1d829dae8c236a3838f90c08e3"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","9da25e4a07dd060445297d241db2c289"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","80b064a501acf44148dee8e8e7f97e07"],["/page/10/index.html","fc64eed80c0c6349f687f10b85a4a9c1"],["/page/11/index.html","9ec7a9a7b695cd7d84b420ab1a290281"],["/page/12/index.html","a4f494b2db99d74003e6c24c5f6cba68"],["/page/13/index.html","35240ee9240d86ea15e6ec27fc79b1f0"],["/page/14/index.html","a0379169dfa0802ce323651ebbe497f5"],["/page/2/index.html","1bf28c4a0ef57bd541bd239b3ac71cfb"],["/page/3/index.html","062d6862b0b5685605cdd988b8ae8146"],["/page/4/index.html","26636cba3338293d4dd99fd223a4465f"],["/page/5/index.html","bc31c4740ecbea4b360c3266b1d1b709"],["/page/6/index.html","2fab8bbde9e8dbfdd9cc1eaffc2b7350"],["/page/7/index.html","b25715785c9f52e667b80ba83295de1e"],["/page/8/index.html","eb68025abed76d08851268984acfdeac"],["/page/9/index.html","e142f9c38707f785ca7cc9ba27aceaf7"],["/posts/10c9dd98.html","05bc793bb8728ff026e201b0d2a349c8"],["/posts/1295b569.html","150c04e90cae2ef71143b36dd88c15f8"],["/posts/1370342.html","785e9aec385e368e35cb2aedc97a37be"],["/posts/15ef14c2.html","088f389108bc3f4e04e95a0df3f0b251"],["/posts/15f3959d.html","b87142cff01663f40ec93ff9fea68ee0"],["/posts/18ab785d.html","46b178e7e245932f42876b66b939c1f0"],["/posts/1d59b71f.html","220fccb68f9e40cce17f060853bec11f"],["/posts/20b3f3a4.html","bf005f0ed4881aa0070111afb2734280"],["/posts/245f1c7d.html","56a72880d32b42a524a7287fcb5deefa"],["/posts/252658f.html","e7d6ec6e225c1e4255ccaa1388f66310"],["/posts/28397adc.html","971fc6614a1b06ac9342fc5ef645694c"],["/posts/2ad07f54.html","d7726079b4aa6c68f85619406ca8a47f"],["/posts/2b38bce0.html","82564624e05f283564e5198706d24b4d"],["/posts/2c0a6836.html","f412cfa7fd90b4efa6b820f7d20bcd6f"],["/posts/2ce39bcc.html","6313046fc42ab5329cc50e9e1753e828"],["/posts/2cf620f0.html","91beb322c2ec9d829f3f4f7a71e74a5d"],["/posts/2e30fd6d.html","a8e27f3233e5c4f725e8cadc690526e4"],["/posts/30a413ad.html","5530d02496f912835ade37ab9154e9a1"],["/posts/34292736.html","c080b0a895f5d37b1231f7e59546af97"],["/posts/3468cbe.html","3bf208efc63c0d6e825ed8313b66a964"],["/posts/39176dc0.html","0fe5a3fec15a980bc9c3a3b89b91cfc3"],["/posts/3e118dbf.html","741ad66aa9b56d853b4161919539350d"],["/posts/3f7d823a.html","2bd984ed039338fe094315e0e4e503b0"],["/posts/3f978819.html","49ccd91cb0175431ec6a8c03ade74117"],["/posts/41dac80e.html","7a85016e9ed8cd5ba4c13f3577483371"],["/posts/43945723.html","ae5d441567edb2fa3e351acaade2e7bd"],["/posts/44124a6b.html","311adf8c5c5cf5b542f9436d8dca3275"],["/posts/47abb61d.html","a0d7f27957a76e30a210c2c06e1f14e4"],["/posts/4996478a.html","9ac44c546ea4fc9645d591724d6c685c"],["/posts/4b689be3.html","bfa670bd129d3ca57d62b34b9e3581ad"],["/posts/4cf8423f.html","2228c006f9fef737eff1a8afea964f51"],["/posts/4dcf85c.html","e9775d0758f35613b22363d0bd57599e"],["/posts/500cd322.html","15ab26ec380006fba946584193e0a319"],["/posts/51c9b1ff.html","fca7a92fa923e560e773c98d422536e1"],["/posts/52b5b3c6.html","a39c8fd3fb743915e58dd54f396a52d3"],["/posts/54f496ad.html","0079b0a76a23ba03012bfbb561cb181a"],["/posts/558e1f30.html","b8150420afe61e654fb66ca867b351c9"],["/posts/5d8bea92.html","0625e7da46b05e4beaad55a573c27aef"],["/posts/5f6e0c59.html","d6947bd378dfebc4fd6702110ad13fac"],["/posts/61a63a84.html","45f627b137dbe1d8b03dd1be5f57b9cf"],["/posts/625ab7bf.html","eb0e5b5712d87807e77a0aa518167351"],["/posts/6336a2f9.html","61a436ed4082cc337da23e4484b51620"],["/posts/6432d61a.html","5823b793e45ea1d2f5afe5526f3101cb"],["/posts/6515f032.html","a0c695056d7741674dd01fe4addb827d"],["/posts/6720ccdd.html","68b3460a3691c400d7ef6597053fb029"],["/posts/6a4b5ac8.html","fa1f46eb0dd7ee9b64c31c469936989c"],["/posts/6aa4177c.html","1a73ac25f5669857dc7c555e9e8a2907"],["/posts/6b15f81f.html","a121d33c9d277429df756e3345beecd0"],["/posts/71131d34.html","f11db9f2d8df2822df08c323b9082210"],["/posts/742fd48d.html","ae00ab0e908c9b5f5d110cb7f66a9761"],["/posts/78a8a8d3.html","0dc39bdb993f71401f4efc8f88f7dff3"],["/posts/7a5ef3d0.html","0ddc92a3bbf691e41b642a4666728b8f"],["/posts/7b41e1ac.html","8d692d93fb9512ede44c4b47da3a8c6e"],["/posts/7b51011d.html","df9c38003d73a44418402570b702459b"],["/posts/7e3aa3e2.html","f395a770b531e599d37f91fb0f0638d8"],["/posts/80fe2691.html","1f24d5d3ada6bfe06c7009ab18166dd3"],["/posts/81ac52e9.html","59c9f2a585fbe1775971b260426cf856"],["/posts/82332d11.html","6e0c1cf3a30c3ceb7655438ce152caf5"],["/posts/8486f6f9.html","07640c0cc06161c8cb241160a23aa32d"],["/posts/849b40f8.html","80cb6c27433e090179d82b2cd7d4ae35"],["/posts/85c51d68.html","e1be033db9ff90f5d14b73d2a563c4b3"],["/posts/86a6c500.html","ec292082cf7f1f14c9e5fcb55f304a4f"],["/posts/886f8d3.html","ba4fec8e9d98d528d96855968d4b8ffb"],["/posts/8a7cba10.html","d405db9d577ec30c6b77d2fe5b1b87f7"],["/posts/8ac11b41.html","41f727e15e741d702d37ab961306c6a7"],["/posts/8dd520d9.html","b5e4b34223e8bf27c8ff776313f32eba"],["/posts/8f555654.html","64a1aec8f229de9e2b89799bea1b1dc0"],["/posts/92a980c2.html","9f95e6df68a3443d7c561d7ab7fee734"],["/posts/92ce16.html","a49aaa0a11055407256b0cf527ddd478"],["/posts/93e9943b.html","b2053bc88401fc94ae035affa61d68dc"],["/posts/94d3c794.html","cae0e30c2ed5397acd5bf6c4dd7a0c99"],["/posts/97f50eea.html","513eab812ffc78fbb700b1a56fe3b4c4"],["/posts/97fca8be.html","076be4a94c353e6ca7fde829090b7cdc"],["/posts/98662d05.html","09afff6832fb826a48ed1085222e2ba6"],["/posts/9a2f6162.html","988753391b0f60537fd30a69f2204878"],["/posts/9b22a48d.html","2d421162cb8bb026216b739e21d42a93"],["/posts/9cb455b1.html","ea5eed86dcdf28c94aea37c3ae635545"],["/posts/9ecdeecc.html","5dbb40249b690c42f70ed3ae15ea04cc"],["/posts/9efd7701.html","698aa306ffb93fe3378a0e651c4d6c63"],["/posts/9f61c1a0.html","1dd8a7700e3fcb7472c676a232565e1f"],["/posts/a1de710.html","16eb1ec167d7a96c0fcd2a4e008c9bab"],["/posts/a30eb0cd.html","5f60813f5d2be04a78be9340beb23f2f"],["/posts/a7634b5d.html","63c730641ba3b7592e5dac8c1bb65003"],["/posts/a8c593b5.html","3773bbc85162a29ee3b9988529a09619"],["/posts/ad0c1efa.html","34e01d4d66f392ee83ea3c3686baa077"],["/posts/ada3f440.html","00e6b9554e311ac60590e92b15b33e43"],["/posts/af1807ef.html","da0df4c723061b31db2fcca5c12bb230"],["/posts/b497b647.html","2bef38d2778bba4ba03b17c6f3fd4f63"],["/posts/b4d464b0.html","1f64c8ea797b23dd589809341d6b5fee"],["/posts/b5fb773f.html","b60c950c116428e52c22c84e242569b2"],["/posts/b8d46b32.html","d9081d284a6efe7b847501c533482634"],["/posts/c1b2c6c9.html","c28567d127c977cb91cccaf9b7c87610"],["/posts/c2111cbf.html","4b41a97b4ac3be3aa6cc26b23179da12"],["/posts/c316c2e8.html","378d92d60f29f2b3645e71dd784e19ba"],["/posts/c43e60b5.html","57b6f0c155627cade5b7d807e48f7e07"],["/posts/c497a412.html","61ba37599d146b01bc7973fdbf6e3fd3"],["/posts/c5395ba3.html","178b426cc928ff22aeb7ef6c77a8a021"],["/posts/c5de299a.html","27a540e5889fade5eb85aec3ae33eb56"],["/posts/c70bba9c.html","a4622429fb23e2b6a8808b0c77d7c4b5"],["/posts/c797535e.html","5218a702ac46c9f60e454282b1f8e002"],["/posts/c7a62c79.html","1b05865bf2717b9430b80b78d78d1919"],["/posts/cae2c959.html","fc66a0b48fcf22ad8400ad6a91b98edf"],["/posts/cbebef2b.html","a36e64813dd1384f2ea9d50df069ae04"],["/posts/cc4c0017.html","e2627e0a0c159076e0f57f50b33f83e7"],["/posts/ce25023e.html","5b4ea08d1fd781b19f5193a1911bc78d"],["/posts/d2fd4837.html","5b903c172067904a362291bb50518a81"],["/posts/d3233cbb.html","7cc4796be46c1cca21072fdbacbbd7f8"],["/posts/d3a745a8.html","fcb7d18559de168b964c3aa67d0c55f5"],["/posts/d7e940d2.html","22852e847cd8f2c72fb5f26ddbe05091"],["/posts/dc815d5.html","19a701a3d79166a95422073f4fdc9855"],["/posts/de25b0be.html","be9de44a65975c2ba9839af6f837e59e"],["/posts/e2623b4e.html","9f834acdfc543dcb94a2805485f1a149"],["/posts/e3ab6ad8.html","1f864f33235b83be8edc4da2d94fc122"],["/posts/e5018da6.html","4ed0555ff6215baab7815a297a04b253"],["/posts/e5963272.html","5b8f3e00b9d62271043f99a3bb53fd11"],["/posts/e5ef4c3c.html","b274079b11dfa5b303e110ea174f8357"],["/posts/e624b065.html","d3f2277402220e12d54df67835fd22d9"],["/posts/e7c703bb.html","42e8b0b2c86c521cc5343dc8cd9fa8c4"],["/posts/e8f14b6c.html","1b6c544612f9c3eecf7b4277b5afeae0"],["/posts/e91abb63.html","4828e1fe58749413978982330f91ff92"],["/posts/ea9a8808.html","ad04f3a6e5d56c9d36cfeed1ba8c0813"],["/posts/eb784749.html","dde0835c485a6556598515edd40c7013"],["/posts/ebaf2232.html","0f63fb2eaeaff5a94baa3a9be957627b"],["/posts/ee1ed673.html","ea82df2cbee611a5f2c2eb479c8fde4e"],["/posts/f0c3ed61.html","b4633050fa904a785b440d8f3e25906e"],["/posts/f151ff43.html","9248a7fd26fbe5effa92faa7e44277bd"],["/posts/f21e7f84.html","b6201071e6891b40060dce69218f0082"],["/posts/f230b0fd.html","f5d031cc76f7a4d4b9f470981340e743"],["/posts/f663d5cc.html","a1a2bd2f5f8e247c273cab4eaf1d191e"],["/posts/f730ad18.html","81aefc28ac37d6d499b2bcaa763115fa"],["/posts/fc04d0d4.html","23540849019bae4237440797d3bc3730"],["/sumire/index.html","aa9f366a92048b4ded11594cac56e707"],["/sw-register.js","f0eea9c91379ee7f0bc10894708f2f10"],["/tags/APPLE-project/index.html","9200344214bc01b8a5727532fd0df49e"],["/tags/BELL-DA/index.html","d31f3c022ed6560863a54500a7345a5b"],["/tags/BL-Game/index.html","7a98006460f041de06d0b770dac3a59f"],["/tags/Blue-Dahlia-Digital-Creators/index.html","092c4d73e10713af2fcde83f75727f6d"],["/tags/CHUNSOFT/index.html","e5081a1a69661dc59a79629eb1a77201"],["/tags/Check＆Stripe/index.html","992a54d31f9a15f83c5c39a6dda92be8"],["/tags/Cherry-Pie/index.html","af207459ac0312f898100de9bad02338"],["/tags/Circle-Mebius/index.html","eacbf3a06f0819bd388713ca5d03cdcc"],["/tags/CresCENT-BLANK/index.html","06120583947615b12e7ce610555de8b2"],["/tags/Dopamine-Software/index.html","c07d211877322e7a23a092cd60651b31"],["/tags/Dos/index.html","897b1645abbe4ef6eee4715175223c91"],["/tags/Earth-Well/index.html","637c77fa4feda597fe510578e67bf286"],["/tags/Forest/index.html","2882b09ca9fa4e33e478b6e87856422b"],["/tags/HaccaWorks/index.html","00da96bdc1660ab69763453dd8e78a6e"],["/tags/Kanon/index.html","42b0fa43e25df58a97ad58f7fe0d29e5"],["/tags/MANATSU-8/index.html","95f4a4a7afcf95cf0017166cbbc6b95c"],["/tags/MARINE/index.html","cb8c3b77637b0423a87196a503d95079"],["/tags/MIO/index.html","d4d254e037da3a5542156ca39d1918c1"],["/tags/NAOX/index.html","cc077c8ffe2a58103ced7fe7fa46e093"],["/tags/Nmyu/index.html","709cd4627aed5084fa1bb4f1fba9b7ba"],["/tags/O-S-I/index.html","478234ae9905c534f522f5504c0cd246"],["/tags/Omegaの視界/index.html","1ed45b0e3d014b8a7d423dcbd7e28781"],["/tags/PC88/index.html","182c949ed7a42dd3d9d57190a1249ebb"],["/tags/PC98/index.html","4c090c96a9a306189d15dde1ae5a4eb2"],["/tags/Perpetual-Room/index.html","74e8d62dcbc766ceb3fa6fc6e93550c5"],["/tags/Pleiades-Company/index.html","4a1bd921da34c0686dd2563a2f3a4445"],["/tags/Project-Twintail/index.html","2d2ae6c6c0ee02f8b92ea6e0283ec7d6"],["/tags/RIFF-RAFF/index.html","b954135e24c471c15c5becffc8008466"],["/tags/Reverv/index.html","d3142c231f1234881aa09ad2e5ff4014"],["/tags/SENTIVE/index.html","e46f3f29b1683d50a3aeb9c718cd91e6"],["/tags/Saihate-SOFT/index.html","8a9bdf94f3dfebe17bff15b7417c3809"],["/tags/Scrubbing/index.html","60cdd4d2a5a367b1b6078272bdf9afd9"],["/tags/Sky-On-R-imaginAtion/index.html","b414818a4e899f425b220cc224f0cba5"],["/tags/StrayMoon/index.html","7d483911444e3c3a34003eb1274e5703"],["/tags/Studio-Bu-Sa/index.html","d5d2d2fca886e96c0359266ae0695dc6"],["/tags/TRANSPARENCY/index.html","0cf40649a705bd3685c6b5d56a12a5dd"],["/tags/ToHeart/index.html","bc64adb98ee73f7fd4b684b7d1ea3504"],["/tags/Traumend/index.html","ae35b681b9748eec70eb084b2654528b"],["/tags/Witch/index.html","1202229efbd40b08b82f54ff0dd13f49"],["/tags/adonis-project/index.html","8f03266fcc80bc505de76972112d861f"],["/tags/capriccio-suite/index.html","85bc15fa3b419c2efea0c847c8b0787f"],["/tags/flash/index.html","d8048db80a3c6255261db94d62c94ed6"],["/tags/galgame/index.html","b931d090e4ec5e9f20fffe2829b08753"],["/tags/galgame/page/2/index.html","3e4fe8e515a2f78ad95a4798630bcd50"],["/tags/gal资源/index.html","34d927f699ffa597515ec506733850fa"],["/tags/gal资源/page/2/index.html","e3d2e227e29a06b267e39d60a36d1792"],["/tags/gal资源/page/3/index.html","ce755cb813a6c487bd91e6f03846f8d5"],["/tags/index.html","fc54f6d0678a60d9c7e387412d294a2a"],["/tags/rkr/index.html","0c72abbfec93af21c5128013bbf19c38"],["/tags/team-eye-mask/index.html","2e10905848fb947c1097fb3306366963"],["/tags/ありすくろいつ/index.html","f33088ebe7c4d2d16b916e7748e8a348"],["/tags/いつものところ/index.html","8f85450cd28e79a773e962880e827ee8"],["/tags/きつねみみ饅頭/index.html","44bcaa753648ce7771c6c0cd4b4f73e9"],["/tags/ねこねこソフト/index.html","63968670d9822e65895726feff66b6f1"],["/tags/ねこバナナ/index.html","46c686bdb4ddd15e12f8cfb6104a5d97"],["/tags/はちみつくまさん/index.html","ab955ec51064dcbc836807475411089e"],["/tags/ろりちせ/index.html","1c1217b13641632fe2c30b959aa23d39"],["/tags/アイル【チーム・TATU】/index.html","e64812ad16be612984bba19705e2b330"],["/tags/アークシステムワークス/index.html","d3e8732799ad219330435145b9d7d4df"],["/tags/ブロッコリー/index.html","b728a515e91b176d0c67757df76050a5"],["/tags/乙女/index.html","8ea7f2b76a013afe0bee325cc497e02b"],["/tags/乙游/index.html","e82ae309b37dfb445ab57a19b4dadcd2"],["/tags/停产/index.html","76840cccfe4b27111fd20bc24d4ee5ed"],["/tags/公告/index.html","a145c7a1fe5fc312b89a05c452fe7178"],["/tags/同人/index.html","7ac276cc80c11845661eac0cad11ef61"],["/tags/堀井雄二/index.html","8ca73f82c027528db52ba1791a1fe216"],["/tags/外海なおき/index.html","b1d818f79c893b170e5c1ce1227b3445"],["/tags/女性向/index.html","aac6c50e01b5fc8dc2124c03242074f7"],["/tags/御茶ノ水電子製作所/index.html","916db31f2e7c2360b7c1c25a40c861c8"],["/tags/月の水/index.html","ab2c98c944669c0fec62b78d945c180d"],["/tags/桃野衿/index.html","d54307a6fddbab2955e8d68ca884a247"],["/tags/機械式少女/index.html","9fef03e0a3a703c15aef7b1d140d1759"],["/tags/水仙/index.html","b0b6f40c1b9d5d22a4156a47a52c0bfc"],["/tags/汉化/index.html","0c48bea74a524243f828a086146a10da"],["/tags/熊月温泉/index.html","455f3f2dcc931a4086527453f87e7b10"],["/tags/片冈智/index.html","faac6b2eb9cf47d2d5b27654e2b33db0"],["/tags/片岡とも/index.html","c65965e8801f31cd065e4d52194b2d73"],["/tags/牙の刻印制作委員会/index.html","24b6523ed92a2b715030c549298110ba"],["/tags/牛カルビ定食-FLAT/index.html","92f9d99bd3b3a09036cc57e7d95e2eab"],["/tags/牧尾屋/index.html","e7916f2a87983a0acd2df56feed4201e"],["/tags/犬茶屋/index.html","8462fb9608423321d1c47b6b3a62250f"],["/tags/猫猫社/index.html","dd84755e493af6fc28da6a72ad28125b"],["/tags/王宮魔法劇団/index.html","567983636df1b7b63466941d2fd7f2e5"],["/tags/画集/index.html","56a3f186d95cfec1e88000b07aaff556"],["/tags/索引/index.html","a42e6b97597db4f2731d2f106511a31f"],["/tags/缺失/index.html","bb3cdde5437a8ccc5154d1c76c6cdc9b"],["/tags/自购/index.html","6cf9a4bef15c17f082e5438f116f05a5"],["/tags/茶葉☆姫/index.html","087cf91cae637170fe398fd23316f85c"],["/tags/郷愁花屋/index.html","ef4257b97502d26b97ad1470a31bac68"],["/tags/閂夜明/index.html","e7852ccb3d64113bcc56c77ee4962a3b"],["/tags/音乐美/index.html","07909e356f4796786e23c2aa068b3cc2"],["/tags/黒†救/index.html","7b340207a570815a33857cd67c06853f"]];
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
