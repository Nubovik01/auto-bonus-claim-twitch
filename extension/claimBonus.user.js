// ==UserScript==
// @name         Автоматический сбор баллов канала на Twitch
// @namespace    https://github.com/Nubovik01/auto-bonus-claim-twitch
// @homepage     https://github.com/Nubovik01/auto-bonus-claim-twitch
// @version      1.0.3
// @description  Скрипт автоматически собирает баллы канала путём автоматического клика на зелёную кнопку при её появлении в чате
// @icon         https://cdn.discordapp.com/attachments/640198921347399700/961351126987456602/favicon-32-e29e246c157142c94346.png
// @author       Nikita A. <https://t.me/nktdev> (https://nubovik01.github.io)
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
  }, Math.round(Math.random()*(4999-1499)+1499);
})();
