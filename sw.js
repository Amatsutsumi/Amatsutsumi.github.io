/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3da5b94e64c4d5a0d23b0ecec11ab98f"],["/archives/2024/04/index.html","813f70e96239c0a3e68018bd40634005"],["/archives/2024/index.html","22c9dfd824ebb171e6f60ba16e7d1a4e"],["/archives/2025/02/index.html","d578c0dee9f067de9875ff06a6981ccc"],["/archives/2025/02/page/2/index.html","0148828f532a3bace1c27f3ce1e8c692"],["/archives/2025/02/page/3/index.html","e3ff8ed8693dada660f97e4206a1cdb6"],["/archives/2025/02/page/4/index.html","219328b53b463ad8613c68b5a76950e8"],["/archives/2025/02/page/5/index.html","14862b458cc57f03d1d8dfd3b6560ed5"],["/archives/2025/03/index.html","fda1b7831a3a226dc6b1b29a49f4c5dd"],["/archives/2025/03/page/2/index.html","89e2366ba0d568535fe12e0b3f6049d4"],["/archives/2025/03/page/3/index.html","bc24742773f098adf875efe6983c3602"],["/archives/2025/03/page/4/index.html","a418d65a8a384fbddcea0ce46e954d62"],["/archives/2025/03/page/5/index.html","dbf3fb7a431643332354504afebc273c"],["/archives/2025/03/page/6/index.html","2e641c5f65ff0627d5ed7354f68750c0"],["/archives/2025/index.html","7c586e6b50649133934da9aebf43cafa"],["/archives/2025/page/10/index.html","17694f2c258cb7fb603d1e948e937c90"],["/archives/2025/page/11/index.html","e30aa0dcedc6eb6f1539b44ff79edd49"],["/archives/2025/page/2/index.html","43f840b19893ea6c648ec1b2f180221a"],["/archives/2025/page/3/index.html","4cae2158208ca83b444dfc7ccb4868ed"],["/archives/2025/page/4/index.html","1b188da4c0cb5e069fbbabb0ad106737"],["/archives/2025/page/5/index.html","6a7f86f1133a84f84465bf66d36103d4"],["/archives/2025/page/6/index.html","97552190b165f65eea9c213c9c532de6"],["/archives/2025/page/7/index.html","693a0c06022fd29b3447ae64deb95899"],["/archives/2025/page/8/index.html","0224b2fedfe8672efe5f332797e5147a"],["/archives/2025/page/9/index.html","cffd143e43a0d0846e3d0b6ce68774ea"],["/archives/2026/02/index.html","cfdb0fee55b5d5ae21d53bb0c187f63f"],["/archives/2026/index.html","5f47217fb097f06b579998e8dd08ab9e"],["/archives/2925/01/index.html","ae4ce7d5fc7d3a24889fe99b384e0e81"],["/archives/2925/index.html","79bf95604cd4c7615b9dc4eece4a6ee7"],["/archives/index.html","bf946036628a92b1d00f3afde412ab83"],["/archives/page/10/index.html","c9593504b92927d2de380fd66c69aea2"],["/archives/page/11/index.html","08f7c237329c1376cd5330661189e11b"],["/archives/page/2/index.html","cf7b6e84d45c0e24f8e8f7d966d56702"],["/archives/page/3/index.html","f62e63cb2850ec30c45b28aa8b16f194"],["/archives/page/4/index.html","eaa147ff634de3ef1a34c9130ed5f531"],["/archives/page/5/index.html","968b8b3a7852bba9091554e58579672f"],["/archives/page/6/index.html","cd5c2821c0c54510ce45ab90ebd4ed6a"],["/archives/page/7/index.html","3c7cabf85f63cdf2a507aa5ed0b19733"],["/archives/page/8/index.html","9c3e780b1a030719a2fe1059596fdbbf"],["/archives/page/9/index.html","775fe20e80d9dfb99b59a031b5e98a4d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/galgame/index.html","6288a3753025d5ee353e1398f4e8b467"],["/categories/galgame/page/2/index.html","8237ff3c680efb6ca5efcd9ad96a9406"],["/categories/公告/index.html","a86b55476f6e4df0173a1724a241c15e"],["/css/custom.css","a55a85a2bd0986c6b88ca28ba45095d1"],["/css/index.css","b5da52348f6e8a7cd7ac183236321953"],["/css/mouse.css","1a0f4a0fb5bdb8850d44016e98330fbb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google0a91264fc62f14e5.html","dc1025aeb3e9108a495b68544a03d671"],["/img/1avatar.png","4ea845c5b3df7a5a76dbfa7243ee6f8e"],["/img/404.jpg","820c1576bf7ce853d8ec8c3fb889dc5e"],["/img/Wechat.png","55fa0feba0d1ffb9cb2e58501c719297"],["/img/avatar.png","72f2710108ff4160fc928066833cf937"],["/img/favicon.png","146e8f6f946cf7096e1290b9daec7766"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/top.png","4460170855a00f1585b69fcc9e92d66c"],["/index.html","2d2feb659428d030544dccd22091c5f9"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ceccc66b09903c22de6f4bd91359e6cf"],["/page/10/index.html","c2e0820b1f5255f5a960f30790c6cdb1"],["/page/11/index.html","7e9b781baf9cc7484066e2cda3457136"],["/page/2/index.html","69909ca83087aa69baa38a1c524387a9"],["/page/3/index.html","639446d0698e6461d90392054feddfb3"],["/page/4/index.html","373e9b10c3229e9d2b53650432789ab4"],["/page/5/index.html","3f7791ad73456b69dfcbff7fa5e3ad19"],["/page/6/index.html","9ec281703de9416d9348989bc6af60eb"],["/page/7/index.html","a58040c5f7685732decaca52001800ba"],["/page/8/index.html","7eb5e15240f8578104003de16fae89ca"],["/page/9/index.html","b279fa83493b39a2a35952a21e265c95"],["/posts/10c9dd98.html","d441ffea40e25d7064aaa089fde4d323"],["/posts/1295b569.html","f5e3d54ea0292355e3297c6a3f3077ba"],["/posts/1370342.html","0cdb86c4ababea4e69b478809df0c2e1"],["/posts/15ef14c2.html","cafe808626488f51c56b3d8addbd8587"],["/posts/15f3959d.html","179a3ed6f8f74a5155572a05b1644bc4"],["/posts/18ab785d.html","360f01ee246e6f4f41dcfba6e208b31f"],["/posts/1d59b71f.html","68e1b6d3d0855513fe7e7e2772ae5d60"],["/posts/20b3f3a4.html","ff6289206c1caabdb7dd390ae815938b"],["/posts/245f1c7d.html","382c46eb526885beafb2e8e09c301543"],["/posts/252658f.html","c35025d32691e363aa28411e49523f4e"],["/posts/28397adc.html","8eb7406cf42ccedb81f138cae60fe855"],["/posts/2b38bce0.html","93d5c401a394d69594e8669ee65b8d4e"],["/posts/2c0a6836.html","b75e94b4a42a21fc531f0de381a4c100"],["/posts/2cf620f0.html","b029a0dba50eb093adeb8ec86e6dbc44"],["/posts/2e30fd6d.html","0776d2a93c4ed8521b5e63419f6bb066"],["/posts/34292736.html","a62a78a53bcae49fc0496eefebfe9403"],["/posts/3468cbe.html","d3793ead5d80ba0a8e65b4584e8394dc"],["/posts/39176dc0.html","312a52a4d6dc6a65494a777c6b5f19ca"],["/posts/3e118dbf.html","6ef46a06e084379791a47ae32fd6522c"],["/posts/3f7d823a.html","fc17c14490ba55a6fe342de44fe96f70"],["/posts/3f978819.html","56b7711421a85a1b4335e8d4b0daec41"],["/posts/43945723.html","e8465fe9e1bcfbc94b9ce147dd4df87b"],["/posts/44124a6b.html","92cd549b034b768d1edcad9b0deef075"],["/posts/47abb61d.html","8d9a82a04c42b3c2aae09553b89da427"],["/posts/4b689be3.html","e81739e2e3bc9622faf08615e03c4465"],["/posts/4cf8423f.html","7640fd25d6a7f25622b4cea46aaddffb"],["/posts/4dcf85c.html","f9cb81222eab997b386d1ce65c93b95f"],["/posts/500cd322.html","97a1677cb8acb47e0897f8aab45f6009"],["/posts/51c9b1ff.html","3d4ebee49e7a0ddba5c697b37f44c140"],["/posts/52b5b3c6.html","c0140e01850573d85f2b657d7fd9963d"],["/posts/5f6e0c59.html","6eeac2ec560716291e8fa2febd8381c2"],["/posts/61a63a84.html","4355aa31166c8b2c3d69f4ff19509011"],["/posts/625ab7bf.html","925bf16345d3b4d7eb0195ad0c033d6c"],["/posts/6336a2f9.html","adab56ecf89ed99a6a533ad34b654521"],["/posts/6432d61a.html","8388b7a60dd94090b4d7cf675e4cb75e"],["/posts/6515f032.html","a61700363631188d6d9a963d1abf4580"],["/posts/6720ccdd.html","4bf4492f1b0af2ab74413a555313553b"],["/posts/6a4b5ac8.html","cca9efbe995cd59b8517263e9534d56c"],["/posts/6aa4177c.html","edbd127f37247786c1cc389e9294e0e2"],["/posts/6b15f81f.html","633be823f0763da1a2a45eb69ee64899"],["/posts/71131d34.html","f6d20e5881f6f5aa83782b58d0133d02"],["/posts/78a8a8d3.html","38630b931835865a3643f9a7540cdca5"],["/posts/7a5ef3d0.html","9896a2b8ff8bdce0dcbcfcccf2fb1aa3"],["/posts/7b41e1ac.html","8af642a534b1179be5d3d2b4a3829f3d"],["/posts/7b51011d.html","b746f8e43d61a62f7167b6fd98bdf6af"],["/posts/7e3aa3e2.html","88116d27d7261caf46a24dfb11f8f2c9"],["/posts/80fe2691.html","5ffcfbe0b68fa0781a99e35abad24c56"],["/posts/81ac52e9.html","56b4b6f6b91012f4419acdb54de798aa"],["/posts/8486f6f9.html","18d9a8e7a519c8ba61355aa6de20d495"],["/posts/849b40f8.html","7f8231aed9d447f83411efcf68e26633"],["/posts/85c51d68.html","d103fce03523eb2ebbc44b7d0fefdcc8"],["/posts/886f8d3.html","04c72de398180d1153cecb79fc2e4aaf"],["/posts/8a7cba10.html","3309783049d87b7df0c83780bfeb7ce3"],["/posts/8ac11b41.html","ed08ae7a63d7eb4f5b63dc1933dddd5b"],["/posts/8dd520d9.html","eaf7f2a195a8d92ce8f5f991fd49bfc9"],["/posts/8f555654.html","f1f1f41459c6963c8f0f6bfcf6627893"],["/posts/92a980c2.html","dc30c9409cb7bcf261b3e6550a37d920"],["/posts/92ce16.html","5dd5223e88647ff6264702cbce4e4b83"],["/posts/93e9943b.html","fb92675d45810f8a9c3058827a09ae3f"],["/posts/94d3c794.html","81177559f2fe97ea2f711a9e040fd937"],["/posts/97f50eea.html","1b256ad3d9962bdba340faa13509b45f"],["/posts/97fca8be.html","7f8b42f3c62bb441e5946e6cd3f06fbd"],["/posts/98662d05.html","e892ebad6fcfc19e1af2eb3d74e7405e"],["/posts/9a2f6162.html","33001b6728be53204fac4a6a457a98da"],["/posts/9b22a48d.html","1c2bc7970d09418753bcf9aba435f936"],["/posts/9cb455b1.html","f10e6bba3d2031c2bc668148cfd757c9"],["/posts/9ecdeecc.html","97603e5f2aa932aea4f21d20aa7c89ae"],["/posts/9efd7701.html","ba082e9eca6a729861a68bb47b5c112c"],["/posts/9f61c1a0.html","344bb80bb7a721a7b17ba0eb465c9804"],["/posts/a1de710.html","ee345da9be6a801597b1269f03bb8edf"],["/posts/a30eb0cd.html","f79606280995887cb4eb56c17b4d6a9e"],["/posts/af1807ef.html","4bfa90cc2903e56a4e5126206dd8e3c2"],["/posts/b497b647.html","8df77f9f50a8e4e67b1c9998b7e21e02"],["/posts/b4d464b0.html","6e9a4cd6da0f57c76b080c4b63995462"],["/posts/b5fb773f.html","716b743e9197cb817fce8970a1d18750"],["/posts/b8d46b32.html","2967191d62ef74ef1a970c5e13f307aa"],["/posts/c1b2c6c9.html","1e0a6dc63aea6a7335ecae370bfde210"],["/posts/c2111cbf.html","3e6939b6122b30fb297fd2590e8dd6b0"],["/posts/c316c2e8.html","70daa9585367258a51d65daa865782f0"],["/posts/c43e60b5.html","b14933eb80ae05ab923d2d8f8b27f8d6"],["/posts/c497a412.html","0913d2789dcd0132acdc9d5515014b06"],["/posts/c5de299a.html","5ed6eba4b2d55f008ea2e16a3b4d2747"],["/posts/c70bba9c.html","fe6ba55d0782c757d7a7f78a04573ce0"],["/posts/c797535e.html","a38034388a59a29becdaa5a540bb576a"],["/posts/c7a62c79.html","d52d3bd794b4bd47972e11845c1cea31"],["/posts/cae2c959.html","95bf5dc9e0e440737f8c8fa958feba6f"],["/posts/cbebef2b.html","f33e64a3243bc37a04ea5b20c9802575"],["/posts/ce25023e.html","96395081a0ea1512da6daf8e09ff2757"],["/posts/d2fd4837.html","8ff4215c885dd4b357694ed2c190569f"],["/posts/d3233cbb.html","11978b319056198e332d98a9a0f1e722"],["/posts/d3a745a8.html","d48d5cff0f1b79fb00aa28ef521b8dc0"],["/posts/dc815d5.html","98a56666a30c413ceefc469c838ca99b"],["/posts/e3ab6ad8.html","5ec337221ec45b6432b5ca7639a2e7ef"],["/posts/e5018da6.html","b79af6cf93ee2cc3d43e63fedead904e"],["/posts/e5963272.html","09542b4b80c530cebaa3b4ae8dab5764"],["/posts/e624b065.html","6dc635cdec20122f9557ea5fc1817689"],["/posts/e7c703bb.html","eef451a63ee98964173dff6bb5c27db0"],["/posts/e8f14b6c.html","4878668a703c2aed5faebc7aca47c978"],["/posts/e91abb63.html","7ffb97b9c22364e57612b01f02bdb648"],["/posts/ea9a8808.html","e7c9f96a579e4a51eda444e840762de9"],["/posts/ebaf2232.html","b5cacb1b9c541c7ab61102add9a1efc4"],["/posts/ee1ed673.html","09b35b061a23b2cea4b316b5cd2e896a"],["/posts/f0c3ed61.html","3bc03f57144b8dbbfb0b76db74a303ff"],["/posts/f21e7f84.html","c32b2cc50c9d43efc5d5c64c6ddf6a0a"],["/posts/f230b0fd.html","b75c0136926758f0272f75a4386d0607"],["/posts/fc04d0d4.html","c1ec497a8de6e0bd476a5c57a65b26dd"],["/sumire/index.html","7b8c5d14d2a56f656b67b493340d928d"],["/sw-register.js","fb35f4ac6eaa9c21e39d3b542cc7564b"],["/tags/APPLE-project/index.html","e9d6e1eaa203ce3c8a3f320e5d7453d9"],["/tags/BELL-DA/index.html","882a4762862831f2c229197ac53bd056"],["/tags/BL-Game/index.html","1e89cd606d53eac1cae66936c1c4d986"],["/tags/Blue-Dahlia-Digital-Creators/index.html","d7d80b2dbf451cede1aca680c75262c8"],["/tags/CHUNSOFT/index.html","ce4c488cd8a872bc759d2b5830fe180e"],["/tags/Cherry-Pie/index.html","4a0d2a06584105149aeae82ea0046f0a"],["/tags/Circle-Mebius/index.html","53032ce1942a97d7c7672396101d81da"],["/tags/CresCENT-BLANK/index.html","6dc88b842518bb6812d423ca1784d05c"],["/tags/Dopamine-Software/index.html","9ae3d3a3417b299e521b8081f4dd8e7b"],["/tags/Dos/index.html","b864beaf69874449a947cad77c7da921"],["/tags/Earth-Well/index.html","142de96e2353722c6d36888b09803c99"],["/tags/Kanon/index.html","a7eb9ab92820b5cdbe6bb0d1961a6fd2"],["/tags/MANATSU-8/index.html","bad2dfacd12fdf54bd756de5f2bba357"],["/tags/MIO/index.html","9372090f1a390856b7c9aba064c1434e"],["/tags/Nmyu/index.html","6e52f649ff276cec0df0f3d60393b9dc"],["/tags/O-S-I/index.html","f925229e1c45cba98874dd2f840209f7"],["/tags/Omegaの視界/index.html","ff1b4436ecc94acbb665f039ecae2544"],["/tags/PC88/index.html","bfef658afcf08cd4c5a77a1f44a76d4f"],["/tags/PC98/index.html","855f729e3429608f49fdf1f198ba0cf2"],["/tags/Perpetual-Room/index.html","99e082830c53dc0db01c7266253cee29"],["/tags/Pleiades-Company/index.html","add656f037de3c32506775b19438a257"],["/tags/Project-Twintail/index.html","123f89a7d38205978c50c9887abae1ff"],["/tags/Reverv/index.html","2d78b1836edf7b0766e9dd4f32108827"],["/tags/Saihate-SOFT/index.html","97adfde6cd958f57eb0fd3a55d299b2b"],["/tags/Sky-On-R-imaginAtion/index.html","7a85d4b63014eb216b26474a022476ec"],["/tags/StrayMoon/index.html","f11809b0664bb6b87ef5874eae4b96ed"],["/tags/Studio-Bu-Sa/index.html","dd8b8533a11051dcb7ade67524056eb1"],["/tags/ToHeart/index.html","b861a72ec967f655712ed88ee7dd9c68"],["/tags/Traumend/index.html","04bf2dc321db6db098000dbcf791a5cf"],["/tags/Witch/index.html","6bdb49e0b3306f41d2df38e1c07c5c5e"],["/tags/adonis-project/index.html","8a42e6c060984c7c0c81ebeee3ba6805"],["/tags/flash/index.html","fbd0272951714de6b7210bdc6873ea9a"],["/tags/galgame/index.html","93363b6ca73b4bf214c7e3e0f50f086a"],["/tags/galgame/page/2/index.html","2bee59281323da0516f0dad62a881ebd"],["/tags/gal资源/index.html","46580b1a807390baad23135206046d8e"],["/tags/gal资源/page/2/index.html","0a6b6d1ffa675bb52e842a737843e2b3"],["/tags/gal资源/page/3/index.html","de5d184a772893803eb9c23f54ed5563"],["/tags/index.html","2dd75f9d47c70c951f028bed52dced27"],["/tags/rkr/index.html","2c452a8c0e9417e7bc71b62b6d677d1f"],["/tags/team-eye-mask/index.html","b2d8b983ae44e57471c7465702673494"],["/tags/ありすくろいつ/index.html","6280592b8b12202d03d954dfbb01d9c8"],["/tags/いつものところ/index.html","4662d6d778aa388444cd4890fb0d43ed"],["/tags/きつねみみ饅頭/index.html","76cc4d548b5e1cc69ff58f56bca5d844"],["/tags/ねこねこソフト/index.html","7f40f572998edb3de1f748e228695e60"],["/tags/ねこバナナ/index.html","017f646d9fd62e569166cac885a5bbba"],["/tags/はちみつくまさん/index.html","c3189ed0f496b738849ebdfdb168e925"],["/tags/ろりちせ/index.html","e1a10cd89229e88f47dd9aeaaf95ae38"],["/tags/アイル【チーム・TATU】/index.html","e47cb075e836f1687642ca0ab8f820e0"],["/tags/アークシステムワークス/index.html","1246827e74a1c3bdc813c575e97da934"],["/tags/ブロッコリー/index.html","5d58bf5f9256d137e07208a62972d70c"],["/tags/乙女/index.html","b5e6eb49e7616d2456d905774982f64d"],["/tags/停产/index.html","4efcfd09c4f41cbbb1dc45b639a27cbb"],["/tags/公告/index.html","001fc5d9140225555750d34b9a2a769f"],["/tags/同人/index.html","489f08bb976a82b1102a58fc325ea5aa"],["/tags/堀井雄二/index.html","26699931f3783e30555235a9b6c73662"],["/tags/外海なおき/index.html","e0f8134f969c7a21435ed413e5a13f64"],["/tags/機械式少女/index.html","30af1391e332bd9e03a926b70502ce5a"],["/tags/水仙/index.html","0ec9ef2c63bcbc88b94d345f1a59e282"],["/tags/汉化/index.html","dd46946e4a66ae9f57566c964c9c31b5"],["/tags/片冈智/index.html","707f614df67fd116d7081effd5ec322e"],["/tags/片岡とも/index.html","4343589bce0a4ab806b5440445c36753"],["/tags/牙の刻印制作委員会/index.html","94d9142b977d3471e5950073a580b3e0"],["/tags/牛カルビ定食-FLAT/index.html","f3c010bd6ff2838e1716cf26832b7a97"],["/tags/牧尾屋/index.html","b95e6f9f89788a1bd77a508e6bf92ac3"],["/tags/猫猫社/index.html","c7618c7b2468692fd6e4b7552e1fb549"],["/tags/王宮魔法劇団/index.html","2872a67e53e88ea28467bb3b46fc8522"],["/tags/画集/index.html","1f1466f25ff90b9604d94168499995cf"],["/tags/索引/index.html","61fef64cf7270abbd913d370799cf9e1"],["/tags/自购/index.html","05a75d0fb7f0fee72464556d5dca0dc0"],["/tags/郷愁花屋/index.html","b6c1128bbb9e78a3b3a6ccdb3cdecae1"],["/tags/閂夜明/index.html","d1a9ec349c1e49f150827a0e2d74a5a3"],["/tags/音乐美/index.html","5f0c8338ecce0b29beda4661274c9d63"],["/tags/黒†救/index.html","8f11831ebc4fb7218e45aee7c1df8cff"]];
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
