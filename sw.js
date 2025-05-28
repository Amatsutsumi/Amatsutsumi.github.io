/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","0f05ed691936e5c97642a184baf72fc2"],["/archives/2024/04/index.html","c871926c7ea341edb8be392743ddb71d"],["/archives/2024/index.html","d71c9ebfad0f0a8a1def9ccee1c57dbe"],["/archives/2025/02/index.html","988d62cde662e97d2aa8ae91294fa0a1"],["/archives/2025/02/page/2/index.html","39237f39a6704b23c440d8fd75b754c9"],["/archives/2025/02/page/3/index.html","8f40d768c039139e009c32d70f543e39"],["/archives/2025/02/page/4/index.html","9d28fd95493958d9a25c0d5b6e555c79"],["/archives/2025/02/page/5/index.html","f07ba05a1dd924d0255bdd4824855965"],["/archives/2025/03/index.html","5a658b8df5aa31c84639a1692852b92d"],["/archives/2025/03/page/2/index.html","1beb79f54806e3fa3bbe3a37737ce48b"],["/archives/2025/03/page/3/index.html","30ffa679c3b0abfb1b325cf3e582db60"],["/archives/2025/03/page/4/index.html","84b04e3f0a3da8ea99546c4886bee904"],["/archives/2025/03/page/5/index.html","ef8d516b37e2511a114e9e9669014327"],["/archives/2025/03/page/6/index.html","b959b38c007e7b4d5b680651277ac6aa"],["/archives/2025/04/index.html","628f6ac1036c1aa34f113bc5a22003d6"],["/archives/2025/04/page/2/index.html","3764b36b774eba30d8e780ec9cce65cb"],["/archives/2025/04/page/3/index.html","96a4c2ff4437aa0576925da6d52f48d9"],["/archives/2025/05/index.html","67c8689f452f369bafc7dd9b1ff96469"],["/archives/2025/index.html","683602afafb7fd1b2c99a305c99b6fe0"],["/archives/2025/page/10/index.html","c5dda8ac625715e70a0694ed926bad1b"],["/archives/2025/page/11/index.html","4df6a52b1b001f0f09f0eb6c81bb3cb1"],["/archives/2025/page/12/index.html","33fdb5e0d63dd5e0c6e1026e32773e56"],["/archives/2025/page/13/index.html","756aa914e18e0157be5157e027132ad7"],["/archives/2025/page/14/index.html","bdc3bab72d0de40b84d4c21d788f73e6"],["/archives/2025/page/15/index.html","dd1ead08c9e7142b59a7bc5da9ee8beb"],["/archives/2025/page/2/index.html","2e86e211f7f033380ad28bfecaf772a5"],["/archives/2025/page/3/index.html","7bbf366333836441513bdd7791c6b3c2"],["/archives/2025/page/4/index.html","047892a38f577e3df8004eb7e920c2d1"],["/archives/2025/page/5/index.html","4b0aca74128528552428e2a058740c42"],["/archives/2025/page/6/index.html","f3575c65fe1532bebf792cd319f30734"],["/archives/2025/page/7/index.html","6d8ee8d1a9e343878df69d67d3299b6c"],["/archives/2025/page/8/index.html","777d9ee4f2912b5896349086f5905bbf"],["/archives/2025/page/9/index.html","0e94c0c5c369c2165ec95fac4012b508"],["/archives/2026/02/index.html","2f6cccbb433fab323b56584e4592d00d"],["/archives/2026/index.html","9c46126900c5da9f99a6485f65b58108"],["/archives/2095/05/index.html","082700cb4e23fb019d8114cdb5a9adc0"],["/archives/2095/index.html","1294c4c44acd1474f1958042a213a1d7"],["/archives/2825/04/index.html","34fd1db87b4f78cd3a711f8d7f6c8fe6"],["/archives/2825/index.html","b615ba8d90b6eb80dc01dea02ff620cf"],["/archives/2925/01/index.html","75575af29d8a274b2e9061ae0c2a4a7f"],["/archives/2925/index.html","4ae2fe1ba344ca64645c2963e282cfe1"],["/archives/index.html","923105d2068d1c60b702b08f0f37f298"],["/archives/page/10/index.html","9c262a973864d114f9b0ce19f616d9fb"],["/archives/page/11/index.html","e2e23b827cfcb9fcbff207fa963218f5"],["/archives/page/12/index.html","76921425a4e1da80f5ef695e6f7ba67c"],["/archives/page/13/index.html","0b4b336cfc79229cc8709117a686eefc"],["/archives/page/14/index.html","e940d9ef652aec3efbc5eb12427af33b"],["/archives/page/15/index.html","5a053a20b2854bba69a6bb950e2d78d8"],["/archives/page/2/index.html","5cc23dd15b0bb874fdafb7d51182fc89"],["/archives/page/3/index.html","841ac93df5e713deb82a354cf813320f"],["/archives/page/4/index.html","d617ef70cfdf15c568225c551ac6dc63"],["/archives/page/5/index.html","77d1593342f902392b571b134e91c968"],["/archives/page/6/index.html","230cb290c3c1cd5bd6e97c26253a166d"],["/archives/page/7/index.html","1161d3f6fb4eb14934fc646094b08a41"],["/archives/page/8/index.html","6fbf181410266a128398e0ecb70be57b"],["/archives/page/9/index.html","1d6fb2d32bc0cdc7a1f4dec0793ce51a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","4ab19d2267d5dd3a07c3453f8824fae9"],["/categories/galgame/page/2/index.html","d567c4796698c38cd6819e2d42ce5ac5"],["/categories/公告/index.html","17a2a27bf6b6ee03b52d75e93405a937"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","ed6c2cefeda19d89a186f81d0dbbaf1f"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","2093e2dc623b5030b4990e4bc7adc1a6"],["/page/10/index.html","b873c1ea79b13d99aaa8652a8b827a34"],["/page/11/index.html","2f2f5a558a2bc581d47a4d1a6864532b"],["/page/12/index.html","2a1fac89cd093947222ca741695b12ef"],["/page/13/index.html","bb2bc9319850dd675b57161eec78fdce"],["/page/14/index.html","e2d8c86e0b56f4f6bebac55a52bfbc68"],["/page/15/index.html","32da022d07cc9707de4ad0257fa4387c"],["/page/2/index.html","922fa73fe31a8d6cd4035ea0142475f6"],["/page/3/index.html","2a98805b12e44ee5ce3a53e258574f82"],["/page/4/index.html","0df0240cb0b6999ea54b59b2cd2b4e65"],["/page/5/index.html","8a8c8aee42e599b9256607c67d8b489d"],["/page/6/index.html","fca55b1dad11243dfe5f4fb0dc48a2d8"],["/page/7/index.html","225c03f13d090f118df9e21035beb4b5"],["/page/8/index.html","641a810e316dd57c333c0a8bb739a411"],["/page/9/index.html","617f7f65ddda1291ff41376d0cfb0c3f"],["/posts/10c9dd98.html","69e26ea979ce0b9279b856be066147b5"],["/posts/126ebb99.html","357af74ba9f0019db3f9626c4a875bbe"],["/posts/1295b569.html","ab6aadb6d3db0d2136f7732a5dd0e6b8"],["/posts/1370342.html","5ece3f68e10049180e8db1712767008b"],["/posts/15ef14c2.html","31eec51c6136a77ffdb10dc3e30e1909"],["/posts/15f3959d.html","da2b9ad9361c001d17dd64d35d75c23f"],["/posts/18ab785d.html","36474870e52b19d3c7f9ba5bfb0fd0e1"],["/posts/1d59b71f.html","913c7264013ae94e7e69e186b1ff1035"],["/posts/20b3f3a4.html","d48d66cd408083e49dcae00e78382286"],["/posts/245f1c7d.html","41142f6becfc9556e0bfaee9420a6ad6"],["/posts/252658f.html","6f23a4e7154e96188285c200ae5d4102"],["/posts/28397adc.html","044de46a134dab591bbcad77f02859f0"],["/posts/2ad07f54.html","577a920a248959b152044867933a0024"],["/posts/2b38bce0.html","0b23f12a2b308635bcbe987e4290daa7"],["/posts/2c0a6836.html","74939bdd55c53bd84791adbb093ceae1"],["/posts/2ce39bcc.html","8dc69de9e5fd7bd083de1bea08f9c3f8"],["/posts/2cf620f0.html","c971fa7139d67565c54e6aadbf2f9b43"],["/posts/2e30fd6d.html","a7c83c60c4f3d7cd58ad000e5b77c8a6"],["/posts/30a413ad.html","84bbdb1d43af08b36f7fd43d76c69b1e"],["/posts/34292736.html","384fabbae924f4941c50f68ed03ca617"],["/posts/3468cbe.html","26eba4106fb915dced81f7a86566eec8"],["/posts/39176dc0.html","b40fe117ba61bc0b388efff8ffc07653"],["/posts/3be6a165.html","f8d006983d8458577116980246f36d7d"],["/posts/3daf73b4.html","7e5cb805999165fb8fd642fa0f01e3c7"],["/posts/3e118dbf.html","94daf4bfc8d7e777f5b410f880316986"],["/posts/3f7d823a.html","a44c55921bd888835e7f7df85bde81fb"],["/posts/3f978819.html","ee9143650a9f2bf8c4c18e8d45d58db5"],["/posts/41dac80e.html","69403c82f7c2d09c97b848aae4ba2138"],["/posts/43945723.html","e188bffac92346906f8a1a8daf852847"],["/posts/44124a6b.html","b396e6308017636a6f9fcd7b084e0932"],["/posts/476a3006.html","3115db948ce42f3e1ea34090a0af5616"],["/posts/47abb61d.html","76f8529e7d092e3f69168e401029235f"],["/posts/4996478a.html","2b7bb4a7f245d775c40cc39f54f52bdd"],["/posts/4b689be3.html","5c1eee140ab286630acd05f8a566cf69"],["/posts/4cf8423f.html","115ca19954f398ada2bce9c2ca88afba"],["/posts/4dcf85c.html","629b2c1d0cec96737db406b12ff0b408"],["/posts/4e314e04.html","51b81fdcdb30e6b06e5c597cb59c3422"],["/posts/500cd322.html","22b1a962c368e84a30c5639604b3ee92"],["/posts/51c9b1ff.html","26149c8cb147bb6601fe8db00b4618ae"],["/posts/51ce68e8.html","bde49606764d98286a8cfbb7924562ab"],["/posts/52b5b3c6.html","d8728b6592a30605d54580294e35be81"],["/posts/54f496ad.html","e7effa11b841013d347a3587d2aa1b6e"],["/posts/558e1f30.html","755ab821dfb196e1c51490b0d9e2813a"],["/posts/5d8bea92.html","81a88406fa55a76d403a3c0b724a99c9"],["/posts/5f6e0c59.html","dabf8315ac199841e9d6c7a82ad89dbe"],["/posts/61a63a84.html","f95d3c61f605201cc712b80985514870"],["/posts/625ab7bf.html","5a237121c5ed9bc685225e2c2cac0c94"],["/posts/6336a2f9.html","ef08f73d8a8816c5a62f5d92b61361a4"],["/posts/6432d61a.html","484157b4bc1d4fb7beafa7ca581e25aa"],["/posts/6515f032.html","6ca4b71c148987cb35e6256dace9e474"],["/posts/6720ccdd.html","7863c0b5aa237723412d2c408cf86e2d"],["/posts/6a4b5ac8.html","8555783cec6f02463130c6cda6b51c14"],["/posts/6aa4177c.html","be7f66f2e3c769dda86fc91e6c3199b5"],["/posts/6b15f81f.html","21af9d43cb784cae2aa0c9a4b1f29494"],["/posts/71131d34.html","c310b24eb72231bb0d30ef77ed752ec2"],["/posts/742fd48d.html","0f481f74273321325193ecf67e4de3bd"],["/posts/78a8a8d3.html","ddaa73a96c11f7a45e5f70d3f9855722"],["/posts/7a5ef3d0.html","98c34e72a4e51ef1ce8743d095979c19"],["/posts/7b41e1ac.html","87c6f22e168dbd443a30eb665fda2d4f"],["/posts/7b51011d.html","7a0dae4e9dcddb152643e104333019a3"],["/posts/7e3aa3e2.html","980008a0c9388980be272560d830a7e3"],["/posts/80fe2691.html","f10f5623d23d9f7381c863c7c3b02e4e"],["/posts/81ac52e9.html","ff4178791b4df38916782ffdf1c871df"],["/posts/82332d11.html","2ba08fe2db398f873710b9d2f2e9f4b3"],["/posts/8486f6f9.html","5b6be927b6f629f014a5a033137d43df"],["/posts/849b40f8.html","2924f2199bb490417c6e26784fec3be1"],["/posts/85c51d68.html","6b67b10fc37268cc19ae323920b233d6"],["/posts/86a6c500.html","672b69f8a626a62d2bce41f2a0141612"],["/posts/886f8d3.html","92aed8281baf339145dcef6c5c91140e"],["/posts/8a7cba10.html","d06b1b89a7dc1aaad0ecff30ec79efe4"],["/posts/8ac11b41.html","ba34a71e293ca0845b01cdabc14140ae"],["/posts/8c3f2fd8.html","6295a226257b0927b944d864cd712ad3"],["/posts/8dd520d9.html","4b4b5dd72e581645fee9841cb3c85f31"],["/posts/8f555654.html","96f9f61bb734ed1208db5f6eb03eec6b"],["/posts/92a980c2.html","3625c2ef5ea5d8a9697ce5014829b654"],["/posts/92ce16.html","5e5b5386b01cb336cc34b29a0deb8891"],["/posts/93e9943b.html","446df1f23555ef37609309244270e275"],["/posts/94d3c794.html","b643abf6f7d6a61afd4223674f485282"],["/posts/96b281f2.html","bbeee2247fed98e51bed7b75ca185f70"],["/posts/97f50eea.html","d305aa2b68272f01fb724f11e8dae763"],["/posts/97fca8be.html","a613b39f1334aede128d392604f576c6"],["/posts/98662d05.html","a9a72f0d039d4d5bc6b72e3bd23e37b6"],["/posts/9a2f6162.html","9fe13ce640be48497bf6e2f028e55641"],["/posts/9b22a48d.html","564336a1e46493029a15b1c0688c97b4"],["/posts/9cb455b1.html","faaa8f9f652f445abeae793e2fa55140"],["/posts/9ecdeecc.html","ddb022a1bb6a571784d2cb101e381884"],["/posts/9efd7701.html","3f6bd214bb9e01e4703b4df5f59337cb"],["/posts/9f61c1a0.html","09c22b04a1359960c5eb795a320cfabd"],["/posts/a1de710.html","132e204f9af413d6bf922060e0faf6d5"],["/posts/a30eb0cd.html","8b8ddce62084d9fa3f7f03f9eb2f7971"],["/posts/a72f71c2.html","fa9bbc60b2cb034161c9fa334260e0bf"],["/posts/a7634b5d.html","24ea8efcb87721fb1dbf8c0fc5a48b93"],["/posts/a8c593b5.html","0f1b1f890fccb3a0caadf1849f2d7c06"],["/posts/ad0c1efa.html","4ef9e23f8a96dc74ed8ae940f44fe004"],["/posts/ada3f440.html","035aee691784cd7b8312c5f4ded78200"],["/posts/af1807ef.html","f22fb84e6d7478a3162919092fd88b18"],["/posts/b397bf03.html","782dc19e1210def33b9077c51003e709"],["/posts/b497b647.html","71442861568b5f88cfad49dfd19d9b3d"],["/posts/b4d464b0.html","c118700c85aeac3a45aea72033b157be"],["/posts/b5fb773f.html","26f680c87246f00e9a46fbf07be834f9"],["/posts/b8d46b32.html","67064e6bc9a972e58bbeb8410f55333f"],["/posts/c1b2c6c9.html","d97ce8fa38826d0305f9fddd32125f60"],["/posts/c2111cbf.html","067b634151e42113f82db294deecfcef"],["/posts/c316c2e8.html","493673bbd5cd370aa1464385036585e0"],["/posts/c43e60b5.html","dba2ede4e271e4e2158ede25c8685ef0"],["/posts/c497a412.html","ef7563ecc0b614c75abb350f73bc8443"],["/posts/c5395ba3.html","d5990d58958bb05f6ac655dd1c42aa8e"],["/posts/c5de299a.html","850edc7cc26ddaefaec7ea14ce0771f6"],["/posts/c60028d9.html","7441b7990bc3237bdf9a901833ee30a1"],["/posts/c70bba9c.html","20432d68adc17a17c7ceb9cce11af155"],["/posts/c797535e.html","62b1bf7666c0a41d4a5c59f5cf3ff258"],["/posts/c7a62c79.html","50c72b17c065d2a062a7fe6b99438334"],["/posts/cae2c959.html","79a883236f94fd658661c0ae6f728492"],["/posts/cbebef2b.html","35852ac19963533a78e1e162b31f853b"],["/posts/cc4c0017.html","b9da5e4bcc81236e67f45be09eb3aef2"],["/posts/ce25023e.html","ca14697658660ae38aaf67bf5ad802a2"],["/posts/d2fd4837.html","816d526bf39ee79625b59c0a17b41936"],["/posts/d3233cbb.html","f53b0d025a752f30fa92084f571375fd"],["/posts/d3a745a8.html","bcab46c977d7ee1c03cd262f64046302"],["/posts/d7e940d2.html","c98e6ef040583dddad3367e9107c78c6"],["/posts/dc815d5.html","43d60ec956b472cc3138080010d206e2"],["/posts/de25b0be.html","1dd3465afbc2994f8c531f4a6085c8c2"],["/posts/e2623b4e.html","4c2aad9da487521862a82ec3ff3cb47b"],["/posts/e3ab6ad8.html","698ff1c410e3afeed2c6548fe1a6ed31"],["/posts/e5018da6.html","665bc00c201752bceadcfdf032c54f22"],["/posts/e5963272.html","05d611829cbbfcb73bdec97635960dff"],["/posts/e5ef4c3c.html","e8657153c1b016132fbdbee5cebb10a1"],["/posts/e624b065.html","c36368ec2380446a99874555370b5d31"],["/posts/e7c703bb.html","da18c47ca36e9f9e429d7863be639f60"],["/posts/e8f14b6c.html","37177d895797056d714ad7a047dadf13"],["/posts/e91abb63.html","9b567c65e6f5da601870a7e5abc86e09"],["/posts/ea9a8808.html","818f5a80081283c5f8849dae48eb1459"],["/posts/eb784749.html","3f64dcbdc2dbe098df8cc78f627a52cb"],["/posts/ebaf2232.html","d42d2c2cc39522292f8031bf2e721d79"],["/posts/ed75f185.html","cc077243df1e8da284fe6cde66e056e8"],["/posts/ee1ed673.html","2e0a23a71fdfd3fc8e9e29700031a15a"],["/posts/f0c3ed61.html","ac8d17416520327033d9bbf33e92d608"],["/posts/f151ff43.html","d34a011f420d1e6b10cc15362c47708d"],["/posts/f21e7f84.html","2b771c604bd726bbb54b26ce9b31102b"],["/posts/f230b0fd.html","540cbd737d4ab8d5fd5588a0f02b89e0"],["/posts/f28a7877.html","abb30931ab52e2d4b6a0f0f00cd24ed0"],["/posts/f663d5cc.html","9341196be5b1945779aaaeb9d955b92b"],["/posts/f730ad18.html","490ea1d9990f41906ff2d7b74cc25bb0"],["/posts/fb5d4608.html","a708679603f48ee926df4cb318c09ba6"],["/posts/fc04d0d4.html","3679118f6fa9c21db499e45ef8a7e019"],["/posts/fc455f81.html","1c1066788ee9e392311b85a088aa6fac"],["/sumire/index.html","cf291fe1424e48842add7f610a8ae720"],["/sw-register.js","a4a0458742fc401cbad5937076389ae8"],["/tags/AKo/index.html","5efe0e01621cf5c371fc5bae2a9e6370"],["/tags/APPLE-project/index.html","bed372e821ac344312bc65c8ec190251"],["/tags/Ankrache/index.html","142bef5b6fbec02efd8fe3fd576cfa61"],["/tags/BELL-DA/index.html","8f8a1a622048ec376e6881c2ddba0473"],["/tags/BL-Game/index.html","e5650e13fe3f3bbd8f6e36b88fb3a565"],["/tags/Blue-Dahlia-Digital-Creators/index.html","dc695e5ce6dd2ea5017f08dbbd7c4dec"],["/tags/Blue-Line-Games/index.html","2569c2e524e7ec69eb893be2ce4cd4f9"],["/tags/CD/index.html","1812a56382cf23e0e48f3281f947819e"],["/tags/CHUNSOFT/index.html","a86d434f1712afece83ce0892ee80d7e"],["/tags/Check＆Stripe/index.html","4ccc03488e57fa6cd1fb345acaeb0be9"],["/tags/Cherry-Pie/index.html","65778e61baac86c111e7085e2d2ab5cd"],["/tags/Circle-Mebius/index.html","4b9973b3ef77e3bf5926f4f3235e965b"],["/tags/Cosmillica/index.html","dc75e3898a55a1bd1c519c97b6983422"],["/tags/CresCENT-BLANK/index.html","660dc885cc30544ef237fd9f9ed3e64f"],["/tags/Dopamine-Software/index.html","f1e0d14e94de16ffe9f55696abdb586c"],["/tags/Dos/index.html","77659431c8a716d03d800d947b0f1f64"],["/tags/Earth-Well/index.html","a3f206cc277264503570951c740c5acc"],["/tags/Forest/index.html","47cb14dd277d68a5a1a762f98e03dc15"],["/tags/HaccaWorks/index.html","1dadf7d1fcf829c8f26195a1500b4dbb"],["/tags/Kanon/index.html","fe44a0fedcad597f37ddcd20670f6a99"],["/tags/MANATSU-8/index.html","bb5078e962af03c52fc16a444777e0d6"],["/tags/MARINE/index.html","be7dccb9d51c95653ed3fecb0535736c"],["/tags/MIO/index.html","82323842f107905fd5bc45f24329f02f"],["/tags/NAOX/index.html","673e57dab0358957dc897fb5bfb05eb0"],["/tags/Namikaze-no-Uta/index.html","5811b084eda1fed839b9a6f3fd69047c"],["/tags/Nmyu/index.html","2e8a043c46f858a5080a045a8c59f503"],["/tags/O-S-I/index.html","2d688b1b2547bcf99617441918121ffd"],["/tags/Omegaの視界/index.html","80d8cb9eaaae198746480b4bf9399b2f"],["/tags/PC88/index.html","7a3c0e9c1cf21ed2969a93b6892902c5"],["/tags/PC98/index.html","f9b67dcca6cb0313e609380ef8cb4f1a"],["/tags/Perpetual-Room/index.html","7468d7135970d8bcafbed17c3db96715"],["/tags/Pleiades-Company/index.html","706e157bac3301ca0957466e376a7ae6"],["/tags/Project-Twintail/index.html","045c0ffade007f8cab632ce37c0c349b"],["/tags/RIFF-RAFF/index.html","bad519eb6a807549943c83deee284032"],["/tags/RPG/index.html","bfb539615b8693197a172ec773a8a055"],["/tags/RPG2000/index.html","709dd61317606863f440d2a7ccf38f43"],["/tags/Reverv/index.html","c13f86a278d7f69f1c313e1502ecf386"],["/tags/SENTIVE/index.html","3cfba681a8daac448b08d55c4990b049"],["/tags/Saihate-SOFT/index.html","21988e3352433ce69f6325df4a050ac1"],["/tags/Scrubbing/index.html","556ce67cbbaa53cb6e85ed5829667c33"],["/tags/Sky-On-R-imaginAtion/index.html","389d9ac9816ba5ae6e854d61eb49b850"],["/tags/StrayMoon/index.html","ebe732e9d384fd047df4da9db4dfc02f"],["/tags/Studio-Bu-Sa/index.html","a52dcff100834d5fd2ad12f3c1cc77de"],["/tags/TRANSPARENCY/index.html","511a360ae9aff2a2bdf8da08f030f64e"],["/tags/ToHeart/index.html","88c202ac98146d8f8bb7e1ba2a56939b"],["/tags/Traumend/index.html","f385be9cf26f0bfcb35efcc80f3863d1"],["/tags/Witch/index.html","490485c4488dd40ab8efab903c8ef375"],["/tags/adonis-project/index.html","64b26a878e9523a956191696b34c7f65"],["/tags/capriccio-suite/index.html","157228a5d00b455bc04fb23e1c1df96d"],["/tags/flash/index.html","3492f26b3f9432c7aafbdcfd68e47c9a"],["/tags/galgame/index.html","7ba655a2d0872090719fb2bde7496215"],["/tags/galgame/page/2/index.html","9fe6213c3339763295dac3ee6889fa6e"],["/tags/gal资源/index.html","8cdfb580ae11f5c46df030fa19e818ec"],["/tags/gal资源/page/2/index.html","524eb2ade84de1599f6136162eb0d399"],["/tags/gal资源/page/3/index.html","0961f36b87e2c4d719a4861772c8dee0"],["/tags/index.html","a89fcdbdcb621887b12087caf1977eeb"],["/tags/m-kz/index.html","d1d1c60506860657aa3a510e663b792c"],["/tags/purgatory/index.html","06ad8b2255cd70489ac602d95755f534"],["/tags/rkr/index.html","8380fc4b351d9ed32fadf10833060e71"],["/tags/team-eye-mask/index.html","34d47ffa5643b5a2a50da6135113670b"],["/tags/ありすくろいつ/index.html","548ef2d4de363b01e7fa7162995fea72"],["/tags/いつものところ/index.html","98ea5a6355b8c321546d37352b633a88"],["/tags/きつねみみ饅頭/index.html","b44dbe3c5962a8f8b01187e090e2e5f0"],["/tags/ねこねこソフト/index.html","d10e570a1ce789dec2c60db397680580"],["/tags/ねこバナナ/index.html","c99dfb126957913b49ea4e53a93b5496"],["/tags/はちみつくまさん/index.html","dcf396f73c4a35ac0f5247f498e89efd"],["/tags/ろりちせ/index.html","1e5a4588f62c2a2bab5320754fc00760"],["/tags/アイル【チーム・TATU】/index.html","fd0392b8b3704a3641ac682009429b11"],["/tags/アクアポラリス/index.html","803c3b3bf474b5ac52475de6648982c0"],["/tags/アークシステムワークス/index.html","4b0740d4b8673c14d5e8980edb7c3e6b"],["/tags/ブロッコリー/index.html","dc5e9a05dc48f512ece544f801d462d3"],["/tags/乙女/index.html","6031da6d4defa5e6ad44b518b963f5b6"],["/tags/乙游/index.html","2bd223a1c778b2e9b6393c92793115db"],["/tags/停产/index.html","b6230f85b383b1b319696e10485a24be"],["/tags/公告/index.html","f5fa9f6ba86eb1daeb6dceb83e4b3871"],["/tags/同人/index.html","b0c7de0d30fc0b442b71daab98c13657"],["/tags/堀井雄二/index.html","928e19ed5a3a67b5997a58a9b04fdb35"],["/tags/外海なおき/index.html","c62280705edb509b84215ed721e4b194"],["/tags/女性向/index.html","441f808595d50b90caf6b7de74cebaf6"],["/tags/御茶ノ水電子製作所/index.html","1d8cf4d31673c5b8879de76914dfdf74"],["/tags/月の水/index.html","a7c301850759730ab4478130daa203f5"],["/tags/桃野衿/index.html","1ae27d5d74770f367744d2e558577afa"],["/tags/機械式少女/index.html","cc2772de9d8ecb5fd8cc015176d79e57"],["/tags/水仙/index.html","e40de5336fa7e72331f22762c311fd8f"],["/tags/汉化/index.html","837412fa615bd67bdadeae71c66a3cb0"],["/tags/熊月温泉/index.html","b953a3e9f352e3aa6a67fa118efa25cd"],["/tags/片冈智/index.html","ec3150c3e143a318ddf72764d8be56a0"],["/tags/片岡とも/index.html","747204cdf1afca582765deea2b0def64"],["/tags/牙の刻印制作委員会/index.html","e9010a7e6be7557e498939c003071f37"],["/tags/牛カルビ定食-FLAT/index.html","0898509dd2fa537e550015935634cb15"],["/tags/牧尾屋/index.html","db6f444d0909133645b40ad59572d7dc"],["/tags/犬茶屋/index.html","0f0f95330c436856f397640c40c6a095"],["/tags/猫猫社/index.html","3ec09dc94341ea838375fff4e4ebc753"],["/tags/王宮魔法劇団/index.html","09990a533a448aafa958cd94235d8191"],["/tags/画集/index.html","0e3dedf8ec7461877ac6fd6801e96baa"],["/tags/索引/index.html","fb0b30fc4b9ce7653b02b66a8ccd74ac"],["/tags/缺失/index.html","bb4e09cf5ea62c4321896c82efaad95a"],["/tags/自购/index.html","f37352876848b7e7a0477ab1fc44dbbd"],["/tags/茶葉☆姫/index.html","d04476e7a10fd290903c38c00f4c4e10"],["/tags/郷愁花屋/index.html","2a595c5b97e222a79a37d37b75a0858a"],["/tags/閂夜明/index.html","d9ecfcd877ebca12e9ca889d675ae7b5"],["/tags/音乐/index.html","40999b1675ddbb594ea6eff55471be51"],["/tags/音乐美/index.html","38a3bb43db845a203970f71b8d8d71b3"],["/tags/黒†救/index.html","6124a8ba48e80267fc97e44293460381"],["/tags/黒百合っ子大集合/index.html","2cb69565f199eb237a768213643f7bfe"]];
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
