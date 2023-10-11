"use strict";(self.webpackChunkeyescan=self.webpackChunkeyescan||[]).push([[405],{1405:(rt,D,l)=>{l.r(D),l.d(D,{DetailsContactComponent:()=>lt});var d=l(6814),i=l(6223),p=l(2296),c=l(7700),u=l(4170),h=l(617),f=l(2032),g=l(1919),Z=l(6380),A=l(1476),s=l(5313),U=l(6791),r=(()=>((r=r||{}).OPEN="OPEN",r.END="END",r.TRIAL="TRIAL",r.WIN="WIN",r.LOST="LOST",r))(),N=l(4354),q=l(7654),T=l(3680),x=l(8034),v=l(8525),b=l(2596),t=l(5879);function y(e,o){if(1&e&&(t.TgZ(0,"mat-option",15),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.Q6J("value",a.value),t.xp6(1),t.hij(" ",a.viewValue," ")}}function E(e,o){if(1&e&&(t.TgZ(0,"mat-option",15),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.Q6J("value",a.value),t.xp6(1),t.hij(" ",a.viewValue," ")}}let O=(()=>{class e{constructor(a,n,m){this.fb=a,this.dialogRef=n,this.data=m,this.processForm=this.fb.group({leftEar:[0,i.kI.required],rightEar:[0,i.kI.required],questionnaire:[0,i.kI.required],deviceLeftEar:["",i.kI.required],deviceRightEar:["",i.kI.required]}),this.devices=[{value:"device-0",viewValue:"No device"},{value:"device-1",viewValue:"Has device in last 3 years"},{value:"device-2",viewValue:"Has device more than 3 years"}]}ngOnInit(){}addProcess(){this.processForm.valid&&this.dialogRef.close(this.processForm.getRawValue())}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(i.j3),t.Y36(c.so),t.Y36(c.WI))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-process-dialog"]],standalone:!0,features:[t.jDz],decls:43,vars:5,consts:[[3,"formGroup","ngSubmit"],["mat-dialog-title",""],[1,"mat-typography"],[1,"row"],[1,"col-6"],["matInput","","formControlName","leftEar","type","number"],["formControlName","deviceLeftEar","name","device"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","rightEar","type","number"],["formControlName","deviceRightEar","name","device"],[1,"col-12"],["matInput","","formControlName","questionnaire","type","number"],["align","end"],["type","button","mat-button","","mat-dialog-close",""],["type","submit","mat-raised-button","","cdkFocusInitial","",3,"mat-dialog-close","color"],[3,"value"]],template:function(a,n){1&a&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.addProcess()}),t.TgZ(1,"h2",1),t._uU(2,"Screening"),t.qZA(),t.TgZ(3,"mat-dialog-content",2)(4,"div",3)(5,"div",4)(6,"mat-form-field")(7,"mat-label"),t._uU(8,"leftEar"),t.qZA(),t._UZ(9,"input",5),t.TgZ(10,"mat-hint"),t._uU(11,"Interval normal 0-25, valorile pot fi mai mari de 25"),t.qZA()()(),t.TgZ(12,"div",4)(13,"mat-form-field")(14,"mat-label"),t._uU(15,"Device left ear"),t.qZA(),t.TgZ(16,"mat-select",6),t.YNc(17,y,2,2,"mat-option",7),t.qZA()()(),t.TgZ(18,"div",4)(19,"mat-form-field")(20,"mat-label"),t._uU(21,"rightEar"),t.qZA(),t._UZ(22,"input",8),t.TgZ(23,"mat-hint"),t._uU(24,"Interval normal 0-25, valorile pot fi mai mari de 25"),t.qZA()()(),t.TgZ(25,"div",4)(26,"mat-form-field")(27,"mat-label"),t._uU(28,"Device right ear"),t.qZA(),t.TgZ(29,"mat-select",9),t.YNc(30,E,2,2,"mat-option",7),t.qZA()()(),t.TgZ(31,"div",10)(32,"mat-form-field")(33,"mat-label"),t._uU(34,"questionnaire"),t.qZA(),t._UZ(35,"input",11),t.TgZ(36,"mat-hint"),t._uU(37,"Interval 0-40"),t.qZA()()()()(),t.TgZ(38,"mat-dialog-actions",12)(39,"button",13),t._uU(40,"Cancel"),t.qZA(),t.TgZ(41,"button",14),t._uU(42," Save process "),t.qZA()()()),2&a&&(t.Q6J("formGroup",n.processForm),t.xp6(17),t.Q6J("ngForOf",n.devices),t.xp6(13),t.Q6J("ngForOf",n.devices),t.xp6(11),t.Q6J("mat-dialog-close",!0)("color",n.processForm.valid?"primary":""))},dependencies:[d.ez,d.sg,i.u5,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.UX,i.sg,i.u,p.ot,p.lW,h.Ps,b.AV,c.Is,c.ZT,c.uh,c.xY,c.H8,f.c,f.Nt,u.KE,u.hX,u.bx,u.lN,x.FA,T.XK,v.LD,v.gD,T.ey]}),e})();function Y(e,o){if(1&e&&(t.TgZ(0,"mat-option",11),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.Q6J("value",a.value),t.xp6(1),t.hij(" ",a.viewValue," ")}}let P=(()=>{class e{constructor(a,n,m){this.fb=a,this.dialogRef=n,this.data=m,this.endProcessForm=this.fb.group({reason:["",i.kI.required],note:["",i.kI.required]}),this.reasons=[{value:"reason-0",viewValue:"Not ready"},{value:"reason-1",viewValue:"Esthetics"},{value:"reason-2",viewValue:"Expensive"}]}ngOnInit(){}endProcess(){this.endProcessForm.valid&&this.dialogRef.close(this.endProcessForm.getRawValue())}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(i.j3),t.Y36(c.so),t.Y36(c.WI))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-end-process-dialog"]],standalone:!0,features:[t.jDz],decls:21,vars:4,consts:[[3,"formGroup","ngSubmit"],["mat-dialog-title",""],[1,"mat-typography"],[1,"row"],[1,"col-12"],["formControlName","reason","name","reason"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","note"],["align","end"],["type","button","mat-button","","mat-dialog-close",""],["type","submit","mat-raised-button","","cdkFocusInitial","",3,"mat-dialog-close","color"],[3,"value"]],template:function(a,n){1&a&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.endProcess()}),t.TgZ(1,"h2",1),t._uU(2,"End process"),t.qZA(),t.TgZ(3,"mat-dialog-content",2)(4,"div",3)(5,"div",4)(6,"mat-form-field")(7,"mat-label"),t._uU(8,"Reasons"),t.qZA(),t.TgZ(9,"mat-select",5),t.YNc(10,Y,2,2,"mat-option",6),t.qZA()()(),t.TgZ(11,"div",4)(12,"mat-form-field")(13,"mat-label"),t._uU(14,"Reason"),t.qZA(),t._UZ(15,"textarea",7),t.qZA()()()(),t.TgZ(16,"mat-dialog-actions",8)(17,"button",9),t._uU(18,"Cancel"),t.qZA(),t.TgZ(19,"button",10),t._uU(20," End process "),t.qZA()()()),2&a&&(t.Q6J("formGroup",n.endProcessForm),t.xp6(10),t.Q6J("ngForOf",n.reasons),t.xp6(9),t.Q6J("mat-dialog-close",!0)("color",n.endProcessForm.valid?"primary":""))},dependencies:[d.ez,d.sg,u.lN,u.KE,u.hX,i.u5,i._Y,i.Fj,i.JJ,i.JL,i.UX,i.sg,i.u,p.ot,p.lW,c.Is,c.ZT,c.uh,c.xY,c.H8,f.c,f.Nt,v.LD,v.gD,T.ey]}),e})();var I=l(1303);function F(e,o){1&e&&(t.TgZ(0,"mat-header-cell",28),t._uU(1," createdDate "),t.qZA())}function R(e,o){if(1&e&&(t.TgZ(0,"mat-cell",29),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,a.createdDate)," ")}}function Q(e,o){1&e&&(t.TgZ(0,"mat-header-cell",28),t._uU(1," leftEar "),t.qZA())}function w(e,o){if(1&e&&(t.TgZ(0,"mat-cell",29),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.leftEar," ")}}function J(e,o){1&e&&(t.TgZ(0,"mat-header-cell",28),t._uU(1," deviceLeftEar "),t.qZA())}function S(e,o){if(1&e&&(t.TgZ(0,"mat-cell",29),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.deviceLeftEar," ")}}function L(e,o){1&e&&(t.TgZ(0,"mat-header-cell",28),t._uU(1," rightEar "),t.qZA())}function j(e,o){if(1&e&&(t.TgZ(0,"mat-cell",29),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.rightEar," ")}}function k(e,o){1&e&&(t.TgZ(0,"mat-header-cell",28),t._uU(1," deviceRightEar "),t.qZA())}function $(e,o){if(1&e&&(t.TgZ(0,"mat-cell",29),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.deviceRightEar," ")}}function V(e,o){1&e&&(t.TgZ(0,"mat-header-cell",28),t._uU(1," questionnaire "),t.qZA())}function B(e,o){if(1&e&&(t.TgZ(0,"mat-cell",29),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.questionnaire," ")}}function z(e,o){1&e&&(t.TgZ(0,"mat-header-cell",28),t._uU(1," reason "),t.qZA())}function W(e,o){if(1&e&&(t.TgZ(0,"mat-cell",29),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.reason," ")}}function X(e,o){1&e&&(t.TgZ(0,"mat-header-cell",28),t._uU(1," note "),t.qZA())}function H(e,o){if(1&e&&(t.TgZ(0,"mat-cell",29),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.note," ")}}function K(e,o){1&e&&(t.TgZ(0,"mat-header-cell",28),t._uU(1," status "),t.qZA())}function G(e,o){if(1&e&&(t.TgZ(0,"mat-cell",29),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.status," ")}}function M(e,o){1&e&&t._UZ(0,"mat-header-cell",28)}function tt(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"button",33),t.NdJ("click",function(){const _=t.CHM(a).$implicit,C=t.oxw(2);return t.KtG(C.triggerAction(_.action))}),t.TgZ(1,"mat-icon"),t._uU(2),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.qZA()()}if(2&e){const a=o.$implicit;t.xp6(2),t.Oqu(a.icon),t.xp6(2),t.Oqu(a.name)}}function et(e,o){if(1&e&&(t.TgZ(0,"mat-cell",29)(1,"button",30)(2,"mat-icon"),t._uU(3,"more_vert"),t.qZA()(),t.TgZ(4,"mat-menu",null,31),t.YNc(6,tt,5,2,"button",32),t.qZA()()),2&e){const a=t.MAs(5),n=t.oxw();t.xp6(1),t.Q6J("matMenuTriggerFor",a),t.xp6(5),t.Q6J("ngForOf",n.actions)}}function at(e,o){1&e&&t._UZ(0,"mat-header-row")}function ot(e,o){1&e&&t._UZ(0,"mat-row")}const nt=function(){return[]},it=function(){return[5,10,20]};let lt=(()=>{class e{constructor(a,n){this.activatedRoute=a,this.dialog=n,this.contact={id:1,firstName:"Ivascu",lastName:"Robert",email:"robi_ivas@yahoo.com",taxCode:"123",address:"Soseaua Pantelimon nr 266, bloc E, ap 23",phoneNumber:"0758662023",birthDate:new Date("1994-12-23T22:00:00.000Z"),lastAppointmentDate:new Date("2023-09-25T20:49:14.963Z"),lastBoughtDeviceDate:new Date("2023-09-25T20:49:14.963Z"),typeOfReservation:q.e.UNKNOWN,typeOfClient:N.s.UNKNOWN,favoriteShop:"",deviceQuality:U.I.UNKNOWN,deviceSerialNumber:"",guarantee:new Date,privacy:!1},this.displayedColumns=["createdDate","leftEar","rightEar","questionnaire","deviceLeftEar","deviceRightEar","status","reason","note","actions"],this.actions=[{name:"Opportunity",icon:"dialpad"},{name:"Force end process",icon:"dialpad",action:"END_PROCESS_DIALOG"},{name:"Edit",icon:"dialpad"},{name:"Delete",icon:"dialpad"}],this.activatedRoute.paramMap.subscribe(m=>{const _=m.get("id");console.log({id:_})})}startProcess(){this.dialog.open(O).afterClosed().subscribe(({leftEar:n,rightEar:m,questionnaire:_,deviceLeftEar:C,deviceRightEar:ct})=>{const mt=n>25||m>25?r.OPEN:r.END;this.contact={...this.contact,process:[{createdDate:new Date,leftEar:n,rightEar:m,questionnaire:_,deviceLeftEar:C,deviceRightEar:ct,status:mt}]}})}triggerAction(a){"END_PROCESS_DIALOG"===a&&this.endProcess()}addNote(){}endProcess(){this.dialog.open(P).afterClosed().subscribe(({reason:n,note:m})=>{this.contact.process&&(this.contact.process[0].reason=n,this.contact.process[0].note=m,this.contact.process[0].status=r.LOST)})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(I.gz),t.Y36(c.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-details-contact"]],standalone:!0,features:[t.jDz],decls:99,vars:16,consts:[[1,"container-fluid","mt-2"],[1,"row"],[1,"col-6"],["mat-subheader",""],["matListItemIcon",""],["matListItemTitle",""],[1,"col-6","p-5","bg-primary","text-white"],[1,"col-6","p-5","bg-danger","text-white"],[1,"col-12","p-5","bg-warning","text-white"],[1,"col-12"],["type","button","mat-raised-button","","color","primary",3,"click"],[1,"mat-elevation-z8","mt-4"],[3,"dataSource"],["matColumnDef","createdDate"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","leftEar"],["matColumnDef","deviceLeftEar"],["matColumnDef","rightEar"],["matColumnDef","deviceRightEar"],["matColumnDef","questionnaire"],["matColumnDef","reason"],["matColumnDef","note"],["matColumnDef","status"],["matColumnDef","actions"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["mat-menu-item","",3,"click"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-list")(4,"div",3),t._uU(5,"Contact details"),t.qZA(),t.TgZ(6,"mat-list-item")(7,"mat-icon",4),t._uU(8,"chevron_right"),t.qZA(),t.TgZ(9,"div",5),t._uU(10),t.qZA()(),t.TgZ(11,"mat-list-item")(12,"mat-icon",4),t._uU(13,"chevron_right"),t.qZA(),t.TgZ(14,"div",5),t._uU(15),t.qZA()(),t.TgZ(16,"mat-list-item")(17,"mat-icon",4),t._uU(18,"chevron_right"),t.qZA(),t.TgZ(19,"div",5),t._uU(20),t.qZA()(),t.TgZ(21,"mat-list-item")(22,"mat-icon",4),t._uU(23,"chevron_right"),t.qZA(),t.TgZ(24,"div",5),t._uU(25),t.qZA()(),t.TgZ(26,"mat-list-item")(27,"mat-icon",4),t._uU(28,"chevron_right"),t.qZA(),t.TgZ(29,"div",5),t._uU(30),t.qZA()(),t.TgZ(31,"mat-list-item")(32,"mat-icon",4),t._uU(33,"chevron_right"),t.qZA(),t.TgZ(34,"div",5),t._uU(35),t.qZA()(),t.TgZ(36,"mat-list-item")(37,"mat-icon",4),t._uU(38,"chevron_right"),t.qZA(),t.TgZ(39,"div",5),t._uU(40),t.ALo(41,"date"),t.qZA()(),t.TgZ(42,"mat-list-item")(43,"mat-icon",4),t._uU(44,"chevron_right"),t.qZA(),t.TgZ(45,"div",5),t._uU(46),t.qZA()()()(),t.TgZ(47,"div",2)(48,"div",3),t._uU(49,"Audiograma"),t.qZA(),t.TgZ(50,"div",1),t._UZ(51,"div",6)(52,"div",7)(53,"div",8),t.qZA()(),t.TgZ(54,"div",9)(55,"button",10),t.NdJ("click",function(){return n.startProcess()}),t._uU(56," Start process "),t.TgZ(57,"mat-icon"),t._uU(58,"search"),t.qZA()(),t.TgZ(59,"button",10),t.NdJ("click",function(){return n.addNote()}),t._uU(60," Add contact note"),t.TgZ(61,"mat-icon"),t._uU(62,"note"),t.qZA()()(),t.TgZ(63,"div",9)(64,"div",11)(65,"mat-table",12),t.ynx(66,13),t.YNc(67,F,2,0,"mat-header-cell",14),t.YNc(68,R,3,3,"mat-cell",15),t.BQk(),t.ynx(69,16),t.YNc(70,Q,2,0,"mat-header-cell",14),t.YNc(71,w,2,1,"mat-cell",15),t.BQk(),t.ynx(72,17),t.YNc(73,J,2,0,"mat-header-cell",14),t.YNc(74,S,2,1,"mat-cell",15),t.BQk(),t.ynx(75,18),t.YNc(76,L,2,0,"mat-header-cell",14),t.YNc(77,j,2,1,"mat-cell",15),t.BQk(),t.ynx(78,19),t.YNc(79,k,2,0,"mat-header-cell",14),t.YNc(80,$,2,1,"mat-cell",15),t.BQk(),t.ynx(81,20),t.YNc(82,V,2,0,"mat-header-cell",14),t.YNc(83,B,2,1,"mat-cell",15),t.BQk(),t.ynx(84,21),t.YNc(85,z,2,0,"mat-header-cell",14),t.YNc(86,W,2,1,"mat-cell",15),t.BQk(),t.ynx(87,22),t.YNc(88,X,2,0,"mat-header-cell",14),t.YNc(89,H,2,1,"mat-cell",15),t.BQk(),t.ynx(90,23),t.YNc(91,K,2,0,"mat-header-cell",14),t.YNc(92,G,2,1,"mat-cell",15),t.BQk(),t.ynx(93,24),t.YNc(94,M,1,0,"mat-header-cell",14),t.YNc(95,et,7,2,"mat-cell",15),t.BQk(),t.YNc(96,at,1,0,"mat-header-row",25),t.YNc(97,ot,1,0,"mat-row",26),t.qZA(),t._UZ(98,"mat-paginator",27),t.qZA()()()()),2&a&&(t.xp6(10),t.Oqu(n.contact.firstName),t.xp6(5),t.Oqu(n.contact.lastName),t.xp6(5),t.Oqu(n.contact.email),t.xp6(5),t.Oqu(n.contact.address),t.xp6(5),t.Oqu(n.contact.firstName),t.xp6(5),t.Oqu(n.contact.taxCode),t.xp6(5),t.Oqu(t.lcZ(41,12,n.contact.birthDate)),t.xp6(6),t.Oqu(n.contact.privacy),t.xp6(19),t.Q6J("dataSource",n.contact.process||t.DdM(14,nt)),t.xp6(31),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(15,it)))},dependencies:[d.ez,d.sg,d.uU,g.ie,g.i$,g.Tg,g.Yt,g.gs,g.sL,h.Ps,h.Hw,u.lN,i.u5,i.UX,f.c,p.ot,p.lW,p.RK,c.Is,s.p0,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,A.TU,A.NW,Z.Tx,Z.VK,Z.OP,Z.p6]}),e})()}}]);