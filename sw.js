/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","767c2b13e8a40623683f36f3311298bd"],["/archives/2024/04/index.html","51eeccb8b92d3eaa0197239250069e76"],["/archives/2024/index.html","e4c845ba4fe73bdf3dcfcc5b3a55cd08"],["/archives/2025/02/index.html","b2db8439ab53a735245406c1f42b63df"],["/archives/2025/02/page/2/index.html","a235401e8e2a88330bc5649e77480288"],["/archives/2025/02/page/3/index.html","d78e05dc5a986c28d28b70a0ab2839c0"],["/archives/2025/02/page/4/index.html","79483192cdcb9a9a0ca5731083a596f4"],["/archives/2025/02/page/5/index.html","4ca341a307f9a404c967e9e9d1cc66d1"],["/archives/2025/03/index.html","89fd96047b62b119a16d54fc877bc634"],["/archives/2025/03/page/2/index.html","3d39d32318f69c326f0ce764b882e640"],["/archives/2025/03/page/3/index.html","4cc385f70f51f7af5ddb093accbb509d"],["/archives/2025/03/page/4/index.html","bd1460da376b73b31a7d9038b7cb99d3"],["/archives/2025/03/page/5/index.html","93d7e413d1f73b6e1bd98e2a19bccbf2"],["/archives/2025/03/page/6/index.html","541e093806e2019bf51808c1a7637ef8"],["/archives/2025/index.html","c100f3c846728f2a3bc9a6fab84547e6"],["/archives/2025/page/10/index.html","7940219ba6053aad7ee7eb18a434a29e"],["/archives/2025/page/11/index.html","fc5ed4077f8babf83b5f2dfb8e0220f7"],["/archives/2025/page/2/index.html","b997a07ba576f66980a4dc0e109fb6e9"],["/archives/2025/page/3/index.html","b1fbc2bbe69b1b0873ea350c6292f887"],["/archives/2025/page/4/index.html","12b91d6dc5ede83ddd18f1893a6df181"],["/archives/2025/page/5/index.html","b7754976fbb73f9563f4af3e312e7fc2"],["/archives/2025/page/6/index.html","4be1be2da71b5db0847845fbfa5e4167"],["/archives/2025/page/7/index.html","cdfa20401bff4165e02a7a4e227befdd"],["/archives/2025/page/8/index.html","fede474f98152c819192cc9e30d5b4c4"],["/archives/2025/page/9/index.html","189dc638e2c185daca4d5c73280bbc0c"],["/archives/2026/02/index.html","82d70f5ccd8222e4add4b481b9610678"],["/archives/2026/index.html","98bd2bb18226f8257ca7a3db3f6685d2"],["/archives/2925/01/index.html","d5d56d0fc121fd2ad1235d117c952e0e"],["/archives/2925/index.html","f5d30371388c8e5fb6bfb8cb63be2e28"],["/archives/index.html","32085fcad5e393c4e4015c1a274fd289"],["/archives/page/10/index.html","82eccb43916ad927be8033d022cca504"],["/archives/page/11/index.html","af35d391c16ed026f5084965bf03df5f"],["/archives/page/2/index.html","e8556306dc5656eeb3438d649ee466b7"],["/archives/page/3/index.html","18dd4233350ae49d5a27a3fce9b5d136"],["/archives/page/4/index.html","7975fa69109a9650958816cfe65eca9e"],["/archives/page/5/index.html","b19b0bc44d79a05c4db26b90fb723653"],["/archives/page/6/index.html","91bd82e824549d04205fb39637a3e6aa"],["/archives/page/7/index.html","63bd7772b70682fd78cee19a7f587cbe"],["/archives/page/8/index.html","df757580e73a25b9f76ad9b3dd0cad58"],["/archives/page/9/index.html","e422dabaef0f70f8c2f91f39e5b78ae1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","b1145c17b1ec9e63079c68bb4ae1e824"],["/categories/galgame/page/2/index.html","2cf33c77890768eeec669f2a1e51331b"],["/categories/公告/index.html","7254c9af1df7e9086f92ba42e5e1f1ee"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","82298f8bd73a92d20da768103354b8f0"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","9765927ef46942b012120f48c800649c"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","459474f97bebc6d31ca1ad7b82627c0b"],["/page/10/index.html","3f80578c99094c0260b1731accf9f3c0"],["/page/11/index.html","39b576223f73d20998f94d141589c8c6"],["/page/2/index.html","d5a67dcbd1471271b937e4566a8faa85"],["/page/3/index.html","8c843b81f9a6fd319ceebfbf38a0c1a0"],["/page/4/index.html","cff77c2a7b664acada0f9a6c464446c9"],["/page/5/index.html","2cb7d0a3b46a86c269bc5fc828043bd7"],["/page/6/index.html","8f3752b6e36008d2ee59d637bb0c89e7"],["/page/7/index.html","9795c5dda509425dbcf8f9592413ffed"],["/page/8/index.html","f9138e308f5c8d58fb91b57ec89500a4"],["/page/9/index.html","9341a749234be46db7c2a6e5452ff469"],["/posts/10c9dd98.html","f96209c32118d34395be4b34213cbaef"],["/posts/1295b569.html","0c1dacfbb5c75928725952df7fe9860e"],["/posts/1370342.html","0d5a8c902d1cb17484d852a1c2564f4e"],["/posts/15ef14c2.html","d382d8603659b11713a1e758559f6040"],["/posts/15f3959d.html","f38d9fd253ed4aab67d4156157ed16cf"],["/posts/18ab785d.html","72d8b4849ed81594a3297df21c8db6b9"],["/posts/1d59b71f.html","fe0375bae2eca1d8ad71fc4142087174"],["/posts/20b3f3a4.html","72073da2be4456c88d5e5c990ad2cdbc"],["/posts/245f1c7d.html","431a14431272e9adce7fbb8c98529253"],["/posts/252658f.html","297c02ca24baccaf461bfd75badc02cc"],["/posts/28397adc.html","826c2fdecff33cadff6c498602863dba"],["/posts/2b38bce0.html","3b8d60e8097bc081eea690f2a61e646b"],["/posts/2c0a6836.html","a2aa985996c171dd25b0a81d45614103"],["/posts/2cf620f0.html","fbed90cbf6b7a2bfb16a1bc84f5051ad"],["/posts/2e30fd6d.html","759c90cbf043347cf6513fd1753b05fb"],["/posts/34292736.html","f46207fd915e3987e8240d8ce3a0acd3"],["/posts/3468cbe.html","99b99471388d053ad4ae5cbd02718cfd"],["/posts/39176dc0.html","dee656bae04db8d51fe7388af21da549"],["/posts/3e118dbf.html","cfcbc974074c91de0480a24cf0a4dfd2"],["/posts/3f7d823a.html","dac44ee0ecbeebf0cf27ca0123b718aa"],["/posts/3f978819.html","34e2c72e926274da8fdcf2cad53e4eec"],["/posts/43945723.html","750b80f069435bfb84f278d6eb76abc2"],["/posts/44124a6b.html","7d180bb66c3b65d6b726d98fc3f013f7"],["/posts/47abb61d.html","cfb29eec3cf61e4b3241299dc3795b9f"],["/posts/4b689be3.html","b957e8ad1856ad4b8ff4cb09f4b177d0"],["/posts/4cf8423f.html","2e331bb07c6d831dbd5d134359480cb2"],["/posts/4dcf85c.html","521e1d04f50254d57c7f0cfaa7ec8156"],["/posts/500cd322.html","2cc531d63fcf4aace447470d7a4ab261"],["/posts/51c9b1ff.html","0efc0165ff81612a3eaca7f44a0fba65"],["/posts/52b5b3c6.html","d8b6aa3a98d9284b93631e381a8a8a09"],["/posts/5f6e0c59.html","e1654942d92814f2e3c14276cc1ef1c2"],["/posts/61a63a84.html","574617b8005ae9a59f93d4ca3d94b11d"],["/posts/625ab7bf.html","276cbd1b1cc2c81af242e2c3db288b0d"],["/posts/6336a2f9.html","8b222b5d0118624dda855454e975dd16"],["/posts/6432d61a.html","5f154b1a513db6dfc9f0f276dbeb2c8f"],["/posts/6515f032.html","8c242ffae214915aa960c306b7c19fdf"],["/posts/6720ccdd.html","05a385e2749c049bba476ea44be5e36d"],["/posts/6a4b5ac8.html","647b516cd01308063fd464e973fc850b"],["/posts/6aa4177c.html","dbb8993b32b5c7243c80a96dc91bc265"],["/posts/6b15f81f.html","ab7cd7e2d2ee1454abed5685dad04370"],["/posts/71131d34.html","54df7475ebc7c3ce55b25a5570ac9b4c"],["/posts/78a8a8d3.html","55d1ffaacfc27666b898f49f66aaa33d"],["/posts/7a5ef3d0.html","51e46cf4c4202515bf2137c197d52836"],["/posts/7b41e1ac.html","7353bfc9f94f3a15763674b20f98f14a"],["/posts/7b51011d.html","c5ed7bb12c33992cc2515a6d148215d6"],["/posts/7e3aa3e2.html","b25831ccc703099fb15240536a83dd6b"],["/posts/80fe2691.html","263a64d60bc630de0a1548094498681e"],["/posts/81ac52e9.html","7621e1061b6fafdac1eca33e3d20d2d5"],["/posts/8486f6f9.html","3c75844686273e7db59650d605b283ab"],["/posts/849b40f8.html","52f82df949030c6ac04f7b9f1b245b71"],["/posts/85c51d68.html","d3155240aa227466e4e86b4963b00104"],["/posts/886f8d3.html","c3c59c75126e151edfc115a9b7bf7cf2"],["/posts/8a7cba10.html","da44f974b7b4478c7087b3dda1a5465b"],["/posts/8ac11b41.html","41deeb5a0a6a131564d0b1f8f92c47a7"],["/posts/8dd520d9.html","6b043b220640f73fa49f36d32aead183"],["/posts/8f555654.html","912325e8af928b35c9d4726f033d6037"],["/posts/92a980c2.html","8da93945869ad57473c3fdc83f8ef41b"],["/posts/92ce16.html","d0ad3a1164ae6a3c98b58f37dc687a8a"],["/posts/93e9943b.html","3f5a618e61b8151da137ede8d390e9d1"],["/posts/94d3c794.html","3b247a87d55bb92484e9c8864569f3fa"],["/posts/97f50eea.html","3f87a6652843acd7e24ea1f36dac695d"],["/posts/97fca8be.html","9ab744b58433f619d9590772eb001e2e"],["/posts/98662d05.html","39f0f4959ffc7b29ccca894a89ed5fe9"],["/posts/9a2f6162.html","f90c624843cd900dd0a373a3f03563d0"],["/posts/9b22a48d.html","f7a6f71129de5b441bb7ec68d54a0e7d"],["/posts/9cb455b1.html","e84865cc452aa4418569cc86984a5b05"],["/posts/9ecdeecc.html","38b91317ba213c615a2b8bb15aa2721f"],["/posts/9efd7701.html","cf6a213ae976a3bb80626c885023dfd8"],["/posts/9f61c1a0.html","2749fb7052b7a4081e5fd529e8cdf196"],["/posts/a1de710.html","2aedbd9128c431bc6784936da3ffb366"],["/posts/a30eb0cd.html","57b72bafdbc669c2e0dc2f3802d468a3"],["/posts/af1807ef.html","d07f985cd76c1d5eb7073cee1fe615c2"],["/posts/b497b647.html","058387b06369f0fd13eb25e7900b3302"],["/posts/b4d464b0.html","ac5d62ae080614aa20e884d4b2497941"],["/posts/b5fb773f.html","85be2effcdabafbba7340ae86c3df6a8"],["/posts/b8d46b32.html","867570ccec51142edbc3cb103ba04773"],["/posts/c1b2c6c9.html","32dde2478d468ddd361aa095f55f8467"],["/posts/c2111cbf.html","4f7bb534152f472ee71a7ae48a23d871"],["/posts/c316c2e8.html","b554c2523b7d2cffb636ca047c7a29b7"],["/posts/c43e60b5.html","946e9bb224582b00b9f2149570dfb114"],["/posts/c497a412.html","07bcfc3d6f4fd4acfc3d0dc9ebef29a3"],["/posts/c5de299a.html","1794845f1c4ba02fb55b3ec88cf05a3a"],["/posts/c70bba9c.html","ae0c25ad2606edc3eb34b19d8e35e783"],["/posts/c797535e.html","c32a113b4ba29f1d32123e2b475cc899"],["/posts/c7a62c79.html","6a507d493d091bf10584fc601c49ec66"],["/posts/cae2c959.html","d64a3cecf3d89652e7e7c54e04619d27"],["/posts/cbebef2b.html","4de476a052e1f91d581f2ce9ab72f46f"],["/posts/ce25023e.html","343b9599bff8fa069ab54e721c6fa980"],["/posts/d2fd4837.html","e6a782be021a189f0cdab4d6612648c4"],["/posts/d3233cbb.html","d00e7aacdf3c74c41966609a0fd16ffc"],["/posts/d3a745a8.html","3d78541a1ed7864d1decf34dc2a37e6f"],["/posts/dc815d5.html","dd8f094469b279df82e36142637474e1"],["/posts/e3ab6ad8.html","fe28250baf06df71f4628bc37f5f09d4"],["/posts/e5018da6.html","682b0fcb90731d7bd458178a4e5cb316"],["/posts/e5963272.html","7e3b76e84503baa316e53c65fe275d73"],["/posts/e624b065.html","6d4d14a1d79df0c8820b89f7897656c2"],["/posts/e7c703bb.html","592f86854670bd2b4819a227119e60d1"],["/posts/e8f14b6c.html","f495349d69331ce14114048ccd5d597e"],["/posts/e91abb63.html","ba786ff580f73fe4b831428ffaaecbbd"],["/posts/ea9a8808.html","661f467c13e3fcb4c6556cce8c97de24"],["/posts/ebaf2232.html","8432d966f649fd6c93d3dab2f973b167"],["/posts/ee1ed673.html","414272238c22b2c8b4d8b385d7b9bdc1"],["/posts/f0c3ed61.html","e262aba4f4c0ed28dbf9e868f82816cf"],["/posts/f21e7f84.html","af1022a54f8006ef5e491b43b053c917"],["/posts/f230b0fd.html","abb4ca1fcbf6058ea560120d19b447db"],["/posts/fc04d0d4.html","50ffe9c39edbb6b9b01e7b3991bece4f"],["/sumire/index.html","4ebbd28e8d9b25af4a6b1002ac57b42c"],["/sw-register.js","53df7bbcdce1b53dbecaf6364c9a3eab"],["/tags/APPLE-project/index.html","cd257a0b04fd0f263b935738dfa368b0"],["/tags/BELL-DA/index.html","edbc0688651cc3d9c5b6afbd8b4dfa79"],["/tags/BL-Game/index.html","97607c6b746ab988922be652f729d1fe"],["/tags/Blue-Dahlia-Digital-Creators/index.html","a3f0c8c92b27817f8f9180ec4be45a64"],["/tags/CHUNSOFT/index.html","84bb247b29085ead8c7f473fd3dc9a37"],["/tags/Cherry-Pie/index.html","af986e3b8f9ed68f23459a9d136266d3"],["/tags/Circle-Mebius/index.html","76be3cf7a825b20da2111bd4afb0db37"],["/tags/CresCENT-BLANK/index.html","1c1e4097658646b46faf5bc7bfdf825d"],["/tags/Dopamine-Software/index.html","fb9d42a5542559d2236f96b53633448d"],["/tags/Dos/index.html","f14494528d2b9b943ea9bd12250e08c8"],["/tags/Earth-Well/index.html","5d9e3ec77627c648213a180bb823ac31"],["/tags/Kanon/index.html","34e9a1a140b679d447083dbb8fe790ea"],["/tags/MANATSU-8/index.html","37e72eb353bfad835a1013324496ee4c"],["/tags/MIO/index.html","97a70b3bda3fbd6550b9942cebccdedf"],["/tags/Nmyu/index.html","a454e70af3b387c344e99e1d2137328a"],["/tags/O-S-I/index.html","20d4fa517c3bea395a5eae58e62689ce"],["/tags/Omegaの視界/index.html","e00133722fd1e0e0609e0884db225851"],["/tags/PC88/index.html","0ab1c4f2af7d9d1389b59577e98768fb"],["/tags/PC98/index.html","e6756bd68e5543e432e44c7fe9a8b7b2"],["/tags/Perpetual-Room/index.html","300c170f6d130b34a2fcf4e36e00fc8d"],["/tags/Pleiades-Company/index.html","2a3c887987a6d62c0a5465bed400f545"],["/tags/Project-Twintail/index.html","1010b9aa372e0a100e03a01d35b674f7"],["/tags/Reverv/index.html","b25b34641485e4e4af34a7034724b0de"],["/tags/Saihate-SOFT/index.html","bd309e362472fdb179765d9596d59d78"],["/tags/Sky-On-R-imaginAtion/index.html","9bb47d28e3911ba061513b2665c95bbb"],["/tags/StrayMoon/index.html","a90afe233c0fb1ac8b9fbdbbd0d680b3"],["/tags/Studio-Bu-Sa/index.html","7ab8e98c7ccbed296187af3c334297e9"],["/tags/ToHeart/index.html","7fb7b664cdc3bec90b2a225c81ee8e77"],["/tags/Traumend/index.html","2e11cc90722e88c94c6f77ee1cf58f28"],["/tags/Witch/index.html","55b6b726d666021e77f20018bdb83b0a"],["/tags/adonis-project/index.html","5031c04de567a8a3651b9bbd96eda553"],["/tags/flash/index.html","e6efc971f5b21583bdebc9e0a1a2f3fb"],["/tags/galgame/index.html","bea36c3dcac9a09d9167887d38a06d32"],["/tags/galgame/page/2/index.html","57aa8e9d91f7852c69f3cef1fe0c7c34"],["/tags/gal资源/index.html","6c934726fe71e179727b81750af5a7e1"],["/tags/gal资源/page/2/index.html","e2c66568fe73533f0f9356b583ab1ff9"],["/tags/gal资源/page/3/index.html","d98622b898b1034bb1ecb2edda4b9aa7"],["/tags/index.html","10f72f3bd590a4425627c010082826f0"],["/tags/rkr/index.html","6bbfbb7024f9c5dd7c5fd625a507d44a"],["/tags/team-eye-mask/index.html","a472efa27b4d219430ee4edce38fab34"],["/tags/ありすくろいつ/index.html","c2eee28aa49a583a87c312c98da95bc5"],["/tags/いつものところ/index.html","c60db48682c5512072e5307c6207db3e"],["/tags/きつねみみ饅頭/index.html","3b770de9c7cff38283845bb06c05bd32"],["/tags/ねこねこソフト/index.html","d947160142b57eda8bdcd1c4d7d4e811"],["/tags/ねこバナナ/index.html","dcf4dc8daf4250f1d856fbce4cbecbd4"],["/tags/はちみつくまさん/index.html","a979747f2ec77f665b3e272688a96583"],["/tags/ろりちせ/index.html","7efa94b5c1fe1f840685b084632ac810"],["/tags/アイル【チーム・TATU】/index.html","ea8f3f80a33a7b1e8f279e62cc2c7c56"],["/tags/アークシステムワークス/index.html","0713330b4c439f771744aac341440093"],["/tags/ブロッコリー/index.html","bb13cdadfb76c49eae07e472289fbe7c"],["/tags/乙女/index.html","898971b2e0b8b766fd20c81e6295a874"],["/tags/停产/index.html","5776583d0ede64547cffd5fba39070bf"],["/tags/公告/index.html","6e9123ffc61674cad07f676834c3fe96"],["/tags/同人/index.html","f783394cd9f793cfaa27a476d86ac30a"],["/tags/堀井雄二/index.html","0960c079f6c4d94516b00e52867ef002"],["/tags/外海なおき/index.html","122adfb290c4d0b3bd39be9342771372"],["/tags/機械式少女/index.html","f2fdc36c4a6d10735c02522246904aec"],["/tags/水仙/index.html","9036927a706acc6f9bd69026ce9eeec9"],["/tags/汉化/index.html","331c78c12fcfe47525ddafcb67978640"],["/tags/片冈智/index.html","38fd2525db33828a6ac706bcf388873f"],["/tags/片岡とも/index.html","c4313aefa61319c4ab189a307ff15a3d"],["/tags/牙の刻印制作委員会/index.html","f5d92712b44a1165a7d518885e2c958f"],["/tags/牛カルビ定食-FLAT/index.html","d96334ecc2a4d93417a8cda89058709e"],["/tags/牧尾屋/index.html","e5a9a2b5d415357c188f8a1094380a9a"],["/tags/猫猫社/index.html","64e201d2c892757c0687e83c76ebbae6"],["/tags/王宮魔法劇団/index.html","e0525adec8cc7fc1ce37737ebad68ba9"],["/tags/画集/index.html","70e4826dd901b2074df3ae55c781ea57"],["/tags/索引/index.html","d2d9735b5b784b4b53d1360a0bdca4d5"],["/tags/自购/index.html","bd9816b49c4ac2dd9baaefc3ab0c82a1"],["/tags/郷愁花屋/index.html","27b2a1d5541ee99abe785034b3ee14f2"],["/tags/閂夜明/index.html","aa8cb626785be2f6a5b70583c2eadccc"],["/tags/音乐美/index.html","1fa46df4a24b812197eb71870f3b146b"],["/tags/黒†救/index.html","e35e0cc2306adfbbdf1caddd2ffcfcd2"]];
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
