/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d1de370536065dea2752ed01a99267da"],["/archives/2024/04/index.html","b054e3895eacff4f324aafed9f69e9e8"],["/archives/2024/index.html","e62bff36a713c70cae5711a28a61fc53"],["/archives/2025/02/index.html","725ecbc940444da4c0705b9cc6914465"],["/archives/2025/02/page/2/index.html","99fd08ff1b6efe501a8ddcc7a370e73a"],["/archives/2025/02/page/3/index.html","68ad00d057fde8f06df94f0d98f2f5f7"],["/archives/2025/02/page/4/index.html","be2774eb15d629e30b5684046efdf6bd"],["/archives/2025/02/page/5/index.html","e62871a025315aac716e12e02908793c"],["/archives/2025/03/index.html","83d1d0b8fdcefe568d5918f97614ac7d"],["/archives/2025/03/page/2/index.html","8a03f68273887cb6266a8cc278259200"],["/archives/2025/03/page/3/index.html","074c09b32b4b6094ec8481f9a3211236"],["/archives/2025/03/page/4/index.html","192d8b5308e3278c50b797824c04572c"],["/archives/2025/03/page/5/index.html","691ab5fe56a402b98407b01c1c326940"],["/archives/2025/03/page/6/index.html","b9c95287987af71c27ed0c2a7d1a746f"],["/archives/2025/04/index.html","fac81dec1c44c7d2120a5efd4a0ec0c6"],["/archives/2025/04/page/2/index.html","c9c0fcade2b71857fa030084be5d0a5c"],["/archives/2025/04/page/3/index.html","aee133e2d20a7279174d02fb2fd5d703"],["/archives/2025/index.html","60cf51d4f74f8e0855d043d2a6c27345"],["/archives/2025/page/10/index.html","c0ce2db29fd2cfac787a3c6b3468557d"],["/archives/2025/page/11/index.html","eebf20d4253dbf672175afcac6bcdea2"],["/archives/2025/page/12/index.html","78105ac9a2d5d76c85f8bf37da10866d"],["/archives/2025/page/13/index.html","15eff59ecdc83fb72c9913443bcc6ae5"],["/archives/2025/page/14/index.html","c73486fef94139cc5c04ba4eb0836c01"],["/archives/2025/page/2/index.html","9f07d975cc648917438d3be08ed5b8ea"],["/archives/2025/page/3/index.html","106b3940cb306d2bff7bfd8d61a2429c"],["/archives/2025/page/4/index.html","6d86702f28c08d4366a99b89ed3ffd9d"],["/archives/2025/page/5/index.html","934caaf7ba0ac4406736ed2b8cca07a5"],["/archives/2025/page/6/index.html","2a481948c30ad714244e3433d2fb8b26"],["/archives/2025/page/7/index.html","d6f2dcc2c0b104592e7b2a6663f750e7"],["/archives/2025/page/8/index.html","3ef8aaec287650ad999c2aabf88448b2"],["/archives/2025/page/9/index.html","df27fd0a8168a69494647af02119849d"],["/archives/2026/02/index.html","78b6edce5c64e0ca4ac2dc2ac9713f14"],["/archives/2026/index.html","f9d02213a1ccd0c51eebf32c7fc10872"],["/archives/2825/04/index.html","19224202313edb23670852fec1bf91cf"],["/archives/2825/index.html","a660893fbd20076669f32cf7c2ce29d4"],["/archives/2925/01/index.html","ab17a506de3ec8c9f093ead667599572"],["/archives/2925/index.html","ecd87178f16db0faa4c64e9563f01d3f"],["/archives/index.html","5e187d457e78f76397c257a42559ed90"],["/archives/page/10/index.html","e6a3c911ffa0820905960b773fe938e7"],["/archives/page/11/index.html","bd8cef4817d386ba2f816054c7fddd13"],["/archives/page/12/index.html","1e592fb0f4a0f343ac941638cf7edcd3"],["/archives/page/13/index.html","0dfaf505cfda0d934287d34f1c8228ea"],["/archives/page/14/index.html","5ab38be87d9fc88f03703fff1523259a"],["/archives/page/2/index.html","3c71943e45f651c25409f2b6e22722a8"],["/archives/page/3/index.html","587b4afb1a4702017d19c56f430f10aa"],["/archives/page/4/index.html","3396dbe2ea9597e93b71f53cddc891f6"],["/archives/page/5/index.html","97746e8d8157ca4eeb3a3545a5b021c2"],["/archives/page/6/index.html","799a0470a7b9ac412b9a28c6d0b96e03"],["/archives/page/7/index.html","de60b33a7cb6683e5496c1350b16035e"],["/archives/page/8/index.html","8c13b5551c5fd874b79856621daab478"],["/archives/page/9/index.html","a4f11795d4f2b48f5cebfe195f39023e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","bd89c23dabf724427c877fef0fefc3b9"],["/categories/galgame/page/2/index.html","7255a20fc42bac3f7c6ccb886a256f36"],["/categories/公告/index.html","f2e6275efe38e7ad20bff1b3adae7351"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","63f3dd8ef03e4ae146f4897ee855cae8"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","c6ca956ee992de5180a9346d31f9f257"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ccf157cceb3d316aa74ef85543b78bb9"],["/page/10/index.html","a8044b18639e841c8fbe00921366e51b"],["/page/11/index.html","1029fbd70590da3ab66bc52d5f28b65e"],["/page/12/index.html","74657c6ae771eaa795ceb707450ee081"],["/page/13/index.html","5a9754a563520edf8fbb8c8df3e6900b"],["/page/14/index.html","dd21d738731e6d71dd4f1eb9cc9140e8"],["/page/2/index.html","d6b493adc8c8c27bf7f0c80ea33e3c98"],["/page/3/index.html","eb3e3a8c493552520d242b6e2a538295"],["/page/4/index.html","61d1cde3379de58419afba1b7f06c8e0"],["/page/5/index.html","f4e34fb7c4cd2fe87c8fd97cb354eacd"],["/page/6/index.html","aea276f25afb3c8f3d4488b9936ba2ed"],["/page/7/index.html","3efdefb63fe9caa361df0e04fefc4aed"],["/page/8/index.html","eddb1bc55e986f52ddeb31552223de64"],["/page/9/index.html","91f529d1a537ebc54b2d840a68d2c4cb"],["/posts/10c9dd98.html","10b435fcbb4c856943bb7931431d7246"],["/posts/126ebb99.html","d34f3c9551a6a7c07162ecedb4bad166"],["/posts/1295b569.html","50b960065d752ff059a7512e7adfee34"],["/posts/1370342.html","539325db4d3506820730532fdad15b16"],["/posts/15ef14c2.html","cc69ae5bed6e53d154eca1e615885893"],["/posts/15f3959d.html","8b300433b0128233cb2f1b9b20e3c4b0"],["/posts/18ab785d.html","56a1e2f0fd462dc50712f5b018894a91"],["/posts/1d59b71f.html","b26473eae17142f4a4a99004629acb35"],["/posts/20b3f3a4.html","12314e33237ef402412318687d2b76be"],["/posts/245f1c7d.html","f9214dee275369c51377487c853079db"],["/posts/252658f.html","5f7be899cb1629ffe2b6e8c3515515cf"],["/posts/28397adc.html","ae9ddac046eef9f383ac5198e6187d9c"],["/posts/2ad07f54.html","e6f940e9a37a80c30125059512f75d0e"],["/posts/2b38bce0.html","8d4a7fa3efaf29a6346ca737b6045896"],["/posts/2c0a6836.html","7a0d78a23951df2900dc48496848bc77"],["/posts/2ce39bcc.html","7d7e649de5c746d73e81d6e894edbf2e"],["/posts/2cf620f0.html","57bba06a0cbcfceefe05b2b235e011cd"],["/posts/2e30fd6d.html","f018b8af50b5c947aec7fbafe518e48a"],["/posts/30a413ad.html","96c8a1ea73e6049b60f69c7e79ecce88"],["/posts/34292736.html","aea65b03b156b37bd3d521fa65700b58"],["/posts/3468cbe.html","ad46ce7a0df517bf398af1f92c45fe0d"],["/posts/39176dc0.html","743a3997036f0fff37042da61603d60a"],["/posts/3e118dbf.html","b6f602b99d05569b5349c7dd0a3d08d3"],["/posts/3f7d823a.html","79a5903908f090afd24d94edd130f0e2"],["/posts/3f978819.html","cdb7b4572c3d50f019bb6e00b4a8143d"],["/posts/41dac80e.html","531dce590994ff27bd642063955bafc7"],["/posts/43945723.html","e52506624b90dafa2ffe1cdf6f4c18d4"],["/posts/44124a6b.html","9fc3ad1b87aed5fcbce79d992ae6809d"],["/posts/47abb61d.html","4b3583de23a1331df98dd9fa4b767afc"],["/posts/4996478a.html","a0c47a1552d8560a17af8f322beb040c"],["/posts/4b689be3.html","962dbd2524947ab61c3c2167ffab05d9"],["/posts/4cf8423f.html","3251e780832de1a0e8de1da43c75a8cb"],["/posts/4dcf85c.html","181465d10584feb6b426140b33d008c7"],["/posts/500cd322.html","c25cc25aa900574b6735605d00f4d1f0"],["/posts/51c9b1ff.html","2e541fb1ca6f6d7167dc22e685688869"],["/posts/52b5b3c6.html","4d436a256d96e40b15f93decd1bb5dba"],["/posts/54f496ad.html","86d4575cb2ae95783b93cd555d71ef0c"],["/posts/558e1f30.html","e10116dbd54dfd1eeb7fcc188e71000e"],["/posts/5d8bea92.html","46eaabd641b5a4ce4feb845930ad340a"],["/posts/5f6e0c59.html","3caac6766a42da093c9cae17ee4fb434"],["/posts/61a63a84.html","d0ac9f9d06cdb5c976b5759e3533d784"],["/posts/625ab7bf.html","adbf511347a4d7ea99f7d470826c48b9"],["/posts/6336a2f9.html","a8734e45e111550cc0b3660db28f465d"],["/posts/6432d61a.html","8608b116661181ec20cfe454c2327bc9"],["/posts/6515f032.html","a92a531c652b9a81f5e65b2e4df96a29"],["/posts/6720ccdd.html","f34e4b54d02bf45751ee2a34825946c9"],["/posts/6a4b5ac8.html","b8372fce31101bdb98456494aa65eb5b"],["/posts/6aa4177c.html","c56c80a78cd74bcedc69b329d23732b0"],["/posts/6b15f81f.html","d46cd1cb8e518fe825186141ad58e86a"],["/posts/71131d34.html","abe881288f5cd14ee69520a06af6dd88"],["/posts/742fd48d.html","8bca2f60598690350c2924b0a75e1c4e"],["/posts/78a8a8d3.html","08615a65b7b8437ca83a9702a663b0bc"],["/posts/7a5ef3d0.html","fe16e38abbc4c16c624438b15311cf3f"],["/posts/7b41e1ac.html","8aec00f01b9d3b51b15a67bb4d964ba5"],["/posts/7b51011d.html","bdfc72692c01d3db905b381af75ad9fe"],["/posts/7e3aa3e2.html","b2618fc401468e97cd795cb67cd4b31d"],["/posts/80fe2691.html","29f7f4606bf7d05fd3eb0869a6d8211e"],["/posts/81ac52e9.html","72ffa9b9691ef7ad67d565d6084fa93c"],["/posts/82332d11.html","7c544a8a6cdb97ec4f80ef53b4c939fa"],["/posts/8486f6f9.html","d9436d698827c96ebff7eae5c0570047"],["/posts/849b40f8.html","23e53fb5cdf4b1035499efc404321704"],["/posts/85c51d68.html","310729bff4897c7eda827fc4f553fda0"],["/posts/86a6c500.html","6ff017e087fbe4258514adbcdf15fc53"],["/posts/886f8d3.html","85fe92b8d1a1f0468530f42f5080d21a"],["/posts/8a7cba10.html","b0bc332cabf15e535c83db8beb606591"],["/posts/8ac11b41.html","0de49646d8ab0bdaa83c3850a10fdbc1"],["/posts/8dd520d9.html","d49c521652b7aed70a9300eb4395ca26"],["/posts/8f555654.html","a4feb0d23054c7ac2608d8f91cec2574"],["/posts/92a980c2.html","4b58f3857a22ef7489a7580cddc9a166"],["/posts/92ce16.html","c2634675c7e0b4bb27af83c2f199df07"],["/posts/93e9943b.html","75c606bcbb0d622e150de6dc74e00ea9"],["/posts/94d3c794.html","1ec8934e2056d429559a4684064e34fb"],["/posts/96b281f2.html","27ebad8883a4c0bba9439325106a074f"],["/posts/97f50eea.html","b75782cbd95f844304bf97d703b30763"],["/posts/97fca8be.html","9a0706985f105140335f32704ffc85e6"],["/posts/98662d05.html","594e6bd5d1eef77a741d13da378104cd"],["/posts/9a2f6162.html","1a8efd7742423dcfbb528581ba31deea"],["/posts/9b22a48d.html","8bb4ae30a91dd83deb1621779e3be447"],["/posts/9cb455b1.html","23c585c0cb3f3f2ce041e3552149c630"],["/posts/9ecdeecc.html","00a948cba0609a8826a99cc0e3e85d9b"],["/posts/9efd7701.html","00637f36a6e6eafdc2ff5c35d596e662"],["/posts/9f61c1a0.html","677e69380e079570188d73919da7281c"],["/posts/a1de710.html","bcd31bd6f8c74d5738bcee30380dff44"],["/posts/a30eb0cd.html","c69200c05fe3e43863114e34dd18decd"],["/posts/a7634b5d.html","6b2967f7d88cbbe041489766968c95de"],["/posts/a8c593b5.html","c0392a9bb116538446568ecf083169d3"],["/posts/ad0c1efa.html","b415037d738a597ec71bf0af55a1b4b4"],["/posts/ada3f440.html","99b0124d34c1f306570862b214497712"],["/posts/af1807ef.html","242e28cca81685195228311774a26743"],["/posts/b397bf03.html","49ff0eeafe23c3ee096c354240f7d770"],["/posts/b497b647.html","a8d95f9ac667348cc04edd082b540068"],["/posts/b4d464b0.html","619325d9084c416f7273288f66f70be0"],["/posts/b5fb773f.html","a7089ee39e72bf83511566a508228969"],["/posts/b8d46b32.html","d7c39ca440fc5abda881e7b07febe957"],["/posts/c1b2c6c9.html","8b712e6fc6f478e0c91a8cea53bf963e"],["/posts/c2111cbf.html","489f6015b9fdbf5b9e5a8359ea6c8399"],["/posts/c316c2e8.html","c9f3c6f1f2b87eacd2f04663b07b7424"],["/posts/c43e60b5.html","6db1c0ca96a1e3fb99a0c68952b2dab8"],["/posts/c497a412.html","2c127759ee59fbb6bd2f77f502bc2e7b"],["/posts/c5395ba3.html","35ff5c332d8e09df9485e3518581a76d"],["/posts/c5de299a.html","dbc7f834973c7101e4c1e4a0d21d571e"],["/posts/c70bba9c.html","5b920446dac2f7afa4aacb9be48e1452"],["/posts/c797535e.html","f8f322f315e4c7f6f59913a529e4b1d2"],["/posts/c7a62c79.html","165d1aea8096fff931888085a41f09be"],["/posts/cae2c959.html","9f9d36618da51058a1085fccb6cdd45e"],["/posts/cbebef2b.html","8dbf628fe5ba3d531a04bc79424c1c16"],["/posts/cc4c0017.html","0897b36783699f05dcaf09d5162fbf5e"],["/posts/ce25023e.html","cf4aeff170c3854520dbb385547c7006"],["/posts/d2fd4837.html","da81e8cde4b4e16708e8fcd6b5126efd"],["/posts/d3233cbb.html","883219c76df98fd1f660dab844bd4a91"],["/posts/d3a745a8.html","e7e1dc49bf3796771c3eb02d40e50be7"],["/posts/d7e940d2.html","60eac17a1b89caa191d878a66b96227e"],["/posts/dc815d5.html","a195799e7c0ac3cc105c37edbd296d6f"],["/posts/de25b0be.html","da9b0bfc63a3db363c9d1aff6daf67e9"],["/posts/e2623b4e.html","00b429243e5e0a59edbc2a4bfc5394f3"],["/posts/e3ab6ad8.html","3a7e23cc3b0c8bb08783910191fa741b"],["/posts/e5018da6.html","5e47cee10fa4ba27d9c5c71038e2005d"],["/posts/e5963272.html","6e92a4f552c0efeadc920b3bce4c02ad"],["/posts/e5ef4c3c.html","527e68741c144f4dee0f14d896e984ec"],["/posts/e624b065.html","798d130af12b27bc6bd465c9039f14d3"],["/posts/e7c703bb.html","2d70071f609944be5d8b62690ea2d027"],["/posts/e8f14b6c.html","401cb2819c6fbde2185137d969a9be9a"],["/posts/e91abb63.html","7950e3fa6f29d23ce3bf4d889846a1ca"],["/posts/ea9a8808.html","1cf7932620cd32f9979d35b49129b08d"],["/posts/eb784749.html","ffddfd2ab7d97366a839132d1c917249"],["/posts/ebaf2232.html","0445f7e86815c00e71e0cfb3f56c57a5"],["/posts/ed75f185.html","098c950b13f4ba5968baa3114d91cf67"],["/posts/ee1ed673.html","e97368fc42e124f68c4d0be4cccbfe70"],["/posts/f0c3ed61.html","21cf5b01d55499429d54a92e6622b7f8"],["/posts/f151ff43.html","c41f0b90c0c7a9f703de4362ff0d862b"],["/posts/f21e7f84.html","e3cae01221b9e9d3a5a34bab0fb39369"],["/posts/f230b0fd.html","42c7ac4dce21e2856763c18aa42373d5"],["/posts/f28a7877.html","e76502334e7f64629161f3f614f3b401"],["/posts/f663d5cc.html","522c6c7092f9f0819e041b481c346da0"],["/posts/f730ad18.html","522e722672f289e4bbea842196b520f0"],["/posts/fc04d0d4.html","9ff10018c309e0ba493a99784e2ca74f"],["/sumire/index.html","fc7680f74e00f348454b353045420ce3"],["/sw-register.js","f63852692cc74a7fffce3b19e6557696"],["/tags/APPLE-project/index.html","8befe11ab7a1b37d7f6041f86737ec50"],["/tags/Ankrache/index.html","5376f93a3dbee859b0e5d03874513c09"],["/tags/BELL-DA/index.html","eb869601629400766e6ef64167473c2f"],["/tags/BL-Game/index.html","c080cc08019ec2f7900a56c63157c069"],["/tags/Blue-Dahlia-Digital-Creators/index.html","207bd9b0d4fd1611a1cfd0e6c36761ee"],["/tags/Blue-Line-Games/index.html","c2a02b9d29f264d371d780105abe20ad"],["/tags/CHUNSOFT/index.html","106771a9c1161b542ce821a19c483fcc"],["/tags/Check＆Stripe/index.html","cb9f333596232342c84d35f40a23d5ba"],["/tags/Cherry-Pie/index.html","d75c8184a299dc72b9ca6d478f79c1e1"],["/tags/Circle-Mebius/index.html","e14a35c579744288fcde87680296a946"],["/tags/CresCENT-BLANK/index.html","41e098ab0d6f63106637b1a2b9c20148"],["/tags/Dopamine-Software/index.html","c6b8c6fa91f2e8728521183f0285f38c"],["/tags/Dos/index.html","f4e31e91747fee5a2ba5634148fbda06"],["/tags/Earth-Well/index.html","e37ef7e1a06e6f58baf9dcc59269e91c"],["/tags/Forest/index.html","821590d2b3ec46a4e9380d1841045a8a"],["/tags/HaccaWorks/index.html","b4288615eb7310513e4814a769230e74"],["/tags/Kanon/index.html","1dfa2fa66c43b7b0bb6362e707c464d5"],["/tags/MANATSU-8/index.html","eeaecc4aeef11b69dba1a98a4d1557e4"],["/tags/MARINE/index.html","4bcf807d2fe186783abfade360ca72e0"],["/tags/MIO/index.html","16e40368d8e017b0bd01ec04d26fd151"],["/tags/NAOX/index.html","3172ea8a7b543164740c24c5d0827a00"],["/tags/Nmyu/index.html","5f685edd983b0561534446193b8e6b79"],["/tags/O-S-I/index.html","02639e10ae3c9d53f34a95eaedcb4982"],["/tags/Omegaの視界/index.html","ffcf151ec48114381d2c246eee7812f3"],["/tags/PC88/index.html","0500246140463dee8d9da9983ef37624"],["/tags/PC98/index.html","18b1d8fc11010f864094eeeedb91e4db"],["/tags/Perpetual-Room/index.html","068262a0b03acee09d7a7e5b2f8bf88a"],["/tags/Pleiades-Company/index.html","5ffa46b99d8306edb5c89f519169601b"],["/tags/Project-Twintail/index.html","3fd09284a5f14585f2f2f610ee5f8f97"],["/tags/RIFF-RAFF/index.html","a1b4a9d3d0824e2acc2af58378372492"],["/tags/RPG2000/index.html","a0767e37c6ae7213cf3a9a3003aab712"],["/tags/Reverv/index.html","f1db4bfc498a20e98346edcf5d197475"],["/tags/SENTIVE/index.html","4b054b445c622a57c5c9d65891b2716a"],["/tags/Saihate-SOFT/index.html","8f333cbe9a19e1a27c84c890cd16703f"],["/tags/Scrubbing/index.html","126bc4f3d4d6f73c6781b9e08d3a83f6"],["/tags/Sky-On-R-imaginAtion/index.html","8ade0a5d6303917106083875636a85df"],["/tags/StrayMoon/index.html","cac019c9b71e3bdf77ba44f65ab5fb69"],["/tags/Studio-Bu-Sa/index.html","a2e2dc869f6999175ce78bb5c883cde1"],["/tags/TRANSPARENCY/index.html","524e76dd5a6aebf3ef614fc424a0658c"],["/tags/ToHeart/index.html","0251683c1ed6d3e0706fd811ea04690d"],["/tags/Traumend/index.html","515bf808173e0a922f7b94f061b1dfef"],["/tags/Witch/index.html","b751c9b83e0865914ee37cc9ce5cfdc4"],["/tags/adonis-project/index.html","c5cffc0f24402193eacb809afc6bc9a7"],["/tags/capriccio-suite/index.html","e77586d52267fd5d149bb19416647def"],["/tags/flash/index.html","4a3ad4c4c7e87d12ea968a0747b60ab3"],["/tags/galgame/index.html","6914579d92e362fb62168d557586e199"],["/tags/galgame/page/2/index.html","1170e83986f85c3c34a959f6fab07bf8"],["/tags/gal资源/index.html","c3c56e7673dad7cb7a7bde8570dc952e"],["/tags/gal资源/page/2/index.html","6a08f87bf9f18bb07f4ddc9404173605"],["/tags/gal资源/page/3/index.html","70bb15d8a49668e805d2b15602bc3cad"],["/tags/index.html","d94ef4e5e004895136e6067f53673b33"],["/tags/purgatory/index.html","8fad342dcfe66bbce0b425deb5384df2"],["/tags/rkr/index.html","adff735eab0f2e4fcca3f0957c2a4ccc"],["/tags/team-eye-mask/index.html","2c7a4b3ac77135fb4efa90deb73b3b60"],["/tags/ありすくろいつ/index.html","057e29a3ea11da271c32d4040ed29696"],["/tags/いつものところ/index.html","3f5748780cfdfc5631a7b3fccad7038c"],["/tags/きつねみみ饅頭/index.html","d496d10ac03bd0d7cc4eeb76225545f3"],["/tags/ねこねこソフト/index.html","c146b73227f07e1626937eabea0f15df"],["/tags/ねこバナナ/index.html","693261ad8d132a346f230d63ddd963fd"],["/tags/はちみつくまさん/index.html","d99a3286698672e52f5ad0c3f1cafa32"],["/tags/ろりちせ/index.html","a385e04449da256e3e7b5784ef43477f"],["/tags/アイル【チーム・TATU】/index.html","e1588aba9edfcb5b08b9199a67f4c090"],["/tags/アクアポラリス/index.html","f1056c6d000c9327593a97789b583cca"],["/tags/アークシステムワークス/index.html","e5d98edac6a2b83b9050f13dd7bbc26b"],["/tags/ブロッコリー/index.html","53770fa157619553c0ad8e2b8bffb681"],["/tags/乙女/index.html","b3fd9a1058a76047221f2eb1a5c1ad7c"],["/tags/乙游/index.html","115b4c6fe6001bdf0b364f8d9f92ca05"],["/tags/停产/index.html","ef8da3349940a0e6e4ed23beec7bb16d"],["/tags/公告/index.html","2b42211b79dce3f005bad2cb677cc3c9"],["/tags/同人/index.html","cebb0e3f11401f3b68e21df934f0b4da"],["/tags/堀井雄二/index.html","0a656074e1b85cb8b6e72410cbc33e90"],["/tags/外海なおき/index.html","d93294557b17a9383505d33f936f0d71"],["/tags/女性向/index.html","825ce11b7936352ddfccfcb070e4f838"],["/tags/御茶ノ水電子製作所/index.html","17f4c056ee479a86639a2890e903177c"],["/tags/月の水/index.html","1f5e446eb6fe1a80a3418fc1275daa8f"],["/tags/桃野衿/index.html","8281ccf058cebe6f5374f9d850b1fd9c"],["/tags/機械式少女/index.html","8819d5103e0c0db17528fcd26dc5d4cc"],["/tags/水仙/index.html","506f37e1c982329808a6f40b55bac9e5"],["/tags/汉化/index.html","1975a810506d80f21c3a85f9c0832f13"],["/tags/熊月温泉/index.html","dfdccf8d496396f9385b18f8cb3a6a0c"],["/tags/片冈智/index.html","e9b6a9f1a68c97b9f37308cfe72fdba8"],["/tags/片岡とも/index.html","7453b9fdffc5ac3066f42deb54866593"],["/tags/牙の刻印制作委員会/index.html","1dab9e32faa8e5490a9ea7c86bd2f1c9"],["/tags/牛カルビ定食-FLAT/index.html","71f07379f3032a5a6dfc41ea8c271756"],["/tags/牧尾屋/index.html","5c7e8a6a9fe674452fd91fb55c9aabec"],["/tags/犬茶屋/index.html","ccae6e479afa0918b97d376972e7f5c5"],["/tags/猫猫社/index.html","de7d16e4b4b89ec421fa142f09728c64"],["/tags/王宮魔法劇団/index.html","9d10b90064880c78c1c70c73412cdcd0"],["/tags/画集/index.html","20577a60093d72747079e3ed4eec752b"],["/tags/索引/index.html","8662ed17e95cfa7ca0fbc2c9d31936cc"],["/tags/缺失/index.html","2418dd38af0fe03492dcf12a74e92749"],["/tags/自购/index.html","a7a89a301bc29bdbb82faa3cc6bacdab"],["/tags/茶葉☆姫/index.html","a42b92d65438a2e007c7ac2e2b2af3e6"],["/tags/郷愁花屋/index.html","75097f67ae8fd681b4bc49f4b53c889a"],["/tags/閂夜明/index.html","14bd430f6c4d5d956c488d6ac6456c4e"],["/tags/音乐美/index.html","e9e7c6f4fe6ddabfbfc81181fd1b7516"],["/tags/黒†救/index.html","6c15d345e692d5265bdeec9ed81eebce"]];
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
