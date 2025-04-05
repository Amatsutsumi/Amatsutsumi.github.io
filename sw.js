/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","340de8581609b8309edf4761ca55bab2"],["/archives/2024/04/index.html","f8fd03e1e6782c477098878a72af287e"],["/archives/2024/index.html","43535d6ec40a548077018ec9a82d8719"],["/archives/2025/02/index.html","94bcbe580ee4d7f94069bd8071f9ee5e"],["/archives/2025/02/page/2/index.html","2b1745431ef8205b028c80ffcf7e2646"],["/archives/2025/02/page/3/index.html","3752398b00349779c46ec393abef0b52"],["/archives/2025/02/page/4/index.html","a8c60530c9e38aed6aadbc0a4d3989b0"],["/archives/2025/02/page/5/index.html","b6b7659c981dbc27f6ee0f54e47725b5"],["/archives/2025/03/index.html","104688908697e3398ea874e4cf7a22e2"],["/archives/2025/03/page/2/index.html","de7b60651bc7585b33b446d2307e1e50"],["/archives/2025/03/page/3/index.html","1132954679bc511bf8b9966fc34e316f"],["/archives/2025/03/page/4/index.html","4900727df0da1b32a7c53be98369e45d"],["/archives/2025/03/page/5/index.html","f43c71840e16d5ed34d2c2667cd9412a"],["/archives/2025/03/page/6/index.html","5daf60b1ae323ac7c3445bd06da46132"],["/archives/2025/index.html","802002629141e1e7e66b4f4f37749a54"],["/archives/2025/page/10/index.html","b0855b41213406c42212bedb9c3dd485"],["/archives/2025/page/11/index.html","cf17da8ae08e346b55db94c5ee47bea5"],["/archives/2025/page/2/index.html","7f6e2619a552ac1af80fa44699b61f74"],["/archives/2025/page/3/index.html","29acf66653771277cbe5de643ac2c641"],["/archives/2025/page/4/index.html","4b0b4726d008f7352bdb87e6b0870465"],["/archives/2025/page/5/index.html","24458532c10665d4c6a2c009fc59288c"],["/archives/2025/page/6/index.html","02f4a7387883f7c276e1d1bd6266dcdc"],["/archives/2025/page/7/index.html","26fd3810a235c21b4621832efc37e87f"],["/archives/2025/page/8/index.html","ebffb17a07ca61389bace00be04bed20"],["/archives/2025/page/9/index.html","d5aa9b8a2f0a68832e991bea87c58088"],["/archives/2026/02/index.html","d7b7ea9cdd6f7dd0e529cca0d7a02f31"],["/archives/2026/index.html","5f62a582a7edd36be8c494a24bf72b2f"],["/archives/2925/01/index.html","5dda98771574fb89cbe2035d6c71502e"],["/archives/2925/index.html","cbf81796c14986168908f1460937b5df"],["/archives/index.html","93c56c960c4d57349241128ccf9217b9"],["/archives/page/10/index.html","11058c0369c387b5d843f24ec62849ec"],["/archives/page/11/index.html","e730338ba0a5631e3299a45555ece13b"],["/archives/page/2/index.html","b6cb366d63f5be8941ef1e37da71291d"],["/archives/page/3/index.html","dfe3bd41c95af9094ccc882fb277ce89"],["/archives/page/4/index.html","9c63895c9b81f8e9e80a2a5d73c06d87"],["/archives/page/5/index.html","2d25abc91624b1390b6869fea3f135e5"],["/archives/page/6/index.html","d566c4cc0cd7aa56f8fc25b8dd777516"],["/archives/page/7/index.html","da9bf4b4a4c8184a6cb988dd03c1cf07"],["/archives/page/8/index.html","80a856d8786859dfbfbec3849f2d8fdc"],["/archives/page/9/index.html","d7ff39b41371b5740a622f2b97443420"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","d4667acfa703a34eda76f0114135b75e"],["/categories/galgame/page/2/index.html","d702f69427161cb93d536fa66e3e6b61"],["/categories/公告/index.html","d40b3fc88c9d2fa4eecfe6bf3d766fb5"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","3867cafa9b10399bb94c49bd9f074d62"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","17d3067a30eaffb30bd381ad12ccd466"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","2ba948a45d9cf6e5038f4e7597ac4da1"],["/page/10/index.html","d473b3e2e708d4f7aefc5fe46978aa79"],["/page/11/index.html","e96f4402932edcbd29faef251f3fa453"],["/page/2/index.html","f713cfc3746731af72e165d8e927292b"],["/page/3/index.html","960e11ba52705a73ca808ac29a33e3a6"],["/page/4/index.html","9d338e1cb837b77eaf2c77f9d1423878"],["/page/5/index.html","3c4538d7e1b04d18f758a00551c2e944"],["/page/6/index.html","fe932ffc5f101b61a5e5eb1423cc4b7f"],["/page/7/index.html","0e09872df2be6bb30476d88756658896"],["/page/8/index.html","bcfbdfd3254d50c001aa5c0b93ad5462"],["/page/9/index.html","56dc174ce07eed517303568a7da0aabf"],["/posts/10c9dd98.html","f96209c32118d34395be4b34213cbaef"],["/posts/1295b569.html","0c1dacfbb5c75928725952df7fe9860e"],["/posts/1370342.html","0d5a8c902d1cb17484d852a1c2564f4e"],["/posts/15ef14c2.html","e364e281f6dc4b46381ccd2475203023"],["/posts/15f3959d.html","f38d9fd253ed4aab67d4156157ed16cf"],["/posts/18ab785d.html","72d8b4849ed81594a3297df21c8db6b9"],["/posts/1d59b71f.html","fe0375bae2eca1d8ad71fc4142087174"],["/posts/20b3f3a4.html","72073da2be4456c88d5e5c990ad2cdbc"],["/posts/245f1c7d.html","431a14431272e9adce7fbb8c98529253"],["/posts/252658f.html","297c02ca24baccaf461bfd75badc02cc"],["/posts/28397adc.html","826c2fdecff33cadff6c498602863dba"],["/posts/2b38bce0.html","3b8d60e8097bc081eea690f2a61e646b"],["/posts/2c0a6836.html","a2aa985996c171dd25b0a81d45614103"],["/posts/2cf620f0.html","fbed90cbf6b7a2bfb16a1bc84f5051ad"],["/posts/2e30fd6d.html","759c90cbf043347cf6513fd1753b05fb"],["/posts/34292736.html","f46207fd915e3987e8240d8ce3a0acd3"],["/posts/3468cbe.html","99b99471388d053ad4ae5cbd02718cfd"],["/posts/39176dc0.html","dee656bae04db8d51fe7388af21da549"],["/posts/3e118dbf.html","cfcbc974074c91de0480a24cf0a4dfd2"],["/posts/3f7d823a.html","dac44ee0ecbeebf0cf27ca0123b718aa"],["/posts/3f978819.html","34e2c72e926274da8fdcf2cad53e4eec"],["/posts/43945723.html","750b80f069435bfb84f278d6eb76abc2"],["/posts/44124a6b.html","7d180bb66c3b65d6b726d98fc3f013f7"],["/posts/47abb61d.html","cfb29eec3cf61e4b3241299dc3795b9f"],["/posts/4b689be3.html","b957e8ad1856ad4b8ff4cb09f4b177d0"],["/posts/4cf8423f.html","2e331bb07c6d831dbd5d134359480cb2"],["/posts/4dcf85c.html","521e1d04f50254d57c7f0cfaa7ec8156"],["/posts/500cd322.html","2cc531d63fcf4aace447470d7a4ab261"],["/posts/51c9b1ff.html","0efc0165ff81612a3eaca7f44a0fba65"],["/posts/52b5b3c6.html","d8b6aa3a98d9284b93631e381a8a8a09"],["/posts/5f6e0c59.html","e1654942d92814f2e3c14276cc1ef1c2"],["/posts/61a63a84.html","574617b8005ae9a59f93d4ca3d94b11d"],["/posts/625ab7bf.html","276cbd1b1cc2c81af242e2c3db288b0d"],["/posts/6336a2f9.html","17f64ddfd4390d51e909663439824e38"],["/posts/6432d61a.html","5f154b1a513db6dfc9f0f276dbeb2c8f"],["/posts/6515f032.html","8c242ffae214915aa960c306b7c19fdf"],["/posts/6720ccdd.html","05a385e2749c049bba476ea44be5e36d"],["/posts/6a4b5ac8.html","647b516cd01308063fd464e973fc850b"],["/posts/6aa4177c.html","dbb8993b32b5c7243c80a96dc91bc265"],["/posts/6b15f81f.html","ab7cd7e2d2ee1454abed5685dad04370"],["/posts/71131d34.html","54df7475ebc7c3ce55b25a5570ac9b4c"],["/posts/78a8a8d3.html","55d1ffaacfc27666b898f49f66aaa33d"],["/posts/7a5ef3d0.html","51e46cf4c4202515bf2137c197d52836"],["/posts/7b41e1ac.html","4d3c89445d7af3b8d066b8dc73300a43"],["/posts/7b51011d.html","c5ed7bb12c33992cc2515a6d148215d6"],["/posts/7e3aa3e2.html","b25831ccc703099fb15240536a83dd6b"],["/posts/80fe2691.html","263a64d60bc630de0a1548094498681e"],["/posts/81ac52e9.html","7621e1061b6fafdac1eca33e3d20d2d5"],["/posts/8486f6f9.html","3c75844686273e7db59650d605b283ab"],["/posts/849b40f8.html","787fcf20051908f67bf4b8dcdb9b6e4a"],["/posts/85c51d68.html","d3155240aa227466e4e86b4963b00104"],["/posts/886f8d3.html","c3c59c75126e151edfc115a9b7bf7cf2"],["/posts/8a7cba10.html","da44f974b7b4478c7087b3dda1a5465b"],["/posts/8ac11b41.html","41deeb5a0a6a131564d0b1f8f92c47a7"],["/posts/8dd520d9.html","6b043b220640f73fa49f36d32aead183"],["/posts/8f555654.html","912325e8af928b35c9d4726f033d6037"],["/posts/92a980c2.html","8da93945869ad57473c3fdc83f8ef41b"],["/posts/92ce16.html","d0ad3a1164ae6a3c98b58f37dc687a8a"],["/posts/93e9943b.html","3f5a618e61b8151da137ede8d390e9d1"],["/posts/94d3c794.html","3b247a87d55bb92484e9c8864569f3fa"],["/posts/97f50eea.html","3f87a6652843acd7e24ea1f36dac695d"],["/posts/97fca8be.html","9ab744b58433f619d9590772eb001e2e"],["/posts/98662d05.html","39f0f4959ffc7b29ccca894a89ed5fe9"],["/posts/9a2f6162.html","f90c624843cd900dd0a373a3f03563d0"],["/posts/9b22a48d.html","f7a6f71129de5b441bb7ec68d54a0e7d"],["/posts/9cb455b1.html","e84865cc452aa4418569cc86984a5b05"],["/posts/9ecdeecc.html","38b91317ba213c615a2b8bb15aa2721f"],["/posts/9efd7701.html","cf6a213ae976a3bb80626c885023dfd8"],["/posts/9f61c1a0.html","2749fb7052b7a4081e5fd529e8cdf196"],["/posts/a1de710.html","2aedbd9128c431bc6784936da3ffb366"],["/posts/a30eb0cd.html","57b72bafdbc669c2e0dc2f3802d468a3"],["/posts/af1807ef.html","0455d2b8ed7b2633a33d21254871d41a"],["/posts/b497b647.html","058387b06369f0fd13eb25e7900b3302"],["/posts/b4d464b0.html","ac5d62ae080614aa20e884d4b2497941"],["/posts/b5fb773f.html","85be2effcdabafbba7340ae86c3df6a8"],["/posts/b8d46b32.html","3035dc1111a4f7df3c6682179d0a2c9b"],["/posts/c1b2c6c9.html","32dde2478d468ddd361aa095f55f8467"],["/posts/c2111cbf.html","4f7bb534152f472ee71a7ae48a23d871"],["/posts/c316c2e8.html","b554c2523b7d2cffb636ca047c7a29b7"],["/posts/c43e60b5.html","946e9bb224582b00b9f2149570dfb114"],["/posts/c497a412.html","07bcfc3d6f4fd4acfc3d0dc9ebef29a3"],["/posts/c5de299a.html","1794845f1c4ba02fb55b3ec88cf05a3a"],["/posts/c70bba9c.html","ae0c25ad2606edc3eb34b19d8e35e783"],["/posts/c797535e.html","c32a113b4ba29f1d32123e2b475cc899"],["/posts/c7a62c79.html","acd6aaa7d1d416c65a0bef7cad0c043e"],["/posts/cae2c959.html","351367f763764c0948e171a4a7716ae8"],["/posts/cbebef2b.html","4de476a052e1f91d581f2ce9ab72f46f"],["/posts/ce25023e.html","343b9599bff8fa069ab54e721c6fa980"],["/posts/d2fd4837.html","e6a782be021a189f0cdab4d6612648c4"],["/posts/d3233cbb.html","d00e7aacdf3c74c41966609a0fd16ffc"],["/posts/d3a745a8.html","3d78541a1ed7864d1decf34dc2a37e6f"],["/posts/dc815d5.html","b718f762e856b27ca1d499d57feee09e"],["/posts/e3ab6ad8.html","fe28250baf06df71f4628bc37f5f09d4"],["/posts/e5018da6.html","682b0fcb90731d7bd458178a4e5cb316"],["/posts/e5963272.html","7e3b76e84503baa316e53c65fe275d73"],["/posts/e624b065.html","9b070b45b1a3dfa7cd4092c8fb7ddd9f"],["/posts/e7c703bb.html","592f86854670bd2b4819a227119e60d1"],["/posts/e8f14b6c.html","f495349d69331ce14114048ccd5d597e"],["/posts/e91abb63.html","ba786ff580f73fe4b831428ffaaecbbd"],["/posts/ea9a8808.html","661f467c13e3fcb4c6556cce8c97de24"],["/posts/ebaf2232.html","8432d966f649fd6c93d3dab2f973b167"],["/posts/ee1ed673.html","414272238c22b2c8b4d8b385d7b9bdc1"],["/posts/f0c3ed61.html","e262aba4f4c0ed28dbf9e868f82816cf"],["/posts/f21e7f84.html","af1022a54f8006ef5e491b43b053c917"],["/posts/f230b0fd.html","abb4ca1fcbf6058ea560120d19b447db"],["/posts/fc04d0d4.html","50ffe9c39edbb6b9b01e7b3991bece4f"],["/sumire/index.html","57f1caacf71f6a160c3fab1baeb542cb"],["/sw-register.js","a40a50bc0a9750a6d29e9754f5559301"],["/tags/APPLE-project/index.html","1ca5ea24eb3fc13ca48cea9a121bd717"],["/tags/BELL-DA/index.html","69d4026647e63fd15518f249f8a8155d"],["/tags/BL-Game/index.html","fce62179ea833ff9b4c2b32509fa9082"],["/tags/Blue-Dahlia-Digital-Creators/index.html","4320a7724a91c8f70d7cf4710eaf6e8a"],["/tags/CHUNSOFT/index.html","d417b1006c10542e0fbfbb3c90b294d5"],["/tags/Cherry-Pie/index.html","926bf210ce9a665d74a8c2c936e247db"],["/tags/Circle-Mebius/index.html","08c08d4693575546a1d6fbffb221c791"],["/tags/CresCENT-BLANK/index.html","65d8c3e09b3424a8ebec40d3c9f52aa4"],["/tags/Dopamine-Software/index.html","7f8d820f2e940f27d4b042271e928eda"],["/tags/Dos/index.html","f6283aef708affad2a5b4b0a0d35bba0"],["/tags/Earth-Well/index.html","0a0d2780741b9aaa9d3dc699bb7318a3"],["/tags/Kanon/index.html","142d5ed6af6c2ebf756924f63be7e374"],["/tags/MANATSU-8/index.html","9fa7894c51af1f8571299c07f57e233b"],["/tags/MIO/index.html","d49b184a3ef40735e8f49e3ffd54fa1c"],["/tags/Nmyu/index.html","c1cfdb43db9902802387e5e7b0c1f988"],["/tags/O-S-I/index.html","2b6f62748e89dae133fef2e8b8ce0c44"],["/tags/Omegaの視界/index.html","11d0769a175690dd9302dc183bef4b8a"],["/tags/PC88/index.html","ee18df7c07918e0be621d16830408ad2"],["/tags/PC98/index.html","1995a9732b29d525b85860d72435a7f4"],["/tags/Perpetual-Room/index.html","5f5810ce87d69312bca392f97a828aec"],["/tags/Pleiades-Company/index.html","25d2d64c4b65a07ed7521db27502f952"],["/tags/Project-Twintail/index.html","cde82a64e770d82a758a2995b9c99e76"],["/tags/Reverv/index.html","355305d36eefcb7f3199cbb15978a92e"],["/tags/Saihate-SOFT/index.html","3c2c70132988ee563e208062e7875096"],["/tags/Sky-On-R-imaginAtion/index.html","f763f31b3f3705644797da35b4ae0735"],["/tags/StrayMoon/index.html","4fcf62e4dbde7a8f64b4b8b20aac7a10"],["/tags/Studio-Bu-Sa/index.html","3163edcd87d409eddb367fab2092ccb9"],["/tags/ToHeart/index.html","35ae6047e829c71cf523d9dc8a32a459"],["/tags/Traumend/index.html","966635d936bf32253abbfc40b988f706"],["/tags/Witch/index.html","579fc5e5a9f19eb62d23e9dad509eb1b"],["/tags/adonis-project/index.html","87fef077a10c8ab35518f5c94c1d86b8"],["/tags/flash/index.html","f7542530742c126db52c793572901ef6"],["/tags/galgame/index.html","e02bf525208ba25e49e8e047cd92d735"],["/tags/galgame/page/2/index.html","e0c8da64f32b0a6b69b5bfbe1023c3f6"],["/tags/gal资源/index.html","d24ac6b63bc4883df9471e533f2ed1f1"],["/tags/gal资源/page/2/index.html","cb25c20f2ee516f8f2154d6d8a0dd01b"],["/tags/gal资源/page/3/index.html","38c282c9a8c171c8636931bb32178c00"],["/tags/index.html","fedde589ce7c950ffa9b344568c1b3db"],["/tags/rkr/index.html","b83cf7147f651ecfec38f16dd33cc4d4"],["/tags/team-eye-mask/index.html","fa3ea236fbb39af610a09a4317f09f3d"],["/tags/ありすくろいつ/index.html","4dd02972de11fd5712805df7e6c62d8b"],["/tags/いつものところ/index.html","2c872d8b49b169444f332a30cd4c99a3"],["/tags/きつねみみ饅頭/index.html","c46d2de5c1d4731070b3066f1d3c2858"],["/tags/ねこねこソフト/index.html","ebef1f9808173e8c94e3a0759a506521"],["/tags/ねこバナナ/index.html","0a39f68112e35e4ca7706580903cc49e"],["/tags/はちみつくまさん/index.html","0060c209969222f9c85c03071e6d7ba4"],["/tags/ろりちせ/index.html","dbd62f4fe08191adc7171119646ba69d"],["/tags/アイル【チーム・TATU】/index.html","37d08c6546abbf34955ff70762a9ec3d"],["/tags/アークシステムワークス/index.html","e30a23e1e1af4a353fb2799e786e8a69"],["/tags/ブロッコリー/index.html","aa7b391216db0ff4f605a1007df2b55d"],["/tags/乙女/index.html","ce9e52a767a557dc78d08cfc2d70aae9"],["/tags/停产/index.html","7587c67ae996032c5eded7107b7bc412"],["/tags/公告/index.html","04858260a2ac9ec39b6645aa6763cada"],["/tags/同人/index.html","500c76ba3dcae6f92ac3b4277fbfa125"],["/tags/堀井雄二/index.html","637cc52736388bd072c63f112c0fda7e"],["/tags/外海なおき/index.html","9d74640b7fb93e449d5bd5208056a246"],["/tags/機械式少女/index.html","601cb129c4ae64b8e70b0203fe1af62d"],["/tags/水仙/index.html","89259179bb82fe1d5e52034667d8b7f4"],["/tags/汉化/index.html","ab60dc499b18a9555c384dfd8bd49c38"],["/tags/片冈智/index.html","22c6b010284a08f29407c2c89c6a6655"],["/tags/片岡とも/index.html","5d55168d012972fb38300a09e46f5f88"],["/tags/牙の刻印制作委員会/index.html","96a71a5a2f1e7ee0e2b748f98948fcf0"],["/tags/牛カルビ定食-FLAT/index.html","a4e9911c9f50786bed3afbfadc1cf363"],["/tags/牧尾屋/index.html","4026df047410581a928d4a0f55304065"],["/tags/猫猫社/index.html","cbd32b871345fcc21d7cedc532bc92f9"],["/tags/王宮魔法劇団/index.html","0bd6e964f49665649311b68c9f94136e"],["/tags/画集/index.html","fdf7717ed9e81cdc86a411afa6aa5bec"],["/tags/索引/index.html","56efe59511ebedf4f0b867268f2d32ff"],["/tags/自购/index.html","87d94a1122b3df29a0429f01ce9a2a65"],["/tags/郷愁花屋/index.html","68de43b209a6680a6038c8c1d9d9dd91"],["/tags/閂夜明/index.html","99dde171c3c01b1356ad1e3926a9d3c6"],["/tags/音乐美/index.html","a9b8b6c78107866796d92d3c6ae13bd4"],["/tags/黒†救/index.html","c0857d50a1b9fb65bf0b65e126ef0084"]];
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
