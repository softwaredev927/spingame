import{i as B,k as N,l as S,m as E,n as b,e as i,o as D,p as L,q as Q,t as M,B as O,g as T,v as u,w as l,x as C,y as V,u as R,z as g,_ as h,A as d,D as F,E as m,G as j,H as v,I as k,L as x,j as f,F as P,J as _}from"./index-770a673a.js";const z=()=>{const{t:e}=B("daoPage");return{proposals:e("proposals"),about:e("about"),newProposal:e("newProposal"),startIn:t=>e("startIn",{value:t}),endIn:t=>e("endIn",{value:t}),emptyProposals:e("emptyProposals"),endedAndDidntPassedQuorum:e("endedAndDidntPassedQuorum"),proposalEnded:t=>e("proposalEnded",{value:t}),spaceNotFound:e("spaceNotFound"),settings:e("settings"),newTestProposal:e("newTestProposal")}};function q(){const e=N(G),{daoAddress:t}=S(),n=E(t).data,s=b({initialValues:{ownerAddress:(n==null?void 0:n.daoRoles.owner)||"",proposalOwner:(n==null?void 0:n.daoRoles.proposalOwner)||""},validateOnChange:!1,validateOnBlur:!0,onSubmit:()=>{}});return i(D,{form:e,formik:s})}const G=({name:e,formik:t})=>{const{mutateAsync:n,isLoading:s}=L(),{mutateAsync:r,isLoading:o}=Q(),a=t.values[e],c=t.initialValues[e],y=()=>{const p={newOwner:a,onError:I=>t.setFieldError(e,I)};if(e==="ownerAddress")return n(p);if(e==="proposalOwner")return r(p)},A=e==="ownerAddress"?s:o;return c===a?null:i(M,{children:i(O,{onClick:y,isLoading:A,children:i(T,{children:"Update"})})})},w=()=>{const{refetch:e,data:t}=V(),n=R();return async s=>{const r=t||(await e()).data;if((r==null?void 0:r.admin)!==n)throw new Error("You are not the registry admin");return s()}},U=()=>{const e=g(),t=w(),n=u();return l(async({daoIds:s,amount:r})=>t(async()=>{if(!h.isNumber(r))throw new Error("Forward Message Fee is required");if(r<0)throw new Error("Forward Message Fee must be at least 0");const a=await d.getClientV2();return d.setFwdMsgFee(n(),a,F,m.BASE.toString(),s.map(c=>c.toString()),r.toString())}),{onError:(s,r)=>{r.onError(s.message),e(s)},onSuccess:(s,r)=>{var o;return(o=r.onSuccess)==null?void 0:o.call(r)}})},H=()=>{const e=u(),t=g(),n=w();return l(async s=>n(async()=>{const o=e(),a=await d.getClientV2();return d.setNewDaoFwdMsgFee(o,a,F,m.BASE.toString(),s)}),{onError:s=>{t(s)},onSuccess:()=>{C("Forward Message Fee for new DAOs has been set successfully")}})},J=()=>{const e=u(),t=g(),n=w(),{refetch:s}=V();return l(async({newRegistryAdmin:r})=>n(async()=>{if(!r||!j(r))throw new Error("Invalid register admin address");const a=await d.getClientV2();return d.setRegistryAdmin(e(),a,F,m.BASE.toString(),r)}),{onSuccess:(r,o)=>{s()},onError:(r,o)=>{o.onError(r.message),t(r)}})},X=()=>{const e=u(),t=g(),n=w();return l(async({value:s})=>n(async()=>{if(!h.isNumber(s)||s<0)throw new Error("Fee must be zero or positive");const o=await d.getClientV2();return d.setDeployAndInitDaoFee(e(),o,F,m.BASE.toString(),s.toString())}),{onSuccess:()=>{C("Create DAO Fee has been set successfully")},onError:(s,r)=>{r.onError(s.message),t(s)}})},Y=()=>{const e=u(),t=R(),n=g(),s=w();return l(async r=>s(async()=>{if(!Object.keys(d.ReleaseMode).includes(r.toString()))throw new Error("Invalid release mode");const a=await d.getClientV2(),c=e();return d.newRegistry(c,a,r,m.BASE.toString(),t)}),{onError:r=>n(r)})},$={useSetDaoFwdMsgFee:U,useSetFwdFeeForNewDaos:H,useSetRegistryAdmin:J,useSetCreateDaoFee:X,useCreateNewRegistry:Y},K=()=>({title:"Dao Admin Settings",inputs:[{name:"fwdMsgFee",label:"Forward Message Fee",type:"number",EndAdornment:Z}]});function W(){const e=K(),{daoAddress:t}=S(),{data:n}=v(t),s=b({enableReinitialize:!0,initialValues:{fwdMsgFee:Number(n==null?void 0:n.fwdMsgFee)},validateOnChange:!1,validateOnBlur:!0,onSubmit:()=>{}});return i(D,{form:e,formik:s})}const Z=({name:e,formik:t})=>{const{daoAddress:n}=S(),s=t.values[e],r=t.initialValues[e],o=E(n).data,{mutate:a,isLoading:c}=$.useSetDaoFwdMsgFee(),{refetch:y}=v(o==null?void 0:o.daoAddress),A=()=>{if(e==="fwdMsgFee")return a({daoIds:[o.daoId],amount:s,onError:p=>t.setFieldError(e,p),onSuccess:y})};return!h.isNumber(s)||r===s?null:i(M,{children:i(O,{onClick:A,isLoading:c,children:i(T,{children:"Update"})})})};function se(){const e=z(),{daoAddress:t}=S(),{isLoading:n,data:s}=E(t),{isOwner:r,isProposalPublisher:o}=k(s==null?void 0:s.daoRoles),a=r||o;return i(x,{title:e.settings,isLoading:n,children:f(P,{children:[i(W,{}),a&&f(P,{children:[i(q,{}),i(_,{})]})]})})}export{se as DaoSettings,se as default};