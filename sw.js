/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","8f7f440ee49d860e544ace774ccc980f"],["/archives/2024/04/index.html","f5ee8e0749e1f25529d65799e68be303"],["/archives/2024/index.html","807780232ec2607e39c29dc9db187e42"],["/archives/2025/02/index.html","aeea69b2f9df50a28876e5aa5412e89a"],["/archives/2025/02/page/2/index.html","03a56ea6aee50182f48b3a2e8de2a2de"],["/archives/2025/02/page/3/index.html","d90fb7ce289dd1785a45c453694161fa"],["/archives/2025/02/page/4/index.html","b7c71f0d265953284470f6dec93dc888"],["/archives/2025/02/page/5/index.html","ce758b1981236ca522f646e7382e5615"],["/archives/2025/03/index.html","9372983b5b974dd86a06038fc3333799"],["/archives/2025/03/page/2/index.html","47bc460c65f35dda1a596ade0f08c6e3"],["/archives/2025/03/page/3/index.html","3c618bc75147b6a05aa72eab41004087"],["/archives/2025/03/page/4/index.html","e982ebcd1ab6579588ae89da24919126"],["/archives/2025/03/page/5/index.html","70247fd35f1dcf5cca50b9648aa5128d"],["/archives/2025/03/page/6/index.html","ac6e76173ac55e96151b963c356a571d"],["/archives/2025/04/index.html","8abec1c089445aaf5901f03b9b0e6dac"],["/archives/2025/04/page/2/index.html","8405e403b64b5db03588715b3a9c74e2"],["/archives/2025/04/page/3/index.html","9a08154ab934a113e9d2448bf37c2d1e"],["/archives/2025/05/index.html","afb3eb74e239fe8e02589825d7168078"],["/archives/2025/index.html","18e72ef8629da369e42a927748e4e77c"],["/archives/2025/page/10/index.html","3846e7bf318eb3cba19edc83835001ba"],["/archives/2025/page/11/index.html","5456b384bb79164ec99ef97668d68759"],["/archives/2025/page/12/index.html","220691ec22c42768185b30191ec893f0"],["/archives/2025/page/13/index.html","ea2c43e7890a201da0d023efaba50a76"],["/archives/2025/page/14/index.html","046f871f9a74880acb6350d4aeea1439"],["/archives/2025/page/15/index.html","f55eb302fa96eedd21c43a1b2696a143"],["/archives/2025/page/2/index.html","385e000c208161b17ef0fa8d5c12d217"],["/archives/2025/page/3/index.html","05453ed2ec089fee11339eae00731a22"],["/archives/2025/page/4/index.html","29c4f39d51eaef54957c77e818183360"],["/archives/2025/page/5/index.html","47af7824b4ccf231c4cff3f8cab0444d"],["/archives/2025/page/6/index.html","c052930b736131fcce6a87707dfb3e98"],["/archives/2025/page/7/index.html","e993452331d369fe842310789bbc4863"],["/archives/2025/page/8/index.html","996b2da08f3b05bf0a6dd37833d7007b"],["/archives/2025/page/9/index.html","0aa8a1c2ee066cbc428797c23ca633cf"],["/archives/2026/02/index.html","3b2105bc7b54ff1ca92a0430aef64b60"],["/archives/2026/index.html","2b71522d7afa794818b561e8db669ffd"],["/archives/2095/05/index.html","5b382fbc102239859a592e221935db30"],["/archives/2095/index.html","62f00fe9cf06a19631b9c4c06c05c134"],["/archives/2825/04/index.html","fdb88b08b985e2b3cb73cd1657d8b07f"],["/archives/2825/index.html","4a5fcd65e95c79186a4b913113221e35"],["/archives/2925/01/index.html","bbf89455d757c1ca77a1f86afc8aae14"],["/archives/2925/index.html","5ef0561163773335f5a7c5b1fc8eb0a9"],["/archives/index.html","cf15482da35414c57bc702dcab024bd5"],["/archives/page/10/index.html","0707a0c6db8c4a00f5b9dd26b0fde632"],["/archives/page/11/index.html","8aee841d03802336947d2ea570509bb0"],["/archives/page/12/index.html","a3b567885fc9e561f498153255b73588"],["/archives/page/13/index.html","9bbe62d8d21e593138330b3994e6451e"],["/archives/page/14/index.html","701e96a52f819a03b70af754761b6dca"],["/archives/page/15/index.html","b38ac1ca21499bcde4ba9431410c324a"],["/archives/page/2/index.html","5a1fc05773a1a70ab114587f1ea6dedb"],["/archives/page/3/index.html","2098add9c6a0813f31e42e7782efc05c"],["/archives/page/4/index.html","30fe18fabcf2b41630b5643833878c3e"],["/archives/page/5/index.html","a825c10f5922bdb9b187fa9cc0eea398"],["/archives/page/6/index.html","5ca2bd9535df2003f6f5595d20e9cacb"],["/archives/page/7/index.html","4f118a2b9bd80c8492ae9727149f8de3"],["/archives/page/8/index.html","41dbfc57239d75e30a6e1f062ac1fcfe"],["/archives/page/9/index.html","0a9c7032b64716593221e1d785396b40"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","2a9ba719281960f241a5547cefb5436c"],["/categories/galgame/page/2/index.html","836229f4b751c9abcdaf5395cd1731c6"],["/categories/公告/index.html","4f890a32387f6633c80c6ca7af29e1ef"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","37ea6bc41f681f8736fc8250144a9bec"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","7224222ba16dfb51457367bdcf0bc150"],["/page/10/index.html","79ad2938bf7fe3380ed356a454eae80e"],["/page/11/index.html","3ed6deaeb0e72ff62e70ac200ea71cc2"],["/page/12/index.html","0973dcc3b8e9d4992ea52e627fda76c7"],["/page/13/index.html","b0e611e53104b485590803b12c43efb3"],["/page/14/index.html","24b2fa583e880cf9ff8749adac143d6e"],["/page/15/index.html","0fa0eb089f739ae2a71e07860a593aba"],["/page/2/index.html","3638bb5c22eef2f9fec86661422494b3"],["/page/3/index.html","24f3f56d3c41b75f5f24b3cd05b29332"],["/page/4/index.html","c977092849aa8571719aaf4e429bf4cc"],["/page/5/index.html","97eb9b40343cc03183178f46c892474b"],["/page/6/index.html","eede41fdd83a3c0b028d25c58267d025"],["/page/7/index.html","7c6a3de18e96b059c2138774d3bf8b5c"],["/page/8/index.html","1d4de219f0a2de07d84bdfb92cb6afed"],["/page/9/index.html","2d76ae3d8516aaec1be79c6d90d3c2d2"],["/posts/10c9dd98.html","69e26ea979ce0b9279b856be066147b5"],["/posts/126ebb99.html","357af74ba9f0019db3f9626c4a875bbe"],["/posts/1295b569.html","ab6aadb6d3db0d2136f7732a5dd0e6b8"],["/posts/1370342.html","5ece3f68e10049180e8db1712767008b"],["/posts/15ef14c2.html","31eec51c6136a77ffdb10dc3e30e1909"],["/posts/15f3959d.html","da2b9ad9361c001d17dd64d35d75c23f"],["/posts/18ab785d.html","36474870e52b19d3c7f9ba5bfb0fd0e1"],["/posts/1d59b71f.html","913c7264013ae94e7e69e186b1ff1035"],["/posts/20b3f3a4.html","d48d66cd408083e49dcae00e78382286"],["/posts/245f1c7d.html","41142f6becfc9556e0bfaee9420a6ad6"],["/posts/252658f.html","6f23a4e7154e96188285c200ae5d4102"],["/posts/28397adc.html","7eefd5297294570b20995ef2a69e32e3"],["/posts/2ad07f54.html","577a920a248959b152044867933a0024"],["/posts/2b38bce0.html","0b23f12a2b308635bcbe987e4290daa7"],["/posts/2c0a6836.html","74939bdd55c53bd84791adbb093ceae1"],["/posts/2ce39bcc.html","8dc69de9e5fd7bd083de1bea08f9c3f8"],["/posts/2cf620f0.html","c971fa7139d67565c54e6aadbf2f9b43"],["/posts/2e30fd6d.html","a7c83c60c4f3d7cd58ad000e5b77c8a6"],["/posts/30a413ad.html","84bbdb1d43af08b36f7fd43d76c69b1e"],["/posts/34292736.html","384fabbae924f4941c50f68ed03ca617"],["/posts/3468cbe.html","26eba4106fb915dced81f7a86566eec8"],["/posts/39176dc0.html","b40fe117ba61bc0b388efff8ffc07653"],["/posts/3be6a165.html","f8d006983d8458577116980246f36d7d"],["/posts/3daf73b4.html","a846a5166cacde1364ba9efd63285328"],["/posts/3e118dbf.html","94daf4bfc8d7e777f5b410f880316986"],["/posts/3f7d823a.html","a44c55921bd888835e7f7df85bde81fb"],["/posts/3f978819.html","3ab65fc0f959b55878edd913455ee781"],["/posts/41dac80e.html","69403c82f7c2d09c97b848aae4ba2138"],["/posts/43945723.html","e188bffac92346906f8a1a8daf852847"],["/posts/44124a6b.html","b396e6308017636a6f9fcd7b084e0932"],["/posts/476a3006.html","3115db948ce42f3e1ea34090a0af5616"],["/posts/47abb61d.html","76f8529e7d092e3f69168e401029235f"],["/posts/4996478a.html","2b7bb4a7f245d775c40cc39f54f52bdd"],["/posts/4b689be3.html","5c1eee140ab286630acd05f8a566cf69"],["/posts/4cf8423f.html","115ca19954f398ada2bce9c2ca88afba"],["/posts/4dcf85c.html","629b2c1d0cec96737db406b12ff0b408"],["/posts/4e314e04.html","51b81fdcdb30e6b06e5c597cb59c3422"],["/posts/500cd322.html","22b1a962c368e84a30c5639604b3ee92"],["/posts/51c9b1ff.html","26149c8cb147bb6601fe8db00b4618ae"],["/posts/51ce68e8.html","bde49606764d98286a8cfbb7924562ab"],["/posts/52b5b3c6.html","d8728b6592a30605d54580294e35be81"],["/posts/54f496ad.html","2dcb7256b94f1fc2cef1600fb46961d0"],["/posts/558e1f30.html","d023d05b6775317986d71fd5112385fe"],["/posts/5d8bea92.html","81a88406fa55a76d403a3c0b724a99c9"],["/posts/5f6e0c59.html","dabf8315ac199841e9d6c7a82ad89dbe"],["/posts/61a63a84.html","f95d3c61f605201cc712b80985514870"],["/posts/625ab7bf.html","5a237121c5ed9bc685225e2c2cac0c94"],["/posts/6336a2f9.html","71b66968918769fe95192ba065f5b4a3"],["/posts/6432d61a.html","484157b4bc1d4fb7beafa7ca581e25aa"],["/posts/6515f032.html","6ca4b71c148987cb35e6256dace9e474"],["/posts/6720ccdd.html","7863c0b5aa237723412d2c408cf86e2d"],["/posts/6a4b5ac8.html","8555783cec6f02463130c6cda6b51c14"],["/posts/6aa4177c.html","be7f66f2e3c769dda86fc91e6c3199b5"],["/posts/6b15f81f.html","21af9d43cb784cae2aa0c9a4b1f29494"],["/posts/71131d34.html","c310b24eb72231bb0d30ef77ed752ec2"],["/posts/742fd48d.html","7c8a645386000a508290f96f838450eb"],["/posts/78a8a8d3.html","ddaa73a96c11f7a45e5f70d3f9855722"],["/posts/7a5ef3d0.html","98c34e72a4e51ef1ce8743d095979c19"],["/posts/7b41e1ac.html","bad7934c0e661f84f1c0225cb6ce233d"],["/posts/7b51011d.html","7a0dae4e9dcddb152643e104333019a3"],["/posts/7e3aa3e2.html","980008a0c9388980be272560d830a7e3"],["/posts/80fe2691.html","f10f5623d23d9f7381c863c7c3b02e4e"],["/posts/81ac52e9.html","baefffd5cce477bb3dde9c85240f8fc1"],["/posts/82332d11.html","2ba08fe2db398f873710b9d2f2e9f4b3"],["/posts/8486f6f9.html","5b6be927b6f629f014a5a033137d43df"],["/posts/849b40f8.html","2924f2199bb490417c6e26784fec3be1"],["/posts/85c51d68.html","2c33b3c33f90e630c9242091413171cd"],["/posts/86a6c500.html","672b69f8a626a62d2bce41f2a0141612"],["/posts/886f8d3.html","92aed8281baf339145dcef6c5c91140e"],["/posts/8a7cba10.html","d06b1b89a7dc1aaad0ecff30ec79efe4"],["/posts/8ac11b41.html","ba34a71e293ca0845b01cdabc14140ae"],["/posts/8c3f2fd8.html","6a53a062e92b029ee2e18d885c3f01f9"],["/posts/8dd520d9.html","4b4b5dd72e581645fee9841cb3c85f31"],["/posts/8f555654.html","96f9f61bb734ed1208db5f6eb03eec6b"],["/posts/92a980c2.html","3625c2ef5ea5d8a9697ce5014829b654"],["/posts/92ce16.html","5e5b5386b01cb336cc34b29a0deb8891"],["/posts/93e9943b.html","446df1f23555ef37609309244270e275"],["/posts/94d3c794.html","b643abf6f7d6a61afd4223674f485282"],["/posts/96b281f2.html","bbeee2247fed98e51bed7b75ca185f70"],["/posts/97f50eea.html","d305aa2b68272f01fb724f11e8dae763"],["/posts/97fca8be.html","a613b39f1334aede128d392604f576c6"],["/posts/98662d05.html","a9a72f0d039d4d5bc6b72e3bd23e37b6"],["/posts/9a2f6162.html","9fe13ce640be48497bf6e2f028e55641"],["/posts/9b22a48d.html","564336a1e46493029a15b1c0688c97b4"],["/posts/9cb455b1.html","faaa8f9f652f445abeae793e2fa55140"],["/posts/9ecdeecc.html","ddb022a1bb6a571784d2cb101e381884"],["/posts/9efd7701.html","3f6bd214bb9e01e4703b4df5f59337cb"],["/posts/9f61c1a0.html","09c22b04a1359960c5eb795a320cfabd"],["/posts/a1de710.html","132e204f9af413d6bf922060e0faf6d5"],["/posts/a30eb0cd.html","8b8ddce62084d9fa3f7f03f9eb2f7971"],["/posts/a72f71c2.html","fa9bbc60b2cb034161c9fa334260e0bf"],["/posts/a7634b5d.html","24ea8efcb87721fb1dbf8c0fc5a48b93"],["/posts/a8c593b5.html","0f1b1f890fccb3a0caadf1849f2d7c06"],["/posts/ad0c1efa.html","4ef9e23f8a96dc74ed8ae940f44fe004"],["/posts/ada3f440.html","8b0884fff60b3ddaad9f0aeed90904b8"],["/posts/af1807ef.html","3e923adf7fbf2b93d6ed656048f8f1ad"],["/posts/b397bf03.html","782dc19e1210def33b9077c51003e709"],["/posts/b497b647.html","71442861568b5f88cfad49dfd19d9b3d"],["/posts/b4d464b0.html","c118700c85aeac3a45aea72033b157be"],["/posts/b5fb773f.html","26f680c87246f00e9a46fbf07be834f9"],["/posts/b8d46b32.html","67064e6bc9a972e58bbeb8410f55333f"],["/posts/c1b2c6c9.html","d97ce8fa38826d0305f9fddd32125f60"],["/posts/c2111cbf.html","067b634151e42113f82db294deecfcef"],["/posts/c316c2e8.html","493673bbd5cd370aa1464385036585e0"],["/posts/c43e60b5.html","dba2ede4e271e4e2158ede25c8685ef0"],["/posts/c497a412.html","ef7563ecc0b614c75abb350f73bc8443"],["/posts/c5395ba3.html","d5990d58958bb05f6ac655dd1c42aa8e"],["/posts/c5de299a.html","850edc7cc26ddaefaec7ea14ce0771f6"],["/posts/c60028d9.html","7441b7990bc3237bdf9a901833ee30a1"],["/posts/c70bba9c.html","20432d68adc17a17c7ceb9cce11af155"],["/posts/c797535e.html","62b1bf7666c0a41d4a5c59f5cf3ff258"],["/posts/c7a62c79.html","cf629323a0be4bf2481cbda9e62a716a"],["/posts/cae2c959.html","87e5d386bd283c89c35778f0330d36b4"],["/posts/cbebef2b.html","35852ac19963533a78e1e162b31f853b"],["/posts/cc4c0017.html","b9da5e4bcc81236e67f45be09eb3aef2"],["/posts/ce25023e.html","ca14697658660ae38aaf67bf5ad802a2"],["/posts/d2fd4837.html","816d526bf39ee79625b59c0a17b41936"],["/posts/d3233cbb.html","f53b0d025a752f30fa92084f571375fd"],["/posts/d3a745a8.html","bcab46c977d7ee1c03cd262f64046302"],["/posts/d7e940d2.html","c98e6ef040583dddad3367e9107c78c6"],["/posts/dc815d5.html","4dc251fef0039520e95b5f99a7de361b"],["/posts/de25b0be.html","1dd3465afbc2994f8c531f4a6085c8c2"],["/posts/e2623b4e.html","4c2aad9da487521862a82ec3ff3cb47b"],["/posts/e3ab6ad8.html","698ff1c410e3afeed2c6548fe1a6ed31"],["/posts/e5018da6.html","665bc00c201752bceadcfdf032c54f22"],["/posts/e5963272.html","05d611829cbbfcb73bdec97635960dff"],["/posts/e5ef4c3c.html","e8657153c1b016132fbdbee5cebb10a1"],["/posts/e624b065.html","c36368ec2380446a99874555370b5d31"],["/posts/e7c703bb.html","da18c47ca36e9f9e429d7863be639f60"],["/posts/e8f14b6c.html","37177d895797056d714ad7a047dadf13"],["/posts/e91abb63.html","9b567c65e6f5da601870a7e5abc86e09"],["/posts/ea9a8808.html","818f5a80081283c5f8849dae48eb1459"],["/posts/eb784749.html","3f64dcbdc2dbe098df8cc78f627a52cb"],["/posts/ebaf2232.html","d42d2c2cc39522292f8031bf2e721d79"],["/posts/ed75f185.html","a5b6baa6ab3d86abb0c1b816e444e6f7"],["/posts/ee1ed673.html","2e0a23a71fdfd3fc8e9e29700031a15a"],["/posts/f0c3ed61.html","ac8d17416520327033d9bbf33e92d608"],["/posts/f151ff43.html","0e2327ed187980169802d9ffaff184d4"],["/posts/f21e7f84.html","2b771c604bd726bbb54b26ce9b31102b"],["/posts/f230b0fd.html","540cbd737d4ab8d5fd5588a0f02b89e0"],["/posts/f28a7877.html","c6a13f28677d27133b7188b35a2745ba"],["/posts/f663d5cc.html","9341196be5b1945779aaaeb9d955b92b"],["/posts/f730ad18.html","490ea1d9990f41906ff2d7b74cc25bb0"],["/posts/fb5d4608.html","1cf80ad3006b8abe3106e264967b8018"],["/posts/fc04d0d4.html","3679118f6fa9c21db499e45ef8a7e019"],["/posts/fc455f81.html","fefbf6700c4a69be10d2cb0f5301587e"],["/sumire/index.html","5cf3528426fd8aa4d4682fec826e6499"],["/sw-register.js","046ef6b84b71ad122ee507500db987b1"],["/tags/AKo/index.html","e147436c53bfd5eb1990bb443b08db25"],["/tags/APPLE-project/index.html","e3084a61a2fa44dea95a054ab97fbfff"],["/tags/Ankrache/index.html","9cfef7341ce477e09807e0eaaef408ec"],["/tags/BELL-DA/index.html","1e801b0e0b54eadb93de9703534a5d79"],["/tags/BL-Game/index.html","0ab8cc0563510b4bf4c4007fda1cab25"],["/tags/Blue-Dahlia-Digital-Creators/index.html","e6dcaf21f30a775c5f16a74ff41eb04d"],["/tags/Blue-Line-Games/index.html","d7529cf21c43a3a2c23da39e6dd0b7cf"],["/tags/CD/index.html","b53a83196ae7800e42ba726efd090ba2"],["/tags/CHUNSOFT/index.html","adab905c17aea3503adf7381de727433"],["/tags/Check＆Stripe/index.html","fd2ec176e8d295646634b4e8ea78d7cf"],["/tags/Cherry-Pie/index.html","0c7783d5e593a34f40c9b61ee05c527f"],["/tags/Circle-Mebius/index.html","c1407dd8c101ece3b7545fa720e04a7a"],["/tags/Cosmillica/index.html","131f685c9c034d34cae9edcc725635ce"],["/tags/CresCENT-BLANK/index.html","6fb269e92fb30a5592bbccea3ca79368"],["/tags/Dopamine-Software/index.html","c9786e83b440b27ef45150a121a77c1a"],["/tags/Dos/index.html","3cdf2cfe36a273f5ff8dc8c99b425785"],["/tags/Earth-Well/index.html","1725a261645c0fb6a520a836a0e65d44"],["/tags/Forest/index.html","5c2df259e147399b97e47a6dbb9fed1d"],["/tags/HaccaWorks/index.html","3e97ad48d9e563564e73289cb4f88ef4"],["/tags/Kanon/index.html","059b4f700278f53b5a3d19cd7965cac0"],["/tags/MANATSU-8/index.html","c34b08687b1cf1de9b8b54c10426d46a"],["/tags/MARINE/index.html","cb11e0dfd9094058dc3843a4bf5e9b38"],["/tags/MIO/index.html","489bb4d1ad566de332f58d85e698d816"],["/tags/NAOX/index.html","762a6ca8c3602ef2d2646cda6f3d3d3a"],["/tags/Namikaze-no-Uta/index.html","9a381a4a6a9eed34989f5e534f3f751a"],["/tags/Nmyu/index.html","289d0b196ac6287d1decc029c56af219"],["/tags/O-S-I/index.html","a1d2cee5f6ab5e517e851b52a17eb9bd"],["/tags/Omegaの視界/index.html","1d593b8ab4097c8508230842eb36a537"],["/tags/PC88/index.html","9ffbb22b35bd43fc24e492e91cc6ee37"],["/tags/PC98/index.html","a1c120d3edf7a366731a8ae1f0287276"],["/tags/Perpetual-Room/index.html","f17029ad0f694108d12b65c1f3051e94"],["/tags/Pleiades-Company/index.html","2ca42309b6b8cd5d1fbf06cc3878c656"],["/tags/Project-Twintail/index.html","18a61c26c92fce8abb67514aedbe33c4"],["/tags/RIFF-RAFF/index.html","cf9679ee866cc94b116498986a6bed31"],["/tags/RPG/index.html","39fc3057b20b7ca9a3382ba6d44bb4f8"],["/tags/RPG2000/index.html","07bb688ee6943d36ceec0dcce0fe1c09"],["/tags/Reverv/index.html","7a91ba1997b1b7ddeeea0b789a02fa6b"],["/tags/SENTIVE/index.html","c4faaaec25dc347be5fe662973bde940"],["/tags/Saihate-SOFT/index.html","54971824c24cd99ba4a80cc91feed0e9"],["/tags/Scrubbing/index.html","db95f5716bb76e3bd3c555c23ec63641"],["/tags/Sky-On-R-imaginAtion/index.html","16da65f93a55f878f05f178cac72302a"],["/tags/StrayMoon/index.html","27b7852ecc988a7157bc53b748c1a7f0"],["/tags/Studio-Bu-Sa/index.html","5a1ea6174ca3cc78ca3b2ecdf7ee36c0"],["/tags/TRANSPARENCY/index.html","c1169427d315fb1e1341f3a768794bc8"],["/tags/ToHeart/index.html","66bb2337393b08857111875390b50b1f"],["/tags/Traumend/index.html","c2db3c5c4ff671e70681aa5c6eb9b07d"],["/tags/Witch/index.html","971e6bd798d5289cb50bfecb593115fb"],["/tags/adonis-project/index.html","2cc33bfde036e72c7f4618ec06bffeae"],["/tags/capriccio-suite/index.html","c9e6a9c84b94d67a4189f84ee2a8dd92"],["/tags/flash/index.html","0e6d77de8dbd20075e3d20420528a28b"],["/tags/galgame/index.html","bc7754ab55de5918130552ed3c008301"],["/tags/galgame/page/2/index.html","d37e5a3bc4c8199bfb781288d42f650c"],["/tags/gal资源/index.html","32bfcc8ecd3bf89362f7703fcaa3fddc"],["/tags/gal资源/page/2/index.html","2cb01b392fdc629fcafe0451347c3971"],["/tags/gal资源/page/3/index.html","693e827648cd643e6e617f25d6d23762"],["/tags/index.html","595ea30af21823dc0f51367a6d84e468"],["/tags/m-kz/index.html","a0772becba11a1916c780bbb975fae09"],["/tags/purgatory/index.html","bee19ea2e40d3a677da2c2ccd522e3e3"],["/tags/rkr/index.html","7bf5cb6ce33b56b8b16f958830b2f339"],["/tags/team-eye-mask/index.html","d5f0b110a2f1090c53489b38002f3cb3"],["/tags/ありすくろいつ/index.html","a3b65935b014f5b05d99027108bc4a5b"],["/tags/いつものところ/index.html","b062ed2f4cadadc1f414c948e640ccdd"],["/tags/きつねみみ饅頭/index.html","854b3d9948539cd9dc0723937daf6a39"],["/tags/ねこねこソフト/index.html","202a6317bf1cd06471012471685bbafa"],["/tags/ねこバナナ/index.html","b3f9b5b0bfb21db8a28d588286b33c9b"],["/tags/はちみつくまさん/index.html","4c012a8533afafd4104f5211aa6abb1e"],["/tags/ろりちせ/index.html","00373301d5d624ca78f6313cd44704b9"],["/tags/アイル【チーム・TATU】/index.html","a81c47e7e918922e99a7e0078734bc2d"],["/tags/アクアポラリス/index.html","cd427eb14564e4a0c06e2d9ae1295106"],["/tags/アークシステムワークス/index.html","3ce9f6465e7527aba8aee59fbe13bc58"],["/tags/ブロッコリー/index.html","ccb12c8b0ff1296204ea4ee57ac76ff3"],["/tags/乙女/index.html","752fe26b55c0d1001bdc17926a83496a"],["/tags/乙游/index.html","82266faf886024ee03db0c644f051eab"],["/tags/停产/index.html","190ebba5b7dbe602d2a8852ba814f09e"],["/tags/公告/index.html","ff3320578d7306112db58cf0080159d5"],["/tags/同人/index.html","3a9ad4121342cdaf3aa93e5137f33413"],["/tags/堀井雄二/index.html","c89f28965997efa14e6e83894ab2a6d9"],["/tags/外海なおき/index.html","f018f5c905ef46b1e760ee08e19cc9a3"],["/tags/女性向/index.html","f621aed64dbd0ca688b02c7398fdff50"],["/tags/御茶ノ水電子製作所/index.html","cb6f2343b35b679eaec5b2341c2f6b03"],["/tags/月の水/index.html","892b2080bc096d8975ea455d47e53f25"],["/tags/桃野衿/index.html","9e6b9af9483c31f6fdf63c61246c32a6"],["/tags/機械式少女/index.html","81409aa9e5cd1fe15113f7e6dea704a9"],["/tags/水仙/index.html","171deb726a1c85845368beef8233c5f0"],["/tags/汉化/index.html","db9064c8b47a3932857618a56811ba65"],["/tags/熊月温泉/index.html","27437e1df822b6d46fff8f90f665f9d5"],["/tags/片冈智/index.html","e1df29769c30095c6c5125abaacf0954"],["/tags/片岡とも/index.html","f53fb630bbe39742e664d610c45c3d45"],["/tags/牙の刻印制作委員会/index.html","46a3cec2784c02720a691f6cb2e8f02c"],["/tags/牛カルビ定食-FLAT/index.html","2d6b3ac7090645117fb094a7dfc4d7f9"],["/tags/牧尾屋/index.html","57e073f79f7b7ed078c31d5c9d10897d"],["/tags/犬茶屋/index.html","326b5fa3e7d10b62bb6a95bf6e8bb52e"],["/tags/猫猫社/index.html","7e007f280333f3396a99a8677ad58a77"],["/tags/王宮魔法劇団/index.html","c964e0d982458037373081c38bb4e78c"],["/tags/画集/index.html","2b408f850d4813b791aca1b5f0f435a5"],["/tags/索引/index.html","a97690432c53f70e2f7ab441b8da9ed0"],["/tags/缺失/index.html","c6cfb58ae4b6a91a29f7caa7c98fe081"],["/tags/自购/index.html","7380e8934435cca26555c30e13f88854"],["/tags/茶葉☆姫/index.html","19ad43e29a9b2db6a8d3a373f21608e4"],["/tags/郷愁花屋/index.html","711774266892f56899ea04abaa2b779d"],["/tags/閂夜明/index.html","24a90e736cf54ad1ba21faa669b9d2f7"],["/tags/音乐/index.html","c59a54883cdc741fcd495e3c8b32d877"],["/tags/音乐美/index.html","783e00710567168e49ebb89967ad4276"],["/tags/黒†救/index.html","90f651f009055129fb83b7a846703d45"],["/tags/黒百合っ子大集合/index.html","717d9195af473958d51d888cc2f93097"]];
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
