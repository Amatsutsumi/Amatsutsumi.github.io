/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c0d0b488f49077554b466b982452060d"],["/archives/2024/04/index.html","0f5771991fbe10f3936bf234a3a876b5"],["/archives/2024/index.html","8160da0157953347b053e450335cd3c7"],["/archives/2025/02/index.html","dde8da1a994f9fdb946c1721e04fb8fd"],["/archives/2025/02/page/2/index.html","46a337a0b0379e55d58e04d4f821b2f3"],["/archives/2025/02/page/3/index.html","82f71601f90aa8d95d4b89f7a88450c1"],["/archives/2025/02/page/4/index.html","b850eddb7d5378b7b69e766b040d3113"],["/archives/2025/02/page/5/index.html","b001d7f5ffa41154665c6e280ecf5fc4"],["/archives/2025/03/index.html","f89b0a42106974c34423e6f32c27437e"],["/archives/2025/03/page/2/index.html","e270de9e7844c4ecfeb85692119a6ed6"],["/archives/2025/03/page/3/index.html","08ddf1d1d709e20c847407aeb344c594"],["/archives/2025/03/page/4/index.html","c0bdb97a6bfd9106d72742a4815f210a"],["/archives/2025/03/page/5/index.html","5c8dc298a4b8788a0ac168bd880e0ea6"],["/archives/2025/03/page/6/index.html","ca46a4e3c532bfdb0d95942f08450034"],["/archives/2025/index.html","e7f9a8c606b3695382662fbe24b6dc64"],["/archives/2025/page/10/index.html","ef03f93ff9807ae8daa1bbfce54281af"],["/archives/2025/page/11/index.html","434393b3f35174aaf9b2bb24a6899ac5"],["/archives/2025/page/2/index.html","a58af4d5a570974f081ae56cab6cdcab"],["/archives/2025/page/3/index.html","fcab964fdc26827038dc3ccc8a7306ab"],["/archives/2025/page/4/index.html","296088f7a0e635ad44299a5cdde71dbc"],["/archives/2025/page/5/index.html","9b7ed7b77c3c7311c21331538147d7aa"],["/archives/2025/page/6/index.html","2ec4529b35c6c29fc1676e08fd74f320"],["/archives/2025/page/7/index.html","cf83fe055fd0a2f26f51ceffe48b9238"],["/archives/2025/page/8/index.html","86e783aeed599e14b174345e3238d6e4"],["/archives/2025/page/9/index.html","f468015e6acaa86b679a2b9704ed41e0"],["/archives/2026/02/index.html","798e37fa8a3679dc1e41aeba32249812"],["/archives/2026/index.html","658ba4b156d8cc66ae2b4c185ce3d6f4"],["/archives/2925/01/index.html","984b32878364c28c4b41f1d3fba485da"],["/archives/2925/index.html","b02d5f85722f2d874e023601ffc0df28"],["/archives/index.html","68c88227f01c8bc8a405f8ac032b4f5f"],["/archives/page/10/index.html","143540e6cb5c20d226b201908111374e"],["/archives/page/11/index.html","a17ca8f467b93b8701a3a7b6d9dd79b0"],["/archives/page/2/index.html","1f8856ad1fb5a63e9cd70877a97fe2d9"],["/archives/page/3/index.html","5f3dcaa27f083bf5e4f9845ba677708d"],["/archives/page/4/index.html","cbea2e0820798389667f8cc7e14aa46e"],["/archives/page/5/index.html","7d98b3b5fdbcb2d3bd01d4dff24fe51d"],["/archives/page/6/index.html","d695ee3e3967c0e17a08cada73ba4cde"],["/archives/page/7/index.html","fcfb0e1249213f6fdb333ed0d62db948"],["/archives/page/8/index.html","12b3ea8a6d7551acfc94ea2e57c6405e"],["/archives/page/9/index.html","36f0a56fdb989b6c0153d59f1ed6157c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","6d0a99fd3d9f21f1fa7edf7bd3e6411e"],["/categories/galgame/page/2/index.html","9828ac5c6afdab8d34349b6d58cf08a3"],["/categories/公告/index.html","118585d41d9dd17ae74a678f96b44794"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","38e0ed71ac368509799e8fe43538458f"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","936381569ab9ce6c608ffe177be5e1d8"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","07bcf2adc0eed972d9f7e00f907481c6"],["/page/10/index.html","b2dfc208967ff99d248d22042fb44ac3"],["/page/11/index.html","b601997e8ed72b35f1a24cfdafee1168"],["/page/2/index.html","a59c17721b7cd0ab85d6190fae19e29a"],["/page/3/index.html","d73e6b4c9ea21a7035afaa466c219a72"],["/page/4/index.html","8cdb605fbc5c1b5095fbe7cb808ff1bc"],["/page/5/index.html","5af316c72d64a611fc38ee3f2a243265"],["/page/6/index.html","98067b23fb0ee9f82307f5703ad7d382"],["/page/7/index.html","edac0d8c2b5529a1934ceb1603557637"],["/page/8/index.html","fd913d4518ae60f0ec563f8f2a05dd72"],["/page/9/index.html","9700835b2c3cb5f1e6e92e7f88a4f8c7"],["/posts/10c9dd98.html","3ad493db5e923e73c5c6a2501fe72f75"],["/posts/1295b569.html","7453fd89a89351d976d7dd82ad2cc9eb"],["/posts/1370342.html","c56d5c7030ca47195e8e8bea4cc1cd77"],["/posts/15ef14c2.html","21994aba1eade5b274d3c3ccb2c07c5e"],["/posts/15f3959d.html","7a5201da586d286fece4e2ad3b434993"],["/posts/18ab785d.html","061fb11e4db728740b708da1294dbb59"],["/posts/1d59b71f.html","fcc9e8c5b663d600ea774be3221561c8"],["/posts/20b3f3a4.html","99f086c8f9627b9fc0742a57eb39e3db"],["/posts/245f1c7d.html","04a3c6e81952067c469e59d379f32dee"],["/posts/252658f.html","0157b4c445fd7c814002abbd1b5bd825"],["/posts/28397adc.html","7d77c74538d6b40023c3682e4bce3d74"],["/posts/2b38bce0.html","c9bc34f1f39ff1f23c91ef21c2b8c9ff"],["/posts/2c0a6836.html","aa2480ba5e8a3a673802b31639ea7067"],["/posts/2cf620f0.html","b92773a3b0835d31efec71e235122fe4"],["/posts/2e30fd6d.html","f9f34d473623918bad99228cb890ce24"],["/posts/34292736.html","86c5735908d408f98dece9edcb932ec9"],["/posts/3468cbe.html","03a558411a62cc09083e86991758853e"],["/posts/39176dc0.html","dd00c0a113a3f214549bb3d5432ea087"],["/posts/3e118dbf.html","a4b4fe468a7c750139da448113948109"],["/posts/3f7d823a.html","7d792291adaa022f0d60d416d2ed9049"],["/posts/3f978819.html","70e5a6ae8f9cbe444ceb349240b74ffa"],["/posts/43945723.html","27369b797ee0bca50d2f0f24296f3723"],["/posts/44124a6b.html","943db5be3978d495cdc912feb9d97d37"],["/posts/47abb61d.html","e69ec8bcfd88c10cf5d9ba9c8424e47e"],["/posts/4b689be3.html","be37c71d39a8329bf4811c308bef2f9b"],["/posts/4cf8423f.html","0050ab21ddc1afc7f85276c93a17a505"],["/posts/4dcf85c.html","aa115425a7bb1531f8afd0744c3e5b07"],["/posts/500cd322.html","30a3f1ccaa88ccf7b25d4c90ca3fdc7c"],["/posts/51c9b1ff.html","72840c740c026b16274bfc1cc4a9b396"],["/posts/52b5b3c6.html","fd8f24902811da213e7e0c0db486e0a1"],["/posts/5f6e0c59.html","0c18f79cc835a3469293b96ea603cf88"],["/posts/61a63a84.html","2d3dd98d0a3da9468f4808931ee9c809"],["/posts/625ab7bf.html","0c9275222ad1d6f037609a588bae3bab"],["/posts/6336a2f9.html","d0c837bfcdbe9aea126590333c05bd0a"],["/posts/6432d61a.html","661438fd8a16658065fb3171bca3268f"],["/posts/6515f032.html","c28214509ce18096a50627b6c05c67ad"],["/posts/6720ccdd.html","42e92180e193465b64d4ae0dd238424d"],["/posts/6a4b5ac8.html","2369ce6d8d2abd886816fcb41ba1b580"],["/posts/6aa4177c.html","d88880281a3de5ee0eaa69a078f7c5f3"],["/posts/6b15f81f.html","105c0c6a1d5e4dc6c070c309a409bce2"],["/posts/71131d34.html","10100ff90c52e9eab2c3334bdf91165c"],["/posts/78a8a8d3.html","0500647571137d11537a19fb322a0ace"],["/posts/7a5ef3d0.html","5557ee6461c57319b6b4540dd5942e40"],["/posts/7b41e1ac.html","a974b8681dc21f633d95f3a14d573db0"],["/posts/7b51011d.html","51e122fafb275066cba3f62265da15ae"],["/posts/7e3aa3e2.html","fc47d57a8cd8efba1705f62d561f162e"],["/posts/80fe2691.html","4ecfe349d8646c60d97dc5ab4d436530"],["/posts/81ac52e9.html","3a9627c27ee14ec7de743e28d1cf53be"],["/posts/8486f6f9.html","b2b04bea473bab29efa01613883594fc"],["/posts/849b40f8.html","352b6aebccfab7e1385ed62483931ad4"],["/posts/85c51d68.html","b9d2abb5bcb26153daabbd0957654118"],["/posts/886f8d3.html","1dfc87d86d1f60fc1cbd1c796f2cf0e8"],["/posts/8a7cba10.html","a2038829fb9f31600567cda586f2695a"],["/posts/8ac11b41.html","5430045c9735522dc2cd2777dec73b21"],["/posts/8dd520d9.html","a2002e78f9404f0786d8c006ad84cb07"],["/posts/8f555654.html","c82352d47698589b45032a64e8d63aba"],["/posts/92a980c2.html","89509dbbf9e94c02b88763777215f75a"],["/posts/92ce16.html","e22e7aae3d8a9bef96918802a9075b5c"],["/posts/93e9943b.html","9b1817f8d3cb995aefd016eef97ae078"],["/posts/94d3c794.html","2a3c3f99a1a417c61a9b715d505d9184"],["/posts/97f50eea.html","7bda87da8223fb15d6b61a8e05252c27"],["/posts/97fca8be.html","580a1cf2aa28f1ba908c7548d9769d3d"],["/posts/98662d05.html","d9b2379557aa5674260257b41c0c6ab8"],["/posts/9a2f6162.html","8fb850e2c05448ebe8878bcaa05ecfa1"],["/posts/9b22a48d.html","f2aa9606c61e7b278ce445535c58b28a"],["/posts/9cb455b1.html","318c999fe5037cabf9e48f092798119c"],["/posts/9ecdeecc.html","ab64e5177a51d989230b1a0d6103f5a8"],["/posts/9efd7701.html","628fa877fb181532951430068ac336b1"],["/posts/9f61c1a0.html","e3c77145cb122e3e8b342b9b218ba4fa"],["/posts/a1de710.html","b81e2f67a4887812a0dfadd3b0891dca"],["/posts/a30eb0cd.html","69128d8d728fee293ed927c8baf6df48"],["/posts/af1807ef.html","dcb59a82ea90201481d58aa553658130"],["/posts/b497b647.html","e0d4c3550ca2a26fb5559a6b0556f56b"],["/posts/b4d464b0.html","af0edfb7c9509235c81286027fb44532"],["/posts/b5fb773f.html","09d3d3e222673def5c6ff8ec70178bdf"],["/posts/b8d46b32.html","289d54c2c985ebd8e119c773df8bd9b2"],["/posts/c1b2c6c9.html","c6d9861f0cc1b011655e6ff81ae9b821"],["/posts/c2111cbf.html","945f7d5ca36b4f0badee4bcac65a42bd"],["/posts/c316c2e8.html","ae1aa6cbeaa532aad7ecef44bb64af8e"],["/posts/c43e60b5.html","91c70e9be1d5d8e087b31bc1398c4ef2"],["/posts/c497a412.html","c395e91151a557b72c4ad00208740fc3"],["/posts/c5de299a.html","9c64edfb42268a75ead60c9d9846e0e1"],["/posts/c70bba9c.html","eae398f6c9e5ae771ece57c3b250acb2"],["/posts/c797535e.html","6cb9f804249d87ad6102ba823718e393"],["/posts/c7a62c79.html","31f40c0ea4985c59d89de7a9748cbf59"],["/posts/cae2c959.html","ad4e1182404cbc13c8fb1cc23693e687"],["/posts/cbebef2b.html","6196cfa610587859b07c2a904f9ed1e0"],["/posts/ce25023e.html","78e7630669b0790a22bf7346051ef3c2"],["/posts/d2fd4837.html","2fed095129d54db545e406160851d13f"],["/posts/d3233cbb.html","1931854257dce79151386fc14fa17435"],["/posts/d3a745a8.html","3f086be11732bfe71433a71554463902"],["/posts/dc815d5.html","2e177fd3e02ea504d668ae3c8473f4bb"],["/posts/e3ab6ad8.html","2d5486e4dfdb5e4015f6f593cc9c6161"],["/posts/e5018da6.html","f8745521df0bd687974730af38840560"],["/posts/e5963272.html","43d1b5b0c952fbe1487dbb87451f7f94"],["/posts/e624b065.html","c9b694fb56287ae5968bc27853b44024"],["/posts/e7c703bb.html","eb80c43471b5febd9b5581bf5d5fe4ec"],["/posts/e8f14b6c.html","b1da2f75bd645aa9961113a4f781be94"],["/posts/e91abb63.html","4c130600c2ac6734458736af13b225a5"],["/posts/ea9a8808.html","b220a085739e8eff8bbada17146c0f7f"],["/posts/ebaf2232.html","77b9b9425aa0c0708af3b78060364f11"],["/posts/ee1ed673.html","bf0ccdc687ebfbfe6f47919bf6cff100"],["/posts/f0c3ed61.html","1501c4a6a53f41da37ada63ca64b73e9"],["/posts/f21e7f84.html","80f0fc6e3aa207230452e553f2b34a47"],["/posts/f230b0fd.html","07d08468b0c23cf874056f1746c00570"],["/posts/fc04d0d4.html","3740c4e7f10bbd5dffd3e10d5b8ff36e"],["/sumire/index.html","c818ffe5d8af5762888df5b62c2997a8"],["/sw-register.js","a1cbc398cf37c19c5dc00a93cf0d3919"],["/tags/APPLE-project/index.html","64bd055137525052a6530837881f0860"],["/tags/BELL-DA/index.html","430702168173d31e893b39ab37929de6"],["/tags/BL-Game/index.html","ec7a686cf751ab38ed8b444599eef211"],["/tags/Blue-Dahlia-Digital-Creators/index.html","4417c7cf74f4eaaa0068ddee41b048ba"],["/tags/CHUNSOFT/index.html","c3a668757fdef1bab27904a2f27022b1"],["/tags/Cherry-Pie/index.html","aac040484e9ef1c3032e22365e14fb4f"],["/tags/Circle-Mebius/index.html","9db85622ab3d4529b731fb111d803f1f"],["/tags/CresCENT-BLANK/index.html","3d23b6b54e4065b4bdca7dab255f31cd"],["/tags/Dopamine-Software/index.html","28f5844d02880250f0aaedd835aa027c"],["/tags/Dos/index.html","0b8e953ad568a4fca8fe7a2f8cb1ba27"],["/tags/Earth-Well/index.html","08783d5aeb8522ceb2bb743dafa64cfd"],["/tags/Kanon/index.html","c7c8a5c70d37262998ad2404e4e37641"],["/tags/MANATSU-8/index.html","e950765221977fd6dd85d4a032b45d93"],["/tags/MIO/index.html","1d5c917200c2f22230f2d127901177f2"],["/tags/Nmyu/index.html","84c9c8c988fd322afbab0824f6fee067"],["/tags/O-S-I/index.html","2828409ddcdc30e5564a20a9984a0488"],["/tags/Omegaの視界/index.html","9ff6208753d4c7fa83a20026cb66bfab"],["/tags/PC88/index.html","f4a39f4d1950ef41a30e0c7ae9c2ce24"],["/tags/PC98/index.html","592eedb08f1e96bc9be9d249f011f798"],["/tags/Perpetual-Room/index.html","5cb22f5555c57d7b51e9c66f6a4165f3"],["/tags/Pleiades-Company/index.html","6ddd0c21a7f1b339d3ad3d5ea259c6dd"],["/tags/Project-Twintail/index.html","20e5517376a3fbce51a05ac78b24b1f9"],["/tags/Reverv/index.html","d90ca2dce6eefc3cfd651d6af7cae42b"],["/tags/Saihate-SOFT/index.html","422c2755ffbbe2cbfba281664746aebd"],["/tags/Sky-On-R-imaginAtion/index.html","821192498d5ee9fc1b06f7c9e9e1275e"],["/tags/StrayMoon/index.html","e6a2652075ceb2b4664a91c25dc2a0f9"],["/tags/Studio-Bu-Sa/index.html","9041c726d931d29cc719e1af2daff889"],["/tags/ToHeart/index.html","439762f807b3986b3358aeae4b3702d5"],["/tags/Traumend/index.html","18d367f5f15d354b0147568320e0802a"],["/tags/Witch/index.html","1181e7605385779bb0d88b4178bdddc5"],["/tags/adonis-project/index.html","abbd26483208e29f841bdb1850f2fcc6"],["/tags/flash/index.html","33130e87fc1cd30bb983467c470036cf"],["/tags/galgame/index.html","f239f95dbeb83ee1d08a02ac82548dd1"],["/tags/galgame/page/2/index.html","6d4f38a22cfd289889b3312db617d910"],["/tags/gal资源/index.html","41a9760bc2b4e7fe1a603d124b880284"],["/tags/gal资源/page/2/index.html","4c52e5992be8bb2b82a969de6ffa26f6"],["/tags/gal资源/page/3/index.html","79d9d9782b84aafe7d4f6cbd69cb6450"],["/tags/index.html","c94fda567e8f919efffa5413f9b14c5f"],["/tags/rkr/index.html","ab80a6ff51840569ef9199dadb71eff7"],["/tags/team-eye-mask/index.html","853c01c3461b4347f62f9f5428086236"],["/tags/ありすくろいつ/index.html","64b8d081a91fe7493875230feb14970b"],["/tags/いつものところ/index.html","edf6e65c189f52ebe59c981e48942cd5"],["/tags/きつねみみ饅頭/index.html","8a701b8d8518aceb34b605baebe59caa"],["/tags/ねこねこソフト/index.html","ed666ba3ca10fa2d946e156b728db2e7"],["/tags/ねこバナナ/index.html","4b03db041cf8290bb2436b52efa8c9bd"],["/tags/はちみつくまさん/index.html","bfef8a91fcf3cdafcf0db8cf62398ae7"],["/tags/ろりちせ/index.html","e096edd95647528bcd1408da5828b484"],["/tags/アイル【チーム・TATU】/index.html","1ef23259b3b12f83cabe92d7985de6be"],["/tags/アークシステムワークス/index.html","a6f11782dc1a1cdb37443aff5921183f"],["/tags/ブロッコリー/index.html","2b09b339a7f7fac0604c697ce43e8554"],["/tags/乙女/index.html","2e1817900967f8cfad9a2950cc74c274"],["/tags/停产/index.html","a2f11ac6f348eca0cce7c22b1fcd06af"],["/tags/公告/index.html","c217801f263b58c2d0f8d6e22fe184f4"],["/tags/同人/index.html","01b22172338f82eea320f8e30c932438"],["/tags/堀井雄二/index.html","be600b795fdd82ecc81f8c38d58b5098"],["/tags/外海なおき/index.html","9d4a72019271df3f75eee096c2f74e2a"],["/tags/機械式少女/index.html","532208b1a43eeca838e679a120235dbd"],["/tags/水仙/index.html","395559db7c0da36a3b721b401fa1b1a1"],["/tags/汉化/index.html","a34eb9488de29f234a0cb2f3d9d8ac50"],["/tags/片冈智/index.html","f00f294812a596289d3f2a16b90f5925"],["/tags/片岡とも/index.html","b5f7af137f418955943282328064fd1e"],["/tags/牙の刻印制作委員会/index.html","517970986d54429526ab85212a37cd8c"],["/tags/牛カルビ定食-FLAT/index.html","9e030bfe7de5a3998bfecbd09f7914b6"],["/tags/牧尾屋/index.html","08171de6671c3f01b185b8db53adcba5"],["/tags/猫猫社/index.html","5d9f3c337266fd5ed292b0f257b28f8b"],["/tags/王宮魔法劇団/index.html","74c0f36b457df9674ad6197d37d71936"],["/tags/画集/index.html","9f757cc9b717be95e1c5b3bbcc6af1e0"],["/tags/索引/index.html","2fd495ac3368f62c9c70a3dac10e95fa"],["/tags/自购/index.html","cb926e09208905260220ff87f759a49d"],["/tags/郷愁花屋/index.html","0c18b7c8342da09e4416c8ad48642983"],["/tags/閂夜明/index.html","6654445a3624480122fe75e0f178733f"],["/tags/音乐美/index.html","9e5afc3de42634867dde92044bac48a3"],["/tags/黒†救/index.html","5763639817146554da753b23e5b99b3a"]];
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
