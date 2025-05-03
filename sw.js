/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","4055fdbf2fdc1bae3af147b151226d96"],["/archives/2024/04/index.html","54475bedb671879c502c0e12b922925a"],["/archives/2024/index.html","11b668b056d2d1d157e488f8dffe0ce0"],["/archives/2025/02/index.html","3552115faab135b8c65ccedf68fe7677"],["/archives/2025/02/page/2/index.html","6b1c0822eb1e1286b5842199f53ac7e1"],["/archives/2025/02/page/3/index.html","dfe6e7dfe5090fb78009bd41372db633"],["/archives/2025/02/page/4/index.html","93987bfd4d8d85c5d68fd5f52c599292"],["/archives/2025/02/page/5/index.html","9c2b3c7f17fc027a1eff0924becc80e1"],["/archives/2025/03/index.html","1514c66c058d82e438ac195cf081b61f"],["/archives/2025/03/page/2/index.html","7e40617d4fca56b484605abfd97a79ba"],["/archives/2025/03/page/3/index.html","edb59bb234530f9e7dfa18b6ab7aeb15"],["/archives/2025/03/page/4/index.html","7bfeec6b8d06a33b4179d5cf607d860d"],["/archives/2025/03/page/5/index.html","ea0cb5af32964b94ab544414439d304c"],["/archives/2025/03/page/6/index.html","b82d1a2e1da45ea4b0d53c44a231bf2f"],["/archives/2025/04/index.html","475e73867a494583a9fdb0c354946e98"],["/archives/2025/04/page/2/index.html","ddccabe093de481caeb9399c0eaf4046"],["/archives/2025/04/page/3/index.html","756715a7d3587c963035277b0022744a"],["/archives/2025/05/index.html","c2cc03a769030fd95e7bd887f1c05cbe"],["/archives/2025/index.html","2ee8156aab5bf3f01e25f6b13e06825a"],["/archives/2025/page/10/index.html","15a3fbff236e64bba9c58667edec3ce7"],["/archives/2025/page/11/index.html","1c218866be07ad8688c808993779f2ef"],["/archives/2025/page/12/index.html","6746d63f74d85d4f5c75d6708ed0e0fe"],["/archives/2025/page/13/index.html","2c4ef34e0c517d29c87a79f16d63e3fc"],["/archives/2025/page/14/index.html","5bc774bc9e25f17b5c6ef316b8095377"],["/archives/2025/page/2/index.html","9d41995ea7c36e8f2f1d30af23279bc7"],["/archives/2025/page/3/index.html","de44f8b4df25dfe032d3cce96cc102d7"],["/archives/2025/page/4/index.html","c72b70144698934ac0a557993187630a"],["/archives/2025/page/5/index.html","c04c3cec4e9140b08f99cd7fc65c1d72"],["/archives/2025/page/6/index.html","a4214197ea2d59331fe1f016f17e2fd9"],["/archives/2025/page/7/index.html","395cfec4c29c55fee011e5b8e8a7ee2f"],["/archives/2025/page/8/index.html","c104af378e19b9f3e73873788518eb43"],["/archives/2025/page/9/index.html","ac44617a47d2c29d0425e5a92d053412"],["/archives/2026/02/index.html","d6559ae2ce6b85b97dc76c774d6cbf72"],["/archives/2026/index.html","97372743b72f62d54d0b67c0e536eae3"],["/archives/2825/04/index.html","5688213467583713c759d8fee404d70a"],["/archives/2825/index.html","fd0b504979eb6f8e2a60fcc1032474b4"],["/archives/2925/01/index.html","8b59c4d7ede1a97ca6edc5ea9c926f8c"],["/archives/2925/index.html","980aac85d7baf5d5c9f8bb691b81cca3"],["/archives/index.html","eed772ad7d9825dca06b8118d8649f7c"],["/archives/page/10/index.html","991fdf6f3b2bb8cb825194d53535e625"],["/archives/page/11/index.html","e22937d7d34a08aa6bcba44297d7ec70"],["/archives/page/12/index.html","a91c1a837a658b6293a669f43ed52403"],["/archives/page/13/index.html","6aecbce32818499399192dd2898cfdf4"],["/archives/page/14/index.html","cbfc9a48516e50a628520d52b93478f0"],["/archives/page/2/index.html","1a7112c1f0bc353c23eece3f4562ba38"],["/archives/page/3/index.html","70b396bf3196fa4f9f4eb13ad74be81d"],["/archives/page/4/index.html","1ce7c28d2b919438c921ce21eac0b7ab"],["/archives/page/5/index.html","30ff1bb890f45f424c935b57663ec013"],["/archives/page/6/index.html","b230f6c917cbdaebb55b21d74dd05f49"],["/archives/page/7/index.html","539a2bbf33c7d3cc30c3ab82d78042bc"],["/archives/page/8/index.html","845d04fd84b4e717cf04c53a83bae85e"],["/archives/page/9/index.html","645ed18ad112c6dc409ede2e4a767468"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","c1781ae4f4fc24c95bd5e3c59bb1c413"],["/categories/galgame/page/2/index.html","72cd52229d41572930a29ec3e8a8b4af"],["/categories/公告/index.html","99d5f667c7262d035728b5a64687c0a4"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","bda85002d3d739dfcd91451f66c34229"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","388da0fb4cbacc2b6266cb87178e2e47"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","cee9910cb5bc93a38318bd4a0653dc08"],["/page/10/index.html","747d4adb1569b42fe9f3f0b9cffe7ab3"],["/page/11/index.html","e60c43a772a75a509ff7ba4bde23655a"],["/page/12/index.html","5e8715fa4b3e5a0e36b059c350ff6d9a"],["/page/13/index.html","efdc7a78f079776fa3c9a6abd3f79940"],["/page/14/index.html","4356ec2baa0b6f035a8bbbccdd20f940"],["/page/2/index.html","8955271cef7304fd8ea084203a2cd0a2"],["/page/3/index.html","24ddd1449218739b77c26822743aad32"],["/page/4/index.html","4fe89df32c3908f0c3f918fc6982deac"],["/page/5/index.html","ac3b40ee89b6f8ae755ee507e7c45db9"],["/page/6/index.html","599acfe407b8050589a15277cbcca47d"],["/page/7/index.html","d9633e5825711fb93192c1faf6d5c54f"],["/page/8/index.html","c450d921c034a7a84e866042c4e9d8f8"],["/page/9/index.html","34a2f5a9ce421a90419f77349195d02f"],["/posts/10c9dd98.html","3cbc089b32b6eceea8302249e6fe6eca"],["/posts/126ebb99.html","a39b95313ff92a378e53c8689973f5f9"],["/posts/1295b569.html","e5b49199ebf2cfd470dfaa7d771932ff"],["/posts/1370342.html","5083e24efbeee6b7e3a5522d79aa494a"],["/posts/15ef14c2.html","60be6a43f476761fdca29ad6eb1820ed"],["/posts/15f3959d.html","886e6a53f1d875e4760e82382dc009bd"],["/posts/18ab785d.html","3e686b0794d02b1a4d90df796244c3da"],["/posts/1d59b71f.html","69bfe4933797033d18f3a122df68523e"],["/posts/20b3f3a4.html","06961ef92aa813b1f9a6559a0c5fbe54"],["/posts/245f1c7d.html","fa32e493c50820534be6f3184c8bb14a"],["/posts/252658f.html","61b9c7a76b04c7e6cce7418a83eeaaba"],["/posts/28397adc.html","6aa697ee859803c6f4e219df6746947b"],["/posts/2ad07f54.html","3295dbe0866677fb2ce02556ed154cd5"],["/posts/2b38bce0.html","f46180133cbbf471c82bb41c14ab1c5b"],["/posts/2c0a6836.html","aa7cc4e6a1016fc9bd5ba461d8c293f9"],["/posts/2ce39bcc.html","e9793343d6a5ac105748fc46f68f2a51"],["/posts/2cf620f0.html","75e3d802ff24b7e8989dc66ad4a4e510"],["/posts/2e30fd6d.html","e9e368985f383953ccf916c2e0fae086"],["/posts/30a413ad.html","787016cb283478237a43b12ad229a54b"],["/posts/34292736.html","46ced202cce7bab879b3c211e361b912"],["/posts/3468cbe.html","1e772d2282501a8560818273b2147219"],["/posts/39176dc0.html","922cbea9694f4b32b254a6734bc39e9b"],["/posts/3e118dbf.html","06aba1ec752eaf9f768d62f8a507a562"],["/posts/3f7d823a.html","75d23c39452447b099d640df22722319"],["/posts/3f978819.html","497c8bf8712b1b90ea5580e0d01f74b5"],["/posts/41dac80e.html","58725972425118824a2d6cd6b23b3c8e"],["/posts/43945723.html","a3323b9ae9addbf0d5b5780aebf75c2f"],["/posts/44124a6b.html","45f16205b60ee60fdb0ba55a5b6cb86b"],["/posts/47abb61d.html","894be7885e5caf391fa05eaf2647f368"],["/posts/4996478a.html","2cb21a16d654976f8f0a963f17583887"],["/posts/4b689be3.html","65c0ffbbfd5c7499e891b5c7eb935a6b"],["/posts/4cf8423f.html","1e3dd5ec86d090f46d752400e63bb55b"],["/posts/4dcf85c.html","12b409e8ac6dc65de468c8f6663540c3"],["/posts/500cd322.html","219dcac14048584a0486caee14ae6415"],["/posts/51c9b1ff.html","a39d64ee7ea04c9ee7ffae2b9c12ac68"],["/posts/52b5b3c6.html","51ec2a74a09a520f41e40ed9e0cab25d"],["/posts/54f496ad.html","b41dc9a945d83482026dd26f93e02720"],["/posts/558e1f30.html","b854469c247cab843752da401f74338e"],["/posts/5d8bea92.html","96693330f2c69d299359442bfdd818d5"],["/posts/5f6e0c59.html","ace80840ba4a036dda6cf2061d184c5f"],["/posts/61a63a84.html","6683a6248d12b89b07eb6e16e9fe10b7"],["/posts/625ab7bf.html","c442c872ab6e5008b330442b7025f39f"],["/posts/6336a2f9.html","e5381efd438025132222d7007f368cc7"],["/posts/6432d61a.html","77c141cd36f12cd570a55461b879d754"],["/posts/6515f032.html","582345aa0114d2821754645573348860"],["/posts/6720ccdd.html","5cf982b1fa8aa3a5d6e33228a94d2fcf"],["/posts/6a4b5ac8.html","13f0f5c99fe73b3cdc446e6135eae537"],["/posts/6aa4177c.html","b9028eaf9636806b4bac68e4e163ba5c"],["/posts/6b15f81f.html","20c85357765a2f998093c1b46217e470"],["/posts/71131d34.html","2804e02045e7332ba9f70e6883af3c9e"],["/posts/742fd48d.html","71a24e6a501d82cff4e748a4c8c4530e"],["/posts/78a8a8d3.html","4d9d0c2bfb43560e79d71ce16c671e0e"],["/posts/7a5ef3d0.html","f2b18d97bef257cd8a8db5dc51286568"],["/posts/7b41e1ac.html","07d0a9e6fff12d6716089bf09a53a38f"],["/posts/7b51011d.html","7d6549dc3a46f62393672d0d64af4a0b"],["/posts/7e3aa3e2.html","d5e343d052169777221bead4c1f37619"],["/posts/80fe2691.html","fc6a5ea99c7de3795af7ec6b2f65b1ef"],["/posts/81ac52e9.html","29147278c49f3699f06cf652309c47f1"],["/posts/82332d11.html","0a7727008a1f2eb98acbd9c9106488dc"],["/posts/8486f6f9.html","07984a0656e2e2a96778cb17871ec49f"],["/posts/849b40f8.html","32ddd7c0df54a35b1f778586ebe333e9"],["/posts/85c51d68.html","b89f8781c4301377affffbd6645ef3d8"],["/posts/86a6c500.html","d5b7634fcdddb9ceabb75625ccc10c10"],["/posts/886f8d3.html","01f1b403ce824b511be9a6d2bef20f4d"],["/posts/8a7cba10.html","d96badb548404ea394fde335e0d541e8"],["/posts/8ac11b41.html","e58574f5afee5f7b59b5e7537140dfbc"],["/posts/8dd520d9.html","45f16d28a00a4d6a9063409bd182b81a"],["/posts/8f555654.html","9ecce8245277c61833eeae261bf47860"],["/posts/92a980c2.html","3b9a196a7f52184458beae3f3b2cca2c"],["/posts/92ce16.html","cecd35999973179d82f533b3e1d27ee6"],["/posts/93e9943b.html","63c8835232014d89438d791ede910c2c"],["/posts/94d3c794.html","4601e8e839063a18360eaac2dfad3e9f"],["/posts/96b281f2.html","cc9132eb7bafefac85475912246959ad"],["/posts/97f50eea.html","a2a4595587caac9c37c6a0c4b80751c6"],["/posts/97fca8be.html","85c39d9024fce3b3d00df5bcad2d2a32"],["/posts/98662d05.html","ca784991cd3bad7b832632cd1c1d3c32"],["/posts/9a2f6162.html","6ac4c5e1cf570064b81c42c5bbb169db"],["/posts/9b22a48d.html","37d7843f6a73f7f55d68235ea19347fa"],["/posts/9cb455b1.html","0691a8e8bbc1fa7d7bd28d6931db32fb"],["/posts/9ecdeecc.html","fac73e6c973b69684773d4b9982a7b06"],["/posts/9efd7701.html","5586b9252c83cbfda012c901a682f391"],["/posts/9f61c1a0.html","f25c874c2b8eedfdd9206caee9047168"],["/posts/a1de710.html","f0fe13496aaf12f45312533bdbf1c840"],["/posts/a30eb0cd.html","ffdf0afcc1753bc03cd1b910dda4506c"],["/posts/a7634b5d.html","6a9dfb7bf8bd4cda12075c1ca9bbc7ce"],["/posts/a8c593b5.html","611cb26fb9884a41f06936559610160d"],["/posts/ad0c1efa.html","c7407e491f7619c779f435eb5a9d8ee9"],["/posts/ada3f440.html","aaf2b88426b6028d1b70c6a311e295c6"],["/posts/af1807ef.html","6d370c6dc03ec58690992832787ecb1e"],["/posts/b397bf03.html","a5bbbfbda0d2afd4bc2bb538d35f1796"],["/posts/b497b647.html","572365b148d105fc1b83facff961c9e1"],["/posts/b4d464b0.html","bc7669a0acfff32c1443f2fc11eeddf4"],["/posts/b5fb773f.html","a55e95e96bd5592cb65dc6181cdd0cf4"],["/posts/b8d46b32.html","f0a8974b61ed7203cee8cc57bc42a17d"],["/posts/c1b2c6c9.html","73bf1e93bbcdcffdd8e8b2f871e4abee"],["/posts/c2111cbf.html","5ec6ff33919ddb0b360607b7e5413475"],["/posts/c316c2e8.html","1c2bc2e074904a0bed3d3b0db074b5ff"],["/posts/c43e60b5.html","7c3e1b23251eb44370d3a8c2b8867d8f"],["/posts/c497a412.html","a780f422bcd5ca4099b7bae45911bb3e"],["/posts/c5395ba3.html","651f71436d41472a5e6b5d1c854f16b7"],["/posts/c5de299a.html","f4637dc35f40f94cf95d4f01b7b1005d"],["/posts/c70bba9c.html","753a6797ee6416e1e64985d95e805540"],["/posts/c797535e.html","246fcd5d9bbf66e9b9876be9528f8e80"],["/posts/c7a62c79.html","352abf7da0bd51bf68508ad5dae9e9d6"],["/posts/cae2c959.html","c15d9317953b785927695793784a6762"],["/posts/cbebef2b.html","6f038160a5908064e42ab486020aecec"],["/posts/cc4c0017.html","bb36e1a85be809cd46b5041deeb826ad"],["/posts/ce25023e.html","8ea09e752c55f653b5bac9696a12a948"],["/posts/d2fd4837.html","a4c8ab448dd849f6d4eb2af9571569f3"],["/posts/d3233cbb.html","527cab5e03437b285ddcd7c03a993b79"],["/posts/d3a745a8.html","301c637d7501041f8dfcafd4b7d1dd8f"],["/posts/d7e940d2.html","8d0546b868d5aaf11ca1567305010e2c"],["/posts/dc815d5.html","3a71e5367829eeee7aac4de09a8c0403"],["/posts/de25b0be.html","c6996cbdc8d50c3619de339c64ef4cfb"],["/posts/e2623b4e.html","b14bc68c08ece1059bb424f5cef87f3c"],["/posts/e3ab6ad8.html","b790b2b3a4c73c946f33d68a007294f3"],["/posts/e5018da6.html","d432893943216f8259c1fe5bcfd862e0"],["/posts/e5963272.html","701a5e8278485950aa4ad6d4900305c7"],["/posts/e5ef4c3c.html","06357f81c5399f1c396988cf519bd8e9"],["/posts/e624b065.html","c482bfb06ac45940685098395dcfcfe8"],["/posts/e7c703bb.html","ba83e6817f5df939b689fd25bdc289a2"],["/posts/e8f14b6c.html","95b53febc2590bc135c579fdef14be82"],["/posts/e91abb63.html","d42af42cadf3a8e66bb2183a2af61c49"],["/posts/ea9a8808.html","535a742a3aa2e7f6b7c22b40951f4f42"],["/posts/eb784749.html","990f30990189d911878cdd9e7a795292"],["/posts/ebaf2232.html","890bde7bf74ed39920524c8590b82bbc"],["/posts/ed75f185.html","cbcf02c0c57a953d5f7587072c537778"],["/posts/ee1ed673.html","b6b7fe9558427a91ab45b6449ca2d975"],["/posts/f0c3ed61.html","f9a794bde2a7c10744c2fc469442e58f"],["/posts/f151ff43.html","60139e593d55d8379a1ddffe2406bde4"],["/posts/f21e7f84.html","fe7859d52cacee374ba3256c23f78761"],["/posts/f230b0fd.html","bc3df3d767626a3d4fdc6fe04a87ee8f"],["/posts/f28a7877.html","bd89af2e576a0a5ea8298f75cc3f7f63"],["/posts/f663d5cc.html","bfd3bb956f135bf7172d54d154b40f4c"],["/posts/f730ad18.html","df129b4f201905d86bd7be061350195a"],["/posts/fb5d4608.html","9638da725fe91551b9a7b1556a99c0b8"],["/posts/fc04d0d4.html","ba5e7c374ea52d34f74357a1dae23aa8"],["/sumire/index.html","b5e0fdf2cb6421317d83ecb9754b01f9"],["/sw-register.js","807cc641cbc3ece8255b880664d777da"],["/tags/AKo/index.html","b8d10f708824afa435b6fcae33bf5fd2"],["/tags/APPLE-project/index.html","8c18ee24d83cd2adf50508f4a80deaad"],["/tags/Ankrache/index.html","e4436a099ce0f592db132ed0b778a369"],["/tags/BELL-DA/index.html","771ab4bb036eebac6bf2d2834118c3e9"],["/tags/BL-Game/index.html","667a30707ce5e083db703ff9d6c80a43"],["/tags/Blue-Dahlia-Digital-Creators/index.html","559e9a3b62485f39cf1f18a225ddf891"],["/tags/Blue-Line-Games/index.html","d1883bb9bdf80e328ef78e9520a60c0a"],["/tags/CHUNSOFT/index.html","45ee07f99a701f9745151a699fda83d3"],["/tags/Check＆Stripe/index.html","176a6773d397aa80ca0b4f2c24bdb64d"],["/tags/Cherry-Pie/index.html","236cf198b04ae752416113d8e950bd12"],["/tags/Circle-Mebius/index.html","602bd04f4ce53c66cde4ab73c7455fb1"],["/tags/CresCENT-BLANK/index.html","ab7608cf29852c679fe64f70f5f50b5a"],["/tags/Dopamine-Software/index.html","b012262bd7076c81a9cc01e7821bb5ca"],["/tags/Dos/index.html","0723c2daa912257bc0fdca0cbb0404d2"],["/tags/Earth-Well/index.html","757a2288b32855b632d97bbeb0526d08"],["/tags/Forest/index.html","d818c1e799603cdc0b0d6340771abdfb"],["/tags/HaccaWorks/index.html","2c4f81b6663ad2770cca7361d0b9b597"],["/tags/Kanon/index.html","db9d1f0724e49984056f9b3ea1e5b627"],["/tags/MANATSU-8/index.html","11314e057f74a1ceb030909531c9f764"],["/tags/MARINE/index.html","b9b432aa341ecdf8cdd26b824f703cd0"],["/tags/MIO/index.html","de5acc77cbe22cf65c75e3f574debe55"],["/tags/NAOX/index.html","a7c81d59ce99c6a438474b8e4dc3a7be"],["/tags/Nmyu/index.html","dce2e201d3b379f324a3d325f1e6d26a"],["/tags/O-S-I/index.html","829f54139f1a801c6806f02ba7aba191"],["/tags/Omegaの視界/index.html","70a9062b0aea0725fc4d20c581e7ad11"],["/tags/PC88/index.html","8231f2ead6b2c560a5b67c2eed68e9f2"],["/tags/PC98/index.html","28fc3a53d7b2f418c1a23016b30ea257"],["/tags/Perpetual-Room/index.html","617fcc48acfe4f50363b83a71db0dc96"],["/tags/Pleiades-Company/index.html","27c0eaafd7de31295119b52014ceda77"],["/tags/Project-Twintail/index.html","0aaddfa3fd0f1e416d0d9b857388564c"],["/tags/RIFF-RAFF/index.html","c7dfb4a88134d4f61edd95f2916c4960"],["/tags/RPG2000/index.html","afaa694c4f327de731045979d2746a7f"],["/tags/Reverv/index.html","cfa078154c7af7c7ca2b27d9b1be659d"],["/tags/SENTIVE/index.html","ee8e6f60779b9e2ba4e1aaaa99405881"],["/tags/Saihate-SOFT/index.html","85c7e08520b8621f96f4fedab3a67c68"],["/tags/Scrubbing/index.html","3d5cd6c02124a0a734f2ccc498f3fa6a"],["/tags/Sky-On-R-imaginAtion/index.html","ca33432e79ed019141d49f23aa010927"],["/tags/StrayMoon/index.html","e25c8692f290d491fbda4f03c0a63efb"],["/tags/Studio-Bu-Sa/index.html","372c9ab5f62d3c990b55c3eb8da89b57"],["/tags/TRANSPARENCY/index.html","18afbbd8d55c6e46b4be0ccf5db1225b"],["/tags/ToHeart/index.html","9873f5e3b0083329018159cf43172110"],["/tags/Traumend/index.html","e1e8fad46b9a26b8e27bd9360e06bc93"],["/tags/Witch/index.html","70bfdcad71dc93fb9a6c34f6132ea2ec"],["/tags/adonis-project/index.html","4b8ae7a9e8fa9464fcda41339825873f"],["/tags/capriccio-suite/index.html","aed1c6c7ca96d8238607ca3edecde433"],["/tags/flash/index.html","93428c9b0e8765b02b064e593c9c036d"],["/tags/galgame/index.html","60dbae009d3bc08294182ea76543abd2"],["/tags/galgame/page/2/index.html","1110302cd7c235ea8901d6ddc279304c"],["/tags/gal资源/index.html","4342a149de50871a5bacff5ed5dc5973"],["/tags/gal资源/page/2/index.html","910f45c0015328f00c92b237c9f7aa1e"],["/tags/gal资源/page/3/index.html","418c587dc7a071b1db8e9f310b091638"],["/tags/index.html","16198f2390d03cd0699c34c71d966708"],["/tags/purgatory/index.html","8b2c8e97f035476bafabd9c6ef77b3b3"],["/tags/rkr/index.html","9c13fd8c587c64d713995a65b665b699"],["/tags/team-eye-mask/index.html","e56b5c98fb4ba45f274f002c12f26780"],["/tags/ありすくろいつ/index.html","1b0bb6b8d41cbb90374d6d2e6de22ec7"],["/tags/いつものところ/index.html","27f547dd131c22b79af162e272379882"],["/tags/きつねみみ饅頭/index.html","95a984286eb8d3249dd8703d40991b08"],["/tags/ねこねこソフト/index.html","fce5d9a43994b9dffb50bfe2b460ce30"],["/tags/ねこバナナ/index.html","d8136a11b92d97e731299d264c436653"],["/tags/はちみつくまさん/index.html","fe533590452539ef3476fc6ab32ed777"],["/tags/ろりちせ/index.html","3aadc03925bc1ea7fbe356af0b7f6551"],["/tags/アイル【チーム・TATU】/index.html","e8ad9f56bd547a18fa2e01f0149dbba6"],["/tags/アクアポラリス/index.html","b5df64507b9169c453bfa53496efe19d"],["/tags/アークシステムワークス/index.html","ed2af204ece4441d8abb8270a65ccc9c"],["/tags/ブロッコリー/index.html","92c138d9eef628e31da4ada4a7a27d5a"],["/tags/乙女/index.html","641d72e623a1ea87da7714dcf659042f"],["/tags/乙游/index.html","c7eec9d95bc4f6a9d6e515b59cc3f39b"],["/tags/停产/index.html","aed023c35c39eb062f4a87782c104afe"],["/tags/公告/index.html","b1ae37e1395fc5d6f3b4a743fb2c451f"],["/tags/同人/index.html","62d2661dfb3778bfd1fb87ebd1597ad6"],["/tags/堀井雄二/index.html","4497aeff8168085e86e247aacd80b075"],["/tags/外海なおき/index.html","5ac76cc6bcfb7d2aa4c7bb2d6c95a717"],["/tags/女性向/index.html","4f7c30a95efc655b97c81356c4970a0f"],["/tags/御茶ノ水電子製作所/index.html","86347df33f1fd9a0598e93d8ac3f82ab"],["/tags/月の水/index.html","3f85aa1dc80eb3b542a04e25334f83b8"],["/tags/桃野衿/index.html","f098747d124db589b5d81bf37d3debb9"],["/tags/機械式少女/index.html","b9a72dcd5ef87ea7f32793190fe8f55e"],["/tags/水仙/index.html","9e69ad2cc04bc54dd17d5db36c062a63"],["/tags/汉化/index.html","f325af437484cc5792a6b0df5806b1ba"],["/tags/熊月温泉/index.html","3a2ebc075f8c28fc453e3626c324d60b"],["/tags/片冈智/index.html","e65fc4a958fdb8215e9fb8e91b21d863"],["/tags/片岡とも/index.html","c4ba1c5e78561481166b8905b66954df"],["/tags/牙の刻印制作委員会/index.html","79096b8d3081e8e3e7df0a995a50084c"],["/tags/牛カルビ定食-FLAT/index.html","c9eac36a8fa2fa584f5643a3d085074c"],["/tags/牧尾屋/index.html","906ee03901071ddd95380ffd63c1ad45"],["/tags/犬茶屋/index.html","27c29c1eef33d337a1fc5ad44ecdfe66"],["/tags/猫猫社/index.html","932948e59e3b82405204e9cd5d17c7e6"],["/tags/王宮魔法劇団/index.html","24c4359e6532f4b93c02a2a8410d3a94"],["/tags/画集/index.html","96e19b7a2b76756c8dccc870d11f7bd9"],["/tags/索引/index.html","d3c5afee3a966c2fc83d7f9e26ff7ff4"],["/tags/缺失/index.html","858c387bb45cec7cdd9b533e6cca4f94"],["/tags/自购/index.html","561cfb9f9cc42e57b59b7bd290f51006"],["/tags/茶葉☆姫/index.html","2da9cd9f49b3dd5823e2ab25a9968275"],["/tags/郷愁花屋/index.html","47640a9f3008bf18c8026f97206bdb8f"],["/tags/閂夜明/index.html","a39e15a96beace1e7ff15a464f16d152"],["/tags/音乐美/index.html","1ff635e718e843d61cd758dd4a65d4bf"],["/tags/黒†救/index.html","af05b1dde1c586088d2114eb3bc7f515"]];
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
