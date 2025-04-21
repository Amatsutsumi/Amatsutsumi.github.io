/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3f83c812fde6076316aa11b3b96bb9b2"],["/archives/2024/04/index.html","3e834512b891dc3119a80697b35b93cf"],["/archives/2024/index.html","0014e0a8e0d8dad8111bececc7c57959"],["/archives/2025/02/index.html","5638ccec0a295d30494719392031d4be"],["/archives/2025/02/page/2/index.html","06f1e292911cc3b1dc5ae69679a0a966"],["/archives/2025/02/page/3/index.html","6597c06af2b3e91916c98bada98a977b"],["/archives/2025/02/page/4/index.html","664dfbbbf731c381778a08b1b9e58820"],["/archives/2025/02/page/5/index.html","b9fdc79104d1798cd388281ca9b5c809"],["/archives/2025/03/index.html","b63098f89f7cea44984fbb2e04a43726"],["/archives/2025/03/page/2/index.html","126b76a8ee3f5aa77a7f363f9db8dbda"],["/archives/2025/03/page/3/index.html","7e2927eb437e9b780c4fb2412fc910ed"],["/archives/2025/03/page/4/index.html","a6f6e4ffe531d4501ebf4975b7bf199d"],["/archives/2025/03/page/5/index.html","f70526f9844aef33ac20ccd4f0f9fc53"],["/archives/2025/03/page/6/index.html","6ceb2993a87f2280bb57f66b75ecaf51"],["/archives/2025/04/index.html","f2ab1ddbe78ebab7a9a7049d241d56c6"],["/archives/2025/04/page/2/index.html","353dde4bac68970b7b6c446e8687adff"],["/archives/2025/index.html","59e9a4ed14abad29d7344fb22eea261d"],["/archives/2025/page/10/index.html","67409002d64def915e4e84cb2cbd86ec"],["/archives/2025/page/11/index.html","6c0b760d6dad8282ba758ddc26d11c1a"],["/archives/2025/page/12/index.html","2a181b21465734b3f8e7924ef01d3c80"],["/archives/2025/page/13/index.html","bf0b8a10d3cec31120b6f9f8d4b164a9"],["/archives/2025/page/2/index.html","4fff28da6d8d51ae178e4d3454409fac"],["/archives/2025/page/3/index.html","1b94a906b52346575fc834886b7933ee"],["/archives/2025/page/4/index.html","e6e607641ed44088ba999001d6cc6bb5"],["/archives/2025/page/5/index.html","88fef0417b8e814af72513f937712931"],["/archives/2025/page/6/index.html","790f93944d7f8573ea82bbd8043ee88a"],["/archives/2025/page/7/index.html","dc3f732013c176d1ec42c7334a6d4100"],["/archives/2025/page/8/index.html","d63e30bffffbbb779cd122cf9cddd6c8"],["/archives/2025/page/9/index.html","0ba9c7006c8d7aa6dec3db9572d4be6f"],["/archives/2026/02/index.html","b57e8026553f83781a21e7df11af6cb4"],["/archives/2026/index.html","5bd90a2abef7c4db844361a7203dd51d"],["/archives/2825/04/index.html","9b645574512e2e0587b17ae5911befc3"],["/archives/2825/index.html","86ac599d4958992e84a4f45ee8b61855"],["/archives/2925/01/index.html","5fdebdd428bb15e5082f8e14a3f40051"],["/archives/2925/index.html","701c8f72bb985475c182f26a0c373b03"],["/archives/index.html","ae2e631cb41afb6a13490d4eb03e6475"],["/archives/page/10/index.html","dc246e290385ed8d6d8095a12ece5120"],["/archives/page/11/index.html","46c1a6d41f6078f38b0a5d353ef21047"],["/archives/page/12/index.html","ad5b23f687ff9c62ccc126f918d7c927"],["/archives/page/13/index.html","5e74091a5044520772bb9898b8678d8e"],["/archives/page/2/index.html","f39fa6eafa8d5d31b0c4f38dc6e15319"],["/archives/page/3/index.html","a8307409e8846d7c8dd6a07e50eaf248"],["/archives/page/4/index.html","481929e632ecbae3d19a767f7545a7dc"],["/archives/page/5/index.html","5e862528dccb9f99e1390607b014bb3e"],["/archives/page/6/index.html","f1be9be74cbe0c90786262ff6ab96129"],["/archives/page/7/index.html","9f41fdd3a6e3bd101d990f774eac8a75"],["/archives/page/8/index.html","c90597b6062d6e0339f3cd744e68d63f"],["/archives/page/9/index.html","7ad49bcff07bad079d6561365d79b59a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","9b0a709d0c7db3945cb6f346ea7f4cbf"],["/categories/galgame/page/2/index.html","4a749b49221987769561997854d6d61f"],["/categories/公告/index.html","a22fc229c46021a9be6732b92626fe27"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","8a9bd96e72509791d9029c55c04862d3"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","1f7d09a83e7b8026a45f10feecc73e69"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","548fcbdfddeb83729a65ebc356bac2be"],["/page/10/index.html","c4213c8377940ee93ad59518bb11054a"],["/page/11/index.html","f1d88a9f98e0a380b2cb21f5fe42a575"],["/page/12/index.html","0431e61595abb8e7a2fe1f8d141cd5ad"],["/page/13/index.html","7daae96c76e66ee68499a44767e252c1"],["/page/2/index.html","533fa03b77b65b6e164e6bebac707383"],["/page/3/index.html","c413f0ccc6162de6ec4e48d03490c7d9"],["/page/4/index.html","e4fd557c7a2049993964fc2c306279e0"],["/page/5/index.html","4daea029b599180b89ccc3487eb52f7f"],["/page/6/index.html","7cc341b5e8ccc3493d328b091bf20636"],["/page/7/index.html","079b0575bf3e22513adbf6bd7da5e04e"],["/page/8/index.html","20b00d85b4b9a1d5176b979628ddac8d"],["/page/9/index.html","9caf7856c0b76e6a5003eee0826368b7"],["/posts/10c9dd98.html","1446e6a87b50870756a7f696d0bea022"],["/posts/1295b569.html","7f3b8fd114a62680e9c7100244746869"],["/posts/1370342.html","3cfefcca5fe8691dbfd79bca3eab3b01"],["/posts/15ef14c2.html","8486b188ff523198b259eda640be2d1b"],["/posts/15f3959d.html","7521718b423d0f8b16e2630edb0db64c"],["/posts/18ab785d.html","7393314cec65ae3ecf37c41ab557ad5b"],["/posts/1d59b71f.html","007fb13048dd9bce8eb068b052dd3716"],["/posts/20b3f3a4.html","b7884656edd1cca03245701e437bd797"],["/posts/245f1c7d.html","f6211694ee77b90d55b716dba30f67ea"],["/posts/252658f.html","24e1597c23073b0e064f6da4579a1de4"],["/posts/28397adc.html","ae1f4dd41601f37a2d56be487d7fc4ea"],["/posts/2ad07f54.html","3501c3ee0958edd364768412995fa643"],["/posts/2b38bce0.html","7438c47a69820373663e37e6c4fd6b25"],["/posts/2c0a6836.html","d6a618f0e86694428aeddcb3f537099d"],["/posts/2ce39bcc.html","b6ce6d8e2296e5f1cc28b06f61c3901e"],["/posts/2cf620f0.html","0d200f3a40036cb85e4d96b269ca23e8"],["/posts/2e30fd6d.html","2fe12fccc6ae486a6ec1a65823a07fdd"],["/posts/30a413ad.html","91cf9968013c86dc6c40f7ebb94fb14a"],["/posts/34292736.html","cea11dd5c4a54259cd2fbcef4aed8a1f"],["/posts/3468cbe.html","9e7f0bbe88bb32d10bd43be9cb9bb00d"],["/posts/39176dc0.html","1ad776a71dac5b6f13aedd168374278a"],["/posts/3e118dbf.html","16db4464a96a563c64dfc049c862c096"],["/posts/3f7d823a.html","72b8e75725b6992c0388da3c352ff77d"],["/posts/3f978819.html","c547db9352cc45c618a4576bd4e33300"],["/posts/43945723.html","4da7f2ce7c308ebb48c81513ad748a0e"],["/posts/44124a6b.html","c1c32ea5c98c0f74e8f5291dda1afb87"],["/posts/47abb61d.html","1ab974e685cd2c69c722cfcba525cefc"],["/posts/4996478a.html","de1451fbddf61f7f3833d8b50c92f546"],["/posts/4b689be3.html","499bc6bc66bf3712776bf3dd4efedcc5"],["/posts/4cf8423f.html","12604afdb65afbfccaf23a552f900983"],["/posts/4dcf85c.html","9e6cfc8060e693adc2bdff698ba982de"],["/posts/500cd322.html","000735999256945fc1e2f1497f25681d"],["/posts/51c9b1ff.html","fb8c8378426f9f934c56653fbebac79e"],["/posts/52b5b3c6.html","7df2746e2a72f7088553c6a38abefc46"],["/posts/54f496ad.html","f6b8b8ecb0c7c41e1d23673bd77e5cfa"],["/posts/558e1f30.html","38f6efc346ffb636a15f677e4ebb6d0f"],["/posts/5d8bea92.html","c2e43306607e2a20e1156f0b8b578e8c"],["/posts/5f6e0c59.html","c87b04b5284f92a02cd48f7ca602c678"],["/posts/61a63a84.html","7a5321ef94a5137b6863b24fac18a929"],["/posts/625ab7bf.html","721f7c38482330b0b7db8b319ef2f192"],["/posts/6336a2f9.html","fefccdc5b2fa044d4bd4c93895d9dd26"],["/posts/6432d61a.html","5af223f3ce410927c52cbfa870968040"],["/posts/6515f032.html","f9e23623f99140257c344b459df8835c"],["/posts/6720ccdd.html","007f0c38e101f0ac582bbe5052d9354d"],["/posts/6a4b5ac8.html","c98ebf959602961ecd18c2eb6a01ae36"],["/posts/6aa4177c.html","5b618b731e532da7485723c685598208"],["/posts/6b15f81f.html","e516b79bb13c57b7437ea4f2a9fb3cef"],["/posts/71131d34.html","0e89fcd1bd2b06f289d2a6339909d422"],["/posts/742fd48d.html","b731034c9bf7979d12a2567e2868d7d8"],["/posts/78a8a8d3.html","66ec5e0277a3b08848bbcc0401c33e36"],["/posts/7a5ef3d0.html","2562ea5b3c64032c98c82ddded2fd853"],["/posts/7b41e1ac.html","46b9b359f9fda45ba14db49b6f1f630c"],["/posts/7b51011d.html","a4a1a92e6dfef2d3a714eface25895c5"],["/posts/7e3aa3e2.html","f47a488265e180e7298e76413b6a507e"],["/posts/80fe2691.html","75986e7cd118c234ec1a73961df40a42"],["/posts/81ac52e9.html","99544f99e319d4fdd5229f23f036b301"],["/posts/82332d11.html","9b4dc59ccead285a181389ad96e006a1"],["/posts/8486f6f9.html","ccc3216b07ec34a7a018300eb42305be"],["/posts/849b40f8.html","2200854f7531d7cf5af365c4656297b5"],["/posts/85c51d68.html","b6ebc35f743fc4a6e9d4aa371b78c01a"],["/posts/86a6c500.html","aae66c1a37194ab701d178644d42ebb8"],["/posts/886f8d3.html","88cc438a95a16e95be9897c2d550d740"],["/posts/8a7cba10.html","95122bcfe29677d097c840db237d8cfb"],["/posts/8ac11b41.html","a5e36fd5a45cf6462bcdd1d9d674cbb7"],["/posts/8dd520d9.html","cc122cc594d68cee6264b0f51684f1e3"],["/posts/8f555654.html","83379b3033d3a9db1c43b9089c6bbd96"],["/posts/92a980c2.html","1f80a43127d792ecfd86a5db293509c1"],["/posts/92ce16.html","6e5d3ea2a1883061bcccac4f84c73616"],["/posts/93e9943b.html","52176d80da75b89f6537019139868dd7"],["/posts/94d3c794.html","e33ce8bd131e39fbf665c9a3ec46d3d7"],["/posts/97f50eea.html","69ebcd759a1e6f15bb44e184071991da"],["/posts/97fca8be.html","fe8e9635ea1a4ce27cf73e8f5f5cced3"],["/posts/98662d05.html","cc5d5da7093584985b2e61e7154a6132"],["/posts/9a2f6162.html","19f21b1883bda23a475521ec8b483835"],["/posts/9b22a48d.html","229afd29ab25318df7e8dfba16ee9144"],["/posts/9cb455b1.html","d23db97348b6724771571c63a83a0e26"],["/posts/9ecdeecc.html","06fdcdde761301c7301d9b7282857b15"],["/posts/9efd7701.html","4d810c6d9320a48d845d39573cee3149"],["/posts/9f61c1a0.html","35824ed447d8f826d9918c89770e9e47"],["/posts/a1de710.html","262f2c21f7f6a94c08b28900729571b7"],["/posts/a30eb0cd.html","80cafe08a69bdf45899b84d3ce669910"],["/posts/ad0c1efa.html","79b4bedf91d27fb79e1020e223e1c3b1"],["/posts/ada3f440.html","34f3976a884f86a741845d89fda856c1"],["/posts/af1807ef.html","fc2616f1d2543bba8073a05c33ea8968"],["/posts/b497b647.html","b55a5f258d75f24a2fde3879a06be4b2"],["/posts/b4d464b0.html","cb96d9e80e44ea53742c541691921861"],["/posts/b5fb773f.html","47ee7248fc917dc4db5cb56d186c5418"],["/posts/b8d46b32.html","b9e8e63393702f2e32181a10985d6242"],["/posts/c1b2c6c9.html","e79ec6970c015c6df89b6c93799a1933"],["/posts/c2111cbf.html","9d2212ef03787a28573af6e55916d99d"],["/posts/c316c2e8.html","fac5451f1ff59772aa604e1ff9d9fc3b"],["/posts/c43e60b5.html","bc5bcd3a2cdcfa5a976a585c116ef258"],["/posts/c497a412.html","9a12f8275a0ee70f9ba1e394cf226237"],["/posts/c5de299a.html","8ee7427ebf4e61236ea81dd4e4efeb59"],["/posts/c70bba9c.html","bcab47f931242f39dc24d346e1a4b434"],["/posts/c797535e.html","5fb9b2ea71fc803526d8876f20b6ef5e"],["/posts/c7a62c79.html","29b4b4bed3adc150afc6bbb6528eb2ab"],["/posts/cae2c959.html","4f7f54c2f5f61d67e6a1986c5accc02a"],["/posts/cbebef2b.html","cf263660bf81ac00bf17d4be055d7e9d"],["/posts/ce25023e.html","b3e8ca61006822b28be9968e4b2e774a"],["/posts/d2fd4837.html","1ee16b8922d2f16f9b8cffa07282459b"],["/posts/d3233cbb.html","e99c92ef4c4300715ade9f9ba00adb48"],["/posts/d3a745a8.html","8adc5fad3db003ff1045b328a62ebe8f"],["/posts/d7e940d2.html","471857d538512d6c9acecddb27418ad5"],["/posts/dc815d5.html","00e895c0d10b7b924f293983fb03ef1c"],["/posts/de25b0be.html","72e6d62673a4f593a6ccaf5321c29043"],["/posts/e2623b4e.html","b4910ef8ac15909e8fac6fc638690583"],["/posts/e3ab6ad8.html","94b5e96df7179160beb9450b7213c25d"],["/posts/e5018da6.html","04a8111f26a48ab09f919ceb713102e3"],["/posts/e5963272.html","21bab6595444e9a0beea8c7ab1434849"],["/posts/e624b065.html","2f97dc7c8c7b73c2cc22b416e90bb71d"],["/posts/e7c703bb.html","780659c7a9532aa7385bb2ed9554c6e2"],["/posts/e8f14b6c.html","f5cd9cfc0cca1f600640410e14773133"],["/posts/e91abb63.html","74619cf9e6f2f5cbb8f699b6bf5ce763"],["/posts/ea9a8808.html","afac3160d5a8550bd6a85f650bf463a3"],["/posts/eb784749.html","cc853e4e2d9e827774dfd7eeb8fcf85a"],["/posts/ebaf2232.html","36957a4ae3a26ff48bdf8218dd51aaf3"],["/posts/ee1ed673.html","9cf827a867cdc55e3ec048d08c449dd9"],["/posts/f0c3ed61.html","decdd5e4a8ece3694cd64e76471fd6b1"],["/posts/f151ff43.html","9b2fd0545f9e6e55e80763996134533d"],["/posts/f21e7f84.html","1ad92393de1e0fa6c66c99f6a88fe46c"],["/posts/f230b0fd.html","4eac07ac89b3de9824e06fc0ee44e511"],["/posts/f663d5cc.html","cabc295ce723d370e7ab7d19dd090e99"],["/posts/f730ad18.html","97692b4bf5fb6013f184dfafbfbb289f"],["/posts/fc04d0d4.html","d3a8a05a45038fd6d3d6c78e4d342dd8"],["/sumire/index.html","322794b59418626ce630ff75c4c9c290"],["/sw-register.js","6443800d29b49676d524e2c1559b1e61"],["/tags/APPLE-project/index.html","c14a4138b48b1172963b55e61a16d397"],["/tags/BELL-DA/index.html","6f7a06cf870a70deccce0da24fbf950d"],["/tags/BL-Game/index.html","c9eac319a51c4ab58328e2673b883c3a"],["/tags/Blue-Dahlia-Digital-Creators/index.html","a336472cecd055fa35c5288a22d38a7e"],["/tags/CHUNSOFT/index.html","83b3179977d06d431690bfdb16da2874"],["/tags/Check＆Stripe/index.html","88a3e2121a6bf79ccd8d8f7a92e1414e"],["/tags/Cherry-Pie/index.html","bb280446666fe2294e90f633ce985182"],["/tags/Circle-Mebius/index.html","df22b5e6833e3d271b6686253ac10299"],["/tags/CresCENT-BLANK/index.html","3b18245b0e13187ddbd4f5edaa6f6bd4"],["/tags/Dopamine-Software/index.html","1a22f7577eccaad9c0796926e1baa3cf"],["/tags/Dos/index.html","6568b9d008f8152a01edc846e929c05d"],["/tags/Earth-Well/index.html","b11d8459dd0905c28cb407bd1fa4b493"],["/tags/Forest/index.html","f9ff75797d92be864568b05d18db8e97"],["/tags/HaccaWorks/index.html","1123d6fa6b4e92b01e986af600d27fbb"],["/tags/Kanon/index.html","3c4ea85b5b667c4c8fe32f17d941210d"],["/tags/MANATSU-8/index.html","adce10af2d608e7db723d5c224167e7a"],["/tags/MARINE/index.html","54530d68a751488450a743f330289f67"],["/tags/MIO/index.html","f24abb02f76b4cbd9396cdd1c06ff34a"],["/tags/NAOX/index.html","10c6bf9570ac8d9e2b8fdd15aea5b02f"],["/tags/Nmyu/index.html","75522ffb3913fb1923e82e2f19c52c8c"],["/tags/O-S-I/index.html","00d035990f3358d97ee290392c494fb5"],["/tags/Omegaの視界/index.html","6a40fd57402f124b4ba39e6be557e831"],["/tags/PC88/index.html","bdbebc8edfd853b3032924f880273463"],["/tags/PC98/index.html","5b93da353a5014548a99f9220132a15c"],["/tags/Perpetual-Room/index.html","248d46cdff9b7281ff04b3f7ba7ceff6"],["/tags/Pleiades-Company/index.html","4fe93c5c631269d12b0a25382a7bea5b"],["/tags/Project-Twintail/index.html","9ae2a3824601cadcb179a60eab39058f"],["/tags/RIFF-RAFF/index.html","618363bb1d1d062960cc5835e3c4cdd5"],["/tags/Reverv/index.html","5810a92b35f3e9e4e05e3f07d935a7d1"],["/tags/SENTIVE/index.html","a36d6bdefa1ccde1bbc4ac8098437317"],["/tags/Saihate-SOFT/index.html","213a276e4dae076c68ca7fc7ab0e023d"],["/tags/Scrubbing/index.html","8f2302637c24114ec3c8d6cba4a4de41"],["/tags/Sky-On-R-imaginAtion/index.html","9d65fc2e6d0a0521ee9d8c3a1c43ff2b"],["/tags/StrayMoon/index.html","80626eedf99e5847c4a4ad09133a8fc8"],["/tags/Studio-Bu-Sa/index.html","06255903c42234ddc2a4c337b1416047"],["/tags/TRANSPARENCY/index.html","e751459ef6b5838a63fb9dbc48b1fa49"],["/tags/ToHeart/index.html","a0bd4a0291b51bf5906ebd8887196c29"],["/tags/Traumend/index.html","8f043e7d2821dd4dd2d9b612f51b1dd3"],["/tags/Witch/index.html","358f9f44a42c573e58ae9ab96a0aeb86"],["/tags/adonis-project/index.html","4700dbe445b4e68c4ab147b94ef0326d"],["/tags/flash/index.html","fcca7078898a1293ae362ecf820f56a2"],["/tags/galgame/index.html","942a0da24135639751c12ea46a100535"],["/tags/galgame/page/2/index.html","1af6063f9bb4d86bd20f2e153725a39b"],["/tags/gal资源/index.html","95e1ee6b34bdab56c8e2d3a66568ed9b"],["/tags/gal资源/page/2/index.html","10201542f0f99028ce4a2acd30217ea8"],["/tags/gal资源/page/3/index.html","f06af2d3f6414d45d516d83d826c6550"],["/tags/index.html","279913f60563547f1cc19c20dcc91306"],["/tags/rkr/index.html","201ac8b038d2f57788969ba206dfe458"],["/tags/team-eye-mask/index.html","d8f464969d4dd181459c5704e1ba44d9"],["/tags/ありすくろいつ/index.html","f3f6eef3076ff19d377f327b14aecdac"],["/tags/いつものところ/index.html","ad4f95fda17a218c08e25b4c253d405b"],["/tags/きつねみみ饅頭/index.html","54c7e3219ef4dbc736a79d58c179c1da"],["/tags/ねこねこソフト/index.html","57929d6ab9712f6f42b509e1883dc10a"],["/tags/ねこバナナ/index.html","1078b7d2d6e8d081c1ee7e2dfaa4c68a"],["/tags/はちみつくまさん/index.html","f09e58ce17836c5da1b30dbb7bf6d8ce"],["/tags/ろりちせ/index.html","a919db29741c9d87d91b63e09596f080"],["/tags/アイル【チーム・TATU】/index.html","bc504d19fbfc0203d87edea56897cc49"],["/tags/アークシステムワークス/index.html","0f6d09f190246dc6157d44fbb71fb1e4"],["/tags/ブロッコリー/index.html","9748c769f6d3c2fbed359242e6178861"],["/tags/乙女/index.html","c5f84dacf4fc0897e6665579442c4204"],["/tags/乙游/index.html","2a483843b61815d5b0794b8ed78b039e"],["/tags/停产/index.html","0596bf347010499bc237ab50e7e09fd5"],["/tags/公告/index.html","cc4b9a977592d853d19717653ca82e7b"],["/tags/同人/index.html","1204407d7a74898e204c88d151b244d4"],["/tags/堀井雄二/index.html","2e1284f683ff5370b85f1a49c8d2dbb2"],["/tags/外海なおき/index.html","5487e8a362634bcf890a5af376de465d"],["/tags/女性向/index.html","901e93269e3baf150e3126fd7c291c06"],["/tags/桃野衿/index.html","1f781c7a776bed6cd5674a4b0b3c9d81"],["/tags/機械式少女/index.html","b8851ae8fcdd7986b642ff1dedac2551"],["/tags/水仙/index.html","955d6c52a11c664d0dbfa40be7d537ed"],["/tags/汉化/index.html","e8d45078e555f2c2fe037080f562ae37"],["/tags/片冈智/index.html","ef0a1ab3a0817285cdd9b0d362ce25e3"],["/tags/片岡とも/index.html","a91f5a3e8ce8cf433a7693bcf360fbe8"],["/tags/牙の刻印制作委員会/index.html","75031767fa5a659dc9b116201f0bf6e6"],["/tags/牛カルビ定食-FLAT/index.html","776955851ac362b85e34b62663dcd3a4"],["/tags/牧尾屋/index.html","1e765316dfdbf3b058a6b150a4ef8436"],["/tags/猫猫社/index.html","345ae015902db6ed32852bed92cc7e29"],["/tags/王宮魔法劇団/index.html","667fb2a2b57abfdca4b45cde7b4982d5"],["/tags/画集/index.html","bc57689779f3a43c4c00dd721c5095f6"],["/tags/索引/index.html","5ecbc773e5344fcdab4fbeb0176bfde5"],["/tags/缺失/index.html","5d47221681c3cf188c831ed2541f74d4"],["/tags/自购/index.html","55985cc2ef99606bef7548dd376f5cdf"],["/tags/茶葉☆姫/index.html","51471201a0c0756a4e6f6d97d80fd827"],["/tags/郷愁花屋/index.html","27d73cc9fcccab6e8bb791a1ad403523"],["/tags/閂夜明/index.html","ce500aa840da2561807fa1053e2a2442"],["/tags/音乐美/index.html","84c661319314f0376db8ddfc29b3b417"],["/tags/黒†救/index.html","c3f29cce0623fbfa9d25103a5d658940"]];
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
