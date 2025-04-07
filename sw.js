/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","2dfc1feb6eaf488f89b26822b3d74eff"],["/archives/2024/04/index.html","71cd219d20b606afcf8b702a14d8f6c0"],["/archives/2024/index.html","d076d905d0d83078ac819ed9b3ebca44"],["/archives/2025/02/index.html","9486cab03623cbc0de8183b574b2f9c2"],["/archives/2025/02/page/2/index.html","791029932792abf08eb1b85a17f7b1f0"],["/archives/2025/02/page/3/index.html","fc805e13b7a6eca4e61a1574d4337475"],["/archives/2025/02/page/4/index.html","9409e12cd4341023697629e698890f6f"],["/archives/2025/02/page/5/index.html","5d4ada03f3351046cf92e6f65f3369c1"],["/archives/2025/03/index.html","636a1bc80a558a713bb2704f89747a66"],["/archives/2025/03/page/2/index.html","7512cf9b02dbc9c5bd4352d05e73ee96"],["/archives/2025/03/page/3/index.html","9fb972331193323921f6ffd84dd45e44"],["/archives/2025/03/page/4/index.html","44a715ac8139cf3541ef4f373cd0fa0e"],["/archives/2025/03/page/5/index.html","c8717362fd4c3fefc4d71798350bac06"],["/archives/2025/03/page/6/index.html","4426ea76c1ec0e950b05d2afdb6ea315"],["/archives/2025/index.html","ce317ede414819dfc0d4faf5dbe8915f"],["/archives/2025/page/10/index.html","de5dbe91cc8077f7d2f24dbd4e3706f5"],["/archives/2025/page/11/index.html","5964858f410bbb97ad9bce8f95c6eb58"],["/archives/2025/page/2/index.html","a69527ee1ed7c13a01c3771ca8efba71"],["/archives/2025/page/3/index.html","fa40afabb2239463cc5e63fc9c7575ca"],["/archives/2025/page/4/index.html","12032e874c8da836a23c89daea44da0d"],["/archives/2025/page/5/index.html","13305b7c877c16f27d2c693c7bee5261"],["/archives/2025/page/6/index.html","d9d1820106c8c0816ba4dd37ce583afa"],["/archives/2025/page/7/index.html","49c64e15ad40e1a9a5817c9c4f80d13e"],["/archives/2025/page/8/index.html","94d598bd7165e67c10c50c6515967f5c"],["/archives/2025/page/9/index.html","46fe8b3fc044afe8e4063f89db7963ad"],["/archives/2026/02/index.html","244586132408d4a27c292cf550639ca8"],["/archives/2026/index.html","eb614a86ca1572f2be7e64f3b447bb68"],["/archives/2925/01/index.html","0b56151d1d08e324f09fa83a69713355"],["/archives/2925/index.html","35f40f4a756a20b506271fc076da4e3a"],["/archives/index.html","b365d5f160761ad0502bba9f984f95f4"],["/archives/page/10/index.html","8c775c29ac63e4adc54544252b458ed8"],["/archives/page/11/index.html","873bdafa01abe16a246188728bec791c"],["/archives/page/2/index.html","41feaa4d91defed1933d4bfd7b007644"],["/archives/page/3/index.html","c172e9c3c8ebcc582bf31cd1dc02d86c"],["/archives/page/4/index.html","0920db16e995ced7a6b833fa9dd84a04"],["/archives/page/5/index.html","7904eb7c0f3320e04491a07b8ef9ba32"],["/archives/page/6/index.html","ad1981cd57e7e5733bdf5ea49cd17d7b"],["/archives/page/7/index.html","95006a0dccade0def2f8349313f007ba"],["/archives/page/8/index.html","6ead959415c8c91def643869c3e152f9"],["/archives/page/9/index.html","27fafeb820c4f98f4b4e0ebdc82c71c5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","df4c05fe2f3ad8fef017d006436a2ff4"],["/categories/galgame/page/2/index.html","5d8d33d0415f811104bea3ec6d1e0918"],["/categories/公告/index.html","7a6c299fde6b25aedf92745d436e2f3d"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","a96d240d18abf640a9289857945b42a7"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","47ae5c4e8fd88dbd422be3e1c1d79778"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","c2d0c885c916fffe75a73039c327e58e"],["/page/10/index.html","072e6c368bc91b0a322399da8d72dc67"],["/page/11/index.html","e52eb3dab5aa8feaeb35a8b8affd2766"],["/page/2/index.html","e2261030e353fb03e22529e28caadeae"],["/page/3/index.html","4c8ecd386b124ca7bb43b9a27000ec6a"],["/page/4/index.html","f14b8216357bbb6e03b57580499b12be"],["/page/5/index.html","4a2ef43185ebee2cc7e8bf778cb72187"],["/page/6/index.html","124e1d11bbe0fb6c806db237aa1e439a"],["/page/7/index.html","6f62ade4b6768038180c9d6e80dc8a87"],["/page/8/index.html","61507d74470c4f85f75791da1dae3610"],["/page/9/index.html","7c5c0bb31db9c90c1adf65058ced1066"],["/posts/10c9dd98.html","7f162d6925fbdc722cc46a15ac5e189a"],["/posts/1295b569.html","2fd9db30f38b3ba027e4572496e7fb56"],["/posts/1370342.html","1b2ef13cc12c955bba80afd0c6a38b09"],["/posts/15ef14c2.html","9aa967d389d1d4cba998379c2ae3c947"],["/posts/15f3959d.html","501128ac869d2ad034fca1cce43aae86"],["/posts/18ab785d.html","b19fc57590812aee34729720fcd0e764"],["/posts/1d59b71f.html","7465f7051cc0fc52a7680740c2d1ff05"],["/posts/20b3f3a4.html","0f85774bd86142976d204cd4ab5fe8ab"],["/posts/245f1c7d.html","9f955db40a994753c9ed7ab0b9d7639f"],["/posts/252658f.html","fb4471f4ab70cc72ba073e030ed68608"],["/posts/28397adc.html","8d7e2f7402edc474debebf371fe467f4"],["/posts/2b38bce0.html","6a531deac8be4cb6cf56258a4fe73eff"],["/posts/2c0a6836.html","d894dbdeff1966fb1faf94905df4e9f4"],["/posts/2cf620f0.html","1e8c4489cae5fdb101daff8966bb033c"],["/posts/2e30fd6d.html","2be4e9bff9d21b7943157190d84508c4"],["/posts/34292736.html","46280ad5101b83cc75d1c2410967463d"],["/posts/3468cbe.html","a99f64cdce836c664dac49f37cfde7f5"],["/posts/39176dc0.html","ca209bd50accf290734e5757990c249f"],["/posts/3e118dbf.html","d3a1d2ec15b733ca5da072bfd4e4893d"],["/posts/3f7d823a.html","385c83ebd33f4839704d01cfef1e2c2c"],["/posts/3f978819.html","f80ce08dca8918e8a6533caa1ce8ac20"],["/posts/43945723.html","8bd6e785e22b54a10667da965c1871c2"],["/posts/44124a6b.html","d79c55a04674d22fa53833271e414c52"],["/posts/47abb61d.html","37bf045089db448ca17e110f8ef5ee98"],["/posts/4b689be3.html","18c89ef33170fcf63ab35ab59da0dd8a"],["/posts/4cf8423f.html","4c039c716c1c24778a3f5234ae46e277"],["/posts/4dcf85c.html","0822fb26fc691a5c03ff75eb1549bbb4"],["/posts/500cd322.html","793e64a9f742f7a37ca6bcd867dbe070"],["/posts/51c9b1ff.html","66c863c7347f1a3fa9a240851789263f"],["/posts/52b5b3c6.html","0277f588952104ffc9e999aca9b10b8b"],["/posts/5f6e0c59.html","59abcef0ae1af294a4776c6f869b2606"],["/posts/61a63a84.html","b9674d1170d44280abe4b06c936ea9d7"],["/posts/625ab7bf.html","b1adcd31ac50ae61588c8f313217e7db"],["/posts/6336a2f9.html","07af7f61a1bdcd064efa68cb450c6be7"],["/posts/6432d61a.html","8c4ebcacbbd643d374329d0cd952fc1c"],["/posts/6515f032.html","61d8674e608d50d11d4cef26988fae4c"],["/posts/6720ccdd.html","df15b6e5e9554c2685a0d9e922ae713a"],["/posts/6a4b5ac8.html","56ee732b8e64c28cdc711a00fd82ec83"],["/posts/6aa4177c.html","94fe6e0280abbd61b6aaa749da4284ab"],["/posts/6b15f81f.html","6e410ecb37eae50dfec26ee42cd43d8f"],["/posts/71131d34.html","50e33084f0b951693b6ffb655a8007d4"],["/posts/78a8a8d3.html","2a9a4cafe4081bb95d020390e95b188c"],["/posts/7a5ef3d0.html","b5561b4c125aa67b9bf070ae00d5e2f3"],["/posts/7b41e1ac.html","7df58ce282dcd2e84fe98b3f496b32cc"],["/posts/7b51011d.html","1651024c90fe9c2d000323ca101b3e74"],["/posts/7e3aa3e2.html","f8203c0979ea4183ea4b9b7b24435b7c"],["/posts/80fe2691.html","4242a5a79773cfb8934eda0c087bc2f0"],["/posts/81ac52e9.html","c3dab0b847fd5f90199df71fb6b52b7e"],["/posts/8486f6f9.html","44874e018dc3a0f68e5f9f5d18d7514a"],["/posts/849b40f8.html","3e16ce4d70ef27a4d8369d80daa1cb41"],["/posts/85c51d68.html","cfa5ffb02dfed4166e78af62ad0c6c94"],["/posts/886f8d3.html","82269ffadd024912196e0f8e7655d065"],["/posts/8a7cba10.html","8f9c1b0c9bbd884a0bbdf3a790eee4fc"],["/posts/8ac11b41.html","f50c4a279132e098100e9cc4668a7b73"],["/posts/8dd520d9.html","7e2536170b852d9ced44938aed035d41"],["/posts/8f555654.html","0839aae964c3e9d0ed67f0eaae560a32"],["/posts/92a980c2.html","0c8e84091e1f807bb2cf1a97df005fea"],["/posts/92ce16.html","83c0beb2882363b0a66445b26bb826f6"],["/posts/93e9943b.html","716b28da38b485f620966e34dc8f3941"],["/posts/94d3c794.html","75f1524aafca0674d8210cc3e1ed04c5"],["/posts/97f50eea.html","a9c869bc134fc89c021f9cc629548272"],["/posts/97fca8be.html","bdd8e4e5933256fae2b4fc1c515f670f"],["/posts/98662d05.html","e1339c5c2e1125793dbfe8665ece1e3d"],["/posts/9a2f6162.html","a52c87597e995686e87f5eb0b542752a"],["/posts/9b22a48d.html","8750a9554f94c6c8627efb1019adb2a0"],["/posts/9cb455b1.html","8673805af16db47f2d50deea093ec6df"],["/posts/9ecdeecc.html","cf71786f6dbee16540ace5d23d2442ff"],["/posts/9efd7701.html","68d7e3cbe49cb7d9f92a3cd774f60350"],["/posts/9f61c1a0.html","98f33b2eb64bc718b4ccb4228218e492"],["/posts/a1de710.html","f324e1a80845372fb78244546b453b13"],["/posts/a30eb0cd.html","abe6865f0804d804bab7994f3ff87f6a"],["/posts/af1807ef.html","1da337520f167a8180f67c45e757a7aa"],["/posts/b497b647.html","6d68619380a95b34a8801a1517cf8167"],["/posts/b4d464b0.html","6c21dd9509460097574b9c5d35aa6222"],["/posts/b5fb773f.html","8da1e69cf4a7170b881ecec75d9a1189"],["/posts/b8d46b32.html","561595da772fba3f53404862d358c703"],["/posts/c1b2c6c9.html","eb014b8fb31ae393e3102cec885e611a"],["/posts/c2111cbf.html","e2bec63762009660e899c9554871c8cc"],["/posts/c316c2e8.html","7f63ffe071086627ac01fff5cda7d501"],["/posts/c43e60b5.html","bc2599556983a302a5538dd0ca8a4737"],["/posts/c497a412.html","17d267e339107cec97e63b4d1441aac5"],["/posts/c5de299a.html","68b564220a2bdf8759ce08030ac77b8f"],["/posts/c70bba9c.html","039042ad4dfbde2b703243dd362d7805"],["/posts/c797535e.html","509113b1914c95a13850736c7858f86b"],["/posts/c7a62c79.html","fb67321b22063d7ac677a238725b71c5"],["/posts/cae2c959.html","0b1523a6c9d6e73b5ad3e5940b4140e3"],["/posts/cbebef2b.html","50ac85317e9ae3c68efec6a7d698629b"],["/posts/ce25023e.html","e63600659a195e39a80bbb105b305927"],["/posts/d2fd4837.html","dd1eb4d640d1bfdf5a0979b6a4702b24"],["/posts/d3233cbb.html","3fddb0d9628bec4c4a1feb31adbde2f6"],["/posts/d3a745a8.html","d0a1ef2c94a8934131da58c25efa634a"],["/posts/dc815d5.html","229e5abb6fe94f359e2df22b56feb6b6"],["/posts/e3ab6ad8.html","e3ee80124974bf34ab7f80879f8b4049"],["/posts/e5018da6.html","ce654cdfd22d879bd44edd41fead4c70"],["/posts/e5963272.html","bf0969bedcc1d341d3bfb50e8f21a379"],["/posts/e624b065.html","d3f54d971270886763905a817dc4d007"],["/posts/e7c703bb.html","dfca45fab02690f74d5b5ad93ba69c75"],["/posts/e8f14b6c.html","9a065d854da75b09d059298c235010ec"],["/posts/e91abb63.html","7c03446cc9ed0ed779600e21d72f67b5"],["/posts/ea9a8808.html","aa7ccf57034d7079be2ab912e93c8eb5"],["/posts/ebaf2232.html","fe47eeed89ef23ce0d8906af6886ab38"],["/posts/ee1ed673.html","e82871a2e0af4e30e133c33690fe3e3a"],["/posts/f0c3ed61.html","f5cf31fc7462cf334bd735dfecfd39f9"],["/posts/f21e7f84.html","01074b6c988bf5add192a72ad3346ab5"],["/posts/f230b0fd.html","2030d36d08d456188a0bb10497f34e29"],["/posts/fc04d0d4.html","ee21ba974a3923cf0aa466ee25bc027e"],["/sumire/index.html","add727208a189e6a619725bfeb951f0a"],["/sw-register.js","3ba939ba9482d0a6b86b776e5a4525e9"],["/tags/APPLE-project/index.html","f8c7978e0ebd834a5ff7d8065246fa65"],["/tags/BELL-DA/index.html","7b3187aeed5e31d46357fd68f4ea2515"],["/tags/BL-Game/index.html","a92bdb24b3754cb0688b969bbc1d21b0"],["/tags/Blue-Dahlia-Digital-Creators/index.html","b39c3d2907b071b20665674e80f8e88b"],["/tags/CHUNSOFT/index.html","153a710df84a5ddda5b90efe1dd1654c"],["/tags/Cherry-Pie/index.html","1bcf5522ec71f929c0fd6bb53e81af0d"],["/tags/Circle-Mebius/index.html","f1047c5aa79ceb3b2b8b96a3f6a8c8df"],["/tags/CresCENT-BLANK/index.html","5fbfd6e5dad8cf79e3578b7493f0a178"],["/tags/Dopamine-Software/index.html","00a7002289bd2b487041897c8c641b08"],["/tags/Dos/index.html","6916fe9a3e6926295af1623483dcd865"],["/tags/Earth-Well/index.html","2b2d109ff5fe2355a3a5d55d71af9c50"],["/tags/Kanon/index.html","86e107169521426bb02a5a1b0e086627"],["/tags/MANATSU-8/index.html","1fa8ba4b7fc2ec97f18bd25e3fd9542f"],["/tags/MIO/index.html","073f8f3a6fc0ab1c83483b983744d03a"],["/tags/Nmyu/index.html","6dca051ed9a8d85242b48c20fd07b417"],["/tags/O-S-I/index.html","2368b82eaada96b9d3b1d9fd2bb39ea5"],["/tags/Omegaの視界/index.html","a8ed66c7a5f9a2b9893415bdc03a72d3"],["/tags/PC88/index.html","8eb2b5d150d20ac775cf45da1effc68b"],["/tags/PC98/index.html","641612be5d415f1fd6ea34c5c6f9e361"],["/tags/Perpetual-Room/index.html","cbe72e950c3cfa375b309002776186a3"],["/tags/Pleiades-Company/index.html","79bb2e849ae755bdcf456a2cb0fd5ced"],["/tags/Project-Twintail/index.html","32f7185cae31dca3d0639d5a51f55ccc"],["/tags/Reverv/index.html","f6f46b8099300262cebd3310fb5b3d4b"],["/tags/Saihate-SOFT/index.html","03ebb8efacf6e817f8ea9f19b3fd8840"],["/tags/Sky-On-R-imaginAtion/index.html","8a8fedefcd2e3f4c2de79b7435fa9e55"],["/tags/StrayMoon/index.html","1e0072b14d5566aeafbaf7699c0d3a89"],["/tags/Studio-Bu-Sa/index.html","32be09498d5fced8b95f46ac0200ed5e"],["/tags/ToHeart/index.html","ef63f23096da8a195fc667b9889200d8"],["/tags/Traumend/index.html","324b4797f231ce1d5b19e19d77489932"],["/tags/Witch/index.html","4ced50e1298777c0c3658dace00a2d48"],["/tags/adonis-project/index.html","4457f389ef86d3b97b3b2e3d6e7ae94a"],["/tags/flash/index.html","c805f3f3106a949e506df838bf1c5424"],["/tags/galgame/index.html","d17b599fa3744c10688ee7bf2f8759e4"],["/tags/galgame/page/2/index.html","a178a1efe0d2dfae00102a03456be46d"],["/tags/gal资源/index.html","d19a38450a63ae9bed1f8b44d56e2839"],["/tags/gal资源/page/2/index.html","622dc4bfb81f697106c582346bbba882"],["/tags/gal资源/page/3/index.html","0501a20b170b1fe60c9ba9b734d41217"],["/tags/index.html","b05d0c13440a6fbf9005870569ace1a8"],["/tags/rkr/index.html","dadd4d3679fca485bf9ee90474939e0b"],["/tags/team-eye-mask/index.html","ccd8863eb2383cd51a16ec48bb968cbd"],["/tags/ありすくろいつ/index.html","666b252ca6c3b3b6d1468a346adac509"],["/tags/いつものところ/index.html","3783512aa6133e7e3059bff104dced78"],["/tags/きつねみみ饅頭/index.html","94f22f62dd3485490179a10674e96ab2"],["/tags/ねこねこソフト/index.html","8e7965877e230cd707b41728a0995a5d"],["/tags/ねこバナナ/index.html","b84247e5a374918280080bbed10c079d"],["/tags/はちみつくまさん/index.html","b3d56b48ca79f04e3afd4053b79423aa"],["/tags/ろりちせ/index.html","e07b1a84851750a914243e468f756ae1"],["/tags/アイル【チーム・TATU】/index.html","82fb0b35e8724f0d2428b26e43912612"],["/tags/アークシステムワークス/index.html","f42878b95841abe96a2eed98cfd975c6"],["/tags/ブロッコリー/index.html","9bfbbfc9e15660c096c802d2e7eb6c44"],["/tags/乙女/index.html","2af054202b64ed08536bcc61c32e5de1"],["/tags/停产/index.html","1d00ffa18434950d3c59d386ab809bc3"],["/tags/公告/index.html","ba5556193f60f58e593893efd543e86f"],["/tags/同人/index.html","116f25dfcff3f8c47a95f6269325219a"],["/tags/堀井雄二/index.html","50cb8a6b9fec01bc72eb114e6ef2f238"],["/tags/外海なおき/index.html","fbb197770c451d32fe9f01826b8564b2"],["/tags/機械式少女/index.html","7589f300f55f8feb88c888cae45cd2a3"],["/tags/水仙/index.html","3939e06ca0d5bd23115be00d340502bc"],["/tags/汉化/index.html","a83bd0489907e2ad3e28ab93503026c7"],["/tags/片冈智/index.html","feca17642d59132dbd7e61434358cba8"],["/tags/片岡とも/index.html","edae6bce009a82465a49ee37635ab622"],["/tags/牙の刻印制作委員会/index.html","b7d9ae2e4db644b74cdfa394d6a972aa"],["/tags/牛カルビ定食-FLAT/index.html","70f4212d09588f613f6ad0abc22277b0"],["/tags/牧尾屋/index.html","2adab18ad89ec7a54597b712e460dabd"],["/tags/猫猫社/index.html","d5fc8837bc71d738afdc7e1cad9e9778"],["/tags/王宮魔法劇団/index.html","40553bc188d2ac323eb42adcfa720da6"],["/tags/画集/index.html","57a1b70263045a8c795baf812072793f"],["/tags/索引/index.html","5e94f45b16c6b2730483fa829085dcd1"],["/tags/自购/index.html","a899e32b38f3d5337cebd6b2bbc66605"],["/tags/郷愁花屋/index.html","98aeb361ed4c17f22fb7018a1387bfb6"],["/tags/閂夜明/index.html","6d5b6e0c709902622a9e7ea71e2398ba"],["/tags/音乐美/index.html","562cfc22fbe276742b199cb634c1e691"],["/tags/黒†救/index.html","3c0eedf541d2fda60c03e33345485e22"]];
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
