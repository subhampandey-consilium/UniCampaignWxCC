"use strict";(self.webpackChunkuni_connect=self.webpackChunkuni_connect||[]).push([[8825],{77331:(se,U,l)=>{l.d(U,{Hi:()=>N});var i=l(29521),a=l(94650),_=l(3238);l(21281),l(83353),l(36895),l(38746),l(5529),l(36787),l(72986),l(7625),l(1059),l(12687),l(40445),l(95017),l(24006),l(59549);const R=new a.OlP("mat-chips-default-options");let N=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({providers:[_.rD,{provide:R,useValue:{separatorKeyCodes:[i.K5]}}],imports:[[_.BQ]]}),o})()},37084:(se,U,l)=>{l.d(U,{To:()=>P,ib:()=>o,u4:()=>c,yz:()=>d,yK:()=>O});var i=l(94650),a=l(95017),_=l(21281),m=l(42654);const S=new i.OlP("CdkAccordion");let I=0,M=(()=>{class s{constructor(n,r,g){this.accordion=n,this._changeDetectorRef=r,this._expansionDispatcher=g,this._openCloseAllSubscription=m.w.EMPTY,this.closed=new i.vpe,this.opened=new i.vpe,this.destroyed=new i.vpe,this.expandedChange=new i.vpe,this.id="cdk-accordion-child-"+I++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=g.listen((f,v)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===v&&this.id!==f&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}get expanded(){return this._expanded}set expanded(n){n=(0,_.Ig)(n),this._expanded!==n&&(this._expanded=n,this.expandedChange.emit(n),n?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(n){this._disabled=(0,_.Ig)(n)}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(n=>{this.disabled||(this.expanded=n)})}}return s.\u0275fac=function(n){return new(n||s)(i.Y36(S,12),i.Y36(i.sBO),i.Y36(a.A8))},s.\u0275dir=i.lG2({type:s,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[i._Bn([{provide:S,useValue:void 0}])]}),s})(),W=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({}),s})();var C=l(84080),A=l(36895),k=l(3238),Q=l(12687),j=l(75778),y=l(1059),E=l(92198),z=l(72986),B=l(29521),D=l(38746),w=l(5529),H=l(68896),G=l(36787),u=l(37340);const Z=["body"];function $(s,h){}const T=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],J=["mat-expansion-panel-header","*","mat-action-row"];function R(s,h){if(1&s&&i._UZ(0,"span",2),2&s){const n=i.oxw();i.Q6J("@indicatorRotate",n._getExpandedState())}}const X=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],q=["mat-panel-title","mat-panel-description","*"],L=new i.OlP("MAT_ACCORDION"),F="225ms cubic-bezier(0.4,0.0,0.2,1)",K={indicatorRotate:(0,u.X$)("indicatorRotate",[(0,u.SB)("collapsed, void",(0,u.oB)({transform:"rotate(0deg)"})),(0,u.SB)("expanded",(0,u.oB)({transform:"rotate(180deg)"})),(0,u.eR)("expanded <=> collapsed, void => collapsed",(0,u.jt)(F))]),bodyExpansion:(0,u.X$)("bodyExpansion",[(0,u.SB)("collapsed, void",(0,u.oB)({height:"0px",visibility:"hidden"})),(0,u.SB)("expanded",(0,u.oB)({height:"*",visibility:"visible"})),(0,u.eR)("expanded <=> collapsed, void => collapsed",(0,u.jt)(F))])};let ee=(()=>{class s{constructor(n){this._template=n}}return s.\u0275fac=function(n){return new(n||s)(i.Y36(i.Rgc))},s.\u0275dir=i.lG2({type:s,selectors:[["ng-template","matExpansionPanelContent",""]]}),s})(),ae=0;const N=new i.OlP("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let o=(()=>{class s extends M{constructor(n,r,g,f,v,te,V){super(n,r,g),this._viewContainerRef=f,this._animationMode=te,this._hideToggle=!1,this.afterExpand=new i.vpe,this.afterCollapse=new i.vpe,this._inputChanges=new w.xQ,this._headerId="mat-expansion-panel-header-"+ae++,this._bodyAnimationDone=new w.xQ,this.accordion=n,this._document=v,this._bodyAnimationDone.pipe((0,j.x)((x,b)=>x.fromState===b.fromState&&x.toState===b.toState)).subscribe(x=>{"void"!==x.fromState&&("expanded"===x.toState?this.afterExpand.emit():"collapsed"===x.toState&&this.afterCollapse.emit())}),V&&(this.hideToggle=V.hideToggle)}get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(n){this._hideToggle=(0,_.Ig)(n)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(n){this._togglePosition=n}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this.opened.pipe((0,y.O)(null),(0,E.h)(()=>this.expanded&&!this._portal),(0,z.q)(1)).subscribe(()=>{this._portal=new C.UE(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(n){this._inputChanges.next(n)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const n=this._document.activeElement,r=this._body.nativeElement;return n===r||r.contains(n)}return!1}}return s.\u0275fac=function(n){return new(n||s)(i.Y36(L,12),i.Y36(i.sBO),i.Y36(a.A8),i.Y36(i.s_b),i.Y36(A.K0),i.Y36(D.Qb,8),i.Y36(N,8))},s.\u0275cmp=i.Xpm({type:s,selectors:[["mat-expansion-panel"]],contentQueries:function(n,r,g){if(1&n&&i.Suo(g,ee,5),2&n){let f;i.iGM(f=i.CRH())&&(r._lazyContent=f.first)}},viewQuery:function(n,r){if(1&n&&i.Gf(Z,5),2&n){let g;i.iGM(g=i.CRH())&&(r._body=g.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(n,r){2&n&&i.ekj("mat-expanded",r.expanded)("_mat-animation-noopable","NoopAnimations"===r._animationMode)("mat-expansion-panel-spacing",r._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[i._Bn([{provide:L,useValue:void 0}]),i.qOj,i.TTD],ngContentSelectors:J,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,r){1&n&&(i.F$t(T),i.Hsn(0),i.TgZ(1,"div",0,1),i.NdJ("@bodyExpansion.done",function(f){return r._bodyAnimationDone.next(f)}),i.TgZ(3,"div",2),i.Hsn(4,1),i.YNc(5,$,0,0,"ng-template",3),i.qZA(),i.Hsn(6,2),i.qZA()),2&n&&(i.xp6(1),i.Q6J("@bodyExpansion",r._getExpandedState())("id",r.id),i.uIk("aria-labelledby",r._headerId),i.xp6(4),i.Q6J("cdkPortalOutlet",r._portal))},directives:[C.Pl],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n'],encapsulation:2,data:{animation:[K.bodyExpansion]},changeDetection:0}),s})();class e{}const t=(0,k.sb)(e);let d=(()=>{class s extends t{constructor(n,r,g,f,v,te,V){super(),this.panel=n,this._element=r,this._focusMonitor=g,this._changeDetectorRef=f,this._animationMode=te,this._parentChangeSubscription=m.w.EMPTY;const x=n.accordion?n.accordion._stateChanges.pipe((0,E.h)(b=>!(!b.hideToggle&&!b.togglePosition))):H.E;this.tabIndex=parseInt(V||"")||0,this._parentChangeSubscription=(0,G.T)(n.opened,n.closed,x,n._inputChanges.pipe((0,E.h)(b=>!!(b.hideToggle||b.disabled||b.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),n.closed.pipe((0,E.h)(()=>n._containsFocus())).subscribe(()=>g.focusVia(r,"program")),v&&(this.expandedHeight=v.expandedHeight,this.collapsedHeight=v.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const n=this._isExpanded();return n&&this.expandedHeight?this.expandedHeight:!n&&this.collapsedHeight?this.collapsedHeight:null}_keydown(n){switch(n.keyCode){case B.L_:case B.K5:(0,B.Vb)(n)||(n.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(n))}}focus(n,r){n?this._focusMonitor.focusVia(this._element,n,r):this._element.nativeElement.focus(r)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(n=>{n&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}return s.\u0275fac=function(n){return new(n||s)(i.Y36(o,1),i.Y36(i.SBq),i.Y36(Q.tE),i.Y36(i.sBO),i.Y36(N,8),i.Y36(D.Qb,8),i.$8M("tabindex"))},s.\u0275cmp=i.Xpm({type:s,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(n,r){1&n&&i.NdJ("click",function(){return r._toggle()})("keydown",function(f){return r._keydown(f)}),2&n&&(i.uIk("id",r.panel._headerId)("tabindex",r.tabIndex)("aria-controls",r._getPanelId())("aria-expanded",r._isExpanded())("aria-disabled",r.panel.disabled),i.Udp("height",r._getHeaderHeight()),i.ekj("mat-expanded",r._isExpanded())("mat-expansion-toggle-indicator-after","after"===r._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===r._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===r._animationMode))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[i.qOj],ngContentSelectors:q,decls:5,vars:1,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(n,r){1&n&&(i.F$t(X),i.TgZ(0,"span",0),i.Hsn(1),i.Hsn(2,1),i.Hsn(3,2),i.qZA(),i.YNc(4,R,1,1,"span",1)),2&n&&(i.xp6(4),i.Q6J("ngIf",r._showToggle()))},directives:[A.O5],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:""}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}\n'],encapsulation:2,data:{animation:[K.indicatorRotate]},changeDetection:0}),s})(),c=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275dir=i.lG2({type:s,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]}),s})(),O=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275dir=i.lG2({type:s,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),s})(),P=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[[A.ez,k.BQ,W,C.eL]]}),s})()}}]);