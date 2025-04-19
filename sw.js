/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","1e70dee8163d9cdf9a4b1a38949fbfe5"],["/archives/2024/04/index.html","379c326d2499d8b7f431677835c7b4b6"],["/archives/2024/index.html","f6db74341acd98253b170ee4dc0ccfd7"],["/archives/2025/02/index.html","3a0ee38dd72d8e7c368f19651a4f9e76"],["/archives/2025/02/page/2/index.html","987e01f6fc51c788a03d498243ca381a"],["/archives/2025/02/page/3/index.html","9b72737f5db975382bcad8c318a314cc"],["/archives/2025/02/page/4/index.html","67fc96975f2a78fc1c5aba337009f1db"],["/archives/2025/02/page/5/index.html","b144a055d53356f25b83389ac38ff322"],["/archives/2025/03/index.html","e2f5e32b320919c7dbe4f7df140c8766"],["/archives/2025/03/page/2/index.html","138a3a00593bba71df7bb21a1faa1063"],["/archives/2025/03/page/3/index.html","f5df0f5c91e69f86cd1406656524beff"],["/archives/2025/03/page/4/index.html","3655e91ede43efae02835e825a26dcbd"],["/archives/2025/03/page/5/index.html","783a4e8f239a30a7db021afbda0011cd"],["/archives/2025/03/page/6/index.html","74c8e91457e038d3599428c5ee8e4668"],["/archives/2025/04/index.html","5629aabd37ab5c4254b21acd111faec4"],["/archives/2025/04/page/2/index.html","d7aeb3ea3da8b70f1a2100b650fc51fb"],["/archives/2025/index.html","5c9a861d51199ab62a021ecbdeb7b887"],["/archives/2025/page/10/index.html","f64d0c6aaccbd7bd59880c956ccb61c0"],["/archives/2025/page/11/index.html","8bf39c542bbad631b0c420eadf37c6f0"],["/archives/2025/page/12/index.html","4014a87a7f572ad3eac06dde4866234e"],["/archives/2025/page/2/index.html","d7b8bb684a196ddde4384a57af1ca204"],["/archives/2025/page/3/index.html","5444942b62465bf18e30c5b2e70caec2"],["/archives/2025/page/4/index.html","39e09551cddcecaff982425b1e9e5eaa"],["/archives/2025/page/5/index.html","b7dcc8bb8e8f486241becd5a158a8006"],["/archives/2025/page/6/index.html","80d169bb22c12cedcb523146bcd06f73"],["/archives/2025/page/7/index.html","a3035f004858ac136287a965c640dbf8"],["/archives/2025/page/8/index.html","e475f9e3b1dbc732b65bfd4cfb12f68e"],["/archives/2025/page/9/index.html","4df60746bc77a9cf53aeff372e6d72c8"],["/archives/2026/02/index.html","3ea1e0578d00f28d3f9a049e12171419"],["/archives/2026/index.html","6d2d18591a6c2a49344510f3fc865ee8"],["/archives/2825/04/index.html","f45759932f92c666a1210821ee070c46"],["/archives/2825/index.html","f8121bec437da4de758e004b82e95b03"],["/archives/2925/01/index.html","648e7428a648eac34e470abeb8491daa"],["/archives/2925/index.html","60f1b5a932451da9dafcf05ceafec0a9"],["/archives/index.html","dbdd233a99312b5834539a7bd2cd1a9f"],["/archives/page/10/index.html","8edc435ac5d24ae3881311548cd6b085"],["/archives/page/11/index.html","0bed83cf855458b9518bce394d7de8c7"],["/archives/page/12/index.html","f25fa3f30a0051eef89ffb6a288b21c7"],["/archives/page/13/index.html","dd810db5b4f736bc118b1728f5ca8be6"],["/archives/page/2/index.html","9428cc2ca5790b663bc02347525cf9fa"],["/archives/page/3/index.html","14c86fb8bbcb85be7c89f554442057c8"],["/archives/page/4/index.html","2f740caac0c583e33973a995797263bf"],["/archives/page/5/index.html","59d262b6498024f2c074ca46b52c77dd"],["/archives/page/6/index.html","04e680e8f2a4f17d08ede09af7e4d95a"],["/archives/page/7/index.html","a9e44c971dbaeec88363996d3b00b55a"],["/archives/page/8/index.html","31d65402aa2f0e448eeffc9d013da1a2"],["/archives/page/9/index.html","cc9b0f4d9a25e938be2abad0960a629b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","e89b3e634d19b598ce6eafcfc3eae946"],["/categories/galgame/page/2/index.html","be5738bf9126535c9b93c3d349de90bb"],["/categories/公告/index.html","e426ebd494afbfa174a85874fd0b2e1b"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","5eab62badc66053c5b92eb2efb9b8f2c"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","3d0cd74e1729bd3c84fdad94184abc1b"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","5e7038f802110c4e2028c089c3b0cd9e"],["/page/10/index.html","6910300ece89d949f2cd6d5dbc6fb5cf"],["/page/11/index.html","ba78bc3fde072552182f469aa6a1071f"],["/page/12/index.html","4a268066772d609f80f6e32e7160b71b"],["/page/13/index.html","8ef615298e77f659a849612fc75ac7ae"],["/page/2/index.html","fa4f48a6a534b2e01815061bea727030"],["/page/3/index.html","52293b06ad7b237512b24753f1ce6c80"],["/page/4/index.html","6eb97454dc010ffef7081fb28eb918f2"],["/page/5/index.html","24f8e179f4a37e74ba8a9b0ef6f5e34c"],["/page/6/index.html","c8c72342de78d4ebd73a3c5bd85ad4e8"],["/page/7/index.html","27c3eabd485234b009b44f192037f4fb"],["/page/8/index.html","dee9e7b46cde0bc7cef2ee8274118dc2"],["/page/9/index.html","80eec610fc9715315817c1ef8046f380"],["/posts/10c9dd98.html","a9d27aa6998b5728ea415bfe02ca0623"],["/posts/1295b569.html","4d4706fb2922005a368de2bc15bfce5b"],["/posts/1370342.html","94628046ce1171cd1d9420d41d42c348"],["/posts/15ef14c2.html","b6332de328230b1ae3e8c42cc4eb2bdf"],["/posts/15f3959d.html","77102cfaa41399636d3d326c22ef7fdc"],["/posts/18ab785d.html","fee5119e5d3407b3f7a0d8f4cdc52402"],["/posts/1d59b71f.html","c0866e8642e1611a124cee5152c9c846"],["/posts/20b3f3a4.html","4a87c943770078bc2693b2a7418ab6e0"],["/posts/245f1c7d.html","cdbdb559289dfa60e800d5d03d4c531b"],["/posts/252658f.html","8ffa3cffdb078617da51d8c63865fc08"],["/posts/28397adc.html","41897d1f543a054e7aa7ec5af59c57ef"],["/posts/2ad07f54.html","1f1e6cb6a31416026fb5e0e765107a2c"],["/posts/2b38bce0.html","1e53fb7304aa5c274baac12279579ae2"],["/posts/2c0a6836.html","8566e16769d9f21d33584736e9d6bea5"],["/posts/2ce39bcc.html","49d0587aa1be439c6c5a3ab109184371"],["/posts/2cf620f0.html","000e7e775c89aa7441e45f9b31b5d047"],["/posts/2e30fd6d.html","eb7de8566d3bcff8ad708e7c58b5ea03"],["/posts/30a413ad.html","e4fd6adba0edcc9ae0c8926bcfe8c1b3"],["/posts/34292736.html","06c76ed8935bc3fcfeb00f8c162a75c7"],["/posts/3468cbe.html","872975e3a488f7c61f9ceeb2ab876330"],["/posts/39176dc0.html","e985e415d0ecdaf914f08ecb9d981641"],["/posts/3e118dbf.html","da4cec9d529463929bae1c1313c42aac"],["/posts/3f7d823a.html","9a0e1b2fa5ef11cede4abe6510334a70"],["/posts/3f978819.html","2804dbcec857351cb48d58bf5c3b457b"],["/posts/43945723.html","ca295d252e4f081956defe036c747c1d"],["/posts/44124a6b.html","c4dc75e33ec0c882317bd8e61aa1b26b"],["/posts/47abb61d.html","069288df4294f0cb22f04dd4bb003e0b"],["/posts/4b689be3.html","4f1163a328a3d70d3cb4dd625ed54662"],["/posts/4cf8423f.html","47bded864116b9f6682c3868d976ff03"],["/posts/4dcf85c.html","b6038536f735b5a5beda7c2fb3f12669"],["/posts/500cd322.html","8664de7ed8cb7dddaa58954fe001333e"],["/posts/51c9b1ff.html","aac6999974113e67b18134805f4da3f2"],["/posts/52b5b3c6.html","71e46662760a808b61529ab6cc4a5836"],["/posts/558e1f30.html","7decee1d97ad492bdc3294b992073748"],["/posts/5d8bea92.html","ba462b510fc604ebde7051043ccc6353"],["/posts/5f6e0c59.html","f887f46c571045d8c422c15d839fd7a6"],["/posts/61a63a84.html","8ee50618b02191fcb145f4ab5b00d6fb"],["/posts/625ab7bf.html","e7e2773deb1659c4eb801049dff6e2cd"],["/posts/6336a2f9.html","d597f8afc7363e36b3e6c1c3d7beb546"],["/posts/6432d61a.html","5dd7ceb4c354e84a38091dc656324ba4"],["/posts/6515f032.html","e8bb1d4362445e6777d879d3b69d464c"],["/posts/6720ccdd.html","a63d0de545e835e1a8388cc50a9c6096"],["/posts/6a4b5ac8.html","83ece3cb430ceb419268c772cc0c2b23"],["/posts/6aa4177c.html","f70d934a29dfe465e49754e3681e666b"],["/posts/6b15f81f.html","ccf8a915774b2d37d8c0cc363f784d3a"],["/posts/71131d34.html","ae0eaef724e2a3edd808751c2fbcbbda"],["/posts/742fd48d.html","21e24f82cb6c3056de43ff009d21d8dc"],["/posts/78a8a8d3.html","ed8fa84e9e75224c38d5191ac652b935"],["/posts/7a5ef3d0.html","430024bf6a984734e9c0014345b582bb"],["/posts/7b41e1ac.html","19f5fbe3d9be29aa452553804ca32c21"],["/posts/7b51011d.html","fd973ceae6951f97eadd2a63d80177c0"],["/posts/7e3aa3e2.html","2d1bdc5cd16fda351c2e127d9a4ee8c9"],["/posts/80fe2691.html","5c58b463e17b705ef11be5da891cd6cf"],["/posts/81ac52e9.html","303f5f8f372192192f64de33530cfdc7"],["/posts/82332d11.html","c4c75cc576b563da680d3e69041775fe"],["/posts/8486f6f9.html","09628b9c3291feb584fbe3a12f4b4b1c"],["/posts/849b40f8.html","87cf854f7170c955bc354596f3ec2e36"],["/posts/85c51d68.html","eeb81db70ed0d1c2bae2e0e1cafa6414"],["/posts/86a6c500.html","7a7ee00a4f5489b286c8866970491586"],["/posts/886f8d3.html","6564db198b682e2675c202999c893cff"],["/posts/8a7cba10.html","66b0ee00a432dfb4d5a728c2f835b371"],["/posts/8ac11b41.html","bada0f55dfe4dbd846b436abf0b198f5"],["/posts/8dd520d9.html","d582ccfc168772d05370cced87313b1b"],["/posts/8f555654.html","88a554dedefb9f14a5e175e6988ed3cc"],["/posts/92a980c2.html","c0be83f9b6fd26ecd0bd050bf6c1e4c2"],["/posts/92ce16.html","f17d860325b581926e1fee132c0e83d1"],["/posts/93e9943b.html","970d41120238600fed0bad2969665ed5"],["/posts/94d3c794.html","52fbc2cc590a38b252d53f510dafe004"],["/posts/97f50eea.html","236272db4fe8b1fb3f3da3bae28179e0"],["/posts/97fca8be.html","6232a7729aad2f8f7169aecb6db6c98c"],["/posts/98662d05.html","33a0b0a924861976ec2e3867cbfec3d8"],["/posts/9a2f6162.html","ac711dfc36d9e6aaff2a4bf0c1a5ae5b"],["/posts/9b22a48d.html","59c5eb277a00ee52d4b2d0fdc7834bd9"],["/posts/9cb455b1.html","c783f34fa2cc3f8f8221b0bca5fab52e"],["/posts/9ecdeecc.html","2e9fd616bbbf1b403d807c1aa37fc862"],["/posts/9efd7701.html","cef7e01ffc1f48ec42e4877430d7fcb0"],["/posts/9f61c1a0.html","9f1da07c88965b1139404c6cb59cc8d5"],["/posts/a1de710.html","e16b127c6c0daf070822a24680cf68b9"],["/posts/a30eb0cd.html","2bbe0f443c20866afa704d69604ba7e3"],["/posts/ada3f440.html","5dd8ec5e7171b4a2d12de88dc823f248"],["/posts/af1807ef.html","f0649a5743d5e7e8e582c48cd47888e6"],["/posts/b497b647.html","01036f3317bfecb5f0253e2e89b081f3"],["/posts/b4d464b0.html","033b431691613161717e0a64d2a89a3d"],["/posts/b5fb773f.html","6083ebe19c5417d5ca5ef68ee6b0e30b"],["/posts/b8d46b32.html","6d02912b6191a876f193e11271d3e1eb"],["/posts/c1b2c6c9.html","879bcd5bb6919d1c6c78f0a20f0393a6"],["/posts/c2111cbf.html","58dc47f1a4342cc7cb5252c8f793a5d6"],["/posts/c316c2e8.html","7ea89bc783a1ab69f975c4340f1d4f50"],["/posts/c43e60b5.html","d3e2bd4878cbe1e475ecd866bbe616b4"],["/posts/c497a412.html","ac951d5afd988296b5d941d785a29ab5"],["/posts/c5de299a.html","aa85f0d33965d81bfee183f83507af62"],["/posts/c70bba9c.html","e07e6c70092082eb7c31f09ff9cb3771"],["/posts/c797535e.html","5e219f0cde73c5f3791dbd96d079f24e"],["/posts/c7a62c79.html","82007efbf917d6432d59234de73044ff"],["/posts/cae2c959.html","0e4fab8b23589b84f27d0989c6ed44a9"],["/posts/cbebef2b.html","5ff8b7791c44fa94364612a65b2c6a01"],["/posts/ce25023e.html","342788fd61c59d7ad73d94597544e002"],["/posts/d2fd4837.html","c1e27e18cd6d74eaf0b35120312ad0d8"],["/posts/d3233cbb.html","8842220c980a765a09c6f92f9d4893aa"],["/posts/d3a745a8.html","2299dc807024708d9efd50184b7785a7"],["/posts/d7e940d2.html","82f5bb30f87a655ca8bd30fdda57d23f"],["/posts/dc815d5.html","27cb7a2856353195933ad1a590d475ff"],["/posts/de25b0be.html","fe712af1ca1bd8d8a22f04eb27479ff3"],["/posts/e2623b4e.html","00e17500be5772153d54d64527de428e"],["/posts/e3ab6ad8.html","1a5990e8caf417d6f1ea323e2db44255"],["/posts/e5018da6.html","efb0b74724ffa20891105a3e93cd3c6e"],["/posts/e5963272.html","e401c265f2295020a915b4280e9a28fd"],["/posts/e624b065.html","41fc889638ecc1b2c09c11dcbec5fecc"],["/posts/e7c703bb.html","845cd6383c7ab9928c6a5137e86a8774"],["/posts/e8f14b6c.html","d96d2b8baf241d49f33c4d39836722a1"],["/posts/e91abb63.html","d00198271c396eb1265fc64103fd9e18"],["/posts/ea9a8808.html","85bfd62ed05a4ba0db5bd3f3c01fe000"],["/posts/eb784749.html","a041dc6246cc321196b723aa08859f02"],["/posts/ebaf2232.html","88086c56e7c04c18ab1ff913edb56c9a"],["/posts/ee1ed673.html","945407df19bf8765612164737c4773b8"],["/posts/f0c3ed61.html","dbe46adeb3dcf78652dfb9d02aadd81e"],["/posts/f151ff43.html","1366e5043759c7b6c56aaf4b8db8a6c5"],["/posts/f21e7f84.html","ea132e1296f3d91d0f0c92cff5f94b43"],["/posts/f230b0fd.html","a771c57992b2d449382cc152651ae850"],["/posts/f663d5cc.html","ca55d2cb9b4f531a946d09487a0a194d"],["/posts/f730ad18.html","1b52a3423e921df4abed0cedd12bfb99"],["/posts/fc04d0d4.html","ee648859d497c60cf6ef5d15112b8211"],["/sumire/index.html","b731dabf0da251fbd2a3ee09c58c4da8"],["/sw-register.js","340275d97d9e8fee365e6dca753ab298"],["/tags/APPLE-project/index.html","f10fe28858ac0c2591800bf4673e44ba"],["/tags/BELL-DA/index.html","415dd41dd83c8180c52e72650a448b44"],["/tags/BL-Game/index.html","5ccfe2128b070436893fb97ee172662a"],["/tags/Blue-Dahlia-Digital-Creators/index.html","bff0a470a704afbfc9abdb149023cf0a"],["/tags/CHUNSOFT/index.html","15ea8fff865a7b314770097f8886b425"],["/tags/Check＆Stripe/index.html","40b25778a00fd440c48199ca2f750b50"],["/tags/Cherry-Pie/index.html","b58a14000ed87bdb6b2b123d64fb6927"],["/tags/Circle-Mebius/index.html","d3d139badbec1c97c449249b19fa7e67"],["/tags/CresCENT-BLANK/index.html","1f16dab357ac09006c14d415bccf09f9"],["/tags/Dopamine-Software/index.html","7af6b2b4409a257001ee10b2ba1f1919"],["/tags/Dos/index.html","ddcb9cc58f998b0e44ce6409a2ead8f4"],["/tags/Earth-Well/index.html","b8373f98b39cea9d67f93d720ba4caf8"],["/tags/Forest/index.html","737f063b34d1dbcabbfde81115be4df5"],["/tags/HaccaWorks/index.html","5b8108b4b1972dad09d003615a4b24a5"],["/tags/Kanon/index.html","0b90ada344c0c71ab10369ca216d655b"],["/tags/MANATSU-8/index.html","5beb6664b92056dbdc684e49f6edd9b1"],["/tags/MARINE/index.html","6f126e7de9dfe4878772d05ce39dcd23"],["/tags/MIO/index.html","89c05021960bd6c52d0104cfb92f75e2"],["/tags/Nmyu/index.html","78abdf9ced8df9c1bf3f7c9ef9bdc664"],["/tags/O-S-I/index.html","394e5f91d088a682ce0a87e38cb1327a"],["/tags/Omegaの視界/index.html","214d1c83997c5d82d3a0bc9384d6294f"],["/tags/PC88/index.html","2ad4a9526e448fb6350e8f601c65d119"],["/tags/PC98/index.html","bb952b61d08bdd793226e94cfc987a57"],["/tags/Perpetual-Room/index.html","d7e3257bfab5d610537d35730a9eb85c"],["/tags/Pleiades-Company/index.html","7854726851d8464b386155b86381660f"],["/tags/Project-Twintail/index.html","c5af97911f41ae0f3a279750ffeef055"],["/tags/RIFF-RAFF/index.html","55644eee5fdb71a670ed9801f015902c"],["/tags/Reverv/index.html","841ad6f1cc2adc79d223962340c3c0aa"],["/tags/SENTIVE/index.html","22cd8b1b5dafe7177780ea54f6c94383"],["/tags/Saihate-SOFT/index.html","20ef06d5d5806dba27c0c5d544f15a1c"],["/tags/Scrubbing/index.html","318a8fef8c40a13b57812303b542f39e"],["/tags/Sky-On-R-imaginAtion/index.html","670842b43e1df44964516887c2bf0a1f"],["/tags/StrayMoon/index.html","d8c28bd9d5b969b8c363db8cb5da28de"],["/tags/Studio-Bu-Sa/index.html","0fafb04bb6587ea3a3b0081eb05bd2eb"],["/tags/TRANSPARENCY/index.html","4aa9e30eafae0338d08fcf083a1a669e"],["/tags/ToHeart/index.html","87b37329761f193b681c1aa2750c46a9"],["/tags/Traumend/index.html","f1ff9ab9a89674050b327966a05cf5a5"],["/tags/Witch/index.html","dfac1c179bdfcef077fd8e9968ba5363"],["/tags/adonis-project/index.html","986740feba698fb63524106e0b939135"],["/tags/flash/index.html","cfcd2988ef5144cbcf37d33af83c05ed"],["/tags/galgame/index.html","f2458145a3cae00a929e89b289d3c041"],["/tags/galgame/page/2/index.html","aaad7817a2f0b10c3339f5dc0ce02a49"],["/tags/gal资源/index.html","23223b951039f0af0ba4e2cf205c41b9"],["/tags/gal资源/page/2/index.html","943deb9d44f619018f4a41ac56de5a61"],["/tags/gal资源/page/3/index.html","5c39213800bd095f59e5f10fc3158246"],["/tags/index.html","72a66f3565dce313fb3f6986be42a04f"],["/tags/rkr/index.html","3fddb309498f4f1df6fa871e7d10055c"],["/tags/team-eye-mask/index.html","f1205278275616fad99cdd3622e01117"],["/tags/ありすくろいつ/index.html","827b0a524ef846a5bca3599ed9c2fa25"],["/tags/いつものところ/index.html","59794e53380b22c31be16adde20b16be"],["/tags/きつねみみ饅頭/index.html","c63f3f1d02e714821d4cbad8a75717bf"],["/tags/ねこねこソフト/index.html","888b56f87ee94ff5e755e065b2abef26"],["/tags/ねこバナナ/index.html","492caee74c79d540fb2a1ec7005f4174"],["/tags/はちみつくまさん/index.html","fee118a870faa5b2bc784c239dcf0968"],["/tags/ろりちせ/index.html","4a8b91605aa296aa34431215c7459cee"],["/tags/アイル【チーム・TATU】/index.html","53ee5cae160e607ebd510fc77bb46e54"],["/tags/アークシステムワークス/index.html","70c7397273e1ee6fa41f4d60e788aa6b"],["/tags/ブロッコリー/index.html","7f1f7011f82b32dab9006bfcbf91d433"],["/tags/乙女/index.html","71ee6257f35e800f642eb45263ff42e1"],["/tags/停产/index.html","e7244ed7317381d83e818b004ac42283"],["/tags/公告/index.html","bd103c22d99ea84979042bc913a49649"],["/tags/同人/index.html","27df8fed13ff0094aedbaa9f48c7d615"],["/tags/堀井雄二/index.html","0757f30263e0434794a2836dc2e3cd70"],["/tags/外海なおき/index.html","75eb2ad26ecdd482d161ab08790ae444"],["/tags/桃野衿/index.html","1153be326557d9b3705618ec335d352c"],["/tags/機械式少女/index.html","90880b6a4630c2dc4da5659391e49023"],["/tags/水仙/index.html","2b8d0bd6058c7b356c100d2ef65edf81"],["/tags/汉化/index.html","391a25ccb99955f2fae3b7c4f10f6546"],["/tags/片冈智/index.html","17491afac53d467f7ed7de915619c7ae"],["/tags/片岡とも/index.html","fe5fec637cec22cf18f42a610e235122"],["/tags/牙の刻印制作委員会/index.html","33fe63dfe088d56d779c8b1bfec9e832"],["/tags/牛カルビ定食-FLAT/index.html","57a3e94b1fdd4b2314263e522ba08592"],["/tags/牧尾屋/index.html","00b72cffde6653eeae093cce9882f90a"],["/tags/猫猫社/index.html","1b36b78f265024e6e373089f7feb8c8e"],["/tags/王宮魔法劇団/index.html","ec0648c96f0c7ed6b5a706735cc79f23"],["/tags/画集/index.html","273a89f25d29792016fac0bce4fd64d5"],["/tags/索引/index.html","ea6a1fbda29ec285a5e31cf450ad2870"],["/tags/缺失/index.html","655b3e803b8059cbae029197970f1c73"],["/tags/自购/index.html","b46bfdf3c72937ea2c38c97647499c6a"],["/tags/茶葉☆姫/index.html","09a8077f9e28b6c31336c979236ed896"],["/tags/郷愁花屋/index.html","4744f7804c34e5c8b468ac7f106b1c66"],["/tags/閂夜明/index.html","8d8851cbec1ac6564a4ebde60085cd8c"],["/tags/音乐美/index.html","db9afe06c2c83642da05adfc7b9bd449"],["/tags/黒†救/index.html","5d2728644222510be25a8ae580cc7789"]];
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
