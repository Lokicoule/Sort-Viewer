(this["webpackJsonpSort-Viewer"]=this["webpackJsonpSort-Viewer"]||[]).push([[0],{57:function(e,t,n){e.exports=n(68)},62:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(21),i=n.n(o),c=(n(62),n(20)),u=n(12),s=n(14),l=Object(u.c)({name:"algorithms",initialState:{bubbleSort:{checked:!0,label:"BubbleSort",items:[],executionTime:null},selectionSort:{checked:!0,label:"SelectionSort",items:[],executionTime:null},heapSort:{checked:!0,label:"HeapSort",items:[],executionTime:null},mergeSort:{checked:!0,label:"MergeSort",items:[],executionTime:null},quickSort:{checked:!0,label:"QuickSort",items:[],executionTime:null}},reducers:{setAlgorithm:function(e,t){var n=t.payload,r=n.algorithm,a=n.checked;e[r].checked=a},setItem:function(e,t){var n=t.payload,r=n.algorithm,a=n.index,o=n.item;e[r].items[a]=o},setItems:function(e,t){var n=t.payload,r=n.algorithm,a=n.items;e[r].items=a},setExecutionTime:function(e,t){var n=t.payload,r=n.algorithm,a=n.executionTime;e[r].executionTime=a}}}),d=l.actions,f=d.setAlgorithm,h=d.setItem,p=d.setItems,m=d.setExecutionTime,b=l.reducer,v={speed:75},g={size:10},O="#172a3a",S=Object(u.c)({name:"referential",initialState:{sortedItems:[],nbItems:g.size},reducers:{setNbItems:function(e,t){var n=t.payload.nbItems;e.nbItems=n},setSortedItems:function(e,t){var n=t.payload.sortedItems;e.sortedItems=n}}}),j=S.actions,k=j.setNbItems,y=j.setSortedItems,E=(j.setItems,S.name,S.reducer),x=Object(u.c)({name:"lock",initialState:{bubbleSort:!1,quickSort:!1,mergeSort:!1,selectionSort:!1},reducers:{bubbleSortLocked:function(e,t){var n=t.payload;e.bubbleSort=n},quickSortLocked:function(e,t){var n=t.payload;e.quickSort=n},mergeSortLocked:function(e,t){var n=t.payload;e.mergeSort=n},selectionSortLocked:function(e,t){var n=t.payload;e.selectionSort=n},heapSortLocked:function(e,t){var n=t.payload;e.heapSort=n}}}),w=x.actions,I=w.bubbleSortLocked,T=w.quickSortLocked,C=w.mergeSortLocked,R={bubbleSort:I,selectionSort:w.selectionSortLocked,mergeSort:C,quickSort:T,heapSort:w.heapSortLocked},D=x.reducer,A=Object(u.c)({name:"speed",initialState:{value:1},reducers:{setSpeed:function(e,t){e.value=t.payload}}}),L=A.actions.setSpeed,P=A.reducer,z=Object(s.c)({algorithms:b,referential:E,lock:D,speed:P}),W=Object(s.c)({models:z}),B=n(4),F=n(8),N=n(9),M=function(){function e(){Object(F.a)(this,e)}return Object(N.a)(e,null,[{key:"speedCalculator",value:function(e,t){var n=0;return e&&t&&(n=e/(4*t)*100),n}},{key:"speedToPercentage",value:function(e){return 100-e}}]),e}(),q=Object(u.b)("sortAction/Dispatched"),U=n(19),V=Object(U.a)((function(e){return e.models.speed}),(function(e){return e.value}));function H(e,t){e&&e.length&&(!function(e,t){var n=e.algorithm,r=e.item,a=e.executionTime,o=e.lock;r&&t(h(e))||a&&t(m(e))||t(R[n](o))}(e[0],t),e.shift(),H(e,t))}var G=function(e){return function(t){return function(n){if(n.type!==q.type)return t(n);var r=n.payload,a=r.toDispatch,o=r.latencies;!function e(t,n,r){var a=n.dispatch,o=n.getState;if(t.length){var i=t[0].actions,c=M.speedCalculator(V(o()),r);H(i,a),setTimeout((function(){t.shift(),e(t,{dispatch:a,getState:o},r)}),c)}}(a,e,o)}}},J=[].concat(Object(B.a)(Object(u.d)()),[G]),$=Object(u.a)({reducer:W,middleware:J}),Q=n(16),K=n(15),X=n(23),Y=n(18),Z=n(90),_=n(95),ee=n(69),te=n(94),ne=n(5);var re=Object(ne.a)({root:{color:function(e){return e.color}},thumb:{height:20,width:20,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50%)"},track:{height:5,borderRadius:4},rail:{height:5,borderRadius:4}})((function(e){e.color;var t=Object(X.a)(e,["color"]);return a.a.createElement(te.a,t)})),ae=n(96),oe=n(89),ie=Object(ae.a)((function(e){e.color;var t=Object(X.a)(e,["color"]);return a.a.createElement(oe.a,t)}))({background:function(e){return"red"===e.color?"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)":"linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)"},border:0,borderRadius:3,boxShadow:function(e){return"red"===e.color?"0 3px 5px 2px rgba(255, 105, 135, .3)":"0 3px 5px 2px rgba(33, 203, 243, .30)"},color:"white",height:48,padding:function(e){return"large"===e.padding?"0 30px":""},margin:8}),ce=n(93),ue=n(40),se=Object(ne.a)({root:{color:ue.a[400],"&$checked":{color:ue.a[400]}},checked:{}})((function(e){return a.a.createElement(ce.a,Object.assign({color:"default"},e))})),le=function(e){Object(Q.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(F.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={data:{}},e.handleSubmit=function(t){t.preventDefault(),e.doSubmit()},e.handleSliderChange=function(t,n,r){var a=Object(Y.a)({},e.state.data);a[r]=n,e.setState({data:a},(function(){return e.doSelectChange()}))},e.handleCheckChange=function(t){var n=t.target,r=n.name,a=n.checked,o=Object(Y.a)({},e.state.data.checkList);o[r]=a;var i=Object(Y.a)(Object(Y.a)({},e.state.data),{},{checkList:o});e.setState({data:i},(function(){return e.doCheckChange({name:r,checked:a})}))},e}return Object(N.a)(n,[{key:"renderButton",value:function(e,t,n){return a.a.createElement(ie,{disabled:t,type:"submit",size:"medium",padding:"large",color:n},e)}},{key:"renderCheckBox",value:function(e,t,n){return a.a.createElement(Z.a,{key:e,control:a.a.createElement(se,{onChange:this.handleCheckChange,name:e,checked:n}),label:t})}},{key:"renderSlider",value:function(e){var t=this,n=e.label,r=e.name,o=e.value,i=e.disabled,c=e.color,u=e.min,s=e.max;return a.a.createElement(_.a,{style:{minWidth:"150px",maxWidth:"300px",marginLeft:10,marginTop:7}},a.a.createElement(ee.a,null,n),a.a.createElement(re,{color:c,valueLabelDisplay:"auto","aria-label":"slider",value:o,min:u,max:s,disabled:i,onChange:function(e,n){return t.handleSliderChange(e,n,r)}}))}}]),n}(r.Component),de=n(97),fe=Object(ae.a)((function(e){e.color;var t=Object(X.a)(e,["color"]);return a.a.createElement(de.a,t)}))({background:function(e){return e.color},alignItems:"center"}),he=function(e){Object(Q.a)(n,e);var t=Object(K.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"render",value:function(){var e=this.props,t=e.position,n=e.model;return a.a.createElement(fe,{color:O,position:t},a.a.createElement("span",{style:{fontWeight:"bold",marginTop:"5px",fontSize:"20px"}},n.label),a.a.createElement("span",{style:{marginTop:"5px",marginBottom:"5px"}},"Real execution time : ",n.executionTime))}}]),n}(le);he.defaultProps={position:"fixed"};var pe=he,me=Object.freeze({SORTED:"#badc58",PARTITIONED:"#00d2d3",CURRENT:"#fed330",SWAPPER:"#fd9644",SWAPPED:"#B33771",PIVOT:"#fc5c65",DEFAULT:"#577590"}),be=Object(ae.a)("div")({background:function(e){var t=e.state;return t&&t||me.DEFAULT},width:function(e){var t=e.value;return"".concat(100*t/220,"%")},height:function(e){var t=e.height;return"".concat(t,"px")},backgroundColor:"#ffd23f",color:"#fff",marginTop:"1px",fontSize:function(e){var t=e.fontSize;return"".concat(t,"px")},paddingLeft:"15px",minHeight:"2px"}),ve=function(e){var t=e.model,n=e.width,r=e.height,o=e.fontSize;return a.a.createElement("div",{style:{width:"".concat(n,"%"),backgroundColor:"#114b5f"}},t.items&&t.items.map((function(e,t){return a.a.createElement(be,{key:t,value:e.value,height:r,state:e.state,fontSize:o},a.a.createElement("span",{style:{position:"absolute",paddingTop:"".concat(r/5,"px")}},e.value))})),a.a.createElement(pe,{position:"static",model:t}))},ge=n(45),Oe=Object(U.a)((function(e){return e.models.algorithms}),(function(e){return Object.entries(e).map((function(e){var t=Object(ge.a)(e,2),n=t[0];return t[1].checked&&n})).filter((function(e){return e}))})),Se=Object(U.a)((function(e){return e.models.algorithms}),(function(e){return Object.entries(e).map((function(e){var t=Object(ge.a)(e,2),n=t[0],r=t[1];return{algorithm:n,checked:r.checked,label:r.label}}))})),je=Object(c.b)((function(e,t){return{model:(n=t.modelName,function(e){return e.models.algorithms[n]})(e)};var n}),(function(e){return{}}))(ve),ke=function(){function e(){Object(F.a)(this,e)}return Object(N.a)(e,null,[{key:"useCasePercentageWidth",value:function(e){return(5===e?100/3:e>1&&50)||100}},{key:"useCaseHeightAndFontSize",value:function(e,t,n){var r=t*(e>2?2:1),a=(n-80-55*(e>2?2:1)-r)/r;return{height:a,fontSize:a/2}}}]),e}(),ye=function(e){Object(Q.a)(n,e);var t=Object(K.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.nbItems;(0,e.updateReferential)(t)}},{key:"render",value:function(){var e=this.props,t=e.nbItems,n=e.algorithms,r=e.windowDimensions,o=ke.useCasePercentageWidth(n.length),i=ke.useCaseHeightAndFontSize(n.length,t,r.height),c=i.height,u=i.fontSize;return a.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},n&&n.map((function(e,t){return a.a.createElement(je,{key:e,modelName:e,width:o,height:c,fontSize:u})})))}}]),n}(r.Component),Ee=function(e){return function(t){Object(Q.a)(r,t);var n=Object(K.a)(r);function r(){var e;Object(F.a)(this,r);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={dimensions:{width:0,height:0}},e.updateWindowDimensions=function(){var t={width:window.innerWidth,height:window.innerHeight};e.setState({dimensions:t})},e}return Object(N.a)(r,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){return a.a.createElement(e,Object.assign({},this.props,{windowDimensions:this.state.dimensions}))}}]),r}(r.Component)},xe=function(){function e(){Object(F.a)(this,e)}return Object(N.a)(e,null,[{key:"generateRandomArray",value:function(e,t){for(var n=[],r=0;n.length<e;)n.push({id:r++,value:Math.round(Math.random()*t+15)});return n}}]),e}();xe.sortItemsByValueAsc=function(e){return Object(B.a)(e).sort((function(e,t){return e.value<t.value?-1:1}))},xe.itemIsSorted=function(e,t,n){return e.some((function(e,r){return e.value===t.value&&r===n}))},xe.getIndexById=function(e,t){return e.findIndex((function(e){return e.id===t}))};var we=function(e){return function(t,n){var r=Se(n()),a=xe.generateRandomArray(e,200);t(k({nbItems:e})),r.forEach((function(e){var n=e.algorithm;return t(p({algorithm:n,items:a}))})),t(y({sortedItems:xe.sortItemsByValueAsc(a)}))}},Ie=Object(U.a)((function(e){return e.models.lock}),(function(e){return e.bubbleSort||e.mergeSort||e.selectionSort||e.quickSort||e.heapSort})),Te=Object(U.a)((function(e){return e.models.referential}),(function(e){return e.sortedItems})),Ce=Object(U.a)((function(e){return e.models.referential}),(function(e){return e.nbItems})),Re=Object(c.b)((function(e){return{nbItems:Ce(e),locked:Ie(e),algorithms:Oe(e)}}),(function(e){return{updateReferential:function(t){e(we(t))}}}))(Ee(ye)),De=n(91),Ae=n(41),Le=function(e){Object(Q.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(F.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={data:Object(Y.a)({},g)},e.doSelectChange=function(){var t=e.state.data.size;e.props.updateReferential(t)},e.doSubmit=function(){var t=e.state.data.size;e.props.updateReferential(t)},e}return Object(N.a)(n,[{key:"render",value:function(){var e=this.state.data.size,t=this.props.locked,n={label:"Array size",name:"size",value:e,disabled:t,color:Ae.a[400],min:5,max:100};return a.a.createElement("form",{style:{display:"flex",flexGrow:.3,flexWrap:"wrap",justifyContent:"space-around"},onSubmit:this.handleSubmit},this.renderSlider(n),this.renderButton("Generate",t))}}]),n}(le),Pe=Object(c.b)((function(e){return{locked:Ie(e)}}),(function(e){return{updateReferential:function(t){e(we(t))}}}))(Le),ze=function(e){Object(Q.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(F.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={data:Object(Y.a)({},v)},e.doSelectChange=function(){var t=e.state.data.speed;(0,e.props.setSpeed)(t)},e.doCheckChange=function(t){var n=t.name,r=t.checked;(0,e.props.setAlgorithm)({algorithm:n,checked:r})},e.doSubmit=function(){var t=e.props,n=t.sortedItems,r=t.selectedAlgorithms;(0,t.submit)(n,r)},e}return Object(N.a)(n,[{key:"render",value:function(){var e=this,t=this.state.data.speed,n=this.props,r=n.locked,o=n.algorithms,i={label:"Speed",name:"speed",value:t,disabled:!1,color:"#FE6B8B"};return a.a.createElement("form",{style:{display:"flex",flexGrow:.7,flexWrap:"wrap",justifyContent:"space-around"},onSubmit:this.handleSubmit},o.map((function(t){var n=t.algorithm,r=t.label,a=t.checked;return e.renderCheckBox(n,r,a)})),this.renderSlider(i),this.renderButton("Sort",r,"red"))}}]),n}(le);function We(e){return function(t){return function(){var n=performance.now(),r=e.apply(this,arguments),a=performance.now();return r.unshift({actions:[{algorithm:t,executionTime:"".concat((a-n).toFixed(4)," (ms)")},{algorithm:t,lock:!0}]}),r.push({actions:[{algorithm:t,lock:!1}]}),r}}}var Be=function(e,t,n,r){return{algorithm:e,index:n,item:Object(Y.a)(Object(Y.a)({},t),{},{state:r})}},Fe=function(e,t,n){return Be(e,t[n],n,me.CURRENT)},Ne=function(e,t,n,r){return Be(e,t[n],n,r?me.SORTED:me.DEFAULT)},Me=function(){function e(){Object(F.a)(this,e)}return Object(N.a)(e,null,[{key:"swap",value:function(e,t,n){var r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}}]),e}(),qe=function(){function e(){Object(F.a)(this,e)}return Object(N.a)(e,null,[{key:"swap",value:function(e,t,n,r){var a=function(a){return[Be(r,e[t],t,a),Be(r,e[n],n,a)]},o=[];return o.push({actions:Object(B.a)(a(me.SWAPPER))}),Me.swap(e,t,n),o.push({actions:Object(B.a)(a(me.SWAPPED))}),o}},{key:"getItemsPartition",value:function(e,t,n,r){for(var a=[],o=t;o<=n;o++)a.push(Be(r,e[o],o,me.PARTITIONED));return a}},{key:"swappersReleased",value:function(e,t,n,r,a){return[Ne(a,e,n,xe.itemIsSorted(t,e[n],n)),Ne(a,e,r,xe.itemIsSorted(t,e[r],r))]}}]),e}();function Ue(e,t,n){for(var r=e.length-1,a=[],o=!1;!o;)o=Ve(e,t,r,a,n),a.push({actions:[Be(n,e[r],r--,me.SORTED)]});return a}function Ve(e,t,n,r,a){for(var o=!0,i=0;i<n;i++)r.push({actions:[Fe(a,e,i)]}),e[i].value>e[i+1].value&&(r.push.apply(r,Object(B.a)(qe.swap(e,i,i+1,a))),o=!1),r.push({actions:[Ne(a,e,i,xe.itemIsSorted(t,e[i],i))]});return o}function He(e,t,n){for(var r=[],a=0;a<e.length;a++)Ge(a,r,e,t,n),r.push({actions:[Be(n,e[a],a,me.SORTED)]});return r}function Ge(e,t,n,r,a){for(var o=n.length,i=e,c=e;c<o;c++)t.push({actions:[Fe(a,n,c)]}),n[c].value<n[i].value&&(t.push({actions:[Ne(a,n,i,xe.itemIsSorted(r,n[i],i)),Je(n,c,a)]}),i=c),t.push({actions:[$e(c,i,n,r,a)]});t.push.apply(t,Object(B.a)(qe.swap(n,e,i,a)))}function Je(e,t,n){return Be(n,e[t],t,me.PIVOT)}function $e(e,t,n,r,a){return e!==t&&Ne(a,n,e,xe.itemIsSorted(r,n[e],e))||Be(a,n[e],e,me.PIVOT)}var Qe=function e(t,n,r,a,o,i){if(!(r>=a)){var c=Math.floor((r+a)/2);return e(t,n,r,c,o,i),e(t,n,c+1,a,o,i),function(e,t,n,r,a,o,i){var c=[],u=n,s=r+1,l=0;o.push({actions:Object(B.a)(qe.getItemsPartition(e,n,a,i))});for(;u<=r&&s<=a;)e[u].value<=e[s].value?c[l++]=e[u++]:c[l++]=e[s++];for(;u<=r;)c[l++]=e[u++];for(;s<=a;)c[l++]=e[s++];for(var d=n;d<=a;d++){var f=xe.getIndexById(e,c[d-n].id);o.push({actions:[Be(i,e[d],d,me.CURRENT),Be(i,e[f],f,me.CURRENT)]}),d!==f?(o.push.apply(o,Object(B.a)(qe.swap(e,d,f,i))),o.push({actions:Object(B.a)(qe.swappersReleased(e,t,d,f,i))})):o.push({actions:[Ne(i,e,f,xe.itemIsSorted(t,e[f],f))]})}return o}(t,n,r,c,a,o,i)}};function Ke(e,t,n,r,a,o){if(e.length>1){var i=function(e,t,n,r,a,o){var i=Math.floor((r+n)/2),c=e[i],u=n,s=r;a.push({actions:[].concat(Object(B.a)(qe.getItemsPartition(e,n,r,o)),[Be(o,c,i,me.PIVOT)]),waiting:!0});for(;u<=s;){for(;e[u].value<c.value;)a.push({actions:[Fe(o,e,u)]}),a.push({actions:[Ne(o,e,u,xe.itemIsSorted(t,e[u],u))]}),u++;for(;e[s].value>c.value;)a.push({actions:[Fe(o,e,s)]}),a.push({actions:[Ne(o,e,s,xe.itemIsSorted(t,e[s],s))]}),s--;u<=s&&(a.push.apply(a,Object(B.a)(qe.swap(e,u,s,o))),a.push({actions:Object(B.a)(qe.swappersReleased(e,t,u,s,o))}),u++,s--)}return u}(e,t,n,r,a,o);n<i-1&&Ke(e,t,n,i-1,a,o),i<r&&Ke(e,t,i,r,a,o)}return a}function Xe(e,t,n){var r=[],a=e.length-1;for(r.push.apply(r,Object(B.a)(function(e,t,n){var r=[],a=e.length,o=Math.floor(a/2);for(;o>=0;)r.push({actions:[Fe(n,e,o)]}),r.push.apply(r,Object(B.a)(Ye(e,t,a,o,n))),r.push({actions:[Ne(n,e,o,xe.itemIsSorted(t,e[o],o))]}),o--;return r}(e,t,n)));a>=0;)r.push.apply(r,Object(B.a)(qe.swap(e,a,0,n))),r.push({actions:[Be(n,e[a],a,me.SORTED)]}),r.push.apply(r,Object(B.a)(Ye(e,t,a,0,n))),a--;return r}function Ye(e,t,n,r,a){var o=[],i=r,c=Ze(r),u=_e(r);return!et(n,c)&&e[c].value>e[i].value&&(i=c),!et(n,u)&&e[u].value>e[i].value&&(i=u),r!==i&&(o.push.apply(o,Object(B.a)(qe.swap(e,r,i,a))),o.push({actions:Object(B.a)(qe.swappersReleased(e,t,r,i,a))}),o.push.apply(o,Object(B.a)(Ye(e,t,n,i,a)))),o}var Ze=function(e){return 2*e+1},_e=function(e){return 2*e+2},et=function(e,t){return t>=e},tt={bubbleSort:function(e,t,n){return function(r){var a=We(Ue)(n);r(q({toDispatch:a(Object(B.a)(e),t,n),latencies:4}))}},selectionSort:function(e,t,n){return function(r){var a=We(He)(n);r(q({toDispatch:a(Object(B.a)(e),t,n),latencies:5}))}},mergeSort:function(e,t,n){return function(r){var a=We(Qe)(n);r(q({toDispatch:a(Object(B.a)(e),t,0,e.length-1,[],n),latencies:4}))}},quickSort:function(e,t,n){return function(r){var a=We(Ke)(n);r(q({toDispatch:a(Object(B.a)(e),t,0,e.length-1,[],n),latencies:7}))}},heapSort:function(e,t,n){return function(r){var a=We(Xe)(n);r(q({toDispatch:a(Object(B.a)(e),t,n),latencies:8}))}}},nt=Object(c.b)((function(e){return{sortedItems:Te(e),locked:Ie(e),selectedAlgorithms:Oe(e),algorithms:Se(e)}}),(function(e){return{setSpeed:function(t){return e(L(M.speedToPercentage(t)))},setAlgorithm:function(t){return e(f(t))},submit:function(t,n){n.forEach((function(n){e(function(e,t){return function(n,r){var a,o=(a=e,function(e){return e.models.algorithms[a].items})(r());n(tt[e](o,t,e))}}(n,t))}))}}}))(ze),rt=Object(ae.a)((function(e){e.color;var t=Object(X.a)(e,["color"]);return a.a.createElement(de.a,t)}))({background:function(e){return e.color}}),at=function(e){Object(Q.a)(n,e);var t=Object(K.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"render",value:function(){return a.a.createElement(rt,{color:O,position:"static"},a.a.createElement(De.a,{style:{minHeight:80}},a.a.createElement(Pe,null),a.a.createElement(nt,null)))}}]),n}(le),ot=function(){return a.a.createElement(c.a,{store:$},a.a.createElement(at,null),a.a.createElement(Re,null))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ot,null)),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.350e0a4d.chunk.js.map