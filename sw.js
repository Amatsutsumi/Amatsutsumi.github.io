/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f00706d20cf6870075443038617c5e9c"],["/archives/2024/04/index.html","410b5e7f4d0cf3123258dc7c6fce34cc"],["/archives/2024/index.html","557c6a203e97204defb63f87792e0600"],["/archives/2025/02/index.html","4e4647bf02b713aef5a7e5f145617e23"],["/archives/2025/02/page/2/index.html","f58fe2ad8d72fbce3f8461846699e4d6"],["/archives/2025/02/page/3/index.html","e87df608c06338d4a177731c9a0d82d3"],["/archives/2025/02/page/4/index.html","d8e1c48dc5d12c6bcd4ffbfde5f149f6"],["/archives/2025/02/page/5/index.html","7691d4e6d4dfd0c3953c7b680f079995"],["/archives/2025/03/index.html","eb79ffc8a81b8765a170b51758dfbf94"],["/archives/2025/03/page/2/index.html","6896f64466e49e924ae31f017070d629"],["/archives/2025/03/page/3/index.html","da1ed4d2a68a6b743adb43508c22429d"],["/archives/2025/03/page/4/index.html","04f06bf4133a191fdc7e96edc34fa623"],["/archives/2025/03/page/5/index.html","c8339c7129799b120455f746a1bf803e"],["/archives/2025/03/page/6/index.html","b6373b805bf1296bead568c33085ea15"],["/archives/2025/04/index.html","85bb85c21a6977117bb28171357f08f3"],["/archives/2025/index.html","47839c7092d8c7c05d680e13473b1959"],["/archives/2025/page/10/index.html","b4060a5b52323fc8003c96611a8bdf01"],["/archives/2025/page/11/index.html","f65403adae94fdd793e88d32b8cb5583"],["/archives/2025/page/2/index.html","a21910722c0350aaf4659014d209facb"],["/archives/2025/page/3/index.html","7442d65b92b1ba6267327917b2204a2b"],["/archives/2025/page/4/index.html","fd971b5123d8db6b48375c6d58cd4b95"],["/archives/2025/page/5/index.html","236e0c200ac5d02942789a5a22a5d0b6"],["/archives/2025/page/6/index.html","c9d38bd1960b135dc0fa5c601da747c3"],["/archives/2025/page/7/index.html","7c43c781c550b3e76f3afbc3b7bd6a72"],["/archives/2025/page/8/index.html","911a5ea5128484dc6bb7e02691c67d02"],["/archives/2025/page/9/index.html","c8c84c7b2a28e960f6cc8b59d7e7c4b3"],["/archives/2026/02/index.html","e51db5f8f76ffe80b8ddecc21be079a1"],["/archives/2026/index.html","8805a3d5c90b31133299867f8d8b2bbf"],["/archives/2925/01/index.html","2921ca8c9cfd91475803022b175eed43"],["/archives/2925/index.html","9127fae567cc8462599ce31e1d32c71e"],["/archives/index.html","ebb36a1c55b02d1591dbe1ac0dd7760f"],["/archives/page/10/index.html","1136e2df345aa4d53b50c033a5e94d5d"],["/archives/page/11/index.html","951e01b00e460d38e10d47bf0bb7ed04"],["/archives/page/2/index.html","320c604784d86a34431c7a39ac7ba661"],["/archives/page/3/index.html","dfe66eede69f70d3120b5f1a146b851f"],["/archives/page/4/index.html","9014d68507b25e0fc4ce19dcd4ff6401"],["/archives/page/5/index.html","b2d7aed75d48ef327c69789fa90e0c1d"],["/archives/page/6/index.html","4e2211d376672072059bfba97fb861d4"],["/archives/page/7/index.html","873dbb2d5dcc2913468671fa348e724b"],["/archives/page/8/index.html","3172b00808ee9a6093043669e850b84e"],["/archives/page/9/index.html","1190de2e7b026d92918e9b25c7eda1a0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","4bdfc87a41e59d2df1448de1d88955e8"],["/categories/galgame/page/2/index.html","424eb31be65e13e94a5ea69bdf8fc015"],["/categories/公告/index.html","de976858e51a4df01a06bf1d751762d7"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","3341b977bad35f11b93ea1764bd6b7e5"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","103dd9d71c9937675549c2b0aa714810"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ab7571215263e933ba2766894f7cd50d"],["/page/10/index.html","1d753bf86ac7eecadb8f525c7990cf61"],["/page/11/index.html","a5232627cac853b3170ade8d6c449dac"],["/page/2/index.html","288274e6f3e015d8d4d1f4fe484e9cbf"],["/page/3/index.html","510fffc92813c84db0678ec1032ac953"],["/page/4/index.html","95d1299edb8886a6f26dcb257fc90d87"],["/page/5/index.html","9de80bc5c15a06f4c68f5c9a67c53f94"],["/page/6/index.html","18ab49b6e6790762ce51bb9ebecf0199"],["/page/7/index.html","ee8558459cc36b5dda815296be6a0761"],["/page/8/index.html","5cdc059b88c493bc3decf6aa3063cb83"],["/page/9/index.html","6df7e1fc32e6678dbc16ca073726e678"],["/posts/10c9dd98.html","02965aee91510fc9271369694092a384"],["/posts/1295b569.html","f6490d0ebd8e53c9257e7cc3628d83f8"],["/posts/1370342.html","ab72b2acb9ae8ce3675d796d8ad95c3a"],["/posts/15ef14c2.html","a9cb2e0404358639eb2b8e5d28fd776e"],["/posts/15f3959d.html","43be54029507bffd6984da770114d389"],["/posts/18ab785d.html","f69091927c63df37590016d8c1f82dad"],["/posts/1d59b71f.html","ca7b83c41188ca780a23f932f45c3d03"],["/posts/20b3f3a4.html","06d9f0e4e6e141783e164d3bbfdb60b9"],["/posts/245f1c7d.html","946e2a07c175a68eb63b56694f7a6298"],["/posts/252658f.html","e9b1d075c4927cf342a10e05f060f367"],["/posts/28397adc.html","d88aa30abb7488e37c44e60b8488691e"],["/posts/2b38bce0.html","55796dce08a00473dd3249f07c341867"],["/posts/2c0a6836.html","b69813f21e61604a6e7166f2b9f50094"],["/posts/2cf620f0.html","9714cc5c115c256c8ab92ce64266e170"],["/posts/2e30fd6d.html","c8b6e9e4751ad5f45da371100caa77ed"],["/posts/34292736.html","d246039dcfc5798f2bdd35c67b649f34"],["/posts/3468cbe.html","e2051ed2f21415d795a5cd7e342e1e0a"],["/posts/39176dc0.html","9923f76762cb2b31dfee3ef1799dbe03"],["/posts/3e118dbf.html","c989f645f65ec130327bdfb31283a1da"],["/posts/3f7d823a.html","475aa1eade469167ec7ac7ff91c58b12"],["/posts/3f978819.html","fa4847473b106cc5fe9da2f9d8fb1eed"],["/posts/43945723.html","098923022a81b093b5a76b44852a6dbd"],["/posts/44124a6b.html","17ec14a53d50743989c120ea2d366395"],["/posts/47abb61d.html","31678d2c796aeb3bda41d735d34b4cae"],["/posts/4b689be3.html","8430c5e41a248d1ea23e7e2e8f512e30"],["/posts/4cf8423f.html","e95547ab21e582dfc08c443d5be3cccf"],["/posts/4dcf85c.html","8b9aa3933e1995fb482151d20f554af1"],["/posts/500cd322.html","7cc51f6c861678dc2a1448a09e3bd173"],["/posts/51c9b1ff.html","4a17bcc021aa333e286e2275f7e822de"],["/posts/52b5b3c6.html","9d760ef420c3e6002c40c214785c47cd"],["/posts/5f6e0c59.html","41d466cc37b74158ef968b8bb4f71505"],["/posts/61a63a84.html","abd1b6f846596aa9f0592a5197a49cb4"],["/posts/625ab7bf.html","dfeb44e409c2577baef1d642511f3741"],["/posts/6336a2f9.html","461d6dd5b340c30a272963fa1a746389"],["/posts/6432d61a.html","31ddafc8632b74e42b9aff0567d7c862"],["/posts/6515f032.html","6b04797a29f30df55e9885ad627daf67"],["/posts/6720ccdd.html","6d36b6d3763bdc5ddb394c22b7057290"],["/posts/6a4b5ac8.html","5eef4057733f7d9886d2e8e214704e28"],["/posts/6aa4177c.html","7d5b50b2db09606018a6214ddb453628"],["/posts/6b15f81f.html","d1314c54f177dcf842f1de557874dc33"],["/posts/71131d34.html","c6f18cfafa03cfc74eabe330011c4da6"],["/posts/78a8a8d3.html","faf562f583bda541eee750d04e16ce7a"],["/posts/7a5ef3d0.html","c68cf871aa027383be85704e20e809e8"],["/posts/7b41e1ac.html","8cf911a9a7c8995b0200fce79e9632c7"],["/posts/7b51011d.html","eca7c5cead17e26277a3a7c920eeae45"],["/posts/7e3aa3e2.html","d4114cadfeacd4cffc3adba0bd9741a6"],["/posts/80fe2691.html","20df801bad497abe7e7d378b561bb819"],["/posts/81ac52e9.html","755c3de8cc1c96315f687c8a437e0413"],["/posts/8486f6f9.html","6e55554803ee97ba6f178908863135f1"],["/posts/849b40f8.html","3e54949a56c5c77fe4e6ed166f107cb8"],["/posts/85c51d68.html","83dbfda478b8432fcf99fe13de43dbf7"],["/posts/886f8d3.html","b91511cd98170c73d31bbe8a8373b9c9"],["/posts/8a7cba10.html","603e20dab3d0dadb1d70535496c7bb9c"],["/posts/8ac11b41.html","a0359ef434088d772a416844f2fd7097"],["/posts/8dd520d9.html","02829f9a01c4ccf5f91ae2fd97aff560"],["/posts/8f555654.html","5a07985b5d9100805aa424c8c61412e9"],["/posts/92a980c2.html","bf06b2fae681380a55d679943cdab42a"],["/posts/92ce16.html","e170c454d50ad4d8e21f8e17ca77472d"],["/posts/93e9943b.html","71fe5972e9447c3fb93dfda2e1a387a8"],["/posts/94d3c794.html","7ee99fdfb21b0ae61868fa80d83c82c3"],["/posts/97f50eea.html","fa353dbed9bf119b7bbb733e7546fcf0"],["/posts/97fca8be.html","562a5b3ad268aca2dad4770ee3cdafd7"],["/posts/98662d05.html","f3c245b9107492275dc6c1cdd0fdff78"],["/posts/9a2f6162.html","3625439be6b64b82cb2196c05fe24b43"],["/posts/9b22a48d.html","be89e938f95ff6cee9566dede9a6c8c2"],["/posts/9cb455b1.html","64295c44aa694c937814d73665b2a9ba"],["/posts/9ecdeecc.html","d0b36322e9eb314ed09a9eda52772ac0"],["/posts/9efd7701.html","f92ae5fc60e5ecf7690a68da081e1212"],["/posts/9f61c1a0.html","e49e18b18ca7d5f29d151f3568876387"],["/posts/a1de710.html","a940290bd053d29e1c7caa0107430632"],["/posts/a30eb0cd.html","909ba241ecf6a640463a73bb1d8b57da"],["/posts/af1807ef.html","8fcc4f01502bfa4861efa89b2572e426"],["/posts/b497b647.html","47dbfa54f3e6d5d82e16a23f7d18411e"],["/posts/b4d464b0.html","8ca0de7caa816e56704c2a4365509747"],["/posts/b5fb773f.html","4a19d7be7fe8c8dbad63ca386c392262"],["/posts/b8d46b32.html","6ce816ea3f06f1d6c37cc8baa79a1f78"],["/posts/c1b2c6c9.html","75b29d9a637d942a7f29e3f3353bd4ea"],["/posts/c2111cbf.html","a82c9eb9a15eac668defe2f609e8ed3c"],["/posts/c316c2e8.html","cb5f8aff5c7b6a6b4a3608bfbbf0c9be"],["/posts/c43e60b5.html","77f290e55f025acd4941410b35d38c62"],["/posts/c497a412.html","59a0fed4d6b829e240cfb904122219a3"],["/posts/c5de299a.html","113867f1b32b1ea679f9f06823d5f5c0"],["/posts/c70bba9c.html","88562cfde67ce585bd4ff5583ef21503"],["/posts/c797535e.html","6f5863c686ac0d422290d2f5ec1bbb75"],["/posts/c7a62c79.html","7d906e6dab700a88f3f5dd6ce4a80f43"],["/posts/cae2c959.html","8e92715dd7f5b33b39bfb8adbafa6917"],["/posts/cbebef2b.html","1e2e5a528dac4d81fbf510436728467c"],["/posts/ce25023e.html","a56364ba03928a3a03a9e92d5928ea8b"],["/posts/d2fd4837.html","62cd77684fc163fd96ffcb1af4e09d1a"],["/posts/d3233cbb.html","ee4f6875cf92273a5a27d18aedd399d0"],["/posts/d3a745a8.html","046d824349e9aa50203eebe28c1f1652"],["/posts/dc815d5.html","78435733222f3ee62bff28304a40512c"],["/posts/de25b0be.html","178a26e462a42e8d7c44c09d14a4f110"],["/posts/e3ab6ad8.html","0b8a812c6e9c15dd64947d378c0dccc7"],["/posts/e5018da6.html","1dc23820334d482b8fd63b6293c629f5"],["/posts/e5963272.html","4431b788dc16a6652aed1a9bde84bcfc"],["/posts/e624b065.html","6e52e3cce2e4a76d9d6db209e53d0c92"],["/posts/e7c703bb.html","8ff6098f55bdb406824783531f404c21"],["/posts/e8f14b6c.html","3d4a42435a6d0e506e3157d83680e2a0"],["/posts/e91abb63.html","31ed5b48c26eb33a9a66de422a9a920d"],["/posts/ea9a8808.html","a99d3d8944d8cebf7259ea02c8fe75ba"],["/posts/ebaf2232.html","d719e4528029873133e3e8c4bd63d367"],["/posts/ee1ed673.html","2e32bf962bb73dda5803162e42adfa2d"],["/posts/f0c3ed61.html","067c42772feac854a4a1f82bd8a6c444"],["/posts/f21e7f84.html","60cb08d77ec9e1e3c733479864eca6f4"],["/posts/f230b0fd.html","cd7401487547c7b5cbd025e85e5b7e19"],["/posts/fc04d0d4.html","d3a27781f665c638096a0230d3979291"],["/sumire/index.html","2ce3be8dbb9178f8469b2d63d57b3c1f"],["/sw-register.js","54b0d107bc9ef9cc2dc2995db60ee533"],["/tags/APPLE-project/index.html","699e5e2fa45b1de94d44e89cc6bb4211"],["/tags/BELL-DA/index.html","1584ed3d1256b958dfd9a99a26a000d9"],["/tags/BL-Game/index.html","6654cfa5122d38ceff3de0da4ab1294e"],["/tags/Blue-Dahlia-Digital-Creators/index.html","10f29da21577a056be9e9786faea3f07"],["/tags/CHUNSOFT/index.html","b64a9dcd44bf376312272ad386f47166"],["/tags/Cherry-Pie/index.html","539fb25c17b99e6ba3e12c891b8a1e58"],["/tags/Circle-Mebius/index.html","0f9d94c1aedbdb3a494c2b939939332b"],["/tags/CresCENT-BLANK/index.html","41a4406b1c132116135104dbaf53f4b5"],["/tags/Dopamine-Software/index.html","0862aee137d24748be329d3e636aa26e"],["/tags/Dos/index.html","f7d3ac6813568ba157efc84a73794859"],["/tags/Earth-Well/index.html","c725a33288f73ac47014da5954ecc4ab"],["/tags/Kanon/index.html","3a34eb67b697a8d8e5ce330a88404d31"],["/tags/MANATSU-8/index.html","29a21d82ebfc5f212f5e463e6bf7e14c"],["/tags/MIO/index.html","2c6dc32d1fdfe0994033804893fc6e73"],["/tags/Nmyu/index.html","7e958c0d939427c6c05a0ed8ae9f688b"],["/tags/O-S-I/index.html","163f7af6b5c2a31d98300b80a9c4c694"],["/tags/Omegaの視界/index.html","00af1d1e6b136c9916f29f90d35b1653"],["/tags/PC88/index.html","fa7000168a9565f9a09432995f9dcc86"],["/tags/PC98/index.html","7a9b8afec10706da453800683164f68a"],["/tags/Perpetual-Room/index.html","0584015762b6c1f28ba5eea95bab8887"],["/tags/Pleiades-Company/index.html","88a4a7f9bf63b707392a5d847dfae62a"],["/tags/Project-Twintail/index.html","0b3f0a46c817b59f46d1ec73d5d672a3"],["/tags/Reverv/index.html","398e2905adb95390d5f9dd4b1ca21ab2"],["/tags/Saihate-SOFT/index.html","9208f759ffb61f2e310122baf7e9ca48"],["/tags/Sky-On-R-imaginAtion/index.html","7c4b69a78d6e9fb2d1c91aaa5a4ecccd"],["/tags/StrayMoon/index.html","6b7d2bdbd9678098baf4fc01bc1e6a05"],["/tags/Studio-Bu-Sa/index.html","d632123a14419498341ef41c97d3dd3c"],["/tags/ToHeart/index.html","01f61a19fdf0e61c8d1a73b763ca52cb"],["/tags/Traumend/index.html","ab879904ac9bf18bc5b4705ef3a2bcc0"],["/tags/Witch/index.html","735da539ecdd5343e497cd393d6cc25f"],["/tags/adonis-project/index.html","4fb3efb83f191122bfdc7eac84fb1d17"],["/tags/flash/index.html","5d5cb8a241cb4c0df838466a67a5583f"],["/tags/galgame/index.html","0c3e1079a17f054ffe1636cf921272e2"],["/tags/galgame/page/2/index.html","e6513fffc58de365406448a8ba2f3984"],["/tags/gal资源/index.html","d15c98c381bb54b473589bdf0c589f90"],["/tags/gal资源/page/2/index.html","3c95f5c2016a694a7f1d2eea3541414f"],["/tags/gal资源/page/3/index.html","9a96bb050fa6d473d2000b3b83ade715"],["/tags/index.html","c1aee5b9992a463908b1bb572c380406"],["/tags/rkr/index.html","f4bfaa861b60870d7e6ce1f6cb9e1494"],["/tags/team-eye-mask/index.html","18c93ba106a101581b8f61d58faf0395"],["/tags/ありすくろいつ/index.html","4affb4b1e80c95040364ee2d0ea1d41c"],["/tags/いつものところ/index.html","4ecd6bdf605537628568c0861daa82a9"],["/tags/きつねみみ饅頭/index.html","415127e75bec81a722e4333285129274"],["/tags/ねこねこソフト/index.html","23d49611f2d27688c74792bfda04abaf"],["/tags/ねこバナナ/index.html","65bb424304d8d1b48cdb4c3d5822d98e"],["/tags/はちみつくまさん/index.html","a02746a905c33041f181ad4618c65165"],["/tags/ろりちせ/index.html","3228010ca391909b23366fda7607fdcf"],["/tags/アイル【チーム・TATU】/index.html","9e042228ca650bd3a9ddf3b21fe1d08e"],["/tags/アークシステムワークス/index.html","3c5a2a19448494f6e37981955617560b"],["/tags/ブロッコリー/index.html","fdce8bd88d79342ce7659d7b188765aa"],["/tags/乙女/index.html","88671bb39beb2f4bba07ab6776571f0d"],["/tags/停产/index.html","50f2a3171131c7caea455875085ff55a"],["/tags/公告/index.html","6a9d71be2e8e39bb09ed3f64e56d8093"],["/tags/同人/index.html","f4ad25edaa10441fa3f7865674d5d770"],["/tags/堀井雄二/index.html","c98646980cd86fcb185b21848b763454"],["/tags/外海なおき/index.html","1b38fa6939f0f4f9d377f51ce9f5e0b5"],["/tags/機械式少女/index.html","7f37d169def4d86da74eb60b97709d85"],["/tags/水仙/index.html","9138ed4eb368ba9091cef9e1772f65b3"],["/tags/汉化/index.html","2daff87ac11106398a7f0a77eab6c75f"],["/tags/片冈智/index.html","5e00108c597c55eb986011e7204ed686"],["/tags/片岡とも/index.html","40ecef8e5ca4992ae7e9fb479cb8935f"],["/tags/牙の刻印制作委員会/index.html","9a0486399c23f4eb9d59ed0200369fd1"],["/tags/牛カルビ定食-FLAT/index.html","e50a36f5e08d8fb60af13d33f02be10e"],["/tags/牧尾屋/index.html","cc6e0ab76eec220347307efa044824a7"],["/tags/猫猫社/index.html","1a59afe91af8abb8ba75b700b6c464ac"],["/tags/王宮魔法劇団/index.html","6cbea807d96cf37cde6b08afbb28d851"],["/tags/画集/index.html","8a477c28b2e5033745d615b25775d836"],["/tags/索引/index.html","d58f80fa075226ad48c5222d32788b70"],["/tags/自购/index.html","834194363986a9b1446bc47cc965e946"],["/tags/郷愁花屋/index.html","0662b6479180b7bac1bc57e621c1b700"],["/tags/閂夜明/index.html","fcd4da51fdcb5cf0fd9ba537becbf32e"],["/tags/音乐美/index.html","5ddc4c9954b2b74dcff7977839137837"],["/tags/黒†救/index.html","adeb267e13fa6dc89b259113f9a6ca2d"]];
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
