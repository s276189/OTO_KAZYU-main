"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_drag-and-drop_drag-and-drop_ts"],{67100:(e,t,a)=>{a.d(t,{Mp:()=>V.Mp,BS:()=>eF,Ux:()=>D,Hd:()=>V.Hd,vL:()=>V.vL,uN:()=>V.uN,cA:()=>V.cA,sH:()=>R,AN:()=>V.AN,gB:()=>Q.gB,TT:()=>V.TT,Mk:()=>X.Mk,dU:()=>X.dU,FN:()=>X.FN,fF:()=>V.fF,E5:()=>V.E5,gY:()=>F,PM:()=>V.PM,zM:()=>V.zM,MS:()=>V.MS,FR:()=>V.FR,gl:()=>Q.gl,_G:()=>Q._G});var r=a(74848),i=a(43779),n=a(15691),l=a(38621),o=a(23134),s=a(55847),d=a(2391),c=a(19920),u=a(65481),m=a(91246),v=a(20053),g=a(96540);let h={instructions:e=>`Moving ${e}.`,firstItemInList:"First item in list.",lastItemInList:"Last item in list.",movedBetween:(e,t)=>`Between ${e} and ${t}.`,movePosition:"Move item one position",cancelDrag:"Cancel drag mode",endDrag:"Place item",cancelMove:e=>`Cancel moving ${e}`,cancelMoveMultiple:(e,t)=>`Cancel moving ${e} and ${t} other items`,successfulFirstMove:e=>`${e} successfully moved to first item in list.`,successfulLastMove:e=>`${e} successfully moved to last item in list.`,successfulMove:(e,t,a)=>`${e} successfully moved between ${t} and ${a}.`,successfulNoMove:e=>`${e} did not move.`,entryLessThanOne:"Entry must be greater than 0.",entryGreaterThanList:e=>`Entry must be less than or equal to ${e}.`,entryIsRequired:"Entry is required.",entryIsInvalid:"Entry is invalid."},f={itemWillNotBeMoved:e=>`${e} will not be moved.`,movedToFirst:e=>`${e} will be first item in the list.`,movedToLast:e=>`${e} will be last item in the list.`,movedBetween:(e,t,a)=>`${e} will be between ${t} and ${a}.`,cannotBeMoved:e=>`${e} cannot be moved to an invalid position.`},p={dialogBody:"MoveDialog-module__dialogBody--LAeHh",form:"MoveDialog-module__form--cmYU8",title:"MoveDialog-module__title--lCiJF",dialogTitle:"MoveDialog-module__dialogTitle--DMkkn"};var x=a(6855),b=a(69593),y=a(67138);let j={form:"MoveDialogForm-module__form--uULos",autoComplete:"MoveDialogForm-module__autoComplete--M1Njp",datePickerAnchor:"MoveDialogForm-module__datePickerAnchor--CXHl5"},M=(0,g.createContext)({formLabel:"",onChange:()=>{}});function S(e){let{formProps:t,setIsInvalidOption:a,setHelperText:i,helperTextId:n}=e,{actions:l,onActionChange:o,actionsLabel:s}=t,[c,u]=(0,g.useState)(l[0]?.value),m=(0,g.useCallback)(e=>{o?.(e);let t=l.find(t=>t.value===e.target.value);t&&u(t.value)},[l,o]);return(0,r.jsx)(M.Provider,{value:(0,g.useMemo)(()=>({formLabel:c??"",onChange:(e,t)=>{i(e),a(t)},helperTextId:n}),[c,i,n,a]),children:(0,r.jsxs)("div",{className:(0,v.$)(j.form),children:[l.length>1&&(0,r.jsxs)(d.A,{required:!0,children:[(0,r.jsx)(d.A.Label,{children:s??"Action"}),(0,r.jsx)(b.A,{block:!0,onChange:m,children:l.map(e=>(0,r.jsx)(b.A.Option,{value:e.value,children:e.value},e.value))})]}),l.find(e=>e.value===c)?.renderInput]})})}let N=g.forwardRef((e,t)=>{let{helperText:a,isInvalid:i,...n}=e,{formLabel:l,onChange:o,helperTextId:s}=(0,g.useContext)(M);return(0,g.useEffect)(()=>{o(a??"",!!i)},[a,i,o]),(0,r.jsxs)(d.A,{required:!0,children:[(0,r.jsx)(d.A.Label,{children:l}),(0,r.jsx)(b.A,{block:!0,"aria-invalid":i,validationStatus:i?"error":void 0,"aria-describedby":s,ref:t,...n})]})});N.displayName="MoveDialogForm.SingleSelect";let C=g.forwardRef((e,t)=>{let{isInvalid:a,helperText:i,...n}=e,{formLabel:l,onChange:o,helperTextId:s}=(0,g.useContext)(M);return(0,g.useEffect)(()=>{o(i,!!a)},[i,a,o]),(0,r.jsxs)(d.A,{required:!0,children:[(0,r.jsx)(d.A.Label,{children:l}),(0,r.jsx)(y.A,{block:!0,"aria-invalid":a,validationStatus:a?"error":void 0,"aria-describedby":s,ref:t,...n})]})});function I(e){let{isInvalid:t,helperText:a,...i}=e,{formLabel:n,onChange:o}=(0,g.useContext)(M);(0,g.useEffect)(()=>{o(a,!!t)},[a,t,o]);let u={...i,renderAnchor:e=>{let{children:t,...a}=e;return(0,r.jsx)(s.Q,{trailingAction:l.TriangleDownIcon,block:!0,...a,children:t})}};return(0,r.jsxs)(d.A,{required:!0,children:[(0,r.jsx)(d.A.Label,{children:n}),(0,r.jsx)(c.X,{...u})]})}function w(e){let{isInvalid:t,helperText:a,...i}=e,{formLabel:n,onChange:l,helperTextId:o}=(0,g.useContext)(M),s={anchor:"button",anchorClassName:j.datePickerAnchor,compressedHeader:!1,confirmation:!1,confirmUnsavedClose:!0,dateFormat:"long",placeholder:n,showTodayButton:!0,showClearButton:!1,variant:"single",weekStartsOn:"Sunday"};(0,g.useEffect)(()=>{l(a,!!t)},[a,t,l]);let c={...s,...i};return(0,r.jsxs)(d.A,{required:!0,children:[(0,r.jsx)(d.A.Label,{children:n}),(0,r.jsx)(x.DatePicker,{...c,"aria-describedby":o})]})}C.displayName="MoveDialogForm.Text",S.SingleSelect=N,S.Text=C,S.MultiSelect=I,S.Date=w,S.SingleSelectOption=b.A.Option;try{S.displayName||(S.displayName="MoveDialogForm")}catch{}try{I.displayName||(I.displayName="MultiSelect")}catch{}try{w.displayName||(w.displayName="DateInput")}catch{}let E="move-dialog-title",A=({closeDialog:e,onSubmit:t,formProps:a,title:f,submitButtonLabel:x,returnFocusRef:b,...y})=>{let j,M;let[N,C]=(0,g.useState)(!1),[I,w]=(0,g.useState)(!1),A="";y.multiSelectItems?j=y.selectPanelProps.selected[0]:A=y.selectedItem.value;let[D,F]=(0,g.useState)(""),T=(0,g.useId)(),k=(0,g.useRef)(null);(0,o.g)({containerRef:k,onClickOutside:e=>e.preventDefault()});let R=async e=>{if(e.preventDefault(),N){let e=k.current?.querySelector('[aria-invalid="true"]');e&&e.focus();return}await t?.(e)};return y.multiSelectItems&&(M={...y.selectPanelProps,selected:y.selectPanelProps.selected,onSelectedChange:e=>{y.multiSelectItems&&(e[0]!==j?w(!0):y.selectPanelProps.onSelectedChange?.(e))},renderAnchor:e=>{let{children:t,...a}=e;return(0,r.jsx)(s.Q,{trailingAction:l.TriangleDownIcon,block:!0,...a,children:t})}}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.l,{title:(0,r.jsx)("span",{className:(0,v.$)(p.title),id:E,...(0,n.G)(E),children:f??(y.multiSelectItems?"Move selected items":"Move selected item")}),onClose:()=>{if(e(),y.multiSelectItems){let e=y.selectPanelProps.selected;(0,i.i)(h.cancelMoveMultiple(e[0]?.text??"",e?.length??0),{assertive:!0})}else(0,i.i)(h.cancelMove(A),{assertive:!0})},width:"large",ref:k,renderBody:()=>(0,r.jsxs)("form",{onSubmit:R,...(0,n.G)("move-dialog-form"),onBlur:e=>e.stopPropagation(),className:(0,v.$)(p.form),noValidate:!0,"aria-labelledby":E,children:[(0,r.jsxs)(m.l.Body,{className:(0,v.$)(p.dialogBody),children:[(0,r.jsx)("div",{className:(0,v.$)(p.dialogTitle),children:y.multiSelectItems?(0,r.jsxs)(d.A,{required:!0,children:[(0,r.jsx)(d.A.Label,{requiredIndicator:!1,children:"Item(s)"}),(0,r.jsx)(c.X,{...M})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"text-bold pb-1",children:"Item"}),(0,r.jsx)("span",{children:A})]})}),(0,r.jsx)(S,{formProps:a,setHelperText:F,setIsInvalidOption:C,helperTextId:T}),(0,r.jsxs)(u.A,{"aria-live":"assertive",variant:N?"danger":"default",id:T,...(0,n.G)("drag-and-drop-move-dialog-flash"),children:[N?(0,r.jsx)(l.AlertIcon,{}):(0,r.jsx)(l.InfoIcon,{}),D]})]}),(0,r.jsx)(m.l.Footer,{className:"p-2",children:(0,r.jsx)(s.Q,{type:"submit",variant:"primary",...(0,n.G)("drag-and-drop-move-dialog-move-item-button"),children:x??"Move"})})]}),returnFocusRef:b}),I&&(0,r.jsxs)(m.l,{width:"large",title:"Missing selection",onClose:()=>{y.multiSelectItems&&w(!1)},children:[(0,r.jsx)(m.l.Body,{className:(0,v.$)(p.dialogBody),children:"The first item you selected cannot be deselected when performing a move."}),(0,r.jsx)(m.l.Footer,{className:"p-2",children:(0,r.jsx)(s.Q,{type:"submit",variant:"primary",onClick:()=>{y.multiSelectItems&&w(!1)},children:"I understand"})})]})]})};try{A.displayName||(A.displayName="MoveDialog")}catch{}let D=(0,g.createContext)(null),F=()=>{let e=(0,g.useContext)(D);if(!e)throw Error("useDragAndDrop can only be accessed from a DragAndDropContext.Provider component");let{overId:t,dragIndex:a,moveToPosition:r,items:i,direction:n,moveDialogItem:l,openMoveDialog:o,isInDragMode:s}=e;return{isDropTarget:(0,g.useCallback)(e=>t===e||null,[t]),isBefore:e=>null!==a&&e<a,moveToPosition:r,items:i,direction:n,moveDialogItem:l,openMoveDialog:o,isInDragMode:s}},T=(0,g.createContext)({title:"",index:0,id:""}),k=()=>{let e=(0,g.useContext)(T);if(!e)throw Error("useSortableItem must be used within a SortableItemContextProvider");return e},R=({Component:e,returnFocusRef:t,...a})=>{let{title:i,index:n}=k(),l=(0,g.useRef)(null),{items:o,openMoveDialog:s}=F(),d=(0,g.useCallback)(()=>{s(i,n,t||l)},[s,i,n,t,l]);return 1===o.length?null:(0,r.jsx)(e,{ref:l,...a,onClick:d})};try{R.displayName||(R.displayName="MoveDialogTrigger")}catch{}var L=a(63807),$=a(70170),B=function(e){return e.BEFORE="Move item before",e.AFTER="Move item after",e.ROW="Move to position",e}({});let _=()=>"",O=(0,$.s)(e=>{(0,i.i)(e,{assertive:!0})},100),P={onDragStart:_,onDragOver:_,onDragMove:_,onDragEnd:_,onDragCancel:_};function G({newIndex:e,items:t,title:a,...r}){let n=t[e-1]?.title,l=t[e+1]?.title,o=K({equalMessage:h.successfulNoMove(a),firstPositionMessage:h.successfulFirstMove(a),lastPositionMessage:h.successfulLastMove(a),betweenBeforeMessage:h.successfulMove(a,n,t[e]?.title),betweenAfterMessage:h.successfulMove(a,t[e]?.title,l),newIndex:e,items:t,...r});(0,i.i)(o,{assertive:!0})}function K({equalMessage:e,firstPositionMessage:t,lastPositionMessage:a,betweenBeforeMessage:r,betweenAfterMessage:i,newIndex:n,currentIndex:l,items:o,moveAction:s}){if(n===l)return e;if(0===n&&s!==B.AFTER)return t;if(n===o.length-1&&s!==B.BEFORE)return a;switch(s){case B.BEFORE:return r;case B.AFTER:return i;case B.ROW:if(n<l)return r;return i}}let q=(e,t)=>e!==t+1&&e!==t,W=(e,t)=>e!==t-1&&e!==t,U=(e,t)=>void 0===t?h.entryIsRequired:t<0?h.entryLessThanOne:t>e.length?h.entryGreaterThanList(e.length):h.entryIsInvalid,z=(e,t)=>void 0===t||t<0||t>=e.length||isNaN(t),H=({closeDialog:e,dialogTitle:t,returnFocusRef:a})=>{let i=(0,g.useRef)(null),{moveDialogItem:l,moveToPosition:o,items:s}=F(),{title:d,index:c}=l??{title:"",index:-1},[u,m]=(0,g.useState)(!1),[v,h]=(0,g.useState)(),[p,x]=(0,g.useState)(s.some((e,t)=>q(t,c))?B.BEFORE:s.some((e,t)=>W(t,c))?B.AFTER:B.ROW),[y,j]=(0,g.useState)(""),M=(0,g.useMemo)(()=>e=>{let t="";if(void 0===e||z(s,e))t=U(s,e);else{let a=s[e-1]?.title,r=s[e+1]?.title;t=K({equalMessage:f.itemWillNotBeMoved(d),firstPositionMessage:f.movedToFirst(d),lastPositionMessage:f.movedToLast(d),betweenBeforeMessage:f.movedBetween(d,a,s[e]?.title),betweenAfterMessage:f.movedBetween(d,s[e]?.title,r),newIndex:e,currentIndex:c,items:s,moveAction:p})}j(t)},[d,c,p,s]),N=(0,L.d)(M,100);(0,g.useEffect)(()=>{if(i.current?.value){let e=p===B.ROW?-1:0,t=parseInt(i.current?.value,10)+e;h(isNaN(t)?void 0:t),N(isNaN(t)?void 0:t)}},[N,i,p]);let C=async()=>{if(void 0!==v){switch(p){case B.ROW:v>=c?await o(c,v,!1):await o(c,v,!0);break;case B.BEFORE:await o(c,v,!0);break;case B.AFTER:default:await o(c,v,!1)}e(),G({newIndex:v,currentIndex:c,items:s,title:d,moveAction:p})}},I=e=>{z(s,e)?m(!0):m(!1),h(e&&isNaN(e)?void 0:e),N(e)};return(0,r.jsx)(A,{closeDialog:e,title:t,formProps:{actions:[...s.some((e,t)=>q(t,c))?[{value:B.BEFORE,renderInput:(0,r.jsx)(S.SingleSelect,{ref:p===B.BEFORE?i:void 0,helperText:y,onChange:e=>{I(Number(e.currentTarget.value))},isInvalid:!1,...(0,n.G)("drag-and-drop-move-dialog-position-input"),children:s.map((e,t)=>{if(q(t,c))return(0,r.jsx)(b.A.Option,{value:t.toString(),children:e.title},`${e.title}-${t+1}`)})})}]:[],...s.some((e,t)=>W(t,c))?[{value:B.AFTER,renderInput:(0,r.jsx)(S.SingleSelect,{ref:p===B.AFTER?i:void 0,helperText:y,onChange:e=>{I(Number(e.currentTarget.value))},isInvalid:!1,...(0,n.G)("drag-and-drop-move-dialog-position-input"),children:s.map((e,t)=>{if(W(t,c))return(0,r.jsx)(b.A.Option,{value:t.toString(),children:e.title},`${e.title}-${t+1}`)})})}]:[],{value:B.ROW,renderInput:(0,r.jsx)(S.Text,{ref:p===B.ROW?i:void 0,helperText:y,min:1,max:s.length,defaultValue:c+1,type:"number",onChange:e=>{I(e.currentTarget.value?parseInt(e.currentTarget.value,10)-1:void 0)},isInvalid:u,...(0,n.G)("drag-and-drop-move-dialog-position-input")})}],onActionChange:e=>{x(e.target.value),m(!1)}},selectedItem:{value:d},onSubmit:C,returnFocusRef:a})};try{H.displayName||(H.displayName="SortableMoveDialog")}catch{}var V=a(26239),X=a(18831),Q=a(43627),J=a(6051),Y=a(3167),Z=a(2703),ee=a(44523),et=a(74075),ea=a(40961);function er(e,t){let a=(0,g.useRef)(!1);(0,g.useEffect)(()=>(t?(document.body.classList.add(e),a.current=!0):(a.current&&document.body.classList.remove(e),a.current=!1),()=>{a.current&&document.body.classList.remove(e),a.current=!1}),[e,t])}let ei=(0,g.createContext)(void 0);try{ei.displayName||(ei.displayName="RootElementContext")}catch{}let en={start:[V.vL.Space,V.vL.Enter],cancel:[V.vL.Esc],end:[V.vL.Space,V.vL.Enter]};X.FN,X.Mk;let CustomKeyboardSensor=class CustomKeyboardSensor extends V.uN{};CustomKeyboardSensor.activators=[{eventName:"onKeyDown",handler:(e,{keyboardCodes:t=en,onActivation:a},{active:r})=>{let{code:i}=e.nativeEvent;if(t.start.includes(i)){let t=r.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),a?.({event:e.nativeEvent}),!0)}return!1}},{eventName:"onClick",handler:(e,{onActivation:t})=>{e.preventDefault();let a=new KeyboardEvent("keydown",{key:"Enter",code:"Enter"});return t?.({event:a}),!0}}];let el=({collisionRect:e,droppableRects:t,droppableContainers:a})=>{let r=(e.top+e.bottom)/2,i=[];for(let e of a){let{id:a}=e,n=t.get(a);if(n){let t=Math.abs(r-(n.top+n.bottom)/2);i.push({id:a,data:{droppableContainer:e,value:t}})}}return i.sort((e,t)=>e.data.value-t.data.value)};var eo=a(30729),es=a(62319);let ed="move-dialog-input-label",ec=(e,t)=>e!==t+1&&e!==t,eu=(e,t)=>e!==t-1&&e!==t,em=(0,g.forwardRef)(function({onPositionChange:e,onMoveActionChange:t,moveAction:a,options:i,initialPosition:o,error:s},c){let[u,m]=(0,g.useState)(""),h=(0,g.useMemo)(()=>{let e=o-1,t=[],a=[];for(let r=0;r<i.length;r++)ec(r,e)&&t.push({text:i[r]?.title||"",id:`${r+1}`}),eu(r,e)&&a.push({text:i[r]?.title||"",id:`${r+1}`});return{before:t,after:a}},[o,i]),[f,p]=(0,g.useState)({text:"",id:"0"}),x=(0,g.useCallback)(t=>{if(void 0===t||""===t)return e(void 0);e(("string"==typeof t?parseInt(t,10):t)-1)},[e]),M=(0,g.useCallback)(e=>{p(e),x(e.id.toString())},[x]),S=(0,g.useMemo)(()=>e=>{let t=h[a===B.BEFORE?"before":"after"].find(t=>t.text===e);t?M(t):x(e)},[h,a,M,x]),N=s?{"aria-invalid":!0,"aria-describedby":"position-validation"}:null;return(0,r.jsxs)("div",{className:(0,v.$)(j.form),children:[(0,r.jsxs)(d.A,{required:!0,children:[(0,r.jsx)(d.A.Label,{children:"Action"}),(0,r.jsx)(b.A,{block:!0,onChange:a=>{t(a.currentTarget.value),e(o)},children:Object.values(B).map(e=>(0,r.jsx)(b.A.Option,{value:e,children:e},e))})]}),(0,r.jsxs)(d.A,{required:!0,children:[(0,r.jsx)(d.A.Label,{id:ed,children:a}),a===B.ROW?(0,r.jsx)(y.A,{block:!0,min:1,max:i.length,defaultValue:o,type:"number",onChange:e=>x(e.target.value),ref:c,...N,...(0,n.G)("drag-and-drop-move-dialog-position-input")}):(0,r.jsxs)(es.A,{children:[(0,r.jsx)(es.A.Input,{placeholder:"Position",value:f.text,onChange:e=>{S(e.target.value),m(e.target.value)},openOnFocus:!1,leadingVisual:l.SearchIcon,className:"width-full",ref:c,...N,...(0,n.G)("drag-and-drop-move-dialog-position-input")}),(0,r.jsx)(es.A.Overlay,{className:(0,v.$)(j.autoComplete),children:(0,r.jsx)(es.A.Menu,{items:h[a===B.BEFORE?"before":"after"],"aria-labelledby":ed,selectedItemIds:[f.id.toString()],onSelectedChange:e=>{if(!Array.isArray(e))return;let t=e.find(function(e){if(e?.id)return f.id!==e.id});t&&M(t)},filterFn:e=>e.text.toLowerCase().includes(u.toLowerCase())})})]}),s&&(0,r.jsx)(d.A.Validation,{id:"position-validation",variant:"error",children:s})]})]})});try{em.displayName||(em.displayName="MoveDialogForm")}catch{}let ev=(e,t)=>void 0===t?h.entryIsRequired:t<0?h.entryLessThanOne:t>e.length?h.entryGreaterThanList(e.length):h.entryIsInvalid,eg=(e,t)=>void 0===t||t<0||t>=e.length||isNaN(t),eh=({closeDialog:e})=>{let{moveDialogItem:t}=F(),{title:a,index:d}=t??{title:"",index:-1},[c,x]=(0,g.useState)(),[b,y]=(0,g.useState)(B.BEFORE),[j,M]=(0,g.useState)(`${a} will be moved ...`),[S,N]=(0,g.useState)(!1),C=(0,g.useRef)(null),{moveToPosition:I,items:w}=F(),[E,A]=(0,g.useState)(),D=(0,g.useRef)(null),T=(0,g.useMemo)(()=>e=>{let t="";if(void 0===e)N(!1),t=`${a} will be moved ...`;else if(eg(w,e))N(!0),t=f.cannotBeMoved(a);else if(N(!1),e===d&&b!==B.AFTER)t=f.itemWillNotBeMoved(a);else if(0===e&&b!==B.AFTER)t=f.movedToFirst(a);else if(e===w.length-1&&b!==B.BEFORE)t=f.movedToLast(a);else{let r=w[e-1]?.title,i=w[e+1]?.title;switch(b){case B.BEFORE:t=f.movedBetween(a,r,w[e]?.title);break;case B.AFTER:t=f.movedBetween(a,w[e]?.title,i);break;case B.ROW:t=e<d?f.movedBetween(a,r,w[e]?.title):f.movedBetween(a,w[e]?.title,i)}}M(t)},[a,w,b,d]),k=(0,L.d)(T,100);(0,g.useEffect)(()=>{b!==B.ROW?(x(void 0),A(void 0),k()):(x(d),A(void 0),k(d))},[b,k,d]);let R=async t=>{if(t.preventDefault(),void 0===c||eg(w,c)){A(ev(w,c)),D.current?.focus();return}switch(b){case B.ROW:c>=d?await I(d,c,!1):await I(d,c,!0);break;case B.BEFORE:await I(d,c,!0);break;case B.AFTER:default:await I(d,c,!1)}e(),G({newIndex:c,currentIndex:d,items:w,title:a,moveAction:b})};return(0,o.g)({containerRef:C,onClickOutside:e=>e.preventDefault()}),(0,r.jsx)(m.l,{title:(0,r.jsx)("span",{className:(0,v.$)(p.title),children:"Move selected item"}),onClose:()=>{e(),(0,i.i)(h.cancelMove(a),{assertive:!0})},width:"large",ref:C,renderBody:()=>(0,r.jsxs)("form",{onSubmit:R,...(0,n.G)("move-dialog-form"),onBlur:e=>e.stopPropagation(),className:(0,v.$)(p.form),noValidate:!0,children:[(0,r.jsxs)(m.l.Body,{className:(0,v.$)(p.dialogBody),children:[(0,r.jsxs)("div",{className:(0,v.$)(p.dialogTitle),children:[(0,r.jsx)("span",{className:"text-bold",children:"Item"}),(0,r.jsx)("span",{children:a})]}),(0,r.jsx)(em,{options:w,onPositionChange:e=>{x(e),A(void 0),k(e)},initialPosition:d+1,moveAction:b,onMoveActionChange:y,error:E,ref:D}),(0,r.jsxs)(u.A,{"aria-live":"assertive",variant:S?"warning":"default",...(0,n.G)("drag-and-drop-move-dialog-flash"),children:[(0,r.jsx)(eo.A,{icon:S?l.AlertIcon:l.InfoIcon,className:"fgColor-accent"}),j]})]}),(0,r.jsx)(m.l.Footer,{className:"p-2",children:(0,r.jsx)(s.Q,{type:"submit",variant:"primary",...(0,n.G)("drag-and-drop-move-dialog-move-item-button"),children:"Move"})})]})})};try{eh.displayName||(eh.displayName="MoveDialog")}catch{}var ef=a(65607),ep=a(30871);let ex={instructionContainer:"KeyboardSpecificInstructionsDialog-module__instructionContainer--mMMA3",instruction:"KeyboardSpecificInstructionsDialog-module__instruction--cVFch",footerContainer:"KeyboardSpecificInstructionsDialog-module__footerContainer--G_jqi",footerForm:"KeyboardSpecificInstructionsDialog-module__footerForm--ifodW",footerButton:"KeyboardSpecificInstructionsDialog-module__footerButton--JEK34"},eb="hideKeyboardSpecificInstructions",ey=({onClose:e})=>{let[t,a]=(0,et.M)(eb,!1);return(0,r.jsxs)("div",{className:(0,v.$)(ex.footerContainer),children:[(0,r.jsx)("div",{className:(0,v.$)(ex.footerForm),children:(0,r.jsxs)(d.A,{children:[(0,r.jsx)(ef.A,{checked:t,onChange:()=>a(!t)}),(0,r.jsx)(d.A.Label,{children:"Don't show this again"})]})}),(0,r.jsx)("div",{className:(0,v.$)(ex.footerButton),children:(0,r.jsx)(s.Q,{onClick:e,children:"Close"})})]})},ej=({isOpen:e,onClose:t,direction:a,keyboardCodes:i=en})=>e?(0,r.jsx)("div",{onKeyDown:e=>{e.stopPropagation(),"Escape"===e.code&&t()},children:(0,r.jsx)(m.l,{title:"How to move objects via keyboard",subtitle:"This navigation is only available when move mode is activated.",onClose:t,renderFooter:()=>(0,r.jsx)(m.l.Footer,{className:"d-flex",children:(0,r.jsx)(ey,{onClose:t})}),children:(0,r.jsxs)("table",{className:(0,v.$)(ex.instructionContainer),children:[(0,r.jsx)("thead",{className:"sr-only",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"text=bold",children:"Action"}),(0,r.jsx)("th",{className:"text=bold",children:"Keyboard Shortcut"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{className:(0,v.$)(ex.instruction),children:[(0,r.jsx)("td",{children:h.cancelDrag}),(0,r.jsx)("td",{children:i.cancel.map((e,t)=>(0,r.jsxs)(g.Fragment,{children:[t>0&&(0,r.jsx)("span",{children:" / "}),(0,r.jsx)(ep.U,{keys:e})]},e))})]}),(0,r.jsxs)("tr",{className:(0,v.$)(ex.instruction),children:[(0,r.jsx)("td",{children:h.movePosition}),(0,r.jsxs)("td",{children:[(0,r.jsx)(ep.U,{keys:"vertical"===a?"up":"left"}),(0,r.jsx)("span",{children:" / "}),(0,r.jsx)(ep.U,{keys:"vertical"===a?"down":"right"})]})]}),(0,r.jsxs)("tr",{className:(0,v.$)(ex.instruction,"border-bottom-0"),children:[(0,r.jsx)("td",{children:h.endDrag}),(0,r.jsx)("td",{children:i.end.map((e,t)=>(0,r.jsxs)(g.Fragment,{children:[t>0&&(0,r.jsx)("span",{children:" / "}),(0,r.jsx)("kbd",{className:"bgColor-default box-shadow-none fgColor-muted",children:e.toLowerCase()})]},e))})]})]})]})})}):null;try{ey.displayName||(ey.displayName="KeyboardSpecificInstructionsFooter")}catch{}try{ej.displayName||(ej.displayName="KeyboardSpecificInstructionsDialog")}catch{}let eM={isKeyboardDragging:"SortableListContainer-module__isKeyboardDragging--rQZ0q",container:"SortableListContainer-module__container--MDMg5"},eS=({onDrop:e,items:t,direction:a="vertical",children:l,as:o="ul",renderOverlay:s,keyboardCodes:d,...c})=>{let[u,m]=(0,g.useState)(!1),[f,p]=(0,g.useState)(0),[x,b]=(0,g.useState)(!1),[y,j]=(0,g.useState)(0),[M,S]=(0,g.useState)(null),[N,C]=(0,g.useState)(!1),[I]=(0,et.M)(eb,!1),[w,E]=(0,g.useState)(!1),[A,F]=(0,g.useState)(null),T=t.map(e=>e.id),k=(0,g.useMemo)(()=>t.reduce((e,t)=>(e[t.id]=t.title,e),{}),[t]);er("is-dragging",u),er(eM.isKeyboardDragging??"",w);let[R,L]=(0,g.useState)(null),$=(0,ee.j)(),B=(0,J.G7)("drag_and_drop_experimental_move_dialog"),_=(0,g.useCallback)(()=>{C(!1)},[]),G=(0,g.useCallback)(e=>{if(!e.active)return;(0,i.i)(h.instructions(k[e.active.id]??e.active.id),{assertive:!0});let t=e.active.data.current?.metadata;S(t?.id??null),j(e.active.data.current?.sortable.index??0),p(e.active.data.current?.sortable.index??0),m(!0)},[k]),K=(0,g.useCallback)(e=>{let t=e.over?.data.current?.metadata;S(t?.id??null),x||b(!0),e.over&&e.over.data.current&&p(e.over.data.current.sortable.index)},[x]);(0,g.useEffect)(()=>{if(u&&x){if(0===f)O(h.firstItemInList);else if(f===T.length-1)O(h.lastItemInList);else{let e=f<=y,t=f===y,a=e?T[f-1]:T[f+1],r=t?T[f+1]:T[f];O(h.movedBetween(k[a],k[r]))}}},[u,x,f,k,T,y]);let q=(0,g.useCallback)(e=>{(0,i.i)(`${k[e.active.id]??e.active.id} not moved.`,{assertive:!0}),m(!1),E(!1),b(!1),setTimeout(()=>{document.activeElement?.scrollIntoView({behavior:$?"instant":"smooth",block:"nearest"})},1)},[k,$]),W=(0,g.useCallback)(a=>{if(m(!1),E(!1),b(!1),!a.active||!a.over)return;let r=a.active.data.current?.metadata,n=a.over.data.current?.metadata;r?.id!==n?.id&&e({dragMetadata:r,dropMetadata:n,isBefore:f<y}),S(null),function({newIndex:e,currentIndex:t,items:a,title:r}){let n=a.map(e=>e.id);if(e===t)(0,i.i)(h.successfulNoMove(r),{assertive:!0});else if(0===e)(0,i.i)(h.successfulFirstMove(r),{assertive:!0});else if(e===a.length-1)(0,i.i)(h.successfulLastMove(r),{assertive:!0});else{let l=e<=t?n[e-1]:n[e+1],o=n[e],s=a.find(e=>e.id===l)?.title??"",d=a.find(e=>e.id===o)?.title??"";(0,i.i)(h.successfulMove(r,s,d),{assertive:!0})}}({newIndex:f,currentIndex:y,items:t,title:k[a.active.id]})},[f,y,t,k,e]),U=(0,g.useCallback)((t,a,r)=>{S(T[a]??null);let i=T[t],n=T[a];i&&n&&e({dragMetadata:{id:i},dropMetadata:{id:n},isBefore:r??a<t})},[T,e]),z=(0,g.useContext)(ei),en=(0,g.useMemo)(()=>()=>{x||I||C(!0),E(!0)},[I,x]),eo=(0,g.useCallback)((e,t,a)=>{F({title:e,index:t,returnFocusRef:a})},[]),es=(0,g.useCallback)(()=>{F(null),L(A?.returnFocusRef?.current??null)},[A]),ed=(0,V.FR)((0,V.MS)(V.cA),(0,V.MS)(CustomKeyboardSensor,{coordinateGetter:Q.JR,keyboardCodes:d,onActivation:en}));(0,g.useEffect)(()=>{R?.focus(),L(null)},[R]);let ec=t[y],[eu]=(0,Z.I)(()=>document.body,null,[Y.XC?.body]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ej,{isOpen:N,onClose:_,direction:a,keyboardCodes:d}),(0,r.jsx)(V.Mp,{collisionDetection:(0,g.useMemo)(()=>"horizontal"===a?V.y$:el,[a]),modifiers:(0,g.useMemo)(()=>"horizontal"===a?[X.dU]:[X.FN],[a]),sensors:ed,onDragStart:G,onDragOver:K,onDragEnd:W,onDragCancel:q,accessibility:(0,g.useMemo)(()=>({container:z,announcements:P}),[z]),children:(0,r.jsx)(Q.gB,{items:T,strategy:(0,g.useMemo)(()=>"horizontal"===a?Q.m$:Q._G,[a]),children:(0,r.jsxs)(D.Provider,{value:(0,g.useMemo)(()=>({overId:M,dragIndex:y,moveToPosition:U,items:t,direction:a,openMoveDialog:eo,moveDialogItem:A,isInDragMode:u&&!N}),[M,y,U,t,a,eo,A,u,N]),children:[A&&!B&&(0,r.jsx)(eh,{closeDialog:es}),A&&B&&(0,r.jsx)(H,{closeDialog:es}),(0,r.jsx)(o,{...c,className:(0,v.$)(eM.container),...(0,n.G)("sortable-list"),onKeyDown:e=>{u&&"Tab"===e.code&&e.preventDefault()},children:l}),eu?(0,ea.createPortal)((0,r.jsx)(V.Hd,{dropAnimation:null,className:(0,v.$)(eM.container),children:ec&&!N?s(ec,y):null}),eu):null]})})})]})};try{eS.displayName||(eS.displayName="SortableListContainer")}catch{}let eN={dragItem:"SortableListItem-module__dragItem--QbM4N",vertical:"SortableListItem-module__vertical--gKirP",horizontal:"SortableListItem-module__horizontal--Q4fny",contents:"SortableListItem-module__contents--YiGyX",dragOverlay:"SortableListItem-module__dragOverlay--pXiBk"};var eC=a(52513),eI=a(64515),ew=a(87330);let eE={trigger:"SortableListTrigger-module__trigger--CqPGy",mouseTrigger:"SortableListTrigger-module__mouseTrigger--ADZ9c"},eA=(0,g.forwardRef)(function(e,t){let{title:a,id:i}=k(),{setActivatorNodeRef:o,listeners:s,isDragging:d,items:c}=(0,Q.gl)({id:i,data:{metadata:{id:i}}}),{isTouchDevice:u}=(0,eC.k)(),m=(0,g.useRef)(null);(0,eI.T)(t,m);let{onMouseDown:h,onClick:f,onKeyDown:p}=s;return(0,r.jsxs)("div",{...(0,n.G)("sortable-trigger-container"),className:(0,v.$)(eE.trigger,{"v-hidden":1===c.length||u}),children:[(0,r.jsx)("div",{onMouseDown:h,className:(0,v.$)(eE.mouseTrigger),...(0,n.G)("sortable-mouse-trigger")}),(0,r.jsx)(ew.K,{className:"mr-1 p-1","aria-label":`Move ${a}`,ref:e=>{m.current=e,o(e)},onKeyDown:p,onClick:f,variant:"invisible",role:d?"application":"button",icon:l.GrabberIcon,size:"large",...e,...(0,n.G)("sortable-trigger")})]})});try{eA.displayName||(eA.displayName="SortableListTrigger")}catch{}let eD=({children:e,id:t,index:a,title:i,containerStyle:l,style:o,hideSortableItemTrigger:s,isDragOverlay:d=!1,role:c,as:u="li",...m})=>{let h=(0,ee.j)(),{setNodeRef:f,isDragging:p,transform:x,transition:b}=(0,Q.gl)({id:t,data:{metadata:{id:t}}}),{direction:y,isInDragMode:j}=F(),M=(0,v.$)("position-relative",m.className,j&&{[eN.dragItem]:p,[eN.horizontal]:"horizontal"===y,[eN.vertical]:"vertical"===y}),S={transform:x?`
        translateX(${Math.round(x.x)}px)
        translateY(${Math.round(x.y)}px)
        scaleX(${x.scaleX})
        scaleY(${x.scaleY})
      `:"none",transition:h?"none":b};return(0,r.jsx)(T.Provider,{value:(0,g.useMemo)(()=>({index:a,title:i,id:t}),[a,t,i]),children:(0,r.jsx)(d?"div":u,{...m,...(0,n.G)(d?"drag-overlay":"sortable-item"),className:M,style:{...d?{}:l,...S},ref:f,children:(0,r.jsxs)("div",{style:o,className:(0,v.$)("position-relative",j&&eN.contents,d&&eN.dragOverlay),role:c,children:[!s&&(0,r.jsx)(eA,{}),e]})})})};try{eD.displayName||(eD.displayName="SortableListItem")}catch{}let eF=Object.assign(eS,{Item:eD,DragTrigger:eA,MoveDialog:A,MoveDialogForm:S,MoveDialogTrigger:R,SortableMoveDialog:H});try{eF.displayName||(eF.displayName="DragAndDrop")}catch{}a(74979)},44523:(e,t,a)=>{let r;a.d(t,{j:()=>d});var i=a(96540);function n(){return r||(r=window.matchMedia("(prefers-reduced-motion: reduce)"))}function l(){return!1}function o(){return n().matches}function s(e){let t=n();return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}function d(){return(0,i.useSyncExternalStore)(s,o,l)}},74075:(e,t,a)=>{a.d(t,{M:()=>s,s:()=>d});var r=a(10943),i=a(96540);let n=(0,r.A)("localStorage"),l="local-storage-update",o=class UseLocalStorageUpdateEvent extends Event{constructor(e,t){super(l),this.storageKey=e,this.storageValue=t}};function s(e,t){let a=(0,i.useRef)(t);(0,i.useEffect)(()=>{a.current=t});let[r,s]=(0,i.useState)(()=>{let t=n.getItem(e);return t?JSON.parse(t):a.current}),d=(0,i.useCallback)(t=>{s(t??a.current),void 0===t?n.removeItem(e):n.setItem(e,JSON.stringify(t)),document.dispatchEvent(new o(e,t))},[e]);return(0,i.useEffect)(()=>{function t(t){t.storageKey===e&&s(t.storageValue??a.current)}document.addEventListener(l,t);let r=n.getItem(e);return r?s(JSON.parse(r)):s(a.current),()=>{document.removeEventListener(l,t)}},[e]),[r,d]}function d(e){for(let t of e)n.removeItem(t),document.dispatchEvent(new o(t,void 0))}},52513:(e,t,a)=>{a.d(t,{k:()=>s});var r=a(96540),i=a(46996),n=a(3167),l=a(2703);let o=e=>({height:e.clientHeight,isLandscape:window.matchMedia("(orientation: landscape)").matches,isTouchDevice:"ontouchstart"in window||navigator.maxTouchPoints>0,pixelDensity:window.devicePixelRatio,width:e.clientWidth});function s(){let[e]=(0,l.I)(()=>document.documentElement,null,[n.XC?.documentElement]),t=(0,r.useRef)({}),a=(0,r.useCallback)(t=>{if(!e)return()=>void 0;let a=new ResizeObserver(t);return a.observe(e),()=>{a.unobserve(e),a.disconnect()}},[e]);return(0,r.useSyncExternalStore)(a,()=>{if(!e)return t.current;let a=o(e);return(0,i.A)(a,t.current)?t.current:(t.current=a,a)},()=>t.current)}}}]);
//# sourceMappingURL=ui_packages_drag-and-drop_drag-and-drop_ts-a9834e7512b1.js.map