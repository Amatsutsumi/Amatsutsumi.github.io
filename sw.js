/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","4f4ff75b51b6f65349f5340b7e24a219"],["/archives/2024/04/index.html","d889030ebf64d618987c446403f92895"],["/archives/2024/index.html","5906b360d82018b2617be7b00b58ae56"],["/archives/2025/02/index.html","c8537bc0a51710f09b76d658b415f164"],["/archives/2025/02/page/2/index.html","cab8ab5dcc0aad69a87a6de4473df58a"],["/archives/2025/02/page/3/index.html","906fd9eb069ac6e8bd31299b196a17b7"],["/archives/2025/02/page/4/index.html","20e19c825b6514f6ccd3df2a700a259a"],["/archives/2025/02/page/5/index.html","feeab64932a93470a0a9548203a25475"],["/archives/2025/03/index.html","0dc1928ae25173787885631752c1f4c0"],["/archives/2025/03/page/2/index.html","d0920da02deffe3a4826598251f1d18e"],["/archives/2025/03/page/3/index.html","c4a7232d01f642876feffca964fa9354"],["/archives/2025/03/page/4/index.html","2b631ca3b8924c443fed5a8b69e30522"],["/archives/2025/03/page/5/index.html","fb01a7e555a20372b7414ce880f4a0bc"],["/archives/2025/03/page/6/index.html","ae053ddc0001fa8f076856faf2967c62"],["/archives/2025/04/index.html","6207a4d29265365de3857efb649bbd85"],["/archives/2025/04/page/2/index.html","77479c313a048be7bd72213f33d24717"],["/archives/2025/04/page/3/index.html","e7c383cc33705ae41559d20d6de46f9d"],["/archives/2025/05/index.html","42b27b3113ab8b5e7538cd6574621776"],["/archives/2025/06/index.html","469d40e7dffbedb39ef09f8e11629067"],["/archives/2025/index.html","d1d7b064cd3682a1fa52c5698bba249c"],["/archives/2025/page/10/index.html","4482728e5232c630ee84fe8d119c3e13"],["/archives/2025/page/11/index.html","732aa5e67c5607f310298c791874f3cf"],["/archives/2025/page/12/index.html","4fcc63a555842a7f2630cefffe7db210"],["/archives/2025/page/13/index.html","9a565b3c61d8408c02863be83d8a674a"],["/archives/2025/page/14/index.html","076e280293ce4aa048045e50e72de24c"],["/archives/2025/page/15/index.html","ccf128c6219edbbd80f24aa2a2a0a567"],["/archives/2025/page/2/index.html","cf8604b14c4857f6fde141383cac5840"],["/archives/2025/page/3/index.html","0e8b5632092a25cb0cfd67d7f7419306"],["/archives/2025/page/4/index.html","8a26997f67adf57d34b890773fb507f9"],["/archives/2025/page/5/index.html","7435251db6b360fb8994639249f60a12"],["/archives/2025/page/6/index.html","ac45c5e1d077ccb08e59eb158df1b60d"],["/archives/2025/page/7/index.html","9e2bc09e86970c53b8f26d18ff9b18f1"],["/archives/2025/page/8/index.html","cfcf164e7614319303f95f049e92b539"],["/archives/2025/page/9/index.html","767d083ae8850b8ffc39575054408df7"],["/archives/2026/02/index.html","e7b988e0c4546dcee8770eb8873c0f63"],["/archives/2026/index.html","32164fa1d2d990285ca3039503345d56"],["/archives/2825/04/index.html","d23ef41a682bf1e569dc40225a2f2bf1"],["/archives/2825/index.html","d3c4b36e2d92673a20b2509249d2aacf"],["/archives/2925/01/index.html","8ad4344a92d501627bd83b9b2bd7c309"],["/archives/2925/index.html","f4d1fafa15c72bc7bf9d948e05ddfa9b"],["/archives/index.html","76d257a948afe6476b1d7e23ef60f3e7"],["/archives/page/10/index.html","5a0ed4fd4f6faad496198b24075308c4"],["/archives/page/11/index.html","633150427ea22a345956a1ca39346385"],["/archives/page/12/index.html","da79485f74ae3da2c0358ad9d01632f4"],["/archives/page/13/index.html","84b9410fb3c6eca85397dee8def35fde"],["/archives/page/14/index.html","dca356f03ced8aa87ba1864fd5678bb1"],["/archives/page/15/index.html","50fcfdbfe95d37be959cddde40fd9517"],["/archives/page/2/index.html","a8f24d70a5b73e551ec5f8b5e62a4ff4"],["/archives/page/3/index.html","5ab94970c91e08ce005abe825a105285"],["/archives/page/4/index.html","f2ee87003c2b9def94995ae595c99fb0"],["/archives/page/5/index.html","f24417fee51422b48ab3d20e066bdb63"],["/archives/page/6/index.html","9da236777c1342032bca626c37a76f41"],["/archives/page/7/index.html","42210977ce587d2abb88f9f8e0ded075"],["/archives/page/8/index.html","327fad6666ac0baa83c6d198d0dc7d25"],["/archives/page/9/index.html","5c18281a06cbd6ae97aa7797fd8da21c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","ddb3d4c5054193bbe04a86076c6f4d50"],["/categories/galgame/page/2/index.html","27ce2bdfbc266e8f9c121859e4deb950"],["/categories/公告/index.html","8a8069de421e9dac9ada6e8266e3196b"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","092dc6d3b7c1c0afbd66e614affc40e8"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","406ffa8e3cb9bc3f00fbda5aafc4f952"],["/page/10/index.html","12739659b3f59ae0b14a42d16121c97d"],["/page/11/index.html","d8f1aaa6c7d97302185ff5496f2756ff"],["/page/12/index.html","ad618c990b775f57f33a00e6e568cca0"],["/page/13/index.html","88d7f3fbccd49d498ac650990baa9690"],["/page/14/index.html","32a713a13e8d974e951d3d0a3eafc009"],["/page/15/index.html","e59f11a9e2901f790fc3540a7ffa2813"],["/page/2/index.html","1238d1528706628ae8014a7c96a355a8"],["/page/3/index.html","dcc914891dc7a3bc326e188dc69c896d"],["/page/4/index.html","349610f9fd809032d87ed1a10246d36e"],["/page/5/index.html","f1e7a3f77f18e10d742cb0408375e376"],["/page/6/index.html","c02e0022c6b4fcdaaf4f749b91c7c7ac"],["/page/7/index.html","c7f3aaad5706945b3ed560a3cf9b669d"],["/page/8/index.html","573a78040be2f302f9da3604a04264f8"],["/page/9/index.html","e10da0a50b81489d23a3e163742425f2"],["/posts/10c9dd98.html","4e299e397a08c0605cfdd3ea49155692"],["/posts/126ebb99.html","9e371e5685683ea77702deaf40f784fe"],["/posts/1295b569.html","d76c98ac9fb2f8e47c95f3f49891afb3"],["/posts/1370342.html","91c638e97dc73a66675b434546cbc1ec"],["/posts/15ef14c2.html","2c1888b268104db2487e181740b70118"],["/posts/15f3959d.html","485fc7f8c6af3589b56ba746e39adc6a"],["/posts/18ab785d.html","707b2453e6028b2b8e1f96dcf9117bd2"],["/posts/1d59b71f.html","e9067d603dfb23ab4399e152b239847c"],["/posts/20b3f3a4.html","460695dd7443839d0720fc3847adf1c0"],["/posts/244daa7a.html","5546c652a8b6b80b65702ad3887218c8"],["/posts/245f1c7d.html","93a7aa0385022df97fae37ed4b56d03a"],["/posts/252658f.html","332ed96ae4777f1e18ecedadda12cf1e"],["/posts/28397adc.html","0bba7180af59e33f9194db2adc3d21a8"],["/posts/2ad07f54.html","3a4e64fb80d810a571bc3aec342d4061"],["/posts/2b38bce0.html","dc5789b75e4a4b778212e65de1f8264a"],["/posts/2c0a6836.html","c45eb64b970cacda6c967ae54cc0a3d8"],["/posts/2ce39bcc.html","5eb732753bfcfe72a295e2040fc769e5"],["/posts/2cf620f0.html","3160b1db033ae7bebf9d877d1fee4ba8"],["/posts/2e30fd6d.html","3981fbfae45f88cf728528ed1fe51437"],["/posts/30a413ad.html","b55d9c2f80f6ef0084bf533c3db8a124"],["/posts/34292736.html","d7d73d070e89ebcef6802a54388dde83"],["/posts/3468cbe.html","c43ffde7b338e076e0e40dfd5f3b6dd1"],["/posts/39176dc0.html","7b7440d67893417b983b24a75c602334"],["/posts/3be6a165.html","535546c7511ea7d9ae5a5da300bfaf7e"],["/posts/3daf73b4.html","ad3a4bcef7df9c1e6eca7187118d49e4"],["/posts/3e118dbf.html","4b5664ebb85323621107afca284cb392"],["/posts/3f7d823a.html","ec68736ffdc7a1adb8e67a06d68631a8"],["/posts/3f978819.html","5bf18c36f0f38fdab03b1886be0e8e94"],["/posts/41dac80e.html","482bcb914dcc5f77569fcc89f712ea16"],["/posts/43945723.html","00bc90c4c574d884fb51778b9849ef52"],["/posts/44124a6b.html","bf85900a4ce42661ae955fb15c7e9f4a"],["/posts/476a3006.html","73cf3deccbb786c2e3df287a3d230404"],["/posts/47abb61d.html","afcba80d6839cd01a197dfe043f4567b"],["/posts/4996478a.html","54d5fbb1e3663d7a3fd04d32a8df3531"],["/posts/4b689be3.html","3fe880941656e2daa0fc434424c33784"],["/posts/4cf8423f.html","090b70a845a4565963077cfe6f125c02"],["/posts/4dcf85c.html","64e298adebe329020132d7957c20fc2e"],["/posts/500cd322.html","79007f5f64cc2bde14bafb1eaf7ef6dd"],["/posts/51c9b1ff.html","e7c720852563321608a4b6957e59cc6e"],["/posts/51ce68e8.html","7d1c2f0e48eb6d12bf9617f260b9b517"],["/posts/52b5b3c6.html","b4c2efd4c6fdd824d0e202296f312862"],["/posts/54f496ad.html","36fb7ac2ef995c9542c0334483c4de1a"],["/posts/558e1f30.html","cfdb0fae141e6f4345ce228263914f10"],["/posts/5d8bea92.html","2c4781d28fd1ee211c185b0bfed1bcb8"],["/posts/5f6e0c59.html","1a9d75b2336d83b813a3c643fe151980"],["/posts/61a63a84.html","1e67232a2691faf2f98670cf72fbb56b"],["/posts/625ab7bf.html","3858ca5694998fd1e5a3d7be539f1dff"],["/posts/6336a2f9.html","c8943bc83a926969cccfda0f56266072"],["/posts/6432d61a.html","6e3495c7bc6c0347207d17ea6da9211d"],["/posts/6515f032.html","d7db8e40180a68ff580ae660d48d4e00"],["/posts/6720ccdd.html","4229661bab7fb5a10f12cd46ad73c082"],["/posts/6a4b5ac8.html","5ee18b2a98f0d5c39222dc88d0a358ff"],["/posts/6aa4177c.html","c9adbbfcd8a88905a2a648653a4eed0d"],["/posts/6b15f81f.html","fe3234896c4b14132b2edb417f61279f"],["/posts/71131d34.html","ea3579959b69e71d1c991dbd04b87865"],["/posts/742fd48d.html","4d416df93a86050b05466ea5940699b7"],["/posts/78a8a8d3.html","200b9e4a8a9c97ffd0f2022f273fcb81"],["/posts/7a5ef3d0.html","bbc589873485472c6d1170a2b68e125f"],["/posts/7b41e1ac.html","d174e55ffe32b9a0dbf780c9e298bda7"],["/posts/7b51011d.html","231cfd4eb2ba6de72360a014f5fcfde5"],["/posts/7e3aa3e2.html","fd7b71a0614569487536f08f9e6d483f"],["/posts/80fe2691.html","5683b6be3e6794bd6a0b8dfb957ccd52"],["/posts/81ac52e9.html","940f959cab36b5aadf93be560c62caea"],["/posts/82332d11.html","ba1bfdd73eef20dfd581547708160b54"],["/posts/8486f6f9.html","2175aee5b28333d05b8eb0ee7a9b953e"],["/posts/849b40f8.html","7bff30ec10d9812f73fb0d42090267a5"],["/posts/85c51d68.html","3c39938b206839c802a41a652a8ba13c"],["/posts/86a6c500.html","f1289b5299bc7dde8c8cb7c5dd748efb"],["/posts/886f8d3.html","e7099eaca28523a4e0d41c56e22fde3f"],["/posts/8a7cba10.html","9a66860e10a4757bcc83e951a49340f8"],["/posts/8ac11b41.html","cd9ee9e84d74da25195172057acfa562"],["/posts/8c3f2fd8.html","7cf2d7c4f3b67a14be9c0c9c3ae15165"],["/posts/8dd520d9.html","30fb209b3f3d8547562cdca03cf8c3ab"],["/posts/8f555654.html","61690f2c22aacaa16400c62bb89c1cb4"],["/posts/92a980c2.html","3da773c1b6cc4c8090b23fac17d4585b"],["/posts/92ce16.html","8074047bea7dc5826a6085fc7c3140e5"],["/posts/93e9943b.html","036888cd243ecf02615169727c0ec020"],["/posts/94d3c794.html","873bfbe0cc4ec0cea54a26d77fb47af3"],["/posts/9606c2fe.html","f3264e9a947f5c660069ea4e1976ad51"],["/posts/96b281f2.html","80d28f6fe2652f68c36a0deb359d20cc"],["/posts/97f50eea.html","d4f683e9d12d5cf9af2c447f299ddfc9"],["/posts/97fca8be.html","230be2ea58b1a09db28fff4bd0fffbdd"],["/posts/98662d05.html","c9add953c8ec5836c05253464be9e20d"],["/posts/98ef47c3.html","b313f3be897d776c024723f14f9c2a97"],["/posts/9a2f6162.html","9d0b8951a8029c45cd5e464b72001d62"],["/posts/9b22a48d.html","f22e4f97be5a87cfa261e223298a89cb"],["/posts/9cb455b1.html","31d9e08d874a8a24727da7ef86892d24"],["/posts/9ecdeecc.html","575f30efbad8f7102a06c010213e1788"],["/posts/9efd7701.html","9c7c675f53adf26c8dce29d6d6f58b12"],["/posts/9f61c1a0.html","98b7bd2d04e2bc3a222078084741a8d0"],["/posts/a1de710.html","76fb66712bbcd5b1ec155c0991166fc2"],["/posts/a30eb0cd.html","44200cca741df66d9ed04225e905c141"],["/posts/a72f71c2.html","f84f3a64a42324b4041c7d6d24a90de9"],["/posts/a7634b5d.html","122df6153fddc12f30139992a55f2a39"],["/posts/a8c593b5.html","009226491e26a4c20eff1d607495085c"],["/posts/ad0c1efa.html","dc6924b38c1e85d037d1d04b995b0f37"],["/posts/ada3f440.html","a902dab53544b3c04335c75fea239b23"],["/posts/af1807ef.html","351f7c64bdefcac6ed20572413c983d0"],["/posts/b397bf03.html","60124f0e6c138d36dfcbb6bd88999db4"],["/posts/b497b647.html","d6c3d304ff5a69055121425622d6e2c5"],["/posts/b4d464b0.html","7dc55f086b4a9456634b073e73c92f55"],["/posts/b5fb773f.html","6f78cc315c280e12f92446bed2df0dda"],["/posts/b8d46b32.html","e2e439ab5a262deac80dcc08c38c10ee"],["/posts/c1b2c6c9.html","d611c66b52d1994bcceea5b417a1f177"],["/posts/c2111cbf.html","111a2d17d0905cb70721250338251e24"],["/posts/c316c2e8.html","a86283bd6e01d8637b7a98d3e2b99baa"],["/posts/c43e60b5.html","185120fd01cb352427ed281acd99a02b"],["/posts/c497a412.html","4bed5f509fbb9d198400f89abcd059fd"],["/posts/c5395ba3.html","559ff2e7e5af7e7572b9e5c053f7ffb8"],["/posts/c5de299a.html","98ae54076f64d0b1fdaa363579e28998"],["/posts/c70bba9c.html","44c4becd1b70536caee923552c55de90"],["/posts/c797535e.html","7038e98d313b7258383b64b334c581dc"],["/posts/c7a62c79.html","987eeacca28922b733338ffd3bb6061a"],["/posts/cae2c959.html","f5a828a8b74758cf8f15565815740039"],["/posts/cbebef2b.html","b7f0b5cefcbf7a9b5c70177cb3fb8f69"],["/posts/cc4c0017.html","507257c1f17880ddf92368f74ba726ca"],["/posts/ce25023e.html","4032e6d0fc11bebac3aef121ad441f22"],["/posts/d2fd4837.html","6fddc64ce2eaad7d3c8c81ea5dfc3d63"],["/posts/d3233cbb.html","4d81176ce8de76912106ab05c8613f18"],["/posts/d3a745a8.html","867d1298b8f2166829f318f2ef1b63ac"],["/posts/d7e940d2.html","da2f7cde463088fed9a2ad873c19037c"],["/posts/dc815d5.html","753ebb295243228f28bc3d9f17512b2e"],["/posts/de25b0be.html","2df44fbdc09eb56bf4caa5d9d4b57d65"],["/posts/e2623b4e.html","ec7b2157abf9158dd17d1a47b16c25df"],["/posts/e3ab6ad8.html","0c60205d2cdd9fa8d45a80a6275bcaeb"],["/posts/e5018da6.html","1719cfa37765d6e6701472f774f64319"],["/posts/e5963272.html","399189a92f57f643dc89bd4e88facc3d"],["/posts/e5ef4c3c.html","3e3acba76dd61698fe4a0d57f7f9d747"],["/posts/e624b065.html","5a824b742af7971745c698d0399e358b"],["/posts/e7c703bb.html","97f305ec68d2d843d0ff71e4e5cfc9c9"],["/posts/e8f14b6c.html","662e84d1bf96abb199c38dd57601d8a2"],["/posts/e91abb63.html","07bae6081c318184741a16c4b05e2917"],["/posts/ea9a8808.html","be4cf3804d6751749377c7ae1d0bc28a"],["/posts/eb784749.html","fa3bb7700f8cd44d96520a43d925c7af"],["/posts/ebaf2232.html","c3cf7fe7ace88cf023859f53d8e1a675"],["/posts/ed75f185.html","2e3e10545f235cfab227605c16f3dc91"],["/posts/ee1ed673.html","0695ee6efb72b34e08ac8f58f7193eb0"],["/posts/f0c3ed61.html","10aec4e7aa1eae2b45052e2aaf9aeb5d"],["/posts/f151ff43.html","85db9f27c2d87c23fec09bed139e2894"],["/posts/f21e7f84.html","bccd3bf777e676937ad9c29693f41322"],["/posts/f230b0fd.html","874da090324862ab582f214147249f9c"],["/posts/f28a7877.html","73b457d8da0b007f5bb2f500a3b904d4"],["/posts/f663d5cc.html","a15e16aea771869d865f4f01253143a5"],["/posts/f730ad18.html","4ef17eed189be4c13e053f4f86fffd10"],["/posts/fb5d4608.html","9f3c5780eea7b9e9c2d812fea150e6a6"],["/posts/fc04d0d4.html","f972548ad6680abafdecbe5cbe4da953"],["/posts/fc455f81.html","38dbba0ae907a97d513d4ba6afdf99c5"],["/sumire/index.html","28d73a19b0bd03fda7856e94542936a4"],["/sw-register.js","3bdab77b5c9d5bf720e6d7aa8de81c92"],["/tags/AKo/index.html","cfa2df7780d92604d1a42a2e297e0e80"],["/tags/APPLE-project/index.html","7a83a351dacf36fda53757f793cc57f3"],["/tags/Ankrache/index.html","9d06abf3aeefd5768d334ad2e9339089"],["/tags/BELL-DA/index.html","5cca3370a7e28d286d41248d28f296e3"],["/tags/BL-Game/index.html","0bbc63fae7d4da7c2773b9739fa00967"],["/tags/Blue-Dahlia-Digital-Creators/index.html","d5bce89a2a7fe702f0044413d7d2832f"],["/tags/Blue-Line-Games/index.html","dac6f617c59137c5908e8f6bfbd0a5aa"],["/tags/CD/index.html","8d0d33d35853bd190ddeb5b17b8f7390"],["/tags/CHUNSOFT/index.html","21e1b8387936fbe6da6d82df3cd73c86"],["/tags/Check＆Stripe/index.html","a1826008409860e89d75b64bf16aa818"],["/tags/Cherry-Pie/index.html","1cdc59c9daf72dcd74a36605dc373e27"],["/tags/Circle-Mebius/index.html","7f0cf18dcfc9813bf77b1fa2f214d10a"],["/tags/Cosmillica/index.html","37493193c5eae0d491383302ab61a50e"],["/tags/CresCENT-BLANK/index.html","43a61550dfdbe4f78d30e16699d0b1f9"],["/tags/Dopamine-Software/index.html","9146fb15a354caaa0f019ff30d5ef8ad"],["/tags/Dos/index.html","fb698165c83ef66238d618ff5d0dfaf6"],["/tags/Earth-Well/index.html","90a383cbea4745633c03158d21d99bcb"],["/tags/Forest/index.html","c89ec4f2ddb504ec3522a7baa18af94e"],["/tags/HaccaWorks/index.html","a6bacd878e6aa29fd61087a9539ca63f"],["/tags/Kanon/index.html","37dde1ba6454fced8e94d39738dde4a6"],["/tags/MANATSU-8/index.html","ba33fc4b51d5a56578d33f1dc8186341"],["/tags/MARINE/index.html","0ca12a10db90f34acfcf09668d0353d7"],["/tags/MIO/index.html","080468bf55e08e999f193f30ae5a2424"],["/tags/NAOX/index.html","8957762c6f48b5a54f5f615c07fd1061"],["/tags/Namikaze-no-Uta/index.html","7255a6c3f9b7372a903a4ee15a5fb5db"],["/tags/Nmyu/index.html","755021418f8f4deb6d78d84626aec2bc"],["/tags/O-S-I/index.html","c873ec87b70e9acfe329012d8b54ad6c"],["/tags/Omegaの視界/index.html","75433c3020e812fdb5ec9164e3031c1f"],["/tags/P-o-l-c/index.html","9da61466b17f891abe634847fcbfdec1"],["/tags/PC88/index.html","f813d480faff5ff0b39797589054eeea"],["/tags/PC98/index.html","d85ed5629f8ba9bfa3327026d8a7fbaf"],["/tags/Perpetual-Room/index.html","0a832094dd50782d900b680e303fa910"],["/tags/Pleiades-Company/index.html","9062dbd7557a4ab7998f5026e9f548e9"],["/tags/Project-Twintail/index.html","5b03644ad20ebd8577d966b4b8a8e13a"],["/tags/RIFF-RAFF/index.html","87a41ca76729419ea23b303054f56f02"],["/tags/RPG/index.html","1f7b53a8b1835a1c4b75841d6b87b89b"],["/tags/RPG2000/index.html","5d1350fb843d785a359c6b50850b4b07"],["/tags/Reverv/index.html","4d481ba0a4434259c7f6606d1e10b605"],["/tags/SENTIVE/index.html","755d5b5d1eb8375735410c7a56ba3fc7"],["/tags/Saihate-SOFT/index.html","60d246454accef3cffb8fbe944b4f5a6"],["/tags/Scrubbing/index.html","e948d8f49d29e3a38b955681842d2bec"],["/tags/Sky-On-R-imaginAtion/index.html","2481746cb67ecea7efee1486566d040a"],["/tags/StrayMoon/index.html","0c22c7b7c60831616d594c908eb8fc0b"],["/tags/Studio-Bu-Sa/index.html","ff4b2fa1d8e8a662dbf2f2c4562de0dd"],["/tags/TRANSPARENCY/index.html","6bfc983d3e7e7aa7babe9edd2ef45cea"],["/tags/TRANSPARENT/index.html","ec5694b069abc1252d920c50eff53937"],["/tags/ToHeart/index.html","a72f9421bfe95a975824e85e50835cd0"],["/tags/Traumend/index.html","dda2aea6564f7a28edcfcd52b7f42b4b"],["/tags/Witch/index.html","55763eb597fbff61002b6913b1691c5a"],["/tags/adonis-project/index.html","e3598c53046574ae73703c22aee675f5"],["/tags/capriccio-suite/index.html","c837b073b3af34502b31b2e69e4c4360"],["/tags/flash/index.html","25e48846dfc3936fc2c4b728b49d0e74"],["/tags/galgame/index.html","7be5bc0842b26f5d48d52127b6d5d657"],["/tags/galgame/page/2/index.html","423a32161d1ec4e7a34ea9734a248673"],["/tags/gal资源/index.html","13b6c00da4fdcbbb42528066f5dd6f5f"],["/tags/gal资源/page/2/index.html","72461516d620739feb62e7e2bc2b2f38"],["/tags/gal资源/page/3/index.html","ab0bc38b5ff75d06a166fa50cf48a1b6"],["/tags/index.html","0ae8870646f68e02efe29d602720a0c0"],["/tags/m-kz/index.html","45643c9b78a2b58aee5836f25b2e45fb"],["/tags/purgatory/index.html","c7e3889fc59f82d6090896af85e3bf4d"],["/tags/rkr/index.html","3f44509ab6e8273e66fd879b16f7992d"],["/tags/team-eye-mask/index.html","d88b5cf4d74b5388b099f5152c12440d"],["/tags/ありすくろいつ/index.html","73a518dad8c30a60b99582d01986e075"],["/tags/いつものところ/index.html","90c63b8bf738109155817db57c7fdd4b"],["/tags/きつねみみ饅頭/index.html","8172d334acf901bd377dd40461056300"],["/tags/ねこねこソフト/index.html","b46b7183e494548648b0b3343f9805c3"],["/tags/ねこバナナ/index.html","1fc892b16e0f5e7ef99fa1b36d4acdeb"],["/tags/はちみつくまさん/index.html","1aa523ec3df989026ec1bc6d88a5f1b8"],["/tags/ろりちせ/index.html","0484d84703ec78806c5ea37b1e053b1d"],["/tags/アイル【チーム・TATU】/index.html","34accfed63074545a0947261f239c622"],["/tags/アクアポラリス/index.html","21d323ade1e518e1ce4d794613a365ec"],["/tags/アークシステムワークス/index.html","89e384d970cfe7a10bf64b082ae8eba6"],["/tags/ブロッコリー/index.html","839642c36f3a911c0fe5ca7b00aa7d4f"],["/tags/乙女/index.html","816fdcdfe777c5720f65b9de73597e96"],["/tags/乙游/index.html","c3827c80436dcc22211a09f91afaed7c"],["/tags/停产/index.html","b69e542d3f62f00b8b62d9c6de18e430"],["/tags/公告/index.html","7a742dc3ed501eeb445ffba672d9ba3d"],["/tags/同人/index.html","40f5e634b9bab51799894480363a1ed0"],["/tags/堀井雄二/index.html","5f820187240518a3ee5088a04f712899"],["/tags/外海なおき/index.html","d58a69829df6b21b1479f7b1a4932b43"],["/tags/大熊猫/index.html","0dc17d57e823081d406acf0444bb3e34"],["/tags/女性向/index.html","41730cc6a2b4081ed703c1850eb1fd4e"],["/tags/安装/index.html","369ed5331dc4a1e4211f3f1db15a1baf"],["/tags/御茶ノ水電子製作所/index.html","ea5a4269ea32c44b7db01ff26a976a15"],["/tags/月の水/index.html","5a5830d4d1993e73056ff93bf4adca8a"],["/tags/桃野衿/index.html","76d120365318898793adc84f5d546901"],["/tags/機械式少女/index.html","89f549e501925b03124f604d19c08e35"],["/tags/水仙/index.html","028b22cef8f04731dd7c402fa23e0d11"],["/tags/汉化/index.html","5d3df8669ed08b7a9c3b515e0257d523"],["/tags/熊月温泉/index.html","ff987efb94d35ecde2cf439c21df25df"],["/tags/片冈智/index.html","8c25719220c61da2316cf37118711a45"],["/tags/片岡とも/index.html","dea6c8fc8110450e2c103fad96924857"],["/tags/牙の刻印制作委員会/index.html","ba289f3d7978d489c2dada8e98a6bde2"],["/tags/牛カルビ定食-FLAT/index.html","2897cf6a9c26319f7e0369da0148fef5"],["/tags/牧尾屋/index.html","02d6a0f65280f33528bb45f319e165bc"],["/tags/犬茶屋/index.html","4cd91fd340272039fa0c29aac8e2279c"],["/tags/猫猫社/index.html","4bc6a65434660d3546bb40cfd36deb62"],["/tags/王宮魔法劇団/index.html","d0d40789c50e514cce0566c5646f176e"],["/tags/画集/index.html","a7d9be02dbf372a5539ade29dbad30f5"],["/tags/索引/index.html","3f471d5a77af43affafb36c9c5cc0c35"],["/tags/缺失/index.html","a4c83bcf8bc7d0453ff3b276f1add340"],["/tags/自购/index.html","6c816fc6a36302a0df436d88a36a6e47"],["/tags/茶葉☆姫/index.html","907d9f70639d78310ddf7ffe723d3e0b"],["/tags/郷愁花屋/index.html","5baf593274eba2f71843d600812eecfb"],["/tags/閂夜明/index.html","b3c091879b3c8b34cc28a62ba7603d62"],["/tags/音乐美/index.html","31245bf5050596c7c673944247680b43"],["/tags/黒†救/index.html","d7e1996ab4ee63e9f9488c24ad7cf2d9"],["/tags/黒百合っ子大集合/index.html","bf1b61da25209a607a0717390d7da1af"]];
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
