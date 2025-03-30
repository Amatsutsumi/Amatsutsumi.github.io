/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","331350ffbc815c31e61ad5002e762a36"],["/archives/2024/04/index.html","e8dadc86a96f523405900c9440d9c563"],["/archives/2024/index.html","c45b4c8e4db1adfb271db0447412de76"],["/archives/2025/02/index.html","80bc12722b8e49fcd8300f3cbc43fdf3"],["/archives/2025/02/page/2/index.html","ce7e4642eeb581e3aa5a852db4c8d87e"],["/archives/2025/02/page/3/index.html","21150cc5e70f85c3154e2257049e3d3a"],["/archives/2025/02/page/4/index.html","74e9c5febc93057591cd3eddc3832fa5"],["/archives/2025/02/page/5/index.html","bf244f5f7267c4ea635dee6c6e04c0c1"],["/archives/2025/03/index.html","b42cc05368c7212edf0da282a552c069"],["/archives/2025/03/page/2/index.html","9e06a1b2a04efcdbccd70b160873c51c"],["/archives/2025/03/page/3/index.html","a48ffe11d21899ab1ddd0ca9ebf64594"],["/archives/2025/03/page/4/index.html","2537aca374f5ce5b28431dbacaccfcc6"],["/archives/2025/03/page/5/index.html","f5d00eeb8570ea4cd4d84812cc49947b"],["/archives/2025/index.html","774b1c4017702a3a44d214b10bf78d7c"],["/archives/2025/page/10/index.html","eb3f1d9f924732c338ff674c6a491653"],["/archives/2025/page/2/index.html","3b9dbac8e56cbd5e80832e23db7b01a9"],["/archives/2025/page/3/index.html","da9b03644267ac27a7570f27f492c5ba"],["/archives/2025/page/4/index.html","47daccf9ec5f11789f878ee345892d77"],["/archives/2025/page/5/index.html","47eadefae3c1a9e37509d8a5239d613d"],["/archives/2025/page/6/index.html","8fdefc823acaf022f65187bfedfffa93"],["/archives/2025/page/7/index.html","7d813ed52643146509e7ecfdf91256b8"],["/archives/2025/page/8/index.html","a9d68e9c44f95a8f6587d84c13e4500a"],["/archives/2025/page/9/index.html","1785df2bdc18c2850b228e34dfba26ec"],["/archives/2026/02/index.html","1b220145ea9a6a2ae2578366893e272d"],["/archives/2026/index.html","e7ff33caf559cd5c3ce2221e7eba4144"],["/archives/2925/01/index.html","c026c7007f45732e49dd71648f4a8b0f"],["/archives/2925/index.html","b0f1ca9671b618469ade6195a138181e"],["/archives/index.html","683d010d86c2993e07a0943c779d52a9"],["/archives/page/10/index.html","d028d76b7c8cfc0004f1fb8a11a5fd90"],["/archives/page/11/index.html","808d1f44bd65ea6b59d3b524543f8e03"],["/archives/page/2/index.html","af89a2689dce8789a13fb3115d0fb83a"],["/archives/page/3/index.html","074793386f25499a313f875288684840"],["/archives/page/4/index.html","03297db0c77ad47b2042cec03d80410c"],["/archives/page/5/index.html","b270e777bd9fb2be7694c0d70719dd25"],["/archives/page/6/index.html","874ca2b29a1d761bc9b734279c627438"],["/archives/page/7/index.html","df656e83d8b297abe3a8882edee039c1"],["/archives/page/8/index.html","8609713982d25c691c6a9415d16e5ca3"],["/archives/page/9/index.html","2bdd03c8b74ea95b708d6cd08da71de0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","d874aad111a334a11a91ea4c719cf6e8"],["/categories/galgame/page/2/index.html","35abb14915e9c24f56550487bb28cccb"],["/categories/公告/index.html","5bc1076fb2d9d1169ab397c005b1d39a"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","cb3759099077dbf35e3f9cab010e109f"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","97a969796960e17b9fbced09b88dddbf"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","481483fce82cb71323c62be18043d587"],["/page/10/index.html","c34be1e0953693461a6c63373ca16b71"],["/page/11/index.html","972e477da44a84a5dff22b7e50a1f95f"],["/page/2/index.html","c6b7a3fdf252b8d695fb43cb5c7ec488"],["/page/3/index.html","e256ceec6d9b38a7649a8be01ac8cd36"],["/page/4/index.html","e287ee212f65080f203d1b21f12bb2a9"],["/page/5/index.html","1e0f0a4256827e78defc70ad9b05f3e7"],["/page/6/index.html","56858746cd1d13d769fa7fb8c0cf8934"],["/page/7/index.html","c1d112ca6d64458cd5388180afc46022"],["/page/8/index.html","21a89b62c6d347dc3fb2b7e6a3bee393"],["/page/9/index.html","ff221a7fffa9ab01c88572451bb5cbf5"],["/posts/10c9dd98.html","ca9755fa32e747262a77d611907b7897"],["/posts/1295b569.html","07e7b9fe79ff81d61c6373b7a73b82cf"],["/posts/1370342.html","5e15270f29ef3613863f06c6ce057afb"],["/posts/15ef14c2.html","665a63914c98962259f54e74b89509f2"],["/posts/15f3959d.html","811cc4c9fcfabc0374d9d48c69ea060d"],["/posts/18ab785d.html","c3c926a41159a10c8a80ae939f71510f"],["/posts/1d59b71f.html","9ffa17d2126122c3dc86a4920984039e"],["/posts/20b3f3a4.html","86940308942915373e39d8d477564459"],["/posts/245f1c7d.html","ec4df332c708829132f5b9dbdca656bb"],["/posts/252658f.html","a45001c2c6f3abf75fff45467eee2239"],["/posts/28397adc.html","0df93562a143b5d4b14cad611c1b4b05"],["/posts/2b38bce0.html","6daf0d218574f2a32b736f5fd2937e9a"],["/posts/2c0a6836.html","929d8fd37cb50017144d0e67aa31bce4"],["/posts/2cf620f0.html","62e15aa44aa659498521fe0b0b4f138a"],["/posts/2e30fd6d.html","27bcc673dabd6d800dfd7304b08b5069"],["/posts/34292736.html","e8e47888b61748fce8f08eaf5969da5b"],["/posts/3468cbe.html","222d15d11057787cf8bcca349f2e9cde"],["/posts/3e118dbf.html","536b7fcc629609efd08bd69b1ddc06fe"],["/posts/3f7d823a.html","42bd1c320070be2f2dc091cd15ff8579"],["/posts/43945723.html","977ff64c02aa94aff5c704fefff9278d"],["/posts/44124a6b.html","2852def1dcd433b0abfbb09886df26fb"],["/posts/47abb61d.html","7771293587fe80121ef63d56211d59a1"],["/posts/4b689be3.html","c0b8b5b90ef425d248f17a0c6548476f"],["/posts/4cf8423f.html","9cd6825ce8e78c7d851b1ac2c2951f7b"],["/posts/4dcf85c.html","6609da163f64c8abdb181e0cf12c022c"],["/posts/500cd322.html","1160b566f2dab0a0e2a07e11183743af"],["/posts/51c9b1ff.html","d13123cd64134816016b0cd8403d52bf"],["/posts/52b5b3c6.html","faf3c936ca09233e7ae15be0eccd9c64"],["/posts/5f6e0c59.html","f4a3fbc7663686180dda9680fe086422"],["/posts/61a63a84.html","c85a93d66a9d1b43c625df430540b8a4"],["/posts/6336a2f9.html","f9da81924d9887f3c81e36a4892d9219"],["/posts/6432d61a.html","4d4e05a675217fe363154819d520cb5d"],["/posts/6515f032.html","f595cf2886d1259ceb2aa461937784d2"],["/posts/6720ccdd.html","ed82fd2326801ace523014f56021341e"],["/posts/6a4b5ac8.html","9c42463473f7215d88b8af0517b345c8"],["/posts/6aa4177c.html","2f73e4cc09e9289e3a65c4160084a9ec"],["/posts/6b15f81f.html","e0dd1deae0b2da3716e3f4f091551fef"],["/posts/71131d34.html","bd2a50270f55dc97b7c585b179cb553f"],["/posts/78a8a8d3.html","4e3fa7757215fe2f9e6c88d332ed8da1"],["/posts/7a5ef3d0.html","f4de735a343e8570b0291bbf473a9c74"],["/posts/7b41e1ac.html","c46acbadaf6dec56ba8de7d00daa5fab"],["/posts/7b51011d.html","ce87b780bcd59b867a2def6f6ea85113"],["/posts/7e3aa3e2.html","1ad9e29bdab003a89739795d9f9c53c5"],["/posts/80fe2691.html","ab008686e32aedf01d75450d715ad547"],["/posts/81ac52e9.html","4867fccb7035b32e1a9a2c743a9137d5"],["/posts/8486f6f9.html","4604ce90eda6ad1f2b7d647a915253c0"],["/posts/849b40f8.html","a26265717602a8c51a6a5957b5d5d5cf"],["/posts/85c51d68.html","c0eb8e6e4f19e197d39686187f26fdac"],["/posts/886f8d3.html","463e7dd0207ca5ec8e528329f6e4372d"],["/posts/8a7cba10.html","4f0854256d3cd377d273a5152aff1459"],["/posts/8ac11b41.html","c7d8f716f4911e672c196f44b0857563"],["/posts/8dd520d9.html","64042206c7d6b58e956b51de9a4ea6f9"],["/posts/8f555654.html","1ec93ee1caf0a035e56743ff550043cd"],["/posts/92a980c2.html","1a08c6fc28ec8d6408b7e21bf66dca7c"],["/posts/92ce16.html","d66b90470e505785a0b5c0e6b854aa9d"],["/posts/93e9943b.html","bbe86b1209a50217da39dc21e30a5df4"],["/posts/94d3c794.html","d74d007aa8220c137a1526122a4fbe29"],["/posts/97f50eea.html","7d64cef9c6461d4e3ba82516f663a93d"],["/posts/97fca8be.html","c346858a325fb6c81b87884bb31b8e9b"],["/posts/98662d05.html","a326b7120f33087a8ff9dd2e85e1779a"],["/posts/9a2f6162.html","5cf5821ba47676e7607796fabb6b044d"],["/posts/9b22a48d.html","644215fd051af03356fe85c125878bd1"],["/posts/9cb455b1.html","edc4ebfa0021f4821461257cec48fbd5"],["/posts/9efd7701.html","6822f6ac28fffb70a368cbdd10f1d99e"],["/posts/9f61c1a0.html","62d9c53ec6c0bfc7c69a46c36f1c845e"],["/posts/a1de710.html","7649992f903aafa0132ab514e47adf78"],["/posts/af1807ef.html","f4bf34a4b281d3a6fddb9b71b343dd14"],["/posts/b497b647.html","d245486c70d82f088ac4f515f16d386c"],["/posts/b4d464b0.html","2215617d4379706f5acb524aa0818bf6"],["/posts/b5fb773f.html","39bb3503625d52c2cc956cbb8ece2b78"],["/posts/b8d46b32.html","7aad1b9f5e3c696c412d36a35467c3ac"],["/posts/c1b2c6c9.html","723aa2863bd29724c4d7437c6a2e49c2"],["/posts/c2111cbf.html","820bc4550961111a4f0309ff6d23e704"],["/posts/c316c2e8.html","34e056bc336f0f1b8bd7b92cf10118d7"],["/posts/c43e60b5.html","3bdbe60df15240cd88c3dd1352b1547e"],["/posts/c497a412.html","e7da6c8a4b44fe5fca1637b22bc30e2a"],["/posts/c5de299a.html","e6ef69d43bb88544ff36de9ffea1a160"],["/posts/c70bba9c.html","edcbea313bd49ce1870edc3029bdfd7a"],["/posts/c797535e.html","9df9d80e367448409f86ff1fe6d661c2"],["/posts/c7a62c79.html","f99b9d5c425b45c9d3815e5dae446aa0"],["/posts/cae2c959.html","bb95dcbf931adfeae981268e32affbd9"],["/posts/cbebef2b.html","2114f7ee09ff797ca7f16639d105ff78"],["/posts/ce25023e.html","5240973b62ac8d4b57cf1a236904eacc"],["/posts/d2fd4837.html","c8e66d1b20ae020ca854ac5a4c63deae"],["/posts/d3233cbb.html","29123b4dba45eef7b7c9abf3f5e0e539"],["/posts/d3a745a8.html","7177389d98e4551ab062a4a015c23295"],["/posts/dc815d5.html","944db09204ae0d00cc71bdde18747692"],["/posts/e3ab6ad8.html","1333dc41d2e380ff37f734ac11d0b7fc"],["/posts/e5018da6.html","90c3840037934398715894cfb5c6dfbd"],["/posts/e5963272.html","2ef84fdb58ebaaa1ecdb0e22f10ae57c"],["/posts/e624b065.html","6496017bc3868078278200bf3c87da9e"],["/posts/e7c703bb.html","76eaf8513226064de460bcdbf72572e0"],["/posts/e8f14b6c.html","c8f309ac3cef2408806ce4f20eb1f991"],["/posts/e91abb63.html","895ce8799e56d756f36a4857869c315e"],["/posts/ea9a8808.html","3aec3402834a10f32b60b7d4f46528fe"],["/posts/ebaf2232.html","371ae1219c13b0b35a7d5aff1dc6ce34"],["/posts/ee1ed673.html","479623b4cd9f42bbfde596e22fe815ec"],["/posts/f0c3ed61.html","163201f4c4a9405a6462e958decda890"],["/posts/f21e7f84.html","cae61e5025d7da9d9c9f549bb55af9eb"],["/posts/f230b0fd.html","d370c84837a6400780f6b5d4309a8f8b"],["/posts/fc04d0d4.html","06fa6b824c0c0036d8bb9805302235b0"],["/sumire/index.html","95a43089fd6fc6412cb83680f6a056eb"],["/sw-register.js","067980d22b4ad17016cf85623c87bcd8"],["/tags/APPLE-project/index.html","eeb4664889a84a0cd0e5c212a011aad8"],["/tags/BELL-DA/index.html","b35b25a23210ae3954a7ae33b4e99e61"],["/tags/BL-Game/index.html","96cf426dc68296a475948dc94f645e98"],["/tags/CHUNSOFT/index.html","b2ae5f166729530161865a114f754f30"],["/tags/Cherry-Pie/index.html","03d9a446f7e600836d2b7a8e7523d3a7"],["/tags/Circle-Mebius/index.html","7ed42ecd3295b19e547b547a943bb63c"],["/tags/CresCENT-BLANK/index.html","1e639b2f9c16c8327bfa773e73c0febe"],["/tags/Dopamine-Software/index.html","bbdc6787e31c38f0348d25126e24d304"],["/tags/Dos/index.html","0d3f1d966908a40948c1806ae8cf2a91"],["/tags/Earth-Well/index.html","ff8c6a8a5dd2c0c581eedae19494cd9b"],["/tags/Kanon/index.html","0ed7c26a11cfca54a1170b3d07b0e927"],["/tags/MANATSU-8/index.html","9d766dec89bd7b16b870704f7a743ece"],["/tags/MIO/index.html","28b223d808bdf68fb36ff8389b5eb205"],["/tags/Nmyu/index.html","c0359291d571bfc68546d5fa85709938"],["/tags/O-S-I/index.html","8c383f4718bb31c418e9b348994bba2d"],["/tags/Omegaの視界/index.html","db1cb0dd10fb4bd511c8efd731cf28a7"],["/tags/PC88/index.html","7c8b99f44ba7ef0f277b326e06213cad"],["/tags/PC98/index.html","f407e49e15e6a1a97d168e9777ddb7bd"],["/tags/Perpetual-Room/index.html","21f781404bd93b7e40ba3f33a2380772"],["/tags/Pleiades-Company/index.html","0563784102752a8c6c3c963cb57dd099"],["/tags/Reverv/index.html","aacf7058b8a3cc943de17af4a1c4b2ad"],["/tags/Saihate-SOFT/index.html","8cc1d6ebc22557354f42f59735d02434"],["/tags/StrayMoon/index.html","b2b9c6a4f793d1d366df4904e9ff9b56"],["/tags/ToHeart/index.html","2bb785211b82c1c53de7a33544b0c09f"],["/tags/Traumend/index.html","bcc6b6903dc03b87baa1d548697e87ba"],["/tags/Witch/index.html","9d496ca5972da28a06033961f24609d2"],["/tags/adonis-project/index.html","095266e15f936600773539021a8bad3c"],["/tags/flash/index.html","dbfc113eaa38da5709edc530226eee4d"],["/tags/galgame/index.html","228608abd707939a26358c1a0b37d75b"],["/tags/galgame/page/2/index.html","93090b3779df9f0654d2420a60e0f38c"],["/tags/gal资源/index.html","c4021edb1592f2a2235c9bdb8f277b39"],["/tags/gal资源/page/2/index.html","6bc9bbe31e13b3b7b2a3b344d6721e5f"],["/tags/gal资源/page/3/index.html","a819a2cc666ad19f4c49e754f870f22e"],["/tags/index.html","7433742add131550a9a4bd69a23b4618"],["/tags/rkr/index.html","439b671414505ea1b01cd7159fb60d77"],["/tags/team-eye-mask/index.html","63ec3d12ad148d8ed31efdf217dba6be"],["/tags/いつものところ/index.html","62e911a901db8f094a0766249ce09943"],["/tags/きつねみみ饅頭/index.html","ae601abc3e218a0163d326d262e25608"],["/tags/ねこねこソフト/index.html","f8289b1f11e31accedb8e917e044c409"],["/tags/ねこバナナ/index.html","997d868f6d1d0b9aa500c845a65e79cc"],["/tags/はちみつくまさん/index.html","6e430e1b8e1fa7f43ec4bc101c1a6242"],["/tags/ろりちせ/index.html","98c0b93d3dd00dc1850c1932fba69109"],["/tags/アイル【チーム・TATU】/index.html","741e680ade9352d5fa402410cbe489e6"],["/tags/アークシステムワークス/index.html","d54db6dbb6643debe7feadabe84c42b0"],["/tags/ブロッコリー/index.html","7781ea489d49c3bc21af855cccc969cc"],["/tags/乙女/index.html","732cf488cc1c4b8c44ec6ff448965ede"],["/tags/停产/index.html","cd15898fb75f378a21aad8e5296a5d1e"],["/tags/公告/index.html","3747acc0057a7176bff31c887c32def1"],["/tags/同人/index.html","262a653e36cbe2e1a7461633dd400dc1"],["/tags/堀井雄二/index.html","d2afd4e8535e7d52cda3a0121f893867"],["/tags/外海なおき/index.html","9fb3c71f77e523009c844edd7e1e8d46"],["/tags/機械式少女/index.html","29d9482a50231225c97cc5ebbcee3a0f"],["/tags/水仙/index.html","3ff4387689c7544ce8ba446130a372f5"],["/tags/汉化/index.html","3d57522997da22e0f19575aea6606508"],["/tags/片冈智/index.html","30bb55a61be6bd118e2a649c0bfdc1ea"],["/tags/片岡とも/index.html","81356c05ac0d3f3260331748a219f75a"],["/tags/牙の刻印制作委員会/index.html","377a30c308d3baf523e72aaf37273d0b"],["/tags/牛カルビ定食-FLAT/index.html","62351d98f2747457b7ea412d9bc1311f"],["/tags/牧尾屋/index.html","7ecde44bc0cca3d49b1a289078e04c9f"],["/tags/猫猫社/index.html","73dd85efc605acb7191b727c29b5323c"],["/tags/王宮魔法劇団/index.html","2387fb6ec2a47b1fb145b43713e5a15c"],["/tags/画集/index.html","3366365d45798d69ba2ecc1e6c85cb76"],["/tags/索引/index.html","f39c276f7b22ae6a91435458685e2c25"],["/tags/自购/index.html","aba6e7e44fab1ba0531bc438bb1491d2"],["/tags/郷愁花屋/index.html","fb1e3b9ad497fd824a345262d34b2aea"],["/tags/閂夜明/index.html","163858b9fb09b4c3c52c2c0515b56c5a"],["/tags/音乐美/index.html","9286d7696c966f5382b3e8c7aaf389f3"],["/tags/黒†救/index.html","dfabfc71a4d1f641a682a877f8248eb8"]];
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
