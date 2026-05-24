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

(function() {
    'use strict';

    // 1. 精准定位“跳过”按钮（新增你发现的 .ab-skip，速度最快）
    function clickSkipSelectors() {
        const skipSelectors = ['.ab-skip', '.player-ad-skip'];
        for (let selector of skipSelectors) {
            const elements = document.querySelectorAll(selector);
            for (let el of elements) {
                if (el && el.offsetParent !== null) {
                    el.click();
                    console.log(`[虎牙去广告] 成功精准点击跳过按钮: ${selector}`);
                    return true;
                }
            }
        }
        return false;
    }

    // 2. 针对 A/B 测试新版悬浮广告（你提供的源码）
    function clickNewAdStyle() {
        const closeBtns = document.querySelectorAll('.ab-close, .ab-close-2');
        for (let btn of closeBtns) {
            if (btn && btn.offsetParent !== null) {
                btn.click();
                console.log("[虎牙去广告] 成功点击新版 A/B 测试广告关闭按钮！");
                return true;
            }
        }
        
        // 如果类名变了但结构没变，兜底找写着“关闭”的 i 标签
        const iTags = document.querySelectorAll('.new-ad-close-style i');
        for (let iTag of iTags) {
            if (iTag.innerText && iTag.innerText.includes('关闭') && iTag.offsetParent !== null) {
                iTag.click();
                return true;
            }
        }
        return false;
    }

    // 3. 兜底扫描全图的“跳过”文字（防御虎牙后期改名）
    function clickSkipText() {
        const elements = document.querySelectorAll('div, span, a, button, i');
        for (let el of elements) {
            const text = el.innerText || '';
            if (text.includes('跳过') && text.length < 10 && el.offsetParent !== null) {
                el.click();
                console.log(`[虎牙去广告] 成功通过文字匹配点击: "${text}"`);
                return true;
            }
        }
        return false;
    }

    // 4. 传统旧版悬浮窗类名防御
    function clickOldSelectors() {
        const closeSelectors = [
            '[class*="ad-close"]', '.player-ad-close', '.room-ad-close', 
            '.ext-room-ad-close', '.gg-close', '[id*="ad_close"]'
        ];
        for (let selector of closeSelectors) {
            const elements = document.querySelectorAll(selector);
            for (let el of elements) {
                if (el && el.offsetParent !== null) {
                    el.click();
                    return true;
                }
            }
        }
        return false;
    }

    // 主执行逻辑 (按照执行效率从高到低排序)
    function checkAndCloseAds() {
        if (clickSkipSelectors()) return; // 优先极速秒杀精准跳过
        if (clickNewAdStyle()) return;    // 秒杀新版悬浮
        if (clickSkipText()) return;      // 慢速兜底跳过
        clickOldSelectors();              // 兜底旧版悬浮
    }

    // 定时器：每 1 秒（1000毫秒）扫描一次
    setInterval(checkAndCloseAds, 1000);

    console.log("[虎牙去广告脚本 v1.3] 搭载全方位打击规则，已成功运行！");
})();