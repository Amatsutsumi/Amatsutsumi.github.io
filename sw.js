/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","635b120a702952830971a305bdc38ecc"],["/archives/2024/04/index.html","923211af370970f7ff2f6e2d9c7234aa"],["/archives/2024/index.html","d5c0cdc1650fa62b5fc8e8a9ec9c2536"],["/archives/2025/02/index.html","a8d78bc387a4e7eb90af40f60399242e"],["/archives/2025/02/page/2/index.html","99f596dcbae927e0feba5c9ca7b3acda"],["/archives/2025/02/page/3/index.html","86214d4f05d6e478f412481f2b319942"],["/archives/2025/02/page/4/index.html","ff04244d5b103a6b49cb1e023133d0fb"],["/archives/2025/02/page/5/index.html","5634ea875978c1aebab2b06c30b0c235"],["/archives/2025/03/index.html","f140a5922bda9d9aebdce0187ac0d11f"],["/archives/2025/03/page/2/index.html","3369bf7b39c0d9c3c19205126d097b0f"],["/archives/2025/03/page/3/index.html","852fa4d27006ee4fdd500a574128a86d"],["/archives/2025/03/page/4/index.html","0476e56e6231d5e3804f0cdceb474b7d"],["/archives/2025/03/page/5/index.html","947161b4275161e2d8ef5e4928cf5846"],["/archives/2025/03/page/6/index.html","37e45dd41c2f01508b043e957dd35ff0"],["/archives/2025/04/index.html","5be160a5fc6e239010f7e8d4b3170dd8"],["/archives/2025/index.html","3c1657cb53e04aba2bdd5d0a128b1a24"],["/archives/2025/page/10/index.html","1423b9da1d3aa1dc2b02dd1d01428c32"],["/archives/2025/page/11/index.html","759381b7a0886a0635f31c5329cc66b7"],["/archives/2025/page/12/index.html","30703f4350b6fda6f403be12f12c3e3e"],["/archives/2025/page/2/index.html","a1f8fce7f9ac464e2cde0ed96e48a8b1"],["/archives/2025/page/3/index.html","c860bb99512390a047205c040cb28d83"],["/archives/2025/page/4/index.html","d026bd56f30237d4706edd31ac806d92"],["/archives/2025/page/5/index.html","0bef2f74efc0d4b4e7282470206f7449"],["/archives/2025/page/6/index.html","b1554a041d15239af85d4f2f19a91357"],["/archives/2025/page/7/index.html","71399aec348123526f78e6353fa46a50"],["/archives/2025/page/8/index.html","61c67b3f613b932a3a3de73737d4bd53"],["/archives/2025/page/9/index.html","6db1d062add31a675093720dc2e73703"],["/archives/2026/02/index.html","3a321c7f798d743673ba2062a38dd287"],["/archives/2026/index.html","9edf002dcaa88b3151b21266ddea9bca"],["/archives/2825/04/index.html","995cdeb026e3cd5697b37115a05e3201"],["/archives/2825/index.html","2a1ef5f70634da5cf2902b44ea2eb7c2"],["/archives/2925/01/index.html","2575a469fae5a8c9099ce366409d94df"],["/archives/2925/index.html","7a34f64bab8c17d5d9b1b48bd5fac806"],["/archives/index.html","45634d25945be4b703be6dfad5e6f86e"],["/archives/page/10/index.html","c874ece3c47f7e3ddf58083c9e33937c"],["/archives/page/11/index.html","877052b60862afd53a1844d796256ed5"],["/archives/page/12/index.html","5080f45faec01e1beb427f60b693eb28"],["/archives/page/2/index.html","47d3e32b86ad47123851c48c1555f216"],["/archives/page/3/index.html","b73ab63f8a781c50e6d2f8267355d64b"],["/archives/page/4/index.html","e09dabced20ecb15d2685a679255d2ac"],["/archives/page/5/index.html","c870764e022820ee637ea4ece5d04e3a"],["/archives/page/6/index.html","8c81de988e0c7ec1d5039ab236f3797f"],["/archives/page/7/index.html","24342ea26c9171cb41e3f40925f4097f"],["/archives/page/8/index.html","2e79b53364e0af214a46ad54f5b20985"],["/archives/page/9/index.html","94915d81b5a7d59c577af8c57cc4f4e8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","b2a774a1680ef75d28a748544c3d4b6e"],["/categories/galgame/page/2/index.html","50b430f2baeb4e963cd7d29121a29f88"],["/categories/公告/index.html","2c752a856546f89747d6dd1f3c1b52cf"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","4ba8d00c3eb6c6efba0fc48330a22da0"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","ceb264acb0026f7b60cd942a77afa60f"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","4295b2570d93c6f095b6fcb9badcc9c8"],["/page/10/index.html","287b7b08cf6cc8280a9a30e44fde80be"],["/page/11/index.html","516b03e4f35e37b6ed8bdcbfa07c8f37"],["/page/12/index.html","14051f5e0227f8c2546b4604169eac55"],["/page/2/index.html","cab67e01a27b2e12cd86fc1f0e57636d"],["/page/3/index.html","72cb6f8fa8f8344494939e596133f1b2"],["/page/4/index.html","e06f4fa95d6f6a8b0ee4ee57d97e8ba9"],["/page/5/index.html","c25d69670a14b7eddb22c199f67d9325"],["/page/6/index.html","f4177a1c8d2de48525e9effc60ac7a08"],["/page/7/index.html","a46503883514f22eb527af3ff0e528a7"],["/page/8/index.html","aad9054d6f6d76988a6103bf6bab90a4"],["/page/9/index.html","222efc11a9e476ecfdee88c385e0ad7e"],["/posts/10c9dd98.html","604462c7a3e7911516500298e2114794"],["/posts/1295b569.html","5f80ab8a103c106c1fcf4ef9c2b1f9c6"],["/posts/1370342.html","e4fdf2d535813aad1f2bf76410d2aee8"],["/posts/15ef14c2.html","f58ea7ecbed9341266d3a74153aeabc9"],["/posts/15f3959d.html","876c6e25b7ab27a4e2d92073ced57378"],["/posts/18ab785d.html","6bf4e62b978d9b4b421acb6f5e9fcf27"],["/posts/1d59b71f.html","8b9412029b2910afbc9d5d611111e8ed"],["/posts/20b3f3a4.html","872e02d78d6fc46c8e7108eb0d1084ce"],["/posts/245f1c7d.html","d55f532ab2689f9493ddb56101787e73"],["/posts/252658f.html","d1e864ba13e6be5143c3a2cbc5c82132"],["/posts/28397adc.html","aceacc3c5138063e8e55d3a638f0ed8c"],["/posts/2b38bce0.html","bd5ba31eeba786edb475f2ca2836abb6"],["/posts/2c0a6836.html","7984a0923657f85b282283e0417daabe"],["/posts/2ce39bcc.html","b2b742ed678775d0c12c79ec2ba76902"],["/posts/2cf620f0.html","fbd97e24b406aa117a610f1b0c120d7e"],["/posts/2e30fd6d.html","4571cae8f8697c40569ce4691b04c55b"],["/posts/34292736.html","b572b8db9f69b9208166a82b39fa74a2"],["/posts/3468cbe.html","4a1b0ac644472d809bb4c259d8a6ffaa"],["/posts/39176dc0.html","f6e02bc95b63dc1e30213ac037c67178"],["/posts/3e118dbf.html","b308f8c46266f46825e4cee07afbfd66"],["/posts/3f7d823a.html","341c4d427749f325caa9536ae926b195"],["/posts/3f978819.html","4921c5135582adc9155fdf096d6eccda"],["/posts/43945723.html","13e18ceb77564baeadad5abb4bd1ded9"],["/posts/44124a6b.html","c210d203806e00a2b685ce2a097ca06a"],["/posts/47abb61d.html","17174e7eaa5ccb7e002add9c45b5b8f2"],["/posts/4b689be3.html","6f1c1da6294578daf3eff00791520266"],["/posts/4cf8423f.html","8a1b1360aa1b5b32ed804d0bbf77e322"],["/posts/4dcf85c.html","99dc7b5a3190d16d9e1b13c9ee8a5126"],["/posts/500cd322.html","4c90da8f964d4ac38b948e27826e728a"],["/posts/51c9b1ff.html","2bd72e2570de95e48d15fde8f8d7e8cf"],["/posts/52b5b3c6.html","d9c7f15ff8911b75326cb4cbb1edbfc7"],["/posts/5d8bea92.html","48aac6e68bb7a63e881a38e5dae20cde"],["/posts/5f6e0c59.html","6fe888b1ace042b6d20358971a956165"],["/posts/61a63a84.html","ec2c27802489993b559254a62221d7e4"],["/posts/625ab7bf.html","3ebe944c86b8963b4d636be214dbe286"],["/posts/6336a2f9.html","3b95b5d8d1b5ef9296e1fc8162191bc9"],["/posts/6432d61a.html","2766bf386853f1d70426529e2bbca499"],["/posts/6515f032.html","24bca4d7110b379c75c2e1b70c9348da"],["/posts/6720ccdd.html","6b7d499621d30ed73be037777ecdd3a4"],["/posts/6a4b5ac8.html","522e2ebf38c2d4417c00711c62e0dfe2"],["/posts/6aa4177c.html","c5c1c6e8fb6d1e5f07c288ad1c56f29b"],["/posts/6b15f81f.html","2236532cc4de1c5242e88387775068b1"],["/posts/71131d34.html","b16d65a8e9eff621338b2013d25a2003"],["/posts/78a8a8d3.html","db36813925bb0e3cd2ce7a1ce58b6877"],["/posts/7a5ef3d0.html","cca0dfbb8c97c006edb595fb50a34d6a"],["/posts/7b41e1ac.html","a2d31890633533e0f812b29a9a07e2d4"],["/posts/7b51011d.html","3c72c1d2ed5a5ecb674d732521201b33"],["/posts/7e3aa3e2.html","4f554829626038c3aacc9eb1db79404d"],["/posts/80fe2691.html","3fe76a904925ff9841135b0f31d5cdea"],["/posts/81ac52e9.html","19afb83ee92e9aa68b60f5d72dce9f87"],["/posts/82332d11.html","2090809bd849bbdfe3b0e64a271a9d44"],["/posts/8486f6f9.html","c50c02d63e9c85564d408bbcf0da9075"],["/posts/849b40f8.html","e2a040dfb4e37b9bc68ee768e86175f0"],["/posts/85c51d68.html","b701ea21e5c401bf330e9d01365b0a25"],["/posts/86a6c500.html","1fce858b01bd1fa8aacd114a15cd5803"],["/posts/886f8d3.html","3aa2c1fc43de64c2f5c51cd80fe23d34"],["/posts/8a7cba10.html","11f36005565faff9e3c4c2eed283e2a2"],["/posts/8ac11b41.html","3a8cd4a0aa24103818da314a62cc7790"],["/posts/8dd520d9.html","140ed812acbde9ca2d318d78737837dd"],["/posts/8f555654.html","e14c9faac2430dad8f68341bb1bbcfe2"],["/posts/92a980c2.html","ee4a5a219a551d14fed1b1ebe28ee148"],["/posts/92ce16.html","316846e94136c0887e664476e3488c8c"],["/posts/93e9943b.html","c7714d47072172be4f49bf688a6aa274"],["/posts/94d3c794.html","367f82164c80a5c4fff853ec82df1d9b"],["/posts/97f50eea.html","e7d49272cdd8e022d5b42c60fbb1eb9a"],["/posts/97fca8be.html","834ca5f923b3c5c8cd1beeaa1f342e99"],["/posts/98662d05.html","e4ce422b6a80734a518f5093376a8021"],["/posts/9a2f6162.html","42607d77fb7065f92daaa01d275b8b62"],["/posts/9b22a48d.html","219d5636c845b35f553b77357922bcf2"],["/posts/9cb455b1.html","94f81d254eca41ff3b3842af9ac5bf90"],["/posts/9ecdeecc.html","9a733bf2c7451217c1add183f149a5a3"],["/posts/9efd7701.html","29c19858503f8054f572db172c79041a"],["/posts/9f61c1a0.html","4944d3df59fede88e04b9c91bb32bdb1"],["/posts/a1de710.html","106a3a2b842c80a5e4f501b26d6eba66"],["/posts/a30eb0cd.html","3a05f193e82db11ec902bdebcf8333b1"],["/posts/ada3f440.html","ef2ae0d76ab7799e41a439d6257eff7c"],["/posts/af1807ef.html","e6f1e0ab74cd3ed62589bf514559367f"],["/posts/b497b647.html","dab5c9b85ebcfedc579d3bd0fe28066a"],["/posts/b4d464b0.html","04aed87a2db1898202bee46394f33234"],["/posts/b5fb773f.html","78baa35a39966c60fd5191d90806e4d5"],["/posts/b8d46b32.html","4ee1b8eeec43e2b1e846d13e70214950"],["/posts/c1b2c6c9.html","069372775247782ce7742b2568547793"],["/posts/c2111cbf.html","4b8e027704ad73c2420d7c6bbba9cb06"],["/posts/c316c2e8.html","1b341a2e7334be561da0492afdba4eea"],["/posts/c43e60b5.html","dd9e26c8cae5dc26a8b46ccb7b66e943"],["/posts/c497a412.html","ca33e53bef9c146aa9149f4721a362c6"],["/posts/c5de299a.html","36d4aa1d1c75297a5ca093b842273ff9"],["/posts/c70bba9c.html","a4683c51300b5ad37d7f0f7ddf0b08c2"],["/posts/c797535e.html","cb7de293a484c5bc9115d7ae827753bb"],["/posts/c7a62c79.html","6f9bc49469805a07ef904f7955fe97bf"],["/posts/cae2c959.html","a12b6f3c407d7070056185fdb6b232a0"],["/posts/cbebef2b.html","51f4d024e00a2e6b31a6fcda1c6e8cf5"],["/posts/ce25023e.html","fbf72dae917cf642f48cc56851c753d8"],["/posts/d2fd4837.html","5b27b752dccf97086c9e29d2e4bfd1bd"],["/posts/d3233cbb.html","e539b852367a23e455b229133ebdacf6"],["/posts/d3a745a8.html","6239f922b0ff36d9e116ca9ac1870d05"],["/posts/d7e940d2.html","3d0412ed77eb27b20cdd8d424add204e"],["/posts/dc815d5.html","ec4b01700df0dd40951b1474c961ec03"],["/posts/de25b0be.html","3a0f1711f7b1380a16f8fe52edb05c8e"],["/posts/e2623b4e.html","cf8fd48dd47e9471751c8f60b901ae0c"],["/posts/e3ab6ad8.html","330f2c5fe4b3624172b7786e8ced78f1"],["/posts/e5018da6.html","ba3d381f9bbf6757717858689769f39a"],["/posts/e5963272.html","d0d3c84b3d1a6ff870ffdbacd6491007"],["/posts/e624b065.html","ea8475ea748d35ad544c9abbcf7ae1e3"],["/posts/e7c703bb.html","a62ac47cbf34161b4f200f8e49fac60d"],["/posts/e8f14b6c.html","83937e84b5d452340a24f62b30ec7716"],["/posts/e91abb63.html","39063078449312c43b3b3f9b1e41c9f3"],["/posts/ea9a8808.html","8ffbe2eee0e0cdf843c652210df8dc01"],["/posts/eb784749.html","bbc054eaba1c8b6adee174c976354258"],["/posts/ebaf2232.html","eeb8ce21e3e02ab9d75259896e7cf9f6"],["/posts/ee1ed673.html","7cf1cbbf7a22834156f2414e1dba67ea"],["/posts/f0c3ed61.html","52a8ed1336f5885793b46ab986f32109"],["/posts/f21e7f84.html","04e3b7af3ef54c324ce4d9c4849f83f8"],["/posts/f230b0fd.html","c016505a0dad3228e015886a9fa19010"],["/posts/f663d5cc.html","a50a960e8b9885b3b15150a9bf6b85cc"],["/posts/fc04d0d4.html","aaef8dd64754ce35d6d89936cb422d9f"],["/sumire/index.html","25bf2661be63caec11867e74925be4da"],["/sw-register.js","14658bcc7b3e80b4484d5465da96e5ea"],["/tags/APPLE-project/index.html","fadf888f5e1104191a7cc2d5539a97f3"],["/tags/BELL-DA/index.html","69c0b32d5f4f8f22ae242188410cb231"],["/tags/BL-Game/index.html","d0c8dd3f09bea06fdfa267e735dfe394"],["/tags/Blue-Dahlia-Digital-Creators/index.html","00307977d1fd5fc615ccfcc0acde026a"],["/tags/CHUNSOFT/index.html","1bbb2b9c768eb4fd24f87d8525a601bb"],["/tags/Check＆Stripe/index.html","51564c47e7bdd679b83fccb7be9b6b82"],["/tags/Cherry-Pie/index.html","e4f41789ede9b40ec5275db7bf7683f7"],["/tags/Circle-Mebius/index.html","9c9f2b139dd54b8dab9f4a026df64b7f"],["/tags/CresCENT-BLANK/index.html","2382165e2a3f7e168026138f58f967b5"],["/tags/Dopamine-Software/index.html","56ac2db61d4ef7db730d4e86d0680563"],["/tags/Dos/index.html","cfd4cc7f23a33487be5d48dd214b9dfe"],["/tags/Earth-Well/index.html","3a6234165917b277c2ffd5f2e95fdb63"],["/tags/Forest/index.html","c9faf5a78d0bfc61eafb2db76a979fc4"],["/tags/Kanon/index.html","8ac7354aa5951c1e13593a4128926b21"],["/tags/MANATSU-8/index.html","25f03f7ea513ea8faf5a88fa72db3bbb"],["/tags/MARINE/index.html","940ac864390fe5c46f34dcd13f102aec"],["/tags/MIO/index.html","93df09bcc40bebf47c40273b0c2c29da"],["/tags/Nmyu/index.html","c78f20c6ad85ff08dc8aa2fbe81d2500"],["/tags/O-S-I/index.html","610c743ac159aa78cd775191aa5abab7"],["/tags/Omegaの視界/index.html","24a00e6d8db8d8720674dac848904502"],["/tags/PC88/index.html","7063e360ab8d65ac8507f1708c2e2696"],["/tags/PC98/index.html","98075eb88d755fb9c4fd5054daf31873"],["/tags/Perpetual-Room/index.html","97bc9e10266ba8d594823800657ceab1"],["/tags/Pleiades-Company/index.html","73fef7c0091acd7b64ebc9b3b0caec10"],["/tags/Project-Twintail/index.html","d395ec9947a81acb145203a2a6a11546"],["/tags/RIFF-RAFF/index.html","7422ed2c853afd078a11dd0256b311a4"],["/tags/Reverv/index.html","1db5f34df7e1fb9ef28651bdb2ecb8aa"],["/tags/SENTIVE/index.html","4467062c534c5ffc9419fd665756a614"],["/tags/Saihate-SOFT/index.html","50eee650edc3d209bae5b993ff413e29"],["/tags/Sky-On-R-imaginAtion/index.html","7767d4327e86a1705ad1bebd700046d2"],["/tags/StrayMoon/index.html","e64d59917096dfad2e2b349d01c629e3"],["/tags/Studio-Bu-Sa/index.html","6ff8a6f04be269898be1143c657eaf2f"],["/tags/ToHeart/index.html","42f87f2a86c3e41260b89d73a929e08e"],["/tags/Traumend/index.html","5672eef2bbca8822d1ad76950d8cf627"],["/tags/Witch/index.html","e611e59cf004290bdb416ca817d1d5e2"],["/tags/adonis-project/index.html","414cb1a6db268bb8539d9412a8b271f8"],["/tags/flash/index.html","cf827421069fa462c21353b6a1fad7a7"],["/tags/galgame/index.html","8b52d18b39d092666af6ed42fe4dc58c"],["/tags/galgame/page/2/index.html","1975ff00fde30e93489fa0c7a93e5049"],["/tags/gal资源/index.html","5c6e373d2ba907e67f9a818df1dafbc6"],["/tags/gal资源/page/2/index.html","dfebdf07cb4dd3e22198ce11d8834710"],["/tags/gal资源/page/3/index.html","71b75e7f7402963955177aeb98f43870"],["/tags/index.html","813a87fc19ef0f21ad44767a3c288b02"],["/tags/rkr/index.html","450200ffce58e7210ee24487c36a76d2"],["/tags/team-eye-mask/index.html","f514cc352a83b698032d5f645dc3742f"],["/tags/ありすくろいつ/index.html","1ebae0f351f1266413c93d1f62cd137c"],["/tags/いつものところ/index.html","0044de7a2f38a5e3e4e189391acef991"],["/tags/きつねみみ饅頭/index.html","e7b3c0b751d062ec5462fae8879c9eae"],["/tags/ねこねこソフト/index.html","7b869a07b82366fc69b4ca29e11972be"],["/tags/ねこバナナ/index.html","3134544bcca8271751d516fc07313453"],["/tags/はちみつくまさん/index.html","5258bf9f3d9206a3dcbf112914e3c393"],["/tags/ろりちせ/index.html","4c3ef70f02eebc539a485f93da6f324c"],["/tags/アイル【チーム・TATU】/index.html","c4049a80660a705d3e9ab46773459459"],["/tags/アークシステムワークス/index.html","cd5b75f92620619080c1f2444889af7f"],["/tags/ブロッコリー/index.html","3540cbd54946c0e9066c8c27a2796416"],["/tags/乙女/index.html","ce7f9f5f80e578ad7988a53c924dbf77"],["/tags/停产/index.html","f6137c047e8942b9bdf3165ad15bbf22"],["/tags/公告/index.html","5601520d4c4c2572ddaf6525c582292a"],["/tags/同人/index.html","25e8558ad54facaafc51a004ed4cce0e"],["/tags/堀井雄二/index.html","07d7d6871ec6a6cfa089bcd4403b4b38"],["/tags/外海なおき/index.html","fd6f976990185d02ab653981ce73bb46"],["/tags/桃野衿/index.html","f665368d06804aec6438bd68a283b619"],["/tags/機械式少女/index.html","f4d03909edeadc54d737d0c08f7f3873"],["/tags/水仙/index.html","6fa5950de572b0d9f4f3fca4cf02c8b5"],["/tags/汉化/index.html","be5b934863533c00973481e74388ca41"],["/tags/片冈智/index.html","d03e67f5c9449c2508a22622df3b3d1b"],["/tags/片岡とも/index.html","2b03402eb924869f49a4a589002f30c6"],["/tags/牙の刻印制作委員会/index.html","6781eac921123b61ab355e54f07b25c9"],["/tags/牛カルビ定食-FLAT/index.html","a7a31d6a232ba326aaf176d7914d341e"],["/tags/牧尾屋/index.html","78ad8f7319c0a007d1a3f6b81f778534"],["/tags/猫猫社/index.html","aa22c889893383cb7eb29f2674c2de42"],["/tags/王宮魔法劇団/index.html","b18f5c92c36314696ba4d33b4021d6e9"],["/tags/画集/index.html","8ce3308c81e5cfcc9fb976632ba21f39"],["/tags/索引/index.html","122799355ab2104d682492d26c9a94a2"],["/tags/缺失/index.html","8b5b271aeb20b6a7c434ad6fe91e0780"],["/tags/自购/index.html","455f4260e0fe42413e1a92e09381916d"],["/tags/茶葉☆姫/index.html","4e1c584fe1be2e51988fdb138373dae4"],["/tags/郷愁花屋/index.html","1a89514721f70349e6a550767ea3ef82"],["/tags/閂夜明/index.html","89c77902f2f358b7029094ae9f10f590"],["/tags/音乐美/index.html","c26011f392227ab3cfc45519f289321c"],["/tags/黒†救/index.html","600a796dfb62483af017f8447b37e40b"]];
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
