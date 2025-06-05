/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d46212b64b27507bb67a77b62d54269e"],["/archives/2024/04/index.html","4e471ae2009e6ef44ef7fdfc469eac4f"],["/archives/2024/index.html","dd86280daff0286f81a49b7c28df0f8a"],["/archives/2025/02/index.html","80ce3fdc45e7b5f44de7b8114c9813be"],["/archives/2025/02/page/2/index.html","a0ccf144722b933c7c00897cdba7a05b"],["/archives/2025/02/page/3/index.html","72a6d49e3cc38c0791fd7d6a4ed68759"],["/archives/2025/02/page/4/index.html","ef47bb8de2b5df9bb835abc42f85a8d5"],["/archives/2025/02/page/5/index.html","e4680ab81a4b86bf0eb9f227bf347735"],["/archives/2025/03/index.html","7238ebf9a79dd5ae930b44647d3cc4a0"],["/archives/2025/03/page/2/index.html","60a51d92d654ce5b89e2feb470e6ffe0"],["/archives/2025/03/page/3/index.html","670aa20afc3be02ef2b6abfc09b10e14"],["/archives/2025/03/page/4/index.html","d80a2768bbbe6ba43264f5cd5c5d4c2b"],["/archives/2025/03/page/5/index.html","3988c3498798077468d7d46ed13b8caa"],["/archives/2025/03/page/6/index.html","177eff9a65b4534def8ba61cda27288c"],["/archives/2025/04/index.html","eeae05075a1725ea547d9532a221e9a0"],["/archives/2025/04/page/2/index.html","3eb7934ecaf39c5fd17ee347ce9bfa31"],["/archives/2025/04/page/3/index.html","9b926e607f73a9df7b8357c0c4118876"],["/archives/2025/05/index.html","5590d3d2d94038cc469c83296d7bc5e1"],["/archives/2025/06/index.html","7b92f47c07add45448ae961dd19d9e7a"],["/archives/2025/index.html","cb68fb13070830a66945105c11cf01a0"],["/archives/2025/page/10/index.html","551f99f8654f118c8084930259f46352"],["/archives/2025/page/11/index.html","c93923456062b149ed9976892d7aec81"],["/archives/2025/page/12/index.html","14500acf79016c2c610ed91bfdf015d5"],["/archives/2025/page/13/index.html","c853402113a727a15c3cb2b6887d3c3b"],["/archives/2025/page/14/index.html","d1b64b89051088c903b911404ed2cb13"],["/archives/2025/page/15/index.html","3281a43e356a05f1c70a83ebc391d671"],["/archives/2025/page/2/index.html","05448173e78193be2b98ef4632ea4dc9"],["/archives/2025/page/3/index.html","eeb48ada8455639273a7aea7375e4ea2"],["/archives/2025/page/4/index.html","ce1820ca476dd6bb5fe4cfc9dec9ace1"],["/archives/2025/page/5/index.html","516bc1dafbca03659ac285e9d5e5fd3b"],["/archives/2025/page/6/index.html","a6b879eb13733669e217537310310bc7"],["/archives/2025/page/7/index.html","ca8a1df4115861133cecd9e6278b250d"],["/archives/2025/page/8/index.html","5c7ea7cf8ec0a58b1bb47e7d1341e69c"],["/archives/2025/page/9/index.html","198f8be63033c2a3ce3109d9d216894a"],["/archives/2026/02/index.html","60f40ceaa2700525e5028537553c52ab"],["/archives/2026/index.html","06a5e333c59931983a886bb8ca03ace8"],["/archives/2825/04/index.html","38b7c67276c4a9b0f5c32df3144062a6"],["/archives/2825/index.html","0e18aefcbffd9bb0b814a277a1bf58ad"],["/archives/2925/01/index.html","5486134c4ba4baef41ab8dd8a92f2839"],["/archives/2925/index.html","4a812c87894453039372d8845df36d5b"],["/archives/index.html","7e0fb74467a92680bfb3dc899c9638ff"],["/archives/page/10/index.html","1ec80e2a2ae18f8dbe9d5eb93b73ea5c"],["/archives/page/11/index.html","d77a00fe254fb1ce629cd30732eaf735"],["/archives/page/12/index.html","1f988a8b2eb4e8ec2ad32dbe058c196f"],["/archives/page/13/index.html","4dc5c67406e96a6e52df509769b0b625"],["/archives/page/14/index.html","d0304dbb15ebcbc9cbe2fbb4ef9f6b67"],["/archives/page/15/index.html","2a8f087ed9d57337249e334987f8391a"],["/archives/page/2/index.html","b85a2dbb12a3f33ad6b19bd25b41820f"],["/archives/page/3/index.html","3a186cffdb689400d8c8f3534f7a8a0e"],["/archives/page/4/index.html","b70a52c7c33439fd3e000400d7a6fb1c"],["/archives/page/5/index.html","94b88681f6ace50d6ad621b56b0ee64a"],["/archives/page/6/index.html","4d3f978211399c63cfeb6b30ebd3d8ef"],["/archives/page/7/index.html","5faafc38dec6fe89b94a1776792a3224"],["/archives/page/8/index.html","7a4b252b69ffc59dec4ec09c8df20b40"],["/archives/page/9/index.html","f8995bc36e552a2b90b0b5e315f81c7b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","85c09484a59a82f6d4fd2e0d4f3b9df6"],["/categories/galgame/page/2/index.html","8046d3ad6afe567b670dcaa139fd9bf7"],["/categories/公告/index.html","a1c21a928a0eb437040235ca9c888bc9"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","052db88b06831cf2c05e6f79fcbf872e"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","d9e178832d4bf409237b090e815c2810"],["/page/10/index.html","227694befe60f51848eecb0a03a48618"],["/page/11/index.html","8f816a8065b7a684c1ec9ef3870a7a66"],["/page/12/index.html","9d5b46a3359e9b3878c8a90783a5553e"],["/page/13/index.html","dcd311e5f4c8698a6569178b8d76b696"],["/page/14/index.html","7f724fc6d7d35666621e348554370957"],["/page/15/index.html","e43895debaef71804743cf6a865209dd"],["/page/2/index.html","7e6ef71bbe3fe92707bc2b5811d78d74"],["/page/3/index.html","ec89ec5fd3595a22204834a25f2db624"],["/page/4/index.html","f428504b69a441fa30dc252161433a07"],["/page/5/index.html","21338a0c37493fc92666afd466655a21"],["/page/6/index.html","5f84648200c7ad537f323abd441712c3"],["/page/7/index.html","93c640f1af746ff5125ea4142e29ee14"],["/page/8/index.html","70ffb06443b48ab195b723d4e8e257ca"],["/page/9/index.html","c5a524d24466c7a2ee5bf319d3c4958a"],["/posts/10c9dd98.html","2d94a8cd8a6f9fbd546602911e048b24"],["/posts/126ebb99.html","6915a78cfa6ea8f0bb629f41a5407da9"],["/posts/1295b569.html","451a7e2228f14f24dc9fb19d411c8e63"],["/posts/1370342.html","5050e076b42e7d08aab07ef5d38519cf"],["/posts/15ef14c2.html","9e43e8dcb785829831ec0b3019bd0ee4"],["/posts/15f3959d.html","aa63c07278f76efca180fbe5b65645ae"],["/posts/18ab785d.html","8f82f36ba405b147498594d67b4768b8"],["/posts/1d59b71f.html","e2a2f1b54679ba79e6044c7577cb5771"],["/posts/20b3f3a4.html","a37b41c53de119cf0f80ac0f73e94d6a"],["/posts/245f1c7d.html","2adb083fc9c1afaba8dd302d1871bc88"],["/posts/252658f.html","64b1e72cc45e0cb03df5265e635c98e3"],["/posts/28397adc.html","c80dd1825a9b71dc4aeb238d2dd3884a"],["/posts/2ad07f54.html","91708e3cb9a4aa52910b8cbe5bcc04ee"],["/posts/2b38bce0.html","65f1c586258a446a2d21b02cd705cc97"],["/posts/2c0a6836.html","7314d55572ced1013a5a58da7caaff52"],["/posts/2ce39bcc.html","6ac059de262838a9a646b18cf8bb90d7"],["/posts/2cf620f0.html","58a1e5adfd78898ad385679262bc394e"],["/posts/2e30fd6d.html","92e48cdaaa6d1a88906a398f4bb8d5f7"],["/posts/30a413ad.html","6450ce7d8f59044b0bb7a84ed16d579d"],["/posts/34292736.html","f6f3744c78b592087eedf88bf94f5295"],["/posts/3468cbe.html","87fd85e5dff140a2d61f0ebe39c7cd29"],["/posts/39176dc0.html","05b73d5aa782c1d4e63ff6f8a017a932"],["/posts/3be6a165.html","e2585b7bce956217ed028394275d304b"],["/posts/3daf73b4.html","47f590bee2ad5c7aa25f2b16952b6e64"],["/posts/3e118dbf.html","85dcfd6727c32acf0e93df08bd07f6d0"],["/posts/3f7d823a.html","2fa48c5c0c17837081592b29743b15ae"],["/posts/3f978819.html","d5b223a01bcff1b143b78c85cbe61f7d"],["/posts/41dac80e.html","c98e8305c8c272143abdd75b1b912e86"],["/posts/43945723.html","052fdcf6b56f851d1eec3773f4ef54e4"],["/posts/44124a6b.html","4f3f562194e62fb1d2ae713597001970"],["/posts/476a3006.html","283a16202c2c4c253ef4cf20b4735107"],["/posts/47abb61d.html","a6a98cf5137b02412b54a2e022948074"],["/posts/4996478a.html","d2fd495bb5e102f395553725de2d7d8a"],["/posts/4b689be3.html","59b9127eb451d52b5b0b4c73fc43618f"],["/posts/4cf8423f.html","bc30edbbcf6c49728ca1e9381aefb8f2"],["/posts/4dcf85c.html","4a544b9d457c56828642e2db97dd486d"],["/posts/500cd322.html","52f57ace8dd773f9c22ae7cb79ebec54"],["/posts/51c9b1ff.html","4e660ff92482fc355055fc6089838a31"],["/posts/51ce68e8.html","619a100d2e28a72ce21f5ceb7e3aa501"],["/posts/52b5b3c6.html","966a3fe43cd741d34c65aca1848d371e"],["/posts/54f496ad.html","864f7740822d2b5763f4680b6b48319b"],["/posts/558e1f30.html","6d32f6c3562c8f4ae9243a55fcb4808c"],["/posts/5d8bea92.html","17fe59b4eefa0a92bfa84dbbb09f3eed"],["/posts/5f6e0c59.html","80cc195c6cb5e9659fd99faded11f4ec"],["/posts/61a63a84.html","249409c671af313483f1c621588d22fd"],["/posts/625ab7bf.html","666e135a30383a00492ef690231f57ef"],["/posts/6336a2f9.html","34f4eec2dff176cd66df43f47e7d377f"],["/posts/6432d61a.html","852fa5a93c28cec16a2fe098e2ea88a0"],["/posts/6515f032.html","85354c530e667566b1c6de51993aa945"],["/posts/6720ccdd.html","16310b70a7f5ab08c2cc88c43f05bb11"],["/posts/6a4b5ac8.html","6e158f46f6e386df4c4b754c19418501"],["/posts/6aa4177c.html","38d9d29c2d93b132e1445b3550ee3582"],["/posts/6b15f81f.html","cec694267f14e7b6c1977bd62411b44f"],["/posts/71131d34.html","848347261b18ffa3060a4da1887e8041"],["/posts/742fd48d.html","68283b96473993ea5c6182bbc14704eb"],["/posts/78a8a8d3.html","6a842852f56d2c1bedfb051764791232"],["/posts/7a5ef3d0.html","98c915979ccbdd03a629387769a29d11"],["/posts/7b41e1ac.html","f6796205c553713ef8c6bd205598c335"],["/posts/7b51011d.html","599e7c5c45b11d35f1463ee46d1248c5"],["/posts/7e3aa3e2.html","4bb8ffa25fb29c3709448a3dedacd0b3"],["/posts/80fe2691.html","e82d63855a4268cd2f50e96b9ad25b3e"],["/posts/81ac52e9.html","262f1657abf1b2ee61ead5314deaf456"],["/posts/82332d11.html","5c43e3b81eac6c22bc4b209300790359"],["/posts/8486f6f9.html","2b03569152e947f7c2d6bc2a725cb0a4"],["/posts/849b40f8.html","edb11652b3a9c72f6477c4910e0bae93"],["/posts/85c51d68.html","09e72a53c434b74d42044d8ba2f9d281"],["/posts/86a6c500.html","b93656602b9ba35ad63853c8e1b73554"],["/posts/886f8d3.html","157523d649633a40d32362565ded4d87"],["/posts/8a7cba10.html","3ca134a06df06bc6b591a075054bf5eb"],["/posts/8ac11b41.html","0333e351b3a66005bc5cdbbe05121288"],["/posts/8c3f2fd8.html","422e6fe6a74e7668c639ece695e368a8"],["/posts/8dd520d9.html","025cfb368eb35f96ebe000f815cf3904"],["/posts/8f555654.html","543ed44c875f7f2844e262748bfe094d"],["/posts/92a980c2.html","0cf36c5d7c3cb8207abca1a42494d9fa"],["/posts/92ce16.html","12de426d236ea082a29f7885bfe077e4"],["/posts/93e9943b.html","39a851f9fb6369cfc9081b6085231ed5"],["/posts/94d3c794.html","c881c31a7e863e4b23a1e99458691b18"],["/posts/96b281f2.html","a889bf4f6b7e68d73c6d00d7d072ea55"],["/posts/97f50eea.html","d9564e3b59b1e5b88d580f1f2852ebf4"],["/posts/97fca8be.html","ce3e3a71dabc4dbcd79cff031ba2fba4"],["/posts/98662d05.html","663bced84852ab67bcce64734e8dabd3"],["/posts/98ef47c3.html","fa68e461334d35be1a0985642c11ef23"],["/posts/9a2f6162.html","7423c871005e7726fbd0294bfe3671be"],["/posts/9b22a48d.html","f2060c85e3560a05983d218a9e97c8b1"],["/posts/9cb455b1.html","4b7a22cdd75be259546afc45f2c30898"],["/posts/9ecdeecc.html","685123d42be670edf6739e417afbbdd4"],["/posts/9efd7701.html","73a3010ab21cc558845d94f5f041eccb"],["/posts/9f61c1a0.html","58374d17a98248d86f7f0c59957c7166"],["/posts/a1de710.html","243ccca2afda35fd0f457cc51b0bbaed"],["/posts/a30eb0cd.html","d69f4823e2e31fa76c479baae7361464"],["/posts/a72f71c2.html","84247387fe04b5a6e706e969e3a1e0b0"],["/posts/a7634b5d.html","b011f7d6920cbb257d9d9dd5e4a2c406"],["/posts/a8c593b5.html","c63d744d3209720161597bbcb76e63c5"],["/posts/ad0c1efa.html","e6b8e1b6e0db6ff8d814f6eac14ed5ee"],["/posts/ada3f440.html","0d2dce2ee727c6ab04df2eedb5667cab"],["/posts/af1807ef.html","916cecb8a2d468a782452d1c6fa82742"],["/posts/b397bf03.html","9495565be26f61034732c08afb30f297"],["/posts/b497b647.html","9ed441bc46daaed3788e374fa376f3f8"],["/posts/b4d464b0.html","028d018726ce77baaf323249fb65f8f5"],["/posts/b5fb773f.html","bbe84e98991d8b3d96dbd09a1de3268c"],["/posts/b8d46b32.html","d73486cc87946cfcc016f8223ccdbccc"],["/posts/c1b2c6c9.html","55330a22a1ca3227bb167e72cf344744"],["/posts/c2111cbf.html","72a0f0bad77e5508a95b761931c133a7"],["/posts/c316c2e8.html","c56f959d78cd272c750bcf0b8c90d712"],["/posts/c43e60b5.html","1513cbdc0786dd7b456f832a45fb3722"],["/posts/c497a412.html","b2b94c2dc7959c93cf7ede3faf37e0a6"],["/posts/c5395ba3.html","782ac9ffc308ce08eb29ebcd655596a6"],["/posts/c5de299a.html","e01db31343b156caa803c7f1b7a6f34e"],["/posts/c70bba9c.html","aab7aeebc47e060949cf04549b31d3c4"],["/posts/c797535e.html","6cf83e6216a5d2a4c42ccf62b32edfe7"],["/posts/c7a62c79.html","4d33ddf9ea884cf5549ef0995eae86d4"],["/posts/cae2c959.html","b0869ec3992e4aedff4444dba26dd9a4"],["/posts/cbebef2b.html","af7ef74da51eec2bee20a4931649e565"],["/posts/cc4c0017.html","8ae8b5d60518c44bdbec65f8f6589677"],["/posts/ce25023e.html","71cc1a3639fe697af7865594a353599a"],["/posts/d2fd4837.html","c5303e106232fabc0d12ddd00d2e10d3"],["/posts/d3233cbb.html","2e030c429bf779318ee1e4d1356c99da"],["/posts/d3a745a8.html","197b590e32737cd0ef4bb26a291771b1"],["/posts/d7e940d2.html","3fc27471775201d8242b27bc2b3c38f4"],["/posts/dc815d5.html","090c04936201ccdd02fce929a618531c"],["/posts/de25b0be.html","333c95d041125d807e56f1a017827f5b"],["/posts/e2623b4e.html","545e29a325bd5ebb87dcf638c0675980"],["/posts/e3ab6ad8.html","0785e0bc23868dc6bc0d43fb0704c2be"],["/posts/e5018da6.html","d8203dbdd67459ac19d936f501ef81f6"],["/posts/e5963272.html","af6767304b223e84fa9828523d08a341"],["/posts/e5ef4c3c.html","8fb19c2b4903eb86a81296ff6e86b50a"],["/posts/e624b065.html","cb446d881b773aff0981a9844c85cc61"],["/posts/e7c703bb.html","81369a1645ec53f684583edff1eec01d"],["/posts/e8f14b6c.html","d1a79281dce99c5bae981791132a9485"],["/posts/e91abb63.html","5db9692da813bdbc81e62d4a7ee0f8e4"],["/posts/ea9a8808.html","e15a45cc657c3eac045cdd1368af6656"],["/posts/eb784749.html","b1404226c7ceb9846ac924e1c4bc9fbe"],["/posts/ebaf2232.html","bfcd117406583101ecc786a13ce5c982"],["/posts/ed75f185.html","fad2c04acaee325665194dea8491373e"],["/posts/ee1ed673.html","28cdc3f930cc05bb51255f1ca711c37b"],["/posts/f0c3ed61.html","6f1bd85957bec2e1510f2646aa980520"],["/posts/f151ff43.html","a5515bedade23cf943d29edac739d461"],["/posts/f21e7f84.html","ce820ad66f3bdc2e8c82b35c82e7670e"],["/posts/f230b0fd.html","72fab8abc9156e237efc3a0879eb5ed4"],["/posts/f28a7877.html","a37cb4939a0e120774698f83090146bc"],["/posts/f663d5cc.html","8e5d7105bc89e0cdd50d5b01f863dc20"],["/posts/f730ad18.html","74e69c869eb32a548a03db865d4d35db"],["/posts/fb5d4608.html","1618293e53849cba06093d7c5665fd24"],["/posts/fc04d0d4.html","5339d4d39c1f70fe81ed7dad297b06ee"],["/posts/fc455f81.html","2b18235633911a3132dc62d24bcc3c58"],["/sumire/index.html","86890ce273f72f2547983dd68a625b12"],["/sw-register.js","c4e5f5596f62f19dc81fbfe2e771e4a2"],["/tags/AKo/index.html","7139cc1c005ce9b91eb6b3dea789ecc6"],["/tags/APPLE-project/index.html","df0fc76c44df95d365396b6dc26efb9f"],["/tags/Ankrache/index.html","d677bed6d09986dad9f50a4afe8688ee"],["/tags/BELL-DA/index.html","bdf3c7178a307dd9be12126d5010bd91"],["/tags/BL-Game/index.html","13a3b2150633259d9f1156ce64eb598d"],["/tags/Blue-Dahlia-Digital-Creators/index.html","7c1f00d61d2ea386b73bb525ba541efe"],["/tags/Blue-Line-Games/index.html","850a39fcfaa3ea9b31873a2dd18aaa95"],["/tags/CD/index.html","fd8a1a612b09fe23d84497613b2b263f"],["/tags/CHUNSOFT/index.html","661285eb618632fbd457e058e6cfab85"],["/tags/Check＆Stripe/index.html","97a2f24ad598369d68316a182ac74c5a"],["/tags/Cherry-Pie/index.html","03a75cf94cad5391a5bc2dbfdce5559d"],["/tags/Circle-Mebius/index.html","7e148c753dbdb8bed735911f962d612e"],["/tags/Cosmillica/index.html","718362ac4b97f1fb14ba377a73840825"],["/tags/CresCENT-BLANK/index.html","37fa8b86a5bcd899ce30f1e81077f681"],["/tags/Dopamine-Software/index.html","9873da496e4b54212f522d8056a23909"],["/tags/Dos/index.html","835dbb834dad091d6dc732afd6155327"],["/tags/Earth-Well/index.html","facb02464a3b39e6c0300dc7a897fec2"],["/tags/Forest/index.html","07d9d8bc301c960581f65c2af75499a8"],["/tags/HaccaWorks/index.html","c3ee32ed055bcd2a55ff0992d7484fd6"],["/tags/Kanon/index.html","8db42cafae30c8e194f46e6091113706"],["/tags/MANATSU-8/index.html","68ef365b9f3cd67c52b298ed30d8d8ff"],["/tags/MARINE/index.html","cff995cb85df522419eca8074f582dd3"],["/tags/MIO/index.html","ed4c2e3778b7f0ff14b4ef5daae90877"],["/tags/NAOX/index.html","050d981f2a36750c4f4d03ba81bfccf5"],["/tags/Namikaze-no-Uta/index.html","289f476c1de45382979a9129cf148d76"],["/tags/Nmyu/index.html","a416f7abd26a2b3225cd714a8272a14d"],["/tags/O-S-I/index.html","0a4f1f17d8baef4274307466b392f4aa"],["/tags/Omegaの視界/index.html","f6525ed4bca9d85c3ba784cf1f124b93"],["/tags/P-o-l-c/index.html","b9999b1626b79adde106abad0e5a709a"],["/tags/PC88/index.html","0e3705e1de3cddc0e6623fd0ae6c7938"],["/tags/PC98/index.html","8edce02d68a865fda337048333e28a74"],["/tags/Perpetual-Room/index.html","917740e6110d176b651a697ffa349438"],["/tags/Pleiades-Company/index.html","38a388276872f33647f8d48f04891507"],["/tags/Project-Twintail/index.html","98c2e20416cfd399e6a710ac817ef6bc"],["/tags/RIFF-RAFF/index.html","52efea1a31e967c660ce466ea05a57f8"],["/tags/RPG/index.html","f44df742dc9b25b4d993a3d6a3702465"],["/tags/RPG2000/index.html","936a6dd1659bd1a76c004838531e9782"],["/tags/Reverv/index.html","bad408dc3cf5dd8cd06115f4250187e2"],["/tags/SENTIVE/index.html","2b4de6dbc6e79d736c0f9302d20927ac"],["/tags/Saihate-SOFT/index.html","f94401024317e052385b57c99229039b"],["/tags/Scrubbing/index.html","6bdbde1bbe8262d3e752233288198d5e"],["/tags/Sky-On-R-imaginAtion/index.html","80a54704df8c9753c18d8971d43e3232"],["/tags/StrayMoon/index.html","a5de8c21332d0fd1589e5a3e11dfccdb"],["/tags/Studio-Bu-Sa/index.html","755bd2d14dd65513150ae91c2be5939c"],["/tags/TRANSPARENCY/index.html","79966774a5b9e3c4e9eb0b6246c95d07"],["/tags/ToHeart/index.html","85bc790b01eac9f690ce7b01fed7acce"],["/tags/Traumend/index.html","5941901e38167e059fc8df1e70849888"],["/tags/Witch/index.html","6a44bdfd74429630a169c8a17a4a43d5"],["/tags/adonis-project/index.html","069c64f8eab8447addad631cfe5d2111"],["/tags/capriccio-suite/index.html","d739413a9f5416683fe3184bdd96d5e5"],["/tags/flash/index.html","9580944bcd185d82527fb681bee0e599"],["/tags/galgame/index.html","a7636e92e7bfa4a1944b7055a2b9f1c6"],["/tags/galgame/page/2/index.html","f9339eb10c33d066f283a38579f90e1e"],["/tags/gal资源/index.html","3fc22e7d51138300bb50ef5747c0808f"],["/tags/gal资源/page/2/index.html","1c549fda6b065548ab742cc0bb9b55dc"],["/tags/gal资源/page/3/index.html","6c2cd2ce59229d0ea9603571c1376dd3"],["/tags/index.html","133732995ea9f321002cfc924c47d16f"],["/tags/m-kz/index.html","9cdbee611352dd642f7248f1074bbce8"],["/tags/purgatory/index.html","d80cf5a0c9ff9835430da48f39497843"],["/tags/rkr/index.html","4041539d0121b94e5b583cdcfefbffdf"],["/tags/team-eye-mask/index.html","ab4446b99370bbc5175b68af956ce713"],["/tags/ありすくろいつ/index.html","21c9211a6500187ce837d260e640ce85"],["/tags/いつものところ/index.html","a425f67f2c03b5d2a384b2538ab75e7a"],["/tags/きつねみみ饅頭/index.html","6ebedc5bced2133266f887e9462b94e2"],["/tags/ねこねこソフト/index.html","d351350fcea4884e83532aec48df720c"],["/tags/ねこバナナ/index.html","f82493520bc86658e60b7c6a7bc0857d"],["/tags/はちみつくまさん/index.html","7709bec47d6a237dbca628dd4ee4eefa"],["/tags/ろりちせ/index.html","12c29a13a1ffd13d0159cbea537592c8"],["/tags/アイル【チーム・TATU】/index.html","2a7a6508702f9e796e763b34fcc51dcb"],["/tags/アクアポラリス/index.html","53b8ecb637d6b0b67898b30834e49202"],["/tags/アークシステムワークス/index.html","523ba62885947fbb29cde0208b0e5a95"],["/tags/ブロッコリー/index.html","91cc29299ee8e7fc2cc47d7a75960f45"],["/tags/乙女/index.html","6c62a72c1e08c6314ab4facf94171025"],["/tags/乙游/index.html","17d7ecee026d7ff6b0163e95e0d0ecfb"],["/tags/停产/index.html","69b948ff3b9e67925c3a267ea5322b73"],["/tags/公告/index.html","c0012b2926f512cd3ba188534b92d599"],["/tags/同人/index.html","b68a99600a8cee2fdd60315333e3cb18"],["/tags/堀井雄二/index.html","b71fe22cf4b2df1190bf24fdeafde622"],["/tags/外海なおき/index.html","f120f59354f36b6891eb3c7cff0df0f0"],["/tags/女性向/index.html","015bebc10e885535d11edb41abfb6084"],["/tags/御茶ノ水電子製作所/index.html","894000090dee02501114cf186102b5f9"],["/tags/月の水/index.html","86b7e57201b8ce0f7bc4f9424696aeff"],["/tags/桃野衿/index.html","17efd5f33d2be603d6acf255f6d873e1"],["/tags/機械式少女/index.html","3fe9f2abcf6af4f5d768eecbcebef47e"],["/tags/水仙/index.html","b3af48881627770a509923f662c8bfa2"],["/tags/汉化/index.html","9cb3a8f23cae0801e20a494db2ff2057"],["/tags/熊月温泉/index.html","baf708d2017d1bfb9a7b2489be7fbbad"],["/tags/片冈智/index.html","ea30e8f02fb8e3a1bac45fd6f0634168"],["/tags/片岡とも/index.html","73831df7f10991873682d164c7838541"],["/tags/牙の刻印制作委員会/index.html","56ee926fad86252c8b76c6c77cd8ad38"],["/tags/牛カルビ定食-FLAT/index.html","e6a2138762e79c3ed23e20ff427c1459"],["/tags/牧尾屋/index.html","23cd488130217f015f9578dd0ddea785"],["/tags/犬茶屋/index.html","35ed19e93712db1940d1d98d802f9c99"],["/tags/猫猫社/index.html","80300fe99377a881ef1f0eb82789508c"],["/tags/王宮魔法劇団/index.html","d41e95c2ba8e58f669e681d712071a77"],["/tags/画集/index.html","9df1f0b02d1417e73faf103820c8fd07"],["/tags/索引/index.html","c07832ba3e201915314e0e6be831c33d"],["/tags/缺失/index.html","1be06cdb7c2b45c6ca84a15630989185"],["/tags/自购/index.html","ba4aeb20a58e89335424f9b4feb6c42c"],["/tags/茶葉☆姫/index.html","65ed25e99cb49fabdd554fe02606d0bb"],["/tags/郷愁花屋/index.html","5d4dff9b364459845dead254b5502f42"],["/tags/閂夜明/index.html","8e14ab44ff0764408b8a837f579d4698"],["/tags/音乐美/index.html","969bdfe41849e52fb652ce6dc6207076"],["/tags/黒†救/index.html","d6e2364256c2126a292a92e6db196ddb"],["/tags/黒百合っ子大集合/index.html","d337c1932a8a06bfa2a0da3211ba3c9f"]];
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
