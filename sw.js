/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","39db4f45f81c39ea7e73fca251316205"],["/archives/2024/04/index.html","1e65d9ff6a2e25cad73cd4aab1dedec0"],["/archives/2024/index.html","a91ca46c5efe4c8d1d564460abd6e729"],["/archives/2025/02/index.html","b71db2f3288b4023d0876a6e2a85f00e"],["/archives/2025/02/page/2/index.html","2b1ad04c44cfdb3f01db6bba0ff42595"],["/archives/2025/02/page/3/index.html","429c32eb02add8dbbb03e032710abf4f"],["/archives/2025/02/page/4/index.html","2fffb12f1316a3d11280aa1e03891a8c"],["/archives/2025/02/page/5/index.html","7243ad6a86c27d7a8f95dd255a27abbe"],["/archives/2025/03/index.html","067d474160d74b505b71817a256fb986"],["/archives/2025/03/page/2/index.html","7942d75f86a9f89a79b62391db8a8387"],["/archives/2025/03/page/3/index.html","dc53e7a211b009dc153b38326d93d8b6"],["/archives/2025/03/page/4/index.html","9b46db9646c4c31e527d1bc744b93919"],["/archives/2025/03/page/5/index.html","1514308ca5ffc0c568ef5313be4d8c16"],["/archives/2025/03/page/6/index.html","786a947c076b59db6353705691d5c08c"],["/archives/2025/04/index.html","a664194266f4a1de9e45bbeac1eb0046"],["/archives/2025/04/page/2/index.html","c789a33b43249637f6de2c64b4b762ca"],["/archives/2025/04/page/3/index.html","b753bce09c545cf306454a482aa336ef"],["/archives/2025/05/index.html","f871e55961e89a98480eaa7e5ad8b927"],["/archives/2025/06/index.html","57a2011c9e8812fa514d4312a4722d7f"],["/archives/2025/index.html","5474c512afb3f2904a93d3106045de0f"],["/archives/2025/page/10/index.html","67d96a7e286ee3622c1e3430e01bda0c"],["/archives/2025/page/11/index.html","20dff7edd06c04b4310d5291d517f067"],["/archives/2025/page/12/index.html","e6e325996437548ad6353a31fc50f112"],["/archives/2025/page/13/index.html","7122da179d6762e7a3e26910a3b7b13c"],["/archives/2025/page/14/index.html","f1eff26788ce12c4e4d9644bacc7f781"],["/archives/2025/page/15/index.html","73a0305d56805d426dbef01de65bfdb5"],["/archives/2025/page/2/index.html","cc735c93d025bf00beb9457108c67f33"],["/archives/2025/page/3/index.html","ede6d038889e50adc2a68aee65dbcb75"],["/archives/2025/page/4/index.html","30f40e24c22e150f85ab78e21acab403"],["/archives/2025/page/5/index.html","eae2ddc97b5b93cc20f6783867608316"],["/archives/2025/page/6/index.html","fff6cf4dff42afc1c952e2b1fbbce9fd"],["/archives/2025/page/7/index.html","34c1a8a4178b5971c22322cd9af9f979"],["/archives/2025/page/8/index.html","21fa52c733552e073e962bb9f0b33c9f"],["/archives/2025/page/9/index.html","b61a35da5003857bc6f5609feb6f8348"],["/archives/2026/02/index.html","749e0f78c9dacacc0aa68777529cc64b"],["/archives/2026/index.html","d1844dc690efff61ccd13b2d84e11051"],["/archives/2825/04/index.html","fd45ce6a4cd896f9cfe9a4fba149ffc6"],["/archives/2825/index.html","9710738c5698f5bba9297c2f7d88cb0e"],["/archives/2925/01/index.html","a7ec18a8588d969b6ed300500dfd6252"],["/archives/2925/index.html","18ae8f280c98f15fb19951e5e79a561b"],["/archives/index.html","c57c11a6ab2dc8e12eb51e7ada128d6f"],["/archives/page/10/index.html","3c9bb4faef912442a7766609c4701eee"],["/archives/page/11/index.html","9c469ae271cc59cf8457bf160e342b72"],["/archives/page/12/index.html","8a2f721e2afa2b54a2ac35f92a6ee754"],["/archives/page/13/index.html","7e140879082fd3b4a3b5e5293f34ab4b"],["/archives/page/14/index.html","12d86c975386e84e9e8095d56b96d583"],["/archives/page/15/index.html","3f17078caa7763af5ce1ed1238134505"],["/archives/page/2/index.html","fe557af1d803e661d850750cb356cc96"],["/archives/page/3/index.html","97aea46db339056f3445dd4a0beb8dcb"],["/archives/page/4/index.html","81de6e6e8e42d097a55da90ecc547697"],["/archives/page/5/index.html","ca3363a2089ad0198260ca7478ae8582"],["/archives/page/6/index.html","ffb32022a49a929ac518b7932fc77786"],["/archives/page/7/index.html","ef813045c5de8ec205b5786ba532d805"],["/archives/page/8/index.html","ad7dd809899edf8b13930c1f084d14ca"],["/archives/page/9/index.html","cfbe3b15d5a3d9c66716743ad1a0de0a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","a0f4e7330b32e0a50ca9027d54d0d68a"],["/categories/galgame/page/2/index.html","30c1ab2f8275a3cb560037841dc983c9"],["/categories/公告/index.html","c0c5b3673782591ad3187665eacee610"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","4d00c9aff82544fce58a5c7d8ae8d8d7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","7806047ca81932e1fc790b428b2e0c94"],["/page/10/index.html","6a8b857d024f844cdd4920e50bee7c9f"],["/page/11/index.html","2bd18fec13cbcbc0c8eac53d9a771676"],["/page/12/index.html","b46e43837f47f53536f881abed1f720a"],["/page/13/index.html","628696edc4da920150dfaab30c287dbc"],["/page/14/index.html","787ee21f8978608ca62649d5bb5d52b6"],["/page/15/index.html","96270ec576e31fee57d48c9d83d44d67"],["/page/2/index.html","35a30339c078037e6a0ff3f6112a5645"],["/page/3/index.html","645754f4bcd5d2b8aa7d831ae4929fd4"],["/page/4/index.html","dfcdf2f93557654f4263903a4b5c260f"],["/page/5/index.html","58a8aa13e85778fc61a84525af9c7c3d"],["/page/6/index.html","388300140ebca54460cac95fbd78a653"],["/page/7/index.html","5a897ca83ffe05dd9107a40a3e145c48"],["/page/8/index.html","fb27bb39ccc38d4db6c9b186d68cef55"],["/page/9/index.html","ecc7fb0ce3436b32e93dfb1d0265b948"],["/posts/10c9dd98.html","d29c89c4c7a470e0797900fcb663c587"],["/posts/1295b569.html","524423271b99637aac73782a700b9dde"],["/posts/1370342.html","7fae2fb5fa5096cad932ae2263dfffbf"],["/posts/15ef14c2.html","616a4ee2e774939f912e1a375e353605"],["/posts/15f3959d.html","41ce071233655007055968d60c9f5b7a"],["/posts/18ab785d.html","0d0e444ad06e2b6dae9f288dbe56887d"],["/posts/1d59b71f.html","5f606810ef8c2e6a404dfc45bcd0fd4a"],["/posts/20b3f3a4.html","6aebceabf4f0a8fa3545b1f981e5050d"],["/posts/244daa7a.html","e752326f49933757fa5e9cb91a827952"],["/posts/245f1c7d.html","2a57bab1f9d3e76ff04ab01bc129e13e"],["/posts/252658f.html","2762bac6bf482b609dc7f2e698995d64"],["/posts/28397adc.html","7cf10c7ae14dc8274482c94156fcbc1c"],["/posts/2ad07f54.html","0e3b6d9943f24cc419519c4a45ca8747"],["/posts/2b38bce0.html","819e42e3a03ccc2fadf9a276629c4b6e"],["/posts/2c0a6836.html","03d551060e58f97033c68d173e80a76a"],["/posts/2ce39bcc.html","54e639b438a2b53c9e96bfc53bdf5708"],["/posts/2cf620f0.html","9296efc0f3ce0dd7086098776bf9cb58"],["/posts/2e30fd6d.html","b8e563ce9b4fd60ae65384b4ba6f449a"],["/posts/30a413ad.html","2996e1a63a64bb7c9c85de1d0df9645f"],["/posts/34292736.html","2eb03d98e126ed15bf78d4f81f2606c7"],["/posts/3468cbe.html","ccdb72ebdd3675d16d21d33a191f51e6"],["/posts/39176dc0.html","43cc77a0127dfd0b78e173964d096be0"],["/posts/3be6a165.html","e57480f96f5f2a1533ab7f5b05f537f8"],["/posts/3daf73b4.html","c31f1346760a2c4f0df511152f05e5e8"],["/posts/3e118dbf.html","1bfa3e6334418ada50d29e8cd71fbaf7"],["/posts/3f7d823a.html","cd75356fdc9ffe71c165ea50409c9f9d"],["/posts/3f978819.html","6e3b8893cdc0dc561267a07e8ab22a7f"],["/posts/41dac80e.html","6d100726ef845547a3342358c42cbbd9"],["/posts/43945723.html","d23b2e7389b73abcfcd9601448df9be3"],["/posts/44124a6b.html","320d130f37d9a0a22a0738344d264349"],["/posts/476a3006.html","290eadf88e52fb01b2ff7ae71f4d8041"],["/posts/47abb61d.html","7579cfaabe9fb1cec7c7e9e4d1113ae4"],["/posts/4996478a.html","3d69e524d4dbed1f5af47996eef67502"],["/posts/4b689be3.html","57da7b033fc54206690b3b802f45c20e"],["/posts/4cf8423f.html","0673808d8b10bbb9860e14c2b80eb016"],["/posts/4dcf85c.html","7e716c21f6512019dc07ed4fe74ef513"],["/posts/500cd322.html","c0412021d279de6cfdc68adff392a7cb"],["/posts/51c9b1ff.html","df3fcf5bd2f7a9d5eec7dd8c65e81d8d"],["/posts/51ce68e8.html","6530dd0222d595d98627a82bb3303e2f"],["/posts/52b5b3c6.html","bbb0daf11a67130df4ba372edb4820d3"],["/posts/54f496ad.html","22b82f875ef61c458d5b0a1fd4af68bc"],["/posts/558e1f30.html","bdf69f976630fcb6b37a3d2404899b98"],["/posts/5d8bea92.html","8240dd8b8681de93a684923d6dd4e61e"],["/posts/5f6e0c59.html","5be2aa43583542a58deb0d9824363186"],["/posts/61a63a84.html","c35b9a3a2823c4bc9d4f01634a3fbda5"],["/posts/625ab7bf.html","66692f6ec67de198e31bfc9274b5b546"],["/posts/6336a2f9.html","ae19fba5581bcd913dad9a4bdf49af43"],["/posts/6432d61a.html","f62429275ad2f1f2ba3c4913423e2cbc"],["/posts/6515f032.html","577779b7dca1a4f1560604d35f379902"],["/posts/6720ccdd.html","a4e3aa51e6a4dbaa0783eec0e46864d6"],["/posts/6a4b5ac8.html","f0b232d4eb670cf7264f409e839a5800"],["/posts/6aa4177c.html","0c1fc5ef39d67dff858823644de92cbd"],["/posts/6b15f81f.html","315fa01e8748c9b771a515229527d3c3"],["/posts/71131d34.html","54146be3400b6d0345e190ca3579886d"],["/posts/742fd48d.html","0fcf8275a764ea5dcc74bcf904ec67d8"],["/posts/78a8a8d3.html","a984c8d892416fa6eca00f1870056be1"],["/posts/7a5ef3d0.html","165c06ca9c0cba16b7409e7a3fdb3741"],["/posts/7b41e1ac.html","ad18ee75846d83add5c53e51aa20cb35"],["/posts/7b51011d.html","67e999a5b4ce2a59e5943ebd3d7ea9b8"],["/posts/7e3aa3e2.html","37216699b6fdf24f1e3f45014b765752"],["/posts/80fe2691.html","c7176872facf669c015eb35fc3f7ff8e"],["/posts/81ac52e9.html","602ba3ead2b43207fcf0144901850dad"],["/posts/82332d11.html","c1ddd8fc60eb76cf2cba1184b787f2b3"],["/posts/8486f6f9.html","1ddd5caef3add5369047008251e05458"],["/posts/849b40f8.html","b38bc7eed271025f4b94976a278f271e"],["/posts/85c51d68.html","19a64b585b01cd9eef8558da371eeeb3"],["/posts/86a6c500.html","79045bd79ca08d4a948232f985717310"],["/posts/886f8d3.html","61cb91446e4eb8edd0cf942b42d216d8"],["/posts/8a7cba10.html","dd68752efb5f55a84e9dd7f28033849d"],["/posts/8ac11b41.html","263b09aa704abbcb7e5bf6c802eaa7ea"],["/posts/8c3f2fd8.html","4ab0a002da97de1b2b836b34ba558aec"],["/posts/8dd520d9.html","b9166b7d4dd08a1c80d901fece34867d"],["/posts/8f555654.html","144cbb0be4b23e0535526035cbd7d5e0"],["/posts/92a980c2.html","7a6c483d9c71894c6567b318d7e95d64"],["/posts/92ce16.html","3da5c279f31d40382199e4d4071b4b73"],["/posts/93e9943b.html","61979eb8337a442ad8a9f9956cbf48f2"],["/posts/94d3c794.html","efcf08b6542c96ab79adb46a2f665360"],["/posts/9606c2fe.html","cfbe0a37a56d77b3d8762450e0edba52"],["/posts/96b281f2.html","f893a5b6be1a0011ebe83144cca98ca2"],["/posts/97f50eea.html","f04af17e4f1dbba25de1a6c9a4258af8"],["/posts/97fca8be.html","ccd350372b04369ffc78a826cfb99870"],["/posts/98662d05.html","0c5e569c9637b87fbea28cfdf2ed81f4"],["/posts/98ef47c3.html","87ae29509ce51d2ed68bdd16ad4cfa18"],["/posts/9a2f6162.html","0ae2d237d583e88a3eb1c7e39545b235"],["/posts/9b22a48d.html","2423f9e31dec8445dd8e10fccb5bcbf7"],["/posts/9cb455b1.html","40a148369c339617929bc333fbe01a20"],["/posts/9ecdeecc.html","d36359fda31019e040499b127659f696"],["/posts/9efd7701.html","76382022cd6212a7a455e6d94d31a34f"],["/posts/9f61c1a0.html","a59eb09f82fe092bc1c585c3d5dd3186"],["/posts/a1de710.html","07cc6f3aca31a698a2e1ed8cd03d8276"],["/posts/a30eb0cd.html","7ed7bb0d70d15dc7c7322edab6b9d3e2"],["/posts/a72f71c2.html","c407061d2bf1129ed00517bd90b651b0"],["/posts/a7634b5d.html","245c29bcb015ed1d3e200f87d205a71d"],["/posts/a8c593b5.html","e4d0a78b9007ade967f6cf742192cf47"],["/posts/ad0c1efa.html","c690c7b75d8dd65a57b50fb282546aa3"],["/posts/ada3f440.html","bc2907f1e3ddb02abda2cf012e935274"],["/posts/af1807ef.html","fb597e89abd01411b8006139f2d77cb2"],["/posts/b397bf03.html","bead3a8f468dd6d7aa9c10b3054bd754"],["/posts/b497b647.html","1c26429ca2ea3df20701ecc6a9a5462f"],["/posts/b4d464b0.html","70bf60a0092d2a4b29e1b500eea18126"],["/posts/b5fb773f.html","2294405b611c92e4cd3cc98ada64aae6"],["/posts/b8d46b32.html","ef9c77f2f0bb583d82db66fb276ee3cf"],["/posts/c1b2c6c9.html","eae46782b9031522b0a99e374979ce09"],["/posts/c2111cbf.html","a751f64a35ef1d2e37449d3d47d99e00"],["/posts/c316c2e8.html","8750d41001819764447fb21592fbe29a"],["/posts/c43e60b5.html","a8975c19b1bae8cc677896250b2c30b0"],["/posts/c497a412.html","3779fde9d765b41c95476fd16c3e9456"],["/posts/c5395ba3.html","985740567a8d4b7918107280be33bd4e"],["/posts/c5de299a.html","148813f03dedfbd70b5328088cd82866"],["/posts/c70bba9c.html","7ff56863299a59e30155b98ce57c9c41"],["/posts/c797535e.html","dc466fe93d32cedc0f49d9b988edaaef"],["/posts/c7a62c79.html","aff41f05ba38d191687a224b1811b97d"],["/posts/cae2c959.html","a305f4b4142e62427783142ac3c64a85"],["/posts/cbebef2b.html","84e26058e46fec1216b70b0c49c15226"],["/posts/cc4c0017.html","8af64ee5bf7f5a0d3704509054c18abf"],["/posts/ce25023e.html","c3f7add2a33f848d1216866071222efa"],["/posts/d2fd4837.html","2200065e5024640a8852314250b3a690"],["/posts/d3233cbb.html","c1fae5cbd94e2d289da26d357e7f81de"],["/posts/d3a745a8.html","374ca7c717a3e0138f36f6fe2b6c3297"],["/posts/d7e940d2.html","6a4f6c401f21a5e29fba363b7890261e"],["/posts/dc815d5.html","26b2236f7dfbd2e94204a199bef74f09"],["/posts/de25b0be.html","afe454b0536581d51f3b4d8467c4f858"],["/posts/e2623b4e.html","2cc93a2eb902148e7307441a94650096"],["/posts/e3ab6ad8.html","0fb0ab511a31580619207ffff18d43bc"],["/posts/e5018da6.html","1be6a09b4014d68900bc9bf97a8a0f4e"],["/posts/e5963272.html","2318a195bd68812a49632a7d3f90e466"],["/posts/e5ef4c3c.html","1d7c2426c384c793ea5f01a8e7b299e9"],["/posts/e624b065.html","fd1d48cb0547276e641a21e6e13c887d"],["/posts/e7c703bb.html","1207252aa7067e2d8a0fbb119e64e6e8"],["/posts/e8f14b6c.html","c75bd8f77a4eb90b2e9ee812705f357b"],["/posts/e91abb63.html","7d29e4708756cd752eba033ad200db48"],["/posts/ea9a8808.html","0fdd0206324faebfb6dfb807ca593d10"],["/posts/eb784749.html","3af4fa93f231aaf1b7e682306e5ad82e"],["/posts/ebaf2232.html","acdf1225a46d4227a37bca2a9096c312"],["/posts/ed75f185.html","bb1991263c7ae2b5b206c0839181f60d"],["/posts/ee1ed673.html","539be2362f91a0ffd5e738b7a5ba7843"],["/posts/f0c3ed61.html","d466d4ef6474aa4e2add6bf78d1cee4a"],["/posts/f151ff43.html","696b19cc911788ee9925948de51e8364"],["/posts/f21e7f84.html","4672ead267e8a7e4ae353e9870905b65"],["/posts/f230b0fd.html","2a94a33706b47b33e1569e50636416b9"],["/posts/f28a7877.html","bc16f47db789364da898f629491146cb"],["/posts/f663d5cc.html","425fbb706d7401470c7388c275b6f7f0"],["/posts/f730ad18.html","841e00337b24fa7dfe6c1b254e7fe590"],["/posts/fb5d4608.html","96d8513dc2b68370149404dc38da844a"],["/posts/fc04d0d4.html","3a654ae38f69fefd2a683abb1eb72ef3"],["/posts/fc455f81.html","cfc5a285152afdf80eec22c92967c49e"],["/sumire/index.html","1288bece43f2fbb134ed95efb22827ce"],["/sw-register.js","dd00530c517cbea2334eb479922b3999"],["/tags/AKo/index.html","98f98cac9abd89e0918016208b4e2c5b"],["/tags/APPLE-project/index.html","6e4d93cd49f2444135856f0544ef2844"],["/tags/Ankrache/index.html","8677438ec3bd6003eff8a4fed831d43e"],["/tags/BELL-DA/index.html","ff41cd5b176c9a4e6b6226350336251e"],["/tags/BL-Game/index.html","621609226f3ffaab32df65b4c44980dd"],["/tags/Blue-Dahlia-Digital-Creators/index.html","a8b6225af8fa25427c9fe520cd67391c"],["/tags/Blue-Line-Games/index.html","1f4c9ff9620ac5e6541a2ae43b11ec11"],["/tags/CD/index.html","07ac6d506305778fb4334a1872862950"],["/tags/CHUNSOFT/index.html","be2445d1fbdd779aa8909b13f15e0880"],["/tags/Check＆Stripe/index.html","12e9e14c0fe37afd3660c16ee3be41d7"],["/tags/Cherry-Pie/index.html","20ca8b9a037372f057e6a3c3bf6ab4de"],["/tags/Circle-Mebius/index.html","1eff2f3a2b8e108c3bb3ccbc3f7b89e7"],["/tags/Cosmillica/index.html","f7a9419a769ce46d7c2bb50bb952f05e"],["/tags/CresCENT-BLANK/index.html","1395066dc1033b0c660a644f66f5fd9a"],["/tags/Dopamine-Software/index.html","ca3e6ac6b56e286a85750c770a7a8506"],["/tags/Dos/index.html","1f89a59eca53791da25b7f9298fa3609"],["/tags/Earth-Well/index.html","0eab148824c84f0ff8d21a98cf8d7294"],["/tags/Forest/index.html","025e67d0e17808a6b5e50167690d981c"],["/tags/HaccaWorks/index.html","cc69dee9728b4cc29e9f6efce4b8a0ad"],["/tags/Kanon/index.html","006592491ee15bb420e590342d74a3ba"],["/tags/MANATSU-8/index.html","e9d2b46dcd4fea2d95f1aed86e35752e"],["/tags/MARINE/index.html","fdcbba852525c7dfe10d75d3e540983a"],["/tags/MIO/index.html","baa6cabe02abe2e458641bc76afe4192"],["/tags/NAOX/index.html","e5a5dd270d573b1564ad9491ecd4f364"],["/tags/Namikaze-no-Uta/index.html","7ccff5c3203f1b639a865fa4131a80b6"],["/tags/Nmyu/index.html","fc71823000ff50f6fbe1d075ba052c19"],["/tags/O-S-I/index.html","ab776c3b687fc58c655ffae3eb8cc57b"],["/tags/Omegaの視界/index.html","88c6997ca53ac9dd22aaa4edc7d7b26a"],["/tags/P-o-l-c/index.html","86c57596f6f82e2d5ea1b505c231e4a7"],["/tags/PC88/index.html","d165d39dcbaa3915ab60e3886091d7bc"],["/tags/PC98/index.html","cea08416a9d013ff78bfb64e4621fa66"],["/tags/Perpetual-Room/index.html","0fc7c37934b1976205afaa43f204a301"],["/tags/Pleiades-Company/index.html","b22d760eff6a16fa5b962d9904272cad"],["/tags/Project-Twintail/index.html","601c7debaf67f8ced9ec50b19d95e05d"],["/tags/RIFF-RAFF/index.html","9762528edf3a7217574a2149b050214c"],["/tags/RPG/index.html","c07ebcd09a80f8506347b9c8a61e11b7"],["/tags/RPG2000/index.html","6bc60456fa61073c17fbcdab8f581630"],["/tags/Reverv/index.html","6f5bec0ff08bd81d41eca7b77fe22329"],["/tags/SENTIVE/index.html","52d2210dd861ae1fe56a38b14746bac6"],["/tags/Saihate-SOFT/index.html","c419bb98d4c65f07a4dc2ccb7da111f2"],["/tags/Scrubbing/index.html","57673ee3711aa9fd8a250bd003903742"],["/tags/Sky-On-R-imaginAtion/index.html","b94b933da46df810169f9755f0ab2b37"],["/tags/StrayMoon/index.html","0cb5d18f2b1462545f139d5aabe71ba5"],["/tags/Studio-Bu-Sa/index.html","a61a5d03b1ccc6dee856c3b856c2acc6"],["/tags/TRANSPARENCY/index.html","ab9792c5fa1f8bf1bbb9a6a25724ef4a"],["/tags/TRANSPARENT/index.html","d868a48b875fc93d3ee62ec51ab1eabb"],["/tags/ToHeart/index.html","1b904c34b9d1d8071b4e522b0f359d78"],["/tags/Traumend/index.html","3de8f26b100dc3b8c19cda87346055cf"],["/tags/Witch/index.html","c953497fa7bba7b005bf4462fe74b6e4"],["/tags/adonis-project/index.html","70a4cb3b149011d42c07aaa040178279"],["/tags/capriccio-suite/index.html","70aaab93051f250b20d4b4fb680cfba3"],["/tags/flash/index.html","9bc6b875e72e0d6eefb2127f66b17832"],["/tags/galgame/index.html","ab07ab35df57b48bf7b1c11ae97466f6"],["/tags/galgame/page/2/index.html","d783e55cd67995b81bf68039cc3c4301"],["/tags/gal资源/index.html","9801fca573c68697e04a6f47b5a75b84"],["/tags/gal资源/page/2/index.html","dd439f1c96f94bb3fad6dbe25b7b3d85"],["/tags/gal资源/page/3/index.html","1ebc38567c9f052ec964253d8f370898"],["/tags/index.html","05697fa4762d53b3f87628973be24c21"],["/tags/m-kz/index.html","f50f27d289bfd98138c677f525bf529a"],["/tags/purgatory/index.html","037e4b9841f3854c1145eca7dc2ff566"],["/tags/rkr/index.html","d94545e12ea8fbd9ffaac9c4bbed185d"],["/tags/team-eye-mask/index.html","936314147b0c67ce7c7db8c38cf68ec0"],["/tags/ありすくろいつ/index.html","f7f7b7ce0d2265ba170905f435aed7be"],["/tags/いつものところ/index.html","8a41dcc5b5a31f80acad6348036691c7"],["/tags/きつねみみ饅頭/index.html","f9aed0f3f11df207270a9df87ab9cd87"],["/tags/ねこねこソフト/index.html","1f6fdf1926b19df2841bff3b23133444"],["/tags/ねこバナナ/index.html","0da2083e8e00e3bc0d8dab0dd5f77f04"],["/tags/はちみつくまさん/index.html","4e3517280037f4eb15757068f46b6044"],["/tags/ろりちせ/index.html","4b4f6bc744be228dae4bd3226b2e06b0"],["/tags/アイル【チーム・TATU】/index.html","9313838873d965e67df5155a91dd8ac0"],["/tags/アークシステムワークス/index.html","8850dbf737bc918752c68a4d269119c6"],["/tags/ブロッコリー/index.html","81395cb6cc3552d494c8b38960ab7ac1"],["/tags/乙女/index.html","c0e2415d98be8d2922e59c685246c9a8"],["/tags/乙游/index.html","c405b3cdb722278d6d52c0159699a1ed"],["/tags/停产/index.html","43e2c8dcb58a5d792dde623087f370e2"],["/tags/公告/index.html","2466eb8dc4442090aa0dcc6d1bae9eea"],["/tags/同人/index.html","cdc64e76a28b5de0c76c9a354bc3e416"],["/tags/堀井雄二/index.html","053b5fa83c7237ca075d8ea7f6f56e30"],["/tags/外海なおき/index.html","c4fd52854db7f9c1e08fd3621c7c4ebf"],["/tags/大熊猫/index.html","29ee19cd3ea347d70d1e698a971ea9f8"],["/tags/女性向/index.html","7978dbcdc74254820dc7b17fedc21c88"],["/tags/安装/index.html","14e0632311786a5eb9c97a133aecb82a"],["/tags/御茶ノ水電子製作所/index.html","9c6e9eb098bbdd1fef2a831ccc1e2547"],["/tags/月の水/index.html","1fb5cedb69e8c66c0bb0698c646a6166"],["/tags/桃野衿/index.html","83687af8f2f1991a226a5858cb782355"],["/tags/機械式少女/index.html","e2494d16383cf2e18f695b3af5d31377"],["/tags/水仙/index.html","f46317544cb3f92f2e4688caa498d6cc"],["/tags/汉化/index.html","138ee76bdd7ea91ca048d39e4f1308b9"],["/tags/熊月温泉/index.html","290e46ddee861afbf2760f150878c259"],["/tags/片冈智/index.html","251c3fe4f225020b608ac3f5966dae93"],["/tags/片岡とも/index.html","cd798c4a639265cdc5fea38e13902948"],["/tags/牙の刻印制作委員会/index.html","9ba11d153ddd746ca8e0de1520f383b8"],["/tags/牛カルビ定食-FLAT/index.html","d155e12b828019bd79bc642ace9f17a6"],["/tags/牧尾屋/index.html","cb88c9eaab51275077bc7aea99f7e5b0"],["/tags/犬茶屋/index.html","ae454e60fbf5a06518293c505d8a29b1"],["/tags/猫猫社/index.html","ee8cc19f529495241b98b347be74a83e"],["/tags/王宮魔法劇団/index.html","0b19b357324ef06a65608779cd210158"],["/tags/画集/index.html","5a5b0a47ac01792fce1d8efa57ecead9"],["/tags/索引/index.html","9551e20af612be9bf708e74dfe427870"],["/tags/缺失/index.html","969f2dfd6e33e1e6be7b38472b24e10d"],["/tags/自购/index.html","5ab42924c525e37599270be032254db7"],["/tags/茶葉☆姫/index.html","2f01e3d8aeea62abae6153fedb370493"],["/tags/郷愁花屋/index.html","32b7ef5b84aeaa9ad1b50752f954c09f"],["/tags/閂夜明/index.html","9616a5ce62b12c9cbb544c705a9fa992"],["/tags/音乐美/index.html","082de20bdae61654e19f55c9bde2d09b"],["/tags/黒†救/index.html","2e8716cdf0ce73ca488a0b1c006ff3a5"],["/tags/黒百合っ子大集合/index.html","bf29dcd7d4f1f66bcfb0c9dacb71c6c4"]];
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
