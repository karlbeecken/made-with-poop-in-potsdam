// ==UserScript==
// @name 💩-Cloud
// @version 1.0
// @description made with sh*t in potsdam
// @include https://schul-cloud.org/*
// @downloadURL https://raw.githubusercontent.com/karlbeecken/made-with-poo-in-potsdam/master/script.user.js
// @updateURL https://raw.githubusercontent.com/karlbeecken/made-with-poo-in-potsdam/master/script.user.js
// ==/UserScript==

// modify footer to correct the given false statements, there is no ❤️ anymore!

document.getElementsByClassName('made-with-love')[0].innerHTML = "Made with <span class=\"heart\">💩</span> in Potsdam"

document.getElementsByClassName("imprint")[0].children.item(0).children.item(1).innerHTML = "&copy; 2020 💩-Cloud"
