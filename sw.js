/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","1fe159d95fe83c02f1eb971456cf6d00"],["/archives/2024/04/index.html","33094fee14902ec205d156fcc622e123"],["/archives/2024/index.html","e4b9f8dae5dbdadb4fb57729b9b8acd8"],["/archives/2025/02/index.html","ebb6307a3eba775db4039c5ce773d4a9"],["/archives/2025/02/page/2/index.html","6854e23c18babca068a76194c3e767a4"],["/archives/2025/02/page/3/index.html","f6c6a13b72283b824e76bf1d631f59e0"],["/archives/2025/02/page/4/index.html","d17680a7a0b9c62f71fcc3ddfdc776d9"],["/archives/2025/02/page/5/index.html","b4380aa4cc4bc3bfaf73622917e55f0e"],["/archives/2025/03/index.html","8b4b9d94d040044431d9e0cc3d25c48b"],["/archives/2025/03/page/2/index.html","d2c5d698f514662834865c19c5a15076"],["/archives/2025/03/page/3/index.html","c2d638c101227dd783a9a472aa2f144b"],["/archives/2025/03/page/4/index.html","db2e53a628baf8aa1e601b38091c02bb"],["/archives/2025/03/page/5/index.html","4430d40c5ae987701946d6d6bce00239"],["/archives/2025/03/page/6/index.html","567f07e319a181df5d88a93c5cb73bf1"],["/archives/2025/04/index.html","156fc4857fd4e56896563729ff9a9590"],["/archives/2025/04/page/2/index.html","284b7fd84fdd3c0d651a43bd8537cb8c"],["/archives/2025/04/page/3/index.html","29a1c6d7d14e5dce034502708772c46d"],["/archives/2025/05/index.html","8c8b5781f4e48d6a5818e97498424f59"],["/archives/2025/06/index.html","63fcd1b8d42b895b2e60aca070c7adf6"],["/archives/2025/index.html","d62228302d48a9b3f2ebbb27eae7f9fe"],["/archives/2025/page/10/index.html","e31802356c06e7b6d75b9742e200a167"],["/archives/2025/page/11/index.html","daf5557fdb2672fc018ec1eba7c8c382"],["/archives/2025/page/12/index.html","bef3a82f0dd865563d2b7e9d6462d368"],["/archives/2025/page/13/index.html","28831988f878f60668f90b4149de740b"],["/archives/2025/page/14/index.html","04c21820a7d03e1e338aaa4b0e4e5095"],["/archives/2025/page/15/index.html","fca968aec56e04bab708a051234221b3"],["/archives/2025/page/2/index.html","8416e3a2a50a258d38a32544a1d6855d"],["/archives/2025/page/3/index.html","dbf7ce84066b54e1b2810cbe54e45b83"],["/archives/2025/page/4/index.html","9ebda2e9c7e2391b38de2ef8af4d02dc"],["/archives/2025/page/5/index.html","57f0e3b2a5009fff29cb864d4955f431"],["/archives/2025/page/6/index.html","e8577b44c2fd34c7c63bfba65735bc21"],["/archives/2025/page/7/index.html","afd082ee71fe33bbc4d7bcd9f0755eb6"],["/archives/2025/page/8/index.html","f3233c0f2168a703397224b0c7e40859"],["/archives/2025/page/9/index.html","d58489f4f135ae0656c59ffcd456cf84"],["/archives/2026/02/index.html","87a0e5bcc4f844c07e4e1971690afc01"],["/archives/2026/index.html","e42b42e2b24b4059495bd207e59c7882"],["/archives/2825/04/index.html","c15a057bba114618ddbbe1a040f11550"],["/archives/2825/index.html","7b03256e1417263d8fe979b080e67c2e"],["/archives/2925/01/index.html","4e4e6ccfc534b07d748dbe0221ade893"],["/archives/2925/index.html","1ba726c935446e3d78758b05f39c7d02"],["/archives/index.html","43534e11561d9945a3e04b008d5ec7f9"],["/archives/page/10/index.html","3ef4c57017b294f77823b9e7cbf1524f"],["/archives/page/11/index.html","202a2baff7b50ce3ba1cebf189d5f4e7"],["/archives/page/12/index.html","c1c24c5a856b2194282e123d546e2cac"],["/archives/page/13/index.html","d183b77240f02668056627ef847474cc"],["/archives/page/14/index.html","a53e7c7f366f574a5eade99eb1f7ef5e"],["/archives/page/15/index.html","759c3cb95f55220f1fd4f03da722b64c"],["/archives/page/2/index.html","8a4919820f607e07336ac34ed0299e09"],["/archives/page/3/index.html","be9424434a47ba67156d16a64474d5ac"],["/archives/page/4/index.html","542cd841f95d124b54bbd570f9e6bde7"],["/archives/page/5/index.html","beaeb3727d43c6ffc87b8a2eec60cd3d"],["/archives/page/6/index.html","1c60c4b59c2715c12ea3771aa1df7b14"],["/archives/page/7/index.html","8a0020c02f855ad2c1494aeea981d018"],["/archives/page/8/index.html","b2a67ff7a2005b96c15ded79915e14bb"],["/archives/page/9/index.html","92feb93f3321947ca40ccdd9f8cce56c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","dd6d146f3fb3249b9189350a2a4d1a36"],["/categories/galgame/page/2/index.html","36563776fd9e91755d6039273b97660f"],["/categories/公告/index.html","349d466935064b237803018ff18a9cd9"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","c96cc942d1bae4bc349074c203944dde"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","de6a8c561e237c09a8c68d2b5c5be28b"],["/page/10/index.html","8b2ea76f89970ec11ddcb62ff36d3e20"],["/page/11/index.html","6b34a822150c7ef19d8a79f60d0ca679"],["/page/12/index.html","b15750608dcc6811f9d5273e3cf0939d"],["/page/13/index.html","2d84ecac9547e52bba49c0c125b73e1a"],["/page/14/index.html","11e0117d0c1fc9fcc836b06b899c2b56"],["/page/15/index.html","81b0a564707b1ba0ced1af3b41837a3a"],["/page/2/index.html","f5bafa5bf34379b622b42730b0d6a22d"],["/page/3/index.html","9f248a0a9362cdd602dd7507a36f182b"],["/page/4/index.html","fdf2ab7b57b14e8758ccac2a941bcd29"],["/page/5/index.html","2db4687ccbb50c399b030b4bef78a76e"],["/page/6/index.html","b1b5a48538c09be73842ed299c3eb158"],["/page/7/index.html","4a7f233dd50badab005d2f75dccd7fab"],["/page/8/index.html","968510a6d0e04538c4b389233cd0a5c1"],["/page/9/index.html","4b83783a283865d63476d20cdf641708"],["/posts/10c9dd98.html","caad3b280cb32a1b80f3a32488b9e27a"],["/posts/1295b569.html","cce43186e7d9a31be65bde8c5fdc4647"],["/posts/1370342.html","f3fc4428e022352ca5a92f293160ac7d"],["/posts/15ef14c2.html","1ab0dffbebc8bcde2b893e990bf8b593"],["/posts/15f3959d.html","15fcbcec5df5010591bc76e182dc838f"],["/posts/1840d617.html","df3c88ce97a1af5cd629ed0593299f30"],["/posts/18ab785d.html","7b6125d3738ac273cf290aed266fce2a"],["/posts/1d59b71f.html","5d6a44cf275fc0bd6adf6e79ef655930"],["/posts/20b3f3a4.html","492ddf50dde2fa346d2a584e1178daac"],["/posts/244daa7a.html","787248dbd9e12575fc44b500ad7c2577"],["/posts/245f1c7d.html","3643199450c77974a337cc2338b006a7"],["/posts/252658f.html","b2402ceedc22d92873031f513046e8c1"],["/posts/28397adc.html","aab62af60d30bc72d87d6eaa6a0eef57"],["/posts/2ad07f54.html","c7e6d1d128a7adea4ff5610f6b6f719b"],["/posts/2b38bce0.html","f088a8196ac66eec28906f7e97f5bd93"],["/posts/2c0a6836.html","47083b379b7aed5200b021b4e397142c"],["/posts/2ce39bcc.html","0500d482a0306cb4f3db754239ba07aa"],["/posts/2cf620f0.html","8cc3422c321527016ea499a0549790a4"],["/posts/2e30fd6d.html","122b049af4c0eb2ec3a47511a47dda06"],["/posts/30a413ad.html","e7512f9ee5020d8c017fa2add473c480"],["/posts/34292736.html","d25aeab2f7225900b5cf474fad3e3d47"],["/posts/3468cbe.html","e4137378af88eeba0751e13ec1f4e8ba"],["/posts/39176dc0.html","9018b0cec4fc51f427e88a90caff4d14"],["/posts/3be6a165.html","3d9a2f0f6436309f00135bf8aefb3288"],["/posts/3daf73b4.html","c359629ebcf45ec2ef8b694ab3dd39cd"],["/posts/3e118dbf.html","7a9780407e943a9deb23d13b23853c02"],["/posts/3f7d823a.html","7df53d9d7be054a98be5add29bde97e4"],["/posts/3f978819.html","7de2e28c655264b15e155d7346a837fe"],["/posts/41dac80e.html","834389b12c84bb1e9b2bb865204f84a5"],["/posts/43945723.html","57204132676f70663cfe27eea739179d"],["/posts/44124a6b.html","2da259033d56a3e3d4ef412d2fd27740"],["/posts/476a3006.html","c6def8b7ed66766faa02dd259bba4407"],["/posts/47abb61d.html","9645d6518845a96c91630a49021eb177"],["/posts/4996478a.html","933e7673e8c5217fa94d0d52fee689e2"],["/posts/4b689be3.html","c402e5d8dae0d7e3d1b33ae4c3badfb0"],["/posts/4cf8423f.html","5b986d3c4a907d7281706ca0000bb08c"],["/posts/4dcf85c.html","a722d9bbc1ac1cc027be3fc46349355a"],["/posts/500cd322.html","d628c2320e7fd9b079c423ea004bee8b"],["/posts/51c9b1ff.html","246f4f1791c7de96c03447586ddb21b3"],["/posts/51ce68e8.html","2e1462c40329b8e06e5de29ae08087d6"],["/posts/52b5b3c6.html","b1d6ad639dc699f8c5fac7506eeec4d8"],["/posts/54f496ad.html","113872a909fa20126ff99095157e22dc"],["/posts/558e1f30.html","6db6fdfc34d6ec80623bc10d91bccdeb"],["/posts/5d8bea92.html","2b73ac2d90a8ccc522ff428ebe8721b1"],["/posts/5f6e0c59.html","33c02eeec24b792e7223b5db6ab6ebcb"],["/posts/61a63a84.html","da552939be6ef1612571cccf68a4978b"],["/posts/625ab7bf.html","882c2b81d9bbd54bb15ba4a28df0fafb"],["/posts/6336a2f9.html","ad7e83a144d5fd9272d239243655b8d4"],["/posts/6432d61a.html","96cfe1c200679fe934de18f7e34367d2"],["/posts/6515f032.html","3f6d5ae58e092a391230c64f49c73f7f"],["/posts/6720ccdd.html","181fd851f0d21c36428c92715d57dc13"],["/posts/6a4b5ac8.html","d42669619754da8562ab7c62ad3c0b13"],["/posts/6aa4177c.html","739086c625e7dabc5e79b1322c9f9221"],["/posts/6b15f81f.html","781b58ec0a5aa0611b25482a1219c39d"],["/posts/71131d34.html","7a65afa7816d2e15eda804cabb184dbb"],["/posts/742fd48d.html","e0003f4ca67f7e54e9e9d3a411c73ae2"],["/posts/78a8a8d3.html","efafe9cdd595cdda35882ef3913b8c8e"],["/posts/7a5ef3d0.html","f005c49d77d78af7da4ab959ab4c9241"],["/posts/7b41e1ac.html","f90309dc9a7675b5ddb25d81d8ff6a64"],["/posts/7b51011d.html","51f62f30933e4e023afd052466c6c94c"],["/posts/7e3aa3e2.html","8e19f03daabdadab5266358154c25a13"],["/posts/80fe2691.html","f856e71b38f709b58ffb23925f29f847"],["/posts/81ac52e9.html","97d423dfbbd7e15ad8b7614808a5002c"],["/posts/82332d11.html","737ab94c396ec75c3293eb430f09272f"],["/posts/8486f6f9.html","5bac6e435fcae20a2a2226f9278c958d"],["/posts/849b40f8.html","264671aa0ce9615d654dfffb57186a4f"],["/posts/85c51d68.html","b849fd04967c00964620ff8ae4df24d8"],["/posts/86a6c500.html","15aad17069d003bc3b7177f9a27b9f01"],["/posts/886f8d3.html","079f320dec8ee29800ba14b0fc3c883e"],["/posts/8a7cba10.html","73bd91751fdf23db6d1f10574f4dde05"],["/posts/8ac11b41.html","5e50d63a6ff06dd71a7d6841f0a572fb"],["/posts/8c3f2fd8.html","1bb20b60e04d4e3057a1f73bacca2f79"],["/posts/8dd520d9.html","5800c76560838f0e43e2bb4336b3b53c"],["/posts/8f555654.html","444749004c2f679f0217994b0e6aabc2"],["/posts/92a980c2.html","881d0d4cbead2df05915df08862513cc"],["/posts/92ce16.html","8a54d03c4f9e9b1dc3f9053bba131962"],["/posts/93e9943b.html","dd74a7b0857fbcc385d0346d8c6b2c9c"],["/posts/94d3c794.html","969200c7dd3aa3010113bd820282d91f"],["/posts/9606c2fe.html","79d0abe98e51dee9443b60cf620cf8ec"],["/posts/96b281f2.html","10eb61cd889e0e4f309a3d483a548a86"],["/posts/97f50eea.html","a314539aeff74b908a610d228e8c5c4f"],["/posts/97fca8be.html","4f3156e13c2a1e7feeed2360e7c4c224"],["/posts/98662d05.html","2832e35ffb341e264a1a80db44aad051"],["/posts/9a2f6162.html","6d13c44d9841a5376bc00c0cdc94d46a"],["/posts/9b22a48d.html","9952455d4497372ba3d75027e88982b0"],["/posts/9cb455b1.html","e0ee997a4c17806518f71a96fac6192f"],["/posts/9ecdeecc.html","427ed0c689183ff5026778bde8813eee"],["/posts/9efd7701.html","cd63893ba4e506c6885e080b4a442809"],["/posts/9f61c1a0.html","5a86d9f8617ebcdaaf0124ebdf18c4a0"],["/posts/a1de710.html","d85a522833296e313dd3fd97ce6c67de"],["/posts/a30eb0cd.html","00bde32165c0f50627bfb40f9a1bd428"],["/posts/a72f71c2.html","d528c811485de9a2215c26696ad94e00"],["/posts/a7634b5d.html","e6a0a8cbe5e47910d7a5d30961be856b"],["/posts/a8c593b5.html","b5975d3dd7b24d51f0e722cb4add94cf"],["/posts/ad0c1efa.html","d8c16043451835e23764634585237f1a"],["/posts/ada3f440.html","545319020aa6f1f03d96bbab8243a6aa"],["/posts/af1807ef.html","885144ddee7a01c7124b589b5c3fbcf0"],["/posts/b397bf03.html","80e2adae89e866bbf9df15bcf99f7239"],["/posts/b497b647.html","68b57654beaf6e840439a1b0f4a7d990"],["/posts/b4d464b0.html","89e863c581c198899e6ee158df468b7b"],["/posts/b5fb773f.html","3a2493c81e98ba946a7bb9fad14a09c3"],["/posts/b8d46b32.html","4996e2f01da202bd5ed26d970911fae7"],["/posts/c1b2c6c9.html","e664547f7990c7ec66d28f1e990d2562"],["/posts/c2111cbf.html","d78b31efad8b22584df32e970ab2c93c"],["/posts/c316c2e8.html","ddf9300f617f3640058404736c021c64"],["/posts/c43e60b5.html","ce12a3552c31255b90d66f2cc4e8ef03"],["/posts/c497a412.html","0d52e62302ec733c9fa96ddad3c83d1a"],["/posts/c5395ba3.html","0b9ddd145fc608e726b502ac994539d0"],["/posts/c5de299a.html","830d665b0d2d3d94b2b42e39dc6b3029"],["/posts/c70bba9c.html","bb4721b971b8e95a1d0696cb0e7646bd"],["/posts/c797535e.html","39fb8365dfd9e9556670495356d801e5"],["/posts/c7a62c79.html","a5f3f97431a10d762b0b9cfa37cac586"],["/posts/cae2c959.html","caf05abc54629f59cabc4660d4dbaebe"],["/posts/cbebef2b.html","aa4b175136de5955848dd05a8026c0b6"],["/posts/cc4c0017.html","193232234a8a85c653bff4ff15d1e1a0"],["/posts/ce25023e.html","e777df4503c3895c368ff012b98fea31"],["/posts/d2fd4837.html","5bcd5c8e2369d352682b2c1a900279cf"],["/posts/d3233cbb.html","c08056f8f1bda75be54d0f16de699673"],["/posts/d3a745a8.html","0b8f1e03ca17bfcaee6ab8db51d8d7ef"],["/posts/d7e940d2.html","2e9b3a038c31e400f1682d9fb4e45887"],["/posts/dc815d5.html","6f8ceb3ea9de7c83fc4d4ae4a7406a0a"],["/posts/de25b0be.html","83b6dc5c5d46efd4227efc3f8e90df34"],["/posts/e2623b4e.html","bcf7eaa8a03333328eaa26bd6b0e65b5"],["/posts/e3ab6ad8.html","a420c65a25a80b86030b9817025e4f9d"],["/posts/e5018da6.html","05f1af2d970d4af52311467c090932c9"],["/posts/e5963272.html","2cd12c525465b8ccaf7b1149c33fbfef"],["/posts/e5ef4c3c.html","dcfa15843bcb20f23a79fcb6e1ebb0f5"],["/posts/e624b065.html","1b26385a7405dd4ec952ee8aa68139a5"],["/posts/e7c703bb.html","ed11d121a9c6ba1b959781b7091e11b0"],["/posts/e8f14b6c.html","f81f3780dc63d2cc1d933d8a9296c2ed"],["/posts/e91abb63.html","8012b6a46815c33ba9bad37f7195d359"],["/posts/ea9a8808.html","b9b21e89906c7fc960bba7f2bfa659b5"],["/posts/eb784749.html","35d08d552d49c5af457ecdfeaf4101c8"],["/posts/ebaf2232.html","983b5baacc5cb1f18b0d6b9f358f1f9d"],["/posts/ed75f185.html","439c1545c05dba9489bebee94e10fa37"],["/posts/ee1ed673.html","bf9ea53066f0d1dab176d20d41d37d59"],["/posts/f0c3ed61.html","c44ee3746626db07603e2cb1beb73b4e"],["/posts/f151ff43.html","094917b881dc1f73893618777fb1601c"],["/posts/f21e7f84.html","402093887ed8e95e976ce97a10d7f90a"],["/posts/f230b0fd.html","24c40ca702275e0c3708b041358790d4"],["/posts/f28a7877.html","c07facff77c97af43b15f641c178e015"],["/posts/f663d5cc.html","f33ea71c00ef432f2aca76a41c464238"],["/posts/f730ad18.html","55e9dcf3d4d018a8db7a6210ebc76a61"],["/posts/fb5d4608.html","a1c5d1b40cdd386e8121d686ca388232"],["/posts/fc04d0d4.html","6c617d641a72042ba0010897457bc993"],["/posts/fc455f81.html","3f5974f0b6727bc72d0c74344870099e"],["/sumire/index.html","91161e00c5f85a8755b0ba2409df35da"],["/sw-register.js","59393c1fbf920c307e0e178d5949689c"],["/tags/AKo/index.html","beafbb213cc004acd4fd8e104e681123"],["/tags/APPLE-project/index.html","6bea91ad892b2e71d77bf717bb607e6d"],["/tags/Ankrache/index.html","47d5a5f843f86069aa091b1beaa2c467"],["/tags/BELL-DA/index.html","47d6ae0a3e1ab844f1d938429a8cab36"],["/tags/BL-Game/index.html","f19b17c77992bcef40c656f8ecd03466"],["/tags/Blue-Dahlia-Digital-Creators/index.html","effd26631cc35fcecd012be6ab50a155"],["/tags/Blue-Line-Games/index.html","68cc399e654dd7d60b2a96be7a7b98c9"],["/tags/CD/index.html","85320d9d71154e2b2f86572cad8b536d"],["/tags/CHUNSOFT/index.html","3191c595fa0b08bf6799dad733953542"],["/tags/Check＆Stripe/index.html","ed694d430d637429a9bc7981e25ed77f"],["/tags/Cherry-Pie/index.html","3b1d4c6cb49046133bf1b445ff5c7cef"],["/tags/Circle-Mebius/index.html","624f682bd0522225fde17f706dea8194"],["/tags/Cosmillica/index.html","de801a8defae90b01687a8d442952cce"],["/tags/CresCENT-BLANK/index.html","98e5d6d06784e0edad7034a0ea44bb8d"],["/tags/Dopamine-Software/index.html","e6c3a470a1bdea1636b6516e229a71a9"],["/tags/Dos/index.html","1448c0e470c0fb3f58b09b31024d4794"],["/tags/Earth-Well/index.html","466005c6bd995daea021b4e70f2e0bdc"],["/tags/Forest/index.html","346013cf005c07e40c18daf40d48d20e"],["/tags/HaccaWorks/index.html","1ab8d3a5752f8deac25bcbb7b111d1f9"],["/tags/Kanon/index.html","9c652cafddd9046c21f0fe5d99a31d25"],["/tags/MANATSU-8/index.html","37ca7e9f050e49fd6b14cfc9a66966d6"],["/tags/MARINE/index.html","64f358570edc9e3a38ffcba0aedc7d80"],["/tags/MIO/index.html","120a04d1c359dc052f00d861ea45bba8"],["/tags/NAOX/index.html","78e73b834b10d496e1a0d7822c54651d"],["/tags/Namikaze-no-Uta/index.html","5e387387d146f1ead019c2611058ea26"],["/tags/Nmyu/index.html","25d434309f2676da6f305daa1aae9e53"],["/tags/O-S-I/index.html","a13c38244508bee24353b7f6d8bd32bb"],["/tags/Omegaの視界/index.html","ea8577a74979997ecc6eda1f67826483"],["/tags/PC88/index.html","d632fd8c715843171c4f3c381159076a"],["/tags/PC98/index.html","32dbf1fa1ec90517722e63ab763c0188"],["/tags/Perpetual-Room/index.html","5541153aa0fd318d22319fe37611579e"],["/tags/Pleiades-Company/index.html","233a57672ff7e084eea5a1cf3f6c38bd"],["/tags/Project-Twintail/index.html","45022f5e103e17b81630f42e9a94f4e1"],["/tags/RIFF-RAFF/index.html","435d8edccbb00612d55dbf42f094c9a5"],["/tags/RPG/index.html","680b32d4507c453b1e16f24bece7e871"],["/tags/RPG2000/index.html","97ff2960541182ca7a3f8521c8cab699"],["/tags/Reverv/index.html","6cd201b1654c672a5f532619e54dce1d"],["/tags/SENTIVE/index.html","86859df61451478163427983ba486a1b"],["/tags/Saihate-SOFT/index.html","bab7908cc2f51e81904f31991b74d4fd"],["/tags/Scrubbing/index.html","c732d2286bcca22d2834a44de7f077ec"],["/tags/Sky-On-R-imaginAtion/index.html","2fb1cb6525cab8daf35270fadf48128d"],["/tags/StrayMoon/index.html","ecfe030ed2eadfb1d0409631cb19f99d"],["/tags/Studio-Bu-Sa/index.html","f310b804e23e67b93e059ec65c452d36"],["/tags/TRANSPARENCY/index.html","3311fa72adcc2a2c0b0999decc5c58f2"],["/tags/TRANSPARENT/index.html","8ece62ae11d80e24381dcff8af4394b3"],["/tags/ToHeart/index.html","701a47ef356ab4665fefee73a5d9b167"],["/tags/Traumend/index.html","71e5a47dd2d7df2e8ae293de27ace339"],["/tags/Witch/index.html","53398dbd3745a5eec091efe3eac040df"],["/tags/adonis-project/index.html","f2549d481307f62212c6571f86ed310f"],["/tags/capriccio-suite/index.html","241a9a7f2eea79c46156eebdcf631125"],["/tags/flash/index.html","6f7679c3e5fca7c6afc94c2efca87a1a"],["/tags/galgame/index.html","cadc93c1ccf5c348db06ba4bfb0b4dee"],["/tags/galgame/page/2/index.html","f1be028ce0b56352c7181a5c336db86c"],["/tags/gal资源/index.html","1d1b4e751f1dc46c794d9bfa4be89a31"],["/tags/gal资源/page/2/index.html","a8d4ce4c8be7d971262f570810d96588"],["/tags/gal资源/page/3/index.html","d0e523159b10a0d42d4ed224444ee82f"],["/tags/index.html","ba354afc207cf21669c5c963fe8d5044"],["/tags/m-kz/index.html","2c4c8973a266f84cdc406fc2f0da31f4"],["/tags/purgatory/index.html","4c9fecf3926e026069a097d42885eddc"],["/tags/rkr/index.html","8b62c5315a7013925bf073705f7d66d6"],["/tags/team-eye-mask/index.html","a258f70fbf9bc46ca123a8fb2a8b791b"],["/tags/ありすくろいつ/index.html","9f85f3d208f74d314d8e7e316c3c0a18"],["/tags/いつものところ/index.html","607554f300a7bf748e478a02c647fd5f"],["/tags/きつねみみ饅頭/index.html","fec292dbb829303843bf05b12f51cdcb"],["/tags/ねこねこソフト/index.html","55439bec1762e59d13c986518037b942"],["/tags/ねこバナナ/index.html","0b26fec7dc01c8caaf76ab44596063d6"],["/tags/はちみつくまさん/index.html","3761f7eb8993de2acb063974fe0cf38b"],["/tags/ろりちせ/index.html","0329b4ad92f91772196e0fb8ab9ef2b1"],["/tags/アイル【チーム・TATU】/index.html","32e2ebbb1ed957db40981446c5c32e41"],["/tags/アークシステムワークス/index.html","7b9a0eb48c8fd6b6a06404467f3d928b"],["/tags/デジファミ音楽堂/index.html","8b535ec888f3044097d713022dbad71b"],["/tags/ブロッコリー/index.html","3372dda43020d44888b87a8df7e7f565"],["/tags/乙女/index.html","49839e84e93b552ae9768b1df0984af9"],["/tags/乙游/index.html","d1daf58bf976dfe55393367a4ab3f0b1"],["/tags/停产/index.html","b3b526ab0fab5e2d3ddacc4155cd84cc"],["/tags/公告/index.html","2fb1e5945be67b4b2e52bc627c3073ad"],["/tags/同人/index.html","5c9d1f28ea047d49c6809456ab83547f"],["/tags/堀井雄二/index.html","772a3c37f843b18cc846d556cfa578ad"],["/tags/外海なおき/index.html","d8a43bc0f81ed6d9e9680c093c75a13d"],["/tags/大熊猫/index.html","f13e0e22646e8042cefdec404b218fa9"],["/tags/女性向/index.html","d68fbf53611e2f796f9731b366bc2abe"],["/tags/安装/index.html","7f57211a91b5d387cd70c634fc883719"],["/tags/御茶ノ水電子製作所/index.html","5c3d5574afef31097982b1ebe7a5259f"],["/tags/月の水/index.html","6e4a836b9ad664f1bb78b09c8b4ca9fe"],["/tags/桃野衿/index.html","b490ef96434f0a77d67036884d0aa1af"],["/tags/機械式少女/index.html","7cfb1dbdcd63916473ebe538ea6eaec4"],["/tags/水仙/index.html","89a0e92e8b6f9e8b9bc967ee59a784a6"],["/tags/汉化/index.html","4bc62d0aca09f785cdfa2f2364a126c0"],["/tags/熊月温泉/index.html","5205e52c70e222440ddf424453f6db2c"],["/tags/片冈智/index.html","725bd724fbd4aa4de1baf175d8a4a599"],["/tags/片岡とも/index.html","ea8b4a7f389983e0ddbdd04ac58adca6"],["/tags/牙の刻印制作委員会/index.html","cfd1d0c970a0ad971e5c64e43f4df77d"],["/tags/牛カルビ定食-FLAT/index.html","e682ac1559af8c06436939a7701e6805"],["/tags/牧尾屋/index.html","c374e5089c9d2b9c12101a22c18bdd40"],["/tags/犬茶屋/index.html","5db4c1e76396ef8ccd335dbd820d0eeb"],["/tags/猫猫社/index.html","19f0da05b85ee8f778a2e0e1b8e2471a"],["/tags/王宮魔法劇団/index.html","e0f0b296311081bf8306f5fee7d4b41a"],["/tags/画集/index.html","986bc24c38486b62dbb10e6935c311aa"],["/tags/索引/index.html","ac9a2e753257e82f529e9fc022b41fc7"],["/tags/缺失/index.html","a36675584b4b4f6972b15b879377fb22"],["/tags/自购/index.html","e0cba75a526502f0a1da9ddeab71bf4c"],["/tags/茶葉☆姫/index.html","5c5ea3d838723f505a267f6ee053b8db"],["/tags/郷愁花屋/index.html","7ca506a99d10fea5d178ecb20d47f334"],["/tags/閂夜明/index.html","38bb9b193e4da8874f65d466797433d1"],["/tags/音乐/index.html","6c1d8f86514c29014325b87f9fe069e1"],["/tags/音乐美/index.html","f28eed88a7637728b83e6831ebb3c0ec"],["/tags/黒†救/index.html","6e9b669ae3bf6d82ee7f5b23c73adf0d"],["/tags/黒百合っ子大集合/index.html","8ceb8e3ce7aecb4b1d6eac0744ecaa97"]];
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
