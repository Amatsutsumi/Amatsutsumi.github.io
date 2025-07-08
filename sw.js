/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","517a27e5d1fd4cd3c7e1a0895f0ae56a"],["/archives/2024/04/index.html","98d7b7a3c4094f08e227e3fbb5c8b3ee"],["/archives/2024/index.html","43b09be0abd9b636900f5dc1ee522169"],["/archives/2025/02/index.html","b63299924f311378224b503fb617207e"],["/archives/2025/02/page/2/index.html","5a5daef8f34f27a7dcee7d2fd70e4340"],["/archives/2025/02/page/3/index.html","3010488abbd05d7f222cf7b8aa6fc73c"],["/archives/2025/02/page/4/index.html","e66be789fcc88596a1ee137fa015acbe"],["/archives/2025/02/page/5/index.html","71a2268f820403974eed741f5a3405a0"],["/archives/2025/03/index.html","6f6d8c965b31a913c47c1d28faa50d82"],["/archives/2025/03/page/2/index.html","3e4ddc1cf11225d9591fe69079db8a49"],["/archives/2025/03/page/3/index.html","ca0c8469bba9e08d1eb1db68132a0a83"],["/archives/2025/03/page/4/index.html","eedb20e209faadcde9bce98849411da0"],["/archives/2025/03/page/5/index.html","466393f30bfce067068449ec664bd47a"],["/archives/2025/03/page/6/index.html","e4e600a26564d22d566f0e01ff21e2e7"],["/archives/2025/04/index.html","91c046126f2f243d774aebd8603f42da"],["/archives/2025/04/page/2/index.html","96a19e8828bf25af20c3e963dc180718"],["/archives/2025/04/page/3/index.html","29c197c1ead8917728371d4f1316e6e9"],["/archives/2025/05/index.html","3b478b0970f1764f02368209ee48ae07"],["/archives/2025/06/index.html","76690e13ff390d58ebbab01bee153e19"],["/archives/2025/07/index.html","3f34e736bafd9da1c153002c4a48b572"],["/archives/2025/index.html","449f9351dcabd24e940828358b979231"],["/archives/2025/page/10/index.html","9ac65ba1770c4c5b3e193faa68142a10"],["/archives/2025/page/11/index.html","27100542c08ced35e7d280b61ced44d1"],["/archives/2025/page/12/index.html","68f6ce49e302efc0b5693f27926730d1"],["/archives/2025/page/13/index.html","9772fa60a0eac7c222c229b42a6e7a34"],["/archives/2025/page/14/index.html","720e3472724d0e27a17700672ee0415b"],["/archives/2025/page/15/index.html","85a895469ac4a7f49e065033e67ff1d7"],["/archives/2025/page/2/index.html","f1fa081f8151ffe83a8c07cbf081f3b5"],["/archives/2025/page/3/index.html","4491b2c004c91814b8a33b002b29d84f"],["/archives/2025/page/4/index.html","6970323aae53d03d12397da2dca91ade"],["/archives/2025/page/5/index.html","d07f5f7c7398e4c0690ffb4635a195bb"],["/archives/2025/page/6/index.html","d579d385bffa67ce34f597f81dc0ee7f"],["/archives/2025/page/7/index.html","94ed5903501203be312e35fd70ff6f69"],["/archives/2025/page/8/index.html","6730757229ad723c6772e5f86c94d808"],["/archives/2025/page/9/index.html","0d60d9b924da1c1fad9f2efd555e1d7e"],["/archives/2026/02/index.html","2c249a30612858f41da7b1a0bf82056e"],["/archives/2026/index.html","9a32e11a8d38ba254e4fdf74571a4b5d"],["/archives/2125/04/index.html","fb6439e74878c8489f563e9d9b87feed"],["/archives/2125/index.html","9973a17602a7ce530861740b31374c33"],["/archives/2225/07/index.html","4ac6537c04f9dd2b0f240e7f9e06df62"],["/archives/2225/index.html","262b2520269992c88a58a8fbdf2fa7e1"],["/archives/2925/01/index.html","488880b70e344e42bcc8bdc114a176bd"],["/archives/2925/index.html","da9acac750ac38cb577a0325afa8741b"],["/archives/index.html","6b88068e7f016f519905c87646f55bd7"],["/archives/page/10/index.html","ec491da7276a8fe4f099bfc81cbdeede"],["/archives/page/11/index.html","0e3fa4adb48acfcaa52c6b6be1af925c"],["/archives/page/12/index.html","dceaaeb93f287023743283fdf46c8df6"],["/archives/page/13/index.html","809e096b661599c8e73470c8b206c7fd"],["/archives/page/14/index.html","29cecadba9dc6d5569339ce6f23ea353"],["/archives/page/15/index.html","dced5077c21551c2bdc5c732edc480f0"],["/archives/page/2/index.html","1ac822b3bff534461f614214e1ae3d05"],["/archives/page/3/index.html","baccff23e627b61b3ca702b7f5e957fa"],["/archives/page/4/index.html","0e3c9504122334ed3161bc821f7363dc"],["/archives/page/5/index.html","a5702bc353816e438efcb310370fe5b8"],["/archives/page/6/index.html","4f969290d31940a6ca2ca055144eb930"],["/archives/page/7/index.html","a4b99b76fd45a53d4cbf6ee29b66a1af"],["/archives/page/8/index.html","2cd40eee68ceeac6be0717c81cb5c802"],["/archives/page/9/index.html","de1ff2a844792edbdb948678dbfd8e9b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","f06f5a15efa1e23a32dc81d132b2cec8"],["/categories/galgame/page/2/index.html","6985e9f12965d061749228ce34436246"],["/categories/公告/index.html","0df49db8836a8935f8b71ab508785b5d"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","1462ef103ce5400590d58617111cafb9"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","7cfa744e4a0404d99f80e0a4a6595494"],["/page/10/index.html","3165f21bfe6ec41ad9b70662bcf807f8"],["/page/11/index.html","483a92143afbb20e9bbabaceb7142a3c"],["/page/12/index.html","ec67035f9404a65b7336d3f3eb892fc2"],["/page/13/index.html","c4d18c512e47243e2791d6743e17f8d7"],["/page/14/index.html","da74ce948d42dad24499820efbc69d44"],["/page/15/index.html","256a7b879a9922e1b34b05553d80aa90"],["/page/2/index.html","d0307945be752ce688a6e62434b94b3b"],["/page/3/index.html","7583c1622b12fed5e863b9c86bbea3b1"],["/page/4/index.html","d9417da320a01f2c8a58ae1b3bcfad77"],["/page/5/index.html","843f57659584575c2f95411327204d40"],["/page/6/index.html","dc4b08cec659720e0050200214442841"],["/page/7/index.html","483d5863dfc1f35bf6b722f73426d828"],["/page/8/index.html","9d4a456d26e87652e4c73654397c3df6"],["/page/9/index.html","dc9517320dde5954efce6177b47df51f"],["/posts/10c9dd98.html","d9dcb692dba734488b72d8e73aaac8bc"],["/posts/1295b569.html","beaa750d2f29ab21a19260b727877877"],["/posts/1370342.html","8cd367363e680d2f934a66d88a79c776"],["/posts/15ef14c2.html","1a110f2ed4a49e4132ae1840d222f6ae"],["/posts/15f3959d.html","40a77d01062cf0f8f6fd2672fe64d75c"],["/posts/1840d617.html","a884ea1c68dfefeedc088af300de5335"],["/posts/18ab785d.html","f4ecd06bc1357902f24f8c743dbcad00"],["/posts/1d59b71f.html","6c8d0c8383db1125c8ba98e15721b490"],["/posts/1e57b380.html","372e47dc0f0fe65bb74a9133913e1454"],["/posts/20b3f3a4.html","c741451d8221a2b48b451e97ead777e0"],["/posts/244daa7a.html","260e7af00b68b6e42b1d5de3f1460bc2"],["/posts/245f1c7d.html","c71442eacc3a9ab5be4ccd2ad01cfc84"],["/posts/252658f.html","2065a6732876fd00cc9079827f343a93"],["/posts/28397adc.html","0547d3619a65a13dd98db0d23efd050e"],["/posts/2ad07f54.html","2314a821617433d48c6f686bc9e84f21"],["/posts/2b38bce0.html","6bca03ccf262588a482969021535b334"],["/posts/2c0a6836.html","f72dbe604f7c2356d474cc91aec4fbd0"],["/posts/2ce39bcc.html","104fac0e9009a61ac6c16c374efbd877"],["/posts/2cf620f0.html","8b10bd216078c17952d0ff0fc72f9947"],["/posts/2e30fd6d.html","d9076883ee1f5ad4d76602a2b0c162bd"],["/posts/30a413ad.html","1a4ee399e671a90cb140930ff31b8ba5"],["/posts/34292736.html","1f7ae0400d41fdd0351ac286da4fef08"],["/posts/3468cbe.html","a55af1a8d49bccc15f48699be8102a3b"],["/posts/39176dc0.html","66952f2a32a83b3f887a7330be8ffce9"],["/posts/3be6a165.html","5205ee05eb6ff5b673a578d6d5162972"],["/posts/3daf73b4.html","972ab0fa8febcd09693a4861b9862c45"],["/posts/3e118dbf.html","b77c69672b9826eebb59f439807633c8"],["/posts/3f7d823a.html","2cb24a18b8f6ea39683507fb11f8b2fe"],["/posts/3f978819.html","1ce46cb9c6f402b2cf8769e4b83e1f7b"],["/posts/41dac80e.html","3a6a210b0208a91675a79ae4ab430a6d"],["/posts/43945723.html","3fa2836909ef452b39be2fe3b43b1d16"],["/posts/44124a6b.html","7cc2c8ef3c428237f27a9c163cf63616"],["/posts/476a3006.html","13a9d1ef5e55b06e5721e3d52cda2760"],["/posts/47abb61d.html","7da5f5727d243f679bad5f7260b8d5db"],["/posts/4996478a.html","a50cfbcb4fc17a9cab1d077f1c318399"],["/posts/4b689be3.html","b5fdf3bb8c08510e05a30491d5cbfe32"],["/posts/4cf8423f.html","4c333f7884329c3260897208e94272d4"],["/posts/4dcf85c.html","f0963436f5fd3f2fd79f0ab02dac847c"],["/posts/500cd322.html","f8e8ea701a72880a1e46527619e12e68"],["/posts/51c9b1ff.html","b1776fdec65e508898869a4ec039f0a0"],["/posts/51ce68e8.html","978296193be0b02c7c93e7bcb4d0adf7"],["/posts/52b5b3c6.html","97eb0d9fe14db02a063f8cf92925f07d"],["/posts/54f496ad.html","1e54b506afb60bc3ee09f26cc9120350"],["/posts/558e1f30.html","b783723ffbb41d5bf4735e8ae29655a8"],["/posts/5d8bea92.html","9131265b0e209e4acc993275d9c41341"],["/posts/5f6e0c59.html","816de6ecb565006b028b358f47c0595e"],["/posts/61a63a84.html","0d7d77b1e41e4d39048f13fa49edcd59"],["/posts/625ab7bf.html","87e72cc23f0cbb521fe65249a1e8e067"],["/posts/6336a2f9.html","517c5d6e0cff70870515b58c2ce5f2f9"],["/posts/6432d61a.html","3e0527e13dce6d238a4fb2d785f16f45"],["/posts/6515f032.html","173484e8f60fac212aa08b047c9acaee"],["/posts/6720ccdd.html","7de82c8e805e56b0839b6ad079e83567"],["/posts/6a4b5ac8.html","e560031e0822fb0d639b6ce3b294cb8c"],["/posts/6aa4177c.html","e7dc82f82348a859a2b30c9b23299aa7"],["/posts/6b15f81f.html","40ec09430cacca5cc8e5fa64ef122a1b"],["/posts/71131d34.html","ee06c6f6a699c3c2f3907c44fd5c51b4"],["/posts/742fd48d.html","974c6645742d515ae5be8739a4d7f30f"],["/posts/78a8a8d3.html","e32e097e67502129eacd24658d3fab0f"],["/posts/7a5ef3d0.html","6f7df8c3e62a594746744d9cf3d26211"],["/posts/7b41e1ac.html","6d6d8cfa3d04861bbafcb9563b4128a5"],["/posts/7b51011d.html","67736b86f86347445df99d3a513f1a15"],["/posts/7e3aa3e2.html","bc54e5c4a3883b4bfe0c26db7e73d3f3"],["/posts/80fe2691.html","f410bfcb680bc368a03803637f197fc6"],["/posts/81ac52e9.html","f3b036c4b9b710b2f8bb5b9e154fc2ac"],["/posts/82332d11.html","fff432a902fef4d9599a81c5ce311fd7"],["/posts/8486f6f9.html","3ac3db261a4f984ca087347943a7aba6"],["/posts/849b40f8.html","20979d435a3b84408e4946555064992a"],["/posts/85c51d68.html","99d49048d16ace9b7ea9ab947f230bc9"],["/posts/86a6c500.html","d4e5e2145b57e57d776138d011794e17"],["/posts/886f8d3.html","96144e4bafecf37f8d610bf598067bd1"],["/posts/8a7cba10.html","01582e05fc2cc389bd783540f0dbdc42"],["/posts/8ac11b41.html","c2476ade0e4ffa83bee5135d8aa6c10f"],["/posts/8c3f2fd8.html","692a16f34523369c0dc840e36a8edd8b"],["/posts/8dd520d9.html","8554acdf3a8e41c29c45cd88328756c4"],["/posts/8f555654.html","1263f37a33b7c74cbd165adf6d40ea24"],["/posts/92a980c2.html","890f8c33e8d01004386cd3088ca86956"],["/posts/92ce16.html","b37f72cc10317878d45a964e34c9e709"],["/posts/93e9943b.html","28c7a84104a95469ac3fde427253ad51"],["/posts/94d3c794.html","19c74c2ce9a7a28025e4b7a5b91d8d3d"],["/posts/9606c2fe.html","bcc814e0614638a3b74ff5d43bf2f71f"],["/posts/96b281f2.html","e69ef13290fc6a914833d581e7e6cde1"],["/posts/97f50eea.html","8c9b1b5e5ba30505e2f7c32789990e1d"],["/posts/97fca8be.html","ce4a9f13c29710b2b755cd515a6176d0"],["/posts/98662d05.html","6a8c02afc5c232ce9ef39e78cd475510"],["/posts/9a2f6162.html","2dc72d4e516b36e864ce2d1c92f973a0"],["/posts/9b22a48d.html","63a1dad689808d07cf45a252b4e41784"],["/posts/9cb455b1.html","cd9e8a8ba3cdfdfffb862bfa0e3fff2a"],["/posts/9ecdeecc.html","0ab4aaa25c501fedcd8fea8cf5542a79"],["/posts/9efd7701.html","0a6bddb8180720400e05c780213a4adf"],["/posts/9f61c1a0.html","c8f356b087bc0d9fe83c8fa31230faec"],["/posts/a1de710.html","8b3ba8adc3101804b491f64ed54d5703"],["/posts/a30eb0cd.html","2ef9a9ba6ccf9515513ccfc1d9410c9b"],["/posts/a72f71c2.html","7c483ee2641c61363af57167c037de97"],["/posts/a7634b5d.html","e3706f7ef065bbf9cb426a0f0c1601a4"],["/posts/a8c593b5.html","0552998a2b9fe579a33a0e7e7282269e"],["/posts/ad0c1efa.html","f3ac6da6f3ae64c7dd7230fa66ba4498"],["/posts/ada3f440.html","4180e39996d8a9fff3cd3457002736f7"],["/posts/af1807ef.html","e7cbcd5e5ab8c4a5eb8f932aa932349a"],["/posts/b190bc66.html","e131a0da722b9a4b0090f20584156da2"],["/posts/b397bf03.html","60c0bf97dfae09885387e422a3f224fb"],["/posts/b497b647.html","7a2fb2a738b8e8f176021d43992fe33d"],["/posts/b4d464b0.html","9c45cf56fad43cd65a557da574d6a8cb"],["/posts/b5fb773f.html","4aa8515cc85cfa16932cf6ef6e93090c"],["/posts/b8d46b32.html","d928a91c1fbb62265df58270ffcb63aa"],["/posts/c1b2c6c9.html","55fa570b93610fc4838f955ca21d0672"],["/posts/c2111cbf.html","562a2625fbe398c96fbadbd7fc8c3f4c"],["/posts/c316c2e8.html","bc54d9f9df57c638e937eb73e8f91743"],["/posts/c43e60b5.html","76728a39bad3af608c7ae1195436ccfb"],["/posts/c497a412.html","d2c8a91adc1dbd798d77a91f6d1dbd6b"],["/posts/c5395ba3.html","3f003804e22cc13ec5809620749539ba"],["/posts/c5de299a.html","66fa7226368bb9ad27300cb324ade209"],["/posts/c70bba9c.html","3b88e2000178e24a83f2f11bf6e9a7b8"],["/posts/c797535e.html","fc6c59e0a7cee73c779eb0f2eaf6aea0"],["/posts/c7a62c79.html","699c02e6b93993fa69805cbf6b07095d"],["/posts/cae2c959.html","fe8028b3be987b304000cfd2a0d10865"],["/posts/cbebef2b.html","0050ec6402d03804f6584f813c98cd50"],["/posts/cc4c0017.html","9cdf2ec62d9b0862197f5635991f531b"],["/posts/ce25023e.html","517a475d0d0cff941ade9672eb9ac7db"],["/posts/d2fd4837.html","6cfcdbebe31e9f2233c28ac8adf0957e"],["/posts/d3233cbb.html","69a414af8c4a07037f50023d0c9002ed"],["/posts/d3a745a8.html","e40facd31ac95b86ae6844c11b614017"],["/posts/d7e940d2.html","66451bd945bbbebd4343379b3d906c79"],["/posts/dc815d5.html","136f3cd30cbad2618d61ca3158c3ec9d"],["/posts/de25b0be.html","9de484c0a6349651768ed38a3e41947d"],["/posts/e2623b4e.html","a3eab41b7a1a49fcd00e39fe88d090c4"],["/posts/e3ab6ad8.html","3e455233316c96cc760ee84358155d0e"],["/posts/e5018da6.html","5ed49c001f6c9e30366e73a46339bd1d"],["/posts/e5963272.html","e7726b0ab47331d5fa24bab34fe6a348"],["/posts/e5ef4c3c.html","f64834bdaf98ff90e5e31b46198a2cef"],["/posts/e624b065.html","a68204eb39c4dc9e6fe96219dbfcb7cc"],["/posts/e7c703bb.html","7b2670d88ae33f69ad53d6bf213a38ef"],["/posts/e8f14b6c.html","11b106354da3781d7625c18640a92ad9"],["/posts/e91abb63.html","5a1a54aaadfecc1779e575e230d1e51c"],["/posts/ea9a8808.html","15528b541932c97e9ce21c8986db8ba2"],["/posts/eb784749.html","0df718d4b6ab70cffc0e20eabd3f99e0"],["/posts/ebaf2232.html","1b876446e269e3422a8ebf55951af72f"],["/posts/ed75f185.html","574747eda6c75c4873b2880450686195"],["/posts/ee1ed673.html","f3e64cc3772d1e2cb2547d84c8160755"],["/posts/f0c3ed61.html","e822a5d107a67108466cdb1ab18e4943"],["/posts/f151ff43.html","25c5b127f3b93ee7677b21e80ac3df4a"],["/posts/f21e7f84.html","a0534dff7fa9005a5867abf4d85fc7d2"],["/posts/f230b0fd.html","771e22125027aae00fb66869519b4e26"],["/posts/f28a7877.html","20f96fbbcf2b379e4c025bf81b2aea0f"],["/posts/f663d5cc.html","c81bcc05de1d30c84dfc22993cacdf41"],["/posts/f730ad18.html","4b651d700ba46e662959cd0d3743d997"],["/posts/fb5d4608.html","6d12769086d252377b4059ccad2c2481"],["/posts/fc04d0d4.html","498b46eceec2508828c6914986169b49"],["/posts/fc455f81.html","0b5d989ede14e91f5ccab41104df255a"],["/sumire/index.html","c496b8849cb9f74067b8f83bd7934b09"],["/sw-register.js","b74f954d09df0da78dee9f7ff85c3975"],["/tags/AKo/index.html","644f2ae0e32f9839883c578fb84e4496"],["/tags/APPLE-project/index.html","23eb6e5d4a3a4abad0bdc8674e9e3865"],["/tags/Ankrache/index.html","0a58a5964a3a15d47435fae2badb4eaa"],["/tags/BELL-DA/index.html","709278c785e03b7d04d4a046a0246441"],["/tags/BL-Game/index.html","8ae88ed0c07e32c5495b8d1d2a1704d9"],["/tags/BL/index.html","8ed751182741d7f1e3a1e9659b0ee0b8"],["/tags/Blue-Dahlia-Digital-Creators/index.html","4c2938f9c319a943f63f461ef589a82b"],["/tags/Blue-Line-Games/index.html","cfae22844dc3e1d1064745962bba5f12"],["/tags/CD/index.html","dc9ee60ddc961e244bd7dba0a759db8f"],["/tags/CHUNSOFT/index.html","40f62414372262ce580df90df446ad99"],["/tags/Check＆Stripe/index.html","f3f3c484d0b6450378d8642c986f85f6"],["/tags/Cherry-Pie/index.html","a62857893cd135e8f313403a1e8817ca"],["/tags/Circle-Mebius/index.html","6d69645149d2afc36a6eb0c27078a056"],["/tags/Cosmillica/index.html","3c5ae1a305f812cfab9b18265eea2dfe"],["/tags/CresCENT-BLANK/index.html","3f9660bfb0c6225de156f3bcccda985f"],["/tags/Dopamine-Software/index.html","60cfd5433f46a27f46255ee2389da412"],["/tags/Dos/index.html","54dcdc2138761029e650e0171a0d34cd"],["/tags/Earth-Well/index.html","02a0b2783ac5ca27c7e0d26971177eab"],["/tags/Forest/index.html","2d90292777b2547cd39e168b55b95456"],["/tags/HaccaWorks/index.html","cd160a45ee6e4396f3c4b091676a0fb7"],["/tags/Kanon/index.html","0f6b27e057d3673de12a78f4e4e5105d"],["/tags/MANATSU-8/index.html","4705125b3688df26e5da0fc41b8d5b57"],["/tags/MARINE/index.html","83394eaa74ca5955b2ca2f8485d0f8e4"],["/tags/MIO/index.html","9b809dd9d8a9fcea26fa3c1e102c2d41"],["/tags/NAOX/index.html","41ce278032a01128bf33197ee6057b45"],["/tags/Namikaze-no-Uta/index.html","04e8c86f2e7dadbd23cab874d894e558"],["/tags/Nmyu/index.html","993d98f935a15e1ef5a9ff9cd5447d8f"],["/tags/O-S-I/index.html","9276c7cf86f2585972bbcc41db5253dc"],["/tags/Omegaの視界/index.html","dcc9d90f77aff17c57933bb0156a908e"],["/tags/PC88/index.html","d2ad71c84712d6255027f1f7faaf4726"],["/tags/PC98/index.html","a0b495b550b796caf1f56cbf6472f45a"],["/tags/Perpetual-Room/index.html","f299890558da3ad4fb715cde371afe70"],["/tags/Pleiades-Company/index.html","6431b2f96be3d4e43f00da8df0e3b026"],["/tags/Project-Twintail/index.html","4c3ee94ea7b4b07ca2330ef8c2c6291f"],["/tags/RIFF-RAFF/index.html","95eda16534d8417b01450f7e643bc8eb"],["/tags/RPG/index.html","230697bf423ab2b1d6471466e6cbc9e2"],["/tags/RPG2000/index.html","833172c0093dac5607594d666aabdcf4"],["/tags/Reverv/index.html","741a7d52e5b83e758e813ed5dac199e6"],["/tags/SENTIVE/index.html","cf940014645b225c638358bd428bd23b"],["/tags/Saihate-SOFT/index.html","32bc78ad6589047cf39e95568cf14d54"],["/tags/Scrubbing/index.html","0ca243464e28465e9157dcfe2f694d9d"],["/tags/Sky-On-R-imaginAtion/index.html","51358e3e51cfdc54faf01f936d078d98"],["/tags/StrayMoon/index.html","3873a299215e9cb1b07ec321bc833350"],["/tags/Studio-Bu-Sa/index.html","6f288ca42b78a4f45c2ff2d83ba6eaaa"],["/tags/TRANSPARENCY/index.html","29557f8bb295847098b7575e0ff5c656"],["/tags/TRANSPARENT/index.html","d681af068db3c89ce98c2a1ff4a805a0"],["/tags/ToHeart/index.html","53fea93dbbe68d9fece28d1350bb8ebb"],["/tags/Traumend/index.html","471910f0a0decbd1067e13c91f8ac4ec"],["/tags/Witch/index.html","72427557315a36f0bb2b2534d92c7e34"],["/tags/adonis-project/index.html","1fafd240ca48b3950a99dbb252bb7143"],["/tags/capriccio-suite/index.html","44335c6cfe5e4f236f532f5bfdb092e4"],["/tags/eclipse65/index.html","2be6cef8af1e1d8d1751ace179613bf8"],["/tags/flash/index.html","e067a5b1412d2be9cdd3e4cf1717b173"],["/tags/galgame/index.html","9e98f56275fe050eee762d6f4ed5d0d4"],["/tags/galgame/page/2/index.html","b5b8633499677a0da42f3d366fab3bef"],["/tags/gal资源/index.html","abb5a2cbb183a219bc17e13d1402e8b5"],["/tags/gal资源/page/2/index.html","dfb70ba1499157db8578ac8fb40deca6"],["/tags/gal资源/page/3/index.html","54ec268d05e006515331d13daf4ec6a4"],["/tags/index.html","b0cb54cf1b2e071fa1f690044afa3b53"],["/tags/m-kz/index.html","7fde4edffc601f0b7ab24464349a34ff"],["/tags/purgatory/index.html","c744fc53fb88a1109d4b67d5f7c57382"],["/tags/rkr/index.html","0da971f3a955ff75e7336fc4f17772df"],["/tags/team-eye-mask/index.html","bda24d6a331530080818971b3d52ac45"],["/tags/ありすくろいつ/index.html","0579361f98a90344f64e58a40e985ffc"],["/tags/いつものところ/index.html","8b49f51e2a8f38cc64e53e01d75e3f82"],["/tags/きつねみみ饅頭/index.html","9fd8f32e7265f6d83a137686a7343073"],["/tags/ねこねこソフト/index.html","9cfda320bebc8a0b8c98386c007d8a09"],["/tags/ねこバナナ/index.html","7ff4774d538e437bbc73b6d45d841b01"],["/tags/はちみつくまさん/index.html","c4b42efed2bfc3eb982b0acc72816b5f"],["/tags/ろりちせ/index.html","60169b9f7966917223ef1feacac3d363"],["/tags/アイル【チーム・TATU】/index.html","fb275f748d6ab1c5855cd9df48da9379"],["/tags/アークシステムワークス/index.html","32588b6009263d876de55c57a916e5c6"],["/tags/デジファミ音楽堂/index.html","def15ca0ba492d669682bed4ea8f3042"],["/tags/ブロッコリー/index.html","4ef6f0d5195239c4923566ea4f25982a"],["/tags/乙女/index.html","5edcfc0fb8e5e026c1841ecc1ab3f30b"],["/tags/乙游/index.html","304b1e44ed96d6b7addd0ed06f61b7f2"],["/tags/停产/index.html","bebb0f4a8a67fe6d1bce73bc3c38515d"],["/tags/公告/index.html","9f3bea95f7e752a669276caaefdfd1e7"],["/tags/同人/index.html","f2a46cdc1365c3e3d37e9ad62c0d8142"],["/tags/堀井雄二/index.html","825dc7238f49c77963293c4f511f658b"],["/tags/外海なおき/index.html","bf2a30b9486bff9ba1b603773e08551e"],["/tags/大熊猫/index.html","4f10fadd599e0360460e6177ed7e30a5"],["/tags/女性向/index.html","964c6828d323cdcb0d666ef5da7e8cd0"],["/tags/安装/index.html","00fce8f21b5635e75cef9ef7c5d5b345"],["/tags/御茶ノ水電子製作所/index.html","1d10d73ab70acfc6f643ea470966ff04"],["/tags/月の水/index.html","a330d2e3d8f9641dd2ee7261ce80ee50"],["/tags/桃野衿/index.html","601762d162ece827f220bf1dc58d42fc"],["/tags/機械式少女/index.html","95a57054de70715d30f15e191b6e0fee"],["/tags/水仙/index.html","cdc17afa49b4cc93e9c5f5127fed40b9"],["/tags/汉化/index.html","858532561881733c1200052bdf2271d0"],["/tags/熊月温泉/index.html","6485053d849e267472fdd41c3b04c0c1"],["/tags/片冈智/index.html","ccc4bcea0c6e169a934fdd4915a84165"],["/tags/片岡とも/index.html","e1028406e06f7dbb50e660dc595fde7b"],["/tags/牙の刻印制作委員会/index.html","12568112ecbab7fbda122d2a6b195ca4"],["/tags/牛カルビ定食-FLAT/index.html","83e9b80c2bdf22221ccf92752314e842"],["/tags/牧尾屋/index.html","83fd95c9269fca59295d4b0938e16a6f"],["/tags/犬茶屋/index.html","048980ef2155155cac1cd575f0930ada"],["/tags/猫猫社/index.html","7a5689abda426fbebfd0e323bbcba18e"],["/tags/王宮魔法劇団/index.html","882ba459d1d9a746af923d1287d052b3"],["/tags/画集/index.html","912aad8a4055b159444b300e35c3ffc6"],["/tags/索引/index.html","8a5d69f2ba846d54575963bcdae407d1"],["/tags/缺失/index.html","4de9209f793d802e389c5af1e26b33f5"],["/tags/自购/index.html","be1a1eed18b49747789a379cfef49c36"],["/tags/茶葉☆姫/index.html","203a8aab7c31b11676b22c1b5909bb29"],["/tags/郷愁花屋/index.html","a1cce16e30df932bb21077643abf3d55"],["/tags/閂夜明/index.html","f023d5ed0686991a41b59c622c1455d8"],["/tags/音乐/index.html","12bdd5ac5d5e196a4e56d41f21d2f797"],["/tags/音乐美/index.html","162347985ab03ead2b5c10334daf9504"],["/tags/黒†救/index.html","ab860d7ccbedde1cdeabca3330c696f6"],["/tags/黒百合っ子大集合/index.html","73e0eb3eabd5f840ac5c0d1bffe3d753"]];
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
