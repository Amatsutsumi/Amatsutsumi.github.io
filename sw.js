/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","5fd9c31be7d8c2ab10a1d1fd7bfd8055"],["/archives/2024/04/index.html","fb6a5d2e9e9af736817fe565960696b2"],["/archives/2024/index.html","688be2ad77c7e3dba228ad24be24c17c"],["/archives/2025/02/index.html","9995bb408af365eeba096a79b3918757"],["/archives/2025/02/page/2/index.html","359272ae5c74351791aa27ead97f9c19"],["/archives/2025/02/page/3/index.html","900fa4853d62d02d91617cc6482f0016"],["/archives/2025/02/page/4/index.html","3c5efd637edbe3f3b7988d241f6030d4"],["/archives/2025/02/page/5/index.html","f7e85bff1545238644e01b1115e68829"],["/archives/2025/03/index.html","54caaa98481493332c1ceb0f5f6af1e6"],["/archives/2025/03/page/2/index.html","3941a1c85b93529679db33ffdb871949"],["/archives/2025/03/page/3/index.html","f195a774a9705d688d33e7d624294b4b"],["/archives/2025/03/page/4/index.html","676440894280536009a9d36f946a54ab"],["/archives/2025/03/page/5/index.html","dd4c1f01a9d5beeba1ae78fe0bd4c211"],["/archives/2025/03/page/6/index.html","db30e63edf0a1f2ac73bbad051e5da21"],["/archives/2025/04/index.html","8da187364100ad1f6170546ba347a46e"],["/archives/2025/04/page/2/index.html","8d8fc5341046eddc73ef3993ce5ed6d5"],["/archives/2025/04/page/3/index.html","e0c4e80bd446a942a9baa57bcf465909"],["/archives/2025/05/index.html","c6796a7ca1a777603e08d7736f0c4e04"],["/archives/2025/index.html","0a0c782eb67b9512f7a522a10363784e"],["/archives/2025/page/10/index.html","0aca038fa78c4680ab5f42ed0564fe7a"],["/archives/2025/page/11/index.html","e7a85da9552153ebb47d11d691784f53"],["/archives/2025/page/12/index.html","7ded99ed57218827eb43d79f0b364503"],["/archives/2025/page/13/index.html","172795b4f18b395171719abf0eb3be22"],["/archives/2025/page/14/index.html","08cf8778db5185022feebe73b0f5c272"],["/archives/2025/page/15/index.html","60a6c2d19df9c9c2796b23617315f5d1"],["/archives/2025/page/2/index.html","c5e24d660f20fb7cf7abd955a6b5c039"],["/archives/2025/page/3/index.html","379bcbf2dbddcc777f3ce753b4dcae97"],["/archives/2025/page/4/index.html","bbaa8d6df628203bbcd4818e7a5e2d15"],["/archives/2025/page/5/index.html","e36a75222b7fb3458b9ab0b40cc9246a"],["/archives/2025/page/6/index.html","076ebd5b15f45af81b0db2e9b8504137"],["/archives/2025/page/7/index.html","8d24f84a46933b133ad401c1e274cd73"],["/archives/2025/page/8/index.html","096295816583598f960bed1e6750db37"],["/archives/2025/page/9/index.html","6e39ac346df9382941b9fddba505d5fd"],["/archives/2026/02/index.html","9860cbb4f9a6c32e6f6b655fd011cad1"],["/archives/2026/index.html","aadeefb8516eca30cd41f9ccdd1c316b"],["/archives/2825/04/index.html","45c7ccc10fd791041b42d67ccf273db2"],["/archives/2825/index.html","d30a2177826534b5eb1e6f051036a48d"],["/archives/2925/01/index.html","2b79447347924d1aa6f1255d654c55f1"],["/archives/2925/index.html","976c3744e38bf670c879148218647ea0"],["/archives/index.html","fdd6d172ebef9989323c6aac1f6431c5"],["/archives/page/10/index.html","f5a792b08f18c8ccf70bb19cb8f996f1"],["/archives/page/11/index.html","baf2abafa650286d86c7b3a20b30f23a"],["/archives/page/12/index.html","ea7104ceaa48dde7acb90afaf999b815"],["/archives/page/13/index.html","d7b4de6f2fb4690b10811af295ff1773"],["/archives/page/14/index.html","b004c597a44833b68b08b27a9ae80863"],["/archives/page/15/index.html","b325e8545fe84c45143fc23b0d29db86"],["/archives/page/2/index.html","5f9e1b9eb0a3ff89c6fd1be6789fa41c"],["/archives/page/3/index.html","6ddc20924ffbdc4a5ee999d2a0670fa6"],["/archives/page/4/index.html","a89e042b3c5c6d3e4a94fb846b1391f3"],["/archives/page/5/index.html","5c98890a99d08ad3b09ea2ecd48161a0"],["/archives/page/6/index.html","89213b2ddf64d06de3be093954a3a66d"],["/archives/page/7/index.html","02bd44b896bc6e86ca3e0687355ef99f"],["/archives/page/8/index.html","b3dbb3639e1b2a0f6ea8987f9f8d38d3"],["/archives/page/9/index.html","d3893a57252ec37e2e18b9c2ac47a0ef"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","168a90553e9749c42135492452d9aa59"],["/categories/galgame/page/2/index.html","09d4d6ffdba3b15933a91582357d5e8e"],["/categories/公告/index.html","64598e5bf60ebec5efe931dfb4cd8f0d"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","4f49c72184ac564ba8c5096731dd2e50"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","599908c50db04261371adc0b9f0128de"],["/page/10/index.html","0bd2f9d93ae8a1583d8082c58d5a5bc1"],["/page/11/index.html","c032fe0ea7756d9adb5b1409f2791153"],["/page/12/index.html","2bba721dbe2f013853d0995e1897b06e"],["/page/13/index.html","164a97c15badf092f1a8e01d3d7a6a41"],["/page/14/index.html","f8459d927c20ecc55c693f3baefac5f7"],["/page/15/index.html","32f777be94a051bd3bc073ca878aceef"],["/page/2/index.html","43af388a805753bea08f3c389fc2e093"],["/page/3/index.html","882e0b3fabd0458ab3a34f786f3ec4b0"],["/page/4/index.html","9aa0aa82be56a2cfdee7c391c165cd7d"],["/page/5/index.html","f1e338f558b47fc4c38516684c180573"],["/page/6/index.html","11c4221d79aecc5cf73007aa12736884"],["/page/7/index.html","ca3dce25e0c17f26777869b8017b6b71"],["/page/8/index.html","c90475073b844144055bc8e70cc92a91"],["/page/9/index.html","bedb0d607a3d409031eb830c0b7da872"],["/posts/10c9dd98.html","f0174730064822c8d4c1d4d0b8ef137e"],["/posts/126ebb99.html","6495ed9a0bcd3dfc487018c918fc67b3"],["/posts/1295b569.html","63d2299f2c6c52bd01038ddf18c36626"],["/posts/1370342.html","c9fc3968874b1a8635f89ca05ace92ab"],["/posts/15ef14c2.html","e6275b8a69fd78e0c8fd0aa2b9a06319"],["/posts/15f3959d.html","50e530828d85af0f8826ff4a6eefbbd7"],["/posts/18ab785d.html","b28da2dce920888928be2092da2c618e"],["/posts/1d59b71f.html","3d2edd220999cbca372edc810ad27b70"],["/posts/20b3f3a4.html","4191c9ab85e3a51cac95cb6e19c0ce5f"],["/posts/245f1c7d.html","acbae84422da30b4757a28cc3c1675d2"],["/posts/252658f.html","6e5f401c01ee1274cd632ca18a92e442"],["/posts/28397adc.html","41a6497c1e786ab81d0f6bd5175542a7"],["/posts/2ad07f54.html","c3792f8b895c394c9e886f41051182a5"],["/posts/2b38bce0.html","48e2a3dfb6631a76b85207ae38f69d20"],["/posts/2c0a6836.html","cd662a4cee2707e0ad5e55df9565cb0c"],["/posts/2ce39bcc.html","55a8f76eb8f5404f04fda7462306880c"],["/posts/2cf620f0.html","f9b75eddd12d9d3b7f9baa0d968dd8fa"],["/posts/2e30fd6d.html","1d25cf9a4f8c885aba5a81f18df1502c"],["/posts/30a413ad.html","fa10bb6131ae487100eabab6176855f9"],["/posts/34292736.html","023724e82392828534a04a50ad82207a"],["/posts/3468cbe.html","d8cb93bc7a3614cfedb7d75271b73337"],["/posts/39176dc0.html","bf9e5d913e316651edc28b4ce8a053ca"],["/posts/3be6a165.html","592a26b089cf3d28f5537391bdd0599e"],["/posts/3daf73b4.html","3933f01c06752d9297d1b6e1f00c458f"],["/posts/3e118dbf.html","81ee5ce7d5d042d03e40033131110a26"],["/posts/3f7d823a.html","49d2d7c98bfa0f76dbf107ad5daa420c"],["/posts/3f978819.html","ecaa08d91681dc6beb28ecf79a662980"],["/posts/41dac80e.html","e3b2777f1c2da1b6417f9fcf66c9f680"],["/posts/43945723.html","b2498e478a42a27ff1a8e42d09649590"],["/posts/44124a6b.html","0e35c884f501046cd024ecad747385dd"],["/posts/476a3006.html","a9ad9135e204f3968e8c80214f4057b8"],["/posts/47abb61d.html","143df6350d8747a815d0783defd28e24"],["/posts/4996478a.html","adc5321037295d6878fb89e7fab5578b"],["/posts/4b689be3.html","124b8ff1bdf8bf3843a93ef6a8119c38"],["/posts/4cf8423f.html","666de6cb3469e9edcb844f334f9be98c"],["/posts/4dcf85c.html","6f5f083868631e361aa53e5dfe8bf7be"],["/posts/4e314e04.html","0e78cf778ada2c9683b19cdca476bc34"],["/posts/500cd322.html","a4d11ef141fcc8a94e6808d084bf0c6d"],["/posts/51c9b1ff.html","9acccbc9bdc240ab400ecd3086742a43"],["/posts/51ce68e8.html","d1102d7f0a94b2e2909a3be31c0ee72e"],["/posts/52b5b3c6.html","657ed8e6ffeded2948fb288c2c061e06"],["/posts/54f496ad.html","481c2da775781c6718fc7602bcdb6cce"],["/posts/558e1f30.html","b63e169f3b5dfe6d937945ed24ca8a7e"],["/posts/5d8bea92.html","ce3c68e0f97f3e9dc215e47c918856c1"],["/posts/5f6e0c59.html","9e7c5eda2b4d2add9d3095b314c0bd5c"],["/posts/61a63a84.html","4e55ccdbabff24b0246af9790ab020c7"],["/posts/625ab7bf.html","6e6d2bc4e0e69510eb8353fe5ffaceec"],["/posts/6336a2f9.html","b3ddecb208490bbad5c33538ce41002b"],["/posts/6432d61a.html","65db994f907bc00f8e2a83598bfc9e0c"],["/posts/6515f032.html","b963700565542c637053c0c7f432ac1e"],["/posts/6720ccdd.html","70347514b3ede167664a010acbbf74a5"],["/posts/6a4b5ac8.html","a3c0a84bba2b4668b832b680897335f6"],["/posts/6aa4177c.html","0641f474cbf811481536c31443d1ad00"],["/posts/6b15f81f.html","9cf16b2a9528ddb85a277419c9267bdc"],["/posts/71131d34.html","f0e308bd359da6575540f869a909af4e"],["/posts/742fd48d.html","f10bebc099eddcfee4b379f181fe1868"],["/posts/78a8a8d3.html","5f4662e36fba88a9a780e19473af3453"],["/posts/7a5ef3d0.html","e7d39fd8cd0bcb2d8137f6ba53770ef8"],["/posts/7b41e1ac.html","0b3e5063480c3a4855fe63ff08520915"],["/posts/7b51011d.html","36cdbfbea879cb057748be28f6847002"],["/posts/7e3aa3e2.html","412be0407b1692e0f06a543101a1b61f"],["/posts/80fe2691.html","5e79b5d2f8b7848107a2ecec202321a7"],["/posts/81ac52e9.html","92a945f8972072f78900e7aeb815b4e1"],["/posts/82332d11.html","ae2435d56b6473e42651047f6ccf9e72"],["/posts/8486f6f9.html","d9230781393cadc7304d791fe40727d3"],["/posts/849b40f8.html","1c146ab14a5162339d31102040d812be"],["/posts/85c51d68.html","87733b9a57aa0aa450575369a8c099a8"],["/posts/86a6c500.html","f56cbd165f24cd2cf95f280adca0b268"],["/posts/886f8d3.html","dba6869f635ee2f9fa1ee4e5e1864118"],["/posts/8a7cba10.html","fa07cbc5e2e469111621c8a932041d80"],["/posts/8ac11b41.html","afe3393f04441ae3d63ce60b8f70aff1"],["/posts/8c3f2fd8.html","ac9163b46da4f9cdb7f0e4b720cc3d06"],["/posts/8dd520d9.html","4d58b0e0b14fa10aa4d66d5353e87ba7"],["/posts/8f555654.html","952b9af07a4edbcdfd190477cc34cd2c"],["/posts/92a980c2.html","241fab43043123af5b15e3e831c737a6"],["/posts/92ce16.html","d68001bf8451b859e5d1e3241167350f"],["/posts/93e9943b.html","a6f9c056927d53b1865444a126276fe9"],["/posts/94d3c794.html","c5550eb1a9c29e2a6abfbd9b3ae6150a"],["/posts/96b281f2.html","1ce098a5c6068fa2486dbef3985724de"],["/posts/97f50eea.html","e039669d4b7b8a44d5911c56dbe31f7f"],["/posts/97fca8be.html","e399131e838bcfcb2cc72971048321eb"],["/posts/98662d05.html","64faac917f8bfccca85f46e94f9ae2df"],["/posts/9a2f6162.html","20f3bad4c82458569a159bbe42815137"],["/posts/9b22a48d.html","432f74a5ad1f0a938d893b7f43247e38"],["/posts/9cb455b1.html","23746a6e3f523103860217b223ab4417"],["/posts/9ecdeecc.html","28aa5f0f64373f97537fdee624dbb7de"],["/posts/9efd7701.html","8dd40ced3a01f8ae0f0ee65411eeee6b"],["/posts/9f61c1a0.html","78160676b85a29f4cbe3a9e76b976261"],["/posts/a1de710.html","cdf24d2ee3f4f161f25b8031f63493b8"],["/posts/a30eb0cd.html","a4c79f5184558784873da3fc3ac7dacb"],["/posts/a72f71c2.html","e78de773ad319ea3aa19064cb23af18c"],["/posts/a7634b5d.html","664e6086895b9d91f34c25efbd054f3e"],["/posts/a8c593b5.html","5ec9af5f89e1f0fc337382359d1f25b8"],["/posts/ad0c1efa.html","c79df132c9d1bd89188b9b5033210c0e"],["/posts/ada3f440.html","5cbde94744ce3ea65c121396a34e795d"],["/posts/af1807ef.html","04669e365063dd683f1000851f576a6c"],["/posts/b397bf03.html","30a0f934fc5aac99a6be1f2d846e1676"],["/posts/b497b647.html","bb86f92835e6157b2bac751877224f63"],["/posts/b4d464b0.html","afa977ce6d8f5b65c3c7bfbcfc088711"],["/posts/b5fb773f.html","c6bf1cdf615c72d9847c06012ffe657d"],["/posts/b8d46b32.html","43023ba908fc835dd06674b4ce668ae7"],["/posts/c1b2c6c9.html","79c6be97005bc1e423ba01fba79438e5"],["/posts/c2111cbf.html","bda8cdd57d8ad166833159ffe5b2a92f"],["/posts/c316c2e8.html","0e4d1682ab8f7ae982c964edc97b62bb"],["/posts/c43e60b5.html","28d3d224498545bf8fb4663665740167"],["/posts/c497a412.html","65b387e4290f4678bbb1d4221c0299b4"],["/posts/c5395ba3.html","d077718d28b6877abf22502ea136d71a"],["/posts/c5de299a.html","09e53eb67572b79ac971dc8d10d61401"],["/posts/c60028d9.html","3db28062b5fc4a3247650818ec08cdb1"],["/posts/c70bba9c.html","22f43264b0b1751f0a1d27078233bbcc"],["/posts/c797535e.html","7b36da7043ffe01b60a04dd0c523dd17"],["/posts/c7a62c79.html","cac8ae11f926314021f632c8b48ce296"],["/posts/cae2c959.html","cf6ac5e11585c04f45161e5098a71a32"],["/posts/cbebef2b.html","fd888fbc19d078a20f2632148664c3f6"],["/posts/cc4c0017.html","f8bb18b04a948e8caa03a7d0b7332d66"],["/posts/ce25023e.html","6edcd369ff4f5d6939550ff7b8b71d19"],["/posts/d2fd4837.html","06db6c1c29a08634324faebb81cf7244"],["/posts/d3233cbb.html","a448f4143aa3aed6d7236de03ad45891"],["/posts/d3a745a8.html","2fdd5891f51c75041f2f517b45c4075a"],["/posts/d7e940d2.html","587edf2b3107e0815bcef5d504f3759f"],["/posts/dc815d5.html","3c3500f68c7577eb87e4e16cb8e867c8"],["/posts/de25b0be.html","890966be70b8fd7f2951f4ab55a14468"],["/posts/e2623b4e.html","584817faa2b3a5692fdab08a5a41daff"],["/posts/e3ab6ad8.html","39329529aec83b705a37dddd94156add"],["/posts/e5018da6.html","b8f90f372155c02acd2dc5b8fc48cd48"],["/posts/e5963272.html","1644911b637b28fa54968df03c087e10"],["/posts/e5ef4c3c.html","c067565899435a75e54492cd895107ef"],["/posts/e624b065.html","c9c81f5365413b2407a268394095680d"],["/posts/e7c703bb.html","8e0be7599d925be0b275adeb2c125dbc"],["/posts/e8f14b6c.html","01d99acd0b0649adc646100d5bbbe34e"],["/posts/e91abb63.html","da6ee6a1d911f0ecb6120e83d3f74fc9"],["/posts/ea9a8808.html","b9b5abeb142b843477035cdc21414b67"],["/posts/eb784749.html","f7f3cd3824aa48d21a9fa787d6a6b2f3"],["/posts/ebaf2232.html","77c5cea1a28c46bd790a05f848f11876"],["/posts/ed75f185.html","14d88132357bb826c3d6fcea0c5d7625"],["/posts/ee1ed673.html","4b3acf1cc081c27a8218037215573111"],["/posts/f0c3ed61.html","0b0e56445a9588e94b4338c4f93f398c"],["/posts/f151ff43.html","871719956a161d0b71dc88d4acaa5f1f"],["/posts/f21e7f84.html","a106e01b7bca5563b025584d326cb906"],["/posts/f230b0fd.html","e15469ea6619e97daf9d620716ddf11a"],["/posts/f28a7877.html","1678b2b6d6cc8d280224f716d3ad79bc"],["/posts/f663d5cc.html","88d1f71b75aa34295a1f4c2484b6c458"],["/posts/f730ad18.html","c36fb69fea308a6376c4d617b470b74d"],["/posts/fb5d4608.html","72ad7730e610fa667025a62930f2ff9f"],["/posts/fc04d0d4.html","c23b066dff4809b214cf32efc1023993"],["/posts/fc455f81.html","65a1cf851feb0c25c619244a05cffaaf"],["/sumire/index.html","bffc0d1dd27c530177e715b5fc97c26f"],["/sw-register.js","25ce8f3bae7f7247b65b66c8aa1575d1"],["/tags/AKo/index.html","d3199520dd1c8d2f8614ce2eb3eaf29a"],["/tags/APPLE-project/index.html","a4ea7f8910741392cf44ab08cc9ac07f"],["/tags/Ankrache/index.html","3b6a0fd4c0ea786daf44ac685791a252"],["/tags/BELL-DA/index.html","0832f7a59882af124009eb701faf0865"],["/tags/BL-Game/index.html","a6b0b71e77b14abdcbcdc073c3d5881c"],["/tags/Blue-Dahlia-Digital-Creators/index.html","c06d770d20d8b65c624191d5bb6f4da4"],["/tags/Blue-Line-Games/index.html","25f7336533c8c8585b421aeb4bc715e2"],["/tags/CD/index.html","c7db16cdd2d98b9919503565187d4abe"],["/tags/CHUNSOFT/index.html","2a865a1183bd29a484376d31d8979753"],["/tags/Check＆Stripe/index.html","88551178da88260f86993d2e18fcddf1"],["/tags/Cherry-Pie/index.html","bde6a83743f36ea37eae6581d4d3b1e5"],["/tags/Circle-Mebius/index.html","0709749398da050130566cfed6a68046"],["/tags/Cosmillica/index.html","48a6e068bfe20b27e334efaf5c5863ea"],["/tags/CresCENT-BLANK/index.html","b2521c22cf414bf449984736043f64ad"],["/tags/Dopamine-Software/index.html","c618dbc9eb85788d901dcd5d1af053d8"],["/tags/Dos/index.html","ec2444c93d6a9ec97256483d253efc6d"],["/tags/Earth-Well/index.html","294e7ef976e2f4142f90525d934f5ebd"],["/tags/Forest/index.html","ca9d8e03a8f7fc17f0c5a360c290f18e"],["/tags/HaccaWorks/index.html","ad5c1ba7dea7fd577e83fe5b4c87d4e7"],["/tags/Kanon/index.html","9090f5c5dda3c5fe319ebaaee7e0d51e"],["/tags/MANATSU-8/index.html","9dcdcedc7aa43b8f88e12018d7df3740"],["/tags/MARINE/index.html","c9486f3ae32b6c01a4aadb4be0b6baf1"],["/tags/MIO/index.html","4a6b71efad03d118dec8dc4b6684b8db"],["/tags/NAOX/index.html","d8d988875470d32d091d93eecce94771"],["/tags/Namikaze-no-Uta/index.html","2033044f718d2c5ad843f7e0a5298a12"],["/tags/Nmyu/index.html","d03abd353560e744754c35828c3b4c69"],["/tags/O-S-I/index.html","a0537946beaa9f40d306a65e30477617"],["/tags/Omegaの視界/index.html","ce615efd7aa847343dcfaf7af655d7b7"],["/tags/PC88/index.html","6afce7b9af878cb944472576346b0c21"],["/tags/PC98/index.html","ffd466f6210349fba0fdb49be30f6c78"],["/tags/Perpetual-Room/index.html","21a5efb71b26d56ab67c3d92e409780d"],["/tags/Pleiades-Company/index.html","12a0046b7236e863927f0f893c63cbb0"],["/tags/Project-Twintail/index.html","af4b7307857803c34ee113de8298e6c4"],["/tags/RIFF-RAFF/index.html","de89bfa7682a63425e7d8c580090dfc4"],["/tags/RPG/index.html","b75a3b828fc320a6d68c267bed3b905b"],["/tags/RPG2000/index.html","5ca5e6448522943a3b2e6c0208de013a"],["/tags/Reverv/index.html","db5e2be328c4874b94f38b2438c3ae9b"],["/tags/SENTIVE/index.html","fdb7d5d40145b108e738d4c30e580331"],["/tags/Saihate-SOFT/index.html","3b7403fb5fc56f606d460b281733cc33"],["/tags/Scrubbing/index.html","d39f4b1c45a79b5bf71bdc3d0ef89d90"],["/tags/Sky-On-R-imaginAtion/index.html","1ffcf7950be039ca2dd6404ffdd3306d"],["/tags/StrayMoon/index.html","dd9823566c952b4e643fd5dd9e399d29"],["/tags/Studio-Bu-Sa/index.html","70baa79f411b67bc2a89ab65e22010b4"],["/tags/TRANSPARENCY/index.html","96c6f53a85ea54b701c8d1ecbe0dc4c5"],["/tags/ToHeart/index.html","5c0ef6e81f48a0d3df39387d0388a271"],["/tags/Traumend/index.html","e45d3ce9066d0cda2d30c98761de15f0"],["/tags/Witch/index.html","11663bdde25c97c3deb22b4f92ef1e12"],["/tags/adonis-project/index.html","0fb0f7dab0ec180d66b19969020b3e81"],["/tags/capriccio-suite/index.html","9432afdd55158daee2f021f9df4e51da"],["/tags/flash/index.html","b15fe734b6072a472d2b0d138ff7922d"],["/tags/galgame/index.html","ac0b5aabd3dd7087bb9c757066640ebe"],["/tags/galgame/page/2/index.html","1f713de76d98e9a6dd717f42ff1f0a0e"],["/tags/gal资源/index.html","6998051486768ffa8a46c1adbf0f4721"],["/tags/gal资源/page/2/index.html","1a162c6d9e1eb27d0e6b9fd7b45d02d3"],["/tags/gal资源/page/3/index.html","8c308c35eea63e35949c0530b6996648"],["/tags/index.html","45baf0a8de5305878c1c43dc49128e2c"],["/tags/m-kz/index.html","dcb13944aa59ba930bd067453f3d2a2e"],["/tags/purgatory/index.html","13d15cd5772669c8e1b924b4062371f5"],["/tags/rkr/index.html","2f1311d538fa5983f2b3708fae342eb4"],["/tags/team-eye-mask/index.html","a002aafde2ebc9613ec1472abbcc94d7"],["/tags/ありすくろいつ/index.html","f86c67db18faa8efd0c26d04c5758c4f"],["/tags/いつものところ/index.html","8ced5c3dc3fe1d9cd1f6e9753a5e3c7e"],["/tags/きつねみみ饅頭/index.html","fd8ec41ab23da2e92b036080e83245c2"],["/tags/ねこねこソフト/index.html","ebec004bdb03e93088282ebb0621cb00"],["/tags/ねこバナナ/index.html","ad2a9db53ec4093892a9717e098d3ae4"],["/tags/はちみつくまさん/index.html","c78e0678cb8fbd5ccf2441cf0a8434c9"],["/tags/ろりちせ/index.html","1c8779c2a4733116e37928e0817822c1"],["/tags/アイル【チーム・TATU】/index.html","b9abf19a52cff137fd8d8d2290d2ff2e"],["/tags/アクアポラリス/index.html","3e10fd5e99591367d78e012623e40dec"],["/tags/アークシステムワークス/index.html","65b4445f87737da05f372e45e264f911"],["/tags/ブロッコリー/index.html","7a51d7965c1200a8dbd5ea3d5292e051"],["/tags/乙女/index.html","2f6ef62dd11aae9f1d0b0720cef88c15"],["/tags/乙游/index.html","4b16f7053daef111710794f0833127bf"],["/tags/停产/index.html","66a2c49e82bd9d28d5b6fb428d4fe325"],["/tags/公告/index.html","46cc38567d3236abb9b743ea4fb26e10"],["/tags/同人/index.html","d3d36bfb8728bd8e077d024efecbaea6"],["/tags/堀井雄二/index.html","c3d436ca221d3c69a65173f7e57c81ac"],["/tags/外海なおき/index.html","14a1f56a22c19f9441267428bb94f0a5"],["/tags/女性向/index.html","aa8dfdc0af7d28498f431965c6b22079"],["/tags/御茶ノ水電子製作所/index.html","aa5174c4a2a174a388f73c6670c1cafa"],["/tags/月の水/index.html","31e9087acec3211b94bac0f45262dd90"],["/tags/桃野衿/index.html","8f7ac2009c00098fd84fa2605bff24d0"],["/tags/機械式少女/index.html","f0d90ac75e4005c789cb290fe9139702"],["/tags/水仙/index.html","3e19a0a259f91fba6789d3d7f3a19000"],["/tags/汉化/index.html","46f92600d51b5ddd5a0873778ccbe8e9"],["/tags/熊月温泉/index.html","eed7aa161e21bb5ed2177ee6ce9b2b1e"],["/tags/片冈智/index.html","2943370ffe4657308844c5287042c9af"],["/tags/片岡とも/index.html","f9e93367fc0135eb8dfc59340bd956af"],["/tags/牙の刻印制作委員会/index.html","afc6a73c4f84ad8d53aeb92a129d7e98"],["/tags/牛カルビ定食-FLAT/index.html","52eb3f40807139bd2bb014495a28449e"],["/tags/牧尾屋/index.html","42c1801746594b29d84ce7f0404074d5"],["/tags/犬茶屋/index.html","18608aa59441ecaaa6219cf8d9560236"],["/tags/猫猫社/index.html","fc5528d2627b40c92ef7a22f876c734d"],["/tags/王宮魔法劇団/index.html","4a7e06e8fa5b5fa24f138d8c98643501"],["/tags/画集/index.html","a5d50e21f20c452efbfdc8caaec0e1d2"],["/tags/索引/index.html","14768b70a3516b87b5c12bcc37a895f9"],["/tags/缺失/index.html","1f8a108fca25824aee8c4f51af687146"],["/tags/自购/index.html","3bcfbd7230893dbfb8d7c21f1cd91099"],["/tags/茶葉☆姫/index.html","d03a7462600c01283c293dfd58b95f98"],["/tags/郷愁花屋/index.html","4e9f3178b01e8203e1129ad1ed4c3e2b"],["/tags/閂夜明/index.html","64bc25c04de8bb5f0b34ab036a20a28e"],["/tags/音乐/index.html","b5facc5dea75447fe467cfd73bb9892c"],["/tags/音乐美/index.html","bef30032ffb153e37b68f2f202cfed5b"],["/tags/黒†救/index.html","0d3585140168da3b3dd39bd1f1fabb5d"],["/tags/黒百合っ子大集合/index.html","35d46f965cabccd7505ae847a16efbe0"]];
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
