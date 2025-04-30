/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","4a951d11c07f147920150243d5a7f4f1"],["/archives/2024/04/index.html","da490d753b996c2638861f713e3b297f"],["/archives/2024/index.html","1e451e3cdeb92b799576db2e9db76901"],["/archives/2025/02/index.html","fba5439eee12495e1b9fb511854775b1"],["/archives/2025/02/page/2/index.html","85848c6dcd3ed2c484a21345e646a498"],["/archives/2025/02/page/3/index.html","de0c961c79bea1e3b4e27cc7f7f7b823"],["/archives/2025/02/page/4/index.html","8dc0bd66e40a8d39e7ca87d38fcbe0ba"],["/archives/2025/02/page/5/index.html","5a60e9f0606111d6c7a4fcf57ce051a0"],["/archives/2025/03/index.html","ef03aac801778c039920701daedd91d6"],["/archives/2025/03/page/2/index.html","b24bbec2ae76e95503cb7d1d57c9ff59"],["/archives/2025/03/page/3/index.html","0b032f2e4bfb962c583f032679cd1600"],["/archives/2025/03/page/4/index.html","8272e9f6dd8e618234d185e12c3b8131"],["/archives/2025/03/page/5/index.html","6ceddcdce65166acf9443f9b9d2af570"],["/archives/2025/03/page/6/index.html","5f3883aab58f1510fe17871f0c06d427"],["/archives/2025/04/index.html","62a7c99ecdb011ead3b8c6b38a9e0456"],["/archives/2025/04/page/2/index.html","06aeed26d545b9b412c4a9cafd60fe99"],["/archives/2025/04/page/3/index.html","ccf39d9ac784d10a3a66c87cd8ce0ab2"],["/archives/2025/index.html","fbee3cde078a02cf64635924289794fc"],["/archives/2025/page/10/index.html","6914e49ae578d792d58a769d6d420dbf"],["/archives/2025/page/11/index.html","be9e2f07f11e29a12c084f078792e1f5"],["/archives/2025/page/12/index.html","0e14ef67c938c57cecf68021c8eb1856"],["/archives/2025/page/13/index.html","29a314ff8c7d76166009f4f1f874d854"],["/archives/2025/page/14/index.html","ed223151351e90e0e7a199ad389b7172"],["/archives/2025/page/2/index.html","d16ff03e081607f3e09068be0c9b6159"],["/archives/2025/page/3/index.html","e76c45f30c598650093e48fd5c9b347a"],["/archives/2025/page/4/index.html","683084c8d1f21161e8e4b29f38a275e8"],["/archives/2025/page/5/index.html","1d4d78b9d099028913007f95bb19902c"],["/archives/2025/page/6/index.html","c93d75afe403df8f3af6c3049a3e3abb"],["/archives/2025/page/7/index.html","31ab96336e5b81a27c9b123d06a59f99"],["/archives/2025/page/8/index.html","cc5896af4ef7e7e466740bfe492e7c9e"],["/archives/2025/page/9/index.html","b6f453e710979a10fc8ce398420ad701"],["/archives/2026/02/index.html","bdce16b6dab181d1fdcd8e6121b19ad7"],["/archives/2026/index.html","58eb09724c1b76773642eb58a9d4c2a2"],["/archives/2825/04/index.html","93c65a0fc039a89f25a26fece23304fb"],["/archives/2825/index.html","12dd44693c592dafff398ce2234c9a32"],["/archives/2925/01/index.html","d94a9877f18e306080287dcc1ddbd31d"],["/archives/2925/index.html","e025996d8dc887b7a420f90da8f8f60b"],["/archives/index.html","22424cc902f9a8d1cfb76f1c4f725514"],["/archives/page/10/index.html","4eee47063cff75f43bf94fd408af4010"],["/archives/page/11/index.html","2c32b6988c87d6e048baeb01750467c8"],["/archives/page/12/index.html","dc6f8f7148775d69e0e58fa54f3ebad7"],["/archives/page/13/index.html","98abfbb00db31e514df424ee54fad019"],["/archives/page/14/index.html","d5ce0a7b6a703f54c88869cfe716aeec"],["/archives/page/2/index.html","634429adfd1fe8609ae60a572f370969"],["/archives/page/3/index.html","8ae98abaf73306fa251780d6ac5878a1"],["/archives/page/4/index.html","700fdd20d880a8076a29b310d0547d63"],["/archives/page/5/index.html","b9ec26b6ac26b4515f22feb680a21e4f"],["/archives/page/6/index.html","e952d07d4fc133eabffcff1263163347"],["/archives/page/7/index.html","600911ba670548efae6cde542d9af37d"],["/archives/page/8/index.html","d61a11f00abb72851edbcd669761250c"],["/archives/page/9/index.html","4d69bd223d1bbb61fd06a19d5fa3bea0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","b0128e8d19668b18d2fca66e8bb3d910"],["/categories/galgame/page/2/index.html","1f634692237ab256193732bbca51b928"],["/categories/公告/index.html","33f5c23082f7ff5cb6ffe355d1314e68"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","a7b92639bf93dd791966712e9d76fa44"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","15c86c9fb53c782934a7a73542fc2a08"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","e953ef93e7be8b171931b705600b9b15"],["/page/10/index.html","7578be0e0b6252cd3cce1c5d845b00ae"],["/page/11/index.html","f3b583fa8273f8f1018d3921be374631"],["/page/12/index.html","493428cff7dadd039c4f7b14ee078f76"],["/page/13/index.html","7be1df4a8a42a4948db13c451afcd768"],["/page/14/index.html","c0ac1cc400290983bb36dd41bfb2354a"],["/page/2/index.html","1264b03e351fd40ab8ca98bb8d32cc68"],["/page/3/index.html","06755fe1d57267014a0e18e30a7633d7"],["/page/4/index.html","dd6cb7b4caf53a17c0d3fb779612025d"],["/page/5/index.html","bc9d76a352f28b68d76300a8e7625bce"],["/page/6/index.html","079792d1f3e616ffd5dbc1d627b0570a"],["/page/7/index.html","f4ebcbfd7ca632bd5afb033a6cd74e6b"],["/page/8/index.html","a6b3a70837530381d18f59cd8001067e"],["/page/9/index.html","5be0e59ae5d6ed6d13df5cb4fcb058db"],["/posts/10c9dd98.html","7f214d722dadd0ebd750e4ffceaa1d08"],["/posts/126ebb99.html","b07dc346aeafa3255ec6bc597a57c093"],["/posts/1295b569.html","521037f8b699d02acca9aadc8b9aa5a3"],["/posts/1370342.html","7656578d028b9466e2c2b8e27f848f62"],["/posts/15ef14c2.html","9c07f1df88e73481a2f8c79417c52b75"],["/posts/15f3959d.html","4f39b581c5e02f40f5b23a7399aa98de"],["/posts/18ab785d.html","e36fcfb56aeffa7e1ebcb4fe8b6612bb"],["/posts/1d59b71f.html","aafb577dd1d7cea023f67368c8db7d21"],["/posts/20b3f3a4.html","6bc262fba82156116a13f446ba07355c"],["/posts/245f1c7d.html","5468b20e1e43071045442dd658485d5a"],["/posts/252658f.html","ed3272a2646a76d9c825ec15d6c36171"],["/posts/28397adc.html","108071d9fabb40a9541e62f19613ba44"],["/posts/2ad07f54.html","d0ec68f4d68f2a5da60ab38e1822040a"],["/posts/2b38bce0.html","99968d3914c42dec52233019df83af69"],["/posts/2c0a6836.html","08b4e20d80450174e49f233010929437"],["/posts/2ce39bcc.html","30738459a905dd1722f0e89107e492bb"],["/posts/2cf620f0.html","f7092bcab132cd6cfe35aa76c5122c98"],["/posts/2e30fd6d.html","6fc41f5c6bccd023b6fc375638f404ee"],["/posts/30a413ad.html","de264daadbbd1deb2620285929913382"],["/posts/34292736.html","d633101dc4c3a895a89f94e7f09e428f"],["/posts/3468cbe.html","90b8de00439ece708ab91db5b9f41fcb"],["/posts/39176dc0.html","bc43aa330454a19dbc784baf6ce86960"],["/posts/3e118dbf.html","61ebdaa6047e45c5530c05ae23b9058c"],["/posts/3f7d823a.html","0a620dd7a976e9dd97d4695cb42e2687"],["/posts/3f978819.html","eabb9d2fb4672d32be2f9857438d6605"],["/posts/41dac80e.html","d1b262ea0686ec58f51c88fae36529a3"],["/posts/43945723.html","661bb0cb74f3f00edf5cf77d44c642f7"],["/posts/44124a6b.html","344634769a3be1493cb0e0f01ea363a4"],["/posts/47abb61d.html","9c9222961eccffdaf739034c68e263cf"],["/posts/4996478a.html","1f21eb2b91f35c3fc43123319c016ff4"],["/posts/4b689be3.html","4aebf99728bc91a242d5bf78a9dba7e3"],["/posts/4cf8423f.html","61362a9247a77b7eb790e356f863e6fb"],["/posts/4dcf85c.html","595a4689dfebe0d4631543986f6a9754"],["/posts/500cd322.html","0f244b0c3f68a11e25d750e995eb047c"],["/posts/51c9b1ff.html","3492e5110985d3f6213064c5d4374606"],["/posts/52b5b3c6.html","97dfd39c48980259fe372896fae3b030"],["/posts/54f496ad.html","8e8e88aae8c5ba96c0d25c46217b9872"],["/posts/558e1f30.html","8fca1741d9ec066c6fa805b3f60d55af"],["/posts/5d8bea92.html","11c4b83f8b105255a10d3097a11cffa9"],["/posts/5f6e0c59.html","288a2a7288186d4d839505b04347915d"],["/posts/61a63a84.html","bb82fe97b50e6c587a64077740b8077d"],["/posts/625ab7bf.html","843c4587f532e2554d04b0f01d1258c9"],["/posts/6336a2f9.html","5d5a833f841c58b7fabaa3228ef019c6"],["/posts/6432d61a.html","0b39eda70d999d663d3e5e9ea8f39e67"],["/posts/6515f032.html","f199cfbe90b78a15f43ee1079ec7f365"],["/posts/6720ccdd.html","b323618c57b3f12fd75b0e429d9f36ef"],["/posts/6a4b5ac8.html","29f6fb4991418cf36179ab5167cdd93d"],["/posts/6aa4177c.html","a2590f37a04cff82a469ee01361f1f8b"],["/posts/6b15f81f.html","1b99f04134cc4cd5fdddb4512dacbf22"],["/posts/71131d34.html","e4db2fe3ef97a938c418ebc15d01fb52"],["/posts/742fd48d.html","48284c119e7e13c3b349f270f81e1086"],["/posts/78a8a8d3.html","42690390d6e024da3c1f748f8e5acb75"],["/posts/7a5ef3d0.html","73634ce715adf8c260255e3fd5c44aac"],["/posts/7b41e1ac.html","8fc13d7e31019fe2efbea291c2eebe43"],["/posts/7b51011d.html","6548ba68e6a3e74727b9205834dbe727"],["/posts/7e3aa3e2.html","099f031c210c58d00eb60b8023f93415"],["/posts/80fe2691.html","88a85292e4decd32f90fdd32b24ca191"],["/posts/81ac52e9.html","c8ae2090bb86a01cbe3147484873b100"],["/posts/82332d11.html","79d96a63bfe13800c143f723cab342bc"],["/posts/8486f6f9.html","8593d531e93840bde867fa7fa511795b"],["/posts/849b40f8.html","86c9897afac1a79dbea637256304f37b"],["/posts/85c51d68.html","2c7e6ba53aea8b1b25e8f79a665b278a"],["/posts/86a6c500.html","284e87354cc292f22e65ec54325cdbd4"],["/posts/886f8d3.html","4cd5a994ad2130fbd00671c4bb369f37"],["/posts/8a7cba10.html","e45a6b8d3c3bea2da9d50e0da3c87cf6"],["/posts/8ac11b41.html","560f4d12f73607810723dea560ee123d"],["/posts/8dd520d9.html","7e5619c51dacfed7b8a67d4c4ad629c6"],["/posts/8f555654.html","a98cbc9efb1c74a79790e38d15e76b01"],["/posts/92a980c2.html","9a283cf577710713502a3d510adea021"],["/posts/92ce16.html","cad0fe3821eccbb17018c984c7d77a1b"],["/posts/93e9943b.html","eebba79bf8e9ce8743f7f148f7c620ed"],["/posts/94d3c794.html","7d7f79d8e38b2fd7e7580776ea86b859"],["/posts/96b281f2.html","f38421fb9cb2ad35b950dc5ffec59070"],["/posts/97f50eea.html","6f75920060e8a7de240ebc185c50bfdf"],["/posts/97fca8be.html","469c330220910a8ff9f0596379125a65"],["/posts/98662d05.html","647ea6d487edc2f57f0fbab69869d897"],["/posts/9a2f6162.html","fbaaed719fac53659521b85fbe1f2877"],["/posts/9b22a48d.html","69f32d047a4cb303ac7a82ae8a464f69"],["/posts/9cb455b1.html","cd39e18dca4b11bf8268dab542d6f57e"],["/posts/9ecdeecc.html","0ccfc8847901e7b6da2141e4c46d2544"],["/posts/9efd7701.html","7454ac03282f211edeb480df86bf2140"],["/posts/9f61c1a0.html","bd5de7d90b3e09f7be420d96c7f803f4"],["/posts/a1de710.html","cfccdf6ff6acff29b046b6db7affa241"],["/posts/a30eb0cd.html","8d617281f96952724feec1bb8631ef3d"],["/posts/a7634b5d.html","38697ede6bb462a54e7b12a7698395b4"],["/posts/a8c593b5.html","62391e165e651bd72e821e8239cfdebc"],["/posts/ad0c1efa.html","e36c7bb79090227d654915383a858057"],["/posts/ada3f440.html","a591f678cc487de827e15b11fcb53eb7"],["/posts/af1807ef.html","42c67e9107b711f6825be1a923c0eef4"],["/posts/b397bf03.html","91f8d925a103e56071e52e548b6e1c76"],["/posts/b497b647.html","c0d6c2aebbfc5bb33c7f2b622d3d5342"],["/posts/b4d464b0.html","e4b995fb71fd6b8a2f644dfb773be742"],["/posts/b5fb773f.html","11782e40a71a785865294f790ee012c8"],["/posts/b8d46b32.html","39136aeb4f0959e9842cdc9685a0b3e9"],["/posts/c1b2c6c9.html","86eea734f5ff476e059f1d9ef1390582"],["/posts/c2111cbf.html","247ea6effa9857531f42612d3dd4efda"],["/posts/c316c2e8.html","1adb2ef31e44bec80733a35c44908d7d"],["/posts/c43e60b5.html","ab1806ad873f21568c49288a8ae8a84b"],["/posts/c497a412.html","f9d0fae1c5979b5b259813348f2a5942"],["/posts/c5395ba3.html","608c3a7ac5b77615af3e2f3d6da690f0"],["/posts/c5de299a.html","c682fd0379ef44f245dca20244244176"],["/posts/c70bba9c.html","e3a97c5dc32afbbd56876d2001c6d1a4"],["/posts/c797535e.html","9338fd385e0f52504533d592b6c8061e"],["/posts/c7a62c79.html","5169858e8f9ee3c5203130a909fc1acc"],["/posts/cae2c959.html","085a0dabcdbb6db728ad778b00e365cc"],["/posts/cbebef2b.html","2c15350eac2f3839935f14358d901a9f"],["/posts/cc4c0017.html","f341147f013aaa5872c77648cad71d0f"],["/posts/ce25023e.html","61e65611412d67cb273b5d3c6e48a935"],["/posts/d2fd4837.html","26b3a7d0703d2376cb9ba715233d3725"],["/posts/d3233cbb.html","9829762e9f30e3d72dd25d8dbf696a95"],["/posts/d3a745a8.html","bbdfd03499681949f5796c198454847b"],["/posts/d7e940d2.html","a7502254468e8461887719dbc2ad5a83"],["/posts/dc815d5.html","6ef6153456a487d71ca23e0cf56f48bb"],["/posts/de25b0be.html","8dbc886c619e7797864ee7f0ca5f463a"],["/posts/e2623b4e.html","be8a1ea02ad9ac6ebfeff469f31e2cc4"],["/posts/e3ab6ad8.html","cb90e349a55b069362fb0e01b34c67ff"],["/posts/e5018da6.html","3194405129c8c06fd63aeb631c6e6e15"],["/posts/e5963272.html","3421c69552a9730b0ac580f186bd3298"],["/posts/e5ef4c3c.html","8d4f17852eccb6519e1508f4b95efb9f"],["/posts/e624b065.html","28032a6adfaf13c15d92f0d9be13c8af"],["/posts/e7c703bb.html","1c539e96f2e03cf5b51db57939e279b9"],["/posts/e8f14b6c.html","62bd18057b488efde3eb56f34d135117"],["/posts/e91abb63.html","cd21bdadb5a418d3a8a0e757cf6ce2bb"],["/posts/ea9a8808.html","a8660a1882f966b4d9b57070ab8174a3"],["/posts/eb784749.html","9ca31a5c2b6299c5d28478a85bc00fca"],["/posts/ebaf2232.html","62f2e5680f2fd9d10cedf0a29cb67dee"],["/posts/ed75f185.html","b046f0304c485519671b2f42e4d0115e"],["/posts/ee1ed673.html","423f2df80d43158342b30acf162da35b"],["/posts/f0c3ed61.html","af4f3e9ee3162c23163f584efc0a59d3"],["/posts/f151ff43.html","e87066a32b1bf3c026a26a1733e06b9b"],["/posts/f21e7f84.html","2e3c6a553578b66b528ef944febac7ce"],["/posts/f230b0fd.html","77974fbbe69488bd521877d7381d0c6e"],["/posts/f28a7877.html","c97e3ab8c8c0ad364710ff3a56651449"],["/posts/f663d5cc.html","30303397d71dd2f82ecd7daa972666b4"],["/posts/f730ad18.html","440c41756d94b604996a61cb4678b148"],["/posts/fc04d0d4.html","e32f90d1854ceef8ba84d47588de3bfa"],["/sumire/index.html","b809389487c81018b63b8a000c0cc844"],["/sw-register.js","1f6e676c272eb89f1b1631eab0514fe7"],["/tags/APPLE-project/index.html","fb89f9f8c42bcbd5325cb5b365dc1625"],["/tags/Ankrache/index.html","7a93a5982088369e363b30da51b6058e"],["/tags/BELL-DA/index.html","d1e1b5cc8e54f552ceb95e31674d14d1"],["/tags/BL-Game/index.html","da2abab52988ed88d1cdce77951550cb"],["/tags/Blue-Dahlia-Digital-Creators/index.html","de7de861016b662b4d40cb4d7b950b9b"],["/tags/Blue-Line-Games/index.html","23313f002709ebb9f8826e18c6e4865a"],["/tags/CHUNSOFT/index.html","99fa43d7ac00ecdadb34748800e3b01e"],["/tags/Check＆Stripe/index.html","351a15e121a47801a8ff5eb207851aea"],["/tags/Cherry-Pie/index.html","706f06826fe01e99efcd6eae4ffe7966"],["/tags/Circle-Mebius/index.html","9123f5261bb64862391f334dad371a95"],["/tags/CresCENT-BLANK/index.html","c86fa89e4b7eb53ba62124a5a82f5e8e"],["/tags/Dopamine-Software/index.html","abc7ea059f6d4489c2988e6ccd5c0de7"],["/tags/Dos/index.html","76313ba0757fb3d64d4469892e9372b9"],["/tags/Earth-Well/index.html","f0cafe92ecfa331b79f423d64b2a4e17"],["/tags/Forest/index.html","6f7c6ba52710053cf191fb982f74f054"],["/tags/HaccaWorks/index.html","2fa99e6e1c85988408746c4028193f7b"],["/tags/Kanon/index.html","585eef007dab1595265f7673a965f3f9"],["/tags/MANATSU-8/index.html","13792dfa9b903b0d13ad7fd3df90636b"],["/tags/MARINE/index.html","df6b9214f2e3a5761cf4457b7718aaff"],["/tags/MIO/index.html","bcb393803d8613823ea5cf858727c619"],["/tags/NAOX/index.html","0a4778dd6e957f7ce2966505869493fd"],["/tags/Nmyu/index.html","e20c816edd59ffcbebe3d6dcdf124120"],["/tags/O-S-I/index.html","ce1242d5bc889564347552644e90d7d4"],["/tags/Omegaの視界/index.html","fdbadd8e51b8031d57a6b38b1bf355f7"],["/tags/PC88/index.html","18d04ea4e79c4adabab60c40f02cc442"],["/tags/PC98/index.html","38eafb91067a22413ff2edcbe0b4c2f3"],["/tags/Perpetual-Room/index.html","38748da628d3dd7baebad348364a680f"],["/tags/Pleiades-Company/index.html","298e3cc90f56830b48ca53bfa38bfca8"],["/tags/Project-Twintail/index.html","9d763d70bebfec78c12c5175f692eed1"],["/tags/RIFF-RAFF/index.html","044970cc8d81447b638b8ac8f021c380"],["/tags/RPG2000/index.html","7db772057f146c52dcdf9720b48030d8"],["/tags/Reverv/index.html","99c07d420a3a840c48578a7544049552"],["/tags/SENTIVE/index.html","85df1ee84036c51a4cba1c2c39adf66c"],["/tags/Saihate-SOFT/index.html","278947868043f9bfa933a057257c1f97"],["/tags/Scrubbing/index.html","b22e65065dc692deed76baf8a72aaf66"],["/tags/Sky-On-R-imaginAtion/index.html","4372806b5a0b3446caa40d36c478adfc"],["/tags/StrayMoon/index.html","933081d62a95c4ed1c68322592463e5b"],["/tags/Studio-Bu-Sa/index.html","d65ab7b66fbd7d39bc4328bea34f85f9"],["/tags/TRANSPARENCY/index.html","be5333c62d546f7499502770929a8df3"],["/tags/ToHeart/index.html","6284fa477deb17b585fd5b392cb83c81"],["/tags/Traumend/index.html","2b9cf5546db115b39cd0929d2c8a8e17"],["/tags/Witch/index.html","1ee44a92ecd77a4b5719786c60405b99"],["/tags/adonis-project/index.html","8c1d4542fb515d1b7a234c5221c4a93b"],["/tags/capriccio-suite/index.html","83949c9343f8cbb460c637264940e6b7"],["/tags/flash/index.html","a0480e75b600eb7005e3bac92ff36448"],["/tags/galgame/index.html","c5f10805c5d519367adb1011a3b15b50"],["/tags/galgame/page/2/index.html","2fcbe4f12fc592fa10350dc22209b96e"],["/tags/gal资源/index.html","e4faf67526fcb5daaa7c92943fd3bf39"],["/tags/gal资源/page/2/index.html","bb4a54f4bdc38354395768a3fc08d747"],["/tags/gal资源/page/3/index.html","0e3985ff89b9947df702a0449ce908db"],["/tags/index.html","1c5f7f478d3433d10b213c33c5bd7347"],["/tags/purgatory/index.html","758c33835b7048800731c2403bd087f1"],["/tags/rkr/index.html","780edef5cdaef15906fa5af4c8fa8979"],["/tags/team-eye-mask/index.html","009fa101fed0fc1e5d0a84be7546e46b"],["/tags/ありすくろいつ/index.html","ddf0263442569111a5db5ef2387c3221"],["/tags/いつものところ/index.html","0534922461fc2c2f0d31bf336b3cd2f9"],["/tags/きつねみみ饅頭/index.html","ce259472c32513cb32aac404a5b6b115"],["/tags/ねこねこソフト/index.html","499c9ed35726f4d337bef0df3e1098ce"],["/tags/ねこバナナ/index.html","37365807deb9e058074bf4e3070802bc"],["/tags/はちみつくまさん/index.html","9ddb07e5bcbd845770719067eb6e3fd5"],["/tags/ろりちせ/index.html","c51216cc0c7de30f98736b3e32615f46"],["/tags/アイル【チーム・TATU】/index.html","278a0457a8bc8ce1cc07df3d4f6506f9"],["/tags/アクアポラリス/index.html","279d9bdc55c108296f435d6601633eff"],["/tags/アークシステムワークス/index.html","87b8e3d611a7d357736a19f1e230e1f2"],["/tags/ブロッコリー/index.html","048930c701b8b2af4bf2556855069923"],["/tags/乙女/index.html","da8b92196035e74b54f66a7f50279a73"],["/tags/乙游/index.html","121f8eeb9028756ee2f3536445ee5b20"],["/tags/停产/index.html","c90fede1200883b83e10a7444857aa2d"],["/tags/公告/index.html","7deef05d917b1dab42cdf8ad1068b6d2"],["/tags/同人/index.html","2ea69cb353b56d5eacd1ea87ba426b3d"],["/tags/堀井雄二/index.html","26d046bd9738d70c13732e5118e9279b"],["/tags/外海なおき/index.html","d18186695c74888060f9eac5cd0e2aad"],["/tags/女性向/index.html","4175f678cc6fae01887eb589c36f621d"],["/tags/御茶ノ水電子製作所/index.html","a4e22ffc2d324f9ba5bbdf1ca8ff4405"],["/tags/月の水/index.html","39d44f0216827b011e788c2290afe619"],["/tags/桃野衿/index.html","9e704e741bfc8fa6bbdba509e30d722f"],["/tags/機械式少女/index.html","673733411c8f0195a24a6f40dc9e1d2b"],["/tags/水仙/index.html","18ca689d633357a361450c63ffa0fcc9"],["/tags/汉化/index.html","66bf2411a1effc94386dbd5c26722fc5"],["/tags/熊月温泉/index.html","4a27757a1f5ce1bc4c479c70123acc2c"],["/tags/片冈智/index.html","bc21109fb631ea9aa6aa3be88ad438bb"],["/tags/片岡とも/index.html","e5678b710bf5857bdd18305e67d72615"],["/tags/牙の刻印制作委員会/index.html","b3927399cb9d14b87d2b272fd896418c"],["/tags/牛カルビ定食-FLAT/index.html","122b59453ec3bf5fa6d2fba7842d01e8"],["/tags/牧尾屋/index.html","0e1c323945fb12f53979d00488665415"],["/tags/犬茶屋/index.html","ba5a280b49056fe233bb7e634ebb3de9"],["/tags/猫猫社/index.html","4288688db12ecd9c4015d2dc5fbf2771"],["/tags/王宮魔法劇団/index.html","2054abfd69f88e57610ffe5eb445f97f"],["/tags/画集/index.html","f8808e8d1e84dfb15b92a864e4352fdb"],["/tags/索引/index.html","1f308771c2c5bf0945bd8d615874dadc"],["/tags/缺失/index.html","c50c719b1d41235aca47686a8b4a63df"],["/tags/自购/index.html","6ee24e00743ef378089edbb62e73e2a6"],["/tags/茶葉☆姫/index.html","76a7ff5591b331db4c05e5d001075c9c"],["/tags/郷愁花屋/index.html","4c28d8298aef038d070f6e04fdbe608a"],["/tags/閂夜明/index.html","ec1e97c1ffa3af84688b53dd6d0a9661"],["/tags/音乐美/index.html","ba3ec51eacd6ba7278b09b2a1a5bc464"],["/tags/黒†救/index.html","49ee6a8060bbf605f92bf421198a506c"]];
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
