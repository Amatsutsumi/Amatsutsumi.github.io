/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e1b9d8df68b73f8ddbf2168d022db86d"],["/archives/2024/04/index.html","d2194c103fe04fcb8826353f8c35b145"],["/archives/2024/index.html","ffe9feb71a093083388c1b5889654ade"],["/archives/2025/02/index.html","45c6e3891ea7a0f16919df61bde1f4ed"],["/archives/2025/02/page/2/index.html","489939ce5072881c6735561dcc6f423e"],["/archives/2025/02/page/3/index.html","c4bd1e435e929df103cb6ce8da6fb10f"],["/archives/2025/02/page/4/index.html","e8f4f54a85723e946495ae027b961b8a"],["/archives/2025/02/page/5/index.html","91cf5ef10c9d2c2ce0d55d0605ad89f6"],["/archives/2025/03/index.html","5f3d51abf3567f827a02513a23bc0fb4"],["/archives/2025/03/page/2/index.html","f9c5dae63ac61a123722413b1eed5f5c"],["/archives/2025/03/page/3/index.html","2f271d9892c1d45b1fb98529506d7885"],["/archives/2025/03/page/4/index.html","638695da382bb4d9d8e82b66ecaf53c2"],["/archives/2025/03/page/5/index.html","b6cd9a2990e09e02555a33cbbddfcd13"],["/archives/2025/03/page/6/index.html","1020bb85027be67b977f70f0de6e13a7"],["/archives/2025/04/index.html","150c1d83513e500bf8d47bc410dd8002"],["/archives/2025/04/page/2/index.html","820cf073e7cb632d070c04b9b9dfbd6c"],["/archives/2025/04/page/3/index.html","4a08cbf1ef1bda340374e7fee4373019"],["/archives/2025/05/index.html","483d4159c949bdee6618ce31834fb60e"],["/archives/2025/index.html","417653e34cb7186af8217a4b4ef53d2d"],["/archives/2025/page/10/index.html","2d4c64a33df5449b8495f7339a9e6008"],["/archives/2025/page/11/index.html","246474b3477bfb97cd02bb19739eff4d"],["/archives/2025/page/12/index.html","8df12b85ef87dbabae58ac8c2e2d05dd"],["/archives/2025/page/13/index.html","359cfe8a9fe0528e32b621ec4b557878"],["/archives/2025/page/14/index.html","34567e1e2121ae938b5a24459ca2f1d5"],["/archives/2025/page/2/index.html","461beb148f832ce9ab2506ddda54a609"],["/archives/2025/page/3/index.html","8067d6a15c2d6892583c202031403740"],["/archives/2025/page/4/index.html","1c8472eb33c0f7eb8ae491fd0dc7bdb8"],["/archives/2025/page/5/index.html","e9cd64c3831b12ceb1100afa5f3bb8f7"],["/archives/2025/page/6/index.html","09b6dee133e40f59473370966759dfef"],["/archives/2025/page/7/index.html","85bf8d0cc26d8b713d214bee2d247276"],["/archives/2025/page/8/index.html","eddd8dbbb48e4e2af9e96ce0e8d636a6"],["/archives/2025/page/9/index.html","93ffaf406ae92ff58c2d91a15dd3ee07"],["/archives/2026/02/index.html","8b746aa906f87ba7a332a7422726d59b"],["/archives/2026/index.html","9100d5c57ca917b49b11e2d618f71622"],["/archives/2825/04/index.html","637f19c61fec8d216e9dd54027f2d071"],["/archives/2825/index.html","2b1c06aaca2630a4dfcd8f32ab8970f0"],["/archives/2925/01/index.html","0d9baabecc168498d6f7708faec7ebd6"],["/archives/2925/index.html","7b0c8521f3c51482a472453a2048d93d"],["/archives/index.html","93259f0abc633112162879a9afe67be3"],["/archives/page/10/index.html","439c6ff929b29529f5a3d0b80037c0e3"],["/archives/page/11/index.html","567d1323c336186776bac0d5f1448368"],["/archives/page/12/index.html","f25292bc6b989b100e9db3e8dd7b063e"],["/archives/page/13/index.html","8fe181015de2d43221db72bed960aaf4"],["/archives/page/14/index.html","daa89476f2aefcb04e1418d59a00e148"],["/archives/page/2/index.html","c97f58eb46028e98919e8cea4ceeea6a"],["/archives/page/3/index.html","b6f3b82a70dffb123f8368243e1361d5"],["/archives/page/4/index.html","72eeba11cbec9a01eb671f569710f6e4"],["/archives/page/5/index.html","2b6ab7da6378ea57a01fa2c0a7c96f78"],["/archives/page/6/index.html","04000c36e39dc19f0a01765d5ed6d510"],["/archives/page/7/index.html","f47e10a953c0a7bde983215d58079ff2"],["/archives/page/8/index.html","6092b67918cf9376c95ae2eb3d3ba7c0"],["/archives/page/9/index.html","970926e30c81955657e7840011694c69"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","5728138fd832ef85ca4108bd7b11a58d"],["/categories/galgame/page/2/index.html","4099fd1289b11a2f33ad120ab9e784c2"],["/categories/公告/index.html","2ff3b7cdd0acacde25ab8145260ce792"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","ed99f82f3e4b554de187fb9fa4e142b0"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","0bcf7b2dda9778f2e40ecd10b07336db"],["/page/10/index.html","cf9283eb6c067d110d6e79d6594af9a5"],["/page/11/index.html","a73f2e4c249b4e325412ca1a62a1b5f6"],["/page/12/index.html","aa81d31bdeb61a13d11ad2f933ca3451"],["/page/13/index.html","f8b9911340df6da043ce1d6f5fba484a"],["/page/14/index.html","0a6f32376ce9f2e4df7a1f712c1a99dc"],["/page/2/index.html","d7fc47c9b2c248c4b40c06e31c90c5b6"],["/page/3/index.html","099037e568e2fcc8869ebe8fac050cf6"],["/page/4/index.html","77edc03cab98ec7eb6bef80cdfdfe3b9"],["/page/5/index.html","e8389189e2bc2e9c7cd51f12c038fb54"],["/page/6/index.html","27d67d1ea847da0377070e2d8828e49f"],["/page/7/index.html","60028aecf5c3d0e85807fcdb73724beb"],["/page/8/index.html","04d52f2e787a9eba551ac05c7bca57f7"],["/page/9/index.html","e57e89d7e18fe3e77475bbc6ca491d2a"],["/posts/10c9dd98.html","38d3089bb7658391433945a8ef310bee"],["/posts/126ebb99.html","15ed399832207fd0925031cfe194b6ff"],["/posts/1295b569.html","6b9d622e516d247bd5ae61b7801cf7e1"],["/posts/1370342.html","db6716f2bf09cf5853ad30091cf9166d"],["/posts/15ef14c2.html","b476059bfb80461b1cde50d823ca0ba0"],["/posts/15f3959d.html","6418b62e27ad68592b5bdc5c2842f8b1"],["/posts/18ab785d.html","41c0697d1b7acfdde7b3a2970f4c741b"],["/posts/1d59b71f.html","669b8cb6e5ad99329e9dc2a10bc9e5ff"],["/posts/20b3f3a4.html","0be0bcb84fcce58ee47052c8db206930"],["/posts/245f1c7d.html","8d10bdd0c2567a8e1c263b6e1ead02d9"],["/posts/252658f.html","8b2d95f00eef12a47868a55e987949eb"],["/posts/28397adc.html","7518787de12de0d5db0e9dccbd4fab62"],["/posts/2ad07f54.html","a27a963e7cf99c145f913a1f3b756660"],["/posts/2b38bce0.html","1a2113bbda7fd23b97e88a76746bec6e"],["/posts/2c0a6836.html","895372d3a9518e61da972cb1bf577c45"],["/posts/2ce39bcc.html","d7abf90b598a7e08d515d7674240f5f1"],["/posts/2cf620f0.html","12f5d5fef12ed3b0299ba5fb172383e8"],["/posts/2e30fd6d.html","32e1b9b86875f36ae786dd1c2b453ae7"],["/posts/30a413ad.html","37ae56c37d1eb0817ce36cb205527f8d"],["/posts/34292736.html","97c3fe2b16cc25251212b4d7a0f2a79d"],["/posts/3468cbe.html","29652727d34e2f98d6c8b540ec13a0cd"],["/posts/39176dc0.html","08c5fd7ff1975d2e95619d0b7b024e5c"],["/posts/3be6a165.html","a197502591d860fbd69cdf0fabbd10cb"],["/posts/3e118dbf.html","e1ad40c2665be13d0365a288d371ff1f"],["/posts/3f7d823a.html","9de2459f1ae99a1174a24b2d46cd6111"],["/posts/3f978819.html","cb8190e0480ee3c57fcbf9bf0815352d"],["/posts/41dac80e.html","aa2684312106946d87348b652b5fceb6"],["/posts/43945723.html","89bde263ef90297b7d6e4e1e8cecd9ed"],["/posts/44124a6b.html","2601ecc8fca7a442f7cd1289a21eac12"],["/posts/47abb61d.html","e5e8100b95cd96649f4cdec5a2ec24a5"],["/posts/4996478a.html","af8f940ec7227fcae63237d2df229910"],["/posts/4b689be3.html","48d56ef7a554f7f90df286313d544ab5"],["/posts/4cf8423f.html","a385cb1ce2f7c3aececb24cff113d2b2"],["/posts/4dcf85c.html","bdff59f6f163032482f035b4649f3d8a"],["/posts/500cd322.html","97903d810fa8ff0540136be75a1dd60e"],["/posts/51c9b1ff.html","5761c7b3cd6e4ba44ab58732c9cf0a5c"],["/posts/52b5b3c6.html","5d1c9723444911878bd081b68c869f56"],["/posts/54f496ad.html","c0fac0f270ab725219a095aba675ead9"],["/posts/558e1f30.html","2390d5e6257a7abda22ba21876e545d7"],["/posts/5d8bea92.html","bf89328e660a93bf9d0106ee9b4c3a1c"],["/posts/5f6e0c59.html","57625266d220d41775ad27138a5fc153"],["/posts/61a63a84.html","8b1300b968276062e8009125b9d654c0"],["/posts/625ab7bf.html","8eb4899bb28f5ddd6a8d3ed06ea94b4a"],["/posts/6336a2f9.html","fa167332cde9d15562e47626283d7304"],["/posts/6432d61a.html","711babe4993562745a05f8e741dec710"],["/posts/6515f032.html","64be55b2f333545779ac98622bf46c10"],["/posts/6720ccdd.html","23114424dcadac9c84b691d75fca6eba"],["/posts/6a4b5ac8.html","ff1d2f3525dfc22ec545645b7238f9c0"],["/posts/6aa4177c.html","a4476f639f042f87691b0f0028975cb5"],["/posts/6b15f81f.html","928aaa201ded9815d94b6645a4a1beda"],["/posts/71131d34.html","2b96b5a15234fa1f4ac05508ee0417f3"],["/posts/742fd48d.html","f342113990bf16ada191b188f4b66eae"],["/posts/78a8a8d3.html","444243c3427d8df1e888dd2a0e5826e5"],["/posts/7a5ef3d0.html","a24668d9095b1d1941de3574960aaaf8"],["/posts/7b41e1ac.html","e48aa657395795e333fd8453bde387b0"],["/posts/7b51011d.html","2846250d9d6c748bc4fe5b5d96deaf49"],["/posts/7e3aa3e2.html","60c45edf573843ce6816ba977ab94709"],["/posts/80fe2691.html","921d31ef2c8b02f5ae2b1b397f3ae904"],["/posts/81ac52e9.html","1960623450da02c5b273f0b0cfd91d00"],["/posts/82332d11.html","e02b3feda8d9648e9a75bbe5c22156ac"],["/posts/8486f6f9.html","f1e637a2c974457640c7dd8d733e8f3a"],["/posts/849b40f8.html","505b72d7e0b9fe9d79d5b106e9ad1219"],["/posts/85c51d68.html","2c5ee7d5211987a909a6ee25787628ba"],["/posts/86a6c500.html","6fa6eadf8fcf1a359b58984fc8598995"],["/posts/886f8d3.html","1ae1c758a3363ee5bfa6b4c7312e47ad"],["/posts/8a7cba10.html","32284713eb4e708e701f727c9117a66b"],["/posts/8ac11b41.html","b35168419b5d9fb2f02e4705105e0e4b"],["/posts/8dd520d9.html","f9de01d4bba1e989d63e8d8e95f5a658"],["/posts/8f555654.html","837e874971890ce3b1c4a8fdcc8ed5bc"],["/posts/92a980c2.html","4f072afae1d05ae5b7340446fe43b85d"],["/posts/92ce16.html","ced3dbb8d4c5c8fa60b074f86f0a176e"],["/posts/93e9943b.html","60c8cc051a1c7883ced173121e7ae4c3"],["/posts/94d3c794.html","ddd6e2f4c8ec073821d98d394bfee4ac"],["/posts/96b281f2.html","15a96776709384a110eecce233ebad59"],["/posts/97f50eea.html","26b3b9f051463d8c1164d97218279ad7"],["/posts/97fca8be.html","d4287e0755b675f5ae673499b66cf140"],["/posts/98662d05.html","0bcde252e2a32f52d4ee61d69de54c74"],["/posts/9a2f6162.html","564cb05ca29b2e392c75e85cef586f19"],["/posts/9b22a48d.html","3a1340f9d9b0ee55803b8f27225037e3"],["/posts/9cb455b1.html","366e44bd5541202b00151f57155f82a2"],["/posts/9ecdeecc.html","51174a56bb4bdff1cc5a0cefecbf48f0"],["/posts/9efd7701.html","82a0a72f5c1aa9c90972c7442a08b4a7"],["/posts/9f61c1a0.html","a95cd280e8710f9bc9d764a16e5b68c6"],["/posts/a1de710.html","a228b40a8b15412b3b7a02d0d12aac1d"],["/posts/a30eb0cd.html","2c4d56dfc873e23f15f81d2fc2ddda22"],["/posts/a7634b5d.html","4ec1eb5ab8603b1a627308b8275c628c"],["/posts/a8c593b5.html","e8f7be9b28d0ddc6806f0559683fef29"],["/posts/ad0c1efa.html","5f526b394d0afe112a0061ded89c2a82"],["/posts/ada3f440.html","8ee909b6e6aa8c89bd60f873b79145cc"],["/posts/af1807ef.html","a8aeb768e0ace43097528a6c98da9db1"],["/posts/b397bf03.html","23bff28e8dcf706b894df7920c20deee"],["/posts/b497b647.html","36e4671cd66c5b2b8af743d76498cd4c"],["/posts/b4d464b0.html","95a32d67f73088c44b8d1ccb939d7dcf"],["/posts/b5fb773f.html","93f7aac39b527c6b1b86c77667462e33"],["/posts/b8d46b32.html","cf64748f5ff7f62fea80df007bdd1f90"],["/posts/c1b2c6c9.html","e747629e9f7958e91640f53bf89be8b5"],["/posts/c2111cbf.html","a041c9f129668d6d8ee90b4a3fd5d9e7"],["/posts/c316c2e8.html","01e5765c1af621d5d133e483e849bfc7"],["/posts/c43e60b5.html","1b383a236ce150c40370b5c2dcb1895c"],["/posts/c497a412.html","3459b3695beb089bdcfba9353ef43339"],["/posts/c5395ba3.html","d38a3e3b2ba9662812695f70c372f218"],["/posts/c5de299a.html","b801984530de2dd0c714d0a53ceddda8"],["/posts/c70bba9c.html","024e96bba74d28fe85f94d4d366e088b"],["/posts/c797535e.html","bf1e89f8fcf2e0a81ed9bcf3490fe056"],["/posts/c7a62c79.html","ead6dd5ddb4e4cfb1f99b324602aa674"],["/posts/cae2c959.html","45f871d0b5f5b3d16855e4a6839ebbe6"],["/posts/cbebef2b.html","3eccbe97aa2a6dc067b15afdedd7ae66"],["/posts/cc4c0017.html","8fd3dbc4c740fc7a983c7e52725b577f"],["/posts/ce25023e.html","47dc6075e0f7fbd87f22106a6609b003"],["/posts/d2fd4837.html","1b8922fc59c2d28a6a1e903d89eba1d5"],["/posts/d3233cbb.html","5c9b119bccfb00a0ba28326583c12715"],["/posts/d3a745a8.html","bc83239ee93c85908ea210068a451008"],["/posts/d7e940d2.html","ec17dd29f4202d63aa18134875ff5355"],["/posts/dc815d5.html","13657a81bda328dfd010995224095a2e"],["/posts/de25b0be.html","b150ff556c0fb29b3a69a57adf6e7cae"],["/posts/e2623b4e.html","bf2fb0be6a144a05d41b5bdb599ff968"],["/posts/e3ab6ad8.html","8f47284e42e238475c22d50d23c6da12"],["/posts/e5018da6.html","46b8c75e53a10b931b2f024909e694b6"],["/posts/e5963272.html","1dc86a91f8694dfde7f6fe32aeb7373b"],["/posts/e5ef4c3c.html","e4a45b4e1fe09b0c53082ac2cd76f071"],["/posts/e624b065.html","70f3fa8471391ab2777487d57ae6c5d5"],["/posts/e7c703bb.html","2df56c7d5d7c4e365771cef4b614cd61"],["/posts/e8f14b6c.html","6cd709c6ef9638147bd6a0f78c7f2c72"],["/posts/e91abb63.html","a8fdf1cf8444aa60e0bbbf8e6b159837"],["/posts/ea9a8808.html","65e5f2453038b96f09635c36150c1dfb"],["/posts/eb784749.html","6b36f7c6e96810fd73b86bdbc3a92f84"],["/posts/ebaf2232.html","3172ca6796ed651ea444f05e59171180"],["/posts/ed75f185.html","18a976e8ec3d776ec66d47c08e7c454d"],["/posts/ee1ed673.html","3b6b876ff0cf5c20165e2d6dda14288e"],["/posts/f0c3ed61.html","db0bfd519c980b386cd303d09186d0e3"],["/posts/f151ff43.html","015a472f269b69aaf9dcac803310180b"],["/posts/f21e7f84.html","d4ce3720f818ad3557c6d9a26be99dcb"],["/posts/f230b0fd.html","85bd6b1bfb6f20775f3097f0494ec3bb"],["/posts/f28a7877.html","b7eb3254339fb573bc72e8aaca72b4c5"],["/posts/f663d5cc.html","b0e1dd47c02bbec0981544c7b2d566d1"],["/posts/f730ad18.html","6dc4a24e6128c9cdb5a2499d7af1bf1f"],["/posts/fb5d4608.html","7da0782cd1f47bd172e10d10d57c3d2b"],["/posts/fc04d0d4.html","0d07eca97438fd2f0c51523d51212125"],["/sumire/index.html","bafe670cc0e81f7d2b59a40088609019"],["/sw-register.js","ef5261b40cba9e0dd48555ccfbdfd2d2"],["/tags/AKo/index.html","506671f06512a810d5e1cd86f957da6a"],["/tags/APPLE-project/index.html","9f8d2ef4c89abc03021c93dbf63517d4"],["/tags/Ankrache/index.html","cd27b5459490afea43fde61175113bc9"],["/tags/BELL-DA/index.html","7efc43c1db55ef0b4fb3bf0a23f04b95"],["/tags/BL-Game/index.html","99a8d02b435f95bccf4f7a87a90a19a8"],["/tags/Blue-Dahlia-Digital-Creators/index.html","e48ce8804b93b00bfe17cb3ac28ec73b"],["/tags/Blue-Line-Games/index.html","dd192b1356e61eb6e389750c22c2a383"],["/tags/CHUNSOFT/index.html","682a38e032333768cd1660f5431eb0fc"],["/tags/Check＆Stripe/index.html","4a53ca2073d3a1a02565647d8f76373f"],["/tags/Cherry-Pie/index.html","f96702a988318cd09dd6fd09592ef0fd"],["/tags/Circle-Mebius/index.html","cdfb7b3afbe487a356cccd5a368df3e2"],["/tags/CresCENT-BLANK/index.html","922559463a45c20632731a254880fab5"],["/tags/Dopamine-Software/index.html","fe2940661132361bee00c70f4db43c7e"],["/tags/Dos/index.html","5034cb408bf15451ea13e1116dfe8164"],["/tags/Earth-Well/index.html","3115eeae56e6984c3f0dc95c0ffae68f"],["/tags/Forest/index.html","5f6bba4a18f8dbbd918e9e449860e114"],["/tags/HaccaWorks/index.html","c1cda38b35f385adb387e7066fef80a2"],["/tags/Kanon/index.html","ba0f40b1e31276f7802cf1e4f27185e3"],["/tags/MANATSU-8/index.html","af7dcabb8592fd9359baeb11d0827e80"],["/tags/MARINE/index.html","55daf5d4b032647b6c81f9922d86c3c5"],["/tags/MIO/index.html","9498e6f2b431a8cbaeeec055fc1d8150"],["/tags/NAOX/index.html","8a6ca7639b8cfea7604824f26d40e048"],["/tags/Nmyu/index.html","38fc3b8426be96d715f6bb684fb63dbf"],["/tags/O-S-I/index.html","ea8fa047f7fe7c59e4512b51ca56e664"],["/tags/Omegaの視界/index.html","2dd259012056d47a14bdfe2709dde21b"],["/tags/PC88/index.html","e7c3e6e055e409d1ebaed0399b2ba452"],["/tags/PC98/index.html","c6a4c3ab9446baf73f7b549dbb5c99b9"],["/tags/Perpetual-Room/index.html","075463bc880581d6f3a6d5efefce56fa"],["/tags/Pleiades-Company/index.html","1e8b6ab7120d28b6a6b4916236aa0525"],["/tags/Project-Twintail/index.html","680825b3f30e87fa60ef46746766fb93"],["/tags/RIFF-RAFF/index.html","01a70f09466e5958cf69ef2be45bcca3"],["/tags/RPG2000/index.html","ebfde8679b4c6ede76ae058a9e3cb2b5"],["/tags/Reverv/index.html","46e85545919c02114a42d5f7519b59d1"],["/tags/SENTIVE/index.html","5834650712a2ba61cad8e24e31eb502d"],["/tags/Saihate-SOFT/index.html","87497edb70141e22262a8c8462b80bce"],["/tags/Scrubbing/index.html","eb20510cafb068d9b566fb53b8784ecc"],["/tags/Sky-On-R-imaginAtion/index.html","3b9b533ac635a972d76caa3c46f99188"],["/tags/StrayMoon/index.html","eadeb2e869cdb2c9ee7b98b7c161ff24"],["/tags/Studio-Bu-Sa/index.html","84ccb0f294ba7b404de35bb258acd79a"],["/tags/TRANSPARENCY/index.html","e74545d10cef0784b518c2cc06305752"],["/tags/ToHeart/index.html","06c9f0772315fa131a99ea7470f7a8ad"],["/tags/Traumend/index.html","da158a1338d8ca628257f44585abb0e1"],["/tags/Witch/index.html","70e67fcd561e8e410efb9efd1c7484d6"],["/tags/adonis-project/index.html","dacb297ffe6404a8064269eae08e4a5a"],["/tags/capriccio-suite/index.html","0233402bba3d1c5301078b9682bc64eb"],["/tags/flash/index.html","c736b730fd7bf6f01a020d7c939566bc"],["/tags/galgame/index.html","2fc2a8f7e598a2eafd989145e12898d1"],["/tags/galgame/page/2/index.html","24a4a38979c78ff159cf90565f6d5b9f"],["/tags/gal资源/index.html","a2672b4dd7f21aa2adc77e9625795fd5"],["/tags/gal资源/page/2/index.html","d7ca5262d5080d8164e73e89e240694d"],["/tags/gal资源/page/3/index.html","413e8cecd4c80c70cbbd08d37ad9198b"],["/tags/index.html","06f6a06e3fa397eb94d07a44be021dde"],["/tags/m-kz/index.html","35ee85743cb301096c578204c11b6262"],["/tags/purgatory/index.html","eefdca7b79481cfe854eb827ae8bcf3e"],["/tags/rkr/index.html","54bc29519dfbc796365ef95a47457891"],["/tags/team-eye-mask/index.html","13e813005561b9c2b48f127960228df7"],["/tags/ありすくろいつ/index.html","a4ab2f8cf9fa00e02d183d6617a534ea"],["/tags/いつものところ/index.html","8ecb0df58305b87c2aea1437f44e50e6"],["/tags/きつねみみ饅頭/index.html","4997c33e05d9c7c5c12f9449bc3f16c9"],["/tags/ねこねこソフト/index.html","01119639784a646d618359cd778231b4"],["/tags/ねこバナナ/index.html","00602cf723ed79a6e18c614a966b9f04"],["/tags/はちみつくまさん/index.html","3cee267b8715ff5cba11d652c038b2dc"],["/tags/ろりちせ/index.html","704e4ae2ede2b92be323eaba789a8b0c"],["/tags/アイル【チーム・TATU】/index.html","3e6a4e50529c5c5cf04b57999c67b84f"],["/tags/アクアポラリス/index.html","a6e6b8eb6b678d71bb6ee1683125a458"],["/tags/アークシステムワークス/index.html","78c0652a274671a194fb3f8dbb055ad8"],["/tags/ブロッコリー/index.html","36f7f808ccc359f8bd757ae3a7eac94d"],["/tags/乙女/index.html","aba453b572d54dadb19e8a7658b4516d"],["/tags/乙游/index.html","85310d4e5e7cb63cd815c2c6a8f6ea54"],["/tags/停产/index.html","a94d9b14fafd5eac4a116e7f33b5cf74"],["/tags/公告/index.html","223a525464b2a1f2d4983aeb81fd5481"],["/tags/同人/index.html","026870b1b20eb898a51294b2c5fe8c7c"],["/tags/堀井雄二/index.html","bd9822f6bd87025ba70d160e3f9c48ba"],["/tags/外海なおき/index.html","0f9bb213a3b6f92b638791e8a9a90a19"],["/tags/女性向/index.html","254c387b45730de8e3fe06af53feda64"],["/tags/御茶ノ水電子製作所/index.html","510877af3bec324260388db89a2d87e1"],["/tags/月の水/index.html","888a2ba39d92755b7f526ed421a6ea51"],["/tags/桃野衿/index.html","16872fa00ce1b821ba0963c0e165cd31"],["/tags/機械式少女/index.html","9ea2cf4ff391a8b90a6cf9c3ff45ee8b"],["/tags/水仙/index.html","7fa908176b98bc6aaa3519340f9f882b"],["/tags/汉化/index.html","807c73d5148b01d3f4f9fdf743c57405"],["/tags/熊月温泉/index.html","0f194e74bcf6ad0c3a4be1cd177c08e6"],["/tags/片冈智/index.html","ac0be384226d8acd5c424ab6d7f4e198"],["/tags/片岡とも/index.html","ca80f7104fbeb188fa0713d655d8ffc9"],["/tags/牙の刻印制作委員会/index.html","a27eecd46d483f4f3d6458ba349f96e3"],["/tags/牛カルビ定食-FLAT/index.html","94b7b656c5060e4669fd3ade5475b7be"],["/tags/牧尾屋/index.html","d362220727ecf53913975f6854698100"],["/tags/犬茶屋/index.html","6b7a338cdbc0f276074982dd4ec8756e"],["/tags/猫猫社/index.html","3d788d25db492728a16791da95649a57"],["/tags/王宮魔法劇団/index.html","8f87d71817eb214792ebf367ed456874"],["/tags/画集/index.html","13500a6a2b7b64c42e60771769c07e5a"],["/tags/索引/index.html","d16595ae00d06b94b7e5feb4f97e0f3f"],["/tags/缺失/index.html","88ca81eca6499706ab188d029cd4c580"],["/tags/自购/index.html","8028bee52fde9a1f593e9618f3bc0a7b"],["/tags/茶葉☆姫/index.html","03d072813902b421b57942309820f46e"],["/tags/郷愁花屋/index.html","0e7b6f0abe2f6cd78066e63aef37b859"],["/tags/閂夜明/index.html","924254f6bcd490498dfe6c60d6555380"],["/tags/音乐美/index.html","16d5af352f97e1a392d36803af5ac8c3"],["/tags/黒†救/index.html","2015ee44b93f448cf356fc8d77bf0a5f"]];
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
