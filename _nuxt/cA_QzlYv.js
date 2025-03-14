import{d as W,B as Vn,C as dn,D as B,E as qn,G as Wn,H as on,I as fn,J as Z,K as V,L as $n,M as Kn,p as Xn,i as R,N as H,n as Yn,O as D,P as gn,_ as Zn,Q as mn,s as hn,c as K,g as rn,e as P,t as an,F as X,R as un,w as yn,A as Gn,f as sn}from"./DyyoDgP9.js";import{q as vn,_ as Jn,a as Qn,b as ne,c as ee}from"./CZLIVuvc.js";import{u as bn}from"./DZuy9pCv.js";import"./BpBgBtL_.js";const le=/\d/,te=["-","_","/","."];function oe(n=""){if(!le.test(n))return n!==n.toLowerCase()}function Cn(n,e){const l=te,t=[];if(!n||typeof n!="string")return t;let o="",a,c;for(const d of n){const f=l.includes(d);if(f===!0){t.push(o),o="",a=void 0;continue}const i=oe(d);if(c===!1){if(a===!1&&i===!0){t.push(o),o=d,a=i;continue}if(a===!0&&i===!1&&o.length>1){const p=o.at(-1);t.push(o.slice(0,Math.max(0,o.length-1))),o=p+d,a=i;continue}}o+=d,a=i,c=f}return t.push(o),t}function re(n){return n?n[0].toUpperCase()+n.slice(1):""}function U(n,e){return n?(Array.isArray(n)?n:Cn(n)).map(l=>re(l)).join(""):""}function xn(n,e){return n?(Array.isArray(n)?n:Cn(n)).map(l=>l.toLowerCase()).join("-"):""}const F=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];class N{constructor(e,l,t){this.property=e,this.normal=l,t&&(this.space=t)}}N.prototype.property={};N.prototype.normal={};N.prototype.space=null;function Sn(n,e){const l={},t={};let o=-1;for(;++o<n.length;)Object.assign(l,n[o].property),Object.assign(t,n[o].normal);return new N(l,t,e)}function G(n){return n.toLowerCase()}class S{constructor(e,l){this.property=e,this.attribute=l}}S.prototype.space=null;S.prototype.boolean=!1;S.prototype.booleanish=!1;S.prototype.overloadedBoolean=!1;S.prototype.number=!1;S.prototype.commaSeparated=!1;S.prototype.spaceSeparated=!1;S.prototype.commaOrSpaceSeparated=!1;S.prototype.mustUseProperty=!1;S.prototype.defined=!1;let ae=0;const u=A(),y=A(),kn=A(),r=A(),m=A(),j=A(),x=A();function A(){return 2**++ae}const J=Object.freeze(Object.defineProperty({__proto__:null,boolean:u,booleanish:y,commaOrSpaceSeparated:x,commaSeparated:j,number:r,overloadedBoolean:kn,spaceSeparated:m},Symbol.toStringTag,{value:"Module"})),Y=Object.keys(J);class ln extends S{constructor(e,l,t,o){let a=-1;if(super(e,l),cn(this,"space",o),typeof t=="number")for(;++a<Y.length;){const c=Y[a];cn(this,Y[a],(t&J[c])===J[c])}}}ln.prototype.defined=!0;function cn(n,e,l){l&&(n[e]=l)}const ue={}.hasOwnProperty;function I(n){const e={},l={};let t;for(t in n.properties)if(ue.call(n.properties,t)){const o=n.properties[t],a=new ln(t,n.transform(n.attributes||{},t),o,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(a.mustUseProperty=!0),e[t]=a,l[G(t)]=t,l[G(a.attribute)]=t}return new N(e,l,n.space)}const wn=I({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Pn=I({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function _n(n,e){return e in n?n[e]:e}function On(n,e){return _n(n,e.toLowerCase())}const Tn=I({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:On,properties:{xmlns:null,xmlnsXLink:null}}),Dn=I({transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:y,ariaAutoComplete:null,ariaBusy:y,ariaChecked:y,ariaColCount:r,ariaColIndex:r,ariaColSpan:r,ariaControls:m,ariaCurrent:null,ariaDescribedBy:m,ariaDetails:null,ariaDisabled:y,ariaDropEffect:m,ariaErrorMessage:null,ariaExpanded:y,ariaFlowTo:m,ariaGrabbed:y,ariaHasPopup:null,ariaHidden:y,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:m,ariaLevel:r,ariaLive:null,ariaModal:y,ariaMultiLine:y,ariaMultiSelectable:y,ariaOrientation:null,ariaOwns:m,ariaPlaceholder:null,ariaPosInSet:r,ariaPressed:y,ariaReadOnly:y,ariaRelevant:null,ariaRequired:y,ariaRoleDescription:m,ariaRowCount:r,ariaRowIndex:r,ariaRowSpan:r,ariaSelected:y,ariaSetSize:r,ariaSort:null,ariaValueMax:r,ariaValueMin:r,ariaValueNow:r,ariaValueText:null,role:null}}),ie=I({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:On,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:j,acceptCharset:m,accessKey:m,action:null,allow:null,allowFullScreen:u,allowPaymentRequest:u,allowUserMedia:u,alt:null,as:null,async:u,autoCapitalize:null,autoComplete:m,autoFocus:u,autoPlay:u,blocking:m,capture:null,charSet:null,checked:u,cite:null,className:m,cols:r,colSpan:null,content:null,contentEditable:y,controls:u,controlsList:m,coords:r|j,crossOrigin:null,data:null,dateTime:null,decoding:null,default:u,defer:u,dir:null,dirName:null,disabled:u,download:kn,draggable:y,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:u,formTarget:null,headers:m,height:r,hidden:u,high:r,href:null,hrefLang:null,htmlFor:m,httpEquiv:m,id:null,imageSizes:null,imageSrcSet:null,inert:u,inputMode:null,integrity:null,is:null,isMap:u,itemId:null,itemProp:m,itemRef:m,itemScope:u,itemType:m,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:u,low:r,manifest:null,max:null,maxLength:r,media:null,method:null,min:null,minLength:r,multiple:u,muted:u,name:null,nonce:null,noModule:u,noValidate:u,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:u,optimum:r,pattern:null,ping:m,placeholder:null,playsInline:u,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:u,referrerPolicy:null,rel:m,required:u,reversed:u,rows:r,rowSpan:r,sandbox:m,scope:null,scoped:u,seamless:u,selected:u,shadowRootClonable:u,shadowRootDelegatesFocus:u,shadowRootMode:null,shape:null,size:r,sizes:null,slot:null,span:r,spellCheck:y,src:null,srcDoc:null,srcLang:null,srcSet:null,start:r,step:null,style:null,tabIndex:r,target:null,title:null,translate:null,type:null,typeMustMatch:u,useMap:null,value:y,width:r,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:m,axis:null,background:null,bgColor:null,border:r,borderColor:null,bottomMargin:r,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:u,declare:u,event:null,face:null,frame:null,frameBorder:null,hSpace:r,leftMargin:r,link:null,longDesc:null,lowSrc:null,marginHeight:r,marginWidth:r,noResize:u,noHref:u,noShade:u,noWrap:u,object:null,profile:null,prompt:null,rev:null,rightMargin:r,rules:null,scheme:null,scrolling:y,standby:null,summary:null,text:null,topMargin:r,valueType:null,version:null,vAlign:null,vLink:null,vSpace:r,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:u,disableRemotePlayback:u,prefix:null,property:null,results:r,security:null,unselectable:null}}),se=I({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:_n,properties:{about:x,accentHeight:r,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:r,amplitude:r,arabicForm:null,ascent:r,attributeName:null,attributeType:null,azimuth:r,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:r,by:null,calcMode:null,capHeight:r,className:m,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:r,diffuseConstant:r,direction:null,display:null,dur:null,divisor:r,dominantBaseline:null,download:u,dx:null,dy:null,edgeMode:null,editable:null,elevation:r,enableBackground:null,end:null,event:null,exponent:r,externalResourcesRequired:null,fill:null,fillOpacity:r,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:j,g2:j,glyphName:j,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:r,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:r,horizOriginX:r,horizOriginY:r,id:null,ideographic:r,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:r,k:r,k1:r,k2:r,k3:r,k4:r,kernelMatrix:x,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:r,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:r,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:r,overlineThickness:r,paintOrder:null,panose1:null,path:null,pathLength:r,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:m,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:r,pointsAtY:r,pointsAtZ:r,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:x,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:x,rev:x,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:x,requiredFeatures:x,requiredFonts:x,requiredFormats:x,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:r,specularExponent:r,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:r,strikethroughThickness:r,string:null,stroke:null,strokeDashArray:x,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:r,strokeOpacity:r,strokeWidth:null,style:null,surfaceScale:r,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:x,tabIndex:r,tableValues:null,target:null,targetX:r,targetY:r,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:x,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:r,underlineThickness:r,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:r,values:null,vAlphabetic:r,vMathematical:r,vectorEffect:null,vHanging:r,vIdeographic:r,version:null,vertAdvY:r,vertOriginX:r,vertOriginY:r,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:r,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),ce=/^data[-\w.:]+$/i,pn=/-[a-z]/g,pe=/[A-Z]/g;function de(n,e){const l=G(e);let t=e,o=S;if(l in n.normal)return n.property[n.normal[l]];if(l.length>4&&l.slice(0,4)==="data"&&ce.test(e)){if(e.charAt(4)==="-"){const a=e.slice(5).replace(pn,ge);t="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=e.slice(4);if(!pn.test(a)){let c=a.replace(pe,fe);c.charAt(0)!=="-"&&(c="-"+c),e="data"+c}}o=ln}return new o(t,e)}function fe(n){return"-"+n.toLowerCase()}function ge(n){return n.charAt(1).toUpperCase()}const me=Sn([Pn,wn,Tn,Dn,ie],"html");Sn([Pn,wn,Tn,Dn,se],"svg");const he=["p","h1","h2","h3","h4","h5","h6","li"];function q(n,e){return n.type===e||typeof n.type=="object"&&n.type.tag===e||n.tag===e}function tn(n){return q(n,"text")||q(n,Symbol.for("v-txt"))}function Mn(n){var e;return Array.isArray(n.children)||typeof n.children=="string"?n.children:typeof((e=n.children)==null?void 0:e.default)=="function"?n.children.default():[]}function Q(n){if(!n)return"";if(Array.isArray(n))return n.map(Q).join("");if(tn(n))return n.value||n.children||"";const e=Mn(n);return Array.isArray(e)?e.map(Q).filter(Boolean).join(""):""}function Rn(n,e=[]){if(Array.isArray(n))return n.flatMap(t=>Rn(t,e));let l=n;return e.some(t=>t==="*"||q(n,t))&&(l=Mn(n)||n,!Array.isArray(l)&&he.some(t=>q(n,t))&&(l=[l])),l}function Ln(n,e=[]){return n=Array.isArray(n)?n:[n],e.length?n.flatMap(l=>Ln(Rn(l,[e[0]]),e.slice(1))).filter(l=>!(tn(l)&&Q(l).trim()==="")):n}function An(n,e=[]){return typeof e=="string"&&(e=e.split(/[,\s]/).map(l=>l.trim()).filter(Boolean)),e.length?Ln(n,e).reduce((l,t)=>(tn(t)?typeof l[l.length-1]=="string"?l[l.length-1]+=t.children:l.push(t.children):l.push(t),l),[]):n}function ye(n,e){return e.reduce((l,t)=>{const o=ve(n,t);return o!==void 0&&(l[t]=o),l},{})}function ve(n,e){return e.split(".").reduce((l,t)=>l&&l[t],n)}const nn="default",En=/^@|^v-on:/,Bn=/^:|^v-bind:/,be=/^v-model/,Ce=["select","textarea","input"],xe=["math","svg"],Se=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),ke=W({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},class:{type:[String,Object],default:void 0},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})},unwrap:{type:[Boolean,String],default:!1}},async setup(n){var f,i,p,g,b,O,_,C;const e=(p=(i=(f=Vn())==null?void 0:f.appContext)==null?void 0:i.app)==null?void 0:p.$nuxt,l=(e==null?void 0:e.$route)||(e==null?void 0:e._route),{mdc:t}=((g=e==null?void 0:e.$config)==null?void 0:g.public)||{},o={...(b=t==null?void 0:t.components)!=null&&b.prose&&n.prose!==!1?Se:{},...((O=t==null?void 0:t.components)==null?void 0:O.map)||{},...dn(((C=(_=n.data)==null?void 0:_.mdc)==null?void 0:C.components)||{}),...n.components},a=B(()=>{var L;const k=(((L=n.body)==null?void 0:L.children)||[]).map(T=>T.tag||T.type).filter(T=>!F.includes(T));return Array.from(new Set(k)).sort().join(".")}),c=qn({...n.data});Wn(()=>n.data,k=>{Object.assign(c,k)}),await Ee(n.body,{tags:o});function d(k,L){const T=k.split(".").length-1;return k.split(".").reduce((M,s,h)=>h==T&&M?(M[s]=L,M[s]):typeof M=="object"?M[s]:void 0,c)}return{tags:o,contentKey:a,route:l,runtimeData:c,updateRuntimeData:d}},render(n){var O,_;const{tags:e,tag:l,body:t,data:o,contentKey:a,route:c,unwrap:d,runtimeData:f,updateRuntimeData:i}=n;if(!t)return null;const p={...o,tags:e,$route:c,runtimeData:f,updateRuntimeData:i},g=l!==!1?en(l||((O=p.component)==null?void 0:O.name)||p.component||"div"):void 0;return g?on(g,{...(_=p.component)==null?void 0:_.props,class:n.class,...this.$attrs,key:a},{default:b}):b==null?void 0:b();function b(){const C=Un(t,on,{documentMeta:p,parentScope:p,resolveComponent:en});return C!=null&&C.default?d?An(C.default(),typeof d=="string"?d.split(" "):["*"]):C.default():null}}});function we(n,e,l){const{documentMeta:t,parentScope:o,resolveComponent:a}=l;if(n.type==="text")return e(V,n.value);if(n.type==="comment")return e($n,null,n.value);const c=n.tag,d=In(n,t.tags);if(n.tag==="binding")return Pe(n,e,t,o);const f=jn(d)?g=>g:a,i=f(d);typeof i=="object"&&(i.tag=c);const p=_e(n,t);return e(i,p,Un(n,e,{documentMeta:t,parentScope:{...o,...p},resolveComponent:f}))}function Un(n,e,l){const{documentMeta:t,parentScope:o,resolveComponent:a}=l,d=(n.children||[]).reduce((i,p)=>{if(!Le(p))return i[nn].children.push(p),i;const g=Re(p);return i[g]=i[g]||{props:{},children:[]},p.type==="element"&&(i[g].props=p.props,i[g].children.push(...p.children||[])),i},{[nn]:{props:{},children:[]}});return Object.entries(d).reduce((i,[p,{props:g,children:b}])=>(b.length&&(i[p]=(O={})=>{const _=ye(O,Object.keys(g||{}));let C=b.map(k=>we(k,e,{documentMeta:t,parentScope:{...o,..._},resolveComponent:a}));return g!=null&&g.unwrap&&(C=An(C,g.unwrap)),Ae(C)}),i),{})}function Pe(n,e,l,t={}){var i,p;const o={...l.runtimeData,...t,$document:l,$doc:l},a=/\.|\[(\d+)\]/,d=((i=n.props)==null?void 0:i.value.trim().split(a).filter(Boolean)).reduce((g,b)=>{if(g&&b in g)return typeof g[b]=="function"?g[b]():g[b]},o),f=(p=n.props)==null?void 0:p.defaultValue;return e(V,d??f??"")}function _e(n,e){const{tag:l="",props:t={}}=n;return Object.keys(t).reduce(function(o,a){if(a==="__ignoreMap")return o;const c=t[a];if(be.test(a))return Oe(a,c,o,e,{native:Ce.includes(l)});if(a==="v-bind")return Te(a,c,o,e);if(En.test(a))return De(a,c,o,e);if(Bn.test(a))return Me(a,c,o,e);const{attribute:d}=de(me,a);return Array.isArray(c)&&c.every(f=>typeof f=="string")?(o[d]=c.join(" "),o):(o[d]=c,o)},{})}function Oe(n,e,l,t,{native:o}){var f;const a=((f=n.match(/^v-model:([^=]+)/))==null?void 0:f[1])||"modelValue",c=o?"value":a,d=o?"onInput":`onUpdate:${a}`;return l[c]=$(e,t.runtimeData),l[d]=i=>{var p;t.updateRuntimeData(e,o?(p=i.target)==null?void 0:p.value:i)},l}function Te(n,e,l,t){const o=$(e,t);return l=Object.assign(l,o),l}function De(n,e,l,t){return n=n.replace(En,""),l.on=l.on||{},l.on[n]=()=>$(e,t),l}function Me(n,e,l,t){return n=n.replace(Bn,""),l[n]=$(e,t),l}const en=n=>{if(typeof n=="string"){if(F.includes(n))return n;const e=fn(U(n),!1);return!n||(e==null?void 0:e.name)==="AsyncComponentWrapper"||typeof e=="string"?e:"setup"in e?Z(()=>new Promise(l=>l(e))):e}return n};function $(n,e){const l=n.split(".").reduce((t,o)=>typeof t=="object"?t[o]:void 0,e);return typeof l>"u"?Kn(n):l}function Re(n){let e="";for(const l of Object.keys(n.props||{}))if(!(!l.startsWith("#")&&!l.startsWith("v-slot:"))){e=l.split(/[:#]/,2)[1];break}return e||nn}function Le(n){return n.tag==="template"}function jn(n){return xe.includes(n)}function Ae(n){const e=[];for(const l of n){const t=e[e.length-1];l.type===V&&(t==null?void 0:t.type)===V?t.children=t.children+l.children:e.push(l)}return e}async function Ee(n,e){if(!n)return;const l=Array.from(new Set(t(n,e)));await Promise.all(l.map(async o=>{if(o!=null&&o.render||o!=null&&o.ssrRender||o!=null&&o.__ssrInlineRender)return;const a=en(o);a!=null&&a.__asyncLoader&&!a.__asyncResolved&&await a.__asyncLoader()}));function t(o,a){const c=o.tag;if(o.type==="text"||c==="binding"||o.type==="comment")return[];const d=In(o,a.tags);if(jn(d))return[];const f=[];o.type!=="root"&&!F.includes(d)&&f.push(d);for(const i of o.children||[])f.push(...t(i,a));return f}}function In(n,e){var t;const l=n.tag;return!l||typeof((t=n.props)==null?void 0:t.__ignoreMap)<"u"?l:e[l]||e[U(l)]||e[xn(n.tag)]||l}function Be(n){return{type:"root",children:n.value.map(zn)}}function zn(n){if(typeof n=="string")return{type:"text",value:n};const[e,l,...t]=n;return{type:"element",tag:e,props:l,children:t.map(zn)}}const Hn=["ProseA","ProseBlockquote","ProseCode","ProseEm","ProseH1","ProseH2","ProseH3","ProseH4","ProseH5","ProseH6","ProseHr","ProseImg","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseStrong","ProseTable","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl","Icon"],Fn=[],Ue=Object.freeze(Object.defineProperty({__proto__:null,globalComponents:Hn,localComponents:Fn},Symbol.toStringTag,{value:"Module"})),je=W({__name:"ContentRenderer",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},prose:{type:Boolean,default:void 0},class:{type:[String,Object],default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(n){var k,L,T,M;const e=["render","ssrRender","__ssrInlineRender"],l=n,t=!1,o=B(()=>{let s=l.value.body||l.value;return l.excerpt&&l.value.excerpt&&(s=l.value.excerpt),s.type==="minimal"?Be(s):s}),a=B(()=>{var s,h;return!((h=(s=o.value)==null?void 0:s.children)!=null&&h.length)}),c=B(()=>{const{body:s,excerpt:h,...v}=l.value;return{...v,...l.data}}),d=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(s=>[s,`prose-${s}`])),{mdc:f}=Xn().public||{},i={...(k=f==null?void 0:f.components)!=null&&k.prose&&l.prose!==!1?d:{},...((L=f==null?void 0:f.components)==null?void 0:L.map)||{},...dn(((M=(T=l.data)==null?void 0:T.mdc)==null?void 0:M.components)||{}),...l.components},p=B(()=>{}),g=B(()=>o.value?O(o.value,{tags:i}):{});function b(s){let h=s;if(typeof s=="string"){if(F.includes(s))return s;if(Hn.includes(U(s))?h=fn(s,!1):Fn.includes(U(s))&&(h=Z(()=>Zn(()=>Promise.resolve().then(()=>Ue),void 0,import.meta.url).then(w=>w[U(s)]()))),typeof h=="string")return h}if(!h)return h;const v=h;return"__asyncLoader"in v?v:"setup"in v?Z(()=>Promise.resolve(v)):v}function O(s,h){if(!s)return;const v=Array.from(new Set(_(s,h))),w={};for(const[E,z]of v)typeof z=="object"&&e.some(Nn=>Object.hasOwnProperty.call(z,Nn))||w[E]||(w[E]=b(z));return w}function _(s,h){const v=s.tag;if(s.type==="text"||v==="binding"||s.type==="comment")return[];const w=C(s,h.tags),E=[];s.type!=="root"&&!F.includes(w)&&E.push([v,w]);for(const z of s.children||[])E.push(..._(z,h));return E}function C(s,h){var w;const v=s.tag;return!v||typeof((w=s.props)==null?void 0:w.__ignoreMap)<"u"?v:h[v]||h[U(v)]||h[xn(s.tag)]||v}return(s,h)=>a.value?gn(s.$slots,"empty",{key:1,body:o.value,data:c.value,dataContentId:D(t)?n.value.id:void 0}):(R(),H(ke,{key:p.value,body:o.value,data:c.value,class:Yn(l.class),tag:l.tag,prose:l.prose,unwrap:l.unwrap,components:g.value,"data-content-id":D(t)?n.value.id:void 0},null,8,["body","data","class","tag","prose","unwrap","components","data-content-id"]))}}),Ie={class:"relative flex bg-neutral-100"},ze={class:"w-full"},He=["src"],Fe={class:"w-full max-w-7xl mx-auto px-24"},Ne={class:"text-3xl font-bold mb-4"},Ve={class:"w-full max-w-7xl mx-auto px-4 lg:px-24 flex gap-4 place-content-start mb-24"},qe={class:"flex flex-col lg:flex-row gap-24 items-start max-w-7xl mx-auto px-24"},We={class:"flex-col gap-20 min-w-[300px] max-w-[300px]"},$e=W({__name:"layout",props:{image:{},title:{},tags:{}},async setup(n){let e,l;const{data:t}=([e,l]=mn(()=>bn("articles-recent",()=>vn("articles").order("date","DESC").limit(5).all())),e=await e,l(),e);return hn(),(o,a)=>{const c=Jn,d=Qn,f=ne,i=ee;return R(),K(X,null,[rn(c,{tight:!0}),P("div",Ie,[P("main",ze,[P("div",null,[P("img",{src:o.image,class:"h-[350px] w-full object-cover mb-12",alt:""},null,8,He),P("div",Fe,[P("h1",Ne,an(o.title),1)]),P("div",Ve,[(R(!0),K(X,null,un(o.tags,p=>(R(),H(d,null,{default:yn(()=>[Gn(an(p),1)]),_:2},1024))),256))])]),P("div",qe,[gn(o.$slots,"default"),P("aside",We,[a[0]||(a[0]=P("h2",{class:"text-3xl font-bold mb-2"}," Recent ",-1)),(R(!0),K(X,null,un(D(t),p=>(R(),H(f,{key:p.id,post:p},null,8,["post"]))),128))])])])]),rn(i)],64)}}}),Ge=W({__name:"[id]",async setup(n){let e,l;const t=hn(),{data:o}=([e,l]=mn(()=>bn(`post-${t.path}`,()=>vn("articles").path(t.path).first())),e=await e,l(),e);return(a,c)=>{var i;const d=je,f=$e;return(i=D(o))!=null&&i.image?(R(),H(f,{key:0,image:D(o).image,title:D(o).title,tags:D(o).tags},{default:yn(()=>[P("div",null,[D(o)?(R(),H(d,{key:0,class:"prose",value:D(o)},null,8,["value"])):sn("",!0)])]),_:1},8,["image","title","tags"])):sn("",!0)}}});export{Ge as default};
