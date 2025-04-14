/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","5f830c6ba5f6f4b46012b72932d4e661"],["/archives/2024/04/index.html","8f6b53e054e57d2f1c03b12f41c20e17"],["/archives/2024/index.html","61dfbd4e8f43a93d57170a399cd155ec"],["/archives/2025/02/index.html","807512935d1ef6780d4a6f4fadc95085"],["/archives/2025/02/page/2/index.html","568e606e90cc7b71767feb37cadee6b7"],["/archives/2025/02/page/3/index.html","48c84b218e65b4acbb9202f1338535bb"],["/archives/2025/02/page/4/index.html","62bae040c56c7547f9305d7217ae440e"],["/archives/2025/02/page/5/index.html","7443459d5c5e96d2a61ee2b593d350f1"],["/archives/2025/03/index.html","6b90ace3649d80945a0b8b978972aea3"],["/archives/2025/03/page/2/index.html","21ddb9f8c1ed25867df86636db489ef3"],["/archives/2025/03/page/3/index.html","7d2e13c05bee6b12f63d97c8d4f44e46"],["/archives/2025/03/page/4/index.html","61d2e5300ebae102539dfe877b42f4d6"],["/archives/2025/03/page/5/index.html","585029029c93fea4127807f522d3498d"],["/archives/2025/03/page/6/index.html","64e7fb0e45d7705dbca5e3ea31dbde06"],["/archives/2025/04/index.html","a719172fd6cc21c6529260630c75594b"],["/archives/2025/index.html","87cc6b6cde3183b878e475d60879ae47"],["/archives/2025/page/10/index.html","f4d60cc83074b32956bd935557b32722"],["/archives/2025/page/11/index.html","4f0c7b8ec80ed46809fe6521c0dd9905"],["/archives/2025/page/2/index.html","4f8305955c980344ee75fda12df382f5"],["/archives/2025/page/3/index.html","d4de149aef8d4b5721f2a270d87fda42"],["/archives/2025/page/4/index.html","dae25cf024156a594231d1ed56f87c76"],["/archives/2025/page/5/index.html","8916908627ab10665e430827e942ea9c"],["/archives/2025/page/6/index.html","422b0cc67d9ef96423d99add9da521b9"],["/archives/2025/page/7/index.html","c926b8a7f57e1bcfce27ab7cdc8ea67a"],["/archives/2025/page/8/index.html","b6a6ad6daeb9b5bf26c3307f0d1192c4"],["/archives/2025/page/9/index.html","817c36bf57301b7b764465bfdda87772"],["/archives/2026/02/index.html","591c5786c11ff30dfcddc9537ab3bd53"],["/archives/2026/index.html","6fac02074b4502c473783c479fd6f6b7"],["/archives/2825/04/index.html","cf1c391ddb50c443a59f3e0d627f668e"],["/archives/2825/index.html","08112bc4cccc0fb03f6eb71fd072ea38"],["/archives/2925/01/index.html","bed75f2a09d00c581f91a4491aa0162e"],["/archives/2925/index.html","99ccb03cd7ad1b54042dca6342b9717e"],["/archives/index.html","c8dd032cd8854adbb805a509b884cb0b"],["/archives/page/10/index.html","3cccee296f5fab83304774074c4511c9"],["/archives/page/11/index.html","db30095a5a521e7946219ff27a33c82c"],["/archives/page/12/index.html","386cd49b1241872750034fbcddf7e4e3"],["/archives/page/2/index.html","ed04c3acbe8f816fba7da88f825aa99e"],["/archives/page/3/index.html","8c44652d2e0505943489a08d3e0c83cf"],["/archives/page/4/index.html","53ab7027506191ff9c81aac1a3f773ff"],["/archives/page/5/index.html","848eb22d0bf4540c29631dfbb01a4c3c"],["/archives/page/6/index.html","1ee76a551c2171e790e989399a834c4e"],["/archives/page/7/index.html","d55bbb7637f8540b60d287f35da06381"],["/archives/page/8/index.html","b63b16944c765b55d3f189a27037bbcc"],["/archives/page/9/index.html","8eb4048f20c9048dc4c298f60a4eb542"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","97bf79011b01ed8a9c29072d8322fdd6"],["/categories/galgame/page/2/index.html","90bc824a0b7207198f04fbddaaf5445e"],["/categories/公告/index.html","b628b058cbc2c0034899ff2848791ee5"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","7b7f7329757e7d6daf2de74578d38b58"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","3ad629a0a0b72153c27c61370c4f955c"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","548a861f018a9303872cadc6f54e86bb"],["/page/10/index.html","6d6abe2bb71af99a28b37c0bd4d4b04b"],["/page/11/index.html","e210ba22d77b9a80d99b156d0a7a831c"],["/page/12/index.html","e887531a5513558365ca0321aefc5662"],["/page/2/index.html","650a5bba2f54d05016797955057264da"],["/page/3/index.html","b74ba2bf1df72f93a7b0afe78223424f"],["/page/4/index.html","86db5da327905ad859c44999dd30f3db"],["/page/5/index.html","9dbbfafb8333143939d9295fa8b73d7e"],["/page/6/index.html","11283a839324894cb60acff7a6034edc"],["/page/7/index.html","d5b3b59b019cf9fa88158268c2e2fa5d"],["/page/8/index.html","6e6f233ba674c3c176ecd3a1876ee1f6"],["/page/9/index.html","bbe3ed956fccbf71ed92ddc950266e3c"],["/posts/10c9dd98.html","d04989074a509a49905cc2fb62c871ec"],["/posts/1295b569.html","ae775437cda8abd536abffdbcfcbf3da"],["/posts/1370342.html","6153652240ad4a40c4d4436e27d33d78"],["/posts/15ef14c2.html","e336df36ed9ba892cadd932b4e308074"],["/posts/15f3959d.html","e80027d3cc9fd3bdae3f10ac1b3d0936"],["/posts/18ab785d.html","4f3f67c2cae2c862950dc44b29b5b75e"],["/posts/1d59b71f.html","0b6d607ea1708e36ac63e1a77a7bebae"],["/posts/20b3f3a4.html","ddca31b82fa759b9aea51665fb610961"],["/posts/245f1c7d.html","36cb1716a944758021fb696a91cd18a9"],["/posts/252658f.html","cb3dc110144c1579a8cff61e4e973572"],["/posts/28397adc.html","0ea0398af92094cb2e515ac827666895"],["/posts/2b38bce0.html","a7676bcd979a1ba8ccd6c17b512a3358"],["/posts/2c0a6836.html","139464c3267563c3eb5d26ce4c0e5350"],["/posts/2ce39bcc.html","c18d1354732fdc8b8db63d179642962e"],["/posts/2cf620f0.html","695bdfc6cf4be1836d5474d92a5ea618"],["/posts/2e30fd6d.html","667e765920860cc23ba31fa0eda7cb7d"],["/posts/34292736.html","552cbddc2b49ae8b78b15cbd5c4f274d"],["/posts/3468cbe.html","c416537de623ac67b2ff9f1a5ef879a8"],["/posts/39176dc0.html","d8de66b53bf52a8e0eed6d6f66de7c84"],["/posts/3e118dbf.html","d70fb19da321180e821c6ea595296b70"],["/posts/3f7d823a.html","f76e7e240d91d986056a66b2785d945a"],["/posts/3f978819.html","7c91e1b408e87c1a46d7877226170dc9"],["/posts/43945723.html","7447bade7f3080fdc08ec96796b12097"],["/posts/44124a6b.html","ef27185c8da6993fde72549f70e435cb"],["/posts/47abb61d.html","5ed31b35a5a3c032dc46bceccfef87b4"],["/posts/4b689be3.html","1683485d04a78eb6cae1d3531989ea0f"],["/posts/4cf8423f.html","75af7996933fc9ec45e6faccb2450996"],["/posts/4dcf85c.html","bb220ee610ac41dec3aef8e0658f24d5"],["/posts/500cd322.html","87202e2e9bca66e8e8916f792474cc25"],["/posts/51c9b1ff.html","3bce3a7bcc6d735432c364d6b31ca878"],["/posts/52b5b3c6.html","72759d0995fad76b6b0d196e41903e5f"],["/posts/5d8bea92.html","c6da7e9c6e7895cdd195b981268b3e4e"],["/posts/5f6e0c59.html","43f2db35c02c12f0c0b7df9259c2328c"],["/posts/61a63a84.html","4c5b502312338de5bead736c00d8c597"],["/posts/625ab7bf.html","4a91de4329371fc4266a7b9205c1c260"],["/posts/6336a2f9.html","d7e1853f9a996366277afd99c13decf6"],["/posts/6432d61a.html","22afc6f07333d5433eeb3028be48edf9"],["/posts/6515f032.html","b426eb9158de0cc31b148d8693efc987"],["/posts/6720ccdd.html","63080182016d8738178b30380377257e"],["/posts/6a4b5ac8.html","94d7f4604a21555715f7075c7f1ee5c9"],["/posts/6aa4177c.html","1f34e10fd29a3276bfbbbd30f4c8e823"],["/posts/6b15f81f.html","2ab75768105af3b12afb36a986df5fe9"],["/posts/71131d34.html","875c20ba1d1ee2d6a2cade63961ba43c"],["/posts/78a8a8d3.html","cdb6997d6af8123eca0cfc0a6b36af01"],["/posts/7a5ef3d0.html","e06c49dcc210b6f4b05b2b04ab9db236"],["/posts/7b41e1ac.html","4b9d286335ecf28404f9d298a37334b8"],["/posts/7b51011d.html","3cf5496464b419a24bd670d8d99b8a96"],["/posts/7e3aa3e2.html","3c5604b3883fd3f5b261e05ccf85de4c"],["/posts/80fe2691.html","e4521261ac436735eb9ad69a59599c11"],["/posts/81ac52e9.html","c2a6bb369f7a21ca0d09683916e1b0f2"],["/posts/8486f6f9.html","e34f7df802ddbc1dee86e0ce78d83e50"],["/posts/849b40f8.html","d25dc35c5cf44c330826bb8bc7f6510a"],["/posts/85c51d68.html","0608be6da9385ccca2a72e075fda88f6"],["/posts/86a6c500.html","0eb5ea05d0d6107d78036aeda77f99a8"],["/posts/886f8d3.html","cfe8bd538dba8839649a2fbbe8c34e71"],["/posts/8a7cba10.html","7a7f69ca7fd24f2925406e5ef67767b1"],["/posts/8ac11b41.html","38a3fad2bcc4775c2346b396f6fa3dcd"],["/posts/8dd520d9.html","48e6e2ccb8e2db70af0d09803c37f76a"],["/posts/8f555654.html","f74c0eccd61bd138382113bc4a3a1f44"],["/posts/92a980c2.html","447d4972a1cabb16385133655ca309b2"],["/posts/92ce16.html","acb68c39370aff67fb44fc66d2ed6f4d"],["/posts/93e9943b.html","92a41284053dbd5e0c1b973794570c8d"],["/posts/94d3c794.html","56c0bdab0efd28be5ad57967a997fbd6"],["/posts/97f50eea.html","efe69b10dd94c248bd16b4aabc0e2983"],["/posts/97fca8be.html","e8b1cd2d42ff3e4385b262c28b913b35"],["/posts/98662d05.html","06807d64db471e5c6c31a98c5d84dbd2"],["/posts/9a2f6162.html","da3ee0bc6c3bccc678f00fd76d03ee46"],["/posts/9b22a48d.html","b1c70ca1a500ef3a57b44ef8eafba592"],["/posts/9cb455b1.html","25caed5b6bda12c2325e25a16a11cc01"],["/posts/9ecdeecc.html","02930fdf5b968b8e0bcf6748703e926f"],["/posts/9efd7701.html","0a66bfc0252864c98cdaa66aafee6990"],["/posts/9f61c1a0.html","0fdb9b83331b31c5c207f648fc750394"],["/posts/a1de710.html","daae57e5c56a93d5c4ed194d57809776"],["/posts/a30eb0cd.html","25c2b5d3b071af9dec7dedc529f81dcc"],["/posts/ada3f440.html","b0386f2c841f8e48a6afc9327d7ca1ef"],["/posts/af1807ef.html","66cda6487c86c18adec2201da2c66b5e"],["/posts/b497b647.html","939a18be24205932dfcd13629de6a5b4"],["/posts/b4d464b0.html","15afdd33753a7f01655577b1b6618d0e"],["/posts/b5fb773f.html","e7089dee94c50d7b4648fbe09b8ca595"],["/posts/b8d46b32.html","1d965d7b3f5f30d6dcbe2e65f36d35dd"],["/posts/c1b2c6c9.html","08452a12f4d3864a9ade730b2de79147"],["/posts/c2111cbf.html","d24f08682892f57a5341de8008adb4a1"],["/posts/c316c2e8.html","029f32e83bca3146dc424c2dd4904635"],["/posts/c43e60b5.html","67e008800985ceb7842168ac2e131914"],["/posts/c497a412.html","cc95610b0649a647474dcffac724b19d"],["/posts/c5de299a.html","8da0e9a5fdfd9545e5f2bd2bf77a3aa1"],["/posts/c70bba9c.html","5a239b29caa24d9d8eb42f4ba201f82e"],["/posts/c797535e.html","88852709b967bb9978dc3553809be812"],["/posts/c7a62c79.html","4eb73b39952b3fc0a03c51d00814e939"],["/posts/cae2c959.html","3e3d69221b2365e93a5c3ffb119d569c"],["/posts/cbebef2b.html","6a4888f75b3473cd850e540b7ce3dc5a"],["/posts/ce25023e.html","631a2831231a34b81e5a87d06daa403b"],["/posts/d2fd4837.html","f2c7152a898ba90c29ec786903d54370"],["/posts/d3233cbb.html","62c242e3fb2a597f44d6be532e63a8eb"],["/posts/d3a745a8.html","d2a438fee7bab9d4d810c6b5dbf5205d"],["/posts/d7e940d2.html","387d9c908230389eafce20f439064162"],["/posts/dc815d5.html","00e0912e9c604464f8e162229b3a1cb1"],["/posts/de25b0be.html","d24f27ca4357e1c578a13dd1032a44b1"],["/posts/e3ab6ad8.html","f48abd7905e0ff126d2c33e0f27f0c49"],["/posts/e5018da6.html","2ee85d13222822fb6f8834169a196e04"],["/posts/e5963272.html","e1321fb93bc5de8ff2cf60f130dee796"],["/posts/e624b065.html","cc735002cc04999a5f8854c275af2608"],["/posts/e7c703bb.html","a3591d7ccb04ad6fa70410b44cc5f2d2"],["/posts/e8f14b6c.html","806134673863a35ae72fb51105b03509"],["/posts/e91abb63.html","b69f02531ce13283e12a1a50598924ce"],["/posts/ea9a8808.html","53942f3ea515f96d070e6e7004225239"],["/posts/eb784749.html","32718af03fb1117f3dfdd842976375ee"],["/posts/ebaf2232.html","ee18712ad4dbcaee5bfb34cc1d6887b7"],["/posts/ee1ed673.html","61fb295ab157305f4f4f9f3b644506b5"],["/posts/f0c3ed61.html","bbf1c1b356b321a493d55fbb40adf24b"],["/posts/f21e7f84.html","f938711f77f5b84bdbfdcb53fd0ab346"],["/posts/f230b0fd.html","1842365cf7c8f07cbb52241dbd602417"],["/posts/f663d5cc.html","9025815f190e8de9c393f1a35e6847c4"],["/posts/fc04d0d4.html","43d33693ff16143cb41ece95a742a537"],["/sumire/index.html","6394b66a5b17fe496e06256b196f48f2"],["/sw-register.js","08004e6dcbcc752162a3c7f144b396e3"],["/tags/APPLE-project/index.html","90e82b94ffd05904ae61c2b4eb200763"],["/tags/BELL-DA/index.html","a283ca996a89d099f5c86be8904bf1fa"],["/tags/BL-Game/index.html","7cb4c9073b86312820046ddd81500915"],["/tags/Blue-Dahlia-Digital-Creators/index.html","9f6f88a7ba49ccf562caf620942ebb15"],["/tags/CHUNSOFT/index.html","28aceee22f72bdf5cc785cdb39af537b"],["/tags/Cherry-Pie/index.html","8b5bc39bc46c5ef4c0a3ab40904ff0a8"],["/tags/Circle-Mebius/index.html","962d297c731ba0bba560c03c39af7ce5"],["/tags/CresCENT-BLANK/index.html","0e5a3b28fb1a94f99bc014ebeeac7c33"],["/tags/Dopamine-Software/index.html","9f52ba572fc6baa8f6a67ccaf2398e0b"],["/tags/Dos/index.html","bab240181d01e7a175ba7359b75ead07"],["/tags/Earth-Well/index.html","a88a0a052eabaa04f690b1dec58e3689"],["/tags/Kanon/index.html","d54de1b65f56f2f2d269fe7979865e27"],["/tags/MANATSU-8/index.html","f3e80853d82773f3db10afa05f6fc759"],["/tags/MARINE/index.html","dcbdef40b70b8b47883a4a0697c606d0"],["/tags/MIO/index.html","98be9a48b672ee02f331cd7991d3e17b"],["/tags/Nmyu/index.html","e9e0dcda7ee951a392f0ba6115b63a87"],["/tags/O-S-I/index.html","525214ac81916b888a5b66c215084af1"],["/tags/Omegaの視界/index.html","87ab27cf66d8b16e402529dd2c8227a9"],["/tags/PC88/index.html","eb3f3f0548a141dfd7ea045be77ac4ec"],["/tags/PC98/index.html","69d81329922a2619232352b456d4d92f"],["/tags/Perpetual-Room/index.html","2fd203e1b9dae40ad8ee4322a2851917"],["/tags/Pleiades-Company/index.html","2308db1e85520821990ba52564f76ffa"],["/tags/Project-Twintail/index.html","c742dcec6eff37ed825c35653a76994e"],["/tags/RIFF-RAFF/index.html","22a5efdd0429428462098fb9eef74144"],["/tags/Reverv/index.html","77e11ba20fbc3e3e5f270928b68ed6b8"],["/tags/SENTIVE/index.html","6168b899347ebf37d09d2265bd23e763"],["/tags/Saihate-SOFT/index.html","bc353424fba3f90b3c063dbd06e4e8d4"],["/tags/Sky-On-R-imaginAtion/index.html","08d8c92dffa4d51938cc8a12d4bb8802"],["/tags/StrayMoon/index.html","97c2b5664f7be5328c286af396f5785e"],["/tags/Studio-Bu-Sa/index.html","27f237b96c23650b8feb2662ddcc669d"],["/tags/ToHeart/index.html","6375379987046a97571c84334b283937"],["/tags/Traumend/index.html","0b2da306d25c8a8c8dd71948d4f38799"],["/tags/Witch/index.html","8b336b3703eaef6ec82123b7f2d423ce"],["/tags/adonis-project/index.html","33a89fc8b06865d92e351bf819edfcab"],["/tags/flash/index.html","fad3cf5a42cae9af411647f5ab8207f9"],["/tags/galgame/index.html","50d562f8211d16f87e53017c70e95a50"],["/tags/galgame/page/2/index.html","93b271d5f3e261019865c5b4e14fb270"],["/tags/gal资源/index.html","7a57c4c059a750759bcefd72e688aeb5"],["/tags/gal资源/page/2/index.html","378c466b1b0e3b6e78d6ccbe1cd6bd2b"],["/tags/gal资源/page/3/index.html","bce1ef56c9501f10f09fe3541e6f3705"],["/tags/index.html","6bd500e1b895c485ed71036ec0ee28f2"],["/tags/rkr/index.html","a48e659c3af83e060f0d652a162afc69"],["/tags/team-eye-mask/index.html","843c50a9efc15c43e8f217632d9fb55a"],["/tags/ありすくろいつ/index.html","813cec5cc84d0375960236c56823ba5c"],["/tags/いつものところ/index.html","129ad6831913f609fd673cea8af0b53e"],["/tags/きつねみみ饅頭/index.html","500aafd0385206d33a69d5bb0264d72c"],["/tags/ねこねこソフト/index.html","dd9466b156d2bbb5a5c222c86f767124"],["/tags/ねこバナナ/index.html","b305b4092114dc48249fe2d94aaa103a"],["/tags/はちみつくまさん/index.html","678a512b6b5bc8ba1dc3b09a3b7d0e00"],["/tags/ろりちせ/index.html","65e11c80cd69c7377348ebe3d59761fd"],["/tags/アイル【チーム・TATU】/index.html","2f87bab71071ab5a11e3f64f527c3163"],["/tags/アークシステムワークス/index.html","7e7af90609f282bb4ee97beaa64f9e75"],["/tags/ブロッコリー/index.html","9dba9d3bb6459a6505061f5db985ec56"],["/tags/乙女/index.html","fe99769b976cb89cff3e63acd08fff7e"],["/tags/停产/index.html","b7cb9f048d1a6fe638b8a269b6dbe485"],["/tags/公告/index.html","acaf964bfbe273ad494e3f7612a3e036"],["/tags/同人/index.html","c5593e47c3949cb62c99cc5f62a2fbd8"],["/tags/堀井雄二/index.html","7378a062575c8328cd12549bd8a6d86b"],["/tags/外海なおき/index.html","f846a5d9cb50ee676256cca404764cef"],["/tags/桃野衿/index.html","9b354f94d5aa2d8c93788e0138aeb3ed"],["/tags/機械式少女/index.html","e9465536ce10ad6b34abbd302fb7eae8"],["/tags/水仙/index.html","801ad39fb066049588c51241e6b4471b"],["/tags/汉化/index.html","e6bff0ee3eba219da0efead52a8f11c2"],["/tags/片冈智/index.html","2b7c1ef1ffd438bc538211f0f6a9ad4b"],["/tags/片岡とも/index.html","97a63ba9e9fbf22b0521d1fb554e2d02"],["/tags/牙の刻印制作委員会/index.html","2a97054486005630dfcd7f6b688bee4c"],["/tags/牛カルビ定食-FLAT/index.html","b640cd9ff3e0f143f6e753265c98191e"],["/tags/牧尾屋/index.html","1708757867ff8819887562ec915d5115"],["/tags/猫猫社/index.html","502e2db4a9e0c3dd05fdf5b9eae9ed92"],["/tags/王宮魔法劇団/index.html","d3e1802b6101c65f1bab4ccc9eafc6ee"],["/tags/画集/index.html","d9eb607e94b19ec07ef9c420810f7eb5"],["/tags/索引/index.html","a949f95e96c2c6ae70e127a7df64f3f8"],["/tags/缺失/index.html","b1139c3335361854d1c93a425ed2d725"],["/tags/自购/index.html","3abe0f8671d8a7341815de99e7140a10"],["/tags/茶葉☆姫/index.html","b86fbb74f21a7766e263faced06a7fb8"],["/tags/郷愁花屋/index.html","07867ebe107d5a65a6c84d76b1bd4746"],["/tags/閂夜明/index.html","0345133767a178b747cb54fec672835f"],["/tags/音乐美/index.html","05416ea0f3c4319f8d6fb22e9bfed21a"],["/tags/黒†救/index.html","bc5d1f89fc595533bab11e631a38e29a"]];
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
