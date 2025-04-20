/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e913f5a5f66f7d08b41c42aa180c08a4"],["/archives/2024/04/index.html","ec58e81444583e535628bd71541f2d51"],["/archives/2024/index.html","d630209196786305bbc2ab6a642f5924"],["/archives/2025/02/index.html","94ee1c83e6d6446b64a80fe59d0ed6fc"],["/archives/2025/02/page/2/index.html","d660157d50b0e1607bbc485b13dba4d9"],["/archives/2025/02/page/3/index.html","f70bae9a9a7d9bac6b7f43c4fdfa6f93"],["/archives/2025/02/page/4/index.html","ec32a212e1e3a849e2026fd0c1b4c873"],["/archives/2025/02/page/5/index.html","838e15ba5f76763755c75d2c77fa6018"],["/archives/2025/03/index.html","9499732e97fa4db5428cf3c4fbc3500b"],["/archives/2025/03/page/2/index.html","8f49574f9835e84f19de0ff34d01b2ee"],["/archives/2025/03/page/3/index.html","3b3e8dac021c4282f7ec09084062327b"],["/archives/2025/03/page/4/index.html","c79f0dd46720d3aed6eefa8abdf85dfc"],["/archives/2025/03/page/5/index.html","794c214710c37cb23d0611768b541138"],["/archives/2025/03/page/6/index.html","115ea37ce3699b00e0a37da1e4a505d2"],["/archives/2025/04/index.html","6a24e73a36d656d647984ef2eb367186"],["/archives/2025/04/page/2/index.html","9e280e6bfb15d8b4b498be601ab519df"],["/archives/2025/index.html","02b8f0eccc8ce1c4243d5a32f5b12cf9"],["/archives/2025/page/10/index.html","71a991a75285bbd041536bd0c7fa77c5"],["/archives/2025/page/11/index.html","d54cc02aff9e9ae60f7dfd3225df079e"],["/archives/2025/page/12/index.html","a73fdef366736b22fc0e75c0d75ddd0f"],["/archives/2025/page/13/index.html","f4e1f8ef078ff6830ccee8605a735ddc"],["/archives/2025/page/2/index.html","a75a850d7c8c8e573a7e1e0a3552d1a4"],["/archives/2025/page/3/index.html","8c86c76d3c8bd75f674d4567e4334266"],["/archives/2025/page/4/index.html","a72640b4abd16c5a8517b1feb385e450"],["/archives/2025/page/5/index.html","1449e7d08023a728badc6431729a3d84"],["/archives/2025/page/6/index.html","d6d448f92fe18a15804bc8aba42f80c3"],["/archives/2025/page/7/index.html","3f503a2991ce4cbc5da884bbbd135096"],["/archives/2025/page/8/index.html","7669808f939a38600371818b7d0936d7"],["/archives/2025/page/9/index.html","59f28a693fd08e00317766883377842c"],["/archives/2026/02/index.html","f0548d6c74f38a37b929744d03319d34"],["/archives/2026/index.html","8e788b376bdf8705d44ebc1839e0157b"],["/archives/2825/04/index.html","980667c50d0eeb67c845bb69e4a704f9"],["/archives/2825/index.html","3c50b251f692ba87dc0daac829a3b345"],["/archives/2925/01/index.html","aeb00045bb7e3fb3d2ee7ebe4e9b1795"],["/archives/2925/index.html","50afd68909892b12e7495a657352e31e"],["/archives/index.html","905f483565f7105bc6fb9bb6ab0c62f4"],["/archives/page/10/index.html","43c042ce74706c7e925feccde3d3af8a"],["/archives/page/11/index.html","392fd78b7645913ad2b654ad97436935"],["/archives/page/12/index.html","b940f97840cad4c75db751245b97f739"],["/archives/page/13/index.html","e18a4fe4b427f6a8f35e06decddb62eb"],["/archives/page/2/index.html","07ce90b6e5ebd3580ebb14c9bda4ab29"],["/archives/page/3/index.html","22ec0d5982d0991e3a37635c097e03f9"],["/archives/page/4/index.html","c50d170bf37ef5e0b757bf08650d753a"],["/archives/page/5/index.html","cdeccab97978d39f1b87a4a99da19d3e"],["/archives/page/6/index.html","8a9e837e10e6822b8622b8b99db23ac3"],["/archives/page/7/index.html","1bfbaf29d9717d8b6e70a53ce5147a82"],["/archives/page/8/index.html","6d8b338b281c1b0aabd0001f8072c4cd"],["/archives/page/9/index.html","6ae9ff17d16c79cbb9926fc08bbf72fe"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","c2fe444523455912468f59d30c7e2e7d"],["/categories/galgame/page/2/index.html","f36f6251b22a7d7a3eb6de4176d3eaf4"],["/categories/公告/index.html","d301da30798b57563440410aacf7debf"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","c17d55f689893701898079aed3fdb86f"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","9fc7003287c1b69d103f9302a8d20f09"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","aff588d140843bbb77840e1b194bae76"],["/page/10/index.html","8b588602af73174231da29347efcbca1"],["/page/11/index.html","78baa80b0b1ee3f3b9c4bc838db95544"],["/page/12/index.html","ec0c976578fb74d875d888e0eabf15f3"],["/page/13/index.html","7d08a29cac129010ebbad5aeacf50855"],["/page/2/index.html","bfc8dbea7e9b5d3525d9cba4c9e0ad81"],["/page/3/index.html","f65727177fa8b48470ec82d23962e337"],["/page/4/index.html","8d31b07e27a0550a12d4b5b83662cf5b"],["/page/5/index.html","82b5c9e54ae5fc35b8438a2b479c3946"],["/page/6/index.html","51516a5c7bbe6e1048b98cacf45ba191"],["/page/7/index.html","1dac1a9ad015bfa06bcf3be4d66b7a2d"],["/page/8/index.html","9d4a900d74e7fb47b13e66c8a60d6be6"],["/page/9/index.html","3258616dde753dc50135d65b7a51a80a"],["/posts/10c9dd98.html","1bb238344d239f7de26703bf35f78b28"],["/posts/1295b569.html","7f3b8fd114a62680e9c7100244746869"],["/posts/1370342.html","3cfefcca5fe8691dbfd79bca3eab3b01"],["/posts/15ef14c2.html","8486b188ff523198b259eda640be2d1b"],["/posts/15f3959d.html","7521718b423d0f8b16e2630edb0db64c"],["/posts/18ab785d.html","7393314cec65ae3ecf37c41ab557ad5b"],["/posts/1d59b71f.html","944401f000683a336f7332dc43e24b74"],["/posts/20b3f3a4.html","08338684d4b3497069ae312ecbe40a7a"],["/posts/245f1c7d.html","f6211694ee77b90d55b716dba30f67ea"],["/posts/252658f.html","a8a7f1da2d52465142efeaba322c5c0b"],["/posts/28397adc.html","e3e370f7abbcde3def48f6a816c212a4"],["/posts/2ad07f54.html","3501c3ee0958edd364768412995fa643"],["/posts/2b38bce0.html","7438c47a69820373663e37e6c4fd6b25"],["/posts/2c0a6836.html","d6a618f0e86694428aeddcb3f537099d"],["/posts/2ce39bcc.html","b6ce6d8e2296e5f1cc28b06f61c3901e"],["/posts/2cf620f0.html","f3fbcfc4416d44e8d0ab9013126b09bb"],["/posts/2e30fd6d.html","2fe12fccc6ae486a6ec1a65823a07fdd"],["/posts/30a413ad.html","8a1f9d3496dda4155bc9695ac0871d8a"],["/posts/34292736.html","cea11dd5c4a54259cd2fbcef4aed8a1f"],["/posts/3468cbe.html","9e7f0bbe88bb32d10bd43be9cb9bb00d"],["/posts/39176dc0.html","1ad776a71dac5b6f13aedd168374278a"],["/posts/3e118dbf.html","16db4464a96a563c64dfc049c862c096"],["/posts/3f7d823a.html","72b8e75725b6992c0388da3c352ff77d"],["/posts/3f978819.html","2804808a111f182e4f52d4ffa289ff37"],["/posts/43945723.html","4da7f2ce7c308ebb48c81513ad748a0e"],["/posts/44124a6b.html","c1c32ea5c98c0f74e8f5291dda1afb87"],["/posts/47abb61d.html","1ab974e685cd2c69c722cfcba525cefc"],["/posts/4996478a.html","de1451fbddf61f7f3833d8b50c92f546"],["/posts/4b689be3.html","73337d0a19eddddaacb4f1910866787a"],["/posts/4cf8423f.html","12604afdb65afbfccaf23a552f900983"],["/posts/4dcf85c.html","693e2fae71efd60a6802d3bf65447d9c"],["/posts/500cd322.html","000735999256945fc1e2f1497f25681d"],["/posts/51c9b1ff.html","bb3c6e000b76f79fd3a7581f87555c14"],["/posts/52b5b3c6.html","408f4053de14c786c17ac0669cd4c0b5"],["/posts/54f496ad.html","f6b8b8ecb0c7c41e1d23673bd77e5cfa"],["/posts/558e1f30.html","71ac46eb751892dcf53684d9773860a8"],["/posts/5d8bea92.html","c2e43306607e2a20e1156f0b8b578e8c"],["/posts/5f6e0c59.html","c87b04b5284f92a02cd48f7ca602c678"],["/posts/61a63a84.html","7a5321ef94a5137b6863b24fac18a929"],["/posts/625ab7bf.html","721f7c38482330b0b7db8b319ef2f192"],["/posts/6336a2f9.html","2ffcf63400137cfc86d639073027f519"],["/posts/6432d61a.html","5af223f3ce410927c52cbfa870968040"],["/posts/6515f032.html","b9ff16c05096ca457c188efb5539af06"],["/posts/6720ccdd.html","dfa6956af8a2a776c3cccdd074901631"],["/posts/6a4b5ac8.html","c98ebf959602961ecd18c2eb6a01ae36"],["/posts/6aa4177c.html","5b618b731e532da7485723c685598208"],["/posts/6b15f81f.html","e516b79bb13c57b7437ea4f2a9fb3cef"],["/posts/71131d34.html","0e89fcd1bd2b06f289d2a6339909d422"],["/posts/742fd48d.html","b731034c9bf7979d12a2567e2868d7d8"],["/posts/78a8a8d3.html","aca2ca0dc25c543ac2c4d92d26bfb89d"],["/posts/7a5ef3d0.html","2562ea5b3c64032c98c82ddded2fd853"],["/posts/7b41e1ac.html","46b9b359f9fda45ba14db49b6f1f630c"],["/posts/7b51011d.html","a4a1a92e6dfef2d3a714eface25895c5"],["/posts/7e3aa3e2.html","6b2c30d35c48184bb157669da599dd5d"],["/posts/80fe2691.html","9020dec3bf698b22f990075152ea7054"],["/posts/81ac52e9.html","99544f99e319d4fdd5229f23f036b301"],["/posts/82332d11.html","9b4dc59ccead285a181389ad96e006a1"],["/posts/8486f6f9.html","ccc3216b07ec34a7a018300eb42305be"],["/posts/849b40f8.html","f78b4a9ecebc9e6442caaaa2e197b387"],["/posts/85c51d68.html","5af91694a169388e59da80bc46dc42e9"],["/posts/86a6c500.html","aae66c1a37194ab701d178644d42ebb8"],["/posts/886f8d3.html","b35d0d223a137c794ba846bf7fc7677d"],["/posts/8a7cba10.html","95122bcfe29677d097c840db237d8cfb"],["/posts/8ac11b41.html","a5e36fd5a45cf6462bcdd1d9d674cbb7"],["/posts/8dd520d9.html","cc122cc594d68cee6264b0f51684f1e3"],["/posts/8f555654.html","0bf07a8daceefdf6949bc2257ba5b154"],["/posts/92a980c2.html","1f80a43127d792ecfd86a5db293509c1"],["/posts/92ce16.html","6e5d3ea2a1883061bcccac4f84c73616"],["/posts/93e9943b.html","52176d80da75b89f6537019139868dd7"],["/posts/94d3c794.html","394c1faaac71ede3cc21a4307e0813a5"],["/posts/97f50eea.html","69ebcd759a1e6f15bb44e184071991da"],["/posts/97fca8be.html","fe8e9635ea1a4ce27cf73e8f5f5cced3"],["/posts/98662d05.html","827bef0a66a3b301023746f8d0893696"],["/posts/9a2f6162.html","19f21b1883bda23a475521ec8b483835"],["/posts/9b22a48d.html","8be5db146c7a0a125a62bf78664f0620"],["/posts/9cb455b1.html","0fe0d1b49a835ac0bf07da16b606ece0"],["/posts/9ecdeecc.html","06fdcdde761301c7301d9b7282857b15"],["/posts/9efd7701.html","4d810c6d9320a48d845d39573cee3149"],["/posts/9f61c1a0.html","35824ed447d8f826d9918c89770e9e47"],["/posts/a1de710.html","262f2c21f7f6a94c08b28900729571b7"],["/posts/a30eb0cd.html","80cafe08a69bdf45899b84d3ce669910"],["/posts/ad0c1efa.html","8a87fd8148c16ed4cda20327ede62773"],["/posts/ada3f440.html","34f3976a884f86a741845d89fda856c1"],["/posts/af1807ef.html","fc2616f1d2543bba8073a05c33ea8968"],["/posts/b497b647.html","edac2a803d8b680d1dd895a27aebbaa9"],["/posts/b4d464b0.html","cb96d9e80e44ea53742c541691921861"],["/posts/b5fb773f.html","e8ac0c70b1916ad2e0fdf58fe6d0880c"],["/posts/b8d46b32.html","8bec44f909ce4b2206863cca4ea546a7"],["/posts/c1b2c6c9.html","9c7201b16994ce5e137663db8c99aa55"],["/posts/c2111cbf.html","9d2212ef03787a28573af6e55916d99d"],["/posts/c316c2e8.html","5f3f02031b3c97a52e4da596002d8c19"],["/posts/c43e60b5.html","bc5bcd3a2cdcfa5a976a585c116ef258"],["/posts/c497a412.html","1a8561074b629bca320914c05160fd99"],["/posts/c5de299a.html","8ee7427ebf4e61236ea81dd4e4efeb59"],["/posts/c70bba9c.html","809fb7fac63fb303d0417bb9bed409a0"],["/posts/c797535e.html","5fb9b2ea71fc803526d8876f20b6ef5e"],["/posts/c7a62c79.html","29b4b4bed3adc150afc6bbb6528eb2ab"],["/posts/cae2c959.html","7a39f8b50a0f9f681a8ab85951f1ed9a"],["/posts/cbebef2b.html","7aa1fdc4ee0ffd2dd27a929428739394"],["/posts/ce25023e.html","ea6c5050de67dc0fa4d84f3ca0115569"],["/posts/d2fd4837.html","f47bd88f0151d71d3db97c262051573a"],["/posts/d3233cbb.html","e99c92ef4c4300715ade9f9ba00adb48"],["/posts/d3a745a8.html","793ac2c523b1e329e40cdb23e8af0336"],["/posts/d7e940d2.html","471857d538512d6c9acecddb27418ad5"],["/posts/dc815d5.html","9c9e18955ef3f8f966c76350699ea317"],["/posts/de25b0be.html","72e6d62673a4f593a6ccaf5321c29043"],["/posts/e2623b4e.html","b4910ef8ac15909e8fac6fc638690583"],["/posts/e3ab6ad8.html","689820d144fb1c126b56d7c2fab75b7d"],["/posts/e5018da6.html","d2ab282a4e5f4191614a574c5bdfcff4"],["/posts/e5963272.html","21bab6595444e9a0beea8c7ab1434849"],["/posts/e624b065.html","b1771c5a2a19be4351855f4fa2191e41"],["/posts/e7c703bb.html","780659c7a9532aa7385bb2ed9554c6e2"],["/posts/e8f14b6c.html","f5cd9cfc0cca1f600640410e14773133"],["/posts/e91abb63.html","74619cf9e6f2f5cbb8f699b6bf5ce763"],["/posts/ea9a8808.html","afac3160d5a8550bd6a85f650bf463a3"],["/posts/eb784749.html","cc853e4e2d9e827774dfd7eeb8fcf85a"],["/posts/ebaf2232.html","36957a4ae3a26ff48bdf8218dd51aaf3"],["/posts/ee1ed673.html","9cf827a867cdc55e3ec048d08c449dd9"],["/posts/f0c3ed61.html","decdd5e4a8ece3694cd64e76471fd6b1"],["/posts/f151ff43.html","264dff4ba22779a1c9a4123bc67c931e"],["/posts/f21e7f84.html","1ad92393de1e0fa6c66c99f6a88fe46c"],["/posts/f230b0fd.html","56e341e6a62fd7c026c21665fa14f51b"],["/posts/f663d5cc.html","cabc295ce723d370e7ab7d19dd090e99"],["/posts/f730ad18.html","e1449ded35412707b99b368be77e17ec"],["/posts/fc04d0d4.html","229b31f80ceddde861aa8c14253769db"],["/sumire/index.html","d608d6a4725109d7626f38323f2e3e44"],["/sw-register.js","a866e0afa9c7f9559fcf2f7ade04bab8"],["/tags/APPLE-project/index.html","e76d39c615c1cbeee84983c7567288b1"],["/tags/BELL-DA/index.html","86502944f1b7ac09523727ec2c4443b3"],["/tags/BL-Game/index.html","baa8ac7ec122488fb09b2266135ea080"],["/tags/Blue-Dahlia-Digital-Creators/index.html","8ed0467d6bcd1aa0e3afc81fcf9ac285"],["/tags/CHUNSOFT/index.html","4a5b8132927379371c11a882578417bb"],["/tags/Check＆Stripe/index.html","8a8b4f0e5b00431916f6adf18004db58"],["/tags/Cherry-Pie/index.html","9a31bd9690048d55dc164a5bb21e2250"],["/tags/Circle-Mebius/index.html","21e3e2c0dc79ceefea1eee5bb32aefc5"],["/tags/CresCENT-BLANK/index.html","4fad9b3fa62c1e1ab74868cf4dbe3a2b"],["/tags/Dopamine-Software/index.html","a2a904f8c9c9a0a52e27c60aad9df18c"],["/tags/Dos/index.html","481bc17faea6e0139eb33b4cb1b87ce4"],["/tags/Earth-Well/index.html","8488622796b928a66b2aded156532f55"],["/tags/Forest/index.html","79fc944af3aa48a38cf8a32fd082ed54"],["/tags/HaccaWorks/index.html","f17e1073067e3627857382d9910c165d"],["/tags/Kanon/index.html","6f59cdd02d20d85941ebbcf0be43c6df"],["/tags/MANATSU-8/index.html","f10fa5854c04dd28b3addd53c95c7e6a"],["/tags/MARINE/index.html","13c051f3b23c7221ca3257e0cd4117aa"],["/tags/MIO/index.html","f20ef3a63b50dbd9c50e1dddf74aa5e9"],["/tags/NAOX/index.html","cce6dc7fdad1261c67c5f50c9bfefa3f"],["/tags/Nmyu/index.html","f387933ee264e3f9bf07e8ea33c48acf"],["/tags/O-S-I/index.html","9b2ff642575fc9ffcaa9403dc5b90197"],["/tags/Omegaの視界/index.html","9bb8a40dd93f406d4dc744d72dc7b04e"],["/tags/PC88/index.html","da78cabb07d0ee5c1f1b59d14f74efc7"],["/tags/PC98/index.html","e6cb4081150a21b8b715ebaca9aba9ec"],["/tags/Perpetual-Room/index.html","3e46bf88fb4907ba741a73c99529ff39"],["/tags/Pleiades-Company/index.html","1c2b1175cf5a537b50bd5383063726c3"],["/tags/Project-Twintail/index.html","745d33ae2af5ce6252455f940f6ef2be"],["/tags/RIFF-RAFF/index.html","3cc764bec64e41e93ad0ebd0846a0bae"],["/tags/Reverv/index.html","34d6acbb2c05999a40fcdec6393d1f01"],["/tags/SENTIVE/index.html","c4f32f08178dc9589c17e1e6b0b0389f"],["/tags/Saihate-SOFT/index.html","5086bcc20d28e85480e37f970aac0d2d"],["/tags/Scrubbing/index.html","07bae7ace5f826473b687ce58cc34f2d"],["/tags/Sky-On-R-imaginAtion/index.html","f13c238efdf0118044317c8e34c24706"],["/tags/StrayMoon/index.html","48fcc847d566023ac0ef21dbd2c210be"],["/tags/Studio-Bu-Sa/index.html","673545cd710877af8a9a8bcb52e7e396"],["/tags/TRANSPARENCY/index.html","ac05786f9c329522ebaa3824fe0ce15a"],["/tags/ToHeart/index.html","3124a9b5fa8e14d4e42fb4411f7c0a6c"],["/tags/Traumend/index.html","1c8e4a670c4352da0de44228716e57d4"],["/tags/Witch/index.html","a83aeeb93fd1088158c19b93927368bd"],["/tags/adonis-project/index.html","dbba34974ea3daa3a89989dbea0ea99d"],["/tags/flash/index.html","f30a60d496285c9dace087bde6518e0e"],["/tags/galgame/index.html","754f0749a026150d3f4432c96d389e78"],["/tags/galgame/page/2/index.html","5c8887cfb4185fb4f3e55b499e06e108"],["/tags/gal资源/index.html","3d07f6a9773b0592a5685ee7aab0352d"],["/tags/gal资源/page/2/index.html","15dd5b0cac857065c097e3ba398cb58f"],["/tags/gal资源/page/3/index.html","cc59185265e752edfdbadf04f3f53b47"],["/tags/index.html","d53de2bc017a3e08e8a8af20453c9388"],["/tags/rkr/index.html","3ecaf0b8abeb89373f1cc59d958fc43d"],["/tags/team-eye-mask/index.html","5969bd5b36e4029a00e91d6c037ae623"],["/tags/ありすくろいつ/index.html","184a373a69a99365d0fc7a1b492d5cae"],["/tags/いつものところ/index.html","cd3dd55eebd93ec3e595b3549789ad38"],["/tags/きつねみみ饅頭/index.html","e35a7dfa5fcbad795702fb2c4a567922"],["/tags/ねこねこソフト/index.html","fbd6d720f91b4a896825742a85d323a8"],["/tags/ねこバナナ/index.html","6ee0415a7a9d866f59579e528c710f8d"],["/tags/はちみつくまさん/index.html","ade56f38be2562a530229524484b7e70"],["/tags/ろりちせ/index.html","9d094d7a598316e095738b01059d7dd7"],["/tags/アイル【チーム・TATU】/index.html","626b9a3f8d19807f9f0e7af547a0961a"],["/tags/アークシステムワークス/index.html","8d9478cb6b4ffb94628f02fe61e297af"],["/tags/ブロッコリー/index.html","174a70ff9a29177d71bed748a488aa10"],["/tags/乙女/index.html","3ddf4c5546662de2814f4e1fb950c570"],["/tags/乙游/index.html","7ea8df0da24b205cb6e934ff78cc4825"],["/tags/停产/index.html","71598b55f921001ba3e7b9f34706e1de"],["/tags/公告/index.html","724064719cd712ecc697c046d17638f7"],["/tags/同人/index.html","a838e8b3febcef7db19ea6b9208afbae"],["/tags/堀井雄二/index.html","1e83a7702749b20eda65cd93a1ea67b9"],["/tags/外海なおき/index.html","c5dcab8b46c75d23cd704d572e3c050f"],["/tags/女性向/index.html","ea7e55ac16013fdf6da4dce128b8ac75"],["/tags/桃野衿/index.html","ccb52153e4ec15fb7167a2ae46c8b5fd"],["/tags/機械式少女/index.html","cf40cd7fcf64418949d6056379861224"],["/tags/水仙/index.html","363550f68d80c4e047933e7b11b4ef2d"],["/tags/汉化/index.html","f456f060ea12917fd4430bad6b7e3ca7"],["/tags/片冈智/index.html","de0e032f7d586689d59a52acc8ef5494"],["/tags/片岡とも/index.html","3bacdd8579308b4ecd4c21ad88f7c250"],["/tags/牙の刻印制作委員会/index.html","b1cf821570b00b86360e6df27b45631b"],["/tags/牛カルビ定食-FLAT/index.html","17ca8af7f11fc6a54ea5b20d92c5e162"],["/tags/牧尾屋/index.html","0626947d277482b8b44e11bff4cc7d66"],["/tags/猫猫社/index.html","ad4f8c96aee7e98e0e94880bcd5e1471"],["/tags/王宮魔法劇団/index.html","38038d328bc88b0ed2c46f980fca8e50"],["/tags/画集/index.html","8e2beb24e6bcc0230b634b51dac55439"],["/tags/索引/index.html","cde9ca1060ec96bdb2cec605baae0386"],["/tags/缺失/index.html","a82f28d9582e40726025804fdcad9ab2"],["/tags/自购/index.html","0fb04c107c40caad15c3f8300d2162ea"],["/tags/茶葉☆姫/index.html","088df91b2ff2581dac93deb202f95b86"],["/tags/郷愁花屋/index.html","35f21e11c62357001f36aebb12ffc77e"],["/tags/閂夜明/index.html","3904220da3c05d80448d67e6f6c9e987"],["/tags/音乐美/index.html","96afda2eb84d4cea4e9e6c82df9ff5b1"],["/tags/黒†救/index.html","6c2906521570b820166f40958a903371"]];
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
