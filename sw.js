/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","cd2acfe6915231249af494e65d139513"],["/archives/2024/04/index.html","d1ac496fd85a6a8f0b4b2a6280e2f842"],["/archives/2024/index.html","4e2a8bf0d093708e5e11d18c24247189"],["/archives/2025/02/index.html","8a31397cbfedd95a6008f48ae71af15d"],["/archives/2025/02/page/2/index.html","bc4fb5d0b8fd9afa3ee96f77b86358f5"],["/archives/2025/02/page/3/index.html","4a9d2991315c06b24c8c4e62f11e2d21"],["/archives/2025/02/page/4/index.html","d235ed85006c095c70b9c86d8abe5287"],["/archives/2025/02/page/5/index.html","8d2169da3550010ba2fb9025099fc012"],["/archives/2025/03/index.html","9696c0773fbb63f72352d3a53d9ff7a8"],["/archives/2025/03/page/2/index.html","b20ad4689beb8b6eab0c7fe675bbd8e8"],["/archives/2025/03/page/3/index.html","fe77e27cb3bc13a0a139beed61d86b9d"],["/archives/2025/03/page/4/index.html","19e66d4f71eb8c32dbab67a515599cbf"],["/archives/2025/03/page/5/index.html","22dfcb249d861703e58351f4cdc43ed3"],["/archives/2025/03/page/6/index.html","0c23b0c3e6b3f58b0437e680b5998644"],["/archives/2025/index.html","6f3023f03029bda2834b4f5aa1192ec1"],["/archives/2025/page/10/index.html","3a4cac65d5102bfffca75698ae0abfe8"],["/archives/2025/page/11/index.html","33e7422dad8662e7a7b979f0f9b9c004"],["/archives/2025/page/2/index.html","222dbd0f740b5bf588e3fdb82d12f7e6"],["/archives/2025/page/3/index.html","4996acbbd694c4ca05060e88b33ad168"],["/archives/2025/page/4/index.html","bb7842059d1612d0962590383b6a2f64"],["/archives/2025/page/5/index.html","2cca514fddb8d8cad377ecd07119fe78"],["/archives/2025/page/6/index.html","d685bfb28e3b142304932da1ac9c59fc"],["/archives/2025/page/7/index.html","0f3cb28c8c4266f61afbd8f7b7af910b"],["/archives/2025/page/8/index.html","4bd824ba5cc4b996abdbb1b66feca46c"],["/archives/2025/page/9/index.html","04e4222e025525e8f70f105f10fe9add"],["/archives/2026/02/index.html","72c2781cdac39042bff00fbbb46003a2"],["/archives/2026/index.html","ada03e4216e67583687449c5c2b2ac0b"],["/archives/2925/01/index.html","30303930570a94ba5d0622983d68471e"],["/archives/2925/index.html","e8abcfe275d6d44abf3a1dd60497c146"],["/archives/index.html","79c4af4164c1c02653ebdba18e364c8c"],["/archives/page/10/index.html","c9bff7ee619909ee12990f1e810faeeb"],["/archives/page/11/index.html","a2b7bc4e54c476995fa5e68b77816b76"],["/archives/page/2/index.html","3646ce0aaeae5a2b765954b7ebdc4d6a"],["/archives/page/3/index.html","ff43f7e4620db772ee46a6923eb970bd"],["/archives/page/4/index.html","870f8b50ed6af6d95acf8ffcb75dc65c"],["/archives/page/5/index.html","fc93c82aa07ae850326e83acb6c931c1"],["/archives/page/6/index.html","211e417c12e86ab4ee374101635163ca"],["/archives/page/7/index.html","65ec6aa5a4a692afc18ea781bfee140a"],["/archives/page/8/index.html","cb476e085e2e4e6145d5450e60ba9546"],["/archives/page/9/index.html","e862e9f57883c0d54a698f63439b1209"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","110ce22f4dc4acea29e66ab6074865b3"],["/categories/galgame/page/2/index.html","74db7c6b146e21754f06b3d56ba6e675"],["/categories/公告/index.html","1e02b0c449b043d301a4059b257e1831"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","6a230bf39f79654c52e3cee54e21892d"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","4e0d2fdb317e825fc34ea172c9bbfb63"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","8406a30321314afa5134d34c0bebef8b"],["/page/10/index.html","effb886ffaeeee4a20b90e13f80c879b"],["/page/11/index.html","a9a9139e921d5cbe27f241c083ce8106"],["/page/2/index.html","d838261ccac10d1d680e93148d2edc6c"],["/page/3/index.html","6b3b073c850013f793c4057d7a43b69c"],["/page/4/index.html","f51cbe120643627ca64d43b59486d270"],["/page/5/index.html","6f604dd9e4199a3d95ff3a38ecebe5be"],["/page/6/index.html","3d693f54b4dcdd7b71fd4a5e2f529e4b"],["/page/7/index.html","7ded82e91d72f5f9f31a3d7ac6ce50f8"],["/page/8/index.html","95a5bf416bc076f4c2eca2517859ad83"],["/page/9/index.html","61ebca75064ff12a70830f6976487f80"],["/posts/10c9dd98.html","d2ed6042fa764e0771fddf83e4960822"],["/posts/1295b569.html","b60adbe8d984cab56becd6a7835a800f"],["/posts/1370342.html","a9aa2fb8e3c88d47098097ce968ed148"],["/posts/15ef14c2.html","9fd4ab28d552e7cffaef4c591eff74ba"],["/posts/15f3959d.html","d4721da9f65a5b128afd2de1b786ca2b"],["/posts/18ab785d.html","2c498b0defe59c32e01870a4202773fa"],["/posts/1d59b71f.html","a9a934067542439b76e1bf2270e73dd3"],["/posts/20b3f3a4.html","b415c627fe76f3bd8a05c331c6d1b8b6"],["/posts/245f1c7d.html","63ced527fc2aa5c9766b71b0e4ee0554"],["/posts/252658f.html","c118885620d79af08501b68b5b67709d"],["/posts/28397adc.html","6b01527b53e3434e83d19053a1304fdc"],["/posts/2b38bce0.html","3aff6746f3add3f683fd4a31779a639a"],["/posts/2c0a6836.html","d30ad62322bf1f1ba925e6f8d9c3fa21"],["/posts/2cf620f0.html","fb3ec857dbaab1be1d926f02dd240b81"],["/posts/2e30fd6d.html","d03dbcdba4377a1d2b7aa19bf34c8a86"],["/posts/34292736.html","d4899a7491c018d38970427da5f13bae"],["/posts/3468cbe.html","003e4b24c694dc104deaba97d9ce3a3f"],["/posts/39176dc0.html","e0befd80ee65aad46860c6f33d5f96ec"],["/posts/3e118dbf.html","8b36d29c3e7e166c457d353663329eb9"],["/posts/3f7d823a.html","e5b1ddbba09877450371bde3ef2b4964"],["/posts/3f978819.html","1dcc5b5e79bc086f1dadd75f3d4fd74b"],["/posts/43945723.html","e3325080a1bcdebe8ee4e333318cdd5c"],["/posts/44124a6b.html","83dcf41079b19f048e7b2e88a9286634"],["/posts/47abb61d.html","b8ec808a2e57b7e278da93fde8718f95"],["/posts/4b689be3.html","dc3822cdd43cce0528523ea52156a952"],["/posts/4cf8423f.html","7c9f719a40437a85e6afc2a8ea4591c2"],["/posts/4dcf85c.html","522982d943e91bd08a72d6318b553f1d"],["/posts/500cd322.html","71ede7925abd6948a57aadaea066a549"],["/posts/51c9b1ff.html","d4f0619d661108357857245a21fb8bf1"],["/posts/52b5b3c6.html","d5353839334ab27cfa034adf669cfa2b"],["/posts/5f6e0c59.html","9b3d6a1bfc9df417bdc759b207b16e81"],["/posts/61a63a84.html","b4d72a154062d216155e22b739495081"],["/posts/625ab7bf.html","95a8ed004be43f9994188ce71c772af5"],["/posts/6336a2f9.html","41eac5d28cd7753b0101656fc2ae18be"],["/posts/6432d61a.html","e31c2e0e617bcdbbc904287490ce0c0a"],["/posts/6515f032.html","2487f1f3e7bb631a6e719bcf59f2befc"],["/posts/6720ccdd.html","453d310e43e054635c14af2a07178910"],["/posts/6a4b5ac8.html","5c82cc38e2c00ed9c6f8d092c6596a55"],["/posts/6aa4177c.html","0456363a29283549e9c8b430877abec6"],["/posts/6b15f81f.html","3435c34233b9e09b0096e89d860a6aeb"],["/posts/71131d34.html","ac66200af006e2b9ef6758512754b09a"],["/posts/78a8a8d3.html","69a9eb5dbe49986f7856fb61ff13946c"],["/posts/7a5ef3d0.html","1a5542e2a15fa36cf46718eecb6e2d1b"],["/posts/7b41e1ac.html","369716a04baaf43f5812f3dee4a2cb63"],["/posts/7b51011d.html","6d441dadd1e7ca860790e31b283dd7b2"],["/posts/7e3aa3e2.html","58ef6dc55fdc57d14458ec18d3328d17"],["/posts/80fe2691.html","be88a7df0ecc2ba78ed55265100ca904"],["/posts/81ac52e9.html","31b81e69e744322be658203fd8742c47"],["/posts/8486f6f9.html","89e80db86ae96d10827f75e8fc44e6fe"],["/posts/849b40f8.html","5c537ab2c65e5bd35c194e888297a02b"],["/posts/85c51d68.html","652b5fa3ef94b291a7bd3f2602891b2f"],["/posts/886f8d3.html","2722d25c30c6c9334be58c341d8c1de0"],["/posts/8a7cba10.html","92171e2dbec8765404dd2aa29d132ba0"],["/posts/8ac11b41.html","0aa83db8feddda6e058f7e5e97d73f87"],["/posts/8dd520d9.html","7cae2b0c21d53409161b635eb932eee3"],["/posts/8f555654.html","2b79e20783aeb379b3886a106d5cf7c7"],["/posts/92a980c2.html","bfe375a320172ce7ed6afb4df015a91b"],["/posts/92ce16.html","8154d1e48d5589c6a9742b69b7b90766"],["/posts/93e9943b.html","c97ff40c5d5294560fca5bca169226cc"],["/posts/94d3c794.html","6bcc873a690d714cc1eaa0b5468c44c9"],["/posts/97f50eea.html","706b618c129465e6aba5c9c5fa947c5b"],["/posts/97fca8be.html","d6cc10e5fefeb0bc4a8bc07d30c0d9b0"],["/posts/98662d05.html","ae851759156710837d40b805e499ddfb"],["/posts/9a2f6162.html","49b1ed9256cd0ffbbae12fe7d7d9caba"],["/posts/9b22a48d.html","5057acb9bd5c9f8b860b5f0120d6d923"],["/posts/9cb455b1.html","e84505159d57af4b6c1f72bb237d7679"],["/posts/9ecdeecc.html","646a022a73042f5962ece2e0cbf0b672"],["/posts/9efd7701.html","09b33f8da2d1a2870766a877a1f3e7a4"],["/posts/9f61c1a0.html","d148acae24e08d24086242f1c34d008b"],["/posts/a1de710.html","7a36f442a8795c2e6044b4d3b3d1303a"],["/posts/a30eb0cd.html","a22e49ad886d7de1f3ebd6d7cd2987b4"],["/posts/af1807ef.html","da77274b1c7dce95d1e616356a793f35"],["/posts/b497b647.html","9d95ec417edf702c74d0c0dc3083a064"],["/posts/b4d464b0.html","2cb61ea018447d9e3f3440c396379509"],["/posts/b5fb773f.html","f9663a3a41b904bdcfd233242ee04d67"],["/posts/b8d46b32.html","f9db83af5b911bad4b8f9420cff73250"],["/posts/c1b2c6c9.html","7acd52271b7c9d8073ccd113825c2e29"],["/posts/c2111cbf.html","7d7a7dfe79a3986977b80e502a2805c1"],["/posts/c316c2e8.html","68544dffc5ed4a99362ce1242709b3bb"],["/posts/c43e60b5.html","55718aaa4c71d7d47a758618a019d39c"],["/posts/c497a412.html","c1977ec8353a423ede73e79f07f3ca13"],["/posts/c5de299a.html","b318ca6663f10893d0f16076ddd2e5aa"],["/posts/c70bba9c.html","e95b803432b7dd1c47de1ea9762df723"],["/posts/c797535e.html","87e9e9165ba623d0239030b4d0c34f98"],["/posts/c7a62c79.html","991c99cc2c068d56730cbfedbf265fc7"],["/posts/cae2c959.html","7cbb654c2ab6466a04b8e816b3cfffce"],["/posts/cbebef2b.html","61827c263aed70aa71943db0621aeea9"],["/posts/ce25023e.html","35c2ffbfe6f0e522ae5e2b8c2b69c8db"],["/posts/d2fd4837.html","0aca02847bc84269d7c94787b58fabeb"],["/posts/d3233cbb.html","a5eda8600106fc96172e7159f4aff773"],["/posts/d3a745a8.html","89c6f992e7463109e60aeb6caf1bf243"],["/posts/dc815d5.html","07a829f2cc994285165c4df7de85c6c6"],["/posts/e3ab6ad8.html","6439e72cdce7778c6db62119f664e162"],["/posts/e5018da6.html","20ce08561cd8914ece2fae8af0a4d308"],["/posts/e5963272.html","13a41f04c7ff1b45bc186f59edd066de"],["/posts/e624b065.html","e06c3cf29e849bbb258020bd6fdac236"],["/posts/e7c703bb.html","ddc762a0aebdb1b352badfb1c23d77e9"],["/posts/e8f14b6c.html","5dd8990a4b8a015b74528f0935d6e9bb"],["/posts/e91abb63.html","0d5be79fbd90d86ecaf7598c926a31de"],["/posts/ea9a8808.html","225e468fc6e6328a6557b6c253eaa387"],["/posts/ebaf2232.html","d996a87634cbc26b382eb379b5986041"],["/posts/ee1ed673.html","8bc4714f11828c2914d74832a144698a"],["/posts/f0c3ed61.html","1dea655fd543503d0f10e376113b1b58"],["/posts/f21e7f84.html","d268ddc400de7b863d544134c9b028c0"],["/posts/f230b0fd.html","b338775be1389837c3f6cf3670f8c134"],["/posts/fc04d0d4.html","0fca0643ed80e22f3a4f228486960215"],["/sumire/index.html","6fbdd125b38f06230832f4664589dbf9"],["/sw-register.js","e1b043ab30b16319f274ab510e59712f"],["/tags/APPLE-project/index.html","c7502522dbd08e3c69d4b732afd74553"],["/tags/BELL-DA/index.html","3543555638e666a57c0972b2553ba7d3"],["/tags/BL-Game/index.html","d76860e6bf472e85a1da34744bb59c4d"],["/tags/Blue-Dahlia-Digital-Creators/index.html","dd230064b51e4803845358bd2ab1e1eb"],["/tags/CHUNSOFT/index.html","435b33447852ad453f9fcc4c9344d6e7"],["/tags/Cherry-Pie/index.html","b7279367e4bc2d959d297ee5dfbeb63a"],["/tags/Circle-Mebius/index.html","10422f57fb0105e6b11621ac03992e38"],["/tags/CresCENT-BLANK/index.html","37eebf4dad9c6c09d0027d0a7140434d"],["/tags/Dopamine-Software/index.html","10b724099193cdcb23ebd76733e80939"],["/tags/Dos/index.html","97bfbd1b94389ef96376f01994442a7a"],["/tags/Earth-Well/index.html","e209f83104b3bb950341fd66b62d8b13"],["/tags/Kanon/index.html","3427beefaa8e6d44bc45449b4df422a7"],["/tags/MANATSU-8/index.html","0dabffda8d041e9e0f3160517d28b7df"],["/tags/MIO/index.html","d42dc0bb139523e233a1b620e537d417"],["/tags/Nmyu/index.html","bf2682b57d044a30429ff654105b7bfb"],["/tags/O-S-I/index.html","388b4975042686333b936666363e93c4"],["/tags/Omegaの視界/index.html","4c00940b26e40e25d05b4093a376a087"],["/tags/PC88/index.html","e0b9d828803a569050d4a71be82191d6"],["/tags/PC98/index.html","b7ea2131a251c749104643f364ade924"],["/tags/Perpetual-Room/index.html","79e8fc98711520253852fb78b27ad6b6"],["/tags/Pleiades-Company/index.html","a604dbd5482233aae7ea4c859f2bc479"],["/tags/Project-Twintail/index.html","0b4379330a41f708b52816d87aae6225"],["/tags/Reverv/index.html","4fb60c35c4ef352116de81aad61eeeb1"],["/tags/Saihate-SOFT/index.html","13bad7551b171086ed066d92f5711317"],["/tags/Sky-On-R-imaginAtion/index.html","fe6bfb6b6a9e0ae83668357c95f28d54"],["/tags/StrayMoon/index.html","0959a724b19a550ffe8c69faed2945f2"],["/tags/Studio-Bu-Sa/index.html","8efaaa94c5e1d1d1bb84d83d9c327483"],["/tags/ToHeart/index.html","13797275a32c22b7c82b121a1b1b70e2"],["/tags/Traumend/index.html","473f770ff2769a978742e28939251449"],["/tags/Witch/index.html","37f3cfdddf3829b56be8061b2324af28"],["/tags/adonis-project/index.html","25eb1b20874a5ec0c99cc502980a7790"],["/tags/flash/index.html","2f0d3e479714d90f23d5d7b626afa604"],["/tags/galgame/index.html","e5e1d2ae6910f6badd15d70f8454b1a3"],["/tags/galgame/page/2/index.html","4193cdee9ae754f9dad139181c9dfff6"],["/tags/gal资源/index.html","2bf3ba2b02912c4bfca8f7200b44b458"],["/tags/gal资源/page/2/index.html","8cb8368b6c1e393a41d6ac6d0591469b"],["/tags/gal资源/page/3/index.html","779d1093766ae98a0889a5a7284ca787"],["/tags/index.html","16c86312f3add68f3bdab99c4f7ca047"],["/tags/rkr/index.html","a03b919d276b8df158544a03f2f2ca19"],["/tags/team-eye-mask/index.html","e3dbf03cb2cf2dddb356c6e94e263128"],["/tags/ありすくろいつ/index.html","c2a9d206a686b6b560547d77e2a23595"],["/tags/いつものところ/index.html","4c53dad38f08713e4bd4d25a1894717c"],["/tags/きつねみみ饅頭/index.html","784c115faeaf3dbb71a942ee94ec29d8"],["/tags/ねこねこソフト/index.html","6f701a6460cbb7a3981510eb4ff9c70c"],["/tags/ねこバナナ/index.html","ce07fac5413d4715440dbe2a79c04fcf"],["/tags/はちみつくまさん/index.html","b42be8f8f997139d3f2aa020a215d0fb"],["/tags/ろりちせ/index.html","baa9d90c46151f56c84e8691cf59fea1"],["/tags/アイル【チーム・TATU】/index.html","c7bf4a1f711c8cefeda19180c7c64e8b"],["/tags/アークシステムワークス/index.html","3d3e94288d622394d48f96640bd5a78e"],["/tags/ブロッコリー/index.html","5ee3a302410e824e675fb3ebfa6e2eaa"],["/tags/乙女/index.html","8b6cc287142618204d1e22614a135821"],["/tags/停产/index.html","6501a6b33116b417ad88cd300550a076"],["/tags/公告/index.html","a1b0d365082795f4c56708b4333108bd"],["/tags/同人/index.html","bf39523d71bc278131eba2b7387e24c9"],["/tags/堀井雄二/index.html","b6cdc6b1e98979646a09f458c77650b9"],["/tags/外海なおき/index.html","1b5e92ef80063e280bb61390058953d6"],["/tags/機械式少女/index.html","46aa15153017367abbe9d41a3096a937"],["/tags/水仙/index.html","fa69ca3669d4e0ce544b2b1a372ee665"],["/tags/汉化/index.html","542febdc553fef623491a84090b42ff9"],["/tags/片冈智/index.html","e3ce1788f2cec2ad0ce2fd5547f958f5"],["/tags/片岡とも/index.html","8673e490b8aa9411e06751f2a6fdb827"],["/tags/牙の刻印制作委員会/index.html","36cbc7ff1bce6c47cc95274eb55ec2f5"],["/tags/牛カルビ定食-FLAT/index.html","a10626928acb61f58376211a0ed78fa9"],["/tags/牧尾屋/index.html","bd2590c99ef77be7c0383f53f80f0a09"],["/tags/猫猫社/index.html","9b0ac0129976444a92bd9452bacd362e"],["/tags/王宮魔法劇団/index.html","aa990eae19ab9e9b236052ab5269068c"],["/tags/画集/index.html","1deb1aed7dc4a7af86c186ec86276766"],["/tags/索引/index.html","4bd88f852903064d8ce7fe044563935e"],["/tags/自购/index.html","29fa444c4e488f961372c9efc94b856b"],["/tags/郷愁花屋/index.html","7fb4d2973cdfcd542e3c4d4bb8cd0ef0"],["/tags/閂夜明/index.html","f19e09e63a5f41d2fc0179cd32ca0cce"],["/tags/音乐美/index.html","27fbb47a4ba0b01dd77414259d2fad6e"],["/tags/黒†救/index.html","99f9afdb6eea7216e95fa3b9f506fc5a"]];
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
