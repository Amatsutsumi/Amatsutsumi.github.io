// waifu-chat.js
class Live2DChat {

    // 允许外部通过构造函数传入配置项，增强灵活性和兼容性
    constructor(config) {
        // 允许外部传入 JSON 路径
        this.configUrl = config.configUrl || '../config/waifu-chat.json'; 
        // 允许直接从 JS 传入覆盖 API 配置 (兼容旧逻辑)
        this.apiUrlOverride = config.apiUrl;
        // 允许外部传入消息显示函数，兼容 Live2D 原有气泡提示
        this.showMessage = window.waifuShowMessage || console.log;
        this.blogIndex = [];
        // 异步初始化
        this.init();
    }

    // 核心初始化流程：加载配置 -> 初始化博客索引 -> 初始化 UI
    async init() {
        await this.loadConfig();
        this.initBlogIndex();
        this.initUI();
    }

    // 加载外部配置文件，支持动态更新和兜底默认配置
    async loadConfig() {
        try {
            const timestamp = new Date().getTime();
            const res = await fetch(`${this.configUrl}?t=${timestamp}`);
            if (!res.ok) throw new Error('Config file not found');
            const extConfig = await res.json();
            this.applyConfig(extConfig);
        } catch (e) {
            console.warn("无法加载 waifu-chat.json，将使用内置默认配置...", e);
            this.applyConfig({}); 
        }
    }
    
    // 应用配置项到实例属性，支持层级覆盖和默认值
    applyConfig(cfg) {
        // API 配置优先级：构造函数覆盖 > JSON 配置 > 内置默认值
        this.apiUrl = this.apiUrlOverride || cfg?.api?.url || '/api/chat';
        // TTS URL（从配置中读取，若无则禁用 TTS）
        this.ttsUrl = cfg?.chat?.ttsUrl || null;   // 新增
        // UI 配置优先级：JSON 配置 > 内置默认值
        this.ui = Object.assign({
            title: "Relink 终端",
            placeholder: "发送消息 (Enter发送, Shift+Enter换行)...",
            errorMsg: "大脑连接中断...",
            typingSpeed: 25
        }, cfg?.ui || {});
        // Chat 配置优先级：JSON 配置 > 内置默认值
        this.chatCfg = Object.assign({
            includeCodeBlocks: false,
            storageKey: "waifu_chat_history",
            maxHistory: 20,
            pageContextMaxLength: 3000,
            pageContextSelector: "#article-container",
            searchXmlPath: "/search.xml",
            welcomeMsg: "欢迎来到洛天的小窝！这里是小洛喵~ 请问有什么需要帮助你的？",
            welcomeOptions: [
                { display: "做个自我介绍", send: "请你做一个自我介绍吧。" },
                { display: "总结文章内容", send: "请你总结一下这篇文章的主要内容吧。" },
                { display: "介绍页面功能", send: "当前这个页面是干什么用的呀？" },
                { display: "随便聊点什么", send: "让我们随便聊点什么吧。" }
            ],
            contextTemplate: {
                pageContextTitle: "=== 用户当前阅读的页面 ===",
                searchContextTitle: "=== 博客全局检索结果 ===",
                instruction: "基于\"当前阅读页面\"或\"全局检索\"作答。补充上下文：",
                userQuestion: "用户实际提问:",
                truncateMsg: "[系统提示：页面内容过长已截断。请礼貌告知用户文章太长，未尽的信息需自行阅读原文。]"
            }
        }, cfg?.chat || {});
        // 系统提示优先级：JSON 配置 > 内置默认值
        const rawPrompt = cfg?.chat?.systemPrompt;
        const defaultPrompt = "你是本博客的看板娘小洛，性格俏皮、可爱且礼貌。请使用口语化、生动的中文与用户交流。";
        // 支持系统提示既可以是字符串也可以是字符串数组，数组会自动拼接成多行文本
        if (Array.isArray(rawPrompt)) {
            this.systemPrompt = rawPrompt.join('\n');
        } else if (typeof rawPrompt === 'string') {
            this.systemPrompt = rawPrompt;
        } else {
            this.systemPrompt = defaultPrompt;
        }
        this.storageKey = this.chatCfg.storageKey;
        this.maxHistory = this.chatCfg.maxHistory;
    }

    // 初始化聊天窗口 UI，注入必要的 DOM 结构和事件监听
    initUI() {
        // SVG 图标定义，内嵌方式避免额外请求，提升性能
        const svgTrash = '<svg viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
        const svgExpand = '<svg viewBox="0 0 448 512"><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64v-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/></svg>';
        const svgCompress = '<svg viewBox="0 0 448 512"><path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"/></svg>';
        const svgClose = '<svg viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
        // 注入聊天窗口 HTML 结构
        const chatBoxHTML = `
            <div id="waifu-chat-box">
                <div class="waifu-chat-header">
                    <span style="font-size: 13px; font-weight: bold;">${this.ui.title}</span>
                    <div class="waifu-chat-tools">
                        <span id="waifu-chat-clear">${svgTrash}</span>
                        <span id="waifu-chat-max-btn">${svgExpand}</span>
                        <span id="waifu-chat-close">${svgClose}</span>
                    </div>
                </div>
                <div id="waifu-chat-history"></div>
                <div class="waifu-input-container">
                    <textarea id="waifu-chat-input" rows="1" placeholder="${this.ui.placeholder}"></textarea>
                </div>
            </div>
        `;
        // 确保目标容器存在后再注入，避免潜在的 DOM 错误
        document.getElementById("waifu").insertAdjacentHTML("beforeend", chatBoxHTML);
        // 获取必要的 DOM 元素引用
        this.chatBox = document.getElementById("waifu-chat-box");
        this.chatHistoryDOM = document.getElementById("waifu-chat-history");
        this.chatInput = document.getElementById("waifu-chat-input");
        // 事件委托：监听聊天历史区域的点击事件，捕捉快速选项按钮的点击，支持预设消息的快速发送，提升用户体验和引导性
        this.chatHistoryDOM.addEventListener("click", (e) => {
                const target = e.target.closest('.waifu-chat-quick-action');
                if (target) {
                    let textToSend = target.getAttribute("data-send");
                    if (!textToSend) return;
                    
                    this.sendRequest(textToSend);
                    this.initBoundsManagement();
                }
        });
        // 初始渲染聊天历史，确保界面与数据同步
        this.renderHistory();
        // 窗口最大化/恢复逻辑
        let isMaximized = false;
        const maxBtn = document.getElementById("waifu-chat-max-btn");
        maxBtn.addEventListener("click", () => {
            isMaximized = !isMaximized;
            this.chatBox.classList.toggle("waifu-chat-maximized", isMaximized);
            maxBtn.innerHTML = isMaximized ? svgCompress : svgExpand;
            maxBtn.title = isMaximized ? "缩小" : "放大";
            this.chatHistoryDOM.scrollTop = this.chatHistoryDOM.scrollHeight;
        });
        // 关闭窗口逻辑
        document.getElementById("waifu-chat-close").addEventListener("click", () => {
            this.toggle();
        });
        // 清空记忆逻辑
        document.getElementById("waifu-chat-clear").addEventListener("click", () => {
            localStorage.removeItem(this.storageKey);
            if (this._welcomeInterval) {
                clearInterval(this._welcomeInterval);
                this._welcomeInterval = null;
            }
            this.renderHistory();
        });
        // 输入框伸缩逻辑
        this.chatInput.addEventListener("input", function() {
            this.style.height = "auto";
            this.style.height = (this.scrollHeight) + "px";
        });
        // 回车发送逻辑
        this.chatInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault(); 
                const text = this.chatInput.value.trim();
                if (text !== "") {
                    this.chatInput.value = '';
                    this.chatInput.style.height = "auto"; 
                    this.sendRequest(text);
                    this.initBoundsManagement();
                }
            }
        });
    }

    // 边界检测与自动调整逻辑，确保聊天窗口始终可见且不被遮挡
    checkBounds() {
        if (!this.chatBox || this.chatBox.style.display === "none") return;
        const rect = this.chatBox.getBoundingClientRect();
        // 计算相对于视口的真实位置，考虑当前的平移偏移
        const trueLeft = rect.left - this.currentTranslateX;
        const trueRight = rect.right - this.currentTranslateX;
        const trueTop = rect.top - this.currentTranslateY;
        const trueBottom = rect.bottom - this.currentTranslateY;
        // 计算需要调整的目标平移值，保持至少 10px 的边距
        let targetX = 0;
        let targetY = 0;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        if (trueLeft < 10) targetX = 10 - trueLeft;
        else if (trueRight > vw - 10) targetX = vw - 10 - trueRight;
        if (trueTop < 10) targetY = 10 - trueTop;
        else if (trueBottom > vh - 10) targetY = vh - 10 - trueBottom;
        // 只有当需要调整的距离超过 1px 时才进行平移，避免频繁的小幅调整导致界面抖动
        if (Math.abs(targetX - this.currentTranslateX) > 1 || Math.abs(targetY - this.currentTranslateY) > 1) {
            this.currentTranslateX = targetX;
            this.currentTranslateY = targetY;
            this.chatBox.style.transform = `translate(${targetX}px, ${targetY}px)`;
        }
    }

    // 初始化边界管理，监听窗口大小变化和聊天窗口样式变化，动态调整位置确保可见
    initBoundsManagement() {
        this.currentTranslateX = 0;
        this.currentTranslateY = 0;
        window.addEventListener('resize', () => this.checkBounds());
        // 使用 ResizeObserver 监听聊天窗口尺寸变化，兼容性较好的现代浏览器支持
        if (window.ResizeObserver) {
            const resObserver = new ResizeObserver(() => this.checkBounds());
            resObserver.observe(this.chatBox);
        }
        // 监听聊天窗口样式变化，捕捉 display 变化导致的边界问题
        const waifuDOM = document.getElementById("waifu");
        if (waifuDOM) {
            const mutObserver = new MutationObserver(() => this.checkBounds());
            mutObserver.observe(waifuDOM, { attributes: true, attributeFilter: ['style'] });
        }
    }
    
    // 初始化博客索引，尝试加载 search.xml 文件以支持 RAG 功能，如果加载失败则降级为无索引模式
    async initBlogIndex() {
        try {
            const res = await fetch(this.chatCfg.searchXmlPath);
            if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
            
            const xmlText = await res.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, "application/xml");
            
            const entries = xmlDoc.querySelectorAll("entry");
            this.blogIndex = Array.from(entries).map(entry => {
                const titleNode = entry.querySelector("title");
                const contentNode = entry.querySelector("content");
                const urlNode = entry.querySelector("url");
                
                let pureText = "";
                if (contentNode) {
                    const rawHtml = contentNode.textContent || "";
                    const tempDoc = parser.parseFromString(rawHtml, "text/html");
                    let noiseSelectors = 'script, style, noscript, link, iframe, svg';
                    if (!this.chatCfg.includeCodeBlocks) {
                        noiseSelectors += ', pre, figure.highlight, div.highlight';
                    }
                    tempDoc.querySelectorAll(noiseSelectors).forEach(el => el.remove());
                    pureText = this.cleanTextContent(tempDoc.body.textContent);
                }

                return {
                    title: titleNode ? titleNode.textContent.trim() : "",
                    url: (() => {
                        let rawUrl = urlNode ? urlNode.textContent.trim() : "";
                        if (!rawUrl) return "";
                        if (rawUrl.startsWith('/')) {
                            return window.location.origin + rawUrl;
                        }
                        return rawUrl;
                    })(),
                    content: pureText
                };
            });
        } catch (e) {
            console.warn(`无法加载 ${this.chatCfg.searchXmlPath}，RAG 功能降级。`, e);
        }
    }

    // 本地搜索博客索引，返回格式化的匹配结果字符串，供系统提示使用
    searchLocalBlog(keyword) {
        if (!this.blogIndex.length) return "";
        let searchTerms = keyword;
        const titleMatch = keyword.match(/\[(.*?)\]/);
        if (titleMatch && titleMatch[1]) {
            searchTerms = titleMatch[1].trim();
        } else {
            searchTerms = keyword.replace(/(帮我|找下|寻找|搜索|博客|中|有关|关于|的|文章|内容|请问|什么是|怎么)/g, "").trim() || keyword;
        }

        const matched = this.blogIndex.filter(post => 
            (post.title && post.title.includes(searchTerms)) || 
            (post.content && post.content.includes(searchTerms))
        );
        
        if (matched.length === 0) return "";

        return matched.slice(0, 15).map(p => 
            `[标题: ${p.title}]\n[链接: ${p.url}]\n内容: ${p.content.replace(/<[^>]+>/g, '').substring(0, 300)}...`
        ).join("\n\n");
    }

    // 获取聊天历史，支持从 LocalStorage 读取并解析为对象数组，兼容性处理异常情况
    getHistory() {
        try {
            return JSON.parse(localStorage.getItem(this.storageKey)) || [];
        } catch (e) {
            return [];
        }
    }

    // 保存聊天历史，支持同步到 LocalStorage，并处理临时消息和异常情况
    saveHistory(history, syncStorage = true) {
        if (history.length > this.maxHistory * 2) {
            history = history.slice(-(this.maxHistory * 2));
        }
        if (syncStorage) {
            const storableHistory = history.filter(m => !m.isTemp).map(m => {
                let copy = { ...m };
                delete copy.isTyping; 
                return copy;
            });
            localStorage.setItem(this.storageKey, JSON.stringify(storableHistory));
        }
        this.renderHistory(history); 
    }

    // 渲染聊天历史到界面，支持过滤系统消息和处理临时消息的特殊显示逻辑
    renderHistory(currentHistory = null) {
        const history = currentHistory || this.getHistory();
        // 过滤掉系统消息，只显示用户和 AI 的对话内容，保持界面简洁
        this.chatHistoryDOM.innerHTML = history
            .filter(msg => msg.role !== 'system') 
            .map(msg => {
                const isUser = msg.role === 'user';
                const msgClass = isUser ? 'waifu-msg-user' : 'waifu-msg-ai';
                const content = msg.displayContent || msg.content;
                // 临时消息直接显示原始内容，用户消息进行基本转义，AI 消息尝试解析 Markdown（如果库可用），并处理链接中的中文和标点符号
                let innerHTML = "";
                if (msg.isTemp) {
                    innerHTML = content;
                } else if (isUser) {
                    innerHTML = content.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
                } else {
                    if (typeof marked !== 'undefined') {
                        // 先将 Markdown 转换为 HTML，再进行链接处理，最后插入到页面中
                        let rawHTML = marked.parse(content);
                        rawHTML = rawHTML.replace(/>\n+</g, '><').replace(/\n+$/g, '');
                        rawHTML = rawHTML.replace(/<p>[\s\u200B-\u200D\uFEFF\xA0]*<\/p>/gi, '')
                                        .replace(/<p>\s*<br\s*\/?>\s*<\/p>/gi, '');
                        const doc = new DOMParser().parseFromString(rawHTML, 'text/html');
                        doc.querySelectorAll('a').forEach(a => {
                            a.setAttribute('target', '_blank');
                            a.setAttribute('rel', 'noopener noreferrer');
                            let href = a.getAttribute('href') || '';
                            let text = a.textContent || '';
                            const invalidSuffixRegex = /([，。！？；：、“””’）]+)$/;
                            const textMatch = text.match(invalidSuffixRegex);
                            let decodedHref = href;
                            
                            try { decodedHref = decodeURIComponent(href); } catch (e) {}
                            const hrefMatch = decodedHref.match(invalidSuffixRegex);
                            
                            if (textMatch || hrefMatch) {
                                const suffix = textMatch ? textMatch[1] : hrefMatch[1];
                                a.textContent = text.replace(invalidSuffixRegex, '');
                                try {
                                    if (decodedHref.match(invalidSuffixRegex)) {
                                        a.setAttribute('href', encodeURI(decodedHref.replace(invalidSuffixRegex, '')));
                                    }
                                } catch (e) {
                                    a.setAttribute('href', href.replace(invalidSuffixRegex, ''));
                                }
                                a.insertAdjacentText('afterend', suffix);
                            }
                        });
                        innerHTML = doc.body.innerHTML;
                    } else {
                        // 如果没有可用的 Markdown 库，则进行基本的 HTML 转义和换行处理，确保至少不会出现 HTML 注入问题
                        innerHTML = content.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
                    }
                }
                
                // 如果消息包含选项且不是正在输入的状态，渲染选项按钮，快速发送预设消息
                if (msg.options && msg.options.length > 0 && !msg.isTyping) {
                        let optionsHTML = `<div class="waifu-welcome-options" style="margin-top: 10px; padding-top: 8px; border-top: 1px dashed rgba(128,128,128,0.3);">`;
                        msg.options.forEach(opt => {
                            let sendText = opt.send;

                            if (Array.isArray(sendText)) {
                                sendText = sendText[Math.floor(Math.random() * sendText.length)];
                            } else if (typeof sendText === 'string' && sendText.includes("||")) {
                                // 兼容老版本 "||" 分割格式
                                const parts = sendText.split("||").map(s => s.trim());
                                sendText = parts[Math.floor(Math.random() * parts.length)];
                            }

                            let safeSend = String(sendText).replace(/"/g, '&quot;');

                            optionsHTML += `<div style="margin-top: 6px;">
                                <a href="javascript:void(0);" class="waifu-chat-quick-action" data-send="${safeSend}" style="color: #0078D7; text-decoration: none; font-size: 0.95em; cursor: pointer;">
                                    👉 ${opt.display}
                                </a>
                            </div>`;
                        });
                        optionsHTML += `</div>`;
                        innerHTML += optionsHTML;
                    }

                return `<div class="waifu-chat-msg ${msgClass}"><div class="waifu-chat-bubble">${innerHTML}</div></div>`;
            }).join('');
            
        this.chatHistoryDOM.scrollTop = this.chatHistoryDOM.scrollHeight;
    }
    
    // ============================================================
    // ★ 核心修改：sendRequest 方法（加入 TTS 和表情控制）
    // ============================================================
    async sendRequest(userText) {
        // 清除欢迎消息定时器（如果有）
        if (this._welcomeInterval) {
            clearInterval(this._welcomeInterval);
            this._welcomeInterval = null;
            let h = this.getHistory();
            if (h.length === 0) {
                h.push({ role: "assistant", 
                    content: this.chatCfg.welcomeMsg,
                    options: this.chatCfg.welcomeOptions || [] 
                });
                this.saveHistory(h, true);
            }
        }

        let history = this.getHistory();
        
        history.push({ role: "user", content: userText, displayContent: userText });
        // 压入临时消息占位符（正在思考）
        history.push({ 
            role: "assistant", 
            content: '<div class="waifu-typing-dots"><span></span><span></span><span></span></div>',
            isTemp: true 
        });
        this.saveHistory(history, true); 

        // 构建 API 请求消息数组（不含临时消息）
        const apiHistory = history.filter(m => !m.isTemp).map(m => ({ role: m.role, content: m.content }));

        // RAG 上下文处理
        const pageContext = this.getCurrentPageContext();
        const searchContext = this.searchLocalBlog(userText);
        let combinedContext = "";
        const ct = this.chatCfg.contextTemplate;
        if (pageContext) combinedContext += `${ct.pageContextTitle}\n${pageContext}\n\n`;
        if (searchContext) combinedContext += `${ct.searchContextTitle}\n${searchContext}\n\n`;
        
        if (combinedContext) {
            let lastMsg = apiHistory[apiHistory.length - 1];
            lastMsg.content = `${ct.instruction}\n${combinedContext}${ct.userQuestion} ${userText}`;
        }

        const messages = [
            { role: "system", content: this.systemPrompt },
            ...apiHistory 
        ];

        try {
            // 1. 请求 AI 回复
            const res = await fetch(this.apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages })
            });
            if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
            const data = await res.json();
            
            // 移除临时占位消息
            history = history.filter(m => !m.isTemp);
            
            // 清洗 AI 回复内容
            let fullAiReply = data.choices[0].message.content;
            fullAiReply = fullAiReply.replace(/<think>[\s\S]*?<\/think>/gi, '');
            fullAiReply = fullAiReply.replace(/[\u200B-\u200D\uFEFF\r]/g, '');
            fullAiReply = fullAiReply.replace(/\n[\s\u200B-\u200D\uFEFF\xA0]*\n/g, '\n\n').trim();

            // ---- ★ 新增：解析表情标签 ----
            const emotionMatch = fullAiReply.match(/\[表情:\s*(\w+)\]/);
            let pureText = fullAiReply.replace(/\[表情:\s*\w+\]/, '').trim();
            let emotion = emotionMatch ? emotionMatch[1] : null;

            // ---- ★ 新增：请求 TTS 音频（如果配置了 ttsUrl） ----
            let audioBlob = null;
            if (this.ttsUrl && pureText) {
                try {
                    const ttsResp = await fetch(`${this.ttsUrl}?text=${encodeURIComponent(pureText)}`);
                    if (ttsResp.ok) {
                        audioBlob = await ttsResp.blob();
                    } else {
                        console.warn('[TTS] 请求失败，状态码:', ttsResp.status);
                    }
                } catch (e) {
                    console.warn('[TTS] 异常:', e);
                }
            }

            // ---- ★ 新增：播放音频（如果存在） ----
            if (audioBlob) {
                const audioUrl = URL.createObjectURL(audioBlob);
                const audio = new Audio(audioUrl);
                audio.play().catch(e => console.warn('[TTS] 播放失败:', e));
                audio.onended = () => URL.revokeObjectURL(audioUrl);
            }

            // ---- 打字动画（显示纯文本，不含表情标签） ----
            history.push({ role: "assistant", content: "", isTyping: true }); 
            let charIndex = 0;
            const typingSpeed = this.ui.typingSpeed; 
            const typeWriter = setInterval(() => {
                history[history.length - 1].content = pureText.substring(0, charIndex + 1);
                this.saveHistory(history, false); 
                charIndex++;
                // 打字完成
                if (charIndex >= pureText.length) {
                    clearInterval(typeWriter);
                    history[history.length - 1].isTyping = false; 
                    this.saveHistory(history, true); 
                    
                    // 更新气泡提示（短文本）
                    let safeBubbleText = pureText.replace(/```[\s\S]*?```/g, "[代码块已省略]"); 
                    safeBubbleText = safeBubbleText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    if (safeBubbleText.length > 50) safeBubbleText = safeBubbleText.substring(0, 50) + "...";
                    this.showMessage(safeBubbleText, 6000, 10);

                    // ---- ★ 新增：触发 Live2D 表情（如果设置了 emotion） ----
                    if (emotion && typeof window.live2d !== 'undefined' && window.live2d.setEmotion) {
                        window.live2d.setEmotion(emotion);
                    }
                }
            }, typingSpeed);

        } catch (error) {
            console.error("AI Request Failed:", error);
            history = history.filter(m => !m.isTemp);
            history.pop(); 
            this.saveHistory(history, true);
            this.showMessage(this.ui.errorMsg, 4000, 10);
        }
    }

    // 切换聊天窗口显示状态，首次打开时渲染历史并显示欢迎消息，防止 JSON 未加载完用户就点击按钮导致的异常情况
    toggle() {
        if (!this.chatBox) {
            this.showMessage("正在建立神经链接，请稍后再试...", 3000, 10);
            return;
        }
        // 通过检查 display 样式来判断当前状态，兼容初始状态和用户手动设置的 display 样式，同时确保切换后界面状态与数据同步
        const isHidden = this.chatBox.style.display === "none" || this.chatBox.style.display === "";
        this.chatBox.style.display = isHidden ? "flex" : "none";
        if (isHidden) {
            this.renderHistory(); 
            this.chatInput.focus();
            setTimeout(() => this.checkBounds(), 0);
            if (this.getHistory().length === 0) {
                this.showWelcomeMessage();
            }
        }
    }

    // 显示欢迎消息，支持打字动画效果，首次打开聊天窗口时调用，增强用户体验和界面活跃度
    showWelcomeMessage() {
        let history = this.getHistory();
        if (history.length > 0) return; 
        
        const msgText = this.chatCfg.welcomeMsg;
        if (!msgText) return;

        // 压入打字动画占位消息，标记为正在打字状态，等待后续定时器更新内容和状态，同时确保界面有即时反馈
        history.push({ 
            role: "assistant", 
            content: "", 
            isTyping: true,
            options: this.chatCfg.welcomeOptions || [] 
        });
        this.saveHistory(history, false);

        let charIndex = 0;
        const typingSpeed = this.ui.typingSpeed;
        
        // 并发防抖：清除遗留定时器
        if (this._welcomeInterval) clearInterval(this._welcomeInterval);
        
        this._welcomeInterval = setInterval(() => {
            history[history.length - 1].content = msgText.substring(0, charIndex + 1);
            this.saveHistory(history, false);
            charIndex++;
            // 打字完成后，清除定时器，更新消息状态，并落盘存储完整回复，同时同步 Live2D 消息气泡显示
            if (charIndex >= msgText.length) {
                clearInterval(this._welcomeInterval);
                this._welcomeInterval = null;
                history[history.length - 1].isTyping = false;
                this.saveHistory(history, true); 
                let safeBubbleText = msgText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                if (safeBubbleText.length > 50) safeBubbleText = safeBubbleText.substring(0, 50) + "...";
                this.showMessage(safeBubbleText, 6000, 10);
            }
        }, typingSpeed);
    }

    // 代码标签清洗
    cleanTextContent(text) {
        let result = text;
        if (!this.chatCfg.includeCodeBlocks) {
            // 清除 Markdown 代码块 ```...```
            result = result.replace(/```[\s\S]*?```/g, '');
            // 清除代码标签 {% code ... %} ... {% endcode %} 及其变体
            result = result.replace(/{%\s*code.*?%}[\s\S]*?{%\s*endcode\s*%}/g, '');
        }
        return result.replace(/\s+/g, ' ').trim();
    }

    // 获取当前页面上下文，尝试提取文章正文并清理噪音元素，返回格式化的上下文字符串供系统提示使用，同时支持内容过长的截断提示
    getCurrentPageContext() {
        const articleDOM = document.querySelector(this.chatCfg.pageContextSelector);
        if (!articleDOM) return "";

        const titleDOM = document.querySelector('h1.post-title') || document.querySelector('title');
        const title = titleDOM ? titleDOM.innerText.trim() : "当前页面";

        const cloneDOM = articleDOM.cloneNode(true);
        let noiseSelectors = 'script, style, noscript, iframe, svg, .post-outdate-notice, .clipboard-btn';
        if (!this.chatCfg.includeCodeBlocks) {
            noiseSelectors += ', pre, figure.highlight, div.highlight';
        }
        const noiseElements = cloneDOM.querySelectorAll(noiseSelectors);
        noiseElements.forEach(el => el.remove());
        let pureText = this.cleanTextContent(cloneDOM.textContent);

        // 如果纯文本内容过长，进行截断并添加系统提示，告知用户文章内容较多需要自行阅读原文，保持对话的简洁和有效性
        const maxLength = this.chatCfg.pageContextMaxLength;
        if (pureText.length > maxLength) {
            pureText = pureText.substring(0, maxLength) + '\n\n' + this.chatCfg.contextTemplate.truncateMsg;
        }
        return `[当前页面标题: ${title}]\n[页面纯净正文]: ${pureText}`;
    }
}

window.Live2DChat = Live2DChat;