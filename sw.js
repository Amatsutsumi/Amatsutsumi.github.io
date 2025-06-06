/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","8287ef9cdc677573adcfc86e531c2fdf"],["/archives/2024/04/index.html","27020aa1194f8873168632a2be98b2cf"],["/archives/2024/index.html","8581e9393c71efe3dfa76249c6cac385"],["/archives/2025/02/index.html","335ac9acefd553386cd6700c89f90246"],["/archives/2025/02/page/2/index.html","7f300750723327b3f42131b7919d3540"],["/archives/2025/02/page/3/index.html","66afdb61b978ee8965f8f0feb2e651be"],["/archives/2025/02/page/4/index.html","d9e232b420b8f0d91f8b2ef4eadce0bc"],["/archives/2025/02/page/5/index.html","a99aec5d3fa3d6fd84dddd42290c37e3"],["/archives/2025/03/index.html","dedf54ddfaf431f79e8c5669fd2d81a1"],["/archives/2025/03/page/2/index.html","0f54080f9717785564426a2f68047485"],["/archives/2025/03/page/3/index.html","c0f2a9f48c5f58623819e2e408bcf33f"],["/archives/2025/03/page/4/index.html","e3eabef34a23ca0f133398f83c1115da"],["/archives/2025/03/page/5/index.html","6d2dbb3c227e411ce439a6b23b05aa91"],["/archives/2025/03/page/6/index.html","370c0307a491fba8304832ba10bd0435"],["/archives/2025/04/index.html","07c0a1ab71a740b43b072f9097623dca"],["/archives/2025/04/page/2/index.html","424433c217dfb58e4777791574a7617e"],["/archives/2025/04/page/3/index.html","9ea186477868b89e7f6fca4ed93de903"],["/archives/2025/05/index.html","774890368454555190c2a59d8d481750"],["/archives/2025/06/index.html","0946d0159e601225748f3e0229f7be67"],["/archives/2025/index.html","89fef36ad9cf10de57385d4cb75d633b"],["/archives/2025/page/10/index.html","4ec6cbc7144afde384ed1040dbcc5f16"],["/archives/2025/page/11/index.html","fb0fc0a3ce390467864fb92de9edc6ab"],["/archives/2025/page/12/index.html","58e3d2dc8bda7fd66c38100f056c9c98"],["/archives/2025/page/13/index.html","87202b5c84af606eeba415eb32d6e4a6"],["/archives/2025/page/14/index.html","630476388fe47b754a985857b4e57579"],["/archives/2025/page/15/index.html","7907c6ebc364d51c00d609573d750848"],["/archives/2025/page/2/index.html","8ea85830354083fc8e17946f2b7ebe18"],["/archives/2025/page/3/index.html","eda714865adf991a0e354f827d0599fc"],["/archives/2025/page/4/index.html","ed14df99d7dfd33a2006675fda7c3451"],["/archives/2025/page/5/index.html","2b427788c10571e102d54378b1bb8455"],["/archives/2025/page/6/index.html","c53cf0845df772ae15af13f5c3732ebf"],["/archives/2025/page/7/index.html","a38cebbf96c6a3546c75f731a7e04685"],["/archives/2025/page/8/index.html","21d6d2443a3ee1f59dedf03813f4f087"],["/archives/2025/page/9/index.html","9b037d1e2be15ccc652f0ea2097a09d7"],["/archives/2026/02/index.html","66f9aeb734599bd4a58a7215f0a87b65"],["/archives/2026/index.html","b0ab69fcd3af94b4442360f8eb7b0276"],["/archives/2825/04/index.html","9be26f16da2c9af91f71c18754d23846"],["/archives/2825/index.html","ab480bcd216bff1315034570c874ae61"],["/archives/2925/01/index.html","16a1e6eeac6010a4f94e4f2a56f6c38d"],["/archives/2925/index.html","bce80ad5830e748c1ad54915b373de73"],["/archives/index.html","bb41d1108b032eabc2c28afe722cccaa"],["/archives/page/10/index.html","f6316e930902db352a968a14a5a58629"],["/archives/page/11/index.html","37777d085fd6c8f38804983fd54696fe"],["/archives/page/12/index.html","1883d7c2e85b75332ac9b92980c9eb4c"],["/archives/page/13/index.html","f3145282a7e599c25644f0f5dce0395f"],["/archives/page/14/index.html","38c1c5795d0be593e6e388618ff8f57e"],["/archives/page/15/index.html","a47896f289484755210ca28b8d612f26"],["/archives/page/2/index.html","682c0cee7448008da6fea1fda20e3079"],["/archives/page/3/index.html","f61976aa7fe79acb5ea45fff6abbba45"],["/archives/page/4/index.html","4934a499b048dfe0de851de7fefa0c80"],["/archives/page/5/index.html","7ede9f1d5e8ffe957e486571d708b7e7"],["/archives/page/6/index.html","88dd0da39936dd62191932d3602d2c28"],["/archives/page/7/index.html","7cc70d8ceaa5a1687f86d18787987ec2"],["/archives/page/8/index.html","2c0c8d7137a9d9e6692fecb543fc3543"],["/archives/page/9/index.html","2eae04981bbe8c76fb74760afef7f615"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","3bb09d26beafac05cdcc965fb8dc50b9"],["/categories/galgame/page/2/index.html","bce7aa1e1ea3f3abf57cc8d35b97c90b"],["/categories/公告/index.html","da3865a8f9e10f2dcaa1baa124022981"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","6b01513272b81a9a4730a9216d6ebd77"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","acc90c82c113bda82e1ee842cbea26d2"],["/page/10/index.html","8c1d1580ced9d9050a4fbf8764992460"],["/page/11/index.html","a9af85324ca0738e43d05ddc803c66af"],["/page/12/index.html","bebc1c3726f7fce2c63b646bb3863695"],["/page/13/index.html","6c1f4126553d36b7f5b1d317f4559913"],["/page/14/index.html","f07033241f7cd1fb6991aeb7b4ae4a6e"],["/page/15/index.html","87989340458a0a054471f6f89b6f36fb"],["/page/2/index.html","a6fa78a42376293f1cef818085619070"],["/page/3/index.html","136cd52cf9579e8054562ded0f3c17b6"],["/page/4/index.html","0ba62fef91470bb0b319a5ce95c839c1"],["/page/5/index.html","b45c67d2ceb546556a2c4780eaf77eb3"],["/page/6/index.html","c74c8396ea0ae5a2d429d236e5e166fc"],["/page/7/index.html","b13a12340d3314398f0f9d32ad3ae2a3"],["/page/8/index.html","ed69c797305289af197d04e588627ba2"],["/page/9/index.html","fce80ff3fe39b97ea13843eba6a2f3d3"],["/posts/10c9dd98.html","c6d6ea834b7bc2fa862c99995f085807"],["/posts/126ebb99.html","53e21467b2f63d235ddb0d8ac230920f"],["/posts/1295b569.html","bac7652f496fa630c0bd1927329ef210"],["/posts/1370342.html","b7c9b1f88a3aa30f01a6b4f113eff1e2"],["/posts/15ef14c2.html","80d6e1d1fe48f214add2edb292718e31"],["/posts/15f3959d.html","18a870871c1567dca6708ef4f992df10"],["/posts/18ab785d.html","4d22081511816f483b9518f4e92ede92"],["/posts/1d59b71f.html","de4fc433e648b77a6cb92d95ae6de6fe"],["/posts/20b3f3a4.html","87a7c414eb62c6cf7f143abb54f8ec0f"],["/posts/245f1c7d.html","b4aca052e077ddee0a4a4dc69ee3f69b"],["/posts/252658f.html","2420f31b343dc2856161e9b462136160"],["/posts/28397adc.html","bc2d027c36310018ca6da5548894a3b2"],["/posts/2ad07f54.html","80dcf91f6f46e0877224651129f4e80f"],["/posts/2b38bce0.html","faf9ae7df0af5623d263571cf06dd10f"],["/posts/2c0a6836.html","d0f24ba56f3e464099be3a455fe9db62"],["/posts/2ce39bcc.html","ca216c828ee05313816285c345cd4d40"],["/posts/2cf620f0.html","c6201aad236892e99b7aaf868be5093a"],["/posts/2e30fd6d.html","c054bd195d437d19576e6c6bd18f10fa"],["/posts/30a413ad.html","680780b1007e85805303b0e35fa239e6"],["/posts/34292736.html","d0501cddd420d9cd8cf40417472eef66"],["/posts/3468cbe.html","82cb112d67141f5b9c7d9b95aa0b305c"],["/posts/39176dc0.html","c94911332a29af03b047a4e9d95180a6"],["/posts/3be6a165.html","53dff39074959165d6a38228dabd04ff"],["/posts/3daf73b4.html","a4ec7521d9be667cb67a8f8d1ead9fe2"],["/posts/3e118dbf.html","579f4db31c93b8c15f498c927d69bf52"],["/posts/3f7d823a.html","4fa98a69914ca23f64e495b36747cf28"],["/posts/3f978819.html","bf0f835f84296cb98aaa11e044490ee7"],["/posts/41dac80e.html","10ffd1e8e70692ea3f1d0883550a8e5f"],["/posts/43945723.html","2463de897fcd26c73d3e65b689026de8"],["/posts/44124a6b.html","4f2405c2055e0704dbedb2caa11feb43"],["/posts/476a3006.html","904a42338761705a4970304cb6f8c715"],["/posts/47abb61d.html","b4cf45bbd9476f6b5d2d62ee4a36364b"],["/posts/4996478a.html","036a1fcb63c733de92a815edcc81f4fb"],["/posts/4b689be3.html","2150b09984ac412cbe5a298e0238e36e"],["/posts/4cf8423f.html","4048006077ad6256bdcd2c76f5967ae0"],["/posts/4dcf85c.html","4ed9eca1d9454e28d1405a0fe734cfc3"],["/posts/500cd322.html","280eff704fda23a548b1e173dc7a8b70"],["/posts/51c9b1ff.html","8177691ae9059a0e73ee79236f5139a0"],["/posts/51ce68e8.html","e0c365d1cbd2e1bfeb0a4db76b1a36ed"],["/posts/52b5b3c6.html","43e87e7b12634b5564e564f341b8e24b"],["/posts/54f496ad.html","cbe8dd247e3dab48c685cbd1fe7e7534"],["/posts/558e1f30.html","c901a8fb70703fea714c6af686089d4f"],["/posts/5d8bea92.html","d785cf42aca90e4ca3f0ee4defaea130"],["/posts/5f6e0c59.html","5550395694bec65d13ec0d06ab243e8a"],["/posts/61a63a84.html","50b38b58a9a7c8dce90f0656492e01e4"],["/posts/625ab7bf.html","bb459c4e844fb4c36b2e1669f7b983ab"],["/posts/6336a2f9.html","4e7a2c68387bf8fc4bc006caab81a288"],["/posts/6432d61a.html","390184eada860b62c6b17407c3dd0a84"],["/posts/6515f032.html","522e35a0a6e64faea004a7ac5648001b"],["/posts/6720ccdd.html","29876e34f30627cfab4a3e3ddf7cdca1"],["/posts/6a4b5ac8.html","195c0e0ff03b58ddf5fb19353dcf550e"],["/posts/6aa4177c.html","503dbf744d81a3f19f40ed9125163329"],["/posts/6b15f81f.html","5d7b65bd5d54d65294ed98514c523ed1"],["/posts/71131d34.html","91e423ede5d14bda21738b05e9f42f47"],["/posts/742fd48d.html","7ddb47719e032b24967778bc3074bd54"],["/posts/78a8a8d3.html","dff83fa7052592bcb9db39d8d01a8731"],["/posts/7a5ef3d0.html","25ddc36bea3705faa07a9a4424dbec6f"],["/posts/7b41e1ac.html","2c6a0130b9599d0deb007b52fc026a7f"],["/posts/7b51011d.html","f337339a6a5660deca5b3148d6a0ad1e"],["/posts/7e3aa3e2.html","73dda937dd3fbd3ba958818e78bccd94"],["/posts/80fe2691.html","0523ef2c5cdbe3d4422e0d6aa5eaa114"],["/posts/81ac52e9.html","74398752f50a2d09f02f7222f86d9f67"],["/posts/82332d11.html","2ddb35636ec3630f0becb2a10340bd61"],["/posts/8486f6f9.html","f8395ce61a1cb9539f93f39f74a43745"],["/posts/849b40f8.html","24037281344d1aaf5f50b64eba5b5ede"],["/posts/85c51d68.html","b24c75ea57ba335cb04f01bb7ac99e7a"],["/posts/86a6c500.html","3b8cadea66fe62400a07bfabb6c86309"],["/posts/886f8d3.html","5ffb430e16783da7aa0d6275b06a3f3d"],["/posts/8a7cba10.html","1679f12644a6eb155662260f0012b846"],["/posts/8ac11b41.html","64313ac0b90f17bf3ea17dec0ad70381"],["/posts/8c3f2fd8.html","8e463a2f0fd3989d635b49fe80495def"],["/posts/8dd520d9.html","c8e9f0c2db3099faa898eafcbf362cc8"],["/posts/8f555654.html","e5115146dee5a5264e2626c98f9bf464"],["/posts/92a980c2.html","91fbc1147f2da77a98083a9064afe133"],["/posts/92ce16.html","1d22c0811783e8ca8dcb9a67958e6242"],["/posts/93e9943b.html","e136dfd1afefca2d87933877eb17f866"],["/posts/94d3c794.html","6ed347d02e39ba35444ca2db07ceb3f2"],["/posts/9606c2fe.html","c9390bbed6a65e49d503069efaa8fa42"],["/posts/96b281f2.html","604fc0ddbf8cf2a92ba48fe8cd42dde0"],["/posts/97f50eea.html","161125ebf8c8c1c8b71e12d24b68996b"],["/posts/97fca8be.html","78c07d9612ae70594da1d0990a759baa"],["/posts/98662d05.html","2328ae6d17a504e46482e5d21656cc10"],["/posts/98ef47c3.html","246212244084689a3682362aa1e097f1"],["/posts/9a2f6162.html","0ca5b42123a3d014e95b67baf39baf97"],["/posts/9b22a48d.html","e02c2a8039c4f2669a7c1bccb634c630"],["/posts/9cb455b1.html","29fa0d0705379315b6f1ec6ace538f08"],["/posts/9ecdeecc.html","b02ad18a543d8af2d0c031a587617063"],["/posts/9efd7701.html","edf10eebbe2fc33b6668cbeb0946d82b"],["/posts/9f61c1a0.html","efe731b187631c7ebe5042b41a30d995"],["/posts/a1de710.html","cbc0cb12e6cf28f915f1c65356fa265a"],["/posts/a30eb0cd.html","c17ed9345dcc8a170ff46a6dde9ff791"],["/posts/a72f71c2.html","5cb677542124604b41287ce1c11bf894"],["/posts/a7634b5d.html","ae87eda5ac50204973e458259e77f400"],["/posts/a8c593b5.html","9b636ce490dd0c2c1c5618f4251f8063"],["/posts/ad0c1efa.html","d689b8284fd1bfe3b38c31c029649a3b"],["/posts/ada3f440.html","424f7d3a86bb6ad2c515fdd5b572bed9"],["/posts/af1807ef.html","528e494252530bb9db2530944de4d965"],["/posts/b397bf03.html","19d040da2a8fc1a0dc23a22bd7813313"],["/posts/b497b647.html","44b9a95e2f195b398b9e2b32df3bb2c0"],["/posts/b4d464b0.html","39322eaef50d190048b581c2a43b62e7"],["/posts/b5fb773f.html","58cefa57f2d586056ae18ff3d52688ba"],["/posts/b8d46b32.html","4df73d0201922130baf45f5166f53f9b"],["/posts/c1b2c6c9.html","764c09f52a027a4f95f22a6dac920029"],["/posts/c2111cbf.html","0ad13ecb3ca2f6254f18a1974fb14a6b"],["/posts/c316c2e8.html","30774288d2fca2587a0a1e26ba6612ca"],["/posts/c43e60b5.html","116f55ac8b8084bcfa1a4a7302e174aa"],["/posts/c497a412.html","744198645a6684abe209c2563878ee3b"],["/posts/c5395ba3.html","914347eb0ec15681cf47b6dcc157ba8f"],["/posts/c5de299a.html","2b20b31bc56db981491bcbc0db088381"],["/posts/c70bba9c.html","bedab66e9c7f39052ad2f39cab1fe1d4"],["/posts/c797535e.html","587b4a808daadd34434e25fde0c1044b"],["/posts/c7a62c79.html","621cfced01e8ecba36875ca9bce7e271"],["/posts/cae2c959.html","46cd39c7ee41f433df52e819e78d5341"],["/posts/cbebef2b.html","4820a8ae07de92353c4eff7e02403ee7"],["/posts/cc4c0017.html","cdfae1c6b1a2335ad01a2d88e601f9dd"],["/posts/ce25023e.html","923c286fe0fba791ca52fa6bea4f88c0"],["/posts/d2fd4837.html","7cf1d61777de3ebe78be47bc4573b686"],["/posts/d3233cbb.html","56aff38b60af642887ba14ad727e2ff8"],["/posts/d3a745a8.html","e684a84a7fbe4c41649a8a963514da89"],["/posts/d7e940d2.html","3fe407f9256c860c2fbc0ebdd5279c31"],["/posts/dc815d5.html","86f054dc7ad87c2aed3a275802815e48"],["/posts/de25b0be.html","ee04fc6ef75c276c2236e3915e24e244"],["/posts/e2623b4e.html","26fadcfdbf2bc1ecf37ae2e32747bb33"],["/posts/e3ab6ad8.html","e16027ff5f1ab43ee128c4599ac43b11"],["/posts/e5018da6.html","5f67eff3d4b22a126d99f2011f4741b3"],["/posts/e5963272.html","57a6180c0f8157b0a798358d4fff9242"],["/posts/e5ef4c3c.html","e95ad9cbeeafc6a44fd848f1bc5051e7"],["/posts/e624b065.html","82e47346269b37153a6dbaf2f55dbe1c"],["/posts/e7c703bb.html","fdec9a353f72c21ea5ae11dda1263384"],["/posts/e8f14b6c.html","8e8cbcd645eeab4bcd47b3a6d047f641"],["/posts/e91abb63.html","c94d0c4805477d7c9aac49dd2708655a"],["/posts/ea9a8808.html","ec6599eed31b1b8676cd05e882a2ad5a"],["/posts/eb784749.html","0a97982762bc5eeef46880d9f352f8b3"],["/posts/ebaf2232.html","73bfc5ebb24342341b1714329ad766fa"],["/posts/ed75f185.html","b249c3ac431b7ccbf66be3fd071a1d97"],["/posts/ee1ed673.html","dd89a5180eb252f1fd36b14b005c342b"],["/posts/f0c3ed61.html","e61e086f0c9e71300dfe1d3819f3adf1"],["/posts/f151ff43.html","0343ec2c78a6ea4b5361518e7b6a16f2"],["/posts/f21e7f84.html","a0ac6b737905372170845957242f1b2d"],["/posts/f230b0fd.html","5eeb9dcd63e8d13905b37dd1672266e6"],["/posts/f28a7877.html","87dc8ae81d4a2e6e5a46ccb2f3f61a9a"],["/posts/f663d5cc.html","d2fcdd0dda071667e2c9c4e5796b34ab"],["/posts/f730ad18.html","2c4c2f457dbbea99ba4bccc01c72d7e4"],["/posts/fb5d4608.html","909811e600c6035bace6f5714f835516"],["/posts/fc04d0d4.html","e3140785a41c020d43df2c2389f0c3b0"],["/posts/fc455f81.html","82cb9286988a091a7f3c8f3ab6aa4ee0"],["/sumire/index.html","761df7d7c6ba26f589da85e97d7fe862"],["/sw-register.js","a9c7ec4df819aac46689775b4629e6a2"],["/tags/AKo/index.html","4fe390d4994594c0b5cd68394a8adc53"],["/tags/APPLE-project/index.html","f707c05cbbc32f09a6fcf000f85293c4"],["/tags/Ankrache/index.html","5173771d88350334035ff9ed33875e9b"],["/tags/BELL-DA/index.html","f1c98b4f6137a048d3bd5db39d35b2e4"],["/tags/BL-Game/index.html","d6fc71d416dbea1c70d07e87a0db8214"],["/tags/Blue-Dahlia-Digital-Creators/index.html","ccd48c01f01d31c810eeab28261f05b8"],["/tags/Blue-Line-Games/index.html","b8cc9364b675771ad26a82dab884fd9c"],["/tags/CD/index.html","c9ec31da729ee51e3378de5ac1c896b0"],["/tags/CHUNSOFT/index.html","3260ca3955f99cf3acd6142568029d49"],["/tags/Check＆Stripe/index.html","be66750f5fe56fe047cb6809c1e77768"],["/tags/Cherry-Pie/index.html","df76dc85f08644525a7edfacd7dc0930"],["/tags/Circle-Mebius/index.html","447feb1b94329912b3c3d376c4816635"],["/tags/Cosmillica/index.html","845d1e8081d66e0774e178819546c357"],["/tags/CresCENT-BLANK/index.html","bf549959e56e79aa7376f3aab5fb3d8a"],["/tags/Dopamine-Software/index.html","42f7778120ce9d8e41bfc5ebb80bbd4e"],["/tags/Dos/index.html","241daff248ac1c3d1e34163b7d2067d8"],["/tags/Earth-Well/index.html","0238165d6498d031da7bea4aaa9cf8db"],["/tags/Forest/index.html","1fac67d61742d9dd1cebf1ba22f40467"],["/tags/HaccaWorks/index.html","5cd5b3d784f599c7ae30ae5af51c69a3"],["/tags/Kanon/index.html","8a323f78101e14f26a2b2d6ad93a0b62"],["/tags/MANATSU-8/index.html","eddd544f15d52470a2b26bcd8c48dea3"],["/tags/MARINE/index.html","ece28ecaa87bc3dece20b20312493550"],["/tags/MIO/index.html","f42349bd9eef3d6d2cdba5d72df4d80a"],["/tags/NAOX/index.html","e35bf689232d8902d4f7f79464cc91d5"],["/tags/Namikaze-no-Uta/index.html","4d5ac44e09c54c1d5f1b4938359392f2"],["/tags/Nmyu/index.html","e97dc4081761898f21b59b986adb357c"],["/tags/O-S-I/index.html","588cf48083438fad579e881fb411b956"],["/tags/Omegaの視界/index.html","55db73c92fe291809eef7f7f9ed6a0c5"],["/tags/P-o-l-c/index.html","d6a57093cbf8202fb5d60051f1e01609"],["/tags/PC88/index.html","72e206cd3d9315ed5f740039f06be055"],["/tags/PC98/index.html","80780a8791e3c878dd07f23ed77f5332"],["/tags/Perpetual-Room/index.html","f5b0a1f9c3fb0d299055c78d3bfbda89"],["/tags/Pleiades-Company/index.html","9ec1a58f272f6956e8b4ce9be78910aa"],["/tags/Project-Twintail/index.html","fe68d6dfd2973ef4b9946b203d9eee09"],["/tags/RIFF-RAFF/index.html","d0c911c8111cbea7dddc3a463e163589"],["/tags/RPG/index.html","78d399c45a6f4072638802cae2b4b609"],["/tags/RPG2000/index.html","dacaeb888b3dc315ade4a0cc48fdf175"],["/tags/Reverv/index.html","7dc68ad9ab61441475b3b30b49f4d56a"],["/tags/SENTIVE/index.html","512d94ba15f99bbbc94766c11635b86c"],["/tags/Saihate-SOFT/index.html","c7d08a55da40cf411121ac468792dd65"],["/tags/Scrubbing/index.html","5c64ce3b9fbd11bd651a5ea4d911efd4"],["/tags/Sky-On-R-imaginAtion/index.html","fceb7cde80d88a6525bd030b654e45f4"],["/tags/StrayMoon/index.html","b340a0b6755a87250a9e7517bb9adcf1"],["/tags/Studio-Bu-Sa/index.html","4402c2345ec8409dc7b839fde68dde38"],["/tags/TRANSPARENCY/index.html","b6864352e13ab752f500972a2bdfd3e6"],["/tags/TRANSPARENT/index.html","ea21e691f7009df682ca65ad9af85d34"],["/tags/ToHeart/index.html","f09a35cf215af42aa3160e87ee56ec5b"],["/tags/Traumend/index.html","d59f990046e4fd37545f955f167de050"],["/tags/Witch/index.html","6d413da5030795a67f8d9931686e015f"],["/tags/adonis-project/index.html","d82f06e5c71c4c2b2414ac2bbe64115e"],["/tags/capriccio-suite/index.html","a3410962b1bd8787e3c58e45b0321de7"],["/tags/flash/index.html","b738536e0cbdfb38c9744d68bca9a81e"],["/tags/galgame/index.html","e1a25ebad8db7ff778222b9bf208a639"],["/tags/galgame/page/2/index.html","30c80be50b3b4acbf48b124fed7d11df"],["/tags/gal资源/index.html","c155e60afce9edbfbe68fdabd8310f42"],["/tags/gal资源/page/2/index.html","e28b9739c7403140ac334c8be22207b0"],["/tags/gal资源/page/3/index.html","a5c863b1b0067bd5d0b29f4e980448c8"],["/tags/index.html","61b978c1c802be42e2478cd0a1cecf09"],["/tags/m-kz/index.html","65f403156dd356d7d63ebba5631ebd89"],["/tags/purgatory/index.html","e05ebc45f70368f412fd2c4e91f36558"],["/tags/rkr/index.html","e203d5e5d340143dbc72145bcf9adc07"],["/tags/team-eye-mask/index.html","ccbde7c2b784b828b7421947d1d16356"],["/tags/ありすくろいつ/index.html","717302021266c585413d289c3d7e0cc5"],["/tags/いつものところ/index.html","637211b2dba2740a2da71de6224b8344"],["/tags/きつねみみ饅頭/index.html","4995c20e177427b8f416342127e1036c"],["/tags/ねこねこソフト/index.html","3549a63b038d3a1702ca884122f70707"],["/tags/ねこバナナ/index.html","3e35acc7b88dff60c6cfcc7ee552d0f8"],["/tags/はちみつくまさん/index.html","5427bf7a6a7305c2852f47add9e8b1d3"],["/tags/ろりちせ/index.html","530329b576ca58f18fc0a048accd678d"],["/tags/アイル【チーム・TATU】/index.html","7b7524e9fa34facaaf54ee5adf3e6906"],["/tags/アクアポラリス/index.html","69ff1cef15975e3a24ad858aebc6539d"],["/tags/アークシステムワークス/index.html","eb36a4817dc30b35882b52172a2ad471"],["/tags/ブロッコリー/index.html","50807684d36771bc70279b84b79c6fff"],["/tags/乙女/index.html","e860f96d380d3ac1cd1ccce381832923"],["/tags/乙游/index.html","8511cd9f0c4fc209fb20b536c12fce04"],["/tags/停产/index.html","c9639f6021023a6ffa64d90349c3466c"],["/tags/公告/index.html","09df44dacf3ff7e7768386b421f92439"],["/tags/同人/index.html","3272b80bc444c81ded14c626ca1fad1a"],["/tags/堀井雄二/index.html","694d2605e7b04103b33d73abe8431932"],["/tags/外海なおき/index.html","fc659fcd02a7677f4d49fcb46f2cfbea"],["/tags/女性向/index.html","8471b83971e7b931de6f63e6ef564b3f"],["/tags/御茶ノ水電子製作所/index.html","9500286937ce8f5a11968a57cd6193cb"],["/tags/月の水/index.html","57cedb5812a2ffb9abc161690cfc3bc8"],["/tags/桃野衿/index.html","40952b900f9908d13a8885fe98f0d24b"],["/tags/機械式少女/index.html","a1686a9eec824d58dce3f1aecdf3452d"],["/tags/水仙/index.html","4dbda3920850988fe27d791ead7efad2"],["/tags/汉化/index.html","6cdaf1ad712d0e64fb7a8d36b29fbf11"],["/tags/熊月温泉/index.html","8f1b1acfc3c4dc5283b4d150a934e21f"],["/tags/片冈智/index.html","313bbef9a700c3acccfac924ccfe29a3"],["/tags/片岡とも/index.html","340883c06c1ab735b868d10db0214f1e"],["/tags/牙の刻印制作委員会/index.html","9bcde01e289305fe8bf3bc05a155755d"],["/tags/牛カルビ定食-FLAT/index.html","d3abdff043fcba5495fa4ce52a032f1a"],["/tags/牧尾屋/index.html","21d345a3298299cdf301c88a0e9fad30"],["/tags/犬茶屋/index.html","a129cc113fea8555bc4e207c723de50c"],["/tags/猫猫社/index.html","4e11509da5affc05439b5531e1e9fab5"],["/tags/王宮魔法劇団/index.html","aaecc9db648361f26c0deecae5c89111"],["/tags/画集/index.html","5547cfa3ac713adc908b3c56761fb26f"],["/tags/索引/index.html","205223ba91a730864686035b02a8097f"],["/tags/缺失/index.html","b0fd7cc2c7990fcfcc006a05a5125cec"],["/tags/自购/index.html","66293a4d58cd855ba168c9d0a5d3d0b3"],["/tags/茶葉☆姫/index.html","53146c8c87b338f6d66905dbc64dd80c"],["/tags/郷愁花屋/index.html","8b58451d51a7836529e2e4353c688439"],["/tags/閂夜明/index.html","c510e330ec04a7e746a37726768e7ad3"],["/tags/音乐美/index.html","3a474b1c731a8accaea7c671dc3c244d"],["/tags/黒†救/index.html","3880a4bd9ea71d08645b9aa45ae36b23"],["/tags/黒百合っ子大集合/index.html","591eff8ee4019ff2975467fd8538a9b2"]];
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
