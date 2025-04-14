/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","0c7ffc5ec6e61362dbc3eeb713ae2c7a"],["/archives/2024/04/index.html","ed600129b2b6d243d675344f26b26601"],["/archives/2024/index.html","bbc3731634c791b9028c7b59b51aa131"],["/archives/2025/02/index.html","18b316dfc1784cdc4cb38b32b487d94f"],["/archives/2025/02/page/2/index.html","536fa0d169ebb55b3b1fd26dc36faf12"],["/archives/2025/02/page/3/index.html","d3037e518aade0f36274c74b97f6b59c"],["/archives/2025/02/page/4/index.html","2508afdc2d197d5dbf77df92d5fbe744"],["/archives/2025/02/page/5/index.html","e154c1c0a773c36aaf43b0e0110f26fa"],["/archives/2025/03/index.html","e85fc30d201773d4f5b909d00956678b"],["/archives/2025/03/page/2/index.html","f25306b3f38280c8f8ad7098347be84e"],["/archives/2025/03/page/3/index.html","73c547cc2b7f9d519a2a630c1ddcd41c"],["/archives/2025/03/page/4/index.html","966d14fa1d2d11e1a02ef7a584994d9a"],["/archives/2025/03/page/5/index.html","efda0517aca797f70d2219bab3d4baff"],["/archives/2025/03/page/6/index.html","9c8e84ff0d31ea13aefd5890991c9889"],["/archives/2025/04/index.html","cb757207d8c0fd9ba7d1c252be926dd6"],["/archives/2025/index.html","e5003b19a2a7ba7391a3f6b6ff2e21e8"],["/archives/2025/page/10/index.html","3f59bbe8436daa9dbc91d39ca0e7534c"],["/archives/2025/page/11/index.html","1a75d40fa1134f07fdbffa5acc2e79ff"],["/archives/2025/page/12/index.html","fc0eafd7fb41546974e60d041c09ccbf"],["/archives/2025/page/2/index.html","102fa711b984294d77c2939268770ddd"],["/archives/2025/page/3/index.html","ccb59f9fe7f72f074c5a393122c1df54"],["/archives/2025/page/4/index.html","45150479520bcb3db1e57989f36409d1"],["/archives/2025/page/5/index.html","40b6215a3d09c15d73efdb222e76df37"],["/archives/2025/page/6/index.html","3f61a45b266f1ca2c37004599f4f3dd4"],["/archives/2025/page/7/index.html","7791908d6f1120dbb4a4726b743b3d8b"],["/archives/2025/page/8/index.html","7dc3dd6c8f5fa91ac025661ccdf367c8"],["/archives/2025/page/9/index.html","936c0948c0e2ff44c438e6867dfd6779"],["/archives/2026/02/index.html","05bd015c309c4c199242d0498b778550"],["/archives/2026/index.html","04d668028810543e80a6a75a3e7b2c36"],["/archives/2825/04/index.html","d901f63da60c28aa56da72bef8b073ef"],["/archives/2825/index.html","b89f96d745721a46f5234a76668450cd"],["/archives/2925/01/index.html","161f96167c42a560c16a154657f47df8"],["/archives/2925/index.html","6344bdf756b11b7aa72962140f131a5a"],["/archives/index.html","98df7ed1ddf83aa6a5da7c8a52e453db"],["/archives/page/10/index.html","1c7fff0a0871c0231b6b58492b6f5985"],["/archives/page/11/index.html","e73bf3463ec7d4feccce6f02a6c5c02e"],["/archives/page/12/index.html","66e11c36ae8f828cc9b9b34e05507887"],["/archives/page/2/index.html","1fe102e9f3af8f1d36616c04feeccc84"],["/archives/page/3/index.html","2d7e506ee5dfd0db9b64f7cee49cccd8"],["/archives/page/4/index.html","bbaa66d3bc3bda59c05050eaf3e91df8"],["/archives/page/5/index.html","e5a10bdb25c1a7b0656438873c32e9a7"],["/archives/page/6/index.html","82c88a3df3e805a15078df76c10dd913"],["/archives/page/7/index.html","27acdb8be0060b014e8d05502796e5b2"],["/archives/page/8/index.html","c530f39a8e0892aaced9895c370d74c3"],["/archives/page/9/index.html","80cfb0b77e9452cd67c25677bd30f058"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","4fa96e7b7f774885d83589c80e59b091"],["/categories/galgame/page/2/index.html","eea14c20b4964f4586908661b955fcb8"],["/categories/公告/index.html","027a66a9b5aad719390bdb6e20c07557"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","910af109a8f4db98cad07ec59d660590"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","7ccb3b015df5a7819eac5f63cb29af34"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","1e41233d30629b4f905c496227804a33"],["/page/10/index.html","67d2828a0a80b420bb3c0f6f46c1fb6b"],["/page/11/index.html","a05c80d0f55878398d2fae632be7ef84"],["/page/12/index.html","19e42da0001df454e2e8591cd13882b0"],["/page/2/index.html","30bbbd7a9148701233a91d4fa4acc817"],["/page/3/index.html","acd97e8c69caffb94c8ee80a716fd8df"],["/page/4/index.html","4eb4efe57805a56b29379c36ff629e69"],["/page/5/index.html","6905ffc664e69f4dcc1c8de04a88791c"],["/page/6/index.html","f3d4cc4f51ecd14b79710f63236229df"],["/page/7/index.html","4f13587d3cdaa0e444b2f3d6ba4b69ce"],["/page/8/index.html","ca4f1b2a346d50c3626f96a8f7f4c3ea"],["/page/9/index.html","cca59bcda026b60e3f9e3cf0f082a6f6"],["/posts/10c9dd98.html","88d37d2d6e22b8168dd15198e8007843"],["/posts/1295b569.html","4b5eff528b51f302210792ae3e403fe0"],["/posts/1370342.html","5180314ff8d3ffc2d16244d5ba1728e5"],["/posts/15ef14c2.html","a611ee26cf11ba6a15e284dbc460e9b8"],["/posts/15f3959d.html","1bfff67741aa496bf531a8a45346b640"],["/posts/18ab785d.html","b454120f9c6d9de254b63458ee8dd684"],["/posts/1d59b71f.html","0151d96e4cfe13d2171ac81db9f8681a"],["/posts/20b3f3a4.html","7a9cdc06c2492d156275c5838467e58d"],["/posts/245f1c7d.html","d072c5e4f1616e907df94ecfe206f8a7"],["/posts/252658f.html","e2afdc4abd38f392b4bc07d4b003d3c2"],["/posts/28397adc.html","ef39900ef4b46bd42b09817075e6dd26"],["/posts/2b38bce0.html","f66f9c26cea9c075b0fd5d429faec37b"],["/posts/2c0a6836.html","f1f802e6f9a2c3096b4e1e75ec7c294f"],["/posts/2ce39bcc.html","4963e634134e529d4771a3c7b6c51096"],["/posts/2cf620f0.html","61e7473afea6ace79e76e080408fe335"],["/posts/2e30fd6d.html","09cf017840f45d9189a5d03fc08f8020"],["/posts/34292736.html","d079a27d61760d44644bf6d2a15f8677"],["/posts/3468cbe.html","254e6d09b8467ca80a9667c563da099d"],["/posts/39176dc0.html","b1645de9af7c4ec993897fc98b43764d"],["/posts/3e118dbf.html","6862af85797c9f46eedf63600221bdc9"],["/posts/3f7d823a.html","be5c6df495559ed5e616e09ac6889996"],["/posts/3f978819.html","bbb8dec3b234b38aa54771cd09a49d67"],["/posts/43945723.html","30bdec4535dc354546b4efb3cfe1afe2"],["/posts/44124a6b.html","d96008755eace58112b76fafc6b61e5e"],["/posts/47abb61d.html","b84c47e7a02dc8e62f6ac12581365651"],["/posts/4b689be3.html","a08798b83119092889dc9e8a13374dc1"],["/posts/4cf8423f.html","4e44779650fbe6ee7862c1fad9c4cfb7"],["/posts/4dcf85c.html","c5c34e17b721adb968ca655ac63c5a52"],["/posts/500cd322.html","58ee15fa7ad1fd410ef8fd92042748c0"],["/posts/51c9b1ff.html","37a1ba7fe0d0a1daee424064e3b3a94b"],["/posts/52b5b3c6.html","831d41ccad2eb91ddb5e9b5d51be8050"],["/posts/5d8bea92.html","4d527b366341c3f3f34b3c624394e5ad"],["/posts/5f6e0c59.html","073a4bb0a96bf74724befcd30bc22b3e"],["/posts/61a63a84.html","618af7141140b3b3021afa6b02f62b54"],["/posts/625ab7bf.html","4d8fc8b778ff42d2e3ffef1197e77d57"],["/posts/6336a2f9.html","1acdf793a4b9ddad68ab2749e96bd569"],["/posts/6432d61a.html","5c9f62effdff1c7965c17a06f3418d1d"],["/posts/6515f032.html","d4d7e31671947a5d60229cbc5788e29c"],["/posts/6720ccdd.html","61b7f13a5be84b48f12623c7d9d1362c"],["/posts/6a4b5ac8.html","c9159dc0f1bfe7b0298c0c29cb278b33"],["/posts/6aa4177c.html","1e1f1ea5bdbfae681bd2cbe44185106e"],["/posts/6b15f81f.html","50b76032eeccc1883b2137e6d1a60ac7"],["/posts/71131d34.html","65d106418d7d00887e2d1ddd68372f51"],["/posts/78a8a8d3.html","8145135847e06fb014aed9ecd0866649"],["/posts/7a5ef3d0.html","23453bda35acd58bd1ff536f1958fe22"],["/posts/7b41e1ac.html","9405bfd34172e9ce9f6f73578d5ae487"],["/posts/7b51011d.html","0422dfc40816101b3d205e565841c9c1"],["/posts/7e3aa3e2.html","45b75cc1e99e7f92195c1740b4a67fda"],["/posts/80fe2691.html","0d2de78ac4d3e7d39a8c75909a0851ca"],["/posts/81ac52e9.html","69f88c3124274b765b48c3f907bf634d"],["/posts/82332d11.html","1f3d324c7fa930a604eee6ace522494a"],["/posts/8486f6f9.html","54550b45722912d4377f173163999072"],["/posts/849b40f8.html","2728366499d176b628267b68ad69406f"],["/posts/85c51d68.html","cea99bd07b34d90dfc85ebffda9e33df"],["/posts/86a6c500.html","cd8ce4bec9dadf33863dc8b9340100bf"],["/posts/886f8d3.html","4913a29fcf7fb1407c23efd6502ed5b6"],["/posts/8a7cba10.html","6b1c6f5e1499851bd6449b0123b3a529"],["/posts/8ac11b41.html","1967b9f83a6faa056cb3e9c52294ad99"],["/posts/8dd520d9.html","49adbe28d99e493ecbbbf1ca1426c0f2"],["/posts/8f555654.html","f1e4670d970c9de3a8a9c2800b079959"],["/posts/92a980c2.html","09f8868e4f508c611d0db9befcde097f"],["/posts/92ce16.html","ed78176620b8eb734a79f5844ac70d3d"],["/posts/93e9943b.html","7654b55929021ca75e476f10f2e4420c"],["/posts/94d3c794.html","4769999a8976bdb78e101b832f1303db"],["/posts/97f50eea.html","ad78de6f81fd4f4b4f430ecb5fe95fcb"],["/posts/97fca8be.html","167ce512acc9b7bfb43cc6c5a093d328"],["/posts/98662d05.html","3b85ebad72cd5e5f653fa7a31e24caac"],["/posts/9a2f6162.html","8bf582a39af0d83793697798a6ce3cd7"],["/posts/9b22a48d.html","90fa75928ab5dc4e727d4c367f9b8187"],["/posts/9cb455b1.html","ac0ce91604d08cb79563c8e763fb4d0f"],["/posts/9ecdeecc.html","f3ee8e20443a5b27f3757031d410b5ce"],["/posts/9efd7701.html","11bf1e6ea780983649e46d574cd24f5d"],["/posts/9f61c1a0.html","becbd0e78371172b68a7e7d885c351ed"],["/posts/a1de710.html","2edacb3ef752679dfa504abf26e37ad7"],["/posts/a30eb0cd.html","583c1006b72f4723d78eae77978adbc3"],["/posts/ada3f440.html","d2141071f476a4c292bb13988b7ad2ca"],["/posts/af1807ef.html","5344f8083a8c7c7b1df0195ebd216e7f"],["/posts/b497b647.html","7dc8dc2cb659ff2e4200bd1a0dbd9c87"],["/posts/b4d464b0.html","7a20df2b7a4b6c34935a437aaa5c2b60"],["/posts/b5fb773f.html","b71dd89b87550bc71ac95fc2bf8dcf7e"],["/posts/b8d46b32.html","ed9352092e3a0015b29d9e3dad84c73e"],["/posts/c1b2c6c9.html","687179ecca45c7c8006ebc80d4ba31f6"],["/posts/c2111cbf.html","95631d6dd07613c0a933c2abc597dccd"],["/posts/c316c2e8.html","ea7755fb1aaed2cab2a07bf46cff47cc"],["/posts/c43e60b5.html","8b4aab95d195902548e0a36021f03b06"],["/posts/c497a412.html","baa09de89e424cbbfa7253ddc9f44f14"],["/posts/c5de299a.html","697422e22bbd4d16415d01302ba3b2ec"],["/posts/c70bba9c.html","629b79a94e6ef8d3d3e6e6164ce44322"],["/posts/c797535e.html","70d48701d1b7ded4bfec2304c3e6c9a9"],["/posts/c7a62c79.html","09ad33dc04fc3b595f695c9d8a03a89e"],["/posts/cae2c959.html","5fc302b8fbdccaae77338596783149f5"],["/posts/cbebef2b.html","5311c36d260cdacedb7c91943a816a07"],["/posts/ce25023e.html","b0810213bb6c531ad2b77f834c88a7eb"],["/posts/d2fd4837.html","9d75434a1212317b22ad311114f61c77"],["/posts/d3233cbb.html","6a1ad4addd7ea506b4ff2c86a15ccdf6"],["/posts/d3a745a8.html","08bb7ccfb2ac8fbe27895e3730f5f609"],["/posts/d7e940d2.html","a43616488be6c2937aba0a8b6a503ef8"],["/posts/dc815d5.html","2eac8b33e1161b28611fce4b26560561"],["/posts/de25b0be.html","2cd105c434596ab5b5accea6782f8d41"],["/posts/e3ab6ad8.html","4547e8db3d388655bb7bef3aa5532544"],["/posts/e5018da6.html","63e8d0b1d81ddeb53aaf8228e17c7b69"],["/posts/e5963272.html","a6282e080d52bd61fd284012ef06b031"],["/posts/e624b065.html","4d42eba00bc7aad1165e9bd06d207001"],["/posts/e7c703bb.html","771d993521cc728ae0a9dc8f0dc6e8e0"],["/posts/e8f14b6c.html","56bcb1bb8ab33f5c88de747eede719d3"],["/posts/e91abb63.html","6c79e2a6e6ac5cda9a8123ca921652ff"],["/posts/ea9a8808.html","1a3fc21a7a55b2528a7055ad46bf37b8"],["/posts/eb784749.html","db769117bec14c91462b140796d49c0d"],["/posts/ebaf2232.html","37ae872acd5c9eaf7717c37e7dd9e8a4"],["/posts/ee1ed673.html","c000d926902f50c79d643a6730cd7f81"],["/posts/f0c3ed61.html","b590f7ec5202045958e9bba2ec7fff0c"],["/posts/f21e7f84.html","4d5002de802951ae476cd063a223699d"],["/posts/f230b0fd.html","489f76c2d69d8a26e2ab0384affbed9d"],["/posts/f663d5cc.html","4c104050d0990de7d81d9bfad620302a"],["/posts/fc04d0d4.html","98dabaa2d24b2e006d8cab241cd383f2"],["/sumire/index.html","80449724ddb553ba1162e94db8dea194"],["/sw-register.js","0291391088f348fa7df8c7ef90623a0c"],["/tags/APPLE-project/index.html","3a33e5cd09460eb177a4da9606ef0442"],["/tags/BELL-DA/index.html","c2a8a5bc86eea6a99ea695540e307faf"],["/tags/BL-Game/index.html","a12842c919ac84d1023b06f4703de982"],["/tags/Blue-Dahlia-Digital-Creators/index.html","b415bb3ad386769b2f68080672092c36"],["/tags/CHUNSOFT/index.html","7827e7309047d94e6976d115ea38005b"],["/tags/Check＆Stripe/index.html","fe474c06c21466908a6a9672611ca6f8"],["/tags/Cherry-Pie/index.html","414ead004773083670b64afc3c1259c0"],["/tags/Circle-Mebius/index.html","0a6ec3dd8d9b7f2357cd080b3e179a38"],["/tags/CresCENT-BLANK/index.html","4e8abe7c5f77965f2ca0dea44eed5baa"],["/tags/Dopamine-Software/index.html","f92ac3da53672e7b27b245e3d39984ad"],["/tags/Dos/index.html","f6f5582eef1e7739662899be004e43c4"],["/tags/Earth-Well/index.html","49c446f5fb85bddeda6c8ff848cc4d0f"],["/tags/Kanon/index.html","546c91710941402e33fe9231cafd3fc4"],["/tags/MANATSU-8/index.html","1cc9ec30a6511eff0616ce334e089f2e"],["/tags/MARINE/index.html","a8a8fde4ab7a3f6a67f4e9d02c18f0db"],["/tags/MIO/index.html","58021d261d4f43d0ab09b601ea5e65a0"],["/tags/Nmyu/index.html","2be079978aecc7e9dba21c6ef08f3c75"],["/tags/O-S-I/index.html","51b4b5cc441ed4880432843e57d7e386"],["/tags/Omegaの視界/index.html","8764383ed5f88f87d9901283410bb6fc"],["/tags/PC88/index.html","63ca7c546f846001ffc0f7f658cf51b3"],["/tags/PC98/index.html","2062066d3a8eda19b5316bf1330670be"],["/tags/Perpetual-Room/index.html","afa59b37ea47df420da176edaecc3414"],["/tags/Pleiades-Company/index.html","dd1c6616145c4db76a24c0bf0b50c077"],["/tags/Project-Twintail/index.html","35481daa42f652527dc618774fcac6c5"],["/tags/RIFF-RAFF/index.html","ec04201178f23bd37f55c15f557bbf51"],["/tags/Reverv/index.html","5543b283cfe6ec4ef95da51b84a6a174"],["/tags/SENTIVE/index.html","df6b7fc57e8030d8be498482f6a94bfd"],["/tags/Saihate-SOFT/index.html","e624202d86830e1c4c2490e04d38e2a2"],["/tags/Sky-On-R-imaginAtion/index.html","4618878155fbc32159ef81b7749e49a2"],["/tags/StrayMoon/index.html","0136c66190eaca69f2235d3b0788ab3b"],["/tags/Studio-Bu-Sa/index.html","9ad5d9a016ae3519589c2d6acfd99096"],["/tags/ToHeart/index.html","c857c242e9ea0648a35e19357b5c2eb3"],["/tags/Traumend/index.html","7e8ebf26d7d1220ed8860aedc35efb4b"],["/tags/Witch/index.html","33d568fa4ef074885d5bda3537808883"],["/tags/adonis-project/index.html","1612372a0502e3f4c04117eb95b710ec"],["/tags/flash/index.html","dfddc4a3f617cdbe78f92d3fdb29aa7a"],["/tags/galgame/index.html","9500f8f2ca42f1f7dad4e165e7d70aaa"],["/tags/galgame/page/2/index.html","f10f3716f430a622fbb9283c8d1bb95d"],["/tags/gal资源/index.html","d6a74976c5d23b05387be8e7534f9c4b"],["/tags/gal资源/page/2/index.html","40836017e7fbb13c750bde839f0e88b5"],["/tags/gal资源/page/3/index.html","e83976f708fddbd1cc22cc048d9135b8"],["/tags/index.html","85a19a3707f845acdfe0f866592db763"],["/tags/rkr/index.html","a3039c67419a6bcf5d7687efb0705433"],["/tags/team-eye-mask/index.html","211aa509d8e74eeafb48c56f537f9a29"],["/tags/ありすくろいつ/index.html","6ba89040533de79842f5e6cb420ff522"],["/tags/いつものところ/index.html","c2976c6f89ba83573a733cd5e49dc3aa"],["/tags/きつねみみ饅頭/index.html","a87719c3ad4c3aa64a79504fe0db806a"],["/tags/ねこねこソフト/index.html","997d36e18b09ede15e2c6d3f66dd669b"],["/tags/ねこバナナ/index.html","847800da7e79c59f44bd0d157ae9e5bf"],["/tags/はちみつくまさん/index.html","4278ca4a8a99eaec5feda843478691c8"],["/tags/ろりちせ/index.html","b805adbdadb021045f5b3fbf569708b9"],["/tags/アイル【チーム・TATU】/index.html","eaf351696e7059f2d1156ced821739ad"],["/tags/アークシステムワークス/index.html","0ea117264c262742434bc87a26700d01"],["/tags/ブロッコリー/index.html","85ee4f0479618aac91f4e85aa2785503"],["/tags/乙女/index.html","0f03a1e37c9eb1911fd08706499d8719"],["/tags/停产/index.html","ae1d07514c8362a466ce071c94edd2e9"],["/tags/公告/index.html","0185e045e0c67ccb197e00fcc88a64bf"],["/tags/同人/index.html","495dd2e343ead58f4c45b708801781aa"],["/tags/堀井雄二/index.html","dad201924d65194121c000435ddd4497"],["/tags/外海なおき/index.html","2df97b1a13da29986b36ee31b54415b7"],["/tags/桃野衿/index.html","2d72e5454aeb782888516044e1781eb7"],["/tags/機械式少女/index.html","2177200cb61fd14ee6ca0a7f7574a628"],["/tags/水仙/index.html","005a8cf9a9f4be405edc801be5ea1bdb"],["/tags/汉化/index.html","24656e363f5715cce4f4961d9f93b020"],["/tags/片冈智/index.html","9e5625f795d1915b7870c8ab7898e5e5"],["/tags/片岡とも/index.html","0bb465f045864d08dadd7812fe8195d1"],["/tags/牙の刻印制作委員会/index.html","565ef1583f7000de40d5ba14f29b5b01"],["/tags/牛カルビ定食-FLAT/index.html","3f1add09615bd427ea892f6111ac5430"],["/tags/牧尾屋/index.html","d6ae15a28d9d1984f79821264713b2ae"],["/tags/猫猫社/index.html","b22c619a23bf3df6320fa0797ce49187"],["/tags/王宮魔法劇団/index.html","159960afe9198c61b25a259dda479b87"],["/tags/画集/index.html","28635370667acadfbed96b42607f9997"],["/tags/索引/index.html","a99404b34c83d971ce996e806bd14e65"],["/tags/缺失/index.html","a0f674acabc5392224cfd41821178e1c"],["/tags/自购/index.html","bab4c3c193e22c733aa745c95af36950"],["/tags/茶葉☆姫/index.html","29a1d00e54f5d2bd2acaec278d103968"],["/tags/郷愁花屋/index.html","f902d57ad6298d0767216e896eec651e"],["/tags/閂夜明/index.html","f108e40a3286dfa82931b28507b63d4f"],["/tags/音乐美/index.html","f89830fb8fd885b4d437f97c0fa9b0cf"],["/tags/黒†救/index.html","bb1b2d11ebf7760d590b93ffe3e4ff7a"]];
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
