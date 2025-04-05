/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e74a70cfa6f2e69a9cfc5a1d381da302"],["/archives/2024/04/index.html","c13325a07528a5d7565661b418a9bbb4"],["/archives/2024/index.html","473f39465d51e06a9bc2424563c5b4e5"],["/archives/2025/02/index.html","5491287fcb01ca0200747c12baa21364"],["/archives/2025/02/page/2/index.html","9a38c054099871b1426f282c4ac52fc6"],["/archives/2025/02/page/3/index.html","65a9237024c9e0cdba41fca6d1fb3587"],["/archives/2025/02/page/4/index.html","a7ba0c59ca3ee91ba632f0b631dd5a45"],["/archives/2025/02/page/5/index.html","afb44570626ee0c5bcc3c8953cb10d9a"],["/archives/2025/03/index.html","a90964ba2f99f3431674bb778cc73baf"],["/archives/2025/03/page/2/index.html","9f1a264dd7ff119abc584fff918b94a5"],["/archives/2025/03/page/3/index.html","53b59850f4381a324dd71f39765a0660"],["/archives/2025/03/page/4/index.html","0923cfd1ac5285e19da55f28446fc52e"],["/archives/2025/03/page/5/index.html","3448af390427c8769703aa5b7434b611"],["/archives/2025/03/page/6/index.html","07b2069432735f2f05bcb887da6ac26c"],["/archives/2025/index.html","5b5247cb64fc843987432095c68562bc"],["/archives/2025/page/10/index.html","d2349465119aac46d85ebf7be5759b15"],["/archives/2025/page/11/index.html","a3e23b01c65ca4dab02ba4f90723cdbb"],["/archives/2025/page/2/index.html","7d76c3ead032b97b1f5e13bff418c38c"],["/archives/2025/page/3/index.html","c2b84804067f2d7cf7a5b77f0f3a8386"],["/archives/2025/page/4/index.html","4335664f4164aaab5e6d58b747dce7b7"],["/archives/2025/page/5/index.html","ed05befb61639880dc25676f382a15cd"],["/archives/2025/page/6/index.html","2c6c776c6313b3f83df55b45c8de176c"],["/archives/2025/page/7/index.html","96e658206d5b634967edfbe14e4478cc"],["/archives/2025/page/8/index.html","f1a23d93393bfb8cf7e21c961713199c"],["/archives/2025/page/9/index.html","2305b8d1b365d0f8b37854e936b70231"],["/archives/2026/02/index.html","a86608a2dde47b77eab207a6e6da3777"],["/archives/2026/index.html","178ae4a9c3a69a16ecd8eaaf8bc8f0e0"],["/archives/2925/01/index.html","bb78ab3b291c852fa64fc09cd31008d5"],["/archives/2925/index.html","26baa6c8ca3fd17299e4f5692cfe5306"],["/archives/index.html","56d510ba314e0fe53f882cc5c2e5e8e7"],["/archives/page/10/index.html","6e604a9bb8cf4231c3d184933558908e"],["/archives/page/11/index.html","e145012aaadd02e43d0b78fdd2d0210a"],["/archives/page/2/index.html","22d971d3a17deb63e818a4e59e5e5f61"],["/archives/page/3/index.html","502bb66631a001ac4e46fe70e7a258ea"],["/archives/page/4/index.html","e8c46387a240d6e0cc1a5d2a24fd9932"],["/archives/page/5/index.html","71a727c9573d0c3593699bc088f9ebd9"],["/archives/page/6/index.html","0614b5295a6ed14ef9ac75cb83d5d831"],["/archives/page/7/index.html","112c435598943e90d30669b48eff0c1a"],["/archives/page/8/index.html","64f37f581c1acf5c814aa15de0556750"],["/archives/page/9/index.html","937e9f7c0f53858f44e8c7b0af36f51a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","c3b1340e6be6fd2a42900cbf1ef9e96b"],["/categories/galgame/page/2/index.html","86cb9e3ba6db211e949d9c41cfb8f9b1"],["/categories/公告/index.html","6e86e8ce7b39df56e756f4eaf77b9eff"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","aaf8cb263d55c53abdb3e8bffc81591d"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","601430b74be18ea0cd37307bb590b0b7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","c308b8a88f6aa851680622c532bbfd8f"],["/page/10/index.html","634257187855b055db88f6318d52e241"],["/page/11/index.html","531845b469de9bc741675170b1016ec2"],["/page/2/index.html","2c1adc4a57b7e96b637e8d00fed880d1"],["/page/3/index.html","bc4d4f489897f0b6696a4f8e4de86d35"],["/page/4/index.html","e07e43cfc51ae5db5aebe6bc5579c53d"],["/page/5/index.html","c52b4ab786b4c3a459737523db94fc91"],["/page/6/index.html","34e58a7ebf280fd0d8429fc258fffa23"],["/page/7/index.html","f3d51211a1834bab08b8714be69d2b04"],["/page/8/index.html","6490674bf29a28e8b001f69f871743fe"],["/page/9/index.html","63793b0d5dd4d4d8dbd1045461ac75e7"],["/posts/10c9dd98.html","7eb45d462b85f8fcc1c58d5c73482ebc"],["/posts/1295b569.html","0c1dacfbb5c75928725952df7fe9860e"],["/posts/1370342.html","0d5a8c902d1cb17484d852a1c2564f4e"],["/posts/15ef14c2.html","e364e281f6dc4b46381ccd2475203023"],["/posts/15f3959d.html","f38d9fd253ed4aab67d4156157ed16cf"],["/posts/18ab785d.html","72d8b4849ed81594a3297df21c8db6b9"],["/posts/1d59b71f.html","f4320cf33a7952cb41f2f6a77b7f19ee"],["/posts/20b3f3a4.html","40be4258c883a963cd37b4e2859868f3"],["/posts/245f1c7d.html","431a14431272e9adce7fbb8c98529253"],["/posts/252658f.html","297c02ca24baccaf461bfd75badc02cc"],["/posts/28397adc.html","e0f9d020a1a29d4d97ddc1648dca9506"],["/posts/2b38bce0.html","3b8d60e8097bc081eea690f2a61e646b"],["/posts/2c0a6836.html","a2aa985996c171dd25b0a81d45614103"],["/posts/2cf620f0.html","653e6d295b415a674f91b1751dde319c"],["/posts/2e30fd6d.html","759c90cbf043347cf6513fd1753b05fb"],["/posts/34292736.html","f46207fd915e3987e8240d8ce3a0acd3"],["/posts/3468cbe.html","99b99471388d053ad4ae5cbd02718cfd"],["/posts/39176dc0.html","dee656bae04db8d51fe7388af21da549"],["/posts/3e118dbf.html","cfcbc974074c91de0480a24cf0a4dfd2"],["/posts/3f7d823a.html","b40cd4062bf5384614fff4d61259ad3c"],["/posts/3f978819.html","34e2c72e926274da8fdcf2cad53e4eec"],["/posts/43945723.html","750b80f069435bfb84f278d6eb76abc2"],["/posts/44124a6b.html","7d180bb66c3b65d6b726d98fc3f013f7"],["/posts/47abb61d.html","cfb29eec3cf61e4b3241299dc3795b9f"],["/posts/4b689be3.html","da381f087a8b7f6a6bb85c237007bf1e"],["/posts/4cf8423f.html","2e331bb07c6d831dbd5d134359480cb2"],["/posts/4dcf85c.html","811737c97a9d1145f3987fbc8b2873c3"],["/posts/500cd322.html","2cc531d63fcf4aace447470d7a4ab261"],["/posts/51c9b1ff.html","ef4e6c86deb5a654062ec08010478e5a"],["/posts/52b5b3c6.html","04c57f22115864fe68ebf5cdbb8d0345"],["/posts/5f6e0c59.html","e1654942d92814f2e3c14276cc1ef1c2"],["/posts/61a63a84.html","574617b8005ae9a59f93d4ca3d94b11d"],["/posts/625ab7bf.html","276cbd1b1cc2c81af242e2c3db288b0d"],["/posts/6336a2f9.html","cc0a8f2597202a8003ac4de5dcf59e55"],["/posts/6432d61a.html","5f154b1a513db6dfc9f0f276dbeb2c8f"],["/posts/6515f032.html","92ab1a90111633f1a5fc220744f5f944"],["/posts/6720ccdd.html","0ad6022cb9a63422f5bfccf269b6c393"],["/posts/6a4b5ac8.html","647b516cd01308063fd464e973fc850b"],["/posts/6aa4177c.html","dbb8993b32b5c7243c80a96dc91bc265"],["/posts/6b15f81f.html","ab7cd7e2d2ee1454abed5685dad04370"],["/posts/71131d34.html","e284b9a227c8fad30cdf63cc0696646c"],["/posts/78a8a8d3.html","435b79353665735bea948233b63f34db"],["/posts/7a5ef3d0.html","51e46cf4c4202515bf2137c197d52836"],["/posts/7b41e1ac.html","7353bfc9f94f3a15763674b20f98f14a"],["/posts/7b51011d.html","c5ed7bb12c33992cc2515a6d148215d6"],["/posts/7e3aa3e2.html","e7eb16aff0fd8164ee46c806fe910f41"],["/posts/80fe2691.html","891da86b86049985d606256de6850f63"],["/posts/81ac52e9.html","7621e1061b6fafdac1eca33e3d20d2d5"],["/posts/8486f6f9.html","3c75844686273e7db59650d605b283ab"],["/posts/849b40f8.html","e0b2df04f79c50f819219c7909ea71fc"],["/posts/85c51d68.html","d3155240aa227466e4e86b4963b00104"],["/posts/886f8d3.html","29d8b8fd439737919b8a49431a365f3f"],["/posts/8a7cba10.html","da44f974b7b4478c7087b3dda1a5465b"],["/posts/8ac11b41.html","41deeb5a0a6a131564d0b1f8f92c47a7"],["/posts/8dd520d9.html","6b043b220640f73fa49f36d32aead183"],["/posts/8f555654.html","a2a3f87930b25b6ad8e12b189da9f446"],["/posts/92a980c2.html","8da93945869ad57473c3fdc83f8ef41b"],["/posts/92ce16.html","d0ad3a1164ae6a3c98b58f37dc687a8a"],["/posts/93e9943b.html","3f5a618e61b8151da137ede8d390e9d1"],["/posts/94d3c794.html","3f7b8654673161b793c1e4c43cc1fc62"],["/posts/97f50eea.html","b00da0a16424b955fbc910cd2f917436"],["/posts/97fca8be.html","9ab744b58433f619d9590772eb001e2e"],["/posts/98662d05.html","551d6f0fd43140b689877a1cf6b08c16"],["/posts/9a2f6162.html","f90c624843cd900dd0a373a3f03563d0"],["/posts/9b22a48d.html","047ec223be39d5c50219532f23e7a4bf"],["/posts/9cb455b1.html","9b1240e2638bf5a371453c3da7ad0b51"],["/posts/9ecdeecc.html","38b91317ba213c615a2b8bb15aa2721f"],["/posts/9efd7701.html","cf6a213ae976a3bb80626c885023dfd8"],["/posts/9f61c1a0.html","2749fb7052b7a4081e5fd529e8cdf196"],["/posts/a1de710.html","2aedbd9128c431bc6784936da3ffb366"],["/posts/a30eb0cd.html","57b72bafdbc669c2e0dc2f3802d468a3"],["/posts/af1807ef.html","d07f985cd76c1d5eb7073cee1fe615c2"],["/posts/b497b647.html","95e24b53432928e695d76d6a3782bcfa"],["/posts/b4d464b0.html","ac5d62ae080614aa20e884d4b2497941"],["/posts/b5fb773f.html","3c6ebb3c37849647ea605d915c5bf3d1"],["/posts/b8d46b32.html","3035dc1111a4f7df3c6682179d0a2c9b"],["/posts/c1b2c6c9.html","32dde2478d468ddd361aa095f55f8467"],["/posts/c2111cbf.html","4f7bb534152f472ee71a7ae48a23d871"],["/posts/c316c2e8.html","b353f2450f557b05bc58c4b081f01f89"],["/posts/c43e60b5.html","946e9bb224582b00b9f2149570dfb114"],["/posts/c497a412.html","255ed5a9a9e796fa4aeac0d02b4715d6"],["/posts/c5de299a.html","1794845f1c4ba02fb55b3ec88cf05a3a"],["/posts/c70bba9c.html","7794181f0cb235ba0e7ba85acb96118c"],["/posts/c797535e.html","c32a113b4ba29f1d32123e2b475cc899"],["/posts/c7a62c79.html","6a507d493d091bf10584fc601c49ec66"],["/posts/cae2c959.html","f16aa6b36a4680afc5e52d061327134a"],["/posts/cbebef2b.html","d92d79069e3d4a10b8dad6a62173bca1"],["/posts/ce25023e.html","52c44d1f37b4e04aeeff9d8a847f7275"],["/posts/d2fd4837.html","f178a2627eea6003caa5abe96c3b9069"],["/posts/d3233cbb.html","d00e7aacdf3c74c41966609a0fd16ffc"],["/posts/d3a745a8.html","4d5dd55f0691f35c1199416a7d59560d"],["/posts/dc815d5.html","f98eb3eb57832c49db4286ef8af21a43"],["/posts/e3ab6ad8.html","8957e70c245c1016d4ee6a280618e819"],["/posts/e5018da6.html","682b0fcb90731d7bd458178a4e5cb316"],["/posts/e5963272.html","7e3b76e84503baa316e53c65fe275d73"],["/posts/e624b065.html","1a0ede9142bd7824e70848a062bbb059"],["/posts/e7c703bb.html","592f86854670bd2b4819a227119e60d1"],["/posts/e8f14b6c.html","f495349d69331ce14114048ccd5d597e"],["/posts/e91abb63.html","ba786ff580f73fe4b831428ffaaecbbd"],["/posts/ea9a8808.html","661f467c13e3fcb4c6556cce8c97de24"],["/posts/ebaf2232.html","8432d966f649fd6c93d3dab2f973b167"],["/posts/ee1ed673.html","f18fd37ca88f7c2707ca336b2f72dceb"],["/posts/f0c3ed61.html","e262aba4f4c0ed28dbf9e868f82816cf"],["/posts/f21e7f84.html","af1022a54f8006ef5e491b43b053c917"],["/posts/f230b0fd.html","c9790c37cb80637240b99b539c25999b"],["/posts/fc04d0d4.html","50ffe9c39edbb6b9b01e7b3991bece4f"],["/sumire/index.html","373b8a2bead9ae14bab69459dc923f54"],["/sw-register.js","32ecd1ccc36dbcaa78679ec881229da5"],["/tags/APPLE-project/index.html","2fc5be2c654ee5b49e8fb58bc400f08b"],["/tags/BELL-DA/index.html","29ccc8b79f42b5cb11e9d6442baabe67"],["/tags/BL-Game/index.html","1a65f2233c212efbcd4944089a5fd1e6"],["/tags/Blue-Dahlia-Digital-Creators/index.html","162c66636e679e50e3f342bacab1be49"],["/tags/CHUNSOFT/index.html","b653224a7ea80ed680edd9970bb2f98a"],["/tags/Cherry-Pie/index.html","55998a66366fe8d2e6dd937702bd6476"],["/tags/Circle-Mebius/index.html","df36a06206d072df5b915f3585e9a54a"],["/tags/CresCENT-BLANK/index.html","7a3246f1b1f66ce34e6548e063a4cfde"],["/tags/Dopamine-Software/index.html","aafb0e957ba082900062ad01a53a1497"],["/tags/Dos/index.html","f82d6bb76fc6e8b3eb3551c00cadfb24"],["/tags/Earth-Well/index.html","5578bda28a9f2e76e0a8c88759b914c7"],["/tags/Kanon/index.html","72f8884df1984a414088ae7f540be19c"],["/tags/MANATSU-8/index.html","4d27d093d07356ba0afa09ae1e4d8229"],["/tags/MIO/index.html","d18cc7bb734fc561e6d860e5830d0db1"],["/tags/Nmyu/index.html","6c9059a3f0c14296c064c763b01ebdfe"],["/tags/O-S-I/index.html","3ea7338004a17feb7bf4af3a3f8b8bd7"],["/tags/Omegaの視界/index.html","abf42b164b240d3bd01ed8c826d3a8e3"],["/tags/PC88/index.html","5e8bcfd77e480c10db513e051065676a"],["/tags/PC98/index.html","8655dc75451db828ac042fb15677b45c"],["/tags/Perpetual-Room/index.html","ffd453a2c1b7b7d5127ae305a787707d"],["/tags/Pleiades-Company/index.html","0d376affd683df2d7a5e5f72913841fc"],["/tags/Project-Twintail/index.html","168b9b55bc38601bae8a2c8674446fb9"],["/tags/Reverv/index.html","b443af0fa83dfa5b2a99e989a9d1eae9"],["/tags/Saihate-SOFT/index.html","89f764edc521e9194714368b8d2b2a5f"],["/tags/Sky-On-R-imaginAtion/index.html","8272979d9f925aa5d543af1fae5d63f9"],["/tags/StrayMoon/index.html","e0ce482357ef2bfbb05f9dfb4e82db79"],["/tags/Studio-Bu-Sa/index.html","8ac53e8e285d7c7cdc034ff2615f9040"],["/tags/ToHeart/index.html","472cb1b20b62fdfc16ee805b73ec606b"],["/tags/Traumend/index.html","b85d15a641cb270f3f56449807d22145"],["/tags/Witch/index.html","ae32b3503783d833c75533b2dd88854a"],["/tags/adonis-project/index.html","00bbd243bbb4b5689e542c339c5242e1"],["/tags/flash/index.html","7e5cc0a1fdf162a1717ff52ad9e50bf2"],["/tags/galgame/index.html","e55be6f7017eb923d5a57a2e1de4e06d"],["/tags/galgame/page/2/index.html","459ad82db1f69524c9206d85b091376f"],["/tags/gal资源/index.html","d01a46d270da4c4be77fc75594f7bcbe"],["/tags/gal资源/page/2/index.html","1984adb428e987756bb060dc587e2f44"],["/tags/gal资源/page/3/index.html","2c71ffac29b1a448232b304d22e8ff40"],["/tags/index.html","6bfdde4e0ef21be41f9b9965450d25d2"],["/tags/rkr/index.html","22b5ed379a6e1f03fe0b3ab7b94742f8"],["/tags/team-eye-mask/index.html","b1a2390ca6d7b819d623db9c7fafc470"],["/tags/ありすくろいつ/index.html","86b16ee74afb2cf210e9e9383e58d71d"],["/tags/いつものところ/index.html","b3ba435e6f5f087fe881007be099ea64"],["/tags/きつねみみ饅頭/index.html","4e539243a36f0bc0684d062e793faf6a"],["/tags/ねこねこソフト/index.html","e828c27f0275a6b8c540ab088ad3f5db"],["/tags/ねこバナナ/index.html","78e63516760138cb5455c5ddb0079a3d"],["/tags/はちみつくまさん/index.html","92eed5ff5343078ba047a6d3ee13bfcb"],["/tags/ろりちせ/index.html","47f8811753b97dd7c058d818bc395763"],["/tags/アイル【チーム・TATU】/index.html","1d65d8e2930236e1b43cc5666af1a1b3"],["/tags/アークシステムワークス/index.html","96bd5ac4f2bf1b13614e341e307f9b0f"],["/tags/ブロッコリー/index.html","0ed7677a0d2c686f45cdcc47945d42e3"],["/tags/乙女/index.html","897f6525bc6908a602937352c792bb29"],["/tags/停产/index.html","6077820b3f07bf32f1708e99faf01d29"],["/tags/公告/index.html","db2c7ee18c8c8e32e619ea32a87cd59b"],["/tags/同人/index.html","3f602962493b8303bc49c38a094b7f40"],["/tags/堀井雄二/index.html","1b29163630c4ef16903cacc5114e8fab"],["/tags/外海なおき/index.html","d4ddf7c25c84158002a6ce11bec182b7"],["/tags/機械式少女/index.html","4e2902849c399310b82ce3c4b972c9db"],["/tags/水仙/index.html","6c17e82614dd4db0248146ac13b1564c"],["/tags/汉化/index.html","c34ab78717c6f977d3c054769f11e893"],["/tags/片冈智/index.html","f799d17b14e0da61bdb80edd180060c2"],["/tags/片岡とも/index.html","42a537aaf194011ac5c59d396211fc5f"],["/tags/牙の刻印制作委員会/index.html","e66e3334e8cfc29850a91e895a0afeff"],["/tags/牛カルビ定食-FLAT/index.html","b84259d938eab3f845d64bad97a05da7"],["/tags/牧尾屋/index.html","73fd20a8ff6187b49f3c545714a37e91"],["/tags/猫猫社/index.html","b0e7d17f632485c347fa5f53790e4cf6"],["/tags/王宮魔法劇団/index.html","5a95be06f4588c45b4a739af1f9be258"],["/tags/画集/index.html","406ba2946a8641e6c05f822655a69973"],["/tags/索引/index.html","1ab83ee8373244b521641869a72312aa"],["/tags/自购/index.html","814328fba17c1dd10af0f5359a7f18a2"],["/tags/郷愁花屋/index.html","7e215d993b93c5fbe40cdb4d44287f5c"],["/tags/閂夜明/index.html","6bf86620c69c4666d398c5b2e0656a8d"],["/tags/音乐美/index.html","5c7fa266e758ee7ac364c667c1b40fc3"],["/tags/黒†救/index.html","75ccee634bfc3028a9ee4f0147441976"]];
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
