/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","55670dd560924ba7594578895fa544ec"],["/archives/2024/04/index.html","f3ccd6c406106d2d08d82cd109efe2c1"],["/archives/2024/index.html","7b5eeb39cb8de0522ba815a23f724860"],["/archives/2025/02/index.html","cd48d78186f776a321c3bbede617b0bd"],["/archives/2025/02/page/2/index.html","911d77af98f09ff03f12570efdeb7268"],["/archives/2025/02/page/3/index.html","174513682365a406503a95218078bf49"],["/archives/2025/02/page/4/index.html","92c9b96f3ce7953f6820141a35a78c46"],["/archives/2025/02/page/5/index.html","6b96250d4d83aebbaf4060eafa9433bc"],["/archives/2025/03/index.html","a412206376f91ca22ae64747ed82febd"],["/archives/2025/03/page/2/index.html","80e4db049ea8d0645e6fbaff1517b405"],["/archives/2025/03/page/3/index.html","224cbb044dfd102dc1477606d6fc973c"],["/archives/2025/03/page/4/index.html","de9d168ee6485aeaa7459ef212b44605"],["/archives/2025/03/page/5/index.html","e56c9e285a65b015e909ed7af93e379d"],["/archives/2025/03/page/6/index.html","d071dfe83d0e526f8174e99b483fe920"],["/archives/2025/04/index.html","6c8ca99481ef83f623a6bedfd981c643"],["/archives/2025/04/page/2/index.html","086bcba0d7b48e4355c23f84917f255b"],["/archives/2025/04/page/3/index.html","a82a549815f65144a483e0b415a7a260"],["/archives/2025/05/index.html","38a62191f5c4db11ec618d7544b36a55"],["/archives/2025/index.html","1264ba84664d3d669c746c3106094121"],["/archives/2025/page/10/index.html","42ae224a00d270729f06b3dfd9ab4c4a"],["/archives/2025/page/11/index.html","12c9a3f774f3b7661b7c9a1e0a50d35b"],["/archives/2025/page/12/index.html","57907cc281de29743ac24217eff0d09e"],["/archives/2025/page/13/index.html","a3e7694d9558f55cd6ef9108c9aa9afa"],["/archives/2025/page/14/index.html","22b41baf36faf4bac101a8f8f573de4f"],["/archives/2025/page/15/index.html","35d21f183c278c99e4d98e556299d38a"],["/archives/2025/page/2/index.html","ebdef1ec1bab29f59c957d4b97e62911"],["/archives/2025/page/3/index.html","b9d617d929a2da696920d562fd68287b"],["/archives/2025/page/4/index.html","fbe4286e8b14b3228d0380b56e1dfa62"],["/archives/2025/page/5/index.html","e53f710dd6280a91069dd676270f98cc"],["/archives/2025/page/6/index.html","16eb0d56538281b4db2cd6555097102b"],["/archives/2025/page/7/index.html","d29f720512cb43142174233987db6f58"],["/archives/2025/page/8/index.html","37f376cd36475876326f2ac983ddeb30"],["/archives/2025/page/9/index.html","5bb250dd0ac704e7d647410ad9d7fb7f"],["/archives/2026/02/index.html","0cdf1886cd15456144b25f0997ed7b61"],["/archives/2026/index.html","7e5d02b2f0a163d56656f34c7713e116"],["/archives/2825/04/index.html","7e43f894f9d5a3197ee957f8af0f9e3e"],["/archives/2825/index.html","4ad392f03278ae89f976f2df0535d992"],["/archives/2925/01/index.html","f5ca5f554d59a15f50bb05b362658133"],["/archives/2925/index.html","f4677e6e2a90601cdef2c43ec5aa7e09"],["/archives/index.html","ff11288c2676e08a262e8abcb271940b"],["/archives/page/10/index.html","b381a57752529ffd66c5201c9b27e62b"],["/archives/page/11/index.html","901685015e0515f3ad3fe7ab4df8af46"],["/archives/page/12/index.html","1daf5323f3673ff410ab62f0faf11041"],["/archives/page/13/index.html","6d5241f106c4bc423834332d6c759c69"],["/archives/page/14/index.html","8683d8f0edf10b29d6210def7cb3486f"],["/archives/page/15/index.html","de645abbc800115ba43f991c5d5d8f35"],["/archives/page/2/index.html","eda8dabed95bb1e09b01f05b48d05bf2"],["/archives/page/3/index.html","11d69918a5e86e4cec38f6271767ccf0"],["/archives/page/4/index.html","99436d0e3bf327ae1782a76c6415e713"],["/archives/page/5/index.html","b706c8c53badc6942e115e0100ff5233"],["/archives/page/6/index.html","8e118da97ea173e368e5990b8c8c0116"],["/archives/page/7/index.html","eef06c785adcde5373613b43d01a61fd"],["/archives/page/8/index.html","8894ec8489ebe474b99cfcf00b1b32fb"],["/archives/page/9/index.html","f1d0a1e170763f011256b75e0bebd1b6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","97adaf19650c73e64cf4de493b1a2b76"],["/categories/galgame/page/2/index.html","75a1437bd5cad22ce71a981027f32ce0"],["/categories/公告/index.html","d62a9be8110905cd01c62bb20b52163b"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","3fdd9a9c51b668439977888c32caa542"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","52558c5aba7f7be9cb7480be6d2ad5c7"],["/page/10/index.html","781aae6b0f53a0e79bfccf31e4e795be"],["/page/11/index.html","97e11157433e39d0aa9b1b443333de8d"],["/page/12/index.html","13887fc3bc22293421c6d034310df798"],["/page/13/index.html","8678aedfc534148cf643d72b76fbe20c"],["/page/14/index.html","fada6d45f2b2064883be55c42c015f29"],["/page/15/index.html","3f5eaa36ef4fc96ccf2f3d72474a022e"],["/page/2/index.html","4a111b398dade7a1d723541b88080ba6"],["/page/3/index.html","02cc0a19625333246dd9c5f7ca52adb4"],["/page/4/index.html","54a3f43a6e141a0b0c80f93fb35053cd"],["/page/5/index.html","683b5c2dbcc5d23f578152089e5df1d8"],["/page/6/index.html","62fc5c9066d9bceb4a26e9e120fb8d15"],["/page/7/index.html","b4dddcf280bfa0e8c7a1ffc92af29afe"],["/page/8/index.html","9c3a600e615e321a75296b08ac788431"],["/page/9/index.html","96d0626044a468dfdb9123f965752cde"],["/posts/10c9dd98.html","46670b639f00bd656fd1644a005edbcb"],["/posts/126ebb99.html","e93b213002a4afbff7b5ecfff4dcd3e7"],["/posts/1295b569.html","d594693b8fb3d8f030f4f0c8ef179f3f"],["/posts/1370342.html","1fb6bec122d41ce09212b5ed05af5299"],["/posts/15ef14c2.html","0f57cc9b3e8103d37cfebfb537be3b73"],["/posts/15f3959d.html","2edfa93e0d72eca0d1faf704cf83f0c3"],["/posts/18ab785d.html","058508c7483ce1f967c47d16e542a84d"],["/posts/1d59b71f.html","052f352f23e22450d91a5ec76e34c23c"],["/posts/20b3f3a4.html","954f94a4130a39ee03d2a67930a2c413"],["/posts/245f1c7d.html","b94b90fa2cb8c0e33ac60177e1818624"],["/posts/252658f.html","13e9433146a275264c176498add3252e"],["/posts/28397adc.html","129466350936c1da4f1baae34d53d85d"],["/posts/2ad07f54.html","a60e38635e1dff29d55bb7631cb1c4a5"],["/posts/2b38bce0.html","2f2b79ff9f3087adc8c111a6fbdb7ca9"],["/posts/2c0a6836.html","862a93ea380f06d4c145707976fc1abf"],["/posts/2ce39bcc.html","3dfcbdee5bfd823bf2380ebefe5fcc2e"],["/posts/2cf620f0.html","7479ce237e26e0d1445845e4f15e9b99"],["/posts/2e30fd6d.html","f32ab02ff518963d16af991f1b88ea3e"],["/posts/30a413ad.html","054914c1591ed1826964648f1e00eed8"],["/posts/34292736.html","6dc68b271c625c6bf2e0b28bfdd3c9d2"],["/posts/3468cbe.html","e6394639c4d89aeb3848b19ab4889ee5"],["/posts/39176dc0.html","261abc279ef26deb08d2463f500628b9"],["/posts/3be6a165.html","edaaef5ebeda7c487d3b31001f5b857d"],["/posts/3daf73b4.html","926157e2b382fa11f98901b28747d7e3"],["/posts/3e118dbf.html","01d8bafc383e466c2fb483b317c3301e"],["/posts/3f7d823a.html","6bfaa33fca5c669f573dbadc9b2fc28c"],["/posts/3f978819.html","598b93e251edaca42603ff30f98f9100"],["/posts/41dac80e.html","4a60402ccdbb1e7e2678689f44f05f04"],["/posts/43945723.html","cb9daa6235b4cfb784fa25bf6806898c"],["/posts/44124a6b.html","81b928c1982996fbb3eff8dc775e244c"],["/posts/476a3006.html","68bee735121c0106bad7534d3b52ad50"],["/posts/47abb61d.html","ad0b9295728768dd87db27f05bb6b7a1"],["/posts/4996478a.html","8e6570d97508c25f63666aaebb6c4fdf"],["/posts/4b689be3.html","efad90f541524f0b5816b1518eadbd2b"],["/posts/4cf8423f.html","e65856ccb665e75662b254f827b752cf"],["/posts/4dcf85c.html","f9ee14b0204427be6ad2d3d265cfde3b"],["/posts/4e314e04.html","0f17ced133f6f5822145a6b38aafa834"],["/posts/500cd322.html","bdd9d82701d13a5b8f07106d0d20dbe1"],["/posts/51c9b1ff.html","6b2bfcd7e7a91bb9d668cd91e3049842"],["/posts/51ce68e8.html","fc0bc25689eddfa39ebbc72b5055ea47"],["/posts/52b5b3c6.html","fba11d08fbc482db689c36383c53728b"],["/posts/54f496ad.html","cc7eb5347e0f89fa995c0755399733de"],["/posts/558e1f30.html","cf3fb29669544c4c31701dc467da3331"],["/posts/5d8bea92.html","3d7c7c593ebfc0e4295dc388d44dbebb"],["/posts/5f6e0c59.html","edec07c4913bd809980dfaee80d30398"],["/posts/61a63a84.html","4a87539a29afc55f53f42357a366f93c"],["/posts/625ab7bf.html","c7e6a4fc3fe41472307c2fd8abcbda7b"],["/posts/6336a2f9.html","e949ddd68bdc15668d84aa78bf664e0f"],["/posts/6432d61a.html","1e1e6f9443d87a5263cdd6e060ddc66a"],["/posts/6515f032.html","522f4c25ea0049d2c02b8e728e10b51c"],["/posts/6720ccdd.html","1cad791d74588fd3c7d028293401d37d"],["/posts/6a4b5ac8.html","1eb9be68be9d80cb1aff2b0becb62c82"],["/posts/6aa4177c.html","d2f439442694dadd4bf387bc9265ad51"],["/posts/6b15f81f.html","9b38625a9c2368108ade2f659631d98b"],["/posts/71131d34.html","a06f665c3fbed55efb146cce08e61b5e"],["/posts/742fd48d.html","67812c94b8a27923c7ffe53e43583786"],["/posts/78a8a8d3.html","3516629892e9b19be93d67b210b8afae"],["/posts/7a5ef3d0.html","ae4ec38edb0af43e2cb68c52092fbed9"],["/posts/7b41e1ac.html","a020c64732e82a1f3b983f8cb27c6c5c"],["/posts/7b51011d.html","30f6ca661c871ebf5b9418bf08815614"],["/posts/7e3aa3e2.html","3e942abdc9b3b249ae07641371e9476f"],["/posts/80fe2691.html","cba6d60a1e7b886842d56bb8012bc2c7"],["/posts/81ac52e9.html","4dddd38c4ca2e9c05a8a4cf9b665b2dd"],["/posts/82332d11.html","d7c8346db65a68db8d7c82f2aface849"],["/posts/8486f6f9.html","33dad0e1996f3aeabccc1546c40b576d"],["/posts/849b40f8.html","f9dee270020fe465f7875a8c65017b44"],["/posts/85c51d68.html","367757311a015edfc7891506405340e6"],["/posts/86a6c500.html","9faf1ade2ec7f7220d4eeafc90e9ee96"],["/posts/886f8d3.html","fa3b1c0c616ec6eaa8cee8606f86a04a"],["/posts/8a7cba10.html","e5e7027f8f91b3fa19a6691ddd59c819"],["/posts/8ac11b41.html","6b491fe539cb88162e810f75bab857f4"],["/posts/8c3f2fd8.html","650de9724253befbad86c4d20066fe0e"],["/posts/8dd520d9.html","2b65fddcf413fe170f76f5d2a8ef2bd9"],["/posts/8f555654.html","49759e7ee134b45aebcf2048a53b948e"],["/posts/92a980c2.html","158c1bd4392b53f07905199080e1589c"],["/posts/92ce16.html","78e8bddcb4df46343d95f9e8ba815e83"],["/posts/93e9943b.html","3e0b4e517cda35a2d9e86169c86e6a8d"],["/posts/94d3c794.html","c809faf69d4c254d5ab8566fe64f385d"],["/posts/96b281f2.html","4be7729a910e31647c265fa82cd9abe1"],["/posts/97f50eea.html","1a2a98c312c3b2c4565e473e26b02a22"],["/posts/97fca8be.html","29df43ddc9934a7fd5c6b8666deaf9e4"],["/posts/98662d05.html","72154b3397df22f96ebd8bff1fc5bfc1"],["/posts/9a2f6162.html","6edcc89799aa8e55842f7bcda148c21d"],["/posts/9b22a48d.html","834c7626d4b68c834b4cab028b0aad2a"],["/posts/9cb455b1.html","cc18796bc27df1cab98418af7d03c773"],["/posts/9ecdeecc.html","3930a11d48e1c05c10a6508b5d58fd5d"],["/posts/9efd7701.html","f77e93d7dcc07d0e55ff25837d42b6ec"],["/posts/9f61c1a0.html","26a629b65f3014da098212bcb8f01799"],["/posts/a1de710.html","138683fa5de89746386564d7b9a20e3e"],["/posts/a30eb0cd.html","35b235b1bb4e5ad6f798209687ddca9b"],["/posts/a72f71c2.html","177ddeb2131e18c94457e0abee73fdc9"],["/posts/a7634b5d.html","bf9d390f598fd25c243670bbf3e14bc8"],["/posts/a8c593b5.html","454c10ed1086e7a8b3bec90ad5eeac8b"],["/posts/ad0c1efa.html","744be9b85594ea9d1710d705ab841b7c"],["/posts/ada3f440.html","7f49f802bc45d4fa1fd7b72abc500b5d"],["/posts/af1807ef.html","de58eaf7fa2a070e6993c2a31a1ebe68"],["/posts/b397bf03.html","c3aa3fe83cb3df35d112cdfeb4a118d3"],["/posts/b497b647.html","ccdcb357c451a5e119bf55c9aad234c2"],["/posts/b4d464b0.html","c1a5f82480ef17df3a2e66ea17e57365"],["/posts/b5fb773f.html","d478e68cdb6609a88764fa8249b671ce"],["/posts/b8d46b32.html","d9e86fc604dc3cd1cf6787924a6708f7"],["/posts/c1b2c6c9.html","9f65b501c588792a9b340c5d584ac8a2"],["/posts/c2111cbf.html","b4e5137d92aa62327ea3e6af5042aa3d"],["/posts/c316c2e8.html","9d1e555b1b4ea6ced15725b5a7c6c869"],["/posts/c43e60b5.html","5f6912644a4630f963365a466ed3939f"],["/posts/c497a412.html","d2a937e742ca850fb705752ebbda86d1"],["/posts/c5395ba3.html","edc2f7c374ea359d65949bcb4bc927ab"],["/posts/c5de299a.html","30ff9a9a9cf2dae0e8b45bcf37d83b16"],["/posts/c70bba9c.html","58c289e7fe7fb199553868da8940c5ec"],["/posts/c797535e.html","ac64f6d27f8c1878a49692e26f2d8870"],["/posts/c7a62c79.html","e1df021a698c5c5be09b6fac4a2eb8ed"],["/posts/cae2c959.html","3658307ba5c457839872df6650150550"],["/posts/cbebef2b.html","c6b7fdbad777f2ad3fc9035fff2c3273"],["/posts/cc4c0017.html","9da15a414ec3517f1f6f55edc4cf7088"],["/posts/ce25023e.html","338188f22f63aba290634b8204f06c8f"],["/posts/d2fd4837.html","4a047dd65da1a4ce1fd8cd0a779479d3"],["/posts/d3233cbb.html","a6f65046e1269915804b27a761bb21e7"],["/posts/d3a745a8.html","8951f4c2aad8200e122f6e0782a6906a"],["/posts/d7e940d2.html","c3c9920b6ba0a10b7c89184d88a51d2f"],["/posts/dc815d5.html","404d4ccdad20775ef0c73be74e73d603"],["/posts/de25b0be.html","d5f131ab6d24b6aa313512b79fd65523"],["/posts/e2623b4e.html","1e2090bde85e0ba55fba6fa0f5801623"],["/posts/e3ab6ad8.html","f27a341658524936e86b0b36ddb4e57f"],["/posts/e5018da6.html","168caf7dea0dd81a8e3b966544c16956"],["/posts/e5963272.html","33739ede726f5be3b0073d95ab5bc31b"],["/posts/e5ef4c3c.html","eeb38b2c857f9b6bc07c3328769d1e1a"],["/posts/e624b065.html","46f1fdb9ad033eb46ff684d4635154d7"],["/posts/e7c703bb.html","c386f257512c29e290f1a536ec89918d"],["/posts/e8f14b6c.html","c8dcf4b603f3c6b1cc7ff1196c8851cd"],["/posts/e91abb63.html","2a7ec82dd829ee73523dfcdeb058d43a"],["/posts/ea9a8808.html","8ab158706b64926d3b8c14c6190a0288"],["/posts/eb784749.html","90566f92a9222ff570e8f2bcd1b196cb"],["/posts/ebaf2232.html","1bd19612dd98d65b11357f2a5e85ba01"],["/posts/ed75f185.html","d9effc13a0e0cbf3092afba6431429a0"],["/posts/ee1ed673.html","481c661eca1a3d4144a013a076d14d7c"],["/posts/f0c3ed61.html","5400b003a2cb9cd53b1f1a7eedb55bdb"],["/posts/f151ff43.html","ab30f5f5995e15d1c877b1d7a624de02"],["/posts/f21e7f84.html","e5d5bc7faf8bf4718acfbce29f1720b6"],["/posts/f230b0fd.html","06e374ece3eedbe7cb97e566f2a62f3c"],["/posts/f28a7877.html","acca96c258d93778dc534b2137a0ba3c"],["/posts/f663d5cc.html","7d20ffc16c9a90416b249152cc2f2428"],["/posts/f730ad18.html","5c9b4e2cdd5642cd28c523b476e87aea"],["/posts/fb5d4608.html","f53f5f7b58852a93d4c7b94a8b6f1c1a"],["/posts/fc04d0d4.html","7e097c11a899a5ff6917734aa3254cf0"],["/posts/fc455f81.html","e02cb730c5be1d465493e4faac52d134"],["/sumire/index.html","8ba6e70b2e686c3d97518e1262cb100d"],["/sw-register.js","a7507285c74e3a000e809344090072e8"],["/tags/AKo/index.html","e642c5d2bff67ed387a9678950821fd0"],["/tags/APPLE-project/index.html","284a3a0976c5dd0d8151882a7a9c0167"],["/tags/Ankrache/index.html","e684fd78e1a37e43ad1d9ba8affe3254"],["/tags/BELL-DA/index.html","dd38c9ab850e8be33346ebe176ca8665"],["/tags/BL-Game/index.html","2d50f9152665840d680076f4a4580fa0"],["/tags/Blue-Dahlia-Digital-Creators/index.html","ab47e2feff5fe1b5949184ed48584513"],["/tags/Blue-Line-Games/index.html","e3f3a7447b5912c101d8dad7d942a510"],["/tags/CD/index.html","1845d95d2d618e49f6f5192d67a56475"],["/tags/CHUNSOFT/index.html","0b44002c8c387079b27ca88cdfbaad74"],["/tags/Check＆Stripe/index.html","f88b9447dd81038981cafc9c2c06faef"],["/tags/Cherry-Pie/index.html","51519b69d15f2db34fce319eec87a1fe"],["/tags/Circle-Mebius/index.html","3b05a02d40d6df041810b7619c26a584"],["/tags/Cosmillica/index.html","d3b89472a613d0d6ba2f0e035e440971"],["/tags/CresCENT-BLANK/index.html","aa73da6b4b43f8f48bab274b2d2e9444"],["/tags/Dopamine-Software/index.html","c642e158c56b79723e16ad1464b2eb5f"],["/tags/Dos/index.html","1d4edf722d48383896f3791619b41139"],["/tags/Earth-Well/index.html","cd5044c8468c639a965e79d8b2b710c2"],["/tags/Forest/index.html","28239bb8603bf9fc0ea89d6f11014357"],["/tags/HaccaWorks/index.html","83e8c5fdd82c7dd43cacac6e63141b36"],["/tags/Kanon/index.html","d13dc176c82aa3f1a8ac4e13f7bbe394"],["/tags/MANATSU-8/index.html","1a6e918a4c4d6b4d7637eb5d81347fd5"],["/tags/MARINE/index.html","411d7d7c06e48e47f475592cdd25a781"],["/tags/MIO/index.html","fcbd992320ffdaa4e3430ce732542d56"],["/tags/NAOX/index.html","97d4a16ddf21a9207d63453158fc8c60"],["/tags/Namikaze-no-Uta/index.html","de6d4b706c09da00435cc7cdf99118cb"],["/tags/Nmyu/index.html","5dd19169cbe6a921f182266c1b90f330"],["/tags/O-S-I/index.html","7ee5d6d7c06a366c4c301bbc5bf47281"],["/tags/Omegaの視界/index.html","89df846ed2b3c4084f1b88e4f778900d"],["/tags/PC88/index.html","505f5611f471d81fdfef0c867740ed3b"],["/tags/PC98/index.html","35a4f806cdf6c670bc84fd1490df05ff"],["/tags/Perpetual-Room/index.html","3d42dea457a2b2acdde2a75eaca73583"],["/tags/Pleiades-Company/index.html","8564a51867282201ee79a5dce53a3ecd"],["/tags/Project-Twintail/index.html","e310e68f034aa425a24f64861d3e8e22"],["/tags/RIFF-RAFF/index.html","cdebb82bde49d634e8183744e4e9b7cd"],["/tags/RPG/index.html","861013bf63fcf8c21635d73981a5de58"],["/tags/RPG2000/index.html","2c88566ed4fc93f1cc537bb0728f31ae"],["/tags/Reverv/index.html","4fe046bb0de5be361e8e20bd0b2ccdb3"],["/tags/SENTIVE/index.html","f8636c3c4db5874d9c912625d125fd34"],["/tags/Saihate-SOFT/index.html","4af1ee95d3061d385629634d19595b5c"],["/tags/Scrubbing/index.html","3183f3b2f17253c4fbbeebaa45157fc5"],["/tags/Sky-On-R-imaginAtion/index.html","74c1be17888bfce2eaed75abc0897b4b"],["/tags/StrayMoon/index.html","8ab74c5f7b31d123e2ae3d76c343d48c"],["/tags/Studio-Bu-Sa/index.html","3bd797c629402f50df1a2af72611317e"],["/tags/TRANSPARENCY/index.html","d621712ddb7afc91c133bdbb9e64d8a9"],["/tags/ToHeart/index.html","d5c422b6b76ee2b2c6f02f0e4ba87a8a"],["/tags/Traumend/index.html","2d0a093e2cf3607e592d68a3abd6c92d"],["/tags/Witch/index.html","3574dced869b750e0f04e6f4b17cb813"],["/tags/adonis-project/index.html","ca7abf0c90ec76b8c448e455bfffd966"],["/tags/capriccio-suite/index.html","991f465498a89b467160c4eb8131540e"],["/tags/flash/index.html","1128bc72ce44509dfd62975c4cb0c87b"],["/tags/galgame/index.html","a8fe9445ff63875c56e77200fb21b56c"],["/tags/galgame/page/2/index.html","84678efa485a32a187af1d00c3e74d5b"],["/tags/gal资源/index.html","d6f9e0b70f329ee8a3217a63cc86ae43"],["/tags/gal资源/page/2/index.html","d2e397a8367a1efc89cc59418e60fd69"],["/tags/gal资源/page/3/index.html","80d672ebcd792dfbca9f57fdf63fdbc4"],["/tags/index.html","d66c1ce3c350e5a84289bc2ba56986ed"],["/tags/m-kz/index.html","e8ccb43ba278da6d5949d8b9b0c3b621"],["/tags/purgatory/index.html","8a62d0bbb2d6c9b3129106483e9640ea"],["/tags/rkr/index.html","6993717ddc06de60386ebf94f87994f1"],["/tags/team-eye-mask/index.html","e5c10adfaa60c80c219ac13a94b62e0d"],["/tags/ありすくろいつ/index.html","4a46b075c434cbecfdab33c9a3882f9b"],["/tags/いつものところ/index.html","443880774d56c376d3e0aa338627f0e8"],["/tags/きつねみみ饅頭/index.html","3d74cfcfe1ac281ff8ab16421b24cc51"],["/tags/ねこねこソフト/index.html","5c3e5e579aec3d76d5ac18661e7185f4"],["/tags/ねこバナナ/index.html","f392e64c913e7c17dd2943627e90ec01"],["/tags/はちみつくまさん/index.html","50a6f319b2d4df4a75a34002eb3f0b05"],["/tags/ろりちせ/index.html","233e1d205e9b9e5afef4055852c93aec"],["/tags/アイル【チーム・TATU】/index.html","5465b32bbe2b3b0a8ff9001675087e31"],["/tags/アクアポラリス/index.html","665e8f3f2cd1e6738977ba86bc829fef"],["/tags/アークシステムワークス/index.html","288eda3a18b6eb932ef45ef904532467"],["/tags/ブロッコリー/index.html","f8e1b1ed89cdccd438fc783c56c196bb"],["/tags/乙女/index.html","d7c0e305d3c315b40b052203478733fa"],["/tags/乙游/index.html","1720c99f27c3d25ccffd54c01516db3d"],["/tags/停产/index.html","c4ce64438ea32d27e27d23901c97f997"],["/tags/公告/index.html","39ff43ea106149e89c75c9b4b9cffb47"],["/tags/同人/index.html","9dfae28274bf13d89b01f392dd3d6400"],["/tags/堀井雄二/index.html","04b60a6cf6a89423821d4bab8fcc4e90"],["/tags/外海なおき/index.html","9c977e00d76054de59b0da47ffbf63e2"],["/tags/女性向/index.html","85cbd82c8b9d92406d8e431a36249e4d"],["/tags/御茶ノ水電子製作所/index.html","b4839da8d4a72200ed28a02101ec2d8c"],["/tags/月の水/index.html","c3929f2e9791d8a8481b2fc50e65f868"],["/tags/桃野衿/index.html","315400c06d3a1748a5024da85350ace5"],["/tags/機械式少女/index.html","f772ba1a9602c4bdcf3d9c0fb545b9a5"],["/tags/水仙/index.html","00db50677d13ff4e4530b3cc57495127"],["/tags/汉化/index.html","b33945d61973b00baca37bdde1aae958"],["/tags/熊月温泉/index.html","4cac4117d964e927fa7c5de33de59373"],["/tags/片冈智/index.html","7efa92dfebb64e1a0ef8b23b5aa45cef"],["/tags/片岡とも/index.html","ff65dc72efe278051b2e3863dcde7d64"],["/tags/牙の刻印制作委員会/index.html","a9c0e1768a6583cf547f884d3fe7991a"],["/tags/牛カルビ定食-FLAT/index.html","013e24d8d2ed241a6ed60aa5c0733d62"],["/tags/牧尾屋/index.html","fd2420e609b4204edc8bdec15ed40fc5"],["/tags/犬茶屋/index.html","5c27381adcdcaf20ba0b8961aa0c666b"],["/tags/猫猫社/index.html","dea93ecac23926efea1fc84277d32125"],["/tags/王宮魔法劇団/index.html","5f2e4e482d4a703de4db756d5f9529b2"],["/tags/画集/index.html","73ab985d5cafe9bc7b7c6365e10768e3"],["/tags/索引/index.html","0b4d0764ead1f099135b7942bbfefed7"],["/tags/缺失/index.html","ca6ee9e067b6dd1c8b15a9552691da48"],["/tags/自购/index.html","e2f418c41043b11a02048c494ae77ebf"],["/tags/茶葉☆姫/index.html","b33a42934fffe5366dbb21360242e2eb"],["/tags/郷愁花屋/index.html","842b5782e64d93959f321ec69a7978be"],["/tags/閂夜明/index.html","d6ac3a8bd40efaf1da43f5711e70331c"],["/tags/音乐/index.html","13c644c78e1398d292b98b59e8d93a9e"],["/tags/音乐美/index.html","7b5aa5f93a2f549e0462a78e2fcb31ff"],["/tags/黒†救/index.html","8a44be39af36e27f36b5b134ae249386"],["/tags/黒百合っ子大集合/index.html","9054d5a99a2598670404bdf95a4059b6"]];
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
