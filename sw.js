/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e20fb045898e70751400e4a17eca4998"],["/archives/2024/04/index.html","492d9eff10e44dbf704b92260ef86706"],["/archives/2024/index.html","5ac2c336e2363a1ab6adebc34ee6d02d"],["/archives/2025/02/index.html","f5a26329ecb456dc56c39a87d6daa91d"],["/archives/2025/02/page/2/index.html","78297ba94945eb42d428236b17abb46b"],["/archives/2025/02/page/3/index.html","9f0ceeb7741b8f0338f640c90f35d4b9"],["/archives/2025/02/page/4/index.html","233a95596354c6f5423d1529fdf37143"],["/archives/2025/02/page/5/index.html","39d4a9ec31abc3362599e9e5f3b09db3"],["/archives/2025/03/index.html","f037eab3c107c6b53e4e7eadf3e7a227"],["/archives/2025/03/page/2/index.html","9e92b89c614678055142e1fd861214aa"],["/archives/2025/03/page/3/index.html","feb62a30939fdc8e251da4c119067526"],["/archives/2025/03/page/4/index.html","1ffd52310499f8cbec7e17b9224aae14"],["/archives/2025/03/page/5/index.html","698b722f1456016050c12a4042272ee8"],["/archives/2025/03/page/6/index.html","1ef5c29a59d08a32c76539d937c73b43"],["/archives/2025/04/index.html","41fc28db3798381cdb5d22ed59cde93b"],["/archives/2025/04/page/2/index.html","726a1b5d13d9497395e4b065c59d1a55"],["/archives/2025/04/page/3/index.html","b9c8bacb3639f775bfc255c50e967004"],["/archives/2025/index.html","5ef2908e44ebc8e8544467e44d53e42d"],["/archives/2025/page/10/index.html","b142e8d90ce89c728cfe8d36457391a8"],["/archives/2025/page/11/index.html","18cd9e5ae9edceb1f7fdacc1010f9574"],["/archives/2025/page/12/index.html","4d318c4c2f89241ca981ed225aa838de"],["/archives/2025/page/13/index.html","7fd5e969bd2bc10fa469c4de757158d6"],["/archives/2025/page/14/index.html","985044b7ba24353f11a3f0211ef7ee9d"],["/archives/2025/page/2/index.html","aee3fe4e773f7d4232683d1a48e03af2"],["/archives/2025/page/3/index.html","d2c34a43894b4480da8d275f0d657385"],["/archives/2025/page/4/index.html","4a3198ab78b0ad944c99ea65d7722c01"],["/archives/2025/page/5/index.html","f1206b70c9700e080c5ac5fc7c4d0c4e"],["/archives/2025/page/6/index.html","bbb4e031ebd670e2fe438b2c3dba2c6f"],["/archives/2025/page/7/index.html","3138abc447c9aa1d15e678285e4db63c"],["/archives/2025/page/8/index.html","91302a7894cdbf720500f6c6d00c9648"],["/archives/2025/page/9/index.html","24fba8ced8a32891951e67fb272ff6cf"],["/archives/2026/02/index.html","dd63b327ceab834dd74c0af4c2de2983"],["/archives/2026/index.html","85129b73d6671229cd4693e68d616267"],["/archives/2825/04/index.html","26673af74f354d1c64cbea3413896a82"],["/archives/2825/index.html","a2911f8bf2fd06a1af6f9a7e83568fff"],["/archives/2925/01/index.html","d75cab2bca4bfb038a8e87d72b7ce786"],["/archives/2925/index.html","6e50e35939415b88050afdf5747e26e9"],["/archives/index.html","d3f2d372460150b1e3c5a6ab60cb5dcd"],["/archives/page/10/index.html","1d0b5e2ebbb579aa7506d66d0e44d22c"],["/archives/page/11/index.html","238c598030a4af461eb4560699b4fb4a"],["/archives/page/12/index.html","2074076b7dec1b891566b4893865b73b"],["/archives/page/13/index.html","a3db41e5e964c4672d07ab47a3c1c1fb"],["/archives/page/14/index.html","861de2d6f8d732fd62bea1339d68ffd0"],["/archives/page/2/index.html","0d790742d74ca1b7d83047bbc42517f5"],["/archives/page/3/index.html","f186302faa4b5d2fe0bb90b23065957e"],["/archives/page/4/index.html","055e9043306bea652c25e64de84a1ab8"],["/archives/page/5/index.html","385100f497aaf8b9ddd037e196bdf800"],["/archives/page/6/index.html","275eed919826eb364ca79462a1901bd3"],["/archives/page/7/index.html","2fd8f1ee37c87c065381427d36a95a2a"],["/archives/page/8/index.html","9efc5a9d29eb56779e7e3204bf22292f"],["/archives/page/9/index.html","85f746b0213a065bde5298eb10211d0e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","b0b1236310cfc6507d74987e275d8eeb"],["/categories/galgame/page/2/index.html","e493a8ea3d6d189455e1dc3b6115b9ca"],["/categories/公告/index.html","82178866f70067ef39299781b656dfd3"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","da177ff908902c48c3b0da682181fe2b"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","ac5ead7179d3a46774bb0cb2c30523d0"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","a9da69e0d938f79377983c15994b55dd"],["/page/10/index.html","87259c1d362979640571811000af03f6"],["/page/11/index.html","48ed20bdf906e8c98eb9327dc76be89e"],["/page/12/index.html","1e9d12cc4bfcc73a3bf1c349f080efcf"],["/page/13/index.html","31d7aefc8bb4624cff7b869afbbcec37"],["/page/14/index.html","79f56f68fe858798020ba1366b9bc8f3"],["/page/2/index.html","faaa3fab636036877a58db48fc6a9e63"],["/page/3/index.html","1e44fad851b31a10a8ab562506eae16a"],["/page/4/index.html","5a2fd48ae25204c5daa947911b51db46"],["/page/5/index.html","0cbc1c1c9398e6a02adf22c43f8ea42d"],["/page/6/index.html","0c8a84bf2f24647996622708ba988ba1"],["/page/7/index.html","e072b4bcc62512a56134c608a29af485"],["/page/8/index.html","db2afba381cd8e456cf1f889a1f0248b"],["/page/9/index.html","cf5c7bb1fbd38116e3a8b904b7767f6d"],["/posts/10c9dd98.html","6fa54c89434f180d80f98ac9f79be6f1"],["/posts/126ebb99.html","829f4cbf07c6c92012bdfd050a9d0a6c"],["/posts/1295b569.html","9f5d9c70463c4d86576ffdc0c2d2264c"],["/posts/1370342.html","708d7cbb8493a974458590a286458649"],["/posts/15ef14c2.html","b5800a0b6977129eba73f760adaff4a9"],["/posts/15f3959d.html","a05d4b874be97ee0fbf0fc0fe3b84400"],["/posts/18ab785d.html","4aeee6248f95d51961dbf2317a8e5f00"],["/posts/1d59b71f.html","53e902135e41a736ab566f5137a353bb"],["/posts/20b3f3a4.html","df8de92d368990c1d5c1f5f7f19d9c30"],["/posts/245f1c7d.html","bd8cde552dde0ac356afa981d272c4d3"],["/posts/252658f.html","19515510ca3b66f8abf5afe0a8b5b479"],["/posts/28397adc.html","b971665d0b3856194cb8b1f0175d8d28"],["/posts/2ad07f54.html","f5b23eda97cb35a7ffd2793a98ec079f"],["/posts/2b38bce0.html","1a4af816fcdb8f6d8c1f1322aca95a21"],["/posts/2c0a6836.html","519085f75de674fbd609e8d9131fcbf5"],["/posts/2ce39bcc.html","b6758c580c6ad60d2723d3ef9870b225"],["/posts/2cf620f0.html","5d12247640ec60b8033f4291130efde5"],["/posts/2e30fd6d.html","723b4c994cd0169dd72d710d68bd2e22"],["/posts/30a413ad.html","3a294611c436681c660aeee0dd56ca3c"],["/posts/34292736.html","fbe2b737590d0dad28e3a5c5322a8dac"],["/posts/3468cbe.html","6ca751ea07594558fe476a4084dc4afb"],["/posts/39176dc0.html","873d7ee6ceb0081fe4c28afb21e91309"],["/posts/3e118dbf.html","bca95ab6055f32ebb0b6c7b1d31a0015"],["/posts/3f7d823a.html","f8cda64428405f9b5e0e384baea588cf"],["/posts/3f978819.html","c33b10f7cbb9217300e3a39ac4437cf9"],["/posts/41dac80e.html","5b6df66768a591dbc0fd34c0f064eb06"],["/posts/43945723.html","11a50705085a142bf5dd491d0ee459d4"],["/posts/44124a6b.html","641d6a1a540659f4633be45698dc7308"],["/posts/47abb61d.html","5df8215f4c949f18b298f2e5b7427a36"],["/posts/4996478a.html","c2adf1d80a982d9696ce4b2012c81582"],["/posts/4b689be3.html","0cb4950f21e7f455ad31c769aa532b80"],["/posts/4cf8423f.html","1060be0e79e1b5b3c13814c6d07250af"],["/posts/4dcf85c.html","4e202e907db41f3492b5b8529be58448"],["/posts/500cd322.html","2e63eb48ff090e01d4e03ae7d808aa41"],["/posts/51c9b1ff.html","d8ebedacf539fb688d2012a195a03b17"],["/posts/52b5b3c6.html","1cbe562e9cc36e3560683b3b1812b5fa"],["/posts/54f496ad.html","b17892f20a3216ff5f7a523012e57fe4"],["/posts/558e1f30.html","e890a43f307fa7ee6491c7a6d292da0a"],["/posts/5d8bea92.html","68b896c770ddbd5f180a2aa69effd400"],["/posts/5f6e0c59.html","6ebeba7c97c4cc183888c927473e8fd7"],["/posts/61a63a84.html","d7922bec1b64396f4b3af3246d07f963"],["/posts/625ab7bf.html","3f800cea120e1142d76021620c560ce7"],["/posts/6336a2f9.html","0fa702cfa850db80c79a83362ebb7be9"],["/posts/6432d61a.html","ef5fbdfa919a80379d6d6b3a4b45cc32"],["/posts/6515f032.html","fbfb36f2b18720d5ef54ee0d872312f4"],["/posts/6720ccdd.html","90d9ef5b9b0bdb5cb223856e103fb1b9"],["/posts/6a4b5ac8.html","541243558ef0a0e8a0b1b2f1cccb63a7"],["/posts/6aa4177c.html","ee774da308f8d34fed9001c0bdc2b379"],["/posts/6b15f81f.html","fec046f4e1c3b3e5c69b869bdc58adb8"],["/posts/71131d34.html","edcf5e44a8164945cb78bc1be1b770c1"],["/posts/742fd48d.html","84c0f48fe3abc44f612793234ee14d62"],["/posts/78a8a8d3.html","9b2cf5d5ea3739ca8522da0df8b57210"],["/posts/7a5ef3d0.html","857e4e10331978155ec68fa990e68a00"],["/posts/7b41e1ac.html","29a25cf54a15fb12f31c76b0b10d9149"],["/posts/7b51011d.html","456c6c590a3a3517e2ffe7f6db9c5251"],["/posts/7e3aa3e2.html","f97a6e03a4ac2b42cf66e2ff547d1930"],["/posts/80fe2691.html","806ffd997d5b2dbb2974cba8cb4e2815"],["/posts/81ac52e9.html","339d6da68d773b6e36c1a2489f4c796b"],["/posts/82332d11.html","799784ecc432bf1001f6ae4667ca0bb7"],["/posts/8486f6f9.html","470536ffd668f443e925870b109c4237"],["/posts/849b40f8.html","a500b102b87bee039219abd42b0861c2"],["/posts/85c51d68.html","866be180c9edebc9470b5c2bb53fc8aa"],["/posts/86a6c500.html","cd4743df66db283d4f430b3d2212fc9a"],["/posts/886f8d3.html","ce1d1c65ea3e7d0684677ba7acdab571"],["/posts/8a7cba10.html","2a74978d0f2ccd065bb40413abbf00af"],["/posts/8ac11b41.html","cb57418127f46ebedceee38c7404016d"],["/posts/8dd520d9.html","7c0658de52a223b428511dd11b30031c"],["/posts/8f555654.html","4c0a4ecd0a55771756601e7cb76d1a13"],["/posts/92a980c2.html","dc270faabbbf967d16fd6c30418c6204"],["/posts/92ce16.html","96976b01ba59d6eef485dce09abb3f04"],["/posts/93e9943b.html","20a7ada75800c70c630e1421ec2c8c8d"],["/posts/94d3c794.html","30fa0d574f9063df5ece4f4ab896a7bb"],["/posts/96b281f2.html","bec12fdc1fa6282dacc07abac0fa285b"],["/posts/97f50eea.html","95598c399b0eeb0d427d8f39a6fd6706"],["/posts/97fca8be.html","f02db793a40869cadfb08df02e16d9fb"],["/posts/98662d05.html","06edfe90c32f5b68c34e0a46ded56683"],["/posts/9a2f6162.html","d657458e76371c5134c06a7f37790c93"],["/posts/9b22a48d.html","161a14e11e0883fca75ef137e22b2662"],["/posts/9cb455b1.html","3009b1cb7d12ac862cd4394a7bf0dc8f"],["/posts/9ecdeecc.html","c6c9fe3b81c473da3122afa8e44a66d7"],["/posts/9efd7701.html","9c7eee6d519753201c4187d0e26d9e45"],["/posts/9f61c1a0.html","236cacad627f73c157b2a2be1f4521c8"],["/posts/a1de710.html","85d3873b265b035569d23f4a22d87ebe"],["/posts/a30eb0cd.html","0b935abe71f8c9eac9c350eabaebee6c"],["/posts/a7634b5d.html","1148e667f3cf585be603f402aaf156fc"],["/posts/a8c593b5.html","5c34158199ffbf098bd8b4a837aa146b"],["/posts/ad0c1efa.html","4046106ac233a8f07361c88d9e00985d"],["/posts/ada3f440.html","ead49fa961121eb5fcbbcd5a5df56aa7"],["/posts/af1807ef.html","4b7e531240a5cc5977f386a6b35d606f"],["/posts/b397bf03.html","244d9b2d56f6fa59ac68df30c12126c4"],["/posts/b497b647.html","b21649034640f225fa491c64abb9bbc9"],["/posts/b4d464b0.html","43780351fa8257adf28779b8bad5eef4"],["/posts/b5fb773f.html","f16f9aeb32c157689f1e071dc06d6104"],["/posts/b8d46b32.html","78d0b6d79b4d533384c028df34c653b2"],["/posts/c1b2c6c9.html","0ec0a16942603d44d5c514e5fff3de4d"],["/posts/c2111cbf.html","3b0c7d4dd1f7c79334e72fdaed375735"],["/posts/c316c2e8.html","8f9d39eb5c52841d40185297957fe359"],["/posts/c43e60b5.html","8d26cf4a3ae6ce44b2e9f6854d928f80"],["/posts/c497a412.html","fd6ca9251b231c8fcccc9608752a1bd6"],["/posts/c5395ba3.html","38ffb8a83ad0b3dd5722d8759aa73cd9"],["/posts/c5de299a.html","115eae0f3f55700a0b0494d6e78ec2bb"],["/posts/c70bba9c.html","ad0441c7fcb5d7ade3df0e05daa9a511"],["/posts/c797535e.html","636f2c0ad890cec320ca9993153c86c4"],["/posts/c7a62c79.html","8e04ff42d6e412a59e78504037564474"],["/posts/cae2c959.html","83bdab4100bf9c05521ed7e49f329b2e"],["/posts/cbebef2b.html","3de458274d149c2f810aa402aa3aa11f"],["/posts/cc4c0017.html","4d19161b6e407f1adf33f99180969151"],["/posts/ce25023e.html","18ae25ede6c0e6023cdb95a5b64f5f6f"],["/posts/d2fd4837.html","d182e826455ad4f96f07764bcd5a0b19"],["/posts/d3233cbb.html","23f7bc29deb7dd2c73a8598cf51c5166"],["/posts/d3a745a8.html","21adcfa818b5a4b0de8db6139bd56942"],["/posts/d7e940d2.html","43fd42be5ec81afcecddb4b956c27c07"],["/posts/dc815d5.html","ba470c596503e792320b0ef0adb4b935"],["/posts/de25b0be.html","9b3ddb62f4daea1ab3978603dcb49703"],["/posts/e2623b4e.html","26f85864e2f8eb7191f1852aba6cf8e1"],["/posts/e3ab6ad8.html","367e7d681f9f1185f78a0e6d2e8c7e03"],["/posts/e5018da6.html","8da2aeab02e3f05c0103ddf956e9d034"],["/posts/e5963272.html","516d917a7e739f1a83d6ba56377fd477"],["/posts/e5ef4c3c.html","8713d043738a92a41bfc137adc479d6c"],["/posts/e624b065.html","5c89e7e26bf783516874ada6d8ab4d3a"],["/posts/e7c703bb.html","2bd2906868a5f82bbe3c4f0ff0b2c9ec"],["/posts/e8f14b6c.html","7df9bdcd987175b3e46c50055656bc41"],["/posts/e91abb63.html","a43d58486caad5a42b03fe747288b9b7"],["/posts/ea9a8808.html","3c823654e03cf176c59429ef65c20518"],["/posts/eb784749.html","614a6d737902dc4a5b514272023fbeab"],["/posts/ebaf2232.html","afc7c8ff5892a7e973d36c2011484dab"],["/posts/ed75f185.html","337f4acd282569577a7ff02dcbac2e2c"],["/posts/ee1ed673.html","3a9462ba5e8ee48aa294bb5d91a2dc39"],["/posts/f0c3ed61.html","6eb6e1e13636f97c34755601d6c527d0"],["/posts/f151ff43.html","2529da3a88145241a4c9115d0cd04349"],["/posts/f21e7f84.html","f28c696d25669075ac73314cbe8bde84"],["/posts/f230b0fd.html","af287d7f125ec01a44cd8fcb25d4a66c"],["/posts/f28a7877.html","ff7a1b1a20f700bf7dbda9365f010526"],["/posts/f663d5cc.html","851c7673993b921b78062bc68bf54f3d"],["/posts/f730ad18.html","302d915643b3c8d885bdd0d4c2f0cc87"],["/posts/fc04d0d4.html","54a8ccab84965d1692af59d66cf30a49"],["/sumire/index.html","e0f1ba7270ace53bb3e87531b9d906c2"],["/sw-register.js","65b8bdadd47b8b2005259624826a3f74"],["/tags/APPLE-project/index.html","4b5c6634729f9e410febb8b8edf44172"],["/tags/Ankrache/index.html","9a36de677b9be1681133bcb542eddaf7"],["/tags/BELL-DA/index.html","17e94631a3af85c284bdbc3c8c00fe33"],["/tags/BL-Game/index.html","2f375f2650ea53d0315a7262411547e6"],["/tags/Blue-Dahlia-Digital-Creators/index.html","c1a4d3d31796b352a1ada2ee4fa520a3"],["/tags/Blue-Line-Games/index.html","73a3cc134bf84daae295e5249ab9a9d5"],["/tags/CHUNSOFT/index.html","22a242cf540a98866c0f505496e5d99f"],["/tags/Check＆Stripe/index.html","638423701bd7cf2c8806bccdc7139650"],["/tags/Cherry-Pie/index.html","e5550b77ea03476ac5dbc9b92b5bea52"],["/tags/Circle-Mebius/index.html","6c1c965a6b6619d99faac4c7626f2fde"],["/tags/CresCENT-BLANK/index.html","dc6ca3d6ff98f48ba5d798aa7e44232a"],["/tags/Dopamine-Software/index.html","df6ad1e44ecf1d40765e30a76d52bfb5"],["/tags/Dos/index.html","90f0df73eb0ac25d7ec744ae26ec5e35"],["/tags/Earth-Well/index.html","e47256fea756d61c18edb4501d2fc751"],["/tags/Forest/index.html","8707ceea7f80a867385664a4b80f5472"],["/tags/HaccaWorks/index.html","5dd1cba5dd977d7563ce81c01ca4705b"],["/tags/Kanon/index.html","09b6d36090096ee15b18086d4ee920af"],["/tags/MANATSU-8/index.html","0a1867bdf74eaa8b6b041e81b45e66d2"],["/tags/MARINE/index.html","2a6220cb26e449dac219c1ead559d9cf"],["/tags/MIO/index.html","2428d064e30105bbc0ec0f7a4dc6887f"],["/tags/NAOX/index.html","8a478be3b3b7dc19c9c40e4bf8ee34bb"],["/tags/Nmyu/index.html","673dfeb8e7f62c1ab1b8ce039c694942"],["/tags/O-S-I/index.html","82ac32c2523941efe930173aff428dcd"],["/tags/Omegaの視界/index.html","fae39793f213a67da3af3520954b8071"],["/tags/PC88/index.html","c8362ec10e3d98490cf568776a174204"],["/tags/PC98/index.html","00f75285ff511033621de21684aead60"],["/tags/Perpetual-Room/index.html","d52cdf13e0d288d3e68f6a533ca814f0"],["/tags/Pleiades-Company/index.html","86b080717188ebf80aca52935fa9d6cd"],["/tags/Project-Twintail/index.html","a8ff51f95820eada4a69bfc7edcb5de0"],["/tags/RIFF-RAFF/index.html","4649a76dd5a272ac6dcc12295ec5c9ac"],["/tags/RPG2000/index.html","ab1222346b5e1794be95067ee01e9c7e"],["/tags/Reverv/index.html","39da5e4b70b627af3df6e99aef5435e7"],["/tags/SENTIVE/index.html","3f7d419656855d8ed869e3c1d2a6ff77"],["/tags/Saihate-SOFT/index.html","0a4714604b1635b8fa21daf690cc1ea7"],["/tags/Scrubbing/index.html","d32d91c9046f160411f63b1c2af8cfc9"],["/tags/Sky-On-R-imaginAtion/index.html","039885208c2e3d46260da2a20108479d"],["/tags/StrayMoon/index.html","fc57f38ca4a5ed7c631279f294782bd3"],["/tags/Studio-Bu-Sa/index.html","692cb3e8a814493fc3b51ce076c516a4"],["/tags/TRANSPARENCY/index.html","ac89d9b9d7ca3fac96b5748444a65553"],["/tags/ToHeart/index.html","360176065d283f0291d8c22cf6df3a93"],["/tags/Traumend/index.html","dc0e6742e95219d5459c1cd6678ab0fa"],["/tags/Witch/index.html","de5be6ca6010d74a63782b6519e4831d"],["/tags/adonis-project/index.html","f5db09c901fe544613e57cb8e9ba27bd"],["/tags/capriccio-suite/index.html","03905e04df8a1c10e2c19cc3b4ebc6f6"],["/tags/flash/index.html","182d6bc72f41948366536a4017cacdcd"],["/tags/galgame/index.html","0c7175b39025db0246e09c8a813a7d60"],["/tags/galgame/page/2/index.html","703af5d82095c649fbe1c9e8120728e0"],["/tags/gal资源/index.html","5cd47bee150194d5fff9fb427d71b4df"],["/tags/gal资源/page/2/index.html","0decb2cb2887648777180035d99b22d6"],["/tags/gal资源/page/3/index.html","249ccd4760c28045c2647c1b071ac0b9"],["/tags/index.html","15f83ef00285591982545d1b66c52797"],["/tags/purgatory/index.html","4669071656921be01177675ce9ebf8cd"],["/tags/rkr/index.html","f8aec36d35f3945a8d79ffce17ee44cc"],["/tags/team-eye-mask/index.html","9f7e8bbdc512116982a3e1e8f7923079"],["/tags/ありすくろいつ/index.html","64b80527cebdcf206ae99401ba832a44"],["/tags/いつものところ/index.html","697435a63dbd8a5683ffc0608176d1b8"],["/tags/きつねみみ饅頭/index.html","a0491381595a4cd432116a1f5fdb5484"],["/tags/ねこねこソフト/index.html","88a16712529ddb4c0de047d743209226"],["/tags/ねこバナナ/index.html","8b2edc4bff0c95c4757319e341f06c77"],["/tags/はちみつくまさん/index.html","d5b467fcc4142bfbbd7323ebab2f5af8"],["/tags/ろりちせ/index.html","beac6852ac2fc8846a026a1c56e87f65"],["/tags/アイル【チーム・TATU】/index.html","974ae74fad6da7f8d0b6b711c4c3069e"],["/tags/アクアポラリス/index.html","a7463fd2404d8e3bf1d0a7e17ba53689"],["/tags/アークシステムワークス/index.html","93e6229fc2d85d8196457e09967fa7f6"],["/tags/ブロッコリー/index.html","f4892f8cc3cf19144de90274efdde6cc"],["/tags/乙女/index.html","3a8f43a71257623fadb4e1c160720418"],["/tags/乙游/index.html","8daa1b5d902fc4deac891486772ba329"],["/tags/停产/index.html","4edc445a091892888dfc6d5b93e0cc87"],["/tags/公告/index.html","eb0fc41766a15e6a8fb85194738cfa9a"],["/tags/同人/index.html","ce010b9c198174434198414234e79a70"],["/tags/堀井雄二/index.html","b20e795b4bc5e27ff3002d06dc3f81a0"],["/tags/外海なおき/index.html","bf146b0f95218d0b6e17a6dd27fd37ae"],["/tags/女性向/index.html","0163d4447315e4707c561b59f688d70c"],["/tags/御茶ノ水電子製作所/index.html","47ac4bc748551d997df79d22ef9a2602"],["/tags/月の水/index.html","31a0e1fe37e634957ade8ce773c5ec3f"],["/tags/桃野衿/index.html","95249df5fe504b305e061ca2c8a61fc7"],["/tags/機械式少女/index.html","e62afa10ae4041bd124c8fa2f06c9adf"],["/tags/水仙/index.html","a947c0d62773beb240c1a0c5be735315"],["/tags/汉化/index.html","13b93f84ee8aa45a71fbd26e93910f82"],["/tags/熊月温泉/index.html","96f39d5268a7e65fd5a6ae44a4e1d125"],["/tags/片冈智/index.html","4e2ffe10f09e54efe147dbb3ba903159"],["/tags/片岡とも/index.html","b568eb294ed0aacf78337cb64d578c18"],["/tags/牙の刻印制作委員会/index.html","1911f5be23f106ad5477d67bd15b6efa"],["/tags/牛カルビ定食-FLAT/index.html","7ac75dd39e83a12ae6d864b2cef0c35a"],["/tags/牧尾屋/index.html","c2d720a0847258c4f564705cbbaf6dec"],["/tags/犬茶屋/index.html","9d53503faecbd4d8adff1242d82a66ba"],["/tags/猫猫社/index.html","e2d4014f74fe5ac3fb4403c7c5652caf"],["/tags/王宮魔法劇団/index.html","efeea72c90f35ca7d8c5084a98804e72"],["/tags/画集/index.html","89b1c46da1efc6b19c2830ac0dd51820"],["/tags/索引/index.html","1925c2023ae45c46d71fa1b504a61ec2"],["/tags/缺失/index.html","625913cfbd5a47edfee84e2c7c86262d"],["/tags/自购/index.html","a59fac744d0e67cc621a874a522cd27c"],["/tags/茶葉☆姫/index.html","30878a2419378e12f16a5929642b4e12"],["/tags/郷愁花屋/index.html","27bc79be0e0969768657f0ab19a7d871"],["/tags/閂夜明/index.html","654987a063f95ebf4eb5fe70768ac188"],["/tags/音乐美/index.html","be4be7ab81a2f17696e1216b0fa900a1"],["/tags/黒†救/index.html","e976a0f76d12cfc72f89558fe9a5fdbc"]];
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
