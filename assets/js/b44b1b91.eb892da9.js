"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[159],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=p(n),c=a,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?r.createElement(h,i(i({ref:e},d),{},{components:n})):r.createElement(h,i({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7584:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Modrunner End-of-Year Recap",description:"A look at the history of Modrunner and its accomplishments for 2022",authors:"beansquared",date:new Date("2022-12-29T00:00:00.000Z")},i=void 0,l={permalink:"/blog/2022/12/29/modrunner-recap-2022",source:"@site/blog/2022-12-29-modrunner-recap-2022.md",title:"Modrunner End-of-Year Recap",description:"A look at the history of Modrunner and its accomplishments for 2022",date:"2022-12-29T00:00:00.000Z",formattedDate:"December 29, 2022",tags:[],readingTime:5.145,hasTruncateMarker:!1,authors:[{name:"beansquared",title:"Modrunner Lead Developer",url:"https://github.com/smcmo",imageURL:"https://github.com/smcmo.png",key:"beansquared"}],frontMatter:{title:"Modrunner End-of-Year Recap",description:"A look at the history of Modrunner and its accomplishments for 2022",authors:"beansquared",date:"2022-12-29T00:00:00.000Z"},prevItem:{title:"July 2023 Dev Log",permalink:"/blog/2023/07/12/july-2023-dev-log"},nextItem:{title:"The Minor Update Before Christmas",permalink:"/blog/2022/12/21/minor-update-before-christmas"}},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Timeline of Events",id:"timeline-of-events",level:2},{value:"Tracked Project Statistics",id:"tracked-project-statistics",level:2}],d={toc:p};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Hey everyone,"),(0,a.kt)("p",null,"Seems like this concept of an end of the year recap has been gaining popularity in recent years, with the most notable\nexample being ",(0,a.kt)("a",{parentName:"p",href:"https://www.spotify.com/us/wrapped/"},"Spotify Wrapped"),", and recently with other services like\n",(0,a.kt)("a",{parentName:"p",href:"https://store.steampowered.com/replay"},"Steam Replay"),". I even got one from Jimmy John's today! So I thought it might be\nkinda neat if I made something similar for Modrunner this year. This project has personally had my time and attention\nmore than most anything else this year, and it's been very rewarding for me. So thank you for using Modrunner, I'm glad\nso many find my work useful."),(0,a.kt)("h2",{id:"timeline-of-events"},"Timeline of Events"),(0,a.kt)("p",null,"A lot has happened since Modrunner was initially released in June of this year. Originally launched with the name\nModrinth Bot, Modrunner initially only supported searching for projects on Modrinth, and did not have any sort of update\ntracking functionality. Over many  updates using community feedback, Modrunner has grown into a mature project with\nhundreds of projects tracked for updates across both CurseForge and Modrinth, in many servers of various shapes and\nsizes. Let's take a quick look at the timeline for major improvements made to Modrunner this year:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"June")),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},'Initial release of Modrunner, under the name of "Modrinth Bot"'),(0,a.kt)("li",{parentName:"ul"},"Addition of the ability to track updates to projects"),(0,a.kt)("li",{parentName:"ul"},"Addition of support for CurseForge projects"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"July")),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Addition of buttons on update notifications that link to the new project version on its respective website"),(0,a.kt)("li",{parentName:"ul"},"Addition of notification styles, with Normal and Compact mode offered as options"),(0,a.kt)("li",{parentName:"ul"},"Addition of changelogs in update notifications"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"August")),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Improvements to update checking, making Modrunner detect them much faster"),(0,a.kt)("li",{parentName:"ul"},"Addition of allowance to track a project in multiple channels at once"),(0,a.kt)("li",{parentName:"ul"},"Improvements to the /list command, changing it to use embeds rather than a big block of text"),(0,a.kt)("li",{parentName:"ul"},"Migration from hard-coded permissions to Discord's built-in permission system"),(0,a.kt)("li",{parentName:"ul"},"Many subsequent bug fixes, notably missing notifications for CurseForge projects (this one is still a reason why I don't sleep at night)"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"November")),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Addition of project ID and channel parameters to the /untrack command, for better management of tracked projects"),(0,a.kt)("li",{parentName:"ul"},"Addition of channel parameter to the /list command and change of listing projects in alphabetical order"),(0,a.kt)("li",{parentName:"ul"},"Addition of new setting to limit the max length of display changelogs in update notifications"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"December")),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Addition of the ability to add roles to be notified when an update notification is sent"),(0,a.kt)("li",{parentName:"ul"},"Addition of support for update notifications in Discord's forum channels"))),(0,a.kt)("p",null,"Something that I constantly worry about as a developer is thinking that I'm never doing enough, that I'm working too\nslowly or not efficiently enough on something. Looking back on this timeline, and considering everything during this\nperiod (finishing up my final semester of college), I think that the amount I've accomplished with Modrunner is something\nto be satisfied with, and I'm looking forward to adding even more improvements in the future!"),(0,a.kt)("h2",{id:"tracked-project-statistics"},"Tracked Project Statistics"),(0,a.kt)("p",null,"Now, how about some statistics? Big numbers? New records? Everyone loves those, right?"),(0,a.kt)("p",null,"As of this blog post's posted date, the project that has been tracked in the greatest amount of times is the Modrinth\nversion of ",(0,a.kt)("a",{parentName:"p",href:"https://modrinth.com/mod/sodium"},"Sodium"),", a modern rendering engine and client-side optimization mod for\nMinecraft, which has been tracked in ",(0,a.kt)("strong",{parentName:"p"},"8")," different Discord servers, which is over ",(0,a.kt)("strong",{parentName:"p"},"25.8%")," of the servers that Modrunner\nis present in!"),(0,a.kt)("p",null,"The second-most tracked project is the Modrinth version of ",(0,a.kt)("a",{parentName:"p",href:"https://modrinth.com/mod/fabric-api"},"Fabric API"),", a\nlightweight and modular API providing common hooks and intercompatibility measures utilized by mods using the Fabric\ntoolchain, which has been tracked in ",(0,a.kt)("strong",{parentName:"p"},"6")," unique servers, or ",(0,a.kt)("strong",{parentName:"p"},"19.35%")," of the total servers Modrunner serves in."),(0,a.kt)("p",null,"Here's the top ten tracked projects, as ordered by the number of different servers it's tracked in. For projects with\nthe same number of servers tracked in, they are ordered by total downloads. All the listed projects are for their\nModrinth versions; guess Modrunner is a popular choice for those working closely with the Modrinth community!"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Project Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Project Author"),(0,a.kt)("th",{parentName:"tr",align:null},"Servers Tracked In"),(0,a.kt)("th",{parentName:"tr",align:null},"Percentage of Servers Tracked In"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1. ",(0,a.kt)("a",{parentName:"td",href:"https://modrinth.com/mod/sodium"},"Sodium")),(0,a.kt)("td",{parentName:"tr",align:null},"jellysquid3"),(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"25.8%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2. ",(0,a.kt)("a",{parentName:"td",href:"https://modrinth.com/mod/fabric-api"},"Fabric API")),(0,a.kt)("td",{parentName:"tr",align:null},"modmuss50"),(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"19.35%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3. ",(0,a.kt)("a",{parentName:"td",href:"https://modrinth.com/mod/lithium"},"Lithium")),(0,a.kt)("td",{parentName:"tr",align:null},"jellysquid3"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"9.68%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4. ",(0,a.kt)("a",{parentName:"td",href:"https://modrinth.com/mod/iris"},"Iris Shaders")),(0,a.kt)("td",{parentName:"tr",align:null},"coderbot"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"9.68%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5. ",(0,a.kt)("a",{parentName:"td",href:"https://modrinth.com/mod/iris"},"Indium")),(0,a.kt)("td",{parentName:"tr",align:null},"comp500"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"9.68%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6. ",(0,a.kt)("a",{parentName:"td",href:"https://modrinth.com/mod/sodium-extra"},"Sodium Extra")),(0,a.kt)("td",{parentName:"tr",align:null},"FlashyReese"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"9.68%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7. ",(0,a.kt)("a",{parentName:"td",href:"https://modrinth.com/mod/reeses-sodium-options"},"Reese's Sodium Options")),(0,a.kt)("td",{parentName:"tr",align:null},"FlashyReese"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"9.68%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"8. ",(0,a.kt)("a",{parentName:"td",href:"https://modrinth.com/mod/debugify"},"Debugify")),(0,a.kt)("td",{parentName:"tr",align:null},"isxander"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"9.68%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"9. ",(0,a.kt)("a",{parentName:"td",href:"https://modrinth.com/mod/continuity"},"Continuity")),(0,a.kt)("td",{parentName:"tr",align:null},"peppercode1"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"6.45%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10. ",(0,a.kt)("a",{parentName:"td",href:"https://modrinth.com/modpack/fabulously-optimized"},"Fabulously Optimized")),(0,a.kt)("td",{parentName:"tr",align:null},"robotkoer"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"6.45%")))),(0,a.kt)("p",null,"Overall, Modrunner keeps tabs on ",(0,a.kt)("strong",{parentName:"p"},"357")," unique projects across both CurseForge and Modrinth. That's a lot of projects! "),(0,a.kt)("p",null,"Despite the top ten tracked projects all being from Modrinth, Modrunner keeps track of more CurseForge projects (",(0,a.kt)("strong",{parentName:"p"},"194"),")\nthan it does Modrinth projects (",(0,a.kt)("strong",{parentName:"p"},"163"),")."),(0,a.kt)("p",null,"Of all the ",(0,a.kt)("strong",{parentName:"p"},"31")," servers that Modrunner serves, just ",(0,a.kt)("strong",{parentName:"p"},"3"),' of them use the "Compact" notification style, with the rest\nof them sticking with using the default Normal style. Additionally, ',(0,a.kt)("strong",{parentName:"p"},"2")," servers have custom changelog lengths, with\nrest keeping with the default maximum."),(0,a.kt)("p",null,"In terms of tracked projects, one server has ",(0,a.kt)("strong",{parentName:"p"},"170")," total tracked projects in it, accounting for ",(0,a.kt)("strong",{parentName:"p"},"47.62%")," of the total tracked projects\nthat Modrunner keeps track of. Most other servers track about ",(0,a.kt)("strong",{parentName:"p"},"7")," projects each on average, and the median amount of\ntracked projects is just ",(0,a.kt)("strong",{parentName:"p"},"3"),"."),(0,a.kt)("p",null,"And that's the wrap on the 2022 Modrunner recap! This isn't the end, of course, for Modrunner and I have many ideas still\nin store for the bot in the year(s) to come, including some major things like ",(0,a.kt)("strong",{parentName:"p"},"receiving project updates via direct messages"),",\n",(0,a.kt)("strong",{parentName:"p"},"project discoverability features"),' (maybe a "mod of the week" kinda thing?) and ',(0,a.kt)("strong",{parentName:"p"},"localization implementation"),", so\nthat everyone can enjoy and use Modrunner in their language of choice. Look out for these features in the near future!"),(0,a.kt)("p",null,"Thanks again and let's have a great 2023!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shane, aka beansquared")))}m.isMDXComponent=!0}}]);