/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","853a556cacbf68c0938e77a7fe19b74c"],["/archives/2024/04/index.html","94a23975f83a3f4dc08e27c65016a841"],["/archives/2024/index.html","61eaa2a04778cd1dece2ee7ea1126bf6"],["/archives/2025/02/index.html","1dde21896434b787adb2b24c803c9bf8"],["/archives/2025/02/page/2/index.html","86039731f164aa8205483d7a5aab4083"],["/archives/2025/02/page/3/index.html","bade40d9bb8342c5019301f1737c39dc"],["/archives/2025/02/page/4/index.html","07564a1292fd24ce8a52acd659ec10f1"],["/archives/2025/02/page/5/index.html","43ede645c02ff63eaf92fcccd770a3c1"],["/archives/2025/03/index.html","1abc9c23c8da89ca509aef76c4c72527"],["/archives/2025/03/page/2/index.html","d8c4a1245d7bacb76fcd17304890bffe"],["/archives/2025/03/page/3/index.html","d1cc7db21189c4eae17ad1a3542d5427"],["/archives/2025/03/page/4/index.html","8d8ec1a809f347065aef0f127938d361"],["/archives/2025/03/page/5/index.html","e7a469c6073f02bbe021f8eac1d8aff4"],["/archives/2025/03/page/6/index.html","7864d27a78337db79e064038b25e7d7d"],["/archives/2025/04/index.html","5cba041bdf8ea4de604b3f4041102b8f"],["/archives/2025/04/page/2/index.html","40e283b9af660496d6cf78c6b6278e93"],["/archives/2025/04/page/3/index.html","5e0d50ce5f4b292b9ab1538b1dc4c4e8"],["/archives/2025/05/index.html","073031862350a70b81aab2697392c04d"],["/archives/2025/index.html","f2b88fa092c6e254e645a999bc6a1ba3"],["/archives/2025/page/10/index.html","af35802ae37f8993e4f39c19d54d655c"],["/archives/2025/page/11/index.html","aaa9c29596bedf8d2ac720dafa233b0d"],["/archives/2025/page/12/index.html","9c363776024656d1c4bd57fffa435626"],["/archives/2025/page/13/index.html","0883543a5d2fec228146c7e002c8504e"],["/archives/2025/page/14/index.html","b149c9cd56a47bd2826fb84fbd7f85cf"],["/archives/2025/page/2/index.html","4a6ab71e38becef7b61e783dede885e6"],["/archives/2025/page/3/index.html","16f966c0e0919e60c22c3abba9fbfa3f"],["/archives/2025/page/4/index.html","8c0052db9f2be316c3cd705266885068"],["/archives/2025/page/5/index.html","d174f5182368b34572914a82d6778e04"],["/archives/2025/page/6/index.html","c174bd7df2fd3c3a7445d07f7e8de068"],["/archives/2025/page/7/index.html","85400cb3f7d5ce207c6f779f623dcf76"],["/archives/2025/page/8/index.html","9efba25de3385ac79b6b1b563454b89b"],["/archives/2025/page/9/index.html","1b5f375563005d9fcd966831f2c523ef"],["/archives/2026/02/index.html","4967365bea15c728b6a287a3e736908f"],["/archives/2026/index.html","5e2864ba9c45ed07ebfd0eba4bffcd46"],["/archives/2825/04/index.html","b9bfae9478f769e30cd48eb46f2d12ed"],["/archives/2825/index.html","986eddf32a3f3212546149ed7625bfea"],["/archives/2925/01/index.html","1ea991c4872ae1d94de95c4a1b5f9608"],["/archives/2925/index.html","11958e73552c2548835e684d57bd0aa4"],["/archives/index.html","ba8998557886fe379b6d656a1453d8d5"],["/archives/page/10/index.html","64cb2ebee49fb5b95f9c866383b74651"],["/archives/page/11/index.html","31995a96e56c2d1ebd8fbae04e633f82"],["/archives/page/12/index.html","49f22cd129364a6186c02a5850de4f52"],["/archives/page/13/index.html","1cc3856ceadc8cdc99739a7150f9eae9"],["/archives/page/14/index.html","c2442255bb13c6cbd155bb37cfb10ae4"],["/archives/page/2/index.html","bd013525fd95d1f48ca44699c09e328b"],["/archives/page/3/index.html","467efd26eb0e9264a9ff719d6e919200"],["/archives/page/4/index.html","bf95fe230892cd440eefd3a5d656991b"],["/archives/page/5/index.html","da832e143822687a12cb17664aa7bad1"],["/archives/page/6/index.html","43d1aaa31f6a9bcebc86899c1f5888f0"],["/archives/page/7/index.html","e7c1404faca516e320511ed010071b7e"],["/archives/page/8/index.html","d8d214f64628e5a76907b1b25d5d880e"],["/archives/page/9/index.html","ecb5f93b99e3f34f710a42c7d41774c2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","bc94849ea379adbdbee74275b1c965f7"],["/categories/galgame/page/2/index.html","9e728291982c8669e22c940ddf83c3a0"],["/categories/公告/index.html","8db47abcc9043caacd31a25ef93ed700"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","bb2b19db21823d836b86ad46dfd1f25c"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","cee93eb11d6c187ff089e4b980a18ee4"],["/page/10/index.html","69a3db5163b313a757b3650be274c94a"],["/page/11/index.html","a66583bb2ff591c7bfd53dda503d02b7"],["/page/12/index.html","bd6b18e92dcb3cf46fb61fe2be03eff7"],["/page/13/index.html","6acae9a0023ad240bd7c5603fbe6b890"],["/page/14/index.html","7c7aa4606166f77738197e30c743c918"],["/page/2/index.html","eeeaa85fa65b0c507ac3d204e18e9cd8"],["/page/3/index.html","c400d5d64f9b0894c68d5f3472cd6af2"],["/page/4/index.html","8e85a29fc41b02739a65acefd3775179"],["/page/5/index.html","8c1dbeaee77bf733c82a8b1ab59b84f9"],["/page/6/index.html","f4deda5f37e7610ad8596bd162ef8941"],["/page/7/index.html","4eb23bfa6469adb252adcb1fa6d65007"],["/page/8/index.html","11da1c88011262799a6a1e99d8dadf35"],["/page/9/index.html","b52bbf547236a8aa6544ce84391fb2f4"],["/posts/10c9dd98.html","b3cf8a8788811c36bacc5774f5736792"],["/posts/126ebb99.html","6495bd95d6875336af47a67a9023d9fa"],["/posts/1295b569.html","53c6d7a1d05b4f50ceb0b2b3fc9a82cb"],["/posts/1370342.html","9843373d34bd72cf04f94493273d2aca"],["/posts/15ef14c2.html","926076a39fe2a2747473b53d84c7b70a"],["/posts/15f3959d.html","132fe8d530120d12ef9b5cdb2f971499"],["/posts/18ab785d.html","ba4162485bf389d43f5b992fc9f8dc9c"],["/posts/1d59b71f.html","8fd6c3c532096479fcf8619f6bdd5dcc"],["/posts/20b3f3a4.html","0f6a1e8f96efbc98da394e244ccc4b63"],["/posts/245f1c7d.html","8d34252b5ff001c19cb98fa4596ad0c2"],["/posts/252658f.html","3189a7b285230f6570daba5770c7f101"],["/posts/28397adc.html","5c28fe6f82d93b3a1ae39cc293711d98"],["/posts/2ad07f54.html","b7f7bb5d6f16ef4155084c2f5427de07"],["/posts/2b38bce0.html","ed55fba078ecb84427d93a517fde6f8f"],["/posts/2c0a6836.html","e5b38d9af942d906fcd5993da23015d1"],["/posts/2ce39bcc.html","e9345f3a285268c70758e1f31c4a3a71"],["/posts/2cf620f0.html","09c59635d27eb9a8799eec56ce5cd166"],["/posts/2e30fd6d.html","4336386f415815eb8896ab36eadf11bd"],["/posts/30a413ad.html","9456246e37de28f964bdff3ee3dd52af"],["/posts/34292736.html","acc85cf007b9fee9089d3227ce2a79ce"],["/posts/3468cbe.html","ed4401d76f218488a81743fdd2e98e92"],["/posts/39176dc0.html","d34bfa9b3ed7c888886d8953a22d8072"],["/posts/3e118dbf.html","ff13dc6d5b80de765a4dea8231b30aad"],["/posts/3f7d823a.html","8b51e0b4e67571450b1d86a550e15d82"],["/posts/3f978819.html","3c73ef4c98ec638682eb0a1f70f65dfc"],["/posts/41dac80e.html","542ad6da233f5d2349e0c60b7394dbf3"],["/posts/43945723.html","51c74c3886cf55246943c4a7e62a0835"],["/posts/44124a6b.html","76f32972d47074e4d0491b286432785c"],["/posts/47abb61d.html","d475e4b163e54059d01e14a3e0525cb2"],["/posts/4996478a.html","7f02e7cdcfcb1b5b312894a3e4300413"],["/posts/4b689be3.html","bd350cab547bb7002e787c90c01361cf"],["/posts/4cf8423f.html","cb7fd8dfe4bd0e9b08ec0e98e5d007cd"],["/posts/4dcf85c.html","b46b107d3f28b28a565a4805c4e32aa4"],["/posts/500cd322.html","4cefb5b6995906231ddeb20f115c5d5a"],["/posts/51c9b1ff.html","88170a55e573cf1b70e0b695b9f1d94e"],["/posts/52b5b3c6.html","345d2b44aa177adafccc4b1e23efb5d3"],["/posts/54f496ad.html","cc750337a28b1dff5e784c04f63a27bf"],["/posts/558e1f30.html","61e41e852245f8a5deddb0304213e5a5"],["/posts/5d8bea92.html","62e71f18ee15a347e3e71fdfe125a0a7"],["/posts/5f6e0c59.html","ee7c56907c33c1ee503460b410334b3b"],["/posts/61a63a84.html","b88fd18aa7a0f26cc43fd72d8ed9067f"],["/posts/625ab7bf.html","b49b821ecb7bdbe61e5d372a814c85bc"],["/posts/6336a2f9.html","64506182670cc191584fe7d1ecbbea6f"],["/posts/6432d61a.html","e9079c3972fb8cc831f5ecb338c55ac5"],["/posts/6515f032.html","bc2517f6d08c105acba1012b8ae4ce00"],["/posts/6720ccdd.html","946b5340dfa24411444875b16981aa41"],["/posts/6a4b5ac8.html","6268c964c0388f2101ceaeabad9a7fdc"],["/posts/6aa4177c.html","e2518800d3e588f8e8e9bf5bf509dce9"],["/posts/6b15f81f.html","84ed206ebd3bff8ef9048387259a1c43"],["/posts/71131d34.html","a76d874dc36098c905174ffea68257cc"],["/posts/742fd48d.html","71bda6293360408f3a41ece0f78b8eaf"],["/posts/78a8a8d3.html","f2626eac2de34605c79f0f1c7b44d7d2"],["/posts/7a5ef3d0.html","f0fff753a71bf88229c95045b8f0a7a0"],["/posts/7b41e1ac.html","0ec52349b479885a94bf60306bec1dd3"],["/posts/7b51011d.html","db7b6ddb13c7af9daf065eb68d207466"],["/posts/7e3aa3e2.html","ceddc16fc10eb4c02858a5cc9e8f1e87"],["/posts/80fe2691.html","a7ad1fdb3123266a60d06756d7586dca"],["/posts/81ac52e9.html","fdc1c7242ff02eaa25099f776732d000"],["/posts/82332d11.html","67a194176e7231a3e409439a95d5d2ec"],["/posts/8486f6f9.html","3b02141ccbf5718be1bbd4279538693c"],["/posts/849b40f8.html","098e0ab9b1e2cd889b213d78488d6b0f"],["/posts/85c51d68.html","9986cfcf21375960d2f465953adcb547"],["/posts/86a6c500.html","6996cfa0948846896c9bafe3382811e1"],["/posts/886f8d3.html","0147ceebdaf7f0077ad53975af451dce"],["/posts/8a7cba10.html","239fd5742b432608673c6a3d54d9d5ea"],["/posts/8ac11b41.html","21d44e3981f4625ec63b708052390626"],["/posts/8dd520d9.html","9486dcbc4e0a577aa92119d620924ba7"],["/posts/8f555654.html","1ab863045d48c6720f3eca2726795486"],["/posts/92a980c2.html","9c3e36b2c03def0f65219f7e52ecc2a6"],["/posts/92ce16.html","a02c88821edf8aad065c858c876c450d"],["/posts/93e9943b.html","aca5cc79750b89de840a449828ab232b"],["/posts/94d3c794.html","88f76cc26e98f47a70aecd89dd2b7373"],["/posts/96b281f2.html","2115b34093040488fb0d45ba59777bbd"],["/posts/97f50eea.html","2a649ab1de5888d3726b0b1490090894"],["/posts/97fca8be.html","f4d1217b44b7e139a7a385477c84da51"],["/posts/98662d05.html","9b50a5860cfa203a73f420746eb677be"],["/posts/9a2f6162.html","488d7ca8915c7b45aa7332bd2abccd7d"],["/posts/9b22a48d.html","cd941bf58bf1312f66633559fc811665"],["/posts/9cb455b1.html","6336f9ce747f58aa3306604ba1916afe"],["/posts/9ecdeecc.html","308c00dd1faf685283134b57c7252f4d"],["/posts/9efd7701.html","2d7e951cd965d8f1177647cd952132c1"],["/posts/9f61c1a0.html","56b559d2c99ebec66085dc2f74aaf2e1"],["/posts/a1de710.html","adb92504c5f55b4dbe45a5b5ce0faab9"],["/posts/a30eb0cd.html","c02df897e5ea25fc48d5e7824000a8fe"],["/posts/a7634b5d.html","e811645e9e1b56accb6e2cf48908c038"],["/posts/a8c593b5.html","48f03a83a02b174ad918a18b3defd1d7"],["/posts/ad0c1efa.html","a6c2429e35fc462cf2022ed439fafec5"],["/posts/ada3f440.html","3d90658ccaa2e20828ffbd37106a183d"],["/posts/af1807ef.html","cbd75a727f50d778f681daaa36fceb03"],["/posts/b397bf03.html","404387ae19681d058b9b09ef03522e11"],["/posts/b497b647.html","f16c0b84b359e396c577d66374252efe"],["/posts/b4d464b0.html","0bc4d7e8d9cba55e9865f06704262556"],["/posts/b5fb773f.html","41a33d79b09a709fd73379c088a935aa"],["/posts/b8d46b32.html","19a0d3762e41878ee66f7d05d85064b3"],["/posts/c1b2c6c9.html","a321259d257b1bd568fe8c6158d1a378"],["/posts/c2111cbf.html","9552d33d323eb8ee5cd9547d326406c0"],["/posts/c316c2e8.html","720cd7e821a7ebe0897ab145fcf8a9c8"],["/posts/c43e60b5.html","e7a75fc870daccc7dff06dd8d14ae3d5"],["/posts/c497a412.html","a51ee68d6e7dfa81def1296f2835d2a2"],["/posts/c5395ba3.html","15bed72a96744fdedb2c10c8d3084094"],["/posts/c5de299a.html","c777302adb16662566af1f33327489da"],["/posts/c70bba9c.html","bcd802077b46449b1319935591a5f17f"],["/posts/c797535e.html","9211c9cb4b09f05dde87c0f6debed530"],["/posts/c7a62c79.html","4f4b5c44ad60e493a9f549539a876c21"],["/posts/cae2c959.html","1da5cf40eb73f4a0780c596688424bd7"],["/posts/cbebef2b.html","1e80253003eec7c86a639dcf96cf75fa"],["/posts/cc4c0017.html","eac6cdb8d051773c050ad663fc96544b"],["/posts/ce25023e.html","5fe976abdb6e2e973f1bfb846baedc3f"],["/posts/d2fd4837.html","eecb384578234e0558896587fb72aa7f"],["/posts/d3233cbb.html","915e4c6306e0bdeaec4db9bb4f70d9a6"],["/posts/d3a745a8.html","190bb8d92712bdbb67dcb82c08db609b"],["/posts/d7e940d2.html","57d513f286656959b48b344e6b770c63"],["/posts/dc815d5.html","150f1dcd388086cb8cd71c1fbf506504"],["/posts/de25b0be.html","ff8281ca33bd30f82125a020a73f568b"],["/posts/e2623b4e.html","c14c657ae83b925093c8b54b8744f789"],["/posts/e3ab6ad8.html","9bb58cb5af84486bc4af84a33dc9c440"],["/posts/e5018da6.html","720f249e547b92f213774a7a2c76fda2"],["/posts/e5963272.html","48d1275da3da6c605efca916419df0f5"],["/posts/e5ef4c3c.html","f6033cc54503d81fc3d5cbe14622cd80"],["/posts/e624b065.html","ae131b93e835a6ecbcbbbdd72e5dc411"],["/posts/e7c703bb.html","7cd1a09d7b93e31ed0c0f5e2068263ef"],["/posts/e8f14b6c.html","e4b1030be3e37c60def7a71b7c7f522e"],["/posts/e91abb63.html","c5a8af43558850611657bfc2da0bdeeb"],["/posts/ea9a8808.html","b9d5a34280fdfaf221d5a2efb245406d"],["/posts/eb784749.html","360bd26cda0ae418b4059c091e84df73"],["/posts/ebaf2232.html","440461ed7abb787f965b3b63fc658e1d"],["/posts/ed75f185.html","6c5fe982d82005d2fe5525f390c17353"],["/posts/ee1ed673.html","b70b6087a84fcbd59127ae8dac864e58"],["/posts/f0c3ed61.html","e606db44665d47df6e306c0b38b7c4bf"],["/posts/f151ff43.html","2ddaf9e6c80fafc8672fcef6dc057421"],["/posts/f21e7f84.html","475287f4682312916cebd586082286bb"],["/posts/f230b0fd.html","84f5f8cfbf76c8394f892a06ab984240"],["/posts/f28a7877.html","ad1bc8163515fa0087b7104c6ded58c6"],["/posts/f663d5cc.html","da5eaddb43de8f6f312e296eebb97f90"],["/posts/f730ad18.html","a7dc2f5b628432608bd7944400287800"],["/posts/fb5d4608.html","39d5323329c100cc2f2fca343ced72c1"],["/posts/fc04d0d4.html","a7b6ae3e101408f85764bfbe07ac6019"],["/sumire/index.html","03ac2ba7c8eb1cb873536c9305fc3daf"],["/sw-register.js","329f3ed91389ee2b4193419067f20578"],["/tags/AKo/index.html","bd840a8b91ca37033b2a4273a416b9a9"],["/tags/APPLE-project/index.html","64738db9c19c58cc945d130a18c91368"],["/tags/Ankrache/index.html","f9ce886200b8b36071981bd4f9900e1b"],["/tags/BELL-DA/index.html","f68f82df185c30ba2a0ea90e2b031405"],["/tags/BL-Game/index.html","731cecc3162015982413ed52c5ec8315"],["/tags/Blue-Dahlia-Digital-Creators/index.html","0bb0150003c82340a96fed289302ee11"],["/tags/Blue-Line-Games/index.html","ed4038aa6970c3deaceba1451c36e988"],["/tags/CHUNSOFT/index.html","fef0452bc28efc09f226ff97d81d7eec"],["/tags/Check＆Stripe/index.html","9ea34fdd4266e863271b19403482a082"],["/tags/Cherry-Pie/index.html","e1732b1657535d440f9cd8e21c29d2b4"],["/tags/Circle-Mebius/index.html","995080132a8a48b4cb055a0626246bee"],["/tags/CresCENT-BLANK/index.html","bf38e529617e6710ddfb1552fced9f1c"],["/tags/Dopamine-Software/index.html","a33672093cf534bd76edb4f5c93f5655"],["/tags/Dos/index.html","560f55259f8dbd4b74f1a2759ec1614f"],["/tags/Earth-Well/index.html","6131845c7593b03aa7d6d41e119e6dee"],["/tags/Forest/index.html","d76a1ec3d9077a384abf8aaa568fc130"],["/tags/HaccaWorks/index.html","612e33f529e6abc559f841ebadb3c5fc"],["/tags/Kanon/index.html","04de4053581dab7ee2d61536ac39b865"],["/tags/MANATSU-8/index.html","b378b09ac1dbfdade4144d443d291af1"],["/tags/MARINE/index.html","1278376673d4cc2489c84b5c3cce90b8"],["/tags/MIO/index.html","82de7fde95f09162ff6f11ae4063e534"],["/tags/NAOX/index.html","6d959468be8334b0c4a1ace92bdb8a26"],["/tags/Nmyu/index.html","60fada90cf2faa7eabf41ad6004e7387"],["/tags/O-S-I/index.html","fec81d63bde22f5e030cdfd286de1cea"],["/tags/Omegaの視界/index.html","7904cd3b44319fe5543b608f6ae35b88"],["/tags/PC88/index.html","2d0725de01057faaf09d711489e4fdac"],["/tags/PC98/index.html","92f693313bffcb9fa2352b83b20744fd"],["/tags/Perpetual-Room/index.html","f275c4baba5b8fda60a3fc6772039052"],["/tags/Pleiades-Company/index.html","58930fec395bd8681e015beba1000840"],["/tags/Project-Twintail/index.html","4bb49343416063e71946f272653e6e16"],["/tags/RIFF-RAFF/index.html","927f35cf9f9282b2dd7e267ba9b17466"],["/tags/RPG2000/index.html","75b9233af5898b958300bb59f1c87e9d"],["/tags/Reverv/index.html","e3a954e74131d965863dbfaba2488a25"],["/tags/SENTIVE/index.html","6586ea684e6477bf2326a60b69160133"],["/tags/Saihate-SOFT/index.html","155f1f657f2967f0f430e142caf811f4"],["/tags/Scrubbing/index.html","24b4178cafc53aed591a9cc4fcf35051"],["/tags/Sky-On-R-imaginAtion/index.html","0307afd3c78599409b2910dac622f2c8"],["/tags/StrayMoon/index.html","b7dfe060f71640f7a8c696b0e2e5ca1a"],["/tags/Studio-Bu-Sa/index.html","eb5708d5fdefea6eee9d6e108af4fd7c"],["/tags/TRANSPARENCY/index.html","6f5b979ce8433855a461e7f4bb0406de"],["/tags/ToHeart/index.html","d7a9edccf8292dbc575b360cd7a81b19"],["/tags/Traumend/index.html","4a0a4cbfdab776ae46477156c8a449d4"],["/tags/Witch/index.html","ec9bd4852859d6db3d9f6cf5c0d45768"],["/tags/adonis-project/index.html","501c224ede61d0222cee15a58e859428"],["/tags/capriccio-suite/index.html","d12c2d574d2aa8f80d212d6288d62bcd"],["/tags/flash/index.html","15fe355f1ba34a24ba1f1e185e8120cc"],["/tags/galgame/index.html","e36a4375ffc6a17d5d6be2c820bc2d23"],["/tags/galgame/page/2/index.html","76252e462248b09877778f0e75253dd0"],["/tags/gal资源/index.html","0323ab9b2585ec943f7e9e60a460b88e"],["/tags/gal资源/page/2/index.html","8fa262bf91a91ac8f54fd76409dc1280"],["/tags/gal资源/page/3/index.html","c5e76790cd6d8dccc4feeac74c9ef159"],["/tags/index.html","9c38940531655e17cddddabfab596bee"],["/tags/purgatory/index.html","503ae5fb58fbe21cebf522536f63d7ea"],["/tags/rkr/index.html","c2c5f28bae917462d703ca206785a888"],["/tags/team-eye-mask/index.html","e968fc6d92eb417605cae4dadf3a465c"],["/tags/ありすくろいつ/index.html","028442d8b027520f99f8f039ee0a9a14"],["/tags/いつものところ/index.html","7bc55cb82107d54d8686e084516d9292"],["/tags/きつねみみ饅頭/index.html","815974b416a237d34ae007fe2a814437"],["/tags/ねこねこソフト/index.html","98ee2a212508b2d66ce6697931668063"],["/tags/ねこバナナ/index.html","d74ea8b186673982ccdeb77663dd05cc"],["/tags/はちみつくまさん/index.html","8feb09a63f1ce66753dd8dc4bc4ee9fc"],["/tags/ろりちせ/index.html","5e0f8f7429360ad7efa45d17b21283df"],["/tags/アイル【チーム・TATU】/index.html","aa7da74060237b3ad7dffd1d60df476c"],["/tags/アクアポラリス/index.html","94e6e771a692ef1ca48525d3fa674d63"],["/tags/アークシステムワークス/index.html","963bb2ac38dae21b4727b806437bf7ac"],["/tags/ブロッコリー/index.html","5ae7206e14768464a348c7d07d19ccfb"],["/tags/乙女/index.html","82054a924461148f3bdb78df43b0b086"],["/tags/乙游/index.html","c74c172e88fb86eb99e93121eb214fda"],["/tags/停产/index.html","a35bd6a945fdb50cd95d5ed2739ecb99"],["/tags/公告/index.html","0ea436899d5ca30f15e4549f7a6c1ad0"],["/tags/同人/index.html","93a6014132e257fecab46a9ddef73de4"],["/tags/堀井雄二/index.html","d57fa9d5dfaaa3bb1a85f577d05df295"],["/tags/外海なおき/index.html","a570e68cfd03f81af0ffca3638a1ddbc"],["/tags/女性向/index.html","be9e2197152d2eb8514a115ee716eac4"],["/tags/御茶ノ水電子製作所/index.html","e503be634084c0f67196dfc930233c88"],["/tags/月の水/index.html","af006649d91b655b48d30ec2a3381ec5"],["/tags/桃野衿/index.html","9008a3d9f02318849441abe8ca13d2d8"],["/tags/機械式少女/index.html","d0b63bba4f7480d918be5ed42944032f"],["/tags/水仙/index.html","817a57aa4b957880e9ee7c4789784d01"],["/tags/汉化/index.html","c7e61eee17c595c0fd924468bae6896b"],["/tags/熊月温泉/index.html","f4d9b5ac8ddca671d0e1ed48b26aead9"],["/tags/片冈智/index.html","37c2464a51f512292f620099a8ed288e"],["/tags/片岡とも/index.html","ad5d97ef92c3545c53cfabd0f382057b"],["/tags/牙の刻印制作委員会/index.html","dec5a901fa4ea6c0f7b0229e219b5edf"],["/tags/牛カルビ定食-FLAT/index.html","133901db31010f6fdf5a93140ba49af5"],["/tags/牧尾屋/index.html","d441b73e21d7c055a063724f48e2e91e"],["/tags/犬茶屋/index.html","9e490578d289722ba125336757823dad"],["/tags/猫猫社/index.html","09d9b49dcb2f1aae2bf80f5d8e9dce39"],["/tags/王宮魔法劇団/index.html","7f3c9104d5f7d765d0c44d228bf3a360"],["/tags/画集/index.html","b6c425d9716660944da15e8891d3e7a6"],["/tags/索引/index.html","78be2973747b09c925eb2a09946c52b4"],["/tags/缺失/index.html","09aee62a67d35a75954a9dec8e8db2b8"],["/tags/自购/index.html","09f0365b0339db4881523330fea9ce91"],["/tags/茶葉☆姫/index.html","6bda8c359f5fe4d65e25c01d4024d961"],["/tags/郷愁花屋/index.html","bf394dbd3b2fafb3b31c821a90974e8a"],["/tags/閂夜明/index.html","e431a488d7e8a4d10a4d60fb496e5f30"],["/tags/音乐美/index.html","5021a6b3c8a942967d0fecb05fba7cfc"],["/tags/黒†救/index.html","4b2a09cc8d3e2bbf1b5ad7bfbdd2b7a1"]];
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
