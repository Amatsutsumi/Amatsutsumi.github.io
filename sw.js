/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","0b15f74cc8aca4002c920e689ec932f1"],["/archives/2024/04/index.html","d407d48c26ba5cafff56047ef0a3eb4d"],["/archives/2024/index.html","a8314d167eb9487c60513f347c99f71f"],["/archives/2025/02/index.html","927095af370b6211a4309bf2d0912865"],["/archives/2025/02/page/2/index.html","63e85c75ac86004432635995b150878c"],["/archives/2025/02/page/3/index.html","b45026be46f2b4add73e4cb79210dc3f"],["/archives/2025/02/page/4/index.html","b92cdda2c2ddaf1a026cf88e554bec5a"],["/archives/2025/02/page/5/index.html","7be4e1a1162cc5365cdeff9e26f4d0a2"],["/archives/2025/03/index.html","98644b350c77ad7657f0a902fb727ebb"],["/archives/2025/03/page/2/index.html","1757eb292b73a6df43533f72ebf507e3"],["/archives/2025/03/page/3/index.html","e48e9304e05b285c2a45b1f17b700096"],["/archives/2025/03/page/4/index.html","b62943f2349435ba87d3c43dc96b0a08"],["/archives/2025/03/page/5/index.html","05e49701cca3ca86a4b9f29f4a7247c2"],["/archives/2025/03/page/6/index.html","73d0be43047a62f64de947b997cc4a8a"],["/archives/2025/04/index.html","6a0e89182d1fcb2c52cdf7762a1ee6cb"],["/archives/2025/04/page/2/index.html","bb5a7468efb68f0df68c4a1bd01cf1dc"],["/archives/2025/04/page/3/index.html","8aa74370863d254230b62068cfeb498e"],["/archives/2025/05/index.html","f327b08386668f959e6c60b01167400d"],["/archives/2025/06/index.html","2a6b1aecd3c56a18c1e6301c009f4e0d"],["/archives/2025/index.html","8476114df1c594a8b584aed35b5baddc"],["/archives/2025/page/10/index.html","e92d1c70a3942308d7c622fd649c3f45"],["/archives/2025/page/11/index.html","523e3173d53c85117c0d4daa1f1de135"],["/archives/2025/page/12/index.html","11b7cfe701daef43f34a5c01b7538a78"],["/archives/2025/page/13/index.html","9d517b4145b8dcb36b5c565fe4c6a9b3"],["/archives/2025/page/14/index.html","57a4a71a1763496cd3495fa60e627672"],["/archives/2025/page/15/index.html","5633c7a0f6d4e71eb58c02bda60bdb6a"],["/archives/2025/page/2/index.html","7d3bfcef019b6140c15011a794e90fea"],["/archives/2025/page/3/index.html","e960c4b166ad3663cf75a99c0535977f"],["/archives/2025/page/4/index.html","3419e371e1d18308033974ad70d9fc65"],["/archives/2025/page/5/index.html","9ab4f09fd80b909871c59aa2d5490fdb"],["/archives/2025/page/6/index.html","2b3e4684fd6ff86a3bfb3369fed1851e"],["/archives/2025/page/7/index.html","9e16100dce032848e8eaced96b46e6d7"],["/archives/2025/page/8/index.html","5aab7ba2435333daab656b913995ff84"],["/archives/2025/page/9/index.html","f7e5512a8a3a025594cf9e16f128a579"],["/archives/2026/02/index.html","4b808c0a48563fa891c26c3d8103dff9"],["/archives/2026/index.html","92c150c594aa705fa5a48d8e1cf2ffc3"],["/archives/2825/04/index.html","6f231771314d18188766d28657015373"],["/archives/2825/index.html","56229a11a056abf750e954fd84033a96"],["/archives/2925/01/index.html","afbc38cdb606479dd1ebc2f273cb0da0"],["/archives/2925/index.html","bf077bb185604a229f26c7ec14451672"],["/archives/index.html","b88718c3f37a1d6a5ca0792533f262be"],["/archives/page/10/index.html","bb5eb32e71bbb770b77a36d4425dd0d3"],["/archives/page/11/index.html","ab12f7214c2f1d7a8f4755ee6dd08259"],["/archives/page/12/index.html","ad2a5412d4eb99c1ef170d03551d755c"],["/archives/page/13/index.html","84af0648caf1721b1ff0bba3aace6f7c"],["/archives/page/14/index.html","e4ac6c575a32f78839b68fc6b7768226"],["/archives/page/15/index.html","9162d25d1aff22c18dadbc20f9a39c2e"],["/archives/page/2/index.html","a59970906d3eb1e49e33104ccaa1ddd3"],["/archives/page/3/index.html","6c8eb128664ce4cefba2f034ca5c939a"],["/archives/page/4/index.html","50d18a32c6582f5a9b8f2ae92640a3b9"],["/archives/page/5/index.html","951627624fb5a05a662cf5585745a385"],["/archives/page/6/index.html","71100a3291cdfbf98a509be79d173bcd"],["/archives/page/7/index.html","2ca69616b0662f322c87d8b68484703d"],["/archives/page/8/index.html","c434a2829a23171bef2120624955d128"],["/archives/page/9/index.html","33217e487622edbaff6da7457a3a6ccf"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","3d1892a0679de40d2e3cf03d4a360a87"],["/categories/galgame/page/2/index.html","7279d26b4666c7cdb7edda13c0d9ccc4"],["/categories/公告/index.html","b04d0e1ed334c85840e17b52d18d6581"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","5fe00e5fb24cde36381c64e50130cfef"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","e6af463e83740d6bb915dfeb9ee4817f"],["/page/10/index.html","edcbd72c55a84ee332d43bc8dc3cf7f0"],["/page/11/index.html","f6f37076fe157149396695504bdef614"],["/page/12/index.html","13b963293520f4ec9aa1b3ba27b3ee01"],["/page/13/index.html","44b0c2152f993acb94167d0b81f07e67"],["/page/14/index.html","392d0ced70269d7e4d97b49f329ec419"],["/page/15/index.html","67ac516d1331532bfa4d496f5047e0e9"],["/page/2/index.html","a6879418a11ea1da1161260f476c06cd"],["/page/3/index.html","ee94a14b9cf1c16ba33f60ba32a0449c"],["/page/4/index.html","ef8d13245373b7f52a095eae86e34668"],["/page/5/index.html","c315583ac5a1cdfd57638a8cb2ff2a6b"],["/page/6/index.html","51d6008614c01405bfed60954d436e82"],["/page/7/index.html","1d1087680946b2b6e4d24a0483ed3024"],["/page/8/index.html","fd33d9258a9f5f5490fb26860ba6899c"],["/page/9/index.html","51decd5240c5c47563174fa2029a7e3e"],["/posts/10c9dd98.html","2d94a8cd8a6f9fbd546602911e048b24"],["/posts/126ebb99.html","6915a78cfa6ea8f0bb629f41a5407da9"],["/posts/1295b569.html","451a7e2228f14f24dc9fb19d411c8e63"],["/posts/1370342.html","5050e076b42e7d08aab07ef5d38519cf"],["/posts/15ef14c2.html","0f04533b02b1dcf27c5fcd833b488931"],["/posts/15f3959d.html","aa63c07278f76efca180fbe5b65645ae"],["/posts/18ab785d.html","8f82f36ba405b147498594d67b4768b8"],["/posts/1d59b71f.html","e2a2f1b54679ba79e6044c7577cb5771"],["/posts/20b3f3a4.html","a37b41c53de119cf0f80ac0f73e94d6a"],["/posts/245f1c7d.html","2adb083fc9c1afaba8dd302d1871bc88"],["/posts/252658f.html","4dd58618f9c0e201629884e3f7b3bd8c"],["/posts/28397adc.html","e39771a311e386ffcc602b38fcdf0d5d"],["/posts/2ad07f54.html","91708e3cb9a4aa52910b8cbe5bcc04ee"],["/posts/2b38bce0.html","65f1c586258a446a2d21b02cd705cc97"],["/posts/2c0a6836.html","7314d55572ced1013a5a58da7caaff52"],["/posts/2ce39bcc.html","6ac059de262838a9a646b18cf8bb90d7"],["/posts/2cf620f0.html","58a1e5adfd78898ad385679262bc394e"],["/posts/2e30fd6d.html","92e48cdaaa6d1a88906a398f4bb8d5f7"],["/posts/30a413ad.html","6450ce7d8f59044b0bb7a84ed16d579d"],["/posts/34292736.html","f6f3744c78b592087eedf88bf94f5295"],["/posts/3468cbe.html","87fd85e5dff140a2d61f0ebe39c7cd29"],["/posts/39176dc0.html","05b73d5aa782c1d4e63ff6f8a017a932"],["/posts/3be6a165.html","e2585b7bce956217ed028394275d304b"],["/posts/3daf73b4.html","47f590bee2ad5c7aa25f2b16952b6e64"],["/posts/3e118dbf.html","85dcfd6727c32acf0e93df08bd07f6d0"],["/posts/3f7d823a.html","a3a25c1b77fa12b62437a7b497ab36bc"],["/posts/3f978819.html","ae25cbff5a1c8d4bcf6467e11bf6fd45"],["/posts/41dac80e.html","c98e8305c8c272143abdd75b1b912e86"],["/posts/43945723.html","052fdcf6b56f851d1eec3773f4ef54e4"],["/posts/44124a6b.html","4f3f562194e62fb1d2ae713597001970"],["/posts/476a3006.html","283a16202c2c4c253ef4cf20b4735107"],["/posts/47abb61d.html","a6a98cf5137b02412b54a2e022948074"],["/posts/4996478a.html","af2faab926c178ab96fe0a1aa149655b"],["/posts/4b689be3.html","59b9127eb451d52b5b0b4c73fc43618f"],["/posts/4cf8423f.html","bc30edbbcf6c49728ca1e9381aefb8f2"],["/posts/4dcf85c.html","4a544b9d457c56828642e2db97dd486d"],["/posts/500cd322.html","52f57ace8dd773f9c22ae7cb79ebec54"],["/posts/51c9b1ff.html","f06fe35373e095a31c0d7deef7b53c28"],["/posts/51ce68e8.html","619a100d2e28a72ce21f5ceb7e3aa501"],["/posts/52b5b3c6.html","966a3fe43cd741d34c65aca1848d371e"],["/posts/54f496ad.html","864f7740822d2b5763f4680b6b48319b"],["/posts/558e1f30.html","61fdc2b9fd174992cc10ae7f954e699a"],["/posts/5d8bea92.html","33cf453e32b8d5155a61ea9ca5f06b51"],["/posts/5f6e0c59.html","80cc195c6cb5e9659fd99faded11f4ec"],["/posts/61a63a84.html","249409c671af313483f1c621588d22fd"],["/posts/625ab7bf.html","666e135a30383a00492ef690231f57ef"],["/posts/6336a2f9.html","da5e3a0162839ae8b399df8931a48432"],["/posts/6432d61a.html","852fa5a93c28cec16a2fe098e2ea88a0"],["/posts/6515f032.html","85354c530e667566b1c6de51993aa945"],["/posts/6720ccdd.html","16310b70a7f5ab08c2cc88c43f05bb11"],["/posts/6a4b5ac8.html","6e158f46f6e386df4c4b754c19418501"],["/posts/6aa4177c.html","38d9d29c2d93b132e1445b3550ee3582"],["/posts/6b15f81f.html","cec694267f14e7b6c1977bd62411b44f"],["/posts/71131d34.html","02a356a24e71770780e6f36e5f31430d"],["/posts/742fd48d.html","68283b96473993ea5c6182bbc14704eb"],["/posts/78a8a8d3.html","6a842852f56d2c1bedfb051764791232"],["/posts/7a5ef3d0.html","98c915979ccbdd03a629387769a29d11"],["/posts/7b41e1ac.html","f6796205c553713ef8c6bd205598c335"],["/posts/7b51011d.html","599e7c5c45b11d35f1463ee46d1248c5"],["/posts/7e3aa3e2.html","4bb8ffa25fb29c3709448a3dedacd0b3"],["/posts/80fe2691.html","e82d63855a4268cd2f50e96b9ad25b3e"],["/posts/81ac52e9.html","262f1657abf1b2ee61ead5314deaf456"],["/posts/82332d11.html","5c43e3b81eac6c22bc4b209300790359"],["/posts/8486f6f9.html","2b03569152e947f7c2d6bc2a725cb0a4"],["/posts/849b40f8.html","edb11652b3a9c72f6477c4910e0bae93"],["/posts/85c51d68.html","09e72a53c434b74d42044d8ba2f9d281"],["/posts/86a6c500.html","b93656602b9ba35ad63853c8e1b73554"],["/posts/886f8d3.html","157523d649633a40d32362565ded4d87"],["/posts/8a7cba10.html","3ca134a06df06bc6b591a075054bf5eb"],["/posts/8ac11b41.html","0333e351b3a66005bc5cdbbe05121288"],["/posts/8c3f2fd8.html","422e6fe6a74e7668c639ece695e368a8"],["/posts/8dd520d9.html","025cfb368eb35f96ebe000f815cf3904"],["/posts/8f555654.html","543ed44c875f7f2844e262748bfe094d"],["/posts/92a980c2.html","e3cf07b44b2abaadb663c3af20a720b0"],["/posts/92ce16.html","12de426d236ea082a29f7885bfe077e4"],["/posts/93e9943b.html","10ef84b725d3b790c21e6d0816d92908"],["/posts/94d3c794.html","a16dbe8c517f8d1cdbe88483977e6306"],["/posts/96b281f2.html","a889bf4f6b7e68d73c6d00d7d072ea55"],["/posts/97f50eea.html","d9564e3b59b1e5b88d580f1f2852ebf4"],["/posts/97fca8be.html","ce3e3a71dabc4dbcd79cff031ba2fba4"],["/posts/98662d05.html","663bced84852ab67bcce64734e8dabd3"],["/posts/98ef47c3.html","feb6c77e722a0a5779c05d381308f47b"],["/posts/9a2f6162.html","7423c871005e7726fbd0294bfe3671be"],["/posts/9b22a48d.html","b1db6b7cf70950eeaf728a2e97043172"],["/posts/9cb455b1.html","4b7a22cdd75be259546afc45f2c30898"],["/posts/9ecdeecc.html","685123d42be670edf6739e417afbbdd4"],["/posts/9efd7701.html","73a3010ab21cc558845d94f5f041eccb"],["/posts/9f61c1a0.html","58374d17a98248d86f7f0c59957c7166"],["/posts/a1de710.html","243ccca2afda35fd0f457cc51b0bbaed"],["/posts/a30eb0cd.html","d69f4823e2e31fa76c479baae7361464"],["/posts/a72f71c2.html","84247387fe04b5a6e706e969e3a1e0b0"],["/posts/a7634b5d.html","b011f7d6920cbb257d9d9dd5e4a2c406"],["/posts/a8c593b5.html","c63d744d3209720161597bbcb76e63c5"],["/posts/ad0c1efa.html","e6b8e1b6e0db6ff8d814f6eac14ed5ee"],["/posts/ada3f440.html","c1dee0607acdd090df3727aa7f464f41"],["/posts/af1807ef.html","49e41d90674087c4789369726289b4d0"],["/posts/b397bf03.html","9495565be26f61034732c08afb30f297"],["/posts/b497b647.html","9ed441bc46daaed3788e374fa376f3f8"],["/posts/b4d464b0.html","028d018726ce77baaf323249fb65f8f5"],["/posts/b5fb773f.html","bbe84e98991d8b3d96dbd09a1de3268c"],["/posts/b8d46b32.html","d73486cc87946cfcc016f8223ccdbccc"],["/posts/c1b2c6c9.html","bd91291940b6a4b71f7023c51fe62ccb"],["/posts/c2111cbf.html","72a0f0bad77e5508a95b761931c133a7"],["/posts/c316c2e8.html","c56f959d78cd272c750bcf0b8c90d712"],["/posts/c43e60b5.html","1513cbdc0786dd7b456f832a45fb3722"],["/posts/c497a412.html","b2b94c2dc7959c93cf7ede3faf37e0a6"],["/posts/c5395ba3.html","782ac9ffc308ce08eb29ebcd655596a6"],["/posts/c5de299a.html","2f5a0a885067d2f57f3675ea093748de"],["/posts/c70bba9c.html","4cffe3f0c36453b5042f10db4a2c4bc6"],["/posts/c797535e.html","6cf83e6216a5d2a4c42ccf62b32edfe7"],["/posts/c7a62c79.html","b80661fad1a7af42e647d25074b8dbaa"],["/posts/cae2c959.html","2d493379ef9bf28306eba806daf8a9ab"],["/posts/cbebef2b.html","af7ef74da51eec2bee20a4931649e565"],["/posts/cc4c0017.html","8ae8b5d60518c44bdbec65f8f6589677"],["/posts/ce25023e.html","71cc1a3639fe697af7865594a353599a"],["/posts/d2fd4837.html","c5303e106232fabc0d12ddd00d2e10d3"],["/posts/d3233cbb.html","2e030c429bf779318ee1e4d1356c99da"],["/posts/d3a745a8.html","197b590e32737cd0ef4bb26a291771b1"],["/posts/d7e940d2.html","3fc27471775201d8242b27bc2b3c38f4"],["/posts/dc815d5.html","95ab5362e952d2da4267a5a957629950"],["/posts/de25b0be.html","333c95d041125d807e56f1a017827f5b"],["/posts/e2623b4e.html","545e29a325bd5ebb87dcf638c0675980"],["/posts/e3ab6ad8.html","379c0e5cc3e0b67fea11aeace84bff41"],["/posts/e5018da6.html","d8203dbdd67459ac19d936f501ef81f6"],["/posts/e5963272.html","af6767304b223e84fa9828523d08a341"],["/posts/e5ef4c3c.html","8fb19c2b4903eb86a81296ff6e86b50a"],["/posts/e624b065.html","cb446d881b773aff0981a9844c85cc61"],["/posts/e7c703bb.html","81369a1645ec53f684583edff1eec01d"],["/posts/e8f14b6c.html","d1a79281dce99c5bae981791132a9485"],["/posts/e91abb63.html","5db9692da813bdbc81e62d4a7ee0f8e4"],["/posts/ea9a8808.html","e15a45cc657c3eac045cdd1368af6656"],["/posts/eb784749.html","b1404226c7ceb9846ac924e1c4bc9fbe"],["/posts/ebaf2232.html","bfcd117406583101ecc786a13ce5c982"],["/posts/ed75f185.html","fad2c04acaee325665194dea8491373e"],["/posts/ee1ed673.html","28cdc3f930cc05bb51255f1ca711c37b"],["/posts/f0c3ed61.html","6f1bd85957bec2e1510f2646aa980520"],["/posts/f151ff43.html","6156f1a78bd91803833a9a33bbdce0e8"],["/posts/f21e7f84.html","ce820ad66f3bdc2e8c82b35c82e7670e"],["/posts/f230b0fd.html","72fab8abc9156e237efc3a0879eb5ed4"],["/posts/f28a7877.html","a37cb4939a0e120774698f83090146bc"],["/posts/f663d5cc.html","8e5d7105bc89e0cdd50d5b01f863dc20"],["/posts/f730ad18.html","4ad4888bc96893eda6219e7f4d571065"],["/posts/fb5d4608.html","1618293e53849cba06093d7c5665fd24"],["/posts/fc04d0d4.html","5339d4d39c1f70fe81ed7dad297b06ee"],["/posts/fc455f81.html","2b18235633911a3132dc62d24bcc3c58"],["/sumire/index.html","53908b2a90d2a4556ddf9cd452edff89"],["/sw-register.js","846dad403583ab4d3c910e57e15af3ca"],["/tags/AKo/index.html","78859c297098165c8c1a884d9bb0abb7"],["/tags/APPLE-project/index.html","d3aa396b509101a33395bcab6e0e527c"],["/tags/Ankrache/index.html","120479c9106cf47b0932cfe9ff52c6cf"],["/tags/BELL-DA/index.html","4b58e074ac5477941714049022798d13"],["/tags/BL-Game/index.html","da57f8697a567e2aeac1f626bdd32c06"],["/tags/Blue-Dahlia-Digital-Creators/index.html","788b5d5634db4125db2ff9f5b1dd98f6"],["/tags/Blue-Line-Games/index.html","1c633782f616a0e5b78f3fd6ba0e50ff"],["/tags/CD/index.html","49af4ffc4bbefeb0e20779f6277bd6c1"],["/tags/CHUNSOFT/index.html","b6bde340996d3c0cf336156a63b38888"],["/tags/Check＆Stripe/index.html","7ca44dcefef727108be87b98132f358c"],["/tags/Cherry-Pie/index.html","af9d7acafd87590d0a58ff9ad48ea083"],["/tags/Circle-Mebius/index.html","4b5ba4b7dee95697f8639851304e4588"],["/tags/Cosmillica/index.html","d5b9af68f00cae2f633aa066242a41a7"],["/tags/CresCENT-BLANK/index.html","07c793021ee3e9797b9cfcf361ddd0ec"],["/tags/Dopamine-Software/index.html","cc23c4be96c9ca2ef6355205b8ba4703"],["/tags/Dos/index.html","2b93fbf9b8081d77411e0f397e856ceb"],["/tags/Earth-Well/index.html","4f06e8bd2b8f144eca951cedbf6219e1"],["/tags/Forest/index.html","f408bb1a6afa22f2eff2537587508554"],["/tags/HaccaWorks/index.html","998f7ef096804bd4fd0d00145c73ed23"],["/tags/Kanon/index.html","e20ec5206873f12001b5599613fb4921"],["/tags/MANATSU-8/index.html","b02fb1cc7c16e1967bcd3d997488b966"],["/tags/MARINE/index.html","33608f0290dacd732d4d36e42e280042"],["/tags/MIO/index.html","3f287a9e637a7d0e2d619cc9de5ad79f"],["/tags/NAOX/index.html","8350f816f4a621b0543790b9d9735c7c"],["/tags/Namikaze-no-Uta/index.html","9bceca242a8911b5c2f3dd33004c24e4"],["/tags/Nmyu/index.html","2ec66a5bdf47b883473ad199b84b0d7d"],["/tags/O-S-I/index.html","16c93ded0ccffc60565b67ea35485759"],["/tags/Omegaの視界/index.html","18a7aded4dc39d536f76c3d1914829ee"],["/tags/P-o-l-c/index.html","10e2b9febe702b9ba5598167b96a380f"],["/tags/PC88/index.html","b2bb4a32b7846918033ae656b370b680"],["/tags/PC98/index.html","c0a9cc6c2c7e7d9bb56c3caf787f8b37"],["/tags/Perpetual-Room/index.html","b9f981afd811beffd7a2b3814fd889b3"],["/tags/Pleiades-Company/index.html","946b439521455132dd55f43f300927fe"],["/tags/Project-Twintail/index.html","e0f9b64beccefb6ecada2a69eacc6517"],["/tags/RIFF-RAFF/index.html","472c2b249bf4a3b661c0ae0509d5221e"],["/tags/RPG/index.html","5980382a6e5e8109a86eec54ced23abc"],["/tags/RPG2000/index.html","ea5c3c9775e0703fc8c12849c57e6aac"],["/tags/Reverv/index.html","1e70d160fd450d322651f167ce3d8ba2"],["/tags/SENTIVE/index.html","173888af36761e14413d8de0d888119b"],["/tags/Saihate-SOFT/index.html","ffea9800fd30ac377a0a3aa5017f84f4"],["/tags/Scrubbing/index.html","9f11316ed9a4fcb90c56c6d262bc6000"],["/tags/Sky-On-R-imaginAtion/index.html","59836f20cb178bb3efa88edf8caafa1b"],["/tags/StrayMoon/index.html","e4c47e9ad622dad8ea9392b193597863"],["/tags/Studio-Bu-Sa/index.html","f5be09a570a921be7990751d81982ae1"],["/tags/TRANSPARENCY/index.html","03c3d22ce9a5443dd6a0e580c99163bf"],["/tags/ToHeart/index.html","b64a67bcaea53db2a672e392af226ca4"],["/tags/Traumend/index.html","44afb95a17c22c9d7fde204bc5893688"],["/tags/Witch/index.html","873cce6ad7cdb0c5ee54d7cdbedb675d"],["/tags/adonis-project/index.html","f1bb2197107575a405301360b51fb5bc"],["/tags/capriccio-suite/index.html","8812f9ee6ad3f17b04cfda43853d7599"],["/tags/flash/index.html","bfc64254958d520ac9b07eb23174f320"],["/tags/galgame/index.html","19891b7cee25ec2cf76439d1ca820f30"],["/tags/galgame/page/2/index.html","21b9c891aaeed4f9ecd84cd6b346db0e"],["/tags/gal资源/index.html","b5b0d27600a8685b0f1dff2b2801904e"],["/tags/gal资源/page/2/index.html","e41d22cba46ef70b99c0601ae2b16397"],["/tags/gal资源/page/3/index.html","e5d6f4cc6f2be088ec2e9c7acd3d8679"],["/tags/index.html","2b0184373102a46d94fd4c7a12e98e19"],["/tags/m-kz/index.html","51435929945e217cb2994d71af9c397d"],["/tags/purgatory/index.html","901e59aa8933c56cdc5d8f00fbc2e4b0"],["/tags/rkr/index.html","6531752c7b77a9107dafd704263de37a"],["/tags/team-eye-mask/index.html","77e459cd717de68c3d21b2a8e6e5fa04"],["/tags/ありすくろいつ/index.html","3f94228c72d1b73efce380583370b705"],["/tags/いつものところ/index.html","bbe32fe4919bb6738a863bb6befdef4c"],["/tags/きつねみみ饅頭/index.html","2e916e1b5f36c4d0c26d19f57cba3fa7"],["/tags/ねこねこソフト/index.html","4e66442cd3faef25491c3631f33ff8e4"],["/tags/ねこバナナ/index.html","b30e59ecde77e4e35cb37bc655ddbf65"],["/tags/はちみつくまさん/index.html","c0889e76f3fa724053e65cca49d21d5f"],["/tags/ろりちせ/index.html","f75096f08fda326ba84e4fe054cc8ecd"],["/tags/アイル【チーム・TATU】/index.html","07642804d689338cfab6fede2e3d3234"],["/tags/アクアポラリス/index.html","ff06c6ac4a0beba599ab0b6119cc5016"],["/tags/アークシステムワークス/index.html","b06e9bb9614aec1129345020be96645d"],["/tags/ブロッコリー/index.html","48555996112feb94b45b7098f52a679b"],["/tags/乙女/index.html","0e27a7bcf629fb2f4bc42c8d8513a264"],["/tags/乙游/index.html","f9fa3b56fab4584964fb9d8793297603"],["/tags/停产/index.html","946fbefbfd5f797b9349a2e6a27bda92"],["/tags/公告/index.html","c1273726a255aa3218bfbc172dd8dbb7"],["/tags/同人/index.html","4c9d2b9b18b5385808dabbdc8d8395da"],["/tags/堀井雄二/index.html","546579422cf5bebbd2796375f61bf902"],["/tags/外海なおき/index.html","08604b2dd5099ee1266c1739faac730d"],["/tags/女性向/index.html","1a73e09843fffdb401e30d99e287b8b5"],["/tags/御茶ノ水電子製作所/index.html","aebb228139e09a322994870d4a86c259"],["/tags/月の水/index.html","b6d5dcb5a28806acd71c05dff8d60f6d"],["/tags/桃野衿/index.html","6bc8500e046a45be0c507084c437cd33"],["/tags/機械式少女/index.html","2de12c54247ad02c27e1a1fb6a493034"],["/tags/水仙/index.html","d60f51cc01078ea8ea907804786d1bf1"],["/tags/汉化/index.html","a5e43dcb5c2594a149a0f64a69076a29"],["/tags/熊月温泉/index.html","1d37fc270794c3c62fd9db21e74be59b"],["/tags/片冈智/index.html","aaf58c1eccf0aed819157dfe52d11fe6"],["/tags/片岡とも/index.html","12cba9ff4fbe59dc0bb2bf01f167064a"],["/tags/牙の刻印制作委員会/index.html","6786d78640924b8b5177c39268b62cde"],["/tags/牛カルビ定食-FLAT/index.html","e896a26b2e3738886225668a3c680265"],["/tags/牧尾屋/index.html","d16b0aa5b66e239956ae4bbe0c55c866"],["/tags/犬茶屋/index.html","1fd99636c444f6d026302b02492c23d5"],["/tags/猫猫社/index.html","f0bfb728a4f459aa950dbbf902b53f28"],["/tags/王宮魔法劇団/index.html","0cd6059f0767bb30f1f1fb5855f23c82"],["/tags/画集/index.html","1dedd23163a2c7c7b17c4cb14f8fc0b9"],["/tags/索引/index.html","e41053e685a554bf5de437f22e0664c4"],["/tags/缺失/index.html","4a38415aa565efbd980f4cb83874aca0"],["/tags/自购/index.html","76d04baf97a54e19e3396910b20398e8"],["/tags/茶葉☆姫/index.html","90360ac6dce9f17d323a1fb5ffe0de10"],["/tags/郷愁花屋/index.html","6d9f9ea29b87b7e6e91be27a7ae391e7"],["/tags/閂夜明/index.html","11d671f6f983214950f00ab37fffc336"],["/tags/音乐美/index.html","90b42e27f0b556fa24f1cb0e611ef4f3"],["/tags/黒†救/index.html","24369360bbdaf4fdd8c480d9cdf4bb97"],["/tags/黒百合っ子大集合/index.html","fff96aceb0e78c944f06cf8aa74e3d86"]];
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
