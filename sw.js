/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","b8f0cd595c7a68be025ad6fabaed0ff4"],["/archives/2024/04/index.html","7490aca0138801335f323a8417140d30"],["/archives/2024/index.html","a3a4428742242699ee44bc7346428eac"],["/archives/2025/02/index.html","d45d5f434f059775e455798fe8bcf358"],["/archives/2025/02/page/2/index.html","1ad5aa0b0caf39745ef90d86a4e22751"],["/archives/2025/02/page/3/index.html","b9b879b17854478f015b586f5fb9018b"],["/archives/2025/02/page/4/index.html","922f3746170364773f3caedc525df34a"],["/archives/2025/02/page/5/index.html","6bacc1476bd3bc78b8cb71b7091a12a2"],["/archives/2025/03/index.html","dae2d5b38f540667ff6fd999a564ae17"],["/archives/2025/03/page/2/index.html","40aa37c37fcb01a5f23159ddf0b326e0"],["/archives/2025/03/page/3/index.html","a11ade4c629277379450ae9b5a288284"],["/archives/2025/03/page/4/index.html","b7e1ab784d66144e6e01b53d2032b5e5"],["/archives/2025/03/page/5/index.html","673847fb6403f3e1a8264410d6ab87d5"],["/archives/2025/03/page/6/index.html","4d0d88b9907d44f290b1b4c49d08ffd7"],["/archives/2025/04/index.html","a662b0631903046b0701221b6aa27c8b"],["/archives/2025/04/page/2/index.html","ef74c91ffdc8667e3029e48748523056"],["/archives/2025/04/page/3/index.html","255f899a67b2e8f7f2c3661d5c1ed410"],["/archives/2025/05/index.html","e1ac2ae873b3b71508b989e4f46663ad"],["/archives/2025/index.html","dcf74378b79c416b8bf5b5731e63ed00"],["/archives/2025/page/10/index.html","7bbc4dab7f7ab46cc9ee2271de08b2f1"],["/archives/2025/page/11/index.html","cb93464b15b6d2ac7341d34923c4eaea"],["/archives/2025/page/12/index.html","201e393864b868c44873654d0b81158c"],["/archives/2025/page/13/index.html","fe845253806220b52ca922ae84ed2b1f"],["/archives/2025/page/14/index.html","454ebcde53a8776ce1e53b66ab24da3b"],["/archives/2025/page/2/index.html","15792a6023caf226ebc2de8856e5e715"],["/archives/2025/page/3/index.html","252f1d4afd2a4362a6344f30b00ef12b"],["/archives/2025/page/4/index.html","3a81be4680e5c3c3549ac37b806e74e4"],["/archives/2025/page/5/index.html","f0ee876ceb2cba09935d5e2e0aeb7f24"],["/archives/2025/page/6/index.html","8abae8f71ba3361d8a681fa6deced4ba"],["/archives/2025/page/7/index.html","03fc2e69670b53563c98aeeada125ac1"],["/archives/2025/page/8/index.html","d8cfac3b7e63d2ad4984ac65326b5e3c"],["/archives/2025/page/9/index.html","7bcdc4d59adec249d3375797dccce356"],["/archives/2026/02/index.html","322a27c2e3f0b5e3b9ef04ecfd800367"],["/archives/2026/index.html","2fc7909b153ea35ccc5ae5290f8961fd"],["/archives/2825/04/index.html","42288ab0af633f9c0d5b5b0972ff4553"],["/archives/2825/index.html","40612a5d976d43798e3f44ac7e8c91c1"],["/archives/2925/01/index.html","b8caebb410b2d8c71592d31064435e3f"],["/archives/2925/index.html","92c9b281f20a79e861b4078ffd6dfaf2"],["/archives/index.html","ca0cac63e35cdf22aa11233fd5983adf"],["/archives/page/10/index.html","1b3bf5c967adffe326e34230320dbac2"],["/archives/page/11/index.html","907c8448698986b8714cbe19269f8543"],["/archives/page/12/index.html","c6d9aec7e1de38e0b68dc8093a57df31"],["/archives/page/13/index.html","2bca0dda034ba54c708bb98dcd9acd90"],["/archives/page/14/index.html","32f8a49222abdb3bdcd6598a935b99f3"],["/archives/page/2/index.html","e830d74468f8d8228bfa55e9dbc279bc"],["/archives/page/3/index.html","a4d977103f17348b20fa9bca6f1d88af"],["/archives/page/4/index.html","f84a3c606f2a8abbbddf44c5334babe2"],["/archives/page/5/index.html","93eb3aa64f488ca1cd96ca095d4b7017"],["/archives/page/6/index.html","70d1ac650b9a62db9bc29e1eaca387b8"],["/archives/page/7/index.html","e288197f711c1fe39efd99929117e716"],["/archives/page/8/index.html","143155252c7c5f117272db82c69229f8"],["/archives/page/9/index.html","6d7764c19be9120407e34c332975e9ad"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","c129e6b969aa7a4e1e2e082d1c78e3c6"],["/categories/galgame/page/2/index.html","f295c463ceaa55a4b693853440e76db0"],["/categories/公告/index.html","222c857d2c26dd09eba3386b54cba827"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","437d7e7ed67be6c915af976cd050a033"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","becf9c648a7f60ff6bf3be76da20daed"],["/page/10/index.html","b1a4ff0edcecaf8aafd0526101642909"],["/page/11/index.html","bfbe5120d4bcaa34d4552979ae2293dd"],["/page/12/index.html","70e5e16579a2b489104a087498d7d85d"],["/page/13/index.html","4bee8c8b574e066be763e760ba688902"],["/page/14/index.html","ee4ea913821fa834ef19c91641b16ea6"],["/page/2/index.html","d5b10c17c1ef50a4fbb3d13ba92724c4"],["/page/3/index.html","b1b7dcfe0406ff6ec8490c8a8c427ce5"],["/page/4/index.html","a5bdf93dfd06bccd73a5accea0f281ba"],["/page/5/index.html","3cabe74109d1ac6de4e85b4cffe7f0a6"],["/page/6/index.html","cb6c84553a1829bcd33d5bad20b4252c"],["/page/7/index.html","64722c49630d87e6b40d9cc17ce3481f"],["/page/8/index.html","3b4bfc77983b4206294f25a65d1a4e0a"],["/page/9/index.html","709882266e8d3d564af777378f04355b"],["/posts/10c9dd98.html","678651db7b5551c2450924801760863b"],["/posts/126ebb99.html","055c90b252443adcf4ac382d034c29cf"],["/posts/1295b569.html","6f2b0edfad018965914486effadbaed8"],["/posts/1370342.html","f6ca9ab1e78f02874102bb861a33d0bd"],["/posts/15ef14c2.html","51c771e8787750d234349013b32d6c03"],["/posts/15f3959d.html","5d572dfc59f3a331e5493a7644b50596"],["/posts/18ab785d.html","4bcef7f02fa36364b7ca0f34a1fa773e"],["/posts/1d59b71f.html","1bb8be119363dafe03b5326644ff1342"],["/posts/20b3f3a4.html","88402a43c4efa4d73d5630ce52faa142"],["/posts/245f1c7d.html","79cf6b6d1a98e730075665f9b3c62f93"],["/posts/252658f.html","3e78ae07139f3873763cd41dab3054be"],["/posts/28397adc.html","14ab58a7f0297b08b5582f6a9d0fb02d"],["/posts/2ad07f54.html","c05564983b674d2a422053dd22740711"],["/posts/2b38bce0.html","bbf9bc345e0e4932efcaa01be4532ad7"],["/posts/2c0a6836.html","141e9652c4b33201887bb09bc38cde78"],["/posts/2ce39bcc.html","ff93c6d49936a70e011e0c49ee040a31"],["/posts/2cf620f0.html","820378bc9508d24c0da380f71f51a3ff"],["/posts/2e30fd6d.html","391c7eb020bb0f795b6741cca211e8dd"],["/posts/30a413ad.html","2050894af03544678b471ef199b04ada"],["/posts/34292736.html","4ac63e78ebaf4ac60aef6715d75eff48"],["/posts/3468cbe.html","9bfbb97d6cce1a6c092e8bea23a92c02"],["/posts/39176dc0.html","9f94c11cf36645641e822e470616c1ff"],["/posts/3be6a165.html","606707a08b7a1369f14906bf2dcfa601"],["/posts/3e118dbf.html","3d74706e8383d13d3ae36b8d3262251a"],["/posts/3f7d823a.html","ac69d3f4586b417d36d0e8e342d6a301"],["/posts/3f978819.html","51f84e047e11fcea95dd485e935531c5"],["/posts/41dac80e.html","272755dc4d56421d72b8eaf7886b1f6c"],["/posts/43945723.html","f497b71440e9e8a5aeffd1768186582a"],["/posts/44124a6b.html","480770b6e5555cd4f2be8b9f3c15562d"],["/posts/47abb61d.html","428ea06eb6f5b3b833ce64a87236825e"],["/posts/4996478a.html","300c38b043d6fa9ba94fcdc2901dc7d8"],["/posts/4b689be3.html","2888560b3cb4232f01896f5023ca8424"],["/posts/4cf8423f.html","fe8dee66a6da9df9c6577c6ddcca7716"],["/posts/4dcf85c.html","c3258fe720ae14ad86db10b7a2259c4e"],["/posts/500cd322.html","e390f08ae50abfd16b921956eb324446"],["/posts/51c9b1ff.html","31ecc2d3e7f751013432452d99ffee06"],["/posts/52b5b3c6.html","264be7ba0162c085f93230c4f0979270"],["/posts/54f496ad.html","ac1c10468005628e5552171928b860ab"],["/posts/558e1f30.html","b433155b8bf33e23de2900431877a51c"],["/posts/5d8bea92.html","2512a36551d35271078535c8e5ea71bd"],["/posts/5f6e0c59.html","36b0356a306cec7989fa982d0ceb97d7"],["/posts/61a63a84.html","ec7f1e8cd6caa9982081972ebffba61a"],["/posts/625ab7bf.html","f8039815583400593e31b8852c09b016"],["/posts/6336a2f9.html","335586f2a1e92b162b8677c8f02ade57"],["/posts/6432d61a.html","b51821169240446e2fe0f6aeb7fc1ab6"],["/posts/6515f032.html","2f02fc12915e02a31e97f43aee604452"],["/posts/6720ccdd.html","fdd84b77f093bfb7087b21a17680df47"],["/posts/6a4b5ac8.html","bb0773407cc75cf9c76b35ffb9aae5c2"],["/posts/6aa4177c.html","fa5986a55a6732634eff0e24922a1fbe"],["/posts/6b15f81f.html","ec6e563133fab25a0959daf5cb03262b"],["/posts/71131d34.html","1fc2219efa30d176f800436ab90509f3"],["/posts/742fd48d.html","639f48cd0b78b6429be6a56d2821ce94"],["/posts/78a8a8d3.html","214a6abe8e40165be380de0b3ec2dad4"],["/posts/7a5ef3d0.html","096e97cd5306fbc39d2539668f300306"],["/posts/7b41e1ac.html","d01b54f4ec6e16cfc4494d1682469058"],["/posts/7b51011d.html","0e7ca74c0af79f40eb8d265032863fd9"],["/posts/7e3aa3e2.html","1b183e76c61d000de57721260eb9c979"],["/posts/80fe2691.html","047ee6309ee39024855cbbd14012ba49"],["/posts/81ac52e9.html","4b32a4430aef84474227c28c1a98e6b1"],["/posts/82332d11.html","9dbc471bf378d5887a5e7faa023ebdb2"],["/posts/8486f6f9.html","dbc09cc40c4e5db809c3912b972cf249"],["/posts/849b40f8.html","79ed3559c89ef6b4e2e13f10642e2b27"],["/posts/85c51d68.html","012e443e8368fc8a0929ff463048a1dc"],["/posts/86a6c500.html","085e7da14f60be7a4f2a8948b19ea345"],["/posts/886f8d3.html","0b01c8fc8e98fb876057119f86efd8d6"],["/posts/8a7cba10.html","64887d43d63ccae938eb1a418b96bb66"],["/posts/8ac11b41.html","897dedccb534052c16c43811433b6b89"],["/posts/8dd520d9.html","d1e54f8808241957b62ad2ce0b4f1a36"],["/posts/8f555654.html","0dbaf8ec3364f47c2a61329b71a60d24"],["/posts/92a980c2.html","42c7d0682b82084235a32f8a76b4992d"],["/posts/92ce16.html","d1a813a9c27ac06797062ebabf5c50e0"],["/posts/93e9943b.html","6864f449637a94f812a59f5083d680a7"],["/posts/94d3c794.html","a1376ee8e99edbbc2722029efb3078c9"],["/posts/96b281f2.html","13df0c1240529b3e7f4f289ddd23e280"],["/posts/97f50eea.html","c73c0e659d0f686287eb2d7a985f916c"],["/posts/97fca8be.html","dafb40ba82e1bb414f90d432ec5fe371"],["/posts/98662d05.html","9d4ddbaab99dd81f03b75ab33b582b6b"],["/posts/9a2f6162.html","db910730ebe1e34cf32a2274425b0ceb"],["/posts/9b22a48d.html","0ebab0068e38ce9c7ef067d9257cd2f1"],["/posts/9cb455b1.html","85ff134f5a1cbbc97b2f45df4696f63f"],["/posts/9ecdeecc.html","dff73ec674321b7cf45cfff4dcd8c6b5"],["/posts/9efd7701.html","1ee138dc6d58d18e9f5e9c03f47e9db6"],["/posts/9f61c1a0.html","7f8a55aba6e6e5d47da1355f66de119a"],["/posts/a1de710.html","b03bc517f5ce760e24671edcde877358"],["/posts/a30eb0cd.html","4a59c5084b54f99aeda9fa0e7fada95b"],["/posts/a7634b5d.html","e764e44aecf10c7980b0aec3486a967c"],["/posts/a8c593b5.html","3af4a2465137f9b4402632b996c76286"],["/posts/ad0c1efa.html","71facc0b079f5a530ceabc8fd3174863"],["/posts/ada3f440.html","1b46376a890aab0ff43c9e5e88c7d83d"],["/posts/af1807ef.html","10886409e92fdda8815185a7f6ccc3b3"],["/posts/b397bf03.html","51073b3f52e871b5419061ae0c59d224"],["/posts/b497b647.html","f8b582a44cbd8cddc1a46ed5aec9eb93"],["/posts/b4d464b0.html","f1b173e81fd900dd713e7276dc800ce5"],["/posts/b5fb773f.html","e79ddf70248d5d3183f187d28d394bd6"],["/posts/b8d46b32.html","00b90144f1c706f733c7a3b823c3938b"],["/posts/c1b2c6c9.html","6e8f6de32842c8ea692be1708ffd2469"],["/posts/c2111cbf.html","f52c7ec901ecca668f94edb46d87df69"],["/posts/c316c2e8.html","561203b95cea169375910ad9744ce830"],["/posts/c43e60b5.html","27e3639b4d75e14d759d1509f8b1c4a9"],["/posts/c497a412.html","c9696cd7f7938dd490d06c9091f4fb9f"],["/posts/c5395ba3.html","6df2d5de4dc48cb73c18326ecf653868"],["/posts/c5de299a.html","46da9ac3700416d33a6281987cd573c2"],["/posts/c70bba9c.html","57863610245d7ba633215b01cbdfc637"],["/posts/c797535e.html","ebcddbdbfdeb11d5c4c762833f787eca"],["/posts/c7a62c79.html","90768a94f5584e78779dc20889f1b114"],["/posts/cae2c959.html","409f168af0550225a46a20b2cc54b346"],["/posts/cbebef2b.html","e1bae49ae4b260c3185dd47bbf05992d"],["/posts/cc4c0017.html","f47a7526024d8b7166e3a99551eb10ef"],["/posts/ce25023e.html","9dc38e7360da7373f2c56462813ebcbe"],["/posts/d2fd4837.html","5758aa07282b7a93d77611488c60caa4"],["/posts/d3233cbb.html","9d8e9a96212e586b0b1b875dd0b07973"],["/posts/d3a745a8.html","f2ea5c52e2a38f35bae020591b3d31aa"],["/posts/d7e940d2.html","074db3677f70d56f248ea1080ba78268"],["/posts/dc815d5.html","c13278ff54001476438379962260d6f2"],["/posts/de25b0be.html","d3e3ed6a577b8b1a25d5d08c7986654e"],["/posts/e2623b4e.html","96c5fa8169642a6a710579a036cfdaea"],["/posts/e3ab6ad8.html","cb77c265394d82f54491ca0da6dfc0e9"],["/posts/e5018da6.html","2b1de4b914b9086ba0c5620cceda1fd1"],["/posts/e5963272.html","999aea5d6149a0d3d1e38696698ab55b"],["/posts/e5ef4c3c.html","2cba4f5065cd20ab8eb851b1328beeb1"],["/posts/e624b065.html","f0ef2817ff2c7b791200df7ff27de75e"],["/posts/e7c703bb.html","b6c589318f284b49d945eb4c677438f8"],["/posts/e8f14b6c.html","92d3e85aa89b2578372673db32d5c3f3"],["/posts/e91abb63.html","eebaf5c4207d785cdd97235d4b285782"],["/posts/ea9a8808.html","36f595f15dbea107a1ba8a1df6e03ea2"],["/posts/eb784749.html","7e91e983aa8ba39d72cd67ab4461dd13"],["/posts/ebaf2232.html","251d3e0fb0f510f483c0a0df1e309571"],["/posts/ed75f185.html","8193ccc0da5fce89dd6a17d84fb88525"],["/posts/ee1ed673.html","09fd5c56e01e63812cbf3352805b89f0"],["/posts/f0c3ed61.html","87263df9228a3fe60fcc15b1975ec62e"],["/posts/f151ff43.html","41f5bf5b1a0dc92310413b2e2373086b"],["/posts/f21e7f84.html","c8bca5f0710f23d8a3c0850a50fd0c93"],["/posts/f230b0fd.html","7b8d41017c8d615b720f6e2f8124d15f"],["/posts/f28a7877.html","0e57df49bf05f3aa8262d5db3df7ef77"],["/posts/f663d5cc.html","3721975b646b94a12abb5aa881c9fb9d"],["/posts/f730ad18.html","89d8358a40327468502060a38486f8d7"],["/posts/fb5d4608.html","9ab5d1b1e0114f7b44c26caa65623d8b"],["/posts/fc04d0d4.html","ce804b2dcb6cb2cf3e797a4e65f7f029"],["/sumire/index.html","87b53b216647e45e0f3cb69e0bc2ba49"],["/sw-register.js","ba34eaf77ba3fab77ec77d861f15bdaf"],["/tags/AKo/index.html","206d25ce81bc8533f429350392931767"],["/tags/APPLE-project/index.html","b339c281d4f22202b2f7c037c58dac77"],["/tags/Ankrache/index.html","2d27a5fa41105a39f997e81b05476524"],["/tags/BELL-DA/index.html","0f428acf10f9797d4ac5d4e9ab61840e"],["/tags/BL-Game/index.html","7e6aaa9e47cca8724598c2494a878678"],["/tags/Blue-Dahlia-Digital-Creators/index.html","4a69e1edf75ae458142fa9b6c9e55629"],["/tags/Blue-Line-Games/index.html","869c9d2122d5d153f598adc1a8e418a3"],["/tags/CHUNSOFT/index.html","c05126e2778785a264b67f04a32c4876"],["/tags/Check＆Stripe/index.html","493450a06a7cd8f439c9858a8badbc18"],["/tags/Cherry-Pie/index.html","005be2304591576ff828ab49c44fe199"],["/tags/Circle-Mebius/index.html","f70108c08d82bf657c05db4616734c30"],["/tags/CresCENT-BLANK/index.html","6e3e5d3d6f998b039a55dbe61b6614bf"],["/tags/Dopamine-Software/index.html","c6b9d57467f3be07b2eea9e5c93f5cd8"],["/tags/Dos/index.html","c762b6446ea21fa199b6d242333cbc30"],["/tags/Earth-Well/index.html","bb3e1d698ea2c2a354f2592da8e73514"],["/tags/Forest/index.html","9a420899791ae986d89dd3b788c9a4e3"],["/tags/HaccaWorks/index.html","831c2940a815730e3155d8dfb1302073"],["/tags/Kanon/index.html","9bd5ade8c9122db4517819e73c020d13"],["/tags/MANATSU-8/index.html","70bf1a252991fe9726f1ddd71d13359d"],["/tags/MARINE/index.html","e2fcb31694dc13e02b89ca6a0ae2584c"],["/tags/MIO/index.html","b6f5a2ba1a97faec49a031d86011a78a"],["/tags/NAOX/index.html","85a7d7ed15f91b6b103362a72c2df0e6"],["/tags/Nmyu/index.html","57e177cad374e89554e1d6ae758e96c6"],["/tags/O-S-I/index.html","7714295ba7ec589c0a430c4371331e1c"],["/tags/Omegaの視界/index.html","f0b3f7e4803f7de3e1b2cec490fea8a1"],["/tags/PC88/index.html","b9823fe8c3581330274bbce7fcbcfa15"],["/tags/PC98/index.html","1b5d9417ea18badb489b6b0d4ed7a743"],["/tags/Perpetual-Room/index.html","204d5fcfcfedfca2b927701b994cc382"],["/tags/Pleiades-Company/index.html","1bb089c8709dd3e1cbc69eb2995d79b0"],["/tags/Project-Twintail/index.html","a065437c7bdd7c08cf7572a0b09381b5"],["/tags/RIFF-RAFF/index.html","74f8181e1bc2ebc3592dfb8f4700faaf"],["/tags/RPG2000/index.html","addce335559a15a5a4ab5d2d9ebdb320"],["/tags/Reverv/index.html","e0931bbfde324736254f0875a7abda2e"],["/tags/SENTIVE/index.html","6280740ca8ab0d3893661101b5cd8819"],["/tags/Saihate-SOFT/index.html","a5b8d0e815c80ddaffbd458c882a4721"],["/tags/Scrubbing/index.html","4e6dfb4f35c323ddd1706e794f4e1e87"],["/tags/Sky-On-R-imaginAtion/index.html","ffcdf9e7bf09feaa2057e2e3fb4865ee"],["/tags/StrayMoon/index.html","f412209102b74dacec91080d6bf62cb9"],["/tags/Studio-Bu-Sa/index.html","a77da6869053607789351b99f281474f"],["/tags/TRANSPARENCY/index.html","461c57dc4f7891cc5ea27007b78a14ff"],["/tags/ToHeart/index.html","80e9e5af9d238328b57674cfd59aa861"],["/tags/Traumend/index.html","6d399847f48647df83f8c97a93fe3012"],["/tags/Witch/index.html","b0dddd79c70270f4bbd66ff070c7b94e"],["/tags/adonis-project/index.html","ae49458275b5db1d2a53c1ec302099ed"],["/tags/capriccio-suite/index.html","1d01cc2187db18f90487675d45eca805"],["/tags/flash/index.html","deb1bd3d8953d429989d6bd1c50af0d3"],["/tags/galgame/index.html","8d9b759f54d0622d7768449423a36a92"],["/tags/galgame/page/2/index.html","6c7285ee7df210f95f991035f3589da2"],["/tags/gal资源/index.html","fff8d104297ba8a1fd2ce331415cc624"],["/tags/gal资源/page/2/index.html","64235cad67a4621f85360c117d75dbf0"],["/tags/gal资源/page/3/index.html","79f58afa2391e05ecf404d84b6d3ee9b"],["/tags/index.html","9496ce4f3296e64ba3c40e66d1f41a7c"],["/tags/m-kz/index.html","54e4d3ddc39cd33007fb15f1f98b8a30"],["/tags/purgatory/index.html","2b3b8cbc4b7f4f783081125906835003"],["/tags/rkr/index.html","32c00c6c49e5b20b69c29dd63b23ebc9"],["/tags/team-eye-mask/index.html","3c8e8cad52888e2f4e0eb19dddef48ad"],["/tags/ありすくろいつ/index.html","02204695e232a2f14f69920a663487b9"],["/tags/いつものところ/index.html","0be0a6cfbb0a345152dc9de714944958"],["/tags/きつねみみ饅頭/index.html","640b6fa0044304a1af5dd66fe3d8cad8"],["/tags/ねこねこソフト/index.html","abed4838c41b58459a28b0b6099b6525"],["/tags/ねこバナナ/index.html","f53e9d6c61d0db3414295b89b25fc743"],["/tags/はちみつくまさん/index.html","e7033e696871bf9a9410038f1430bf01"],["/tags/ろりちせ/index.html","0d939c95e920e583120e886f6d8b7af1"],["/tags/アイル【チーム・TATU】/index.html","caf4aa5cd306ebfc98211694d8512065"],["/tags/アクアポラリス/index.html","aeb91c3fd6fd6e89dcf611aec25f2542"],["/tags/アークシステムワークス/index.html","da7ab32cfd39f33a96406e9bb4fe820c"],["/tags/ブロッコリー/index.html","0efe022da144a5d28abc9650557a72f6"],["/tags/乙女/index.html","4e39757111883d6333f579cff3bb8229"],["/tags/乙游/index.html","add3924a82f59dab25716f6227c8b496"],["/tags/停产/index.html","731d1316895040bfe594c025eb827bb9"],["/tags/公告/index.html","ab7c74bb8605cf0e75f0a6e6c17f9314"],["/tags/同人/index.html","b7173cc071352370f9ff317d7de60681"],["/tags/堀井雄二/index.html","6d732dee38723896fe8a048788c5b087"],["/tags/外海なおき/index.html","ccb5e9f1198d6d3fd255837ea7e27454"],["/tags/女性向/index.html","e3e25e97eb5e9de3ce4ae983e2ca8ee9"],["/tags/御茶ノ水電子製作所/index.html","191c655a01bdd42eb80bb1da4f1fa80b"],["/tags/月の水/index.html","11fdecb5872871e3ca79a447eebe3f52"],["/tags/桃野衿/index.html","b97d540bf94c626c578f1983792a9542"],["/tags/機械式少女/index.html","9d574b2e023f382a7e76478d61c79a87"],["/tags/水仙/index.html","49956a94aff668549793516c5ea3311f"],["/tags/汉化/index.html","0838234de7da3ca175b0666c7fffdaab"],["/tags/熊月温泉/index.html","84c9889412ba7fa64152fe01bff80560"],["/tags/片冈智/index.html","acebeb746b5cfefef61c7e8a5259ad06"],["/tags/片岡とも/index.html","8f6111ab7b4128501d8a62af96a90d86"],["/tags/牙の刻印制作委員会/index.html","25a86d5b2f4282960d14e4a726c324fd"],["/tags/牛カルビ定食-FLAT/index.html","457990449b1b106072c2265c83065ad3"],["/tags/牧尾屋/index.html","0865520b909ad8db8160407a4eb4752f"],["/tags/犬茶屋/index.html","93dd4dc13a641eb7663e7f5a6b746201"],["/tags/猫猫社/index.html","42d164740c5102eb8f8cf3df23c075d5"],["/tags/王宮魔法劇団/index.html","b67a752c4c52eb73c4d8acdc57948c2c"],["/tags/画集/index.html","5df12f443bc7c0eb0eee9feee005d264"],["/tags/索引/index.html","e2ba6e6eb195afb1325a9db10ebcba1b"],["/tags/缺失/index.html","ed3616ec09de7d4da0a8970023cbcb21"],["/tags/自购/index.html","8a1c5da4d711bc57162d20f09b2764c3"],["/tags/茶葉☆姫/index.html","ee059521f8e033d2a7aac3dbe72b9ba0"],["/tags/郷愁花屋/index.html","618c9fc8523355d8e266b2871c678f8f"],["/tags/閂夜明/index.html","f514194370d33fac3272439343e403ad"],["/tags/音乐美/index.html","a5498669209592a12e20bbb385a510a8"],["/tags/黒†救/index.html","5e188f77778e41c6516a0ade1a98ef38"]];
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
