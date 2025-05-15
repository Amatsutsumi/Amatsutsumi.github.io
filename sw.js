/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6504fbebb92850868871d80c07944102"],["/archives/2024/04/index.html","396030344ddde26681d804c37690bd77"],["/archives/2024/index.html","82cdd735503676e0c270728f7cfa9c10"],["/archives/2025/02/index.html","7494f86b26735efbaed74f7ddbbd99d7"],["/archives/2025/02/page/2/index.html","ffc829705a2d8212a35558c8d9c482c9"],["/archives/2025/02/page/3/index.html","60612b443055b165e261b8c98ac19ba9"],["/archives/2025/02/page/4/index.html","2288eb88d7e1f01c5bb11b8cf270fc9e"],["/archives/2025/02/page/5/index.html","246ea128d25656da6362703489b5403d"],["/archives/2025/03/index.html","cbc3cc42c7bd7665ffb6c3e7bef2dc7a"],["/archives/2025/03/page/2/index.html","590bca0d899a7ed6b1cf0c8909a4c4c3"],["/archives/2025/03/page/3/index.html","5d4600e263ae263d077f1ebcbcc19be7"],["/archives/2025/03/page/4/index.html","c648f47462a81867415ba935d8f434b8"],["/archives/2025/03/page/5/index.html","37363b5276a3dabccf7d19cb29a9c7b8"],["/archives/2025/03/page/6/index.html","2c9cec2e3eda2daf93e2d210f7c00492"],["/archives/2025/04/index.html","cb2e9b603d65d0c5e0180a15b7f81710"],["/archives/2025/04/page/2/index.html","22baea9dd979f164d05015760438ac31"],["/archives/2025/04/page/3/index.html","6287474eedc698bdfdb8252d9ec8c158"],["/archives/2025/05/index.html","81c1af70d2e64ceccbf04b2678875ed9"],["/archives/2025/index.html","38a8d042bce533a5bb76a76f941ff968"],["/archives/2025/page/10/index.html","c8746ddba12c1f47da0852a8a4d92c0f"],["/archives/2025/page/11/index.html","4433bb3db51e5b694615c2d9f8712746"],["/archives/2025/page/12/index.html","90fa89fd41c66608b0caaecc5df0df9f"],["/archives/2025/page/13/index.html","e536490f1bf4376ee73bbfda409f8098"],["/archives/2025/page/14/index.html","b70255644c102b12a16584057d90e2b6"],["/archives/2025/page/2/index.html","9b4cbf91df3eb0df18b31010df9962a7"],["/archives/2025/page/3/index.html","0a4506b0123549a8e364661339e974da"],["/archives/2025/page/4/index.html","2e6c966aca579d2248946a7c5e74aef6"],["/archives/2025/page/5/index.html","08a1e23e15917a4807e9a7d154e2e7ce"],["/archives/2025/page/6/index.html","28868ba6e1d958b9a943df23b8fffc4c"],["/archives/2025/page/7/index.html","8176394d10a4bea83179975c1173c6ec"],["/archives/2025/page/8/index.html","01e60c47f077759787d2e8136e106015"],["/archives/2025/page/9/index.html","8644bc0a9f3016390d83d5b385bebc47"],["/archives/2026/02/index.html","b65ff245008d1e43a5e75bf6c14be6a6"],["/archives/2026/index.html","85bcc0c849876fdc1a64b4cc3ebb2017"],["/archives/2825/04/index.html","49615e6affaf2e1d6f122897a3521e5e"],["/archives/2825/index.html","f582d0466f2c81d455fc9d9fb7be2edd"],["/archives/2925/01/index.html","a7aeecebd577e5cd719db8e0e446d344"],["/archives/2925/index.html","dadad8249c23b9d4511b8aa90264c596"],["/archives/index.html","1f23e7f12c9e256ac0854a2d00deaeba"],["/archives/page/10/index.html","dac6e66a0c697998e7b33071c0ae4a4e"],["/archives/page/11/index.html","ec4c418044578804ed18f2b05a0869c3"],["/archives/page/12/index.html","6f6c995d6207c638604dace53c8b02b0"],["/archives/page/13/index.html","23fb12e0d0859cb4a27bf30e347ab4cc"],["/archives/page/14/index.html","b936bc99e8824d2a4ac862bc49214811"],["/archives/page/15/index.html","f55ff8b951cbe8511bc28c97ab14e1a2"],["/archives/page/2/index.html","039bd625629001320e9d8fd77a7b43b8"],["/archives/page/3/index.html","4cdeefe9173bbe33a1ef818328de6aa9"],["/archives/page/4/index.html","443461362f6a13f7b80f76b86a718bd7"],["/archives/page/5/index.html","5a799dc2e41632bbe3bfe8e542ca8d97"],["/archives/page/6/index.html","4ca8e0f7614b512686515a790e18852d"],["/archives/page/7/index.html","7baed1f838ea185dc87a6f76b2c63f44"],["/archives/page/8/index.html","3b4d646a2c92c70c72adb579a89e143b"],["/archives/page/9/index.html","188c62e32e68d00dd62505ef05eedfc7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","887f9c972ee27f2f5937374aa8e7d049"],["/categories/galgame/page/2/index.html","9dbc2afef17877c61fdf8f41d444b700"],["/categories/公告/index.html","5a81131d087088ff4ed369faa0a0fd9a"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","b4521d9b1d6153a57af2f0dc5bf7208c"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ad5cbcf86844dbb7bd6fa219843d011d"],["/page/10/index.html","0a54e08e3f3db1d74f52fe08110474ea"],["/page/11/index.html","327b7d5ed2445146ab0933dbb32e5af2"],["/page/12/index.html","10576640217c7d268d6baf94648f3d64"],["/page/13/index.html","fb08150feebadbcd55272b0566e72f66"],["/page/14/index.html","ce876a37c3ee391e035e9da56f3c2e50"],["/page/15/index.html","219cac6570ee613fed83d0b79eb966f1"],["/page/2/index.html","841dd5d38c69ecd1cdd1c16cab12f01c"],["/page/3/index.html","d7c82520d5fb5f92bf4747da846d5ca0"],["/page/4/index.html","6b8ff1078f104a7c38f4bf9640f496f2"],["/page/5/index.html","e29b1313d49a1d92452d06a4dfde49f5"],["/page/6/index.html","739070e40f848617b2ce9aea9097ca82"],["/page/7/index.html","0caf2a18c988273d3822b47018d7b705"],["/page/8/index.html","3b8cc93c90d0b002268785b68a9dd99d"],["/page/9/index.html","c955fb4fe19493198a6366cab38f4303"],["/posts/10c9dd98.html","ccd1cb685f4bd73b2e1a78ec81dc35b7"],["/posts/126ebb99.html","d32d18be5399f3e06410f157ccca6ac5"],["/posts/1295b569.html","a4ca6082b48b18088da0a96a8d69a5d0"],["/posts/1370342.html","05da16e09d73f713c87eb87828d5a883"],["/posts/15ef14c2.html","3dff50f8f70bb328535c19e1411f050e"],["/posts/15f3959d.html","938ae8707ec4319ead32b061648a5003"],["/posts/18ab785d.html","27b368bf8bd83ce06a1fd9d13e2ebef3"],["/posts/1d59b71f.html","926efed87b97ddcd839f41cb6ac27449"],["/posts/20b3f3a4.html","832ee22358e3db66943f6aceda7e81b5"],["/posts/245f1c7d.html","355f1af72d8c42031e0b98925af58757"],["/posts/252658f.html","4fab523df35dbb9a7a9d53b990ad1584"],["/posts/28397adc.html","3a1fd507d9490c2aa8c0e76003549c00"],["/posts/2ad07f54.html","dc53181d318a6130420b0ecfef69525b"],["/posts/2b38bce0.html","f259d14f1638ca370260b6035410c047"],["/posts/2c0a6836.html","a554cd50101f89c1fc09c3e86cb11cc3"],["/posts/2ce39bcc.html","0a7cbed17b04652afb71b61775786983"],["/posts/2cf620f0.html","90177ac138cc721624d790512f5aee70"],["/posts/2e30fd6d.html","612f23237287d01513e90634566fd759"],["/posts/30a413ad.html","2a50e24449f0dc880c18120490b1e21c"],["/posts/34292736.html","625e4b5b8fcaa350293e8e3b8fa0c155"],["/posts/3468cbe.html","1dedb98cb17f84759af57f7208a45b90"],["/posts/39176dc0.html","b14ac472911f2002544c27d053a597f1"],["/posts/3be6a165.html","f2f3b2670a85c40baad03f5e1d94dea2"],["/posts/3daf73b4.html","e6d84187c7ca91476ae2c3939f08e67a"],["/posts/3e118dbf.html","f92efc749ee0dd3bafe1cf9437423464"],["/posts/3f7d823a.html","3a6171b7a9a9c8357c96b6ab6c618f6d"],["/posts/3f978819.html","8a6fc2aca8f2c3f46ee14c2194ebb3aa"],["/posts/41dac80e.html","bfe32c9a9f8d9e3a64b4624bd64bea6a"],["/posts/43945723.html","cb7e2cfd04edcdff1c753d1982643815"],["/posts/44124a6b.html","10af73f837bcc65765e06d00f19681b1"],["/posts/476a3006.html","40cc206d1c21ae0755905fb4cac63944"],["/posts/47abb61d.html","b76a694eb2705f3b03e0e57dca552550"],["/posts/4996478a.html","b8e93d0f9f47bd504266d4a1880a4fce"],["/posts/4b689be3.html","b3016441cc9e2990e2588ad1730e393c"],["/posts/4cf8423f.html","835ab907b2bb590cd9abd34f5541e1ef"],["/posts/4dcf85c.html","54f9f516a082b0b207bfcf1b7d4a716f"],["/posts/4e314e04.html","0b13c0add52ce0245301b96bc2a8c624"],["/posts/500cd322.html","f70e06340128616bcd1bd99668e2b58f"],["/posts/51c9b1ff.html","895a3f1bfeabb6c110fa870979e73660"],["/posts/52b5b3c6.html","dcd95e2f0fb31b8ccbaebdd2b2110709"],["/posts/54f496ad.html","98ed61e34b568246b047b089eae37d7b"],["/posts/558e1f30.html","46d70dbee26981335601b99d20286d03"],["/posts/5d8bea92.html","09ceb5b059c254bb0cfecac525f72134"],["/posts/5f6e0c59.html","70eabe7f56a3e95c860de52c79f9f580"],["/posts/61a63a84.html","7c15802e1443a0de1fc07f356ec25107"],["/posts/625ab7bf.html","2c09d164c64ac1e67cdf8afe32b22969"],["/posts/6336a2f9.html","455472baf6adcc5e6061d7bb56098c9a"],["/posts/6432d61a.html","047bd6415fc869bea36295711dd12c96"],["/posts/6515f032.html","c04d3e7fdda397c5f1e6b64700b35e89"],["/posts/6720ccdd.html","f6e740f107ea8c303f4c3d3dd34f53d4"],["/posts/6a4b5ac8.html","dff0c97d428e16b7b06a2581bfd33425"],["/posts/6aa4177c.html","c5e0cef2e549175409a052092a8225d3"],["/posts/6b15f81f.html","079e29803ccbd7dde958e9e097f0fc49"],["/posts/71131d34.html","fab0a5ca188e59453b46f28178b7d049"],["/posts/742fd48d.html","92b6d5b6db9040f5068b8ceb832206cf"],["/posts/78a8a8d3.html","dbca058242021fe4b6af2575483f59cb"],["/posts/7a5ef3d0.html","0d2bbad70a85cb43c620bafb1ef76589"],["/posts/7b41e1ac.html","c6c2985b570c9e687576eb219c936556"],["/posts/7b51011d.html","b25f40fa81898a3764199ff5f8d802fd"],["/posts/7e3aa3e2.html","590644f35e57e88088dfd411de98eb29"],["/posts/80fe2691.html","8b11dbc0611f1ff8588bedf3457115de"],["/posts/81ac52e9.html","a6923020ba7473d0e7d601ab912fcd64"],["/posts/82332d11.html","6532b530059a961564f8c0d538732dea"],["/posts/8486f6f9.html","4fc186f5e92382c902923ac2d3166c6b"],["/posts/849b40f8.html","3dc84f48f27e816d2650970818b0115e"],["/posts/85c51d68.html","29331687972f270f493f5b5bcb650068"],["/posts/86a6c500.html","2a484db529b5031d9323218faa69de41"],["/posts/886f8d3.html","1c9188f3faccc494d22593ba118b86b7"],["/posts/8a7cba10.html","c410f68a465d4efa523ae19ef7ffcf22"],["/posts/8ac11b41.html","6edee02ee1766f5af361e2f186f5e437"],["/posts/8c3f2fd8.html","4f9715f193a4b336ac2b80f586ac2d10"],["/posts/8dd520d9.html","c2a23a1a004e4da1e66d7581553fbb84"],["/posts/8f555654.html","35eda68f2fd78fc551713abaf6e5e4d6"],["/posts/92a980c2.html","1fb8b1222337f350587222fb42692486"],["/posts/92ce16.html","73f365d8fc962b9056cf32bb8f0e44a6"],["/posts/93e9943b.html","17b3aa7d7d0f83c7c1f31f3d002892e6"],["/posts/94d3c794.html","bc58807f685280b5ba8a3d42003a28e8"],["/posts/96b281f2.html","46770e4a6e61f52bfc253ad306a6b8de"],["/posts/97f50eea.html","94c5286d896d088b70bfe1da01870aba"],["/posts/97fca8be.html","6e6bdfb4a8dbc7b88cdde0f22f9c5e27"],["/posts/98662d05.html","0fdd387c7ae4e3e027a6a98eae136815"],["/posts/9a2f6162.html","3b7af5df25563d86bd98820ccaefd8cf"],["/posts/9b22a48d.html","81ac63a71756b6411802a427470912f5"],["/posts/9cb455b1.html","83bde424fd656c0df6789e851836f7d7"],["/posts/9ecdeecc.html","04923ba18612f2552dd835f0608dc5b9"],["/posts/9efd7701.html","7c65d48ae0b7524c8d992cb4b783c695"],["/posts/9f61c1a0.html","1c265dc5b881dcec3b3a143de070829e"],["/posts/a1de710.html","b3459855c550263a66dcc797c50c55e5"],["/posts/a30eb0cd.html","bd3a23c072dc747b5490434b289d6cec"],["/posts/a72f71c2.html","ed1932f856d4a46990e8352b194ecc10"],["/posts/a7634b5d.html","96bbf204d7b5b91da5fc70ac035555ef"],["/posts/a8c593b5.html","8ecae3060eb4e59d5c8d8b01c7f6f47e"],["/posts/ad0c1efa.html","8881b274e8c21b088f03a0e2def3f4be"],["/posts/ada3f440.html","2f2fb0793953fa45e374634b59f27340"],["/posts/af1807ef.html","145de876d1382f3e5fbbbdbc6a8391fe"],["/posts/b397bf03.html","8f96d40709d4ab40862fc4118d930582"],["/posts/b497b647.html","c90e2809ee1c98a978a63c1c2b65abdc"],["/posts/b4d464b0.html","440f6f2e21cc415ed63127efc65f9ddc"],["/posts/b5fb773f.html","d856b82c47dae9b296947cf186079e61"],["/posts/b8d46b32.html","4e2913b52928e427a5a60116803f38c9"],["/posts/c1b2c6c9.html","4bb1dfa707e31a03184f34169dca444c"],["/posts/c2111cbf.html","8310c4e56ed7595ac4f31176fb0a9b6c"],["/posts/c316c2e8.html","efcafd6bd76a624deb7a97377250b414"],["/posts/c43e60b5.html","10920df8dba78763a6b5e36dd8822009"],["/posts/c497a412.html","2a0e4d783faa7958b5e39a47faed1fe8"],["/posts/c5395ba3.html","b86aa353f19b70e1d6d98ce720b59eb3"],["/posts/c5de299a.html","e940d66ae3770e45576f534d6e001511"],["/posts/c70bba9c.html","db83891b444789942cae9526f14cd591"],["/posts/c797535e.html","2b05e516600d16c0113d12fc0eae7edb"],["/posts/c7a62c79.html","3f20336910c87093f7510792d65ba880"],["/posts/cae2c959.html","85b369b4e14d98351034c3f9f323abea"],["/posts/cbebef2b.html","34c709976ba383296d802e5c656dca90"],["/posts/cc4c0017.html","7b68891514cfecd029d6e2f0cd091f01"],["/posts/ce25023e.html","7aa166d56f1103299ad8e1c057d9deb4"],["/posts/d2fd4837.html","2bfe131c3c81ce9c3b34abdd552cacbf"],["/posts/d3233cbb.html","e015037e94ce86ff33196186ec5854d9"],["/posts/d3a745a8.html","8e0aa60178c5bef5f3ee1f2af67c1e3f"],["/posts/d7e940d2.html","8d295a5d5fd9835c3d4ff5c961a70d0a"],["/posts/dc815d5.html","113a16d71068b11ef6b6cc424ef73911"],["/posts/de25b0be.html","6d27d77e1d24162a2b3deff1d1899286"],["/posts/e2623b4e.html","2da9d64fe51a57fd5a1e3bdfcbb52a54"],["/posts/e3ab6ad8.html","85307440243c5bf422f8034a037a4358"],["/posts/e5018da6.html","17b9865a9e33f5e69358f94993d3b6f4"],["/posts/e5963272.html","1177d5ff6afb1aa65fc69de9f7aae023"],["/posts/e5ef4c3c.html","cbfc4e66c3d49fc9cecfa0bcacf0feba"],["/posts/e624b065.html","d33f3c923fe6690aa241feb9a1e4a7a3"],["/posts/e7c703bb.html","658a9e18901d2f661de2bf949bf6751c"],["/posts/e8f14b6c.html","da94ed5e837dca8099a948056f298fde"],["/posts/e91abb63.html","7ec3b3fa464fa4f68309fa8827eb291a"],["/posts/ea9a8808.html","ef4088ef9162b3361e6913aabbf358ea"],["/posts/eb784749.html","796668cc567a9b4a6d7043324c33be76"],["/posts/ebaf2232.html","da8339a2a2e6a69bd44357abdaee3a7d"],["/posts/ed75f185.html","30fe18ee75bfa1793b98f572ec8f3164"],["/posts/ee1ed673.html","cd42547c7845f07f637531002b3a7ad8"],["/posts/f0c3ed61.html","27cce7adaf25c85daee34c4160486317"],["/posts/f151ff43.html","a185ffe28436d46851cb82b8cbf6ef4f"],["/posts/f21e7f84.html","2a527c1a91dab7e958ed8540df1ea8e6"],["/posts/f230b0fd.html","775e3e258593d3ca4ce51bdb5ff368d1"],["/posts/f28a7877.html","3dbbb4184f689514cdfbaf435122abd5"],["/posts/f663d5cc.html","7781fe51f6624f38b117640ced00f18a"],["/posts/f730ad18.html","d61d35e2f5f3f37b3168df5957344a07"],["/posts/fb5d4608.html","425cefd8693169c74cad711eea885ce1"],["/posts/fc04d0d4.html","a9f3402c0152677f3a3543f0d3921aba"],["/posts/fc455f81.html","fb151aef3fad902c5fa5f1994111de6f"],["/sumire/index.html","1ec9b04335f8977bac86cbdeb0178c37"],["/sw-register.js","6bb717e4b2f42f8bea77a321fd20b8b6"],["/tags/AKo/index.html","8f59ca69325ba6c33a7d40bf5fa4f7e2"],["/tags/APPLE-project/index.html","1bbd94c9bf01b78fc5c0be4a5c8e0982"],["/tags/Ankrache/index.html","f080de413053021957449e2a42e42346"],["/tags/BELL-DA/index.html","e1d7c897e97b71ed11e0091108342957"],["/tags/BL-Game/index.html","78145f8146e983d0ea32cbfe2c6cc662"],["/tags/Blue-Dahlia-Digital-Creators/index.html","c0e6952fca530aa5b4390b16bcfc9bd8"],["/tags/Blue-Line-Games/index.html","eb84fab0f2a85960cb3f03844ba888b4"],["/tags/CHUNSOFT/index.html","0fe8e339ffc2149a86fbad946f60f700"],["/tags/Check＆Stripe/index.html","27bfd981c543620f94d91a63bbf28fbe"],["/tags/Cherry-Pie/index.html","fa7f74ad9cfd34fd4fd39a03f69ff34f"],["/tags/Circle-Mebius/index.html","7e6eaadd76c31f55908a3c503c8d7c66"],["/tags/Cosmillica/index.html","ded9f2e195d90df77b2c09d7294d71ff"],["/tags/CresCENT-BLANK/index.html","c92de4c097af054a3fef45bd69e8d8d9"],["/tags/Dopamine-Software/index.html","3e90905a0ada7e3033e9f03858287a7a"],["/tags/Dos/index.html","ab699a3238a74a228dedff2eca4eb38f"],["/tags/Earth-Well/index.html","e9c69dc16dac1d59f0c336740b69abaf"],["/tags/Forest/index.html","50206ccd10349ca557728796aced4927"],["/tags/HaccaWorks/index.html","6c4d9d439e7d07513791d16d4d9a61b6"],["/tags/Kanon/index.html","ed474d71fa01f6938512d30e56ed742c"],["/tags/MANATSU-8/index.html","7b49b464f1992b8786510655ebd2e0a7"],["/tags/MARINE/index.html","d978d61151b2d17452cdac770e24309c"],["/tags/MIO/index.html","1a0e1d049fa4c685b354ef6b066d6774"],["/tags/NAOX/index.html","332d6b1866e21bdc63469841cca16c85"],["/tags/Namikaze-no-Uta/index.html","733d9d2f9ff548489aaa512aeae5efe9"],["/tags/Nmyu/index.html","2034c27298037e298f61272433c196a5"],["/tags/O-S-I/index.html","a663e3ca451b70e9dabf9ab948e6f195"],["/tags/Omegaの視界/index.html","2814dea5a3feb4955ce43fac76cb1188"],["/tags/PC88/index.html","84798a2374798cd98d725f5875ba81c2"],["/tags/PC98/index.html","e5b677e905f4f88f98e0af5bbf0a81bb"],["/tags/Perpetual-Room/index.html","1d966c559e37179843d9ff6ff525260c"],["/tags/Pleiades-Company/index.html","32faccc5cd3805cd202d4b38c0ee501f"],["/tags/Project-Twintail/index.html","3236ba9b333b25901bd252b26c90d23e"],["/tags/RIFF-RAFF/index.html","2ed53107d61f3c37d3a34a250647e070"],["/tags/RPG/index.html","448e1f45c7784ac1c4a502149cc1ffa6"],["/tags/RPG2000/index.html","75cdc8b286af2ca6aed34365f3fffd91"],["/tags/Reverv/index.html","b67656f912e306e0e46b316700c64503"],["/tags/SENTIVE/index.html","f226181efd2c7198b18587d432bfc207"],["/tags/Saihate-SOFT/index.html","5194d7b5ad151ee0518d6e7c098177b9"],["/tags/Scrubbing/index.html","79b38038515328980b80928b1ed5f542"],["/tags/Sky-On-R-imaginAtion/index.html","fc2e6bb4bdb9e3889df1d10acb9b0048"],["/tags/StrayMoon/index.html","036bf3529169ac72bc6f9528e76a2fe7"],["/tags/Studio-Bu-Sa/index.html","0d9b51ce33bcfdc27f766fcaf69e0c0e"],["/tags/TRANSPARENCY/index.html","40e486d8d0649b440431c75429141b77"],["/tags/ToHeart/index.html","a4b808a1a6223d3623c60c18a06a5375"],["/tags/Traumend/index.html","a809b36b8c2edfba4925a0725d976de0"],["/tags/Witch/index.html","9db9a9f95d21e42479dd87e164ef6f59"],["/tags/adonis-project/index.html","e5036cd5bfa6c7eca5e5db7ac2839bc7"],["/tags/capriccio-suite/index.html","42893f80eb1a0f9f3ae24ea59e99562b"],["/tags/flash/index.html","9e0c6a829faceb975b2246087f54698f"],["/tags/galgame/index.html","ea55ef525546b554f92ba525815098e9"],["/tags/galgame/page/2/index.html","8e4277b69fc4a72e2809a8e328dad44c"],["/tags/gal资源/index.html","25531020fa210069dbbc980e158c249f"],["/tags/gal资源/page/2/index.html","3ebc607c235e5d496b53b9ff3cd77c6c"],["/tags/gal资源/page/3/index.html","2a0c8d66fe03ee363a846ef09393281f"],["/tags/index.html","5390c09e4f473c9356d010f2cd38f28d"],["/tags/m-kz/index.html","79f79750cce4438cc72bf46d0ecda924"],["/tags/purgatory/index.html","fd882b51fce5abbb5fd2c778d03b9e26"],["/tags/rkr/index.html","2fc7d2039061abb844bd176655c4e461"],["/tags/team-eye-mask/index.html","cc03cf130d5c4f94a5b02fa63c669ac3"],["/tags/ありすくろいつ/index.html","5133ab8511be7297e318963ccb6a0824"],["/tags/いつものところ/index.html","c51d33974739eeb1179f3b4e749d6567"],["/tags/きつねみみ饅頭/index.html","f1fe37e3ccbcfad86e0ac19e0cafc69c"],["/tags/ねこねこソフト/index.html","82217ed665a6f17a870e02efb00422d4"],["/tags/ねこバナナ/index.html","68cf2658603490fd7b74c7d38b0a503f"],["/tags/はちみつくまさん/index.html","bcbfdac03413afdee50687cc60b530a5"],["/tags/ろりちせ/index.html","469813d2368511a7bc46cb0d38d8fb5f"],["/tags/アイル【チーム・TATU】/index.html","929bebbf27fe9a3503e74e1e39bd866f"],["/tags/アクアポラリス/index.html","ed56d02ac62e0ce96cee567a2eb80773"],["/tags/アークシステムワークス/index.html","8d05619634350c643b26008a3cf3af8a"],["/tags/ブロッコリー/index.html","916329d1d8f32e7b02fc48d8b84ff407"],["/tags/乙女/index.html","3a61a0256ff62bc3a320395e76887092"],["/tags/乙游/index.html","dc1a2b383c876c1e70fe398f40a81104"],["/tags/停产/index.html","e6d96eb4378019fe1f9b998a2f710b03"],["/tags/公告/index.html","9871271ed0e1e108a4eea07705e6bd0c"],["/tags/同人/index.html","cf1c69f725131543a75903c643ee5cdb"],["/tags/堀井雄二/index.html","27a8a2351e3579f84d8b2915aa09d863"],["/tags/外海なおき/index.html","eb5a36805f4af7950586e392b77d89cc"],["/tags/女性向/index.html","838844c61d3ac41802c4d1f186a511c5"],["/tags/御茶ノ水電子製作所/index.html","f56de633c405ea544340133517a260d5"],["/tags/月の水/index.html","21bf09fa4ad7d30ed3635eec832016dd"],["/tags/桃野衿/index.html","5cbd8278046b79ea590c1749bb245377"],["/tags/機械式少女/index.html","7dd5a81c7e755747799aa2455228113d"],["/tags/水仙/index.html","93fbce6d5baf0fa57ed6238e84ae2db4"],["/tags/汉化/index.html","56e32a140a20298137db09f7d7e8f4b3"],["/tags/熊月温泉/index.html","b6a145e0cab1c078e64312adfdc19193"],["/tags/片冈智/index.html","0eaa84b5aa47078345573d7e43874dd7"],["/tags/片岡とも/index.html","a845fadb1e1cc2cd47c419efc07d7200"],["/tags/牙の刻印制作委員会/index.html","2590e8d96e5d7b2bb9682fe8390cbe0a"],["/tags/牛カルビ定食-FLAT/index.html","2e10e315f802100e02a645c4cf70a70e"],["/tags/牧尾屋/index.html","568d5b41307808c5b081ad3a778d1471"],["/tags/犬茶屋/index.html","fad2ee8b77edc4572a4072321a7a3b4f"],["/tags/猫猫社/index.html","8671c00dff7237a78df416bd000d1f2b"],["/tags/王宮魔法劇団/index.html","81fcca1336c3f95a58fae2abba677a55"],["/tags/画集/index.html","987c6fc286756b53aeb862757ad9adce"],["/tags/索引/index.html","557ed5cbdd91052b079abcf4ae80d313"],["/tags/缺失/index.html","94a779d61d21af9c558d4d2abe47a75d"],["/tags/自购/index.html","c1049d3976c600c4dfc0429f55422fa3"],["/tags/茶葉☆姫/index.html","8f7f1aca6f0feea1b9936bed6150deee"],["/tags/郷愁花屋/index.html","4b18e7e06ec2ed8e206c8eb952d13396"],["/tags/閂夜明/index.html","f7513f0c0cecfcba9796e5fc073ae633"],["/tags/音乐/index.html","97aaadf9b3faddb781a0b6a8bff97d8d"],["/tags/音乐美/index.html","e906065cc14744d01c70cfb18548c0c3"],["/tags/黒†救/index.html","39a282664fe22d3a3ce00d6ed4b5e350"],["/tags/黒百合っ子大集合/index.html","1e7afd872b959463844b3b31b3fc9881"]];
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
