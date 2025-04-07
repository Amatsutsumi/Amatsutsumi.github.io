/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","afca671643eabd3c963f244d3e0d89e5"],["/archives/2024/04/index.html","cc06842c9547c97183569cadaee2b5da"],["/archives/2024/index.html","8edd71ea76e000baf3be0b4ef7fb915f"],["/archives/2025/02/index.html","f3dc97d2754b534375a1b7502068faac"],["/archives/2025/02/page/2/index.html","2c28f53d21947edda85afd0dcda1c89a"],["/archives/2025/02/page/3/index.html","1de1185ed080a79ce378663fc158ccea"],["/archives/2025/02/page/4/index.html","559d44000481ed2d091a557b294a5c24"],["/archives/2025/02/page/5/index.html","4815e5fe28fbfc0f3f5735efaeed8099"],["/archives/2025/03/index.html","fdc1e3777f0f50761b14bbf478a396d7"],["/archives/2025/03/page/2/index.html","f6b76f0d5a70e9e73313174dbf0c7260"],["/archives/2025/03/page/3/index.html","b0b2e0dcca76750777aa5e5c2493977c"],["/archives/2025/03/page/4/index.html","63f743894361ca49c5b0b7397b05a5af"],["/archives/2025/03/page/5/index.html","e135fdbe4373386964193e168e95e3bd"],["/archives/2025/03/page/6/index.html","be73fd700de2863ebc011920586b9412"],["/archives/2025/index.html","0199e80a5d87a2d4d1d0abed0f56faf6"],["/archives/2025/page/10/index.html","1f1d30425cdc4a1bc9478b86bc029cff"],["/archives/2025/page/11/index.html","22c8b9952f71b456207accbf17e06190"],["/archives/2025/page/2/index.html","a4120b0626b3db5df1b9f01eeeeaef69"],["/archives/2025/page/3/index.html","3fd8f98f2ac75daa13f5d80e33710ea3"],["/archives/2025/page/4/index.html","02d508d9da67426f2845688663c84c8f"],["/archives/2025/page/5/index.html","3c3015ca755664e3519ccb52b3d181c3"],["/archives/2025/page/6/index.html","e51916110b7736049d7e7cd6b8fa60c1"],["/archives/2025/page/7/index.html","4a4020a344789a34fc8d5dc6ae86f8b3"],["/archives/2025/page/8/index.html","0cc4ac9743fe40a24b04b76b9b824dc2"],["/archives/2025/page/9/index.html","c1670e0ac59b1c63d577b6efd8f99e1b"],["/archives/2026/02/index.html","4b9e521d357a6ac4a820985912e324dc"],["/archives/2026/index.html","0de48e7b6932717a864e3ecc06eddbde"],["/archives/2925/01/index.html","196b2fd6988b925b6cf69a6f120dfc7b"],["/archives/2925/index.html","5ba481f19faffef19667b7544930b60d"],["/archives/index.html","376302fa0b065821f79ed48de24c50a9"],["/archives/page/10/index.html","c80d13a1ad841c8a79a48fcf7fa494f7"],["/archives/page/11/index.html","b3fb656551adcfe9c6f48117693d1f6c"],["/archives/page/2/index.html","903fbb94fb1a4d3f192f3ccac3cfe2c2"],["/archives/page/3/index.html","d20bd650b1bbbd0f12d8b05bd223b047"],["/archives/page/4/index.html","672e36beb465947d7e9c12b3fc342d95"],["/archives/page/5/index.html","359724a73d8a82deb8ae44ed795ebc5e"],["/archives/page/6/index.html","78ecbab29bdea2f27c65888ab726909e"],["/archives/page/7/index.html","2fb2f4588da6fccac9d913fb47cb0599"],["/archives/page/8/index.html","ac64d979cdcb9d9921cf8954fef22500"],["/archives/page/9/index.html","eb8ba6cc44cdb18ead730b19bc62e97a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","5ad984c9ba4551c30c36f9767851914c"],["/categories/galgame/page/2/index.html","2714b24ac98c25305c97272be41afa78"],["/categories/公告/index.html","a2f25cc26dde1177cc91e26419b705c0"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","e0c8eb65bae5feb2d2455a7590228fb3"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","cb3ba17d1dd70053e0ffe63224f3688d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ecae3c96d2a57f731ee295b24638c6c9"],["/page/10/index.html","ab3477757648028fa36f35c9d15329f9"],["/page/11/index.html","08d859c92fd92b0261f1826190f1e16e"],["/page/2/index.html","955e63894e4e7c7fb90b371335bc3acc"],["/page/3/index.html","5589096ffbef600e8752d08c09aea4f2"],["/page/4/index.html","069c12751de6edb4b6b3bc3d41139536"],["/page/5/index.html","2e37a20ab9cfe83c1d5989b5a4317cd4"],["/page/6/index.html","1e482fcb9d408c71a87abe1982415d5b"],["/page/7/index.html","adfef81d0f813bf1040bb879b90323e6"],["/page/8/index.html","c1f321d8be52e72ce8f0c479624a8676"],["/page/9/index.html","0f0a2ea9176af94758f37c35b3f7a4b9"],["/posts/10c9dd98.html","fb9d9e74bbd67898e6820e6a1f5bf078"],["/posts/1295b569.html","2fd9db30f38b3ba027e4572496e7fb56"],["/posts/1370342.html","4422b5fea4b57561368b5665cd8230fd"],["/posts/15ef14c2.html","565720667dc1cbda5693e452b8b8234f"],["/posts/15f3959d.html","501128ac869d2ad034fca1cce43aae86"],["/posts/18ab785d.html","b19fc57590812aee34729720fcd0e764"],["/posts/1d59b71f.html","06df1d6f1cfc918d60101ec37945a7cb"],["/posts/20b3f3a4.html","c7571743762569c7f65f0e26c0a693fb"],["/posts/245f1c7d.html","9f955db40a994753c9ed7ab0b9d7639f"],["/posts/252658f.html","60734b1fbf53876e21a34189453b5125"],["/posts/28397adc.html","1e4828464ccce7c968e75c734bb3f0d1"],["/posts/2b38bce0.html","6a531deac8be4cb6cf56258a4fe73eff"],["/posts/2c0a6836.html","d894dbdeff1966fb1faf94905df4e9f4"],["/posts/2cf620f0.html","2c7c2cdd66fd0f644b4adfab1e7be12c"],["/posts/2e30fd6d.html","2be4e9bff9d21b7943157190d84508c4"],["/posts/34292736.html","46280ad5101b83cc75d1c2410967463d"],["/posts/3468cbe.html","a99f64cdce836c664dac49f37cfde7f5"],["/posts/39176dc0.html","ca209bd50accf290734e5757990c249f"],["/posts/3e118dbf.html","d3a1d2ec15b733ca5da072bfd4e4893d"],["/posts/3f7d823a.html","1130352d042bb701b1267d8cba391867"],["/posts/3f978819.html","f80ce08dca8918e8a6533caa1ce8ac20"],["/posts/43945723.html","8bd6e785e22b54a10667da965c1871c2"],["/posts/44124a6b.html","d79c55a04674d22fa53833271e414c52"],["/posts/47abb61d.html","37bf045089db448ca17e110f8ef5ee98"],["/posts/4b689be3.html","795a43fc50d09a95cdc4be20f70e9e17"],["/posts/4cf8423f.html","4c039c716c1c24778a3f5234ae46e277"],["/posts/4dcf85c.html","c407a12391da88c7b76ffc95b0609929"],["/posts/500cd322.html","793e64a9f742f7a37ca6bcd867dbe070"],["/posts/51c9b1ff.html","92c8860404664a753c752d0f436e663f"],["/posts/52b5b3c6.html","f44c74b2d63cab74f6e4766968ed239a"],["/posts/5f6e0c59.html","59abcef0ae1af294a4776c6f869b2606"],["/posts/61a63a84.html","b9674d1170d44280abe4b06c936ea9d7"],["/posts/625ab7bf.html","b1adcd31ac50ae61588c8f313217e7db"],["/posts/6336a2f9.html","7d4bb08c2dc9d1df07acad7f8bbde8fe"],["/posts/6432d61a.html","8c4ebcacbbd643d374329d0cd952fc1c"],["/posts/6515f032.html","720d597a25fb045a63336e134e02487c"],["/posts/6720ccdd.html","0e75d74f6b5012888c44335b79832ead"],["/posts/6a4b5ac8.html","af7bc1223266e317698baa132e609ad2"],["/posts/6aa4177c.html","94fe6e0280abbd61b6aaa749da4284ab"],["/posts/6b15f81f.html","6e410ecb37eae50dfec26ee42cd43d8f"],["/posts/71131d34.html","ede534ea1e370896da0e5cf8a4a9ec57"],["/posts/78a8a8d3.html","5176a22638b0a83adae47702aa3e7634"],["/posts/7a5ef3d0.html","b5561b4c125aa67b9bf070ae00d5e2f3"],["/posts/7b41e1ac.html","7df58ce282dcd2e84fe98b3f496b32cc"],["/posts/7b51011d.html","1651024c90fe9c2d000323ca101b3e74"],["/posts/7e3aa3e2.html","4d826d17da9b1ac16d45b08008c38cdd"],["/posts/80fe2691.html","6ae323c500392a604afd52faa60ae1b9"],["/posts/81ac52e9.html","c3dab0b847fd5f90199df71fb6b52b7e"],["/posts/8486f6f9.html","44874e018dc3a0f68e5f9f5d18d7514a"],["/posts/849b40f8.html","ad7431cdd34729cff2bc356da957721d"],["/posts/85c51d68.html","250cd5c44ba020ad585196e3905a7857"],["/posts/886f8d3.html","9e98805471005b28fc8ad36e5ca436e2"],["/posts/8a7cba10.html","8f9c1b0c9bbd884a0bbdf3a790eee4fc"],["/posts/8ac11b41.html","f50c4a279132e098100e9cc4668a7b73"],["/posts/8dd520d9.html","7e2536170b852d9ced44938aed035d41"],["/posts/8f555654.html","26666d586fdbadc9414539e488bd66c5"],["/posts/92a980c2.html","0c8e84091e1f807bb2cf1a97df005fea"],["/posts/92ce16.html","83c0beb2882363b0a66445b26bb826f6"],["/posts/93e9943b.html","716b28da38b485f620966e34dc8f3941"],["/posts/94d3c794.html","0603690729fb91a2b87e9765e7187f5e"],["/posts/97f50eea.html","16981d9545e66369ed09e6933be22384"],["/posts/97fca8be.html","bdd8e4e5933256fae2b4fc1c515f670f"],["/posts/98662d05.html","960133e2886c5fba124720f281b724f3"],["/posts/9a2f6162.html","a52c87597e995686e87f5eb0b542752a"],["/posts/9b22a48d.html","d7e8b253eb12dd3e0feed9f09c144e90"],["/posts/9cb455b1.html","ab0ad100c9f5d035945b926e2511138c"],["/posts/9ecdeecc.html","cf71786f6dbee16540ace5d23d2442ff"],["/posts/9efd7701.html","68d7e3cbe49cb7d9f92a3cd774f60350"],["/posts/9f61c1a0.html","98f33b2eb64bc718b4ccb4228218e492"],["/posts/a1de710.html","f324e1a80845372fb78244546b453b13"],["/posts/a30eb0cd.html","abe6865f0804d804bab7994f3ff87f6a"],["/posts/af1807ef.html","1da337520f167a8180f67c45e757a7aa"],["/posts/b497b647.html","33c6643797a1706ad7cf370fc0925d2e"],["/posts/b4d464b0.html","6c21dd9509460097574b9c5d35aa6222"],["/posts/b5fb773f.html","e94dfa6c22e1e7c2b5957559283c10d9"],["/posts/b8d46b32.html","561595da772fba3f53404862d358c703"],["/posts/c1b2c6c9.html","2b030c328ab4f9d50e8f1cd4bcf2b3f3"],["/posts/c2111cbf.html","e2bec63762009660e899c9554871c8cc"],["/posts/c316c2e8.html","e5ad97a188df234b0d03b3652dc0c220"],["/posts/c43e60b5.html","bc2599556983a302a5538dd0ca8a4737"],["/posts/c497a412.html","e382b3ef465d228e4b5e72651f76dfbb"],["/posts/c5de299a.html","68b564220a2bdf8759ce08030ac77b8f"],["/posts/c70bba9c.html","a5c66170cedb6898b49ba8be90b1e9e9"],["/posts/c797535e.html","509113b1914c95a13850736c7858f86b"],["/posts/c7a62c79.html","fb67321b22063d7ac677a238725b71c5"],["/posts/cae2c959.html","53d6e537516c2284fd60c0916ef96132"],["/posts/cbebef2b.html","9ba1a9d8f472f90ed2fc9d548003bbfc"],["/posts/ce25023e.html","6364462f0ca7104d1520be64d69a483b"],["/posts/d2fd4837.html","d6d9fbc398cdb8547ace8abcd3055b1b"],["/posts/d3233cbb.html","3fddb0d9628bec4c4a1feb31adbde2f6"],["/posts/d3a745a8.html","ce7996589cd6e4f57b22f4eff7ed9236"],["/posts/dc815d5.html","49641eacff5cea5d2f226e081b490683"],["/posts/e3ab6ad8.html","9d652311ef0a7a0cd8732464998a1d6a"],["/posts/e5018da6.html","0eb5dab21f3e029ff028845d0cb846f7"],["/posts/e5963272.html","bf0969bedcc1d341d3bfb50e8f21a379"],["/posts/e624b065.html","788c14a0828320a885ae84056edd1ed3"],["/posts/e7c703bb.html","dfca45fab02690f74d5b5ad93ba69c75"],["/posts/e8f14b6c.html","9a065d854da75b09d059298c235010ec"],["/posts/e91abb63.html","913cf050b430a5dc36c850183f8dae6b"],["/posts/ea9a8808.html","aa7ccf57034d7079be2ab912e93c8eb5"],["/posts/ebaf2232.html","fe47eeed89ef23ce0d8906af6886ab38"],["/posts/ee1ed673.html","01d631fca95f4b2865257d7d180ee95e"],["/posts/f0c3ed61.html","f5cf31fc7462cf334bd735dfecfd39f9"],["/posts/f21e7f84.html","3133840a28d24d9f81847891c57b343e"],["/posts/f230b0fd.html","498a488fd61f65f1231f6eb2e59f38b0"],["/posts/fc04d0d4.html","ee21ba974a3923cf0aa466ee25bc027e"],["/sumire/index.html","56fec4ec6dbfa2029da692a7f9f6750c"],["/sw-register.js","51d2e524f156cdd1748fcafe6d2971b3"],["/tags/APPLE-project/index.html","4b30f43e7607a62744f675ad35c7a17a"],["/tags/BELL-DA/index.html","bb5bf2aeebce69f732c57a1d447b2618"],["/tags/BL-Game/index.html","4a51166e37b16d69ffc82a0b99a49192"],["/tags/Blue-Dahlia-Digital-Creators/index.html","c8d2cc8634205e462cbf862dba3dfbc7"],["/tags/CHUNSOFT/index.html","be25a8fa20a456ff7d424107781c36a0"],["/tags/Cherry-Pie/index.html","aaa75f29d5d60e5bad630a33fd21a3aa"],["/tags/Circle-Mebius/index.html","fa29e31f6c55cd1f216b24d70deffd07"],["/tags/CresCENT-BLANK/index.html","33ac75c9d3514a08147675bd2fc4a224"],["/tags/Dopamine-Software/index.html","e4c5bda1e7b1084425fcd394f9431beb"],["/tags/Dos/index.html","70e164b4c6d60fd9aed03a407d501994"],["/tags/Earth-Well/index.html","70893f3363abfb83d87d863c25234a63"],["/tags/Kanon/index.html","5367ce6d81ff9ad08d6081147b152154"],["/tags/MANATSU-8/index.html","22b98e135d1aad868a01fcb78aab0879"],["/tags/MIO/index.html","6b9ce5b8c5d7dad59f924e06445fe956"],["/tags/Nmyu/index.html","fd0e8b87bbcd236f414111435e991354"],["/tags/O-S-I/index.html","8e1c36177150592c85185ebd04c3016e"],["/tags/Omegaの視界/index.html","c259b5e88bf67a7223cc628917b1382b"],["/tags/PC88/index.html","5c59cd3a5c4c4f9239820e9dc3ed5c92"],["/tags/PC98/index.html","3f515387e9d5ecfbedae5f8256a4ebff"],["/tags/Perpetual-Room/index.html","23db4388441db5ccbd8d559ac4c2fcf2"],["/tags/Pleiades-Company/index.html","98e872053dd396e7731f6928952d2596"],["/tags/Project-Twintail/index.html","7c8fb1661caafc0eb2eb2147e44a2f34"],["/tags/Reverv/index.html","b56f0907d11a4091edae2f02e29f86a1"],["/tags/Saihate-SOFT/index.html","d142039ccc7386ae31451403a79218c0"],["/tags/Sky-On-R-imaginAtion/index.html","c4bd3ca5c62a3502c8a5397614f0fb6c"],["/tags/StrayMoon/index.html","1a693bd3e9bf61b3b4a72b43b4951542"],["/tags/Studio-Bu-Sa/index.html","61886f92a2424b7ef415ba43ef6a060c"],["/tags/ToHeart/index.html","741ba3245c9d356f82ef5fb4e0e31b48"],["/tags/Traumend/index.html","ba063bc9ca2e65971484bbd075dac6fc"],["/tags/Witch/index.html","4fb8a8141edc753d20aca838d562a275"],["/tags/adonis-project/index.html","95c2101c92948a24a213cf1a14678c67"],["/tags/flash/index.html","3e81d340bae3c1557453a6e13506e12d"],["/tags/galgame/index.html","b51ae1a1beeb1281afa096c8d256cf15"],["/tags/galgame/page/2/index.html","4af120bf7561dc250eebdc7773285dc1"],["/tags/gal资源/index.html","71c92c398b32b78a93df2e77d89f1983"],["/tags/gal资源/page/2/index.html","8b054772312c0f4a7415d3c4ace708bf"],["/tags/gal资源/page/3/index.html","066da5c72ecbe0a837838ac644478253"],["/tags/index.html","0fad023b30e7708009299cbeed0f4290"],["/tags/rkr/index.html","88c41dfa068777f75d29916a67304a97"],["/tags/team-eye-mask/index.html","f34856832654d1a8292262091936eda9"],["/tags/ありすくろいつ/index.html","4a0885019fa3ced44bb402eedadf02d1"],["/tags/いつものところ/index.html","7fe2b7d44a1f108c8f181c52f0091533"],["/tags/きつねみみ饅頭/index.html","3df659108b1bc2de80d7df8a6dd7d593"],["/tags/ねこねこソフト/index.html","a43e85ca9e2d1fc702f9c49d2ed407ec"],["/tags/ねこバナナ/index.html","6a31095cb51682ca448086d0a1a4140e"],["/tags/はちみつくまさん/index.html","a24c1a9a7517d16de5bf27ae0001c3a9"],["/tags/ろりちせ/index.html","69026a35c0dcabfa4f32d89a3ff8fddc"],["/tags/アイル【チーム・TATU】/index.html","c9d3cc69075418d3ea31c16e575b9dc5"],["/tags/アークシステムワークス/index.html","a1f02fd047b589b7f2f4622110711552"],["/tags/ブロッコリー/index.html","95425d5ca8a852a5deb862cd1288713c"],["/tags/乙女/index.html","23ec17c653f5f2fc8224f60a44b07947"],["/tags/停产/index.html","ea26c87c4e0918f8eab4577786c11b6d"],["/tags/公告/index.html","a7c68f4653fd3a4ce26ebde3ff3ea0d3"],["/tags/同人/index.html","9cbfb5c697fac0840afb35b4147b192c"],["/tags/堀井雄二/index.html","c63cad3cb3e1e304af7c67938775511e"],["/tags/外海なおき/index.html","450482c472bf2e1341f38281a641764a"],["/tags/機械式少女/index.html","4a88806a0a8776a8e08e377f380b00da"],["/tags/水仙/index.html","4a53ef177c307d34429ce0652ee2b652"],["/tags/汉化/index.html","c42a21fcc904d2cf2d8a728c7478f5b9"],["/tags/片冈智/index.html","3e40ea1c68bc5ee499df49f837c516b8"],["/tags/片岡とも/index.html","96b5295db82ab132cbd9821c220a9652"],["/tags/牙の刻印制作委員会/index.html","eb749b733e3511f0f0dc61da325d466d"],["/tags/牛カルビ定食-FLAT/index.html","c96ff9d2ead1834b0257ac07fabcdfd5"],["/tags/牧尾屋/index.html","c34546fbfa7afa31daa5bc1043c4d74e"],["/tags/猫猫社/index.html","02816c3586140ee796d59873af082c9b"],["/tags/王宮魔法劇団/index.html","1ebcc67dc8ec6b59b0a06f7bdd4bf9a1"],["/tags/画集/index.html","f540b52288744a3fa1ff099b9a74458a"],["/tags/索引/index.html","4a683d04f55e422ca2404e1107e9229d"],["/tags/自购/index.html","30e1d9c3587b075480680860db642cbb"],["/tags/郷愁花屋/index.html","102f98ae5549fb998e371e2a5df04741"],["/tags/閂夜明/index.html","5457222ec3c15a75c0fd220af413ef66"],["/tags/音乐美/index.html","35f43fe92dfb9892ce449aaee13a8fdf"],["/tags/黒†救/index.html","af571c8e6da32e3848e28da2163eac20"]];
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
