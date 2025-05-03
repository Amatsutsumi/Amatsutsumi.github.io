/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","248f63ae7d66ca0bfe147ab3a3df1b64"],["/archives/2024/04/index.html","a0a077c2f8b247e9f39440e69690e38a"],["/archives/2024/index.html","f17a3fd477604cb839802493c39ae717"],["/archives/2025/02/index.html","bd4019e2279a1c734edcb50e64acacb8"],["/archives/2025/02/page/2/index.html","7fcc0d229c0334063b8b22afa4c8f41b"],["/archives/2025/02/page/3/index.html","2923471b5bc3954d495281689dc43e53"],["/archives/2025/02/page/4/index.html","e91b802a0edcfdefdc2551ec4722b02d"],["/archives/2025/02/page/5/index.html","a491ab11579241aa68226522141610e1"],["/archives/2025/03/index.html","ea247b1a114960cf4a92642c0203234f"],["/archives/2025/03/page/2/index.html","105c002f882c178d53ef78d52a928f56"],["/archives/2025/03/page/3/index.html","958abf1248b87f66a2033861091df776"],["/archives/2025/03/page/4/index.html","6c0776ed625b20117e3dd31b829e15ec"],["/archives/2025/03/page/5/index.html","e9ccbf8fa71c963f7f4f2f0a8d17259c"],["/archives/2025/03/page/6/index.html","82c06ad7e4ba4224f3968fc988d14604"],["/archives/2025/04/index.html","29bdc5b6fc506fc8e3161c430f28b2f5"],["/archives/2025/04/page/2/index.html","4065dad06fe379d2c099f6fef9220f76"],["/archives/2025/04/page/3/index.html","8259df5a88126dff72493f7a7e2e6bd0"],["/archives/2025/05/index.html","a680f9d6c1e13fba54bb3a6b0201c4a2"],["/archives/2025/index.html","b94da3f39e2ecdaa6e9bd107b7df1570"],["/archives/2025/page/10/index.html","0638ac6cc65eca903b9233491d6b477e"],["/archives/2025/page/11/index.html","9e398144ed892ba1285b957ec0c32110"],["/archives/2025/page/12/index.html","e36f5e830c09524191d37d273115f069"],["/archives/2025/page/13/index.html","32c5c34a710e8a56b2893bd99cc30c0d"],["/archives/2025/page/14/index.html","6834b324b905c7d5780f3492569eb79f"],["/archives/2025/page/2/index.html","965f4718691ff1262756c8ea522c28b9"],["/archives/2025/page/3/index.html","67707e0c0cc651e7b3c104dd79b4f5ce"],["/archives/2025/page/4/index.html","a0f3c62a981396df2337e4f6164b41c1"],["/archives/2025/page/5/index.html","c7a0c9938908bfadb0edbbab4b916d54"],["/archives/2025/page/6/index.html","2e96482b0882a17dd5a083b387fbe390"],["/archives/2025/page/7/index.html","4789cd4a7432963968731f1777b4a449"],["/archives/2025/page/8/index.html","d03e75bd8c515d5534ba20b97ae7897a"],["/archives/2025/page/9/index.html","b7faea195e11eb698606786a6d74e3f0"],["/archives/2026/02/index.html","70a6a390d87e3ae53e6c3a9f1ed10f1b"],["/archives/2026/index.html","54bf6404209b81b5e844fb60ca0e378e"],["/archives/2825/04/index.html","84d170fa3fc67792f9a44725432d9b0e"],["/archives/2825/index.html","d8bb23d47fc3620d15ebcf8e362e0119"],["/archives/2925/01/index.html","8a3c5d33106b3f87bba80e658ec885e4"],["/archives/2925/index.html","912beeb0e9012bc67435ea35919cdc2f"],["/archives/index.html","b5f3530cdd7ae9d695e41986ed1de93d"],["/archives/page/10/index.html","d37bc85bb4ddbb1889f8adbd6f30828b"],["/archives/page/11/index.html","35f625b7078043e2a1df6b27a13019df"],["/archives/page/12/index.html","878f11faf7bc4626db1abe40b94f3d4a"],["/archives/page/13/index.html","f7df01eb0a7cc0b32c3f17eba61d5e38"],["/archives/page/14/index.html","06dfd45dd4ec9a00e4ceeb89c10e67d9"],["/archives/page/2/index.html","dd702b0d6310d15428413402f4b04e2a"],["/archives/page/3/index.html","ff2aa9cdeedc4e3c5ef2cf656ed59696"],["/archives/page/4/index.html","a8494a93bf70a6b3a95490d4163a99f4"],["/archives/page/5/index.html","dcd230df59b02976ae0947cfcf574f01"],["/archives/page/6/index.html","ddc6afcc11121d462347d21d98e1d524"],["/archives/page/7/index.html","c59ebe77de2dd5cf668ce1f1068f31b9"],["/archives/page/8/index.html","5fc9647e8efeb292dfc6c394e9c445c4"],["/archives/page/9/index.html","bf6dc533c6a478149ba5d341fed767cb"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","4ef884634ba78faf94e4f2ac1e7a4f86"],["/categories/galgame/page/2/index.html","50eb064b05e0c46dd631b36a1b1093d3"],["/categories/公告/index.html","3b9cecc92a9a39bac6144e420068310c"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","c23ebcbaf489a2716a01a6aa0ab37d3f"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","a720cf836a9201ddbfd506a0cff4f6d7"],["/page/10/index.html","c47c692ebc664f621a476622c794e05b"],["/page/11/index.html","01836c88afc8254241161869c2e75c8d"],["/page/12/index.html","2217abc27da0049154fa947e32101ca0"],["/page/13/index.html","bc53cf258878fadaf893452d238af025"],["/page/14/index.html","87290db83dfddb88c655bdf808832526"],["/page/2/index.html","50c5df389c0de2d9e08eb513847b28c0"],["/page/3/index.html","3d087771e404514c743322a13d57894e"],["/page/4/index.html","2e46c186db741a380ea1a66fa426ddcb"],["/page/5/index.html","a652b1353044751e79af63712d92e4a1"],["/page/6/index.html","dae4f68f38fecfc6291827ef63726e7e"],["/page/7/index.html","0ec252b327c44552ea8f4a989f4e003a"],["/page/8/index.html","dc3fc92e0f047ef106b92833953400d9"],["/page/9/index.html","6c59ed15aba051703f2a78e45bc0d3ce"],["/posts/10c9dd98.html","b4009403f0bdf2ad4fa67aa3b0581721"],["/posts/126ebb99.html","6495bd95d6875336af47a67a9023d9fa"],["/posts/1295b569.html","53c6d7a1d05b4f50ceb0b2b3fc9a82cb"],["/posts/1370342.html","e11ceaf400b542cc117b30ac440e1a6c"],["/posts/15ef14c2.html","926076a39fe2a2747473b53d84c7b70a"],["/posts/15f3959d.html","132fe8d530120d12ef9b5cdb2f971499"],["/posts/18ab785d.html","ba4162485bf389d43f5b992fc9f8dc9c"],["/posts/1d59b71f.html","d4aa95614a1452a8b28aa02590731194"],["/posts/20b3f3a4.html","75773eca7ae0cadc58dbfb9084450143"],["/posts/245f1c7d.html","8d34252b5ff001c19cb98fa4596ad0c2"],["/posts/252658f.html","3189a7b285230f6570daba5770c7f101"],["/posts/28397adc.html","5c28fe6f82d93b3a1ae39cc293711d98"],["/posts/2ad07f54.html","b7f7bb5d6f16ef4155084c2f5427de07"],["/posts/2b38bce0.html","ed55fba078ecb84427d93a517fde6f8f"],["/posts/2c0a6836.html","e5b38d9af942d906fcd5993da23015d1"],["/posts/2ce39bcc.html","e9345f3a285268c70758e1f31c4a3a71"],["/posts/2cf620f0.html","c7e48574c626cb9ae20de2097121e1fb"],["/posts/2e30fd6d.html","4336386f415815eb8896ab36eadf11bd"],["/posts/30a413ad.html","ac158b1265b63150b4a8298e277f4006"],["/posts/34292736.html","acc85cf007b9fee9089d3227ce2a79ce"],["/posts/3468cbe.html","ed4401d76f218488a81743fdd2e98e92"],["/posts/39176dc0.html","d34bfa9b3ed7c888886d8953a22d8072"],["/posts/3e118dbf.html","ff13dc6d5b80de765a4dea8231b30aad"],["/posts/3f7d823a.html","8b51e0b4e67571450b1d86a550e15d82"],["/posts/3f978819.html","3c73ef4c98ec638682eb0a1f70f65dfc"],["/posts/41dac80e.html","542ad6da233f5d2349e0c60b7394dbf3"],["/posts/43945723.html","51c74c3886cf55246943c4a7e62a0835"],["/posts/44124a6b.html","76f32972d47074e4d0491b286432785c"],["/posts/47abb61d.html","d475e4b163e54059d01e14a3e0525cb2"],["/posts/4996478a.html","7f02e7cdcfcb1b5b312894a3e4300413"],["/posts/4b689be3.html","baef766780d7fa2891d2d7c8ad3f2ee0"],["/posts/4cf8423f.html","cb7fd8dfe4bd0e9b08ec0e98e5d007cd"],["/posts/4dcf85c.html","cf2e8b54f49fafe2b9ce19432939a856"],["/posts/500cd322.html","4cefb5b6995906231ddeb20f115c5d5a"],["/posts/51c9b1ff.html","88170a55e573cf1b70e0b695b9f1d94e"],["/posts/52b5b3c6.html","c0e31c62359544169a1195f03551ebba"],["/posts/54f496ad.html","cc750337a28b1dff5e784c04f63a27bf"],["/posts/558e1f30.html","61e41e852245f8a5deddb0304213e5a5"],["/posts/5d8bea92.html","62e71f18ee15a347e3e71fdfe125a0a7"],["/posts/5f6e0c59.html","ee7c56907c33c1ee503460b410334b3b"],["/posts/61a63a84.html","b88fd18aa7a0f26cc43fd72d8ed9067f"],["/posts/625ab7bf.html","b49b821ecb7bdbe61e5d372a814c85bc"],["/posts/6336a2f9.html","bf1589f8692f64219112e6b03ef7da21"],["/posts/6432d61a.html","e9079c3972fb8cc831f5ecb338c55ac5"],["/posts/6515f032.html","e8e90f1b8099acc759e089901d30f2e5"],["/posts/6720ccdd.html","45cbc279528ac170a999166b307de510"],["/posts/6a4b5ac8.html","6268c964c0388f2101ceaeabad9a7fdc"],["/posts/6aa4177c.html","e2518800d3e588f8e8e9bf5bf509dce9"],["/posts/6b15f81f.html","84ed206ebd3bff8ef9048387259a1c43"],["/posts/71131d34.html","a76d874dc36098c905174ffea68257cc"],["/posts/742fd48d.html","71bda6293360408f3a41ece0f78b8eaf"],["/posts/78a8a8d3.html","24efd3c6d0dd20ccc0d0d6b79f8989bb"],["/posts/7a5ef3d0.html","f0fff753a71bf88229c95045b8f0a7a0"],["/posts/7b41e1ac.html","0ec52349b479885a94bf60306bec1dd3"],["/posts/7b51011d.html","db7b6ddb13c7af9daf065eb68d207466"],["/posts/7e3aa3e2.html","089be51284ec37c48b29e3d4e575f572"],["/posts/80fe2691.html","08f47685f3897ee439039b524c97020b"],["/posts/81ac52e9.html","fdc1c7242ff02eaa25099f776732d000"],["/posts/82332d11.html","67a194176e7231a3e409439a95d5d2ec"],["/posts/8486f6f9.html","3b02141ccbf5718be1bbd4279538693c"],["/posts/849b40f8.html","d7ab1231f4098dd7fbafb3ca0e990482"],["/posts/85c51d68.html","9986cfcf21375960d2f465953adcb547"],["/posts/86a6c500.html","6996cfa0948846896c9bafe3382811e1"],["/posts/886f8d3.html","6fbe7be7eebd20099f49f5ce31ec1003"],["/posts/8a7cba10.html","239fd5742b432608673c6a3d54d9d5ea"],["/posts/8ac11b41.html","21d44e3981f4625ec63b708052390626"],["/posts/8dd520d9.html","9486dcbc4e0a577aa92119d620924ba7"],["/posts/8f555654.html","5dfe8968e8b4484cda5673f53b35852e"],["/posts/92a980c2.html","9c3e36b2c03def0f65219f7e52ecc2a6"],["/posts/92ce16.html","a02c88821edf8aad065c858c876c450d"],["/posts/93e9943b.html","aca5cc79750b89de840a449828ab232b"],["/posts/94d3c794.html","88f76cc26e98f47a70aecd89dd2b7373"],["/posts/96b281f2.html","2115b34093040488fb0d45ba59777bbd"],["/posts/97f50eea.html","2a649ab1de5888d3726b0b1490090894"],["/posts/97fca8be.html","f4d1217b44b7e139a7a385477c84da51"],["/posts/98662d05.html","6ae7c1de193759e724a68ac67f878705"],["/posts/9a2f6162.html","488d7ca8915c7b45aa7332bd2abccd7d"],["/posts/9b22a48d.html","cd941bf58bf1312f66633559fc811665"],["/posts/9cb455b1.html","2a5672bea0fd0f5b38b18aa0153642c0"],["/posts/9ecdeecc.html","308c00dd1faf685283134b57c7252f4d"],["/posts/9efd7701.html","2d7e951cd965d8f1177647cd952132c1"],["/posts/9f61c1a0.html","56b559d2c99ebec66085dc2f74aaf2e1"],["/posts/a1de710.html","adb92504c5f55b4dbe45a5b5ce0faab9"],["/posts/a30eb0cd.html","c02df897e5ea25fc48d5e7824000a8fe"],["/posts/a7634b5d.html","e811645e9e1b56accb6e2cf48908c038"],["/posts/a8c593b5.html","48f03a83a02b174ad918a18b3defd1d7"],["/posts/ad0c1efa.html","a6c2429e35fc462cf2022ed439fafec5"],["/posts/ada3f440.html","5060e78f7d5d23d72b4dd0ca7bd583f0"],["/posts/af1807ef.html","cbd75a727f50d778f681daaa36fceb03"],["/posts/b397bf03.html","404387ae19681d058b9b09ef03522e11"],["/posts/b497b647.html","7f955e23d9aa873dad19b4554a479c1d"],["/posts/b4d464b0.html","0bc4d7e8d9cba55e9865f06704262556"],["/posts/b5fb773f.html","03000d7c9a30fb3487f391421bf84693"],["/posts/b8d46b32.html","93740d51005cd6e5d3adedce86e2047f"],["/posts/c1b2c6c9.html","a321259d257b1bd568fe8c6158d1a378"],["/posts/c2111cbf.html","9552d33d323eb8ee5cd9547d326406c0"],["/posts/c316c2e8.html","891cb5113137b1143856cbc1eb1bd4d4"],["/posts/c43e60b5.html","e7a75fc870daccc7dff06dd8d14ae3d5"],["/posts/c497a412.html","a0e97571ebae87f0978dd9cec4363812"],["/posts/c5395ba3.html","15bed72a96744fdedb2c10c8d3084094"],["/posts/c5de299a.html","c777302adb16662566af1f33327489da"],["/posts/c70bba9c.html","bcd802077b46449b1319935591a5f17f"],["/posts/c797535e.html","9211c9cb4b09f05dde87c0f6debed530"],["/posts/c7a62c79.html","4f4b5c44ad60e493a9f549539a876c21"],["/posts/cae2c959.html","c452a97b05e23a6d0f4e23f54badeec9"],["/posts/cbebef2b.html","4207cdab07c3949fcbc56cd21b6a9e93"],["/posts/cc4c0017.html","eac6cdb8d051773c050ad663fc96544b"],["/posts/ce25023e.html","a56b5b92418e824dd9dce9b63cdac64d"],["/posts/d2fd4837.html","d14d23238b22f4d17d4c554b5f4bd63b"],["/posts/d3233cbb.html","915e4c6306e0bdeaec4db9bb4f70d9a6"],["/posts/d3a745a8.html","5a4299d350e16f978db1effa3536650e"],["/posts/d7e940d2.html","57d513f286656959b48b344e6b770c63"],["/posts/dc815d5.html","3b2d8e3730d5df3f3c55a6b0b704331b"],["/posts/de25b0be.html","ff8281ca33bd30f82125a020a73f568b"],["/posts/e2623b4e.html","c14c657ae83b925093c8b54b8744f789"],["/posts/e3ab6ad8.html","9bb58cb5af84486bc4af84a33dc9c440"],["/posts/e5018da6.html","d0d3c85a7dd2351092b9b20b31d3e931"],["/posts/e5963272.html","48d1275da3da6c605efca916419df0f5"],["/posts/e5ef4c3c.html","f6033cc54503d81fc3d5cbe14622cd80"],["/posts/e624b065.html","5fe7684c718ace68a3adaaea1b19ed0e"],["/posts/e7c703bb.html","7cd1a09d7b93e31ed0c0f5e2068263ef"],["/posts/e8f14b6c.html","e4b1030be3e37c60def7a71b7c7f522e"],["/posts/e91abb63.html","000ff809b96b2dd48fe824b2bfaa68e1"],["/posts/ea9a8808.html","b9d5a34280fdfaf221d5a2efb245406d"],["/posts/eb784749.html","360bd26cda0ae418b4059c091e84df73"],["/posts/ebaf2232.html","440461ed7abb787f965b3b63fc658e1d"],["/posts/ed75f185.html","6c5fe982d82005d2fe5525f390c17353"],["/posts/ee1ed673.html","b70b6087a84fcbd59127ae8dac864e58"],["/posts/f0c3ed61.html","e606db44665d47df6e306c0b38b7c4bf"],["/posts/f151ff43.html","2ddaf9e6c80fafc8672fcef6dc057421"],["/posts/f21e7f84.html","475287f4682312916cebd586082286bb"],["/posts/f230b0fd.html","08ae6447b5a1ecea482af047bde6aba4"],["/posts/f28a7877.html","ad1bc8163515fa0087b7104c6ded58c6"],["/posts/f663d5cc.html","da5eaddb43de8f6f312e296eebb97f90"],["/posts/f730ad18.html","4db91cf943b3a1340ed736cf54f33456"],["/posts/fb5d4608.html","39d5323329c100cc2f2fca343ced72c1"],["/posts/fc04d0d4.html","a7b6ae3e101408f85764bfbe07ac6019"],["/sumire/index.html","67129da65bf66bac191772f7fb53a271"],["/sw-register.js","00fb4a41394c4f6d6f208b9301866aff"],["/tags/AKo/index.html","49d4df83851b735f2f0ce314640f99fd"],["/tags/APPLE-project/index.html","8203fe59a9e632077b8716b4937fcde6"],["/tags/Ankrache/index.html","6d9940ab6e79cc081b871728605e22b3"],["/tags/BELL-DA/index.html","1eb472d3c72028d0761d9b99cf436913"],["/tags/BL-Game/index.html","a802c8998f36fd4d5e60d134a00921b1"],["/tags/Blue-Dahlia-Digital-Creators/index.html","cf1996d7fdf30406c8139e3e093e0697"],["/tags/Blue-Line-Games/index.html","a9d551c7318df34627acf755dbab36d9"],["/tags/CHUNSOFT/index.html","086ff636bbffb5963d1d5f98d97e58da"],["/tags/Check＆Stripe/index.html","2c9d5a14a5eee57783dca5b0bb0cbf9f"],["/tags/Cherry-Pie/index.html","18485481f3e394bdfa1bf3dcb8cfc159"],["/tags/Circle-Mebius/index.html","f78dcd57298edd695fb0ff6e6fce4da3"],["/tags/CresCENT-BLANK/index.html","b1b32bff9f2a2fcb76cc6402237f5f0b"],["/tags/Dopamine-Software/index.html","64988be0d006671ec627b0ab670ca54a"],["/tags/Dos/index.html","d40a8de730b07bceca271b428bbfd5ee"],["/tags/Earth-Well/index.html","cdf494a4fbb53cf3a2c0eaf005df3b1b"],["/tags/Forest/index.html","e54b063ca22dbccb216fc56e35557d34"],["/tags/HaccaWorks/index.html","46fefae589ed5cbc2709694bbc3b0a69"],["/tags/Kanon/index.html","f415b6d8af733801847ad19753d49cde"],["/tags/MANATSU-8/index.html","abd0048890eb81b712e12a628f679ade"],["/tags/MARINE/index.html","d7155a611b3c7953dc33ff7816339b72"],["/tags/MIO/index.html","764d73f85584610c9a0060f002b71142"],["/tags/NAOX/index.html","7a6fcc2199078e8b78b69b6084f5918b"],["/tags/Nmyu/index.html","1f5a057359cf58ea43fff219bcfde4ed"],["/tags/O-S-I/index.html","4dcbd3ffd4b71b0d1fbfaf5b4f6bb598"],["/tags/Omegaの視界/index.html","5f067114e9a6691659bb6ee2d7e6f6ee"],["/tags/PC88/index.html","317f972ea5edd7d00f23b25a1117ebfc"],["/tags/PC98/index.html","5db2e27d836fd30e6173d934d787bb58"],["/tags/Perpetual-Room/index.html","e09441005e98d6a9d16fbf32f3420d50"],["/tags/Pleiades-Company/index.html","02869f287b4b5ae9d71636b6afa2ef62"],["/tags/Project-Twintail/index.html","156556af5cae0af5663bfdea78959142"],["/tags/RIFF-RAFF/index.html","52660d6c41de0366f32f00dd24d3efc5"],["/tags/RPG2000/index.html","c38ba9f580969b7a942e0f95d4d18b3a"],["/tags/Reverv/index.html","1a099f7a105a4777046d6fd8a0700b38"],["/tags/SENTIVE/index.html","1d2bb92f2b546a6b71ef56dae4f90b02"],["/tags/Saihate-SOFT/index.html","0b496de8b361ba9df5409f2ae945a2ac"],["/tags/Scrubbing/index.html","a7d3754e276a705977f5f8990dd92d14"],["/tags/Sky-On-R-imaginAtion/index.html","dd408027cc79e944f560b9539e74fce4"],["/tags/StrayMoon/index.html","8b047cb2599f5371f81954c536a48584"],["/tags/Studio-Bu-Sa/index.html","56690fc9ea30575b9ac8064dc8d683ca"],["/tags/TRANSPARENCY/index.html","0d918fb0c8dc080cd54c022ff49c820b"],["/tags/ToHeart/index.html","1fd137f18d7ef616a63d5f51bd75e540"],["/tags/Traumend/index.html","ae3c3d393653a75a88f3467e0f4e59a4"],["/tags/Witch/index.html","aef3c5ea49e828bcc7f2333269aec397"],["/tags/adonis-project/index.html","801b599e576bc7a74c2d6c1b567a6383"],["/tags/capriccio-suite/index.html","03ad4fb016e9eba356dfeea00a708f86"],["/tags/flash/index.html","f93232b95e472d6a23f5ffc479b5623e"],["/tags/galgame/index.html","1e39b8f9d69d09b88cd67f85aced4436"],["/tags/galgame/page/2/index.html","6de0fb134596799d80a54b389a737fbd"],["/tags/gal资源/index.html","ea517d5518fa686ab418926c77b9061d"],["/tags/gal资源/page/2/index.html","6d108a7c5d9581d32b4bd107b13d6807"],["/tags/gal资源/page/3/index.html","f5edbaafb94558098576b3a7b0425b9c"],["/tags/index.html","e5e724df4068538c2f02ba562450df7b"],["/tags/purgatory/index.html","998e184076257655eefa453ec5463640"],["/tags/rkr/index.html","bddb2d946069d1b78a43ed5e135ee690"],["/tags/team-eye-mask/index.html","c9c1ba9e1f0b4227f5a70206365f03f3"],["/tags/ありすくろいつ/index.html","ee4e87ea02bc43b98b1571df4774c1e5"],["/tags/いつものところ/index.html","cf7eaad4b4024b7726cbff92e566cb7e"],["/tags/きつねみみ饅頭/index.html","29662fbe1824b6801b03266a357f0a14"],["/tags/ねこねこソフト/index.html","9ae8b3410c64c79416bcca1e3a065774"],["/tags/ねこバナナ/index.html","06ed2480fef42c605e6d334d1c59809e"],["/tags/はちみつくまさん/index.html","676e04e061be62db9c0d6ba34ab0c468"],["/tags/ろりちせ/index.html","4c201686695ef1d520411c932d889ea1"],["/tags/アイル【チーム・TATU】/index.html","8f1c91832c11665b4059d4028368c32a"],["/tags/アクアポラリス/index.html","31483a8e10ca009908755bffeac0a6b0"],["/tags/アークシステムワークス/index.html","7129308b5205b4818de5b0f3293eebcb"],["/tags/ブロッコリー/index.html","8db5600486bc72ae2cb40858d72d0a44"],["/tags/乙女/index.html","33e641e20c3d206892b3f4fa6c077b53"],["/tags/乙游/index.html","6efcb355da24c3096d87a1246b622336"],["/tags/停产/index.html","202dcc29e70d8d2bbbc595fb2da72cfe"],["/tags/公告/index.html","2a41b9c6f2ec9169e7c3880ca0f48511"],["/tags/同人/index.html","393c60212d9fa7f34d7b9c9660c4d72a"],["/tags/堀井雄二/index.html","b37a33038862e27457e4bdc150920e47"],["/tags/外海なおき/index.html","c309760c4ec52e972e26be4d36d82926"],["/tags/女性向/index.html","97c68e4d29aa64f12592eb70b7a0ad20"],["/tags/御茶ノ水電子製作所/index.html","b94fbeec271c37d747d70d44634475a5"],["/tags/月の水/index.html","d8ee66746913d5cce5080955cef418b6"],["/tags/桃野衿/index.html","06a937d33d461906844526aecb5645fd"],["/tags/機械式少女/index.html","91c4c6c9732efdb3ba3591a9d8ad37c6"],["/tags/水仙/index.html","12050d1cdb5e7810377ef02473d53a48"],["/tags/汉化/index.html","cbc553eb785b7e55506b0b0eb7cd608e"],["/tags/熊月温泉/index.html","36401ff55881d3f712afd7f8b419228a"],["/tags/片冈智/index.html","a8d50602a4a7e6f6f7e256f6115ec3b2"],["/tags/片岡とも/index.html","c6c4a427b8c0aa2b8284a7b1cf73a891"],["/tags/牙の刻印制作委員会/index.html","98d0039c0781857f53ad0aa044eeec63"],["/tags/牛カルビ定食-FLAT/index.html","d2a763de405f42d85d06a16eff58cb40"],["/tags/牧尾屋/index.html","0cb910f3918d5171207116826aa97735"],["/tags/犬茶屋/index.html","3a2f07605947d4bc912fce1eabf1f75b"],["/tags/猫猫社/index.html","d661bc73cc9f4f6939e471ed46f750eb"],["/tags/王宮魔法劇団/index.html","c305a4d3eb6ad20440d5c7902c0e1256"],["/tags/画集/index.html","e5aa1b3a3fccfde9156c102975fd20ae"],["/tags/索引/index.html","36c46341a0907c78f832406b1761b915"],["/tags/缺失/index.html","76226aadc95412e02c78bcd0eaa2c313"],["/tags/自购/index.html","d997ff4176a1f607f61c819186542448"],["/tags/茶葉☆姫/index.html","20e241d2c38b869c8c3673c3e097eee1"],["/tags/郷愁花屋/index.html","83f9f07dea6973eaa8099e74653ecff2"],["/tags/閂夜明/index.html","a21fb1d9f73610029283b1e820f127d2"],["/tags/音乐美/index.html","3f845442d23ec7ae9fb211079b4324aa"],["/tags/黒†救/index.html","2481b1ac859fef5ff4a2d968d7b1bc0a"]];
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
