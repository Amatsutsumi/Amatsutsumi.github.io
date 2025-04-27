/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","16fb2d20920b3b8e6fc6d0f20df6bd1e"],["/archives/2024/04/index.html","3b3325c1116be7a13419976304d7b753"],["/archives/2024/index.html","07e2010a49485edfd0e6802668b1017e"],["/archives/2025/02/index.html","f423f57744477bfa0ca3b5cff8ae5f9e"],["/archives/2025/02/page/2/index.html","608f741469aef49ba214d41eddc16029"],["/archives/2025/02/page/3/index.html","3ec7325b4d2e6d89506f6581e4c8f3dd"],["/archives/2025/02/page/4/index.html","51348ed34f0858b47ed44c94e3c9ae10"],["/archives/2025/02/page/5/index.html","c8eb4467516ec0be5aa17c13177ed432"],["/archives/2025/03/index.html","796cab04ca46643c5bf92646002f1842"],["/archives/2025/03/page/2/index.html","9fb03fcda5bc9e52f63b5ee2e0ef330d"],["/archives/2025/03/page/3/index.html","96095b0a11480d4d76596cd1bc9582c3"],["/archives/2025/03/page/4/index.html","739227eced9e9d7354d158005c4d3b60"],["/archives/2025/03/page/5/index.html","f6ea4afae40625f1f6fb44fb09dc15f7"],["/archives/2025/03/page/6/index.html","d2b6a0446bc5e936292f19bd9f6b5b7f"],["/archives/2025/04/index.html","e021f29fdc49dc63e3b897f9da95eae5"],["/archives/2025/04/page/2/index.html","cf39d66334720b5f5eff651c9b9f48ed"],["/archives/2025/04/page/3/index.html","bc552753cbd1d1f051e11327913ffcfc"],["/archives/2025/index.html","10339c6f283394494f65257bd8654453"],["/archives/2025/page/10/index.html","e59d48dbe52d8b4036cacc2293723ad6"],["/archives/2025/page/11/index.html","2fbd799c11e2b412ccc71c15d3943120"],["/archives/2025/page/12/index.html","9fb507655f2507ec0170b4830231c6e3"],["/archives/2025/page/13/index.html","1c16726f9b510d77367ffaa01e987410"],["/archives/2025/page/14/index.html","0fffd1d1d9f206b037e8f3218f250357"],["/archives/2025/page/2/index.html","78344cdf12f22cf380ed9727aa185ea4"],["/archives/2025/page/3/index.html","513fa7842b6ac8493cc3d7d32413e1b9"],["/archives/2025/page/4/index.html","c675fd6ed48aa942b9d194132ead1c6a"],["/archives/2025/page/5/index.html","1f99909cf219c3af88afa68723bbc9ef"],["/archives/2025/page/6/index.html","459be7e0c7d4a20f83ec8fb6ed45f096"],["/archives/2025/page/7/index.html","0679012fd095956abd343ed1bd3d2c36"],["/archives/2025/page/8/index.html","2b3dbe4fbd83f1049ab4594f5260ee79"],["/archives/2025/page/9/index.html","56326a63ece24c6469ec04b8f131cbec"],["/archives/2026/02/index.html","d710cf1cfd051ed359ca04247e10760a"],["/archives/2026/index.html","3f76e2521f2b6685b3130241276d4db7"],["/archives/2825/04/index.html","ee72a05102f227722c17499f3073f7fb"],["/archives/2825/index.html","cef5d708e0e57eb219dab84f3249c909"],["/archives/2925/01/index.html","0936d30b23be356e98507165d864f6d1"],["/archives/2925/index.html","0b12f077443c0105af521caeb97b1242"],["/archives/index.html","b85d9ce567876e66cc88dcd25560a423"],["/archives/page/10/index.html","e2b374bc060891b302f5aa1224886932"],["/archives/page/11/index.html","e085bf80ee49718dfcf23fba051cf250"],["/archives/page/12/index.html","87a012cfb9d73cad202ff3a4e1c38c69"],["/archives/page/13/index.html","3a29494139da5383835bd4160a5b096e"],["/archives/page/14/index.html","100bd6fe86ea7ef246042d51b89342b0"],["/archives/page/2/index.html","7abfa6eb22d37b3817c6ef24ad4ced96"],["/archives/page/3/index.html","14fc484395486224a5763417d9ee12dd"],["/archives/page/4/index.html","13b3a5b662ebf31159890e3e97ee3b3d"],["/archives/page/5/index.html","2b72896f3fbe28f4c8fb63164eb2e3ce"],["/archives/page/6/index.html","ef5859ec5ce16ed55676ec30cbc7cc43"],["/archives/page/7/index.html","629e302227616c4c68900d115d60a609"],["/archives/page/8/index.html","fd59f37214cde5bda37a73729309db82"],["/archives/page/9/index.html","728035a5a8419d3663a34d0209a2ba91"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","4884ad48c1e57044b027b5a2a7028ba7"],["/categories/galgame/page/2/index.html","6c4bd0e8bfbf790a42b7f06e9b1d8222"],["/categories/公告/index.html","b09126618da09a753cfdaceed6b62fd3"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","0d3b1d2d11e4668c2f8018bdbe434bbe"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","1ce917eba2ad259b83401e6dcd5d69c0"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","71a772d0916f017f71625ba51f7b1d28"],["/page/10/index.html","3ba3498617bdf5e8fa57d899da86eb56"],["/page/11/index.html","50dcc7f08cae9f0b35e1bcb182a03da3"],["/page/12/index.html","0c903678dc7de4d73ac071bfc07c83e9"],["/page/13/index.html","d483ec82b93ffa8bcb321221f567224d"],["/page/14/index.html","807f95c61fda89811d0fffc1af599b27"],["/page/2/index.html","ce173aeed1a76ecd49518ff9187caba5"],["/page/3/index.html","3bdcec787e8755d8f11af276891e1076"],["/page/4/index.html","cad883fa147ae42f1c70472c41ec71f5"],["/page/5/index.html","d011e5c11a3d993dd69fdc2315760b50"],["/page/6/index.html","c5f046ed19d097689b9b943e7f9c9d05"],["/page/7/index.html","46defa916a5a63f3c347b02b499a1ac4"],["/page/8/index.html","6cbf60088baf2eff4f696255011e488e"],["/page/9/index.html","65c0ff75af32e8a2a8a4d12a34b13c03"],["/posts/10c9dd98.html","7f9886d355b73a568023cae5db0bdb24"],["/posts/126ebb99.html","9c6ba9f15fcbe3f900e5259e866c31cb"],["/posts/1295b569.html","7a42205201c01a6d6f7fb77ae3b57343"],["/posts/1370342.html","ce23732219b551b95e82c01e5bf7eb87"],["/posts/15ef14c2.html","c4615fe8048e7df68c699330534d9656"],["/posts/15f3959d.html","d7af37a78d6fd8f0a48434df6ce660c1"],["/posts/18ab785d.html","d6fdecbe1b92c4e9a630ba110396ed7e"],["/posts/1d59b71f.html","1dd954a819b08e09daf54a59f6ac0a3c"],["/posts/20b3f3a4.html","6665208bbf1c8f97849b4d3f22cc6d01"],["/posts/245f1c7d.html","c015c986b72abd5d7576d04bd9d75014"],["/posts/252658f.html","793017a1e76c7b611043bad6a76537b7"],["/posts/28397adc.html","2633d2479830be62c3e728e0a2b60126"],["/posts/2ad07f54.html","81d2a872b8002a3dfade596471592bb2"],["/posts/2b38bce0.html","885735701dffe34d8a58be7b820c3772"],["/posts/2c0a6836.html","5b0884c35c28731bf355d47dc1688214"],["/posts/2ce39bcc.html","6506c892b9772fa8f996df167a345b49"],["/posts/2cf620f0.html","390f7530fe99419e144e5e9ab92680c4"],["/posts/2e30fd6d.html","966d5ff0b6d3c6fdeed1fb17e1ad41da"],["/posts/30a413ad.html","0bb9f93c69089068793b7d0e1fe9aefa"],["/posts/34292736.html","64fc259901f19e761ada633750b7f802"],["/posts/3468cbe.html","bae32caf0ecf31b64206d223a316fd79"],["/posts/39176dc0.html","9d4fa0ba43f153cda2e65030cd48f611"],["/posts/3e118dbf.html","af5f6b4dbc9b619eb22d9b3b87d04287"],["/posts/3f7d823a.html","224706e0496a3f0f64b7d0cf402229b3"],["/posts/3f978819.html","1213fe8b13b10adcefca03c57e4a8d61"],["/posts/41dac80e.html","1bff69f40eba4cc2fc49d8c0a92a8ec7"],["/posts/43945723.html","c633f4d46744858e49286c23e89773e4"],["/posts/44124a6b.html","155eb3af29c455198dce1c4865b48e85"],["/posts/47abb61d.html","035e54824a6ff4a50664f76138983131"],["/posts/4996478a.html","d3145174eb9969c1a215f6476c97a95e"],["/posts/4b689be3.html","917225f03fbaca6cd3ec22bda973d585"],["/posts/4cf8423f.html","9c89cc11224d9e530a09e6ab46ceee74"],["/posts/4dcf85c.html","bdf9b4d295f2dfe3cdbe1de62af3c1de"],["/posts/500cd322.html","1aa05ba2540c5c9e46f1fec0cd420cf2"],["/posts/51c9b1ff.html","3bbe77dc5fc7ad24fc03de874c528c14"],["/posts/52b5b3c6.html","768e3e351b903908c44faf1b4028415a"],["/posts/54f496ad.html","b99f99de97c2ce85e676ec4243d2ccac"],["/posts/558e1f30.html","49a9586ee4feedfd02ae73f98ed9f477"],["/posts/5d8bea92.html","f2da1f6220256c9675856102531b84f3"],["/posts/5f6e0c59.html","8f75204d7d1d0d31051816fdd98c1de6"],["/posts/61a63a84.html","b82bfdf377b7f96f8ae2221b4333f57e"],["/posts/625ab7bf.html","fd0c67939297ff2198ba965b396b5c43"],["/posts/6336a2f9.html","356cc7a15cb5f7242206843815767e46"],["/posts/6432d61a.html","5876f2ba7a8254bf612f2a3f7b2f1da3"],["/posts/6515f032.html","768e23317746bfa69ce7fcd7b3ac0fac"],["/posts/6720ccdd.html","d2fc57ffc84621e30cf13d08fc7ca89a"],["/posts/6a4b5ac8.html","86fd00bb885f710926a84f1f6d2d6503"],["/posts/6aa4177c.html","9c25371554c177d731e509525add09c6"],["/posts/6b15f81f.html","49338f88b771be078c71243490170865"],["/posts/71131d34.html","8ef841eca941a244fcc086515d046397"],["/posts/742fd48d.html","66b4a108d911380db245f913bdde785e"],["/posts/78a8a8d3.html","8823757557841a36f3466a5aec7df523"],["/posts/7a5ef3d0.html","2b619fa12f4b94c83548f1a870f1eca2"],["/posts/7b41e1ac.html","2f02491ac242e4e49e77def0efa0823f"],["/posts/7b51011d.html","9dddbfa7be6a505eaea2df3a3353b404"],["/posts/7e3aa3e2.html","46e83185e3235ddd1225385d462d698c"],["/posts/80fe2691.html","7c849bdf6084285e7777d6400ce6f02d"],["/posts/81ac52e9.html","7ed039040b37d575bc2907289cf6afca"],["/posts/82332d11.html","08992a064ad7d9f97770f04fec8831df"],["/posts/8486f6f9.html","915b3ca1576231243b0c0161f491b0e4"],["/posts/849b40f8.html","abb952c2632c3b8297be01d57bfe040e"],["/posts/85c51d68.html","5a90af1f3b04b2623362e3714e7ddd0d"],["/posts/86a6c500.html","8005ab4fefad6e99b9151a23e6d45278"],["/posts/886f8d3.html","e71661af27376beebf65065ba13c7a4f"],["/posts/8a7cba10.html","75f6f2d279a768478340d8c52b9c205b"],["/posts/8ac11b41.html","200a1efd72ca265d964bcf5e8143119a"],["/posts/8dd520d9.html","c6846573188e3cad1fb69a3aba35b13f"],["/posts/8f555654.html","5436d9569c71f3453fe974688b7f2f3d"],["/posts/92a980c2.html","e714d4fffb93b2aeb0b885c409dd318d"],["/posts/92ce16.html","b01be0a6d5c27db61d55c2238a7c9e18"],["/posts/93e9943b.html","9c5629210807df566a37d3b2bb8957c4"],["/posts/94d3c794.html","72dc0dc2126b7e6df09f40eb774bf08d"],["/posts/96b281f2.html","e60efb55919a4e5301cf1acabf431ed7"],["/posts/97f50eea.html","a94ac50b4bf2494425c0bbcbc82fdb56"],["/posts/97fca8be.html","1410410f58216e1a9144206566f28f10"],["/posts/98662d05.html","11e3786aeecf51dc54c0f5f4cd41ba68"],["/posts/9a2f6162.html","1f3fcd81bb125edde901949058245c7a"],["/posts/9b22a48d.html","604646adfed37566b72dfaa36834951a"],["/posts/9cb455b1.html","7515cd7a6bfac472bcb36fc0832cc793"],["/posts/9ecdeecc.html","2a38f06ccea0e6d4cad87e75028aad02"],["/posts/9efd7701.html","e0f6111315d04f7bfa2025bdbd240a86"],["/posts/9f61c1a0.html","c1549c4043b8dffc20f7ae0973982b76"],["/posts/a1de710.html","abc2688ea548e23c767601bf4cbfcd4d"],["/posts/a30eb0cd.html","cb0919bfb58635761afef83cea4d0ca8"],["/posts/a7634b5d.html","240c30fb8273e61b7dc43792ac29ac3e"],["/posts/a8c593b5.html","2c740e27737c415104b391d1c55eb6ac"],["/posts/ad0c1efa.html","6778a85c37bc22b888dfb3429ec8affc"],["/posts/ada3f440.html","d8a2bb61c21772f9e9f4ac5a44ded5cd"],["/posts/af1807ef.html","ca0474bca3dc786a7d2e2c3317fe1f10"],["/posts/b397bf03.html","d9a24c0ca56b0c2814ead6b4bfb05331"],["/posts/b497b647.html","505fcfaafa292d80d0e58542f93fdd97"],["/posts/b4d464b0.html","0cb8742e1727ebb690756ad908becba4"],["/posts/b5fb773f.html","7c9866b785bce57dca4b25a90425c1da"],["/posts/b8d46b32.html","6a42872c1de85734be4a06b0f031dbab"],["/posts/c1b2c6c9.html","cf898555f980f6bf9c4764e12049d191"],["/posts/c2111cbf.html","786d90fb83210f6feaefce551838c608"],["/posts/c316c2e8.html","c656e03b7e7fa594f8a75f078731be9a"],["/posts/c43e60b5.html","65e94ddc2ea09e5249261d42fbae5f57"],["/posts/c497a412.html","f824593b566f3e35e1387f087417e10e"],["/posts/c5395ba3.html","83da569c023dcf1053c03fdc6372bab3"],["/posts/c5de299a.html","f6482bd307b14fe2949ec89cfef86b11"],["/posts/c70bba9c.html","c4a9a53131142bfee662ad4add1f9f6b"],["/posts/c797535e.html","c06b0df632388f13ef9db9e7301080f4"],["/posts/c7a62c79.html","54be481809b90dc765975eca48426176"],["/posts/cae2c959.html","706d01b86b499730109b40ceaeeb37d6"],["/posts/cbebef2b.html","8acc0ec6e1a705a942f025327a0b24e5"],["/posts/cc4c0017.html","011c4a2f592d8176355d8a63a753f94b"],["/posts/ce25023e.html","e9d6978bacb30a4dd7e5a58a1ec0113c"],["/posts/d2fd4837.html","3a015f5ee10347419e4936277448b834"],["/posts/d3233cbb.html","25247a121d5aabde4e03adf2bf657ebc"],["/posts/d3a745a8.html","ff2146616569dcd814b83280898ba9f0"],["/posts/d7e940d2.html","e3df6d60a25ce44796eb187f6da10048"],["/posts/dc815d5.html","0358d6d733671b0b5faa5829c1ed1ab0"],["/posts/de25b0be.html","21d8051f500bf4d3af3e5e5bcb881bb2"],["/posts/e2623b4e.html","9b94a5543a506c5273c45e4f55bf79db"],["/posts/e3ab6ad8.html","535548585b823843c6420d98fe668d37"],["/posts/e5018da6.html","b15f82b5ced41a40b07dce441154af89"],["/posts/e5963272.html","78bc92732956175418548e2af70d59fb"],["/posts/e5ef4c3c.html","2747a5e56df753b80db0bf9477e9a262"],["/posts/e624b065.html","e3309b1df24647416e39b2d15a572af9"],["/posts/e7c703bb.html","5beba6cd22a425cc2f9deae9f4d74a82"],["/posts/e8f14b6c.html","94b5d1bc72d0dd96e91a3b26ff318d2b"],["/posts/e91abb63.html","767a5de330d34210cf28d611d64371ba"],["/posts/ea9a8808.html","217656d628f52e6c1309a4cb1c102685"],["/posts/eb784749.html","b1eae7d1b534e08728e98c5dfc409309"],["/posts/ebaf2232.html","2d1f671619725bfd85341bc572bc53c5"],["/posts/ed75f185.html","fe2a8b84701711137d6794207e28b90c"],["/posts/ee1ed673.html","ee3e2a37171895c4f950d855b4f9d2ab"],["/posts/f0c3ed61.html","dd07b0604589406240c4fbf611dfbc58"],["/posts/f151ff43.html","347a85a93137674b851568a8d64ad31c"],["/posts/f21e7f84.html","fd6861bcfbac269b07757cd0c894d701"],["/posts/f230b0fd.html","99546488d758ca9bfa02a172a00f1c41"],["/posts/f663d5cc.html","df8a03ba1bad25a4223723e1df0e4a50"],["/posts/f730ad18.html","0f8536dc15a1b29f153ece1113c30439"],["/posts/fc04d0d4.html","e9d1df12bb006556cbef67ce83062b36"],["/sumire/index.html","1aeb39fdddeb092cfd3e4f624240ca9e"],["/sw-register.js","f66aac9132462fe000c3aa33f107e717"],["/tags/APPLE-project/index.html","09659c990b9605bc52f33db86038ae2e"],["/tags/Ankrache/index.html","2f7cbb810d47ab9cdbd7f639755e7a65"],["/tags/BELL-DA/index.html","a777ef227a9240f9c6f52f1eb4bd22a6"],["/tags/BL-Game/index.html","20013795e184f024ef2b7abaed41b0fe"],["/tags/Blue-Dahlia-Digital-Creators/index.html","8fde0c52aeb7f2cc3754e36fe302ee76"],["/tags/Blue-Line-Games/index.html","71c74f74ca34be147d788ef5ce9b494c"],["/tags/CHUNSOFT/index.html","e4c6219e0cde16367bbee3c2692baae8"],["/tags/Check＆Stripe/index.html","079f60756bb03d2fa3b5a1edbb1b65bc"],["/tags/Cherry-Pie/index.html","40542a8b78199ad1ef73652b27ecb138"],["/tags/Circle-Mebius/index.html","7212e8286b487ce151038460b417024f"],["/tags/CresCENT-BLANK/index.html","b4e5e41e47df2f5e7debe25740791409"],["/tags/Dopamine-Software/index.html","4dbe7fcf814c8197aab05d592f89dfc5"],["/tags/Dos/index.html","1119308fc55308afa08d75a0dc1fff99"],["/tags/Earth-Well/index.html","ad8e46f5518aac88b1674fac5ef46d70"],["/tags/Forest/index.html","c28097652adafb5bfe7064bbe8257bfd"],["/tags/HaccaWorks/index.html","c4bc70c02dd4406dc9188a041ecd301d"],["/tags/Kanon/index.html","95a79267f94a2be20b1a9963eea11d15"],["/tags/MANATSU-8/index.html","7c8115be3d7c0fb5c79088add788d1ca"],["/tags/MARINE/index.html","717164af78b784c0236b682d702a53c2"],["/tags/MIO/index.html","1b54bd3694688b6fecb685cb754a7f6f"],["/tags/NAOX/index.html","915d37759b1bb341ba26b11ef85a1967"],["/tags/Nmyu/index.html","5f67216c0eca98f7abd9419ee06d40ee"],["/tags/O-S-I/index.html","c1fab4b698d7f4b607654c0e139914ff"],["/tags/Omegaの視界/index.html","ba800e1c67d51657e755e9ef09916643"],["/tags/PC88/index.html","9742861c366ae38f82cbff4f7d77f130"],["/tags/PC98/index.html","9da41525522001f686b81c5883793755"],["/tags/Perpetual-Room/index.html","7fbfe0e7664481ca9c4bbec3430b26fa"],["/tags/Pleiades-Company/index.html","01ac36d18b41fce1f0e483d9c72bb946"],["/tags/Project-Twintail/index.html","e7c4f318596e983669120be792a29c73"],["/tags/RIFF-RAFF/index.html","f67f5e88bf4eb84528e892992cff882f"],["/tags/RPG2000/index.html","4711dbbcfaead0704a924d01cc161d3f"],["/tags/Reverv/index.html","9fb70d1bbfa2c45a93d04bcbbe82f8ed"],["/tags/SENTIVE/index.html","09185829c5f111faa328b0d62817b0b9"],["/tags/Saihate-SOFT/index.html","f08ad3a9bea2cbf2e2ce186c190777db"],["/tags/Scrubbing/index.html","e3b1d583acf749ed074d17caeb30857b"],["/tags/Sky-On-R-imaginAtion/index.html","8b55f466a0413dd4604e7deda9b96ad3"],["/tags/StrayMoon/index.html","a99e6448d88bd593c2bbd49c26072576"],["/tags/Studio-Bu-Sa/index.html","3c70f8960dc798fbf430ae845c70bafb"],["/tags/TRANSPARENCY/index.html","be3fa22cb22c7848d4d8a8a603a95d9a"],["/tags/ToHeart/index.html","022df1550f55c51d073234217231c939"],["/tags/Traumend/index.html","5d1652bd4b0246f78244f771c86b81f3"],["/tags/Witch/index.html","9888f94becbbbf9da9d115efbf435530"],["/tags/adonis-project/index.html","ffd99a38ab7a15ad0d4262e0847420f0"],["/tags/capriccio-suite/index.html","4bd779309e3e3d509fed028ae8efc5f3"],["/tags/flash/index.html","daf06951a47bc433f7de4c66ed43d2f2"],["/tags/galgame/index.html","7b452d9c70a455b37a1db801af349a4f"],["/tags/galgame/page/2/index.html","90ac4fc5872b5f089dc7966b70513769"],["/tags/gal资源/index.html","1a7f16a40bbe5f6a49d5c0f0c7595deb"],["/tags/gal资源/page/2/index.html","e5299ba25c82a32a35503ac36d101fc2"],["/tags/gal资源/page/3/index.html","9aa9c83282b9535dbba0ffe288542ad9"],["/tags/index.html","a51be64c820a0d2de9ea3013302d2f7f"],["/tags/rkr/index.html","03bf221d879dac32890b4ff89af029e6"],["/tags/team-eye-mask/index.html","a632774ac7bfe53b5e1690bcdab3964e"],["/tags/ありすくろいつ/index.html","3218ecf3a4ef75f8391b44fb4ef5a6ea"],["/tags/いつものところ/index.html","e314acc6756aeebf40d7e64f264ef796"],["/tags/きつねみみ饅頭/index.html","f79744ba33035dff7fcfff836809b8e4"],["/tags/ねこねこソフト/index.html","5f81df9688f49944932bd65c0377e264"],["/tags/ねこバナナ/index.html","f3edfb1630d2039fd28ecbcdbf63d210"],["/tags/はちみつくまさん/index.html","1e6079f32beab38a85825cf0a2c606b7"],["/tags/ろりちせ/index.html","683795377821f33586fd5c31a63af27d"],["/tags/アイル【チーム・TATU】/index.html","d0028fb1d80eb39a61c12b337fb43ca6"],["/tags/アクアポラリス/index.html","81d637b0e63f853f5bcd52ae9b690d2d"],["/tags/アークシステムワークス/index.html","759f179f784fdd5c032782b14ea87d74"],["/tags/ブロッコリー/index.html","5dd57df2bd804ff1c5218cea72a3270b"],["/tags/乙女/index.html","dafa6ff8a67f2940d0be1e46cf1538fe"],["/tags/乙游/index.html","da0281b787f9669b10c3d36b30aa4c48"],["/tags/停产/index.html","7209bcea23698397983626fce5fffab5"],["/tags/公告/index.html","79efe7b86e01ffee538f3b4673dbeb58"],["/tags/同人/index.html","b535b955e41ed260ca4259383cfddbfb"],["/tags/堀井雄二/index.html","ebc8ea7984b8dad4a02f95ae50b1a3bc"],["/tags/外海なおき/index.html","3ace18a32219bd1f5927e5f20386de13"],["/tags/女性向/index.html","0075ee154f45d2989aa68f44c46ef77d"],["/tags/御茶ノ水電子製作所/index.html","927da28092c392f5efb1eaca08b6a120"],["/tags/月の水/index.html","07184561bee507409d812ba089e12ddd"],["/tags/桃野衿/index.html","cc9a7c11b34e16fea4af33464eea5212"],["/tags/機械式少女/index.html","715a2f9e577a3c6d126c952ba5e2d3cc"],["/tags/水仙/index.html","338c4b6c37a2b016985afb741febc928"],["/tags/汉化/index.html","eb9a9ac71294304c454c5af3925b14cb"],["/tags/熊月温泉/index.html","14e033f22f45a913c235bf543775a102"],["/tags/片冈智/index.html","2c7651c6fa2a1f889326e8f06e6b8b81"],["/tags/片岡とも/index.html","b8e6a18e29471109aad5c40fd0eb5393"],["/tags/牙の刻印制作委員会/index.html","f931ddaca2926f17df640738581084c0"],["/tags/牛カルビ定食-FLAT/index.html","9788cb51eab7406aa53c1ec0bac01db7"],["/tags/牧尾屋/index.html","643aa928e7b14e95dd2c71f4e484dc05"],["/tags/犬茶屋/index.html","63b2ac439b2d20f9bc61bb98689c1ff4"],["/tags/猫猫社/index.html","824c877621729b44e729928c4678e25a"],["/tags/王宮魔法劇団/index.html","1eee363360d66971209c6e49133d2d41"],["/tags/画集/index.html","48339b8f572521195f445ef32526938b"],["/tags/索引/index.html","87c81539c19d25a136c63edc6e24260f"],["/tags/缺失/index.html","19583f34c7bf2b1bb43d388976d7a314"],["/tags/自购/index.html","1a049676fdf357fe5cf673abf6e35872"],["/tags/茶葉☆姫/index.html","3447eb4fa7150d8c109561d5936ad5f0"],["/tags/郷愁花屋/index.html","c711a9698fd21effed810cfaac6ba932"],["/tags/閂夜明/index.html","f2e5eb42232d9b95dbb771be9bd994c8"],["/tags/音乐美/index.html","03cddfd52e23e2c0d8684bdba74d4dbd"],["/tags/黒†救/index.html","b9a56319ffb833cc8775b5f3f55e8108"]];
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
