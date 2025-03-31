/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3c82903c51c3de6878a65fe17ffb5eab"],["/archives/2024/04/index.html","edd69b6f347bb43853cbd15513282e81"],["/archives/2024/index.html","0f2c92b573b7c6e68a101bb424237e77"],["/archives/2025/02/index.html","33ddb3f0bf413b37fd5192b47acca145"],["/archives/2025/02/page/2/index.html","afcb8e21c21ed460df51c510edc2615b"],["/archives/2025/02/page/3/index.html","08fe945e41827b3466ac73d6468c9f1e"],["/archives/2025/02/page/4/index.html","8ea6b55b7880e60f445e886954596ff2"],["/archives/2025/02/page/5/index.html","70414285e94f95673ddb1aaf12446b0a"],["/archives/2025/03/index.html","9641c8649874a1815b311b5b3fd36b0a"],["/archives/2025/03/page/2/index.html","0e08adf7e0a7812baaadb1b59bfe9f42"],["/archives/2025/03/page/3/index.html","1d2affd64504d7d497bb50f782280e40"],["/archives/2025/03/page/4/index.html","7dee0048685730ee85d8ea0b10769c41"],["/archives/2025/03/page/5/index.html","7fd193671c765975a3df3da546e15e42"],["/archives/2025/03/page/6/index.html","717a58fe495f7454bacb1a594609a008"],["/archives/2025/index.html","a096dd7502261a5ce13bf949ae80459d"],["/archives/2025/page/10/index.html","41bed81b5b3a635407ca569df1e4e3b6"],["/archives/2025/page/11/index.html","7052d517629b37e6f4e7bf573ceb40ed"],["/archives/2025/page/2/index.html","7a33f8120f7e799327177f978f0815a4"],["/archives/2025/page/3/index.html","22e07aeb47e3f4adbc29139ecd2552bc"],["/archives/2025/page/4/index.html","97537d25dc21c36ff3fda46a9430e3e4"],["/archives/2025/page/5/index.html","04af87c6aee171128d21bc05790510be"],["/archives/2025/page/6/index.html","26338d0b9f9b6cdeeafc075a1ec44cc8"],["/archives/2025/page/7/index.html","6947de92e24b00cce4c38d464eebb345"],["/archives/2025/page/8/index.html","ccebcb3c1823a3b86795447281b131dd"],["/archives/2025/page/9/index.html","7048f174b3e482862b58dc7e37889d67"],["/archives/2026/02/index.html","bae91f641bdb58a4e1463a5dea1cf28e"],["/archives/2026/index.html","4fc8b1c13a9d39f859f94fcbe78e728f"],["/archives/2925/01/index.html","2ffd5054c0d45b15fc7b57cf087724d0"],["/archives/2925/index.html","1075dbfc1737aa6d11b5d64021746ed9"],["/archives/index.html","17bacdb394409c3d50e73097e298f89e"],["/archives/page/10/index.html","886cad6bdfaa2e5c49625f02c7522618"],["/archives/page/11/index.html","cefe6c564f404555c73adeea247857d1"],["/archives/page/2/index.html","519718c58e27697ce1dad01b43a0c139"],["/archives/page/3/index.html","c2fe6cb5fd3de0479e89c3e13fc2918e"],["/archives/page/4/index.html","62654bc9626356412709f081fda54ffb"],["/archives/page/5/index.html","57442fc949d1be3424456124a5cf4b5a"],["/archives/page/6/index.html","998e521ffbad1f4a21b4b9996dd75a77"],["/archives/page/7/index.html","56245e1c1ebb7701bffe4052ff243333"],["/archives/page/8/index.html","91865c5f85cc469cbeeab8c60dca06d7"],["/archives/page/9/index.html","c94f3ea1e254de85c19ad7dc6660a700"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","8b710eaf5396f8436a9019176c9f5549"],["/categories/galgame/page/2/index.html","62af0eda4a4d12d97c2bc113004b8ef6"],["/categories/公告/index.html","48f0af3022b9e3b172778caed763a485"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","8ba5abead6428e369caa4c312d108aa0"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","705bbb3c9245fe6c1dd69f52d8d628f8"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","8039ac6b4ee583141d48fbe16de771d2"],["/page/10/index.html","567d1313c40efaa217a10836ccb8159d"],["/page/11/index.html","1b7b6e32836ef2167ce1f9ac946ca488"],["/page/2/index.html","7fb0277509e6dd9774f9532d0c2890e8"],["/page/3/index.html","c517026f3d7a8ae56dc9eeed9cdbc8c7"],["/page/4/index.html","0cb47a4ab7c0e0ec561ab03000a2c1b2"],["/page/5/index.html","c2e15eb82ed539d8f619a53219696087"],["/page/6/index.html","ce1c7451a90b2b7c5f658b91ac61a2cc"],["/page/7/index.html","c32d19d5ec319f6c2ea8693e12415855"],["/page/8/index.html","826adbb2f92a320cf4fcf69c9e848ff9"],["/page/9/index.html","0e0c0fa3c8172417b12107fe00d4b088"],["/posts/10c9dd98.html","fbaf9d1b9e1a37a3ead46128fc2d613e"],["/posts/1295b569.html","15d931d322ce9dfa2426e39fe95b608d"],["/posts/1370342.html","6012230e9cd64183e8919d65e1b0f524"],["/posts/15ef14c2.html","608aa5e1e9343b7ec9c0cc6f9557d604"],["/posts/15f3959d.html","5efab4d0f45e9689834cff09a00adc87"],["/posts/18ab785d.html","7926b51ae06fc496a75030815b82a384"],["/posts/1d59b71f.html","916448744c125932f6e03a04bd90074b"],["/posts/20b3f3a4.html","c0573eb43771ce0956f9882c28f8d44f"],["/posts/245f1c7d.html","d3ce58df5335731130c474ebd58a4c7e"],["/posts/252658f.html","4620f9402bf567119926da49026dc977"],["/posts/28397adc.html","985cfa349ab11c5e43edb2ee2884e052"],["/posts/2b38bce0.html","bc6db136861553dac9dea80d82fa310e"],["/posts/2c0a6836.html","84c04037ab1de466e065666b4eb8d513"],["/posts/2cf620f0.html","2cb368dd827fd2e7c900929821630e22"],["/posts/2e30fd6d.html","a8f0a19b819e14878d71818562cb2982"],["/posts/34292736.html","5f703aa6ccd99cb3af912f4194715770"],["/posts/3468cbe.html","d7c0694cd5f2aeae6219531a94270227"],["/posts/39176dc0.html","9d84854db2c8c38e0deca00d1ae8c6cb"],["/posts/3e118dbf.html","c9a840894a808f602261e8923b9141a0"],["/posts/3f7d823a.html","0ef056b2e92f665582e3a7b7f8a173fb"],["/posts/3f978819.html","6be608091eaf6db1f1723d7605ba2b05"],["/posts/43945723.html","bee468b9c599eaea12f0fa4248943440"],["/posts/44124a6b.html","22ff9173a73e8597d2c2ac8b47ae8057"],["/posts/47abb61d.html","1c7c1ca9fc333dcea1fc3a3836825eda"],["/posts/4b689be3.html","48df062649513e1cb5edfbc4e0082621"],["/posts/4cf8423f.html","31a1fdde342743be53247b8f1d048aa7"],["/posts/4dcf85c.html","fd535d6bc0725d19f5b3c29c142e2cb7"],["/posts/500cd322.html","ecac8770cb0f9b00316bade4b5ea2a28"],["/posts/51c9b1ff.html","3062682ca520209d851dc15cccf5668a"],["/posts/52b5b3c6.html","9eee8af075bb406ea99fc821f39ad729"],["/posts/5f6e0c59.html","01f511e684a8f39edfc17b2a3c9a83b1"],["/posts/61a63a84.html","2a57e1bff98ae241c94c917e5ba7ffc0"],["/posts/625ab7bf.html","4779eb4388862f28e5def4da8d421e38"],["/posts/6336a2f9.html","2707ab6392160bc82e3f530458a5c4b5"],["/posts/6432d61a.html","8c385ef67efd60ad5a44da0c9e922e47"],["/posts/6515f032.html","cd7fe722a548d7602b4c1ee51df7a8a9"],["/posts/6720ccdd.html","ffa5bffcfa3b77518eb2ad902d8be37a"],["/posts/6a4b5ac8.html","ea194e92a2aed2bbc4818ab3fcecc115"],["/posts/6aa4177c.html","3fb1373bc59f159f07706d11d48dd74e"],["/posts/6b15f81f.html","3523c21bc57928ec73bb7fc22c2e0c16"],["/posts/71131d34.html","41583a6798cf52955f31343f7e4b28f5"],["/posts/78a8a8d3.html","6567600310190a74c664be25a79aba50"],["/posts/7a5ef3d0.html","fb4c61163dae2b4a23ea5474cd895fa6"],["/posts/7b41e1ac.html","a0ee77fae51528854f87f2d7346dba4b"],["/posts/7b51011d.html","232b952c9b756cf1888430e42fd91ad8"],["/posts/7e3aa3e2.html","687ca146587ab8b8b5cda3cf300e236a"],["/posts/80fe2691.html","96c98f4d09fe41afa02a61a9de6be944"],["/posts/81ac52e9.html","e58b346a6495fa250b3432bcce269de5"],["/posts/8486f6f9.html","4ff486ec65d5e4c0974814953c846ae8"],["/posts/849b40f8.html","99d96aae8db960545a94bfc1330d4e39"],["/posts/85c51d68.html","f3f52010a7febbe5578272520614da73"],["/posts/886f8d3.html","c0661c634189f106952c99e77752277f"],["/posts/8a7cba10.html","c8f609c5297ee7eb9c65ca5bcc1b0e00"],["/posts/8ac11b41.html","6b60280bb7ce25d37b7aa6db7ee7ea63"],["/posts/8dd520d9.html","6fd53759fd7cf486483eff23057554a1"],["/posts/8f555654.html","e027311b2c5da6d6b598475bf8afe470"],["/posts/92a980c2.html","6c51604c6306fd043405349f88161c38"],["/posts/92ce16.html","aa4266b3cd1405c2d1c0e5bc5256d09c"],["/posts/93e9943b.html","8e61639885cd5fc06f2cdfab513b5535"],["/posts/94d3c794.html","0f15580dada92208ca16e5a667e28992"],["/posts/97f50eea.html","31257f1c287921b900cd51881dbd100d"],["/posts/97fca8be.html","a97db4e44efb157767f2d86281055199"],["/posts/98662d05.html","f974b727ad0afb3fca624605ef21f3df"],["/posts/9a2f6162.html","166fc7ebc357512fafccf3c873d8506a"],["/posts/9b22a48d.html","7173bf17a1e66fffa097363737c2f066"],["/posts/9cb455b1.html","9a9318805057add01335b79c44c85e5f"],["/posts/9ecdeecc.html","68208ae58382617b439c78453d6f69f0"],["/posts/9efd7701.html","4983f051ab8132e41b444c78fd471eca"],["/posts/9f61c1a0.html","667f2c6b4677de826be89b835db5d39e"],["/posts/a1de710.html","586a94290ea3bbe8f66ec13e4f395c8f"],["/posts/a30eb0cd.html","ed4528291df27eda1e453215b479185a"],["/posts/af1807ef.html","eb27d0571a0c7be735b06ba81fd3cb27"],["/posts/b497b647.html","e3f5d90742715c97874e7159a33b91a4"],["/posts/b4d464b0.html","cbda8402645368383ca90d71153fbacd"],["/posts/b5fb773f.html","eb0f4517a63b66c2e5dbc6f0c5c0cdcd"],["/posts/b8d46b32.html","80c1ac3a042f30c075738e6f2ec8a899"],["/posts/c1b2c6c9.html","2f6dcab5131673a18f81477553aa8f30"],["/posts/c2111cbf.html","90ba7375510245a105d1df5331b28c3a"],["/posts/c316c2e8.html","941e830d47e6f2e67ffd533028b887c8"],["/posts/c43e60b5.html","508bf70593a8dd0c0a32c1fe8216eb79"],["/posts/c497a412.html","f172c80a058319ad8e172c631c5b09a9"],["/posts/c5de299a.html","1ea2a2f67d37cc514308365f1489baa5"],["/posts/c70bba9c.html","c8715f047bb6c46f3655d31e8a3d6ddd"],["/posts/c797535e.html","4d60d7f1d4c41e7e0aaeda3a1b46b311"],["/posts/c7a62c79.html","86c0a4053f0a1bd68170c5de29044403"],["/posts/cae2c959.html","8f3a463601d836fd87935ce34e9ceacf"],["/posts/cbebef2b.html","fb310a7a41a257e0a776ca7d9d9cfe5d"],["/posts/ce25023e.html","a351283c8f03ebd18fcf361beb8dcb9a"],["/posts/d2fd4837.html","c3c4bd5da5434df6790a13a7076a8ed4"],["/posts/d3233cbb.html","5eb1197856f3a21a33f609989b98f81f"],["/posts/d3a745a8.html","145ce01601ad5a450d1ad80146f0a9fe"],["/posts/dc815d5.html","1f8c723693c84919f7fc57fa7339d039"],["/posts/e3ab6ad8.html","101445dce1ee467ae9319caced82b3d0"],["/posts/e5018da6.html","55de12dcca2f53cd559f4fc5817d6dfe"],["/posts/e5963272.html","b8c1398d7be9d05c2b1f1343281b05ac"],["/posts/e624b065.html","cdb7ef5f19dd53ac40bd0e5769a4f639"],["/posts/e7c703bb.html","873502b4e0c732f6acc2f5cdaca72c86"],["/posts/e8f14b6c.html","222da622d294bf2de1c07f2a373af873"],["/posts/e91abb63.html","14d0f56566b841244b73ef8276241bf5"],["/posts/ea9a8808.html","775a96e82c203d9039746b9dd9f4df51"],["/posts/ebaf2232.html","1ec10c5e31c9c351fb6dd1e5f6c69def"],["/posts/ee1ed673.html","ababcb223e1e4b05c74e0b320fd41109"],["/posts/f0c3ed61.html","bf2a5595fda88ccd7bc75389113ab39c"],["/posts/f21e7f84.html","ce8549381f0f0d315ed03c1839426886"],["/posts/f230b0fd.html","a6ca9e4e344859927e2ca69efecb61a9"],["/posts/fc04d0d4.html","b2c5bd2f787860cf2ae944fba44da631"],["/sumire/index.html","04c4016a98bc962669c5ee0a71f52924"],["/sw-register.js","1fd927acee113e69a8196af23119264d"],["/tags/APPLE-project/index.html","702ea8ca23edbb5d85a18e82fcf11d94"],["/tags/BELL-DA/index.html","01246a9d61d9cefbb56b8ef1e082a0a6"],["/tags/BL-Game/index.html","d3b6581365ee22ff14f1808fd6cd247a"],["/tags/Blue-Dahlia-Digital-Creators/index.html","adda9f88b48f0be6b885b73490e00f9a"],["/tags/CHUNSOFT/index.html","83196df83456ee6be8c0235c3adc8a3c"],["/tags/Cherry-Pie/index.html","de970e051cde3762214cbcd7573df752"],["/tags/Circle-Mebius/index.html","607c2a2dd82c9ca068dbfd4230cdee14"],["/tags/CresCENT-BLANK/index.html","20bace3808ba6f4087c019d726c4b98d"],["/tags/Dopamine-Software/index.html","43359ca316427b5c9646632d97f69857"],["/tags/Dos/index.html","2a19fccafa65ea2defc8bbbf3347311d"],["/tags/Earth-Well/index.html","0e34467d73bbb1d3a41a855b3a1e3d7b"],["/tags/Kanon/index.html","0eb7a551445854853f46ccfc22a5a934"],["/tags/MANATSU-8/index.html","262d9365f285c94d766c465f2f42195e"],["/tags/MIO/index.html","0f24c3aa9013e51e7143d9769de24391"],["/tags/Nmyu/index.html","c8007832a72165112d7a1e17fd12af8b"],["/tags/O-S-I/index.html","3b0b0b40b643efa916ba196a07a30d02"],["/tags/Omegaの視界/index.html","37b589ba64b355645eade43ded5de5d0"],["/tags/PC88/index.html","fd123ddcfd05471c3d97de809f3973af"],["/tags/PC98/index.html","fe0cc43a6eb1effd0baefa6c5a576fdd"],["/tags/Perpetual-Room/index.html","ade37d59d651fedcb7ae1aa2ea362631"],["/tags/Pleiades-Company/index.html","5e4f000ba94070aa9fa4977c233ff5e0"],["/tags/Project-Twintail/index.html","1b52b443d465f6c1cbe26465790c593d"],["/tags/Reverv/index.html","7e7ea4d5505de8680cfc73e8a0f7dc26"],["/tags/Saihate-SOFT/index.html","df9aa377a7265bb2f8978e2c98d78617"],["/tags/Sky-On-R-imaginAtion/index.html","3a11e00475f82304d7da829b108c458f"],["/tags/StrayMoon/index.html","91f42cb06aa1129d4bc558cdf22b88cc"],["/tags/Studio-Bu-Sa/index.html","028d4ae04eb681f3893e9876b7948ae7"],["/tags/ToHeart/index.html","3ace336aebd5c5c2d877105e74eaed2a"],["/tags/Traumend/index.html","77064483921f36988e14b3db75def29f"],["/tags/Witch/index.html","b383fe3c262ff2f7b53ed33657aacca0"],["/tags/adonis-project/index.html","1a06518646fe3dc2b0a0a47c65a3293d"],["/tags/flash/index.html","7b42475ba43def227b36bba5b98fcc08"],["/tags/galgame/index.html","61164ae5445fd1c539d73087a09131d1"],["/tags/galgame/page/2/index.html","bd3f30e821361ddbe47018fcfa77fdae"],["/tags/gal资源/index.html","48cfc67e761267fcd16d8029cf51d61b"],["/tags/gal资源/page/2/index.html","b3d1c410ed8c4086e2e50ed7861371cc"],["/tags/gal资源/page/3/index.html","14de38fce54607635cc40743fde9fb12"],["/tags/index.html","8d910daa175943525af60086d7748abb"],["/tags/rkr/index.html","ac42f0e35df1ba2ba7e22015bc0436d8"],["/tags/team-eye-mask/index.html","19b1fba837c44b0aeded68f91e484c34"],["/tags/ありすくろいつ/index.html","defe2bb4aece9ae1c151b2796f61b81f"],["/tags/いつものところ/index.html","23b4db67f2a2f0d8800ab88374211336"],["/tags/きつねみみ饅頭/index.html","c415ef7e6dd8c9fa2329696433275b22"],["/tags/ねこねこソフト/index.html","a0465412676e8fbae8ea5641836bec98"],["/tags/ねこバナナ/index.html","26ded83aac29ba6d5b40f0f32ee786a5"],["/tags/はちみつくまさん/index.html","426aaf1ee869107519e576d1cb2b555b"],["/tags/ろりちせ/index.html","62b26a0885dd15ab2c71177c04c1b69f"],["/tags/アイル【チーム・TATU】/index.html","a013808e9b42e19e33fe717e29fcfdd3"],["/tags/アークシステムワークス/index.html","1f13a633649be373bf04325bf70c4e6f"],["/tags/ブロッコリー/index.html","92e4b94266dba4ccb169db32958d7af2"],["/tags/乙女/index.html","12a4f7ca2192f3b05c57c2aef505c4dc"],["/tags/停产/index.html","58f9d50b54c9dcc285bb74c321071d64"],["/tags/公告/index.html","753d788ab237ee6c47415db8ce4a6158"],["/tags/同人/index.html","35348217f91e04eca2b670b46705bd36"],["/tags/堀井雄二/index.html","783bbd66c69647421229294231d46e57"],["/tags/外海なおき/index.html","9592804a80e3f48017beced385ab3d21"],["/tags/機械式少女/index.html","1d9c212bcd939ad176c413a4e5ca5dd3"],["/tags/水仙/index.html","cc94ac765340dcc513f35944d22ff3a8"],["/tags/汉化/index.html","3e8b167fc8b4b5c364320c39521fc379"],["/tags/片冈智/index.html","5148f370313bce5089a2b7a2d285ec6f"],["/tags/片岡とも/index.html","4e949834a2a54a35a6ceb2f4fbcf5ad3"],["/tags/牙の刻印制作委員会/index.html","6ab60bfcb6985cb3ad1233b66c8ec5ab"],["/tags/牛カルビ定食-FLAT/index.html","dbaae09f89e2ac389048c8b2ebebce02"],["/tags/牧尾屋/index.html","8a15d67657f3b7b9cfc76abb56f77b5b"],["/tags/猫猫社/index.html","a47aa0b4fb39e29e287647e700fb9aef"],["/tags/王宮魔法劇団/index.html","6455b1579ae6d8d69b51539048fa775f"],["/tags/画集/index.html","3d2854183ac97ccb335fbd44462da1b1"],["/tags/索引/index.html","71d77cc20e514e511438a3e30afc5fef"],["/tags/自购/index.html","055b361a12fdfdfe8026be3c5cd16c73"],["/tags/郷愁花屋/index.html","bea3d093de5ec6920ec12280c073d5b4"],["/tags/閂夜明/index.html","cd7224ac2011cbb2860caad15eb445a8"],["/tags/音乐美/index.html","b8e61171ec9f22851d830186c4120944"],["/tags/黒†救/index.html","d05c0a50586337dbceb6707a46c49f43"]];
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
