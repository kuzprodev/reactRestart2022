// lesson 50. Async, defer, динамические скрипты
'use strict';
// document.addEventListener('DOMContentLoaded', () => {


const loadScript = (src)=>{
    const script =document.createElement('script');
    script.src = src;
    script.async =false;
    document.body.append(script);
};
loadScript("js/test.js");
loadScript("js/test2.js");
// });