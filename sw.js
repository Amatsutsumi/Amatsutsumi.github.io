/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","ec934a8f7c8f98075c80751130f1d960"],["/archives/2024/04/index.html","2725057470c4f4c29a38319b6c44d40c"],["/archives/2024/index.html","3f835ec45e4353dea9ab37b22375b2ee"],["/archives/2025/02/index.html","27ef9e66f3dbb460a2d3d78e58ef2853"],["/archives/2025/02/page/2/index.html","37054a8c78eb61ab9260bdf35c36c3d4"],["/archives/2025/02/page/3/index.html","60222013ddd975ac0e698a0190f6922c"],["/archives/2025/02/page/4/index.html","46fb2bb3cf022c708667ff7a790882b3"],["/archives/2025/02/page/5/index.html","dc43aff151fa494a7f46e96edac95f15"],["/archives/2025/03/index.html","62caba042908e973ac98d953d64c05f8"],["/archives/2025/03/page/2/index.html","89fd3e8432b340b5d18973e063e89f28"],["/archives/2025/03/page/3/index.html","07357cdd38adc2bd21090f199e800676"],["/archives/2025/03/page/4/index.html","134e6d4993d4a8013ba33b28440f6b72"],["/archives/2025/03/page/5/index.html","61908907f93a8d5807f882cc0bcb3289"],["/archives/2025/03/page/6/index.html","99d4fb6972afcd7f0a47afe3c9c4547f"],["/archives/2025/04/index.html","4493ab0bfc4f4234a8eb6984a2b68bcb"],["/archives/2025/04/page/2/index.html","330e7dbd61c82697ea84a74bcecad85f"],["/archives/2025/04/page/3/index.html","f113cc95fd2bcb1fbe835b87b2a6d855"],["/archives/2025/index.html","9ed1f07a06a13ef7d63bec7547211b54"],["/archives/2025/page/10/index.html","568048bf20949b0a288d9a1de08fa717"],["/archives/2025/page/11/index.html","444326d2acb31e0f5059fbccf0b390ca"],["/archives/2025/page/12/index.html","552b789ab263d9e028914f68139c5116"],["/archives/2025/page/13/index.html","8f0b9178c029535eb9cc5c4a68958a8c"],["/archives/2025/page/14/index.html","e77998d37572e6375019dcb8f2f2ee4a"],["/archives/2025/page/2/index.html","e962a26eda297e8628b96d4a50d07cbf"],["/archives/2025/page/3/index.html","c30a7281660d050c3d4413df2ff3aacf"],["/archives/2025/page/4/index.html","355c527d1684f85f5254a0c445e0bd97"],["/archives/2025/page/5/index.html","1d342be80a3b6cd663e7255cedd1f39f"],["/archives/2025/page/6/index.html","f5cfe4eb02042289ff986c2133bb1de8"],["/archives/2025/page/7/index.html","16cccbc2ae03cd1ebf9377db10a4bda5"],["/archives/2025/page/8/index.html","40d8a893a020deaddaec9cac016bb83d"],["/archives/2025/page/9/index.html","e03417b38dfc02cda43736fde2ed5231"],["/archives/2026/02/index.html","1c34cca0e20675127db281f5cff9c7c3"],["/archives/2026/index.html","a2c5f94829a294c4a6cab069a7a3419c"],["/archives/2825/04/index.html","ff6b54b4000c38991a922f3b338d142e"],["/archives/2825/index.html","2de492d586485595a464df51034a361b"],["/archives/2925/01/index.html","e9936fb6bed583b3ad061b2d815efccf"],["/archives/2925/index.html","d78e17e7a1f8bc69b34dcf655c95f999"],["/archives/index.html","74a08f85f8209349a2701c1f06f21262"],["/archives/page/10/index.html","3985e0e4abc4eef8f99c3df0b9dbca52"],["/archives/page/11/index.html","c1247f2be2125eb1d550d5d548cee9f3"],["/archives/page/12/index.html","af08815895f80c97e115a84bac897b23"],["/archives/page/13/index.html","1d33e8b12bf39302a392be91cf8ad431"],["/archives/page/14/index.html","2f5af6175fd47da64a71e1e0b32f1dd0"],["/archives/page/2/index.html","70149d4c50cdcffe0c9ecaeb3666907b"],["/archives/page/3/index.html","02d4efc4579dd593a3d8ff35fe9dccb2"],["/archives/page/4/index.html","75da401a0eeae0dc8183f9fe246e7122"],["/archives/page/5/index.html","4632c8301b95def3263db2a51d86b6c2"],["/archives/page/6/index.html","593ed71a35dcff113c82f20a921228d8"],["/archives/page/7/index.html","1844799c276a3be4037ac8437921189b"],["/archives/page/8/index.html","7f82caabddaf03b70086e34547e8425e"],["/archives/page/9/index.html","e3a007b45d9a3ff501e47415c5baee75"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","d1f9e25349b467d9df1e525bf19bab06"],["/categories/galgame/page/2/index.html","e9707e87c2e0cc69264811900ce77bbf"],["/categories/公告/index.html","3e8b4803d2ef730738fe456e3adffe4c"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","bcb711ac15189830645debf28f4a6ad1"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","2c91451ad9e8fd560a25dd47f7049734"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","cc23a815ddc87600152f0a9bdbcdf385"],["/page/10/index.html","43ea997d436a368b31949a551d16a2f7"],["/page/11/index.html","684bb4aa9566089f4e93fcc2e073e558"],["/page/12/index.html","0be83da0a7a8f646643051e6de859ec3"],["/page/13/index.html","aac8c8ff1d62d3e2e88ff10a198f9fa1"],["/page/14/index.html","75400021b36c0d90f8a68d80c4df5e36"],["/page/2/index.html","cd78f392283d876c3e1c6d4b66e46a86"],["/page/3/index.html","16964a80acca99475c61a5fc90514844"],["/page/4/index.html","ea3d92bf7050a364ea65d02316245ed9"],["/page/5/index.html","80af290f1b1e2956a10e5f9b26075d04"],["/page/6/index.html","18754a3f93975d57a0d7756761961421"],["/page/7/index.html","3c8fe0e12185a9a32ce0abd3545a9dbf"],["/page/8/index.html","493bea5cdc4b74fc1e664d89228cced9"],["/page/9/index.html","3038c0b35a732e3ac7006b27e1d4e35b"],["/posts/10c9dd98.html","3417f8d02485ac8597a7c6ba9d5b761a"],["/posts/126ebb99.html","4eb1698bed6a47d3a837c9c715bed408"],["/posts/1295b569.html","7a42205201c01a6d6f7fb77ae3b57343"],["/posts/1370342.html","ce23732219b551b95e82c01e5bf7eb87"],["/posts/15ef14c2.html","4b0e4d7217380f21647d001bb51d59c0"],["/posts/15f3959d.html","d7af37a78d6fd8f0a48434df6ce660c1"],["/posts/18ab785d.html","d6fdecbe1b92c4e9a630ba110396ed7e"],["/posts/1d59b71f.html","1dd954a819b08e09daf54a59f6ac0a3c"],["/posts/20b3f3a4.html","6665208bbf1c8f97849b4d3f22cc6d01"],["/posts/245f1c7d.html","c015c986b72abd5d7576d04bd9d75014"],["/posts/252658f.html","6a1d1ba04ce7f02cafdb98fb9f4b5457"],["/posts/28397adc.html","9f9931d4978c530098e81b29da2bf7eb"],["/posts/2ad07f54.html","81d2a872b8002a3dfade596471592bb2"],["/posts/2b38bce0.html","885735701dffe34d8a58be7b820c3772"],["/posts/2c0a6836.html","5b0884c35c28731bf355d47dc1688214"],["/posts/2ce39bcc.html","6506c892b9772fa8f996df167a345b49"],["/posts/2cf620f0.html","390f7530fe99419e144e5e9ab92680c4"],["/posts/2e30fd6d.html","966d5ff0b6d3c6fdeed1fb17e1ad41da"],["/posts/30a413ad.html","0bb9f93c69089068793b7d0e1fe9aefa"],["/posts/34292736.html","64fc259901f19e761ada633750b7f802"],["/posts/3468cbe.html","bae32caf0ecf31b64206d223a316fd79"],["/posts/39176dc0.html","9d4fa0ba43f153cda2e65030cd48f611"],["/posts/3e118dbf.html","af5f6b4dbc9b619eb22d9b3b87d04287"],["/posts/3f7d823a.html","ee0cfba6bc943ad012f0ce618cd5c942"],["/posts/3f978819.html","1213fe8b13b10adcefca03c57e4a8d61"],["/posts/41dac80e.html","1bff69f40eba4cc2fc49d8c0a92a8ec7"],["/posts/43945723.html","c633f4d46744858e49286c23e89773e4"],["/posts/44124a6b.html","155eb3af29c455198dce1c4865b48e85"],["/posts/47abb61d.html","035e54824a6ff4a50664f76138983131"],["/posts/4996478a.html","cd4c4489a204208ad2647542472f5561"],["/posts/4b689be3.html","917225f03fbaca6cd3ec22bda973d585"],["/posts/4cf8423f.html","379941fc0a7e6c7558aec08c3879227a"],["/posts/4dcf85c.html","bdf9b4d295f2dfe3cdbe1de62af3c1de"],["/posts/500cd322.html","1aa05ba2540c5c9e46f1fec0cd420cf2"],["/posts/51c9b1ff.html","8ccbede0472fbec1baa793721e15ddc2"],["/posts/52b5b3c6.html","768e3e351b903908c44faf1b4028415a"],["/posts/54f496ad.html","b99f99de97c2ce85e676ec4243d2ccac"],["/posts/558e1f30.html","54d7a47693292730b49eae54eae25418"],["/posts/5d8bea92.html","9e70d5f152e97d110390120e927b903f"],["/posts/5f6e0c59.html","8f75204d7d1d0d31051816fdd98c1de6"],["/posts/61a63a84.html","b82bfdf377b7f96f8ae2221b4333f57e"],["/posts/625ab7bf.html","fd0c67939297ff2198ba965b396b5c43"],["/posts/6336a2f9.html","862b4bbb4ea6407c30e012d91bde0955"],["/posts/6432d61a.html","5876f2ba7a8254bf612f2a3f7b2f1da3"],["/posts/6515f032.html","768e23317746bfa69ce7fcd7b3ac0fac"],["/posts/6720ccdd.html","d2fc57ffc84621e30cf13d08fc7ca89a"],["/posts/6a4b5ac8.html","86fd00bb885f710926a84f1f6d2d6503"],["/posts/6aa4177c.html","9c25371554c177d731e509525add09c6"],["/posts/6b15f81f.html","49338f88b771be078c71243490170865"],["/posts/71131d34.html","92e44e97a859d5760787dd17a8049578"],["/posts/742fd48d.html","66b4a108d911380db245f913bdde785e"],["/posts/78a8a8d3.html","8823757557841a36f3466a5aec7df523"],["/posts/7a5ef3d0.html","2b619fa12f4b94c83548f1a870f1eca2"],["/posts/7b41e1ac.html","2f02491ac242e4e49e77def0efa0823f"],["/posts/7b51011d.html","9dddbfa7be6a505eaea2df3a3353b404"],["/posts/7e3aa3e2.html","46e83185e3235ddd1225385d462d698c"],["/posts/80fe2691.html","7c849bdf6084285e7777d6400ce6f02d"],["/posts/81ac52e9.html","7ed039040b37d575bc2907289cf6afca"],["/posts/82332d11.html","08992a064ad7d9f97770f04fec8831df"],["/posts/8486f6f9.html","915b3ca1576231243b0c0161f491b0e4"],["/posts/849b40f8.html","abb952c2632c3b8297be01d57bfe040e"],["/posts/85c51d68.html","5a90af1f3b04b2623362e3714e7ddd0d"],["/posts/86a6c500.html","8005ab4fefad6e99b9151a23e6d45278"],["/posts/886f8d3.html","e71661af27376beebf65065ba13c7a4f"],["/posts/8a7cba10.html","75f6f2d279a768478340d8c52b9c205b"],["/posts/8ac11b41.html","200a1efd72ca265d964bcf5e8143119a"],["/posts/8dd520d9.html","c6846573188e3cad1fb69a3aba35b13f"],["/posts/8f555654.html","5436d9569c71f3453fe974688b7f2f3d"],["/posts/92a980c2.html","e714d4fffb93b2aeb0b885c409dd318d"],["/posts/92ce16.html","b01be0a6d5c27db61d55c2238a7c9e18"],["/posts/93e9943b.html","9c5629210807df566a37d3b2bb8957c4"],["/posts/94d3c794.html","8296c1d3a184b1c6f4add9a3757095a7"],["/posts/96b281f2.html","e60efb55919a4e5301cf1acabf431ed7"],["/posts/97f50eea.html","df1cd4112386d68b75de8feb0413123c"],["/posts/97fca8be.html","1410410f58216e1a9144206566f28f10"],["/posts/98662d05.html","11e3786aeecf51dc54c0f5f4cd41ba68"],["/posts/9a2f6162.html","1f3fcd81bb125edde901949058245c7a"],["/posts/9b22a48d.html","1b72b1cdfcf1c342eb097cb9edfb00c7"],["/posts/9cb455b1.html","6b3a6d0b1d1ae39d23fe5f0ba9fc2193"],["/posts/9ecdeecc.html","2a38f06ccea0e6d4cad87e75028aad02"],["/posts/9efd7701.html","e0f6111315d04f7bfa2025bdbd240a86"],["/posts/9f61c1a0.html","c1549c4043b8dffc20f7ae0973982b76"],["/posts/a1de710.html","abc2688ea548e23c767601bf4cbfcd4d"],["/posts/a30eb0cd.html","cb0919bfb58635761afef83cea4d0ca8"],["/posts/a7634b5d.html","240c30fb8273e61b7dc43792ac29ac3e"],["/posts/a8c593b5.html","2c740e27737c415104b391d1c55eb6ac"],["/posts/ad0c1efa.html","6778a85c37bc22b888dfb3429ec8affc"],["/posts/ada3f440.html","be4f72f3b88bdfe8199f50af5fc6ec9c"],["/posts/af1807ef.html","ca0474bca3dc786a7d2e2c3317fe1f10"],["/posts/b397bf03.html","d9a24c0ca56b0c2814ead6b4bfb05331"],["/posts/b497b647.html","505fcfaafa292d80d0e58542f93fdd97"],["/posts/b4d464b0.html","0cb8742e1727ebb690756ad908becba4"],["/posts/b5fb773f.html","7c9866b785bce57dca4b25a90425c1da"],["/posts/b8d46b32.html","6a42872c1de85734be4a06b0f031dbab"],["/posts/c1b2c6c9.html","6f9bd1127f7d998df48a7474a896b789"],["/posts/c2111cbf.html","786d90fb83210f6feaefce551838c608"],["/posts/c316c2e8.html","c656e03b7e7fa594f8a75f078731be9a"],["/posts/c43e60b5.html","65e94ddc2ea09e5249261d42fbae5f57"],["/posts/c497a412.html","f824593b566f3e35e1387f087417e10e"],["/posts/c5395ba3.html","83da569c023dcf1053c03fdc6372bab3"],["/posts/c5de299a.html","f6482bd307b14fe2949ec89cfef86b11"],["/posts/c70bba9c.html","aa410db713c0b4be101e24b299409b55"],["/posts/c797535e.html","c06b0df632388f13ef9db9e7301080f4"],["/posts/c7a62c79.html","54be481809b90dc765975eca48426176"],["/posts/cae2c959.html","37c9867fd3c7742bcb52a89b065bdcf8"],["/posts/cbebef2b.html","8acc0ec6e1a705a942f025327a0b24e5"],["/posts/cc4c0017.html","011c4a2f592d8176355d8a63a753f94b"],["/posts/ce25023e.html","e9d6978bacb30a4dd7e5a58a1ec0113c"],["/posts/d2fd4837.html","3a015f5ee10347419e4936277448b834"],["/posts/d3233cbb.html","25247a121d5aabde4e03adf2bf657ebc"],["/posts/d3a745a8.html","ff2146616569dcd814b83280898ba9f0"],["/posts/d7e940d2.html","e3df6d60a25ce44796eb187f6da10048"],["/posts/dc815d5.html","8b1fbee260b91d77fd2de7956307d111"],["/posts/de25b0be.html","21d8051f500bf4d3af3e5e5bcb881bb2"],["/posts/e2623b4e.html","9b94a5543a506c5273c45e4f55bf79db"],["/posts/e3ab6ad8.html","34fcde4dbb1da85fa4552aa4ce330694"],["/posts/e5018da6.html","b80cada79098a5cad1d9887b7bee0260"],["/posts/e5963272.html","78bc92732956175418548e2af70d59fb"],["/posts/e5ef4c3c.html","2747a5e56df753b80db0bf9477e9a262"],["/posts/e624b065.html","e3309b1df24647416e39b2d15a572af9"],["/posts/e7c703bb.html","5beba6cd22a425cc2f9deae9f4d74a82"],["/posts/e8f14b6c.html","94b5d1bc72d0dd96e91a3b26ff318d2b"],["/posts/e91abb63.html","767a5de330d34210cf28d611d64371ba"],["/posts/ea9a8808.html","217656d628f52e6c1309a4cb1c102685"],["/posts/eb784749.html","b1eae7d1b534e08728e98c5dfc409309"],["/posts/ebaf2232.html","2d1f671619725bfd85341bc572bc53c5"],["/posts/ed75f185.html","fe2a8b84701711137d6794207e28b90c"],["/posts/ee1ed673.html","5b2ab63b22a1e039fd0ae4428ab73656"],["/posts/f0c3ed61.html","dd07b0604589406240c4fbf611dfbc58"],["/posts/f151ff43.html","a24c3af0db3851bb4dd08baa9fa28199"],["/posts/f21e7f84.html","fd6861bcfbac269b07757cd0c894d701"],["/posts/f230b0fd.html","a044a94adcecd24f434072e0b0a7a403"],["/posts/f663d5cc.html","df8a03ba1bad25a4223723e1df0e4a50"],["/posts/f730ad18.html","35a64c137b94e765a05773470c496684"],["/posts/fc04d0d4.html","e9d1df12bb006556cbef67ce83062b36"],["/sumire/index.html","a3e242f9da9f112564f071dc9af59a37"],["/sw-register.js","8ffb362c0be0a3f335821354e70dca22"],["/tags/APPLE-project/index.html","069e1f3b2e8bd7e45eda0ff9fa00538c"],["/tags/Ankrache/index.html","6201f7bd9480b46e698b36c24a87f5bf"],["/tags/BELL-DA/index.html","90d9aa7f9cb76f28b43fd6f8d8c18dcf"],["/tags/BL-Game/index.html","036e993713c20fbfc01ce1b1c4407be1"],["/tags/Blue-Dahlia-Digital-Creators/index.html","b93baeda91294170254837cfded426f5"],["/tags/Blue-Line-Games/index.html","3d341b55f222a45632269f1432ebbbdb"],["/tags/CHUNSOFT/index.html","49c4f3f74356b49a55ef0403b382f22d"],["/tags/Check＆Stripe/index.html","702da790aa480c8120086bd7ee04e686"],["/tags/Cherry-Pie/index.html","86be07ced375ddcaabc17de42a681d23"],["/tags/Circle-Mebius/index.html","4a35c21074054abeb2f55c1022636928"],["/tags/CresCENT-BLANK/index.html","3aa30af01a3e4458a9473f1703f91025"],["/tags/Dopamine-Software/index.html","138e669bcc2f983923c5e5a8d7f60ca2"],["/tags/Dos/index.html","a3b41d88ff4c97ad80ffcf2cbad06fb7"],["/tags/Earth-Well/index.html","fc11e9959e6f13c1b4ab19c56d674505"],["/tags/Forest/index.html","d85c7c75ac3b57cf7e309ea83e6a2210"],["/tags/HaccaWorks/index.html","9bf020eb6dfcee161190a6d6078fe95a"],["/tags/Kanon/index.html","94da0f0cdbfd472fcc5ae191e8ddd8f8"],["/tags/MANATSU-8/index.html","6b2d37cfc9fc049bb71e6a1e32ec1a81"],["/tags/MARINE/index.html","398d3631a0f8aba7332ac5b541798eaa"],["/tags/MIO/index.html","f9f3e90a6ac371ef9b3ae157fd35aca6"],["/tags/NAOX/index.html","bb3b888a8170d4f24977506948350a91"],["/tags/Nmyu/index.html","821afb9a6ffb1eb202413fd5dbde96d4"],["/tags/O-S-I/index.html","7fccced7b871851423ed58596c38dd45"],["/tags/Omegaの視界/index.html","0815b63707485c643e6e7c3d1ae9625b"],["/tags/PC88/index.html","4d5171d90b7b1ff88c06f666f79ad4db"],["/tags/PC98/index.html","952bec8d12f5712078055a2f202ddf51"],["/tags/Perpetual-Room/index.html","1c7d039089cd01fe7eb8a2ba46429f05"],["/tags/Pleiades-Company/index.html","b1a2c7414898d687e498994e3a78a550"],["/tags/Project-Twintail/index.html","0ee0495281eaf57528e46cdf970d6d46"],["/tags/RIFF-RAFF/index.html","dcc7dbaca54f7510db6b4a101156d534"],["/tags/RPG2000/index.html","f2286692431ba39b822dbb50f2feb12b"],["/tags/Reverv/index.html","7ac2e729279094105f41bfb4a58ec939"],["/tags/SENTIVE/index.html","85173858b871857f67df5ad1da62db79"],["/tags/Saihate-SOFT/index.html","28e8269194947876cad57ccf948c8c2a"],["/tags/Scrubbing/index.html","37d583a480f66ed660a315ba51b63842"],["/tags/Sky-On-R-imaginAtion/index.html","d4f3f5e44a1cc98ffddcc20028b75337"],["/tags/StrayMoon/index.html","6668f3d4b2dd5983f29459c7f867fc61"],["/tags/Studio-Bu-Sa/index.html","d9f14534e2250295c9a3d89584ac4680"],["/tags/TRANSPARENCY/index.html","f0ef31b2789eafe104355c485671de0d"],["/tags/ToHeart/index.html","e348ff041ad08d40aba4ce7118a1e53f"],["/tags/Traumend/index.html","38f91fde4479c5c372b6c816d2e667c8"],["/tags/Witch/index.html","6bcd32d8b6d9550b01fd686014df10b5"],["/tags/adonis-project/index.html","44df3ea6e4a2378cb1982125b8ed8813"],["/tags/capriccio-suite/index.html","70deb997d4ff43366eb4accc73dd17c7"],["/tags/flash/index.html","031aed75cb742989be59939f50d8ada4"],["/tags/galgame/index.html","c8b2eea90ba7fd1dd831b82a68332532"],["/tags/galgame/page/2/index.html","38dace5bb5947baeb88b9adf9eaf0ce9"],["/tags/gal资源/index.html","fb1ebcc79aaef271c264aaf203f6eee0"],["/tags/gal资源/page/2/index.html","ea4de228435a869b7b6e4b506730664d"],["/tags/gal资源/page/3/index.html","0d47e627838ac5521c2b5e06ae4c7668"],["/tags/index.html","710f14533f157037a3de995928d8b22a"],["/tags/rkr/index.html","a0e74ad551255b30b80791377a117a8c"],["/tags/team-eye-mask/index.html","9862b9e0b3f28bb4e2f9b19bc024d5dd"],["/tags/ありすくろいつ/index.html","b69dd14d8911de7b1b8dc0a85a702af2"],["/tags/いつものところ/index.html","78922dc11de92fa9091c7f7afd395b58"],["/tags/きつねみみ饅頭/index.html","0d2e7fd55cb9a1aa6a25bd97e2489d0c"],["/tags/ねこねこソフト/index.html","b5bdd54cfbade605029acae4d3ea46c7"],["/tags/ねこバナナ/index.html","252f824aa870705ddf1c8a41090efcf9"],["/tags/はちみつくまさん/index.html","58c4fd7ecd27d6eaea40da9e1db93ced"],["/tags/ろりちせ/index.html","36e8c1bbf8d464c3faeb9a96bde1abb7"],["/tags/アイル【チーム・TATU】/index.html","fda79095b1a5b7c7636cc649e429b2c3"],["/tags/アクアポラリス/index.html","50b0c6326f279d9af14c92d001f78488"],["/tags/アークシステムワークス/index.html","60c56e1a9e92ddf15e60ef4a025d89b8"],["/tags/ブロッコリー/index.html","ae6c46dc293869b90ca077aec2ed795e"],["/tags/乙女/index.html","f4a217de3fba301ebfbf6cc6531d7a07"],["/tags/乙游/index.html","6987d08e718931c640eeec2cd858fda5"],["/tags/停产/index.html","9418f347ca5941d7d9f606412e929b19"],["/tags/公告/index.html","8486401c40a8fe57ae200bfdeaa5a092"],["/tags/同人/index.html","4dfeb7ad4ca2f8986755636be12493f2"],["/tags/堀井雄二/index.html","f1e92993085d1136b3465cfd17268164"],["/tags/外海なおき/index.html","c78bd4223386ceba6065cfe12b016ec8"],["/tags/女性向/index.html","b4a98fa19e232ebefb9231c3646dfa9f"],["/tags/御茶ノ水電子製作所/index.html","1a8067eeb57862f00530f3b86f87f75f"],["/tags/月の水/index.html","8170333a7e7a91baebdd131e24128834"],["/tags/桃野衿/index.html","ed0048d8d4ef79cba0d88e87933334af"],["/tags/機械式少女/index.html","90ee5f662e010942f2209a672ed68222"],["/tags/水仙/index.html","335025960525c7b02a6ff448877c3c92"],["/tags/汉化/index.html","5a8ba68d4d89ceca1fff39907b2edcc2"],["/tags/熊月温泉/index.html","9b7b79c8e5c083c4a1a09f3bfd6864b6"],["/tags/片冈智/index.html","856dcc06c73222aea38d7157482a341f"],["/tags/片岡とも/index.html","52c61115fb8fe6b529211a10ca0e665c"],["/tags/牙の刻印制作委員会/index.html","9771cb2733bfa4c22b4e35e81f23214e"],["/tags/牛カルビ定食-FLAT/index.html","2183a23dbe61346a50aa5a93739daaa2"],["/tags/牧尾屋/index.html","709567274b6a8fe1b060d73145e5681e"],["/tags/犬茶屋/index.html","a6976d7e125548d53c1ea77d2e06f27a"],["/tags/猫猫社/index.html","8c049638f1395b6b548de7c72d18f68b"],["/tags/王宮魔法劇団/index.html","0c4e8b008f54493a003bad9531d0ec56"],["/tags/画集/index.html","768f66aa9bf9b27743357ddbba3f1bf8"],["/tags/索引/index.html","62677330a05166dcbf57cd14a1a40b1e"],["/tags/缺失/index.html","75bef626b1f53a12ff248589d5df69d5"],["/tags/自购/index.html","70c3e05d8e7d9b972042abe8b77b8e1a"],["/tags/茶葉☆姫/index.html","30a2f6bcc631204de69b2bfe740043c2"],["/tags/郷愁花屋/index.html","801425a9b9d9f2eedb42d8c6047a8672"],["/tags/閂夜明/index.html","3eca443217efa303796fb7b57f444555"],["/tags/音乐美/index.html","10a4d7786c4a976d056f3c39692096c9"],["/tags/黒†救/index.html","2adaa72f7dc34cd367701c8123c20dca"]];
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
