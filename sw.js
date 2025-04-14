/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","96d21d93739bd32eff59ad59ecb45ff8"],["/archives/2024/04/index.html","473db216807aa1cc1959dd4785a5ace7"],["/archives/2024/index.html","c4c4662e3b0b030eb03bde95bc92ca6f"],["/archives/2025/02/index.html","1b6306aaa3acffda3b999046e722d7cb"],["/archives/2025/02/page/2/index.html","2ef70d5e07e88dafe44535332a8535bd"],["/archives/2025/02/page/3/index.html","2352f6ec9ccaf0836e05b38584224904"],["/archives/2025/02/page/4/index.html","f4521aa20ce1945661913a7aad4a5cd4"],["/archives/2025/02/page/5/index.html","d2b53025c15ed3580c997b268aa6e844"],["/archives/2025/03/index.html","94a4d26d1ef50fa92e482d056feaf9ba"],["/archives/2025/03/page/2/index.html","7c4ab64e6df5092b520528c2fd70a0da"],["/archives/2025/03/page/3/index.html","7afc9e9da9650447a3017d6acb06d2fa"],["/archives/2025/03/page/4/index.html","38695e83ea54d1d952c67a28ffb4d57f"],["/archives/2025/03/page/5/index.html","cae5062f8561fbeaabe9ab0b981d6984"],["/archives/2025/03/page/6/index.html","89c82c2e6085d73ac144395982143cad"],["/archives/2025/04/index.html","b5172ad7c216a484478c0d00301bd7e8"],["/archives/2025/index.html","924c5cc4bac55d8654fbf44be203cbf3"],["/archives/2025/page/10/index.html","da480cab5288e5ba5dcd64823620f0c7"],["/archives/2025/page/11/index.html","ccc2aed0675cb001251916c284546048"],["/archives/2025/page/12/index.html","0e75bb7722a42c6e47a8390ba130b13e"],["/archives/2025/page/2/index.html","bda6ac9f85167706f2f4b459424c6eed"],["/archives/2025/page/3/index.html","e014427f807ef22bea445c471d8a1c2b"],["/archives/2025/page/4/index.html","ebad20e0ae5a74c8e29bb47f4a2ad779"],["/archives/2025/page/5/index.html","74d618083d6c4a829a2f5fe2b67f2bba"],["/archives/2025/page/6/index.html","63a2a55d2220eeca74764048968c5424"],["/archives/2025/page/7/index.html","9a288d0c2198bc12ee92cc8b8083c795"],["/archives/2025/page/8/index.html","46cbac1a1dac4cfd15860e8bcdcdf644"],["/archives/2025/page/9/index.html","5f981d86ac269882240e35bbcb7a248e"],["/archives/2026/02/index.html","2b94e6b53ef034252cef76a456a36cad"],["/archives/2026/index.html","57b597294f75783c0a55a0f7f1cb1c90"],["/archives/2825/04/index.html","f5f3f920141a49d75ae0d631b5663af6"],["/archives/2825/index.html","a74bed10fa7ba229e77eec29c8d1d110"],["/archives/2925/01/index.html","d49196c30f476e427aa7f1e0a75bd369"],["/archives/2925/index.html","8bd08ed18125045f70b9a267e3084ade"],["/archives/index.html","81424cd41dc1aedb2f9c3fdfb3192a0e"],["/archives/page/10/index.html","4f84e09af32f6ca9c3c750a7210164cb"],["/archives/page/11/index.html","cc6e8b7b5f70d66d68d5e274790195b3"],["/archives/page/12/index.html","33d519f7e524da7b674bddf358a62891"],["/archives/page/2/index.html","c06cc96d817449ec7d5a280991e65435"],["/archives/page/3/index.html","83bccf73d4a4b4c9e53b96bbc6e83a7e"],["/archives/page/4/index.html","ae85a2d4d0c3df9c75959f04e339eea2"],["/archives/page/5/index.html","0e1beee53d3c5a3a1dd0a41eab0ae280"],["/archives/page/6/index.html","170309e943b94057acc41258475e5f0f"],["/archives/page/7/index.html","1530051a736b6f5089aa58b8357f27c1"],["/archives/page/8/index.html","59f68062c444ee19a8862792114b2c60"],["/archives/page/9/index.html","6ca0c4d88d2d098a98c6ff55abb6d2d3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","d289638571dc810d010b969c013993ab"],["/categories/galgame/page/2/index.html","bdaa1b7a8b32f0468c523997e2b3e442"],["/categories/公告/index.html","0bdb0867e506bc8cd1fd6543ee26d9f1"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","4db8b6e1b74076de11fd42fb802c3cd3"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","b87f386cec21c30493dac0d2e4309818"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","04f439f7b48124b368c10418f5654d99"],["/page/10/index.html","974bb94595b1e29eda9bb39decdb834c"],["/page/11/index.html","05cdd64758862277bb1993578985b3e9"],["/page/12/index.html","6f54cfde141f07a3d213aa8cf800c842"],["/page/2/index.html","8dfdcbced8211e0c58f9669030499ce5"],["/page/3/index.html","e6a0dfefb7f07b0e9595653115ec39cc"],["/page/4/index.html","a2b236e51b78363e354581b403949b9b"],["/page/5/index.html","e17cb987aa98ab60dad380a6bc117f6d"],["/page/6/index.html","a71a3836deafa8dab2f3bda0b3bea3d6"],["/page/7/index.html","355005c15335ade6f6e0aeb4396e750c"],["/page/8/index.html","39cd3ebffb4a1ca3b44891e2216a8470"],["/page/9/index.html","1a800f493c4c172684caaf4912927849"],["/posts/10c9dd98.html","372b43a8f9fd5755f06809a0785fa5a4"],["/posts/1295b569.html","5f80ab8a103c106c1fcf4ef9c2b1f9c6"],["/posts/1370342.html","e4fdf2d535813aad1f2bf76410d2aee8"],["/posts/15ef14c2.html","f58ea7ecbed9341266d3a74153aeabc9"],["/posts/15f3959d.html","876c6e25b7ab27a4e2d92073ced57378"],["/posts/18ab785d.html","6bf4e62b978d9b4b421acb6f5e9fcf27"],["/posts/1d59b71f.html","41fb7dfa5b6927258b7ad72a66f77abf"],["/posts/20b3f3a4.html","7a4a6a282cd6f382306d5cc46ff81a66"],["/posts/245f1c7d.html","d55f532ab2689f9493ddb56101787e73"],["/posts/252658f.html","d1e864ba13e6be5143c3a2cbc5c82132"],["/posts/28397adc.html","9b0884ba4f8b5561dd47e2a67cc25313"],["/posts/2b38bce0.html","bd5ba31eeba786edb475f2ca2836abb6"],["/posts/2c0a6836.html","7984a0923657f85b282283e0417daabe"],["/posts/2ce39bcc.html","b2b742ed678775d0c12c79ec2ba76902"],["/posts/2cf620f0.html","d252d9fc5558ff1a8bca837d054a1fbc"],["/posts/2e30fd6d.html","4571cae8f8697c40569ce4691b04c55b"],["/posts/34292736.html","b572b8db9f69b9208166a82b39fa74a2"],["/posts/3468cbe.html","4a1b0ac644472d809bb4c259d8a6ffaa"],["/posts/39176dc0.html","f6e02bc95b63dc1e30213ac037c67178"],["/posts/3e118dbf.html","b308f8c46266f46825e4cee07afbfd66"],["/posts/3f7d823a.html","341c4d427749f325caa9536ae926b195"],["/posts/3f978819.html","4921c5135582adc9155fdf096d6eccda"],["/posts/43945723.html","13e18ceb77564baeadad5abb4bd1ded9"],["/posts/44124a6b.html","c210d203806e00a2b685ce2a097ca06a"],["/posts/47abb61d.html","17174e7eaa5ccb7e002add9c45b5b8f2"],["/posts/4b689be3.html","e9c5e072fa3e0320d1a8bf176b2d1694"],["/posts/4cf8423f.html","8a1b1360aa1b5b32ed804d0bbf77e322"],["/posts/4dcf85c.html","39d48468c9101601be935631e2d64d52"],["/posts/500cd322.html","4c90da8f964d4ac38b948e27826e728a"],["/posts/51c9b1ff.html","2bd72e2570de95e48d15fde8f8d7e8cf"],["/posts/52b5b3c6.html","b07e5e30963953de2097d52b2700b62c"],["/posts/5d8bea92.html","48aac6e68bb7a63e881a38e5dae20cde"],["/posts/5f6e0c59.html","6fe888b1ace042b6d20358971a956165"],["/posts/61a63a84.html","ec2c27802489993b559254a62221d7e4"],["/posts/625ab7bf.html","3ebe944c86b8963b4d636be214dbe286"],["/posts/6336a2f9.html","e5fee0078680fac61a14e2a2e6d0933d"],["/posts/6432d61a.html","2766bf386853f1d70426529e2bbca499"],["/posts/6515f032.html","1e6eb4cf4c59f05794b6b300b4c9f1fb"],["/posts/6720ccdd.html","e1e54c49d344bef9ef4a26bb0989900c"],["/posts/6a4b5ac8.html","522e2ebf38c2d4417c00711c62e0dfe2"],["/posts/6aa4177c.html","c5c1c6e8fb6d1e5f07c288ad1c56f29b"],["/posts/6b15f81f.html","2236532cc4de1c5242e88387775068b1"],["/posts/71131d34.html","b16d65a8e9eff621338b2013d25a2003"],["/posts/78a8a8d3.html","4d876a07ec06fef88693c707f701c5c7"],["/posts/7a5ef3d0.html","cca0dfbb8c97c006edb595fb50a34d6a"],["/posts/7b41e1ac.html","115dfc4fa0091ae3c2f6f3480bc8f824"],["/posts/7b51011d.html","3c72c1d2ed5a5ecb674d732521201b33"],["/posts/7e3aa3e2.html","bd9f6e5cade75957e994c8932cd1aefc"],["/posts/80fe2691.html","cf80e1720393eec9675c16fab7d9feaa"],["/posts/81ac52e9.html","0b85e6eff6d5221a8b932587b86e6496"],["/posts/82332d11.html","2090809bd849bbdfe3b0e64a271a9d44"],["/posts/8486f6f9.html","c50c02d63e9c85564d408bbcf0da9075"],["/posts/849b40f8.html","c88217d5546786d474c4141da586499d"],["/posts/85c51d68.html","b701ea21e5c401bf330e9d01365b0a25"],["/posts/86a6c500.html","1fce858b01bd1fa8aacd114a15cd5803"],["/posts/886f8d3.html","de6310c60e552a6b7772685dafb538ff"],["/posts/8a7cba10.html","11f36005565faff9e3c4c2eed283e2a2"],["/posts/8ac11b41.html","3a8cd4a0aa24103818da314a62cc7790"],["/posts/8dd520d9.html","140ed812acbde9ca2d318d78737837dd"],["/posts/8f555654.html","1d90f903133bad91f7a41091ea47ac94"],["/posts/92a980c2.html","ee4a5a219a551d14fed1b1ebe28ee148"],["/posts/92ce16.html","316846e94136c0887e664476e3488c8c"],["/posts/93e9943b.html","c7714d47072172be4f49bf688a6aa274"],["/posts/94d3c794.html","367f82164c80a5c4fff853ec82df1d9b"],["/posts/97f50eea.html","e7d49272cdd8e022d5b42c60fbb1eb9a"],["/posts/97fca8be.html","834ca5f923b3c5c8cd1beeaa1f342e99"],["/posts/98662d05.html","5f4e01d165208947683c40da96c19b23"],["/posts/9a2f6162.html","42607d77fb7065f92daaa01d275b8b62"],["/posts/9b22a48d.html","219d5636c845b35f553b77357922bcf2"],["/posts/9cb455b1.html","ab4e756998202ac0be8a85d1c13c57e2"],["/posts/9ecdeecc.html","9a733bf2c7451217c1add183f149a5a3"],["/posts/9efd7701.html","29c19858503f8054f572db172c79041a"],["/posts/9f61c1a0.html","4944d3df59fede88e04b9c91bb32bdb1"],["/posts/a1de710.html","106a3a2b842c80a5e4f501b26d6eba66"],["/posts/a30eb0cd.html","3a05f193e82db11ec902bdebcf8333b1"],["/posts/ada3f440.html","ef2ae0d76ab7799e41a439d6257eff7c"],["/posts/af1807ef.html","e6f1e0ab74cd3ed62589bf514559367f"],["/posts/b497b647.html","350bbcdea48104259dbd52841d9986fa"],["/posts/b4d464b0.html","04aed87a2db1898202bee46394f33234"],["/posts/b5fb773f.html","e3c123852ab09c77598ac50f64a0123a"],["/posts/b8d46b32.html","4ee1b8eeec43e2b1e846d13e70214950"],["/posts/c1b2c6c9.html","069372775247782ce7742b2568547793"],["/posts/c2111cbf.html","4b8e027704ad73c2420d7c6bbba9cb06"],["/posts/c316c2e8.html","dc6a3be8bd144ae2a5aa16068ffdfab7"],["/posts/c43e60b5.html","dd9e26c8cae5dc26a8b46ccb7b66e943"],["/posts/c497a412.html","021733feccdb2ab07a11346b1e28406d"],["/posts/c5de299a.html","36d4aa1d1c75297a5ca093b842273ff9"],["/posts/c70bba9c.html","a4683c51300b5ad37d7f0f7ddf0b08c2"],["/posts/c797535e.html","cb7de293a484c5bc9115d7ae827753bb"],["/posts/c7a62c79.html","6f9bc49469805a07ef904f7955fe97bf"],["/posts/cae2c959.html","9fa5b162e707e2622c8766055fe3086d"],["/posts/cbebef2b.html","a50a1cbf96fc2cb2cbb696f5ba1748d1"],["/posts/ce25023e.html","33293b756ba1ce84dfb1f69967208713"],["/posts/d2fd4837.html","21d9b8471421ddb114c48efbe80d45cc"],["/posts/d3233cbb.html","e539b852367a23e455b229133ebdacf6"],["/posts/d3a745a8.html","1556613f1b2df69f03f73c2deb62f0f5"],["/posts/d7e940d2.html","3d0412ed77eb27b20cdd8d424add204e"],["/posts/dc815d5.html","002369fa3f3808cdf06cead8c4c45f85"],["/posts/de25b0be.html","3a0f1711f7b1380a16f8fe52edb05c8e"],["/posts/e2623b4e.html","6d2ef0795a8a4f77c3227ac0c064074b"],["/posts/e3ab6ad8.html","330f2c5fe4b3624172b7786e8ced78f1"],["/posts/e5018da6.html","ba3d381f9bbf6757717858689769f39a"],["/posts/e5963272.html","d0d3c84b3d1a6ff870ffdbacd6491007"],["/posts/e624b065.html","a828da7ce944faec781a41cbfb7f1bd6"],["/posts/e7c703bb.html","a62ac47cbf34161b4f200f8e49fac60d"],["/posts/e8f14b6c.html","83937e84b5d452340a24f62b30ec7716"],["/posts/e91abb63.html","38b120f1e2f3233dfbb14fd1baabe73f"],["/posts/ea9a8808.html","8ffbe2eee0e0cdf843c652210df8dc01"],["/posts/eb784749.html","bbc054eaba1c8b6adee174c976354258"],["/posts/ebaf2232.html","eeb8ce21e3e02ab9d75259896e7cf9f6"],["/posts/ee1ed673.html","7cf1cbbf7a22834156f2414e1dba67ea"],["/posts/f0c3ed61.html","52a8ed1336f5885793b46ab986f32109"],["/posts/f21e7f84.html","04e3b7af3ef54c324ce4d9c4849f83f8"],["/posts/f230b0fd.html","bc92d8072c8f5f8f51fdb73e78e13dea"],["/posts/f663d5cc.html","a50a960e8b9885b3b15150a9bf6b85cc"],["/posts/fc04d0d4.html","aaef8dd64754ce35d6d89936cb422d9f"],["/sumire/index.html","327b0dab5cca82c0131f35ea5426f3d7"],["/sw-register.js","e314af6450e429ce5eff77dbd16ed603"],["/tags/APPLE-project/index.html","f5dc3669a629331e633729152a825ab5"],["/tags/BELL-DA/index.html","b4ff5cad23788a655cc50267d7f33674"],["/tags/BL-Game/index.html","ae96688667961facb659159b7a9b8c46"],["/tags/Blue-Dahlia-Digital-Creators/index.html","b8183786462e173f9cea849c8221b514"],["/tags/CHUNSOFT/index.html","2c3d7be764c21aab680219b287fe3a2f"],["/tags/Check＆Stripe/index.html","29978b5eb84e50bf2500dab484afa464"],["/tags/Cherry-Pie/index.html","6b2357c2e804fc3524d0ca6f1bd9f883"],["/tags/Circle-Mebius/index.html","d938f7281094a626bce27d1b314cd397"],["/tags/CresCENT-BLANK/index.html","f1f62eec8ba4479c7a671e5a10e29408"],["/tags/Dopamine-Software/index.html","97354812a099dc20cff44af2b79abe58"],["/tags/Dos/index.html","32dba0aca3f12c32989e1f111d286ff9"],["/tags/Earth-Well/index.html","7e1b3e158614cc41147daa8bf1ca503e"],["/tags/Forest/index.html","f4d73c23914149e89cd68a721c2925d7"],["/tags/Kanon/index.html","292b370b4519fd034bcff20390b5d531"],["/tags/MANATSU-8/index.html","a0f64a44ea0de0814dc5baa2ce918710"],["/tags/MARINE/index.html","0c047b773faa789cb2702be1b554e358"],["/tags/MIO/index.html","5c9a127ff954aa9777c03fa5272811da"],["/tags/Nmyu/index.html","38198168a6c88f97c0bbcf92296981f9"],["/tags/O-S-I/index.html","4c324932e524b0ffc8e59676ffe5fec4"],["/tags/Omegaの視界/index.html","20c6f26f64b528291bdc2ae8d5d47d69"],["/tags/PC88/index.html","0f3c1fc9c48dc85e9a5fd2be63146315"],["/tags/PC98/index.html","f96650a1c7ef10aebd8926b49e9486a8"],["/tags/Perpetual-Room/index.html","b5844912097cf35a62d352e2c9208329"],["/tags/Pleiades-Company/index.html","95cf0d0fbd1023bcafbbdfaee6725c41"],["/tags/Project-Twintail/index.html","4feacf42614e2fc61e4b85d2db3de318"],["/tags/RIFF-RAFF/index.html","36d8abd831e13684bc3558b5c6d6c0fc"],["/tags/Reverv/index.html","dc0212b51f15b68201eed326baca1048"],["/tags/SENTIVE/index.html","6768ad9ac63ba8e98dedb43d997bc0c7"],["/tags/Saihate-SOFT/index.html","a77e5a95be7e320965675bc3029c35fd"],["/tags/Sky-On-R-imaginAtion/index.html","6927b7fdb0e0152894616f3f232970e2"],["/tags/StrayMoon/index.html","b3b9838ce38244b162ac6c916713c2f4"],["/tags/Studio-Bu-Sa/index.html","3f1c73eddc9bf75bef724bea5ace6160"],["/tags/ToHeart/index.html","855e9240b08f47b6d40310e56c3dcb4c"],["/tags/Traumend/index.html","fe345cb68eee8bc894b5e1b208838410"],["/tags/Witch/index.html","eba1ad6058aed0168dfeba4cdd66cb0e"],["/tags/adonis-project/index.html","fd420dafe502c1cb35f617090bce8acb"],["/tags/flash/index.html","b5415f88131a94af865bc8e5a43c10bf"],["/tags/galgame/index.html","877259e74eed616748fa530b776d356a"],["/tags/galgame/page/2/index.html","8ba8421c87383089fb58e894b3e64647"],["/tags/gal资源/index.html","8dda0208a1f3ba78832b373ad423c3d1"],["/tags/gal资源/page/2/index.html","8a232411b3756c05c2076e17fc69f71f"],["/tags/gal资源/page/3/index.html","e9d2f51712d32ca97fb2b885421801fc"],["/tags/index.html","5dbe19aedec1992141d73f7227cb35ca"],["/tags/rkr/index.html","e8249cbb2ad979fc826f22e7c1210080"],["/tags/team-eye-mask/index.html","0eae5af262d632da7c65e8c12c643b72"],["/tags/ありすくろいつ/index.html","6a171dfeac3b96a4b11da7d907839ab8"],["/tags/いつものところ/index.html","81837e9ce857053b98f3b0a572fbe53c"],["/tags/きつねみみ饅頭/index.html","f10a9a7be6ccaf6d1f19701a6e91de4d"],["/tags/ねこねこソフト/index.html","728a6b7f1b0e9ecf37af2ef0d004df2e"],["/tags/ねこバナナ/index.html","195099787806d8a9480409f0ecd6922e"],["/tags/はちみつくまさん/index.html","50683b3a12a980caf2290f97796c59f4"],["/tags/ろりちせ/index.html","a8083415091e2df2b357f206a660e846"],["/tags/アイル【チーム・TATU】/index.html","0c04e3f956515c56dd77c3a410886222"],["/tags/アークシステムワークス/index.html","8e121c18dd3388dece6efbbe7bddc81c"],["/tags/ブロッコリー/index.html","335576cef65217b6ebd28d40f1b88483"],["/tags/乙女/index.html","627f6323fa895df913e3865bdafad895"],["/tags/停产/index.html","2edb9dda4f7ed1587223429c5ac69c7f"],["/tags/公告/index.html","a7692a41e66916db5907c193bf28f9f2"],["/tags/同人/index.html","eb8ce8f076c66a536aa564f7c80035ad"],["/tags/堀井雄二/index.html","88d87a42f6ba40fad67d318051bdc14c"],["/tags/外海なおき/index.html","8d85b11b3b6e1acbc49f6a944c44361d"],["/tags/桃野衿/index.html","820c09253c4355602301745f7fa4779d"],["/tags/機械式少女/index.html","420530b8b1c1915f3028c71cd3e0ea48"],["/tags/水仙/index.html","7c3d2214bca84794ed402cf6697018f8"],["/tags/汉化/index.html","ed87143b878736508735240c5d8e58a8"],["/tags/片冈智/index.html","f44337c87f861c633b0b570bec9eed7b"],["/tags/片岡とも/index.html","e2fb90c5566f9bed0b3ee7907c11f2b4"],["/tags/牙の刻印制作委員会/index.html","a56aa770d62086195afca3476a6939e8"],["/tags/牛カルビ定食-FLAT/index.html","efaca5a2e9b8aa044da4ae3a8566aa99"],["/tags/牧尾屋/index.html","11a6062d008e2f5037eadaa92ec585fe"],["/tags/猫猫社/index.html","3826f88c4036119a9a022a4577158366"],["/tags/王宮魔法劇団/index.html","a3d8f39f3385bf986476b00066e17cb5"],["/tags/画集/index.html","f3d0620ffca82658e5a89697504f7677"],["/tags/索引/index.html","fdf93248dd2bbd9574b3e4b154e98aee"],["/tags/缺失/index.html","9e266c26e21076b4582bcd032249a3c2"],["/tags/自购/index.html","822d6753f5bd22b720574d7c8adc487f"],["/tags/茶葉☆姫/index.html","bdf7e6ce6256106b88397679e3ed10af"],["/tags/郷愁花屋/index.html","954e52cac72d140feba5d2354533f307"],["/tags/閂夜明/index.html","5a9f0271f8239e992a832b5b8918822f"],["/tags/音乐美/index.html","0038a6f06292f96c46f9ee9e64a968e2"],["/tags/黒†救/index.html","2278862b61ea08c6d035290a03f4e31c"]];
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
