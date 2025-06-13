/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","ddc3e34fe48fff0e98807e36796dc81b"],["/archives/2024/04/index.html","4be00551ee59134ea9d34c30d898128a"],["/archives/2024/index.html","773531dce0bc56948b5577d1a133416c"],["/archives/2025/02/index.html","938634eadc5a01f7b4653532fb90dfc6"],["/archives/2025/02/page/2/index.html","d64af3c0246f7772795bdfdd46f75b98"],["/archives/2025/02/page/3/index.html","73e074f74a53bad5c98b83d3170255eb"],["/archives/2025/02/page/4/index.html","b18d658ed088f44c09d4653d13690e19"],["/archives/2025/02/page/5/index.html","7a45c90b58222314c60af4051f8e2f20"],["/archives/2025/03/index.html","a4b40334eb52d5b441164392b15f8867"],["/archives/2025/03/page/2/index.html","cffc81b251735465adfd881702407ff6"],["/archives/2025/03/page/3/index.html","756928da3dfc9c9e011fe9fc9cfcd54b"],["/archives/2025/03/page/4/index.html","da3dd101d93948779718cf313144afeb"],["/archives/2025/03/page/5/index.html","c8fc854ec4312b440fbfcaa6348f36cf"],["/archives/2025/03/page/6/index.html","4fd9fc986538c749a21e979a9af38e85"],["/archives/2025/04/index.html","77c49148972a2e49a97264802a0f6b0e"],["/archives/2025/04/page/2/index.html","5dc93fc0f64930462f4d003bb3f71f84"],["/archives/2025/04/page/3/index.html","889c18ce7d60d5f11fed4e2197fdb584"],["/archives/2025/05/index.html","71fd07e899f4d073edccee2d0b5d1d7b"],["/archives/2025/06/index.html","e6285068dcc4ef9b8970f4ec01ef89b5"],["/archives/2025/index.html","3d99f7858d9bcc1350f8b87f8fa112d0"],["/archives/2025/page/10/index.html","a6003d8565c41e1ee14bd878502b4c9c"],["/archives/2025/page/11/index.html","2e25d92c7cbe16144732c863217a29bb"],["/archives/2025/page/12/index.html","3139acf87ee36986e9201628b5b263c8"],["/archives/2025/page/13/index.html","23cf12b20b541b4a4e23a66fe00b7555"],["/archives/2025/page/14/index.html","e7d6fa9559bd7c5e57fafdc7d65e0854"],["/archives/2025/page/15/index.html","e8d05e3726dd74909d578cf499dc658f"],["/archives/2025/page/2/index.html","92fbe0ab5e38f77fb6df1798f96a93f5"],["/archives/2025/page/3/index.html","ac62c0a9137d44ef2474f348fc8da394"],["/archives/2025/page/4/index.html","c88c24eb5d5dbfe97c550e72a23a0e3d"],["/archives/2025/page/5/index.html","1386bebbb4fdc4bf7fd652d96182cfba"],["/archives/2025/page/6/index.html","bb91dae94f5a95e2170cd029609f639b"],["/archives/2025/page/7/index.html","f5e81e8c2425f8bdc4acff5188334b82"],["/archives/2025/page/8/index.html","a29bb969367ebda670c160c110eec8bd"],["/archives/2025/page/9/index.html","78e2d4273af72815328bdf7250c7dfc9"],["/archives/2026/02/index.html","56330a9ea865901b117cbee1acb6d183"],["/archives/2026/index.html","90d7e3047b5dd24ff006d606e594536d"],["/archives/2825/04/index.html","8ff7b64158e6e2a1283f305765b334bd"],["/archives/2825/index.html","7d5792345b530182800b4c70aa47067a"],["/archives/2925/01/index.html","28868f579655630539f8804b2269fe1c"],["/archives/2925/index.html","0dabb62eeaafd556bdee816b43ebcb89"],["/archives/index.html","e2980d3efdaa076dfb6911e7805a1c7e"],["/archives/page/10/index.html","19e86d1641b7b28a154c45d84c584cf3"],["/archives/page/11/index.html","bcc763ca5fdad280be46827f6758ed85"],["/archives/page/12/index.html","2b72372fa0b0db5d3d18e94551ad373b"],["/archives/page/13/index.html","24a9d001eb982c10981fab2f381874c0"],["/archives/page/14/index.html","5a1b145951072f50ea2d1f9a42a94886"],["/archives/page/15/index.html","b070efa8690f5f2257a97d3a2f031344"],["/archives/page/2/index.html","417790699157b8af93b048e98227c80d"],["/archives/page/3/index.html","6fb0faff7d0725fa49cb7e8f00b2e9bf"],["/archives/page/4/index.html","8041c64b3faf6839c9810411de8e9413"],["/archives/page/5/index.html","e54092e58117a6505b145bbe470fff6e"],["/archives/page/6/index.html","657063d9b8f6ad7c0974082679888f4f"],["/archives/page/7/index.html","4e5293c965423d840db0088fffd246ba"],["/archives/page/8/index.html","5beb246c86be525ca1ee5dc33cfb9751"],["/archives/page/9/index.html","285bfba17d658f0075a4d46a85110345"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","d803ac6c9c799c9b15d99b5780abde6d"],["/categories/galgame/page/2/index.html","910cfafe1cc5b70a745e7fce8eaba8ad"],["/categories/公告/index.html","aa588be828580756ca9aeb6d8f583397"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","6458ca2c4527acf6548100014b6bc3e5"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ce2c0eb20a9b8b1fc1fc5eb85e34f264"],["/page/10/index.html","fa74d404398d5ec667170a78e7abbf43"],["/page/11/index.html","e757721e6b2922c178ca19799ea3c57c"],["/page/12/index.html","ed9fe7c405bcdb2ce8a81918ee6d173c"],["/page/13/index.html","af2abb4d2cf722c840e09dbeedc93120"],["/page/14/index.html","cf02a8bb92ffaf07ded04f05e3b11941"],["/page/15/index.html","cbc6b58d27944470a5736d8029eaad7b"],["/page/2/index.html","f311695e6dd30f0f23e5d513d4a0ec69"],["/page/3/index.html","dd7f8d4116a4889c70b00d109065a4a0"],["/page/4/index.html","90b79ebb2ee1ebf102e859dccdd0b3da"],["/page/5/index.html","06a6b13c35ebc96acf3d3dce4a8dc699"],["/page/6/index.html","ec751660842799f26201ba54fed67398"],["/page/7/index.html","803610972d56f9c809398855d3647e8a"],["/page/8/index.html","9755fea3fef1baac821b584f329e1d44"],["/page/9/index.html","7b90bcdf58b7eb998bb1b6c7233a7e7e"],["/posts/10c9dd98.html","3a29676f1cfe751481a6e7067f1caf63"],["/posts/126ebb99.html","b90ded634a60c3c3efa5b7d864ea9c93"],["/posts/1295b569.html","e7282faba8aabfe1faf888561a68b883"],["/posts/1370342.html","5249d9eb9d54e20dea2bf9e766fe21a2"],["/posts/15ef14c2.html","b435548f0ba3ab46e06e4a8450882e82"],["/posts/15f3959d.html","c27030874a3760b9f256cb8503cff96b"],["/posts/18ab785d.html","4eec70041e6d6c0d62744fc85c663e4a"],["/posts/1d59b71f.html","7708fb819acba1d306de709528c83e5a"],["/posts/20b3f3a4.html","43eb1880c713d05512a21e1c632ad995"],["/posts/244daa7a.html","e00a4e3aff0ada6dbfc029f73d8633c9"],["/posts/245f1c7d.html","11ae50e89ab1c0b93d1bac296ce0497c"],["/posts/252658f.html","bed89a46bb051203d9fcbf7502491f3b"],["/posts/28397adc.html","ee8133785b3455f1d9481da770972116"],["/posts/2ad07f54.html","110e8c660521e8d8b50b1a35f0063f86"],["/posts/2b38bce0.html","41e021c15cfe8fb7e885998fd6076194"],["/posts/2c0a6836.html","fc8ff4b8968fe3fd42747067c227dcbf"],["/posts/2ce39bcc.html","de01bd04cee8cc5444f6b63098454657"],["/posts/2cf620f0.html","bdec1f7fb00eeade83ac1e17ceb7ebc8"],["/posts/2e30fd6d.html","3dd14f087a94bed0e8f67d61a3ddb4a0"],["/posts/30a413ad.html","45adc3760381076e9831ae7d2660f838"],["/posts/34292736.html","d6790b0c9e0e8a086769728b3b9a1a8f"],["/posts/3468cbe.html","fdafa429ad7c855f6f397bed8b20cafa"],["/posts/39176dc0.html","5bccdb04e8126b975b685421402eeddb"],["/posts/3be6a165.html","d21c00896010d20271677fd004119c3e"],["/posts/3daf73b4.html","a06be7a5aa7b50fce90863afde388959"],["/posts/3e118dbf.html","431997f8f89a40d8ffcd8c6424002685"],["/posts/3f7d823a.html","cf723532d3600edbbc724c4e70846b55"],["/posts/3f978819.html","b0bdaa5db5bea901ff9933939f7cf13b"],["/posts/41dac80e.html","39f9889658e1cd57ed4113f7b2a78cd0"],["/posts/43945723.html","6ab5cdc531074c695460b30fe6d6d511"],["/posts/44124a6b.html","c6d7b36a675b2901e80f7dcfc299df10"],["/posts/476a3006.html","f34586e827a0b4014e29c6933e595315"],["/posts/47abb61d.html","a222f6e768df3cb2e4d7def3822d7e85"],["/posts/4996478a.html","916bd73dd64f9b77f569963c2892fc5b"],["/posts/4b689be3.html","71a979b4440e66310f85be31afac1dcf"],["/posts/4cf8423f.html","3c8a1fbfef819db4a3fab1d6d6938e38"],["/posts/4dcf85c.html","65cf31e38fde000cfd66d568c1e72a2e"],["/posts/500cd322.html","d66000ba7f5eebc553804de5059e11bf"],["/posts/51c9b1ff.html","40945fde3c640bac90915326b9315c17"],["/posts/51ce68e8.html","22c2049a2f93ba511be307eff3fe7613"],["/posts/52b5b3c6.html","c6a990653120003008fdba85add2d676"],["/posts/54f496ad.html","d52425f69230ff28b33c2c08155532f7"],["/posts/558e1f30.html","da2100a90ea4ceee8163568b0407627e"],["/posts/5d8bea92.html","8a4e9ce33973e255676049e15304921a"],["/posts/5f6e0c59.html","0d38cc0c4f5e6272b8071e27d0d7dd24"],["/posts/61a63a84.html","663e0daeceeb4bf0381fb340050b48db"],["/posts/625ab7bf.html","5504604516181b87f95d23be00b0efb5"],["/posts/6336a2f9.html","0d5dd49de96d0ef3e205f2dc39de71d9"],["/posts/6432d61a.html","2f5998b43bd53e29bf70bc0277e00e1f"],["/posts/6515f032.html","1da10fff47169860d6b3bf76faddc1bd"],["/posts/6720ccdd.html","c6fed893ff94133b7995398060c63249"],["/posts/6a4b5ac8.html","8cfbc0db8b4c9d1b4f8df66201efd76a"],["/posts/6aa4177c.html","712dcead51839cf3d77cbf43d63408af"],["/posts/6b15f81f.html","42ab63af58a7ecc5d684e6005d3a8381"],["/posts/71131d34.html","827a2eae099dabcb3f7078542ebeeeba"],["/posts/742fd48d.html","e3023ef9396506ab67556ffe6cf8cbdf"],["/posts/78a8a8d3.html","fee997b8bee4a7492346e1a7ac1b9a73"],["/posts/7a5ef3d0.html","07d858b2aa605f94aed3fcc6a65abc33"],["/posts/7b41e1ac.html","c5c8cd2f78d9bc30b1692bb074b9ce30"],["/posts/7b51011d.html","fbed4e5900790563aa4dae18a5950ee1"],["/posts/7e3aa3e2.html","fb67db032f15125c43415b285c888eab"],["/posts/80fe2691.html","0a1875fd14527e2a01398af0b42c80fa"],["/posts/81ac52e9.html","eadab178438774a337dc554980c1b60c"],["/posts/82332d11.html","cea5c234a58c15b73f888cf330ff916e"],["/posts/8486f6f9.html","e1c30300c43de7144da6d21c33561fd9"],["/posts/849b40f8.html","eae5892c0d54f1ec9a111b38cf358a19"],["/posts/85c51d68.html","3c8bf1dc3c15e799a4306ad9c2fa29aa"],["/posts/86a6c500.html","b289637548505efda9e0e043c637df6b"],["/posts/886f8d3.html","8c0317a8dc7218dceca6267ea1bab69f"],["/posts/8a7cba10.html","9791cfd6b4e4df8c906ea4f84245542f"],["/posts/8ac11b41.html","ded5e4c24a17a5ee6d9a9abeabefd25b"],["/posts/8c3f2fd8.html","d5871dd7730e441d33c1d30efe4fde6d"],["/posts/8dd520d9.html","0fe602a681c92bf084195e41022a8ead"],["/posts/8f555654.html","4c65a22fb20fd80a52134d1c34593aeb"],["/posts/909f8f97.html","b9e0c8e11a3709863fa7292b02801929"],["/posts/92a980c2.html","25e0b18ae886782ddc77642d235e2a97"],["/posts/92ce16.html","9e15f908958c481d885e0176d36d8b69"],["/posts/93e9943b.html","8247f2ea5d2afc14ad0bfdf9a434d318"],["/posts/94d3c794.html","881c6d9267230bd179bc23d0eaa7d53d"],["/posts/9606c2fe.html","63d6aa8d5f14863ae19f7717cb4feb58"],["/posts/96b281f2.html","f4ab5f1d0f2aeb9f41558068f3705a72"],["/posts/97f50eea.html","745c7d436bd4e50b956b8dab1c11b3c0"],["/posts/97fca8be.html","5a760c0e5483c88b70081d9cbaec11c6"],["/posts/98662d05.html","dda7d8f2b92f8649454daf453218b761"],["/posts/98ef47c3.html","336e0d6e73ac48d9472b4512c8ca9747"],["/posts/9a2f6162.html","81a3712d1630d14353d4b9cffe54c508"],["/posts/9b22a48d.html","a10a67ffbca20659d5af287efec86f87"],["/posts/9cb455b1.html","0294e0846708a0d8b6fc73828337e5c2"],["/posts/9ecdeecc.html","69b32a3d8d9ff6ebd06b00cc26da2d71"],["/posts/9efd7701.html","8286f7a48611a42febcd8a984cead25f"],["/posts/9f61c1a0.html","9c805f86b9eb6d7b9d9385ddb0f99fa3"],["/posts/a1de710.html","3bf5e1eb7a6869dd3c65aca1e7f79f1d"],["/posts/a30eb0cd.html","81544473fd0ff4ec787588e2bacf2d47"],["/posts/a72f71c2.html","15128f01be308ab69f9010410c473ced"],["/posts/a7634b5d.html","91dd09d2f7780278f5525af40d69166e"],["/posts/a8c593b5.html","54a66f0d1479cfa46c1fc6bf794d4bea"],["/posts/ad0c1efa.html","f6ed0e6f47a35918af9251a3ba8cef73"],["/posts/ada3f440.html","f5e8495bd27f769d0dd90a961bbeeae1"],["/posts/af1807ef.html","eef7731c3fd150637bfe7a57f2a1232e"],["/posts/b397bf03.html","57104ddab476d326e12fdcf4ea39834f"],["/posts/b497b647.html","406c5cabb7bd36a7be61c34af02dc72c"],["/posts/b4d464b0.html","27e4dbc78661ba13dbba0d48f7665499"],["/posts/b5fb773f.html","b1c0085b0deed65d6d7a10803001a782"],["/posts/b8d46b32.html","876a57ebd6450502f30aa5fbb8bd4c2a"],["/posts/c1b2c6c9.html","c5fd1b5e4a8fbc0e29b714ffceed7eab"],["/posts/c2111cbf.html","197c69b615ef82ef2e7514b123587eba"],["/posts/c316c2e8.html","1f31b7fc3158b6360930e7ab6cfaab74"],["/posts/c43e60b5.html","1b72f573c4ef0a990cd1396fcacf3de8"],["/posts/c497a412.html","fbe2301aaebfd9afaa1113803f98267f"],["/posts/c5395ba3.html","5a73e67479e46bee004bbd59895dc13c"],["/posts/c5de299a.html","b7b8ee63a163dd0f8c7420fe37426cc0"],["/posts/c70bba9c.html","c8c69aa5ca3bf422f425edfe1f194c24"],["/posts/c797535e.html","e1f7e835ae5b03ab5e16b355260f3293"],["/posts/c7a62c79.html","65040e8bfedf786284717c31c1b8a21f"],["/posts/cae2c959.html","7a5ec5ad46e0a2682c9ee07798849432"],["/posts/cbebef2b.html","e23f9d803040a5866eda185de81105fe"],["/posts/cc4c0017.html","a66cad42163434cd3f73398721a69c3c"],["/posts/ce25023e.html","b7b715e904bc2bed790fce5411389f1b"],["/posts/d2fd4837.html","5728f7c07313dbbbb3da3b8127b03a34"],["/posts/d3233cbb.html","853ea4458496f2716249a2ee92a7fbac"],["/posts/d3a745a8.html","375b3a78e46d4a3a405070e36207f0fa"],["/posts/d7e940d2.html","3c3814e6ca86fb395fea75614f5ebf72"],["/posts/dc815d5.html","fe414767ed36a49a6b2b96b91965daa4"],["/posts/de25b0be.html","1243a96b8ff74982936f63ccc1816112"],["/posts/e2623b4e.html","d55f3204f48602cf2be27c35e3a4e0f3"],["/posts/e3ab6ad8.html","f5b9f361fe9f71279cf45f0d55f12bfb"],["/posts/e5018da6.html","1cf29d60657fb2b73de7034738dfc099"],["/posts/e5963272.html","74ee8eec06c3dad49dad772c009198ec"],["/posts/e5ef4c3c.html","9a20c42eade5e5a2cdccf2b8e14007aa"],["/posts/e624b065.html","bacd6a470871cc67b7d5d6edf2b0a3e4"],["/posts/e7c703bb.html","1d946b278f01604c492d1ea7b1829732"],["/posts/e8f14b6c.html","19b92b84eb1ab996feaaf195db5dc344"],["/posts/e91abb63.html","7e6295255ecdd98d28cda9c79ca030c0"],["/posts/ea9a8808.html","8d14478208aee568c5fafb8f21fc909a"],["/posts/eb784749.html","f0e31ff527bdb51e47be88fd7c04c266"],["/posts/ebaf2232.html","545ce9ad664168b7abe68c876b9ac350"],["/posts/ed75f185.html","3377ced6fae04a712826cdf5e931e7fa"],["/posts/ee1ed673.html","5343303810cd1f3aebcf75e0e4ab6744"],["/posts/f0c3ed61.html","909940cd19d8f44538b9b8ff882adfff"],["/posts/f151ff43.html","c816610b0349b1aa5848e6b098134289"],["/posts/f21e7f84.html","0b02022d5497578c6f9b3402530f9fb4"],["/posts/f230b0fd.html","0cf4d98a961da9179daee9f9ef28a6c6"],["/posts/f28a7877.html","1f5c10a1d5a341beffc01f4a80a109e9"],["/posts/f663d5cc.html","7a66dc8d8a4f989540c1b4bc141ca2c3"],["/posts/f730ad18.html","50125615e1bf82e6126d2552b062cfa4"],["/posts/fb5d4608.html","1f4891c0ba50a7da768bd309260d3c40"],["/posts/fc04d0d4.html","b53af4a317f1950373289cb40e9998c9"],["/posts/fc455f81.html","14ece1a10131da403a902ef4de0b8936"],["/sumire/index.html","1abd06b04732e909f7e7f766c61aedae"],["/sw-register.js","a96d0af3d4acd3129e075d116fd7ac39"],["/tags/AKo/index.html","d9fa998bf7b2aea089b3739a2abba5cd"],["/tags/APPLE-project/index.html","e6ae7f637ccea12e30a63d56143b8d2f"],["/tags/Ankrache/index.html","3da9802cd328d20bf26ab00e7d7baba5"],["/tags/BELL-DA/index.html","253d3a5b5c5ea463b25d8cee51b3af97"],["/tags/BL-Game/index.html","0fcdb8a69a32a0784cb7ccf2eb220dc9"],["/tags/Blue-Dahlia-Digital-Creators/index.html","2d2489fe1348d327f26330befa7e7ffe"],["/tags/Blue-Line-Games/index.html","54c31bdeddca56285dc09e178dfc56d5"],["/tags/CD/index.html","dff52f79d89bb85aa4b826e38e9a3aa0"],["/tags/CHUNSOFT/index.html","c3fbb7a12073892a980843ee6da3f92c"],["/tags/Check＆Stripe/index.html","81a1d119dc03c4599af6a8b4e59cfff9"],["/tags/Cherry-Pie/index.html","0a0e434329f9b6a66689c8861d2adc38"],["/tags/Circle-Mebius/index.html","f64f5ac4df6accb2b3653f45dc05a3d2"],["/tags/Cosmillica/index.html","8897e37edd3a4ade79a64c3892041175"],["/tags/CresCENT-BLANK/index.html","154363dbd9a8b2e890128a036dbc3cb5"],["/tags/Dopamine-Software/index.html","8a86ee13e16a786bd13818e2c9d1ae84"],["/tags/Dos/index.html","17d15fb493173fe38c1da913419339e6"],["/tags/Earth-Well/index.html","8c0146b7a25875a3315fc35ec5c77141"],["/tags/Forest/index.html","eb456f63f6e2c50643f158250f55a5d1"],["/tags/HaccaWorks/index.html","e26672cc2f50cb5505369187119190df"],["/tags/Kanon/index.html","dc76c9d918ec59207ccbb7788bbf3a71"],["/tags/MANATSU-8/index.html","c1b27cf86e6d6683e3fb4c23b82311a9"],["/tags/MARINE/index.html","5312f1596013512a90a472c503671098"],["/tags/MIO/index.html","5d1f28b0b399f30ab610d2502f14cf51"],["/tags/NAOX/index.html","c6a7c7e8b13313c4e4937fb570bc2c74"],["/tags/Namikaze-no-Uta/index.html","e553a2e04cf729e0e3d854b2f403c7a4"],["/tags/Nmyu/index.html","7e8ac612a7ee7d64509374e47f6f9502"],["/tags/O-S-I/index.html","50a5ab22d20a677e7b2ef29c1074da31"],["/tags/Omegaの視界/index.html","1c094a99252f5e3a06034f2be260ce29"],["/tags/P-o-l-c/index.html","e5dc4736affcb5023e077b145a1a72be"],["/tags/PC88/index.html","265dd075a445905aa8127dee98203242"],["/tags/PC98/index.html","38e211066ee8d0acdf158e2ebd4711df"],["/tags/Perpetual-Room/index.html","e2f94910e1560f28e673728cd3e6a114"],["/tags/Pleiades-Company/index.html","2156ec295e6d03c5c3ab316a0eba2a94"],["/tags/Project-Twintail/index.html","5ea9617892cbf14d4a3fa8c0e4af86d4"],["/tags/RIFF-RAFF/index.html","96159c2a23fa2cbc23c7e79f37fbf48c"],["/tags/RPG/index.html","d5f927976f5161532b94fa64bf89f347"],["/tags/RPG2000/index.html","a4f6c654d8aadac7bb6b641e313c6719"],["/tags/Reverv/index.html","67f1ccfb18b63369baac0307a9cd1bce"],["/tags/SENTIVE/index.html","b7841e87cf7b24c615c3b64fce72c862"],["/tags/Saihate-SOFT/index.html","89c790481d682243d9b7f688d6c32f73"],["/tags/Scrubbing/index.html","cd5c2eaa28e8579adbf82f32c13d9718"],["/tags/Sky-On-R-imaginAtion/index.html","8fa3c390759ee72d801e2effe252657e"],["/tags/StrayMoon/index.html","ba8bdf576c712049b4cdb4da281f4d9d"],["/tags/Studio-Bu-Sa/index.html","056e972301e83db9bf797c46c9d12cf2"],["/tags/TRANSPARENCY/index.html","da38d841515a784a66a5113e1cc74ed8"],["/tags/TRANSPARENT/index.html","41d5b22f70b22eb301959d4c3f843d52"],["/tags/ToHeart/index.html","c0db901e05b24d92b4c1b61301628303"],["/tags/Traumend/index.html","daa0ee9c1bd950ce880c469334ce4914"],["/tags/Witch/index.html","18f8d2ad36c9ef8ac6e8922ba55436fd"],["/tags/adonis-project/index.html","e333c3db3b74837a86b5574f23431795"],["/tags/capriccio-suite/index.html","8cade5382384548cf5c05cfbcc63a79d"],["/tags/flash/index.html","6758a7f57e03455a4ea988df3c520118"],["/tags/galgame/index.html","88d5aea7facc0368cf286ed76c72873c"],["/tags/galgame/page/2/index.html","d9f1559ee1d6a8794707dad0143efcb7"],["/tags/gal资源/index.html","c69b61164a41d38dd78c003edd9d31cd"],["/tags/gal资源/page/2/index.html","77225b34c097fbdad455193b8e337023"],["/tags/gal资源/page/3/index.html","05351351976dc1bfa31d7726ab9a723e"],["/tags/index.html","74778cab241b7f47f5971138ce48cef6"],["/tags/m-kz/index.html","f22226329f94ff82a2d11af7f1b29d54"],["/tags/natu/index.html","c0fbcb13921c17d9e288944e2c70c507"],["/tags/purgatory/index.html","854ed6f63c3fbe85324cb8ad275d28b8"],["/tags/rkr/index.html","258a084537e84c3364711038baf5ea16"],["/tags/team-eye-mask/index.html","775f22396d90e0279dab28272d0d43c5"],["/tags/ありすくろいつ/index.html","187bd590d738637ac4481e555d6851b6"],["/tags/いつものところ/index.html","4950d267a209e1429186c7a8991c5df8"],["/tags/きつねみみ饅頭/index.html","4fec4d3cbf69b58128af87c2f2662044"],["/tags/ねこねこソフト/index.html","e9ac2f55c83460f4d6e251b75adeb08b"],["/tags/ねこバナナ/index.html","fbdb00419b6c565a7fed7df716293621"],["/tags/はちみつくまさん/index.html","8c56d071ec1514505b7a397792fffe77"],["/tags/ろりちせ/index.html","2a5e0e8911cfb4c70203be481f4312f7"],["/tags/アイル【チーム・TATU】/index.html","723881dc73acdc79fb47295d47300499"],["/tags/アクアポラリス/index.html","f039ee28f565e497d76f65ce73bca331"],["/tags/アークシステムワークス/index.html","6df0fb9a6d84458ee244b9e5c01dc81c"],["/tags/ブロッコリー/index.html","0afda66cc08b8cb7a0c3c72569761613"],["/tags/乙女/index.html","547e810f85c366e6abd7b6b2cfdd3150"],["/tags/乙游/index.html","0f6b2a685ee52e7d4a05b7abccb4364d"],["/tags/停产/index.html","329146dc986f6a10234fbb2363bbe05b"],["/tags/公告/index.html","65907c8c816bb2da7aaf751238c62547"],["/tags/同人/index.html","bc45bf0c0baa19a2fe80ae71137bc6d6"],["/tags/堀井雄二/index.html","d062f0cdf965271d93f8291239a01e83"],["/tags/外海なおき/index.html","4facfd6aeb06965844a15fb2fcab7370"],["/tags/大熊猫/index.html","ea925e255ad98f8a95d5e071ec62f0b2"],["/tags/女性向/index.html","fe715becc48ffccc60bc6f7dc0f5718c"],["/tags/安装/index.html","07854e22b9ae9d8c782f1f3af810fc61"],["/tags/御茶ノ水電子製作所/index.html","b2496753c681bf1d06c83a25b57945d2"],["/tags/月の水/index.html","a6bb2b0e92bbf330807c60f40a783b98"],["/tags/桃野衿/index.html","42bf49f751275107e12ed9437f70f07c"],["/tags/機械式少女/index.html","25d1932d7c80df7196b157b33788fb9a"],["/tags/水仙/index.html","6cc80de49cc72b5f044c1e8ce927c6f3"],["/tags/汉化/index.html","465e9eff2055c44993dea8ce9458568c"],["/tags/熊月温泉/index.html","9ea120057802e053551dfc6c7f464818"],["/tags/片冈智/index.html","e62e6f08a20b06746bc28d33a97612bc"],["/tags/片岡とも/index.html","d698dbb684915d1c4628ec65e4421df0"],["/tags/牙の刻印制作委員会/index.html","eed7f9a8edd1d4d7567a26b7ad52ff2b"],["/tags/牛カルビ定食-FLAT/index.html","fc413abcd10a2d27373f9da2ceb14ca2"],["/tags/牧尾屋/index.html","be5d664536ab16ca210204340f4cbdc5"],["/tags/犬茶屋/index.html","6dabcfec87ba12d9e6a083d9d75e4151"],["/tags/猫猫社/index.html","1ab00fa015a0a3c86570cc1d51182fd5"],["/tags/王宮魔法劇団/index.html","999cfe24af8ea8a251f01a8efd699c18"],["/tags/画集/index.html","b28cc5f62a8bca9bbfed80cfea9a1e9d"],["/tags/索引/index.html","9157d98bcff23dfdbde68f9a12f39689"],["/tags/缺失/index.html","93eae9acd400db25d7affe737bb2efb8"],["/tags/自购/index.html","866d6310fc7bb6c118f7140b919418a6"],["/tags/茶葉☆姫/index.html","72ea421fec09cff5f08b2675ebbca0bd"],["/tags/郷愁花屋/index.html","945c4dd02eee2902bf6738eb4eaf89e7"],["/tags/閂夜明/index.html","f0c4bb27dd41da2d9a5ccf05facb9d13"],["/tags/音乐美/index.html","85ddc88246f5aa23389b7929ca710047"],["/tags/黒†救/index.html","d712a3a2abd63481143a9a0cebbca7d3"],["/tags/黒百合っ子大集合/index.html","6b6e7073b1e5e16d043a0cda7a3fe3f3"]];
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
