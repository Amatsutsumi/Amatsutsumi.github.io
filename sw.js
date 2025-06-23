/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e29c85c8dd5cf1522e3ea79a8d12462e"],["/archives/2024/04/index.html","df897c611127491bcb1eda45ebbe51e0"],["/archives/2024/index.html","0a5ee63efe41ca2c7e9a20cacbbfabb0"],["/archives/2025/02/index.html","35b74e977180df3d7183a33d6618b6db"],["/archives/2025/02/page/2/index.html","55638d2f3f22791f0e5721d210c8b422"],["/archives/2025/02/page/3/index.html","f7cbc58868d78eee0a17a4805401e8f2"],["/archives/2025/02/page/4/index.html","d13e0a8f77d0232f146c2625445f7fbc"],["/archives/2025/02/page/5/index.html","07c79ad3525208b08439a8a0ebd416d9"],["/archives/2025/03/index.html","2d8d1a7abcc59629562a6955c9b181a5"],["/archives/2025/03/page/2/index.html","5561b29b0e97cea84a518c7c9ec45a6a"],["/archives/2025/03/page/3/index.html","a15488278bf9ff781b14c9e17d2d798e"],["/archives/2025/03/page/4/index.html","21b1c2127ec4197d698a94cf41d0482d"],["/archives/2025/03/page/5/index.html","8c9fa94c370341fa69ac32e5e32130a7"],["/archives/2025/03/page/6/index.html","1797f5f2ac25485d7cf590e47ca27353"],["/archives/2025/04/index.html","fe3cc14c0af0f676d92ddca85c8b0ec3"],["/archives/2025/04/page/2/index.html","6c58b27db858c81e59384b85df95f697"],["/archives/2025/04/page/3/index.html","afcbdf0ff8c687d501c4de6d17d6fbff"],["/archives/2025/05/index.html","b5f988ac6153a3c841cc90079cad7abf"],["/archives/2025/06/index.html","33a04e63076153e82470825bc8de6f72"],["/archives/2025/index.html","94f2239840c7b4d0367e24d4942ba63f"],["/archives/2025/page/10/index.html","4940ac721b3a6a9bd0383db92eb53792"],["/archives/2025/page/11/index.html","c95d351a3580c95eb3094ba99f93deb9"],["/archives/2025/page/12/index.html","0066de1ecf7e1191a4ad8c060b5e5729"],["/archives/2025/page/13/index.html","e67478606b185467480a334c5688b5d0"],["/archives/2025/page/14/index.html","3b60e78ec8e4b2dd87c8b3fe0e797969"],["/archives/2025/page/15/index.html","f6de63504906bf7024ea7a5c417a80b7"],["/archives/2025/page/2/index.html","302579cf2549be1cd9f03af401c522a3"],["/archives/2025/page/3/index.html","97513a376cd39d6aeb5583a63b7cec38"],["/archives/2025/page/4/index.html","6012e57210618be6c118fb4a254dd099"],["/archives/2025/page/5/index.html","86ba70d852d10c20547292f4ab158e07"],["/archives/2025/page/6/index.html","9a2a97d2219d176d3b6c7dd932732cd9"],["/archives/2025/page/7/index.html","f4128d3569b20b3223034db71dcf75db"],["/archives/2025/page/8/index.html","1e9df45b3db51e2548ad41752e93bd92"],["/archives/2025/page/9/index.html","b178237a2818a383e0663975a4d54e5d"],["/archives/2026/02/index.html","d800f98d47b1fa2bedbb88bfa5781a17"],["/archives/2026/index.html","80058a05be6910a16e1734a173f6ae7e"],["/archives/2825/04/index.html","943dedf1adb4515efb0a156482747ca0"],["/archives/2825/index.html","682ddcd997975fa769ab430a06158407"],["/archives/2925/01/index.html","600c3c2b15430b17ee4014a48321b1ee"],["/archives/2925/index.html","3a1d716af91382c0c0672863149700b2"],["/archives/index.html","3187bb003100fa8460ad4a26dfe28cc1"],["/archives/page/10/index.html","834b2aed91387c71b713d2206589a3fb"],["/archives/page/11/index.html","4be94e517fcf5ce6b5cb55d2cc2019b5"],["/archives/page/12/index.html","c8f1fddd16d9036c0038f492e5b56126"],["/archives/page/13/index.html","f80b538473864301d5131747c71bdf9b"],["/archives/page/14/index.html","248c1f9607a23b847a29237d0f4e41a2"],["/archives/page/15/index.html","a43604d599196c63d72ec962a87d6bf9"],["/archives/page/2/index.html","c3597af077ecda4b9ccb8ab29053afa2"],["/archives/page/3/index.html","aba9710d2da268f21eb0f11599540dde"],["/archives/page/4/index.html","9463863edf40c0b6de749148cb7d5295"],["/archives/page/5/index.html","2c39f19ab46832d3e4f315bebf0e776d"],["/archives/page/6/index.html","cb54879e579e679c14c0e3a145b14888"],["/archives/page/7/index.html","c9bd91c43098f03a84a69f92bc2df606"],["/archives/page/8/index.html","120b93d28aab522a2c8f29742936bd0a"],["/archives/page/9/index.html","461ef23d14be020539d59c8685b9fa77"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","30bd42f433ac6f1548a4b48337691a0c"],["/categories/galgame/page/2/index.html","a2c5c9949a48cad091921b952e01fd75"],["/categories/公告/index.html","13db4c754a4c9b0c3a54ae939191ab19"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","755f69952f3e17b2e6a7114f5585912b"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","40f27e785a333ad67e058c78bf47176f"],["/page/10/index.html","4bca01ef9592a331a03b783df703c316"],["/page/11/index.html","b01ce807885fe541f436d186633a3d8d"],["/page/12/index.html","1f74d97eb3d7dc763fbcf586ec490ef0"],["/page/13/index.html","e20317eb9eebd837224c90adf62d6df2"],["/page/14/index.html","3d2643dbd23f7e19cbe77ca2eaa000b9"],["/page/15/index.html","dfd3d00a90283af02b08eb15f8b3c503"],["/page/2/index.html","5e896df0a2e86274b57091cb551668cb"],["/page/3/index.html","ca34e59e13d0869bef0b3552e84b430b"],["/page/4/index.html","f636613513e0658691d4a3c76df4722d"],["/page/5/index.html","3e3c8cbe95c777b12fb94381aa7cf416"],["/page/6/index.html","07d9c37d4eb5e3e3a17bf4e1750bed43"],["/page/7/index.html","e632069694a28add81961c9a5edd5cda"],["/page/8/index.html","7c7168bb5d0ffe9c0967f7ec698c1c5b"],["/page/9/index.html","29248d29675efa69dff9cf5a6f1c3798"],["/posts/10c9dd98.html","cfe6677ebe06c52af5e0f8545a18cd1f"],["/posts/1295b569.html","3c01b1cd17dd01444be174bb66442dbb"],["/posts/1370342.html","9469cd40fcb7d5c30293259a5ee38e32"],["/posts/15ef14c2.html","d180fce6b7e59108b05f8b57771de9c9"],["/posts/15f3959d.html","2ae64e001b5d4d1f554dbe1ef3c6e759"],["/posts/18ab785d.html","1fd3f02c62c28b57276d9ef515f7c08c"],["/posts/1d59b71f.html","5d29cc9fd41c4e45b79eba5951041edb"],["/posts/20b3f3a4.html","eb31eb37c2ec1acf0165a187c4696ef9"],["/posts/244daa7a.html","f4de0fb11fbcc7ffdb4e368bee7394cd"],["/posts/245f1c7d.html","f1f76fd4d0ea8fc6db07362bf5173426"],["/posts/252658f.html","80283a9dba9cc879ad000ac7957a8b91"],["/posts/28397adc.html","a6b3383b4aeef31774d5231164c056c5"],["/posts/2ad07f54.html","231279fe82cdc0499b594aa514b383f9"],["/posts/2b38bce0.html","933eb37959a3d9f9ef5b74b8063d8a78"],["/posts/2c0a6836.html","822616dbd13225aa8913b8c71dd5fe3a"],["/posts/2ce39bcc.html","a783359777803692f90fd77ff806cbe1"],["/posts/2cf620f0.html","2e2c1355e6f83028ca6998761a883240"],["/posts/2e30fd6d.html","a8341c4b7802da37a3a619999b8d37b2"],["/posts/30a413ad.html","af630dcad66e57b2990801203d04f832"],["/posts/34292736.html","ff442b807e04c551f2920b2fa0c1c2db"],["/posts/3468cbe.html","1caf98cb6c64ad4936ba6b4b5f63c33b"],["/posts/39176dc0.html","1d60ed7f57f462ea6f73640fb75891a9"],["/posts/3be6a165.html","204d12b39dc60e2157ea3fec76e79cb5"],["/posts/3daf73b4.html","93a9d53b8d562f8b14635e87f631b318"],["/posts/3e118dbf.html","ceb6e61bf430dbb2e0c3489e99212c03"],["/posts/3f7d823a.html","03eb6d60d59f1081be1520b6025085ed"],["/posts/3f978819.html","d69bcc1bb2d3d02144ee349c702b1c3f"],["/posts/41dac80e.html","32a9fd1ed2a775cb7c299e03f66ae8e7"],["/posts/43945723.html","b930ca1158ffd05d6f25df339a2270f3"],["/posts/44124a6b.html","908fd3d71137b1e7e7480b819938cc14"],["/posts/476a3006.html","dff99a57885daeb9d767eb48904e25bb"],["/posts/47abb61d.html","3cc02db86c97487b43c1a4ffe6c67d5f"],["/posts/4996478a.html","cb95f3a74f6461bfd55b8eb86aadbc4f"],["/posts/4b689be3.html","a201c8b24a77ab211dbc03f0859f3080"],["/posts/4cf8423f.html","5acd0c0a8365098e6938158284415e2c"],["/posts/4dcf85c.html","05c1168fcd51e39aa5fcc7d36e021b77"],["/posts/500cd322.html","5ab7c5de26ec603e67a8c44b4607f38d"],["/posts/51c9b1ff.html","6f7c0c27e9697c0c7521f33d91029d7a"],["/posts/51ce68e8.html","44f8d458bd604893de2d8dbc0cca0d2b"],["/posts/52b5b3c6.html","15e546911be3b474868f1f045a0e1383"],["/posts/54f496ad.html","d44d337b321fcef5a6d49ac674d8c669"],["/posts/558e1f30.html","a27cf35d0e87545c75e0588701472ae3"],["/posts/5d8bea92.html","1d509607fa4d92c1ddd5e19522e72260"],["/posts/5f6e0c59.html","8ac98ea5d8c283af8f09a3870e7a0f8c"],["/posts/61a63a84.html","f01c49f5b062426f51e8a0eff78baeb4"],["/posts/625ab7bf.html","c2d7812a57474930cffd4be7071a0771"],["/posts/6336a2f9.html","6a4fce021d632810f83ee78fa35c8c32"],["/posts/6432d61a.html","a740cedaf65cb52979a8aacac3b96686"],["/posts/6515f032.html","06ce92244e7ae34d536105ccc63d0971"],["/posts/6720ccdd.html","537ccdf2aa6c7331c73e8da43c776b91"],["/posts/6a4b5ac8.html","eb428620bf92e846cf71f2e9326a0f7d"],["/posts/6aa4177c.html","1e7ca77211268331d93e92c7ecea8409"],["/posts/6b15f81f.html","b1a49c2a1b22fb439373fb9e8dd681da"],["/posts/71131d34.html","25d0a6fbd1f555aefa23166c2ecaab46"],["/posts/742fd48d.html","f18d497c8daa73f5d4a1b779fd61f0a5"],["/posts/78a8a8d3.html","e963b6a1d0aa82a6e0cc1f04b9ec7ac7"],["/posts/7a5ef3d0.html","15248eb2169d5e46213f9244e9ec4035"],["/posts/7b41e1ac.html","221972c5538d0c83c8a14ef9f11a0a3f"],["/posts/7b51011d.html","5a207d7d73274405d797ad1ee4b90e1f"],["/posts/7e3aa3e2.html","3fa66fcde0fbc0530651aa7cd6461ca5"],["/posts/80fe2691.html","072f1d57447a4460e92edbb7303af1a2"],["/posts/81ac52e9.html","0a2a38258449bb48dde2e12575993d7f"],["/posts/82332d11.html","07f66e6377bd64a83a7d8cbc029ebd46"],["/posts/8486f6f9.html","0c4d061c12c48f1342c970cda16a1e26"],["/posts/849b40f8.html","3412c19272bbaffc3d0c191e5bb1df14"],["/posts/85c51d68.html","60e5859a4d1c38ec736cbf7037b980c2"],["/posts/86a6c500.html","ea8141dcdc824a59d9dd5e552a26f174"],["/posts/886f8d3.html","cae9ea12d2d41bafcc5c54835e1b9683"],["/posts/8a7cba10.html","78e4473df84d585a8529f597e49df32f"],["/posts/8ac11b41.html","3d354e72974bb0fb472d4621fc85d980"],["/posts/8c3f2fd8.html","05134fee68751ef51d8c06496d56c9d8"],["/posts/8dd520d9.html","01c31ece81f0e92bd0427cb813fca11c"],["/posts/8f555654.html","c6a36ffb76c72c619660791951ff2b4c"],["/posts/92a980c2.html","b33979fc9e9e2f09aa12922535590f44"],["/posts/92ce16.html","a235c245398fb13affdd0091f9fc72f0"],["/posts/93e9943b.html","f216807089b9b4d2b77b7c1ac1329051"],["/posts/94d3c794.html","ca5391f1b6fdd8e10786ff79c8ddb4cb"],["/posts/9606c2fe.html","6c073ed0b0c9aafa3a7212837785c77b"],["/posts/96b281f2.html","8806a5314145014382e9b146106a8543"],["/posts/97f50eea.html","1f85d4c101c1318462377e74dfcf0500"],["/posts/97fca8be.html","43df039af79a4493f64b38b8ed83c69c"],["/posts/98662d05.html","8469051810b6caf8f9126f8230222da5"],["/posts/98ef47c3.html","64f9a517314a38a89153f6a67364743d"],["/posts/9a2f6162.html","0fe6c8377935267e57c340a2424e0b35"],["/posts/9b22a48d.html","9d2cf261ab94e6ba2196df287c69e87d"],["/posts/9cb455b1.html","029a4dece794c1b97bcd936b9fbb4855"],["/posts/9ecdeecc.html","6a7157d6f9a96ad0cab9b02e6c292748"],["/posts/9efd7701.html","092feec8528a80bb4e209f17cee6a904"],["/posts/9f61c1a0.html","c493325423ed397b1f75a47b4d81a2d5"],["/posts/a1de710.html","30ca4440db439f299523f7c34464948e"],["/posts/a30eb0cd.html","7685a080f565cad045a0b8c91489bfb4"],["/posts/a72f71c2.html","9a9e78d3360001d67c79de55043e0e8e"],["/posts/a7634b5d.html","0f0a4fb063cbaf5e0b99a5535fc9fcfd"],["/posts/a8c593b5.html","7f26a3f27524212c3f333a5304bdaced"],["/posts/ad0c1efa.html","88131e4f7aeb83ab0ee3fa12c50ef9e3"],["/posts/ada3f440.html","5b7a8da459c253e02239fc4aa43a613c"],["/posts/af1807ef.html","ecf4b3c5fd557d70951a98bc9d03729b"],["/posts/b397bf03.html","12dd8dbf2c8f1d08a07feb2eaca12b93"],["/posts/b497b647.html","bfccdf6fc61aa6d6d3da49a40241f16c"],["/posts/b4d464b0.html","f62dbc9e20785a720befaef8f4ac50b7"],["/posts/b5fb773f.html","29fb03ae9ccce0bce9e219593c4170a6"],["/posts/b8d46b32.html","3bb76f2ed0417e35dda855be7c0fad79"],["/posts/c1b2c6c9.html","4bf910f7e5cc079e6ce614b6c5f27252"],["/posts/c2111cbf.html","8fe9e394c9789b341e280cb522380688"],["/posts/c316c2e8.html","00eec458420816ba08577c57672711c9"],["/posts/c43e60b5.html","624a92688f30e6696789a1e26da1f416"],["/posts/c497a412.html","dd8d2a8fd7833117357504ffe5824e58"],["/posts/c5395ba3.html","e284d865fa3364788c8394179477a863"],["/posts/c5de299a.html","286560d1497f46bf190610316fa8c4ed"],["/posts/c70bba9c.html","81a1d7425809047a84eb57199d6e6f79"],["/posts/c797535e.html","da62bcbeac91e9809a59e59e0527d258"],["/posts/c7a62c79.html","23923936deacf0b11ccddd8dfd41f42f"],["/posts/cae2c959.html","920d1cfa3e4735b0c4b37a369143923c"],["/posts/cbebef2b.html","f704617b57cc9d519e5bfc870850f235"],["/posts/cc4c0017.html","44cc074f35c4e5c68f4bd1b54a81cf95"],["/posts/ce25023e.html","040c98fa9ac8092ae8c45327260db72a"],["/posts/d2fd4837.html","ed760864b825f4e76045793a1f71f43f"],["/posts/d3233cbb.html","1066138c6131e85c5f37d7439fa5c064"],["/posts/d3a745a8.html","21ed003bad459dfa0a7991ab135add4d"],["/posts/d7e940d2.html","834f8a29acec639e4f94880f5758cc49"],["/posts/dc815d5.html","c53e129fe4092c8587066d675d963e5d"],["/posts/de25b0be.html","fb78c052ab08522f6d9eccd709b9a136"],["/posts/e2623b4e.html","a764b867cf802d6dacdd35d54fc4c6e6"],["/posts/e3ab6ad8.html","ece28b368d099de3ac8b451c0da81ec6"],["/posts/e5018da6.html","8bd5e78312b85dad09638cc261d690f0"],["/posts/e5963272.html","f00a6e32f73444ce02bec0c0cce491db"],["/posts/e5ef4c3c.html","3fb8ef413ddbb43e163ab482d310c86e"],["/posts/e624b065.html","b6797c4affc93e9d120cb39ae450ab79"],["/posts/e7c703bb.html","31f44ccea9a9cc8419dbeffc73ca269b"],["/posts/e8f14b6c.html","5d1b59e96e6af5e19abb78ccb30837d5"],["/posts/e91abb63.html","d3516ea028bb864d631cea1cc4dfea3d"],["/posts/ea9a8808.html","0718007e54a709bdbabd9281dc4414d8"],["/posts/eb784749.html","6716f62faff469548f77643dc103f215"],["/posts/ebaf2232.html","dac38fa1aa5d26ae3ed4945f1f0213a7"],["/posts/ed75f185.html","9079fd342ba38c6d7da77f833fa15055"],["/posts/ee1ed673.html","cad617c92e20bff252b2b3bd3c47e345"],["/posts/f0c3ed61.html","c9f1c4c29400affea9213e40edeaac10"],["/posts/f151ff43.html","e777b27242de367f501a675d923d9a73"],["/posts/f21e7f84.html","f606d5c186c77db58078bdc930d75c59"],["/posts/f230b0fd.html","6f54973e83ded3ab4d8d7007c2f2aaba"],["/posts/f28a7877.html","d0fa067ae7d57d0db9016b8219dbe875"],["/posts/f663d5cc.html","ccbe7c1ee1832a321d651032c23c839b"],["/posts/f730ad18.html","46644676ece142560c47e94aca669bef"],["/posts/fb5d4608.html","4824e6a1f0ad4db4ba9f1c30827439d9"],["/posts/fc04d0d4.html","b00401d201ff8dc88f2be1528e649f3d"],["/posts/fc455f81.html","7d9c6b65037a6feca5805396d7f183a9"],["/sumire/index.html","70c0f632172c333c0c96db6743d5fc9e"],["/sw-register.js","d68921346339e7833d14c63866315b3b"],["/tags/AKo/index.html","a50be3f8110a6730057ec9e96c0ad295"],["/tags/APPLE-project/index.html","0ba5ccf21ca2bf89c108d8c610bda6fb"],["/tags/Ankrache/index.html","7cf20dac4e44d1f3a1e7b8d909709310"],["/tags/BELL-DA/index.html","65c29ab1b72a7de50ff66995df445c4d"],["/tags/BL-Game/index.html","85edf86bc3251f1a6ae4f53ab4240739"],["/tags/Blue-Dahlia-Digital-Creators/index.html","353a16833fc5c63c25d9b98eb49a97e0"],["/tags/Blue-Line-Games/index.html","f8fe48071f0aef936f74d72d27421ce0"],["/tags/CD/index.html","0c4ef7d764af104209818a46b873a722"],["/tags/CHUNSOFT/index.html","79187708d240d090dcdeafeab809b7b8"],["/tags/Check＆Stripe/index.html","e8f16ff11f18d059cb342018e5c223d3"],["/tags/Cherry-Pie/index.html","0cbab25fdf2281921ae20c217b21b464"],["/tags/Circle-Mebius/index.html","f8c27af190d281cb904a910cc059218a"],["/tags/Cosmillica/index.html","97d919e0bc751aaaa97f4ad91e274899"],["/tags/CresCENT-BLANK/index.html","c2bd7131041ebee31e9c2967763a1ef4"],["/tags/Dopamine-Software/index.html","58888e2b6ac538f1b88943b1616ced3b"],["/tags/Dos/index.html","6c32503ebf6e2c3cf540f32082ac1402"],["/tags/Earth-Well/index.html","1ad9f8f11d8d6f4f7ae110bd7c6787d4"],["/tags/Forest/index.html","a4454aa2b2945d4338481eb44f96379b"],["/tags/HaccaWorks/index.html","ac64459c94a27e59c63dd408c1f83ca7"],["/tags/Kanon/index.html","70c8ebf705637f1d8b485cbd1d8097a4"],["/tags/MANATSU-8/index.html","52dbc0167c387fce9b0cb80a6fbb019c"],["/tags/MARINE/index.html","13f24ffc7252a49a57308fd7fbdf5595"],["/tags/MIO/index.html","abe2f2c8828f3697c0091224cb5f76e1"],["/tags/NAOX/index.html","a9788981ea57be2cc799a140b41e7d49"],["/tags/Namikaze-no-Uta/index.html","794b156d264182389ea102eceff1952b"],["/tags/Nmyu/index.html","ab7520b42eff0d0a30c20e7118794ac9"],["/tags/O-S-I/index.html","56507f98420816e6e604aa8f266e35cd"],["/tags/Omegaの視界/index.html","5c01c4889badd1b42a70f935a6b28c6c"],["/tags/P-o-l-c/index.html","700f751abbab5074d1da4aae852e5eb3"],["/tags/PC88/index.html","b976ade7de762f048c9f65c4e13a00ed"],["/tags/PC98/index.html","9d7b90831c53737cd9da3fda6add43c8"],["/tags/Perpetual-Room/index.html","c3cfaa1cff5736d3c5304ab4ba3d46d2"],["/tags/Pleiades-Company/index.html","c27b18f277278bc49c34d910cf6671de"],["/tags/Project-Twintail/index.html","b1d37450e42522b023207fb74e9b5f5d"],["/tags/RIFF-RAFF/index.html","8e0fe16d6ddac29abe2a5c2b98e165ca"],["/tags/RPG/index.html","8dd88d6f4888485bf1b90c0b18035743"],["/tags/RPG2000/index.html","40142a629f1222053925077c45a67277"],["/tags/Reverv/index.html","9cd00f86be5e4f41869dd07fb7d95200"],["/tags/SENTIVE/index.html","629e46389bacef83bb2b9f7c5d0f985b"],["/tags/Saihate-SOFT/index.html","a5b1e614fde6e963e776fab577c1df47"],["/tags/Scrubbing/index.html","459a17509b0e7aa1c2cd57e50a51e2ae"],["/tags/Sky-On-R-imaginAtion/index.html","69cfdf35c96bf5942fe41e79677a6b3d"],["/tags/StrayMoon/index.html","73eefbf4c87ecb778475e88f658edc22"],["/tags/Studio-Bu-Sa/index.html","6fc77dbb59e391e9ab91ec0cb11d59a6"],["/tags/TRANSPARENCY/index.html","ba78ca121385b2cb74aded71b82d129a"],["/tags/TRANSPARENT/index.html","bc6bbd0b009078a3bf2c166eb20bd4e8"],["/tags/ToHeart/index.html","067c06f1e25ae2289e48b32f603bc60e"],["/tags/Traumend/index.html","eae7535c2ffba95c229f56d70168e698"],["/tags/Witch/index.html","b0bb69ead12ccd986a761aaf13a92e37"],["/tags/adonis-project/index.html","64bbb2391bbbf22f5a82b3cf86524203"],["/tags/capriccio-suite/index.html","23c86d1de52e760d2a07fdbfe10c1fcc"],["/tags/flash/index.html","dc6892cddfff4da3f052cfd816a05270"],["/tags/galgame/index.html","84ae272f4fecf319db850d2cd5a47f69"],["/tags/galgame/page/2/index.html","3f5eb33572f5e00dd2ae3fcdf303cc85"],["/tags/gal资源/index.html","d22db47f67687bcb4cf7671fba09d5f5"],["/tags/gal资源/page/2/index.html","49a4d97ef3f0a4bbb254bd337f9c8f0e"],["/tags/gal资源/page/3/index.html","61a80effb36163c8ecb44b55393d5fd3"],["/tags/index.html","26e564aed317538ecfc54f7222c8a1b3"],["/tags/m-kz/index.html","6e59677124d306d6bd898f22c16c17f1"],["/tags/purgatory/index.html","24c69fb928354301fa5e4f4f130ad8e6"],["/tags/rkr/index.html","dc6b8e3acc530e7f6f10133faf64198a"],["/tags/team-eye-mask/index.html","40c9eaf101b8062936cb03acade59bc1"],["/tags/ありすくろいつ/index.html","53cbfed2f3c781048c83dacb6aecdffc"],["/tags/いつものところ/index.html","fc0a756e0bd7adab587fde7ad25db401"],["/tags/きつねみみ饅頭/index.html","0c457b5158d14db534304c6d2dae2934"],["/tags/ねこねこソフト/index.html","6f3dff8d6d4f099f270942c435f8e3f1"],["/tags/ねこバナナ/index.html","dc2fa1478b96a70e8d4e6f1093495e16"],["/tags/はちみつくまさん/index.html","7fcc95cfe749e501ac9c63a3cdfe0614"],["/tags/ろりちせ/index.html","dc68b91ce50d77cfa92d6f500b87a236"],["/tags/アイル【チーム・TATU】/index.html","71c7be5b334ad6a6eedd426cbe5b47f7"],["/tags/アークシステムワークス/index.html","8933f5cb118b69c23c1f0775733f8516"],["/tags/ブロッコリー/index.html","58d197f680db8cb474f263973cc208a6"],["/tags/乙女/index.html","af431892e0968d37895479cb229f61c6"],["/tags/乙游/index.html","6756f7e23b4a3532a3bc7a9e035803b0"],["/tags/停产/index.html","724368bf7ee04b397d279ea28101c834"],["/tags/公告/index.html","61d7d59ac3342430b2070a181dc9272f"],["/tags/同人/index.html","2b7b8ea0ebdf68bbd90cd9fd46ba1198"],["/tags/堀井雄二/index.html","3fa0a72e1440724506e5a27c8296b43b"],["/tags/外海なおき/index.html","1980f51b7326d2aee1ab58c728127dd0"],["/tags/大熊猫/index.html","827bac58ad18ac7ca45effe3271422cc"],["/tags/女性向/index.html","60fea2daa32b1961262c760864069c0c"],["/tags/安装/index.html","8ae71b29d567bd58ef27890e114d00c4"],["/tags/御茶ノ水電子製作所/index.html","d2753880247cb1eb5053ccff45f8c547"],["/tags/月の水/index.html","25df19858bf92bf3b6403716fcdb440e"],["/tags/桃野衿/index.html","5be82ea6e24082260423f3c5373929f4"],["/tags/機械式少女/index.html","aff8c8113bbcaa495f56f61f1197d60d"],["/tags/水仙/index.html","1adbc72ee7fba476e561859b37da9d97"],["/tags/汉化/index.html","914c625b3e2618348fa80802e2525331"],["/tags/熊月温泉/index.html","6da4a1013e3ba76121c6afe1e2ce6917"],["/tags/片冈智/index.html","44133d304a7c394e836b515cafdceb34"],["/tags/片岡とも/index.html","8e09aa5e0c8a39a435f8c832a2fa4560"],["/tags/牙の刻印制作委員会/index.html","a8b4917e1d0e7460e4a5fabf437f4d23"],["/tags/牛カルビ定食-FLAT/index.html","673744288989cbe778ef6ac4134ae7f5"],["/tags/牧尾屋/index.html","ae3b27831ba5c7e370b1001da3582fc3"],["/tags/犬茶屋/index.html","685cbe6862e9871413709e3aebdbebda"],["/tags/猫猫社/index.html","a94190886d8cff691a158ae111c4c14a"],["/tags/王宮魔法劇団/index.html","e6846b5749107ff02dcdd3b32f3e0718"],["/tags/画集/index.html","cb8353abfefb264dfe2ec6b4be398fbb"],["/tags/索引/index.html","95561c65a09c3e41fce19fe4c84260f4"],["/tags/缺失/index.html","d12df51c91520a3dfda33aa736278d88"],["/tags/自购/index.html","f8a2b4a4c430f5080697acf93641c74a"],["/tags/茶葉☆姫/index.html","82ecc28017228597ab8eb6b7c8702b14"],["/tags/郷愁花屋/index.html","69c26c88655aa7a805e5eed14389107f"],["/tags/閂夜明/index.html","21b42b81aabcf214e594a18e7bd08f8f"],["/tags/音乐美/index.html","3cebf4a97802de0a8756a3ccab6401b5"],["/tags/黒†救/index.html","02a1f371272161e839173cd07bb5af20"],["/tags/黒百合っ子大集合/index.html","b4916a7f511153086346b9b6771f9334"]];
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
