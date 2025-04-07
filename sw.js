/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","adb3f1d9213d140e2010f4fae19db5b1"],["/archives/2024/04/index.html","b2943eb07a9bd3892400cc3f1d67cec4"],["/archives/2024/index.html","f9faedcab56684dde1a7a8f4246e84b7"],["/archives/2025/02/index.html","013a15b5555bfb73b07b68b33480cafb"],["/archives/2025/02/page/2/index.html","6f0b818fb5311914f807221beb0235f5"],["/archives/2025/02/page/3/index.html","6c01a4f39473585ae9f3b09c0f04beb6"],["/archives/2025/02/page/4/index.html","d53115565edc1071e3e94aa3790bd47c"],["/archives/2025/02/page/5/index.html","7a919d10148278e3ebd99cbef4593701"],["/archives/2025/03/index.html","8c346abdefadd9be698d187b9c77d004"],["/archives/2025/03/page/2/index.html","8e97b340f1c8a6bbc5e2572f4a75af00"],["/archives/2025/03/page/3/index.html","58da3fb04de7e7983550eb6badeaf28d"],["/archives/2025/03/page/4/index.html","cb625b5700bff24ddc83d00c1a818d93"],["/archives/2025/03/page/5/index.html","c37096cf1e7c726fe4289bd02212400e"],["/archives/2025/03/page/6/index.html","e2d0045115c6204987441dc57bef8a33"],["/archives/2025/index.html","7aea76c6f365abb5f9cfae68f5abf3c7"],["/archives/2025/page/10/index.html","ae7580e6e82b8ca7b06b3ccbc32fe92d"],["/archives/2025/page/11/index.html","49ea98de4a1df689d22eae7ad76d7369"],["/archives/2025/page/2/index.html","2179fa846b68c7616c38a349f02730aa"],["/archives/2025/page/3/index.html","c3f11fdf8cd033ac6e89164a38610eb5"],["/archives/2025/page/4/index.html","fe7e47eec1d5637e0963f554392845c0"],["/archives/2025/page/5/index.html","ba34738399e8f1903023f324e3272e38"],["/archives/2025/page/6/index.html","530c856fab49a88fa5d628ed86669086"],["/archives/2025/page/7/index.html","de0ec653349adf56c9f7c1e1a6ec8f26"],["/archives/2025/page/8/index.html","df95c5ccced771238d21154b4b3eba8b"],["/archives/2025/page/9/index.html","803a9e6c2f9fd42700dae07e5d464538"],["/archives/2026/02/index.html","70a8bdd589fd1ba3ae6ee2c3a13e9103"],["/archives/2026/index.html","4e6d5f969900cefc114b3aa6d7312e79"],["/archives/2925/01/index.html","18934c0dd30c1c6d72b2ab348f5d7bd6"],["/archives/2925/index.html","0463a35a408826c8aa9ac28a415d9482"],["/archives/index.html","a8ac6ca49d725dda39d9b5e133948214"],["/archives/page/10/index.html","82071dc4fac467c634ea0da0eb33c9ba"],["/archives/page/11/index.html","22ff266c4a26a9200880d6a98cfc57e9"],["/archives/page/2/index.html","9ac49710a12b829e24cfe1416e1a010c"],["/archives/page/3/index.html","412da78cfeb664792c8eea3fbff3eb78"],["/archives/page/4/index.html","02394ea1b408fbd6281d0efac85fb8ae"],["/archives/page/5/index.html","eafa5f76f62a35c4a4f7ac27b4c0f66f"],["/archives/page/6/index.html","6d7d30ca71aa46431aa986ed5145d03f"],["/archives/page/7/index.html","1b61262668df0ff82cf7979424fce22a"],["/archives/page/8/index.html","21e31f0841ffb6af70b8d222ff475b54"],["/archives/page/9/index.html","a641640c6acda3c1aa045a80dd8014c4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","12fa7ccfde142821b5f8a021feec0bfb"],["/categories/galgame/page/2/index.html","42e0f7841dcf661c9f5890021d796839"],["/categories/公告/index.html","7f31b8d0c152c58ffe876204afcd0443"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","a02a25ddaf4f4a0974f86bb4897fddec"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","4ee798e18e57c6604d2d832f00bd21f6"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","58dba633b5548f8166aba44ece4c4325"],["/page/10/index.html","cef7cdc56dafd7f92408978a4c568cb1"],["/page/11/index.html","92e44594f1a366120d5c4474bf7f09cd"],["/page/2/index.html","13d53cb4bfbeebc488b0afc8a5e6d090"],["/page/3/index.html","9ae5d764f06e6b3a73af37e639a938b3"],["/page/4/index.html","4a1f48b03d3d5a99ea53abab464f6fc7"],["/page/5/index.html","48106c448a6051f8f0bbf98d06f9de3b"],["/page/6/index.html","94f8d82e48a114f54d68a07c19e2e583"],["/page/7/index.html","c871de6c02031f8f71fd162671f7c3ad"],["/page/8/index.html","11a408add36abaaad762761b639bc03f"],["/page/9/index.html","e743fe4f2da2f73ee2903e1198982222"],["/posts/10c9dd98.html","f96209c32118d34395be4b34213cbaef"],["/posts/1295b569.html","0c1dacfbb5c75928725952df7fe9860e"],["/posts/1370342.html","0d5a8c902d1cb17484d852a1c2564f4e"],["/posts/15ef14c2.html","cf59f1c308ea1aa18fcccf8896e9b118"],["/posts/15f3959d.html","f38d9fd253ed4aab67d4156157ed16cf"],["/posts/18ab785d.html","72d8b4849ed81594a3297df21c8db6b9"],["/posts/1d59b71f.html","fe0375bae2eca1d8ad71fc4142087174"],["/posts/20b3f3a4.html","72073da2be4456c88d5e5c990ad2cdbc"],["/posts/245f1c7d.html","431a14431272e9adce7fbb8c98529253"],["/posts/252658f.html","297c02ca24baccaf461bfd75badc02cc"],["/posts/28397adc.html","4ec6b2b3233eaeaa7a4d9d2df9f2a7fa"],["/posts/2b38bce0.html","3b8d60e8097bc081eea690f2a61e646b"],["/posts/2c0a6836.html","a2aa985996c171dd25b0a81d45614103"],["/posts/2cf620f0.html","fbed90cbf6b7a2bfb16a1bc84f5051ad"],["/posts/2e30fd6d.html","759c90cbf043347cf6513fd1753b05fb"],["/posts/34292736.html","f46207fd915e3987e8240d8ce3a0acd3"],["/posts/3468cbe.html","99b99471388d053ad4ae5cbd02718cfd"],["/posts/39176dc0.html","dee656bae04db8d51fe7388af21da549"],["/posts/3e118dbf.html","cfcbc974074c91de0480a24cf0a4dfd2"],["/posts/3f7d823a.html","dac44ee0ecbeebf0cf27ca0123b718aa"],["/posts/3f978819.html","34e2c72e926274da8fdcf2cad53e4eec"],["/posts/43945723.html","750b80f069435bfb84f278d6eb76abc2"],["/posts/44124a6b.html","7d180bb66c3b65d6b726d98fc3f013f7"],["/posts/47abb61d.html","cfb29eec3cf61e4b3241299dc3795b9f"],["/posts/4b689be3.html","b957e8ad1856ad4b8ff4cb09f4b177d0"],["/posts/4cf8423f.html","2e331bb07c6d831dbd5d134359480cb2"],["/posts/4dcf85c.html","521e1d04f50254d57c7f0cfaa7ec8156"],["/posts/500cd322.html","2cc531d63fcf4aace447470d7a4ab261"],["/posts/51c9b1ff.html","0efc0165ff81612a3eaca7f44a0fba65"],["/posts/52b5b3c6.html","d8b6aa3a98d9284b93631e381a8a8a09"],["/posts/5f6e0c59.html","e1654942d92814f2e3c14276cc1ef1c2"],["/posts/61a63a84.html","574617b8005ae9a59f93d4ca3d94b11d"],["/posts/625ab7bf.html","276cbd1b1cc2c81af242e2c3db288b0d"],["/posts/6336a2f9.html","95c884e19eedffaa116edd703b1c2dfb"],["/posts/6432d61a.html","5f154b1a513db6dfc9f0f276dbeb2c8f"],["/posts/6515f032.html","8c242ffae214915aa960c306b7c19fdf"],["/posts/6720ccdd.html","05a385e2749c049bba476ea44be5e36d"],["/posts/6a4b5ac8.html","647b516cd01308063fd464e973fc850b"],["/posts/6aa4177c.html","dbb8993b32b5c7243c80a96dc91bc265"],["/posts/6b15f81f.html","ab7cd7e2d2ee1454abed5685dad04370"],["/posts/71131d34.html","54df7475ebc7c3ce55b25a5570ac9b4c"],["/posts/78a8a8d3.html","55d1ffaacfc27666b898f49f66aaa33d"],["/posts/7a5ef3d0.html","51e46cf4c4202515bf2137c197d52836"],["/posts/7b41e1ac.html","4d3c89445d7af3b8d066b8dc73300a43"],["/posts/7b51011d.html","c5ed7bb12c33992cc2515a6d148215d6"],["/posts/7e3aa3e2.html","b25831ccc703099fb15240536a83dd6b"],["/posts/80fe2691.html","263a64d60bc630de0a1548094498681e"],["/posts/81ac52e9.html","7e044d5d1e8181457e34b0376cba0bcd"],["/posts/8486f6f9.html","3c75844686273e7db59650d605b283ab"],["/posts/849b40f8.html","787fcf20051908f67bf4b8dcdb9b6e4a"],["/posts/85c51d68.html","d3155240aa227466e4e86b4963b00104"],["/posts/886f8d3.html","c3c59c75126e151edfc115a9b7bf7cf2"],["/posts/8a7cba10.html","da44f974b7b4478c7087b3dda1a5465b"],["/posts/8ac11b41.html","41deeb5a0a6a131564d0b1f8f92c47a7"],["/posts/8dd520d9.html","6b043b220640f73fa49f36d32aead183"],["/posts/8f555654.html","912325e8af928b35c9d4726f033d6037"],["/posts/92a980c2.html","8da93945869ad57473c3fdc83f8ef41b"],["/posts/92ce16.html","d0ad3a1164ae6a3c98b58f37dc687a8a"],["/posts/93e9943b.html","3f5a618e61b8151da137ede8d390e9d1"],["/posts/94d3c794.html","3b247a87d55bb92484e9c8864569f3fa"],["/posts/97f50eea.html","3f87a6652843acd7e24ea1f36dac695d"],["/posts/97fca8be.html","9ab744b58433f619d9590772eb001e2e"],["/posts/98662d05.html","39f0f4959ffc7b29ccca894a89ed5fe9"],["/posts/9a2f6162.html","f90c624843cd900dd0a373a3f03563d0"],["/posts/9b22a48d.html","f7a6f71129de5b441bb7ec68d54a0e7d"],["/posts/9cb455b1.html","e84865cc452aa4418569cc86984a5b05"],["/posts/9ecdeecc.html","38b91317ba213c615a2b8bb15aa2721f"],["/posts/9efd7701.html","cf6a213ae976a3bb80626c885023dfd8"],["/posts/9f61c1a0.html","2749fb7052b7a4081e5fd529e8cdf196"],["/posts/a1de710.html","2aedbd9128c431bc6784936da3ffb366"],["/posts/a30eb0cd.html","57b72bafdbc669c2e0dc2f3802d468a3"],["/posts/af1807ef.html","d07f985cd76c1d5eb7073cee1fe615c2"],["/posts/b497b647.html","058387b06369f0fd13eb25e7900b3302"],["/posts/b4d464b0.html","ac5d62ae080614aa20e884d4b2497941"],["/posts/b5fb773f.html","85be2effcdabafbba7340ae86c3df6a8"],["/posts/b8d46b32.html","3035dc1111a4f7df3c6682179d0a2c9b"],["/posts/c1b2c6c9.html","32dde2478d468ddd361aa095f55f8467"],["/posts/c2111cbf.html","4f7bb534152f472ee71a7ae48a23d871"],["/posts/c316c2e8.html","b554c2523b7d2cffb636ca047c7a29b7"],["/posts/c43e60b5.html","946e9bb224582b00b9f2149570dfb114"],["/posts/c497a412.html","07bcfc3d6f4fd4acfc3d0dc9ebef29a3"],["/posts/c5de299a.html","1794845f1c4ba02fb55b3ec88cf05a3a"],["/posts/c70bba9c.html","ae0c25ad2606edc3eb34b19d8e35e783"],["/posts/c797535e.html","c32a113b4ba29f1d32123e2b475cc899"],["/posts/c7a62c79.html","6a507d493d091bf10584fc601c49ec66"],["/posts/cae2c959.html","19d5f5c305dfcd87e42c2997a9cc9e1d"],["/posts/cbebef2b.html","4de476a052e1f91d581f2ce9ab72f46f"],["/posts/ce25023e.html","343b9599bff8fa069ab54e721c6fa980"],["/posts/d2fd4837.html","e6a782be021a189f0cdab4d6612648c4"],["/posts/d3233cbb.html","d00e7aacdf3c74c41966609a0fd16ffc"],["/posts/d3a745a8.html","3d78541a1ed7864d1decf34dc2a37e6f"],["/posts/dc815d5.html","25d05fe89626309254663630377935c3"],["/posts/e3ab6ad8.html","fe28250baf06df71f4628bc37f5f09d4"],["/posts/e5018da6.html","682b0fcb90731d7bd458178a4e5cb316"],["/posts/e5963272.html","7e3b76e84503baa316e53c65fe275d73"],["/posts/e624b065.html","9b070b45b1a3dfa7cd4092c8fb7ddd9f"],["/posts/e7c703bb.html","592f86854670bd2b4819a227119e60d1"],["/posts/e8f14b6c.html","f495349d69331ce14114048ccd5d597e"],["/posts/e91abb63.html","ba786ff580f73fe4b831428ffaaecbbd"],["/posts/ea9a8808.html","661f467c13e3fcb4c6556cce8c97de24"],["/posts/ebaf2232.html","8432d966f649fd6c93d3dab2f973b167"],["/posts/ee1ed673.html","414272238c22b2c8b4d8b385d7b9bdc1"],["/posts/f0c3ed61.html","e262aba4f4c0ed28dbf9e868f82816cf"],["/posts/f21e7f84.html","af1022a54f8006ef5e491b43b053c917"],["/posts/f230b0fd.html","abb4ca1fcbf6058ea560120d19b447db"],["/posts/fc04d0d4.html","50ffe9c39edbb6b9b01e7b3991bece4f"],["/sumire/index.html","21da34fbf8f7d090441876749d7238ed"],["/sw-register.js","52a2527f5c48fc69778936f9f8f1e1df"],["/tags/APPLE-project/index.html","15d62507c5ecc7448ef7446fbc42e73e"],["/tags/BELL-DA/index.html","c0f6eb946553b5d15f900cd3b6642216"],["/tags/BL-Game/index.html","e4ca3c2d8b9c6c0b0ebe953f4f45b72e"],["/tags/Blue-Dahlia-Digital-Creators/index.html","9a20ae97b5c55990fd65b11b8c6db2d9"],["/tags/CHUNSOFT/index.html","6a38d5c11b8da072d15e680f6a6f70bd"],["/tags/Cherry-Pie/index.html","0945ba4b124ad81792fd089a8b923031"],["/tags/Circle-Mebius/index.html","516288e95124743190e5e2a11aee65a9"],["/tags/CresCENT-BLANK/index.html","80f09166bd4ae974cd43e2174f98eee5"],["/tags/Dopamine-Software/index.html","3177317679bf73f7f419e0a7d4553c67"],["/tags/Dos/index.html","6c6a6b71a54c5338e31dc9728f7c3339"],["/tags/Earth-Well/index.html","a16426d85693b4c03162da16969f46c0"],["/tags/Kanon/index.html","9ca0800cdd75f0cca706728767b8fdce"],["/tags/MANATSU-8/index.html","cc9cb71bfdd64efc193b1f8c3f725bc9"],["/tags/MIO/index.html","73c06afa637ec1a3c6eb1686fb6fa571"],["/tags/Nmyu/index.html","283ae737f15363e27c046561b72ca4ce"],["/tags/O-S-I/index.html","33bfd132f345723d0d1267d64b898cb8"],["/tags/Omegaの視界/index.html","8617c861183cc6f676e56ec460de9499"],["/tags/PC88/index.html","d1615d5313e2bfc850f686e6b59b1120"],["/tags/PC98/index.html","d6d91172b6f0c378b9ab276d8d5c2566"],["/tags/Perpetual-Room/index.html","e046fcc3e1fa7881c2ce55cd6d8bc6c2"],["/tags/Pleiades-Company/index.html","246f24f3206a189873ab64b0a57206c5"],["/tags/Project-Twintail/index.html","a89b6fe2de92f4af23e1c1479f0b71db"],["/tags/Reverv/index.html","bef0f035842631e9fbac1d1bae62f14c"],["/tags/Saihate-SOFT/index.html","dd9ec4f87e5f27f9d670928a7434290d"],["/tags/Sky-On-R-imaginAtion/index.html","0c54330fbaedf87c582b7106b090be67"],["/tags/StrayMoon/index.html","7eaf9d5965246b4067185e4a1a25a8d9"],["/tags/Studio-Bu-Sa/index.html","61bc516c6add25ac690944e65a38c731"],["/tags/ToHeart/index.html","f9ee7eacf6c16fcc822bd92019495b37"],["/tags/Traumend/index.html","0e604d848a13165ceda65a2bdc1ef655"],["/tags/Witch/index.html","bd75ea263d49f0f211ae60fae2c79c2b"],["/tags/adonis-project/index.html","ffe9c3604d9b406267c3d94c5358b51f"],["/tags/flash/index.html","aedd2b06bb71db3b04a2513682a2c6ae"],["/tags/galgame/index.html","ee3730c3a9178d78dd93d138275f07c8"],["/tags/galgame/page/2/index.html","5f38a8cf1c8cffdbd46ede546bd82b52"],["/tags/gal资源/index.html","ba4841c58155db84850176910b51e28e"],["/tags/gal资源/page/2/index.html","7a7ab188fbcf3632c10066cc47ca830f"],["/tags/gal资源/page/3/index.html","401fcfe2e438962e97df6c943abd5073"],["/tags/index.html","ccd7e314e0641a380bf0b5c9d7aa1d09"],["/tags/rkr/index.html","9ae30baaf8d2bab2807b1d981c080045"],["/tags/team-eye-mask/index.html","cba72e73040097331e930e13b093af4c"],["/tags/ありすくろいつ/index.html","bfd391078bae059c22842b12e0130fe2"],["/tags/いつものところ/index.html","0208b7017204d6aca815caa97565ba06"],["/tags/きつねみみ饅頭/index.html","1ac172b3bac282cbd093e3559dea0867"],["/tags/ねこねこソフト/index.html","da70e3d13452f7ffd86437d71dfee7db"],["/tags/ねこバナナ/index.html","f4c0728de85b2a194e6c02e9f46259b9"],["/tags/はちみつくまさん/index.html","17dbb16adae62afdc935c1e273284a42"],["/tags/ろりちせ/index.html","397e1eea8e46b20717ab90208614809e"],["/tags/アイル【チーム・TATU】/index.html","290a8ca4db6417ae72d7083c0fd7ce08"],["/tags/アークシステムワークス/index.html","9d6922fce74b1c10b32934af7d76a3fc"],["/tags/ブロッコリー/index.html","37aa9bf8ea6167d1adce783d3b96a9bd"],["/tags/乙女/index.html","beb034e757f516d05c3a0922d8480a12"],["/tags/停产/index.html","2eba88bd37a9d99061bcea3bebb3c674"],["/tags/公告/index.html","f9de7d7bdce6b0e69d1eb19c6cbf6c73"],["/tags/同人/index.html","cf83ff89861e38ebff5b8afe23ee9240"],["/tags/堀井雄二/index.html","a3a7086f53a14eb59ed78f5764200708"],["/tags/外海なおき/index.html","793fdee55ff6559f8c63d7293c7873dd"],["/tags/機械式少女/index.html","4d28816339206c736b1bd0f545e8c014"],["/tags/水仙/index.html","6776293599df64fa3f0ff53407ffee6a"],["/tags/汉化/index.html","57c01215016d038cedb6c1210f532836"],["/tags/片冈智/index.html","7ee1515f24ec1e2e5fd2b9df904978b1"],["/tags/片岡とも/index.html","3162679da395c78560dc5e896c25cad2"],["/tags/牙の刻印制作委員会/index.html","974a1fac408a3eb109ede6b7f788ca86"],["/tags/牛カルビ定食-FLAT/index.html","f00aa19517106a7c30d06818c3febfa2"],["/tags/牧尾屋/index.html","92202edf6ac676e770a442e4c0633273"],["/tags/猫猫社/index.html","d637480c5ddadfff18383e342d1a4061"],["/tags/王宮魔法劇団/index.html","6362cb343db995cf5e5a6f3e639dd8a7"],["/tags/画集/index.html","301b79cbff15ba3b66a41987b02f45f9"],["/tags/索引/index.html","8c65a1519d8736e5c961c2bb82e0d5fa"],["/tags/自购/index.html","3528482dce4bbb10d29f23b6720cd0b0"],["/tags/郷愁花屋/index.html","e8bdbe06b65b0ad36b4415c189e28dca"],["/tags/閂夜明/index.html","3441b4f7d3a7d3704916834b75c25502"],["/tags/音乐美/index.html","5e58d0fea34db119829281849877e4b2"],["/tags/黒†救/index.html","8f1ac169e68197768eb38d7df6f9d85a"]];
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
