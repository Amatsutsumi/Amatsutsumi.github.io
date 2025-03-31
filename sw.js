/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","74edd98176a1b577fc7df003c9745b70"],["/archives/2024/04/index.html","402fd08bff3f6fc95e5d49a400d2c18f"],["/archives/2024/index.html","e6cd7e57c00d7a95da7bb20f959802f6"],["/archives/2025/02/index.html","1316b75964e502bc080a1512166249f4"],["/archives/2025/02/page/2/index.html","e873352b0e6c37946f84a04e93800b76"],["/archives/2025/02/page/3/index.html","e81fbdb4b79bab03fdfd0f7022855547"],["/archives/2025/02/page/4/index.html","6e99cc82a9e84cb8f5c60185cd03e7b5"],["/archives/2025/02/page/5/index.html","0232eb474171037682749313081d94cd"],["/archives/2025/03/index.html","03ce693d9569f3f7b550b943a45d7ec1"],["/archives/2025/03/page/2/index.html","c0dd88dd58234aca9e1dc482ba2596a8"],["/archives/2025/03/page/3/index.html","853e4b725c875f3894898019887732c1"],["/archives/2025/03/page/4/index.html","9e31c6eba5a25d400a34bda7b438e683"],["/archives/2025/03/page/5/index.html","a9e471a5b0aa1e337be58e990e7273f5"],["/archives/2025/03/page/6/index.html","c386ec2f19f969c819d002d6b57017ef"],["/archives/2025/index.html","052cd85f494705513e6b63dea61d426d"],["/archives/2025/page/10/index.html","3ab0f2d3e3671124fe3cc7d27bb06240"],["/archives/2025/page/11/index.html","0495b9f8dfc2ed287378119bdd6124e1"],["/archives/2025/page/2/index.html","84093526a0535c5f1b3a5eadbd7a38b8"],["/archives/2025/page/3/index.html","b142d696973ca47ca7d25494d57a5abb"],["/archives/2025/page/4/index.html","fb1f640ae3f0a53ad5cb08cab4d90cfe"],["/archives/2025/page/5/index.html","b4ede97fc400e6beb3799cb6c85727e5"],["/archives/2025/page/6/index.html","3659f8761b5fcdac31301a0893375429"],["/archives/2025/page/7/index.html","98fa208e1897d16be9b645c4fc531549"],["/archives/2025/page/8/index.html","6c5c60380b64d50abd42bf8e8475846a"],["/archives/2025/page/9/index.html","9dc9f0c215cceeaf87cb9c1642f2833e"],["/archives/2026/02/index.html","fdc24395f5d9e06c9f7e9362664aee96"],["/archives/2026/index.html","7fe553d3800180175c3193e975475754"],["/archives/2925/01/index.html","b3802f61eb870506cc48c12a8c27335a"],["/archives/2925/index.html","2080e3c46f2a7e817f5d6deb99aeb14a"],["/archives/index.html","d07ee7bdae539c3decc6272a2afc8001"],["/archives/page/10/index.html","2cb7a97b03220a5380976f923368674c"],["/archives/page/11/index.html","c9d9625f5acbef87be33a4941a9dc939"],["/archives/page/2/index.html","96429aeba1a10746703184cf932caf60"],["/archives/page/3/index.html","9ce46e409efa96f1f0cd075295d6bca6"],["/archives/page/4/index.html","d28c0288734927b36c330cac7edbbc5c"],["/archives/page/5/index.html","8445e17c4153a7729590a6f204015660"],["/archives/page/6/index.html","638ed0c9d1cc8cfbecfe3b60561de3d8"],["/archives/page/7/index.html","8ac5a3d0ae57aa06829cdc467d98a7d8"],["/archives/page/8/index.html","2121871bcbe3b46b46a08a9d05b0a069"],["/archives/page/9/index.html","54f071d6d7db18fabc08695d5e903998"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","9b4a98f2caaf19eeab5b85e40825f513"],["/categories/galgame/page/2/index.html","bedef06b0dce17a3cb0a92683893aa67"],["/categories/公告/index.html","e86068d4640b316acb7ea3ff6570206f"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","ebcfd8b3f42ea5331d15db40a0484dc0"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","708c0fe02c45d270e7febe3a047b56ce"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","626c055830c89e121601ba94576c64dc"],["/page/10/index.html","80d351a477016e617137b7e3f093b53c"],["/page/11/index.html","d0683c8eb03b38dc77b66fddab03ce02"],["/page/2/index.html","5d90c13b7ff426af524bc2f75485376b"],["/page/3/index.html","4a4711b576899b4cae959c992e0fcec7"],["/page/4/index.html","235e1c4187602fce8c4ec8cd36fce265"],["/page/5/index.html","4dfc21153e9f21b9ef8bb2a6e6a27adf"],["/page/6/index.html","15196d0e17d8b7dba84b317a1b18ba77"],["/page/7/index.html","edf3d4ea94b8d3035d9b9db862b1daf2"],["/page/8/index.html","b131f4df3c5fdb5e300e869052a1d9ff"],["/page/9/index.html","c9fddecfe22796406419c6ba5223170c"],["/posts/10c9dd98.html","a4be1606911d3645949c8c77da51954f"],["/posts/1295b569.html","a9e8c6eeff821d2b0c52eb46667444a2"],["/posts/1370342.html","b9c77e2570429a5d70ad6b4c4dd745a3"],["/posts/15ef14c2.html","d379a5b4985a4877c4e4dd4969417a3c"],["/posts/15f3959d.html","2550b5b3ddefe6d7c4e909345c59cc6f"],["/posts/18ab785d.html","90e62805f6c688f18a2f2510b81d22ac"],["/posts/1d59b71f.html","ce67e5c9eb8dbfb909aa844010934e93"],["/posts/20b3f3a4.html","e30eae844d24098c08e922a7a490390b"],["/posts/245f1c7d.html","e1282e6e3322e58608f9c14951e984d0"],["/posts/252658f.html","c246954c06e819e9a5d0bb5e8fd2e39e"],["/posts/28397adc.html","6d0db6d9dca481416497f087d1d87401"],["/posts/2b38bce0.html","e72aaad3754483b8d435d676a05a747b"],["/posts/2c0a6836.html","27769c1e856ed80d7cf85ebd4a4637f6"],["/posts/2cf620f0.html","a0114d3ecbe5ffda84f1cec25782352d"],["/posts/2e30fd6d.html","cb97164a70ccf4fd6182fdbb892e85e6"],["/posts/34292736.html","76d961fe4cd2319a1ea01d87eb4a823b"],["/posts/3468cbe.html","7717720febfd11c265fcb2bf4c3c8803"],["/posts/39176dc0.html","319ea41e55ddd697d89769b42633ece8"],["/posts/3e118dbf.html","228a345e2b70dba0e746e9e539d61ca6"],["/posts/3f7d823a.html","c9285aa62e97a527f6b4ea10924b42e0"],["/posts/3f978819.html","b63188b7dabab220aff53030972c6b5c"],["/posts/43945723.html","91484360bba6a331cbb94278ef2abb02"],["/posts/44124a6b.html","807024fa1551f20eff9513f1ad4068a3"],["/posts/47abb61d.html","a593ba343c45f4772f0bae9b937c277f"],["/posts/4b689be3.html","0da13b981992b79401f73161f84b98b5"],["/posts/4cf8423f.html","b1f72417e3160edd9910c6685756713c"],["/posts/4dcf85c.html","7eff8f4e3e534be3090e36d59f5ed15b"],["/posts/500cd322.html","1afa3a14c9117553efe90049a5b4db46"],["/posts/51c9b1ff.html","52353c27a4cf217d5fbbb2d5e2d6504b"],["/posts/52b5b3c6.html","b814cba7451cab46ae95964613fffe3e"],["/posts/5f6e0c59.html","9df3607660dc301f58a7432e48ffa560"],["/posts/61a63a84.html","580ca9a84b56e156bd46ebc1eda18dbc"],["/posts/625ab7bf.html","924eb7b0ae4146ef459e5e033ab8b179"],["/posts/6336a2f9.html","7e1fef00cac169caa9161570c7e0fc2a"],["/posts/6432d61a.html","45bebf9174f92fdf0baff96dde9784f9"],["/posts/6515f032.html","42b425882d9bbadcded92fcf038b76bc"],["/posts/6720ccdd.html","e7d62ac290106e4b6f863b2f12f76d94"],["/posts/6a4b5ac8.html","2a022a74234164d0424267370b66cd4d"],["/posts/6aa4177c.html","61ad9ef90d9547ce36b18c93fff1c7a5"],["/posts/6b15f81f.html","e514f1598dfe1a7e119092fd49cd1626"],["/posts/71131d34.html","9e6113d25f276b1cd09f871c76836ae0"],["/posts/78a8a8d3.html","fcd1cc4d42656fcdb1b65bca97267a84"],["/posts/7a5ef3d0.html","972ae3cc055daa9a6a9a11e67fba1a5f"],["/posts/7b41e1ac.html","6b1c9a3907bfb593d08d739c10d05fe8"],["/posts/7b51011d.html","866edd444c813c0d947fa33d4d3a3f56"],["/posts/7e3aa3e2.html","90dff37d90c0a4c73618fc03b7a82d5d"],["/posts/80fe2691.html","195d08dcbc3244f2932e25c960866eb7"],["/posts/81ac52e9.html","b821863d88e16c35dceaa338a00617f1"],["/posts/8486f6f9.html","94d94d6b4c5ce483b22ea617298965eb"],["/posts/849b40f8.html","4a4a528d95ded0bcdd32faee858c6669"],["/posts/85c51d68.html","0fe752c245d84e9dc454fa671f821705"],["/posts/886f8d3.html","1ba26bf9570d421c3a3c41a2d2270aa7"],["/posts/8a7cba10.html","3e17ca863a8c95d5194ffd088358c283"],["/posts/8ac11b41.html","18d27f3ca88cb994f844e19e7f0f48a2"],["/posts/8dd520d9.html","a336342f299b92f757078055730915a0"],["/posts/8f555654.html","4fc7eb04f06bbbcca93ed2c1d8d72c77"],["/posts/92a980c2.html","a3900a38667110ad2bb898d42d0b1f99"],["/posts/92ce16.html","c95973988b0b2d3ebb836a80f20567d1"],["/posts/93e9943b.html","eab879a52a571d7f949679088b9659d2"],["/posts/94d3c794.html","c620b1c78a753254c5e1f187fdd8cc5b"],["/posts/97f50eea.html","c2644dfadf77b0bc185424e0ce47e387"],["/posts/97fca8be.html","5191cc80fee3283352ac363f02862357"],["/posts/98662d05.html","475aedadd565374b0599fbb442e846c2"],["/posts/9a2f6162.html","e4309fdc3e1399f7fd24977449aea3ef"],["/posts/9b22a48d.html","8d5dfe8b55f152ae908142bab7b04be0"],["/posts/9cb455b1.html","690206c76d02ce395d917bd12784ef29"],["/posts/9ecdeecc.html","950782f1d10ea937da90c7bb01090931"],["/posts/9efd7701.html","90af2f8c3120b8b4e49fe0ff6eae5cb4"],["/posts/9f61c1a0.html","2774a2360caa73e540123b92e412bcd0"],["/posts/a1de710.html","4f6cd096d3153ffb1eed8603ce1992f0"],["/posts/af1807ef.html","08f2097900dca30c67de2bd928ac8383"],["/posts/b497b647.html","cdb49e85e8ff49718faf45c523ce57b3"],["/posts/b4d464b0.html","fb30b834c2ca45ac19e3459d5b6ba548"],["/posts/b5fb773f.html","71909334e9f261a556e3abbacf5056d0"],["/posts/b8d46b32.html","2d7216c4b27c2742143ca71826f9330d"],["/posts/c1b2c6c9.html","0532ac9f3f70adc7a900740cad325742"],["/posts/c2111cbf.html","2763ed172633baf04655be2daceaec35"],["/posts/c316c2e8.html","24614816267c6c4db59f577c89f71c76"],["/posts/c43e60b5.html","25336a10e668f0e35d63b33c0f5957bd"],["/posts/c497a412.html","19f5c652f034ab68306aaf86c049b552"],["/posts/c5de299a.html","69d8b4e76de400c7a502bff9254c96fc"],["/posts/c70bba9c.html","d35bdf91f8caaaf302cb1c17fcc5c3ce"],["/posts/c797535e.html","a9c07d272edac45e1b2cc256a485f822"],["/posts/c7a62c79.html","5a00168ea9f0c361908f15833646b6e6"],["/posts/cae2c959.html","c3e4c0972858f6c40ce3d3081de26a24"],["/posts/cbebef2b.html","d425627162e5424d672e42915f243b2a"],["/posts/ce25023e.html","951a92a375c415422260044a85066277"],["/posts/d2fd4837.html","8ca0a79ba6bf06dd43e5ca0d3e3f31ac"],["/posts/d3233cbb.html","6c1b357e72d2f9eb89df3839eb5ae3d6"],["/posts/d3a745a8.html","faff9e877e4517b97981cb53c9d0f1a3"],["/posts/dc815d5.html","a0820b263c5574c3816e329dcae5b05d"],["/posts/e3ab6ad8.html","0eb22089ec691be6aeda823c21c1a3a0"],["/posts/e5018da6.html","015c0b30dabb3ebde8ef50a130fdc5f3"],["/posts/e5963272.html","8246104e6545b75f9558e29bc3f5f80e"],["/posts/e624b065.html","533ecf79073572a1831cc1b9905db7a9"],["/posts/e7c703bb.html","61ce77a8e3add0e083d44259b466685f"],["/posts/e8f14b6c.html","91d4c65cface1a37bad9e81c728f6470"],["/posts/e91abb63.html","c9ee549d92b57db52349165f3a5a01a0"],["/posts/ea9a8808.html","a2bd70d2f85ae9743a02b7ecc7abbf25"],["/posts/ebaf2232.html","4332da7f0036c6ec8073795beb9e526c"],["/posts/ee1ed673.html","ba5facd2660bafeb9846e8b9c4ad0eed"],["/posts/f0c3ed61.html","ef371044cdecfc61e7c867cdbecf619f"],["/posts/f21e7f84.html","6e3b16d81002e612adcb0aa8b70e0ccf"],["/posts/f230b0fd.html","cb6fd970def5c4ec79bb894c4d224419"],["/posts/fc04d0d4.html","77a5e0176ae68e46fc1b03818926e75e"],["/sumire/index.html","862591fde70de06bd33bc07a21dce782"],["/sw-register.js","f7e3cc675465d32d73f9bac5b46bc220"],["/tags/APPLE-project/index.html","a33935bef8d629b70dfb2519b4d64bec"],["/tags/BELL-DA/index.html","3f83cb0b51c927bc8cdb35a4cd61d1a1"],["/tags/BL-Game/index.html","0d66a1f792cfb46b55341a83c6bfc5bc"],["/tags/Blue-Dahlia-Digital-Creators/index.html","eb5c94ddba71ab09406fa20514479388"],["/tags/CHUNSOFT/index.html","4f476bd9d3b9e47c798c3487182fc70a"],["/tags/Cherry-Pie/index.html","2dc5e7b2f0d10332d0dd7de3a9550ff2"],["/tags/Circle-Mebius/index.html","c3d06469111a265fdb1171feb60ce6b7"],["/tags/CresCENT-BLANK/index.html","e6fb5e0871da12311a038413432f2c0f"],["/tags/Dopamine-Software/index.html","3dd6a3c22b9e61feaada6653056942cb"],["/tags/Dos/index.html","be02a2444746276611ef706fb12d6525"],["/tags/Earth-Well/index.html","92403658396420a1432d6dbfe0bad969"],["/tags/Kanon/index.html","7c42d2c72a9db5875331a0e99e1b4fa4"],["/tags/MANATSU-8/index.html","8c3e1775396fea43c8c90754b7fb2f5a"],["/tags/MIO/index.html","91df4444544afcb0aa86848adc033f0c"],["/tags/Nmyu/index.html","82f4b1b7c7e60f8d488ad523fe606d24"],["/tags/O-S-I/index.html","e03c68be1e9a2d0fa60e721a86f4bf79"],["/tags/Omegaの視界/index.html","a1b70dc136e4775a27a2cda53f7384c4"],["/tags/PC88/index.html","6a44bbf8942fc8bebaac7093e7d37f8d"],["/tags/PC98/index.html","0b3a828a752574578d66d151f86ab78e"],["/tags/Perpetual-Room/index.html","53bf01d1692cb2e7d6be650891eefaa4"],["/tags/Pleiades-Company/index.html","023c426ae3a95eb162d31409b047c42c"],["/tags/Project-Twintail/index.html","2b941497149962e7989a5625b1783924"],["/tags/Reverv/index.html","fd2fbf8476479f41b62203e69d083e01"],["/tags/Saihate-SOFT/index.html","a5e8bb13766cf173a91d08d0eb1f41d8"],["/tags/StrayMoon/index.html","8d4fd624755cb92f9b17c643db0850d8"],["/tags/Studio-Bu-Sa/index.html","c1fff1fa85343092b64f3bc0919d273c"],["/tags/ToHeart/index.html","da7a2374f3ca180ca966671775853bbc"],["/tags/Traumend/index.html","350fb54928ec835942b16aa9c64f3cca"],["/tags/Witch/index.html","1e87bfd5ed63c79c765b0d383b258a60"],["/tags/adonis-project/index.html","c68b0121f03b09ddf4e8d155007bb4cb"],["/tags/flash/index.html","df3903356608feff75f60b953bca32a2"],["/tags/galgame/index.html","faa85279c7493cc1b28b58c89a1a1a8f"],["/tags/galgame/page/2/index.html","7cf5ca52a73015d0af361f2948ba5372"],["/tags/gal资源/index.html","47a84b609fcf7096c1cebc5af82f1a11"],["/tags/gal资源/page/2/index.html","5bf2adec34db043724cf9866139aaf58"],["/tags/gal资源/page/3/index.html","9f1981b3db03167c6fec0a33cf09e132"],["/tags/index.html","fccc5cca6f8dc8097b53417a67bd2ae8"],["/tags/rkr/index.html","02a9b67a5dce551636d15ff6e52e73ca"],["/tags/team-eye-mask/index.html","ccd2a8dfbeeb00b58ca80e0c69081600"],["/tags/ありすくろいつ/index.html","6728e935e02ef1b37748f829a902b037"],["/tags/いつものところ/index.html","fe502d69608e5d6bf04a90ca0079a77b"],["/tags/きつねみみ饅頭/index.html","424760392ac8d1200a6601d870323405"],["/tags/ねこねこソフト/index.html","c5908a695368d00ad07baccd78a82022"],["/tags/ねこバナナ/index.html","7ecd4d6a4965558fc057669d4bf9d7cc"],["/tags/はちみつくまさん/index.html","45162bba59a6917de2a66d5dd1840580"],["/tags/ろりちせ/index.html","a072ba11740e3165f4f948f98cd32792"],["/tags/アイル【チーム・TATU】/index.html","4c15aad88abcadb784f9cd83022afd0b"],["/tags/アークシステムワークス/index.html","a9e4670262eacf1fa661280ae05e8acb"],["/tags/ブロッコリー/index.html","310e5b0691bc593b3752277279623cd2"],["/tags/乙女/index.html","b4710b7fc7fbe79a83e996cacef2ad7c"],["/tags/停产/index.html","3066e12dc5ca6855ec6d95577449a039"],["/tags/公告/index.html","52615f340efa0059aedcdeda9e7a197a"],["/tags/同人/index.html","d7128602b7a69d45caf59a306114bc69"],["/tags/堀井雄二/index.html","25a1bb6574fa34f08d84b7a6a6891fce"],["/tags/外海なおき/index.html","db1dc2b2c3e7c389653c1cbac4e008d4"],["/tags/機械式少女/index.html","cf1b1628ead1e63770e7d3ea95b6894d"],["/tags/水仙/index.html","99a58e8b6e24d368a459786ae343c1cf"],["/tags/汉化/index.html","7229b6873a3e4776832414440d00b1c8"],["/tags/片冈智/index.html","43914917678e4b921a5ca7bdd303688c"],["/tags/片岡とも/index.html","c4ca0927fcc4542c4e4e1ff008d03f37"],["/tags/牙の刻印制作委員会/index.html","384b03371d027776acc826f50178c6ba"],["/tags/牛カルビ定食-FLAT/index.html","9ef1d63b87318edf82e44db276c20a59"],["/tags/牧尾屋/index.html","d3dd74e83c696f6ea5c9665b77c27f09"],["/tags/猫猫社/index.html","ae9eda64ab476667984034b52716ac26"],["/tags/王宮魔法劇団/index.html","55f46b8fca240f873ae863b36242d58c"],["/tags/画集/index.html","b9c10f8cf3826c073488291409e068cd"],["/tags/索引/index.html","056522d48f99e3d3e5443e2fe911c2b6"],["/tags/自购/index.html","841dd09328dac81700be2751d78bbccf"],["/tags/郷愁花屋/index.html","19abe2ed698c0cedea4c23c7975ee19e"],["/tags/閂夜明/index.html","a23533c96787b638c6b6ac658e298578"],["/tags/音乐美/index.html","a63d0b6ce36dab4158b5490408d35a4e"],["/tags/黒†救/index.html","d00cf2f27db22515ffcae5d6cf7840e4"]];
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
