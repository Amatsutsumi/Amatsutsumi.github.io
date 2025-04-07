/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","da5072e4ccd6d5a67225e17f9f6374be"],["/archives/2024/04/index.html","a6da85f23525a0dfc2eec5b260e1b992"],["/archives/2024/index.html","d004a115c47ee08a8e9adafe4b62c168"],["/archives/2025/02/index.html","68c41fcc9267a7af26cea5896efb76ef"],["/archives/2025/02/page/2/index.html","292c012f07e83d83cf552f81b246faff"],["/archives/2025/02/page/3/index.html","11c090d2819c94c15b9a57dd006e47a5"],["/archives/2025/02/page/4/index.html","4a98b041b375afe54147530a9fc32893"],["/archives/2025/02/page/5/index.html","bb122a453c1ad810aaec1fde4a7d6131"],["/archives/2025/03/index.html","2566051bd10e1878558e533d5317e5c4"],["/archives/2025/03/page/2/index.html","039f501ed97b8e1a26630d8258d3cd8e"],["/archives/2025/03/page/3/index.html","353efb5605a53b22725e70d5e66e5e43"],["/archives/2025/03/page/4/index.html","7bcd8f1db22f5951e56a85ee06e3f0f3"],["/archives/2025/03/page/5/index.html","19e12c6381fcfde5b021df511bbbfe74"],["/archives/2025/03/page/6/index.html","7eca06c6c17137693b95005eb8cdf625"],["/archives/2025/index.html","a264728875944893f11261c925b8a63f"],["/archives/2025/page/10/index.html","210a04f1ea0d108e23c0fede0ee824e0"],["/archives/2025/page/11/index.html","ae36db90e36877c60ea54db8e9e2a364"],["/archives/2025/page/2/index.html","85fdd7b9ae455f962175862b4a57f704"],["/archives/2025/page/3/index.html","d567348b2ffb9776e5dc8743b44ec2ca"],["/archives/2025/page/4/index.html","e8dcff3ffc1cf84681ac8866e6cf2ba8"],["/archives/2025/page/5/index.html","a239100e58be6e1e5701377b1d122fff"],["/archives/2025/page/6/index.html","27f64325365e3a6c7bbba61f3721e846"],["/archives/2025/page/7/index.html","677a717eaa58db33eb87890ba76d43e3"],["/archives/2025/page/8/index.html","9e3a08ef099a47203169a1a6e4db6191"],["/archives/2025/page/9/index.html","a4c5b0ae94ee08e31c599ed6da6d4fc7"],["/archives/2026/02/index.html","b8e406931381dd364643c3a86dafbc4d"],["/archives/2026/index.html","b1ec994de7432cf6c4b1a58b2fd13625"],["/archives/2925/01/index.html","52566c9ad8dc5900aeb87f2e37707249"],["/archives/2925/index.html","16f5dfd93db5031b8a745cc58c1e7707"],["/archives/index.html","9affeb34930c49debc58418eee9ea6da"],["/archives/page/10/index.html","210910ddd183ad7ec47945304eb50b6b"],["/archives/page/11/index.html","6613c8005364508f267cb138f9f6ee03"],["/archives/page/2/index.html","dea6c2553d2d9b704b4660f3debf7627"],["/archives/page/3/index.html","beada12527be172cddc9134e0c21303f"],["/archives/page/4/index.html","592b8cac9b767463806511b0eb48ebfb"],["/archives/page/5/index.html","8a38fc945980b7cd87268fd4f9207fb0"],["/archives/page/6/index.html","c8455272653e092684d085f0eb4fb282"],["/archives/page/7/index.html","711e4a81bb4f1a3a471ebaf8fbb69a9e"],["/archives/page/8/index.html","b5f9bdbfd181678427be9924018483c0"],["/archives/page/9/index.html","65eb05fa62b7b4502ab226ddfb827ccd"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","dd5260dcae7d820031ca09fbf27456b4"],["/categories/galgame/page/2/index.html","b09f01842f4ca91c030b80949a3dcce3"],["/categories/公告/index.html","b20267e1499c6ad4745baeaa65ec1539"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","fda84f39f72c45f3d466c36a286beee7"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","35879c27fa1c53bd259fd1bb1c1634a5"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ded876fb046ec8cc9448aa7aa0677c5d"],["/page/10/index.html","e62f2099dc9051a3f1e12d96cbc06cd7"],["/page/11/index.html","3db12d3b9e669de436117352be1af844"],["/page/2/index.html","20c62f9fe21c9e14fcd5ad607ef7b833"],["/page/3/index.html","e618a447ed1667cd544441da3af46907"],["/page/4/index.html","8e26b32f9775ac615bca774974717431"],["/page/5/index.html","a93d564ca10de2fdf0ee9a09a4257bcd"],["/page/6/index.html","b2c19424f562841fa1000b07ce09a91b"],["/page/7/index.html","1ebc23ffb6cddfbb1b02c1022cfc446a"],["/page/8/index.html","dd20ec1e0c39f5a929e0477fa265837a"],["/page/9/index.html","0bd3579c84728c4092b5fd10bb752a68"],["/posts/10c9dd98.html","f96209c32118d34395be4b34213cbaef"],["/posts/1295b569.html","0c1dacfbb5c75928725952df7fe9860e"],["/posts/1370342.html","0d5a8c902d1cb17484d852a1c2564f4e"],["/posts/15ef14c2.html","037a20f74bc540a7010ad9f8928641d8"],["/posts/15f3959d.html","f38d9fd253ed4aab67d4156157ed16cf"],["/posts/18ab785d.html","72d8b4849ed81594a3297df21c8db6b9"],["/posts/1d59b71f.html","fe0375bae2eca1d8ad71fc4142087174"],["/posts/20b3f3a4.html","72073da2be4456c88d5e5c990ad2cdbc"],["/posts/245f1c7d.html","431a14431272e9adce7fbb8c98529253"],["/posts/252658f.html","297c02ca24baccaf461bfd75badc02cc"],["/posts/28397adc.html","4ec6b2b3233eaeaa7a4d9d2df9f2a7fa"],["/posts/2b38bce0.html","3b8d60e8097bc081eea690f2a61e646b"],["/posts/2c0a6836.html","a2aa985996c171dd25b0a81d45614103"],["/posts/2cf620f0.html","fbed90cbf6b7a2bfb16a1bc84f5051ad"],["/posts/2e30fd6d.html","759c90cbf043347cf6513fd1753b05fb"],["/posts/34292736.html","f46207fd915e3987e8240d8ce3a0acd3"],["/posts/3468cbe.html","99b99471388d053ad4ae5cbd02718cfd"],["/posts/39176dc0.html","dee656bae04db8d51fe7388af21da549"],["/posts/3e118dbf.html","cfcbc974074c91de0480a24cf0a4dfd2"],["/posts/3f7d823a.html","dac44ee0ecbeebf0cf27ca0123b718aa"],["/posts/3f978819.html","f1981fe052772a6de7660138de0fa1fd"],["/posts/43945723.html","750b80f069435bfb84f278d6eb76abc2"],["/posts/44124a6b.html","7d180bb66c3b65d6b726d98fc3f013f7"],["/posts/47abb61d.html","cfb29eec3cf61e4b3241299dc3795b9f"],["/posts/4b689be3.html","b957e8ad1856ad4b8ff4cb09f4b177d0"],["/posts/4cf8423f.html","2e331bb07c6d831dbd5d134359480cb2"],["/posts/4dcf85c.html","521e1d04f50254d57c7f0cfaa7ec8156"],["/posts/500cd322.html","2cc531d63fcf4aace447470d7a4ab261"],["/posts/51c9b1ff.html","0efc0165ff81612a3eaca7f44a0fba65"],["/posts/52b5b3c6.html","d8b6aa3a98d9284b93631e381a8a8a09"],["/posts/5f6e0c59.html","e1654942d92814f2e3c14276cc1ef1c2"],["/posts/61a63a84.html","574617b8005ae9a59f93d4ca3d94b11d"],["/posts/625ab7bf.html","276cbd1b1cc2c81af242e2c3db288b0d"],["/posts/6336a2f9.html","1c35789c98470c40726c3ab8f5015ec6"],["/posts/6432d61a.html","5f154b1a513db6dfc9f0f276dbeb2c8f"],["/posts/6515f032.html","8c242ffae214915aa960c306b7c19fdf"],["/posts/6720ccdd.html","05a385e2749c049bba476ea44be5e36d"],["/posts/6a4b5ac8.html","647b516cd01308063fd464e973fc850b"],["/posts/6aa4177c.html","dbb8993b32b5c7243c80a96dc91bc265"],["/posts/6b15f81f.html","ab7cd7e2d2ee1454abed5685dad04370"],["/posts/71131d34.html","54df7475ebc7c3ce55b25a5570ac9b4c"],["/posts/78a8a8d3.html","55d1ffaacfc27666b898f49f66aaa33d"],["/posts/7a5ef3d0.html","51e46cf4c4202515bf2137c197d52836"],["/posts/7b41e1ac.html","4d3c89445d7af3b8d066b8dc73300a43"],["/posts/7b51011d.html","c5ed7bb12c33992cc2515a6d148215d6"],["/posts/7e3aa3e2.html","b25831ccc703099fb15240536a83dd6b"],["/posts/80fe2691.html","263a64d60bc630de0a1548094498681e"],["/posts/81ac52e9.html","7e044d5d1e8181457e34b0376cba0bcd"],["/posts/8486f6f9.html","3c75844686273e7db59650d605b283ab"],["/posts/849b40f8.html","787fcf20051908f67bf4b8dcdb9b6e4a"],["/posts/85c51d68.html","9667fc976cddbac6c25bfd6f1ac739aa"],["/posts/886f8d3.html","c3c59c75126e151edfc115a9b7bf7cf2"],["/posts/8a7cba10.html","da44f974b7b4478c7087b3dda1a5465b"],["/posts/8ac11b41.html","41deeb5a0a6a131564d0b1f8f92c47a7"],["/posts/8dd520d9.html","6b043b220640f73fa49f36d32aead183"],["/posts/8f555654.html","912325e8af928b35c9d4726f033d6037"],["/posts/92a980c2.html","8da93945869ad57473c3fdc83f8ef41b"],["/posts/92ce16.html","d0ad3a1164ae6a3c98b58f37dc687a8a"],["/posts/93e9943b.html","3f5a618e61b8151da137ede8d390e9d1"],["/posts/94d3c794.html","3b247a87d55bb92484e9c8864569f3fa"],["/posts/97f50eea.html","3f87a6652843acd7e24ea1f36dac695d"],["/posts/97fca8be.html","9ab744b58433f619d9590772eb001e2e"],["/posts/98662d05.html","39f0f4959ffc7b29ccca894a89ed5fe9"],["/posts/9a2f6162.html","f90c624843cd900dd0a373a3f03563d0"],["/posts/9b22a48d.html","f7a6f71129de5b441bb7ec68d54a0e7d"],["/posts/9cb455b1.html","e84865cc452aa4418569cc86984a5b05"],["/posts/9ecdeecc.html","38b91317ba213c615a2b8bb15aa2721f"],["/posts/9efd7701.html","cf6a213ae976a3bb80626c885023dfd8"],["/posts/9f61c1a0.html","2749fb7052b7a4081e5fd529e8cdf196"],["/posts/a1de710.html","2aedbd9128c431bc6784936da3ffb366"],["/posts/a30eb0cd.html","57b72bafdbc669c2e0dc2f3802d468a3"],["/posts/af1807ef.html","d07f985cd76c1d5eb7073cee1fe615c2"],["/posts/b497b647.html","058387b06369f0fd13eb25e7900b3302"],["/posts/b4d464b0.html","ac5d62ae080614aa20e884d4b2497941"],["/posts/b5fb773f.html","85be2effcdabafbba7340ae86c3df6a8"],["/posts/b8d46b32.html","3035dc1111a4f7df3c6682179d0a2c9b"],["/posts/c1b2c6c9.html","32dde2478d468ddd361aa095f55f8467"],["/posts/c2111cbf.html","4f7bb534152f472ee71a7ae48a23d871"],["/posts/c316c2e8.html","b554c2523b7d2cffb636ca047c7a29b7"],["/posts/c43e60b5.html","946e9bb224582b00b9f2149570dfb114"],["/posts/c497a412.html","07bcfc3d6f4fd4acfc3d0dc9ebef29a3"],["/posts/c5de299a.html","1794845f1c4ba02fb55b3ec88cf05a3a"],["/posts/c70bba9c.html","ae0c25ad2606edc3eb34b19d8e35e783"],["/posts/c797535e.html","c32a113b4ba29f1d32123e2b475cc899"],["/posts/c7a62c79.html","6a507d493d091bf10584fc601c49ec66"],["/posts/cae2c959.html","e4f0ad39f276507aee159ab105a2094d"],["/posts/cbebef2b.html","4de476a052e1f91d581f2ce9ab72f46f"],["/posts/ce25023e.html","343b9599bff8fa069ab54e721c6fa980"],["/posts/d2fd4837.html","e6a782be021a189f0cdab4d6612648c4"],["/posts/d3233cbb.html","d00e7aacdf3c74c41966609a0fd16ffc"],["/posts/d3a745a8.html","3d78541a1ed7864d1decf34dc2a37e6f"],["/posts/dc815d5.html","fa23c30edbcd147d804a56361e29fdf0"],["/posts/e3ab6ad8.html","fe28250baf06df71f4628bc37f5f09d4"],["/posts/e5018da6.html","682b0fcb90731d7bd458178a4e5cb316"],["/posts/e5963272.html","7e3b76e84503baa316e53c65fe275d73"],["/posts/e624b065.html","9b070b45b1a3dfa7cd4092c8fb7ddd9f"],["/posts/e7c703bb.html","592f86854670bd2b4819a227119e60d1"],["/posts/e8f14b6c.html","f495349d69331ce14114048ccd5d597e"],["/posts/e91abb63.html","ba786ff580f73fe4b831428ffaaecbbd"],["/posts/ea9a8808.html","661f467c13e3fcb4c6556cce8c97de24"],["/posts/ebaf2232.html","8432d966f649fd6c93d3dab2f973b167"],["/posts/ee1ed673.html","414272238c22b2c8b4d8b385d7b9bdc1"],["/posts/f0c3ed61.html","e262aba4f4c0ed28dbf9e868f82816cf"],["/posts/f21e7f84.html","af1022a54f8006ef5e491b43b053c917"],["/posts/f230b0fd.html","abb4ca1fcbf6058ea560120d19b447db"],["/posts/fc04d0d4.html","50ffe9c39edbb6b9b01e7b3991bece4f"],["/sumire/index.html","f24c3f63d4176fe21d15343466b2f118"],["/sw-register.js","ac8f4a7a6a452d768a860ed1e32ea578"],["/tags/APPLE-project/index.html","d717612b82dace94b5e6eaa58399ce60"],["/tags/BELL-DA/index.html","c1a5f7e0f74c309f75a19e9ad507d351"],["/tags/BL-Game/index.html","da5400752a8b15f34e4555c6beee08b9"],["/tags/Blue-Dahlia-Digital-Creators/index.html","7ac28b8d18ff60e296a100286840fa55"],["/tags/CHUNSOFT/index.html","e869befa8d5a5a0ffb91762989897d1d"],["/tags/Cherry-Pie/index.html","11c3ec75d5fd5dbc2cc4ebd9b2f69e17"],["/tags/Circle-Mebius/index.html","16aec78dad33d3d57012779d91fee99a"],["/tags/CresCENT-BLANK/index.html","d2156bb5924c8c5f5013928c154fbdf7"],["/tags/Dopamine-Software/index.html","6cd3a8e33ee9475e18a14b9575d7f090"],["/tags/Dos/index.html","452cf8841a684f100662fcf7c70a0834"],["/tags/Earth-Well/index.html","bb6a8ecac1152961f58685c40493bdfd"],["/tags/Kanon/index.html","fb32c1d85eb34dd9b09a588452eb112f"],["/tags/MANATSU-8/index.html","02d28f0ff06f4147641a1eae674e7f0f"],["/tags/MIO/index.html","816ecc5485c26c1f3cb483cd1a15a951"],["/tags/Nmyu/index.html","edef13ef09bd079bc3a7e71b2ed347ab"],["/tags/O-S-I/index.html","72bcdec6c2afe35ad5d386ac6cc30d4b"],["/tags/Omegaの視界/index.html","0fd3ab5bbf9709dcb02e8aab89e4a4e9"],["/tags/PC88/index.html","16b6168284d978d0027276acc4d8b4cb"],["/tags/PC98/index.html","2422dfcacd39da7f40f88a92250f114f"],["/tags/Perpetual-Room/index.html","99b7503414fc830f8d2e5a2e3e861ee3"],["/tags/Pleiades-Company/index.html","70f174f937df0f2e90b420bdc4edba8b"],["/tags/Project-Twintail/index.html","14e60246b2a831724badf5fd53fb3c04"],["/tags/Reverv/index.html","22bf7b09aea165e046e9f091bdcab52b"],["/tags/Saihate-SOFT/index.html","05a431134535468fafb8cf1c81d3979d"],["/tags/Sky-On-R-imaginAtion/index.html","200b478319de2bb11353cece9642d94d"],["/tags/StrayMoon/index.html","698acca023d95b4cf826c1326abb7c65"],["/tags/Studio-Bu-Sa/index.html","f942829533cb2d08f381b5ec87e45467"],["/tags/ToHeart/index.html","c3d039b3271ace822460d8c5ccafdfd8"],["/tags/Traumend/index.html","b2a3aa0117b3ab2bd564871a5e1c1d16"],["/tags/Witch/index.html","971ae3833394e2010b032d6069962bf8"],["/tags/adonis-project/index.html","ee014546407b47161128fd25fd55e183"],["/tags/flash/index.html","da87def21791e4f53d70ee5d5eee173a"],["/tags/galgame/index.html","be6c637b626b3d2cba83016b79eaa524"],["/tags/galgame/page/2/index.html","3759cef87e2b751d44c7d735f0c6e5b5"],["/tags/gal资源/index.html","209c44b809d9eefdc3f510e0a7c18b6a"],["/tags/gal资源/page/2/index.html","a2dec87dfcce698b4c98682609d95cfa"],["/tags/gal资源/page/3/index.html","231fbf5d4eabc0d9d1ac6a81e9e157d2"],["/tags/index.html","4434756170680960f4016d448018afbe"],["/tags/rkr/index.html","4bf119909ec56d1db7f1c974270846ad"],["/tags/team-eye-mask/index.html","b8d24d97e4f15436cbe201dc5489a384"],["/tags/ありすくろいつ/index.html","b8a54a77f28b3694cd4543e083d1155c"],["/tags/いつものところ/index.html","a24cea8b12e1b16a9202a44c48f4fa05"],["/tags/きつねみみ饅頭/index.html","46557d4ace4398b61ce1efd8a0ef7f9b"],["/tags/ねこねこソフト/index.html","c06dc0e3cc3c35fd11b5145442242869"],["/tags/ねこバナナ/index.html","9afbdc8dcb6e0ab6f44629fb6e188e61"],["/tags/はちみつくまさん/index.html","fa416368cd7518c8d2642c8b2f15dc56"],["/tags/ろりちせ/index.html","72a91125bc14219e476cd9c1294cb3b1"],["/tags/アイル【チーム・TATU】/index.html","f59f07f55398609c417f88c834e65e00"],["/tags/アークシステムワークス/index.html","e8dcc77cf743d5e99b7e3eae3ab751ab"],["/tags/ブロッコリー/index.html","aec5badfcd76c7e1ba8dd11f2b95ca28"],["/tags/乙女/index.html","e287536c0678639157dd1d25a2e62f74"],["/tags/停产/index.html","e8bfd7ffe776fe9d596087f0290a4450"],["/tags/公告/index.html","ff4657b90119682d0900f167f94520b6"],["/tags/同人/index.html","dd52f3fe268f529b02a5ea0dbef0200c"],["/tags/堀井雄二/index.html","71ebb5f5c75ae32a162b7e0b2d9a9bda"],["/tags/外海なおき/index.html","3f8b2c5b471ddce8037f70d18f90c89c"],["/tags/機械式少女/index.html","b6c25995d9f3dbca3a426f66d6e6c19b"],["/tags/水仙/index.html","355fe75a0b054f5b1389fd8d9a0f6475"],["/tags/汉化/index.html","f40e47fe31a22e051a83c923a06f7463"],["/tags/片冈智/index.html","5c0a3d77923ba00cf43d2a1a7e8ea216"],["/tags/片岡とも/index.html","58ca5bec7a1ae29da6e4f81e4306ec01"],["/tags/牙の刻印制作委員会/index.html","3ab2501e28458211a82c0f76dae6eeae"],["/tags/牛カルビ定食-FLAT/index.html","928facf3abbb8d6439bd963bee108fc1"],["/tags/牧尾屋/index.html","2d34f4dd40d53c14efcdd34a252a9173"],["/tags/猫猫社/index.html","ef79962bd5878833d1ff66f35078ac0c"],["/tags/王宮魔法劇団/index.html","4e361f56ddb9063ae7f71f455c6572e4"],["/tags/画集/index.html","7a51e1bfe296cfedb3fef34c1572045a"],["/tags/索引/index.html","fa0dff585681038eadb3ab43777e4648"],["/tags/自购/index.html","157a821ec8f1023961eba5a248894f85"],["/tags/郷愁花屋/index.html","d7915b14c5ce42af61f1330c3080994a"],["/tags/閂夜明/index.html","a676dbe5b4dfeff3acc2ccefe5ccfeb2"],["/tags/音乐美/index.html","908ec78b1c51005e3dd62a2fe37593ea"],["/tags/黒†救/index.html","6860f19f4c89fd8fdc1903ee76cfafee"]];
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
