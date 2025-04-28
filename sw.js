/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","40c2e9139a05e6522310cd04a59ba0b9"],["/archives/2024/04/index.html","fa3574d2fabafbeead34725890978e50"],["/archives/2024/index.html","e03dd860ad03fb7028ddee95b8cec438"],["/archives/2025/02/index.html","b3dfd7941fa72d380128a33e0215f7c7"],["/archives/2025/02/page/2/index.html","bdef6d597e86d493f60edb333e49554e"],["/archives/2025/02/page/3/index.html","fa4710bc6d80354e647019a6239dc5c1"],["/archives/2025/02/page/4/index.html","72ab59bcae2ea617e3b9442a2d9e5270"],["/archives/2025/02/page/5/index.html","99c80696ee32cec1ffc6ef7c90fc0c1a"],["/archives/2025/03/index.html","a98b45d8650e2c1cbd768de9b885a188"],["/archives/2025/03/page/2/index.html","9d282a084c24320d988c6bb233993384"],["/archives/2025/03/page/3/index.html","f4258c5102afa6a2c0d61130a3b53fa1"],["/archives/2025/03/page/4/index.html","2776a885339e9ad977638188f53abd63"],["/archives/2025/03/page/5/index.html","1563d593e2a156310fab96e3b102454a"],["/archives/2025/03/page/6/index.html","88a9fbf82afa3385a9b1a085f58d3940"],["/archives/2025/04/index.html","0ee603ea29c7ae5a39af90a1440886a5"],["/archives/2025/04/page/2/index.html","83f51981a7229d9005d1336bcddefd57"],["/archives/2025/04/page/3/index.html","4b2e448bb677876135f9a1ac90ba5620"],["/archives/2025/index.html","efaa4e4053f440cd8cc0760ac327ddd7"],["/archives/2025/page/10/index.html","e1d60de5cabe4591709913561c8c205b"],["/archives/2025/page/11/index.html","952d3eb6b63145977fbae86096a119aa"],["/archives/2025/page/12/index.html","a6d09b1f2c9a895b633b13960e7d55c3"],["/archives/2025/page/13/index.html","2a98d57bb307fcb6d3f3afd1542066e4"],["/archives/2025/page/14/index.html","502597ef73fdbe3ff5f5cb9479ee40d7"],["/archives/2025/page/2/index.html","6ca40ad611375ec41e7e438297ce3612"],["/archives/2025/page/3/index.html","aa4c1abb0d5c0cd439c7e7a15a8ce28c"],["/archives/2025/page/4/index.html","9be0084b8a8a43c52e7a78ccdbeb2b55"],["/archives/2025/page/5/index.html","2c06f17a9aaa647576da090824e75444"],["/archives/2025/page/6/index.html","b92d1df9596479129d1fd771eff33a21"],["/archives/2025/page/7/index.html","927a5dba4ee7cf8a337500c5ec7da6e9"],["/archives/2025/page/8/index.html","a4d8f75d23404e8db93bbb5314f5f991"],["/archives/2025/page/9/index.html","f1a4acdfaa92be27c963dbfc51c142fa"],["/archives/2026/02/index.html","fb761b407616de1e8e8116e802187578"],["/archives/2026/index.html","322f8729d44b17b254e45e353591ea80"],["/archives/2825/04/index.html","723a4aab89abccf6c58045a0858ec69b"],["/archives/2825/index.html","5ce8c216ec077d7e6bca65d5988cbead"],["/archives/2925/01/index.html","6c870d934a742400fc60600a8e7ee5d3"],["/archives/2925/index.html","a5cb0706a5c4349094fde370da641c28"],["/archives/index.html","4e02aeda5224f52b0d2e0e2b47fe9a1e"],["/archives/page/10/index.html","a2891b7d0aea3daa11ecd654f7c55a3a"],["/archives/page/11/index.html","c196e253cce367f419b1f31a8742f7b2"],["/archives/page/12/index.html","f0d477c9f0c9dd795e1b2dc2a768bf64"],["/archives/page/13/index.html","a829fadf0c644bd206d7827bf2dc3f34"],["/archives/page/14/index.html","40a65e98e354230a36e80680603a3051"],["/archives/page/2/index.html","8f218dfb1cbffc41b5f0104addf3bffb"],["/archives/page/3/index.html","57ef1833ce3cad6b2b7de7294cca661a"],["/archives/page/4/index.html","3493d2ebe0ff4ee30523e7e020e8d2a7"],["/archives/page/5/index.html","8805dea6e8104cd1cbdf343c1fca0658"],["/archives/page/6/index.html","85bc39c2c61dd751d134c04a30657a2f"],["/archives/page/7/index.html","74d58e3fb812d3e76c4b444e7cc8f111"],["/archives/page/8/index.html","f491e545b8ab2b242e2edffcc971dac6"],["/archives/page/9/index.html","c6806d1028a87d6bf15ac0eca37ee49a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","afc62f440bbfde4271e86149dc4eb1b1"],["/categories/galgame/page/2/index.html","66e659824be0da857f19df116e7415cd"],["/categories/公告/index.html","16c448adcc7653fd5cd01f902f15154a"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","4f836a57111abaae8fce337c263c4421"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","6104e68d71868bbdc1d1f9d285f33759"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","5a55c108bb55b1000ac714ffcfcb0778"],["/page/10/index.html","654e2e0d6d517d5f70bfce0894d67121"],["/page/11/index.html","27e1d1bc165de892da355b565d7f75af"],["/page/12/index.html","288e8032977b0b11b3290db400875f9a"],["/page/13/index.html","39a208736eeead42822b8af608cef3b9"],["/page/14/index.html","fe70273e16f907391f5b91d52f9c3382"],["/page/2/index.html","185faf8d5d4257f13dda865c95aeb61c"],["/page/3/index.html","1254af8c9672a028f1b0e87e57120687"],["/page/4/index.html","cab289f3da189c8b3ae32f68f6e8d358"],["/page/5/index.html","a266ebc5da473a913b06778563d65a25"],["/page/6/index.html","bcfdab1e878976691e4d0509cdf6ba1f"],["/page/7/index.html","b8bd374feac4c741c40dbbc1ee895351"],["/page/8/index.html","446a70adfa1ed3e1d1e811fc8d412308"],["/page/9/index.html","408e034226e60ee3e7faedd9b5788f2b"],["/posts/10c9dd98.html","47ecdd3f8df55ab2ba98af64d8f0ef39"],["/posts/126ebb99.html","1279d41482c3179238b1ae37f638b943"],["/posts/1295b569.html","a96862bb473ecc79e2af37fad4aa796e"],["/posts/1370342.html","e3005dca59084205a34390d6401e3fc7"],["/posts/15ef14c2.html","a8d5ea5218df14487c0c615b5d9ce4df"],["/posts/15f3959d.html","cf2a16eb8c42bd9b108943dbcdc2bc47"],["/posts/18ab785d.html","7979198bff782f3506dfb4c442fc765f"],["/posts/1d59b71f.html","c6ef4a63910af54c4d4d8339435fd920"],["/posts/20b3f3a4.html","9af70b92e8b5752e5cbce48f458254dc"],["/posts/245f1c7d.html","f9f1256cbc4d1d96fec3500dfcffacb2"],["/posts/252658f.html","5a0da1eb50e8919df9dcf0d7e1234eb8"],["/posts/28397adc.html","fd311ad23c94e4b505417ac3960ee071"],["/posts/2ad07f54.html","5aeb22f89b6f93fdc3c899c1607e840c"],["/posts/2b38bce0.html","5b2c53000119738ab9eb34c17ddbbdae"],["/posts/2c0a6836.html","a2a2f615cf50aa37f8609541d37446ec"],["/posts/2ce39bcc.html","d792bc0a09023ff9e1498ba175b2cb44"],["/posts/2cf620f0.html","805328746872006fddfd07bffab5230a"],["/posts/2e30fd6d.html","64962129b60931a5bf697dbfb7910213"],["/posts/30a413ad.html","43e1a06980eb9ff62c462a7ca331743d"],["/posts/34292736.html","0f7fe30aef3e2cb695236bbf0b73eebf"],["/posts/3468cbe.html","c104eafddc53052b325a1ce849aa8b71"],["/posts/39176dc0.html","1fa42111d62381eee07c649e63f13cc4"],["/posts/3e118dbf.html","e89844c5317c5756e3fd12fec4ec98f6"],["/posts/3f7d823a.html","4a959d187bb438651b23861aef208344"],["/posts/3f978819.html","cc82ae5a5148f988dcd69f759a04d515"],["/posts/41dac80e.html","ff2092ece4da2e0935ad86e58e46f7f6"],["/posts/43945723.html","7a3510247c9ac51d466066f25eb69fd3"],["/posts/44124a6b.html","d912e67deb9a436946fb3ad5680602fe"],["/posts/47abb61d.html","f56f7862bdc3834699c93a6393f57dc2"],["/posts/4996478a.html","4cc73c74dea0080ed43afe788af91451"],["/posts/4b689be3.html","614c3775defe960c938d3d7f57ac4de9"],["/posts/4cf8423f.html","54b4c0ae3f404983efbb95d5f1d03caf"],["/posts/4dcf85c.html","e28c8c9fda96b03bf4e0ecdda64a9b40"],["/posts/500cd322.html","4c4a9e2ddf47b096091e5d079e07a113"],["/posts/51c9b1ff.html","13eda12267670ef35235d3b0589f33d4"],["/posts/52b5b3c6.html","aedd6bbfedc1534bba7ee1dce7319d3a"],["/posts/54f496ad.html","77e8fb3d9084db453e64590518d8bdc9"],["/posts/558e1f30.html","ba57948d7ee43496ec07ae5bf346e377"],["/posts/5d8bea92.html","aa3d10fdf2cf2d88277e5298ca705991"],["/posts/5f6e0c59.html","c18a040f5cf472c0800b9a60473de4ae"],["/posts/61a63a84.html","1124650018339f87bea5051b7aa9fe6a"],["/posts/625ab7bf.html","6909a6827797517b50d9635a8e540934"],["/posts/6336a2f9.html","c48b85b6a25eba0ff9e8d71ec6b54a5e"],["/posts/6432d61a.html","0504265a8c22df212b83fe323adb6931"],["/posts/6515f032.html","68bfbec7feef631af20e8818dc0f5e50"],["/posts/6720ccdd.html","19f5196f03ccd9354e87abb3b55f60f7"],["/posts/6a4b5ac8.html","60d67dbce3474e33db2ca6d912dc323f"],["/posts/6aa4177c.html","ebe5c91c8e1d8f034a1adc6a025800c4"],["/posts/6b15f81f.html","267838f66bb264b90151b13dc575c890"],["/posts/71131d34.html","b364c63f4d07b70670fb0f2f87bd9b55"],["/posts/742fd48d.html","7bfe78729a62cd03ad069766e11b40a6"],["/posts/78a8a8d3.html","4d89c0fd1fb958eb361c6a52e11f0326"],["/posts/7a5ef3d0.html","9f5013024b7e301579a167a2d04dfc10"],["/posts/7b41e1ac.html","c67df499953701caa2f88898b72d059d"],["/posts/7b51011d.html","3247fe8b84c764830f464c4b22b42cb8"],["/posts/7e3aa3e2.html","7c5d1d1b18f70d1ca03e770f2f96aac0"],["/posts/80fe2691.html","413b67d89a65ab5ac6e2fb65bc94b0f3"],["/posts/81ac52e9.html","7606324674948ba5a2ffaa9b6acdb275"],["/posts/82332d11.html","e4c454f32d62d9be97304019fa19e4c1"],["/posts/8486f6f9.html","03c6b3309d2f2de8145927b8cc49b44c"],["/posts/849b40f8.html","9558ec1afe2b9eb3ee150503cab62d35"],["/posts/85c51d68.html","fae55f2c4720809a02d2669a379fdd70"],["/posts/86a6c500.html","62f5b7b1e9338c9fcba601070dd9f7a0"],["/posts/886f8d3.html","e16cf90c31f923cf8cfe0684e1b592b2"],["/posts/8a7cba10.html","5da89acff34079f50edeb13798fdad57"],["/posts/8ac11b41.html","a7fc99591dbe8c9fb77e80bf576b4faa"],["/posts/8dd520d9.html","6e6caf4a37fe478f4f86eb06937ab4ad"],["/posts/8f555654.html","218c93089dcdf2c87fc305068e9768ea"],["/posts/92a980c2.html","752e7185b20bc179d80584deef1648e5"],["/posts/92ce16.html","37348fc5e307366da9d5fb3beab148ea"],["/posts/93e9943b.html","f77fc56af25532d8fcc6112544a4401c"],["/posts/94d3c794.html","82b9e31684a0a50d5b9da5effd3511ae"],["/posts/96b281f2.html","8a3bc2adee5b979894eccad6498e7553"],["/posts/97f50eea.html","fef40eba9a9e42d6011667b76f6cda20"],["/posts/97fca8be.html","e1b73d6f44e14f5bee7e668b279af86f"],["/posts/98662d05.html","16fe01c9222afacf6d3a83ece53fd4ba"],["/posts/9a2f6162.html","4db42c00463049d2b4df4e7a14cdc83d"],["/posts/9b22a48d.html","4b877450afa365793ed4a4ae31483819"],["/posts/9cb455b1.html","467c7a5d5de0a2ecc31e071bca2892a2"],["/posts/9ecdeecc.html","7a7178c67c3c8fa47dbee96e8c583788"],["/posts/9efd7701.html","57d3042f3a169a8d76e913a4426ba0e1"],["/posts/9f61c1a0.html","107a1e47348769451eed9d94ae507bde"],["/posts/a1de710.html","57df74086b84a8f6fb125204498a1605"],["/posts/a30eb0cd.html","cb9eaab6d6b92f1c7c9426bb168c9fe0"],["/posts/a7634b5d.html","9a3b787fd28a818598477c37d51a1985"],["/posts/a8c593b5.html","3c246da39a9f87ec585213cadc022597"],["/posts/ad0c1efa.html","a7d2b90514d13a62194d87977e900b7d"],["/posts/ada3f440.html","12b987267767efd1b312daa5bb22f0a2"],["/posts/af1807ef.html","5a6f7523aa48b91a0ebbed186f17baa6"],["/posts/b397bf03.html","939bc89f067b1106c584ceb573ff7582"],["/posts/b497b647.html","7df60482ef60df6bd72154dbc4a112ab"],["/posts/b4d464b0.html","e9ae5f78a28e1fb608009b1012e23adc"],["/posts/b5fb773f.html","294195b894186ed4936ff092bcceeab3"],["/posts/b8d46b32.html","14c4850994d2768a23f890a0bb161575"],["/posts/c1b2c6c9.html","1e48d9f1cc5f7de6287c2fc10180e5db"],["/posts/c2111cbf.html","c05d2fc3bc1bf8bc8927a86d1f021127"],["/posts/c316c2e8.html","8b4f1f36fe26ef7bde7acd0488cf6822"],["/posts/c43e60b5.html","d8da1369bbea2b54210d91c37232bdbc"],["/posts/c497a412.html","a7a602f5dfb572d65793bf33fbdb26de"],["/posts/c5395ba3.html","9959340aeda7db0ed402995435de8734"],["/posts/c5de299a.html","6e8c3b0c13f47bae6ee5ea44eae6ec64"],["/posts/c70bba9c.html","ccb74fae14775502366dd3482c278268"],["/posts/c797535e.html","b59ed7f08db57b59f9fb921c769ac2d0"],["/posts/c7a62c79.html","505fabc24aa40727bd090a40583a7032"],["/posts/cae2c959.html","ffa2228bf1aa9a992888b85a19fb5eef"],["/posts/cbebef2b.html","5cb46b21c0e35cef435f6421a5cdb6f9"],["/posts/cc4c0017.html","e16a094eb8b68ac7a11ea52c39857a2a"],["/posts/ce25023e.html","8d5d744467b5644e5c0b926861eae546"],["/posts/d2fd4837.html","f70b3ff55ff62c8176a04edcf9fee505"],["/posts/d3233cbb.html","9b3c1a36c5ef3c8e430399671b6b742f"],["/posts/d3a745a8.html","ac5899fca13cd38bfb1aeb133bf58c61"],["/posts/d7e940d2.html","f6db90bae134eea467c1ba7025bde87a"],["/posts/dc815d5.html","04d74566e67664e90431ce5b15509639"],["/posts/de25b0be.html","d0069dc35ee4f2501e68c2f12ada2e25"],["/posts/e2623b4e.html","1a520e704ed5c44f4c20c740ebd66a97"],["/posts/e3ab6ad8.html","2eb1c61bc42d2c7b82676f757c761d4e"],["/posts/e5018da6.html","d43dab2acfca1ff6700c85a47c0d4b57"],["/posts/e5963272.html","2311c7b4281cec74cbfe6700a8974db3"],["/posts/e5ef4c3c.html","2cd04c644a2187dbae84abd21c432c94"],["/posts/e624b065.html","7b75d4fcaf6312715afb9674ac1bfe50"],["/posts/e7c703bb.html","fe736304c2e1ae601c58127e07029494"],["/posts/e8f14b6c.html","55360eb6ee24321e31b46bcbb5319a15"],["/posts/e91abb63.html","527664684187c5d934c17c065bbf5386"],["/posts/ea9a8808.html","fc4963484c0758fa3bedeade68384b55"],["/posts/eb784749.html","e403f59411188c5a520e657ffad4d71d"],["/posts/ebaf2232.html","1aa2535e87880bae7ed7f916053b55d6"],["/posts/ed75f185.html","2c3bdd49aeb667a65825dfc00dbef292"],["/posts/ee1ed673.html","ce8a4ca9f6d144900d2860a79c830625"],["/posts/f0c3ed61.html","b32e27241dd5e844e1043010dcbf8c7a"],["/posts/f151ff43.html","097810c71f454816d458dd1f139f1f47"],["/posts/f21e7f84.html","91d9ee32d647536b98acdd8a4d083556"],["/posts/f230b0fd.html","d60b30217868747af8dc21937162d5ad"],["/posts/f28a7877.html","11c280ff1a84fe481a62e10e417fa249"],["/posts/f663d5cc.html","420fd907334eb3494f914b98a610a985"],["/posts/f730ad18.html","764b0e9e37dd99fc3ae7f0bd1fe32ac1"],["/posts/fc04d0d4.html","3fb55043af455126842f7de024c10dd3"],["/sumire/index.html","47983d8c6041c39fbd9374656b9d42d4"],["/sw-register.js","c0e9cf61f1e97b08b8bd8b377a317949"],["/tags/APPLE-project/index.html","fea5ed8bc432848d35fca50aacbbaa4e"],["/tags/Ankrache/index.html","1011ac5031318a2e3dddc4ad53495f7c"],["/tags/BELL-DA/index.html","8e293ebe1056a633420f97036f4d1a12"],["/tags/BL-Game/index.html","a6e5440860bff93f0cdbb05df8a0f6ee"],["/tags/Blue-Dahlia-Digital-Creators/index.html","0a52c611bdc80cb735a35ae3b4c20cc7"],["/tags/Blue-Line-Games/index.html","be112602eb6ff5cded7e5e6abaa0d18e"],["/tags/CHUNSOFT/index.html","dfb223cd32532401e6d0d23d32acd633"],["/tags/Check＆Stripe/index.html","ae2ea88447ce1acbad63f890522e342c"],["/tags/Cherry-Pie/index.html","a1cb00c808f361901e136aebea95c58e"],["/tags/Circle-Mebius/index.html","c6ccb890686baaa35c6ef1ddec3adb2f"],["/tags/CresCENT-BLANK/index.html","38fa5e3ad7d26ec83e7e560f584a57cf"],["/tags/Dopamine-Software/index.html","d5e404c00d07279906ef65ade72d1aee"],["/tags/Dos/index.html","b4818172c313bef19625d2259eaddece"],["/tags/Earth-Well/index.html","54200f6ed7258fa538f275ce090e992e"],["/tags/Forest/index.html","295d287ebab997160b22cfcc3d51e5c2"],["/tags/HaccaWorks/index.html","682661e3b0e8380f2b7995a1705e4a8d"],["/tags/Kanon/index.html","7d65e3b767b75c9f012ed753af09aa6a"],["/tags/MANATSU-8/index.html","8a7cacfd2dc61459ee33a749ded9d7a7"],["/tags/MARINE/index.html","266a46db09c315b3912b7b6b3f50b9a6"],["/tags/MIO/index.html","090d88c07fa407a08bcdc35dfef37415"],["/tags/NAOX/index.html","f3adcfea670a10c0cfb229f36774c624"],["/tags/Nmyu/index.html","e7bf05195564ba3a5ea57399f71a1b12"],["/tags/O-S-I/index.html","14e0345c4f288f5d568d1388c264fbb1"],["/tags/Omegaの視界/index.html","ece36d8a6aaad282c01e2defd4645b60"],["/tags/PC88/index.html","1a7471a95f1c75fd172b1f5e4bc10ea1"],["/tags/PC98/index.html","bd3ddfc808011a0ec2e742660f0d2388"],["/tags/Perpetual-Room/index.html","bdaf736ad9f8ab269a0a376e9e3d68d7"],["/tags/Pleiades-Company/index.html","5274ff25264f81251b5325ed77eff18d"],["/tags/Project-Twintail/index.html","a09dd2df28a74801152918eef9623c74"],["/tags/RIFF-RAFF/index.html","99e2c0a344d79a8789671d37080c993c"],["/tags/RPG2000/index.html","4febf682326c5c76781a41d022c63bd0"],["/tags/Reverv/index.html","255697ccca034926c8d965469c691f23"],["/tags/SENTIVE/index.html","dab7f8e6def943cfad49ac641d8a4b4e"],["/tags/Saihate-SOFT/index.html","13ede0d1a1457d26cbf075d9d648f4a4"],["/tags/Scrubbing/index.html","b7d117b74010e78bd2c1780029fcd4a7"],["/tags/Sky-On-R-imaginAtion/index.html","1677ab2ec288712a355a8c9d1c73999a"],["/tags/StrayMoon/index.html","4a0fbd72cdb2d3143e42050749842857"],["/tags/Studio-Bu-Sa/index.html","4574f2f15162bc91a976ca54bdfeb365"],["/tags/TRANSPARENCY/index.html","7aae9c33068841caa56d7701f68ecf57"],["/tags/ToHeart/index.html","4a8a1391225d4792dde1b455231bf25e"],["/tags/Traumend/index.html","ac83fa70d4a8811e30ba50e2350455c2"],["/tags/Witch/index.html","9523836e26bc4d6741c1998fe53dde9c"],["/tags/adonis-project/index.html","1761783fe5109f790d305ac0db3bb2ea"],["/tags/capriccio-suite/index.html","57f9df732d9631fddc273a8efef93c9d"],["/tags/flash/index.html","7c8fdf838b7a02e7f5a87a5e96840ffa"],["/tags/galgame/index.html","60cf0eacbd8ff1d0327551beb77a2e03"],["/tags/galgame/page/2/index.html","de7f64b21285b268b98f6a92bdac87fd"],["/tags/gal资源/index.html","942efa78892ca5137e214d11bc2557bb"],["/tags/gal资源/page/2/index.html","9a10e9a7e808d1ecd8bf2b2b8b2de233"],["/tags/gal资源/page/3/index.html","f80c40115d693924326b91cea19ec2c9"],["/tags/index.html","c64a223221dfea2f4d3cec713ff21d77"],["/tags/purgatory/index.html","d5cc21921f963f328a54f5c40cd3c3cd"],["/tags/rkr/index.html","daf13721f2001b03266fd7e3b335be65"],["/tags/team-eye-mask/index.html","87b24fc17714e6f63bce28adeb8dcd2b"],["/tags/ありすくろいつ/index.html","d43fdc3beee985b554d77ec8ee31e414"],["/tags/いつものところ/index.html","dc5ad6841a816e6eb255308ffb65a684"],["/tags/きつねみみ饅頭/index.html","d910b3d5b879dd09961cf2e46a6f814c"],["/tags/ねこねこソフト/index.html","eb5286750b8ca2df2a151bb8d2f98930"],["/tags/ねこバナナ/index.html","b65462a151856fa95dd162177db0c454"],["/tags/はちみつくまさん/index.html","d36cd2594f49af43719d60e84214bc24"],["/tags/ろりちせ/index.html","a24140624e559fef658f01eca9dfec7c"],["/tags/アイル【チーム・TATU】/index.html","e33bce04e9b60e064d04d563a7ba83ae"],["/tags/アクアポラリス/index.html","0d14c586051d0b2146ea1609b8f40856"],["/tags/アークシステムワークス/index.html","f7adb0c6f31dc51195873439e9aefa81"],["/tags/ブロッコリー/index.html","ac6dfc8fa74f1bcfbadbccc3acf93215"],["/tags/乙女/index.html","8b0f15dc331e887a4168d97cb818b5da"],["/tags/乙游/index.html","013991f7aa8ff43aff7e3945b2fc8781"],["/tags/停产/index.html","fed6648a26a2c63ce920d9d03c481f66"],["/tags/公告/index.html","d180e782c0375702c8ef1621b0ab82fb"],["/tags/同人/index.html","1a5af1ed7ba82b0cf46d2acfa0fd9282"],["/tags/堀井雄二/index.html","e1b6876fff2e739d4ff5cb5ced508f38"],["/tags/外海なおき/index.html","f5e6823022b69f5e5fb46e98adbe554a"],["/tags/女性向/index.html","db35fba028506bf6703fcae4863b0bc8"],["/tags/御茶ノ水電子製作所/index.html","d3fa3d89c8d24e0634d78b3bfbe5ac1b"],["/tags/月の水/index.html","13fdf8e4b56fd649fb7a1149f08bb464"],["/tags/桃野衿/index.html","4a6098dcbe7d6c7c45c9f18c8d46ddaa"],["/tags/機械式少女/index.html","4f75f59dd5aaba1d7b80811172e94bb2"],["/tags/水仙/index.html","0afce11b263fdfbcfcbe6453ee8b9537"],["/tags/汉化/index.html","9e947fe3a381b5e923fdac938779ac28"],["/tags/熊月温泉/index.html","def9651961695b207d907a550fe13bf1"],["/tags/片冈智/index.html","0e1c486dd535026334711e9733514751"],["/tags/片岡とも/index.html","980dabb7cfb4c9686a0007abbb999983"],["/tags/牙の刻印制作委員会/index.html","a614146a6772b8b64057d6b11e9bcd44"],["/tags/牛カルビ定食-FLAT/index.html","42bf5d033c451e5e21c871c8707d214d"],["/tags/牧尾屋/index.html","d87f83647be287a65f7b3d42c08f4af6"],["/tags/犬茶屋/index.html","b072f85d4feb4ee22a3589db0d189c65"],["/tags/猫猫社/index.html","b5bb4484f0efa681f831fcd554bdca25"],["/tags/王宮魔法劇団/index.html","ca71ae403121ffcad4a3fe9b8c98ac10"],["/tags/画集/index.html","0e3932699988f9a47e830b82dcab66b9"],["/tags/索引/index.html","4db2586ab37cd882485af33b355970ca"],["/tags/缺失/index.html","2a999657ee0600e20c71086e0109b845"],["/tags/自购/index.html","bc8983b825043d294835f80561e1268e"],["/tags/茶葉☆姫/index.html","f6ef461e2ceec26b95ae131f17678881"],["/tags/郷愁花屋/index.html","672a75ed364e45082777d34de44829a2"],["/tags/閂夜明/index.html","3866afe9c2b537d6c6fe78a35ec2cc47"],["/tags/音乐美/index.html","a2c3711638fa7b036981f978b2909e2e"],["/tags/黒†救/index.html","a0f54885e3e644367f6fb148468c3822"]];
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
