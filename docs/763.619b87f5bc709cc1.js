"use strict";(self.webpackChunkeyescan=self.webpackChunkeyescan||[]).push([[763],{763:(mt,L,r)=>{r.r(L),r.d(L,{DetailsContactComponent:()=>ct});var d=r(6814),l=r(6223),b=r(2296),m=r(7700),v=r(4170),S=r(617),T=r(2032),C=r(1919),e=r(5879),D=r(4191),H=r(2495),g=r(6028),U=r(8645),k=r(3019),F=r(7394),j=r(2096),Q=r(6410),B=r(7921),J=r(4664),Z=r(8180),Y=r(9773),P=r(2181),ee=r(6321),te=r(5211),ne=r(7538),ie=r(975),oe=r(1631),ae=r(4829);function z(i,a){return a?t=>(0,te.z)(a.pipe((0,Z.q)(1),(0,ne.l)()),t.pipe(z(i))):(0,oe.z)((t,n)=>(0,ae.Xf)(i(t,n)).pipe((0,Z.q)(1),(0,ie.h)(t)))}var se=r(9080);function X(i,a=ee.z){const t=(0,se.H)(i,a);return z(()=>t)}var f=r(3680),re=r(8484),u=r(6825),le=r(9388),R=r(3651),ce=r(2831),me=r(9829);const ue=["mat-menu-item",""];function de(i,a){1&i&&(e.O4$(),e.TgZ(0,"svg",3),e._UZ(1,"polygon",4),e.qZA())}const he=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],pe=["mat-icon, [matMenuItemIcon]","*"];function ge(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",0),e.NdJ("keydown",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s._handleKeydown(o))})("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.closed.emit("click"))})("@transformMenu.start",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s._onAnimationStart(o))})("@transformMenu.done",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s._onAnimationDone(o))}),e.TgZ(1,"div",1),e.Hsn(2),e.qZA()()}if(2&i){const t=e.oxw();e.Q6J("id",t.panelId)("ngClass",t._classList)("@transformMenu",t._panelAnimationState),e.uIk("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}const fe=["*"],q=new e.OlP("MAT_MENU_PANEL"),_e=(0,f.Kr)((0,f.Id)(class{}));let w=(()=>{class i extends _e{constructor(t,n,o,s,c){super(),this._elementRef=t,this._document=n,this._focusMonitor=o,this._parentMenu=s,this._changeDetectorRef=c,this.role="menuitem",this._hovered=new U.x,this._focused=new U.x,this._highlighted=!1,this._triggersSubmenu=!1,s?.addItem?.(this)}focus(t,n){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,n):this._getHostElement().focus(n),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){const t=this._elementRef.nativeElement.cloneNode(!0),n=t.querySelectorAll("mat-icon, .material-icons");for(let o=0;o<n.length;o++)n[o].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(d.K0),e.Y36(D.tE),e.Y36(q,8),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator","mdc-list-item"],hostVars:8,hostBindings:function(t,n){1&t&&e.NdJ("click",function(s){return n._checkDisabled(s)})("mouseenter",function(){return n._handleMouseEnter()}),2&t&&(e.uIk("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),e.ekj("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{disabled:"disabled",disableRipple:"disableRipple",role:"role"},exportAs:["matMenuItem"],features:[e.qOj],attrs:ue,ngContentSelectors:pe,decls:5,vars:3,consts:[[1,"mdc-list-item__primary-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["class","mat-mdc-menu-submenu-icon","viewBox","0 0 5 10","focusable","false","aria-hidden","true",4,"ngIf"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){1&t&&(e.F$t(he),e.Hsn(0),e.TgZ(1,"span",0),e.Hsn(2,1),e.qZA(),e._UZ(3,"div",1),e.YNc(4,de,2,0,"svg",2)),2&t&&(e.xp6(3),e.Q6J("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),e.xp6(1),e.Q6J("ngIf",n._triggersSubmenu))},dependencies:[d.O5,f.wG],encapsulation:2,changeDetection:0}),i})();const ve=new e.OlP("MatMenuContent"),O={transformMenu:(0,u.X$)("transformMenu",[(0,u.SB)("void",(0,u.oB)({opacity:0,transform:"scale(0.8)"})),(0,u.eR)("void => enter",(0,u.jt)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,u.oB)({opacity:1,transform:"scale(1)"}))),(0,u.eR)("* => void",(0,u.jt)("100ms 25ms linear",(0,u.oB)({opacity:0})))]),fadeInItems:(0,u.X$)("fadeInItems",[(0,u.SB)("showing",(0,u.oB)({opacity:1})),(0,u.eR)("void => *",[(0,u.oB)({opacity:0}),(0,u.jt)("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])};let Me=0;const G=new e.OlP("mat-menu-default-options",{providedIn:"root",factory:function be(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}});let A=(()=>{class i{get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}get overlapTrigger(){return this._overlapTrigger}set overlapTrigger(t){this._overlapTrigger=(0,H.Ig)(t)}get hasBackdrop(){return this._hasBackdrop}set hasBackdrop(t){this._hasBackdrop=(0,H.Ig)(t)}set panelClass(t){const n=this._previousPanelClass;n&&n.length&&n.split(" ").forEach(o=>{this._classList[o]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(o=>{this._classList[o]=!0}),this._elementRef.nativeElement.className="")}get classList(){return this.panelClass}set classList(t){this.panelClass=t}constructor(t,n,o,s){this._elementRef=t,this._ngZone=n,this._changeDetectorRef=s,this._directDescendantItems=new e.n_E,this._classList={},this._panelAnimationState="void",this._animationDone=new U.x,this.closed=new e.vpe,this.close=this.closed,this.panelId="mat-menu-panel-"+Me++,this.overlayPanelClass=o.overlayPanelClass||"",this._xPosition=o.xPosition,this._yPosition=o.yPosition,this.backdropClass=o.backdropClass,this._overlapTrigger=o.overlapTrigger,this._hasBackdrop=o.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new D.Em(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe((0,B.O)(this._directDescendantItems),(0,J.w)(t=>(0,k.T)(...t.map(n=>n._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{const n=this._keyManager;if("enter"===this._panelAnimationState&&n.activeItem?._hasFocus()){const o=t.toArray(),s=Math.max(0,Math.min(o.length-1,n.activeItemIndex||0));o[s]&&!o[s].disabled?n.setActiveItem(s):n.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusSubscription?.unsubscribe()}_hovered(){return this._directDescendantItems.changes.pipe((0,B.O)(this._directDescendantItems),(0,J.w)(n=>(0,k.T)(...n.map(o=>o._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){const n=t.keyCode,o=this._keyManager;switch(n){case g.hY:(0,g.Vb)(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case g.oh:this.parentMenu&&"ltr"===this.direction&&this.closed.emit("keydown");break;case g.SV:this.parentMenu&&"rtl"===this.direction&&this.closed.emit("keydown");break;default:return(n===g.LH||n===g.JH)&&o.setFocusOrigin("keyboard"),void o.onKeydown(t)}t.stopPropagation()}focusFirstItem(t="program"){this._firstItemFocusSubscription?.unsubscribe(),this._firstItemFocusSubscription=this._ngZone.onStable.pipe((0,Z.q)(1)).subscribe(()=>{let n=null;if(this._directDescendantItems.length&&(n=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!n||!n.contains(document.activeElement)){const o=this._keyManager;o.setFocusOrigin(t).setFirstItemActive(),!o.activeItem&&n&&n.focus()}})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){const n=Math.min(this._baseElevation+t,24),o=`${this._elevationPrefix}${n}`,s=Object.keys(this._classList).find(c=>c.startsWith(this._elevationPrefix));(!s||s===this._previousElevation)&&(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[o]=!0,this._previousElevation=o)}setPositionClasses(t=this.xPosition,n=this.yPosition){const o=this._classList;o["mat-menu-before"]="before"===t,o["mat-menu-after"]="after"===t,o["mat-menu-above"]="above"===n,o["mat-menu-below"]="below"===n,this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(t){this._animationDone.next(t),this._isAnimating=!1}_onAnimationStart(t){this._isAnimating=!0,"enter"===t.toState&&0===this._keyManager.activeItemIndex&&(t.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe((0,B.O)(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(n=>n._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(G),e.Y36(e.sBO))},i.\u0275dir=e.lG2({type:i,contentQueries:function(t,n,o){if(1&t&&(e.Suo(o,ve,5),e.Suo(o,w,5),e.Suo(o,w,4)),2&t){let s;e.iGM(s=e.CRH())&&(n.lazyContent=s.first),e.iGM(s=e.CRH())&&(n._allItems=s),e.iGM(s=e.CRH())&&(n.items=s)}},viewQuery:function(t,n){if(1&t&&e.Gf(e.Rgc,5),2&t){let o;e.iGM(o=e.CRH())&&(n.templateRef=o.first)}},inputs:{backdropClass:"backdropClass",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:"overlapTrigger",hasBackdrop:"hasBackdrop",panelClass:["class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"}}),i})(),ye=(()=>{class i extends A{constructor(t,n,o,s){super(t,n,o,s),this._elevationPrefix="mat-elevation-z",this._baseElevation=8}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(G),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["mat-menu"]],hostAttrs:["ngSkipHydration",""],hostVars:3,hostBindings:function(t,n){2&t&&e.uIk("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},exportAs:["matMenu"],features:[e._Bn([{provide:q,useExisting:i}]),e.qOj],ngContentSelectors:fe,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mdc-menu-surface","mdc-menu-surface--open","mat-mdc-elevation-specific",3,"id","ngClass","keydown","click"],[1,"mat-mdc-menu-content","mdc-list"]],template:function(t,n){1&t&&(e.F$t(),e.YNc(0,ge,3,6,"ng-template"))},dependencies:[d.mk],styles:['.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}.mdc-menu-surface{max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:var(--mdc-menu-max-height, calc(100vh - 32px));z-index:8;border-radius:var(--mdc-shape-medium, 4px)}mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-panel.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;position:relative}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item.mdc-list-item{align-items:center}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{margin-right:16px}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:16px}.mat-mdc-menu-item .mdc-list-item__primary-text{white-space:normal}.mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-mdc-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[O.transformMenu,O.fadeInItems]},changeDetection:0}),i})();const V=new e.OlP("mat-menu-scroll-strategy"),Te={provide:V,deps:[R.aV],useFactory:function Ce(i){return()=>i.scrollStrategies.reposition()}},$=(0,ce.i$)({passive:!0});let De=(()=>{class i{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){t!==this._menu&&(this._menu=t,this._menuCloseSubscription.unsubscribe(),t&&(this._menuCloseSubscription=t.close.subscribe(n=>{this._destroyMenu(n),("click"===n||"tab"===n)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(n)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(t,n,o,s,c,_,M,y,I){this._overlay=t,this._element=n,this._viewContainerRef=o,this._menuItemInstance=_,this._dir=M,this._focusMonitor=y,this._ngZone=I,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=F.w0.EMPTY,this._hoverSubscription=F.w0.EMPTY,this._menuCloseSubscription=F.w0.EMPTY,this._changeDetectorRef=(0,e.f3M)(e.sBO),this._handleTouchStart=x=>{(0,D.yG)(x)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new e.vpe,this.onMenuOpen=this.menuOpened,this.menuClosed=new e.vpe,this.onMenuClose=this.menuClosed,this._scrollStrategy=s,this._parentMaterialMenu=c instanceof A?c:void 0,n.nativeElement.addEventListener("touchstart",this._handleTouchStart,$)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,$),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){const t=this.menu;if(this._menuOpen||!t)return;const n=this._createOverlay(t),o=n.getConfig(),s=o.positionStrategy;this._setPosition(t,s),o.hasBackdrop=null==t.hasBackdrop?!this.triggersSubmenu():t.hasBackdrop,n.attach(this._getPortal(t)),t.lazyContent&&t.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(t),t instanceof A&&(t._startAnimation(),t._directDescendantItems.changes.pipe((0,Y.R)(t.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(t,n){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,n):this._element.nativeElement.focus(n)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(t){if(!this._overlayRef||!this.menuOpen)return;const n=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&("keydown"===t||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,n instanceof A?(n._resetAnimation(),n.lazyContent?n._animationDone.pipe((0,P.h)(o=>"void"===o.toState),(0,Z.q)(1),(0,Y.R)(n.lazyContent._attached)).subscribe({next:()=>n.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),n?.lazyContent?.detach())}_initMenu(t){t.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,this._setMenuElevation(t),t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(t){if(t.setElevation){let n=0,o=t.parentMenu;for(;o;)n++,o=o.parentMenu;t.setElevation(n)}}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){const n=this._getOverlayConfig(t);this._subscribeToPositions(t,n.positionStrategy),this._overlayRef=this._overlay.create(n),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(t){return new R.X_({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(t,n){t.setPositionClasses&&n.positionChanges.subscribe(o=>{const s="start"===o.connectionPair.overlayX?"after":"before",c="top"===o.connectionPair.overlayY?"below":"above";this._ngZone?this._ngZone.run(()=>t.setPositionClasses(s,c)):t.setPositionClasses(s,c)})}_setPosition(t,n){let[o,s]="before"===t.xPosition?["end","start"]:["start","end"],[c,_]="above"===t.yPosition?["bottom","top"]:["top","bottom"],[M,y]=[c,_],[I,x]=[o,s],E=0;if(this.triggersSubmenu()){if(x=o="before"===t.xPosition?"start":"end",s=I="end"===o?"start":"end",this._parentMaterialMenu){if(null==this._parentInnerPadding){const W=this._parentMaterialMenu.items.first;this._parentInnerPadding=W?W._getHostElement().offsetTop:0}E="bottom"===c?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(M="top"===c?"bottom":"top",y="top"===_?"bottom":"top");n.withPositions([{originX:o,originY:M,overlayX:I,overlayY:c,offsetY:E},{originX:s,originY:M,overlayX:x,overlayY:c,offsetY:E},{originX:o,originY:y,overlayX:I,overlayY:_,offsetY:-E},{originX:s,originY:y,overlayX:x,overlayY:_,offsetY:-E}])}_menuClosingActions(){const t=this._overlayRef.backdropClick(),n=this._overlayRef.detachments(),o=this._parentMaterialMenu?this._parentMaterialMenu.closed:(0,j.of)(),s=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe((0,P.h)(c=>c!==this._menuItemInstance),(0,P.h)(()=>this._menuOpen)):(0,j.of)();return(0,k.T)(t,o,s,n)}_handleMousedown(t){(0,D.X6)(t)||(this._openedBy=0===t.button?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){const n=t.keyCode;(n===g.K5||n===g.L_)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(n===g.SV&&"ltr"===this.dir||n===g.oh&&"rtl"===this.dir)&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe((0,P.h)(t=>t===this._menuItemInstance&&!t.disabled),X(0,Q.E)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof A&&this.menu._isAnimating?this.menu._animationDone.pipe((0,Z.q)(1),X(0,Q.E),(0,Y.R)(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new re.UE(t.templateRef,this._viewContainerRef)),this._portal}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(R.aV),e.Y36(e.SBq),e.Y36(e.s_b),e.Y36(V),e.Y36(q,8),e.Y36(w,10),e.Y36(le.Is,8),e.Y36(D.tE),e.Y36(e.R0b))},i.\u0275dir=e.lG2({type:i,hostVars:3,hostBindings:function(t,n){1&t&&e.NdJ("click",function(s){return n._handleClick(s)})("mousedown",function(s){return n._handleMousedown(s)})("keydown",function(s){return n._handleKeydown(s)}),2&t&&e.uIk("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:["mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:["matMenuTriggerFor","menu"],menuData:["matMenuTriggerData","menuData"],restoreFocus:["matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"}}),i})(),Ze=(()=>{class i extends De{}return i.\u0275fac=function(){let a;return function(n){return(a||(a=e.n5z(i)))(n||i)}}(),i.\u0275dir=e.lG2({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],exportAs:["matMenuTrigger"],features:[e.qOj]}),i})(),Ae=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[Te],imports:[d.ez,f.si,f.BQ,R.U8,me.ZD,f.BQ]}),i})();var K=r(1476),h=r(5313),Ie=r(6791),p=(()=>((p=p||{}).OPEN="OPEN",p.END="END",p.TRIAL="TRIAL",p.WIN="WIN",p.LOST="LOST",p))(),xe=r(4354),Ee=r(7654),Pe=r(8034),N=r(8525),Re=r(2596);function we(i,a){if(1&i&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.viewValue," ")}}function Oe(i,a){if(1&i&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.viewValue," ")}}let Ne=(()=>{class i{constructor(t,n,o){this.fb=t,this.dialogRef=n,this.data=o,this.processForm=this.fb.group({leftEar:[0,l.kI.required],rightEar:[0,l.kI.required],questionnaire:[0,l.kI.required],deviceLeftEar:["",l.kI.required],deviceRightEar:["",l.kI.required]}),this.devices=[{value:"device-0",viewValue:"No device"},{value:"device-1",viewValue:"Has device in last 3 years"},{value:"device-2",viewValue:"Has device more than 3 years"}]}ngOnInit(){}addProcess(){this.processForm.valid&&this.dialogRef.close(this.processForm.getRawValue())}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.j3),e.Y36(m.so),e.Y36(m.WI))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-process-dialog"]],standalone:!0,features:[e.jDz],decls:43,vars:5,consts:[[3,"formGroup","ngSubmit"],["mat-dialog-title",""],[1,"mat-typography"],[1,"row"],[1,"col-6"],["matInput","","formControlName","leftEar","type","number"],["formControlName","deviceLeftEar","name","device"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","rightEar","type","number"],["formControlName","deviceRightEar","name","device"],[1,"col-12"],["matInput","","formControlName","questionnaire","type","number"],["align","end"],["type","button","mat-button","","mat-dialog-close",""],["type","submit","mat-raised-button","","cdkFocusInitial","",3,"mat-dialog-close","color"],[3,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return n.addProcess()}),e.TgZ(1,"h2",1),e._uU(2,"Screening"),e.qZA(),e.TgZ(3,"mat-dialog-content",2)(4,"div",3)(5,"div",4)(6,"mat-form-field")(7,"mat-label"),e._uU(8,"leftEar"),e.qZA(),e._UZ(9,"input",5),e.TgZ(10,"mat-hint"),e._uU(11,"Interval normal 0-25, valorile pot fi mai mari de 25"),e.qZA()()(),e.TgZ(12,"div",4)(13,"mat-form-field")(14,"mat-label"),e._uU(15,"Device left ear"),e.qZA(),e.TgZ(16,"mat-select",6),e.YNc(17,we,2,2,"mat-option",7),e.qZA()()(),e.TgZ(18,"div",4)(19,"mat-form-field")(20,"mat-label"),e._uU(21,"rightEar"),e.qZA(),e._UZ(22,"input",8),e.TgZ(23,"mat-hint"),e._uU(24,"Interval normal 0-25, valorile pot fi mai mari de 25"),e.qZA()()(),e.TgZ(25,"div",4)(26,"mat-form-field")(27,"mat-label"),e._uU(28,"Device right ear"),e.qZA(),e.TgZ(29,"mat-select",9),e.YNc(30,Oe,2,2,"mat-option",7),e.qZA()()(),e.TgZ(31,"div",10)(32,"mat-form-field")(33,"mat-label"),e._uU(34,"questionnaire"),e.qZA(),e._UZ(35,"input",11),e.TgZ(36,"mat-hint"),e._uU(37,"Interval 0-40"),e.qZA()()()()(),e.TgZ(38,"mat-dialog-actions",12)(39,"button",13),e._uU(40,"Cancel"),e.qZA(),e.TgZ(41,"button",14),e._uU(42," Save process "),e.qZA()()()),2&t&&(e.Q6J("formGroup",n.processForm),e.xp6(17),e.Q6J("ngForOf",n.devices),e.xp6(13),e.Q6J("ngForOf",n.devices),e.xp6(11),e.Q6J("mat-dialog-close",!0)("color",n.processForm.valid?"primary":""))},dependencies:[d.ez,d.sg,l.u5,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.UX,l.sg,l.u,b.ot,b.lW,S.Ps,Re.AV,m.Is,m.ZT,m.uh,m.xY,m.H8,T.c,T.Nt,v.KE,v.hX,v.bx,v.lN,Pe.FA,f.XK,N.LD,N.gD,f.ey]}),i})();function Se(i,a){if(1&i&&(e.TgZ(0,"mat-option",11),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.viewValue," ")}}let Ue=(()=>{class i{constructor(t,n,o){this.fb=t,this.dialogRef=n,this.data=o,this.endProcessForm=this.fb.group({reason:["",l.kI.required],note:["",l.kI.required]}),this.reasons=[{value:"reason-0",viewValue:"Not ready"},{value:"reason-1",viewValue:"Esthetics"},{value:"reason-2",viewValue:"Expensive"}]}ngOnInit(){}endProcess(){this.endProcessForm.valid&&this.dialogRef.close(this.endProcessForm.getRawValue())}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.j3),e.Y36(m.so),e.Y36(m.WI))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-end-process-dialog"]],standalone:!0,features:[e.jDz],decls:21,vars:4,consts:[[3,"formGroup","ngSubmit"],["mat-dialog-title",""],[1,"mat-typography"],[1,"row"],[1,"col-12"],["formControlName","reason","name","reason"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","note"],["align","end"],["type","button","mat-button","","mat-dialog-close",""],["type","submit","mat-raised-button","","cdkFocusInitial","",3,"mat-dialog-close","color"],[3,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return n.endProcess()}),e.TgZ(1,"h2",1),e._uU(2,"End process"),e.qZA(),e.TgZ(3,"mat-dialog-content",2)(4,"div",3)(5,"div",4)(6,"mat-form-field")(7,"mat-label"),e._uU(8,"Reasons"),e.qZA(),e.TgZ(9,"mat-select",5),e.YNc(10,Se,2,2,"mat-option",6),e.qZA()()(),e.TgZ(11,"div",4)(12,"mat-form-field")(13,"mat-label"),e._uU(14,"Reason"),e.qZA(),e._UZ(15,"textarea",7),e.qZA()()()(),e.TgZ(16,"mat-dialog-actions",8)(17,"button",9),e._uU(18,"Cancel"),e.qZA(),e.TgZ(19,"button",10),e._uU(20," End process "),e.qZA()()()),2&t&&(e.Q6J("formGroup",n.endProcessForm),e.xp6(10),e.Q6J("ngForOf",n.reasons),e.xp6(9),e.Q6J("mat-dialog-close",!0)("color",n.endProcessForm.valid?"primary":""))},dependencies:[d.ez,d.sg,v.lN,v.KE,v.hX,l.u5,l._Y,l.Fj,l.JJ,l.JL,l.UX,l.sg,l.u,b.ot,b.lW,m.Is,m.ZT,m.uh,m.xY,m.H8,T.c,T.Nt,N.LD,N.gD,f.ey]}),i})();var ke=r(1303);function Fe(i,a){1&i&&(e.TgZ(0,"mat-header-cell",28),e._uU(1," createdDate "),e.qZA())}function Be(i,a){if(1&i&&(e.TgZ(0,"mat-cell",29),e._uU(1),e.ALo(2,"date"),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,t.createdDate)," ")}}function Ye(i,a){1&i&&(e.TgZ(0,"mat-header-cell",28),e._uU(1," leftEar "),e.qZA())}function qe(i,a){if(1&i&&(e.TgZ(0,"mat-cell",29),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.hij(" ",t.leftEar," ")}}function Le(i,a){1&i&&(e.TgZ(0,"mat-header-cell",28),e._uU(1," deviceLeftEar "),e.qZA())}function He(i,a){if(1&i&&(e.TgZ(0,"mat-cell",29),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.hij(" ",t.deviceLeftEar," ")}}function je(i,a){1&i&&(e.TgZ(0,"mat-header-cell",28),e._uU(1," rightEar "),e.qZA())}function Qe(i,a){if(1&i&&(e.TgZ(0,"mat-cell",29),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.hij(" ",t.rightEar," ")}}function Je(i,a){1&i&&(e.TgZ(0,"mat-header-cell",28),e._uU(1," deviceRightEar "),e.qZA())}function ze(i,a){if(1&i&&(e.TgZ(0,"mat-cell",29),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.hij(" ",t.deviceRightEar," ")}}function Xe(i,a){1&i&&(e.TgZ(0,"mat-header-cell",28),e._uU(1," questionnaire "),e.qZA())}function Ge(i,a){if(1&i&&(e.TgZ(0,"mat-cell",29),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.hij(" ",t.questionnaire," ")}}function Ve(i,a){1&i&&(e.TgZ(0,"mat-header-cell",28),e._uU(1," reason "),e.qZA())}function $e(i,a){if(1&i&&(e.TgZ(0,"mat-cell",29),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.hij(" ",t.reason," ")}}function Ke(i,a){1&i&&(e.TgZ(0,"mat-header-cell",28),e._uU(1," note "),e.qZA())}function We(i,a){if(1&i&&(e.TgZ(0,"mat-cell",29),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.hij(" ",t.note," ")}}function et(i,a){1&i&&(e.TgZ(0,"mat-header-cell",28),e._uU(1," status "),e.qZA())}function tt(i,a){if(1&i&&(e.TgZ(0,"mat-cell",29),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.hij(" ",t.status," ")}}function nt(i,a){1&i&&e._UZ(0,"mat-header-cell",28)}function it(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"button",33),e.NdJ("click",function(){const s=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.triggerAction(s.action))}),e.TgZ(1,"mat-icon"),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.qZA()()}if(2&i){const t=a.$implicit;e.xp6(2),e.Oqu(t.icon),e.xp6(2),e.Oqu(t.name)}}function ot(i,a){if(1&i&&(e.TgZ(0,"mat-cell",29)(1,"button",30)(2,"mat-icon"),e._uU(3,"more_vert"),e.qZA()(),e.TgZ(4,"mat-menu",null,31),e.YNc(6,it,5,2,"button",32),e.qZA()()),2&i){const t=e.MAs(5),n=e.oxw();e.xp6(1),e.Q6J("matMenuTriggerFor",t),e.xp6(5),e.Q6J("ngForOf",n.actions)}}function at(i,a){1&i&&e._UZ(0,"mat-header-row")}function st(i,a){1&i&&e._UZ(0,"mat-row")}const rt=function(){return[]},lt=function(){return[5,10,20]};let ct=(()=>{class i{constructor(t,n){this.activatedRoute=t,this.dialog=n,this.contact={id:1,firstName:"Ivascu",lastName:"Robert",email:"robi_ivas@yahoo.com",taxCode:"123",address:"Soseaua Pantelimon nr 266, bloc E, ap 23",phoneNumber:"0758662023",birthDate:new Date("1994-12-23T22:00:00.000Z"),lastAppointmentDate:new Date("2023-09-25T20:49:14.963Z"),lastBoughtDeviceDate:new Date("2023-09-25T20:49:14.963Z"),typeOfReservation:Ee.e.UNKNOWN,typeOfClient:xe.s.UNKNOWN,favoriteShop:"",deviceQuality:Ie.I.UNKNOWN,deviceSerialNumber:"",guarantee:new Date,privacy:!1},this.displayedColumns=["createdDate","leftEar","rightEar","questionnaire","deviceLeftEar","deviceRightEar","status","reason","note","actions"],this.actions=[{name:"Opportunity",icon:"dialpad"},{name:"Force end process",icon:"dialpad",action:"END_PROCESS_DIALOG"},{name:"Edit",icon:"dialpad"},{name:"Delete",icon:"dialpad"}],this.activatedRoute.paramMap.subscribe(o=>{const s=o.get("id");console.log({id:s})})}startProcess(){this.dialog.open(Ne).afterClosed().subscribe(({leftEar:n,rightEar:o,questionnaire:s,deviceLeftEar:c,deviceRightEar:_})=>{const M=n>25||o>25?p.OPEN:p.END;this.contact={...this.contact,process:[{createdDate:new Date,leftEar:n,rightEar:o,questionnaire:s,deviceLeftEar:c,deviceRightEar:_,status:M}]}})}triggerAction(t){"END_PROCESS_DIALOG"===t&&this.endProcess()}addNote(){}endProcess(){this.dialog.open(Ue).afterClosed().subscribe(({reason:n,note:o})=>{this.contact.process&&(this.contact.process[0].reason=n,this.contact.process[0].note=o,this.contact.process[0].status=p.LOST)})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(ke.gz),e.Y36(m.uw))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-details-contact"]],standalone:!0,features:[e.jDz],decls:99,vars:16,consts:[[1,"container-fluid","mt-2"],[1,"row"],[1,"col-6"],["mat-subheader",""],["matListItemIcon",""],["matListItemTitle",""],[1,"col-6","p-5","bg-primary","text-white"],[1,"col-6","p-5","bg-danger","text-white"],[1,"col-12","p-5","bg-warning","text-white"],[1,"col-12"],["type","button","mat-raised-button","","color","primary",3,"click"],[1,"mat-elevation-z8","mt-4"],[3,"dataSource"],["matColumnDef","createdDate"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","leftEar"],["matColumnDef","deviceLeftEar"],["matColumnDef","rightEar"],["matColumnDef","deviceRightEar"],["matColumnDef","questionnaire"],["matColumnDef","reason"],["matColumnDef","note"],["matColumnDef","status"],["matColumnDef","actions"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["mat-menu-item","",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-list")(4,"div",3),e._uU(5,"Contact details"),e.qZA(),e.TgZ(6,"mat-list-item")(7,"mat-icon",4),e._uU(8,"chevron_right"),e.qZA(),e.TgZ(9,"div",5),e._uU(10),e.qZA()(),e.TgZ(11,"mat-list-item")(12,"mat-icon",4),e._uU(13,"chevron_right"),e.qZA(),e.TgZ(14,"div",5),e._uU(15),e.qZA()(),e.TgZ(16,"mat-list-item")(17,"mat-icon",4),e._uU(18,"chevron_right"),e.qZA(),e.TgZ(19,"div",5),e._uU(20),e.qZA()(),e.TgZ(21,"mat-list-item")(22,"mat-icon",4),e._uU(23,"chevron_right"),e.qZA(),e.TgZ(24,"div",5),e._uU(25),e.qZA()(),e.TgZ(26,"mat-list-item")(27,"mat-icon",4),e._uU(28,"chevron_right"),e.qZA(),e.TgZ(29,"div",5),e._uU(30),e.qZA()(),e.TgZ(31,"mat-list-item")(32,"mat-icon",4),e._uU(33,"chevron_right"),e.qZA(),e.TgZ(34,"div",5),e._uU(35),e.qZA()(),e.TgZ(36,"mat-list-item")(37,"mat-icon",4),e._uU(38,"chevron_right"),e.qZA(),e.TgZ(39,"div",5),e._uU(40),e.ALo(41,"date"),e.qZA()(),e.TgZ(42,"mat-list-item")(43,"mat-icon",4),e._uU(44,"chevron_right"),e.qZA(),e.TgZ(45,"div",5),e._uU(46),e.qZA()()()(),e.TgZ(47,"div",2)(48,"div",3),e._uU(49,"Audiograma"),e.qZA(),e.TgZ(50,"div",1),e._UZ(51,"div",6)(52,"div",7)(53,"div",8),e.qZA()(),e.TgZ(54,"div",9)(55,"button",10),e.NdJ("click",function(){return n.startProcess()}),e._uU(56," Start process "),e.TgZ(57,"mat-icon"),e._uU(58,"search"),e.qZA()(),e.TgZ(59,"button",10),e.NdJ("click",function(){return n.addNote()}),e._uU(60," Add contact note"),e.TgZ(61,"mat-icon"),e._uU(62,"note"),e.qZA()()(),e.TgZ(63,"div",9)(64,"div",11)(65,"mat-table",12),e.ynx(66,13),e.YNc(67,Fe,2,0,"mat-header-cell",14),e.YNc(68,Be,3,3,"mat-cell",15),e.BQk(),e.ynx(69,16),e.YNc(70,Ye,2,0,"mat-header-cell",14),e.YNc(71,qe,2,1,"mat-cell",15),e.BQk(),e.ynx(72,17),e.YNc(73,Le,2,0,"mat-header-cell",14),e.YNc(74,He,2,1,"mat-cell",15),e.BQk(),e.ynx(75,18),e.YNc(76,je,2,0,"mat-header-cell",14),e.YNc(77,Qe,2,1,"mat-cell",15),e.BQk(),e.ynx(78,19),e.YNc(79,Je,2,0,"mat-header-cell",14),e.YNc(80,ze,2,1,"mat-cell",15),e.BQk(),e.ynx(81,20),e.YNc(82,Xe,2,0,"mat-header-cell",14),e.YNc(83,Ge,2,1,"mat-cell",15),e.BQk(),e.ynx(84,21),e.YNc(85,Ve,2,0,"mat-header-cell",14),e.YNc(86,$e,2,1,"mat-cell",15),e.BQk(),e.ynx(87,22),e.YNc(88,Ke,2,0,"mat-header-cell",14),e.YNc(89,We,2,1,"mat-cell",15),e.BQk(),e.ynx(90,23),e.YNc(91,et,2,0,"mat-header-cell",14),e.YNc(92,tt,2,1,"mat-cell",15),e.BQk(),e.ynx(93,24),e.YNc(94,nt,1,0,"mat-header-cell",14),e.YNc(95,ot,7,2,"mat-cell",15),e.BQk(),e.YNc(96,at,1,0,"mat-header-row",25),e.YNc(97,st,1,0,"mat-row",26),e.qZA(),e._UZ(98,"mat-paginator",27),e.qZA()()()()),2&t&&(e.xp6(10),e.Oqu(n.contact.firstName),e.xp6(5),e.Oqu(n.contact.lastName),e.xp6(5),e.Oqu(n.contact.email),e.xp6(5),e.Oqu(n.contact.address),e.xp6(5),e.Oqu(n.contact.firstName),e.xp6(5),e.Oqu(n.contact.taxCode),e.xp6(5),e.Oqu(e.lcZ(41,12,n.contact.birthDate)),e.xp6(6),e.Oqu(n.contact.privacy),e.xp6(19),e.Q6J("dataSource",n.contact.process||e.DdM(14,rt)),e.xp6(31),e.Q6J("matHeaderRowDef",n.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedColumns),e.xp6(1),e.Q6J("pageSizeOptions",e.DdM(15,lt)))},dependencies:[d.ez,d.sg,d.uU,C.ie,C.i$,C.Tg,C.Yt,C.gs,C.sL,S.Ps,S.Hw,v.lN,l.u5,l.UX,T.c,b.ot,b.lW,b.RK,m.Is,h.p0,h.BZ,h.fO,h.as,h.w1,h.Dz,h.nj,h.ge,h.ev,h.XQ,h.Gk,K.TU,K.NW,Ae,ye,w,Ze]}),i})()}}]);