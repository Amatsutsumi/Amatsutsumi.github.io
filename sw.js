/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","8c9a67dd20e770cfae2a83e4dd4cd42a"],["/archives/2024/04/index.html","cdc57406308d9d8209db87835568799a"],["/archives/2024/index.html","ced1038abefb3ad6e0778631db0de20b"],["/archives/2025/02/index.html","6e8d06b0fbc0e8ea257eef025ea63c44"],["/archives/2025/02/page/2/index.html","0ac64a556b7b03bd744402c31cda1907"],["/archives/2025/02/page/3/index.html","b5011480f2205f0958773a64847f8eed"],["/archives/2025/02/page/4/index.html","f58f93307215c9e5ecc19d699b8c8d64"],["/archives/2025/02/page/5/index.html","eec410d802e8eee4df77e5cdd338dd0e"],["/archives/2025/03/index.html","70fdd1d51bbe95641995984e9316ad04"],["/archives/2025/03/page/2/index.html","ab4af285044a973b786716f902b1ad89"],["/archives/2025/03/page/3/index.html","38e35572dbe4194e5df55fb97777ed69"],["/archives/2025/03/page/4/index.html","d42c3681515f5fd4d09f67a3c1fb1e2c"],["/archives/2025/03/page/5/index.html","f379935fd8ff9d427d77e66978fae80f"],["/archives/2025/03/page/6/index.html","2daffc0c2d7c4398e3699e01031e9f87"],["/archives/2025/index.html","7f8e90089b88ae277a361ff4d1c6182f"],["/archives/2025/page/10/index.html","57691e833c2acf1bd127d8c8416630f3"],["/archives/2025/page/11/index.html","be55a3f19ad8a480f64eff7d88bf4a56"],["/archives/2025/page/2/index.html","5ef59f3133ea362387501542bdbf6574"],["/archives/2025/page/3/index.html","f1fcbc51c2b65cd19f9533b16a4b22f6"],["/archives/2025/page/4/index.html","ef094edd2ef7cab92e4ae8c9fd93bbdf"],["/archives/2025/page/5/index.html","3683d4fcef536105175dd93d3054d99d"],["/archives/2025/page/6/index.html","47010ee5b988c10a6a1bc05616cff19f"],["/archives/2025/page/7/index.html","98201a5c2a1987670f81dd4040b27ddf"],["/archives/2025/page/8/index.html","ecb8e25dfb10101edb6b0221942c0e3a"],["/archives/2025/page/9/index.html","6c56521d1104075c872875eb770e68ca"],["/archives/2026/02/index.html","6d4adad3f2ac0168ef033442311f74da"],["/archives/2026/index.html","b3dbab6742e1a484eb8880cc7b86f638"],["/archives/2925/01/index.html","de61c0193e8fe154352ca5894ac7b13b"],["/archives/2925/index.html","1441cfe87523fbf43acb3fae06f7aaff"],["/archives/index.html","6d128464862fdd337cdefb980df4a721"],["/archives/page/10/index.html","f9723b71343edadaf1e194c61131ae51"],["/archives/page/11/index.html","1ec4b46afd30887383fe0cf330cf4572"],["/archives/page/2/index.html","fc9d0ff40cc106c412ca921020ee8afc"],["/archives/page/3/index.html","0c26af48ec904d8f3d4c44ee4fa96a1f"],["/archives/page/4/index.html","d5a66ae391c8747ae6ed7783d2594651"],["/archives/page/5/index.html","528a31c71aa8e2ec36558ad593f4ea39"],["/archives/page/6/index.html","d504a1bb7bbc39e3ab0c83cb9ac10970"],["/archives/page/7/index.html","e9b25b4c8f8254d94f6533cc84cbf423"],["/archives/page/8/index.html","efa841bc37bfe64432c1a3e41999edca"],["/archives/page/9/index.html","52105a423b1d5bf9115ea20aed3b1e4f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","a2cfbea7042ec9178163f4f0e4563e7b"],["/categories/galgame/page/2/index.html","20942636c42948177349736cf5ef6f23"],["/categories/公告/index.html","843967ee2e682661fdd163e4b951a701"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","1ec2514eb0d07cc221b39e95f88a67c4"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","9c68dfaeb064b2a8f54e3d52687903e8"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","4e5e4f9d693fbb6172b1ef2bc0f7608d"],["/page/10/index.html","8a36da888f2d0dcb7bfe232ea7adfe6d"],["/page/11/index.html","8b83a111e5d89ff53062405076e41c23"],["/page/2/index.html","6ef215be57d774e8202774380e7549de"],["/page/3/index.html","fcbc26fbfa2e50c9072f29703f2892f8"],["/page/4/index.html","a7a3d77f4e58e7de29feace36f52ec29"],["/page/5/index.html","732035a1f2903873a475a0e3e29187e2"],["/page/6/index.html","eba07d1384a7d782168d007c81c98fa4"],["/page/7/index.html","a4642a0637a7d1f68c0b50fc8d7ee9c3"],["/page/8/index.html","f67cc995a9057a9b731cd474e051d0ca"],["/page/9/index.html","6bd980e1d6f1aaf1f0c317a5f24eb875"],["/posts/10c9dd98.html","fbaf9d1b9e1a37a3ead46128fc2d613e"],["/posts/1295b569.html","15d931d322ce9dfa2426e39fe95b608d"],["/posts/1370342.html","ce5fba8b3702aec022b1457a18a1cd48"],["/posts/15ef14c2.html","608aa5e1e9343b7ec9c0cc6f9557d604"],["/posts/15f3959d.html","5efab4d0f45e9689834cff09a00adc87"],["/posts/18ab785d.html","7926b51ae06fc496a75030815b82a384"],["/posts/1d59b71f.html","916448744c125932f6e03a04bd90074b"],["/posts/20b3f3a4.html","c0573eb43771ce0956f9882c28f8d44f"],["/posts/245f1c7d.html","d3ce58df5335731130c474ebd58a4c7e"],["/posts/252658f.html","4620f9402bf567119926da49026dc977"],["/posts/28397adc.html","552198a7f44bb6b46999ff5c135fd238"],["/posts/2b38bce0.html","bc6db136861553dac9dea80d82fa310e"],["/posts/2c0a6836.html","84c04037ab1de466e065666b4eb8d513"],["/posts/2cf620f0.html","2cb368dd827fd2e7c900929821630e22"],["/posts/2e30fd6d.html","a8f0a19b819e14878d71818562cb2982"],["/posts/34292736.html","5f703aa6ccd99cb3af912f4194715770"],["/posts/3468cbe.html","d7c0694cd5f2aeae6219531a94270227"],["/posts/39176dc0.html","9d84854db2c8c38e0deca00d1ae8c6cb"],["/posts/3e118dbf.html","c9a840894a808f602261e8923b9141a0"],["/posts/3f7d823a.html","0ef056b2e92f665582e3a7b7f8a173fb"],["/posts/3f978819.html","9f2ca0da2e7927f2d7398627d3208223"],["/posts/43945723.html","bee468b9c599eaea12f0fa4248943440"],["/posts/44124a6b.html","22ff9173a73e8597d2c2ac8b47ae8057"],["/posts/47abb61d.html","1c7c1ca9fc333dcea1fc3a3836825eda"],["/posts/4b689be3.html","48df062649513e1cb5edfbc4e0082621"],["/posts/4cf8423f.html","31a1fdde342743be53247b8f1d048aa7"],["/posts/4dcf85c.html","fd535d6bc0725d19f5b3c29c142e2cb7"],["/posts/500cd322.html","ecac8770cb0f9b00316bade4b5ea2a28"],["/posts/51c9b1ff.html","3062682ca520209d851dc15cccf5668a"],["/posts/52b5b3c6.html","9eee8af075bb406ea99fc821f39ad729"],["/posts/5f6e0c59.html","01f511e684a8f39edfc17b2a3c9a83b1"],["/posts/61a63a84.html","2a57e1bff98ae241c94c917e5ba7ffc0"],["/posts/625ab7bf.html","4779eb4388862f28e5def4da8d421e38"],["/posts/6336a2f9.html","bcd750f84813ecefc638b4eb89d0d0a4"],["/posts/6432d61a.html","8c385ef67efd60ad5a44da0c9e922e47"],["/posts/6515f032.html","cd7fe722a548d7602b4c1ee51df7a8a9"],["/posts/6720ccdd.html","ffa5bffcfa3b77518eb2ad902d8be37a"],["/posts/6a4b5ac8.html","ea194e92a2aed2bbc4818ab3fcecc115"],["/posts/6aa4177c.html","3fb1373bc59f159f07706d11d48dd74e"],["/posts/6b15f81f.html","3523c21bc57928ec73bb7fc22c2e0c16"],["/posts/71131d34.html","41583a6798cf52955f31343f7e4b28f5"],["/posts/78a8a8d3.html","6567600310190a74c664be25a79aba50"],["/posts/7a5ef3d0.html","fb4c61163dae2b4a23ea5474cd895fa6"],["/posts/7b41e1ac.html","7e9a9bd331eb560ee48957077dab7f33"],["/posts/7b51011d.html","232b952c9b756cf1888430e42fd91ad8"],["/posts/7e3aa3e2.html","687ca146587ab8b8b5cda3cf300e236a"],["/posts/80fe2691.html","96c98f4d09fe41afa02a61a9de6be944"],["/posts/81ac52e9.html","c5cd0c020fa549aeee460ec66e933168"],["/posts/8486f6f9.html","4ff486ec65d5e4c0974814953c846ae8"],["/posts/849b40f8.html","99d96aae8db960545a94bfc1330d4e39"],["/posts/85c51d68.html","24f6fc7dd2741b98efd72f81de83e56e"],["/posts/886f8d3.html","c0661c634189f106952c99e77752277f"],["/posts/8a7cba10.html","c8f609c5297ee7eb9c65ca5bcc1b0e00"],["/posts/8ac11b41.html","6b60280bb7ce25d37b7aa6db7ee7ea63"],["/posts/8dd520d9.html","6fd53759fd7cf486483eff23057554a1"],["/posts/8f555654.html","e027311b2c5da6d6b598475bf8afe470"],["/posts/92a980c2.html","6c51604c6306fd043405349f88161c38"],["/posts/92ce16.html","aa4266b3cd1405c2d1c0e5bc5256d09c"],["/posts/93e9943b.html","8e61639885cd5fc06f2cdfab513b5535"],["/posts/94d3c794.html","0f15580dada92208ca16e5a667e28992"],["/posts/97f50eea.html","31257f1c287921b900cd51881dbd100d"],["/posts/97fca8be.html","a97db4e44efb157767f2d86281055199"],["/posts/98662d05.html","f974b727ad0afb3fca624605ef21f3df"],["/posts/9a2f6162.html","166fc7ebc357512fafccf3c873d8506a"],["/posts/9b22a48d.html","7173bf17a1e66fffa097363737c2f066"],["/posts/9cb455b1.html","9a9318805057add01335b79c44c85e5f"],["/posts/9ecdeecc.html","68208ae58382617b439c78453d6f69f0"],["/posts/9efd7701.html","4983f051ab8132e41b444c78fd471eca"],["/posts/9f61c1a0.html","667f2c6b4677de826be89b835db5d39e"],["/posts/a1de710.html","586a94290ea3bbe8f66ec13e4f395c8f"],["/posts/a30eb0cd.html","ed4528291df27eda1e453215b479185a"],["/posts/af1807ef.html","eb27d0571a0c7be735b06ba81fd3cb27"],["/posts/b497b647.html","e3f5d90742715c97874e7159a33b91a4"],["/posts/b4d464b0.html","cbda8402645368383ca90d71153fbacd"],["/posts/b5fb773f.html","eb0f4517a63b66c2e5dbc6f0c5c0cdcd"],["/posts/b8d46b32.html","2e7a6e43055d23cd28bb42197f8bab94"],["/posts/c1b2c6c9.html","2f6dcab5131673a18f81477553aa8f30"],["/posts/c2111cbf.html","90ba7375510245a105d1df5331b28c3a"],["/posts/c316c2e8.html","941e830d47e6f2e67ffd533028b887c8"],["/posts/c43e60b5.html","508bf70593a8dd0c0a32c1fe8216eb79"],["/posts/c497a412.html","f172c80a058319ad8e172c631c5b09a9"],["/posts/c5de299a.html","1ea2a2f67d37cc514308365f1489baa5"],["/posts/c70bba9c.html","5447ab845fd46dfde18dc34aa62f4b9d"],["/posts/c797535e.html","4d60d7f1d4c41e7e0aaeda3a1b46b311"],["/posts/c7a62c79.html","86c0a4053f0a1bd68170c5de29044403"],["/posts/cae2c959.html","13e607b578a5acbea4622f4a3b95bbdf"],["/posts/cbebef2b.html","fb310a7a41a257e0a776ca7d9d9cfe5d"],["/posts/ce25023e.html","a351283c8f03ebd18fcf361beb8dcb9a"],["/posts/d2fd4837.html","c3c4bd5da5434df6790a13a7076a8ed4"],["/posts/d3233cbb.html","5eb1197856f3a21a33f609989b98f81f"],["/posts/d3a745a8.html","145ce01601ad5a450d1ad80146f0a9fe"],["/posts/dc815d5.html","9efe8e2185a105d0df132f29546b3260"],["/posts/e3ab6ad8.html","c68e96e5a3103caccd063b710f176475"],["/posts/e5018da6.html","55de12dcca2f53cd559f4fc5817d6dfe"],["/posts/e5963272.html","b8c1398d7be9d05c2b1f1343281b05ac"],["/posts/e624b065.html","cdb7ef5f19dd53ac40bd0e5769a4f639"],["/posts/e7c703bb.html","873502b4e0c732f6acc2f5cdaca72c86"],["/posts/e8f14b6c.html","222da622d294bf2de1c07f2a373af873"],["/posts/e91abb63.html","14d0f56566b841244b73ef8276241bf5"],["/posts/ea9a8808.html","775a96e82c203d9039746b9dd9f4df51"],["/posts/ebaf2232.html","1ec10c5e31c9c351fb6dd1e5f6c69def"],["/posts/ee1ed673.html","ababcb223e1e4b05c74e0b320fd41109"],["/posts/f0c3ed61.html","bf2a5595fda88ccd7bc75389113ab39c"],["/posts/f21e7f84.html","ce8549381f0f0d315ed03c1839426886"],["/posts/f230b0fd.html","a6ca9e4e344859927e2ca69efecb61a9"],["/posts/fc04d0d4.html","94fc7e0df1a3f407be788dbece5de84f"],["/sumire/index.html","09d3032ec09029aaa89a5369c19a6635"],["/sw-register.js","7db9651bb733bf4ca4af4ef1cdd54e30"],["/tags/APPLE-project/index.html","093f8897c1eaaee1c03f4150a92c8968"],["/tags/BELL-DA/index.html","1a25050e25569d68ca4b06f33afddcbd"],["/tags/BL-Game/index.html","e3296d776e6a06b6709f147f506ea654"],["/tags/Blue-Dahlia-Digital-Creators/index.html","805f78e8ae6de3b9bb3b7994abe33120"],["/tags/CHUNSOFT/index.html","fb7223b9938258de128b903be2127de9"],["/tags/Cherry-Pie/index.html","a3a5c302e66bdce51fbfda2da7436c32"],["/tags/Circle-Mebius/index.html","d3f44ee90df2b2d50f5bf49ad9baf6cf"],["/tags/CresCENT-BLANK/index.html","1edd4c55734a5749fa67d5f811695e18"],["/tags/Dopamine-Software/index.html","85c72d9509314be02d300b702f6fc7a3"],["/tags/Dos/index.html","65795730bbe5396861a0748dd10213c1"],["/tags/Earth-Well/index.html","d15b297ac2aa56dc55b2044a18cf9042"],["/tags/Kanon/index.html","f2267c585e2bb4b11872aeb1a5db51e8"],["/tags/MANATSU-8/index.html","0c4101b8dcbe78389e4653380ca4cf15"],["/tags/MIO/index.html","24c974a3e3b432a742960f7f77160a0f"],["/tags/Nmyu/index.html","478b7c1580751439ec3ef4831b2fe993"],["/tags/O-S-I/index.html","c4e8e8eb1f63e538621d2c878db0ed63"],["/tags/Omegaの視界/index.html","1defaef806f15fcc5fe85de1db38a648"],["/tags/PC88/index.html","bcdc788fa98e9e8971dd852f733775be"],["/tags/PC98/index.html","fccf6b0cd0fc985a7e90d8a4cee2a8dc"],["/tags/Perpetual-Room/index.html","cb3e6c65d6aa26ccd7d54fc344fe1eac"],["/tags/Pleiades-Company/index.html","313036b3d686d76a995964ee4a42ee0a"],["/tags/Project-Twintail/index.html","95befa101d1d8474e5dce9e0c8aa5dd0"],["/tags/Reverv/index.html","4943dd6adbfebf3d9b3e68256e626749"],["/tags/Saihate-SOFT/index.html","a719f70fbeb0ba6f375cfa9795bd7f38"],["/tags/Sky-On-R-imaginAtion/index.html","52097714d249dc642273d964257b68fc"],["/tags/StrayMoon/index.html","8568915aa1101f8cf79be6414f19ae09"],["/tags/Studio-Bu-Sa/index.html","6bc98719d714493c78cdd1e41691ad13"],["/tags/ToHeart/index.html","22038ad0bd84402e81323b5642525ff2"],["/tags/Traumend/index.html","5371ba86c73795d309598eba0cad3df6"],["/tags/Witch/index.html","c05d127639e6aa3084225773c0beda12"],["/tags/adonis-project/index.html","4e47fa2906962efdaafb9fe56492cb4f"],["/tags/flash/index.html","a2de0e989057148fa5722d8fbb42a333"],["/tags/galgame/index.html","380b77803be5a9817c67efa11d74693c"],["/tags/galgame/page/2/index.html","01abf62d7d64c6147cc63e73310a7283"],["/tags/gal资源/index.html","aeaa6969b91ee2b56ef4f80bbeb112ab"],["/tags/gal资源/page/2/index.html","6121a04f1a1bc8c80e616b0ad4d3d57c"],["/tags/gal资源/page/3/index.html","144c27d21d04232ee126d7c1cbf101cf"],["/tags/index.html","d202ca6cd503228c3aa4de01d1c44e2a"],["/tags/rkr/index.html","dba99519db72f7caa251aa583ba554cf"],["/tags/team-eye-mask/index.html","a0165b491a1df00c35896dab6dd9e169"],["/tags/ありすくろいつ/index.html","18aaa3358f2bc3c757cdc9ba92cd5753"],["/tags/いつものところ/index.html","59f6f734148727e1e63640968402307b"],["/tags/きつねみみ饅頭/index.html","8113d2e67c2e9bb71870529efd5c9057"],["/tags/ねこねこソフト/index.html","abc5e0c710d5f8f9c54138f821902ff5"],["/tags/ねこバナナ/index.html","390b89c0dffcb26ce19a1490102d445b"],["/tags/はちみつくまさん/index.html","ec49e7c1cb38e68c46b274b8b3d4adf0"],["/tags/ろりちせ/index.html","d5717aae6ed2ba59d9cd637cb0fccaa4"],["/tags/アイル【チーム・TATU】/index.html","07e26a8019bba57fe2095ded10aa707b"],["/tags/アークシステムワークス/index.html","1a148e71256430517c33943ded9d78dc"],["/tags/ブロッコリー/index.html","6cae9331c3c0efe0f6add93eeea86b71"],["/tags/乙女/index.html","a8a417c806f30c2d6eae925bdc391856"],["/tags/停产/index.html","660608bc0ab8bff99c3b940357d8c29a"],["/tags/公告/index.html","9fe353341e1f21fbb96e3dab199669e3"],["/tags/同人/index.html","c3bb04e048caec4573656dea6372a687"],["/tags/堀井雄二/index.html","8882d92702e2d24edcbe8e1621c0a4f9"],["/tags/外海なおき/index.html","cc2d681d2c76b83c2edce12ff88ee4d5"],["/tags/機械式少女/index.html","503e33f0e457728e5c443465a93a4572"],["/tags/水仙/index.html","27ec3d0a009533db83f8758d60589839"],["/tags/汉化/index.html","10f7932f31f84a3001fe2b0c4c4a4be3"],["/tags/片冈智/index.html","f7cfb6573f6b96910a5cc6b716002fc2"],["/tags/片岡とも/index.html","bfa8ee202ae2991bb47d0e1f215a83ee"],["/tags/牙の刻印制作委員会/index.html","738226a46888392fa2566ac759aaf043"],["/tags/牛カルビ定食-FLAT/index.html","4557eb9b7a6c11afdba0418b4a1efe31"],["/tags/牧尾屋/index.html","81627ae711f69c51ebb94018e2031208"],["/tags/猫猫社/index.html","d84a1ac43fb95c3eaee3cc4338bf502c"],["/tags/王宮魔法劇団/index.html","f327eb158afde4aa0aa9de7fa3800170"],["/tags/画集/index.html","17050f944d3273bfad866a49510f4640"],["/tags/索引/index.html","71903ac8e46a8d9d3d54bd9df5f9008e"],["/tags/自购/index.html","d8d4cdb7eb67b702f4a028c4380a82f1"],["/tags/郷愁花屋/index.html","c53f1082b356f118274c6331e2186f30"],["/tags/閂夜明/index.html","0c3e3172ca04a1561151c9192e6391cf"],["/tags/音乐美/index.html","73e2cc84dadbdf537c7e1af4349fc1a2"],["/tags/黒†救/index.html","bc26525cec0176fd9600dc8944058e9a"]];
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
