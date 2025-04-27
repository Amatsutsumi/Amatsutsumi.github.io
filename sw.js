/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","0bca716c92ae480942e37f2be81b7eda"],["/archives/2024/04/index.html","881e37f7b3bf504b45c56013c508b8ed"],["/archives/2024/index.html","cf8884bafe66f811d346d772abaf4577"],["/archives/2025/02/index.html","fe23546dc2b01e26e19b57e40a8005a7"],["/archives/2025/02/page/2/index.html","7dd8d02e728d95c7d27533acd7ea9364"],["/archives/2025/02/page/3/index.html","5d87b3640d3589c63027c575dd590549"],["/archives/2025/02/page/4/index.html","f0a71144d4c6ef0510d1e419830d723f"],["/archives/2025/02/page/5/index.html","0ec0a7a366f0b822a53e41b9d00c60de"],["/archives/2025/03/index.html","a55585383924988687b5030d9f2843a8"],["/archives/2025/03/page/2/index.html","c324dd0bdbf535f579c8940c88819ef7"],["/archives/2025/03/page/3/index.html","01c0be74d2d613a557ec60cdb35b6611"],["/archives/2025/03/page/4/index.html","0839fa963d496fbd53e1a692d5af9f74"],["/archives/2025/03/page/5/index.html","3fe5bec8cff7a6418088aa7b86019a30"],["/archives/2025/03/page/6/index.html","3e8541e9a808436ba46360cdd2aea4f2"],["/archives/2025/04/index.html","4b23b4a5fe383af3432627e9d9f6589e"],["/archives/2025/04/page/2/index.html","e73d94ec2faca88dc5406701d62728af"],["/archives/2025/04/page/3/index.html","2dc2b51c9f4103e2c3a731af1f222065"],["/archives/2025/index.html","ae97efbb99d2578c6c2c116588976728"],["/archives/2025/page/10/index.html","4a26665b1c6fead681d3dd3bd947510f"],["/archives/2025/page/11/index.html","5045f1ce6f56933356fb6bbc6b23a2c9"],["/archives/2025/page/12/index.html","a7f48b022708d58b2c971c66848cd4a4"],["/archives/2025/page/13/index.html","4e6f1bba0787749b9b85f4fa5f224a04"],["/archives/2025/page/14/index.html","f9e582fc42d78d22ec7a3c96bb516d98"],["/archives/2025/page/2/index.html","b5e8c33f0b24bdede321bec66abec429"],["/archives/2025/page/3/index.html","f7fe2dec7094be9a7014ca5f595c0495"],["/archives/2025/page/4/index.html","7c07cb329532cc02880a12344aa67a68"],["/archives/2025/page/5/index.html","d2175d5fe0d92a05c7bc90048e467e90"],["/archives/2025/page/6/index.html","bcf90bbad9af6fef0e4b4d413b1df2ac"],["/archives/2025/page/7/index.html","9cf7ced09a29c7f58bdd75c30251b9d3"],["/archives/2025/page/8/index.html","e3ffc350b7f32ba9e378bff48af14849"],["/archives/2025/page/9/index.html","dbcaeba2f3aa132bb8ab2a5b78342e41"],["/archives/2026/02/index.html","766eee1d446a74eace0bd5762ca59810"],["/archives/2026/index.html","093bd9e24ce042bb629f1364a757df62"],["/archives/2825/04/index.html","b2c591db664a1b62fb7ad45f2880e47a"],["/archives/2825/index.html","3081db9613c21a76868e58e62087cee0"],["/archives/2925/01/index.html","ab94efc31e840157f9b304f8e5e04b88"],["/archives/2925/index.html","372abaabd1e18a02b6e520c5e2f99d79"],["/archives/index.html","b6dc298572c40d73e96ea1ae5e6bb5f8"],["/archives/page/10/index.html","f98b53da19d25edab7cb76a374255cbc"],["/archives/page/11/index.html","f68fe4000d2b77414f3a6b418ce8011c"],["/archives/page/12/index.html","74d15671f184f4d495ed5e869498e2ae"],["/archives/page/13/index.html","2bd7ed0b78bc6cede3a2b4ec02ae6b23"],["/archives/page/14/index.html","eaf7cf16d69415f4ce79d810650b4b09"],["/archives/page/2/index.html","f41d7861f6da88af45d6949ab039ebf8"],["/archives/page/3/index.html","8e683d3fd521e871903c334f37e1c666"],["/archives/page/4/index.html","dc634aae383a898b9d248624f4bbfd8b"],["/archives/page/5/index.html","68417977e3f03512d5b01f988e802083"],["/archives/page/6/index.html","2aac587f2a9aaa4d16277cb9d5f2523c"],["/archives/page/7/index.html","b9a69f0904dfcb8bbd6e797485743b0d"],["/archives/page/8/index.html","bac5feebb4dc55f0dfa16398b6e6a49c"],["/archives/page/9/index.html","447174dd67d6baa34f4b4bb55cc1d3f4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","c4fe7339c9d0f89848b8aa81175a20a9"],["/categories/galgame/page/2/index.html","f8c5b29e13e2156fc3cee5b6feffe06a"],["/categories/公告/index.html","0ad87a28fc4ef827b96b2350b83e5916"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","1cb62e219925529e000d86ea4ae3890c"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","76cf7798c605b8ea7e23d0bff83256cf"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","512603ff35659b9c769559ae5a4b5321"],["/page/10/index.html","f9d6ea2d56f07fd6fa7cc6852f0e1465"],["/page/11/index.html","f6476e6406f34517c483cdea39908c11"],["/page/12/index.html","2176677d03d54ae2451da4b90052507b"],["/page/13/index.html","0e231352b435265c18c0b7b329196810"],["/page/14/index.html","b48e4f9ca22cf177745bf7d28e782ee8"],["/page/2/index.html","b65b65dbebafc97693f4f1b447219719"],["/page/3/index.html","e09387ff6238bbbd563eb760cb625815"],["/page/4/index.html","30f8646e9274189ead17a909449a5021"],["/page/5/index.html","cc10f952df3fabf129b80872df6b6cac"],["/page/6/index.html","790eec1bf0cbe1e9c6bf1a4505c4f981"],["/page/7/index.html","20785ffcb9a4595ea3e5854d53b9ac78"],["/page/8/index.html","bcf426bf33a646e100b1532f8c9254c4"],["/page/9/index.html","cbf34963625da2f31d21d55cdff0edcc"],["/posts/10c9dd98.html","3417f8d02485ac8597a7c6ba9d5b761a"],["/posts/126ebb99.html","9c6ba9f15fcbe3f900e5259e866c31cb"],["/posts/1295b569.html","7a42205201c01a6d6f7fb77ae3b57343"],["/posts/1370342.html","ce23732219b551b95e82c01e5bf7eb87"],["/posts/15ef14c2.html","4b0e4d7217380f21647d001bb51d59c0"],["/posts/15f3959d.html","d7af37a78d6fd8f0a48434df6ce660c1"],["/posts/18ab785d.html","d6fdecbe1b92c4e9a630ba110396ed7e"],["/posts/1d59b71f.html","1dd954a819b08e09daf54a59f6ac0a3c"],["/posts/20b3f3a4.html","6665208bbf1c8f97849b4d3f22cc6d01"],["/posts/245f1c7d.html","c015c986b72abd5d7576d04bd9d75014"],["/posts/252658f.html","f4521deadbe878f666bcf40fea352a77"],["/posts/28397adc.html","9f9931d4978c530098e81b29da2bf7eb"],["/posts/2ad07f54.html","81d2a872b8002a3dfade596471592bb2"],["/posts/2b38bce0.html","885735701dffe34d8a58be7b820c3772"],["/posts/2c0a6836.html","5b0884c35c28731bf355d47dc1688214"],["/posts/2ce39bcc.html","6506c892b9772fa8f996df167a345b49"],["/posts/2cf620f0.html","390f7530fe99419e144e5e9ab92680c4"],["/posts/2e30fd6d.html","966d5ff0b6d3c6fdeed1fb17e1ad41da"],["/posts/30a413ad.html","0bb9f93c69089068793b7d0e1fe9aefa"],["/posts/34292736.html","64fc259901f19e761ada633750b7f802"],["/posts/3468cbe.html","bae32caf0ecf31b64206d223a316fd79"],["/posts/39176dc0.html","9d4fa0ba43f153cda2e65030cd48f611"],["/posts/3e118dbf.html","af5f6b4dbc9b619eb22d9b3b87d04287"],["/posts/3f7d823a.html","ee0cfba6bc943ad012f0ce618cd5c942"],["/posts/3f978819.html","1213fe8b13b10adcefca03c57e4a8d61"],["/posts/41dac80e.html","1bff69f40eba4cc2fc49d8c0a92a8ec7"],["/posts/43945723.html","c633f4d46744858e49286c23e89773e4"],["/posts/44124a6b.html","155eb3af29c455198dce1c4865b48e85"],["/posts/47abb61d.html","035e54824a6ff4a50664f76138983131"],["/posts/4996478a.html","cd4c4489a204208ad2647542472f5561"],["/posts/4b689be3.html","917225f03fbaca6cd3ec22bda973d585"],["/posts/4cf8423f.html","9c89cc11224d9e530a09e6ab46ceee74"],["/posts/4dcf85c.html","bdf9b4d295f2dfe3cdbe1de62af3c1de"],["/posts/500cd322.html","1aa05ba2540c5c9e46f1fec0cd420cf2"],["/posts/51c9b1ff.html","eee87e7021ecb04f170e6d155b1b46b3"],["/posts/52b5b3c6.html","768e3e351b903908c44faf1b4028415a"],["/posts/54f496ad.html","b99f99de97c2ce85e676ec4243d2ccac"],["/posts/558e1f30.html","54d7a47693292730b49eae54eae25418"],["/posts/5d8bea92.html","9e70d5f152e97d110390120e927b903f"],["/posts/5f6e0c59.html","8f75204d7d1d0d31051816fdd98c1de6"],["/posts/61a63a84.html","b82bfdf377b7f96f8ae2221b4333f57e"],["/posts/625ab7bf.html","fd0c67939297ff2198ba965b396b5c43"],["/posts/6336a2f9.html","9fa84bc4cc7cda89f579260e15683672"],["/posts/6432d61a.html","5876f2ba7a8254bf612f2a3f7b2f1da3"],["/posts/6515f032.html","768e23317746bfa69ce7fcd7b3ac0fac"],["/posts/6720ccdd.html","d2fc57ffc84621e30cf13d08fc7ca89a"],["/posts/6a4b5ac8.html","86fd00bb885f710926a84f1f6d2d6503"],["/posts/6aa4177c.html","9c25371554c177d731e509525add09c6"],["/posts/6b15f81f.html","49338f88b771be078c71243490170865"],["/posts/71131d34.html","92e44e97a859d5760787dd17a8049578"],["/posts/742fd48d.html","66b4a108d911380db245f913bdde785e"],["/posts/78a8a8d3.html","8823757557841a36f3466a5aec7df523"],["/posts/7a5ef3d0.html","2b619fa12f4b94c83548f1a870f1eca2"],["/posts/7b41e1ac.html","2f02491ac242e4e49e77def0efa0823f"],["/posts/7b51011d.html","9dddbfa7be6a505eaea2df3a3353b404"],["/posts/7e3aa3e2.html","46e83185e3235ddd1225385d462d698c"],["/posts/80fe2691.html","7c849bdf6084285e7777d6400ce6f02d"],["/posts/81ac52e9.html","7ed039040b37d575bc2907289cf6afca"],["/posts/82332d11.html","08992a064ad7d9f97770f04fec8831df"],["/posts/8486f6f9.html","915b3ca1576231243b0c0161f491b0e4"],["/posts/849b40f8.html","abb952c2632c3b8297be01d57bfe040e"],["/posts/85c51d68.html","5a90af1f3b04b2623362e3714e7ddd0d"],["/posts/86a6c500.html","8005ab4fefad6e99b9151a23e6d45278"],["/posts/886f8d3.html","e71661af27376beebf65065ba13c7a4f"],["/posts/8a7cba10.html","75f6f2d279a768478340d8c52b9c205b"],["/posts/8ac11b41.html","200a1efd72ca265d964bcf5e8143119a"],["/posts/8dd520d9.html","c6846573188e3cad1fb69a3aba35b13f"],["/posts/8f555654.html","5436d9569c71f3453fe974688b7f2f3d"],["/posts/92a980c2.html","e714d4fffb93b2aeb0b885c409dd318d"],["/posts/92ce16.html","b01be0a6d5c27db61d55c2238a7c9e18"],["/posts/93e9943b.html","9c5629210807df566a37d3b2bb8957c4"],["/posts/94d3c794.html","eb41779047ffcd2719c79cb2c0b93a8b"],["/posts/96b281f2.html","e60efb55919a4e5301cf1acabf431ed7"],["/posts/97f50eea.html","df1cd4112386d68b75de8feb0413123c"],["/posts/97fca8be.html","1410410f58216e1a9144206566f28f10"],["/posts/98662d05.html","11e3786aeecf51dc54c0f5f4cd41ba68"],["/posts/9a2f6162.html","1f3fcd81bb125edde901949058245c7a"],["/posts/9b22a48d.html","3af3e7dd34df59ed5dff3c37d5f3b2ba"],["/posts/9cb455b1.html","6b3a6d0b1d1ae39d23fe5f0ba9fc2193"],["/posts/9ecdeecc.html","2a38f06ccea0e6d4cad87e75028aad02"],["/posts/9efd7701.html","e0f6111315d04f7bfa2025bdbd240a86"],["/posts/9f61c1a0.html","c1549c4043b8dffc20f7ae0973982b76"],["/posts/a1de710.html","abc2688ea548e23c767601bf4cbfcd4d"],["/posts/a30eb0cd.html","cb0919bfb58635761afef83cea4d0ca8"],["/posts/a7634b5d.html","240c30fb8273e61b7dc43792ac29ac3e"],["/posts/a8c593b5.html","2c740e27737c415104b391d1c55eb6ac"],["/posts/ad0c1efa.html","6778a85c37bc22b888dfb3429ec8affc"],["/posts/ada3f440.html","be4f72f3b88bdfe8199f50af5fc6ec9c"],["/posts/af1807ef.html","ca0474bca3dc786a7d2e2c3317fe1f10"],["/posts/b397bf03.html","d9a24c0ca56b0c2814ead6b4bfb05331"],["/posts/b497b647.html","505fcfaafa292d80d0e58542f93fdd97"],["/posts/b4d464b0.html","0cb8742e1727ebb690756ad908becba4"],["/posts/b5fb773f.html","7c9866b785bce57dca4b25a90425c1da"],["/posts/b8d46b32.html","6a42872c1de85734be4a06b0f031dbab"],["/posts/c1b2c6c9.html","1ba8e4552c5914664e131263b2a0ee39"],["/posts/c2111cbf.html","786d90fb83210f6feaefce551838c608"],["/posts/c316c2e8.html","c656e03b7e7fa594f8a75f078731be9a"],["/posts/c43e60b5.html","65e94ddc2ea09e5249261d42fbae5f57"],["/posts/c497a412.html","f824593b566f3e35e1387f087417e10e"],["/posts/c5395ba3.html","83da569c023dcf1053c03fdc6372bab3"],["/posts/c5de299a.html","f6482bd307b14fe2949ec89cfef86b11"],["/posts/c70bba9c.html","aa410db713c0b4be101e24b299409b55"],["/posts/c797535e.html","c06b0df632388f13ef9db9e7301080f4"],["/posts/c7a62c79.html","54be481809b90dc765975eca48426176"],["/posts/cae2c959.html","3358995040094051729c50632d929355"],["/posts/cbebef2b.html","8acc0ec6e1a705a942f025327a0b24e5"],["/posts/cc4c0017.html","011c4a2f592d8176355d8a63a753f94b"],["/posts/ce25023e.html","e9d6978bacb30a4dd7e5a58a1ec0113c"],["/posts/d2fd4837.html","3a015f5ee10347419e4936277448b834"],["/posts/d3233cbb.html","25247a121d5aabde4e03adf2bf657ebc"],["/posts/d3a745a8.html","ff2146616569dcd814b83280898ba9f0"],["/posts/d7e940d2.html","e3df6d60a25ce44796eb187f6da10048"],["/posts/dc815d5.html","dc08d2d6ae540cdda086181515e31b04"],["/posts/de25b0be.html","21d8051f500bf4d3af3e5e5bcb881bb2"],["/posts/e2623b4e.html","9b94a5543a506c5273c45e4f55bf79db"],["/posts/e3ab6ad8.html","34fcde4dbb1da85fa4552aa4ce330694"],["/posts/e5018da6.html","b80cada79098a5cad1d9887b7bee0260"],["/posts/e5963272.html","78bc92732956175418548e2af70d59fb"],["/posts/e5ef4c3c.html","2747a5e56df753b80db0bf9477e9a262"],["/posts/e624b065.html","e3309b1df24647416e39b2d15a572af9"],["/posts/e7c703bb.html","5beba6cd22a425cc2f9deae9f4d74a82"],["/posts/e8f14b6c.html","94b5d1bc72d0dd96e91a3b26ff318d2b"],["/posts/e91abb63.html","767a5de330d34210cf28d611d64371ba"],["/posts/ea9a8808.html","217656d628f52e6c1309a4cb1c102685"],["/posts/eb784749.html","b1eae7d1b534e08728e98c5dfc409309"],["/posts/ebaf2232.html","2d1f671619725bfd85341bc572bc53c5"],["/posts/ed75f185.html","fe2a8b84701711137d6794207e28b90c"],["/posts/ee1ed673.html","5b2ab63b22a1e039fd0ae4428ab73656"],["/posts/f0c3ed61.html","dd07b0604589406240c4fbf611dfbc58"],["/posts/f151ff43.html","a24c3af0db3851bb4dd08baa9fa28199"],["/posts/f21e7f84.html","fd6861bcfbac269b07757cd0c894d701"],["/posts/f230b0fd.html","a044a94adcecd24f434072e0b0a7a403"],["/posts/f663d5cc.html","df8a03ba1bad25a4223723e1df0e4a50"],["/posts/f730ad18.html","35a64c137b94e765a05773470c496684"],["/posts/fc04d0d4.html","e9d1df12bb006556cbef67ce83062b36"],["/sumire/index.html","6a6d3008ce60ed9b1fff1eadee38fa87"],["/sw-register.js","eddea4aaff805a942dcd31ef48bd18db"],["/tags/APPLE-project/index.html","7207ae24c14aecfbea232665243aec53"],["/tags/Ankrache/index.html","c076ac661c9a63aa8206d4a6f28d34c5"],["/tags/BELL-DA/index.html","c2b56836fd0caa6cba66d3560fb1c7b9"],["/tags/BL-Game/index.html","12eac0dff958b1eeef8b01cad1ecd730"],["/tags/Blue-Dahlia-Digital-Creators/index.html","4a5823f54e906ff5a53418e5e64ff32c"],["/tags/Blue-Line-Games/index.html","b0a6f7edb65ef801c67d8978adebecb7"],["/tags/CHUNSOFT/index.html","9b0a807dd49ce96940e69c596e08d318"],["/tags/Check＆Stripe/index.html","6e4adad43e448898557b1ba40b4cd132"],["/tags/Cherry-Pie/index.html","d164522937ce81e5e952d45e932c8092"],["/tags/Circle-Mebius/index.html","d76b3e330911cea136530544d5195161"],["/tags/CresCENT-BLANK/index.html","1c85dbcd64a38b56390178caf0eb940e"],["/tags/Dopamine-Software/index.html","3f7e272c59d1f217d45b79a26d85e00f"],["/tags/Dos/index.html","4db2c59569a08d11fd9f05bd9ca1adaf"],["/tags/Earth-Well/index.html","3353a9f806ae3273a16b5ca0acae955f"],["/tags/Forest/index.html","9f03209f41591c0534f86540bc4d8438"],["/tags/HaccaWorks/index.html","17bfb230c6bda0e50c43c45fee55d21a"],["/tags/Kanon/index.html","9a2e81c41a456504d90b828a44f7cef0"],["/tags/MANATSU-8/index.html","ade9f6c5ff6b58492ef486b073342f26"],["/tags/MARINE/index.html","6cbf4aef203be22a6e7c759d60930903"],["/tags/MIO/index.html","36fffd9f473e5aa624933d77306e33b1"],["/tags/NAOX/index.html","0d9cdded8a971c8a2e107eb5bab1582b"],["/tags/Nmyu/index.html","af597f86bb51e82e34f12dbb0ca9f157"],["/tags/O-S-I/index.html","27c6097b8582c342e941ec98fa0896d4"],["/tags/Omegaの視界/index.html","d0cbf7fb76bc1ed832052501bc9d845f"],["/tags/PC88/index.html","13ef6d0de62790725acea44a7c0e7f03"],["/tags/PC98/index.html","f98b49cb7791803b19de2f427bb3100a"],["/tags/Perpetual-Room/index.html","df71817309375eb43fb27d065533b25b"],["/tags/Pleiades-Company/index.html","b64049a7ec0eaf0c5737f9560641f549"],["/tags/Project-Twintail/index.html","d89aa04fd5941096934898dab0329c2b"],["/tags/RIFF-RAFF/index.html","4284df7c493129f3348ca2bad78270b0"],["/tags/RPG2000/index.html","fa6ed310ccc177c6a1d7a10679abfc19"],["/tags/Reverv/index.html","6d3d825d456d0d2699bd1787176fd3ad"],["/tags/SENTIVE/index.html","2c98977e2752cda1673fc35e0cee8272"],["/tags/Saihate-SOFT/index.html","a9c5ae4f8289938956f5a978760205c1"],["/tags/Scrubbing/index.html","0d621a7747bf4ab9ace18db927bb43ee"],["/tags/Sky-On-R-imaginAtion/index.html","cba7b0a1e2a52122a6660525171eeee7"],["/tags/StrayMoon/index.html","739ef92283a277095bdadf56d49deecc"],["/tags/Studio-Bu-Sa/index.html","d258d66c885a51a6111ffc4dfc0a91a9"],["/tags/TRANSPARENCY/index.html","60531481df0f954fe8814ece6db5856f"],["/tags/ToHeart/index.html","313096c40744ee3e951e45fa260912a4"],["/tags/Traumend/index.html","504b0acaf5e241cd6640a4f0d5715a60"],["/tags/Witch/index.html","adb338534f39309641387ed86e46b1a2"],["/tags/adonis-project/index.html","d784d4f450fe7f307f0e31dd3e89ab2d"],["/tags/capriccio-suite/index.html","ac87cdbcc03eb303dc5a43938f000f6b"],["/tags/flash/index.html","35fb59039aa308d1d5f379c555db5a33"],["/tags/galgame/index.html","5ccbb22293fb274dd0b391af9380bc29"],["/tags/galgame/page/2/index.html","412d950652f404d0e8a9220b6484f7eb"],["/tags/gal资源/index.html","1361ba1dcb426573c3a7aba0623d9467"],["/tags/gal资源/page/2/index.html","230d1852ed3ccfa24800c26f26fe3f5e"],["/tags/gal资源/page/3/index.html","1b6250a517df905783caa8e26b366c3a"],["/tags/index.html","9a8ac87dfdbf1a57d3388849f5886b57"],["/tags/rkr/index.html","c855b7d9bed73a1e35e7a2faf41aa89e"],["/tags/team-eye-mask/index.html","9f5a29e022543aa48ff518e09028d810"],["/tags/ありすくろいつ/index.html","2a60461df8a7276a37c39bf987970735"],["/tags/いつものところ/index.html","516a37c41b736cea87af424c12d3394c"],["/tags/きつねみみ饅頭/index.html","176d728db3249254d86d8e26f7548ecb"],["/tags/ねこねこソフト/index.html","0414de91ef87c5308f5f9d223e479c59"],["/tags/ねこバナナ/index.html","0d85528c564689d12102ceafe1dbc8f7"],["/tags/はちみつくまさん/index.html","7786bce508d8b204ff8097ea4cacaee8"],["/tags/ろりちせ/index.html","075101a5ec9e8efe6fe1e1b05e3c5f25"],["/tags/アイル【チーム・TATU】/index.html","9a9b40326eb85fc4af4bc5572f29b723"],["/tags/アクアポラリス/index.html","4a23fb9ed44a7a3fbdba8e4f40ca5717"],["/tags/アークシステムワークス/index.html","d5fb963ede6c1e2f99770e5e34e3d94f"],["/tags/ブロッコリー/index.html","8b1b6e869ce6c4379efb13cd229973e5"],["/tags/乙女/index.html","db6c26fa953fbf5281ad7d3c96daa6eb"],["/tags/乙游/index.html","2f9df409e8abf77062fbb7c21a4e1f6e"],["/tags/停产/index.html","9818a80a780a23d044db633e68911886"],["/tags/公告/index.html","b8eb85c76508e58e71fd6dea36219c83"],["/tags/同人/index.html","6e99d50acb1682dbec6a3f5a2d6f1ca3"],["/tags/堀井雄二/index.html","305007fa25dec0607dbda031273d5461"],["/tags/外海なおき/index.html","b1303bd6157cbb3b7934662435b796bb"],["/tags/女性向/index.html","e1fbd656b9f0bd8348d0efa6ed7396ca"],["/tags/御茶ノ水電子製作所/index.html","b7aa7bbe03271d768ca17d383caeffa4"],["/tags/月の水/index.html","dd13ff641d40c9e1e195f003ea2d6fb8"],["/tags/桃野衿/index.html","501aaaa087c1d98b44d597dc9aa187b9"],["/tags/機械式少女/index.html","72c9ff6fab2d2f2d0150cecac8746876"],["/tags/水仙/index.html","a1b36b788bb9e530eb58de9c7bea260c"],["/tags/汉化/index.html","06ccab0a821b8ec0c915aba1763c2ffb"],["/tags/熊月温泉/index.html","0ae6a11e709071d6b1ba59bf53ac7bb7"],["/tags/片冈智/index.html","4839bede17e79fb4df2f3b7c4b95220b"],["/tags/片岡とも/index.html","2e166a00842ce1495ccfa9a6b75faa5e"],["/tags/牙の刻印制作委員会/index.html","087b5995e284cbdf512df8db451269c0"],["/tags/牛カルビ定食-FLAT/index.html","8917cfbb7ac8cc109834fb74fbfd550b"],["/tags/牧尾屋/index.html","2f0350e6dfc8e59873f399d17a58613b"],["/tags/犬茶屋/index.html","c7d9a9fb820d7e77668ac0d0938c5b9a"],["/tags/猫猫社/index.html","19c5aff49beeebeaf8bcdbee7352fff6"],["/tags/王宮魔法劇団/index.html","ab054f9f32eb964e4a9e992d0a4c9225"],["/tags/画集/index.html","63cba231e13f79f12894d2e4607938fb"],["/tags/索引/index.html","6a6f81544eb7bd9b2a3cccb5e86dca4e"],["/tags/缺失/index.html","9b1a32e4c320514f8f570dc129517127"],["/tags/自购/index.html","33c2b9eb97500fc3e6f87f4aafc136e5"],["/tags/茶葉☆姫/index.html","70c716636c7a37e230fb46cde22126bd"],["/tags/郷愁花屋/index.html","ca424308b08887579cc5dc6712132bb9"],["/tags/閂夜明/index.html","79933acdb46136eba7050786798da6b4"],["/tags/音乐美/index.html","5638c0b62e6cdeecc85846202bb11411"],["/tags/黒†救/index.html","9afa38bc526342486b8228862573b8c4"]];
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
