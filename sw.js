/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","16ef84c2c212800bc667889d080340b4"],["/archives/2024/04/index.html","672eb1d4ae2b2be17ded30da496f946f"],["/archives/2024/index.html","642e16de16203d31ab39ebc616dac3bb"],["/archives/2025/02/index.html","f76a0ed407501ea3e7b3e02831481805"],["/archives/2025/02/page/2/index.html","2570e625bce71e39545bada54485a710"],["/archives/2025/02/page/3/index.html","f31b0effdd7b669d12e37175d4722eda"],["/archives/2025/02/page/4/index.html","b16f65cbe3f0fbb0e056041dd0e1197b"],["/archives/2025/02/page/5/index.html","51edbdc2eeed489579f0a39c8ee42be7"],["/archives/2025/03/index.html","d0237c51a7a485dbf2dc054d3b4d1144"],["/archives/2025/03/page/2/index.html","3cb9f3c22fecedb6b923c7c8f698260b"],["/archives/2025/03/page/3/index.html","8cebe97b50d4a2f8781ad970ce5a4e18"],["/archives/2025/03/page/4/index.html","59779efb1741f2a9c37087fba69d3642"],["/archives/2025/03/page/5/index.html","4671c403b1f8e6d88988f194c013358f"],["/archives/2025/03/page/6/index.html","870e76869e5050bad0323aa9a0134ac4"],["/archives/2025/04/index.html","016973260f9f4280795d04c52945710e"],["/archives/2025/04/page/2/index.html","aa4b74e47e9fc0e4b93c855c81b35a9a"],["/archives/2025/index.html","ceeda3b077d99afb699461da0a808091"],["/archives/2025/page/10/index.html","11dd987842d0ee513dd7e4db7c44c434"],["/archives/2025/page/11/index.html","3ce45f5ffd132289d377ef0e91c2e408"],["/archives/2025/page/12/index.html","bf04ca18abf78c407a8df44d9aa5ca6b"],["/archives/2025/page/13/index.html","c7c76f4f6dd040059e60b4e2a1304feb"],["/archives/2025/page/2/index.html","89113545436e3fea8cf8bfe078c22d40"],["/archives/2025/page/3/index.html","f49013676eb6f0da53b53fbdfaa01bbe"],["/archives/2025/page/4/index.html","d50df9604f0edc436819c86a5b3273f3"],["/archives/2025/page/5/index.html","49fe4860cce00cb8cf471699e1bd0952"],["/archives/2025/page/6/index.html","d3bc76842fd5592c5bc72553020e4d29"],["/archives/2025/page/7/index.html","0ff7d5997852ba071834ad7a0398cf92"],["/archives/2025/page/8/index.html","3e922c0219a2fa881ada9bb3198498f0"],["/archives/2025/page/9/index.html","607f3a890d04191d8942ad257533e7b3"],["/archives/2026/02/index.html","cb92e7a00e9274fe1c07b07c37621b23"],["/archives/2026/index.html","58966573604ce59fd1b39860d52cdf90"],["/archives/2825/04/index.html","a86a2e8739d4b6f3f75fd73f03824e80"],["/archives/2825/index.html","ccf5df378581bfe761751d4533f9502e"],["/archives/2925/01/index.html","e90a9690669c76e8cbe15cacdd5ba5ef"],["/archives/2925/index.html","e4161613e1b85823e6e1ca8dba3e50de"],["/archives/index.html","184f425743c2995dbafb3fe69d68ba30"],["/archives/page/10/index.html","60474e40c278d51873e15f1779318ec0"],["/archives/page/11/index.html","e9c5869ec45b2a2e253046ad8996e6f4"],["/archives/page/12/index.html","592173486b427902a4728ba4523fd382"],["/archives/page/13/index.html","da4c4f0581099e7728c8759d6352e2f8"],["/archives/page/2/index.html","684c7daf8c59a52b833240c1e70ae9d3"],["/archives/page/3/index.html","12645901eb3a8374b33843f7f341bf68"],["/archives/page/4/index.html","64c4fb0837cba2e867dbd69a6b6e42f8"],["/archives/page/5/index.html","509d2bee6319535f200d7b597311eeb2"],["/archives/page/6/index.html","f23f68f0d5f8959fb01a031ef0212e96"],["/archives/page/7/index.html","e2b3d5c10b2a006abb025ccd50b01637"],["/archives/page/8/index.html","7954f8fc54b5b0037ebe5e7ca578a38b"],["/archives/page/9/index.html","66666adfd9bbf1f07024128d0c8207e5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","9a72761d9282dcf8d5fff9a325497f08"],["/categories/galgame/page/2/index.html","977a1d5baefd8b9c422e4dbaac272717"],["/categories/公告/index.html","239fd0388693a97c37191209d2dda87a"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","773908ab751932d85c1d80d76515dd75"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","b2b03d621474a834b754d8b9ba875dae"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","f429d377c10539b03d8b17f4b0f76cff"],["/page/10/index.html","a613142676c4ef314fc74a948d3c9aa5"],["/page/11/index.html","1d4085758a9e230fea0d6624c66f19ad"],["/page/12/index.html","01fceca72cb8bd0895d39fcfe4232589"],["/page/13/index.html","611587ba81471f93eaa297dee3c866d0"],["/page/2/index.html","e6ec79e8921496a2dcbee68a48ed57a8"],["/page/3/index.html","8bd1bf49168f99b22465c9e8e8b30289"],["/page/4/index.html","6e678100c5af39b11c59261cc806f73b"],["/page/5/index.html","89868223c365a51a8c1146c2fa2dfc5e"],["/page/6/index.html","6d93ffaa44cf4f24c2a2e598eb6016d8"],["/page/7/index.html","5197356c34ae0bbc5294c0310274f99f"],["/page/8/index.html","e067fe0a0a99c8e990230b500a198df7"],["/page/9/index.html","386d6d48ac2099df19241724ba464dc8"],["/posts/10c9dd98.html","c45a043a3bad81aba649d59ac457fe33"],["/posts/1295b569.html","eda137aa12e0dfb29df4dee3a65baa16"],["/posts/1370342.html","74952b4a6bd88309754eceec9c37e4c1"],["/posts/15ef14c2.html","e97a04af89e6652a386c6a98e8a97cb2"],["/posts/15f3959d.html","6807c32d6784d61d7748c5c5f0971bda"],["/posts/18ab785d.html","c10cbe73720e53bc6b89f08939f18c26"],["/posts/1d59b71f.html","50da1112cdad83c9612bed1a35324d99"],["/posts/20b3f3a4.html","6aa9f9378d4f36fe9dc2715ba5838f66"],["/posts/245f1c7d.html","7a6ef0827bfa91d87cd00bb60a179bc4"],["/posts/252658f.html","ebc4a51c41ed856cc52b7b66f0644954"],["/posts/28397adc.html","2a031fd9f9373ac57a3dbf521a82c416"],["/posts/2ad07f54.html","f060b68c3c198fcce71e11dd6a5aaa77"],["/posts/2b38bce0.html","22c3d84aacfce1253fec781164e05050"],["/posts/2c0a6836.html","4bb221035ca9c462a5a7c57e0bad0dca"],["/posts/2ce39bcc.html","ed310e6f634e712e1ccd44266f143df6"],["/posts/2cf620f0.html","2cae77036aab306864b0317a70bc57a7"],["/posts/2e30fd6d.html","5292f801137a67929f72421b1d08e8d7"],["/posts/30a413ad.html","fccf97b79dad3125d560e79381a5b5cf"],["/posts/34292736.html","a3c5e5b0a925a5b2b73a219f3cc5cb14"],["/posts/3468cbe.html","874092f6f4846a13721545587a2c10d5"],["/posts/39176dc0.html","a876c5fb84e64c68c81daa254d13056f"],["/posts/3e118dbf.html","e56feb1f41f0fc69b233043fb0805e87"],["/posts/3f7d823a.html","bfae2a0f2f3fac232f7cb4dda4667534"],["/posts/3f978819.html","019ac3e87048a1ddaacb3060b2774033"],["/posts/43945723.html","4c50c7970abbc89511048063cf9ddbe8"],["/posts/44124a6b.html","85a7f3b9f31742a9d4ab75f9de046315"],["/posts/47abb61d.html","1786c1932161d2508278ebdc5dd1f9e1"],["/posts/4996478a.html","5dc011eb25c3f2bc1d198910d24f99ed"],["/posts/4b689be3.html","5964292d88716ea1fb07bd4dd7628e2a"],["/posts/4cf8423f.html","b85a06f6231254f6e7ad070c8ac1c098"],["/posts/4dcf85c.html","9112a3d8a0d4461f01a3f038e96a05ac"],["/posts/500cd322.html","0b00bbc37227383eb986d9c3696b2949"],["/posts/51c9b1ff.html","b939f834ed77fe51fb986aacf2d93a4e"],["/posts/52b5b3c6.html","06dda318836d2f89875825ed31ec1564"],["/posts/54f496ad.html","2c35c45007427c71503dbeab948be6a4"],["/posts/558e1f30.html","b83bbad5b3c635ae6faacfc1ac3463b0"],["/posts/5d8bea92.html","7aed92bf62c2bdbcd5245abd97070d30"],["/posts/5f6e0c59.html","0f827a33f32638472d1e7162ad8759b0"],["/posts/61a63a84.html","02455a59912315a9e55825f0cc7935dc"],["/posts/625ab7bf.html","a3dfc9ed441238f34091a791f15d9465"],["/posts/6336a2f9.html","802179091b6d27ad5219a779064e86a9"],["/posts/6432d61a.html","d0d1f5df2d4179beda7983c6ccabcfd7"],["/posts/6515f032.html","9d1d6bec85bac00f624852afdc04f21c"],["/posts/6720ccdd.html","2f119188717e22d985e15d6b3c88258c"],["/posts/6a4b5ac8.html","199efa017a65729aad6ebccfc35833a8"],["/posts/6aa4177c.html","f409aa63708df1692dc4ac2158d18a0b"],["/posts/6b15f81f.html","58713da6e7bb834457e2810ecb1cc6b9"],["/posts/71131d34.html","96791c6801c1baa5aeef9eae49653952"],["/posts/742fd48d.html","b38be78e180074cdad070f98b2e91383"],["/posts/78a8a8d3.html","193a35ce67a0e6b1d26f58c69cd78e25"],["/posts/7a5ef3d0.html","e2b329d2792d93616eb1a03f5de9bfc2"],["/posts/7b41e1ac.html","80f951b74c38306ea5279cfcb8e1b5f3"],["/posts/7b51011d.html","5653852be05b8266e16e8e42aa56b493"],["/posts/7e3aa3e2.html","62dd626ebb6c9b50f21ca1f525442162"],["/posts/80fe2691.html","dc06eb433538072279e7f9ae0710e010"],["/posts/81ac52e9.html","6eabd9a6abe7b791fc4451549af60f78"],["/posts/82332d11.html","8ba896e87057969d89311cc6ed6843ff"],["/posts/8486f6f9.html","38a2e3f491778c815b808683c36897e2"],["/posts/849b40f8.html","e0bd8c914b565d63b935ce4e84e359e8"],["/posts/85c51d68.html","980cf4c8f8bd379654f042c0bc6320a4"],["/posts/86a6c500.html","f6811397dfd3611fdfdbd8147e654f84"],["/posts/886f8d3.html","1ae0751768fefe4ef88ab60bcf5a2f80"],["/posts/8a7cba10.html","e77d27247a6602e48a2ac489de8e726f"],["/posts/8ac11b41.html","82185074958db8cb0decc90cb04ed900"],["/posts/8dd520d9.html","f1783ae732c37bc8ce87056f1bbe7da0"],["/posts/8f555654.html","368f1909229821587e266715f78a51a9"],["/posts/92a980c2.html","e6a4316eba0254a28e606a3a68f368a7"],["/posts/92ce16.html","53166458bddf29fbf1944efc08491f0d"],["/posts/93e9943b.html","ff289b05ef598815bbaf0c968ee305e6"],["/posts/94d3c794.html","e32684e8c8695687d1137d9687285d2e"],["/posts/97f50eea.html","a38b7d78ad36cc3b5a6fd5b2a8b05427"],["/posts/97fca8be.html","118c266d4392ef24305f7896150032a2"],["/posts/98662d05.html","87040ae57546f060a6395f6f139bed52"],["/posts/9a2f6162.html","7c6b18152081045aebe0913db21713c3"],["/posts/9b22a48d.html","16cb02ea35fa68fb3f583736412f938f"],["/posts/9cb455b1.html","1303eb71d4d1574e6759b8d6b8e99498"],["/posts/9ecdeecc.html","7098cc77a4cd996f6fd41f92d9a2c84f"],["/posts/9efd7701.html","b7d2255efdfe4d8d9629cfa0f0da0ac8"],["/posts/9f61c1a0.html","263757f8a8011b58e74fdb2b6435d152"],["/posts/a1de710.html","f4961798aff7903dd764b48bfc9ee6e3"],["/posts/a30eb0cd.html","e9a3b68226cded8cc5434b90ef8ec7bb"],["/posts/ad0c1efa.html","9f1ff9c7d02fb2ff7725ed10775c7ebc"],["/posts/ada3f440.html","ae2eaeb34d7b60c8270e7c965ad2ae1f"],["/posts/af1807ef.html","9a684ca54585763e469c5d6c618c2dea"],["/posts/b497b647.html","c4b3fa26232a2cb8a6b7a226e63dd200"],["/posts/b4d464b0.html","2ef506dfec32d67097ad25ff6438e28f"],["/posts/b5fb773f.html","d5428130e743623564cc367ae3757ee5"],["/posts/b8d46b32.html","de6675c9e816682e4bb3a9a403c5043e"],["/posts/c1b2c6c9.html","c8e6414fa1f29aace65cc5b0c3bdc85d"],["/posts/c2111cbf.html","6d26d347ed2da5ae9fc91555efdeca85"],["/posts/c316c2e8.html","0ef9c7455bfc34ac6357293635a53945"],["/posts/c43e60b5.html","92e9efffa2b8aca35ad0d6815a1e6b7d"],["/posts/c497a412.html","1c22a7e4904f1bdd2875fd360eb02525"],["/posts/c5395ba3.html","942fb6fa78b8d3fe20295357c30159cd"],["/posts/c5de299a.html","7ed1ab7f970ec6eef039375cfddae272"],["/posts/c70bba9c.html","8896b905386fb052c93f686e503eb015"],["/posts/c797535e.html","9c49e2d1d5479fcaa80d8045b7e7c885"],["/posts/c7a62c79.html","20557b756d453928246622b5e3b08716"],["/posts/cae2c959.html","82bfa336b68d9fe4f049b3d0fd4cd870"],["/posts/cbebef2b.html","b53be2febb04bb8f29ff592a35e8953c"],["/posts/cc4c0017.html","25729acbe2d3f5b52893bc481ae6419d"],["/posts/ce25023e.html","8628650ba2b764d046360bfaef713690"],["/posts/d2fd4837.html","d7c8657bcdbd471b1b7810276a080a52"],["/posts/d3233cbb.html","e524eab6b47971e4800d319bd45cf2ac"],["/posts/d3a745a8.html","b1d1a60eda93d8fb80482323b02e448b"],["/posts/d7e940d2.html","42461ad054354309663ebeb09700b07b"],["/posts/dc815d5.html","d6a507ffa467a1422e862c653e6ff4cf"],["/posts/de25b0be.html","db836a7a14c73a39933c7684bfe4bde7"],["/posts/e2623b4e.html","a3e37342666c98588f8396c55ead28b1"],["/posts/e3ab6ad8.html","3a8eddb4b0fa07efc749599aab39ca11"],["/posts/e5018da6.html","edc92b4df308c745ccb1b31511c5f6e5"],["/posts/e5963272.html","479881262029d5f15b935d5026e96bbd"],["/posts/e624b065.html","f257fbb1211f93ea1b34c2755450ce2a"],["/posts/e7c703bb.html","11eafcd1fd847b00a0227f20eb27f6e7"],["/posts/e8f14b6c.html","37b98d3757bada7b178c697bba15799f"],["/posts/e91abb63.html","0b411ea4698671e55d31998015738def"],["/posts/ea9a8808.html","5461b216a36742b98bdc0fb3e8a7a164"],["/posts/eb784749.html","88d9cd991c5b697c6394a6345224a971"],["/posts/ebaf2232.html","54fae39b4029a04388e3c11883f80b66"],["/posts/ee1ed673.html","71e44acd6127c039fe9338481e711ec2"],["/posts/f0c3ed61.html","dada7ee2fd6de67c4068bbf3e9010dea"],["/posts/f151ff43.html","9c0b75b2e5097e69eaa968bed58767a0"],["/posts/f21e7f84.html","a694f2a4515e525a3a88e36601ff404a"],["/posts/f230b0fd.html","857c387f279e3ed1bb207f2a91cbf896"],["/posts/f663d5cc.html","5f90e37cbce53faf04ff14bd68292837"],["/posts/f730ad18.html","d250d284492de51f5b28db7ea211a7f9"],["/posts/fc04d0d4.html","f3dc1bff1a81ec19c9ef49904a3a6f90"],["/sumire/index.html","74c8d559c6da0d62c27e1f51b5ec18b2"],["/sw-register.js","b24ae892001f668d6fea03ba35daa2e8"],["/tags/APPLE-project/index.html","6ea6a1541657c62b400661a253da474c"],["/tags/BELL-DA/index.html","b5bf93243aedbefcaab01744275242ed"],["/tags/BL-Game/index.html","eade30e16b978788a8689a1ca9eb94c9"],["/tags/Blue-Dahlia-Digital-Creators/index.html","1f6811d615a87be34ddfbd1529b81c38"],["/tags/CHUNSOFT/index.html","7ddcce76f29b3e5c7fabbbd3341efbd2"],["/tags/Check＆Stripe/index.html","c6089898619c19d0dc91548291c812cd"],["/tags/Cherry-Pie/index.html","e055a36c027d4402d82e169dd2186c6d"],["/tags/Circle-Mebius/index.html","fef239d0200dabc643c1e2790dcf261a"],["/tags/CresCENT-BLANK/index.html","ba3fcfad014c9385d7b210838054f607"],["/tags/Dopamine-Software/index.html","36b580bfd1cac9e74f28ba83a05318c9"],["/tags/Dos/index.html","c007ec707f0b795392c7d21fd11f21f3"],["/tags/Earth-Well/index.html","3883abbb168699ed48fc6116c83d4aac"],["/tags/Forest/index.html","34458aac6bc3609d9128e3156eba5e95"],["/tags/HaccaWorks/index.html","d8b84a8328ca3b0c1d0bc15a56595f4d"],["/tags/Kanon/index.html","6f99b47ee9973c9a9666540762043a06"],["/tags/MANATSU-8/index.html","b5e5d05b3af862bd0341f11d6ed91ce4"],["/tags/MARINE/index.html","eb9a6046ab3d042861e0585b9f3ef5b8"],["/tags/MIO/index.html","79755282a79b57546e944cd82e74f4e2"],["/tags/NAOX/index.html","f53f8665336c2ea2d7f9ff4a6adee51f"],["/tags/Nmyu/index.html","897bd8ca495f7a9cf7325e74f36db392"],["/tags/O-S-I/index.html","fa673f69a1bfb1afffdab49bbb19771a"],["/tags/Omegaの視界/index.html","2a41e763629c87405bef7b5c50908433"],["/tags/PC88/index.html","2803fb639d69bacc9f9dbc88b4390f55"],["/tags/PC98/index.html","158a5f47ae8f59c719e36e82bebe3ef9"],["/tags/Perpetual-Room/index.html","5dbd600c42fb53ca8497966b02008a9d"],["/tags/Pleiades-Company/index.html","618566949c41a17a2a015c3d47d83149"],["/tags/Project-Twintail/index.html","8c168e3a7205f31b044207d0e93474f0"],["/tags/RIFF-RAFF/index.html","4775fec890bd965ccff0aa669f34c647"],["/tags/Reverv/index.html","e8cafa910175d8f244501a92c01d5c85"],["/tags/SENTIVE/index.html","8de8f10f907f7ecf505c5de644dc6b4a"],["/tags/Saihate-SOFT/index.html","548c609c5ba3cf3599ef5d1d30061a49"],["/tags/Scrubbing/index.html","7f2311da9f8ad6a76ca0b9342a5484f8"],["/tags/Sky-On-R-imaginAtion/index.html","016d738cb9d4bb2f136ae86b7e36fcd1"],["/tags/StrayMoon/index.html","75cf82915c5b5f6766edd7e585af9130"],["/tags/Studio-Bu-Sa/index.html","61d4603e2de86b576c8063116a2109f0"],["/tags/TRANSPARENCY/index.html","4dbe4c02bc4e3192a0292dd688af65b0"],["/tags/ToHeart/index.html","8f43a8e041acd773649ecef3217caf21"],["/tags/Traumend/index.html","a02e97ca094b9c0fe04fee1a65304ba9"],["/tags/Witch/index.html","bd4426328062715de53d65cd0271b3b5"],["/tags/adonis-project/index.html","bc3b7de0ad642c83e1624dab430b9be3"],["/tags/capriccio-suite/index.html","428352452f9bfec9e76a75531c702e83"],["/tags/flash/index.html","83d90928762b31204e08876ddc3807eb"],["/tags/galgame/index.html","88af500a18a828e7f9ca916cace2b5ed"],["/tags/galgame/page/2/index.html","5ee835dc22398d642b23daddf8b0e835"],["/tags/gal资源/index.html","80cd51ac52bfec7bf7f3fc45511bd8c7"],["/tags/gal资源/page/2/index.html","d7bbf9fe0ef0b0d3817a2bc9cf1058dd"],["/tags/gal资源/page/3/index.html","72ce1efa5805401cc04a123be4f1100f"],["/tags/index.html","a5b1a4ff9ad17136a2bb3dba917d2f16"],["/tags/rkr/index.html","414d89bdff1265fe25d029e13bf293c3"],["/tags/team-eye-mask/index.html","3892ab03c7b390ee002144db5a2d2c01"],["/tags/ありすくろいつ/index.html","2ed49a0811099de5975b8d63c4becdb0"],["/tags/いつものところ/index.html","94c55232907763017d9b9287bd961a3b"],["/tags/きつねみみ饅頭/index.html","4d59a3d373b980f157bcee17854d320b"],["/tags/ねこねこソフト/index.html","4ef22734aa1cf26670c6931ce5f761c4"],["/tags/ねこバナナ/index.html","8d04b7b5a8404e21281cf4161079c43a"],["/tags/はちみつくまさん/index.html","0ce53cfb555f9c3dfe81b836da65962b"],["/tags/ろりちせ/index.html","6469cf6014b0cde310302026a728dc5d"],["/tags/アイル【チーム・TATU】/index.html","5779a77bbee45e9bc35c55b9c6072768"],["/tags/アークシステムワークス/index.html","b9293cc14fb64dbd046a2bbf63ae19e0"],["/tags/ブロッコリー/index.html","9ea6fc694e26a8a4a237095eeb25ea88"],["/tags/乙女/index.html","fca4bbb839cb45a7e54a313bf62e9ac2"],["/tags/乙游/index.html","f5f8f84f6be9fd4fabeaeb50b2de65f8"],["/tags/停产/index.html","691bbc612106ef9f20390526f2c80b71"],["/tags/公告/index.html","a12bf29af7b2018a59eb8fd4d0d19ab5"],["/tags/同人/index.html","47ffdc3c9a7397c3cd198a77c4312533"],["/tags/堀井雄二/index.html","725861610cc709040a9161d8b4ad22bd"],["/tags/外海なおき/index.html","89e9fbce9d2d5e7af7ea3c063787948a"],["/tags/女性向/index.html","af188037d802ecdcb4583b4efac7e020"],["/tags/桃野衿/index.html","63c7d8c6a4baa0d0ac5bddf985e7826d"],["/tags/機械式少女/index.html","431f8d31a3c41afe33c9455bc9f3fb5f"],["/tags/水仙/index.html","3933f0b5873c1bea09ff5e73c2b68e5d"],["/tags/汉化/index.html","9bb153a2cff56343becfaced9b879cd2"],["/tags/片冈智/index.html","9f2644f570b15df5714345b09f5482cd"],["/tags/片岡とも/index.html","96ea3b8e038b3f4b35d59044c90811fd"],["/tags/牙の刻印制作委員会/index.html","a1a4b4bf23cfd729c73e2f4e87851c43"],["/tags/牛カルビ定食-FLAT/index.html","314e29b69f2dd569ae13727cfeb4df54"],["/tags/牧尾屋/index.html","d9a793027fa64c12885e4cd83cec3c98"],["/tags/犬茶屋/index.html","a37e74f8fce9961f53acfd5e22a15e26"],["/tags/猫猫社/index.html","316471f32c5f5b8d42d09ef9038fb60d"],["/tags/王宮魔法劇団/index.html","3ba432c7e3d8156847906a723ec0f268"],["/tags/画集/index.html","81b610ec09fc7dc4e1f92f926ac5123d"],["/tags/索引/index.html","483c38ee283aef9f5ed99a7861027dd0"],["/tags/缺失/index.html","47ce1b4afa808ba74ed1a0bb0266b1cb"],["/tags/自购/index.html","af71aa505cf1f8c8c29fbc64a37ee97c"],["/tags/茶葉☆姫/index.html","9b5cc3ae82eef8039e700fa9a117e3b4"],["/tags/郷愁花屋/index.html","f962eb4a95eb2aa13d9a12bf2662d576"],["/tags/閂夜明/index.html","d90f8844f23f41a3a21459c58b6f630f"],["/tags/音乐美/index.html","e8b664f186516ef645cd398f9728db25"],["/tags/黒†救/index.html","2216ad8181fa1be01a7eb561ee067106"]];
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
