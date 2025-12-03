/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/02/page/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/02/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/02/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/02/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/02/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/02/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/02/page/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/02/page/8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/02/page/9/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/03/page/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/03/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/03/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/03/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/03/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/03/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/03/page/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/03/page/8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/03/page/9/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/04/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/04/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/04/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/04/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/04/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/05/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/10/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/10/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/13/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/14/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/15/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/16/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/17/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/18/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/19/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/20/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/21/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/22/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/23/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/24/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/25/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/26/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/27/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/28/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/29/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2025/page/9/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/13/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/14/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/15/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/16/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/17/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/18/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/19/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/20/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/21/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/22/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/23/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/24/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/25/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/26/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/27/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/28/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/29/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/9/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Gal/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/13/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/14/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/15/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/16/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/17/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/18/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/19/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/20/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/21/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/22/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/23/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/24/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/25/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/26/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/27/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Gal/page/9/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/RPG/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/女性向/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/女性向/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/女性向/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/13/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/14/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/15/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/16/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/17/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/18/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/19/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/20/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/21/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/22/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/23/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/24/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/25/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/26/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/27/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/28/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/29/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/9/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/10c9dd98.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/1295b569.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/1370342.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/15440.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/15f3959d.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/1d59b71f.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/20b3f3a4.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/244daa7a.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/245f1c7d.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/28397adc.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/2ad07f54.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/2b38bce0.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/2ce39bcc.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/2cf620f0.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/30a413ad.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/34292736.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/3468cbe.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/36236.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/39176dc0.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/39972.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/3be6a165.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/3ccb8bc2.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/3daf73b4.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/3e118dbf.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/3f7d823a.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/3f978819.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/41dac80e.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/43038.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/43945723.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/44124a6b.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/476a3006.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/4b689be3.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/4cf8423f.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/4dcf85c.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/4eb15085.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/500cd322.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/501236a.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/51c9b1ff.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/558e1f30.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/5d8bea92.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/5f6e0c59.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/60957.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/61a63a84.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/625ab7bf.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/6336a2f9.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/6432d61a.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/6515f032.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/65337.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/6a4b5ac8.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/6aa4177c.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/6b15f81f.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/6b16039c.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/71131d34.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/742fd48d.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/78a8a8d3.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/792eba6f.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/7a5ef3d0.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/7b51011d.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/7e3aa3e2.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/80fe2691.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/81ac52e9.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/82332d11.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/8486f6f9.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/849b40f8.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/85c51d68.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/86a6c500.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/886f8d3.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/8a7cba10.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/8ac11b41.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/8c3f2fd8.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/8dd520d9.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/8f555654.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/92a980c2.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/92ce16.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/93e9943b.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/94d3c794.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/9606c2fe.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/96b281f2.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/97f50eea.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/97fca8be.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/98662d05.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/9a2f6162.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/9b22a48d.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/9cb455b1.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/9ecdeecc.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/9efd7701.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/9f61c1a0.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/a1de710.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/a30eb0cd.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/a3961272.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/a72f71c2.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/a7634b5d.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/a8c593b5.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/ad0c1efa.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/af1807ef.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/b190bc66.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/b397bf03.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/b497b647.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/b4d464b0.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/b5fb773f.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/b8d46b32.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/c1b2c6c9.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/c2111cbf.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/c316c2e8.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/c43e60b5.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/c497a412.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/c5395ba3.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/c5de299a.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/c70bba9c.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/c797535e.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/c7a62c79.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/cae2c959.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/cbebef2b.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/cc4c0017.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/ce25023e.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/d2fd4837.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/d3233cbb.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/d3a745a8.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/d7e940d2.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/d8717d68.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/dc815d5.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/de25b0be.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/e2623b4e.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/e3ab6ad8.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/e5018da6.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/e5963272.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/e5ef4c3c.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/e7c703bb.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/e8f14b6c.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/e91abb63.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/ea9a8808.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/eb784749.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/ebaf2232.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/ed75f185.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/ee1ed673.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/f0c3ed61.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/f151ff43.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/f21e7f84.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/f230b0fd.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/f28a7877.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/f663d5cc.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/f730ad18.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/fb5d4608.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/fc04d0d4.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/fc455f81.html","d41d8cd98f00b204e9800998ecf8427e"],["/sumire/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","2976f8faf6932dddf8bf839f82eb323a"],["/tags/AKo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/APPLE-project/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Ankrache/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/BELL-DA/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Berial-ベリアル/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Blue-Dahlia-Digital-Creators/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Blue-Line-Games/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/CHUNSOFT/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Check＆Stripe/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Cherry-Pie/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Circle-Mebius/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Cosmillica/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/CresCENT-BLANK/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Dopamine-Software/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Earth-Well/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Forest/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/HaccaWorks/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Kanon/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/LIKEMAD/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/MANATSU-8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/MARINE/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Maria-Club/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/NAOX/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/NYANKO独奏協奏曲/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Namikaze-no-Uta/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/NeOres/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Nmyu/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/O-S-I/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/PC88/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Perpetual-Room/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Pleiades-Company/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Project-Twintail/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/RIFF-RAFF/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Regista-レジスタ/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Reverv/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Saihate-SOFT/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Scrubbing/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Silveredsteel/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Sky-On-R-imaginAtion/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Sora-Kishida/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/StrayMoon/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Studio-Bu-Sa/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/TETRATECH/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/TRANSPARENCY/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/TRANSPARENT/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Tea-room/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Team-Eye-mask/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/ToHeart/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Traumend/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Witch/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/adonis-project/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/age/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/capriccio-suite/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/eclipse65/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/fandi/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/flash/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/gal/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/ibis/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/little-lizard/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/m-kz/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/mint-wings/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/purgatory/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/team-eye-mask/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/yuniu/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/ありすくろいつ/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/いつものところ/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/お茶みどり/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/きつねみみ饅頭/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/さくらミント/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/たれたれを/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/ねこねこソフト/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/ねこねこソフト/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/ねこバナナ/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/はちみつくまさん/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/ろりちせ/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/アイル【チーム・TATU】/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/アークシステムワークス/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/スタジオルミナス/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/ティアラ/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/ブロッコリー/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/ホット・ビィ/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/ルクル/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/一夢小路/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/停产游戏/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/停产游戏/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/停产游戏/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/停产游戏/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/停产游戏/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/公告/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/古林-寛/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/堀井雄二/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/外海なおき/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/大熊猫/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/天村血花/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/女性向/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/女性向/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/宴/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/御茶ノ水電子製作所/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/志麻-サクラ/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/志麻サクラ/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/扑家工作室/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/月の水/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/未公开/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/桃野衿/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/機械式少女/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/死せる侍の会/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/水由きみや/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/永遠の文芸部/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/汉化/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/渕乃間ハイル/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/澪/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/熊月温泉/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/片冈智/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/片冈智/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/牙の刻印制作委員会/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/牛カルビ定食-FLAT/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/牧尾屋/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/犬大工/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/犬茶屋/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/王宮魔法劇団/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/王無ソウ/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/百合/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/真島こころ/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/自购/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/茶葉☆姫/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/郷愁花屋/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/閂夜明/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/風神/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/鷹取兵馬/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/黒†救/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/黒百合っ子大集合/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
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
