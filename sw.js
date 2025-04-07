/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","94f08a834adad7c045d9b4e4f03cc732"],["/archives/2024/04/index.html","d521b29a76bc78ae43c589512355e11b"],["/archives/2024/index.html","ad2ca8bffe1a5324fd85044968c55eaa"],["/archives/2025/02/index.html","9e2800a6c827de299d4a725c5cdb8944"],["/archives/2025/02/page/2/index.html","950549327ae3d37c6d88d93700a1b216"],["/archives/2025/02/page/3/index.html","2010930276b763a3c2bb9d2d81742121"],["/archives/2025/02/page/4/index.html","0ad4669e6e4d01fcc69b91c55fdfe2aa"],["/archives/2025/02/page/5/index.html","e0ca524669bbfedbf9985449e927fe9e"],["/archives/2025/03/index.html","cd37032aff7030f63428af235831c4e6"],["/archives/2025/03/page/2/index.html","4dc23951c9b31b0947c68cbfd94ae1c6"],["/archives/2025/03/page/3/index.html","01443f1002e965dbe577c9949699017c"],["/archives/2025/03/page/4/index.html","23484bb1150448d9d520f259ac63198b"],["/archives/2025/03/page/5/index.html","25b5a19128c5212cce7da858462a9868"],["/archives/2025/03/page/6/index.html","198081b2ef9676f08fc1ee17a9f4afbe"],["/archives/2025/index.html","d99b5b001d9bb341945c36b64e53b34b"],["/archives/2025/page/10/index.html","5a570a4ea05e3f2a0a7a8dd344d2732e"],["/archives/2025/page/11/index.html","c756a9612bd3e13a3d76608a0c67b0f1"],["/archives/2025/page/2/index.html","3d693d1ac167ae45ab6669cf5ead5df7"],["/archives/2025/page/3/index.html","b383c368ba9c5eb064a2f34c8a903143"],["/archives/2025/page/4/index.html","b35b2b5c11aa8c8629f95a7e19e87276"],["/archives/2025/page/5/index.html","9e87d6773e127d137f925b8162ae4c7b"],["/archives/2025/page/6/index.html","db408cad0603242fb963e33030053017"],["/archives/2025/page/7/index.html","7890654cdee737b36e0d63bab97d2390"],["/archives/2025/page/8/index.html","4609907991aefb9a475d7c61bdaabba8"],["/archives/2025/page/9/index.html","ea789f502ac07b471570f6a073677a57"],["/archives/2026/02/index.html","2f9ec6b67d3d77e9e9e7cd49bfd81a6e"],["/archives/2026/index.html","6b2f0945a82fdd2d968d756af86eb90e"],["/archives/2925/01/index.html","21ababb475ada783e5ea16afea9f50a2"],["/archives/2925/index.html","8c9ab97297ec1dc4356bcb1459ed7202"],["/archives/index.html","cec52f626dd02864d481058e46f5187d"],["/archives/page/10/index.html","63c539bc5fd6fd30a4c5b8b6db10d899"],["/archives/page/11/index.html","c7eb225f799a384f55327110f5237c52"],["/archives/page/2/index.html","03dc3f581351d4086c05904c686b3b25"],["/archives/page/3/index.html","6cb16d899bbfe59930206e4490c7b34e"],["/archives/page/4/index.html","c8318e23e98bed56ff0b0a09d9da0984"],["/archives/page/5/index.html","36fbc11dc0d26beb2343319921bbde08"],["/archives/page/6/index.html","27fbb2d690dda2ede73cd033782e6d45"],["/archives/page/7/index.html","225f1441b2ab9a287864720a742ba709"],["/archives/page/8/index.html","21311eb961dfc45eb43337147ba8be47"],["/archives/page/9/index.html","d212e7915948c39fa520ef10749267d3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","693b3ce3ca1cc1f6e6ef4d560e84836c"],["/categories/galgame/page/2/index.html","60d90d56aef7c24edee584b72a70068c"],["/categories/公告/index.html","2d813d8687f70836facc02235e34f6a5"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","dac43cf9d4e0343aacf8a89a00065233"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","133ca67f7076610f66943ae355ac1b1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","17ea6991556498339a95773733c46548"],["/index.html","9c46fc857d81729a85e2c90e12ff73ee"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","90ae90e6bb5f66a2d267df9650483a1a"],["/page/10/index.html","e88b482a6ebc2a94bd056891b1390452"],["/page/11/index.html","b57796d17833854b12e194c01dd484de"],["/page/2/index.html","f742696c0c1e62e0c7fa66c7aa1e8665"],["/page/3/index.html","fef1ae390d3409ad84469d7182079e12"],["/page/4/index.html","53f9e065abdcaa6b9fee1f170f357124"],["/page/5/index.html","8875a4552dddf6c41bfbd21f49b02f99"],["/page/6/index.html","d0da9492042fc98012c0906d54579149"],["/page/7/index.html","e8dba8834f75d5f7ff17c75844ad7cc4"],["/page/8/index.html","e121652bb4ae48192ff2095c349eb638"],["/page/9/index.html","a66cc19aadbe85deb7053dd342023f0f"],["/posts/10c9dd98.html","f0ae713d77d4518784f9ec6c85a43df7"],["/posts/1295b569.html","0c1dacfbb5c75928725952df7fe9860e"],["/posts/1370342.html","0d5a8c902d1cb17484d852a1c2564f4e"],["/posts/15ef14c2.html","037a20f74bc540a7010ad9f8928641d8"],["/posts/15f3959d.html","f38d9fd253ed4aab67d4156157ed16cf"],["/posts/18ab785d.html","72d8b4849ed81594a3297df21c8db6b9"],["/posts/1d59b71f.html","b88ea533a678ec0bf26862f2b17cd3a8"],["/posts/20b3f3a4.html","21198957fd224e3d5fde48736b5637cb"],["/posts/245f1c7d.html","431a14431272e9adce7fbb8c98529253"],["/posts/252658f.html","297c02ca24baccaf461bfd75badc02cc"],["/posts/28397adc.html","e0f9d020a1a29d4d97ddc1648dca9506"],["/posts/2b38bce0.html","3b8d60e8097bc081eea690f2a61e646b"],["/posts/2c0a6836.html","a2aa985996c171dd25b0a81d45614103"],["/posts/2cf620f0.html","109dc73516899bfd14feb2e8330a22e2"],["/posts/2e30fd6d.html","759c90cbf043347cf6513fd1753b05fb"],["/posts/34292736.html","f46207fd915e3987e8240d8ce3a0acd3"],["/posts/3468cbe.html","99b99471388d053ad4ae5cbd02718cfd"],["/posts/39176dc0.html","dee656bae04db8d51fe7388af21da549"],["/posts/3e118dbf.html","cfcbc974074c91de0480a24cf0a4dfd2"],["/posts/3f7d823a.html","b40cd4062bf5384614fff4d61259ad3c"],["/posts/3f978819.html","34e2c72e926274da8fdcf2cad53e4eec"],["/posts/43945723.html","750b80f069435bfb84f278d6eb76abc2"],["/posts/44124a6b.html","7d180bb66c3b65d6b726d98fc3f013f7"],["/posts/47abb61d.html","cfb29eec3cf61e4b3241299dc3795b9f"],["/posts/4b689be3.html","34b4bd85b531617c12a944288a74840d"],["/posts/4cf8423f.html","2e331bb07c6d831dbd5d134359480cb2"],["/posts/4dcf85c.html","ba5b9afc1667b5a68625858a61e3b371"],["/posts/500cd322.html","2cc531d63fcf4aace447470d7a4ab261"],["/posts/51c9b1ff.html","ef4e6c86deb5a654062ec08010478e5a"],["/posts/52b5b3c6.html","e49238a4dc19998a71e0aa888a1fb2d0"],["/posts/5f6e0c59.html","e1654942d92814f2e3c14276cc1ef1c2"],["/posts/61a63a84.html","574617b8005ae9a59f93d4ca3d94b11d"],["/posts/625ab7bf.html","276cbd1b1cc2c81af242e2c3db288b0d"],["/posts/6336a2f9.html","e8b525d848148843ee0f60c33dea205f"],["/posts/6432d61a.html","5f154b1a513db6dfc9f0f276dbeb2c8f"],["/posts/6515f032.html","ec9d17366b62f22f0b9fb42afedf047d"],["/posts/6720ccdd.html","c3e0e0c8670b7a1279f1698e23629e43"],["/posts/6a4b5ac8.html","647b516cd01308063fd464e973fc850b"],["/posts/6aa4177c.html","dbb8993b32b5c7243c80a96dc91bc265"],["/posts/6b15f81f.html","ab7cd7e2d2ee1454abed5685dad04370"],["/posts/71131d34.html","e284b9a227c8fad30cdf63cc0696646c"],["/posts/78a8a8d3.html","dca5cb1cb9b0aadd4fce2a1a8fec00e9"],["/posts/7a5ef3d0.html","51e46cf4c4202515bf2137c197d52836"],["/posts/7b41e1ac.html","7353bfc9f94f3a15763674b20f98f14a"],["/posts/7b51011d.html","c5ed7bb12c33992cc2515a6d148215d6"],["/posts/7e3aa3e2.html","52fe8dea9ca6b724c5e231e5e94ef718"],["/posts/80fe2691.html","5685fd0c93c953e858aa44add7a4bb9f"],["/posts/81ac52e9.html","7621e1061b6fafdac1eca33e3d20d2d5"],["/posts/8486f6f9.html","3c75844686273e7db59650d605b283ab"],["/posts/849b40f8.html","c13ef53949c3e8d29080b0dab585ebc2"],["/posts/85c51d68.html","d3155240aa227466e4e86b4963b00104"],["/posts/886f8d3.html","bdeff653c8522a0668e3fe28e8ab8d04"],["/posts/8a7cba10.html","da44f974b7b4478c7087b3dda1a5465b"],["/posts/8ac11b41.html","41deeb5a0a6a131564d0b1f8f92c47a7"],["/posts/8dd520d9.html","6b043b220640f73fa49f36d32aead183"],["/posts/8f555654.html","6da5812d088811f502b836cfec58d293"],["/posts/92a980c2.html","8da93945869ad57473c3fdc83f8ef41b"],["/posts/92ce16.html","d0ad3a1164ae6a3c98b58f37dc687a8a"],["/posts/93e9943b.html","3f5a618e61b8151da137ede8d390e9d1"],["/posts/94d3c794.html","3f7b8654673161b793c1e4c43cc1fc62"],["/posts/97f50eea.html","b00da0a16424b955fbc910cd2f917436"],["/posts/97fca8be.html","9ab744b58433f619d9590772eb001e2e"],["/posts/98662d05.html","ec45a3c39721cc0025fa8881c69f019c"],["/posts/9a2f6162.html","f90c624843cd900dd0a373a3f03563d0"],["/posts/9b22a48d.html","047ec223be39d5c50219532f23e7a4bf"],["/posts/9cb455b1.html","e84865cc452aa4418569cc86984a5b05"],["/posts/9ecdeecc.html","38b91317ba213c615a2b8bb15aa2721f"],["/posts/9efd7701.html","cf6a213ae976a3bb80626c885023dfd8"],["/posts/9f61c1a0.html","2749fb7052b7a4081e5fd529e8cdf196"],["/posts/a1de710.html","2aedbd9128c431bc6784936da3ffb366"],["/posts/a30eb0cd.html","57b72bafdbc669c2e0dc2f3802d468a3"],["/posts/af1807ef.html","d07f985cd76c1d5eb7073cee1fe615c2"],["/posts/b497b647.html","4b59f84444ca95f54b466513f1a5a0da"],["/posts/b4d464b0.html","ac5d62ae080614aa20e884d4b2497941"],["/posts/b5fb773f.html","c22020606834d87f9614b0f79e55af22"],["/posts/b8d46b32.html","3035dc1111a4f7df3c6682179d0a2c9b"],["/posts/c1b2c6c9.html","32dde2478d468ddd361aa095f55f8467"],["/posts/c2111cbf.html","4f7bb534152f472ee71a7ae48a23d871"],["/posts/c316c2e8.html","f16478866d92c0e2dd762e97cfd333f2"],["/posts/c43e60b5.html","946e9bb224582b00b9f2149570dfb114"],["/posts/c497a412.html","5cff26f3484f5121ddb650a99e8abaa7"],["/posts/c5de299a.html","1794845f1c4ba02fb55b3ec88cf05a3a"],["/posts/c70bba9c.html","7794181f0cb235ba0e7ba85acb96118c"],["/posts/c797535e.html","c32a113b4ba29f1d32123e2b475cc899"],["/posts/c7a62c79.html","6a507d493d091bf10584fc601c49ec66"],["/posts/cae2c959.html","d9cab387a5615c64aa08af61fa05038c"],["/posts/cbebef2b.html","d65cee758be2518e2e0a459d07d06371"],["/posts/ce25023e.html","efc0f50792c75e0c8730888b7f8dcb99"],["/posts/d2fd4837.html","090b33f5ee3de7001d51023fe399ff4b"],["/posts/d3233cbb.html","d00e7aacdf3c74c41966609a0fd16ffc"],["/posts/d3a745a8.html","24d37dc1a2b9a71c6945286d84046466"],["/posts/dc815d5.html","2c97cd17ca9fec9c57a1cd92ad848d67"],["/posts/e3ab6ad8.html","8957e70c245c1016d4ee6a280618e819"],["/posts/e5018da6.html","b36fd702a31f3098863df4fd4b395c10"],["/posts/e5963272.html","7e3b76e84503baa316e53c65fe275d73"],["/posts/e624b065.html","2e240fa745f2743c96dd28fc524c71d6"],["/posts/e7c703bb.html","592f86854670bd2b4819a227119e60d1"],["/posts/e8f14b6c.html","f495349d69331ce14114048ccd5d597e"],["/posts/e91abb63.html","ba786ff580f73fe4b831428ffaaecbbd"],["/posts/ea9a8808.html","661f467c13e3fcb4c6556cce8c97de24"],["/posts/ebaf2232.html","8432d966f649fd6c93d3dab2f973b167"],["/posts/ee1ed673.html","f18fd37ca88f7c2707ca336b2f72dceb"],["/posts/f0c3ed61.html","e262aba4f4c0ed28dbf9e868f82816cf"],["/posts/f21e7f84.html","af1022a54f8006ef5e491b43b053c917"],["/posts/f230b0fd.html","9f6bcac01fde5a4dc8bf4787fabeb2ad"],["/posts/fc04d0d4.html","50ffe9c39edbb6b9b01e7b3991bece4f"],["/sumire/index.html","2e6924aac2bd750ba80e8233ec762c48"],["/sw-register.js","7bdbea497a48ce2bfce8a219475a0dd3"],["/tags/APPLE-project/index.html","953474aa55f9a1b14d5039081ca15977"],["/tags/BELL-DA/index.html","31b98a0b222fc0a1676406e2f1f4cfc1"],["/tags/BL-Game/index.html","31b66bb778b40816d6ea36e34a30f08c"],["/tags/Blue-Dahlia-Digital-Creators/index.html","816b1448f74a7bf30a26c95f3826b96f"],["/tags/CHUNSOFT/index.html","4c69f10f1d85cce000866c9ff8d6e553"],["/tags/Cherry-Pie/index.html","1d84f9cd078ab4480654f9b5abf658b5"],["/tags/Circle-Mebius/index.html","fb87413267fa8855ea8c824f0cdaf6f6"],["/tags/CresCENT-BLANK/index.html","3b08f50d01c783bd729a34868c1328b8"],["/tags/Dopamine-Software/index.html","33fe0139002c021061aaa2829450038c"],["/tags/Dos/index.html","626cdcf3e689ae82ecd297b5202ada77"],["/tags/Earth-Well/index.html","01e48c7edd66f011f28187ef10b64ac4"],["/tags/Kanon/index.html","dac2ef86a6dd2ad3173d1dc0fdc40f84"],["/tags/MANATSU-8/index.html","9ca733ecb062ea240b17951ed7171d76"],["/tags/MIO/index.html","549d6494bb9f8e74713da3bd9a6014a0"],["/tags/Nmyu/index.html","978769975c469c596a40343f773719d3"],["/tags/O-S-I/index.html","f161129bbd3c5c05b21f0a8dc04b52ba"],["/tags/Omegaの視界/index.html","c068f489fbf788d249c4ae2839820e25"],["/tags/PC88/index.html","b765efbee2be888c02675a44111af6b9"],["/tags/PC98/index.html","8972c7557a632fe1b8643666a62638e3"],["/tags/Perpetual-Room/index.html","571c0a7c5c46b7039845734b739c013c"],["/tags/Pleiades-Company/index.html","2fb1973fa8343c13e2ffdea48546b285"],["/tags/Project-Twintail/index.html","5e13d270a0daf648bb9b97a3ca6b7ffa"],["/tags/Reverv/index.html","1b1239a23c7172a6502cd0c8726dc7c6"],["/tags/Saihate-SOFT/index.html","7347eb33c8973f4bf9b45be79e7ffa27"],["/tags/Sky-On-R-imaginAtion/index.html","d86bfdeb943cd4e249adfe4c97df3a99"],["/tags/StrayMoon/index.html","b0ebf925e178c4f66a2e83fd3435cecb"],["/tags/Studio-Bu-Sa/index.html","3d8ffdbf00b67ea5adb3cb8d4f71910a"],["/tags/ToHeart/index.html","044d51007f82d7362d937860f61db642"],["/tags/Traumend/index.html","9bfeb33819a4304d79662fe6b938fb65"],["/tags/Witch/index.html","353f04862a0b51cdfed56a8d76c7b1ec"],["/tags/adonis-project/index.html","4282678873675e4fd90776b712c51f42"],["/tags/flash/index.html","73034c3460a43f088ab176407a823872"],["/tags/galgame/index.html","98261e2902962ce8795525376d1132db"],["/tags/galgame/page/2/index.html","70b2d82118a7ef9b203dae68ffc99f18"],["/tags/gal资源/index.html","ecc0dcb141c5a15e27b65d91f24f421f"],["/tags/gal资源/page/2/index.html","d2de92a7945b1d0d830e410beb1080a8"],["/tags/gal资源/page/3/index.html","0af49f7e324f6a9a51a67ffd5ac0c14e"],["/tags/index.html","17ec8c6175b63816ec8acc7847b35f61"],["/tags/rkr/index.html","523f62d5626c656ad32e9e2e8cf8bffb"],["/tags/team-eye-mask/index.html","ff9f4a0c34b089ba5195d6995b39d9e7"],["/tags/ありすくろいつ/index.html","61008105c557392cfd4c63f36b22b589"],["/tags/いつものところ/index.html","4dc7e05d308d47dc9c17df927f58d1d1"],["/tags/きつねみみ饅頭/index.html","312e3c9405cd1f3876c0911fda4ac58c"],["/tags/ねこねこソフト/index.html","0c4ada1945cf12424b68919104df14c6"],["/tags/ねこバナナ/index.html","f3c7e23830525545c8fd30e1a9493a4c"],["/tags/はちみつくまさん/index.html","e3f42db11c370cc5d8b9b3e63696f38a"],["/tags/ろりちせ/index.html","36d4a973161a154c699b096dc11705da"],["/tags/アイル【チーム・TATU】/index.html","7eb94308cd22a3563c5460dd80ce2528"],["/tags/アークシステムワークス/index.html","e0e278f6d16aa1baede271aff5f80646"],["/tags/ブロッコリー/index.html","12f1d47cd654839b1047b4124d9752d9"],["/tags/乙女/index.html","71c338de7e56d3f326b90b539d292b87"],["/tags/停产/index.html","d22eb97888cba568f3ed968ecef772ed"],["/tags/公告/index.html","74dfaf47c6122fa08e36c1bfe51dc86b"],["/tags/同人/index.html","08d0d4bd4de48d690bacc425a09bbf2d"],["/tags/堀井雄二/index.html","25dee909e9bf2bac647629239c3bba34"],["/tags/外海なおき/index.html","7fcbdd590a318c08ad579b993c647f0c"],["/tags/機械式少女/index.html","b344e6f8e0f3e6f46284c7e7b9d6ab30"],["/tags/水仙/index.html","fe4c762c7d24cabb1e12b6be4e3207fc"],["/tags/汉化/index.html","06ede8c30e5895a0aaae9a355e226720"],["/tags/片冈智/index.html","81089029aa2134f2b7474a3f6ef66537"],["/tags/片岡とも/index.html","ab47621e93b267b47886e361ce494745"],["/tags/牙の刻印制作委員会/index.html","bed213f2057a694270ee1a97a4563f6b"],["/tags/牛カルビ定食-FLAT/index.html","b98e88b30129e8b7dcccb4e5de32d31e"],["/tags/牧尾屋/index.html","3f5fb283c6db1523eac6faf65c279656"],["/tags/猫猫社/index.html","984a7872c2d1616606711bb1534d222a"],["/tags/王宮魔法劇団/index.html","0600d1f5d7e927ec20dc59a975d596e6"],["/tags/画集/index.html","d5070ab930a7f0c1ae7d75534a7871ad"],["/tags/索引/index.html","7ca547992b92aad65894e97b42c51555"],["/tags/自购/index.html","a64f4c73f23f7c1caef16551cf2b1222"],["/tags/郷愁花屋/index.html","35bf43e6f8affb4fdbd07f9c776f3ec2"],["/tags/閂夜明/index.html","19edd7c2529e88e599923c26d20f74f0"],["/tags/音乐美/index.html","a09a4f93889fbcf395ba88edfb33968e"],["/tags/黒†救/index.html","6986dcbfb80e85e6f50ec61d55a68226"]];
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
