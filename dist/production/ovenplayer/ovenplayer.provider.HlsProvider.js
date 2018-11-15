/*! For license information please see ovenplayer.provider.HlsProvider.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getBrowser=function(){if(-1!=(navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf("OPR")))return"opera";if(-1!=navigator.userAgent.indexOf("Chrome"))return"chrome";if(-1!=navigator.userAgent.indexOf("Safari"))return"safari";if(-1!=navigator.userAgent.indexOf("Firefox"))return"firefox";if(-1!=navigator.userAgent.indexOf("MSIE")){navigator.userAgent.indexOf("MSIE");return function(){for(var e=3,t=document.createElement("div"),n=t.getElementsByTagName("i");t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e",n[0];);return e>4?e:void 0}()<9?"oldIE":"modernIE"}return"unknown"}},279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pickCurrentSource=t.errorTrigger=t.separateLive=t.extractVideoElement=void 0;var r=n(7),o=function(e){return e&&e.__esModule?e:{default:e}}(n(6));t.extractVideoElement=function(e){return o.default.isElement(e)?e:e.getVideoElement?e.getVideoElement():e.media?e.media:null},t.separateLive=function(e){return!!e.isDynamic&&e.isDynamic()},t.errorTrigger=function(e,t){t.setState(r.STATE_ERROR),t.pause(),t.trigger(r.ERROR,e)},t.pickCurrentSource=function(e,t,n){var r=Math.max(0,t);if(e)for(var o=0;o<e.length;o++)if(e[o].default&&(r=o),n.getSourceLabel()&&e[o].label===n.getSourceLabel())return o;return r}},280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(119),o=n(7),a=function(e){return e&&e.__esModule?e:{default:e}}(n(281));t.default=function(e,t){var n={},u=e.getAttribute("data-parent-id"),i="",l=(0,r.getBrowser)();OvenPlayerConsole.log("MediaManager loaded. browserType : "+l);return n.create=function(){return OvenPlayerConsole.log("MediaManager createElement()"),i&&n.destroy(),function(){if(t!==o.PROVIDER_RTMP)(i=document.createElement("video")).setAttribute("disableRemotePlayback",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("playsinline",""),e.appendChild(i);else{var n=void 0,r=void 0,s=void 0,c=void 0,d=void 0,f=void 0,E=void 0,g=void 0,v=void 0;(n=document.createElement("param")).setAttribute("name","movie"),n.setAttribute("value",a.default),(r=document.createElement("param")).setAttribute("name","flashvars"),r.setAttribute("value","playerId="+u),(s=document.createElement("param")).setAttribute("name","allowscriptaccess"),s.setAttribute("value","always"),(c=document.createElement("param")).setAttribute("name","allowfullscreen"),c.setAttribute("value","true"),(d=document.createElement("param")).setAttribute("name","quality"),d.setAttribute("value","height"),(f=document.createElement("param")).setAttribute("name","name"),f.setAttribute("value",u+"-flash"),(E=document.createElement("param")).setAttribute("name","menu"),E.setAttribute("value","false"),(g=document.createElement("param")).setAttribute("name","quality"),g.setAttribute("value","high"),(v=document.createElement("param")).setAttribute("name","bgcolor"),v.setAttribute("value","#000000"),(i=document.createElement("object")).setAttribute("id",u+"-flash"),i.setAttribute("name",u+"-flash"),i.setAttribute("width","100%"),i.setAttribute("height","100%"),"oldIE"!==l?(i.setAttribute("data",a.default),i.setAttribute("type","application/x-shockwave-flash")):(i.setAttribute("classid","clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"),i.appendChild(n)),i.appendChild(v),i.appendChild(g),i.appendChild(c),i.appendChild(s),i.appendChild(r),e.appendChild(i)}return i}()},n.destroy=function(){OvenPlayerConsole.log("MediaManager removeElement()"),e.removeChild(i),i=null},n}},281:function(e,t,n){e.exports=n.p+"OvenPlayerFlash.swf"},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(60)),o=i(n(283)),a=n(279),u=n(7);function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){OvenPlayerConsole.log("CORE loaded. ");var i={};(0,r.default)(i);var l=(0,o.default)(e.extendedElement,i),s=(0,a.extractVideoElement)(e.extendedElement),c=t.getConfig().image||"";s.playbackRate=s.defaultPlaybackRate=t.getDefaultPlaybackRate();var d=function(t){var r=e.sources[e.currentSource];if(n)n(r,t);else{OvenPlayerConsole.log("source loaded : ",r,"lastPlayPosition : "+t);var o=s.src,a=document.createElement("source");a.src=r.file,a.src!==o?(s.src=e.sources[e.currentSource].file,o&&s.load()):0===t&&s.currentTime>0&&i.seek(t),t>0&&(i.seek(t),i.play()),c&&(s.poster=c)}};return i.getName=function(){return e.name},i.canSeek=function(){return e.canSeek},i.setCanSeek=function(t){e.canSeek=t},i.isSeeking=function(){return e.seeking},i.setSeeking=function(t){e.seeking=t},i.setState=function(t){if(e.state!==t){var n=e.state;switch(t){case u.STATE_COMPLETE:i.trigger(u.PLAYER_COMPLETE);break;case u.STATE_PAUSED:i.trigger(u.PLAYER_PAUSE,{prevState:e.state});break;case u.STATE_PLAYING:i.trigger(u.PLAYER_PLAY,{prevState:e.state})}e.state=t,i.trigger(u.PLAYER_STATE,{prevstate:n,newstate:e.state})}},i.getState=function(){return e.state},i.setBuffer=function(t){e.buffer=t},i.getBuffer=function(){return e.buffer},i.getDuration=function(){return s.duration===1/0||(0,a.separateLive)(e.extendedElement)?1/0:s.duration},i.getPosition=function(){return s?s.currentTime:0},i.setVolume=function(e){if(!s)return!1;s.volume=e/100},i.getVolume=function(){return s?100*s.volume:0},i.setMute=function(e){return!!s&&(void 0===e?(s.muted=!s.muted,i.trigger(u.CONTENT_MUTE,{mute:s.muted})):(s.muted=e,i.trigger(u.CONTENT_MUTE,{mute:s.muted})),s.muted)},i.getMute=function(){return!!s&&s.muted},i.preload=function(n,r){return e.sources=n,e.currentSource=(0,a.pickCurrentSource)(n,e.currentSource,t),d(r||0),new Promise(function(e,t){e()})},i.load=function(n){e.sources=n,e.currentSource=(0,a.pickCurrentSource)(n,e.currentSource,t),d(e.sources.starttime||0)},i.play=function(){if(!s)return!1;if(i.getState()!==u.STATE_PLAYING){var e=s.play();void 0!==e&&e.then(function(e){}).catch(function(e){setTimeout(function(){i.play()},1e3)})}},i.pause=function(){if(!s)return!1;i.getState()===u.STATE_PLAYING&&s.pause()},i.seek=function(e){if(!s)return!1;s.currentTime=e},i.setPlaybackRate=function(e){return!!s&&(i.trigger(u.PLAYBACK_RATE_CHANGED,{playbackRate:e}),s.playbackRate=s.defaultPlaybackRate=e)},i.getPlaybackRate=function(){return s?s.playbackRate:0},i.getSources=function(){return s?e.sources.map(function(e,t){return{file:e.file,type:e.type,label:e.label,index:t}}):[]},i.getCurrentSource=function(){return e.currentSource},i.setCurrentSource=function(n,r){return e.currentQuality!==n&&(n>-1&&e.sources&&e.sources.length>n?(i.setState(u.STATE_IDLE),OvenPlayerConsole.log("source changed : "+n),e.currentSource=n,i.trigger(u.CONTENT_SOURCE_CHANGED,{currentSource:n}),t.setSourceLabel(e.sources[n].label),r&&d(s.currentTime||0),e.currentSource):void 0)},i.getQualityLevels=function(){return s?e.qualityLevels:[]},i.getCurrentQuality=function(){return s?e.currentQuality:null},i.setCurrentQuality=function(e){},i.isAutoQuality=function(){},i.setAutoQuality=function(e){},i.stop=function(){if(!s)return!1;for(OvenPlayerConsole.log("CORE : stop() "),s.removeAttribute("preload"),s.removeAttribute("src");s.firstChild;)s.removeChild(s.firstChild);i.pause(),i.setState(u.STATE_IDLE)},i.destroy=function(){if(!s)return!1;i.stop(),l.destroy(),i.off(),OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied")},i.super=function(e){var t=i[e];return function(){return t.apply(i,arguments)}},i}},283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=n(279);t.default=function(e,t){var n={};OvenPlayerConsole.log("EventListener loaded.",e,t);var a={},u=(0,o.extractVideoElement)(e);return n.canplay=function(){t.setCanSeek(!0),t.trigger(r.CONTENT_BUFFER_FULL),OvenPlayerConsole.log("EventListener : on canplay")},n.durationchange=function(){n.progress(),OvenPlayerConsole.log("EventListener : on durationchange")},n.ended=function(){OvenPlayerConsole.log("EventListener : on ended"),t.getState()!=r.STATE_IDLE&&t.getState()!=r.STATE_COMPLETE&&(t.trigger(r.CONTENT_COMPLETE),t.setState(r.STATE_COMPLETE))},n.loadeddata=function(){OvenPlayerConsole.log("EventListener : on loadeddata")},n.loadedmetadata=function(){var n=u.duration===1/0||(0,o.separateLive)(e),a=t.getSources(),i=t.getCurrentSource(),l=i>-1?a[i].type:"",s={duration:n?1/0:u.duration,type:l};OvenPlayerConsole.log("EventListener : on loadedmetadata",s),t.trigger(r.CONTENT_META,s)},n.pause=function(){return t.getState()!==r.STATE_COMPLETE&&t.getState()!==r.STATE_ERROR&&!u.ended&&!u.error&&u.currentTime!==u.duration&&(OvenPlayerConsole.log("EventListener : on pause"),void t.setState(r.STATE_PAUSED))},n.play=function(){u.paused||t.getState()===r.STATE_PLAYING||(OvenPlayerConsole.log("EventListener : on play"),t.setState(r.STATE_LOADING))},n.playing=function(){OvenPlayerConsole.log("EventListener : on playing"),t.setState(r.STATE_PLAYING)},n.progress=function(){var e=u.buffered;if(!e)return!1;var n=u.duration,o=u.currentTime,a=function(e,t,n){return Math.max(Math.min(e,n),t)}((e.length>0?e.end(e.length-1):0)/n,0,1);OvenPlayerConsole.log("EventListener : on progress",100*a),t.setBuffer(100*a),t.trigger(r.CONTENT_BUFFER,{bufferPercent:100*a,position:o,duration:n})},n.stalled=function(){OvenPlayerConsole.log("EventListener : on stall")},n.timeupdate=function(){var e=u.currentTime,n=u.duration;isNaN(n)||(t.isSeeking()||u.paused||t.setState(r.STATE_PLAYING),(t.getState()===r.STATE_PLAYING||t.isSeeking())&&t.trigger(r.CONTENT_TIME,{position:e,duration:n}))},n.resize=function(){OvenPlayerConsole.log("EventListener : on resize")},n.seeking=function(){t.setSeeking(!0),OvenPlayerConsole.log("EventListener : on seeking",u.currentTime),t.trigger(r.CONTENT_SEEK,{position:u.currentTime})},n.seeked=function(){t.isSeeking()&&(OvenPlayerConsole.log("EventListener : on seeked"),t.setSeeking(!1),t.trigger(r.CONTENT_SEEKED))},n.waiting=function(){OvenPlayerConsole.log("EventListener : on waiting",t.getState()),t.isSeeking()?t.setState(r.STATE_LOADING):t.getState()===r.STATE_PLAYING&&t.setState(r.STATE_STALLED)},n.volumechange=function(){OvenPlayerConsole.log("EventListener : on volumechange",Math.round(100*u.volume)),t.trigger(r.CONTENT_VOLUME,{volume:Math.round(100*u.volume),mute:u.muted})},n.error=function(){var e=u.error&&u.error.code||0,n={0:{code:r.PLAYER_UNKNWON_ERROR,reason:"Unknown html5 video error",message:"Unknown html5 video error"},1:{code:r.PLAYER_UNKNWON_OPERATION_ERROR,reason:"Unknown operation aborted",message:"Unknown operation aborted"},2:{code:r.PLAYER_UNKNWON_NEWWORK_ERROR,reason:"Unknown network error",message:"Unknown network error"},3:{code:r.PLAYER_UNKNWON_DECODE_ERROR,reason:"Unknown decode error",message:"Unknown decode error"},4:{code:r.PLAYER_FILE_ERROR,reason:"File could not be played",message:"File could not be played"}}[e]||0;n.error=u.error,OvenPlayerConsole.log("EventListener : on error",n),function(e){t.setState(r.STATE_ERROR),t.pause(),t.trigger(r.ERROR,e)}(n)},Object.keys(n).forEach(function(e){u.removeEventListener(e,n[e]),u.addEventListener(e,n[e])}),a.destroy=function(){OvenPlayerConsole.log("EventListener : destroy()"),Object.keys(n).forEach(function(e){u.removeEventListener(e,n[e])})},a}},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(280)),o=u(n(282)),a=(n(279),n(7));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function e(t,n){var u={},i=null,l=null,s=(0,r.default)(t,a.PROVIDER_HLS),c=s.create();try{(i=new e({debug:!1})).attachMedia(c);var d={name:a.PROVIDER_HLS,extendedElement:i,listener:null,canSeek:!1,isLive:!1,seeking:!1,state:a.STATE_IDLE,buffer:0,currentQuality:-1,currentSource:-1,qualityLevels:[],sources:[]};u=(0,o.default)(d,n,function(e,t){OvenPlayerConsole.log("HLS : onExtendedLoad : ",e,"lastPlayPosition : "+t),i.loadSource(e.file),t>0&&(c.seek(t),u.play())}),l=u.super("destroy"),OvenPlayerConsole.log("HLS PROVIDER LOADED."),u.destroy=function(){i.destroy(),i=null,s.destroy(),s=null,c=null,OvenPlayerConsole.log("HLS : PROVIDER DESTROUYED."),l()}}catch(e){throw new Error(e)}return u}}}]);
//# sourceMappingURL=ovenplayer.provider.HlsProvider.js.map