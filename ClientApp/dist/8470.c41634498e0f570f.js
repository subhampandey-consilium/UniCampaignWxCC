(self.webpackChunkuni_connect=self.webpackChunkuni_connect||[]).push([[8470],{68117:(E,N,n)=>{"use strict";n.d(N,{$O:()=>b,B3:()=>A,Fn:()=>_,LE:()=>c,SQ:()=>x,Sr:()=>w,XL:()=>T,e_:()=>s,fe:()=>v,j1:()=>h,jY:()=>D,rf:()=>g,sH:()=>d,ye:()=>i});var i=(()=>{return(t=i||(i={}))[t.Select=-1]="Select",t[t.LocalDirectory=1]="LocalDirectory",t[t.FTP=2]="FTP",t[t.SFTP=3]="SFTP",t[t.Salesforce=4]="Salesforce",i;var t})(),A=(()=>{return(t=A||(A={}))[t.Voice=1]="Voice",t[t.SMS=2]="SMS",t[t.Whatsapp=6]="Whatsapp",t[t.Email=4]="Email",t[t.DNC=3]="DNC",t[t.All=5]="All",A;var t})(),D=(()=>{return(t=D||(D={}))[t.Voice=1]="Voice",t[t.SMS=2]="SMS",t[t.Email=4]="Email",t[t.Whatsapp=6]="Whatsapp",D;var t})(),_=(()=>{return(t=_||(_={}))[t.None=0]="None",t[t.And=1]="And",t[t.Or=2]="Or",_;var t})(),x=(()=>{return(t=x||(x={}))[t.None=0]="None",t[t.Equal=1]="Equal",t[t.NotEqual=2]="NotEqual",t[t.GreaterThan=3]="GreaterThan",t[t.LessThan=4]="LessThan",t[t.GreaterOrEqual=5]="GreaterOrEqual",t[t.LessOrEqual=6]="LessOrEqual",t[t.Like=7]="Like",t[t.NotLike=8]="NotLike",t[t.Null=9]="Null",t[t.NotNull=10]="NotNull",t[t.Contains=11]="Contains",t[t.DoesNotContain=12]="DoesNotContain",t[t.BeginsWith=13]="BeginsWith",t[t.DoesNotBeginWith=14]="DoesNotBeginWith",t[t.EndsWith=15]="EndsWith",t[t.DoesNotEndWith=16]="DoesNotEndWith",x;var t})(),g=(()=>{return(t=g||(g={}))[t.Pending=1]="Pending",t[t.Duplicate=3]="Duplicate",t[t.Invalid=4]="Invalid",t[t.Excluded=6]="Excluded",t[t.Retry=7]="Retry",t[t.Imported=9]="Imported",t[t.Failed=10]="Failed",t[t.Deleted=11]="Deleted",t[t.Completed=12]="Completed",t[t.BlockedByTCPA=18]="BlockedByTCPA",t[t.Transitioned_To_SMS_Or_Email=20]="Transitioned_To_SMS_Or_Email",t[t.Received=21]="Received",t[t.Sent=22]="Sent",t[t.DoNotCall=23]="DoNotCall",g;var t})(),b=(()=>{return(t=b||(b={}))[t.Pending=0]="Pending",t[t.AnswerSuccess=10]="AnswerSuccess",t[t.SIT_UnCallable=11]="SIT_UnCallable",t[t.AnsweringMachine=12]="AnsweringMachine",t[t.NumberCouldNotBeDialed=13]="NumberCouldNotBeDialed",t[t.BusySignal=14]="BusySignal",t[t.Voice=16]="Voice",t[t.AbandonedByAgent=17]="AbandonedByAgent",t[t.NoAnswer=8]="NoAnswer",t[t.SkippedOrRejected=18]="SkippedOrRejected",t[t.SkippedOrRejectedWithClose=19]="SkippedOrRejectedWithClose",t[t.TimedOutAcceptingPreviewCall=33]="TimedOutAcceptingPreviewCall",t[t.OutboundDisconnect=50]="OutboundDisconnect",t[t.AgentUnreachable=51]="AgentUnreachable",t[t.WrapupTimeOut=52]="WrapupTimeOut",t[t.StuckInteraction=11]="StuckInteraction",t[t.Sent=61]="Sent",t[t.Fail=62]="Fail",t[t.UnSuccessful=63]="UnSuccessful",t[t.Deliverd=64]="Deliverd",t[t.UnDelivered=65]="UnDelivered",t[t.Delivery_Unknown=66]="Delivery_Unknown",t[t.Queued=67]="Queued",b;var t})(),w=(()=>{return(t=w||(w={}))[t.Pending=1]="Pending",t[t.Active=2]="Active",t[t.Completed=3]="Completed",t[t.Expired=4]="Expired",t[t.InActive=5]="InActive",w;var t})(),c=(()=>{return(t=c||(c={}))[t.Never=0]="Never",t[t.Daily=1]="Daily",t[t.Weeks=2]="Weeks",t[t.Months=3]="Months",t[t.Years=4]="Years",c;var t})(),d=(()=>{return(t=d||(d={}))[t.Pending=1]="Pending",t[t.Active=2]="Active",t[t.Completed=3]="Completed",d;var t})(),v=(()=>{return(t=v||(v={}))[t.ASC=1]="ASC",t[t.DESC=2]="DESC",v;var t})(),s=(()=>{return(t=s||(s={}))[t.Single=0]="Single",t[t.Incremental=1]="Incremental",t[t.Repetitive=2]="Repetitive",s;var t})(),h=(()=>{return(t=h||(h={}))[t.Seconds=0]="Seconds",t[t.Minutes=1]="Minutes",t[t.Hours=2]="Hours",t[t.Days=3]="Days",t[t.Weeks=4]="Weeks",t[t.Months=5]="Months",t[t.Year=6]="Year",t[t.None=9]="None",h;var t})(),T=(()=>{return(t=T||(T={}))[t.Pending=0]="Pending",t[t.InvalidNumber=1]="InvalidNumber",t[t.NoAnswer=2]="NoAnswer",t[t.Busy=3]="Busy",t[t.Fax=4]="Fax",t[t.AnsweringMachine=5]="AnsweringMachine",t[t.NetworkVoicemail=6]="NetworkVoicemail",t[t.NoRingback=7]="NoRingback",t[t.OperatorIntercept=8]="OperatorIntercept",t[t.Callback_Requested=9]="Callback_Requested",t[t.Abandoned=10]="Abandoned",t[t.AbandonedToIVR=11]="AbandonedToIVR",t[t.Flushed_Camp_Stop=12]="Flushed_Camp_Stop",t[t.Gaurd_Time_Expiry=13]="Gaurd_Time_Expiry",t[t.Flushed_Error=14]="Flushed_Error",t[t.DNC_Requested=15]="DNC_Requested",t[t.Live_Voice=16]="Live_Voice",t[t.Invalid_Cad=17]="Invalid_Cad",t[t.Dial_At_Time_Invalid=18]="Dial_At_Time_Invalid",T;var t})()},77394:(E,N,n)=>{"use strict";n.d(N,{J:()=>D});var i=n(94650),C=n(65938),A=n(4859);let D=(()=>{class _{constructor(g){this.dialogRef=g}}return _.\u0275fac=function(g){return new(g||_)(i.Y36(C.so))},_.\u0275cmp=i.Xpm({type:_,selectors:[["cuc-confirm-dialog"]],decls:9,vars:1,consts:[["matDialogTitle",""],["mat-dialog-content",""],["mat-dialog-actions","","align","end",1,"pt-24"],["mat-raised-button","",1,"mat-accent","mr-16",3,"click"],["mat-raised-button","",3,"click"]],template:function(g,b){1&g&&(i.TgZ(0,"h1",0),i._uU(1,"Confirm"),i.qZA(),i.TgZ(2,"div",1),i._uU(3),i.qZA(),i.TgZ(4,"div",2)(5,"button",3),i.NdJ("click",function(){return b.dialogRef.close(!0)}),i._uU(6,"Confirm"),i.qZA(),i.TgZ(7,"button",4),i.NdJ("click",function(){return b.dialogRef.close(!1)}),i._uU(8,"Cancel"),i.qZA()()),2&g&&(i.xp6(3),i.Oqu(b.confirmMessage))},directives:[C.uh,C.xY,C.H8,A.lW],styles:[""]}),_})()},48470:(E,N,n)=>{"use strict";n.r(N),n.d(N,{dncViewmodule:()=>Nt});var i=n(27974),C=n(93917),A=n(4859),D=n(3238),_=n(59549),x=n(73546),g=n(97392),b=n(44144),w=n(84385),c=n(56709),d=n(8882),v=n(82689),s=n(77331),h=n(37084),T=n(96308),t=n(17009),p=n(2143),L=n(3848),y=n(28255),Z=n(24006),U=n(80529),F=n(68117),Y=n(79497),V=n(77394),r=n(23753),l=n(36787),u=n(21086),I=n(1059),G=n(87545),q=n(24850),X=n(27221),K=n(94327),e=n(94650),z=n(33054),$=n(65938),W=n(6072),Q=n(96560),S=n(1576),P=n(43764),O=n(36895);const R=["searchDncList"];function tt(a,m){1&a&&(e.TgZ(0,"mat-header-cell",29),e._uU(1,"DNC ID"),e.qZA())}function et(a,m){if(1&a&&(e.TgZ(0,"mat-cell")(1,"p",30),e._uU(2),e.qZA()()),2&a){const o=m.$implicit;e.xp6(2),e.Oqu(o.dncId)}}function at(a,m){1&a&&(e.TgZ(0,"mat-header-cell",29),e._uU(1,"Campaign Name"),e.qZA())}function nt(a,m){if(1&a&&(e.TgZ(0,"mat-cell")(1,"p",30),e._uU(2),e.qZA()()),2&a){const o=m.$implicit;e.xp6(2),e.Oqu(o.campaignName)}}function it(a,m){1&a&&(e.TgZ(0,"mat-header-cell",29),e._uU(1,"DNC Name"),e.qZA())}function ot(a,m){if(1&a&&(e.TgZ(0,"mat-cell")(1,"p",30),e._uU(2),e.qZA()()),2&a){const o=m.$implicit;e.xp6(2),e.Oqu(o.dncName)}}function rt(a,m){1&a&&(e.TgZ(0,"mat-header-cell",29),e._uU(1,"DNC Type"),e.qZA())}function ct(a,m){if(1&a&&(e.TgZ(0,"mat-cell")(1,"p",30),e._uU(2),e.qZA()()),2&a){const o=m.$implicit;e.xp6(2),e.Oqu(o.dncType)}}function dt(a,m){1&a&&(e.TgZ(0,"mat-header-cell"),e._uU(1,"Download"),e.qZA())}function mt(a,m){if(1&a){const o=e.EpF();e.TgZ(0,"mat-cell")(1,"button",31),e.NdJ("click",function(M){return M.stopPropagation()}),e.TgZ(2,"mat-icon",32),e._uU(3,"more_vert"),e.qZA()(),e.TgZ(4,"mat-menu",null,33)(6,"button",34),e.NdJ("click",function(){const k=e.CHM(o).$implicit;return e.oxw().downloadGlobalDNC(k.dncId)}),e.TgZ(7,"mat-icon"),e._uU(8,"get_app"),e.qZA(),e.TgZ(9,"span"),e._uU(10,"Download"),e.qZA()()()()}if(2&a){const o=e.MAs(5);e.xp6(1),e.Q6J("matMenuTriggerFor",o)}}function lt(a,m){1&a&&e._UZ(0,"mat-header-row")}function st(a,m){1&a&&e._UZ(0,"mat-row",35)}function ut(a,m){1&a&&(e.TgZ(0,"div",36)(1,"center"),e._uU(2," No Records found. "),e.qZA()())}const gt=function(){return{delay:"50ms",scale:"0.2"}},j=function(a){return{value:"*",params:a}},ft=function(){return{delay:"100ms",x:"-25px"}},pt=function(){return{value:"50"}},ht=function(){return[5,10,25,100]};let J=(()=>{class a{constructor(o,f,M,k){this._globalDNCService=o,this.router=f,this._matDialog=M,this._snackbarService=k,this.filteredAndPagedLists=[],this.displayedColumns=["dncId","campaignName","dncName","dncType","actions"],this.resultsLength=0,this.holidayStatus=F.sH}ngOnInit(){}ngAfterViewInit(){let o=(0,r.R)(this.searchHoliday.nativeElement,"keyup");(0,l.T)(this.sort.sortChange,this.paginator.page,o).pipe((0,I.O)({}),(0,G.w)(()=>this._globalDNCService.getCampaignListWithDNC(this.paginator.pageIndex+1,this.paginator.pageSize)),(0,q.U)(f=>(this.resultsLength=f.result.total,f.result.items)),(0,X.K)(()=>(0,u.of)([]))).subscribe(f=>{this.filteredAndPagedLists=f,console.log("Fetched global DNCs numbers:",this.filteredAndPagedLists)})}reload(){this._globalDNCService.getCampaignListWithDNC(this.paginator.pageIndex+1,this.paginator.pageSize,this.searchHoliday.nativeElement.value,this.sort.direction).subscribe(o=>{this.filteredAndPagedLists=o.result.items,console.log(o)})}downloadGlobalDNC(o){this.confirmDialogRef=this._matDialog.open(V.J,{disableClose:!1}),this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to Download DNC list?",this.confirmDialogRef.afterClosed().subscribe(f=>{f&&this._globalDNCService.downloadDNCReport(o).subscribe(M=>{console.log(M),K.saveAs(M.blob,M.fileName)},M=>{console.log("Error downloading the file")}),this.confirmDialogRef=null})}}return a.\u0275fac=function(o){return new(o||a)(e.Y36(z.o),e.Y36(C.F0),e.Y36($.uw),e.Y36(W.k))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-dnc-viewhome"]],viewQuery:function(o,f){if(1&o&&(e.Gf(i.NW,7),e.Gf(T.YE,7),e.Gf(p.BZ,5),e.Gf(R,7)),2&o){let M;e.iGM(M=e.CRH())&&(f.paginator=M.first),e.iGM(M=e.CRH())&&(f.sort=M.first),e.iGM(M=e.CRH())&&(f.matGlobalDNCTable=M.first),e.iGM(M=e.CRH())&&(f.searchHoliday=M.first)}},decls:43,vars:18,consts:[["id","dnc-list-home",1,"page-layout","carded","fullwidth","inner-scroll"],[1,"top-bg","accent"],[1,"center"],["fxLayout","column","fxLayoutAlign","center center","fxLayout.gt-sm","row","fxLayoutAlign.gt-sm","space-between center",1,"header","accent"],["fxLayout","row","fxLayoutAlign","start center",1,"logo","mb-24","mb-md-0"],[1,"logo-icon","s-32","mr-16"],[1,"logo-text","h1"],[1,"search-wrapper","mx-32","mx-md-0"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center",1,"search"],["placeholder","Search for a DNC list"],["searchDncList",""],[1,"content-card"],["matSort","","cucPerfectScrollbar","",1,"globalDNCs-table",3,"dataSource"],["matGlobalDNCTable",""],["matColumnDef","dncId"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","campaignName"],["matColumnDef","dncName"],["matColumnDef","dncType"],["matColumnDef","actions"],[4,"matHeaderCellDef"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],["class","holiday-row",4,"matRowDef","matRowDefColumns"],["class","no-data-message",4,"ngIf"],["fxLayout","row","fxLayoutAlign","end center"],["mat-icon-button","","fxLayout","column","fxLayoutAlign","center none",3,"click"],[3,"length","pageSizeOptions"],["paginator",""],["mat-sort-header",""],[1,"text-truncate"],["mat-icon-button","","aria-label","More",3,"matMenuTriggerFor","click"],[1,"secondary-text"],["moreMenu","matMenu"],["mat-menu-item","","aria-label","remove",3,"click"],[1,"holiday-row"],[1,"no-data-message"]],template:function(o,f){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"mat-icon",5),e._uU(6," phone_disabled "),e.qZA(),e.TgZ(7,"span",6),e._uU(8," DNC View "),e.qZA()(),e.TgZ(9,"div",7)(10,"div",8)(11,"mat-icon"),e._uU(12,"search"),e.qZA(),e._UZ(13,"input",9,10),e.qZA()()(),e.TgZ(15,"div",11)(16,"mat-table",12,13),e.ynx(18,14),e.YNc(19,tt,2,0,"mat-header-cell",15),e.YNc(20,et,3,1,"mat-cell",16),e.BQk(),e.ynx(21,17),e.YNc(22,at,2,0,"mat-header-cell",15),e.YNc(23,nt,3,1,"mat-cell",16),e.BQk(),e.ynx(24,18),e.YNc(25,it,2,0,"mat-header-cell",15),e.YNc(26,ot,3,1,"mat-cell",16),e.BQk(),e.ynx(27,19),e.YNc(28,rt,2,0,"mat-header-cell",15),e.YNc(29,ct,3,1,"mat-cell",16),e.BQk(),e.ynx(30,20),e.YNc(31,dt,2,0,"mat-header-cell",21),e.YNc(32,mt,11,1,"mat-cell",16),e.BQk(),e.YNc(33,lt,1,0,"mat-header-row",22),e.YNc(34,st,1,0,"mat-row",23),e.qZA(),e.YNc(35,ut,3,0,"div",24),e._UZ(36,"br"),e.TgZ(37,"div",25)(38,"button",26),e.NdJ("click",function(){return f.reload()}),e.TgZ(39,"mat-icon"),e._uU(40,"refresh"),e.qZA()(),e._UZ(41,"mat-paginator",27,28),e.qZA()()()()),2&o&&(e.xp6(5),e.Q6J("@animate",e.VKq(11,j,e.DdM(10,gt))),e.xp6(2),e.Q6J("@animate",e.VKq(14,j,e.DdM(13,ft))),e.xp6(9),e.Q6J("dataSource",f.filteredAndPagedLists)("@animateStagger",e.DdM(16,pt)),e.xp6(17),e.Q6J("matHeaderRowDef",f.displayedColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",f.displayedColumns),e.xp6(1),e.Q6J("ngIf",0==f.filteredAndPagedLists.length),e.xp6(6),e.Q6J("length",f.resultsLength)("pageSizeOptions",e.DdM(17,ht)))},directives:[Q.V,S.xw,S.Wh,g.Hw,S.yH,p.BZ,T.YE,P.i,p.w1,p.fO,p.ge,T.nU,p.Dz,p.ev,A.lW,y.p6,y.VK,y.OP,p.as,p.XQ,p.nj,p.Gk,O.O5,i.NW],styles:["@media screen and (max-width: 959px){uc-dnc-list-home #dnc-list-home .top-bg{height:256px}}uc-dnc-list-home #dnc-list-home>.center>.header .search-wrapper{width:100%;max-width:480px;border-radius:28px;overflow:hidden;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 1px 3px rgba(0,0,0,.12)}@media screen and (max-width: 599px){uc-dnc-list-home #dnc-list-home>.center>.header .search-wrapper{width:100%}}uc-dnc-list-home #dnc-list-home>.center>.header .search-wrapper .search{width:100%;height:48px;line-height:48px;padding:0 18px}uc-dnc-list-home #dnc-list-home>.center>.header .search-wrapper .search input{width:100%;height:48px;min-height:48px;max-height:48px;padding:0 16px;border:none;outline:none}@media screen and (max-width: 959px){uc-dnc-list-home #dnc-list-home>.center>.header{padding:8px 0;height:192px!important;min-height:192px!important;max-height:192px!important}}\n"],encapsulation:2,data:{animation:Y.J}}),a})();function vt(a,m){1&a&&(e.TgZ(0,"mat-header-cell",25),e._uU(1,"Name"),e.qZA())}function Mt(a,m){if(1&a&&(e.TgZ(0,"mat-cell")(1,"p",26),e._uU(2),e.qZA()()),2&a){const o=m.$implicit;e.xp6(2),e.Oqu(o.name)}}function Dt(a,m){1&a&&(e.TgZ(0,"mat-header-cell",25),e._uU(1,"Source"),e.qZA())}function _t(a,m){if(1&a&&(e.TgZ(0,"mat-cell")(1,"p",26),e._uU(2),e.qZA()()),2&a){const o=m.$implicit;e.xp6(2),e.Oqu(o.source.name)}}function At(a,m){1&a&&(e.TgZ(0,"mat-header-cell",25),e._uU(1,"Created On"),e.qZA())}function xt(a,m){if(1&a&&(e.TgZ(0,"mat-cell")(1,"p",26),e._uU(2),e.ALo(3,"date"),e.qZA()()),2&a){const o=m.$implicit;e.xp6(2),e.Oqu(e.xi3(3,1,o.createdOn+"Z","medium"))}}function Ct(a,m){1&a&&(e.TgZ(0,"mat-header-cell"),e._uU(1,"Actions"),e.qZA())}function bt(a,m){if(1&a&&(e.TgZ(0,"mat-cell")(1,"button",27),e.NdJ("click",function(f){return f.stopPropagation()}),e.TgZ(2,"mat-icon",28),e._uU(3,"more_vert"),e.qZA()(),e.TgZ(4,"mat-menu",null,29)(6,"button",30)(7,"mat-icon"),e._uU(8,"edit"),e.qZA(),e.TgZ(9,"span"),e._uU(10,"Edit"),e.qZA()()()()),2&a){const o=m.$implicit,f=e.MAs(5);e.xp6(1),e.Q6J("matMenuTriggerFor",f),e.xp6(5),e.Q6J("routerLink","/app/list-management/list/"+o.id)}}const H=function(){return{delay:"100ms",x:"-25px"}},B=function(a){return{value:"*",params:a}},wt=function(){return{delay:"50ms",scale:"0.2"}},Tt=function(){return{value:"50"}},yt=[{path:"",component:J},{path:"dnc-view",component:J},{path:"dnc-view-table",component:(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-dnc-view-table"]],decls:36,vars:15,consts:[["id","product",1,"page-layout","carded","fullwidth","inner-scroll"],[1,"top-bg","accent"],[1,"center"],["fxLayout","row","fxLayoutAlign","space-between center",1,"header","accent"],["fxLayout","row","fxLayoutAlign","start center"],["mat-icon-button","",1,"mr-0","mr-sm-16",3,"routerLink"],["fxLayout","column","fxLayoutAlign","start start"],[1,"subtitle","secondary-text"],["fxLayout","row","fxLayoutAlign","start center",1,"logo","mb-24","mb-md-0"],[1,"logo-icon","s-32","mr-16"],[1,"logo-text","h1"],[1,"search-wrapper","mx-32","mx-md-0"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center",1,"search"],["placeholder","Search for a list"],["searchLeadList",""],[1,"content-card"],["matSort","","cucPerfectScrollbar","",1,"products-table",3,"dataSource"],["matLeadListTable",""],["matColumnDef","name"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","source"],["matColumnDef","createdOn"],["matColumnDef","actions"],[4,"matHeaderCellDef"],["mat-sort-header",""],[1,"text-truncate"],["mat-icon-button","","aria-label","More",3,"matMenuTriggerFor","click"],[1,"secondary-text"],["moreMenu","matMenu"],["mat-menu-item","","aria-label","edit",3,"routerLink"]],template:function(o,f){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"button",5)(6,"mat-icon"),e._uU(7,"arrow_back"),e.qZA()(),e.TgZ(8,"div",6),e._UZ(9,"div",7),e.qZA()(),e.TgZ(10,"div",8)(11,"mat-icon",9),e._uU(12," list_alt "),e.qZA(),e.TgZ(13,"span",10),e._uU(14," DNC View Table "),e.qZA()(),e.TgZ(15,"div",11)(16,"div",12)(17,"mat-icon"),e._uU(18,"search"),e.qZA(),e._UZ(19,"input",13,14),e.qZA()()(),e.TgZ(21,"div",15)(22,"mat-table",16,17),e.ynx(24,18),e.YNc(25,vt,2,0,"mat-header-cell",19),e.YNc(26,Mt,3,1,"mat-cell",20),e.BQk(),e.ynx(27,21),e.YNc(28,Dt,2,0,"mat-header-cell",19),e.YNc(29,_t,3,1,"mat-cell",20),e.BQk(),e.ynx(30,22),e.YNc(31,At,2,0,"mat-header-cell",19),e.YNc(32,xt,4,4,"mat-cell",20),e.BQk(),e.ynx(33,23),e.YNc(34,Ct,2,0,"mat-header-cell",24),e.YNc(35,bt,11,2,"mat-cell",20),e.BQk(),e.qZA()()()()),2&o&&(e.xp6(5),e.Q6J("routerLink","/app/dnc-view"),e.xp6(3),e.Q6J("@animate",e.VKq(6,B,e.DdM(5,H))),e.xp6(3),e.Q6J("@animate",e.VKq(9,B,e.DdM(8,wt))),e.xp6(2),e.Q6J("@animate",e.VKq(12,B,e.DdM(11,H))),e.xp6(9),e.Q6J("@animateStagger",e.DdM(14,Tt)))},directives:[Q.V,S.xw,S.Wh,A.lW,C.rH,g.Hw,S.yH,p.BZ,T.YE,P.i,p.w1,p.fO,p.ge,T.nU,p.Dz,p.ev,y.p6,y.VK,y.OP],pipes:[O.uU],styles:[".width-class[_ngcontent-%COMP%]{width:600px}.mini-fab-button-container[_ngcontent-%COMP%]{margin-top:9px}"]}),a})()}];let Nt=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[],imports:[[C.Bz.forChild(yt),A.ot,i.TU,D.si,d.A,s.Hi,v.lJ,h.To,_.lN,g.Ps,b.c,i.TU,v.QH,D.si,w.LD,T.JX,x.QW,t.ZX,p.p0,L.Nh,c.p9,y.Tx,Z.u5,U.JF]]}),a})()},94327:function(E,N){var C;void 0!==(C=function(){"use strict";function D(c,d,v){var s=new XMLHttpRequest;s.open("GET",c),s.responseType="blob",s.onload=function(){w(s.response,d,v)},s.onerror=function(){console.error("could not download file")},s.send()}function _(c){var d=new XMLHttpRequest;d.open("HEAD",c,!1);try{d.send()}catch{}return 200<=d.status&&299>=d.status}function x(c){try{c.dispatchEvent(new MouseEvent("click"))}catch{var d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(d)}}var g="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,b=g.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),w=g.saveAs||("object"!=typeof window||window!==g?function(){}:"download"in HTMLAnchorElement.prototype&&!b?function(c,d,v){var s=g.URL||g.webkitURL,h=document.createElement("a");h.download=d=d||c.name||"download",h.rel="noopener","string"==typeof c?(h.href=c,h.origin===location.origin?x(h):_(h.href)?D(c,d,v):x(h,h.target="_blank")):(h.href=s.createObjectURL(c),setTimeout(function(){s.revokeObjectURL(h.href)},4e4),setTimeout(function(){x(h)},0))}:"msSaveOrOpenBlob"in navigator?function(c,d,v){if(d=d||c.name||"download","string"!=typeof c)navigator.msSaveOrOpenBlob(function A(c,d){return typeof d>"u"?d={autoBom:!1}:"object"!=typeof d&&(console.warn("Deprecated: Expected third argument to be a object"),d={autoBom:!d}),d.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\ufeff",c],{type:c.type}):c}(c,v),d);else if(_(c))D(c,d,v);else{var s=document.createElement("a");s.href=c,s.target="_blank",setTimeout(function(){x(s)})}}:function(c,d,v,s){if((s=s||open("","_blank"))&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof c)return D(c,d,v);var h="application/octet-stream"===c.type,T=/constructor/i.test(g.HTMLElement)||g.safari,t=/CriOS\/[\d]+/.test(navigator.userAgent);if((t||h&&T||b)&&typeof FileReader<"u"){var p=new FileReader;p.onloadend=function(){var Z=p.result;Z=t?Z:Z.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=Z:location=Z,s=null},p.readAsDataURL(c)}else{var L=g.URL||g.webkitURL,y=L.createObjectURL(c);s?s.location=y:location.href=y,s=null,setTimeout(function(){L.revokeObjectURL(y)},4e4)}});g.saveAs=w.saveAs=w,E.exports=w}.apply(N,[]))&&(E.exports=C)},73546:(E,N,n)=>{"use strict";n.d(N,{QW:()=>V,a8:()=>U,dk:()=>F,dn:()=>c,n5:()=>d});var i=n(94650),C=n(38746),A=n(3238);const D=["*",[["mat-card-footer"]]],_=["*","mat-card-footer"],x=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],g=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let c=(()=>{class r{}return r.\u0275fac=function(u){return new(u||r)},r.\u0275dir=i.lG2({type:r,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),r})(),d=(()=>{class r{}return r.\u0275fac=function(u){return new(u||r)},r.\u0275dir=i.lG2({type:r,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),r})(),U=(()=>{class r{constructor(u){this._animationMode=u}}return r.\u0275fac=function(u){return new(u||r)(i.Y36(C.Qb,8))},r.\u0275cmp=i.Xpm({type:r,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(u,I){2&u&&i.ekj("_mat-animation-noopable","NoopAnimations"===I._animationMode)},exportAs:["matCard"],ngContentSelectors:_,decls:2,vars:0,template:function(u,I){1&u&&(i.F$t(D),i.Hsn(0),i.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),r})(),F=(()=>{class r{}return r.\u0275fac=function(u){return new(u||r)},r.\u0275cmp=i.Xpm({type:r,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:g,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(u,I){1&u&&(i.F$t(x),i.Hsn(0),i.TgZ(1,"div",0),i.Hsn(2,1),i.qZA(),i.Hsn(3,2))},encapsulation:2,changeDetection:0}),r})(),V=(()=>{class r{}return r.\u0275fac=function(u){return new(u||r)},r.\u0275mod=i.oAB({type:r}),r.\u0275inj=i.cJS({imports:[[A.BQ],A.BQ]}),r})()}}]);