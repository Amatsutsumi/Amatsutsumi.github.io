/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6f76945a29091288ffac43ffbf676b25"],["/archives/2024/04/index.html","befdf4f929d7bb3cd291ce9c64955c77"],["/archives/2024/index.html","39d9471e66555d452026b8d89c36b8a8"],["/archives/2025/02/index.html","2990943f855f245b88090cd841878b8d"],["/archives/2025/02/page/2/index.html","6acec90bf583f12f700309c0425c40cc"],["/archives/2025/02/page/3/index.html","e8ea79e3937086ec4a3194b0a2e6003c"],["/archives/2025/02/page/4/index.html","ba5b192a1b2c88943b242d6bbbbadd95"],["/archives/2025/02/page/5/index.html","28f0d431a02756ab6e5be2c20278bab3"],["/archives/2025/03/index.html","3ab47964c30360b4f1d9e7ebc00c977c"],["/archives/2025/03/page/2/index.html","c292e897f9c1b8afd579ae2552349d37"],["/archives/2025/03/page/3/index.html","227319cdd249b1b09b131d2ba24e287d"],["/archives/2025/03/page/4/index.html","5b489a569c1a865589499febd93b8593"],["/archives/2025/03/page/5/index.html","167f2b4f0bdeee2feba5695f278d3b77"],["/archives/2025/03/page/6/index.html","7b5fbb06469a7ff4b727363b0f72b3bc"],["/archives/2025/04/index.html","8bebc427b55dbb65449257e09d91f68f"],["/archives/2025/04/page/2/index.html","76da8632765a4796af3a8989ea9dd03d"],["/archives/2025/04/page/3/index.html","b9548020e30f65171a02de8027a64966"],["/archives/2025/05/index.html","262140f9ba7c56660bd0256501707a0c"],["/archives/2025/06/index.html","24d7df10ddfcb466d8fc41d0d7120aad"],["/archives/2025/07/index.html","c427183fe28a10fae22ea9bb02205b9f"],["/archives/2025/index.html","b07a293ceeae69e9e3895d8162b5c1aa"],["/archives/2025/page/10/index.html","3c97c84971c1233de36c81d1bdce1667"],["/archives/2025/page/11/index.html","bf8ff59d2dd22b84a905a9be08533d3a"],["/archives/2025/page/12/index.html","fddd2f26c55d883672ffff00597fbd5b"],["/archives/2025/page/13/index.html","c48763c10c28a2d1274024b6c89a6b4d"],["/archives/2025/page/14/index.html","e6bc4d61ed3c62343520c80a5ee1709c"],["/archives/2025/page/15/index.html","ceb0918841eb433f6cd10baae6b0efed"],["/archives/2025/page/2/index.html","8896c5b574f0214b3b8900efd60ef0f1"],["/archives/2025/page/3/index.html","cec601663bb7b891e69e36c317ff49fa"],["/archives/2025/page/4/index.html","67cec501af757faeac50b3d02e0b5f9f"],["/archives/2025/page/5/index.html","9d9f42c6af347e5ad30adeb10d512a79"],["/archives/2025/page/6/index.html","2997d1766033678b126aae49098c0438"],["/archives/2025/page/7/index.html","f54a0dacadf8030824563d45437fb98c"],["/archives/2025/page/8/index.html","50bc8b4cce707be09c22fd8d1c127015"],["/archives/2025/page/9/index.html","2cc2f38f2b27d4df6db2050677a2644c"],["/archives/2026/02/index.html","b16534057a13e743aa8476e66e234df1"],["/archives/2026/index.html","1482047c29e2c5a3bf923f13da7a2f33"],["/archives/2925/01/index.html","786815446467cc47e5befece7d104bec"],["/archives/2925/index.html","7cbcbe5b09da29347a328dbe5f6f5961"],["/archives/index.html","2e3c8069be828594007d4834fc6d9467"],["/archives/page/10/index.html","89495f18d76c1a618046c6d43f3b4e58"],["/archives/page/11/index.html","2c7a152914c590902df22ee9a83e6fa0"],["/archives/page/12/index.html","ccd40b3212b974e4398d4ef38556ff73"],["/archives/page/13/index.html","490d4c7712066184f92f8babcd3ee6ea"],["/archives/page/14/index.html","e86d33382559b9825b7d524a4b9d9411"],["/archives/page/15/index.html","9f8ac649b8bde7e5d7afb5dd1d10a0e4"],["/archives/page/2/index.html","4915225b7d700f1f3813c92a3eb5e78e"],["/archives/page/3/index.html","ec144441991cba52125fb0220de4937b"],["/archives/page/4/index.html","53e69b261e658227f2b03e7e3b3781af"],["/archives/page/5/index.html","13a1dace72c0f42066ab298556408caa"],["/archives/page/6/index.html","864ea11455a3cd14f6723883934b2e1e"],["/archives/page/7/index.html","610b38c28de43641bf53b4a511efd3ff"],["/archives/page/8/index.html","631eb5303237cef5aa1a5a90c17a060d"],["/archives/page/9/index.html","cc0cbc5bb5a595f77fb26ebd85463615"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","6ca0f8060cd738f15f13036ee67a7806"],["/categories/galgame/page/2/index.html","6e12947f606e0063263bc77cf7f6642c"],["/categories/公告/index.html","63b18f8e1e41b105cab3ef693b8f6160"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","f4bacc378bd09b95c7476eaa40eacbb6"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","225d9e048f3d0b494b1fdc138d22f7cb"],["/page/10/index.html","c650cf38aacd3efb8848bdab9f9821fe"],["/page/11/index.html","de6359494e002144767d9cc23ceb1200"],["/page/12/index.html","88c4993cf1d5ed14f46a66f3adb86653"],["/page/13/index.html","29d9b0c54ac5371037a429be8688b010"],["/page/14/index.html","8c265e7909eafea9784717b8b34d2f6e"],["/page/15/index.html","31287611f8d6a12e7b851bf140f935e0"],["/page/2/index.html","d76c3cea1cbd04bf012d0b8e3568b20b"],["/page/3/index.html","51648343cf2b72325a4539c52be97ca9"],["/page/4/index.html","27202f003b778fc3686c6da9cbc6bbbf"],["/page/5/index.html","a1db6ed61ad824f31aac1c426a476a1d"],["/page/6/index.html","a5c4f57334cfe20bb6da6f3d4a9228c9"],["/page/7/index.html","ed9a129b2de0b73b8a838ecf6984b15b"],["/page/8/index.html","078b9107d82ad914c84800efe3df52ff"],["/page/9/index.html","31bb1540e98f9c970d5adced6ea9d742"],["/posts/10c9dd98.html","84f013fa5ac44fe5030a6f45404d33fc"],["/posts/1295b569.html","d177057f223d7ba131e328bec121c8e2"],["/posts/1370342.html","e666654e64663e171ee91cf60d54a151"],["/posts/15ef14c2.html","b661174340acf375f9835e63e4e9f659"],["/posts/15f3959d.html","e85e47438c436acc80e42c8989ee7c00"],["/posts/1840d617.html","f6467daed7a3856025be5b8b297eff4d"],["/posts/18ab785d.html","f6e3055c2ce13a8cc9d4d6365b6f47a5"],["/posts/1d59b71f.html","e252443f35781918eee23e319db085d3"],["/posts/20b3f3a4.html","5a16bd412b25f6c311ed0b5480d05334"],["/posts/244daa7a.html","b9920858ba19466a3b0cf2c9111e3db2"],["/posts/245f1c7d.html","112c0e862f29b2b6c0e8dddfc82b283e"],["/posts/252658f.html","a4aecb06b19a44106cb53a19ab4401d8"],["/posts/28397adc.html","53dd2e284fae92f1d23bb028045b553a"],["/posts/2ad07f54.html","0c132bc21d1ea9109de9e6f13185f396"],["/posts/2b38bce0.html","938093d138c0b1d53a867ed25575eb37"],["/posts/2c0a6836.html","9e36f265810698bdb7cb12439327bddc"],["/posts/2ce39bcc.html","efa1a5bfda05d763e5eac11080a6e8ca"],["/posts/2cf620f0.html","51065e67f037561d8c73685718ab6d45"],["/posts/2e30fd6d.html","d0242988790b5804c46b4311fbb2a8b5"],["/posts/30a413ad.html","8e47513bdc4bdcffdadc58bbea1f564b"],["/posts/34292736.html","f5f270f400b945aaaff14ff8d9204ae3"],["/posts/3468cbe.html","8d3a7d3aa7d8040e13c0a0d34f4d2376"],["/posts/39176dc0.html","8464d4822fadf771e730159f2d149305"],["/posts/3be6a165.html","47348a25d607e1ad5417e1cc2e01f1c3"],["/posts/3daf73b4.html","8a435f431ec86b9769ce8d76d6538bca"],["/posts/3e118dbf.html","b989ce1649fb1067d63804c0a959de28"],["/posts/3f7d823a.html","2d9de7f8ab53180986411b8465133d66"],["/posts/3f978819.html","1248173f6718a5158e69f56735a555d9"],["/posts/41dac80e.html","a535e4d60ff67fdd6dc13b7cf80a80e3"],["/posts/43945723.html","aaa455dd3db34ab57d4a0644607248e7"],["/posts/44124a6b.html","d533229e1ad774b6da6475a2c556d164"],["/posts/476a3006.html","9e2f991710f0b0084fec12eb72d6338a"],["/posts/47abb61d.html","8096e0c150da21bcb5d43472ee31c9c9"],["/posts/4996478a.html","37fb60b119b35e05c1a23969ab3535fa"],["/posts/4b689be3.html","d2f4c224f50ffad2fb819c5637777d46"],["/posts/4cf8423f.html","dce9ec575f0cc038b45399641dcee455"],["/posts/4dcf85c.html","69c50488458ad4711f6a426e83d87d22"],["/posts/500cd322.html","b720435602535c22d6dc67782645013c"],["/posts/51c9b1ff.html","f0cd41f31d504145c92e145adbd95c32"],["/posts/51ce68e8.html","1f45c02d5c1b8ad8d7f0c10f054f4629"],["/posts/52b5b3c6.html","71d694a89a9a2ab3a70603c79392a93e"],["/posts/54f496ad.html","a166cd05d188cfb1bdff575ce868b9ea"],["/posts/558e1f30.html","bc9cd832eac6ca1bb0b60d6083b006bc"],["/posts/5d8bea92.html","bf157845a57b17137be0c38133e27093"],["/posts/5f6e0c59.html","7950aeb9f3fa02108d18dd4fed9f5e9d"],["/posts/61a63a84.html","bfcb5e90515e30f670c5d688b7315f69"],["/posts/625ab7bf.html","42c93a31076b8ab7b66db7c75d2d9052"],["/posts/6336a2f9.html","5e71cb5f38e75d918e89f561521db978"],["/posts/6432d61a.html","0284431bc94ee6a3d7ea0f8255311b7c"],["/posts/6515f032.html","a3f2a42c10ff2efe242beb54cf0ea023"],["/posts/6720ccdd.html","5c1f9d0126edeb53faa33169e01330ec"],["/posts/6a4b5ac8.html","056401aae45270fc6d6fd60578a90df9"],["/posts/6aa4177c.html","dd98fd877d676e3d8a970dbb2eeab331"],["/posts/6b15f81f.html","3d645ef0e962f274ba0aefd0368cae2c"],["/posts/71131d34.html","215651e875f38ec4d2f316ebed09e0fd"],["/posts/742fd48d.html","2bd89eb15ea51867be8f3360d2abb805"],["/posts/78a8a8d3.html","4f982a2274a17876abaeb1028065e98b"],["/posts/7a5ef3d0.html","23585fa8694aee555f8faa5dfd3e549b"],["/posts/7b41e1ac.html","8cb4885d3d5145ef617520ae2c0e21f2"],["/posts/7b51011d.html","5619da95d66643d769ce047010893e38"],["/posts/7e3aa3e2.html","966c6ff7dade261c56cae594f5f8aa3e"],["/posts/80fe2691.html","980283b10dbb518fd9f061728d8df8a8"],["/posts/81ac52e9.html","43f53aa2591ae3e28d28de0d48855494"],["/posts/82332d11.html","ffed4cbea8e65043bcfac1ea99087e3b"],["/posts/8486f6f9.html","b444dca376596a3f933fa57b31c841c5"],["/posts/849b40f8.html","8877e9e7c964942d39949715f458c72d"],["/posts/85c51d68.html","aad327e55f840e15027d28984e20e187"],["/posts/86a6c500.html","0a18abd3df5c08067c5a65257c072f71"],["/posts/886f8d3.html","036e6fd460f7b2fff074dc1f6f075977"],["/posts/8a7cba10.html","0ec8725b51b7a457077fefa3f1f088b6"],["/posts/8ac11b41.html","ab5b31dedb2aea828f27a3476377040d"],["/posts/8c3f2fd8.html","773a8ccd277c65cc260aeb3a8bbc8658"],["/posts/8dd520d9.html","cfb94b198540a805f5e6e349526d82a4"],["/posts/8f555654.html","413d14fd6002e018f928813f9fd48832"],["/posts/92a980c2.html","e4c90fe5099fa6db3d591266ee02b297"],["/posts/92ce16.html","2f03fc1112842ea339dcee6a4c992a77"],["/posts/93e9943b.html","1b3faa5090e399673232c9ed49d55d92"],["/posts/94d3c794.html","b1326f2f41e0a91faed0ba18e8bfed55"],["/posts/9606c2fe.html","7c9ae6fa27c1f3c6cdead90ce2ef310a"],["/posts/96b281f2.html","851923ce00008a1d447beb146a517ab6"],["/posts/97f50eea.html","e4ea87f0c955dbda51d86328c5672200"],["/posts/97fca8be.html","dde4c631723e029bcd19f305c6fe7947"],["/posts/98662d05.html","f6ba6b4b49b85e3a1fbdc21bca599c22"],["/posts/9a2f6162.html","6860bddae79ce67548d10507381fa465"],["/posts/9b22a48d.html","7973a5ce24d3a113c22630de77494794"],["/posts/9cb455b1.html","3061fa7e8739034166cff8056ad56e80"],["/posts/9ecdeecc.html","63101bc792db1752ce5a8cfd35bb7d9b"],["/posts/9efd7701.html","000b6c0e4f6c282c290193469e580a42"],["/posts/9f61c1a0.html","3d171938e01a8b7839a8220adddbf813"],["/posts/a1de710.html","cd39acd6f72ca300c82386bcb3bdf77f"],["/posts/a30eb0cd.html","d846f5b4fc6ed7ea22bde303e421334b"],["/posts/a72f71c2.html","28bea1f9c7a293ae4f2253044494e6f3"],["/posts/a7634b5d.html","6b685604b0e0f40e98e84990428e676d"],["/posts/a8c593b5.html","60a3b0fb3b2eb250746250fa5cb38222"],["/posts/ad0c1efa.html","a5d70350f37d872cf98f5feb2336b6bc"],["/posts/af1807ef.html","f8bcc50c09fb766db19d6e440f982678"],["/posts/b190bc66.html","4c64638b37b2eb04bf48da4b3f726465"],["/posts/b397bf03.html","2204c0dd85faadef046aab28751a956e"],["/posts/b497b647.html","7d2a66f4d1d47138c2a7be1bd5fed472"],["/posts/b4d464b0.html","3a76b7c008cae7da1c48e16656adde01"],["/posts/b5fb773f.html","a8fca68fc4b864b5c7dc6b4c2bb52e60"],["/posts/b8d46b32.html","fe4b9062d09da12245a2fa68c51454f0"],["/posts/c1b2c6c9.html","1ed3c8724a1d09ddc536e222ac03118d"],["/posts/c2111cbf.html","91c74693a1cbbeb3496afc6a956b827b"],["/posts/c316c2e8.html","f897c26f0b8cbe17b9bc79f076d47393"],["/posts/c43e60b5.html","862ccb8bb506ffa16cfdfb6b437ad44d"],["/posts/c497a412.html","7290f6e2a1b31b3124b9851f2275b4aa"],["/posts/c5395ba3.html","e532865f677cdf8fc68829e489b8a37d"],["/posts/c5de299a.html","147d82017d27cf48e33bf703bc929fd6"],["/posts/c70bba9c.html","23a48c7179f79a29b1e43df4bf8cf024"],["/posts/c797535e.html","199ca33db2225113f6fce020fa4436c0"],["/posts/c7a62c79.html","0bcd93f861d5087c8403693aa8183322"],["/posts/cae2c959.html","15005c18054ca7d05e4cd1f23ef8ee9b"],["/posts/cbebef2b.html","ce6c2949976281dae5e1e45d2d2f4c6b"],["/posts/cc4c0017.html","38eff63a2b9ae83366e873730f0bf456"],["/posts/ce25023e.html","6f275c19e8d6e1dec782a441fd49947f"],["/posts/d2fd4837.html","ae0e09b66c477e74225e5fac059aa56e"],["/posts/d3233cbb.html","761b46c7168005edcedaf748f57d458c"],["/posts/d3a745a8.html","f1fc2fa424de4fd673bb17d339c5ea56"],["/posts/d7e940d2.html","a702b4576d3e08fc27620483f7d2633a"],["/posts/dc815d5.html","5ac94845ec5c48fbf0987995e1c087f6"],["/posts/de25b0be.html","71609a412aca7f7bcba94dbff7a74c81"],["/posts/e2623b4e.html","defc680af2215aa937bb78ddb9607a17"],["/posts/e3ab6ad8.html","a2d8f0f95439be451afb77f8a977bf2b"],["/posts/e5018da6.html","573102ca50e966f6316f2868e603d9fe"],["/posts/e5963272.html","45ea2d9e62359144d832538e0cd889cb"],["/posts/e5ef4c3c.html","6487d3f0207ea7969555269236808519"],["/posts/e624b065.html","53e430a147c4cdf0b3de62b71a7ee3e6"],["/posts/e7c703bb.html","03517191316d2bb5043e010f68d614dd"],["/posts/e8f14b6c.html","966fa16483a2ac9828610154a5f945c6"],["/posts/e91abb63.html","0331a607010792899302308f7f654620"],["/posts/ea9a8808.html","5b01df4fc2952c305592cd277261ca42"],["/posts/eb784749.html","3ce0b8ed10e421ec25dd820e8f3c0c99"],["/posts/ebaf2232.html","581a949fc13a2dfd876e19d7a51e48de"],["/posts/ed75f185.html","cae7122145290c9cc39464a7e78c9dcf"],["/posts/ee1ed673.html","05e2a6f171d1339fd99af87bb3611c13"],["/posts/f0c3ed61.html","cb4368c8c4da6f0227550376a87a2971"],["/posts/f151ff43.html","c2c64b5a1b3d42e1a8e49ceeea002bd5"],["/posts/f21e7f84.html","90d41d9a50658b4afbe6735148720d4a"],["/posts/f230b0fd.html","3cc9bf71ba0b20859d51202ffeb254ee"],["/posts/f28a7877.html","add73906d15b5734267637c028f92ca5"],["/posts/f663d5cc.html","61053498cfa31ba9a380ef274bfcd4df"],["/posts/f730ad18.html","88e919bd5a43b092fb9004e05fdcac4c"],["/posts/fb5d4608.html","b1962d651171e337915d162867b5316f"],["/posts/fc04d0d4.html","78d56677204d5dca4038fe3735012c9d"],["/posts/fc455f81.html","b72a3b7e0e59658f17c0f09ffa280498"],["/sumire/index.html","f81ad4e75c63444a88b539cd8e0e16c8"],["/sw-register.js","16d903e2043c34860fc68ba975aa6dbf"],["/tags/AKo/index.html","a9e61c021c037b6d1d51ae6869d97198"],["/tags/APPLE-project/index.html","57dfbd60fd90ce935f61bc0913396376"],["/tags/Ankrache/index.html","df332f2064b891080013e46861bff21b"],["/tags/BELL-DA/index.html","f7a75c2afab4f46169d414405d4f1c94"],["/tags/BL-Game/index.html","dccce5d4a02298f5cf1c8df23e9f91dd"],["/tags/BL/index.html","295d99eceec7ecc09f816937ed10b5fb"],["/tags/Blue-Dahlia-Digital-Creators/index.html","76af24781c9992d7bf67903fc1330873"],["/tags/Blue-Line-Games/index.html","d09f61f70d9a02b10e2fb6ee7b40c64e"],["/tags/CD/index.html","f77115efcce1bd34c0e580998301069e"],["/tags/CHUNSOFT/index.html","07acd0f0d3e0ce43b49283091e8b6f47"],["/tags/Check＆Stripe/index.html","8d23ad902fc30efe0d4b31e8117d292c"],["/tags/Cherry-Pie/index.html","733f261ebd93f4d2d629272b5001bfaf"],["/tags/Circle-Mebius/index.html","077dd6976560190ad14338290791a6d0"],["/tags/Cosmillica/index.html","a364eb390b6f19aa86874d730c94771e"],["/tags/CresCENT-BLANK/index.html","939f2a3c2c71eaae00747af884cd1fed"],["/tags/Dopamine-Software/index.html","2fa6ca5b9a6995893e67394ea4251b45"],["/tags/Dos/index.html","03f429fd286f36a312590bbfbb6c2c48"],["/tags/Earth-Well/index.html","a3411b505025fcf28d05c7122fcc7d97"],["/tags/Forest/index.html","947cfd6d548916977dcb3d13861b3407"],["/tags/HaccaWorks/index.html","98ec3198768b913f4cf38ee8c0d71ddc"],["/tags/Kanon/index.html","47051aeda4dc34c623cbee425d67f6a2"],["/tags/MANATSU-8/index.html","b764d5e3946d92f5bb22bec9fbf6199f"],["/tags/MARINE/index.html","139f010678a9ada3f13f73637cf06d4b"],["/tags/MIO/index.html","1313250a4de94d0d0d25dd41b1d77970"],["/tags/NAOX/index.html","8d50a204037570520c1b9b2b42c4947f"],["/tags/Namikaze-no-Uta/index.html","464f1505eef0854fa0f19b0944cc4925"],["/tags/Nmyu/index.html","13eab852e07b218651a2504f0663711b"],["/tags/O-S-I/index.html","161bdc08b25c381d2f4bf25bb3b657ca"],["/tags/Omegaの視界/index.html","a75cc48d5fc43181a1d91db842c4385f"],["/tags/PC88/index.html","b7a84cf6e90b1107e8258c165696240e"],["/tags/PC98/index.html","ca51fade648cae24b4725f4595441842"],["/tags/Perpetual-Room/index.html","4d9e809b9eb059b0b1fe68f306cda68f"],["/tags/Pleiades-Company/index.html","8e225d07a790c64d9844f2a45cc234b4"],["/tags/Project-Twintail/index.html","4bb05e98dd920e2de8e72060972ae4e1"],["/tags/RIFF-RAFF/index.html","c740a522730e032bc8c6f5ff96c443d3"],["/tags/RPG/index.html","ce3b2bdceb36fd3f16942a4c84e8c978"],["/tags/RPG2000/index.html","2ba9035203cae2a48dca56713147756c"],["/tags/Reverv/index.html","625ca5e4e22c5ec60fc80305229793c3"],["/tags/SENTIVE/index.html","fb3037237f2abe8d7c7f4e152bbf38e6"],["/tags/Saihate-SOFT/index.html","b252c727f1a1b8a25638f8c7e333de66"],["/tags/Scrubbing/index.html","f29e3b94b1cc931bd51135f08a4f0f61"],["/tags/Sky-On-R-imaginAtion/index.html","b08e2971241ed8eaa9219f414dc4dcbc"],["/tags/StrayMoon/index.html","12298e2b0d6c3fd3a773e67d3157a566"],["/tags/Studio-Bu-Sa/index.html","bd14c1266a7cb358e07cc07e68a9705b"],["/tags/TRANSPARENCY/index.html","e21ec142c69e1de325c606c98c844da3"],["/tags/TRANSPARENT/index.html","4048fc80ba016c5451689ed5c501b492"],["/tags/ToHeart/index.html","97b2477df0428479e13c56dfbbb81973"],["/tags/Traumend/index.html","53f28f2d34106fb2426d39438e05767a"],["/tags/Witch/index.html","388d12d09dcda96678fdd72f1c91062f"],["/tags/adonis-project/index.html","7d44078a505b8d6c558b29a1d9be54d1"],["/tags/capriccio-suite/index.html","1b628263c91685ae727dc24508b00e77"],["/tags/eclipse65/index.html","ca30d07810276dfec1b4f3075a460fa9"],["/tags/flash/index.html","57f3538fb64fc0e7f98eda73ba0f4b8b"],["/tags/galgame/index.html","d4ac6058f2b7321f7e02c802fffc9d7d"],["/tags/galgame/page/2/index.html","dbe5b64b7bdd1b086146a0157a22f811"],["/tags/gal资源/index.html","deb69f7acba68e97aa574fd4a8c49c91"],["/tags/gal资源/page/2/index.html","779524e51c01f89ed34430b863f2296b"],["/tags/gal资源/page/3/index.html","46d388f21dfdd3698abb6a979d59c538"],["/tags/index.html","8aeca570afa683f4c921a049353f7e0c"],["/tags/m-kz/index.html","ea651f686bc88cffb4bb60be0dda1838"],["/tags/purgatory/index.html","48f837a9fbbda8de3f10768935a0bd33"],["/tags/rkr/index.html","6c19ffcdf387bf4a57f595512a695ea4"],["/tags/team-eye-mask/index.html","4de14e3939b79efbb4aa5b3290b0812d"],["/tags/ありすくろいつ/index.html","75c1c627e9937e6f31d4fe07fb815186"],["/tags/いつものところ/index.html","4eb84738febd115bf9d19ca8c9a861cc"],["/tags/きつねみみ饅頭/index.html","987c4c9bba506e00da305e44294414af"],["/tags/ねこねこソフト/index.html","2e61d771de006ad384eab469f35bbff2"],["/tags/ねこバナナ/index.html","33bf98fead1ebd5c7eba248820842ae4"],["/tags/はちみつくまさん/index.html","c7183a6d5b9463a8dc94078eda1187e4"],["/tags/ろりちせ/index.html","57e9be901ab0fd5637609ef0e0859703"],["/tags/アイル【チーム・TATU】/index.html","8612bd2a57629268ee03a2aef59b4eda"],["/tags/アークシステムワークス/index.html","3a6e358e4a92bb79c0e3a6efcc8cf003"],["/tags/デジファミ音楽堂/index.html","970a6b6fd0022a842501fdc416a966c9"],["/tags/ブロッコリー/index.html","283ff72272b8299ef59c22b272b9979a"],["/tags/乙女/index.html","6f36e2c9c948bf38edeebaf41c85ce18"],["/tags/乙游/index.html","26539ca94148da94eba41055a22212d0"],["/tags/停产/index.html","4b5a29795f12da6278a4a78a68eccbe7"],["/tags/公告/index.html","65484a76ce1b11ac42858d720a2a811d"],["/tags/同人/index.html","afe48e8c240fd2b395d663d2d903fd62"],["/tags/堀井雄二/index.html","21be97fc189f98489c0760f1c80afc40"],["/tags/外海なおき/index.html","e08ced122c0c5d4605afae88579f17cb"],["/tags/大熊猫/index.html","e4c61ca023009b602f092b8c51e3cab5"],["/tags/女性向/index.html","74b7de18d07fe8fcc779e9011f8f62cc"],["/tags/安装/index.html","7052c991ad7c6846bca8ea04c2f2241e"],["/tags/御茶ノ水電子製作所/index.html","a8a96bc41e944166ada7e520008efa47"],["/tags/月の水/index.html","e6c320a308b4b883055773c9eaa9c734"],["/tags/桃野衿/index.html","3d13a6729fb9247a23752d72771a89f2"],["/tags/機械式少女/index.html","13f07933516dffada3919f2020441f55"],["/tags/水仙/index.html","6d7582865a81bcca988900d545e5b2a4"],["/tags/汉化/index.html","2a9328418326468e5fc66dfd4f3e38b4"],["/tags/熊月温泉/index.html","23de20dcdb2df59f81a381ba3f2300b2"],["/tags/片冈智/index.html","8346e8cd0dbb9d8e2ee415070bf284e4"],["/tags/片岡とも/index.html","397290e4ed4f56a0bc8e529d2a61dfac"],["/tags/牙の刻印制作委員会/index.html","bb67989ddf1883cf414922b48345bf8b"],["/tags/牛カルビ定食-FLAT/index.html","e2ca2cc28ace5f0cd07a11db67e8805c"],["/tags/牧尾屋/index.html","8cc5abecfcb13e789aeff9c8182ba0d9"],["/tags/犬茶屋/index.html","3151d68633311a1eaadcc72c5325dc4f"],["/tags/猫猫社/index.html","afa02e940e4df7054a3a53d2226eaa39"],["/tags/王宮魔法劇団/index.html","b87be364f81ecf35d402cacafeca8cd5"],["/tags/画集/index.html","43ed8254269aed285c9692db32b2fd56"],["/tags/索引/index.html","4d6f6698b13a3e926379b751d3fc8071"],["/tags/自购/index.html","eba9d99409e6482061d8fbf08948f374"],["/tags/茶葉☆姫/index.html","70a8a41b3b1ba1fe8a5d3f66d6a21376"],["/tags/郷愁花屋/index.html","7e8a034d451f2860a7729c8d112f4ba6"],["/tags/閂夜明/index.html","efaee133d26b2c388b31bcd89569074a"],["/tags/音乐/index.html","8c5c4d272ca4e195b0546a8dc54917f8"],["/tags/音乐美/index.html","7e76a48cf0a79c4e5645c8dd8529b004"],["/tags/黒†救/index.html","42b8cf7a5986a98881e0c538dfc39787"],["/tags/黒百合っ子大集合/index.html","a21f399722bbbf2613dac4e30825803b"]];
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
