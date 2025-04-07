/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9693f0dd8321cc277c2792a2391e8def"],["/archives/2024/04/index.html","6ed1d5d769617ee299094ba519468924"],["/archives/2024/index.html","9f67fd0f05967a7fd8c2aff737f43233"],["/archives/2025/02/index.html","e7cd12040700237bf1f59de468dd9968"],["/archives/2025/02/page/2/index.html","fe935081449eb15cc5a6aa3512b85789"],["/archives/2025/02/page/3/index.html","a49576a1a8fd716829e36a644e934744"],["/archives/2025/02/page/4/index.html","1511a2fbc45070f3503270fee425a881"],["/archives/2025/02/page/5/index.html","32d78090db1aa4195be7f1d7b6688e2b"],["/archives/2025/03/index.html","0635dd4c6705135195c3d6151c6789c4"],["/archives/2025/03/page/2/index.html","86ce5ab5f608b8460d463cdc5a1a9e98"],["/archives/2025/03/page/3/index.html","35674279f086dc87a2f786bf272a3304"],["/archives/2025/03/page/4/index.html","e29cdc541c5cfd6fc02a7146fa377100"],["/archives/2025/03/page/5/index.html","09941a4fec1a36363949879fbee26682"],["/archives/2025/03/page/6/index.html","64b0384cb3cf9060a1238678af52823c"],["/archives/2025/index.html","f8fa40c2353473af7fc781c9bddd0502"],["/archives/2025/page/10/index.html","e21e49fcf6e63e2f1c6ec5b441eac1e2"],["/archives/2025/page/11/index.html","7896b605331cf708c5731b13b9911c2d"],["/archives/2025/page/2/index.html","02a3776a9d0da232d5b495990c3b5329"],["/archives/2025/page/3/index.html","dfd039767853959feff2546ec46fc287"],["/archives/2025/page/4/index.html","20a5f7a7bf944c42830ab21bc33e1ec4"],["/archives/2025/page/5/index.html","c6c4940639b535d003dbe17a20e83ab5"],["/archives/2025/page/6/index.html","355de64e911b15fe16c9324708f35e08"],["/archives/2025/page/7/index.html","34a8c51c103faecd60beabd16395e097"],["/archives/2025/page/8/index.html","cf3064738158980f373f323dcdba67c2"],["/archives/2025/page/9/index.html","8497d323a0d29cf3c2e6629e8e81840b"],["/archives/2026/02/index.html","61583abac25c460b9c3ecb3b5764a874"],["/archives/2026/index.html","e7198188dc9ecaf7406fa818e29e4bb1"],["/archives/2925/01/index.html","ebb850fd93b79b2539487e958ab1c95d"],["/archives/2925/index.html","b12636d072fbca4498765234988f34dc"],["/archives/index.html","47ab1e1c15dca334206f9b7355a9241c"],["/archives/page/10/index.html","35ace6d11b68b505e57d3425f07519ce"],["/archives/page/11/index.html","ca7ebe6d92feb446e150e80bed60002f"],["/archives/page/2/index.html","04956ea222994a65246f1a8a8c6acd66"],["/archives/page/3/index.html","71cb71b7a5b3dd26647b644c6f1494be"],["/archives/page/4/index.html","eae3e47ec1d73b31aebfe22c979331dc"],["/archives/page/5/index.html","cea2c3d3c17bb4958959c65f26c0a6af"],["/archives/page/6/index.html","03a67fa11917785eeb17a27a0659b184"],["/archives/page/7/index.html","8294ae2c97cec3f6dfa5f4601ab0856c"],["/archives/page/8/index.html","63c483eb508f409da028feaf1533cfd5"],["/archives/page/9/index.html","4e8863bb98c56e27e91f8b9d609b7725"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","57b6e5b1353cfbf83b02dd061c2868b4"],["/categories/galgame/page/2/index.html","8ffa7e2a9ba9a2b5d448d7fad93d2b8f"],["/categories/公告/index.html","961bed74e9f87fb089367bf936637ebf"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","0e0bd4689d4055eacb8abc4fae667ab7"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","6d06dda9c905c05c4e0b4bf16aca87cb"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","92b580e3639b8a13fd01a81223e9f4e3"],["/page/10/index.html","b5832de33fa2cfe0ac8ac8b8cb7000ca"],["/page/11/index.html","fd860feff62bc35fed6143bd8729e5bd"],["/page/2/index.html","23c011109fd4e7ba071f76f91e4b3d47"],["/page/3/index.html","296d34277c909bc8141bb2f0ecef2f46"],["/page/4/index.html","7b7186d2e2e75ba899db950177bc7bf6"],["/page/5/index.html","f1dc12578a47df7604d53468e2a78539"],["/page/6/index.html","04e5c9be2b40948ebc0cd049325dd502"],["/page/7/index.html","dc7f78cba6a6f71d7335a442f52af420"],["/page/8/index.html","9c814fab7d5e61b31b41b000bfab47dd"],["/page/9/index.html","a1aa631b78ec5bc7ab14d027bf074deb"],["/posts/10c9dd98.html","8ce53a8d292fbb709063c813e39fec70"],["/posts/1295b569.html","2fd9db30f38b3ba027e4572496e7fb56"],["/posts/1370342.html","4422b5fea4b57561368b5665cd8230fd"],["/posts/15ef14c2.html","e1fc7bef7e6c1674ac9fb26d067c6b10"],["/posts/15f3959d.html","501128ac869d2ad034fca1cce43aae86"],["/posts/18ab785d.html","b19fc57590812aee34729720fcd0e764"],["/posts/1d59b71f.html","b2f68df638b52aed84a2a76d4179de9a"],["/posts/20b3f3a4.html","623ea2b9b5d7c8155ad4b4e8e7ac1ce3"],["/posts/245f1c7d.html","9f955db40a994753c9ed7ab0b9d7639f"],["/posts/252658f.html","fb4471f4ab70cc72ba073e030ed68608"],["/posts/28397adc.html","c51d16e37789cf96444741c5ebc29354"],["/posts/2b38bce0.html","6a531deac8be4cb6cf56258a4fe73eff"],["/posts/2c0a6836.html","d894dbdeff1966fb1faf94905df4e9f4"],["/posts/2cf620f0.html","16af71c1b03df173e256b8a807eeda4b"],["/posts/2e30fd6d.html","2be4e9bff9d21b7943157190d84508c4"],["/posts/34292736.html","46280ad5101b83cc75d1c2410967463d"],["/posts/3468cbe.html","a99f64cdce836c664dac49f37cfde7f5"],["/posts/39176dc0.html","ca209bd50accf290734e5757990c249f"],["/posts/3e118dbf.html","d3a1d2ec15b733ca5da072bfd4e4893d"],["/posts/3f7d823a.html","385c83ebd33f4839704d01cfef1e2c2c"],["/posts/3f978819.html","19638c1daeb58ee94701b97ef2b607dc"],["/posts/43945723.html","8bd6e785e22b54a10667da965c1871c2"],["/posts/44124a6b.html","d79c55a04674d22fa53833271e414c52"],["/posts/47abb61d.html","37bf045089db448ca17e110f8ef5ee98"],["/posts/4b689be3.html","fa2b331b616f77fb14df2e3365e72f02"],["/posts/4cf8423f.html","4c039c716c1c24778a3f5234ae46e277"],["/posts/4dcf85c.html","c24a56868ff0f18e23193a2fd187936c"],["/posts/500cd322.html","793e64a9f742f7a37ca6bcd867dbe070"],["/posts/51c9b1ff.html","66c863c7347f1a3fa9a240851789263f"],["/posts/52b5b3c6.html","66eb030bc6a11df4b5a516d6a7b4eb4f"],["/posts/5f6e0c59.html","59abcef0ae1af294a4776c6f869b2606"],["/posts/61a63a84.html","b9674d1170d44280abe4b06c936ea9d7"],["/posts/625ab7bf.html","b1adcd31ac50ae61588c8f313217e7db"],["/posts/6336a2f9.html","f2215ca0ab9c538e8bf00a87901bd71e"],["/posts/6432d61a.html","8c4ebcacbbd643d374329d0cd952fc1c"],["/posts/6515f032.html","523266807729916a66487c6c775c59d2"],["/posts/6720ccdd.html","947858fc766c138961f023677fce5329"],["/posts/6a4b5ac8.html","56ee732b8e64c28cdc711a00fd82ec83"],["/posts/6aa4177c.html","94fe6e0280abbd61b6aaa749da4284ab"],["/posts/6b15f81f.html","6e410ecb37eae50dfec26ee42cd43d8f"],["/posts/71131d34.html","50e33084f0b951693b6ffb655a8007d4"],["/posts/78a8a8d3.html","7ac70a92c8b05f3c18fc5fb178582cb9"],["/posts/7a5ef3d0.html","b5561b4c125aa67b9bf070ae00d5e2f3"],["/posts/7b41e1ac.html","345fe170fa504778344e79d2357fb8b2"],["/posts/7b51011d.html","1651024c90fe9c2d000323ca101b3e74"],["/posts/7e3aa3e2.html","8175ad9cc77d57cd9a8a9e62cac0baf9"],["/posts/80fe2691.html","cb14b441167d26b67c44e15f3da86bab"],["/posts/81ac52e9.html","6ba397c1dec1d7e376f335166c7039c7"],["/posts/8486f6f9.html","44874e018dc3a0f68e5f9f5d18d7514a"],["/posts/849b40f8.html","3077970a5f373d94392e53a0f169350c"],["/posts/85c51d68.html","250cd5c44ba020ad585196e3905a7857"],["/posts/886f8d3.html","5b7b8eff01d783577490e4b23c2900b7"],["/posts/8a7cba10.html","8f9c1b0c9bbd884a0bbdf3a790eee4fc"],["/posts/8ac11b41.html","f50c4a279132e098100e9cc4668a7b73"],["/posts/8dd520d9.html","7e2536170b852d9ced44938aed035d41"],["/posts/8f555654.html","b99ca652f7edbdd63e4136176a83d7de"],["/posts/92a980c2.html","0c8e84091e1f807bb2cf1a97df005fea"],["/posts/92ce16.html","83c0beb2882363b0a66445b26bb826f6"],["/posts/93e9943b.html","716b28da38b485f620966e34dc8f3941"],["/posts/94d3c794.html","75f1524aafca0674d8210cc3e1ed04c5"],["/posts/97f50eea.html","a9c869bc134fc89c021f9cc629548272"],["/posts/97fca8be.html","bdd8e4e5933256fae2b4fc1c515f670f"],["/posts/98662d05.html","a599a3b0870ef258ca2be8a713998643"],["/posts/9a2f6162.html","a52c87597e995686e87f5eb0b542752a"],["/posts/9b22a48d.html","8750a9554f94c6c8627efb1019adb2a0"],["/posts/9cb455b1.html","ab0ad100c9f5d035945b926e2511138c"],["/posts/9ecdeecc.html","cf71786f6dbee16540ace5d23d2442ff"],["/posts/9efd7701.html","68d7e3cbe49cb7d9f92a3cd774f60350"],["/posts/9f61c1a0.html","98f33b2eb64bc718b4ccb4228218e492"],["/posts/a1de710.html","f324e1a80845372fb78244546b453b13"],["/posts/a30eb0cd.html","abe6865f0804d804bab7994f3ff87f6a"],["/posts/af1807ef.html","1da337520f167a8180f67c45e757a7aa"],["/posts/b497b647.html","59241e6147484b88f892329423717ac0"],["/posts/b4d464b0.html","6c21dd9509460097574b9c5d35aa6222"],["/posts/b5fb773f.html","48e45228dd4ab1500dabdee320d6c48a"],["/posts/b8d46b32.html","561595da772fba3f53404862d358c703"],["/posts/c1b2c6c9.html","eb014b8fb31ae393e3102cec885e611a"],["/posts/c2111cbf.html","e2bec63762009660e899c9554871c8cc"],["/posts/c316c2e8.html","79aa881b213e13f021db5e054b059a6d"],["/posts/c43e60b5.html","bc2599556983a302a5538dd0ca8a4737"],["/posts/c497a412.html","f525551627beaaf006cecb89736f4cd6"],["/posts/c5de299a.html","68b564220a2bdf8759ce08030ac77b8f"],["/posts/c70bba9c.html","039042ad4dfbde2b703243dd362d7805"],["/posts/c797535e.html","509113b1914c95a13850736c7858f86b"],["/posts/c7a62c79.html","fb67321b22063d7ac677a238725b71c5"],["/posts/cae2c959.html","e1375c9741b93a8fe3a0d2aee32a36a1"],["/posts/cbebef2b.html","ae433f8f906f7a48f4a8ba40756ec4a4"],["/posts/ce25023e.html","eb682410d194508f9944cb25340a5a54"],["/posts/d2fd4837.html","c8c767ea110061f2a26f3da83a0b58d4"],["/posts/d3233cbb.html","3fddb0d9628bec4c4a1feb31adbde2f6"],["/posts/d3a745a8.html","918fae9ef76f86bb800aad3b4ce45d56"],["/posts/dc815d5.html","f552b7b2d8dbb0f97f1ed82fa5d643d2"],["/posts/e3ab6ad8.html","e3ee80124974bf34ab7f80879f8b4049"],["/posts/e5018da6.html","a760e2baa1193d53b42ee72ed2244b08"],["/posts/e5963272.html","bf0969bedcc1d341d3bfb50e8f21a379"],["/posts/e624b065.html","1f4a51009b22efde2044694f115aadb8"],["/posts/e7c703bb.html","dfca45fab02690f74d5b5ad93ba69c75"],["/posts/e8f14b6c.html","9a065d854da75b09d059298c235010ec"],["/posts/e91abb63.html","913cf050b430a5dc36c850183f8dae6b"],["/posts/ea9a8808.html","aa7ccf57034d7079be2ab912e93c8eb5"],["/posts/ebaf2232.html","fe47eeed89ef23ce0d8906af6886ab38"],["/posts/ee1ed673.html","e82871a2e0af4e30e133c33690fe3e3a"],["/posts/f0c3ed61.html","f5cf31fc7462cf334bd735dfecfd39f9"],["/posts/f21e7f84.html","3133840a28d24d9f81847891c57b343e"],["/posts/f230b0fd.html","3c5c62f3e7cd378c0fd40ff54ff92073"],["/posts/fc04d0d4.html","ee21ba974a3923cf0aa466ee25bc027e"],["/sumire/index.html","4f80c1e52da821b9a7ce3aa8e2bf3caf"],["/sw-register.js","96c9086c35077105ed2feb7f18f27bf0"],["/tags/APPLE-project/index.html","ab5cf968117c4d5fd8922cd5b201e3c8"],["/tags/BELL-DA/index.html","7942484e65f1bbb7f2d6f8165e4cadf8"],["/tags/BL-Game/index.html","c3dde6577c5221249c2186b616a24a2b"],["/tags/Blue-Dahlia-Digital-Creators/index.html","5845a81965e62ee1072a8a1c666f3441"],["/tags/CHUNSOFT/index.html","cb5edf02851fc4e1804cdd838ccfadcb"],["/tags/Cherry-Pie/index.html","934fe6fee1de9d5006bce0161e272090"],["/tags/Circle-Mebius/index.html","8ec55ec6ec2f094d6ef7ea1dcdf79703"],["/tags/CresCENT-BLANK/index.html","7c878a1584868cc77bbef79126d77caf"],["/tags/Dopamine-Software/index.html","b6ddf70c0e9c2d6177bd6b6b2ca164ce"],["/tags/Dos/index.html","ca532b4cdcb1bc0e920cd48cd9d7b2ef"],["/tags/Earth-Well/index.html","85440220dc6cd080fb6504f2afcad987"],["/tags/Kanon/index.html","5e1374fdae3a15e3eb278fee483c65f8"],["/tags/MANATSU-8/index.html","6e005c663dc5471db870f5d2d9e39621"],["/tags/MIO/index.html","cee3bec203a54e3b7266b233e210a1e8"],["/tags/Nmyu/index.html","857f109b2a3e8b5510b549d46fccff8a"],["/tags/O-S-I/index.html","0f3dbe2f114577719b26b4de09dfacdd"],["/tags/Omegaの視界/index.html","104b0551898687d3de6665b302ee9c09"],["/tags/PC88/index.html","8d1e6796feca844cf16fb91e8ba7d392"],["/tags/PC98/index.html","93bb5be19db43b32f768e4c52a560b48"],["/tags/Perpetual-Room/index.html","8fe320c60759bd9dde236f82a85afe93"],["/tags/Pleiades-Company/index.html","1e293a17dfa3f7eb92da3fc980212106"],["/tags/Project-Twintail/index.html","89bd09ef84a9c7da16b78f84527d5d9e"],["/tags/Reverv/index.html","abaf52e2ae06e42731cff1e19ff18da1"],["/tags/Saihate-SOFT/index.html","c763e8ba8b4eac692cc1b017c8e0d256"],["/tags/Sky-On-R-imaginAtion/index.html","1b13e722f54737fbdf194088acfed90d"],["/tags/StrayMoon/index.html","969f8ceda1e72c3aac4164dfa624edae"],["/tags/Studio-Bu-Sa/index.html","39f167cddf555fda880e07747f6803b2"],["/tags/ToHeart/index.html","e71c7fdd881c51218ae6ddf1f649dbf4"],["/tags/Traumend/index.html","c00cda9fd18d21e53af044068e488095"],["/tags/Witch/index.html","b9cd0164cbcf1f1833bcf048c474aff6"],["/tags/adonis-project/index.html","9a4412f97ae1e501bb42553a2be9b5e6"],["/tags/flash/index.html","ef6067711324d179127a16816d2224b0"],["/tags/galgame/index.html","3acd8e98c53d727de9142d477fba002d"],["/tags/galgame/page/2/index.html","93c6d7a67ccd1dfc1c3aecc184d46066"],["/tags/gal资源/index.html","7d966529ae0670ae91246a9bfe641715"],["/tags/gal资源/page/2/index.html","0cc0ef9e42b784dd0b285267f0b7fc48"],["/tags/gal资源/page/3/index.html","53a2c41cdabd3894d5fe83cf3f438557"],["/tags/index.html","9be3a88b20a493db48c9297fcc806c12"],["/tags/rkr/index.html","42f6635c8b2e9961198421200a9a655a"],["/tags/team-eye-mask/index.html","fb338d27159369f3a753ba53df257186"],["/tags/ありすくろいつ/index.html","73669fa40fb767a4c612d65386ba2c3c"],["/tags/いつものところ/index.html","54ae4ab03fa37fc4f960b91f5ccfdb4d"],["/tags/きつねみみ饅頭/index.html","05490f801cb16f93c42566d7aa49afe4"],["/tags/ねこねこソフト/index.html","e11bff8079a5856f9e70526682856e4b"],["/tags/ねこバナナ/index.html","a9fa5b8edc54d7a1440fa0727b2afcb3"],["/tags/はちみつくまさん/index.html","7ad2d1aa90d7c4cdf426e6cc1418839d"],["/tags/ろりちせ/index.html","4ecab3b5f30ef3d8abe4b6152c492d44"],["/tags/アイル【チーム・TATU】/index.html","e4e67bd74e1c270e918eeafeae208e3d"],["/tags/アークシステムワークス/index.html","1c58bf7a2de561557ce141c815ac07f7"],["/tags/ブロッコリー/index.html","adb5f6a3c776c89806c5e3bc383d2c6c"],["/tags/乙女/index.html","d42bd232f777f6203c8d41591f42881f"],["/tags/停产/index.html","0b759841a9c100147173266c3b07ee29"],["/tags/公告/index.html","d0c0b3cbd4847306b03a6cd885dafb70"],["/tags/同人/index.html","5afc60507d568378bf24e4758c542e91"],["/tags/堀井雄二/index.html","e526b8db95de00a5f8ba53d0377e1684"],["/tags/外海なおき/index.html","783b8e6faf5f4962d9a005e80104b835"],["/tags/機械式少女/index.html","608c713b58628569bfa4b764616fdeea"],["/tags/水仙/index.html","43dd0cd5d3de3a2415b1d267bfaaeefb"],["/tags/汉化/index.html","0200718265c90692b29f207d126b0225"],["/tags/片冈智/index.html","22f01a9bf19b0b93fe95aca353fad97a"],["/tags/片岡とも/index.html","86be573d765c26945c2ab378cd25faee"],["/tags/牙の刻印制作委員会/index.html","0efbae8956bddfad60ad2862d56399be"],["/tags/牛カルビ定食-FLAT/index.html","2c8d6ea4fffaf4e02dabd1a880a6cd7e"],["/tags/牧尾屋/index.html","241ceb71cc2bb79e634abe76b81a181f"],["/tags/猫猫社/index.html","b99075251d641737f445820dae1ffca2"],["/tags/王宮魔法劇団/index.html","c651361238d65a8ff778751fd8e5283a"],["/tags/画集/index.html","0c56d3bbead1c533bd08cd0994eb7460"],["/tags/索引/index.html","bf75950e07251c3c8f04e4dc46499416"],["/tags/自购/index.html","ec54ee94516ea46593e6df06960967be"],["/tags/郷愁花屋/index.html","fbc1f79d6020034cf741ca3e6146ae33"],["/tags/閂夜明/index.html","59637a0e80b02a198cff6b0ffed5c03e"],["/tags/音乐美/index.html","4348603eec51da1caf77e58fada31ef0"],["/tags/黒†救/index.html","72cf19413b769a889d1467ee247fc9c3"]];
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
