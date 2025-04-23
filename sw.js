/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","381f1ed76732620f012c21e8ebf535de"],["/archives/2024/04/index.html","74dbe5bb6a09dfd5838d66390b9e6d5a"],["/archives/2024/index.html","60ad3344ec70a5fcf43db005202c3515"],["/archives/2025/02/index.html","98011290f4f115815c74d9be299a5fc6"],["/archives/2025/02/page/2/index.html","e3074242840c9d48d9efbf5d9475bb20"],["/archives/2025/02/page/3/index.html","6254ee752901cc3f6cd5cad6c95e9c89"],["/archives/2025/02/page/4/index.html","1b008cb16249abb75db60ef24c60fe0d"],["/archives/2025/02/page/5/index.html","e520b5adab88369c23769731c713903d"],["/archives/2025/03/index.html","a53dc904ebee0c3ed0f82d127c64fba5"],["/archives/2025/03/page/2/index.html","98dad7eaf7f8c572ceb54db5601216ea"],["/archives/2025/03/page/3/index.html","629f12acc7d0f303b1576754459525d6"],["/archives/2025/03/page/4/index.html","f2b9b0f0f61352662ab0bac4bf03328d"],["/archives/2025/03/page/5/index.html","58c21b23867c3648e5dae90551db9039"],["/archives/2025/03/page/6/index.html","d9e2c71dfcabf91d5cede32535565167"],["/archives/2025/04/index.html","da957e548f52e74e2aafcd37b03f33f4"],["/archives/2025/04/page/2/index.html","4b6c6c9938cc86fefffac4a7456c190d"],["/archives/2025/index.html","93845963437254784fa3068cb1023420"],["/archives/2025/page/10/index.html","0717ca0f44cb27734d5e60d986934c49"],["/archives/2025/page/11/index.html","bdc7b0ee8b95ff10e02ee97665200920"],["/archives/2025/page/12/index.html","426bda75c844429fb4266a099a6ef451"],["/archives/2025/page/13/index.html","c511f1b737e889fd807e29c896814f38"],["/archives/2025/page/2/index.html","9bc3237dcb7f5749707bbaa275d1bb5d"],["/archives/2025/page/3/index.html","81228df9f4c446ec277aa0b972db832e"],["/archives/2025/page/4/index.html","9121a70f9ad560cd18fdc5dbf06b9be8"],["/archives/2025/page/5/index.html","56a062ecc09e7ed599c6ac61e98a3a90"],["/archives/2025/page/6/index.html","e170ac528ceb5295b4357de07b48dfd0"],["/archives/2025/page/7/index.html","b80142332cbab41efbd6e4be74afd45d"],["/archives/2025/page/8/index.html","f86f193a1d1595bf7bb6502757e07447"],["/archives/2025/page/9/index.html","920143c9ba3526aba590fd01402f9b8e"],["/archives/2026/02/index.html","52c3d83da2ad5c40193dfb7e9de1e925"],["/archives/2026/index.html","7d89988832181bdab1ee99d2bee951de"],["/archives/2825/04/index.html","25f3e8d424a43014ba01a48824c59b9f"],["/archives/2825/index.html","1405aeccc5fa3402fa4a000aea200a5b"],["/archives/2925/01/index.html","342dd2e49dc024a589c0ea50a730c37d"],["/archives/2925/index.html","0b43f8fa676a4e204a40a687869a9ea5"],["/archives/index.html","3a91848cbd31e8c133f54e5f9916bba4"],["/archives/page/10/index.html","f451538a71aafb9ddba9f10e789b7a23"],["/archives/page/11/index.html","53c8f9ac2c4e09ddb343294016311245"],["/archives/page/12/index.html","33a352c30de9725da8fb82e18dd96370"],["/archives/page/13/index.html","0372641e23db5419b9eb4adddc4d987c"],["/archives/page/2/index.html","e6ca22f05fad24f400f0bdb2741dd8a6"],["/archives/page/3/index.html","2b34347ee6a0a42cff6014db1492a33d"],["/archives/page/4/index.html","edcffe076ced74407728686781a073bb"],["/archives/page/5/index.html","8c5520e07b2c7418cd1d66eadda9e605"],["/archives/page/6/index.html","25daf09066d8af488dd2ed733d49ae02"],["/archives/page/7/index.html","bc65d72f9879f8df017aea19e403b04a"],["/archives/page/8/index.html","c00b09c4f49221d476738b45302194f9"],["/archives/page/9/index.html","c9b0737547e2e98e67e967cad972cf86"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","c06c81009cc8efc18d1aa767eafb2bb3"],["/categories/galgame/page/2/index.html","58792566884a165aa22060d142fd05a3"],["/categories/公告/index.html","a7d6884a52fc33a7070cd2bd9f9e7647"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","b2613081584fbd732fa5f1ffc6082267"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","6f35dcb06f5ff3b96129232e8c0d7eee"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","c91f965e27a83f989afbcb0a04416432"],["/page/10/index.html","d5d4715e5cdca38b1bc91f7e98911f1e"],["/page/11/index.html","10452e17ad25d7c7a32c4888e113ceb4"],["/page/12/index.html","6f75873f6859fd092b92fc1e8d1e4476"],["/page/13/index.html","cd5975857f4e0b4250fcd269ffd2ed01"],["/page/2/index.html","a42cf2dcb0c9b40d39a588783c7c2d77"],["/page/3/index.html","f2705bb3cb9cf7522a5f5e21a9f9e163"],["/page/4/index.html","4037eec1aae8d1eecc894b6d1a5b62f7"],["/page/5/index.html","fee94de03102b0a6b0b24416289ff816"],["/page/6/index.html","a29522a6b227dfb24a44a31f184896a2"],["/page/7/index.html","05ea2551ad5856baacf7fb132fb22872"],["/page/8/index.html","406c40db8f2c2e1d5da2b2918863e172"],["/page/9/index.html","79bd443034a830237edd04ebc51692dc"],["/posts/10c9dd98.html","621184bf3fdcf3956075b3aef0e0cf85"],["/posts/1295b569.html","eda137aa12e0dfb29df4dee3a65baa16"],["/posts/1370342.html","74952b4a6bd88309754eceec9c37e4c1"],["/posts/15ef14c2.html","f611e98dd84da3fa3f0d2404f05178c8"],["/posts/15f3959d.html","6807c32d6784d61d7748c5c5f0971bda"],["/posts/18ab785d.html","c10cbe73720e53bc6b89f08939f18c26"],["/posts/1d59b71f.html","bfc8fe067972b5ca222c1cac14e3fba9"],["/posts/20b3f3a4.html","e9c0ef58894c6b59606bb4cb9230cc90"],["/posts/245f1c7d.html","7a6ef0827bfa91d87cd00bb60a179bc4"],["/posts/252658f.html","ebc4a51c41ed856cc52b7b66f0644954"],["/posts/28397adc.html","2a031fd9f9373ac57a3dbf521a82c416"],["/posts/2ad07f54.html","f060b68c3c198fcce71e11dd6a5aaa77"],["/posts/2b38bce0.html","22c3d84aacfce1253fec781164e05050"],["/posts/2c0a6836.html","4bb221035ca9c462a5a7c57e0bad0dca"],["/posts/2ce39bcc.html","ed310e6f634e712e1ccd44266f143df6"],["/posts/2cf620f0.html","ce7b2c3bad5256061999728ce44d3ae6"],["/posts/2e30fd6d.html","5292f801137a67929f72421b1d08e8d7"],["/posts/30a413ad.html","2f74789f2ba9c976d6463e6d247a8118"],["/posts/34292736.html","a3c5e5b0a925a5b2b73a219f3cc5cb14"],["/posts/3468cbe.html","874092f6f4846a13721545587a2c10d5"],["/posts/39176dc0.html","a876c5fb84e64c68c81daa254d13056f"],["/posts/3e118dbf.html","e56feb1f41f0fc69b233043fb0805e87"],["/posts/3f7d823a.html","bfae2a0f2f3fac232f7cb4dda4667534"],["/posts/3f978819.html","90614af1f4b08fb08056755df841bef7"],["/posts/43945723.html","4c50c7970abbc89511048063cf9ddbe8"],["/posts/44124a6b.html","85a7f3b9f31742a9d4ab75f9de046315"],["/posts/47abb61d.html","1786c1932161d2508278ebdc5dd1f9e1"],["/posts/4996478a.html","5dc011eb25c3f2bc1d198910d24f99ed"],["/posts/4b689be3.html","1d73e8623b4825965594e581192fbb49"],["/posts/4cf8423f.html","b85a06f6231254f6e7ad070c8ac1c098"],["/posts/4dcf85c.html","59ea61bc67a211adbb7781fd5cbd0d21"],["/posts/500cd322.html","0b00bbc37227383eb986d9c3696b2949"],["/posts/51c9b1ff.html","b939f834ed77fe51fb986aacf2d93a4e"],["/posts/52b5b3c6.html","aaec71f0e779540398b964d3c5677ed1"],["/posts/54f496ad.html","2c35c45007427c71503dbeab948be6a4"],["/posts/558e1f30.html","b83bbad5b3c635ae6faacfc1ac3463b0"],["/posts/5d8bea92.html","7aed92bf62c2bdbcd5245abd97070d30"],["/posts/5f6e0c59.html","0f827a33f32638472d1e7162ad8759b0"],["/posts/61a63a84.html","02455a59912315a9e55825f0cc7935dc"],["/posts/625ab7bf.html","a3dfc9ed441238f34091a791f15d9465"],["/posts/6336a2f9.html","22940cad0fc6cd6742b64321cc9216b3"],["/posts/6432d61a.html","d0d1f5df2d4179beda7983c6ccabcfd7"],["/posts/6515f032.html","454b40a8103df0ef852c86f664764af9"],["/posts/6720ccdd.html","4d04ef0efd3f62953977b6775dbc0bae"],["/posts/6a4b5ac8.html","199efa017a65729aad6ebccfc35833a8"],["/posts/6aa4177c.html","f409aa63708df1692dc4ac2158d18a0b"],["/posts/6b15f81f.html","58713da6e7bb834457e2810ecb1cc6b9"],["/posts/71131d34.html","96791c6801c1baa5aeef9eae49653952"],["/posts/742fd48d.html","b38be78e180074cdad070f98b2e91383"],["/posts/78a8a8d3.html","b99aceb116ff571640f4c66d170eb91c"],["/posts/7a5ef3d0.html","e2b329d2792d93616eb1a03f5de9bfc2"],["/posts/7b41e1ac.html","80f951b74c38306ea5279cfcb8e1b5f3"],["/posts/7b51011d.html","5653852be05b8266e16e8e42aa56b493"],["/posts/7e3aa3e2.html","86449096f63021c7f945e095816e6e5b"],["/posts/80fe2691.html","16717d9cfc0fe898be99d4695949a0d1"],["/posts/81ac52e9.html","6eabd9a6abe7b791fc4451549af60f78"],["/posts/82332d11.html","8ba896e87057969d89311cc6ed6843ff"],["/posts/8486f6f9.html","38a2e3f491778c815b808683c36897e2"],["/posts/849b40f8.html","9e242d41f7d490a84e2aad04cbce6426"],["/posts/85c51d68.html","03d19e12f54665d5014b20ba30b088ed"],["/posts/86a6c500.html","f6811397dfd3611fdfdbd8147e654f84"],["/posts/886f8d3.html","c4b9f34d99663627b70d691174d58ac8"],["/posts/8a7cba10.html","e77d27247a6602e48a2ac489de8e726f"],["/posts/8ac11b41.html","82185074958db8cb0decc90cb04ed900"],["/posts/8dd520d9.html","f1783ae732c37bc8ce87056f1bbe7da0"],["/posts/8f555654.html","752b9758cd7435e63e05d8ef2b109029"],["/posts/92a980c2.html","e6a4316eba0254a28e606a3a68f368a7"],["/posts/92ce16.html","53166458bddf29fbf1944efc08491f0d"],["/posts/93e9943b.html","ff289b05ef598815bbaf0c968ee305e6"],["/posts/94d3c794.html","e32684e8c8695687d1137d9687285d2e"],["/posts/97f50eea.html","a38b7d78ad36cc3b5a6fd5b2a8b05427"],["/posts/97fca8be.html","118c266d4392ef24305f7896150032a2"],["/posts/98662d05.html","183e72cb6a2c29b245f619c61df6fbb0"],["/posts/9a2f6162.html","7c6b18152081045aebe0913db21713c3"],["/posts/9b22a48d.html","16cb02ea35fa68fb3f583736412f938f"],["/posts/9cb455b1.html","1303eb71d4d1574e6759b8d6b8e99498"],["/posts/9ecdeecc.html","7098cc77a4cd996f6fd41f92d9a2c84f"],["/posts/9efd7701.html","b7d2255efdfe4d8d9629cfa0f0da0ac8"],["/posts/9f61c1a0.html","263757f8a8011b58e74fdb2b6435d152"],["/posts/a1de710.html","f4961798aff7903dd764b48bfc9ee6e3"],["/posts/a30eb0cd.html","e9a3b68226cded8cc5434b90ef8ec7bb"],["/posts/ad0c1efa.html","9f1ff9c7d02fb2ff7725ed10775c7ebc"],["/posts/ada3f440.html","ae2eaeb34d7b60c8270e7c965ad2ae1f"],["/posts/af1807ef.html","9a684ca54585763e469c5d6c618c2dea"],["/posts/b497b647.html","d1de5720bc12b455309ed589d6b950c1"],["/posts/b4d464b0.html","2ef506dfec32d67097ad25ff6438e28f"],["/posts/b5fb773f.html","e7d7a90657ba93bcaf712da2c5e3f12d"],["/posts/b8d46b32.html","de6675c9e816682e4bb3a9a403c5043e"],["/posts/c1b2c6c9.html","c8e6414fa1f29aace65cc5b0c3bdc85d"],["/posts/c2111cbf.html","6d26d347ed2da5ae9fc91555efdeca85"],["/posts/c316c2e8.html","cb1ab4d35deed90cc0b1e36e3f74ed0a"],["/posts/c43e60b5.html","92e9efffa2b8aca35ad0d6815a1e6b7d"],["/posts/c497a412.html","514a44753d5e93320f4ff96a365fdf3c"],["/posts/c5395ba3.html","942fb6fa78b8d3fe20295357c30159cd"],["/posts/c5de299a.html","7ed1ab7f970ec6eef039375cfddae272"],["/posts/c70bba9c.html","8896b905386fb052c93f686e503eb015"],["/posts/c797535e.html","9c49e2d1d5479fcaa80d8045b7e7c885"],["/posts/c7a62c79.html","20557b756d453928246622b5e3b08716"],["/posts/cae2c959.html","88f8e479a62c80de0cee45d2ce380a46"],["/posts/cbebef2b.html","ba170f2513907af4cb82ad2317c7f128"],["/posts/cc4c0017.html","25729acbe2d3f5b52893bc481ae6419d"],["/posts/ce25023e.html","a4c01a2a13cef7a688e513a4d4a2c1d0"],["/posts/d2fd4837.html","f324959c733cb36b80c670263182a987"],["/posts/d3233cbb.html","e524eab6b47971e4800d319bd45cf2ac"],["/posts/d3a745a8.html","ec0f00db4482d67fe166d2bceb4ddccf"],["/posts/d7e940d2.html","42461ad054354309663ebeb09700b07b"],["/posts/dc815d5.html","e618fcb6c24fa4955d329e5290c98797"],["/posts/de25b0be.html","db836a7a14c73a39933c7684bfe4bde7"],["/posts/e2623b4e.html","a3e37342666c98588f8396c55ead28b1"],["/posts/e3ab6ad8.html","3a8eddb4b0fa07efc749599aab39ca11"],["/posts/e5018da6.html","05ecc3d89aba32fb6347bdba80992d81"],["/posts/e5963272.html","479881262029d5f15b935d5026e96bbd"],["/posts/e624b065.html","44a32bd60c2f2247590d3423867a5c35"],["/posts/e7c703bb.html","11eafcd1fd847b00a0227f20eb27f6e7"],["/posts/e8f14b6c.html","37b98d3757bada7b178c697bba15799f"],["/posts/e91abb63.html","0b411ea4698671e55d31998015738def"],["/posts/ea9a8808.html","5461b216a36742b98bdc0fb3e8a7a164"],["/posts/eb784749.html","88d9cd991c5b697c6394a6345224a971"],["/posts/ebaf2232.html","54fae39b4029a04388e3c11883f80b66"],["/posts/ee1ed673.html","71e44acd6127c039fe9338481e711ec2"],["/posts/f0c3ed61.html","dada7ee2fd6de67c4068bbf3e9010dea"],["/posts/f151ff43.html","c931e6757c004f28f9a10ce792efa8d0"],["/posts/f21e7f84.html","898cd75b7b02dfcd9b7ddf027d65b778"],["/posts/f230b0fd.html","4d75010bc6c87130be81ef794b95aa94"],["/posts/f663d5cc.html","5f90e37cbce53faf04ff14bd68292837"],["/posts/f730ad18.html","c9b44c28d61b67de290c20e6c9966e59"],["/posts/fc04d0d4.html","f3dc1bff1a81ec19c9ef49904a3a6f90"],["/sumire/index.html","fa54882795dfc20fc62d91fbd5d0c4b9"],["/sw-register.js","f8fc6fffb40aa093d905068179925d7a"],["/tags/APPLE-project/index.html","8481c3649904c8ebf5df48bfefe3b05c"],["/tags/BELL-DA/index.html","595c5eff8b4621881bfb27b91b669b5f"],["/tags/BL-Game/index.html","c13b7e749cce4db251f3f3e5ee276493"],["/tags/Blue-Dahlia-Digital-Creators/index.html","2dc7c4f30550952e0d6d30dd846ab77f"],["/tags/CHUNSOFT/index.html","905a96cb89d368fb09933463b6223055"],["/tags/Check＆Stripe/index.html","5fd85ba929184c87258aa8c8bab18d36"],["/tags/Cherry-Pie/index.html","7012aa15ffb55180a220b3ed6a83b158"],["/tags/Circle-Mebius/index.html","8126e55682a583ed28b23d33e6952620"],["/tags/CresCENT-BLANK/index.html","f936d99b515321358777e5382443b63a"],["/tags/Dopamine-Software/index.html","bbfa478b7db4d683c615b72ce2f1f9ba"],["/tags/Dos/index.html","de545467befd0758cc184edc09849bf2"],["/tags/Earth-Well/index.html","0d9a4609b3d568a4680ee43b777ef789"],["/tags/Forest/index.html","f42a97a0c4db5e33283cbe42430c5a8b"],["/tags/HaccaWorks/index.html","c09ad386d6a7b60eed63ffe677cbeb38"],["/tags/Kanon/index.html","197191c4a3f22fd4121abc757b15a8c1"],["/tags/MANATSU-8/index.html","5df41bdfa1981636beddb095e9f2dd8f"],["/tags/MARINE/index.html","78814575c9fb1e457854e496d7789168"],["/tags/MIO/index.html","5687dcedf372c912ca5e1f2a361d544c"],["/tags/NAOX/index.html","23e1ad039f55981c165817f4f19c67de"],["/tags/Nmyu/index.html","c24fd1510ac065d3024710c44962b7b0"],["/tags/O-S-I/index.html","e6b966e53f55a0379402216ba0b4f0ac"],["/tags/Omegaの視界/index.html","523332d6bc327baa1be0d60c9e7f2a26"],["/tags/PC88/index.html","ff980e0aea94428ad9fc278f9f85ac56"],["/tags/PC98/index.html","deb12ae61a5889aced1bf26c6f4bb984"],["/tags/Perpetual-Room/index.html","ac46629e11605e7db6adad74311e0a4b"],["/tags/Pleiades-Company/index.html","0d22842337000b556ba0488dfafc5d17"],["/tags/Project-Twintail/index.html","c57a6847aa1d54d4b9d789981d44ea85"],["/tags/RIFF-RAFF/index.html","ef410c5b96e2a8ff48c4ef1a70e4a8de"],["/tags/Reverv/index.html","da021660a69e8f12a88a4d5efcbf79f9"],["/tags/SENTIVE/index.html","094b8bb0829057f5108a0d4c92331107"],["/tags/Saihate-SOFT/index.html","39c6665a56ed2ce1e172ebfa7c61ddaa"],["/tags/Scrubbing/index.html","11ac5c24144f51778a90d70fab96ff89"],["/tags/Sky-On-R-imaginAtion/index.html","e85601092fed8877da5fdf08b51967a5"],["/tags/StrayMoon/index.html","10093edd61e60185f1f9fe4bbb718bf8"],["/tags/Studio-Bu-Sa/index.html","a699de815c6168777c0442bb89026c48"],["/tags/TRANSPARENCY/index.html","0bed669052695cd77a6638cb66fdfbf0"],["/tags/ToHeart/index.html","3c689892261592a1b8d7bc367145a179"],["/tags/Traumend/index.html","bedd05a9ebf70fb39d515ff37bc01118"],["/tags/Witch/index.html","da33a783b24a40e4ac4301e18036714f"],["/tags/adonis-project/index.html","b3d9bcf158358eaaf09cba0a02491816"],["/tags/capriccio-suite/index.html","ed1a0b42d9ceff969a9a74ae543fb3bb"],["/tags/flash/index.html","bc10084dd3437635e4e6086c16d79849"],["/tags/galgame/index.html","b6ad050e918a7976a2429338d9720aa9"],["/tags/galgame/page/2/index.html","876ac5a87ee6ba8caee620c7188fd0bf"],["/tags/gal资源/index.html","efad1ed9b2b307b295592e3ebbe663d2"],["/tags/gal资源/page/2/index.html","2674cf7b5861d3e2e1e4468797172791"],["/tags/gal资源/page/3/index.html","e94a4a6701dc22a56ba8bb83fc4310f3"],["/tags/index.html","f394853e2032e5473f761cabe5d30b55"],["/tags/rkr/index.html","a36102fe37d4ca9d78e48bb127acef35"],["/tags/team-eye-mask/index.html","7bc955b6faabf34935900f8154690514"],["/tags/ありすくろいつ/index.html","2adaea738a4835e37b920a667f01335c"],["/tags/いつものところ/index.html","2c69ffa98e079610fa8aad0657c19772"],["/tags/きつねみみ饅頭/index.html","17c8b6412bc26c5178fa1f9995e44bb7"],["/tags/ねこねこソフト/index.html","c7931b5880383070fb4036a85da89303"],["/tags/ねこバナナ/index.html","d10ac4e0511d45531c2435339ef53627"],["/tags/はちみつくまさん/index.html","d4277b945b3c75b3779815dd2600ddfe"],["/tags/ろりちせ/index.html","3ca164341b9a5bbf07cd4b0d127f82d0"],["/tags/アイル【チーム・TATU】/index.html","abce2443407a80afcf7c451721e18ab4"],["/tags/アークシステムワークス/index.html","500addb8ed5e7ae26a32b9316becb7e6"],["/tags/ブロッコリー/index.html","891575cf6d7ffa59007bef917ca26065"],["/tags/乙女/index.html","211eea15d857b9a70c701aaa21d4d6cb"],["/tags/乙游/index.html","670d398671a181f9024dd1ed63cfaec2"],["/tags/停产/index.html","8ff0eb3467930e3f3076a6a6f1b5cde7"],["/tags/公告/index.html","a9226468184e0fcabb5ffc75315d3bff"],["/tags/同人/index.html","16c14abe5f35036720f33bb348e72952"],["/tags/堀井雄二/index.html","07488a1f09b2d734801511302688a6e0"],["/tags/外海なおき/index.html","c20148010a0a563e23a963cb61c0e8ba"],["/tags/女性向/index.html","0c22674f9aec4ecc091c8dc03b7350b4"],["/tags/桃野衿/index.html","d3fdb65fc2011300527654d6f2b08141"],["/tags/機械式少女/index.html","4e8cc7748aadb285509e2b4d50d2a9c2"],["/tags/水仙/index.html","7f470d4c9af5c4f5b604b22c9a238ac1"],["/tags/汉化/index.html","7f2e77e1cf7bf9f065c93a8c94cc4c51"],["/tags/片冈智/index.html","4d6f27ec6e312f7be823b92b1c67cf45"],["/tags/片岡とも/index.html","f4b431641f8ece33c370dfb7b6eb5875"],["/tags/牙の刻印制作委員会/index.html","d6b07848d61dfe1c8a0e0e10ae48aa38"],["/tags/牛カルビ定食-FLAT/index.html","1a7e9404a91e59583546fd6031f1e34b"],["/tags/牧尾屋/index.html","1ec974047f1fe7b769208e998ea12956"],["/tags/犬茶屋/index.html","b6421252bd18e1b3373a4367632f7980"],["/tags/猫猫社/index.html","58c5fe1f5098dfd6fc03c9f35d93d520"],["/tags/王宮魔法劇団/index.html","4d69ee1f2759802ce67f3834dfc90e79"],["/tags/画集/index.html","ba0d33aa0ae912779222d2457c798a7a"],["/tags/索引/index.html","8a035304955aeb7b6ccb32f286435c1e"],["/tags/缺失/index.html","18a00ce667ae140f59f948aa188b5c38"],["/tags/自购/index.html","a9be272d0099c3e5e350630376474d48"],["/tags/茶葉☆姫/index.html","7bec5052b0f66edbdfa3d31c0b97da5f"],["/tags/郷愁花屋/index.html","9ff50d3f1b0594d1791185ead9adba34"],["/tags/閂夜明/index.html","2fa170c68c49282db5aabbe762544182"],["/tags/音乐美/index.html","d7bf7d710c6b50bcb1d88100564d0284"],["/tags/黒†救/index.html","44d315b70f804d3b27f595c06af50559"]];
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
