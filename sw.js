/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9cdf996606aef6fcb898a896ee30400a"],["/archives/2024/04/index.html","f801e5e999cb08bd51cc42b4d3e8c7cc"],["/archives/2024/index.html","d083d11f87db4ffdf5502e6d8ce89361"],["/archives/2025/02/index.html","5e151c739a7b81469c297b5d019333b1"],["/archives/2025/02/page/2/index.html","0705f0bc5ffbc62eeedbd38828c83e16"],["/archives/2025/02/page/3/index.html","31093c106bba264733d7119c124ad80c"],["/archives/2025/02/page/4/index.html","f2b264a82b11eaa47c4375fbb86272ea"],["/archives/2025/02/page/5/index.html","73b984a722fa8d40dcc4375eac56e33a"],["/archives/2025/03/index.html","97e9b0e887697e203ea62d3b12ca0e48"],["/archives/2025/03/page/2/index.html","679fca22ea503ff744a1ee9a42ffc170"],["/archives/2025/03/page/3/index.html","5da938474dcd147c2a9927dae0e7e988"],["/archives/2025/03/page/4/index.html","1649e9ccb1019161285b06b7574775dd"],["/archives/2025/03/page/5/index.html","adf32d47e1f23eb881951c07dd585b4e"],["/archives/2025/03/page/6/index.html","88541d61e8997661348020a73ad6886c"],["/archives/2025/04/index.html","c82054c272587cf3a6a6b0c18bb0b677"],["/archives/2025/04/page/2/index.html","a12dabb1c99b314e12ae554c75135152"],["/archives/2025/04/page/3/index.html","066f12740067749eaf0eb7a82846e883"],["/archives/2025/05/index.html","eb927944f2510b63e729179fec93f3f1"],["/archives/2025/index.html","44d382b51aa4dc969d037747c9dccb33"],["/archives/2025/page/10/index.html","1fd9bbd59e0fbf0bdc6220e89fe6ace7"],["/archives/2025/page/11/index.html","cb020b0d7b1e223ef5e3817459974dd5"],["/archives/2025/page/12/index.html","4e53d4326904f45f036ba48c7f0ebea9"],["/archives/2025/page/13/index.html","135bb815a7ee7422b0ae197499b7356e"],["/archives/2025/page/14/index.html","c101760a0cb8923a7c431b2b62e95e57"],["/archives/2025/page/2/index.html","8cef943b389247d73a890db86df553e0"],["/archives/2025/page/3/index.html","77933773379b051e42743b3b44153a67"],["/archives/2025/page/4/index.html","881b0cc21f9a2a0e0f0b525cf9171c80"],["/archives/2025/page/5/index.html","5d5ae201d4cd98d80144a04bce7e7ddc"],["/archives/2025/page/6/index.html","1c12419923e03c6463911b2dffaf9548"],["/archives/2025/page/7/index.html","beaeda1f8b8b7a2eefc654eab5a1825e"],["/archives/2025/page/8/index.html","74cc11e0c4219c490f7e23d6ef5dc5f2"],["/archives/2025/page/9/index.html","2e58837d717bee032b4196132294fd2e"],["/archives/2026/02/index.html","a213b21f3d5d9ae80a708b787bae3e1f"],["/archives/2026/index.html","0db3270d5130144b48e7c44c67d90eb7"],["/archives/2825/04/index.html","7f9be779fbede2f7d73796bdc5ea0c53"],["/archives/2825/index.html","fb7101c0db6ad38a67d5b2715b9a8ebc"],["/archives/2925/01/index.html","163468872b758ff941273992f4a7a050"],["/archives/2925/index.html","8c8390c2b0e0550950861442e04fbfc9"],["/archives/index.html","fbec1dc0921893aefc742bd3f12ae7fc"],["/archives/page/10/index.html","606ab44d9bd243f9caa70bb3fd4e2801"],["/archives/page/11/index.html","6704afddec927cad5f26be0ef027972b"],["/archives/page/12/index.html","16b537f0636343e139bb6ed6c67709cd"],["/archives/page/13/index.html","13a8af9827002b7e3b61a2b5fc51e512"],["/archives/page/14/index.html","65f75ef87fe20027926b9694a7ecdd48"],["/archives/page/2/index.html","e323a0be09bb83e76b76cd698e67ea47"],["/archives/page/3/index.html","eb58dc21010ae6916b5789be30572cc4"],["/archives/page/4/index.html","b259bc5802930c8be7bb261322464a40"],["/archives/page/5/index.html","1d2d6eef529fa04897e9f1d51abd2308"],["/archives/page/6/index.html","938ee2a36fcbafb5031b0e9598d1650e"],["/archives/page/7/index.html","57b6ccad9f18b4795cdab60285899c04"],["/archives/page/8/index.html","b70b24bf30e75fbf5aaaf4a157b98b44"],["/archives/page/9/index.html","5481b1a9ae179794bd008c105e2b304c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","4d057522dbd0211e7163fde0407800e2"],["/categories/galgame/page/2/index.html","e16ee4bec6f91b1e1fbaa43e31528655"],["/categories/公告/index.html","da350acae5602a49dac62491df70cfa1"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","adfaac4711ef099497526ff1b0a19049"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","257a5c3597bdc8000bb144333b4aa696"],["/page/10/index.html","0b6a2e0c0611361df62e22be0abe87b4"],["/page/11/index.html","65b149f088b18e6c99bb63ad10906cc6"],["/page/12/index.html","fff4e84daf0a79ab1bb145fe55d1f80a"],["/page/13/index.html","b0f0d601fd56f5b1e670c2d80653d878"],["/page/14/index.html","0ea7217c7fe55c20a5b993bd353dba97"],["/page/2/index.html","5fc6f0124696d2156bff6621636651ee"],["/page/3/index.html","e8c09601be1d9b903b120420dc728b85"],["/page/4/index.html","bcbd329fd9c9d14d6de3a72fec641433"],["/page/5/index.html","f869f0135d44cf5c53bacc36b7beaa20"],["/page/6/index.html","9622907f90bae66e2a00b3cbf38d2a2b"],["/page/7/index.html","aac1825912d42660cd26d020495ede79"],["/page/8/index.html","9c699702e13a283e116e4cb0915f4913"],["/page/9/index.html","b4175eb438e8e779963c723eeb0e3b03"],["/posts/10c9dd98.html","fddf9e916890ec51af577367342b2c25"],["/posts/126ebb99.html","827d357d898edc8b8af3a78370908455"],["/posts/1295b569.html","607b5d93176c48ee201b3bed27f33e2e"],["/posts/1370342.html","cba350ae1557468a9b454c91a9c815f6"],["/posts/15ef14c2.html","6f48c18ee194ae0a7170c34c58a91c4b"],["/posts/15f3959d.html","97ecfea8ca461b3be93fd41688a5ceb4"],["/posts/18ab785d.html","921473d218940dece29bae7af5f6f4b3"],["/posts/1d59b71f.html","6db9aa2d21c484e761b33a604a67c8a5"],["/posts/20b3f3a4.html","673d89af8d67272d3bb519f2208c8a22"],["/posts/245f1c7d.html","94cb9315e1a093b7dbba3fd994a0a4ce"],["/posts/252658f.html","209c70109438a734ff8ffc202440f923"],["/posts/28397adc.html","840f91a54f14f5963cf4ca08716f4f0b"],["/posts/2ad07f54.html","3a19a9ee7a3db0a533866679d119c94a"],["/posts/2b38bce0.html","b0ca332903df1bf08c7c39e2f182464b"],["/posts/2c0a6836.html","381d8c473e22a44275b96e3d362e1d57"],["/posts/2ce39bcc.html","209fa17279f6c5bd66595133a32f1d73"],["/posts/2cf620f0.html","9b6f06d29e247f32d7d86409427aeca7"],["/posts/2e30fd6d.html","131ab9076bc5c47fa5a7b862878da495"],["/posts/30a413ad.html","667d8c1de69189492cef4af4630b5485"],["/posts/34292736.html","e973661832a276deea8027166f3ea72a"],["/posts/3468cbe.html","bf6ce6a6069b266bad7fd5e05e6032ab"],["/posts/39176dc0.html","ba843348e8465e46391ceebbc462a588"],["/posts/3be6a165.html","6e3c1946919c98df327d41ca15ca0668"],["/posts/3e118dbf.html","1b1f1f427f47a21393cb8ce3e0095419"],["/posts/3f7d823a.html","3ce0627a0ff66c225ed61cf064bc0a13"],["/posts/3f978819.html","fdbebd83020dfa0c7429d1967ba68e12"],["/posts/41dac80e.html","57adac45182b98c17cf59dfeee79d137"],["/posts/43945723.html","6209d6512fb17df596c7cb04b9fdf368"],["/posts/44124a6b.html","f764e34d83682ad108ba0b1cc1ceb505"],["/posts/47abb61d.html","7e233bb8b5ce2352a29053a2be37cccf"],["/posts/4996478a.html","abccb9cc13eb68ae4f2bf4d482120d45"],["/posts/4b689be3.html","b096b994bb419c5659662f71ec128f4e"],["/posts/4cf8423f.html","1861721bdc9660867bd57fac67319eca"],["/posts/4dcf85c.html","46b9673bf15092d198ef5e8074716cf6"],["/posts/500cd322.html","4c0964f00d866cd74c630ad5d7d6c7a2"],["/posts/51c9b1ff.html","95548b91f222fffbf85cfc7b5ac22c6a"],["/posts/52b5b3c6.html","9b41ba4d7fb855b9a2230a7de77e8d9f"],["/posts/54f496ad.html","f08e3bcf14892bd9cea66d8a4ab26c58"],["/posts/558e1f30.html","7d90ede2332077d1620b2c5fcbff8093"],["/posts/5d8bea92.html","21f6e3c32f43cc819a5a41b3fdfb9eff"],["/posts/5f6e0c59.html","fdc99f75e18e3fd6e4190d0f6c67f9bf"],["/posts/61a63a84.html","a365f2ede36191eb83d00e8b07539fd5"],["/posts/625ab7bf.html","00be2e0f531b53e1d9e030a7be1a4b7f"],["/posts/6336a2f9.html","050f052f291e5e6f986a0cd00e3a866b"],["/posts/6432d61a.html","830b2714b70c33a254a3c262275882a2"],["/posts/6515f032.html","647aae394440b4512e3a23ec67c8dbb4"],["/posts/6720ccdd.html","bfe94c2b024fabb330dd1be63550559a"],["/posts/6a4b5ac8.html","a2c028eda783f8dc597a34dc3aa8e079"],["/posts/6aa4177c.html","e7262cdb2525143fbbf60260f3d6d7ad"],["/posts/6b15f81f.html","bc182d59899100b99a293954baec1f51"],["/posts/71131d34.html","f2e040de852c789dffdb08fee92f7816"],["/posts/742fd48d.html","9c0551d79097f142293b671a324758d6"],["/posts/78a8a8d3.html","65490a82f7962a44a6b8fa210d08b65b"],["/posts/7a5ef3d0.html","02f0dea8e486920ba1767ca56abaebab"],["/posts/7b41e1ac.html","831028e17798bffb81b3e0e9942acc3c"],["/posts/7b51011d.html","9d503bed113baa305d0757b943f5c69d"],["/posts/7e3aa3e2.html","193676d1bf63d7ea229b50b1d7aa0990"],["/posts/80fe2691.html","8379b07fa3a1793f774e96252a96622e"],["/posts/81ac52e9.html","a9e62025835c24cd3c1a37423ee51891"],["/posts/82332d11.html","afb6ba496f13d606987c968b3bd92a15"],["/posts/8486f6f9.html","5476970a462718b2626b931ebce4daed"],["/posts/849b40f8.html","d5b9cebc1c0df4d489ec1bddcdd9523c"],["/posts/85c51d68.html","31b49a47fa821622d69a3ba5b0930fcd"],["/posts/86a6c500.html","f7381e0f435eed45b001136f0ecdb5bb"],["/posts/886f8d3.html","5a55af937bb63e6f0aceeb4ace185c0a"],["/posts/8a7cba10.html","464a966e0c53759928f43d95459e3620"],["/posts/8ac11b41.html","1bca0e3ad931ee1c656e541a2a861033"],["/posts/8c3f2fd8.html","22331b18821b833a690b83e6602bdac6"],["/posts/8dd520d9.html","04ee2d8c45f2f8e84662904265e6e9d3"],["/posts/8f555654.html","8b027dc631d6d927463302f80071e408"],["/posts/92a980c2.html","2a173d7630d83536e3528787357f44b4"],["/posts/92ce16.html","c964cedcd2abc931e3586997490f413c"],["/posts/93e9943b.html","5861594ae66703ba09fcbdd92932d84f"],["/posts/94d3c794.html","affa7393828e305f958e118824ad1bd2"],["/posts/96b281f2.html","6a7f7ac7e95530cc3ada7eb2ec4f40ba"],["/posts/97f50eea.html","a98aa593d56c1b924819d1ea8e4ea6e4"],["/posts/97fca8be.html","fbefa36ed7c125493387f33afcf5c12d"],["/posts/98662d05.html","62b71a1fb2f0b8a7a2ec776d011d36bc"],["/posts/9a2f6162.html","8d313df2ae1c7418d9bb8ebb01e7b106"],["/posts/9b22a48d.html","d91a576c8dbfea92ffae16b1769cb2f7"],["/posts/9cb455b1.html","83e748c29d9a1a9f2647749bcfa8812e"],["/posts/9ecdeecc.html","a2aded1bb49db1d64bf6607c041d3c23"],["/posts/9efd7701.html","6943218da87f87c66e1cc4b1345d5ea6"],["/posts/9f61c1a0.html","654289d756b0c16636cdc00bc86e0f24"],["/posts/a1de710.html","edfd97e75ccbae41e33a05f5e12cfbcb"],["/posts/a30eb0cd.html","19d2a59a2454e9f6da7ec9ab8215d66a"],["/posts/a7634b5d.html","47aabedc24fdeb838669b6547b57aaa4"],["/posts/a8c593b5.html","3bda3eec13c712ae3b7163793b57523f"],["/posts/ad0c1efa.html","6ff892495968c87d0f30dba8cfd3fc68"],["/posts/ada3f440.html","930c82fef67f0af1b984decd1a633023"],["/posts/af1807ef.html","0e2bf9138f6653e8afe11f3271f44602"],["/posts/b397bf03.html","81d11df55aa372ec7283f5bdf6a6bfb4"],["/posts/b497b647.html","d5b931580a126aac72e4dc2c070118e0"],["/posts/b4d464b0.html","bc9f6befbab17e893dc8cf2aa423bd37"],["/posts/b5fb773f.html","677c686e404a6716ae2f5b3205f30777"],["/posts/b8d46b32.html","453ce5b9ed6c28694f370a800ae2ee60"],["/posts/c1b2c6c9.html","86e9541249306b5253144a2935f66851"],["/posts/c2111cbf.html","126d8d5b4092b2cf55c6a344a2e6fb48"],["/posts/c316c2e8.html","42d73fbc0733ee99c83bc3e1e0da84eb"],["/posts/c43e60b5.html","5aee739fd58cae38d601c96be3d27bbf"],["/posts/c497a412.html","49614287ddc8ef1d007dc9302255560c"],["/posts/c5395ba3.html","367e80e3dc7ab007ec344eae2dff2894"],["/posts/c5de299a.html","db3a0299fbb046482a04bddf02d4f433"],["/posts/c70bba9c.html","391081beefdd17b27ca4c88636b27025"],["/posts/c797535e.html","8501e667c90cc89df169a6f6b270c532"],["/posts/c7a62c79.html","db63af6716e5c8e33f99420cfe2f3338"],["/posts/cae2c959.html","0d31f29fee64052d44894cfa1c5c6c7c"],["/posts/cbebef2b.html","abbeaf16e0f0909cef7573562954dbd1"],["/posts/cc4c0017.html","6ed22df04dd5bba6b92c329ee9b97b71"],["/posts/ce25023e.html","17b03515fec5d9c35860ae7c6e73e373"],["/posts/d2fd4837.html","f3936faf4ad4902ddd98f2199d849a6f"],["/posts/d3233cbb.html","4bbd23a6b4245f91af1b8d26cc7d4ed8"],["/posts/d3a745a8.html","016f02708adffb1e9f20adfe34bc4059"],["/posts/d7e940d2.html","8108d2127ecd10813ad707d9b86cfa34"],["/posts/dc815d5.html","8cb0f169029d48fee02efe698d934750"],["/posts/de25b0be.html","29eafd8ea31aecbd1ff9265001a52077"],["/posts/e2623b4e.html","c19853fd81d6258ff5c7a2aea10d329f"],["/posts/e3ab6ad8.html","904f2736e276adf7cd9c3bbdfe763f8c"],["/posts/e5018da6.html","290a5167524a57f66eb1ad1b2ab8a8c1"],["/posts/e5963272.html","6bacb3024ce3ac5e557592d92f3a5024"],["/posts/e5ef4c3c.html","283f9279db963d0dabaa3a0c1f352711"],["/posts/e624b065.html","d8c3d88db24ac37825d5722623510e81"],["/posts/e7c703bb.html","f20db761aa039201ded9e18d78d2dbca"],["/posts/e8f14b6c.html","68480ff7e883b3277602aad9f837fdff"],["/posts/e91abb63.html","e05bebc6206122d811c7259f6396501a"],["/posts/ea9a8808.html","deb89a508e7a528e2203ec1b2f2e22d6"],["/posts/eb784749.html","46c1ece8e920a2974fa91dc33fc70a74"],["/posts/ebaf2232.html","587be1d8e6e6f9724ae2d433860a195e"],["/posts/ed75f185.html","029f14992e3e8ea6c4ef3f5335ba99a1"],["/posts/ee1ed673.html","896149fe62bf3fedf69572ddfac2072c"],["/posts/f0c3ed61.html","2598c781e0009b50658ec862a57d974f"],["/posts/f151ff43.html","002de69f922ae849fd022f3cd5de3b25"],["/posts/f21e7f84.html","6c89b106ab3fd7c45087906828c3dde0"],["/posts/f230b0fd.html","45ece3e02d68eb9a5c81bac5e49d8bc5"],["/posts/f28a7877.html","cc91b4d111cf89de375270c3194b4fe9"],["/posts/f663d5cc.html","4e41ae58287f02f7bfe895335c0bdb24"],["/posts/f730ad18.html","48a81c534ec38cd4e3c7ba1bdd5698ad"],["/posts/fb5d4608.html","7c9a91aca98e76aebf67457ae3e425cb"],["/posts/fc04d0d4.html","63128c7b9472032a0daa9cebbf60b2a9"],["/sumire/index.html","ad61dad6ac7ea5977297d9d5d8755c4e"],["/sw-register.js","1b8eda304d4357bb2933253ce4a66517"],["/tags/AKo/index.html","c34037f4cb75c60b5c206424c327d1e7"],["/tags/APPLE-project/index.html","26dc97fee30747b4de70d492990792df"],["/tags/Ankrache/index.html","f2c81cc71d5f6c91ccfc31dd0993668f"],["/tags/BELL-DA/index.html","0cee28aeb0d70c1384718ef1bcfa6419"],["/tags/BL-Game/index.html","bacf996724a6dd21edb901f851a2d182"],["/tags/Blue-Dahlia-Digital-Creators/index.html","0cce0033cefc0a12af46f780da933be2"],["/tags/Blue-Line-Games/index.html","8fe72e49b37a9e6312822fef4622b8af"],["/tags/CHUNSOFT/index.html","af000a0225df59217e8e7071d833cc57"],["/tags/Check＆Stripe/index.html","cc0784cbdbc4bdd45847e64f411238b2"],["/tags/Cherry-Pie/index.html","7b17c119a1a493d6298c60d85b7ebbd0"],["/tags/Circle-Mebius/index.html","4809c7e1e26544fb2f09709517fd4236"],["/tags/CresCENT-BLANK/index.html","4d23e9503334e3efa3be7e134153b22d"],["/tags/Dopamine-Software/index.html","186796b185d949441d3e4bc5110909db"],["/tags/Dos/index.html","ecbbb6d52e4e9272d8395b0cbc33de53"],["/tags/Earth-Well/index.html","617e82a6ebd1806d51a7009b62ccb491"],["/tags/Forest/index.html","24fc3538edc724b425465cfc36d7e4ba"],["/tags/HaccaWorks/index.html","c52fbfe408a24fcc8fff397efadc15df"],["/tags/Kanon/index.html","78940766960c663c8f07fa7af9a8f45a"],["/tags/MANATSU-8/index.html","a47120e7b07bad3d1510c0cd24aa762c"],["/tags/MARINE/index.html","2434d020c9e5c9a1fd93d4137eae4ce2"],["/tags/MIO/index.html","98d47991a63cb46097afd077c2e18cf7"],["/tags/NAOX/index.html","63ef570ab7e8ea20232f4871fdeca799"],["/tags/Nmyu/index.html","3282c8215cb9d3529777ac4192a6e30f"],["/tags/O-S-I/index.html","28cedef425f71ac9600c15c8f7b0381a"],["/tags/Omegaの視界/index.html","34c378ec2c3b9b347ad6d3e800d862b1"],["/tags/PC88/index.html","7f7995c53985c45ff0fd4b1b6bd2aa92"],["/tags/PC98/index.html","8951da496710003fc8720f3c56618863"],["/tags/Perpetual-Room/index.html","1efa2527bf666635cf7a89bd983586a0"],["/tags/Pleiades-Company/index.html","717e9fb116b05ce7b2242d38f99382ee"],["/tags/Project-Twintail/index.html","9971296c32a71413246a2cc21a0746c2"],["/tags/RIFF-RAFF/index.html","dd8895e81fb7adc099280a1495e1c58f"],["/tags/RPG2000/index.html","832404c1cf31f384d4d5dfa79e9e87e8"],["/tags/Reverv/index.html","8b50980ee3dcf827b9bf7ccc4ce45fa8"],["/tags/SENTIVE/index.html","d38d876f9c94f298dd692c487b6e68f4"],["/tags/Saihate-SOFT/index.html","9a4c13d419ef747091ecf8ad27324ffc"],["/tags/Scrubbing/index.html","127def83863cde149ea726d21ea37206"],["/tags/Sky-On-R-imaginAtion/index.html","f7c088aaf9e4fe9c98716ea3c12bc548"],["/tags/StrayMoon/index.html","a6be1617bdf9e8bb0b7bb8b31e4f3b11"],["/tags/Studio-Bu-Sa/index.html","de912afa96d66074325f6c004290c571"],["/tags/TRANSPARENCY/index.html","2d8bfb50b3bef14f29aea874d331a212"],["/tags/ToHeart/index.html","ef1dce78d2871458780e6c25a99b1743"],["/tags/Traumend/index.html","6ea23db2bb9c3bfdd3002e749e35f71d"],["/tags/Witch/index.html","1c454fdc663c12b2aa0329ba81b07f95"],["/tags/adonis-project/index.html","7a6f6468b7b8814fb87a09c785323f8b"],["/tags/capriccio-suite/index.html","16bbd8283143e95b936579a613552462"],["/tags/flash/index.html","2fbcc2401c81c20957a1c47146eedee8"],["/tags/galgame/index.html","b120503aa972ea7e6a87b4016900833d"],["/tags/galgame/page/2/index.html","69d74f4b920b22df70455c87f7f5cc16"],["/tags/gal资源/index.html","7c1c8279f0bd3d6f12abe300a72a205f"],["/tags/gal资源/page/2/index.html","4a2e181d477f77845a4fd3c51638932b"],["/tags/gal资源/page/3/index.html","063dfc2dc62cab3304cc46b12e6c458b"],["/tags/index.html","9b26c0a0ab12b9d4266ca36c67155569"],["/tags/m-kz/index.html","fa8fec51367fceb84be2135a5843c117"],["/tags/purgatory/index.html","4a7bfc27f01af4b2259a6d39f26a8813"],["/tags/rkr/index.html","d5a1c7c0bb94f5698f1d84127c5a729f"],["/tags/team-eye-mask/index.html","d8eb15e294b6c8e3f55c8969bbfac2b1"],["/tags/ありすくろいつ/index.html","39dd265d373e835f18d27c2ad7a1e24a"],["/tags/いつものところ/index.html","0148d748bf78429bb2ed22e439ff23a5"],["/tags/きつねみみ饅頭/index.html","c65bca7c96fea2805c37066f34bc0e13"],["/tags/ねこねこソフト/index.html","21f7ae4a1e43407b9e4c03de914733aa"],["/tags/ねこバナナ/index.html","03d0db60893e83a158d3f8d460727fda"],["/tags/はちみつくまさん/index.html","81f898c0cf9d3f20adb71c69fa55c3b2"],["/tags/ろりちせ/index.html","9fcc30e1d369cc1e6942fdeaef8c78d6"],["/tags/アイル【チーム・TATU】/index.html","cd0891748979f07e33e35c4aafba637e"],["/tags/アクアポラリス/index.html","87aaf832da0751bf4107fe7217c40262"],["/tags/アークシステムワークス/index.html","a56417b39fb719f7f7f802ee3438aa91"],["/tags/ブロッコリー/index.html","e0134a28864646e7fb5357d43b4a2431"],["/tags/乙女/index.html","13c8b3012c85ea8b7420246c40b639ee"],["/tags/乙游/index.html","16d2400a3e8468d14175849554f4d326"],["/tags/停产/index.html","d70f4807e12c4b4551a478a198458dce"],["/tags/公告/index.html","8dc439ff42eb091c414eb111fdbb2267"],["/tags/同人/index.html","a74d2913f71cb4dd3ae8947d4fbe5a98"],["/tags/堀井雄二/index.html","818e50c3b38e1b48e98d2fd8fc2b1e25"],["/tags/外海なおき/index.html","e0684bfd241864d1f2b2f06d6695438e"],["/tags/女性向/index.html","bf846829c7eaf2a5c56653cac6cd8ec3"],["/tags/御茶ノ水電子製作所/index.html","b8f4b1835bf4aa28055889cf9050c2d1"],["/tags/月の水/index.html","9cde456afa1f07911373404df5fe15c4"],["/tags/桃野衿/index.html","be14ffd04a1aab9563cc208bfde1cb26"],["/tags/機械式少女/index.html","914d4ed68865edaac5d85d7f306de1db"],["/tags/水仙/index.html","adc150139d5d691b7db616310e0a80e1"],["/tags/汉化/index.html","64b5e9e804895cc6a096c4ee2cf1366a"],["/tags/熊月温泉/index.html","82d6617acb4fc3707bb09dc3b8904b76"],["/tags/片冈智/index.html","68a0e13fd81bf03edc4b0898f21ed52d"],["/tags/片岡とも/index.html","0dd1bf950d4debfa843905bcf81c4ce2"],["/tags/牙の刻印制作委員会/index.html","e56283ce6c0b9fe6d5e04cd618067f6f"],["/tags/牛カルビ定食-FLAT/index.html","63ee8ab63dde66e9ebc442814533dac3"],["/tags/牧尾屋/index.html","1cefba75b476e828f97ebea85dca2b94"],["/tags/犬茶屋/index.html","31d42893ffcc1f34fd7d5e547a54cde8"],["/tags/猫猫社/index.html","9af2346e6087fce5d19da8599fb2fc6b"],["/tags/王宮魔法劇団/index.html","efe26f5e413c25d27b3a34158e0ece12"],["/tags/画集/index.html","e5516ed4fd96c7d09dd7156154541844"],["/tags/索引/index.html","16b9290bce989520d03cd30a0b5c3cc4"],["/tags/缺失/index.html","85cb4e92d5620fb3d7dc533211d9e536"],["/tags/自购/index.html","52be8eaa99234a7d25d3f68c70881eb1"],["/tags/茶葉☆姫/index.html","ff019ab6389dc4f78ebd71f722b89cb2"],["/tags/郷愁花屋/index.html","8aed6ff825ec251489be356a4c049a54"],["/tags/閂夜明/index.html","2cc14c0d2620e25fe3ce0542bb4f39a2"],["/tags/音乐美/index.html","c3ed753c7c6998d711e6ea498cd9f696"],["/tags/黒†救/index.html","e84ddb6104bf81b153543de7d391833e"]];
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
