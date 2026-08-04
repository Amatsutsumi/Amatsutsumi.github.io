// source/js/live2d.js
if (typeof window.live2d_initialized === 'undefined') {
    window.live2d_initialized = true;
    const scriptTag = document.currentScript || document.querySelector('script[src*="live2d.js"]');
    const basePath = scriptTag ? scriptTag.getAttribute('src').replace(/live2d\.js.*$/, '') : '/live2d/';
    function initLive2d() {
        fetch(basePath + 'live2d.json')
            .then(response => response.json())
            .then(userConfig => {
                const cdnPath = userConfig.base.cdnPath;
                const localPath = basePath;
                const config = {
                    path: {
                        homePath: userConfig.base.homePath || "/",
                        modelPath: localPath,
                        live2dCorePath: cdnPath + "Core/live2dcubismcore.js",
                        live2dSdkPath: cdnPath + "Core/live2d-sdk.js",
                        tipsJsPath: localPath + "Core/waifu-tips.js",
                        cssPath: localPath + "Core/waifu.css",
                        tipsJsonPath: localPath + "config/waifu-tips.json",
                        chatJsPath: localPath + "chatCore/waifu-chat.js",
                        chatCssPath: localPath + "chatCore/waifu-chat.css",
                        chatJsonPath: localPath + "config/waifu-chat.json"
                    },
                    tools: userConfig.tools,
                    drag: userConfig.drag,
                    switchType: userConfig.switchType
                };

                const initTask = () => {
                    Promise.all([
                        loadExternalResource(config.path.cssPath, "css"),
                        loadExternalResource(config.path.live2dCorePath, "js"),
                        loadExternalResource(config.path.live2dSdkPath, "js"),
                        loadExternalResource(config.path.tipsJsPath, "js"),
                        loadExternalResource(config.path.chatJsPath, "js"),
                        loadExternalResource(config.path.chatCssPath, "css"),
                        loadExternalResource("https://cdn.jsdelivr.net/npm/marked/marked.min.js", "js")
                    ]).then(() => {
                        if (typeof initWidget !== "undefined") {
                            initWidget({
                                waifuPath: config.path.tipsJsonPath,
                                cdnPath: config.path.modelPath,
                                tools: config.tools,
                                dragEnable: config.drag.enable,
                                dragDirection: config.drag.direction,
                                switchType: config.switchType
                            });
                            if (typeof Live2DChat !== "undefined" && userConfig.chat) {
                                window.live2dChatInstance = new Live2DChat({
                                    apiUrl: userConfig.chat.apiUrl,
                                    configUrl: config.path.chatJsonPath
                                });
                            }
                        }
                    }).catch(err => {
                        console.error("Live2D 资源加载失败:", err);
                    });
                };

                if (window.requestIdleCallback) {
                    requestIdleCallback(initTask);
                } else {
                    setTimeout(initTask, 500);
                }
            })
            .catch(err => console.error("Live2D 配置读取失败 (live2d.json):", err));
    }
    if (screen.width >= 768) {
        if (document.readyState === 'complete') {
            initLive2d();
        } else {
            window.addEventListener('load', initLive2d);
        }
    }

    function loadExternalResource(url, type) {
        return new Promise((resolve, reject) => {
            let tag;
            if (type === "css") {
                tag = document.createElement("link");
                tag.rel = "stylesheet";
                tag.href = url;
            } else if (type === "js") {
                tag = document.createElement("script");
                tag.src = url;
                tag.async = false;
            }
            if (tag) {
                tag.onload = () => resolve(url);
                tag.onerror = () => reject(url);
                document.head.appendChild(tag);
            }
        });
    }
}