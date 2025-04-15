/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","4a80d62aab9935abd9939d48d231752a"],["/archives/2024/04/index.html","89af0394efe6bda4e0b2282ba3772901"],["/archives/2024/index.html","76654f8548fa6df4fab056a052c505f8"],["/archives/2025/02/index.html","9a237370fd9730f7b13a84a8e38c27b0"],["/archives/2025/02/page/2/index.html","e0a3aa9c5ab92bf0b161597712897f43"],["/archives/2025/02/page/3/index.html","66a3f6aa0865e8fbfaf4eee68578096b"],["/archives/2025/02/page/4/index.html","edcf28c98310fb744a7341aa375761c2"],["/archives/2025/02/page/5/index.html","1171d76297f1aa9fc559b7afabb2b13a"],["/archives/2025/03/index.html","d1cc13956fc983371d6cb06ddb2708ca"],["/archives/2025/03/page/2/index.html","d1d84ee0d337da93c348ee87c98d3f46"],["/archives/2025/03/page/3/index.html","7333f3e5161af4ab18d37c98a9a930ad"],["/archives/2025/03/page/4/index.html","78c937f401b38c54f6a4260675e1139e"],["/archives/2025/03/page/5/index.html","f8084a9df6a91efd5e6f1e797b4aea45"],["/archives/2025/03/page/6/index.html","c390cf7335e6d1cc8845468cb7594a5f"],["/archives/2025/04/index.html","ffa5861592eb61d85d49fd152f0e0328"],["/archives/2025/index.html","c1bf93c071eda5bae661de3d8e9b8e44"],["/archives/2025/page/10/index.html","9f55862b0960d05e91a8c6d5fe8f3897"],["/archives/2025/page/11/index.html","68d336b973c840f137bb85b53206a65f"],["/archives/2025/page/12/index.html","471fd079d2ba0896b137be0e9caa7bce"],["/archives/2025/page/2/index.html","95fb0773a401975bb7261acbeb9c4a0e"],["/archives/2025/page/3/index.html","89c90ad0b549a2efab81e38087156f3e"],["/archives/2025/page/4/index.html","dfbf5c51eb3fab7d5f7a075445e0961c"],["/archives/2025/page/5/index.html","f480154e13475bb76e63cb67ca5c49a3"],["/archives/2025/page/6/index.html","f59b30420576fa81a521a179b8b930a8"],["/archives/2025/page/7/index.html","594a3ffa1ac69abf291a6477db3cd158"],["/archives/2025/page/8/index.html","9f67925eb8fd41dcf4378ebdfecef1f9"],["/archives/2025/page/9/index.html","a366b4ebab2cc8e7166b652f59ed04c7"],["/archives/2026/02/index.html","6e6f092294e7c4d7e78773b22093daf5"],["/archives/2026/index.html","96b0eaadd5ba292f969471c6b6b90fac"],["/archives/2825/04/index.html","f6838cbdcdb4eece9ddb5fa94d0e1514"],["/archives/2825/index.html","de3a97f28dd8a20c86d0427106589a04"],["/archives/2925/01/index.html","990129a1d1932d26b9566235f4f92579"],["/archives/2925/index.html","358ff445177c2cd5ce3a2c639d3ea596"],["/archives/index.html","a5eaae9be361ed14fcd03ef8f0bfef9c"],["/archives/page/10/index.html","4c84fdd56052e9cd11e9983a666ff384"],["/archives/page/11/index.html","4fb5f0c0f57ff44582eb6db78f10d0a3"],["/archives/page/12/index.html","1fa661a9678e1bd2e559b69d097dc01d"],["/archives/page/2/index.html","d3952e1af4a5b89884ef2d8c05eb66b1"],["/archives/page/3/index.html","2eb744767bccee38855c471611c323f7"],["/archives/page/4/index.html","8442e5958a9179d37c675d6a54adc3f8"],["/archives/page/5/index.html","48064066c0f5736f681e99e3c37f1f61"],["/archives/page/6/index.html","2d4160b8a91d24f1c7ed5e9e62d9b958"],["/archives/page/7/index.html","72c28dda25be8a6f98bafce4b7250db1"],["/archives/page/8/index.html","692a64a5100cbe481a96b4482cdec113"],["/archives/page/9/index.html","5e94a1bb6a302743b8bd53d14605f8cc"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","7ac9356802be0ac5376272e9840772da"],["/categories/galgame/page/2/index.html","bb2a5ad9508c70153ef12c8464e1f096"],["/categories/公告/index.html","f9e99a57acb9660d8a0fd8a64014cd7c"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","bcff207269d03aacf822013d74ddb24c"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","3e548576ad89aafac302a55255b2242d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","dd025cdc71c06ac71e633e8543fabbeb"],["/page/10/index.html","b9f7b2cbd638ebd111f4cbca7ce1a0a3"],["/page/11/index.html","8c954f4f73354f60db2601a88535c878"],["/page/12/index.html","c46d151adc1a317a3140e9ebf95c2e7f"],["/page/2/index.html","0f78d5e860da1ad91b5b246e42c1e324"],["/page/3/index.html","468bbaf9231895973bc64b7bfd1405f3"],["/page/4/index.html","8af3e984872b046f133434023698b259"],["/page/5/index.html","87256cbf918c2efa7bdcd7713ea17369"],["/page/6/index.html","d7b502d3e485c8e6cedd236741313e70"],["/page/7/index.html","90a4a89f7c519f4d1da53bb01d27c3d3"],["/page/8/index.html","a3647eabb30fce415b53fe6138322bd0"],["/page/9/index.html","d3aef1d2e2d7bd8c711b02ef4fb85329"],["/posts/10c9dd98.html","bf1d689ffa875d4abc2141879a400a3f"],["/posts/1295b569.html","5f80ab8a103c106c1fcf4ef9c2b1f9c6"],["/posts/1370342.html","e4fdf2d535813aad1f2bf76410d2aee8"],["/posts/15ef14c2.html","f58ea7ecbed9341266d3a74153aeabc9"],["/posts/15f3959d.html","876c6e25b7ab27a4e2d92073ced57378"],["/posts/18ab785d.html","6bf4e62b978d9b4b421acb6f5e9fcf27"],["/posts/1d59b71f.html","c33c384da0e6df899a0f3b0d163c6f08"],["/posts/20b3f3a4.html","8370e30aadaaec4d61278328a856d5a6"],["/posts/245f1c7d.html","d55f532ab2689f9493ddb56101787e73"],["/posts/252658f.html","d1e864ba13e6be5143c3a2cbc5c82132"],["/posts/28397adc.html","9b0884ba4f8b5561dd47e2a67cc25313"],["/posts/2b38bce0.html","bd5ba31eeba786edb475f2ca2836abb6"],["/posts/2c0a6836.html","7984a0923657f85b282283e0417daabe"],["/posts/2ce39bcc.html","b2b742ed678775d0c12c79ec2ba76902"],["/posts/2cf620f0.html","554b44825131b0130d2906ba42da246d"],["/posts/2e30fd6d.html","4571cae8f8697c40569ce4691b04c55b"],["/posts/34292736.html","b572b8db9f69b9208166a82b39fa74a2"],["/posts/3468cbe.html","4a1b0ac644472d809bb4c259d8a6ffaa"],["/posts/39176dc0.html","f6e02bc95b63dc1e30213ac037c67178"],["/posts/3e118dbf.html","b308f8c46266f46825e4cee07afbfd66"],["/posts/3f7d823a.html","341c4d427749f325caa9536ae926b195"],["/posts/3f978819.html","4921c5135582adc9155fdf096d6eccda"],["/posts/43945723.html","13e18ceb77564baeadad5abb4bd1ded9"],["/posts/44124a6b.html","c210d203806e00a2b685ce2a097ca06a"],["/posts/47abb61d.html","17174e7eaa5ccb7e002add9c45b5b8f2"],["/posts/4b689be3.html","00460411572fd3d925cf6c2a1dc7e6de"],["/posts/4cf8423f.html","8a1b1360aa1b5b32ed804d0bbf77e322"],["/posts/4dcf85c.html","7152bcc53e4752cab3d82ab80d400310"],["/posts/500cd322.html","4c90da8f964d4ac38b948e27826e728a"],["/posts/51c9b1ff.html","2bd72e2570de95e48d15fde8f8d7e8cf"],["/posts/52b5b3c6.html","8b3072dbfb5778e2609308d290237173"],["/posts/5d8bea92.html","48aac6e68bb7a63e881a38e5dae20cde"],["/posts/5f6e0c59.html","6fe888b1ace042b6d20358971a956165"],["/posts/61a63a84.html","ec2c27802489993b559254a62221d7e4"],["/posts/625ab7bf.html","3ebe944c86b8963b4d636be214dbe286"],["/posts/6336a2f9.html","897f19ccd5c0ae41d96b635c0192dfdd"],["/posts/6432d61a.html","2766bf386853f1d70426529e2bbca499"],["/posts/6515f032.html","a14b3255a9a82b245d5c45563dd521d6"],["/posts/6720ccdd.html","b0d7ee12c2ea96b487e844446932f907"],["/posts/6a4b5ac8.html","24c7a1b7da7bed50d6fa5c7a46294151"],["/posts/6aa4177c.html","c5c1c6e8fb6d1e5f07c288ad1c56f29b"],["/posts/6b15f81f.html","2236532cc4de1c5242e88387775068b1"],["/posts/71131d34.html","b16d65a8e9eff621338b2013d25a2003"],["/posts/78a8a8d3.html","15e1b49d9f95dee2e2acf9428211cc74"],["/posts/7a5ef3d0.html","cca0dfbb8c97c006edb595fb50a34d6a"],["/posts/7b41e1ac.html","115dfc4fa0091ae3c2f6f3480bc8f824"],["/posts/7b51011d.html","3c72c1d2ed5a5ecb674d732521201b33"],["/posts/7e3aa3e2.html","f632fab1753efee702b8e3109924a3df"],["/posts/80fe2691.html","7a7a294ebfd23c6cdfd583bb8ef3fd68"],["/posts/81ac52e9.html","0b85e6eff6d5221a8b932587b86e6496"],["/posts/82332d11.html","2090809bd849bbdfe3b0e64a271a9d44"],["/posts/8486f6f9.html","c50c02d63e9c85564d408bbcf0da9075"],["/posts/849b40f8.html","a897ac169f72116210b7ad000a8def8c"],["/posts/85c51d68.html","fc45a25ae5e1985e6438ca396f3f2694"],["/posts/86a6c500.html","1fce858b01bd1fa8aacd114a15cd5803"],["/posts/886f8d3.html","dc30b8f5192accb8d8d4d252e526984e"],["/posts/8a7cba10.html","11f36005565faff9e3c4c2eed283e2a2"],["/posts/8ac11b41.html","3a8cd4a0aa24103818da314a62cc7790"],["/posts/8dd520d9.html","140ed812acbde9ca2d318d78737837dd"],["/posts/8f555654.html","4f705cbeb4c30050ac5e9a49fdce918d"],["/posts/92a980c2.html","ee4a5a219a551d14fed1b1ebe28ee148"],["/posts/92ce16.html","316846e94136c0887e664476e3488c8c"],["/posts/93e9943b.html","c7714d47072172be4f49bf688a6aa274"],["/posts/94d3c794.html","367f82164c80a5c4fff853ec82df1d9b"],["/posts/97f50eea.html","e7d49272cdd8e022d5b42c60fbb1eb9a"],["/posts/97fca8be.html","834ca5f923b3c5c8cd1beeaa1f342e99"],["/posts/98662d05.html","04dabf273a504333780ded7d7886167b"],["/posts/9a2f6162.html","42607d77fb7065f92daaa01d275b8b62"],["/posts/9b22a48d.html","219d5636c845b35f553b77357922bcf2"],["/posts/9cb455b1.html","94f81d254eca41ff3b3842af9ac5bf90"],["/posts/9ecdeecc.html","9a733bf2c7451217c1add183f149a5a3"],["/posts/9efd7701.html","29c19858503f8054f572db172c79041a"],["/posts/9f61c1a0.html","4944d3df59fede88e04b9c91bb32bdb1"],["/posts/a1de710.html","106a3a2b842c80a5e4f501b26d6eba66"],["/posts/a30eb0cd.html","3a05f193e82db11ec902bdebcf8333b1"],["/posts/ada3f440.html","ef2ae0d76ab7799e41a439d6257eff7c"],["/posts/af1807ef.html","e6f1e0ab74cd3ed62589bf514559367f"],["/posts/b497b647.html","7aa0194f250cc0396759d8232f07cf84"],["/posts/b4d464b0.html","04aed87a2db1898202bee46394f33234"],["/posts/b5fb773f.html","b7964738d68d7202e87045fcabc295d1"],["/posts/b8d46b32.html","4ee1b8eeec43e2b1e846d13e70214950"],["/posts/c1b2c6c9.html","069372775247782ce7742b2568547793"],["/posts/c2111cbf.html","4b8e027704ad73c2420d7c6bbba9cb06"],["/posts/c316c2e8.html","7d51f2ca6a1831adfea6fb59e74b6cfd"],["/posts/c43e60b5.html","dd9e26c8cae5dc26a8b46ccb7b66e943"],["/posts/c497a412.html","6d14abb8c27a9174a80eba8298dda15f"],["/posts/c5de299a.html","36d4aa1d1c75297a5ca093b842273ff9"],["/posts/c70bba9c.html","a4683c51300b5ad37d7f0f7ddf0b08c2"],["/posts/c797535e.html","cb7de293a484c5bc9115d7ae827753bb"],["/posts/c7a62c79.html","6f9bc49469805a07ef904f7955fe97bf"],["/posts/cae2c959.html","f09f1069f02064e1a7b6e3b0b380c7c8"],["/posts/cbebef2b.html","2b3c13074d6c990867ba395476f41ca3"],["/posts/ce25023e.html","5ff7feb2e4c557738fac77b15e6849df"],["/posts/d2fd4837.html","05ec006bc850c76307da748ddceed99d"],["/posts/d3233cbb.html","e539b852367a23e455b229133ebdacf6"],["/posts/d3a745a8.html","f1a113809d1e1a0915c7a4622c0b1161"],["/posts/d7e940d2.html","3d0412ed77eb27b20cdd8d424add204e"],["/posts/dc815d5.html","21d1de3ea3f3fcaa71c8ab5998431285"],["/posts/de25b0be.html","3a0f1711f7b1380a16f8fe52edb05c8e"],["/posts/e2623b4e.html","cf8fd48dd47e9471751c8f60b901ae0c"],["/posts/e3ab6ad8.html","330f2c5fe4b3624172b7786e8ced78f1"],["/posts/e5018da6.html","6c7b0da19a128f1b1f9da663ffd16c0b"],["/posts/e5963272.html","d0d3c84b3d1a6ff870ffdbacd6491007"],["/posts/e624b065.html","e2816463143b2c84da94c5b00b8a524f"],["/posts/e7c703bb.html","a62ac47cbf34161b4f200f8e49fac60d"],["/posts/e8f14b6c.html","83937e84b5d452340a24f62b30ec7716"],["/posts/e91abb63.html","39063078449312c43b3b3f9b1e41c9f3"],["/posts/ea9a8808.html","8ffbe2eee0e0cdf843c652210df8dc01"],["/posts/eb784749.html","bbc054eaba1c8b6adee174c976354258"],["/posts/ebaf2232.html","eeb8ce21e3e02ab9d75259896e7cf9f6"],["/posts/ee1ed673.html","7cf1cbbf7a22834156f2414e1dba67ea"],["/posts/f0c3ed61.html","52a8ed1336f5885793b46ab986f32109"],["/posts/f21e7f84.html","04e3b7af3ef54c324ce4d9c4849f83f8"],["/posts/f230b0fd.html","c2e9f86d21196b9d898bb0f95c2f3514"],["/posts/f663d5cc.html","a50a960e8b9885b3b15150a9bf6b85cc"],["/posts/fc04d0d4.html","aaef8dd64754ce35d6d89936cb422d9f"],["/sumire/index.html","da48696308478c527432694fdd37d61e"],["/sw-register.js","50de88a246c34fe916afbc062ea3f288"],["/tags/APPLE-project/index.html","799778c1391bd7597f4dfeb4eb68531e"],["/tags/BELL-DA/index.html","b5090abd5f3b6fd5d34626d3c22bda8d"],["/tags/BL-Game/index.html","ffbb33ed0eb16af7f7865368af350c5c"],["/tags/Blue-Dahlia-Digital-Creators/index.html","bef4742f2f3d2fbec0980d528198bb92"],["/tags/CHUNSOFT/index.html","a46a3b9e4f0921cd0f6e3af8abb6a788"],["/tags/Check＆Stripe/index.html","38b4210a215ef7586a39f8528279aca6"],["/tags/Cherry-Pie/index.html","eb21bdee021139ea4883602c14422684"],["/tags/Circle-Mebius/index.html","e911a27c214593ff60698ea52e5e4edf"],["/tags/CresCENT-BLANK/index.html","871bb45ae97ab7350a03a7ed6b4f75ee"],["/tags/Dopamine-Software/index.html","1944a0cb6145da3060695e1fe228be67"],["/tags/Dos/index.html","0796af2555ee46662b0f39981fe9b293"],["/tags/Earth-Well/index.html","dd4528dbedfb0803af4518afab0699da"],["/tags/Forest/index.html","683ae46ab5b10b76433ab0901b84ff32"],["/tags/Kanon/index.html","b30ac5bd668f12314c1830c4e894391e"],["/tags/MANATSU-8/index.html","a31bb484e9bae8549d5bd0410aac6173"],["/tags/MARINE/index.html","f842345797c1c10349da624ec6049a4d"],["/tags/MIO/index.html","65f5f5c761a6cbbfdb2cb6ea98fd351b"],["/tags/Nmyu/index.html","bc49c4030c63b460326d1094218b87b3"],["/tags/O-S-I/index.html","5a5b7b3ed9712372e2a85bd40c841db6"],["/tags/Omegaの視界/index.html","42d4ce1f747fd9832ac45560a444128a"],["/tags/PC88/index.html","7011c6321e12208672b1ce2ac3a6bf01"],["/tags/PC98/index.html","e52955cdff209cbab59d17b440b2f750"],["/tags/Perpetual-Room/index.html","3f08117870ef7f3e7de84dafa1a426a0"],["/tags/Pleiades-Company/index.html","93496d507044b17e9db3dacd1b55ac13"],["/tags/Project-Twintail/index.html","c477c60d8d242aae1dd3884601fdc611"],["/tags/RIFF-RAFF/index.html","35af7fc14faebf6162658646b67c5d36"],["/tags/Reverv/index.html","87e42a4fdebed4f302646eb8f9c014cb"],["/tags/SENTIVE/index.html","f3d2e040c0eb2f153b48be3f29a38033"],["/tags/Saihate-SOFT/index.html","edcf52bf353a56418b6cfad768d873d1"],["/tags/Sky-On-R-imaginAtion/index.html","b5e9b005012df4b68e90d2629f8fb325"],["/tags/StrayMoon/index.html","0066d6517c155a50dea4de8f14113505"],["/tags/Studio-Bu-Sa/index.html","8a87c8d14e772b061794648a2cdc953e"],["/tags/ToHeart/index.html","e8e679b5d5dfb419949aa2f125f4c204"],["/tags/Traumend/index.html","5be1ab829ebd21399e7b5bfc0ae9f54e"],["/tags/Witch/index.html","3cb7fef74ebf0c43fcfefa29c4474a1d"],["/tags/adonis-project/index.html","87ca589cdc190e401754170dbf78ca21"],["/tags/flash/index.html","b327d928359a244896889c4a5211d1e1"],["/tags/galgame/index.html","5ff4eed5e3541de8db9d39e138beec4e"],["/tags/galgame/page/2/index.html","7af99621909f60fda3f9b297a142ed4d"],["/tags/gal资源/index.html","f9125a71362732ded07fc16d7fca89c2"],["/tags/gal资源/page/2/index.html","9b5d270523fa69d03791dceec993d3a7"],["/tags/gal资源/page/3/index.html","4045b83cb269432651dfbc42d9ab365b"],["/tags/index.html","cb071cc6ae6b78d0c482224a2d4d9453"],["/tags/rkr/index.html","53a01cde5aa8b2d83ef301dc31cb1500"],["/tags/team-eye-mask/index.html","635c9f78004a4373300b16bfcaa218c1"],["/tags/ありすくろいつ/index.html","8668aa37522fce06e79554b4f25e767f"],["/tags/いつものところ/index.html","ca0f40476d4d2f4ae57062d67fdda6d5"],["/tags/きつねみみ饅頭/index.html","13876a05b9a908106c2dee5d5e38291b"],["/tags/ねこねこソフト/index.html","65e950bed3860767b69d7a3e2492cc79"],["/tags/ねこバナナ/index.html","53e9089da6cd1a766e320652fda02f51"],["/tags/はちみつくまさん/index.html","6f64b3735ab6399377a84787e9656e73"],["/tags/ろりちせ/index.html","9382aeb2f9472439fb0038a286dbff3b"],["/tags/アイル【チーム・TATU】/index.html","1ccd35a67fddb5176744e1f67ad273f4"],["/tags/アークシステムワークス/index.html","1733352184e2c7ecbb1cfed4574b2a91"],["/tags/ブロッコリー/index.html","5915441ebf44f33013fa2bcb2c46b3d9"],["/tags/乙女/index.html","cca4024232ccff2b4ea742e9bdb2e6c5"],["/tags/停产/index.html","ca8c26d748e9162022a933d462a0adaf"],["/tags/公告/index.html","36727d2f441089b7c5b1ddcc893aa486"],["/tags/同人/index.html","b7ac60a80d67b2d47bff0a4c32c3ac23"],["/tags/堀井雄二/index.html","b0ca57d1f228d9147f7f0e0729055904"],["/tags/外海なおき/index.html","feaf8bbc13c800d9f9a8444da60cdf3d"],["/tags/桃野衿/index.html","40a7cb8eca19747f94d6237a5d508428"],["/tags/機械式少女/index.html","2c515411775166c434618477ba5a5be1"],["/tags/水仙/index.html","85d9ac3b15ac69c51b2c87ee63b63551"],["/tags/汉化/index.html","ccace9061907275efd0e0bf8d035e26a"],["/tags/片冈智/index.html","d91a5339da72c3943df056f280ef491b"],["/tags/片岡とも/index.html","5d134b182bfdaa562b023d22822a3ba1"],["/tags/牙の刻印制作委員会/index.html","2982a3e10a8196e55485d0372df79492"],["/tags/牛カルビ定食-FLAT/index.html","c466125dd951a9f04efcdf936b6f9422"],["/tags/牧尾屋/index.html","607037a5fcf698011a8d1ae8c7dda017"],["/tags/猫猫社/index.html","0d5b54afa4bfc5c26eaa0ff86f47356b"],["/tags/王宮魔法劇団/index.html","f07c05cd77743d199f8b14c8eff1e8a1"],["/tags/画集/index.html","6630a81a734cc1db71c47048685b0723"],["/tags/索引/index.html","c46cd766660aab0d69d1d9b8d785c585"],["/tags/缺失/index.html","5c11fe6783c7ede6009d251cbc2d7285"],["/tags/自购/index.html","3380ccc14b21edbfca873acd70571caa"],["/tags/茶葉☆姫/index.html","0fd1cf3bdfbbae3d64187805a42ff5f4"],["/tags/郷愁花屋/index.html","2e9754a3f8205f6d00ec60a3dcbbab37"],["/tags/閂夜明/index.html","1ff9f2cad98edb681b1405e7f54126cb"],["/tags/音乐美/index.html","ac5a6046dada18397c1bf60e7db86696"],["/tags/黒†救/index.html","7b892553d1d84b639534795279f1c5a2"]];
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
