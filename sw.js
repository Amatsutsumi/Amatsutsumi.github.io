/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","5ac7922028e1c11c32f53e7b9cdedc18"],["/archives/2024/04/index.html","b29309eab7a128d0297c47c688db7053"],["/archives/2024/index.html","a20a1f4aad52922bfcc27a7daae5a274"],["/archives/2025/02/index.html","917cf213c11246ad2701639226f2665b"],["/archives/2025/02/page/2/index.html","65c568ed52ef6bd572c3be063a4f292a"],["/archives/2025/02/page/3/index.html","ea99b7f60b4b0bc57b45acb1d2044624"],["/archives/2025/02/page/4/index.html","827e7f055d263c911430735cc6de1be4"],["/archives/2025/02/page/5/index.html","2523a199ee1bee15fd8f4c46ffc27f15"],["/archives/2025/03/index.html","5232312cddd714fc2f39dac7bd94134a"],["/archives/2025/03/page/2/index.html","8e172be6078ee5a0feb568841df4a1c1"],["/archives/2025/03/page/3/index.html","bf5f6a63904863cc5e1ef01f01afc8d4"],["/archives/2025/03/page/4/index.html","b3d0469d2fb1773032847fea3f428098"],["/archives/2025/03/page/5/index.html","164ea61b2d3b430ff64e0704e175f772"],["/archives/2025/03/page/6/index.html","1dd847f5aaa99a528a42b701aceaad2d"],["/archives/2025/04/index.html","18f44006eda47915c2c7f28e02484d11"],["/archives/2025/04/page/2/index.html","40326c6fb77d4334072484a5ab54b2a6"],["/archives/2025/index.html","48f1288365d539ddb9a4e127c7edf147"],["/archives/2025/page/10/index.html","771b07f8bf8c9e21b408ba27908444b9"],["/archives/2025/page/11/index.html","0db155d7026a02d422b25d9295b45ff3"],["/archives/2025/page/12/index.html","8095bd7c275918506a5a101f224ea93d"],["/archives/2025/page/2/index.html","07575b2957641a4038f1c97e64884041"],["/archives/2025/page/3/index.html","b2545c7652d61fc7fb950cb7b791264b"],["/archives/2025/page/4/index.html","3944c80a277232872f8568a36b8b79d3"],["/archives/2025/page/5/index.html","3aaa4e1d714c664ff17891108055bca0"],["/archives/2025/page/6/index.html","b84401e2c8235820aeef6e7e5a8c2efd"],["/archives/2025/page/7/index.html","122787d358693474908ec3e6ff331029"],["/archives/2025/page/8/index.html","054a69c6fc636e46936edb21bf3efb1b"],["/archives/2025/page/9/index.html","fd71c31b5d76cbfeb30e8652e6316b2c"],["/archives/2026/02/index.html","d8233420fbf6a93b91b2ba829334d749"],["/archives/2026/index.html","a82b1727e5dee44b93c721ba46c05b60"],["/archives/2825/04/index.html","971572c5bd9fe6d9be2ec3ab6a88e326"],["/archives/2825/index.html","a1c785f807e7b420c9c53743224b42f7"],["/archives/2925/01/index.html","756dfa7dad7d7a220c0176abf216a674"],["/archives/2925/index.html","a974d5ae39842e8fc95cc453ce10e0bd"],["/archives/index.html","e8ab815199c28d2b14dc63df4ea661eb"],["/archives/page/10/index.html","c4051393b11219df59a9dd5114b2e3d8"],["/archives/page/11/index.html","20c737282a83d98f270ca33c2f8630d1"],["/archives/page/12/index.html","767c677963d3690b54d59bdd32b253e5"],["/archives/page/2/index.html","b3b4530c6dd76366863b7fffa463c034"],["/archives/page/3/index.html","fd8b23d4f0ae6f61d418b1bd87c445e0"],["/archives/page/4/index.html","e0e9c1129881d4b4fb415aefbcffb67f"],["/archives/page/5/index.html","fe2c084caba086bfe74abcbcf124db29"],["/archives/page/6/index.html","386a7d7e90b17a6c6452fd2a44e0e964"],["/archives/page/7/index.html","2903c2a632a8a39e304793378a077574"],["/archives/page/8/index.html","d47fd1d9d40cb3e9bbb4c0cdb81f5bba"],["/archives/page/9/index.html","aeba8845519ecd5ac90067654477b4ab"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","b137ae116bbc86eef10f2a87f4907bda"],["/categories/galgame/page/2/index.html","8b8939e8181e67a3b165e88e4e91a2e1"],["/categories/公告/index.html","67ad0f3a8c24b41b750304272ccd14bf"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","aa2aa45cc687864f1aa79d502b0a74e4"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","c8915402f889f11abbb0c0b524565655"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","e503805e371fd0b3b12d677074879f24"],["/page/10/index.html","684288840cde95b23de85b677a1ff636"],["/page/11/index.html","514e9917aedc6ddc354e38f0833520e6"],["/page/12/index.html","895c8f3f83f5cd81fad0929d53d1cce4"],["/page/2/index.html","a48dc2e1619356688f80d90dcfb47b5d"],["/page/3/index.html","a70c7749e0f4c3384a18f62c80cdbef7"],["/page/4/index.html","852f15cd0de5d4845bdd53b8a3f20531"],["/page/5/index.html","2d0a12eb38e5a9d8669acbe1cc21370d"],["/page/6/index.html","585754f50387f7b42630cba8b76724e5"],["/page/7/index.html","6516a59b0a23729737e2dca9f9f32b7e"],["/page/8/index.html","60524d2fe626783f404e428f29904255"],["/page/9/index.html","b038ac10c5d19dc36068e91cd607c010"],["/posts/10c9dd98.html","4fc4a9b1370725a15099070d4043e16d"],["/posts/1295b569.html","563758135dbf18dda4364ece728ed370"],["/posts/1370342.html","fcd7a7c9ec112868d260d7cb9b9920bb"],["/posts/15ef14c2.html","627c2103010e39ec9c374b21a9124efd"],["/posts/15f3959d.html","108690bd973c5c1bc61741624d45bcbd"],["/posts/18ab785d.html","68a931fa17c795593984834d92c3dc05"],["/posts/1d59b71f.html","ace50aee523bb974e33148f9178f784b"],["/posts/20b3f3a4.html","783dc6a3bdf2754f3d7c9ee73dad5ea9"],["/posts/245f1c7d.html","ce2df9dfd2a3815e590ff01c4c01835d"],["/posts/252658f.html","fbf114a573e047050a5bbe3c2eead235"],["/posts/28397adc.html","88a4c96b5641195e23c8f4e8d520ec3d"],["/posts/2ad07f54.html","513556863123bb722566a3771a146e65"],["/posts/2b38bce0.html","3c906bc68d0923be136cc75546894132"],["/posts/2c0a6836.html","d96dd19164147932d59274cc4464a769"],["/posts/2ce39bcc.html","ab014ef0f99753e44ad27959e56b8af9"],["/posts/2cf620f0.html","3963f2af9cd4ef818e783f48218915a6"],["/posts/2e30fd6d.html","747aed422818382a386b6858a38df8f2"],["/posts/34292736.html","104ee8c68b97c550bd05de2e1b6d85b3"],["/posts/3468cbe.html","866060274547a050c62e6e0c95ab1c20"],["/posts/39176dc0.html","fee6ddeda8c632c50517bd53a222e2e2"],["/posts/3e118dbf.html","f634d4206d802d5435cec9a969b85665"],["/posts/3f7d823a.html","f1136c70a88b50d83cef63a9bd8d51a5"],["/posts/3f978819.html","2a053142593667bb6f97ee44d97e90c7"],["/posts/43945723.html","4a5e689d88aa1f1c25e04c3c48f17824"],["/posts/44124a6b.html","5ccdcbca20332ed7c51974f133c545f7"],["/posts/47abb61d.html","256d892e14da8292afac7ca3acdb1abd"],["/posts/4b689be3.html","46c8e17f3317bbfb28d02c0314db4746"],["/posts/4cf8423f.html","196c2546393a37dbf419f5379bf773bc"],["/posts/4dcf85c.html","d6e318fdf2ec2e91e1de199bf4f9204b"],["/posts/500cd322.html","2ec83a25b0a45795bd9b29a41c2674cf"],["/posts/51c9b1ff.html","b8d2f4c4e76c3e6323c0c4a2d35d9b2c"],["/posts/52b5b3c6.html","49f4d108d5bad29693b9d1d2cec641b5"],["/posts/5d8bea92.html","316b86be5f4e30b9ef48cdae922e9912"],["/posts/5f6e0c59.html","7c5d03eef38a554a33f60da157c1adee"],["/posts/61a63a84.html","d9b2456da78560ee20ae09a8d027fcd1"],["/posts/625ab7bf.html","0263ec5f26ab064e755c7bd5b3964e76"],["/posts/6336a2f9.html","8c76600c8c639f5bd65942e08f3858b3"],["/posts/6432d61a.html","8193d9fcdbd68d12e97a7397b610db8a"],["/posts/6515f032.html","e18fc591ed2f0ee5103fbd79a4a7c0f6"],["/posts/6720ccdd.html","f3290a1653d8a8b1a612bbac2b5ec761"],["/posts/6a4b5ac8.html","03e3bcbdd3d083e24ff242b684c6a081"],["/posts/6aa4177c.html","05350adf6ce0fc5bbfc0be64dbe87e8d"],["/posts/6b15f81f.html","14cf18f30b9ded08254f630080d6d267"],["/posts/71131d34.html","c9d790ac3dc9cdd1dd8e924e2c0a693c"],["/posts/742fd48d.html","1a108dd335a040c6a8d0d8831f51d04e"],["/posts/78a8a8d3.html","b8ed607429d91c335825cb094103a4cd"],["/posts/7a5ef3d0.html","e8bb8aae2456892c6318b5ea5dd1a09a"],["/posts/7b41e1ac.html","179fa5f89e5dfdf64b316dfcdb3e9baa"],["/posts/7b51011d.html","58359a886e7edd1b139c4a786f67201a"],["/posts/7e3aa3e2.html","877015a85e5257ce591f9ff26ee018eb"],["/posts/80fe2691.html","023ecf7942ab0904f059b4eae92156bd"],["/posts/81ac52e9.html","5c1c8626c6fdd9b7512d5c260028293f"],["/posts/82332d11.html","966d4429fdd239e6542e930018d27025"],["/posts/8486f6f9.html","ff75ee6bc2cb2d2a60f9d718c104ddb8"],["/posts/849b40f8.html","aa1fa9ab653ec8124ceee7ff4b4b49c9"],["/posts/85c51d68.html","181dab81ffb99c7ac3531053875bd405"],["/posts/86a6c500.html","b20a62198a56db4f22c4285b7d9c180e"],["/posts/886f8d3.html","215b5a72cda02ed794d9b67ee2842941"],["/posts/8a7cba10.html","80c36705250f7c8c35f007d1a9d44271"],["/posts/8ac11b41.html","aed6517415b70f8b52ce694d307a56a4"],["/posts/8dd520d9.html","923ed1097170e9414140735e525f34d1"],["/posts/8f555654.html","14671c3172d9cd156da8dd80528451c9"],["/posts/92a980c2.html","03f2227c0e7961d01fd4aeab451bf7f7"],["/posts/92ce16.html","9642a68f5731fae48331b22815010556"],["/posts/93e9943b.html","739fb1c30fc372e300b8237677331dcf"],["/posts/94d3c794.html","c9cb6b0b2adb443174e08fc6121b9274"],["/posts/97f50eea.html","822b064fee4c4e6fc7256c2eaa52d24d"],["/posts/97fca8be.html","67c82c88b87c7990386ee1566a077cab"],["/posts/98662d05.html","c153099d71c27c5087406f3b565bf2db"],["/posts/9a2f6162.html","0e1354b1ff26cb43f518da7854836cc8"],["/posts/9b22a48d.html","1c53a16b62b097c7229b060fb16244f0"],["/posts/9cb455b1.html","10f3d05d87c523ebe66a923148624130"],["/posts/9ecdeecc.html","c021a7fffdc85cae0fa4824f0c9e3b61"],["/posts/9efd7701.html","f5db1bed603d82c0ae9ce10c467179be"],["/posts/9f61c1a0.html","d925d168dbcf0ce1eccccbe07106df75"],["/posts/a1de710.html","4a0fbf46eb47db96162e73f093606310"],["/posts/a30eb0cd.html","ff3accd66aead0f0a45b8b360b2e5bb6"],["/posts/ada3f440.html","43d135d437aec8753e50055fe6ff43ac"],["/posts/af1807ef.html","b01da5287d9835c61c5ce5c8a8cc53c6"],["/posts/b497b647.html","25a53c4b8dcdf1bfc6306fb357a72b6d"],["/posts/b4d464b0.html","986c76005c0b93aa617df0a64bdfda73"],["/posts/b5fb773f.html","e206fbb8abc145e865dec964fb6eff12"],["/posts/b8d46b32.html","4238dc6710907209266c5f2d570f492f"],["/posts/c1b2c6c9.html","8bb4f73cf60b23dd539b604f03098cfa"],["/posts/c2111cbf.html","15c733a12af5d0d128e513be2ea4f748"],["/posts/c316c2e8.html","ab5efb4db8924508cf4e9e3f39b5996d"],["/posts/c43e60b5.html","f66965f281a5f02fa821f381581be7aa"],["/posts/c497a412.html","06882e5a7d7e98ff327f6402214ef42a"],["/posts/c5de299a.html","c1773b036d2015204989b67d9cd0d908"],["/posts/c70bba9c.html","0089807c70aee434f25f9c1e9625dd21"],["/posts/c797535e.html","7d90caaff746b0ffd03dd53edcfa451c"],["/posts/c7a62c79.html","36aa1808bc14451ab181f7c6ef7944ea"],["/posts/cae2c959.html","bb3f50e5138155c1b1d699dea5064cb9"],["/posts/cbebef2b.html","38876402401f7bfdd475ad0473bb65d4"],["/posts/ce25023e.html","bb36bd65c23712d96dfae828829e4290"],["/posts/d2fd4837.html","7a3b56b1d50ca4abd17039a3421b944d"],["/posts/d3233cbb.html","3baef6d4708256020638637ffe0dbddc"],["/posts/d3a745a8.html","a47724e9c68e8a3fff2ad34a24c47c99"],["/posts/d7e940d2.html","deb24274d27b2528e38b8c296ee28f7d"],["/posts/dc815d5.html","1774319ebe1472a26168dde8504449d2"],["/posts/de25b0be.html","44bc50f007680df1ba9e4b31a303e874"],["/posts/e2623b4e.html","17ea05e493b7f68b3eb3f54879843efc"],["/posts/e3ab6ad8.html","2efb8786d4f40c1b2341ae8f6eada647"],["/posts/e5018da6.html","714e6541dfc650d9aeb8ab3f3a8e2db8"],["/posts/e5963272.html","8b584f35c84af0efc4767e19c2ca28e7"],["/posts/e624b065.html","e4d003ce7cae6f620b390a8bd93d514d"],["/posts/e7c703bb.html","fc75241892215a1b48807419b9ae9a83"],["/posts/e8f14b6c.html","b2eb6e5f5285b67fd5244464b9c091d4"],["/posts/e91abb63.html","7772c39a81e325860c961e2d9531a301"],["/posts/ea9a8808.html","dede2f3776528b1092b4ddb72d7533e9"],["/posts/eb784749.html","0961daba77f027086d20d5f7716f6e1e"],["/posts/ebaf2232.html","f481a08fd7531821a1c208757693f412"],["/posts/ee1ed673.html","37f70240a2612e41b2956fef13148e5e"],["/posts/f0c3ed61.html","389fe86600e666e9c2aad76d58d51afe"],["/posts/f21e7f84.html","4d8ec32066e200084e6cfbe56f2ace0c"],["/posts/f230b0fd.html","602494eec4bb7c79b9e35657fc5a10b0"],["/posts/f663d5cc.html","4751c8e43c726fec1520f3d8e338d786"],["/posts/fc04d0d4.html","c602aad09c04595324d5334c45740107"],["/sumire/index.html","78cacbbce90d29f1fd9e893c35d10412"],["/sw-register.js","e60f2becd2e298965860c3381d062e13"],["/tags/APPLE-project/index.html","041b50141c347499c56320e5a34dae40"],["/tags/BELL-DA/index.html","9d1ca25389217938212b26179edcf175"],["/tags/BL-Game/index.html","df880578c6e0c1fdfbad03eda40b08ec"],["/tags/Blue-Dahlia-Digital-Creators/index.html","7b8119e26300bed99bbf908c9a29f4e0"],["/tags/CHUNSOFT/index.html","857b4ba8052da50a8f1359cc533e6abc"],["/tags/Check＆Stripe/index.html","1a73cd2cb2179646f54aa00ac571b17a"],["/tags/Cherry-Pie/index.html","90a24b0f4a34e0cff06ea73fdebaa9df"],["/tags/Circle-Mebius/index.html","58061292f52c9663b4052138a00b6c23"],["/tags/CresCENT-BLANK/index.html","b1607e0688ef24917b6f107bcecea556"],["/tags/Dopamine-Software/index.html","865ff983f2dab95dfe9a5b6fe4440a21"],["/tags/Dos/index.html","31d21950b151e2db08ab29a559368138"],["/tags/Earth-Well/index.html","2f660ca27972bff437aaeecf8cfbf0a4"],["/tags/Forest/index.html","1118dc4a7191995aaa131530ff447bad"],["/tags/HaccaWorks/index.html","4dd621393e91add811eab843978a0745"],["/tags/Kanon/index.html","81dc02182fd5daf6fc1e03571b904d20"],["/tags/MANATSU-8/index.html","4c31be745f5359e90daf9469160d0a7a"],["/tags/MARINE/index.html","918f4cc8a51c85dbd1429365cafe8d28"],["/tags/MIO/index.html","8da5dd333b580a7abe574b918ddc1de2"],["/tags/Nmyu/index.html","b9e179c8cd43e58855063b52dca29056"],["/tags/O-S-I/index.html","3c34a4a8ce9cbc3465cd9f3beae5f5fa"],["/tags/Omegaの視界/index.html","220ce9ae3909a2123cb582fa196af9ad"],["/tags/PC88/index.html","655bbfeb0c05ada7a14bcb1c02ba1db5"],["/tags/PC98/index.html","0e8baab0631439a2bb44ccfce98d943c"],["/tags/Perpetual-Room/index.html","3cfa3574aef9448f44c9a982205d3f78"],["/tags/Pleiades-Company/index.html","26d4a8a2ff1094d88978b449d62a81a0"],["/tags/Project-Twintail/index.html","6749084eaf6b31ea9c6ee14cc9dc259e"],["/tags/RIFF-RAFF/index.html","20d7d69c7a3bdcdb383abac890fccf75"],["/tags/Reverv/index.html","f27a9e888b3a4e23a68359aa08e20c4d"],["/tags/SENTIVE/index.html","c94c0cecf87fe5fb6111008ce1dbf651"],["/tags/Saihate-SOFT/index.html","b58761681285f6931bbdff3f517a1635"],["/tags/Scrubbing/index.html","a61c05b50f36a1b4c0cde12f6ee1d6eb"],["/tags/Sky-On-R-imaginAtion/index.html","cdd2d25befdfa3ffc4e3b3a07d99305d"],["/tags/StrayMoon/index.html","e9a28774b965cacde8f74aae222eedb1"],["/tags/Studio-Bu-Sa/index.html","73c1f058658139e2edefee0473d0c86e"],["/tags/ToHeart/index.html","00bc19e13d8c12c8fed3f0de93fedb5d"],["/tags/Traumend/index.html","7320c783aa2c2da5377858b607cebd99"],["/tags/Witch/index.html","76dc42dbd046d38123e7bf1f267e77d8"],["/tags/adonis-project/index.html","0d24c6b0e7bd6015130cdf65e8b385cc"],["/tags/flash/index.html","e09c190fc2a7fa1dbfd1dd065312a5f2"],["/tags/galgame/index.html","e09e9e9847bc2f1addb54c0495ae7481"],["/tags/galgame/page/2/index.html","ae9a9a8f8dc5621b90618b3ed2f41b3c"],["/tags/gal资源/index.html","2da9cc561f8996d2cd78565b6020c413"],["/tags/gal资源/page/2/index.html","86ccd328715555f4ca7fdb541d9c2aaf"],["/tags/gal资源/page/3/index.html","b1a8a16c922a079d05151555e2ea5791"],["/tags/index.html","83fd24156cf2fb16caed70016deddb43"],["/tags/rkr/index.html","e76b2ad010cfaaa8357c0bbb4917995e"],["/tags/team-eye-mask/index.html","daba0679eb7a52cf99c2e7bf8317c6c7"],["/tags/ありすくろいつ/index.html","adb458db1f00af914b3172256733b74a"],["/tags/いつものところ/index.html","7fdd81a4a0dd3d1517fe16c106fdba1b"],["/tags/きつねみみ饅頭/index.html","0b6d8915168fa7bbb3ae9c255f3e079b"],["/tags/ねこねこソフト/index.html","08c8c38a6ea76faaa6baf78c9ad746f2"],["/tags/ねこバナナ/index.html","dffe15d30eff7e0ccd9ad1d1a424349b"],["/tags/はちみつくまさん/index.html","ab5a7a928906c26399537127d04858ed"],["/tags/ろりちせ/index.html","31aa6c46236d04308bf5225fe03d0f06"],["/tags/アイル【チーム・TATU】/index.html","ebb863a3a512f2d6118d0a1b94985e81"],["/tags/アークシステムワークス/index.html","99f16e39b557ad97a4bcf0c1f012504c"],["/tags/ブロッコリー/index.html","f15de11d6807ad461894a52125ee8450"],["/tags/乙女/index.html","6d2b2908c86f9b8bcd4baa03ee27bc60"],["/tags/停产/index.html","09122db27d2103025acc0260ebba58ee"],["/tags/公告/index.html","cb4042ad0a917855661acdc9da60c7f9"],["/tags/同人/index.html","603fc8bf571119514d04fc2da95738ea"],["/tags/堀井雄二/index.html","1a3e9eb4eee224aad59f04c2741eac04"],["/tags/外海なおき/index.html","624cd2363fd899ae17a94e477ce11a46"],["/tags/桃野衿/index.html","d764e697beaba885fc3a3d5e8b2906b3"],["/tags/機械式少女/index.html","8ec31c8b04e05b23ec772d9e152aa92c"],["/tags/水仙/index.html","862af1149b42696679c1261e608058b5"],["/tags/汉化/index.html","cf799a602f2b7f9dbf7073cd2fe05098"],["/tags/片冈智/index.html","d0a9c5aae05b125782bc8c8511b1563e"],["/tags/片岡とも/index.html","2a7de31cb480d7054fb2a54db23c0089"],["/tags/牙の刻印制作委員会/index.html","06f614d972e111da9db6cad71f1a0395"],["/tags/牛カルビ定食-FLAT/index.html","83dac782c8b42410989dde19e9aa2ca8"],["/tags/牧尾屋/index.html","ef9416dc5f70100c897fb4c31d2b2a5d"],["/tags/猫猫社/index.html","4d54cc4f705c971d58db2563ea714494"],["/tags/王宮魔法劇団/index.html","695894691241776a1c821c363b80f9c9"],["/tags/画集/index.html","f171aadde0b169a34f405d753bd1d081"],["/tags/索引/index.html","709af8fab0370c86ad52832c2496d6bb"],["/tags/缺失/index.html","62554bcc43dddb90bf3b1d5d90fd162f"],["/tags/自购/index.html","fb45b024c9ebdc37997effc055456c47"],["/tags/茶葉☆姫/index.html","e835eb89e6d1a0c1b362fe98c15c2b00"],["/tags/郷愁花屋/index.html","e0b6133fcb2df674a317451baf194b1d"],["/tags/閂夜明/index.html","be5869ea16b2a9e2c69c1d468c9653d1"],["/tags/音乐美/index.html","8c377ae193213a2df47ebece3d99f1ae"],["/tags/黒†救/index.html","63ac64faf68ecaff60651fb439b4f8d3"]];
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
