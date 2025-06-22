/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","05dd883f391e7154c12d663cecd78202"],["/archives/2024/04/index.html","1ec45721240cfa6a85a8e898535a13c9"],["/archives/2024/index.html","6ce3be05bc95271959cf2f7057e64b53"],["/archives/2025/02/index.html","03e81d782d23148db8e0f890c12f8ae2"],["/archives/2025/02/page/2/index.html","bb5bba5a8dbef3043e238b0aeb4c6ea8"],["/archives/2025/02/page/3/index.html","d8dfb8eba4c73160f160d58363b46c21"],["/archives/2025/02/page/4/index.html","65edd7364176a64f85412794787b1f91"],["/archives/2025/02/page/5/index.html","ced574b74225ea552bd4954b78af2f91"],["/archives/2025/03/index.html","944452e93132483ba470bc4b911337d1"],["/archives/2025/03/page/2/index.html","09adf5d222fe2082605065f8354a8c9c"],["/archives/2025/03/page/3/index.html","e7e9d6e15708f614778430ed1078721a"],["/archives/2025/03/page/4/index.html","e3e61ea8d073ca8225689e510add54e2"],["/archives/2025/03/page/5/index.html","1c482298d624d8aa19a60e24c6ddbae7"],["/archives/2025/03/page/6/index.html","2bb67247eb988637dd92a2f7da68f9e7"],["/archives/2025/04/index.html","1f2154b737b6fd64bbf7e230b2b9b678"],["/archives/2025/04/page/2/index.html","a62a59d31fb15a202f7da7a0e8544f25"],["/archives/2025/04/page/3/index.html","d27ed8eff778fbb4400cfb5014fb9cee"],["/archives/2025/05/index.html","553e556e98a031833d2d3536ef42a9dc"],["/archives/2025/06/index.html","9a83117af4d795a84a4b01918654ab39"],["/archives/2025/index.html","ce93ed4bb39f4dcbe5c66a0ffeac540e"],["/archives/2025/page/10/index.html","01d51f4256ab24703ae8cb6cc9e6a5d5"],["/archives/2025/page/11/index.html","e4d356073c4b3e3f79fa9958278a610b"],["/archives/2025/page/12/index.html","5ffced2f4c863d3b7e50ee48a4861028"],["/archives/2025/page/13/index.html","fdbb59337b48c76ed7cabcc4cf003329"],["/archives/2025/page/14/index.html","71efc30565caccf66b9c3a49f1f99acf"],["/archives/2025/page/15/index.html","aaf0c8c6c696e42bb6494810d19fb112"],["/archives/2025/page/2/index.html","2bdb7cad3d4f043ecb740f211f7bcc20"],["/archives/2025/page/3/index.html","95abd44621bc04c3619a2d260e7e75c7"],["/archives/2025/page/4/index.html","a1be6efc2df4680a30afc58aca0ebb2d"],["/archives/2025/page/5/index.html","cda5050cdf74d8e638ffd21f0080c60e"],["/archives/2025/page/6/index.html","c0b6c3ba270fa4511eed94aafb03ff75"],["/archives/2025/page/7/index.html","3b6e879503ff8445f0805736a20afeb4"],["/archives/2025/page/8/index.html","bbcdbdd5136442ccff7f42e642bb5c71"],["/archives/2025/page/9/index.html","53f8795e8220440f2f5e478f60828fe1"],["/archives/2026/02/index.html","1d131b6a2dc123f553b9e7ec923a81f8"],["/archives/2026/index.html","94b4dcd676c6ec50a5acc021fe38bf33"],["/archives/2030/06/index.html","56a1a8659e0f13830cfcac2433fe4bdb"],["/archives/2030/index.html","2122e8aa68faaad402fdc4b1a1042fc9"],["/archives/2825/04/index.html","6cf33c99d8446c7567834d5894925104"],["/archives/2825/index.html","0d174c6efbaafcbeee782d82df733cbb"],["/archives/2925/01/index.html","5b1f9fc4794818f8512db94ce2937feb"],["/archives/2925/index.html","78c1ec70ca5069c90533fdc2bf1ebd85"],["/archives/index.html","4af524c35a62d0ad6ce1039a8476cbd3"],["/archives/page/10/index.html","739c798341a141296a204e995eb8805b"],["/archives/page/11/index.html","b7dc0857ee76f4a0eb2acc6321cfdfe2"],["/archives/page/12/index.html","2841ed3a79f79e23260c92775e5c32bd"],["/archives/page/13/index.html","9c9c9da4d45cafbba8e7b20969c9668a"],["/archives/page/14/index.html","77961d5d4736d6872d7ec2b32e1394f5"],["/archives/page/15/index.html","91d93ad55b7016a61a8f143c24375a0f"],["/archives/page/2/index.html","1053eec1e653cefe29ddefa1d8d5a2cc"],["/archives/page/3/index.html","f0aa256032ef1c5c02907c723a7b5d54"],["/archives/page/4/index.html","c65e47b0222d25d926e0e0258956f9aa"],["/archives/page/5/index.html","160f37edf27b6b5b1fe159dc4c55846c"],["/archives/page/6/index.html","5fbc4822892ead33de0e71c0cef34f3a"],["/archives/page/7/index.html","469d264f626381dd2de07c7b66e43c52"],["/archives/page/8/index.html","da9af1ffadd3b666e2b713050c0da535"],["/archives/page/9/index.html","4d95ab9a287d946f466dabe8d5e70f1d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","1f03288df6f5363af312a5c3652408f0"],["/categories/galgame/page/2/index.html","51c12b75a13d0d256355682bab0dc8a3"],["/categories/公告/index.html","ba48fee051f2734f4effb38284020323"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","6f084ef6b899e2a9cd1e544456b87813"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","4cb99fe3650e261a8a305915c243799c"],["/page/10/index.html","7d9aae7ed9165cfc6ef762006746368a"],["/page/11/index.html","54771fc379f026070ca3170885e45e33"],["/page/12/index.html","cec9c9f27a46b3c16527f488e90cf710"],["/page/13/index.html","339059345e64b4cf65f51d32c219f6db"],["/page/14/index.html","bae3fb6f6462896e872cf19c826992ff"],["/page/15/index.html","76ae286d242def68cbb5f090fe265ffb"],["/page/2/index.html","1601a092c1d12cc8a018416c984bb939"],["/page/3/index.html","a1a7f2d64e95256a0971c1fddc91a69d"],["/page/4/index.html","971a8b1ba3047c9e560326b85ec4dc4d"],["/page/5/index.html","89ce3b3ccb3a448df69f554476724389"],["/page/6/index.html","0437bb449ec783668c3ac490bc6b4433"],["/page/7/index.html","9fdf799ebaf78e845d3da6a9f5ae5f83"],["/page/8/index.html","2dbb5c8e1820c908eefb174f23150849"],["/page/9/index.html","dbb12a1fadb510aa350b8e685e7ad47f"],["/posts/10c9dd98.html","9067453645995434089b47143da2793e"],["/posts/126ebb99.html","4a43749d1396d5267abcdca68a4b919c"],["/posts/1295b569.html","ee30fce91792bbae5b583fe126c26cf7"],["/posts/1370342.html","a38815e5b6d646047af51b32916ea4b5"],["/posts/15ef14c2.html","827f58c9c96396e810b73d41e1a1582b"],["/posts/15f3959d.html","5dc90f028deff39e82ae47c1e4261732"],["/posts/18ab785d.html","fcd37485c7e2c94e09f26492a0830011"],["/posts/1d59b71f.html","e3d185d9e675bd2a0464d39c72c614aa"],["/posts/20b3f3a4.html","616d314e52684f124c8dd4429430e23e"],["/posts/244daa7a.html","2d4d9c407b4a9f8ac7a8c68a3faa5802"],["/posts/245f1c7d.html","9ff62c09d5588a3e1b37ba87a4264537"],["/posts/252658f.html","e5813281427173972668e93006675209"],["/posts/28397adc.html","4d1c7acd7aa261f59a98e84cfaf67423"],["/posts/2ad07f54.html","7e48eb4360e474a2d1c0eea120183265"],["/posts/2b38bce0.html","14aaed73e4b9687ca8c279eaea95675c"],["/posts/2c0a6836.html","5fb541ff33856074dcbf47b14afbeb59"],["/posts/2ce39bcc.html","02d8c387ee284c92ef3bdb6d40067ba6"],["/posts/2cf620f0.html","832f11f239b2a7f84b8429610d47f5dc"],["/posts/2e30fd6d.html","849c93fd30bfb20400b4c4e02edc95a2"],["/posts/30a413ad.html","327322deda8a124189d3f35c3a46faf2"],["/posts/34292736.html","2c478713b08d8b2243f206e9199c893d"],["/posts/3468cbe.html","886801db32c91ecdc291a9fd99c46a80"],["/posts/39176dc0.html","871a40e5aebe3e0c42f5e726975641fb"],["/posts/3be6a165.html","3304c57486d94a475f8fe37789c962e0"],["/posts/3daf73b4.html","6490f2eb8b8903d16a5564648c404ecd"],["/posts/3e118dbf.html","57685b17c98c596c99c5bb923cd6eb72"],["/posts/3f7d823a.html","5d6e30e8f18a5005c94d81260e0bd4ed"],["/posts/3f978819.html","2f2a1490c77dbf1e3234201ed1f9b097"],["/posts/41dac80e.html","85cfae1641c75046f60a7bc9e1522b05"],["/posts/43945723.html","43ee9e275f80d363e998f977291889ab"],["/posts/44124a6b.html","2a1a602cf6003bb2224bfea7e4bb1e80"],["/posts/476a3006.html","8b6742e4ae84649e327ac71d21ca894e"],["/posts/47abb61d.html","a0f71f80ea97bc71e78c09ed223d71fb"],["/posts/4996478a.html","eb3b672e5cfd4d39f01901d746af802a"],["/posts/4b689be3.html","0a7dd941899b06a9f0cd451a59bbfa2e"],["/posts/4cf8423f.html","fe2f5e82d3466633ad1c531d55634f26"],["/posts/4dcf85c.html","b7999cb9167ac41c4b0a8db5e48db6ff"],["/posts/500cd322.html","b43acb33fe2a477f9d9d100563e09b28"],["/posts/51c9b1ff.html","6afa62887c5ca233a398fdb3b702dd88"],["/posts/51ce68e8.html","6f2935ddfb42c8208cb3221a415355c3"],["/posts/52b5b3c6.html","d06de9eec3e261b4dd5c2db653b12f7c"],["/posts/54f496ad.html","e2ed7d02e2ce5ce540bc7d177d3af5c2"],["/posts/558e1f30.html","26a3b33ccc5b538353ed37c30fa91992"],["/posts/5d8bea92.html","d7ba711ce40a52bc42c42c5cbed46c47"],["/posts/5f6e0c59.html","12878834ecbfc465cb4e55a042106d2d"],["/posts/61a63a84.html","d4b50e4269011ac221a63846f29e89be"],["/posts/625ab7bf.html","952adf4970f44eb47a657958ee7e54b1"],["/posts/6336a2f9.html","d4499eec88e43dffb62d22bcd68f36db"],["/posts/6432d61a.html","81e6af951c00ae49ff42b1ce42272fa2"],["/posts/6515f032.html","3fc90eb6027be30b85f5d28537caa548"],["/posts/6720ccdd.html","dac601b0b12580838a00ca3b9a6c5ed6"],["/posts/6a4b5ac8.html","dd06cf0dfb61255ba6dc05b5882ee8c3"],["/posts/6aa4177c.html","accd64a1a81cd1cbef9b697e3b282aa0"],["/posts/6b15f81f.html","391b94df53a8dc0c8498a6cd90765783"],["/posts/71131d34.html","7f7c744520da47ab43e89a5725a4460d"],["/posts/742fd48d.html","a0cd9eccb03cc19d13a1084b5fc1bc2e"],["/posts/78a8a8d3.html","6f5149ddbf27a7bedf40558d31faf58d"],["/posts/7a5ef3d0.html","af43002a9623aa84ff0290e94d04d5ab"],["/posts/7b41e1ac.html","c81f00c63c1d5d3c6df78e745d85f1f4"],["/posts/7b51011d.html","15f4c364e61a5ddbe262859056f4ab04"],["/posts/7e3aa3e2.html","6ec2cea4cbc7f81f2da605e152e353c7"],["/posts/80fe2691.html","aee384f8b922ac0ec53201e9fd2c6409"],["/posts/81ac52e9.html","82f8b909b6e9f5d97f6fa1d59fa6b52d"],["/posts/82332d11.html","7f0baccd323c5b3e10cbc0aee7ab0b15"],["/posts/8486f6f9.html","e829d790e4b227ad8dab42ffc82811a9"],["/posts/849b40f8.html","6bb9a84451c2654c977dbbdcfd4154c9"],["/posts/85c51d68.html","3b51e98353faeb81c7355a0860a8b021"],["/posts/86a6c500.html","7c538bd5e123d26f8e6f6ca3651b31de"],["/posts/886f8d3.html","cb15df68cb4466f2ca177ffc83f35b3a"],["/posts/8a7cba10.html","44a1988e274094aca977ca376504ecff"],["/posts/8ac11b41.html","d74e4e2221c9b82585e8b581f2562f89"],["/posts/8c3f2fd8.html","15d67b170c12c03bb441f80d83e0fd60"],["/posts/8dd520d9.html","4f9df36887ad33e626e8be6025263c65"],["/posts/8f555654.html","8784006dd17155a50a74730986db7731"],["/posts/92a980c2.html","49b9ea06515728fded8db733093dd8c0"],["/posts/92ce16.html","8fbee1aa3b274579e09bc36e36ed22af"],["/posts/93e9943b.html","1950d0dea24eda6cf02adf26ae005c6d"],["/posts/94d3c794.html","6192d05d1584e2e9d23ef5ef838fab50"],["/posts/9606c2fe.html","a63fd74927070984df71fb2c54129203"],["/posts/96b281f2.html","2c4b8614281e8c0e6882989a6d368f4d"],["/posts/97f50eea.html","2d33b6bbca2c2ffa5661e3d4b539e44c"],["/posts/97fca8be.html","6e44e0e5d57e3d7d81c06f18245b6cea"],["/posts/98662d05.html","3d87481182a02c101472e2fd87b21401"],["/posts/98ef47c3.html","2616cb0fedf45c52b508270d4db1ef48"],["/posts/9a2f6162.html","4b9d65aabaf90008105a9bfa12edefc3"],["/posts/9b22a48d.html","664872e8e2baf82519f6c130b6f7da90"],["/posts/9cb455b1.html","eddef98e56ea5fc07e63c5a38576f6cb"],["/posts/9ecdeecc.html","ca8992cc4996a4af88bb06296523374d"],["/posts/9efd7701.html","7a9bf72e53b811dbff82540a4c323d27"],["/posts/9f61c1a0.html","e620f31e206bbcf26bbcbc509adeb74e"],["/posts/a1de710.html","20503ac560489027ae53bc2f74c51884"],["/posts/a30eb0cd.html","f59696475054158986eba00b9a544d71"],["/posts/a72f71c2.html","876f3804c5d89995b426c034a8703c7d"],["/posts/a7634b5d.html","3d8c4cdaa719161bb484aa371a82b287"],["/posts/a8c593b5.html","2767a0d390be393b2e1bf165913d649b"],["/posts/ad0c1efa.html","b616c689b2a7e2648f1e2df61f4d3c3e"],["/posts/ada3f440.html","4bade2e0d52daf6b03b7a55bd21ae6a0"],["/posts/af1807ef.html","4f0c49787bca55ebf15ba48626ad4fb4"],["/posts/b397bf03.html","3c61077cf6f9aec6d585cf4dfac740f2"],["/posts/b497b647.html","aa9b8757fef7f5e73c92f8b1f9de9fc9"],["/posts/b4d464b0.html","6c4913a72a7b2b6a0d5ad4fd8d9856c4"],["/posts/b5fb773f.html","c08c409b305ee1a153841207b66af670"],["/posts/b8d46b32.html","c0ad50f22da670452f9ae43aa0614c1f"],["/posts/b9872f2c.html","1d81f73428c1b0aa2216d429f60fc3e6"],["/posts/c1b2c6c9.html","10de3c75cbb57e41e332cf2114ce020c"],["/posts/c2111cbf.html","f89b8a202d9b94e41381c17cc1c0bdf9"],["/posts/c316c2e8.html","44e55aa55251c866da77e04b27c4a5df"],["/posts/c43e60b5.html","7b02d00cf2fbe0c036de88ce3abb2824"],["/posts/c497a412.html","54d8299a42737cf660f4c1848468ef85"],["/posts/c5395ba3.html","2b9d6f832c900726a1451250a058c87c"],["/posts/c5de299a.html","2d73a23d2fd8aec1de5f534bc99e4ab1"],["/posts/c70bba9c.html","0e0a9f34919e1d890440dbf99bca53d6"],["/posts/c797535e.html","b470ba796a730a4f615c73206b025765"],["/posts/c7a62c79.html","a77dffca966312e48d23ee73c9c0a7b6"],["/posts/cae2c959.html","f197998a64b717466035c3b33d9744b0"],["/posts/cbebef2b.html","ba97530004a5eb2fa9c7d33628f3734c"],["/posts/cc4c0017.html","b7de001b365bac5352483ff58d3a0b4f"],["/posts/ce25023e.html","cd485ce2b63e7a85d02bc123f612f14f"],["/posts/d2fd4837.html","880a4ef22c7b74dd7ea8215fefcf826b"],["/posts/d3233cbb.html","78772039685333ccf4a8dd54097bf9ff"],["/posts/d3a745a8.html","2efaf11b9d5968e176085962fda1aa32"],["/posts/d7e940d2.html","4a8e8c5e3354b9c85725234d91fa5e9e"],["/posts/dc815d5.html","0060aa46fe53ee3423169dc244690ff5"],["/posts/de25b0be.html","f5014b36f1f94d606a8cc8a3f2318c3b"],["/posts/e2623b4e.html","745951cf4be5b70529baeb75d461c8e5"],["/posts/e3ab6ad8.html","cf4127126bf9649c65cb608c13e6268c"],["/posts/e5018da6.html","4be92faeb12233d3f9c59d2dfd505a9d"],["/posts/e5963272.html","bd480fb2a25b0f23733989222e71e2a6"],["/posts/e5ef4c3c.html","cd6673bfc22c04d6a2e2bf5f3e14280c"],["/posts/e624b065.html","c2b54eebffde470c32e9f86a00aed6cd"],["/posts/e7c703bb.html","0878333be43a9ba782595985b831040d"],["/posts/e8f14b6c.html","c7664776f8b006a05eb4dab18239cd9b"],["/posts/e91abb63.html","fe618701c1282e3f65c7b3dfc5e618f9"],["/posts/ea9a8808.html","b13efeb6258a7bd546bcc19401d6d1e0"],["/posts/eb784749.html","13733d06abdd899f7588212f5ad6d637"],["/posts/ebaf2232.html","e08000fe71bb646f04f842c8ce052a9d"],["/posts/ed75f185.html","cc788cd1220f5e59ee9021c8c96822b2"],["/posts/ee1ed673.html","e8fd38ce91d9c26f72f6251bdaf2b036"],["/posts/f0c3ed61.html","533e46c7ba3531fef3a1fe7ca988d267"],["/posts/f151ff43.html","3e7ba51ee71d29ac50e2a8065620189a"],["/posts/f21e7f84.html","25cd7aeb48d497f93b4c18166664c8ef"],["/posts/f230b0fd.html","e26dc29a19e8186fe9398e1f1cd30130"],["/posts/f28a7877.html","5f174ae01cac072bd78fb3b3ab220488"],["/posts/f663d5cc.html","fafa9f5e86e7ac1824c49705be25af3b"],["/posts/f730ad18.html","d253e3402ad132bfa9f5153b6f110e58"],["/posts/fb5d4608.html","8c32a20d428824c23fa3c3fb793349b4"],["/posts/fc04d0d4.html","c8f49dd13d522f4e9edbf6d986eabc0a"],["/posts/fc455f81.html","df94e41d90d0582d0aadeb2f5b814e35"],["/sumire/index.html","bd07b9cdfe766b9251f2b04bd7654457"],["/sw-register.js","dc49cfa7c92ad19b1d5cd49febe01cac"],["/tags/AKo/index.html","62d4d02b7f298f799ad7617b93ec431f"],["/tags/APPLE-project/index.html","7c19087ce8e386aa4877542fb538f506"],["/tags/Ankrache/index.html","dd88788e0b88b54100897f847b3b1a79"],["/tags/BELL-DA/index.html","2e88b42341d69798f4667be0e45203ce"],["/tags/BL-Game/index.html","20bbd538c27e582f8ac974ba291ba2b2"],["/tags/Blue-Dahlia-Digital-Creators/index.html","a88abf5f2dc67571b81bcfcccf9dfb23"],["/tags/Blue-Line-Games/index.html","085fa6836529deeefa120cc241504a3d"],["/tags/CD/index.html","986ecf399e849980e9ee2020cbe42f5e"],["/tags/CHUNSOFT/index.html","f8eb3a048461dddf8e6a7306d0b3be62"],["/tags/Check＆Stripe/index.html","f271136796ae8a44039f1ad0306a7966"],["/tags/Cherry-Pie/index.html","eb0337138860bca4207c51a0f187ea58"],["/tags/Circle-Mebius/index.html","2f0af8739d612b8b5e853f1a3d2a61ed"],["/tags/Cosmillica/index.html","b77a6ad09beda8fd3543b1bd1b719eee"],["/tags/CresCENT-BLANK/index.html","c7d37fe80dd6cb6838b57b5c4bc40ae7"],["/tags/Dopamine-Software/index.html","0b3b1dd9f19de4426cfd0f77bce1cacf"],["/tags/Dos/index.html","369e49731b4691b5213c192573944194"],["/tags/Earth-Well/index.html","63bf091eb8c048ab60148396783a823f"],["/tags/Forest/index.html","e2f98f7f999e837e9bfc6412f52bffae"],["/tags/HaccaWorks/index.html","ab3d27e1e82507721f4b891693995a9f"],["/tags/Kanon/index.html","0210c13d668c3cbca726eb4e323bc181"],["/tags/MANATSU-8/index.html","fd2dac1831b22f4267efd4ec2d82c2ec"],["/tags/MARINE/index.html","24fd4e6ced341aee992138c7dfd835e7"],["/tags/MIO/index.html","e9f8f141302d7389ecca9bda5b314207"],["/tags/NAOX/index.html","8831f9a3c8cf9e2bad860a8088ace750"],["/tags/Namikaze-no-Uta/index.html","1dfa65e43fc20f3f6e4228e176ad95c3"],["/tags/Nmyu/index.html","f5a77a8dc029ff90447ba4c3eccc83c4"],["/tags/O-S-I/index.html","c7c4b95ca0dc3207b7c21111cb079666"],["/tags/Omegaの視界/index.html","5821ff8fc647e0bde4e370dbc7b4a271"],["/tags/P-o-l-c/index.html","19492f0cebfa5b5a432e078f1308de15"],["/tags/PC88/index.html","1a054cade549a0ea117c7f9e8b0d6f41"],["/tags/PC98/index.html","c677f270eca895bead37e4fde544a800"],["/tags/Perpetual-Room/index.html","def901492bfdedb833612d3b8048c0a1"],["/tags/Pleiades-Company/index.html","88e76ac245299479a71b1453c4d384f0"],["/tags/Project-Twintail/index.html","60c97f7230b794162e4496c78fb7211d"],["/tags/RIFF-RAFF/index.html","e7045b9a9570e8f8a9127081005e6a6e"],["/tags/RPG/index.html","501d45e1dea0ce33e95a4c93bda9a2d7"],["/tags/RPG2000/index.html","5160c66019888f977298619f34c2b056"],["/tags/Reverv/index.html","9f2b6b533d9b10c10e589ca9406c3768"],["/tags/SENTIVE/index.html","b281344c71565261b83ff3d56e630024"],["/tags/Saihate-SOFT/index.html","7d97f038365f0662bfcf6665014d6b0b"],["/tags/Scrubbing/index.html","c11b24524f3d2eb537e9ee2bb0280748"],["/tags/Sky-On-R-imaginAtion/index.html","d111dfb96b31b6fc732919480db7628b"],["/tags/StrayMoon/index.html","066a57f7bafb2b8f1087d4fdf7af3f8c"],["/tags/Studio-Bu-Sa/index.html","c8e8ec83b548dbef60eb9a4f4b1ba753"],["/tags/TRANSPARENCY/index.html","4639c504c46da7dcb712d6361b867788"],["/tags/TRANSPARENT/index.html","28fc3ca2a0aba5a2599517d0be63c8b7"],["/tags/ToHeart/index.html","b41762567a1be92a7ac869930f320e45"],["/tags/Traumend/index.html","166b3de335f2a6ab259e6d7dd3b07729"],["/tags/Witch/index.html","c44c030a0e66e5b04e47522e8c95f293"],["/tags/adonis-project/index.html","4ffc377ffa203dbe26b6b09d4910fcaf"],["/tags/capriccio-suite/index.html","72b18c44aec8bfe00005259589b75231"],["/tags/flash/index.html","89eca9ac7207811305c6fa3d2ab0301c"],["/tags/galgame/index.html","ffbcf9e0d803927ab0a3d08204a11a66"],["/tags/galgame/page/2/index.html","5745daf5a738aa2337cd06aade7b5c25"],["/tags/gal资源/index.html","b70e160dee44f60791f30fda2b7f99bb"],["/tags/gal资源/page/2/index.html","a4284e18f456a5b918630c90f57c65c6"],["/tags/gal资源/page/3/index.html","1e8a6e6a35bdad2dc5470ebb7f44c0b9"],["/tags/index.html","21199d7767db2f246652e0986dcb865a"],["/tags/m-kz/index.html","97f74f643043417ada8bf5a09b92e396"],["/tags/purgatory/index.html","cf096b8aed8aacb65940a59ba561be52"],["/tags/rkr/index.html","5da384c57371716cef4d4dc11cbe62d3"],["/tags/team-eye-mask/index.html","12b0563b8a50414b5a0ee708fd3fa104"],["/tags/ありすくろいつ/index.html","f102ce92c8095d232ca36d1554c5edbe"],["/tags/いつものところ/index.html","28017aec5b18c5ab8d2333476aebc11c"],["/tags/きつねみみ饅頭/index.html","37ba87b10df6b6e5debd4f4dc4f548d4"],["/tags/ねこねこソフト/index.html","3dae05af5e766cc3aa2458174e31c3e5"],["/tags/ねこバナナ/index.html","d4c3e2116151bb52ccf130c9f5a078bd"],["/tags/はちみつくまさん/index.html","e9ecc6c5e7a790eb43b1f7909fff6a7a"],["/tags/ろりちせ/index.html","9efc130b318085fc22ec0a2ba261ea81"],["/tags/アイル【チーム・TATU】/index.html","890ddf03ea84e5482a4606f5c32530ca"],["/tags/アクアポラリス/index.html","84653a2ff218165e354bee3db098d57e"],["/tags/アークシステムワークス/index.html","ba9a86bb99bddac595eb1b327ab5b36b"],["/tags/ブロッコリー/index.html","91b4ac3d61daa3d8f992af3f9ebb0226"],["/tags/乙女/index.html","15f0f81a6de88c181176158a5162d60a"],["/tags/乙游/index.html","4a10d2b0010e9e11d99a0a6ffde172a9"],["/tags/停产/index.html","5b44ad875de1c6bfe0a96143ba6bbde5"],["/tags/公告/index.html","90a133207092103f1b2caf932584e99a"],["/tags/同人/index.html","b0907b75c8bb5f55c6da4aaa242ade82"],["/tags/堀井雄二/index.html","3b161d07a6225aa719fc6e3b11d73cd9"],["/tags/外海なおき/index.html","cd244f63da8cf81eabb912d692091aea"],["/tags/大熊猫/index.html","37efa0cb2914b075a930591b118fd4f1"],["/tags/女性向/index.html","c1620619828ca9afced745333bf89f40"],["/tags/安装/index.html","7b2d962461e7abfa7f10831ca9bddedb"],["/tags/御茶ノ水電子製作所/index.html","7ff4995da013daffd2c4165cbb9afc8b"],["/tags/月の水/index.html","5f32c8cb1916300e1ac7741efc6d043e"],["/tags/桃野衿/index.html","555f208cc6bcf7d4e9249c43c8a6cfcd"],["/tags/機械式少女/index.html","a35e6f0b67218ba6dc94ac4400d0f93b"],["/tags/水仙/index.html","45de22bb616aa765392b277da3434321"],["/tags/汉化/index.html","9fc34786ab8cfa9a4ef77615ef04301f"],["/tags/熊月温泉/index.html","9d39218f9f03f637c8e3b7c215ddaaae"],["/tags/片冈智/index.html","040d6a192097dae573db40d3b493ba86"],["/tags/片岡とも/index.html","54667a7596895c3ae10879e63bf09131"],["/tags/牙の刻印制作委員会/index.html","d07eaec1e84ab584119e3696d7992507"],["/tags/牛カルビ定食-FLAT/index.html","683587573ab08fe532736de48c673806"],["/tags/牧尾屋/index.html","2ed45171ba20cd0425c3b7749b117abf"],["/tags/犬茶屋/index.html","61b15b392afd0bcf316ecf026c54523a"],["/tags/猫猫社/index.html","50e908e0bbe5d68437a60648848d3ee4"],["/tags/王宮魔法劇団/index.html","19ade0e4c1bf5a50efdde9cb47410161"],["/tags/画集/index.html","6cc1cca1bca5d5e2f824a48fbdf537d2"],["/tags/索引/index.html","d98cc9e5f375a6f21e2a9774fd0cb30e"],["/tags/缺失/index.html","80fc1bc743a31d1ad8de2693f01bcd22"],["/tags/自购/index.html","c9bcc7a4fe1db2efba3b82cb01c97d7a"],["/tags/茶葉☆姫/index.html","2d95490157e7bbca61268fd4845fd93b"],["/tags/郷愁花屋/index.html","0f97e09e2a10c76a7aba3dfc802c5537"],["/tags/閂夜明/index.html","a0134665c6396481b57abacbe478963c"],["/tags/音乐/index.html","ebea1d0b1f9f27d2bfa649f7604d2ebd"],["/tags/音乐美/index.html","e67b8bfbc9f78257be0432a5a3867ae0"],["/tags/黒†救/index.html","e90ac5c643afcb73d1fd91bb65da7d5b"],["/tags/黒百合っ子大集合/index.html","a22ce7e0598e5eefa9ac0175c27e7595"]];
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
