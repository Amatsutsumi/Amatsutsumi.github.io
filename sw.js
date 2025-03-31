/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d219db0efbcbd7f7cc29e838a72123be"],["/archives/2024/04/index.html","3fe0021fcca6d8e4d9d481010104a84e"],["/archives/2024/index.html","880c9c2614b9b019b9772baae6fe1af8"],["/archives/2025/02/index.html","9ac602bb16966d2e9cac8f115edfab52"],["/archives/2025/02/page/2/index.html","c13f8399d769586fa6fc9b057a93732b"],["/archives/2025/02/page/3/index.html","f9e2c7e1c92eb3d8cdc266407541fe56"],["/archives/2025/02/page/4/index.html","84bf944a8507ee9e2abcbc3f958ac387"],["/archives/2025/02/page/5/index.html","f592eb2288fa35eef5b47e347b2acbf7"],["/archives/2025/03/index.html","41cc4c9312ddb6e2d74246d806a5c69f"],["/archives/2025/03/page/2/index.html","a0615fb6102fe658ae9ca76c6474bdb6"],["/archives/2025/03/page/3/index.html","aec4a19a83c7ecfa4365642a758a896c"],["/archives/2025/03/page/4/index.html","31f3fbc836273c90a39c4a45cfc5e9f3"],["/archives/2025/03/page/5/index.html","19d97c51229da4aa9a89d6610532d1ef"],["/archives/2025/03/page/6/index.html","5531e14340ea4094dcb001c4253aec11"],["/archives/2025/index.html","f24c833112726f7e80a4041dd12acd60"],["/archives/2025/page/10/index.html","6c8e55cb03f4456674c7797cce126300"],["/archives/2025/page/11/index.html","ad61de851debfa1b2361a5bc17ae4ad8"],["/archives/2025/page/2/index.html","902aa3c2b82ffcd3236750018a4a5c23"],["/archives/2025/page/3/index.html","fbd5d91009c77fa9cf709c7f177bdcd1"],["/archives/2025/page/4/index.html","1616e47efc728ea70bbdc213fdf02870"],["/archives/2025/page/5/index.html","c2abc2ba58a3a2c03c02febd1b2d7a50"],["/archives/2025/page/6/index.html","ea9eb283c7552696b9f01019a8382382"],["/archives/2025/page/7/index.html","508b2a6360681e558eb436c4c9ab473f"],["/archives/2025/page/8/index.html","581bd6089f415a1e5414b4ed46ed9f04"],["/archives/2025/page/9/index.html","517681744a385ac9f3e072dc8de0b7cd"],["/archives/2026/02/index.html","5a5cf4d63aa9d984f7a4854b33f7c6f5"],["/archives/2026/index.html","1cf5b95d9c0f0357230894033f03eea2"],["/archives/2925/01/index.html","c14bfdceeeffae9bc49de9fc95ca633c"],["/archives/2925/index.html","baaa553196f1098457901d7073ada186"],["/archives/index.html","c10c5672c8c00208344daaa3c6fd0dbc"],["/archives/page/10/index.html","96089c8e5dcc886801f0f1104276f02d"],["/archives/page/11/index.html","8815f2d97c7aca54d15983bd8349f3ab"],["/archives/page/2/index.html","a139e4cbf0ce300433d1b895bb73e779"],["/archives/page/3/index.html","1569c1fcd4f93d18be150d4e09b6ff1c"],["/archives/page/4/index.html","2f37463848ebeada170606f5b855009a"],["/archives/page/5/index.html","23af772ca1ca5d346a3669d75cf41acf"],["/archives/page/6/index.html","449777c5c7531370af854902fe9ffaee"],["/archives/page/7/index.html","f2ed0f480ad66d456dc089e0dbafdaaa"],["/archives/page/8/index.html","4492e6b473e49a33309bf366d3f59038"],["/archives/page/9/index.html","7a9d993efbb1ddf1e1915e9be5791ac3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","4ccac4586177a11f5039f32020701880"],["/categories/galgame/page/2/index.html","6527c14462c69fb118778a00530be0b7"],["/categories/公告/index.html","add32022ccf398ea856ab65a5bbe8ddb"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","a12edb5df5822983b79999f239950003"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","6b7feb22cfb2e904cdf7cc807c2f02e8"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","a3daefc33ca38fe15b1dffc3df378f3d"],["/page/10/index.html","2e09fe4373438ac793dfdc51295e0224"],["/page/11/index.html","25dc90a7e4a4ad4c5ef774d5660598f2"],["/page/2/index.html","5adaa79924ffa63a2bea74a37e00a0a4"],["/page/3/index.html","122f819a87e64f543673a7e5c3381538"],["/page/4/index.html","ea86ea840250896bda22efd0f5b56c9d"],["/page/5/index.html","4c6c3118203f2f12c6cd2c57ccea32ab"],["/page/6/index.html","b5353c02072a6553494c69d46f87e6a5"],["/page/7/index.html","0f14f880260d6883856e1255aa076678"],["/page/8/index.html","a2f08da5f9655b3c544da403e4e2ee22"],["/page/9/index.html","bdac04558d74b8429a278e8f53e6eb79"],["/posts/10c9dd98.html","c1ed74fb0692692f0ad5edcd3bea9e90"],["/posts/1295b569.html","fe1b8e2f33a14993e7befa8f646569fd"],["/posts/1370342.html","4a3eb7393be56ca0f75a2fddd841d2a6"],["/posts/15ef14c2.html","96a37b1962dafe2e37ec3b0f5feda0af"],["/posts/15f3959d.html","1c475c23858a1b64d0f65d6283543fbf"],["/posts/18ab785d.html","bb78a1fb58c99f98d3253610a63e6f8d"],["/posts/1d59b71f.html","b249908864010e0da513142419c1712f"],["/posts/20b3f3a4.html","734e9e3c06984b0684347270d56e5217"],["/posts/245f1c7d.html","fcabd9055f3bb36fa00a2a6dad51d07e"],["/posts/252658f.html","d5aa1708aa963958b7eee52870a05686"],["/posts/28397adc.html","bce69aa300b6128549de1f90cbc6555b"],["/posts/2b38bce0.html","a76cd3893eeacb22db84170ccf0ce035"],["/posts/2c0a6836.html","ec0ed549f8575d2d649a02a0f6bf4e1a"],["/posts/2cf620f0.html","0638aa856bc0e77b9c36c8dfe023c0fc"],["/posts/2e30fd6d.html","bb53a56f6bb1f71066e87ac66213e6a3"],["/posts/34292736.html","b761a08c663fee75a6d004d0033a51fa"],["/posts/3468cbe.html","db5cd29778b1ba4c0e5984dc5df66b04"],["/posts/39176dc0.html","aec1f41c08a98ec3ec9a792531cde29f"],["/posts/3e118dbf.html","65e1b7accffaa9ca90b1131345bc2504"],["/posts/3f7d823a.html","f399e46cdcbc324864ace54db018bb57"],["/posts/3f978819.html","d58401c4d2396619d5112aa22368cb67"],["/posts/43945723.html","3d6bb65948d3d1371d6960b0396c5a95"],["/posts/44124a6b.html","f8a5420bf75d2a947155f4afb4ded9dc"],["/posts/47abb61d.html","ab40529ff3137e184b0d24a6bfef7500"],["/posts/4b689be3.html","c8dc9e1dbeffe24667737bd204f722a9"],["/posts/4cf8423f.html","51115cb301168e7d8b80234b9154b710"],["/posts/4dcf85c.html","86b19e31e38916f7eecc5f52e3b91bf7"],["/posts/500cd322.html","eb8754111216d0afdf54e8eaedf054ec"],["/posts/51c9b1ff.html","b368169c878520d675951eddab4aa33d"],["/posts/52b5b3c6.html","a84f60adda24cb872c6b90a8055cc0ee"],["/posts/5f6e0c59.html","3a9738df9a1efdd6255e84b5124eaf7d"],["/posts/61a63a84.html","3d048d91346a51970e18dbdadba9a49a"],["/posts/625ab7bf.html","73d2cb0cdf0627a65018092ae77301bd"],["/posts/6336a2f9.html","bf8a3de9ba39557b72a3bfef9cac7d72"],["/posts/6432d61a.html","cd3caefdae6774390eeb7f0d98672df4"],["/posts/6515f032.html","798f28bdd935224752f58483679177cd"],["/posts/6720ccdd.html","5df377d2f3f457f86ae6dc8f00d5333f"],["/posts/6a4b5ac8.html","e0ab69ea7b4e4ba16c8a9d65021d759a"],["/posts/6aa4177c.html","79451c3a46a21375a3a7f019129e262e"],["/posts/6b15f81f.html","bb2d3281c2588a2c7477da60e41cc2bb"],["/posts/71131d34.html","5be9fd00fb835581a6aab78934a8d7ee"],["/posts/78a8a8d3.html","c3e8df316271e4ea7de634b1453971ed"],["/posts/7a5ef3d0.html","c64708146882dbcf146e9ed76a8957d4"],["/posts/7b41e1ac.html","d08133f6cbdcb13b3f25817fad571793"],["/posts/7b51011d.html","c2edf298519ba83f57e23a0277d174e1"],["/posts/7e3aa3e2.html","345a56e5f5b803c38c376e560a71c80d"],["/posts/80fe2691.html","fc4e7a24483c10a71eda67277239ec76"],["/posts/81ac52e9.html","c6b52549d4ecde01b8386bd6fe7aad34"],["/posts/8486f6f9.html","a53e49c13c48ce9830ae48aed557b340"],["/posts/849b40f8.html","c7ae747c6713d36ec12f12a0c4f61724"],["/posts/85c51d68.html","a574070d6cc29589a954c2e38f35e2fb"],["/posts/886f8d3.html","736b729c0a662d790eab995f0bddd034"],["/posts/8a7cba10.html","09a286654af8bb05f15447111981573e"],["/posts/8ac11b41.html","2b028c0f84fe28ca82e0ed086f33656a"],["/posts/8dd520d9.html","0d7d5f29e3c0c82370518490d29dbfbd"],["/posts/8f555654.html","ee8142628afc2ee79437ffb966842fe8"],["/posts/92a980c2.html","b4c176a6133ffddc7fd289972a9ee06c"],["/posts/92ce16.html","06eb75a9535516437e8450ac5c4245f4"],["/posts/93e9943b.html","067bc7e76dc99036f49de926c49dde5c"],["/posts/94d3c794.html","e3c7a091d1d6b8b5fc41be7d289e5ad4"],["/posts/97f50eea.html","d7957c340a36c0bdcd448c89b95f8fc4"],["/posts/97fca8be.html","346df32f69d215ae2d5f8b2b3d3105ce"],["/posts/98662d05.html","b443754bb17785e77fba5073ad3165a2"],["/posts/9a2f6162.html","d0c168e3354708d5e54a5c827651f642"],["/posts/9b22a48d.html","0829083795fcf8b6bc35954b685f8149"],["/posts/9cb455b1.html","85b1fd6332658d3add0bbcc1b003a674"],["/posts/9ecdeecc.html","150bec49a401efe7b5e46765e5d97bb7"],["/posts/9efd7701.html","6adf72f9581e76a28a6afaf3a62b77d7"],["/posts/9f61c1a0.html","f82733525efc618692ac89f9c8a942fb"],["/posts/a1de710.html","586539a8b6ace6444c9f9a7984a89cb9"],["/posts/a30eb0cd.html","b37908051d8f27ce077a0b41db027fef"],["/posts/af1807ef.html","38fb642bb830fd0c73d39d30bfb1f08c"],["/posts/b497b647.html","d8fdd284c27ed938b47ca21cc2ed789a"],["/posts/b4d464b0.html","835c3343aceb7a461110f6e5db263f8d"],["/posts/b5fb773f.html","05c728f9228b3b822e15fadfe88670b3"],["/posts/b8d46b32.html","3c8e371588d61e4ec827774cd5578d02"],["/posts/c1b2c6c9.html","ab7c3e48d6d6f4333b347f1b00a22b60"],["/posts/c2111cbf.html","06ee9e42a876f9301f5e2c2c85062303"],["/posts/c316c2e8.html","ba765adb86a5ac3c52d39f591735d8eb"],["/posts/c43e60b5.html","b63439fe7641da6a1202946a26bdf49f"],["/posts/c497a412.html","21c91509d6b4f619ee6502b5ef995114"],["/posts/c5de299a.html","dc66b6548f16580c9e3feb768ef5165d"],["/posts/c70bba9c.html","dcc859d44e46a2d625f96a2c6162862e"],["/posts/c797535e.html","aee5b761a3b6b8a4f2b94941e7747e9e"],["/posts/c7a62c79.html","f35eaadef122a5981c081072a4f04c22"],["/posts/cae2c959.html","a4bfc7cfae01aedc7c70b4cfc8ffa770"],["/posts/cbebef2b.html","7e05571c4e77fe98c4b4b27d6ccbc556"],["/posts/ce25023e.html","1dde4f671934425ae90b7e82442ef888"],["/posts/d2fd4837.html","02743ae3f58a24000a3082e93beae34f"],["/posts/d3233cbb.html","d27d44b384992a22418a50dec1b56bb8"],["/posts/d3a745a8.html","2563317166d5584471ff20233fd51c3d"],["/posts/dc815d5.html","a155a5c798837336d11ebd958c9701c4"],["/posts/e3ab6ad8.html","a194b196e56f099879c29992e759bc6f"],["/posts/e5018da6.html","c6f6804e5a6d481ea56e318a7738706a"],["/posts/e5963272.html","aa38bbc79af6941364c31d41aff10ec7"],["/posts/e624b065.html","ea891c0d136b0c67f3ef61234c827808"],["/posts/e7c703bb.html","4a1ff6d0a1adcee2a64f0326477c09e1"],["/posts/e8f14b6c.html","357ae18e061fc268ca3f09167897f1a0"],["/posts/e91abb63.html","62a52dbc5cde8c29eebebac3b2906fc0"],["/posts/ea9a8808.html","eedcdbd0cbf4868abfc8f9f89b2c6f04"],["/posts/ebaf2232.html","1cd94f555f3221cdbf604504621c8bda"],["/posts/ee1ed673.html","e77ed9b137f427889d1c8d3ff6a6ac69"],["/posts/f0c3ed61.html","54041ae8ba0fb62167041e9dbdcdc41b"],["/posts/f21e7f84.html","5e7181ea31e43a68eb603984725c9f29"],["/posts/f230b0fd.html","57ab7c2615a870c4f959f2f2f9b30795"],["/posts/fc04d0d4.html","50f306f6a8828a01374d232115af4361"],["/sumire/index.html","601eda15c374b49dc6290d0a04145f39"],["/sw-register.js","ea06f00abd5c2b6fa7a90f3ac6a8eb65"],["/tags/APPLE-project/index.html","9cfb25d40801ec3094df3547ec5fb5c6"],["/tags/BELL-DA/index.html","dbff3e79cb5ffa355618c9770063722d"],["/tags/BL-Game/index.html","ae63d84176638b1410d65a7cb79378bc"],["/tags/Blue-Dahlia-Digital-Creators/index.html","be15fb9cacf939c7d74be7a134270939"],["/tags/CHUNSOFT/index.html","5d3bace3a9b7f3233e1854177b9453de"],["/tags/Cherry-Pie/index.html","02adc27a3a8ee113e6b5bf5b9270a826"],["/tags/Circle-Mebius/index.html","0ccbac904776d11f5167e6cf277bcf78"],["/tags/CresCENT-BLANK/index.html","80d1ed0acca576ea24e6eb0b4c3c22c3"],["/tags/Dopamine-Software/index.html","52ac1694ca0bbe37f8bdd101e6faaefb"],["/tags/Dos/index.html","6c20b0025f32c004781c87f2ba1788b1"],["/tags/Earth-Well/index.html","ceda36afd2a37e6e73900c5da688bd88"],["/tags/Kanon/index.html","69065e8645e7e5d11699bbcfb1499ae2"],["/tags/MANATSU-8/index.html","2089f5e26e973a2f9f97052fc948d8ea"],["/tags/MIO/index.html","5423ff96523627b2a07cd700a83981a5"],["/tags/Nmyu/index.html","97d66aa5884c7917bbca8171178349d0"],["/tags/O-S-I/index.html","6ccae052c81395bdcdb32556aa6b3297"],["/tags/Omegaの視界/index.html","6abe8ffaa740c086ef7507f72e6145fa"],["/tags/PC88/index.html","6bdbe5c8b5b5767a5dd455278c82910c"],["/tags/PC98/index.html","1785477eed289b84d106475ad8b504e8"],["/tags/Perpetual-Room/index.html","18ea09af14851b254bb9189fe7049b87"],["/tags/Pleiades-Company/index.html","82e7d7392c6ae92cb20b2cd719dda37e"],["/tags/Project-Twintail/index.html","785398705321d7701c5724b36fa1776e"],["/tags/Reverv/index.html","2d1af858681c1cfec003b34a9e7b7bed"],["/tags/Saihate-SOFT/index.html","d27934891f6dca53d8d425ee2c98fb14"],["/tags/Sky-On-R-imaginAtion/index.html","4ccaef5b95f22c2625f99f32fd03b175"],["/tags/StrayMoon/index.html","55f3f88cc445f9e693643a41d736bc64"],["/tags/Studio-Bu-Sa/index.html","ebb6d78de4585e8bccd578af0114b560"],["/tags/ToHeart/index.html","1a03a91f97f6444834228c2c97336870"],["/tags/Traumend/index.html","58cedf7ffaee5aa2ce3221d75682625c"],["/tags/Witch/index.html","3addd7d7017e55ef1ceb881261c5586f"],["/tags/adonis-project/index.html","51b4b0aa1c68aaf58269e20c1206c25e"],["/tags/flash/index.html","4bea9aafb77ddaddd0e9405047e9915d"],["/tags/galgame/index.html","bdfa31d8c006a311df5db67e39da1dcb"],["/tags/galgame/page/2/index.html","5c8258c631150597826911ad7671caab"],["/tags/gal资源/index.html","9e1258aeaf6580b37747b39bc0c62352"],["/tags/gal资源/page/2/index.html","de9659531f336a400aef4453995cba20"],["/tags/gal资源/page/3/index.html","354a7096da17851c53d346954c94d0df"],["/tags/index.html","10a182133d681af28b1a78b8eed5bef6"],["/tags/rkr/index.html","db2bcc79d0664b624fd2db659da82f95"],["/tags/team-eye-mask/index.html","ad1dbb35f9f318b4971152ef890fd730"],["/tags/ありすくろいつ/index.html","70d32720f303f63699880bf79275cf6a"],["/tags/いつものところ/index.html","352a547f73a26dcf22c5c2fe50543b14"],["/tags/きつねみみ饅頭/index.html","d3a9ef85062f28fac7e1898130a12c8b"],["/tags/ねこねこソフト/index.html","17471758aec92af6bc09af25816802f4"],["/tags/ねこバナナ/index.html","cff9d369e046b2814d7a65e93667af21"],["/tags/はちみつくまさん/index.html","67cba4535227d2032f3eee5ded92383a"],["/tags/ろりちせ/index.html","61e9f4e55503f2b41bdd0369ee731756"],["/tags/アイル【チーム・TATU】/index.html","b8b604a88394fa5fde6abbdf9ae3b530"],["/tags/アークシステムワークス/index.html","777b19f2e66f7319b2d7e39ec1457868"],["/tags/ブロッコリー/index.html","13ef9cd4fd1460e74f283f21be32e497"],["/tags/乙女/index.html","5ec4cc35b142f25beaccd967996f7c26"],["/tags/停产/index.html","f2ee9b69e4a2591c8af1d89ad3e751f3"],["/tags/公告/index.html","cd3daeb4b9c20f830e5be9553c688524"],["/tags/同人/index.html","c8d2b752c47a9df74519750d476e5ee4"],["/tags/堀井雄二/index.html","2a0cd740aa8b154bbaeb98a5b1d7483f"],["/tags/外海なおき/index.html","9ee386b77f1bb3ec7f8859cb55296e14"],["/tags/機械式少女/index.html","0a71005078597f588d6776a8998383f0"],["/tags/水仙/index.html","6842b89b283d9bcf16b981fe9fa7a15d"],["/tags/汉化/index.html","b70409e9e0a78fb206f5466008c94525"],["/tags/片冈智/index.html","e31234fccedc7283c8fe70f4128e73a2"],["/tags/片岡とも/index.html","50ab747ff12d5ec7a5f27fb301df25bd"],["/tags/牙の刻印制作委員会/index.html","429ebc43b29712a9b851a2ac32486d9b"],["/tags/牛カルビ定食-FLAT/index.html","d319410d7168f91072f1bff2096c20c6"],["/tags/牧尾屋/index.html","5756d995f33223c74ed0be03e2ea53b1"],["/tags/猫猫社/index.html","ab9448ed4bb3985a6c4d1b6929596afb"],["/tags/王宮魔法劇団/index.html","1d6d9719c3b4ce97ad9ea01ea7ae7b0e"],["/tags/画集/index.html","1c95a87e06860589c4422a3c154a1d7a"],["/tags/索引/index.html","e795cf97868182b5912ad04b278c47c1"],["/tags/自购/index.html","629884dc6e707cbfbf014b6b6cbdb06a"],["/tags/郷愁花屋/index.html","d17f4fb6331b1699763d52a5b9f3a936"],["/tags/閂夜明/index.html","b7b281e90be601ce27d8d1292fdbbbb6"],["/tags/音乐美/index.html","e7de37a23eb85318c4c7740ad04ca402"],["/tags/黒†救/index.html","5951b316cc2f7849dfa598df101c41c0"]];
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
