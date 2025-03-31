/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3d1f86328cc6d8e1b2c0b6062608e471"],["/archives/2024/04/index.html","4c618ada0087b10c7d95ea602a57c5de"],["/archives/2024/index.html","bd91fba2184195fb32d12a4e952dd1c4"],["/archives/2025/02/index.html","eb92482a1c79ccbef94170eab37df38d"],["/archives/2025/02/page/2/index.html","e6eb770bc0845106782f9129deb458a8"],["/archives/2025/02/page/3/index.html","b2bc13b06af911d6740555f7c002dcf2"],["/archives/2025/02/page/4/index.html","fed1e8a6829119eb3d4ca6ca2c76f23c"],["/archives/2025/02/page/5/index.html","08dc08db5752562176025b5fcb895f77"],["/archives/2025/03/index.html","ed803e6e76efaa552d636e8e77dacdb3"],["/archives/2025/03/page/2/index.html","0d484bcb047b3f42a0b8bee334b360cc"],["/archives/2025/03/page/3/index.html","38703cb08104e5e2ec16bdd9a5144cc7"],["/archives/2025/03/page/4/index.html","2c148dbf61cb9e83323283b4972bca71"],["/archives/2025/03/page/5/index.html","8c3907b03b8a0fc337a8a12f84e8c839"],["/archives/2025/03/page/6/index.html","16e915f3ad42a19c41c33e93d0e31f0e"],["/archives/2025/index.html","4033527c2fe1404e3f1d47d2868abd58"],["/archives/2025/page/10/index.html","d45ecd75c4d15fc815828418b1c49ff5"],["/archives/2025/page/11/index.html","f8067ff581c8e4cb23c90e3d4c78c5d1"],["/archives/2025/page/2/index.html","1ad04d4be5d243ab8639bfd355380261"],["/archives/2025/page/3/index.html","404e28d9fa823bd2413b9b707a490da4"],["/archives/2025/page/4/index.html","78231c22149439eb506d2467b45502a2"],["/archives/2025/page/5/index.html","9c4cffe9e7036fe2d7699b3918b6b3ca"],["/archives/2025/page/6/index.html","0fdc6439d9d06ac17a81897ac6b5d465"],["/archives/2025/page/7/index.html","b95afe304a921c5adf555a77dd1882e3"],["/archives/2025/page/8/index.html","1685e944fbe045653b461ab0deacfc01"],["/archives/2025/page/9/index.html","972388950cb008a84d947e05b289999e"],["/archives/2026/02/index.html","bf7c0d48ec59671ea5f4566f5deb3ed3"],["/archives/2026/index.html","bdcb5baf0d4632bfc1f7365d7c6edaf4"],["/archives/2925/01/index.html","ac48ff13dec0831eac147d21df0596a2"],["/archives/2925/index.html","1cdee90b9b0e383b1419f9ec87c0f7a0"],["/archives/index.html","6238d948fdc38425b541a2ad26769d66"],["/archives/page/10/index.html","1c1730264f018dccfd95ec501c909d9d"],["/archives/page/11/index.html","19992ac33133d50fb9779860fc6a141e"],["/archives/page/2/index.html","3502b3e9857d987d2506da03214dcca7"],["/archives/page/3/index.html","008163616d1ec6d54fe4b85edd768f39"],["/archives/page/4/index.html","8526f298c386dcd03e0628cb452cc26e"],["/archives/page/5/index.html","4eb1e9ea7d7e6eaa73a2d99ac22965d8"],["/archives/page/6/index.html","0e754f06ded3c69a070989d075564c90"],["/archives/page/7/index.html","9713ef044394aa2aefd32786f2cad64a"],["/archives/page/8/index.html","31ef70468292ba07348a1ac4798de6ea"],["/archives/page/9/index.html","26b4d68aed5afec62bf17158d458f110"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","6e8a789c4e459fa38c59c5ebc9c22301"],["/categories/galgame/page/2/index.html","ae43d3969cd3bbdd2b21610f6a2f7b1a"],["/categories/公告/index.html","a9d72b4cbb5ac69045a2f6114c748caa"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","cd8ed7fb5baa260dc07116544adba510"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","8ad5e0764a2dd5fb4f0332463772421d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","97756cee6837d8b5c8ed7e87d77d3a62"],["/page/10/index.html","fcd13071a3b6557f6dd40a0c222b4efd"],["/page/11/index.html","4675ccd79b8efcdc8511af59bbeddbb0"],["/page/2/index.html","10b92587995643f3566b639350420401"],["/page/3/index.html","d842a2c8c36282e995d361331612ee2e"],["/page/4/index.html","5fd76ce4fc2661a82c081e7d7fac7f69"],["/page/5/index.html","73a7b37e9247aa274ee9c4f8a568bda9"],["/page/6/index.html","d9e610a02c611f8325384e279264cd74"],["/page/7/index.html","d9fdd233815e24e968e08e6d2e6b28fa"],["/page/8/index.html","594c997c308f579562be6a65c7b14dec"],["/page/9/index.html","80ba6718299a05ba972f8ca8167dd5ab"],["/posts/10c9dd98.html","e031f256bbca14e96198ba52e64aaa14"],["/posts/1295b569.html","4fe4539b174bab984d9bb924d2d6fd1d"],["/posts/1370342.html","c064c61d70b6aa5aef46e391e17419a2"],["/posts/15ef14c2.html","7ac1be6050f221486b32db255186a36f"],["/posts/15f3959d.html","222e50e62a8fe5fca24548d56c916b51"],["/posts/18ab785d.html","2d42c101f015def9296550bcbd5f17ad"],["/posts/1d59b71f.html","d7caec6de1ac60826db527d8f0b7556a"],["/posts/20b3f3a4.html","1ce215792966d9fdeb4e4c342694a19e"],["/posts/245f1c7d.html","aacb3744451d9680867b9dd0892dbef0"],["/posts/252658f.html","8a2b08485382c3cafae1a189decc9374"],["/posts/28397adc.html","520f9143b8ab220c57288e69b541a2a5"],["/posts/2b38bce0.html","e664ccb33e7c9a4eb88deac765029cdc"],["/posts/2c0a6836.html","5ae2942835d6ee381b7dbed60186edac"],["/posts/2cf620f0.html","a7c3879d15efbaf692ef851754adf07e"],["/posts/2e30fd6d.html","464267ef08167855e1c85c2a68a9863e"],["/posts/34292736.html","0be15cdf83acc6da506ba86d7dcb9cf6"],["/posts/3468cbe.html","1a9cde8804656d6a14ddab2cdcbb1407"],["/posts/39176dc0.html","e86e956597a16d6b5e3fa8c9965f00af"],["/posts/3e118dbf.html","708da4b4f3600c5416925b482599a603"],["/posts/3f7d823a.html","f5c921b2bceb98a508fdab21e6e3985f"],["/posts/3f978819.html","983df787cba4f79686478cf8ea1ead08"],["/posts/43945723.html","6fcf929cbcde3344f7eefcc982365f99"],["/posts/44124a6b.html","ba9125e23b86521c27ed6ca4048e3c72"],["/posts/47abb61d.html","4536ecf79fc61fad9dbf9fd298e7bf04"],["/posts/4b689be3.html","9048cc5899006dd4f57d324ce944e3b6"],["/posts/4cf8423f.html","b68fb2a2a7d2796bbd74ed82c1b0d319"],["/posts/4dcf85c.html","d312c6003522a94c366db5403dcdf7a5"],["/posts/500cd322.html","30b60a668141ff4e9b027ff3a5652cd0"],["/posts/51c9b1ff.html","a4df72b9ac104f9cfeed752cffe9f03c"],["/posts/52b5b3c6.html","42506fd5ccca3bd076d7e40bb6e5ff40"],["/posts/5f6e0c59.html","c78081614dcf1fd5192a5728457ecf45"],["/posts/61a63a84.html","aec56fa1790e174651ae72c25d616cb8"],["/posts/625ab7bf.html","43b672033cc607894ccec8fc4578163b"],["/posts/6336a2f9.html","e9ad90442ad9d3c61f845efe2e0f9aaf"],["/posts/6432d61a.html","1088d04310efad4317ae7e59e3e1dadd"],["/posts/6515f032.html","c97082fdbf706e39110e0937c59a0d9d"],["/posts/6720ccdd.html","8f67fb42aedb82df0a09efed2e677bb4"],["/posts/6a4b5ac8.html","a8002ef186bf01c1da0b0307cab68a79"],["/posts/6aa4177c.html","aa2bfadb83279a96d02b5f43e02916d9"],["/posts/6b15f81f.html","0b741cbeb51a30d09307410c12debd1c"],["/posts/71131d34.html","56a42e1d004f3470122df4a65309e58b"],["/posts/78a8a8d3.html","23226d7373157cf2e7498b4defc9a82b"],["/posts/7a5ef3d0.html","87d4eec6c2b885a8d8d6ec02254b2e49"],["/posts/7b41e1ac.html","66c77ee847e9aa636e632e81dee961b6"],["/posts/7b51011d.html","37d7d8c9545eb6089fea1b94c39a437d"],["/posts/7e3aa3e2.html","457d4d7ac4db89ad40eeb332b9b25752"],["/posts/80fe2691.html","9597bbd8218e8954b8a1b6535d727d60"],["/posts/81ac52e9.html","de0c645f3027be4bfb6714e3fbbd86df"],["/posts/8486f6f9.html","d6945f7c5d6a9d869e217ed69b6b5932"],["/posts/849b40f8.html","1e6df3b44c1ad0574c8ea8dcae2efbf1"],["/posts/85c51d68.html","1f3b6a56788f9610038005d528dd01e5"],["/posts/886f8d3.html","a54af6309a4d1437e0d40f91951765e6"],["/posts/8a7cba10.html","b5204f70bae7ee1de62c441f6872aa82"],["/posts/8ac11b41.html","c2c957cb305200bd145f2ffd0d624bde"],["/posts/8dd520d9.html","c605a7e855f844bdf343b8e8012b9fae"],["/posts/8f555654.html","74d289f8367c41cbf6c50f0696b67fd3"],["/posts/92a980c2.html","b3a2f68f411a3f062d5192704c5006c8"],["/posts/92ce16.html","10b048a6fe843503e37573a16c4bf4b2"],["/posts/93e9943b.html","be3649bf54931722023037ffb92bc33e"],["/posts/94d3c794.html","94a5050e3426c9e49051b866d277ad57"],["/posts/97f50eea.html","7660677824283da6bd4a4e166674dc8d"],["/posts/97fca8be.html","897f318a8e271210eabb075fd1710a72"],["/posts/98662d05.html","b624ab7ae74c07813c0c7839cc735e5a"],["/posts/9a2f6162.html","0d0172c29b8e007baa34f394ebe46c1b"],["/posts/9b22a48d.html","0b03a65976ca12941f0cb52cf117ffe7"],["/posts/9cb455b1.html","4a39011d70a9c4dbcaedd2fdd5cfd96e"],["/posts/9efd7701.html","61dc799782654477ccc009a958125ca6"],["/posts/9f61c1a0.html","648bc5ea6c8e9c6edbc176cfd115293c"],["/posts/a1de710.html","3dc23ad917301123940a1c6ad2c319c2"],["/posts/af1807ef.html","cdd3f3269f7a177f761f324c511cc66c"],["/posts/b497b647.html","78eacdbf1c1e259a63cfbb568c282bd5"],["/posts/b4d464b0.html","6f68d95848565a3677c0d35cf5d3641a"],["/posts/b5fb773f.html","1225fcf048014650a002a283ea004de1"],["/posts/b8d46b32.html","88ca0fee893c465420478fbc39b23ccb"],["/posts/c1b2c6c9.html","d376777c24cade40a17861738c8d8876"],["/posts/c2111cbf.html","cdc0174fc6dd19d01a066d6d22b67e24"],["/posts/c316c2e8.html","341f8394a883a591246d9f0ed4ace8d2"],["/posts/c43e60b5.html","5f38a123fadee2d2a471e68cfce36857"],["/posts/c497a412.html","5b19351f8393a2220df4210c407b0656"],["/posts/c5de299a.html","4437ac828d6110bb9abce59ad2cbe877"],["/posts/c70bba9c.html","7980604f9864b289f6e3d7e510cb05cf"],["/posts/c797535e.html","7ac64d95e42ecf15780c85f7bebafb4c"],["/posts/c7a62c79.html","84d465d81c248d221b934aab11fa8f85"],["/posts/cae2c959.html","7e2e5940a97573680d594fbcce07b170"],["/posts/cbebef2b.html","38e31b961d0588c497a41195193a4694"],["/posts/ce25023e.html","3aa56681ad6afa071ef223a37a9c30f5"],["/posts/d2fd4837.html","27be4b779f2bd594117f34fabf345d69"],["/posts/d3233cbb.html","9e45bf5de272b9c5de501727a0bcd76f"],["/posts/d3a745a8.html","e05a1b48bd69dcd6402088b65f2c3615"],["/posts/dc815d5.html","43723547fa6a4b5ded66c5a2b7a55e3a"],["/posts/e3ab6ad8.html","81dcc81251d434e74f3680fc36ce1928"],["/posts/e5018da6.html","5d4638a51dbb7b7f92390a7837641f4b"],["/posts/e5963272.html","e3e3b9e347eb8356db3625630d8fbf39"],["/posts/e624b065.html","944434f4ea9e0b32e50b907db750e65c"],["/posts/e7c703bb.html","ebb45b2621c5ccad23613d9b648c388f"],["/posts/e8f14b6c.html","6a99ee960a9239f87268afab7895ba73"],["/posts/e91abb63.html","2a1d087b1577c8abd837be1e36eb0d81"],["/posts/ea9a8808.html","f72e1bca603e5695eb034339350296fb"],["/posts/ebaf2232.html","cf0ebe63f7d29325753c3b62c5068124"],["/posts/ee1ed673.html","26a5c57116887f199dc184544591cfcc"],["/posts/f0c3ed61.html","0fbcfdc049e69e273d8e44d8965a9b03"],["/posts/f21e7f84.html","2154e3090be57b731f1268ca47dbc599"],["/posts/f230b0fd.html","1999591c0b7328f50ae2ad4e60ca30e4"],["/posts/fc04d0d4.html","2d940bb886200e88a76bb8d61e6387ed"],["/sumire/index.html","6d2ad2bdf0160e91ffbb362da93abefb"],["/sw-register.js","2d1152fcf14d3f7bd161d4344d584f85"],["/tags/APPLE-project/index.html","0f743138f3972a6b40f335b51cfa1974"],["/tags/BELL-DA/index.html","22a68e7e78461d464632be1f3db47509"],["/tags/BL-Game/index.html","cece8018bd5445caab508c655b5444e3"],["/tags/CHUNSOFT/index.html","8093193844c3ef48c1abd572ff32380c"],["/tags/Cherry-Pie/index.html","0e6b115a5649789bdeab4f402f07ddcc"],["/tags/Circle-Mebius/index.html","f2f0fa249f7a4806396341d55b8b8fe2"],["/tags/CresCENT-BLANK/index.html","2e8a268d321ed20a357778f4f96f85c3"],["/tags/Dopamine-Software/index.html","9c2532fe4e6a81fa97ec541330e0f845"],["/tags/Dos/index.html","60c00e63cce79e51a73418177fd67eb4"],["/tags/Earth-Well/index.html","68bc5c5ab9af1ac8bf8f10876aedafe0"],["/tags/Kanon/index.html","3ed6043d0ad61ee2c022270c682acf8f"],["/tags/MANATSU-8/index.html","bc580ff2dfa4a82804d258c1b5f0af9a"],["/tags/MIO/index.html","d6c8dd343583ec308229621428a6f9f8"],["/tags/Nmyu/index.html","d9d6b897e885ef9e53ae3b11281924af"],["/tags/O-S-I/index.html","3d8e680d7f53c6be7adcd7e1ecd6f2e1"],["/tags/Omegaの視界/index.html","7e97ff383367d6a345eea716979888b5"],["/tags/PC88/index.html","098c6d4ffd83c65c0380ecd4d4c62048"],["/tags/PC98/index.html","584a1ef60e9b6154c7ba2473ca1c5a36"],["/tags/Perpetual-Room/index.html","06bef16b5891ef5640c927aa5aa8c3ba"],["/tags/Pleiades-Company/index.html","0f11eabdcecf77beff7b9c74930d04e2"],["/tags/Project-Twintail/index.html","49933744f9f264f43a1f7856ff42bf18"],["/tags/Reverv/index.html","28acdf41b7a63e02b08946edf26f2e1c"],["/tags/Saihate-SOFT/index.html","7e999f5da3bbdf18759bda6895836561"],["/tags/StrayMoon/index.html","f5cb03618809c0d419f6626e07ed26f7"],["/tags/Studio-Bu-Sa/index.html","4565446df8207d6235334a6192a1619b"],["/tags/ToHeart/index.html","aa4b7d115f6d4c62855e45b04d6f7380"],["/tags/Traumend/index.html","c1b628fcb64e5ca6c81c2c4fe0c4c588"],["/tags/Witch/index.html","19262669cd433ddfb6ca73a62c140470"],["/tags/adonis-project/index.html","cf2331a15fc21603646ea15b65c31385"],["/tags/flash/index.html","7aff4ec4c95096d13bda4612248494e1"],["/tags/galgame/index.html","ac3476ed9877d9f17dc853fd0a6e671f"],["/tags/galgame/page/2/index.html","991e6366c1828018eddc8ed9e6f9cc14"],["/tags/gal资源/index.html","e4f129e3b5d0eb0046e3a5f7e65e8642"],["/tags/gal资源/page/2/index.html","4fcc871585a2764d5e237cf91d6bb7b1"],["/tags/gal资源/page/3/index.html","824be08004e8c7cf502eae7295da48bc"],["/tags/index.html","dc621ab2e4da63132fc33915847ee99c"],["/tags/rkr/index.html","fbe308df57a333a10c1698a993cc802c"],["/tags/team-eye-mask/index.html","8e8337c17b1e9814e08b9dcf447cb8b8"],["/tags/ありすくろいつ/index.html","9e53adf659f28653d6718e08a8aa0049"],["/tags/いつものところ/index.html","1c2f4c9c3ac093106cb3e251bf0ebc73"],["/tags/きつねみみ饅頭/index.html","8a57ac1ae88bc517244fed853ec6f609"],["/tags/ねこねこソフト/index.html","a703d4542fd9aa2eeb0eb767829e7d4e"],["/tags/ねこバナナ/index.html","4628b0e64f08eed1d0d81cc631809910"],["/tags/はちみつくまさん/index.html","64a415fcdac1f1b97a84d27e2697f6f1"],["/tags/ろりちせ/index.html","6a09dbf0306184e5efd5409372554e0f"],["/tags/アイル【チーム・TATU】/index.html","4b2056f0e4c101c45e4dcb5c92812c70"],["/tags/アークシステムワークス/index.html","683f863d2ecc9944938c527fc460e646"],["/tags/ブロッコリー/index.html","7fbfb2bff81a192d151aea30d89c1256"],["/tags/乙女/index.html","5bf4a2053c8bb558ec82176138fa5562"],["/tags/停产/index.html","bbb9976d60bdc55488edb2e8b0751d07"],["/tags/公告/index.html","87542355f144748395346a64c2589f93"],["/tags/同人/index.html","044eb60cc0c3ea5a501683c7efe3faf7"],["/tags/堀井雄二/index.html","d5619a17ad621299350ccfb9dc6ba53a"],["/tags/外海なおき/index.html","404dbee460c2fd692e52648b30f0561c"],["/tags/機械式少女/index.html","121672e90e67a1d6d1310ab682cb8afa"],["/tags/水仙/index.html","a231848f2972fc373c7d2b890b54a5b7"],["/tags/汉化/index.html","c70677980f2212500b44f1b2b7c5992d"],["/tags/片冈智/index.html","db5b1851f250bf813440c1f537c404e7"],["/tags/片岡とも/index.html","70c7b8b13f29b833a41a8e7f7ba4b263"],["/tags/牙の刻印制作委員会/index.html","26f704cd999a368f1e4a5d21929b6201"],["/tags/牛カルビ定食-FLAT/index.html","8772f90f934279909d73cda729407163"],["/tags/牧尾屋/index.html","e13b727673e4b59c1028df32684a09c9"],["/tags/猫猫社/index.html","e43bca32ee80f41d2c18e4c5e07919e3"],["/tags/王宮魔法劇団/index.html","4a670766d1b547c854d6b8e2041d2e69"],["/tags/画集/index.html","7a27386977f9a9497bf9c743020e7645"],["/tags/索引/index.html","6feec65a997c9c4383c6acc87d0b2cc7"],["/tags/自购/index.html","aaba7d2bc9b43d065405041c098e1f2a"],["/tags/郷愁花屋/index.html","cf037b38467eb2056992a9c43fa0abd2"],["/tags/閂夜明/index.html","923f8bf618d0d2763386d0346f1690f1"],["/tags/音乐美/index.html","0d46add94286ac8b08f966440812a9b3"],["/tags/黒†救/index.html","f15163b25d9b850b946d4d4a525347d7"]];
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
