/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","26cb95b3891d7872dcab649cc6efaa1c"],["/archives/2024/04/index.html","7b97f6e88294dd88a99586474b7addb0"],["/archives/2024/index.html","26dbbfa8248a6ba2963aa389c9fd6b65"],["/archives/2025/02/index.html","cc71466abd55af9eb7930b8e6b7284f2"],["/archives/2025/02/page/2/index.html","1ad59873bcf00d9ab524ee026fae813d"],["/archives/2025/02/page/3/index.html","3a34b3f0bf306e6bf6c98dfcebfed621"],["/archives/2025/02/page/4/index.html","795db32253c51c2fa711fe797c59d232"],["/archives/2025/02/page/5/index.html","2ec50432d6774c34ddab1b76296c2039"],["/archives/2025/03/index.html","07c4db06d6cb2d3c1dea96ebe47fff6b"],["/archives/2025/03/page/2/index.html","52df7cfc78aca40f74ba7d546b1722d6"],["/archives/2025/03/page/3/index.html","2cfea2191b274c09152674079b77d3d2"],["/archives/2025/03/page/4/index.html","bad9592c49f51aa7da5c4593584bda6d"],["/archives/2025/03/page/5/index.html","c13cde2f2a7bd6b74cc21121397d1593"],["/archives/2025/03/page/6/index.html","9a6abd9020d0d04da2bedca6f7e2005c"],["/archives/2025/04/index.html","c5d7ecd229e4ee0e387169237a5ebfaf"],["/archives/2025/04/page/2/index.html","547353fb3cb442bdaf60e9a849925be3"],["/archives/2025/04/page/3/index.html","5bcd5cf4c3130b05f99a2de55ba96193"],["/archives/2025/index.html","165c95188973371bc22203649a61efb2"],["/archives/2025/page/10/index.html","76f3bd99599e869fe1fedf8010d007af"],["/archives/2025/page/11/index.html","d9654077061b71ccaa9c432ee25dfeb3"],["/archives/2025/page/12/index.html","3015d7efe4fcb7d654e874956f40631e"],["/archives/2025/page/13/index.html","6e9e0c54f5fe83a1c7fd5eee467b7c21"],["/archives/2025/page/14/index.html","5c49af0c0a7270b5b9e930fad7ca2bac"],["/archives/2025/page/2/index.html","da6f61a876ea77cac1d6e7ac29500728"],["/archives/2025/page/3/index.html","6e88e66e95da538388198a61059d6f92"],["/archives/2025/page/4/index.html","8313584d71634397285fe4ab27318e4f"],["/archives/2025/page/5/index.html","cecccad3c7711ac591143826551a8fc5"],["/archives/2025/page/6/index.html","a1c47727612452eb85a67979d6dcd056"],["/archives/2025/page/7/index.html","64c50c7a6f770c5b95091f195130b7f6"],["/archives/2025/page/8/index.html","33186b18dafb0203a4516d9cee6cdfe3"],["/archives/2025/page/9/index.html","e596e26cc435ce64c892e8ddac1a1b00"],["/archives/2026/02/index.html","a4e0b41ee6acf66829a60a66049d9d24"],["/archives/2026/index.html","53aae7a24d22443e63f0bd7e88f67ed0"],["/archives/2825/04/index.html","ab58e17c1541197db707bdfb7bce26e7"],["/archives/2825/index.html","378bff08811d0efac90a158f640dffcd"],["/archives/2925/01/index.html","090d75e54a5b41ab48d1e124d3260a80"],["/archives/2925/index.html","0724af6bc807ff3e17aff056e64ce685"],["/archives/index.html","30e0caf9c9ad940070d3bb396cfdccd3"],["/archives/page/10/index.html","beb7b81e687ed9d44aca6fd447b39424"],["/archives/page/11/index.html","43dbb11f79ffed5194e331c9a8b41230"],["/archives/page/12/index.html","bdca69614f968e2668c6d6a6257d7ef0"],["/archives/page/13/index.html","92d563dc3f1ae809517f6a28b3acf98c"],["/archives/page/14/index.html","d7a01c39854610eaeaed21b96ff8557a"],["/archives/page/2/index.html","43ce8db22d31f46443579b1752596f5b"],["/archives/page/3/index.html","e5ff544df8ec035296dfdb6064bcae15"],["/archives/page/4/index.html","25970de1d27487a48cf580d6588a586f"],["/archives/page/5/index.html","da13be488de04b94aa395c3b1fd9ec67"],["/archives/page/6/index.html","5ef13b37e5d3ce8e487f2ce59749cdc3"],["/archives/page/7/index.html","b7a291b7f1198272acb3e3679e99cd06"],["/archives/page/8/index.html","5e9fc73f880998d7d1151c2c4e4cdf76"],["/archives/page/9/index.html","ee668c066b1ad4874b365d021969a2de"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","42a36380e0d51e484c4a540e86d9a4af"],["/categories/galgame/page/2/index.html","c858c5f5358eea9bb0800329cc492f75"],["/categories/公告/index.html","a4b2fbaec4bd00ba854ccf44130ab4f5"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","3d312303378f91207bdb392e72b839ca"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","58682f9b3146c8d713d979c1c0cdab61"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","06a4064325c7ec0d8e04f7bf71bcec78"],["/page/10/index.html","90cd73df7f9d2c81e655235e5927c6d5"],["/page/11/index.html","c5570cfa03bc984cbc551ea003656d7e"],["/page/12/index.html","84e36601489ea8a2c40f9afce1f24bc4"],["/page/13/index.html","cad24a60f8610612657cd9f591b80413"],["/page/14/index.html","f716218d01db896da7da9ead1d6392b4"],["/page/2/index.html","cae24cce52fc5461cea1eef45eab3b4f"],["/page/3/index.html","26f7fdae2f630c6f5524628010a30fb4"],["/page/4/index.html","c43b6d5dbd4e675b2a7cdc44e770e670"],["/page/5/index.html","808ee61bb4498b40eafee0eb4155229f"],["/page/6/index.html","9b9a3b6e0f01775e5ca1c34dec63bdb4"],["/page/7/index.html","8b8878ef1d9765c17285679249954eb6"],["/page/8/index.html","d3dc7b2fda5746f171a721cad3d25d9a"],["/page/9/index.html","0b172682ac0fc95cd6ab9f9f1a2f92f0"],["/posts/10c9dd98.html","5a7ec712624f1dca8e175b6d596675f2"],["/posts/126ebb99.html","b07dc346aeafa3255ec6bc597a57c093"],["/posts/1295b569.html","521037f8b699d02acca9aadc8b9aa5a3"],["/posts/1370342.html","7656578d028b9466e2c2b8e27f848f62"],["/posts/15ef14c2.html","9c07f1df88e73481a2f8c79417c52b75"],["/posts/15f3959d.html","4f39b581c5e02f40f5b23a7399aa98de"],["/posts/18ab785d.html","e36fcfb56aeffa7e1ebcb4fe8b6612bb"],["/posts/1d59b71f.html","62f2e5149584c9b08dd0513ca2f73720"],["/posts/20b3f3a4.html","54157eab6c0bd1426743361e6376c0a6"],["/posts/245f1c7d.html","5468b20e1e43071045442dd658485d5a"],["/posts/252658f.html","ed3272a2646a76d9c825ec15d6c36171"],["/posts/28397adc.html","108071d9fabb40a9541e62f19613ba44"],["/posts/2ad07f54.html","d0ec68f4d68f2a5da60ab38e1822040a"],["/posts/2b38bce0.html","88961634b2212aeae44f34a6113b7b43"],["/posts/2c0a6836.html","08b4e20d80450174e49f233010929437"],["/posts/2ce39bcc.html","30738459a905dd1722f0e89107e492bb"],["/posts/2cf620f0.html","2da96ad80d42cf8db32805f9f4a6035a"],["/posts/2e30fd6d.html","6fc41f5c6bccd023b6fc375638f404ee"],["/posts/30a413ad.html","de264daadbbd1deb2620285929913382"],["/posts/34292736.html","d633101dc4c3a895a89f94e7f09e428f"],["/posts/3468cbe.html","90b8de00439ece708ab91db5b9f41fcb"],["/posts/39176dc0.html","bc43aa330454a19dbc784baf6ce86960"],["/posts/3e118dbf.html","61ebdaa6047e45c5530c05ae23b9058c"],["/posts/3f7d823a.html","0a620dd7a976e9dd97d4695cb42e2687"],["/posts/3f978819.html","eabb9d2fb4672d32be2f9857438d6605"],["/posts/41dac80e.html","d1b262ea0686ec58f51c88fae36529a3"],["/posts/43945723.html","661bb0cb74f3f00edf5cf77d44c642f7"],["/posts/44124a6b.html","344634769a3be1493cb0e0f01ea363a4"],["/posts/47abb61d.html","9c9222961eccffdaf739034c68e263cf"],["/posts/4996478a.html","1f21eb2b91f35c3fc43123319c016ff4"],["/posts/4b689be3.html","53c5f1c864d7337bf6acdfedb3fa7abd"],["/posts/4cf8423f.html","61362a9247a77b7eb790e356f863e6fb"],["/posts/4dcf85c.html","989e53e80c455da2c954abe84a90ca61"],["/posts/500cd322.html","0f244b0c3f68a11e25d750e995eb047c"],["/posts/51c9b1ff.html","3492e5110985d3f6213064c5d4374606"],["/posts/52b5b3c6.html","9b1184360e7fcfe7081e5a36c6b14ab9"],["/posts/54f496ad.html","bc76be106021615e40217ccb065ce55a"],["/posts/558e1f30.html","8fca1741d9ec066c6fa805b3f60d55af"],["/posts/5d8bea92.html","11c4b83f8b105255a10d3097a11cffa9"],["/posts/5f6e0c59.html","288a2a7288186d4d839505b04347915d"],["/posts/61a63a84.html","bb82fe97b50e6c587a64077740b8077d"],["/posts/625ab7bf.html","843c4587f532e2554d04b0f01d1258c9"],["/posts/6336a2f9.html","c4fab17d081b8a948dd874bc63d9cd25"],["/posts/6432d61a.html","0b39eda70d999d663d3e5e9ea8f39e67"],["/posts/6515f032.html","cb5cb65729d648acf5083c382de24827"],["/posts/6720ccdd.html","1212e1fbf35317b77835ea262c63b7d6"],["/posts/6a4b5ac8.html","29f6fb4991418cf36179ab5167cdd93d"],["/posts/6aa4177c.html","a2590f37a04cff82a469ee01361f1f8b"],["/posts/6b15f81f.html","1b99f04134cc4cd5fdddb4512dacbf22"],["/posts/71131d34.html","e4db2fe3ef97a938c418ebc15d01fb52"],["/posts/742fd48d.html","b1e1d57ad090ff91ebdf4e4f26687914"],["/posts/78a8a8d3.html","7f27d2651e22befeb8f1bae18d88b2bc"],["/posts/7a5ef3d0.html","73634ce715adf8c260255e3fd5c44aac"],["/posts/7b41e1ac.html","8fc13d7e31019fe2efbea291c2eebe43"],["/posts/7b51011d.html","6548ba68e6a3e74727b9205834dbe727"],["/posts/7e3aa3e2.html","7bc12e1997d40e1a300f0a5e2d654acf"],["/posts/80fe2691.html","126caccfe120a29afe16f3463868417c"],["/posts/81ac52e9.html","c8ae2090bb86a01cbe3147484873b100"],["/posts/82332d11.html","79d96a63bfe13800c143f723cab342bc"],["/posts/8486f6f9.html","8593d531e93840bde867fa7fa511795b"],["/posts/849b40f8.html","8c81c3965ddb60ac1f231e7b5a418f55"],["/posts/85c51d68.html","07a811e892199e6163fa457931742d67"],["/posts/86a6c500.html","284e87354cc292f22e65ec54325cdbd4"],["/posts/886f8d3.html","08c82bd401464cdb88bb04a8394e7ac8"],["/posts/8a7cba10.html","e45a6b8d3c3bea2da9d50e0da3c87cf6"],["/posts/8ac11b41.html","560f4d12f73607810723dea560ee123d"],["/posts/8dd520d9.html","7e5619c51dacfed7b8a67d4c4ad629c6"],["/posts/8f555654.html","cf81be2024e3ba05678c5e0fa7f9de30"],["/posts/92a980c2.html","9a283cf577710713502a3d510adea021"],["/posts/92ce16.html","cad0fe3821eccbb17018c984c7d77a1b"],["/posts/93e9943b.html","eebba79bf8e9ce8743f7f148f7c620ed"],["/posts/94d3c794.html","7d7f79d8e38b2fd7e7580776ea86b859"],["/posts/96b281f2.html","f38421fb9cb2ad35b950dc5ffec59070"],["/posts/97f50eea.html","6f75920060e8a7de240ebc185c50bfdf"],["/posts/97fca8be.html","469c330220910a8ff9f0596379125a65"],["/posts/98662d05.html","b63b50206e597eaaa066678cd86c9f83"],["/posts/9a2f6162.html","fbaaed719fac53659521b85fbe1f2877"],["/posts/9b22a48d.html","69f32d047a4cb303ac7a82ae8a464f69"],["/posts/9cb455b1.html","dff9a05b18ffcc2f36db523943cfb249"],["/posts/9ecdeecc.html","0ccfc8847901e7b6da2141e4c46d2544"],["/posts/9efd7701.html","7454ac03282f211edeb480df86bf2140"],["/posts/9f61c1a0.html","bd5de7d90b3e09f7be420d96c7f803f4"],["/posts/a1de710.html","cfccdf6ff6acff29b046b6db7affa241"],["/posts/a30eb0cd.html","8d617281f96952724feec1bb8631ef3d"],["/posts/a7634b5d.html","38697ede6bb462a54e7b12a7698395b4"],["/posts/a8c593b5.html","62391e165e651bd72e821e8239cfdebc"],["/posts/ad0c1efa.html","e36c7bb79090227d654915383a858057"],["/posts/ada3f440.html","92300f675e753243607da593bb3a7d38"],["/posts/af1807ef.html","42c67e9107b711f6825be1a923c0eef4"],["/posts/b397bf03.html","ec1f9944e6166b25b7065018ee4a338e"],["/posts/b497b647.html","cc4f42600a324b644d31500c33a428ab"],["/posts/b4d464b0.html","e4b995fb71fd6b8a2f644dfb773be742"],["/posts/b5fb773f.html","1941b05fee9b5f06ecc1c8851313d070"],["/posts/b8d46b32.html","7f04803cf5e8dec0ccc39d562c7134d2"],["/posts/c1b2c6c9.html","86eea734f5ff476e059f1d9ef1390582"],["/posts/c2111cbf.html","247ea6effa9857531f42612d3dd4efda"],["/posts/c316c2e8.html","4762643700dc33fb0197dcb665298227"],["/posts/c43e60b5.html","ab1806ad873f21568c49288a8ae8a84b"],["/posts/c497a412.html","0d17a06f7ff62706f777c0fd2c02953f"],["/posts/c5395ba3.html","608c3a7ac5b77615af3e2f3d6da690f0"],["/posts/c5de299a.html","c682fd0379ef44f245dca20244244176"],["/posts/c70bba9c.html","e3a97c5dc32afbbd56876d2001c6d1a4"],["/posts/c797535e.html","9338fd385e0f52504533d592b6c8061e"],["/posts/c7a62c79.html","c950eff038931d263580830a1931ce18"],["/posts/cae2c959.html","7975c23862bb302bfc85632a36dd7842"],["/posts/cbebef2b.html","acacafb98559b82aa1661e2dd3b72088"],["/posts/cc4c0017.html","f341147f013aaa5872c77648cad71d0f"],["/posts/ce25023e.html","6efa809609084431d66485aee7b087e6"],["/posts/d2fd4837.html","c82bc4be36bc51739157a1b3d3d982ac"],["/posts/d3233cbb.html","9829762e9f30e3d72dd25d8dbf696a95"],["/posts/d3a745a8.html","2666356bb8dd1776ac354f98f5ac8332"],["/posts/d7e940d2.html","a7502254468e8461887719dbc2ad5a83"],["/posts/dc815d5.html","bb5f6468a185c73ef8337c89a607cffd"],["/posts/de25b0be.html","8dbc886c619e7797864ee7f0ca5f463a"],["/posts/e2623b4e.html","be8a1ea02ad9ac6ebfeff469f31e2cc4"],["/posts/e3ab6ad8.html","cb90e349a55b069362fb0e01b34c67ff"],["/posts/e5018da6.html","dcb07ba583da9d2f63552aadf45d36ec"],["/posts/e5963272.html","3421c69552a9730b0ac580f186bd3298"],["/posts/e5ef4c3c.html","8d4f17852eccb6519e1508f4b95efb9f"],["/posts/e624b065.html","d45b24c4af8c1d48718fed244f2d9def"],["/posts/e7c703bb.html","1c539e96f2e03cf5b51db57939e279b9"],["/posts/e8f14b6c.html","62bd18057b488efde3eb56f34d135117"],["/posts/e91abb63.html","29a111558c41c50f372121d205ffe23f"],["/posts/ea9a8808.html","a8660a1882f966b4d9b57070ab8174a3"],["/posts/eb784749.html","9ca31a5c2b6299c5d28478a85bc00fca"],["/posts/ebaf2232.html","62f2e5680f2fd9d10cedf0a29cb67dee"],["/posts/ed75f185.html","826bbbae9a95a719e2899e7c3005248c"],["/posts/ee1ed673.html","423f2df80d43158342b30acf162da35b"],["/posts/f0c3ed61.html","af4f3e9ee3162c23163f584efc0a59d3"],["/posts/f151ff43.html","e87066a32b1bf3c026a26a1733e06b9b"],["/posts/f21e7f84.html","d28c7df66b18170370cc134357951737"],["/posts/f230b0fd.html","2f38fbb4d647ca5c61e35c2f6d532147"],["/posts/f28a7877.html","03bfe6da9ac898dfed0c2c4a96a11baf"],["/posts/f663d5cc.html","30303397d71dd2f82ecd7daa972666b4"],["/posts/f730ad18.html","440c41756d94b604996a61cb4678b148"],["/posts/fc04d0d4.html","b56800ff552a7e4b89f12b4b026ae76a"],["/sumire/index.html","2822f88386be48c4ef92574a9c5ecd72"],["/sw-register.js","2b9bbf82134bb983f9e2067ff5833e24"],["/tags/APPLE-project/index.html","24473645bdceb33541371ba992681da4"],["/tags/Ankrache/index.html","04f50fc0722df68944634a3e20c04730"],["/tags/BELL-DA/index.html","e53d56baa35e641be500ce66c82ac562"],["/tags/BL-Game/index.html","cbee0c655b2b2e28920ac84497282c1f"],["/tags/Blue-Dahlia-Digital-Creators/index.html","074ea7db6b083828f1807750e720b160"],["/tags/Blue-Line-Games/index.html","fa5919f98c61adc73bf8cb5a6754df7b"],["/tags/CHUNSOFT/index.html","15e846257cd38cdecf31d3a36deb3523"],["/tags/Check＆Stripe/index.html","708796206cb4987de368ae7ef4b34a2f"],["/tags/Cherry-Pie/index.html","f427f1f9ac88686b1c2122c12c4c68c8"],["/tags/Circle-Mebius/index.html","628f18181902635959153e1e0cb2b8c1"],["/tags/CresCENT-BLANK/index.html","407831b3b5443a7a9cdb18148b24d279"],["/tags/Dopamine-Software/index.html","5069c694cdaced616dd26f4556fa12c1"],["/tags/Dos/index.html","df0407457023c69402014fbe3df42f62"],["/tags/Earth-Well/index.html","87391e3e4a02d7275196666cbc208c79"],["/tags/Forest/index.html","01eb06d138ad10813ef12fdb81502462"],["/tags/HaccaWorks/index.html","560b06bf624b3c590a3a5c8b539154e6"],["/tags/Kanon/index.html","a31fdad4e734a16f4e09dae3415b599f"],["/tags/MANATSU-8/index.html","b40d40379fd71b40b4b2a3238c6a5f8d"],["/tags/MARINE/index.html","d6144bc8f158aad5a84d541aef5686f5"],["/tags/MIO/index.html","766338f8927057421aceec4302a613d2"],["/tags/NAOX/index.html","5a73aa2fa0f3716c667dd656df1f99df"],["/tags/Nmyu/index.html","737eca567f4e8c67d26f9148e95aa50c"],["/tags/O-S-I/index.html","4884859160a787fd3e362bc92fde6b2c"],["/tags/Omegaの視界/index.html","3deb486b835d4970a86abc5ba0b59933"],["/tags/PC88/index.html","170a11fa79e575e028cf54df1c9974e1"],["/tags/PC98/index.html","9f069b05194aa404bb28fe7daa5f500d"],["/tags/Perpetual-Room/index.html","3b96f7617de004f9deaed5db354e6585"],["/tags/Pleiades-Company/index.html","267c3541b81f09b5ce12cde3c43ab9ff"],["/tags/Project-Twintail/index.html","62701bb32593aeb3511cd99642cd371b"],["/tags/RIFF-RAFF/index.html","c4a730100777fbe751bd70ae80298c3a"],["/tags/RPG2000/index.html","81bdaee6487a0ae8d5962bdc3bb8f16d"],["/tags/Reverv/index.html","c1b65466b724640174c28290172ea8cf"],["/tags/SENTIVE/index.html","00e6e74319c3c53de25d4bcd9c393c2d"],["/tags/Saihate-SOFT/index.html","bdde25c231925dc5ab0a51143cf9fb0e"],["/tags/Scrubbing/index.html","d4b86746db90d556dd830da044ad0bf6"],["/tags/Sky-On-R-imaginAtion/index.html","d14fbf2353f08f47faa5c15f961ad9d8"],["/tags/StrayMoon/index.html","56e73afd5ef162161c816d338fbf10d1"],["/tags/Studio-Bu-Sa/index.html","d0396cdefca70418570d877f9306bafa"],["/tags/TRANSPARENCY/index.html","bf183c48e861d1a3fe497e77fd208a81"],["/tags/ToHeart/index.html","bb70d13869ec3d401b17075eb7c9e423"],["/tags/Traumend/index.html","da60c153066db1225be1dd17a46a575a"],["/tags/Witch/index.html","8e373cdc1c9e0e4c080706144472dedf"],["/tags/adonis-project/index.html","60adde6bf735773a4a0d6de57f00424d"],["/tags/capriccio-suite/index.html","02c2aa085985afd4f696279a65222ab2"],["/tags/flash/index.html","35b9e10db10a23857f6d6e009f06ecae"],["/tags/galgame/index.html","8439fa0145fd07267247651449c1ac3c"],["/tags/galgame/page/2/index.html","7186ba6d3f4e6978038379bdd50c6d4b"],["/tags/gal资源/index.html","67c066d7ffd463b4daf93228e663d4e2"],["/tags/gal资源/page/2/index.html","4c96babf6001f0381d84d6e680c147f8"],["/tags/gal资源/page/3/index.html","a01ba32f364ab4ada304eb6beeb881b9"],["/tags/index.html","f68cf573d6d99240283b40c022a50ca7"],["/tags/purgatory/index.html","6872e04c389f8526e853718531e61973"],["/tags/rkr/index.html","1c749c26579a61c81f33438ef668648c"],["/tags/team-eye-mask/index.html","2b6d6db2ca18665bfc625755e2dc5395"],["/tags/ありすくろいつ/index.html","38faf8252f12aed2408f2ef6893371a4"],["/tags/いつものところ/index.html","13e44956f4bef3189526621613f64963"],["/tags/きつねみみ饅頭/index.html","32ecaf63e6dd1a8d1941396131c20098"],["/tags/ねこねこソフト/index.html","600b947712471c54d1b6fc835be5b6a1"],["/tags/ねこバナナ/index.html","2245ef3f8cfa8bcfb21d19dd88e31fa6"],["/tags/はちみつくまさん/index.html","7c71dcef072bbdc2aa712409e6b3ce9d"],["/tags/ろりちせ/index.html","8cd1c8682a3c5980f0c68f920333fe7a"],["/tags/アイル【チーム・TATU】/index.html","3d0e7b6fa034519ecb42fce5891b86c8"],["/tags/アクアポラリス/index.html","15f2ea834b34712b245de36c1b67e921"],["/tags/アークシステムワークス/index.html","15f93cf1d34580ccfbf69ec2fe64951c"],["/tags/ブロッコリー/index.html","451f355acca472adc2ad937dc9c320a2"],["/tags/乙女/index.html","08999049c86eadd2e5aeb93d8360d3da"],["/tags/乙游/index.html","0e7b33995bfbd31c9abc106a9ed1056c"],["/tags/停产/index.html","60cb775050360b575568ad1525ff9f6e"],["/tags/公告/index.html","a64d141dbc31cd6632bbb68b26662dd6"],["/tags/同人/index.html","92961f0676d97c0907840cbe7d6b5f88"],["/tags/堀井雄二/index.html","bd882fc98e22b647011ea52efc6dba3b"],["/tags/外海なおき/index.html","294df71096302d96142a295f456969a6"],["/tags/女性向/index.html","1a741130321d996ef378d665bfe2611d"],["/tags/御茶ノ水電子製作所/index.html","533b0fe3212942ae4a639f5cf35d191c"],["/tags/月の水/index.html","c8f0505ba71735e0863cc58c3627b875"],["/tags/桃野衿/index.html","a0d96baf23786c86c4f8b240d244c662"],["/tags/機械式少女/index.html","a5470441762415217cc4eb5b76c43e17"],["/tags/水仙/index.html","2d9ddd5caa8e59b6607b53e178dbd74f"],["/tags/汉化/index.html","ec226003f6f72cf0b773202a1d0cade8"],["/tags/熊月温泉/index.html","64329b0acc6ae815ab458fc60c156a99"],["/tags/片冈智/index.html","b2ef6a0fd506bef2555e3f9b5bc9c782"],["/tags/片岡とも/index.html","f3c170dabe5c3c1b7f85d35f8f2dc918"],["/tags/牙の刻印制作委員会/index.html","801024090f216da8a92f06957ce45d25"],["/tags/牛カルビ定食-FLAT/index.html","9db827db3b366e0c41a08b1f43bfec3f"],["/tags/牧尾屋/index.html","f73ab7d828075545726f5459b850b99a"],["/tags/犬茶屋/index.html","2e8caf5633b076d113aac495698fb54c"],["/tags/猫猫社/index.html","ab3f429d73b0c4da5461e2d7b09cf97a"],["/tags/王宮魔法劇団/index.html","24b1ebb8b179db009fbf8817d1b02034"],["/tags/画集/index.html","c0e3d9903a8c080efa61bd17ec1d5537"],["/tags/索引/index.html","1d2854d11949c24e55a1473f0eb880ba"],["/tags/缺失/index.html","ed3c6ded400b373c1787a636bf06e681"],["/tags/自购/index.html","2378c3361ecc10d1421d509abbcfb0c8"],["/tags/茶葉☆姫/index.html","36fa0beb6e81a772357b6fe56f589c3a"],["/tags/郷愁花屋/index.html","f59bc1222252144add96397055403805"],["/tags/閂夜明/index.html","545d7db2f8d502bdac2775c86402af1d"],["/tags/音乐美/index.html","686aad61affc7433ac9ac459e016320e"],["/tags/黒†救/index.html","87a5af965137ad03dfc689ed4d44107f"]];
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
