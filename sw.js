/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","959a7534b2599e08e153930ae2c68804"],["/archives/2024/04/index.html","279c08ad85b64677b02ba3d74df490f1"],["/archives/2024/index.html","d3ea9f88b482d14557d375b0e0418b81"],["/archives/2025/02/index.html","46329ba0f5f04ed05df6349b7ee7ec96"],["/archives/2025/02/page/2/index.html","9929d35a4ef51bac4b0e8400401461bb"],["/archives/2025/02/page/3/index.html","ef30e19160c850d3ce77fb6aaa8f068f"],["/archives/2025/02/page/4/index.html","412fab09781c3c52f4c4080621c59f92"],["/archives/2025/02/page/5/index.html","e000e5f5a5434a95036112fed5de1f58"],["/archives/2025/03/index.html","29a6b00ca4d971b719388e6f21a5c527"],["/archives/2025/03/page/2/index.html","060e2b7fcf3017db67e209a6d200aa25"],["/archives/2025/03/page/3/index.html","483411cca789e4567f7d3c7cf2460a27"],["/archives/2025/03/page/4/index.html","6f48eed78e98ea4b25e9ae47a134b5cf"],["/archives/2025/03/page/5/index.html","5c2b6e7600edecf08280884aaa96bd22"],["/archives/2025/03/page/6/index.html","9e142dd9d830aa2f64acf8444c81dcc7"],["/archives/2025/04/index.html","810ccb8a286d4dbcd0f0838d90723b59"],["/archives/2025/index.html","c9cbca60d65aafb8a91a2f0e5e3948d4"],["/archives/2025/page/10/index.html","c8ad588487001f2d787a2045e05ea124"],["/archives/2025/page/11/index.html","a1df6025379da854ecfd47aa14cb39b9"],["/archives/2025/page/12/index.html","f77c6120ab799aacb7b6b0158b7541d3"],["/archives/2025/page/2/index.html","707564f3908201f4ef8e44011e6204af"],["/archives/2025/page/3/index.html","3148c4f1ac23d3df79c5cb42074fd0d5"],["/archives/2025/page/4/index.html","555e29eff9587891a0ebb6fd14f0b35d"],["/archives/2025/page/5/index.html","94d9995650d03dada07674b7dc3d611a"],["/archives/2025/page/6/index.html","266bab6c1d557e41b2a7f1b5df831d82"],["/archives/2025/page/7/index.html","fe0615b3932d5f9eb64144ff1c8ccc7d"],["/archives/2025/page/8/index.html","6ff40c31d9d9be2214e9b4bcc7c3008f"],["/archives/2025/page/9/index.html","fe9bce1b483964f25b39b59cc47ce868"],["/archives/2026/02/index.html","d45125bfa0cc6f6697b314c001ddfcbb"],["/archives/2026/index.html","986c2c9ce8758902807eb18a677cdf53"],["/archives/2825/04/index.html","d6530251069ee77ba5c5af50398a1eda"],["/archives/2825/index.html","094e86dd9153aab6aacac4f044e6ce90"],["/archives/2925/01/index.html","8a9b8548e13030244ad0684662ce0e6b"],["/archives/2925/index.html","b0adb3b14fee435f8b166293c0cd5e5c"],["/archives/index.html","88096fbd6a33568133bec15ba6de3eb8"],["/archives/page/10/index.html","a1d0377dbee0c980a5de08780de7845f"],["/archives/page/11/index.html","cfc21ad0875c3c3ab72506bf25d40a9d"],["/archives/page/12/index.html","1326273c710029807a52f097170bcb51"],["/archives/page/2/index.html","9f8d88cba097acb241e7bb80d9912c72"],["/archives/page/3/index.html","d6094366758263c6edb943ed17c4b03f"],["/archives/page/4/index.html","17e1075ca288e85f4428c9bcef930d1a"],["/archives/page/5/index.html","b9c97449e622d819caf32bd70f16477e"],["/archives/page/6/index.html","689aba114da3fa1dea747126fa570295"],["/archives/page/7/index.html","5be340e12aad65fee320dbe75ea920df"],["/archives/page/8/index.html","350df6624988c9c7698d3be24a1a2729"],["/archives/page/9/index.html","134c3565c2f4fe1496ac9dbf5548c5e9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","a6a7ca392220af205d36d00087a2af63"],["/categories/galgame/page/2/index.html","dabd008b420f350d91753f16017dbc69"],["/categories/公告/index.html","d112a906ac64a9d5349b22ac1410ace6"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","8d65bd8ae14884ff2c76729199c6195d"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","cd9e9ce3d863b9e4ff848ed08fa890ed"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","61c53623d9937f2b77c829d779b5a6ed"],["/page/10/index.html","8b0a6e05c6732af98f82a1320330e790"],["/page/11/index.html","17422d5103654a5464d7b7280237b7a6"],["/page/12/index.html","af40c7b1238557927393fe92e7f2661a"],["/page/2/index.html","1849c525713d1404dddd6e9c525870aa"],["/page/3/index.html","1bad8cc29a8c3bcabfe402ad770e1767"],["/page/4/index.html","b6d25cd7cf88e05d2761ff7b6157ab78"],["/page/5/index.html","9c67961303707c4840cfb8a3668a1395"],["/page/6/index.html","5d48c7efb77c8d9d5c07a558cc67b6dd"],["/page/7/index.html","f74f41e2cfc41f7d6b64cda32550535c"],["/page/8/index.html","8f5cf510fbd5bb4b5dbfbf6cd2476fbd"],["/page/9/index.html","bae73caf7359b439c59d6839367451d4"],["/posts/10c9dd98.html","604462c7a3e7911516500298e2114794"],["/posts/1295b569.html","5f80ab8a103c106c1fcf4ef9c2b1f9c6"],["/posts/1370342.html","e4fdf2d535813aad1f2bf76410d2aee8"],["/posts/15ef14c2.html","f58ea7ecbed9341266d3a74153aeabc9"],["/posts/15f3959d.html","876c6e25b7ab27a4e2d92073ced57378"],["/posts/18ab785d.html","6bf4e62b978d9b4b421acb6f5e9fcf27"],["/posts/1d59b71f.html","8b9412029b2910afbc9d5d611111e8ed"],["/posts/20b3f3a4.html","872e02d78d6fc46c8e7108eb0d1084ce"],["/posts/245f1c7d.html","d55f532ab2689f9493ddb56101787e73"],["/posts/252658f.html","d1e864ba13e6be5143c3a2cbc5c82132"],["/posts/28397adc.html","12597d62538ee84a8f75cbab0fc48ff5"],["/posts/2b38bce0.html","bd5ba31eeba786edb475f2ca2836abb6"],["/posts/2c0a6836.html","7984a0923657f85b282283e0417daabe"],["/posts/2ce39bcc.html","b2b742ed678775d0c12c79ec2ba76902"],["/posts/2cf620f0.html","fbd97e24b406aa117a610f1b0c120d7e"],["/posts/2e30fd6d.html","4571cae8f8697c40569ce4691b04c55b"],["/posts/34292736.html","b572b8db9f69b9208166a82b39fa74a2"],["/posts/3468cbe.html","4a1b0ac644472d809bb4c259d8a6ffaa"],["/posts/39176dc0.html","f6e02bc95b63dc1e30213ac037c67178"],["/posts/3e118dbf.html","b308f8c46266f46825e4cee07afbfd66"],["/posts/3f7d823a.html","2f326cd267bfb9f0c24806aaed32f13e"],["/posts/3f978819.html","036295b28e0cb4952b9a26af4180fe63"],["/posts/43945723.html","13e18ceb77564baeadad5abb4bd1ded9"],["/posts/44124a6b.html","c210d203806e00a2b685ce2a097ca06a"],["/posts/47abb61d.html","17174e7eaa5ccb7e002add9c45b5b8f2"],["/posts/4b689be3.html","6f1c1da6294578daf3eff00791520266"],["/posts/4cf8423f.html","8a1b1360aa1b5b32ed804d0bbf77e322"],["/posts/4dcf85c.html","99dc7b5a3190d16d9e1b13c9ee8a5126"],["/posts/500cd322.html","4c90da8f964d4ac38b948e27826e728a"],["/posts/51c9b1ff.html","a598fc8de00197ebabc22f7a7df86bec"],["/posts/52b5b3c6.html","d9c7f15ff8911b75326cb4cbb1edbfc7"],["/posts/5d8bea92.html","48aac6e68bb7a63e881a38e5dae20cde"],["/posts/5f6e0c59.html","6fe888b1ace042b6d20358971a956165"],["/posts/61a63a84.html","ec2c27802489993b559254a62221d7e4"],["/posts/625ab7bf.html","3ebe944c86b8963b4d636be214dbe286"],["/posts/6336a2f9.html","74284d3683ea9f5233a152424a56bf15"],["/posts/6432d61a.html","2766bf386853f1d70426529e2bbca499"],["/posts/6515f032.html","24bca4d7110b379c75c2e1b70c9348da"],["/posts/6720ccdd.html","6b7d499621d30ed73be037777ecdd3a4"],["/posts/6a4b5ac8.html","522e2ebf38c2d4417c00711c62e0dfe2"],["/posts/6aa4177c.html","c5c1c6e8fb6d1e5f07c288ad1c56f29b"],["/posts/6b15f81f.html","2236532cc4de1c5242e88387775068b1"],["/posts/71131d34.html","6774b6913715b1b936b7369f7406f91b"],["/posts/78a8a8d3.html","db36813925bb0e3cd2ce7a1ce58b6877"],["/posts/7a5ef3d0.html","cca0dfbb8c97c006edb595fb50a34d6a"],["/posts/7b41e1ac.html","115dfc4fa0091ae3c2f6f3480bc8f824"],["/posts/7b51011d.html","3c72c1d2ed5a5ecb674d732521201b33"],["/posts/7e3aa3e2.html","4f554829626038c3aacc9eb1db79404d"],["/posts/80fe2691.html","3fe76a904925ff9841135b0f31d5cdea"],["/posts/81ac52e9.html","0b85e6eff6d5221a8b932587b86e6496"],["/posts/82332d11.html","2090809bd849bbdfe3b0e64a271a9d44"],["/posts/8486f6f9.html","c50c02d63e9c85564d408bbcf0da9075"],["/posts/849b40f8.html","e2a040dfb4e37b9bc68ee768e86175f0"],["/posts/85c51d68.html","b701ea21e5c401bf330e9d01365b0a25"],["/posts/86a6c500.html","1fce858b01bd1fa8aacd114a15cd5803"],["/posts/886f8d3.html","3aa2c1fc43de64c2f5c51cd80fe23d34"],["/posts/8a7cba10.html","11f36005565faff9e3c4c2eed283e2a2"],["/posts/8ac11b41.html","3a8cd4a0aa24103818da314a62cc7790"],["/posts/8dd520d9.html","140ed812acbde9ca2d318d78737837dd"],["/posts/8f555654.html","e14c9faac2430dad8f68341bb1bbcfe2"],["/posts/92a980c2.html","7a8d0fdb347dfb905b4d34479fce6a1a"],["/posts/92ce16.html","316846e94136c0887e664476e3488c8c"],["/posts/93e9943b.html","7287a7c8f94a100c7d51a0baa671e2bd"],["/posts/94d3c794.html","693007c1d5d69a1f40c121a2d56b0337"],["/posts/97f50eea.html","9dd4fc1eb82b593849edc23ab35fa4ac"],["/posts/97fca8be.html","834ca5f923b3c5c8cd1beeaa1f342e99"],["/posts/98662d05.html","e4ce422b6a80734a518f5093376a8021"],["/posts/9a2f6162.html","42607d77fb7065f92daaa01d275b8b62"],["/posts/9b22a48d.html","b9e8d1cc48cd413dcc747c614e04e686"],["/posts/9cb455b1.html","94f81d254eca41ff3b3842af9ac5bf90"],["/posts/9ecdeecc.html","9a733bf2c7451217c1add183f149a5a3"],["/posts/9efd7701.html","29c19858503f8054f572db172c79041a"],["/posts/9f61c1a0.html","4944d3df59fede88e04b9c91bb32bdb1"],["/posts/a1de710.html","106a3a2b842c80a5e4f501b26d6eba66"],["/posts/a30eb0cd.html","3a05f193e82db11ec902bdebcf8333b1"],["/posts/ada3f440.html","ef2ae0d76ab7799e41a439d6257eff7c"],["/posts/af1807ef.html","e6f1e0ab74cd3ed62589bf514559367f"],["/posts/b497b647.html","dab5c9b85ebcfedc579d3bd0fe28066a"],["/posts/b4d464b0.html","04aed87a2db1898202bee46394f33234"],["/posts/b5fb773f.html","78baa35a39966c60fd5191d90806e4d5"],["/posts/b8d46b32.html","e6e2cb22a0ad7e17c99e7bbea1c455f2"],["/posts/c1b2c6c9.html","069372775247782ce7742b2568547793"],["/posts/c2111cbf.html","4b8e027704ad73c2420d7c6bbba9cb06"],["/posts/c316c2e8.html","1b341a2e7334be561da0492afdba4eea"],["/posts/c43e60b5.html","dd9e26c8cae5dc26a8b46ccb7b66e943"],["/posts/c497a412.html","ca33e53bef9c146aa9149f4721a362c6"],["/posts/c5de299a.html","2ae4a35cadb2afd3882152aa22c2efae"],["/posts/c70bba9c.html","aceb2a1fb5090b1a70c56e72ad19acea"],["/posts/c797535e.html","cb7de293a484c5bc9115d7ae827753bb"],["/posts/c7a62c79.html","6f9bc49469805a07ef904f7955fe97bf"],["/posts/cae2c959.html","c8e3f6c5df2701a642957452a9ed5ae7"],["/posts/cbebef2b.html","51f4d024e00a2e6b31a6fcda1c6e8cf5"],["/posts/ce25023e.html","fbf72dae917cf642f48cc56851c753d8"],["/posts/d2fd4837.html","5b27b752dccf97086c9e29d2e4bfd1bd"],["/posts/d3233cbb.html","e539b852367a23e455b229133ebdacf6"],["/posts/d3a745a8.html","6239f922b0ff36d9e116ca9ac1870d05"],["/posts/d7e940d2.html","3d0412ed77eb27b20cdd8d424add204e"],["/posts/dc815d5.html","595b77feb68e196bbd04e70805c5181b"],["/posts/de25b0be.html","3a0f1711f7b1380a16f8fe52edb05c8e"],["/posts/e2623b4e.html","cf8fd48dd47e9471751c8f60b901ae0c"],["/posts/e3ab6ad8.html","037436f300946c1a8086dd611e724e7f"],["/posts/e5018da6.html","ba3d381f9bbf6757717858689769f39a"],["/posts/e5963272.html","d0d3c84b3d1a6ff870ffdbacd6491007"],["/posts/e624b065.html","ea8475ea748d35ad544c9abbcf7ae1e3"],["/posts/e7c703bb.html","a62ac47cbf34161b4f200f8e49fac60d"],["/posts/e8f14b6c.html","83937e84b5d452340a24f62b30ec7716"],["/posts/e91abb63.html","39063078449312c43b3b3f9b1e41c9f3"],["/posts/ea9a8808.html","8ffbe2eee0e0cdf843c652210df8dc01"],["/posts/eb784749.html","bbc054eaba1c8b6adee174c976354258"],["/posts/ebaf2232.html","eeb8ce21e3e02ab9d75259896e7cf9f6"],["/posts/ee1ed673.html","5de79e9fa7d8ec53baa4555cbc95e743"],["/posts/f0c3ed61.html","52a8ed1336f5885793b46ab986f32109"],["/posts/f21e7f84.html","04e3b7af3ef54c324ce4d9c4849f83f8"],["/posts/f230b0fd.html","c016505a0dad3228e015886a9fa19010"],["/posts/f663d5cc.html","a50a960e8b9885b3b15150a9bf6b85cc"],["/posts/fc04d0d4.html","aaef8dd64754ce35d6d89936cb422d9f"],["/sumire/index.html","92dd9376e508813516bd8f4b00c6c872"],["/sw-register.js","1a279db1728eb8a908cca4c141e8b480"],["/tags/APPLE-project/index.html","ed5bb3ef27074b7096b57130bcab62ed"],["/tags/BELL-DA/index.html","c911ab2614450a3bb5ef4da88caa8c20"],["/tags/BL-Game/index.html","9ad715c9b620b1c89013bf0e572f1ac2"],["/tags/Blue-Dahlia-Digital-Creators/index.html","8d4704f82d1737a625a6098026670b86"],["/tags/CHUNSOFT/index.html","de96b9e629f32491f518c7945a1e4aec"],["/tags/Check＆Stripe/index.html","9da8360c47b11f1fd120c4a173528308"],["/tags/Cherry-Pie/index.html","bafa335fb8cdce37123a1c2883df0128"],["/tags/Circle-Mebius/index.html","7e737c6b5ea8a23cbec21ccbe3c8441d"],["/tags/CresCENT-BLANK/index.html","ae0db9923f0e037c774ad5030ff53c75"],["/tags/Dopamine-Software/index.html","4a77c510b06f9b87fd3c119d98d7d355"],["/tags/Dos/index.html","aab35c0e97547e95c6ebd5ec2fcbbe71"],["/tags/Earth-Well/index.html","388e6199313ba62e59081a4579cdfbe7"],["/tags/Forest/index.html","df5f838e9b6da5ba5230cfd0d2ea482b"],["/tags/Kanon/index.html","a55bc56100c0e4b101e15b0363918deb"],["/tags/MANATSU-8/index.html","a7cde8c7cdb1fe75253f1620c46c7de0"],["/tags/MARINE/index.html","acf4aa9cbb12db3cf5961351f58efc32"],["/tags/MIO/index.html","b3bee0f60b2a68a34bf70a621b691c6d"],["/tags/Nmyu/index.html","4c35c2915e743443d37d2e940c5b58c6"],["/tags/O-S-I/index.html","88f1aed556af8cef8cca961e1d7bfff7"],["/tags/Omegaの視界/index.html","0dff07d545a06d0d709a032c3aa01d34"],["/tags/PC88/index.html","99c651a09bc9356cba5090cd0129014b"],["/tags/PC98/index.html","f41f15e82b657071d1d3c15861142538"],["/tags/Perpetual-Room/index.html","14551f13efca05a11e8331c58e7129c9"],["/tags/Pleiades-Company/index.html","cc53684620b1ad1af556cd220a36a42c"],["/tags/Project-Twintail/index.html","d4b5f89c315fad4a264db09010bce759"],["/tags/RIFF-RAFF/index.html","0acbad02e8268adf1cd2ca103502f50f"],["/tags/Reverv/index.html","65b48b0e765988719f2bc164d2e0b418"],["/tags/SENTIVE/index.html","70e3aca92d8ef9156504a3f842d8e386"],["/tags/Saihate-SOFT/index.html","4b7ca2f193f9ef9a6e73c517efa13917"],["/tags/Sky-On-R-imaginAtion/index.html","7ddca2b0d82781aa1c3af8f5a61201ba"],["/tags/StrayMoon/index.html","4d3181adb9d4978f204aaf1ceed13c8f"],["/tags/Studio-Bu-Sa/index.html","d8cfabdc8938904232ebf7585911dce8"],["/tags/ToHeart/index.html","046aeebdf054b0dd48aad2eaf7713efa"],["/tags/Traumend/index.html","eaad9bb7c7bb75d4657d198ef63e7ab5"],["/tags/Witch/index.html","16b770d49c9b931f27762995a99be288"],["/tags/adonis-project/index.html","71f65a53eddfe5b35818fed313cfb0a7"],["/tags/flash/index.html","6a41fb8b2602cf8d201aafc449f3a0f2"],["/tags/galgame/index.html","49cc76095170efb89539d1d9d04d06fa"],["/tags/galgame/page/2/index.html","266fcb078915adea6f4e75224dba8d3c"],["/tags/gal资源/index.html","1a607ebbca6ebdf15a87ca4c5fb2316a"],["/tags/gal资源/page/2/index.html","fb39d9d4afa4909a3888bbc4cf55e35e"],["/tags/gal资源/page/3/index.html","29f7acc47e8c3708196b0716f901ce0b"],["/tags/index.html","0f2041888543021b10d0b595cccea6ca"],["/tags/rkr/index.html","cd1a2071653ca8261fb838ab8bc369b0"],["/tags/team-eye-mask/index.html","20cf8a15eb93e35d54c8296eb4831eee"],["/tags/ありすくろいつ/index.html","aac6b6203e0be4663420c72622b4e83a"],["/tags/いつものところ/index.html","5babfa0a2b6e80e0c2475aa0b5c47a53"],["/tags/きつねみみ饅頭/index.html","e297cc6b45a45e85aee68aae4ea95278"],["/tags/ねこねこソフト/index.html","bff4ca521cb815fb90633fb8a38defc5"],["/tags/ねこバナナ/index.html","67154b22be92432093ae2e8d09745882"],["/tags/はちみつくまさん/index.html","5384b669c94237ed19f0ea5f0e7079bc"],["/tags/ろりちせ/index.html","af9bb15dfd935c48b01b9aaaf5d105ec"],["/tags/アイル【チーム・TATU】/index.html","c61df0f42410286bf9ed210d604e2a7f"],["/tags/アークシステムワークス/index.html","82db64eb9b62b34a337b6767b5cd8735"],["/tags/ブロッコリー/index.html","e8fd38c45e18942c10c62dbd650944e7"],["/tags/乙女/index.html","b9af4056525f8523ae66842965b48d71"],["/tags/停产/index.html","4f6d0783dfdc19f3a6bbebe4394c91b4"],["/tags/公告/index.html","cbb0c8575864344e3700eebf1ecbaa2d"],["/tags/同人/index.html","d4f6d478e2f77bd80cce18d7387bff37"],["/tags/堀井雄二/index.html","df461d94fa5aa3f2b29998414eb9aade"],["/tags/外海なおき/index.html","bed9f9ef9cac6c487a8c3a1068f29d00"],["/tags/桃野衿/index.html","43e41e2b509d5ade5e131f449d8559a2"],["/tags/機械式少女/index.html","d6d04eaaba897f037870034a5cd5dc92"],["/tags/水仙/index.html","997ddac6fdeb851a10b45cde3fd0c61c"],["/tags/汉化/index.html","3c8752a446fda571aa70f2e4527f1175"],["/tags/片冈智/index.html","b66374cabd35a52751b92eb3cbdb21b3"],["/tags/片岡とも/index.html","353ab907a867d45d8ecfa55a72f546b1"],["/tags/牙の刻印制作委員会/index.html","aee535ecf1b658e412dcdf16a7d8ed7b"],["/tags/牛カルビ定食-FLAT/index.html","5e1bc9746d45d13e6222c91c64c0a882"],["/tags/牧尾屋/index.html","8441de0f0bda45bf6c6df0687bcc210c"],["/tags/猫猫社/index.html","a1ab806c3dbe4c4f5b6ef5381051a2db"],["/tags/王宮魔法劇団/index.html","634323d074dd46e2352c32d532e8e02a"],["/tags/画集/index.html","9c7fee593f6ff93096ab1c4f3cc22099"],["/tags/索引/index.html","8e2123e9b44878f87f9a35e3265b0ea4"],["/tags/缺失/index.html","3b1d35b89e72753bd70c575dbe6cc700"],["/tags/自购/index.html","b194cfd0832e39157e95831945de150d"],["/tags/茶葉☆姫/index.html","759604b9badb97bceacce793ae557f72"],["/tags/郷愁花屋/index.html","441f3a6bb0657aef8030b9c953956c8b"],["/tags/閂夜明/index.html","dbca60a09cb5f1fd2c1a1eb94e8ec22d"],["/tags/音乐美/index.html","f8fea1ddf48c11a55374bed36d71da4d"],["/tags/黒†救/index.html","7aff5a6009248a00e43424475af8cfa4"]];
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
