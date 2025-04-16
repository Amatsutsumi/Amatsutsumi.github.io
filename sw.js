/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","43f996a4dd4a7c0b33b0911aeb3de4da"],["/archives/2024/04/index.html","9a0291eaec2b480498a6982e3a835e35"],["/archives/2024/index.html","1fdf35c79b8cd14dfc70a3578cb693ce"],["/archives/2025/02/index.html","b47d84961793085d484e0d1049f8f1d3"],["/archives/2025/02/page/2/index.html","2f18364c860d6871cf6c423f25b3f86c"],["/archives/2025/02/page/3/index.html","d0e04145199ccb7d6be1a0595fc5dd18"],["/archives/2025/02/page/4/index.html","2c5651cac0390d27c814b592a2fd8cb5"],["/archives/2025/02/page/5/index.html","9cec670505626ce4d0d70bff2da04d20"],["/archives/2025/03/index.html","2166c7cb49e81eda9cb528c0c89993c7"],["/archives/2025/03/page/2/index.html","73f530ffbcd70c50901cd83b6400f4de"],["/archives/2025/03/page/3/index.html","f4eef3cc8db919bf9a42bf7d24ed9e77"],["/archives/2025/03/page/4/index.html","f0c0bbfb9bca846a149294b255abc599"],["/archives/2025/03/page/5/index.html","9c9fc4d3f9d6ad5c6063446d301aa6c2"],["/archives/2025/03/page/6/index.html","e1372faa329daa79e42f0081ec998d8c"],["/archives/2025/04/index.html","12928b7faffaa414ebabb454d138cab7"],["/archives/2025/index.html","1fc1682e5e8e4bc9bff4f8663a1d2ebd"],["/archives/2025/page/10/index.html","50e89664dc6dd0a83dbd23052fb1db22"],["/archives/2025/page/11/index.html","4b699789a3e341516aa06db423155d30"],["/archives/2025/page/12/index.html","6adf7598c8946d442f27561b462ba041"],["/archives/2025/page/2/index.html","9994191b7a227f3f19d85dcf3e7882b1"],["/archives/2025/page/3/index.html","c69f949ace0b62b3ccba2ff466a23f46"],["/archives/2025/page/4/index.html","eb6ed1451f1bff3e8c22c9ebb922e0ee"],["/archives/2025/page/5/index.html","aba9b052a2d550b871434fcea1e2565d"],["/archives/2025/page/6/index.html","0e88a9f2965fadf90de5b74031e62b23"],["/archives/2025/page/7/index.html","53085cc7cbb4a0dee6c4c95c627436e4"],["/archives/2025/page/8/index.html","7415d477108e15d18553fa2494645bf7"],["/archives/2025/page/9/index.html","4925a2d5d5d872dfe604e966ea9a6863"],["/archives/2026/02/index.html","4442f38d5c47f710245dda6abbee19f4"],["/archives/2026/index.html","f44b67957cc0346f90c718d6fa28662b"],["/archives/2825/04/index.html","25fa72070b44d85933663fe8e591390d"],["/archives/2825/index.html","27be6fc2f615ff6c0cf790d6e78ead7b"],["/archives/2925/01/index.html","8ecdf83704eedab38d5b4509651f7a9b"],["/archives/2925/index.html","b572ee6dca3a92625cdd0ec4f30379ce"],["/archives/index.html","05b531b1f76b3b96865cf9a30d46791f"],["/archives/page/10/index.html","d836b8a0b9ee83ab30be44ce34289adc"],["/archives/page/11/index.html","2c6f1e5593d3c86981746fa7f55c152b"],["/archives/page/12/index.html","e6ca08a8b4a3e1843bcc8258668206b9"],["/archives/page/2/index.html","f10f96687738d9e5a7f1c75b5aaa8d7c"],["/archives/page/3/index.html","1b5fe11d8060f74bed8704739aaca005"],["/archives/page/4/index.html","5086c9171de4fcbae0ecafabc5eefacf"],["/archives/page/5/index.html","14146bb27a9450f3cd65c62521bf5d46"],["/archives/page/6/index.html","997ebfa82765df5397761f6f751e83cc"],["/archives/page/7/index.html","35efdd3a3abe7baaf9556946e5ace3f0"],["/archives/page/8/index.html","fbc272658fc9efe9bdf31e245a2fd13b"],["/archives/page/9/index.html","5c9e7c4f0933e9fde3282a0bbfc7eb0d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","7e535ca5620c82c289cc5c051c5daa62"],["/categories/galgame/page/2/index.html","bc56917d2f2fdc56867ba5403370af4c"],["/categories/公告/index.html","23485cc2f99a79ca66e603876477aec5"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","e9091446f3484bd9be1b2bb36b2efeb1"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","e88e674e10ff7aeb599eff509c34dc98"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","dfc8ac22dd57f051fdda2a1334fe837e"],["/page/10/index.html","5ba323adfd073d0276a43d94ffbb602b"],["/page/11/index.html","f377bc592092b9ce5deb30fc7e72cdb8"],["/page/12/index.html","f3549af76bf667e36a97f1619938231b"],["/page/2/index.html","dabd4dacb6da349564bdcefc749865fc"],["/page/3/index.html","f0d3c3d09e2ea3c20f75ba777c8a32c9"],["/page/4/index.html","15b5b2ba96b706b093c86c1694449d1f"],["/page/5/index.html","184f9d1d61607c85b2aea951cf1f91c9"],["/page/6/index.html","78d973354df8623a0c8a05000bf43467"],["/page/7/index.html","04d0c6c6c51a0ec62b7aeab6a1bd9799"],["/page/8/index.html","c9f09a720419c26f2e23efdf5135a195"],["/page/9/index.html","cfc37609baea1e6eb2347632a9374c1b"],["/posts/10c9dd98.html","604462c7a3e7911516500298e2114794"],["/posts/1295b569.html","5f80ab8a103c106c1fcf4ef9c2b1f9c6"],["/posts/1370342.html","e4fdf2d535813aad1f2bf76410d2aee8"],["/posts/15ef14c2.html","f58ea7ecbed9341266d3a74153aeabc9"],["/posts/15f3959d.html","876c6e25b7ab27a4e2d92073ced57378"],["/posts/18ab785d.html","6bf4e62b978d9b4b421acb6f5e9fcf27"],["/posts/1d59b71f.html","8b9412029b2910afbc9d5d611111e8ed"],["/posts/20b3f3a4.html","872e02d78d6fc46c8e7108eb0d1084ce"],["/posts/245f1c7d.html","d55f532ab2689f9493ddb56101787e73"],["/posts/252658f.html","d1e864ba13e6be5143c3a2cbc5c82132"],["/posts/28397adc.html","aceacc3c5138063e8e55d3a638f0ed8c"],["/posts/2b38bce0.html","bd5ba31eeba786edb475f2ca2836abb6"],["/posts/2c0a6836.html","7984a0923657f85b282283e0417daabe"],["/posts/2ce39bcc.html","b2b742ed678775d0c12c79ec2ba76902"],["/posts/2cf620f0.html","fbd97e24b406aa117a610f1b0c120d7e"],["/posts/2e30fd6d.html","4571cae8f8697c40569ce4691b04c55b"],["/posts/34292736.html","b572b8db9f69b9208166a82b39fa74a2"],["/posts/3468cbe.html","4a1b0ac644472d809bb4c259d8a6ffaa"],["/posts/39176dc0.html","f6e02bc95b63dc1e30213ac037c67178"],["/posts/3e118dbf.html","b308f8c46266f46825e4cee07afbfd66"],["/posts/3f7d823a.html","341c4d427749f325caa9536ae926b195"],["/posts/3f978819.html","4921c5135582adc9155fdf096d6eccda"],["/posts/43945723.html","13e18ceb77564baeadad5abb4bd1ded9"],["/posts/44124a6b.html","c210d203806e00a2b685ce2a097ca06a"],["/posts/47abb61d.html","17174e7eaa5ccb7e002add9c45b5b8f2"],["/posts/4b689be3.html","6f1c1da6294578daf3eff00791520266"],["/posts/4cf8423f.html","8a1b1360aa1b5b32ed804d0bbf77e322"],["/posts/4dcf85c.html","99dc7b5a3190d16d9e1b13c9ee8a5126"],["/posts/500cd322.html","4c90da8f964d4ac38b948e27826e728a"],["/posts/51c9b1ff.html","2bd72e2570de95e48d15fde8f8d7e8cf"],["/posts/52b5b3c6.html","d9c7f15ff8911b75326cb4cbb1edbfc7"],["/posts/5d8bea92.html","48aac6e68bb7a63e881a38e5dae20cde"],["/posts/5f6e0c59.html","6fe888b1ace042b6d20358971a956165"],["/posts/61a63a84.html","ec2c27802489993b559254a62221d7e4"],["/posts/625ab7bf.html","3ebe944c86b8963b4d636be214dbe286"],["/posts/6336a2f9.html","a7a4e72253d9c5f75dd5cb8ef6b34948"],["/posts/6432d61a.html","2766bf386853f1d70426529e2bbca499"],["/posts/6515f032.html","24bca4d7110b379c75c2e1b70c9348da"],["/posts/6720ccdd.html","6b7d499621d30ed73be037777ecdd3a4"],["/posts/6a4b5ac8.html","522e2ebf38c2d4417c00711c62e0dfe2"],["/posts/6aa4177c.html","c5c1c6e8fb6d1e5f07c288ad1c56f29b"],["/posts/6b15f81f.html","2236532cc4de1c5242e88387775068b1"],["/posts/71131d34.html","b16d65a8e9eff621338b2013d25a2003"],["/posts/78a8a8d3.html","db36813925bb0e3cd2ce7a1ce58b6877"],["/posts/7a5ef3d0.html","cca0dfbb8c97c006edb595fb50a34d6a"],["/posts/7b41e1ac.html","115dfc4fa0091ae3c2f6f3480bc8f824"],["/posts/7b51011d.html","3c72c1d2ed5a5ecb674d732521201b33"],["/posts/7e3aa3e2.html","4f554829626038c3aacc9eb1db79404d"],["/posts/80fe2691.html","3fe76a904925ff9841135b0f31d5cdea"],["/posts/81ac52e9.html","19afb83ee92e9aa68b60f5d72dce9f87"],["/posts/82332d11.html","2090809bd849bbdfe3b0e64a271a9d44"],["/posts/8486f6f9.html","c50c02d63e9c85564d408bbcf0da9075"],["/posts/849b40f8.html","e2a040dfb4e37b9bc68ee768e86175f0"],["/posts/85c51d68.html","b701ea21e5c401bf330e9d01365b0a25"],["/posts/86a6c500.html","1fce858b01bd1fa8aacd114a15cd5803"],["/posts/886f8d3.html","3aa2c1fc43de64c2f5c51cd80fe23d34"],["/posts/8a7cba10.html","11f36005565faff9e3c4c2eed283e2a2"],["/posts/8ac11b41.html","3a8cd4a0aa24103818da314a62cc7790"],["/posts/8dd520d9.html","140ed812acbde9ca2d318d78737837dd"],["/posts/8f555654.html","e14c9faac2430dad8f68341bb1bbcfe2"],["/posts/92a980c2.html","ee4a5a219a551d14fed1b1ebe28ee148"],["/posts/92ce16.html","316846e94136c0887e664476e3488c8c"],["/posts/93e9943b.html","c7714d47072172be4f49bf688a6aa274"],["/posts/94d3c794.html","367f82164c80a5c4fff853ec82df1d9b"],["/posts/97f50eea.html","e7d49272cdd8e022d5b42c60fbb1eb9a"],["/posts/97fca8be.html","834ca5f923b3c5c8cd1beeaa1f342e99"],["/posts/98662d05.html","e4ce422b6a80734a518f5093376a8021"],["/posts/9a2f6162.html","42607d77fb7065f92daaa01d275b8b62"],["/posts/9b22a48d.html","219d5636c845b35f553b77357922bcf2"],["/posts/9cb455b1.html","94f81d254eca41ff3b3842af9ac5bf90"],["/posts/9ecdeecc.html","9a733bf2c7451217c1add183f149a5a3"],["/posts/9efd7701.html","29c19858503f8054f572db172c79041a"],["/posts/9f61c1a0.html","4944d3df59fede88e04b9c91bb32bdb1"],["/posts/a1de710.html","106a3a2b842c80a5e4f501b26d6eba66"],["/posts/a30eb0cd.html","3a05f193e82db11ec902bdebcf8333b1"],["/posts/ada3f440.html","ef2ae0d76ab7799e41a439d6257eff7c"],["/posts/af1807ef.html","e6f1e0ab74cd3ed62589bf514559367f"],["/posts/b497b647.html","dab5c9b85ebcfedc579d3bd0fe28066a"],["/posts/b4d464b0.html","04aed87a2db1898202bee46394f33234"],["/posts/b5fb773f.html","78baa35a39966c60fd5191d90806e4d5"],["/posts/b8d46b32.html","4ee1b8eeec43e2b1e846d13e70214950"],["/posts/c1b2c6c9.html","069372775247782ce7742b2568547793"],["/posts/c2111cbf.html","4b8e027704ad73c2420d7c6bbba9cb06"],["/posts/c316c2e8.html","1b341a2e7334be561da0492afdba4eea"],["/posts/c43e60b5.html","dd9e26c8cae5dc26a8b46ccb7b66e943"],["/posts/c497a412.html","ca33e53bef9c146aa9149f4721a362c6"],["/posts/c5de299a.html","36d4aa1d1c75297a5ca093b842273ff9"],["/posts/c70bba9c.html","a4683c51300b5ad37d7f0f7ddf0b08c2"],["/posts/c797535e.html","cb7de293a484c5bc9115d7ae827753bb"],["/posts/c7a62c79.html","6f9bc49469805a07ef904f7955fe97bf"],["/posts/cae2c959.html","d8093f1b94514b2536c6e3a87a137dbc"],["/posts/cbebef2b.html","51f4d024e00a2e6b31a6fcda1c6e8cf5"],["/posts/ce25023e.html","fbf72dae917cf642f48cc56851c753d8"],["/posts/d2fd4837.html","5b27b752dccf97086c9e29d2e4bfd1bd"],["/posts/d3233cbb.html","e539b852367a23e455b229133ebdacf6"],["/posts/d3a745a8.html","6239f922b0ff36d9e116ca9ac1870d05"],["/posts/d7e940d2.html","3d0412ed77eb27b20cdd8d424add204e"],["/posts/dc815d5.html","7bda627b4cf2d50257965abd20a6f186"],["/posts/de25b0be.html","3a0f1711f7b1380a16f8fe52edb05c8e"],["/posts/e2623b4e.html","cf8fd48dd47e9471751c8f60b901ae0c"],["/posts/e3ab6ad8.html","330f2c5fe4b3624172b7786e8ced78f1"],["/posts/e5018da6.html","ba3d381f9bbf6757717858689769f39a"],["/posts/e5963272.html","d0d3c84b3d1a6ff870ffdbacd6491007"],["/posts/e624b065.html","ea8475ea748d35ad544c9abbcf7ae1e3"],["/posts/e7c703bb.html","a62ac47cbf34161b4f200f8e49fac60d"],["/posts/e8f14b6c.html","83937e84b5d452340a24f62b30ec7716"],["/posts/e91abb63.html","39063078449312c43b3b3f9b1e41c9f3"],["/posts/ea9a8808.html","8ffbe2eee0e0cdf843c652210df8dc01"],["/posts/eb784749.html","bbc054eaba1c8b6adee174c976354258"],["/posts/ebaf2232.html","eeb8ce21e3e02ab9d75259896e7cf9f6"],["/posts/ee1ed673.html","7cf1cbbf7a22834156f2414e1dba67ea"],["/posts/f0c3ed61.html","52a8ed1336f5885793b46ab986f32109"],["/posts/f21e7f84.html","04e3b7af3ef54c324ce4d9c4849f83f8"],["/posts/f230b0fd.html","c016505a0dad3228e015886a9fa19010"],["/posts/f663d5cc.html","a50a960e8b9885b3b15150a9bf6b85cc"],["/posts/fc04d0d4.html","aaef8dd64754ce35d6d89936cb422d9f"],["/sumire/index.html","747a8dd33abc3c1d50696e443cb78292"],["/sw-register.js","ee4c0bdc5bae39a7e77dc64791d49a63"],["/tags/APPLE-project/index.html","7c2010b5fa9b081787da7d510e7b122b"],["/tags/BELL-DA/index.html","00d6714a91c548bd16bdbf6dc0280439"],["/tags/BL-Game/index.html","62816d493a4e6b7c4102491bc2ca8ffe"],["/tags/Blue-Dahlia-Digital-Creators/index.html","8bba8e30e38e12aba971af3db80fb1fb"],["/tags/CHUNSOFT/index.html","e625b2588b0d61721596531434b8a72e"],["/tags/Check＆Stripe/index.html","9031732a75135abbd098f911103107ec"],["/tags/Cherry-Pie/index.html","1ceac89a69ef6f5610442238663e9326"],["/tags/Circle-Mebius/index.html","6b9fb7939c979312d379098a186eadde"],["/tags/CresCENT-BLANK/index.html","1da55d8c4a042255a998f340d947390b"],["/tags/Dopamine-Software/index.html","e05f1bfadddf1baced4714d0cfdc9a17"],["/tags/Dos/index.html","20f7bc40eb2c37e264e697725620e726"],["/tags/Earth-Well/index.html","ce0a172a72946bcfa2f9944ed8868b9d"],["/tags/Forest/index.html","aafd25ebc7e6a3393db183fcdb630e19"],["/tags/Kanon/index.html","7fd4d5ae4b7099f144ae4b56b4a5b6be"],["/tags/MANATSU-8/index.html","2293d09c588833b9ce7634848abc19c0"],["/tags/MARINE/index.html","e9580714eb78b14bba18580854ce6fc5"],["/tags/MIO/index.html","fac02d231155fec61d8776aea8fef26c"],["/tags/Nmyu/index.html","28a687969e4fd49a79db07e13cfdbf19"],["/tags/O-S-I/index.html","57f8404990dce4302013f0c742847276"],["/tags/Omegaの視界/index.html","9088f30ca56d1f8bcabf16bd1801cf9e"],["/tags/PC88/index.html","e87461c4278a5fd61509b12042e52e45"],["/tags/PC98/index.html","c7ba0f384463b131a93a5eb9d0c520a4"],["/tags/Perpetual-Room/index.html","bc043cc33a1f30e0a69533a8e754e800"],["/tags/Pleiades-Company/index.html","38d4ad49c25c9058bed160785c0c3f64"],["/tags/Project-Twintail/index.html","bad686bd412880a4458ed3fd340f6845"],["/tags/RIFF-RAFF/index.html","2f0ee673e4476a9b8dfeeb1fb51dbab4"],["/tags/Reverv/index.html","a6bed05fe6239d99d5c2282fff8ba81b"],["/tags/SENTIVE/index.html","171a09dd55489ffc9bdb3c251102af07"],["/tags/Saihate-SOFT/index.html","d0552a6e474a075fd002a08dbfa37dfb"],["/tags/Sky-On-R-imaginAtion/index.html","c3e4ad6c47fb5ee0e853abce4925e970"],["/tags/StrayMoon/index.html","0e9cb64886763ca3fedc0a2c0b3dc2ec"],["/tags/Studio-Bu-Sa/index.html","4b20a8acba55e529427f713e2e7af3b6"],["/tags/ToHeart/index.html","869ac5719ceab2e08e4f34d16a749076"],["/tags/Traumend/index.html","80f12cb2107baa6d6f18389d40d43ea2"],["/tags/Witch/index.html","ba9faebb7d037f217c9ad8938d1af7b3"],["/tags/adonis-project/index.html","7eb71f4641c63811f0dbd8a811c8d74d"],["/tags/flash/index.html","d4b06204131d939fff76410ff08c3f58"],["/tags/galgame/index.html","19f1a574ebad3eb5a3724fb8fd67e3e0"],["/tags/galgame/page/2/index.html","f4ef2fa37f90300503048fcf84ce10d0"],["/tags/gal资源/index.html","9292b7434c40c2288f0a59c18017ab22"],["/tags/gal资源/page/2/index.html","c0230db7339720fb60dbfd80e2179d92"],["/tags/gal资源/page/3/index.html","839eea19d9122efc5c85744f3be5d355"],["/tags/index.html","c821d81d4fc2ffe4da03e16eb2c26573"],["/tags/rkr/index.html","cce5e92b024820bd3ad8779cafaff796"],["/tags/team-eye-mask/index.html","6ce76099d0574d7f52dd0fb0d3c06d9e"],["/tags/ありすくろいつ/index.html","9b2c7e54ee62405136967be79c366bd9"],["/tags/いつものところ/index.html","24f2c9058ce4c03b3c2c2095a6e61d8f"],["/tags/きつねみみ饅頭/index.html","7bcc2cded48b41518d80798495a730c9"],["/tags/ねこねこソフト/index.html","e2c44d98bcf376d6c88ea97957b59015"],["/tags/ねこバナナ/index.html","3cf62004af85b40df5119579dc86d59f"],["/tags/はちみつくまさん/index.html","83955ae138631f7b05b07c8241ef94da"],["/tags/ろりちせ/index.html","ff2ac0015246110558106ff8d8a3af94"],["/tags/アイル【チーム・TATU】/index.html","960c07a84fd91f4b0b93527ede962a1b"],["/tags/アークシステムワークス/index.html","cb0edab0c1409284ab8b9a7ced67a83c"],["/tags/ブロッコリー/index.html","f9d29c27ae423774fe897d5d7118911b"],["/tags/乙女/index.html","4f72b1e57a9c5556e82152f614681eb7"],["/tags/停产/index.html","da0a0c5d920ae26e8bf70292b4657972"],["/tags/公告/index.html","f944d6ba8aafd1a7c366e2fc28a3d84b"],["/tags/同人/index.html","ad5f36ab42257bd59e6c5a3d93f27cf7"],["/tags/堀井雄二/index.html","6bd4e1bc17b2a7c905d40b391b645c8b"],["/tags/外海なおき/index.html","6d7e8a8e247f8ef18ddc2ff4b57fcfe6"],["/tags/桃野衿/index.html","89b5b00c442e0eb610e96024488b09fe"],["/tags/機械式少女/index.html","8bdf2d9f0d3076002f979f51897ca4b0"],["/tags/水仙/index.html","0307d304b524ad08a51e6eb125fe3941"],["/tags/汉化/index.html","ad4b717ceaa8daea5ca2cc20070845d4"],["/tags/片冈智/index.html","bf06d37ed924d9ccc9fa7b8720f496df"],["/tags/片岡とも/index.html","b11696956e79788fa64a1b05cef02091"],["/tags/牙の刻印制作委員会/index.html","4f9931c832784ccbdf1c5f2adf7f88f2"],["/tags/牛カルビ定食-FLAT/index.html","4e26990249f343f32f28097fae1f70be"],["/tags/牧尾屋/index.html","aa3eacd911979e00757b8ac11e09eb8b"],["/tags/猫猫社/index.html","abbc4170bc21d17f1cddbf35b5ca0241"],["/tags/王宮魔法劇団/index.html","00a331f4d7c897fdbc0fed29cd1fb4eb"],["/tags/画集/index.html","646fb937ba17b8e2f18a093c60a47216"],["/tags/索引/index.html","b713ad20166db1f4e7ff6d8f481bd196"],["/tags/缺失/index.html","522cb7f180fa39dc95641cecfd806a05"],["/tags/自购/index.html","9ec115b90a76392283462b9867c1b423"],["/tags/茶葉☆姫/index.html","fad0fd992a17d675240688e8764b8c26"],["/tags/郷愁花屋/index.html","312f1a2536050910671095f11869d273"],["/tags/閂夜明/index.html","b4cf9abcfd6d501f0ff62141a9325317"],["/tags/音乐美/index.html","27bf88d1e0a3c7b054494e5a7b706c77"],["/tags/黒†救/index.html","fe490687a548f89b69933f1e51fe321b"]];
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
