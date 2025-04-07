/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e36723971d2c988a0046e0d2ed6271b6"],["/archives/2024/04/index.html","747799d5f53727ed81ab36e59fe4f5ea"],["/archives/2024/index.html","bc100451cac9f9738c3f82f010d50b05"],["/archives/2025/02/index.html","aebf9e4413aeee3058c5912198296430"],["/archives/2025/02/page/2/index.html","7e9e5fced8b998ef44e71e1296d63060"],["/archives/2025/02/page/3/index.html","b0a3b667432c0ea1976c6733d63d80fc"],["/archives/2025/02/page/4/index.html","b5e5abbccb90319bc2bafa288fdfc631"],["/archives/2025/02/page/5/index.html","1f81b7d4eff04ded7f1caee272056f31"],["/archives/2025/03/index.html","ff6541cfdb6f5b44dbd4e7698390666b"],["/archives/2025/03/page/2/index.html","8a8cb32972b326a9b35445ea2154592a"],["/archives/2025/03/page/3/index.html","ddfd8f94cd5bd80ca1ab823962ad6c88"],["/archives/2025/03/page/4/index.html","a0858fbb4245ba60dee05ee3a698e288"],["/archives/2025/03/page/5/index.html","44037bd158f5f075186b5c3b4bdea761"],["/archives/2025/03/page/6/index.html","1c40d89ffa49cbb297cb9ca84b6444ea"],["/archives/2025/index.html","069618866f568e82076bfccedebe54e2"],["/archives/2025/page/10/index.html","ce9935cb9ad119deca4c29b2e8b86faf"],["/archives/2025/page/11/index.html","b355a400027d346d05ad8a4eddefc169"],["/archives/2025/page/2/index.html","b91ac9d38c21f29dc76f8c38ef4dd008"],["/archives/2025/page/3/index.html","89a0745c2845da7aa6b30196e1c2f127"],["/archives/2025/page/4/index.html","4dc32c1f31e93d3fa8676d66d1caf455"],["/archives/2025/page/5/index.html","485bf2a0c255857acef6576870bf7cb9"],["/archives/2025/page/6/index.html","49d9a198858504b69786404492d59d33"],["/archives/2025/page/7/index.html","439a253cb1acb4b9226c448ed10c5411"],["/archives/2025/page/8/index.html","22f6194fde5e6f8dbe40fdbe28de609d"],["/archives/2025/page/9/index.html","7d8cf51c572832d273dc5ca6da5514bf"],["/archives/2026/02/index.html","d4423681452abc1c61864f2a428279ae"],["/archives/2026/index.html","50c96937a402aede6971ab820f62698c"],["/archives/2925/01/index.html","7a85b487556f7e8ee67d20d6cc84d3e5"],["/archives/2925/index.html","37fdfa7f1d7aa6fb794ca81a886a9b20"],["/archives/index.html","ccd299ed551bb52e055508dc42b0a515"],["/archives/page/10/index.html","a2f2aa338139c358ff0b9037191e9aa4"],["/archives/page/11/index.html","b25d8d2c64532bbac12a621720f1fcf1"],["/archives/page/2/index.html","09d02ab49563b48c9c32cdd858743067"],["/archives/page/3/index.html","60f14ccd411dd8f99874db3092e61965"],["/archives/page/4/index.html","370e3876848f62196fb83185b5c80539"],["/archives/page/5/index.html","b9720bc952f66123174f2ee1bbd8b28e"],["/archives/page/6/index.html","cc64463e76ee3658ac490934fdb2d67e"],["/archives/page/7/index.html","3e07340cad0d06ed10b4790e0f7416ce"],["/archives/page/8/index.html","d1d1a54995a09c2bb695c90430cc930f"],["/archives/page/9/index.html","3823e3a0c3547836ef2b10e0a4c32dc0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","812903bb9179f8b2c777891c538935bc"],["/categories/galgame/page/2/index.html","3d38edf67085211e62f3b6e60e5fe00c"],["/categories/公告/index.html","9aa7c2f7716340d533c7a9e2b37d00c9"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","d44c7e57146ae34260122e13a97d5210"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","d5c1dd9c8334627ad7e52353b56208fe"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","a8b37f2c14ed4cfefe7f6d0739f0f048"],["/page/10/index.html","facf3fdc4a493dd8323ae0838d3edc46"],["/page/11/index.html","041a6cabd87c4bccda487a220bba4229"],["/page/2/index.html","de52e0e38b34e616287d0df36e74566d"],["/page/3/index.html","8daf4929262580eef879e2330e82c6b8"],["/page/4/index.html","4d63366724ca46750a7673f88056b0ff"],["/page/5/index.html","56dd2dfe0b74e90cc0b2f72de7f57c0c"],["/page/6/index.html","b2f78dd8c04d2e2de9a7fb847fa1d8cb"],["/page/7/index.html","16c61da1a211fc1b25959a4903a22766"],["/page/8/index.html","214ca3c19a9dc5aae75481eb1cd740b3"],["/page/9/index.html","d62f4ba23e1c67600365cb1033dfdfd4"],["/posts/10c9dd98.html","8ce53a8d292fbb709063c813e39fec70"],["/posts/1295b569.html","2fd9db30f38b3ba027e4572496e7fb56"],["/posts/1370342.html","4422b5fea4b57561368b5665cd8230fd"],["/posts/15ef14c2.html","ec35c869748380624bf13f2f8717e54b"],["/posts/15f3959d.html","501128ac869d2ad034fca1cce43aae86"],["/posts/18ab785d.html","b19fc57590812aee34729720fcd0e764"],["/posts/1d59b71f.html","b2f68df638b52aed84a2a76d4179de9a"],["/posts/20b3f3a4.html","623ea2b9b5d7c8155ad4b4e8e7ac1ce3"],["/posts/245f1c7d.html","9f955db40a994753c9ed7ab0b9d7639f"],["/posts/252658f.html","fb4471f4ab70cc72ba073e030ed68608"],["/posts/28397adc.html","8dc5a440a02e366e9e9b6d3a53a97948"],["/posts/2b38bce0.html","6a531deac8be4cb6cf56258a4fe73eff"],["/posts/2c0a6836.html","d894dbdeff1966fb1faf94905df4e9f4"],["/posts/2cf620f0.html","16af71c1b03df173e256b8a807eeda4b"],["/posts/2e30fd6d.html","2be4e9bff9d21b7943157190d84508c4"],["/posts/34292736.html","46280ad5101b83cc75d1c2410967463d"],["/posts/3468cbe.html","a99f64cdce836c664dac49f37cfde7f5"],["/posts/39176dc0.html","ca209bd50accf290734e5757990c249f"],["/posts/3e118dbf.html","d3a1d2ec15b733ca5da072bfd4e4893d"],["/posts/3f7d823a.html","1130352d042bb701b1267d8cba391867"],["/posts/3f978819.html","f80ce08dca8918e8a6533caa1ce8ac20"],["/posts/43945723.html","8bd6e785e22b54a10667da965c1871c2"],["/posts/44124a6b.html","d79c55a04674d22fa53833271e414c52"],["/posts/47abb61d.html","37bf045089db448ca17e110f8ef5ee98"],["/posts/4b689be3.html","fa2b331b616f77fb14df2e3365e72f02"],["/posts/4cf8423f.html","4c039c716c1c24778a3f5234ae46e277"],["/posts/4dcf85c.html","c24a56868ff0f18e23193a2fd187936c"],["/posts/500cd322.html","793e64a9f742f7a37ca6bcd867dbe070"],["/posts/51c9b1ff.html","8fafdea8a5e3afe8c620fd2f81024893"],["/posts/52b5b3c6.html","66eb030bc6a11df4b5a516d6a7b4eb4f"],["/posts/5f6e0c59.html","59abcef0ae1af294a4776c6f869b2606"],["/posts/61a63a84.html","b9674d1170d44280abe4b06c936ea9d7"],["/posts/625ab7bf.html","b1adcd31ac50ae61588c8f313217e7db"],["/posts/6336a2f9.html","301beba1a4311b4d3398c4295388f2f0"],["/posts/6432d61a.html","8c4ebcacbbd643d374329d0cd952fc1c"],["/posts/6515f032.html","523266807729916a66487c6c775c59d2"],["/posts/6720ccdd.html","947858fc766c138961f023677fce5329"],["/posts/6a4b5ac8.html","af7bc1223266e317698baa132e609ad2"],["/posts/6aa4177c.html","94fe6e0280abbd61b6aaa749da4284ab"],["/posts/6b15f81f.html","6e410ecb37eae50dfec26ee42cd43d8f"],["/posts/71131d34.html","ede534ea1e370896da0e5cf8a4a9ec57"],["/posts/78a8a8d3.html","7ac70a92c8b05f3c18fc5fb178582cb9"],["/posts/7a5ef3d0.html","b5561b4c125aa67b9bf070ae00d5e2f3"],["/posts/7b41e1ac.html","345fe170fa504778344e79d2357fb8b2"],["/posts/7b51011d.html","1651024c90fe9c2d000323ca101b3e74"],["/posts/7e3aa3e2.html","8175ad9cc77d57cd9a8a9e62cac0baf9"],["/posts/80fe2691.html","cb14b441167d26b67c44e15f3da86bab"],["/posts/81ac52e9.html","c3dab0b847fd5f90199df71fb6b52b7e"],["/posts/8486f6f9.html","44874e018dc3a0f68e5f9f5d18d7514a"],["/posts/849b40f8.html","3077970a5f373d94392e53a0f169350c"],["/posts/85c51d68.html","cfa5ffb02dfed4166e78af62ad0c6c94"],["/posts/886f8d3.html","5b7b8eff01d783577490e4b23c2900b7"],["/posts/8a7cba10.html","8f9c1b0c9bbd884a0bbdf3a790eee4fc"],["/posts/8ac11b41.html","f50c4a279132e098100e9cc4668a7b73"],["/posts/8dd520d9.html","7e2536170b852d9ced44938aed035d41"],["/posts/8f555654.html","b99ca652f7edbdd63e4136176a83d7de"],["/posts/92a980c2.html","0c8e84091e1f807bb2cf1a97df005fea"],["/posts/92ce16.html","83c0beb2882363b0a66445b26bb826f6"],["/posts/93e9943b.html","716b28da38b485f620966e34dc8f3941"],["/posts/94d3c794.html","7fc18654a69f690ece48dc6af59c6465"],["/posts/97f50eea.html","16981d9545e66369ed09e6933be22384"],["/posts/97fca8be.html","bdd8e4e5933256fae2b4fc1c515f670f"],["/posts/98662d05.html","a599a3b0870ef258ca2be8a713998643"],["/posts/9a2f6162.html","a52c87597e995686e87f5eb0b542752a"],["/posts/9b22a48d.html","dbe1f0f08ccc72cecae45263973a8fe2"],["/posts/9cb455b1.html","ab0ad100c9f5d035945b926e2511138c"],["/posts/9ecdeecc.html","cf71786f6dbee16540ace5d23d2442ff"],["/posts/9efd7701.html","68d7e3cbe49cb7d9f92a3cd774f60350"],["/posts/9f61c1a0.html","98f33b2eb64bc718b4ccb4228218e492"],["/posts/a1de710.html","f324e1a80845372fb78244546b453b13"],["/posts/a30eb0cd.html","abe6865f0804d804bab7994f3ff87f6a"],["/posts/af1807ef.html","3e3555938b7d255ddec658292173df98"],["/posts/b497b647.html","59241e6147484b88f892329423717ac0"],["/posts/b4d464b0.html","6c21dd9509460097574b9c5d35aa6222"],["/posts/b5fb773f.html","48e45228dd4ab1500dabdee320d6c48a"],["/posts/b8d46b32.html","561595da772fba3f53404862d358c703"],["/posts/c1b2c6c9.html","eb014b8fb31ae393e3102cec885e611a"],["/posts/c2111cbf.html","e2bec63762009660e899c9554871c8cc"],["/posts/c316c2e8.html","79aa881b213e13f021db5e054b059a6d"],["/posts/c43e60b5.html","bc2599556983a302a5538dd0ca8a4737"],["/posts/c497a412.html","f525551627beaaf006cecb89736f4cd6"],["/posts/c5de299a.html","68b564220a2bdf8759ce08030ac77b8f"],["/posts/c70bba9c.html","2d8a75bc0e243cb59e14807215d01af0"],["/posts/c797535e.html","509113b1914c95a13850736c7858f86b"],["/posts/c7a62c79.html","61d9398e6465fc7794baf3e3d57b815e"],["/posts/cae2c959.html","595e413bd8efef961b20373cc99dc913"],["/posts/cbebef2b.html","ae433f8f906f7a48f4a8ba40756ec4a4"],["/posts/ce25023e.html","eb682410d194508f9944cb25340a5a54"],["/posts/d2fd4837.html","c8c767ea110061f2a26f3da83a0b58d4"],["/posts/d3233cbb.html","3fddb0d9628bec4c4a1feb31adbde2f6"],["/posts/d3a745a8.html","918fae9ef76f86bb800aad3b4ce45d56"],["/posts/dc815d5.html","dbd0e32f530f5addbac634b30fd83f81"],["/posts/e3ab6ad8.html","70383a11378583f4acf01f2509057fc4"],["/posts/e5018da6.html","a760e2baa1193d53b42ee72ed2244b08"],["/posts/e5963272.html","bf0969bedcc1d341d3bfb50e8f21a379"],["/posts/e624b065.html","1f4a51009b22efde2044694f115aadb8"],["/posts/e7c703bb.html","dfca45fab02690f74d5b5ad93ba69c75"],["/posts/e8f14b6c.html","9a065d854da75b09d059298c235010ec"],["/posts/e91abb63.html","913cf050b430a5dc36c850183f8dae6b"],["/posts/ea9a8808.html","aa7ccf57034d7079be2ab912e93c8eb5"],["/posts/ebaf2232.html","fe47eeed89ef23ce0d8906af6886ab38"],["/posts/ee1ed673.html","01d631fca95f4b2865257d7d180ee95e"],["/posts/f0c3ed61.html","f5cf31fc7462cf334bd735dfecfd39f9"],["/posts/f21e7f84.html","3133840a28d24d9f81847891c57b343e"],["/posts/f230b0fd.html","3c5c62f3e7cd378c0fd40ff54ff92073"],["/posts/fc04d0d4.html","ee21ba974a3923cf0aa466ee25bc027e"],["/sumire/index.html","b1f2022036ea1ed137145cbd1dafbad3"],["/sw-register.js","7aea9f7f0b9570ec6c173b20dd65f7e0"],["/tags/APPLE-project/index.html","d79e13898a57dcd86ddc2a4142c6b2bc"],["/tags/BELL-DA/index.html","82e116ea6ddf9be554f223cfe96fe679"],["/tags/BL-Game/index.html","76384cb13e69aedf49b36e718ffdb094"],["/tags/Blue-Dahlia-Digital-Creators/index.html","c2661baf0c25ea5585d3a8f82933721b"],["/tags/CHUNSOFT/index.html","223c2ab7df62c0d8478ad51ed9e144a3"],["/tags/Cherry-Pie/index.html","9043aa668de4b4bcf318ead0a0c045b6"],["/tags/Circle-Mebius/index.html","cbdd3b7197947658500ecb8a5f28ec78"],["/tags/CresCENT-BLANK/index.html","ae5340851ed0c7786ad1447ddb5ca2c1"],["/tags/Dopamine-Software/index.html","836f9ca43fb39ebb9c47afb4a73fc17a"],["/tags/Dos/index.html","c1b6deec4685bba04cbc828273593988"],["/tags/Earth-Well/index.html","c397cd1102d50d4e12e2dacb5eeaaf2f"],["/tags/Kanon/index.html","f811a8f9d9d1a1561386325bb08dc0cb"],["/tags/MANATSU-8/index.html","1c71f95eda4700fd640f2226a978ec57"],["/tags/MIO/index.html","1e4287bff1be2a52bbd655374d6573a8"],["/tags/Nmyu/index.html","ab67ccb6fa2ad7115132b6bf78f200cf"],["/tags/O-S-I/index.html","0596b16401b0b48a4a45f1d1f40ba659"],["/tags/Omegaの視界/index.html","9f9836f6c0024d0dc504fd57bb227296"],["/tags/PC88/index.html","308f0a924654a8474ebec0598cd925dd"],["/tags/PC98/index.html","c7723b9b77f2ca6cfcef4412871a11c7"],["/tags/Perpetual-Room/index.html","19c76a1d733a9e5a5fde0983b1431108"],["/tags/Pleiades-Company/index.html","7eaf36eaa44f2c367197005c4bd8ff6c"],["/tags/Project-Twintail/index.html","846f2928534f7ad8306afe2c8cd4abcc"],["/tags/Reverv/index.html","c4d40bcf4b3a2698c975907f3438702a"],["/tags/Saihate-SOFT/index.html","f766d5d7d369f8fb28d8ff8debf57ce1"],["/tags/Sky-On-R-imaginAtion/index.html","2a6903462881944d2f1a5ec57a079344"],["/tags/StrayMoon/index.html","07661d931341972015a8104338e2eb57"],["/tags/Studio-Bu-Sa/index.html","415eb1ba54be1b0e54770d830b7aafa4"],["/tags/ToHeart/index.html","f28ecbe84118c15551e8fa7b6f536cee"],["/tags/Traumend/index.html","125a4cb0a63ea2bb15df59ccfea04c61"],["/tags/Witch/index.html","6e59270173af349252ec6cc4d01e06c7"],["/tags/adonis-project/index.html","9755afa5feaf6008d400305aa131689d"],["/tags/flash/index.html","4f5dd08b680337924786cbef034ab4e2"],["/tags/galgame/index.html","f96b92dcef98312fc0cf0614bcca8804"],["/tags/galgame/page/2/index.html","cb8d7a998875c81f3d754ab0554feff4"],["/tags/gal资源/index.html","dfc03061698b2747409d0a431bcc129d"],["/tags/gal资源/page/2/index.html","9afe555853b4cadacd87bd0423219cad"],["/tags/gal资源/page/3/index.html","26643dfb784367a2461364ffd22f52ea"],["/tags/index.html","8151e5eb57d5b7c346482bb9f6ac389c"],["/tags/rkr/index.html","2487c85b95190396c80a6e197e4f5a45"],["/tags/team-eye-mask/index.html","a484f9b41939c43a05a9bf4a3cdb7c83"],["/tags/ありすくろいつ/index.html","025910e033a02141548883d3165a6336"],["/tags/いつものところ/index.html","39373eacce51f444a1cf7fb128b2e2da"],["/tags/きつねみみ饅頭/index.html","1363419de5a22487e777be8cde7d4586"],["/tags/ねこねこソフト/index.html","dfa8818cb4084d3d17913221e6303aee"],["/tags/ねこバナナ/index.html","531b1901251bee18ce5b56caf4a5f141"],["/tags/はちみつくまさん/index.html","a9d90ea0e2c19a2a4434dfd1c272550e"],["/tags/ろりちせ/index.html","e405b0b45e2d3e36553e098804e609f8"],["/tags/アイル【チーム・TATU】/index.html","b2cf2335d2c921f68222592a81982086"],["/tags/アークシステムワークス/index.html","90dd175c61288d6b78a0742484b8c4ea"],["/tags/ブロッコリー/index.html","6210cb7047a5e9c69bd29c07c58d42e9"],["/tags/乙女/index.html","8257e582a67b9874c13d80514d15c137"],["/tags/停产/index.html","f3bb49e5ae3c8c730cb7a0ee7a7d7e74"],["/tags/公告/index.html","9655875afd8181f38274d466ae4e6bfb"],["/tags/同人/index.html","8bd6fac38111d0f06c8e94bb1e2bb1a3"],["/tags/堀井雄二/index.html","950cf9467b588a2f26d87d23fc086aa2"],["/tags/外海なおき/index.html","3f7e5d600ea0e7ea1b763f2c95a01a96"],["/tags/機械式少女/index.html","91e068f3890e91ad709bf044108f92dd"],["/tags/水仙/index.html","cdda5abfeb3dade23ade95d17652f525"],["/tags/汉化/index.html","2205b9ec4c5431c3ad2cee2de85eae16"],["/tags/片冈智/index.html","bde845a389c4edf1132741b0f223789b"],["/tags/片岡とも/index.html","54a16cc411cee149b15234b988597a44"],["/tags/牙の刻印制作委員会/index.html","d45ecc956d53ac52ec33a109e5343233"],["/tags/牛カルビ定食-FLAT/index.html","4d005207d8756b2419fa1216020e6132"],["/tags/牧尾屋/index.html","d353eb4201c5b3ffa12c7715e4745e01"],["/tags/猫猫社/index.html","e2798422b9a2900756b7b4da37ed1ea6"],["/tags/王宮魔法劇団/index.html","8a9d28a8a4b6818665a69a17fe382e2d"],["/tags/画集/index.html","f178d1cdaa6f8f0139d45f8a86dcac03"],["/tags/索引/index.html","a789a96251ba2b29cbc7e7dc61097bb9"],["/tags/自购/index.html","8aa206fbbfe72e11cc2825d51868d7d9"],["/tags/郷愁花屋/index.html","1193d58e6ff9666934d2c0f498269bf6"],["/tags/閂夜明/index.html","be0cef8c04b6d43214ec1fe41bed9f9a"],["/tags/音乐美/index.html","c7bb6c1ff8ae10157fb55f23042ed91e"],["/tags/黒†救/index.html","79343a4e15d0076f1a61cae2899137a8"]];
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
