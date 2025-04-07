/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","240fac8907009b2ee4466a679409ec05"],["/archives/2024/04/index.html","37b98984da35373d6fe90871d1f1eb83"],["/archives/2024/index.html","add8b1e4aaeedd96a0c3edd42d1912f0"],["/archives/2025/02/index.html","40ff59e084beefadaeb19f66a2e76cc9"],["/archives/2025/02/page/2/index.html","9a2148c846fbdcfd8a66ea5001650469"],["/archives/2025/02/page/3/index.html","5d0e6910b565fb235cbd1b1f7cac8c10"],["/archives/2025/02/page/4/index.html","1195d748fc6137f7e9fae9a0170515ab"],["/archives/2025/02/page/5/index.html","0512881b21f19883ac7810014349de5b"],["/archives/2025/03/index.html","6578762fc587cf7707a8c3eaae676992"],["/archives/2025/03/page/2/index.html","afce3c4bad636a5af05eff0228d8c11d"],["/archives/2025/03/page/3/index.html","e831971a6195878fb189aa2914d2fdde"],["/archives/2025/03/page/4/index.html","b807a0349b75282ee23b87e112512285"],["/archives/2025/03/page/5/index.html","3c16bd25f4e0d5360e7a5c9203c6b1a2"],["/archives/2025/03/page/6/index.html","1d4bafdcf116de1439ad75e53ee7ed1f"],["/archives/2025/index.html","1592b8903415cd29c91c15400532346b"],["/archives/2025/page/10/index.html","f6409d9c40500806aab77787b312e272"],["/archives/2025/page/11/index.html","2e939435f565dd78bccc551b89dadc39"],["/archives/2025/page/2/index.html","f290885a01bc51be509ebd562085677a"],["/archives/2025/page/3/index.html","043445a1022c3476b9c14d3ee10e2b50"],["/archives/2025/page/4/index.html","edde5e617e0a7eb444258ded2b2ab196"],["/archives/2025/page/5/index.html","ed784454991315e7adf6a2ceb6cda87b"],["/archives/2025/page/6/index.html","0c848a1271c277bce4fc5fd96f144b2f"],["/archives/2025/page/7/index.html","349054dbbcb779d062e6dcbf9e831feb"],["/archives/2025/page/8/index.html","9da6b97fd5f90698d911d0a8e00dc742"],["/archives/2025/page/9/index.html","0ab82d0654905c274c12b5e0d13e8533"],["/archives/2026/02/index.html","b3560158fe2a0203007746684c94daae"],["/archives/2026/index.html","18919b2e9d9be873446cb38435332824"],["/archives/2925/01/index.html","a880a9a50205a377f6545c520e92fe7a"],["/archives/2925/index.html","1f959aebe0b5188a749d75220d33f1c2"],["/archives/index.html","cc4cca8cdd131e8e034ce055a1f63f38"],["/archives/page/10/index.html","74988c6801f778d4baa77431c1bd8d92"],["/archives/page/11/index.html","5bbc4e4ba84c983dad48ea9e152ade3b"],["/archives/page/2/index.html","f345ff27e3879c77f7f82d34aa56b054"],["/archives/page/3/index.html","d55806b33cd014f0cf28541f3b23b324"],["/archives/page/4/index.html","60644f19a3ab37ad4e6ce42b00311820"],["/archives/page/5/index.html","df7ab921632a6f9cf6c6b20f37106254"],["/archives/page/6/index.html","b66a1c6a82e13bfe69dedfebdc98521f"],["/archives/page/7/index.html","0f1b72a43fe7cbd20240059fcf80808a"],["/archives/page/8/index.html","4801beecb1784b5472713cf9a83d39ea"],["/archives/page/9/index.html","fec0a0d3bd6d41365d31848a866290b9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","0bb499c8aa2fc22b34417e275421967e"],["/categories/galgame/page/2/index.html","81d6aef6015071becf8a81d8f7934865"],["/categories/公告/index.html","9c5d6f1e9a0a2199f5b1eeb9721199ff"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","361e0c0a61c00ffbfdf03ef08020ab4f"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","6e74ab7df3b945fa5ad629b8e9395197"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ec60038512df716be2cec143636da8b7"],["/page/10/index.html","76fc22faded25153e4bb8c4a9c0d341f"],["/page/11/index.html","af3c2ca48f7af603ffbf4f19139f185b"],["/page/2/index.html","1250d96945250b08e3ef6f076964f8f4"],["/page/3/index.html","9e6887accb99f98fefebdde1b783b92e"],["/page/4/index.html","13bb9ba23195d5ad2788797535e25b61"],["/page/5/index.html","6ee92154b02acd8be2a6511c7d350fee"],["/page/6/index.html","25bdfb612581020ed8a240bad7c1f79e"],["/page/7/index.html","ffae23f085e850398e3cb36cbeebe399"],["/page/8/index.html","7c10e60a1d80e1b64e97952fbdadb24d"],["/page/9/index.html","e8bf742629ac2f5ff7e3a5216a48e156"],["/posts/10c9dd98.html","f96209c32118d34395be4b34213cbaef"],["/posts/1295b569.html","0c1dacfbb5c75928725952df7fe9860e"],["/posts/1370342.html","0d5a8c902d1cb17484d852a1c2564f4e"],["/posts/15ef14c2.html","a1d281d5aad1917fabc1555009552725"],["/posts/15f3959d.html","f38d9fd253ed4aab67d4156157ed16cf"],["/posts/18ab785d.html","72d8b4849ed81594a3297df21c8db6b9"],["/posts/1d59b71f.html","fe0375bae2eca1d8ad71fc4142087174"],["/posts/20b3f3a4.html","72073da2be4456c88d5e5c990ad2cdbc"],["/posts/245f1c7d.html","431a14431272e9adce7fbb8c98529253"],["/posts/252658f.html","297c02ca24baccaf461bfd75badc02cc"],["/posts/28397adc.html","826c2fdecff33cadff6c498602863dba"],["/posts/2b38bce0.html","3b8d60e8097bc081eea690f2a61e646b"],["/posts/2c0a6836.html","a2aa985996c171dd25b0a81d45614103"],["/posts/2cf620f0.html","fbed90cbf6b7a2bfb16a1bc84f5051ad"],["/posts/2e30fd6d.html","759c90cbf043347cf6513fd1753b05fb"],["/posts/34292736.html","f46207fd915e3987e8240d8ce3a0acd3"],["/posts/3468cbe.html","99b99471388d053ad4ae5cbd02718cfd"],["/posts/39176dc0.html","dee656bae04db8d51fe7388af21da549"],["/posts/3e118dbf.html","cfcbc974074c91de0480a24cf0a4dfd2"],["/posts/3f7d823a.html","dac44ee0ecbeebf0cf27ca0123b718aa"],["/posts/3f978819.html","34e2c72e926274da8fdcf2cad53e4eec"],["/posts/43945723.html","750b80f069435bfb84f278d6eb76abc2"],["/posts/44124a6b.html","7d180bb66c3b65d6b726d98fc3f013f7"],["/posts/47abb61d.html","cfb29eec3cf61e4b3241299dc3795b9f"],["/posts/4b689be3.html","b957e8ad1856ad4b8ff4cb09f4b177d0"],["/posts/4cf8423f.html","2e331bb07c6d831dbd5d134359480cb2"],["/posts/4dcf85c.html","521e1d04f50254d57c7f0cfaa7ec8156"],["/posts/500cd322.html","2cc531d63fcf4aace447470d7a4ab261"],["/posts/51c9b1ff.html","0efc0165ff81612a3eaca7f44a0fba65"],["/posts/52b5b3c6.html","d8b6aa3a98d9284b93631e381a8a8a09"],["/posts/5f6e0c59.html","e1654942d92814f2e3c14276cc1ef1c2"],["/posts/61a63a84.html","574617b8005ae9a59f93d4ca3d94b11d"],["/posts/625ab7bf.html","276cbd1b1cc2c81af242e2c3db288b0d"],["/posts/6336a2f9.html","7e85d47d4e237855d516adf5f4ab75a1"],["/posts/6432d61a.html","5f154b1a513db6dfc9f0f276dbeb2c8f"],["/posts/6515f032.html","8c242ffae214915aa960c306b7c19fdf"],["/posts/6720ccdd.html","05a385e2749c049bba476ea44be5e36d"],["/posts/6a4b5ac8.html","647b516cd01308063fd464e973fc850b"],["/posts/6aa4177c.html","dbb8993b32b5c7243c80a96dc91bc265"],["/posts/6b15f81f.html","ab7cd7e2d2ee1454abed5685dad04370"],["/posts/71131d34.html","54df7475ebc7c3ce55b25a5570ac9b4c"],["/posts/78a8a8d3.html","55d1ffaacfc27666b898f49f66aaa33d"],["/posts/7a5ef3d0.html","51e46cf4c4202515bf2137c197d52836"],["/posts/7b41e1ac.html","4d3c89445d7af3b8d066b8dc73300a43"],["/posts/7b51011d.html","c5ed7bb12c33992cc2515a6d148215d6"],["/posts/7e3aa3e2.html","b25831ccc703099fb15240536a83dd6b"],["/posts/80fe2691.html","263a64d60bc630de0a1548094498681e"],["/posts/81ac52e9.html","7621e1061b6fafdac1eca33e3d20d2d5"],["/posts/8486f6f9.html","3c75844686273e7db59650d605b283ab"],["/posts/849b40f8.html","787fcf20051908f67bf4b8dcdb9b6e4a"],["/posts/85c51d68.html","d3155240aa227466e4e86b4963b00104"],["/posts/886f8d3.html","c3c59c75126e151edfc115a9b7bf7cf2"],["/posts/8a7cba10.html","da44f974b7b4478c7087b3dda1a5465b"],["/posts/8ac11b41.html","41deeb5a0a6a131564d0b1f8f92c47a7"],["/posts/8dd520d9.html","6b043b220640f73fa49f36d32aead183"],["/posts/8f555654.html","912325e8af928b35c9d4726f033d6037"],["/posts/92a980c2.html","8da93945869ad57473c3fdc83f8ef41b"],["/posts/92ce16.html","d0ad3a1164ae6a3c98b58f37dc687a8a"],["/posts/93e9943b.html","3f5a618e61b8151da137ede8d390e9d1"],["/posts/94d3c794.html","3b247a87d55bb92484e9c8864569f3fa"],["/posts/97f50eea.html","3f87a6652843acd7e24ea1f36dac695d"],["/posts/97fca8be.html","9ab744b58433f619d9590772eb001e2e"],["/posts/98662d05.html","39f0f4959ffc7b29ccca894a89ed5fe9"],["/posts/9a2f6162.html","f90c624843cd900dd0a373a3f03563d0"],["/posts/9b22a48d.html","f7a6f71129de5b441bb7ec68d54a0e7d"],["/posts/9cb455b1.html","e84865cc452aa4418569cc86984a5b05"],["/posts/9ecdeecc.html","38b91317ba213c615a2b8bb15aa2721f"],["/posts/9efd7701.html","cf6a213ae976a3bb80626c885023dfd8"],["/posts/9f61c1a0.html","2749fb7052b7a4081e5fd529e8cdf196"],["/posts/a1de710.html","2aedbd9128c431bc6784936da3ffb366"],["/posts/a30eb0cd.html","57b72bafdbc669c2e0dc2f3802d468a3"],["/posts/af1807ef.html","d07f985cd76c1d5eb7073cee1fe615c2"],["/posts/b497b647.html","058387b06369f0fd13eb25e7900b3302"],["/posts/b4d464b0.html","ac5d62ae080614aa20e884d4b2497941"],["/posts/b5fb773f.html","85be2effcdabafbba7340ae86c3df6a8"],["/posts/b8d46b32.html","3035dc1111a4f7df3c6682179d0a2c9b"],["/posts/c1b2c6c9.html","32dde2478d468ddd361aa095f55f8467"],["/posts/c2111cbf.html","4f7bb534152f472ee71a7ae48a23d871"],["/posts/c316c2e8.html","b554c2523b7d2cffb636ca047c7a29b7"],["/posts/c43e60b5.html","946e9bb224582b00b9f2149570dfb114"],["/posts/c497a412.html","07bcfc3d6f4fd4acfc3d0dc9ebef29a3"],["/posts/c5de299a.html","1794845f1c4ba02fb55b3ec88cf05a3a"],["/posts/c70bba9c.html","ae0c25ad2606edc3eb34b19d8e35e783"],["/posts/c797535e.html","c32a113b4ba29f1d32123e2b475cc899"],["/posts/c7a62c79.html","6a507d493d091bf10584fc601c49ec66"],["/posts/cae2c959.html","32129c1ef741fc14db4229adc758d04e"],["/posts/cbebef2b.html","4de476a052e1f91d581f2ce9ab72f46f"],["/posts/ce25023e.html","343b9599bff8fa069ab54e721c6fa980"],["/posts/d2fd4837.html","e6a782be021a189f0cdab4d6612648c4"],["/posts/d3233cbb.html","d00e7aacdf3c74c41966609a0fd16ffc"],["/posts/d3a745a8.html","3d78541a1ed7864d1decf34dc2a37e6f"],["/posts/dc815d5.html","88fe62167a9f11fc2c18946324e5805e"],["/posts/e3ab6ad8.html","fe28250baf06df71f4628bc37f5f09d4"],["/posts/e5018da6.html","682b0fcb90731d7bd458178a4e5cb316"],["/posts/e5963272.html","7e3b76e84503baa316e53c65fe275d73"],["/posts/e624b065.html","9b070b45b1a3dfa7cd4092c8fb7ddd9f"],["/posts/e7c703bb.html","592f86854670bd2b4819a227119e60d1"],["/posts/e8f14b6c.html","f495349d69331ce14114048ccd5d597e"],["/posts/e91abb63.html","ba786ff580f73fe4b831428ffaaecbbd"],["/posts/ea9a8808.html","661f467c13e3fcb4c6556cce8c97de24"],["/posts/ebaf2232.html","8432d966f649fd6c93d3dab2f973b167"],["/posts/ee1ed673.html","414272238c22b2c8b4d8b385d7b9bdc1"],["/posts/f0c3ed61.html","e262aba4f4c0ed28dbf9e868f82816cf"],["/posts/f21e7f84.html","af1022a54f8006ef5e491b43b053c917"],["/posts/f230b0fd.html","abb4ca1fcbf6058ea560120d19b447db"],["/posts/fc04d0d4.html","50ffe9c39edbb6b9b01e7b3991bece4f"],["/sumire/index.html","64811e1564d4a70ab19ade95706a0ac6"],["/sw-register.js","e3aca69e1133ca78f6aa1d4ffb17bef0"],["/tags/APPLE-project/index.html","1241906d7ed0fcb95f07483ba88c25ad"],["/tags/BELL-DA/index.html","650fa1892b83fe266e1f2c54e769b125"],["/tags/BL-Game/index.html","5e3ef1c2cc2eb14308d9731f48a6c76c"],["/tags/Blue-Dahlia-Digital-Creators/index.html","fcde0e7403c436f196aa427b9e4a9d5e"],["/tags/CHUNSOFT/index.html","3c54e07c2f5790788522d4ea3d5635c0"],["/tags/Cherry-Pie/index.html","0f2a508d26781870152e74a81254b410"],["/tags/Circle-Mebius/index.html","15f0c3a5501f5969bf6f2c532788bcdd"],["/tags/CresCENT-BLANK/index.html","84d5408b94817b41566761e18477d90f"],["/tags/Dopamine-Software/index.html","68a1a0f206bb86524147faecea452dee"],["/tags/Dos/index.html","3a6e5efe0c20eb8c1b99f44e82aa9cd8"],["/tags/Earth-Well/index.html","856480580cbaaa6a582b5d0ca62967d4"],["/tags/Kanon/index.html","44f3d1479a34bea2f45f9c557c46e49b"],["/tags/MANATSU-8/index.html","be370e26b6229db82276d954b37d994c"],["/tags/MIO/index.html","25651de4ec857ed9380670bbd519623b"],["/tags/Nmyu/index.html","a871da6a59f3eaed0081de18aa763024"],["/tags/O-S-I/index.html","8be9b6750c9f65622e2aeb1012fb39ed"],["/tags/Omegaの視界/index.html","573faae61c0350fc8d3fcf709d9cee90"],["/tags/PC88/index.html","19a2a8b676f656689c0e4a9c27e9d93f"],["/tags/PC98/index.html","2c1da6a4e593b15d1feee4325a5c9c8b"],["/tags/Perpetual-Room/index.html","cd601d76dd2c03af2690087d0bb067b4"],["/tags/Pleiades-Company/index.html","77cfb8eba30cb9f9cb76d9a939c3b4b8"],["/tags/Project-Twintail/index.html","356cf6dce9b9ba55103dea8575e7aeaa"],["/tags/Reverv/index.html","061da2fab73621b993bfb1f2edda5116"],["/tags/Saihate-SOFT/index.html","624d93e8f95dda2d0833aa1c9783e0b9"],["/tags/Sky-On-R-imaginAtion/index.html","4988eb65c7deafd688fd1e90a2665a93"],["/tags/StrayMoon/index.html","501dd99f15888ab1fb078540318cc7c7"],["/tags/Studio-Bu-Sa/index.html","8ea87c910dac9d777556eeb42b7bbc5c"],["/tags/ToHeart/index.html","c924101300f1bbf150035a021051f0fc"],["/tags/Traumend/index.html","bf84c94329ce1a3577a3e721098ed0ed"],["/tags/Witch/index.html","84d795b62ff11f8e47397b4003b3113c"],["/tags/adonis-project/index.html","69879af82bcbdd2cf147f5fbeafca2d4"],["/tags/flash/index.html","549ff858023aa150d5161af764766dd5"],["/tags/galgame/index.html","946cf6a60b4bb21b4494e6edcf7d1954"],["/tags/galgame/page/2/index.html","1a70e2d7014c0087159b6225b9abcb0f"],["/tags/gal资源/index.html","478d85ecf6872876f286b410262ab7f6"],["/tags/gal资源/page/2/index.html","d9c4a1a958104768655b6bbf073ccb44"],["/tags/gal资源/page/3/index.html","1729f35c4c804885df5c84bad29798bc"],["/tags/index.html","fb8593701f8dd4d690faef3b60436ec5"],["/tags/rkr/index.html","f338193fb744308219b0a2b801e794aa"],["/tags/team-eye-mask/index.html","1f27553f47e40b02812888107910649c"],["/tags/ありすくろいつ/index.html","16d45bd3d936ef9f472a9f4fc2b3d29b"],["/tags/いつものところ/index.html","9e7f65f46938e6cd612d6cc8a0d21b87"],["/tags/きつねみみ饅頭/index.html","b303ba668cf439aec67148fe78f1425a"],["/tags/ねこねこソフト/index.html","e19e1eb25ba810b7cca3e0a661cac824"],["/tags/ねこバナナ/index.html","78c8787ff274aa4ef8d453a3320757a3"],["/tags/はちみつくまさん/index.html","bf7d60fb3d081463f37d4ef17d24b984"],["/tags/ろりちせ/index.html","328ac74ceec7e147a535cecbd1d99af3"],["/tags/アイル【チーム・TATU】/index.html","83dc4276f37205a77266ae51f3d04528"],["/tags/アークシステムワークス/index.html","60953d423362b4777e979adcee364121"],["/tags/ブロッコリー/index.html","1e6e1d3a0496e1866b5b872a637ab5f7"],["/tags/乙女/index.html","a4548cd6d60e6fbdc3fdb5d399843dbb"],["/tags/停产/index.html","16a188e9a93fa66fdcb5df132a0387df"],["/tags/公告/index.html","294fbd551528031d733f3edc4bc7e69f"],["/tags/同人/index.html","6ccd2c0253d384bd38cde916ce481e08"],["/tags/堀井雄二/index.html","166575518f67f90aa20dae905e6d8a67"],["/tags/外海なおき/index.html","248b98132b591257bde3ada05d623f5b"],["/tags/機械式少女/index.html","2c7f6b5e48cc229e02e96b33814af17c"],["/tags/水仙/index.html","6c1839d13ecc55a038914bc7943799d8"],["/tags/汉化/index.html","22c38fc3bf4e20a056f7db1eb2e6273a"],["/tags/片冈智/index.html","3cd99f1fb2dd6c6bccf1719a50d3e0e4"],["/tags/片岡とも/index.html","fab9e3943d2d05891de1574e6b6368bc"],["/tags/牙の刻印制作委員会/index.html","da4dabacab59aedf59bf6b01ea2a51fb"],["/tags/牛カルビ定食-FLAT/index.html","426c4ac99f42b0293d5672eb205c0437"],["/tags/牧尾屋/index.html","6263b7019ea015162e0778a6d2cb0a87"],["/tags/猫猫社/index.html","0c1232941f65e80a47679cda870df458"],["/tags/王宮魔法劇団/index.html","a159e31226e91c3f60cdeb595e3a057e"],["/tags/画集/index.html","d941bc8e42de6d3e129b5e09fb59e284"],["/tags/索引/index.html","cef95ed58112f25bb87e87a091bdb67f"],["/tags/自购/index.html","4ed91acd6beb340fb27bb93f25b4984c"],["/tags/郷愁花屋/index.html","707f14753980bc22879299e19bf937e8"],["/tags/閂夜明/index.html","e840ce56eae08eebeede1c6d40dac7f1"],["/tags/音乐美/index.html","97e1bdd612a14418b2c0b1accbe167b1"],["/tags/黒†救/index.html","d50f4c8a534c5149bdde35ea1cbb7500"]];
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
