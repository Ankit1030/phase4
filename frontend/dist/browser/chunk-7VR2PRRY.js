import{a as w}from"./chunk-V5OCIMKX.js";import{a as j,b as P}from"./chunk-EDKM3YY2.js";import{n as T,p as D}from"./chunk-DA3W5VMP.js";import{Ac as I,Cb as E,Eb as m,Nb as r,Ob as u,Pa as f,Pb as C,Sa as c,Ta as g,Vb as A,ea as q,hb as p,jb as x,ma as R,na as v,ob as b,tb as n,ub as i,vb as _,wc as k,xc as y,zb as S}from"./chunk-53WIH66V.js";import"./chunk-6GU5JNHE.js";function F(o,l){o&1&&r(0," Assigning ")}function O(o,l){o&1&&r(0," Accepted ")}function U(o,l){o&1&&r(0," Arrived ")}function M(o,l){o&1&&r(0," Picked ")}function N(o,l){if(o&1){let d=S();n(0,"button",11),E("click",function(){R(d);let t=m(2),s=t.$implicit,a=t.index,h=m();return v(h.rejectAction(s._id,a))}),r(1,"Reject"),i()}}function V(o,l){if(o&1){let d=S();n(0,"td"),_(1,"img",6),i(),n(2,"td"),r(3),i(),n(4,"td"),r(5),i(),n(6,"td"),r(7),i(),n(8,"td"),r(9),i(),n(10,"td"),r(11),i(),n(12,"td"),r(13),i(),n(14,"td"),r(15),i(),n(16,"td"),r(17),i(),n(18,"td"),_(19,"img",6),i(),n(20,"td")(21,"div",7),p(22,F,1,0)(23,O,1,0)(24,U,1,0)(25,M,1,0),i()(),n(26,"td")(27,"div",8)(28,"button",9),E("click",function(){R(d);let t=m(),s=t.$implicit,a=t.index,h=m();return v(h.acceptAction(s._id,s.driverDetails._id,a))}),r(29," Accept "),i(),p(30,N,2,0,"button",10),i()()}if(o&2){let d,e=m().$implicit,t=m();c(),x("src",t.backendUrl+"/uploads/allusers/"+e.userDetails.uimage,f)("alt",e.userDetails.uname),c(2),u(e.userDetails.uname),c(2),u(e.userDetails.uphone),c(2),u(e.driverDetails.dname),c(2),u(e.driverDetails.dphone),c(2),u(e.bookTime),c(2),u(e.fromLocation),c(2),u(e.toLocation),c(2),u(e.vehicleDetails.vname),c(2),x("src",t.backendUrl+"/uploads/vehicles/"+e.vehicleDetails.vimage,f)("alt",e.vehicleDetails.vname),c(3),b(22,(d=e.ridestatus)===1?22:d===3?23:d===4?24:d===5?25:-1),c(8),x("ngIf",e.ridestatus===1)}}function $(o,l){if(o&1&&(n(0,"tr",5),p(1,V,31,14),i()),o&2){let d=l.$implicit;c(),b(1,d.driverDetails&&d.ridestatus!==7?1:-1)}}var W=(()=>{let l=class l{constructor(e,t,s,a){this.socketService=e,this.runningRequestService=t,this._notificationService=s,this.toaster=a,this.mybackendUrl=D.backendUrl}get backendUrl(){return this.mybackendUrl}ngOnInit(){this.rejectRide(),this.acceptRide(),this.noDriverFound(),this.HoldRide(),this.AssignDriverChrone(),this.getcurrentRunningRequest(),this.getApprovalTime(),this.getAllRunningRequest()}getBackgroundClass(e){switch(e){case 0:return"bg-yellow";case 1:return"bg-orange";case 2:return"bg-green";case 3:return"bg-blue";case 4:return"bg-pink";default:return"bg-dark"}}AssignDriverChrone(){this.socketService.listen("AssignDriverCrone").subscribe({next:e=>{console.log("AssignDriverCrone-->",e);let t=this.findmyIndex(e._id);t!==-1?this.allRequestsArray[t]=e:this.allRequestsArray.push(e)}})}noDriverFound(){this.socketService.listen("NoDriverFound").subscribe({next:e=>{console.log("noDriverFound eventt",e);let t=e.data;localStorage.setItem("Notification_counter",e.counter),this._notificationService.changeDashboardProperty(1);let s=this.findmyIndex(t._id);s!==-1&&this.allRequestsArray.splice(s,1)}})}findmyIndex(e){return this.allRequestsArray.findIndex(s=>s._id===e)}acceptRide(){this.socketService.listen("acceptRide").subscribe({next:e=>{let t=this.findmyIndex(e._id);this.allRequestsArray.splice(t,1)}})}HoldRide(){this.socketService.listen("HoldRide").subscribe({next:e=>{let t=this.findmyIndex(e._id);t!==-1&&this.allRequestsArray.splice(t,1)}})}getcurrentRunningRequest(){this.socketService.listen("getcurrentRunningRequest").subscribe({next:e=>{console.log("EMITTED getcurrentRunningRequest RES",e),this.allRequestsArray.push(e)},error:e=>{console.log("Error getcurrentRunningRequest",e)},complete:()=>{}})}getAllRunningRequest(){this.runningRequestService.getAllRunningRequests("/getAllRunningRequests").subscribe({next:e=>{console.log("response getAllRunningRequests",e),e.success===!0&&(this.allRequestsArray=e.data)},error:e=>{console.log("Erro /getAllRunningRequests",e)},complete:()=>{}})}acceptAction(e,t,s){this.runningRequestService.acceptThisRequest("/acceptRide",e,t).subscribe({next:a=>{console.log("acceptThisRequest RES",a),a.success===!0?this.toaster.success(a.message,"Success"):this.toaster.error(a.message,"Error")},error:a=>{console.log("acceptThisRequest Error",a),this.toaster.error("FAILED TO ACCEPT RIDE error","Error")},complete:()=>{}})}rejectAction(e,t){this.runningRequestService.rejectThisRequest("/rejectRequest",e).subscribe({next:s=>{console.log("rejectRequest RES",s),s.success===!0||this.toaster.error(s.message,"Error")},error:s=>{console.log("Error rejectRequest",s),this.toaster.error("Internal server Error","Error")},complete:()=>{}})}updateRidestatus(){this.socketService.listen("updateRideStatus").subscribe({next:e=>{console.log("updateRideStatus EVENT",e);let t=this.findmyIndex(e._id);e.ridestatus===3&&this.allRequestsArray.splice(t,1)},error:e=>{console.log("acceupdateRideStatus",e)},complete:()=>{}})}getApprovalTime(){this.runningRequestService.getApprovalTime().subscribe({next:e=>{e.success===!0&&(this.Timeout=e.data)},error:e=>{console.log("getApprovalTime Error",e)},complete:()=>{}})}rejectRide(){this.socketService.listen("rejectRide").subscribe({next:e=>{let t=this.findmyIndex(e._id);this.allRequestsArray.splice(t,1)}})}};l.\u0275fac=function(t){return new(t||l)(g(P),g(w),g(j),g(T))},l.\u0275cmp=q({type:l,selectors:[["app-running-request"]],standalone:!0,features:[A],decls:33,vars:2,consts:[[1,"container-fluid"],[1,"fs-4","fw-bolder","text-info","text-center","m-3"],[1,"table","table-responsive","table-bordered","table-striped","align-middle","w-100"],[1,"table-dark","fs-5"],["class","text-center",4,"ngFor","ngForOf"],[1,"text-center"],[2,"max-height","60px",3,"src","alt"],[1,"p-2","bg-secondary","rounded-3","text-white"],[1,"d-flex","gap-2","justify-content-start"],[1,"btn","btn-success",3,"click"],["class","btn btn-danger",3,"click",4,"ngIf"],[1,"btn","btn-danger",3,"click"]],template:function(t,s){t&1&&(n(0,"div",0)(1,"div",1),r(2),i(),n(3,"table",2)(4,"thead",3)(5,"tr")(6,"th"),r(7,"User Profile"),i(),n(8,"th"),r(9,"Username"),i(),n(10,"th"),r(11,"User Phone"),i(),n(12,"th"),r(13,"Driver Name"),i(),n(14,"th"),r(15,"Driver Phone"),i(),n(16,"th"),r(17,"Book Time"),i(),n(18,"th"),r(19,"Pickup Address"),i(),n(20,"th"),r(21,"Drop-off Address"),i(),n(22,"th"),r(23,"Service Type"),i(),n(24,"th"),r(25,"Service Image"),i(),n(26,"th"),r(27,"Status"),i(),n(28,"th"),r(29,"Action"),i()(),_(30,"tr"),i(),n(31,"tbody"),p(32,$,2,1,"tr",4),i()()()),t&2&&(c(2),C("Timeout : ",s.Timeout," seconds"),c(30),x("ngForOf",s.allRequestsArray))},dependencies:[I,k,y],styles:[".bg-yellow[_ngcontent-%COMP%]{background-color:#ff0}.bg-orange[_ngcontent-%COMP%]{background-color:#df9919}.bg-green[_ngcontent-%COMP%]{background-color:green}.bg-blue[_ngcontent-%COMP%]{background-color:#00f}.bg-pink[_ngcontent-%COMP%]{background-color:#cc3d55}th[_ngcontent-%COMP%]{padding:20px}"]});let o=l;return o})();export{W as RunningRequestComponent};