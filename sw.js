/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","eb2661dc67c222a93101319db2857b3d"],["/archives/2024/04/index.html","f093792e34b6de6a2a21aed1505deae0"],["/archives/2024/index.html","4f94bd28abbc0edb962716a0704d7fbb"],["/archives/2025/02/index.html","60a37ca74e8c8a1a595bc0b73cbbd73b"],["/archives/2025/02/page/2/index.html","6ef1b515c9774387c5e9148c78f51d74"],["/archives/2025/02/page/3/index.html","f05d16ba808f428707ec6bada4abeb14"],["/archives/2025/02/page/4/index.html","2d751e35fc85c7cba98f8122e3208cf9"],["/archives/2025/02/page/5/index.html","483ca137be6d3bb48ab80034e3d60fd2"],["/archives/2025/03/index.html","cd34e9f41a2a2fc632d0826dc110203a"],["/archives/2025/03/page/2/index.html","f09e9522a94ea85f9091ee065f54a7c3"],["/archives/2025/03/page/3/index.html","8f58fa6ad7b13dffd128a57686414802"],["/archives/2025/03/page/4/index.html","d1fc8c80eb0048107cea1b779550dbf3"],["/archives/2025/03/page/5/index.html","6c363a1608c5ca168003c9d570968ae6"],["/archives/2025/03/page/6/index.html","d205984d26e0da6e62f7255af256b85e"],["/archives/2025/04/index.html","9fb83fdb942fc9e5298c05315fbe8f30"],["/archives/2025/04/page/2/index.html","62a3a23ac0579595788cd4fbe20bf6c1"],["/archives/2025/04/page/3/index.html","334fe7675440b168f81a32f7d7455cd9"],["/archives/2025/05/index.html","7e45487b126dafd4dfd974d8c20aa6f8"],["/archives/2025/index.html","cdf2e6c23d68cacf442250a98eff3ae5"],["/archives/2025/page/10/index.html","209fa4539caab44bf0218a8f7e7e7c99"],["/archives/2025/page/11/index.html","d47fc1cf05a96c8c1eb6a43812dfc920"],["/archives/2025/page/12/index.html","b5a8f5b5e72887a440703e1fdfb35165"],["/archives/2025/page/13/index.html","e77efb8c903ac076ed711e6ec290f36a"],["/archives/2025/page/14/index.html","124a1e9e21b8a95d706a2ae4a8ebe8f6"],["/archives/2025/page/15/index.html","f840acdd493f7ded52c5fd1a516f510c"],["/archives/2025/page/2/index.html","19a332e5f0b80c763800f457e931e5f3"],["/archives/2025/page/3/index.html","79f8727eb79a5d9c4b48c619a73f450b"],["/archives/2025/page/4/index.html","c3e2231e3ca493c685aecfb82b1cdf05"],["/archives/2025/page/5/index.html","b0bccd213f00113792598353b2efe045"],["/archives/2025/page/6/index.html","f280153b4f3eb8961128cb223d7f64f4"],["/archives/2025/page/7/index.html","dd4ab2677ade9d765039fbfc84d0cd3c"],["/archives/2025/page/8/index.html","998629f4acc4f5b243615d5e6a1ad808"],["/archives/2025/page/9/index.html","de0627221f77b9cefa9d98e397d2d03e"],["/archives/2026/02/index.html","4a478b51402c06511031df782c2f4092"],["/archives/2026/index.html","4d29e56b34c91f0f8a7d3a74bc9e9a46"],["/archives/2095/05/index.html","607cfefd9ca13266a4d19431d8689a72"],["/archives/2095/index.html","22fbb1d3e0edeac4b4697aef6de6e690"],["/archives/2825/04/index.html","6981d2501f73f6905d0ab09d826a8392"],["/archives/2825/index.html","4cdce95f356f84c66d376cae6eb0a75e"],["/archives/2925/01/index.html","52dc54461b4f72c7f0db81f9e91b092e"],["/archives/2925/index.html","e1f69e60e44734218a9572cbf123492c"],["/archives/index.html","974ce9222e6760d23dd73826d0d6ea72"],["/archives/page/10/index.html","ea2f5af9a28919296812c45a5a965f67"],["/archives/page/11/index.html","1024a6c3c30a6a315c75125d962e6d36"],["/archives/page/12/index.html","e15c38f4839efb652c9ba884926002b2"],["/archives/page/13/index.html","2d2825c461a175751d4a5e39a2e6bdfa"],["/archives/page/14/index.html","a6adf2573dd485c54dbf5261806e4484"],["/archives/page/15/index.html","4edf50ba2a5cd571be1f039d9c23ac51"],["/archives/page/2/index.html","38737daab8287967a26f273b2e2e9d76"],["/archives/page/3/index.html","e3fbb1c06238d2c86728c2150efa8faa"],["/archives/page/4/index.html","c141fb567394b5f69cf98579cf7ad3d2"],["/archives/page/5/index.html","38398f72ad7abc9cb799a201dcb37aef"],["/archives/page/6/index.html","9c659c152a40e6b066e8bc91278f3482"],["/archives/page/7/index.html","95460b0808e834e5f03c63755b47ccec"],["/archives/page/8/index.html","a6f025beeb9a2d39179dec67c02a9e47"],["/archives/page/9/index.html","e4f6e45df62b0419eb1ad26523061cf5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","964de9f315b34645ae718c78a2df71ef"],["/categories/galgame/page/2/index.html","109767142f6bd7bdd0835f92baec4578"],["/categories/公告/index.html","49dc2243f9db45c0a54bc093cc54908f"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","121372dc4885317467ee8a18e54035b2"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","0064913b3c8a158281fbfd250faad39e"],["/page/10/index.html","418e23ab91bde70e40073285dec540de"],["/page/11/index.html","f1835bc8e07afb931a27b2482935aff0"],["/page/12/index.html","1e94ea438f1b8087543ea0a148ac2227"],["/page/13/index.html","db14b492bb90700dcc3e7775abc34f6c"],["/page/14/index.html","f7bad22c4fc6a40d969937913d8b4ebd"],["/page/15/index.html","14cf84c73dfdcb3c24a060e877f9c664"],["/page/2/index.html","8677b3e0037dbf0c7a971ea93241c410"],["/page/3/index.html","9bbd075161ed76c58f608793197639ee"],["/page/4/index.html","849802595542d5efea8562d7ee5da1c1"],["/page/5/index.html","c7fbf1b4ae8d083e6537b984e3f508f3"],["/page/6/index.html","849fc638975eb31624ac1f446b68d0fb"],["/page/7/index.html","fa3f2ba54f587c97dbeff59105cee65d"],["/page/8/index.html","853106c598f34174d5bcef9fbc13cbd1"],["/page/9/index.html","ee1dc85d282a8a573ca0cc860c4263be"],["/posts/10c9dd98.html","69e26ea979ce0b9279b856be066147b5"],["/posts/126ebb99.html","357af74ba9f0019db3f9626c4a875bbe"],["/posts/1295b569.html","ab6aadb6d3db0d2136f7732a5dd0e6b8"],["/posts/1370342.html","5ece3f68e10049180e8db1712767008b"],["/posts/15ef14c2.html","31eec51c6136a77ffdb10dc3e30e1909"],["/posts/15f3959d.html","da2b9ad9361c001d17dd64d35d75c23f"],["/posts/18ab785d.html","36474870e52b19d3c7f9ba5bfb0fd0e1"],["/posts/1d59b71f.html","913c7264013ae94e7e69e186b1ff1035"],["/posts/20b3f3a4.html","d48d66cd408083e49dcae00e78382286"],["/posts/245f1c7d.html","41142f6becfc9556e0bfaee9420a6ad6"],["/posts/252658f.html","3f6d0c3e928d6445be31c98f851bd160"],["/posts/28397adc.html","5b42bfe3d5d1db612676032527c708ba"],["/posts/2ad07f54.html","577a920a248959b152044867933a0024"],["/posts/2b38bce0.html","0b23f12a2b308635bcbe987e4290daa7"],["/posts/2c0a6836.html","74939bdd55c53bd84791adbb093ceae1"],["/posts/2ce39bcc.html","8dc69de9e5fd7bd083de1bea08f9c3f8"],["/posts/2cf620f0.html","c971fa7139d67565c54e6aadbf2f9b43"],["/posts/2e30fd6d.html","a7c83c60c4f3d7cd58ad000e5b77c8a6"],["/posts/30a413ad.html","4455d86ccc95baa35ce970e8e06627e7"],["/posts/34292736.html","384fabbae924f4941c50f68ed03ca617"],["/posts/3468cbe.html","26eba4106fb915dced81f7a86566eec8"],["/posts/39176dc0.html","b40fe117ba61bc0b388efff8ffc07653"],["/posts/3be6a165.html","f8d006983d8458577116980246f36d7d"],["/posts/3daf73b4.html","a846a5166cacde1364ba9efd63285328"],["/posts/3e118dbf.html","94daf4bfc8d7e777f5b410f880316986"],["/posts/3f7d823a.html","a7a2c54f1e5ff67f9442ed6ed396cd57"],["/posts/3f978819.html","3ab65fc0f959b55878edd913455ee781"],["/posts/41dac80e.html","69403c82f7c2d09c97b848aae4ba2138"],["/posts/43945723.html","e188bffac92346906f8a1a8daf852847"],["/posts/44124a6b.html","b396e6308017636a6f9fcd7b084e0932"],["/posts/476a3006.html","3115db948ce42f3e1ea34090a0af5616"],["/posts/47abb61d.html","76f8529e7d092e3f69168e401029235f"],["/posts/4996478a.html","2b7bb4a7f245d775c40cc39f54f52bdd"],["/posts/4b689be3.html","5c1eee140ab286630acd05f8a566cf69"],["/posts/4cf8423f.html","115ca19954f398ada2bce9c2ca88afba"],["/posts/4dcf85c.html","629b2c1d0cec96737db406b12ff0b408"],["/posts/4e314e04.html","51b81fdcdb30e6b06e5c597cb59c3422"],["/posts/500cd322.html","22b1a962c368e84a30c5639604b3ee92"],["/posts/51c9b1ff.html","49f7476be9c2cad3bc2b5747a9c6cf32"],["/posts/51ce68e8.html","bde49606764d98286a8cfbb7924562ab"],["/posts/52b5b3c6.html","d8728b6592a30605d54580294e35be81"],["/posts/54f496ad.html","2dcb7256b94f1fc2cef1600fb46961d0"],["/posts/558e1f30.html","d023d05b6775317986d71fd5112385fe"],["/posts/5d8bea92.html","81a88406fa55a76d403a3c0b724a99c9"],["/posts/5f6e0c59.html","dabf8315ac199841e9d6c7a82ad89dbe"],["/posts/61a63a84.html","f95d3c61f605201cc712b80985514870"],["/posts/625ab7bf.html","5a237121c5ed9bc685225e2c2cac0c94"],["/posts/6336a2f9.html","4103c546da552664b0ccb996a9d2917f"],["/posts/6432d61a.html","484157b4bc1d4fb7beafa7ca581e25aa"],["/posts/6515f032.html","6ca4b71c148987cb35e6256dace9e474"],["/posts/6720ccdd.html","7863c0b5aa237723412d2c408cf86e2d"],["/posts/6a4b5ac8.html","8555783cec6f02463130c6cda6b51c14"],["/posts/6aa4177c.html","be7f66f2e3c769dda86fc91e6c3199b5"],["/posts/6b15f81f.html","21af9d43cb784cae2aa0c9a4b1f29494"],["/posts/71131d34.html","c299868a9c3992bc4bc2a38a090e94e4"],["/posts/742fd48d.html","7c8a645386000a508290f96f838450eb"],["/posts/78a8a8d3.html","ddaa73a96c11f7a45e5f70d3f9855722"],["/posts/7a5ef3d0.html","98c34e72a4e51ef1ce8743d095979c19"],["/posts/7b41e1ac.html","bad7934c0e661f84f1c0225cb6ce233d"],["/posts/7b51011d.html","7a0dae4e9dcddb152643e104333019a3"],["/posts/7e3aa3e2.html","980008a0c9388980be272560d830a7e3"],["/posts/80fe2691.html","f10f5623d23d9f7381c863c7c3b02e4e"],["/posts/81ac52e9.html","baefffd5cce477bb3dde9c85240f8fc1"],["/posts/82332d11.html","2ba08fe2db398f873710b9d2f2e9f4b3"],["/posts/8486f6f9.html","5b6be927b6f629f014a5a033137d43df"],["/posts/849b40f8.html","2924f2199bb490417c6e26784fec3be1"],["/posts/85c51d68.html","6b67b10fc37268cc19ae323920b233d6"],["/posts/86a6c500.html","672b69f8a626a62d2bce41f2a0141612"],["/posts/886f8d3.html","92aed8281baf339145dcef6c5c91140e"],["/posts/8a7cba10.html","d06b1b89a7dc1aaad0ecff30ec79efe4"],["/posts/8ac11b41.html","ba34a71e293ca0845b01cdabc14140ae"],["/posts/8c3f2fd8.html","6a53a062e92b029ee2e18d885c3f01f9"],["/posts/8dd520d9.html","4b4b5dd72e581645fee9841cb3c85f31"],["/posts/8f555654.html","96f9f61bb734ed1208db5f6eb03eec6b"],["/posts/92a980c2.html","3625c2ef5ea5d8a9697ce5014829b654"],["/posts/92ce16.html","5e5b5386b01cb336cc34b29a0deb8891"],["/posts/93e9943b.html","446df1f23555ef37609309244270e275"],["/posts/94d3c794.html","a2389790f562d5a7efc41c28edfbe359"],["/posts/96b281f2.html","bbeee2247fed98e51bed7b75ca185f70"],["/posts/97f50eea.html","cde5497cb5ebab35edb4a0779f94f800"],["/posts/97fca8be.html","a613b39f1334aede128d392604f576c6"],["/posts/98662d05.html","a9a72f0d039d4d5bc6b72e3bd23e37b6"],["/posts/9a2f6162.html","9fe13ce640be48497bf6e2f028e55641"],["/posts/9b22a48d.html","6607557898affb0ecdc55f8cb668f4ba"],["/posts/9cb455b1.html","faaa8f9f652f445abeae793e2fa55140"],["/posts/9ecdeecc.html","ddb022a1bb6a571784d2cb101e381884"],["/posts/9efd7701.html","3f6bd214bb9e01e4703b4df5f59337cb"],["/posts/9f61c1a0.html","09c22b04a1359960c5eb795a320cfabd"],["/posts/a1de710.html","132e204f9af413d6bf922060e0faf6d5"],["/posts/a30eb0cd.html","8b8ddce62084d9fa3f7f03f9eb2f7971"],["/posts/a72f71c2.html","fa9bbc60b2cb034161c9fa334260e0bf"],["/posts/a7634b5d.html","24ea8efcb87721fb1dbf8c0fc5a48b93"],["/posts/a8c593b5.html","0f1b1f890fccb3a0caadf1849f2d7c06"],["/posts/ad0c1efa.html","4ef9e23f8a96dc74ed8ae940f44fe004"],["/posts/ada3f440.html","9842e10ffd9ae5611697711327953cab"],["/posts/af1807ef.html","3e923adf7fbf2b93d6ed656048f8f1ad"],["/posts/b397bf03.html","782dc19e1210def33b9077c51003e709"],["/posts/b497b647.html","71442861568b5f88cfad49dfd19d9b3d"],["/posts/b4d464b0.html","c118700c85aeac3a45aea72033b157be"],["/posts/b5fb773f.html","26f680c87246f00e9a46fbf07be834f9"],["/posts/b8d46b32.html","67064e6bc9a972e58bbeb8410f55333f"],["/posts/c1b2c6c9.html","d2ea3f90efcaf7334c12512158c5546d"],["/posts/c2111cbf.html","067b634151e42113f82db294deecfcef"],["/posts/c316c2e8.html","493673bbd5cd370aa1464385036585e0"],["/posts/c43e60b5.html","dba2ede4e271e4e2158ede25c8685ef0"],["/posts/c497a412.html","ef7563ecc0b614c75abb350f73bc8443"],["/posts/c5395ba3.html","d5990d58958bb05f6ac655dd1c42aa8e"],["/posts/c5de299a.html","850edc7cc26ddaefaec7ea14ce0771f6"],["/posts/c60028d9.html","7441b7990bc3237bdf9a901833ee30a1"],["/posts/c70bba9c.html","d2a2d66bb25d588e105b1e1ac73da13d"],["/posts/c797535e.html","62b1bf7666c0a41d4a5c59f5cf3ff258"],["/posts/c7a62c79.html","cf629323a0be4bf2481cbda9e62a716a"],["/posts/cae2c959.html","155cd203fef066697452c48ae41f95a3"],["/posts/cbebef2b.html","35852ac19963533a78e1e162b31f853b"],["/posts/cc4c0017.html","b9da5e4bcc81236e67f45be09eb3aef2"],["/posts/ce25023e.html","ca14697658660ae38aaf67bf5ad802a2"],["/posts/d2fd4837.html","816d526bf39ee79625b59c0a17b41936"],["/posts/d3233cbb.html","f53b0d025a752f30fa92084f571375fd"],["/posts/d3a745a8.html","bcab46c977d7ee1c03cd262f64046302"],["/posts/d7e940d2.html","c98e6ef040583dddad3367e9107c78c6"],["/posts/dc815d5.html","fd313eb63ccd32ec2104b0a74332a455"],["/posts/de25b0be.html","1dd3465afbc2994f8c531f4a6085c8c2"],["/posts/e2623b4e.html","4c2aad9da487521862a82ec3ff3cb47b"],["/posts/e3ab6ad8.html","4dc8397308ddba1872158f06b2030e30"],["/posts/e5018da6.html","665bc00c201752bceadcfdf032c54f22"],["/posts/e5963272.html","05d611829cbbfcb73bdec97635960dff"],["/posts/e5ef4c3c.html","e8657153c1b016132fbdbee5cebb10a1"],["/posts/e624b065.html","c36368ec2380446a99874555370b5d31"],["/posts/e7c703bb.html","da18c47ca36e9f9e429d7863be639f60"],["/posts/e8f14b6c.html","37177d895797056d714ad7a047dadf13"],["/posts/e91abb63.html","9b567c65e6f5da601870a7e5abc86e09"],["/posts/ea9a8808.html","818f5a80081283c5f8849dae48eb1459"],["/posts/eb784749.html","3f64dcbdc2dbe098df8cc78f627a52cb"],["/posts/ebaf2232.html","d42d2c2cc39522292f8031bf2e721d79"],["/posts/ed75f185.html","a5b6baa6ab3d86abb0c1b816e444e6f7"],["/posts/ee1ed673.html","ec07a2c5aa5d24afa381a221eb1af192"],["/posts/f0c3ed61.html","ac8d17416520327033d9bbf33e92d608"],["/posts/f151ff43.html","6be5da9cd976603c48da9c06ad7860db"],["/posts/f21e7f84.html","2b771c604bd726bbb54b26ce9b31102b"],["/posts/f230b0fd.html","540cbd737d4ab8d5fd5588a0f02b89e0"],["/posts/f28a7877.html","c6a13f28677d27133b7188b35a2745ba"],["/posts/f663d5cc.html","9341196be5b1945779aaaeb9d955b92b"],["/posts/f730ad18.html","4fee7d1651474fa0443d08b6021a2e7e"],["/posts/fb5d4608.html","1cf80ad3006b8abe3106e264967b8018"],["/posts/fc04d0d4.html","3679118f6fa9c21db499e45ef8a7e019"],["/posts/fc455f81.html","fefbf6700c4a69be10d2cb0f5301587e"],["/sumire/index.html","0f1c990427c034ae96252371d47deaa3"],["/sw-register.js","feabe6d75b8b83bd5de70ec7acaa3f1a"],["/tags/AKo/index.html","6dbd144db25485bb193c6996c314ece3"],["/tags/APPLE-project/index.html","e6918aee4f75b5ad707e812ddd22347f"],["/tags/Ankrache/index.html","07e6c60c98b8743942dfcb8208089785"],["/tags/BELL-DA/index.html","b61ba9712d7233972d980af5faab5a9f"],["/tags/BL-Game/index.html","b8ce10bb9e98b5ae3c3a4fe6eb52fed7"],["/tags/Blue-Dahlia-Digital-Creators/index.html","fd67c93c7ccb394168f732a1e83b02bd"],["/tags/Blue-Line-Games/index.html","f068b9f60cdb5902c186b82ae1b0bcec"],["/tags/CD/index.html","a1771adb0b3a76d7bc91e0357ce1dc2f"],["/tags/CHUNSOFT/index.html","23546b49543ce5711cce1452b41a6e04"],["/tags/Check＆Stripe/index.html","77fdbe423e86234d47f05581d4526a80"],["/tags/Cherry-Pie/index.html","a401685e7877f06a9f0ff7ba571d47a2"],["/tags/Circle-Mebius/index.html","454e04f30df5007cc482d23bcaf7f35e"],["/tags/Cosmillica/index.html","8a3cfafe52db40088400c4eaffded803"],["/tags/CresCENT-BLANK/index.html","60157a71cc8116311b4f71ba7cdc20b7"],["/tags/Dopamine-Software/index.html","4ae40e474682b09b5e4a9bf02609d393"],["/tags/Dos/index.html","1398b52cdd43eeee9c29a67fa77a815a"],["/tags/Earth-Well/index.html","c79bf08a13f2c4a5995d13285e0983f3"],["/tags/Forest/index.html","092dec636af3d97d8fa583223bd9dfda"],["/tags/HaccaWorks/index.html","3e2670a1b294f38d98d9b02249fa3741"],["/tags/Kanon/index.html","3aa889bec218d2d6c6beafb80cbebda1"],["/tags/MANATSU-8/index.html","fced7f8f90b3cd82e04c8b5365a14aa3"],["/tags/MARINE/index.html","245dc6c4d3cabdb6089ace62f1145bd0"],["/tags/MIO/index.html","f6a01869323766f9cd895bf9a6d86fb5"],["/tags/NAOX/index.html","75e8091b25642ce5ff01828fd4feb7d8"],["/tags/Namikaze-no-Uta/index.html","d5df3f1e6b2a1aa7067f17be783b2503"],["/tags/Nmyu/index.html","f49f18b370317391be254a13bf75909d"],["/tags/O-S-I/index.html","c03e378c9561510ce44dd0841f524d0c"],["/tags/Omegaの視界/index.html","510254fd85c339332faac42e157fd38b"],["/tags/PC88/index.html","549ca2ff75cffd0c3abd56a36c3a0264"],["/tags/PC98/index.html","b51f26d18f8688fe2658d0f14c459c98"],["/tags/Perpetual-Room/index.html","6b3e0fe1c69c8a999947f05d67aa495f"],["/tags/Pleiades-Company/index.html","b00f460cd1aab71283e12947dd96f930"],["/tags/Project-Twintail/index.html","8d3b5b1350b015172f2db1c5701f40c5"],["/tags/RIFF-RAFF/index.html","0d61abda73bfbc5a222d9b9e1cabfcc3"],["/tags/RPG/index.html","0a60b30df9e98896c6b518bee428fda8"],["/tags/RPG2000/index.html","ee3583097ead0e778c93863e15a22e72"],["/tags/Reverv/index.html","27e3448ec37c7d65895312faf10ecc2a"],["/tags/SENTIVE/index.html","899930c86a1e87d7570b500c7a9acc1d"],["/tags/Saihate-SOFT/index.html","b4b866aa054c0954820de7119e434abf"],["/tags/Scrubbing/index.html","2c1e854371dea1c8f8a72ca7f72ce700"],["/tags/Sky-On-R-imaginAtion/index.html","326d652a1e14ad7b93e6dbaa5b5c1810"],["/tags/StrayMoon/index.html","b82535ba4ae80cdb9f3d578078b58d9f"],["/tags/Studio-Bu-Sa/index.html","a466b1e4ae479d022a6049f512a15e34"],["/tags/TRANSPARENCY/index.html","9d2d0f37f2304986f09664ae6727a480"],["/tags/ToHeart/index.html","4728688e045be105caa66c403edad764"],["/tags/Traumend/index.html","3c6773459d25cd8cc7f64e902279b4be"],["/tags/Witch/index.html","ab7b24356cc18f8e6962d7c03a41adce"],["/tags/adonis-project/index.html","df084e8c9d4e1da894b3883561c33344"],["/tags/capriccio-suite/index.html","2c10dff23ece7800f7a214f7c65bf486"],["/tags/flash/index.html","00f4214208e35745018467a976909b3d"],["/tags/galgame/index.html","f90b2fae6ac6e65643f86a8cd354242c"],["/tags/galgame/page/2/index.html","c04703ec6bedb33980117ae689a3453f"],["/tags/gal资源/index.html","9099477773bd1c1b022d3087f5159c3d"],["/tags/gal资源/page/2/index.html","864f575dbc1b25e343ced9c0ffdda610"],["/tags/gal资源/page/3/index.html","031a59b8520df58aa39ec0ea31f624f3"],["/tags/index.html","d06adeb6e7e3753d5f324320aa26403f"],["/tags/m-kz/index.html","743c8c8d1220ab73f097e2f0cc3788df"],["/tags/purgatory/index.html","f7d07d3951bfffe66062bb90a6668979"],["/tags/rkr/index.html","0213fb65b93def0e35f228cbd1955978"],["/tags/team-eye-mask/index.html","0dd2a6e6623c096b76a3e5a43bd2aae0"],["/tags/ありすくろいつ/index.html","8b4eb39e016f9885886e8a3e6daba189"],["/tags/いつものところ/index.html","ac85246ab299ba7f100c79615d2e4b3b"],["/tags/きつねみみ饅頭/index.html","33fa41c064f592429fc988f4c1beec56"],["/tags/ねこねこソフト/index.html","73f84a76d87d5501b81ffade2a4947f9"],["/tags/ねこバナナ/index.html","2eb251b0c7f342e744ba95abdd69b6a0"],["/tags/はちみつくまさん/index.html","57f44589e81e1bf42270bfff09f0ac64"],["/tags/ろりちせ/index.html","ed071dde3cad59d7c538d41fa25820dd"],["/tags/アイル【チーム・TATU】/index.html","5a1afbb77551ec836413fc1de08652d0"],["/tags/アクアポラリス/index.html","49f34da02cae3949a1fee9a821050335"],["/tags/アークシステムワークス/index.html","33f2db2cfbba2bb187a9abd92dec16c9"],["/tags/ブロッコリー/index.html","5e20b93fcc1e755ec99276444de30fa1"],["/tags/乙女/index.html","ce44eb117fdbe3a86ed67d0ffb9177bb"],["/tags/乙游/index.html","60b57cbb33e567c8918e8eb97cfb634b"],["/tags/停产/index.html","785688d11f58eb29e8acbb3112821849"],["/tags/公告/index.html","edd9cfd1c2f3699c270c4147cef2056a"],["/tags/同人/index.html","a1eb9c8bd19eb7f530cc64d2c9c4a525"],["/tags/堀井雄二/index.html","46edf3dc7c888610c524d700f5ffa942"],["/tags/外海なおき/index.html","a00fe86189aa7f5bd6539a2835b02fd4"],["/tags/女性向/index.html","b27d7eeb8996537124e873e63e760ae2"],["/tags/御茶ノ水電子製作所/index.html","30b1e0ba92aa23414aa28bb70851081c"],["/tags/月の水/index.html","74b8aea2daebdc259dd1c8a53621d944"],["/tags/桃野衿/index.html","2e73e7486c6a992f559dc05eb4f9f99d"],["/tags/機械式少女/index.html","33f050e8a3129dbd8dc6c089619f08c6"],["/tags/水仙/index.html","829695d4446d27d3acd6f8716346ede6"],["/tags/汉化/index.html","bd6ef3bc4b50edbc4a9cb886a21b2c4a"],["/tags/熊月温泉/index.html","03bb4dc6089c5f48b86f843af119210d"],["/tags/片冈智/index.html","5a759e1dbda1c4df2a04c46433724889"],["/tags/片岡とも/index.html","76883f0504e0c005fd34e84cbf3c3b75"],["/tags/牙の刻印制作委員会/index.html","4d334575205eec03502bf07340a444c0"],["/tags/牛カルビ定食-FLAT/index.html","b8e59786ac4dbf18548870ac8a4197ed"],["/tags/牧尾屋/index.html","0b58bb8bf78f88b1a1fb57c8c1e21808"],["/tags/犬茶屋/index.html","9931d92f250fb40f01251cdb96e2ad02"],["/tags/猫猫社/index.html","b969522aa2cf07199515a417a8be1cd4"],["/tags/王宮魔法劇団/index.html","0a75a3d2b1e31dd7c106a27fd1ab4719"],["/tags/画集/index.html","c2afa6fc6ddf692ca8177ebfc0bdc8dd"],["/tags/索引/index.html","6d46ec1fb494afd86ba76acd9ddce785"],["/tags/缺失/index.html","13aedae89c8a9e0fc15623d3eaffae69"],["/tags/自购/index.html","4d4523cd6c8b6a5739753947c50096ca"],["/tags/茶葉☆姫/index.html","c8d7611c3fcc4ee3cb3e5f4f976f970c"],["/tags/郷愁花屋/index.html","aecfa3dbb34402d2742f46b7043c9da2"],["/tags/閂夜明/index.html","6d05afc12fc6ba34c57c74e09a1fbe58"],["/tags/音乐/index.html","3cdedb8bc18297b184265006542a3c79"],["/tags/音乐美/index.html","4f83753ab72343efcd2877f05c54aa11"],["/tags/黒†救/index.html","60ad64f082ecd6081388325aa56e5d5e"],["/tags/黒百合っ子大集合/index.html","06b402d7803dc4111f587b54cf014552"]];
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
