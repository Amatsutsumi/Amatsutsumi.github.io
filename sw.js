/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","38f6cfdb116234cf221c35cbbe726b6e"],["/archives/2024/04/index.html","0743ec0e526992a45c5a2bf4759ef0ec"],["/archives/2024/index.html","846b55211b6001275a9797d29c35e6f1"],["/archives/2025/02/index.html","36d0b10ed5a3f8bbce8f370024bbe951"],["/archives/2025/02/page/2/index.html","b56caa3d230d97fa41bb227a51f8c0bd"],["/archives/2025/02/page/3/index.html","0511908673ade427af8b9f02c86409e7"],["/archives/2025/02/page/4/index.html","0219a0caef9d697e32c61718858df957"],["/archives/2025/02/page/5/index.html","1befd8bd2437f01c4be328bcb9a0ac9b"],["/archives/2025/03/index.html","babf0d4c57c6f39e5ae683e57dd3cf37"],["/archives/2025/03/page/2/index.html","7533fdf2f39bb0d32b47d30e7524330f"],["/archives/2025/03/page/3/index.html","ac1bfa7dd924cb7ca02b353d243de754"],["/archives/2025/03/page/4/index.html","9017b669f0eb46d131cbf9d973ddc385"],["/archives/2025/03/page/5/index.html","5423e134b4ffc0618ea0f810f096a670"],["/archives/2025/03/page/6/index.html","cf1c62a925dd8afdc0ecf8d1a0d31f28"],["/archives/2025/04/index.html","759102de1f889075e509c5aa4faff4c9"],["/archives/2025/04/page/2/index.html","f35e62ee0cc5ef42f5e90441a9e1e98b"],["/archives/2025/04/page/3/index.html","bf862ac44969a83e11b098e156e99f95"],["/archives/2025/05/index.html","720b67c73be127593f493accaa39ded2"],["/archives/2025/index.html","844f711402dfc21dfa3a67ea8721c973"],["/archives/2025/page/10/index.html","b5adbb63384da9bc6619f808496b520c"],["/archives/2025/page/11/index.html","0cc44456562f8a3aa2d9287fc20222a4"],["/archives/2025/page/12/index.html","246e9e31a5d2286151fb023fb729d290"],["/archives/2025/page/13/index.html","0bd61aa30f5034bef66c1667494620f3"],["/archives/2025/page/14/index.html","55e3fd97a7a1a17d383b9a206df6aaa2"],["/archives/2025/page/2/index.html","66437c80edf8cea7ab96a7a6f6304f04"],["/archives/2025/page/3/index.html","4dc067f90653968cba2711177894864f"],["/archives/2025/page/4/index.html","5a44c77b852797d206b6b2720da94c2f"],["/archives/2025/page/5/index.html","8e7ee130d563d80e0a43fa3ecea16a29"],["/archives/2025/page/6/index.html","0ce7b90ec61206255ab371c96a3e19b3"],["/archives/2025/page/7/index.html","05ee9837127b8e17ee71a8193777ecaa"],["/archives/2025/page/8/index.html","ec7b3bb2d206422c36fe861070e76558"],["/archives/2025/page/9/index.html","6cf12170d28464dd45524ca6c6e77777"],["/archives/2026/02/index.html","b825b7157a9bbecd64fb62b4bf865354"],["/archives/2026/index.html","9bc66a5fc8070363ef52c9d3b71aca60"],["/archives/2825/04/index.html","889ac16d374207ffe644711cc25e3249"],["/archives/2825/index.html","1d440e1c10818c522cd36098e6afb7e2"],["/archives/2925/01/index.html","837fe305533e75488610d566698bbf82"],["/archives/2925/index.html","02682cfb398a7cd87c1aa4cebee5a582"],["/archives/index.html","e4ac00ca9c1c9c445cb757c19618a4c9"],["/archives/page/10/index.html","8a202ac21c42fa93108aac156911b74d"],["/archives/page/11/index.html","59253f42c1665d77162b4f05c9324486"],["/archives/page/12/index.html","b924e8858e5aa97bdf769158dbd1e7dd"],["/archives/page/13/index.html","dcbc0784260ce0929d5fe2d8302e3335"],["/archives/page/14/index.html","f5e0ae4db45c5182b0a99432f7e1bbbb"],["/archives/page/2/index.html","e22efe45d2ec1410e53c1d382e88f3fc"],["/archives/page/3/index.html","99ee83b712a39a5dda33ebbf2b2f6a5a"],["/archives/page/4/index.html","638493c96fb980506297b41fc32b72f5"],["/archives/page/5/index.html","b94fd70764deb726f8ee679f31067ac1"],["/archives/page/6/index.html","4ce18156313e3e6d379af09463f22018"],["/archives/page/7/index.html","60be610d51ef598ba2ed6dc201cffadd"],["/archives/page/8/index.html","79ad901beae5ce126b0ff77836072e1f"],["/archives/page/9/index.html","74db09100de3a729a1b7d186fc9b3a91"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","2a77228e1233280144c790b68dadd948"],["/categories/galgame/page/2/index.html","f47ed5728768bc15e92fda736cdbe743"],["/categories/公告/index.html","2b06c8233b8f51643b01acc28519721b"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","54111bfda1383999e5ec9e4f3500dea1"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","e5d18b4a2b453ebc19e867fedd4df5fb"],["/page/10/index.html","fa58decb499996763a6944f8c01a5839"],["/page/11/index.html","3a4ea0484d731ddf43aed27abf0ad852"],["/page/12/index.html","a523d41ca80285a5a157f44cba8011af"],["/page/13/index.html","7a2af3df26c07debe0b8a44e5c0ee954"],["/page/14/index.html","e5c45a380dedb4331da8ac010b5ecd59"],["/page/2/index.html","6a8fedce40efcff7ad0c327a4b9e07d3"],["/page/3/index.html","32700840a5c1fcca2981abc09a2a3f82"],["/page/4/index.html","ca1f41aa8387c130d7706bdec946fd4d"],["/page/5/index.html","586b7eaa175fd427108ca29a46ff6fdc"],["/page/6/index.html","a2295a7097d6cd0b0b899c45b99ecf37"],["/page/7/index.html","908c7b968807bf2137e241ae773fb4f4"],["/page/8/index.html","febe942aedf967f77528186b93cf03ca"],["/page/9/index.html","7d5c3155f84454ff45e03358b03826c4"],["/posts/10c9dd98.html","b3cf8a8788811c36bacc5774f5736792"],["/posts/126ebb99.html","6495bd95d6875336af47a67a9023d9fa"],["/posts/1295b569.html","53c6d7a1d05b4f50ceb0b2b3fc9a82cb"],["/posts/1370342.html","9843373d34bd72cf04f94493273d2aca"],["/posts/15ef14c2.html","926076a39fe2a2747473b53d84c7b70a"],["/posts/15f3959d.html","132fe8d530120d12ef9b5cdb2f971499"],["/posts/18ab785d.html","ba4162485bf389d43f5b992fc9f8dc9c"],["/posts/1d59b71f.html","8fd6c3c532096479fcf8619f6bdd5dcc"],["/posts/20b3f3a4.html","0f6a1e8f96efbc98da394e244ccc4b63"],["/posts/245f1c7d.html","8d34252b5ff001c19cb98fa4596ad0c2"],["/posts/252658f.html","3189a7b285230f6570daba5770c7f101"],["/posts/28397adc.html","2de3f9e6c970bcc99b3ee20bc125d15b"],["/posts/2ad07f54.html","b7f7bb5d6f16ef4155084c2f5427de07"],["/posts/2b38bce0.html","ed55fba078ecb84427d93a517fde6f8f"],["/posts/2c0a6836.html","e5b38d9af942d906fcd5993da23015d1"],["/posts/2ce39bcc.html","e9345f3a285268c70758e1f31c4a3a71"],["/posts/2cf620f0.html","09c59635d27eb9a8799eec56ce5cd166"],["/posts/2e30fd6d.html","4336386f415815eb8896ab36eadf11bd"],["/posts/30a413ad.html","f4dfacdd7a95b5c61f8561ec6e9351f1"],["/posts/34292736.html","acc85cf007b9fee9089d3227ce2a79ce"],["/posts/3468cbe.html","ed4401d76f218488a81743fdd2e98e92"],["/posts/39176dc0.html","d34bfa9b3ed7c888886d8953a22d8072"],["/posts/3e118dbf.html","ff13dc6d5b80de765a4dea8231b30aad"],["/posts/3f7d823a.html","f384921081dc6b150e04973165bff98e"],["/posts/3f978819.html","3c73ef4c98ec638682eb0a1f70f65dfc"],["/posts/41dac80e.html","542ad6da233f5d2349e0c60b7394dbf3"],["/posts/43945723.html","51c74c3886cf55246943c4a7e62a0835"],["/posts/44124a6b.html","76f32972d47074e4d0491b286432785c"],["/posts/47abb61d.html","d475e4b163e54059d01e14a3e0525cb2"],["/posts/4996478a.html","7f02e7cdcfcb1b5b312894a3e4300413"],["/posts/4b689be3.html","bd350cab547bb7002e787c90c01361cf"],["/posts/4cf8423f.html","cb7fd8dfe4bd0e9b08ec0e98e5d007cd"],["/posts/4dcf85c.html","b46b107d3f28b28a565a4805c4e32aa4"],["/posts/500cd322.html","4cefb5b6995906231ddeb20f115c5d5a"],["/posts/51c9b1ff.html","a26abef1c4ca9cc582a86e755fc377e8"],["/posts/52b5b3c6.html","345d2b44aa177adafccc4b1e23efb5d3"],["/posts/54f496ad.html","0ef55164ba90da19b0849579639ce904"],["/posts/558e1f30.html","621043b76e0c5864a106124b9c57b330"],["/posts/5d8bea92.html","62e71f18ee15a347e3e71fdfe125a0a7"],["/posts/5f6e0c59.html","ee7c56907c33c1ee503460b410334b3b"],["/posts/61a63a84.html","b88fd18aa7a0f26cc43fd72d8ed9067f"],["/posts/625ab7bf.html","b49b821ecb7bdbe61e5d372a814c85bc"],["/posts/6336a2f9.html","c398e023fe0d7343c742bb4fd6b80674"],["/posts/6432d61a.html","e9079c3972fb8cc831f5ecb338c55ac5"],["/posts/6515f032.html","bc2517f6d08c105acba1012b8ae4ce00"],["/posts/6720ccdd.html","946b5340dfa24411444875b16981aa41"],["/posts/6a4b5ac8.html","6268c964c0388f2101ceaeabad9a7fdc"],["/posts/6aa4177c.html","e2518800d3e588f8e8e9bf5bf509dce9"],["/posts/6b15f81f.html","84ed206ebd3bff8ef9048387259a1c43"],["/posts/71131d34.html","99ff0c7092bf45d633e7e1f9019ccc02"],["/posts/742fd48d.html","d2ecfb70c51b8e7fe26e8d6140b6f502"],["/posts/78a8a8d3.html","f2626eac2de34605c79f0f1c7b44d7d2"],["/posts/7a5ef3d0.html","f0fff753a71bf88229c95045b8f0a7a0"],["/posts/7b41e1ac.html","0ec52349b479885a94bf60306bec1dd3"],["/posts/7b51011d.html","db7b6ddb13c7af9daf065eb68d207466"],["/posts/7e3aa3e2.html","ceddc16fc10eb4c02858a5cc9e8f1e87"],["/posts/80fe2691.html","a7ad1fdb3123266a60d06756d7586dca"],["/posts/81ac52e9.html","fdc1c7242ff02eaa25099f776732d000"],["/posts/82332d11.html","67a194176e7231a3e409439a95d5d2ec"],["/posts/8486f6f9.html","3b02141ccbf5718be1bbd4279538693c"],["/posts/849b40f8.html","098e0ab9b1e2cd889b213d78488d6b0f"],["/posts/85c51d68.html","d24b6768b85249c4a490e2eadc7f4506"],["/posts/86a6c500.html","6996cfa0948846896c9bafe3382811e1"],["/posts/886f8d3.html","0147ceebdaf7f0077ad53975af451dce"],["/posts/8a7cba10.html","239fd5742b432608673c6a3d54d9d5ea"],["/posts/8ac11b41.html","21d44e3981f4625ec63b708052390626"],["/posts/8dd520d9.html","9486dcbc4e0a577aa92119d620924ba7"],["/posts/8f555654.html","1ab863045d48c6720f3eca2726795486"],["/posts/92a980c2.html","9c3e36b2c03def0f65219f7e52ecc2a6"],["/posts/92ce16.html","a02c88821edf8aad065c858c876c450d"],["/posts/93e9943b.html","aca5cc79750b89de840a449828ab232b"],["/posts/94d3c794.html","5e1cfee38efbc36db2d78a80ea9264aa"],["/posts/96b281f2.html","2115b34093040488fb0d45ba59777bbd"],["/posts/97f50eea.html","6c8a2e81d0fed4afbc4d0d78a5673dd3"],["/posts/97fca8be.html","f4d1217b44b7e139a7a385477c84da51"],["/posts/98662d05.html","9b50a5860cfa203a73f420746eb677be"],["/posts/9a2f6162.html","488d7ca8915c7b45aa7332bd2abccd7d"],["/posts/9b22a48d.html","b220b61e309f36170a4ce5a9224e2af2"],["/posts/9cb455b1.html","6336f9ce747f58aa3306604ba1916afe"],["/posts/9ecdeecc.html","308c00dd1faf685283134b57c7252f4d"],["/posts/9efd7701.html","2d7e951cd965d8f1177647cd952132c1"],["/posts/9f61c1a0.html","56b559d2c99ebec66085dc2f74aaf2e1"],["/posts/a1de710.html","adb92504c5f55b4dbe45a5b5ce0faab9"],["/posts/a30eb0cd.html","c02df897e5ea25fc48d5e7824000a8fe"],["/posts/a7634b5d.html","e811645e9e1b56accb6e2cf48908c038"],["/posts/a8c593b5.html","48f03a83a02b174ad918a18b3defd1d7"],["/posts/ad0c1efa.html","a6c2429e35fc462cf2022ed439fafec5"],["/posts/ada3f440.html","e55f7e8fbd5a095f5b419bb3668431ae"],["/posts/af1807ef.html","cbd75a727f50d778f681daaa36fceb03"],["/posts/b397bf03.html","404387ae19681d058b9b09ef03522e11"],["/posts/b497b647.html","f16c0b84b359e396c577d66374252efe"],["/posts/b4d464b0.html","0bc4d7e8d9cba55e9865f06704262556"],["/posts/b5fb773f.html","41a33d79b09a709fd73379c088a935aa"],["/posts/b8d46b32.html","19a0d3762e41878ee66f7d05d85064b3"],["/posts/c1b2c6c9.html","a321259d257b1bd568fe8c6158d1a378"],["/posts/c2111cbf.html","9552d33d323eb8ee5cd9547d326406c0"],["/posts/c316c2e8.html","720cd7e821a7ebe0897ab145fcf8a9c8"],["/posts/c43e60b5.html","e7a75fc870daccc7dff06dd8d14ae3d5"],["/posts/c497a412.html","a51ee68d6e7dfa81def1296f2835d2a2"],["/posts/c5395ba3.html","15bed72a96744fdedb2c10c8d3084094"],["/posts/c5de299a.html","c777302adb16662566af1f33327489da"],["/posts/c70bba9c.html","11df3e3ff392ab1025a99c43a38acfe9"],["/posts/c797535e.html","9211c9cb4b09f05dde87c0f6debed530"],["/posts/c7a62c79.html","4f4b5c44ad60e493a9f549539a876c21"],["/posts/cae2c959.html","639c0e073ced46b0d706d1e793459e33"],["/posts/cbebef2b.html","1e80253003eec7c86a639dcf96cf75fa"],["/posts/cc4c0017.html","eac6cdb8d051773c050ad663fc96544b"],["/posts/ce25023e.html","5fe976abdb6e2e973f1bfb846baedc3f"],["/posts/d2fd4837.html","eecb384578234e0558896587fb72aa7f"],["/posts/d3233cbb.html","915e4c6306e0bdeaec4db9bb4f70d9a6"],["/posts/d3a745a8.html","190bb8d92712bdbb67dcb82c08db609b"],["/posts/d7e940d2.html","57d513f286656959b48b344e6b770c63"],["/posts/dc815d5.html","979e5f9ae54cc507176fe3a535cc27f8"],["/posts/de25b0be.html","ff8281ca33bd30f82125a020a73f568b"],["/posts/e2623b4e.html","c14c657ae83b925093c8b54b8744f789"],["/posts/e3ab6ad8.html","77f01e9b5730b268f521325daf5c1fb1"],["/posts/e5018da6.html","720f249e547b92f213774a7a2c76fda2"],["/posts/e5963272.html","48d1275da3da6c605efca916419df0f5"],["/posts/e5ef4c3c.html","f6033cc54503d81fc3d5cbe14622cd80"],["/posts/e624b065.html","ae131b93e835a6ecbcbbbdd72e5dc411"],["/posts/e7c703bb.html","7cd1a09d7b93e31ed0c0f5e2068263ef"],["/posts/e8f14b6c.html","e4b1030be3e37c60def7a71b7c7f522e"],["/posts/e91abb63.html","c5a8af43558850611657bfc2da0bdeeb"],["/posts/ea9a8808.html","b9d5a34280fdfaf221d5a2efb245406d"],["/posts/eb784749.html","360bd26cda0ae418b4059c091e84df73"],["/posts/ebaf2232.html","440461ed7abb787f965b3b63fc658e1d"],["/posts/ed75f185.html","3042f521ced86cb5aad3ba720048a166"],["/posts/ee1ed673.html","8cb3b8a5e703fdb85d08087ad4887ecf"],["/posts/f0c3ed61.html","e606db44665d47df6e306c0b38b7c4bf"],["/posts/f151ff43.html","97b743d933818538d7c154b6ada3b8b0"],["/posts/f21e7f84.html","475287f4682312916cebd586082286bb"],["/posts/f230b0fd.html","84f5f8cfbf76c8394f892a06ab984240"],["/posts/f28a7877.html","ad1bc8163515fa0087b7104c6ded58c6"],["/posts/f663d5cc.html","da5eaddb43de8f6f312e296eebb97f90"],["/posts/f730ad18.html","a7dc2f5b628432608bd7944400287800"],["/posts/fb5d4608.html","39d5323329c100cc2f2fca343ced72c1"],["/posts/fc04d0d4.html","a7b6ae3e101408f85764bfbe07ac6019"],["/sumire/index.html","480819ff928ce9bc9741fff9b00a67d0"],["/sw-register.js","80475367deae410f3aa8d9de0d92392e"],["/tags/AKo/index.html","e6101186cdfeffaeeb77f33f77b313bb"],["/tags/APPLE-project/index.html","7d4afba53bccda66787a836b9bd7b5df"],["/tags/Ankrache/index.html","ac0ea81bc1306cc7987ca875f17bd920"],["/tags/BELL-DA/index.html","15a94facce9809af7a46d13cef760618"],["/tags/BL-Game/index.html","e5fdaee8f6fa25956c514da167e76c26"],["/tags/Blue-Dahlia-Digital-Creators/index.html","1ae3c2ab9a912c39cc2f4f0ea66b658a"],["/tags/Blue-Line-Games/index.html","ab4b6382d2bc89201a83d91028862f19"],["/tags/CHUNSOFT/index.html","70987ae7924a97a50dcf0c4bf7b92929"],["/tags/Check＆Stripe/index.html","5ed7b73568cf5d68a58c2e9736b9290d"],["/tags/Cherry-Pie/index.html","9b7fbb6464eee9cfc3276f908de45a78"],["/tags/Circle-Mebius/index.html","378db11ca1581423c0d1c6b09eb399a2"],["/tags/CresCENT-BLANK/index.html","3381aa8fa5abb765e3d6588778bebf1c"],["/tags/Dopamine-Software/index.html","475f5734b5ede04992d9f984fc98aab5"],["/tags/Dos/index.html","53d0db86c12465220097ce3d1033eaef"],["/tags/Earth-Well/index.html","27b8b0734ad46fd88446a2efb35ddea8"],["/tags/Forest/index.html","6f69c486a0db22fd399ebac79324f436"],["/tags/HaccaWorks/index.html","f52c92d95325376e02916aec0f7f1641"],["/tags/Kanon/index.html","46d2c702a48a1d01f712c5885fef2a8a"],["/tags/MANATSU-8/index.html","b703b95f7290a1187afb4d6ffcf7d296"],["/tags/MARINE/index.html","c9ddcae3bb8145b444f28f1c3ec2b153"],["/tags/MIO/index.html","a32829975981ae5f9fd1733b183a589e"],["/tags/NAOX/index.html","d1d0774140b5a5084180c7d6b44994a4"],["/tags/Nmyu/index.html","6a25b12525230bf861a2d0f53badf3bc"],["/tags/O-S-I/index.html","bd7ce21be07d687be9ac6a48f2d92f24"],["/tags/Omegaの視界/index.html","2962ef13a9e950677f2b0c3b87f9c3aa"],["/tags/PC88/index.html","204cf0c4ab06ef2c3fcf6112e766054b"],["/tags/PC98/index.html","640f83eff85d9a81442705017a6ca8cd"],["/tags/Perpetual-Room/index.html","84be77c2467fdcd949470aa8bdeb6c89"],["/tags/Pleiades-Company/index.html","f00780a238aa14f105dd430ac0bb277c"],["/tags/Project-Twintail/index.html","ede6432cd0fcf5956c4d6ef940e59de7"],["/tags/RIFF-RAFF/index.html","ac275159f8f6309bb4c4ced3858db797"],["/tags/RPG2000/index.html","ddd01135dda7f23bb8f6f517e26800c5"],["/tags/Reverv/index.html","69f62c0223b9b0efacdae950ad8814de"],["/tags/SENTIVE/index.html","eeab2c0af1b7ba0dfe4cd871f19ac42d"],["/tags/Saihate-SOFT/index.html","de48db4c36f93777e641cacb2718c6a7"],["/tags/Scrubbing/index.html","9f0d2106aa02eb2000606dd2dd04f266"],["/tags/Sky-On-R-imaginAtion/index.html","66fff6b9c73c9ac8748672cdab415e49"],["/tags/StrayMoon/index.html","ec3ef10c52beaf4a12f939f6a9cbe935"],["/tags/Studio-Bu-Sa/index.html","24670ad4b002ce377bc75e6a0ebca2fa"],["/tags/TRANSPARENCY/index.html","5b4b0eebed058def3c126095f02c986f"],["/tags/ToHeart/index.html","377f626b2b656c1e8fae846c10d120f4"],["/tags/Traumend/index.html","886743b94b11e6a306a3d1855b94f095"],["/tags/Witch/index.html","0b479265eba6ac5497cea98892c4af7a"],["/tags/adonis-project/index.html","2f55c4b6c9caa6edfbde06017ce061c9"],["/tags/capriccio-suite/index.html","2c8774f69570bc873f8ac38a89f9ee50"],["/tags/flash/index.html","13b51f6680383571cae9fc357f23e6b1"],["/tags/galgame/index.html","dcfc3922cb602a765283b23094228e2d"],["/tags/galgame/page/2/index.html","a675ef29144c5158a88fbced7e4ea852"],["/tags/gal资源/index.html","4cd31cfc219ad4d959b9edc7ce8cca4d"],["/tags/gal资源/page/2/index.html","329640a752d35bdee1b57e655bedacb8"],["/tags/gal资源/page/3/index.html","9ffafcc87575422a6a990994cba5dff4"],["/tags/index.html","c5217908ca7d6eaa9af46e1294c6f417"],["/tags/purgatory/index.html","b77205e7a69f09f2001681b2f03b4f9e"],["/tags/rkr/index.html","346ef0685b345cf0ff20044a4c99e434"],["/tags/team-eye-mask/index.html","476e1730aaf7754e6d73e619ec306def"],["/tags/ありすくろいつ/index.html","415f2be28f8f5e060eec7cd1c9156829"],["/tags/いつものところ/index.html","8ab19485bd4fb9de65f82f4b0df67314"],["/tags/きつねみみ饅頭/index.html","f4d24a0382895fc62bd9d4e7c83efcb5"],["/tags/ねこねこソフト/index.html","1d6c500477ba5d2f3c88b22c3e9ade31"],["/tags/ねこバナナ/index.html","9d041540561c57dabe9e2483267288f6"],["/tags/はちみつくまさん/index.html","77fc038a20feddfa1bdc6fc130caad98"],["/tags/ろりちせ/index.html","01ae14db8c783818f49d33c55abc1dbb"],["/tags/アイル【チーム・TATU】/index.html","28835416fed7ffa8d9cb497d4be74665"],["/tags/アクアポラリス/index.html","b3897eb27632ef4611e2abde0e2e9719"],["/tags/アークシステムワークス/index.html","426a3f795043d7b2ca9cfbd9b49a0cb0"],["/tags/ブロッコリー/index.html","872a36de2ffbb615b375094e6d184e8b"],["/tags/乙女/index.html","afe357fc09571537cbe7ea4f29f5cc1c"],["/tags/乙游/index.html","68ca4d40bafa21c2b5715a7ce2675eba"],["/tags/停产/index.html","3e79fb60fc9572ab19a2f25102b22790"],["/tags/公告/index.html","8a8b9ff0c626415be687197ce055c432"],["/tags/同人/index.html","f32a6f40406698652d2d1ff6a632ae98"],["/tags/堀井雄二/index.html","c245958d660b03477253b0fb07fa23e2"],["/tags/外海なおき/index.html","f8423efc1828438ca166d92bfac4a5ea"],["/tags/女性向/index.html","15d978cd06bc0c96271a0ef44db13fc5"],["/tags/御茶ノ水電子製作所/index.html","73a1bcd5fc86bfc93d3a84eacfab7ca8"],["/tags/月の水/index.html","83f552dc01f1d3e5ac967e8ab583e7a5"],["/tags/桃野衿/index.html","cd51529ea778511b7644daf1d0d25c49"],["/tags/機械式少女/index.html","d5e9657f1faa2c0f09c95f966cd940ac"],["/tags/水仙/index.html","9c14e372f1c0dd3f165073c824f66d54"],["/tags/汉化/index.html","16ed7246607f00dfe919b59bb6cae2f4"],["/tags/熊月温泉/index.html","e921ff4fdcf41ecd7d0404bf35211db1"],["/tags/片冈智/index.html","b5f52bde72b1bcad3a967e09d487db35"],["/tags/片岡とも/index.html","4a4b96d89fb66c6fa89e1315ad27f975"],["/tags/牙の刻印制作委員会/index.html","1629b6ebd57a64874bf0e4b1010427d7"],["/tags/牛カルビ定食-FLAT/index.html","1257a35fa617cdf6e6be36b128c7a9da"],["/tags/牧尾屋/index.html","3d69d20532e78e1bb6b0351e82067979"],["/tags/犬茶屋/index.html","504bff18acfe235ceb8359c821b3b6f7"],["/tags/猫猫社/index.html","47863af268cd20e056b4dd5132d2679e"],["/tags/王宮魔法劇団/index.html","d3827dcc832ab8663fe09c208257023a"],["/tags/画集/index.html","bdb19bfc0a5c76fce9eaa7e5f09d7042"],["/tags/索引/index.html","0c89fb1292fe9def8d9e08f464aa958d"],["/tags/缺失/index.html","029c68ecdb69ab5626003983f89b5077"],["/tags/自购/index.html","09071c32f87ed3a0a1509e7a8576d7ec"],["/tags/茶葉☆姫/index.html","62693cd55139c511ab651ac58c11f507"],["/tags/郷愁花屋/index.html","41a0d73589122ac83e6f1c90ddc32899"],["/tags/閂夜明/index.html","26edc0b9bcccc2ade66fad006237cdb8"],["/tags/音乐美/index.html","4fd1ef15a9b4a2859837f7f790629ff1"],["/tags/黒†救/index.html","aa5282b94eaf18a61ff4d61eb1c5bd14"]];
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
