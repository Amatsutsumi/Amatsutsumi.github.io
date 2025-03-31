/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","91acbfaef27a1bf03d25d6b55093c3ac"],["/archives/2024/04/index.html","e57f594aeb3fc78b6a4d4bd2c2c1ea3a"],["/archives/2024/index.html","a5635a3e2aecb48cf907254ab1c4bd86"],["/archives/2025/02/index.html","df71086606fb02d8b2ec3c700fd2aeb8"],["/archives/2025/02/page/2/index.html","f8046edec2090186e5cd31f410f879f8"],["/archives/2025/02/page/3/index.html","a14a0015c41c3eb207fafc3ca6ad505f"],["/archives/2025/02/page/4/index.html","f0bc0710ab3e65d27af8fa938b56ba79"],["/archives/2025/02/page/5/index.html","a17813dc28d116eee9e4c6fbf534d078"],["/archives/2025/03/index.html","2a0497a562420a2e0e51fbf3405f9ab5"],["/archives/2025/03/page/2/index.html","e32adfcccf132ffdaa7a8cdd3ebeb60f"],["/archives/2025/03/page/3/index.html","de3b136024191766ddc167ab64c201af"],["/archives/2025/03/page/4/index.html","f1ad74e65631e47302bf3aa4bae6bbc4"],["/archives/2025/03/page/5/index.html","61d6ac6729153d11dec2bcdb4da84d22"],["/archives/2025/03/page/6/index.html","1c367caf79fd34e0cebc2f2374a811b5"],["/archives/2025/index.html","63562c722f956f1c76e00525dedb9200"],["/archives/2025/page/10/index.html","8c6d00c16db1aa40134b4cb0b4e3e6b7"],["/archives/2025/page/11/index.html","e2c319ee499c79aa7b351e2f1f296337"],["/archives/2025/page/2/index.html","f98d64a04ad8364cdece80dc891e8542"],["/archives/2025/page/3/index.html","87b637b3593a9cb71a1d75f8380e0afd"],["/archives/2025/page/4/index.html","4bb43359e7f3ee98006722e6122bcb8d"],["/archives/2025/page/5/index.html","7486fe2f562b8dcdddb37726da4f43e6"],["/archives/2025/page/6/index.html","b31ccb6c4e592430d303db27192f0e37"],["/archives/2025/page/7/index.html","e3982a017818a707a5eb2aa2509dc22a"],["/archives/2025/page/8/index.html","be4552dd5d4deddafb8548aded587765"],["/archives/2025/page/9/index.html","8fdde0c2b4f2ed7350a0fd44064f6558"],["/archives/2026/02/index.html","79937ada80cd280d32b0b36fdf6355b4"],["/archives/2026/index.html","7da3ca73b4b7d6efde41a485337f6ef4"],["/archives/2925/01/index.html","07bc4d0d1117cfdaf6cfa58235e90b1b"],["/archives/2925/index.html","75ebf9300b35e9e0f46ab662f78f9a4e"],["/archives/index.html","118eaaf0f219845a50b51fc254acb5de"],["/archives/page/10/index.html","02f3c381c6a8eda3503f85ddf708143e"],["/archives/page/11/index.html","940bc48a32f9ac3d86a7cae6124882f9"],["/archives/page/2/index.html","cfad878644df7bf95d7128767c09b8cd"],["/archives/page/3/index.html","288ae7470d0f2899b09361ad94c57858"],["/archives/page/4/index.html","49f69caadcffae021f6814eb8a8ae3a6"],["/archives/page/5/index.html","d0f7e29ee515d64a229cc5a6cb20928d"],["/archives/page/6/index.html","a830ec5f30e9729b85c956fdea75d3f3"],["/archives/page/7/index.html","3b5e9531fbcbece23239883542c2aab0"],["/archives/page/8/index.html","982b00fcdc5f9f0cb2c9433e29cc56c6"],["/archives/page/9/index.html","b8421ca18ad39feb041111338ba6d6c6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","27f473c585e721d75cf18f116ca88de8"],["/categories/galgame/page/2/index.html","bc273511c45f8f107294df7b47e53be2"],["/categories/公告/index.html","e20f4a19f4be9d7a294d328253195152"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","b9471e33f14c34eb310665d9fff9595b"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","4619cb17426f6986fca27206db69557b"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","902ce7e8f041680181220ecafe461c03"],["/page/10/index.html","58c2cdb9ae92b8cc5c571c9a48146825"],["/page/11/index.html","b93e543d7410e57533f659d6fbf0b39c"],["/page/2/index.html","b9a199607f11f418a525d958e29f5550"],["/page/3/index.html","0c8fd0cbdaef5c6a0e102c916caf6fd4"],["/page/4/index.html","98d19c74d2b879148963dcd6890e22d0"],["/page/5/index.html","4f9a19411446b02bc3aa65c990667c57"],["/page/6/index.html","919f5d61c88e9229c7924c9f2170b452"],["/page/7/index.html","9a22cad52d4cc903b3ae81d34ff06d5c"],["/page/8/index.html","c075c3e1cc7bb8c785ec99ad2de9aeda"],["/page/9/index.html","adef48ace1d40179bfd6acf1e4fc616e"],["/posts/10c9dd98.html","7eb45d462b85f8fcc1c58d5c73482ebc"],["/posts/1295b569.html","0c1dacfbb5c75928725952df7fe9860e"],["/posts/1370342.html","0d5a8c902d1cb17484d852a1c2564f4e"],["/posts/15ef14c2.html","d382d8603659b11713a1e758559f6040"],["/posts/15f3959d.html","f38d9fd253ed4aab67d4156157ed16cf"],["/posts/18ab785d.html","72d8b4849ed81594a3297df21c8db6b9"],["/posts/1d59b71f.html","f4320cf33a7952cb41f2f6a77b7f19ee"],["/posts/20b3f3a4.html","40be4258c883a963cd37b4e2859868f3"],["/posts/245f1c7d.html","431a14431272e9adce7fbb8c98529253"],["/posts/252658f.html","297c02ca24baccaf461bfd75badc02cc"],["/posts/28397adc.html","4ec6b2b3233eaeaa7a4d9d2df9f2a7fa"],["/posts/2b38bce0.html","9a04e836c3c3612f3d7fbb92f0b21893"],["/posts/2c0a6836.html","a2aa985996c171dd25b0a81d45614103"],["/posts/2cf620f0.html","653e6d295b415a674f91b1751dde319c"],["/posts/2e30fd6d.html","759c90cbf043347cf6513fd1753b05fb"],["/posts/34292736.html","f46207fd915e3987e8240d8ce3a0acd3"],["/posts/3468cbe.html","99b99471388d053ad4ae5cbd02718cfd"],["/posts/39176dc0.html","dee656bae04db8d51fe7388af21da549"],["/posts/3e118dbf.html","cfcbc974074c91de0480a24cf0a4dfd2"],["/posts/3f7d823a.html","dac44ee0ecbeebf0cf27ca0123b718aa"],["/posts/3f978819.html","f1981fe052772a6de7660138de0fa1fd"],["/posts/43945723.html","750b80f069435bfb84f278d6eb76abc2"],["/posts/44124a6b.html","7d180bb66c3b65d6b726d98fc3f013f7"],["/posts/47abb61d.html","cfb29eec3cf61e4b3241299dc3795b9f"],["/posts/4b689be3.html","da381f087a8b7f6a6bb85c237007bf1e"],["/posts/4cf8423f.html","2e331bb07c6d831dbd5d134359480cb2"],["/posts/4dcf85c.html","811737c97a9d1145f3987fbc8b2873c3"],["/posts/500cd322.html","2cc531d63fcf4aace447470d7a4ab261"],["/posts/51c9b1ff.html","0efc0165ff81612a3eaca7f44a0fba65"],["/posts/52b5b3c6.html","04c57f22115864fe68ebf5cdbb8d0345"],["/posts/5f6e0c59.html","e1654942d92814f2e3c14276cc1ef1c2"],["/posts/61a63a84.html","574617b8005ae9a59f93d4ca3d94b11d"],["/posts/625ab7bf.html","276cbd1b1cc2c81af242e2c3db288b0d"],["/posts/6336a2f9.html","617642792d789d5de6ccf57fc990e8fc"],["/posts/6432d61a.html","5f154b1a513db6dfc9f0f276dbeb2c8f"],["/posts/6515f032.html","92ab1a90111633f1a5fc220744f5f944"],["/posts/6720ccdd.html","0ad6022cb9a63422f5bfccf269b6c393"],["/posts/6a4b5ac8.html","647b516cd01308063fd464e973fc850b"],["/posts/6aa4177c.html","dbb8993b32b5c7243c80a96dc91bc265"],["/posts/6b15f81f.html","ab7cd7e2d2ee1454abed5685dad04370"],["/posts/71131d34.html","54df7475ebc7c3ce55b25a5570ac9b4c"],["/posts/78a8a8d3.html","435b79353665735bea948233b63f34db"],["/posts/7a5ef3d0.html","51e46cf4c4202515bf2137c197d52836"],["/posts/7b41e1ac.html","7353bfc9f94f3a15763674b20f98f14a"],["/posts/7b51011d.html","c5ed7bb12c33992cc2515a6d148215d6"],["/posts/7e3aa3e2.html","e7eb16aff0fd8164ee46c806fe910f41"],["/posts/80fe2691.html","891da86b86049985d606256de6850f63"],["/posts/81ac52e9.html","7e044d5d1e8181457e34b0376cba0bcd"],["/posts/8486f6f9.html","3c75844686273e7db59650d605b283ab"],["/posts/849b40f8.html","15c787c58a1ac3ec82d84c208e3960da"],["/posts/85c51d68.html","d3155240aa227466e4e86b4963b00104"],["/posts/886f8d3.html","29d8b8fd439737919b8a49431a365f3f"],["/posts/8a7cba10.html","da44f974b7b4478c7087b3dda1a5465b"],["/posts/8ac11b41.html","41deeb5a0a6a131564d0b1f8f92c47a7"],["/posts/8dd520d9.html","6b043b220640f73fa49f36d32aead183"],["/posts/8f555654.html","a2a3f87930b25b6ad8e12b189da9f446"],["/posts/92a980c2.html","8da93945869ad57473c3fdc83f8ef41b"],["/posts/92ce16.html","d0ad3a1164ae6a3c98b58f37dc687a8a"],["/posts/93e9943b.html","3f5a618e61b8151da137ede8d390e9d1"],["/posts/94d3c794.html","3b247a87d55bb92484e9c8864569f3fa"],["/posts/97f50eea.html","3f87a6652843acd7e24ea1f36dac695d"],["/posts/97fca8be.html","9ab744b58433f619d9590772eb001e2e"],["/posts/98662d05.html","551d6f0fd43140b689877a1cf6b08c16"],["/posts/9a2f6162.html","f90c624843cd900dd0a373a3f03563d0"],["/posts/9b22a48d.html","f7a6f71129de5b441bb7ec68d54a0e7d"],["/posts/9cb455b1.html","9b1240e2638bf5a371453c3da7ad0b51"],["/posts/9ecdeecc.html","38b91317ba213c615a2b8bb15aa2721f"],["/posts/9efd7701.html","cf6a213ae976a3bb80626c885023dfd8"],["/posts/9f61c1a0.html","2749fb7052b7a4081e5fd529e8cdf196"],["/posts/a1de710.html","2aedbd9128c431bc6784936da3ffb366"],["/posts/a30eb0cd.html","57b72bafdbc669c2e0dc2f3802d468a3"],["/posts/af1807ef.html","d07f985cd76c1d5eb7073cee1fe615c2"],["/posts/b497b647.html","95e24b53432928e695d76d6a3782bcfa"],["/posts/b4d464b0.html","ac5d62ae080614aa20e884d4b2497941"],["/posts/b5fb773f.html","3c6ebb3c37849647ea605d915c5bf3d1"],["/posts/b8d46b32.html","867570ccec51142edbc3cb103ba04773"],["/posts/c1b2c6c9.html","32dde2478d468ddd361aa095f55f8467"],["/posts/c2111cbf.html","4f7bb534152f472ee71a7ae48a23d871"],["/posts/c316c2e8.html","b353f2450f557b05bc58c4b081f01f89"],["/posts/c43e60b5.html","946e9bb224582b00b9f2149570dfb114"],["/posts/c497a412.html","255ed5a9a9e796fa4aeac0d02b4715d6"],["/posts/c5de299a.html","1794845f1c4ba02fb55b3ec88cf05a3a"],["/posts/c70bba9c.html","ae0c25ad2606edc3eb34b19d8e35e783"],["/posts/c797535e.html","c32a113b4ba29f1d32123e2b475cc899"],["/posts/c7a62c79.html","6a507d493d091bf10584fc601c49ec66"],["/posts/cae2c959.html","4198f32434c9649d59b46fa1586ddcce"],["/posts/cbebef2b.html","d92d79069e3d4a10b8dad6a62173bca1"],["/posts/ce25023e.html","52c44d1f37b4e04aeeff9d8a847f7275"],["/posts/d2fd4837.html","f178a2627eea6003caa5abe96c3b9069"],["/posts/d3233cbb.html","d00e7aacdf3c74c41966609a0fd16ffc"],["/posts/d3a745a8.html","4d5dd55f0691f35c1199416a7d59560d"],["/posts/dc815d5.html","4d5086a7239d4092dbb80d43a6420b56"],["/posts/e3ab6ad8.html","fe28250baf06df71f4628bc37f5f09d4"],["/posts/e5018da6.html","682b0fcb90731d7bd458178a4e5cb316"],["/posts/e5963272.html","7e3b76e84503baa316e53c65fe275d73"],["/posts/e624b065.html","d7aca6eb9081821e061dc214f7a85351"],["/posts/e7c703bb.html","592f86854670bd2b4819a227119e60d1"],["/posts/e8f14b6c.html","f495349d69331ce14114048ccd5d597e"],["/posts/e91abb63.html","ba786ff580f73fe4b831428ffaaecbbd"],["/posts/ea9a8808.html","661f467c13e3fcb4c6556cce8c97de24"],["/posts/ebaf2232.html","8432d966f649fd6c93d3dab2f973b167"],["/posts/ee1ed673.html","414272238c22b2c8b4d8b385d7b9bdc1"],["/posts/f0c3ed61.html","e262aba4f4c0ed28dbf9e868f82816cf"],["/posts/f21e7f84.html","af1022a54f8006ef5e491b43b053c917"],["/posts/f230b0fd.html","c9790c37cb80637240b99b539c25999b"],["/posts/fc04d0d4.html","50ffe9c39edbb6b9b01e7b3991bece4f"],["/sumire/index.html","014cda7b595ec2c9f1927cf7b67f472a"],["/sw-register.js","02973eec94e60dc2cdd418b2dbfe8097"],["/tags/APPLE-project/index.html","89670219263ffc8e9f9ce152bc2fed69"],["/tags/BELL-DA/index.html","ab1565e2bac783a8893e402eb82ebdda"],["/tags/BL-Game/index.html","7e635e7001ab4d4971a02fddef85edcf"],["/tags/Blue-Dahlia-Digital-Creators/index.html","b2e3af01015259189547702ecf0d515c"],["/tags/CHUNSOFT/index.html","6f38f256540c8f0b41ffff6145e8c933"],["/tags/Cherry-Pie/index.html","0a350c9baf3ae78a1fa34d12afb79fca"],["/tags/Circle-Mebius/index.html","a563d106f3162ba0d5b9c4af08c0f2ab"],["/tags/CresCENT-BLANK/index.html","20887097bdcaababc8f98d00d5d377b1"],["/tags/Dopamine-Software/index.html","d9ae666f324222ff65ffb3eef7693813"],["/tags/Dos/index.html","eb97181d9896d8f98ef870b74ddda8ce"],["/tags/Earth-Well/index.html","5db421e7e6b11c6337dd6f3bacfed78a"],["/tags/Kanon/index.html","0e2f57497d45f5dc768b7c5da15665cb"],["/tags/MANATSU-8/index.html","8821ac0954c692d90874bc29b85c1f32"],["/tags/MIO/index.html","f91d85ad25874455a1605b30cfdf20ad"],["/tags/Nmyu/index.html","dac91b5c26379794352f05697f2f2ce2"],["/tags/O-S-I/index.html","be9fb0ed78836aaa588579a1da60abb0"],["/tags/Omegaの視界/index.html","ef59103c91cdf2c89efcf75565a63b65"],["/tags/PC88/index.html","fafddf9071e96a14750d2aafee0a1b7b"],["/tags/PC98/index.html","ee44d3dd4791252b3f6c9159f23104d4"],["/tags/Perpetual-Room/index.html","e6a149d2dc13e3d4275b404bf008d98f"],["/tags/Pleiades-Company/index.html","2f063afd5030b3f9c4ded52b7fcb7b47"],["/tags/Project-Twintail/index.html","820b6972db8ded2141cbd36bcb4afb6b"],["/tags/Reverv/index.html","c7c7a6b2238f7c8cb640d289067f037a"],["/tags/Saihate-SOFT/index.html","c160c495fb1ccf4485934f54e976e453"],["/tags/Sky-On-R-imaginAtion/index.html","63576ad1929073bfe23233073556972f"],["/tags/StrayMoon/index.html","e5360f021b00b0fc89e2e5e6c6e14d88"],["/tags/Studio-Bu-Sa/index.html","5c1816ad7970584f1a7791b871a95e3d"],["/tags/ToHeart/index.html","41390204d9dd9461870ae9845d3e672d"],["/tags/Traumend/index.html","589749a93efa2a33ec057f8be21e75e5"],["/tags/Witch/index.html","f0caf21bd01f5181c56a370ca5946361"],["/tags/adonis-project/index.html","62b16868f9d153937d0aabd6acce6c5d"],["/tags/flash/index.html","6347cb143331e1dafc7c01ced1ca20bd"],["/tags/galgame/index.html","b7ccd9222f50d06d5e97b277c6ce09a8"],["/tags/galgame/page/2/index.html","1f39ac92553f2e01cbd700e447ce38d2"],["/tags/gal资源/index.html","109837ba9622d4ee68fefdd3a8fe218b"],["/tags/gal资源/page/2/index.html","2543ec18a4e9331590ffeb0d4c2dd7bc"],["/tags/gal资源/page/3/index.html","98d5c9750fa25a1f3b1eca8520c5677c"],["/tags/index.html","72b547650b3b8236a5536655032ee076"],["/tags/rkr/index.html","452f66ac2f02f943ef5617b4c64f2790"],["/tags/team-eye-mask/index.html","0f5ddfef27b478563c2f16d0b37085ca"],["/tags/ありすくろいつ/index.html","e4a4c2f08fdf4040e9dee822f2636b53"],["/tags/いつものところ/index.html","ec45c483ba8b843916be50bd35603c61"],["/tags/きつねみみ饅頭/index.html","fe277b37512c86e7e7db9bdc03467389"],["/tags/ねこねこソフト/index.html","cbfa3c194236c60b82ff9105272cedf6"],["/tags/ねこバナナ/index.html","2faa92063ece8fb390a64a37f407cb9d"],["/tags/はちみつくまさん/index.html","760f8d898c86783f033431be1841356d"],["/tags/ろりちせ/index.html","6df372b0cc0517a3541b0e02f42a93b3"],["/tags/アイル【チーム・TATU】/index.html","5dd9ebe65be1d15f2e193d4aa1597e18"],["/tags/アークシステムワークス/index.html","42b0dfb77129dbf07a6f53eaeab93e10"],["/tags/ブロッコリー/index.html","711ba88b623b2df2951d1db01aeaa804"],["/tags/乙女/index.html","4d695b6e137115a598b89422ce62ae81"],["/tags/停产/index.html","31022c81a907b8fa88ad221ded993280"],["/tags/公告/index.html","36162d6b2760c39a62c21d5bdfd7529d"],["/tags/同人/index.html","ddce3cd670b14ba66274fe94f5198cd5"],["/tags/堀井雄二/index.html","4c7a1f4d22eb2d0c3b3cd0654468ef67"],["/tags/外海なおき/index.html","276b357f2440e46a09a5bf830c0b8c2d"],["/tags/機械式少女/index.html","d348d60f2abf97a645a22859c45b2981"],["/tags/水仙/index.html","b4f0ca37c7220ce01165cec4ce9e0361"],["/tags/汉化/index.html","09764fa10ceecccaf46b444481c514ea"],["/tags/片冈智/index.html","b85f98bd8dc2358eabb691e344cb0587"],["/tags/片岡とも/index.html","b1b4186f1ae663b20f1319a0182e7dbc"],["/tags/牙の刻印制作委員会/index.html","547c043f067421867548c12cdb8b8424"],["/tags/牛カルビ定食-FLAT/index.html","9ca2926bc7b56fe53c87d8b4751a1b6e"],["/tags/牧尾屋/index.html","46c77a3ef064a0a730619dea65a43a10"],["/tags/猫猫社/index.html","85ec701156ea847e488cfd029b5c54b1"],["/tags/王宮魔法劇団/index.html","27260ec930249fb8376379c00df0e8a9"],["/tags/画集/index.html","2d4a613602e2410ec63025d4318ef4e0"],["/tags/索引/index.html","7661ee50045f1772bfe1ce662f0f9d6b"],["/tags/自购/index.html","3a3f5b357314535d302e46383a6f3a11"],["/tags/郷愁花屋/index.html","6bf48a6b0569c97c0748d0fc315d6968"],["/tags/閂夜明/index.html","9db1611252325bc4e61f23c32ae3c812"],["/tags/音乐美/index.html","b9f1a0e80f25f4c22c28b41fb1529dd4"],["/tags/黒†救/index.html","a6ce71bf1d8448320203f54fa851e484"]];
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
