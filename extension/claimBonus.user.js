// ==UserScript==
// @name         Автоматический сбор баллов канала
// @namespace    https://github.com/Nubovik01/auto-bonus-claim-twitch
// @homepage     https://github.com/Nubovik01/auto-bonus-claim-twitch
// @version      1.0.0
// @description  Скрипт автоматически собирает бонус в виде баллов канала в количестве 50 штук путём клика на зелёную кнопку при её появлении (необходимо чтобы в браузере была включена вкладка с чьим-нибудь стримом)
// @icon         https://cdn.discordapp.com/attachments/640198921347399700/961351126987456602/favicon-32-e29e246c157142c94346.png
// @author       Nubovik (www.nbvk.ml or nubovik.ml)
// @match        *://*.twitch.tv/*
// @downloadURL  https://github.com/Nubovik01/auto-bonus-claim-twitch/raw/main/extension/claimBonus.user.js
// @updateURL    https://github.com/Nubovik01/auto-bonus-claim-twitch/raw/main/extension/claimBonus.user.js
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @connect      twitch.tv
// @grant        GM_getResourceURL
// @run-at       document-body
// ==/UserScript==

// p.s: до меня уже создавали такие скрипты, так что не удивляйтесь если они будут похожи.

(() => {
  setInterval(() => {
    let tw_bonus_btn = document.getElementsByClassName('claimable-bonus__icon')[0];

    if (tw_bonus_btn) {
      try {
        tw_bonus_btn.click();
        console.log("[nbvk ~ autoBonus] Bonus is picked up!");
      } catch (autoBonus_err) {
        console.log("[nbvk ~ autoBonus] Something error! Bonus didn't collected :(");
        console.log("[nbvk ~ autoBonus] Error: " + autoBonus_err);
      }
    };
  }, 1000 - 7);
})();