/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","2f5f3e8d67a4b91c542796bc703259f0"],["/archives/2024/04/index.html","50d36f9c4b7534e854bb24301a77c9ab"],["/archives/2024/index.html","38a85e4ffb69fac9c1bba24156043d1a"],["/archives/2025/02/index.html","c8b5109afa65e6374c64ae432b1772f5"],["/archives/2025/02/page/2/index.html","429c98513550eae7e4863520982afcef"],["/archives/2025/02/page/3/index.html","75a46193e315d2b37a11dcf435f93fda"],["/archives/2025/02/page/4/index.html","44f54763738ce663083ef621b9b1702a"],["/archives/2025/02/page/5/index.html","5b98392b70cac26e9167d9ce3467127b"],["/archives/2025/03/index.html","dd082fbf009dd041bfbc00053244d743"],["/archives/2025/03/page/2/index.html","7aa8cf6a3d65013ac5ae7358fc9df9a1"],["/archives/2025/03/page/3/index.html","744f4a87d300a287e137f46fb399cfe0"],["/archives/2025/03/page/4/index.html","e264cf5c31d6692f6eb9ea3baa6bfd4a"],["/archives/2025/03/page/5/index.html","4c834c17f4b8ea2b2a5fc6aa23d5bf36"],["/archives/2025/03/page/6/index.html","b416bdf12757edc9019a4e6f62538ca5"],["/archives/2025/04/index.html","a216468a5354d5f3d7f4a97b9e76fabc"],["/archives/2025/04/page/2/index.html","8f41128d9d744fe5a9e47f7899ce6a5b"],["/archives/2025/04/page/3/index.html","4a1500eb55ce978391d8a75bf128742c"],["/archives/2025/05/index.html","bbcb64bb60c9bc9dbcd7e44a07768f66"],["/archives/2025/06/index.html","36d2495fcd7d1b51b6371ddca7b840a7"],["/archives/2025/index.html","1441fb6552618d8cf6403fedf04b6f3f"],["/archives/2025/page/10/index.html","ffca56ab7f91feddf30f9a0cab23f851"],["/archives/2025/page/11/index.html","81b0def9e8bb930fa38e93d4de1b06b6"],["/archives/2025/page/12/index.html","7338bd314660047e53bc7596067c0ab2"],["/archives/2025/page/13/index.html","30e6a41612998c1b2030692d9c0a4bb7"],["/archives/2025/page/14/index.html","a3fc0edc882ddb1515fa2c2d468bbd20"],["/archives/2025/page/15/index.html","421904c981cd163869cf9df6f0635f7b"],["/archives/2025/page/2/index.html","ab4d6f4010e91c42716d754a67c5dc7a"],["/archives/2025/page/3/index.html","8e977d1e7f1671fda9c8c7e216b733c3"],["/archives/2025/page/4/index.html","f2290384957d68f7463f04b64a65ee20"],["/archives/2025/page/5/index.html","875f5c6468530a6da01f778d81b49332"],["/archives/2025/page/6/index.html","03f60b76f84292bedcd28b1789beaab5"],["/archives/2025/page/7/index.html","04e4c6fb1275a58051f674023c829a0b"],["/archives/2025/page/8/index.html","c7f9a0993efc4533f759f10ec9ec0d4d"],["/archives/2025/page/9/index.html","28122735120f34401a2a4ee1322b2010"],["/archives/2026/02/index.html","6fbe331303ffb4c5896d6734ae1cd71d"],["/archives/2026/index.html","8f53de7a5ebec776b4f06033c798557f"],["/archives/2825/04/index.html","262d6c88eca9e816c61dd16b8ed826aa"],["/archives/2825/index.html","af534112b64084553488c802b5975c3c"],["/archives/2925/01/index.html","8509f01bfed306b8561e672e26a42581"],["/archives/2925/index.html","1d8289c6240aaf1305f31b795354e45b"],["/archives/index.html","cf312e7eb051404147d1b9f8c75bdf25"],["/archives/page/10/index.html","41075dd76b90955ff604d90c2f7d2ef6"],["/archives/page/11/index.html","b21d0df67279309587a689ab8705fdf4"],["/archives/page/12/index.html","5ca4cdd0a91c1e2d36050984fafcca8b"],["/archives/page/13/index.html","0522f0754148765f3ae9b7ef2735ee54"],["/archives/page/14/index.html","6dbca6439a9c594ff6b0c916d29d0bf0"],["/archives/page/15/index.html","2e69afef50c7002dfa3db3776f20ed96"],["/archives/page/2/index.html","d1e780bc9df8425537bc1e007e21b89a"],["/archives/page/3/index.html","3b3531054da7406e2242e9242f364c77"],["/archives/page/4/index.html","ae8dbd3a7336bdb4c1f1d57db009cccf"],["/archives/page/5/index.html","afeed308cf561a5a5a5ce0ebf7ee4552"],["/archives/page/6/index.html","1001112aa5a15a384f4a1dddbe0a9dc9"],["/archives/page/7/index.html","dd77b5cb412d49e9ee872c50ae8b4e08"],["/archives/page/8/index.html","2a199a7f8afb52cd062b2d5c37c12c60"],["/archives/page/9/index.html","a35bc7f56a820452d4aa3b22f9822a61"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","d37bb212c960d198a40fe8c67490289a"],["/categories/galgame/page/2/index.html","e70918868bb5e95cccb1107d78e51868"],["/categories/公告/index.html","ede7a8823156542cd49e9020c4250964"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","2f9089b4fd1596e788946f1069017c54"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","9a596a691e378f9da748b48eb3fc8ce2"],["/page/10/index.html","112924ddfba5f5bd5e0df55fc6eaaa91"],["/page/11/index.html","c9e4d149ca20106fe2321ed092046ed1"],["/page/12/index.html","3e79c5b19257cfe8f1da6d30f6527b5f"],["/page/13/index.html","29812e678251b42c791da2e65ee729b6"],["/page/14/index.html","c2bde64f3d9bda4b2e5a1e2c6dd7df8a"],["/page/15/index.html","98d27d7738541e4f3145acd9c473e541"],["/page/2/index.html","1802c63b5d4767a64010cf4d0cf81b3d"],["/page/3/index.html","dc9df6b6eea7c5c7711de1bdc1149cb1"],["/page/4/index.html","5ce973aaced14e1a79c330e99063debd"],["/page/5/index.html","50ba8d9e9942e8fd9d4b94c2bde98e4d"],["/page/6/index.html","fda335330f452b5823015eec4c155407"],["/page/7/index.html","ac89f8143795f8f6bb109232c4227081"],["/page/8/index.html","9abfd8c69f3b4925f5c14fd3c23787b2"],["/page/9/index.html","a4be4eb2b27cd08727b83b6412002a42"],["/posts/10c9dd98.html","183cb4d11a751c4c2d2028ea35ce9d5d"],["/posts/126ebb99.html","c820855c9f1b37102e23dd9be429c4d6"],["/posts/1295b569.html","03a0c4e94ba79c07a84cb7c768353f61"],["/posts/1370342.html","94a72636efe75479508b8f6e69ee6edc"],["/posts/15ef14c2.html","e4a997c7d6a4155940fd58aef05abf06"],["/posts/15f3959d.html","321746435cadb0785218dab792f6ba07"],["/posts/18ab785d.html","72906187180df5c0468f1948c4b8932a"],["/posts/1d59b71f.html","c01cf64b70fa5ebd0c33a18f66dc3b4a"],["/posts/20b3f3a4.html","23775a92b3fb3ceab004b37c7a0ba92f"],["/posts/245f1c7d.html","fcc4a34bb62334aa4beb12173f70a8b1"],["/posts/252658f.html","99ac1679dc34c6d489e448e125756c79"],["/posts/28397adc.html","74cd0b89496c035d4134aab1af55b87e"],["/posts/2ad07f54.html","2fd23035934f8bd4005ee2a9d5e0beed"],["/posts/2b38bce0.html","4ef0948ed599368b979965c158e60f38"],["/posts/2c0a6836.html","9902a8d47e64281acf08445504181730"],["/posts/2ce39bcc.html","1200465f9b868aa173ad7d831be1f54b"],["/posts/2cf620f0.html","fbcf9c2b7ac90235e2916d2d1cfe1ee0"],["/posts/2e30fd6d.html","4ffd57f1c348f0164daffd247f4f5b94"],["/posts/30a413ad.html","c961f9123574723e26fbaf26e8ab4c97"],["/posts/34292736.html","8d5acc9b918c910be9c7455f1990cd5a"],["/posts/3468cbe.html","e3f71812f1d289a01f1c119a36401b5b"],["/posts/39176dc0.html","7734d6ba3d9d4cd989f6000b692e200a"],["/posts/3be6a165.html","6f15a9c00e9780b8c2a796ab788658bb"],["/posts/3daf73b4.html","a312436ee1f77e556abfe2ce73dded94"],["/posts/3e118dbf.html","3a7a8124c9422cca0adb3621827cd33f"],["/posts/3f7d823a.html","34df281c154b2d10fc4a51637c18586b"],["/posts/3f978819.html","5cce8fd098001927bdb24db5e58dccf9"],["/posts/41dac80e.html","f58d21d8c78d020ee41dd2d531704e25"],["/posts/43945723.html","152a9d0a7b852c98b70705b9a446ae5d"],["/posts/44124a6b.html","229c57d15d204afeb8f4490c58e9aadb"],["/posts/476a3006.html","d56ec94145be3daa42568cf1232137f8"],["/posts/47abb61d.html","01054d7fecfd5315b7916aaa192e9faa"],["/posts/4996478a.html","88dff3ea2794476603ea56a1744fede0"],["/posts/4b689be3.html","10523ae99356873f2bbef89c753af0f8"],["/posts/4cf8423f.html","48dfe588bf5e1c24ff4f95a7caa91f68"],["/posts/4dcf85c.html","cde6e7f417b605137b999735b359ed84"],["/posts/500cd322.html","5cee5f8c42f09044b27e1b986e0f02ad"],["/posts/51c9b1ff.html","c7f4721784c4105350ae3d221390703d"],["/posts/51ce68e8.html","0591878305ecb992fccdd086135a36e7"],["/posts/52b5b3c6.html","b636b982d456bd60dca66c0663ec61e4"],["/posts/54f496ad.html","d85b5ff8283edbcb8a6fe2059a4e30c5"],["/posts/558e1f30.html","10c13aeab129dde26b0991c26333e555"],["/posts/5d8bea92.html","569cc43d33c25c6a108fc1b8ab9098bb"],["/posts/5f6e0c59.html","9d0b60b10fa5a9745075693a441e33ac"],["/posts/61a63a84.html","457e3d96aa8f8cc2a469b76cedd546f3"],["/posts/625ab7bf.html","3f4e7922e8ba06ce1234c639cbf0933b"],["/posts/6336a2f9.html","3b3d4f0b7831ee27c259338e95a818fc"],["/posts/6432d61a.html","b1f2c87c654101a62929a3ab4790dec2"],["/posts/6515f032.html","3feb9d0eca24869164251b4ed17f26db"],["/posts/6720ccdd.html","42acc0d55907cfe2a234a3b2cc5e5e28"],["/posts/6a4b5ac8.html","affafbedee822498d3bc256ca3701763"],["/posts/6aa4177c.html","c44f9716158abcbf4e2b4384559c27a8"],["/posts/6b15f81f.html","0acb38de0144493e6861aa8b7424af5d"],["/posts/71131d34.html","0e935008291f41cccc320c64aaea4fd2"],["/posts/742fd48d.html","973934a1a8101114d9c213010587067e"],["/posts/78a8a8d3.html","e4ec28a00a656c6efacfbe5589c87c8f"],["/posts/7a5ef3d0.html","70d1d011fd4fe346aeb73848c0d042b6"],["/posts/7b41e1ac.html","8ee7ff59be7539de1efce3feba773fa1"],["/posts/7b51011d.html","0e86539e54491543d893cbc4402fc2d0"],["/posts/7e3aa3e2.html","55d3970a0ef350ba1cf38bfcb6f384e3"],["/posts/80fe2691.html","beb30479e497fcf4d32c7d899b31017f"],["/posts/81ac52e9.html","fd8a34f2bf686b9adf021ea7e5f73d5d"],["/posts/82332d11.html","6f0fcb3eafebe6e6ed7e44707aaf7f9f"],["/posts/8486f6f9.html","180422bb7a3d5dfd26077aae2b2ff0ba"],["/posts/849b40f8.html","3a90da9c71197f995f5e3a7df0a31a24"],["/posts/85c51d68.html","b3f598d77e28b3b9b6471fbea424cc53"],["/posts/86a6c500.html","057eb8dcaa99928040c1ed3f3da06dc9"],["/posts/886f8d3.html","e42ae90da115c35422b6956eb069d736"],["/posts/8a7cba10.html","af4888f423d3351c9df22c908ca36904"],["/posts/8ac11b41.html","f678a185cf96c200f18c32e39b6f4b12"],["/posts/8c3f2fd8.html","00f3bc8536d8fa0723bec7032125cbf9"],["/posts/8dd520d9.html","d0d780a29744e29f4e414226893c5c4d"],["/posts/8f555654.html","e65a51cf33eaa4462adfa96d1ab35600"],["/posts/92a980c2.html","d81bacd19fe346c8e1037d86248bd756"],["/posts/92ce16.html","b005d32a8a26c19c935ebab989f35cd6"],["/posts/93e9943b.html","1098c7d74b814d1ee8a573fdfcd9907d"],["/posts/94d3c794.html","3789efb14e4f85cdaba620a307159cb5"],["/posts/9606c2fe.html","f8246583707126b2389b0986bb40fe64"],["/posts/96b281f2.html","b8bfba612e11bcc74fdbe0691b2f9196"],["/posts/97f50eea.html","6a91a280b8759c00aa06d837602a5fe5"],["/posts/97fca8be.html","d5ab43627fb459328421661cb151fd0f"],["/posts/98662d05.html","87063728b95dcd8604eae386350d6542"],["/posts/98ef47c3.html","c0152e87b4585ee0b5755f170c52355d"],["/posts/9a2f6162.html","0093a2da3bc207848233655a5fca005d"],["/posts/9b22a48d.html","e56abe11c5adc07c44e46c088963c360"],["/posts/9cb455b1.html","0fbc506bca632d9656c55fdf7e7bf4a5"],["/posts/9ecdeecc.html","9a5e4751d0bfcd1f952ab76b2cfff78d"],["/posts/9efd7701.html","8da580a50f40a0f5c5b9010e8124d0dc"],["/posts/9f61c1a0.html","b6bd87c5b20daa15aae1b38b060ef751"],["/posts/a1de710.html","3595696690eae3ee523c6a550b7af07f"],["/posts/a30eb0cd.html","b44ed1a26ff1f1c5abaf80715ae12857"],["/posts/a72f71c2.html","ac8cf7a01564252efc904ef969f6180a"],["/posts/a7634b5d.html","6e1994b28450a95837dc128f696f7712"],["/posts/a8c593b5.html","68e0b334929793b5dec2bde102b1a96a"],["/posts/ad0c1efa.html","4c8fd409e9548140f9d223013a29515a"],["/posts/ada3f440.html","9e679e927d2855f8f5581c17056b4760"],["/posts/af1807ef.html","80ad532efb553f819fdac18a0e6a7d56"],["/posts/b397bf03.html","f26a76c67c60f85425ed30712a6fef19"],["/posts/b497b647.html","899f2abc95588676f652f7dc767979a0"],["/posts/b4d464b0.html","b6f63df7d2a1ea7091790931f3b2299d"],["/posts/b5fb773f.html","ade68d2a719bc6d63c816f8ff2f87b68"],["/posts/b8d46b32.html","87e43db22880088285226a14511feb6c"],["/posts/c1b2c6c9.html","6557f9ee87c87600ee5777d6bf33a58c"],["/posts/c2111cbf.html","346a01633a23031d0568a69ba86503f2"],["/posts/c316c2e8.html","6881509e6ad735968120d3cad41cb803"],["/posts/c43e60b5.html","f1b4f61c43edda6a84070a285a191fa2"],["/posts/c497a412.html","de609d7650cca543e3257afe470349ff"],["/posts/c5395ba3.html","332602444a2837e5ac107b8457ad19a4"],["/posts/c5de299a.html","8c67bafda1bec5157714fa1472c95b22"],["/posts/c70bba9c.html","ed97487c02763110410544cf0b2f8289"],["/posts/c797535e.html","6bc541927189a7ed61f860213379c7bb"],["/posts/c7a62c79.html","6613824500bd9c96ceec595263130adf"],["/posts/cae2c959.html","d5897197b1077b98aff047de54a86645"],["/posts/cbebef2b.html","8ac3a074df352bf339b8eccf24ae5f02"],["/posts/cc4c0017.html","ed40b15243a0c696ba813d5fe3a87fc7"],["/posts/ce25023e.html","7c097169660bb65fa68cc6e7687d05e5"],["/posts/d2fd4837.html","af58629d7d88330ad2c7830bbff3c520"],["/posts/d3233cbb.html","1df9f906e4f0e48b5e0c3d94dc9ef5eb"],["/posts/d3a745a8.html","0d4d30b04041ebbd144e33e26552e325"],["/posts/d7e940d2.html","5c8f934237fd901984b2042938a3601d"],["/posts/dc815d5.html","699fb5128b11a6c56f473ea718d53e83"],["/posts/de25b0be.html","e8f935b4dbcd82cf9e4de06fa9b48417"],["/posts/e2623b4e.html","fe1cd77b53a3db9d0b4bc08c740cf93a"],["/posts/e3ab6ad8.html","a9999299441de6b92289e72055fef440"],["/posts/e5018da6.html","0dd51c54648eccd03c923565e56b4b0c"],["/posts/e5963272.html","362917c3982da0a105953dff3474a36a"],["/posts/e5ef4c3c.html","884b6a21d5ddbe0b0dbd18e9fb3cfd2c"],["/posts/e624b065.html","cb5d255633d2f83a25dc36b1aa359fd1"],["/posts/e7c703bb.html","47580ef3c96c527a033b263cf102f4c6"],["/posts/e8f14b6c.html","6b52111301326fe94d22c3fafba829ed"],["/posts/e91abb63.html","cf7fe84fa1df74efbc04c1f8ada5574e"],["/posts/ea9a8808.html","a69be526e8c49bb1c92748ea64f0fd8d"],["/posts/eb784749.html","03876dd79ee220685c29c5e0a467b315"],["/posts/ebaf2232.html","429dccb8a9e9b307468e85e8b16d8a62"],["/posts/ed75f185.html","968a802f79f9b47e03a40cee59daaee0"],["/posts/ee1ed673.html","ffbf4a0ef9b0c19add3ce211bb7f7de4"],["/posts/f0c3ed61.html","fb3625b8010cca9fcf0bdfaa3185f25c"],["/posts/f151ff43.html","5a941afcfaaea9b4ca494bb05c690991"],["/posts/f21e7f84.html","4feac58fd22e4ec9e87dc7b7c22f0870"],["/posts/f230b0fd.html","2fdf99efa24a9c6a2fef8520a4d8dc75"],["/posts/f28a7877.html","b0adaab8018930edcc7fb866aae94e2c"],["/posts/f663d5cc.html","2e38df7dc50b50bb66c4ecf8c419d436"],["/posts/f730ad18.html","3b734782d6b6a31d2f00e9bae44b4090"],["/posts/fb5d4608.html","3fdf94281429d8b036a2da650c6b41e9"],["/posts/fc04d0d4.html","3ef092f31bafc5b5f5597b4cf47fcb31"],["/posts/fc455f81.html","8ee5d0c5cad7b06eff3cc6b09ca2a962"],["/sumire/index.html","8be275f4af36472d7578e1e63497be0e"],["/sw-register.js","c2c8a90ab6b8058215dbe225866c625e"],["/tags/AKo/index.html","d7592e450b9ae84ceecab1fc19d50b10"],["/tags/APPLE-project/index.html","5ad8151603035496a724931af460d408"],["/tags/Ankrache/index.html","6225caf2bf5155fd380b639b4f6bb62a"],["/tags/BELL-DA/index.html","7b68e927e141784fe2977e66d38ec37c"],["/tags/BL-Game/index.html","420ec70672147b72536046b9ac89bbb5"],["/tags/Blue-Dahlia-Digital-Creators/index.html","a8838549d3e1f36b51380ecfefc6340a"],["/tags/Blue-Line-Games/index.html","316323a16deb2219a01be58b5073f48a"],["/tags/CD/index.html","0d5d0b299f2b68996b51774047d5c484"],["/tags/CHUNSOFT/index.html","6f8dec07d09a976f32f0db928173b480"],["/tags/Check＆Stripe/index.html","947fc7fc53fb0a8ad6137946fcb0c5a9"],["/tags/Cherry-Pie/index.html","9cbd4d2465f362744a6610bf0cb152df"],["/tags/Circle-Mebius/index.html","f1af17e9d5c78553599ad0e879fc528e"],["/tags/Cosmillica/index.html","7f97ead74d473b73a7bc955835ec6ca5"],["/tags/CresCENT-BLANK/index.html","4445273576c1f19ef40ef2852672ba38"],["/tags/Dopamine-Software/index.html","a9f048e246beb3603ef8dee5499a0821"],["/tags/Dos/index.html","d5da6a904f39c7a2516d30cd7519b489"],["/tags/Earth-Well/index.html","f2524ad9d870acd99e5bcebe48e3715c"],["/tags/Forest/index.html","409953afa8b670c252d32cbe62d1861d"],["/tags/HaccaWorks/index.html","ddc337db10362acb7505db919ef93d50"],["/tags/Kanon/index.html","57977ab39de86714f36c882428ebc480"],["/tags/MANATSU-8/index.html","6059b6844d61ccff09c43882ef5fb007"],["/tags/MARINE/index.html","76a364479b7fcfce1042b4355a98f15e"],["/tags/MIO/index.html","f69afe7c0a1177971ef96afd5aa4516c"],["/tags/NAOX/index.html","7edbbd401ed5a9f18322c764e53bcfe7"],["/tags/Namikaze-no-Uta/index.html","15910a7016715745ff27a42e89971011"],["/tags/Nmyu/index.html","e8c8233d74067c13b2e53dee8a752493"],["/tags/O-S-I/index.html","38688ac5866a2e4bc10ff7bca11d7cc3"],["/tags/Omegaの視界/index.html","f3f7c9482a428d81c4cbf8492968fa1c"],["/tags/P-o-l-c/index.html","1290326e22042c1b7bf1f8ee9c5d2e22"],["/tags/PC88/index.html","f5a5092ff398100d95b9b1f43787e863"],["/tags/PC98/index.html","cf48572bcd3607b3f73ff9cc40aab3e9"],["/tags/Perpetual-Room/index.html","6736dc7f299423ea671236f7125ec785"],["/tags/Pleiades-Company/index.html","0444271518ee8ba5d04924ea6cdaeaab"],["/tags/Project-Twintail/index.html","329b590bae0cc7825c8ab30eb82bb376"],["/tags/RIFF-RAFF/index.html","4e25941f7acfc9c64775059a68c99885"],["/tags/RPG/index.html","56d22dd58ecab49f090c4b24e5330e6b"],["/tags/RPG2000/index.html","401d6570407a78f32fc933b55a2e68db"],["/tags/Reverv/index.html","90a915cce0bdd93a6747f9fb6db094c9"],["/tags/SENTIVE/index.html","96ec8dac79dfdae46a3e46dfa0f9915c"],["/tags/Saihate-SOFT/index.html","d2cb779692bbe33c615d5eb4be42fdd1"],["/tags/Scrubbing/index.html","1923d5b4e4a9bfe18793a900d65c4d23"],["/tags/Sky-On-R-imaginAtion/index.html","a0802b3657ad6d10a9c286a8c35fad27"],["/tags/StrayMoon/index.html","a492a15379800a927b5200a32d0eec8a"],["/tags/Studio-Bu-Sa/index.html","4f465f3f12e4af5718f3db10cd93ed04"],["/tags/TRANSPARENCY/index.html","bd85860830369e6c6c3016333ee52576"],["/tags/TRANSPARENT/index.html","51b59a7b14892e1c4cc69a00dcf56607"],["/tags/ToHeart/index.html","370b62ed51c2e853e36afcbafb7f001b"],["/tags/Traumend/index.html","fb4bfdbbb1b010fdcb49861b701f1974"],["/tags/Witch/index.html","e168aa2a86fdedb5b29cf1f2e7b0831a"],["/tags/adonis-project/index.html","9e4171cc0e10cce110ffb1a822d55068"],["/tags/capriccio-suite/index.html","119d23d2569752f5d83ee597cfabb963"],["/tags/flash/index.html","c10db6d679fb7a8091fbcd1d7704e549"],["/tags/galgame/index.html","41c72085be95f355bc25b88ebc6769ef"],["/tags/galgame/page/2/index.html","ec7fce59f99d6b89b923ddd14e157e83"],["/tags/gal资源/index.html","df52604bd4d6001ac3041903c1fa4c11"],["/tags/gal资源/page/2/index.html","9e88600e408dd5cd4435de3d2f4651b6"],["/tags/gal资源/page/3/index.html","560336da12290e7f07af06de08f2d117"],["/tags/index.html","02982e6e102d9b1b9d8cf326bcad8af3"],["/tags/m-kz/index.html","6ccd29a9908b3a0b662ef994ebf712d2"],["/tags/purgatory/index.html","6dcd1326a6dd23e82215fe92afaff3e1"],["/tags/rkr/index.html","bf6b0af546df310f83439150c73d97ee"],["/tags/team-eye-mask/index.html","b481e87cdf56feb75cc3899a7258e9f1"],["/tags/ありすくろいつ/index.html","56ae005a342d5004a9aaf313394e9b53"],["/tags/いつものところ/index.html","84f8b13f0a7eb24d5fa5721d72e07a91"],["/tags/きつねみみ饅頭/index.html","6e851d758c94e34765c4aaa9b5c64718"],["/tags/ねこねこソフト/index.html","10b48e1e4d267dbfb58abe188a951779"],["/tags/ねこバナナ/index.html","4361f111285714dc8d552db4669a15a1"],["/tags/はちみつくまさん/index.html","7c768eca6555f9661196e0aac90ec758"],["/tags/ろりちせ/index.html","1844bebdb9076c8194c45807d61dbac4"],["/tags/アイル【チーム・TATU】/index.html","78c0707da5467ee0aa6ac6477b757c12"],["/tags/アクアポラリス/index.html","cf7a9037e9ead5fb678654a973c95fda"],["/tags/アークシステムワークス/index.html","284d5852962c7c78fad92d14a73dfd75"],["/tags/ブロッコリー/index.html","bb29dd1e76c5bc9aabe5d68069f769f1"],["/tags/乙女/index.html","e7ddc31a4f0ef7959cf39c4bbc5cd52f"],["/tags/乙游/index.html","707dc50c54bcebabb570771357dd86a2"],["/tags/停产/index.html","c49b0c3435a5dac127821596e3330669"],["/tags/公告/index.html","dc268d4cb30464f195939f38d370bbf5"],["/tags/同人/index.html","94ddae40ecbe862a140018f6befe5ee7"],["/tags/堀井雄二/index.html","407135e34f5602daebb0fe2e414e627f"],["/tags/外海なおき/index.html","8ca8f620c577bf45bb190c7f25558efd"],["/tags/女性向/index.html","b3ce710ad54f30aee0f78e526bf5d253"],["/tags/御茶ノ水電子製作所/index.html","f916ad294688fb495772fbb3199916ae"],["/tags/月の水/index.html","0c6c8deee31f76c48710d05ebe8bfac7"],["/tags/桃野衿/index.html","8cf41aec60cefc1d96b234f490eedfe9"],["/tags/機械式少女/index.html","63f3473d9b720805bb0642eeba5e859a"],["/tags/水仙/index.html","fbd954b2a6dc80dd30f607f70678e02d"],["/tags/汉化/index.html","5e042cfc8aec362205bd68afb1903358"],["/tags/熊月温泉/index.html","cb03a3737ab56d4cbbbee34ca4d2e05f"],["/tags/片冈智/index.html","330d70edbbeb3a2f097134dbe7f960e6"],["/tags/片岡とも/index.html","d6b78d7ae369362df7a58f53ac105224"],["/tags/牙の刻印制作委員会/index.html","a5c1dd6efc71f571ca2a27aa72499f77"],["/tags/牛カルビ定食-FLAT/index.html","fdb500a23d3f8eebb191eee4775c9565"],["/tags/牧尾屋/index.html","ebea80722d769381bae667b3c1d3dfaf"],["/tags/犬茶屋/index.html","94d1453ffb5b9b6a48189055dd85c5af"],["/tags/猫猫社/index.html","c0bdcb052579257ab2ad41cfff900235"],["/tags/王宮魔法劇団/index.html","3538bd8e962f681c2dc1500af42bd6ac"],["/tags/画集/index.html","c6b295d88df042b586808699a8ad34fc"],["/tags/索引/index.html","2241511e5202f1394a2f9117d0f2cebb"],["/tags/缺失/index.html","30a885f6db40bc921280e0dccb15cbfd"],["/tags/自购/index.html","7aa652d53385296f19a96bbed597caf6"],["/tags/茶葉☆姫/index.html","343c0d638765ad56cb869884a3f00998"],["/tags/郷愁花屋/index.html","045d0b40674e5664a0b5fcae1c910562"],["/tags/閂夜明/index.html","7a18c17b008981ba5334f0ae6740baf5"],["/tags/音乐美/index.html","ed476bccff2e14d433e31f7a36dc1e31"],["/tags/黒†救/index.html","7f125a8b5461469b508bf7a0e8149824"],["/tags/黒百合っ子大集合/index.html","b5162ca3169b994e629b6566a13f3be6"]];
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
