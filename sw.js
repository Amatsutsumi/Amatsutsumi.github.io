/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","65b5a0ac70541da59318b33f2ab61cf6"],["/archives/2024/04/index.html","ab5678ecfb73f76fd4cbe4aa475e320f"],["/archives/2024/index.html","6fd8ce73d673dea573698df4e2ab7477"],["/archives/2025/02/index.html","283f5ed7e8901557d6c3280b510095e5"],["/archives/2025/02/page/2/index.html","f80c8ef7d9bfe56fc130e8020993a856"],["/archives/2025/02/page/3/index.html","c6d1ec25b56a38b3c47aacc5f60b17da"],["/archives/2025/02/page/4/index.html","30111c13d6be50009efbc3164f3fe219"],["/archives/2025/02/page/5/index.html","e09d0eb024366293b8292fd8a0c118c7"],["/archives/2025/03/index.html","9c01a6efb8ed5d34dfc8249cf8198274"],["/archives/2025/03/page/2/index.html","7735a71f24ce96129ab25d3fb8420b3c"],["/archives/2025/03/page/3/index.html","c9703c78411e801cb91675c2b81e6252"],["/archives/2025/03/page/4/index.html","7516c20e5ecb7326437b76807307e66c"],["/archives/2025/03/page/5/index.html","d34da82f28268ef3e53ded00e2b23f81"],["/archives/2025/03/page/6/index.html","280e59fb9907098a098cda7c0cf8bb7c"],["/archives/2025/04/index.html","ccad9f21dbf60018fdb01dc9fc713157"],["/archives/2025/04/page/2/index.html","247c09cfbb0101c016c52dedbd88deae"],["/archives/2025/04/page/3/index.html","cda6e4959bd84b0eb684497ae39c7a29"],["/archives/2025/05/index.html","43a355063c57b35b6eb071ddee3ec33b"],["/archives/2025/06/index.html","af6a3f8df65270d7b6be9fe2a9cc5805"],["/archives/2025/index.html","ada72e84078260c36b6f9e5cb175c873"],["/archives/2025/page/10/index.html","5cb05a993179e432687603b00e06b3a7"],["/archives/2025/page/11/index.html","0a621a1191310ab0bbcde367f3979168"],["/archives/2025/page/12/index.html","d5a85e50e04f5be0255be487f4155327"],["/archives/2025/page/13/index.html","f595d8c30a6dc9add94c5e81e6dbc1fd"],["/archives/2025/page/14/index.html","58e25800f757ff45ca626f07e5b245a4"],["/archives/2025/page/15/index.html","4076f7a6993f43be07cb9cb07a8c0f6b"],["/archives/2025/page/2/index.html","4e9f5b4207196362ebe487b963110bbc"],["/archives/2025/page/3/index.html","744f39e48548dfc2056633c4eb433751"],["/archives/2025/page/4/index.html","050f361da9fdf3370fe9a869f9fd69cd"],["/archives/2025/page/5/index.html","8d98c68b6535668b33ee95274336a6cf"],["/archives/2025/page/6/index.html","8800d8c1f6cb533260b40ca2d3753375"],["/archives/2025/page/7/index.html","143459c9b7c73f286cda1b64594f8888"],["/archives/2025/page/8/index.html","a29899e81545655cef4c2d78f4554aed"],["/archives/2025/page/9/index.html","58b32637c9f02eaa08239989ecd0b868"],["/archives/2026/02/index.html","03374d0af826b8f70e22ad5d3164130b"],["/archives/2026/index.html","4436a85c5952f3eb582d2acea8b3f48e"],["/archives/2825/04/index.html","495d7b033f532d8d9e2acac722de027c"],["/archives/2825/index.html","f2fbc5201c893e126d587e78e483a5ba"],["/archives/2925/01/index.html","e3552de5bec963acb1db8a146ae1ae3a"],["/archives/2925/index.html","cc1250faf9a906ac90ec7b37bbdb82f6"],["/archives/index.html","cd1b200d6812ac18fd9a422d9607d0a7"],["/archives/page/10/index.html","3dc82505f81b8ebbcd00b134f7530b91"],["/archives/page/11/index.html","3314bdfe1be8a630067736af74f75e60"],["/archives/page/12/index.html","46c8abacf0d740b209b6236e3527cb56"],["/archives/page/13/index.html","bea63734f2d81a9fba52cd531afff34d"],["/archives/page/14/index.html","46e63c19a662f00095546cd02afc7a0e"],["/archives/page/15/index.html","39de898ce046045217ac3443313a7127"],["/archives/page/2/index.html","c16e7ba93a4b93fe14226d592ba2d9e1"],["/archives/page/3/index.html","2fd0165d8245c547ca298fb12d04f65a"],["/archives/page/4/index.html","bf42710e133855be5a445f86b7d669b4"],["/archives/page/5/index.html","d30e9c79f18599a1ce9b10012e8fb2ce"],["/archives/page/6/index.html","f23ea2620983a0537c66b6637d80ffed"],["/archives/page/7/index.html","7bef29f502050efe7f2068128daee08d"],["/archives/page/8/index.html","07c7896d17a42963e902b056ff1b5dd0"],["/archives/page/9/index.html","94555d50fc5244e781e4f553f7a7c62d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","276a244cd864ca944d910eeda927be94"],["/categories/galgame/page/2/index.html","6b40e4fcfa09814b17cc76cbf64c6afc"],["/categories/公告/index.html","7c8ddabf1fec770c23fd6283df4faa39"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","e86c09be702603b4103eacfa156f6801"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","efcd424f77b351a0dfed235ebf943b13"],["/page/10/index.html","f7709beceb181136a97e1a98ed0010e3"],["/page/11/index.html","6437b675cdda792ebec74224347899af"],["/page/12/index.html","b1f85c6a49e462d380d269fff08f7072"],["/page/13/index.html","5800bd8a3e4713c10ad2cb10c27d3478"],["/page/14/index.html","ec80af890410a80a638da728d68c9d2a"],["/page/15/index.html","3cfaee0ff9585b1074356fcc150cb1f2"],["/page/2/index.html","6fe5f5a860a5400186ac9d449140302d"],["/page/3/index.html","474b7fe4b6f36f2543962bcd84c7f72d"],["/page/4/index.html","a3b26ac207f9124fbfe2149eb0932fec"],["/page/5/index.html","9b8ced3f1ba566aad8653f953cc60a23"],["/page/6/index.html","f0ca049566ae851cc00acd3f1562a3e3"],["/page/7/index.html","cb39262affc64f72ed1511d2ab1ec685"],["/page/8/index.html","e9b23fd21b3e27d60aefedee1ec76437"],["/page/9/index.html","1c8be5a129a1a48c182175e9981dc333"],["/posts/10c9dd98.html","dacd3e9b2bd06885e80b0418305640e5"],["/posts/1295b569.html","2a55e5e957a9d6208815c17fb0bda981"],["/posts/1370342.html","c67a9f7bc9c503f3222df15780ca7e84"],["/posts/15ef14c2.html","d562c26c798959eeb6833d319f2bb00c"],["/posts/15f3959d.html","9235cd204d8c083f324f8c8a008d782b"],["/posts/18ab785d.html","34b166e9899f94e2a5b9e72040bec5f7"],["/posts/1d59b71f.html","927a8717a587c2cd3b1731a8d087f9f1"],["/posts/20b3f3a4.html","ac04f1f7c4d594b807f86be07fc7c578"],["/posts/244daa7a.html","badf159b2eab5d41baac7800ca8adb24"],["/posts/245f1c7d.html","7b7e4259e8e711dceaff6429f5e1cf1c"],["/posts/252658f.html","bbbf1f868a0f491bc26fb410163d6ff9"],["/posts/28397adc.html","e0bed9f64ca10ee07ae448e626002f86"],["/posts/2ad07f54.html","6f8f0ac20679be00571b96e990a4044d"],["/posts/2b38bce0.html","44493c2a4dbd7d6d5b93e99b3cb50cd1"],["/posts/2c0a6836.html","0a75d301d8a07663788e95066d7f8bfd"],["/posts/2ce39bcc.html","7a88cc9591f68edfab00746dfd0f70bb"],["/posts/2cf620f0.html","7be66c01a3816020770494bf957ee957"],["/posts/2e30fd6d.html","1dfa8608fbbb6b3ec6c0c3754e2f697a"],["/posts/30a413ad.html","208df72b9e7e3c39bc821d65390253b4"],["/posts/34292736.html","57313d1e2ab5d92ca5e05655af3488d0"],["/posts/3468cbe.html","5bbb40f506edf23374b73cd6b78e4645"],["/posts/39176dc0.html","2742b319938d511760cecf9e17a65640"],["/posts/3be6a165.html","d2b5fc62526cddf2549a18646904ec1e"],["/posts/3daf73b4.html","2dd0996c5ce3857ce6cd37f27a7a2781"],["/posts/3e118dbf.html","51fb06e6ad8db44c95ed8ec6a927c309"],["/posts/3f7d823a.html","692c1615e9da3f0a1caba74e2b53e58d"],["/posts/3f978819.html","9a69d5f44ac9bbcc9e5af66af5444ea5"],["/posts/41dac80e.html","2c420b068bf1d10c0b5b31d6471ad095"],["/posts/43945723.html","fa4539efd68ed76fc88a5efde214fd93"],["/posts/44124a6b.html","66e8193da7a334f261b34f30b858182f"],["/posts/476a3006.html","f96f3431c23e3604f1c31f81d8bf048a"],["/posts/47abb61d.html","8a47baebbd9b1ba08bc6e29bbe9edd23"],["/posts/4996478a.html","3139a5c5ff3e0840db0997cd35bd5dd1"],["/posts/4b689be3.html","03684dad64bf6f402ce6a030aa897c76"],["/posts/4cf8423f.html","1ac6990b8fe2fedfdf87c8ffd530effb"],["/posts/4dcf85c.html","85aa892c9afbe84fef4e63d8d42c08e0"],["/posts/500cd322.html","883f9378b8045b1d78b9cba661959ca6"],["/posts/51c9b1ff.html","012154668a215994370b7678dadc1cb9"],["/posts/51ce68e8.html","f31b4bf2358d79cffebcfecc866985ad"],["/posts/52b5b3c6.html","8831c4056bc2061b09563c286a452dae"],["/posts/54f496ad.html","943f46172d43e1f3167f4439bb9cae00"],["/posts/558e1f30.html","160cfb15ffc483af598cc0fdd9278dc7"],["/posts/5d8bea92.html","a38b35c0246073e97e1d78777a974040"],["/posts/5f6e0c59.html","902d3204771e35ed49190650e813ed6c"],["/posts/61a63a84.html","ebf325ad576c9d0cbc11171ee283bafd"],["/posts/625ab7bf.html","ef26c21739a37c677896403761faa64f"],["/posts/6336a2f9.html","22d1bbd5f642e75eea5f6d9a2c3325ee"],["/posts/6432d61a.html","84483a330480b71be998db7e69a8632d"],["/posts/6515f032.html","6a9d500e812ca631b75f80c38c1f1c87"],["/posts/6720ccdd.html","444e2f55210d7ce99d4219b624c4c593"],["/posts/6a4b5ac8.html","234d449924c34cbe7cb334ba9d874317"],["/posts/6aa4177c.html","9fd4f90640ecf16148cded5fc5c29288"],["/posts/6b15f81f.html","3c4159a2279d1e930b64044857167c9c"],["/posts/71131d34.html","9f6c08cc37aca9c320a0bdf557f7731a"],["/posts/742fd48d.html","baba9a8d4ae88db66de3a2259beb9155"],["/posts/78a8a8d3.html","b12a1a504d8eaf917463c1f94f25b6ba"],["/posts/7a5ef3d0.html","ff9f88fb09256cdfd6e9e043fb21e976"],["/posts/7b41e1ac.html","b0a3b0d78622ab37b85befdaf5e18785"],["/posts/7b51011d.html","2a40de5582bdb76f69d7ec7fd9edb509"],["/posts/7e3aa3e2.html","b223316df2f0d14e00067e11a498d996"],["/posts/80fe2691.html","82ce3f0ad0ca76bd21e2142e8857cba8"],["/posts/81ac52e9.html","24ba283478c212f2c8a31ba01756cc56"],["/posts/82332d11.html","d9358abf3c9ee8f73e53b28af387f770"],["/posts/8486f6f9.html","baf154b790eeea5f6df4c2f38f867931"],["/posts/849b40f8.html","22a7917179a7abd371692347d2d770b5"],["/posts/85c51d68.html","3fc57d797d268e23081c527cc1ee02bd"],["/posts/86a6c500.html","439d1e0bdba69586c4de027a42eed64c"],["/posts/886f8d3.html","89a053a5c6ec2e90b7ca4a92ac00da61"],["/posts/8a7cba10.html","3b108cb91ba300c52b88aa7a60bb21f5"],["/posts/8ac11b41.html","f05c62a6b7b426703b2c49095e6fca9b"],["/posts/8c3f2fd8.html","87ca4f185b2d45192d1df4b0e811d006"],["/posts/8dd520d9.html","4f1738dc73c25bdf340c02805372910b"],["/posts/8f555654.html","82826898f9067b70f5540aaea7aca735"],["/posts/92a980c2.html","51f21e4946b47f89c7116af883bd9b5e"],["/posts/92ce16.html","dd0a6c966f9787b4853eb27e5fbc4112"],["/posts/93e9943b.html","a8b26131040b4a1c4619f8aa7227dbdd"],["/posts/94d3c794.html","e468d3ce905d15ef69cb0fbc9498de8e"],["/posts/9606c2fe.html","d0598325f185498717dbd116dd405658"],["/posts/96b281f2.html","80c5ca5a1765f95a9a86316bee4ce222"],["/posts/97f50eea.html","989942ecf79a2b03750dfb3aabcdf0d9"],["/posts/97fca8be.html","7743a41294f989393677c642deaadf65"],["/posts/98662d05.html","510cb16519f1d736921bc426f5b062b7"],["/posts/9a2f6162.html","e81231313d10da39e5e63d29295606f1"],["/posts/9b22a48d.html","a85fb4358a4652895f8a9c0a66d6c4da"],["/posts/9cb455b1.html","34a2f5ae643a52127602621a7b377d08"],["/posts/9ecdeecc.html","bff4686366609f16ee7a09649ca4cf33"],["/posts/9efd7701.html","6d94004f567bde4db995db063cbdc2ce"],["/posts/9f61c1a0.html","824fb1cbc00faa53ed36a63309334288"],["/posts/a1de710.html","f6f03e74c3176a5aaf1dc3daa6cbec06"],["/posts/a30eb0cd.html","cc0cfe30f533abd59246d0d97a3c265e"],["/posts/a72f71c2.html","ea1ecfe79e9cf1c3b4b8464148f11acb"],["/posts/a7634b5d.html","81f56c5017287c51dbfd6834847adfda"],["/posts/a8c593b5.html","3074078a81f9d3459ccba00ca40e4882"],["/posts/ad0c1efa.html","0fa9295e839dda180a05cdfd3a71a1fe"],["/posts/ada3f440.html","e78ea65e6533cf0080add23472dd7eac"],["/posts/af1807ef.html","b359fd88f2b6b6b14d292f7ac2561529"],["/posts/b397bf03.html","80a3a20c26945352eaaadd2e274249b7"],["/posts/b497b647.html","bc504e7f51da33429587b168b9e2f374"],["/posts/b4d464b0.html","9c7795f0569fe35db744f3444877c690"],["/posts/b5fb773f.html","ee9281e02817987d3c6f1cc287ee13d1"],["/posts/b8d46b32.html","a54e4eaa2c1a163554169d9f21e20ae8"],["/posts/c1b2c6c9.html","50850488d9b677ea85ba19939f004d2d"],["/posts/c2111cbf.html","fac9e2299fdeb9db757793ff9dbcbdae"],["/posts/c316c2e8.html","a1a21ca442a28225ca1ec14216e7ab7e"],["/posts/c43e60b5.html","5821deee9172ab7869b8e801b39c6014"],["/posts/c497a412.html","fcc5bc284733a87435ee03fb63a13073"],["/posts/c5395ba3.html","b355ca40c7b59db4b0fa91e2b0fbf51b"],["/posts/c5de299a.html","42a77ccd26a0bc457bfdd996ae792308"],["/posts/c70bba9c.html","dbb6d086198dd3c00abb14ac6db245d2"],["/posts/c797535e.html","4b27fa46a168ab0bb9d65e5bfd6aa403"],["/posts/c7a62c79.html","87872a3a84e29b3742a99ebe0154b7bf"],["/posts/cae2c959.html","a49619e7326330c95b9f796141d96cfe"],["/posts/cbebef2b.html","ecc713fafaf387e026d16a15e79493bc"],["/posts/cc4c0017.html","b9cbd5ec16a652b729b021f4081b5190"],["/posts/ce25023e.html","c4f7953f235960b5fa4cda23b18e6425"],["/posts/d2fd4837.html","cbfd7616de6705dda25758588d364670"],["/posts/d3233cbb.html","df8ab850e29a4a572a98fee217615f10"],["/posts/d3a745a8.html","8a8da5e5a4b937f1d74918fc0fc7706e"],["/posts/d7e940d2.html","e14443ae1e38fa7e662f69a192519736"],["/posts/dc815d5.html","c833021463f10b9068ebbf8295c4270d"],["/posts/de25b0be.html","18a36cd86c098db6ea9a483edd82f9c7"],["/posts/e2623b4e.html","85400d1288ee76cbff34c513a9b71f8b"],["/posts/e3ab6ad8.html","3f322f88199966857beb11848a27d5a3"],["/posts/e5018da6.html","7b1d69f5ad3542ae08f77d86c58cd59f"],["/posts/e5963272.html","9c66828dee6c36454e42faa67456fa76"],["/posts/e5ef4c3c.html","13be82586996f8ddaa9f72e4e0b6adc9"],["/posts/e624b065.html","1abc7ce9765a6b3cc1d4a93bcd4abcab"],["/posts/e7c703bb.html","46985001286d5fb54c5f713ac559b7c4"],["/posts/e8f14b6c.html","122503520fab262898e36db4b7c424cd"],["/posts/e91abb63.html","de8ec28985d5ca5f1c426cb905b8d001"],["/posts/ea9a8808.html","028b3a5f105065fb20797a3a5fe56944"],["/posts/eb784749.html","49282ed45de2d3c7e62ea2bc7900f11e"],["/posts/ebaf2232.html","d5293023e95007d15dadddcb9b1ecf59"],["/posts/ed75f185.html","d281dc9f17fffa15383749634ef275b6"],["/posts/ee1ed673.html","1d933b13a29df743eb7c4fcc91540bf2"],["/posts/f0c3ed61.html","c0f4a8800f082c741b5f39d044ee7eb0"],["/posts/f151ff43.html","9822c9558a875496db6a5a81bf2e4737"],["/posts/f21e7f84.html","a2601fd77f4eccccef0e8b9c1200b916"],["/posts/f230b0fd.html","29c7446ad9bfdd8a9f67b8fd5fe7cde8"],["/posts/f28a7877.html","ba1c04949821470ff328511e9cd0b486"],["/posts/f663d5cc.html","0c2bc033d3c8f0663c630c01b895b119"],["/posts/f730ad18.html","4393ca789546f3928ebf4003694622b3"],["/posts/fb5d4608.html","a2c7e85739b78bfd0047dedef14c0174"],["/posts/fc04d0d4.html","0509c62daaeb3da581ed436575f1aca4"],["/posts/fc455f81.html","7763f0daa1e97b763708508a2286a455"],["/sumire/index.html","a799562921256a4dd66ad1c510b14953"],["/sw-register.js","16be1f99fa5ca805e2d802b540af1821"],["/tags/AKo/index.html","86abc0330d3ccefe06d00e9a0d920f28"],["/tags/APPLE-project/index.html","9d385fbedde5e5c4ca2facbe2c361aad"],["/tags/Ankrache/index.html","86ff42bcb042e0c3d4083d543d5f68b2"],["/tags/BELL-DA/index.html","806e8423d650e144c9189466419fb436"],["/tags/BL-Game/index.html","6ae62361889f240e2f12ae4b3ff2c9c6"],["/tags/Blue-Dahlia-Digital-Creators/index.html","e1f3549222cf24286545e21909bccd5d"],["/tags/Blue-Line-Games/index.html","b525ccd6d69158f3296783ffae3c3071"],["/tags/CD/index.html","65af272b49c77c0c616d8c0081a845fc"],["/tags/CHUNSOFT/index.html","46e2f224cd36c46a84d5d0c3a65c6ecc"],["/tags/Check＆Stripe/index.html","2cf2c8d0bbd4d03b04265e54a2e97c26"],["/tags/Cherry-Pie/index.html","8968e288ba53f16862b10660cfc43259"],["/tags/Circle-Mebius/index.html","ef88ed44abf264842721cdc3da198153"],["/tags/Cosmillica/index.html","a59b1730258ca5cdb79cb1a1a9d811ec"],["/tags/CresCENT-BLANK/index.html","a19deddcddc0cfe3733ad12c19cf43d1"],["/tags/Dopamine-Software/index.html","319c7e7afa3e76da68a9b321f9aa7daf"],["/tags/Dos/index.html","dee76821d1b9709fb139190bae13c97c"],["/tags/Earth-Well/index.html","3b94f12f374a705f3b8b23f9c5536272"],["/tags/Forest/index.html","be8d50b223e9105105119462f0e0f2ff"],["/tags/HaccaWorks/index.html","453345518f3168956998e926864873a3"],["/tags/Kanon/index.html","466eb2003867b0a5dbb1edb313dcd5c9"],["/tags/MANATSU-8/index.html","3e1674494c1ff557f6a4625ccc67409e"],["/tags/MARINE/index.html","dd469c45c53a4074e56b6ee44df939fb"],["/tags/MIO/index.html","345c15d8e2cfbd5b1d9d7aaf6edf0293"],["/tags/NAOX/index.html","7505061821a14d4de205933bdfcd72a8"],["/tags/Namikaze-no-Uta/index.html","f02cbcff57a1cbb4d635ddd0895abc20"],["/tags/Nmyu/index.html","e24de214879daabbe115029b693a5c59"],["/tags/O-S-I/index.html","c65eb43a59a8d565d1c8c9de69ba9b7c"],["/tags/Omegaの視界/index.html","0519eb47c85c8856d080532103bbbcf0"],["/tags/PC88/index.html","9587354d2207c5cb519af4bc165d665e"],["/tags/PC98/index.html","b24d8790190cdc58a770e9e35b86acf1"],["/tags/Perpetual-Room/index.html","ac9eaae55671cd7cfabaf2230269cfbc"],["/tags/Pleiades-Company/index.html","0bded3e551a2e3060e541910c60bdf76"],["/tags/Project-Twintail/index.html","081a1274b40e5c63d842377fb0b1bf09"],["/tags/RIFF-RAFF/index.html","bd314b70c79c2435e8c7cafa5ad872f3"],["/tags/RPG/index.html","c377c932b7280887aa9f708fadad48e7"],["/tags/RPG2000/index.html","13d6d518cd444478800c3f6f7a92fab2"],["/tags/Reverv/index.html","9d65086fe69a653a84139148865ae68c"],["/tags/SENTIVE/index.html","3c666fa090d2c511ad2f2f7b0c2483da"],["/tags/Saihate-SOFT/index.html","9dd39e2da4d947f2b255b4f4f58d4301"],["/tags/Scrubbing/index.html","bccba4ed989778b9dce21a5aba7c6bce"],["/tags/Sky-On-R-imaginAtion/index.html","41eb4f9331591aa360e245e7cdf27d4e"],["/tags/StrayMoon/index.html","8a0274d05b5401f3a8aefc1cbbbc850e"],["/tags/Studio-Bu-Sa/index.html","49f8e086633f7fe1183a16f4a3235ca8"],["/tags/TRANSPARENCY/index.html","eeddade409ee3556631650ffc2fdb209"],["/tags/TRANSPARENT/index.html","ccc2db34f2de16af5586574a4c6c136b"],["/tags/ToHeart/index.html","7ccde20a8c346ca8a4eafbf0ce2d2086"],["/tags/Traumend/index.html","31f2078786cb4f9bea4a8fbc3421e8e5"],["/tags/Witch/index.html","999e346cbdb51198d64c021b7e3e2e4b"],["/tags/adonis-project/index.html","46b8a7b0fe988bfebe975f146823b3ba"],["/tags/capriccio-suite/index.html","87a486f7c5b332f2043db4dbf84c431c"],["/tags/flash/index.html","6e71f1e695c755f7d3c71d9c1c6bb72e"],["/tags/galgame/index.html","4eea369de5a6aed70dd3a56ddbb21cc3"],["/tags/galgame/page/2/index.html","9e1e41c886896b567b4c14ae54c61948"],["/tags/gal资源/index.html","c79c173cd1a551920f116b678263d71e"],["/tags/gal资源/page/2/index.html","67d309202ff59eed2b8666f7d084097b"],["/tags/gal资源/page/3/index.html","e761a04bf827b969ebab49f908f60a55"],["/tags/index.html","6594a2f08d892636293c23bdaad82e07"],["/tags/m-kz/index.html","dc96b0f98d855563276c4796b81dae99"],["/tags/purgatory/index.html","d069f11b9b9fc96e9b9342cc06c16a2a"],["/tags/rkr/index.html","e332c9c4cca2a4a6568e7f3bd4c9b3f0"],["/tags/team-eye-mask/index.html","ce7dafcb89bd1b5e8d6b45d5122e1a4f"],["/tags/ありすくろいつ/index.html","95aed2ba21db70fff4fe134695a336ed"],["/tags/いつものところ/index.html","ddf8b44b1fc89f4f9b393dec93ed5eba"],["/tags/きつねみみ饅頭/index.html","65fa4e2210e35f1a2edd8aa85e110d2c"],["/tags/ねこねこソフト/index.html","4712a4cfc40346fdc800196ffcbab8dc"],["/tags/ねこバナナ/index.html","1f0a43e2aefd0722f39660de99bda271"],["/tags/はちみつくまさん/index.html","20e135fcafd5112715a615684e1605fb"],["/tags/ろりちせ/index.html","667b0e1b5392128887bc18a210268d50"],["/tags/アイル【チーム・TATU】/index.html","56c4c3c105bf9b0e2b4deb5617739988"],["/tags/アークシステムワークス/index.html","5233565e379722deb13ee4d3a82cbd83"],["/tags/ブロッコリー/index.html","5466f9210ecdef1e59ee9b30cf91f296"],["/tags/乙女/index.html","b98a080720c9a495430e8f040fc2fc1c"],["/tags/乙游/index.html","0782477f554b3202dfd006ec37022d51"],["/tags/停产/index.html","09f6a0f34a15c6005cf164224505155b"],["/tags/公告/index.html","c266925dfa47356b96e0a719de5826c1"],["/tags/同人/index.html","5861589a220aa70436d7bd8ed1bd15c0"],["/tags/堀井雄二/index.html","27e317129838a63ddb0fbe0cafbcffec"],["/tags/外海なおき/index.html","3e56c0cbd5463029f6a7f1334301bbd3"],["/tags/大熊猫/index.html","1de2d62a6b7fc8a15f20d9ddb88e8808"],["/tags/女性向/index.html","c866ee80919893572d5838244354cf13"],["/tags/安装/index.html","5b5d6ae77833f4cce326f6528a9d91b3"],["/tags/御茶ノ水電子製作所/index.html","63a5bfe1aa0cb90865f74b86012bc25d"],["/tags/月の水/index.html","54c982c1509a33777da0cd69f28f667c"],["/tags/桃野衿/index.html","21f34049319570fb05036145b934db07"],["/tags/機械式少女/index.html","be986ed5cef8b6b6b4d059b130a7f3c1"],["/tags/水仙/index.html","636655cfa987e546be9dfae709fd695b"],["/tags/汉化/index.html","0ea49814fc48f26c80defbe13b4ab48b"],["/tags/熊月温泉/index.html","4d60cec11d47f0f62f6054e0e248128c"],["/tags/片冈智/index.html","fcdcad596674d7e9bdefe2befc6b9a5d"],["/tags/片岡とも/index.html","584d9383f80b501e0eb6236983f4cd8e"],["/tags/牙の刻印制作委員会/index.html","956cd8732f625e63655198adb68d1f6c"],["/tags/牛カルビ定食-FLAT/index.html","3989fc4e6436349116a82549ff2ce703"],["/tags/牧尾屋/index.html","acafd5e65ff0754c9c142a486c73ae09"],["/tags/犬茶屋/index.html","401079c1066d3b80dff129e0da7b765c"],["/tags/猫猫社/index.html","b7c5739c52702add7bd320198a6595df"],["/tags/王宮魔法劇団/index.html","a4d4c09e0561c6fafb4082565b0ff0f8"],["/tags/画集/index.html","62fedd6ea49126b4ade576c89e6de8cc"],["/tags/索引/index.html","c83e1e1d4e7ebcb3259d04a43da97ab8"],["/tags/缺失/index.html","1550ab3b9573c7d98129cc3e2776d385"],["/tags/自购/index.html","9121491382a31d48da2e97590efaa7ac"],["/tags/茶葉☆姫/index.html","94702b3f6f636f01ba2796eeca7b287c"],["/tags/郷愁花屋/index.html","15ad0746d6f7b408ee162b8261f6892b"],["/tags/閂夜明/index.html","94949c1fafe75b2d836756fe112e9445"],["/tags/音乐美/index.html","f1e00d14e71490e797010aa0d4b5defb"],["/tags/黒†救/index.html","0c6543e78f8f59dd91b1224f9bcc9c84"],["/tags/黒百合っ子大集合/index.html","84d2cd5d8289a33238165082fb1abd80"]];
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
