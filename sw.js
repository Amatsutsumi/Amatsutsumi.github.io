/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","71568ee5c44913d4e386b76e67e320e7"],["/archives/2024/04/index.html","d2a0ec2ebf4c16cd5a7fbfb74b3c2dc6"],["/archives/2024/index.html","e35dfccdfcc57ba83890a0f01596c9d1"],["/archives/2025/02/index.html","31d8ec9d68028ca5a0aac9e53c4c7838"],["/archives/2025/02/page/2/index.html","6805451024da71669be1d9d7e0e53d2e"],["/archives/2025/02/page/3/index.html","891fb113b88d931442cdcf324422391d"],["/archives/2025/02/page/4/index.html","ea1629c419a403ef8dbe5b30e2fe8564"],["/archives/2025/02/page/5/index.html","f6edee7fe20ecf0c0798fabe12f5400e"],["/archives/2025/03/index.html","112fbfb0071497b1a9533485a17f9214"],["/archives/2025/03/page/2/index.html","d9247f538473f79b9c3d480cdd065146"],["/archives/2025/03/page/3/index.html","8beb35273b4844702d46ced07d9c0462"],["/archives/2025/03/page/4/index.html","9deb83ffeaad1d9589c99150dfb9107c"],["/archives/2025/03/page/5/index.html","49771339abe23c46789bb25fa35126a5"],["/archives/2025/03/page/6/index.html","4388848937c5730472ed75a3e4f36c95"],["/archives/2025/04/index.html","1166301d915069409fd22bb646ffcb6b"],["/archives/2025/04/page/2/index.html","3f34396bc3aa8f713e4851fae4746942"],["/archives/2025/04/page/3/index.html","bc368e51c34efedf0b8afea13b3149a0"],["/archives/2025/05/index.html","884b8a8a25f6c0673fd616da346f4eb4"],["/archives/2025/index.html","5c49d717ea358fa73bb7c7030ced7415"],["/archives/2025/page/10/index.html","7146c466ea9eb489a244d54811d5d7ac"],["/archives/2025/page/11/index.html","6929030e8be3be033fefb966d1e034f2"],["/archives/2025/page/12/index.html","2af2f6ba860e46e37f1a8a0f10756d7f"],["/archives/2025/page/13/index.html","493e1dcefcca3333ccc10ad5b2f6077a"],["/archives/2025/page/14/index.html","9fd0982f0839ec3a3bae244bb611a44c"],["/archives/2025/page/2/index.html","e6efebac28f3155d3ba9f1a1b133b30b"],["/archives/2025/page/3/index.html","2f2104386c9aa10af4219233aa776421"],["/archives/2025/page/4/index.html","de2a9e3bc8dbd49795dd3b1157c536a7"],["/archives/2025/page/5/index.html","156c8d6a91c3a58009fd2cedc3c7d3ce"],["/archives/2025/page/6/index.html","b57f67ec9dc9e858e5f1358ecb79d308"],["/archives/2025/page/7/index.html","d9329f83e00b86a330fc8ccee13e96e4"],["/archives/2025/page/8/index.html","5ba0f42ad3fb8492be6a6f14c10c9455"],["/archives/2025/page/9/index.html","6141d3dc47ec1ee1caae2e078e553453"],["/archives/2026/02/index.html","3a3341a3ee2e90d85c074ec315977bd6"],["/archives/2026/index.html","c4b172afa5c467ff06ee1bafbb9acb4e"],["/archives/2825/04/index.html","4e01a6aac5ce51396e32e8adf553e47d"],["/archives/2825/index.html","e4831d0f6daeb8ead765bcd1cce92037"],["/archives/2925/01/index.html","fedcf299326e189f4807b874079a8621"],["/archives/2925/index.html","2816ff8dad1b100a99fe44978577f3ef"],["/archives/index.html","e0d844595a424fe77eb06b0f08e8505a"],["/archives/page/10/index.html","c0776843ecc5dafb0a8a417305fde4bd"],["/archives/page/11/index.html","189755472c53f6e6dfa58c1fdcd3ba7a"],["/archives/page/12/index.html","4e9fea216b323b57d3e847871e0f9a40"],["/archives/page/13/index.html","beed3fbb552606d38f8ef7fa2ee14205"],["/archives/page/14/index.html","6e46b317fd7634164a8a8a75ff69de96"],["/archives/page/15/index.html","f0812dd348cb8642802477405c56276a"],["/archives/page/2/index.html","f42bcd51427fecfe360dc5de5112eaa2"],["/archives/page/3/index.html","7574389934d6637af9b374c760b0ab22"],["/archives/page/4/index.html","9ba7675528352e2ddd5abd6165fa550d"],["/archives/page/5/index.html","d6e23349145e4f0376b2c100b1cae7f8"],["/archives/page/6/index.html","7ad3a38a39fa3048146eebb0f5cfe3ea"],["/archives/page/7/index.html","2ccdfd27eb1514791981a5da9f5e1b67"],["/archives/page/8/index.html","d587e7d9eeb9bb82b6ddd51748258ba1"],["/archives/page/9/index.html","818c9a9e418dfeb7c2f48eabb55ecc6f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","aad1640e28b91c6dd7125460691c1b91"],["/categories/galgame/page/2/index.html","b240593e0a9d61f4b1482d703169fe5c"],["/categories/公告/index.html","c46931f89e6ebb1f824035722981cb84"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","9706bde485cc2fe9c3aff377aa64cb70"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","508195d858971118ad9a18fdd507e927"],["/page/10/index.html","0eecea972b376e4d9e3775007e1af403"],["/page/11/index.html","a69a2e1528cea65ef3cfb884ea7c7963"],["/page/12/index.html","b2c48d7512548cf1584f45d06705e672"],["/page/13/index.html","ea242cf251a5e1d4880c85f2e076e619"],["/page/14/index.html","30957dbdaf3268e9f27a0bfae06b705b"],["/page/15/index.html","2eb118336f334f054533c263e974176f"],["/page/2/index.html","28ee808303433fd5f11a7a745a23c466"],["/page/3/index.html","ba7d24bd168aa31fb1fb34c220d226bb"],["/page/4/index.html","ee47e2ed6f67f1974070d022c6511ef4"],["/page/5/index.html","c288f47f89d2d52083a4103ad6be1279"],["/page/6/index.html","d368870cf8afe05a417882ce2e9b8ab6"],["/page/7/index.html","42e7b58bd49cec060bb874bfeaab74af"],["/page/8/index.html","97073bf352c5164e6b320757e76e6141"],["/page/9/index.html","476cc773c5f36c36ec7bcb7fb886aa40"],["/posts/10c9dd98.html","85c7874d0efff8c437b273d061124dfe"],["/posts/126ebb99.html","2cacd5493d77a987f380866d42a7020c"],["/posts/1295b569.html","06221e7a2bbfab90f57ecd2a3306a8d9"],["/posts/1370342.html","4185d7b2e8d1acd5d893f197cd93181e"],["/posts/15ef14c2.html","e7bdb02d3e0b90d42d2aae409490e866"],["/posts/15f3959d.html","97e8cc709ddb7a7cbf8deccaf1797eba"],["/posts/18ab785d.html","667cb36d1f6ff23eba0271627f9dc3f8"],["/posts/1d59b71f.html","8efa50d527da1349ddea675e221f2b2e"],["/posts/20b3f3a4.html","2b3160eac3806e3f11767d6f917ffc2f"],["/posts/245f1c7d.html","f564b76e408c9179636958c243e0e9f1"],["/posts/252658f.html","eafaad74a492702401d58c3c693d2636"],["/posts/28397adc.html","ff79b3e5f45a4658ff170c2ce68c7b29"],["/posts/2ad07f54.html","f27d79c1587a0e556f204880d4ba6be4"],["/posts/2b38bce0.html","5a7471ba2589065766ec97a4562939b0"],["/posts/2c0a6836.html","59751a5d2688fbb2ef50bc0ff890c620"],["/posts/2ce39bcc.html","0ca2c9f1a1749916ffb78383a9a46b3c"],["/posts/2cf620f0.html","f52448f2d65043bc6385723875dc8d21"],["/posts/2e30fd6d.html","29cc7d6eafd272d0c7c3eaced1b8af7d"],["/posts/30a413ad.html","9df8b47b824d4ac48c3503a9ac8fcc1e"],["/posts/34292736.html","eaf41d57ad21ad28ff8ae5da04ff1293"],["/posts/3468cbe.html","ec8e8edd309e35fda84c54e7cd4f4291"],["/posts/39176dc0.html","13db24e081f7784abcdfb09289ed9b7b"],["/posts/3be6a165.html","b4ccf443ba4cd2046dc29f0ba5ba271d"],["/posts/3daf73b4.html","8b2849a6da9d22884d311348162b56ff"],["/posts/3e118dbf.html","da08431b39bb037092c2c1528c8554aa"],["/posts/3f7d823a.html","0cd7fa3404705c21c76b1b21bc7a2dc0"],["/posts/3f978819.html","228104e4da09c48228d96ebe2c5e3089"],["/posts/41dac80e.html","97230be74dd4138d0f4a70b6cc94b5c9"],["/posts/43945723.html","e9e9b59c341d5f4eaecd657b51ff7ef0"],["/posts/44124a6b.html","197785fb5aa4ae7e9fa453a64bc84b0b"],["/posts/47abb61d.html","5921d4d513f6a64830f83cd902df2baf"],["/posts/4996478a.html","9c3d5c6a627d2892b0e4fb46df489e15"],["/posts/4b689be3.html","7d5b6247a52cdec549329121f8677e54"],["/posts/4cf8423f.html","2571588f27067795f6a9bdcdce215dff"],["/posts/4dcf85c.html","f4542dea49cf7615c61a91146c5da1e0"],["/posts/500cd322.html","ae3d0d349dd1f552f6ae29effd29a737"],["/posts/51c9b1ff.html","1a6dd48eb1b41603e75e9e96cf4b45a3"],["/posts/52b5b3c6.html","8243977aad2120924a59a153dfa3f141"],["/posts/54f496ad.html","b6d3ada46c367b639a7bf954d24eeb9a"],["/posts/558e1f30.html","d3fa2f08b8f701ee15e54b0c5b21d445"],["/posts/5d8bea92.html","539958eaa75335bc3a9cff4d21f4a126"],["/posts/5f6e0c59.html","fc92d6372baa7824f1f6adb88b19d8c3"],["/posts/61a63a84.html","bdcc66dd6621bc38a0bdce1ccbe69cf8"],["/posts/625ab7bf.html","5012de04b7647d8ab29d2992488c7c1f"],["/posts/6336a2f9.html","466f7306345f51f914332c85a5fb7105"],["/posts/6432d61a.html","86021592c84a4ddd8fe3a2b6128fe452"],["/posts/6515f032.html","2cda097adc70f1d6b47600e1ba81e88d"],["/posts/6720ccdd.html","20aee00dab59ea276ac550fc0f27c8d1"],["/posts/6a4b5ac8.html","ccb088250a0835716bed0594843514d2"],["/posts/6aa4177c.html","76edb5a0ec11da1c1fcfe80e6d35dba7"],["/posts/6b15f81f.html","d33401b2eff0beb7af6a484e6e60a46e"],["/posts/71131d34.html","479e859d1100cdbe1da0a474e8af7b1e"],["/posts/742fd48d.html","4c308f8407edc27aabdd15ebcff1b0f7"],["/posts/78a8a8d3.html","67cd5aaf514096ec93246beea24ac2b6"],["/posts/7a5ef3d0.html","bcadf34e69d119eaa46c0599d162b67b"],["/posts/7b41e1ac.html","08caaf809962200519221eb7b0e0482b"],["/posts/7b51011d.html","52b607b236c4c2747495e4663f7e1021"],["/posts/7e3aa3e2.html","224c81ede93a5e2c4f08f8f90b500d55"],["/posts/80fe2691.html","675afcf9b246d7abef910ea32bd8042b"],["/posts/81ac52e9.html","1c7351db4192c7ae9dd644ae0b76915b"],["/posts/82332d11.html","f1a06998612e235f8d4becd580892e2b"],["/posts/8486f6f9.html","caa6c3b2d6abfc517439b824abcd4ae9"],["/posts/849b40f8.html","1711762f27c153596eff078b54c6e814"],["/posts/85c51d68.html","b29c7d5977af01304ec153bdba6b2fa6"],["/posts/86a6c500.html","9660cf47bab4f791a98ddd4f10fc1c84"],["/posts/886f8d3.html","366551fd959b148e35c3df95020ce0e0"],["/posts/8a7cba10.html","008772c09c4e41427775a31ac31c5426"],["/posts/8ac11b41.html","84d2ac4a789b1833df29a935dbc51f18"],["/posts/8c3f2fd8.html","46646abc28c7024733c6d7deaf2342a9"],["/posts/8dd520d9.html","35f95f8d457175b37d977a27429b52d7"],["/posts/8f555654.html","f1d5b67dad90866312d24d2f3d95351d"],["/posts/92a980c2.html","a64eb615e101777478ab5260caa7f0de"],["/posts/92ce16.html","4d22903f5ec30e23bd65f1551d7f7731"],["/posts/93e9943b.html","c68c70b9c90d63abe62c505955d61efc"],["/posts/94d3c794.html","33fdcd26c8a5a963685fd5a236ace4b4"],["/posts/96b281f2.html","a982ffbd6dbc73b60687afde5a0ce2c3"],["/posts/97f50eea.html","8d2442d472236950294b256209c0d62f"],["/posts/97fca8be.html","da28fe432f5c0c1856c8007d447924d4"],["/posts/98662d05.html","bf1e3bc22e013101013bad08d8aaa1ce"],["/posts/9a2f6162.html","dbc3cf01a4b8354d97923e5fa60d6d81"],["/posts/9b22a48d.html","3641a15323bf872ed20d88f6e981e17a"],["/posts/9cb455b1.html","2af50c9e8b6d3f5906cfe22a7def5ba8"],["/posts/9ecdeecc.html","7f1289b2d9c335c57fc3d3e318c53542"],["/posts/9efd7701.html","f3839fc00aacd2062351ba05d153503d"],["/posts/9f61c1a0.html","42add9c8a0105b1cc000797aa0180126"],["/posts/a1de710.html","3c0da250f477f0e2777e0966192aee03"],["/posts/a30eb0cd.html","a19fa3d983d0c6d6667b8ea26a42a32b"],["/posts/a7634b5d.html","54f1659ce18a2b106ef0cabd7438976d"],["/posts/a8c593b5.html","764483345fe2dbb331ee3ba162e42c75"],["/posts/ad0c1efa.html","8c0c6a13cd57855140aa16d3d3889b27"],["/posts/ada3f440.html","3c3b845fdabfad04b186c7e9db33db5b"],["/posts/af1807ef.html","5d7238c007dc0ee3004aedd932b99bb6"],["/posts/b397bf03.html","6b5498d14473e7cb9c4ef2480059c580"],["/posts/b497b647.html","e8ab80aafded772ed43fe5cf5de76d28"],["/posts/b4d464b0.html","6acc80287dbf33d50e807f93d0d62da6"],["/posts/b5fb773f.html","f20c041e1cb3245da27a2a89ebf08913"],["/posts/b8d46b32.html","bf26cd54cf976783b5f2691c16fc29a4"],["/posts/c1b2c6c9.html","8996db76991cc56b56d0a03441653977"],["/posts/c2111cbf.html","fe0104461b6ba810b182dc1946959f8c"],["/posts/c316c2e8.html","d64de6f11c2737e9e8701fdb0415b051"],["/posts/c43e60b5.html","d217652c15546c138e67d7661d6f51d9"],["/posts/c497a412.html","9f6a38beebf27e7f0fff7b40511132c3"],["/posts/c5395ba3.html","196adfbe3685107d0c91586baff80c7e"],["/posts/c5de299a.html","2dec749f470a5ea82493183ba28efc5d"],["/posts/c70bba9c.html","ea6660ad12b7d1ab873e48cda7dcadc1"],["/posts/c797535e.html","fcae29099fc61fd19a731268de7e5600"],["/posts/c7a62c79.html","cf54519394a5c573cddac63bcf2ca0e8"],["/posts/cae2c959.html","1e8d587e9fca2b26a4eb4460db274270"],["/posts/cbebef2b.html","028cbbcd0bfd08fbbe83e19cb426601c"],["/posts/cc4c0017.html","10dabaffe67763fd5f14f15f856a43ec"],["/posts/ce25023e.html","d6ffdadd646ad55c7fbf5ff8d336683d"],["/posts/d2fd4837.html","b5e4650d34b5380157ed2f78fc8221bb"],["/posts/d3233cbb.html","1997909a8167b7dd1f1ff5dddfcf57f4"],["/posts/d3a745a8.html","8dba15ac37a813f63bddb74ccea5de8f"],["/posts/d7e940d2.html","8278eb101ec5c5fb630f8f229fd0c040"],["/posts/dc815d5.html","55af1b5e31b267c33aee630e24781624"],["/posts/de25b0be.html","400d867128b4c8da7c32f2e5d3560df0"],["/posts/e2623b4e.html","d7db1ac06e278a704164f4ce00f8ec90"],["/posts/e3ab6ad8.html","84e2d8ccc47a081b52bf60bd2d3efd0e"],["/posts/e5018da6.html","6e6a7728c330a7b8a43432bbe140812d"],["/posts/e5963272.html","ac7d16a13592df04c9a522f6ecb7776b"],["/posts/e5ef4c3c.html","06e0b1794ce7759fd01e334bc14cbc69"],["/posts/e624b065.html","530fc4f7fc9268531a7ae8b3c9d7166c"],["/posts/e7c703bb.html","b1caaf8f5e37e9ce77c9a28ef839d483"],["/posts/e8f14b6c.html","dbf37ac9a289f2235317d63008290aaf"],["/posts/e91abb63.html","82d27b52ead25c15117fca43e263744c"],["/posts/ea9a8808.html","1974144a09bffc1bb512bae2d41feb55"],["/posts/eb784749.html","64b2b5c23159cb1be6b2ce22b302dede"],["/posts/ebaf2232.html","7fc5ac457a0997940a8154c9c1a944f6"],["/posts/ed75f185.html","ba32f04574d252366cd88e065b274d5e"],["/posts/ee1ed673.html","4e3ab8a71cdf474c19d31f761a955879"],["/posts/f0c3ed61.html","6b299d0d3474184aa9f57d01451f85c3"],["/posts/f151ff43.html","4f4547aed8d704d0518dd9bddea7e80e"],["/posts/f21e7f84.html","487412ac97adc03d229229458ee59e83"],["/posts/f230b0fd.html","c2d479921c23c86da3086837b76f93ab"],["/posts/f28a7877.html","d36b0e5b118457e38ed1d1b7647201ae"],["/posts/f663d5cc.html","53c646c41fc7f21e8b591b1347b4c8b4"],["/posts/f730ad18.html","e69fc4b98c9e2f24f0922da86aab140a"],["/posts/fb5d4608.html","3734bf39e15b5cb88b6adeaef2ddfb77"],["/posts/fc04d0d4.html","cc30936e1c7d0504e07652bcebfc380b"],["/posts/fc455f81.html","8ea52cd316abf463dfb464482df50882"],["/sumire/index.html","3d58fb415f9c4194e5f693c6c6150518"],["/sw-register.js","853e47c36dd0908797b9185b3bf27498"],["/tags/AKo/index.html","f281e0782f0b494cd8eb44fb1656c5f5"],["/tags/APPLE-project/index.html","0bff6788cc2c7fb9b70bd334fefe5052"],["/tags/Ankrache/index.html","9e423f9615f3418b0243d85a189d4204"],["/tags/BELL-DA/index.html","16085da25e054cd35b80c54fe81e4316"],["/tags/BL-Game/index.html","ab4bf26108c7ad049b12ac166ff1dd23"],["/tags/Blue-Dahlia-Digital-Creators/index.html","68b60e666320012196c87adfc54e46ed"],["/tags/Blue-Line-Games/index.html","3ba203f7de363d281d3e0281c342daa4"],["/tags/CHUNSOFT/index.html","939cf44afb45db5b612f4ae785dac5dd"],["/tags/Check＆Stripe/index.html","b009e63f9637a97e829faee3a7d18cda"],["/tags/Cherry-Pie/index.html","51b0568f3f11bb626c77d740e32bf382"],["/tags/Circle-Mebius/index.html","ee9c14fcd55a8a2de2a50b66416aafa8"],["/tags/CresCENT-BLANK/index.html","a189ab2040625096feb09f081cb890c6"],["/tags/Dopamine-Software/index.html","54fd4d908e310380b89a543f3bd2a3e8"],["/tags/Dos/index.html","5c6f2e6d81ff823e001854df92eba994"],["/tags/Earth-Well/index.html","30e618de88efe120177192be7a34fa77"],["/tags/Forest/index.html","fe72ab06c5560ec31732ab12bb63e215"],["/tags/HaccaWorks/index.html","3959fc86a5a24428a87e69dda7be5fdb"],["/tags/Kanon/index.html","24751e8ac324a983d2a35fab59e4d812"],["/tags/MANATSU-8/index.html","426b8f66a7c7a34ba709992596eb00e5"],["/tags/MARINE/index.html","381e74d8fe61c8c8f2ad917147e08bc2"],["/tags/MIO/index.html","331a46a9fcfd45e7f1b7f473d9056896"],["/tags/NAOX/index.html","d2d5f64d3bd244c6c0550367ca277bf8"],["/tags/Namikaze-no-Uta/index.html","ab6cd700154b23b31d6337f30b9c5a2e"],["/tags/Nmyu/index.html","19a8e363ab47ee246a2152751247a7fb"],["/tags/O-S-I/index.html","34a28327cb6337dbc83507ce30ab12c6"],["/tags/Omegaの視界/index.html","a1ed8f94c426c84b58137c532dd66c91"],["/tags/PC88/index.html","b55d3a028a9bb20e829c8afad6f40786"],["/tags/PC98/index.html","0b08a180d949feb273ba662633d3b1af"],["/tags/Perpetual-Room/index.html","5c749feab78f3c6c1953c0faeb4c0396"],["/tags/Pleiades-Company/index.html","3d40024e1b5616d074f43aa0e23ebffb"],["/tags/Project-Twintail/index.html","ffae4e81b9b54bdecf2844b2bff0d7bb"],["/tags/RIFF-RAFF/index.html","f2bd0624dac2b37c9e5f717566e4d3a8"],["/tags/RPG/index.html","0f6bae48224d9aed5f29c4f72b347da6"],["/tags/RPG2000/index.html","94dce476467b869a572a40aa38377aa8"],["/tags/Reverv/index.html","d6e691841f6eb3f4b2889ea8c6385371"],["/tags/SENTIVE/index.html","b00834d1c2f11e765e88b3b3733932d4"],["/tags/Saihate-SOFT/index.html","82f3e40e6973b545e00251ecc64315d1"],["/tags/Scrubbing/index.html","998a808252966e80687a4f1cfbb46460"],["/tags/Sky-On-R-imaginAtion/index.html","dfa9f5ee7872063fa22565c1549e02f2"],["/tags/StrayMoon/index.html","de40b15a147ed5af35d2f1c739254c4d"],["/tags/Studio-Bu-Sa/index.html","51c34c348ec7d6d9c60e7ecc5f5c5c1b"],["/tags/TRANSPARENCY/index.html","b2755d62df104c854032e437e5236741"],["/tags/ToHeart/index.html","b8a2948ba646d952d359ac288e36814c"],["/tags/Traumend/index.html","85165bd25e611ee7a4e8ece139df2ec2"],["/tags/Witch/index.html","0b6114799018edefe7ef7b31fa8b31aa"],["/tags/adonis-project/index.html","5bf97a5e2d452337436695f21ed97d10"],["/tags/capriccio-suite/index.html","9e1e45f0cb9132d2b80c3e29971957a9"],["/tags/flash/index.html","c9e40a8a6fbd03035d754ca43bd27484"],["/tags/galgame/index.html","484c8664783a1b12513c84473983b519"],["/tags/galgame/page/2/index.html","c07e83b03dcf86671b08c4b07ae80f93"],["/tags/gal资源/index.html","c476459a7bab5866b7f3e3ff3169b0ac"],["/tags/gal资源/page/2/index.html","deeadc2f4a628d1b353575372f366eb3"],["/tags/gal资源/page/3/index.html","e653f8d11076ba0e871f521080b80a59"],["/tags/index.html","f93f56abc3422094677a38f0731ab186"],["/tags/m-kz/index.html","ff89882af0d2427509359e6110fe89e4"],["/tags/purgatory/index.html","09d7385674ba508a7603a2988c4102e2"],["/tags/rkr/index.html","c21f058ae9cf235f9f8cc92b3870769c"],["/tags/team-eye-mask/index.html","8b964a2674d63abc1e7bd8de5f5d88ba"],["/tags/ありすくろいつ/index.html","5fadc46bd3d40358cb82b793bf445ac8"],["/tags/いつものところ/index.html","4518a15c7ee6024b1f789233a28eaf99"],["/tags/きつねみみ饅頭/index.html","752d7c5975e4b60cecd0535ccd96b031"],["/tags/ねこねこソフト/index.html","49cb0ec81ea0beb2ce8fa9df4cb767cd"],["/tags/ねこバナナ/index.html","f2ad18bb5987cd89b7c05eed633e957a"],["/tags/はちみつくまさん/index.html","058288939e03717cd766618e5f9e81ae"],["/tags/ろりちせ/index.html","36af5a1491647693de126a17f5828d48"],["/tags/アイル【チーム・TATU】/index.html","61b1bb37b03118b31e1339934fabd001"],["/tags/アクアポラリス/index.html","2561d0baf3607192a9fa6bb5e2b597bd"],["/tags/アークシステムワークス/index.html","3938403a9074325093f7652996130bdf"],["/tags/ブロッコリー/index.html","38eea9f2b47155dfeb3f7e4c153e6dea"],["/tags/乙女/index.html","241619f26e0153543744af187163bb23"],["/tags/乙游/index.html","650c9111e027ec2e32c12683a7bf9f0c"],["/tags/停产/index.html","7e1acd1f82215d851f7de1ae24efb068"],["/tags/公告/index.html","3d44d04b68fe538f3460e79baa2a8b1a"],["/tags/同人/index.html","f4afed0fd14e29e83e6d5b08547669c7"],["/tags/堀井雄二/index.html","b89b4edcb21399e0a66209a3f6223cde"],["/tags/外海なおき/index.html","2ae98222aa01d53c5978181f61bac61e"],["/tags/女性向/index.html","a68c6a869611268768b9e6bf40e15465"],["/tags/御茶ノ水電子製作所/index.html","5985088e9cfd0a577320a118f2459b7f"],["/tags/月の水/index.html","a89a279b1a985cd4f977d4a12da2c416"],["/tags/桃野衿/index.html","0ae1880c413653bdf5243a36a8d97ca4"],["/tags/機械式少女/index.html","894dceb0800e3be92da6ce81e95006ef"],["/tags/水仙/index.html","cd8981ace361b9ef202bc728088bc256"],["/tags/汉化/index.html","aeb3f6295167977f745ba784e14abadb"],["/tags/熊月温泉/index.html","f85bccbe6b8f00d6c78e37fb784b754c"],["/tags/片冈智/index.html","d4fa9f3bb1286e58545de07b03fbd072"],["/tags/片岡とも/index.html","72368a08dddc0fcc368f0b8112d62c41"],["/tags/牙の刻印制作委員会/index.html","1e7780b476e837a5160586743c8a1df8"],["/tags/牛カルビ定食-FLAT/index.html","3d6a92bbf15aed6b0ad7248ffc79bdf0"],["/tags/牧尾屋/index.html","f6291fdf6ec639eabdbfd62c9d70962b"],["/tags/犬茶屋/index.html","87d5bc09638963cc3a9da176175f15ad"],["/tags/猫猫社/index.html","94810c183ca22a4d70b284a2ffd54f3c"],["/tags/王宮魔法劇団/index.html","e07a69893e57eeb502334cbd75301b14"],["/tags/画集/index.html","cae0df89a68b0ef9346c8c6d5a77bebe"],["/tags/索引/index.html","529f1cf11ebf800d1119da7139142c82"],["/tags/缺失/index.html","32049ff14e92d562d99a4ff89ec42499"],["/tags/自购/index.html","b2219884014df84dc399b0f5dcc0f834"],["/tags/茶葉☆姫/index.html","23dba6684d9953e23566eb0aab78585d"],["/tags/郷愁花屋/index.html","5b54500ec9816e064540438da23fcfb2"],["/tags/閂夜明/index.html","759918d7d449a6dbd73f04b9050f8dc3"],["/tags/音乐美/index.html","0cdf93496445fa2870570cdb1627125a"],["/tags/黒†救/index.html","f4698689159c5fb83e0745ef4893d444"]];
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
