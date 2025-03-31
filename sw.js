/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","70e0c7c13e55fc0ae845e9c30d5e5a4a"],["/archives/2024/04/index.html","fd4db209b01a0c3bff7654c53f4ba421"],["/archives/2024/index.html","49bdf73cedd93288aa26aa2c53676e13"],["/archives/2025/02/index.html","42004b563a18c6796aa6f19a005267b0"],["/archives/2025/02/page/2/index.html","7827aa84d486e0837d005004d68fba00"],["/archives/2025/02/page/3/index.html","f5697b6142ac9109ab294a4ffa8d8c45"],["/archives/2025/02/page/4/index.html","9d018afbefec2ceadf71e4577f9b4178"],["/archives/2025/02/page/5/index.html","b3ceba9a38d4d8106f0c027f12ef7617"],["/archives/2025/03/index.html","9ce7c7cb19f61c5f9d6e83c4e239276c"],["/archives/2025/03/page/2/index.html","703483d5452b0eb4049fd0237086f312"],["/archives/2025/03/page/3/index.html","6aa42c50af77a19e0cc7e23f04e0243c"],["/archives/2025/03/page/4/index.html","7f2db4eadcd5a632c5ee0403a5ca6928"],["/archives/2025/03/page/5/index.html","baeb5bea57c453a8c44f6c48b71c3477"],["/archives/2025/03/page/6/index.html","ccebacab69e71c6df754294692fa91e1"],["/archives/2025/index.html","24abd7fa65425f11dda824568ed6917c"],["/archives/2025/page/10/index.html","14924634899f1b29f01237cbed50a47a"],["/archives/2025/page/11/index.html","2938984bbf700c4e185d250d450a7b72"],["/archives/2025/page/2/index.html","522524e210caeb6bb7a4cbc5b242da3e"],["/archives/2025/page/3/index.html","b59c31aff58819eda90b325a44dd5eb6"],["/archives/2025/page/4/index.html","84fddfafedbcd68b900aa1c68a411c70"],["/archives/2025/page/5/index.html","43f9954d82d8491e9eb4ba73f9457848"],["/archives/2025/page/6/index.html","22b2b50d14f52b9c1156aca3ddee475d"],["/archives/2025/page/7/index.html","3e54cf6c353acd6bffab2c3e2ac4c384"],["/archives/2025/page/8/index.html","e5bef9016a0ccc6d25201f648ab5ca95"],["/archives/2025/page/9/index.html","967b75aa977831c1bf6b932c70c7b6a1"],["/archives/2026/02/index.html","4dce3e159b5961c3987a051af94c23c7"],["/archives/2026/index.html","f365a0039e8c2d41d5f8fd6db913f73e"],["/archives/2925/01/index.html","f291be7f1b03993680b4046ceeb999f9"],["/archives/2925/index.html","b1ffa5531a5e3d9368d31aef4ad282f0"],["/archives/index.html","eed4ace377dd48a1b06a4677d0b50f4a"],["/archives/page/10/index.html","3db5f855aa5000e1640ec1a4aae33a91"],["/archives/page/11/index.html","e13a033a4da2745db8d65a7dc0197771"],["/archives/page/2/index.html","ed2e089a0dd427a256b4307cab22e977"],["/archives/page/3/index.html","8cbcd25507a84b4558c880a92779ed65"],["/archives/page/4/index.html","45fc89da33517038bc53641842c2380b"],["/archives/page/5/index.html","35623a8b82188cf031071c88a1835aed"],["/archives/page/6/index.html","80e2f437ba011c690fec2a495a1d6392"],["/archives/page/7/index.html","cf897948667364fac1f48125277c5d30"],["/archives/page/8/index.html","58a168c0b16b858bf6a08e1a805dbb1d"],["/archives/page/9/index.html","411d60130bdbae7ca2849255bdf751c8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","070f4b2a6795a683de0f4bb935018a66"],["/categories/galgame/page/2/index.html","6202e6cf79e2341b7019eaedf20abc42"],["/categories/公告/index.html","ee778e29c814fc58d1c4b72d010ee027"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","f0e1344485909226e9b0d9922c485bea"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","d06e945a326fb7484ac4a96344cffbf7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ef71204243ea98a74f5fe8768763ca78"],["/page/10/index.html","b2890b66f1427eb8f2d20fee6aebfb68"],["/page/11/index.html","e942cae95e0a0249613e711074eb3d88"],["/page/2/index.html","29f9092742ff63965d6a3030a672509b"],["/page/3/index.html","2a6ab31c88a9ccb401815e7791cc3345"],["/page/4/index.html","526c0e7da7fc03e45ce9cee8d72f2742"],["/page/5/index.html","ae759e55005d00a980108dc4747d892d"],["/page/6/index.html","db8fde20d5c6e6b754508e01d9220fa2"],["/page/7/index.html","51f4761135dafd9173f49b665acca2a3"],["/page/8/index.html","f4858bb368c91a2be00620ec0cc67971"],["/page/9/index.html","86382e5de50d63186b81f9a8c7a89125"],["/posts/10c9dd98.html","7e6edd21de190d75e0e093f313879a6a"],["/posts/1295b569.html","f5e3d54ea0292355e3297c6a3f3077ba"],["/posts/1370342.html","0cdb86c4ababea4e69b478809df0c2e1"],["/posts/15ef14c2.html","cafe808626488f51c56b3d8addbd8587"],["/posts/15f3959d.html","179a3ed6f8f74a5155572a05b1644bc4"],["/posts/18ab785d.html","360f01ee246e6f4f41dcfba6e208b31f"],["/posts/1d59b71f.html","fb774e5fe812e9f3b060026532650b65"],["/posts/20b3f3a4.html","a5f3c2f7b8464802ec5fb55e842939bc"],["/posts/245f1c7d.html","382c46eb526885beafb2e8e09c301543"],["/posts/252658f.html","7a8963d1e304d383842b0819d280ba6d"],["/posts/28397adc.html","8eb7406cf42ccedb81f138cae60fe855"],["/posts/2b38bce0.html","93d5c401a394d69594e8669ee65b8d4e"],["/posts/2c0a6836.html","b75e94b4a42a21fc531f0de381a4c100"],["/posts/2cf620f0.html","b32b0d9c745dbc10c55ca4c7c5acbaa3"],["/posts/2e30fd6d.html","0776d2a93c4ed8521b5e63419f6bb066"],["/posts/34292736.html","a62a78a53bcae49fc0496eefebfe9403"],["/posts/3468cbe.html","d3793ead5d80ba0a8e65b4584e8394dc"],["/posts/39176dc0.html","312a52a4d6dc6a65494a777c6b5f19ca"],["/posts/3e118dbf.html","6ef46a06e084379791a47ae32fd6522c"],["/posts/3f7d823a.html","d4a4a2c8d4b7fbdcf3ae99d86af18987"],["/posts/3f978819.html","56b7711421a85a1b4335e8d4b0daec41"],["/posts/43945723.html","e8465fe9e1bcfbc94b9ce147dd4df87b"],["/posts/44124a6b.html","92cd549b034b768d1edcad9b0deef075"],["/posts/47abb61d.html","8d9a82a04c42b3c2aae09553b89da427"],["/posts/4b689be3.html","090b395a48d71a8362b2e463b0569f4a"],["/posts/4cf8423f.html","7640fd25d6a7f25622b4cea46aaddffb"],["/posts/4dcf85c.html","58a661e11744aaa9c30b6965cae3e7ba"],["/posts/500cd322.html","97a1677cb8acb47e0897f8aab45f6009"],["/posts/51c9b1ff.html","6ef024757e4d76724ad791575792adf1"],["/posts/52b5b3c6.html","2eda1f58bbae26706614ed6fc9478dc6"],["/posts/5f6e0c59.html","6eeac2ec560716291e8fa2febd8381c2"],["/posts/61a63a84.html","4355aa31166c8b2c3d69f4ff19509011"],["/posts/625ab7bf.html","925bf16345d3b4d7eb0195ad0c033d6c"],["/posts/6336a2f9.html","9d4497264fad5167a562859f3e78d739"],["/posts/6432d61a.html","8388b7a60dd94090b4d7cf675e4cb75e"],["/posts/6515f032.html","8bc084fadcedd6643bb91ed9c5eaeb1d"],["/posts/6720ccdd.html","edbc40413a082980edce50e6f247e37b"],["/posts/6a4b5ac8.html","cca9efbe995cd59b8517263e9534d56c"],["/posts/6aa4177c.html","edbd127f37247786c1cc389e9294e0e2"],["/posts/6b15f81f.html","633be823f0763da1a2a45eb69ee64899"],["/posts/71131d34.html","1ddf639e5adb46350aa61c15c3ee452e"],["/posts/78a8a8d3.html","1fad6c2209c0123a937bbcd975a1e50b"],["/posts/7a5ef3d0.html","9896a2b8ff8bdce0dcbcfcccf2fb1aa3"],["/posts/7b41e1ac.html","8af642a534b1179be5d3d2b4a3829f3d"],["/posts/7b51011d.html","b746f8e43d61a62f7167b6fd98bdf6af"],["/posts/7e3aa3e2.html","bef6aa23b97cb9f96c9756c4cfa515ea"],["/posts/80fe2691.html","b7bfd76004bdb362b71a5f56123ae699"],["/posts/81ac52e9.html","56b4b6f6b91012f4419acdb54de798aa"],["/posts/8486f6f9.html","18d9a8e7a519c8ba61355aa6de20d495"],["/posts/849b40f8.html","48ee38cd85276399cea920d7d0d444b3"],["/posts/85c51d68.html","6ec0e3d4013776795fa65bb6bdfa16d8"],["/posts/886f8d3.html","be4006b286b37bccd35e1dd712ee179d"],["/posts/8a7cba10.html","3309783049d87b7df0c83780bfeb7ce3"],["/posts/8ac11b41.html","ed08ae7a63d7eb4f5b63dc1933dddd5b"],["/posts/8dd520d9.html","eaf7f2a195a8d92ce8f5f991fd49bfc9"],["/posts/8f555654.html","0fc92575d29eb387d20d9e7d711e974e"],["/posts/92a980c2.html","dc30c9409cb7bcf261b3e6550a37d920"],["/posts/92ce16.html","5dd5223e88647ff6264702cbce4e4b83"],["/posts/93e9943b.html","fb92675d45810f8a9c3058827a09ae3f"],["/posts/94d3c794.html","626339923a0c6af9be718373ae4455a9"],["/posts/97f50eea.html","1b256ad3d9962bdba340faa13509b45f"],["/posts/97fca8be.html","7f8b42f3c62bb441e5946e6cd3f06fbd"],["/posts/98662d05.html","7c558b052fd89e21d23cbdce9662c176"],["/posts/9a2f6162.html","33001b6728be53204fac4a6a457a98da"],["/posts/9b22a48d.html","ae2c0c22c0911020070bf88b606bbfae"],["/posts/9cb455b1.html","12834417c2d606ebdee75870ebc1981f"],["/posts/9ecdeecc.html","97603e5f2aa932aea4f21d20aa7c89ae"],["/posts/9efd7701.html","ba082e9eca6a729861a68bb47b5c112c"],["/posts/9f61c1a0.html","344bb80bb7a721a7b17ba0eb465c9804"],["/posts/a1de710.html","ee345da9be6a801597b1269f03bb8edf"],["/posts/a30eb0cd.html","fcf0fca2fcd765e7c9346405d3f4dcbc"],["/posts/af1807ef.html","4bfa90cc2903e56a4e5126206dd8e3c2"],["/posts/b497b647.html","25983ad7924e279936c39933fe305c9d"],["/posts/b4d464b0.html","6e9a4cd6da0f57c76b080c4b63995462"],["/posts/b5fb773f.html","093014ac2ea245eb57a49abe06024ac5"],["/posts/b8d46b32.html","2967191d62ef74ef1a970c5e13f307aa"],["/posts/c1b2c6c9.html","a1e7e3d19c1a442b8dd272e27103125f"],["/posts/c2111cbf.html","3e6939b6122b30fb297fd2590e8dd6b0"],["/posts/c316c2e8.html","9f2c5fbd2cb79a3849f656c54096f59e"],["/posts/c43e60b5.html","b14933eb80ae05ab923d2d8f8b27f8d6"],["/posts/c497a412.html","cb233771e80ab7d2390f22d0cb0272ad"],["/posts/c5de299a.html","5ed6eba4b2d55f008ea2e16a3b4d2747"],["/posts/c70bba9c.html","fe6ba55d0782c757d7a7f78a04573ce0"],["/posts/c797535e.html","a38034388a59a29becdaa5a540bb576a"],["/posts/c7a62c79.html","d52d3bd794b4bd47972e11845c1cea31"],["/posts/cae2c959.html","e7d6beaf725342359e2144347832d5f2"],["/posts/cbebef2b.html","9b302695bfc8b281427a1ff2fbbde52d"],["/posts/ce25023e.html","1a313e0bb4f0ebf8e95f57e61a7ce88f"],["/posts/d2fd4837.html","405e76def2e15138201e60a434a58b56"],["/posts/d3233cbb.html","11978b319056198e332d98a9a0f1e722"],["/posts/d3a745a8.html","7058a5bbed786848aaad0c3e8d45bd08"],["/posts/dc815d5.html","3d6a3d4b32ab3575310ba255b0124d12"],["/posts/e3ab6ad8.html","5ec337221ec45b6432b5ca7639a2e7ef"],["/posts/e5018da6.html","29a1a798e0b7d173b3b54c552fa960f8"],["/posts/e5963272.html","09542b4b80c530cebaa3b4ae8dab5764"],["/posts/e624b065.html","f95f59ff39e0bf42183fdea26b8923b8"],["/posts/e7c703bb.html","eef451a63ee98964173dff6bb5c27db0"],["/posts/e8f14b6c.html","4878668a703c2aed5faebc7aca47c978"],["/posts/e91abb63.html","3abd177e18c5bd23d06153eaa49c882a"],["/posts/ea9a8808.html","e7c9f96a579e4a51eda444e840762de9"],["/posts/ebaf2232.html","b5cacb1b9c541c7ab61102add9a1efc4"],["/posts/ee1ed673.html","09b35b061a23b2cea4b316b5cd2e896a"],["/posts/f0c3ed61.html","3bc03f57144b8dbbfb0b76db74a303ff"],["/posts/f21e7f84.html","c32b2cc50c9d43efc5d5c64c6ddf6a0a"],["/posts/f230b0fd.html","84a4ce3618b60deb95be87333fd3b9a4"],["/posts/fc04d0d4.html","c1ec497a8de6e0bd476a5c57a65b26dd"],["/sumire/index.html","916bf66122cf87eb04bcc39b22f839c4"],["/sw-register.js","b70259a4e310db783b68a6233cfefdd4"],["/tags/APPLE-project/index.html","02bd4db2d99bdd55c1386eecf83c28ed"],["/tags/BELL-DA/index.html","f672467258c2e33496e16b30746507dc"],["/tags/BL-Game/index.html","1f8116596269e025002c21597d20e519"],["/tags/Blue-Dahlia-Digital-Creators/index.html","02ddc47c3491c88d65e2a0fd5c88331e"],["/tags/CHUNSOFT/index.html","fce6f4936e54758b786551081d1d011e"],["/tags/Cherry-Pie/index.html","08353c23c88ac96b76983e8b25562870"],["/tags/Circle-Mebius/index.html","8bc7c52169daf964e1d20ef0ea3aaeeb"],["/tags/CresCENT-BLANK/index.html","b3be4a156d840a98c6a1c0911c385941"],["/tags/Dopamine-Software/index.html","99cbd279285719b0e2e56798e901e8cb"],["/tags/Dos/index.html","f28ab6fc25dec91d44f73cb55f63c0d1"],["/tags/Earth-Well/index.html","1203b5172c8326f25796ceadcc3c318e"],["/tags/Kanon/index.html","1655f40000c0191c02ae46b661c9a4fc"],["/tags/MANATSU-8/index.html","18cdb9f4c69cf7743fbda0a784d581f4"],["/tags/MIO/index.html","80e8fcaea04e72c7be443b3565f67a34"],["/tags/Nmyu/index.html","225f5d19e47818f23d041b0583876c2c"],["/tags/O-S-I/index.html","a6bd482a105aec81aefdc60cafd015f7"],["/tags/Omegaの視界/index.html","131a10c23193cbab758eebddadcf879d"],["/tags/PC88/index.html","daf54be8fdea10a9c3e70d78a9683604"],["/tags/PC98/index.html","99433b75fb09eb4a053511dbfaf9e738"],["/tags/Perpetual-Room/index.html","4d8242b265505ec44e77758225c977c4"],["/tags/Pleiades-Company/index.html","5acdebb5a53ee17b0fc4bca6aec2d3f9"],["/tags/Project-Twintail/index.html","6afbe351d5aad1a8387a2d685cc094c8"],["/tags/Reverv/index.html","5d847ad5b07019e31e5e7b6a77b62243"],["/tags/Saihate-SOFT/index.html","1d596133ad5c2536a624be88d2e810cd"],["/tags/Sky-On-R-imaginAtion/index.html","02c920158bfa746b9d2713d2a8bfbcf8"],["/tags/StrayMoon/index.html","10ea5b7fb5d267c69eb1f893a29bcf4c"],["/tags/Studio-Bu-Sa/index.html","56aeda2511edbb71a53bf8b21a60756d"],["/tags/ToHeart/index.html","72602671c3e49c37dcc07ebdeec755f7"],["/tags/Traumend/index.html","8599312f1923676e2beeb85122fc923f"],["/tags/Witch/index.html","ba4e0586193c64786116d18b2632fc8a"],["/tags/adonis-project/index.html","c2dfce4ed89c75f6b660bc1a82be41d2"],["/tags/flash/index.html","6e82100663758c14c5a48ef05b76cac7"],["/tags/galgame/index.html","1acc7fe99acaffe56cee5fef8b7c0369"],["/tags/galgame/page/2/index.html","a8a775318cdeccebef418ba5d7eef5ef"],["/tags/gal资源/index.html","3c381d66ab6b42167b1ab2998a1f2f70"],["/tags/gal资源/page/2/index.html","810dd03a79ee7bf41ee0ced704882277"],["/tags/gal资源/page/3/index.html","1dc0b54d3923d1cd0431a2c777ac5366"],["/tags/index.html","cadb0c3c614c556a8289c8b43b263275"],["/tags/rkr/index.html","cd4575f8a10ad37a37c0c3c6c448043d"],["/tags/team-eye-mask/index.html","58227f77a4d90eb7dcdac6171fc48e8c"],["/tags/ありすくろいつ/index.html","bc3771a55385bc73c0a88a20886a3254"],["/tags/いつものところ/index.html","daea9561c296e547cbf5bf7e7a8ab4f5"],["/tags/きつねみみ饅頭/index.html","f743540826ab80fef1380bc1cc2cebe9"],["/tags/ねこねこソフト/index.html","4e9a43de6bd3ed0614692a516486e09d"],["/tags/ねこバナナ/index.html","8d6e815ee8dd2a27057fa94bcd4d737c"],["/tags/はちみつくまさん/index.html","ad2948fed4ffd02f5301d8ec164af37b"],["/tags/ろりちせ/index.html","9713bd16b350e50b74a20c5f3d8f84e0"],["/tags/アイル【チーム・TATU】/index.html","304f22a498052ff25bc48b4b694b1c5d"],["/tags/アークシステムワークス/index.html","34b58ea6edc98418ea1442af89b24378"],["/tags/ブロッコリー/index.html","602218cb8990167a8efcfd5df137cda5"],["/tags/乙女/index.html","cb3433e9661ed1e99931267268fa8ef1"],["/tags/停产/index.html","24f69debf05932959f1a65a3ab5e4fb5"],["/tags/公告/index.html","0e29e32bd0a457debdf097f43dda7614"],["/tags/同人/index.html","a13e20d86d77de7a428498cd09201c77"],["/tags/堀井雄二/index.html","2a56cfcf5e7314a61ccf5e616979618a"],["/tags/外海なおき/index.html","d719b19f1b6f4a880eb00e2dab535d24"],["/tags/機械式少女/index.html","6bc0dc5d640645420f6ad50a85f60ee0"],["/tags/水仙/index.html","25fc92e825eb1473786023648b6c2049"],["/tags/汉化/index.html","754fc2f917ae65145fb93c79afb271f0"],["/tags/片冈智/index.html","de51848849692667821c83ac99a34bb4"],["/tags/片岡とも/index.html","c034b73d2461cedffad48d62b7493a97"],["/tags/牙の刻印制作委員会/index.html","1da41153556aa7410748cac5b9515f08"],["/tags/牛カルビ定食-FLAT/index.html","2c986f2161ec89ee90062be8357056e3"],["/tags/牧尾屋/index.html","92cc372336331f045761c32aaa90f1f1"],["/tags/猫猫社/index.html","4fbe4875b9bbf854342414337d385707"],["/tags/王宮魔法劇団/index.html","fa721e9ef677cd961952f0e22be0abb4"],["/tags/画集/index.html","bff82bf19a43da4d96f8d4aca4b35eb2"],["/tags/索引/index.html","4fb7fadafe9adf1c33a0a1d239d47329"],["/tags/自购/index.html","6b9708834ac141ad800c0ec9aeede2bd"],["/tags/郷愁花屋/index.html","48fb645a15d7c5977afdfa999fc353db"],["/tags/閂夜明/index.html","a9dffebedaccf2c140ce185ce59af714"],["/tags/音乐美/index.html","74a542519eabf3f09dabca593f8582f5"],["/tags/黒†救/index.html","ec22573da88362e9adae89379e009e8f"]];
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
