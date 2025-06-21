/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","aa2c1f1d8a49c58f301deb8319fc8a6f"],["/archives/2024/04/index.html","e3e86e6a6b0ae8ac267c0056ffde5c46"],["/archives/2024/index.html","e05208924527e03d0bc70fdc6e3f0373"],["/archives/2025/02/index.html","437240acdf08537f6baa3c738ee96c05"],["/archives/2025/02/page/2/index.html","b0c90e6755fc166f9b9c8423fa810335"],["/archives/2025/02/page/3/index.html","51301399ac5617fee70d9e73f3655811"],["/archives/2025/02/page/4/index.html","6980fc4cfff80c608b31484e5dbf1cac"],["/archives/2025/02/page/5/index.html","9afb1cdba10fb90f73cedb4f7ba4ce68"],["/archives/2025/03/index.html","d7dd33b2b394afacb3a821ab02867df5"],["/archives/2025/03/page/2/index.html","5dd3bc066fb1b3de963841ac1dcd7317"],["/archives/2025/03/page/3/index.html","dc8c3caee06cd6077efba633dcffe61f"],["/archives/2025/03/page/4/index.html","f33a1eac97604845820274b1c021453c"],["/archives/2025/03/page/5/index.html","469802dd7be24976f28520038d15d1b8"],["/archives/2025/03/page/6/index.html","b30304c42096b9b4821bed40cde842a3"],["/archives/2025/04/index.html","d3476af58d9998253598a10c86f128b1"],["/archives/2025/04/page/2/index.html","541da194be25418c8f3d967242988f7e"],["/archives/2025/04/page/3/index.html","41f8551cd4dbc1fb46c2ea521882edf2"],["/archives/2025/05/index.html","a311560ad16b3f9c05c40d75011f9b03"],["/archives/2025/06/index.html","06328034fb59865728d5996445be0d24"],["/archives/2025/index.html","0676d6094fa06ae7bf2cac39f6bfe696"],["/archives/2025/page/10/index.html","2a66308e859164f904cabd364bb13603"],["/archives/2025/page/11/index.html","92a705540bb7ffa1554c8ddb19ac2b3d"],["/archives/2025/page/12/index.html","1fd214546c3dbfdf7ff8d01c4c1237e4"],["/archives/2025/page/13/index.html","054b4fd6d39b5e16984cdbca75d349cb"],["/archives/2025/page/14/index.html","53b67a4f8786194a1b0e1d9133985fb9"],["/archives/2025/page/15/index.html","eef7bd319e73a6cdd02174666c787910"],["/archives/2025/page/2/index.html","de39516476238f48a26160e0e0cea16a"],["/archives/2025/page/3/index.html","24c96f41805f04053b6776df920d2ded"],["/archives/2025/page/4/index.html","085af49097bac80b88a9c42601d7e3c6"],["/archives/2025/page/5/index.html","5c1f0d8d01935735c0ca4b399c874e76"],["/archives/2025/page/6/index.html","e7c79fae23da1124b4e0835bdf21b034"],["/archives/2025/page/7/index.html","68f064251e67b9bda143e0f5cfdfcc1f"],["/archives/2025/page/8/index.html","556ec7dc3997e05643428f677858d32a"],["/archives/2025/page/9/index.html","263d7950e5bb39a2b3fc0f1ab5fcc9d5"],["/archives/2026/02/index.html","a125c26443f022bef27e76491fd9eb6b"],["/archives/2026/index.html","79137bc436f2b72f6899db970d4b578c"],["/archives/2825/04/index.html","ca4b4f30791b63e220d6f79f9a385e52"],["/archives/2825/index.html","4250d034e94cd6e2a6c0a5fee09f59d8"],["/archives/2925/01/index.html","70e867f4a25dc58d62b45a0a7f61651f"],["/archives/2925/index.html","95ec6033fd75d9854692be824e97f7ca"],["/archives/index.html","1ac9e022062bbc946f81efbe377231e0"],["/archives/page/10/index.html","d8c2c5f2ff3e9b86fff909e5f83f2720"],["/archives/page/11/index.html","f75376946af7862df7b21b04afa2f1b5"],["/archives/page/12/index.html","62bab0e43731c6786daa15492ba22a8a"],["/archives/page/13/index.html","cbacf0dcfeea532441f7f048a02ba561"],["/archives/page/14/index.html","b4ebfa2d8daa40b37576b74ab91d3f7e"],["/archives/page/15/index.html","664504f07b5b6620b3492c2811a69f9c"],["/archives/page/2/index.html","0848553b46ba99f7b1a103c6b0f07ee9"],["/archives/page/3/index.html","707a2c4849569060d29a98cab8058c32"],["/archives/page/4/index.html","25be16a808c777ddeb48fffd6d327f1f"],["/archives/page/5/index.html","b41f1e2aa61d713a050c22261a520838"],["/archives/page/6/index.html","3b747c348cec86bb679f9d4a2719304c"],["/archives/page/7/index.html","ed55d9de09319d2e8a130c15634c42fd"],["/archives/page/8/index.html","9f216a8f292da82171c7da424abb09e4"],["/archives/page/9/index.html","2a2cf80a61e85d36be2241aee1a4e714"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","59c5cf6a2854670a0e1913a910f082c9"],["/categories/galgame/page/2/index.html","cbbe7955c4fdf42e94173f09161302ff"],["/categories/公告/index.html","d89e8c03d2f3076de416e207e2687e7d"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","381c92b953db1a160e71865bc8a91c60"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ee3f311f711928f2619bba92437f41a9"],["/page/10/index.html","11ae1f10db265ef0a3a8739e05065087"],["/page/11/index.html","5909901f18f36b475428d3668dc52880"],["/page/12/index.html","1be71caaa0f5e2cf1921c5bc75eee913"],["/page/13/index.html","164e90eed4b5b648abd12c0ddf10116a"],["/page/14/index.html","253872f1547c1bffa02586ac83a0c0d7"],["/page/15/index.html","708cd0976620ddeb46342aa1eac51dce"],["/page/2/index.html","e40ae7cb438e48d4d1f3c327fe5e4892"],["/page/3/index.html","7b8493aeaed2d638395f29e2bd47c317"],["/page/4/index.html","c23448cf6fba93524cfac0d996fea9b6"],["/page/5/index.html","c1a86ddc83d47e8be27b81ccaeb4dd9a"],["/page/6/index.html","8969d660f97af513bc015ef9bf58ea9c"],["/page/7/index.html","a7ef87f556cbab4a376df829fcc1881c"],["/page/8/index.html","cb43d35ca571f2c33c50e370e9be2bd9"],["/page/9/index.html","bcfd8cff8df7e50d9da3cc005b9f7589"],["/posts/10c9dd98.html","9c8885bc045586cd99f89db62860a185"],["/posts/126ebb99.html","7b9dc57c07fea22d55c045c294f6e710"],["/posts/1295b569.html","4212b9a98f28168375fb0d284b9edda6"],["/posts/1370342.html","a195ecc7feb16f4cd85c93cc2817c023"],["/posts/15ef14c2.html","0a4035b2520d8ca7866c907a05a476c6"],["/posts/15f3959d.html","cb95852b8ad512faf4bfaa6e0ec6c911"],["/posts/18ab785d.html","942fa8abe548d4dfffcb6b44bfd2acf7"],["/posts/1d59b71f.html","9ae134c333418afa714bc0dcf6c34c2c"],["/posts/20b3f3a4.html","206a45b76fa54c985ad28bd4a59411ea"],["/posts/244daa7a.html","d1cf6ec58de3d29a9822a4a700212964"],["/posts/245f1c7d.html","0d709c6a684a3e8a37dc164f3d25932a"],["/posts/252658f.html","f24a8717c95b747cd3b140942659f60c"],["/posts/28397adc.html","128a2239879b34342b9fd5e176e989cb"],["/posts/2ad07f54.html","8305611f72965f0a7750d3f2e391aa26"],["/posts/2b38bce0.html","2e30dbc390af5d8a8e7c935f0e7c6c2e"],["/posts/2c0a6836.html","1fb77ef714b46bfaaa6fd82d997c1e49"],["/posts/2ce39bcc.html","757c384501f613a4fe0beb8a1543c180"],["/posts/2cf620f0.html","d0a2e5ae998f341b37236955486714b0"],["/posts/2e30fd6d.html","39a255bb3ef24faebe2bd34dca20d7a1"],["/posts/30a413ad.html","cb84e6485abc11b6c3be621c5d7d9c23"],["/posts/34292736.html","831dc622f8e42b138c5b05e8ae2ee387"],["/posts/3468cbe.html","c549be7935aaf94699310aa9a1c94d98"],["/posts/39176dc0.html","e0446f7416efa801b0c6919f7cd04c73"],["/posts/3be6a165.html","610224e37c9a381d9e3ece2524a19540"],["/posts/3daf73b4.html","f3f073df5dd9f798b2479ce553c8fb19"],["/posts/3e118dbf.html","5eb28032d2846acc0a810d34e11893e7"],["/posts/3f7d823a.html","24cecd39e7ab0fab8fe9332ba8250d50"],["/posts/3f978819.html","7e471c649e5ae86413396e0469c36b81"],["/posts/41dac80e.html","52b20b8e9311ed51d28049923a34db6c"],["/posts/43945723.html","0a7f07f5f7417466c312e38e0c9aab0a"],["/posts/44124a6b.html","33e23d5f0023dc4490497ddf01c115ee"],["/posts/476a3006.html","d5365cf5228db0b36ee2ebd1b4ce8403"],["/posts/47abb61d.html","a1466f55999d3aeed56d9492c3b9e3c4"],["/posts/4996478a.html","83e448974450d4516f5af088ad11776b"],["/posts/4b689be3.html","649d9b9df0f3f24c5e1c1ff4b0f92904"],["/posts/4cf8423f.html","5ad5ae0f4113834fe5013dca8b8926b9"],["/posts/4dcf85c.html","9e5df213fc8a73f3170ead8d52bfd161"],["/posts/500cd322.html","2c14f2d91fbfe8efc28444d4e1c34027"],["/posts/51c9b1ff.html","139edf7dd120e083a5b3023f10bdc66b"],["/posts/51ce68e8.html","a6fb633d7ad259274b0f144bbdc188ed"],["/posts/52b5b3c6.html","32f64feb465b92e6ddf27da103f20b67"],["/posts/54f496ad.html","0dd0495d1c1ca99ae36b68a23ee7e8ba"],["/posts/558e1f30.html","b32ebb1a6b9786baf5b676016eea904d"],["/posts/5d8bea92.html","b05d0fb71a2c717d846ccf2e7837f3f4"],["/posts/5f6e0c59.html","6c701558813d913589db58528829c09a"],["/posts/61a63a84.html","5c904070c9c8acfbfe477f2caf34ce4d"],["/posts/625ab7bf.html","b898dc279657e7901f181e66ecd70de0"],["/posts/6336a2f9.html","421908ffd17ffbebbb1543984405b93e"],["/posts/6432d61a.html","6fb3f15258d813959efa33e76d77a476"],["/posts/6515f032.html","1e930e14b8e3b46653643810c6ba2aac"],["/posts/6720ccdd.html","70259cc2b41191cdee1b9c71596e2d02"],["/posts/6a4b5ac8.html","1f0386ada8b89d4a805dc2666bed1d5c"],["/posts/6aa4177c.html","3be1f2521e5d90c86d1c677c4dc0049d"],["/posts/6b15f81f.html","666ba582122a0e973a5e81d160a30f0e"],["/posts/71131d34.html","5bfd8960dab25b00e87feb2a289dc709"],["/posts/742fd48d.html","34884d0c0d78f2896cb3c967be50e64c"],["/posts/78a8a8d3.html","538ccc509be3abd6e1405b8e2e4cd0a0"],["/posts/7a5ef3d0.html","e484ff11c8b87b981d5221e76cbc9e8f"],["/posts/7b41e1ac.html","657a131a65e055f456d2b4f60c4ffcff"],["/posts/7b51011d.html","f597421935a0833d9fb9ca248a8b6eb1"],["/posts/7e3aa3e2.html","817604af2aba73e4cf2b018c33e1cca8"],["/posts/80fe2691.html","0d8cb372f129f66a2ebda160324fc932"],["/posts/81ac52e9.html","90593caadb7a78f8d79f1ed35ede4188"],["/posts/82332d11.html","a5c1d2240828beec386e2e0535528a7f"],["/posts/8486f6f9.html","3a185f727418640e8a1fc4093109080c"],["/posts/849b40f8.html","2bd054eebefe25b96ea9e65d881ea225"],["/posts/85c51d68.html","e75e825e17a164d777d7e2b2d9aa9ff5"],["/posts/86a6c500.html","0262a91e43fd420ba8082274424ed77b"],["/posts/886f8d3.html","bdf2b9faac74ed4de3ceb274acddc506"],["/posts/8a7cba10.html","04f2c3002db713cad379ded5a9403d4f"],["/posts/8ac11b41.html","add4638a19d5e46d1624bb790e2d84b0"],["/posts/8c3f2fd8.html","04cd180a9ab5f292cab345541a39a023"],["/posts/8dd520d9.html","8fc17462266b9011bcca59a63f8487b3"],["/posts/8f555654.html","09b7dc55914b8238652830673296126a"],["/posts/92a980c2.html","a3b6d64dd7b545a66fb1da1c25eb275e"],["/posts/92ce16.html","94a1415c3a857bb7ba5b0ffef7483135"],["/posts/93e9943b.html","63703893ef353373a62e7079a72ac554"],["/posts/94d3c794.html","b48c9c8cfea5803302dbd546f750252b"],["/posts/9606c2fe.html","d01b9d66886e968bd4ad6021d593c2e7"],["/posts/96b281f2.html","347f8acd52f5f540e8dd9bc6025197c1"],["/posts/97f50eea.html","644f29004349718304a6a9a63879cb93"],["/posts/97fca8be.html","76fcb27442d07fc974e8924dfb804728"],["/posts/98662d05.html","ff48c0e027eb4e32a2ede1429a75952b"],["/posts/98ef47c3.html","a4d2a61e88b5cb9eb283934229202b49"],["/posts/9a2f6162.html","74452b052a96a06b13412b71c92abd4b"],["/posts/9b22a48d.html","09160b6679b45beb203716635ab7dad7"],["/posts/9cb455b1.html","f54976e7eb038b3ba18bd7bcdf3bee6a"],["/posts/9ecdeecc.html","fce00d06b3520f0d48745f1359746598"],["/posts/9efd7701.html","1e52e8b20aa757a656360e43e2ced24d"],["/posts/9f61c1a0.html","95f86e149ee8370be4716ac0010b285b"],["/posts/a1de710.html","086d6b2fc6bcd1c3d20da9ca6f028003"],["/posts/a30eb0cd.html","35d9a26ba83d0ca1ea8edf213214c2e3"],["/posts/a72f71c2.html","58523ea7afcef5d68fe72bea36b623e2"],["/posts/a7634b5d.html","8c6006cc809017f2ca66698fb2432596"],["/posts/a8c593b5.html","917e0f67739ad8e71206263dfaa15ea4"],["/posts/ad0c1efa.html","702d7d444725c6018fc77eab7aef7d7f"],["/posts/ada3f440.html","577aa7bcb2decacd28dbd4a46f8049a8"],["/posts/af1807ef.html","6df7cfd3a0815e16a00d91988e090a1b"],["/posts/b397bf03.html","fcfc67e63fbb45582ff24ff40088da81"],["/posts/b497b647.html","54f1e699f747bfeb943d4c9618b9bfe8"],["/posts/b4d464b0.html","0d0af4ac9bd8c2d1e960c84dbedc4b30"],["/posts/b5fb773f.html","7482f7412245afda534e0b3150711040"],["/posts/b8d46b32.html","71b5c279771d731b582d0306e7b102d9"],["/posts/b9872f2c.html","24ce7ddc486a1afbf5364536ef21f533"],["/posts/c1b2c6c9.html","a29d7e20cb316718769022a750e31647"],["/posts/c2111cbf.html","d3647628e22f30d64feab9c21c9b0f53"],["/posts/c316c2e8.html","0531d81aa4f7fac639c6d5fbd5f8bd16"],["/posts/c43e60b5.html","9a3b942c6a4d61cc4598dafaf44f54a4"],["/posts/c497a412.html","fe2a843228bbfe0d9de964a8853f0029"],["/posts/c5395ba3.html","b28414d2c524ad239fb56f9f3bb0b500"],["/posts/c5de299a.html","5a6b86f9abf30eecaab4fdbef32a5df5"],["/posts/c70bba9c.html","94d78aeccc3216bd60b5f14bb0816f8c"],["/posts/c797535e.html","86041b8d179a8f2222d64a5ee4eb6ac5"],["/posts/c7a62c79.html","3f6212a6eb1e1354485727b81b8f65a2"],["/posts/cae2c959.html","00d1b4006b1454ae94b68606dfe439b7"],["/posts/cbebef2b.html","7a6eeaef383518c2e02a648c8c6a3c8b"],["/posts/cc4c0017.html","cf96e880e8c3af5bb316818c067e7dcb"],["/posts/ce25023e.html","731618d8168a528b97bb681c22ac1319"],["/posts/d2fd4837.html","ed041f819c76b9677f453d1032fd483d"],["/posts/d3233cbb.html","9e8e831bb207a1136d5b61d35b337742"],["/posts/d3a745a8.html","ffcc58a8b7871b564b4b56a9bd7005f7"],["/posts/d7e940d2.html","17079af99ab495eeb35d6b95c9e91738"],["/posts/dc815d5.html","ccd86ed5de7b6b7f5b26ab2a10531677"],["/posts/de25b0be.html","8139fc18f4730d1c2c7475983d2d190b"],["/posts/e2623b4e.html","1a59c818bd9d1b0ba81ac1d96f09b1de"],["/posts/e3ab6ad8.html","340572f8bb75ace1106bb3faf8feea61"],["/posts/e5018da6.html","15d917fcf5db58a36ffcd18c3c45ff77"],["/posts/e5963272.html","ffe04e655068359e72397b0dbdd29539"],["/posts/e5ef4c3c.html","5d37d90a04115a6879484253a4d9233a"],["/posts/e624b065.html","6c91bcfd1ad81630503b1e3ecf2ba900"],["/posts/e7c703bb.html","f89629fd30b324a0ba0a20106c52fe64"],["/posts/e8f14b6c.html","15bc1c18391ccf0bcbd86bccdcfbe956"],["/posts/e91abb63.html","b76c1185e83dd0b6c598ad084408877b"],["/posts/ea9a8808.html","65839533c1bad9ae9a6ab2c3887020e1"],["/posts/eb784749.html","e13328ba0f6087eb86acf1b942706d25"],["/posts/ebaf2232.html","00bb95a68db4fbb21c648ee1e9a73902"],["/posts/ed75f185.html","ff0beabd1e2a5cc811aa31e79e4ca93d"],["/posts/ee1ed673.html","30f698e641b20d64eedb97b5469a2da8"],["/posts/f0c3ed61.html","57f95a81a988a0570f58d576fa504138"],["/posts/f151ff43.html","ce827fe195de984edc6cc3bd9a0efce3"],["/posts/f21e7f84.html","b2b875ae80b8b4973ed48b0ef05b7f96"],["/posts/f230b0fd.html","29be3d138c3929e576ac50ad6ad8fcde"],["/posts/f28a7877.html","d03ed565beb54876d0eb151e6dc86eb5"],["/posts/f663d5cc.html","b26fbf9a8e46a7751e921a1002ef4321"],["/posts/f730ad18.html","d040d4648d5ddf6faa6a4b7daae35fbd"],["/posts/fb5d4608.html","642baee3e362eb91497fdd8d70440c1a"],["/posts/fc04d0d4.html","399581dc132e5c62cc65a8bc967a91e5"],["/posts/fc455f81.html","e9130544f31db35f2ec3c9e716b8ddfa"],["/sumire/index.html","6e97c581d55135ac3f2e947a639a4983"],["/sw-register.js","eae819441755824a7e94f3ecc06becd2"],["/tags/AKo/index.html","608a6415649c879fe044e16eb8471aa5"],["/tags/APPLE-project/index.html","05fc305fd534ab7f254e804b1ef463e5"],["/tags/Ankrache/index.html","bad8df507e7ce664203b814c6a088a6d"],["/tags/BELL-DA/index.html","0b63eed5b4fe8d190bb61f3c2f26c18e"],["/tags/BL-Game/index.html","d92802b9dc1d51690ab07491ac0ca3ab"],["/tags/Blue-Dahlia-Digital-Creators/index.html","eb2de7cd7a98f585fd0ca904277ae3ca"],["/tags/Blue-Line-Games/index.html","ceebc5c02dc4d697af7f90243e7c86c0"],["/tags/CD/index.html","e26303832a19649e8e3de51dc9122427"],["/tags/CHUNSOFT/index.html","7ac40e07e53382ca4a3d9f1b07a32a6e"],["/tags/Check＆Stripe/index.html","a302369236b3cd6e4fc2d0deb195f16b"],["/tags/Cherry-Pie/index.html","5c0201d7f7a257972b2214c38b5cf125"],["/tags/Circle-Mebius/index.html","4f7ea2498da8005f65223f1d9b6624ac"],["/tags/Cosmillica/index.html","6caf520e71a69d58432b687e855d003c"],["/tags/CresCENT-BLANK/index.html","1b2f531ded82b5ade16f9277bac84742"],["/tags/Dopamine-Software/index.html","2fa94614e389733d221271acdfec6675"],["/tags/Dos/index.html","51ff7e63f22f8160e3c3177ad3574a1a"],["/tags/Earth-Well/index.html","71a4906483c6a77c87435e462540368a"],["/tags/Forest/index.html","99454147cc9e10cff1d6897051bd3010"],["/tags/HaccaWorks/index.html","32d37cb26d17ae479bbe87d569a44edc"],["/tags/Kanon/index.html","34be240585f63efdb5e23345e86a3657"],["/tags/MANATSU-8/index.html","0114e2ab8ca2b86418c45d3bfa78a04e"],["/tags/MARINE/index.html","b89b81fada2e1f944e6a230f765e6fc6"],["/tags/MIO/index.html","01599365e69342b58a65fe391a5d93ab"],["/tags/NAOX/index.html","81e590bd48a4c76c313600ce044acf30"],["/tags/Namikaze-no-Uta/index.html","ee860c3d59e0b84bf296aedb80dcc655"],["/tags/Nmyu/index.html","049feaeb3c84b2c5880cc1dfca9790ec"],["/tags/O-S-I/index.html","2f9c17eae3b63d50bc613d75320472df"],["/tags/Omegaの視界/index.html","ea47368b0cbefa86e4ca4493d7a7446a"],["/tags/P-o-l-c/index.html","0b934911eb32d225364a7b9cbe339968"],["/tags/PC88/index.html","363c5f7a443004172468f5da045be1d1"],["/tags/PC98/index.html","ab8ddc5cecc0f46480966a4b6e64a207"],["/tags/Perpetual-Room/index.html","3479cdd1dfb8d6f28de1fac82169cdff"],["/tags/Pleiades-Company/index.html","a1bad31892370679587b43dfaf033163"],["/tags/Project-Twintail/index.html","3a7f708b66f4a2d28d9fa1f68a3d5b71"],["/tags/RIFF-RAFF/index.html","3691ab62b86d5383c34829c06423eb6d"],["/tags/RPG/index.html","da6690f7e03297754a79bd246d07f641"],["/tags/RPG2000/index.html","1ee2263ba5c60f3d2d2cbda6cb02ab45"],["/tags/Reverv/index.html","181b902cb8d395c15ff218a9797fd7ed"],["/tags/SENTIVE/index.html","566002f2acfbd07068bce4ddb740cbcd"],["/tags/Saihate-SOFT/index.html","ffac4625241dd81348b147322bb405f4"],["/tags/Scrubbing/index.html","aca4cebdfe869065c6b6c622280e8fc2"],["/tags/Sky-On-R-imaginAtion/index.html","e748f75fc44d97c0f8768c7df4fbf700"],["/tags/StrayMoon/index.html","4e7fa25433dae59f11c0d1f691bc18ce"],["/tags/Studio-Bu-Sa/index.html","1f32e0b53dfa5591e1c9ea1da94d7c95"],["/tags/TRANSPARENCY/index.html","4554b48fae58a93f25df64e9bc56008b"],["/tags/TRANSPARENT/index.html","098171bf83237e8d72803bc0e546d27d"],["/tags/ToHeart/index.html","9e3b64585cfbe5d5e2ecfdbca2ff90ec"],["/tags/Traumend/index.html","07e7d0dd5f4622c7fe30177d50062a2f"],["/tags/Witch/index.html","b5bf9ec52dad4268cdbd882147446bef"],["/tags/adonis-project/index.html","e7816caad284546155ae4fbbe5a51f5c"],["/tags/capriccio-suite/index.html","af34469e96b0c02b142b1f69f7da3846"],["/tags/flash/index.html","049ec90d3122fb237ae42a41a99cae95"],["/tags/galgame/index.html","e5e141c4935e16ac421fda66464783f9"],["/tags/galgame/page/2/index.html","1831ad40bb94fb0ec9dfd04675d25817"],["/tags/gal资源/index.html","8fb69931fa6ee21e58770952c3ab07a3"],["/tags/gal资源/page/2/index.html","ddd509c8ee7c9a776af3f5ad3e944100"],["/tags/gal资源/page/3/index.html","7b2caf2317560b1408f8bd658d597ace"],["/tags/index.html","2d9996cede574f7763730a4b1992584b"],["/tags/m-kz/index.html","3128dd994cc8c653f2c363f6a06e5f2c"],["/tags/purgatory/index.html","8b09e91d01c6a5b660c334e023eb2841"],["/tags/rkr/index.html","e5d9cdf8cf663936f9628225dc29532d"],["/tags/team-eye-mask/index.html","4cae512a85769de5cb415725c56064e5"],["/tags/ありすくろいつ/index.html","db5d6d53f68744ff04868aaf3838e520"],["/tags/いつものところ/index.html","1d78883e4980ed4baa8d65bab9b4100f"],["/tags/きつねみみ饅頭/index.html","910b98195eae1826134e533408dd7bc5"],["/tags/ねこねこソフト/index.html","21e6baa4864239ffe9fdd7050a477a63"],["/tags/ねこバナナ/index.html","134ad6ac530fa076a9b9707a811d87dc"],["/tags/はちみつくまさん/index.html","690d7590d612743f0ba4c4227e5a3e42"],["/tags/ろりちせ/index.html","e79968fb8c13d047421ccd918b1c50e1"],["/tags/アイル【チーム・TATU】/index.html","9f300ceb10f0f679a14e7d0ec4f465bc"],["/tags/アクアポラリス/index.html","f7e8ddf2a767dda934a7f7d694291547"],["/tags/アークシステムワークス/index.html","4486dc68dbe8b4b09f95ac0e4f49d54e"],["/tags/ブロッコリー/index.html","8c7bf14af3b99628bd516b7e4d5fe4ea"],["/tags/乙女/index.html","bc4c6a6689c1cdf053a2758993058581"],["/tags/乙游/index.html","07d3fe85892c07c8a9da4a09a4e59321"],["/tags/停产/index.html","d91738e3df9780c9a7faa2542411dbf1"],["/tags/公告/index.html","3489f6c13cd73f5c49db97e087a1e10d"],["/tags/同人/index.html","8d66a40e5b7cae099ef94ce7074f2287"],["/tags/堀井雄二/index.html","ed25a66c658991ce3a91e16b5ff6bb5b"],["/tags/外海なおき/index.html","d78d7f6d12b1f9dd47d892df0ad28d8a"],["/tags/大熊猫/index.html","a220247cf8bb1d32a93a3f17cd600bca"],["/tags/女性向/index.html","752883816fc58fec37819056f381db76"],["/tags/安装/index.html","a62ee414ccb0722845a6a474b9926bbd"],["/tags/御茶ノ水電子製作所/index.html","8897738ee74a9a82abe2fc4a889e25e1"],["/tags/月の水/index.html","36ec163c7fe0dce043f09803d4725523"],["/tags/桃野衿/index.html","fe723729ef646aed06d75e401b62ab38"],["/tags/機械式少女/index.html","0c5430dfb47f54f27b32093b2e90af57"],["/tags/水仙/index.html","f6cd7386ef27d5d72796bd4ad26307c1"],["/tags/汉化/index.html","ab887bd45136f1792afecdf383d4e6e4"],["/tags/熊月温泉/index.html","a3222ef17f68eb1d59866c339297d3b7"],["/tags/片冈智/index.html","90ed0febc3cc946afed99b7f0532cc57"],["/tags/片岡とも/index.html","88aaaa6333c3f24cb1c04a442160b750"],["/tags/牙の刻印制作委員会/index.html","c9e66bdb6a67be9611f1cb00c76be9d6"],["/tags/牛カルビ定食-FLAT/index.html","8ec388a1929a4feb7177c60c973579bf"],["/tags/牧尾屋/index.html","2d843888b1bf8610bf00e60f4c916540"],["/tags/犬茶屋/index.html","fa6007665e987cb0407a9edd00001ad6"],["/tags/猫猫社/index.html","b4110336d408b71f460c386571eb8d1d"],["/tags/王宮魔法劇団/index.html","740a9ee4d6cd7f8eed2141f57255acb4"],["/tags/画集/index.html","6fef96630afd1993ab883ddfbb975798"],["/tags/索引/index.html","ee1b7ee94995fb5318bc9f158616e343"],["/tags/缺失/index.html","9bb1f9d499ec1855db81e21271aaf21a"],["/tags/自购/index.html","ac2ce4a6536869cab81eccf244a04418"],["/tags/茶葉☆姫/index.html","d85ae1ee0be93bc9221340a9a19f8338"],["/tags/郷愁花屋/index.html","9eee183b7f86e00acfaa7101dfeb19ce"],["/tags/閂夜明/index.html","5ac808bff2a2e6b58919230d5079e462"],["/tags/音乐/index.html","8ee1a848fca1db955670f144e4546a4b"],["/tags/音乐美/index.html","ec9f9757b2959838fafad9bf24eadea8"],["/tags/黒†救/index.html","5924539177c93e824151826efd780c4a"],["/tags/黒百合っ子大集合/index.html","c1e299a579cdab99469546b07e60868a"]];
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
