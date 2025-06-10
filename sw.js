/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c6a36b4ec3218a8835a4de6de04f4bb0"],["/archives/2024/04/index.html","a40ae0503a15ec3215f4ef728941a571"],["/archives/2024/index.html","bee0c302dd64b57f14413ff5f8e0d300"],["/archives/2025/02/index.html","c909b9af2f99a57c8b310bbba225357f"],["/archives/2025/02/page/2/index.html","9d982441928854c87eca4915a397785f"],["/archives/2025/02/page/3/index.html","979c9f4d8d9a05c4c712c491db8ec0cd"],["/archives/2025/02/page/4/index.html","77ccca63e542c1f2df865cf1c55174b5"],["/archives/2025/02/page/5/index.html","0133d249c8d1fe2cc604cf2261f561c3"],["/archives/2025/03/index.html","1212167a443feae67359646c591c65d4"],["/archives/2025/03/page/2/index.html","edb60a1aa7360b0b7fc4c6a32ddb0644"],["/archives/2025/03/page/3/index.html","c09736154ce08e05cb5facb1bf9c0849"],["/archives/2025/03/page/4/index.html","fc961643209ebd00ea26e44ce4fdcc7d"],["/archives/2025/03/page/5/index.html","8f852ef8f09875373bedecef1e887f4d"],["/archives/2025/03/page/6/index.html","110fcede016ba86d532732f5bc2af82c"],["/archives/2025/04/index.html","929862524a6c9f2461c03824944a592c"],["/archives/2025/04/page/2/index.html","cab454e9266765161464833b06ab59b3"],["/archives/2025/04/page/3/index.html","946af6ac4fede40e7633f83afce0f7e6"],["/archives/2025/05/index.html","26bba3621ca4a550e47136088bd583e1"],["/archives/2025/06/index.html","553021ad76ccf799169f9479489cf88a"],["/archives/2025/index.html","290a1b281e772fcd9af94ebc05ed907c"],["/archives/2025/page/10/index.html","2e2ab11169e95f2813ca39142281b54b"],["/archives/2025/page/11/index.html","3f5857a8f1245941ddfa064c67a706b3"],["/archives/2025/page/12/index.html","6511de79866e1653e2abcc9fa394a285"],["/archives/2025/page/13/index.html","61158cc94ca4d0967d389589d74df6f5"],["/archives/2025/page/14/index.html","a5df5fd04968d13fc1bab2ce4b148a7f"],["/archives/2025/page/15/index.html","7f0e22a308f854d95b0d3bf47006c1d9"],["/archives/2025/page/2/index.html","13aac342cce4acb47ffa7c3ba41ab4b7"],["/archives/2025/page/3/index.html","08456de6e9e4f278633a06b32866e445"],["/archives/2025/page/4/index.html","b90ec8f25418ccfab50d45be309cc994"],["/archives/2025/page/5/index.html","fc58c62b8b057bb0b34aa932b1a1ef46"],["/archives/2025/page/6/index.html","d6ccfa00712f77947aa6a73de89b6453"],["/archives/2025/page/7/index.html","e1dce63879279cfeeb22daa8dbf3ee42"],["/archives/2025/page/8/index.html","33b33b744810cb922c807c3050d0cc02"],["/archives/2025/page/9/index.html","ffd9c118dd172690ac029603a58bc956"],["/archives/2026/02/index.html","f5c44231b04798a991b93c0770776245"],["/archives/2026/index.html","947f56a78f60b52fba489b2482438d97"],["/archives/2825/04/index.html","e1f52bb56ec4f0967b344e8c58436c3b"],["/archives/2825/index.html","7e5583581ae67c0a728feb518c22607b"],["/archives/2925/01/index.html","b7766b6596f10950ec9fd1f79c724f4f"],["/archives/2925/index.html","b2ad0d8e613d47f7c4e83f96768dc8bf"],["/archives/index.html","9825215e5e129a6b229b6d70a9a66d89"],["/archives/page/10/index.html","e7f4dbbb41b580eb2745ea971fe2fdda"],["/archives/page/11/index.html","8b9b6ecbd0784bf3128339c6d9cd79f5"],["/archives/page/12/index.html","928bffe31647ea93d216750f54bf02d1"],["/archives/page/13/index.html","00e1bd472526243f72ec3bd87502586d"],["/archives/page/14/index.html","079f903e5e6da8ddda61962fa9ec0349"],["/archives/page/15/index.html","91354b8feeb6f1e1deb8f01251bfd1eb"],["/archives/page/2/index.html","c670f09503ed11de414c46790051aecf"],["/archives/page/3/index.html","eae82356546196f4616b5c17eaf1beff"],["/archives/page/4/index.html","1b5197c7296a052c1e9e58687960a484"],["/archives/page/5/index.html","59e825aa438ade94dbc6fbfcb23d6cdb"],["/archives/page/6/index.html","5cd7a5ef50a80d15aaeb77fed2a9a6f2"],["/archives/page/7/index.html","ce08129cff7b4492b6b6cab459126ea0"],["/archives/page/8/index.html","282e67688c090baf296a18c2d4f1e41d"],["/archives/page/9/index.html","bf0806d9382ed58ee07e9b226acd397c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","a45dd7c407502f300098da0901d8237f"],["/categories/galgame/page/2/index.html","42fefb65798cda04b8af7fdd0caeb1b8"],["/categories/公告/index.html","d4adaf9e8fb0e66ef15037ea59664fb8"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","4553901dba5e776806fe716de860ad73"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","b7f4c028859c8b5c8f7ee241af394b78"],["/page/10/index.html","9353ec375a8715a5858eb812110407da"],["/page/11/index.html","48e0c6f2f04d00023ea2b82d3d9d0838"],["/page/12/index.html","fda2cc6821d5110f4eadfb51d4af23a3"],["/page/13/index.html","51c943b47038d292810ad346bae9922f"],["/page/14/index.html","e7e981cde17d1e4db87dc3f52001772e"],["/page/15/index.html","a0b575e759803320706f4d3e1d86092a"],["/page/2/index.html","a7ea7c83235df84357b4a85b6199addb"],["/page/3/index.html","a7d6b39a4d125ff51772358fe3eb8785"],["/page/4/index.html","661684d84f11255bff61a6f88de5cc45"],["/page/5/index.html","3e24ceb9dacdd4e7d47c6c8b0baed2d0"],["/page/6/index.html","084a1bc5f442ce90282851fabd266850"],["/page/7/index.html","fe5a91584860500066b10706ac4b7264"],["/page/8/index.html","47e105cac650ea1021b31dd849bd306e"],["/page/9/index.html","db4db02012d48c5c8d02577e5a77074f"],["/posts/10c9dd98.html","e73a1bc06d9363d3e3e3c9cc50d6b4e6"],["/posts/126ebb99.html","5600140fe6e3b122b4c55c6cbcf04124"],["/posts/1295b569.html","8b89fd4eeec8fe9bb705938d1707fe03"],["/posts/1370342.html","5351e42055a3992816cfce01737b5ae6"],["/posts/15ef14c2.html","35827168dfa0a6bbdbb27bd178252c8b"],["/posts/15f3959d.html","225217e6e8ddf460ff3437c56f2076cd"],["/posts/18ab785d.html","d58d894968c5b72f943c5fd27c7d7df8"],["/posts/1d59b71f.html","ecef4f3ae365a60af40a1af2c07bf9c4"],["/posts/20b3f3a4.html","3fbbae5d510f5cc669e9142b22c997da"],["/posts/245f1c7d.html","25ebef9760c250cfe13f6927fad7b875"],["/posts/252658f.html","8ce8175713dee94788cfc865ea58c7a0"],["/posts/28397adc.html","0ddb3a37a44678bb46fefeea11a28563"],["/posts/2ad07f54.html","e0385f2dd9959cdbba3f97cbed57121a"],["/posts/2b38bce0.html","9d577202cd7daf2ce68972b12ea91ede"],["/posts/2c0a6836.html","5600f0b25c97dc5a7f69bd999ae400f7"],["/posts/2ce39bcc.html","12ca73a4ef47b33f8126e03ee12ead07"],["/posts/2cf620f0.html","d8a7051e47a6ee913840d1ed090c442c"],["/posts/2e30fd6d.html","4fbb34ca8b13ec3a0912d3616a092c51"],["/posts/30a413ad.html","9ba949126f6dcbcc9f5c52fd086826f3"],["/posts/34292736.html","4e9e49fbbc5a53f073f2f37f82e9dcd4"],["/posts/3468cbe.html","ac82127e7fe20bde569fca21cc317cd4"],["/posts/39176dc0.html","d82476917f108a360da7270220b8bc65"],["/posts/3be6a165.html","d092a3177de60a0d36db95c511c6535e"],["/posts/3daf73b4.html","af2d50967c3c7ef8359b374a2ac2267a"],["/posts/3e118dbf.html","e8355b2d99ec38a2ddca6c7a6b4d59fe"],["/posts/3f7d823a.html","fa1d63c85ebf45e6a0ab5a9dd8ed2f3c"],["/posts/3f978819.html","2658cc9ffa3bcfd85681340fbee10426"],["/posts/41dac80e.html","663fdabdafc687dacabe9d7033d45e20"],["/posts/43945723.html","bde1fa71a3789ddd4e9e86bdb0e53f25"],["/posts/44124a6b.html","1e6cb10e53e19d753b431551e2f9560a"],["/posts/476a3006.html","8f5fe8d96fe5f558950d6dca24480df6"],["/posts/47abb61d.html","0717e5bdb7cbfc30c092fe96ac581115"],["/posts/4996478a.html","b843c5f0d9b3080ab7cfa6da9d083fce"],["/posts/4b689be3.html","ee0a3634451c1ffe20470373cb0d4a70"],["/posts/4cf8423f.html","c1477884752f11c4fe38bfac73803493"],["/posts/4dcf85c.html","9acab52c7e86b40a679854e9c984d6ad"],["/posts/500cd322.html","14b7c49af718a52af8b2ad302996ddfa"],["/posts/51c9b1ff.html","4ea24240293a9c47cb55d1df00f80fe0"],["/posts/51ce68e8.html","7932517c13eae96401f3423a4d1dc362"],["/posts/52b5b3c6.html","df2c4155d9f33a984bc0962b5d4c9461"],["/posts/54f496ad.html","dcc4e8292d73063cfaa9f1d78326baef"],["/posts/558e1f30.html","787b91b381f1670ebf8243703bc23bc9"],["/posts/5d8bea92.html","86709ebc87030cf6e585f24c84398ab1"],["/posts/5f6e0c59.html","a8cefc50a0015b07a05a5180fcf1c2b2"],["/posts/61a63a84.html","d6107182319f109f70eb4c565eaa0307"],["/posts/625ab7bf.html","b268f1beb10590b3e15cdcdd765ef314"],["/posts/6336a2f9.html","0d74b42fa2754fd51bc794c05a853f89"],["/posts/6432d61a.html","37473ae86be8c69108d2e96b359fd371"],["/posts/6515f032.html","2a422b422c2e4d2ccf751d36abb88af6"],["/posts/6720ccdd.html","c40a0b5c9795fb51a78756ec0d19da28"],["/posts/6a4b5ac8.html","d2ab9368a163a85db1798ee817156849"],["/posts/6aa4177c.html","3da12c1cdedb5898f90efa1f10912589"],["/posts/6b15f81f.html","e967a3858a9d9cddc8a7978304ae9e9d"],["/posts/71131d34.html","a50aedf05702181ec370b8e2b5a8d8ac"],["/posts/742fd48d.html","3bfe52e450e0842c4145fd0f95711017"],["/posts/78a8a8d3.html","80ebc1b5912b3f0fdb4a484c69c9411e"],["/posts/7a5ef3d0.html","0061bd6d6ae162f3b86efb1636f1af94"],["/posts/7b41e1ac.html","545d5c94aa887a8f095039b6156f301f"],["/posts/7b51011d.html","e13aed7c6181a9f92ea5d61631aa761e"],["/posts/7e3aa3e2.html","18f200ec573b20f31cad0356393fcb27"],["/posts/80fe2691.html","c1000ea098c2c63d0eac175870e1e910"],["/posts/81ac52e9.html","1b06a022d0b3da1e3ccf59d7d3c3577a"],["/posts/82332d11.html","fa6c935793a0ad0cf48e13ea8fce5d1b"],["/posts/8486f6f9.html","a450046c562f2ecdfc821ee8558e9983"],["/posts/849b40f8.html","c70ef3e176a8a6e77e8e0b6495392ce2"],["/posts/85c51d68.html","535fa770479aa8fb4b34db817458c633"],["/posts/86a6c500.html","190b85b1fe6bca553dc244468202bacf"],["/posts/886f8d3.html","87febfb2606cc29102eac425a1f7ba0c"],["/posts/8a7cba10.html","a3035044c2b8e4f3591f730064aeed18"],["/posts/8ac11b41.html","c00aa5e6d16c12d178e5b713ff414579"],["/posts/8c3f2fd8.html","ad0041970d1581d2885119205d5ed006"],["/posts/8dd520d9.html","651d89f82ccc48aa0d5972cc79c8337c"],["/posts/8f555654.html","f34c8d372c92174558ba45d83887b1bf"],["/posts/92a980c2.html","77881a524ab593fd070cf114e49dd99f"],["/posts/92ce16.html","33e2d5972da6b9604ad701a6436daa34"],["/posts/93e9943b.html","5b31f3acf108cdf743aed4126502eccc"],["/posts/94d3c794.html","4a244345719a1a0b28483acbb3c02521"],["/posts/9606c2fe.html","27946c10650cb92681250d3ec3b56561"],["/posts/96b281f2.html","110f91857d6146fc42182931da51add9"],["/posts/97f50eea.html","3f2bfbcd1ce24c455e7c4eef44832e24"],["/posts/97fca8be.html","470de5182542df5fce7a32e4acdc901d"],["/posts/98662d05.html","4ad56ff559af058f46dcb6ab10c7e930"],["/posts/98ef47c3.html","49b7de052a17eebc1b745916a72ec961"],["/posts/9a2f6162.html","2b095a713fd2d367a9b131911988e4f0"],["/posts/9b22a48d.html","87c9f25604dfadc194c37104b3bf417a"],["/posts/9cb455b1.html","d0f1ad900bf650cf724186d5cfd46171"],["/posts/9ecdeecc.html","66d4593a79b894f613ef825bc6e5af65"],["/posts/9efd7701.html","843ce2930d65767974438675d856afac"],["/posts/9f61c1a0.html","8ad9cb3cf11f3f3daf757ca55ad873e7"],["/posts/a1de710.html","f44252d65447dd31466357ee0b80bed0"],["/posts/a30eb0cd.html","a97d7a9a0c43c21397bb780c6c4e9801"],["/posts/a72f71c2.html","2fdf8c1a171f286fd128b49bebd9e6a9"],["/posts/a7634b5d.html","6215116da9713918fe9df975703305b7"],["/posts/a8c593b5.html","89c13e43ef5f368a034564125ce67750"],["/posts/ad0c1efa.html","ca4a668173a65cd52cea78bf0818d88c"],["/posts/ada3f440.html","ac45ad2bbe0d6249d50cccbdeb2afbfc"],["/posts/af1807ef.html","0119a1f143feb4d73afd386b1872f16c"],["/posts/b397bf03.html","381f35b008772268513bafed3003ed59"],["/posts/b497b647.html","9cd2469d32f649132067ac000c16cb4c"],["/posts/b4d464b0.html","40ffc2ddb81ae202bdf6eda0086ad3de"],["/posts/b5fb773f.html","2223c91bf92b2f4cd62da03c61e7744f"],["/posts/b8d46b32.html","7c05081b538dccf84ee93c86b561b047"],["/posts/c1b2c6c9.html","202d6823791fa0a3de6df15676f0800f"],["/posts/c2111cbf.html","b078f354d3366f1d82ec4c238effbe17"],["/posts/c316c2e8.html","0626d5f8c247e139eb08693fdb68c940"],["/posts/c43e60b5.html","0c599002cda43e5415377b78b3349f50"],["/posts/c497a412.html","772bc275969a9df11ef26dad01c63757"],["/posts/c5395ba3.html","9826007fc5934c4cb25368e1cccbddb8"],["/posts/c5de299a.html","8611d92e206852c4ac2ab790e06bf802"],["/posts/c70bba9c.html","cfd626480c4ad96aba1be81865c0fee0"],["/posts/c797535e.html","895def9e6654a45e4c8cfa60532f203f"],["/posts/c7a62c79.html","a08c328409059eddac73c260f4a4b0d6"],["/posts/cae2c959.html","f84d903daf4ca26f3dc7d01c2189b113"],["/posts/cbebef2b.html","cc1442a815ef7c482d6bbb00f6d620f7"],["/posts/cc4c0017.html","e004f5671637f8ac13deeb4c5aae5ffe"],["/posts/ce25023e.html","48d0fd7398b1c3902cb600920c888bfd"],["/posts/d2fd4837.html","a544c0adbb1bc8ba7bc3129624aeb872"],["/posts/d3233cbb.html","c4cd839849aee820afce0d536f538fce"],["/posts/d3a745a8.html","a80829ddbfc9a84d1570c2bb3e5c4d03"],["/posts/d7e940d2.html","b2e8ef795a3e1ad82365ca80d04e2474"],["/posts/dc815d5.html","9414077d8416131dcee40833773ea873"],["/posts/de25b0be.html","c509a55bb1aa165e1c180da919131f07"],["/posts/e2623b4e.html","073ef60df86b562e6403097f325c5d1d"],["/posts/e3ab6ad8.html","65740eb3f3de1e987f04b54a9d4bd261"],["/posts/e5018da6.html","560224aff6050e298d6a029366fb080c"],["/posts/e5963272.html","e242d045bea499e79f17fdd89e07892a"],["/posts/e5ef4c3c.html","6ff5f89ec34333dd3e521439efb635db"],["/posts/e624b065.html","29109b310ddffa63f0ae078f3ee7a987"],["/posts/e7c703bb.html","5b83a812f207061ab633a27ed11dc0fb"],["/posts/e8f14b6c.html","fe90ea93e50fed4bdda2cf4b2c9c51d2"],["/posts/e91abb63.html","4e9ad62015b1d070b74eed0c8cb7809d"],["/posts/ea9a8808.html","7368b99b8682e816210c7dbda74596a4"],["/posts/eb784749.html","81d3dea5765efe04926da7493b2ee3ff"],["/posts/ebaf2232.html","41a0a95773db28bf835e62a7fd093b36"],["/posts/ed75f185.html","e04e908282841dcf53bae05e435bbeda"],["/posts/ee1ed673.html","8d73077c194ddcf593f12b6e89b972da"],["/posts/f0c3ed61.html","5f16b71d8179cdedc2fe5ccd5a5d502a"],["/posts/f151ff43.html","6254a9bccbd73078cca254eb6564bd1a"],["/posts/f21e7f84.html","7d1fa53df6a63362b0f54845900a9538"],["/posts/f230b0fd.html","217dc061b97511e8523f9517bd569d24"],["/posts/f28a7877.html","ac16dcfcc64f506b1f0217be1283d8ec"],["/posts/f663d5cc.html","bb57f70f66c407afb251c5c2f6f83ab2"],["/posts/f730ad18.html","105493ef5edfb396a92b0e54993256d6"],["/posts/fb5d4608.html","ddf223da32369158bd2b44434ffe5dc3"],["/posts/fc04d0d4.html","57800a7e19ea1378a46c8612eea753eb"],["/posts/fc455f81.html","a5715713a45cfdb574ef17a67ae9b24e"],["/sumire/index.html","43a519d79c0cb0973d94df6dcf95d831"],["/sw-register.js","1b4b6503e23acb70584b38c517e21277"],["/tags/AKo/index.html","6618b2b005f77fb96c1cbe7a5aa0f207"],["/tags/APPLE-project/index.html","abbf238113e8b165bb29f28aa41cac55"],["/tags/Ankrache/index.html","0a61ae9dd35c79eee03a32145dd9b3e9"],["/tags/BELL-DA/index.html","a73e7738487670c677ad6dc570d8d697"],["/tags/BL-Game/index.html","e48cd4b40bf47466d71aee04c4431b58"],["/tags/Blue-Dahlia-Digital-Creators/index.html","f397fb9f076b70a9926aeac58b740a44"],["/tags/Blue-Line-Games/index.html","70cedd1e166b3d41a79669a0ff7e77c1"],["/tags/CD/index.html","fe3edfe518a745a1083acead00852395"],["/tags/CHUNSOFT/index.html","a539b9335b1f7f161f31ff40c18e4468"],["/tags/Check＆Stripe/index.html","80536663cdfaf5b5e72224c3098e4a17"],["/tags/Cherry-Pie/index.html","bf143c2500d375c6ef9e3eedf5019d9e"],["/tags/Circle-Mebius/index.html","e192e61f73df7eb420a6fe5751422aef"],["/tags/Cosmillica/index.html","942e7ebf129e2d8be828636e4e35c3a1"],["/tags/CresCENT-BLANK/index.html","c86fc5882ba5f50086a49c3f938da9bf"],["/tags/Dopamine-Software/index.html","3e936c7448e1e184a90e35c47112a655"],["/tags/Dos/index.html","9e3d06cfe6357d8f9a1bbb9bfec6522e"],["/tags/Earth-Well/index.html","2c04d791031c5c7c5e266217ea5d252c"],["/tags/Forest/index.html","7e0979f2f3bd215fe84133bc0401b315"],["/tags/HaccaWorks/index.html","8cd2c67e00bc7653dbe578718b241b05"],["/tags/Kanon/index.html","252de344cac6976ff6b94e2b2da9737d"],["/tags/MANATSU-8/index.html","173ff73b896d673ce46522dc85286df9"],["/tags/MARINE/index.html","f20ea25df2a389f441de169a91d72475"],["/tags/MIO/index.html","9f0d394e3d1efce2ebed63136618037a"],["/tags/NAOX/index.html","f20472e1b5f42ba3e589007b37ebe928"],["/tags/Namikaze-no-Uta/index.html","e7b7148165c52723c3079c9b297cbdcc"],["/tags/Nmyu/index.html","be40b3aa230c9ef182f5aa3fab99e820"],["/tags/O-S-I/index.html","6ee84d7af980ee43a0e370b63c20a3c2"],["/tags/Omegaの視界/index.html","3d0a7936809342e1b8aaf308536bf7bf"],["/tags/P-o-l-c/index.html","040ca3c77d69b7f614049b7cb5a8d5c6"],["/tags/PC88/index.html","4d848862b048613395a4b8234e71f7d4"],["/tags/PC98/index.html","b0bb1bea03306982573c20f2c2c4c1a9"],["/tags/Perpetual-Room/index.html","8fae92134eff9daf3deaf3bdea7ed740"],["/tags/Pleiades-Company/index.html","2584146f4fa24cd31da9b84337ebdbaf"],["/tags/Project-Twintail/index.html","3fab0d5656d4646e3b7d1ec4d2c01bb9"],["/tags/RIFF-RAFF/index.html","807c27fd2aac7a5cdbd7f15152605538"],["/tags/RPG/index.html","eb47b576d81dde99dac43b1a10bd28d5"],["/tags/RPG2000/index.html","00d69b4dd529fcf9b9bc42e2817c15f5"],["/tags/Reverv/index.html","139dadb894357229e8c9866ba9929545"],["/tags/SENTIVE/index.html","a305cea2505427b987025e13ead97e56"],["/tags/Saihate-SOFT/index.html","06c397dacc59367d5f7f0214284598fc"],["/tags/Scrubbing/index.html","924056c3faa417cefafc5886f8b27b79"],["/tags/Sky-On-R-imaginAtion/index.html","c8aaab9f0993d501b072890fa94755c1"],["/tags/StrayMoon/index.html","88d5bf256c506a97b9f3ba981a32eb13"],["/tags/Studio-Bu-Sa/index.html","7cf33c1eaadcf13111455814bbba294f"],["/tags/TRANSPARENCY/index.html","e710692145e96f9339ad4ac5e200f44e"],["/tags/TRANSPARENT/index.html","52f67d9b18a74cf041ffa6aaabcd1b3b"],["/tags/ToHeart/index.html","fdb6f147a8b860f2bb2e6a38a290955d"],["/tags/Traumend/index.html","274f725b589a660447cdde31c3688b71"],["/tags/Witch/index.html","d63a07760cae1d8eeceef4de7f059d91"],["/tags/adonis-project/index.html","1f720bfa61a979b7bf06d17bfa2607b9"],["/tags/capriccio-suite/index.html","7e547cf4e33c89d4643f960d4ce29b8f"],["/tags/flash/index.html","541cbc1e68a4b3c5a38cb3ae3ed823e3"],["/tags/galgame/index.html","a5bc9111690571ea7c58a0c889a0f7e1"],["/tags/galgame/page/2/index.html","a0c7f908eef7d5d30ffbcbc8200639b4"],["/tags/gal资源/index.html","ff06706d59c116766e6e19f6bfb01797"],["/tags/gal资源/page/2/index.html","68c70d1da91aa9992f27cf9a0bd844be"],["/tags/gal资源/page/3/index.html","47c0a388af12f0ad8cb0262913583e55"],["/tags/index.html","022d218d8ba6d23157819997b3d0f05e"],["/tags/m-kz/index.html","40a8b5cdc1f327c5ef8078934d2a9232"],["/tags/purgatory/index.html","1fa4a0ae77056439588cfd5b6575b5fe"],["/tags/rkr/index.html","c6ac591b4afc8285fade5be6764b352f"],["/tags/team-eye-mask/index.html","83aed7cf592ff4a490110d729c98ed1e"],["/tags/ありすくろいつ/index.html","cbeabd3b4dcd5200b9c3e051de38ed9c"],["/tags/いつものところ/index.html","005b796789db9fee4968bf7d3ceeaa32"],["/tags/きつねみみ饅頭/index.html","e3564b24920c6598f6dfc692c379e722"],["/tags/ねこねこソフト/index.html","ffd45bc492e9a1cd09343b8a6874a486"],["/tags/ねこバナナ/index.html","4b720535dcf1d586edc220f2e2faf3f2"],["/tags/はちみつくまさん/index.html","d28f95da8b6ce887a106abd8e55252d9"],["/tags/ろりちせ/index.html","edfb05c5d3e53d306f8c6b8aa75302f8"],["/tags/アイル【チーム・TATU】/index.html","a839eb2fcb19deb7d6b49e0a83b9e3fd"],["/tags/アクアポラリス/index.html","ef4b14614ddfac9abceaab9cc7eda796"],["/tags/アークシステムワークス/index.html","53898d863c79f7fb2723b60217ed834c"],["/tags/ブロッコリー/index.html","20dc322b620c3937ecf6531c9a018d75"],["/tags/乙女/index.html","7110fb02ba91998e636e178896c0eb99"],["/tags/乙游/index.html","c7bfe231d94c2090b5f9c7a5ee505b1a"],["/tags/停产/index.html","194da8d0fc6ce7e214a18acfb06f5a16"],["/tags/公告/index.html","7f93183dbe29874b5b3fa478a5f48d70"],["/tags/同人/index.html","38d6ed953adfc3f85a5503d1e677efa8"],["/tags/堀井雄二/index.html","4a01842944e54708fb334eb0cb153d89"],["/tags/外海なおき/index.html","f13ac1fdd1b5a3f598fff2fc1481bf27"],["/tags/女性向/index.html","5a069acdb378fa8dfb846f4db56c8b56"],["/tags/御茶ノ水電子製作所/index.html","5ab28072226df072b13a163ad1bb330e"],["/tags/月の水/index.html","6670586be783e490ce8a478b158bf9b8"],["/tags/桃野衿/index.html","f18872f67428a7094e70e9e278c54dac"],["/tags/機械式少女/index.html","fa37613356856306578d36b49436b8a0"],["/tags/水仙/index.html","7013b725127b5ab0311062e13021d40b"],["/tags/汉化/index.html","f22fea15d0c6e35d5b474ad0c2bddadb"],["/tags/熊月温泉/index.html","532504b0bb97cfe86aaef4230ead758d"],["/tags/片冈智/index.html","fc450668aeb64311ccc756c213576e58"],["/tags/片岡とも/index.html","d3bf795e67783df54dbc9140ad75bd98"],["/tags/牙の刻印制作委員会/index.html","1f0131a19c90a154f4b05d96c85d8e88"],["/tags/牛カルビ定食-FLAT/index.html","6deadc7cd2af09fb2306e8e2056c25e9"],["/tags/牧尾屋/index.html","ac02f6d5954c64690a93e65258e841da"],["/tags/犬茶屋/index.html","18cc75a35ddbeb41611e0399ad81c328"],["/tags/猫猫社/index.html","b148e8a7b60260493593914c23edaf35"],["/tags/王宮魔法劇団/index.html","58f512e88be18a8c1de3344bd05c9b01"],["/tags/画集/index.html","8973b1189ad220263e05ddddff787630"],["/tags/索引/index.html","661a720bdfd50a8fd23c6c49377c1efb"],["/tags/缺失/index.html","2317a3db9f2d8adc27af36354a00f155"],["/tags/自购/index.html","1534292761347969438951e31d39ba61"],["/tags/茶葉☆姫/index.html","d6ed4062d991c70b6e16367b28747960"],["/tags/郷愁花屋/index.html","a867e5e9c10b4b7b435aa626216238b9"],["/tags/閂夜明/index.html","7e4b433773f79b9fd395c2a50419f5ee"],["/tags/音乐美/index.html","a51b5955e45ba74ad1d38a05f1de1000"],["/tags/黒†救/index.html","9b997750c86da2c7cb6bd22f6225deec"],["/tags/黒百合っ子大集合/index.html","61dc105b47eeeb6f7f09a82077ba304f"]];
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
