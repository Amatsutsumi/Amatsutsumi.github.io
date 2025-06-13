/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9be31fec91cbed2be3cd098be8292b59"],["/archives/2024/04/index.html","015296836518968f30e592137696a758"],["/archives/2024/index.html","28e274a873912fbb602b4aa42f7c092f"],["/archives/2025/02/index.html","9755e032fdc83b02ac9ab163e0cfb9e0"],["/archives/2025/02/page/2/index.html","78c703161206df861dce068c6f63e356"],["/archives/2025/02/page/3/index.html","35e958db09d39ee9ff68e91292e43876"],["/archives/2025/02/page/4/index.html","0e39d1204c1c066ba7147c10e65c1332"],["/archives/2025/02/page/5/index.html","ac9020fae2f1501bace924fe8b66184b"],["/archives/2025/03/index.html","2a15fcdc292fc3307e58a47cb91e2a47"],["/archives/2025/03/page/2/index.html","aaf25a9cf9523502ab7f393bebf8be79"],["/archives/2025/03/page/3/index.html","160bea55a8543a209ba6377a671093aa"],["/archives/2025/03/page/4/index.html","595c658705e174650679d6412f770e30"],["/archives/2025/03/page/5/index.html","7b74ed04a99893f943fb49d723b0ec6a"],["/archives/2025/03/page/6/index.html","2de022a8c66aa943b2cf4400afa6cf6a"],["/archives/2025/04/index.html","253e66196fd40b1bf70adf2a1a4e4cb6"],["/archives/2025/04/page/2/index.html","e7ded27e5d7fa6fd38b05115841e77a5"],["/archives/2025/04/page/3/index.html","4be3fe16ce652824381d9453ccc1a51e"],["/archives/2025/05/index.html","14202d2c701702639f183fba60dd704d"],["/archives/2025/06/index.html","a1047c023e2207fb3a3cbb0b42fdac4c"],["/archives/2025/index.html","6fc30ea1b1c9b3fd0e99c6197e7449e3"],["/archives/2025/page/10/index.html","d44fc9e8047945aa9d106d3573a5eecc"],["/archives/2025/page/11/index.html","42cea3c3542c185317821ffcd8f7496b"],["/archives/2025/page/12/index.html","8c0057fc2725a5f03bf39c1648b5309f"],["/archives/2025/page/13/index.html","0e8c9cf326d404ef353911a5497e0c68"],["/archives/2025/page/14/index.html","176e8436f2a3672bc24c7bcf914604d6"],["/archives/2025/page/15/index.html","214b3671c865192c7c1099a00cc9151d"],["/archives/2025/page/2/index.html","3e91410ce11492ea8ae2ed48403e797d"],["/archives/2025/page/3/index.html","871746414ad73c549dfea4bdac127d35"],["/archives/2025/page/4/index.html","2f44bcc8eb2bd3a06ea5a3f37da52815"],["/archives/2025/page/5/index.html","5f555277113592acb02a13d754f30f0f"],["/archives/2025/page/6/index.html","114519498483c251775c4986a2ce8b88"],["/archives/2025/page/7/index.html","a03be8f056f7046b46f3538a7a9962a6"],["/archives/2025/page/8/index.html","fb83783f5bb32c4e915d884a621fe1bd"],["/archives/2025/page/9/index.html","c49d8edb60a2b6025e3ceeb586de06b3"],["/archives/2026/02/index.html","4b7aaa1ef1958961bb04a4527eaec60f"],["/archives/2026/index.html","da2b34980d9a41ba7cd595dcb7e4f73f"],["/archives/2825/04/index.html","bd20d277345548f45a08bee32775b992"],["/archives/2825/index.html","533c8f3f8228534405f84ef553f64998"],["/archives/2925/01/index.html","0e785d5bc9b3c64215b9c66eaff7fbed"],["/archives/2925/index.html","fcde879d1a4e4a8509acdff7d75ef462"],["/archives/index.html","1d61845ea005bb22c3dfc9506bb7c088"],["/archives/page/10/index.html","401d947443cbc41118723c98a44425b9"],["/archives/page/11/index.html","16eb909f65175109994570453558f0d3"],["/archives/page/12/index.html","726a67475749de180fe800989c731d06"],["/archives/page/13/index.html","9234f547d52f5382b868e221aafee785"],["/archives/page/14/index.html","f0a3401effbff5cb05719c34fdea6128"],["/archives/page/15/index.html","1d86ef89a4c0aa7189d696c351956f07"],["/archives/page/2/index.html","3fe594d09f360437d71512e420715e06"],["/archives/page/3/index.html","9409ba48f58a1e796c44a1f305e7e866"],["/archives/page/4/index.html","a5fbede7ddb06d5368fdc203639ce7b3"],["/archives/page/5/index.html","0e700aa51e988e947577e2a0311c8bba"],["/archives/page/6/index.html","25e2b32b39ad4db1135093ad0ae68016"],["/archives/page/7/index.html","5dff345fbdb347941086640cace32f25"],["/archives/page/8/index.html","ad7873886191b3afcb43d5a98abedf99"],["/archives/page/9/index.html","829bd89820afe00ba5ff5e4dfdb3cdc4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","66175db537ffd01589d9ca7618a3a064"],["/categories/galgame/page/2/index.html","4f75d5daac534a8107b604bd9fced6f3"],["/categories/公告/index.html","9016c2363782d62f5f06bb6855e0e40b"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","0e9b45efd9d3c1b7d7998ed15217b9ae"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","804259cbfbeedd4d04e4a692005c9786"],["/page/10/index.html","8633e03580d369592ff63fca14935c07"],["/page/11/index.html","0a26e29ee3fbb65eeb0e54b3c5303f99"],["/page/12/index.html","0c7feaeb500c838a5a36f6dba10a0a7c"],["/page/13/index.html","86b8b6584e94834db62d1616458bcae0"],["/page/14/index.html","a73835ba52b4aa809650611df98b83b3"],["/page/15/index.html","9be11381e74219d424124fd67985847e"],["/page/2/index.html","c3d66059444381706d3fbcab08152a8c"],["/page/3/index.html","69deed8bf166926096c8f7badcca6e64"],["/page/4/index.html","a997ba5852c273c77244c439193e79ee"],["/page/5/index.html","83c831a69c432286424ef7e56145b4db"],["/page/6/index.html","0c8bc15d68562c1de4d5585e53e4509e"],["/page/7/index.html","cf67c987812b17afae6212b6ee530ded"],["/page/8/index.html","6115480126cb758ed466d8a63e5549c1"],["/page/9/index.html","413e1a97e5c3b15225059820b663a5db"],["/posts/10c9dd98.html","fdf9bc13d498e883d750dea18b639ac6"],["/posts/126ebb99.html","21e5b8fb466df8b77973d1bce22bb9ef"],["/posts/1295b569.html","1c90c649ae296be55386281237a6c9bc"],["/posts/1370342.html","a9db77ea58ab336f1a5fe4e8a88c3d3d"],["/posts/15ef14c2.html","a3cf4bc84e895aa469cd7c6949072bfd"],["/posts/15f3959d.html","7e9fc23b53d96f9ffd69fb0ffa8f2789"],["/posts/18ab785d.html","7214f0cae02df82e1c21c40e5d9ebc59"],["/posts/1d59b71f.html","eb0ca4fdbdc8245a292484a0ded2f654"],["/posts/20b3f3a4.html","3d5bbb42756b67b44cb4f265482df948"],["/posts/244daa7a.html","9e481ccc8b695ef68712eeee0738a900"],["/posts/245f1c7d.html","bf659daa3f092e506f84c1a852ac89fe"],["/posts/252658f.html","3ed241211cbce83a6ea2cf732289f557"],["/posts/28397adc.html","44b738ab818263672893bbcc56b74fc1"],["/posts/2ad07f54.html","d3e76e55251f3a1c54481b7d6a72302e"],["/posts/2b38bce0.html","30fd4f321977f86d41808e48a0122b6a"],["/posts/2c0a6836.html","c82dddfc3fb74f011d2a50c3ede6c356"],["/posts/2ce39bcc.html","7ed8cf12f354d6c21c5f342ff7e3c2d4"],["/posts/2cf620f0.html","7dacb21e71349756aba265ac5f99ddb2"],["/posts/2e30fd6d.html","ac152f89d797fb608fb0ac60846fea29"],["/posts/30a413ad.html","dde9262cc5b6340cc2d02816a2e444cc"],["/posts/34292736.html","3136195dbd5be72e73abb63b51129c47"],["/posts/3468cbe.html","789b406fa75ab2d126bffd2a7bf464e3"],["/posts/39176dc0.html","ffeb496065e2e96ab86acd812bc9d3b8"],["/posts/3be6a165.html","23a2726b2b12427e45585a6bbdddab8e"],["/posts/3daf73b4.html","a98592d6818951c192ae0d9509746186"],["/posts/3e118dbf.html","0d88b981f8d8ee1e3897dad23f9bd5e5"],["/posts/3f7d823a.html","af94d11c7304e011a9e7ba224a267215"],["/posts/3f978819.html","7b6a2a7a7f3d05891a5bc2f83a3a629a"],["/posts/41dac80e.html","af2a26e1084fdc6f0831a38051a376bf"],["/posts/43945723.html","334808d4f6796c588c7f98f6f7b5370e"],["/posts/44124a6b.html","aecf1ab386c0068014f62061190be49d"],["/posts/476a3006.html","ee7e3fea66d0646014f2d8deacd03425"],["/posts/47abb61d.html","f15919cb459233b7e8ce2e6e5bef7742"],["/posts/4996478a.html","237e9278e80dbae83f5a1c8343ad1438"],["/posts/4b689be3.html","d55899a401b93dc36d029d8ed916b27e"],["/posts/4cf8423f.html","fa163427c22cb04f0ece97e98ce52f58"],["/posts/4dcf85c.html","21dc8e9e8913d1d38ad1e04b717043ce"],["/posts/500cd322.html","81149f386629a72a1a3dfc051740772c"],["/posts/51c9b1ff.html","88ca8f0fe94082b4838966410ad8a68b"],["/posts/51ce68e8.html","7b3759668dbe604f97f9c8a0e1e2ae30"],["/posts/52b5b3c6.html","101586e7be56461e4502a29cf2cf2d42"],["/posts/54f496ad.html","2f95b15774d0eb056a2859b065d6b225"],["/posts/558e1f30.html","639cb303816fc19193284b725fd2c19f"],["/posts/5d8bea92.html","a4fea0a79047b154b7c27654255145a6"],["/posts/5f6e0c59.html","78260f0bf92ccb224fc9d49d77246a59"],["/posts/61a63a84.html","1773535df6173350076aba95f77eed02"],["/posts/625ab7bf.html","31ed1cd5744993d634015caf1d7d2d5a"],["/posts/6336a2f9.html","da6ea42260a70674f90aadfe1da992ab"],["/posts/6432d61a.html","9d5dcadebee5f29019a00e4bad02a897"],["/posts/6515f032.html","a69acfa1661542fc58aed00c51bb23f7"],["/posts/6720ccdd.html","734ac70923a447872b828c01cb7fac45"],["/posts/6a4b5ac8.html","b9c26e00bce2bcc4577b6bdb5dca7a06"],["/posts/6aa4177c.html","d644bb4285b01b230321a5fead707d36"],["/posts/6b15f81f.html","f8897d3817eef86a8aa4115e06b8317d"],["/posts/71131d34.html","62cd5776f62c2445079b8d6a7e814ea1"],["/posts/742fd48d.html","28bfc0535ff68d0bbe5619cad9f447a4"],["/posts/78a8a8d3.html","6d5a2b6b761de9d5ea01a9cb96f08233"],["/posts/7a5ef3d0.html","5e5aab24815511ea36f9c402aa822198"],["/posts/7b41e1ac.html","07af14c6154932dcedb1b6fb6d5ed19f"],["/posts/7b51011d.html","9e8bb15a9623ba24526d45a4ab248128"],["/posts/7e3aa3e2.html","8fbfc54164c24946c934401080c9c3c5"],["/posts/80fe2691.html","f616c458fa090ead67d6b16acef6d6e7"],["/posts/81ac52e9.html","940a507a7583bcf866e75b1c21ba7c86"],["/posts/82332d11.html","a2b55f0891b36c9b1c3dab1e35005e36"],["/posts/8486f6f9.html","40610a279e8bb82923472d64a9ca7b40"],["/posts/849b40f8.html","327c230f0a5129ba74b01e404d3174de"],["/posts/85c51d68.html","c2d276d8060e20087523674d8fb82228"],["/posts/86a6c500.html","a97367c5f89ba68c2d0604e7b147a6c6"],["/posts/886f8d3.html","b35b06cc004da22c7f21696c7ca73302"],["/posts/8a7cba10.html","c2410bc4b4a68b660cdb413a7630fbbf"],["/posts/8ac11b41.html","4145987ceb9b9a705d48c495360443ff"],["/posts/8c3f2fd8.html","54b5def38ad045fb0f3dd40108cc7954"],["/posts/8dd520d9.html","58a2e121beab9661f15c13992525297e"],["/posts/8f555654.html","876d3fde6cd5a7809e648b9e8b934e68"],["/posts/909f8f97.html","60d83fea528292adab9ec5903dd8832a"],["/posts/92a980c2.html","597f508c67e64ed104e2d627157834a6"],["/posts/92ce16.html","f904fbc3407e56f6eca5e2a2c4ce6bd4"],["/posts/93e9943b.html","633e6105579a4269386d007952361442"],["/posts/94d3c794.html","6ebfeff94956b6413de332da3ea479cf"],["/posts/9606c2fe.html","9fbfd2a78a8fdbab349b3da597d5af57"],["/posts/96b281f2.html","4406f52e2b39d543278565b41533b669"],["/posts/97f50eea.html","25d086da39bd651de728feb040a63c78"],["/posts/97fca8be.html","f1035ab454d1c2c59402291e169d6874"],["/posts/98662d05.html","68ace04d17ebe2492de13e02a496da19"],["/posts/98ef47c3.html","07459ba34c6bfd5bab9ac27011ca7a38"],["/posts/9a2f6162.html","63a1e655a0bcb32d1bb6e96ef07de57d"],["/posts/9b22a48d.html","897d80f8c373ba3047c405552e0a2a1e"],["/posts/9cb455b1.html","bbdf97f73dcc75a8498e256e891e1ddb"],["/posts/9ecdeecc.html","4033685ef640f06f85c3a86972e0da09"],["/posts/9efd7701.html","e339a048c04102615f4ec1e62efef76c"],["/posts/9f61c1a0.html","7101a300e3e376aea3df2f448f2812cb"],["/posts/a1de710.html","6167ed7c82aeb376083402f96527c7d2"],["/posts/a30eb0cd.html","87b7eb4f0bde2f0012fc87e45c1e62af"],["/posts/a72f71c2.html","f7cef013fb4247d8146492fb236192ab"],["/posts/a7634b5d.html","0743fc7c7597352ee49109a94911e23f"],["/posts/a8c593b5.html","7674ee462d8af8c04870adc487835aee"],["/posts/ad0c1efa.html","48ebd47a621794edcdbab3b5081319ed"],["/posts/ada3f440.html","f3e97ada129d6fa6e76dbe10eb492eb8"],["/posts/af1807ef.html","e506754b591dd933b426c6c74d4c8ecc"],["/posts/b397bf03.html","780a51eb11fcdc2789ec837f29d6c334"],["/posts/b497b647.html","5d392f8569cc67adc8ca2083975d56c1"],["/posts/b4d464b0.html","2022f3d42a89e819e2cdf2fdbe6104d4"],["/posts/b5fb773f.html","9610f6781846af8dfa26cbc4e6dd057f"],["/posts/b8d46b32.html","88527164f7c2cffae71fac8400e7d5b1"],["/posts/c1b2c6c9.html","00ead2a5602b2f14ba48b282e54ddce6"],["/posts/c2111cbf.html","cff49bce55e378b0a9cadd861d7e2f48"],["/posts/c316c2e8.html","c304fb601ef50437f2d0b6da48ff6cd4"],["/posts/c43e60b5.html","6f82537b44c21caa215e03280e9761fb"],["/posts/c497a412.html","3191225f478de822dc9fdb43aba8ea48"],["/posts/c5395ba3.html","f476f2b58ec7d4a9c22731e7298cbb43"],["/posts/c5de299a.html","d984cd8d5cb87dd6c5b81be252f53e6b"],["/posts/c70bba9c.html","df52819c9094a7a1779ed12ca7b4ede3"],["/posts/c797535e.html","0bcd241ec5ccaf6040347b4eb55f158d"],["/posts/c7a62c79.html","da50d4636da27eeaf6671a6d31ac156f"],["/posts/cae2c959.html","bed247e8190f9d17663fffef7d0e14ad"],["/posts/cbebef2b.html","03ed50ce411fe82577c8e4386bb07d2c"],["/posts/cc4c0017.html","4d886d7ae48d68da1c5aad0d81d37b69"],["/posts/ce25023e.html","5f9ef133d2b42f2284eb73f16289616b"],["/posts/d2fd4837.html","ed6e253eafa235ab94b56be4cc8791df"],["/posts/d3233cbb.html","3ba6a3093078ef511b1f018501ecebb6"],["/posts/d3a745a8.html","e3fe643607764998a01110cbe13429e0"],["/posts/d7e940d2.html","e9d15cad2db8e5c311420ad5e8af73ce"],["/posts/dc815d5.html","f7f3fd26838675aa575a157bf9d64610"],["/posts/de25b0be.html","0b55b78dea06c03baba4349ed84cfa20"],["/posts/e2623b4e.html","144d913461a849dc7951782b681ce134"],["/posts/e3ab6ad8.html","c94223df05b3c402eba8138381bc9f4f"],["/posts/e5018da6.html","2d1c3d21163767dc3365c34f350b40d5"],["/posts/e5963272.html","4cf391cde6ce52297496d61218e5bc65"],["/posts/e5ef4c3c.html","4b6179b848ed35b03ee44b69cacdd69d"],["/posts/e624b065.html","4b1db203f2046d960f5f0f2b604ba6a6"],["/posts/e7c703bb.html","574ec3eaf462a6f35acfa36fd3bb89b6"],["/posts/e8f14b6c.html","e5fe6de0b799153c2cac8d251406cf0c"],["/posts/e91abb63.html","0aee2ce14d97b4532a389931f820e049"],["/posts/ea9a8808.html","289bbe43a8470f8d2647b2a91942b152"],["/posts/eb784749.html","5217c3066ad7472f63b7d4df910d6369"],["/posts/ebaf2232.html","439a8f82d6897aa77aba85b5ce349669"],["/posts/ed75f185.html","9c7ce25f803a282c63523bf2ad5b6e14"],["/posts/ee1ed673.html","dcac34037351861d3ab80e190385b000"],["/posts/f0c3ed61.html","4063ae4088fadb522d0135e67acf257b"],["/posts/f151ff43.html","2391590d9c5cac599e9992c7ea4cfe2e"],["/posts/f21e7f84.html","88c80a24a7d175a4e6360ea409dc5aad"],["/posts/f230b0fd.html","2f6e3a4e9d99796a189118092779b940"],["/posts/f28a7877.html","ae00cd275e0c9eed4c3abbd59d7e3c7c"],["/posts/f663d5cc.html","c019eac5284a79c4574c33d938fef30e"],["/posts/f730ad18.html","c23acf2a08268775663184ecd56b2275"],["/posts/fb5d4608.html","b1cc5ac12f4b0e23813cd746a624e98f"],["/posts/fc04d0d4.html","6f098532e7bbf2815765e1b190fae428"],["/posts/fc455f81.html","7eff8a42d5699053c2619e772039374f"],["/sumire/index.html","ba152b8b715f8d3b48542d7f5db51221"],["/sw-register.js","945061ef2e3eef54f229417cd80c1db6"],["/tags/AKo/index.html","2f0ad54c8bfb3c829913755b4a5c1c85"],["/tags/APPLE-project/index.html","e170799972c0b37c0391296d04715a7d"],["/tags/Ankrache/index.html","0c94ee7bf4fb83b1a346511e775f2559"],["/tags/BELL-DA/index.html","98846a48b36c1fdd494239e5718cf0ed"],["/tags/BL-Game/index.html","98634ff1befc1fe4eb1d807468c21ba7"],["/tags/Blue-Dahlia-Digital-Creators/index.html","5b9713a8ed7cf65848499762468809fd"],["/tags/Blue-Line-Games/index.html","c12f3177f0e2287d269f5d4f232c53a2"],["/tags/CD/index.html","8568de0ebf1e3a5e93e68e50b89c39a5"],["/tags/CHUNSOFT/index.html","b6819a885b9786a85a0194f8c74af430"],["/tags/Check＆Stripe/index.html","05fa52bd78d3430a25dd07b0a3335a89"],["/tags/Cherry-Pie/index.html","da37294fc20419dcb710f4be1bba3659"],["/tags/Circle-Mebius/index.html","0aa9ac5a2c28154877951c93021bcfc7"],["/tags/Cosmillica/index.html","fa6449332094724f1a6626d964ec76db"],["/tags/CresCENT-BLANK/index.html","58edd58e8a301adff5bdec74517e92a7"],["/tags/Dopamine-Software/index.html","00c5be8e31c5cb0b8dcbeaa872ed50d6"],["/tags/Dos/index.html","56595f1819ad8e08731b453c5d1dbb28"],["/tags/Earth-Well/index.html","e9d194addb36bc158cab493e10c30352"],["/tags/Forest/index.html","7b38cdaeedf5ac6869a648c84a85453b"],["/tags/HaccaWorks/index.html","054cdf796fb5a376ff300da82698a360"],["/tags/Kanon/index.html","880fe18953bcc27b893215b3a857228c"],["/tags/MANATSU-8/index.html","98bb2dee24728b8d4fc4a4e35c5283f4"],["/tags/MARINE/index.html","a0eb53c522bbeb6e6591455613134357"],["/tags/MIO/index.html","bf4bfae5e1c794710131419eddfcb1ca"],["/tags/NAOX/index.html","56aad8d37579ad1b3e902ffdf1bd9e3a"],["/tags/Namikaze-no-Uta/index.html","0510f42687ff9bcc32f2e51579e6fa34"],["/tags/Nmyu/index.html","29dee1771716f59dde75b43872a8110a"],["/tags/O-S-I/index.html","3a02f2ab4383bf64932ad2b15594f261"],["/tags/Omegaの視界/index.html","9929c00ebc3aec22eb513de362848e0b"],["/tags/P-o-l-c/index.html","beb31119361df1beaf48767cac0b9322"],["/tags/PC88/index.html","54832e93ab7ade24f8414dbadba5412e"],["/tags/PC98/index.html","0b999d0da03c0d78bc8bdc9627f45947"],["/tags/Perpetual-Room/index.html","9c534ffb77b9eea5f2118feaa66e50eb"],["/tags/Pleiades-Company/index.html","60d22186a75754dfc8bcc118596c6c80"],["/tags/Project-Twintail/index.html","51547009aa7d85b8f8c9fd3ff6d7568d"],["/tags/RIFF-RAFF/index.html","66eb047df477fa3eb5f4549a24564d2b"],["/tags/RPG/index.html","e6a5e9c184ca99270f6a0b2d2fa0d0b2"],["/tags/RPG2000/index.html","bd4c0bf0e259a5e06fed5d93e96e8028"],["/tags/Reverv/index.html","2910d0cc9edc7ba03ccdda2e8ad42c01"],["/tags/SENTIVE/index.html","bccaa9af95807921564eb9bacecc33e3"],["/tags/Saihate-SOFT/index.html","5f7fd942b823dc66f5df8fd84c06d030"],["/tags/Scrubbing/index.html","711a477b1f0190e80b2f75e521de4d11"],["/tags/Sky-On-R-imaginAtion/index.html","87c40e409f3113220f540437be7e403e"],["/tags/StrayMoon/index.html","d60c0fe4123ce28f9ddaad6614a97b64"],["/tags/Studio-Bu-Sa/index.html","79a0654ec56e5e5d9fb76f7e64dd1206"],["/tags/TRANSPARENCY/index.html","573fa5ba368b731d42e082d385e4fe81"],["/tags/TRANSPARENT/index.html","f9c1661ee02c8eec3226f79d6c1f476c"],["/tags/ToHeart/index.html","39fbba94da050e822463f5d002d94c0c"],["/tags/Traumend/index.html","58975c7a16413690acdafcc9f42a76bc"],["/tags/Witch/index.html","a7b1e000c6c938c2a9f29029762eed79"],["/tags/adonis-project/index.html","a5977968cea81f7b7f93907ae585dcd0"],["/tags/capriccio-suite/index.html","34a0c8c5029c3224fed233f003091008"],["/tags/flash/index.html","409b9de5a4c68c565559efbe693da97c"],["/tags/galgame/index.html","28638e4975109b74a8520b11ee2ce289"],["/tags/galgame/page/2/index.html","afdc24e5fc7590dcc900870ba907bd89"],["/tags/gal资源/index.html","618653d25c30b1f0187d0e9ab42b8415"],["/tags/gal资源/page/2/index.html","a98462cbd2e0e103efcbf1f4acb52ac9"],["/tags/gal资源/page/3/index.html","6467775f81067b80e26b1669d062e3ee"],["/tags/index.html","92cdcae598ef4611ed4fa0403205ed98"],["/tags/m-kz/index.html","070bbcd5cfd281d0d78d6b9bb6e139f4"],["/tags/natu/index.html","a405806bd2f6fc258a676cf9e5958f31"],["/tags/purgatory/index.html","9159bf66aa313a66fe5ed328692ebdb4"],["/tags/rkr/index.html","d49854f338bbafd9acc21fb3bae75a18"],["/tags/team-eye-mask/index.html","8391f43a707dd9fe034915d7a4d5629e"],["/tags/ありすくろいつ/index.html","b924e6ccd8c474007acfe9afc18dca22"],["/tags/いつものところ/index.html","ff192cc237c0539efc7216a61810f8e1"],["/tags/きつねみみ饅頭/index.html","1140a08ca5e18d101bca039e6b5674a9"],["/tags/ねこねこソフト/index.html","147c6e5fb1a9a1e4882890e312ff544d"],["/tags/ねこバナナ/index.html","339fe6a475bb6cdab9905cf628e20b72"],["/tags/はちみつくまさん/index.html","17e92d8968f8a2ae169332acf93bcf6d"],["/tags/ろりちせ/index.html","7b60b5d8080dbe6d862b588cbc2791a9"],["/tags/アイル【チーム・TATU】/index.html","50a0ab093d740f5b777b895d9dee9bf3"],["/tags/アクアポラリス/index.html","49c463ae0b9f0d4dc0f3e19a5e55ffe7"],["/tags/アークシステムワークス/index.html","375688e161f651ebc3d9345521a79ea2"],["/tags/ブロッコリー/index.html","0e5d9945f2111877533e88bab6861b47"],["/tags/乙女/index.html","37d6b589c9eb15808f949526405287d6"],["/tags/乙游/index.html","c88c968c6dda5cdfe655fb8868a5eedc"],["/tags/停产/index.html","dbe93396e7e1d42011e16f5fb43a1719"],["/tags/公告/index.html","7be17be91cda0d6c3ca220fb1ccb6a6b"],["/tags/同人/index.html","a6e348f955720f98a393fb9dc8cc8ece"],["/tags/堀井雄二/index.html","3b44ae2cef27fe08e8bdb99247e0fe7f"],["/tags/外海なおき/index.html","6d107f332c9f500c30962beee6d2d722"],["/tags/大熊猫/index.html","cea2cfc3a11d6ffec67b661d1b47dca0"],["/tags/女性向/index.html","fdb33c5157940c61996af1bb9bba9dd6"],["/tags/安装/index.html","82081f303f4c3795357f8800f2503100"],["/tags/御茶ノ水電子製作所/index.html","7b49e4cbad1dd1ab60d2fbf8d1114d5e"],["/tags/月の水/index.html","06584d8258b11b68bea9aefa2cb013b3"],["/tags/桃野衿/index.html","c362cd6fe410bce7049c2b05badd045c"],["/tags/機械式少女/index.html","369ce9ad0f2205793c8428cc79e61cea"],["/tags/水仙/index.html","ccb189bd487fb9c47c6d62a9e0f5b1a9"],["/tags/汉化/index.html","5af8d4e018c357a9c8b8e9ee2a69d789"],["/tags/熊月温泉/index.html","72cfa197a8889b2cfd4d33ddd3410dd4"],["/tags/片冈智/index.html","4a36977612ef56904ab75640c3e1e1ca"],["/tags/片岡とも/index.html","ce4587500477f3524e325c3fe2465fbb"],["/tags/牙の刻印制作委員会/index.html","845ab232444198533f384d870b002c5e"],["/tags/牛カルビ定食-FLAT/index.html","dd2c71b6d0261869bcfbd1cca62ae735"],["/tags/牧尾屋/index.html","0d1ca5b3d90e2c3ad490560a28c6e47b"],["/tags/犬茶屋/index.html","9f16440efb2f6d58cff99e369f9e1da9"],["/tags/猫猫社/index.html","a95b2f0c73ace919eb849c890bb6835c"],["/tags/王宮魔法劇団/index.html","7685ef24ba9acfdc93997ea46f4252d4"],["/tags/画集/index.html","51728c23c69333e4bf5744ea6db27569"],["/tags/索引/index.html","9d4b77287eb2793d07c5953b27d27a0d"],["/tags/缺失/index.html","0119993e554fafde78c111fae0eaf266"],["/tags/自购/index.html","85387d4cd96dfaa2ab0b282fdef1f220"],["/tags/茶葉☆姫/index.html","be755d49c9d4fee1db6fb3a2011a78d4"],["/tags/郷愁花屋/index.html","c474ba8a57d7d740fde1c9dd6bbcf00b"],["/tags/閂夜明/index.html","538e5591f22d9bea9002f7e756eac6f0"],["/tags/音乐美/index.html","fac941262b10e104ca3982cfc6160baf"],["/tags/黒†救/index.html","7393ac9feb481b69988c9b37b6087410"],["/tags/黒百合っ子大集合/index.html","3e709f88ba71644273ea0437ae1808f5"]];
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
