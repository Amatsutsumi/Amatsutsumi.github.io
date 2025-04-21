/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","b91133e68856cfa8daab3b8a6a2c9d34"],["/archives/2024/04/index.html","4a1a05790d12c88ad2b25501b3636ab8"],["/archives/2024/index.html","96fa69070b96b8f889834f4789edd87c"],["/archives/2025/02/index.html","2eaf594a6bf6176741f1d70cb8a2defe"],["/archives/2025/02/page/2/index.html","b1a9b98af24d74ce46a51c87aed69715"],["/archives/2025/02/page/3/index.html","1e0cf5d3cc22f3a277fd1e062a74c9c7"],["/archives/2025/02/page/4/index.html","7d76c20fe3457a371b3b9549978dc953"],["/archives/2025/02/page/5/index.html","c2d396af4585bb601b6bbea6e09ef742"],["/archives/2025/03/index.html","60fdfbcd1d4b01cc8c898196a52acc11"],["/archives/2025/03/page/2/index.html","abb3dda91c0023361d0a6481dd05ea9d"],["/archives/2025/03/page/3/index.html","bf9d0ad3872fb62027577480c94e47a1"],["/archives/2025/03/page/4/index.html","240bccf4f684de0df9b5aa183766044b"],["/archives/2025/03/page/5/index.html","7cb581baea7bd01a459d15e5177a1214"],["/archives/2025/03/page/6/index.html","4217b6403fd3a7c4303100a3cc8d3fa9"],["/archives/2025/04/index.html","4bdece212876ac932adc9d90a60304d1"],["/archives/2025/04/page/2/index.html","2c8e66239e5b1a856109d820df0d2a6a"],["/archives/2025/index.html","b701e639954716ccd1819aa58a8d35c2"],["/archives/2025/page/10/index.html","818dd014b0e91975d387fe15cbac4b1b"],["/archives/2025/page/11/index.html","4abd9b06326dc206e65d33c14c362201"],["/archives/2025/page/12/index.html","b7dd3a33d2c640e1efcc330da641df54"],["/archives/2025/page/13/index.html","c0abdd16ac7c593746e0ab6620e2b84f"],["/archives/2025/page/2/index.html","e475050134a5efa41ab5d27857d7a978"],["/archives/2025/page/3/index.html","9729d5f4f788da5d7ddf463c7ca081fe"],["/archives/2025/page/4/index.html","53a937f4a76091b3cfa184099c776449"],["/archives/2025/page/5/index.html","ce5a9c3dea2cbce55265d3eeb8964d99"],["/archives/2025/page/6/index.html","b6443405cb45955bd3a9aa571fba22fb"],["/archives/2025/page/7/index.html","6aa22f0325c3d5fdb63cb198afad4783"],["/archives/2025/page/8/index.html","b068c10bb7c66c5f047181349759d810"],["/archives/2025/page/9/index.html","351fd752ae6b99a730484b38bccd09e3"],["/archives/2026/02/index.html","e2f2dcea0392c948af3990e34c6b8a82"],["/archives/2026/index.html","a4d0cf3b86404c70c71f9b099cc5c1b0"],["/archives/2825/04/index.html","d26d74cb3a81cdb879c08abe1aeb1804"],["/archives/2825/index.html","a1be521bf80fd53d86f562878427f183"],["/archives/2925/01/index.html","fd9223afe7775d735ef51c5eec15cc68"],["/archives/2925/index.html","c724e0ad4f282162b980c11ceab486eb"],["/archives/index.html","2d642013f6ee2f9f7568734144dd698f"],["/archives/page/10/index.html","5a376a55adca08e4fb48a512a0e11304"],["/archives/page/11/index.html","fa01e26d963e091a07e5910962145b60"],["/archives/page/12/index.html","0695749176ad85cccdcb7348cebed82f"],["/archives/page/13/index.html","3eac411463c38a2fd8afcf9681e9d91f"],["/archives/page/2/index.html","03bb672b183acbfc319888ee995889f7"],["/archives/page/3/index.html","38036c10748cdd2f7c2eb6abe37e84d5"],["/archives/page/4/index.html","94ea20cc287fe752d4fac6e46f2a2caa"],["/archives/page/5/index.html","33b3f7726a4699c6f53a2f601d9ef013"],["/archives/page/6/index.html","cd54349d5841a8758abd9cf9800ce6fd"],["/archives/page/7/index.html","db60fc46b61144280486f7a195ea4d45"],["/archives/page/8/index.html","81b92e73a2935380e5a2878a45348a51"],["/archives/page/9/index.html","88518f4bc9bec557037c16212bcca432"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","e9bd1c0a3e9cbf672570ce67ab176017"],["/categories/galgame/page/2/index.html","07e18b46749a8400f7d7f8d23e32824b"],["/categories/公告/index.html","2d4cf6f1b453335503cbb6473ac31471"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","1d382d83438a2141e457456275e325e3"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","2d172f3c885ff32e80e2b64e650d0264"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","2609e3ae8b2b0122f468ae5e26b454dd"],["/page/10/index.html","a8c41f8200e76443f9266862c29d24db"],["/page/11/index.html","326cc60cb33d6d2c28c17a59da3c389d"],["/page/12/index.html","065ed4773d505492f9efe8e5616869e5"],["/page/13/index.html","bed50c9f431a2ea61636c8fc49b2dc00"],["/page/2/index.html","2eedcf8ece73ffc6875ac508da928ae7"],["/page/3/index.html","90f3a345c2805968c29b88a4cc8e131f"],["/page/4/index.html","d755bff326206a4bf09caeaa3645972e"],["/page/5/index.html","23b5b4296338dcb74c6fe7af7a485b20"],["/page/6/index.html","cd97747c74b548ba1c93d1c35c73639d"],["/page/7/index.html","3d7a52c57bf29525a4ccfa0401c74b85"],["/page/8/index.html","8688f6132b08c6868cbb32dc3cee88e9"],["/page/9/index.html","8dd59d8275ae4a3380ec22c7b765e4e1"],["/posts/10c9dd98.html","b35a982928a17add6b743072b43faa6c"],["/posts/1295b569.html","1bf54b57ae56b1158c6f84a90e5e4796"],["/posts/1370342.html","e45dbd67c1d2d9db2dce0692f7a1c9b8"],["/posts/15ef14c2.html","2aff453315235f7f0562ec53b3778b91"],["/posts/15f3959d.html","24470fca6c8a6018f93cb91ace7a36f7"],["/posts/18ab785d.html","8686e6ec1475acdc85e00b4f3ae125e6"],["/posts/1d59b71f.html","a5f368a94dc08654024e0a1a7b4a6363"],["/posts/20b3f3a4.html","4f8d1bd1f97d60c3dff3415ed92d45a3"],["/posts/245f1c7d.html","bb6292185debc6c578ac26b8192168a5"],["/posts/252658f.html","3e84c33570cb2e694ac828503b29a938"],["/posts/28397adc.html","1a4c2f5b3a1f754ce0c06bff1711b93b"],["/posts/2ad07f54.html","3c62ee3e2faeaa3eb0aefc5188f133be"],["/posts/2b38bce0.html","7327cdb234ad06dad530b66e1046ed9b"],["/posts/2c0a6836.html","d4e5dc58981420cbac0c3d6d0618201b"],["/posts/2ce39bcc.html","bae4df8978951274efbf73c4d40fe2cf"],["/posts/2cf620f0.html","033a5347878beced0507baee39fff1db"],["/posts/2e30fd6d.html","2cbc891228b88ba81ac16d1a97dd3d0b"],["/posts/30a413ad.html","73d25986b40023bcd34f18308676c587"],["/posts/34292736.html","69c5d5bc0836adf0f60675e4b7865956"],["/posts/3468cbe.html","3070a7cc6c54a56230527ac50a0334e7"],["/posts/39176dc0.html","6a673e6dd454899f27530b59a52cb8cd"],["/posts/3e118dbf.html","bad98566ebc19d7a5396962dbf5999f9"],["/posts/3f7d823a.html","c5bfca6fee3898a974e460c9079fde19"],["/posts/3f978819.html","693f80834f3cbd336607b42ac58d08c2"],["/posts/43945723.html","7d2a9571770a621169dc6e16a6f95ea4"],["/posts/44124a6b.html","2d9bb6872f250b841c39da481daec5aa"],["/posts/47abb61d.html","2fb80d8d71700991faf11d02e0373a41"],["/posts/4996478a.html","1f1c2cc8fd1338f76687d4f12c046b53"],["/posts/4b689be3.html","e621ebc35470f5c99ecedd8ef586aabe"],["/posts/4cf8423f.html","4a69297ce9fc47030fddb4cc912dfaea"],["/posts/4dcf85c.html","7fa77aa64ee5b8545ca55f9b5e5d8b6d"],["/posts/500cd322.html","c0886f2850a867410dd9b0b93a0df09f"],["/posts/51c9b1ff.html","d04622422dc1622c87bdcd7820d784f7"],["/posts/52b5b3c6.html","94384148a0322186c5783baf3a24eb4e"],["/posts/54f496ad.html","b3a2fab8040d95cfc98c3e7fc4fb1261"],["/posts/558e1f30.html","c10573c6898c29f67758a6ad9bbc1d9f"],["/posts/5d8bea92.html","2a0ca2ac42464b2de9d27e180a38a891"],["/posts/5f6e0c59.html","a3ffd672f69e593b8fc23964e767d585"],["/posts/61a63a84.html","38c7be6dc23f5a5b7c12bff3b00a2250"],["/posts/625ab7bf.html","543dcfbf31924daf9e035c882d4a1eb9"],["/posts/6336a2f9.html","236d2723b6326d3193123e226b74defa"],["/posts/6432d61a.html","9c542ba48abaabde377c386fca28ccf9"],["/posts/6515f032.html","a1e58e629fb10f559b703c530504ff1a"],["/posts/6720ccdd.html","08a444b3f8cc40ff7a87d0b5c7c7e856"],["/posts/6a4b5ac8.html","d8ad5fb490b3b3c621d48f840fa4fb31"],["/posts/6aa4177c.html","9f58d23be94bb0f2e0456cdf5537fc2f"],["/posts/6b15f81f.html","fbab8e34aece09e52bebfdbb254815c4"],["/posts/71131d34.html","0b0803ad284d15a1323e61f5023cd8f0"],["/posts/742fd48d.html","f7da3f95ccfddfcb7d64b620a6ebde11"],["/posts/78a8a8d3.html","4828c7e8d8e3e2be0ab900821ea88d5c"],["/posts/7a5ef3d0.html","e874e8cf41e87f12a67293e22c0baf54"],["/posts/7b41e1ac.html","b8177cb231360337dfe04ae566e4112a"],["/posts/7b51011d.html","65bee7b95542850eca8949cfbe26a610"],["/posts/7e3aa3e2.html","1b57681734541bdda990ff0e2ccdabbf"],["/posts/80fe2691.html","132f7853b0142442e39ffa13f0a0fca9"],["/posts/81ac52e9.html","9d981bee1338a37618344a041fe2d232"],["/posts/82332d11.html","0e32577b526c10af8ee082ed27c6df23"],["/posts/8486f6f9.html","0e604d5160e0760d58d683e5b7cc88c5"],["/posts/849b40f8.html","da4ad5967fc2578be29c5a9f5b89c813"],["/posts/85c51d68.html","917a4bbc01eab22e44057c2cadd0b60c"],["/posts/86a6c500.html","5d6f7d8d183cc6dd81cbf69dffed24fb"],["/posts/886f8d3.html","c7a7d724a24c92530fdd198de7b77f4b"],["/posts/8a7cba10.html","8c478db13cfc2c8bca711c8974c06189"],["/posts/8ac11b41.html","249c0b637c31c473bce8a47b1c85d9cd"],["/posts/8dd520d9.html","ee2d74bb247dffb342fdfaa69e77b1ff"],["/posts/8f555654.html","9cc3267f48d00ab6bd6164e37f31fee6"],["/posts/92a980c2.html","5b87c98ae3e3b6ff3d91e13b0c535e6e"],["/posts/92ce16.html","373f9e2fc0a5df772cdbb4bc0a7cd1d3"],["/posts/93e9943b.html","823e23404eaceb41722525883f56768e"],["/posts/94d3c794.html","4faff0068deadd3d6ccfc673d0785c8d"],["/posts/97f50eea.html","7ca4c250b3d22ab731b1376b66856dfc"],["/posts/97fca8be.html","d4a2785e58530217ecfce6d0305b3385"],["/posts/98662d05.html","6be981b04823add92742688fc92785c0"],["/posts/9a2f6162.html","49ee4eebe8448ec64a24105178b6a788"],["/posts/9b22a48d.html","54556ead473f4da35983a339a4ecee05"],["/posts/9cb455b1.html","58fb4558ebfc2642caf91f4672c0e3f6"],["/posts/9ecdeecc.html","5bcbdf747cc11515d25984ac8c13a4e1"],["/posts/9efd7701.html","4f30068cef046b3dc03f68b2e16d615d"],["/posts/9f61c1a0.html","edc964abc141b1427c2eb1f6c5375f0c"],["/posts/a1de710.html","f1bd8ba3db83c7ff489a591d8cb10475"],["/posts/a30eb0cd.html","b603bd1b4def771b96ccef17566bb1f7"],["/posts/ad0c1efa.html","0d9f519878a47c2621688162a488dfb0"],["/posts/ada3f440.html","840a1f34672a5d920bd2a6e6d35db75a"],["/posts/af1807ef.html","282eb794a1e0e3b53164353048078a90"],["/posts/b497b647.html","37223035a609c7f1007da47143c39ffb"],["/posts/b4d464b0.html","5942201d0f5b6404ed2f676b4e36691e"],["/posts/b5fb773f.html","4f6e700f970050f589c43c132f1219f9"],["/posts/b8d46b32.html","f65ea389b13fc02f65ff41bd760b5d65"],["/posts/c1b2c6c9.html","30c3cf6190166a482304b0226773bbc5"],["/posts/c2111cbf.html","a4186c760f557678d4b2010e544c0e6c"],["/posts/c316c2e8.html","c469d0784aee336231d8d25f39122865"],["/posts/c43e60b5.html","72111bdb534d9273c8ee1e42603c2dec"],["/posts/c497a412.html","2b7f4f90a85a447fe2fd485aeb54208a"],["/posts/c5395ba3.html","8d16b0966dc9fd816a0094a82f4f74d6"],["/posts/c5de299a.html","5d0fbf38b0641cbd84347e91fc444e77"],["/posts/c70bba9c.html","8901b94d8397fe9e588681724636e874"],["/posts/c797535e.html","e1de1f284a36076aeb675e1426b2a5c0"],["/posts/c7a62c79.html","9b604b493aa2135b31da0c6d5b91dc7f"],["/posts/cae2c959.html","28e3f82d93a69ee0511f9ee23cecdd7a"],["/posts/cbebef2b.html","a6de4dc9b50a6c0ec0a2325f874af7a8"],["/posts/ce25023e.html","de669a762185cf4cabb67f4d3c3055ce"],["/posts/d2fd4837.html","5072586099153ba3857338471e4e5ab6"],["/posts/d3233cbb.html","de09e0f1bf66b3672d262592f20f2602"],["/posts/d3a745a8.html","b8618eb836c3dd733d4c7113a9c3da3f"],["/posts/d7e940d2.html","3e1f669306f2f3cc4f1a011ec5c4c1b3"],["/posts/dc815d5.html","79aa8e32d53d553e2effcea4bb5afaab"],["/posts/de25b0be.html","fec7f8fb2fe5445ba22ade5cf96a6c2e"],["/posts/e2623b4e.html","447fc6f4325c1c5e76742170930f2984"],["/posts/e3ab6ad8.html","03c9f0cf03185ff35ed42b75ce04927e"],["/posts/e5018da6.html","037fe0583dae11e95a56e80f5ca7596c"],["/posts/e5963272.html","837e566b7247749bbf1e7a6e955b015c"],["/posts/e624b065.html","8e15df2dc4a8a9652202dd4c675e0fe4"],["/posts/e7c703bb.html","72a0abfbc60eceac5621322b4a2fbe30"],["/posts/e8f14b6c.html","4afb1b768ab3b102567edcc3d17ce63c"],["/posts/e91abb63.html","89a6a5f2e5ea545be8e112999853a70b"],["/posts/ea9a8808.html","9bf13af991b45602badc1bb2792510c2"],["/posts/eb784749.html","e8b8bafe807e825e7960716737315d32"],["/posts/ebaf2232.html","24916a60e0a3340e92ae69aa7a3a5492"],["/posts/ee1ed673.html","6f2ffdca1ad04a0b01efe67c81c6b6ff"],["/posts/f0c3ed61.html","01fb82c2ab78190cd9f4430f8b0b0599"],["/posts/f151ff43.html","3344a50b7a1c11c7ae18ed0523292f50"],["/posts/f21e7f84.html","b0aed291318ecc57029ce904d92d89e7"],["/posts/f230b0fd.html","2ff8b54fb3ae0eeec25cf01e0f7450b6"],["/posts/f663d5cc.html","e7b97a56927ea50f48945e856021c3a3"],["/posts/f730ad18.html","b5d3fb5bd28c6468745edff5a41aa80b"],["/posts/fc04d0d4.html","5f8edd79cd79d9db9da37fee0bb45794"],["/sumire/index.html","d6f31e653f370d92974b172be24c8991"],["/sw-register.js","868ce80c6f116a186164617d6d7aedef"],["/tags/APPLE-project/index.html","7fda97b1df4e0d5905c2c13820a9b2ec"],["/tags/BELL-DA/index.html","98795e7d3a71685bbe3e2128075d28b8"],["/tags/BL-Game/index.html","1d929aa6d144ed96e57b49b412c4f851"],["/tags/Blue-Dahlia-Digital-Creators/index.html","46a9d5f34f49729866fbeaeb5648c0db"],["/tags/CHUNSOFT/index.html","54febcf12ca7c85bc7f86246044ecddd"],["/tags/Check＆Stripe/index.html","8b86c6054f40cf65c2e89be3792029af"],["/tags/Cherry-Pie/index.html","262bc6f9600b819798e88ba8a3e9a694"],["/tags/Circle-Mebius/index.html","3fdd444454c91dd5f21763a52fc5f07c"],["/tags/CresCENT-BLANK/index.html","c67f6a4c1456a04477745e76a762a265"],["/tags/Dopamine-Software/index.html","82830acd5893b50777fecdddd7c16e6f"],["/tags/Dos/index.html","a6c4c4602132e057a96b99337b13210b"],["/tags/Earth-Well/index.html","964a649da8347a51a0e43fa601fe71b7"],["/tags/Forest/index.html","2b1632a73162b2c78b667d5e3777baa5"],["/tags/HaccaWorks/index.html","c7fac75e25bc6c7cebd3283c73f41bbc"],["/tags/Kanon/index.html","79bba29120d9fab66d9f4d7b7cd6b028"],["/tags/MANATSU-8/index.html","80f125971a0fef16094f797fa95996e3"],["/tags/MARINE/index.html","b9d2d0f4d20e11c232236c9dcb666331"],["/tags/MIO/index.html","f33c544bbe1c55962414c05596b24662"],["/tags/NAOX/index.html","63e41ef58ae5983942fe93d961df094a"],["/tags/Nmyu/index.html","f4733d2f4dca0035db46101eef110d82"],["/tags/O-S-I/index.html","b93cd144242e2cd79c8d28cc5acf8708"],["/tags/Omegaの視界/index.html","ef444975ff76ea54816df3c7bdf0a4ec"],["/tags/PC88/index.html","7625d04571961bb00de356f566318092"],["/tags/PC98/index.html","8e1a8665b0a803835eb1f46754d71b9b"],["/tags/Perpetual-Room/index.html","6d8f2c03284337d168ca8eeb26030ea4"],["/tags/Pleiades-Company/index.html","7e9ef29083f54575b07f64bef7cff288"],["/tags/Project-Twintail/index.html","996ec274e1d8c04dbe875437f5ed581e"],["/tags/RIFF-RAFF/index.html","5f9d1932d2f30f7b01049acd5f5699de"],["/tags/Reverv/index.html","d0a380169e2a97eefedc66a5e211564a"],["/tags/SENTIVE/index.html","2340a1f7ee2e149621003adc6392b655"],["/tags/Saihate-SOFT/index.html","73e236b6a97798362f24a7204d48c14c"],["/tags/Scrubbing/index.html","c23229aa75c40c8533199cc6d6c70ac2"],["/tags/Sky-On-R-imaginAtion/index.html","23c3701af40300539fdab513ac457b82"],["/tags/StrayMoon/index.html","5e3649f8e4368779f8a6ddc0ffbd83d4"],["/tags/Studio-Bu-Sa/index.html","38011244356e7d13d8811c037b0c6f19"],["/tags/TRANSPARENCY/index.html","8f0b81d63dad84e41178bc3de4e39626"],["/tags/ToHeart/index.html","cc98a784950bfdb2ac5ccac6edd56ffd"],["/tags/Traumend/index.html","fe23a8df8c01ac0a8e7082e5c15a01bf"],["/tags/Witch/index.html","01b8d3d1c7df56f8a0a0cc1eae9f7fea"],["/tags/adonis-project/index.html","aae8e0e8fbce38928dd87538e39bf3f6"],["/tags/capriccio-suite/index.html","1caebd3592d1633ebe2ad7b8879a3c90"],["/tags/flash/index.html","157ab668c106922eb98d573e5f6118dd"],["/tags/galgame/index.html","1f35c597e75e8ed86f89ab508173c2f8"],["/tags/galgame/page/2/index.html","478e115282ab9997dbde754c4605b06b"],["/tags/gal资源/index.html","15a7dc5b33d1794e77042f57db813c3d"],["/tags/gal资源/page/2/index.html","12ca8a79d0c773131266ac04046c2805"],["/tags/gal资源/page/3/index.html","83fac5ca55c456f41bad402491b1af33"],["/tags/index.html","2588da002ed2c1b36335ef933db5958f"],["/tags/rkr/index.html","0a18a74ef20f804f951203ce3241ea3f"],["/tags/team-eye-mask/index.html","d42266974a97d67fe9b9fbf973dc5973"],["/tags/ありすくろいつ/index.html","f7ccb6d3883b23578d17a2b621447fee"],["/tags/いつものところ/index.html","442b561c4eb21547359168e72a20a25d"],["/tags/きつねみみ饅頭/index.html","c576d999a5ae1da634c1c33f1cea65e2"],["/tags/ねこねこソフト/index.html","191a3640b07a888bdd9f7bfa0277ea8d"],["/tags/ねこバナナ/index.html","cdb13b7c53d126b25905de8edbeda482"],["/tags/はちみつくまさん/index.html","ac373b036224db90ff803e721e010cd1"],["/tags/ろりちせ/index.html","4b699b5bc1ce5cf8b16a0fcadd18cf24"],["/tags/アイル【チーム・TATU】/index.html","a50bc49bf85beb344e3738d3eb5cc182"],["/tags/アークシステムワークス/index.html","8b9bcf2a8549e96a368d29eaead88796"],["/tags/ブロッコリー/index.html","fcf2fc16ae861f88ef9e510b61ef1c8f"],["/tags/乙女/index.html","798f58e7842c82ba414f5046fbb04653"],["/tags/乙游/index.html","66c60c82f2fcf77321cb11c5cdea21a0"],["/tags/停产/index.html","8cd7c16c9cd5eaec0ab7a18bc471ed12"],["/tags/公告/index.html","6f1f185e0730e730b1dc72de7baa9974"],["/tags/同人/index.html","6d2177feb02aede2b1f0da4b6680cc06"],["/tags/堀井雄二/index.html","bc1b7ea57ddf04be04d2cbb58f5a2e23"],["/tags/外海なおき/index.html","28858c9d4d32940c58147a4a879ad060"],["/tags/女性向/index.html","c14caeca5d3d92d2c2a12013d88d31a0"],["/tags/桃野衿/index.html","d54489f09799386092a24629af748f0b"],["/tags/機械式少女/index.html","8a8bb048af1d36cc2d3c3e0ac7ce053f"],["/tags/水仙/index.html","417713f091aa898d7344fba88b3cd6cf"],["/tags/汉化/index.html","5d1ec48b17291778e9d4e1caab620712"],["/tags/片冈智/index.html","d0c729a9391b38d65b65602d2862ca1f"],["/tags/片岡とも/index.html","d1e9b5aa329f768caa3a6ecf11d22d9c"],["/tags/牙の刻印制作委員会/index.html","c02b401da5b9640151f3c8f822860f9c"],["/tags/牛カルビ定食-FLAT/index.html","9c39a2e8c77292cb4f879f511bd618c8"],["/tags/牧尾屋/index.html","e1e8715fdda031dbc42829224e00f663"],["/tags/猫猫社/index.html","ad6d9eb7f9354abe5c3215b3111998f8"],["/tags/王宮魔法劇団/index.html","7b6512395b25d902522771575a1618cf"],["/tags/画集/index.html","a50d2e9d0c927e3053ca03edd9dd3ae0"],["/tags/索引/index.html","6c21bec1f9568dffc572fea437432a48"],["/tags/缺失/index.html","a2de2dcaf47695ac350d5ccbd9ab3bd3"],["/tags/自购/index.html","b37288e50401e68ae4d7089db71b8eaa"],["/tags/茶葉☆姫/index.html","fb81820a4804bebf89d4fb1b5916e037"],["/tags/郷愁花屋/index.html","09f3f1d8a84c61da0776ecb92f3b4a99"],["/tags/閂夜明/index.html","cd6de84b70a0d26839c8d732567aa3c6"],["/tags/音乐美/index.html","b1a46ccd737f90b99e09422a47b0c41b"],["/tags/黒†救/index.html","1e0426ea6d5ef4754bf909bc925d1e90"]];
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
