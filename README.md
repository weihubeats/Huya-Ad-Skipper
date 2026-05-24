# 🚀 虎牙直播净化视界 (Huya Ad Skipper)

![Version](https://img.shields.io/badge/version-1.3.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Author](https://img.shields.io/badge/author-weihubeats-orange.svg)

一款专为网页版虎牙直播（huya.com）打造的去广告油猴脚本。采用轻量级 DOM 监听与阻断式优先级匹配，极速秒杀各类贴片跳过、悬浮窗以及最新的 A/B 测试广告，还你一个纯净、流畅的看播体验。

## ✨ 核心特性

- **⚡️ 极速秒杀**：精准定位 `.ab-skip` 与 `.ab-close`，在新版广告冒头的一瞬间自动关闭，肉眼几乎无感。
- **🛡️ 强力适配**：完美解决虎牙最新推出的 `new-reward-ab-wrap` A/B 测试弹窗（带 SVG 叉叉图标和倒计时的顽固广告）。
- **♻️ 智能兜底**：包含模糊文本匹配与旧版特征类名扫描，即使虎牙官方回退代码，脚本依然坚挺。
- **🚀 零感运行**：采用优先级阻断逻辑（匹配即停止），极大降低浏览器 CPU/内存开销，弹幕满屏不卡顿。

## 📸 效果演示

*(建议在这里上传两张对比图：一张全是广告的截图，一张干干净净的截图)*
- 拦截前：直播间右下角、播放器正中央全是贴片和游戏推广。
- 拦截后：✅ 纯净无打扰！

## 📦 安装指南

1. **安装环境**：首先确保你的浏览器（Chrome / Edge / Firefox 等）已安装 [Tampermonkey (油猴)](https://www.tampermonkey.net/) 扩展。
2. **安装脚本**：
   - **方式一（推荐）**：前往 [Greasy Fork 脚本主页](#) *(发布后将此处的#替换为你的脚本链接)* 点击“安装此脚本”。
   - **方式二（本地安装）**：点击油猴插件图标 -> 添加新脚本 -> 将本项目中的 `huya-ad-skipper.user.js` 代码复制粘贴进去 -> `Ctrl+S` 保存。
3. **享受清爽**：刷新虎牙直播网页，脚本将在后台静默为你保驾护航。

## 💻 完整代码示例预览

脚本头部已规范化开源信息，欢迎随意 Fork：

```javascript
// ==UserScript==
// @name         虎牙直播净化视界 - 自动拦截/跳过广告
// @namespace    [http://tampermonkey.net/](http://tampermonkey.net/)
// @version      1.3.0
// @description  精准适配虎牙各类新旧广告、A/B测试弹窗及 ab-skip 跳过按钮，让直播画面保持清爽！
// @author       weihubeats
// @license      MIT
// @match        *://*[.huya.com/](https://.huya.com/)*
// @icon         [https://www.huya.com/favicon.ico](https://www.huya.com/favicon.ico)
// @grant        none
// ==/UserScript==
