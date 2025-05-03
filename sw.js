/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","5a16231b5930cee68eab3bd2c40e7246"],["/archives/2024/04/index.html","fad15fa92a5a34bd6776e53a6389c5ba"],["/archives/2024/index.html","5d3e1dd3732d9ea4109187bf4d77c460"],["/archives/2025/02/index.html","31348ff20e312abf5a4448e31a7ee4ce"],["/archives/2025/02/page/2/index.html","056a6613577aae27818c5c7a99f93555"],["/archives/2025/02/page/3/index.html","db6a22a073bb739a7dd619650a9bb19e"],["/archives/2025/02/page/4/index.html","c0b6617708e4c2e89f488bb696f86ac4"],["/archives/2025/02/page/5/index.html","b2c6a3c720a6dff0017c6a2d06b7d109"],["/archives/2025/03/index.html","297b45e31f2ece75d4eb7f7b6b9de6f8"],["/archives/2025/03/page/2/index.html","e1d8a0f2d999ad6d56fcda80f1fbe09c"],["/archives/2025/03/page/3/index.html","b97e0d6a81fefd6f583ece56ffb12238"],["/archives/2025/03/page/4/index.html","9d2eac736bf01aea0135ad052cb4e277"],["/archives/2025/03/page/5/index.html","468796ae35993bc0cdea6f9872bbf414"],["/archives/2025/03/page/6/index.html","58c3c88e4e0953b09beed8428e2f0d6a"],["/archives/2025/04/index.html","4a5a4edd9317e40d6ba8dedc71ee0783"],["/archives/2025/04/page/2/index.html","99859e519f895c97adde6e909963dd3d"],["/archives/2025/04/page/3/index.html","a1d467cb1c4446fc4ad03b743df5e636"],["/archives/2025/05/index.html","6b3d4d95bb8378e4e77734d39ace7f2f"],["/archives/2025/index.html","a3bed29d4c48bb676a38f14092b7954e"],["/archives/2025/page/10/index.html","8bf665c8b4b6c34aebdc914bb5037f5b"],["/archives/2025/page/11/index.html","6c1b26a269a1993fa263ca7f9156c5d3"],["/archives/2025/page/12/index.html","38f3f842431271ab6abb6dded9257a9b"],["/archives/2025/page/13/index.html","5f202a1965cc52f6746e321eda1ce986"],["/archives/2025/page/14/index.html","62bccff389ee03c0111ae81452c00a5f"],["/archives/2025/page/2/index.html","357f5b906e5a70e63e5e9b874affde73"],["/archives/2025/page/3/index.html","cff2c659dff7d8250d01f7f08529271a"],["/archives/2025/page/4/index.html","5a3d0e42fba2528bcd3eaa81d85910ab"],["/archives/2025/page/5/index.html","9a4d7f655339fcdcb4c99a90135098a3"],["/archives/2025/page/6/index.html","2af8d99e9491ac3f24f4126967a7d7bb"],["/archives/2025/page/7/index.html","437627d8cb633a71a8fa9f06a59b08c1"],["/archives/2025/page/8/index.html","618841acede4c1e33e609e2a8053d856"],["/archives/2025/page/9/index.html","f18c80df5a0eec24dc8aa5c64b5016d8"],["/archives/2026/02/index.html","797fbf40725946e3d55c01370465a1f6"],["/archives/2026/index.html","3508b219ea1d057673ebb2ff1464d7a3"],["/archives/2825/04/index.html","8b6ce3df78ccf0ff36a3fcd54881a6e1"],["/archives/2825/index.html","adc90a323a4f8ea12f276f7080b0de8c"],["/archives/2925/01/index.html","93bb57e6ecb0bbe5e015783602054d8d"],["/archives/2925/index.html","1bb1aaadc51fac085725c8519cdab9d9"],["/archives/index.html","3ccd75b9170e414b3bb0d6e91bdefc14"],["/archives/page/10/index.html","bba4698028a514610c63ea4de4343381"],["/archives/page/11/index.html","a59db9c00e2616414366b330af924dee"],["/archives/page/12/index.html","a8935ec2e7f731e9065ee6aaa4a379ea"],["/archives/page/13/index.html","929c26eb7024a5b418cc11ad76f92910"],["/archives/page/14/index.html","e2ea94336c07253071b4c3161f9fa543"],["/archives/page/2/index.html","aa0b5deac29a9b17291b9124c6591b29"],["/archives/page/3/index.html","a9a604d871f93869e542789c7acb51a4"],["/archives/page/4/index.html","64077d1b8ba30a54c3a7e22e83551c6f"],["/archives/page/5/index.html","bec3cf4258f3759029ef3237464e4a44"],["/archives/page/6/index.html","673308756a41b314a1492d4c5c80caff"],["/archives/page/7/index.html","cc513c8473eef89f762eab0530ef7328"],["/archives/page/8/index.html","9384c86748748c4eda66da7cdc46b2eb"],["/archives/page/9/index.html","51f000eb125400ab5ab40e0072f14668"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","374312c1ca3968404f2f721f11fe619e"],["/categories/galgame/page/2/index.html","5d9c7020bc9b402f70db9d5496ccd3f0"],["/categories/公告/index.html","b52cb968b925e484079af2d4331a5701"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","0c3f3696c9d8498c19fd12f18364851b"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","bdaf474ee9d2a56395a2f5623479e42b"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","43301e3777da6944fd44ee2ab24ad3cb"],["/page/10/index.html","7262ea2155cfed443fafd3f31ad173a6"],["/page/11/index.html","bae8bce58eaa33cc1af70cfd3857281a"],["/page/12/index.html","b7b259a44d6e21032c7fdcd439035914"],["/page/13/index.html","f3d67ff9688b15f40bc18801eed7bbff"],["/page/14/index.html","5d7474082afa4e3e4dabb774c554586c"],["/page/2/index.html","93fb2609b503f25f71844950c6cb8323"],["/page/3/index.html","ce67ab5107dd4d2afdb06aa0a04a7f8a"],["/page/4/index.html","db1148a7113d08825ba56d085f53c0d3"],["/page/5/index.html","acec1e5eb1428760befe499a3fce4ca1"],["/page/6/index.html","8e9538376aff458bfb957b596ec65905"],["/page/7/index.html","9faa3fd1945950dd3f786729aa4596b7"],["/page/8/index.html","818a18f765014cdb5242be4386a83c5e"],["/page/9/index.html","cb8075d304ff0acc5bc32946ccbf4934"],["/posts/10c9dd98.html","e9d707597ea0c7933de328fe4c9a5f9c"],["/posts/126ebb99.html","51aeb57effe543c8f462b5870b0c6cdd"],["/posts/1295b569.html","d7dcea6eeadda4193b94f289f9e4225e"],["/posts/1370342.html","8a661da15d5a2f34ec0a66fd8154103a"],["/posts/15ef14c2.html","21edae314560d29b190ff14d3a7b2b5a"],["/posts/15f3959d.html","9ef43da490ba9182f7a558e1b7e669ae"],["/posts/18ab785d.html","2548c22d0435a50ed12e0794b0bf2534"],["/posts/1d59b71f.html","397a8d4403728e8a1c6ccecefc2f82ab"],["/posts/20b3f3a4.html","62410d418eb4bc984ddaa043d2179e26"],["/posts/245f1c7d.html","53ca5f8e151b0eadbf1002259b284175"],["/posts/252658f.html","2d97b8aafdc0767f97f0e5c06f78757c"],["/posts/28397adc.html","e4a9df1ef8e4eef21062a484d3cf8c4f"],["/posts/2ad07f54.html","84a46fa096ce112075eb0fd5358dd988"],["/posts/2b38bce0.html","067e03822774ff04da16b96984406492"],["/posts/2c0a6836.html","157de5eb8f648f05a0500f93ddf7c170"],["/posts/2ce39bcc.html","ca451449438e61fec918fd474a36a60e"],["/posts/2cf620f0.html","13fb2c6906b92540bb7f859d29a17ed9"],["/posts/2e30fd6d.html","e58ce8dfd04933f4aaa539131299ee9c"],["/posts/30a413ad.html","44b28e91fe7a91011cb29b9173877a9f"],["/posts/34292736.html","c2811994e71e8550494e2fb626dee9fa"],["/posts/3468cbe.html","11c5424b819c2f62a8621bf12082685a"],["/posts/39176dc0.html","866b91f1ec34327a9104dd5cf535638d"],["/posts/3e118dbf.html","4353b392539e61733cfb6de6dcdbc520"],["/posts/3f7d823a.html","4c1d0a5f06d1fc11a7b4cca5e1294450"],["/posts/3f978819.html","55164344f27c3cdf189f969b89571a51"],["/posts/41dac80e.html","64845fa5b1ac1fe265926c8fb82fb41d"],["/posts/43945723.html","ec61a703c8be2e34272b3fbb99d15cd4"],["/posts/44124a6b.html","678231b2854db14401a3c154f5538301"],["/posts/47abb61d.html","b02009ac34d0bc47bb84b72f850bb533"],["/posts/4996478a.html","6d97a1081ce6be573da1c134dc86260f"],["/posts/4b689be3.html","5e1aea352857b05504c8e28fb3e60741"],["/posts/4cf8423f.html","08235a07f454f6ba78dc1ffe775eb124"],["/posts/4dcf85c.html","36d50e2e73cf38f38bed823d859b8187"],["/posts/500cd322.html","3c9472f8f9afccd6186c2f8686bf3b20"],["/posts/51c9b1ff.html","8458a008369fbf6d49b21e0de4663cc7"],["/posts/52b5b3c6.html","117e28166ffe5b85e37ee944d6034990"],["/posts/54f496ad.html","6e3b37e7a2ee145ef6937e51f19d8207"],["/posts/558e1f30.html","53e542906aafa906b77dbb5bafa99645"],["/posts/5d8bea92.html","b3ff290cc8bcc731d3404354e74227f5"],["/posts/5f6e0c59.html","a9ce4aba1afcbe90f212794ef047643f"],["/posts/61a63a84.html","ead8cb61756c0b76de2fb7e6acef9fd2"],["/posts/625ab7bf.html","2e4ea25bc025d7c8fe34a0feaac7aaab"],["/posts/6336a2f9.html","0ef279b7c2e09c7d803af3d08e8105b9"],["/posts/6432d61a.html","301a73bbd3b378891ee7778788b71b81"],["/posts/6515f032.html","3fb93180efff50dddd172f8242e795c6"],["/posts/6720ccdd.html","9ef9c1425ae0d9b78d44c6f97dad3806"],["/posts/6a4b5ac8.html","34c8556204d3752e17a7f21cf1efa926"],["/posts/6aa4177c.html","6d6cf6337c8ce6b92b53d95f61dd8e64"],["/posts/6b15f81f.html","7850cf29c6229471b3358594bed2b730"],["/posts/71131d34.html","945b41fe188e477ba88eb14ab88da49c"],["/posts/742fd48d.html","6bfd1858f83057178d83bfbdf1f62e14"],["/posts/78a8a8d3.html","afccbff7ff225bf0029be87f2d21aede"],["/posts/7a5ef3d0.html","ba99938365a200f974a3ee3289a42f35"],["/posts/7b41e1ac.html","6863617de6eb62972b902b834b5f616c"],["/posts/7b51011d.html","0905e05d09c59ddab9702677d4cdacdd"],["/posts/7e3aa3e2.html","928376ba2365c413a88e1b3d5f8f26df"],["/posts/80fe2691.html","c7e7f49eb20fcad84b0e8d76e3fb0713"],["/posts/81ac52e9.html","868578b1e0fee1d36e0845abde2b20bd"],["/posts/82332d11.html","9ac9be9c6c38bbb532cdf6ef45f3a55f"],["/posts/8486f6f9.html","38d9ff504d49cb7dd843357a79aa0c65"],["/posts/849b40f8.html","487b65c714a4532c7434a907a49878ca"],["/posts/85c51d68.html","f7e2e0bcfbff19b52cdd7e16eed9b7a7"],["/posts/86a6c500.html","9e15efd2db63b2fb71cad402b1de06d2"],["/posts/886f8d3.html","9d8b40d9c41792a78c63982c2322a028"],["/posts/8a7cba10.html","d0bef5efb5316bec316321058df2f6a6"],["/posts/8ac11b41.html","4f9f6f0c2505711199cc8ad6d7828c4f"],["/posts/8dd520d9.html","d0c742731d61bdf567133bdcad4380b1"],["/posts/8f555654.html","3a715483752bc0cb6758430502a8f6c2"],["/posts/92a980c2.html","08c89a3d5f498fdf480f877c16c578e6"],["/posts/92ce16.html","1fc6fd1d3e8a84498e61010b7a13b1de"],["/posts/93e9943b.html","7d204fc85f551a3a58edc3a7ee625bdf"],["/posts/94d3c794.html","3fc1cad0460be5e321b4038ac2f182b5"],["/posts/96b281f2.html","ec71a5e64bb292dd0773201d589ab17e"],["/posts/97f50eea.html","5f0325dde229f5f28cc80de249db2a3d"],["/posts/97fca8be.html","98a19b4fdf9d16a764ce021a42d120c9"],["/posts/98662d05.html","5f116b43281d23d10f2602bb95b7aae9"],["/posts/9a2f6162.html","cf652d9724659953666fa88a7fa9fca5"],["/posts/9b22a48d.html","d5ad3acd3ae016c617069cce1b90d7ce"],["/posts/9cb455b1.html","cd0e1262b354998cc517f9d88ca22452"],["/posts/9ecdeecc.html","cef50eae55de0f1884e47fd66f2be7c5"],["/posts/9efd7701.html","bbe4f635dc10c23255e72ce2bfd9f121"],["/posts/9f61c1a0.html","988943ae44b50ba157dd5d3f4a43ccec"],["/posts/a1de710.html","6ba9c8abc4129a2de1aeeeedd1117ca3"],["/posts/a30eb0cd.html","04427a301a8e9d58940275c20f10d387"],["/posts/a7634b5d.html","b602afbae32cf5f6ddceb95ba35fe63b"],["/posts/a8c593b5.html","b1c07d8156289fd239ecbddeb1e24a11"],["/posts/ad0c1efa.html","f3cee0cba6af1cd1d7be539c4d50bb6e"],["/posts/ada3f440.html","2787303e54f7a2a95ef33bfabd947549"],["/posts/af1807ef.html","e51313ab66ed3b9f6abcde82e79c5985"],["/posts/b397bf03.html","c60925dc8decec8fa01bd44b160ab57c"],["/posts/b497b647.html","3877e5d48909c3038bb361b1adca8b4f"],["/posts/b4d464b0.html","53cdf6037814fbd7e54cddb465939693"],["/posts/b5fb773f.html","e0c3dc13ba5b187aa4f98fa7f7745be2"],["/posts/b8d46b32.html","74238e1535166b2bf2da701a5757227d"],["/posts/c1b2c6c9.html","a238851bd84fe3e9dacae039df096013"],["/posts/c2111cbf.html","5d62f2eca3577390496c38b63c7942bd"],["/posts/c316c2e8.html","332ca99dc535f790f6c4556c2e753f26"],["/posts/c43e60b5.html","ce24ed0e5a31232065aaa993a517936b"],["/posts/c497a412.html","99fa7da8f1a21f8e028fe002ce4282e4"],["/posts/c5395ba3.html","aa613c7c891de14cbe64553a09085ca4"],["/posts/c5de299a.html","e2078ca6e53622d85952ae10f13c2290"],["/posts/c70bba9c.html","f3a55f0b8802ff085118c833703a5fc6"],["/posts/c797535e.html","79dd63f5a4c54ef8c785749c7b40fde1"],["/posts/c7a62c79.html","e2dfe7a0289d83cb458ab716dbc7fb1d"],["/posts/cae2c959.html","3e7b378d7338526847ea26b084b1b0de"],["/posts/cbebef2b.html","4215916ec77951ff8fa21dbad8621a3b"],["/posts/cc4c0017.html","28ad196a5eb616c9dff8c127243a9aaa"],["/posts/ce25023e.html","c9dcb1ff53b1c9383937c1a634818ee4"],["/posts/d2fd4837.html","707966181193ec7106dd53ab93b61637"],["/posts/d3233cbb.html","6a1bd040340ce254d26593f4d95c3709"],["/posts/d3a745a8.html","962c5ea53c5cff13e45b4a2adbd5e065"],["/posts/d7e940d2.html","2e80264290dc012e2b22f550e8b933b1"],["/posts/dc815d5.html","725f0760112fd716dff18d3b0ce34762"],["/posts/de25b0be.html","11a24b5aef17f597ff59b6abed0339d4"],["/posts/e2623b4e.html","69beab1d59e12e41fc9c2e6e06c1fd69"],["/posts/e3ab6ad8.html","257c14d08223e35751d3219ea9a0acb0"],["/posts/e5018da6.html","fbed6c4b0be5d7756713e3d01cefd9d1"],["/posts/e5963272.html","cf5e364ba86430d475b7665bef8dc031"],["/posts/e5ef4c3c.html","c7a9dff7abfc32e1a30dece5cc3eec42"],["/posts/e624b065.html","fb0a09e20bca339bc6b7cdec5d575ba3"],["/posts/e7c703bb.html","1ff25ea77889700f100daf9ce01588bc"],["/posts/e8f14b6c.html","035d96b52e82269957b60a8717410774"],["/posts/e91abb63.html","8daf00e623ab7c9a2a8a5e5e572da199"],["/posts/ea9a8808.html","b72b4d1374e9377b9a2cd5fc04894da2"],["/posts/eb784749.html","ae72fefe562cb1eeee540f7939101388"],["/posts/ebaf2232.html","cefc4c8df1bba34fbd2a7ad6998b53f2"],["/posts/ed75f185.html","9ebbc906db949b3befd7c53b576bf371"],["/posts/ee1ed673.html","839d182e97bbb399bf6eb7231de08896"],["/posts/f0c3ed61.html","d39a30f594227e5235182eaf55e1a8ca"],["/posts/f151ff43.html","a0687f8e93f460afb3886b24d831f4e4"],["/posts/f21e7f84.html","ea9571dadfe8e75183d7b0ada5260650"],["/posts/f230b0fd.html","0d6b205d17a57a4da88134c9b6103d38"],["/posts/f28a7877.html","452773cdb9133f9b17af916dc3aed360"],["/posts/f663d5cc.html","dd9d1997aa1efccfd2c4f88ca4fd071e"],["/posts/f730ad18.html","7036aa47f221a84c50b065981832954e"],["/posts/fb5d4608.html","2c530a0f20618895ed9f69e96bf1a031"],["/posts/fc04d0d4.html","84c13090d7460407055d7a4fd68ad87f"],["/sumire/index.html","48f01da0f6b7a5df02d9af1edb90a833"],["/sw-register.js","b88f3590e9c5a7bb849caebff42d6d3c"],["/tags/AKo/index.html","f9f9cbcd52cf6265279b7b3944c035ed"],["/tags/APPLE-project/index.html","a5e6ea3609c093e52fc718730fb4403d"],["/tags/Ankrache/index.html","9ff1385839d8fad79997f5acd1e281c2"],["/tags/BELL-DA/index.html","288eb879a2d1d0f86a0121543d05ac39"],["/tags/BL-Game/index.html","d0a87dd0c66684941d9612c03546d785"],["/tags/Blue-Dahlia-Digital-Creators/index.html","4d3150ce85e0f34aeeacde8cc05df1bb"],["/tags/Blue-Line-Games/index.html","5b4177b52f8f13eaf306f802f6237b57"],["/tags/CHUNSOFT/index.html","85d1cb6335a79bbede7aee4503aae8d4"],["/tags/Check＆Stripe/index.html","01c237944b3a3da5f9fa3ebf6838f1e1"],["/tags/Cherry-Pie/index.html","b62111c2fd2b4805739a5bef2123dbc5"],["/tags/Circle-Mebius/index.html","8b1c42271311ae747c3203e142a5880c"],["/tags/CresCENT-BLANK/index.html","f0f8f108df375010d01709f4b8efc5e0"],["/tags/Dopamine-Software/index.html","b926f7520316a99ec7c33a8910cbf8bd"],["/tags/Dos/index.html","a685907bd5896e5387d3a1e88e69c4ca"],["/tags/Earth-Well/index.html","793c98ba0f6466686c910610d955b13d"],["/tags/Forest/index.html","6de8ee3da2da34c23a071d0d4ffa8fa3"],["/tags/HaccaWorks/index.html","c2c823ce0b9c1b24059c7240691a0ce1"],["/tags/Kanon/index.html","3d6ea3116139899e447d86b21698531f"],["/tags/MANATSU-8/index.html","9c3c8c3b8c4164bbcbf9dc5b76e45d28"],["/tags/MARINE/index.html","a95b477ce09aec80b0e4aaa6d2fbe7db"],["/tags/MIO/index.html","5a761f2903b895500b7bb569a45d17ef"],["/tags/NAOX/index.html","7d69b9900cacc2a5742ccaf66cd829a6"],["/tags/Nmyu/index.html","36ebe990bac1ed68f2723103f8d127dc"],["/tags/O-S-I/index.html","71ab0129fe7d7e1300f763855d41ad9a"],["/tags/Omegaの視界/index.html","085e80dc90bdccf6a1628587d45f1794"],["/tags/PC88/index.html","c5549b91b3dc2eee6a828860769b4b78"],["/tags/PC98/index.html","4ddbdee3c32b1798f7cc5665cb5046d6"],["/tags/Perpetual-Room/index.html","bacfb1479705c296bfaf8f1b83812180"],["/tags/Pleiades-Company/index.html","0cc134d19c581d16dfc916f1e1f3b001"],["/tags/Project-Twintail/index.html","7b9c1065f00d64df5a45e51bcb67ae45"],["/tags/RIFF-RAFF/index.html","fc9d262f0e9d86863524b18b4157a5e2"],["/tags/RPG2000/index.html","13ffe7f91c8fe8026b8bb36c95caae13"],["/tags/Reverv/index.html","228308a9b379a68b477cb4fac01cf4e7"],["/tags/SENTIVE/index.html","f16b81ea986036e580f77bf4809dfae1"],["/tags/Saihate-SOFT/index.html","244be080a0df0bb5d5a1a00f9df13b9d"],["/tags/Scrubbing/index.html","8314eaf69844e1fdc3c77fccf440e7b5"],["/tags/Sky-On-R-imaginAtion/index.html","a1d28781a4604de3ca793c1a4d007305"],["/tags/StrayMoon/index.html","b43da379cbe684e146a6edd4341af5eb"],["/tags/Studio-Bu-Sa/index.html","4d2b86f6857459f0cf85313a28bd0efc"],["/tags/TRANSPARENCY/index.html","70e5bebc0b6639d7aa4b51ef7a438369"],["/tags/ToHeart/index.html","93a86c3c5f4e88c7c8be19cff26bbf68"],["/tags/Traumend/index.html","eaf4393e54cf29e000be10dab0a30520"],["/tags/Witch/index.html","5258435a2a9f5f1e441356cbdfb64dac"],["/tags/adonis-project/index.html","e0aa0fc19a1cd0cd58b2b811833f299f"],["/tags/capriccio-suite/index.html","73321ddadb6a2bb231e3c3905ff7039d"],["/tags/flash/index.html","b1ab5398121d79f3d4a3295777a10079"],["/tags/galgame/index.html","9963a9e49dfdbe30af07a54b77f4f465"],["/tags/galgame/page/2/index.html","5a9817ea368c58f67e7dec78c17f20d4"],["/tags/gal资源/index.html","9eab5a3924cd85a4cf3979b8894c6822"],["/tags/gal资源/page/2/index.html","5400d11db5a6aef940b499ef695be4eb"],["/tags/gal资源/page/3/index.html","60000f081ce70a9f8055ea648db610a8"],["/tags/index.html","0745cb4a0cac7b7d5b59826fbe12d670"],["/tags/purgatory/index.html","e457b5ae7c301eeb1d5d79b3b4065cb6"],["/tags/rkr/index.html","786ec6479f01ffad108f243caebe0d6f"],["/tags/team-eye-mask/index.html","2b08390468fd08b1b50c3b0a9d7cd571"],["/tags/ありすくろいつ/index.html","f5326f4f6bd21dae49aabf723e52e353"],["/tags/いつものところ/index.html","5c32c7c9bbd87c3e1c75075614c01f54"],["/tags/きつねみみ饅頭/index.html","e077e27f1f158ba7510974c7fa3ba79a"],["/tags/ねこねこソフト/index.html","59059f14f223ff171ed721139e69a31b"],["/tags/ねこバナナ/index.html","413ebdf4abf8f6d04d33d4db0c7f3a6e"],["/tags/はちみつくまさん/index.html","7cb6d3bf308a8735c55d6fc73abd0e4b"],["/tags/ろりちせ/index.html","6f645c4580d6825c13f59432b38dbf1a"],["/tags/アイル【チーム・TATU】/index.html","3b2d0392c6f6ae057b5fc3e1fb96d4e0"],["/tags/アクアポラリス/index.html","c8c005cc69606c933e47157fd6b12ee4"],["/tags/アークシステムワークス/index.html","3f06fd54b8570b444885b32694ce89e1"],["/tags/ブロッコリー/index.html","85b10850bc2c6e823bd417de9758468f"],["/tags/乙女/index.html","67c41fdb297988c350d4c9e1414a34e4"],["/tags/乙游/index.html","2fe355406c3250cd8ee6343fb9360279"],["/tags/停产/index.html","63b49ceb36bfef2a3466177ccf741363"],["/tags/公告/index.html","31b451e8929196b125e4c457e371ca6c"],["/tags/同人/index.html","93bbebdb60767aa9aae3ea5143b121d9"],["/tags/堀井雄二/index.html","2384d77fe54444b4b25b87b7a30be5bb"],["/tags/外海なおき/index.html","10a46aed80508a7fb9d60257b5c180a2"],["/tags/女性向/index.html","56ffa60af9ade442a5be5023fbc0f4c5"],["/tags/御茶ノ水電子製作所/index.html","0f60296b5b896ab66da3f4498bdac1e8"],["/tags/月の水/index.html","32ba57e0df3dae46e01fe27e21084624"],["/tags/桃野衿/index.html","c86b59621025140c9d1220772cb36876"],["/tags/機械式少女/index.html","ee8334a19d59680e2951f44190ff0133"],["/tags/水仙/index.html","0074dc7b00dc66b8c2b66e655ee32737"],["/tags/汉化/index.html","ed5328d175aaea277684b0f8c4f2c535"],["/tags/熊月温泉/index.html","1b32fc30237144f935323146b0c80a2d"],["/tags/片冈智/index.html","dbce89cc840f0bc9592ada21cdfdb6f6"],["/tags/片岡とも/index.html","c03d66d15086e798b60bc953b59facb1"],["/tags/牙の刻印制作委員会/index.html","e9ce5cc3922b6a34d0afe374bd022c93"],["/tags/牛カルビ定食-FLAT/index.html","9df2234bfbfd67ba74bf332f908b8f99"],["/tags/牧尾屋/index.html","f732680f66b85bd8808e01386e2f187e"],["/tags/犬茶屋/index.html","1aee62de4a7179676830ae343222d940"],["/tags/猫猫社/index.html","e149c96e1407ec0bf8ce55cd17fdeb87"],["/tags/王宮魔法劇団/index.html","947305036cea2e588acb0b8d942110fa"],["/tags/画集/index.html","3859ec24af8b93875d0f70a150560d2a"],["/tags/索引/index.html","d39af64bdafce1494c0950673bed0290"],["/tags/缺失/index.html","ae07c1603e6791d22870cb130e9dac8a"],["/tags/自购/index.html","dd2631d0ffb6f9db4b9da8fff2cea580"],["/tags/茶葉☆姫/index.html","8f5723c836a25fb059a5facfc883a1d6"],["/tags/郷愁花屋/index.html","6d64a983e4e93b4b9e438868290a412b"],["/tags/閂夜明/index.html","26fdefdc5a87deadbff890550b81a23d"],["/tags/音乐美/index.html","21db5885c7d68c2c3d82dc4e8f0f11a5"],["/tags/黒†救/index.html","6f197030ef62bfea24f76320d2d39807"]];
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
