/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f1f4c53f665c228a00249109ee6c98fa"],["/archives/2024/04/index.html","67e576d8629c87c93dd6598250038902"],["/archives/2024/index.html","1ec86923b7658db9eaef1f86758491c6"],["/archives/2025/02/index.html","3b63d9f18344f8816f8c0a860e89632a"],["/archives/2025/02/page/2/index.html","cb04dfb7ef557d18590e90282a9e5138"],["/archives/2025/02/page/3/index.html","cac77b19ec1beac4a2ed60f82cf9d038"],["/archives/2025/02/page/4/index.html","e287d97d4d16b720ad48bf3f0c6fbe69"],["/archives/2025/02/page/5/index.html","04af0105ddeb2f3949cb669f93f1bab4"],["/archives/2025/03/index.html","18e627053ae98494026afe829306dcc9"],["/archives/2025/03/page/2/index.html","06b16ceda7bcf32c237d8aa5d5e13477"],["/archives/2025/03/page/3/index.html","37152e1f7999bff7d0374952507c8a7c"],["/archives/2025/03/page/4/index.html","41967d7b844f4cc7f12df990cc20e9b5"],["/archives/2025/03/page/5/index.html","e7dda759f9a364ffd07e61653a1e48c7"],["/archives/2025/03/page/6/index.html","685abca8b4a6ec301c1b1d6008539a50"],["/archives/2025/04/index.html","e2cc722bc25995dbd0f696a581b55f01"],["/archives/2025/index.html","d75a164c2b89fe31540e1e33632884eb"],["/archives/2025/page/10/index.html","b1c1cc4096cd92054f8d373ee0dc92ca"],["/archives/2025/page/11/index.html","9aefe31b4d5cbc54be84183ed9bb79eb"],["/archives/2025/page/2/index.html","90c50f67d61092ea9cc5d95585b5fa5b"],["/archives/2025/page/3/index.html","2b0d2b85c9d3536657f47a8d77c4607c"],["/archives/2025/page/4/index.html","2e265405c6275d097dc4da1798761c5f"],["/archives/2025/page/5/index.html","d6ec5c0bdb8f0e1498a8081c78f33cb2"],["/archives/2025/page/6/index.html","4d5230d564ad71107ce16dd38836a3d8"],["/archives/2025/page/7/index.html","a8de5d75b5240ecfaa69f629f76508ff"],["/archives/2025/page/8/index.html","5c3c7d1c60b8aafc100269138f2d4c8d"],["/archives/2025/page/9/index.html","0f278bc768c3174bc08264be4cf5ca69"],["/archives/2026/02/index.html","d83cb6c73c6d6eff630a3b37c4bddb5e"],["/archives/2026/index.html","4990cc97d8c13bccd90ccd263e8e8a17"],["/archives/2825/04/index.html","9883f9206a25bdf1891726bbedb184bf"],["/archives/2825/index.html","3f30885938d1ca4fa3bcffb1d191db81"],["/archives/2925/01/index.html","0724324ad8d4118c70a3fb22424145a2"],["/archives/2925/index.html","3f5baf842bc3f6a898c2fb647e4ea47f"],["/archives/index.html","368d7499be8ededd5dce9d95e963d5e9"],["/archives/page/10/index.html","5302007b9210b05980656aab9ba28e18"],["/archives/page/11/index.html","1afff8e1893c21ace4bd943434253998"],["/archives/page/12/index.html","d5f49da9d88cca108509971109f1b172"],["/archives/page/2/index.html","1d6ca0f33ef2e9d3cc0b122169c9f5cc"],["/archives/page/3/index.html","2b9730a30d634663fa7140652a4a98e1"],["/archives/page/4/index.html","02a115d10d2a9d8a9ac5ed0de374ca27"],["/archives/page/5/index.html","b4310c1063345b4507878c79c605e6bd"],["/archives/page/6/index.html","5f2d0e1e255ff1676ef8639cf93285fc"],["/archives/page/7/index.html","c2497ef9beb78d38a7fd6b84c35f6605"],["/archives/page/8/index.html","175a0a04413b8e3a294137029a1ea8fc"],["/archives/page/9/index.html","257f410f98464dd8e5f26f4e7375b3f1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","3c227f3a6429d8776fa02cebd1ff789d"],["/categories/galgame/page/2/index.html","31d155607554e5b47b42c773893a109c"],["/categories/公告/index.html","6eb4b3b98b2790a1310b13d8d3fc8217"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","6fe503b720fed2a18ccb446dfac6b9f8"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","a252c04eb2d07d404deb012efa709623"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","2ae8e25493cd17f691cf6dc30751e8c0"],["/page/10/index.html","e8bf6ba4be4c1ee479d46be912b5dd92"],["/page/11/index.html","b63e813e94bfe971d7c708d187346589"],["/page/12/index.html","2faff92f817d1ca4588ea4f6991d100d"],["/page/2/index.html","03bd2b8f6a6611d7c65752fe4db5b636"],["/page/3/index.html","d05ec2024331392feb471462a33540b7"],["/page/4/index.html","d315ce82e64019752ede1991349cd28e"],["/page/5/index.html","bed5296b12706bb61c86c77870b1c840"],["/page/6/index.html","ed576231306bab13549f8dcb29cfb02a"],["/page/7/index.html","87e4535516e1dccf21b132b076abd110"],["/page/8/index.html","64c045cb8a4174bd04965d933529042c"],["/page/9/index.html","1934feb7dfa002abcf0855a853ec9ae3"],["/posts/10c9dd98.html","b05dd4c8e8dae0cfee46175ec6b2f8b0"],["/posts/1295b569.html","ae775437cda8abd536abffdbcfcbf3da"],["/posts/1370342.html","6153652240ad4a40c4d4436e27d33d78"],["/posts/15ef14c2.html","e336df36ed9ba892cadd932b4e308074"],["/posts/15f3959d.html","e80027d3cc9fd3bdae3f10ac1b3d0936"],["/posts/18ab785d.html","4f3f67c2cae2c862950dc44b29b5b75e"],["/posts/1d59b71f.html","1dabd8fd3a1228f35bb90e849b7637e0"],["/posts/20b3f3a4.html","50106df2f04996b64d9b9ffa3e853d44"],["/posts/245f1c7d.html","36cb1716a944758021fb696a91cd18a9"],["/posts/252658f.html","cb3dc110144c1579a8cff61e4e973572"],["/posts/28397adc.html","c184e8c7dc4ada07b8827c5119b3c06b"],["/posts/2b38bce0.html","a7676bcd979a1ba8ccd6c17b512a3358"],["/posts/2c0a6836.html","139464c3267563c3eb5d26ce4c0e5350"],["/posts/2ce39bcc.html","c18d1354732fdc8b8db63d179642962e"],["/posts/2cf620f0.html","faf5cf31cf58d0450138fe814caa2f04"],["/posts/2e30fd6d.html","667e765920860cc23ba31fa0eda7cb7d"],["/posts/34292736.html","552cbddc2b49ae8b78b15cbd5c4f274d"],["/posts/3468cbe.html","c416537de623ac67b2ff9f1a5ef879a8"],["/posts/39176dc0.html","d8de66b53bf52a8e0eed6d6f66de7c84"],["/posts/3e118dbf.html","d70fb19da321180e821c6ea595296b70"],["/posts/3f7d823a.html","f76e7e240d91d986056a66b2785d945a"],["/posts/3f978819.html","7c91e1b408e87c1a46d7877226170dc9"],["/posts/43945723.html","7447bade7f3080fdc08ec96796b12097"],["/posts/44124a6b.html","ef27185c8da6993fde72549f70e435cb"],["/posts/47abb61d.html","5ed31b35a5a3c032dc46bceccfef87b4"],["/posts/4b689be3.html","074b7328f9a3b0dbbeb5545f6014f4a4"],["/posts/4cf8423f.html","75af7996933fc9ec45e6faccb2450996"],["/posts/4dcf85c.html","97d100df0fa4faa855bae83cf6c3d122"],["/posts/500cd322.html","87202e2e9bca66e8e8916f792474cc25"],["/posts/51c9b1ff.html","3bce3a7bcc6d735432c364d6b31ca878"],["/posts/52b5b3c6.html","07ea9275779db336dd1d1e5dee798103"],["/posts/5d8bea92.html","c6da7e9c6e7895cdd195b981268b3e4e"],["/posts/5f6e0c59.html","43f2db35c02c12f0c0b7df9259c2328c"],["/posts/61a63a84.html","4c5b502312338de5bead736c00d8c597"],["/posts/625ab7bf.html","4a91de4329371fc4266a7b9205c1c260"],["/posts/6336a2f9.html","2f493bed82745cb6cd0cdf2a353296e1"],["/posts/6432d61a.html","22afc6f07333d5433eeb3028be48edf9"],["/posts/6515f032.html","5c93fc1bb302d77f97614429153eb671"],["/posts/6720ccdd.html","dec436ed1b2d9424d46860f0ac75d708"],["/posts/6a4b5ac8.html","94d7f4604a21555715f7075c7f1ee5c9"],["/posts/6aa4177c.html","1f34e10fd29a3276bfbbbd30f4c8e823"],["/posts/6b15f81f.html","2ab75768105af3b12afb36a986df5fe9"],["/posts/71131d34.html","875c20ba1d1ee2d6a2cade63961ba43c"],["/posts/78a8a8d3.html","5324e98da2af91f5b545ed0f4e85530d"],["/posts/7a5ef3d0.html","e06c49dcc210b6f4b05b2b04ab9db236"],["/posts/7b41e1ac.html","4b9d286335ecf28404f9d298a37334b8"],["/posts/7b51011d.html","3cf5496464b419a24bd670d8d99b8a96"],["/posts/7e3aa3e2.html","a0e1d37d92146ba4837c162d4b324e5a"],["/posts/80fe2691.html","d0c801118e584e646fdb990bf039f9d0"],["/posts/81ac52e9.html","1bdd42b6d15b1bc134d17a13c2d64361"],["/posts/8486f6f9.html","e34f7df802ddbc1dee86e0ce78d83e50"],["/posts/849b40f8.html","73fc95d9e37756c730893d41ce4b9e01"],["/posts/85c51d68.html","d74e495fea5277308b32575f83391982"],["/posts/86a6c500.html","0eb5ea05d0d6107d78036aeda77f99a8"],["/posts/886f8d3.html","1a4745e203fdf31fcf6578cddadc0898"],["/posts/8a7cba10.html","7a7f69ca7fd24f2925406e5ef67767b1"],["/posts/8ac11b41.html","38a3fad2bcc4775c2346b396f6fa3dcd"],["/posts/8dd520d9.html","48e6e2ccb8e2db70af0d09803c37f76a"],["/posts/8f555654.html","6e477f2f27d2c5b7867658faeb9da2f7"],["/posts/92a980c2.html","447d4972a1cabb16385133655ca309b2"],["/posts/92ce16.html","acb68c39370aff67fb44fc66d2ed6f4d"],["/posts/93e9943b.html","92a41284053dbd5e0c1b973794570c8d"],["/posts/94d3c794.html","56c0bdab0efd28be5ad57967a997fbd6"],["/posts/97f50eea.html","efe69b10dd94c248bd16b4aabc0e2983"],["/posts/97fca8be.html","e8b1cd2d42ff3e4385b262c28b913b35"],["/posts/98662d05.html","053a7c187730cda585eb509e3c6d5d89"],["/posts/9a2f6162.html","da3ee0bc6c3bccc678f00fd76d03ee46"],["/posts/9b22a48d.html","b1c70ca1a500ef3a57b44ef8eafba592"],["/posts/9cb455b1.html","2cda2ad5d4270efad99813e91fe14370"],["/posts/9ecdeecc.html","02930fdf5b968b8e0bcf6748703e926f"],["/posts/9efd7701.html","0a66bfc0252864c98cdaa66aafee6990"],["/posts/9f61c1a0.html","0fdb9b83331b31c5c207f648fc750394"],["/posts/a1de710.html","daae57e5c56a93d5c4ed194d57809776"],["/posts/a30eb0cd.html","25c2b5d3b071af9dec7dedc529f81dcc"],["/posts/ada3f440.html","ee196fe16856ee1dfc765286a2f01ea5"],["/posts/af1807ef.html","66cda6487c86c18adec2201da2c66b5e"],["/posts/b497b647.html","9208f1fd20a6f20dbea1c3473af84cfa"],["/posts/b4d464b0.html","15afdd33753a7f01655577b1b6618d0e"],["/posts/b5fb773f.html","32ad7a523dd77608775c2d4a61241c4e"],["/posts/b8d46b32.html","1d965d7b3f5f30d6dcbe2e65f36d35dd"],["/posts/c1b2c6c9.html","08452a12f4d3864a9ade730b2de79147"],["/posts/c2111cbf.html","d24f08682892f57a5341de8008adb4a1"],["/posts/c316c2e8.html","a0ee2159dcf278f05d10fcddefb103ef"],["/posts/c43e60b5.html","67e008800985ceb7842168ac2e131914"],["/posts/c497a412.html","16e1c4dbc245c8a9a576cc5afdaa2529"],["/posts/c5de299a.html","8da0e9a5fdfd9545e5f2bd2bf77a3aa1"],["/posts/c70bba9c.html","5a239b29caa24d9d8eb42f4ba201f82e"],["/posts/c797535e.html","88852709b967bb9978dc3553809be812"],["/posts/c7a62c79.html","4eb73b39952b3fc0a03c51d00814e939"],["/posts/cae2c959.html","0886107d485cf33317a15d934d5715f9"],["/posts/cbebef2b.html","f04cacbe25617fa47768e6152e102055"],["/posts/ce25023e.html","7a03dac8be6e4a235cc680e1e7435f1f"],["/posts/d2fd4837.html","b3ab10968b38d1bbbad372fb5180315e"],["/posts/d3233cbb.html","62c242e3fb2a597f44d6be532e63a8eb"],["/posts/d3a745a8.html","cfe79cfa02b2dbe7f28be0e320f91be4"],["/posts/d7e940d2.html","387d9c908230389eafce20f439064162"],["/posts/dc815d5.html","fe3c882515bf4c494e05e0108cabf8f5"],["/posts/de25b0be.html","d24f27ca4357e1c578a13dd1032a44b1"],["/posts/e3ab6ad8.html","f48abd7905e0ff126d2c33e0f27f0c49"],["/posts/e5018da6.html","2ee85d13222822fb6f8834169a196e04"],["/posts/e5963272.html","e1321fb93bc5de8ff2cf60f130dee796"],["/posts/e624b065.html","49da56d7619c42b399ed14e66691e841"],["/posts/e7c703bb.html","a3591d7ccb04ad6fa70410b44cc5f2d2"],["/posts/e8f14b6c.html","806134673863a35ae72fb51105b03509"],["/posts/e91abb63.html","b69f02531ce13283e12a1a50598924ce"],["/posts/ea9a8808.html","53942f3ea515f96d070e6e7004225239"],["/posts/eb784749.html","32718af03fb1117f3dfdd842976375ee"],["/posts/ebaf2232.html","ee18712ad4dbcaee5bfb34cc1d6887b7"],["/posts/ee1ed673.html","61fb295ab157305f4f4f9f3b644506b5"],["/posts/f0c3ed61.html","bbf1c1b356b321a493d55fbb40adf24b"],["/posts/f21e7f84.html","d7eb49cd83de9b8a751bf3e3b670fa5b"],["/posts/f230b0fd.html","94f1da340ebd7036b44d1418eede121c"],["/posts/f663d5cc.html","9025815f190e8de9c393f1a35e6847c4"],["/posts/fc04d0d4.html","43d33693ff16143cb41ece95a742a537"],["/sumire/index.html","38abb9e3ae4eabe9a212ce4136f13641"],["/sw-register.js","82732bec388bf612a75506cf5d2cecc7"],["/tags/APPLE-project/index.html","2ed488bc03a29f0357ca97ff408febcd"],["/tags/BELL-DA/index.html","999ba3472990470daabedd3c91299082"],["/tags/BL-Game/index.html","7a8eda4deffb4a8a4d47be2afe334cd6"],["/tags/Blue-Dahlia-Digital-Creators/index.html","a3b4de98b00d222395541e6c957c4f8d"],["/tags/CHUNSOFT/index.html","5fc3a7f78ecdbaf989829c984123d577"],["/tags/Cherry-Pie/index.html","4162db70ddb0e996d06c67b2aba64204"],["/tags/Circle-Mebius/index.html","f77a6d35c52d44567943ec75bb08361a"],["/tags/CresCENT-BLANK/index.html","8a901a2e327cfc7f3d4ad98876fb9fb2"],["/tags/Dopamine-Software/index.html","0004c39ea8cefa1ac4932ecc6848dd5e"],["/tags/Dos/index.html","268b9a951f99e519c23fb182e04b355e"],["/tags/Earth-Well/index.html","e5b9953ff021e85fc1b84f8653f502ae"],["/tags/Kanon/index.html","30ecae86d1b776455221df74b23a3642"],["/tags/MANATSU-8/index.html","3e856b5ce4cdb83a1c48ae4badbc1089"],["/tags/MARINE/index.html","8da29cd25e1089e2273d0088333c0099"],["/tags/MIO/index.html","890385f09cc8fa63eae34c651644f189"],["/tags/Nmyu/index.html","30ff4ade2e43bdd2291c00af6afa8397"],["/tags/O-S-I/index.html","cb50250f99af7b9305d640961518d774"],["/tags/Omegaの視界/index.html","41d2040cb1f354d11256c1abb2f48c10"],["/tags/PC88/index.html","dfffab60b97b89f3d7aa593aff05aaca"],["/tags/PC98/index.html","6984f0b7bb1d1ae9eb87ff086f377c7b"],["/tags/Perpetual-Room/index.html","b93a683f0ff4476b0035187421d9e18b"],["/tags/Pleiades-Company/index.html","b558483bd26ce22d46f9694ed08ff835"],["/tags/Project-Twintail/index.html","701298de0c585e18031c80ce3f746b74"],["/tags/RIFF-RAFF/index.html","0b836d32bf367c4444044c6086cdb96c"],["/tags/Reverv/index.html","30139659eab3eb97fe95f7f2610eaa28"],["/tags/SENTIVE/index.html","6cec168da91d4500de181124ba6bc5d7"],["/tags/Saihate-SOFT/index.html","57715a8c672194d97ddfcf35f96fea2c"],["/tags/Sky-On-R-imaginAtion/index.html","f4b15693522a53dbe73f4cd590dd255f"],["/tags/StrayMoon/index.html","c15acfe752934405f90a957ef60e5294"],["/tags/Studio-Bu-Sa/index.html","a1dd3ff6c1bc20971b4b45608c0c402b"],["/tags/ToHeart/index.html","89c403a53094adeeb511a48d6812b8f5"],["/tags/Traumend/index.html","060e359697242b2b1db559405f5eb35c"],["/tags/Witch/index.html","4683c4b3185f2c0a7647116af95aecd6"],["/tags/adonis-project/index.html","6612c7948d2dd8556fe8201167323cbf"],["/tags/flash/index.html","e7630a38c66518487d81b3e998f20aa7"],["/tags/galgame/index.html","2d1f634bd85977e20fcdac2ac3fe75db"],["/tags/galgame/page/2/index.html","3b90bf01f7fa4b791f82e20e279f84a6"],["/tags/gal资源/index.html","dc3ed61ecf6c7a6ced48ebac69294b8c"],["/tags/gal资源/page/2/index.html","ba128c56a17a93787d3aedd12ce1a998"],["/tags/gal资源/page/3/index.html","f534d8b4ae752932dfe5faaab88a90f3"],["/tags/index.html","1652198a12124e65056eb1a0e684119f"],["/tags/rkr/index.html","0bccfcceb5e7b6d16e9a2df1845c31e7"],["/tags/team-eye-mask/index.html","8f695b6e28b1c75dc6d3358b30ad597f"],["/tags/ありすくろいつ/index.html","485959978df1fcb023f12b85225d4dd1"],["/tags/いつものところ/index.html","7bc29d2d9f74fbfbccf6fee518b9b1a7"],["/tags/きつねみみ饅頭/index.html","add06997a93a61c9db253175c83026ff"],["/tags/ねこねこソフト/index.html","433f9d1e7fe5d952ac105dd0b7199a36"],["/tags/ねこバナナ/index.html","470a76bb4fc16e5d4c81dffc3d773b7a"],["/tags/はちみつくまさん/index.html","0b5826c5e4b503babeef1693eb66be11"],["/tags/ろりちせ/index.html","12d20e3a75772e4b1daf3d110e221366"],["/tags/アイル【チーム・TATU】/index.html","4c4a527023787e47084ce81641ca8bf8"],["/tags/アークシステムワークス/index.html","1be354a3f815892597e74518e31595ab"],["/tags/ブロッコリー/index.html","5520fcc94020ad43b09592dde7c28a22"],["/tags/乙女/index.html","0528378458b189b02d6bda830a7dbde0"],["/tags/停产/index.html","f269d000c7891a1e12698374f4a6e185"],["/tags/公告/index.html","d84f9da3fac720407b17ea1874bfb22a"],["/tags/同人/index.html","4953e0e8468f47ce9f7f14fcdac3048b"],["/tags/堀井雄二/index.html","20927cad0455759bccb72087ba0eb127"],["/tags/外海なおき/index.html","eabec3fd5b0de3a734d6fe2609f5ad50"],["/tags/桃野衿/index.html","a344be6b6f264473c6850953e17baef8"],["/tags/機械式少女/index.html","cb8f5c194f27df08eb9ff2dbb6a432fa"],["/tags/水仙/index.html","36b92f6b6adee9c8dcdca6ca9a10b45a"],["/tags/汉化/index.html","08f90b0de4464088b5b3893bc74a97b9"],["/tags/片冈智/index.html","928329d198e5ec936fafafd0cfad14c5"],["/tags/片岡とも/index.html","4866e9438fc3a5a7656283486ce96c8d"],["/tags/牙の刻印制作委員会/index.html","63cc45c329291ab548f38fe744f0e97a"],["/tags/牛カルビ定食-FLAT/index.html","30a4aeced4e08995a4978284952fd357"],["/tags/牧尾屋/index.html","95bf0596aceb726aa0ec709d7275e696"],["/tags/猫猫社/index.html","8a13c8c91579336285c9903aa5e4225c"],["/tags/王宮魔法劇団/index.html","916f7cdef15d0660d62b9d30fd4b899c"],["/tags/画集/index.html","756014342adf3750203f44b4a3375bac"],["/tags/索引/index.html","5a636789fc7bb79a627d7c42b4d32705"],["/tags/缺失/index.html","33bd1b82b04f95486ea20fb2365d1677"],["/tags/自购/index.html","7cce8b570276ace925fb4f76e1ecb676"],["/tags/茶葉☆姫/index.html","36b7c343d70b248f11f8763164556749"],["/tags/郷愁花屋/index.html","2e7f5d7a33de61fdd8d8e51023d39dd8"],["/tags/閂夜明/index.html","7389e81b06b961c70e6dadd99e51c867"],["/tags/音乐美/index.html","2544c326b4ff5edb8d4e978327884343"],["/tags/黒†救/index.html","dea206084a68dcbf52269b02e331a71d"]];
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
