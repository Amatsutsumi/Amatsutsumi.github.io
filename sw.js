/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","86aec20ed09d8b9d4943ef707884a4c7"],["/archives/2024/04/index.html","560d7a5406c64f78302a192b9b937cfc"],["/archives/2024/index.html","29b5235fbc2324d521ce024c1dc64ebc"],["/archives/2025/02/index.html","71e3c518ba5dd4afe4c2cc0fb81ea988"],["/archives/2025/02/page/2/index.html","ea3f660284815fc92df5fc92f5dcd441"],["/archives/2025/02/page/3/index.html","d95abd11eca4e5e9d07052b65a6ce12f"],["/archives/2025/02/page/4/index.html","e099ab5d4abb1fc2641a79166b904b9c"],["/archives/2025/02/page/5/index.html","00270defdf8d7075bfe7675747404a9f"],["/archives/2025/03/index.html","a59f7de222127242245c488a3b12ee1c"],["/archives/2025/03/page/2/index.html","a833f67da50cdd16bea3da7d902fc500"],["/archives/2025/03/page/3/index.html","3601c97181c3d7a240e283b16d43a879"],["/archives/2025/03/page/4/index.html","8595bacf9bb1147b6f6b0f517ac8e7aa"],["/archives/2025/03/page/5/index.html","e404233a228946316cb3c3c8262926fd"],["/archives/2025/03/page/6/index.html","5bd33983bd1c02a5bd46a062540174af"],["/archives/2025/index.html","d3d7669770bdb2f5dfebad10e1e845db"],["/archives/2025/page/10/index.html","c2b556c77d556a43ee538cfd82c06b09"],["/archives/2025/page/11/index.html","bb963f67b35a4f0d4572808b0a1a7717"],["/archives/2025/page/2/index.html","aacb1b5a0b559acfd317688dfe0fd6a7"],["/archives/2025/page/3/index.html","309255f99157a7fa386e55c8bf4c9a2c"],["/archives/2025/page/4/index.html","f7e0282364f901b1e1d0eda75d58c81b"],["/archives/2025/page/5/index.html","3f4026b30a333f6ecb8f12a59004b822"],["/archives/2025/page/6/index.html","bf9ad447a75c6b5e7754cbecd97afa51"],["/archives/2025/page/7/index.html","dbc026851188c0a8b2bf0a62f53eb441"],["/archives/2025/page/8/index.html","be42f51ee7141579b667d8e4efb76026"],["/archives/2025/page/9/index.html","4cfbd0d5225c24fef5aef8deae511d15"],["/archives/2026/02/index.html","2915969b849d6a863f6c78fe07b672d8"],["/archives/2026/index.html","8ac44da47c7fe01c649e29804ef3e6dc"],["/archives/2925/01/index.html","ebc83078fa1e68bbfde6eff0de95bf5a"],["/archives/2925/index.html","8da69138d8f2519847869cdf30690d52"],["/archives/index.html","a3167bf1f327a4f0df76a84494bc153c"],["/archives/page/10/index.html","488c2ea18c793dbd3b41393c4f317085"],["/archives/page/11/index.html","6351b7f83eff13435f30f7a925dac33d"],["/archives/page/2/index.html","5cddd325935922133f84381c190d38f6"],["/archives/page/3/index.html","31ea8a982202e0e9d7d0dd6c76b4f7d3"],["/archives/page/4/index.html","74411bee4be7f5f8f482554e5e8c723e"],["/archives/page/5/index.html","01d552e493f5eac9f92b0c5f6bf92d45"],["/archives/page/6/index.html","508d4c6aa82f8a78574fda9d51de48f5"],["/archives/page/7/index.html","5f8397da8dc6fab6b2131e4ca3f1ad47"],["/archives/page/8/index.html","a3dafe039fb6b1f012b7931f15854d7c"],["/archives/page/9/index.html","6a4d7f8f36865d9fc694ccba8a79bfe7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","2d4be28ad650481454e859fd85403b66"],["/categories/galgame/page/2/index.html","3cfc3d0a5cb11c8185d3878a163c5a41"],["/categories/公告/index.html","3c71443c8d9863650975052b72c41882"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","b2845005b7a2883c52f2759c17c60b06"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","da20e67eeebbe2aaa39a749afcb0de97"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ff7d68f05f17eec8a8172e73cf9eae15"],["/page/10/index.html","77bfa1707070a6c9cb9f872f49f87b7e"],["/page/11/index.html","1bbb75f522fc65f1c7df287290388d47"],["/page/2/index.html","a5ce98937a72b074a0d7883bb2992740"],["/page/3/index.html","08bb786f5b0c105c2cc4c9ec3999068f"],["/page/4/index.html","717ac8c7ec667b1c91f853190c40dbd2"],["/page/5/index.html","439009d1d3bcfad1520b46b277986da0"],["/page/6/index.html","ae32c67fe32e93e275a281cee131f089"],["/page/7/index.html","531ef359c9cc46640de965616ad9b0da"],["/page/8/index.html","50859a1793d190e6a27f1059295ea57f"],["/page/9/index.html","f5fc55901dec88ec1a8b2bac2bfe3503"],["/posts/10c9dd98.html","e54e83b28a8acc5e196ade0706876e31"],["/posts/1295b569.html","15d931d322ce9dfa2426e39fe95b608d"],["/posts/1370342.html","6012230e9cd64183e8919d65e1b0f524"],["/posts/15ef14c2.html","608aa5e1e9343b7ec9c0cc6f9557d604"],["/posts/15f3959d.html","5efab4d0f45e9689834cff09a00adc87"],["/posts/18ab785d.html","7926b51ae06fc496a75030815b82a384"],["/posts/1d59b71f.html","32236e9379dd75d1c1ac318d1210b7ab"],["/posts/20b3f3a4.html","68349ab449c626d2cbcf28088884815c"],["/posts/245f1c7d.html","d3ce58df5335731130c474ebd58a4c7e"],["/posts/252658f.html","4620f9402bf567119926da49026dc977"],["/posts/28397adc.html","edabe482cf3d543817ea36249739deac"],["/posts/2b38bce0.html","bc6db136861553dac9dea80d82fa310e"],["/posts/2c0a6836.html","84c04037ab1de466e065666b4eb8d513"],["/posts/2cf620f0.html","32c51bd4c7b298ef98834f4f5f854f59"],["/posts/2e30fd6d.html","a8f0a19b819e14878d71818562cb2982"],["/posts/34292736.html","5f703aa6ccd99cb3af912f4194715770"],["/posts/3468cbe.html","d7c0694cd5f2aeae6219531a94270227"],["/posts/39176dc0.html","9d84854db2c8c38e0deca00d1ae8c6cb"],["/posts/3e118dbf.html","c9a840894a808f602261e8923b9141a0"],["/posts/3f7d823a.html","0ef056b2e92f665582e3a7b7f8a173fb"],["/posts/3f978819.html","6be608091eaf6db1f1723d7605ba2b05"],["/posts/43945723.html","bee468b9c599eaea12f0fa4248943440"],["/posts/44124a6b.html","22ff9173a73e8597d2c2ac8b47ae8057"],["/posts/47abb61d.html","1c7c1ca9fc333dcea1fc3a3836825eda"],["/posts/4b689be3.html","90b2cd8856ab08d5c74fa729e0e23adf"],["/posts/4cf8423f.html","31a1fdde342743be53247b8f1d048aa7"],["/posts/4dcf85c.html","bb79a44e331f3c168d2370b09ddb0815"],["/posts/500cd322.html","ecac8770cb0f9b00316bade4b5ea2a28"],["/posts/51c9b1ff.html","3062682ca520209d851dc15cccf5668a"],["/posts/52b5b3c6.html","f399a50ea75f3c6926d27ebdc74478e4"],["/posts/5f6e0c59.html","01f511e684a8f39edfc17b2a3c9a83b1"],["/posts/61a63a84.html","2a57e1bff98ae241c94c917e5ba7ffc0"],["/posts/625ab7bf.html","4779eb4388862f28e5def4da8d421e38"],["/posts/6336a2f9.html","fcee5709947ddb9b7479c97c211938a0"],["/posts/6432d61a.html","8c385ef67efd60ad5a44da0c9e922e47"],["/posts/6515f032.html","f140f95b7250c4997581025f42d85d72"],["/posts/6720ccdd.html","800d9c8afeffa77af917ec1277277947"],["/posts/6a4b5ac8.html","1e27e7d3293e332c6112655a8c929034"],["/posts/6aa4177c.html","3fb1373bc59f159f07706d11d48dd74e"],["/posts/6b15f81f.html","3523c21bc57928ec73bb7fc22c2e0c16"],["/posts/71131d34.html","41583a6798cf52955f31343f7e4b28f5"],["/posts/78a8a8d3.html","95793e9651133762af74e08d1b317432"],["/posts/7a5ef3d0.html","fb4c61163dae2b4a23ea5474cd895fa6"],["/posts/7b41e1ac.html","a0ee77fae51528854f87f2d7346dba4b"],["/posts/7b51011d.html","232b952c9b756cf1888430e42fd91ad8"],["/posts/7e3aa3e2.html","77b1834f1ce97c000cebb1e87fbfeb31"],["/posts/80fe2691.html","68afe2c66a78c2fc515445e3fd0e7d7d"],["/posts/81ac52e9.html","c5cd0c020fa549aeee460ec66e933168"],["/posts/8486f6f9.html","4ff486ec65d5e4c0974814953c846ae8"],["/posts/849b40f8.html","d7648be8494864226029646cdc63289a"],["/posts/85c51d68.html","f3f52010a7febbe5578272520614da73"],["/posts/886f8d3.html","ea2d0783e027e2e3ce076d8d8f767383"],["/posts/8a7cba10.html","c8f609c5297ee7eb9c65ca5bcc1b0e00"],["/posts/8ac11b41.html","6b60280bb7ce25d37b7aa6db7ee7ea63"],["/posts/8dd520d9.html","6fd53759fd7cf486483eff23057554a1"],["/posts/8f555654.html","1f7498dc640a3f503b3f7fa460a9632e"],["/posts/92a980c2.html","6c51604c6306fd043405349f88161c38"],["/posts/92ce16.html","aa4266b3cd1405c2d1c0e5bc5256d09c"],["/posts/93e9943b.html","8e61639885cd5fc06f2cdfab513b5535"],["/posts/94d3c794.html","0f15580dada92208ca16e5a667e28992"],["/posts/97f50eea.html","31257f1c287921b900cd51881dbd100d"],["/posts/97fca8be.html","a97db4e44efb157767f2d86281055199"],["/posts/98662d05.html","590f243a35b49050cb32e0d83ec41118"],["/posts/9a2f6162.html","166fc7ebc357512fafccf3c873d8506a"],["/posts/9b22a48d.html","7173bf17a1e66fffa097363737c2f066"],["/posts/9cb455b1.html","9a9318805057add01335b79c44c85e5f"],["/posts/9ecdeecc.html","68208ae58382617b439c78453d6f69f0"],["/posts/9efd7701.html","4983f051ab8132e41b444c78fd471eca"],["/posts/9f61c1a0.html","667f2c6b4677de826be89b835db5d39e"],["/posts/a1de710.html","586a94290ea3bbe8f66ec13e4f395c8f"],["/posts/a30eb0cd.html","ed4528291df27eda1e453215b479185a"],["/posts/af1807ef.html","eb27d0571a0c7be735b06ba81fd3cb27"],["/posts/b497b647.html","26fb6fb368fc14e07301e078d3eb8de0"],["/posts/b4d464b0.html","cbda8402645368383ca90d71153fbacd"],["/posts/b5fb773f.html","2948d75da723efa33d1798559c07b81e"],["/posts/b8d46b32.html","80c1ac3a042f30c075738e6f2ec8a899"],["/posts/c1b2c6c9.html","2f6dcab5131673a18f81477553aa8f30"],["/posts/c2111cbf.html","90ba7375510245a105d1df5331b28c3a"],["/posts/c316c2e8.html","2db85e6dc5b36a332c4b0870d00f8b44"],["/posts/c43e60b5.html","508bf70593a8dd0c0a32c1fe8216eb79"],["/posts/c497a412.html","be33fa98167c1e37a6e3d24fd79e67d6"],["/posts/c5de299a.html","1ea2a2f67d37cc514308365f1489baa5"],["/posts/c70bba9c.html","c8715f047bb6c46f3655d31e8a3d6ddd"],["/posts/c797535e.html","4d60d7f1d4c41e7e0aaeda3a1b46b311"],["/posts/c7a62c79.html","86c0a4053f0a1bd68170c5de29044403"],["/posts/cae2c959.html","33f987d5eca1721474763bbfe3fc64c9"],["/posts/cbebef2b.html","47e44fec31213783e212521c4f5c1baf"],["/posts/ce25023e.html","bf91e38cbdd1ae33438bee7c30061cad"],["/posts/d2fd4837.html","7507104f5af28f06a276d1a307e577ad"],["/posts/d3233cbb.html","5eb1197856f3a21a33f609989b98f81f"],["/posts/d3a745a8.html","5a22d12f917371ef57bd452d7fc3dcf6"],["/posts/dc815d5.html","c186edc3e119294c2d7d3a37190e5f30"],["/posts/e3ab6ad8.html","101445dce1ee467ae9319caced82b3d0"],["/posts/e5018da6.html","e4ac707a0fc09296248e142a11858405"],["/posts/e5963272.html","b8c1398d7be9d05c2b1f1343281b05ac"],["/posts/e624b065.html","96359a3e027e3198b02d819e41e27d4d"],["/posts/e7c703bb.html","873502b4e0c732f6acc2f5cdaca72c86"],["/posts/e8f14b6c.html","222da622d294bf2de1c07f2a373af873"],["/posts/e91abb63.html","14d0f56566b841244b73ef8276241bf5"],["/posts/ea9a8808.html","775a96e82c203d9039746b9dd9f4df51"],["/posts/ebaf2232.html","1ec10c5e31c9c351fb6dd1e5f6c69def"],["/posts/ee1ed673.html","ababcb223e1e4b05c74e0b320fd41109"],["/posts/f0c3ed61.html","bf2a5595fda88ccd7bc75389113ab39c"],["/posts/f21e7f84.html","3d276a54a501bc63370c79f0d05cde28"],["/posts/f230b0fd.html","2c3993f351ecaf0e73bfb7d36aa9cfb5"],["/posts/fc04d0d4.html","94fc7e0df1a3f407be788dbece5de84f"],["/sumire/index.html","6b8b9e1eaebd024c7f216c5cccf094d3"],["/sw-register.js","cdca858fea69f6434de01e46130a706e"],["/tags/APPLE-project/index.html","10e9e53e98e80dfe3d1f5421bfd75903"],["/tags/BELL-DA/index.html","fcdda7889748f3bb82ea27269c592f09"],["/tags/BL-Game/index.html","50bf3457df638830273abc10c15df811"],["/tags/Blue-Dahlia-Digital-Creators/index.html","e08815c6390ccf8e32e13e1c0d203f3f"],["/tags/CHUNSOFT/index.html","b547162a9aa436516b68cc2b13407827"],["/tags/Cherry-Pie/index.html","ed601b02b2ea9479a11f9b1679a12623"],["/tags/Circle-Mebius/index.html","7aaa2b74b0f1f132c9813b5dc9b69961"],["/tags/CresCENT-BLANK/index.html","9aff3a0842e0fd47a5e45f3ff694baf7"],["/tags/Dopamine-Software/index.html","72922eff8f51cede2f605f6de616a1a5"],["/tags/Dos/index.html","eef5b69938028dff9ff9afde91850e61"],["/tags/Earth-Well/index.html","1113a741233111c0143f98aa80e40c67"],["/tags/Kanon/index.html","623d8a9c9687d849325892705702f37f"],["/tags/MANATSU-8/index.html","4a09ac2ac25c4185cbc2bb10bc73668c"],["/tags/MIO/index.html","15b0a2224e5a12ae69523631c766d9d7"],["/tags/Nmyu/index.html","edde0d77939d377478642b85cb2aac76"],["/tags/O-S-I/index.html","97273b63c72ce02c8c5102509f932b11"],["/tags/Omegaの視界/index.html","7ac2dec55f9729db4c4830bd06a2e2b0"],["/tags/PC88/index.html","21d99d3f4c1f3991681690ab8cd0b464"],["/tags/PC98/index.html","77d13043ade13fc9c329f9d87590c05b"],["/tags/Perpetual-Room/index.html","82342b425f6ee7730cc6937bcdb142fe"],["/tags/Pleiades-Company/index.html","6052d76168f04ac5b65e6fa43ff4bad0"],["/tags/Project-Twintail/index.html","e8adad44799adf4574c5a580d7b606e8"],["/tags/Reverv/index.html","27d7ceff191c2bce55174c47cdee346a"],["/tags/Saihate-SOFT/index.html","097e5fe37b7196a234f813aeade6e03f"],["/tags/Sky-On-R-imaginAtion/index.html","3839a0526b53e15ab026f10aefe40018"],["/tags/StrayMoon/index.html","ec5284dbb46a448b7658af257847b7c9"],["/tags/Studio-Bu-Sa/index.html","73dce2e60a069dc262a945f2962c07f0"],["/tags/ToHeart/index.html","99e5586669e563c676dad1b0040af958"],["/tags/Traumend/index.html","d10c49f897104a60b1ac0e217755a564"],["/tags/Witch/index.html","ee8b635741e61eda13e1b5f76212f778"],["/tags/adonis-project/index.html","4bf43dc2d71433900c398377fde7b44f"],["/tags/flash/index.html","90e57c5fcbec2985bebad82bdf5722aa"],["/tags/galgame/index.html","96ebf143ff1b54e1a5f1cb5dc52d0d9a"],["/tags/galgame/page/2/index.html","3563eb13f1267accc4cacd1b2373ad53"],["/tags/gal资源/index.html","85c0ef86e43f4e73a0ff6df8a5ac96de"],["/tags/gal资源/page/2/index.html","0a4f9b90eb88fd21ab09f4d57d9f5d57"],["/tags/gal资源/page/3/index.html","f1e1da110c0546c0a991e1b7f6e8a7f7"],["/tags/index.html","7bdb89f8fddd25f505ecf93314522fe5"],["/tags/rkr/index.html","eb47e57f44ec5a4ec1080df2b511e557"],["/tags/team-eye-mask/index.html","ea5612f20901c945f19eece1117db852"],["/tags/ありすくろいつ/index.html","9dc40a18b08cdcb8286274b1d79376e8"],["/tags/いつものところ/index.html","e4cdb60acf92d2c51cf15048dde4b157"],["/tags/きつねみみ饅頭/index.html","d95a0b12ed28a2e050484e1e7b86d2f6"],["/tags/ねこねこソフト/index.html","9d80aec62081c01b98fe6d0ec5cc59c1"],["/tags/ねこバナナ/index.html","e726b3c9e641df8142da9bf69bfb7038"],["/tags/はちみつくまさん/index.html","504661ce5e0f32fdeb4ca1a7c279640d"],["/tags/ろりちせ/index.html","006420805e9abb929c7b0fad64b149a6"],["/tags/アイル【チーム・TATU】/index.html","9511809101d424f8cdcad5df7c5efd84"],["/tags/アークシステムワークス/index.html","fa9395d7e7323544a25256375f08d5a3"],["/tags/ブロッコリー/index.html","cc074c74794d38918acc43c419c83cdb"],["/tags/乙女/index.html","c53d79598e2ff2dccae48fe2fd0534eb"],["/tags/停产/index.html","355580a56b025fdd2d4b6c8182049dbb"],["/tags/公告/index.html","90638908b98a833d02f728232fd2accf"],["/tags/同人/index.html","6774eb77c46fa0c767547e31f250981f"],["/tags/堀井雄二/index.html","576a5aa3de11429567f2f1adc23aee63"],["/tags/外海なおき/index.html","0b4a07f3afe62d5ff61718c3ac80df0d"],["/tags/機械式少女/index.html","777cadafc501156a55ff23104d621262"],["/tags/水仙/index.html","d9eb116466d4e760fa31dc262928547e"],["/tags/汉化/index.html","b0b096e473089db7ace33c48c8bf5168"],["/tags/片冈智/index.html","563059c161a0ada0d95927841bcc6135"],["/tags/片岡とも/index.html","6b0c95f028a8b2fbdbe4d97c186a022d"],["/tags/牙の刻印制作委員会/index.html","74a9919d8099a42355ab77d735cde563"],["/tags/牛カルビ定食-FLAT/index.html","2396a87f25bd4b198272744ea8d8c3f9"],["/tags/牧尾屋/index.html","ae20e8948e8b07dc4478e4b70824e301"],["/tags/猫猫社/index.html","ffdf59d6a70046f04791a76bbad90ee6"],["/tags/王宮魔法劇団/index.html","dc2c0b4adba65b26897af9bcb6ad7772"],["/tags/画集/index.html","602402e01764f18fef3d1baf073f3368"],["/tags/索引/index.html","a73522f81e31a9bbc9a405590685b238"],["/tags/自购/index.html","3d3df727b2de662cc52351b5d550adbb"],["/tags/郷愁花屋/index.html","47e7ee0001da133686043f11e37c088b"],["/tags/閂夜明/index.html","0ca5ac4542820c264dfba5c6f9e42884"],["/tags/音乐美/index.html","fe6eb9b5026b0637d8223b1d102bcee7"],["/tags/黒†救/index.html","ddb427cc67ea2d6b26f26aed3ac81a5d"]];
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
