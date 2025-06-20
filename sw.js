/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6d1728635017c455df7cd828f5c6dc6c"],["/archives/2024/04/index.html","59f4518cced63b500d07248d65eb72b2"],["/archives/2024/index.html","dc449e3d3f3730f313055a49a0a2769e"],["/archives/2025/02/index.html","1905e745a64c8299eae334bc793e2be6"],["/archives/2025/02/page/2/index.html","3c0486578fc49498fb00101edd713412"],["/archives/2025/02/page/3/index.html","5774249e434daefa34955e7254c6fb1c"],["/archives/2025/02/page/4/index.html","37499cfada8440ec24e0bafdf2c0cbc2"],["/archives/2025/02/page/5/index.html","63a24e728f65a275f70591be7c6fea13"],["/archives/2025/03/index.html","6b9fa2ae7f003ed8a70def9849e8477c"],["/archives/2025/03/page/2/index.html","d25db5a14116ffb6ec31d1e44c50d60c"],["/archives/2025/03/page/3/index.html","51a144916bd1ada8b91dfb15fb9f12c9"],["/archives/2025/03/page/4/index.html","e425c9d44eb2d8cec59ba91262ca97d1"],["/archives/2025/03/page/5/index.html","b5f7ec1e07714de08a086cee297ecf18"],["/archives/2025/03/page/6/index.html","1f54b5a443080f25d3f08859a4188bb0"],["/archives/2025/04/index.html","3a62efb233bbd823127f4f4a464a92a9"],["/archives/2025/04/page/2/index.html","4b9e89defda4cadacff796a9e43f3c6a"],["/archives/2025/04/page/3/index.html","eca806c156ee5c5ecf75538ee3343aae"],["/archives/2025/05/index.html","aee5f7a35eed1aa3a06282e1b857af48"],["/archives/2025/06/index.html","2e03496df55345e6fd549ff93049cb8a"],["/archives/2025/index.html","f76219496183652226124581395d0988"],["/archives/2025/page/10/index.html","a56ecaac0cb0ac99873da95f4bbef5e8"],["/archives/2025/page/11/index.html","c5150af41a400f3a3090a81d6d0fe2d1"],["/archives/2025/page/12/index.html","3fa0d958529e705724410c7855e58417"],["/archives/2025/page/13/index.html","27f5c9a6e2d5e1307fcbbdb5713e2fba"],["/archives/2025/page/14/index.html","cc59ece39e2a19d7961e0eb122f72133"],["/archives/2025/page/15/index.html","e0ad932bfb215cc1b4dd9a590ede8a2e"],["/archives/2025/page/2/index.html","504c147b2d74ce82a30a37b955a51539"],["/archives/2025/page/3/index.html","26f6e1a828883cafc7de089de4c580ae"],["/archives/2025/page/4/index.html","f012aee3576c8bd76520a608b04537c9"],["/archives/2025/page/5/index.html","07709e07aa58bfb46ff97a93b1a4ef37"],["/archives/2025/page/6/index.html","03397f8230f244fd856c6150832453e8"],["/archives/2025/page/7/index.html","196934805bed90c056380ee741ae3f74"],["/archives/2025/page/8/index.html","4f62e4011d6dd55eadeecece17e3bc10"],["/archives/2025/page/9/index.html","c200486748a7b84acb7f2a3a1e817749"],["/archives/2026/02/index.html","4c490031dadda68a196cb60e732277f7"],["/archives/2026/index.html","f22a1dec0733f603e54f01b2698683eb"],["/archives/2825/04/index.html","2b3ce262c3449852970325d71ddcf931"],["/archives/2825/index.html","e0ab0b8f8b0b1d1c7867ebf677f93028"],["/archives/2925/01/index.html","ab789abbbf5aca163dc448fd33cf5756"],["/archives/2925/index.html","c3cd126839267c0b446556976171597f"],["/archives/index.html","5d076570b252a3c3ace7d82d5576e360"],["/archives/page/10/index.html","62a58af704cf03d6e72a36c4604e749f"],["/archives/page/11/index.html","223d29de30d2a62dd4c6cbb0fd0fce6d"],["/archives/page/12/index.html","1e3981e9363e330157f518c4f515b460"],["/archives/page/13/index.html","6903f9faf388c0ffa8ea2608ea60ac94"],["/archives/page/14/index.html","2aeac998b98b426f5a2afec877d35d7e"],["/archives/page/15/index.html","c513576bb39aa4331184df20a29531cb"],["/archives/page/2/index.html","eac3fe2ca81bdc8f4dc0d402dce08417"],["/archives/page/3/index.html","6cfe3e1e5d5f934540aca846f5d24447"],["/archives/page/4/index.html","549827ac2e16f4fccedeb34a639a747e"],["/archives/page/5/index.html","ec5170fa9a1fbd344ea2fd1181f286ca"],["/archives/page/6/index.html","ab2c6b774039f969148262d89a4eb36e"],["/archives/page/7/index.html","4b30ae048b16df19781917fe51080826"],["/archives/page/8/index.html","61766f935f4521c01eacb570409cef3f"],["/archives/page/9/index.html","bec2ff082891d5add2e0546b424b651c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","2b505cf722450f10b1c57da81539d8cb"],["/categories/galgame/page/2/index.html","9c287258dcd54cbc9281646cc76e0a9a"],["/categories/公告/index.html","2810a4ee8c1bef30ca3ebd45371aacca"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","ef17edd7c6ddb2b392c23744740adc64"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","f7f7d73282f7f51133b734a23cd8e192"],["/page/10/index.html","41a7b1acb904f75bb3c6437f1c648a01"],["/page/11/index.html","c857d229b6d38bc77bef4be7330b2490"],["/page/12/index.html","f89de1bd789bf0700000f568d918370a"],["/page/13/index.html","d16d405f0e04ee648dcbae9bc175873d"],["/page/14/index.html","fe21d5be0b46ee18d551a674793209f0"],["/page/15/index.html","3c3f7b2cb0e67cd1a35534c806099b2b"],["/page/2/index.html","4774418800ca9919d1b8b5ea7f9d34b8"],["/page/3/index.html","be52634c6f39bf4ec78422dbbff7b123"],["/page/4/index.html","5febbb3ef654d2c4b9cc9abe82756151"],["/page/5/index.html","be57948c7bbe6735feee8d03a1cc01bd"],["/page/6/index.html","691caef9ce75b82ff40d218ae1a4212c"],["/page/7/index.html","ef7565b9d3b4fa77de40de7cde6f6213"],["/page/8/index.html","5d09b81b9639a57a4cc592433288fe50"],["/page/9/index.html","157f7446b4b11115ed9b0548065b2ce0"],["/posts/10c9dd98.html","ca6aa62d9ea275f30125d6efeaecbba9"],["/posts/126ebb99.html","f84f6085ffc5e29dd0eccc3ed5b5ecfb"],["/posts/1295b569.html","d3d39e1350fd5a594d9e2a3c46c0a8ec"],["/posts/1370342.html","a5a80396e1a287bd9439aebb5a989241"],["/posts/15ef14c2.html","b59570a9ede5c9c5d85b65fb8d52da02"],["/posts/15f3959d.html","c89b2890b6d0bc85878d0ef22397d897"],["/posts/18ab785d.html","65df0549a619a758986ea590c4f8f149"],["/posts/1d59b71f.html","75ad776174abd23baa4583dffab9b8a7"],["/posts/20b3f3a4.html","5f49775c826405e0b437204d2a40beef"],["/posts/244daa7a.html","6cecc5607f1f3667ca01aaba4532c89b"],["/posts/245f1c7d.html","137e27de7804d6f14c0ee4981e7b80e3"],["/posts/252658f.html","df8ccbd294426861a856c16a35356b76"],["/posts/28397adc.html","36195d3b781c8109c0aa11b699625a7d"],["/posts/2ad07f54.html","eb8479b7c4c14ff0938b214b377606fb"],["/posts/2b38bce0.html","622c0a11205b692abbf6624072f8abc0"],["/posts/2c0a6836.html","81cf3d8199e7c4a9393ba9de8a74ac7b"],["/posts/2ce39bcc.html","286a9282ef16a19a877a83073427fbc3"],["/posts/2cf620f0.html","a650e0234aba5bddb5484cb523a9d2ef"],["/posts/2e30fd6d.html","4daac015b7e35d44aa59c18b987f3cb4"],["/posts/30a413ad.html","9fad58a5afef0801ea5cb1319a78cfe1"],["/posts/34292736.html","67b8a1066f48586a966ed333b2e7ff0f"],["/posts/3468cbe.html","72870c725fccec364be07880986cceac"],["/posts/39176dc0.html","ef3890f8111853a5ce18e37f5491d655"],["/posts/3be6a165.html","d71b9d91adba10db4bf290fc67d858ac"],["/posts/3daf73b4.html","e9989f4427a545fb4bba8932bf908c26"],["/posts/3e118dbf.html","3b330f50c92bd3b8cc6203e228c0a201"],["/posts/3f7d823a.html","d2a643b32b4a5e9217b3f1db1d3356ee"],["/posts/3f978819.html","5e268e800fe645a1882cf4f5b5d25191"],["/posts/41dac80e.html","dd163c5a69efbd897c0b121125cbf89b"],["/posts/43945723.html","8b21be8afdd8ca70aa6acf84d2242951"],["/posts/44124a6b.html","ffc1b5f23ad895ab80ce8a084e3acabb"],["/posts/476a3006.html","a4a10bfe75037ce95a0c7e97af9d7eb3"],["/posts/47abb61d.html","3a8501bc4ec047befd15e44ed5b82062"],["/posts/4996478a.html","0bcec642871efa3e816537418c2770c4"],["/posts/4b689be3.html","096c3d4e02ef89ec8edde323236c3b4c"],["/posts/4cf8423f.html","c378e1f433d276fe50ae53be1cc85755"],["/posts/4dcf85c.html","c4e352f3ed3deb20464db47803e35834"],["/posts/500cd322.html","dbea51a7e2ad0e2190b963e427623ad6"],["/posts/51c9b1ff.html","e5835779aab0c90162fdf09bd536c03d"],["/posts/51ce68e8.html","bf25dd545c0e44613b9bd68488618149"],["/posts/52b5b3c6.html","61095b09b71f83f9f9bc890084ec2e78"],["/posts/54f496ad.html","1c397b5fac3c032fbe96131909d1cebb"],["/posts/558e1f30.html","5bb49c927f3b3596315cc580ad2b64ae"],["/posts/5d8bea92.html","5bb8659e92f72a5ba63b281c2a359c1c"],["/posts/5f6e0c59.html","ffd1ac8e350ce87377904eb88a7271eb"],["/posts/61a63a84.html","04709acd03361b7bba4c2c3b1be9c232"],["/posts/625ab7bf.html","f70e7098aa73558e35e0a7994b38c7e1"],["/posts/6336a2f9.html","1cf7249b45ad74f99b0c4d990224765a"],["/posts/6432d61a.html","8ce833ee0201fb8045c91ffb46b19abe"],["/posts/6515f032.html","d036af3a077675d981eae900e8ac2fba"],["/posts/6720ccdd.html","efef9c1460037745ff95dfaa6ca67025"],["/posts/6a4b5ac8.html","b336de359c01cb44447b813b678da565"],["/posts/6aa4177c.html","6fb0e26009b72bc64c36977ec01aaf94"],["/posts/6b15f81f.html","5ef9f32128233e0ed55c11f4d6fbc399"],["/posts/71131d34.html","fc18cf226c593d0a1c3f5a3dbad96202"],["/posts/742fd48d.html","f7052fec3fc7d9f0f05891df0b2a95b2"],["/posts/78a8a8d3.html","947c16ab1f0fe4bd6d7be85a55e98e87"],["/posts/7a5ef3d0.html","3735c780cbb8b11fc7ec9d665c4ea79c"],["/posts/7b41e1ac.html","997db92f4c8ad7f426254ce402e6a94a"],["/posts/7b51011d.html","c84eeb56161bf924621ab146bc9b7be9"],["/posts/7e3aa3e2.html","bce51bdb83ed280cfaf5f80401820468"],["/posts/80fe2691.html","378fc60edb30ea2a77419a7f3e56a191"],["/posts/81ac52e9.html","5523e7cb298c47e5996f781d6f9f53e5"],["/posts/82332d11.html","f7903d9c5be4e8d4a59e3743ae26b79d"],["/posts/8486f6f9.html","499814c0164d8c929a414e11cc8872ef"],["/posts/849b40f8.html","14c3a7701e4cc392619ec6b96c16b150"],["/posts/85c51d68.html","7536eb0b6b458413b2db68eae656b4fa"],["/posts/86a6c500.html","dce579d978149e5836fbfc25ac5d6906"],["/posts/886f8d3.html","7bac75d7ce8df50723ff24724379b691"],["/posts/8a7cba10.html","534e9ef944ad6581c7eed2fe7c97acd4"],["/posts/8ac11b41.html","dd12f9305230f676e73949488996639d"],["/posts/8c3f2fd8.html","e9f9fc88b890c051277ff1cdd787f5fd"],["/posts/8dd520d9.html","e8d83c3c2baf889d863a293302d7d4fe"],["/posts/8f555654.html","366cd18b953c8ce8b00b27113c9585a0"],["/posts/92a980c2.html","468799afee5c81e9c3eb781d5cdea72f"],["/posts/92ce16.html","70a63b76f218e90722c540040528e037"],["/posts/93e9943b.html","a0b130a756210646b4ab482983afacae"],["/posts/94d3c794.html","7b6556db1292484fb8ff68172cd8b3ce"],["/posts/9606c2fe.html","5cfb30f2fdff9f9272477060e06036da"],["/posts/96b281f2.html","9c96df2f5227eba069830c631f552976"],["/posts/97f50eea.html","524bf926bc1fe8db40ee2ccf3665687d"],["/posts/97fca8be.html","764814016beb42dd2dc45a0b6d3e512e"],["/posts/98662d05.html","4fb85b265ba5f42b0fc955b4b265e3de"],["/posts/98ef47c3.html","160eaad5af6056df9641a2b2cd00cb3e"],["/posts/9a2f6162.html","7ff4eae69f36a86a001453dd60091e82"],["/posts/9b22a48d.html","713be078c906a404193dbc0016305518"],["/posts/9cb455b1.html","202a289506d2bcaec4985f607a959d9e"],["/posts/9ecdeecc.html","abf79f9cefdd4a93675e7dbe994a4448"],["/posts/9efd7701.html","272e3e5a418ed57b1044490530540c34"],["/posts/9f61c1a0.html","d7899523d9dc85a1388ee2137cdae048"],["/posts/a1de710.html","fb2fdfce8b9c24210c24731e66502ab8"],["/posts/a30eb0cd.html","a7461067eebf3addc423a44493c5c604"],["/posts/a72f71c2.html","5cd71bbba11bfb2ccba2432b9628c239"],["/posts/a7634b5d.html","15952717d65b81a20e0c0e88f04e2e47"],["/posts/a8c593b5.html","81541bdf2345fc95006bc836e71c36da"],["/posts/ad0c1efa.html","288437fa9ff9c5f9453b34a37351e96b"],["/posts/ada3f440.html","6b06941a5e3d9003e769227c1bceaa2f"],["/posts/af1807ef.html","d30d962764ef00f63292f181368f00fb"],["/posts/b397bf03.html","690849508a7d509d1b01b26f1ebf9b78"],["/posts/b497b647.html","88093c8495e938cb229f5dc296c6833b"],["/posts/b4d464b0.html","797acee6f242f459451fa8c57b590f22"],["/posts/b5fb773f.html","c142eea8612920b8e780479f5d7519d9"],["/posts/b8d46b32.html","a03c6fb3697451ace18cc06c7f3341d6"],["/posts/c1b2c6c9.html","d9940c4189f964cc050a065990806117"],["/posts/c2111cbf.html","29cb875738e5f17050fbb502495266ab"],["/posts/c316c2e8.html","bd22e744cbf8634464965b1bc8e40aca"],["/posts/c43e60b5.html","191ef351159d6947615307c504f1e39a"],["/posts/c497a412.html","5fddea3878bd3fc6007eb1567deeccdf"],["/posts/c5395ba3.html","8f9445efca016289495dabf56531d203"],["/posts/c5de299a.html","fe17b584dcd3f9b8fbedb73e0006704e"],["/posts/c70bba9c.html","de5136c839f5a01cf3d25c9b3d0f0338"],["/posts/c797535e.html","4fe7fa572de599dc3b79e4a34c330ac9"],["/posts/c7a62c79.html","40cd6d753f41641404a3e1f5cf19af3f"],["/posts/cae2c959.html","cb8d07b896a3b218eeb5c5b440281998"],["/posts/cbebef2b.html","354f5af97e175bd544c9f388bbf931be"],["/posts/cc4c0017.html","440c8583559e24a918156efc9d1e7cf9"],["/posts/ce25023e.html","73106cd4e3edbfaf24aa24490175b1f1"],["/posts/d2fd4837.html","1bdaa8d7cd3ffaa2d67efc2a69afa7e4"],["/posts/d3233cbb.html","042d4d0791722e5580a969b390a33fa6"],["/posts/d3a745a8.html","bb746a4346f2bde3136b91a3c798b024"],["/posts/d7e940d2.html","627e0424260c5f2995c57468af50aff6"],["/posts/dc815d5.html","ad7479cf97987c6063225b9d46be6565"],["/posts/de25b0be.html","fd0f42aadea9f1f2d344d0dfce919ce7"],["/posts/e2623b4e.html","1001973827101c1f7b7793b7dd827096"],["/posts/e3ab6ad8.html","a196ad84d38dc84776cd8f083dcd0318"],["/posts/e5018da6.html","b10ae08712529b5f898a1c7a0e2159ff"],["/posts/e5963272.html","84bfa66b02d2d61b7b90bd1749488c4a"],["/posts/e5ef4c3c.html","de629ede025a61d4c11bc4762717c57d"],["/posts/e624b065.html","9a46c30d8294f3033272dbf1a7eab257"],["/posts/e7c703bb.html","f8a031d56f36e24ece5bf273d2554932"],["/posts/e8f14b6c.html","54f7ecf3e26b0079ed1de067c558680f"],["/posts/e91abb63.html","872b853ba4a6c529a8bba20b9b4d6ded"],["/posts/ea9a8808.html","f15cdaac30fc2184d1b770969242945e"],["/posts/eb784749.html","be9b762fa815bc011285c46712a62703"],["/posts/ebaf2232.html","a0f2cf67d7f569532ef079179aa7c8c0"],["/posts/ed75f185.html","cef97c38b2e4b8d7bdd836d1d4e4c653"],["/posts/ee1ed673.html","e54d81041427c5c6e493fad4421ab61b"],["/posts/f0c3ed61.html","c59ce1d7a46fcc5d1d3525ed2d7b4876"],["/posts/f151ff43.html","b374988fd0ac4c0305a94d6a5ebc9b0a"],["/posts/f21e7f84.html","4d3b56b835deb128942011a8a4931947"],["/posts/f230b0fd.html","13f72dc3b0d5b9aa2531203057cf632b"],["/posts/f28a7877.html","766f6ac2dd1c7e9aa5d3e73942a6344b"],["/posts/f663d5cc.html","a9c001455ea16ccc9847075ed5dc1fdd"],["/posts/f730ad18.html","360d9979cb8925fbe4618adb670a8d08"],["/posts/fb5d4608.html","623f91da6b9dffd513227a1715694ccd"],["/posts/fc04d0d4.html","062b7d0aca8682636bcb5f348b833788"],["/posts/fc455f81.html","fc5c88ec7e78010856ffbe1399b3785e"],["/sumire/index.html","dae99e9af164be5b7f8109e3eb981a40"],["/sw-register.js","a1386964df54b64f815d7906f7e1a002"],["/tags/AKo/index.html","bf43da9a9986849bdaf20347b65e5785"],["/tags/APPLE-project/index.html","c21b28b4d40939cf3c43d120afa92bd5"],["/tags/Ankrache/index.html","2cb4422660bdfebcca986d502e94cec8"],["/tags/BELL-DA/index.html","91489522a1884b3a9c4b4a4bffff8911"],["/tags/BL-Game/index.html","478f440f81e44cf570d18843833e2bfa"],["/tags/Blue-Dahlia-Digital-Creators/index.html","80dc4f6b5ca5036a03c1206bc0541bb3"],["/tags/Blue-Line-Games/index.html","37b571cee6579f2eac6eb4498ad434ed"],["/tags/CD/index.html","c7766dc77cbfe37334c1e4fbaf14c0ed"],["/tags/CHUNSOFT/index.html","6514ec73257d3cd0091a39c69fc13e11"],["/tags/Check＆Stripe/index.html","9f4b8f0daf7370528bfad2f4943f01e4"],["/tags/Cherry-Pie/index.html","622272a00e09b2344455ed3ebd4e1759"],["/tags/Circle-Mebius/index.html","c99e0f64199798075216a4bd4e2de57d"],["/tags/Cosmillica/index.html","d0cbccdd947ff9ce0d8ba98e80dc0548"],["/tags/CresCENT-BLANK/index.html","ae88b9092b53eed63ae6740aa91c59c6"],["/tags/Dopamine-Software/index.html","2043039c7ab515b9c36de90dd9758c83"],["/tags/Dos/index.html","6fc794929a80c40af9ed8392fd77fc87"],["/tags/Earth-Well/index.html","e18c2aef14a4277d072465bc4300755d"],["/tags/Forest/index.html","34171a742e0e5335da6a4c8a171ee8c0"],["/tags/HaccaWorks/index.html","ef73989573e2da327a015e6c34cbf41f"],["/tags/Kanon/index.html","145f93b048b2b0be1ead2e8df7ab03c0"],["/tags/MANATSU-8/index.html","71ce8ed9642e1d381b265ea14c14165b"],["/tags/MARINE/index.html","edd82102cd7a0da1ae8af73d26b3ef46"],["/tags/MIO/index.html","359fb8988b67b11cd0b68bde721533f6"],["/tags/NAOX/index.html","c6b67334a024dbbf4091b74cf9320a5f"],["/tags/Namikaze-no-Uta/index.html","3a5d208f2f38eca72a26ff3d902a71aa"],["/tags/Nmyu/index.html","d362fac33f69dffe7bf9bf356849ce5c"],["/tags/O-S-I/index.html","ddc987091c464bc9c43d1ece45fde318"],["/tags/Omegaの視界/index.html","ea8f946235279d1700dac50f159faf57"],["/tags/P-o-l-c/index.html","30a78aba2bd453cfb18759569e0e3dca"],["/tags/PC88/index.html","8d5da3046eff97a826446c1bf18d3994"],["/tags/PC98/index.html","a2f3b07c096636cb37bdbff17fbf7f6c"],["/tags/Perpetual-Room/index.html","8430a2a6c12157c20d4958c886fd3ac4"],["/tags/Pleiades-Company/index.html","1fb0f3bf13802cf29327b0d313c3e100"],["/tags/Project-Twintail/index.html","0e6244d2e5f98fbae0a4f4bd14f7fd36"],["/tags/RIFF-RAFF/index.html","eedd45c16657e92a6426c6d95f3e492e"],["/tags/RPG/index.html","b49dd83b6945fdad09efdf5132050aa1"],["/tags/RPG2000/index.html","ff0ea863b0a42ff19ac1206188d1fa5a"],["/tags/Reverv/index.html","d2ca2c89c3ee912349d9bb03e74faaf9"],["/tags/SENTIVE/index.html","60e53c88343a9db15ebf794516b8cde0"],["/tags/Saihate-SOFT/index.html","e129f04a019be8714df3772d2101cd40"],["/tags/Scrubbing/index.html","b5b02d7fd5b41d917713ffa2a481dc3c"],["/tags/Sky-On-R-imaginAtion/index.html","40daa8e145a0b426ecd8135051fe846e"],["/tags/StrayMoon/index.html","6398e1b9a43b2800f0bcfd0a9b6a38d4"],["/tags/Studio-Bu-Sa/index.html","68a48d424db0864fcebee621f89b0e46"],["/tags/TRANSPARENCY/index.html","72f4bc0d10206d0da4d5a0e0f7a5412f"],["/tags/TRANSPARENT/index.html","6a55b0a62e2be22cc19ded6ce0b06c4b"],["/tags/ToHeart/index.html","121b7d657973ea6cbe3960bc819ee900"],["/tags/Traumend/index.html","b9d4b9daa4cdde7785d40f2615c40e59"],["/tags/Witch/index.html","d1ed3c2bcda5774447448d6d299e1f94"],["/tags/adonis-project/index.html","96cf26fd621ba7fa8ef95423695e8bc2"],["/tags/capriccio-suite/index.html","27751a1c76ba82326fb376c1f9913660"],["/tags/flash/index.html","355e2a6036192275c817aa869f002c5d"],["/tags/galgame/index.html","73c9496f892d4928f6b6057943fb9eb3"],["/tags/galgame/page/2/index.html","0eb7f62458a2cf2df68decd0cc748be9"],["/tags/gal资源/index.html","c2ddb8da2251bf4bf55777161940c550"],["/tags/gal资源/page/2/index.html","ed1dd9a7f4d1f36c436b0efbc99bbf9c"],["/tags/gal资源/page/3/index.html","5c82fa56b3a286f2addfd05205ee0c93"],["/tags/index.html","548f650eb3a6dfa9d250cd3d63350156"],["/tags/m-kz/index.html","c6f67294b9a36f5de3b2954ee73bd26e"],["/tags/purgatory/index.html","6d3a30372cfe5adb73bb40ac8a595938"],["/tags/rkr/index.html","3b82f63a930f0e43a785328e80f04c78"],["/tags/team-eye-mask/index.html","79a88d12206bba74d8deebfa921049dc"],["/tags/ありすくろいつ/index.html","41eb3bab93d79cadbc2d31157ee745c1"],["/tags/いつものところ/index.html","d451f9b316b1b837ec4039423aed9bbb"],["/tags/きつねみみ饅頭/index.html","a7b2e75bdf04093ea7170379289be7c2"],["/tags/ねこねこソフト/index.html","da6ec41278b9c69acf261797a319516f"],["/tags/ねこバナナ/index.html","5223674813e14f95ee1827af30860e12"],["/tags/はちみつくまさん/index.html","15109882f28d28a71b52cfa4740d8107"],["/tags/ろりちせ/index.html","480042b4107d96c92135a93763320cda"],["/tags/アイル【チーム・TATU】/index.html","18abfe1b109029335898957bf99bc333"],["/tags/アクアポラリス/index.html","6e416c3571346c824e5fc26a61f6f96e"],["/tags/アークシステムワークス/index.html","1f4db5cfb71ff2b56ec60b9515c28fb4"],["/tags/ブロッコリー/index.html","3f4bf60a6e2373c66344f98e151589f5"],["/tags/乙女/index.html","734965e811f6108d7aa68d8dd29b4199"],["/tags/乙游/index.html","2125b27126f9f024a59c4af3cbd71c38"],["/tags/停产/index.html","40a7bdc90925931da47f4f28c4848972"],["/tags/公告/index.html","6276715a9e8eb1ee28c9138399098d19"],["/tags/同人/index.html","39af0d33aa1522d643adf1401b346396"],["/tags/堀井雄二/index.html","9ba7f4927c9412a4bef718a7dcec1eb1"],["/tags/外海なおき/index.html","b02a2cc85dbb2d665b1b70a24d0e1c12"],["/tags/大熊猫/index.html","51692bf5ffca0ff989cfd70c12773ba0"],["/tags/女性向/index.html","82cdff152490c93b87c7fd7751666d9e"],["/tags/安装/index.html","e271e49f02cbb579a908687760e80671"],["/tags/御茶ノ水電子製作所/index.html","c123030e9ae19c5f8232039ed39599eb"],["/tags/月の水/index.html","71009f95c9e479f53b0c2b7b7d1b2197"],["/tags/桃野衿/index.html","a692c5e0332be4cf72c6238a55cf6f27"],["/tags/機械式少女/index.html","1f57779abc6ee66bb7415ea79a40a096"],["/tags/水仙/index.html","040e442319918a7f556bd433560212db"],["/tags/汉化/index.html","d9cdc775695f799204eb73148cb2ce9c"],["/tags/熊月温泉/index.html","f0d6cce9b49d1059a01661cb9a4ffa10"],["/tags/片冈智/index.html","5852f6fc84b737e18c890315a6cbb6fe"],["/tags/片岡とも/index.html","3a1d3a95028c196bae1c4c03fe051378"],["/tags/牙の刻印制作委員会/index.html","7fbeb4959d1905c74ab45d93ef3bc38e"],["/tags/牛カルビ定食-FLAT/index.html","6c962df462ee801ba588c4a21a5b1082"],["/tags/牧尾屋/index.html","151e1838701755db12852da4db2ebcc3"],["/tags/犬茶屋/index.html","42ea1896fe0a3729851c597eb6081d6a"],["/tags/猫猫社/index.html","d0b7323c2b45989818803b6fa95c37f5"],["/tags/王宮魔法劇団/index.html","2d3c1bc70f02f22124ca6e6a865fa3d6"],["/tags/画集/index.html","0d8d8dbd5774ec1110cdd2475c44828c"],["/tags/索引/index.html","d7ef2e4024fbf5e1fb6575340c441571"],["/tags/缺失/index.html","a524a80f00e83d321d98cf7c448105f1"],["/tags/自购/index.html","2b8b4851c4e423cab83c27b8b7ceadd0"],["/tags/茶葉☆姫/index.html","9b3e5782e8b9bd425c06aeb53062e169"],["/tags/郷愁花屋/index.html","00bedd9a331c38fb7425a52fb854f099"],["/tags/閂夜明/index.html","93ac01af4dbd5c65c07faffdb5f4668f"],["/tags/音乐美/index.html","fef8ebbbb5858ee62aa5a4fa3a3e2130"],["/tags/黒†救/index.html","ab2c3e55ba5f43e8ce8fe6d562db683e"],["/tags/黒百合っ子大集合/index.html","30c66a50246fa681b833b00347e8c648"]];
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
