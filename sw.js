/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","7f38cc60bf9889c5a90863bdf0bd732f"],["/archives/2024/04/index.html","3c45e88ba1301d84d1489f0ebea9d7e7"],["/archives/2024/index.html","dfeddaf5dff8dc8d773d8a132ed22ba0"],["/archives/2025/02/index.html","8d39d717dc68c2bca68cf809ad6788bc"],["/archives/2025/02/page/2/index.html","936db4491a72c026f8cb407179abca09"],["/archives/2025/02/page/3/index.html","3b8e4f582bb7d51f5f1d1cf078db193e"],["/archives/2025/02/page/4/index.html","750afa964e66577b9880700c73063621"],["/archives/2025/02/page/5/index.html","7b2f33a41ca9879e817914eb9c27edb9"],["/archives/2025/03/index.html","859ce38dae8ae54c3acb0cdde8fec59e"],["/archives/2025/03/page/2/index.html","3e6849f2808f9220d70300a9bda19654"],["/archives/2025/03/page/3/index.html","74fe7c4e037b0f188c74417c0d41a020"],["/archives/2025/03/page/4/index.html","2a2983bd986b151861f03f99ece3ec89"],["/archives/2025/03/page/5/index.html","ae0aa7c6c728158b70595a76b75829e9"],["/archives/2025/03/page/6/index.html","26f7ced36565d95fec64887ed1d50bb2"],["/archives/2025/04/index.html","0dc505ecdbf733e224c6655aedd6efb1"],["/archives/2025/04/page/2/index.html","f1d05c4f5057bb2fffc30f9f2c51d8ec"],["/archives/2025/04/page/3/index.html","29ae2963490c1b680ebe8165baa9e35f"],["/archives/2025/05/index.html","2bfc4e5d01b5f7128da86a15e42f9cbf"],["/archives/2025/06/index.html","fb3292c2762ec14536834564f6ad01ae"],["/archives/2025/index.html","c683e28a7f27eb6467354a313ffe45e9"],["/archives/2025/page/10/index.html","e4abc817a5a59aecc7822ae98562093f"],["/archives/2025/page/11/index.html","93cdc0f0336ac1eed6237393df2fafc6"],["/archives/2025/page/12/index.html","f22a4aaf5284be020062abb8ca6e2884"],["/archives/2025/page/13/index.html","943b3407802fa406904a8cddf0de153d"],["/archives/2025/page/14/index.html","5a46961e78b175761c4a9367390bb936"],["/archives/2025/page/15/index.html","c02c837525ce83690e6ea2637b22e367"],["/archives/2025/page/2/index.html","df5f19c045fa34c77e55d8899e75aabc"],["/archives/2025/page/3/index.html","99ac676908a9b149fa257702f9415603"],["/archives/2025/page/4/index.html","be98f13a04204bb0dc4c39ad1587070b"],["/archives/2025/page/5/index.html","37f57ffbafce807a67395f96067ee869"],["/archives/2025/page/6/index.html","578b9799572643e61ebb3e00b92c90ce"],["/archives/2025/page/7/index.html","5329f4e3d1f4ed325af21a421f9df43c"],["/archives/2025/page/8/index.html","f3b9dc2ff7b224310afa2b6b4f08d769"],["/archives/2025/page/9/index.html","12440289062006e15e53fc7021277e95"],["/archives/2026/02/index.html","8f1d47d4750c69fe10f7c8b85c780c47"],["/archives/2026/index.html","07471298c2217c81877c2d840c0d2c48"],["/archives/2825/04/index.html","bb99cd62da8ee9b8d5db34b8796cc908"],["/archives/2825/index.html","34eed86f6b42cbcb6f3e4bd5867d8a93"],["/archives/2925/01/index.html","68d83594000c9dab48a49afe19ec4a18"],["/archives/2925/index.html","6f1a25ddb967d996047801ffe84f61cd"],["/archives/2999/06/index.html","3e16f0894bf1d2cf0390e8151d671a51"],["/archives/2999/index.html","b2eed35506a0db82916dd15adadb76a7"],["/archives/index.html","c10af8eb343a1d7691cb0c6d0921c908"],["/archives/page/10/index.html","ebe132f31312826398f3809cd5ec8a0e"],["/archives/page/11/index.html","cf99f9a087829a72f783a9df4d872093"],["/archives/page/12/index.html","10d8f9baa45a7a7ac70f74d4c55e69e8"],["/archives/page/13/index.html","7115e20dc547e9a04c4b8dd629a5845b"],["/archives/page/14/index.html","84bb37e04f20f5b8b180d74cc1736cf9"],["/archives/page/15/index.html","fb5b057f789f779e58f29349e6136c08"],["/archives/page/2/index.html","ade195873bcc916c4756236245c3dd19"],["/archives/page/3/index.html","f38a7e4041e675bbfd9f726370e5255d"],["/archives/page/4/index.html","8d9b9d147387e962af1afb0b2703a964"],["/archives/page/5/index.html","b300e4b0dfeff6bc72c40fdf32276edd"],["/archives/page/6/index.html","699bca42ff7c4696a46f96ffcb8f55c8"],["/archives/page/7/index.html","7c393a32bf0b6826900e512e7e3c6b69"],["/archives/page/8/index.html","2237ccdcf1cd7e6ad25121c3dab4f0ae"],["/archives/page/9/index.html","188e61820159c19f83bb3e1cdb0ee43a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","d6381beb406e5f82d482bf75fd39c1c4"],["/categories/galgame/page/2/index.html","951d36c6739e8c12e9468e9fafe22a10"],["/categories/公告/index.html","73000a2c72e44bd019dcb0bc368a25b3"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","0f9973293208ba8cdecc6684a4fc9eef"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","423933c1d8af7a36e5c26ee104b136dd"],["/page/10/index.html","7ba0526bce16cdecc5a4cb6a0578df88"],["/page/11/index.html","ce7c768f5c65a9c74bcf6913ad4addb2"],["/page/12/index.html","e4f4ed026a70f997872199593a57831a"],["/page/13/index.html","1bc43b3bda3f1189bfab33614cc8bbb4"],["/page/14/index.html","808c1af21cecbda16e02fed282e27a9b"],["/page/15/index.html","8581fff349631702be305fcea9864665"],["/page/2/index.html","8d468c899b87f2530d1f22a34a1735f8"],["/page/3/index.html","6a0e03275bb4f2a6bea39b67aa827abb"],["/page/4/index.html","062cead7b7e134838adcb3b6e186c083"],["/page/5/index.html","84ad8c6d0c0d6da187e9090cf231dde0"],["/page/6/index.html","561a1cbad5dd948605a0a52941d73d7c"],["/page/7/index.html","2b205732f97117fe170426d934e6a4ab"],["/page/8/index.html","adf86c5a39f8ef7ff5b7e21420dec19c"],["/page/9/index.html","346ad8faadc815cb3750277067ca53e8"],["/posts/10c9dd98.html","f77e586e144c2a7b48f2ee8ab85da2b6"],["/posts/126ebb99.html","6aee9ccaee6d1a6569dc4bac346cdb27"],["/posts/1295b569.html","6cbe1bcc717a421026bf01788ab015bb"],["/posts/1370342.html","7f4f2d3a0602243c087650d68e7709ca"],["/posts/15ef14c2.html","2b42cf29bb22bba80a1ee55878107789"],["/posts/15f3959d.html","ad2ba62a0ffe5566f006e3944e12e773"],["/posts/18ab785d.html","43f82d7505edd847e9d388e1929ee362"],["/posts/1d59b71f.html","cac1fdd515eb781cf64e0eaf80107343"],["/posts/20b3f3a4.html","952fd65350322c101d62e0509bbb5bde"],["/posts/244daa7a.html","365800ddbaf27c4335ee516faf0ec45c"],["/posts/245f1c7d.html","310979f2d4550b6c378c31767e0993a6"],["/posts/252658f.html","6b7e2d0523b311c386e3ed78c0bd7651"],["/posts/28397adc.html","5684f29395c1b8cfe5a47086944dd6f3"],["/posts/2ad07f54.html","998b2d3715562c6c9d5b3fd29e20758c"],["/posts/2b38bce0.html","f378b76d387416848d55b7137fb06dfb"],["/posts/2c0a6836.html","a34ebccec3b075a2e1aa80c09b463062"],["/posts/2ce39bcc.html","b01c86bb4577b3af4de87e4a04188ccd"],["/posts/2cf620f0.html","2fa32bab49281f75b4a022e22d32d258"],["/posts/2e30fd6d.html","19a7db529586d706c29c2276de3d1faa"],["/posts/30a413ad.html","55b53842af788bb7c765ae07c0f9db75"],["/posts/34292736.html","572b7458dc0e6ca2ca75f82789178f21"],["/posts/3468cbe.html","52b2337e39657db7ef5a20c63f42ce22"],["/posts/39176dc0.html","0940ee04cf31e5c321a48b9b325723e8"],["/posts/3be6a165.html","9c97715091c8a2a287ae6129b88ccdcf"],["/posts/3daf73b4.html","8f728b320bddb7973db33ff4d84a760b"],["/posts/3e118dbf.html","c40ac92108e1f70e4d06809ebab64f02"],["/posts/3f7d823a.html","4277564d50fedad6eed56cc45c5c72b5"],["/posts/3f978819.html","e4215448550ec63b0a2f0ee9572c465a"],["/posts/41dac80e.html","90ecea16af1089eaf80d813a903bdf9a"],["/posts/43945723.html","329434552f44c878d0b244948c1ffa3d"],["/posts/44124a6b.html","adb17147e154cd99e8b97b82ab12ae14"],["/posts/476a3006.html","3ed75d07caff3803d69630557a18cc3f"],["/posts/47abb61d.html","eb3befda9d572f9744182b1fc49dfb9d"],["/posts/4996478a.html","fc6834b4b00db037184a9005351139d0"],["/posts/4b689be3.html","f61196c87676b1a99ffe2103a6f486cf"],["/posts/4cf8423f.html","49f20e7f4dff224d56dba90d6b77a251"],["/posts/4dcf85c.html","fce44368b57ff22af7d3b4b9d5924e95"],["/posts/500cd322.html","0657e45abf27d82e03cf7678871d9626"],["/posts/505a43c6.html","2f5da9b74a8f05464f4463b038625a0f"],["/posts/51c9b1ff.html","873f6026e81995edc252c6814d083d28"],["/posts/51ce68e8.html","9ba8cfe4e97f10bea1577016b2332ef8"],["/posts/52b5b3c6.html","e2860abacd73eab2bf46b9ed1106df59"],["/posts/54f496ad.html","9400bdf053a5d3efde6c61af56505e40"],["/posts/558e1f30.html","67ab5b2b131ea971032ed49327ee2200"],["/posts/5d8bea92.html","c23b85badef6108a8ec59bd209b327a8"],["/posts/5f6e0c59.html","e482cebe1e1a11c17115ba71eeb66c10"],["/posts/61a63a84.html","b80bb5547f45a5444e651ef8e9091151"],["/posts/625ab7bf.html","135624927cb905cd4b7099f9dcd59e0a"],["/posts/6336a2f9.html","b639028bd7fead3f88309ba6ec07ad9b"],["/posts/6432d61a.html","734b19ad149c323b354ffa3a20ef5d01"],["/posts/6515f032.html","74e4d0cfce3d463846fab4127d9cd713"],["/posts/6720ccdd.html","4bac96b93de0d89d63d0cd912d13aba6"],["/posts/6a4b5ac8.html","1fb3c52b6617b8473ffa6bd575aa2e9b"],["/posts/6aa4177c.html","a4839da64f96d5fdd15c15234b1f9aeb"],["/posts/6b15f81f.html","5c3286840f092ec811fe0b5d7d17d255"],["/posts/71131d34.html","03d9cff805cb7dfa8b205312e2f28e51"],["/posts/742fd48d.html","181d76b57284eb16972d7e1ca23bbb28"],["/posts/78a8a8d3.html","7f4c4ecbc932d7a138877f7e0ca6f73f"],["/posts/7a5ef3d0.html","523ee87d12ee12d3ca29d9654690a919"],["/posts/7b41e1ac.html","b742bc16712ab5fa16a2f2b44637cb5e"],["/posts/7b51011d.html","d8e47d1c21838a7a9ae6c32d6904227f"],["/posts/7e3aa3e2.html","93aaa344e8977c9b4d1b23e2b1e98500"],["/posts/80fe2691.html","7f21001988a212b85a95696dc9cea4c5"],["/posts/81ac52e9.html","934e558d3f61a1026d2ced495a68512b"],["/posts/82332d11.html","507f40f3da2d48b5068fb5de05672c6a"],["/posts/8486f6f9.html","f4544e5cb6a99ca034b0cfa47c69dcfc"],["/posts/849b40f8.html","4509ea0cf84b7af836e6a009ab61c7bd"],["/posts/85c51d68.html","a23ac59151347ff8f16c7832673360e1"],["/posts/86a6c500.html","25104d9c3fbe94ff0bb95b9b8d53b63b"],["/posts/886f8d3.html","eea2842a93a6c5761015341241dc9063"],["/posts/8a7cba10.html","66b6e549ebb842e34bbe237519719ec7"],["/posts/8ac11b41.html","af78c82bef6197a121a43ff902a2a9ae"],["/posts/8c3f2fd8.html","588520f82a9a3c412ec38aaace084e00"],["/posts/8dd520d9.html","f5e28b7c655b74bb84a13d38d8fec7e4"],["/posts/8f555654.html","3b99906c89dd55d531f75fba56921be2"],["/posts/92a980c2.html","1133579bc5605562a56fb7e213691e0b"],["/posts/92ce16.html","b38b7b518223a4329d496aadfc6cb923"],["/posts/93e9943b.html","e02d6ed06749adcdbbc8f0cda6470b38"],["/posts/94d3c794.html","95c02ff6465f103fbc7b56b53b9a07ce"],["/posts/9606c2fe.html","de3e3da1338953b2e88f3272d6e1f055"],["/posts/96b281f2.html","83faee99ad5b5e2978d76ec0bf9b38df"],["/posts/97f50eea.html","595e63accac34f446c5156fd55eee1b6"],["/posts/97fca8be.html","e85decec414ab8a36d6d6390a939e9be"],["/posts/98662d05.html","4237e0dd4576f071ac2d3308fe6b8930"],["/posts/98ef47c3.html","da0591340cd80a75d9e6f7b9173f620a"],["/posts/9a2f6162.html","27e06c4e0baecc03b2f92d2580b76661"],["/posts/9b22a48d.html","7e7cc43a6e947b97b8e63f947c6171f0"],["/posts/9cb455b1.html","a1d13ab864d8bc2f83b8a03d914a1462"],["/posts/9ecdeecc.html","e23e7419f997427966d72f3cef1ece78"],["/posts/9efd7701.html","d421e299ee7b86d88640a7c456f4bf6f"],["/posts/9f61c1a0.html","848868c253cbcbd183da167b4f7845b9"],["/posts/a1de710.html","d90cac2c1391e171f5a052a922135723"],["/posts/a30eb0cd.html","0c83e8f6e62541b5116fee519c54cb85"],["/posts/a72f71c2.html","de67de26f4bc222564b531645e6b0dcd"],["/posts/a7634b5d.html","e611e07bd1382e11263bf9fe17f56922"],["/posts/a8c593b5.html","c4048fb9067bb2be03c0dff708c86de5"],["/posts/ad0c1efa.html","5591acbbf076887401c2fe374b006946"],["/posts/ada3f440.html","81e18fdfdccde3baf1cca67d7f4f5727"],["/posts/af1807ef.html","e7844082aa08c68915c1a4f0ddcf86c1"],["/posts/b397bf03.html","de4c16b90254b2bb652e1bbf08a16441"],["/posts/b497b647.html","6ed3c1c4bbac1e91f2aff4801c4cfe24"],["/posts/b4d464b0.html","fd31a6fe46a05a6f23cbe6173b394605"],["/posts/b5fb773f.html","73bd36a1eeb0c7c6a5207a0713be5a8f"],["/posts/b8d46b32.html","dfd5706f66fcb3e70d94751dacd8f182"],["/posts/c1b2c6c9.html","9aee26217f11c60ae7825a7ca75eae08"],["/posts/c2111cbf.html","770672567b3c22102afd95f5edb79f49"],["/posts/c316c2e8.html","b45fa7d08934b76474207a15842468a5"],["/posts/c43e60b5.html","6320562c5afac9fc9f4d3a1b6ac208d6"],["/posts/c497a412.html","bb68537fa38433563b1386e2d3529ae2"],["/posts/c5395ba3.html","20e273e3736de08faead1501f00ba4fc"],["/posts/c5de299a.html","65d3fbe00773e901c80e1d9800378d57"],["/posts/c70bba9c.html","4da68cd29654d563e7668cf50f59afe9"],["/posts/c797535e.html","ae5d94b5d880fc8e00875064e08244a5"],["/posts/c7a62c79.html","3252a1ceb80c85cfa9a380b961c61431"],["/posts/cae2c959.html","27d8f9823f1b8c8ab4409ac5e6e6cb43"],["/posts/cbebef2b.html","8ebefb6e0139e9c6decfc31d5bd649d6"],["/posts/cc4c0017.html","73ecf50adea6bdfe203c0489dec3408f"],["/posts/ce25023e.html","73ad9d5f4e1aebd1535f2665577127f0"],["/posts/d2fd4837.html","3c429fe700f70eea7428f00d7d8b7c69"],["/posts/d3233cbb.html","1f218269f586c8cf2f289ff53ac31295"],["/posts/d3a745a8.html","966ea08335127e1440c0b219ad2e07d4"],["/posts/d7e940d2.html","6ef6d8cad784a070a83469b8fa0c0888"],["/posts/dc815d5.html","f7a9cf943967919f2af752ef13d0782b"],["/posts/de25b0be.html","16558f1dded8c8f749a9b60afe29aeeb"],["/posts/e2623b4e.html","0741cb71f339a79f81952148036cfa9c"],["/posts/e3ab6ad8.html","489dfa9c5be02935f21f97b3ccba0226"],["/posts/e5018da6.html","fc34473fdb60352d86144ce722ccdb6c"],["/posts/e5963272.html","d26fd0ee27afce37163ddbbcd90e60d7"],["/posts/e5ef4c3c.html","ea044507915e2380a3d0e17f5b5e58fb"],["/posts/e624b065.html","81eb804f20f676d605de009092e76f31"],["/posts/e7c703bb.html","d0fd045c70d07833ae9fcf40399537b2"],["/posts/e8f14b6c.html","a0996c9c765dbf098d2dffa7f9e57a11"],["/posts/e91abb63.html","ee44806c20998f3f624efa4f9c3ae6f2"],["/posts/ea9a8808.html","5f9dbd82ef63a45e51f61f536a72af2a"],["/posts/eb784749.html","8583879e9a553132fd618b411fdc549d"],["/posts/ebaf2232.html","f0f4dc37c2536e99d97767aa052baadd"],["/posts/ed75f185.html","8110a7607c53e9f0c2e6d33029717cbb"],["/posts/ee1ed673.html","38155b32938720aa759a42639d2b76a3"],["/posts/f0c3ed61.html","c434e8b2fe3695880f293fbaf36300a5"],["/posts/f151ff43.html","702b45f93bc2f35acd94c1365c16ce2a"],["/posts/f21e7f84.html","9a297833b219c32bd4147466c806c2e2"],["/posts/f230b0fd.html","3a9ee0a112b801ee7354f8053b3247fe"],["/posts/f28a7877.html","9afbf5f886f5f98e4e6f80dcecd378e9"],["/posts/f663d5cc.html","02d66ad33023f440b1986077e93b6da1"],["/posts/f730ad18.html","48be3c0f6e948f44cc4c6145b4e0f9a7"],["/posts/fb5d4608.html","f7444fd0c8a18a898d3f0ac0c63b2fd9"],["/posts/fc04d0d4.html","226f69f1d31389e2fcd37269e9afcb5a"],["/posts/fc455f81.html","e75d8f6dfec1dc0f2470b561206d1099"],["/sumire/index.html","38f5e18b137ebf40b054793cfc1d9c29"],["/sw-register.js","71ff261f2ffbfe08d9f716537630bc0f"],["/tags/AKo/index.html","fe4103b7e5b523f2ebfc9b1801d74290"],["/tags/APPLE-project/index.html","d4ae54323a19f046ff3c371cdadab106"],["/tags/Ankrache/index.html","f2aafc403c2ca0dadb5bb06f24850b2a"],["/tags/BELL-DA/index.html","e09bd43b857db118f34844507d77d52a"],["/tags/BL-Game/index.html","e8dfdbff895a4d28331f75088229dde3"],["/tags/Blue-Dahlia-Digital-Creators/index.html","cfb5797495046374c39bf6206a42581f"],["/tags/Blue-Line-Games/index.html","3e0bb5d00b16b98c5c710f1723d20209"],["/tags/CD/index.html","ad5389ef13e6ed9e7344c9cf98a9fab8"],["/tags/CHUNSOFT/index.html","214e6acd43d7c8dae8bf3e1e0f48bad4"],["/tags/Check＆Stripe/index.html","180b81634b6be40d4273ec8e79243249"],["/tags/Cherry-Pie/index.html","364cf692a27dd4c6b76a2ddf932e515d"],["/tags/Circle-Mebius/index.html","d896afabd77124220b4e6ed54a0c2527"],["/tags/Cosmillica/index.html","7acb79927ce5311ba0eb45090c2feef3"],["/tags/CresCENT-BLANK/index.html","156b8bc6a45233cb575c04e5d798e2f8"],["/tags/Dopamine-Software/index.html","4d20789ff4c9fbb820cf23272feb66ba"],["/tags/Dos/index.html","960fdd031af66ca7e8771c2f1acf0cf6"],["/tags/Earth-Well/index.html","fac7494b087ad6b9309d9022470fd79a"],["/tags/Forest/index.html","fd33b6a7fe61731a9a5c14bbe48de84f"],["/tags/HaccaWorks/index.html","2c97d0b3f16973982cc7e1eacf7bd0b7"],["/tags/Kanon/index.html","13aa435c6c1d4648d40a13c8431e3c7c"],["/tags/MANATSU-8/index.html","4374b49985d128d3f7de43869769fb30"],["/tags/MARINE/index.html","543f06187b525e38553ba3a3593977e4"],["/tags/MIO/index.html","a68a60f3519ce85c9e0d0308576cd9e3"],["/tags/NAOX/index.html","0f165aaf355dc14586808d67b5100ddd"],["/tags/Namikaze-no-Uta/index.html","09681f6a0e0bdf60ea02aa4f5e19fea1"],["/tags/Nmyu/index.html","4d579db2bdd0601b6aa07a03a8bd184d"],["/tags/O-S-I/index.html","b823697c7bd33a73f15d871c49d104d5"],["/tags/Omegaの視界/index.html","e0d36459ac7ed185550d70ce9e5043cc"],["/tags/P-o-l-c/index.html","ba965b68025badfd550b5fc1651b8173"],["/tags/PC88/index.html","23d6d73c98c391cbf7d55c2c34fc93f2"],["/tags/PC98/index.html","8973b400e74ba4b6ad99dab0f4c591de"],["/tags/Perpetual-Room/index.html","b57351ce415242b2257060ce94cafd73"],["/tags/Pleiades-Company/index.html","0d8f9ff7d6da0d0c89513f52c59472e6"],["/tags/Project-Twintail/index.html","a1f55b920b4dc2f244fb524092c49e70"],["/tags/RIFF-RAFF/index.html","fe13f644d8afcfe79495377e2c809340"],["/tags/RPG/index.html","5b974f82ec27435dcbed87d5cf560eac"],["/tags/RPG2000/index.html","2f3d166800f9a593faca5432e331cb9e"],["/tags/Reverv/index.html","0da1ccaf2556428d6eb869318d62f007"],["/tags/SENTIVE/index.html","ac2f896465d65985267d12b8cad6a0e4"],["/tags/Saihate-SOFT/index.html","05d3e65cf29463eb56af3bc3916f1c6b"],["/tags/Scrubbing/index.html","e70e18079f143882607e66f16d2b01b7"],["/tags/Sky-On-R-imaginAtion/index.html","26fd0c9bdf161dca18707ff69d2433e8"],["/tags/StrayMoon/index.html","933c15f9fd803991512a318c8a1825ca"],["/tags/Studio-Bu-Sa/index.html","42f74f09e98eb85d85ba85fc674d78c9"],["/tags/TRANSPARENCY/index.html","99cfc2baacab73a2930b7fd8d87200fc"],["/tags/TRANSPARENT/index.html","3703568b97adf7b9b7b665777e14a500"],["/tags/ToHeart/index.html","cd8fe471e77bb952f92cdaf4393e7c12"],["/tags/Traumend/index.html","72ff902a27aa8825130fb6c8163d187c"],["/tags/Witch/index.html","a37ae79382a07a42e51fdede5f883b3d"],["/tags/adonis-project/index.html","255f8a686af33bc8a375c8625a4ca658"],["/tags/capriccio-suite/index.html","55516f80db620152f46caa2666cae3c0"],["/tags/flash/index.html","b33a0e841f59abf7b2bdfd7f7a5db5ea"],["/tags/galgame/index.html","ea72becdca72029d738dba4516505612"],["/tags/galgame/page/2/index.html","e41ec8edacf5a82a0f38e9dd3819f794"],["/tags/gal资源/index.html","e2e04e5c0308447ecc03312f2ea2b96a"],["/tags/gal资源/page/2/index.html","e89b5f6a2a28538bcd613062f9da304d"],["/tags/gal资源/page/3/index.html","3976b38a52e141b7cd601923c5c8f15b"],["/tags/index.html","7a41fbf217076f31c98da152ae920a10"],["/tags/m-kz/index.html","f46ce913f128fb6d8f50621eb75ab346"],["/tags/purgatory/index.html","5b3ab379ce32e6dee441996668e7f6a3"],["/tags/rkr/index.html","d40fcc0fa64257e0273747c8f0bb3af4"],["/tags/team-eye-mask/index.html","b7035011dde34bf126d4895c3f3d0b49"],["/tags/ありすくろいつ/index.html","b3f7e145c4c79b20ae3d9c51206eb2a2"],["/tags/いつものところ/index.html","673f37131b29b2340cc8f7037610f8c9"],["/tags/きつねみみ饅頭/index.html","2c537d8c971cc4662b5ff6788c9318c1"],["/tags/ねこねこソフト/index.html","7f85ecc3ade3a6222ddfb4a88693a4b6"],["/tags/ねこバナナ/index.html","b92083f13205d9ce63334bd423dc7480"],["/tags/はちみつくまさん/index.html","44ca1e1005405646041adf1f8c65b8dc"],["/tags/ろりちせ/index.html","c8e9cb4af5ee93b230c06536e3ae6bcc"],["/tags/アイル【チーム・TATU】/index.html","5f4474f25bef159bde06b0a19dd6a15d"],["/tags/アクアポラリス/index.html","cf3efc659219402cd29acdb4a12bf8cc"],["/tags/アークシステムワークス/index.html","240068d3ad6a0f89da1fe7a8672ec13b"],["/tags/ブロッコリー/index.html","af35ea6368f82a5736b71f4e3bddbd49"],["/tags/乙女/index.html","55b33126fcc7f76d260928171f4be3d5"],["/tags/乙游/index.html","7095cd4ede28ded9f723d0241cde70ca"],["/tags/停产/index.html","76ef2c9470b70bd07d2935023b1050fa"],["/tags/公告/index.html","f0f7d4a97b5e62229d8341e04c0eabcd"],["/tags/同人/index.html","a69b76d5b9504505eb853b2f8e2bd992"],["/tags/堀井雄二/index.html","6bf0c0e2b5e17d85fb8972bc683f04e6"],["/tags/外海なおき/index.html","33db1229ef269bf8cdeca1158cc778d0"],["/tags/大熊猫/index.html","593d118f86344ec35e250bd5a5d73157"],["/tags/女性向/index.html","60a52a7d8d8e2bb262529196ac94f19d"],["/tags/安装/index.html","996cf4ee228ef6d1b4c68179cd039aaa"],["/tags/御茶ノ水電子製作所/index.html","257c204d47373e724729965f96850864"],["/tags/月の水/index.html","33a92cfe90f692bdbd3edbdffc03b8fc"],["/tags/桃野衿/index.html","81b6fd63c8eb68184d6926d1840afd1d"],["/tags/機械式少女/index.html","a40c4ff6c875cebc7db3ed9e17368179"],["/tags/水仙/index.html","417a7a45791795f5623f00615e139456"],["/tags/汉化/index.html","f95a511ba4b5906ddb9ad2c6d4e20126"],["/tags/熊月温泉/index.html","d1704193807b996d350bbc917b592317"],["/tags/片冈智/index.html","44d9821a041f00630e54d6fd5da7e9ff"],["/tags/片岡とも/index.html","5abf9ba7d61aaacf051bcaa0e7a07b04"],["/tags/牙の刻印制作委員会/index.html","0d33f34ad74955a4427680deefb5c103"],["/tags/牛カルビ定食-FLAT/index.html","fd61a70568b7fd13a7891397be02b74a"],["/tags/牧尾屋/index.html","4d0b0aead7117d82357e74e4ce08ee8b"],["/tags/犬茶屋/index.html","0a8a39d65893138e29dea83f8d244857"],["/tags/猫猫社/index.html","03ffcf8ea4b296dfbf89b7bdbad77543"],["/tags/王宮魔法劇団/index.html","bc441ddc774dcf7c31de7bb4dd6d9d47"],["/tags/生活/index.html","57e4c299926e9d6a61c8c6934f4802be"],["/tags/画集/index.html","92dd622e043732c7c1ae7cc3d26aab6b"],["/tags/索引/index.html","df9f999d863f778eac2f0c8028dfcf72"],["/tags/缺失/index.html","521e3901c19e52ace0d7d53de921d20a"],["/tags/自购/index.html","9b57bd6e4b777a95ba91574ec22e12ac"],["/tags/茶葉☆姫/index.html","ec9e68b19a970fdb60e929632724c253"],["/tags/郷愁花屋/index.html","53e370960e8ee8fe8a64e8c95cd870c9"],["/tags/閂夜明/index.html","f95086a6186d620502236934b0d68b93"],["/tags/音乐美/index.html","bc1323389131e905a618fe3e12864a16"],["/tags/黒†救/index.html","cdbb8b06c5ffd919cb10d54810adfb35"],["/tags/黒百合っ子大集合/index.html","5ee93c7b858db96e2c3f47d737c18605"]];
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
