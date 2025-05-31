/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","33a51e00af1a705b8284d52f8693a184"],["/archives/2024/04/index.html","52538e373cc1d1c978282b8bef93a7e3"],["/archives/2024/index.html","c8ba9886b232f827fd080af730755564"],["/archives/2025/02/index.html","5d9e2639a17a90ac151828f60cadb82d"],["/archives/2025/02/page/2/index.html","9019c8943d95cb1de5c9e06a864a0027"],["/archives/2025/02/page/3/index.html","fbcb46cb140764e8dee9e5738ea0c4b9"],["/archives/2025/02/page/4/index.html","c9d16ddd0b95722f69f9c662af87a8f7"],["/archives/2025/02/page/5/index.html","3bd939ab5ea12a426986d504c773394b"],["/archives/2025/03/index.html","c3349b8dfacc9b8c8762e3daf7772684"],["/archives/2025/03/page/2/index.html","e226a179ac08daa38bf550f13c11ffd6"],["/archives/2025/03/page/3/index.html","0b7e61fef2ffe1612972344713e149a4"],["/archives/2025/03/page/4/index.html","81a590b2762debd4100c550ab4229a0b"],["/archives/2025/03/page/5/index.html","0453437d6923e8d5e1c2c922653525b1"],["/archives/2025/03/page/6/index.html","024b462fbc0e7cb57b1c2fd1347f69ee"],["/archives/2025/04/index.html","b5ca53182e78b2fcfa867509ff13449c"],["/archives/2025/04/page/2/index.html","8ca586d80fb6cba45c07a2b4adfbdc89"],["/archives/2025/04/page/3/index.html","ddeb5cc3a18cc37c7da129031dadc403"],["/archives/2025/05/index.html","0d75a58ac5eb31200320e07757bf2f06"],["/archives/2025/index.html","1dcf0762bbfdaa5c2e027ca4f97c8c4a"],["/archives/2025/page/10/index.html","ab9ddcb9f0c76d7588b25e386e79b6c6"],["/archives/2025/page/11/index.html","9d1d82f54a7a393df0923fc9219b9147"],["/archives/2025/page/12/index.html","5e0d7c9ee76c73da85475c110ee5777c"],["/archives/2025/page/13/index.html","a6df96270c66d75075ffca7fae669335"],["/archives/2025/page/14/index.html","173b7865e5ea10f150392a33ec83f481"],["/archives/2025/page/15/index.html","b8eae0f83de11eda048d7cde43b0b046"],["/archives/2025/page/2/index.html","dff9119a306ffeec459684baa2a43e89"],["/archives/2025/page/3/index.html","fa8e618941ecbe530c8aec4eb7f1f9f2"],["/archives/2025/page/4/index.html","75c7ee2c278fd57cb12ab4c091526777"],["/archives/2025/page/5/index.html","f6ff56bee63f0e9144bf5414dc54844e"],["/archives/2025/page/6/index.html","9f09992ede12a0f09b10ddd4d3f4d720"],["/archives/2025/page/7/index.html","01d72e70479b0e0af9f88e297ce39e9d"],["/archives/2025/page/8/index.html","57c4eb674688a150b654aac1dc5ed929"],["/archives/2025/page/9/index.html","da06d99cf756dded11f09921c1dc469f"],["/archives/2026/02/index.html","57f0af4f36931a6e1553d9247165f4a6"],["/archives/2026/index.html","7fd3c686663900f8172133642a5517ff"],["/archives/2095/05/index.html","12a0daae47654a5f0fbf30c5be138a2c"],["/archives/2095/index.html","40a87fb18403049aff9974729a604b24"],["/archives/2825/04/index.html","4e989d46061ce960cd8cad9b1a029fce"],["/archives/2825/index.html","eb97d0ad441664bb2c5898fb97d85009"],["/archives/2925/01/index.html","f2271384b002d5bc520e986da0389230"],["/archives/2925/index.html","0b504dcdabdadfc6cfb89180e4ca7614"],["/archives/index.html","d63c367d1927c4efc63ac9c2742580b1"],["/archives/page/10/index.html","f944d07a61413f959360403449f9d4b1"],["/archives/page/11/index.html","023d411420f182f5abc84a1c0f48da5a"],["/archives/page/12/index.html","c259f3490531003ab1d3709f265463eb"],["/archives/page/13/index.html","ec55dfc099a6f6478862d3ccb13f2a1d"],["/archives/page/14/index.html","90c8ea4994a0d76d3425a3998d347a2b"],["/archives/page/15/index.html","ff5e4cef56371f9e103e0d1fa191c6f0"],["/archives/page/2/index.html","74035e5276dfac46e66008ef2442d3b2"],["/archives/page/3/index.html","3ef25bdd346d4f600161f3d8e4ed7320"],["/archives/page/4/index.html","ebcd6b97a57b1eb1368312e6a36cd4d3"],["/archives/page/5/index.html","b609e0b0c462ef93cd4ff715ca1f8049"],["/archives/page/6/index.html","99211e70466463c0a1d7b70e5fd69c7e"],["/archives/page/7/index.html","7c06abfe0a9c28a9d28430c1e2b55b2a"],["/archives/page/8/index.html","7e84ce5e8a4041f0c4045a6eda5e0a5f"],["/archives/page/9/index.html","0c6c8fb5ac833d5d152f0761957575b3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","f2d495cdc3de7a1563662462e641a2f1"],["/categories/galgame/page/2/index.html","a05226b1afaa86039bfe45181542bac1"],["/categories/公告/index.html","5e382554148aeef8a8c07d5e612186f6"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","1b78fca5d30e95c65ed8961829770671"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","f30ad7f28cd70068a54b3acf1339fda5"],["/page/10/index.html","61232d24d4282e9c94638907fec368c7"],["/page/11/index.html","e08fa4ddf7b711b3c65145666ab0e10b"],["/page/12/index.html","bfd40d6160e62bec327510100e7c2d63"],["/page/13/index.html","41a6d9b7b7d11a2ae1b2c277f59fe781"],["/page/14/index.html","360b6a6107caee63bbf36c1e95bfd3f9"],["/page/15/index.html","13a5abc92170e00c8e0a67f09d35e1c5"],["/page/2/index.html","9e1a529518a78b2d61e0bd8a71ddf56b"],["/page/3/index.html","ea28f2f8009f5c9a1e3c59f740bb5622"],["/page/4/index.html","73be597c581e70c063b1d217cb844746"],["/page/5/index.html","5c65c9db4d659f01ce1cafc5a0600edc"],["/page/6/index.html","3640722caa462b42a26c6b6f5d166c57"],["/page/7/index.html","124c5d9f2bd8df5be1ac47fe62ae442b"],["/page/8/index.html","e6441e25716c00af0559aeb66baac2f8"],["/page/9/index.html","fb46ea674e5a1033a4bbb4b3b3ec65fd"],["/posts/10c9dd98.html","69e26ea979ce0b9279b856be066147b5"],["/posts/126ebb99.html","357af74ba9f0019db3f9626c4a875bbe"],["/posts/1295b569.html","ab6aadb6d3db0d2136f7732a5dd0e6b8"],["/posts/1370342.html","5ece3f68e10049180e8db1712767008b"],["/posts/15ef14c2.html","fe7b23198b3ec5b61afea18242ab76e2"],["/posts/15f3959d.html","da2b9ad9361c001d17dd64d35d75c23f"],["/posts/18ab785d.html","36474870e52b19d3c7f9ba5bfb0fd0e1"],["/posts/1d59b71f.html","913c7264013ae94e7e69e186b1ff1035"],["/posts/20b3f3a4.html","d48d66cd408083e49dcae00e78382286"],["/posts/245f1c7d.html","41142f6becfc9556e0bfaee9420a6ad6"],["/posts/252658f.html","6f23a4e7154e96188285c200ae5d4102"],["/posts/28397adc.html","d14778233dc3a68cd2ed991e1fa445cd"],["/posts/2ad07f54.html","577a920a248959b152044867933a0024"],["/posts/2b38bce0.html","0b23f12a2b308635bcbe987e4290daa7"],["/posts/2c0a6836.html","74939bdd55c53bd84791adbb093ceae1"],["/posts/2ce39bcc.html","8dc69de9e5fd7bd083de1bea08f9c3f8"],["/posts/2cf620f0.html","c971fa7139d67565c54e6aadbf2f9b43"],["/posts/2e30fd6d.html","a7c83c60c4f3d7cd58ad000e5b77c8a6"],["/posts/30a413ad.html","14e66bff166cdf1b9bf63112d0c6e905"],["/posts/34292736.html","384fabbae924f4941c50f68ed03ca617"],["/posts/3468cbe.html","26eba4106fb915dced81f7a86566eec8"],["/posts/39176dc0.html","b40fe117ba61bc0b388efff8ffc07653"],["/posts/3be6a165.html","f8d006983d8458577116980246f36d7d"],["/posts/3daf73b4.html","7e5cb805999165fb8fd642fa0f01e3c7"],["/posts/3e118dbf.html","94daf4bfc8d7e777f5b410f880316986"],["/posts/3f7d823a.html","a7a2c54f1e5ff67f9442ed6ed396cd57"],["/posts/3f978819.html","3ab65fc0f959b55878edd913455ee781"],["/posts/41dac80e.html","69403c82f7c2d09c97b848aae4ba2138"],["/posts/43945723.html","e188bffac92346906f8a1a8daf852847"],["/posts/44124a6b.html","b396e6308017636a6f9fcd7b084e0932"],["/posts/476a3006.html","3115db948ce42f3e1ea34090a0af5616"],["/posts/47abb61d.html","76f8529e7d092e3f69168e401029235f"],["/posts/4996478a.html","2b7bb4a7f245d775c40cc39f54f52bdd"],["/posts/4b689be3.html","5c1eee140ab286630acd05f8a566cf69"],["/posts/4cf8423f.html","115ca19954f398ada2bce9c2ca88afba"],["/posts/4dcf85c.html","629b2c1d0cec96737db406b12ff0b408"],["/posts/4e314e04.html","cfdc7ca6850bfe7426e7aa9b7e841ae6"],["/posts/500cd322.html","22b1a962c368e84a30c5639604b3ee92"],["/posts/51c9b1ff.html","2b0e04411586b03f2d07691c1295fc2c"],["/posts/51ce68e8.html","bde49606764d98286a8cfbb7924562ab"],["/posts/52b5b3c6.html","d8728b6592a30605d54580294e35be81"],["/posts/54f496ad.html","92cf770f3695f71828da564489a503f5"],["/posts/558e1f30.html","d023d05b6775317986d71fd5112385fe"],["/posts/5d8bea92.html","81a88406fa55a76d403a3c0b724a99c9"],["/posts/5f6e0c59.html","dabf8315ac199841e9d6c7a82ad89dbe"],["/posts/61a63a84.html","f95d3c61f605201cc712b80985514870"],["/posts/625ab7bf.html","5a237121c5ed9bc685225e2c2cac0c94"],["/posts/6336a2f9.html","71b9b72404eace63b6f403234ee1eb9f"],["/posts/6432d61a.html","484157b4bc1d4fb7beafa7ca581e25aa"],["/posts/6515f032.html","6ca4b71c148987cb35e6256dace9e474"],["/posts/6720ccdd.html","7863c0b5aa237723412d2c408cf86e2d"],["/posts/6a4b5ac8.html","8555783cec6f02463130c6cda6b51c14"],["/posts/6aa4177c.html","be7f66f2e3c769dda86fc91e6c3199b5"],["/posts/6b15f81f.html","21af9d43cb784cae2aa0c9a4b1f29494"],["/posts/71131d34.html","c299868a9c3992bc4bc2a38a090e94e4"],["/posts/742fd48d.html","21acec0e61a8b6031ff26559819de02b"],["/posts/78a8a8d3.html","ddaa73a96c11f7a45e5f70d3f9855722"],["/posts/7a5ef3d0.html","98c34e72a4e51ef1ce8743d095979c19"],["/posts/7b41e1ac.html","87c6f22e168dbd443a30eb665fda2d4f"],["/posts/7b51011d.html","7a0dae4e9dcddb152643e104333019a3"],["/posts/7e3aa3e2.html","980008a0c9388980be272560d830a7e3"],["/posts/80fe2691.html","f10f5623d23d9f7381c863c7c3b02e4e"],["/posts/81ac52e9.html","baefffd5cce477bb3dde9c85240f8fc1"],["/posts/82332d11.html","2ba08fe2db398f873710b9d2f2e9f4b3"],["/posts/8486f6f9.html","5b6be927b6f629f014a5a033137d43df"],["/posts/849b40f8.html","2924f2199bb490417c6e26784fec3be1"],["/posts/85c51d68.html","6b67b10fc37268cc19ae323920b233d6"],["/posts/86a6c500.html","672b69f8a626a62d2bce41f2a0141612"],["/posts/886f8d3.html","92aed8281baf339145dcef6c5c91140e"],["/posts/8a7cba10.html","d06b1b89a7dc1aaad0ecff30ec79efe4"],["/posts/8ac11b41.html","ba34a71e293ca0845b01cdabc14140ae"],["/posts/8c3f2fd8.html","470af2fca1526710b3cd87348079b3c8"],["/posts/8dd520d9.html","4b4b5dd72e581645fee9841cb3c85f31"],["/posts/8f555654.html","96f9f61bb734ed1208db5f6eb03eec6b"],["/posts/92a980c2.html","3625c2ef5ea5d8a9697ce5014829b654"],["/posts/92ce16.html","5e5b5386b01cb336cc34b29a0deb8891"],["/posts/93e9943b.html","446df1f23555ef37609309244270e275"],["/posts/94d3c794.html","1e940d96261aa2d7a1e957bf20a39d29"],["/posts/96b281f2.html","bbeee2247fed98e51bed7b75ca185f70"],["/posts/97f50eea.html","cde5497cb5ebab35edb4a0779f94f800"],["/posts/97fca8be.html","a613b39f1334aede128d392604f576c6"],["/posts/98662d05.html","a9a72f0d039d4d5bc6b72e3bd23e37b6"],["/posts/9a2f6162.html","9fe13ce640be48497bf6e2f028e55641"],["/posts/9b22a48d.html","8896854ddd7d8e0da31068f54b7ed026"],["/posts/9cb455b1.html","faaa8f9f652f445abeae793e2fa55140"],["/posts/9ecdeecc.html","ddb022a1bb6a571784d2cb101e381884"],["/posts/9efd7701.html","3f6bd214bb9e01e4703b4df5f59337cb"],["/posts/9f61c1a0.html","09c22b04a1359960c5eb795a320cfabd"],["/posts/a1de710.html","132e204f9af413d6bf922060e0faf6d5"],["/posts/a30eb0cd.html","8b8ddce62084d9fa3f7f03f9eb2f7971"],["/posts/a72f71c2.html","fa9bbc60b2cb034161c9fa334260e0bf"],["/posts/a7634b5d.html","24ea8efcb87721fb1dbf8c0fc5a48b93"],["/posts/a8c593b5.html","0f1b1f890fccb3a0caadf1849f2d7c06"],["/posts/ad0c1efa.html","4ef9e23f8a96dc74ed8ae940f44fe004"],["/posts/ada3f440.html","f8095c5a12da476fe6709d70ace3d489"],["/posts/af1807ef.html","3e923adf7fbf2b93d6ed656048f8f1ad"],["/posts/b397bf03.html","782dc19e1210def33b9077c51003e709"],["/posts/b497b647.html","71442861568b5f88cfad49dfd19d9b3d"],["/posts/b4d464b0.html","c118700c85aeac3a45aea72033b157be"],["/posts/b5fb773f.html","26f680c87246f00e9a46fbf07be834f9"],["/posts/b8d46b32.html","67064e6bc9a972e58bbeb8410f55333f"],["/posts/c1b2c6c9.html","d97ce8fa38826d0305f9fddd32125f60"],["/posts/c2111cbf.html","067b634151e42113f82db294deecfcef"],["/posts/c316c2e8.html","493673bbd5cd370aa1464385036585e0"],["/posts/c43e60b5.html","dba2ede4e271e4e2158ede25c8685ef0"],["/posts/c497a412.html","ef7563ecc0b614c75abb350f73bc8443"],["/posts/c5395ba3.html","d5990d58958bb05f6ac655dd1c42aa8e"],["/posts/c5de299a.html","850edc7cc26ddaefaec7ea14ce0771f6"],["/posts/c60028d9.html","7441b7990bc3237bdf9a901833ee30a1"],["/posts/c70bba9c.html","e8b52bb96efb50e825755b182c97a17d"],["/posts/c797535e.html","62b1bf7666c0a41d4a5c59f5cf3ff258"],["/posts/c7a62c79.html","cf629323a0be4bf2481cbda9e62a716a"],["/posts/cae2c959.html","e003511c96cbbfb359849045ac69d03c"],["/posts/cbebef2b.html","35852ac19963533a78e1e162b31f853b"],["/posts/cc4c0017.html","b9da5e4bcc81236e67f45be09eb3aef2"],["/posts/ce25023e.html","ca14697658660ae38aaf67bf5ad802a2"],["/posts/d2fd4837.html","816d526bf39ee79625b59c0a17b41936"],["/posts/d3233cbb.html","f53b0d025a752f30fa92084f571375fd"],["/posts/d3a745a8.html","bcab46c977d7ee1c03cd262f64046302"],["/posts/d7e940d2.html","c98e6ef040583dddad3367e9107c78c6"],["/posts/dc815d5.html","bcd18f918d3302c3c3f84f34b347e568"],["/posts/de25b0be.html","1dd3465afbc2994f8c531f4a6085c8c2"],["/posts/e2623b4e.html","4c2aad9da487521862a82ec3ff3cb47b"],["/posts/e3ab6ad8.html","3711220570abea8ecab2bfe3fbf9cb05"],["/posts/e5018da6.html","665bc00c201752bceadcfdf032c54f22"],["/posts/e5963272.html","05d611829cbbfcb73bdec97635960dff"],["/posts/e5ef4c3c.html","e8657153c1b016132fbdbee5cebb10a1"],["/posts/e624b065.html","c36368ec2380446a99874555370b5d31"],["/posts/e7c703bb.html","da18c47ca36e9f9e429d7863be639f60"],["/posts/e8f14b6c.html","37177d895797056d714ad7a047dadf13"],["/posts/e91abb63.html","9b567c65e6f5da601870a7e5abc86e09"],["/posts/ea9a8808.html","818f5a80081283c5f8849dae48eb1459"],["/posts/eb784749.html","3f64dcbdc2dbe098df8cc78f627a52cb"],["/posts/ebaf2232.html","d42d2c2cc39522292f8031bf2e721d79"],["/posts/ed75f185.html","cc077243df1e8da284fe6cde66e056e8"],["/posts/ee1ed673.html","ec07a2c5aa5d24afa381a221eb1af192"],["/posts/f0c3ed61.html","ac8d17416520327033d9bbf33e92d608"],["/posts/f151ff43.html","0e2327ed187980169802d9ffaff184d4"],["/posts/f21e7f84.html","2b771c604bd726bbb54b26ce9b31102b"],["/posts/f230b0fd.html","540cbd737d4ab8d5fd5588a0f02b89e0"],["/posts/f28a7877.html","c6a13f28677d27133b7188b35a2745ba"],["/posts/f663d5cc.html","9341196be5b1945779aaaeb9d955b92b"],["/posts/f730ad18.html","4fee7d1651474fa0443d08b6021a2e7e"],["/posts/fb5d4608.html","1cf80ad3006b8abe3106e264967b8018"],["/posts/fc04d0d4.html","3679118f6fa9c21db499e45ef8a7e019"],["/posts/fc455f81.html","fefbf6700c4a69be10d2cb0f5301587e"],["/sumire/index.html","763d0ad7a849c80693c11511ee9fbbc6"],["/sw-register.js","fed0c8df4647422d61472cfc9165ab28"],["/tags/AKo/index.html","d246b1557ae1ebb89b121cf0087bf4b5"],["/tags/APPLE-project/index.html","246420cc6d3fb267df9aa22320bf8c62"],["/tags/Ankrache/index.html","3fa20a271309f39a42e9f59d5006c922"],["/tags/BELL-DA/index.html","81fe4677b28c931b7db3c7271de211b7"],["/tags/BL-Game/index.html","2a7fd7ccad387384bd529164b395008f"],["/tags/Blue-Dahlia-Digital-Creators/index.html","1f9de03a1551329b5e5bc0187cb2f77e"],["/tags/Blue-Line-Games/index.html","942a0e8209bf9bb9be0cb4c4a2faf2f4"],["/tags/CD/index.html","a745be0920b9e63773eeecf7d9404e7b"],["/tags/CHUNSOFT/index.html","a2c3cc77495e1a8834ae21795fdd8448"],["/tags/Check＆Stripe/index.html","db44efc8064ac1f1aacbf72881a923a0"],["/tags/Cherry-Pie/index.html","f0d19947d6a0ad291f980a1ab60380ef"],["/tags/Circle-Mebius/index.html","f46d6e7e4e713f0e7d5bcde349e2b778"],["/tags/Cosmillica/index.html","e807173094bc04deaeea219a5df9fd23"],["/tags/CresCENT-BLANK/index.html","9c24d2605e5879e28377080792c3081f"],["/tags/Dopamine-Software/index.html","df9f60228a5c7a40c3d9a5bc0857b3ef"],["/tags/Dos/index.html","321eb18137d0a2658e9db45603f1a5d7"],["/tags/Earth-Well/index.html","d30a569d542a09513e399be8763730d1"],["/tags/Forest/index.html","8079efd1f1bb222b85a59187e17011d7"],["/tags/HaccaWorks/index.html","e0645780d8c88a9837704e76e9ea67eb"],["/tags/Kanon/index.html","6c448ee278c22aef1476ed0e37bafb80"],["/tags/MANATSU-8/index.html","f81c3bf52c9e872d126cffba7a98028e"],["/tags/MARINE/index.html","3d8ed8e2659579def2e9ece0e1beb47b"],["/tags/MIO/index.html","ba5fd9bcf541afdaa8ff7f3edbcfad0a"],["/tags/NAOX/index.html","410412bab9e97d84bb069f85d0a289ac"],["/tags/Namikaze-no-Uta/index.html","b56f61e4ee53117a96a0de45cb0aaf0f"],["/tags/Nmyu/index.html","909403bd3aed2c045dae87f24c8e0413"],["/tags/O-S-I/index.html","98afadc80cc3c96db1dbc6838fe6bc6c"],["/tags/Omegaの視界/index.html","acad4230d361183f415895d08f556ca7"],["/tags/PC88/index.html","4b52e4dc7724d1293a418e1ac51ccd20"],["/tags/PC98/index.html","dcb1a47f777e4bad32fffa24b160e03d"],["/tags/Perpetual-Room/index.html","577e873856d32583e42e364dc464780d"],["/tags/Pleiades-Company/index.html","9e2a49b2476e7f4c5297514a0fa289ec"],["/tags/Project-Twintail/index.html","c24643d30944a2f925b20692280adee5"],["/tags/RIFF-RAFF/index.html","c26d1acaf8e3d92746eb35e1559e42a0"],["/tags/RPG/index.html","126b3a72ff37d7f3a9eed6ab4954c2fd"],["/tags/RPG2000/index.html","88f335b0acb44adeaf5d0bda319f38f0"],["/tags/Reverv/index.html","4ea35dd67812e455ddb62595a1ef2e01"],["/tags/SENTIVE/index.html","ea6c350405a30165680611bacb6ea9d9"],["/tags/Saihate-SOFT/index.html","98bfd1e459511972e358bf21de202419"],["/tags/Scrubbing/index.html","6ae79bf67fc29a47895cdb74dcd13712"],["/tags/Sky-On-R-imaginAtion/index.html","326f05071d74bc6239ebb7f0a42f6c20"],["/tags/StrayMoon/index.html","e63742ea53982b3f8f02cbf43102910a"],["/tags/Studio-Bu-Sa/index.html","87e8f01b64888a695a4ca414e4b51a2f"],["/tags/TRANSPARENCY/index.html","b3c155ff3066e1af5b2c863fc9097456"],["/tags/ToHeart/index.html","930c9da57e646f0fe65d7821afca882c"],["/tags/Traumend/index.html","ba65dcaf9a4ac0a54f93ef6032dddda1"],["/tags/Witch/index.html","19e2802f7c54f931371e497e56845fce"],["/tags/adonis-project/index.html","79d4d7c651a30883ad3134aadf29dacf"],["/tags/capriccio-suite/index.html","b46607847c032544f93ef953c3c0383f"],["/tags/flash/index.html","f239ea0467e2506321e82b1d4b732c96"],["/tags/galgame/index.html","2dd0b7147c1bc865dd274f8d100e0b2c"],["/tags/galgame/page/2/index.html","0c4a87ae04a874487dab473d3c4c6cb1"],["/tags/gal资源/index.html","ba30ada3897ba7848a17378f816a8e53"],["/tags/gal资源/page/2/index.html","2fb454724cccfb9aa7dc439991a08c5b"],["/tags/gal资源/page/3/index.html","e6a57a15af937cc65821fd81f02e0ce6"],["/tags/index.html","293badf89bb4678968829ee65d02cebb"],["/tags/m-kz/index.html","73229e4c1abe97f2223c682b30daf011"],["/tags/purgatory/index.html","decedc8017fe5fb49dd033c455973272"],["/tags/rkr/index.html","8df2d5b0951f7f8571f32007721e92d3"],["/tags/team-eye-mask/index.html","c404708371af097900a5eccd3f444cd6"],["/tags/ありすくろいつ/index.html","477a0c3f6305fa0f957df3286ef77eaf"],["/tags/いつものところ/index.html","cb5554a2b300fa6bf4e7858e8776d2dd"],["/tags/きつねみみ饅頭/index.html","e829f9339ef0f5a96517137dd438832d"],["/tags/ねこねこソフト/index.html","82ac9f0ebaf4d0e7335b9ea7c6d0d843"],["/tags/ねこバナナ/index.html","32d6e360b6b43afc1f1889a29fe7fc79"],["/tags/はちみつくまさん/index.html","13d5f01b92addc9e4ef1806d0e4be7e8"],["/tags/ろりちせ/index.html","69ccad05d741f81b0d9fb448569e1f88"],["/tags/アイル【チーム・TATU】/index.html","afa5c0b0035f9b8bd642af9574941ae6"],["/tags/アクアポラリス/index.html","aa5b0a5cb626a3c99bc1307b01d52545"],["/tags/アークシステムワークス/index.html","60ea0209e0312fc2d684a70c3f9c93cb"],["/tags/ブロッコリー/index.html","8b2a3c1f6129b702b667541b91da5aee"],["/tags/乙女/index.html","d31d23867ba5f2a0d1846703a8038637"],["/tags/乙游/index.html","dd280f13926333d36988f6f669ae901d"],["/tags/停产/index.html","aa35ae8c97b556edc8d2ecf17690ea2d"],["/tags/公告/index.html","3a0c2b3bae1f387ecfb5853eea27a563"],["/tags/同人/index.html","8867e3b0a9f9055a8ab45aee57e1c781"],["/tags/堀井雄二/index.html","d23d9b157a42b50c05f32e955cdb1fae"],["/tags/外海なおき/index.html","e4a4fbab620fc7f7902679227557fb58"],["/tags/女性向/index.html","483fc2089f1db79c4972c2eb4dd061c4"],["/tags/御茶ノ水電子製作所/index.html","6e5cecf8c45ddf509ce8859760eaa345"],["/tags/月の水/index.html","f1167643d9e9587d55ac5a84cfa18368"],["/tags/桃野衿/index.html","29f641e99ca617abc80ca4c42646048d"],["/tags/機械式少女/index.html","1171247217bc7f3745a6cd184f28a2f1"],["/tags/水仙/index.html","689fd8161df50bbc71fc9663e86f8f5d"],["/tags/汉化/index.html","dfd3596595bdab163ad99d0c6aaae922"],["/tags/熊月温泉/index.html","020f506bb6b504b9a276aa37870f008c"],["/tags/片冈智/index.html","24c904ed6b4cb6266d926770721e0f54"],["/tags/片岡とも/index.html","38b407dcdeab4a552ca67bf633d8b886"],["/tags/牙の刻印制作委員会/index.html","535b8541f779da1a618822ea5e03eaf7"],["/tags/牛カルビ定食-FLAT/index.html","9c1dee527b319523dfbc9e4568f4c268"],["/tags/牧尾屋/index.html","dfde522f3bcb4f6184fc1f9c7fa10dcf"],["/tags/犬茶屋/index.html","2479b6c0ffb304cace1dc640e252fd11"],["/tags/猫猫社/index.html","050781207b58130520861c4abffc1fa4"],["/tags/王宮魔法劇団/index.html","b4210846aaba222de02b9d6844cda1f9"],["/tags/画集/index.html","1a437b4deda15c1044d4a9d59254076d"],["/tags/索引/index.html","f66134cc8e02458b7b10fcdeed9cfe63"],["/tags/缺失/index.html","37262b9b38f299cf68fceb11dd864707"],["/tags/自购/index.html","845cf94001efd458d4157dc7e98ea40d"],["/tags/茶葉☆姫/index.html","d95ca7a2a29847efa2f5e70672292813"],["/tags/郷愁花屋/index.html","d34bdda0a97c8016c997a4d7aec7c3e1"],["/tags/閂夜明/index.html","c26a25af878e8a5ca3c51087e289b236"],["/tags/音乐/index.html","be9f1a86b5b8ef0820e2657242bcaabc"],["/tags/音乐美/index.html","2e8ca2ccfa81550e6eef8d58bf49cd6c"],["/tags/黒†救/index.html","1c78da095396cb839372c83e368c837d"],["/tags/黒百合っ子大集合/index.html","975aed6803f9895a6d2a223ad634dfcc"]];
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
