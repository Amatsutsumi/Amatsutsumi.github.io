/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3e7e28328aa01fa1f228aa86617f4490"],["/archives/2024/04/index.html","cd73046e07b136e6148760342e75650f"],["/archives/2024/index.html","f74aed86bc98f3d28f345a90675dce37"],["/archives/2025/02/index.html","74908e7b6ef4c4d5be29819264657a4f"],["/archives/2025/02/page/2/index.html","4b354b659a9633329ad71757611aa1d0"],["/archives/2025/02/page/3/index.html","d8bdd22138b8ecce7fad6b9abd108a9e"],["/archives/2025/02/page/4/index.html","426e102ead1b4118b05717a6a9cbd029"],["/archives/2025/02/page/5/index.html","1812227cfa106d854f3bec7a9ac38e49"],["/archives/2025/03/index.html","0a2478ebd3007035e8d3f043c1e0a31a"],["/archives/2025/03/page/2/index.html","15b2f797d4f068224989f17f11e1b223"],["/archives/2025/03/page/3/index.html","a3a3e8b9aad51d9bdf0938c306b377c6"],["/archives/2025/03/page/4/index.html","f9abef33db94dacb03af2f11c1ade04b"],["/archives/2025/03/page/5/index.html","8c45a5303ec79d3d44b988931729457a"],["/archives/2025/03/page/6/index.html","85435f479b8f4fef5521f1d62f5fc5b2"],["/archives/2025/04/index.html","8e41a12038d09bc910f551b92e99a107"],["/archives/2025/04/page/2/index.html","60b8573a5c5139b2b4c4c4abb53bdb7f"],["/archives/2025/index.html","fd6c48eed01ec485f54c38fbb9a7c4b5"],["/archives/2025/page/10/index.html","0f1ffa2f17ae19d3df06c245168c3f4b"],["/archives/2025/page/11/index.html","e956037c2a30718c438b1e544cde02c1"],["/archives/2025/page/12/index.html","eb487ee61f86eda71c5ff1c36aa974d9"],["/archives/2025/page/2/index.html","1f9c2942e3346b6fbddc96243f9ab4a1"],["/archives/2025/page/3/index.html","b48013b688522e6ca0a15175fe29e2c3"],["/archives/2025/page/4/index.html","f4a51a855c2cd586f55fc53d59684cc7"],["/archives/2025/page/5/index.html","1a0b371527d9805c09c2a7b8530f4d3a"],["/archives/2025/page/6/index.html","0e7afd0c00e3294725af6a0799552c64"],["/archives/2025/page/7/index.html","cb71954726e84242f4658a66d24d1eed"],["/archives/2025/page/8/index.html","a921d43d3baea50981820fdff0ac80b0"],["/archives/2025/page/9/index.html","c1a34dcdc3e9de6d00a261491521b7ed"],["/archives/2026/02/index.html","b0f4ea8f0d7d72b2eae9087bc8321bbe"],["/archives/2026/index.html","99f9f9b2c45590ce2393ffce5b53ab59"],["/archives/2825/04/index.html","d2ed05d1e85cff5a850d79393d6204a7"],["/archives/2825/index.html","d3a40b62f2b72d5bee9e388e34171fa9"],["/archives/2925/01/index.html","f515fb14c1fab75593f577da9e841b38"],["/archives/2925/index.html","36caf696d010a4bd4d684352cdbc9ea6"],["/archives/index.html","ddc464ac8badda6957a5ddb4d4d7a765"],["/archives/page/10/index.html","6ebdb377e1c380e63ad8f298244b7e29"],["/archives/page/11/index.html","a367795ad1593ff26597e032bac3c879"],["/archives/page/12/index.html","de0b55660b2434c0718af45c25dd7816"],["/archives/page/13/index.html","f19874e4377d6749f7fb847710b5882d"],["/archives/page/2/index.html","b7590cb45edb26911c3c13c4f21bc451"],["/archives/page/3/index.html","343638edfb1a55a959e24e47d7978e99"],["/archives/page/4/index.html","2f4fef8c4f84dc2cfa3200338e9d23e2"],["/archives/page/5/index.html","ebac54adb865453f93ff59c57dc9fdee"],["/archives/page/6/index.html","38acf19eb5e2449fb93e89ac9adfd2cb"],["/archives/page/7/index.html","8ffead51124ec236aa89898ee44a1d9c"],["/archives/page/8/index.html","95a26cc2eb1c23c4e7378c3c8f33082e"],["/archives/page/9/index.html","658c467aaa748f72221d079b2469a0a3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","e3067594769647feb152e105408cdc39"],["/categories/galgame/page/2/index.html","61f60f346141f8d1aa76f98a9ea0ac03"],["/categories/公告/index.html","7873633d0a79d179f58f31d9aea0f756"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","a9b0629d6e4318af20551c5e6b13aecf"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","43ba7bd4130a8e98e3bc2474c08d6e23"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","2260a0f9e25e8600093a52f46140674f"],["/page/10/index.html","2ba6b25b08c2c33cb57985e38526b577"],["/page/11/index.html","307c8a4875344b2149b952630e35acd8"],["/page/12/index.html","787d5f2d3e53a32b565f3aa1446952e9"],["/page/13/index.html","728bfa3b328cbb50bd58123c95bd968a"],["/page/2/index.html","a86fc7147ccd93980c2ef05d8e85900e"],["/page/3/index.html","fc05e2f29dcb8b855690b22f56a0c8a8"],["/page/4/index.html","39d1162e4042583e67389633f19b98fb"],["/page/5/index.html","8585909d23041ab7f018c009023b01de"],["/page/6/index.html","b88bf41f1d633d0c9d1c0306c7494ca0"],["/page/7/index.html","e4fbad5e9c093059acb3760fe15e5399"],["/page/8/index.html","51cf1d7a8d87da09894aefaac6e47179"],["/page/9/index.html","1cca72db664c956f2abd731fca9912a0"],["/posts/10c9dd98.html","e968eaedadb6d27a86e79ef72eb29b9b"],["/posts/1295b569.html","fc1b08a00c853852dee9511d76f6a392"],["/posts/1370342.html","699770b1d833fd92b36fb2b57fd2f460"],["/posts/15ef14c2.html","2cca9f8b1fa76ebd7beb17a2e60fbcfc"],["/posts/15f3959d.html","96b5c7a82552966a94b82d97864574fd"],["/posts/18ab785d.html","f777bb85198f79e39af4d804dd6dc388"],["/posts/1d59b71f.html","2bb1f3e287ac41aa1e920a0263907872"],["/posts/20b3f3a4.html","f26e16cc9a8c404aac5423e00c5c3435"],["/posts/245f1c7d.html","38feb3f67126789bfaf202fd50e323b2"],["/posts/252658f.html","d643b6104d991dbc2c959bc09f0747c4"],["/posts/28397adc.html","cb30f49ca8ce0360acb46d196dd32241"],["/posts/2ad07f54.html","703d30608277a589d319326fb3e7af01"],["/posts/2b38bce0.html","c94c114a85d5170edf138df7140dac22"],["/posts/2c0a6836.html","aa352359d122fa78beb4517da555d63e"],["/posts/2ce39bcc.html","191aa370e5bf49f64106ac4fa7f6bf96"],["/posts/2cf620f0.html","c7fe966130dc7a589622a946af4a3188"],["/posts/2e30fd6d.html","b2b02d8ece0f78f93520fbfeb4817b6c"],["/posts/30a413ad.html","dec9ee770ae53ac48d5204c7de04271a"],["/posts/34292736.html","b18f38e648fd3280981e61615af76d74"],["/posts/3468cbe.html","4947bc2bd1302d8904f9b42e24400e28"],["/posts/39176dc0.html","78f5e93efed8cff5d09fa7c6d67015df"],["/posts/3e118dbf.html","2823a81575ce99bdb991262c44898d57"],["/posts/3f7d823a.html","2f26d0425d23170a87cc6c439d9be92b"],["/posts/3f978819.html","579f5628c83aa78bd61aed1442f395f5"],["/posts/43945723.html","3104be3a374f7b5481ab4c3942adb224"],["/posts/44124a6b.html","fd9c5200f98d8fd27e55dc7ed485c2df"],["/posts/47abb61d.html","94bfb48a6641ab3134f7ee2d1c83c3af"],["/posts/4996478a.html","d175bfc2a1ef4706b9ebf7707defe318"],["/posts/4b689be3.html","89eeb16a24b1c2adafb27e54b3e421e2"],["/posts/4cf8423f.html","14110d818cca2272de57cc2ad618b8df"],["/posts/4dcf85c.html","b2903acf7f47dfb569b6d6910616d7e2"],["/posts/500cd322.html","5c53a333e3f86183e9db5b3199123e5e"],["/posts/51c9b1ff.html","3eb8c948dd24c3868498ae70e108f0c9"],["/posts/52b5b3c6.html","00878b6a87c9505b2c2d61fb395e038a"],["/posts/54f496ad.html","0e521672c7695cda83969035a941c69b"],["/posts/558e1f30.html","5bbf4242b87bb5496b80ba05749000b2"],["/posts/5d8bea92.html","03ed8b614af10f3426366b9b27ed199f"],["/posts/5f6e0c59.html","425ca4520c7c68a474c9f8e09534a380"],["/posts/61a63a84.html","2135d9a26a798bde81ce73b04a58e925"],["/posts/625ab7bf.html","30f1acb3446107c888442d4e9c667561"],["/posts/6336a2f9.html","fb77e5c79f6b61dfdfd9b05d01c0a287"],["/posts/6432d61a.html","ae4b05e157a0ca9f651f12ba54822f81"],["/posts/6515f032.html","2714a2540f2363c0a6475a4e209a9477"],["/posts/6720ccdd.html","d45e75c335dc3329053da0581ae7de1e"],["/posts/6a4b5ac8.html","b8d2e6074a6278bf028075b268359a39"],["/posts/6aa4177c.html","c047034ef349a89f15725d76061f901c"],["/posts/6b15f81f.html","51b0122b4efe931099c0860d69e1861f"],["/posts/71131d34.html","b08c16505a59a40c9313e05e62aaa604"],["/posts/742fd48d.html","754ad23fe2844eb00384bce31e149ca6"],["/posts/78a8a8d3.html","06cd604b5e540fe546051304c5a1f73f"],["/posts/7a5ef3d0.html","d57d0ee298188d85e22b4569596548f4"],["/posts/7b41e1ac.html","5758784f033302c62e91b60d215003cb"],["/posts/7b51011d.html","346947d1bcbb02d78e4ad447597cd873"],["/posts/7e3aa3e2.html","1757ef048d84d066c581beffddcd5577"],["/posts/80fe2691.html","460d9940027a6ef8cc339593822e6443"],["/posts/81ac52e9.html","e6a5c094bdb8823adb3ddc13ae59aaa4"],["/posts/82332d11.html","90083607b6c682e215c3f6d0859ef705"],["/posts/8486f6f9.html","9796305aa8f24b258df855afe5bb0d9b"],["/posts/849b40f8.html","37dc458694f5ef10624d49022f3e3d8d"],["/posts/85c51d68.html","d48d0ca6bdff90a868adf38ebe2862bc"],["/posts/86a6c500.html","cdd49c1f166bbc39811b9f3462afbc7e"],["/posts/886f8d3.html","4fe24b991be7bb2fec86e97a0c2c7932"],["/posts/8a7cba10.html","a82acf83d9ecf35de111bcfdfdde7223"],["/posts/8ac11b41.html","87e3fe5fc014829c2ece0c3aafa38ce0"],["/posts/8dd520d9.html","afbc8a4fca3f7e655811dda669841230"],["/posts/8f555654.html","313baaeb201415a9daa42fbfdd22556a"],["/posts/92a980c2.html","d6121fade9f1b5d0739e96d11b5f5eee"],["/posts/92ce16.html","d20d4c8eb3803d80375be964bc8824b2"],["/posts/93e9943b.html","e9531e99333149c5ed228ec57cc6eaf1"],["/posts/94d3c794.html","39503b47c298d4dd34dc47f0a457d02b"],["/posts/97f50eea.html","3c37727d9da3c8298ae535b6c4f0630a"],["/posts/97fca8be.html","8c8e73e32aee8e4b8b5c801005d256b4"],["/posts/98662d05.html","99b31c3dee856a5df950b47e8b195fb6"],["/posts/9a2f6162.html","758b21188f8f27df8250843c58c6915e"],["/posts/9b22a48d.html","66a3f31ed36eebabce0e68fda6e39466"],["/posts/9cb455b1.html","cc1b45f85f3c8043541077b4e2455f97"],["/posts/9ecdeecc.html","b8776c3575cc4f94cc892837b44080df"],["/posts/9efd7701.html","100fdc486d655c2394d5b302d7fccaa2"],["/posts/9f61c1a0.html","c0844b543023a8c247a05d2f2db52661"],["/posts/a1de710.html","43ca54f42b4b865f51c851c8fe7a243b"],["/posts/a30eb0cd.html","e6756fbfd6d4b903b3d01f50ec55ec0f"],["/posts/ada3f440.html","d61af5c4e279107f8abe1217792a1757"],["/posts/af1807ef.html","15562c665a02b53c3294eb21e033da2f"],["/posts/b497b647.html","843f0315a63547c148d96eb81a77db4a"],["/posts/b4d464b0.html","afaa04a6795054938c5b3845a9134ab1"],["/posts/b5fb773f.html","fa024231a0172503354ac410080e6788"],["/posts/b8d46b32.html","d118039471eb078707f4bcd11023fcb7"],["/posts/c1b2c6c9.html","a75ae1afb590abeaeaf4e232ff5a20d6"],["/posts/c2111cbf.html","ddacda972f48dd190b66223168c1c54d"],["/posts/c316c2e8.html","838f2d266195fa4878c74e27b73c29a6"],["/posts/c43e60b5.html","0bf1b3bdacdb988983787fe0bba6fa08"],["/posts/c497a412.html","10260408b56c0052a6ee8ba8ea729d4a"],["/posts/c5de299a.html","03de8df4bbe1c9bdfdb76ba7ea3c2a44"],["/posts/c70bba9c.html","d4c091ef1a16e1be62fdd5e77617f7c4"],["/posts/c797535e.html","774d231138d7e42571c979262889af9d"],["/posts/c7a62c79.html","b6c35bdd02128a436f02acf8ebbd2902"],["/posts/cae2c959.html","db0553744ed505f891f6dd2850045da5"],["/posts/cbebef2b.html","c837efc7710e24b979ed2db941f44dbd"],["/posts/ce25023e.html","d845fe5870ac5fd43c9a4bbe68fe9ba0"],["/posts/d2fd4837.html","bddb3690e0e79380efa08dabf94b91cb"],["/posts/d3233cbb.html","0158573431bae327267b0c429b74d74b"],["/posts/d3a745a8.html","edeec5cce85981606f7b973392198544"],["/posts/d7e940d2.html","0446cfc2c8f9af758bf8884416a5d8de"],["/posts/dc815d5.html","d0cba1455b6e066b17c05a771eec61b0"],["/posts/de25b0be.html","db02fb9dfb3072687a33a6d4cfeb14ff"],["/posts/e2623b4e.html","9434f15772b82b8a9edc4806e50e7310"],["/posts/e3ab6ad8.html","542178c00d5437f2026049f3763c64ae"],["/posts/e5018da6.html","2a8b8c4d9aac679042d1393333753c15"],["/posts/e5963272.html","f6f95b843d0c10b7a248c154adc8991c"],["/posts/e624b065.html","e1d73ca5497c5716b2ac7c0755e68bf5"],["/posts/e7c703bb.html","28f68d7fb5e9ca8642e05c5e4c80c0d1"],["/posts/e8f14b6c.html","212bb0563e7da96af734db7fe3839d06"],["/posts/e91abb63.html","02cc8fa1b49443771d3fcd474c72908e"],["/posts/ea9a8808.html","863349337b65ceb96fbd18e36752b911"],["/posts/eb784749.html","b84844f36eab459aa62e6e28dc87ca0b"],["/posts/ebaf2232.html","fffc8aa2554353463f6b8a1b23d65dd5"],["/posts/ee1ed673.html","caf00e6be84b771ba2a1016c2e6d2631"],["/posts/f0c3ed61.html","a8925afc314236196f4d2230cf8e03c7"],["/posts/f151ff43.html","4589873402396c6f29e4bab0d0d22bb9"],["/posts/f21e7f84.html","b4e79c509f281e820fe3918b99cfc404"],["/posts/f230b0fd.html","b8c439de04d01d82983140cbd555f834"],["/posts/f663d5cc.html","a46de034022ffed733c1bf21d84ba689"],["/posts/f730ad18.html","8090cd6cebbee77a54f9cc6ea243c376"],["/posts/fc04d0d4.html","7cb3fc128c9fcc9760c75f905539fd24"],["/sumire/index.html","9a9eef542f8935255818b9383d90de25"],["/sw-register.js","92385feecb401d46a28186095e4ee712"],["/tags/APPLE-project/index.html","ed276416605cf5894890340e5e4e8fd6"],["/tags/BELL-DA/index.html","e8b02bf840696950a7b05bf8f5a1ede9"],["/tags/BL-Game/index.html","c30e3f19cb63ef2b33bb2a368d285085"],["/tags/Blue-Dahlia-Digital-Creators/index.html","6f44cfeab631ce2cf357193a67b0d00b"],["/tags/CHUNSOFT/index.html","1ce4bea8db70275a660498b72bb7450f"],["/tags/Check＆Stripe/index.html","e1085f24c3520d0498d620ee64f239c8"],["/tags/Cherry-Pie/index.html","bc9c70c5e12a521d5e7e490c2b12c1c1"],["/tags/Circle-Mebius/index.html","f73801ee0cb652f5cfb994e6f4e3f969"],["/tags/CresCENT-BLANK/index.html","1bf5c49cec183cfc5aed9a98bc0f1bf6"],["/tags/Dopamine-Software/index.html","2ee33748116cb0735e24f8b16c15b2b3"],["/tags/Dos/index.html","4dae87fc18616f24a75fea127bccca15"],["/tags/Earth-Well/index.html","68d68fe0711ae3a1fd68f9a0d4166a5f"],["/tags/Forest/index.html","19aa2a09023bdce660f81574d1ecfaad"],["/tags/HaccaWorks/index.html","12f7f4736c9ab9cc940b84bda95aa858"],["/tags/Kanon/index.html","be996588a5b8e29eace4d40fc28b7a57"],["/tags/MANATSU-8/index.html","906fc39f5d47a00c442a2836606d239c"],["/tags/MARINE/index.html","fa392af3f223132d6dcf40739196d770"],["/tags/MIO/index.html","e13e7d8014dc18dd7688b158375d00b5"],["/tags/Nmyu/index.html","585bb0be235cad47d904086e9ffae105"],["/tags/O-S-I/index.html","fe327da2d97160612ee02b3602c33163"],["/tags/Omegaの視界/index.html","2eb43eed96e6e38b5347825fb765ec88"],["/tags/PC88/index.html","e84a2ab53333651ad81965d2b65f426f"],["/tags/PC98/index.html","2a6e18accfa10cba8b2e0ad115fcf8d4"],["/tags/Perpetual-Room/index.html","52b808c004bdac3e82bc41bc3b67afb4"],["/tags/Pleiades-Company/index.html","e8e80945a5200d4abd1f1a38f24e4b48"],["/tags/Project-Twintail/index.html","d08fb6c3944774616f0c60acd86d41fb"],["/tags/RIFF-RAFF/index.html","8a8a6ab377a67c9079fb7db055f77fb8"],["/tags/Reverv/index.html","471c7b057e826330ee74c470f863e968"],["/tags/SENTIVE/index.html","a7f60b8599092f81dbf04acacb751127"],["/tags/Saihate-SOFT/index.html","c550e90a3bd67736089d7785e907556b"],["/tags/Scrubbing/index.html","498cf3f6a70d9bf50a706950543f17d8"],["/tags/Sky-On-R-imaginAtion/index.html","9e612597ab97e9e278df34b5d898439c"],["/tags/StrayMoon/index.html","7faa0cf5f0fb0c7de316cb721b55179f"],["/tags/Studio-Bu-Sa/index.html","f7ad8c1eba4492ab5f8683c50f3f6e23"],["/tags/TRANSPARENCY/index.html","75e6a23b062ed6c0b973005c9d537797"],["/tags/ToHeart/index.html","dc30e63a3de0c97e3d443df6df372983"],["/tags/Traumend/index.html","2cc15c0daf163fc868959d00fa5cfe0f"],["/tags/Witch/index.html","07b3e043feaae9d98ce3a5d316e8b618"],["/tags/adonis-project/index.html","d37f4675de879c79b080990b9e071b13"],["/tags/flash/index.html","f990dbc7c3e0086450a70d3eda4385d6"],["/tags/galgame/index.html","0d4bf27a1f4fe7c467bdef179ad87e1a"],["/tags/galgame/page/2/index.html","913b3672932039777f936e6c4a431bee"],["/tags/gal资源/index.html","7200fb8476d8f94f640ca876fe226c19"],["/tags/gal资源/page/2/index.html","66ae8a97701fab09a1f072c65e116abc"],["/tags/gal资源/page/3/index.html","34467c05045e93e3158098cd414b925e"],["/tags/index.html","a9927a6c1a361c032bf0517fe1b23f0a"],["/tags/rkr/index.html","0a416d48e3f2618ac71a503ee911ecaf"],["/tags/team-eye-mask/index.html","55a75da25023c791602d388f30d0f14c"],["/tags/ありすくろいつ/index.html","2b6e5fc77fd42797f3b4c2f64dd9b940"],["/tags/いつものところ/index.html","c69f52dead63faa2c915272b9a4e850c"],["/tags/きつねみみ饅頭/index.html","ef549925a88e96f1617b0fbfb3e1c5ed"],["/tags/ねこねこソフト/index.html","6703e6d62b84089b8d8d44f9a777c2c5"],["/tags/ねこバナナ/index.html","cb849d47eb3d8adaca1592510fe36cb3"],["/tags/はちみつくまさん/index.html","e83cadb55be13c3fa1563af44638ff11"],["/tags/ろりちせ/index.html","633f8ec36a1e70b689af7b276ed2dc62"],["/tags/アイル【チーム・TATU】/index.html","7cef8b5cc6023cdd0df427e7ab063783"],["/tags/アークシステムワークス/index.html","139217bb899dfb9c7eb7178b21881507"],["/tags/ブロッコリー/index.html","8c93376dad1e57f45896195e9cd0de33"],["/tags/乙女/index.html","d5123c9e504c2832283ba6d111dfb922"],["/tags/乙游/index.html","565ed5be3d473bb5ca10eeafc0d28867"],["/tags/停产/index.html","5a29957d3cdcd22333e231db8c11efc7"],["/tags/公告/index.html","ccdcac578c0a801bdc08975f85e17401"],["/tags/同人/index.html","a717d8bf334c2dbcc4af6b13905c4b81"],["/tags/堀井雄二/index.html","4ce04543a6cf9f08a354f0071573ec64"],["/tags/外海なおき/index.html","7afaf4d40504188970866dc93b482128"],["/tags/女性向/index.html","680b043ab3c4c979d9822c4a1c24a90e"],["/tags/桃野衿/index.html","c155396d5aac4dcf846e4ad528744ea8"],["/tags/機械式少女/index.html","bc7ace9646ee7f4cc099f584459bfd45"],["/tags/水仙/index.html","2ddac64eef2450f1461596db9159686c"],["/tags/汉化/index.html","1b468aed31f7e167ee9692113cb88847"],["/tags/片冈智/index.html","b164785e41755faa8f7fcca3cc968177"],["/tags/片岡とも/index.html","275005cf0c1579bfb326d17a9ea56fcf"],["/tags/牙の刻印制作委員会/index.html","8efd81d1d74fd60a3eff287196e82421"],["/tags/牛カルビ定食-FLAT/index.html","38ac2ceb6a60a5227640abbcc4d6297f"],["/tags/牧尾屋/index.html","b1cb89b71d9e0b9a8473805348231466"],["/tags/猫猫社/index.html","0c41f4d4417408fbf0ccf9bd650dc104"],["/tags/王宮魔法劇団/index.html","4b7d9eaacec50a797160bf37511b9349"],["/tags/画集/index.html","8d5588e87e24ca8b1309c286431a92d2"],["/tags/索引/index.html","011096bcec39424e89ffc9adfe67f713"],["/tags/缺失/index.html","0a8be3e18efe17d57ccd2162b1239498"],["/tags/自购/index.html","0da42de50eb0dd8ec5aeba6c26b463dc"],["/tags/茶葉☆姫/index.html","d318c0979ae49dce03d018378b499643"],["/tags/郷愁花屋/index.html","3c25f5379cc6dccb06554e3ffebf1eac"],["/tags/閂夜明/index.html","295e127251d4b93e5d5e55759c44a7b2"],["/tags/音乐美/index.html","79709c82643614defbd98448cc5e3ed6"],["/tags/黒†救/index.html","b1d037e0e1428b7232558a829fef7b30"]];
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
