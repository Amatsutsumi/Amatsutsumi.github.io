/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","305e3ab7f684322c32debd5e1e2898e3"],["/archives/2024/04/index.html","4480ca9a1833ac65c7b1ab63f46f83f0"],["/archives/2024/index.html","4f8ace746652457cdd068bc1380c5aef"],["/archives/2025/02/index.html","57ad721dd537452e7782ae1a1fcbb45c"],["/archives/2025/02/page/2/index.html","5455b9566c364207f675b871003feabd"],["/archives/2025/02/page/3/index.html","a3c9d2c9d89ccd4e7f012e6dc7a33f59"],["/archives/2025/02/page/4/index.html","c6f16aeb6e60623770f3e1c8cdac4b2b"],["/archives/2025/02/page/5/index.html","328176abc398a66a321a4c29348fd565"],["/archives/2025/03/index.html","3812d9b8e8a91c38db740136991d5da7"],["/archives/2025/03/page/2/index.html","eca1f610721d0900a7ecea61d60c2342"],["/archives/2025/03/page/3/index.html","79484e45b31c3b74405b2c49a7511ea5"],["/archives/2025/03/page/4/index.html","96b853f0f26306f40ec29be257284a74"],["/archives/2025/03/page/5/index.html","24d01fa32db9c67933553b83391b4eb7"],["/archives/2025/03/page/6/index.html","f7e9506ab5888855ed853ed87ee1b990"],["/archives/2025/04/index.html","df6b3520de4f9e05ec85b2ae16f63abe"],["/archives/2025/04/page/2/index.html","8e5d73969c5a33a5fe78e7f56e94cdc9"],["/archives/2025/04/page/3/index.html","d9af912a4c169e7407d684cda3af45d6"],["/archives/2025/05/index.html","03fe587c9ea417893349176b31b49617"],["/archives/2025/06/index.html","df436032ce5ebc5c1a3e887810ad16d7"],["/archives/2025/index.html","fd9942344a08674e34f5c4cf371c05b6"],["/archives/2025/page/10/index.html","f20085565cf3b386893f0ddf02281ef8"],["/archives/2025/page/11/index.html","8dc042a13143ab82e0e4a1908166dad8"],["/archives/2025/page/12/index.html","337e1cfab7686d1d97060f9cf1c199d1"],["/archives/2025/page/13/index.html","01d1482f76c53d3c141af8842a8665d1"],["/archives/2025/page/14/index.html","f374d3a78c4a7486d614676aee31d15a"],["/archives/2025/page/15/index.html","f611fc49d2dcbb4eb582823032fbafbb"],["/archives/2025/page/2/index.html","4fba30c3ec3bb18d4eae234f77f130ef"],["/archives/2025/page/3/index.html","0183aed8cf7c61dfd8b77ba082bb12fc"],["/archives/2025/page/4/index.html","9ee52e17fdd3915d8ded6e90d7d03426"],["/archives/2025/page/5/index.html","8bb2b4333566bb38f087ce3cf126ef2c"],["/archives/2025/page/6/index.html","7033b995f4e3c8f05ae6f289c39ce045"],["/archives/2025/page/7/index.html","66e28c023a33fb90ec2f11cbb4e3d33c"],["/archives/2025/page/8/index.html","eaf1c3e68f7e5d03fac42d8787879587"],["/archives/2025/page/9/index.html","1af36120fd520d75b1c1df5984128c00"],["/archives/2026/02/index.html","46ddcc285722b0855ccc862570742f6b"],["/archives/2026/index.html","453a53586795fd74dbd39d27db1c9518"],["/archives/2825/04/index.html","17da27759ae61425d6e72147bebb8f6e"],["/archives/2825/index.html","6905f6a425cf0208d1787eb6a9ac1769"],["/archives/2925/01/index.html","518a95eed7bbdd2b7a1105ff48124929"],["/archives/2925/index.html","108eaf457fe03911297ca17169e5befc"],["/archives/index.html","630eb703daca07136003a75cf48401fe"],["/archives/page/10/index.html","9c0354cdc2dc69c74d588ff0ffae826d"],["/archives/page/11/index.html","5cb2a243de5e82b35223afa885b74b6e"],["/archives/page/12/index.html","34b90c11780db78ed0a5d87030417f7d"],["/archives/page/13/index.html","8b6339991250f3bb8788b204688a3a70"],["/archives/page/14/index.html","803dbe8e434df676ae09c4d38b9c86fd"],["/archives/page/15/index.html","3ba670fa189fa2894bfbab6f1ee0e3de"],["/archives/page/2/index.html","e195fe5f3499d8013702c265ff77a4af"],["/archives/page/3/index.html","932dec2eedbd61e40d9098160b755956"],["/archives/page/4/index.html","a026ecb36d43888830796d4c2483300b"],["/archives/page/5/index.html","8f7efb0d6cdd5e8219c033a83a10b685"],["/archives/page/6/index.html","8e4e1dbaa30cb8df2b86998e7dd44c60"],["/archives/page/7/index.html","c115166c90f128d6a72487dca73bee03"],["/archives/page/8/index.html","dcd773379267f2c5e36602e60d0862c0"],["/archives/page/9/index.html","324527897e0909db3bfcddec4afa3c29"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","e3e7fa7bb548e3df527fbf08aac30877"],["/categories/galgame/page/2/index.html","7418e343dd1f56b19bfdc57d282fb921"],["/categories/公告/index.html","8ac21d9680543c4df3953769ee8b1fa4"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","39d97f37b68bc5d3909bef7672a6ec71"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","479656fcdb8fd302f87f67d8a460e43c"],["/page/10/index.html","793d86dd256565a9abcc91dfe9df2574"],["/page/11/index.html","0c8502554519de3c8a797fa968c9ee0b"],["/page/12/index.html","3925db0ce5308228824ad58f973e9d74"],["/page/13/index.html","8b86742358d6957b6feeafe3f5c839bf"],["/page/14/index.html","13243715bab96ed242dacb74f2ff2cc5"],["/page/15/index.html","c6d0b67285d04d4a817f011f485e4216"],["/page/2/index.html","7f72e49438e69b85124c7740d41b6814"],["/page/3/index.html","a9817f3c74047b6a3e0283a913607cb1"],["/page/4/index.html","ac1a342521a4cff46f23c7be6823a524"],["/page/5/index.html","178a2ef31d49b0d7d3dd83d2fbb4e55a"],["/page/6/index.html","c3c6f0e6fb49dc6dc45781b9fb9cefb4"],["/page/7/index.html","194ac999eee3108118fccf3821e7a7f8"],["/page/8/index.html","42498e5241149687d92457a52914a6f5"],["/page/9/index.html","2772e0b1af9941936aedc3b239ef5a97"],["/posts/10c9dd98.html","fef53fe68e58efb8ef5c9a51c98f7891"],["/posts/1295b569.html","3c01b1cd17dd01444be174bb66442dbb"],["/posts/1370342.html","9469cd40fcb7d5c30293259a5ee38e32"],["/posts/15ef14c2.html","d180fce6b7e59108b05f8b57771de9c9"],["/posts/15f3959d.html","2ae64e001b5d4d1f554dbe1ef3c6e759"],["/posts/18ab785d.html","1fd3f02c62c28b57276d9ef515f7c08c"],["/posts/1d59b71f.html","05a89d601651a72a3bd33c9b516e4d5a"],["/posts/20b3f3a4.html","a01782b92d1a3a823b76e26d92e05148"],["/posts/244daa7a.html","f4de0fb11fbcc7ffdb4e368bee7394cd"],["/posts/245f1c7d.html","f1f76fd4d0ea8fc6db07362bf5173426"],["/posts/252658f.html","80283a9dba9cc879ad000ac7957a8b91"],["/posts/28397adc.html","a6b3383b4aeef31774d5231164c056c5"],["/posts/2ad07f54.html","231279fe82cdc0499b594aa514b383f9"],["/posts/2b38bce0.html","933eb37959a3d9f9ef5b74b8063d8a78"],["/posts/2c0a6836.html","822616dbd13225aa8913b8c71dd5fe3a"],["/posts/2ce39bcc.html","a783359777803692f90fd77ff806cbe1"],["/posts/2cf620f0.html","3e92500f0820bc1bbef8e4c23bfdee90"],["/posts/2e30fd6d.html","a8341c4b7802da37a3a619999b8d37b2"],["/posts/30a413ad.html","af630dcad66e57b2990801203d04f832"],["/posts/34292736.html","ff442b807e04c551f2920b2fa0c1c2db"],["/posts/3468cbe.html","1caf98cb6c64ad4936ba6b4b5f63c33b"],["/posts/39176dc0.html","1d60ed7f57f462ea6f73640fb75891a9"],["/posts/3be6a165.html","204d12b39dc60e2157ea3fec76e79cb5"],["/posts/3daf73b4.html","93a9d53b8d562f8b14635e87f631b318"],["/posts/3e118dbf.html","ceb6e61bf430dbb2e0c3489e99212c03"],["/posts/3f7d823a.html","03eb6d60d59f1081be1520b6025085ed"],["/posts/3f978819.html","d69bcc1bb2d3d02144ee349c702b1c3f"],["/posts/41dac80e.html","32a9fd1ed2a775cb7c299e03f66ae8e7"],["/posts/43945723.html","b930ca1158ffd05d6f25df339a2270f3"],["/posts/44124a6b.html","908fd3d71137b1e7e7480b819938cc14"],["/posts/476a3006.html","dff99a57885daeb9d767eb48904e25bb"],["/posts/47abb61d.html","3cc02db86c97487b43c1a4ffe6c67d5f"],["/posts/4996478a.html","cb95f3a74f6461bfd55b8eb86aadbc4f"],["/posts/4b689be3.html","a201c8b24a77ab211dbc03f0859f3080"],["/posts/4cf8423f.html","5acd0c0a8365098e6938158284415e2c"],["/posts/4dcf85c.html","628a478548160e2c43dfa3431e95f3a3"],["/posts/500cd322.html","5ab7c5de26ec603e67a8c44b4607f38d"],["/posts/51c9b1ff.html","6f7c0c27e9697c0c7521f33d91029d7a"],["/posts/51ce68e8.html","44f8d458bd604893de2d8dbc0cca0d2b"],["/posts/52b5b3c6.html","91e0264e6aaa1d792f98fa4da4e72cca"],["/posts/54f496ad.html","84950fcb13a693983d7b237e3422756b"],["/posts/558e1f30.html","369b2a971a0d6669cbb4627bfef26238"],["/posts/5d8bea92.html","1d509607fa4d92c1ddd5e19522e72260"],["/posts/5f6e0c59.html","8ac98ea5d8c283af8f09a3870e7a0f8c"],["/posts/61a63a84.html","f01c49f5b062426f51e8a0eff78baeb4"],["/posts/625ab7bf.html","c2d7812a57474930cffd4be7071a0771"],["/posts/6336a2f9.html","5c20dd4d412a57205edaad7b419be8d0"],["/posts/6432d61a.html","a740cedaf65cb52979a8aacac3b96686"],["/posts/6515f032.html","976beedc2aa08e00d4dec71402d39a09"],["/posts/6720ccdd.html","6c4c6aa3f6b5ad34afa6c865395b4c86"],["/posts/6a4b5ac8.html","eb428620bf92e846cf71f2e9326a0f7d"],["/posts/6aa4177c.html","1e7ca77211268331d93e92c7ecea8409"],["/posts/6b15f81f.html","b1a49c2a1b22fb439373fb9e8dd681da"],["/posts/71131d34.html","25d0a6fbd1f555aefa23166c2ecaab46"],["/posts/742fd48d.html","48b931f62a6b0a42a14304463915ca8a"],["/posts/78a8a8d3.html","068d95b6318cb9b3f93e2d5f5b3d4bd1"],["/posts/7a5ef3d0.html","15248eb2169d5e46213f9244e9ec4035"],["/posts/7b41e1ac.html","221972c5538d0c83c8a14ef9f11a0a3f"],["/posts/7b51011d.html","5a207d7d73274405d797ad1ee4b90e1f"],["/posts/7e3aa3e2.html","3150f558540d6ddb02cae6108ed579d5"],["/posts/80fe2691.html","00da61a1c705c10504d7ef5c3068b0d9"],["/posts/81ac52e9.html","0a2a38258449bb48dde2e12575993d7f"],["/posts/82332d11.html","07f66e6377bd64a83a7d8cbc029ebd46"],["/posts/8486f6f9.html","0c4d061c12c48f1342c970cda16a1e26"],["/posts/849b40f8.html","1aeec782009088376345e0aa1c33e11a"],["/posts/85c51d68.html","60e5859a4d1c38ec736cbf7037b980c2"],["/posts/86a6c500.html","ea8141dcdc824a59d9dd5e552a26f174"],["/posts/886f8d3.html","71433926ae3a76e7a0d66bc9d180800f"],["/posts/8a7cba10.html","78e4473df84d585a8529f597e49df32f"],["/posts/8ac11b41.html","3d354e72974bb0fb472d4621fc85d980"],["/posts/8c3f2fd8.html","10c51bebbf15dfd082e085c5260c64b4"],["/posts/8dd520d9.html","01c31ece81f0e92bd0427cb813fca11c"],["/posts/8f555654.html","4c899fb1cb043a5f24e439efc4ddb7d7"],["/posts/92a980c2.html","b33979fc9e9e2f09aa12922535590f44"],["/posts/92ce16.html","a235c245398fb13affdd0091f9fc72f0"],["/posts/93e9943b.html","f216807089b9b4d2b77b7c1ac1329051"],["/posts/94d3c794.html","ca5391f1b6fdd8e10786ff79c8ddb4cb"],["/posts/9606c2fe.html","6c073ed0b0c9aafa3a7212837785c77b"],["/posts/96b281f2.html","8806a5314145014382e9b146106a8543"],["/posts/97f50eea.html","1f85d4c101c1318462377e74dfcf0500"],["/posts/97fca8be.html","43df039af79a4493f64b38b8ed83c69c"],["/posts/98662d05.html","ec8ae91f9d875b7b6e6edce4c3367719"],["/posts/98ef47c3.html","64f9a517314a38a89153f6a67364743d"],["/posts/9a2f6162.html","0fe6c8377935267e57c340a2424e0b35"],["/posts/9b22a48d.html","9d2cf261ab94e6ba2196df287c69e87d"],["/posts/9cb455b1.html","b9a443a72070a6f99037ae52678d8159"],["/posts/9ecdeecc.html","6a7157d6f9a96ad0cab9b02e6c292748"],["/posts/9efd7701.html","092feec8528a80bb4e209f17cee6a904"],["/posts/9f61c1a0.html","c493325423ed397b1f75a47b4d81a2d5"],["/posts/a1de710.html","30ca4440db439f299523f7c34464948e"],["/posts/a30eb0cd.html","7685a080f565cad045a0b8c91489bfb4"],["/posts/a72f71c2.html","9a9e78d3360001d67c79de55043e0e8e"],["/posts/a7634b5d.html","0f0a4fb063cbaf5e0b99a5535fc9fcfd"],["/posts/a8c593b5.html","7f26a3f27524212c3f333a5304bdaced"],["/posts/ad0c1efa.html","88131e4f7aeb83ab0ee3fa12c50ef9e3"],["/posts/ada3f440.html","694da5acadf866afe2cb20c4aeb25682"],["/posts/af1807ef.html","ecf4b3c5fd557d70951a98bc9d03729b"],["/posts/b397bf03.html","12dd8dbf2c8f1d08a07feb2eaca12b93"],["/posts/b497b647.html","ca7ce11efd03769229b8ba565af2dfc6"],["/posts/b4d464b0.html","f62dbc9e20785a720befaef8f4ac50b7"],["/posts/b5fb773f.html","a707876ee11329dfc4eeb066d3955c66"],["/posts/b8d46b32.html","3bb76f2ed0417e35dda855be7c0fad79"],["/posts/c1b2c6c9.html","4bf910f7e5cc079e6ce614b6c5f27252"],["/posts/c2111cbf.html","8fe9e394c9789b341e280cb522380688"],["/posts/c316c2e8.html","c484dd1daaa17fbcd3af9005acbba87c"],["/posts/c43e60b5.html","624a92688f30e6696789a1e26da1f416"],["/posts/c497a412.html","bfa0b5554c93d50d4ce3ebad1d77c6e9"],["/posts/c5395ba3.html","e284d865fa3364788c8394179477a863"],["/posts/c5de299a.html","286560d1497f46bf190610316fa8c4ed"],["/posts/c70bba9c.html","81a1d7425809047a84eb57199d6e6f79"],["/posts/c797535e.html","da62bcbeac91e9809a59e59e0527d258"],["/posts/c7a62c79.html","23923936deacf0b11ccddd8dfd41f42f"],["/posts/cae2c959.html","a61c040715f74121cd221681d0b5e324"],["/posts/cbebef2b.html","ee77a9c5650dfbd14a126287f66e0bec"],["/posts/cc4c0017.html","44cc074f35c4e5c68f4bd1b54a81cf95"],["/posts/ce25023e.html","a33aa6298441c6026a5ab7522c9c9942"],["/posts/d2fd4837.html","d23565813594a47fb3307e693e6ce8f6"],["/posts/d3233cbb.html","1066138c6131e85c5f37d7439fa5c064"],["/posts/d3a745a8.html","c7c9cf3f535cc01a570fa520bd355fa3"],["/posts/d7e940d2.html","834f8a29acec639e4f94880f5758cc49"],["/posts/dc815d5.html","d3f90d7fe51f3c494df89903b5b2602a"],["/posts/de25b0be.html","fb78c052ab08522f6d9eccd709b9a136"],["/posts/e2623b4e.html","a764b867cf802d6dacdd35d54fc4c6e6"],["/posts/e3ab6ad8.html","ece28b368d099de3ac8b451c0da81ec6"],["/posts/e5018da6.html","09585f38b510f683d375eb2c0fa2ca51"],["/posts/e5963272.html","f00a6e32f73444ce02bec0c0cce491db"],["/posts/e5ef4c3c.html","3fb8ef413ddbb43e163ab482d310c86e"],["/posts/e624b065.html","9f097266688f09c92838f3f9e63d337d"],["/posts/e7c703bb.html","31f44ccea9a9cc8419dbeffc73ca269b"],["/posts/e8f14b6c.html","5d1b59e96e6af5e19abb78ccb30837d5"],["/posts/e91abb63.html","3214a53af980bfe4c2a2776e8e6bfb46"],["/posts/ea9a8808.html","0718007e54a709bdbabd9281dc4414d8"],["/posts/eb784749.html","6716f62faff469548f77643dc103f215"],["/posts/ebaf2232.html","dac38fa1aa5d26ae3ed4945f1f0213a7"],["/posts/ed75f185.html","9079fd342ba38c6d7da77f833fa15055"],["/posts/ee1ed673.html","cad617c92e20bff252b2b3bd3c47e345"],["/posts/f0c3ed61.html","c9f1c4c29400affea9213e40edeaac10"],["/posts/f151ff43.html","7347a699cfa38690236951aab3968d19"],["/posts/f21e7f84.html","f606d5c186c77db58078bdc930d75c59"],["/posts/f230b0fd.html","c3e28753223f95f6ced88cb173b4bbff"],["/posts/f28a7877.html","2509e2d53d8bf3175194e5fc92a739a2"],["/posts/f663d5cc.html","ccbe7c1ee1832a321d651032c23c839b"],["/posts/f730ad18.html","ae580804baa21ad123c11320758ebfd5"],["/posts/fb5d4608.html","a85048940bd9ce8fd19ac40dbaa0f5ff"],["/posts/fc04d0d4.html","b00401d201ff8dc88f2be1528e649f3d"],["/posts/fc455f81.html","e2a4f61ba46d262532d99129116ed85d"],["/sumire/index.html","1507845683d8faf0411d90970ec99b28"],["/sw-register.js","c66cd9d85931de2ed031179b6b5f36b9"],["/tags/AKo/index.html","a21976d5a0d41cc6e56bb97e55b26af1"],["/tags/APPLE-project/index.html","4d9406e566b3ac5622c01ab102456bf0"],["/tags/Ankrache/index.html","843a2a38d3057f5bf6c48542e0515e5e"],["/tags/BELL-DA/index.html","045437c5ab95b4dd81d8a421b1694cd3"],["/tags/BL-Game/index.html","209016e233e15828ef1aebec82a1a978"],["/tags/Blue-Dahlia-Digital-Creators/index.html","42797c0335d7590b6d5e92bb0bf1744c"],["/tags/Blue-Line-Games/index.html","7c1596a71cbd1d8c6628efd326734916"],["/tags/CD/index.html","99d803dfd9baa1168da725a72e2135f6"],["/tags/CHUNSOFT/index.html","ed6d2fdbaa3686798d8048644b3c8e17"],["/tags/Check＆Stripe/index.html","55a95a49384ccc5e80f8d44aef59d61d"],["/tags/Cherry-Pie/index.html","df0ff2247045d83577545abbc785dc37"],["/tags/Circle-Mebius/index.html","1e6e774ee577b0f3fee46daf37729f19"],["/tags/Cosmillica/index.html","add6084e07c7e5a9948efc219d0de78d"],["/tags/CresCENT-BLANK/index.html","852f4e45728f8426c0f7bf7a53dcef39"],["/tags/Dopamine-Software/index.html","af50ea527a66c08cf3521cafefe712af"],["/tags/Dos/index.html","91f338eede7a7f0baf94e3c64c1e7ccf"],["/tags/Earth-Well/index.html","591778b693e5d9a7eab499a9aedfbd08"],["/tags/Forest/index.html","c247895381a50e707cb30adaa148eb25"],["/tags/HaccaWorks/index.html","32c136e58ceddf3bbb3e401d997cc853"],["/tags/Kanon/index.html","30a15257c736026f6ec7ddba52f923da"],["/tags/MANATSU-8/index.html","d6a2274b9f4b617fee9614ebf16ca8bb"],["/tags/MARINE/index.html","709f7f8545e32c05b7a182ae98fc17dc"],["/tags/MIO/index.html","f7e5b1c70e39547a66b8454a08790c14"],["/tags/NAOX/index.html","792972dd5a2d6c48baddcceabe07cd90"],["/tags/Namikaze-no-Uta/index.html","47b81bd4e9cd626908646176f9ccfec3"],["/tags/Nmyu/index.html","e59235517fdca4db18aa0c2fb9a7581b"],["/tags/O-S-I/index.html","b8084d9921d4c64be61c6d4090b395f6"],["/tags/Omegaの視界/index.html","6c579c906686ce46274c22470a6261e5"],["/tags/P-o-l-c/index.html","fd659b2e77f83b63efa797a10fb325d3"],["/tags/PC88/index.html","424024552d979a63cd9519bdbb323e56"],["/tags/PC98/index.html","3a5cf4292f3565ad9a7765de5e88099a"],["/tags/Perpetual-Room/index.html","a90b1dc2c843f702ccb12260003b339e"],["/tags/Pleiades-Company/index.html","c0a9f74e1aa9935d56543984340d884d"],["/tags/Project-Twintail/index.html","855c251731ed217eae12d998eedfc6a4"],["/tags/RIFF-RAFF/index.html","856dcaf9d396c3816200a2b496103dc7"],["/tags/RPG/index.html","376c129ffaad6b4f4089b44347540d04"],["/tags/RPG2000/index.html","8398d00461ac49a5c3459089b89a5925"],["/tags/Reverv/index.html","007607983572d75fb43870df734649c4"],["/tags/SENTIVE/index.html","5e4ef23357b4df15c057b01345652979"],["/tags/Saihate-SOFT/index.html","4f70856ba90f57107f2c76a3ceaa1ec0"],["/tags/Scrubbing/index.html","947e06e97b2d544f224423189a663805"],["/tags/Sky-On-R-imaginAtion/index.html","8a15638e61c5194ac2b4e8343ba23645"],["/tags/StrayMoon/index.html","0931c11a5a4309c591ce050335dddc03"],["/tags/Studio-Bu-Sa/index.html","5b8723e70636b4186ddb8f085238671b"],["/tags/TRANSPARENCY/index.html","977beb079f43649b037d6fc6f990e957"],["/tags/TRANSPARENT/index.html","6e04113b0ee4cc9c764937623adb1e84"],["/tags/ToHeart/index.html","a52e178729fa57a9a5c96f9fb2668703"],["/tags/Traumend/index.html","0d82265b5ec61949c4694de2f78b7b81"],["/tags/Witch/index.html","bbb719b16d47b764f61223b7c3d8afa2"],["/tags/adonis-project/index.html","3378bc91db9bc01658e03b77ab3544fe"],["/tags/capriccio-suite/index.html","aab62e5a7b6ba4525097596c1579499a"],["/tags/flash/index.html","82ae36d80b7ae6c417c62a6cb777bbc7"],["/tags/galgame/index.html","83109022c125de68ea8d77c407ef11c4"],["/tags/galgame/page/2/index.html","2d96fd3f9be0852396d0ddd2aa359dbe"],["/tags/gal资源/index.html","3035001c12239a7e4dae38b80f623a6d"],["/tags/gal资源/page/2/index.html","93c799a1ca5a8a7336f97922d1a7018c"],["/tags/gal资源/page/3/index.html","2cc73793e6e87cd85585745bac166da1"],["/tags/index.html","bb8bba53f2574adc134d14085237d56b"],["/tags/m-kz/index.html","c677d1d0e77a2be4e499e176f31baae6"],["/tags/purgatory/index.html","d7b16fa34a66ff0f938a1771d79cabc4"],["/tags/rkr/index.html","7038a66a3146c870345038477f953872"],["/tags/team-eye-mask/index.html","1e248829f6c1bf9f68fc509ca32f10f2"],["/tags/ありすくろいつ/index.html","e99db96952def0693fa1fc71f5fa87c7"],["/tags/いつものところ/index.html","8bfe576e6c5f03234816bfa610ac421e"],["/tags/きつねみみ饅頭/index.html","f05e0ad913274dbc25fe7f9409a6fcc5"],["/tags/ねこねこソフト/index.html","8ee0aa970cbdaa9e5509cbe1a1db74df"],["/tags/ねこバナナ/index.html","fcc42bc0a2ad002b71c597530b8b2c1a"],["/tags/はちみつくまさん/index.html","faf998cd49e60659c1bf577821bd4678"],["/tags/ろりちせ/index.html","3c64d241d344fa27886c768e9be62e5c"],["/tags/アイル【チーム・TATU】/index.html","a41bd931ecb087d6353e540e372f4c40"],["/tags/アークシステムワークス/index.html","0f967ff3488909ce49f68983f9dfa622"],["/tags/ブロッコリー/index.html","1971a040f3ae60a8522933a533e79922"],["/tags/乙女/index.html","8e2671b6a284e903d97999e4312aa22f"],["/tags/乙游/index.html","2034034f9b37b952be1e71b0686b6554"],["/tags/停产/index.html","9309ecc552e8e2f875a6e6a82be95b5a"],["/tags/公告/index.html","d58184f3f48e339ac8b428502d7db610"],["/tags/同人/index.html","70aa468936d45de9ace145cd88a3b9b6"],["/tags/堀井雄二/index.html","a84f1db2cc8dd1dee9fee126e8503220"],["/tags/外海なおき/index.html","8dd0bd80fdb9dac8078dd1ab2a846202"],["/tags/大熊猫/index.html","ee6c1f4f96fb02cf5b45cd9c4ffb7e65"],["/tags/女性向/index.html","89e1c2567ae5f19efb9adf07c1ddf6fb"],["/tags/安装/index.html","67ff1c7c955d045f2b5bbde47f008347"],["/tags/御茶ノ水電子製作所/index.html","b834c32163998e2fb8428a2a79df5b29"],["/tags/月の水/index.html","bf4ae8976a4b360d66e87762bd61fdc8"],["/tags/桃野衿/index.html","0350df7a46815ec961f193ac0e5ef667"],["/tags/機械式少女/index.html","1bac7eb747864dbd25a9656ad5b5a6ad"],["/tags/水仙/index.html","57605e11476519c9dbbe786094386b20"],["/tags/汉化/index.html","7c3082870136dc9e5608df50acbfb365"],["/tags/熊月温泉/index.html","dac241e59ff4e76160f4e46cdbbb76a0"],["/tags/片冈智/index.html","209d6cc906a2cd1d32c0b546ca05a5e2"],["/tags/片岡とも/index.html","e1195e50033eddb17d1a6ba2614a1e62"],["/tags/牙の刻印制作委員会/index.html","ab1e5ada6c015077e64a258100f632c5"],["/tags/牛カルビ定食-FLAT/index.html","f773148070e5ad707788a8070ecd78e4"],["/tags/牧尾屋/index.html","9270d67c692e1ccc513355bf95df080d"],["/tags/犬茶屋/index.html","2b74d50580abd7e915778b0721bd4e26"],["/tags/猫猫社/index.html","8154accdf2f739872b693cbd3d38714c"],["/tags/王宮魔法劇団/index.html","f3da3f38c6309b725701cfa81f7d3a7f"],["/tags/画集/index.html","5ba2a9664059a7bce84d188a2544c6ce"],["/tags/索引/index.html","f60c8e63c626a90f0091fc0d4ea3b443"],["/tags/缺失/index.html","26fe9cb85e6a7c6da3738a56872e68f7"],["/tags/自购/index.html","c163933ebd2026f566c18ce92f2a6b18"],["/tags/茶葉☆姫/index.html","f7cb51df295987326ea10ff50886f789"],["/tags/郷愁花屋/index.html","1cb451bf49c936845d18e80fbf711650"],["/tags/閂夜明/index.html","8eac704e64c84f918460937d40eec348"],["/tags/音乐美/index.html","b7d7c2d4540896902b7f7eecbf605dda"],["/tags/黒†救/index.html","3f9c4487137d3d0b3e680a8e5ca1393d"],["/tags/黒百合っ子大集合/index.html","4bb47cd4c6295ce9520b8f025259ad92"]];
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
