/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","5d876176331c99d9696e0012bc2e93ee"],["/archives/2024/04/index.html","198eb7d2fe830b7bc9583411b3c8a48b"],["/archives/2024/index.html","233581cbfe159dba42cb151dd0921c6b"],["/archives/2025/02/index.html","6a5b0d0dbbd91a8b28dc1ebbd69dc55c"],["/archives/2025/02/page/2/index.html","1dfe23306a575bc1d44420e1b9186f8c"],["/archives/2025/02/page/3/index.html","e9fddbb99ef19474f8d22224823f9f6b"],["/archives/2025/02/page/4/index.html","b45e8835df4bfd54df2b71bf30eae682"],["/archives/2025/02/page/5/index.html","35dbabf8389609b9c9128486e2a0f01d"],["/archives/2025/03/index.html","1a8b7c4c4aa761e1f597e55b71a492f7"],["/archives/2025/03/page/2/index.html","ca5ecba3f1a5fa220724203da4f2dea4"],["/archives/2025/03/page/3/index.html","e669d791a459e451e42a55a935c54f09"],["/archives/2025/03/page/4/index.html","06c69ac78931bbd77a687d7e0d6343bc"],["/archives/2025/03/page/5/index.html","32a16d5f76b87521a640dec375065e9c"],["/archives/2025/03/page/6/index.html","87e5b1db9cfa71ebc60f5a41d9b8bf01"],["/archives/2025/04/index.html","48358157672ede848bfa419910e062be"],["/archives/2025/04/page/2/index.html","3b3e82d907c9f0759fa84b8fd9ecdff1"],["/archives/2025/04/page/3/index.html","b2e934a8271cf9366be093a13b1f11f7"],["/archives/2025/05/index.html","5d5af6499dbd9206e001f9ea96ad2d46"],["/archives/2025/06/index.html","f70314ed26df05306fd20a1f833b7558"],["/archives/2025/index.html","387b663f1155955f2ec9754e1db421d5"],["/archives/2025/page/10/index.html","923b89d4266bfca62cbe3290809931f4"],["/archives/2025/page/11/index.html","2071d8abf356ba7a1a0f0c3aa3e3e138"],["/archives/2025/page/12/index.html","8e0fe76ff7cb746a58ceb0333ea1234b"],["/archives/2025/page/13/index.html","811367890382f3a023a19cd6bf12ad09"],["/archives/2025/page/14/index.html","aaadb2d9e0512c2ae5b9237575c70a9b"],["/archives/2025/page/15/index.html","f1ece13a5f8bd15bb69813a1bcbe4fab"],["/archives/2025/page/2/index.html","88c279965054fb535198db5c5e7e2066"],["/archives/2025/page/3/index.html","83051af21629f3b24dfef8cd00b05905"],["/archives/2025/page/4/index.html","792045acbeb537f2a0694684fe4afcda"],["/archives/2025/page/5/index.html","9839babd4c0df06d8361a21fe82ca472"],["/archives/2025/page/6/index.html","dfda606bacf56e0fe3ea46c1e0fd4bc4"],["/archives/2025/page/7/index.html","88e89dd0066c0682d7e15c8c0d5ed1b6"],["/archives/2025/page/8/index.html","66acfbacff741d2fce623799dc6010de"],["/archives/2025/page/9/index.html","097c6c446ab3854e02bda15dc4fc8e1b"],["/archives/2026/02/index.html","824b4da4926f95d2cbfb0cb13b7e8c97"],["/archives/2026/index.html","2b3b762bb67673983b17d6dceff9c22c"],["/archives/2825/04/index.html","6fe699f3012833814c0cdd6f137731e1"],["/archives/2825/index.html","931e4a16ca5b3a5977dea69374d37fe0"],["/archives/2925/01/index.html","4d0e7bc3ca4bfa8ae4b672a5602d8bae"],["/archives/2925/index.html","90439d8e553c18f9b962e4ba60944b83"],["/archives/index.html","16e4b8502e8104a7066d616e0260f1f5"],["/archives/page/10/index.html","14673fdae9ff44ee4c597b4de5200e96"],["/archives/page/11/index.html","04a57729185a680de3511e2bfb1ddc79"],["/archives/page/12/index.html","55f792cc7a38b127ac64b20f497dbb68"],["/archives/page/13/index.html","b5303fd986ff4c4e5c4f4e0fa237d04f"],["/archives/page/14/index.html","ad37f6e153e594fc6c7c1b8e49f431f2"],["/archives/page/15/index.html","6802d3d3bab8320b641ea7a59efc9752"],["/archives/page/2/index.html","6f4db3736e577ce3d171b06410873ef9"],["/archives/page/3/index.html","ca57aefbe916f19708565e3b07ea5e85"],["/archives/page/4/index.html","213ab53948b97fa9b604118a29e8b968"],["/archives/page/5/index.html","0ed56d0c0cc341ace571585c58bd5f8a"],["/archives/page/6/index.html","5c2a1f10169a88bfcdb2618e009d29b0"],["/archives/page/7/index.html","a429408bafa05ccee62aadbc8e46224b"],["/archives/page/8/index.html","de7e117d23dff8d25c0d23f0010c1978"],["/archives/page/9/index.html","e98f31c77cc5f2a9c0f2bd89c168e6ce"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","027d3ebeee38cfef25b5b4f866f83a1f"],["/categories/galgame/page/2/index.html","70ab8bf9df9d6d2f21306901c2d2bd9b"],["/categories/公告/index.html","14d5f974741cb873abb6d7a9609897cc"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","1e8ba05eae31bfacfcc34c7f83d00634"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","591725855fca3bea677913adc8097b16"],["/page/10/index.html","65e1e8be82d021650be5551f87d3d5ae"],["/page/11/index.html","91d29324dc8110b5c452f0e744998e7a"],["/page/12/index.html","80fd604e38500c7ca63988df78546876"],["/page/13/index.html","a099a4797ab6f3cb974c5390f2270843"],["/page/14/index.html","3cc40da69ded8203a4cad4e0b064075c"],["/page/15/index.html","f36dfb76e54242a38fd5409bda1b6560"],["/page/2/index.html","384131f344335234108a34b385d787d9"],["/page/3/index.html","ca3eaf95b28f6c042764145c64fc2710"],["/page/4/index.html","a14dac5ebcfa794ca03fb9d69aaa5028"],["/page/5/index.html","def5576e84725e7777b1a5b368bb9ec6"],["/page/6/index.html","2ec5825b6c639163ec80b6abb2e3c51b"],["/page/7/index.html","5962e67fd453924fdddaae497ddf26f3"],["/page/8/index.html","ae9edc003f338422ab3e5b8da4cf2816"],["/page/9/index.html","567fe77eb0a8d389e14ed8723808a371"],["/posts/10c9dd98.html","4e299e397a08c0605cfdd3ea49155692"],["/posts/126ebb99.html","9e371e5685683ea77702deaf40f784fe"],["/posts/1295b569.html","d76c98ac9fb2f8e47c95f3f49891afb3"],["/posts/1370342.html","91c638e97dc73a66675b434546cbc1ec"],["/posts/15ef14c2.html","2c1888b268104db2487e181740b70118"],["/posts/15f3959d.html","485fc7f8c6af3589b56ba746e39adc6a"],["/posts/18ab785d.html","707b2453e6028b2b8e1f96dcf9117bd2"],["/posts/1d59b71f.html","e9067d603dfb23ab4399e152b239847c"],["/posts/20b3f3a4.html","460695dd7443839d0720fc3847adf1c0"],["/posts/244daa7a.html","cba0a2abd3597935248451276ae927b0"],["/posts/245f1c7d.html","93a7aa0385022df97fae37ed4b56d03a"],["/posts/252658f.html","332ed96ae4777f1e18ecedadda12cf1e"],["/posts/28397adc.html","4e2e2c7a4cbeb53470d182cc3f1f795f"],["/posts/2ad07f54.html","3a4e64fb80d810a571bc3aec342d4061"],["/posts/2b38bce0.html","dc5789b75e4a4b778212e65de1f8264a"],["/posts/2c0a6836.html","c45eb64b970cacda6c967ae54cc0a3d8"],["/posts/2ce39bcc.html","5eb732753bfcfe72a295e2040fc769e5"],["/posts/2cf620f0.html","3160b1db033ae7bebf9d877d1fee4ba8"],["/posts/2e30fd6d.html","3981fbfae45f88cf728528ed1fe51437"],["/posts/30a413ad.html","b55d9c2f80f6ef0084bf533c3db8a124"],["/posts/34292736.html","d7d73d070e89ebcef6802a54388dde83"],["/posts/3468cbe.html","c43ffde7b338e076e0e40dfd5f3b6dd1"],["/posts/39176dc0.html","7b7440d67893417b983b24a75c602334"],["/posts/3be6a165.html","535546c7511ea7d9ae5a5da300bfaf7e"],["/posts/3daf73b4.html","20ad0ac4c3632c37a2d9beda89c16f74"],["/posts/3e118dbf.html","4b5664ebb85323621107afca284cb392"],["/posts/3f7d823a.html","e50547f55bd6f1362ec9358ee4e2ac57"],["/posts/3f978819.html","9ec552c4178e442a07a44b293ca28efd"],["/posts/41dac80e.html","482bcb914dcc5f77569fcc89f712ea16"],["/posts/43945723.html","00bc90c4c574d884fb51778b9849ef52"],["/posts/44124a6b.html","bf85900a4ce42661ae955fb15c7e9f4a"],["/posts/476a3006.html","73cf3deccbb786c2e3df287a3d230404"],["/posts/47abb61d.html","afcba80d6839cd01a197dfe043f4567b"],["/posts/4996478a.html","54d5fbb1e3663d7a3fd04d32a8df3531"],["/posts/4b689be3.html","3fe880941656e2daa0fc434424c33784"],["/posts/4cf8423f.html","090b70a845a4565963077cfe6f125c02"],["/posts/4dcf85c.html","64e298adebe329020132d7957c20fc2e"],["/posts/500cd322.html","79007f5f64cc2bde14bafb1eaf7ef6dd"],["/posts/51c9b1ff.html","6e491e79760cd1bb38cc5d5ab05fa7e5"],["/posts/51ce68e8.html","7d1c2f0e48eb6d12bf9617f260b9b517"],["/posts/52b5b3c6.html","b4c2efd4c6fdd824d0e202296f312862"],["/posts/54f496ad.html","1d73c913a86f95b2e0c1e310d3c9eec0"],["/posts/558e1f30.html","cfdb0fae141e6f4345ce228263914f10"],["/posts/5d8bea92.html","2c4781d28fd1ee211c185b0bfed1bcb8"],["/posts/5f6e0c59.html","1a9d75b2336d83b813a3c643fe151980"],["/posts/61a63a84.html","1e67232a2691faf2f98670cf72fbb56b"],["/posts/625ab7bf.html","3858ca5694998fd1e5a3d7be539f1dff"],["/posts/6336a2f9.html","8f6af0a22706164a57f393f430a84afe"],["/posts/6432d61a.html","6e3495c7bc6c0347207d17ea6da9211d"],["/posts/6515f032.html","d7db8e40180a68ff580ae660d48d4e00"],["/posts/6720ccdd.html","4229661bab7fb5a10f12cd46ad73c082"],["/posts/6a4b5ac8.html","5ee18b2a98f0d5c39222dc88d0a358ff"],["/posts/6aa4177c.html","c9adbbfcd8a88905a2a648653a4eed0d"],["/posts/6b15f81f.html","fe3234896c4b14132b2edb417f61279f"],["/posts/71131d34.html","20d34afb4917f5d50f66d3c55633f124"],["/posts/742fd48d.html","d3d2c97eb897346bf853f5c83fe4d576"],["/posts/78a8a8d3.html","200b9e4a8a9c97ffd0f2022f273fcb81"],["/posts/7a5ef3d0.html","bbc589873485472c6d1170a2b68e125f"],["/posts/7b41e1ac.html","ded3121527e58af58614094f0a3ade50"],["/posts/7b51011d.html","231cfd4eb2ba6de72360a014f5fcfde5"],["/posts/7e3aa3e2.html","fd7b71a0614569487536f08f9e6d483f"],["/posts/80fe2691.html","5683b6be3e6794bd6a0b8dfb957ccd52"],["/posts/81ac52e9.html","940f959cab36b5aadf93be560c62caea"],["/posts/82332d11.html","ba1bfdd73eef20dfd581547708160b54"],["/posts/8486f6f9.html","2175aee5b28333d05b8eb0ee7a9b953e"],["/posts/849b40f8.html","7bff30ec10d9812f73fb0d42090267a5"],["/posts/85c51d68.html","3c39938b206839c802a41a652a8ba13c"],["/posts/86a6c500.html","f1289b5299bc7dde8c8cb7c5dd748efb"],["/posts/886f8d3.html","e7099eaca28523a4e0d41c56e22fde3f"],["/posts/8a7cba10.html","9a66860e10a4757bcc83e951a49340f8"],["/posts/8ac11b41.html","cd9ee9e84d74da25195172057acfa562"],["/posts/8c3f2fd8.html","52bcf2cd515c85bc21f51ed8fc15bbd7"],["/posts/8dd520d9.html","30fb209b3f3d8547562cdca03cf8c3ab"],["/posts/8f555654.html","61690f2c22aacaa16400c62bb89c1cb4"],["/posts/92a980c2.html","3da773c1b6cc4c8090b23fac17d4585b"],["/posts/92ce16.html","8074047bea7dc5826a6085fc7c3140e5"],["/posts/93e9943b.html","036888cd243ecf02615169727c0ec020"],["/posts/94d3c794.html","c865d8f7d3f280223cbd010a171fa4f7"],["/posts/9606c2fe.html","f3264e9a947f5c660069ea4e1976ad51"],["/posts/96b281f2.html","80d28f6fe2652f68c36a0deb359d20cc"],["/posts/97f50eea.html","e1c5b40141f5709a5890e0e6628145f5"],["/posts/97fca8be.html","230be2ea58b1a09db28fff4bd0fffbdd"],["/posts/98662d05.html","c9add953c8ec5836c05253464be9e20d"],["/posts/98ef47c3.html","71ccc655c916519726d7e09c9ebb9903"],["/posts/9a2f6162.html","9d0b8951a8029c45cd5e464b72001d62"],["/posts/9b22a48d.html","e8dbe8390edda744e8a062a02fc5b504"],["/posts/9cb455b1.html","31d9e08d874a8a24727da7ef86892d24"],["/posts/9ecdeecc.html","575f30efbad8f7102a06c010213e1788"],["/posts/9efd7701.html","9c7c675f53adf26c8dce29d6d6f58b12"],["/posts/9f61c1a0.html","98b7bd2d04e2bc3a222078084741a8d0"],["/posts/a1de710.html","76fb66712bbcd5b1ec155c0991166fc2"],["/posts/a30eb0cd.html","44200cca741df66d9ed04225e905c141"],["/posts/a72f71c2.html","f84f3a64a42324b4041c7d6d24a90de9"],["/posts/a7634b5d.html","122df6153fddc12f30139992a55f2a39"],["/posts/a8c593b5.html","009226491e26a4c20eff1d607495085c"],["/posts/ad0c1efa.html","dc6924b38c1e85d037d1d04b995b0f37"],["/posts/ada3f440.html","65603372645ab8c6f5a10859e5e7f745"],["/posts/af1807ef.html","351f7c64bdefcac6ed20572413c983d0"],["/posts/b397bf03.html","60124f0e6c138d36dfcbb6bd88999db4"],["/posts/b497b647.html","d6c3d304ff5a69055121425622d6e2c5"],["/posts/b4d464b0.html","7dc55f086b4a9456634b073e73c92f55"],["/posts/b5fb773f.html","6f78cc315c280e12f92446bed2df0dda"],["/posts/b8d46b32.html","e2e439ab5a262deac80dcc08c38c10ee"],["/posts/c1b2c6c9.html","d611c66b52d1994bcceea5b417a1f177"],["/posts/c2111cbf.html","111a2d17d0905cb70721250338251e24"],["/posts/c316c2e8.html","a86283bd6e01d8637b7a98d3e2b99baa"],["/posts/c43e60b5.html","185120fd01cb352427ed281acd99a02b"],["/posts/c497a412.html","4bed5f509fbb9d198400f89abcd059fd"],["/posts/c5395ba3.html","559ff2e7e5af7e7572b9e5c053f7ffb8"],["/posts/c5de299a.html","98ae54076f64d0b1fdaa363579e28998"],["/posts/c70bba9c.html","1648f460e3b1d6708dcb40bcb331184f"],["/posts/c797535e.html","7038e98d313b7258383b64b334c581dc"],["/posts/c7a62c79.html","987eeacca28922b733338ffd3bb6061a"],["/posts/cae2c959.html","d6b88bc309da15b7b8e7a753903ab046"],["/posts/cbebef2b.html","b7f0b5cefcbf7a9b5c70177cb3fb8f69"],["/posts/cc4c0017.html","507257c1f17880ddf92368f74ba726ca"],["/posts/ce25023e.html","4032e6d0fc11bebac3aef121ad441f22"],["/posts/d2fd4837.html","6fddc64ce2eaad7d3c8c81ea5dfc3d63"],["/posts/d3233cbb.html","4d81176ce8de76912106ab05c8613f18"],["/posts/d3a745a8.html","867d1298b8f2166829f318f2ef1b63ac"],["/posts/d7e940d2.html","da2f7cde463088fed9a2ad873c19037c"],["/posts/dc815d5.html","cdeb66d88a21f57d7dcb695c0b78def6"],["/posts/de25b0be.html","2df44fbdc09eb56bf4caa5d9d4b57d65"],["/posts/e2623b4e.html","ec7b2157abf9158dd17d1a47b16c25df"],["/posts/e3ab6ad8.html","0fb31fb151caaa191af922ffc57608ce"],["/posts/e5018da6.html","1719cfa37765d6e6701472f774f64319"],["/posts/e5963272.html","399189a92f57f643dc89bd4e88facc3d"],["/posts/e5ef4c3c.html","3e3acba76dd61698fe4a0d57f7f9d747"],["/posts/e624b065.html","5a824b742af7971745c698d0399e358b"],["/posts/e7c703bb.html","97f305ec68d2d843d0ff71e4e5cfc9c9"],["/posts/e8f14b6c.html","662e84d1bf96abb199c38dd57601d8a2"],["/posts/e91abb63.html","07bae6081c318184741a16c4b05e2917"],["/posts/ea9a8808.html","be4cf3804d6751749377c7ae1d0bc28a"],["/posts/eb784749.html","fa3bb7700f8cd44d96520a43d925c7af"],["/posts/ebaf2232.html","c3cf7fe7ace88cf023859f53d8e1a675"],["/posts/ed75f185.html","96bc9f957ad9bfd0483c108987e33b09"],["/posts/ee1ed673.html","ef63f0ca6f86ea8190857dfe2a7f11a1"],["/posts/f0c3ed61.html","10aec4e7aa1eae2b45052e2aaf9aeb5d"],["/posts/f151ff43.html","85db9f27c2d87c23fec09bed139e2894"],["/posts/f21e7f84.html","bccd3bf777e676937ad9c29693f41322"],["/posts/f230b0fd.html","874da090324862ab582f214147249f9c"],["/posts/f28a7877.html","73b457d8da0b007f5bb2f500a3b904d4"],["/posts/f663d5cc.html","a15e16aea771869d865f4f01253143a5"],["/posts/f730ad18.html","4ef17eed189be4c13e053f4f86fffd10"],["/posts/fb5d4608.html","9f3c5780eea7b9e9c2d812fea150e6a6"],["/posts/fc04d0d4.html","f972548ad6680abafdecbe5cbe4da953"],["/posts/fc455f81.html","38dbba0ae907a97d513d4ba6afdf99c5"],["/sumire/index.html","3d6aba57ae5f64ddccd9c66f102376de"],["/sw-register.js","931d23745346b40da33717f9e3b24e49"],["/tags/AKo/index.html","5a5ad2e5175f1d8942161b62d1e9118c"],["/tags/APPLE-project/index.html","d2935d99fa3af3ea93e4dceed872199c"],["/tags/Ankrache/index.html","3410c89e059253eba53dd2ecbb486af2"],["/tags/BELL-DA/index.html","9e47b90e24ccfde2c807a8c439ffd428"],["/tags/BL-Game/index.html","527a7b25641f7bf3eb9f34ff5a032c24"],["/tags/Blue-Dahlia-Digital-Creators/index.html","b49616e773ada7bd26221cbccbb5cdfe"],["/tags/Blue-Line-Games/index.html","56012b1fc9e2089748491ccecbc0cd72"],["/tags/CD/index.html","4b98d969b800995219882770990bf172"],["/tags/CHUNSOFT/index.html","8dffead32d0d96548038688eab365fde"],["/tags/Check＆Stripe/index.html","dca767d9622d4ab0e1e57dd4e02fefbf"],["/tags/Cherry-Pie/index.html","18b537b903c84f66ac8d8714fee8d662"],["/tags/Circle-Mebius/index.html","6504624bc37b86fec0fda5d4dbc85994"],["/tags/Cosmillica/index.html","057ef91333f632088461dbce2d3be03d"],["/tags/CresCENT-BLANK/index.html","82b8ec6b80e48017281814fa3c9bb5b7"],["/tags/Dopamine-Software/index.html","6cc02a8309a16da34848f6bc6abe677e"],["/tags/Dos/index.html","20c72b4d487afde876a23cf81259404e"],["/tags/Earth-Well/index.html","47b4561b8461e5e79f80121e1ade11b7"],["/tags/Forest/index.html","4f362d8524de466edee3edc2ab440a94"],["/tags/HaccaWorks/index.html","7586bfe9869bf73b5eea31cf750ad1ce"],["/tags/Kanon/index.html","c3366cbab1d1fd5952f60ed71aed54e1"],["/tags/MANATSU-8/index.html","74a218cbc2815f898f91a958ef4860b5"],["/tags/MARINE/index.html","67ab6e8b976ed6399212771ea09aa23d"],["/tags/MIO/index.html","8fee87f2423eba4799b07cbba6426473"],["/tags/NAOX/index.html","7850a004ef16f841129f902ebb0e2ac2"],["/tags/Namikaze-no-Uta/index.html","cbfe36adb2d3f040825b22702e392cfc"],["/tags/Nmyu/index.html","e80a17c0bad236439b0b7517a9879094"],["/tags/O-S-I/index.html","2d7915c8e1e23b330a340460462d124b"],["/tags/Omegaの視界/index.html","9de68d0bcad961d4edb73b509a78137b"],["/tags/P-o-l-c/index.html","79b2eba362d4b78a2c8f1787b50e25c6"],["/tags/PC88/index.html","ca08c94103cafa4fd03a7aa7a6185753"],["/tags/PC98/index.html","14d18acbd76b0237877204e7e868a02d"],["/tags/Perpetual-Room/index.html","aea2679f57a3f7ff15406bd63b0185b5"],["/tags/Pleiades-Company/index.html","94d4188567d0ed075ab0307bb138538d"],["/tags/Project-Twintail/index.html","f3fe97b19f47bdf47a076a98a9225caf"],["/tags/RIFF-RAFF/index.html","61284c0e8e3b52065ca7e9e8afee0965"],["/tags/RPG/index.html","b1b7be94362b07ca628c93626e3ab8d6"],["/tags/RPG2000/index.html","98bb725539f563c16c248cfc80f95060"],["/tags/Reverv/index.html","73bffe3d3730daea0cb01ef964e2582d"],["/tags/SENTIVE/index.html","40d283e8932ce37387f5e62fd4084f49"],["/tags/Saihate-SOFT/index.html","fcbb3b38d4f09901727097d9abf87972"],["/tags/Scrubbing/index.html","15f507cd6b94ac6a484d481d045c7eca"],["/tags/Sky-On-R-imaginAtion/index.html","e2f3c9fc8cb48e6093dd27f13a7f08ec"],["/tags/StrayMoon/index.html","ba22810f53dd504eed07ab8fd1949e90"],["/tags/Studio-Bu-Sa/index.html","5c6ed6c3e499abaa2a401a78094fce94"],["/tags/TRANSPARENCY/index.html","83159e23ac5578e036ef10eec49154d8"],["/tags/TRANSPARENT/index.html","653554c4c1c296e9e8c9a6667a748d45"],["/tags/ToHeart/index.html","355e04f67a17540062908cf23cf49dc7"],["/tags/Traumend/index.html","3418e372d29e8d7302e8ccbcfe38b232"],["/tags/Witch/index.html","130a59dcc2daa6100433049625dc4cd2"],["/tags/adonis-project/index.html","25f41b726d4215de0e27118b58b03017"],["/tags/capriccio-suite/index.html","db84e7b6ebcdd6504b4383fef575def3"],["/tags/flash/index.html","c680282a9edae111d7b0035404859589"],["/tags/galgame/index.html","fbd70a6ffdd917e7766a7d0c8bca693c"],["/tags/galgame/page/2/index.html","49a969d05750fe8e142c70bfb3bcb9d2"],["/tags/gal资源/index.html","f8e7c9216aef5e4e8fe7b70ac8a3ecd0"],["/tags/gal资源/page/2/index.html","1f8e20f4a907d7484d3f501c933935f9"],["/tags/gal资源/page/3/index.html","6bca7e15ecc298b09ddc110b8c936b95"],["/tags/index.html","1924356e08407dbaee0edcdad1c625c4"],["/tags/m-kz/index.html","51c053d7b7c7b5069449ece48535d6fd"],["/tags/purgatory/index.html","595f59d446ea24f57d5bf9a62dee6da5"],["/tags/rkr/index.html","0362d94ce1d91190ed835b334c180d2f"],["/tags/team-eye-mask/index.html","ffd14262fc2a808f63f7cd773d563bde"],["/tags/ありすくろいつ/index.html","4cf76101ef740c0580e7759ab786bf97"],["/tags/いつものところ/index.html","063540076c32ede754ad96e00e236e5b"],["/tags/きつねみみ饅頭/index.html","0ffbe777b0227c9516ec06fb0951c36f"],["/tags/ねこねこソフト/index.html","1aa8ddb0a1a95d9daf5d10441c392943"],["/tags/ねこバナナ/index.html","49d07b969fca33716edb42c58da405b0"],["/tags/はちみつくまさん/index.html","721db3235acbc70f1017e928491b64dc"],["/tags/ろりちせ/index.html","6857908e8a7126612c1bd80c73c402a3"],["/tags/アイル【チーム・TATU】/index.html","de6efef2de499ca25706822ddf1c8ec3"],["/tags/アクアポラリス/index.html","36ef97b49674df61dcf1ab269e675d02"],["/tags/アークシステムワークス/index.html","829a7addd55e91ae6cb05a34833dcb67"],["/tags/ブロッコリー/index.html","93ea2f419a79661bb58bdc21d484977d"],["/tags/乙女/index.html","863656b00e4ec9528342518e8fa819d4"],["/tags/乙游/index.html","b2f61aeb821dc5f563e2c887793428b3"],["/tags/停产/index.html","64947dd28e469424dccee0d827aeb91d"],["/tags/公告/index.html","d982173ef0a5e3a35aaa3571560a326c"],["/tags/同人/index.html","1e499e67d83fcc2087a5513e9226c3e5"],["/tags/堀井雄二/index.html","7c623751c3069941170651773fe2aa51"],["/tags/外海なおき/index.html","3858370bfafb455fcbb2c6639e94581c"],["/tags/大熊猫/index.html","7f34d3e4e1a7c6829aadf7125bc8f9ec"],["/tags/女性向/index.html","7cbb17e6a6877abefeb98541fa2bb3d7"],["/tags/安装/index.html","ab5a4803471c193a64e7a6851be2c65b"],["/tags/御茶ノ水電子製作所/index.html","80f5748c29c3cad865dca969e1fea878"],["/tags/月の水/index.html","768951bb194e4195b1d8d5f729e46e98"],["/tags/桃野衿/index.html","4f363badce2a921968b6f1244aa06878"],["/tags/機械式少女/index.html","120562d25263e6a15eea52fba5539ddb"],["/tags/水仙/index.html","9d53e7c7511f24aac8ce66d1e160373a"],["/tags/汉化/index.html","7b97ae5fec344cc0cf91aee2f37e1bbe"],["/tags/熊月温泉/index.html","1342821382c7960994f950300e30c3dc"],["/tags/片冈智/index.html","dd2a3c05899b41bed92a7d76f60c0852"],["/tags/片岡とも/index.html","88a9b633aed1975a9803f3a72f62249f"],["/tags/牙の刻印制作委員会/index.html","28ca849870a8efee30734aacc3b7be66"],["/tags/牛カルビ定食-FLAT/index.html","07630beef3d8f68edc63a2bda1ed4aa6"],["/tags/牧尾屋/index.html","59fe27ab0fb056b17bbf556c3a0c6667"],["/tags/犬茶屋/index.html","57b8891babdbc91c9f1295b0768d6724"],["/tags/猫猫社/index.html","7d1f94a75f5dbcbe63f7c5d9796d0c6a"],["/tags/王宮魔法劇団/index.html","eb6763d2b6da5a144bf2a58bf5554e6d"],["/tags/画集/index.html","a0f467602c0759d37af4587f7ed5fc15"],["/tags/索引/index.html","b069ef5ccfc184eac02f7b0ed5c2c256"],["/tags/缺失/index.html","3b8c9a5c070610b24cd8f949df741687"],["/tags/自购/index.html","b1c53af85611870e4dc64d24738a659b"],["/tags/茶葉☆姫/index.html","bdde3a83ab625c0d8a6575a2a0c0f7a1"],["/tags/郷愁花屋/index.html","136846c19156fbd4f18c0c22b8c4e0ca"],["/tags/閂夜明/index.html","ea9db73e7f7cfbe69205aa5efa4b9230"],["/tags/音乐美/index.html","1f71eb194de194b1a2532fcaf0f0fb41"],["/tags/黒†救/index.html","270dc09711ff383a273a7d506b236466"],["/tags/黒百合っ子大集合/index.html","dd43616acbc7921e6ff3b2042028be82"]];
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
