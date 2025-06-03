/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a42f09b1d0a57f93cfaf43614b4bd329"],["/archives/2024/04/index.html","b955636081af39f2c7298851ab9b9d84"],["/archives/2024/index.html","952d7ed8be3e692117234793be3e7f01"],["/archives/2025/02/index.html","46771a611504cc494d4db3dba6c2744a"],["/archives/2025/02/page/2/index.html","4b570e8d61b57770231e8d066095a73f"],["/archives/2025/02/page/3/index.html","14c528be125c25dcb55b50b900b94724"],["/archives/2025/02/page/4/index.html","c62169a213be98a40cb890d79ac9da81"],["/archives/2025/02/page/5/index.html","7add3f4e4b9229d6fc574d96c6bd0ea0"],["/archives/2025/03/index.html","50ce1705fd5fa575abe6eef8542376f4"],["/archives/2025/03/page/2/index.html","6bf0424c21fd9738f14b8ebf63609a6c"],["/archives/2025/03/page/3/index.html","b770d32d9f504aea905f2b52794dfe19"],["/archives/2025/03/page/4/index.html","4bd935dec422cf9dc7994f67aa8ca77a"],["/archives/2025/03/page/5/index.html","0fa573563c0e4f83618df4fdb317678f"],["/archives/2025/03/page/6/index.html","7bcd35185108d56c017fb322d605db93"],["/archives/2025/04/index.html","98ef80350a021fe1c4c47727154ece15"],["/archives/2025/04/page/2/index.html","1fa7d28714b0bee7bcddfb5bf2d0037a"],["/archives/2025/04/page/3/index.html","38594ac8eca577cd509384744ac2b934"],["/archives/2025/05/index.html","3a98fafc104adb8e6d083b49773f909f"],["/archives/2025/06/index.html","0cf671bcd3471f72ddf578a96c04a267"],["/archives/2025/index.html","3ad8d6eb0e23ef94d684fb9f784b5802"],["/archives/2025/page/10/index.html","b63c29882d45e430ac85ec003343f5dc"],["/archives/2025/page/11/index.html","60b9f7ba3429a8ee9129efe8619704f4"],["/archives/2025/page/12/index.html","9642a65a2427b7a77453d249f26c5b6a"],["/archives/2025/page/13/index.html","5e9c3248af95ef6a9ddcff9d43a72364"],["/archives/2025/page/14/index.html","08e7a1dfa336ae72e8e1b6a6c04b335e"],["/archives/2025/page/15/index.html","2a1daf498ac215a58d74111b3c673a77"],["/archives/2025/page/2/index.html","a16a8f56061daa64374609c5c9abbb58"],["/archives/2025/page/3/index.html","d66aaf02d2b9834b94ffd1696dff778f"],["/archives/2025/page/4/index.html","7031d9a865c84dd9577f84561810ffcf"],["/archives/2025/page/5/index.html","9e8a34bda36401b2896b7274a0b459ab"],["/archives/2025/page/6/index.html","734b8e8cd264a771cbc03861697ca4b5"],["/archives/2025/page/7/index.html","38f45f685a650c5dd83673a92bf96715"],["/archives/2025/page/8/index.html","97bf4f25b81759281d3719d850be2fc5"],["/archives/2025/page/9/index.html","405f2ed9785134508f1cffd318a62864"],["/archives/2026/02/index.html","33aa8be38dcdbdf74de9c88e7b017432"],["/archives/2026/index.html","b9229525ed4d4580852f5ba7830de93c"],["/archives/2825/04/index.html","478d25c85fd508135b48b7229c42e6e9"],["/archives/2825/index.html","341d91830169619df6736f7c26df03d8"],["/archives/2925/01/index.html","04f8ecc371a6895243216be59712396e"],["/archives/2925/index.html","0ffcac7be130b968410d3209a30f1431"],["/archives/index.html","b429b35f917aea31a4b7aedd92f0943f"],["/archives/page/10/index.html","f25b54483010202a2d0238c696f122e3"],["/archives/page/11/index.html","aa0b2e2b8b75c38f76c164945de6c640"],["/archives/page/12/index.html","20880a31f001bb5447d1b9b85347f939"],["/archives/page/13/index.html","23d8896a0b584eb4c5b18c328c5a4d29"],["/archives/page/14/index.html","f22c20a30fb01ba96a2c4bca022c7a18"],["/archives/page/15/index.html","53126ac10ef2c95a5f1b100a1daf57b1"],["/archives/page/2/index.html","6995f24a35777da0961519015516eb9f"],["/archives/page/3/index.html","d32585f09ffffba18783fc4072c54ded"],["/archives/page/4/index.html","1d13fa2ad34c64a252654ec4ce167c58"],["/archives/page/5/index.html","10ee07187fd0872aedb0286b1982ec29"],["/archives/page/6/index.html","74caff9ff4133783970d6f538f0a2b18"],["/archives/page/7/index.html","971c8fa7b0e1c61d6bb73d6b5bc30a89"],["/archives/page/8/index.html","b0be7674572d2a19b820c14363337939"],["/archives/page/9/index.html","33a1d35e0a549f6527d93a1ee21f67b7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","a8db65a8a5ee8ff0d52fae96a115aeea"],["/categories/galgame/page/2/index.html","cc71d5e5151c0e8ee5b60fa17d7ea4f6"],["/categories/公告/index.html","053e59d5766d69105282207cc0d250c7"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","e50282d88efd36755ae6b584d29ac604"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","f7d22b56bbee68ae1a20b572d0a4a6c2"],["/page/10/index.html","eb3400603d501d7bfdfdcc5ea86ecf70"],["/page/11/index.html","1e13f49b2f78c8408a121c33b2e20513"],["/page/12/index.html","8e6122fdd1dad03974b6ae8b3b582d8f"],["/page/13/index.html","b533f624fc769df1b626ef242d0a5826"],["/page/14/index.html","644f8199d33e39e277b939fbe4b42606"],["/page/15/index.html","109dcdac6492f670bd352968c75e6ae7"],["/page/2/index.html","3f6f982e09b440600f26fae7a6ce9e82"],["/page/3/index.html","3e853f5e066edf0c61bb59fd463fb1fe"],["/page/4/index.html","950b1f65d40f23b5e9215fab69d0c7c7"],["/page/5/index.html","8094ca358d785696b02221cc3b0cc261"],["/page/6/index.html","c20e5c1dfdc7f65f2c0311795e9bc48c"],["/page/7/index.html","9512858b18181f314f67d95df652b684"],["/page/8/index.html","0c7f725d506a797bf0dee51be8d74c7a"],["/page/9/index.html","87bc050f4bed960d7f0baef51c576379"],["/posts/10c9dd98.html","9f8595ba3fb6297aacdf3a854b3d49f1"],["/posts/126ebb99.html","4cd8157df5b0510107b95a0cdf3758ce"],["/posts/1295b569.html","9bf3267634791589709886cf757c4285"],["/posts/1370342.html","f9007c9863d95e41a171c4444ee800a0"],["/posts/15ef14c2.html","2e43b7447f50a600e4714c4974313540"],["/posts/15f3959d.html","7e7664de42296eefd1cdc55472411b85"],["/posts/18ab785d.html","c1bd41de5366460a793963fe9e8a80c4"],["/posts/1d59b71f.html","e3c903ec2058076c866598fad5221909"],["/posts/20b3f3a4.html","a6952f3e6bbe0e9b7a6a03eb438530f8"],["/posts/245f1c7d.html","37436903a2c478cc48384135e173d515"],["/posts/252658f.html","e8f6ff625a7bd5885fe437b4dee239c1"],["/posts/28397adc.html","7c85af3766f01ae52d7b67ebac60581f"],["/posts/2ad07f54.html","b9c0e3b3a893474c0db9fa6798cf41c4"],["/posts/2b38bce0.html","9e49d6baae32e8f4e033d2c15ff98c82"],["/posts/2c0a6836.html","067609e1e50883632ac748e2ccf83018"],["/posts/2ce39bcc.html","c031cd2c89d1dc83bffe075fd229c8d0"],["/posts/2cf620f0.html","eaa52e1bc0d5386633968672b3f07112"],["/posts/2e30fd6d.html","4fa30ef7ff493e4f08f1bec91f7174a8"],["/posts/30a413ad.html","67dbbde0a7a3869cbba2ce5cc133588b"],["/posts/34292736.html","9bd3a910aaa062d417d8207f97f80d34"],["/posts/3468cbe.html","8f52954f896279f7bf482a3bfb230eb3"],["/posts/39176dc0.html","d66a05a7a95ab9ae1a48f817d2d0833b"],["/posts/3be6a165.html","3904337f2479dcc73c4fae4459bf6b78"],["/posts/3daf73b4.html","f05835287db1816e62fd17a767fd74ba"],["/posts/3e118dbf.html","e2105dcf7255ca3e6250c40603d7c406"],["/posts/3f7d823a.html","5fb8e4622ac48e8d6ccd997ec40a75e7"],["/posts/3f978819.html","2a9d07367e365a7dbc963a1eb48e901e"],["/posts/41dac80e.html","358c212b7671a621ecc6f0364c792203"],["/posts/43945723.html","0f2c168365441decbb99f74820154b98"],["/posts/44124a6b.html","77faabe8acf1bc4f8f23c00b1204a9d1"],["/posts/476a3006.html","837a36afc2eb3f4f076684149ba03698"],["/posts/47abb61d.html","bf8fda26698e5d160e136d47486ff149"],["/posts/4996478a.html","758e9c1cfb2caa9d52c8710107abab3e"],["/posts/4b689be3.html","d4358cfb6b684ad7966c016a536fd352"],["/posts/4cf8423f.html","30e53c5a2672c341cc5bb3df53168b6c"],["/posts/4dcf85c.html","b14c124077092421a7e7592b9d49c9e9"],["/posts/500cd322.html","79269cd5e96dd409a96ce54d9ee6b331"],["/posts/51c9b1ff.html","fac31a1215fd6b5789f4c587599047a9"],["/posts/51ce68e8.html","81ecb3959520aaa7ad01660904beb115"],["/posts/52b5b3c6.html","1bbf56ecf45166e7fee140e86fb1d260"],["/posts/54f496ad.html","1fa37f9dc3859d5130bf9f91c255bf8a"],["/posts/558e1f30.html","b42d6472ca3bf1ac095e8e5844bdf0bf"],["/posts/5d8bea92.html","b961eee801fededc7d4afc4522081a03"],["/posts/5f6e0c59.html","8945cecc5b496f96fa30b624e360b924"],["/posts/61a63a84.html","e02a36a8a6592c40758579ba3185ff69"],["/posts/625ab7bf.html","dae477594c2ed6c859919c9d321c7120"],["/posts/6336a2f9.html","3af59bc9f5bf0f0031dae71db77b4527"],["/posts/6432d61a.html","d32076ac064ce607e932dee81fd33375"],["/posts/6515f032.html","2887f8efb6cd5fb97bc87a76b59d88ae"],["/posts/6720ccdd.html","04f991696b86af868f32b03dadbd2ccc"],["/posts/6a4b5ac8.html","dac4ace7b2c585141621de99c305785e"],["/posts/6aa4177c.html","fec51cdecbf4873430dcdf0bee6398e2"],["/posts/6b15f81f.html","0c4707228b069dea85f7c6a70a64a0ae"],["/posts/71131d34.html","f7e177896ee10192b1f66aacb0c5874c"],["/posts/742fd48d.html","278af49463fc42874c52fd707c664f1e"],["/posts/78a8a8d3.html","e5f18fcfcbebbfd1cbc92d4739e3d45a"],["/posts/7a5ef3d0.html","d271e285217244d6f38f8ce41f24d64c"],["/posts/7b41e1ac.html","e297c1c6e9dc861acfd92552aad46056"],["/posts/7b51011d.html","eb27263cce3f39c484b2874fcaf570b8"],["/posts/7e3aa3e2.html","bfa881dccf3ca3a8ef64ca0658ad7d6b"],["/posts/80fe2691.html","42a703bada0a8d2c1a18b7fe1fbeff9c"],["/posts/81ac52e9.html","7f81f558a6c484698ff4b5c2c525291c"],["/posts/82332d11.html","c92c49af2934714fbce1dfee5c67da4c"],["/posts/8486f6f9.html","fb9cffd025a375f4270d296e9fb19dd1"],["/posts/849b40f8.html","fc88eab52a4039c178dbf7fe585a8b1e"],["/posts/85c51d68.html","024f701d26b95dc112743a3b75f5f562"],["/posts/86a6c500.html","17b879f9e7d59afa3dce9863646a105d"],["/posts/886f8d3.html","a58f057ea9d14c552287c282f76a2e92"],["/posts/8a7cba10.html","10e6b0d755aee88539ab401d925d0ccb"],["/posts/8ac11b41.html","06797a981398ab41642a0f5eca4f449d"],["/posts/8c3f2fd8.html","b070fe4205c863a612617d0549a946e5"],["/posts/8dd520d9.html","3ac763f408146fc46eaa61ce1af8da31"],["/posts/8f555654.html","f25ddaba7c78dd0683ab5647bd1d3823"],["/posts/92a980c2.html","2e91342e289d00061bed45e4536c8ab6"],["/posts/92ce16.html","06d26e9008c9c6a25b607dcd3b6b7e07"],["/posts/93e9943b.html","7f5879c5ccd3923057254c43fdcde39d"],["/posts/94d3c794.html","3c105a9e09aaba8f810b420db25165bb"],["/posts/96b281f2.html","f5f0d658c281a87ad0a0fcbd001ca258"],["/posts/97f50eea.html","eb379156d9b2d092e0963627aa660c62"],["/posts/97fca8be.html","0b715af3abb4db66427693095e840d75"],["/posts/98662d05.html","a10bab92780dbe2ca0480d4c25eda06e"],["/posts/98ef47c3.html","d228bbbc4d99ea35fcb5e3a43ba91f8c"],["/posts/9a2f6162.html","28d1fe8dd8450f1e311f8b23fcc28984"],["/posts/9b22a48d.html","e365c8abf8d4a2559fb25389f27a7f27"],["/posts/9cb455b1.html","d7d78359d4e236505fd970eee8622754"],["/posts/9ecdeecc.html","ef2bafbdc01fb4e0ca5ddc5a4c91dd70"],["/posts/9efd7701.html","e2db264d54a9fa6e674c43028249ed26"],["/posts/9f61c1a0.html","6faecbf03b7d8d1919ece89e43f37455"],["/posts/a1de710.html","a92dcfb48b412ae24afd4216554747f7"],["/posts/a30eb0cd.html","73a6259ed0ef509f77ebc6e1e0b0f685"],["/posts/a72f71c2.html","db889a959eaf525df1118789693bb792"],["/posts/a7634b5d.html","3f2fce7a73e074321872197bfc9bd774"],["/posts/a8c593b5.html","53491114274737ec19e448b929c48862"],["/posts/ad0c1efa.html","2e476d9d6bdd106b45b47db4615d3995"],["/posts/ada3f440.html","6a019e5f8b34c839f659229724386497"],["/posts/af1807ef.html","11b1a5590c5f80e87e3d1f4d7501bd12"],["/posts/b397bf03.html","1c09146daf2fb35984ba1f81dbff8ac9"],["/posts/b497b647.html","0cfab12a9093b49e632be8c732b1a13d"],["/posts/b4d464b0.html","cb44e138910f557b3aa88e9c91ff1419"],["/posts/b5fb773f.html","5b3451445f910b8858769275b5bf58aa"],["/posts/b8d46b32.html","0cbfe2e30865b5db2f76d5c2d8a1be7e"],["/posts/c1b2c6c9.html","dbf64159bef4c141421d9d2fd2adf741"],["/posts/c2111cbf.html","11b5ed2140ec464c7a42b3d8655eb1fb"],["/posts/c316c2e8.html","6ff9c9ace14071b6a932e7f0d18c07e7"],["/posts/c43e60b5.html","f0f7b9aaac0b9529f9e0c4723f1460a5"],["/posts/c497a412.html","7b5edf1a079986c70f4aee74e093d615"],["/posts/c5395ba3.html","0a8ebaaebbace7ecd298c9f8cd89b25b"],["/posts/c5de299a.html","52073baf8e6c53927b0dcee81fe6cfcf"],["/posts/c70bba9c.html","18fd7eb75664b13ed45a32faf3a58ec7"],["/posts/c797535e.html","00a22e6253d982ba959164673e4a9ead"],["/posts/c7a62c79.html","69c52d3d7a9c8b625a09e778825ddc16"],["/posts/cae2c959.html","52916d6a6a8d819655c1b85c79a60ce8"],["/posts/cbebef2b.html","aaf2ad57598695b213f9d66a6487fffb"],["/posts/cc4c0017.html","6bf64c2f07c2a424aafd158b634d9351"],["/posts/ce25023e.html","783235abeb58885d8c36668b5a026702"],["/posts/d2fd4837.html","2826ebc6e5ddd1990d3ac1006f0a800e"],["/posts/d3233cbb.html","fc9347456492c2d79bf61e14959e68ef"],["/posts/d3a745a8.html","3378431527237a59eb6bb343e539816c"],["/posts/d7e940d2.html","17de8b1d681b2f4762737bf828d16718"],["/posts/dc815d5.html","dd0fcd3a4c279ac4df3d8b6c9b4e3533"],["/posts/de25b0be.html","e5b99ac8da8dd96bb69fb1dc16b28564"],["/posts/e2623b4e.html","2368e95b7ad6f6e3c4123efd9db804a7"],["/posts/e3ab6ad8.html","fe66431334d6eb9c8f3751b1c4c3deeb"],["/posts/e5018da6.html","07c852a7063d3352372d76fc3df3a755"],["/posts/e5963272.html","cf50c1fcdd7057b1175f9e9eef679a3f"],["/posts/e5ef4c3c.html","92e80c2283190f57fbcafe423daa8982"],["/posts/e624b065.html","167e213e5aa4be19a7bb221d0b1de360"],["/posts/e7c703bb.html","22bf17db76e0c91b0f9d22e57dc9297e"],["/posts/e8f14b6c.html","30be6128d61c8e708dd7214105bbea92"],["/posts/e91abb63.html","b13d407aece55c6d02ba4750e5585e08"],["/posts/ea9a8808.html","374f6cf0c9023fc5bcb481f22bae756c"],["/posts/eb784749.html","b0d7e323c0144df26104a245be3f580e"],["/posts/ebaf2232.html","5e896878cd460fd10b21c0ca432aad27"],["/posts/ed75f185.html","f3ed086ac1cca443ff39a26bde18f4e5"],["/posts/ee1ed673.html","6b54a8c851fa277ae12aad451374f9c7"],["/posts/f0c3ed61.html","1754b29f807816c94496a7c66d2e2852"],["/posts/f151ff43.html","149f7437de06aef87c8c4888503e0e4c"],["/posts/f21e7f84.html","b0f4ba39045aee94ef1ccae27d220f75"],["/posts/f230b0fd.html","e4fda9d4852eb7c22ccba9e0ed5c42df"],["/posts/f28a7877.html","94bbb8bed03e23ad9a0bf708dfe57a6c"],["/posts/f663d5cc.html","f3c4841d960d2597e22fa75fac4ee88a"],["/posts/f730ad18.html","8d5af4b0be00209ace1365c6af538cf3"],["/posts/fb5d4608.html","83d7a7d5a405cd48ba305708c3eb94f2"],["/posts/fc04d0d4.html","c1e3e4c5a37b16429fd4a4ac8dc02ba4"],["/posts/fc455f81.html","74038cb88ce820ecb6fe5cd38cd2fbb9"],["/sumire/index.html","44933c83ef8857474f244929d7e860f9"],["/sw-register.js","7b72dc62eb61a352e083091f54fcbe0d"],["/tags/AKo/index.html","0ffb995c641b6c596e566fef9d6f8b19"],["/tags/APPLE-project/index.html","815a14564b2ea532d407c25861f7ad79"],["/tags/Ankrache/index.html","07f0c9708210a2fc99704dbb7c4d393b"],["/tags/BELL-DA/index.html","1d1c8ef2264c0f4829a0e123e4156d1f"],["/tags/BL-Game/index.html","521016c4e93eedb2d2e6662bf4da1b23"],["/tags/Blue-Dahlia-Digital-Creators/index.html","448dd049826c2e6f72cc6d0054501971"],["/tags/Blue-Line-Games/index.html","5bf5309523dfa2d884991e1e4d12f1f5"],["/tags/CD/index.html","c0a123880e4afc9cff3003647c336c8a"],["/tags/CHUNSOFT/index.html","8f6363a4ecc73a66948a269be83ebcb6"],["/tags/Check＆Stripe/index.html","dd7a6926afd410b19b83742c13f6fd4a"],["/tags/Cherry-Pie/index.html","5e5f78cb8632293949d56c9ee94983cd"],["/tags/Circle-Mebius/index.html","fdd4ac10bba3caade0dc5b32772fc1d9"],["/tags/Cosmillica/index.html","c860f152ba3acba2a46f377280b14014"],["/tags/CresCENT-BLANK/index.html","2668d42691c0429057cc1dcca6d06c0c"],["/tags/Dopamine-Software/index.html","3491fa519df826852445cb0154106bf3"],["/tags/Dos/index.html","99c91e55a55a5c41130555f29cad0f73"],["/tags/Earth-Well/index.html","bf1a8b0d86afc8b583b6fa8d99bd99fb"],["/tags/Forest/index.html","c111b7de0bda569cb118ddd186e4a4bf"],["/tags/HaccaWorks/index.html","c9645a8481b736b7632769779f07a1bc"],["/tags/Kanon/index.html","2c812fb2723fa027d055c033a93fa2f6"],["/tags/MANATSU-8/index.html","949231f96132ed19c9cd5d91ef145dfc"],["/tags/MARINE/index.html","91e5cd32033760b51a6d7872ad25f93a"],["/tags/MIO/index.html","0d277b8689a904bce3c0975c9df28c47"],["/tags/NAOX/index.html","518bbb5038f8e2f1ace1c78bcfcc0318"],["/tags/Namikaze-no-Uta/index.html","4b9517fe4cc8d5e4f42ee03f5de58532"],["/tags/Nmyu/index.html","25da0781ef46dedcb93964938e97a0d2"],["/tags/O-S-I/index.html","550ea55b2e3d5418ddb054dce0e9e2af"],["/tags/Omegaの視界/index.html","556eb7dacdcc357857f678931800e739"],["/tags/P-o-l-c/index.html","9aad538a13a90c170a84e0ba785e3d56"],["/tags/PC88/index.html","5d58532dc4599cb1212c5993121b9eb7"],["/tags/PC98/index.html","512d9ea2b936ec96d4036b9a0915bf5f"],["/tags/Perpetual-Room/index.html","ffa9b871ab97a258f0c56e3a5c001e5a"],["/tags/Pleiades-Company/index.html","cf31683b63120129c73097271011fb64"],["/tags/Project-Twintail/index.html","1c1487817a283f7ead2564fd21b55bd9"],["/tags/RIFF-RAFF/index.html","dae9fea47a3ae5f23a1aeae4c29aaf66"],["/tags/RPG/index.html","17f2432287c7546170f95f38d5af41c5"],["/tags/RPG2000/index.html","43c757bf1347d8fd337c3b6b9cff88d5"],["/tags/Reverv/index.html","c4a66160a59bf5be4747bf317c635212"],["/tags/SENTIVE/index.html","84af0b644f5f2d6b57196b68b2875f48"],["/tags/Saihate-SOFT/index.html","2c36f0c9329ed7e1fa165046f87b70e7"],["/tags/Scrubbing/index.html","9d35b652befa34fc20aaa03a62c747b5"],["/tags/Sky-On-R-imaginAtion/index.html","ba28bba051b4028ff6023c1dd0b74f97"],["/tags/StrayMoon/index.html","5bf9c54152d7bf3e0aa00967b8eefaae"],["/tags/Studio-Bu-Sa/index.html","edae987e664de82f4333c58cff3d484f"],["/tags/TRANSPARENCY/index.html","e33f1eb96c0a1af92e441f1a27ba14ab"],["/tags/ToHeart/index.html","fa940e27fc8e4c7b64284f1c43fcb793"],["/tags/Traumend/index.html","85629dd35534fffe739be14a751208fd"],["/tags/Witch/index.html","5ec98b2c4a5546c07f3005e97d24b897"],["/tags/adonis-project/index.html","e5598422fc195e07ad1c387aec9fe971"],["/tags/capriccio-suite/index.html","071f05525d08d2973b152adcbb90257d"],["/tags/flash/index.html","619897ccc320570f6341a40bc7cbd0ef"],["/tags/galgame/index.html","1cf48e96375d19c205b0ed054f0353f5"],["/tags/galgame/page/2/index.html","0490fa80cc914738ca299fbfc83a44e1"],["/tags/gal资源/index.html","45a436f8ce208e165f52ea11101a2df0"],["/tags/gal资源/page/2/index.html","8ec3d857ca8c4467f2297e06af9c7342"],["/tags/gal资源/page/3/index.html","256668d170aa0b948063734d4a52a114"],["/tags/index.html","fdaecd0fb141f41932dfc8ebbe43c70f"],["/tags/m-kz/index.html","aac06659d7d52edfb2d52db17af614ef"],["/tags/purgatory/index.html","f688ae03699817963610bdb9bff9741c"],["/tags/rkr/index.html","f44efe3cd48dd93692687d3d74801819"],["/tags/team-eye-mask/index.html","8fe1c8f941786131d03236f33686536c"],["/tags/ありすくろいつ/index.html","462ad6b583835248d641ba50d3143b29"],["/tags/いつものところ/index.html","01a7ad18b97792da8cd31ad088680d50"],["/tags/きつねみみ饅頭/index.html","fafc33dd0cc8277c3c8d7abb03d5e872"],["/tags/ねこねこソフト/index.html","816e40bfd0c4fdbc2d30a7d0e2ba5cf7"],["/tags/ねこバナナ/index.html","8afd95f3ae0524ad049b795dc70e9627"],["/tags/はちみつくまさん/index.html","a8fa4ccccc46267ea61efa1d0962fe98"],["/tags/ろりちせ/index.html","46c281697b1befc996122c67f58dff50"],["/tags/アイル【チーム・TATU】/index.html","f0392b3c1d17a41099cac99dd0d894b4"],["/tags/アクアポラリス/index.html","724ec3ba135aa6798c48f496b326fec1"],["/tags/アークシステムワークス/index.html","159b295073811b03b9eae82d81b039d7"],["/tags/ブロッコリー/index.html","6cc9b9c01a7210696ca8da7273cc043c"],["/tags/乙女/index.html","40a010fb9bf06e9aa243bdc186c22190"],["/tags/乙游/index.html","914047d7c23bbe33a61b9b257da2783d"],["/tags/停产/index.html","c0d72dfca67d9e5efb994ec996380aa1"],["/tags/公告/index.html","7b039a1be8581b14cf9a6cfc8bb993fe"],["/tags/同人/index.html","2ba67d94787fc170f00dca3cc21cf8fe"],["/tags/堀井雄二/index.html","46c0a693fc1f449c296eb70084169800"],["/tags/外海なおき/index.html","5dd251446a8e31dba1f1c42be0006f1c"],["/tags/女性向/index.html","a2a4da8bca00cc0a9ccd5de1d88effbd"],["/tags/御茶ノ水電子製作所/index.html","1ab0d1403067d0226450e9fa8123d238"],["/tags/月の水/index.html","f550b75ddbfd913d04aa457f906d74af"],["/tags/桃野衿/index.html","41037367e2f7ad54ff6d4102cd3ed9a6"],["/tags/機械式少女/index.html","50dd1220d56175fd3883246a6f145d73"],["/tags/水仙/index.html","2a550aa9634ef4af0045efc1feadf2e5"],["/tags/汉化/index.html","52e256c6dc5c40e3e0165e3160c843db"],["/tags/熊月温泉/index.html","1f0e2b492cbd816a05355b2d208badcb"],["/tags/片冈智/index.html","1628c2724063b7e2b01e2c021a3a1e26"],["/tags/片岡とも/index.html","ff710277cf62612e38c353a1c7962cac"],["/tags/牙の刻印制作委員会/index.html","18926b012a556488704b4c2892e9925d"],["/tags/牛カルビ定食-FLAT/index.html","35766517b94fbf337f2be4432c87d945"],["/tags/牧尾屋/index.html","acb59286ac98c552bd58d07c212beea3"],["/tags/犬茶屋/index.html","5edb7ed69fdb2d1f2c2566bf34646251"],["/tags/猫猫社/index.html","43dcef2715f03aa85b1230dd13dd3cb4"],["/tags/王宮魔法劇団/index.html","b48465a0c1f0bd294f6b308bded1dc13"],["/tags/画集/index.html","8c18f2fbf3d6651d9e980e6d73d92b03"],["/tags/索引/index.html","4ee46241829f5117dac9f63c3db31cd9"],["/tags/缺失/index.html","8a24c3db755855419341033054443677"],["/tags/自购/index.html","2e0feb501abaa6ef8e74c0f293dd1407"],["/tags/茶葉☆姫/index.html","03340e4cfc472480a13e83bf770883a9"],["/tags/郷愁花屋/index.html","965a3c7f07d56a8bb1a13eeea1e8ad5c"],["/tags/閂夜明/index.html","0a98b12556b2e8e9002ac3322dba5bfe"],["/tags/音乐美/index.html","8132076103f0b054e68577cbe2fde422"],["/tags/黒†救/index.html","d64cccca4781b52d5fa13e46e79aee29"],["/tags/黒百合っ子大集合/index.html","f77dbed19113bd276649075826512d35"]];
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
