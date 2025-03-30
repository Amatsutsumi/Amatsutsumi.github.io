/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","2c92633cd9e98e4f435ad838b54a96e1"],["/archives/2024/04/index.html","2f0e1ea5b109c69b1cf0e6ae5a14c7e1"],["/archives/2024/index.html","100974aa9d65050f0463149d15ea6bdf"],["/archives/2025/02/index.html","c22eb9f6b668d5b7206476e5f15ae804"],["/archives/2025/02/page/2/index.html","50ca378f8512d8f9b0559509dda6d1dc"],["/archives/2025/02/page/3/index.html","34e44cba1c34ec6a9853b8f2f63e9d50"],["/archives/2025/02/page/4/index.html","b3e29f2e82905c4c27206f01daeb7275"],["/archives/2025/02/page/5/index.html","1002e38c142667229a3089246f0b7e56"],["/archives/2025/03/index.html","984cbaf2840f2d96a409d962fcc75327"],["/archives/2025/03/page/2/index.html","62372e68b2c6eeb41a488f08a0d12169"],["/archives/2025/03/page/3/index.html","9bf0904e4c7ddea93b369a5b0c996d01"],["/archives/2025/03/page/4/index.html","95fb845dc3f2cda0f992687b5e022153"],["/archives/2025/03/page/5/index.html","21cd17a73783880c8a55dffb535fb316"],["/archives/2025/index.html","55d5064da94e05fbf53c19ce09b661c0"],["/archives/2025/page/10/index.html","0abfb8952b839d6c5b3d5990633bec0f"],["/archives/2025/page/2/index.html","fe4b50a559d2c10a15634f8198777664"],["/archives/2025/page/3/index.html","1ef1895ef165b772bb1de1b68d3b8ce5"],["/archives/2025/page/4/index.html","b3800611350db45ef2235325a0c3b1ff"],["/archives/2025/page/5/index.html","d0b3ecf7eb0c7107f0f35ff3c24a937a"],["/archives/2025/page/6/index.html","8af02f5cd0a659e5c29429b53e6340fd"],["/archives/2025/page/7/index.html","1f4a8a1b00afe4a3c2d0db321b62aee3"],["/archives/2025/page/8/index.html","9883422b8fbe727316e5bee88dd09841"],["/archives/2025/page/9/index.html","92442f03d53b7f260097dbedd433696c"],["/archives/2026/02/index.html","39da26944808851a82317c8c1e7cd40d"],["/archives/2026/index.html","d37d2bae668a176bc098a37eb4262501"],["/archives/2925/01/index.html","2fb09c50b29d08aba8653c0b5eec4bfd"],["/archives/2925/index.html","e008c6d4c1789200d3fe11fb4440d59a"],["/archives/index.html","9020ecdb6e46462845bb408e09c38a99"],["/archives/page/10/index.html","65065c6047d1d45811e89fcc31a7b5f2"],["/archives/page/11/index.html","ef3e8f88de1861ddbec6a38a5fa440d3"],["/archives/page/2/index.html","0dfc7420ff7ff4b7d2a60065056b2059"],["/archives/page/3/index.html","f4caa70642d89a39b378f71c68403a24"],["/archives/page/4/index.html","9fb232ba40fcbf38d661d4fbd9419f37"],["/archives/page/5/index.html","9c18b4a591bfcd10e61daa62c621d555"],["/archives/page/6/index.html","7ea626a3dff7bce52ac2d43b8e8b4ae3"],["/archives/page/7/index.html","9760d95603fbaf3ebdc143579ee36d6a"],["/archives/page/8/index.html","b3731364ad19204fb74cc6fcfc77ecf6"],["/archives/page/9/index.html","e0adc3b317a1cbb0e1df87b2c439835a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","112963094b7f2d758ccc80f5f89ed464"],["/categories/galgame/page/2/index.html","95eba0ffd883973a029a21d7c7b091b1"],["/categories/公告/index.html","cd0a6708ccccb8fc1519231b42cdb8ab"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","fc12a98ad90c4f74619085fbb868ea80"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","72a10f63fa561d0e0660a02428cf9a1a"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","6101381a2a8e2a6d4f6afa67020ca8f5"],["/page/10/index.html","f3e557f0f225d91619afd4f1e68ceb3c"],["/page/11/index.html","21202a89fe7f3cbe23398a2c3d8b5fdf"],["/page/2/index.html","e95de559967189b79d85d0b835584c33"],["/page/3/index.html","881a23cd3ccefee9a8d93069ae07f56c"],["/page/4/index.html","9d2f6bc34747270dc7e5d446b6832376"],["/page/5/index.html","c5ead9b6f8224f8c25a301cc9be5cc9c"],["/page/6/index.html","357f0b38b50615ef614ccd9e157a5b77"],["/page/7/index.html","1aa5d4a1947e5cf0e14616f77cdb219d"],["/page/8/index.html","04b8b739683ce00178e03e1cd53194fa"],["/page/9/index.html","c5aeb51d58e2c4c84de44e1039b05452"],["/posts/10c9dd98.html","e76bd4a0d34ecb357da4fcb83386caf2"],["/posts/1295b569.html","9d5d5e99018bb0c493de73bd76ad6f25"],["/posts/1370342.html","34ce7adc033c790d08a0bbdfdc9fd599"],["/posts/15ef14c2.html","f58335771d69d99be475eebddade777b"],["/posts/15f3959d.html","158938e58f0f78abcfd8eb11df9b6e6f"],["/posts/18ab785d.html","b17a3fe8100c21d14264f748f4042cc6"],["/posts/1d59b71f.html","7f54d7ecef18304e0cca19d9d1a58323"],["/posts/20b3f3a4.html","70934827dc8e69da6f4e7b336cb74bfd"],["/posts/245f1c7d.html","0264c6d499194cf98bbc9c3ee8eec1d4"],["/posts/252658f.html","837f9988cb459a00a09ad8b6c9de469f"],["/posts/28397adc.html","a2f49bb84825a55aa1f0397966203fe4"],["/posts/2b38bce0.html","11ce19c6a1ac74d7fc134274f06085a4"],["/posts/2c0a6836.html","025ec7c2510925d20ae953f012d0daba"],["/posts/2cf620f0.html","0a485b8bc65289a015a9008712e21329"],["/posts/2e30fd6d.html","333f5b9bdf2745b79530568ada96b0e7"],["/posts/34292736.html","7e45094817ed3a1507a3057a9432731a"],["/posts/3468cbe.html","aee0d831846c48f3b7ef1f6a35535fef"],["/posts/39176dc0.html","6502573c511c82ad7dab87ff5606d6e3"],["/posts/3e118dbf.html","d1c53020a6bcfd8211b550e51bc6c16a"],["/posts/3f7d823a.html","3bd7dd07fae7eeaf79878b50da4e7222"],["/posts/3f978819.html","d19f438dbde26380b883a599f6f0f116"],["/posts/43945723.html","ead98642a14b765af53c613f7c7c4f78"],["/posts/44124a6b.html","74a4341fecf6ea317a430d229330c633"],["/posts/47abb61d.html","a5c7885014423223c86056e3d4f012f5"],["/posts/4b689be3.html","7f709793e1de3c150c9578c64b9bf775"],["/posts/4cf8423f.html","b31b1f93107ea6b01e6511578ce12dd5"],["/posts/4dcf85c.html","fc9cb7f9b1b6d35a45a0a405ff59841a"],["/posts/500cd322.html","b12df8cff2053de5ee5e6ae84d40d49b"],["/posts/51c9b1ff.html","33be3b73484809535677b23abbf6b749"],["/posts/52b5b3c6.html","5f1a3e4931642b90319f067f820de07c"],["/posts/5f6e0c59.html","34b18aee7ce8a311130c2e8bc1c94186"],["/posts/61a63a84.html","41e3438a928a988214bd3d1bc8d8175c"],["/posts/6336a2f9.html","5a10f21ac1a87ad2935f606bc7f3c30d"],["/posts/6432d61a.html","2c41799c8a6b455c162a45475e5e3428"],["/posts/6515f032.html","bf82019ad709ff889fcde6041f8d78c2"],["/posts/6720ccdd.html","ad4a937a3c784f7761725d20fc5f9410"],["/posts/6a4b5ac8.html","5d7a93092da15145da87dbf208621dae"],["/posts/6aa4177c.html","8a68792c79ae90e86b19752c86087ce6"],["/posts/6b15f81f.html","0fd671b6ba62c267b7c5edf8f056eb6b"],["/posts/71131d34.html","e4f01740e52fc065af4c624caf214905"],["/posts/78a8a8d3.html","ba9ac7d54c27182e8d3b803e795f2efd"],["/posts/7a5ef3d0.html","0e7bf635d413a077e05def900cae196a"],["/posts/7b41e1ac.html","5fcf3e9648e33c23f8a351cdbf560975"],["/posts/7b51011d.html","86700b57aed4fded4e860372f86dccdf"],["/posts/7e3aa3e2.html","a71763667161c71a1c8fb3eac16db1f2"],["/posts/80fe2691.html","8088621ae734c3acc8426a9c22c092bb"],["/posts/81ac52e9.html","0f8267a425ffa5a40e1677b880cf7543"],["/posts/8486f6f9.html","241b8e9e61c845f331d83ba929bdcfe5"],["/posts/849b40f8.html","ef2b7284ca5799388c777a999779e250"],["/posts/85c51d68.html","cec19371903f2197f2d5ec9456193044"],["/posts/886f8d3.html","b90beea462cde6c274b6e73475993cbe"],["/posts/8a7cba10.html","571d77d46f97ac48bd7612255919b6eb"],["/posts/8ac11b41.html","3d8aacac6328eb5f7939ad7cef25263b"],["/posts/8dd520d9.html","dd4ebb463626e8af58cda27a8c544072"],["/posts/8f555654.html","cc2dd5fcf0d59b88259510c6afce1dfe"],["/posts/92a980c2.html","0139fe863617a85e54fdb838e97f43b4"],["/posts/92ce16.html","5e6dfa85c4f306754c3af4df28171ecc"],["/posts/93e9943b.html","78585023ae356abdbf303d69eb0ad42e"],["/posts/94d3c794.html","b54a73d01eaeecc303e3a97c0bf0340c"],["/posts/97f50eea.html","2a31e702c78f7428d77fcc569c9d55ca"],["/posts/97fca8be.html","2e7904793acfce7573e231f987ab66b5"],["/posts/98662d05.html","63452f1dd4412a4394f55e5bf05f8513"],["/posts/9a2f6162.html","1547685e8686aca3ee5ffb74f8056208"],["/posts/9b22a48d.html","4c4e5968acd1e1d001059e16d73083ec"],["/posts/9cb455b1.html","8a48b2023d32c00643e8581d088b7eb6"],["/posts/9efd7701.html","0561224230a78ee842c510869723eab9"],["/posts/9f61c1a0.html","4150d813c4c2e03044a0124c7f767da3"],["/posts/a1de710.html","2ec6c4b14b89c36aae0300db57b50093"],["/posts/af1807ef.html","18ca498f7d20e8eeeacb2701a2a79259"],["/posts/b497b647.html","a8f2b857ce43940ac06a7c2eebaa465b"],["/posts/b4d464b0.html","ced66a81549687e27f677a376fc37953"],["/posts/b5fb773f.html","f77f4951d82de2134ac8f4335455f372"],["/posts/b8d46b32.html","87cafa5e7cf05fcaa871dce78bb4cda3"],["/posts/c1b2c6c9.html","a7c1d5edf086533d04e124d753d4e662"],["/posts/c2111cbf.html","5e22b5958a2e96188fe17dc67eb1545c"],["/posts/c316c2e8.html","6ae456cb61ead6706e20d36ba2ab1d35"],["/posts/c43e60b5.html","256ba0fcb0fb0c3db6c23dba70df5a26"],["/posts/c497a412.html","bb3fbf4b202cba7b50e0578e5fd3b006"],["/posts/c5de299a.html","432cbf953d6721a900f0085663e40ccf"],["/posts/c70bba9c.html","28e9caf42bcabbb3f32bc1e1372864c7"],["/posts/c797535e.html","6c4f3e90b1954c1a664038620a60d863"],["/posts/c7a62c79.html","4cab932479f57ef3f598b30f560dc65e"],["/posts/cae2c959.html","ca4b5200214c002f2f22213627f6ea30"],["/posts/cbebef2b.html","8bc16bee9738a062ecffe1b57d848060"],["/posts/ce25023e.html","bb393cce87a9f74e1b80914e03db115b"],["/posts/d2fd4837.html","359f37863ac53ed70bf94fa234e882c8"],["/posts/d3233cbb.html","432021166667154e68c331057be2f1a8"],["/posts/d3a745a8.html","d9d870e519998b778e7f0f753fb73e55"],["/posts/dc815d5.html","817a9f60d16efdb4c562403c6ee49efe"],["/posts/e3ab6ad8.html","b5839ef50ef948ec40941213983ead49"],["/posts/e5018da6.html","003006a0e0dc681f6c2b797c044aac59"],["/posts/e5963272.html","b28d1f3e8cf0349b821c6072412b3b65"],["/posts/e624b065.html","a2e20902a4cbb21d11f535d3be0a3216"],["/posts/e7c703bb.html","64936a3a91aedf3e19107dffc4b9ba0e"],["/posts/e8f14b6c.html","6cf710d5e1cfb20606cb0327dfeb8af7"],["/posts/e91abb63.html","cb731d52babb43914161eae1b71d2e3d"],["/posts/ea9a8808.html","488b6320b38066cd11047cf3eb3d6e86"],["/posts/ebaf2232.html","ccc24e76b7b96ae1f844fd71bda97f76"],["/posts/ee1ed673.html","b3b3acc9d41e39a33b5905084d4d251c"],["/posts/f0c3ed61.html","31be34128415428ff0901ba45a57a86f"],["/posts/f21e7f84.html","7fb5d9611cdfbaa38d681d04dc7141cf"],["/posts/f230b0fd.html","25207504c7e99bef1ff31e5321c6fef6"],["/posts/fc04d0d4.html","77b85c2488d05c267b47b1036cdc903c"],["/sumire/index.html","7ca6f0b70c1307e9f176b28b6f9688cb"],["/sw-register.js","261bb72ed2ed4feb8094a9d6d6b5821d"],["/tags/APPLE-project/index.html","d30e0b8f1b0669cd1e3657b63a81e3c5"],["/tags/BELL-DA/index.html","6a9765a24fff33d6767159006e0378de"],["/tags/BL-Game/index.html","a0ceb7a3011846582891ad2673a40545"],["/tags/CHUNSOFT/index.html","17180073b51df6875e5c659356e15ab2"],["/tags/Cherry-Pie/index.html","098dc6c23526903c7647bb6f43c16423"],["/tags/Circle-Mebius/index.html","9efef4bdfb4aa97f62afb6e2a42540c5"],["/tags/CresCENT-BLANK/index.html","ecb6cbb5a52c325c4086d75e2c384060"],["/tags/Dopamine-Software/index.html","4a3244d054f21ba773ecbc2977401c6d"],["/tags/Dos/index.html","6e382da38e4b3b9dbf30497595cfee86"],["/tags/Earth-Well/index.html","3d51ffb2ec177bba742f66091afd3826"],["/tags/Kanon/index.html","2fd6427327bd31846fb43daf01a2796c"],["/tags/MANATSU-8/index.html","faf1519fe59d5af1eee70403ec0482dc"],["/tags/MIO/index.html","02f216969412eedb0cf494d3a9febe4e"],["/tags/Nmyu/index.html","7a731950ab209a6a5083363d4ff1c3db"],["/tags/O-S-I/index.html","18fc4052c05402fedf2497c3cf1213fe"],["/tags/Omegaの視界/index.html","9d6386043e45ee3bdf3ee58892521203"],["/tags/PC88/index.html","2bd01f95e8e9d028f99b59e7b77f4f76"],["/tags/PC98/index.html","90153ff795fa69b2d38d10a43b923121"],["/tags/Perpetual-Room/index.html","e216bf607a883808464e8bb2073a22fc"],["/tags/Pleiades-Company/index.html","410aed7e4d3ceb9017448c470921312f"],["/tags/Reverv/index.html","c119be37b8c7443b85791995d904c70e"],["/tags/Saihate-SOFT/index.html","1f44f4aa69283b4f6ecde315972e82ca"],["/tags/StrayMoon/index.html","5819fe680aa7eb4380d0e7ad4c4fdce1"],["/tags/Studio-Bu-Sa/index.html","19bcf7495bcc8080a88233262bead69d"],["/tags/ToHeart/index.html","bb5528a5b1fbcc8399fd266fa07373d6"],["/tags/Traumend/index.html","1750f72e882b5fd6bee9adb89f872374"],["/tags/Witch/index.html","59e0475edc80bcfd2ade74e54ed22476"],["/tags/adonis-project/index.html","47e5139b33082ffdbf87487740664274"],["/tags/flash/index.html","b7bc66b2c7854c7d123a9366f94c7c8d"],["/tags/galgame/index.html","faf9e64805021330bcf50dd11c23a54d"],["/tags/galgame/page/2/index.html","9bac3bd9c17e5e4a2b968aa01f17cb49"],["/tags/gal资源/index.html","53c9e7131e7460f3eab25807f9d879fc"],["/tags/gal资源/page/2/index.html","3ae0c54446943d3b4bcc553327c085ec"],["/tags/gal资源/page/3/index.html","4d24eaf1355779b187feea30b6b832de"],["/tags/index.html","e329c027656b9900fef9e52912df85a9"],["/tags/rkr/index.html","f8753141b43adff010e9d747e377e932"],["/tags/team-eye-mask/index.html","c02a485af4b1510fcd3d2bbcac93f372"],["/tags/ありすくろいつ/index.html","c4c927a239a2b2230a0bd595df30f571"],["/tags/いつものところ/index.html","a12f846135345742763eaf6ce1dd60e2"],["/tags/きつねみみ饅頭/index.html","a9cdb6c5b629e990882f675d6e635ae6"],["/tags/ねこねこソフト/index.html","111fd3c80b854e62bac5e168761497a8"],["/tags/ねこバナナ/index.html","d3a3f449dfc08968891f56abb216a923"],["/tags/はちみつくまさん/index.html","73aff4840e6c774d6809c43359fc6ec2"],["/tags/ろりちせ/index.html","ee6365e170776d584ffc0a33e07e0e8c"],["/tags/アイル【チーム・TATU】/index.html","2e288c24a91295ffd6ffa2dc8cb1e542"],["/tags/アークシステムワークス/index.html","b7f72bcd3a17e61a6139ff2832cfddac"],["/tags/ブロッコリー/index.html","42fe497d5f572ccf290627d8c03b8a65"],["/tags/乙女/index.html","34e4cce29a42667f6034bf36107addf7"],["/tags/停产/index.html","c460622452f3af41d1e86f9ddf3a7b97"],["/tags/公告/index.html","182bed901e2727bcdd2657f631899030"],["/tags/同人/index.html","c39237ecc5bdfb1b041fc50ba8af4eec"],["/tags/堀井雄二/index.html","908df7b0fb4b30fdf38ac21c8fb7e047"],["/tags/外海なおき/index.html","13509d0ec4863b0ed3edf03639b59f0d"],["/tags/機械式少女/index.html","611ec5f9be9e6aaf4f0ae55285299efa"],["/tags/水仙/index.html","239aa66952130f79652812f3ef8745ab"],["/tags/汉化/index.html","eae07e3714f4985969607ec54567181a"],["/tags/片冈智/index.html","dc17fecd00e467a54aa1cbc9121f5c03"],["/tags/片岡とも/index.html","baa16518ef69098c52910a607c2c48cd"],["/tags/牙の刻印制作委員会/index.html","9bf49792156b0b91d175acc4c4a9ce97"],["/tags/牛カルビ定食-FLAT/index.html","98c75e07b3760eb40e0a3120d5b45275"],["/tags/牧尾屋/index.html","140eefe174c7cb69d9325732cb4201d3"],["/tags/猫猫社/index.html","350c017c5cea3b0db4141c4614e763da"],["/tags/王宮魔法劇団/index.html","d5797ea5d393202e1bba062bb2880d9f"],["/tags/画集/index.html","ea846ca9b9e5771eabbe42220427ef0b"],["/tags/索引/index.html","ba3d5555167925b35ecd150cc40d2fd4"],["/tags/自购/index.html","76341109f710c9f407fcaae9b0147d8c"],["/tags/郷愁花屋/index.html","edb9c5b09660f294e754185fa574da15"],["/tags/閂夜明/index.html","faee7d43e839fd469e7b324909be220a"],["/tags/音乐美/index.html","8dc569eee8b3d38e5822c2a135aa0c90"],["/tags/黒†救/index.html","18493f03b08d8efa97a44c386846114d"]];
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
