/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","953819523371a7e2fc29dae30c51d0e1"],["/archives/2024/04/index.html","280229ca43d4c24f815db0d8f8ec9627"],["/archives/2024/index.html","1f46934fd6bcb821c424b4b3da99c103"],["/archives/2025/02/index.html","d7d8b8214da21ceb5b36f9e6f1a17250"],["/archives/2025/02/page/2/index.html","2af41aedcd990a00275379586cd39524"],["/archives/2025/02/page/3/index.html","523d677d030a7163cc2ab1e3d9fc520c"],["/archives/2025/02/page/4/index.html","e88fe1eebd9aaefc5507a8a8f17c12b9"],["/archives/2025/02/page/5/index.html","8a73329d66da5da28367c47f7d805779"],["/archives/2025/03/index.html","7f198365007715f72b03ab78412346f0"],["/archives/2025/03/page/2/index.html","ba3cf7ff24ae4964122f850b07bbd41b"],["/archives/2025/03/page/3/index.html","b3a3bc162f1f38e084ba83634b87fa47"],["/archives/2025/03/page/4/index.html","795825238fb76ceccc806b083abe8da1"],["/archives/2025/03/page/5/index.html","ce0ec23664c8f4c665e5629f22585408"],["/archives/2025/03/page/6/index.html","c4b8c447cdb73f919cecb8cbb7eb2ee5"],["/archives/2025/04/index.html","2c1ea34a67ccf59568bcb0516bfbdf30"],["/archives/2025/04/page/2/index.html","353b654da81ba9d946dfab491e2e58e5"],["/archives/2025/04/page/3/index.html","4ac4a9e5dab9c56f849724d79ca6b697"],["/archives/2025/05/index.html","3c384f0eab23922f9d3be0e04b1c353c"],["/archives/2025/06/index.html","df7362330a195ea2f9e9f1f4bf77b2d8"],["/archives/2025/index.html","be57eef9d2ee837308a9a1838a8e0516"],["/archives/2025/page/10/index.html","72dd9985117fc07ed98cfebd79f680af"],["/archives/2025/page/11/index.html","c6d4d303fe9776903757c3d63d32429a"],["/archives/2025/page/12/index.html","66fb73fca1ace0027f8234d2d8814e11"],["/archives/2025/page/13/index.html","f7c5577db7048f4ef27b3d682c139d86"],["/archives/2025/page/14/index.html","0880b2d8911e0ba56a55be59efda6f2a"],["/archives/2025/page/15/index.html","d77fa62dc9fee905fd2ac98751614f4a"],["/archives/2025/page/2/index.html","88a05b89d77bbf41a5b475f38e0d9827"],["/archives/2025/page/3/index.html","90a8bed7fc04f5cf15f0c634d1402c6f"],["/archives/2025/page/4/index.html","59faa624f1459e8f4b3a63fcf7b8926b"],["/archives/2025/page/5/index.html","02124c6ec10ea2deeffe947f7d00de69"],["/archives/2025/page/6/index.html","cb2fa019689f50ac5abf67901c4ac0f9"],["/archives/2025/page/7/index.html","9c662b935bde7314a9821d3eb318304f"],["/archives/2025/page/8/index.html","a579762c1d5d3b5fb12f0d50d05a0703"],["/archives/2025/page/9/index.html","2948d324477c5842647106720e1771f1"],["/archives/2026/02/index.html","c3e2c47cdd11ed8980c4e28b8198b22c"],["/archives/2026/index.html","e7586d9b88f4134f261a4a43173cb08e"],["/archives/2825/04/index.html","819f34ad424c5fe4b2550b2b97632367"],["/archives/2825/index.html","f22d33fa784545a400a88af80497240b"],["/archives/2925/01/index.html","2425402cc4f81309e2b0f2a5c032c8a3"],["/archives/2925/index.html","9529de82e97e289958a52d859f5bc840"],["/archives/index.html","d03317b7507973cd82e82a029b45bdb0"],["/archives/page/10/index.html","95c76a51ccc29ea12f7b8a3158c611a0"],["/archives/page/11/index.html","b1557abb1e1f87321ed0c51f5554cbec"],["/archives/page/12/index.html","26d26c9d78354c755f59e63d70237c76"],["/archives/page/13/index.html","4730e256f3cf7cd9f92074b413b253ed"],["/archives/page/14/index.html","9d2e28b05ebba1fee1ccc944d90eb32c"],["/archives/page/15/index.html","8d2a025ac88db79f4fc1fe2b89d0f96a"],["/archives/page/2/index.html","3fa5343cb5509138072ecaa541b27402"],["/archives/page/3/index.html","e756845a8e3d188848bfd650d6e10da4"],["/archives/page/4/index.html","f5be178ce58588ded3b467a86bfec14d"],["/archives/page/5/index.html","4cc627bcbab0c03033e5775126fc1742"],["/archives/page/6/index.html","a7b3305230fdb6ae3fd32211df4b37c1"],["/archives/page/7/index.html","f21dc3eda4f158522a22d8f01cf54257"],["/archives/page/8/index.html","9a651bafb7dae1b8122cf9bf44f78bcd"],["/archives/page/9/index.html","1d1f869883004d7e0966bf767e7c457c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","089453f8874c0d25c83a599fef09e349"],["/categories/galgame/page/2/index.html","bccd0976ebe58e828dfbef1c7c2c1ac1"],["/categories/公告/index.html","c44a05d566f1ac714bd48af5f1901f3d"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","07ac433ccddae30e3d966941badcf049"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","f66b316023d8465352062f543099c6c1"],["/page/10/index.html","9a8cebe1683f8d2c0de94bf85139f24d"],["/page/11/index.html","87984ce35ad8f297d3f6e82283bc387a"],["/page/12/index.html","625a822346d04998ca37d2a7471b2cbd"],["/page/13/index.html","852163f1216abe852893b6eb8983cfcd"],["/page/14/index.html","d46d4078d61f0955ede6f8aa1b5083c3"],["/page/15/index.html","bf984cbfebb112c9189f1737254b2f9d"],["/page/2/index.html","e5572dd6f87905066365df87f0faddef"],["/page/3/index.html","c769f9e40850ac8941aecb5d9e6f7bc8"],["/page/4/index.html","7726eda85e715171523d9ee6d482ab64"],["/page/5/index.html","af1b5141050cbf1d688f2ecc7eee9cbf"],["/page/6/index.html","4faef4eee28a89830b4fd823be6c97b5"],["/page/7/index.html","427f8b4786dfb55a88c26ae1827e3e18"],["/page/8/index.html","cc1f0670a849920dabf6c1f16aeab240"],["/page/9/index.html","fcc4734b5f751a13921d0be727e72f5a"],["/posts/10c9dd98.html","9aa99d93b612ffa6dcc00fab6b1a8e46"],["/posts/126ebb99.html","3f2d31339b91514752a5df067b42a753"],["/posts/1295b569.html","c35b601ae5e5eacffd2143facdbe2185"],["/posts/1370342.html","b99e06184ff4c53d85c03507f04eb46d"],["/posts/15ef14c2.html","0b6fd5162a993c5b8619a00329ea6c90"],["/posts/15f3959d.html","47938fd8573113278e9ea5bc7bc20be8"],["/posts/18ab785d.html","f06a35b3a66e1b429832ee94f9a8a837"],["/posts/1d59b71f.html","63045e10ecabc346f9c261e3d98571ae"],["/posts/20b3f3a4.html","e699791e73f7b4fb6596fbd8c3b097ca"],["/posts/244daa7a.html","8ffd872bf891e2133f0531849cdd6b26"],["/posts/245f1c7d.html","490c34b740021081f61fbbb9e162c9a7"],["/posts/252658f.html","9e4e4cf6a08dd788607ca3870797b157"],["/posts/28397adc.html","3c2d50f58dc8cc8126fe8809071c8f8b"],["/posts/2ad07f54.html","326c6deac27aafbb2fdd225b3f923e07"],["/posts/2b38bce0.html","5493c2314b4fec869e171f07fb49b3ff"],["/posts/2c0a6836.html","dc1908884df1ee96eb0b9afe1d4f6f3b"],["/posts/2ce39bcc.html","6e2db58a7d2014af28b7a1f59ab2b24f"],["/posts/2cf620f0.html","cc51aa2a435362f5cb5623a3af2f075b"],["/posts/2e30fd6d.html","aded13d1e2fddafd1243ced565e8dceb"],["/posts/30a413ad.html","7c378fdcd8dd2d873340d646f8e7beed"],["/posts/34292736.html","fc80c8f82961941c9d8aac2dabebdff1"],["/posts/3468cbe.html","c3b48dbd29ddeb5665b6d716683a3898"],["/posts/39176dc0.html","dce4bfdd5c300fac471c4541a8af1db7"],["/posts/3be6a165.html","929f9722f0c5952e6b2941ce59f95471"],["/posts/3daf73b4.html","19ea9d9cda50023b1619dbec91f6ed31"],["/posts/3e118dbf.html","9e31a722393d83ad4b275d84cb9013f4"],["/posts/3f7d823a.html","eafbca3498dfc43fd684de0859083965"],["/posts/3f978819.html","294ba409eb7b250555daa941a7b4c3c7"],["/posts/41dac80e.html","eec7901c4c7eea49baf471cc2933343f"],["/posts/43945723.html","0f5ade4ad1eda03fbeafd68f7c21bd84"],["/posts/44124a6b.html","ef06cebffc52a02baf04594269357f05"],["/posts/476a3006.html","8277783fed1706df22607a5af4e46eb7"],["/posts/47abb61d.html","572f2d50087bfd7c9b3fff3925b395ac"],["/posts/4996478a.html","839b0d21c1d7b146e4d9274a6c989c06"],["/posts/4b689be3.html","8481fd2eb6db9ef3b8760bf3bf62e998"],["/posts/4cf8423f.html","327a70bd7bb6f74653e638c8b30c4ec1"],["/posts/4dcf85c.html","efff838d617c1a0c995f34cef52e4ef1"],["/posts/500cd322.html","6669283494e674dbd71badce6ef98d58"],["/posts/51c9b1ff.html","187a9971b52f39dc184f687eee26d99e"],["/posts/51ce68e8.html","7744dcc4061259d8e78190a42ac8195a"],["/posts/52b5b3c6.html","1b2de846c3e25e7b147d5102c1d6685e"],["/posts/54f496ad.html","ab724e0da785be3489638d5693474488"],["/posts/558e1f30.html","dfd4b0b1d05f74c30ada8622a6a15b86"],["/posts/5d8bea92.html","377e3007ea671eadc8d53137c4b7d2a7"],["/posts/5f6e0c59.html","5df522e4de443a3ef2558f232db227dc"],["/posts/61a63a84.html","d2860d54d2372f9ed72163189dd5ae3a"],["/posts/625ab7bf.html","626bf7403e3a0bf59e5554cb4150cef9"],["/posts/6336a2f9.html","e2fb11816d868a6e1bb603abba49bb86"],["/posts/6432d61a.html","6fdc2a0543be3478750baf35ef5aa6d7"],["/posts/6515f032.html","cab3caed57e6d4f0173bc33718f13710"],["/posts/6720ccdd.html","97f94f3fb94df9c512bb3006393e9bca"],["/posts/6a4b5ac8.html","539a3bc09a605ebe57a605485be3b925"],["/posts/6aa4177c.html","5367abad37779abf7fee9e37a88ac195"],["/posts/6b15f81f.html","4f5b4ca9c87b394d179ff2c3c94a3cd2"],["/posts/71131d34.html","5bcaf3791bdf672671f8c4a7517b08d8"],["/posts/742fd48d.html","11efb7776e3e30013690fa06ad4f61df"],["/posts/78a8a8d3.html","947808d4c666d59aeb2cec63426accd7"],["/posts/7a5ef3d0.html","867dfba6ada9165859529bd978a27718"],["/posts/7b41e1ac.html","025b46f5f91e0dac5cfd5dc29f260bbd"],["/posts/7b51011d.html","d058570673a6c0d418e45636f0e8c471"],["/posts/7e3aa3e2.html","5bd6f297709f3e10ccfa09f61dbd422b"],["/posts/80fe2691.html","1abd2bb2e7957400bf277faed09be20a"],["/posts/81ac52e9.html","046e86b9bc64062b20c87ad17a3ccada"],["/posts/82332d11.html","f35a6980b23e96ea456465a75bbe4a56"],["/posts/8486f6f9.html","41823118bbc3ebaafc77a9ed24cbb6c2"],["/posts/849b40f8.html","19c96738f3995002f4358d6a089e9432"],["/posts/85c51d68.html","0ab4622fc1a9a86fb65467be7e1fd565"],["/posts/86a6c500.html","dd60a11716cf9413ffe27e0cb22172a6"],["/posts/886f8d3.html","1a38b0b52a27fbfad4a0254a31798865"],["/posts/8a7cba10.html","6b9c8f2825722fe2c2349851b9b93adc"],["/posts/8ac11b41.html","d4730042a0321f12ced453a97b761ebf"],["/posts/8c3f2fd8.html","622bc8e588618d45c685d21cfa15c67d"],["/posts/8dd520d9.html","2d03730a6f241331fde82353cc080bc9"],["/posts/8f555654.html","34fc60c9e16bf533062e841151ab2206"],["/posts/92a980c2.html","1ebfe0d3a2830a567b9142fcc0c4c5d7"],["/posts/92ce16.html","8ac4646ceb9d34fd687264dff41d31c2"],["/posts/93e9943b.html","d0eeef50f9ce75bc8f65e62b9c2edb58"],["/posts/94d3c794.html","96e5ecf1e7b011a967059b6fa3ad73a3"],["/posts/9606c2fe.html","04012460275aa50baa48f59683d2d643"],["/posts/96b281f2.html","94e871714c14cbd08e63305db060e006"],["/posts/97f50eea.html","bb763a5d171255257342db1cb95950d2"],["/posts/97fca8be.html","7984e6a90d11984cdb7259130660fe00"],["/posts/98662d05.html","80a987834f060877ef70b44a0a4b4cd3"],["/posts/98ef47c3.html","8c742608f9198db299b7de47b073bee9"],["/posts/9a2f6162.html","8a773425ffcf3c905a15b89ca793e3af"],["/posts/9b22a48d.html","7fbe453649ceb04e6c244f0a70a0eb52"],["/posts/9cb455b1.html","a8a588c30fff31c323c8a8dcb64f9eaf"],["/posts/9ecdeecc.html","5bee5317340ce9824b08e816ef55ff2e"],["/posts/9efd7701.html","d24debc9aff8406bf9d113e345715867"],["/posts/9f61c1a0.html","0f1747a573431d2ce7259b72aa0be5b1"],["/posts/a1de710.html","98bd3b4dd75804e9c1037b107f10b3b4"],["/posts/a30eb0cd.html","a58d153ccd071e1f932f3f699635490b"],["/posts/a72f71c2.html","3923e0aea15f809db5d7da27175ee3f7"],["/posts/a7634b5d.html","23f6600b76a1a3936e546fa104fa0006"],["/posts/a8c593b5.html","2b550abddbf994ed022130d867f28a61"],["/posts/ad0c1efa.html","0000d768c8e93285da40f09f98bcd071"],["/posts/ada3f440.html","bd13d6c3fe28068935af55d7530aa643"],["/posts/af1807ef.html","863fd10dcabbdb18fb81296d887af03f"],["/posts/b397bf03.html","c9200664929f22556ec33054bea52e43"],["/posts/b497b647.html","62555b1c18bae911d9f5185cb0ab4087"],["/posts/b4d464b0.html","15082a1327ee354c7a28a2de62c16661"],["/posts/b5fb773f.html","e3120449bc4bcab575acbd398ce4e81c"],["/posts/b8d46b32.html","b8e53b27fe8560c1866746fae1c3fd9d"],["/posts/c1b2c6c9.html","9c0c90d9b0b81ebf501dbec2ad244175"],["/posts/c2111cbf.html","70544080daa940813ee194f3c916fa18"],["/posts/c316c2e8.html","cb792116edb4efff64aa9b78ed393b79"],["/posts/c43e60b5.html","d0d17d71e2465fb3973c074a687269e4"],["/posts/c497a412.html","b4dc8dbb87d9b7e6dd9cad46257f12eb"],["/posts/c5395ba3.html","ba80245580df0b1845f41459f7de5b9f"],["/posts/c5de299a.html","b6b3e776dda505d46e9ad8fe6fdee2b7"],["/posts/c70bba9c.html","1015f434313a411cc57aa2acc3de5780"],["/posts/c797535e.html","6457482551583055cd5e31cebb3585a5"],["/posts/c7a62c79.html","3e829367b5d6b5ac80cc360a5bbcb18c"],["/posts/cae2c959.html","8278f57c3cfad690416871dad69d8a00"],["/posts/cbebef2b.html","f4a78515c56b730b49e4f94964eff5ba"],["/posts/cc4c0017.html","1a1800c723b2abd0b9d95b8b851e2fa7"],["/posts/ce25023e.html","2de93ec2e8db97b989e6efe16c8feabc"],["/posts/d2fd4837.html","d9f8bb4e78942b12e3dbd5d22932f103"],["/posts/d3233cbb.html","7bc118d6ff9dd9ffc79b58b43a240de7"],["/posts/d3a745a8.html","e5ae302550afa028e53d7dafa0d4ecd6"],["/posts/d7e940d2.html","f1fca577fb1e2b26e2467d58b993b3e4"],["/posts/dc815d5.html","d8dd61e9a4da2cbb9dd45b3f1d81d4d3"],["/posts/de25b0be.html","93c26e8b00f2a1a94cae53705f40a334"],["/posts/e2623b4e.html","d750177915af063f82eb9dd2445fbe68"],["/posts/e3ab6ad8.html","6104c616daf98c8336f6cedc72a88809"],["/posts/e5018da6.html","7037b9b0208a4c7350fb78dca9a1e93c"],["/posts/e5963272.html","7af691dd35a8a65b297fedfa4feead89"],["/posts/e5ef4c3c.html","60f086fc46fdc7ea40bc52e920d49df2"],["/posts/e624b065.html","30f8d1bed77671555170682a262a2832"],["/posts/e7c703bb.html","ef8bd707ea89c28c71cf97bef3596ef3"],["/posts/e8f14b6c.html","a34002d03364fb80c6ab98fc5f937ee5"],["/posts/e91abb63.html","148a41a86e3c3ab65322b7430cdde2f8"],["/posts/ea9a8808.html","ed0bd98a148551bf510cfbe6ad2c5cfb"],["/posts/eb784749.html","637b229d797f647a3b052c500e876b89"],["/posts/ebaf2232.html","ca73a614ff00bbe4cee20e85a257e997"],["/posts/ed75f185.html","f9fb793fca2dc5e5aa4377bd7919f291"],["/posts/ee1ed673.html","71818e2c2ebbcd04fc1a6683be0699c4"],["/posts/f0c3ed61.html","9f58c013b2eaa8325705023cc0b92541"],["/posts/f151ff43.html","456d85b4da8a36e85f8822780c5df4b2"],["/posts/f21e7f84.html","e3d396b57c31ffa7eab827ce18ee80a6"],["/posts/f230b0fd.html","b75a6abf1b71e1ce64565c3682b67c35"],["/posts/f28a7877.html","6bb64361ac660558eaf09cffcbdca6c4"],["/posts/f663d5cc.html","f80fdd984864336dae11e93acd10c0ad"],["/posts/f730ad18.html","34f4fb59ccee8cba6489584e2725e259"],["/posts/fb5d4608.html","474f155a0387fc2f15b6742779f4a433"],["/posts/fc04d0d4.html","bb086c31cf5c4a95d251e286566c63ca"],["/posts/fc455f81.html","2a67f84c9c2c55a7773b3deb4934bd69"],["/sumire/index.html","5f9eb3f366a403af068ec2e81790844b"],["/sw-register.js","611331e34179c55fd12f6908702fe438"],["/tags/AKo/index.html","e818e9c7c30b6cb39f68a1f6efa8b317"],["/tags/APPLE-project/index.html","3d69368f0acdb71450e2297e8d94815b"],["/tags/Ankrache/index.html","b0fa33e871b21d33027fe5248ede20f8"],["/tags/BELL-DA/index.html","af32473d229efb31524a9a45a1a2244c"],["/tags/BL-Game/index.html","69e55a66098c4f5df7183b0888b5ec21"],["/tags/Blue-Dahlia-Digital-Creators/index.html","69258cf0eff39a205445f0bc18cb8e63"],["/tags/Blue-Line-Games/index.html","d6a21e3f5280a415e33145778413153e"],["/tags/CD/index.html","752426a75472d77b8e4028be37181fdc"],["/tags/CHUNSOFT/index.html","1ca667c9fcea1e6d930594c69fabecf0"],["/tags/Check＆Stripe/index.html","502ced4e14287db4990313317026499c"],["/tags/Cherry-Pie/index.html","78428146a24b725aef58b1c012e42b27"],["/tags/Circle-Mebius/index.html","a5287d8928e3cc62b13a467f148bc1a5"],["/tags/Cosmillica/index.html","6523c8b53a4ab0cf8176ccd178ecf0e9"],["/tags/CresCENT-BLANK/index.html","73764ecf7cd76628a6b5a41c21c5d997"],["/tags/Dopamine-Software/index.html","c00d53909bf0b4345b45043fd2fbeb93"],["/tags/Dos/index.html","ab75ba14f4823868df122efb8c699e17"],["/tags/Earth-Well/index.html","6fbfeea0cf768bdc9f61a7685ac43170"],["/tags/Forest/index.html","e64b591e141b516095b065a323c769df"],["/tags/HaccaWorks/index.html","c481d40ab31807dabd13b8797733ed23"],["/tags/Kanon/index.html","ee665ce679dd8079cd2a1ec5caaa5cea"],["/tags/MANATSU-8/index.html","079a0dd1d16509f584a452e3089735c5"],["/tags/MARINE/index.html","641d25592a6d21e4ce7c9a1e6ea00366"],["/tags/MIO/index.html","c951fdb62b6b90a0f5884318c0119538"],["/tags/NAOX/index.html","a287621af4787ea026a578c6896e75a8"],["/tags/Namikaze-no-Uta/index.html","6fc792657421c02194c1a80e1519055a"],["/tags/Nmyu/index.html","c324d8c3d5e6cc43ac025641fd0deb8a"],["/tags/O-S-I/index.html","d22655dab9dc2b87f5791fb08ae673e3"],["/tags/Omegaの視界/index.html","a1fd8fe65b595e049f3c46949aaa36db"],["/tags/P-o-l-c/index.html","27023113e718c302618e05701c70c5f6"],["/tags/PC88/index.html","ff39f8dbf0a72583319b09f309dfa84d"],["/tags/PC98/index.html","9c8313f7c33f0002d2eef78e741b7a43"],["/tags/Perpetual-Room/index.html","a7fe4ef05d3f2144dea22df50d1e19a6"],["/tags/Pleiades-Company/index.html","3730d169b637ee2287051d38075e0b4f"],["/tags/Project-Twintail/index.html","816dcd07a70fa675bd9c0446d59218ab"],["/tags/RIFF-RAFF/index.html","92c19f1f01436b5c9f6d6da358dbea1e"],["/tags/RPG/index.html","c9e2caa84d943b529f55d41bfb200875"],["/tags/RPG2000/index.html","54d57d53e4f37b26477512a2d63c5379"],["/tags/Reverv/index.html","cbc737c3dd9a746a72924cae5d789e16"],["/tags/SENTIVE/index.html","7f6e012e8ff438fb0915fa6bf5dce5dd"],["/tags/Saihate-SOFT/index.html","947e1df5363fbcbf0d1b1136de12c008"],["/tags/Scrubbing/index.html","6f9230dc6f1547b4f1920d4ab4a38928"],["/tags/Sky-On-R-imaginAtion/index.html","df223a11409769416835dd32ba1ea7e5"],["/tags/StrayMoon/index.html","3c7c886c2576cd4c18a5f650a477324a"],["/tags/Studio-Bu-Sa/index.html","d349d2a6df3301596342bf86b0598dec"],["/tags/TRANSPARENCY/index.html","2b42b6b87a16002219f7c5b545297532"],["/tags/TRANSPARENT/index.html","4c4fcdd15fa97daad9829fe23765ffe3"],["/tags/ToHeart/index.html","a8eea12f5e42e441f1fca2a969ef18a0"],["/tags/Traumend/index.html","fc6339a3fbb7a28e1e2f0d244ea982a0"],["/tags/Witch/index.html","68bf98c5c9c60cb55f8650ed8a6d7fb4"],["/tags/adonis-project/index.html","7d2feb1343c3f32ac2a0deaa13298693"],["/tags/capriccio-suite/index.html","1c84154f16756e7e642da82b082a3309"],["/tags/flash/index.html","9e10be4305c5a38ddd68fac8425acb25"],["/tags/galgame/index.html","44310444ec47244db25317ddfa1dc377"],["/tags/galgame/page/2/index.html","c70eec3c38c7b4a4e4d8c6ac68763fc4"],["/tags/gal资源/index.html","58a4a0b671948572ab7d874df9b3a616"],["/tags/gal资源/page/2/index.html","ac274098c847b5d6ba69bf71b843b2f3"],["/tags/gal资源/page/3/index.html","0987c1e8ff73a1c569ae7d3eab65fb9c"],["/tags/index.html","02612ba156d4788ed176eddfadbb33f8"],["/tags/m-kz/index.html","008e8f6346f29ed7cebfd1b4107a2112"],["/tags/purgatory/index.html","f1c50faecf58438b70df602d33c6b6c1"],["/tags/rkr/index.html","1227147e3543efc05e6bc0fe93d9fe84"],["/tags/team-eye-mask/index.html","69c1ea2fc01f3f762e3c197951f06903"],["/tags/ありすくろいつ/index.html","55393fe834d3636a111c1fe041686a31"],["/tags/いつものところ/index.html","69003d25ffac1540b7e1053a29fbe1e7"],["/tags/きつねみみ饅頭/index.html","833869f14fae685a17cea380b46c696d"],["/tags/ねこねこソフト/index.html","4b6f85c8427862be2fb9f6ff3d48a6ff"],["/tags/ねこバナナ/index.html","05f3d5d4637cdf7c2ab8095bd25e722f"],["/tags/はちみつくまさん/index.html","a14dc5a037b0f35020f2cd0939b98aeb"],["/tags/ろりちせ/index.html","dbf870abf9f933a9680d92168f3f43b0"],["/tags/アイル【チーム・TATU】/index.html","4eac5be1346167a04b6f2cba3c547fe5"],["/tags/アクアポラリス/index.html","8748cc16c9618acb1b32cc8ef20e8a7d"],["/tags/アークシステムワークス/index.html","092cd53bd9d6c69059b20096521e21bf"],["/tags/ブロッコリー/index.html","315379f9bec066686201789581b371b2"],["/tags/乙女/index.html","e871920b327db2dfc4332447ced356bd"],["/tags/乙游/index.html","797897498556f68a60ae2d0a82453669"],["/tags/停产/index.html","1d55ba2e6990996cd36edf6a0964b7cd"],["/tags/公告/index.html","3e2d58cd450847525c4c615889cf96f2"],["/tags/同人/index.html","bde15955f97b09df36257f547f6fb71e"],["/tags/堀井雄二/index.html","74b1a04ba21cb05db3405057b6d7c6d5"],["/tags/外海なおき/index.html","eee9cee4fe58163c898e3af9a73b5fde"],["/tags/大熊猫/index.html","eb00b52cb0dc16b9efc79e7db9f370df"],["/tags/女性向/index.html","b15832aa4b60e0ff08dbf532cad664bb"],["/tags/安装/index.html","eeecf56393a8175dcc2d1f9366c9438d"],["/tags/御茶ノ水電子製作所/index.html","fd4d3c8149a4f062830bfefd1d3dcafb"],["/tags/月の水/index.html","6288d22204ccdcc72a6ca8ca0956911f"],["/tags/桃野衿/index.html","e24c9fdad2630743a9d535b5ec70a3e6"],["/tags/機械式少女/index.html","ed287bc2217c274a22e39713bb9a1b6a"],["/tags/水仙/index.html","8542b92c68498a318f13acca2306fc6a"],["/tags/汉化/index.html","a0ae3c95fb832ffb0fb97d1176ff303f"],["/tags/熊月温泉/index.html","179bab4a0f69fdc6c085a5fbaec76c82"],["/tags/片冈智/index.html","21f97b66067e56e62079d399afe469c3"],["/tags/片岡とも/index.html","7e6e266e01f46934f49a7aa9b4fad47a"],["/tags/牙の刻印制作委員会/index.html","e459018fe085d2685347cce1495fffad"],["/tags/牛カルビ定食-FLAT/index.html","2b191aa4164a2afc99c08e283e66e737"],["/tags/牧尾屋/index.html","0ea1c8e578db5843e73d8b9e1b8e76e8"],["/tags/犬茶屋/index.html","2440d69c207d03e95d823a9f59626334"],["/tags/猫猫社/index.html","6124abcf0752eb54c15a594877f889d6"],["/tags/王宮魔法劇団/index.html","4fd5b59022523ff2696111eb4ad8e50a"],["/tags/画集/index.html","60a2d13eef321de1466644f3aaa9cea1"],["/tags/索引/index.html","806cccafdacf0686bdc5340aced6b07d"],["/tags/缺失/index.html","8b8568999348214b2c03ece9f46d3784"],["/tags/自购/index.html","53715c3754f086f3f586ded5a09abfe1"],["/tags/茶葉☆姫/index.html","abcaf3729f9724b4bb07387dcedb3e42"],["/tags/郷愁花屋/index.html","1e2c16c3dc2d38b8f1e20a5a9cfe9c6a"],["/tags/閂夜明/index.html","144aa5817439bf00b28250b93bafd5e6"],["/tags/音乐美/index.html","4d769435814cecb92ac370b3815598ef"],["/tags/黒†救/index.html","ae48a2d3a21c08c94314ccc30d137884"],["/tags/黒百合っ子大集合/index.html","62aaca2424c51b70df8e7ffda92b48f8"]];
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
