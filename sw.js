/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","cbc6871588a3146c9a83c48dbc72eb80"],["/archives/2024/04/index.html","cb2f0ec61f5fcf9185da504ada8f8ce3"],["/archives/2024/index.html","5aad6219be166999475319d0e320ba9d"],["/archives/2025/02/index.html","993a5ec3da5b84bbd8c3a1eb3c8afe39"],["/archives/2025/02/page/2/index.html","8ffcf934896205ec4bfdb425092e59ab"],["/archives/2025/02/page/3/index.html","263636ff71aaa3916c9d0f9be63cc7b8"],["/archives/2025/02/page/4/index.html","4feeca72fb2b60c6f3f6c7d3de7d67c9"],["/archives/2025/02/page/5/index.html","c775c9eaf5d5459ea162aecf32c65e80"],["/archives/2025/03/index.html","165a8ca5e3d601e57a716ccb66f2fd1c"],["/archives/2025/03/page/2/index.html","c7d05e9323cd1ecff004b728ad481746"],["/archives/2025/03/page/3/index.html","068d721879020624b33c1c687b6c6e33"],["/archives/2025/03/page/4/index.html","297bff805e4a59ecf43fcbd999c0cd60"],["/archives/2025/03/page/5/index.html","dceb50c27565b1d71f4a6bc1a0a840d0"],["/archives/2025/03/page/6/index.html","c63c515dafa281f594682ee2c1f3172e"],["/archives/2025/04/index.html","ac15c2d51a2675449b3e0ffa3dd05e39"],["/archives/2025/04/page/2/index.html","af3feaf01624721dd4a3a8aca55b21a9"],["/archives/2025/04/page/3/index.html","b18ed9d227cf65755fdbd472a97cb34f"],["/archives/2025/05/index.html","f3c99713cc4e85f4d1eee287c65094d9"],["/archives/2025/06/index.html","2f5a41794e52ca6e06bd0a6f11c16a49"],["/archives/2025/index.html","1071e36a39e08de8a8abd2419fc4cb1a"],["/archives/2025/page/10/index.html","df6bd32d3adf169c1d2c0c886574d88d"],["/archives/2025/page/11/index.html","f86d5a7b602d433210a62bd51ce972e8"],["/archives/2025/page/12/index.html","562f49a4794d6878bc0a6bb334517b26"],["/archives/2025/page/13/index.html","2332fe2967bd6e188054ed31d7378529"],["/archives/2025/page/14/index.html","899beb0fb08d4b7b594b665803aa0a5c"],["/archives/2025/page/15/index.html","48ec2322c150a7a4011dfefaf44508fe"],["/archives/2025/page/2/index.html","73f35c414376ba99b9f0714aabd3abf5"],["/archives/2025/page/3/index.html","355dab4a9cd98916f4deb2fe11ce93b3"],["/archives/2025/page/4/index.html","59826d9583bba9f0bc29e1096138135b"],["/archives/2025/page/5/index.html","52ce3c1d646f89e73ac8549addf25a8a"],["/archives/2025/page/6/index.html","5e8d67524f47a8d860e7d11e2eb5bd8a"],["/archives/2025/page/7/index.html","9ec512115671df0b7252d8ccdfe00555"],["/archives/2025/page/8/index.html","4a6dce03a59b6b58947c8d85706c9b65"],["/archives/2025/page/9/index.html","d65d28ae3500c8083460eb1bcd9a730a"],["/archives/2026/02/index.html","94f96152644a05322284e9a665586a6c"],["/archives/2026/index.html","475910ddde30616f13430c223a36ae12"],["/archives/2825/04/index.html","6d2b7304a7c8c67ca5cec0e1ce9eb032"],["/archives/2825/index.html","0b64bf5319411131bc654008f8ac57fd"],["/archives/2925/01/index.html","2302fec07d46a1734b1e4d88ad272fa8"],["/archives/2925/index.html","81925510de4a105338c1bbb11831da23"],["/archives/index.html","64c1aa56247abc81099400cd1b1cf04a"],["/archives/page/10/index.html","a674dfbe42780bc748b8c5ff3c63a86e"],["/archives/page/11/index.html","1b123dad78106377b645cbd2b463fca0"],["/archives/page/12/index.html","81044ee0f0fdb6d7e41bf139d9e36f1b"],["/archives/page/13/index.html","8c8bd4a6c5b1eedca5e059dbd3a3b938"],["/archives/page/14/index.html","2189713f6130606d8c34df3401d7aad9"],["/archives/page/15/index.html","24f657f4d4f432236f4777c3a045017b"],["/archives/page/2/index.html","09c7ab64f91fb56a9ba33ad08fccac13"],["/archives/page/3/index.html","54ce700219b6ca2bfda32c4be358f3c6"],["/archives/page/4/index.html","8d4a8f9c3e4d92ff50069ea36976c0f2"],["/archives/page/5/index.html","45efd04e29f2267c64e9342a53069d92"],["/archives/page/6/index.html","0d89fd54f0365f0462ad94b9f5507695"],["/archives/page/7/index.html","4d13a63bd7b5aa01afae7ee6864ae4eb"],["/archives/page/8/index.html","a1418a0636f32e446b63a162b7a91407"],["/archives/page/9/index.html","fc3962695a4d250c72caa91fd39d0911"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","a504e2c761f5196f8287c75cd5fd97d8"],["/categories/galgame/page/2/index.html","af4908996bdd2f2c59cc08951017d368"],["/categories/公告/index.html","e8e2418f33c7d7445ce348d7926ac65a"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","551a65d9a2c8ee405f35ecca3ca6ad9d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","2c161e51e1b41b2c5ba067696f92bbbb"],["/page/10/index.html","1ea18c4d4dea2c97b0087915e74463da"],["/page/11/index.html","11ace5e4d035b37b0de3aa47ee6824bc"],["/page/12/index.html","e1ca2a1caf25c6643cea05c3c1e9bfda"],["/page/13/index.html","63106a3be2504232cd2a7e015d77f4c1"],["/page/14/index.html","1733fc8199c843f2d53ef29adb136187"],["/page/15/index.html","d9531133648e7a7acaad0e6399be54ca"],["/page/2/index.html","c8bf49187bcccf4a1140e500c99d9bf3"],["/page/3/index.html","1af6a1c4bb1b0aba0759b648b74e1558"],["/page/4/index.html","0a940d0a8a9d5d6159066820e2bb4812"],["/page/5/index.html","fcbb9a7f07a9fcbc9852842b649ddf5e"],["/page/6/index.html","1c0d3ad1d158bb12608685714bda3fb2"],["/page/7/index.html","6d820332a638e5abeecd6db23e9ccc1d"],["/page/8/index.html","20fcd33e8d3a12767d774e7f17fc4893"],["/page/9/index.html","ed179988dd05604c787604bc049f6453"],["/posts/10c9dd98.html","632c7f0f608ad7be4bedd15c9cf45708"],["/posts/126ebb99.html","d1e03a2bf9d22d73277a6c2960e93cdd"],["/posts/1295b569.html","52b5a4834c29ed4486169598f5865df3"],["/posts/1370342.html","6388217214ab87fc2d410036a4c54dd9"],["/posts/15ef14c2.html","b70f7264a7dd0271b2826c8130ea0324"],["/posts/15f3959d.html","faf03ec6aa5d69f39b1441a398bcbdb7"],["/posts/18ab785d.html","f628f63fc5d0c8ce307038903b46e779"],["/posts/1d59b71f.html","465d93112f49abd08a18cb89ba071e2d"],["/posts/20b3f3a4.html","adb7cadb591708e8f8a715c10b5ac28e"],["/posts/244daa7a.html","10cbde27ad13e140ae773a5c7d41356b"],["/posts/245f1c7d.html","638015545b2a4b703fdc961a490f5eb8"],["/posts/252658f.html","3c3f0314d16f3cb230577e7ef4649185"],["/posts/28397adc.html","ab9921fdf3ea71c120c4d8a0b8fa5f87"],["/posts/2ad07f54.html","fb9e25f439088707df0eb406d5db5004"],["/posts/2b38bce0.html","334afa5f4583fcbfca97e65905aa0806"],["/posts/2c0a6836.html","b70d686d094005b98c462b7573484bf0"],["/posts/2ce39bcc.html","c967f48c79198b3dbcd9b284f9428e18"],["/posts/2cf620f0.html","2032bde7300146fd82552f077b2206a2"],["/posts/2e30fd6d.html","951c03ddd892604c98826b1af7f40d57"],["/posts/30a413ad.html","d1880ca4106ce83ef55a8d3a9b31d73c"],["/posts/34292736.html","9590ad51b1b7eb20d9cd54d52d57aec0"],["/posts/3468cbe.html","8599eae6a3eed95a20972887e30efb18"],["/posts/39176dc0.html","d6c46fb1b4a97c43aac765392220eeaa"],["/posts/3be6a165.html","1ef2395fd82ebf7d720a5292222a4fb6"],["/posts/3daf73b4.html","e992a03b10b6f206eceeb0399a03f5b8"],["/posts/3e118dbf.html","261cc5b196b71fa745d17f19f1cce4bd"],["/posts/3f7d823a.html","d47abf8a44a9299a089b4d2b64484b97"],["/posts/3f978819.html","05f21e5b248d422bbb48878348f47b2d"],["/posts/41dac80e.html","eb2517d2f6248ea9cbac5ee836d7cffa"],["/posts/43945723.html","1f3e77922a966f3ff235c1acb41f7194"],["/posts/44124a6b.html","64a58142c940554ae44aaf7f935cb8b4"],["/posts/476a3006.html","9f96a3d4c99580519f6563fd683e54cb"],["/posts/47abb61d.html","63719a55af443d0b6f3bda9773133bd3"],["/posts/4996478a.html","19de7eaa39d86603444f3272caf93529"],["/posts/4b689be3.html","9186946442fffb982ea3b8bbd501f65b"],["/posts/4cf8423f.html","0690b007dc3d5408a75da5bc873708c7"],["/posts/4dcf85c.html","a23f56d69d9e028443599c5f1b84c1f0"],["/posts/500cd322.html","f5b12725d21074445806679aad0f87e5"],["/posts/51c9b1ff.html","67152ca9730d187a98bda63e9e3477fe"],["/posts/51ce68e8.html","582ede69f2f979ddbce144f4d0bec7a3"],["/posts/52b5b3c6.html","d730cc405ff4dd8118983440bc69f832"],["/posts/54f496ad.html","cc90cf3eb63a037820ab40afed428cd9"],["/posts/558e1f30.html","59c759353eb5fbbf41e1739d7024f7a9"],["/posts/5d8bea92.html","3f3996027099b7874cf97ee8604fa370"],["/posts/5f6e0c59.html","a4edfe78b4ff2754d93e50d53841b4f6"],["/posts/61a63a84.html","96438889f3e8c40c54f384719d213ede"],["/posts/625ab7bf.html","908e4e05b7e85a476d3e802a0e325b1c"],["/posts/6336a2f9.html","dd447314ceb7f30bde027d051443eb05"],["/posts/6432d61a.html","36d2df18bd86463a2edc71e37e7f2b83"],["/posts/6515f032.html","fe1d0a1b533cdf4cac2bc2bcfcf0ce31"],["/posts/6720ccdd.html","f03f7266a96c111d67bac9f99583d32f"],["/posts/6a4b5ac8.html","4979b44d06de8dcc17d819ee5364cc7b"],["/posts/6aa4177c.html","b279112bf85940c79e6557a7410ab577"],["/posts/6b15f81f.html","840e8c70a3953b565e3beec970e93b4d"],["/posts/71131d34.html","7034232ce08b7b8b867810ae42121cb5"],["/posts/742fd48d.html","268051e07ffa84d4ce77ee02800664ed"],["/posts/78a8a8d3.html","0a913dee8f05282b02ac814272f67568"],["/posts/7a5ef3d0.html","222d3dc1af4746eb2e8513e5a418fc6f"],["/posts/7b41e1ac.html","1f450493d0c74ae8b62dd2420e261b56"],["/posts/7b51011d.html","c848f9295a2f5075f0d88e99e26a6f08"],["/posts/7e3aa3e2.html","31b60800a874326bc9efb9bd47bde41a"],["/posts/80fe2691.html","0c2f0a9fd8811087d8cb8abf5605ce46"],["/posts/81ac52e9.html","6ee218f4f0d227627ff548a38e994798"],["/posts/82332d11.html","4b37a3e8a8bd74f3d1743e02abe661ff"],["/posts/8486f6f9.html","c1f603f86735182596d37abc84541a68"],["/posts/849b40f8.html","29387f11f0662624b608cab8b6c4cf2b"],["/posts/85c51d68.html","fbb367cd60f9391eb8477fe6edcaa220"],["/posts/86a6c500.html","23392d857e8026c0384789b27028cdf7"],["/posts/886f8d3.html","ff253b46997f137f9227c9ab5a49d987"],["/posts/8a7cba10.html","fbb217394612bb20c791fda033a02c48"],["/posts/8ac11b41.html","b7b6dbdc417658141c1ef242242bf4dc"],["/posts/8c3f2fd8.html","808b3a70d0458d14af4c5cafc9c8704a"],["/posts/8dd520d9.html","21c6b1b0b5230101c2ddd21fc2fb7de1"],["/posts/8f555654.html","d55c23b97b9f72e0b5491861c32480aa"],["/posts/92a980c2.html","8c982f0705ca8fd17072aac89b583700"],["/posts/92ce16.html","326aba7a9774142f61b607831e8ea4b8"],["/posts/93e9943b.html","ab83a4ab0a202018fd7c7c99e68487ac"],["/posts/94d3c794.html","de7df56bd19cbff4e0860a00e01203e9"],["/posts/9606c2fe.html","75fb84f3ec42468102d6862e12a9e5dc"],["/posts/96b281f2.html","ed7f7424136e9a450668f96ec3abedda"],["/posts/97f50eea.html","7b9ad3fa1ed57fb1ac01b17580069e15"],["/posts/97fca8be.html","1a2578602cd98ca970ab5f313d025d78"],["/posts/98662d05.html","2192701751fc8f6257e550923593c467"],["/posts/98ef47c3.html","f161977226060b6ae1a76e3f83000a91"],["/posts/9a2f6162.html","f49fe0ea3b55e4990e79366a49cee520"],["/posts/9b22a48d.html","6337c24539a5cd0600414687a410070c"],["/posts/9cb455b1.html","e857a6ce8fb985f2cce55498e74ae8bd"],["/posts/9ecdeecc.html","d967f19102b81f2f9584e394be529c67"],["/posts/9efd7701.html","43a28a094a0ca5852fd3775dcb8197d5"],["/posts/9f61c1a0.html","2974f6ff5c477e1d05c9be310795a0cb"],["/posts/a1de710.html","bc0187f6d5e53b008cadf35dbe8757f2"],["/posts/a30eb0cd.html","58a67380130deebb5dc45a51f7859219"],["/posts/a72f71c2.html","66ada5a062075e2e1a04682ed52b3226"],["/posts/a7634b5d.html","657358ad6feedafb9581c40676ef594e"],["/posts/a8c593b5.html","ca5c0ce201f0bcf0688d73010d57dc0c"],["/posts/ad0c1efa.html","634109cad2fe3ec0fdb5f1a45668d442"],["/posts/ada3f440.html","a91e177cb185e6350634288072535b6c"],["/posts/af1807ef.html","4b36df19bfcc54c858e30d287ec23ca9"],["/posts/b397bf03.html","85d0bda55492d02d5fad9f42b58bba64"],["/posts/b497b647.html","b7cdf64320cac0550de0e8e4003354a3"],["/posts/b4d464b0.html","7fbdb56dcee02c8bd239b25f7f5c5e1a"],["/posts/b5fb773f.html","5de63292f99c105c8954fb73f6932c80"],["/posts/b8d46b32.html","f0b5cd4f06b5f70ec8a3a68314754e42"],["/posts/c1b2c6c9.html","de616702f34005e5e4380ec6979fd6a4"],["/posts/c2111cbf.html","f630a7a9190d279db81ed7654a57ffb5"],["/posts/c316c2e8.html","cd3461f710e2c780606d77e06e199010"],["/posts/c43e60b5.html","a3ec4418eb08beb020453286a6bc9fbe"],["/posts/c497a412.html","383c78f0a3c6d1a371fc122c31fba6b3"],["/posts/c5395ba3.html","ce6da1d7263eb0a215a4b8123891b2e3"],["/posts/c5de299a.html","0e29ba7b28994d9053b9c1bd8c33570f"],["/posts/c70bba9c.html","ddacf119c9643307b79ad35a32c12087"],["/posts/c797535e.html","592908cfc4eb3379f8fab32bfee01a7f"],["/posts/c7a62c79.html","85ba0896b9158d07575440d2da9db63f"],["/posts/c85b034b.html","a0589655b2da0656e310238e89296488"],["/posts/cae2c959.html","be718a76cd746d92735298625cce1532"],["/posts/cbebef2b.html","4f24b165f90f362a490273caca231e45"],["/posts/cc4c0017.html","1eb0eee7ffa90f1f48c7f8b58a9a36a6"],["/posts/ce25023e.html","1504c0a4aa572054557f2fd2750a9dd1"],["/posts/d2fd4837.html","69eea00a9584a1c75ae1e91f6cb786cf"],["/posts/d3233cbb.html","f625dbf856168e64ca8e481f13910604"],["/posts/d3a745a8.html","e42a2a87f3ba7aef127fd8883ffe4d6a"],["/posts/d7e940d2.html","409aa22cfeb09a6cfb8ca57411e1baa4"],["/posts/dc815d5.html","8fa18d6be8a99bf41958b9c837b7a6a3"],["/posts/de25b0be.html","ede3b478ebba66928a6a55affd5bb4e8"],["/posts/e2623b4e.html","274660f8277bb257ab7063fc1479a68e"],["/posts/e3ab6ad8.html","c13c215dd4d25f0877ce18cd7354610f"],["/posts/e5018da6.html","a7073c52db6de74f55c8cedbca8c7ea7"],["/posts/e5963272.html","9275d3514e9437b0d18b011b06cd10a3"],["/posts/e5ef4c3c.html","7ed3c8da90a5eaa463ed1cb49244b7a9"],["/posts/e624b065.html","6e048ee7b49bd28247707eb348dfb260"],["/posts/e7c703bb.html","27c60d12e507b3235c3c63a11f974cc5"],["/posts/e8f14b6c.html","dcde6ace77d8ef395a7d86d0589f1416"],["/posts/e91abb63.html","24b4888a777ff95d6d81dce3f764b451"],["/posts/ea9a8808.html","2bfc07391de1b7a461268b76dc6a64c9"],["/posts/eb784749.html","aca99ab132e81c0f3311baecb6dfc855"],["/posts/ebaf2232.html","edd6b690eabaa1dfbc418d7cdc1efb8a"],["/posts/ed75f185.html","e7081a37c2405aabbbf8d2942de7761d"],["/posts/ee1ed673.html","ea3a887c489b5677797104463008e9f0"],["/posts/f0c3ed61.html","16c0cc5615e344365731c1b69121dec4"],["/posts/f151ff43.html","384e9efcebd3a77d093e80382ec87d4d"],["/posts/f1b0ad49.html","e95374893793a2ddff7c02c83823e9f1"],["/posts/f21e7f84.html","6c42e21a1145b222f4f8cda5f8a769d1"],["/posts/f230b0fd.html","4ae9a8507458bcc402e9132a4f1b4398"],["/posts/f28a7877.html","0ac28d211f2aed5acb947ac24997d87b"],["/posts/f663d5cc.html","f694d81e1c6be178ba06fcd83cca5531"],["/posts/f730ad18.html","14307a13f203e5192acf55b448f63825"],["/posts/fb5d4608.html","ce07aa84db5716a8b805be9562c3cac6"],["/posts/fc04d0d4.html","9f434549c52a17a19a1e968e57d546e2"],["/posts/fc455f81.html","1d252903a0feed5d73f747594f3a5153"],["/sumire/index.html","13014e122fb972720b3b4a63c832d067"],["/sw-register.js","7b34a7cc5aea16934222d72ca644b180"],["/tags/AKo/index.html","440d87a7e4dd844001309000ba7189fe"],["/tags/APPLE-project/index.html","208aefc0ad52e6d8531bf2148a755765"],["/tags/Ankrache/index.html","38ba948947d496fae260d3abacc7004c"],["/tags/BELL-DA/index.html","354a9d6f8e4640fcfabf2ca4634c0a00"],["/tags/BL-Game/index.html","5857c2f44ae2bc89b5c1ef0b6c41361c"],["/tags/Blue-Dahlia-Digital-Creators/index.html","a9b3f65b5fda4fd2ac829cca0bd8ce14"],["/tags/Blue-Line-Games/index.html","dcf5666e7c1fe63ce92fc07d7c3683d4"],["/tags/CD/index.html","2b089133950403c67acf7a43247eeb88"],["/tags/CHUNSOFT/index.html","077593fd39da04804670caabc169eed6"],["/tags/Check＆Stripe/index.html","8b0c3b93dc4d5313c13915ed60e3a727"],["/tags/Cherry-Pie/index.html","85a661746042ce992faa6555ceadae72"],["/tags/Circle-Mebius/index.html","75619d53c5eb4f2bbb71274529c4bbec"],["/tags/Cosmillica/index.html","3dfae5d6477d00e238db2acf5f0c18b6"],["/tags/CresCENT-BLANK/index.html","0e5cd209b6737c7eddae8edd0dadf4b9"],["/tags/Dopamine-Software/index.html","b4a0a2fd31bbdd54a1e6feb0e203855e"],["/tags/Dos/index.html","4d71577e2257e8c8e7166927df9c1d76"],["/tags/Earth-Well/index.html","b239ec29f3dba6d6cbc4ceb28f7657c3"],["/tags/Forest/index.html","b06ce691b6769a6709078d4c1684459e"],["/tags/HaccaWorks/index.html","9b260c1c09f2aebb33410ef050a0faf0"],["/tags/Kanon/index.html","3c7a86d3e9bb65eedf89b9602f8407d0"],["/tags/MANATSU-8/index.html","9b77be720631684b3bb8ef301d711e31"],["/tags/MARINE/index.html","7b6f866d30fd63d6e9598d2c26c88e3e"],["/tags/MIO/index.html","f5a4ed2821f4f2fce2e31a81a3243f56"],["/tags/NAOX/index.html","a2b8201042ccab326d36b1d9a54f5001"],["/tags/Namikaze-no-Uta/index.html","8335c3dc89676791236c1690cc91df8a"],["/tags/Nmyu/index.html","46a35b312944653242ce168da85435b5"],["/tags/O-S-I/index.html","da4bf251855e9fa71875e7c7615331fc"],["/tags/Omegaの視界/index.html","fcc4e99eb2db8fab457e3860cc4de4da"],["/tags/P-o-l-c/index.html","ca573db4964504e5cd198055846a83f6"],["/tags/PC88/index.html","7fd75b712ce9c1f96c4088f298220648"],["/tags/PC98/index.html","e3b49c2afe6d3505d6dc4d7d250c9a14"],["/tags/Perpetual-Room/index.html","fab4505fdb32dcea57be23b545ab40a1"],["/tags/Pleiades-Company/index.html","703874f78ddcf136e7e33293c261fb71"],["/tags/Project-Twintail/index.html","25ea7d8fe3df0a89fd6ad8defb8d39a6"],["/tags/RIFF-RAFF/index.html","d9bc34a361aadbf266b120952bba82b7"],["/tags/RPG/index.html","16736b514c8d4bd69e2cdfed147b10dc"],["/tags/RPG2000/index.html","14bec234af0ca9193cb8931111a627cc"],["/tags/Reverv/index.html","ce179a9d95019f6eb9ad432bc94a6a14"],["/tags/SENTIVE/index.html","56d45f58b6feaf421a032d49268b741e"],["/tags/Saihate-SOFT/index.html","4c81b6c4a45b2bee2bfcebe5250b9a04"],["/tags/Scrubbing/index.html","7eda4dea6e68f9da38561d0154dd0b31"],["/tags/Sky-On-R-imaginAtion/index.html","1216adc2020992030ec27b36a45b139b"],["/tags/StrayMoon/index.html","53b3f8ac2ebe456d938dff01cac50f48"],["/tags/Studio-Bu-Sa/index.html","94c333c4eb0bd671995278f7186bddb0"],["/tags/TRANSPARENCY/index.html","6f6706d6d685b4597da393e8a820f5d7"],["/tags/TRANSPARENT/index.html","2553d028aa6f650f7a39f0361aff055e"],["/tags/ToHeart/index.html","def542d9ef8dd01cd2140dde7098175d"],["/tags/Traumend/index.html","bee36989446180e4a2b5cd08b875a572"],["/tags/Witch/index.html","820b2c25a8f4345a71bc6d290895f5d5"],["/tags/adonis-project/index.html","ea97acaed4a0620350326e3ffcdabb51"],["/tags/capriccio-suite/index.html","187c3db51f27c89ae799c4bc9447bf7f"],["/tags/flash/index.html","db2dbc4eb4c85bcc97676a1e8bf566d3"],["/tags/galgame/index.html","eec53f07a3409ffd2cbe6403c244da98"],["/tags/galgame/page/2/index.html","23369285e938fd5d33b4631e1a7cf04c"],["/tags/gal资源/index.html","13f4c9f145fa47810fe5e64404a49514"],["/tags/gal资源/page/2/index.html","d4856fb3980d5ebe49d9e9d9d4e78e8c"],["/tags/gal资源/page/3/index.html","5459cfcc8ed036afb34dae801dbb885a"],["/tags/index.html","58880616b8972aecf236e47237804d62"],["/tags/m-kz/index.html","d7a72e3095401fda0d0ce1256815ec5e"],["/tags/purgatory/index.html","f69314bb941bf53c17f313ab95635d5a"],["/tags/rkr/index.html","efdd196e58e1b357199e9342b617a574"],["/tags/team-eye-mask/index.html","743464b6cf8b90cfedf7a27c50487a83"],["/tags/ありすくろいつ/index.html","8906dae73990f8e1905c868c8ee856e7"],["/tags/いつものところ/index.html","de3af8d80a2a3c782543ad676b40b05d"],["/tags/きつねみみ饅頭/index.html","b36445f595a6fa9247fcc85d5d8dab16"],["/tags/ねこねこソフト/index.html","737008f65e756b0f01a2472fb584111e"],["/tags/ねこバナナ/index.html","cfefde1645a4eda697574b39527c8a4b"],["/tags/はちみつくまさん/index.html","6c05ce27555fa0a760ef67c2281b8a62"],["/tags/ろりちせ/index.html","007d7b4d56dc0219742f85f1139e48bc"],["/tags/アイル【チーム・TATU】/index.html","94ebe098e5705d6dfa873f87f212614a"],["/tags/アクアポラリス/index.html","2bdd0fe8d1a0530719eb4a757dc42f08"],["/tags/アークシステムワークス/index.html","ef7f16c72e756daebae569035cfbf9f9"],["/tags/ブロッコリー/index.html","f865379cdd1019358a913d2191cf1ff7"],["/tags/乙女/index.html","7cf80aa7a1498d28412fd5b73cb3f86e"],["/tags/乙游/index.html","4e31ddca0563b8ec8a6c4fd5bfff7136"],["/tags/停产/index.html","367c09f7479c3c5b89cbe49eeef1c273"],["/tags/公告/index.html","5c00aeec2c32f25f7c87e2e268999d19"],["/tags/同人/index.html","6207fe5225c8178e69f917954643b6d3"],["/tags/堀井雄二/index.html","f697b69c917db3007a4f17435c3aa9df"],["/tags/外海なおき/index.html","b3464cd53a3a0dc61d7c29de4a2b743e"],["/tags/大熊猫/index.html","73006d1a90e6bdad3d7e94588af30748"],["/tags/女性向/index.html","55a15bfa929c744eae56e8ec39458d02"],["/tags/安装/index.html","bbbd89609ca0415b998aac022b47ba5f"],["/tags/御茶ノ水電子製作所/index.html","36a88ffc9af10b263982408f35d91b41"],["/tags/月の水/index.html","8495c06c56def7312cf59b8545f1bcc7"],["/tags/桃野衿/index.html","f1cbbe9c7df49f80cb88292df3f4e03b"],["/tags/機械式少女/index.html","cd600137c428d33eb1d3ef78fc1b5ef3"],["/tags/水仙/index.html","aaf7be594554d05ebe7f25d6f17e0b18"],["/tags/汉化/index.html","d24e8a38d728b49fe25ebda2fefcb32c"],["/tags/熊月温泉/index.html","dc06e1c478a4cc2799d31db4ee421e2c"],["/tags/片冈智/index.html","7160cdaa65932a3ba66635af7cc80af8"],["/tags/片岡とも/index.html","f730ad5abd8cf5e26e14e286ccd75904"],["/tags/牙の刻印制作委員会/index.html","f0c7d59de9977d790e8fb450358d9df8"],["/tags/牛カルビ定食-FLAT/index.html","3b19de97da71b4654ab0415909449ad4"],["/tags/牧尾屋/index.html","6863d97d39a63d5acbfe2bcfaa057008"],["/tags/犬茶屋/index.html","4656710a906f95fb5eb2f9101197e23f"],["/tags/猫猫社/index.html","e6ae8e1e7a1b714737d35fd7a36ad3b1"],["/tags/王宮魔法劇団/index.html","0fb4b1d13971d16c7988fb26d8e35005"],["/tags/生活/index.html","de348dfb5f9672bf8658c4ca8a916144"],["/tags/画集/index.html","7c12d85028747471b446a44f6f44c2b5"],["/tags/索引/index.html","f3fd3912f355ea0b4b0144024ad4c126"],["/tags/缺失/index.html","0ed7cd6e107834ead9068ef953c1b0fd"],["/tags/自购/index.html","442bcc0390170e6b9518648088cacb9c"],["/tags/茶葉☆姫/index.html","6c31addac42c921e1b95b94764b4368f"],["/tags/郷愁花屋/index.html","b39019d5b35d36a4f3ca9b9648e2094b"],["/tags/閂夜明/index.html","05dedb7cb3d1f3532e1a9315ebdbedd4"],["/tags/音乐美/index.html","47e5048ccc7ff703e29de0324f0e10c0"],["/tags/黒†救/index.html","668a0ce176febb04834ad88689a6bd1d"],["/tags/黒百合っ子大集合/index.html","5c49b0ca071fc03b1a44c1e16bb3fb2a"]];
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
