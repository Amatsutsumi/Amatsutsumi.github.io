/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","528f0418d5a7c06db71f43e8399463f4"],["/archives/2024/04/index.html","72f482295a5d30dff33a7b103d370c34"],["/archives/2024/index.html","e241be1682109c0e9f6c15213452752c"],["/archives/2025/02/index.html","dcfbc0c48956f334905a75641462f0bb"],["/archives/2025/02/page/2/index.html","8ed9aa4ca8b97a7fe11ceedbc38c6da6"],["/archives/2025/02/page/3/index.html","cd82c74f996a56e27fe91447cf99a70d"],["/archives/2025/02/page/4/index.html","aa36ffc58db8832e4696c0a5116658eb"],["/archives/2025/02/page/5/index.html","b4b10cf7b1eb7e66d8f56753f761ed01"],["/archives/2025/03/index.html","61ecaeada1466c350f97c043e179d7dc"],["/archives/2025/03/page/2/index.html","ebcb70997d8865e359a29188b1b1be61"],["/archives/2025/03/page/3/index.html","d37b3fb0de8fe924297410ef18a37211"],["/archives/2025/03/page/4/index.html","62a9c34f4022daed239181c7afd7c4f4"],["/archives/2025/03/page/5/index.html","8cc2daf1c801b0aaa1b7b8e4d8c6ea28"],["/archives/2025/03/page/6/index.html","bb3a117ad71239f527d8ed047d514e3d"],["/archives/2025/04/index.html","83a5b0b4c86b4d86004d6135a15c2b4b"],["/archives/2025/04/page/2/index.html","a5c000d28e23169b2b669dbd8cfc5dbe"],["/archives/2025/04/page/3/index.html","7d0c2185e18d0d557d19b4d3a2e88676"],["/archives/2025/index.html","1f5ca6e2cf84969844f52f8afc4b9c4e"],["/archives/2025/page/10/index.html","08cc1ce9b8c2f9ce9f5b8b989aa58a66"],["/archives/2025/page/11/index.html","a48dd5f41d846fcdeda3c983c72db10a"],["/archives/2025/page/12/index.html","981439c04ab3d8668d1f3550ddfbab85"],["/archives/2025/page/13/index.html","da61df03be4962caa35b46ebd9bad7ff"],["/archives/2025/page/2/index.html","f04bffc1e07eb9f223724a433fda16ce"],["/archives/2025/page/3/index.html","29af44feb7b4066e901365844a8ac259"],["/archives/2025/page/4/index.html","7788f1e0d9665140005291c4e4147789"],["/archives/2025/page/5/index.html","3f484575305326a503e73345db056d89"],["/archives/2025/page/6/index.html","52e2a81a9ac6837ef6bb7798379e3f84"],["/archives/2025/page/7/index.html","edf89271c34390ff9964f3ea0b1d286c"],["/archives/2025/page/8/index.html","79c182eb5c31751b050d9693072b8551"],["/archives/2025/page/9/index.html","2f74180e0d07b28d2b18469761b83ccc"],["/archives/2026/02/index.html","51efbee2d965f375b6e5029fae12e495"],["/archives/2026/index.html","ac5048fb77a7b710e75cf52beba8bd2c"],["/archives/2825/04/index.html","8fae9e95b965ba5ca11427a15cee2b30"],["/archives/2825/index.html","1f1197a95c6aa9e1df32b04c617b995f"],["/archives/2925/01/index.html","ba85606c9b53949d726ae14afb5da48d"],["/archives/2925/index.html","84f2a1880af515a958c8553c76b786e0"],["/archives/index.html","db023cdc4b7917d90bad91d2ebe80210"],["/archives/page/10/index.html","c8e059af72161c684a7f6b01d146d64d"],["/archives/page/11/index.html","000fddf460bec55299ae87825e63f81e"],["/archives/page/12/index.html","0e0543aa25759ab15baac076a88eb404"],["/archives/page/13/index.html","806be2ec872cf840a93fd0611c9495e7"],["/archives/page/14/index.html","5da5ec98f14def78ca5b4f0ae6be8af8"],["/archives/page/2/index.html","2bff11efd5fec838d3fb71f7d84da973"],["/archives/page/3/index.html","a8c8bc1acdc934855cdd7c3ba45d866c"],["/archives/page/4/index.html","e2eea0f1f85dbae7119eb985101cc8e9"],["/archives/page/5/index.html","9b5c446cdecd671ae9e5fa7882b802d4"],["/archives/page/6/index.html","ab45679b76b6e6eec418a80e22ab3ea8"],["/archives/page/7/index.html","c4ae62c699e5ff36df477936ca33f676"],["/archives/page/8/index.html","4eaac17371e87422b701df6c70463411"],["/archives/page/9/index.html","9220de09246973913a5820cf454f9e00"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","30fb51282cea092438bb5a278c14b4f9"],["/categories/galgame/page/2/index.html","38e158a9a34fa6612a4c2fb776f3367a"],["/categories/公告/index.html","0f7a56d137d1a457708c35fd059bc7fe"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","6248b57d463b1f7abc3f3d9238f45fee"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","17df744cacb2df36936950178340884e"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","f28f6a03984926a47230c9a817d225aa"],["/page/10/index.html","077da3321535792a87102459c3a5c6cb"],["/page/11/index.html","9c3108bebfa60cfc410a900ee08b9a01"],["/page/12/index.html","394f2c282ca3c9e5dd41c7d8e8585a6c"],["/page/13/index.html","2e42fd92aacd19c49768671f07af17c4"],["/page/14/index.html","f46e52eebc58a0e5400764661e8d30ef"],["/page/2/index.html","902aa22071805bf8ff05e3a0f82e19d0"],["/page/3/index.html","c98de40f08abec3aa2a5bec666e3ddc2"],["/page/4/index.html","09e413fcdaeb75646f5881aa41c8c60f"],["/page/5/index.html","85caa4a698f93ec93059bd557f513611"],["/page/6/index.html","fd893fd11d80533340dda2694ca1aa23"],["/page/7/index.html","545f16e48cf3255659dc12d82d66108f"],["/page/8/index.html","eaaa0aed44b37a82c6ab948e743cade3"],["/page/9/index.html","dfe3e298db378e9dc075af19f874b851"],["/posts/10c9dd98.html","367997c439683a43442c2557a6c1a4e9"],["/posts/1295b569.html","0706c04f26e37339e354460d9ea84bd9"],["/posts/1370342.html","3d903f0d45d2b7fa086691fdff0de519"],["/posts/15ef14c2.html","babbc7c8d036fbfe44545e603fe886de"],["/posts/15f3959d.html","405af68e13cec4a71dce3b02b08ef74f"],["/posts/18ab785d.html","e70fdc49508c22d9611d57dc1844895b"],["/posts/1d59b71f.html","4e1f2d463d953df03b9fe4c37d3a0cd8"],["/posts/20b3f3a4.html","9487be84b0e0c198c1d0489c0457ad81"],["/posts/245f1c7d.html","99fbd259148e583398fe042625abf68d"],["/posts/252658f.html","d30f024b6eb2192c59c3f88752349bc0"],["/posts/28397adc.html","dabcc17f106e52d6022f655767f914c8"],["/posts/2ad07f54.html","b9bd2d8b7f615c35b7cadc3b39e46ae0"],["/posts/2b38bce0.html","365ff17af2787a13e4479e6610946135"],["/posts/2c0a6836.html","05cc4f0d39a82dbd79d81e93861dca6b"],["/posts/2ce39bcc.html","eff487d509281439dbd20691435b5457"],["/posts/2cf620f0.html","ef5ecdb5aba4a30acf7d8dbb202f0883"],["/posts/2e30fd6d.html","781abb3d3527daac21b0294b066a6ce5"],["/posts/30a413ad.html","179f2c17c5bfafba8bc19bb63e30d1cb"],["/posts/34292736.html","a7c71a69e14a06ff05e4b83259cb93dc"],["/posts/3468cbe.html","15a9923f2625dec6ccc73994dbb362c3"],["/posts/39176dc0.html","528a9aec3d2eb527707dc985fbe6a995"],["/posts/3e118dbf.html","b6d13bbdc1124b720b9ca83f89959b65"],["/posts/3f7d823a.html","f9b1ebae88788f825fded7fc3b04e8ee"],["/posts/3f978819.html","74ef2488d3982994e995f67fb7a69489"],["/posts/41dac80e.html","793086182afd18bea527c6289084eb2a"],["/posts/43945723.html","59fb3b1d157fcb96e88ce92971e1c16a"],["/posts/44124a6b.html","2160ed5f40ecabc31267d2193b4386f0"],["/posts/47abb61d.html","fc291a3247cb969260e2897096fc1d0a"],["/posts/4996478a.html","08b2fb2d74695df81155207a65d6ff97"],["/posts/4b689be3.html","29f43f222a22d8b8a005c05703417999"],["/posts/4cf8423f.html","ff318536da9f1f6b1f00a727299a3a72"],["/posts/4dcf85c.html","2f89b851b2046a2791a9faf406f10a56"],["/posts/500cd322.html","6da6bb75ad0bbe8a6fed058de7a92cdc"],["/posts/51c9b1ff.html","bd72e745d241ceec576b2642888d2616"],["/posts/52b5b3c6.html","3137d384e30412e6e3712884c9276be9"],["/posts/54f496ad.html","a5fcd5699ba7d7e369c6a6812b1b1231"],["/posts/558e1f30.html","09f1d4b204ba1385cffee60cfca8e869"],["/posts/5d8bea92.html","dfc19d1240f82df789f003d2fe88d328"],["/posts/5f6e0c59.html","30d3db19cb7bca7da80132f9d03f77c2"],["/posts/61a63a84.html","118f7a8cbc211b97ab9047a9c8c05a17"],["/posts/625ab7bf.html","9299205f4246f42714ee8f9e75842f09"],["/posts/6336a2f9.html","27024cebcf3a45bb7cf9f5352f2931df"],["/posts/6432d61a.html","e98355d8e41a38e2802718ae96a00ffd"],["/posts/6515f032.html","b6ba3edc27602462c08bcdba21ddcc66"],["/posts/6720ccdd.html","b2ac5013eb3caf373ff6f48a09dfa021"],["/posts/6a4b5ac8.html","dcbc8fac8141db7c43511d27c9b242cd"],["/posts/6aa4177c.html","f33ad3158f3a8a38344f320cbd5a0ab0"],["/posts/6b15f81f.html","0ad58afb61c6962934b045f6578a2aaa"],["/posts/71131d34.html","f3ab21e57c484b9c1fcd33de63f532ed"],["/posts/742fd48d.html","9c2db6c5421cea2fae21977a21b83ed0"],["/posts/78a8a8d3.html","51e13ecf7cefc7393eef360a3c7b2f37"],["/posts/7a5ef3d0.html","c75b3ce7266b70283de7042131adc881"],["/posts/7b41e1ac.html","7c146ca9dc50d256ded73dc303cc3b91"],["/posts/7b51011d.html","2f3256ca4e64eae8f608107aa5b158f1"],["/posts/7e3aa3e2.html","0aec6c069925e84bd3cade07858eea5e"],["/posts/80fe2691.html","58786f80fc1b7758da925ababe1ca0c1"],["/posts/81ac52e9.html","9df0b087b2548290e0db0bfe1cce71cc"],["/posts/82332d11.html","e3ef48e57757dbfbf60c9641c572103b"],["/posts/8486f6f9.html","c8c43c5a154722577edbd82d0913aefa"],["/posts/849b40f8.html","aefc7a0e07a04924e95d5371eb96d7ed"],["/posts/85c51d68.html","76ccac571164cd22d5ef1d5129b44a1f"],["/posts/86a6c500.html","842530c6667472b213be708fd1822663"],["/posts/886f8d3.html","965485137699c27fe43f5248e214d77a"],["/posts/8a7cba10.html","2988b9a23ed115fa3e7804639be89088"],["/posts/8ac11b41.html","18b96444bea352c8498347559ef95c3e"],["/posts/8dd520d9.html","e5a1902dcba853ebb2d0835480fb4e7d"],["/posts/8f555654.html","850f199a83a9a1be3cfcd1153d7028de"],["/posts/92a980c2.html","096cda3c2e18095342416cc1b3e9eb80"],["/posts/92ce16.html","36163cb792c8be4d0d486859ced8a4e9"],["/posts/93e9943b.html","811dd5bfec2ffcc8f34c3151e34b303d"],["/posts/94d3c794.html","8e6320abca4b83e2900bc6ab0df2a31b"],["/posts/97f50eea.html","d1466482089d903100354491e1ab6323"],["/posts/97fca8be.html","cb0e116cc79dae32c7d485cf3773970b"],["/posts/98662d05.html","34ab0b4804c91eae82eadd22f1379f8c"],["/posts/9a2f6162.html","85e428ecdc769d62f49a8c163932259d"],["/posts/9b22a48d.html","8a79ea9f198450121c0c26946b77943f"],["/posts/9cb455b1.html","0c8b3a8f3c71bce39d5ce0c25a0b41b4"],["/posts/9ecdeecc.html","1d24b46e524e690cdbbc0249ce9734e7"],["/posts/9efd7701.html","6c16bc7169f8012906c949c0b14ae9c8"],["/posts/9f61c1a0.html","015f7b20f20ea3bc849378416c479eb7"],["/posts/a1de710.html","32ba7ba93f0527a9f8e923ccf2989b6e"],["/posts/a30eb0cd.html","ca99cc5eb55045fc012863b5c2a7e864"],["/posts/a7634b5d.html","5f39f810320848cda77b360bc068bc48"],["/posts/a8c593b5.html","b1d825ca49e470b987d613b483c78fa8"],["/posts/ad0c1efa.html","6f905564e2e4ece9f4a36eede6491810"],["/posts/ada3f440.html","a0b88e3cb2257d1a9fa7e2205132bdeb"],["/posts/af1807ef.html","152232c1276f67c3b29feb0afd1089c4"],["/posts/b497b647.html","d6bbc75c1558b305b4c653279a0f0471"],["/posts/b4d464b0.html","1d751fde8ebfe893756c253e3e884037"],["/posts/b5fb773f.html","0ce47472f4c0ed0caaed622cb11371d1"],["/posts/b8d46b32.html","36023c0afd55954b17dda60b55a112a1"],["/posts/c1b2c6c9.html","af39d278fccb7b6f07dfdae296508834"],["/posts/c2111cbf.html","fea8f82ff898313f904da84ed91ac0b3"],["/posts/c316c2e8.html","82e03090fd0828dcbe37cfe6049d9e91"],["/posts/c43e60b5.html","e0b8135495fbfc7fedde8b4e1f49e2e8"],["/posts/c497a412.html","56024b31c7b59cdf946dfc9cb6b0f068"],["/posts/c5395ba3.html","2adb328a0d2f4d8af34f06e0ef3dcd72"],["/posts/c5de299a.html","fcfdca3ac1a25914ffb282a43d7b82d3"],["/posts/c70bba9c.html","e23ac2d77a7fc973b12a55959b18b2fa"],["/posts/c797535e.html","3aac3de642e4a8567946d0320f1b6e62"],["/posts/c7a62c79.html","5035223963f56c3753e415a76d44f263"],["/posts/cae2c959.html","e7c388653585b7c8cce3512ff836967d"],["/posts/cbebef2b.html","30112eefbc927d392403a87334b9e1d8"],["/posts/cc4c0017.html","df1db8bef1651ffaa5422f5361a1fc7b"],["/posts/ce25023e.html","a66476b02bb8257648fc9d9392f34245"],["/posts/d2fd4837.html","53457cfd19798aa5acc71be94a6c7034"],["/posts/d3233cbb.html","e4b966dbfd64643fd2664f03f30ad1c9"],["/posts/d3a745a8.html","27d46dd0c7e2c89a7986546c5b81ffa8"],["/posts/d7e940d2.html","4ff87e947175c0ce00409ce65c4ba55f"],["/posts/dc815d5.html","ecb5939a1e90c995147dbeb58cb27940"],["/posts/de25b0be.html","6dea6d65c272ad79f7f026742b15ed4e"],["/posts/e2623b4e.html","66855036fd73632236d39f640d10ea1a"],["/posts/e3ab6ad8.html","2c60c5efcf1dbbd3af6f3202755c2fa0"],["/posts/e5018da6.html","fa8224545095d2177223da779f957b3b"],["/posts/e5963272.html","34848c1bab2ab404d8b4e8ca72dbff0b"],["/posts/e5ef4c3c.html","e7a73701594ef93f7626f2371168d0ce"],["/posts/e624b065.html","3681443bf65f3ddad97a9d2285b295af"],["/posts/e7c703bb.html","767195d7d86cd6050fe8c4bf153d10d7"],["/posts/e8f14b6c.html","2a7966c9bbf5dcbe2c57cb9c556d42c6"],["/posts/e91abb63.html","3353459a2fa6f9689eea58972b018ed1"],["/posts/ea9a8808.html","aee4b132a53e2b8d7bb3504f0acef995"],["/posts/eb784749.html","3cab8e2c67e9d86726965d0beb5e6501"],["/posts/ebaf2232.html","1371a38856b56d29a9a9cebe3c525c32"],["/posts/ee1ed673.html","865b25c32308c45ada40e642294cf0be"],["/posts/f0c3ed61.html","ba69c8a32087a467d37e9f0867fdaccf"],["/posts/f151ff43.html","86cbe008876b30a5bbd7e44e8faad757"],["/posts/f21e7f84.html","d04dfbfa9a065091fb20de25d26febeb"],["/posts/f230b0fd.html","1fc2e38de0728dc22683719fb84d1749"],["/posts/f663d5cc.html","61f342eabed10b39a24ebcd096168069"],["/posts/f730ad18.html","64b4f6bd413149f75ffb903551d0ec67"],["/posts/fc04d0d4.html","c2e5dd731c7920e2d094a753758669f0"],["/sumire/index.html","a164a7becb39566b08120294bf770d6e"],["/sw-register.js","2bd2f97a728e39bca1c9603bdb38c604"],["/tags/APPLE-project/index.html","c22b76e3618015147ee059adf07a90f4"],["/tags/BELL-DA/index.html","757b9210a0ec8d5c148e88492c30cdfb"],["/tags/BL-Game/index.html","775d7082b4d2523cdaa14693f7f19939"],["/tags/Blue-Dahlia-Digital-Creators/index.html","86904bc44ff0e32eb7c2213106be51f2"],["/tags/CHUNSOFT/index.html","abbd92bfde63bac9c9ee22c514e82e39"],["/tags/Check＆Stripe/index.html","d877019a8a64433614e12283c7d4dec0"],["/tags/Cherry-Pie/index.html","31560f2ae80720ca4c48ee5029a7fe2b"],["/tags/Circle-Mebius/index.html","1557bb5e7b96762332776fcc006c96ba"],["/tags/CresCENT-BLANK/index.html","91628507e675fc07966b11de5eea6da6"],["/tags/Dopamine-Software/index.html","cc163f4489a8b464dc71c46fd2edb0b9"],["/tags/Dos/index.html","c5f9ea080f644ceabc79968e584cbe22"],["/tags/Earth-Well/index.html","adbe2848f3ed8ff794b34a7b67212e8f"],["/tags/Forest/index.html","b5340b66b804d8a8b0fc80c68fbbf65b"],["/tags/HaccaWorks/index.html","2630f25245f5caa6d15a150d94c6c5f8"],["/tags/Kanon/index.html","f5e1d58ed395f6f500822d6a2b51eb5c"],["/tags/MANATSU-8/index.html","9e320c65adeee393ee4682814143d37f"],["/tags/MARINE/index.html","ca24fc09435118ac9f7ac214331a5e58"],["/tags/MIO/index.html","dc1d5ed65624a626b2bac24aee593dc9"],["/tags/NAOX/index.html","c687ba0a83fbbc77b7eac49a23ce34b9"],["/tags/Nmyu/index.html","a5ce3d9a12c3e910d42984190812bd2e"],["/tags/O-S-I/index.html","9e23a87f1f01ebdc7b159572ca8eade6"],["/tags/Omegaの視界/index.html","1be5c85fa120108dcb08993d9d0d70ee"],["/tags/PC88/index.html","6964f55e2ff08ccec028aabd6065985b"],["/tags/PC98/index.html","e7ff0b4f400cd4c793a790060504096c"],["/tags/Perpetual-Room/index.html","b5d19c58a426d49e7fa7dc9dba6c7a21"],["/tags/Pleiades-Company/index.html","de2543e4d1578c75ee172b6a141a87b8"],["/tags/Project-Twintail/index.html","2e5dce895f773dbe106430cdab62917f"],["/tags/RIFF-RAFF/index.html","c530f1f930a21aec0f1fa16d17106dc4"],["/tags/Reverv/index.html","d1cc078c5fda1f80e95037ec95333099"],["/tags/SENTIVE/index.html","17659027bca53b0531d119a87829779d"],["/tags/Saihate-SOFT/index.html","8fc1bd58fad25776e9dafc65fa40f64d"],["/tags/Scrubbing/index.html","c9d28a5c70c2e3b7b53a88e9fd38cf24"],["/tags/Sky-On-R-imaginAtion/index.html","b2b82f33a5174b81afd91e6f73c5cc7b"],["/tags/StrayMoon/index.html","d5168491f246618f0d8d1dec8a5ad84b"],["/tags/Studio-Bu-Sa/index.html","d52278216b6f6a71b228bbb830aa9a4a"],["/tags/TRANSPARENCY/index.html","08ffbe8c31909d51e89eb1f505218bf6"],["/tags/ToHeart/index.html","b08b5b89c5d4d67717b0d4e46f489c4f"],["/tags/Traumend/index.html","bc21d876c5dce7cd77c338936643f472"],["/tags/Witch/index.html","6bb2e330fa18def15fbc60ac3c60ec73"],["/tags/adonis-project/index.html","327127e95d06ea869241138321cebbaa"],["/tags/capriccio-suite/index.html","9675c64b9dfb243508cf56c598244e5c"],["/tags/flash/index.html","e0313b11523427266299394295751e37"],["/tags/galgame/index.html","9a337ed326b57b3312b4a7dabd431cc7"],["/tags/galgame/page/2/index.html","e0daea8e55c42190f26f8a99656286cd"],["/tags/gal资源/index.html","79613b74adb7f1462f94d860f9614948"],["/tags/gal资源/page/2/index.html","554276f43e62ddeccbd34df20a883305"],["/tags/gal资源/page/3/index.html","bbd1476fddd89287fead3ca909d3d550"],["/tags/index.html","f7379d95c5645b40fb700cc3f63146f5"],["/tags/rkr/index.html","fa195a5ffd8bd1c966dc3fcecbe97968"],["/tags/team-eye-mask/index.html","fd55d34328063a968116acb94e029f92"],["/tags/ありすくろいつ/index.html","9a7f84108c8c169800f2dd4ba222c0f8"],["/tags/いつものところ/index.html","c58e53b7c1a51c1fce8650ef2d9ae16b"],["/tags/きつねみみ饅頭/index.html","26c4adf2e5bbf76ca01f6abe92c462d3"],["/tags/ねこねこソフト/index.html","07d329149ad31bd5f18f94fe758ce87a"],["/tags/ねこバナナ/index.html","e32d8f0510a7e4f8c82bfdaac5ffd7fc"],["/tags/はちみつくまさん/index.html","ba9371140093c20a2e54a559d4f3f9a7"],["/tags/ろりちせ/index.html","3b831bdd343e6359ed457849bbddece6"],["/tags/アイル【チーム・TATU】/index.html","30abac8fd04b993ca6d8bc6142f9b73f"],["/tags/アークシステムワークス/index.html","d38ab37291fce333abe1694018e636e8"],["/tags/ブロッコリー/index.html","bebf80effdc24bc2fec3d88e774e7e72"],["/tags/乙女/index.html","051ee93cdf48cc4ccc08cc89cd85ae5c"],["/tags/乙游/index.html","9c5a52046447eddd0dd88d90363180c0"],["/tags/停产/index.html","f1b652d489cd2d83e2c83b7d0ad569a7"],["/tags/公告/index.html","6b09b1299af9f3d4b6e60400bee8d42b"],["/tags/同人/index.html","19ecb77105a5a3a5062a5f5d9f446741"],["/tags/堀井雄二/index.html","4c0304bf78102b6f45ae61d871c19d43"],["/tags/外海なおき/index.html","42401a73d4399d3719f86ebb66ef9a04"],["/tags/女性向/index.html","c96d0869cbdf87fffc2d91798f0f0fe1"],["/tags/御茶ノ水電子製作所/index.html","6879005791690cf605c97f1c654fc00c"],["/tags/月の水/index.html","436d42187f7326fb33c527763ebecc28"],["/tags/桃野衿/index.html","faa4fa6d4b776b3d23844121ce6043ea"],["/tags/機械式少女/index.html","c9190b592fcfcfcfcc8a8becc2bd5cec"],["/tags/水仙/index.html","4b9e4a3b79dd26f655aabcf46a397a35"],["/tags/汉化/index.html","689260a614da6549eac8f438f836c320"],["/tags/熊月温泉/index.html","d5191c19e2bdb7532af039a46f16be54"],["/tags/片冈智/index.html","e5b3dc59e6fd6e2e366df21f51248737"],["/tags/片岡とも/index.html","52ae2e79cdb17eb41caf6587d49c5324"],["/tags/牙の刻印制作委員会/index.html","be6bf4f9890cfc34bd2376115bbad10e"],["/tags/牛カルビ定食-FLAT/index.html","746c378899a9977de09a9c522c0e793e"],["/tags/牧尾屋/index.html","748bf3b4c3cd1fc8a9801da538ef828d"],["/tags/犬茶屋/index.html","8955446f5b5ce5cde156b3002eb9d2b4"],["/tags/猫猫社/index.html","10b34d3d37f90334cc44c9525667c2c1"],["/tags/王宮魔法劇団/index.html","cdb3f93db31d8f7af51daa86349ccce4"],["/tags/画集/index.html","7586c65cd73657d6972ca261c5f03c22"],["/tags/索引/index.html","14aa5edc40dcd6417710fc6298e19547"],["/tags/缺失/index.html","dc960f3adc2e84b589d786c4f81297e2"],["/tags/自购/index.html","efc9b909c2d4796cf8bef3b1bf298892"],["/tags/茶葉☆姫/index.html","f59fda4c608c14aba86397f505b706df"],["/tags/郷愁花屋/index.html","e3d7e506fb1e51613c8625bc9c5d65a7"],["/tags/閂夜明/index.html","4decfba69855e3398cd84f94360051dc"],["/tags/音乐美/index.html","400a80fc11fc5bc7e149fbd4f9d92012"],["/tags/黒†救/index.html","124432c4d5944d81bc018b41984e31cd"]];
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
