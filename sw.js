/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","5f6920843f169d937107196f00915b86"],["/archives/2024/04/index.html","e81c1175d9450acfd9f74cc81e853f3a"],["/archives/2024/index.html","0f82a3bb2eb5f272fd3531a47dd5a34e"],["/archives/2025/02/index.html","beb8bbc96a8a2d66e8d64f3459667552"],["/archives/2025/02/page/2/index.html","3406104796da65433c6df779ed801def"],["/archives/2025/02/page/3/index.html","2d22768e5cab4dab600da42cdb187103"],["/archives/2025/02/page/4/index.html","1cb3d8c594a96af5ceb4bac39912bbd9"],["/archives/2025/02/page/5/index.html","c80492a4e48a8304fbc33409c7b0e3ff"],["/archives/2025/03/index.html","5d3dec242bb15c051ecc22c202917205"],["/archives/2025/03/page/2/index.html","892b19785154faca3a65a6435343047b"],["/archives/2025/03/page/3/index.html","3318c4975a054317d02e241b10743b1d"],["/archives/2025/03/page/4/index.html","adb8f2de925bccb18de06ca12e5fc1aa"],["/archives/2025/03/page/5/index.html","739ba5a6c279d23c3070c1e9d45a432f"],["/archives/2025/03/page/6/index.html","1cdfb33a989951f72722acb11e6985c2"],["/archives/2025/index.html","2afa0c474ee25acbfbc24740fbed6974"],["/archives/2025/page/10/index.html","399b5af14c30c1e2efdd6cdba65a24b4"],["/archives/2025/page/11/index.html","c4ede6f7b64ecec813f40fb7f3a819b3"],["/archives/2025/page/2/index.html","0c2262a504ebf35e79dc153e8af22bd9"],["/archives/2025/page/3/index.html","b6c7bdbaf9258273d9c6889dd8fba8c2"],["/archives/2025/page/4/index.html","9ed0e2eee2ca12f206441b4d70e25800"],["/archives/2025/page/5/index.html","9897eac6825b429ca60f42d480f0587d"],["/archives/2025/page/6/index.html","eafcf637506ae1e3d379a80e7cb3cb05"],["/archives/2025/page/7/index.html","6b339e48a2464118a616be50e8da3dd0"],["/archives/2025/page/8/index.html","a2b7e48a86118a10dbd406adc0dde729"],["/archives/2025/page/9/index.html","e5896a6aab771529ac92536caef361cd"],["/archives/2026/02/index.html","87570cde1c387b364893d9c8fe84043d"],["/archives/2026/index.html","509cfe6708049fbbafb51c6bc3d96ad1"],["/archives/2925/01/index.html","7794249b83271d19b3951a85d6da8243"],["/archives/2925/index.html","46e15b7d1dfb667a68704bb0f75d294a"],["/archives/index.html","7ff8b58261a8fcd958a48b308038a5cf"],["/archives/page/10/index.html","704bb583f035b25bbd1be3284f77fc77"],["/archives/page/11/index.html","6125cd003f80e91076b332b54ec201ee"],["/archives/page/2/index.html","64aa0fa0906492b00a4ff993a2138a55"],["/archives/page/3/index.html","c7476578e3cb0288ba82a2cefc115c65"],["/archives/page/4/index.html","74a6f9513e54924f4cfedf86f0f3db9b"],["/archives/page/5/index.html","d2fb34ae7290f3251e91c3ea2766dcc7"],["/archives/page/6/index.html","4564ce33667eb276541c43aa274c0272"],["/archives/page/7/index.html","52c6bd648cdeb060402d9077d09568fc"],["/archives/page/8/index.html","82a9f33ad4514afd30a2d515458cd92a"],["/archives/page/9/index.html","d1057d8e90d8469cb2a7ae2bead2c1fc"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","4a4d7493787e47c688a8b36366f93885"],["/categories/galgame/page/2/index.html","32e884d8d0adcf56887837f43bd9f4b3"],["/categories/公告/index.html","c63f4ee3d73b68273a4c34813f851c96"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","f08995ee3fb5536da491956b438130e7"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","d48885ae9ebfcfd2714da8cc2fce6c90"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","d60fd1c9ac4a24bab2a05e513e870460"],["/page/10/index.html","05185663ba14ceb1d4bf5c36b2d8f320"],["/page/11/index.html","1774a73013433077425f5263976bd0c3"],["/page/2/index.html","543b92511732d17e0ec4b90659bcb348"],["/page/3/index.html","634c4956b7776f7e5c3e302819a3d0ec"],["/page/4/index.html","b90a2457d5b53370b0da7cc78a3a1c80"],["/page/5/index.html","d16625ea3a43460b7a5ac05136a3af7d"],["/page/6/index.html","25ca4a419be341c2a5bcac331de30b55"],["/page/7/index.html","19ca41270271729f88e74142cea0dbbd"],["/page/8/index.html","f678d2ec4441df5d2f0826ad68fa9bd2"],["/page/9/index.html","7c92bc68bf282d18c5b3dc8e282beb4d"],["/posts/10c9dd98.html","930ee35b70e705f3cba468ce51c6254e"],["/posts/1295b569.html","dd4eb7cffb9aaf9394de7d79b700d988"],["/posts/1370342.html","fda3d69f78c6b56849f62c5764c2a3f6"],["/posts/15ef14c2.html","5f05f2f51d6bd38699f9e4a1c043af3e"],["/posts/15f3959d.html","994338b0b076cfad29f9a3c790b91485"],["/posts/18ab785d.html","94f1ceeda3ee3c7c96e938f2068f3231"],["/posts/1d59b71f.html","82a45a12d056229a79385e50bdd4a085"],["/posts/20b3f3a4.html","7503b020f7d7831fd983ec545cfe65b9"],["/posts/245f1c7d.html","0a83621f390afe0a9f90c1f2ff7966a0"],["/posts/252658f.html","c3bc08ad9b90f2affb21ac63650a21dd"],["/posts/28397adc.html","c7ec52135eb8b4e4c295f1aa3225f8f9"],["/posts/2b38bce0.html","c6b9c47fb74aa071e69fd6b70b1f13d2"],["/posts/2c0a6836.html","131bfcd3fb6779d02758e39072e10611"],["/posts/2cf620f0.html","109a37d28c970f21152e66d30dec9cdf"],["/posts/2e30fd6d.html","b8562622b33a92fea2779e30009b1eaf"],["/posts/34292736.html","c18df876d5c7e63a55665d98eaeb5e82"],["/posts/3468cbe.html","fca68ebe59cbd27dd9819f65baca6ee8"],["/posts/39176dc0.html","91834744feb31e8a7855ce4ca138d001"],["/posts/3e118dbf.html","567664a3a91cb08ba342d7c4b90977a5"],["/posts/3f7d823a.html","23ce94d283ce4a6b39607f55e8b37008"],["/posts/3f978819.html","5b6e9bf2dd42e1bd5594bd6dd73d80aa"],["/posts/43945723.html","8fbc5083b3d41179a7742f42305de738"],["/posts/44124a6b.html","be46cd9db2d389acf52426bc51dc64d9"],["/posts/47abb61d.html","aa549e1b90b5a01566c8d397d86e8334"],["/posts/4b689be3.html","71986a0976306124e6235e8a3c6ecbb7"],["/posts/4cf8423f.html","9cacbd162bec275b9eadcaeb32d65725"],["/posts/4dcf85c.html","e52df400120112ce07e33e413bb20df6"],["/posts/500cd322.html","01c4aa2d7444fbf5e5a1e5926ecd0822"],["/posts/51c9b1ff.html","f98558d2c1d5b20f6e0983eccda19b67"],["/posts/52b5b3c6.html","bba1880a190ccf7ba5daa66ffbad1e44"],["/posts/5f6e0c59.html","be9dba0c2f6d2f5f8f71d7923f38ab81"],["/posts/61a63a84.html","2357e4727c26c1e864d2a2a297794e98"],["/posts/625ab7bf.html","d3c54ed093149615e60f16681e9cfcb2"],["/posts/6336a2f9.html","c618912a0d5a8cd8ffd1f9f45233f30d"],["/posts/6432d61a.html","aa350951118eed24f28174d8bd6528b6"],["/posts/6515f032.html","966ed963d575ab15c0d4cb3fac2fd8cc"],["/posts/6720ccdd.html","6dd80bf1554fbd22a346ea82ebdb047b"],["/posts/6a4b5ac8.html","3b65dae53f3d2d46ecf6aca852c63a47"],["/posts/6aa4177c.html","c2bb88ddd6d038161f94fa5b35a019a7"],["/posts/6b15f81f.html","75a501c9262fedd682b558ea87dbcc91"],["/posts/71131d34.html","3a76f2daaaa0c9f33bbb1fbbf994dc26"],["/posts/78a8a8d3.html","def3a69e645ed3272ab191c54c3170c3"],["/posts/7a5ef3d0.html","b7187c6b564992ade6490997a63dd621"],["/posts/7b41e1ac.html","b44960e0e8799a5d130581401fecd6c3"],["/posts/7b51011d.html","96175878c61d7e651d20e4dd2789765e"],["/posts/7e3aa3e2.html","a1d5f4d252382c4bc839527ed956558f"],["/posts/80fe2691.html","443beabee110f7340e2b3b23d7bdf1f8"],["/posts/81ac52e9.html","651cd7c62482cad8f136d8fe54a5c9ce"],["/posts/8486f6f9.html","4be626d17eaf4c153d61bc7ee1fdfb66"],["/posts/849b40f8.html","c2defb15c0d88802ba5e8eacefcc0485"],["/posts/85c51d68.html","882b312ceea7f252b40599ed4d76c9ca"],["/posts/886f8d3.html","f86feb962236959b18ce4d66f1249356"],["/posts/8a7cba10.html","6ebe87378c949b8fa5198ca1cc7a5093"],["/posts/8ac11b41.html","6c02861c0599bbde8d3ebf86788217e9"],["/posts/8dd520d9.html","8641422ca8eee7cd7b90545b4b8d3be6"],["/posts/8f555654.html","1d215f5e14fcdc7c96c61ef76a7b3261"],["/posts/92a980c2.html","672d20443d2c65f84f59baf6b67a2f47"],["/posts/92ce16.html","e6af02bf0890a378a3c55027fbaa047a"],["/posts/93e9943b.html","db5dd15793f106fb01336d341c4c6684"],["/posts/94d3c794.html","dbb12c54d4eb7e068a83c5862add41dc"],["/posts/97f50eea.html","1f7be3384dc9b9528569bc68ff86d099"],["/posts/97fca8be.html","17ee6e9b5fab4ba306c5d29855011240"],["/posts/98662d05.html","8f8be0d69ebf2cfc223709393a91f469"],["/posts/9a2f6162.html","ceeaae6f41d4e4d8dc8fca45aa85154f"],["/posts/9b22a48d.html","324d2c6d770e15d93052966cfc3a7771"],["/posts/9cb455b1.html","33152395f7ce89171eabf88e4df9c0b2"],["/posts/9efd7701.html","b47a69335dcb4968de03fa3f8ffee943"],["/posts/9f61c1a0.html","aba3b439f2217824c9b7292be3170d97"],["/posts/a1de710.html","f1a8ca828ee867e7662a0c8d116d056c"],["/posts/af1807ef.html","f85d066accea7b2f5f48f6adef2af8f6"],["/posts/b497b647.html","c18d817171fe11572882abd33ffa8558"],["/posts/b4d464b0.html","d6f402a6d7e990e52557f60fdcd9622c"],["/posts/b5fb773f.html","fe5b45fc8647734f42ce72b6c6b5a948"],["/posts/b8d46b32.html","69eb78a3247e4d5a7e5893f1331db53d"],["/posts/c1b2c6c9.html","c7ed0ad4f002f29b4e3dd2996d32a995"],["/posts/c2111cbf.html","79528996f23fbcfe82fa31a129b2dffd"],["/posts/c316c2e8.html","2548501a559dfa087f6fa5bdb6fd8f70"],["/posts/c43e60b5.html","d7413916a4c099f9de3c7e55d86f7e66"],["/posts/c497a412.html","4ed1f0bb1789eb11998c097199113e5e"],["/posts/c5de299a.html","b69a6218d1b3bbb27ca83839b6befd54"],["/posts/c70bba9c.html","8db69e932129ba0c7fe81fb2396703ec"],["/posts/c797535e.html","fed8ba3baabc01844e1be672cd96f61a"],["/posts/c7a62c79.html","94220bb705bf7aad2c0d0c7378469494"],["/posts/cae2c959.html","6fc9df8851e51d7fa186ddef8161b08c"],["/posts/cbebef2b.html","e73ad4ce4400f61910c1347f587af9e4"],["/posts/ce25023e.html","6475938c641b7456821ded07c2b74f1b"],["/posts/d2fd4837.html","2b21ad87e4434c936e26fcc065507210"],["/posts/d3233cbb.html","8ea8416f2a552ad1132e44c7718ffbe4"],["/posts/d3a745a8.html","4ac704e426645882df7ab448dd533b32"],["/posts/dc815d5.html","e369f1a50a7b9c2843c662b18c35fa1c"],["/posts/e3ab6ad8.html","899b176ec137ab6abc01cff848e751c8"],["/posts/e5018da6.html","420d0333203ddda6665bc78214845e49"],["/posts/e5963272.html","e41e7298b180ea672b155c1cbb798800"],["/posts/e624b065.html","6609ec5ab98901bf73eaa55e7a2fc3d0"],["/posts/e7c703bb.html","72cd14eca5444c59b93d175f8353a0b5"],["/posts/e8f14b6c.html","d0a354c27b295445bb9460d276f4e74b"],["/posts/e91abb63.html","860aa04ded64d5135801e42e480374ac"],["/posts/ea9a8808.html","fea7acef2e7a3e97357b3cc9794cd2c2"],["/posts/ebaf2232.html","878ed3290e516de8f92cec903abda6e5"],["/posts/ee1ed673.html","3ed0f684cde1c2deb3c46ff1a040c408"],["/posts/f0c3ed61.html","e26e25477bd3301fba9ccad09a63ffca"],["/posts/f21e7f84.html","23a773f7cfa81d63a8e87bede1cce4a7"],["/posts/f230b0fd.html","0cc8b6dd00e744acb9cdb65f858c9d3c"],["/posts/fc04d0d4.html","861fcaf26305b2795755bd6174969608"],["/sumire/index.html","4dd8438c184344129b9aeddca681c058"],["/sw-register.js","cde09693697b693fb692bfd836ad74ef"],["/tags/APPLE-project/index.html","571c964bcc0bb4171c72262baa8bfe7a"],["/tags/BELL-DA/index.html","328cc263da0895b5bc9fe6311306d5da"],["/tags/BL-Game/index.html","74669a8971630d996e570081d065650b"],["/tags/CHUNSOFT/index.html","6e49204894e5babcf3b374697614c17c"],["/tags/Cherry-Pie/index.html","265a35ffcf46dcc08526d61f271ec096"],["/tags/Circle-Mebius/index.html","36ea67daed78a6658fdd513c3dcdf8d9"],["/tags/CresCENT-BLANK/index.html","565f250811d3bbace0739f73e53ac40e"],["/tags/Dopamine-Software/index.html","6e49748be842b00b47cb3d4820297e77"],["/tags/Dos/index.html","bac060f25b665fef68555e907fc4c2f8"],["/tags/Earth-Well/index.html","d687d6805f7ae1f6e847abeeb662c4ee"],["/tags/Kanon/index.html","770f26d0230ad04f4214230b4f1f7739"],["/tags/MANATSU-8/index.html","70bf34e28b06ec30725c67801e204286"],["/tags/MIO/index.html","9f7a1bf15841601b0d7d274d9cb5d13b"],["/tags/Nmyu/index.html","6dab6a90c3ce475699d72d4a5c4d04bf"],["/tags/O-S-I/index.html","faeb1aa54354147c717f30336fc96cd3"],["/tags/Omegaの視界/index.html","3fa8056aa120336c7ad2973b763496ba"],["/tags/PC88/index.html","2bde0478876ba4f9bbf9480dc01cc0ea"],["/tags/PC98/index.html","ef0c4d05ecc29690e03022c7f5fcbb53"],["/tags/Perpetual-Room/index.html","9d38d17253b8acbbbdfa491ae2748ae8"],["/tags/Pleiades-Company/index.html","6ada5bcbb1c7ce71ceb1392cf8c62009"],["/tags/Project-Twintail/index.html","47a95d6f1a7da334bf03b497169638b1"],["/tags/Reverv/index.html","8c5fc759246be0ee517ddb34af3b6fef"],["/tags/Saihate-SOFT/index.html","42f76431b8f22ef3404cf988a518d462"],["/tags/StrayMoon/index.html","9566854914e9a27b94a321ce0ea335fc"],["/tags/Studio-Bu-Sa/index.html","e171664e0c3d91f60cddcf9e8c46b5b0"],["/tags/ToHeart/index.html","5f352bdb59b90fa546bca3bb73512d41"],["/tags/Traumend/index.html","ef96dd4fff8d0c4e59d2ec6af4597e60"],["/tags/Witch/index.html","37681cd88431deedca65e9d13116abb2"],["/tags/adonis-project/index.html","f9310f9d644da31aab1483a274b22f3a"],["/tags/flash/index.html","1a8b000029f4a1cbf554097142233abf"],["/tags/galgame/index.html","9541be45a7faad659f4c7898216bd0b8"],["/tags/galgame/page/2/index.html","434f5ffbee68c58c716971e3d6daf119"],["/tags/gal资源/index.html","e7b11f4719f42b099acf04d8330511af"],["/tags/gal资源/page/2/index.html","943b077371afc5cc8c5bdf479f6af021"],["/tags/gal资源/page/3/index.html","575fb3d74ab5b3150fe5552820944e1e"],["/tags/index.html","cb946869a2de91ed4178403551c6b36f"],["/tags/rkr/index.html","0ea1d001e499b4e0357350f1f74bad3c"],["/tags/team-eye-mask/index.html","e83728d8d39541986c9f1c839370dfdf"],["/tags/ありすくろいつ/index.html","68d2e8c436d150766c63f6c053d2e1a0"],["/tags/いつものところ/index.html","aadf50d7a802227689dc272fe1945a91"],["/tags/きつねみみ饅頭/index.html","7d053f03854e1be51535c63bb8c8a697"],["/tags/ねこねこソフト/index.html","b6f4cd51b60b1c64e393ca9b4a2325ed"],["/tags/ねこバナナ/index.html","1e6e6768d446063c5fdf5eb0ce24fa66"],["/tags/はちみつくまさん/index.html","919eef89ed3b1814b4f1cec043607fa6"],["/tags/ろりちせ/index.html","c5dd0525892c1f901fcfc58eda3613ee"],["/tags/アイル【チーム・TATU】/index.html","aa014660e4849ec4505f5b9ac5785422"],["/tags/アークシステムワークス/index.html","7c1e3d21794163619555d07d2953f07b"],["/tags/ブロッコリー/index.html","c8d29c07375414e8cdf27a302d46fd68"],["/tags/乙女/index.html","34e900e836669fe6be28bf1b07a712a8"],["/tags/停产/index.html","c42c742f967285a845a6c5a3a96a0a5c"],["/tags/公告/index.html","53f5c84c2fc18a34b65f7bdb58198257"],["/tags/同人/index.html","9f36c8a9692b814fca08a4ea988fc6fd"],["/tags/堀井雄二/index.html","f40a80f83d48f1d68456c01ca8e116dd"],["/tags/外海なおき/index.html","b2604e7b27fb85928ec361f7b2ff757b"],["/tags/機械式少女/index.html","bd4c6f387a6da907a0a566310777a13e"],["/tags/水仙/index.html","26f9d23398fb9d63fced98b64fa262d5"],["/tags/汉化/index.html","4812b6c9f2ade8a7f5bf8e32b2e0756d"],["/tags/片冈智/index.html","9f710854f3cff66009b54cc65e76c062"],["/tags/片岡とも/index.html","ce3a7757531300a954cf9f94768eb46e"],["/tags/牙の刻印制作委員会/index.html","8dbe7449b6a969fad4de314c58e6decb"],["/tags/牛カルビ定食-FLAT/index.html","2a3cb33d326765f98477c0dd48f896e2"],["/tags/牧尾屋/index.html","db6ff47910a6c72d0e93056e96468b9b"],["/tags/猫猫社/index.html","66fdc589bf6ce0c4c0636146a9a76721"],["/tags/王宮魔法劇団/index.html","992059ee91ef7cdcd4383e7defde88b4"],["/tags/画集/index.html","b730a8a4edf44bd24e8e461e29a9b464"],["/tags/索引/index.html","b3f00ef8cdf8ae7c4c728257d0ba5fb5"],["/tags/自购/index.html","ad8516786f9d8eabba57a5e4fbca2d57"],["/tags/郷愁花屋/index.html","62278a7593709e22f5f6bda302c91893"],["/tags/閂夜明/index.html","83655ec3c75afaf0c2e09712bc3a2e14"],["/tags/音乐美/index.html","ab1540893b5178b8a3f39dcd12674d22"],["/tags/黒†救/index.html","ad1232de2102041bc119fa99956dc4fe"]];
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
