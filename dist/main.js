!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"performAction",(function(){return u}));let o=new Date;o.getMonth(),o.getDate(),o.getFullYear();const a=async(e="",t)=>{console.log(t);const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({temp:t.temp,description:t.description,date:t.date})});try{return n.json()}catch(e){console.log("error",e)}},c=async()=>{const e=await fetch("/all");try{const t=await e.json();document.getElementById("temp").innerHTML=t.weatherData.temp,document.getElementById("description").innerHTML=t.weatherData.description,document.getElementById("date").innerHTML=t.weatherData.date}catch(e){console.log("error",e)}},r=async(e="",t={})=>{const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({place:t.place})});try{return n.json()}catch(e){console.log("error",e)}},i=async()=>{const e=await fetch("all");try{const t=await e.json();document.getElementById("place").innerHTML=t.placeEntry.place}catch(e){console.log("error",e)}},s=async(e="",t)=>{console.log(t);const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:t.image})});try{return n.json()}catch(e){console.log("error",e)}},l=async()=>{const e=await fetch("/all");try{const t=await e.json();document.getElementById("image").setAttribute("src",t.picData.image),console.log(t)}catch(e){console.log("error",e)}};n(0);let d=new Date;d.getMonth(),d.getDate(),d.getFullYear();async function u(e){e.preventDefault(),console.log("clicked");const t=document.getElementById("start_date").value,n=new Date(t).getTime();console.log(n),document.getElementById("countdown").innerHTML=Math.ceil((n-d.getTime())/864e5);const o=document.getElementById("zip").value;await(async(e,t,n)=>{await fetch(e+t+"&maxRows=10&username="+n).then(e=>e.json()).then((function(e){const t=e.postalCodes[0].lat,n=e.postalCodes[0].lng;console.log(t,n);const o={place:e.postalCodes[0].placeName};r("add",o)})).then((async function(){await i()}))})("http://api.geonames.org/postalCodeSearchJSON?placename=",o,"kyraha"),await(async(e,t,n)=>{await fetch(e+"city="+t+"&key="+n).then(e=>e.json()).then((function(e){console.log(e);const t={temp:e.data[0].app_temp,description:e.data[0].weather.description,date:e.data[0].ob_time};console.log(t),a("/add",t)})).then((async function(){await c()}))})("https://api.weatherbit.io/v2.0/current?",o,"e190534a50d04c778eed7158e9bdadf5"),await(async(e,t,n)=>{await fetch(e+"?key="+n+"&q="+t+"&image_type=photo").then(e=>e.json()).then((function(e){const t={image:e.hits[0].pageURL};s("/add",t)})).then((async function(){await l()}))})("https://pixabay.com/api/",o,"16696056-b4d3360e4112125a5da16f0a5")}document.getElementById("generate").addEventListener("click",u)}]);