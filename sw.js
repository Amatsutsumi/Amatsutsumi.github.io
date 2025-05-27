/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f6b49ce0a2bbe3813ea2d93447dbac26"],["/archives/2024/04/index.html","f9dfb1fd706740ac3c7a520d923e557e"],["/archives/2024/index.html","27b2da818afd287f48b739a87cf0c2ff"],["/archives/2025/02/index.html","626845be9502431e56fada68115f1bca"],["/archives/2025/02/page/2/index.html","b66afd066d0762c148638c813c2b12e9"],["/archives/2025/02/page/3/index.html","04eb4d832bd20f1830aedcae2e9ef2ba"],["/archives/2025/02/page/4/index.html","8e258a4ece4ecea3fc58e1d7659d5d7f"],["/archives/2025/02/page/5/index.html","3c37f35f846782b0f415c84a338eddd0"],["/archives/2025/03/index.html","9b1ac4c32d69bba882b2d94ab35dcdee"],["/archives/2025/03/page/2/index.html","ac27a9d00bbda9870123dc240c5dfa46"],["/archives/2025/03/page/3/index.html","7b491f57fff93b05be31a880e7b4207f"],["/archives/2025/03/page/4/index.html","1121dcee649628e90c47dfcbcca56430"],["/archives/2025/03/page/5/index.html","a10bad728f366d7489d53ee8a8b67218"],["/archives/2025/03/page/6/index.html","43ce323a6b73b1d5f49c44782dc92aff"],["/archives/2025/04/index.html","fa9054197e9f6a7a49bd9df3cdeccbec"],["/archives/2025/04/page/2/index.html","5ea2e2b9cc01151bee0223933fe5b2c8"],["/archives/2025/04/page/3/index.html","9eeb0c17a9806d9f04b0146f3f9107b1"],["/archives/2025/05/index.html","0f4dca7197c903dd5c298a3331a3465c"],["/archives/2025/index.html","ddcc8735a365ef2a3558b7db531ce451"],["/archives/2025/page/10/index.html","69c5402fc16607765def8bed5759cbca"],["/archives/2025/page/11/index.html","d122645ce1d5c5fc17dd397896f979cd"],["/archives/2025/page/12/index.html","a155898e95c55d0de6099c2b83c139b9"],["/archives/2025/page/13/index.html","f5302e25c16ceb39a5b902225461df55"],["/archives/2025/page/14/index.html","66fd9763c6766c9a1041fecf8b8c7e35"],["/archives/2025/page/15/index.html","5bbeeb1919e7768cec60c7a308a5f1e9"],["/archives/2025/page/2/index.html","d81fd32f6a075d5b76340224b1e21975"],["/archives/2025/page/3/index.html","e6334a4a4e00ad844541675f6adbcd44"],["/archives/2025/page/4/index.html","91fe1255b6034a84ec08ff3e1cbca568"],["/archives/2025/page/5/index.html","2ba867f7b0f419ba1ca304eaeb03a167"],["/archives/2025/page/6/index.html","3845d0390baf30436259f256ad583714"],["/archives/2025/page/7/index.html","6044f6a7f598f2d27af76e1423652789"],["/archives/2025/page/8/index.html","802550e43bb023ae144df264ff1dea28"],["/archives/2025/page/9/index.html","6f96ce192b1bd6010160c77da40fe90b"],["/archives/2026/02/index.html","9775202a1267f672f84b7653a5ec9a3a"],["/archives/2026/index.html","74daef305a16f093aebf1cbc1f8034da"],["/archives/2095/05/index.html","e20af7964e555e2d4389ac6754f12103"],["/archives/2095/index.html","57aeb110caf317e4524d2489629c0755"],["/archives/2825/04/index.html","be78e2a0f0dc0cdc31de46671426a400"],["/archives/2825/index.html","9bf59c0c6e6b626606e717880501f96d"],["/archives/2925/01/index.html","bef51bb950e1bbbde5ba031f99b927c3"],["/archives/2925/index.html","a340441bc7f72459a30d53a6829f6584"],["/archives/index.html","3d8f9ea8eb4e1d2302ed07f30af9f707"],["/archives/page/10/index.html","ef84a4cdb12c2ee52b06d762e9996db8"],["/archives/page/11/index.html","2655d0511d7c3218aebe52ab7e8cce92"],["/archives/page/12/index.html","d6baa1e13da42543cddce7052e5ab67c"],["/archives/page/13/index.html","e79c9cb3748d0572bebb16985040cdee"],["/archives/page/14/index.html","8a245964c7e2597e96b254c2bd58bac6"],["/archives/page/15/index.html","fae0b7783bc9124c1dedf3646bb94ff9"],["/archives/page/2/index.html","9f05f0655b5e6714fd341c21503339fe"],["/archives/page/3/index.html","b2f5431eb1b7f2c6cbf98a0df2c899a0"],["/archives/page/4/index.html","fc0f1efb60252d9e011278820d02987e"],["/archives/page/5/index.html","d1fa8244b17fee40c4ca98b4dba2aeb3"],["/archives/page/6/index.html","b503117bbe29426b3ce000b79b5d5a8a"],["/archives/page/7/index.html","80041c58ade0076cbe4940190ded3656"],["/archives/page/8/index.html","384e27aa7d19cdcee250437e9c6e3c30"],["/archives/page/9/index.html","517e5dfa678ee6bc51f37a7dbad1334b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","9f9268afa6c4a1b0a850d8f6bce8a10f"],["/categories/galgame/page/2/index.html","3e0382992da28dc60c1c4fc08c9b8c2b"],["/categories/公告/index.html","cca776f1371f319b2dd66abb24ff1a5a"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","8d40890f6ad62c24ac24385887d51435"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","f5eceb53692ddfd6c0a1faded667aec2"],["/page/10/index.html","b4401e163bd309ce05c5dbdb9ac65f14"],["/page/11/index.html","f8d73d72c465d58399483319d4d3f817"],["/page/12/index.html","901c8eaa263cd860a1ae58648466c5be"],["/page/13/index.html","c8d4bc3a830e89dc082399a437430c23"],["/page/14/index.html","7e73d67cc3ba314dc939116e67191c21"],["/page/15/index.html","b330138f035dc57d600fca95903b2248"],["/page/2/index.html","6592125ceceede1fee4cc0ee036968d4"],["/page/3/index.html","f6b5fc2b2da1aa6dd307b2c9a315bf0f"],["/page/4/index.html","cb596c8022b7bb16d5ab69b9c41c1ccd"],["/page/5/index.html","5758c817daa9d28cc36628629d0d1ca9"],["/page/6/index.html","6198d8401ba1c48355b63421ca5ae617"],["/page/7/index.html","57d5b4607b9e526133e7b06caaf95135"],["/page/8/index.html","ad0ca4406fbebf2ab7a9e349917cb606"],["/page/9/index.html","a7244a18c95fe68826257306610d352c"],["/posts/10c9dd98.html","69e26ea979ce0b9279b856be066147b5"],["/posts/126ebb99.html","357af74ba9f0019db3f9626c4a875bbe"],["/posts/1295b569.html","ab6aadb6d3db0d2136f7732a5dd0e6b8"],["/posts/1370342.html","5ece3f68e10049180e8db1712767008b"],["/posts/15ef14c2.html","31eec51c6136a77ffdb10dc3e30e1909"],["/posts/15f3959d.html","da2b9ad9361c001d17dd64d35d75c23f"],["/posts/18ab785d.html","36474870e52b19d3c7f9ba5bfb0fd0e1"],["/posts/1d59b71f.html","913c7264013ae94e7e69e186b1ff1035"],["/posts/20b3f3a4.html","d48d66cd408083e49dcae00e78382286"],["/posts/245f1c7d.html","41142f6becfc9556e0bfaee9420a6ad6"],["/posts/252658f.html","6f23a4e7154e96188285c200ae5d4102"],["/posts/28397adc.html","d14778233dc3a68cd2ed991e1fa445cd"],["/posts/2ad07f54.html","577a920a248959b152044867933a0024"],["/posts/2b38bce0.html","0b23f12a2b308635bcbe987e4290daa7"],["/posts/2c0a6836.html","74939bdd55c53bd84791adbb093ceae1"],["/posts/2ce39bcc.html","8dc69de9e5fd7bd083de1bea08f9c3f8"],["/posts/2cf620f0.html","c971fa7139d67565c54e6aadbf2f9b43"],["/posts/2e30fd6d.html","a7c83c60c4f3d7cd58ad000e5b77c8a6"],["/posts/30a413ad.html","7ee5564f8a76b43ce9970f40f5cadd55"],["/posts/34292736.html","384fabbae924f4941c50f68ed03ca617"],["/posts/3468cbe.html","26eba4106fb915dced81f7a86566eec8"],["/posts/39176dc0.html","b40fe117ba61bc0b388efff8ffc07653"],["/posts/3be6a165.html","f8d006983d8458577116980246f36d7d"],["/posts/3daf73b4.html","7e5cb805999165fb8fd642fa0f01e3c7"],["/posts/3e118dbf.html","94daf4bfc8d7e777f5b410f880316986"],["/posts/3f7d823a.html","a7a2c54f1e5ff67f9442ed6ed396cd57"],["/posts/3f978819.html","ee9143650a9f2bf8c4c18e8d45d58db5"],["/posts/41dac80e.html","69403c82f7c2d09c97b848aae4ba2138"],["/posts/43945723.html","e188bffac92346906f8a1a8daf852847"],["/posts/44124a6b.html","b396e6308017636a6f9fcd7b084e0932"],["/posts/476a3006.html","3115db948ce42f3e1ea34090a0af5616"],["/posts/47abb61d.html","76f8529e7d092e3f69168e401029235f"],["/posts/4996478a.html","2b7bb4a7f245d775c40cc39f54f52bdd"],["/posts/4b689be3.html","5c1eee140ab286630acd05f8a566cf69"],["/posts/4cf8423f.html","115ca19954f398ada2bce9c2ca88afba"],["/posts/4dcf85c.html","629b2c1d0cec96737db406b12ff0b408"],["/posts/4e314e04.html","51b81fdcdb30e6b06e5c597cb59c3422"],["/posts/500cd322.html","22b1a962c368e84a30c5639604b3ee92"],["/posts/51c9b1ff.html","2b0e04411586b03f2d07691c1295fc2c"],["/posts/51ce68e8.html","bde49606764d98286a8cfbb7924562ab"],["/posts/52b5b3c6.html","d8728b6592a30605d54580294e35be81"],["/posts/54f496ad.html","e7effa11b841013d347a3587d2aa1b6e"],["/posts/558e1f30.html","67dd44ec8dd3ed22173a7246a7c6fa57"],["/posts/5d8bea92.html","81a88406fa55a76d403a3c0b724a99c9"],["/posts/5f6e0c59.html","dabf8315ac199841e9d6c7a82ad89dbe"],["/posts/61a63a84.html","f95d3c61f605201cc712b80985514870"],["/posts/625ab7bf.html","5a237121c5ed9bc685225e2c2cac0c94"],["/posts/6336a2f9.html","82377e280b7df8eabc43c66e5ab990c2"],["/posts/6432d61a.html","484157b4bc1d4fb7beafa7ca581e25aa"],["/posts/6515f032.html","6ca4b71c148987cb35e6256dace9e474"],["/posts/6720ccdd.html","7863c0b5aa237723412d2c408cf86e2d"],["/posts/6a4b5ac8.html","8555783cec6f02463130c6cda6b51c14"],["/posts/6aa4177c.html","be7f66f2e3c769dda86fc91e6c3199b5"],["/posts/6b15f81f.html","21af9d43cb784cae2aa0c9a4b1f29494"],["/posts/71131d34.html","c299868a9c3992bc4bc2a38a090e94e4"],["/posts/742fd48d.html","0f481f74273321325193ecf67e4de3bd"],["/posts/78a8a8d3.html","ddaa73a96c11f7a45e5f70d3f9855722"],["/posts/7a5ef3d0.html","98c34e72a4e51ef1ce8743d095979c19"],["/posts/7b41e1ac.html","bad7934c0e661f84f1c0225cb6ce233d"],["/posts/7b51011d.html","7a0dae4e9dcddb152643e104333019a3"],["/posts/7e3aa3e2.html","980008a0c9388980be272560d830a7e3"],["/posts/80fe2691.html","f10f5623d23d9f7381c863c7c3b02e4e"],["/posts/81ac52e9.html","baefffd5cce477bb3dde9c85240f8fc1"],["/posts/82332d11.html","2ba08fe2db398f873710b9d2f2e9f4b3"],["/posts/8486f6f9.html","5b6be927b6f629f014a5a033137d43df"],["/posts/849b40f8.html","2924f2199bb490417c6e26784fec3be1"],["/posts/85c51d68.html","6b67b10fc37268cc19ae323920b233d6"],["/posts/86a6c500.html","672b69f8a626a62d2bce41f2a0141612"],["/posts/886f8d3.html","92aed8281baf339145dcef6c5c91140e"],["/posts/8a7cba10.html","d06b1b89a7dc1aaad0ecff30ec79efe4"],["/posts/8ac11b41.html","ba34a71e293ca0845b01cdabc14140ae"],["/posts/8c3f2fd8.html","6295a226257b0927b944d864cd712ad3"],["/posts/8dd520d9.html","4b4b5dd72e581645fee9841cb3c85f31"],["/posts/8f555654.html","96f9f61bb734ed1208db5f6eb03eec6b"],["/posts/92a980c2.html","3625c2ef5ea5d8a9697ce5014829b654"],["/posts/92ce16.html","5e5b5386b01cb336cc34b29a0deb8891"],["/posts/93e9943b.html","446df1f23555ef37609309244270e275"],["/posts/94d3c794.html","1e940d96261aa2d7a1e957bf20a39d29"],["/posts/96b281f2.html","bbeee2247fed98e51bed7b75ca185f70"],["/posts/97f50eea.html","cde5497cb5ebab35edb4a0779f94f800"],["/posts/97fca8be.html","a613b39f1334aede128d392604f576c6"],["/posts/98662d05.html","a9a72f0d039d4d5bc6b72e3bd23e37b6"],["/posts/9a2f6162.html","9fe13ce640be48497bf6e2f028e55641"],["/posts/9b22a48d.html","8896854ddd7d8e0da31068f54b7ed026"],["/posts/9cb455b1.html","faaa8f9f652f445abeae793e2fa55140"],["/posts/9ecdeecc.html","ddb022a1bb6a571784d2cb101e381884"],["/posts/9efd7701.html","3f6bd214bb9e01e4703b4df5f59337cb"],["/posts/9f61c1a0.html","09c22b04a1359960c5eb795a320cfabd"],["/posts/a1de710.html","132e204f9af413d6bf922060e0faf6d5"],["/posts/a30eb0cd.html","8b8ddce62084d9fa3f7f03f9eb2f7971"],["/posts/a72f71c2.html","fa9bbc60b2cb034161c9fa334260e0bf"],["/posts/a7634b5d.html","24ea8efcb87721fb1dbf8c0fc5a48b93"],["/posts/a8c593b5.html","0f1b1f890fccb3a0caadf1849f2d7c06"],["/posts/ad0c1efa.html","4ef9e23f8a96dc74ed8ae940f44fe004"],["/posts/ada3f440.html","2a265d39a4e668baee2ab828f830e150"],["/posts/af1807ef.html","f22fb84e6d7478a3162919092fd88b18"],["/posts/b397bf03.html","782dc19e1210def33b9077c51003e709"],["/posts/b497b647.html","71442861568b5f88cfad49dfd19d9b3d"],["/posts/b4d464b0.html","c118700c85aeac3a45aea72033b157be"],["/posts/b5fb773f.html","26f680c87246f00e9a46fbf07be834f9"],["/posts/b8d46b32.html","67064e6bc9a972e58bbeb8410f55333f"],["/posts/c1b2c6c9.html","d97ce8fa38826d0305f9fddd32125f60"],["/posts/c2111cbf.html","067b634151e42113f82db294deecfcef"],["/posts/c316c2e8.html","493673bbd5cd370aa1464385036585e0"],["/posts/c43e60b5.html","dba2ede4e271e4e2158ede25c8685ef0"],["/posts/c497a412.html","ef7563ecc0b614c75abb350f73bc8443"],["/posts/c5395ba3.html","d5990d58958bb05f6ac655dd1c42aa8e"],["/posts/c5de299a.html","850edc7cc26ddaefaec7ea14ce0771f6"],["/posts/c60028d9.html","7441b7990bc3237bdf9a901833ee30a1"],["/posts/c70bba9c.html","e8b52bb96efb50e825755b182c97a17d"],["/posts/c797535e.html","62b1bf7666c0a41d4a5c59f5cf3ff258"],["/posts/c7a62c79.html","50c72b17c065d2a062a7fe6b99438334"],["/posts/cae2c959.html","519ae153b5c7dd80b8e2913836acb86a"],["/posts/cbebef2b.html","35852ac19963533a78e1e162b31f853b"],["/posts/cc4c0017.html","b9da5e4bcc81236e67f45be09eb3aef2"],["/posts/ce25023e.html","ca14697658660ae38aaf67bf5ad802a2"],["/posts/d2fd4837.html","816d526bf39ee79625b59c0a17b41936"],["/posts/d3233cbb.html","f53b0d025a752f30fa92084f571375fd"],["/posts/d3a745a8.html","bcab46c977d7ee1c03cd262f64046302"],["/posts/d7e940d2.html","c98e6ef040583dddad3367e9107c78c6"],["/posts/dc815d5.html","f1c1c950a57f4cf2d0f9d5b794cae3ba"],["/posts/de25b0be.html","1dd3465afbc2994f8c531f4a6085c8c2"],["/posts/e2623b4e.html","4c2aad9da487521862a82ec3ff3cb47b"],["/posts/e3ab6ad8.html","3711220570abea8ecab2bfe3fbf9cb05"],["/posts/e5018da6.html","665bc00c201752bceadcfdf032c54f22"],["/posts/e5963272.html","05d611829cbbfcb73bdec97635960dff"],["/posts/e5ef4c3c.html","e8657153c1b016132fbdbee5cebb10a1"],["/posts/e624b065.html","c36368ec2380446a99874555370b5d31"],["/posts/e7c703bb.html","da18c47ca36e9f9e429d7863be639f60"],["/posts/e8f14b6c.html","37177d895797056d714ad7a047dadf13"],["/posts/e91abb63.html","9b567c65e6f5da601870a7e5abc86e09"],["/posts/ea9a8808.html","818f5a80081283c5f8849dae48eb1459"],["/posts/eb784749.html","3f64dcbdc2dbe098df8cc78f627a52cb"],["/posts/ebaf2232.html","d42d2c2cc39522292f8031bf2e721d79"],["/posts/ed75f185.html","cc077243df1e8da284fe6cde66e056e8"],["/posts/ee1ed673.html","ec07a2c5aa5d24afa381a221eb1af192"],["/posts/f0c3ed61.html","ac8d17416520327033d9bbf33e92d608"],["/posts/f151ff43.html","0e2327ed187980169802d9ffaff184d4"],["/posts/f21e7f84.html","2b771c604bd726bbb54b26ce9b31102b"],["/posts/f230b0fd.html","540cbd737d4ab8d5fd5588a0f02b89e0"],["/posts/f28a7877.html","abb30931ab52e2d4b6a0f0f00cd24ed0"],["/posts/f663d5cc.html","9341196be5b1945779aaaeb9d955b92b"],["/posts/f730ad18.html","82e4f688d46990cabf6f662f5353c05c"],["/posts/fb5d4608.html","a708679603f48ee926df4cb318c09ba6"],["/posts/fc04d0d4.html","3679118f6fa9c21db499e45ef8a7e019"],["/posts/fc455f81.html","1c1066788ee9e392311b85a088aa6fac"],["/sumire/index.html","d18fe5af048da264407f26c34fea0467"],["/sw-register.js","1af6f4e6cf8a0350474ff9d7c6dd7575"],["/tags/AKo/index.html","e200bf1f59d26b859f0919bd75d5bf41"],["/tags/APPLE-project/index.html","0161cddc34b420751276b799a2c09c3a"],["/tags/Ankrache/index.html","cc3851099d451bbf4595767a932f1c33"],["/tags/BELL-DA/index.html","50fe7cb72c68b85ebea96dab3ab2923c"],["/tags/BL-Game/index.html","ef44355e29542021bf0d3dd1fa57d26b"],["/tags/Blue-Dahlia-Digital-Creators/index.html","58c512ac60b900836974c76451a2831e"],["/tags/Blue-Line-Games/index.html","1585438a8d1fe3bdab6f553b2cbaad2d"],["/tags/CD/index.html","c7ebcc4d10a6cc1cd1ac64523a482d8e"],["/tags/CHUNSOFT/index.html","bd7337977997757945edf82c58de02d0"],["/tags/Check＆Stripe/index.html","fed1f730f19ac2ed95918cada83bb6d3"],["/tags/Cherry-Pie/index.html","5b43352b0eaa08b8d3bc086cb6161109"],["/tags/Circle-Mebius/index.html","ceef207080e0665899ad31814e439c1f"],["/tags/Cosmillica/index.html","10eefe34a1c23d250b8aec27695861b0"],["/tags/CresCENT-BLANK/index.html","a0a7026b3f13b548eb82ce0da41f8e3a"],["/tags/Dopamine-Software/index.html","9fee793ac5b266b30be0bce974223a80"],["/tags/Dos/index.html","dacf85d88699b2f88446f27bd10661f4"],["/tags/Earth-Well/index.html","0f8d3fe095240fcde7a4391302ac46cb"],["/tags/Forest/index.html","40fd24722b2d878a5ab6ec5d783a2afc"],["/tags/HaccaWorks/index.html","45503ce6467a296d8a2f50dab531a5d1"],["/tags/Kanon/index.html","64af14b32f70f0818d67f321e66b11e3"],["/tags/MANATSU-8/index.html","87cb6280bcfd35bf21f0f7932c94a06f"],["/tags/MARINE/index.html","4dcfb7d1c3e77989f54a953d5b2b511e"],["/tags/MIO/index.html","582f4b6198b3891e1b00ffc13fbe9a6f"],["/tags/NAOX/index.html","ecea1eaae9aaad3a1f0bc6a53c87827c"],["/tags/Namikaze-no-Uta/index.html","69dc40c00b238627316394ce4d685240"],["/tags/Nmyu/index.html","f6b53c5342fde81ed859ae402b1553c7"],["/tags/O-S-I/index.html","aba2cc6d466facedc0883a7c2c261c06"],["/tags/Omegaの視界/index.html","48d12c40892f305957d693c387987611"],["/tags/PC88/index.html","fc7c6e1790ea00913b6a233fbbe5ef2e"],["/tags/PC98/index.html","10bd8f2cafa93a181177fb3486c096fe"],["/tags/Perpetual-Room/index.html","91a4dc10d76687a79c1e424862f2ae39"],["/tags/Pleiades-Company/index.html","74a7cf7d1326a9390086d2f1878c2cc5"],["/tags/Project-Twintail/index.html","28562f8c92e08cbf9b01254afd4e39e7"],["/tags/RIFF-RAFF/index.html","f7430f34dbdcfc4bd02becd8a3bfd7e0"],["/tags/RPG/index.html","df9a0a3c9d468011cbefbed02e5f04b9"],["/tags/RPG2000/index.html","fb0923313b18fe3f606595178ba9928d"],["/tags/Reverv/index.html","8d3fc534f002b2af410b893a518d6566"],["/tags/SENTIVE/index.html","4d6d0cd340c362aceef2dd7566cbf784"],["/tags/Saihate-SOFT/index.html","01b9f7afd8982af0f968cba051c31d74"],["/tags/Scrubbing/index.html","3b380c812e8e916fd60b591c7cc2a5df"],["/tags/Sky-On-R-imaginAtion/index.html","22dbe7601fecc9034ff49b2aeb606136"],["/tags/StrayMoon/index.html","315fa648f5b69f75ee9f527e73e81816"],["/tags/Studio-Bu-Sa/index.html","da6ddffd27ce599ccd306be2eae11fa9"],["/tags/TRANSPARENCY/index.html","711a2a7f3e9c0fb00cfcf0b467d10aa0"],["/tags/ToHeart/index.html","f240acff284944027a64f32017210d5a"],["/tags/Traumend/index.html","5bd71da1a1b32b542dea4dcdd61e3d94"],["/tags/Witch/index.html","7448125427598a6cc12155a2c4effdfc"],["/tags/adonis-project/index.html","fed85e184646f58490d11c8c2fc072d3"],["/tags/capriccio-suite/index.html","605de452cac267d2b7355511619df955"],["/tags/flash/index.html","f95a7755264273446f1bc3ee44ecbaf9"],["/tags/galgame/index.html","9bfc69fb34e1ae821defb1574704d63f"],["/tags/galgame/page/2/index.html","54ca5bf2b9e0f3977ef488afe137a89c"],["/tags/gal资源/index.html","aef3200bc6ffc8d122914cfaddcf9161"],["/tags/gal资源/page/2/index.html","e03e885aa68b5562bdf51217dd2e5179"],["/tags/gal资源/page/3/index.html","f628b2d75442da4d03c204e3cb12f59f"],["/tags/index.html","545fcb415176c62bbf8093b9105bf5ae"],["/tags/m-kz/index.html","b9b53e6f3a28813dbbaaeb00db128edc"],["/tags/purgatory/index.html","26a8378e947c338e622b28b5752a2b5a"],["/tags/rkr/index.html","63bfd2b48179e57ccd34585f51768c59"],["/tags/team-eye-mask/index.html","2bce24f5442df654ea413c511d80e9bd"],["/tags/ありすくろいつ/index.html","097eb544acb04e3d6b02ea28ebde5cd0"],["/tags/いつものところ/index.html","388e27a9ba4cf9f95b2dae5a07b417f9"],["/tags/きつねみみ饅頭/index.html","79646cd719e99a7b863ead1d7dd3d7dd"],["/tags/ねこねこソフト/index.html","c5478bd428aec1cab7875fa436c753e2"],["/tags/ねこバナナ/index.html","9da50adb04828d56f95f843b5828f8c6"],["/tags/はちみつくまさん/index.html","3d0195479fe6ac5def47eb1d0c81ea76"],["/tags/ろりちせ/index.html","c836d36c9af08c71d4962e4ccebfa4e5"],["/tags/アイル【チーム・TATU】/index.html","6ea949d63f749829b38ae3143dc08389"],["/tags/アクアポラリス/index.html","d546dbcb64f69923d5c2759955000264"],["/tags/アークシステムワークス/index.html","7aae818bf436ccaa979222ed6fdd71bb"],["/tags/ブロッコリー/index.html","dabbfe9ba3a004464da475e5d4d4c73a"],["/tags/乙女/index.html","9947e6c07f8580d1059650c164fa78ec"],["/tags/乙游/index.html","cf21ef394696ae0195f608145ea25dd9"],["/tags/停产/index.html","7e50ecc37df97517b97b8773cf668dc6"],["/tags/公告/index.html","ee01e57d0093dbee3fbcaffc6ae0958f"],["/tags/同人/index.html","afdae6d725c3394624784f14823674de"],["/tags/堀井雄二/index.html","8f434eacec2853ea9da09cb24afff945"],["/tags/外海なおき/index.html","915d57e5bd179019f9f7807ba45a960f"],["/tags/女性向/index.html","12647e73a683e5daf174da614c0f5951"],["/tags/御茶ノ水電子製作所/index.html","a6fe9c9ee4a6aff833438519587a4fb2"],["/tags/月の水/index.html","28a74215e46150f9a5d07c637fddcf32"],["/tags/桃野衿/index.html","39666a133b2aa0b5bceccdbadf3ce104"],["/tags/機械式少女/index.html","bfba7eac252a908f144a255f6e78bff2"],["/tags/水仙/index.html","d5573bb7c98921fdff29cfc366f8435a"],["/tags/汉化/index.html","0c8927a4ae27a3bf0cc0f1f0d5132484"],["/tags/熊月温泉/index.html","06b4d10858005aa01f1eb78023ca6fbd"],["/tags/片冈智/index.html","fd9c9ba924792beed6c4d224ea4f74e8"],["/tags/片岡とも/index.html","c25e2e68337c4210aaf9645abfc33ac1"],["/tags/牙の刻印制作委員会/index.html","8a706b025237f2a10b1b2c897df73d4c"],["/tags/牛カルビ定食-FLAT/index.html","2ec337b3da2057bf1f941030670adc63"],["/tags/牧尾屋/index.html","fb8bb2c02be9854923931b7c4191edf6"],["/tags/犬茶屋/index.html","4c6bdb1f5d5948660938c6b2bd2de6b1"],["/tags/猫猫社/index.html","d38c45e99e69b644d30ef27e67c59ab7"],["/tags/王宮魔法劇団/index.html","2dd0a73a37e11b8409fa18dc9fc45774"],["/tags/画集/index.html","7c81262bb1624163049bc7ddb33a369e"],["/tags/索引/index.html","b820083186529c1d33ac9ad935c6ec57"],["/tags/缺失/index.html","e45d2c1bf4a56fabb5aca109907dbc44"],["/tags/自购/index.html","956d2274ee9e78276d86de40a6107e43"],["/tags/茶葉☆姫/index.html","19abb72d82031c47a38873b9babe14f9"],["/tags/郷愁花屋/index.html","de2fb0e8c1162b2837a3ee71433e4978"],["/tags/閂夜明/index.html","8e987993b92105b7baa1893e5fe715ee"],["/tags/音乐/index.html","42fc386b0fd198eab5a8e582d4a44e56"],["/tags/音乐美/index.html","f994ce85dfe09c8f667c408d47de1e1f"],["/tags/黒†救/index.html","b1da1452ae7022c9a1035feda742c86a"],["/tags/黒百合っ子大集合/index.html","c62b9d56bb349fd39c6cd2ffe399b1a3"]];
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
