/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","7654fb156b5dc18a0b8ab2938818f48f"],["/archives/2024/04/index.html","b0319c2c1e4aae6c8528af346c9dbc9d"],["/archives/2024/index.html","99857272d529c0c38eda55836b2e9da2"],["/archives/2025/02/index.html","800fe88bb23c845a0cdb2478612f7702"],["/archives/2025/02/page/2/index.html","127560ea5fbb89e9eee6c9def1cf3d72"],["/archives/2025/02/page/3/index.html","c30d89f3a838c3f0ddacad16b66f4d9d"],["/archives/2025/02/page/4/index.html","e5fef710be6876da2ba851439c1d8edf"],["/archives/2025/02/page/5/index.html","583153ca1949ed8052ce66721c1d9f1d"],["/archives/2025/03/index.html","d8655b7a084a927077cd6f997d4522fc"],["/archives/2025/03/page/2/index.html","7e747da4f53d8d85fece52c15d21c7b9"],["/archives/2025/03/page/3/index.html","ced3ddd23735910f282db547e9ed2316"],["/archives/2025/03/page/4/index.html","63d18982f0be1750cd561b9c4e17a7fd"],["/archives/2025/03/page/5/index.html","8c5134752f8d7d7531b9052d3b9fae4f"],["/archives/2025/03/page/6/index.html","d690327d9fe21a72ffceb4b0b206d767"],["/archives/2025/04/index.html","68fde195fb5e5ef9494abc6bf23fe67f"],["/archives/2025/04/page/2/index.html","a91002d6c3c0f8f2b570dd5b633049ef"],["/archives/2025/04/page/3/index.html","ccae1f2e2dd504bb1737c71002eab2a9"],["/archives/2025/05/index.html","ccdc548d3fae167054e8bea4e0b39b84"],["/archives/2025/index.html","b1f4f7fce20e88176d00af7d11913d20"],["/archives/2025/page/10/index.html","75e30a52d0a12b62076a8e9991e18436"],["/archives/2025/page/11/index.html","bc8fc1df8371ac06d68620943bb52a31"],["/archives/2025/page/12/index.html","00bb9cd83ede4f0834331fd062d466d5"],["/archives/2025/page/13/index.html","b9adc6b18737f5902253a4fd00c728c0"],["/archives/2025/page/14/index.html","28bdea6ecefee66dc8684f35fdad90e5"],["/archives/2025/page/2/index.html","c0a4dd5b750ab040c54664df5f47a5c3"],["/archives/2025/page/3/index.html","ef269c2b8a151e519555a89fb460d285"],["/archives/2025/page/4/index.html","6831e76e8a7ec7f7d4ee024d7563d8de"],["/archives/2025/page/5/index.html","4e2e13caa452b1b2d375292430415983"],["/archives/2025/page/6/index.html","8e679bebfcb2a9322662a4757a6da409"],["/archives/2025/page/7/index.html","10bf915149712195805e969f0703b45e"],["/archives/2025/page/8/index.html","7c90ed43300b8d09fcfc76d2c3f92880"],["/archives/2025/page/9/index.html","079a6fc506c93891eb46c75b180cc030"],["/archives/2026/02/index.html","9155264d47b14d73b1b39e7c8606dd26"],["/archives/2026/index.html","d99c92d8784c0e015a0e78b579aef4cc"],["/archives/2825/04/index.html","a85d2e679c8b7487a20796bbc3ea09f2"],["/archives/2825/index.html","00f38aa567134433e12e215a39793245"],["/archives/2925/01/index.html","fd878c08764be06f2600ca4499c3ef89"],["/archives/2925/index.html","9aaea64f576e75108f67a5481fc985b8"],["/archives/index.html","5a28013b652e19edf7d98fc528978d3a"],["/archives/page/10/index.html","6ae47888d3d1c9b7d65addaefb0d225c"],["/archives/page/11/index.html","c0730b5de77eb93452a414192d2fed4d"],["/archives/page/12/index.html","58374bb01c798ba769b3332e3edc4427"],["/archives/page/13/index.html","b9f6d2d637e6efdbc56e11adc858e174"],["/archives/page/14/index.html","55811c3a0db3320c1ec17b6d7b5dd6d9"],["/archives/page/2/index.html","0314ca4c504e9358877cfb49f1b5e973"],["/archives/page/3/index.html","13716980cfee687012a4e38b7369368e"],["/archives/page/4/index.html","286192b1a5548aa07371270d73fd5b6b"],["/archives/page/5/index.html","23ca2cd2b2a551626c5a0ab73861247e"],["/archives/page/6/index.html","81426a36c73f91c4853e5eded528864e"],["/archives/page/7/index.html","39b704fbb5d30af0bf762f431ba00f6b"],["/archives/page/8/index.html","f05d9c9643024c9b3b91723e3adce748"],["/archives/page/9/index.html","39eaed1a8a24869b9288478338c8c26a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","f64d1c82ee7d88bb708faef758b26e89"],["/categories/galgame/page/2/index.html","0d417ddb21aa6b2aaa1a4a804265ee4b"],["/categories/公告/index.html","c384826f9f60c95366543358bd8bccc2"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","430e1c833fbb236ea44014e09cd2b915"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","49a5505bdaae9d9d414d0ecc69924a12"],["/page/10/index.html","04da603e0dd9058b7a181deb4f816681"],["/page/11/index.html","b906d4395e4b5d2bb6e5b072c4ec966a"],["/page/12/index.html","ac02479652ddf2de8230ca200e0bac4b"],["/page/13/index.html","ba7f4b2ae14141758a78db1600cd0bc9"],["/page/14/index.html","556357e03636bef4596cf7764eeeea4a"],["/page/2/index.html","4c72e9125c971dbf10cf7a042159dd32"],["/page/3/index.html","6b120a2d91ee08a102cf4b2d23ea7b1e"],["/page/4/index.html","a664d502f0af7035e5df71729da9384a"],["/page/5/index.html","a0fa2db11bfb2a417d0139af14c9fdc6"],["/page/6/index.html","bb3f075584335909adbc0dcf45cae008"],["/page/7/index.html","70528e3bc27057eb373c1d27a377fbd1"],["/page/8/index.html","9a6b37f60d3647490a77de87275a5481"],["/page/9/index.html","d0dbc57f6be9f633e9fca015dd7c5aa2"],["/posts/10c9dd98.html","b3cf8a8788811c36bacc5774f5736792"],["/posts/126ebb99.html","6495bd95d6875336af47a67a9023d9fa"],["/posts/1295b569.html","53c6d7a1d05b4f50ceb0b2b3fc9a82cb"],["/posts/1370342.html","9843373d34bd72cf04f94493273d2aca"],["/posts/15ef14c2.html","926076a39fe2a2747473b53d84c7b70a"],["/posts/15f3959d.html","132fe8d530120d12ef9b5cdb2f971499"],["/posts/18ab785d.html","ba4162485bf389d43f5b992fc9f8dc9c"],["/posts/1d59b71f.html","8fd6c3c532096479fcf8619f6bdd5dcc"],["/posts/20b3f3a4.html","0f6a1e8f96efbc98da394e244ccc4b63"],["/posts/245f1c7d.html","8d34252b5ff001c19cb98fa4596ad0c2"],["/posts/252658f.html","3189a7b285230f6570daba5770c7f101"],["/posts/28397adc.html","5c28fe6f82d93b3a1ae39cc293711d98"],["/posts/2ad07f54.html","b7f7bb5d6f16ef4155084c2f5427de07"],["/posts/2b38bce0.html","ed55fba078ecb84427d93a517fde6f8f"],["/posts/2c0a6836.html","e5b38d9af942d906fcd5993da23015d1"],["/posts/2ce39bcc.html","e9345f3a285268c70758e1f31c4a3a71"],["/posts/2cf620f0.html","09c59635d27eb9a8799eec56ce5cd166"],["/posts/2e30fd6d.html","4336386f415815eb8896ab36eadf11bd"],["/posts/30a413ad.html","a1f2e2146ba0a49aba39e35a4dc9d37e"],["/posts/34292736.html","acc85cf007b9fee9089d3227ce2a79ce"],["/posts/3468cbe.html","ed4401d76f218488a81743fdd2e98e92"],["/posts/39176dc0.html","d34bfa9b3ed7c888886d8953a22d8072"],["/posts/3e118dbf.html","ff13dc6d5b80de765a4dea8231b30aad"],["/posts/3f7d823a.html","8b51e0b4e67571450b1d86a550e15d82"],["/posts/3f978819.html","4c0665cf32ba91b7b8e32ba774c9b2b3"],["/posts/41dac80e.html","542ad6da233f5d2349e0c60b7394dbf3"],["/posts/43945723.html","51c74c3886cf55246943c4a7e62a0835"],["/posts/44124a6b.html","8d0b44c0dfc6babc3cd7fa57d4763642"],["/posts/47abb61d.html","d475e4b163e54059d01e14a3e0525cb2"],["/posts/4996478a.html","7f02e7cdcfcb1b5b312894a3e4300413"],["/posts/4b689be3.html","bd350cab547bb7002e787c90c01361cf"],["/posts/4cf8423f.html","cb7fd8dfe4bd0e9b08ec0e98e5d007cd"],["/posts/4dcf85c.html","b46b107d3f28b28a565a4805c4e32aa4"],["/posts/500cd322.html","4cefb5b6995906231ddeb20f115c5d5a"],["/posts/51c9b1ff.html","88170a55e573cf1b70e0b695b9f1d94e"],["/posts/52b5b3c6.html","345d2b44aa177adafccc4b1e23efb5d3"],["/posts/54f496ad.html","cc750337a28b1dff5e784c04f63a27bf"],["/posts/558e1f30.html","61e41e852245f8a5deddb0304213e5a5"],["/posts/5d8bea92.html","62e71f18ee15a347e3e71fdfe125a0a7"],["/posts/5f6e0c59.html","ee7c56907c33c1ee503460b410334b3b"],["/posts/61a63a84.html","b88fd18aa7a0f26cc43fd72d8ed9067f"],["/posts/625ab7bf.html","b49b821ecb7bdbe61e5d372a814c85bc"],["/posts/6336a2f9.html","0d0b32cb0cc025732e436fba4b03c57c"],["/posts/6432d61a.html","e9079c3972fb8cc831f5ecb338c55ac5"],["/posts/6515f032.html","bc2517f6d08c105acba1012b8ae4ce00"],["/posts/6720ccdd.html","946b5340dfa24411444875b16981aa41"],["/posts/6a4b5ac8.html","6268c964c0388f2101ceaeabad9a7fdc"],["/posts/6aa4177c.html","e2518800d3e588f8e8e9bf5bf509dce9"],["/posts/6b15f81f.html","84ed206ebd3bff8ef9048387259a1c43"],["/posts/71131d34.html","a76d874dc36098c905174ffea68257cc"],["/posts/742fd48d.html","71bda6293360408f3a41ece0f78b8eaf"],["/posts/78a8a8d3.html","f2626eac2de34605c79f0f1c7b44d7d2"],["/posts/7a5ef3d0.html","f0fff753a71bf88229c95045b8f0a7a0"],["/posts/7b41e1ac.html","2fb1d058065238b0d856be553a8c160e"],["/posts/7b51011d.html","db7b6ddb13c7af9daf065eb68d207466"],["/posts/7e3aa3e2.html","ceddc16fc10eb4c02858a5cc9e8f1e87"],["/posts/80fe2691.html","a7ad1fdb3123266a60d06756d7586dca"],["/posts/81ac52e9.html","fdc1c7242ff02eaa25099f776732d000"],["/posts/82332d11.html","67a194176e7231a3e409439a95d5d2ec"],["/posts/8486f6f9.html","3b02141ccbf5718be1bbd4279538693c"],["/posts/849b40f8.html","098e0ab9b1e2cd889b213d78488d6b0f"],["/posts/85c51d68.html","9986cfcf21375960d2f465953adcb547"],["/posts/86a6c500.html","6996cfa0948846896c9bafe3382811e1"],["/posts/886f8d3.html","0147ceebdaf7f0077ad53975af451dce"],["/posts/8a7cba10.html","239fd5742b432608673c6a3d54d9d5ea"],["/posts/8ac11b41.html","21d44e3981f4625ec63b708052390626"],["/posts/8dd520d9.html","9486dcbc4e0a577aa92119d620924ba7"],["/posts/8f555654.html","1ab863045d48c6720f3eca2726795486"],["/posts/92a980c2.html","9c3e36b2c03def0f65219f7e52ecc2a6"],["/posts/92ce16.html","a02c88821edf8aad065c858c876c450d"],["/posts/93e9943b.html","9a4e4035539cec28c16b84483fc7a8c4"],["/posts/94d3c794.html","88f76cc26e98f47a70aecd89dd2b7373"],["/posts/96b281f2.html","2115b34093040488fb0d45ba59777bbd"],["/posts/97f50eea.html","2a649ab1de5888d3726b0b1490090894"],["/posts/97fca8be.html","f4d1217b44b7e139a7a385477c84da51"],["/posts/98662d05.html","9b50a5860cfa203a73f420746eb677be"],["/posts/9a2f6162.html","488d7ca8915c7b45aa7332bd2abccd7d"],["/posts/9b22a48d.html","cd941bf58bf1312f66633559fc811665"],["/posts/9cb455b1.html","6336f9ce747f58aa3306604ba1916afe"],["/posts/9ecdeecc.html","308c00dd1faf685283134b57c7252f4d"],["/posts/9efd7701.html","2d7e951cd965d8f1177647cd952132c1"],["/posts/9f61c1a0.html","56b559d2c99ebec66085dc2f74aaf2e1"],["/posts/a1de710.html","adb92504c5f55b4dbe45a5b5ce0faab9"],["/posts/a30eb0cd.html","c02df897e5ea25fc48d5e7824000a8fe"],["/posts/a7634b5d.html","e811645e9e1b56accb6e2cf48908c038"],["/posts/a8c593b5.html","48f03a83a02b174ad918a18b3defd1d7"],["/posts/ad0c1efa.html","a6c2429e35fc462cf2022ed439fafec5"],["/posts/ada3f440.html","9422fb840ef2b758d3c8758b86bfb8b3"],["/posts/af1807ef.html","cbd75a727f50d778f681daaa36fceb03"],["/posts/b397bf03.html","404387ae19681d058b9b09ef03522e11"],["/posts/b497b647.html","f16c0b84b359e396c577d66374252efe"],["/posts/b4d464b0.html","0bc4d7e8d9cba55e9865f06704262556"],["/posts/b5fb773f.html","41a33d79b09a709fd73379c088a935aa"],["/posts/b8d46b32.html","19a0d3762e41878ee66f7d05d85064b3"],["/posts/c1b2c6c9.html","a321259d257b1bd568fe8c6158d1a378"],["/posts/c2111cbf.html","9552d33d323eb8ee5cd9547d326406c0"],["/posts/c316c2e8.html","720cd7e821a7ebe0897ab145fcf8a9c8"],["/posts/c43e60b5.html","e7a75fc870daccc7dff06dd8d14ae3d5"],["/posts/c497a412.html","a51ee68d6e7dfa81def1296f2835d2a2"],["/posts/c5395ba3.html","15bed72a96744fdedb2c10c8d3084094"],["/posts/c5de299a.html","5ebdaa6cf1c492313b25f8b772ed2e1b"],["/posts/c70bba9c.html","bcd802077b46449b1319935591a5f17f"],["/posts/c797535e.html","9211c9cb4b09f05dde87c0f6debed530"],["/posts/c7a62c79.html","4f4b5c44ad60e493a9f549539a876c21"],["/posts/cae2c959.html","7d94d78b85fac37659ec7e6909d9d6b5"],["/posts/cbebef2b.html","1e80253003eec7c86a639dcf96cf75fa"],["/posts/cc4c0017.html","eac6cdb8d051773c050ad663fc96544b"],["/posts/ce25023e.html","5fe976abdb6e2e973f1bfb846baedc3f"],["/posts/d2fd4837.html","eecb384578234e0558896587fb72aa7f"],["/posts/d3233cbb.html","915e4c6306e0bdeaec4db9bb4f70d9a6"],["/posts/d3a745a8.html","190bb8d92712bdbb67dcb82c08db609b"],["/posts/d7e940d2.html","57d513f286656959b48b344e6b770c63"],["/posts/dc815d5.html","aed728940d7cb86e604fa355173d3896"],["/posts/de25b0be.html","879d58a2300acd6144ab6131772a8754"],["/posts/e2623b4e.html","c14c657ae83b925093c8b54b8744f789"],["/posts/e3ab6ad8.html","9bb58cb5af84486bc4af84a33dc9c440"],["/posts/e5018da6.html","720f249e547b92f213774a7a2c76fda2"],["/posts/e5963272.html","48d1275da3da6c605efca916419df0f5"],["/posts/e5ef4c3c.html","f6033cc54503d81fc3d5cbe14622cd80"],["/posts/e624b065.html","ae131b93e835a6ecbcbbbdd72e5dc411"],["/posts/e7c703bb.html","7cd1a09d7b93e31ed0c0f5e2068263ef"],["/posts/e8f14b6c.html","e4b1030be3e37c60def7a71b7c7f522e"],["/posts/e91abb63.html","c5a8af43558850611657bfc2da0bdeeb"],["/posts/ea9a8808.html","b9d5a34280fdfaf221d5a2efb245406d"],["/posts/eb784749.html","360bd26cda0ae418b4059c091e84df73"],["/posts/ebaf2232.html","440461ed7abb787f965b3b63fc658e1d"],["/posts/ed75f185.html","6c5fe982d82005d2fe5525f390c17353"],["/posts/ee1ed673.html","b70b6087a84fcbd59127ae8dac864e58"],["/posts/f0c3ed61.html","e606db44665d47df6e306c0b38b7c4bf"],["/posts/f151ff43.html","97b743d933818538d7c154b6ada3b8b0"],["/posts/f21e7f84.html","475287f4682312916cebd586082286bb"],["/posts/f230b0fd.html","84f5f8cfbf76c8394f892a06ab984240"],["/posts/f28a7877.html","ad1bc8163515fa0087b7104c6ded58c6"],["/posts/f663d5cc.html","da5eaddb43de8f6f312e296eebb97f90"],["/posts/f730ad18.html","a7dc2f5b628432608bd7944400287800"],["/posts/fb5d4608.html","39d5323329c100cc2f2fca343ced72c1"],["/posts/fc04d0d4.html","a7b6ae3e101408f85764bfbe07ac6019"],["/sumire/index.html","ce00e5a7e5d362ce12112d5c20bf7253"],["/sw-register.js","e8646a454b19768cd45d8cf4e1991021"],["/tags/AKo/index.html","c38419711255134e15d91d61853c7d5b"],["/tags/APPLE-project/index.html","c43e26ae294927de7623449b215ada23"],["/tags/Ankrache/index.html","72ebffab5cc6def6bf6a6ae79f5283f5"],["/tags/BELL-DA/index.html","bb9a1c8df04ccec7060328d31bd30ffb"],["/tags/BL-Game/index.html","398c3600a7cae4414bb58e335709eab6"],["/tags/Blue-Dahlia-Digital-Creators/index.html","aaefa35585b5645f7bcf887bda500a2d"],["/tags/Blue-Line-Games/index.html","9183dd93edf124199c817a57dbed2a19"],["/tags/CHUNSOFT/index.html","4b427e9ef8620a5cddf3a3ad753d8ce6"],["/tags/Check＆Stripe/index.html","daeabd15971f57bca5dccaa7bce67639"],["/tags/Cherry-Pie/index.html","71ebb9f325b08e269565b4bbeaa07ffc"],["/tags/Circle-Mebius/index.html","4deab59e599453520b223c71d514202b"],["/tags/CresCENT-BLANK/index.html","c8b4a616de1ffcaefee5b1cdd18916ef"],["/tags/Dopamine-Software/index.html","1bfa6cfdc4fa561f48349886c7c5eafa"],["/tags/Dos/index.html","fee7cdf4f6d9ecd80f457addadd3caa4"],["/tags/Earth-Well/index.html","92dec4b0e33c1203147db1ff20cbf85f"],["/tags/Forest/index.html","b08ed17b3ab80d45ca18d64a6c6df7bc"],["/tags/HaccaWorks/index.html","b76f88f50d881014b79fa2959b13a9a0"],["/tags/Kanon/index.html","02f384872e2d9d3a0332fe575310126a"],["/tags/MANATSU-8/index.html","a9ea4f33102992c565be36d85565af42"],["/tags/MARINE/index.html","9193eed5095bddc538b20cd8691e5082"],["/tags/MIO/index.html","ce20244ada20089d676252fc35d0b2cf"],["/tags/NAOX/index.html","08c9817a62a0ed273ff70deba16b16b1"],["/tags/Nmyu/index.html","81e9dfb244e3541e2d5dd30547169060"],["/tags/O-S-I/index.html","530a888e1eb80628e58e5c16987a221b"],["/tags/Omegaの視界/index.html","aa30eb8adfff0671751388efa0ece86d"],["/tags/PC88/index.html","bf5c449012a5809e7f670db6a1f067e5"],["/tags/PC98/index.html","e4f2b3b3db2dc04dbb364b705bc4cb45"],["/tags/Perpetual-Room/index.html","743227358a21d7a0169ed3dea4584335"],["/tags/Pleiades-Company/index.html","11dfce804d7d50b4243187e99a3d3e5c"],["/tags/Project-Twintail/index.html","cfb432d66b136f0772b33df39dc6a64e"],["/tags/RIFF-RAFF/index.html","d293ac25c6acd61ba8ce579701aa3b89"],["/tags/RPG2000/index.html","f12cd83ed9d84aa551cfc41e1cb6b0d8"],["/tags/Reverv/index.html","4aad8bb2de60ae746720493997b4e1e4"],["/tags/SENTIVE/index.html","e88a22466e95b216c898a243253b1b46"],["/tags/Saihate-SOFT/index.html","29ff991b1cd0ba67be5d56d885353882"],["/tags/Scrubbing/index.html","b8f89d2c1b6f9282074b20a4a47ee81e"],["/tags/Sky-On-R-imaginAtion/index.html","a4465877ae1a4b231cfdde362734aad5"],["/tags/StrayMoon/index.html","05baed00c18a013827dfaa84c2401677"],["/tags/Studio-Bu-Sa/index.html","c91ae00dcc6857a9f8f65641b1475649"],["/tags/TRANSPARENCY/index.html","140ac7040b2711d81155c1e095c2f0b8"],["/tags/ToHeart/index.html","bc3c032c7ba8a4e6481a71671fe9309c"],["/tags/Traumend/index.html","f25fec208d578c4849e5717a9a7b6336"],["/tags/Witch/index.html","9fd3524cfa994711afc625301b0d189c"],["/tags/adonis-project/index.html","a1c04421b2d5499afdc63eab66cd714d"],["/tags/capriccio-suite/index.html","1d43eb18376366cba6d16666d44ac086"],["/tags/flash/index.html","141640a81eb08ee318b7a40acff7384b"],["/tags/galgame/index.html","3fbdb7770869afc29cec1bc82f6fb1cc"],["/tags/galgame/page/2/index.html","fda610510a834f7e1138b418e28957f6"],["/tags/gal资源/index.html","6d747e09703ca919dc37a65ccc73e67a"],["/tags/gal资源/page/2/index.html","a4ad7f04b1086d12b25cd5892c81b511"],["/tags/gal资源/page/3/index.html","efaa7b8894f315d6dfd78a296f4b4f61"],["/tags/index.html","a5688729d518bf2a272c341d4f1127c7"],["/tags/purgatory/index.html","8fd59ef3eeb337ac887e3a4c0c945601"],["/tags/rkr/index.html","14b7aa5b95625e39b610ae1b09399a69"],["/tags/team-eye-mask/index.html","472c71249567a5538df490f783d84c2f"],["/tags/ありすくろいつ/index.html","02c95aa34134f98d101dda3c3f447d33"],["/tags/いつものところ/index.html","25d9fc767fb68f8d8255d4371e01a2a7"],["/tags/きつねみみ饅頭/index.html","d81ee51f0eb8190bf672deac2ec6e856"],["/tags/ねこねこソフト/index.html","b57e8b1b0cdde1e84a690120295aa806"],["/tags/ねこバナナ/index.html","20b463b09b26227646cd26b2be2189c6"],["/tags/はちみつくまさん/index.html","1ae5e9d5a9a3c6d48a02318801284f78"],["/tags/ろりちせ/index.html","0e97600ce47ddc8cbcf04086ccea8599"],["/tags/アイル【チーム・TATU】/index.html","d38036ce1f90f5f0a943db9ef77a8bb5"],["/tags/アクアポラリス/index.html","19ff86e9d47011ea15861ad087c67114"],["/tags/アークシステムワークス/index.html","c0b2f8887b4b860766dd8e5c9dcd3ab7"],["/tags/ブロッコリー/index.html","b83e8236b028f97fd5a907f3b567b5c0"],["/tags/乙女/index.html","f64824e397914acd375621ee65742b54"],["/tags/乙游/index.html","a989dd35780acabcb903033574e170f4"],["/tags/停产/index.html","fcfff663684e60c3b931e19468d147f2"],["/tags/公告/index.html","9ea9a518535c651e4d0fefb617e81160"],["/tags/同人/index.html","0b480521f50816df537271f9dc9b8b79"],["/tags/堀井雄二/index.html","70f08442be5e9e063ada52bf68cb218e"],["/tags/外海なおき/index.html","c9e53b7a129423578898e12f9fecd80f"],["/tags/女性向/index.html","8c6c479af4bab97f54f4ac4bd88f53f0"],["/tags/御茶ノ水電子製作所/index.html","5f81fd7b5afd410614d0786dfb439326"],["/tags/月の水/index.html","ca8bd7bd2f8cb0e364591dd9e8e056b1"],["/tags/桃野衿/index.html","1eb1421c9f4696aca7df41e177cc5b9b"],["/tags/機械式少女/index.html","fe82e5f6f16113f2e76e2ffe3463466e"],["/tags/水仙/index.html","4a569b74b3be56ade4e37f4f6f635ba0"],["/tags/汉化/index.html","8729ebe215e511adb1d420485ed16dc2"],["/tags/熊月温泉/index.html","78c5ab637b41f54e65fd461be075a16a"],["/tags/片冈智/index.html","de96c89c152300a392d4378f4771fb1a"],["/tags/片岡とも/index.html","02d8dd7ce9a791790608ea230b4420c6"],["/tags/牙の刻印制作委員会/index.html","bb3e8630229be52b5694bae2cd42fb49"],["/tags/牛カルビ定食-FLAT/index.html","d7a61a2e3137dec04318b68197d9eed8"],["/tags/牧尾屋/index.html","031d61a7c4745478fcfb3cc0ad120283"],["/tags/犬茶屋/index.html","1c6f91c7332e632ebf30d55ff66a04c6"],["/tags/猫猫社/index.html","d265a1f35a214b10d7aac19221e5e26a"],["/tags/王宮魔法劇団/index.html","3309a85b11d37c95113d74001e4e07a3"],["/tags/画集/index.html","aa942c1118fa4d93fdb3204d19352bf0"],["/tags/索引/index.html","966b6230b468c94ca8338db46858dca3"],["/tags/缺失/index.html","b32476cbcead58cfa8d2aec4b332cb0f"],["/tags/自购/index.html","1117b30947c0ec9af1e5f625f1431cb3"],["/tags/茶葉☆姫/index.html","e4ddb299f1b481cccb15937d6c34335f"],["/tags/郷愁花屋/index.html","71c94e8b9e101ac29b1aed22457635a6"],["/tags/閂夜明/index.html","b5edeafbb707366724a04a7e1cbf8c69"],["/tags/音乐美/index.html","46679b61d6ae3c2f8918dcf69b501e05"],["/tags/黒†救/index.html","86a358e2d5de79dabdffcffb51763332"]];
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
