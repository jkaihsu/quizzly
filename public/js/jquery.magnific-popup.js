// Magnific Popup v0.8.1 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=ajax
(function(a){var b="Close",c="BeforeAppend",d="MarkupParse",e="Open",f="Change",g="mfp",h="."+g,i="mfp-ready",j="mfp-removing",k="mfp-prevent-close",l,m=function(){},n,o=a(window),p,q,r,s,t=function(a,b){l.ev.on(g+a+h,b)},u=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},v=function(b,c){l.ev.triggerHandler(g+b,c),l.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),l.st.callbacks[b]&&l.st.callbacks[b].apply(l,a.isArray(c)?c:[c]))},w=function(){(l.st.focus?l.content.find(l.st.focus).eq(0):l.wrap).focus()},x,y=function(b){if(b!==x||!l.currTemplate.closeBtn)l.currTemplate.closeBtn=a(l.st.closeMarkup.replace("%title%",l.st.tClose)),x=b;return l.currTemplate.closeBtn};m.prototype={constructor:m,init:function(){var b=navigator.appVersion;l.isIE7=b.indexOf("MSIE 7.")!==-1,l.isAndroid=/android/gi.test(b),l.isIOS=/iphone|ipad|ipod/gi.test(b),l.probablyMobile=l.isAndroid||l.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),p=a(document.body),q=a(document),l.popupsCache={}},open:function(b){if(l.isOpen)return;var c;l.types=[],s="",l.ev=b.el||q;if(b.isObj)l.index=b.index||0;else{l.index=0;var f=b.items,g;for(c=0;c<f.length;c++){g=f[c],g.parsed&&(g=g.el[0]);if(g===b.el[0]){l.index=c;break}}}b.key?(l.popupsCache[b.key]||(l.popupsCache[b.key]={}),l.currTemplate=l.popupsCache[b.key]):l.currTemplate={},l.st=a.extend(!0,{},a.magnificPopup.defaults,b),l.fixedContentPos=l.st.fixedContentPos==="auto"?!l.probablyMobile:l.st.fixedContentPos,l.items=b.items.length?b.items:[b.items],l.bgOverlay||(l.bgOverlay=u("bg").on("click"+h,function(){l.close()}),l.wrap=u("wrap").attr("tabindex",-1).on("click"+h,function(b){var c=b.target;if(a(c).hasClass(k))return;l.st.closeOnContentClick?l.close():(!l.content||a(c).hasClass("mfp-close")||l.preloader&&b.target===l.preloader[0]||c!==l.content[0]&&!a.contains(l.content[0],c))&&l.close()}),l.container=u("container",l.wrap)),l.st.preloader&&(l.preloader=u("preloader",l.container,l.st.tLoading)),l.contentContainer=u("content",l.container);var j=a.magnificPopup.modules;for(c=0;c<j.length;c++){var m=j[c];m=m.charAt(0).toUpperCase()+m.slice(1),l["init"+m].call(l)}v("BeforeOpen"),l.st.closeBtnInside?(t(d,function(a,b,c,d){c.close_replaceWith=y(d.type)}),s+=" mfp-close-btn-in"):l.wrap.append(y()),l.st.alignTop&&(s+=" mfp-align-top"),l.fixedContentPos?l.wrap.css({overflow:l.st.overflowY,overflowX:"hidden",overflowY:l.st.overflowY}):l.wrap.css({top:o.scrollTop(),position:"absolute"}),(l.st.fixedBgPos===!1||l.st.fixedBgPos==="auto"&&!l.fixedContentPos)&&l.bgOverlay.css({height:q.height(),position:"absolute"}),q.on("keyup"+h,function(a){a.keyCode===27&&l.close()}),o.on("resize"+h,function(){l.updateSize()}),l.st.closeOnContentClick||(s+=" mfp-auto-cursor"),s&&l.wrap.addClass(s);var n=l.wH=o.height(),r={};if(l.fixedContentPos){var x=l._getScrollbarSize();x&&(r.paddingRight=x)}l.fixedContentPos&&(l.isIE7?a("body, html").css("overflow","hidden"):r.overflow="hidden");var z=l.st.mainClass;l.isIE7&&(z+=" mfp-ie7"),z&&l._addClassToMFP(z),l.updateItemHTML(),p.css(r),l.bgOverlay.add(l.wrap).prependTo(document.body),l._lastFocusedEl=document.activeElement,setTimeout(function(){l.content?(l._addClassToMFP(i),w()):l.bgOverlay.addClass(i),q.on("focusin"+h,function(b){if(b.target!==l.wrap[0]&&!a.contains(l.wrap[0],b.target))return w(),!1})},16),l.isOpen=!0,l.updateSize(n),v(e)},close:function(){if(!l.isOpen)return;l.isOpen=!1,l.st.removalDelay?(l._addClassToMFP(j),setTimeout(function(){l._close()},l.st.removalDelay)):l._close()},_close:function(){v(b);var c=j+" "+i+" ";l.bgOverlay.detach(),l.wrap.detach(),l.container.empty(),l.st.mainClass&&(c+=l.st.mainClass+" "),l._removeClassFromMFP(c);if(l.fixedContentPos){var d={paddingRight:0};l.isIE7?a("body, html").css("overflow","auto"):d.overflow="visible",p.css(d)}q.off("keyup"+h+" focusin"+h),l.ev.off(h),l.wrap.attr("class","mfp-wrap").removeAttr("style"),l.bgOverlay.attr("class","mfp-bg"),l.container.attr("class","mfp-container"),(!l.st.closeBtnInside||l.currTemplate[l.currItem.type]===!0)&&l.currTemplate.closeBtn&&l.currTemplate.closeBtn.detach(),l._lastFocusedEl&&a(l._lastFocusedEl).focus(),l.currTemplate=null,l.prevHeight=0},updateSize:function(a){if(l.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;l.wrap.css("height",c),l.wH=c}else l.wH=a||o.height();v("Resize")},updateItemHTML:function(){var b=l.items[l.index];b.parsed||(b=l.parseEl(l.index)),l.currItem=b;var c=b.type;if(!l.currTemplate[c]){var d=l.st[c]?l.st[c].markup:!1;d?(v("FirstMarkupParse",d),l.currTemplate[c]=a(d)):l.currTemplate[c]=!0}r&&r!==b.type&&l.container.removeClass("mfp-"+r+"-holder");var e=l["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,l.currTemplate[c]);l.appendContent(e,c),b.preloaded=!0,v(f,b),r=b.type},appendContent:function(a,b){l.content=a,a?l.st.closeBtnInside&&l.currTemplate[b]===!0?l.content.find(".mfp-close").length||l.content.append(y()):l.content=a:l.content="",v(c),l.container.addClass("mfp-"+b+"-holder"),l.contentContainer.html(l.content)},parseEl:function(b){var c=l.items[b],d=c.type;c.tagName?c={el:a(c)}:c={data:c,src:c.src};if(c.el){var e=l.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||l.st.type,c.index=b,c.parsed=!0,l.items[b]=c,v("ElementParse",c),l.items[b]},addGroup:function(b,c){var d=function(b){var d=c.midClick!==undefined?c.midClick:a.magnificPopup.defaults.midClick;if(d||b.which!==2){var e=c.disableOn!==undefined?c.disableOn:a.magnificPopup.defaults.disableOn;if(e)if(a.isFunction(e)){if(!e.call(l))return!0}else if(a(window).width()<e)return!0;b.preventDefault(),c.el=a(this),l.open(c)}};c||(c={});var e="click.magnificPopup";c.items?(c.isObj=!0,b.off(e).on(e,d)):(c.isObj=!1,c.delegate?(c.items=b.find(c.delegate),b.off(e).on(e,c.delegate,d)):(c.items=b,b.off(e).on(e,d)))},updateStatus:function(a,b){if(l.preloader){n!==a&&l.container.removeClass("mfp-s-"+n),!b&&a==="loading"&&(b=l.st.tLoading);var c={status:a,text:b};v("UpdateStatus",c),a=c.status,b=c.text,l.preloader.html(b),l.preloader.find("a").click(function(a){a.stopImmediatePropagation()}),l.container.addClass("mfp-s-"+a),n=a}},_addClassToMFP:function(a){l.bgOverlay.addClass(a),l.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),l.wrap.removeClass(a)},_hasScrollBar:function(a){return document.body.clientHeight>(a||o.height())?!0:!1},_parseMarkup:function(b,c,e){var f;e.data&&(c=a.extend(e.data,c)),v(d,[b,c,e]),a.each(c,function(a,c){if(c===undefined||c===!1)return!0;f=a.split("_");if(f.length>1){var d=b.find(h+"-"+f[0]);if(d.length>0){var e=f[1];e==="replaceWith"?d[0]!==c[0]&&d.replaceWith(c):e==="img"?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(f[1],c)}}else b.find(h+"-"+a).html(c)})},_getScrollbarSize:function(){if(l.scrollbarSize===undefined){var a=document.createElement("div");a.id="mfp-sbm",a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),l.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return l.scrollbarSize}},a.magnificPopup={instance:null,proto:m.prototype,modules:[],open:function(b,c){return a.magnificPopup.instance||(l=new m,l.init(),a.magnificPopup.instance=l),b||(b={}),b.isObj=!0,b.index=c===undefined?0:c,this.instance.open(b)},close:function(){return a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeBtnInside:!0,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(b){return a.magnificPopup.instance||(l=new m,l.init(),a.magnificPopup.instance=l),l.addGroup(a(this),b),a(this)};var z="ajax",A,B=function(){A&&p.removeClass(A)};a.magnificPopup.registerModule(z,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){l.types.push(z),A=l.st.ajax.cursor,t(b+"."+z,function(){B(),l.req&&l.req.abort()})},getAjax:function(b){A&&p.addClass(A),l.updateStatus("loading");var c=a.extend({url:b.src,success:function(c,d,e){v("ParseAjax",e),l.appendContent(a(e.responseText),z),b.finished=!0,B(),w(),setTimeout(function(){l.wrap.addClass(i)},16),l.updateStatus("ready")},error:function(){B(),b.finished=b.loadError=!0,l.updateStatus("error",l.st.ajax.tError.replace("%url%",b.src))}},l.st.ajax.settings);return l.req=a.ajax(c),""}}})})(window.jQuery||window.Zepto)