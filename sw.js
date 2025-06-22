/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d40933372dcf30b632cd09625d08446e"],["/archives/2024/04/index.html","9b2a69b01b5569bbd38cc3bf8146d457"],["/archives/2024/index.html","2f8bef2fc8847ece0220c01687ddfa6c"],["/archives/2025/02/index.html","5bfd590856a1d506986d0fc3c8a12149"],["/archives/2025/02/page/2/index.html","1db23cbb8bd6e42d1decce5950fe0720"],["/archives/2025/02/page/3/index.html","cd73dd10d2c62293478e0d264903f46e"],["/archives/2025/02/page/4/index.html","99fed4d88a48594c5024f855cf029f2c"],["/archives/2025/02/page/5/index.html","272a648729dfac2e4aaac4f30f5ff293"],["/archives/2025/03/index.html","b0a674ac5f92a28bc3bb8284cdfc4686"],["/archives/2025/03/page/2/index.html","761a2c6f8093d566f4316dd301415dc6"],["/archives/2025/03/page/3/index.html","4d029248569774956dfed3ce5c8a2ee7"],["/archives/2025/03/page/4/index.html","8f7120cb632c56703dd622e940399e3a"],["/archives/2025/03/page/5/index.html","aa2aca631b2f2d5f2180207441e87d3c"],["/archives/2025/03/page/6/index.html","0970bb32ea73cc410a7649ac7a828753"],["/archives/2025/04/index.html","dadf9db02343088957539013037e4cfe"],["/archives/2025/04/page/2/index.html","b8f0edf2cdc52d12f7ae21538f3fa2c8"],["/archives/2025/04/page/3/index.html","faa0f04866fd156c5f108f1263203337"],["/archives/2025/05/index.html","8d9e4c8a121577fdfe157027457f57d5"],["/archives/2025/06/index.html","5949f3fee00f1480466e46e26b66e6f9"],["/archives/2025/index.html","7f533c502e85db21100bd10e0774768b"],["/archives/2025/page/10/index.html","b23e70b0ead0c0a3916ddf53ddcc59a1"],["/archives/2025/page/11/index.html","9955ce86f22af49e1a8fa6a7803af897"],["/archives/2025/page/12/index.html","fbb3a0af91e0cb82eb60fdc64f3f495c"],["/archives/2025/page/13/index.html","38435b016a40cac16cef2bfa2638fdb1"],["/archives/2025/page/14/index.html","64e872739c923d484c79abe7464fe2f6"],["/archives/2025/page/15/index.html","9eec8b78067702cd2b525465d2d9645f"],["/archives/2025/page/2/index.html","9c1ca39054ffc8a2a7b404556c44c150"],["/archives/2025/page/3/index.html","d965dbe230656d7a5d487141723c1ce1"],["/archives/2025/page/4/index.html","f1fcfa18c62b6e332b4c1376fff665b0"],["/archives/2025/page/5/index.html","3648a4cdc6873c434b3628a1b9f30008"],["/archives/2025/page/6/index.html","6709a8906d8fd195b02a7be0ef116a23"],["/archives/2025/page/7/index.html","cf19b3872d86320fe243224bd6d4be08"],["/archives/2025/page/8/index.html","e335591f75fff78e9391606625d780e1"],["/archives/2025/page/9/index.html","dc13f16d74e92b4a3daa8c27d5c0351f"],["/archives/2026/02/index.html","71e8dcdb5aa6fc1fc135777ad419522b"],["/archives/2026/index.html","12c98f054c30d272cabbe7647f9b4dbb"],["/archives/2825/04/index.html","1fffaf7a34ae2ed5aa87eca83f5503ce"],["/archives/2825/index.html","ef94d5de4eabbd1802ffb75d96c04b87"],["/archives/2925/01/index.html","85b2db8a22ecac8062c294bfd41b82e9"],["/archives/2925/index.html","e53f82bc8b265f002a9bf15868226941"],["/archives/index.html","863f9b1bacec79d2cb0b6a8d5b84f0ae"],["/archives/page/10/index.html","0b1757888c2909cfb84d903630a8b63e"],["/archives/page/11/index.html","79a69ad16b5d29cde2842e05ef090c78"],["/archives/page/12/index.html","a49f9662d642b21a65ff36e393b2cc71"],["/archives/page/13/index.html","387459a4e5e97d7689b9fc3fb5b16c67"],["/archives/page/14/index.html","96c3a9994c478e20a21fc8b46188f000"],["/archives/page/15/index.html","9128e3a86017587557ec3b25867a89d8"],["/archives/page/2/index.html","be2848353f7827a3b424be2f49d660ef"],["/archives/page/3/index.html","70df46e6b1618ae49c5ea1db57bea9ad"],["/archives/page/4/index.html","2e96d55d537c36aa1883c6366a0c61af"],["/archives/page/5/index.html","00e97de91432c5f44be6ceabac9f46a4"],["/archives/page/6/index.html","00311a8b2b2d95712596bf0c98053979"],["/archives/page/7/index.html","5c7db52f8963136cbf4eb979ddf77414"],["/archives/page/8/index.html","92fb59f1d7be892e3a0fdabf8baf3b67"],["/archives/page/9/index.html","38772ccd0fb372a55d31600821de42d3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","c6300b4cd59392659fe5221e79ef9a1f"],["/categories/galgame/page/2/index.html","d21654c4917ee6b5de4c1e49459f7be6"],["/categories/公告/index.html","e7139dad0e0df49ccfebe3ebd6e7f4e8"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","0d84b3352fadbcda4539c55c94ce43e6"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","f8793ba455a07ad6167859c12791a38e"],["/page/10/index.html","b4eb6ebddf919556f1a61e82d63ded54"],["/page/11/index.html","381903d65b28af33d9f8754331c1a18d"],["/page/12/index.html","d6dbe0dbd5fd01996fe295aeba7ac721"],["/page/13/index.html","e8cde0433aa5926b6391c75b0d78096c"],["/page/14/index.html","6c47bb8c033ba24b87e9420cda2ac9d5"],["/page/15/index.html","db55ef3ce3bbcefce529623f2d33e349"],["/page/2/index.html","fed3c803a02d560a95366619aeca37f5"],["/page/3/index.html","3f2f251fc72a7741572454926a9aaaa5"],["/page/4/index.html","afca1632dcc8a53da8afff6324c40dc5"],["/page/5/index.html","04f9ee3357463eb67452f52da7a4b3fd"],["/page/6/index.html","3e643ab5396f0c3bd630eee3bf7fd89a"],["/page/7/index.html","2e5002b1c443bdd5118474a9ab3267c3"],["/page/8/index.html","3edb2d87ba6063f4ae6301b93a8c5920"],["/page/9/index.html","7007b5a9a0a5e6aba7ab2cb69b72114a"],["/posts/10c9dd98.html","0a63e1839f802ab32cace51ed4263f44"],["/posts/126ebb99.html","f84f6085ffc5e29dd0eccc3ed5b5ecfb"],["/posts/1295b569.html","d3d39e1350fd5a594d9e2a3c46c0a8ec"],["/posts/1370342.html","a5a80396e1a287bd9439aebb5a989241"],["/posts/15ef14c2.html","b59570a9ede5c9c5d85b65fb8d52da02"],["/posts/15f3959d.html","c89b2890b6d0bc85878d0ef22397d897"],["/posts/18ab785d.html","65df0549a619a758986ea590c4f8f149"],["/posts/1d59b71f.html","bb778cabc7170e5e2be7394c3e5ebc3e"],["/posts/20b3f3a4.html","5ffea0a9688611786067891c1cf466a9"],["/posts/244daa7a.html","6cecc5607f1f3667ca01aaba4532c89b"],["/posts/245f1c7d.html","137e27de7804d6f14c0ee4981e7b80e3"],["/posts/252658f.html","df8ccbd294426861a856c16a35356b76"],["/posts/28397adc.html","5f5780515acf313930301b294456010e"],["/posts/2ad07f54.html","eb8479b7c4c14ff0938b214b377606fb"],["/posts/2b38bce0.html","622c0a11205b692abbf6624072f8abc0"],["/posts/2c0a6836.html","81cf3d8199e7c4a9393ba9de8a74ac7b"],["/posts/2ce39bcc.html","286a9282ef16a19a877a83073427fbc3"],["/posts/2cf620f0.html","cb0580def96463d86756882bd7b43b90"],["/posts/2e30fd6d.html","4daac015b7e35d44aa59c18b987f3cb4"],["/posts/30a413ad.html","506e8a3e50babdddb5f09e4926177af2"],["/posts/34292736.html","67b8a1066f48586a966ed333b2e7ff0f"],["/posts/3468cbe.html","72870c725fccec364be07880986cceac"],["/posts/39176dc0.html","ef3890f8111853a5ce18e37f5491d655"],["/posts/3be6a165.html","d71b9d91adba10db4bf290fc67d858ac"],["/posts/3daf73b4.html","e9989f4427a545fb4bba8932bf908c26"],["/posts/3e118dbf.html","3b330f50c92bd3b8cc6203e228c0a201"],["/posts/3f7d823a.html","3b01295d58d7780ca491135bfdb8978f"],["/posts/3f978819.html","33f06c2564677e1bb436785cc97ebd4d"],["/posts/41dac80e.html","dd163c5a69efbd897c0b121125cbf89b"],["/posts/43945723.html","8b21be8afdd8ca70aa6acf84d2242951"],["/posts/44124a6b.html","ffc1b5f23ad895ab80ce8a084e3acabb"],["/posts/476a3006.html","a4a10bfe75037ce95a0c7e97af9d7eb3"],["/posts/47abb61d.html","3a8501bc4ec047befd15e44ed5b82062"],["/posts/4996478a.html","0bcec642871efa3e816537418c2770c4"],["/posts/4b689be3.html","096c3d4e02ef89ec8edde323236c3b4c"],["/posts/4cf8423f.html","c378e1f433d276fe50ae53be1cc85755"],["/posts/4dcf85c.html","73a4feece6ce5473df8b730f04d5e454"],["/posts/500cd322.html","dbea51a7e2ad0e2190b963e427623ad6"],["/posts/51c9b1ff.html","83a79d61efc49cd1479079460cf3a324"],["/posts/51ce68e8.html","bf25dd545c0e44613b9bd68488618149"],["/posts/52b5b3c6.html","face2f243ded6f45c4fee60b5b2b1c34"],["/posts/54f496ad.html","1c397b5fac3c032fbe96131909d1cebb"],["/posts/558e1f30.html","59ab52f0f313db85982b31e1f452e04d"],["/posts/5d8bea92.html","24c98be3ff130b344e705310f5737571"],["/posts/5f6e0c59.html","ffd1ac8e350ce87377904eb88a7271eb"],["/posts/61a63a84.html","04709acd03361b7bba4c2c3b1be9c232"],["/posts/625ab7bf.html","f70e7098aa73558e35e0a7994b38c7e1"],["/posts/6336a2f9.html","4edb4b2ef923bcebf6fe2606636648e9"],["/posts/6432d61a.html","8ce833ee0201fb8045c91ffb46b19abe"],["/posts/6515f032.html","50b9c683752b5a54473d02284d5b20ea"],["/posts/6720ccdd.html","954e0add6d988b88bf0d3e2678eacb00"],["/posts/6a4b5ac8.html","b336de359c01cb44447b813b678da565"],["/posts/6aa4177c.html","6fb0e26009b72bc64c36977ec01aaf94"],["/posts/6b15f81f.html","5ef9f32128233e0ed55c11f4d6fbc399"],["/posts/71131d34.html","12ad89410ee495e6dbb4f11e4c1c60b2"],["/posts/742fd48d.html","f7052fec3fc7d9f0f05891df0b2a95b2"],["/posts/78a8a8d3.html","e7f91c16a2fcaecd7e11f7c00f826036"],["/posts/7a5ef3d0.html","3735c780cbb8b11fc7ec9d665c4ea79c"],["/posts/7b41e1ac.html","997db92f4c8ad7f426254ce402e6a94a"],["/posts/7b51011d.html","c84eeb56161bf924621ab146bc9b7be9"],["/posts/7e3aa3e2.html","0e90842e27e0155d8e2449a3e88ad3eb"],["/posts/80fe2691.html","ea5134bf4a4a4d023420decc16a23206"],["/posts/81ac52e9.html","5523e7cb298c47e5996f781d6f9f53e5"],["/posts/82332d11.html","f7903d9c5be4e8d4a59e3743ae26b79d"],["/posts/8486f6f9.html","499814c0164d8c929a414e11cc8872ef"],["/posts/849b40f8.html","0e65016bf29160052952b2acbbd154d0"],["/posts/85c51d68.html","7536eb0b6b458413b2db68eae656b4fa"],["/posts/86a6c500.html","dce579d978149e5836fbfc25ac5d6906"],["/posts/886f8d3.html","a7b4c792c5e8063b377fcbc41e16ba18"],["/posts/8a7cba10.html","534e9ef944ad6581c7eed2fe7c97acd4"],["/posts/8ac11b41.html","dd12f9305230f676e73949488996639d"],["/posts/8c3f2fd8.html","e9f9fc88b890c051277ff1cdd787f5fd"],["/posts/8dd520d9.html","e8d83c3c2baf889d863a293302d7d4fe"],["/posts/8f555654.html","8a21da8354bd196468406c77083515b4"],["/posts/92a980c2.html","468799afee5c81e9c3eb781d5cdea72f"],["/posts/92ce16.html","70a63b76f218e90722c540040528e037"],["/posts/93e9943b.html","a0b130a756210646b4ab482983afacae"],["/posts/94d3c794.html","aed4704c290e1ec19159c6c4436a1a9f"],["/posts/9606c2fe.html","5cfb30f2fdff9f9272477060e06036da"],["/posts/96b281f2.html","9c96df2f5227eba069830c631f552976"],["/posts/97f50eea.html","a2f14d029e4ffcfa965549555e7b3102"],["/posts/97fca8be.html","764814016beb42dd2dc45a0b6d3e512e"],["/posts/98662d05.html","89a8e260dc345250b08c0220e735b83f"],["/posts/98ef47c3.html","bf9efb036bb05b81243a97f28a89dfdf"],["/posts/9a2f6162.html","7ff4eae69f36a86a001453dd60091e82"],["/posts/9b22a48d.html","98b784e35acb597716eb0f8c86ce5a6f"],["/posts/9cb455b1.html","99b9e6f50aa3887a84574741f8c2bfd8"],["/posts/9ecdeecc.html","abf79f9cefdd4a93675e7dbe994a4448"],["/posts/9efd7701.html","272e3e5a418ed57b1044490530540c34"],["/posts/9f61c1a0.html","d7899523d9dc85a1388ee2137cdae048"],["/posts/a1de710.html","fb2fdfce8b9c24210c24731e66502ab8"],["/posts/a30eb0cd.html","a7461067eebf3addc423a44493c5c604"],["/posts/a72f71c2.html","5cd71bbba11bfb2ccba2432b9628c239"],["/posts/a7634b5d.html","15952717d65b81a20e0c0e88f04e2e47"],["/posts/a8c593b5.html","81541bdf2345fc95006bc836e71c36da"],["/posts/ad0c1efa.html","288437fa9ff9c5f9453b34a37351e96b"],["/posts/ada3f440.html","288e2040a5d31550d207ce12dad5a0d4"],["/posts/af1807ef.html","d30d962764ef00f63292f181368f00fb"],["/posts/b397bf03.html","690849508a7d509d1b01b26f1ebf9b78"],["/posts/b497b647.html","95a5e86c4973a2c23c8c57641ec92453"],["/posts/b4d464b0.html","797acee6f242f459451fa8c57b590f22"],["/posts/b5fb773f.html","32b4de09e98a04632487ba62ce69adca"],["/posts/b8d46b32.html","a03c6fb3697451ace18cc06c7f3341d6"],["/posts/c1b2c6c9.html","d9940c4189f964cc050a065990806117"],["/posts/c2111cbf.html","29cb875738e5f17050fbb502495266ab"],["/posts/c316c2e8.html","8522cb4afdd2d2a127862ace5eec59ef"],["/posts/c43e60b5.html","191ef351159d6947615307c504f1e39a"],["/posts/c497a412.html","a2e92acb46a351501aff33f29754ee1c"],["/posts/c5395ba3.html","8f9445efca016289495dabf56531d203"],["/posts/c5de299a.html","fe17b584dcd3f9b8fbedb73e0006704e"],["/posts/c70bba9c.html","9c5a7a6d69ffe8f633ae0698700bc42f"],["/posts/c797535e.html","4fe7fa572de599dc3b79e4a34c330ac9"],["/posts/c7a62c79.html","40cd6d753f41641404a3e1f5cf19af3f"],["/posts/cae2c959.html","670be45bb7d64651e6e55fe73866b308"],["/posts/cbebef2b.html","18be384327492e4be28decbf8cfbdce0"],["/posts/cc4c0017.html","440c8583559e24a918156efc9d1e7cf9"],["/posts/ce25023e.html","57674ed1037d893e8315ed3322345a0b"],["/posts/d2fd4837.html","7619a4267452d399cb14cc318e34d57b"],["/posts/d3233cbb.html","042d4d0791722e5580a969b390a33fa6"],["/posts/d3a745a8.html","3eb032e614b3cc6466b4c68237141c1c"],["/posts/d7e940d2.html","627e0424260c5f2995c57468af50aff6"],["/posts/dc815d5.html","de4802a380e816b1b108dddf4e405595"],["/posts/de25b0be.html","fd0f42aadea9f1f2d344d0dfce919ce7"],["/posts/e2623b4e.html","1001973827101c1f7b7793b7dd827096"],["/posts/e3ab6ad8.html","3c6d33ce7168dfd42e1a1ee1f8c03b9d"],["/posts/e5018da6.html","0ead3e85f0fadc7c99b88155864764ca"],["/posts/e5963272.html","84bfa66b02d2d61b7b90bd1749488c4a"],["/posts/e5ef4c3c.html","de629ede025a61d4c11bc4762717c57d"],["/posts/e624b065.html","7b56c5b9580fa618b3103405bf91f2de"],["/posts/e7c703bb.html","f8a031d56f36e24ece5bf273d2554932"],["/posts/e8f14b6c.html","54f7ecf3e26b0079ed1de067c558680f"],["/posts/e91abb63.html","4e8e2917c214cd833f147dc1fe72f83d"],["/posts/ea9a8808.html","f15cdaac30fc2184d1b770969242945e"],["/posts/eb784749.html","be9b762fa815bc011285c46712a62703"],["/posts/ebaf2232.html","a0f2cf67d7f569532ef079179aa7c8c0"],["/posts/ed75f185.html","cef97c38b2e4b8d7bdd836d1d4e4c653"],["/posts/ee1ed673.html","2e5614317ae7561e2ff6bf23fc87adb7"],["/posts/f0c3ed61.html","c59ce1d7a46fcc5d1d3525ed2d7b4876"],["/posts/f151ff43.html","44c2dcfc97dcdb5d8ed5e3cb5d83dd47"],["/posts/f21e7f84.html","4d3b56b835deb128942011a8a4931947"],["/posts/f230b0fd.html","8287657c0dd5e20f51788fef378e9561"],["/posts/f28a7877.html","766f6ac2dd1c7e9aa5d3e73942a6344b"],["/posts/f663d5cc.html","a9c001455ea16ccc9847075ed5dc1fdd"],["/posts/f730ad18.html","64e301a3711cdc1649547b602737b257"],["/posts/fb5d4608.html","623f91da6b9dffd513227a1715694ccd"],["/posts/fc04d0d4.html","062b7d0aca8682636bcb5f348b833788"],["/posts/fc455f81.html","fc5c88ec7e78010856ffbe1399b3785e"],["/sumire/index.html","29715f43e31382c866742cff52df6c65"],["/sw-register.js","71050a955f45e21c06cdfa8a456d3ed6"],["/tags/AKo/index.html","bbf86b23881e66246c5ac3cddafed73a"],["/tags/APPLE-project/index.html","fabe5148b3ee8e8c8c6acd57870e4cd3"],["/tags/Ankrache/index.html","43eb9480e1f180d8bf5ae02122f1d906"],["/tags/BELL-DA/index.html","32b08fb3feeaca9637022db044dfc4a2"],["/tags/BL-Game/index.html","e92d6959ccfd6e5669bb38e4122eac6b"],["/tags/Blue-Dahlia-Digital-Creators/index.html","2bf17b4c15a2235a54e7ae52bdc67a3d"],["/tags/Blue-Line-Games/index.html","7b9919dfd8860b9c8f062b70014cebd9"],["/tags/CD/index.html","da1fb35b5b077379350b401a4f3d44c1"],["/tags/CHUNSOFT/index.html","d8e3983c9641873156bebe6b11b7e4f6"],["/tags/Check＆Stripe/index.html","ee44801c3b58ba4066a3f9b3bb67b851"],["/tags/Cherry-Pie/index.html","f1a69858828a9d79a89eb252399a5b74"],["/tags/Circle-Mebius/index.html","79379baf0bf0bd071d20823fe46a36c7"],["/tags/Cosmillica/index.html","10fe156d6349a5e5a9f608f3ab1f2990"],["/tags/CresCENT-BLANK/index.html","27d4194e95a3c346a23c406bb31deb26"],["/tags/Dopamine-Software/index.html","eb58d64d8368fe583b96dd6f0db2dc97"],["/tags/Dos/index.html","a1e7d3df1d7d0cf1d04b5411cf559985"],["/tags/Earth-Well/index.html","5d71705348f75ed47695171fb7d6a9fc"],["/tags/Forest/index.html","77cf5d8a5ecd9cd7bbb4a3fa657bcbc0"],["/tags/HaccaWorks/index.html","02106b3393b2231a0d681f2753b00f2b"],["/tags/Kanon/index.html","9023b63a56150025094f0d68a5d6b681"],["/tags/MANATSU-8/index.html","a0a1b8366188810305f9fb5e3ead7dc6"],["/tags/MARINE/index.html","043c1018a92ae022e5608a3e4876ea41"],["/tags/MIO/index.html","79663f48c531f07a456726c37c1cc800"],["/tags/NAOX/index.html","056da6b07378d373dfa9fca234b62549"],["/tags/Namikaze-no-Uta/index.html","af387124e913251f8faa7fbba49d5e40"],["/tags/Nmyu/index.html","3a3a1240e0d7780b3af10d5f52984775"],["/tags/O-S-I/index.html","03273744b7f4b1213a293ed3fed54542"],["/tags/Omegaの視界/index.html","0e86ba829f914871ed1180b55ee173fc"],["/tags/P-o-l-c/index.html","f9a1d1bc7369388f80023c4f6fd64cb9"],["/tags/PC88/index.html","9311021e97735bc795e5b205b52854a1"],["/tags/PC98/index.html","1305b144df27423d6d85f27a30a9062a"],["/tags/Perpetual-Room/index.html","19d2d915ff731794c88792c4b1a6cff9"],["/tags/Pleiades-Company/index.html","198f253832f5d93d59aebc6b3a2b502d"],["/tags/Project-Twintail/index.html","da6b805b263488025504c04429e15ed0"],["/tags/RIFF-RAFF/index.html","32d22ae68798ae874824bcb9dce19d6f"],["/tags/RPG/index.html","64f97df6c303446d1b78ad893cdfbb91"],["/tags/RPG2000/index.html","d5b361cd19db5f7a5be85d33d539550f"],["/tags/Reverv/index.html","659929a68115006d351545b9e284a364"],["/tags/SENTIVE/index.html","be8d65cf65e1c001c59f7ad6a46a824d"],["/tags/Saihate-SOFT/index.html","d184647901ed8bff8a5b130c51b7ac7c"],["/tags/Scrubbing/index.html","ca3a1ca9322abb2bf2ce4d5edd52e0b4"],["/tags/Sky-On-R-imaginAtion/index.html","7b19f9ad74c3a2ac0f0e3d17f62d08e4"],["/tags/StrayMoon/index.html","dbb2930cb848537a9bc465d259e52bd1"],["/tags/Studio-Bu-Sa/index.html","f8b006278848dd47197632e89c3af6a3"],["/tags/TRANSPARENCY/index.html","1c95015c14f81f3005fc0131fdd1d439"],["/tags/TRANSPARENT/index.html","5cc0c7718d07aa948a7a4d894de92666"],["/tags/ToHeart/index.html","80e6918f854affae9a2703d39d27c3b3"],["/tags/Traumend/index.html","46aa40f96385009f5964dd2b9a4b64dc"],["/tags/Witch/index.html","311114d4c8559a2c01f57286513a4d5f"],["/tags/adonis-project/index.html","3e5b6d8acca8062b865408fccd9ad91f"],["/tags/capriccio-suite/index.html","95cefb690de225fda2d36e214d8060b6"],["/tags/flash/index.html","4790305133e7dc31fea5335ab4313911"],["/tags/galgame/index.html","2a3ec17a4de9d4a3aa112806d8962cfe"],["/tags/galgame/page/2/index.html","47641d9fbc003a8280066e96a3553bba"],["/tags/gal资源/index.html","4ec7076dbce623f2b0fd68e06b514ddc"],["/tags/gal资源/page/2/index.html","08b1ec0d2eb2cfeb99ae8dcc3b705c9e"],["/tags/gal资源/page/3/index.html","6220b5ce1d9afcb88ce8280082509b83"],["/tags/index.html","8584bb16d0cb0ddb2d5712fdc65103de"],["/tags/m-kz/index.html","86d34efd9b60e47dc6f8287c6501291d"],["/tags/purgatory/index.html","386e47cff80fc2b5b2c41bea17623419"],["/tags/rkr/index.html","b8844e1bbc7b929579bafc3dd52d4ad4"],["/tags/team-eye-mask/index.html","22ec4583a7c8b1751cecfaffce2ad544"],["/tags/ありすくろいつ/index.html","b0d1a472be841509dd0c031fc406ba9e"],["/tags/いつものところ/index.html","eeb3a213d3b05eae703781257ebe72f9"],["/tags/きつねみみ饅頭/index.html","47d4a8f818664a549f1e301d405bb2af"],["/tags/ねこねこソフト/index.html","b23e10aa0694e5df191e8830896fcc73"],["/tags/ねこバナナ/index.html","21535baef70db1523e041f070ba39aaf"],["/tags/はちみつくまさん/index.html","b1c9e50dace2acce219abbab46ee3269"],["/tags/ろりちせ/index.html","e916b8d02f06d74a3af5852cc8367dcb"],["/tags/アイル【チーム・TATU】/index.html","89340c1029db1050d5201084c947f482"],["/tags/アクアポラリス/index.html","c10f03f088d4264b796efc36650eef76"],["/tags/アークシステムワークス/index.html","964e2b1716f2dc6681be4cba94f76115"],["/tags/ブロッコリー/index.html","65ab83bb75db792011215045da5c6e4b"],["/tags/乙女/index.html","0d2229f14ef021f33afeb5cdfeca6637"],["/tags/乙游/index.html","3ad2c928842871f914a00130648c02a8"],["/tags/停产/index.html","2d01365bd033088e45eef1a02ad071f1"],["/tags/公告/index.html","f1c8736b9a7abaac9f2c76e877ada7dd"],["/tags/同人/index.html","50bdb1d84dd78d860eca579881ccbffe"],["/tags/堀井雄二/index.html","1bc52941db16ee83e4c2828e3816c277"],["/tags/外海なおき/index.html","498a8444385d9296c4b26f938db8debd"],["/tags/大熊猫/index.html","7b4931ab6ccfb6bd8e848bf9b784a816"],["/tags/女性向/index.html","8ba84f3ec80112d2cc687ddf523451b3"],["/tags/安装/index.html","6d66bc8defd14256816efc217ef46aa0"],["/tags/御茶ノ水電子製作所/index.html","75ecda1ad1f870f2cb9405c353a5d44d"],["/tags/月の水/index.html","cec63122546835a791e8cbdd90fb413e"],["/tags/桃野衿/index.html","3b5d74f9be67cfb17528f9b8be8ea817"],["/tags/機械式少女/index.html","6da07d66258238bf1253c0a9e196c8b3"],["/tags/水仙/index.html","4408ca6c894470aba1a73d3998c6d063"],["/tags/汉化/index.html","7b57ed2de7fa57a06e179db6e4e280d2"],["/tags/熊月温泉/index.html","759be701c8b757419d34822e49070c8e"],["/tags/片冈智/index.html","51b4e9e12b5c3d61688b3886039ae480"],["/tags/片岡とも/index.html","0e19bef15d58f31342adef87ea4e5341"],["/tags/牙の刻印制作委員会/index.html","51c8062c2e42e67b93d94c803e9c8f07"],["/tags/牛カルビ定食-FLAT/index.html","32a85521925346c6cea0883b407bc941"],["/tags/牧尾屋/index.html","dc2c0e9187c026480df4603f0a397bb6"],["/tags/犬茶屋/index.html","7f2694a87e6e66f1b524490ceeffec87"],["/tags/猫猫社/index.html","cc135d199e5e76a9f91030d6ad4a2050"],["/tags/王宮魔法劇団/index.html","8549b321e1e8626704ba0c1c13f1c664"],["/tags/画集/index.html","c5f880d70ecfdf109570238d863092dc"],["/tags/索引/index.html","6e8b3060af99094ab11c3dbb0683d64d"],["/tags/缺失/index.html","0dd269ac51c754136015cd52a9521493"],["/tags/自购/index.html","e0aaff8c5b9478bec44715c5c47890b0"],["/tags/茶葉☆姫/index.html","9322a4a0e1c138ea18ef7739a4ab725c"],["/tags/郷愁花屋/index.html","c90b7885800852f20aa6005100c9d2eb"],["/tags/閂夜明/index.html","9090f56559f98b07e2c5ef611c2c1b08"],["/tags/音乐美/index.html","379257d22029d0230147ea581cf19528"],["/tags/黒†救/index.html","7638f458a82aed2d29ac55f8ec2d0083"],["/tags/黒百合っ子大集合/index.html","c8de7be68c140bcff76317ceeec21384"]];
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
