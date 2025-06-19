/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","aafc91e3712cd759682a5128f4882862"],["/archives/2024/04/index.html","4d7106676efa0163d98460d6e7ff2b33"],["/archives/2024/index.html","2080fba688f6cbde777e1bcb154ef57a"],["/archives/2025/02/index.html","6482d6c04c3668299cb2e6d194b970d1"],["/archives/2025/02/page/2/index.html","b09fb5d80bf655d0e97a85c1302b594d"],["/archives/2025/02/page/3/index.html","2d0a68f957f977bd4e24dd7eb8960b8b"],["/archives/2025/02/page/4/index.html","d79e7d3032092fe250b139ab08038684"],["/archives/2025/02/page/5/index.html","92db44a1752d1e42f35111b2f57302c2"],["/archives/2025/03/index.html","487e508984e54a37b611d825f33e3402"],["/archives/2025/03/page/2/index.html","dcc43698b3f6f550bb4a853583f74512"],["/archives/2025/03/page/3/index.html","3f0b2e2f268c0fa0cf364c2980a90a3e"],["/archives/2025/03/page/4/index.html","df2594b6f40d811ee9ccbd093d6c1091"],["/archives/2025/03/page/5/index.html","b1c5d2444409839dd1d025632c168132"],["/archives/2025/03/page/6/index.html","4bf12d06a5279b4effe1d95a7278861d"],["/archives/2025/04/index.html","68897e816ff4990f37fc80e2431e9d73"],["/archives/2025/04/page/2/index.html","c6ddbd5218f2a9873a05e348600ea7a3"],["/archives/2025/04/page/3/index.html","9842b504e23b87e1944cda3f6b175d87"],["/archives/2025/05/index.html","413133fa310119de53ea2aea18c33cfd"],["/archives/2025/06/index.html","0f5fe8e2480bcce5532cc5e4e476ab8a"],["/archives/2025/index.html","1c55ae1a1a14602cc47cd960c01699bb"],["/archives/2025/page/10/index.html","dd58b5cf4ee1a5be09299ad3abec8b27"],["/archives/2025/page/11/index.html","614edd2b4ee1e48e89159f768a19b180"],["/archives/2025/page/12/index.html","0bd195b00fb610dbc1b0ca45ab872d23"],["/archives/2025/page/13/index.html","e88602c152927a91c5a45963c3a22602"],["/archives/2025/page/14/index.html","55e4f2b964a7a26f8083b5acfb9dbf48"],["/archives/2025/page/15/index.html","518222b52a138dde51e0f195af2f7b6d"],["/archives/2025/page/2/index.html","a3d0b7aa491297d057bf72bc721943b1"],["/archives/2025/page/3/index.html","d5091d9b9245134d133981919f7d4997"],["/archives/2025/page/4/index.html","6ed66f31964410adb02ccc12f4378fcd"],["/archives/2025/page/5/index.html","c5a8621b28219f307f3ad2976ac8e8c6"],["/archives/2025/page/6/index.html","b3ccccaef3845d40606f95a983bcf409"],["/archives/2025/page/7/index.html","0c71d0f02820a62123b607d3b608f6a1"],["/archives/2025/page/8/index.html","b8c652044cb6b6c9f071045f3fe8dda4"],["/archives/2025/page/9/index.html","5b59f481191ba38ec17a9176e4f1426a"],["/archives/2026/02/index.html","f5d900f538d53c6da16672185f6619f6"],["/archives/2026/index.html","73f7b87a8a8b64b7f917fbf14aab0f3b"],["/archives/2825/04/index.html","b02b93bc1ede4782a6e7814b8b4af624"],["/archives/2825/index.html","b6c0ce2fb0260a2cd9dad48e2f3feeaf"],["/archives/2925/01/index.html","4fb0165a9da92c20e9f58ea598bf180c"],["/archives/2925/index.html","c6ca1c2a649d9f10173a4b06b9fff154"],["/archives/index.html","34e2075b456175f823513ad72ed21ab0"],["/archives/page/10/index.html","7a936e87b9058af7e63a3f51194b3b38"],["/archives/page/11/index.html","b9cd7ff94b5fd9041582e2979b1c45c6"],["/archives/page/12/index.html","4f642a2fe3b28f1f8e37fb8f3e098257"],["/archives/page/13/index.html","cd340de28439096e36d7ccebf4123295"],["/archives/page/14/index.html","bef0f5b44785234a2f61871d165dedca"],["/archives/page/15/index.html","29e44444d94742416c8927ff8b97c8e1"],["/archives/page/2/index.html","3dd376762f14a0cae10e5361a9ae98cb"],["/archives/page/3/index.html","6b869e1d9b4326fc1c8d3a61a3c6c015"],["/archives/page/4/index.html","6ab57d225c04aafdc408b2aa74fc8a33"],["/archives/page/5/index.html","fca46d6360b5ad1d7ebea6b36a4b2aa8"],["/archives/page/6/index.html","e3d4fe10169da57de472641e1e92ceab"],["/archives/page/7/index.html","7815c65d44aa6846274fb4799da8cb4f"],["/archives/page/8/index.html","4eec1160c25083d3af34be5e07b20390"],["/archives/page/9/index.html","730ae67e0a3847e9fc26c85f36ed6ec6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","77ef998fa41e1a9c09bb11d0dd9e84bf"],["/categories/galgame/page/2/index.html","d7a61f4fb161d4b73d565ea1acb047dc"],["/categories/公告/index.html","8d9a0fc86c8a03560048357246a5ff4b"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","ecc656db7e960a1c2ab86058cac382b1"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","94f1e3b31a409f71b4b36b09da1d24b1"],["/page/10/index.html","90e750e6e4f080383f193a67e45ca452"],["/page/11/index.html","cae73b25c09c56fd6be408365b7d26dd"],["/page/12/index.html","c6efda989865340b7d4edde5c4edfaf0"],["/page/13/index.html","3236b78ec4a51f85bbbd27ae89db41fa"],["/page/14/index.html","a0b0485057b4f3e543c7d62d5b9e93d8"],["/page/15/index.html","97ca30efbe3de305c6f1fb328987b129"],["/page/2/index.html","96073ad2a9be41c7573e085b3908e2a5"],["/page/3/index.html","8c629d4b57ed9d7c9117c3cc140dc1b8"],["/page/4/index.html","280312dac7f8126cdea4069a009eaab2"],["/page/5/index.html","14cc2b4f9161332dcd04416a7e6e4d79"],["/page/6/index.html","5a79f5cbc5f50b64878f6a35432ec2e0"],["/page/7/index.html","a1c65ac9771e591d0fd5de04bcfed5a0"],["/page/8/index.html","edbe834655f18b8781608b8d519bdf1d"],["/page/9/index.html","9505d800c0fd1efbceb0d671336f8bf2"],["/posts/10c9dd98.html","2b05633066d3f0fd7d3c0b0b95d08d36"],["/posts/126ebb99.html","aa855a9048bf89aff20a856263205d1f"],["/posts/1295b569.html","006a1fc7880a88b7ef19f161ffcfe66b"],["/posts/1370342.html","de716152d188b39a9d579e9db3f4f9c0"],["/posts/15ef14c2.html","26f8f3257d37b1b6577fa5cb1a2fac89"],["/posts/15f3959d.html","37902a58dbd03c22d83031d2838c492b"],["/posts/18ab785d.html","b018351f318c6833b9dbc8a6cf9ff8dd"],["/posts/1d59b71f.html","d03e584d1b2d552791510e31b1c38fbe"],["/posts/20b3f3a4.html","e754f4de7d36a3139bcced97c4a603b2"],["/posts/244daa7a.html","7cffe720b71ca97936cee4e0554f0640"],["/posts/245f1c7d.html","e77ab5b42eb8a857e8d5190199657fdb"],["/posts/252658f.html","df4621080b2bf7f7a6ad9c591f834244"],["/posts/28397adc.html","40dfdd45b7584de4d3e652fd92198206"],["/posts/2ad07f54.html","d22da9804cc0d9a09f3ba2af7bf5eb02"],["/posts/2b38bce0.html","f29d2deb2ed00b0cef950d85e6daa9ef"],["/posts/2c0a6836.html","96839f312521c20f79c7ae20b5516ca4"],["/posts/2ce39bcc.html","efe308383ac14b40389a03a70e57bc60"],["/posts/2cf620f0.html","c3a1a3d80d1524f67063b1976e1b13e9"],["/posts/2e30fd6d.html","a53fc3958a323841a92928f6954a5fbf"],["/posts/30a413ad.html","9f9590ef5df0ed724d9fba82dd1be3a7"],["/posts/34292736.html","692f3108461105be2905236b7ce994ce"],["/posts/3468cbe.html","cfe02b90c8ffd30f29d3cb1df9572640"],["/posts/39176dc0.html","b16bc0a2d9d82c74b083bf39f50ffb56"],["/posts/3be6a165.html","20a0c2552dd9cc99f24f63b02c2047d5"],["/posts/3daf73b4.html","9a44ce801996bc3e4fc6e6e5bcba164e"],["/posts/3e118dbf.html","bf80c8bab35098c6058c8074bd320064"],["/posts/3f7d823a.html","8ffd4fb854b924af917dc20b209b6f8c"],["/posts/3f978819.html","f421379e322323a88493e484f0343b26"],["/posts/41dac80e.html","da5f7c2ecfe547abcf42284f07743928"],["/posts/43945723.html","ac09737a923a510fda18c81ed8d99de0"],["/posts/44124a6b.html","e12e4cf6a5cc205bb98c43ee382d3975"],["/posts/476a3006.html","45b7bd49f996b244e46d2dcefd33d2df"],["/posts/47abb61d.html","0c561d1ec9c4e11af2d11994e35acb91"],["/posts/4996478a.html","989ddfe1f2da88a6cbac52407c8ad239"],["/posts/4b689be3.html","8a7f3587e5f7322d603ae91896d45d16"],["/posts/4cf8423f.html","1260e1e2ddbfd0dd5931ea3475bb2282"],["/posts/4dcf85c.html","820a8a72895ce51375db1c9e6c726acb"],["/posts/500cd322.html","9b36fcc7169ef2599424049e401e3306"],["/posts/51c9b1ff.html","c39e57c5617cb8a1906d7011be0d51f7"],["/posts/51ce68e8.html","cd6bab1c70fea7c32603248a8c6d7325"],["/posts/52b5b3c6.html","ad528469b1c7a4db89a71e7fd597d876"],["/posts/54f496ad.html","863a805be385ee1620fe5dcd02cd025f"],["/posts/558e1f30.html","261d812d0d6e3dcc63684ef7f641cbfd"],["/posts/5d8bea92.html","29d8e104b31c0d3622d127f305bcf46a"],["/posts/5f6e0c59.html","f1885a630a4d2427a46c9ad6b14b931e"],["/posts/61a63a84.html","dc29496fd181e18e1098f702943f3503"],["/posts/625ab7bf.html","b5f527a0e744aa077d15df4ec68f696a"],["/posts/6336a2f9.html","80db431d5a7e1f0254e142b32132b4f3"],["/posts/6432d61a.html","8fee1ca9c00e8f5130dc4634df9add46"],["/posts/6515f032.html","8418e4abe1cbe119c5bcc593e8e675fe"],["/posts/6720ccdd.html","f90d19c1cd142a9b9ed74609c46055f1"],["/posts/6a4b5ac8.html","db874ea6824d592dd0e9d9a1f90d9882"],["/posts/6aa4177c.html","33643a5e095661daec23665eb5c5ce2c"],["/posts/6b15f81f.html","139ee9633767badfcc2a300a242be332"],["/posts/71131d34.html","4eaa219a9500ab20ce764170a7c14c35"],["/posts/742fd48d.html","ff88270dadd934ca0f9df0a0d5c3ac5e"],["/posts/78a8a8d3.html","4123b529d0b5d4c27a809906e9c4a67f"],["/posts/7a5ef3d0.html","8ace49c2d6cdcaf8046e0034056853af"],["/posts/7b41e1ac.html","64bc6a7e5a88d0e21d466e812fb13b80"],["/posts/7b51011d.html","5202bd179ff329d2840b0d7ed007985a"],["/posts/7e3aa3e2.html","18774a03f324d2195ccf69fd866ad6f2"],["/posts/80fe2691.html","20fddf1cad174b21814d138663803cef"],["/posts/81ac52e9.html","3e1aa8153c0ad83fa17e97930f0b9a08"],["/posts/82332d11.html","3a07a8f7151954f49177e79f0570552b"],["/posts/8486f6f9.html","bd509ed98bca40bddddb376d4fa4106c"],["/posts/849b40f8.html","5851022cd3c79b261ea62af6b21eda4f"],["/posts/85c51d68.html","cb7d80ecd9f135178359e2eb9082c0cd"],["/posts/86a6c500.html","b09ac62d246ff37be71391765924bf85"],["/posts/886f8d3.html","bb792acec469a2612a61a1f099b5af95"],["/posts/8a7cba10.html","55e7e4c20e87a32d93ea0993e1050ac0"],["/posts/8ac11b41.html","b968d23bb4978ce1b7663e02a03e9c1f"],["/posts/8c3f2fd8.html","0df31cfeb8f4ee857958beb7a820b6c8"],["/posts/8dd520d9.html","6415db898fa788f3db7d892be23613ff"],["/posts/8f555654.html","05bf11e626678e64db9546788146168b"],["/posts/92a980c2.html","ec83f8639e98f35699a9f79b67f0254a"],["/posts/92ce16.html","a603faa5ecce98a673227184475d1c0e"],["/posts/93e9943b.html","881dec069f3b2cb62d29118ef6e902cd"],["/posts/94d3c794.html","b53d62d4bf45572d213ddd4138dd28d0"],["/posts/9606c2fe.html","3de6bea1c2ef7fc8b23115e5e0073794"],["/posts/96b281f2.html","d37f96d5b112258f9e3df8c443ba9f19"],["/posts/97f50eea.html","c8261c75677bb398375615d952908785"],["/posts/97fca8be.html","1e7bd909af1137123c3c3b192d681f28"],["/posts/98662d05.html","aa9168da60f8c9be4e55eb8a90a4e440"],["/posts/98ef47c3.html","f832d618db7937354df1320a04977c8d"],["/posts/9a2f6162.html","315f4e1197da1c80eb267ee620a6aec0"],["/posts/9b22a48d.html","89a9d83bc5c83a39d9068c61f36a96f6"],["/posts/9cb455b1.html","1cf0a3e82367e31c0032e96dfac6c955"],["/posts/9ecdeecc.html","6196859fe9b85e4c4376e19c53db71b2"],["/posts/9efd7701.html","73c18b2105a2565f908608f018af9f6f"],["/posts/9f61c1a0.html","860f2401a7df2fd2e408e66069357c7d"],["/posts/a1de710.html","df528ac28ea456f371a4789661e328d9"],["/posts/a30eb0cd.html","3c8f95aa4b176c0557f6bd61a7df95ff"],["/posts/a72f71c2.html","cfb8cc303fd916c305e3a757bc46280e"],["/posts/a7634b5d.html","444df15601db2ee8bf69c0b763b45067"],["/posts/a8c593b5.html","dbe86833a93dadedbbd4e767f0fa6dde"],["/posts/ad0c1efa.html","0ded1261c53622f449d124e6dc3964ac"],["/posts/ada3f440.html","038a4ec6acc6e125164710a24337ddf1"],["/posts/af1807ef.html","732927a2cb9732f4715e9628fd5a6b5c"],["/posts/b397bf03.html","f4be12e84c418c3ab960d4f5db2236e9"],["/posts/b497b647.html","d65cbfc3f3622a52502be5bf986b8e3e"],["/posts/b4d464b0.html","3e5c1eabf489c0beebfa44d3fb7b7720"],["/posts/b5fb773f.html","5454adad6e01cd57f9988bd3a469c823"],["/posts/b8d46b32.html","1d42e03b291e4d1c640bfecb2e6d9f91"],["/posts/c1b2c6c9.html","02cef198b4fbc502d60ccaef520fa954"],["/posts/c2111cbf.html","48933f39aef089b284e8063121b9a0b0"],["/posts/c316c2e8.html","c03852c2a1d2b0c4ada45d7dce83064f"],["/posts/c43e60b5.html","8b2bcd8cbcbd318f9f00454f5469810c"],["/posts/c497a412.html","22d2cdfedfef566d993cae6b2c1987be"],["/posts/c5395ba3.html","6fb9ef0c663913c1cf0c3dd778a080fd"],["/posts/c5de299a.html","48fcfbd04bbab4eed6906baca9c0d864"],["/posts/c70bba9c.html","653001f9986622fdbb99e6f2fe5a1490"],["/posts/c797535e.html","4ca17b987e089759b58ac1d08f28567e"],["/posts/c7a62c79.html","123b9fd48516f47b438a5e71d9e85fc4"],["/posts/c85b034b.html","dec8673a02b89cd42981d9df7dd59073"],["/posts/cae2c959.html","247302d448063ca6e6988d42c206d3be"],["/posts/cbebef2b.html","52f2cf98f2f50fcbce41a6bf7051bc20"],["/posts/cc4c0017.html","c537c0fdebfcd458d6873abc17c05513"],["/posts/ce25023e.html","417b5dc925e0d1b532c4ac98a1690262"],["/posts/d2fd4837.html","463ec3b68540a9947e2fa8a334d069fd"],["/posts/d3233cbb.html","9410a50763a1e1b81356df5c80a96b16"],["/posts/d3a745a8.html","bcdd8bf71ecd08821d8d139133830e81"],["/posts/d7e940d2.html","34ee6d32bc1e5f2064bbd66d2cb04bee"],["/posts/dc815d5.html","3a22b9f3227517123c79ebcb56577ffa"],["/posts/de25b0be.html","8921201424128d93f4b7127112e83996"],["/posts/e2623b4e.html","b8f90003dae35374a7d22da81efcff61"],["/posts/e3ab6ad8.html","357ccee86fad67523b913767c811d4e1"],["/posts/e5018da6.html","46d4be5ec4d34f12caf827a83a9868f0"],["/posts/e5963272.html","9f344f21721b7ce352759567edbc6817"],["/posts/e5ef4c3c.html","fe439d428dbb51a95eeb8d559919de14"],["/posts/e624b065.html","a4dabd40ce43a7ea34d5097ce008e235"],["/posts/e7c703bb.html","ed4887254867061d5ff06b4189c5dc31"],["/posts/e8f14b6c.html","19fa98651f90760cef0a67ab12c5f38c"],["/posts/e91abb63.html","7d48573811d5f093f6c3bec55f317ee0"],["/posts/ea9a8808.html","1749a456634efc7f84b63b039a44824d"],["/posts/eb784749.html","6f329df6e8e0a6e02c8b105c837450a9"],["/posts/ebaf2232.html","94cda4c4b861c52dcf275a1cf4e10283"],["/posts/ed75f185.html","832629c22d52f19120d0ba317695c603"],["/posts/ee1ed673.html","778d29c6b566dcd19225a6f19848ac0e"],["/posts/f0c3ed61.html","0b4eb8b5e56b7fbf93007a79425989a5"],["/posts/f151ff43.html","2bcbf3da83f23f387c3d378ff6a46bf5"],["/posts/f1b0ad49.html","82143df2ad8ef5a8522bf3be52de1f04"],["/posts/f21e7f84.html","922ba7d909f076f77e73267d0ff7dce3"],["/posts/f230b0fd.html","c7dc1727132d41906ff806e75e954d49"],["/posts/f28a7877.html","1ad6554b3f8652c3e7ed537d96ce0e10"],["/posts/f663d5cc.html","d9ff1f9987db47361c500d53ec1f20a4"],["/posts/f730ad18.html","d018c2dc3eed43e848ccb5a24849e39e"],["/posts/fb5d4608.html","1a555ebedd919809f055b6ae320cda53"],["/posts/fc04d0d4.html","458c4dcf4b70f5c9a94ab2c3c2952b63"],["/posts/fc455f81.html","cb3ce34fd6f4db9f0e9d73a6d1594b58"],["/sumire/index.html","dbe75dcb326872b16dcdc31ed3e830d5"],["/sw-register.js","509a9f565293d76dabea1dc4ff6f8c78"],["/tags/AKo/index.html","dd5632446fcf02f030de772fdd000425"],["/tags/APPLE-project/index.html","0c84a701a0e7be9dce6f1fb9894ede01"],["/tags/Ankrache/index.html","db02fffcca73c79995fac8278f6b7a99"],["/tags/BELL-DA/index.html","ed78a82b5ba3d21dfe85f583369b965e"],["/tags/BL-Game/index.html","3cc13d664cee62a5fa1cbbc2cd955f4d"],["/tags/Blue-Dahlia-Digital-Creators/index.html","6155888f0d597d3d8e15b00b8ec48f7c"],["/tags/Blue-Line-Games/index.html","6a270b710e047e9659e4203406b9e4b3"],["/tags/CD/index.html","140bdcf1ef7f2f4786d24501000273e3"],["/tags/CHUNSOFT/index.html","d137facd2d3e83edea52585900380c10"],["/tags/Check＆Stripe/index.html","ba8cbfac2d66c96c83c0568165b001be"],["/tags/Cherry-Pie/index.html","c5912a17a68ac1ae77b368daaf1f5d11"],["/tags/Circle-Mebius/index.html","be353986ddc856ebdf08f7a73cc47689"],["/tags/Cosmillica/index.html","2e31dbb3ee8134e398cec295527cd6b9"],["/tags/CresCENT-BLANK/index.html","c48bbbdd704e2d012b6f4f13409b85d6"],["/tags/Dopamine-Software/index.html","926761ac10ee323c46c9a33b1de8257e"],["/tags/Dos/index.html","672fc7ac32807c2d2e5cd336232a77d1"],["/tags/Earth-Well/index.html","d5c7a9b03744542af6c1cf7b7dac6e50"],["/tags/Forest/index.html","5d4f006cb47d34e0e4dbdf32b7b02b24"],["/tags/HaccaWorks/index.html","ec37032bcfe1293ae89622b544b39d88"],["/tags/Kanon/index.html","489c579d2f097192401d16f2c8eb2de3"],["/tags/MANATSU-8/index.html","0e6ed0bc87514a6022e0d923093564f0"],["/tags/MARINE/index.html","203aa0b7bc2c07e326a8c7bb1b844113"],["/tags/MIO/index.html","5b25f152eabd6acdc397904753af9498"],["/tags/NAOX/index.html","16a4aa8b2788a9593c1a6d4edc38e2b0"],["/tags/Namikaze-no-Uta/index.html","77faf7081742c8fae93879ed7e32e57d"],["/tags/Nmyu/index.html","d3f40b2c47d97e9335846b97206a24e0"],["/tags/O-S-I/index.html","1e5d7e0c0fb98886681003b2d2b93567"],["/tags/Omegaの視界/index.html","7a9f48ca8174b63f13e69638433ba120"],["/tags/P-o-l-c/index.html","fed8f43bb28277c0aa344825275e618a"],["/tags/PC88/index.html","ea2ca648dc43f310aadfc324a9dc36e1"],["/tags/PC98/index.html","9b3077a6282a41044104416cc008d2b1"],["/tags/Perpetual-Room/index.html","be330e6ebe0b9bb72f3770a979770fe0"],["/tags/Pleiades-Company/index.html","b8fe2a375645b37974b1124217f9f79e"],["/tags/Project-Twintail/index.html","33a78e090c11ce4f91560822910066c3"],["/tags/RIFF-RAFF/index.html","484fb46ed867e4b73216c9bfebd7e218"],["/tags/RPG/index.html","dd1de6386072dddd6cd04659b45513da"],["/tags/RPG2000/index.html","820050801c715f063210364401659771"],["/tags/Reverv/index.html","5596d9ce0655e9e3915b3d25d951d956"],["/tags/SENTIVE/index.html","44ff2bff81a37f221e6af028f029e663"],["/tags/Saihate-SOFT/index.html","8e4f4f4327f4e4ebddbad460734c15b7"],["/tags/Scrubbing/index.html","05cb67ab1ec2a764632c0ddbdb37907a"],["/tags/Sky-On-R-imaginAtion/index.html","e1a9bb1d06cc10fe8e4be11461944951"],["/tags/StrayMoon/index.html","1148dd012764583b93db23cb416ed837"],["/tags/Studio-Bu-Sa/index.html","d38871662e267ad907c4a7a56d4a0ead"],["/tags/TRANSPARENCY/index.html","99f0d1f4a5a9437e9ba7bae4880bfa88"],["/tags/TRANSPARENT/index.html","4a1556f107a136396bc1e99a5c4682f8"],["/tags/ToHeart/index.html","7a916ed67bfc9be75d7910d4c006bcaf"],["/tags/Traumend/index.html","c8a1a00b2aa3b4c75d96d6d54adaff7c"],["/tags/Witch/index.html","765c762420d504c93776684551b84c3f"],["/tags/adonis-project/index.html","8a4029eb5fe801a3f4ee4913fe14e1b8"],["/tags/capriccio-suite/index.html","8e7423086e9f213371448da05e499b22"],["/tags/flash/index.html","4a924db47adec8bec75b49b5891e0bbe"],["/tags/galgame/index.html","376c5e42818c5dde04bcde8120eef61d"],["/tags/galgame/page/2/index.html","e17e09fe49381018dcafc2d89c935ba7"],["/tags/gal资源/index.html","6e1475f13f02f5f9ac31524d147739b0"],["/tags/gal资源/page/2/index.html","cd47a025be2dc3a17e5b19b7cd042d51"],["/tags/gal资源/page/3/index.html","14f47b765688545bcc1b8d0efb171c74"],["/tags/index.html","8512d2e92345050151ce614877f3a7f6"],["/tags/m-kz/index.html","3c45f6340a60b2449108b71a2ff7e8a3"],["/tags/purgatory/index.html","e2feaa63b4873b4b3816d1bdc21b1cf8"],["/tags/rkr/index.html","c257b35cb109b3a7bde87289325e8d8b"],["/tags/team-eye-mask/index.html","737bd02e789d0701b96717426f985d0f"],["/tags/ありすくろいつ/index.html","76b8f0be63ddeeac1b0c5b80ee6da042"],["/tags/いつものところ/index.html","56656e32a393c201de0c863da9319d96"],["/tags/きつねみみ饅頭/index.html","08f8ce7e9fa7b31f6a42ecfd933e1035"],["/tags/ねこねこソフト/index.html","ac7e04b0f740da9a05c8c60044dd8651"],["/tags/ねこバナナ/index.html","fccce3dc5c96ad22d94b4a37c4fa8058"],["/tags/はちみつくまさん/index.html","43bb7faaaf7aa0939c8ec5bb2f21146e"],["/tags/ろりちせ/index.html","d249fd210dc6634abb6ec086f16225a8"],["/tags/アイル【チーム・TATU】/index.html","31418187351490fbadee3d45e272900c"],["/tags/アクアポラリス/index.html","ddd9521e776a52214096541a9dab9295"],["/tags/アークシステムワークス/index.html","2dad9b009ca05fe9ae6b05fc6d5a74b1"],["/tags/ブロッコリー/index.html","3e4c525d1327cf97f30ad6a5c105b55d"],["/tags/乙女/index.html","e6ce15dcc118d7f27a51c29ba2d0fddc"],["/tags/乙游/index.html","2e86ca27014a31753e7c49ec8b5c628d"],["/tags/停产/index.html","85ea74734508b2acd20a452b41a2f1a8"],["/tags/公告/index.html","0a08746a25baddcf30f6b958dfe5d1d0"],["/tags/同人/index.html","277120042af66a06a6bd67d02f680cd3"],["/tags/堀井雄二/index.html","e15d6c4b02318cb727b6eb63f1364e4f"],["/tags/外海なおき/index.html","91eefa3a0e0cd21185c609304a3480bb"],["/tags/大熊猫/index.html","66d20d3e91ec38bb6c567e1aa1f3c082"],["/tags/女性向/index.html","9ff974934a10817dd97a0d0f5118e97c"],["/tags/安装/index.html","84f5587a3a7b7bef28b7cd9fe01a82e7"],["/tags/御茶ノ水電子製作所/index.html","b09b8f3217c2b7b72fdfccccb9098ed8"],["/tags/月の水/index.html","ca23f731da455a68dc6bb0fb41d52e46"],["/tags/桃野衿/index.html","8c662a23f53efe9a5faecd52c5f5de0e"],["/tags/機械式少女/index.html","8a4aaaa0b3c8403ca44d197dc4109aa4"],["/tags/水仙/index.html","45f86b6301ff5dc55a14dd2915b8e4ad"],["/tags/汉化/index.html","9421ae65b767c6d5227a33675104a92e"],["/tags/熊月温泉/index.html","05e79efd3d253643c2d4a85e3813d0cf"],["/tags/片冈智/index.html","a4dd8fc005e33530571c8a8379a5a14f"],["/tags/片岡とも/index.html","7c6675f361e053b978bd79b3178f2f25"],["/tags/牙の刻印制作委員会/index.html","42a7b8225b8f908e1cb2c1c2658e1595"],["/tags/牛カルビ定食-FLAT/index.html","1e1d2d6c579fc9d5e5f0f6eb0f741063"],["/tags/牧尾屋/index.html","de50bacd3ddffe58d69432ee39a3ef07"],["/tags/犬茶屋/index.html","667f154702960d238ef72dae0af3909d"],["/tags/猫猫社/index.html","21ce5539c008c31389360ce2a55855a1"],["/tags/王宮魔法劇団/index.html","e9444efb94a0c1841d39841384cae80f"],["/tags/生活/index.html","25337b26bb59bb92eb54a4fa16004943"],["/tags/画集/index.html","7fd585393bf2a89872763e2c1856c51d"],["/tags/索引/index.html","693e91a56ff44a9e99f59c60228f40d0"],["/tags/缺失/index.html","35db13b8353a4ead600d21a3c5da1def"],["/tags/自购/index.html","2e7b3faf3e2be96049c3bf478b9a0418"],["/tags/茶葉☆姫/index.html","13b1b92958b00499e6d3fe31fbef5a85"],["/tags/郷愁花屋/index.html","dcc4fcdcb8de7bcd96071b7c5da740d2"],["/tags/閂夜明/index.html","1a41f513a321295fb54bf2158eeaa47b"],["/tags/音乐美/index.html","d1bacd4329b452f6f41f6fb95617aaa4"],["/tags/黒†救/index.html","de46daaa423b40525655879c0eb9be16"],["/tags/黒百合っ子大集合/index.html","1bfafc70fb17928d5f846ca01c7d9db4"]];
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
