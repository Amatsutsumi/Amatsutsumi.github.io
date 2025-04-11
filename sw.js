/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e668028b76ac1d72ddb2583d744797ef"],["/archives/2024/04/index.html","62125e953c937bd26551ba543939e6f5"],["/archives/2024/index.html","339bd1eee7ccdcf791cde11d6f47cd5a"],["/archives/2025/02/index.html","994b3053f0bfe0e8f181638c1302ce62"],["/archives/2025/02/page/2/index.html","c7c69921318dd6cfff8d079beca6547e"],["/archives/2025/02/page/3/index.html","2be4e43046ca8eeaec8e84f146a8cee5"],["/archives/2025/02/page/4/index.html","145d9db2ea4ebf63321df0884cf7be9a"],["/archives/2025/02/page/5/index.html","ce47a24a699a36a769e231718daac0ff"],["/archives/2025/03/index.html","ef0564b0a2fbd69399dc1706852c9c96"],["/archives/2025/03/page/2/index.html","db03f9d330c686044cb6d3ccb85c7295"],["/archives/2025/03/page/3/index.html","c160f6544603c8d256070cafd6fe7163"],["/archives/2025/03/page/4/index.html","bb66bcdcd171a4472023603a6cea8465"],["/archives/2025/03/page/5/index.html","a4a837719b5f648ffa4cfce1739c3dad"],["/archives/2025/03/page/6/index.html","1cdead517b04b3209a8cd9596a517f7f"],["/archives/2025/04/index.html","c7f4dd68399863a203f2452481fdcf9b"],["/archives/2025/index.html","2e03cb8e958c05ac06367a5fbce4b93e"],["/archives/2025/page/10/index.html","a2151a0c432670c6780218f4d6429ad7"],["/archives/2025/page/11/index.html","067a6a08f9f7af7a2bb50179114b5b72"],["/archives/2025/page/2/index.html","08d17e1e180381b9bfdcad942a00f785"],["/archives/2025/page/3/index.html","e50340f591937a85217566ecbc1a9131"],["/archives/2025/page/4/index.html","0d26c8872e7537f8c502c13c514b3b1c"],["/archives/2025/page/5/index.html","5d3d6f9dd755de43a2c3f458dc5e53d9"],["/archives/2025/page/6/index.html","45d93dea6f4baf603caf8180d8375901"],["/archives/2025/page/7/index.html","3d3e7feb873ab9118d0d7ef9e247780f"],["/archives/2025/page/8/index.html","0b1bf799bbd3be8c5280549e9329fe46"],["/archives/2025/page/9/index.html","64c64f038af537b6647875da5f7edeff"],["/archives/2026/02/index.html","3b17ab4dc5a1616eb49aed0cee74965e"],["/archives/2026/index.html","d57e6674fae1030c98fdda43627c8070"],["/archives/2925/01/index.html","d326b311c1f9dc6cefcffcf2028ba11e"],["/archives/2925/index.html","844b49f1f721216c7ee28a675019899d"],["/archives/index.html","a73b5a56f431a4bb7fa343d595824aaa"],["/archives/page/10/index.html","eed3a1b2a1d0ba177a213649f34685a6"],["/archives/page/11/index.html","7ad080a352c10ad50fe1a18ca842e033"],["/archives/page/12/index.html","31a433c2561b045cfd06b0956a9ae759"],["/archives/page/2/index.html","b2da5893fb0066d1728e7fbbbc920971"],["/archives/page/3/index.html","9bc059804ec4650bba5e4cf3179cd29f"],["/archives/page/4/index.html","04cb55814cfbee274d698f063ba50b80"],["/archives/page/5/index.html","913ad7e07029a8a56978c33ba574e59f"],["/archives/page/6/index.html","64d082876478aac4c05551d9207d376f"],["/archives/page/7/index.html","adf3d235622a963636288247de8fb38d"],["/archives/page/8/index.html","abcc89b0ec85047010b1549ba1cc995f"],["/archives/page/9/index.html","0bbad91cac714c875239bfa628c8b369"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","2cbd216a63a59b37db13c171110f0b6c"],["/categories/galgame/page/2/index.html","b36fe324fb7a2bc789b1f9ca795c83f0"],["/categories/公告/index.html","5742fdda84952edff99f95bb20e1e20f"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","859e8b26cf2fd2963bce498179d63e5b"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","0bd7674e055bc408a11815467d3d70d2"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","db36ce81318baca7f41968be7d735b48"],["/page/10/index.html","a317bad83943f818e47ebed4fc039a7d"],["/page/11/index.html","e1d2ff8fd3ba3fb0e62793510fd243c9"],["/page/12/index.html","e2201f532c6fd95438d2db3b84fc2d19"],["/page/2/index.html","c58cca8d077519e09f9e07b414fb94da"],["/page/3/index.html","9f9f6088c2833241b120a10a958d20ce"],["/page/4/index.html","e26166aefc46e56195ed8679e579d57c"],["/page/5/index.html","9ce8b1bfb995b571241cd5f424ced99a"],["/page/6/index.html","741fa9f6e4512c23085d9597ca547621"],["/page/7/index.html","9c6cd565665c3f6352597bbddb758e47"],["/page/8/index.html","0ea00c3a1a2b5e8137ea933751555376"],["/page/9/index.html","22131ba3f763f0b4b0acd6d867f808f6"],["/posts/10c9dd98.html","d55ad8ae0fa11c22fb9d3d39892e670c"],["/posts/1295b569.html","31e59a4e115522574eeb9f9a43a3a9b4"],["/posts/1370342.html","4e5bd13349fda2948a2155871b4dd1ae"],["/posts/15ef14c2.html","ed18a16492d62c7abb204990c8fb9718"],["/posts/15f3959d.html","0537ac7ebb67c61bcbf42877f7029653"],["/posts/18ab785d.html","a628a3beee64bf5e5df43a11b0606cbb"],["/posts/1d59b71f.html","5707e81f28833de68551b0cddb472259"],["/posts/20b3f3a4.html","c3a3a3e8a56c5d1b1da6ab8bb46514fe"],["/posts/245f1c7d.html","08dac06ec3f7445e2e74faeefe0e8abd"],["/posts/252658f.html","2a509d4ccc7507e06c855dff1440b1ed"],["/posts/28397adc.html","6e8dec2003aaf5e0585cf9e4f779deb9"],["/posts/2b38bce0.html","e804c1effa08c3db85a1818b8323ba80"],["/posts/2c0a6836.html","ba85baf83c5c0c235f477f6e21fc77bd"],["/posts/2ce39bcc.html","a2e57b40681a162b2f004c88bad5bae6"],["/posts/2cf620f0.html","20b47a693b54ba8dd868104f2d4a4cb3"],["/posts/2e30fd6d.html","faa9a263c5ccfa5ebebbd234db137d33"],["/posts/34292736.html","d12d9864840509cf3d8065606df25273"],["/posts/3468cbe.html","7eab859e7bb1880003da8334c6c79aeb"],["/posts/39176dc0.html","22a59ed8846f6be33873be27c6de3040"],["/posts/3e118dbf.html","e8c5d8e48e20bbd7df3d65e431d09e6b"],["/posts/3f7d823a.html","26e89172d1eded34c5dc80e53c80abf3"],["/posts/3f978819.html","f9cbe7a577053d612742528bd4af98b4"],["/posts/43945723.html","a633c0666fc5f1f0f2b99f5ca4a45fb8"],["/posts/44124a6b.html","db5ec8ba05659bc6ed790e65209de61d"],["/posts/47abb61d.html","b605727734a5ddcffd501926432f4bca"],["/posts/4b689be3.html","3a6c62c80dea501943225d9bac47f60a"],["/posts/4cf8423f.html","d992c234e4574bb2d5c6bb9d04492a6d"],["/posts/4dcf85c.html","928daf73bec09a9816fcb22b9dfdaaf0"],["/posts/500cd322.html","050cd512fa83dc893c0d885ebc392a07"],["/posts/51c9b1ff.html","d1b49c14a484fb6e988d257439599164"],["/posts/52b5b3c6.html","6459269978c35ddcd0df6cef38c20e03"],["/posts/5d8bea92.html","ff39485594b63e4587dde07d1d304662"],["/posts/5f6e0c59.html","64cacf394c1fef315d7bc28040349499"],["/posts/61a63a84.html","28852320a610064f5f8380cd8c617d80"],["/posts/625ab7bf.html","59475f0ca230de47b42d39f726e8a586"],["/posts/6336a2f9.html","6b4776a2000db249a000e4db35514230"],["/posts/6432d61a.html","d5cfbe98189d60ad6316b2c1279b3305"],["/posts/6515f032.html","fe19c9ee367235999a8d1a2ce0e21422"],["/posts/6720ccdd.html","5bec89c49783d196ccd90de65bb2ef5d"],["/posts/6a4b5ac8.html","a6287ba9e47d76e68c8c516e7d72c451"],["/posts/6aa4177c.html","0726f5422189ccdca6cb353ad6d143fc"],["/posts/6b15f81f.html","9c09c374f46ac99350e72b19303cb2f4"],["/posts/71131d34.html","f532d3d22e2ba6d50dabc6392e9ac43a"],["/posts/78a8a8d3.html","8694b688552fb4a375fcdb91087731f4"],["/posts/7a5ef3d0.html","464df52a5a1a6dd3c424b1e2985376af"],["/posts/7b41e1ac.html","4c21c4359391e269ce2b7c570682ddfe"],["/posts/7b51011d.html","3b369885a22d7c8980f3789bcc63ffa3"],["/posts/7e3aa3e2.html","b880c7293ace452058d977d58edce982"],["/posts/80fe2691.html","a6f8ef391d3199dc8522c508a8b53f88"],["/posts/81ac52e9.html","c49f0a2b129830840114473e1211eb3f"],["/posts/8486f6f9.html","0ed8aa51e131f7fb7d6088e1e3ac4756"],["/posts/849b40f8.html","5fdaea3109504f02891b292f72d22cb3"],["/posts/85c51d68.html","60e05356e7d02cca799a896bad5857bb"],["/posts/886f8d3.html","924ab4aade61aee861c4010b7bc1875e"],["/posts/8a7cba10.html","e335e8144d8c7b64b0c5852e2b5474ff"],["/posts/8ac11b41.html","58d87b5174467e42434215e2e2701621"],["/posts/8dd520d9.html","b2f35d9cc2285e1aae9673e6e3fe5227"],["/posts/8f555654.html","2c232c2522f793d973a394cea50f5d48"],["/posts/92a980c2.html","7f89c408cf14a8a16b1c1baa27b879ba"],["/posts/92ce16.html","4a7b91bffca5fa1a078222cd486c9fcc"],["/posts/93e9943b.html","680a404dc85815c8848188f196204e45"],["/posts/94d3c794.html","cf0324c2c67e8b6bd15d378436e3913a"],["/posts/97f50eea.html","77c31b0c996fae9aac86ed4c3d543615"],["/posts/97fca8be.html","218a4885eb2a751722e9eb229cb0a449"],["/posts/98662d05.html","a9e99f3216f6a399a3a9439758ce0e02"],["/posts/9a2f6162.html","4ba1fe2eb7a229db8f53201f634a72ab"],["/posts/9b22a48d.html","eea3b2a61177be647eb7762fb41ea581"],["/posts/9cb455b1.html","90be9dc1f8caa4dd005c4f04c7d80bda"],["/posts/9ecdeecc.html","11b44dc2ad8532a9e858cfbab3a86f31"],["/posts/9efd7701.html","78db7d9090d636603763ff2e65ce86dd"],["/posts/9f61c1a0.html","20ea171e61af647e2e054b9fab7e50da"],["/posts/a1de710.html","7548e2cda54f411010f2c79dad46507f"],["/posts/a30eb0cd.html","095345e0f1b43f6ed85e8e956b8d7d62"],["/posts/af1807ef.html","bb140d3e2a89bccc760dec565edd1426"],["/posts/b497b647.html","f34167e64e4136a04120841e474d8bcb"],["/posts/b4d464b0.html","331b9b6819933b07dd167e9ea9fa01f3"],["/posts/b5fb773f.html","e8ea3f3e127b551bbd2d15541dc6700a"],["/posts/b8d46b32.html","45d7dff5df7724e2755445769dcad9f4"],["/posts/c1b2c6c9.html","87c667a4efc8246537d32fab2144b8fd"],["/posts/c2111cbf.html","ba8f313d4485111e600bb7e0157f18c7"],["/posts/c316c2e8.html","9dc264cd0fe68ee55da05768e56dfeb7"],["/posts/c43e60b5.html","88f561089e66fb0506fedb1e08a32c86"],["/posts/c497a412.html","ccb04fc10348ecc87207f32e40dba9ac"],["/posts/c5de299a.html","90fb847de27cf63f527b728159ae608a"],["/posts/c70bba9c.html","61e352dcb3a196ad6a56f35a747ff7b7"],["/posts/c797535e.html","6e26f1becfa76123b8ffc7788a045ee7"],["/posts/c7a62c79.html","d422495195e8bf1fdfcf1320bc1a892c"],["/posts/cae2c959.html","e1663f8ed4ac17edad65fd8bf7f35002"],["/posts/cbebef2b.html","40dfcce707488e1b7310504e068277b0"],["/posts/ce25023e.html","c83bfc10378aab95ff0707b2cee3e499"],["/posts/d2fd4837.html","5f698eb36956efd2f8d62ca8e5398c79"],["/posts/d3233cbb.html","ac36c5cf46c09d5d5e5f710a0540a1fa"],["/posts/d3a745a8.html","b2de4b516e5682ccdac71e28e7e71679"],["/posts/d7e940d2.html","98c401a2a3a50c7cefd43946b78306f3"],["/posts/dc815d5.html","6a4cb48fe7a5c05fa4ee3d9284b87ade"],["/posts/de25b0be.html","37ee97fab5098375ea549c7a5388c678"],["/posts/e3ab6ad8.html","700c98695099f8706a78da98058a8b52"],["/posts/e5018da6.html","23a2aa132e93617c6dd77e396917e653"],["/posts/e5963272.html","a79e7b96f7590f3aa80ff08f46ea76f5"],["/posts/e624b065.html","5695cfb6053753f9ea6ccdd5fbf8cbf6"],["/posts/e7c703bb.html","221722a11432d4771bbae7f42d0062bf"],["/posts/e8f14b6c.html","a82489f6e7c72612f4777f1bfe979700"],["/posts/e91abb63.html","b10441e2012fb0f794f8866c7e6cdb7e"],["/posts/ea9a8808.html","020a65b2b4e250149069d35314ec861c"],["/posts/eb784749.html","f18f063be0cf7a861d188aa044b57fde"],["/posts/ebaf2232.html","4e17821ca3ec5df5c51f0b685e4166f2"],["/posts/ee1ed673.html","43138246bef2b5e71021d1257a47008f"],["/posts/f0c3ed61.html","6c5e98b4e97282e4cf4b2e628934f62b"],["/posts/f21e7f84.html","5ca6e3560d45b1813987c760c089db19"],["/posts/f230b0fd.html","88e783026eaab5c7a1a83b1b56e77c67"],["/posts/f663d5cc.html","a872d92564f744aa4752e03a78ef2728"],["/posts/fc04d0d4.html","b8998944ac98875757aa1a439d91b624"],["/sumire/index.html","d918fbd2d3ea34019a593911ebbfe54b"],["/sw-register.js","7af94f4860c558d58c2b8038a563aff8"],["/tags/APPLE-project/index.html","9604fec0d248d5b31008cf73afb8e173"],["/tags/BELL-DA/index.html","b22770cbf4e23ca003b4c7e40f5f139d"],["/tags/BL-Game/index.html","fc64a59081cd4701c804ebeebc58d584"],["/tags/Blue-Dahlia-Digital-Creators/index.html","5b9957bee705e6a1a9ff33fb6104bba2"],["/tags/CHUNSOFT/index.html","ba3079aafe079f6a7908516a7849a995"],["/tags/Cherry-Pie/index.html","4ab26c81ea38aac0f47b0f66f39a4c2f"],["/tags/Circle-Mebius/index.html","721806ed08ae9a74f285805694114174"],["/tags/CresCENT-BLANK/index.html","05ffc36a9763654ad9fc5588e6195008"],["/tags/Dopamine-Software/index.html","5d85b350649b899124a51e31d5b1f3df"],["/tags/Dos/index.html","cfbd577709aaf36f10ca7476d5d61a60"],["/tags/Earth-Well/index.html","4f2e82e0cf7ac13a81cfe934bfb808b2"],["/tags/Kanon/index.html","8786b10b529b21effbcf2f1169d29b9c"],["/tags/MANATSU-8/index.html","72974f7c31849f54fa5e96d5242d2c87"],["/tags/MARINE/index.html","a473390ce94bf4e98710933cc8b463cb"],["/tags/MIO/index.html","f063d28370b7d68052555b077edde092"],["/tags/Nmyu/index.html","84a461f9a5d6b253d4a1a6c2d8680277"],["/tags/O-S-I/index.html","484d4c227060ba705493d26969bcefcc"],["/tags/Omegaの視界/index.html","99887401f7dba47eb29a335f68f29205"],["/tags/PC88/index.html","6927faeae9f31d551773951c15b928f5"],["/tags/PC98/index.html","00899c10c96ad1c32651413166a0e72c"],["/tags/Perpetual-Room/index.html","46163b7a848748e08290158c98210d29"],["/tags/Pleiades-Company/index.html","f2f7eb10ad30ec457b27e824d7054112"],["/tags/Project-Twintail/index.html","f53bded6e1976d344bf1ee4925f410b9"],["/tags/RIFF-RAFF/index.html","bbe1ad296148be9cf14932693b45edd4"],["/tags/Reverv/index.html","adf709e8084ae5284dd10f06a3e902cb"],["/tags/SENTIVE/index.html","d12f444e4ed70e7f8255b25965cd1a86"],["/tags/Saihate-SOFT/index.html","3e6d84214258b2d0ac3f9b5ebe9f0faf"],["/tags/Sky-On-R-imaginAtion/index.html","6b842fd9b53545cf2b0c4edcc2336a07"],["/tags/StrayMoon/index.html","c70cc721b7a2915a6ff465b53e28df6a"],["/tags/Studio-Bu-Sa/index.html","17e88009ef6e80d808e5a2450e19d81c"],["/tags/ToHeart/index.html","a9423344ca49e0d8cb9a81768fd194e5"],["/tags/Traumend/index.html","363479f04839fbb91a68c43eeb0ad751"],["/tags/Witch/index.html","63b2528b847c03fd40ef3e57d56f9c3b"],["/tags/adonis-project/index.html","1cb90c8d057fb686473a892cd4070a2f"],["/tags/flash/index.html","f94c2ba9c83fa56c90b9232aec527379"],["/tags/galgame/index.html","85c4150e0057dfb4ddc307b2aed5dcaf"],["/tags/galgame/page/2/index.html","0e4cccc977f86757b297172563852c37"],["/tags/gal资源/index.html","72454264d5a7e1c4fb71b08e698659a8"],["/tags/gal资源/page/2/index.html","fcf800a39f194acbc4faad05f47d65f9"],["/tags/gal资源/page/3/index.html","ba152bb780d2fb1e0dad07010268dbc5"],["/tags/index.html","f745bbe0fb22467d0a2c15e1da2816af"],["/tags/rkr/index.html","03e0dbf81b3aeb561eddfafce23b7e50"],["/tags/team-eye-mask/index.html","3cae942e54284d5ae6ee15376edec87d"],["/tags/ありすくろいつ/index.html","f07c1dbbd562630cb27e1180943d7726"],["/tags/いつものところ/index.html","910f9e8934e35cc59f5189c2e6e7cb70"],["/tags/きつねみみ饅頭/index.html","8ce66592b5eceef26e0e3f684824dd41"],["/tags/ねこねこソフト/index.html","2f8d217e5570ebcf9ec796bdf1c788cc"],["/tags/ねこバナナ/index.html","f7f36d322507b5315d8ed3802a8bc442"],["/tags/はちみつくまさん/index.html","cdee64fd5d272457836524931b98d1ca"],["/tags/ろりちせ/index.html","67360999f6af33cb841705d25b9c3417"],["/tags/アイル【チーム・TATU】/index.html","270fb5fcf357d0aebc93bbd6dbace6f9"],["/tags/アークシステムワークス/index.html","c92f145c7d3b038ee726e842319a0274"],["/tags/ブロッコリー/index.html","b6524c8939fcfed00f1d09a5e5d26563"],["/tags/乙女/index.html","dc6e88085be7f72b6f50e2f2825579bb"],["/tags/停产/index.html","5b433a98236a9ffb95579327ab7f404f"],["/tags/公告/index.html","7b9369ed4ba2611be92f59a412091d5c"],["/tags/同人/index.html","90406e0052886bb73beb3eaa1b36df73"],["/tags/堀井雄二/index.html","b2a5c8368067cf56e853e54886051a66"],["/tags/外海なおき/index.html","5356f068a50e45cb4548c1a873d5df17"],["/tags/桃野衿/index.html","9f03844e6c14f9f87db9c88fee0bd847"],["/tags/機械式少女/index.html","03c3ce5938ff553effdbdf5631c01489"],["/tags/水仙/index.html","d228cb0df4af5c96bb7db1557dfa0d9b"],["/tags/汉化/index.html","851cb62e595e3ccb9e98d64e87951859"],["/tags/片冈智/index.html","6f8688913809135c94e936bc0a290b5e"],["/tags/片岡とも/index.html","38a5cad22651a49188be17318ccc429a"],["/tags/牙の刻印制作委員会/index.html","58d217e8459919f3728de5d4c867798d"],["/tags/牛カルビ定食-FLAT/index.html","84f027e63b25edc53a3d09cac01b520f"],["/tags/牧尾屋/index.html","8974ae4eea541b66661e47a62c836bf0"],["/tags/猫猫社/index.html","1d1426b93e2db39fcdd82a4890427955"],["/tags/王宮魔法劇団/index.html","87d02ef9c5031b9b2dbda7ec1aeee8c8"],["/tags/画集/index.html","f519b2a1a3287571b4856801886e6fc7"],["/tags/索引/index.html","fe834d8f293a6dcec4332e28fd10565b"],["/tags/自购/index.html","e17f5c40ee6572ce68c47eb547f54912"],["/tags/郷愁花屋/index.html","497f9ce4d693f592f37d436c2ecf9662"],["/tags/閂夜明/index.html","90a23fac2eee0004213cf8ace62251a4"],["/tags/音乐美/index.html","d99bd16c1af2d96bbcd597b93dacf60e"],["/tags/黒†救/index.html","07fcbeba1a3a962593229a94bc6469e8"]];
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
