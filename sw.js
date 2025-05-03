/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","54ec65ac9122271839830c489bde2fb1"],["/archives/2024/04/index.html","a3d80caae5214d77ccb331ee51365e69"],["/archives/2024/index.html","faa07391f3ce9f6bbd1808df2c81ff45"],["/archives/2025/02/index.html","bd83768a8421a0e2811e2b10817d26e4"],["/archives/2025/02/page/2/index.html","5a3853abcd98c57e3153df3c574ecc6c"],["/archives/2025/02/page/3/index.html","a0722b67540af76a86c238dbebcd08c0"],["/archives/2025/02/page/4/index.html","6b840c01d6983c47940b1ba7dc72ef50"],["/archives/2025/02/page/5/index.html","32d19674323c0ff1e40c65ca65ae339e"],["/archives/2025/03/index.html","fe14e48246c9e991d1e9ff290a83ccc4"],["/archives/2025/03/page/2/index.html","5ffc386fbc51e4e770f9a9643417ea68"],["/archives/2025/03/page/3/index.html","b93e5ebe93efd4312a26e5f8d4bf60d0"],["/archives/2025/03/page/4/index.html","0605550ac2268121d183e5f99c02e247"],["/archives/2025/03/page/5/index.html","f4eb6619bc63bed9eeeaa85865d1f924"],["/archives/2025/03/page/6/index.html","b8da0e304f8d218fae7c7d77fdcb1486"],["/archives/2025/04/index.html","fd5fd67f59b399ccc853d320238255cb"],["/archives/2025/04/page/2/index.html","1a5b4cb266d353846e279c5d7f049a8f"],["/archives/2025/04/page/3/index.html","34f3ffee8cbbb95b51cd716fb62c7abf"],["/archives/2025/05/index.html","f6b717b7fd7c6d128b22a12525c9c476"],["/archives/2025/index.html","ccf8f49f0f4d98fe2f6b963295b00f05"],["/archives/2025/page/10/index.html","71fde5743619e19d0b94df54bc9b72d1"],["/archives/2025/page/11/index.html","3bacf979329aba4a6edba16bdf96b873"],["/archives/2025/page/12/index.html","17954391ce2f5b660eefd0e18f9b1f16"],["/archives/2025/page/13/index.html","4fb3ad10ffd05e526614a56052d0821e"],["/archives/2025/page/14/index.html","dd077b62bce581311605e1aa349513ff"],["/archives/2025/page/2/index.html","805036e1e835bd79e8f7a153152a871d"],["/archives/2025/page/3/index.html","61d75bf4548fb54508dcbdbc6329e6c0"],["/archives/2025/page/4/index.html","13a2f30de4fca0798497da6ceb4ed788"],["/archives/2025/page/5/index.html","f7f8eb72dc69642bffcbef954f6cf759"],["/archives/2025/page/6/index.html","ef406d8a10e20d5dae8427a62fb49eb5"],["/archives/2025/page/7/index.html","cab66bf1da957f083b07d4e04bce5184"],["/archives/2025/page/8/index.html","e8b700d3c558d1c3efac511912a77b79"],["/archives/2025/page/9/index.html","a52d83e27fa725f099acd68052851f8d"],["/archives/2026/02/index.html","8bc9309275b0b96f23a9f0efa14b6cfa"],["/archives/2026/index.html","31cbfd4f059a8d2938ba25eece61396d"],["/archives/2825/04/index.html","855d48d11eafe55c56e2011dab3c7968"],["/archives/2825/index.html","b493a7c76fd548593198c9b9d69b4b31"],["/archives/2925/01/index.html","d1636d579af342f71ff5bb0f73a77262"],["/archives/2925/index.html","165d9757cb90036c8c54a060c3497761"],["/archives/index.html","b177ced651aae96dda6be44b6b45e8c6"],["/archives/page/10/index.html","4758b1abb57a45ddb52badda31075e4a"],["/archives/page/11/index.html","ce90c5591eb66410b8c565eaee5877f0"],["/archives/page/12/index.html","3d8def9832e2b794432e822b932f489f"],["/archives/page/13/index.html","9de1cd3e045e4ee2d544cdd054fa1bf7"],["/archives/page/14/index.html","a9bf184490e79f1c0d373f68016740db"],["/archives/page/2/index.html","a0e8040f9f9d73c75dbf2ee9fb225b56"],["/archives/page/3/index.html","df7152db82cc118f825bb506fb1a8248"],["/archives/page/4/index.html","471b9ca2ac5cf151cba47c00ea4d97dd"],["/archives/page/5/index.html","b834c8bd9522aeb56b1dd1391c02bedd"],["/archives/page/6/index.html","d50053c6448480565c3ea1f1b339f193"],["/archives/page/7/index.html","bc2dbc4c3304dcb928882fbdaf44a52f"],["/archives/page/8/index.html","b6b58a78803bc8bbe96334cedf4871d0"],["/archives/page/9/index.html","00ad738629248b2d7952713bdb13e601"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","693bce7b4c8ffe07c572be2d728f01ce"],["/categories/galgame/page/2/index.html","512416b63252c2ce0692332ce8cd6a3f"],["/categories/公告/index.html","ee8585e1aade85d921c4db409cc435e2"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","d87682c442b05b181bc9a5260dac64c4"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","081a4ce3081186d07d4f721311aea050"],["/page/10/index.html","4a7a93081a3359f7fb7362696b423d83"],["/page/11/index.html","49f4b5137d4eba9e2238542362ebb704"],["/page/12/index.html","ad1c1ce0189dbd20b174286f9e32050f"],["/page/13/index.html","c3533e12477623d21497406600c0485e"],["/page/14/index.html","c1f91b23c97e856c9e111d69c3aea391"],["/page/2/index.html","70e9dbb875acaa6893e7a2d759b1e8e4"],["/page/3/index.html","13b532e8c84b8ee06344edb777603ab1"],["/page/4/index.html","02b145424109014fbe0b0e19a76a27fc"],["/page/5/index.html","30c3bb1cbbed745c29145e19317a39f9"],["/page/6/index.html","3d582f2889b60c14e5ef0df846f8e0e9"],["/page/7/index.html","7fe4c70036016240401e21d10e83defa"],["/page/8/index.html","4be640aa3f1dc04fb83f18edc0e17045"],["/page/9/index.html","3e1936783068bfda68d866ff9a58988a"],["/posts/10c9dd98.html","38d3089bb7658391433945a8ef310bee"],["/posts/126ebb99.html","15ed399832207fd0925031cfe194b6ff"],["/posts/1295b569.html","6b9d622e516d247bd5ae61b7801cf7e1"],["/posts/1370342.html","db6716f2bf09cf5853ad30091cf9166d"],["/posts/15ef14c2.html","b476059bfb80461b1cde50d823ca0ba0"],["/posts/15f3959d.html","6418b62e27ad68592b5bdc5c2842f8b1"],["/posts/18ab785d.html","41c0697d1b7acfdde7b3a2970f4c741b"],["/posts/1d59b71f.html","669b8cb6e5ad99329e9dc2a10bc9e5ff"],["/posts/20b3f3a4.html","0be0bcb84fcce58ee47052c8db206930"],["/posts/245f1c7d.html","8d10bdd0c2567a8e1c263b6e1ead02d9"],["/posts/252658f.html","8b2d95f00eef12a47868a55e987949eb"],["/posts/28397adc.html","7518787de12de0d5db0e9dccbd4fab62"],["/posts/2ad07f54.html","a27a963e7cf99c145f913a1f3b756660"],["/posts/2b38bce0.html","1a2113bbda7fd23b97e88a76746bec6e"],["/posts/2c0a6836.html","895372d3a9518e61da972cb1bf577c45"],["/posts/2ce39bcc.html","d7abf90b598a7e08d515d7674240f5f1"],["/posts/2cf620f0.html","12f5d5fef12ed3b0299ba5fb172383e8"],["/posts/2e30fd6d.html","32e1b9b86875f36ae786dd1c2b453ae7"],["/posts/30a413ad.html","93ef794f2e563d6280460608a325d6d5"],["/posts/34292736.html","97c3fe2b16cc25251212b4d7a0f2a79d"],["/posts/3468cbe.html","29652727d34e2f98d6c8b540ec13a0cd"],["/posts/39176dc0.html","08c5fd7ff1975d2e95619d0b7b024e5c"],["/posts/3be6a165.html","a197502591d860fbd69cdf0fabbd10cb"],["/posts/3e118dbf.html","e1ad40c2665be13d0365a288d371ff1f"],["/posts/3f7d823a.html","9de2459f1ae99a1174a24b2d46cd6111"],["/posts/3f978819.html","cb8190e0480ee3c57fcbf9bf0815352d"],["/posts/41dac80e.html","aa2684312106946d87348b652b5fceb6"],["/posts/43945723.html","89bde263ef90297b7d6e4e1e8cecd9ed"],["/posts/44124a6b.html","2601ecc8fca7a442f7cd1289a21eac12"],["/posts/47abb61d.html","e5e8100b95cd96649f4cdec5a2ec24a5"],["/posts/4996478a.html","af8f940ec7227fcae63237d2df229910"],["/posts/4b689be3.html","48d56ef7a554f7f90df286313d544ab5"],["/posts/4cf8423f.html","a385cb1ce2f7c3aececb24cff113d2b2"],["/posts/4dcf85c.html","bdff59f6f163032482f035b4649f3d8a"],["/posts/500cd322.html","97903d810fa8ff0540136be75a1dd60e"],["/posts/51c9b1ff.html","5761c7b3cd6e4ba44ab58732c9cf0a5c"],["/posts/52b5b3c6.html","5d1c9723444911878bd081b68c869f56"],["/posts/54f496ad.html","c0fac0f270ab725219a095aba675ead9"],["/posts/558e1f30.html","2390d5e6257a7abda22ba21876e545d7"],["/posts/5d8bea92.html","bf89328e660a93bf9d0106ee9b4c3a1c"],["/posts/5f6e0c59.html","57625266d220d41775ad27138a5fc153"],["/posts/61a63a84.html","8b1300b968276062e8009125b9d654c0"],["/posts/625ab7bf.html","8eb4899bb28f5ddd6a8d3ed06ea94b4a"],["/posts/6336a2f9.html","8d281f5a828ef01557185c867d9a6610"],["/posts/6432d61a.html","711babe4993562745a05f8e741dec710"],["/posts/6515f032.html","64be55b2f333545779ac98622bf46c10"],["/posts/6720ccdd.html","23114424dcadac9c84b691d75fca6eba"],["/posts/6a4b5ac8.html","ff1d2f3525dfc22ec545645b7238f9c0"],["/posts/6aa4177c.html","a4476f639f042f87691b0f0028975cb5"],["/posts/6b15f81f.html","928aaa201ded9815d94b6645a4a1beda"],["/posts/71131d34.html","2b96b5a15234fa1f4ac05508ee0417f3"],["/posts/742fd48d.html","f342113990bf16ada191b188f4b66eae"],["/posts/78a8a8d3.html","444243c3427d8df1e888dd2a0e5826e5"],["/posts/7a5ef3d0.html","a24668d9095b1d1941de3574960aaaf8"],["/posts/7b41e1ac.html","d18c1202d01fa626a3577fbd71b0b9a7"],["/posts/7b51011d.html","2846250d9d6c748bc4fe5b5d96deaf49"],["/posts/7e3aa3e2.html","60c45edf573843ce6816ba977ab94709"],["/posts/80fe2691.html","921d31ef2c8b02f5ae2b1b397f3ae904"],["/posts/81ac52e9.html","1960623450da02c5b273f0b0cfd91d00"],["/posts/82332d11.html","e02b3feda8d9648e9a75bbe5c22156ac"],["/posts/8486f6f9.html","f1e637a2c974457640c7dd8d733e8f3a"],["/posts/849b40f8.html","505b72d7e0b9fe9d79d5b106e9ad1219"],["/posts/85c51d68.html","100b07181c5eac274ea3d813c14c16d2"],["/posts/86a6c500.html","6fa6eadf8fcf1a359b58984fc8598995"],["/posts/886f8d3.html","1ae1c758a3363ee5bfa6b4c7312e47ad"],["/posts/8a7cba10.html","32284713eb4e708e701f727c9117a66b"],["/posts/8ac11b41.html","b35168419b5d9fb2f02e4705105e0e4b"],["/posts/8dd520d9.html","f9de01d4bba1e989d63e8d8e95f5a658"],["/posts/8f555654.html","837e874971890ce3b1c4a8fdcc8ed5bc"],["/posts/92a980c2.html","4f072afae1d05ae5b7340446fe43b85d"],["/posts/92ce16.html","ced3dbb8d4c5c8fa60b074f86f0a176e"],["/posts/93e9943b.html","60c8cc051a1c7883ced173121e7ae4c3"],["/posts/94d3c794.html","ddd6e2f4c8ec073821d98d394bfee4ac"],["/posts/96b281f2.html","15a96776709384a110eecce233ebad59"],["/posts/97f50eea.html","26b3b9f051463d8c1164d97218279ad7"],["/posts/97fca8be.html","d4287e0755b675f5ae673499b66cf140"],["/posts/98662d05.html","0bcde252e2a32f52d4ee61d69de54c74"],["/posts/9a2f6162.html","564cb05ca29b2e392c75e85cef586f19"],["/posts/9b22a48d.html","3a1340f9d9b0ee55803b8f27225037e3"],["/posts/9cb455b1.html","366e44bd5541202b00151f57155f82a2"],["/posts/9ecdeecc.html","51174a56bb4bdff1cc5a0cefecbf48f0"],["/posts/9efd7701.html","82a0a72f5c1aa9c90972c7442a08b4a7"],["/posts/9f61c1a0.html","a95cd280e8710f9bc9d764a16e5b68c6"],["/posts/a1de710.html","a228b40a8b15412b3b7a02d0d12aac1d"],["/posts/a30eb0cd.html","2c4d56dfc873e23f15f81d2fc2ddda22"],["/posts/a7634b5d.html","4ec1eb5ab8603b1a627308b8275c628c"],["/posts/a8c593b5.html","e8f7be9b28d0ddc6806f0559683fef29"],["/posts/ad0c1efa.html","5f526b394d0afe112a0061ded89c2a82"],["/posts/ada3f440.html","415046695b55a1f50bfd9c695955541e"],["/posts/af1807ef.html","e7d0383401f235a2852c2b6c8225f4b0"],["/posts/b397bf03.html","23bff28e8dcf706b894df7920c20deee"],["/posts/b497b647.html","36e4671cd66c5b2b8af743d76498cd4c"],["/posts/b4d464b0.html","95a32d67f73088c44b8d1ccb939d7dcf"],["/posts/b5fb773f.html","93f7aac39b527c6b1b86c77667462e33"],["/posts/b8d46b32.html","cf64748f5ff7f62fea80df007bdd1f90"],["/posts/c1b2c6c9.html","e747629e9f7958e91640f53bf89be8b5"],["/posts/c2111cbf.html","a041c9f129668d6d8ee90b4a3fd5d9e7"],["/posts/c316c2e8.html","01e5765c1af621d5d133e483e849bfc7"],["/posts/c43e60b5.html","1b383a236ce150c40370b5c2dcb1895c"],["/posts/c497a412.html","3459b3695beb089bdcfba9353ef43339"],["/posts/c5395ba3.html","d38a3e3b2ba9662812695f70c372f218"],["/posts/c5de299a.html","b801984530de2dd0c714d0a53ceddda8"],["/posts/c70bba9c.html","024e96bba74d28fe85f94d4d366e088b"],["/posts/c797535e.html","bf1e89f8fcf2e0a81ed9bcf3490fe056"],["/posts/c7a62c79.html","485c523c80331afd7efa322d19cea0e7"],["/posts/cae2c959.html","9471995b4fe9fc6ecb451c077fe39f2c"],["/posts/cbebef2b.html","3eccbe97aa2a6dc067b15afdedd7ae66"],["/posts/cc4c0017.html","8fd3dbc4c740fc7a983c7e52725b577f"],["/posts/ce25023e.html","47dc6075e0f7fbd87f22106a6609b003"],["/posts/d2fd4837.html","1b8922fc59c2d28a6a1e903d89eba1d5"],["/posts/d3233cbb.html","5c9b119bccfb00a0ba28326583c12715"],["/posts/d3a745a8.html","bc83239ee93c85908ea210068a451008"],["/posts/d7e940d2.html","ec17dd29f4202d63aa18134875ff5355"],["/posts/dc815d5.html","6f83c62d6473ebe376e90236dba992bf"],["/posts/de25b0be.html","b150ff556c0fb29b3a69a57adf6e7cae"],["/posts/e2623b4e.html","bf2fb0be6a144a05d41b5bdb599ff968"],["/posts/e3ab6ad8.html","8f47284e42e238475c22d50d23c6da12"],["/posts/e5018da6.html","46b8c75e53a10b931b2f024909e694b6"],["/posts/e5963272.html","1dc86a91f8694dfde7f6fe32aeb7373b"],["/posts/e5ef4c3c.html","e4a45b4e1fe09b0c53082ac2cd76f071"],["/posts/e624b065.html","70f3fa8471391ab2777487d57ae6c5d5"],["/posts/e7c703bb.html","2df56c7d5d7c4e365771cef4b614cd61"],["/posts/e8f14b6c.html","6cd709c6ef9638147bd6a0f78c7f2c72"],["/posts/e91abb63.html","a8fdf1cf8444aa60e0bbbf8e6b159837"],["/posts/ea9a8808.html","65e5f2453038b96f09635c36150c1dfb"],["/posts/eb784749.html","6b36f7c6e96810fd73b86bdbc3a92f84"],["/posts/ebaf2232.html","3172ca6796ed651ea444f05e59171180"],["/posts/ed75f185.html","18a976e8ec3d776ec66d47c08e7c454d"],["/posts/ee1ed673.html","3b6b876ff0cf5c20165e2d6dda14288e"],["/posts/f0c3ed61.html","db0bfd519c980b386cd303d09186d0e3"],["/posts/f151ff43.html","c3dbf25fc557ec29abcf558069716bf6"],["/posts/f21e7f84.html","db0a4042eeb6b82ca4408a87d20de9cf"],["/posts/f230b0fd.html","85bd6b1bfb6f20775f3097f0494ec3bb"],["/posts/f28a7877.html","b7eb3254339fb573bc72e8aaca72b4c5"],["/posts/f663d5cc.html","b0e1dd47c02bbec0981544c7b2d566d1"],["/posts/f730ad18.html","491e93797ae246372927017b3e67cd2a"],["/posts/fb5d4608.html","7da0782cd1f47bd172e10d10d57c3d2b"],["/posts/fc04d0d4.html","0d07eca97438fd2f0c51523d51212125"],["/sumire/index.html","204764cccff952441357883062dbaff0"],["/sw-register.js","688878a45131ce00e68c8689e30b7e03"],["/tags/AKo/index.html","7d14a666d181c725dec0d56c76a11f5b"],["/tags/APPLE-project/index.html","990b77ec99616131b8fa16b16e5d5825"],["/tags/Ankrache/index.html","a46436e35183ae3506ab217b4c02d0c2"],["/tags/BELL-DA/index.html","d4f7d23d1183995dcf479bf4e577a263"],["/tags/BL-Game/index.html","769fb55738cc60b1ef9a5553af3625d1"],["/tags/Blue-Dahlia-Digital-Creators/index.html","0211d317e87d5d1f9b8ae8f1c6422665"],["/tags/Blue-Line-Games/index.html","c0ccdcc7aabfbb0f7d716557d8d89dc7"],["/tags/CHUNSOFT/index.html","aadca8d10ff20dd0bd400e2ad2618312"],["/tags/Check＆Stripe/index.html","7f0b17f9880c959803ac2697182e09bd"],["/tags/Cherry-Pie/index.html","d37dd769f8d1cb349855b9c8997616e9"],["/tags/Circle-Mebius/index.html","6c6dc372f7e12717e36f6b85a154f58b"],["/tags/CresCENT-BLANK/index.html","cb56ce57ebc9fb36d949b2f62f933da6"],["/tags/Dopamine-Software/index.html","293d60403e360e794b65ea0a089a298d"],["/tags/Dos/index.html","12fcf56e229ad6f03d5b41dce301e6d7"],["/tags/Earth-Well/index.html","c4f78444a7812168b50e52f76d047431"],["/tags/Forest/index.html","1f31f5b174e94bcdf76b06abb4412189"],["/tags/HaccaWorks/index.html","92ddf46a6a69a313d111c22527392dbd"],["/tags/Kanon/index.html","01a8958ea7bbe1aa737a2f1640d5afc3"],["/tags/MANATSU-8/index.html","e853fb17737176bf4e237e285d8a81c2"],["/tags/MARINE/index.html","c5db24afd946852ea693a77be96b88db"],["/tags/MIO/index.html","aefc3a2a0cbeef2ef495bbe81f5f4ce8"],["/tags/NAOX/index.html","3543dadd10870ed4e9046bf6c19a9e94"],["/tags/Nmyu/index.html","0df8ca1f8e611ca518b371664aa9c691"],["/tags/O-S-I/index.html","fd6f317cee5a36a5b0d9c8bdea9ac176"],["/tags/Omegaの視界/index.html","7d1749a38b5d9c633750247626d7de37"],["/tags/PC88/index.html","810845f7b3144ab30ea66ae4d418aa53"],["/tags/PC98/index.html","1073ef89ce8d0c2f29f7dc6315c8f645"],["/tags/Perpetual-Room/index.html","de2752aff52a20e75df6ed64b5bb665d"],["/tags/Pleiades-Company/index.html","4387a2bde1abb1a51a9b0367619e1f30"],["/tags/Project-Twintail/index.html","585a09eeaf03958792baf551ab6112b3"],["/tags/RIFF-RAFF/index.html","c4c95ee4fc7b0ae7116418340d960ef1"],["/tags/RPG2000/index.html","0be6d0def2b38903c02d25619335abfd"],["/tags/Reverv/index.html","80f0ab5214fadba22fd82f88cb03a2b0"],["/tags/SENTIVE/index.html","a8bed263e66ddca7e92e814fa4e8e953"],["/tags/Saihate-SOFT/index.html","e79c18c58d8a5b403b1dd696a281eb7a"],["/tags/Scrubbing/index.html","b071a2985d8cad3c9e59475ed4687a53"],["/tags/Sky-On-R-imaginAtion/index.html","4b686b5c3acd510821f42dbfe3e4d8d4"],["/tags/StrayMoon/index.html","7066f91afbb0502094767f51ca1736c1"],["/tags/Studio-Bu-Sa/index.html","1f1f8b3d29f2e3c4714cffd90b77ae70"],["/tags/TRANSPARENCY/index.html","e1049abf510d27f6deb927be3756fd81"],["/tags/ToHeart/index.html","f17368bbbc068c01a1ca0cd3d1fac324"],["/tags/Traumend/index.html","0b60ec066614098c8a1c63495117ae0a"],["/tags/Witch/index.html","58966f6357e7f36089012637515cdfb8"],["/tags/adonis-project/index.html","7fd9c8fdff2a008fff99be69d11e5267"],["/tags/capriccio-suite/index.html","d9170cb30e32ce4efd7594cbe424ea25"],["/tags/flash/index.html","4d5edbfcdafbabcc9cfc2f56735bc9fe"],["/tags/galgame/index.html","1bdeae9836695d2c5a7e57c6e908262f"],["/tags/galgame/page/2/index.html","e0593fc6f377b39ff8179a6c196defaa"],["/tags/gal资源/index.html","1b1e17222c5c3b063b1eeabaa036be35"],["/tags/gal资源/page/2/index.html","fe70a33de2ee3d594e8502197db34a2c"],["/tags/gal资源/page/3/index.html","721316ca6d9522a3c99831f724c3b04e"],["/tags/index.html","dee4e3f733af3684bb2e5b5ce782edaa"],["/tags/m-kz/index.html","dde775f7c6dbb23eafbddf9995d8a691"],["/tags/purgatory/index.html","c964644bbed6d2cc5ad6c1f8bb984efe"],["/tags/rkr/index.html","317d818eed1467f90d25f23761095ae3"],["/tags/team-eye-mask/index.html","d127380f838c5640bee798de664c468f"],["/tags/ありすくろいつ/index.html","ff8bfe6ba832afb402774aeabfb9d0d9"],["/tags/いつものところ/index.html","2003ddf5775f003938e8279925c90a75"],["/tags/きつねみみ饅頭/index.html","1bc22506e3979d0398ef002598d9f0af"],["/tags/ねこねこソフト/index.html","0976940b8d3409cd1864208b009fe10b"],["/tags/ねこバナナ/index.html","267f383923627caf0b4eeaeb4ccce504"],["/tags/はちみつくまさん/index.html","4ffed2396cdd2a903dae4c57fb4a7706"],["/tags/ろりちせ/index.html","f1c5ee63e841ff6bd636e2446f12b655"],["/tags/アイル【チーム・TATU】/index.html","1a32d41d0236ddb16ca7356f5da3f2b0"],["/tags/アクアポラリス/index.html","929b280d354423bae32f324b82c56435"],["/tags/アークシステムワークス/index.html","3f322c539b58e0dead632238546feb0c"],["/tags/ブロッコリー/index.html","a2222d4ce2dfbc7b2830e0f8ca56ccbb"],["/tags/乙女/index.html","65f8f818482c17f4775877588246a9dd"],["/tags/乙游/index.html","22086ae2f96a6674d24b9c6ac70f5170"],["/tags/停产/index.html","6afac7da53871ff09ccc813e4f2972f1"],["/tags/公告/index.html","b90c219df52c86a24bf5a03bb03fb775"],["/tags/同人/index.html","005f982023ee2d7087aabdadff3821d6"],["/tags/堀井雄二/index.html","7242723900c18c78c0e2f3a891212348"],["/tags/外海なおき/index.html","8e38b4b2cc222c7243a0784b8534c848"],["/tags/女性向/index.html","54ea014f03b22899fa20aff7c86ab65e"],["/tags/御茶ノ水電子製作所/index.html","7a9b8cbaf1f889550233317d80b9d6c4"],["/tags/月の水/index.html","22cfbbd9dafa6e1f8bf7452a0b610acf"],["/tags/桃野衿/index.html","aaeec69f590f55df7029233a015dc1cf"],["/tags/機械式少女/index.html","b8e4ef648d1f99d1d2cce30125972505"],["/tags/水仙/index.html","3d7819462c5071af18a7a8e5392c6cab"],["/tags/汉化/index.html","d59847062984df35f09b96927529686e"],["/tags/熊月温泉/index.html","e710e132bf76e099567bcae3ced3c164"],["/tags/片冈智/index.html","37f778a3d754384a0ce6a7f98314eaf6"],["/tags/片岡とも/index.html","66a305f6bbb693e38110ed87a5666fa6"],["/tags/牙の刻印制作委員会/index.html","2e7a350810dbe085d75f5858b1078a84"],["/tags/牛カルビ定食-FLAT/index.html","141c05d6240346d17b7e4f79d3d3d804"],["/tags/牧尾屋/index.html","9748a8b2447573f511701fb8c5cbf72a"],["/tags/犬茶屋/index.html","690610cc30b10d2c35d1eaee6742b9bd"],["/tags/猫猫社/index.html","2a3df8f999bb24f8d5aa27b9ca96a2e7"],["/tags/王宮魔法劇団/index.html","d0dccd5971d53c00527c025e8d5803e8"],["/tags/画集/index.html","ec108916f367ab8d65fee549964efa87"],["/tags/索引/index.html","6858ac9f5bf92c24636849f1e2e6d824"],["/tags/缺失/index.html","82383d112e857c31141cda7c4bec82c6"],["/tags/自购/index.html","0a5a29f0d5b8be062f199737aa42cd37"],["/tags/茶葉☆姫/index.html","414ae2434f5a2300dbca834ba2c97058"],["/tags/郷愁花屋/index.html","96ac8e47f52a09e555b80b887c4fd0fa"],["/tags/閂夜明/index.html","e5824b829714caf4eec78d0d5bf7fd7a"],["/tags/音乐美/index.html","7683c87328765baa72ed7f1f8f23af25"],["/tags/黒†救/index.html","913ddd3fed2cf023055757bf1f62b653"]];
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
