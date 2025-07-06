/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","73aefa9ebb5836970afd42343b88729d"],["/archives/2024/04/index.html","57decfec2e9e64a43eab8170407419da"],["/archives/2024/index.html","068b779beb84e5c9cb7ae259203fccda"],["/archives/2025/02/index.html","5650e018c73ff457033651639e1c5a0e"],["/archives/2025/02/page/2/index.html","fc8ea290c06cc6195eb0d11e509a3bc0"],["/archives/2025/02/page/3/index.html","fcf7fa49bca9010f8dbefdb0181162d7"],["/archives/2025/02/page/4/index.html","700bd39402959ab7c746cc6bf3e6922f"],["/archives/2025/02/page/5/index.html","ac30585f414f9c490a4cd006a8281aae"],["/archives/2025/03/index.html","787fb5f77c627d542e64c41c1993153d"],["/archives/2025/03/page/2/index.html","fa839db40cb93863a100437bcc4569d0"],["/archives/2025/03/page/3/index.html","8a095150077ef1ec49493d6241f8e047"],["/archives/2025/03/page/4/index.html","c2199364139c20fdd2db0907bcf5d5b7"],["/archives/2025/03/page/5/index.html","3fc63fdecadabe4707a4c43edc88bb35"],["/archives/2025/03/page/6/index.html","5bda2cc5bd0f7b133e6bef54d33beeb5"],["/archives/2025/04/index.html","bb44c17db465b99133f54d9a585cbecb"],["/archives/2025/04/page/2/index.html","2d75745e06cc193a98463d048f62cdc4"],["/archives/2025/04/page/3/index.html","7f2844466fc255f9313a01c5f8d9fe00"],["/archives/2025/05/index.html","91983907522c367bcfb2adafc7e76aa1"],["/archives/2025/06/index.html","f131b31a8e59ac1a2ac54db4d90f5156"],["/archives/2025/index.html","99663b7f8882eb4a7f4630e982767267"],["/archives/2025/page/10/index.html","28b866c0dcc5dabcda184c5d3ed33ff3"],["/archives/2025/page/11/index.html","0d2f9860a5cb33239fc882359dfa8740"],["/archives/2025/page/12/index.html","749432a4f11717a726d76d3477e6c726"],["/archives/2025/page/13/index.html","ad38eb6f3718385b9388650cc4a6f6aa"],["/archives/2025/page/14/index.html","b1f2b635ec6b05b9d9bb488dc6c90b11"],["/archives/2025/page/15/index.html","da7411099ea7725dc8ebfe6221adb740"],["/archives/2025/page/2/index.html","0a4a44f407d9b8780a22d59d7755ff56"],["/archives/2025/page/3/index.html","1eef1b6d8e9f426fad56c578b8df9b2e"],["/archives/2025/page/4/index.html","89cd9d6aa0f266bc69680f6b14ebb9fe"],["/archives/2025/page/5/index.html","59c0e2224fd3e431e07f3ea5f8abcd38"],["/archives/2025/page/6/index.html","032f0646f34b53169e971f078c3239e5"],["/archives/2025/page/7/index.html","ec9b50adc624fe7e003c2329af6a40a0"],["/archives/2025/page/8/index.html","e638543eac267bf41672d2d4702d21d5"],["/archives/2025/page/9/index.html","40ed702cbbb5364e4d282d2736737e5f"],["/archives/2026/02/index.html","2c34eda64e6c5bf9aac8956888452a2e"],["/archives/2026/index.html","bc620ab9fb202a4d906e1b49099e0df3"],["/archives/2125/04/index.html","ad5d33c0e214d856c693b724685b07e2"],["/archives/2125/index.html","e1c209ad476975890bf3ccb141d5e11e"],["/archives/2225/07/index.html","29d5822d6dfe2bda036ef4c6023c96ef"],["/archives/2225/index.html","bfff01728d194801d121580ec57cc043"],["/archives/2925/01/index.html","8919d64eddcbca8284fe1758fceffd3e"],["/archives/2925/index.html","96560969dc4d2209eaf204534af4e508"],["/archives/index.html","eb19bcf8d17c1cc14eaedd080445a637"],["/archives/page/10/index.html","05385d7862966bce97475e2202d892c5"],["/archives/page/11/index.html","a5b69b2abc227b717f0a913800f20cb4"],["/archives/page/12/index.html","9334a2bd13f564f8b08d7c82438c6c75"],["/archives/page/13/index.html","dbb2958acc3bbe185ffa919df59be9e5"],["/archives/page/14/index.html","546f59dc577b82a9a12cbc971927c5a4"],["/archives/page/15/index.html","b8e66d08414535b487f6e156f375d5cc"],["/archives/page/2/index.html","be057ce10f5faa0a7ec28f05f6349b3d"],["/archives/page/3/index.html","a2bc8c3e6130d84e2d6d0ebeef6454b7"],["/archives/page/4/index.html","4e132d0e62f3903ba5f5236766ae3598"],["/archives/page/5/index.html","ae8b4f66f01b2ce0d806e11095df825b"],["/archives/page/6/index.html","0b5aa0a17cf643c498822bbf6467b1f4"],["/archives/page/7/index.html","aeb63e49c90927711ef864bc79b30c36"],["/archives/page/8/index.html","7af4d1c1dbf120e5977a81b1dbcd4479"],["/archives/page/9/index.html","a1dcb80ec17b5134745fd59f5dbb0995"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","aca8d33a3d6779885e21879c0dd0a5e2"],["/categories/galgame/page/2/index.html","eda50405c78e8396a4d16d70154890b3"],["/categories/公告/index.html","d53ea1d1b1b59c6485c5244476e59601"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","035fce9d0409b098c9ae922dda838a0c"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","a6ec501f18c2b59e1fee89adc57ef9da"],["/page/10/index.html","8ab83d8a00dbcbdd0cf62454aaa703f2"],["/page/11/index.html","d333a15c3c027148475b636115eddde0"],["/page/12/index.html","c4b1431c4a2d777187f500c4b72b257f"],["/page/13/index.html","f0c6f909a07fb6ea0ee9ba76d6fb52c3"],["/page/14/index.html","2540ab1ee3263e214dad2b5635f6a54d"],["/page/15/index.html","0eb0f9dc853051d4a3655c23dc352a8e"],["/page/2/index.html","58b724f16ac12bb3d22181eb544cad72"],["/page/3/index.html","6945ae9e0e998678691b6c7437d49176"],["/page/4/index.html","14064b0575025081e48cc98f9df50e2d"],["/page/5/index.html","9f90cfe0f1a67f74480d01a8da74a33c"],["/page/6/index.html","1767c11fa174f3ed94fcfd801076d5af"],["/page/7/index.html","93a76fdba548fc860ef8d7174f65abd8"],["/page/8/index.html","355365ac0df33e595d2185502dda81ad"],["/page/9/index.html","b81ff6830475292dc4f73f24e3e33fab"],["/posts/10c9dd98.html","1a8f7b00bf105d06a79b7c1ee574e750"],["/posts/1295b569.html","941ece1c9a3700a59d0f81395b0e5bcc"],["/posts/1370342.html","bb63fa1d291fd231ce288435c3f7f42e"],["/posts/15ef14c2.html","ae5fdca6e1de580af2dffd781d24ff24"],["/posts/15f3959d.html","8ad2c35e61876f45b7333dbfdafb0cf4"],["/posts/1840d617.html","1c11ac89775bb8385687ae0bc93e9653"],["/posts/18ab785d.html","bf7e791f1fa5c7d75e673c755b5928de"],["/posts/1d59b71f.html","8a064f206aa274da85d0afbacde029ca"],["/posts/1e57b380.html","0f482d57ff770ce01cae4b69857227f6"],["/posts/20b3f3a4.html","1ef0be8adbb5e10cbff7b1e408057e75"],["/posts/244daa7a.html","870432be71dcf766bded7c417d0bb672"],["/posts/245f1c7d.html","d37c5e4d5a4a9d2c6536e5eb4c831886"],["/posts/252658f.html","221c5b4a925c36376c4c4a2c9b53003a"],["/posts/28397adc.html","0914626486d36de89611c85cefd4301e"],["/posts/2ad07f54.html","15e7e79d680dffa69658bfa4617fab35"],["/posts/2b38bce0.html","2f713abeee6f77904d3401d9a5fec2f8"],["/posts/2c0a6836.html","d5625cf9cb05a06fb20a1573014acc7e"],["/posts/2ce39bcc.html","b0999e15bcb1c1fd58afdba2e9a0438d"],["/posts/2cf620f0.html","4e6c275a75ea8992a05030baf7b69834"],["/posts/2e30fd6d.html","735c5edd9fd2036417c7b000815d9aee"],["/posts/30a413ad.html","fc3ea9f918c685f24785a46a8d27e7af"],["/posts/34292736.html","f97b73ae711c42743be0d2b4e1695bba"],["/posts/3468cbe.html","09560976622ae4eaedc2457bb668dcfe"],["/posts/39176dc0.html","c6022a4f31564d3c9d6e8c8e93029b2c"],["/posts/3be6a165.html","90aa3bbd646174914487ca7e8e8db985"],["/posts/3daf73b4.html","512e26762dbd67470d8237851e9c678b"],["/posts/3e118dbf.html","e1c03e3216b85d296f4128fb1a79bd54"],["/posts/3f7d823a.html","c7a310cd7d7f9703e2a93c0ac80208eb"],["/posts/3f978819.html","1475b02bb2c30cdeecbc57e520709f7c"],["/posts/41dac80e.html","aa603cf4bea5daea53ec09c01ad20809"],["/posts/43945723.html","bf467d51940608e84fd78ca69c8b4756"],["/posts/44124a6b.html","16cf385d49b4e6772a9c3e88056a4bf3"],["/posts/476a3006.html","5914428227892d8f8195f9e15a50cee9"],["/posts/47abb61d.html","34d01ccba84d7b99db7d3660e0dd0c09"],["/posts/4996478a.html","2a6111891a9d2c4ee73bb93debe15abb"],["/posts/4b689be3.html","7c06694d3baca67eeff737fdb57bf796"],["/posts/4cf8423f.html","302f7b6b4ce9d65de62e5695727f654e"],["/posts/4dcf85c.html","969c66b8f23446d79ddadb5a854bf70a"],["/posts/500cd322.html","4832c641a0486afd2972bc1111891c65"],["/posts/51c9b1ff.html","76bd163f1bef6e999a055d0bf0b79547"],["/posts/51ce68e8.html","c3b4e8225a78c436d83159c26f15ab3b"],["/posts/52b5b3c6.html","a6364d7125a33491717af057f48f5db9"],["/posts/54f496ad.html","9d21cf3437bb886b5f57eb7c16df2a19"],["/posts/558e1f30.html","128c330d8bf5090fb1970da6084d3293"],["/posts/5d8bea92.html","acaadbf9e6e1a8a7123fd3dae64dc9d0"],["/posts/5f6e0c59.html","b4bca80468bb62c4d451a85737114191"],["/posts/61a63a84.html","4fe554b89617025f13e5b23439857506"],["/posts/625ab7bf.html","55bacd478f099ef7d1f39bf878196bbc"],["/posts/6336a2f9.html","0538c24c9047b77e0bc56e56929f6743"],["/posts/6432d61a.html","725eeacd489f42bc090cf95737152af7"],["/posts/6515f032.html","ac13ce0813846c07855fa6cd581f0ebd"],["/posts/6720ccdd.html","fa0485e051f912d90d26140e628472d0"],["/posts/6a4b5ac8.html","13aa3e0cd981e4fe6af9d22a1f958eaa"],["/posts/6aa4177c.html","3ba4cb13e6bef99871821c8cd9d3d3eb"],["/posts/6b15f81f.html","609092003cf6fa196d7b1d1a2aa53b24"],["/posts/71131d34.html","a923c1adcab6423bfe0bea0893dd2ca5"],["/posts/742fd48d.html","c2606982608ed93e485f79614246435e"],["/posts/78a8a8d3.html","8baa11f3bd3b0c7f94c2d7bc242ecc23"],["/posts/7a5ef3d0.html","d625372d808940538b3a968301f4b617"],["/posts/7b41e1ac.html","417b252a2cd3101f1fc07be17563f353"],["/posts/7b51011d.html","534b0e7c6a5d662420fdd508eab42bca"],["/posts/7e3aa3e2.html","e8a1065be0d175bdffdf68c1df38de11"],["/posts/80fe2691.html","3f567bf300f86ee22a2979ecd16381d3"],["/posts/81ac52e9.html","5efe10022d2eb02ef0c69af062ad8af7"],["/posts/82332d11.html","b27c511add85812cf4e6889ee47d8b39"],["/posts/8486f6f9.html","5005f6fc0784d188540473ae2e1c018b"],["/posts/849b40f8.html","dcffaef5b46c494c2f0512f1d8d02c53"],["/posts/85c51d68.html","c145430af10714837e6421c11ecbdad0"],["/posts/86a6c500.html","bc8d46f6f7719f1ecc16f4dbbd4d2035"],["/posts/886f8d3.html","78018646d713e007d7a5c41fda25be5b"],["/posts/8a7cba10.html","9f4dcb46428312f9c568dae6c9c64afa"],["/posts/8ac11b41.html","79567464d76e6176d9762ea1633aa18f"],["/posts/8c3f2fd8.html","bf11dd54335f79e67dc5dda9598256fa"],["/posts/8dd520d9.html","4cc1e700815b83e8084498e1f5a0b42f"],["/posts/8f555654.html","e95ca768a29aa388cd78a62571eb78de"],["/posts/92a980c2.html","b7ac7a86b695f3ec4fe02383a2be1149"],["/posts/92ce16.html","a3ddd5a69c7289f7d9ceea91e1d17554"],["/posts/93e9943b.html","f8bb4da02d25389b086aac30eb58d622"],["/posts/94d3c794.html","9180611b5bfb2380c6006f15804bdfe0"],["/posts/9606c2fe.html","131ee5ce11e258375baa894bd30291ff"],["/posts/96b281f2.html","6817050aeb93dc620da419dc9a96c2ad"],["/posts/97f50eea.html","96a0bbe11f24781e2b30751b6d1d9d64"],["/posts/97fca8be.html","6fb3187301e105f493a88b8d8aa93e8b"],["/posts/98662d05.html","8217ddfc20053a2d7e54f6898b87095d"],["/posts/9a2f6162.html","ec9d9db6c1433b7d0514092c5c78d843"],["/posts/9b22a48d.html","fc486608d89e84cb46714fc5ddb92664"],["/posts/9cb455b1.html","5de0fde888fd2b96b2f3153f934abad4"],["/posts/9ecdeecc.html","a2c5b54a1757dd76d4abbfaba1f36dd4"],["/posts/9efd7701.html","214f6d29a81fec1130b5148f177b8158"],["/posts/9f61c1a0.html","449f6c092627c1b4d0225182cb5e205e"],["/posts/a1de710.html","eb03dee4dd079db6825ef993f62989c0"],["/posts/a30eb0cd.html","2ba0eab554cc073f0605ef0cb12072b5"],["/posts/a72f71c2.html","d957815c0f2756deefdcaa9f3f65608d"],["/posts/a7634b5d.html","2ac470c846d2a31252bf086d2134e948"],["/posts/a8c593b5.html","dcda5a05ddda9c4b2e7c5d7af2b8ffcf"],["/posts/ad0c1efa.html","64c87ba79346ca5cdc4dea534e28c245"],["/posts/ada3f440.html","6df10f469e720cdd1dc3fe3b941d89b6"],["/posts/af1807ef.html","8390311bcc61616646712831e7da18bb"],["/posts/b397bf03.html","e6e61758e8a9ba8b9b7bc71a1835250c"],["/posts/b497b647.html","129f4ae5e5eaa126b11aa6858d34365f"],["/posts/b4d464b0.html","9ec8fb9fa1eacb69416c0042f67ece01"],["/posts/b5fb773f.html","9dd70dfcf1480bf248a3fbbd97856a25"],["/posts/b8d46b32.html","e5033879e374b168b376bb975e4e4793"],["/posts/c1b2c6c9.html","58616f8d2919900726ce102de782654d"],["/posts/c2111cbf.html","564550aba2a5a2326be3db8f1561798f"],["/posts/c316c2e8.html","e9e89273b52852ffaad06595684ebc19"],["/posts/c43e60b5.html","ac01478f954fc9b90bcdce4b6c11c5fd"],["/posts/c497a412.html","3605ee4efa389eee8763fd38cc7a8ad0"],["/posts/c5395ba3.html","4e01965e74c33a5cb7605bfe897893ce"],["/posts/c5de299a.html","7633818aa63b9bb4b7b0b827cb39ec3d"],["/posts/c70bba9c.html","d450166d55c4c3472b108785028d37af"],["/posts/c797535e.html","44a7451b166d7318db8c10c968d0cce0"],["/posts/c7a62c79.html","ded73866215270b547e515c0eed0f14c"],["/posts/cae2c959.html","f15de1d10fa69ab5b977f9da284a741a"],["/posts/cbebef2b.html","24ce4212aa570df445d176235084b0d0"],["/posts/cc4c0017.html","fc915a1d3d7b32c64ac918f66839b840"],["/posts/ce25023e.html","24639de62460102abfedd4ac68706d3a"],["/posts/d2fd4837.html","1a7c1369286bf0c7ad97c3cef5f5d918"],["/posts/d3233cbb.html","b5424c293d6a416676f1940b351a1176"],["/posts/d3a745a8.html","bf4a761c1c12f0672f6d1e94b97a602c"],["/posts/d7e940d2.html","1c9a14f1c15ba602ecd029d7eb217e6b"],["/posts/dc815d5.html","2382652405c7f935b363a6b673317ed1"],["/posts/de25b0be.html","b1998f8e11d2b57a9c10058541cf7148"],["/posts/e2623b4e.html","f33a454bb437eb74794dc3f384a495e7"],["/posts/e3ab6ad8.html","147e796d23a682e8dc3e2b5cec10d2ef"],["/posts/e5018da6.html","2f9ae7947fa746c83098c5e5741c28a8"],["/posts/e5963272.html","e1bb4f0ca6765dfc32035185d322a47e"],["/posts/e5ef4c3c.html","cb2da7cf5aa192954a1cc11d4bd0f8d3"],["/posts/e624b065.html","726d9facade7f48584d2adc97647bf56"],["/posts/e7c703bb.html","b75d4331467446f066ac6de6104558df"],["/posts/e8f14b6c.html","8c91cb15485e34acd9d808dfd25345c6"],["/posts/e91abb63.html","6f2cd17b1cb60da342bb7ce1cb5ed465"],["/posts/ea9a8808.html","ea7badfefc2b73ed9a86bd5c9d937006"],["/posts/eb784749.html","28d7f9b006d18bba80887263d1baef52"],["/posts/ebaf2232.html","e848ccc34775cea64f5bf09350812a5b"],["/posts/ed75f185.html","d72b4fa02d8f2a16cecd167bdf886c6a"],["/posts/ee1ed673.html","17b1cde1f65a319f97df679eebe1893b"],["/posts/f0c3ed61.html","296d9c0183d3399a91286343790fa7f5"],["/posts/f151ff43.html","57485ae2a57b06e4ff4672f6f8156f12"],["/posts/f21e7f84.html","3bb7858cab7d2ae474758646e33d3cb6"],["/posts/f230b0fd.html","2e8aac693e8141de4cf14615d54b532e"],["/posts/f28a7877.html","0d9716cc8dc384c3beb86311436f3a09"],["/posts/f663d5cc.html","a8973c7512f9c6f3bdfb3623a3e4d902"],["/posts/f730ad18.html","2f1f7d45faff3320e1370d827f972285"],["/posts/fb5d4608.html","4b6f888794a72c93227d8708a4b4a53a"],["/posts/fc04d0d4.html","ddfdc01a9ec053c6f56a0c51993c9908"],["/posts/fc455f81.html","4f869ab04171d2561607754c8ce2350b"],["/sumire/index.html","16a4c49e15dedb81f2123d0fd539272b"],["/sw-register.js","220f65f5dc88e6f50b855b086ca27e37"],["/tags/AKo/index.html","d12a7ee1de8f3767a252f1824c4cd21c"],["/tags/APPLE-project/index.html","93f8f6de27c406b218a8e4440684fff0"],["/tags/Ankrache/index.html","d26b16758e48227a80b386e26bdf5315"],["/tags/BELL-DA/index.html","f0d07d72f34932e67987e789d91e37be"],["/tags/BL-Game/index.html","013cd4e37689cc61a508b71fb1dbc4f9"],["/tags/Blue-Dahlia-Digital-Creators/index.html","2f5d121945d5708267cd517a1ad9c7f8"],["/tags/Blue-Line-Games/index.html","ae9544b994ecec623347ae43fa9844ae"],["/tags/CD/index.html","4e3e87cb93f5a016e89dc31c333e6ee0"],["/tags/CHUNSOFT/index.html","e826cc8de9138cf36dd7408368ebb945"],["/tags/Check＆Stripe/index.html","5dbdd845784843479dc9d41520178491"],["/tags/Cherry-Pie/index.html","eb079428873e3900d023542f09f6c411"],["/tags/Circle-Mebius/index.html","a2820cdff0f2061895c7251fc9115716"],["/tags/Cosmillica/index.html","88f18a85e88e7d499844d28c8d394a78"],["/tags/CresCENT-BLANK/index.html","53932840df08ce62f3fe2e7587ba7bff"],["/tags/Dopamine-Software/index.html","982e7b58148971f7e6b42271d6aa06e1"],["/tags/Dos/index.html","f98037846f754665e2ef2f1cfbac63ed"],["/tags/Earth-Well/index.html","595675495d575330c7103e98aa39bb21"],["/tags/Forest/index.html","3f5112638f5c84903a39676fed3236c5"],["/tags/HaccaWorks/index.html","d62eb18bc20b4e9a8258790e2b124e62"],["/tags/Kanon/index.html","3c42264e138bf47db3b39c1048ad7497"],["/tags/MANATSU-8/index.html","2b60f548fa7482ccefc90c44f7ec6827"],["/tags/MARINE/index.html","bb1667d548f8f154aac0f3973ebdf99a"],["/tags/MIO/index.html","253f0b97b4cf85f32eaf25603a1a8c56"],["/tags/NAOX/index.html","264aeb7815176050be1de03ed9760273"],["/tags/Namikaze-no-Uta/index.html","a86ffee6c4de57ed8f96c17d2316fd7f"],["/tags/Nmyu/index.html","2ce21ca2822bc3f425a0be617c69b5e6"],["/tags/O-S-I/index.html","bd101c4d6674a2fdc0db2bfec75c0304"],["/tags/Omegaの視界/index.html","da65e4e4d5bcbdf1a865a86eb97dbe70"],["/tags/PC88/index.html","eb7eca479b3df69cf38e5d038d337953"],["/tags/PC98/index.html","465b3234f25fe2678af9b62e68c78c9f"],["/tags/Perpetual-Room/index.html","7c28869964a23a76599714f216b6285c"],["/tags/Pleiades-Company/index.html","5443f67b4204f1ed005066ff7f8f01c8"],["/tags/Project-Twintail/index.html","d2b4c52ad630fabb48fc1135663da70b"],["/tags/RIFF-RAFF/index.html","15e4e3d3503289b90c8a637f38766bd4"],["/tags/RPG/index.html","3ed83c22aef8bd8d8bab94e6a40f48ce"],["/tags/RPG2000/index.html","2763f7719f6715fdc86608ae7306fa3b"],["/tags/Reverv/index.html","40141b45996cf42188602f149721a0b2"],["/tags/SENTIVE/index.html","57ba6538935e12137dd8ab2b53bc6a50"],["/tags/Saihate-SOFT/index.html","2b480da1784bad8f70fcb639a58d6834"],["/tags/Scrubbing/index.html","b7e64417e8c37c31e0e55f1e45218629"],["/tags/Sky-On-R-imaginAtion/index.html","488692545bc0341654f2f44c5c8e2c49"],["/tags/StrayMoon/index.html","ab7e68c7a466549e82bfea487ed33129"],["/tags/Studio-Bu-Sa/index.html","3b7a63cf50c69404ee6c441335cc8b9e"],["/tags/TRANSPARENCY/index.html","0b7a4caa8ab7e9e252e9af71428c80fb"],["/tags/TRANSPARENT/index.html","8d635608d6774c92b43f192b6e2ce925"],["/tags/ToHeart/index.html","cdc0589251c6d4f5ee2c7ba9f66aeb30"],["/tags/Traumend/index.html","19a33da81863a24c370a1dd93ffcb15b"],["/tags/Witch/index.html","95fb277c4e9740349f852501335147e7"],["/tags/adonis-project/index.html","9e456f9bfae02244962a95d50c79ba62"],["/tags/capriccio-suite/index.html","4ecdfd55f8216e78fe10312d2d6feb96"],["/tags/flash/index.html","1205556ebfb5e60680d55c0bf905a07b"],["/tags/galgame/index.html","04b20fc70a0b3587261b52b346813b82"],["/tags/galgame/page/2/index.html","9a4ca3da06ba930e9ac360bdc2e52150"],["/tags/gal资源/index.html","b14c1f702e0bdcc6d945a06ef809d03f"],["/tags/gal资源/page/2/index.html","b7cbf4604c269bdf52a40bee875bbdfb"],["/tags/gal资源/page/3/index.html","5b88186e2362dd5025a1dcb5d6395a55"],["/tags/index.html","dcda6e1800300eeb2e072b4ed4543048"],["/tags/m-kz/index.html","09d39ad6e8070930cf2caacbc1c0d2b3"],["/tags/purgatory/index.html","a089440f3381f259bf531b2483d5e2c2"],["/tags/rkr/index.html","42ebc3379256ffc7d7371dd429c2d3ce"],["/tags/team-eye-mask/index.html","e82d9875595922db9a19cbc9d6af91aa"],["/tags/ありすくろいつ/index.html","8fee88018eaab742329d501072c6821b"],["/tags/いつものところ/index.html","c94d9f196e6bae8dc41b42796f2d0f05"],["/tags/きつねみみ饅頭/index.html","ab11fe0caeaf4b91a32c2f9d76f303d1"],["/tags/ねこねこソフト/index.html","87cb0c4b629f0c837a2aaa37711dbd21"],["/tags/ねこバナナ/index.html","b2644b433b88fb7e91f92929966c91bb"],["/tags/はちみつくまさん/index.html","d096e644d1692eeb09d6d1cde5bebd03"],["/tags/ろりちせ/index.html","e6adf039d03c91426ad79eeb08a6e48d"],["/tags/アイル【チーム・TATU】/index.html","aff6b87204a9d68d244d0642d2304ebc"],["/tags/アークシステムワークス/index.html","254bc21f843ddb9acc6a2f9bcc380d77"],["/tags/デジファミ音楽堂/index.html","846a1d54c08806dc595a3bdd81bffad7"],["/tags/ブロッコリー/index.html","ce80460f71267a4bbc595682cc2a2028"],["/tags/乙女/index.html","3d3558cf4dcdd5b9add8542dad376a5d"],["/tags/乙游/index.html","31c166841902a46320d21d5d77263aa6"],["/tags/停产/index.html","fd8b4b890b4ca08a7459fb6487a3557b"],["/tags/公告/index.html","ae1e5b35136286923742faf6458edb83"],["/tags/同人/index.html","868259e05c759539a1befa681ed3012c"],["/tags/堀井雄二/index.html","01537b77d27e45237559bd2da2eeac7a"],["/tags/外海なおき/index.html","c42004e2a9fce86a0e067bff75200aa3"],["/tags/大熊猫/index.html","f245c0d92f0e5b7c1b2f8bdb881ced92"],["/tags/女性向/index.html","effa638c378f2e045145802d50a5ebe0"],["/tags/安装/index.html","e4c5340b702f848f1df48c967715d11c"],["/tags/御茶ノ水電子製作所/index.html","8609496b48966c11053c18fff9d4e073"],["/tags/月の水/index.html","487cf8c70e480ea46970412d57c9da96"],["/tags/桃野衿/index.html","f6f5abbf2ae0fb840d358b0b999fba8d"],["/tags/機械式少女/index.html","0735c6d0734d7b23ca30efedb80113b1"],["/tags/水仙/index.html","588f0e3a61e9d83b2229d3587deef40d"],["/tags/汉化/index.html","e0d1850536a9e6aecb7b308f34792af4"],["/tags/熊月温泉/index.html","4f65bd57eca12077ad109ffa7bd24b39"],["/tags/片冈智/index.html","88aa6ef4388c9653c3bcca7a4d770fd7"],["/tags/片岡とも/index.html","3cbac0fa30cc7ee7bc39647f480e7e2f"],["/tags/牙の刻印制作委員会/index.html","3d9a89b983616c5b382a50f08631f0f9"],["/tags/牛カルビ定食-FLAT/index.html","6c4e128e2e6df0771bc4fa45f6a1c7d2"],["/tags/牧尾屋/index.html","f229a1f0a6a9fe6b6be23efcc5f813be"],["/tags/犬茶屋/index.html","696cbcf972413b2cca1d1d2c0f53bdf6"],["/tags/猫猫社/index.html","acb8a4772f358db72d209cabcf623795"],["/tags/王宮魔法劇団/index.html","57038f60eb3bc1ae6c584dc90ff41964"],["/tags/画集/index.html","97bcc64ddee5e4659aa147682943fe9b"],["/tags/索引/index.html","ae6b1155ec52353af1695f631eeb8cd1"],["/tags/缺失/index.html","1468fae541a7e96bfa0ba307c2d809e8"],["/tags/自购/index.html","dcc66e1658a7ba79cf6238048d783907"],["/tags/茶葉☆姫/index.html","27dd933205afecb08b7917a490977198"],["/tags/郷愁花屋/index.html","8669f7453b958685912228d2911223f7"],["/tags/閂夜明/index.html","b92fc11fb5ae1572f7d98cf8b11c6a0d"],["/tags/音乐/index.html","ddcdd886e86b645a914ac45cc70e2191"],["/tags/音乐美/index.html","e2c5b0991597a5d8e5afd9e33902e605"],["/tags/黒†救/index.html","80f5096ad4d660e01a7f878e1b652f41"],["/tags/黒百合っ子大集合/index.html","2e3b4b89d20fc5609fdfbc33b0f57f8d"]];
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
