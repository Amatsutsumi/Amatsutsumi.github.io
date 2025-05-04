/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","66e834a2f056a71f24a1ce41a293bafc"],["/archives/2024/04/index.html","523168f504a781149ca6b5a86f3131df"],["/archives/2024/index.html","80491e8985802c39acb72298c397a5b7"],["/archives/2025/02/index.html","f0aafc3f249de066cd1097f6658d2111"],["/archives/2025/02/page/2/index.html","86d5d5d9fc244ce4dd61247ff8747e7c"],["/archives/2025/02/page/3/index.html","ca04b36e84f4c87cf90afa4b1f02446f"],["/archives/2025/02/page/4/index.html","8b7c7014ee13f2a67b495dbe19979ab5"],["/archives/2025/02/page/5/index.html","439585bd29302cd20f9c4050545576dc"],["/archives/2025/03/index.html","af1aa62d77930922dab92227bb6b76a2"],["/archives/2025/03/page/2/index.html","a081585e110214fcb4eb9422fcef8ffc"],["/archives/2025/03/page/3/index.html","459ccb17b7d7d36b636b755fc6cc05f9"],["/archives/2025/03/page/4/index.html","c60bfe78680ba1467ebb6341cd91e011"],["/archives/2025/03/page/5/index.html","54f0b7e0e13c81feeb9e2f73e0e591c5"],["/archives/2025/03/page/6/index.html","3b42ddfa91f1fe161368a9d98b89cef7"],["/archives/2025/04/index.html","8a6f4f5500736f687752a50f71b989d3"],["/archives/2025/04/page/2/index.html","aa8edbc72c50e14e4139f1e49cf8b875"],["/archives/2025/04/page/3/index.html","12e796fe6cbeec0236020c9589d9b52b"],["/archives/2025/05/index.html","eb3a6ed2811e44feb37d2c926a41de07"],["/archives/2025/index.html","2fe7af85eb95b5036cd591591c105485"],["/archives/2025/page/10/index.html","ec01bee0c0653f9890c6dc5dcaef45d6"],["/archives/2025/page/11/index.html","bbf5d9fb2fa7a15482ae94f8f454b8a4"],["/archives/2025/page/12/index.html","2521ccc64c9ff09b0b288eafeff91320"],["/archives/2025/page/13/index.html","308fa0862328c0a44883a00df193f974"],["/archives/2025/page/14/index.html","263858fb3410f71e6e949843a7a266e1"],["/archives/2025/page/2/index.html","37e746e1ee4443475d2fa6ec2a766c92"],["/archives/2025/page/3/index.html","82554bf5bc3bae768b437744b8938c1e"],["/archives/2025/page/4/index.html","a694598872195c0f7dc77175ae7affee"],["/archives/2025/page/5/index.html","0a821ebc446d2c1767ca1e1d0588a0c9"],["/archives/2025/page/6/index.html","317a3bbfe00b55a538d993c24ce60a9d"],["/archives/2025/page/7/index.html","e3b5b3a8a523ab8c49e8a48322a60315"],["/archives/2025/page/8/index.html","9bfd3bf95d7a86238dfea9a490127b34"],["/archives/2025/page/9/index.html","7e15e63fd9cda24e37d628d5137b9154"],["/archives/2026/02/index.html","1f064609b613f0466e4c5597db0bc90c"],["/archives/2026/index.html","e6fe63998fe09aff6368102c988b5fb5"],["/archives/2825/04/index.html","c34e0c37ed632919c6a5c13abbd80398"],["/archives/2825/index.html","31a484e3bb495fd941062c14680cdb7c"],["/archives/2925/01/index.html","59d869341f6ebd4d7b0f15a734fbd018"],["/archives/2925/index.html","43ee1bbacb561a07392dc10a7a4d8452"],["/archives/index.html","f9d43155b60dacbb6ae37f536c64fde9"],["/archives/page/10/index.html","8f05c0251d6baffabaf46321649b75e2"],["/archives/page/11/index.html","e5b3f69d9c0bbdd57cd6a4d8cff90823"],["/archives/page/12/index.html","6a71bc35e01c36cbbbc4351b9978d620"],["/archives/page/13/index.html","4641712cb2c7bb7d3185b871fdc90869"],["/archives/page/14/index.html","2d54428e6d94cf0c56127c4619f72c3c"],["/archives/page/2/index.html","2b0044d201c34e59522e7f568402b2dc"],["/archives/page/3/index.html","ef828a04597b4f4f6af44ab290474f0f"],["/archives/page/4/index.html","07af9a03368d1453b9ddda1c86ee9449"],["/archives/page/5/index.html","3991b3433eeb71c0e6c4d7bf90576087"],["/archives/page/6/index.html","fa5df3b9531c6453bc9076d102bdb29a"],["/archives/page/7/index.html","f2df176d5cf75771b7e6baf0f79d128f"],["/archives/page/8/index.html","8474b3c9f1c6d4cb94f830b8bbdb336f"],["/archives/page/9/index.html","74bf98d822c176afdd3a107a82f53eff"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","b1d49261f5cd9cd4083a43dba9732fc8"],["/categories/galgame/page/2/index.html","2150a05388bb317fe70cd27513f56ba5"],["/categories/公告/index.html","b923543e4a96d6087afdfc968e1c13dd"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","28772c3731641fb7d93c16bf310e2666"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","e509ec16791be422a5ba235b560653c2"],["/page/10/index.html","5513223c336fd568ed3680f9510fa0cd"],["/page/11/index.html","6ae9ff40a531c604ab82a6e525548b38"],["/page/12/index.html","8363e0b3f45ec21f324d593385f2238f"],["/page/13/index.html","624518a403b44c9b1c2b72f1138ce74e"],["/page/14/index.html","4d7f2f222418e3de87758283987235e9"],["/page/2/index.html","05b7b74f781a4aba7cf02cc40b48c10c"],["/page/3/index.html","64975203a28327aff99eb799968ad2ed"],["/page/4/index.html","61cd5d635c80a9f37f5e1ad1cbe96299"],["/page/5/index.html","27aad22f3d3498263f5f8dabff2add86"],["/page/6/index.html","fb5d194ac6f6c3b89d039dc59403c7c0"],["/page/7/index.html","50c02a8810d43061d53f1105c7f54096"],["/page/8/index.html","099f62e936595b823f68f62db1793de8"],["/page/9/index.html","4c6afa66cf200fde99f8fe76a0848b08"],["/posts/10c9dd98.html","923c102d96e26f2148ceecd563ba288b"],["/posts/126ebb99.html","15ed399832207fd0925031cfe194b6ff"],["/posts/1295b569.html","6b9d622e516d247bd5ae61b7801cf7e1"],["/posts/1370342.html","db6716f2bf09cf5853ad30091cf9166d"],["/posts/15ef14c2.html","b476059bfb80461b1cde50d823ca0ba0"],["/posts/15f3959d.html","6418b62e27ad68592b5bdc5c2842f8b1"],["/posts/18ab785d.html","41c0697d1b7acfdde7b3a2970f4c741b"],["/posts/1d59b71f.html","a52c047a4d8ba24ad769f69b24bd1c77"],["/posts/20b3f3a4.html","be74f6924c2b66c9b157640aaf279c4a"],["/posts/245f1c7d.html","8d10bdd0c2567a8e1c263b6e1ead02d9"],["/posts/252658f.html","8b2d95f00eef12a47868a55e987949eb"],["/posts/28397adc.html","af2a27060488c3a3a1d0e7b4f69e5316"],["/posts/2ad07f54.html","a27a963e7cf99c145f913a1f3b756660"],["/posts/2b38bce0.html","1a2113bbda7fd23b97e88a76746bec6e"],["/posts/2c0a6836.html","895372d3a9518e61da972cb1bf577c45"],["/posts/2ce39bcc.html","d7abf90b598a7e08d515d7674240f5f1"],["/posts/2cf620f0.html","e00d83c4b95b4b37481302b4e3037822"],["/posts/2e30fd6d.html","32e1b9b86875f36ae786dd1c2b453ae7"],["/posts/30a413ad.html","93ef794f2e563d6280460608a325d6d5"],["/posts/34292736.html","97c3fe2b16cc25251212b4d7a0f2a79d"],["/posts/3468cbe.html","29652727d34e2f98d6c8b540ec13a0cd"],["/posts/39176dc0.html","08c5fd7ff1975d2e95619d0b7b024e5c"],["/posts/3be6a165.html","a197502591d860fbd69cdf0fabbd10cb"],["/posts/3e118dbf.html","e1ad40c2665be13d0365a288d371ff1f"],["/posts/3f7d823a.html","9de2459f1ae99a1174a24b2d46cd6111"],["/posts/3f978819.html","2f9327d8e1565e130d7f39883dff7462"],["/posts/41dac80e.html","aa2684312106946d87348b652b5fceb6"],["/posts/43945723.html","89bde263ef90297b7d6e4e1e8cecd9ed"],["/posts/44124a6b.html","2601ecc8fca7a442f7cd1289a21eac12"],["/posts/47abb61d.html","e5e8100b95cd96649f4cdec5a2ec24a5"],["/posts/4996478a.html","af8f940ec7227fcae63237d2df229910"],["/posts/4b689be3.html","080293f094cbff926cd7ecbb1965d2a1"],["/posts/4cf8423f.html","a385cb1ce2f7c3aececb24cff113d2b2"],["/posts/4dcf85c.html","805ba56f7a6b0ed6f8c5cb5095551cc6"],["/posts/500cd322.html","97903d810fa8ff0540136be75a1dd60e"],["/posts/51c9b1ff.html","5761c7b3cd6e4ba44ab58732c9cf0a5c"],["/posts/52b5b3c6.html","3b78700e942dd534fcb0bb43c01b06f4"],["/posts/54f496ad.html","c0fac0f270ab725219a095aba675ead9"],["/posts/558e1f30.html","953768e9ff6903055787efe697438ba7"],["/posts/5d8bea92.html","bf89328e660a93bf9d0106ee9b4c3a1c"],["/posts/5f6e0c59.html","57625266d220d41775ad27138a5fc153"],["/posts/61a63a84.html","8b1300b968276062e8009125b9d654c0"],["/posts/625ab7bf.html","8eb4899bb28f5ddd6a8d3ed06ea94b4a"],["/posts/6336a2f9.html","6639c3770c8c9a8988ae01aec4e53227"],["/posts/6432d61a.html","711babe4993562745a05f8e741dec710"],["/posts/6515f032.html","98dd2da90dddc56a0cccdfb36d72bcd3"],["/posts/6720ccdd.html","38cda052e70b533dfd74bc67b966bfd1"],["/posts/6a4b5ac8.html","ff1d2f3525dfc22ec545645b7238f9c0"],["/posts/6aa4177c.html","a4476f639f042f87691b0f0028975cb5"],["/posts/6b15f81f.html","928aaa201ded9815d94b6645a4a1beda"],["/posts/71131d34.html","2b96b5a15234fa1f4ac05508ee0417f3"],["/posts/742fd48d.html","f342113990bf16ada191b188f4b66eae"],["/posts/78a8a8d3.html","813de3f4951205469d3f13d503c190a6"],["/posts/7a5ef3d0.html","a24668d9095b1d1941de3574960aaaf8"],["/posts/7b41e1ac.html","d18c1202d01fa626a3577fbd71b0b9a7"],["/posts/7b51011d.html","2846250d9d6c748bc4fe5b5d96deaf49"],["/posts/7e3aa3e2.html","7bb998e7200388fc9e1782e1122504f0"],["/posts/80fe2691.html","2cb96f15a74e69672b2edcea4bab2235"],["/posts/81ac52e9.html","3b49eb9d9a2aa94db33504f9408aba45"],["/posts/82332d11.html","e02b3feda8d9648e9a75bbe5c22156ac"],["/posts/8486f6f9.html","f1e637a2c974457640c7dd8d733e8f3a"],["/posts/849b40f8.html","206fc6ce67de6c3bf264c2267f60c1b6"],["/posts/85c51d68.html","2c5ee7d5211987a909a6ee25787628ba"],["/posts/86a6c500.html","6fa6eadf8fcf1a359b58984fc8598995"],["/posts/886f8d3.html","da8d64f297968db6d404d4f62964bfc9"],["/posts/8a7cba10.html","32284713eb4e708e701f727c9117a66b"],["/posts/8ac11b41.html","b35168419b5d9fb2f02e4705105e0e4b"],["/posts/8dd520d9.html","f9de01d4bba1e989d63e8d8e95f5a658"],["/posts/8f555654.html","7f16849970e5ef2d7d62ef3b1259f6a4"],["/posts/92a980c2.html","4f072afae1d05ae5b7340446fe43b85d"],["/posts/92ce16.html","ced3dbb8d4c5c8fa60b074f86f0a176e"],["/posts/93e9943b.html","60c8cc051a1c7883ced173121e7ae4c3"],["/posts/94d3c794.html","ddd6e2f4c8ec073821d98d394bfee4ac"],["/posts/96b281f2.html","15a96776709384a110eecce233ebad59"],["/posts/97f50eea.html","26b3b9f051463d8c1164d97218279ad7"],["/posts/97fca8be.html","d4287e0755b675f5ae673499b66cf140"],["/posts/98662d05.html","74a1245dc9835e7a66a6edd25963c657"],["/posts/9a2f6162.html","564cb05ca29b2e392c75e85cef586f19"],["/posts/9b22a48d.html","3a1340f9d9b0ee55803b8f27225037e3"],["/posts/9cb455b1.html","366e44bd5541202b00151f57155f82a2"],["/posts/9ecdeecc.html","51174a56bb4bdff1cc5a0cefecbf48f0"],["/posts/9efd7701.html","82a0a72f5c1aa9c90972c7442a08b4a7"],["/posts/9f61c1a0.html","a95cd280e8710f9bc9d764a16e5b68c6"],["/posts/a1de710.html","a228b40a8b15412b3b7a02d0d12aac1d"],["/posts/a30eb0cd.html","2c4d56dfc873e23f15f81d2fc2ddda22"],["/posts/a7634b5d.html","4ec1eb5ab8603b1a627308b8275c628c"],["/posts/a8c593b5.html","e8f7be9b28d0ddc6806f0559683fef29"],["/posts/ad0c1efa.html","5f526b394d0afe112a0061ded89c2a82"],["/posts/ada3f440.html","a61e4a61f26e5facfa35293fd84de735"],["/posts/af1807ef.html","a8aeb768e0ace43097528a6c98da9db1"],["/posts/b397bf03.html","bc809a37a150221a75db7630138ef020"],["/posts/b497b647.html","751d53dd764ce6adb3132b190d5ad23b"],["/posts/b4d464b0.html","95a32d67f73088c44b8d1ccb939d7dcf"],["/posts/b5fb773f.html","bf3dcef0164b4e261d6f7c82a2405ef5"],["/posts/b8d46b32.html","cf64748f5ff7f62fea80df007bdd1f90"],["/posts/c1b2c6c9.html","e747629e9f7958e91640f53bf89be8b5"],["/posts/c2111cbf.html","a041c9f129668d6d8ee90b4a3fd5d9e7"],["/posts/c316c2e8.html","c02da724454778e1d4d1057d1c71287a"],["/posts/c43e60b5.html","1b383a236ce150c40370b5c2dcb1895c"],["/posts/c497a412.html","e684405f3150c230f6ad74eee606429e"],["/posts/c5395ba3.html","d38a3e3b2ba9662812695f70c372f218"],["/posts/c5de299a.html","b801984530de2dd0c714d0a53ceddda8"],["/posts/c70bba9c.html","024e96bba74d28fe85f94d4d366e088b"],["/posts/c797535e.html","bf1e89f8fcf2e0a81ed9bcf3490fe056"],["/posts/c7a62c79.html","ead6dd5ddb4e4cfb1f99b324602aa674"],["/posts/cae2c959.html","50daa4ae21f1b05b23a47392c419aa1f"],["/posts/cbebef2b.html","cb5a251243f4723c784d5616a7828fe5"],["/posts/cc4c0017.html","8fd3dbc4c740fc7a983c7e52725b577f"],["/posts/ce25023e.html","40cfd568a68ebbbb84547509016e216c"],["/posts/d2fd4837.html","6fc4505d38c6898fc146f30233b113c8"],["/posts/d3233cbb.html","5c9b119bccfb00a0ba28326583c12715"],["/posts/d3a745a8.html","752cd729653576eb3be9403303814073"],["/posts/d7e940d2.html","ec17dd29f4202d63aa18134875ff5355"],["/posts/dc815d5.html","8d7b4f0eee4e9c6a26e685df04002ab0"],["/posts/de25b0be.html","b150ff556c0fb29b3a69a57adf6e7cae"],["/posts/e2623b4e.html","bf2fb0be6a144a05d41b5bdb599ff968"],["/posts/e3ab6ad8.html","8f47284e42e238475c22d50d23c6da12"],["/posts/e5018da6.html","14ede09006dbbb9805862aea9f8d8668"],["/posts/e5963272.html","1dc86a91f8694dfde7f6fe32aeb7373b"],["/posts/e5ef4c3c.html","e4a45b4e1fe09b0c53082ac2cd76f071"],["/posts/e624b065.html","8738d6337542a2ee5490ab689160e5f2"],["/posts/e7c703bb.html","2df56c7d5d7c4e365771cef4b614cd61"],["/posts/e8f14b6c.html","6cd709c6ef9638147bd6a0f78c7f2c72"],["/posts/e91abb63.html","eeb8d54cb2c135e55162dcf91ea94fa4"],["/posts/ea9a8808.html","65e5f2453038b96f09635c36150c1dfb"],["/posts/eb784749.html","6b36f7c6e96810fd73b86bdbc3a92f84"],["/posts/ebaf2232.html","3172ca6796ed651ea444f05e59171180"],["/posts/ed75f185.html","969f9d5e90d4ea46fe196a4c68ebe404"],["/posts/ee1ed673.html","3b6b876ff0cf5c20165e2d6dda14288e"],["/posts/f0c3ed61.html","db0bfd519c980b386cd303d09186d0e3"],["/posts/f151ff43.html","2067febfc9f394d6ab72416776702688"],["/posts/f21e7f84.html","db0a4042eeb6b82ca4408a87d20de9cf"],["/posts/f230b0fd.html","23030eb5f8a2e278c63c6c9e70b9cb5e"],["/posts/f28a7877.html","ff928bb49f64c193167aedcaf4704f71"],["/posts/f663d5cc.html","b0e1dd47c02bbec0981544c7b2d566d1"],["/posts/f730ad18.html","467701306ea639c7d5d0495800228af8"],["/posts/fb5d4608.html","8b2d3ab525ccab4176a0e7ab2d6280a4"],["/posts/fc04d0d4.html","0d07eca97438fd2f0c51523d51212125"],["/sumire/index.html","443322a3f1cca0f2be3408999e82bf4b"],["/sw-register.js","67140d1bd9c6b6908905416ee0d13d0a"],["/tags/AKo/index.html","ccf884740d2faff3d318909ccad3ddc8"],["/tags/APPLE-project/index.html","e62b2f6eae911bc2ad6addd2f5572f0e"],["/tags/Ankrache/index.html","3cc674434c3186de831702271e1a0fb8"],["/tags/BELL-DA/index.html","8fa7590c1cd2e856b2bcbb91d2848a02"],["/tags/BL-Game/index.html","76e72d6cbe23a4064ea36622c4d0eb1c"],["/tags/Blue-Dahlia-Digital-Creators/index.html","85b2e993a880730f8f99178ab0057ae3"],["/tags/Blue-Line-Games/index.html","bb85908ce34aba5f2da4287a658a808a"],["/tags/CHUNSOFT/index.html","b16a13131ceed79e4c48539151755695"],["/tags/Check＆Stripe/index.html","36fc6a696458834a0ea9da7491c40d84"],["/tags/Cherry-Pie/index.html","a041e9d5a0c3c11f7023abc412df468d"],["/tags/Circle-Mebius/index.html","0a1d5dc7af988aaa38dd6620ea50df95"],["/tags/CresCENT-BLANK/index.html","3c8de682e57943d555660573dc45cc2a"],["/tags/Dopamine-Software/index.html","3ec5e20d658167538e6487d1b417667e"],["/tags/Dos/index.html","780db79866da3306ecf9e0e6e8200331"],["/tags/Earth-Well/index.html","437db17e3a48b96f06910638267496f8"],["/tags/Forest/index.html","02b614bf76128336bee7c796f543b4b1"],["/tags/HaccaWorks/index.html","f421e725b4d0d102a7bd496b16479837"],["/tags/Kanon/index.html","78712333547e66dcf78674d1b1c5b037"],["/tags/MANATSU-8/index.html","fe08120c67154aca15e6233571908eca"],["/tags/MARINE/index.html","00cbebc1111f7b905c6b07bc01fb309b"],["/tags/MIO/index.html","d1c31f162c37a6662ae6a5eb3916db48"],["/tags/NAOX/index.html","30a9fa016f1c5ca75dba8cccefd34f2a"],["/tags/Nmyu/index.html","e6e4ce593a5b443d864bc3471a589e06"],["/tags/O-S-I/index.html","b5b94ced482f4cb81a2cc25aea24ec0f"],["/tags/Omegaの視界/index.html","dae07c4651afd61ce63a6d48e4948510"],["/tags/PC88/index.html","4a8d2dc7cecda4f77008d7c106ce8802"],["/tags/PC98/index.html","eec1bc7af5c66ec6475455f23ce16f9f"],["/tags/Perpetual-Room/index.html","2635c902048a86f7d69cf83b02bd4e90"],["/tags/Pleiades-Company/index.html","a16ea8b836487109bfe1641ba169606f"],["/tags/Project-Twintail/index.html","f96a3e76001b479d6149bacf7fda2916"],["/tags/RIFF-RAFF/index.html","2b4cc528e1a7f562c0ae47b364994e58"],["/tags/RPG2000/index.html","d055c7cd5b64ec29fa412402243156dd"],["/tags/Reverv/index.html","f0b6f32b217986835d9a77ce76d3c89d"],["/tags/SENTIVE/index.html","27f1e8deb7c55886b4995372704277d3"],["/tags/Saihate-SOFT/index.html","ff425d3d761be4a3176874a9fdcb90ba"],["/tags/Scrubbing/index.html","66db213fa2aee09329b0f182df01ba56"],["/tags/Sky-On-R-imaginAtion/index.html","9736e17fb22f8fbc89b46c461f85782d"],["/tags/StrayMoon/index.html","fe23685c567f54ceea4432cd22d5ffcf"],["/tags/Studio-Bu-Sa/index.html","b094fd76428c49953f6fe78e4b7acf4e"],["/tags/TRANSPARENCY/index.html","0be0d51c45c2dbbe3ac3e04bab7660a7"],["/tags/ToHeart/index.html","9ba3a596e74bf8be4bf69627f7551f17"],["/tags/Traumend/index.html","955b388bb1aad0ba512e823718e7a758"],["/tags/Witch/index.html","9724d9e448b2def332463ad81ee29c79"],["/tags/adonis-project/index.html","aebdc43fe59f97c0663ef39e98d97651"],["/tags/capriccio-suite/index.html","76d36062a4176b942f9777e313c76291"],["/tags/flash/index.html","ed96ccc02b05268ee308d3e49290b837"],["/tags/galgame/index.html","e29448ed032063fbc3e1ab140352d257"],["/tags/galgame/page/2/index.html","cd8e2f4e92114bab793a714a16fd5f24"],["/tags/gal资源/index.html","58ae5630b2aa8d60861f9ecda0769fc8"],["/tags/gal资源/page/2/index.html","3d02eef82ea7feaf267a55d4dcee67ce"],["/tags/gal资源/page/3/index.html","1c34b4f0a8d498a1a7fce82b0e632894"],["/tags/index.html","fa639f0d558b262fe7b26607243f87f2"],["/tags/m-kz/index.html","89acd666f849c6774801cb96d67c3bfc"],["/tags/purgatory/index.html","eba0df7068b53daa4486e6f4b32e23ce"],["/tags/rkr/index.html","d5b9061ee5366c354479876d87049289"],["/tags/team-eye-mask/index.html","6a3c1b4203eafb1bba8d620a42d54ea3"],["/tags/ありすくろいつ/index.html","8a922ba9d68199159cc463bb8f8d92d7"],["/tags/いつものところ/index.html","092798391decd006229510d99b1d3799"],["/tags/きつねみみ饅頭/index.html","c7615471da65a6dbbe33018ef4be76f5"],["/tags/ねこねこソフト/index.html","6042fa52e5a606bd4f863142ae73ffda"],["/tags/ねこバナナ/index.html","cc5db1d358b07ad3f40bf578cceddf91"],["/tags/はちみつくまさん/index.html","cd0e862305686b2a68ae470310488001"],["/tags/ろりちせ/index.html","54b455e00d9eb9d9d42241f50b76055f"],["/tags/アイル【チーム・TATU】/index.html","8ef14f20d3d654aec6f7832cc22cdf6c"],["/tags/アクアポラリス/index.html","ab190c0556758cbf21b5cb34dfa478b1"],["/tags/アークシステムワークス/index.html","652ff18ab79a886d43eb6cf789828227"],["/tags/ブロッコリー/index.html","3e91d52d5b0ea3842212727fed6d02ae"],["/tags/乙女/index.html","3bc089c55aaab64c9e7849259d73c1a0"],["/tags/乙游/index.html","5a4dd28c44f8ad0dcab31d9b8300f678"],["/tags/停产/index.html","2ba4aa3f56e156a690353ad98a0252dd"],["/tags/公告/index.html","59498dcfcea41f2a722f72b68b4b01d9"],["/tags/同人/index.html","93c53ee8ea3a73d47cf27f0feab1faef"],["/tags/堀井雄二/index.html","0e4b831a385c007031aad2d83ef11af0"],["/tags/外海なおき/index.html","1cca954c57a724bf74274b3270eb3d3a"],["/tags/女性向/index.html","133a746a127bc2983ee265cf49b71fa5"],["/tags/御茶ノ水電子製作所/index.html","e6f4ce91a039a53b70b148801a535c5a"],["/tags/月の水/index.html","98c7013dd55ac3e1e716bef735bf7ec9"],["/tags/桃野衿/index.html","3764659dec7c35ff44162c27ce7c9e01"],["/tags/機械式少女/index.html","f3b90a941bf74c1e4c866a7d51c04df0"],["/tags/水仙/index.html","cb5cfe6a093ae76b7acfb25726f983eb"],["/tags/汉化/index.html","8a5871e82fc8e4e01128075c315a7d11"],["/tags/熊月温泉/index.html","5bed57eb9bdf98d01450fcc18c880160"],["/tags/片冈智/index.html","462f44c0117c31488284c8ad627b4115"],["/tags/片岡とも/index.html","aec12d56898d350975860ebc514c59bc"],["/tags/牙の刻印制作委員会/index.html","01e378627bed6162099d07ffc727f806"],["/tags/牛カルビ定食-FLAT/index.html","9c94b6a374b255da4219246b76cdc0ab"],["/tags/牧尾屋/index.html","ecb141bb2245e135a6d1740e0ea63bf1"],["/tags/犬茶屋/index.html","3e776b7d0e9c602248e09703e2a7d2e4"],["/tags/猫猫社/index.html","a6109384c87cdc5bbcdb2fba1278528b"],["/tags/王宮魔法劇団/index.html","31a33b70743154afe86dfb2d8299a8df"],["/tags/画集/index.html","d34708c180a5cf2129ebdd2f4b081f4a"],["/tags/索引/index.html","23efd94393451904d2bbd013f61215ed"],["/tags/缺失/index.html","244ec0d6c0a0621cb15a425e8ce0d399"],["/tags/自购/index.html","69001f6704787092aab8ab56fc2202a1"],["/tags/茶葉☆姫/index.html","858bba8b01984b8d5fdd69edfbf82d55"],["/tags/郷愁花屋/index.html","0ed0fbee674befc5eaf978560f887e74"],["/tags/閂夜明/index.html","a81676954b4026433beb2bec33cb7caa"],["/tags/音乐美/index.html","1bb83796f135f5eaea7ea59eeddae857"],["/tags/黒†救/index.html","73bcac0218376619e0e7190353f74355"]];
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
