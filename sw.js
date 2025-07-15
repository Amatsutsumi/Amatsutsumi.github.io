/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","fcb9a20ee39d065b7ab2558a907abcbf"],["/archives/2024/04/index.html","018cdd9af598009ff25d837ae06dbdcf"],["/archives/2024/index.html","b32686e66f526cba9c269262b318d4f3"],["/archives/2025/02/index.html","da4c1b42c15ffcd27f4fb0951564f580"],["/archives/2025/02/page/2/index.html","214320f8dd6d885d7fa04ce5733ad0c9"],["/archives/2025/02/page/3/index.html","ae00cb0cb0dffc4803e34d7fa5b4321c"],["/archives/2025/02/page/4/index.html","ef754f4dd0348e01f3b740369e3d34b6"],["/archives/2025/02/page/5/index.html","073d5001b57b35724d7b0081fd7a72e2"],["/archives/2025/03/index.html","8f8685be5a7d33cbf6f455c244c1d7c6"],["/archives/2025/03/page/2/index.html","a6272c03896826bdb4be80b13cd34b76"],["/archives/2025/03/page/3/index.html","7e9dd68243574cfdc2947302b2a9b15f"],["/archives/2025/03/page/4/index.html","df8932f399a3d51c38adc1ed076cc626"],["/archives/2025/03/page/5/index.html","d3489fe0c6f3cb44d64c488e5b66d39c"],["/archives/2025/03/page/6/index.html","f48a5e5a6a835cc9728a71d7a3ef1e77"],["/archives/2025/04/index.html","c368925652ca79956522fc99a6b5919f"],["/archives/2025/04/page/2/index.html","4fbfee8d965e7d7728b4c2c3fc7699f3"],["/archives/2025/04/page/3/index.html","dc6caae1ac7892d000a3c93f13e3fcd9"],["/archives/2025/05/index.html","416b968bbf6b53d29298414fee935625"],["/archives/2025/06/index.html","8b0f561ef30f45175514a3f0c79335b1"],["/archives/2025/07/index.html","b5d39df3e38602e6daa1790f47f9db59"],["/archives/2025/index.html","6fdb5d8385384cf6f50faa89f752700c"],["/archives/2025/page/10/index.html","f1eed104ab60b15262223d304f5b1fa4"],["/archives/2025/page/11/index.html","ac664bfee07d8412d22a03bc61369055"],["/archives/2025/page/12/index.html","fc418a8974c1a51136dce143fa4bdcfc"],["/archives/2025/page/13/index.html","b68c6424f9115dd75bad81cb792efccd"],["/archives/2025/page/14/index.html","e4149e8f6570a69f2ff8ab506762fb92"],["/archives/2025/page/15/index.html","7705ac4e02492b6e70e0e2210b0ff14c"],["/archives/2025/page/2/index.html","77f8ccdbb6d290222438c9c2e104a5a7"],["/archives/2025/page/3/index.html","51f21ef6d9d3939b5266140f98333789"],["/archives/2025/page/4/index.html","5201e86019538a2701c2929218821156"],["/archives/2025/page/5/index.html","df8443331c7d21b2f95b26d72cf65828"],["/archives/2025/page/6/index.html","a5ab97efe38a260f31032978f9a5e7f0"],["/archives/2025/page/7/index.html","879f7b5a137f3a491ec2faefd946e9ff"],["/archives/2025/page/8/index.html","032c11929109cd7b5b1fc0cb3446c91c"],["/archives/2025/page/9/index.html","bce3e96bd4cb68cd31a3be520043889c"],["/archives/2026/02/index.html","052ce06ff5ac1d3263ade4542a790368"],["/archives/2026/index.html","93385e1498556ff7da81a793f00a785e"],["/archives/2925/01/index.html","b6f0bbdaddf764b7f75aa2f06c6ee159"],["/archives/2925/index.html","344a766a0a912c0839915da30b14aefd"],["/archives/3999/07/index.html","ff3a5773f6ac656b3799ffb966c6ad8b"],["/archives/3999/index.html","afdc7d17cf82771ccf7f69555e4c31ab"],["/archives/index.html","e8d8c04bbd24d82235c014f3321886e5"],["/archives/page/10/index.html","60652d55a70aa8a9bee7fa5bbdd80959"],["/archives/page/11/index.html","285f26c1faaa9a35d67cc6a6f1c2612a"],["/archives/page/12/index.html","870a0327393a7e9424b9e00eaeffd5ac"],["/archives/page/13/index.html","dd23ff5ce3bd4b83e7e948a6c341a00d"],["/archives/page/14/index.html","eceec5867fea5efecf77d26862065496"],["/archives/page/15/index.html","4ce3a98932ee1ebb4e0f7aca0b8cb8c1"],["/archives/page/2/index.html","88beb95c22c5a4b594eee6f306fc14ab"],["/archives/page/3/index.html","3343061611431ce1ac3fce8d65b0005b"],["/archives/page/4/index.html","3bf7172677cbc377b55cf99d6850fed7"],["/archives/page/5/index.html","29c474ecdcfa08052f96c308a67217fe"],["/archives/page/6/index.html","9992310d436715aef25df9ee36b645c5"],["/archives/page/7/index.html","9dd1a79f1e008c381126631e96db7eab"],["/archives/page/8/index.html","27a57b6cd0ea627bd2367e3d6bce4358"],["/archives/page/9/index.html","ff6aab896e6ca58312a58bead02999f7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","7289f3ecebfeb588490c24a126036577"],["/categories/galgame/page/2/index.html","228d8407f3ad6e9e73e47b455fb5ee4f"],["/categories/公告/index.html","eb6e2da55eefd11861f9d850dd18d96f"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","a7c561dc46afba34acb842fd924f9b7c"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","c1268b39ef862cfee6255595403e1611"],["/page/10/index.html","8ac8dabec8ebeb5fa9f5000857406c04"],["/page/11/index.html","f84bfe19fba0052f70232edb858f17f7"],["/page/12/index.html","263c155e1f56c4a51ebd6450bcf5df3a"],["/page/13/index.html","a311fea51afa8e976af5aed713b0f2ed"],["/page/14/index.html","2771065764db24a621b66b7a88082f0d"],["/page/15/index.html","320438e7d21e9bd1187d3ceb4a6a02b2"],["/page/2/index.html","147762c3f5c113870e4e054f8e6443e3"],["/page/3/index.html","2b913e7f99baea2f314b08bbc6aa17ab"],["/page/4/index.html","4eab8c916a975718dccbfea87669d6e6"],["/page/5/index.html","318c198c2bebd6f7868ac644655fb490"],["/page/6/index.html","673a757491a358abbf0b1fe0ebe17e48"],["/page/7/index.html","2d0e3466ebaf3a5dca8ee78b91b2dfe3"],["/page/8/index.html","6fcd42dcc8c9161e023a380314d36e49"],["/page/9/index.html","0655ebdff4b1b660ddfa8ceb53fe8581"],["/posts/10c9dd98.html","169f82042d80a81fa8af595d785d76ad"],["/posts/1295b569.html","14855f602e549934d5a35212658c0e5a"],["/posts/1370342.html","cc9d3bb3fb430aa4c7d54999f9dcab5c"],["/posts/15ef14c2.html","caf4c7a630e8852d90ea7a87f95a598b"],["/posts/15f3959d.html","248be247cb7b3eaedb70455d30a9253e"],["/posts/1840d617.html","4ee60217042b392d350429b2f00a16c6"],["/posts/18ab785d.html","06f92578eb44e1024caa96d8c0c51498"],["/posts/1d59b71f.html","9523165d75c6dc0b3bc913e29fd8cc08"],["/posts/20b3f3a4.html","ee4898619635b8c465a1d8e471925458"],["/posts/244daa7a.html","039fae1c2830193d0dff93625460f3a2"],["/posts/245f1c7d.html","a29883b57b8f3b331a2af952b92e1c4a"],["/posts/252658f.html","4c4ec1ba36b0b039a8ee8cfc773a9219"],["/posts/28397adc.html","e50bfd00ac805e30ec975ed912155a97"],["/posts/2ad07f54.html","5ececc95067d3e650d4d4e3cd8fd208a"],["/posts/2b38bce0.html","190813ae4819538c5b37b07c34033371"],["/posts/2c0a6836.html","0a2b33c0f38e258243ba5ebc370c8af0"],["/posts/2ce39bcc.html","bdbd2f44a576e3f29d87c10e51c1f395"],["/posts/2cf620f0.html","a8e04927e7c9087d8558188f95e8946e"],["/posts/2e30fd6d.html","02c3d2205bac7d3fd016f46658373219"],["/posts/30a413ad.html","d1c8c0551cc5925f9dca995902e82202"],["/posts/34292736.html","750a74e7dd0f35ef6ef60d871f59574a"],["/posts/3468cbe.html","cd99e70b17f87617d44b749e44e4fea8"],["/posts/39176dc0.html","47861acb1c2a0d38ab5a3eedb0a051ed"],["/posts/3be6a165.html","4736ae7f1652b5f76f070761185ced67"],["/posts/3daf73b4.html","04ac28e9bd70ce0084840507f9f7a5c7"],["/posts/3e118dbf.html","e821453bcfbe6d407406cab8ccb9b0b7"],["/posts/3f7d823a.html","5cbba83f499b9bad51f06d0b11491090"],["/posts/3f978819.html","73ec83cce8dfe23e6f8900495a534c15"],["/posts/41dac80e.html","e81794769f3cf09c0d4f23f8ca88f214"],["/posts/43945723.html","a80cf9a19a6cca24861e51589744f9e6"],["/posts/44124a6b.html","6c1f30c39d357c04c32c2cdc51c1344a"],["/posts/476a3006.html","0694a069c3e7927df82ad4003057cce6"],["/posts/47abb61d.html","c812a8222a3931fb59e8edc92545f6df"],["/posts/4996478a.html","1fae07f60d53db97116d03d579f31b2f"],["/posts/4b689be3.html","f8cce3ef9d18b96effc8d768591786fd"],["/posts/4cf8423f.html","aff4a2e295b22500163e71f52f8149d8"],["/posts/4dcf85c.html","14ab98c67bfb8e2a6bdd97a772afa805"],["/posts/500cd322.html","6ee54e330c92dbb2400e2d5ff5761e84"],["/posts/51c9b1ff.html","f0f734edaa3e607a2d610794c6ff83dd"],["/posts/51ce68e8.html","4379fb69fd4033c75004d45943c9c0ed"],["/posts/52b5b3c6.html","8fd8fc600cce231122697669f219539b"],["/posts/54f496ad.html","4b6845c77ab79c03e33070559c7b9543"],["/posts/558e1f30.html","a59e1c505dfb623d26065ee3c119dd56"],["/posts/5d8bea92.html","c04308950112978ba717600a65620076"],["/posts/5f6e0c59.html","c2623ee4d7c36820064d296fc38fe2b6"],["/posts/61a63a84.html","f5f64ce40f7bcfc51973b1ae329880a1"],["/posts/625ab7bf.html","b92824e679f06b8eb472c329af1f7ae6"],["/posts/6336a2f9.html","76f75daaf16398708b8c9013c6eaa4f5"],["/posts/6432d61a.html","da0425dc8d981a10a991712be59d8b7b"],["/posts/6515f032.html","d18c0ddd1c6b710b614f4e96e33809ec"],["/posts/6720ccdd.html","cb4b0a4d1e0d921444028d91c8c865e5"],["/posts/6a4b5ac8.html","add6aed83d77ddbff07d5b7fd27b94c4"],["/posts/6aa4177c.html","cd24dc07cd8bdd787677a3f257ce5375"],["/posts/6b15f81f.html","df1fc47282e73a6ae8500300e7af117b"],["/posts/71131d34.html","c43278c6c4623c2934658edd9732616a"],["/posts/742fd48d.html","1d7f9e9a6db9e555e319f2e2d097932f"],["/posts/78a8a8d3.html","3efd60706343cd8b496b64782c765b34"],["/posts/7a5ef3d0.html","339dbb2565d10cf050ee8f0be9eb0f7b"],["/posts/7b41e1ac.html","3b4cdf47350d74659c9d1284c7b37db8"],["/posts/7b51011d.html","afac5705fe96355569a3e8c684407ade"],["/posts/7e3aa3e2.html","cdc0c4caa5b75d3d3bd9288224a7a1ab"],["/posts/80fe2691.html","97c7fd3a08611bc6caf169e1206df21d"],["/posts/81ac52e9.html","e03a433745770a4f50a2075d8c54305d"],["/posts/82332d11.html","fcd604535ecf61e66b1c134009bc830d"],["/posts/8486f6f9.html","f3c20a95c5241ca10c91932b3a4dd405"],["/posts/849b40f8.html","3ae90f47edfb805e0f32cdf2b160a71c"],["/posts/85c51d68.html","72ffeb91153f5421570e028bd5a56be3"],["/posts/86a6c500.html","fbc5513a468531074e29b0cf5db1b005"],["/posts/886f8d3.html","188ab511768d080e403fa55e599458d6"],["/posts/8a7cba10.html","47f9f64e065cc0382e1785defb2d7bf2"],["/posts/8ac11b41.html","9487af9e4e8fcf494bae887c69b0a374"],["/posts/8c3f2fd8.html","684fc903a9054400283e5d6dce92b330"],["/posts/8dd520d9.html","5e3efcd127abdf3a974841b5f88eb835"],["/posts/8f555654.html","36b749ea4b8d75bf335e8541cfdc8cef"],["/posts/92a980c2.html","a7a7d656fd3f2b1b53085f79d98098a3"],["/posts/92ce16.html","5f7ed4ad945eac0a2bdfa32de142f22b"],["/posts/93e9943b.html","99b103f0f15d5376d1def771640ff2b2"],["/posts/94d3c794.html","d5672f2de419b0011c8db5d05fb2b0f2"],["/posts/9606c2fe.html","18718298f1ec4dbaa4e02a9fb9fc8b2e"],["/posts/96b281f2.html","1a2bdec6b2590ef1df7fe6f8a4aeb252"],["/posts/97f50eea.html","43f97c37d2e0a8205b7d7b52f73b3ab4"],["/posts/97fca8be.html","1a082fc6402a21750f43c74003662eb8"],["/posts/98662d05.html","20b523d392f31d066402a0acaefb742a"],["/posts/9a2f6162.html","e01b15b1207e3d4806f45aef1e02aaae"],["/posts/9b22a48d.html","f83254a1a6a4abe25548d485539615fc"],["/posts/9cb455b1.html","d03911bc7df81d4648a1390f8b6ca31a"],["/posts/9ecdeecc.html","8e88f6b300d00146052bdbb2b7070af3"],["/posts/9efd7701.html","f895f5fd84c0ff1ac024ab30180e87f6"],["/posts/9f61c1a0.html","1d8808eb78c2b06063c801816152a835"],["/posts/a1de710.html","0b7ab8be96336a76f23677aa3ffc620e"],["/posts/a30eb0cd.html","f6e2b5ce8456cbd81864fa7443701f6b"],["/posts/a72f71c2.html","20478f43a25d96b201d156e250a0cb24"],["/posts/a7634b5d.html","a94a8bde6bb4ca459dfe2d1d6aef5674"],["/posts/a8c593b5.html","5dea7ca6cd56bf46cc8c6a107f5decfb"],["/posts/ad0c1efa.html","3eb3ee578d32cded36b8169de495fbf8"],["/posts/af1807ef.html","f0e27d085207a88b4d83e79569c5e533"],["/posts/b190bc66.html","ac245077cadf0f0d4a12025529529f4c"],["/posts/b397bf03.html","25e16757c654deceef87bebae413d5c5"],["/posts/b497b647.html","8c93c704084f1e00f5ba96b5b94aaa82"],["/posts/b4d464b0.html","f94192516d33c7d927d008720f544291"],["/posts/b5fb773f.html","6239e272f06794d56451fb5f065b7758"],["/posts/b8d46b32.html","8869b2790abc20c5cd5abeb40eec2404"],["/posts/c1b2c6c9.html","0a43d5284562153940b62edc065719d1"],["/posts/c2111cbf.html","7cd1fd9bef7cefbccfecd04ea34045ca"],["/posts/c316c2e8.html","68e6d3b2e430c982600b9fd19620b871"],["/posts/c43e60b5.html","eb6649601f228c35997ae121c9d975d8"],["/posts/c497a412.html","bf423f2f467555b19bd6d1edfd14559d"],["/posts/c5395ba3.html","9ddb85eda9a19f614e850daddb51ee5e"],["/posts/c5de299a.html","9ed146e0e2e10038793c99c2ae7b646d"],["/posts/c70bba9c.html","2b42506652486f281a72332d52a6534d"],["/posts/c797535e.html","aa5db77bc016288a5807d06cf0fa73d1"],["/posts/c7a62c79.html","5fbfd62e9edc08b7a5fed2a2c68372ea"],["/posts/cae2c959.html","faeced8554255eeebdc9d5a44ee7f4cc"],["/posts/cbebef2b.html","f160b514b53663b86e7c91bbf54bdbdf"],["/posts/cc4c0017.html","d85368ad36031c9ef3f848a0445287eb"],["/posts/ce25023e.html","6ffae81b7a10e9db520ed457e8bcba6c"],["/posts/d2fd4837.html","866c48c3a3e59f429b52817f96cfa4cc"],["/posts/d3233cbb.html","fa928a3c67b69fa95ae51eb4e00b48c3"],["/posts/d3a745a8.html","11d58455f6491887f72d9dd5259c0164"],["/posts/d7e940d2.html","14d144803725c5d8974df35b9ca74cc3"],["/posts/db220b7c.html","3ad0f535540f2cdf83f7e9a772dbc138"],["/posts/dc815d5.html","a78aa7dabdf874cbf269495594c76d73"],["/posts/de25b0be.html","7db7c64ad22b764add107ae006f9708c"],["/posts/e2623b4e.html","27db4a00465aa2d80cca3ae3065c6766"],["/posts/e3ab6ad8.html","f97f3a6661e2a783573e7195a414854d"],["/posts/e5018da6.html","a4653eb1ba530cad9ad733c242354b96"],["/posts/e5963272.html","71e8498ca340d3414c92363689ed3159"],["/posts/e5ef4c3c.html","19ca79fe0105dda4715cec418efe9681"],["/posts/e624b065.html","3e092e4a5b78f1aa0cf209ab021f4e81"],["/posts/e7c703bb.html","1dbd30d6544fb99c5d6c2067e00790b2"],["/posts/e8f14b6c.html","165d5067588d53dcbec5a58cbd490700"],["/posts/e91abb63.html","93b1b2018377bf19ddc6f88e6402023a"],["/posts/ea9a8808.html","2f516c00d893c7a09761beff178f1f1f"],["/posts/eb784749.html","29cc269715d5372accfc135dd19d5b04"],["/posts/ebaf2232.html","c0fa94d3cf83f45c03e45c284063b719"],["/posts/ed75f185.html","ed5be00aeaa496e7506f49a522b5513a"],["/posts/ee1ed673.html","5c1a612ec14ac9add2086b0698a96410"],["/posts/f0c3ed61.html","e1f2c7747ea60640de0e8037f168f4e4"],["/posts/f151ff43.html","31debbc0c21b335991ccd8b571f4a1e9"],["/posts/f21e7f84.html","9c0f75e46d59ed4eb91270517c0b0205"],["/posts/f230b0fd.html","b6883f83b2cac96046f4db6dfcdc9b9d"],["/posts/f28a7877.html","fe3524ee6edc2935ea16b516afcec395"],["/posts/f663d5cc.html","a624a5c192f9edde05279f7ad560f973"],["/posts/f730ad18.html","6ef203ef66f56518c988f55e0353fa37"],["/posts/fb5d4608.html","2ab45596b9d361f68126215306c0b5c2"],["/posts/fc04d0d4.html","ec9668d3bf23eede8c36ef65fa4ca20a"],["/posts/fc455f81.html","493138f684d492717e60ed8bceff52dd"],["/sumire/index.html","31da84df4f7e99f33d3afdce4582bdfc"],["/sw-register.js","cd6b5b7235a970320e29211d91e55782"],["/tags/AKo/index.html","2bd2df887f45a06530b9de86122f5cbb"],["/tags/APPLE-project/index.html","f18280047a492f8137471bd77d1d0b02"],["/tags/Ankrache/index.html","b9efcb466f8e69d289c402b18eada85b"],["/tags/BELL-DA/index.html","c2bdd4d7c67517c54d374a46b242df63"],["/tags/BL-Game/index.html","5e01fc6587c18625c9a51a45a54a19d9"],["/tags/BL/index.html","8abc25f420c3c85ed74809b39f348af6"],["/tags/Blue-Dahlia-Digital-Creators/index.html","ae6b50a507f8343730fdc8e50c39b79d"],["/tags/Blue-Line-Games/index.html","b4643d775beb1be8c760b9a5bb428ac3"],["/tags/CD/index.html","d1838e48de83fe45adcdec19e3757fd8"],["/tags/CHUNSOFT/index.html","148c79b23df79cab9b86973d272462a2"],["/tags/Check＆Stripe/index.html","637a28edb9450b3048c50e45ced8b603"],["/tags/Cherry-Pie/index.html","b84621cefca25502695fb22bf3242b88"],["/tags/Circle-Mebius/index.html","5ea9cd7eb910ddbbb338f4cc019f7e45"],["/tags/Cosmillica/index.html","50b756e3fd8cbb0f48ad36746976af81"],["/tags/CresCENT-BLANK/index.html","64c41566ee237d1de5bdd55df43b4d5f"],["/tags/Dopamine-Software/index.html","079a5d4cc2488256ec82eb199f2ccfef"],["/tags/Dos/index.html","cde24b5a8767c18eb2ab1c6ceaca742a"],["/tags/Earth-Well/index.html","38c4b5e07ff05246985491db6256e034"],["/tags/Forest/index.html","08b1ed7b9da354c2c7d13f65999ef844"],["/tags/HaccaWorks/index.html","0851bf733ab872e220d3dbcb42ec2392"],["/tags/Kanon/index.html","ffe26cbac9d40aa48dd2454258c449f6"],["/tags/MANATSU-8/index.html","af34ec67f203131b6e05bfa3f594f343"],["/tags/MARINE/index.html","2d1623e6655af189a8f16b1f5fb3660e"],["/tags/MIO/index.html","8ea3ec84a1b42f585b057e6f7ff11504"],["/tags/NAOX/index.html","2fc16a679a112471b5f3f56d290bcee0"],["/tags/Namikaze-no-Uta/index.html","62d4fc26555133bc0bf7a1a8f3221559"],["/tags/Nmyu/index.html","af2e72d164fc79496b2f8f451f15bf34"],["/tags/O-S-I/index.html","40d18b68a0af4be4304376dd4e0b45c4"],["/tags/Omegaの視界/index.html","ea21fac16bf9456ca4297f195de00c22"],["/tags/PC88/index.html","5bef4eb7a59b572c5055cd6284f949ac"],["/tags/PC98/index.html","80941616ac2e6a8ef7ee8ce5f3892897"],["/tags/Perpetual-Room/index.html","4198948742db7db597566e74307c87b1"],["/tags/Pleiades-Company/index.html","f8064e2cba13f7543ea59be46125a18f"],["/tags/Project-Twintail/index.html","4e520acdc363958949b2385c41380901"],["/tags/RIFF-RAFF/index.html","681c84814413661f2bf9e60470d24f4b"],["/tags/RPG/index.html","badc46d962ddb2036099bb7485d6453e"],["/tags/RPG2000/index.html","206cd08fbf4228d4bac667fc083ce1f3"],["/tags/Reverv/index.html","646954a23aebcf1e381360c9a6274ca3"],["/tags/SENTIVE/index.html","e3b583d7d35e5cc0e1889528d845734f"],["/tags/Saihate-SOFT/index.html","5222fedf28aa8c19cf5d33c8d50fb224"],["/tags/Scrubbing/index.html","4c9cd59e0876310137d071cdb2d48add"],["/tags/Sky-On-R-imaginAtion/index.html","eb5d59b135b65c83caccd9f4736d4672"],["/tags/StrayMoon/index.html","fb971615e35cf8292d10e50c033dd132"],["/tags/Studio-Bu-Sa/index.html","326f337fe51933616b45518a8237daad"],["/tags/TRANSPARENCY/index.html","c92c6f528e7ad79d6248deaf4096e9cf"],["/tags/TRANSPARENT/index.html","879bd1ce3281c9c834ebea9d4f1de1f6"],["/tags/ToHeart/index.html","5fb11e2706a79177b822ae464826ac47"],["/tags/Traumend/index.html","ee34557787d6a3e89a4a43ca167dbffc"],["/tags/Witch/index.html","02333d3ec14e0f6cb63935ed73dda83b"],["/tags/adonis-project/index.html","0aca70a3a7a9c0f5ef85fef41fdd87b1"],["/tags/capriccio-suite/index.html","62db041c1fc579ceaf58afdbe2a2eb06"],["/tags/eclipse65/index.html","5460ac3bed7dbbaa640128763148f6c2"],["/tags/flash/index.html","9a2c61dadbb751b4474e94d813c08b02"],["/tags/galgame/index.html","b15121208960a618b1f02b184e212725"],["/tags/galgame/page/2/index.html","55d186ac4a1c647c6961362abc44e167"],["/tags/gal资源/index.html","a46d05f08f7eb52edf3b6603e4d407a9"],["/tags/gal资源/page/2/index.html","88ddf76f0ccb31cf29320a04437038e7"],["/tags/gal资源/page/3/index.html","e31073186b329e9346ea25c18a006273"],["/tags/index.html","eb9e573bbe3e6919fcb136f6b86ffafb"],["/tags/m-kz/index.html","c84ff0b17a0691a8b7096a8c77414ddb"],["/tags/purgatory/index.html","e5f4d3307f7081caacf58896f5a941f4"],["/tags/rkr/index.html","5d5776c0c0eee73c4a272caa892a4806"],["/tags/team-eye-mask/index.html","47790254aef405d0df7064b6a8b85ad3"],["/tags/ありすくろいつ/index.html","b62176d274c2701ae4267cdb4a2a10ae"],["/tags/いつものところ/index.html","d08ad615c5ae7ff3a00169f26a20d07b"],["/tags/きつねみみ饅頭/index.html","c58cc862fef4bff3880841c840c5dce8"],["/tags/ねこねこソフト/index.html","02fb29fca48055129ae956051e402aba"],["/tags/ねこバナナ/index.html","d99500a38e060edc92f45869560598d7"],["/tags/はちみつくまさん/index.html","18235db958b3f2e0cfe122a238b4cfc2"],["/tags/ろりちせ/index.html","b77fd297f86771c07793b0b3419e189c"],["/tags/アイル【チーム・TATU】/index.html","9ffff4e3005bd9ad3d561288dca95443"],["/tags/アークシステムワークス/index.html","d5e6f26437d792e67c213712fa6cf3e8"],["/tags/デジファミ音楽堂/index.html","b15d82ba0196b5eb2487fc8ed210e1b8"],["/tags/ブロッコリー/index.html","306edff0891d51cfc39cd1373b7bf020"],["/tags/乙女/index.html","87f387a3e1a4df671128c589d0ec4440"],["/tags/乙游/index.html","88520a66451e209f540c2cad51897926"],["/tags/停产/index.html","2129487db0b4470f10d9f7ae2e2fb33b"],["/tags/公告/index.html","5aab2b45cd406c292a746036fcacabcb"],["/tags/同人/index.html","2f64a91fe5db4b1760c5cce4f04e76b2"],["/tags/堀井雄二/index.html","6a3b8635236c708339d8e52752db0ae1"],["/tags/外海なおき/index.html","7100c19bba780cac535f9a97a75edd03"],["/tags/大熊猫/index.html","f11aa86a751f4bbde5a0d50746eb48f6"],["/tags/女性向/index.html","5d50642ea2418bf837ad10e019d16993"],["/tags/安装/index.html","9b9b7d7faa9cbfcc63eaf6ee185fa0ab"],["/tags/御茶ノ水電子製作所/index.html","252dadc46310f0912ea27ca4d83e7600"],["/tags/月の水/index.html","0591b9941a08b524593f13e068f020ce"],["/tags/桃野衿/index.html","456b022b529b631043ac32f80af2239d"],["/tags/機械式少女/index.html","f885383eef378593096ff3458d0b03ba"],["/tags/水仙/index.html","129ae57ae0881b687a3392f64dc73f9f"],["/tags/汉化/index.html","737ca0051b65f871e4b220b5bbf20908"],["/tags/熊月温泉/index.html","2e7fdc027f43d672f7928697581d3227"],["/tags/片冈智/index.html","3866679d67bcc94d959a1d74cf5b3bc8"],["/tags/片岡とも/index.html","0804f308ceb01719455a687cb3fa7fa5"],["/tags/牙の刻印制作委員会/index.html","e5fb2b6ccd714dbb59d8591e8ec1ef7d"],["/tags/牛カルビ定食-FLAT/index.html","b243a41ca82a2e8bb42eacc15647fb2e"],["/tags/牧尾屋/index.html","7e4d184603eb2d0ec15c58e503f125b1"],["/tags/犬茶屋/index.html","08657f30d236cf971f4e246f71db230d"],["/tags/猫猫社/index.html","c828ba3007487b11fb3552289c0bb89b"],["/tags/王宮魔法劇団/index.html","fd45f152574b556c80bbb2258fa74b98"],["/tags/生活/index.html","412a03c4affc166c13462d3fc004d85a"],["/tags/画集/index.html","2766dbcf6119a42e2b69fca0c24f832e"],["/tags/索引/index.html","5b77e226232a4907648df55c0583b4ec"],["/tags/自购/index.html","6e9f5b733c3f4004bd5f9d4e6a744ab0"],["/tags/茶葉☆姫/index.html","2630ab5e3ca0c5ef7e6b4fd9eb6cba83"],["/tags/郷愁花屋/index.html","6be17351e1378df6d23e15474b299d9f"],["/tags/閂夜明/index.html","125614963671721966f3ffab8bee42b9"],["/tags/音乐/index.html","2d74a5ec52980c1cfe142d489c094f64"],["/tags/音乐美/index.html","1e02ad1e7262f6e6feb01fa2369c4775"],["/tags/黒†救/index.html","2647f4246c1636a2f0468483f80c68c0"],["/tags/黒百合っ子大集合/index.html","3c94bb61a132a5decaa2934393fb5998"]];
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
