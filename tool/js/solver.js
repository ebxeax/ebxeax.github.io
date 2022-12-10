"use strict";
var main;(function(){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_createArray(cls,sz){var data=new Array(sz);var arr=new $rt_array(cls,data);if(sz>0){var i=0;do {data[i]=null;i=i+1|0;}while(i<sz);}return arr;}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new Array(sz));}function $rt_createLongArray(sz){var data=new Array(sz);var arr=new $rt_array($rt_longcls(),data);for(var i=0;i<sz;i=i+1|0){data[i]=Long_ZERO;}return arr;}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new Uint16Array(sz));}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new Int8Array(sz));}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new Int16Array(sz));}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new Int32Array(sz));}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),
new Int8Array(sz));}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new Float32Array(sz));}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new Float64Array(sz));}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false};arraycls.classObject=null;arraycls.$array
=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new Error("Java exception thrown");if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,
ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_objcls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first
=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays
=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for
(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]
|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim
=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&isNaN(value)){throw "NaN";}return value;}var $rt_stdoutBuffer="";var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:function(ch){if(ch===0xA){if(console){console.info($rt_stdoutBuffer);}$rt_stdoutBuffer
="";}else {$rt_stdoutBuffer+=String.fromCharCode(ch);}};var $rt_stderrBuffer="";var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:function(ch){if(ch===0xA){if(console){console.error($rt_stderrBuffer);}$rt_stderrBuffer="";}else {$rt_stderrBuffer+=String.fromCharCode(ch);}};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]
=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype
=Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]
=func;}}}cls.$array=null;}}function $rt_threadStarter(f){return function(){var args=Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance
=new Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new DataView(new ArrayBuffer(8));function $rt_doubleToLongBits(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));}function $rt_longBitsToDouble(n)
{$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof Error&&typeof e.$javaException==='object'?e.$javaException:null;}function $rt_jsException(e)
{return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err.$javaException;if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if
(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};var Long_ZERO=new Long(0,0);var Long_MAX_NORMAL=1<<18;function Long_fromInt(val){return val>=0?new Long(val,0):new Long(val, -1);}function Long_fromNumber(val)
{if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}}function Long_toNumber(val){var lo=val.lo;var hi=val.hi;if(lo<0){lo+=0x100000000;}return 0x100000000*hi+lo;}var $rt_imul=Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){if(a<0){a+=0x100000000;}if(b<0){b+=0x100000000;}return a/b|0;};var $rt_umod=function(a,b){if(a<0){a+=0x100000000;}if
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.em=f;}
function $rt_cls(cls){return Lo(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return KB(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.D.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AA7());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AA8(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var F=$rt_throw;var BJ=$rt_compare;var AA9=$rt_nullCheck;var D=$rt_cls;var E=$rt_createArray;var AAn=$rt_isInstance;var AA$=$rt_nativeThread;var AA_=$rt_suspending;var ABa=$rt_resuming;var ABb=$rt_invalidPointer;var C=$rt_s;var Bq=$rt_eraseClinit;var CS=$rt_imul;var BM=$rt_wrapException;
function B(){this.$id$=0;}
function Dc(a){return Lo(a.constructor);}
function SU(a){var b,c,d,e,f,g,h,i,j;b=new P;Q(b);G(b,J$(Dc(a)));G(b,C(0));c=KN(a);if(!c)d=C(1);else{e=(((32-C_(c)|0)+4|0)-1|0)/4|0;f=$rt_createCharArray(e);g=f.data;h=(e-1|0)*4|0;i=0;while(h>=0){j=i+1|0;g[i]=Gw(c>>>h&15,16);h=h-4|0;i=j;}d=KB(f);}G(b,d);return N(b);}
function KN(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function Po(a){var b,c,d;if(!AAn(a,B1)&&a.constructor.$meta.item===null){b=new FZ;M(b);F(b);}b=Ql(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Ov(){B.call(this);}
function AAq(b){var c;Ok();NA();Lj();Lv();OZ();Of();Pe();No();MT();ND();MV();Oc();Lb();MH();OY();K4();Or();Pu();KO();Nv();Pn();Ol();c=new Id;window["solver"]=c;}
function G8(){}
function Jc(){var a=this;B.call(a);a.fm=null;a.ct=null;}
function Lo(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Jc;c.ct=b;d=c;b.classObject=d;}return c;}
function R8(a){return a.ct;}
function Nj(a,b){var c;b=b;c=a.ct;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&Lq(b.constructor,c)?1:0;}
function J$(a){if(a.fm===null)a.fm=$rt_str(a.ct.$meta.name);return a.fm;}
function ER(a){return a.ct.$meta.primitive?1:0;}
function El(a){return Lo(a.ct.$meta.item);}
function MO(){B.call(this);}
function LX(){B.call(this);}
function Ql(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Lq(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Lq(d[e],c))return 1;e=e+1|0;}return 0;}
function Nh(b){return String.fromCharCode(b);}
function BF(){}
function B4(){}
function E1(){}
function Ck(){var a=this;B.call(a);a.D=null;a.dH=0;}
var ABc=null;function KB(a){var b=new Ck();Ha(b,a);return b;}
function Ie(a,b,c){var d=new Ck();PB(d,a,b,c);return d;}
function Ha(a,b){var c,d;b=b.data;c=b.length;a.D=$rt_createCharArray(c);d=0;while(d<c){a.D.data[d]=b[d];d=d+1|0;}}
function PB(a,b,c,d){var e,f;a.D=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.D.data[e]=f[e+c|0];e=e+1|0;}}
function H(a,b){var c;if(b>=0&&b<a.D.data.length)return a.D.data[b];c=new Ed;M(c);F(c);}
function J(a){return a.D.data.length;}
function C4(a){return a.D.data.length?0:1;}
function Oy(a,b){var c,d,e;if(a===b)return 0;c=Bm(J(a),J(b));d=0;while(true){if(d>=c)return J(a)-J(b)|0;e=H(a,d)-H(b,d)|0;if(e)break;d=d+1|0;}return e;}
function HL(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=H(b,d);f=c+1|0;if(e!=H(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Gs(a,b){if(a===b)return 1;return HL(a,b,0);}
function Hp(a,b,c){var d,e,f,g;d=Bs(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.D.data.length)return (-1);if(a.D.data[d]==e)break;d=d+1|0;}return d;}f=Ej(b);g=D6(b);while(true){if(d>=(a.D.data.length-1|0))return (-1);if(a.D.data[d]==f&&a.D.data[d+1|0]==g)break;d=d+1|0;}return d;}
function Nx(a,b){return Hp(a,b,0);}
function DF(a,b,c){var d,e,f,g,h;d=Bm(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.D.data[d]==e)break;d=d+(-1)|0;}return d;}f=Ej(b);g=D6(b);while(true){if(d<1)return (-1);if(a.D.data[d]==g){h=a.D.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function OS(a,b){return DF(a,b,J(a)-1|0);}
function UL(a,b,c){var d,e,f;d=Bs(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(H(a,d+f|0)!=H(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function Ns(a,b,c){var d,e;d=Bm(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(H(a,d+e|0)!=H(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function CR(a,b,c){var d;if(b<=c)return Ie(a.D,b,c-b|0);d=new Br;M(d);F(d);}
function E2(a,b){return CR(a,b,J(a));}
function Vb(a,b,c){return CR(a,b,c);}
function MR(a,b,c){var d,e,f,g;d=new P;Q(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){Fn(d,c);f=f+(J(b)-1|0)|0;break a;}if(H(a,f+g|0)!=H(b,g))break;g=g+1|0;}O(d,H(a,f));}f=f+1|0;}Fn(d,E2(a,f));return N(d);}
function SS(a){return a;}
function JZ(a){var b,c,d,e;b=$rt_createCharArray(a.D.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.D.data[d];d=d+1|0;}return b;}
function Be(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Ck))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(H(a,d)!=H(c,d))return 0;d=d+1|0;}return 1;}
function Hr(a){var b,c,d,e;a:{if(!a.dH){b=a.D.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.dH=(31*a.dH|0)+e|0;d=d+1|0;}}}return a.dH;}
function JL(a,b){var c;c=a;return EI(EO(FR(b),c));}
function I5(a,b){return Oy(a,b);}
function Ok(){ABc=new Hw;}
function Ef(){var a=this;B.call(a);a.fc=null;a.dD=null;a.dY=0;a.el=0;a.g1=null;}
function ABd(a){var b=new Ef();Cr(b,a);return b;}
function Cr(a,b){a.dY=1;a.el=1;a.fc=b;}
function Vy(a){return a;}
function Uj(a){return a.fc;}
function Wm(a){return a.ev();}
function Oz(a){var b,c,d,e,f,g;if(ABe===null){b=new Jd;b.f9=new IB;c=new P;Q(c);b.b3=c;b.dn=$rt_createCharArray(32);b.iV=0;c=new Kg;d=E(Ck,0);e=d.data;MX(C(2));f=e.length;g=0;while(g<f){MX(e[g]);g=g+1|0;}c.ik=C(2);c.jE=d.em();b.gW=c;ABe=b;}J8(a,ABe);}
function J8(a,b){var c,d,e,f,g;E4(b,J$(Dc(a)));c=a.ev();if(c!==null){d=new P;Q(d);G(d,C(3));G(d,c);E4(b,N(d));}a:{MJ(b);if(a.g1!==null){e=a.g1.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];E4(b,C(4));Pa(b,d);g=g+1|0;}}}if(a.dD!==null&&a.dD!==a){E4(b,C(5));J8(a.dD,b);}}
function C1(){Ef.call(this);}
function Ei(){C1.call(this);}
function OD(){Ei.call(this);}
function D7(){var a=this;B.call(a);a.F=null;a.n=0;}
function ABf(){var a=new D7();Q(a);return a;}
function AAM(a){var b=new D7();Er(b,a);return b;}
function Q(a){Er(a,16);}
function Er(a,b){a.F=$rt_createCharArray(b);}
function G(a,b){return a.fr(a.n,b);}
function EH(a,b,c){var d,e,f;if(b>=0&&b<=a.n){if(c===null)c=C(6);else if(C4(c))return a;a.cR(a.n+J(c)|0);d=a.n-1|0;while(d>=b){a.F.data[d+J(c)|0]=a.F.data[d];d=d+(-1)|0;}a.n=a.n+J(c)|0;d=0;while(d<J(c)){e=a.F.data;f=b+1|0;e[b]=H(c,d);d=d+1|0;b=f;}return a;}c=new Ed;M(c);F(c);}
function Hk(a,b,c){return OU(a,a.n,b,c);}
function OU(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)DD(a,b,b+1|0);else{DD(a,b,b+2|0);f=a.F.data;g=b+1|0;f[b]=45;b=g;}a.F.data[b]=Gw(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=CS(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;DD(a,b,b+i|0);if(e)e=b;else{f=a.F.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.F.data;b=e+1|0;f[e]=Gw(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function O(a,b){return a.fD(a.n,b);}
function E3(a,b,c){DD(a,b,b+1|0);a.F.data[b]=c;return a;}
function FC(a,b){var c;if(a.F.data.length>=b)return;c=a.F.data.length>=1073741823?2147483647:Bs(b,Bs(a.F.data.length*2|0,5));a.F=Lp(a.F,c);}
function N(a){return Ie(a.F,0,a.n);}
function E0(a,b,c,d){return a.eX(a.n,b,c,d);}
function Ep(a,b,c,d,e){var f,g,h,i;DD(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.F.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Dd(a,b){return a.fI(b,0,b.data.length);}
function DD(a,b,c){var d,e;d=a.n-b|0;a.cR((a.n+c|0)-b|0);e=d-1|0;while(e>=0){a.F.data[c+e|0]=a.F.data[b+e|0];e=e+(-1)|0;}a.n=a.n+(c-b|0)|0;}
function EX(){}
function P(){D7.call(this);}
function Qw(a,b){G(a,b);return a;}
function W(a,b){Hk(a,b,10);return a;}
function Qk(a,b){O(a,b);return a;}
function TX(a,b,c,d){E0(a,b,c,d);return a;}
function U8(a,b){Dd(a,b);return a;}
function It(a,b){var c,d,e;if(b<65536)KJ(a,b&65535);else{FC(a,a.n+2|0);c=a.F.data;d=a.n;a.n=d+1|0;c[d]=Ej(b);c=a.F.data;e=a.n;a.n=e+1|0;c[e]=D6(b);}return a;}
function Fn(a,b){J5(a,a.n,b);return a;}
function TG(a,b,c,d,e){Ep(a,b,c,d,e);return a;}
function J5(a,b,c){Ps(a,b,c===null?C(6):c);return a;}
function Rz(a,b,c){E3(a,b,c);return a;}
function OC(a,b,c){var d,e,f,g,h,i,j;d=BJ(b,c);if(d<=0&&b<=a.n){if(d){e=a.n-c|0;a.n=a.n-(c-b|0)|0;d=0;while(d<e){f=a.F.data;g=b+1|0;h=a.F.data;i=c+1|0;f[b]=h[c];d=d+1|0;b=g;c=i;}}return a;}j=new Ed;M(j);F(j);}
function I3(a,b){var c,d,e,f;if(b>=0&&b<a.n){a.n=a.n-1|0;while(b<a.n){c=a.F.data;d=a.F.data;e=b+1|0;c[b]=d[e];b=e;}return a;}f=new Ed;M(f);F(f);}
function Yt(a,b,c){EH(a,b,c);return a;}
function Eh(a,b){a.n=b;}
function Nw(a,b,c,d,e){var f,g,h,i,j;if(b>c){f=new Br;Cr(f,C(7));F(f);}while(b<c){g=d.data;h=e+1|0;i=a.F.data;j=b+1|0;g[e]=i[b];e=h;b=j;}}
function Yp(a,b,c,d,e){Ep(a,b,c,d,e);return a;}
function UA(a,b,c,d){E0(a,b,c,d);return a;}
function Ex(a){return a.n;}
function FJ(a){return N(a);}
function YE(a,b){FC(a,b);}
function Qz(a,b,c){return J5(a,b,c);}
function PS(a,b,c){E3(a,b,c);return a;}
function KJ(a,b){O(a,b);return a;}
function Ps(a,b,c){EH(a,b,c);return a;}
function B_(){B.call(this);}
function CY(){B_.call(this);this.bT=0;}
var ABg=null;var ABh=null;function N7(a){var b=new CY();FW(b,a);return b;}
function FW(a,b){a.bT=b;}
function Fz(b,c){var d,e,f,g,h,i,j;if(c>=2&&c<=36){if(b!==null&&!C4(b)){a:{d=0;e=0;switch(H(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==J(b)){b=new BE;M(b);F(b);}while(e<J(b)){g=e+1|0;h=Io(H(b,e));if(h<0){i=new BE;j=new P;Q(j);G(j,C(8));G(j,b);Cr(i,N(j));F(i);}if(h>=c){i=new BE;j=new P;Q(j);G(j,C(9));j=W(j,c);G(j,C(3));G(j,b);Cr(i,N(j));F(i);}f=CS(c,f)+h|0;if(f<0){if(g==J(b)&&f==(-2147483648)&&d)return (-2147483648);i=new BE;j=new P;Q(j);G(j,C(10));G(j,b);Cr(i,N(j));F(i);}e=g;}if(d)f
= -f;return f;}b=new BE;Cr(b,C(11));F(b);}i=new BE;b=new P;Q(b);G(b,C(12));Cr(i,N(W(b,c)));F(i);}
function RC(a){return a.bT;}
function Gh(a){var b;b=a.bT;return Hk(AAM(20),b,10).bA();}
function P9(a){return a.bT>>>4^a.bT<<28^a.bT<<8^a.bT>>>24;}
function X9(a,b){if(a===b)return 1;return b instanceof CY&&b.bT==a.bT?1:0;}
function C_(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;}
function Ev(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function NA(){ABg=D($rt_intcls());}
function D1(){Ei.call(this);}
function ABi(a){var b=new D1();Jk(b,a);return b;}
function Jk(a,b){Cr(a,b);}
function Ct(){D1.call(this);}
function ABj(a){var b=new Ct();S5(b,a);return b;}
function S5(a,b){Jk(a,b);}
function Od(){D1.call(this);}
function ABk(a){var b=new Od();Tr(b,a);return b;}
function Tr(a,b){Jk(a,b);}
function BZ(){Ef.call(this);}
function ABl(){var a=new BZ();M(a);return a;}
function M(a){a.dY=1;a.el=1;}
function Bc(){BZ.call(this);}
function AA8(a){var b=new Bc();U(b,a);return b;}
function U(a,b){Cr(a,b);}
function Fb(){}
function G5(){}
function Id(){B.call(this);}
function Pf(a,b,c,d){var e,f,$$je;e=UV(c,d);a:{try{b=Nl(Ms(N2(b),e));break a;}catch($$e){$$je=BM($$e);if($$je instanceof BZ){f=$$je;}else{throw $$e;}}if(e.fs)Oz(f);}return b;}
function WX(a,b,c,d){return $rt_ustr(Pf(a,$rt_str(b),c?1:0,d));}
function M8(){B.call(this);}
function Ec(){}
function Hw(){B.call(this);}
function CD(){B.call(this);this.fe=0;}
var ABm=null;var ABn=null;var ABo=null;var ABp=null;var ABq=null;var ABr=null;function Yi(a){var b=new CD();NP(b,a);return b;}
function NP(a,b){a.fe=b;}
function PY(a){return a.fe;}
function FA(b){var c;if(b>=ABp.data.length)return Yi(b);c=ABp.data[b];if(c===null){c=Yi(b);ABp.data[b]=c;}return c;}
function Jw(b){var c,d;c=new Ck;d=$rt_createCharArray(1);d.data[0]=b;Ha(c,d);return c;}
function Gd(b){return b>=65536&&b<=1114111?1:0;}
function BW(b){return (b&64512)!=55296?0:1;}
function Cg(b){return (b&64512)!=56320?0:1;}
function JJ(b){return !BW(b)&&!Cg(b)?0:1;}
function En(b,c){return BW(b)&&Cg(c)?1:0;}
function CK(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Ej(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function D6(b){return (56320|b&1023)&65535;}
function CZ(b){return Dy(b)&65535;}
function Dy(b){return Nh(b).toLowerCase().charCodeAt(0);}
function CP(b){return Ek(b)&65535;}
function Ek(b){return Nh(b).toUpperCase().charCodeAt(0);}
function Ic(b,c){if(c>=2&&c<=36){b=Io(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Io(b){var c,d,e,f,g,h,i,j,k;if(ABn===null){if(ABq===null)ABq=OF();c=(ABq.value!==null?$rt_str(ABq.value):null);d=new Iy;d.gO=JZ(c);e=La(d);f=$rt_createIntArray(e);g=f.data;h=0;while(h<e){g[h]=La(d);h=h+1|0;}ABn=f;}f=ABn.data;h=0;i=(f.length/2|0)-1|0;while(i>=h){j=(h+i|0)/2|0;e=j*2|0;k=BJ(b,f[e]);if(k>0)h=j+1|0;else{if(k>=0)return f[e+1|0];i=j-1|0;}}return (-1);}
function Gw(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gu(b){return BD(b)!=9?0:1;}
function Eb(b){var c,d;if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=Ej(b);d[1]=D6(b);return c;}
function BD(b){var c,d,e,f,g;c=b>0&&b<=65535?1:0;if(c&&JJ(b&65535))return 19;if(ABo===null){if(ABr===null)ABr=Pp();ABo=YZ((ABr.value!==null?$rt_str(ABr.value):null));}d=ABo.data;e=0;c=d.length-1|0;while(e<=c){f=(e+c|0)/2|0;g=d[f];if(b>=g.gk)e=f+1|0;else{if(b>=g.fA)return g.hq.data[b-g.fA|0];c=f-1|0;}}return 0;}
function D8(b){switch(BD(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function Fx(b){a:{switch(BD(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function D_(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return BD(b)!=16?0:1;}
function IN(b){switch(BD(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Gi(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return IN(b);}return 1;}
function Lj(){ABm=D($rt_charcls());ABp=E(CD,128);}
function OF(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function Pp(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91 Y#FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,AVF6 F)A6G01GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F# F#A#\' "
+"I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A)\')A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A$&G$I% G$ G%A(G# F$A&F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A(& F#G#A#J+ F#A.G#I# F) F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\'A#I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G\'A#J+A#F%AA&^$Y0=9^$G#^\'J+L+=\'=\'=\'6767"
+"I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F. F%G$A,F3G$Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1 J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(AcG%)FP\')G&)\'I&\'I#F(A%J+Y(^+G*^*A$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%FEI)G)I#G#A$Y&"
+"J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFG[ G&!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[AA1G.H%\'H$G-A0^#"
+"!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^AA#b=I! BP CP !#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y&%Y+U#Y%"
+"596Y.AQ^; b=:! A-b=7$ A;^-A%-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+F<A&^EA-F1^@ L+^?L)=L0^AL+^HL0b= & &b UG!&A+^b&b   %b O(!&A1F6%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#A#!#B$AQ&E##F(\'F$\'F%\'F8I#G#)^%A%L\'^#;=A\'FUY%A)I#F"
+"SI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C)A)b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]1A2b&L& 76A1FbA#FWAIF-;=A#G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0"
+"A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^-A%=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9b 1# b&X% A*F7A+F)b 9# F\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@b !# F>L+&A)F7G,L%Y&b \'# F8A*)\')FVG0Y(A%L5J+A0G$)FNI$G%I#G#Y#1Y%A,1A#F:A(J+A\'G$FEG&)G) J+Y%&I#A*FD\'Y#&A*G#)FQI$G*I#F%Y%G%9A#J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'AcF( & F% F0 F+"
+"9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+ 9 9\'&AAFQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&A(J+AWF<A#G$I#G%)G&A%J+L#Y$=b  $ FMI$G*)G#9b E! BACAJ+L*A-&b A# F)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A>FZb (% F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#b ($ L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b ^K b&P1  Q*b (a b&(* b Z\'#b&Z) A(F"
+"@ J+A%Y#b A! F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%A=&b W@!&A)b&T, b .5#b&@% ARF$A2F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =.!b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^]A8^dG$=b ;# L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 16 G( G2A#G( G# G&b 6$ FNA$G(E(A#J+A%&=b Q& FMG%J+A&;b  5 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN="
+"L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.A$b=>! A$^_AZ^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=7, A+^.A$^,A&b=U! A-b=:! A(^-A5^-A%^YA)^+A\'^IA)^?b 3! ^- b=F!  ^%A$^JA#^\'A$^>A#b=(# A-^/A#^%A%^$A&^$A.^\'b K6 &b   %b   %b 6<#&AJ&b T !&A,&b =$ &A#&b  ;!&A/&b PU!&b @Q b&?) b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
+"%b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b D8 1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
function Br(){Bc.call(this);}
function Ed(){Br.call(this);}
function D$(){B.call(this);}
var ABs=null;var ABt=null;var ABu=null;var ABv=null;function Ms(b,c){var d,e,f,g,h,i,j,k;d=VX(b.x);b=DX(b);e=0;while(e<d.Q.data.length){d.Q.data[e]=D3(b);e=e+1|0;}d.x=d.Q.data.length;if(!F2(d)&&Be(C(13),BL(d,d.x-1|0)))Bk(d,C(14));a:{b=Cz(LN(d),c);f=DH();if(b instanceof DZ){g=b;if(g.cc===ABw){h=g.bX.data;e=h.length;i=0;while(i<e){Bk(f,h[i]);i=i+1|0;}break a;}}Bk(f,b);}if(f.x==1){Bk(d,C(13));Bk(f,JO(d.x));Bk(d,C(14));}b=DX(f);b:{while(Eq(b)){j=D3(b);k=j.cV();if(!(isNaN(k)?1:0)){g=E$();b=DX(f);while(Eq(b)){f=D3(b);if
(f!==j)f.dW(k,g,c);}break b;}}g=Hs();}b=g.hX().di();while(b.dF()){j=b.c9();K5(d,j.dl.bT,Kz(c,j.cI.dT));}return d;}
function Nl(b){var c,d,e;c=new P;Q(c);d=0;b=DX(b);while(Eq(b)){e=D3(b);if(d&&EI(EO(ABu,e)))O(c,32);if(!EI(EO(ABv,e)))G(c,e);else{G(c,C(15));G(c,e);O(c,125);}d=EI(EO(ABt,e));}return N(c);}
function MV(){ABs=UV(0,3);ABt=FR(C(16));ABu=FR(C(17));ABv=FR(C(18));}
function Pv(){var a=this;B.call(a);a.cH=0;a.jK=0;a.hk=null;a.gf=null;a.fs=0;}
function UV(a,b){var c=new Pv();Y8(c,a,b);return c;}
function Y8(a,b,c){var d,e,f,g;a.cH=b;a.jK=c;a.fs=0;d=c?C(19):C(20);b=0;while(b<c){e=new P;Q(e);G(e,d);G(e,C(21));d=N(e);b=b+1|0;}e=new C3;f=new P;Q(f);G(f,C(1));G(f,d);G(f,C(22));G(f,d);G(f,C(23));FV(e,N(f));a.hk=e;e=new C3;g=new P;Q(g);G(g,C(1));G(g,d);G(g,C(24));G(g,d);G(g,C(25));FV(e,N(g));a.gf=e;}
function Va(a){return a.cH;}
function Vl(a){return a.fs;}
function Kz(a,b){var c,d;c=(isNaN(b)?1:0)?C(14):(!isFinite(b)?1:0)?(b>=0.0?C(26):C(27)):Dp(b)<=1.0E10?Hc(a.hk,b):MR(Hc(a.gf,b),C(28),C(29));d=new P;Q(d);G(d,C(30));G(d,c);G(d,C(31));return N(d);}
function JC(){var a=this;B.call(a);a.b=null;a.bl=0;a.e9=null;a.gC=0;a.bK=0;a.b8=0;a.L=0;a.et=null;}
function EO(a,b){var c,d,e,f,g,h,i,j;c=new GH;c.d9=(-1);c.fx=(-1);c.jb=a;c.hg=a.et;c.fW=b;c.d9=0;c.fx=J(c.fW);d=new Ix;e=c.d9;f=c.fx;g=a.bK;h=Oa(a);i=LF(a);d.cq=(-1);j=g+1|0;d.g4=j;d.by=$rt_createIntArray(j*2|0);d.dw=$rt_createIntArray(i);FE(d.dw,(-1));if(h>0)d.f2=$rt_createIntArray(h);FE(d.by,(-1));JX(d,b,e,f);c.cY=d;return c;}
function FT(a){return a.b.bb;}
function J7(a,b,c,d){var e,f,g,h,i;e=DH();f=a.bl;g=0;if(c!=a.bl)a.bl=c;a:{switch(b){case -1073741784:h=new J3;c=a.L+1|0;a.L=c;Dm(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new IW;c=a.L+1|0;a.L=c;Dm(h,c);break a;case -33554392:h=new GX;c=a.L+1|0;a.L=c;Dm(h,c);break a;default:a.bK=a.bK+1|0;if(d!==null)h=Z4(a.bK);else{h=new C$;Dm(h,0);g=1;}if(a.bK<=(-1))break a;if(a.bK>=10)break a;a.e9.data[a.bK]=h;break a;}h=new J0;Dm(h,(-1));}while(true){if(C2(a.b)&&a.b.e==(-536870788))
{d=WI(Bx(a,2),Bx(a,64));while(!Cb(a.b)&&C2(a.b)&&!(a.b.e&&a.b.e!=(-536870788)&&a.b.e!=(-536870871))){BH(d,R(a.b));if(a.b.B!=(-536870788))continue;R(a.b);}i=GA(a,d);i.w(h);}else if(a.b.B==(-536870788)){i=DM(h);R(a.b);}else{i=Iq(a,h);if(a.b.B==(-536870788))R(a.b);}if(i!==null)Bk(e,i);if(Cb(a.b))break;if(a.b.B==(-536870871))break;}if(a.b.d_==(-536870788))Bk(e,DM(h));if(a.bl!=f&&!g){a.bl=f;LU(a.b,a.bl);}switch(b){case -1073741784:break;case -536870872:d=new GR;Da(d,e,h);return d;case -268435416:d=new I1;Da(d,e,
h);return d;case -134217688:d=new JF;Da(d,e,h);return d;case -67108824:d=new Hm;Da(d,e,h);return d;case -33554392:d=new Cq;Da(d,e,h);return d;default:switch(e.x){case 0:break;case 1:return ZG(BL(e,0),h);default:return AA1(e,h);}return DM(h);}d=new E8;Da(d,e,h);return d;}
function Nd(a){var b,c,d,e,f,g;b=$rt_createIntArray(4);c=(-1);d=(-1);if(!Cb(a.b)&&C2(a.b)){e=b.data;c=R(a.b);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=$rt_createCharArray(3);b=e.data;b[0]=c&65535;f=a.b.B;c=f-4449|0;if(c>=0&&c<21){b[1]=f&65535;R(a.b);f=a.b.B;d=f-4519|0;if(d>=0&&d<28){b[2]=f&65535;R(a.b);return Wl(e,3);}return Wl(e,2);}if(!Bx(a,2))return Nb(b[0]);if(Bx(a,64))return Tv(b[0]);return S9(b[0]);}e=b.data;c=1;while(c<4&&!Cb(a.b)&&C2(a.b)){f=c+1|0;e[c]=R(a.b);c=f;}if(c==1){f=e[0];if(!(ABx.jv(f)==ABy?0:1))return JW(a,
e[0]);}if(!Bx(a,2))return AA4(b,c);if(Bx(a,64)){g=new JP;HC(g,b,c);return g;}g=new Hx;HC(g,b,c);return g;}
function Iq(a,b){var c,d,e,f;if(C2(a.b)&&!FI(a.b)&&Gc(a.b.e)){if(Bx(a,128)){c=Nd(a);if(!Cb(a.b)&&!(a.b.B==(-536870871)&&!(b instanceof C$))&&a.b.B!=(-536870788)&&!C2(a.b))c=Gp(a,b,c);}else if(!HH(a.b)&&!IA(a.b)){d=new FF;Q(d);while(!Cb(a.b)&&C2(a.b)&&!HH(a.b)&&!IA(a.b)&&!(!(!FI(a.b)&&!a.b.e)&&!(!FI(a.b)&&Gc(a.b.e))&&a.b.e!=(-536870871)&&(a.b.e&(-2147418113))!=(-2147483608)&&a.b.e!=(-536870788)&&a.b.e!=(-536870876))){e=R(a.b);if(!Gd(e))O(d,e&65535);else Dd(d,Eb(e));}if(!Bx(a,2))c=AAQ(d);else if(Bx(a,64))c=AA2(d);else
{c=new Hd;Cl(c);c.dB=N(d);c.T=Gx(d);}}else c=Gp(a,b,JN(a,b));}else if(a.b.B!=(-536870871))c=Gp(a,b,JN(a,b));else{if(b instanceof C$)F(Bp(C(20),a.b.bb,a.b.bV));c=DM(b);}if(!Cb(a.b)&&!(a.b.B==(-536870871)&&!(b instanceof C$))&&a.b.B!=(-536870788)){f=Iq(a,b);if(c instanceof B2&&!(c instanceof C8)&&!(c instanceof BR)&&!(c instanceof CQ)){b=c;if(!f.R(b.p)){c=new Jb;CT(c,b.p,b.c,b.dk);c.p.w(c);}}if((f.dr()&65535)!=43)c.w(f);else c.w(f.p);}else{if(c===null)return null;c.w(b);}if((c.dr()&65535)!=43)return c;return c.p;}
function Gp(a,b,c){var d,e,f,g;d=a.b.B;if(c!==null&&!(c instanceof Bo)){switch(d){case -2147483606:R(a.b);e=new Kp;B9(e,c,b,d);c.w(ABz);return e;case -2147483605:R(a.b);e=new IS;B9(e,c,b,(-2147483606));c.w(ABz);return e;case -2147483585:R(a.b);e=new Iz;B9(e,c,b,(-536870849));c.w(ABz);return e;case -2147483525:e=new G9;f=Df(a.b);d=a.b8+1|0;a.b8=d;Fi(e,f,c,b,(-536870849),d);c.w(ABz);return e;case -1073741782:case -1073741781:R(a.b);f=new JT;B9(f,c,b,d);c.w(f);return f;case -1073741761:R(a.b);f=new Jh;B9(f,c,b,
(-536870849));c.w(b);return f;case -1073741701:f=new Ik;e=Df(a.b);g=a.b8+1|0;a.b8=g;Fi(f,e,c,b,(-536870849),g);c.w(f);return f;case -536870870:case -536870869:R(a.b);if(c.dr()!=(-2147483602)){f=new BR;B9(f,c,b,d);}else if(Bx(a,32)){f=new JU;B9(f,c,b,d);}else{f=new HP;e=ID(a.bl);B9(f,c,b,d);f.hf=e;}c.w(f);return f;case -536870849:R(a.b);f=new Ds;B9(f,c,b,(-536870849));c.w(b);return f;case -536870789:f=new Dg;e=Df(a.b);g=a.b8+1|0;a.b8=g;Fi(f,e,c,b,(-536870849),g);c.w(f);return f;default:}return c;}e=null;if(c
!==null)e=c;switch(d){case -2147483606:case -2147483605:R(a.b);f=new Kq;CT(f,e,b,d);e.c=f;return f;case -2147483585:R(a.b);c=new I8;CT(c,e,b,(-2147483585));return c;case -2147483525:c=new Ip;Ki(c,Df(a.b),e,b,(-2147483525));return c;case -1073741782:case -1073741781:R(a.b);f=new Je;CT(f,e,b,d);e.c=f;return f;case -1073741761:R(a.b);c=new HD;CT(c,e,b,(-1073741761));return c;case -1073741701:c=new JG;Ki(c,Df(a.b),e,b,(-1073741701));return c;case -536870870:case -536870869:R(a.b);f=ZP(e,b,d);e.c=f;return f;case -536870849:R(a.b);c
=new CQ;CT(c,e,b,(-536870849));return c;case -536870789:return AAa(Df(a.b),e,b,(-536870789));default:}return c;}
function JN(a,b){var c,d,e,f,g,h,i;c=null;d=b instanceof C$;while(true){a:{e=E9(a.b);if((e&(-2147418113))==(-2147483608)){R(a.b);f=(e&16711680)>>16;e=e&(-16711681);if(e==(-16777176))a.bl=f;else{if(e!=(-1073741784))f=a.bl;c=J7(a,e,f,b);if(E9(a.b)!=(-536870871))F(Bp(C(20),Cn(a.b),DK(a.b)));R(a.b);}}else{b:{c:{switch(e){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:g=(e&2147483647)-48|0;if(a.bK<g)F(Bp(C(20),
Cn(a.b),DK(a.b)));R(a.b);a.L=a.L+1|0;c=!Bx(a,2)?Zw(g,a.L):Bx(a,64)?AAI(g,a.L):AAX(g,a.L);a.e9.data[g].e3=1;a.gC=1;break a;case -2147483583:break;case -2147483582:R(a.b);c=VY(0);break a;case -2147483577:R(a.b);c=AAb();break a;case -2147483558:R(a.b);c=new JA;g=a.L+1|0;a.L=g;NL(c,g);break a;case -2147483550:R(a.b);c=VY(1);break a;case -2147483526:R(a.b);c=AAo();break a;case -536870876:break c;case -536870866:R(a.b);if(Bx(a,32)){c=AAL();break a;}c=Z2(ID(a.bl));break a;case -536870821:R(a.b);h=0;if(E9(a.b)==(-536870818))
{h=1;R(a.b);}c=Lm(a,h,b);if(E9(a.b)!=(-536870819))F(Bp(C(20),Cn(a.b),DK(a.b)));Ia(a.b,1);R(a.b);break a;case -536870818:R(a.b);a.L=a.L+1|0;if(!Bx(a,8)){c=Wf();break a;}c=AAp(ID(a.bl));break a;case 0:i=IK(a.b);if(i!==null)c=GA(a,i);else{if(Cb(a.b)){c=DM(b);break a;}c=Nb(e&65535);}R(a.b);break a;default:break b;}R(a.b);c=Wf();break a;}R(a.b);a.L=a.L+1|0;if(Bx(a,8)){if(Bx(a,1)){c=AAJ(a.L);break a;}c=Zn(a.L);break a;}if(Bx(a,1)){c=Zd(a.L);break a;}c=Z9(a.L);break a;}if(e>=0&&!DN(a.b)){c=JW(a,e);R(a.b);}else if(e
==(-536870788))c=DM(b);else{if(e!=(-536870871))F(Bp(!DN(a.b)?Jw(e&65535):IK(a.b).bA(),Cn(a.b),DK(a.b)));if(d)F(Bp(C(20),Cn(a.b),DK(a.b)));c=DM(b);}}}if(e!=(-16777176))break;}return c;}
function Lm(a,b,c){var d;d=GA(a,DI(a,b));d.w(c);return d;}
function DI(a,b){var c,d,e,f,g,h,i,j,$$je;c=WI(Bx(a,2),Bx(a,64));CJ(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Cb(a.b))break a;f=a.b.B==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.b.B){case -536870874:if(d>=0)BH(c,d);d=R(a.b);if(a.b.B!=(-536870874)){d=38;break d;}if(a.b.e==(-536870821)){R(a.b);e=1;d=(-1);break d;}R(a.b);if(g){c=DI(a,0);break d;}if(a.b.B==(-536870819))break d;Jn(c,DI(a,0));break d;case -536870867:if(!g&&a.b.e!=(-536870819)&&a.b.e!=(-536870821)&&d>=0){R(a.b);h=a.b.B;if(DN(a.b))break c;if
(h<0&&a.b.e!=(-536870819)&&a.b.e!=(-536870821)&&d>=0)break c;e:{try{if(Gc(h))break e;h=h&65535;break e;}catch($$e){$$je=BM($$e);if($$je instanceof BZ){break b;}else{throw $$e;}}}try{Bj(c,d,h);}catch($$e){$$je=BM($$e);if($$je instanceof BZ){break b;}else{throw $$e;}}R(a.b);d=(-1);break d;}if(d>=0)BH(c,d);d=45;R(a.b);break d;case -536870821:if(d>=0){BH(c,d);d=(-1);}R(a.b);i=0;if(a.b.B==(-536870818)){R(a.b);i=1;}if(!e)KH(c,DI(a,i));else Jn(c,DI(a,i));e=0;R(a.b);break d;case -536870819:if(d>=0)BH(c,d);d=93;R(a.b);break d;case -536870818:if
(d>=0)BH(c,d);d=94;R(a.b);break d;case 0:if(d>=0)BH(c,d);j=a.b.cr;if(j===null)d=0;else{Pt(c,j);d=(-1);}R(a.b);break d;default:}if(d>=0)BH(c,d);d=R(a.b);}g=0;}F(Bp(C(20),FT(a),a.b.bV));}F(Bp(C(20),FT(a),a.b.bV));}if(!f){if(d>=0)BH(c,d);return c;}F(Bp(C(20),FT(a),a.b.bV-1|0));}
function JW(a,b){var c,d,e;c=Gd(b);if(Bx(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return S9(b&65535);}if(Bx(a,64)&&b>128){if(c){d=new GM;Cl(d);d.T=2;d.hW=Dy(Ek(b));return d;}if(Ij(b))return Rv(b&65535);if(!GJ(b))return Tv(b&65535);return Xy(b&65535);}}if(!c){if(Ij(b))return Rv(b&65535);if(!GJ(b))return Nb(b&65535);return Xy(b&65535);}d=new Cv;Cl(d);d.T=2;d.ck=b;e=Eb(b).data;d.f1=e[0];d.fo=e[1];return d;}
function GA(a,b){var c,d,e;if(!KR(b)){if(!b.v){if(b.dh())return WS(b);return V0(b);}if(!b.dh())return Yg(b);c=new Fk;HM(c,b);return c;}c=Lt(b);d=new GW;Bh(d);d.ho=c;d.iv=c.y;if(!b.v){if(b.dh())return LK(WS(Ey(b)),d);return LK(V0(Ey(b)),d);}if(!b.dh())return LK(Yg(Ey(b)),d);c=new I7;e=new Fk;HM(e,Ey(b));O6(c,e,d);return c;}
function FR(b){var c,d;if(b===null){b=new CB;Cr(b,C(32));F(b);}ABA=1;c=new JC;c.e9=E(BQ,10);c.bK=(-1);c.b8=(-1);c.L=(-1);d=new DE;d.bG=1;d.bb=b;d.o=$rt_createCharArray(J(b)+2|0);CN(JZ(b),0,d.o,0,J(b));d.o.data[d.o.data.length-1|0]=0;d.o.data[d.o.data.length-2|0]=0;d.go=d.o.data.length;d.cM=0;C6(d);C6(d);c.b=d;c.bl=0;c.et=J7(c,(-1),c.bl,null);if(Cb(c.b)){if(c.gC)c.et.b1();return c;}F(Bp(C(20),c.b.bb,c.b.bV));}
function QI(a){return a.bK;}
function Oa(a){return a.b8+1|0;}
function LF(a){return a.L+1|0;}
function EA(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Bx(a,b){return (a.bl&b)!=b?0:1;}
function GU(){B.call(this);}
var ABB=null;function N2(b){var c,d,e,f,g,h,i,j,k,l,m;c=DH();d=(-1);e=0;while(!(d<0&&e>=J(b))){if(d>=0)f=e;else{f=e+1|0;d=H(b,e);}if(Gi(d)){e=f;d=(-1);}else if(d!=92){Bk(c,CR(b,f-1|0,f));e=f;d=(-1);}else{e=f+1|0;f=H(b,f);if(D8(f)){g=new P;Q(g);It(g,d);while(D8(f)){It(g,f);if(e>=J(b))f=(-1);else{h=e+1|0;f=H(b,e);e=h;}}Bk(c,N(g));d=f;}else{g=new Ck;i=$rt_createIntArray(2).data;i[0]=d;i[1]=f;d=0;g.D=$rt_createCharArray(4);j=0;k=0;while(k<2){h=d+1|0;d=i[d];if(d<65536){l=g.D.data;f=j+1|0;l[j]=d&65535;}else{l=g.D.data;m
=j+1|0;l[j]=Ej(d);l=g.D.data;f=m+1|0;l[m]=D6(d);}k=k+1|0;d=h;j=f;}if(j<g.D.data.length)g.D=Lp(g.D,j);Bk(c,g);d=(-1);}}}return Kt(c);}
function Kt(b){var c,d,e,f,g,h,i,j,k;c=VX(b.x);d=0;while(d<b.x){e=BL(b,d);if(J(e)!=1)Bk(c,e);else{f=H(e,0);if(!Gu(f)&&46!=f){if(!D8(f))Bk(c,e);else{g=null;h=d;i=e;a:{while(true){j=O7(ABC,i);if(Be(i,j))g=i;else{if(j===null)break a;if(!Gs(j,i))break a;}h=h+1|0;if(h>=b.x)break a;k=BL(b,h);if(J(k)!=1)break a;if(!D8(H(k,0)))break;j=new P;Q(j);G(j,i);G(j,k);i=N(j);}}if(g===null)Bk(c,e);else{Bk(c,g);d=d+(J(g)-1|0)|0;}}}else{h=d+1|0;b:{while(true){if(h>=b.x)break b;i=BL(b,h);if(J(i)!=1)break b;if(!Gu(H(i,0))&&46!=H(i,
0))break;g=new P;Q(g);G(g,e);G(g,i);e=N(g);h=h+1|0;}}Bk(c,e);d=d+(J(e)-1|0)|0;}}d=d+1|0;}return c;}
function LN(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=CA();DU(c,CA());d=b.x-1|0;while(d>=0){a:{e=BL(b,d);f=(-1);switch(Hr(e)){case 91:if(!Be(e,C(33)))break a;f=2;break a;case 94:if(!Be(e,C(34)))break a;f=6;break a;case 95:if(!Be(e,C(35)))break a;f=5;break a;case 123:if(!Be(e,C(36)))break a;f=1;break a;case 125:if(!Be(e,C(31)))break a;f=0;break a;case 88115274:if(!Be(e,C(37)))break a;f=3;break a;case 88502140:if(!Be(e,C(38)))break a;f=4;break a;default:}}b:{switch(f){case 0:break;case 1:g=Cy(c);Z(Bv(c),B5(g));break b;case 2:if
(d>0&&Be(C(38),BL(b,d-1|0))){h=CA();i=Bv(c);j=HB(i);c:{while(true){if(!J1(j))break c;k=Ew(j);E7(j);if(Be(C(39),k.bF))break;DU(h,k);}}Z(i,B5(h));break b;}Z(Bv(c),Hz(d,C(33)));break b;case 3:l=Cj(Bv(c));m=Cj(Bv(c));n=E(BG,2);o=n.data;o[0]=l;o[1]=m;p=BP(d,C(40),n);Z(Bv(c),p);break b;case 4:if(!Be(BL(b,d+1|0),C(33))){q=Cj(Bv(c));n=E(BG,1);n.data[0]=q;p=BP(d,C(41),n);}else{r=Cj(Bv(c));q=Cj(Bv(c));n=E(BG,2);o=n.data;o[0]=q;o[1]=r;p=BP(d,C(42),n);}Z(Bv(c),p);break b;case 5:s=Cj(Bv(c));h=Bv(c);n=E(BG,2);o=n.data;o[0]
=ABB;o[1]=s;Z(h,BP(d,C(43),n));break b;case 6:t=Cj(Bv(c));g=Bv(c);n=E(BG,2);o=n.data;o[0]=ABB;o[1]=t;Z(g,BP(d,C(44),n));break b;default:Z(Bv(c),Hz(d,e));break b;}Z(c,CA());}d=d+(-1)|0;}while(c.bf>1){g=Cy(c);Z(Bv(c),B5(g));}return B5(Cy(c));}
function B5(b){var c,d,e,f,g,h,i,j;c=null;d=null;e=EB(b,b.bf);while(Ir(e)){f=GV(e);if(Be(C(43),f.bF)&&f.bv.data[0]===ABB){if(c!==null)Ih(c,0,f.bv.data[1]);else{c=CA();DU(c,f.bv.data[1]);}E7(e);}else if(Be(C(44),f.bF)&&f.bv.data[0]===ABB){if(d!==null)Ih(d,0,f.bv.data[1]);else{d=CA();DU(d,f.bv.data[1]);}E7(e);}else if(c!==null){if(d===null){g=E(BG,2);h=g.data;h[0]=HN(f);h[1]=B5(c);F7(e,BP((-1),C(43),g));}else{g=E(BG,3);h=g.data;h[0]=HN(f);h[1]=B5(c);h[2]=B5(d);F7(e,BP((-1),C(45),g));d=null;}c=null;}else if(d!==
null){Ew(e);g=E(BG,2);h=g.data;h[0]=ABB;h[1]=B5(d);Ge(e,BP((-1),C(44),g));GV(e);d=null;}else if(Be(C(46),f.bF)){E7(e);g=f.bv.data;i=g.length;j=0;while(j<i){Ge(e,g[j]);j=j+1|0;}}}if(c===null){if(d!==null){g=E(BG,2);h=g.data;h[0]=ABB;h[1]=B5(d);Z(b,BP((-1),C(44),g));}}else if(d===null){g=E(BG,2);h=g.data;h[0]=ABB;h[1]=B5(c);Z(b,BP((-1),C(43),g));}else{g=E(BG,3);h=g.data;h[0]=ABB;h[1]=B5(c);h[2]=B5(d);Z(b,BP((-1),C(45),g));}return BP((-1),C(46),DW(b,E(BG,0)));}
function HN(b){var c;if(Be(C(46),b.bF))return b;c=E(BG,1);c.data[0]=b;return BP((-1),C(46),c);}
function Lb(){ABB=BP((-1),C(46),E(BG,0));}
function B1(){}
function Fm(){B.call(this);}
function Fr(){var a=this;Fm.call(a);a.fi=0;a.bW=0;a.S=0;a.Z=0;a.bj=0;a.d5=null;a.dG=null;}
function Xi(a){return a.dG;}
function Hc(a,b){var c,d;c=new FF;Q(c);d=new GQ;d.ix=0;return N(Lh(a,b,c,d));}
function WQ(a){return a.Z;}
function Xs(a){return a.bW;}
function Wp(a){return a.bj;}
function X1(a){return a.S;}
function Ye(a,b){a.fi=b;}
function KS(a,b){if(b<0)b=0;a.Z=b;if(a.Z<a.bj)a.bj=a.Z;}
function N9(a,b){if(b<0)b=0;a.bW=b;if(a.bW<a.S)a.S=a.bW;}
function KK(a,b){if(b<0)b=0;a.bj=b;if(a.Z<a.bj)a.Z=a.bj;}
function Oj(a,b){if(b<0)b=0;a.S=b;if(a.bW<a.S)a.bW=a.S;}
function XF(a){return a.d5;}
function C3(){var a=this;Fr.call(a);a.G=null;a.ce=null;a.bR=null;a.cL=null;a.d2=null;a.U=0;a.bi=0;a.dq=0;a.dS=0;a.iK=null;}
var ABD=null;var ABE=null;var ABF=null;var ABG=null;function ABH(a){var b=new C3();FV(b,a);return b;}
function FV(a,b){var c,d,e,f,g,h,i,j,k,l;c=new Hy;c.c6=ABI;d=c.c6.cD;e=c.c6.cK;if(ABJ===null)ABJ=TV();f=ABJ;g=Mf(d,e);f=f.hasOwnProperty($rt_ustr(g))?f[$rt_ustr(g)]:f.hasOwnProperty($rt_ustr(d))?f[$rt_ustr(d)]:f.root;c.ez=48;c.b9=f.groupingSeparator&65535;c.bO=f.decimalSeparator&65535;c.eS=f.perMille&65535;c.eJ=f.percent&65535;c.iX=35;c.jP=59;c.eL=(f.naN!==null?$rt_str(f.naN):null);c.e8=(f.infinity!==null?$rt_str(f.infinity):null);c.de=f.minusSign&65535;c.kd=f.decimalSeparator&65535;c.dR=(f.exponentSeparator
!==null?$rt_str(f.exponentSeparator):null);a.fi=1;a.bW=40;a.S=1;a.Z=3;a.d5=ABK;f=ABI;if(f===null){b=new CB;M(b);F(b);}g=f.cD;e=f.cK;if(C4(e)){if(ABL===null)ABL=Uh();f=ABL;if(f.hasOwnProperty($rt_ustr(g)))g=(f[$rt_ustr(g)].value!==null?$rt_str(f[$rt_ustr(g)].value):null);h=OS(g,95);e=h<=0?C(20):E2(g,h+1|0);}if(ABM===null)ABM=Yz();g=ABM;if(!g.hasOwnProperty($rt_ustr(e)))g=null;else{f=(g[$rt_ustr(e)].value!==null?$rt_str(g[$rt_ustr(e)].value):null);if(f===null){b=new CB;M(b);F(b);}if(ABN===null){ABN=E$();if(ABO
===null)ABO=Xg();i=ABO;j=0;while(j<i.length){e=i[j];d=ABN;k=(e.code!==null?$rt_str(e.code):null);g=new Fv;g.gP=e;EN(d,k,g);j=j+1|0;}}g=EU(ABN,f);if(g===null){c=new X;b=new P;Q(b);G(b,C(47));G(b,f);U(c,N(b));F(c);}}a.dG=g;a.ce=E(BS,0);l=E(BS,1);l.data[0]=E5(C(48));a.bR=l;a.cL=E(BS,0);a.d2=E(BS,0);a.U=1;a.G=M2(c);Pw(a,b);}
function Pw(a,b){var c;c=new G0;ML(c,b);LR(c,a);a.iK=b;}
function CH(a,b,c){var d,e;b=b.data;d=b.length;e=0;while(e<d){b[e].c1(a,c);e=e+1|0;}return c;}
function UM(a,b){a.U=b;}
function Vs(a,b){a.bi=b;}
function PG(a){return a.dq;}
function Xq(a,b){a.dq=b;}
function Lh(a,b,c,d){var e,f,g;if(isNaN(b)?1:0){G(CH(a,a.ce,c),a.G.eL);De(a,1,c);}else if(!(!isFinite(b)?1:0)){e=Ng(a,b);if(a.dS<=0)Py(a,e.eu,e.f7,c);else KT(a,e.eu,e.f7,c);}else{f=BJ(b,0.0);g=f<=0?a.bR:a.ce;G(CH(a,g,c),a.G.e8);De(a,f<=0?0:1,c);}return c;}
function KT(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;e=Long_lt(b,Long_ZERO)?0:1;f=EM(a,b);g=f+1|0;if(a.U!=1){h=ED(a,a.U);if(ABE.data[h]==a.U)c=c+h|0;else if(Long_lt(b,Long_div(new Long(4294967295, 2147483647),Long_fromInt(a.U)))&&Long_gt(b,Long_div(new Long(0, 2147483648),Long_fromInt(a.U)))){b=Long_mul(b,Long_fromInt(a.U));e=Long_lt(b,Long_ZERO)?0:1;f=EM(a,b);g=f+1|0;}else{NC(a,M5(BB(b),f-c|0),d);return;}}i=a.S+a.Z|0;j=(a.bW-a.S|0)+1|0;if(j>1){k=c-CS(c/j|0,j)|0;c=c-k|0;k=f-k|0;}else{c=c-(a.S-1|0)|0;k=f-(a.S
-1|0)|0;}if(i<0)b=Long_ZERO;else if(i<g)b=Hf(a,b,g,i);CH(a,!e?a.bR:a.ce,d);l=Bs(k,0);m=g-1|0;while(m>=l){n=ABD.data[m];O(d,Cm(a,CO(Long_div(b,n).lo)));b=Long_rem(b,n);m=m+(-1)|0;}m=l-1|0;while(m>=k){O(d,48);m=m+(-1)|0;}a:{l=i-(g-k|0)|0;o=l-(a.Z-a.bj|0)|0;if(o<=0){if(Long_eq(b,Long_ZERO))break a;if(l<=0)break a;}O(d,a.G.bO);p=Bs(0,k-l|0);q=0;m=k-1|0;b:{while(m>=p){n=ABD.data[m];O(d,Cm(a,CO(Long_div(b,n).lo)));b=Long_rem(b,n);q=q+1|0;if(Long_eq(b,Long_ZERO))break b;m=m+(-1)|0;}}while(true){k=q+1|0;if(q>=o)break a;O(d,
48);q=k;}}G(d,a.G.dR);if(c<0){c= -c;O(d,a.G.de);}m=Bs(a.dS,ED(a,c)+1|0)-1|0;while(m>=0){r=ABE.data[m];O(d,Cm(a,c/r|0));c=c%r|0;m=m+(-1)|0;}De(a,e,d);}
function Py(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;e=Long_lt(b,Long_ZERO)?0:1;f=EM(a,b)+1|0;g=c+1|0;if(a.U!=1){h=ED(a,a.U);if(ABE.data[h]==a.U)g=g+h|0;else if(Long_lt(b,Long_div(new Long(4294967295, 2147483647),Long_fromInt(a.U)))&&Long_gt(b,Long_div(new Long(0, 2147483648),Long_fromInt(a.U)))){b=Long_mul(b,Long_fromInt(a.U));f=EM(a,b)+1|0;}else{KL(a,M5(BB(b),f-g|0),d);return;}}i=g+a.Z|0;if(i<0)b=Long_ZERO;else if(i<f)b=Hf(a,b,f,i);CH(a,!e?a.bR:a.ce,d);j=Bs(0,g);k=Bs(j,a.S)-1|0;l=a.S-1|0;while(l>=j){O(d,48);if
(a.bi>0&&!(k%a.bi|0)&&k>0)O(d,a.G.b9);k=k+(-1)|0;l=l+(-1)|0;}m=Bm(f,j);n=f-1|0;l=0;while(l<m){o=ABD.data;c=n+(-1)|0;p=o[n];O(d,Cm(a,CO(Long_div(b,p).lo)));b=Long_rem(b,p);if(a.bi>0&&!(k%a.bi|0)&&k>0)O(d,a.G.b9);k=k+(-1)|0;l=l+1|0;n=c;}j=j-m|0;l=0;while(l<j){O(d,48);if(a.bi>0&&!(k%a.bi|0)&&k>0)O(d,a.G.b9);k=k+(-1)|0;l=l+1|0;}a:{if(Long_eq(b,Long_ZERO)){if(a.bj){O(d,a.G.bO);l=0;while(l<a.bj){O(d,48);l=l+1|0;}}else if(a.dq)O(d,a.G.bO);}else{O(d,a.G.bO);q=Bm(a.Z,Bs(0, -g));l=0;r=0;while(r<q){l=l+1|0;O(d,48);r=r
+1|0;}g=Bm(a.Z-l|0,n);r=0;b:{while(true){if(r>=g)break b;if(Long_eq(b,Long_ZERO))break;l=l+1|0;p=ABD.data[n];O(d,Cm(a,CO(Long_div(b,p).lo)));b=Long_rem(b,p);n=n+(-1)|0;r=r+1|0;}}while(true){if(l>=a.bj)break a;O(d,48);l=l+1|0;}}}De(a,e,d);}
function NC(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;if(a.U!=1)b=JM(b,F5(Long_fromInt(a.U)));Db();d=KA(b,ABP)<0?0:1;e=Fe(b);f=e-1|0;g=f-b.bw|0;h=Ci(b);i=a.S+a.Z|0;j=(a.bW-a.S|0)+1|0;if(j>1){k=g-CS(g/j|0,j)|0;g=g-k|0;j=f-k|0;}else{g=g-(a.S-1|0)|0;j=f-(a.S-1|0)|0;}if(i<0)h=ABQ;else if(i<e)h=Hj(a,h,e,i);CH(a,!d?a.bR:a.ce,c);l=Bs(j,0);m=Gk(a,ABR,f);while(f>=l){n=EQ(h,m).data;O(c,Cm(a,CO(Em(n[0]))));h=n[1];m=Bu(m,ABS);f=f+(-1)|0;}o=l-1|0;while(o>=j){O(c,48);o=o+(-1)|0;}a:{p=i-(e-j|0)|0;q=p-(a.Z-a.bj|0)|0;if(q<=
0){if(Ca(h,ABQ))break a;if(p<=0)break a;}O(c,a.G.bO);p=Bs(0,j-p|0);r=0;o=j-1|0;b:{while(o>=p){n=EQ(h,m).data;O(c,Cm(a,CO(Em(n[0]))));h=n[1];r=r+1|0;if(Ca(h,ABQ))break b;m=Bu(m,ABS);o=o+(-1)|0;}}while(true){l=r+1|0;if(r>=q)break a;O(c,48);r=l;}}G(c,a.G.dR);if(g<0){g= -g;O(c,a.G.de);}o=Bs(a.dS,ED(a,g)+1|0)-1|0;while(o>=0){s=ABE.data[o];O(c,Cm(a,g/s|0));g=g%s|0;o=o+(-1)|0;}De(a,d,c);}
function De(a,b,c){if(!b)CH(a,a.d2!==null?a.d2:a.cL!==null?a.cL:E(BS,0),c);else if(a.cL!==null)CH(a,a.cL,c);}
function KL(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.U!=1)b=JM(b,F5(Long_fromInt(a.U)));d=Ci(b);e=DC(d,ABQ)<0?0:1;f=Fe(b);g=Fe(b)-b.bw|0;h=g+a.Z|0;if(h<0)d=ABQ;else if(h<f)d=Hj(a,d,f,h);CH(a,!e?a.bR:a.ce,c);i=Bs(0,g);j=Bs(i,a.S)-1|0;k=a.S-1|0;while(k>=i){O(c,48);if(a.bi>0&&!(j%a.bi|0)&&j>0)O(c,a.G.b9);j=j+(-1)|0;k=k+(-1)|0;}l=Bm(f,i);m=Gk(a,ABR,f-1|0);k=0;while(k<l){n=EQ(d,m).data;O(c,Cm(a,CO(Em(n[0]))));d=n[1];if(a.bi>0&&!(j%a.bi|0)&&j>0)O(c,a.G.b9);j=j+(-1)|0;f=f+(-1)|0;m=Bu(m,ABS);k=k+1|0;}k=i-l|0;o=0;while
(o<k){O(c,48);if(a.bi>0&&!(j%a.bi|0)&&j>0)O(c,a.G.b9);j=j+(-1)|0;o=o+1|0;}a:{if(Ca(d,ABQ)){if(a.bj){O(c,a.G.bO);k=0;while(k<a.bj){O(c,48);k=k+1|0;}}else if(a.dq)O(c,a.G.bO);}else{O(c,a.G.bO);p=Bm(a.Z,Bs(0, -g));k=0;o=0;while(o<p){k=k+1|0;O(c,48);o=o+1|0;}q=Bm(a.Z-k|0,f);o=0;b:{while(true){if(o>=q)break b;if(Ca(d,ABQ))break;k=k+1|0;n=EQ(d,m).data;O(c,Cm(a,CO(Em(n[0]))));d=n[1];m=Bu(m,ABS);o=o+1|0;}}while(true){if(k>=a.bj)break a;O(c,48);k=k+1|0;}}}De(a,e,c);}
function Hf(a,b,c,d){var e,f,g,h,i;e=ABD.data[c-d|0];f=Long_le(b,Long_ZERO)?Long_neg(e):e;a:{QB();switch(ABT.data[a.d5.d6]){case 1:b=Long_mul(Long_div(b,e),e);if(Long_lt(b,Long_ZERO))break a;b=Long_add(b,e);break a;case 2:b=Long_mul(Long_div(b,e),e);if(Long_gt(b,Long_ZERO))break a;b=Long_sub(b,e);break a;case 3:b=Long_add(Long_mul(Long_div(b,e),e),f);break a;case 4:b=Long_mul(Long_div(b,e),e);break a;case 5:if(Long_eq(Long_rem(b,e),Long_ZERO))break a;g=new B7;U(g,C(49));F(g);case 6:h=Long_rem(b,e);f=Long_div(f,
Long_fromInt(2));if(Long_eq(h,f)){b=Long_mul(Long_div(b,e),e);break a;}b=Long_mul(Long_div(Long_add(b,f),e),e);break a;case 7:i=Long_rem(b,e);h=Long_div(f,Long_fromInt(2));if(Long_ne(i,h)){b=Long_mul(Long_div(Long_add(b,h),e),e);break a;}b=Long_add(Long_mul(Long_div(b,e),e),f);break a;case 8:i=Long_rem(b,e);h=Long_div(f,Long_fromInt(2));if(Long_ne(i,h)){b=Long_mul(Long_div(Long_add(b,h),e),e);break a;}b=Long_mul(Long_div(b,e),e);if(Long_eq(Long_rem(Long_div(b,e),Long_fromInt(2)),Long_ZERO))break a;b=Long_add(b,
f);break a;default:}}return b;}
function Hj(a,b,c,d){var e,f;e=Gk(a,ABR,c-d|0);f=DC(b,ABQ)<0?F9(e):e;a:{QB();switch(ABT.data[a.d5.d6]){case 1:b=Bt(Bu(b,e),e);if(DC(b,ABQ)<0)break a;b=B$(b,e);break a;case 2:b=Bt(Bu(b,e),e);if(DC(b,ABQ)>0)break a;b=DB(b,e);break a;case 3:b=B$(Bt(Bu(b,e),e),f);break a;case 4:b=Bt(Bu(b,e),e);break a;case 5:if(!Ca(DS(b,e),ABQ))break a;b=new B7;U(b,C(49));F(b);case 6:if(Ca(DS(b,e),Bu(f,BB(Long_fromInt(2))))){b=Bt(Bu(b,e),e);break a;}b=Bt(Bu(B$(b,Bu(f,BB(Long_fromInt(2)))),e),e);break a;case 7:if(Ca(DS(b,e),Bu(f,
BB(Long_fromInt(2))))){b=B$(Bt(Bu(b,e),e),f);break a;}b=Bt(Bu(B$(b,Bu(f,BB(Long_fromInt(2)))),e),e);break a;case 8:if(!Ca(DS(b,e),Bu(f,BB(Long_fromInt(2))))){b=Bt(Bu(B$(b,Bu(f,BB(Long_fromInt(2)))),e),e);break a;}b=Bt(Bu(b,e),e);if(Ca(DS(Bu(b,e),BB(Long_fromInt(2))),ABQ))break a;b=B$(b,f);break a;default:}}return b;}
function EM(a,b){var c;c=0;if(Long_lt(b,Long_ZERO)){if(Long_le(b,new Long(2420047872, 4292638989))){c=16;b=Long_div(b,new Long(1874919424, 2328306));}if(Long_le(b,Long_fromInt(-100000000))){c=c+8|0;b=Long_div(b,Long_fromInt(100000000));}if(Long_le(b,Long_fromInt(-10000))){c=c+4|0;b=Long_div(b,Long_fromInt(10000));}if(Long_le(b,Long_fromInt(-100))){c=c+2|0;b=Long_div(b,Long_fromInt(100));}if(Long_le(b,Long_fromInt(-10)))c=c+1|0;}else{if(Long_ge(b,new Long(1874919424, 2328306))){c=16;b=Long_div(b,new Long(1874919424, 2328306));}if
(Long_ge(b,Long_fromInt(100000000))){c=c+8|0;b=Long_div(b,Long_fromInt(100000000));}if(Long_ge(b,Long_fromInt(10000))){c=c+4|0;b=Long_div(b,Long_fromInt(10000));}if(Long_ge(b,Long_fromInt(100))){c=c+2|0;b=Long_div(b,Long_fromInt(100));}if(Long_ge(b,Long_fromInt(10)))c=c+1|0;}return c;}
function ED(a,b){var c;c=0;if(b>=100000000){c=8;b=b/100000000|0;}if(b>=10000){c=c+4|0;b=b/10000|0;}if(b>=100){c=c+2|0;b=b/100|0;}if(b>=10)c=c+1|0;return c;}
function Gk(a,b,c){var d;d=ABS;while(c){if(c&1)b=Bt(b,d);d=Bt(d,d);c=c>>>1;}return b;}
function Ng(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=ABD.data[17];if(b>=0.0)d=1;else{d=0;b= -b;}if(b>=1.0){e=256;f=0;g=1.0;h=ABF.data.length-1|0;while(h>=0){i=f|e;if(i<=308&&ABF.data[h]*g<=b){g=g*ABF.data[h];f=i;}e=e>>1;h=h+(-1)|0;}j=Long_fromNumber(b/g*Long_toNumber(c)+0.5);}else{k=256;f=0;l=1.0;h=ABG.data.length-1|0;while(h>=0){e=f|k;if(e<=308&&ABG.data[h]*l*10.0>b){l=l*ABG.data[h];f=e;}k=k>>1;h=h+(-1)|0;}f= -f;j=Long_fromNumber(b*Long_toNumber(c)/l+0.5);}c=Long_mul(Long_div(Long_add(j,Long_fromInt(500)),Long_fromInt(1000)),
Long_fromInt(1000));m=new I2;if(!d)c=Long_neg(c);m.eu=c;m.f7=f;return m;}
function Cm(a,b){return (a.G.ez+b|0)&65535;}
function Lv(){var b,c;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=
new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);ABD=b;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;ABE=b;b=$rt_createDoubleArray(9);c=b.data;c[0]=10.0;c[1]=100.0;c[2]=10000.0;c[3]=1.0E8;c[4]=1.0E16;c[5]=1.0E32;c[6]=1.0E64;c[7]=1.0E128;c[8]=1.0E256;ABF=b;b=$rt_createDoubleArray(9);c=b.data;c[0]=0.1;c[1]=0.01;c[2]=1.0E-4;c[3]=1.0E-8;c[4]=1.0E-16;c[5]=
1.0E-32;c[6]=1.0E-64;c[7]=1.0E-128;c[8]=1.0E-256;ABG=b;}
function I4(){}
function DJ(){}
function Dx(){B.call(this);}
function F2(a){return a.bt()?0:1;}
function DW(a,b){var c,d,e,f;c=b.data;d=a.bt();e=c.length;if(e<d)b=L7(El(Dc(b)),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.di();while(f.dF()){c=b.data;e=d+1|0;c[d]=f.c9();d=e;}return b;}
function GY(){}
function CU(){Dx.call(this);this.O=0;}
function DU(a,b){a.f3(a.bt(),b);return 1;}
function DX(a){var b;b=new Ho;b.c$=a;b.hx=b.c$.O;b.hC=b.c$.bt();b.gr=(-1);return b;}
function UB(a,b){var c,d,e;c=new GO;d=a.O;e=a.bt();c.fV=a;c.df=b;c.e_=b;c.gQ=d;c.i7=e;return c;}
function HI(){}
function LD(){var a=this;CU.call(a);a.Q=null;a.x=0;}
function DH(){var a=new LD();VU(a);return a;}
function VX(a){var b=new LD();KQ(b,a);return b;}
function VU(a){KQ(a,10);}
function KQ(a,b){a.Q=E(B,b);}
function Hi(a,b){var c;if(a.Q.data.length<b){c=a.Q.data.length>=1073741823?2147483647:Bs(b,Bs(a.Q.data.length*2|0,5));a.Q=OW(a.Q,c);}}
function BL(a,b){Fj(a,b);return a.Q.data[b];}
function R6(a){return a.x;}
function K5(a,b,c){var d;Fj(a,b);d=a.Q.data[b];a.Q.data[b]=c;return d;}
function Bk(a,b){var c,d;Hi(a,a.x+1|0);c=a.Q.data;d=a.x;a.x=d+1|0;c[d]=b;a.O=a.O+1|0;return 1;}
function O3(a,b,c){var d;if(b>=0&&b<=a.x){Hi(a,a.x+1|0);d=a.x;while(d>b){a.Q.data[d]=a.Q.data[d-1|0];d=d+(-1)|0;}a.Q.data[b]=c;a.x=a.x+1|0;a.O=a.O+1|0;return;}c=new Br;M(c);F(c);}
function M4(a,b){var c,d,e,f;Fj(a,b);c=a.Q.data[b];a.x=a.x-1|0;while(b<a.x){d=a.Q.data;e=a.Q.data;f=b+1|0;d[b]=e[f];b=f;}a.Q.data[a.x]=null;a.O=a.O+1|0;return c;}
function Fj(a,b){var c;if(b>=0&&b<a.x)return;c=new Br;M(c);F(c);}
function V(){B.call(this);}
var ABw=null;var ABU=null;var ABV=null;var ABW=null;var ABX=null;var ABY=null;var ABZ=null;var AB0=null;var AB1=null;var AB2=null;var AB3=null;var AB4=null;var AB5=null;var AB6=null;var AB7=null;var AB8=null;var AB9=null;var AB$=null;var AB_=null;var ACa=null;var ACb=null;var ACc=null;var ACd=null;var ACe=null;var ACf=null;var ACg=null;var ACh=null;var ACi=null;var ABC=null;var ACj=null;var ACk=null;var ACl=null;var ACm=null;function Cz(b,c){var d,e,f,g,h,i,j;a:{d=b.bF;e=b.bv;f=(-1);switch(Hr(d)){case 3360333:if
(!Be(d,C(46)))break a;f=0;break a;case 3361459:if(!Be(d,C(43)))break a;f=4;break a;case 103815131:if(!Be(d,C(40)))break a;f=1;break a;case 104170191:if(!Be(d,C(42)))break a;f=3;break a;case 104201997:if(!Be(d,C(41)))break a;f=2;break a;default:}}switch(f){case 0:return Fw(Oh(b.bv,c),c);case 1:g=e.data;b=ABX;e=E(Bi,2);h=e.data;h[0]=Cz(g[0],c);i=AB1;j=E(Bi,1);j.data[0]=Cz(g[1],c);h[1]=BK(c,i,j);return BK(c,b,e);case 2:g=e.data;b=ABY;e=E(Bi,2);h=e.data;h[0]=Cz(g[0],c);h[1]=FG(0.5);return BK(c,b,e);case 3:g=e.data;b
=ABY;e=E(Bi,2);h=e.data;h[0]=Cz(g[0],c);i=AB1;j=E(Bi,1);j.data[0]=Cz(g[1],c);h[1]=BK(c,i,j);return BK(c,b,e);case 4:h=e.data;b=ABW;e=E(Bi,2);g=e.data;g[0]=JO((-1));g[1]=Cz(h[1],c);return BK(c,b,e);default:}b=new Dj;U(b,d);F(b);}
function Oh(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=CA();e=CA();f=DH();Z(d,f);Z(e,FA(32));g=0;while(true){h=b.data;if(g>=h.length)break;i=h[g];j=i.bF;if(Eu(ACk,j))f.bJ(II(EU(ACk,j)));else if(Iw(ABC,j))f.bJ(II(Oi(ABC,j)));else if(Eu(ACj,j))f.bJ(FG(EU(ACj,j).dT));else if(Eu(ACl,j)){k=f.bt()-1|0;i=EU(ACl,j);l=E(Bi,1);l.data[0]=f.c0(f.bt()-1|0);f.eR(k,BK(c,i,l));}else if(Be(C(44),j)){m=Cz(i.bv.data[1],c);if(m instanceof Fa&&Iw(ABC,h[g-1|0].bF)){n=m.cV();o=new J_;i=new JR;i.gd=n;p=new JS;p.hG=n;OH(o,i,p);f.f3(f.bt()
-1|0,II(o));}else{q=f.bt()-1|0;i=ABY;l=E(Bi,2);h=l.data;h[0]=f.c0(f.bt()-1|0);h[1]=m;f.eR(q,BK(c,i,l));}}else if(JL(j,C(50)))f.bJ(FG(L3(j)));else if(J(j)!=1)f.bJ(Cz(i,c));else{k=H(j,0);if(40==k){f=DH();Z(d,f);Z(e,FA(40));}else if(41==k){r=Fw(Cy(d),c);Cy(e);f=Bv(d);f.bJ(r);}else if(124!=k){if(63!=k){c=new Dj;U(c,j);F(c);}f.bJ(JO(i.fd));}else{if(Bv(e).fe!=124)q=1;else{p=h[g-1|0].bF;q=!Nq(ACm,p)&&!JL(p,C(50))?(!Be(C(51),p)?1:F2(f)):0;}if(q){f=DH();Z(d,f);Z(e,FA(124));}else{r=Fw(Cy(d),c);Cy(e);f=Bv(d);i=ABZ;l=E(Bi,
1);l.data[0]=r;f.bJ(BK(c,i,l));}}}g=g+1|0;}return f;}
function Fw(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=CA();e=PH(0,ABw);Z(d,e);f=0;g=b.gS(b.bt());while(g.gT()){h=g.h5();if(!(h instanceof DZ)){if(!f){Z(e.E,h);f=1;continue;}i=2;b=ABX;}else{j=h;if(j.bX.data.length){if(j.cc===ABW){b=e.E;k=ABW;l=E(Bi,2);m=l.data;m[0]=Cp(e.E);m[1]=j.bX.data[1];DT(b,0,BK(c,k,l));f=1;continue;}if(!f){Z(e.E,h);f=1;continue;}i=2;b=ABX;}else{k=j.cc;n=0;if(k===ABw){i=0;b=ABw;}else if(k===ABU){if(Cp(e.E) instanceof DZ&&Cp(e.E).cc===AB2)n=1;i=1;b=ABU;}else if(k!==AB0){if(k===ABX){i=2;b=ABX;}else
{if(k!==AB1){b=e.E;l=E(Bi,1);l.data[0]=Cp(e.E);DT(b,0,BK(c,k,l));f=1;continue;}b=e.E;l=E(Bi,1);l.data[0]=Cp(e.E);DT(b,0,BK(c,k,l));i=2;b=ABX;}}else{if(Cp(e.E) instanceof DZ&&Cp(e.E).cc===AB2)n=1;b=e.E;l=E(Bi,1);l.data[0]=Cp(e.E);DT(b,0,BK(c,k,l));i=1;b=ABU;}f=0;if(n){b=e.E;j=ABU;l=E(Bi,2);m=l.data;m[0]=FG(1.0);m[1]=Cp(e.E);DT(b,0,BK(c,j,l));i=2;b=ABX;}}}while(e.d0>i){j=BK(c,e.eb,DW(e.E,E(Bi,0)));Cy(d);e=Bv(d);Z(e.E,j);}if(e.d0>=i)o=e;else{o=PH(i,b);DU(o.E,Cj(e.E));Z(d,o);}if(f)Z(o.E,h);e=o;}while(e.d0>0){j=
BK(c,e.eb,DW(e.E,E(Bi,0)));Cy(d);e=Bv(d);Z(e.E,j);}if(e.E.bf<=1)return Cp(e.E);return BK(c,e.eb,DW(e.E,E(Bi,0)));}
function OY(){ABw=Zl();ABU=Z7();ABV=Z3();ABW=Zi();ABX=Z1();ABY=Zz();ABZ=BX(AAS(),ZV());AB0=BX(AAd(),ZS());AB1=BX(AAF(),Z5());AB2=BX(Zc(),ZZ());AB3=BX(AAO(),AAj());AB4=BX(Zx(),AAx());AB5=Dr(AAB(),AAy(),0);AB6=Dr(ZJ(),Zv(),0);AB7=Dr(Zb(),Zp(),0);AB8=Dr(ZR(),AAV(),0);AB9=BX(ZQ(),AAl());AB$=BX(ZY(),AAN());AB_=BX(ZU(),Y_());ACa=BX(ZT(),AAH());ACb=Dr(ZW(),Z8(),1);ACc=Dr(AAf(),AAU(),1);ACd=Dr(ZF(),Zq(),1);ACe=Dr(Ze(),Zs(),1);ACf=BX(ZH(),AAw());ACg=BX(AAC(),AAv());ACh=BX(AAE(),ZE());ACi=BX(Zr(),Zk());ABC=Z6();ACj=E$();ACk
=E$();ACl=E$();ACm=AAZ();Bf(ABC,C(52),AB3);Bf(ABC,C(53),AB4);Bf(ABC,C(54),AB5);Bf(ABC,C(55),AB6);Bf(ABC,C(56),AB7);Bf(ABC,C(57),AB8);Bf(ABC,C(58),AB9);Bf(ABC,C(59),AB$);Bf(ABC,C(60),AB_);Bf(ABC,C(61),ACa);Bf(ABC,C(62),ACb);Bf(ABC,C(63),ACc);Bf(ABC,C(64),ACd);Bf(ABC,C(65),ACe);Bf(ABC,C(66),ACf);Bf(ABC,C(67),ACg);Bf(ABC,C(68),ACh);Bf(ABC,C(69),ACi);Bf(ABC,C(70),ACb);Bf(ABC,C(71),ACc);Bf(ABC,C(72),ACd);Bf(ABC,C(73),ACe);Bf(ABC,C(74),ACf);Bf(ABC,C(75),ACg);Bf(ABC,C(76),ACh);Bf(ABC,C(77),ACi);BV(ACj,C(78),EL(2.718281828459045));BV(ACj,
C(79),EL(3.141592653589793));BV(ACj,C(80),EL(0.5*(1.0+J9(5.0))));BV(ACk,C(13),ABw);BV(ACk,C(81),ABU);BV(ACk,C(82),ABX);BV(ACk,C(48),AB0);BV(ACk,C(83),AB1);BV(ACk,C(84),AB1);BV(ACk,C(85),AB1);BV(ACl,C(86),ABV);BV(ACl,C(87),AB2);Cd(ACm,C(14));Cd(ACm,C(78));Cd(ACm,C(80));Cd(ACm,C(79));Cd(ACm,C(87));Cd(ACm,C(86));Cd(ACm,C(23));Cd(ACm,C(44));Cd(ACm,C(40));Cd(ACm,C(42));Cd(ACm,C(41));}
function Bi(){B.call(this);}
function FG(b){var c;c=new Fa;c.g6=b;return c;}
function JO(b){var c;c=new IV;c.gt=b;return c;}
function BK(b,c,d){var e,f,g,h,i,j,k;e=d.data;f=e.length;g=$rt_createDoubleArray(f);h=g.data;i=0;j=c instanceof Iv;while(i<f){k=e[i].cV();if((isNaN(k)?1:0)&&!j)return Lx(NaN,c,d,null);h[i]=k;i=i+1|0;}return Lx(c.cf(b,g),c,d,null);}
function II(b){return Lx(NaN,b,E(Bi,0),null);}
function CB(){Bc.call(this);}
function Y(){var a=this;B.call(a);a.c=null;a.bc=0;a.g5=null;a.dk=0;}
var ABA=0;function ACn(){var a=new Y();Bh(a);return a;}
function ACo(a){var b=new Y();Gy(b,a);return b;}
function Bh(a){var b,c;b=new CY;c=ABA;ABA=c+1|0;FW(b,c);a.g5=Gh(b);}
function Gy(a,b){var c,d;c=new CY;d=ABA;ABA=d+1|0;FW(c,d);a.g5=Gh(c);a.c=b;}
function EP(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.a(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function TH(a,b){a.dk=b;}
function SJ(a){return a.dk;}
function U3(a){return a.c;}
function Wv(a,b){a.c=b;}
function Wu(a,b){return 1;}
function XK(a){return null;}
function Fg(a){var b;a.bc=1;if(a.c!==null){if(!a.c.bc){b=a.c.cl();if(b!==null){a.c.bc=1;a.c=b;}a.c.b1();}else if(a.c instanceof Ee&&a.c.br.e3)a.c=a.c.c;}}
function Pe(){ABA=1;}
function X(){Bc.call(this);}
function ACp(){var a=new X();LP(a);return a;}
function LP(a){M(a);}
function Hy(){var a=this;B.call(a);a.c6=null;a.ez=0;a.b9=0;a.bO=0;a.eS=0;a.eJ=0;a.iX=0;a.jP=0;a.eL=null;a.e8=null;a.de=0;a.kd=0;a.dR=null;}
function Xd(a){return a.ez;}
function Ta(a){return a.b9;}
function YS(a){return a.eS;}
function RA(a){return a.eJ;}
function Rp(a){return a.c6;}
function Sa(a){return a.bO;}
function Wj(a){return a.eL;}
function PI(a){return a.e8;}
function Q6(a){return a.de;}
function Rs(a){return a.dR;}
function M2(a){var b,c,d,$$je;a:{try{b=Po(a);}catch($$e){$$je=BM($$e);if($$je instanceof FZ){c=$$je;break a;}else{throw $$e;}}return b;}d=new JE;d.dY=1;d.el=1;d.fc=C(88);d.dD=c;F(d);}
function BG(){var a=this;B.call(a);a.fd=0;a.bF=null;a.bv=null;}
var ACq=null;function Qa(a,b,c){var d=new BG();LO(d,a,b,c);return d;}
function LO(a,b,c,d){a.fd=b;a.bF=c;a.bv=d;}
function X2(a){return a.fd;}
function Vu(a){return a.bF;}
function Xa(a){return a.bv;}
function Hz(b,c){return Qa(b,c,ACq);}
function BP(b,c,d){return Qa(b,c,d);}
function Oc(){ACq=E(BG,0);}
function Ly(){B.call(this);}
function Lp(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=Bm(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Ow(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=Bm(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function OW(b,c){var d,e,f,g;d=b.data;e=L7(El(Dc(b)),c);f=Bm(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function FE(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new X;M(f);F(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Gb(){CU.call(this);}
function UJ(a,b){var c;if(b>=0)return Ew(EB(a,b));c=new Br;M(c);F(c);}
function DT(a,b,c){var d,e;if(b<0){c=new Br;M(c);F(c);}d=EB(a,b);e=Ew(d);F7(d,c);return e;}
function Ih(a,b,c){if(b>=0){Ge(EB(a,b),c);return;}c=new Br;M(c);F(c);}
function S6(a){return HB(a);}
function GN(){}
function JY(){}
function L5(){var a=this;Gb.call(a);a.W=null;a.cW=null;a.bf=0;}
function CA(){var a=new L5();Y$(a);return a;}
function Y$(a){return;}
function TI(a){return a.bf;}
function HB(a){return LV(a,a.W,null,0);}
function EB(a,b){var c,d,e;if(b<0){c=new Br;M(c);F(c);}if(b<=(a.bf/2|0)){d=a.W;e=0;while(e<b){d=d.bn;e=e+1|0;}return LV(a,d,d===null?null:d.bp,b);}if(b>a.bf){c=new Br;M(c);F(c);}c=a.cW;e=b;while(e<a.bf){c=c.bp;e=e+1|0;}return LV(a,c===null?null:c.bn,c,b);}
function Z(a,b){var c;c=new FH;c.b_=b;c.bn=a.W;if(a.W===null)a.cW=c;else a.W.bp=c;a.W=c;a.O=a.O+1|0;a.bf=a.bf+1|0;return 1;}
function Cj(a){var b;if(!F2(a))return LJ(a);b=new CL;M(b);F(b);}
function LJ(a){var b;if(a.W===null)return null;b=a.W;a.W=a.W.bn;if(a.W===null)a.cW=null;else a.W.bp=null;a.bf=a.bf-1|0;a.O=a.O+1|0;return b.b_;}
function Bv(a){return a.W===null?null:a.W.b_;}
function Un(a,b){Z(a,b);}
function Rm(a){return Cj(a);}
function Cp(a){var b;if(a.W!==null)return a.W.b_;b=new CL;M(b);F(b);}
function Tm(a,b){Z(a,b);}
function Cy(a){return Cj(a);}
function DZ(){var a=this;Bi.call(a);a.fC=0.0;a.cc=null;a.bX=null;}
function Lx(a,b,c,d){var e=new DZ();Ua(e,a,b,c,d);return e;}
function Xf(a){return a.cc;}
function UZ(a){return a.bX;}
function Y3(a){return a.fC;}
function VL(a,b,c,d){var e,f,g,h,i;a:{if(isNaN(a.fC)?1:0){e=$rt_createDoubleArray(a.bX.data.length);f=e.data;g=0;while(g<a.bX.data.length){f[g]=a.bX.data[g].cV();g=g+1|0;}f=a.cc.cd(d,b,e);g=0;while(true){h=f.data;if(g>=h.length)break a;i=h[g];if(!(isNaN(i)?1:0))a.bX.data[g].dW(i,c,d);g=g+1|0;}}}}
function Ua(a,b,c,d,e){a.fC=b;a.cc=c;a.bX=d;}
function Dn(){B.call(this);}
var ACr=null;var ACs=null;var ACt=null;var ACu=null;var ACv=null;function Jx(){return new IP;}
function Hs(){return new IO;}
function K4(){ACr=Jx();ACs=Hs();ACt=new IQ;ACu=new IZ;ACv=new IY;}
function EF(){B_.call(this);this.dT=0.0;}
var ACw=0.0;var ACx=null;function YL(a){return a.dT;}
function EL(b){var c;c=new EF;c.dT=b;return c;}
function L3(b){var c,d,e,f,g,h,i,j,k,l;if(C4(b)){b=new BE;M(b);F(b);}c=0;d=J(b);while(true){if(H(b,c)>32){while(H(b,d-1|0)<=32){d=d+(-1)|0;}e=0;if(H(b,c)==45){c=c+1|0;e=1;}else if(H(b,c)==43)c=c+1|0;if(c==d){b=new BE;M(b);F(b);}a:{f=H(b,c);g=Long_ZERO;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(H(b,c)!=48)break b;c=c+1|0;}}while(c<d){j=H(b,c);if(j<48)break a;if(j>57)break a;if(Long_toNumber(g)>=1.0E17)h=h+1|0;else g=Long_add(Long_mul(g,Long_fromInt(10)),Long_fromInt(j-48|0));c=c+1|0;}}else{b=new BE;M(b);F(b);}}}if
(c<d&&H(b,c)==46){c=c+1|0;c:{while(true){if(c>=d)break c;f=H(b,c);if(f<48)break c;if(f>57)break;if(Long_toNumber(g)<1.0E17){g=Long_add(Long_mul(g,Long_fromInt(10)),Long_fromInt(f-48|0));h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i){b=new BE;M(b);F(b);}}if(c<d){f=H(b,c);if(f!=101&&f!=69){b=new BE;M(b);F(b);}f=c+1|0;k=0;if(f==d){b=new BE;LP(b);F(b);}if(H(b,f)==45){f=f+1|0;k=1;}else if(H(b,f)==43)f=f+1|0;l=0;c=0;d:{while(true){if(f>=d)break d;i=H(b,f);if(i<48)break d;if(i>57)break;l=(10*l|0)+(i-48|0)|0;c=1;f=f+1|0;}}if(!c)F(AA3());if
(k)l= -l;h=h+l|0;}e:{j=BJ(h,308);if(j<=0){if(j)break e;if(Long_le(g,new Long(2133831477, 4185580)))break e;}return e?(-Infinity):Infinity;}if(e)g=Long_neg(g);return Long_toNumber(g)*N$(h);}c=c+1|0;if(c==d)break;}b=new BE;M(b);F(b);}
function N$(b){var c,d;if(b>=0)c=10.0;else{c=0.1;b= -b;}d=1.0;while(b){if(b%2|0)d=d*c;c=c*c;b=b/2|0;}return d;}
function MH(){ACw=NaN;ACx=D($rt_doublecls());}
function Fl(){}
function CV(){B.call(this);}
function O9(){var a=this;CV.call(a);a.c3=0;a.ba=null;a.cT=0;a.h4=0.0;a.fN=0;}
function E$(){var a=new O9();UQ(a);return a;}
function WE(a,b){return E(DA,b);}
function UQ(a){var b;b=OP(16);a.c3=0;a.ba=E(DA,b);a.h4=0.75;If(a);}
function OP(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function If(a){a.fN=a.ba.data.length*a.h4|0;}
function Eu(a,b){return G_(a,b)===null?0:1;}
function TO(a){var b;b=new Ig;b.h3=a;return b;}
function EU(a,b){var c;c=G_(a,b);if(c===null)return null;return c.cI;}
function G_(a,b){var c,d;if(b===null)c=Kj(a);else{d=b.fk();c=I6(a,b,d&(a.ba.data.length-1|0),d);}return c;}
function I6(a,b,c,d){var e,f;e=a.ba.data[c];while(e!==null){if(e.eF==d){f=e.dl;if(b!==f&&!b.eQ(f)?0:1)break;}e=e.cn;}return e;}
function Kj(a){var b;b=a.ba.data[0];while(b!==null&&b.dl!==null){b=b.cn;}return b;}
function BV(a,b,c){return EN(a,b,c);}
function EN(a,b,c){var d,e,f,g;if(b===null){d=Kj(a);if(d===null){a.cT=a.cT+1|0;d=H$(a,null,0,0);e=a.c3+1|0;a.c3=e;if(e>a.fN)Iu(a);}}else{e=b.fk();f=e&(a.ba.data.length-1|0);d=I6(a,b,f,e);if(d===null){a.cT=a.cT+1|0;d=H$(a,b,f,e);e=a.c3+1|0;a.c3=e;if(e>a.fN)Iu(a);}}g=d.cI;d.cI=c;return g;}
function H$(a,b,c,d){var e,f;e=new DA;f=null;e.dl=b;e.cI=f;e.eF=d;e.cn=a.ba.data[c];a.ba.data[c]=e;return e;}
function Ob(a,b){var c,d,e,f,g,h,i;c=OP(!b?1:b<<1);d=E(DA,c);e=d.data;f=0;c=c-1|0;while(f<a.ba.data.length){g=a.ba.data[f];a.ba.data[f]=null;while(g!==null){h=g.eF&c;i=g.cn;g.cn=e[h];e[h]=g;g=i;}f=f+1|0;}a.ba=d;If(a);}
function Iu(a){Ob(a,a.ba.data.length);}
function IV(){Bi.call(this);this.gt=0;}
function WN(a){return NaN;}
function PW(a,b,c,d){var e,f;e=a.gt;if(e>=(-128)&&e<=127){a:{if(ABh===null){ABh=E(CY,256);f=0;while(true){if(f>=ABh.data.length)break a;ABh.data[f]=N7(f-128|0);f=f+1|0;}}}d=ABh.data[e+128|0];}else d=N7(e);EN(c,d,EL(b));}
function F$(){}
function GH(){var a=this;B.call(a);a.jb=null;a.hg=null;a.fW=null;a.cY=null;a.d9=0;a.fx=0;}
function EI(a){var b,c,d,e;b=a.d9;M1(a.cY);a.cY.dp=2;M9(a.cY,b);c=a.hg;d=a.cY;if(c.a(b,a.fW,d)<0)e=0;else{KD(d);e=1;}return e;}
function BQ(){var a=this;Y.call(a);a.e3=0;a.bH=0;}
var ABz=null;function Z4(a){var b=new BQ();Dm(b,a);return b;}
function Dm(a,b){Bh(a);a.bH=b;}
function RO(a,b,c,d){var e,f;e=EC(d,a.bH);FD(d,a.bH,b);f=a.c.a(b,c,d);if(f<0)FD(d,a.bH,e);return f;}
function Qh(a){return a.bH;}
function Ss(a,b){return 0;}
function ND(){var b;b=new HK;Bh(b);ABz=b;}
function DE(){var a=this;B.call(a);a.o=null;a.cM=0;a.bG=0;a.hp=0;a.d_=0;a.B=0;a.e=0;a.go=0;a.cr=null;a.cg=null;a.i=0;a.dz=0;a.bV=0;a.dy=0;a.bb=null;}
var ACy=null;var ABx=null;var ABy=0;function E9(a){return a.B;}
function Ia(a,b){if(b>0&&b<3)a.bG=b;if(b==1){a.e=a.B;a.cg=a.cr;a.i=a.dy;a.dy=a.bV;C6(a);}}
function LU(a,b){a.cM=b;a.e=a.B;a.cg=a.cr;a.i=a.bV+1|0;a.dy=a.bV;C6(a);}
function IK(a){return a.cr;}
function DN(a){return a.cr===null?0:1;}
function FI(a){return a.cg===null?0:1;}
function R(a){C6(a);return a.d_;}
function Df(a){var b;b=a.cr;C6(a);return b;}
function RG(a){return a.e;}
function Vt(a){return a.d_;}
function C6(a){var b,c,d,e,f,$$je;a.d_=a.B;a.B=a.e;a.cr=a.cg;a.bV=a.dy;a.dy=a.i;while(true){b=0;a.e=a.i>=a.o.data.length?0:FQ(a);a.cg=null;if(a.bG==4){if(a.e!=92)return;a.e=a.i>=a.o.data.length?0:a.o.data[Bl(a)];switch(a.e){case 69:break;default:a.e=92;a.i=a.dz;return;}a.bG=a.hp;a.e=a.i>(a.o.data.length-2|0)?0:FQ(a);}a:{if(a.e!=92){if(a.bG==1)switch(a.e){case 36:a.e=(-536870876);break a;case 40:if(a.o.data[a.i]!=63){a.e=(-2147483608);break a;}Bl(a);c=a.o.data[a.i];d=0;while(true){b:{if(d){d=0;switch(c){case 33:break;case 61:a.e
=(-134217688);Bl(a);break b;default:F(Bp(C(20),Cn(a),a.i));}a.e=(-67108824);Bl(a);}else{switch(c){case 33:break;case 60:Bl(a);c=a.o.data[a.i];d=1;break b;case 61:a.e=(-536870872);Bl(a);break b;case 62:a.e=(-33554392);Bl(a);break b;default:a.e=Pg(a);if(a.e<256){a.cM=a.e;a.e=a.e<<16;a.e=(-1073741784)|a.e;break b;}a.e=a.e&255;a.cM=a.e;a.e=a.e<<16;a.e=(-16777176)|a.e;break b;}a.e=(-268435416);Bl(a);}}if(!d)break;}break a;case 41:a.e=(-536870871);break a;case 42:case 43:case 63:switch(a.i>=a.o.data.length?42:a.o.data[a.i])
{case 43:a.e=a.e|(-2147483648);Bl(a);break a;case 63:a.e=a.e|(-1073741824);Bl(a);break a;default:}a.e=a.e|(-536870912);break a;case 46:a.e=(-536870866);break a;case 91:a.e=(-536870821);Ia(a,2);break a;case 93:if(a.bG!=2)break a;a.e=(-536870819);break a;case 94:a.e=(-536870818);break a;case 123:a.cg=Os(a,a.e);break a;case 124:a.e=(-536870788);break a;default:}else if(a.bG==2)switch(a.e){case 38:a.e=(-536870874);break a;case 45:a.e=(-536870867);break a;case 91:a.e=(-536870821);break a;case 93:a.e=(-536870819);break a;case 94:a.e
=(-536870818);break a;default:}}else{c=a.i>=(a.o.data.length-2|0)?(-1):FQ(a);c:{a.e=c;switch(a.e){case -1:F(Bp(C(20),Cn(a),a.i));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.e
=Lr(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.bG!=1)break a;a.e=(-2147483648)|a.e;break a;case 65:a.e=(-2147483583);break a;case 66:a.e=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:F(Bp(C(20),Cn(a),a.i));case 68:case 83:case 87:case 100:case 115:case 119:a.cg=Kf(Ie(a.o,
a.dz,1),0);a.e=0;break a;case 71:a.e=(-2147483577);break a;case 80:case 112:break c;case 81:a.hp=a.bG;a.bG=4;b=1;break a;case 90:a.e=(-2147483558);break a;case 97:a.e=7;break a;case 98:a.e=(-2147483550);break a;case 99:if(a.i>=(a.o.data.length-2|0))F(Bp(C(20),Cn(a),a.i));a.e=a.o.data[Bl(a)]&31;break a;case 101:a.e=27;break a;case 102:a.e=12;break a;case 110:a.e=10;break a;case 114:a.e=13;break a;case 116:a.e=9;break a;case 117:a.e=IT(a,4);break a;case 120:a.e=IT(a,2);break a;case 122:a.e=(-2147483526);break a;default:}break a;}e
=Le(a);f=0;if(a.e==80)f=1;try{a.cg=Kf(e,f);}catch($$e){$$je=BM($$e);if($$je instanceof Fp){F(Bp(C(20),Cn(a),a.i));}else{throw $$e;}}a.e=0;}}if(b)continue;else break;}}
function Le(a){var b,c,d;b=new P;Er(b,10);if(a.i<(a.o.data.length-2|0)){if(a.o.data[a.i]!=123){b=new P;Q(b);G(b,C(89));G(b,Ie(a.o,Bl(a),1));return N(b);}Bl(a);c=0;a:{while(a.i<(a.o.data.length-2|0)){c=a.o.data[Bl(a)];if(c==125)break a;O(b,c);}}if(c!=125)F(Bp(C(20),a.bb,a.i));}if(!Ex(b))F(Bp(C(20),a.bb,a.i));d=N(b);if(J(d)==1){b=new P;Q(b);G(b,C(89));G(b,d);return N(b);}b:{c:{if(J(d)>3){if(Gs(d,C(89)))break c;if(Gs(d,C(90)))break c;}break b;}d=E2(d,2);}return d;}
function Os(a,b){var c,d,e,f,$$je;c=new P;Er(c,4);d=(-1);e=2147483647;a:{while(true){if(a.i>=a.o.data.length)break a;b=a.o.data[Bl(a)];if(b==125)break a;if(b==44&&d<0)try{d=Fz(FJ(c),10);OC(c,0,Ex(c));continue;}catch($$e){$$je=BM($$e);if($$je instanceof BE){break;}else{throw $$e;}}O(c,b&65535);}F(Bp(C(20),a.bb,a.i));}if(b!=125)F(Bp(C(20),a.bb,a.i));if(Ex(c)>0)b:{try{e=Fz(FJ(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=BM($$e);if($$je instanceof BE){}else{throw $$e;}}F(Bp(C(20),a.bb,a.i));}else if(d<0)F(Bp(C(20),
a.bb,a.i));if((d|e|(e-d|0))<0)F(Bp(C(20),a.bb,a.i));f=a.i>=a.o.data.length?42:a.o.data[a.i];c:{switch(f){case 43:a.e=(-2147483525);Bl(a);break c;case 63:a.e=(-1073741701);Bl(a);break c;default:}a.e=(-536870789);}c=new G4;c.b5=d;c.bU=e;return c;}
function Cn(a){return a.bb;}
function Cb(a){return !a.B&&!a.e&&a.i==a.go&&!DN(a)?1:0;}
function Gc(b){return b<0?0:1;}
function C2(a){return !Cb(a)&&!DN(a)&&Gc(a.B)?1:0;}
function HH(a){return a.B<=56319&&a.B>=55296?1:0;}
function IA(a){return a.B<=57343&&a.B>=56320?1:0;}
function GJ(b){return b<=56319&&b>=55296?1:0;}
function Ij(b){return b<=57343&&b>=56320?1:0;}
function IT(a,b){var c,d,e,f,$$je;c=new P;Er(c,b);d=a.o.data.length-2|0;e=0;while(true){f=BJ(e,b);if(f>=0)break;if(a.i>=d)break;O(c,a.o.data[Bl(a)]);e=e+1|0;}if(!f)a:{try{b=Fz(FJ(c),16);}catch($$e){$$je=BM($$e);if($$je instanceof BE){break a;}else{throw $$e;}}return b;}F(Bp(C(20),a.bb,a.i));}
function Lr(a){var b,c,d,e,f;b=3;c=1;d=a.o.data.length-2|0;e=Ic(a.o.data[a.i],8);switch(e){case -1:break;default:if(e>3)b=2;Bl(a);a:{while(true){if(c>=b)break a;if(a.i>=d)break a;f=Ic(a.o.data[a.i],8);if(f<0)break;e=(e*8|0)+f|0;Bl(a);c=c+1|0;}}return e;}F(Bp(C(20),a.bb,a.i));}
function Pg(a){var b,c;b=1;c=a.cM;a:while(true){if(a.i>=a.o.data.length)F(Bp(C(20),a.bb,a.i));b:{c:{switch(a.o.data[a.i]){case 41:Bl(a);return c|256;case 45:if(!b)F(Bp(C(20),a.bb,a.i));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}Bl(a);}Bl(a);return c;}
function Bl(a){var b,c;a.dz=a.i;if(!(a.cM&4))a.i=a.i+1|0;else{b=a.o.data.length-2|0;a.i=a.i+1|0;a:while(true){if(a.i<b&&Gi(a.o.data[a.i])){a.i=a.i+1|0;continue;}if(a.i>=b)break;if(a.o.data[a.i]!=35)break;a.i=a.i+1|0;while(true){if(a.i>=b)continue a;c=a.o.data[a.i];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.i=a.i+1|0;}}}return a.dz;}
function N8(b){return ACy.oZ(b);}
function FQ(a){var b,c,d;b=a.o.data[Bl(a)];if(BW(b)){c=a.dz+1|0;if(c<a.o.data.length){d=a.o.data[c];if(Cg(d)){Bl(a);return CK(b,d);}}}return b;}
function DK(a){return a.bV;}
function Ot(){var a=this;X.call(a);a.gN=null;a.dJ=null;a.dx=0;}
function Bp(a,b,c){var d=new Ot();Q9(d,a,b,c);return d;}
function Q9(a,b,c,d){M(a);a.dx=(-1);a.gN=b;a.dJ=c;a.dx=d;}
function XE(a){var b,c,d,e,f,g,h,i;b=C(20);if(a.dx>=1){c=$rt_createCharArray(a.dx);d=c.data;e=0;f=d.length;if(e>f){b=new X;M(b);F(b);}while(e<f){g=e+1|0;d[e]=32;e=g;}b=KB(c);}h=new P;Q(h);G(h,a.gN);if(a.dJ!==null&&J(a.dJ)){i=new P;Q(i);i=W(i,a.dx);G(i,C(91));G(i,a.dJ);G(i,C(91));G(i,b);b=N(i);}else b=C(20);G(h,b);return N(h);}
function Bn(){var a=this;B.call(a);a.cK=null;a.cD=null;a.ha=null;}
var ABI=null;var ACz=null;var ACA=null;var ACB=null;var ACC=null;var ACD=null;var ACE=null;var ACF=null;var ACG=null;var ACH=null;var ACI=null;var ACJ=null;var ACK=null;var ACL=null;var ACM=null;var ACN=null;var ACO=null;var ACP=null;var ACQ=null;var ACR=null;var ACS=null;var ACT=null;var ACU=null;function By(a,b){var c=new Bn();Pd(c,a,b);return c;}
function ZL(a,b,c){var d=new Bn();In(d,a,b,c);return d;}
function Pd(a,b,c){In(a,b,c,C(20));}
function In(a,b,c,d){if(b!==null&&c!==null&&d!==null){if(!J(b)&&!J(c)){a.cD=C(20);a.cK=C(20);a.ha=d;return;}a.cD=b;a.cK=c;a.ha=d;return;}b=new CB;M(b);F(b);}
function W1(a){return a.cK;}
function Q1(a){return a.cD;}
function OZ(){var b,c;ACz=By(C(92),C(93));ACA=By(C(94),C(93));ACB=By(C(95),C(96));ACC=By(C(95),C(20));ACD=By(C(92),C(20));ACE=By(C(94),C(97));ACF=By(C(94),C(20));ACG=By(C(98),C(20));ACH=By(C(98),C(99));ACI=By(C(100),C(20));ACJ=By(C(100),C(101));ACK=By(C(102),C(103));ACL=By(C(102),C(20));ACM=By(C(104),C(105));ACN=By(C(104),C(20));ACO=By(C(95),C(96));ACP=By(C(95),C(96));ACQ=By(C(95),C(106));ACR=By(C(95),C(106));ACS=By(C(92),C(107));ACT=By(C(92),C(108));ACU=By(C(20),C(20));if(ACV===null)ACV=Rt();b=(ACV.value!==
null?$rt_str(ACV.value):null);c=Nx(b,95);ABI=ZL(CR(b,0,c),E2(b,c+1|0),C(20));}
function BS(){}
function KF(){B.call(this);this.gm=null;}
function E5(a){var b=new KF();T_(b,a);return b;}
function T_(a,b){a.gm=b;}
function Qj(a,b,c){G(c,a.gm);}
function JV(){}
function G7(){}
function MI(){var a=this;CV.call(a);a.ej=null;a.ek=null;a.ju=null;a.h_=0;}
function Z6(){var a=new MI();Sf(a);return a;}
function Sf(a){var b;b=null;a.ju=b;if(b===null){b=new Km;b.i5=a;}a.ek=b;}
function Oi(a,b){var c;c=FO(a,b);return c===null?null:c.ds;}
function Bf(a,b,c){var d,e;a.ej=Gg(a,a.ej,b);d=FO(a,b);e=GK(d,c);GK(d,c);a.h_=a.h_+1|0;return e;}
function Iw(a,b){return FO(a,b)===null?0:1;}
function FO(a,b){var c,d;c=a.ej;while(true){if(c===null)return null;d=Gj(a.ek,b,c.cA);if(!d)break;c=d>=0?c.V:c.X;}return c;}
function Pq(a,b,c){var d,e,f,g;d=a.ej;e=null;while(d!==null){f=Gj(a.ek,b,d.cA);if(c)f= -f;if(!f)return d;if(f>=0)g=KW(d,c);else{g=Lc(d,c);e=d;}d=g;}return e;}
function Gg(a,b,c){var d,e;if(b===null){b=new Hq;d=null;b.cA=c;b.ds=d;b.cJ=1;b.ch=1;return b;}e=Gj(a.ek,c,b.cA);if(!e)return b;if(e>=0)b.V=Gg(a,b.V,c);else b.X=Gg(a,b.X,c);Dz(b);return LS(b);}
function O7(a,b){var c;c=Pq(a,b,0);return c===null?null:c.cA;}
function Hg(){var a=this;B.call(a);a.fA=0;a.gk=0;a.hq=null;}
function VI(a,b,c){var d=new Hg();Vo(d,a,b,c);return d;}
function Vo(a,b,c,d){a.fA=b;a.gk=c;a.hq=d;}
function ON(){B.call(this);}
function NX(b){return Math.sin(b);}
function Ln(b){return Math.cos(b);}
function IX(b){return Math.tan(b);}
function Pb(b){return Math.asin(b);}
function OQ(b){return Math.acos(b);}
function Jg(b){return Math.atan(b);}
function FY(b){return Math.exp(b);}
function CC(b){return Math.log(b);}
function JK(b){return CC(b)/2.302585092994046;}
function J9(b){return Math.sqrt(b);}
function CM(b,c){return Math.pow(b,c);}
function Bm(b,c){if(b<c)c=b;return c;}
function Bs(b,c){if(b>c)c=b;return c;}
function CO(b){if(b<=0)b= -b;return b;}
function Dp(b){if(b<=0.0)b= -b;return b;}
function L4(b){var c;c=FY(b);return (c-1.0/c)/2.0;}
function O1(b){var c;c=FY(b);return (c+1.0/c)/2.0;}
function JD(b){var c;c=FY(b);b=1.0/c;return (c-b)/(c+b);}
function Cx(){}
function Iv(){B.call(this);}
function Zl(){var a=new Iv();U5(a);return a;}
function U5(a){return;}
function Q3(a,b,c){var d,e,f;c=c.data;d=c.length;e=0;while(true){if(e>=d)return NaN;f=c[e];if(!(isNaN(f)?1:0))break;e=e+1|0;}return f;}
function SM(a,b,c,d){var e,f,g,h;d=d.data;e=d.length;f=$rt_createDoubleArray(e);g=f.data;h=0;while(h<e){if(isNaN(d[h])?1:0)g[h]=c;else g[h]=NaN;h=h+1|0;}return f;}
function K1(){B.call(this);}
function Z7(){var a=new K1();Re(a);return a;}
function Re(a){return;}
function Yf(a,b,c){var d,e,f;c=c.data;d=0.0;e=c.length;f=0;while(f<e){d=d+c[f];f=f+1|0;}return d;}
function QW(a,b,c,d){var e,f,g,h,i,j,k;d=d.data;e=d.length;f=$rt_createDoubleArray(e);g=0;h=0;while(h<e){i=d[h];if(!(isNaN(i)?1:0))c=c-i;else g=g+1|0;h=h+1|0;}j=f.data;k=c/g;h=0;while(h<e){if(isNaN(d[h])?1:0)j[h]=k;else j[h]=NaN;h=h+1|0;}return f;}
function LE(){B.call(this);}
function Z3(){var a=new LE();Ru(a);return a;}
function Ru(a){return;}
function YW(a,b,c){var d,e,f,g;c=c.data;d=c[0]+0.5|0;e=c[0];f=d;if(Dp(e-f)<=1.0E-7&&f>=(-1.0E-7)){e=1.0;g=1;while(g<=d&&(isFinite(e)?1:0)){e=e*g;g=g+1|0;}return e;}return NaN;}
function Yy(a,b,c,d){var e,f,g,h;a:{e=1.0;f=c+1.0;if(isFinite(f)?1:0){g=1;while(true){if(e>=f)break a;h=g;e=e*h;if(Dp(c-e)/e<1.0E-4)break;g=g+1|0;}d=$rt_createDoubleArray(1);d.data[0]=h;return d;}}d=$rt_createDoubleArray(1);d.data[0]=NaN;return d;}
function Pk(){B.call(this);}
function Zi(){var a=new Pk();Wc(a);return a;}
function Wc(a){return;}
function Y0(a,b,c){c=c.data;return CC(c[0])/CC(c[1]);}
function V4(a,b,c,d){var e,f;d=d.data;if(!(isNaN(d[0])?1:0)){e=$rt_createDoubleArray(2);f=e.data;f[0]=NaN;f[1]=CM(d[0],1.0/c);return e;}if(isNaN(d[1])?1:0){d=$rt_createDoubleArray(2);e=d.data;e[0]=CM(10.0,c);e[1]=10.0;return d;}e=$rt_createDoubleArray(2);f=e.data;f[0]=CM(d[1],c);f[1]=NaN;return e;}
function K8(){B.call(this);}
function Z1(){var a=new K8();YA(a);return a;}
function YA(a){return;}
function T3(a,b,c){var d,e,f;c=c.data;d=1.0;e=c.length;f=0;while(f<e){d=d*c[f];f=f+1|0;}return d;}
function WH(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;d=d.data;e=d.length;f=$rt_createDoubleArray(e);g=0;h=0;while(h<e){i=d[h];if(!(isNaN(i)?1:0))c=c/i;else g=g+1|0;h=h+1|0;}j=CM(Dp(c),1.0/g);k=BJ(c,0.0);if(k>0)c=1.0;else if(k<0)c=(-1.0);l=f.data;m=c*j;n=1;h=0;while(h<e){if(!(isNaN(d[h])?1:0))l[h]=NaN;else if(!n)l[h]=j;else{l[h]=m;n=0;}h=h+1|0;}return f;}
function Op(){B.call(this);}
function Zz(){var a=new Op();Vd(a);return a;}
function Vd(a){return;}
function S2(a,b,c){c=c.data;return CM(c[0],c[1]);}
function Wt(a,b,c,d){var e,f;d=d.data;if(!(isNaN(d[0])?1:0)){e=$rt_createDoubleArray(2);f=e.data;f[0]=NaN;f[1]=CC(c)/CC(d[0]);return e;}if(isNaN(d[1])?1:0){d=$rt_createDoubleArray(2);e=d.data;e[0]=10.0;e[1]=JK(c);return d;}e=$rt_createDoubleArray(2);f=e.data;f[0]=CM(c,1.0/d[1]);f[1]=NaN;return e;}
function J_(){var a=this;B.call(a);a.hw=null;a.hj=null;}
function BX(a,b){var c=new J_();OH(c,a,b);return c;}
function OH(a,b,c){a.hw=b;a.hj=c;}
function Qv(a,b,c){c=c.data;return a.hw.l(c[0]);}
function U9(a,b,c,d){d=$rt_createDoubleArray(1);d.data[0]=a.hj.l(c);return d;}
function S(){}
function NY(){B.call(this);}
function AAS(){var a=new NY();Tn(a);return a;}
function Tn(a){return;}
function RT(a,b){return Dp(b);}
function NZ(){B.call(this);}
function ZV(){var a=new NZ();Qc(a);return a;}
function Qc(a){return;}
function PQ(a,b){return Dp(b);}
function N0(){B.call(this);}
function AAd(){var a=new N0();Tc(a);return a;}
function Tc(a){return;}
function St(a,b){return  -b;}
function NQ(){B.call(this);}
function ZS(){var a=new NQ();W5(a);return a;}
function W5(a){return;}
function Vv(a,b){return  -b;}
function NR(){B.call(this);}
function AAF(){var a=new NR();VD(a);return a;}
function VD(a){return;}
function SY(a,b){return 1.0/b;}
function NS(){B.call(this);}
function Z5(){var a=new NS();UP(a);return a;}
function UP(a){return;}
function P6(a,b){return 1.0/b;}
function NT(){B.call(this);}
function Zc(){var a=new NT();V8(a);return a;}
function V8(a){return;}
function T4(a,b){return b/100.0;}
function NU(){B.call(this);}
function ZZ(){var a=new NU();Xh(a);return a;}
function Xh(a){return;}
function Ut(a,b){return 100.0*b;}
function NV(){B.call(this);}
function AAO(){var a=new NV();RD(a);return a;}
function RD(a){return;}
function T0(a,b){return CC(b);}
function NW(){B.call(this);}
function AAj(){var a=new NW();Rk(a);return a;}
function Rk(a){return;}
function Qm(a,b){return FY(b);}
function MB(){B.call(this);}
function Zx(){var a=new MB();Tq(a);return a;}
function Tq(a){return;}
function R9(a,b){return JK(b);}
function MA(){B.call(this);}
function AAx(){var a=new MA();XQ(a);return a;}
function XQ(a){return;}
function Uu(a,b){return CM(10.0,b);}
function Oe(){var a=this;B.call(a);a.gq=null;a.hY=null;a.c7=0;}
function Dr(a,b,c){var d=new Oe();Uc(d,a,b,c);return d;}
function Uc(a,b,c,d){a.gq=b;a.hY=c;a.c7=d;}
function U2(a,b,c){var d,e;d=c.data[0];if(b.cH&&!a.c7)d=d*3.141592653589793/180.0;e=a.gq.l(d);if(b.cH&&a.c7)e=e*180.0/3.141592653589793;return e;}
function VS(a,b,c,d){var e;if(b.cH&&a.c7)c=c*3.141592653589793/180.0;e=a.hY.l(c);if(b.cH&&!a.c7)e=e*180.0/3.141592653589793;d=$rt_createDoubleArray(1);d.data[0]=e;return d;}
function Mx(){B.call(this);}
function AAB(){var a=new Mx();Vp(a);return a;}
function Vp(a){return;}
function Sg(a,b){return NX(b);}
function Mw(){B.call(this);}
function AAy(){var a=new Mw();Vh(a);return a;}
function Vh(a){return;}
function P1(a,b){return Pb(b);}
function Mz(){B.call(this);}
function ZJ(){var a=new Mz();SF(a);return a;}
function SF(a){return;}
function S0(a,b){return Ln(b);}
function My(){B.call(this);}
function Zv(){var a=new My();Rh(a);return a;}
function Rh(a){return;}
function Vg(a,b){return OQ(b);}
function MD(){B.call(this);}
function Zb(){var a=new MD();RF(a);return a;}
function RF(a){return;}
function Sr(a,b){return IX(b);}
function MC(){B.call(this);}
function Zp(){var a=new MC();RP(a);return a;}
function RP(a){return;}
function RE(a,b){return Jg(b);}
function MF(){B.call(this);}
function ZR(){var a=new MF();RK(a);return a;}
function RK(a){return;}
function Wn(a,b){return Kw(b);}
function ME(){B.call(this);}
function AAV(){var a=new ME();V7(a);return a;}
function V7(a){return;}
function Wr(a,b){return NJ(b);}
function Ma(){B.call(this);}
function ZQ(){var a=new Ma();WO(a);return a;}
function WO(a){return;}
function SA(a,b){return L4(b);}
function Mc(){B.call(this);}
function AAl(){var a=new Mc();Ww(a);return a;}
function Ww(a){return;}
function VE(a,b){return PA(b);}
function Mb(){B.call(this);}
function ZY(){var a=new Mb();U4(a);return a;}
function U4(a){return;}
function SH(a,b){return O1(b);}
function L9(){B.call(this);}
function AAN(){var a=new L9();Sx(a);return a;}
function Sx(a){return;}
function P$(a,b){return LC(b);}
function L8(){B.call(this);}
function ZU(){var a=new L8();Xx(a);return a;}
function Xx(a){return;}
function RM(a,b){return JD(b);}
function L_(){B.call(this);}
function Y_(){var a=new L_();QJ(a);return a;}
function QJ(a){return;}
function WK(a,b){return Jl(b);}
function L$(){B.call(this);}
function ZT(){var a=new L$();QE(a);return a;}
function QE(a){return;}
function Xb(a,b){return NO(b);}
function Me(){B.call(this);}
function AAH(){var a=new Me();Sn(a);return a;}
function Sn(a){return;}
function PR(a,b){return OX(b);}
function Md(){B.call(this);}
function ZW(){var a=new Md();Yx(a);return a;}
function Yx(a){return;}
function XS(a,b){return Pb(b);}
function Mh(){B.call(this);}
function Z8(){var a=new Mh();UR(a);return a;}
function UR(a){return;}
function UO(a,b){return NX(b);}
function Mn(){B.call(this);}
function AAf(){var a=new Mn();YM(a);return a;}
function YM(a){return;}
function Q0(a,b){return OQ(b);}
function Mm(){B.call(this);}
function AAU(){var a=new Mm();TS(a);return a;}
function TS(a){return;}
function WZ(a,b){return Ln(b);}
function Mp(){B.call(this);}
function ZF(){var a=new Mp();Y4(a);return a;}
function Y4(a){return;}
function VM(a,b){return Jg(b);}
function Mo(){B.call(this);}
function Zq(){var a=new Mo();Ue(a);return a;}
function Ue(a){return;}
function QR(a,b){return IX(b);}
function Mj(){B.call(this);}
function Ze(){var a=new Mj();P4(a);return a;}
function P4(a){return;}
function QT(a,b){return NJ(b);}
function Mi(){B.call(this);}
function Zs(){var a=new Mi();TQ(a);return a;}
function TQ(a){return;}
function Yc(a,b){return Kw(b);}
function Ml(){B.call(this);}
function ZH(){var a=new Ml();W8(a);return a;}
function W8(a){return;}
function Yv(a,b){return PA(b);}
function Mk(){B.call(this);}
function AAw(){var a=new Mk();Th(a);return a;}
function Th(a){return;}
function Yh(a,b){return L4(b);}
function Mu(){B.call(this);}
function AAC(){var a=new Mu();Uw(a);return a;}
function Uw(a){return;}
function YV(a,b){return LC(b);}
function Mt(){B.call(this);}
function AAv(){var a=new Mt();VW(a);return a;}
function VW(a){return;}
function Yn(a,b){return O1(b);}
function Nc(){B.call(this);}
function AAE(){var a=new Nc();VA(a);return a;}
function VA(a){return;}
function P5(a,b){return Jl(b);}
function M_(){B.call(this);}
function ZE(){var a=new M_();SK(a);return a;}
function SK(a){return;}
function XY(a,b){return JD(b);}
function M$(){B.call(this);}
function Zr(){var a=new M$();Q4(a);return a;}
function Q4(a){return;}
function Ve(a,b){return OX(b);}
function Na(){B.call(this);}
function Zk(){var a=new Na();P8(a);return a;}
function P8(a){return;}
function Xj(a,b){return NO(b);}
function Im(){}
function CX(){Dx.call(this);}
function Nz(){CX.call(this);this.fw=null;}
function AAZ(){var a=new Nz();VT(a);return a;}
function VT(a){a.fw=E$();}
function Cd(a,b){return EN(a.fw,b,a)!==null?0:1;}
function Nq(a,b){return Eu(a.fw,b);}
function Dj(){Bc.call(this);}
function IO(){CV.call(this);}
function Wh(a){return Jx();}
function HJ(){B.call(this);}
var ABe=null;function CN(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=L0(b)&&(e+f|0)<=L0(d)){a:{b:{if(b!==d){g=El(Dc(b));h=El(Dc(d));if(g!==null&&h!==null){if(g===h)break b;if(!ER(g)&&!ER(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!Nj(h,l[k])){J2(b,c,d,e,j);b=new ET;M(b);F(b);}j=j+1|0;k=m;}J2(b,c,d,e,f);return;}if(!ER(g))break a;if(ER(h))break b;else break a;}b=new ET;M(b);F(b);}}J2(b,c,d,e,f);return;}b=new ET;M(b);F(b);}b=new Br;M(b);F(b);}d=new CB;Cr(d,C(109));F(d);}
function J2(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function J3(){BQ.call(this);}
function QO(a,b,c,d){var e;e=a.bH;Ba(d,e,b-Ce(d,e)|0);return a.c.a(b,c,d);}
function Ur(a,b){return 0;}
function J0(){BQ.call(this);}
function TD(a,b,c,d){return b;}
function IW(){BQ.call(this);}
function SG(a,b,c,d){if(Ce(d,a.bH)!=b)b=(-1);return b;}
function GX(){BQ.call(this);this.eK=0;}
function Q2(a,b,c,d){var e;e=a.bH;Ba(d,e,b-Ce(d,e)|0);a.eK=b;return b;}
function SO(a){return a.eK;}
function Sh(a,b){return 0;}
function C$(){BQ.call(this);}
function WV(a,b,c,d){if(d.dp!=1&&b!=d.t)return (-1);OG(d);FD(d,0,b);return b;}
function Bo(){Y.call(this);this.T=0;}
function ACW(){var a=new Bo();Cl(a);return a;}
function Cl(a){Bh(a);a.T=1;}
function Yw(a,b,c,d){var e;if((b+a.bd()|0)>d.t){d.bI=1;return (-1);}e=a.M(b,c);if(e<0)return (-1);return a.c.a(b+e|0,c,d);}
function VB(a){return a.T;}
function XT(a,b){return 1;}
function NH(){Bo.call(this);}
function DM(a){var b=new NH();Qx(b,a);return b;}
function Qx(a,b){Gy(a,b);a.T=1;a.dk=1;a.T=0;}
function UU(a,b,c){return 0;}
function Tt(a,b,c,d,e){var f,g;f=e.t;g=e.bu;while(true){if(c<b)return (-1);if(c<f&&Cg(H(d,c))&&c>g&&BW(H(d,c-1|0))){c=c+(-1)|0;continue;}if(a.c.a(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function QX(a,b){return 0;}
function Bg(){var a=this;Y.call(a);a.K=null;a.br=null;a.J=0;}
function AA1(a,b){var c=new Bg();Da(c,a,b);return c;}
function Da(a,b,c){Bh(a);a.K=b;a.br=c;a.J=c.bH;}
function Wx(a,b,c,d){var e,f,g,h;if(a.K===null)return (-1);e=DP(d,a.J);CW(d,a.J,b);f=a.K.x;g=0;while(true){if(g>=f){CW(d,a.J,e);return (-1);}h=BL(a.K,g).a(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function R_(a,b){a.br.c=b;}
function Y2(a,b){var c;a:{if(a.K!==null){c=DX(a.K);while(true){if(!Eq(c))break a;if(!D3(c).R(b))continue;else return 1;}}}return 0;}
function Tg(a,b){return EC(b,a.J)>=0&&DP(b,a.J)==EC(b,a.J)?0:1;}
function Tl(a){var b,c,d,e;a.bc=1;if(a.br!==null&&!a.br.bc)Fg(a.br);a:{if(a.K!==null){b=a.K.x;c=0;while(true){if(c>=b)break a;d=BL(a.K,c);e=d.cl();if(e===null)e=d;else{d.bc=1;M4(a.K,c);O3(a.K,c,e);}if(!e.bc)e.b1();c=c+1|0;}}}if(a.c!==null)Fg(a);}
function E8(){Bg.call(this);}
function RW(a,b,c,d){var e,f,g,h;e=Ce(d,a.J);Ba(d,a.J,b);f=a.K.x;g=0;while(true){if(g>=f){Ba(d,a.J,e);return (-1);}h=BL(a.K,g).a(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function TT(a,b){return !Ce(b,a.J)?0:1;}
function Cq(){E8.call(this);}
function Um(a,b,c,d){var e,f,g;e=Ce(d,a.J);Ba(d,a.J,b);f=a.K.x;g=0;while(g<f){if(BL(a.K,g).a(b,c,d)>=0)return a.c.a(a.br.eK,c,d);g=g+1|0;}Ba(d,a.J,e);return (-1);}
function To(a,b){a.c=b;}
function GR(){Cq.call(this);}
function R4(a,b,c,d){var e,f;e=a.K.x;f=0;while(f<e){if(BL(a.K,f).a(b,c,d)>=0)return a.c.a(b,c,d);f=f+1|0;}return (-1);}
function WA(a,b){return 0;}
function I1(){Cq.call(this);}
function Sl(a,b,c,d){var e,f;e=a.K.x;f=0;while(true){if(f>=e)return a.c.a(b,c,d);if(BL(a.K,f).a(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function VN(a,b){return 0;}
function JF(){Cq.call(this);}
function Tf(a,b,c,d){var e,f,g,h;e=a.K.x;f=d.dI?0:d.bu;a:{g=a.c.a(b,c,d);if(g>=0){Ba(d,a.J,b);h=0;while(true){if(h>=e)break a;if(BL(a.K,h).bk(f,b,c,d)>=0){Ba(d,a.J,(-1));return g;}h=h+1|0;}}}return (-1);}
function YY(a,b){return 0;}
function Hm(){Cq.call(this);}
function Qd(a,b,c,d){var e,f;e=a.K.x;Ba(d,a.J,b);f=0;while(true){if(f>=e)return a.c.a(b,c,d);if(BL(a.K,f).bk(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function T9(a,b){return 0;}
function Ee(){Bg.call(this);this.bs=null;}
function ZG(a,b){var c=new Ee();MS(c,a,b);return c;}
function MS(a,b,c){Bh(a);a.bs=b;a.br=c;a.J=c.bH;}
function QD(a,b,c,d){var e,f;e=DP(d,a.J);CW(d,a.J,b);f=a.bs.a(b,c,d);if(f>=0)return f;CW(d,a.J,e);return (-1);}
function Uv(a,b,c,d,e){var f;f=a.bs.bk(b,c,d,e);if(f>=0)CW(e,a.J,f);return f;}
function YT(a,b){return a.bs.R(b);}
function Sd(a){var b;b=new G6;MS(b,a.bs,a.br);a.c=b;return b;}
function XM(a){var b;a.bc=1;if(a.br!==null&&!a.br.bc)Fg(a.br);if(a.bs!==null&&!a.bs.bc){b=a.bs.cl();if(b!==null){a.bs.bc=1;a.bs=b;}a.bs.b1();}}
function Gv(){var a=this;B.call(a);a.iO=null;a.d6=0;}
function CG(a){return a.d6;}
function Cc(){Gv.call(this);this.js=0;}
var ACX=null;var ACY=null;var ACZ=null;var AC0=null;var AC1=null;var AC2=null;var ABK=null;var AC3=null;var AC4=null;function Dv(a,b,c){var d=new Cc();O0(d,a,b,c);return d;}
function O0(a,b,c,d){a.iO=b;a.d6=c;a.js=d;}
function Of(){var b,c;ACX=Dv(C(110),0,0);ACY=Dv(C(111),1,1);ACZ=Dv(C(112),2,2);AC0=Dv(C(113),3,3);AC1=Dv(C(114),4,4);AC2=Dv(C(115),5,5);ABK=Dv(C(116),6,6);AC3=Dv(C(117),7,7);b=E(Cc,8);c=b.data;c[0]=ACX;c[1]=ACY;c[2]=ACZ;c[3]=AC0;c[4]=AC1;c[5]=AC2;c[6]=ABK;c[7]=AC3;AC4=b;}
function Fv(){B.call(this);this.gP=null;}
var ABN=null;function H7(a){return (a.gP.code!==null?$rt_str(a.gP.code):null);}
function K2(a,b){var c,d,e;c=b.cD;d=b.cK;b=H7(a);d=Mf(c,d);if(AC5===null)AC5=QY();a:{e=AC5;if(e.hasOwnProperty($rt_ustr(d))){d=e[$rt_ustr(d)];if(d.hasOwnProperty($rt_ustr(b))){d=d[$rt_ustr(b)];break a;}}if(e.hasOwnProperty($rt_ustr(c))){d=e[$rt_ustr(c)];if(d.hasOwnProperty($rt_ustr(b))){d=d[$rt_ustr(b)];break a;}}d=null;}return d!==null&&!C4((d.symbol!==null?$rt_str(d.symbol):null))?(d.symbol!==null?$rt_str(d.symbol):null):H7(a);}
function M6(){B.call(this);}
function LW(){B.call(this);}
function Gt(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function YZ(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=E(Hg,16384);d=c.data;e=$rt_createByteArray(16384);f=e.data;g=0;h=0;i=0;j=0;while(j<J(b)){k=Gt(H(b,j));if(k==64){j=j+1|0;k=Gt(H(b,j));l=0;m=1;n=0;while(n<3){j=j+1|0;l=l|CS(m,Gt(H(b,j)));m=m*64|0;n=n+1|0;}}else if(k<32)l=1;else{k=(k-32|0)<<24>>24;j=j+1|0;l=Gt(H(b,j));}if(!k&&l>=128){if(g>0){m=h+1|0;d[h]=VI(i,i+g|0,Ow(e,g));h=m;}i=i+(g+l|0)|0;g=0;}else{o=g+l|0;if(o<f.length)n=h;else{n=h+1|0;d[h]=VI(i,i+g|0,Ow(e,g));i=i+o|0;g=0;}while(true){m=l+(-1)|0;if(l<=0)break;o
=g+1|0;f[g]=k;g=o;l=m;}h=n;}j=j+1|0;}return OW(c,h);}
function Fa(){Bi.call(this);this.g6=0.0;}
function V5(a){return a.g6;}
function X8(a,b,c,d){return;}
function JR(){B.call(this);this.gd=0.0;}
function UD(a,b){return CM(b,a.gd);}
function JS(){B.call(this);this.hG=0.0;}
function R1(a,b){return CM(b,1.0/a.hG);}
function K3(){var a=this;B.call(a);a.d0=0;a.eb=null;a.E=null;}
function PH(a,b){var c=new K3();Vn(c,a,b);return c;}
function Vn(a,b,c){a.d0=b;a.eb=c;a.E=CA();}
function IZ(){B.call(this);}
function IY(){B.call(this);}
function Lf(){B.call(this);}
function L0(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(ACp());}return b.data.length;}
function L7(b,c){if(b===null){b=new CB;M(b);F(b);}if(b===D($rt_voidcls())){b=new X;M(b);F(b);}if(c>=0)return Xk(b.ct,c);b=new Ko;M(b);F(b);}
function Xk(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function ET(){Bc.call(this);}
function DL(){B.call(this);}
function K(){var a=this;DL.call(a);a.y=0;a.P=0;a.u=null;a.du=null;a.dV=null;a.v=0;}
var AC6=null;function AC7(){var a=new K();T(a);return a;}
function T(a){var b;b=new Ju;b.m=$rt_createIntArray(64);a.u=b;}
function Sp(a){return null;}
function Rf(a){return a.u;}
function KR(a){return !a.P?(Eg(a.u,0)>=2048?0:1):LT(a.u,0)>=2048?0:1;}
function WR(a){return a.v;}
function Vr(a){return a;}
function Lt(a){var b,c;if(a.dV===null){b=a.cb();c=new Ja;c.jB=a;c.gH=b;T(c);a.dV=c;CJ(a.dV,a.P);}return a.dV;}
function Ey(a){var b,c;if(a.du===null){b=a.cb();c=new I$;c.i2=a;c.g9=b;c.hu=a;T(c);a.du=c;CJ(a.du,a.y);a.du.v=a.v;}return a.du;}
function XH(a){return 0;}
function CJ(a,b){if(a.y^b){a.y=a.y?0:1;a.P=a.P?0:1;}if(!a.v)a.v=1;return a;}
function VC(a){return a.y;}
function Es(b,c){if(b.bE()!==null&&c.bE()!==null)return LG(b.bE(),c.bE());return 1;}
function Kf(b,c){return MY(OB(AC6,b),c);}
function MT(){AC6=new D4;}
function Mv(){var a=this;K.call(a);a.eB=0;a.gy=0;a.cB=0;a.fQ=0;a.bM=0;a.cy=0;a.r=null;a.H=null;}
function B8(){var a=new Mv();YH(a);return a;}
function WI(a,b){var c=new Mv();TE(c,a,b);return c;}
function YH(a){T(a);a.r=Y1();}
function TE(a,b,c){T(a);a.r=Y1();a.eB=b;a.gy=c;}
function BH(a,b){a:{if(a.eB){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.bM){GB(a.r,EA(b&65535));break a;}FM(a.r,EA(b&65535));break a;}if(a.gy&&b>128){a.cB=1;b=Dy(Ek(b));}}}if(!(!GJ(b)&&!Ij(b))){if(a.fQ)GB(a.u,b-55296|0);else FM(a.u,b-55296|0);}if(a.bM)GB(a.r,b);else FM(a.r,b);if(!a.v&&Gd(b))a.v=1;return a;}
function Pt(a,b){var c,d,e;if(!a.v&&b.v)a.v=1;if(a.fQ){if(!b.P)Dt(a.u,b.cb());else B3(a.u,b.cb());}else if(!b.P)Do(a.u,b.cb());else{Du(a.u,b.cb());B3(a.u,b.cb());a.P=a.P?0:1;a.fQ=1;}if(!a.cy&&b.bE()!==null){if(a.bM){if(!b.y)Dt(a.r,b.bE());else B3(a.r,b.bE());}else if(!b.y)Do(a.r,b.bE());else{Du(a.r,b.bE());B3(a.r,b.bE());a.y=a.y?0:1;a.bM=1;}}else{c=a.y;if(a.H!==null){d=a.H;if(!c){e=new H3;e.i4=a;e.hL=c;e.hl=d;e.hc=b;T(e);a.H=e;}else{e=new H4;e.j0=a;e.h9=c;e.hZ=d;e.hE=b;T(e);a.H=e;}}else{if(c&&!a.bM&&Gm(a.r))
{d=new H0;d.ip=a;d.h2=b;T(d);a.H=d;}else if(!c){d=new HY;d.fG=a;d.es=c;d.gZ=b;T(d);a.H=d;}else{d=new HZ;d.eU=a;d.eE=c;d.he=b;T(d);a.H=d;}a.cy=1;}}return a;}
function Bj(a,b,c){var d;if(b>c){d=new X;M(d);F(d);}a:{b:{if(!a.eB){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;BH(a,b);b=b+1|0;}}if(a.bM)K_(a.r,b,c+1|0);else EY(a.r,b,c+1|0);}return a;}
function KH(a,b){var c,d,e;if(!a.v&&b.v)a.v=1;if(b.cB)a.cB=1;if(!(a.P^b.P)){if(!a.P)Do(a.u,b.u);else B3(a.u,b.u);}else if(a.P)Dt(a.u,b.u);else{Du(a.u,b.u);B3(a.u,b.u);a.P=1;}if(!a.cy&&BT(b)!==null){if(!(a.y^b.y)){if(!a.y)Do(a.r,BT(b));else B3(a.r,BT(b));}else if(a.y)Dt(a.r,BT(b));else{Du(a.r,BT(b));B3(a.r,BT(b));a.y=1;}}else{c=a.y;if(a.H!==null){d=a.H;if(!c){e=new HT;e.iz=a;e.gV=c;e.hd=d;e.hB=b;T(e);a.H=e;}else{e=new Is;e.je=a;e.hy=c;e.gp=d;e.gA=b;T(e);a.H=e;}}else{if(!a.bM&&Gm(a.r)){if(!c){d=new H1;d.j7=a;d.hs
=b;T(d);a.H=d;}else{d=new H2;d.ji=a;d.hr=b;T(d);a.H=d;}}else if(!c){d=new H5;d.gX=a;d.gh=b;d.h1=c;T(d);a.H=d;}else{d=new H6;d.gs=a;d.gB=b;d.gF=c;T(d);a.H=d;}a.cy=1;}}}
function Jn(a,b){var c,d,e;if(!a.v&&b.v)a.v=1;if(b.cB)a.cB=1;if(!(a.P^b.P)){if(!a.P)B3(a.u,b.u);else Do(a.u,b.u);}else if(!a.P)Dt(a.u,b.u);else{Du(a.u,b.u);B3(a.u,b.u);a.P=0;}if(!a.cy&&BT(b)!==null){if(!(a.y^b.y)){if(!a.y)B3(a.r,BT(b));else Do(a.r,BT(b));}else if(!a.y)Dt(a.r,BT(b));else{Du(a.r,BT(b));B3(a.r,BT(b));a.y=0;}}else{c=a.y;if(a.H!==null){d=a.H;if(!c){e=new HV;e.i1=a;e.gY=c;e.gG=d;e.h8=b;T(e);a.H=e;}else{e=new HW;e.jp=a;e.gJ=c;e.gl=d;e.gU=b;T(e);a.H=e;}}else{if(!a.bM&&Gm(a.r)){if(!c){d=new HR;d.jl=
a;d.hb=b;T(d);a.H=d;}else{d=new HS;d.jZ=a;d.hh=b;T(d);a.H=d;}}else if(!c){d=new HX;d.ib=a;d.hI=b;d.gv=c;T(d);a.H=d;}else{d=new HQ;d.gu=a;d.gM=b;d.ia=c;T(d);a.H=d;}a.cy=1;}}}
function B0(a,b){if(a.H!==null)return a.y^a.H.g(b);return a.y^Cf(a.r,b);}
function BT(a){if(!a.cy)return a.r;return null;}
function Vf(a){return a.u;}
function Wd(a){var b,c;if(a.H!==null)return a;b=BT(a);c=new HU;c.iw=a;c.d8=b;T(c);return CJ(c,a.y);}
function Q5(a){var b,c;b=new P;Q(b);c=Eg(a.r,0);while(c>=0){Dd(b,Eb(c));O(b,124);c=Eg(a.r,c+1|0);}if(b.n>0)I3(b,b.n-1|0);return N(b);}
function VF(a){return a.cB;}
function Fp(){var a=this;Bc.call(a);a.jV=null;a.jG=null;}
function Cu(){Y.call(this);this.p=null;}
function AC8(a,b,c){var d=new Cu();B9(d,a,b,c);return d;}
function B9(a,b,c,d){Gy(a,c);a.p=b;a.dk=d;}
function YG(a){return a.p;}
function Ux(a,b){return !a.p.R(b)&&!a.c.R(b)?0:1;}
function WL(a,b){return 1;}
function Qr(a){var b;a.bc=1;if(a.c!==null&&!a.c.bc){b=a.c.cl();if(b!==null){a.c.bc=1;a.c=b;}a.c.b1();}if(a.p!==null){if(!a.p.bc){b=a.p.cl();if(b!==null){a.p.bc=1;a.p=b;}a.p.b1();}else if(a.p instanceof Ee&&a.p.br.e3)a.p=a.p.c;}}
function B2(){Cu.call(this);this.I=null;}
function ZP(a,b,c){var d=new B2();CT(d,a,b,c);return d;}
function CT(a,b,c,d){B9(a,b,c,d);a.I=b;}
function Qf(a,b,c,d){var e,f;e=0;a:{while((b+a.I.bd()|0)<=d.t){f=a.I.M(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.c.a(b,c,d);if(f>=0)break;b=b-a.I.bd()|0;e=e+(-1)|0;}return f;}
function C8(){B2.call(this);this.cp=null;}
function AAa(a,b,c,d){var e=new C8();Ki(e,a,b,c,d);return e;}
function Ki(a,b,c,d,e){CT(a,c,d,e);a.cp=b;}
function RS(a,b,c,d){var e,f,g,h;e=a.cp.b5;f=a.cp.bU;g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.I.bd()|0)>d.t)break a;h=a.I.M(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.c.a(b,c,d);if(h>=0)break;b=b-a.I.bd()|0;g=g+(-1)|0;}return h;}if((b+a.I.bd()|0)>d.t){d.bI=1;return (-1);}h=a.I.M(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function BR(){Cu.call(this);}
function QC(a,b,c,d){var e;if(!a.p.s(d))return a.c.a(b,c,d);e=a.p.a(b,c,d);if(e>=0)return e;return a.c.a(b,c,d);}
function CQ(){B2.call(this);}
function P2(a,b,c,d){var e;e=a.p.a(b,c,d);if(e<0)e=a.c.a(b,c,d);return e;}
function Y5(a,b){a.c=b;a.p.w(b);}
function Jb(){B2.call(this);}
function Yl(a,b,c,d){while((b+a.I.bd()|0)<=d.t&&a.I.M(b,c)>0){b=b+a.I.bd()|0;}return a.c.a(b,c,d);}
function DG(){B.call(this);}
var ABL=null;var ACV=null;var ABJ=null;var AC5=null;function Mf(b,c){var d;if(!C4(c)){d=new P;Q(d);G(d,b);G(d,C(48));G(d,c);b=N(d);}return b;}
function Uh(){return {"ksh":{"value":"ksh-Latn-DE"},"ksj":{"value":"ksj-Latn-ZZ"},"cch":{"value":"cch-Latn-NG"},"und-Khar":{"value":"pra-Khar-PK"},"gkn":{"value":"gkn-Latn-ZZ"},"ksr":{"value":"ksr-Latn-ZZ"},"und-Mani":{"value":"xmn-Mani-CN"},"gkp":{"value":"gkp-Latn-ZZ"},"xmf":{"value":"xmf-Geor-GE"},"ccp":{"value":"ccp-Cakm-BD"},"ted":{"value":"ted-Latn-ZZ"},"und-Mand":{"value":"myz-Mand-IR"},"ktb":{"value":"ktb-Ethi-ZZ"},"xmn":{"value":"xmn-Mani-CN"},"sd-Sind":{"value":"sd-Sind-IN"},"xmr":{"value":"xmr-Merc-SD"}
,"tem":{"value":"tem-Latn-SL"},"und-Mroo":{"value":"mro-Mroo-BD"},"teo":{"value":"teo-Latn-UG"},"tet":{"value":"tet-Latn-TL"},"ktm":{"value":"ktm-Latn-ZZ"},"glk":{"value":"glk-Arab-IR"},"kto":{"value":"kto-Latn-ZZ"},"und-Soyo":{"value":"cmg-Soyo-MN"},"xna":{"value":"xna-Narb-SA"},"tfi":{"value":"tfi-Latn-ZZ"},"kub":{"value":"kub-Latn-ZZ"},"kue":{"value":"kue-Latn-ZZ"},"kud":{"value":"kud-Latn-ZZ"},"xnr":{"value":"xnr-Deva-IN"},"ceb":{"value":"ceb-Latn-PH"},"kuj":{"value":"kuj-Latn-ZZ"},"kum":{"value":"kum-Cyrl-RU"}
,"kun":{"value":"kun-Latn-ZZ"},"gmm":{"value":"gmm-Latn-ZZ"},"kup":{"value":"kup-Latn-ZZ"},"kus":{"value":"kus-Latn-ZZ"},"gmv":{"value":"gmv-Ethi-ZZ"},"tgc":{"value":"tgc-Latn-ZZ"},"xog":{"value":"xog-Latn-UG"},"und-Arab-YT":{"value":"swb-Arab-YT"},"und-Latn-ET":{"value":"en-Latn-ET"},"xon":{"value":"xon-Latn-ZZ"},"ha-CM":{"value":"ha-Arab-CM"},"gnd":{"value":"gnd-Latn-ZZ"},"kvg":{"value":"kvg-Latn-ZZ"},"tgo":{"value":"tgo-Latn-ZZ"},"cfa":{"value":"cfa-Latn-ZZ"},"gng":{"value":"gng-Latn-ZZ"},"tgu":{"value":
"tgu-Latn-ZZ"},"und-Latn-GE":{"value":"ku-Latn-GE"},"kvr":{"value":"kvr-Latn-ID"},"kvx":{"value":"kvx-Arab-PK"},"und-Gujr":{"value":"gu-Gujr-IN"},"thl":{"value":"thl-Deva-NP"},"xpr":{"value":"xpr-Prti-IR"},"thq":{"value":"thq-Deva-NP"},"god":{"value":"god-Latn-ZZ"},"gof":{"value":"gof-Ethi-ZZ"},"kwj":{"value":"kwj-Latn-ZZ"},"ky-Arab":{"value":"ky-Arab-CN"},"thr":{"value":"thr-Deva-NP"},"goi":{"value":"goi-Latn-ZZ"},"cgg":{"value":"cgg-Latn-UG"},"kwo":{"value":"kwo-Latn-ZZ"},"gom":{"value":"gom-Deva-IN"},"gon":
{"value":"gon-Telu-IN"},"gos":{"value":"gos-Latn-NL"},"gor":{"value":"gor-Latn-ID"},"und-Latn-CY":{"value":"tr-Latn-CY"},"got":{"value":"got-Goth-UA"},"tif":{"value":"tif-Latn-ZZ"},"tig":{"value":"tig-Ethi-ER"},"kxa":{"value":"kxa-Latn-ZZ"},"kxc":{"value":"kxc-Ethi-ZZ"},"pag":{"value":"pag-Latn-PH"},"tik":{"value":"tik-Latn-ZZ"},"tim":{"value":"tim-Latn-ZZ"},"pal":{"value":"pal-Phli-IR"},"tio":{"value":"tio-Latn-ZZ"},"pam":{"value":"pam-Latn-PH"},"und-Marc":{"value":"bo-Marc-CN"},"pap":{"value":"pap-Latn-AW"}
,"und-Latn-CN":{"value":"za-Latn-CN"},"tiv":{"value":"tiv-Latn-NG"},"kxm":{"value":"kxm-Thai-TH"},"kxp":{"value":"kxp-Arab-PK"},"pau":{"value":"pau-Latn-PW"},"chk":{"value":"chk-Latn-FM"},"chm":{"value":"chm-Cyrl-RU"},"xrb":{"value":"xrb-Latn-ZZ"},"chp":{"value":"chp-Latn-CA"},"cho":{"value":"cho-Latn-US"},"kxw":{"value":"kxw-Latn-ZZ"},"und-Latn-DZ":{"value":"fr-Latn-DZ"},"chr":{"value":"chr-Cher-US"},"kxz":{"value":"kxz-Latn-ZZ"},"und-Batk":{"value":"bbc-Batk-ID"},"und-Bass":{"value":"bsq-Bass-LR"},"kye":{"value"
:"kye-Latn-ZZ"},"pbi":{"value":"pbi-Latn-ZZ"},"und-Deva-MU":{"value":"bho-Deva-MU"},"und-Sgnw":{"value":"ase-Sgnw-US"},"xsa":{"value":"xsa-Sarb-YE"},"kyx":{"value":"kyx-Latn-ZZ"},"xsi":{"value":"xsi-Latn-ZZ"},"pcd":{"value":"pcd-Latn-FR"},"und-Latn-AM":{"value":"ku-Latn-AM"},"xsm":{"value":"xsm-Latn-ZZ"},"tkl":{"value":"tkl-Latn-TK"},"und-Thai-CN":{"value":"lcp-Thai-CN"},"grb":{"value":"grb-Latn-ZZ"},"xsr":{"value":"xsr-Deva-NP"},"und-Latn-AF":{"value":"tk-Latn-AF"},"grc":{"value":"grc-Cprt-CY"},"tkr":{"value"
:"tkr-Latn-AZ"},"cja":{"value":"cja-Arab-KH"},"pcm":{"value":"pcm-Latn-NG"},"tkt":{"value":"tkt-Deva-NP"},"und-Olck":{"value":"sat-Olck-IN"},"kzr":{"value":"kzr-Latn-ZZ"},"cjm":{"value":"cjm-Cham-VN"},"grt":{"value":"grt-Beng-IN"},"und-Arab-TJ":{"value":"fa-Arab-TJ"},"und-Arab-TG":{"value":"apd-Arab-TG"},"und-Arab-TH":{"value":"mfa-Arab-TH"},"und-Deva-PK":{"value":"btv-Deva-PK"},"grw":{"value":"grw-Latn-ZZ"},"cjv":{"value":"cjv-Latn-ZZ"},"pdc":{"value":"pdc-Latn-US"},"tlf":{"value":"tlf-Latn-ZZ"},"und-Arab-TR":
{"value":"az-Arab-TR"},"ckb":{"value":"ckb-Arab-IQ"},"tly":{"value":"tly-Latn-AZ"},"pdt":{"value":"pdt-Latn-CA"},"tlx":{"value":"tlx-Latn-ZZ"},"ckl":{"value":"ckl-Latn-ZZ"},"cko":{"value":"cko-Latn-ZZ"},"gsw":{"value":"gsw-Latn-CH"},"ped":{"value":"ped-Latn-ZZ"},"tmh":{"value":"tmh-Latn-NE"},"cky":{"value":"cky-Latn-ZZ"},"kk-Arab":{"value":"kk-Arab-CN"},"und-Runr":{"value":"non-Runr-SE"},"cla":{"value":"cla-Latn-ZZ"},"peo":{"value":"peo-Xpeo-IR"},"tmy":{"value":"tmy-Latn-ZZ"},"pex":{"value":"pex-Latn-ZZ"},"ky-TR":
{"value":"ky-Latn-TR"},"tnh":{"value":"tnh-Latn-ZZ"},"guc":{"value":"guc-Latn-CO"},"gub":{"value":"gub-Latn-BR"},"gud":{"value":"gud-Latn-ZZ"},"pfl":{"value":"pfl-Latn-DE"},"cme":{"value":"cme-Latn-ZZ"},"cmg":{"value":"cmg-Soyo-MN"},"gur":{"value":"gur-Latn-GH"},"xwe":{"value":"xwe-Latn-ZZ"},"guw":{"value":"guw-Latn-ZZ"},"tof":{"value":"tof-Latn-ZZ"},"gux":{"value":"gux-Latn-ZZ"},"guz":{"value":"guz-Latn-KE"},"tog":{"value":"tog-Latn-MW"},"gvf":{"value":"gvf-Latn-ZZ"},"toq":{"value":"toq-Latn-ZZ"},"gvr":{"value"
:"gvr-Deva-NP"},"und-Guru":{"value":"pa-Guru-IN"},"gvs":{"value":"gvs-Latn-ZZ"},"tpi":{"value":"tpi-Latn-PG"},"tpm":{"value":"tpm-Latn-ZZ"},"und-Tfng":{"value":"zgh-Tfng-MA"},"gwc":{"value":"gwc-Arab-ZZ"},"und-Arab-PK":{"value":"ur-Arab-PK"},"phl":{"value":"phl-Arab-ZZ"},"und-Aghb":{"value":"lez-Aghb-RU"},"phn":{"value":"phn-Phnx-LB"},"gwi":{"value":"gwi-Latn-CA"},"tpz":{"value":"tpz-Latn-ZZ"},"cop":{"value":"cop-Copt-EG"},"gwt":{"value":"gwt-Arab-ZZ"},"lab":{"value":"lab-Lina-GR"},"lad":{"value":"lad-Hebr-IL"}
,"lah":{"value":"lah-Arab-PK"},"pil":{"value":"pil-Latn-ZZ"},"lag":{"value":"lag-Latn-TZ"},"tqo":{"value":"tqo-Latn-ZZ"},"laj":{"value":"laj-Latn-UG"},"pip":{"value":"pip-Latn-ZZ"},"und-Khmr":{"value":"km-Khmr-KH"},"las":{"value":"las-Latn-ZZ"},"sd-Deva":{"value":"sd-Deva-IN"},"und-Khoj":{"value":"sd-Khoj-IN"},"cps":{"value":"cps-Latn-PH"},"kk-AF":{"value":"kk-Arab-AF"},"und-Arab-MU":{"value":"ur-Arab-MU"},"lbe":{"value":"lbe-Cyrl-RU"},"und-Arab-NG":{"value":"ha-Arab-NG"},"gyi":{"value":"gyi-Latn-ZZ"},"tru":
{"value":"tru-Latn-TR"},"trw":{"value":"trw-Arab-ZZ"},"trv":{"value":"trv-Latn-TW"},"lbu":{"value":"lbu-Latn-ZZ"},"lbw":{"value":"lbw-Latn-ID"},"tsd":{"value":"tsd-Grek-GR"},"tsf":{"value":"tsf-Deva-NP"},"pka":{"value":"pka-Brah-IN"},"tsg":{"value":"tsg-Latn-PH"},"tsj":{"value":"tsj-Tibt-BT"},"und-Deva-FJ":{"value":"hif-Deva-FJ"},"pko":{"value":"pko-Latn-KE"},"lcm":{"value":"lcm-Latn-ZZ"},"crh":{"value":"crh-Cyrl-UA"},"lcp":{"value":"lcp-Thai-CN"},"tsw":{"value":"tsw-Latn-ZZ"},"crj":{"value":"crj-Cans-CA"},
"crl":{"value":"crl-Cans-CA"},"und-Arab-MN":{"value":"kk-Arab-MN"},"crk":{"value":"crk-Cans-CA"},"crm":{"value":"crm-Cans-CA"},"und-Arab-MM":{"value":"rhg-Arab-MM"},"pla":{"value":"pla-Latn-ZZ"},"tte":{"value":"tte-Latn-ZZ"},"crs":{"value":"crs-Latn-SC"},"ttd":{"value":"ttd-Latn-ZZ"},"ldb":{"value":"ldb-Latn-ZZ"},"ttj":{"value":"ttj-Latn-UG"},"kk-CN":{"value":"kk-Arab-CN"},"und-Yiii":{"value":"ii-Yiii-CN"},"tts":{"value":"tts-Thai-TH"},"csb":{"value":"csb-Latn-PL"},"ttr":{"value":"ttr-Latn-ZZ"},"ttt":{"value"
:"ttt-Latn-AZ"},"csw":{"value":"csw-Cans-CA"},"tuh":{"value":"tuh-Latn-ZZ"},"led":{"value":"led-Latn-ZZ"},"tul":{"value":"tul-Latn-ZZ"},"lee":{"value":"lee-Latn-ZZ"},"tum":{"value":"tum-Latn-MW"},"und-Arab-KH":{"value":"cja-Arab-KH"},"tuq":{"value":"tuq-Latn-ZZ"},"ctd":{"value":"ctd-Pauc-MM"},"lem":{"value":"lem-Latn-ZZ"},"lep":{"value":"lep-Lepc-IN"},"pms":{"value":"pms-Latn-IT"},"leq":{"value":"leq-Latn-ZZ"},"und-Pauc":{"value":"ctd-Pauc-MM"},"und-Sogo":{"value":"sog-Sogo-UZ"},"leu":{"value":"leu-Latn-ZZ"}
,"lez":{"value":"lez-Cyrl-RU"},"tvd":{"value":"tvd-Latn-ZZ"},"mn-CN":{"value":"mn-Mong-CN"},"sr-TR":{"value":"sr-Latn-TR"},"png":{"value":"png-Latn-ZZ"},"tvl":{"value":"tvl-Latn-TV"},"und-Brah":{"value":"pka-Brah-IN"},"und-Brai":{"value":"fr-Brai-FR"},"pnn":{"value":"pnn-Latn-ZZ"},"tvu":{"value":"tvu-Latn-ZZ"},"pnt":{"value":"pnt-Grek-GR"},"uz-CN":{"value":"uz-Cyrl-CN"},"ha-SD":{"value":"ha-Arab-SD"},"twh":{"value":"twh-Latn-ZZ"},"und-Takr":{"value":"doi-Takr-IN"},"lgg":{"value":"lgg-Latn-ZZ"},"pon":{"value"
:"pon-Latn-FM"},"twq":{"value":"twq-Latn-NE"},"und-Arab-ID":{"value":"ms-Arab-ID"},"und-Arab-IN":{"value":"ur-Arab-IN"},"txg":{"value":"txg-Tang-CN"},"yam":{"value":"yam-Latn-ZZ"},"und-Talu":{"value":"khb-Talu-CN"},"yao":{"value":"yao-Latn-MZ"},"yap":{"value":"yap-Latn-FM"},"yas":{"value":"yas-Latn-ZZ"},"yat":{"value":"yat-Latn-ZZ"},"ppo":{"value":"ppo-Latn-ZZ"},"yav":{"value":"yav-Latn-CM"},"yay":{"value":"yay-Latn-ZZ"},"yaz":{"value":"yaz-Latn-ZZ"},"und-Tale":{"value":"tdd-Tale-CN"},"ybb":{"value":"ybb-Latn-CM"}
,"yba":{"value":"yba-Latn-ZZ"},"tya":{"value":"tya-Latn-ZZ"},"lia":{"value":"lia-Latn-ZZ"},"lid":{"value":"lid-Latn-ZZ"},"und-Latn-TW":{"value":"trv-Latn-TW"},"lif":{"value":"lif-Deva-NP"},"lih":{"value":"lih-Latn-ZZ"},"lig":{"value":"lig-Latn-ZZ"},"lij":{"value":"lij-Latn-IT"},"hag":{"value":"hag-Latn-ZZ"},"und-Latn-TN":{"value":"fr-Latn-TN"},"tyv":{"value":"tyv-Cyrl-RU"},"yby":{"value":"yby-Latn-ZZ"},"und-Arab-GB":{"value":"ks-Arab-GB"},"hak":{"value":"hak-Hans-CN"},"und-Taml":{"value":"ta-Taml-IN"},"ham":
{"value":"ham-Latn-ZZ"},"lis":{"value":"lis-Lisu-CN"},"und-Latn-SY":{"value":"fr-Latn-SY"},"ky-Latn":{"value":"ky-Latn-TR"},"pra":{"value":"pra-Khar-PK"},"haw":{"value":"haw-Latn-US"},"haz":{"value":"haz-Arab-AF"},"ku-LB":{"value":"ku-Arab-LB"},"prd":{"value":"prd-Arab-IR"},"prg":{"value":"prg-Latn-001"},"tzm":{"value":"tzm-Latn-MA"},"hbb":{"value":"hbb-Latn-ZZ"},"und-Latn-UA":{"value":"pl-Latn-UA"},"ljp":{"value":"ljp-Latn-ID"},"und-Tang":{"value":"txg-Tang-CN"},"yue-Hans":{"value":"yue-Hans-CN"},"und-Latn-RU":
{"value":"krl-Latn-RU"},"lki":{"value":"lki-Arab-IR"},"pss":{"value":"pss-Latn-ZZ"},"lkt":{"value":"lkt-Latn-US"},"sr-RO":{"value":"sr-Latn-RO"},"und-Arab-CN":{"value":"ug-Arab-CN"},"lle":{"value":"lle-Latn-ZZ"},"und-Cyrl":{"value":"ru-Cyrl-RU"},"uz-AF":{"value":"uz-Arab-AF"},"yer":{"value":"yer-Latn-ZZ"},"und-Beng":{"value":"bn-Beng-BD"},"ptp":{"value":"ptp-Latn-ZZ"},"lln":{"value":"lln-Latn-ZZ"},"sr-RU":{"value":"sr-Latn-RU"},"hdy":{"value":"hdy-Ethi-ZZ"},"unr-NP":{"value":"unr-Deva-NP"},"und-Mend":{"value"
:"men-Mend-SL"},"lmn":{"value":"lmn-Telu-IN"},"lmp":{"value":"lmp-Latn-ZZ"},"lmo":{"value":"lmo-Latn-IT"},"puu":{"value":"puu-Latn-GA"},"und-Arab-CC":{"value":"ms-Arab-CC"},"pal-Phlp":{"value":"pal-Phlp-CN"},"ygr":{"value":"ygr-Latn-ZZ"},"ygw":{"value":"ygw-Latn-ZZ"},"lns":{"value":"lns-Latn-ZZ"},"ky-CN":{"value":"ky-Arab-CN"},"lnu":{"value":"lnu-Latn-ZZ"},"pwa":{"value":"pwa-Latn-ZZ"},"und-Mahj":{"value":"hi-Mahj-IN"},"rif-NL":{"value":"rif-Latn-NL"},"loj":{"value":"loj-Latn-ZZ"},"lol":{"value":"lol-Latn-CD"}
,"lok":{"value":"lok-Latn-ZZ"},"lor":{"value":"lor-Latn-ZZ"},"und-Sora":{"value":"srb-Sora-IN"},"los":{"value":"los-Latn-ZZ"},"loz":{"value":"loz-Latn-ZM"},"und-202":{"value":"en-Latn-NG"},"und-Latn-MR":{"value":"fr-Latn-MR"},"hhy":{"value":"hhy-Latn-ZZ"},"hia":{"value":"hia-Latn-ZZ"},"hif":{"value":"hif-Latn-FJ"},"dad":{"value":"dad-Latn-ZZ"},"hih":{"value":"hih-Latn-ZZ"},"hig":{"value":"hig-Latn-ZZ"},"daf":{"value":"daf-Latn-ZZ"},"ubu":{"value":"ubu-Latn-ZZ"},"dah":{"value":"dah-Latn-ZZ"},"hil":{"value":"hil-Latn-PH"}
,"dag":{"value":"dag-Latn-ZZ"},"und-Mero":{"value":"xmr-Mero-SD"},"dak":{"value":"dak-Latn-US"},"und-Merc":{"value":"xmr-Merc-SD"},"dar":{"value":"dar-Cyrl-RU"},"dav":{"value":"dav-Latn-KE"},"lrc":{"value":"lrc-Arab-IR"},"yko":{"value":"yko-Latn-ZZ"},"und-Latn-MK":{"value":"sq-Latn-MK"},"und-Latn-MM":{"value":"kac-Latn-MM"},"dbd":{"value":"dbd-Latn-ZZ"},"und-Latn-MO":{"value":"pt-Latn-MO"},"und-Latn-MA":{"value":"fr-Latn-MA"},"und-Bali":{"value":"ban-Bali-ID"},"und-Tavt":{"value":"blt-Tavt-VN"},"dbq":{"value"
:"dbq-Latn-ZZ"},"yle":{"value":"yle-Latn-ZZ"},"ylg":{"value":"ylg-Latn-ZZ"},"und-Maka":{"value":"mak-Maka-ID"},"yll":{"value":"yll-Latn-ZZ"},"udm":{"value":"udm-Cyrl-RU"},"dcc":{"value":"dcc-Arab-IN"},"yml":{"value":"yml-Latn-ZZ"},"hla":{"value":"hla-Latn-ZZ"},"und-Latn-IR":{"value":"tk-Latn-IR"},"ltg":{"value":"ltg-Latn-LV"},"und-Latn-KM":{"value":"fr-Latn-KM"},"ddn":{"value":"ddn-Latn-ZZ"},"hlu":{"value":"hlu-Hluw-TR"},"lua":{"value":"lua-Latn-CD"},"und-Bamu":{"value":"bax-Bamu-CM"},"hmd":{"value":"hmd-Plrd-CN"}
,"ded":{"value":"ded-Latn-ZZ"},"luo":{"value":"luo-Latn-KE"},"und-142":{"value":"zh-Hans-CN"},"und-143":{"value":"uz-Latn-UZ"},"den":{"value":"den-Latn-CA"},"und-Gran":{"value":"sa-Gran-IN"},"hmt":{"value":"hmt-Latn-ZZ"},"uga":{"value":"uga-Ugar-SY"},"luz":{"value":"luz-Arab-IR"},"luy":{"value":"luy-Latn-KE"},"und-145":{"value":"ar-Arab-SA"},"und-Cakm":{"value":"ccp-Cakm-BD"},"und-Dupl":{"value":"fr-Dupl-FR"},"yon":{"value":"yon-Latn-ZZ"},"ug-MN":{"value":"ug-Cyrl-MN"},"hne":{"value":"hne-Deva-IN"},"hnd":{"value"
:"hnd-Arab-PK"},"hnj":{"value":"hnj-Hmng-LA"},"hno":{"value":"hno-Arab-PK"},"hnn":{"value":"hnn-Latn-PH"},"ug-KZ":{"value":"ug-Cyrl-KZ"},"und-154":{"value":"en-Latn-GB"},"und-155":{"value":"de-Latn-DE"},"und-150":{"value":"ru-Cyrl-RU"},"und-151":{"value":"ru-Cyrl-RU"},"und-Sylo":{"value":"syl-Sylo-BD"},"hoc":{"value":"hoc-Deva-IN"},"dga":{"value":"dga-Latn-ZZ"},"lwl":{"value":"lwl-Thai-TH"},"und-Ital":{"value":"ett-Ital-IT"},"hoj":{"value":"hoj-Deva-IN"},"dgh":{"value":"dgh-Latn-ZZ"},"dgi":{"value":"dgi-Latn-ZZ"}
,"dgl":{"value":"dgl-Arab-ZZ"},"hot":{"value":"hot-Latn-ZZ"},"dgr":{"value":"dgr-Latn-CA"},"dgz":{"value":"dgz-Latn-ZZ"},"yrb":{"value":"yrb-Latn-ZZ"},"yre":{"value":"yre-Latn-ZZ"},"und-Lyci":{"value":"xlc-Lyci-TR"},"und-Cans":{"value":"cr-Cans-CA"},"und-Hluw":{"value":"hlu-Hluw-TR"},"und-Nand":{"value":"sa-Nand-IN"},"yrl":{"value":"yrl-Latn-BR"},"dia":{"value":"dia-Latn-ZZ"},"und-Grek":{"value":"el-Grek-GR"},"und-Mong":{"value":"mn-Mong-CN"},"und-Lydi":{"value":"xld-Lydi-TR"},"yss":{"value":"yss-Latn-ZZ"},
"und-Newa":{"value":"new-Newa-NP"},"lzh":{"value":"lzh-Hans-CN"},"dje":{"value":"dje-Latn-NE"},"lzz":{"value":"lzz-Latn-TR"},"uli":{"value":"uli-Latn-FM"},"hsb":{"value":"hsb-Latn-DE"},"und-Xsux":{"value":"akk-Xsux-IQ"},"hsn":{"value":"hsn-Hans-CN"},"und-Cari":{"value":"xcr-Cari-TR"},"und-Syrc":{"value":"syr-Syrc-IQ"},"yua":{"value":"yua-Latn-MX"},"yue":{"value":"yue-Hant-HK"},"umb":{"value":"umb-Latn-AO"},"yuj":{"value":"yuj-Latn-ZZ"},"yut":{"value":"yut-Latn-ZZ"},"yuw":{"value":"yuw-Latn-ZZ"},"und-Bopo":{"value"
:"zh-Bopo-TW"},"und":{"value":"en-Latn-US"},"und-Egyp":{"value":"egy-Egyp-EG"},"und-Tglg":{"value":"fil-Tglg-PH"},"unr":{"value":"unr-Beng-IN"},"hui":{"value":"hui-Latn-ZZ"},"und-Elba":{"value":"sq-Elba-AL"},"unx":{"value":"unx-Beng-IN"},"und-Narb":{"value":"xna-Narb-SA"},"pa-PK":{"value":"pa-Arab-PK"},"und-Hebr-CA":{"value":"yi-Hebr-CA"},"und-Geor":{"value":"ka-Geor-GE"},"und-Shrd":{"value":"sa-Shrd-IN"},"dnj":{"value":"dnj-Latn-CI"},"dob":{"value":"dob-Latn-ZZ"},"und-Mymr-TH":{"value":"mnw-Mymr-TH"},"doi":
{"value":"doi-Arab-IN"},"dop":{"value":"dop-Latn-ZZ"},"und-Sund":{"value":"su-Sund-ID"},"dow":{"value":"dow-Latn-ZZ"},"sr-ME":{"value":"sr-Latn-ME"},"und-Hung":{"value":"hu-Hung-HU"},"mad":{"value":"mad-Latn-ID"},"mag":{"value":"mag-Deva-IN"},"maf":{"value":"maf-Latn-CM"},"mai":{"value":"mai-Deva-IN"},"mak":{"value":"mak-Latn-ID"},"man":{"value":"man-Latn-GM"},"mas":{"value":"mas-Latn-KE"},"maw":{"value":"maw-Latn-ZZ"},"maz":{"value":"maz-Latn-MX"},"uri":{"value":"uri-Latn-ZZ"},"mbh":{"value":"mbh-Latn-ZZ"}
,"urt":{"value":"urt-Latn-ZZ"},"mbo":{"value":"mbo-Latn-ZZ"},"urw":{"value":"urw-Latn-ZZ"},"mbq":{"value":"mbq-Latn-ZZ"},"mbu":{"value":"mbu-Latn-ZZ"},"und-Hebr-GB":{"value":"yi-Hebr-GB"},"usa":{"value":"usa-Latn-ZZ"},"mbw":{"value":"mbw-Latn-ZZ"},"mci":{"value":"mci-Latn-ZZ"},"dri":{"value":"dri-Latn-ZZ"},"mcq":{"value":"mcq-Latn-ZZ"},"mcp":{"value":"mcp-Latn-ZZ"},"mcr":{"value":"mcr-Latn-ZZ"},"mcu":{"value":"mcu-Latn-ZZ"},"drs":{"value":"drs-Ethi-ZZ"},"mda":{"value":"mda-Latn-ZZ"},"mdf":{"value":"mdf-Cyrl-RU"}
,"mde":{"value":"mde-Arab-ZZ"},"mdh":{"value":"mdh-Latn-PH"},"dsb":{"value":"dsb-Latn-DE"},"mdj":{"value":"mdj-Latn-ZZ"},"utr":{"value":"utr-Latn-ZZ"},"mdr":{"value":"mdr-Latn-ID"},"mdx":{"value":"mdx-Ethi-ZZ"},"mee":{"value":"mee-Latn-ZZ"},"med":{"value":"med-Latn-ZZ"},"mek":{"value":"mek-Latn-ZZ"},"men":{"value":"men-Latn-SL"},"az-RU":{"value":"az-Cyrl-RU"},"mis-Medf":{"value":"mis-Medf-NG"},"mer":{"value":"mer-Latn-KE"},"dtm":{"value":"dtm-Latn-ML"},"meu":{"value":"meu-Latn-ZZ"},"met":{"value":"met-Latn-ZZ"}
,"dtp":{"value":"dtp-Latn-MY"},"dts":{"value":"dts-Latn-ZZ"},"uvh":{"value":"uvh-Latn-ZZ"},"dty":{"value":"dty-Deva-NP"},"mfa":{"value":"mfa-Arab-TH"},"uvl":{"value":"uvl-Latn-ZZ"},"mfe":{"value":"mfe-Latn-MU"},"dua":{"value":"dua-Latn-CM"},"dud":{"value":"dud-Latn-ZZ"},"duc":{"value":"duc-Latn-ZZ"},"mfn":{"value":"mfn-Latn-ZZ"},"dug":{"value":"dug-Latn-ZZ"},"mfo":{"value":"mfo-Latn-ZZ"},"mfq":{"value":"mfq-Latn-ZZ"},"und-Phag":{"value":"lzh-Phag-CN"},"dva":{"value":"dva-Latn-ZZ"},"mgh":{"value":"mgh-Latn-MZ"}
,"mgl":{"value":"mgl-Latn-ZZ"},"mgo":{"value":"mgo-Latn-CM"},"mgp":{"value":"mgp-Deva-NP"},"mgy":{"value":"mgy-Latn-TZ"},"zag":{"value":"zag-Latn-SD"},"mhi":{"value":"mhi-Latn-ZZ"},"mhl":{"value":"mhl-Latn-ZZ"},"dww":{"value":"dww-Latn-ZZ"},"mif":{"value":"mif-Latn-ZZ"},"und-Mymr-IN":{"value":"kht-Mymr-IN"},"min":{"value":"min-Latn-ID"},"mis":{"value":"mis-Hatr-IQ"},"ian":{"value":"ian-Latn-ZZ"},"miw":{"value":"miw-Latn-ZZ"},"iar":{"value":"iar-Latn-ZZ"},"uz-Arab":{"value":"uz-Arab-AF"},"ibb":{"value":"ibb-Latn-NG"}
,"iba":{"value":"iba-Latn-MY"},"dyo":{"value":"dyo-Latn-SN"},"dyu":{"value":"dyu-Latn-BF"},"iby":{"value":"iby-Latn-ZZ"},"zdj":{"value":"zdj-Arab-KM"},"ica":{"value":"ica-Latn-ZZ"},"mki":{"value":"mki-Arab-ZZ"},"und-Wcho":{"value":"nnp-Wcho-IN"},"ich":{"value":"ich-Latn-ZZ"},"mkl":{"value":"mkl-Latn-ZZ"},"dzg":{"value":"dzg-Latn-ZZ"},"mkp":{"value":"mkp-Latn-ZZ"},"zea":{"value":"zea-Latn-NL"},"mkw":{"value":"mkw-Latn-ZZ"},"mle":{"value":"mle-Latn-ZZ"},"idd":{"value":"idd-Latn-ZZ"},"idi":{"value":"idi-Latn-ZZ"}
,"lif-Limb":{"value":"lif-Limb-IN"},"mlp":{"value":"mlp-Latn-ZZ"},"mls":{"value":"mls-Latn-SD"},"idu":{"value":"idu-Latn-ZZ"},"quc":{"value":"quc-Latn-GT"},"qug":{"value":"qug-Latn-EC"},"und-Jamo":{"value":"ko-Jamo-KR"},"mmo":{"value":"mmo-Latn-ZZ"},"mmu":{"value":"mmu-Latn-ZZ"},"mmx":{"value":"mmx-Latn-ZZ"},"zgh":{"value":"zgh-Tfng-MA"},"mna":{"value":"mna-Latn-ZZ"},"mnf":{"value":"mnf-Latn-ZZ"},"ife":{"value":"ife-Latn-TG"},"mni":{"value":"mni-Beng-IN"},"mnw":{"value":"mnw-Mymr-MM"},"moa":{"value":"moa-Latn-ZZ"}
,"moe":{"value":"moe-Latn-CA"},"igb":{"value":"igb-Latn-ZZ"},"ige":{"value":"ige-Latn-ZZ"},"moh":{"value":"moh-Latn-CA"},"und-Hebr-SE":{"value":"yi-Hebr-SE"},"zhx":{"value":"zhx-Nshu-CN"},"mos":{"value":"mos-Latn-BF"},"und-Shaw":{"value":"en-Shaw-GB"},"zia":{"value":"zia-Latn-ZZ"},"mox":{"value":"mox-Latn-ZZ"},"vag":{"value":"vag-Latn-ZZ"},"vai":{"value":"vai-Vaii-LR"},"van":{"value":"van-Latn-ZZ"},"mpp":{"value":"mpp-Latn-ZZ"},"mpt":{"value":"mpt-Latn-ZZ"},"mps":{"value":"mps-Latn-ZZ"},"mpx":{"value":"mpx-Latn-ZZ"}
,"und-Hebr-US":{"value":"yi-Hebr-US"},"mql":{"value":"mql-Latn-ZZ"},"und-Hebr-UA":{"value":"yi-Hebr-UA"},"mrd":{"value":"mrd-Deva-NP"},"mrj":{"value":"mrj-Cyrl-RU"},"ijj":{"value":"ijj-Latn-ZZ"},"mro":{"value":"mro-Mroo-BD"},"und-Modi":{"value":"mr-Modi-IN"},"ebu":{"value":"ebu-Latn-KE"},"zlm":{"value":"zlm-Latn-TG"},"arc-Palm":{"value":"arc-Palm-SY"},"ikk":{"value":"ikk-Latn-ZZ"},"ikt":{"value":"ikt-Latn-CA"},"ikw":{"value":"ikw-Latn-ZZ"},"vec":{"value":"vec-Latn-IT"},"ikx":{"value":"ikx-Latn-ZZ"},"zmi":{"value"
:"zmi-Latn-MY"},"mtc":{"value":"mtc-Latn-ZZ"},"mtf":{"value":"mtf-Latn-ZZ"},"vep":{"value":"vep-Latn-RU"},"zh-Bopo":{"value":"zh-Bopo-TW"},"mti":{"value":"mti-Latn-ZZ"},"und-Ethi":{"value":"am-Ethi-ET"},"mtr":{"value":"mtr-Deva-IN"},"und-Thai-LA":{"value":"kdt-Thai-LA"},"ilo":{"value":"ilo-Latn-PH"},"zne":{"value":"zne-Latn-ZZ"},"mua":{"value":"mua-Latn-CM"},"und-Thai-KH":{"value":"kdt-Thai-KH"},"imo":{"value":"imo-Latn-ZZ"},"mus":{"value":"mus-Latn-US"},"mur":{"value":"mur-Latn-ZZ"},"mva":{"value":"mva-Latn-ZZ"}
,"inh":{"value":"inh-Cyrl-RU"},"mvn":{"value":"mvn-Latn-ZZ"},"efi":{"value":"efi-Latn-NG"},"mvy":{"value":"mvy-Arab-PK"},"und-Java":{"value":"jv-Java-ID"},"mwk":{"value":"mwk-Latn-ML"},"mwr":{"value":"mwr-Deva-IN"},"und-021":{"value":"en-Latn-US"},"egl":{"value":"egl-Latn-IT"},"mww":{"value":"mww-Hmnp-US"},"mwv":{"value":"mwv-Latn-ID"},"iou":{"value":"iou-Latn-ZZ"},"und-029":{"value":"es-Latn-CU"},"vic":{"value":"vic-Latn-SX"},"egy":{"value":"egy-Egyp-EG"},"und-Ugar":{"value":"uga-Ugar-SY"},"mxc":{"value":"mxc-Latn-ZW"}
,"raj":{"value":"raj-Deva-IN"},"rai":{"value":"rai-Latn-ZZ"},"rao":{"value":"rao-Latn-ZZ"},"viv":{"value":"viv-Latn-ZZ"},"mxm":{"value":"mxm-Latn-ZZ"},"und-034":{"value":"hi-Deva-IN"},"und-030":{"value":"zh-Hans-CN"},"und-039":{"value":"it-Latn-IT"},"und-035":{"value":"id-Latn-ID"},"ug-Cyrl":{"value":"ug-Cyrl-KZ"},"myk":{"value":"myk-Latn-ZZ"},"mym":{"value":"mym-Ethi-ZZ"},"aai":{"value":"aai-Latn-ZZ"},"aak":{"value":"aak-Latn-ZZ"},"myw":{"value":"myw-Latn-ZZ"},"myv":{"value":"myv-Cyrl-RU"},"myx":{"value":"myx-Latn-UG"}
,"myz":{"value":"myz-Mand-IR"},"und-Sinh":{"value":"si-Sinh-LK"},"und-Sind":{"value":"sd-Sind-IN"},"aau":{"value":"aau-Latn-ZZ"},"rcf":{"value":"rcf-Latn-RE"},"und-Orkh":{"value":"otk-Orkh-MN"},"mzk":{"value":"mzk-Latn-ZZ"},"mzn":{"value":"mzn-Arab-IR"},"iri":{"value":"iri-Latn-ZZ"},"mzm":{"value":"mzm-Latn-ZZ"},"mzp":{"value":"mzp-Latn-ZZ"},"und-053":{"value":"en-Latn-AU"},"abi":{"value":"abi-Latn-ZZ"},"und-054":{"value":"en-Latn-PG"},"mzw":{"value":"mzw-Latn-ZZ"},"mzz":{"value":"mzz-Latn-ZZ"},"abr":{"value"
:"abr-Latn-GH"},"abq":{"value":"abq-Cyrl-ZZ"},"abt":{"value":"abt-Latn-ZZ"},"und-057":{"value":"en-Latn-GU"},"aby":{"value":"aby-Latn-ZZ"},"eka":{"value":"eka-Latn-ZZ"},"vls":{"value":"vls-Latn-BE"},"ace":{"value":"ace-Latn-ID"},"acd":{"value":"acd-Latn-ZZ"},"ach":{"value":"ach-Latn-UG"},"vmf":{"value":"vmf-Latn-DE"},"eky":{"value":"eky-Kali-MM"},"rej":{"value":"rej-Latn-ID"},"rel":{"value":"rel-Latn-ZZ"},"ada":{"value":"ada-Latn-GH"},"res":{"value":"res-Latn-ZZ"},"vmw":{"value":"vmw-Latn-MZ"},"ade":{"value"
:"ade-Latn-ZZ"},"adj":{"value":"adj-Latn-ZZ"},"und-Hira":{"value":"ja-Hira-JP"},"adz":{"value":"adz-Latn-ZZ"},"ady":{"value":"ady-Cyrl-RU"},"ema":{"value":"ema-Latn-ZZ"},"und-Deva":{"value":"hi-Deva-IN"},"aeb":{"value":"aeb-Arab-TN"},"emi":{"value":"emi-Latn-ZZ"},"und-009":{"value":"en-Latn-AU"},"aey":{"value":"aey-Latn-ZZ"},"und-002":{"value":"en-Latn-NG"},"und-003":{"value":"en-Latn-US"},"und-005":{"value":"pt-Latn-BR"},"rgn":{"value":"rgn-Latn-IT"},"vot":{"value":"vot-Latn-RU"},"enn":{"value":"enn-Latn-ZZ"}
,"enq":{"value":"enq-Latn-ZZ"},"und-011":{"value":"en-Latn-NG"},"rhg":{"value":"rhg-Arab-MM"},"und-017":{"value":"sw-Latn-CD"},"und-018":{"value":"en-Latn-ZA"},"und-019":{"value":"en-Latn-US"},"und-013":{"value":"es-Latn-MX"},"und-014":{"value":"sw-Latn-TZ"},"und-015":{"value":"ar-Arab-EG"},"agc":{"value":"agc-Latn-ZZ"},"und-Zanb":{"value":"cmg-Zanb-MN"},"iwm":{"value":"iwm-Latn-ZZ"},"agd":{"value":"agd-Latn-ZZ"},"agg":{"value":"agg-Latn-ZZ"},"iws":{"value":"iws-Latn-ZZ"},"agm":{"value":"agm-Latn-ZZ"},"ago":
{"value":"ago-Latn-ZZ"},"agq":{"value":"agq-Latn-CM"},"ria":{"value":"ria-Latn-IN"},"rif":{"value":"rif-Tfng-MA"},"nac":{"value":"nac-Latn-ZZ"},"naf":{"value":"naf-Latn-ZZ"},"nak":{"value":"nak-Latn-ZZ"},"nan":{"value":"nan-Hans-CN"},"aha":{"value":"aha-Latn-ZZ"},"nap":{"value":"nap-Latn-IT"},"naq":{"value":"naq-Latn-NA"},"zza":{"value":"zza-Latn-TR"},"nas":{"value":"nas-Latn-ZZ"},"ahl":{"value":"ahl-Latn-ZZ"},"en-Shaw":{"value":"en-Shaw-GB"},"und-Copt":{"value":"cop-Copt-EG"},"aho":{"value":"aho-Ahom-IN"},
"vro":{"value":"vro-Latn-EE"},"rjs":{"value":"rjs-Deva-NP"},"nca":{"value":"nca-Latn-ZZ"},"ncf":{"value":"ncf-Latn-ZZ"},"nce":{"value":"nce-Latn-ZZ"},"nch":{"value":"nch-Latn-MX"},"izh":{"value":"izh-Latn-RU"},"izi":{"value":"izi-Latn-ZZ"},"rkt":{"value":"rkt-Beng-BD"},"nco":{"value":"nco-Latn-ZZ"},"eri":{"value":"eri-Latn-ZZ"},"ajg":{"value":"ajg-Latn-ZZ"},"ncu":{"value":"ncu-Latn-ZZ"},"ndc":{"value":"ndc-Latn-MZ"},"esg":{"value":"esg-Gonm-IN"},"nds":{"value":"nds-Latn-DE"},"akk":{"value":"akk-Xsux-IQ"},"esu":
{"value":"esu-Latn-US"},"neb":{"value":"neb-Latn-ZZ"},"rmf":{"value":"rmf-Latn-FI"},"und-061":{"value":"sm-Latn-WS"},"und-Limb":{"value":"lif-Limb-IN"},"vun":{"value":"vun-Latn-TZ"},"ff-Adlm":{"value":"ff-Adlm-GN"},"vut":{"value":"vut-Latn-ZZ"},"rmo":{"value":"rmo-Latn-CH"},"ala":{"value":"ala-Latn-ZZ"},"rmt":{"value":"rmt-Arab-IR"},"rmu":{"value":"rmu-Latn-SE"},"ali":{"value":"ali-Latn-ZZ"},"nex":{"value":"nex-Latn-ZZ"},"new":{"value":"new-Deva-NP"},"aln":{"value":"aln-Latn-XK"},"etr":{"value":"etr-Latn-ZZ"}
,"und-Rohg":{"value":"rhg-Rohg-MM"},"ett":{"value":"ett-Ital-IT"},"rna":{"value":"rna-Latn-ZZ"},"etu":{"value":"etu-Latn-ZZ"},"alt":{"value":"alt-Cyrl-RU"},"etx":{"value":"etx-Latn-ZZ"},"rng":{"value":"rng-Latn-MZ"},"und-Linb":{"value":"grc-Linb-GR"},"und-Lina":{"value":"lab-Lina-GR"},"und-Jpan":{"value":"ja-Jpan-JP"},"man-GN":{"value":"man-Nkoo-GN"},"nfr":{"value":"nfr-Latn-ZZ"},"amm":{"value":"amm-Latn-ZZ"},"und-Arab":{"value":"ar-Arab-EG"},"amo":{"value":"amo-Latn-NG"},"amn":{"value":"amn-Latn-ZZ"},"rob":
{"value":"rob-Latn-ID"},"amp":{"value":"amp-Latn-ZZ"},"ngb":{"value":"ngb-Latn-ZZ"},"rof":{"value":"rof-Latn-TZ"},"nga":{"value":"nga-Latn-ZZ"},"ngl":{"value":"ngl-Latn-MZ"},"roo":{"value":"roo-Latn-ZZ"},"anc":{"value":"anc-Latn-ZZ"},"ank":{"value":"ank-Latn-ZZ"},"ann":{"value":"ann-Latn-ZZ"},"und-Bhks":{"value":"sa-Bhks-IN"},"nhb":{"value":"nhb-Latn-ZZ"},"nhe":{"value":"nhe-Latn-MX"},"any":{"value":"any-Latn-ZZ"},"und-Orya":{"value":"or-Orya-IN"},"ewo":{"value":"ewo-Latn-CM"},"nhw":{"value":"nhw-Latn-MX"},
"aoj":{"value":"aoj-Latn-ZZ"},"aom":{"value":"aom-Latn-ZZ"},"zh-Hanb":{"value":"zh-Hanb-TW"},"jab":{"value":"jab-Latn-ZZ"},"nif":{"value":"nif-Latn-ZZ"},"aoz":{"value":"aoz-Latn-ID"},"nij":{"value":"nij-Latn-ID"},"nii":{"value":"nii-Latn-ZZ"},"zh-PH":{"value":"zh-Hant-PH"},"nin":{"value":"nin-Latn-ZZ"},"zh-Hant":{"value":"zh-Hant-TW"},"zh-PF":{"value":"zh-Hant-PF"},"und-Ahom":{"value":"aho-Ahom-IN"},"apd":{"value":"apd-Arab-TG"},"apc":{"value":"apc-Arab-ZZ"},"ape":{"value":"ape-Latn-ZZ"},"jam":{"value":"jam-Latn-JM"}
,"zh-PA":{"value":"zh-Hant-PA"},"niu":{"value":"niu-Latn-NU"},"niz":{"value":"niz-Latn-ZZ"},"niy":{"value":"niy-Latn-ZZ"},"ext":{"value":"ext-Latn-ES"},"apr":{"value":"apr-Latn-ZZ"},"aps":{"value":"aps-Latn-ZZ"},"apz":{"value":"apz-Latn-ZZ"},"rro":{"value":"rro-Latn-ZZ"},"njo":{"value":"njo-Latn-IN"},"jbo":{"value":"jbo-Latn-001"},"jbu":{"value":"jbu-Latn-ZZ"},"zh-MO":{"value":"zh-Hant-MO"},"nkg":{"value":"nkg-Latn-ZZ"},"zh-MY":{"value":"zh-Hant-MY"},"arc":{"value":"arc-Armi-IR"},"nko":{"value":"nko-Latn-ZZ"}
,"arh":{"value":"arh-Latn-ZZ"},"pa-Arab":{"value":"pa-Arab-PK"},"und-Mtei":{"value":"mni-Mtei-IN"},"arn":{"value":"arn-Latn-CL"},"aro":{"value":"aro-Latn-BO"},"und-Cyrl-RO":{"value":"bg-Cyrl-RO"},"arq":{"value":"arq-Arab-DZ"},"arz":{"value":"arz-Arab-EG"},"ary":{"value":"ary-Arab-MA"},"rtm":{"value":"rtm-Latn-FJ"},"asa":{"value":"asa-Latn-TZ"},"und-Grek-TR":{"value":"bgx-Grek-TR"},"ase":{"value":"ase-Sgnw-US"},"asg":{"value":"asg-Latn-ZZ"},"aso":{"value":"aso-Latn-ZZ"},"ast":{"value":"ast-Latn-ES"},"rue":{"value"
:"rue-Cyrl-UA"},"rug":{"value":"rug-Latn-SB"},"nmg":{"value":"nmg-Latn-CM"},"ata":{"value":"ata-Latn-ZZ"},"jen":{"value":"jen-Latn-ZZ"},"atg":{"value":"atg-Latn-ZZ"},"atj":{"value":"atj-Latn-CA"},"nmz":{"value":"nmz-Latn-ZZ"},"unr-Deva":{"value":"unr-Deva-NP"},"nnf":{"value":"nnf-Latn-ZZ"},"nnh":{"value":"nnh-Latn-CM"},"nnk":{"value":"nnk-Latn-ZZ"},"nnm":{"value":"nnm-Latn-ZZ"},"nnp":{"value":"nnp-Wcho-IN"},"az-IR":{"value":"az-Arab-IR"},"und-Adlm":{"value":"ff-Adlm-GN"},"az-IQ":{"value":"az-Arab-IQ"},"und-Nbat":
{"value":"arc-Nbat-JO"},"sd-Khoj":{"value":"sd-Khoj-IN"},"nod":{"value":"nod-Lana-TH"},"auy":{"value":"auy-Latn-ZZ"},"noe":{"value":"noe-Deva-IN"},"rwk":{"value":"rwk-Latn-TZ"},"und-Cyrl-MD":{"value":"uk-Cyrl-MD"},"rwo":{"value":"rwo-Latn-ZZ"},"non":{"value":"non-Runr-SE"},"nop":{"value":"nop-Latn-ZZ"},"jgk":{"value":"jgk-Latn-ZZ"},"jgo":{"value":"jgo-Latn-CM"},"und-Vaii":{"value":"vai-Vaii-LR"},"nou":{"value":"nou-Latn-ZZ"},"avl":{"value":"avl-Arab-ZZ"},"avn":{"value":"avn-Latn-ZZ"},"wae":{"value":"wae-Latn-CH"}
,"avt":{"value":"avt-Latn-ZZ"},"avu":{"value":"avu-Latn-ZZ"},"waj":{"value":"waj-Latn-ZZ"},"wal":{"value":"wal-Ethi-ET"},"wan":{"value":"wan-Latn-ZZ"},"zh-HK":{"value":"zh-Hant-HK"},"war":{"value":"war-Latn-PH"},"awa":{"value":"awa-Deva-IN"},"und-Plrd":{"value":"hmd-Plrd-CN"},"awb":{"value":"awb-Latn-ZZ"},"awo":{"value":"awo-Latn-ZZ"},"und-Knda":{"value":"kn-Knda-IN"},"zh-ID":{"value":"zh-Hant-ID"},"jib":{"value":"jib-Latn-ZZ"},"awx":{"value":"awx-Latn-ZZ"},"wbp":{"value":"wbp-Latn-AU"},"und-Sidd":{"value":
"sa-Sidd-IN"},"fab":{"value":"fab-Latn-ZZ"},"wbr":{"value":"wbr-Deva-IN"},"faa":{"value":"faa-Latn-ZZ"},"wbq":{"value":"wbq-Telu-IN"},"und-Kali":{"value":"eky-Kali-MM"},"fag":{"value":"fag-Latn-ZZ"},"nqo":{"value":"nqo-Nkoo-GN"},"fai":{"value":"fai-Latn-ZZ"},"ryu":{"value":"ryu-Kana-JP"},"fan":{"value":"fan-Latn-GQ"},"wci":{"value":"wci-Latn-ZZ"},"nrb":{"value":"nrb-Latn-ZZ"},"und-Phlp":{"value":"pal-Phlp-CN"},"ayb":{"value":"ayb-Latn-ZZ"},"und-Phli":{"value":"pal-Phli-IR"},"cu-Glag":{"value":"cu-Glag-BG"},
"und-Cyrl-XK":{"value":"sr-Cyrl-XK"},"az-Arab":{"value":"az-Arab-IR"},"und-Thai":{"value":"th-Thai-TH"},"nsk":{"value":"nsk-Cans-CA"},"nsn":{"value":"nsn-Latn-ZZ"},"nso":{"value":"nso-Latn-ZA"},"und-Thaa":{"value":"dv-Thaa-MV"},"und-Nshu":{"value":"zhx-Nshu-CN"},"nss":{"value":"nss-Latn-ZZ"},"zh-VN":{"value":"zh-Hant-VN"},"und-Hmnp":{"value":"mww-Hmnp-US"},"und-Kana":{"value":"ja-Kana-JP"},"und-Hmng":{"value":"hnj-Hmng-LA"},"wer":{"value":"wer-Latn-ZZ"},"zh-TW":{"value":"zh-Hant-TW"},"ntm":{"value":"ntm-Latn-ZZ"}
,"ntr":{"value":"ntr-Latn-ZZ"},"zh-US":{"value":"zh-Hant-US"},"und-Xpeo":{"value":"peo-Xpeo-IR"},"jmc":{"value":"jmc-Latn-TZ"},"nui":{"value":"nui-Latn-ZZ"},"jml":{"value":"jml-Deva-NP"},"nup":{"value":"nup-Latn-ZZ"},"und-Cyrl-SK":{"value":"uk-Cyrl-SK"},"nus":{"value":"nus-Latn-SS"},"nuv":{"value":"nuv-Latn-ZZ"},"nux":{"value":"nux-Latn-ZZ"},"zh-TH":{"value":"zh-Hant-TH"},"wgi":{"value":"wgi-Latn-ZZ"},"und-Phnx":{"value":"phn-Phnx-LB"},"und-Cyrl-TR":{"value":"kbd-Cyrl-TR"},"ffi":{"value":"ffi-Latn-ZZ"},"und-Elym":
{"value":"arc-Elym-IR"},"ffm":{"value":"ffm-Latn-ML"},"und-Rjng":{"value":"rej-Rjng-ID"},"whg":{"value":"whg-Latn-ZZ"},"nwb":{"value":"nwb-Latn-ZZ"},"zh-SR":{"value":"zh-Hant-SR"},"wib":{"value":"wib-Latn-ZZ"},"und-Hebr":{"value":"he-Hebr-IL"},"saf":{"value":"saf-Latn-GH"},"sah":{"value":"sah-Cyrl-RU"},"saq":{"value":"saq-Latn-KE"},"wiu":{"value":"wiu-Latn-ZZ"},"sas":{"value":"sas-Latn-ID"},"wiv":{"value":"wiv-Latn-ZZ"},"nxq":{"value":"nxq-Latn-CN"},"sat":{"value":"sat-Latn-IN"},"nxr":{"value":"nxr-Latn-ZZ"}
,"sav":{"value":"sav-Latn-SN"},"saz":{"value":"saz-Saur-IN"},"wja":{"value":"wja-Latn-ZZ"},"sba":{"value":"sba-Latn-ZZ"},"sbe":{"value":"sbe-Latn-ZZ"},"wji":{"value":"wji-Latn-ZZ"},"mn-Mong":{"value":"mn-Mong-CN"},"und-419":{"value":"es-Latn-419"},"fia":{"value":"fia-Arab-SD"},"sbp":{"value":"sbp-Latn-TZ"},"und-NO":{"value":"nb-Latn-NO"},"nyn":{"value":"nyn-Latn-UG"},"nym":{"value":"nym-Latn-TZ"},"und-NL":{"value":"nl-Latn-NL"},"und-NP":{"value":"ne-Deva-NP"},"fil":{"value":"fil-Latn-PH"},"bal":{"value":"bal-Arab-PK"}
,"ban":{"value":"ban-Latn-ID"},"bap":{"value":"bap-Deva-NP"},"fit":{"value":"fit-Latn-SE"},"bar":{"value":"bar-Latn-AT"},"bas":{"value":"bas-Latn-CM"},"bav":{"value":"bav-Latn-ZZ"},"bax":{"value":"bax-Bamu-CM"},"jra":{"value":"jra-Latn-ZZ"},"sck":{"value":"sck-Deva-IN"},"nzi":{"value":"nzi-Latn-GH"},"scl":{"value":"scl-Arab-ZZ"},"sco":{"value":"sco-Latn-GB"},"scn":{"value":"scn-Latn-IT"},"aa":{"value":"aa-Latn-ET"},"bba":{"value":"bba-Latn-ZZ"},"und-MN":{"value":"mn-Cyrl-MN"},"ab":{"value":"ab-Cyrl-GE"},"und-MM":
{"value":"my-Mymr-MM"},"und-Osma":{"value":"so-Osma-SO"},"bbc":{"value":"bbc-Latn-ID"},"scs":{"value":"scs-Latn-CA"},"und-ML":{"value":"bm-Latn-ML"},"bbb":{"value":"bbb-Latn-ZZ"},"und-MK":{"value":"mk-Cyrl-MK"},"ae":{"value":"ae-Avst-IR"},"und-MR":{"value":"ar-Arab-MR"},"af":{"value":"af-Latn-ZA"},"bbd":{"value":"bbd-Latn-ZZ"},"und-MQ":{"value":"fr-Latn-MQ"},"und-Wara":{"value":"hoc-Wara-IN"},"und-MO":{"value":"zh-Hant-MO"},"und-MV":{"value":"dv-Thaa-MV"},"und-MU":{"value":"mfe-Latn-MU"},"ak":{"value":"ak-Latn-GH"}
,"und-MT":{"value":"mt-Latn-MT"},"bbj":{"value":"bbj-Latn-CM"},"am":{"value":"am-Ethi-ET"},"und-MZ":{"value":"pt-Latn-MZ"},"und-MY":{"value":"ms-Latn-MY"},"und-MX":{"value":"es-Latn-MX"},"ar":{"value":"ar-Arab-EG"},"bbp":{"value":"bbp-Latn-ZZ"},"as":{"value":"as-Beng-IN"},"bbr":{"value":"bbr-Latn-ZZ"},"sdc":{"value":"sdc-Latn-IT"},"und-NC":{"value":"fr-Latn-NC"},"av":{"value":"av-Cyrl-RU"},"sdh":{"value":"sdh-Arab-IR"},"und-NA":{"value":"af-Latn-NA"},"ay":{"value":"ay-Latn-BO"},"az":{"value":"az-Latn-AZ"},"und-NE":
{"value":"ha-Latn-NE"},"und-NI":{"value":"es-Latn-NI"},"ba":{"value":"ba-Cyrl-RU"},"wls":{"value":"wls-Latn-WF"},"und-Kore":{"value":"ko-Kore-KR"},"und-LK":{"value":"si-Sinh-LK"},"be":{"value":"be-Cyrl-BY"},"bcf":{"value":"bcf-Latn-ZZ"},"bg":{"value":"bg-Cyrl-BG"},"bch":{"value":"bch-Latn-ZZ"},"bi":{"value":"bi-Latn-VU"},"und-LU":{"value":"fr-Latn-LU"},"bci":{"value":"bci-Latn-CI"},"und-LT":{"value":"lt-Latn-LT"},"und-LS":{"value":"st-Latn-LS"},"bm":{"value":"bm-Latn-ML"},"bcn":{"value":"bcn-Latn-ZZ"},"bn":
{"value":"bn-Beng-BD"},"und-LY":{"value":"ar-Arab-LY"},"bcm":{"value":"bcm-Latn-ZZ"},"bo":{"value":"bo-Tibt-CN"},"bco":{"value":"bco-Latn-ZZ"},"und-LV":{"value":"lv-Latn-LV"},"br":{"value":"br-Latn-FR"},"bcq":{"value":"bcq-Ethi-ZZ"},"bs":{"value":"bs-Latn-BA"},"bcu":{"value":"bcu-Latn-ZZ"},"sef":{"value":"sef-Latn-CI"},"und-MA":{"value":"ar-Arab-MA"},"sei":{"value":"sei-Latn-MX"},"seh":{"value":"seh-Latn-MZ"},"und-MF":{"value":"fr-Latn-MF"},"wmo":{"value":"wmo-Latn-ZZ"},"und-ME":{"value":"sr-Latn-ME"},"und-MD":
{"value":"ro-Latn-MD"},"und-MC":{"value":"fr-Latn-MC"},"ca":{"value":"ca-Latn-ES"},"und-MG":{"value":"mg-Latn-MG"},"ses":{"value":"ses-Latn-ML"},"ce":{"value":"ce-Cyrl-RU"},"und-Cyrl-BA":{"value":"sr-Cyrl-BA"},"bdd":{"value":"bdd-Latn-ZZ"},"und-KP":{"value":"ko-Kore-KP"},"ch":{"value":"ch-Latn-GU"},"und-KM":{"value":"ar-Arab-KM"},"und-KR":{"value":"ko-Kore-KR"},"co":{"value":"co-Latn-FR"},"flr":{"value":"flr-Latn-ZZ"},"und-KW":{"value":"ar-Arab-KW"},"wnc":{"value":"wnc-Latn-ZZ"},"und-Dogr":{"value":"doi-Dogr-IN"}
,"cr":{"value":"cr-Cans-CA"},"cs":{"value":"cs-Latn-CZ"},"cu":{"value":"cu-Cyrl-RU"},"und-KZ":{"value":"ru-Cyrl-KZ"},"cv":{"value":"cv-Cyrl-RU"},"wni":{"value":"wni-Arab-KM"},"und-LA":{"value":"lo-Laoo-LA"},"cy":{"value":"cy-Latn-GB"},"und-LB":{"value":"ar-Arab-LB"},"und-LI":{"value":"de-Latn-LI"},"da":{"value":"da-Latn-DK"},"und-Cyrl-AL":{"value":"mk-Cyrl-AL"},"wnu":{"value":"wnu-Latn-ZZ"},"de":{"value":"de-Latn-DE"},"bef":{"value":"bef-Latn-ZZ"},"beh":{"value":"beh-Latn-ZZ"},"und-JO":{"value":"ar-Arab-JO"}
,"bej":{"value":"bej-Arab-SD"},"fmp":{"value":"fmp-Latn-ZZ"},"jut":{"value":"jut-Latn-DK"},"bem":{"value":"bem-Latn-ZM"},"und-JP":{"value":"ja-Jpan-JP"},"wob":{"value":"wob-Latn-ZZ"},"sga":{"value":"sga-Ogam-IE"},"bet":{"value":"bet-Latn-ZZ"},"dv":{"value":"dv-Thaa-MV"},"bex":{"value":"bex-Latn-ZZ"},"bew":{"value":"bew-Latn-ID"},"bez":{"value":"bez-Latn-TZ"},"dz":{"value":"dz-Tibt-BT"},"ms-ID":{"value":"ms-Arab-ID"},"wos":{"value":"wos-Latn-ZZ"},"und-KH":{"value":"km-Khmr-KH"},"und-KG":{"value":"ky-Cyrl-KG"}
,"sgs":{"value":"sgs-Latn-LT"},"und-KE":{"value":"sw-Latn-KE"},"ee":{"value":"ee-Latn-GH"},"bfd":{"value":"bfd-Latn-CM"},"sgw":{"value":"sgw-Ethi-ZZ"},"und-IN":{"value":"hi-Deva-IN"},"und-IL":{"value":"he-Hebr-IL"},"el":{"value":"el-Grek-GR"},"sgz":{"value":"sgz-Latn-ZZ"},"und-IR":{"value":"fa-Arab-IR"},"en":{"value":"en-Latn-US"},"und-IQ":{"value":"ar-Arab-IQ"},"und-Perm":{"value":"kv-Perm-RU"},"eo":{"value":"eo-Latn-001"},"bfq":{"value":"bfq-Taml-IN"},"es":{"value":"es-Latn-ES"},"und-IT":{"value":"it-Latn-IT"}
,"et":{"value":"et-Latn-EE"},"und-IS":{"value":"is-Latn-IS"},"eu":{"value":"eu-Latn-ES"},"bft":{"value":"bft-Arab-PK"},"bfy":{"value":"bfy-Deva-IN"},"shi":{"value":"shi-Tfng-MA"},"shk":{"value":"shk-Latn-ZZ"},"shn":{"value":"shn-Mymr-MM"},"fod":{"value":"fod-Latn-ZZ"},"fa":{"value":"fa-Arab-IR"},"bgc":{"value":"bgc-Deva-IN"},"ff":{"value":"ff-Latn-SN"},"shu":{"value":"shu-Arab-ZZ"},"fi":{"value":"fi-Latn-FI"},"fj":{"value":"fj-Latn-FJ"},"fon":{"value":"fon-Latn-BJ"},"und-HM":{"value":"und-Latn-HM"},"und-HK":
{"value":"zh-Hant-HK"},"bgn":{"value":"bgn-Arab-PK"},"for":{"value":"for-Latn-ZZ"},"fo":{"value":"fo-Latn-FO"},"und-HN":{"value":"es-Latn-HN"},"fr":{"value":"fr-Latn-FR"},"und-HU":{"value":"hu-Latn-HU"},"und-HT":{"value":"ht-Latn-HT"},"ku-Arab":{"value":"ku-Arab-IQ"},"sid":{"value":"sid-Latn-ET"},"und-HR":{"value":"hr-Latn-HR"},"sig":{"value":"sig-Latn-ZZ"},"bgx":{"value":"bgx-Grek-TR"},"fy":{"value":"fy-Latn-NL"},"sim":{"value":"sim-Latn-ZZ"},"sil":{"value":"sil-Latn-ZZ"},"fpe":{"value":"fpe-Latn-ZZ"},"ga":
{"value":"ga-Latn-IE"},"bhb":{"value":"bhb-Deva-IN"},"gd":{"value":"gd-Latn-GB"},"und-ID":{"value":"id-Latn-ID"},"und-IC":{"value":"es-Latn-IC"},"bhg":{"value":"bhg-Latn-ZZ"},"und-GH":{"value":"ak-Latn-GH"},"bhi":{"value":"bhi-Deva-IN"},"und-GF":{"value":"fr-Latn-GF"},"und-GE":{"value":"ka-Geor-GE"},"bhk":{"value":"bhk-Latn-PH"},"und-GL":{"value":"kl-Latn-GL"},"gl":{"value":"gl-Latn-ES"},"bhl":{"value":"bhl-Latn-ZZ"},"gn":{"value":"gn-Latn-PY"},"bho":{"value":"bho-Deva-IN"},"und-GP":{"value":"fr-Latn-GP"},"und-GN":
{"value":"fr-Latn-GN"},"und-GT":{"value":"es-Latn-GT"},"und-GS":{"value":"und-Latn-GS"},"gu":{"value":"gu-Gujr-IN"},"und-GR":{"value":"el-Grek-GR"},"gv":{"value":"gv-Latn-IM"},"und-GQ":{"value":"es-Latn-GQ"},"und-Palm":{"value":"arc-Palm-SY"},"und-GW":{"value":"pt-Latn-GW"},"bhy":{"value":"bhy-Latn-ZZ"},"ha":{"value":"ha-Latn-NG"},"wrs":{"value":"wrs-Latn-ZZ"},"bib":{"value":"bib-Latn-ZZ"},"sjr":{"value":"sjr-Latn-ZZ"},"he":{"value":"he-Hebr-IL"},"big":{"value":"big-Latn-ZZ"},"hi":{"value":"hi-Deva-IN"},"und-Cyrl-GE":
{"value":"ab-Cyrl-GE"},"bik":{"value":"bik-Latn-PH"},"bin":{"value":"bin-Latn-NG"},"und-Cham":{"value":"cjm-Cham-VN"},"und-FI":{"value":"fi-Latn-FI"},"bim":{"value":"bim-Latn-ZZ"},"ho":{"value":"ho-Latn-PG"},"tg-PK":{"value":"tg-Arab-PK"},"und-FO":{"value":"fo-Latn-FO"},"bio":{"value":"bio-Latn-ZZ"},"fqs":{"value":"fqs-Latn-ZZ"},"hr":{"value":"hr-Latn-HR"},"skc":{"value":"skc-Latn-ZZ"},"wsg":{"value":"wsg-Gong-IN"},"biq":{"value":"biq-Latn-ZZ"},"ht":{"value":"ht-Latn-HT"},"hu":{"value":"hu-Latn-HU"},"und-FR":
{"value":"fr-Latn-FR"},"wsk":{"value":"wsk-Latn-ZZ"},"hy":{"value":"hy-Armn-AM"},"hz":{"value":"hz-Latn-NA"},"frc":{"value":"frc-Latn-US"},"ia":{"value":"ia-Latn-001"},"sks":{"value":"sks-Latn-ZZ"},"id":{"value":"id-Latn-ID"},"skr":{"value":"skr-Arab-PK"},"ig":{"value":"ig-Latn-NG"},"und-GA":{"value":"fr-Latn-GA"},"bji":{"value":"bji-Ethi-ZZ"},"ii":{"value":"ii-Yiii-CN"},"bjh":{"value":"bjh-Latn-ZZ"},"und-EE":{"value":"et-Latn-EE"},"ik":{"value":"ik-Latn-US"},"bjj":{"value":"bjj-Deva-IN"},"und-EC":{"value":
"es-Latn-EC"},"und-Cprt":{"value":"grc-Cprt-CY"},"frp":{"value":"frp-Latn-FR"},"in":{"value":"in-Latn-ID"},"bjo":{"value":"bjo-Latn-ZZ"},"frs":{"value":"frs-Latn-DE"},"io":{"value":"io-Latn-001"},"und-EH":{"value":"ar-Arab-EH"},"bjn":{"value":"bjn-Latn-ID"},"frr":{"value":"frr-Latn-DE"},"und-EG":{"value":"ar-Arab-EG"},"is":{"value":"is-Latn-IS"},"sld":{"value":"sld-Latn-ZZ"},"bjr":{"value":"bjr-Latn-ZZ"},"it":{"value":"it-Latn-IT"},"iu":{"value":"iu-Cans-CA"},"und-ER":{"value":"ti-Ethi-ER"},"bjt":{"value":"bjt-Latn-SN"}
,"iw":{"value":"iw-Hebr-IL"},"und-Tirh":{"value":"mai-Tirh-IN"},"sli":{"value":"sli-Latn-PL"},"und-EU":{"value":"en-Latn-GB"},"wtm":{"value":"wtm-Deva-IN"},"sll":{"value":"sll-Latn-ZZ"},"und-ET":{"value":"am-Ethi-ET"},"bjz":{"value":"bjz-Latn-ZZ"},"und-ES":{"value":"es-Latn-ES"},"und-EZ":{"value":"de-Latn-EZ"},"ja":{"value":"ja-Jpan-JP"},"zh-GF":{"value":"zh-Hant-GF"},"bkc":{"value":"bkc-Latn-ZZ"},"zh-GB":{"value":"zh-Hant-GB"},"und-Cyrl-GR":{"value":"mk-Cyrl-GR"},"ji":{"value":"ji-Hebr-UA"},"und-DE":{"value"
:"de-Latn-DE"},"sly":{"value":"sly-Latn-ID"},"bkm":{"value":"bkm-Latn-CM"},"sma":{"value":"sma-Latn-SE"},"bkq":{"value":"bkq-Latn-ZZ"},"und-DK":{"value":"da-Latn-DK"},"und-DJ":{"value":"aa-Latn-DJ"},"bkv":{"value":"bkv-Latn-ZZ"},"jv":{"value":"jv-Latn-ID"},"bku":{"value":"bku-Latn-PH"},"jw":{"value":"jw-Latn-ID"},"und-DO":{"value":"es-Latn-DO"},"smj":{"value":"smj-Latn-SE"},"smn":{"value":"smn-Latn-FI"},"ka":{"value":"ka-Geor-GE"},"smq":{"value":"smq-Latn-ZZ"},"wuu":{"value":"wuu-Hans-CN"},"smp":{"value":"smp-Samr-IL"}
,"sms":{"value":"sms-Latn-FI"},"wuv":{"value":"wuv-Latn-ZZ"},"und-DZ":{"value":"ar-Arab-DZ"},"kg":{"value":"kg-Latn-CD"},"und-EA":{"value":"es-Latn-EA"},"ki":{"value":"ki-Latn-KE"},"kj":{"value":"kj-Latn-NA"},"kk":{"value":"kk-Cyrl-KZ"},"man-Nkoo":{"value":"man-Nkoo-GN"},"und-CD":{"value":"sw-Latn-CD"},"kl":{"value":"kl-Latn-GL"},"und-Telu":{"value":"te-Telu-IN"},"km":{"value":"km-Khmr-KH"},"kn":{"value":"kn-Knda-IN"},"ko":{"value":"ko-Kore-KR"},"und-CH":{"value":"de-Latn-CH"},"und-CG":{"value":"fr-Latn-CG"}
,"und-CF":{"value":"fr-Latn-CF"},"kr":{"value":"kr-Latn-ZZ"},"ks":{"value":"ks-Arab-IN"},"und-CL":{"value":"es-Latn-CL"},"snc":{"value":"snc-Latn-ZZ"},"ku":{"value":"ku-Latn-TR"},"blt":{"value":"blt-Tavt-VN"},"kv":{"value":"kv-Cyrl-RU"},"und-CI":{"value":"fr-Latn-CI"},"kw":{"value":"kw-Latn-GB"},"und-CP":{"value":"und-Latn-CP"},"und-CO":{"value":"es-Latn-CO"},"ky":{"value":"ky-Cyrl-KG"},"und-CN":{"value":"zh-Hans-CN"},"und-CM":{"value":"fr-Latn-CM"},"snk":{"value":"snk-Latn-ML"},"fub":{"value":"fub-Arab-CM"}
,"und-CR":{"value":"es-Latn-CR"},"fud":{"value":"fud-Latn-WF"},"snp":{"value":"snp-Latn-ZZ"},"la":{"value":"la-Latn-VA"},"und-CW":{"value":"pap-Latn-CW"},"fuf":{"value":"fuf-Latn-GN"},"lb":{"value":"lb-Latn-LU"},"und-CV":{"value":"pt-Latn-CV"},"fue":{"value":"fue-Latn-ZZ"},"und-CU":{"value":"es-Latn-CU"},"fuh":{"value":"fuh-Latn-ZZ"},"und-CZ":{"value":"cs-Latn-CZ"},"lg":{"value":"lg-Latn-UG"},"und-CY":{"value":"el-Grek-CY"},"bmh":{"value":"bmh-Latn-ZZ"},"snx":{"value":"snx-Latn-ZZ"},"li":{"value":"li-Latn-NL"}
,"sny":{"value":"sny-Latn-ZZ"},"wwa":{"value":"wwa-Latn-ZZ"},"bmk":{"value":"bmk-Latn-ZZ"},"und-Cher":{"value":"chr-Cher-US"},"fur":{"value":"fur-Latn-IT"},"ln":{"value":"ln-Latn-CD"},"und-BA":{"value":"bs-Latn-BA"},"fuq":{"value":"fuq-Latn-NE"},"lo":{"value":"lo-Laoo-LA"},"und-BG":{"value":"bg-Cyrl-BG"},"und-BF":{"value":"fr-Latn-BF"},"fuv":{"value":"fuv-Latn-NG"},"und-BE":{"value":"nl-Latn-BE"},"bmq":{"value":"bmq-Latn-ML"},"und-BD":{"value":"bn-Beng-BD"},"lt":{"value":"lt-Latn-LT"},"lu":{"value":"lu-Latn-CD"}
,"und-BJ":{"value":"fr-Latn-BJ"},"lv":{"value":"lv-Latn-LV"},"ogc":{"value":"ogc-Latn-ZZ"},"sog":{"value":"sog-Sogd-UZ"},"und-BI":{"value":"rn-Latn-BI"},"bmu":{"value":"bmu-Latn-ZZ"},"fuy":{"value":"fuy-Latn-ZZ"},"und-BH":{"value":"ar-Arab-BH"},"und-BO":{"value":"es-Latn-BO"},"und-BN":{"value":"ms-Latn-BN"},"sok":{"value":"sok-Latn-ZZ"},"und-BL":{"value":"fr-Latn-BL"},"und-BR":{"value":"pt-Latn-BR"},"und-BQ":{"value":"pap-Latn-BQ"},"soq":{"value":"soq-Latn-ZZ"},"und-BV":{"value":"und-Latn-BV"},"und-BT":{"value"
:"dz-Tibt-BT"},"sou":{"value":"sou-Thai-TH"},"bng":{"value":"bng-Latn-ZZ"},"mg":{"value":"mg-Latn-MG"},"und-BY":{"value":"be-Cyrl-BY"},"und-Glag":{"value":"cu-Glag-BG"},"mh":{"value":"mh-Latn-MH"},"mi":{"value":"mi-Latn-NZ"},"soy":{"value":"soy-Latn-ZZ"},"mk":{"value":"mk-Cyrl-MK"},"ml":{"value":"ml-Mlym-IN"},"bnm":{"value":"bnm-Latn-ZZ"},"mn":{"value":"mn-Cyrl-MN"},"und-Prti":{"value":"xpr-Prti-IR"},"fvr":{"value":"fvr-Latn-SD"},"und-AF":{"value":"fa-Arab-AF"},"bnp":{"value":"bnp-Latn-ZZ"},"mr":{"value":"mr-Deva-IN"}
,"und-AE":{"value":"ar-Arab-AE"},"ms":{"value":"ms-Latn-MY"},"spd":{"value":"spd-Latn-ZZ"},"und-AD":{"value":"ca-Latn-AD"},"mt":{"value":"mt-Latn-MT"},"my":{"value":"my-Mymr-MM"},"zh-BN":{"value":"zh-Hant-BN"},"und-AM":{"value":"hy-Armn-AM"},"spl":{"value":"spl-Latn-ZZ"},"und-AL":{"value":"sq-Latn-AL"},"und-AR":{"value":"es-Latn-AR"},"und-AQ":{"value":"und-Latn-AQ"},"na":{"value":"na-Latn-NR"},"und-AO":{"value":"pt-Latn-AO"},"nb":{"value":"nb-Latn-NO"},"nd":{"value":"nd-Latn-ZW"},"und-AT":{"value":"de-Latn-AT"}
,"ne":{"value":"ne-Deva-NP"},"sps":{"value":"sps-Latn-ZZ"},"und-AS":{"value":"sm-Latn-AS"},"und-AZ":{"value":"az-Latn-AZ"},"ng":{"value":"ng-Latn-NA"},"und-AX":{"value":"sv-Latn-AX"},"und-AW":{"value":"nl-Latn-AW"},"boj":{"value":"boj-Latn-ZZ"},"nl":{"value":"nl-Latn-NL"},"bon":{"value":"bon-Latn-ZZ"},"nn":{"value":"nn-Latn-NO"},"bom":{"value":"bom-Latn-ZZ"},"no":{"value":"no-Latn-NO"},"nr":{"value":"nr-Latn-ZA"},"arc-Nbat":{"value":"arc-Nbat-JO"},"und-Medf":{"value":"mis-Medf-NG"},"nv":{"value":"nv-Latn-US"}
,"kaa":{"value":"kaa-Cyrl-UZ"},"ny":{"value":"ny-Latn-MW"},"kac":{"value":"kac-Latn-MM"},"kab":{"value":"kab-Latn-DZ"},"kad":{"value":"kad-Latn-ZZ"},"kai":{"value":"kai-Latn-ZZ"},"oc":{"value":"oc-Latn-FR"},"zh-AU":{"value":"zh-Hant-AU"},"kaj":{"value":"kaj-Latn-NG"},"kam":{"value":"kam-Latn-KE"},"und-Tagb":{"value":"tbw-Tagb-PH"},"kao":{"value":"kao-Latn-ML"},"und-Ogam":{"value":"sga-Ogam-IE"},"om":{"value":"om-Latn-ET"},"srb":{"value":"srb-Sora-IN"},"or":{"value":"or-Orya-IN"},"tg-Arab":{"value":"tg-Arab-PK"}
,"os":{"value":"os-Cyrl-GE"},"und-Sogd":{"value":"sog-Sogd-UZ"},"bpy":{"value":"bpy-Beng-IN"},"kbd":{"value":"kbd-Cyrl-RU"},"srn":{"value":"srn-Latn-SR"},"pa":{"value":"pa-Guru-IN"},"srr":{"value":"srr-Latn-SN"},"bqc":{"value":"bqc-Latn-ZZ"},"und-Kthi":{"value":"bho-Kthi-IN"},"kbm":{"value":"kbm-Latn-ZZ"},"kbp":{"value":"kbp-Latn-ZZ"},"srx":{"value":"srx-Deva-IN"},"bqi":{"value":"bqi-Arab-IR"},"kbq":{"value":"kbq-Latn-ZZ"},"pl":{"value":"pl-Latn-PL"},"bqp":{"value":"bqp-Latn-ZZ"},"kbx":{"value":"kbx-Latn-ZZ"}
,"kby":{"value":"kby-Arab-NE"},"ps":{"value":"ps-Arab-AF"},"pt":{"value":"pt-Latn-BR"},"ssd":{"value":"ssd-Latn-ZZ"},"und-Nkoo":{"value":"man-Nkoo-GN"},"bqv":{"value":"bqv-Latn-CI"},"ssg":{"value":"ssg-Latn-ZZ"},"und-Mymr":{"value":"my-Mymr-MM"},"kcg":{"value":"kcg-Latn-NG"},"bra":{"value":"bra-Deva-IN"},"kck":{"value":"kck-Latn-ZW"},"kcl":{"value":"kcl-Latn-ZZ"},"okr":{"value":"okr-Latn-ZZ"},"ssy":{"value":"ssy-Latn-ER"},"brh":{"value":"brh-Arab-PK"},"okv":{"value":"okv-Latn-ZZ"},"kct":{"value":"kct-Latn-ZZ"}
,"und-Hani":{"value":"zh-Hani-CN"},"und-Bugi":{"value":"bug-Bugi-ID"},"und-Hang":{"value":"ko-Hang-KR"},"qu":{"value":"qu-Latn-PE"},"brx":{"value":"brx-Deva-IN"},"und-Samr":{"value":"smp-Samr-IL"},"brz":{"value":"brz-Latn-ZZ"},"stk":{"value":"stk-Latn-ZZ"},"und-Hano":{"value":"hnn-Hano-PH"},"kde":{"value":"kde-Latn-TZ"},"kdh":{"value":"kdh-Arab-TG"},"stq":{"value":"stq-Latn-DE"},"kdl":{"value":"kdl-Latn-ZZ"},"bsj":{"value":"bsj-Latn-ZZ"},"und-Hanb":{"value":"zh-Hanb-TW"},"kdt":{"value":"kdt-Thai-TH"},"rm":{"value"
:"rm-Latn-CH"},"rn":{"value":"rn-Latn-BI"},"ro":{"value":"ro-Latn-RO"},"sua":{"value":"sua-Latn-ZZ"},"und-Deva-BT":{"value":"ne-Deva-BT"},"bsq":{"value":"bsq-Bass-LR"},"bst":{"value":"bst-Ethi-ZZ"},"sue":{"value":"sue-Latn-ZZ"},"bss":{"value":"bss-Latn-CM"},"ru":{"value":"ru-Cyrl-RU"},"und-Buhd":{"value":"bku-Buhd-PH"},"rw":{"value":"rw-Latn-RW"},"kea":{"value":"kea-Latn-CV"},"suk":{"value":"suk-Latn-TZ"},"grc-Linb":{"value":"grc-Linb-GR"},"sa":{"value":"sa-Deva-IN"},"sc":{"value":"sc-Latn-IT"},"sus":{"value"
:"sus-Latn-GN"},"sd":{"value":"sd-Arab-PK"},"sur":{"value":"sur-Latn-ZZ"},"se":{"value":"se-Latn-NO"},"sg":{"value":"sg-Latn-CF"},"ken":{"value":"ken-Latn-CM"},"si":{"value":"si-Sinh-LK"},"und-Hant":{"value":"zh-Hant-TW"},"und-Hans":{"value":"zh-Hans-CN"},"sk":{"value":"sk-Latn-SK"},"sl":{"value":"sl-Latn-SI"},"sm":{"value":"sm-Latn-WS"},"sn":{"value":"sn-Latn-ZW"},"bto":{"value":"bto-Latn-PH"},"so":{"value":"so-Latn-SO"},"sq":{"value":"sq-Latn-AL"},"sr":{"value":"sr-Cyrl-RS"},"ss":{"value":"ss-Latn-ZA"},"kez":
{"value":"kez-Latn-ZZ"},"st":{"value":"st-Latn-ZA"},"su":{"value":"su-Latn-ID"},"btt":{"value":"btt-Latn-ZZ"},"sv":{"value":"sv-Latn-SE"},"sw":{"value":"sw-Latn-TZ"},"btv":{"value":"btv-Deva-PK"},"ong":{"value":"ong-Latn-ZZ"},"ta":{"value":"ta-Taml-IN"},"onn":{"value":"onn-Latn-ZZ"},"bua":{"value":"bua-Cyrl-RU"},"bud":{"value":"bud-Latn-ZZ"},"buc":{"value":"buc-Latn-YT"},"te":{"value":"te-Telu-IN"},"tg":{"value":"tg-Cyrl-TJ"},"th":{"value":"th-Thai-TH"},"und-Gong":{"value":"wsg-Gong-IN"},"bug":{"value":"bug-Latn-ID"}
,"kfo":{"value":"kfo-Latn-CI"},"ons":{"value":"ons-Latn-ZZ"},"ti":{"value":"ti-Ethi-ET"},"kfr":{"value":"kfr-Deva-IN"},"tk":{"value":"tk-Latn-TM"},"tl":{"value":"tl-Latn-PH"},"und-Lisu":{"value":"lis-Lisu-CN"},"buk":{"value":"buk-Latn-ZZ"},"tn":{"value":"tn-Latn-ZA"},"bum":{"value":"bum-Latn-CM"},"to":{"value":"to-Latn-TO"},"buo":{"value":"buo-Latn-ZZ"},"swc":{"value":"swc-Latn-CD"},"tr":{"value":"tr-Latn-TR"},"und-Gonm":{"value":"esg-Gonm-IN"},"kfy":{"value":"kfy-Deva-IN"},"swb":{"value":"swb-Arab-YT"},"ts":
{"value":"ts-Latn-ZA"},"tt":{"value":"tt-Cyrl-RU"},"bus":{"value":"bus-Latn-ZZ"},"swg":{"value":"swg-Latn-DE"},"buu":{"value":"buu-Latn-ZZ"},"ty":{"value":"ty-Latn-PF"},"kge":{"value":"kge-Latn-ID"},"kgf":{"value":"kgf-Latn-ZZ"},"swp":{"value":"swp-Latn-ZZ"},"bvb":{"value":"bvb-Latn-GQ"},"ug":{"value":"ug-Arab-CN"},"swv":{"value":"swv-Deva-IN"},"kgp":{"value":"kgp-Latn-BR"},"uk":{"value":"uk-Cyrl-UA"},"ur":{"value":"ur-Arab-PK"},"kk-IR":{"value":"kk-Arab-IR"},"khb":{"value":"khb-Talu-CN"},"kha":{"value":"kha-Latn-IN"}
,"uz":{"value":"uz-Latn-UZ"},"sxn":{"value":"sxn-Latn-ID"},"xav":{"value":"xav-Latn-BR"},"opm":{"value":"opm-Latn-ZZ"},"bwd":{"value":"bwd-Latn-ZZ"},"und-Mlym":{"value":"ml-Mlym-IN"},"ve":{"value":"ve-Latn-ZA"},"khn":{"value":"khn-Deva-IN"},"sxw":{"value":"sxw-Latn-ZZ"},"vi":{"value":"vi-Latn-VN"},"khq":{"value":"khq-Latn-ML"},"kht":{"value":"kht-Mymr-IN"},"khs":{"value":"khs-Latn-ZZ"},"vo":{"value":"vo-Latn-001"},"khw":{"value":"khw-Arab-PK"},"bwr":{"value":"bwr-Latn-ZZ"},"khz":{"value":"khz-Latn-ZZ"},"und-ZW":
{"value":"sn-Latn-ZW"},"xbi":{"value":"xbi-Latn-ZZ"},"gaa":{"value":"gaa-Latn-GH"},"syl":{"value":"syl-Beng-BD"},"wa":{"value":"wa-Latn-BE"},"gag":{"value":"gag-Latn-MD"},"gaf":{"value":"gaf-Latn-ZZ"},"kij":{"value":"kij-Latn-ZZ"},"syr":{"value":"syr-Syrc-IQ"},"und-YE":{"value":"ar-Arab-YE"},"gah":{"value":"gah-Latn-ZZ"},"gaj":{"value":"gaj-Latn-ZZ"},"gam":{"value":"gam-Latn-ZZ"},"bxh":{"value":"bxh-Latn-ZZ"},"gan":{"value":"gan-Hans-CN"},"kiu":{"value":"kiu-Latn-TR"},"kiw":{"value":"kiw-Latn-ZZ"},"wo":{"value"
:"wo-Latn-SN"},"gaw":{"value":"gaw-Latn-ZZ"},"und-Sarb":{"value":"xsa-Sarb-YE"},"gay":{"value":"gay-Latn-ID"},"und-YT":{"value":"fr-Latn-YT"},"kjd":{"value":"kjd-Latn-ZZ"},"szl":{"value":"szl-Latn-PL"},"xcr":{"value":"xcr-Cari-TR"},"gba":{"value":"gba-Latn-ZZ"},"und-Mult":{"value":"skr-Mult-PK"},"kjg":{"value":"kjg-Laoo-LA"},"gbf":{"value":"gbf-Latn-ZZ"},"oro":{"value":"oro-Latn-ZZ"},"und-Hatr":{"value":"mis-Hatr-IQ"},"bye":{"value":"bye-Latn-ZZ"},"xh":{"value":"xh-Latn-ZA"},"gbm":{"value":"gbm-Deva-IN"},"oru":
{"value":"oru-Arab-ZZ"},"kjs":{"value":"kjs-Latn-ZZ"},"byn":{"value":"byn-Ethi-ER"},"und-XK":{"value":"sq-Latn-XK"},"yue-CN":{"value":"yue-Hans-CN"},"und-Lepc":{"value":"lep-Lepc-IN"},"byr":{"value":"byr-Latn-ZZ"},"kjy":{"value":"kjy-Latn-ZZ"},"osa":{"value":"osa-Osge-US"},"bys":{"value":"bys-Latn-ZZ"},"byv":{"value":"byv-Latn-CM"},"gbz":{"value":"gbz-Arab-IR"},"gby":{"value":"gby-Latn-ZZ"},"byx":{"value":"byx-Latn-ZZ"},"kkc":{"value":"kkc-Latn-ZZ"},"und-VU":{"value":"bi-Latn-VU"},"bza":{"value":"bza-Latn-ZZ"}
,"und-Goth":{"value":"got-Goth-UA"},"kkj":{"value":"kkj-Latn-CM"},"bze":{"value":"bze-Latn-ML"},"und-Avst":{"value":"ae-Avst-IR"},"bzf":{"value":"bzf-Latn-ZZ"},"yi":{"value":"yi-Hebr-001"},"bzh":{"value":"bzh-Latn-ZZ"},"und-WF":{"value":"fr-Latn-WF"},"yo":{"value":"yo-Latn-NG"},"gcr":{"value":"gcr-Latn-GF"},"ota":{"value":"ota-Arab-ZZ"},"und-WS":{"value":"sm-Latn-WS"},"bzw":{"value":"bzw-Latn-ZZ"},"und-UZ":{"value":"uz-Latn-UZ"},"und-UY":{"value":"es-Latn-UY"},"otk":{"value":"otk-Orkh-MN"},"xes":{"value":"xes-Latn-ZZ"}
,"za":{"value":"za-Latn-CN"},"gde":{"value":"gde-Latn-ZZ"},"kln":{"value":"kln-Latn-KE"},"und-VA":{"value":"it-Latn-VA"},"zh":{"value":"zh-Hans-CN"},"gdn":{"value":"gdn-Latn-ZZ"},"klq":{"value":"klq-Latn-ZZ"},"und-Saur":{"value":"saz-Saur-IN"},"klt":{"value":"klt-Latn-ZZ"},"und-VE":{"value":"es-Latn-VE"},"gdr":{"value":"gdr-Latn-ZZ"},"klx":{"value":"klx-Latn-ZZ"},"und-VN":{"value":"vi-Latn-VN"},"kk-MN":{"value":"kk-Arab-MN"},"zu":{"value":"zu-Latn-ZA"},"und-Armn":{"value":"hy-Armn-AM"},"kmb":{"value":"kmb-Latn-AO"}
,"und-TR":{"value":"tr-Latn-TR"},"geb":{"value":"geb-Latn-ZZ"},"und-TW":{"value":"zh-Hant-TW"},"kmh":{"value":"kmh-Latn-ZZ"},"und-TV":{"value":"tvl-Latn-TV"},"und-TZ":{"value":"sw-Latn-TZ"},"kmo":{"value":"kmo-Latn-ZZ"},"gej":{"value":"gej-Latn-ZZ"},"und-UA":{"value":"uk-Cyrl-UA"},"gel":{"value":"gel-Latn-ZZ"},"kms":{"value":"kms-Latn-ZZ"},"kmu":{"value":"kmu-Latn-ZZ"},"kmw":{"value":"kmw-Latn-ZZ"},"und-Tibt":{"value":"bo-Tibt-CN"},"und-UG":{"value":"sw-Latn-UG"},"und-Armi":{"value":"arc-Armi-IR"},"gez":{"value"
:"gez-Ethi-ET"},"und-ST":{"value":"pt-Latn-ST"},"knf":{"value":"knf-Latn-GW"},"und-SR":{"value":"nl-Latn-SR"},"und-SV":{"value":"es-Latn-SV"},"und-SY":{"value":"ar-Arab-SY"},"knp":{"value":"knp-Latn-ZZ"},"gfk":{"value":"gfk-Latn-ZZ"},"und-TD":{"value":"fr-Latn-TD"},"und-TH":{"value":"th-Thai-TH"},"und-TG":{"value":"fr-Latn-TG"},"und-TF":{"value":"fr-Latn-TF"},"und-TM":{"value":"tk-Latn-TM"},"und-TL":{"value":"pt-Latn-TL"},"und-TK":{"value":"tkl-Latn-TK"},"und-TJ":{"value":"tg-Cyrl-TJ"},"und-TO":{"value":"to-Latn-TO"}
,"und-TN":{"value":"ar-Arab-TN"},"und-RS":{"value":"sr-Cyrl-RS"},"koi":{"value":"koi-Cyrl-RU"},"und-RW":{"value":"rw-Latn-RW"},"kok":{"value":"kok-Deva-IN"},"und-RU":{"value":"ru-Cyrl-RU"},"kol":{"value":"kol-Latn-ZZ"},"kos":{"value":"kos-Latn-FM"},"ggn":{"value":"ggn-Deva-NP"},"und-SD":{"value":"ar-Arab-SD"},"und-SC":{"value":"fr-Latn-SC"},"und-SA":{"value":"ar-Arab-SA"},"koz":{"value":"koz-Latn-ZZ"},"und-SE":{"value":"sv-Latn-SE"},"und-SK":{"value":"sk-Latn-SK"},"und-SJ":{"value":"nb-Latn-SJ"},"und-SI":{"value"
:"sl-Latn-SI"},"taj":{"value":"taj-Deva-NP"},"und-SO":{"value":"so-Latn-SO"},"tal":{"value":"tal-Latn-ZZ"},"und-SN":{"value":"fr-Latn-SN"},"und-Osge":{"value":"osa-Osge-US"},"und-SM":{"value":"it-Latn-SM"},"kpf":{"value":"kpf-Latn-ZZ"},"tan":{"value":"tan-Latn-ZZ"},"kpe":{"value":"kpe-Latn-LR"},"und-QO":{"value":"en-Latn-DG"},"taq":{"value":"taq-Latn-ZZ"},"kpo":{"value":"kpo-Latn-ZZ"},"kpr":{"value":"kpr-Latn-ZZ"},"kpx":{"value":"kpx-Latn-ZZ"},"ghs":{"value":"ghs-Latn-ZZ"},"und-Lana":{"value":"nod-Lana-TH"}
,"tbc":{"value":"tbc-Latn-ZZ"},"und-RE":{"value":"fr-Latn-RE"},"tbd":{"value":"tbd-Latn-ZZ"},"tbg":{"value":"tbg-Latn-ZZ"},"tbf":{"value":"tbf-Latn-ZZ"},"und-RO":{"value":"ro-Latn-RO"},"kqb":{"value":"kqb-Latn-ZZ"},"tbo":{"value":"tbo-Latn-ZZ"},"kqf":{"value":"kqf-Latn-ZZ"},"und-PT":{"value":"pt-Latn-PT"},"und-PS":{"value":"ar-Arab-PS"},"und-PR":{"value":"es-Latn-PR"},"tbw":{"value":"tbw-Latn-PH"},"und-PY":{"value":"gn-Latn-PY"},"gim":{"value":"gim-Latn-ZZ"},"und-PW":{"value":"pau-Latn-PW"},"gil":{"value":"gil-Latn-KI"}
,"kqs":{"value":"kqs-Latn-ZZ"},"tbz":{"value":"tbz-Latn-ZZ"},"und-Laoo":{"value":"lo-Laoo-LA"},"can":{"value":"can-Latn-ZZ"},"und-QA":{"value":"ar-Arab-QA"},"kqy":{"value":"kqy-Ethi-ZZ"},"ms-CC":{"value":"ms-Arab-CC"},"tci":{"value":"tci-Latn-ZZ"},"krc":{"value":"krc-Cyrl-RU"},"krj":{"value":"krj-Latn-PH"},"kri":{"value":"kri-Latn-SL"},"ozm":{"value":"ozm-Latn-ZZ"},"und-OM":{"value":"ar-Arab-OM"},"krl":{"value":"krl-Latn-RU"},"gjk":{"value":"gjk-Arab-PK"},"cbj":{"value":"cbj-Latn-ZZ"},"gjn":{"value":"gjn-Latn-ZZ"}
,"tcy":{"value":"tcy-Knda-IN"},"xla":{"value":"xla-Latn-ZZ"},"krs":{"value":"krs-Latn-ZZ"},"xlc":{"value":"xlc-Lyci-TR"},"kru":{"value":"kru-Deva-IN"},"und-PA":{"value":"es-Latn-PA"},"xld":{"value":"xld-Lydi-TR"},"gju":{"value":"gju-Arab-PK"},"und-PE":{"value":"es-Latn-PE"},"tdd":{"value":"tdd-Tale-CN"},"tdg":{"value":"tdg-Deva-NP"},"tdh":{"value":"tdh-Deva-NP"},"und-PH":{"value":"fil-Latn-PH"},"und-PG":{"value":"tpi-Latn-PG"},"ksb":{"value":"ksb-Latn-TZ"},"und-PF":{"value":"fr-Latn-PF"},"und-PM":{"value":"fr-Latn-PM"}
,"ksd":{"value":"ksd-Latn-ZZ"},"und-PL":{"value":"pl-Latn-PL"},"und-PK":{"value":"ur-Arab-PK"},"ksf":{"value":"ksf-Latn-CM"}};}
function Rt(){return {"value":"en_GB"};}
function TV(){return {"root":{"exponentSeparator":"E","minusSign":45,"perMille":8240,"decimalSeparator":46,"listSeparator":59,"infinity":"∞","naN":"NaN","groupingSeparator":44,"percent":37},"en":{"exponentSeparator":"E","minusSign":45,"perMille":8240,"decimalSeparator":46,"listSeparator":59,"infinity":"∞","naN":"NaN","groupingSeparator":44,"percent":37}};}
function QY(){return {"root":{"UGS":{"symbol":"UGS","name":"UGS"},"FJD":{"symbol":"FJD","name":"FJD"},"MXN":{"symbol":"MX$","name":"MXN"},"STD":{"symbol":"STD","name":"STD"},"BRR":{"symbol":"BRR","name":"BRR"},"LVL":{"symbol":"LVL","name":"LVL"},"SCR":{"symbol":"SCR","name":"SCR"},"CDF":{"symbol":"CDF","name":"CDF"},"MXP":{"symbol":"MXP","name":"MXP"},"ZAL":{"symbol":"ZAL","name":"ZAL"},"BBD":{"symbol":"BBD","name":"BBD"},"HNL":{"symbol":"HNL","name":"HNL"},"UGX":{"symbol":"UGX","name":"UGX"},"LVR":{"symbol"
:"LVR","name":"LVR"},"MXV":{"symbol":"MXV","name":"MXV"},"ZAR":{"symbol":"ZAR","name":"ZAR"},"BRZ":{"symbol":"BRZ","name":"BRZ"},"STN":{"symbol":"STN","name":"STN"},"CUC":{"symbol":"CUC","name":"CUC"},"BSD":{"symbol":"BSD","name":"BSD"},"SDD":{"symbol":"SDD","name":"SDD"},"SDG":{"symbol":"SDG","name":"SDG"},"ZRN":{"symbol":"ZRN","name":"ZRN"},"IQD":{"symbol":"IQD","name":"IQD"},"SDP":{"symbol":"SDP","name":"SDP"},"CUP":{"symbol":"CUP","name":"CUP"},"GMD":{"symbol":"GMD","name":"GMD"},"TWD":{"symbol":"NT$","name"
:"TWD"},"RSD":{"symbol":"RSD","name":"RSD"},"ZRZ":{"symbol":"ZRZ","name":"ZRZ"},"UYI":{"symbol":"UYI","name":"UYI"},"MYR":{"symbol":"MYR","name":"MYR"},"FKP":{"symbol":"FKP","name":"FKP"},"UYP":{"symbol":"UYP","name":"UYP"},"XOF":{"symbol":"CFA","name":"XOF"},"ARA":{"symbol":"ARA","name":"ARA"},"UYU":{"symbol":"UYU","name":"UYU"},"SUR":{"symbol":"SUR","name":"SUR"},"UYW":{"symbol":"UYW","name":"UYW"},"CVE":{"symbol":"CVE","name":"CVE"},"OMR":{"symbol":"OMR","name":"OMR"},"KES":{"symbol":"KES","name":"KES"},
"SEK":{"symbol":"SEK","name":"SEK"},"MZE":{"symbol":"MZE","name":"MZE"},"ARL":{"symbol":"ARL","name":"ARL"},"ARM":{"symbol":"ARM","name":"ARM"},"BTN":{"symbol":"BTN","name":"BTN"},"GNF":{"symbol":"GNF","name":"GNF"},"ARP":{"symbol":"ARP","name":"ARP"},"MZN":{"symbol":"MZN","name":"MZN"},"MZM":{"symbol":"MZM","name":"MZM"},"SVC":{"symbol":"SVC","name":"SVC"},"ARS":{"symbol":"ARS","name":"ARS"},"QAR":{"symbol":"QAR","name":"QAR"},"IRR":{"symbol":"IRR","name":"IRR"},"NLG":{"symbol":"NLG","name":"NLG"},"GNS":{"symbol"
:"GNS","name":"GNS"},"XPD":{"symbol":"XPD","name":"XPD"},"THB":{"symbol":"THB","name":"THB"},"UZS":{"symbol":"UZS","name":"UZS"},"XPF":{"symbol":"CFPF","name":"XPF"},"BDT":{"symbol":"BDT","name":"BDT"},"LYD":{"symbol":"LYD","name":"LYD"},"BUK":{"symbol":"BUK","name":"BUK"},"KWD":{"symbol":"KWD","name":"KWD"},"XPT":{"symbol":"XPT","name":"XPT"},"RUB":{"symbol":"RUB","name":"RUB"},"ISK":{"symbol":"ISK","name":"ISK"},"BEC":{"symbol":"BEC","name":"BEC"},"ISJ":{"symbol":"ISJ","name":"ISJ"},"BEF":{"symbol":"BEF",
"name":"BEF"},"MKD":{"symbol":"MKD","name":"MKD"},"BEL":{"symbol":"BEL","name":"BEL"},"RUR":{"symbol":"RUR","name":"RUR"},"DZD":{"symbol":"DZD","name":"DZD"},"PAB":{"symbol":"PAB","name":"PAB"},"MKN":{"symbol":"MKN","name":"MKN"},"SGD":{"symbol":"SGD","name":"SGD"},"KGS":{"symbol":"KGS","name":"KGS"},"HRD":{"symbol":"HRD","name":"HRD"},"XAF":{"symbol":"FCFA","name":"XAF"},"XAG":{"symbol":"XAG","name":"XAG"},"ATS":{"symbol":"ATS","name":"ATS"},"CHF":{"symbol":"CHF","name":"CHF"},"HRK":{"symbol":"HRK","name":
"HRK"},"ITL":{"symbol":"ITL","name":"ITL"},"CHE":{"symbol":"CHE","name":"CHE"},"DJF":{"symbol":"DJF","name":"DJF"},"MLF":{"symbol":"MLF","name":"MLF"},"XRE":{"symbol":"XRE","name":"XRE"},"TZS":{"symbol":"TZS","name":"TZS"},"ADP":{"symbol":"ADP","name":"ADP"},"VND":{"symbol":"₫","name":"VND"},"XAU":{"symbol":"XAU","name":"XAU"},"AUD":{"symbol":"A$","name":"AUD"},"CHW":{"symbol":"CHW","name":"CHW"},"KHR":{"symbol":"KHR","name":"KHR"},"IDR":{"symbol":"IDR","name":"IDR"},"XBA":{"symbol":"XBA","name":"XBA"},"KYD":
{"symbol":"KYD","name":"KYD"},"VNN":{"symbol":"VNN","name":"VNN"},"XBC":{"symbol":"XBC","name":"XBC"},"YDD":{"symbol":"YDD","name":"YDD"},"XBB":{"symbol":"XBB","name":"XBB"},"BWP":{"symbol":"BWP","name":"BWP"},"GQE":{"symbol":"GQE","name":"GQE"},"SHP":{"symbol":"SHP","name":"SHP"},"CYP":{"symbol":"CYP","name":"CYP"},"XBD":{"symbol":"XBD","name":"XBD"},"TJS":{"symbol":"TJS","name":"TJS"},"TJR":{"symbol":"TJR","name":"TJR"},"AED":{"symbol":"AED","name":"AED"},"RWF":{"symbol":"RWF","name":"RWF"},"DKK":{"symbol"
:"DKK","name":"DKK"},"BGL":{"symbol":"BGL","name":"BGL"},"ZWD":{"symbol":"ZWD","name":"ZWD"},"BGN":{"symbol":"BGN","name":"BGN"},"BGM":{"symbol":"BGM","name":"BGM"},"YUD":{"symbol":"YUD","name":"YUD"},"MMK":{"symbol":"MMK","name":"MMK"},"BGO":{"symbol":"BGO","name":"BGO"},"NOK":{"symbol":"NOK","name":"NOK"},"SYP":{"symbol":"SYP","name":"SYP"},"ZWL":{"symbol":"ZWL","name":"ZWL"},"YUM":{"symbol":"YUM","name":"YUM"},"LKR":{"symbol":"LKR","name":"LKR"},"YUN":{"symbol":"YUN","name":"YUN"},"ZWR":{"symbol":"ZWR","name"
:"ZWR"},"CZK":{"symbol":"CZK","name":"CZK"},"IEP":{"symbol":"IEP","name":"IEP"},"YUR":{"symbol":"YUR","name":"YUR"},"GRD":{"symbol":"GRD","name":"GRD"},"XCD":{"symbol":"EC$","name":"XCD"},"HTG":{"symbol":"HTG","name":"HTG"},"XSU":{"symbol":"XSU","name":"XSU"},"AFA":{"symbol":"AFA","name":"AFA"},"BHD":{"symbol":"BHD","name":"BHD"},"SIT":{"symbol":"SIT","name":"SIT"},"PTE":{"symbol":"PTE","name":"PTE"},"KZT":{"symbol":"KZT","name":"KZT"},"SZL":{"symbol":"SZL","name":"SZL"},"YER":{"symbol":"YER","name":"YER"},
"AFN":{"symbol":"AFN","name":"AFN"},"BYB":{"symbol":"BYB","name":"BYB"},"RHD":{"symbol":"RHD","name":"RHD"},"AWG":{"symbol":"AWG","name":"AWG"},"NPR":{"symbol":"NPR","name":"NPR"},"MNT":{"symbol":"MNT","name":"MNT"},"GBP":{"symbol":"£","name":"GBP"},"BYN":{"symbol":"BYN","name":"BYN"},"XTS":{"symbol":"XTS","name":"XTS"},"HUF":{"symbol":"HUF","name":"HUF"},"BYR":{"symbol":"BYR","name":"BYR"},"BIF":{"symbol":"BIF","name":"BIF"},"XUA":{"symbol":"XUA","name":"XUA"},"XDR":{"symbol":"XDR","name":"XDR"},"BZD":{"symbol"
:"BZD","name":"BZD"},"MOP":{"symbol":"MOP","name":"MOP"},"NAD":{"symbol":"NAD","name":"NAD"},"SKK":{"symbol":"SKK","name":"SKK"},"PEI":{"symbol":"PEI","name":"PEI"},"TMM":{"symbol":"TMM","name":"TMM"},"PEN":{"symbol":"PEN","name":"PEN"},"WST":{"symbol":"WST","name":"WST"},"TMT":{"symbol":"TMT","name":"TMT"},"FRF":{"symbol":"FRF","name":"FRF"},"CLF":{"symbol":"CLF","name":"CLF"},"CLE":{"symbol":"CLE","name":"CLE"},"PES":{"symbol":"PES","name":"PES"},"GTQ":{"symbol":"GTQ","name":"GTQ"},"CLP":{"symbol":"CLP","name"
:"CLP"},"XEU":{"symbol":"XEU","name":"XEU"},"TND":{"symbol":"TND","name":"TND"},"SLL":{"symbol":"SLL","name":"SLL"},"XFO":{"symbol":"XFO","name":"XFO"},"DOP":{"symbol":"DOP","name":"DOP"},"KMF":{"symbol":"KMF","name":"KMF"},"XFU":{"symbol":"XFU","name":"XFU"},"GEK":{"symbol":"GEK","name":"GEK"},"GEL":{"symbol":"GEL","name":"GEL"},"MAD":{"symbol":"MAD","name":"MAD"},"MAF":{"symbol":"MAF","name":"MAF"},"AZM":{"symbol":"AZM","name":"AZM"},"TOP":{"symbol":"TOP","name":"TOP"},"AZN":{"symbol":"AZN","name":"AZN"},
"PGK":{"symbol":"PGK","name":"PGK"},"CNH":{"symbol":"CNH","name":"CNH"},"UAH":{"symbol":"UAH","name":"UAH"},"UAK":{"symbol":"UAK","name":"UAK"},"ERN":{"symbol":"ERN","name":"ERN"},"TPE":{"symbol":"TPE","name":"TPE"},"MRO":{"symbol":"MRO","name":"MRO"},"CNX":{"symbol":"CNX","name":"CNX"},"CNY":{"symbol":"CN¥","name":"CNY"},"MRU":{"symbol":"MRU","name":"MRU"},"ESA":{"symbol":"ESA","name":"ESA"},"GWE":{"symbol":"GWE","name":"GWE"},"ESB":{"symbol":"ESB","name":"ESB"},"BMD":{"symbol":"BMD","name":"BMD"},"PHP":{"symbol"
:"PHP","name":"PHP"},"XXX":{"symbol":"¤","name":"XXX"},"PYG":{"symbol":"PYG","name":"PYG"},"JMD":{"symbol":"JMD","name":"JMD"},"GWP":{"symbol":"GWP","name":"GWP"},"ESP":{"symbol":"ESP","name":"ESP"},"COP":{"symbol":"COP","name":"COP"},"USD":{"symbol":"US$","name":"USD"},"COU":{"symbol":"COU","name":"COU"},"MCF":{"symbol":"MCF","name":"MCF"},"USN":{"symbol":"USN","name":"USN"},"ETB":{"symbol":"ETB","name":"ETB"},"VEB":{"symbol":"VEB","name":"VEB"},"ECS":{"symbol":"ECS","name":"ECS"},"USS":{"symbol":"USS","name"
:"USS"},"SOS":{"symbol":"SOS","name":"SOS"},"VEF":{"symbol":"VEF","name":"VEF"},"VUV":{"symbol":"VUV","name":"VUV"},"LAK":{"symbol":"LAK","name":"LAK"},"BND":{"symbol":"BND","name":"BND"},"ECV":{"symbol":"ECV","name":"ECV"},"ZMK":{"symbol":"ZMK","name":"ZMK"},"LRD":{"symbol":"LRD","name":"LRD"},"ALK":{"symbol":"ALK","name":"ALK"},"ALL":{"symbol":"ALL","name":"ALL"},"GHC":{"symbol":"GHC","name":"GHC"},"MTL":{"symbol":"MTL","name":"MTL"},"VES":{"symbol":"VES","name":"VES"},"ZMW":{"symbol":"ZMW","name":"ZMW"},
"MTP":{"symbol":"MTP","name":"MTP"},"ILP":{"symbol":"ILP","name":"ILP"},"MDC":{"symbol":"MDC","name":"MDC"},"ILR":{"symbol":"ILR","name":"ILR"},"TRL":{"symbol":"TRL","name":"TRL"},"ILS":{"symbol":"₪","name":"ILS"},"GHS":{"symbol":"GHS","name":"GHS"},"GYD":{"symbol":"GYD","name":"GYD"},"KPW":{"symbol":"KPW","name":"KPW"},"BOB":{"symbol":"BOB","name":"BOB"},"MDL":{"symbol":"MDL","name":"MDL"},"AMD":{"symbol":"AMD","name":"AMD"},"TRY":{"symbol":"TRY","name":"TRY"},"LBP":{"symbol":"LBP","name":"LBP"},"BOL":{"symbol"
:"BOL","name":"BOL"},"JOD":{"symbol":"JOD","name":"JOD"},"HKD":{"symbol":"HK$","name":"HKD"},"BOP":{"symbol":"BOP","name":"BOP"},"EUR":{"symbol":"€","name":"EUR"},"LSL":{"symbol":"LSL","name":"LSL"},"CAD":{"symbol":"CA$","name":"CAD"},"BOV":{"symbol":"BOV","name":"BOV"},"EEK":{"symbol":"EEK","name":"EEK"},"MUR":{"symbol":"MUR","name":"MUR"},"ROL":{"symbol":"ROL","name":"ROL"},"GIP":{"symbol":"GIP","name":"GIP"},"RON":{"symbol":"RON","name":"RON"},"NGN":{"symbol":"NGN","name":"NGN"},"CRC":{"symbol":"CRC","name"
:"CRC"},"PKR":{"symbol":"PKR","name":"PKR"},"ANG":{"symbol":"ANG","name":"ANG"},"KRH":{"symbol":"KRH","name":"KRH"},"SRD":{"symbol":"SRD","name":"SRD"},"LTL":{"symbol":"LTL","name":"LTL"},"SAR":{"symbol":"SAR","name":"SAR"},"TTD":{"symbol":"TTD","name":"TTD"},"MVP":{"symbol":"MVP","name":"MVP"},"MVR":{"symbol":"MVR","name":"MVR"},"KRO":{"symbol":"KRO","name":"KRO"},"SRG":{"symbol":"SRG","name":"SRG"},"DDM":{"symbol":"DDM","name":"DDM"},"INR":{"symbol":"₹","name":"INR"},"LTT":{"symbol":"LTT","name":"LTT"},"KRW":
{"symbol":"₩","name":"KRW"},"JPY":{"symbol":"JP¥","name":"JPY"},"AOA":{"symbol":"AOA","name":"AOA"},"PLN":{"symbol":"PLN","name":"PLN"},"SBD":{"symbol":"SBD","name":"SBD"},"CSD":{"symbol":"CSD","name":"CSD"},"CSK":{"symbol":"CSK","name":"CSK"},"LUC":{"symbol":"LUC","name":"LUC"},"LUF":{"symbol":"LUF","name":"LUF"},"AOK":{"symbol":"AOK","name":"AOK"},"PLZ":{"symbol":"PLZ","name":"PLZ"},"AON":{"symbol":"AON","name":"AON"},"MWK":{"symbol":"MWK","name":"MWK"},"LUL":{"symbol":"LUL","name":"LUL"},"AOR":{"symbol":
"AOR","name":"AOR"},"BAD":{"symbol":"BAD","name":"BAD"},"MGA":{"symbol":"MGA","name":"MGA"},"NIC":{"symbol":"NIC","name":"NIC"},"FIM":{"symbol":"FIM","name":"FIM"},"DEM":{"symbol":"DEM","name":"DEM"},"MGF":{"symbol":"MGF","name":"MGF"},"BAM":{"symbol":"BAM","name":"BAM"},"BAN":{"symbol":"BAN","name":"BAN"},"EGP":{"symbol":"EGP","name":"EGP"},"SSP":{"symbol":"SSP","name":"SSP"},"BRC":{"symbol":"BRC","name":"BRC"},"BRB":{"symbol":"BRB","name":"BRB"},"BRE":{"symbol":"BRE","name":"BRE"},"NIO":{"symbol":"NIO","name"
:"NIO"},"NZD":{"symbol":"NZ$","name":"NZD"},"BRL":{"symbol":"R$","name":"BRL"},"BRN":{"symbol":"BRN","name":"BRN"}},"en":{"UGS":{"symbol":"UGS","name":"Ugandan Shilling (1966–1987)"},"FJD":{"symbol":"FJD","name":"Fijian Dollar"},"MXN":{"symbol":"MX$","name":"Mexican Peso"},"STD":{"symbol":"STD","name":"São Tomé & Príncipe Dobra (1977–2017)"},"BRR":{"symbol":"BRR","name":"Brazilian Cruzeiro (1993–1994)"},"LVL":{"symbol":"LVL","name":"Latvian Lats"},"SCR":{"symbol":"SCR","name":"Seychellois Rupee"},"CDF":{"symbol"
:"CDF","name":"Congolese Franc"},"MXP":{"symbol":"MXP","name":"Mexican Silver Peso (1861–1992)"},"ZAL":{"symbol":"ZAL","name":"South African Rand (financial)"},"BBD":{"symbol":"BBD","name":"Barbadian Dollar"},"HNL":{"symbol":"HNL","name":"Honduran Lempira"},"UGX":{"symbol":"UGX","name":"Ugandan Shilling"},"LVR":{"symbol":"LVR","name":"Latvian Ruble"},"MXV":{"symbol":"MXV","name":"Mexican Investment Unit"},"ZAR":{"symbol":"ZAR","name":"South African Rand"},"BRZ":{"symbol":"BRZ","name":"Brazilian Cruzeiro (1942–1967)"}
,"STN":{"symbol":"STN","name":"São Tomé & Príncipe Dobra"},"CUC":{"symbol":"CUC","name":"Cuban Convertible Peso"},"BSD":{"symbol":"BSD","name":"Bahamian Dollar"},"SDD":{"symbol":"SDD","name":"Sudanese Dinar (1992–2007)"},"SDG":{"symbol":"SDG","name":"Sudanese Pound"},"ZRN":{"symbol":"ZRN","name":"Zairean New Zaire (1993–1998)"},"IQD":{"symbol":"IQD","name":"Iraqi Dinar"},"SDP":{"symbol":"SDP","name":"Sudanese Pound (1957–1998)"},"CUP":{"symbol":"CUP","name":"Cuban Peso"},"GMD":{"symbol":"GMD","name":"Gambian Dalasi"}
,"TWD":{"symbol":"NT$","name":"New Taiwan Dollar"},"RSD":{"symbol":"RSD","name":"Serbian Dinar"},"ZRZ":{"symbol":"ZRZ","name":"Zairean Zaire (1971–1993)"},"UYI":{"symbol":"UYI","name":"Uruguayan Peso (Indexed Units)"},"MYR":{"symbol":"MYR","name":"Malaysian Ringgit"},"FKP":{"symbol":"FKP","name":"Falkland Islands Pound"},"UYP":{"symbol":"UYP","name":"Uruguayan Peso (1975–1993)"},"XOF":{"symbol":"CFA","name":"West African CFA Franc"},"ARA":{"symbol":"ARA","name":"Argentine Austral"},"UYU":{"symbol":"UYU","name"
:"Uruguayan Peso"},"SUR":{"symbol":"SUR","name":"Soviet Rouble"},"UYW":{"symbol":"UYW","name":"Uruguayan Nominal Wage Index Unit"},"CVE":{"symbol":"CVE","name":"Cape Verdean Escudo"},"OMR":{"symbol":"OMR","name":"Omani Rial"},"KES":{"symbol":"KES","name":"Kenyan Shilling"},"SEK":{"symbol":"SEK","name":"Swedish Krona"},"MZE":{"symbol":"MZE","name":"Mozambican Escudo"},"ARL":{"symbol":"ARL","name":"Argentine Peso Ley (1970–1983)"},"ARM":{"symbol":"ARM","name":"Argentine Peso (1881–1970)"},"BTN":{"symbol":"BTN",
"name":"Bhutanese Ngultrum"},"GNF":{"symbol":"GNF","name":"Guinean Franc"},"ARP":{"symbol":"ARP","name":"Argentine Peso (1983–1985)"},"MZN":{"symbol":"MZN","name":"Mozambican Metical"},"MZM":{"symbol":"MZM","name":"Mozambican Metical (1980–2006)"},"SVC":{"symbol":"SVC","name":"Salvadoran Colón"},"ARS":{"symbol":"ARS","name":"Argentine Peso"},"QAR":{"symbol":"QAR","name":"Qatari Rial"},"IRR":{"symbol":"IRR","name":"Iranian Rial"},"NLG":{"symbol":"NLG","name":"Dutch Guilder"},"GNS":{"symbol":"GNS","name":"Guinean Syli"}
,"XPD":{"symbol":"XPD","name":"Palladium"},"THB":{"symbol":"THB","name":"Thai Baht"},"UZS":{"symbol":"UZS","name":"Uzbekistani Som"},"XPF":{"symbol":"CFPF","name":"CFP Franc"},"BDT":{"symbol":"BDT","name":"Bangladeshi Taka"},"LYD":{"symbol":"LYD","name":"Libyan Dinar"},"BUK":{"symbol":"BUK","name":"Burmese Kyat"},"KWD":{"symbol":"KWD","name":"Kuwaiti Dinar"},"XPT":{"symbol":"XPT","name":"Platinum"},"RUB":{"symbol":"RUB","name":"Russian Ruble"},"ISK":{"symbol":"ISK","name":"Icelandic Króna"},"BEC":{"symbol":
"BEC","name":"Belgian Franc (convertible)"},"ISJ":{"symbol":"ISJ","name":"Icelandic Króna (1918–1981)"},"BEF":{"symbol":"BEF","name":"Belgian Franc"},"MKD":{"symbol":"MKD","name":"Macedonian Denar"},"BEL":{"symbol":"BEL","name":"Belgian Franc (financial)"},"RUR":{"symbol":"RUR","name":"Russian Ruble (1991–1998)"},"DZD":{"symbol":"DZD","name":"Algerian Dinar"},"PAB":{"symbol":"PAB","name":"Panamanian Balboa"},"MKN":{"symbol":"MKN","name":"Macedonian Denar (1992–1993)"},"SGD":{"symbol":"SGD","name":"Singapore Dollar"}
,"KGS":{"symbol":"KGS","name":"Kyrgystani Som"},"HRD":{"symbol":"HRD","name":"Croatian Dinar"},"XAF":{"symbol":"FCFA","name":"Central African CFA Franc"},"XAG":{"symbol":"XAG","name":"Silver"},"ATS":{"symbol":"ATS","name":"Austrian Schilling"},"CHF":{"symbol":"CHF","name":"Swiss Franc"},"HRK":{"symbol":"HRK","name":"Croatian Kuna"},"ITL":{"symbol":"ITL","name":"Italian Lira"},"CHE":{"symbol":"CHE","name":"WIR Euro"},"DJF":{"symbol":"DJF","name":"Djiboutian Franc"},"MLF":{"symbol":"MLF","name":"Malian Franc"}
,"XRE":{"symbol":"XRE","name":"RINET Funds"},"TZS":{"symbol":"TZS","name":"Tanzanian Shilling"},"ADP":{"symbol":"ADP","name":"Andorran Peseta"},"VND":{"symbol":"₫","name":"Vietnamese Dong"},"XAU":{"symbol":"XAU","name":"Gold"},"AUD":{"symbol":"A$","name":"Australian Dollar"},"CHW":{"symbol":"CHW","name":"WIR Franc"},"KHR":{"symbol":"KHR","name":"Cambodian Riel"},"IDR":{"symbol":"IDR","name":"Indonesian Rupiah"},"XBA":{"symbol":"XBA","name":"European Composite Unit"},"KYD":{"symbol":"KYD","name":"Cayman Islands Dollar"}
,"VNN":{"symbol":"VNN","name":"Vietnamese Dong (1978–1985)"},"XBC":{"symbol":"XBC","name":"European Unit of Account (XBC)"},"YDD":{"symbol":"YDD","name":"Yemeni Dinar"},"XBB":{"symbol":"XBB","name":"European Monetary Unit"},"BWP":{"symbol":"BWP","name":"Botswanan Pula"},"GQE":{"symbol":"GQE","name":"Equatorial Guinean Ekwele"},"SHP":{"symbol":"SHP","name":"St. Helena Pound"},"CYP":{"symbol":"CYP","name":"Cypriot Pound"},"XBD":{"symbol":"XBD","name":"European Unit of Account (XBD)"},"TJS":{"symbol":"TJS","name"
:"Tajikistani Somoni"},"TJR":{"symbol":"TJR","name":"Tajikistani Ruble"},"AED":{"symbol":"AED","name":"United Arab Emirates Dirham"},"RWF":{"symbol":"RWF","name":"Rwandan Franc"},"DKK":{"symbol":"DKK","name":"Danish Krone"},"BGL":{"symbol":"BGL","name":"Bulgarian Hard Lev"},"ZWD":{"symbol":"ZWD","name":"Zimbabwean Dollar (1980–2008)"},"BGN":{"symbol":"BGN","name":"Bulgarian Lev"},"BGM":{"symbol":"BGM","name":"Bulgarian Socialist Lev"},"YUD":{"symbol":"YUD","name":"Yugoslavian Hard Dinar (1966–1990)"},"MMK":
{"symbol":"MMK","name":"Myanmar Kyat"},"BGO":{"symbol":"BGO","name":"Bulgarian Lev (1879–1952)"},"NOK":{"symbol":"NOK","name":"Norwegian Krone"},"SYP":{"symbol":"SYP","name":"Syrian Pound"},"ZWL":{"symbol":"ZWL","name":"Zimbabwean Dollar (2009)"},"YUM":{"symbol":"YUM","name":"Yugoslavian New Dinar (1994–2002)"},"LKR":{"symbol":"LKR","name":"Sri Lankan Rupee"},"YUN":{"symbol":"YUN","name":"Yugoslavian Convertible Dinar (1990–1992)"},"ZWR":{"symbol":"ZWR","name":"Zimbabwean Dollar (2008)"},"CZK":{"symbol":"CZK",
"name":"Czech Koruna"},"IEP":{"symbol":"IEP","name":"Irish Pound"},"YUR":{"symbol":"YUR","name":"Yugoslavian Reformed Dinar (1992–1993)"},"GRD":{"symbol":"GRD","name":"Greek Drachma"},"XCD":{"symbol":"EC$","name":"East Caribbean Dollar"},"HTG":{"symbol":"HTG","name":"Haitian Gourde"},"XSU":{"symbol":"XSU","name":"Sucre"},"AFA":{"symbol":"AFA","name":"Afghan Afghani (1927–2002)"},"BHD":{"symbol":"BHD","name":"Bahraini Dinar"},"SIT":{"symbol":"SIT","name":"Slovenian Tolar"},"PTE":{"symbol":"PTE","name":"Portuguese Escudo"}
,"KZT":{"symbol":"KZT","name":"Kazakhstani Tenge"},"SZL":{"symbol":"SZL","name":"Swazi Lilangeni"},"YER":{"symbol":"YER","name":"Yemeni Rial"},"AFN":{"symbol":"AFN","name":"Afghan Afghani"},"BYB":{"symbol":"BYB","name":"Belarusian Ruble (1994–1999)"},"RHD":{"symbol":"RHD","name":"Rhodesian Dollar"},"AWG":{"symbol":"AWG","name":"Aruban Florin"},"NPR":{"symbol":"NPR","name":"Nepalese Rupee"},"MNT":{"symbol":"MNT","name":"Mongolian Tugrik"},"GBP":{"symbol":"£","name":"British Pound"},"BYN":{"symbol":"BYN","name"
:"Belarusian Ruble"},"XTS":{"symbol":"XTS","name":"Testing Currency Code"},"HUF":{"symbol":"HUF","name":"Hungarian Forint"},"BYR":{"symbol":"BYR","name":"Belarusian Ruble (2000–2016)"},"BIF":{"symbol":"BIF","name":"Burundian Franc"},"XUA":{"symbol":"XUA","name":"ADB Unit of Account"},"XDR":{"symbol":"XDR","name":"Special Drawing Rights"},"BZD":{"symbol":"BZD","name":"Belize Dollar"},"MOP":{"symbol":"MOP","name":"Macanese Pataca"},"NAD":{"symbol":"NAD","name":"Namibian Dollar"},"SKK":{"symbol":"SKK","name":"Slovak Koruna"}
,"PEI":{"symbol":"PEI","name":"Peruvian Inti"},"TMM":{"symbol":"TMM","name":"Turkmenistani Manat (1993–2009)"},"PEN":{"symbol":"PEN","name":"Peruvian Sol"},"WST":{"symbol":"WST","name":"Samoan Tala"},"TMT":{"symbol":"TMT","name":"Turkmenistani Manat"},"FRF":{"symbol":"FRF","name":"French Franc"},"CLF":{"symbol":"CLF","name":"Chilean Unit of Account (UF)"},"CLE":{"symbol":"CLE","name":"Chilean Escudo"},"PES":{"symbol":"PES","name":"Peruvian Sol (1863–1965)"},"GTQ":{"symbol":"GTQ","name":"Guatemalan Quetzal"}
,"CLP":{"symbol":"CLP","name":"Chilean Peso"},"XEU":{"symbol":"XEU","name":"European Currency Unit"},"TND":{"symbol":"TND","name":"Tunisian Dinar"},"SLL":{"symbol":"SLL","name":"Sierra Leonean Leone"},"XFO":{"symbol":"XFO","name":"French Gold Franc"},"DOP":{"symbol":"DOP","name":"Dominican Peso"},"KMF":{"symbol":"KMF","name":"Comorian Franc"},"XFU":{"symbol":"XFU","name":"French UIC-Franc"},"GEK":{"symbol":"GEK","name":"Georgian Kupon Larit"},"GEL":{"symbol":"GEL","name":"Georgian Lari"},"MAD":{"symbol":"MAD",
"name":"Moroccan Dirham"},"MAF":{"symbol":"MAF","name":"Moroccan Franc"},"AZM":{"symbol":"AZM","name":"Azerbaijani Manat (1993–2006)"},"TOP":{"symbol":"TOP","name":"Tongan Paʻanga"},"AZN":{"symbol":"AZN","name":"Azerbaijani Manat"},"PGK":{"symbol":"PGK","name":"Papua New Guinean Kina"},"CNH":{"symbol":"CNH","name":"Chinese Yuan (offshore)"},"UAH":{"symbol":"UAH","name":"Ukrainian Hryvnia"},"UAK":{"symbol":"UAK","name":"Ukrainian Karbovanets"},"ERN":{"symbol":"ERN","name":"Eritrean Nakfa"},"TPE":{"symbol":"TPE",
"name":"Timorese Escudo"},"MRO":{"symbol":"MRO","name":"Mauritanian Ouguiya (1973–2017)"},"CNX":{"symbol":"CNX","name":"Chinese People’s Bank Dollar"},"CNY":{"symbol":"CN¥","name":"Chinese Yuan"},"MRU":{"symbol":"MRU","name":"Mauritanian Ouguiya"},"ESA":{"symbol":"ESA","name":"Spanish Peseta (A account)"},"GWE":{"symbol":"GWE","name":"Portuguese Guinea Escudo"},"ESB":{"symbol":"ESB","name":"Spanish Peseta (convertible account)"},"BMD":{"symbol":"BMD","name":"Bermudan Dollar"},"PHP":{"symbol":"PHP","name":"Philippine Piso"}
,"XXX":{"symbol":"¤","name":"Unknown Currency"},"PYG":{"symbol":"PYG","name":"Paraguayan Guarani"},"JMD":{"symbol":"JMD","name":"Jamaican Dollar"},"GWP":{"symbol":"GWP","name":"Guinea-Bissau Peso"},"ESP":{"symbol":"ESP","name":"Spanish Peseta"},"COP":{"symbol":"COP","name":"Colombian Peso"},"USD":{"symbol":"$","name":"US Dollar"},"COU":{"symbol":"COU","name":"Colombian Real Value Unit"},"MCF":{"symbol":"MCF","name":"Monegasque Franc"},"USN":{"symbol":"USN","name":"US Dollar (Next day)"},"ETB":{"symbol":"ETB",
"name":"Ethiopian Birr"},"VEB":{"symbol":"VEB","name":"Venezuelan Bolívar (1871–2008)"},"ECS":{"symbol":"ECS","name":"Ecuadorian Sucre"},"USS":{"symbol":"USS","name":"US Dollar (Same day)"},"SOS":{"symbol":"SOS","name":"Somali Shilling"},"VEF":{"symbol":"VEF","name":"Venezuelan Bolívar (2008–2018)"},"VUV":{"symbol":"VUV","name":"Vanuatu Vatu"},"LAK":{"symbol":"LAK","name":"Laotian Kip"},"BND":{"symbol":"BND","name":"Brunei Dollar"},"ECV":{"symbol":"ECV","name":"Ecuadorian Unit of Constant Value"},"ZMK":{"symbol"
:"ZMK","name":"Zambian Kwacha (1968–2012)"},"LRD":{"symbol":"LRD","name":"Liberian Dollar"},"ALK":{"symbol":"ALK","name":"Albanian Lek (1946–1965)"},"ALL":{"symbol":"ALL","name":"Albanian Lek"},"GHC":{"symbol":"GHC","name":"Ghanaian Cedi (1979–2007)"},"MTL":{"symbol":"MTL","name":"Maltese Lira"},"VES":{"symbol":"VES","name":"Venezuelan Bolívar"},"ZMW":{"symbol":"ZMW","name":"Zambian Kwacha"},"MTP":{"symbol":"MTP","name":"Maltese Pound"},"ILP":{"symbol":"ILP","name":"Israeli Pound"},"MDC":{"symbol":"MDC","name"
:"Moldovan Cupon"},"ILR":{"symbol":"ILR","name":"Israeli Shekel (1980–1985)"},"TRL":{"symbol":"TRL","name":"Turkish Lira (1922–2005)"},"ILS":{"symbol":"₪","name":"Israeli New Shekel"},"GHS":{"symbol":"GHS","name":"Ghanaian Cedi"},"GYD":{"symbol":"GYD","name":"Guyanaese Dollar"},"KPW":{"symbol":"KPW","name":"North Korean Won"},"BOB":{"symbol":"BOB","name":"Bolivian Boliviano"},"MDL":{"symbol":"MDL","name":"Moldovan Leu"},"AMD":{"symbol":"AMD","name":"Armenian Dram"},"TRY":{"symbol":"TRY","name":"Turkish Lira"}
,"LBP":{"symbol":"LBP","name":"Lebanese Pound"},"BOL":{"symbol":"BOL","name":"Bolivian Boliviano (1863–1963)"},"JOD":{"symbol":"JOD","name":"Jordanian Dinar"},"HKD":{"symbol":"HK$","name":"Hong Kong Dollar"},"BOP":{"symbol":"BOP","name":"Bolivian Peso"},"EUR":{"symbol":"€","name":"Euro"},"LSL":{"symbol":"LSL","name":"Lesotho Loti"},"CAD":{"symbol":"CA$","name":"Canadian Dollar"},"BOV":{"symbol":"BOV","name":"Bolivian Mvdol"},"EEK":{"symbol":"EEK","name":"Estonian Kroon"},"MUR":{"symbol":"MUR","name":"Mauritian Rupee"}
,"ROL":{"symbol":"ROL","name":"Romanian Leu (1952–2006)"},"GIP":{"symbol":"GIP","name":"Gibraltar Pound"},"RON":{"symbol":"RON","name":"Romanian Leu"},"NGN":{"symbol":"NGN","name":"Nigerian Naira"},"CRC":{"symbol":"CRC","name":"Costa Rican Colón"},"PKR":{"symbol":"PKR","name":"Pakistani Rupee"},"ANG":{"symbol":"ANG","name":"Netherlands Antillean Guilder"},"KRH":{"symbol":"KRH","name":"South Korean Hwan (1953–1962)"},"SRD":{"symbol":"SRD","name":"Surinamese Dollar"},"LTL":{"symbol":"LTL","name":"Lithuanian Litas"}
,"SAR":{"symbol":"SAR","name":"Saudi Riyal"},"TTD":{"symbol":"TTD","name":"Trinidad & Tobago Dollar"},"MVP":{"symbol":"MVP","name":"Maldivian Rupee (1947–1981)"},"MVR":{"symbol":"MVR","name":"Maldivian Rufiyaa"},"KRO":{"symbol":"KRO","name":"South Korean Won (1945–1953)"},"SRG":{"symbol":"SRG","name":"Surinamese Guilder"},"DDM":{"symbol":"DDM","name":"East German Mark"},"INR":{"symbol":"₹","name":"Indian Rupee"},"LTT":{"symbol":"LTT","name":"Lithuanian Talonas"},"KRW":{"symbol":"₩","name":"South Korean Won"}
,"JPY":{"symbol":"¥","name":"Japanese Yen"},"AOA":{"symbol":"AOA","name":"Angolan Kwanza"},"PLN":{"symbol":"PLN","name":"Polish Zloty"},"SBD":{"symbol":"SBD","name":"Solomon Islands Dollar"},"CSD":{"symbol":"CSD","name":"Serbian Dinar (2002–2006)"},"CSK":{"symbol":"CSK","name":"Czechoslovak Hard Koruna"},"LUC":{"symbol":"LUC","name":"Luxembourgian Convertible Franc"},"LUF":{"symbol":"LUF","name":"Luxembourgian Franc"},"AOK":{"symbol":"AOK","name":"Angolan Kwanza (1977–1991)"},"PLZ":{"symbol":"PLZ","name":"Polish Zloty (1950–1995)"}
,"AON":{"symbol":"AON","name":"Angolan New Kwanza (1990–2000)"},"MWK":{"symbol":"MWK","name":"Malawian Kwacha"},"LUL":{"symbol":"LUL","name":"Luxembourg Financial Franc"},"AOR":{"symbol":"AOR","name":"Angolan Readjusted Kwanza (1995–1999)"},"BAD":{"symbol":"BAD","name":"Bosnia-Herzegovina Dinar (1992–1994)"},"MGA":{"symbol":"MGA","name":"Malagasy Ariary"},"NIC":{"symbol":"NIC","name":"Nicaraguan Córdoba (1988–1991)"},"FIM":{"symbol":"FIM","name":"Finnish Markka"},"DEM":{"symbol":"DEM","name":"German Mark"},
"MGF":{"symbol":"MGF","name":"Malagasy Franc"},"BAM":{"symbol":"BAM","name":"Bosnia-Herzegovina Convertible Mark"},"BAN":{"symbol":"BAN","name":"Bosnia-Herzegovina New Dinar (1994–1997)"},"EGP":{"symbol":"EGP","name":"Egyptian Pound"},"SSP":{"symbol":"SSP","name":"South Sudanese Pound"},"BRC":{"symbol":"BRC","name":"Brazilian Cruzado (1986–1989)"},"BRB":{"symbol":"BRB","name":"Brazilian New Cruzeiro (1967–1986)"},"BRE":{"symbol":"BRE","name":"Brazilian Cruzeiro (1990–1993)"},"NIO":{"symbol":"NIO","name":"Nicaraguan Córdoba"}
,"NZD":{"symbol":"NZ$","name":"New Zealand Dollar"},"BRL":{"symbol":"R$","name":"Brazilian Real"},"BRN":{"symbol":"BRN","name":"Brazilian New Cruzado (1989–1990)"}}};}
function Gn(){B.call(this);}
var ABO=null;var ABM=null;function Xg(){return [{"code":"AFN","fractionDigits":2,"numericCode":971},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"ALL","fractionDigits":2,"numericCode":8},{"code":"DZD","fractionDigits":2,"numericCode":12},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"AOA","fractionDigits":2,"numericCode":973},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":null,"fractionDigits":0,"numericCode":0},{"code"
:"XCD","fractionDigits":2,"numericCode":951},{"code":"ARS","fractionDigits":2,"numericCode":32},{"code":"AMD","fractionDigits":2,"numericCode":51},{"code":"AWG","fractionDigits":2,"numericCode":533},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"AZN","fractionDigits":2,"numericCode":944},{"code":"BSD","fractionDigits":2,"numericCode":44},{"code":"BHD","fractionDigits":3,"numericCode":48},{"code":"BDT","fractionDigits":2,"numericCode":50},{"code"
:"BBD","fractionDigits":2,"numericCode":52},{"code":"BYR","fractionDigits":0,"numericCode":974},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"BZD","fractionDigits":2,"numericCode":84},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"BMD","fractionDigits":2,"numericCode":60},{"code":"BTN","fractionDigits":2,"numericCode":64},{"code":"INR","fractionDigits":2,"numericCode":356},{"code":"BOB","fractionDigits":2,"numericCode":68},{"code":"BOV","fractionDigits":2,"numericCode":984},{"code"
:"USD","fractionDigits":2,"numericCode":840},{"code":"BAM","fractionDigits":2,"numericCode":977},{"code":"BWP","fractionDigits":2,"numericCode":72},{"code":"NOK","fractionDigits":2,"numericCode":578},{"code":"BRL","fractionDigits":2,"numericCode":986},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"BND","fractionDigits":2,"numericCode":96},{"code":"BGN","fractionDigits":2,"numericCode":975},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"BIF","fractionDigits":0,"numericCode":108},{"code"
:"KHR","fractionDigits":2,"numericCode":116},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"CAD","fractionDigits":2,"numericCode":124},{"code":"CVE","fractionDigits":2,"numericCode":132},{"code":"KYD","fractionDigits":2,"numericCode":136},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"CLF","fractionDigits":4,"numericCode":990},{"code":"CLP","fractionDigits":0,"numericCode":152},{"code":"CNY","fractionDigits":2,"numericCode":156}
,{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"COP","fractionDigits":2,"numericCode":170},{"code":"COU","fractionDigits":2,"numericCode":970},{"code":"KMF","fractionDigits":0,"numericCode":174},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"CDF","fractionDigits":2,"numericCode":976},{"code":"NZD","fractionDigits":2,"numericCode":554},{"code":"CRC","fractionDigits":2,"numericCode":188},{"code":"XOF","fractionDigits":0,"numericCode"
:952},{"code":"HRK","fractionDigits":2,"numericCode":191},{"code":"CUC","fractionDigits":2,"numericCode":931},{"code":"CUP","fractionDigits":2,"numericCode":192},{"code":"ANG","fractionDigits":2,"numericCode":532},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"CZK","fractionDigits":2,"numericCode":203},{"code":"DKK","fractionDigits":2,"numericCode":208},{"code":"DJF","fractionDigits":0,"numericCode":262},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"DOP","fractionDigits":2,"numericCode"
:214},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"EGP","fractionDigits":2,"numericCode":818},{"code":"SVC","fractionDigits":2,"numericCode":222},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"ERN","fractionDigits":2,"numericCode":232},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"ETB","fractionDigits":2,"numericCode":230},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"FKP","fractionDigits":2,"numericCode"
:238},{"code":"DKK","fractionDigits":2,"numericCode":208},{"code":"FJD","fractionDigits":2,"numericCode":242},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XPF","fractionDigits":0,"numericCode":953},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"GMD","fractionDigits":2,"numericCode":270},{"code":"GEL","fractionDigits":2,"numericCode"
:981},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"GHS","fractionDigits":2,"numericCode":936},{"code":"GIP","fractionDigits":2,"numericCode":292},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"DKK","fractionDigits":2,"numericCode":208},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"GTQ","fractionDigits":2,"numericCode":320},{"code":"GBP","fractionDigits":2,"numericCode"
:826},{"code":"GNF","fractionDigits":0,"numericCode":324},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"GYD","fractionDigits":2,"numericCode":328},{"code":"HTG","fractionDigits":2,"numericCode":332},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"HNL","fractionDigits":2,"numericCode":340},{"code":"HKD","fractionDigits":2,"numericCode":344},{"code":"HUF","fractionDigits":2,"numericCode"
:348},{"code":"ISK","fractionDigits":0,"numericCode":352},{"code":"INR","fractionDigits":2,"numericCode":356},{"code":"IDR","fractionDigits":2,"numericCode":360},{"code":"XDR","fractionDigits":-1,"numericCode":960},{"code":"IRR","fractionDigits":2,"numericCode":364},{"code":"IQD","fractionDigits":3,"numericCode":368},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"GBP","fractionDigits":2,"numericCode":826},{"code":"ILS","fractionDigits":2,"numericCode":376},{"code":"EUR","fractionDigits":2,"numericCode"
:978},{"code":"JMD","fractionDigits":2,"numericCode":388},{"code":"JPY","fractionDigits":0,"numericCode":392},{"code":"GBP","fractionDigits":2,"numericCode":826},{"code":"JOD","fractionDigits":3,"numericCode":400},{"code":"KZT","fractionDigits":2,"numericCode":398},{"code":"KES","fractionDigits":2,"numericCode":404},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"KPW","fractionDigits":2,"numericCode":408},{"code":"KRW","fractionDigits":0,"numericCode":410},{"code":"KWD","fractionDigits":3,"numericCode"
:414},{"code":"KGS","fractionDigits":2,"numericCode":417},{"code":"LAK","fractionDigits":2,"numericCode":418},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"LBP","fractionDigits":2,"numericCode":422},{"code":"LSL","fractionDigits":2,"numericCode":426},{"code":"ZAR","fractionDigits":2,"numericCode":710},{"code":"LRD","fractionDigits":2,"numericCode":430},{"code":"LYD","fractionDigits":3,"numericCode":434},{"code":"CHF","fractionDigits":2,"numericCode":756},{"code":"EUR","fractionDigits":2,"numericCode"
:978},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"MOP","fractionDigits":2,"numericCode":446},{"code":"MKD","fractionDigits":2,"numericCode":807},{"code":"MGA","fractionDigits":2,"numericCode":969},{"code":"MWK","fractionDigits":2,"numericCode":454},{"code":"MYR","fractionDigits":2,"numericCode":458},{"code":"MVR","fractionDigits":2,"numericCode":462},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"USD","fractionDigits":2,"numericCode"
:840},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"MRO","fractionDigits":2,"numericCode":478},{"code":"MUR","fractionDigits":2,"numericCode":480},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XUA","fractionDigits":-1,"numericCode":965},{"code":"MXN","fractionDigits":2,"numericCode":484},{"code":"MXV","fractionDigits":2,"numericCode":979},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"MDL","fractionDigits":2,"numericCode":498},{"code":"EUR","fractionDigits":2,"numericCode"
:978},{"code":"MNT","fractionDigits":2,"numericCode":496},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"MAD","fractionDigits":2,"numericCode":504},{"code":"MZN","fractionDigits":2,"numericCode":943},{"code":"MMK","fractionDigits":2,"numericCode":104},{"code":"NAD","fractionDigits":2,"numericCode":516},{"code":"ZAR","fractionDigits":2,"numericCode":710},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"NPR","fractionDigits":2,"numericCode"
:524},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XPF","fractionDigits":0,"numericCode":953},{"code":"NZD","fractionDigits":2,"numericCode":554},{"code":"NIO","fractionDigits":2,"numericCode":558},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"NGN","fractionDigits":2,"numericCode":566},{"code":"NZD","fractionDigits":2,"numericCode":554},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"NOK","fractionDigits":2,"numericCode"
:578},{"code":"OMR","fractionDigits":3,"numericCode":512},{"code":"PKR","fractionDigits":2,"numericCode":586},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":null,"fractionDigits":0,"numericCode":0},{"code":"PAB","fractionDigits":2,"numericCode":590},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"PGK","fractionDigits":2,"numericCode":598},{"code":"PYG","fractionDigits":0,"numericCode":600},{"code":"PEN","fractionDigits":2,"numericCode":604},{"code":"PHP","fractionDigits":2,"numericCode"
:608},{"code":"NZD","fractionDigits":2,"numericCode":554},{"code":"PLN","fractionDigits":2,"numericCode":985},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"QAR","fractionDigits":2,"numericCode":634},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"RON","fractionDigits":2,"numericCode":946},{"code":"RUB","fractionDigits":2,"numericCode":643},{"code":"RWF","fractionDigits":0,"numericCode":646},{"code":"EUR","fractionDigits":2,"numericCode"
:978},{"code":"SHP","fractionDigits":2,"numericCode":654},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"WST","fractionDigits":2,"numericCode":882},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"STD","fractionDigits":2,"numericCode":678},{"code":"SAR","fractionDigits":2,"numericCode"
:682},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"RSD","fractionDigits":2,"numericCode":941},{"code":"SCR","fractionDigits":2,"numericCode":690},{"code":"SLL","fractionDigits":2,"numericCode":694},{"code":"SGD","fractionDigits":2,"numericCode":702},{"code":"ANG","fractionDigits":2,"numericCode":532},{"code":"XSU","fractionDigits":-1,"numericCode":994},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"SBD","fractionDigits":2,"numericCode"
:90},{"code":"SOS","fractionDigits":2,"numericCode":706},{"code":"ZAR","fractionDigits":2,"numericCode":710},{"code":null,"fractionDigits":0,"numericCode":0},{"code":"SSP","fractionDigits":2,"numericCode":728},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"LKR","fractionDigits":2,"numericCode":144},{"code":"SDG","fractionDigits":2,"numericCode":938},{"code":"SRD","fractionDigits":2,"numericCode":968},{"code":"NOK","fractionDigits":2,"numericCode":578},{"code":"SZL","fractionDigits":2,"numericCode"
:748},{"code":"SEK","fractionDigits":2,"numericCode":752},{"code":"CHE","fractionDigits":2,"numericCode":947},{"code":"CHF","fractionDigits":2,"numericCode":756},{"code":"CHW","fractionDigits":2,"numericCode":948},{"code":"SYP","fractionDigits":2,"numericCode":760},{"code":"TWD","fractionDigits":2,"numericCode":901},{"code":"TJS","fractionDigits":2,"numericCode":972},{"code":"TZS","fractionDigits":2,"numericCode":834},{"code":"THB","fractionDigits":2,"numericCode":764},{"code":"USD","fractionDigits":2,"numericCode"
:840},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"NZD","fractionDigits":2,"numericCode":554},{"code":"TOP","fractionDigits":2,"numericCode":776},{"code":"TTD","fractionDigits":2,"numericCode":780},{"code":"TND","fractionDigits":3,"numericCode":788},{"code":"TRY","fractionDigits":2,"numericCode":949},{"code":"TMT","fractionDigits":2,"numericCode":934},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"UGX","fractionDigits":0,"numericCode"
:800},{"code":"UAH","fractionDigits":2,"numericCode":980},{"code":"AED","fractionDigits":2,"numericCode":784},{"code":"GBP","fractionDigits":2,"numericCode":826},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"USN","fractionDigits":2,"numericCode":997},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"UYI","fractionDigits":0,"numericCode":940},{"code":"UYU","fractionDigits":2,"numericCode":858},{"code":"UZS","fractionDigits":2,"numericCode":860},{"code":"VUV","fractionDigits":0,"numericCode"
:548},{"code":"VEF","fractionDigits":2,"numericCode":937},{"code":"VND","fractionDigits":0,"numericCode":704},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"XPF","fractionDigits":0,"numericCode":953},{"code":"MAD","fractionDigits":2,"numericCode":504},{"code":"YER","fractionDigits":2,"numericCode":886},{"code":"ZMW","fractionDigits":2,"numericCode":967},{"code":"ZWL","fractionDigits":2,"numericCode":932},{"code":"XBA","fractionDigits":-1,"numericCode"
:955},{"code":"XBB","fractionDigits":-1,"numericCode":956},{"code":"XBC","fractionDigits":-1,"numericCode":957},{"code":"XBD","fractionDigits":-1,"numericCode":958},{"code":"XTS","fractionDigits":-1,"numericCode":963},{"code":"XXX","fractionDigits":-1,"numericCode":999},{"code":"XAU","fractionDigits":-1,"numericCode":959},{"code":"XPD","fractionDigits":-1,"numericCode":964},{"code":"XPT","fractionDigits":-1,"numericCode":962},{"code":"XAG","fractionDigits":-1,"numericCode":961}];}
function Yz(){return {"":{"value":"CYP"},"PR":{"value":"USD"},"PT":{"value":"EUR"},"PW":{"value":"USD"},"PY":{"value":"PYG"},"QA":{"value":"QAR"},"AC":{"value":"SHP"},"AD":{"value":"EUR"},"AE":{"value":"AED"},"AF":{"value":"AFN"},"AG":{"value":"XCD"},"AI":{"value":"XCD"},"AL":{"value":"ALL"},"AM":{"value":"AMD"},"AN":{"value":"ANG"},"AO":{"value":"AOA"},"242":{"value":"Brazzaville"},"AQ":{"value":""},"AR":{"value":"ARS"},"243":{"value":"Kinshasa"},"AS":{"value":"USD"},"AT":{"value":"EUR"},"RE":{"value":"EUR"}
,"AU":{"value":""},"AW":{"value":"AWG"},"AX":{"value":"EUR"},"AZ":{"value":"AMD"},"RO":{"value":"RON"},"BA":{"value":"BAM"},"BB":{"value":"BBD"},"RS":{"value":"RSD"},"BD":{"value":"BDT"},"BE":{"value":"EUR"},"RU":{"value":"RUB"},"BF":{"value":"XOF"},"BG":{"value":"BGN"},"RW":{"value":"RWF"},"27":{"value":""},"BH":{"value":"BHD"},"BI":{"value":"BIF"},"BJ":{"value":"XOF"},"BM":{"value":"BMD"},"BN":{"value":"BND"},"BO":{"value":"BOB"},"SA":{"value":"SAR"},"SB":{"value":"SBD"},"BR":{"value":"BRL"},"SC":{"value"
:"SCR"},"SD":{"value":"SDD"},"BT":{"value":"BTN"},"SE":{"value":"SEK"},"SG":{"value":"SGD"},"BV":{"value":""},"BW":{"value":"BWP"},"SH":{"value":"SHP"},"SI":{"value":"EUR"},"BY":{"value":"BYR"},"SJ":{"value":"NOK"},"BZ":{"value":"BZD"},"SK":{"value":"SKK"},"SL":{"value":"SLL"},"SM":{"value":"EUR"},"SN":{"value":"XOF"},"SO":{"value":""},"CA":{"value":"CAD"},"SR":{"value":"SRD"},"CC":{"value":"AUD"},"ST":{"value":"STD"},"CF":{"value":"XAF"},"SV":{"value":"USD"},"CH":{"value":"CHF"},"CI":{"value":"XOF"},"SY":{"value"
:"SYP"},"SZ":{"value":"SZL"},"CK":{"value":"NZD"},"CL":{"value":"CLP"},"CM":{"value":"XAF"},"CO":{"value":"COP"},"TA":{"value":"SHP"},"CR":{"value":"CRC"},"TC":{"value":"USD"},"TD":{"value":"XAF"},"CU":{"value":"CUP"},"TF":{"value":""},"CV":{"value":"CVE"},"TG":{"value":"XOF"},"TH":{"value":"THB"},"CX":{"value":"AUD"},"CY":{"value":"TRY"},"TJ":{"value":"TJS"},"CZ":{"value":"CZK"},"TK":{"value":"NZD"},"TL":{"value":"USD"},"TM":{"value":"TMM"},"TN":{"value":"TND"},"TO":{"value":"TOP"},"TR":{"value":"TRY"},"TT":
{"value":"TTD"},"DE":{"value":"EUR"},"TV":{"value":"AUD"},"DJ":{"value":"DJF"},"TZ":{"value":"TZS"},"DK":{"value":"DKK"},"DM":{"value":"XCD"},"DO":{"value":"DOP"},"UA":{"value":"UAH"},"UG":{"value":"UGX"},"DZ":{"value":"DZD"},"UM":{"value":""},"EC":{"value":"USD"},"US":{"value":"USD"},"EE":{"value":"EEK"},"EG":{"value":"EGP"},"UY":{"value":"UYU"},"UZ":{"value":"UZS"},"VA":{"value":"EUR"},"ER":{"value":"ERN"},"VC":{"value":"XCD"},"ES":{"value":"EUR"},"ET":{"value":"ETB"},"VE":{"value":"VEB"},"VG":{"value":"USD"}
,"VI":{"value":"USD"},"VN":{"value":"VND"},"VU":{"value":"VUV"},"FI":{"value":"EUR"},"FJ":{"value":"FJD"},"FK":{"value":"FKP"},"FM":{"value":"USD"},"FO":{"value":"DKK"},"FR":{"value":"EUR"},"WF":{"value":"XPF"},"850":{"value":"Pyongyang"},"GA":{"value":"XAF"},"GB":{"value":"GBP"},"WS":{"value":"WST"},"GD":{"value":"XCD"},"GE":{"value":"RUB and GEL"},"GF":{"value":"EUR"},"GG":{"value":"GGP"},"GH":{"value":"GHC"},"GI":{"value":"GIP"},"GL":{"value":"DKK"},"GN":{"value":"GNF"},"GP":{"value":"EUR"},"GQ":{"value"
:"XAF"},"GR":{"value":"EUR"},"GS":{"value":""},"GT":{"value":"GTQ"},"GU":{"value":"USD"},"GW":{"value":"XOF"},"GY":{"value":"GYD"},"-241":{"value":"Nassau"},"82":{"value":"Seoul"},"86":{"value":"Beijing"},"HK":{"value":"HKD"},"HM":{"value":""},"HN":{"value":"HNL"},"HR":{"value":"HRK"},"HT":{"value":"HTG"},"YE":{"value":"YER"},"HU":{"value":"HUF"},"ID":{"value":"IDR"},"YT":{"value":"EUR"},"IE":{"value":"EUR"},"IL":{"value":"ILS"},"IM":{"value":"IMP"},"IN":{"value":"INR"},"IO":{"value":""},"IQ":{"value":"IQD"}
,"IR":{"value":"IRR"},"IS":{"value":"ISK"},"IT":{"value":"EUR"},"ZM":{"value":"ZMK"},"886":{"value":"Taipei"},"JE":{"value":"JEP"},"ZW":{"value":"ZWD"},"JM":{"value":"JMD"},"JO":{"value":"JOD"},"JP":{"value":"JPY"},"KE":{"value":"KES"},"KG":{"value":"KGS"},"KH":{"value":"KHR"},"KI":{"value":"AUD"},"KM":{"value":"KMF"},"KN":{"value":"XCD"},"KW":{"value":"KWD"},"KY":{"value":"KYD"},"KZ":{"value":"KZT"},"LA":{"value":"LAK"},"LB":{"value":"LBP"},"LC":{"value":"XCD"},"LI":{"value":"CHF"},"LK":{"value":"LKR"},"LR":
{"value":"LRD"},"LS":{"value":"LSL"},"LT":{"value":"LTL"},"LU":{"value":"EUR"},"LV":{"value":"LVL"},"LY":{"value":"LYD"},"MA":{"value":"MAD"},"MC":{"value":"EUR"},"MD":{"value":""},"ME":{"value":"EUR"},"MG":{"value":"MGA"},"MH":{"value":"USD"},"MK":{"value":"MKD"},"ML":{"value":"XOF"},"MM":{"value":"MMK"},"MN":{"value":"MNT"},"MO":{"value":"MOP"},"MP":{"value":"USD"},"MQ":{"value":"EUR"},"MR":{"value":"MRO"},"MS":{"value":"XCD"},"MT":{"value":"MTL"},"MU":{"value":"MUR"},"MV":{"value":"MVR"},"MW":{"value":"MWK"}
,"MX":{"value":"MXN"},"MY":{"value":"MYR"},"MZ":{"value":"MZM"},"NA":{"value":"NAD"},"NC":{"value":"XPF"},"NE":{"value":"XOF"},"NF":{"value":"AUD"},"NG":{"value":"NGN"},"NI":{"value":"NIO"},"NL":{"value":"EUR"},"NO":{"value":"NOK"},"NP":{"value":"NPR"},"NR":{"value":"AUD"},"NU":{"value":"NZD"},"NZ":{"value":"NZD"},"OM":{"value":"OMR"},"220":{"value":"Banjul"},"PA":{"value":"PAB"},"PE":{"value":"PEN"},"PF":{"value":""},"PG":{"value":"PGK"},"PH":{"value":"PHP"},"PK":{"value":"PKR"},"PL":{"value":"PLN"},"PM":{"value"
:"EUR"},"PN":{"value":"NZD"}};}
function Km(){B.call(this);this.i5=null;}
function Gj(a,b,c){return b===null?I5(c,b):I5(b,c);}
function BE(){X.call(this);}
function AA3(){var a=new BE();Ry(a);return a;}
function Ry(a){M(a);}
function IP(){CX.call(this);}
function YK(a){return new IR;}
function IQ(){CU.call(this);}
function G4(){var a=this;DL.call(a);a.b5=0;a.bU=0;}
function Wq(a){return a.b5;}
function WB(a){return a.bU;}
function Rb(a){var b;b=new P;Q(b);G(b,C(36));b=W(b,a.b5);G(b,C(118));G(b,a.bU==2147483647?C(20):Gh(N7(a.bU)));G(b,C(31));return N(b);}
function HK(){Y.call(this);}
function Yk(a,b,c,d){return b;}
function R$(a,b){return 0;}
function Ju(){var a=this;B.call(a);a.m=null;a.z=0;}
function Y1(){var a=new Ju();S4(a);return a;}
function S4(a){a.m=$rt_createIntArray(0);}
function FM(a,b){var c,d;c=b/32|0;if(b>=a.z){Ez(a,c+1|0);a.z=b+1|0;}d=a.m.data;d[c]=d[c]|1<<(b%32|0);}
function EY(a,b,c){var d,e,f,g,h;if(b>c){d=new Br;M(d);F(d);}e=b/32|0;f=c/32|0;if(c>a.z){Ez(a,f+1|0);a.z=c;}if(e==f){g=a.m.data;g[e]=g[e]|EJ(a,b)&Eo(a,c);}else{g=a.m.data;g[e]=g[e]|EJ(a,b);h=e+1|0;while(h<f){a.m.data[h]=(-1);h=h+1|0;}g=a.m.data;g[f]=g[f]|Eo(a,c);}}
function EJ(a,b){return (-1)<<(b%32|0);}
function Eo(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0);}
function GB(a,b){var c,d,e,f;c=b/32|0;if(c<a.m.data.length){d=a.m.data;e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|(-2)>>>(32-f|0));if(b==(a.z-1|0))D9(a);}}
function K_(a,b,c){var d,e,f,g,h;if(b>c){d=new Br;M(d);F(d);}if(b>=a.z)return;c=Bm(a.z,c);e=b/32|0;f=c/32|0;if(e==f){g=a.m.data;g[e]=g[e]&(Eo(a,b)|EJ(a,c));}else{g=a.m.data;g[e]=g[e]&Eo(a,b);h=e+1|0;while(h<f){a.m.data[h]=0;h=h+1|0;}g=a.m.data;g[f]=g[f]&EJ(a,c);}D9(a);}
function Cf(a,b){var c;c=b/32|0;return c<a.m.data.length&&a.m.data[c]&1<<(b%32|0)?1:0;}
function Eg(a,b){var c,d,e;if(b>=a.z)return (-1);c=b/32|0;d=a.m.data[c]>>>(b%32|0);if(d)return Ev(d)+b|0;d=(a.z+31|0)/32|0;e=c+1|0;while(e<d){if(a.m.data[e])return (e*32|0)+Ev(a.m.data[e])|0;e=e+1|0;}return (-1);}
function LT(a,b){var c,d,e;if(b>=a.z)return b;c=b/32|0;d=(a.m.data[c]^(-1))>>>(b%32|0);if(d)return Ev(d)+b|0;d=(a.z+31|0)/32|0;e=c+1|0;while(e<d){if(a.m.data[e]!=(-1))return (e*32|0)+Ev(a.m.data[e]^(-1))|0;e=e+1|0;}return a.z;}
function Ez(a,b){var c,d,e,f;if(a.m.data.length>=b)return;c=Bs((b*3|0)/2|0,(a.m.data.length*2|0)+1|0);d=a.m.data;e=$rt_createIntArray(c);f=e.data;b=Bm(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.m=e;}
function D9(a){var b,c,d;b=(a.z+31|0)/32|0;a.z=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=C_(a.m.data[c]);if(d<32)break;c=c+(-1)|0;a.z=a.z-32|0;}a.z=a.z-d|0;}}
function LG(a,b){var c,d;c=Bm(a.m.data.length,b.m.data.length);d=0;while(d<c){if(a.m.data[d]&b.m.data[d])return 1;d=d+1|0;}return 0;}
function B3(a,b){var c,d,e;c=Bm(a.m.data.length,b.m.data.length);d=0;while(d<c){e=a.m.data;e[d]=e[d]&b.m.data[d];d=d+1|0;}while(c<a.m.data.length){a.m.data[c]=0;c=c+1|0;}a.z=Bm(a.z,b.z);D9(a);}
function Dt(a,b){var c,d,e;c=Bm(a.m.data.length,b.m.data.length);d=0;while(d<c){e=a.m.data;e[d]=e[d]&(b.m.data[d]^(-1));d=d+1|0;}D9(a);}
function Do(a,b){var c,d,e;a.z=Bs(a.z,b.z);Ez(a,(a.z+31|0)/32|0);c=Bm(a.m.data.length,b.z);d=0;while(d<c){e=a.m.data;e[d]=e[d]|b.m.data[d];d=d+1|0;}}
function Du(a,b){var c,d,e;a.z=Bs(a.z,b.z);Ez(a,(a.z+31|0)/32|0);c=Bm(a.m.data.length,b.z);d=0;while(d<c){e=a.m.data;e[d]=e[d]^b.m.data[d];d=d+1|0;}D9(a);}
function Gm(a){return a.z?0:1;}
function GW(){var a=this;Bg.call(a);a.ho=null;a.iv=0;}
function Vw(a,b){a.c=b;}
function OI(a,b,c,d){var e,f,g,h,i;e=d.bu;f=d.t;g=b+1|0;h=BJ(g,f);if(h>0){d.bI=1;return (-1);}i=H(c,b);if(!a.ho.g(i))return (-1);if(BW(i)){if(h<0&&Cg(H(c,g)))return (-1);}else if(Cg(i)&&b>e&&BW(H(c,b-1|0)))return (-1);return a.c.a(g,c,d);}
function I7(){var a=this;Bg.call(a);a.fy=null;a.eW=null;}
function LK(a,b){var c=new I7();O6(c,a,b);return c;}
function O6(a,b,c){Bh(a);a.fy=b;a.eW=c;}
function RI(a,b,c,d){var e;e=a.fy.a(b,c,d);if(e<0)e=OI(a.eW,b,c,d);if(e>=0)return e;return (-1);}
function RU(a,b){a.c=b;a.eW.c=b;a.fy.w(b);}
function SP(a,b){return 1;}
function So(a,b){return 1;}
function Co(){var a=this;Bg.call(a);a.bQ=null;a.j_=0;}
function Yg(a){var b=new Co();HM(b,a);return b;}
function HM(a,b){Bh(a);a.bQ=b.dO();a.j_=b.y;}
function U6(a,b,c,d){var e,f,g;e=d.t;if(b<e){f=b+1|0;g=H(c,b);if(a.g(g)){b=a.c.a(f,c,d);if(b>0)return b;}if(f<e){b=f+1|0;f=H(c,f);if(En(g,f)&&a.g(CK(g,f)))return a.c.a(b,c,d);}}return (-1);}
function VV(a,b){return a.bQ.g(b);}
function Rx(a,b){if(b instanceof Cv)return a.bQ.g(b.ck);if(b instanceof CF)return a.bQ.g(b.bC);if(b instanceof Co)return Es(a.bQ,b.bQ);if(!(b instanceof CI))return 1;return Es(a.bQ,b.ca);}
function X_(a){return a.bQ;}
function Vi(a,b){a.c=b;}
function Vk(a,b){return 1;}
function Fk(){Co.call(this);}
function XU(a,b){return a.bQ.g(Dy(Ek(b)));}
function LZ(){var a=this;Bo.call(a);a.hM=null;a.jR=0;}
function WS(a){var b=new LZ();Ri(b,a);return b;}
function Ri(a,b){Cl(a);a.hM=b.dO();a.jR=b.y;}
function Ym(a,b,c){return !a.hM.g(CZ(CP(H(c,b))))?(-1):1;}
function CI(){var a=this;Bo.call(a);a.ca=null;a.iD=0;}
function V0(a){var b=new CI();SR(b,a);return b;}
function SR(a,b){Cl(a);a.ca=b.dO();a.iD=b.y;}
function GF(a,b,c){return !a.ca.g(H(c,b))?(-1):1;}
function Sb(a,b){if(b instanceof CF)return a.ca.g(b.bC);if(b instanceof CI)return Es(a.ca,b.ca);if(!(b instanceof Co)){if(!(b instanceof Cv))return 1;return 0;}return Es(a.ca,b.bQ);}
function RX(a){return a.ca;}
function H9(){var a=this;Bg.call(a);a.b6=null;a.fj=null;a.dm=0;}
function Wl(a,b){var c=new H9();QG(c,a,b);return c;}
function QG(a,b,c){Bh(a);a.b6=b;a.dm=c;}
function PZ(a,b){a.c=b;}
function Ji(a){if(a.fj===null)a.fj=KB(a.b6);return a.fj;}
function P0(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d.t;f=$rt_createIntArray(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=H(c,b);k=j-44032|0;if(k>=0&&k<11172){b=4352+(k/588|0)|0;l=4449+((k%588|0)/28|0)|0;k=k%28|0;if(!k){m=$rt_createIntArray(2);n=m.data;n[0]=b;n[1]=l;}else{o=4519+k|0;m=$rt_createIntArray(3);n=m.data;n[0]=b;n[1]=l;n[2]=o;}}else m=null;if(m!==null){m=m.data;l=0;if(m.length!=a.dm)return (-1);while(true){if(l>=a.dm)return a.c.a(i,c,d);if(m[l]!=a.b6.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]
=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=H(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=H(c,k);h=j-4519|0;}if(h>=0&&h<28){b=k+1|0;f[2]=j;return a.dm==3&&f[0]==a.b6.data[0]&&f[1]==a.b6.data[1]&&f[2]==a.b6.data[2]?a.c.a(b,c,d):(-1);}return a.dm==2&&f[0]==a.b6.data[0]&&f[1]==a.b6.data[1]?a.c.a(k,c,d):(-1);}return (-1);}return (-1);}
function SB(a,b){return b instanceof H9&&!Be(Ji(b),Ji(a))?0:1;}
function Wk(a,b){return 1;}
function CF(){Bo.call(this);this.bC=0;}
function Nb(a){var b=new CF();S1(b,a);return b;}
function S1(a,b){Cl(a);a.bC=b;}
function X7(a){return 1;}
function WP(a,b,c){return a.bC!=H(c,b)?(-1):1;}
function Yb(a,b,c,d,e){var f,g;if(!(d instanceof Ck))return EP(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=DF(f,a.bC,c);if(g<0)break a;if(g<b)break a;if(a.c.a(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function Sm(a){return a.bC;}
function V$(a,b){if(b instanceof CF)return b.bC!=a.bC?0:1;if(!(b instanceof CI)){if(b instanceof Co)return b.g(a.bC);if(!(b instanceof Cv))return 1;return 0;}return GF(b,0,Jw(a.bC))<=0?0:1;}
function OK(){Bo.call(this);this.gg=0;}
function Tv(a){var b=new OK();QZ(b,a);return b;}
function QZ(a,b){Cl(a);a.gg=CZ(CP(b));}
function PL(a,b,c){return a.gg!=CZ(CP(H(c,b)))?(-1):1;}
function KP(){var a=this;Bo.call(a);a.hF=0;a.gD=0;}
function S9(a){var b=new KP();T2(b,a);return b;}
function T2(a,b){Cl(a);a.hF=b;a.gD=EA(b);}
function Qs(a,b,c){return a.hF!=H(c,b)&&a.gD!=H(c,b)?(-1):1;}
function Dh(){var a=this;Bg.call(a);a.c2=0;a.fl=null;a.ey=null;a.er=0;}
function AA4(a,b){var c=new Dh();HC(c,a,b);return c;}
function HC(a,b,c){Bh(a);a.c2=1;a.ey=b;a.er=c;}
function XL(a,b){a.c=b;}
function RV(a,b,c,d){var e,f,g,h,i,j,k,l;e=$rt_createIntArray(4);f=d.t;if(b>=f)return (-1);g=Go(a,b,c,f);h=b+a.c2|0;i=N8(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;CN(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Go(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=N8(g).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.c2|0;if(h>=f){b=k;break a;}g=Go(a,h,c,f);b=k;}}}if(b!=a.er)return (-1);i=e.data;g=0;while
(true){if(g>=b)return a.c.a(h,c,d);if(i[g]!=a.ey.data[g])break;g=g+1|0;}return (-1);}
function Jm(a){var b,c;if(a.fl===null){b=new P;Q(b);c=0;while(c<a.er){Dd(b,Eb(a.ey.data[c]));c=c+1|0;}a.fl=N(b);}return a.fl;}
function Go(a,b,c,d){var e,f,g;a.c2=1;if(b>=(d-1|0))e=H(c,b);else{d=b+1|0;e=H(c,b);f=H(c,d);if(En(e,f)){g=$rt_createCharArray(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&BW(g[0])&&Cg(g[1])?CK(g[0],g[1]):g[0];a.c2=2;}}return e;}
function Yo(a,b){return b instanceof Dh&&!Be(Jm(b),Jm(a))?0:1;}
function Ts(a,b){return 1;}
function JP(){Dh.call(this);}
function Hx(){Dh.call(this);}
function Kp(){BR.call(this);}
function TL(a,b,c,d){var e;while(true){e=a.p.a(b,c,d);if(e<=0)break;b=e;}return a.c.a(b,c,d);}
function IS(){BR.call(this);}
function QK(a,b,c,d){var e;e=a.p.a(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.p.a(e,c,d);if(b<=e)break;e=b;}b=e;}return a.c.a(b,c,d);}
function Ds(){BR.call(this);}
function U$(a,b,c,d){var e;if(!a.p.s(d))return a.c.a(b,c,d);e=a.p.a(b,c,d);if(e>=0)return e;return a.c.a(b,c,d);}
function W3(a,b){a.c=b;a.p.w(b);}
function Iz(){Ds.call(this);}
function X$(a,b,c,d){var e;e=a.p.a(b,c,d);if(e<=0)e=b;return a.c.a(e,c,d);}
function Rc(a,b){a.c=b;}
function Dg(){var a=this;BR.call(a);a.cs=null;a.bD=0;}
function AC9(a,b,c,d,e){var f=new Dg();Fi(f,a,b,c,d,e);return f;}
function Fi(a,b,c,d,e,f){B9(a,c,d,e);a.cs=b;a.bD=f;}
function YR(a,b,c,d){var e,f;e=GZ(d,a.bD);if(!a.p.s(d))return a.c.a(b,c,d);if(e>=a.cs.bU)return a.c.a(b,c,d);f=a.bD;e=e+1|0;CE(d,f,e);f=a.p.a(b,c,d);if(f>=0){CE(d,a.bD,0);return f;}f=a.bD;e=e+(-1)|0;CE(d,f,e);if(e>=a.cs.b5)return a.c.a(b,c,d);CE(d,a.bD,0);return (-1);}
function G9(){Dg.call(this);}
function Xo(a,b,c,d){var e,f,g;e=0;f=a.cs.bU;a:{while(true){g=a.p.a(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.cs.b5)return (-1);return a.c.a(b,c,d);}
function JT(){BR.call(this);}
function X6(a,b,c,d){var e;if(!a.p.s(d))return a.c.a(b,c,d);e=a.c.a(b,c,d);if(e>=0)return e;return a.p.a(b,c,d);}
function Jh(){Ds.call(this);}
function SQ(a,b,c,d){var e;if(!a.p.s(d))return a.c.a(b,c,d);e=a.c.a(b,c,d);if(e<0)e=a.p.a(b,c,d);return e;}
function Ik(){Dg.call(this);}
function Q8(a,b,c,d){var e,f;e=GZ(d,a.bD);if(!a.p.s(d))return a.c.a(b,c,d);if(e>=a.cs.bU){CE(d,a.bD,0);return a.c.a(b,c,d);}if(e<a.cs.b5){CE(d,a.bD,e+1|0);f=a.p.a(b,c,d);}else{f=a.c.a(b,c,d);if(f>=0){CE(d,a.bD,0);return f;}CE(d,a.bD,e+1|0);f=a.p.a(b,c,d);}return f;}
function JU(){Cu.call(this);}
function YD(a,b,c,d){var e;e=d.t;if(e>b)return a.c.bk(b,e,c,d);return a.c.a(b,c,d);}
function HP(){Cu.call(this);this.hf=null;}
function Se(a,b,c,d){var e,f;e=d.t;f=b;a:{while(true){if(f>=e){f=(-1);break a;}if(a.hf.d1(H(c,f)))break;f=f+1|0;}}if(f>=0)e=f;if(e>b)return a.c.bk(b,e,c,d);return a.c.a(b,c,d);}
function C5(){B.call(this);}
var AC$=null;var AC_=null;function ID(b){if(!(b&1)){if(AC_!==null)return AC_;AC_=new IF;return AC_;}if(AC$!==null)return AC$;AC$=new IE;return AC$;}
function Kq(){B2.call(this);}
function Q_(a,b,c,d){var e;a:{while(true){if((b+a.I.bd()|0)>d.t)break a;e=a.I.M(b,c);if(e<1)break;b=b+e|0;}}return a.c.a(b,c,d);}
function I8(){CQ.call(this);}
function QH(a,b,c,d){var e;if((b+a.I.bd()|0)<=d.t){e=a.I.M(b,c);if(e>=1)b=b+e|0;}return a.c.a(b,c,d);}
function Ip(){C8.call(this);}
function Uy(a,b,c,d){var e,f,g,h,i;e=a.cp.b5;f=a.cp.bU;g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.I.bd()|0)>d.t)break a;h=a.I.M(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.c.a(b,c,d);}if((b+a.I.bd()|0)>d.t){d.bI=1;return (-1);}i=a.I.M(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function Je(){B2.call(this);}
function R7(a,b,c,d){var e;while(true){e=a.c.a(b,c,d);if(e>=0)break;if((b+a.I.bd()|0)<=d.t){e=a.I.M(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function HD(){CQ.call(this);}
function Ro(a,b,c,d){var e;e=a.c.a(b,c,d);if(e>=0)return e;return a.p.a(b,c,d);}
function JG(){C8.call(this);}
function UX(a,b,c,d){var e,f,g,h,i;e=a.cp.b5;f=a.cp.bU;g=0;while(true){if(g>=e){a:{while(true){h=a.c.a(b,c,d);if(h>=0)break;if((b+a.I.bd()|0)<=d.t){h=a.I.M(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.I.bd()|0)>d.t){d.bI=1;return (-1);}i=a.I.M(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function OO(){Y.call(this);}
function Wf(){var a=new OO();Up(a);return a;}
function Up(a){Bh(a);}
function YX(a,b,c,d){if(b&&!(d.ci&&b==d.bu))return (-1);return a.c.a(b,c,d);}
function XD(a,b){return 0;}
function Nn(){Y.call(this);this.hn=0;}
function VY(a){var b=new Nn();XX(b,a);return b;}
function XX(a,b){Bh(a);a.hn=b;}
function Sk(a,b,c,d){var e,f,g;e=b<d.t?H(c,b):32;f=!b?32:H(c,b-1|0);g=d.dI?0:d.bu;return (e!=32&&!Jj(a,e,b,g,c)?0:1)^(f!=32&&!Jj(a,f,b-1|0,g,c)?0:1)^a.hn?(-1):a.c.a(b,c,d);}
function Sz(a,b){return 0;}
function Jj(a,b,c,d,e){var f;if(!Fx(b)&&b!=95){a:{if(BD(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=H(e,c);if(Fx(f))return 0;if(BD(f)!=6)return 1;}}return 1;}return 0;}
function LL(){Y.call(this);}
function AAb(){var a=new LL();Vm(a);return a;}
function Vm(a){Bh(a);}
function XW(a,b,c,d){if(b!=d.cq)return (-1);return a.c.a(b,c,d);}
function YN(a,b){return 0;}
function JA(){Y.call(this);this.cO=0;}
function Z9(a){var b=new JA();NL(b,a);return b;}
function NL(a,b){Bh(a);a.cO=b;}
function S$(a,b,c,d){var e,f,g;e=!d.ci?J(c):d.t;if(b>=e){Ba(d,a.cO,0);return a.c.a(b,c,d);}f=e-b|0;if(f==2&&H(c,b)==13&&H(c,b+1|0)==10){Ba(d,a.cO,0);return a.c.a(b,c,d);}a:{if(f==1){g=H(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}Ba(d,a.cO,0);return a.c.a(b,c,d);}
function Tx(a,b){var c;c=!Ce(b,a.cO)?0:1;Ba(b,a.cO,(-1));return c;}
function Om(){Y.call(this);}
function AAo(){var a=new Om();XI(a);return a;}
function XI(a){Bh(a);}
function RQ(a,b,c,d){if(b<(d.dI?J(c):d.t))return (-1);d.bI=1;d.jm=1;return a.c.a(b,c,d);}
function PK(a,b){return 0;}
function Li(){Y.call(this);this.gb=null;}
function AAp(a){var b=new Li();Tb(b,a);return b;}
function Tb(a,b){Bh(a);a.gb=b;}
function Ti(a,b,c,d){a:{if(b!=d.t){if(!b)break a;if(d.ci&&b==d.bu)break a;if(a.gb.gK(H(c,b-1|0),H(c,b)))break a;}return (-1);}return a.c.a(b,c,d);}
function Wg(a,b){return 0;}
function Og(){Bg.call(this);}
function AAL(){var a=new Og();RB(a);return a;}
function RB(a){Bh(a);}
function Ya(a,b,c,d){var e,f,g,h;e=d.t;f=b+1|0;if(f>e){d.bI=1;return (-1);}g=H(c,b);if(BW(g)){h=b+2|0;if(h<=e&&En(g,H(c,f)))return a.c.a(h,c,d);}return a.c.a(f,c,d);}
function SE(a,b){a.c=b;}
function Rn(a){return (-2147483602);}
function SC(a,b){return 1;}
function Mg(){Bg.call(this);this.f6=null;}
function Z2(a){var b=new Mg();Tu(b,a);return b;}
function Tu(a,b){Bh(a);a.f6=b;}
function RH(a,b,c,d){var e,f,g,h;e=d.t;f=b+1|0;if(f>e){d.bI=1;return (-1);}g=H(c,b);if(BW(g)){b=b+2|0;if(b<=e){h=H(c,f);if(En(g,h))return a.f6.d1(CK(g,h))?(-1):a.c.a(b,c,d);}}return a.f6.d1(g)?(-1):a.c.a(f,c,d);}
function Ul(a,b){a.c=b;}
function PE(a){return (-2147483602);}
function Yu(a,b){return 1;}
function N5(){Y.call(this);this.dE=0;}
function Zd(a){var b=new N5();Wb(b,a);return b;}
function Wb(a,b){Bh(a);a.dE=b;}
function Ys(a,b,c,d){var e;e=!d.ci?J(c):d.t;if(b>=e){Ba(d,a.dE,0);return a.c.a(b,c,d);}if((e-b|0)==1&&H(c,b)==10){Ba(d,a.dE,1);return a.c.a(b+1|0,c,d);}return (-1);}
function V9(a,b){var c;c=!Ce(b,a.dE)?0:1;Ba(b,a.dE,(-1));return c;}
function KY(){Y.call(this);this.cZ=0;}
function AAJ(a){var b=new KY();WU(b,a);return b;}
function WU(a,b){Bh(a);a.cZ=b;}
function RN(a,b,c,d){if((!d.ci?J(c)-b|0:d.t-b|0)<=0){Ba(d,a.cZ,0);return a.c.a(b,c,d);}if(H(c,b)!=10)return (-1);Ba(d,a.cZ,1);return a.c.a(b+1|0,c,d);}
function VO(a,b){var c;c=!Ce(b,a.cZ)?0:1;Ba(b,a.cZ,(-1));return c;}
function KG(){Y.call(this);this.cv=0;}
function Zn(a){var b=new KG();YU(b,a);return b;}
function YU(a,b){Bh(a);a.cv=b;}
function Xu(a,b,c,d){var e,f,g;e=!d.ci?J(c)-b|0:d.bu-b|0;if(!e){Ba(d,a.cv,0);return a.c.a(b,c,d);}if(e<2){f=H(c,b);g=97;}else{f=H(c,b);g=H(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:Ba(d,a.cv,0);return a.c.a(b,c,d);case 13:if(g!=10){Ba(d,a.cv,0);return a.c.a(b,c,d);}Ba(d,a.cv,0);return a.c.a(b,c,d);default:}return (-1);}
function TA(a,b){var c;c=!Ce(b,a.cv)?0:1;Ba(b,a.cv,(-1));return c;}
function D5(){var a=this;Bg.call(a);a.gw=0;a.cS=0;}
function AAX(a,b){var c=new D5();Ii(c,a,b);return c;}
function Ii(a,b,c){Bh(a);a.gw=b;a.cS=c;}
function Rd(a,b,c,d){var e,f,g,h;e=EE(a,d);if(e!==null&&(b+J(e)|0)<=d.t){f=0;while(true){if(f>=J(e)){Ba(d,a.cS,J(e));return a.c.a(b+J(e)|0,c,d);}g=H(e,f);h=b+f|0;if(g!=H(c,h)&&EA(H(e,f))!=H(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function Tk(a,b){a.c=b;}
function EE(a,b){return Pc(b,a.gw);}
function TU(a,b){var c;c=!Ce(b,a.cS)?0:1;Ba(b,a.cS,(-1));return c;}
function N_(){D5.call(this);}
function Zw(a,b){var c=new N_();WM(c,a,b);return c;}
function WM(a,b,c){Ii(a,b,c);}
function TK(a,b,c,d){var e,f;e=EE(a,d);if(e!==null&&(b+J(e)|0)<=d.t){f=!HL(c,e,b)?(-1):J(e);if(f<0)return (-1);Ba(d,a.cS,f);return a.c.a(b+f|0,c,d);}return (-1);}
function QS(a,b,c,d,e){var f,g,h;f=EE(a,e);if(f===null)return (-1);g=d;a:{while(true){if(c<b)return (-1);h=Ns(g,f,c);if(h<0)break a;if(h<b)break a;if(a.c.a(h+J(f)|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function Qy(a,b){return 1;}
function OE(){D5.call(this);}
function AAI(a,b){var c=new OE();V3(c,a,b);return c;}
function V3(a,b,c){Ii(a,b,c);}
function PP(a,b,c,d){var e,f;e=EE(a,d);if(e!==null&&(b+J(e)|0)<=d.t){f=0;while(true){if(f>=J(e)){Ba(d,a.cS,J(e));return a.c.a(b+J(e)|0,c,d);}if(CZ(CP(H(e,f)))!=CZ(CP(H(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function FF(){D7.call(this);}
function Ug(a,b){G(a,b);return a;}
function Vx(a,b){O(a,b);return a;}
function X5(a,b,c,d){E0(a,b,c,d);return a;}
function U0(a,b){Dd(a,b);return a;}
function Qp(a,b,c,d,e){Ep(a,b,c,d,e);return a;}
function W7(a,b,c){E3(a,b,c);return a;}
function Ui(a,b,c){EH(a,b,c);return a;}
function VH(a,b,c,d,e){Ep(a,b,c,d,e);return a;}
function Sq(a,b,c,d){E0(a,b,c,d);return a;}
function KM(a,b){var c;if(b>=0&&b<a.n)return a.F.data[b];c=new Br;M(c);F(c);}
function Gx(a){return a.n;}
function SD(a){return N(a);}
function SZ(a,b){FC(a,b);}
function Vz(a,b,c){E3(a,b,c);return a;}
function Qo(a,b,c){EH(a,b,c);return a;}
function O8(){var a=this;Bo.call(a);a.bh=null;a.g$=null;a.ex=null;}
function AAQ(a){var b=new O8();T$(b,a);return b;}
function T$(a,b){var c;Cl(a);a.bh=N(b);a.T=Gx(b);a.g$=Rj(a.T);a.ex=Rj(a.T);c=0;while(c<(a.T-1|0)){JI(a.g$,H(a.bh,c),(a.T-c|0)-1|0);JI(a.ex,H(a.bh,(a.T-c|0)-1|0),(a.T-c|0)-1|0);c=c+1|0;}}
function Ud(a,b,c){return !JB(a,c,b)?(-1):a.T;}
function We(a,b,c,d,e){while(true){if(c<b)return (-1);c=NK(a,d,b,c);if(c<0)return (-1);if(a.c.a(c+a.T|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function W2(a,b){var c;if(b instanceof CF)return b.bC!=H(a.bh,0)?0:1;if(b instanceof CI)return GF(b,0,CR(a.bh,0,1))<=0?0:1;if(!(b instanceof Co)){if(!(b instanceof Cv))return 1;return J(a.bh)>1&&b.ck==CK(H(a.bh,0),H(a.bh,1))?1:0;}a:{b:{b=b;if(!b.g(H(a.bh,0))){if(J(a.bh)<=1)break b;if(!b.g(CK(H(a.bh,0),H(a.bh,1))))break b;}c=1;break a;}c=0;}return c;}
function NK(a,b,c,d){var e,f,g;e=H(a.bh,0);f=(J(b)-d|0)-a.T|0;if(f<=0)d=d+f|0;while(true){if(d<c)return (-1);g=H(b,d);if(g==e&&JB(a,b,d))break;d=d-KI(a.ex,g)|0;}return d;}
function JB(a,b,c){var d;d=0;while(d<a.T){if(H(b,d+c|0)!=H(a.bh,d))return 0;d=d+1|0;}return 1;}
function KC(){Bo.call(this);this.dK=null;}
function AA2(a){var b=new KC();Wa(b,a);return b;}
function Wa(a,b){var c,d;Cl(a);c=new P;Q(c);d=0;while(d<Gx(b)){O(c,CZ(CP(KM(b,d))));d=d+1|0;}a.dK=N(c);a.T=Ex(c);}
function PV(a,b,c){var d;d=0;while(true){if(d>=J(a.dK))return J(a.dK);if(H(a.dK,d)!=CZ(CP(H(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Hd(){Bo.call(this);this.dB=null;}
function UC(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.dB))return J(a.dB);e=H(a.dB,d);f=b+d|0;if(e!=H(c,f)&&EA(H(a.dB,d))!=H(c,f))break;d=d+1|0;}return (-1);}
function D4(){B.call(this);}
var ADa=null;var ADb=null;var ADc=null;function OB(a,b){var c,d,e;c=0;while(true){if(c>=ADc.data.length){d=new Fp;U(d,C(20));d.jV=C(20);d.jG=b;F(d);}e=ADc.data[c].data;if(Be(b,e[0]))break;c=c+1|0;}return e[1];}
function No(){var b,c,d,e;ADa=AAm();ADb=AA0();b=E($rt_arraycls(B),194);c=b.data;d=E(B,2);e=d.data;e[0]=C(119);e[1]=AAY();c[0]=d;d=E(B,2);e=d.data;e[0]=C(120);e[1]=Zm();c[1]=d;d=E(B,2);e=d.data;e[0]=C(121);e[1]=AAh();c[2]=d;d=E(B,2);e=d.data;e[0]=C(122);e[1]=AAz();c[3]=d;d=E(B,2);e=d.data;e[0]=C(123);e[1]=ADb;c[4]=d;d=E(B,2);e=d.data;e[0]=C(124);e[1]=Zh();c[5]=d;d=E(B,2);e=d.data;e[0]=C(125);e[1]=AAT();c[6]=d;d=E(B,2);e=d.data;e[0]=C(126);e[1]=ZA();c[7]=d;d=E(B,2);e=d.data;e[0]=C(127);e[1]=Zu();c[8]=d;d=E(B,
2);e=d.data;e[0]=C(128);e[1]=ZI();c[9]=d;d=E(B,2);e=d.data;e[0]=C(129);e[1]=AAi();c[10]=d;d=E(B,2);e=d.data;e[0]=C(130);e[1]=ZC();c[11]=d;d=E(B,2);e=d.data;e[0]=C(131);e[1]=ZO();c[12]=d;d=E(B,2);e=d.data;e[0]=C(132);e[1]=Zj();c[13]=d;d=E(B,2);e=d.data;e[0]=C(133);e[1]=AAs();c[14]=d;d=E(B,2);e=d.data;e[0]=C(134);e[1]=AAe();c[15]=d;d=E(B,2);e=d.data;e[0]=C(135);e[1]=Zf();c[16]=d;d=E(B,2);e=d.data;e[0]=C(136);e[1]=Z_();c[17]=d;d=E(B,2);e=d.data;e[0]=C(137);e[1]=Zg();c[18]=d;d=E(B,2);e=d.data;e[0]=C(138);e[1]=ZN();c[19]
=d;d=E(B,2);e=d.data;e[0]=C(139);e[1]=AAK();c[20]=d;d=E(B,2);e=d.data;e[0]=C(140);e[1]=Z0();c[21]=d;d=E(B,2);e=d.data;e[0]=C(141);e[1]=Zo();c[22]=d;d=E(B,2);e=d.data;e[0]=C(142);e[1]=AAg();c[23]=d;d=E(B,2);e=d.data;e[0]=C(143);e[1]=Z$();c[24]=d;d=E(B,2);e=d.data;e[0]=C(144);e[1]=AAG();c[25]=d;d=E(B,2);e=d.data;e[0]=C(145);e[1]=ZK();c[26]=d;d=E(B,2);e=d.data;e[0]=C(146);e[1]=ZX();c[27]=d;d=E(B,2);e=d.data;e[0]=C(147);e[1]=ADa;c[28]=d;d=E(B,2);e=d.data;e[0]=C(148);e[1]=Zy();c[29]=d;d=E(B,2);e=d.data;e[0]=C(149);e[1]
=ZB();c[30]=d;d=E(B,2);e=d.data;e[0]=C(150);e[1]=ADa;c[31]=d;d=E(B,2);e=d.data;e[0]=C(151);e[1]=Za();c[32]=d;d=E(B,2);e=d.data;e[0]=C(152);e[1]=ADb;c[33]=d;d=E(B,2);e=d.data;e[0]=C(153);e[1]=AAt();c[34]=d;d=E(B,2);e=d.data;e[0]=C(154);e[1]=I(0,127);c[35]=d;d=E(B,2);e=d.data;e[0]=C(155);e[1]=I(128,255);c[36]=d;d=E(B,2);e=d.data;e[0]=C(156);e[1]=I(256,383);c[37]=d;d=E(B,2);e=d.data;e[0]=C(157);e[1]=I(384,591);c[38]=d;d=E(B,2);e=d.data;e[0]=C(158);e[1]=I(592,687);c[39]=d;d=E(B,2);e=d.data;e[0]=C(159);e[1]=I(688,
767);c[40]=d;d=E(B,2);e=d.data;e[0]=C(160);e[1]=I(768,879);c[41]=d;d=E(B,2);e=d.data;e[0]=C(161);e[1]=I(880,1023);c[42]=d;d=E(B,2);e=d.data;e[0]=C(162);e[1]=I(1024,1279);c[43]=d;d=E(B,2);e=d.data;e[0]=C(163);e[1]=I(1280,1327);c[44]=d;d=E(B,2);e=d.data;e[0]=C(164);e[1]=I(1328,1423);c[45]=d;d=E(B,2);e=d.data;e[0]=C(165);e[1]=I(1424,1535);c[46]=d;d=E(B,2);e=d.data;e[0]=C(166);e[1]=I(1536,1791);c[47]=d;d=E(B,2);e=d.data;e[0]=C(167);e[1]=I(1792,1871);c[48]=d;d=E(B,2);e=d.data;e[0]=C(168);e[1]=I(1872,1919);c[49]=
d;d=E(B,2);e=d.data;e[0]=C(169);e[1]=I(1920,1983);c[50]=d;d=E(B,2);e=d.data;e[0]=C(170);e[1]=I(2304,2431);c[51]=d;d=E(B,2);e=d.data;e[0]=C(171);e[1]=I(2432,2559);c[52]=d;d=E(B,2);e=d.data;e[0]=C(172);e[1]=I(2560,2687);c[53]=d;d=E(B,2);e=d.data;e[0]=C(173);e[1]=I(2688,2815);c[54]=d;d=E(B,2);e=d.data;e[0]=C(174);e[1]=I(2816,2943);c[55]=d;d=E(B,2);e=d.data;e[0]=C(175);e[1]=I(2944,3071);c[56]=d;d=E(B,2);e=d.data;e[0]=C(176);e[1]=I(3072,3199);c[57]=d;d=E(B,2);e=d.data;e[0]=C(177);e[1]=I(3200,3327);c[58]=d;d=E(B,
2);e=d.data;e[0]=C(178);e[1]=I(3328,3455);c[59]=d;d=E(B,2);e=d.data;e[0]=C(179);e[1]=I(3456,3583);c[60]=d;d=E(B,2);e=d.data;e[0]=C(180);e[1]=I(3584,3711);c[61]=d;d=E(B,2);e=d.data;e[0]=C(181);e[1]=I(3712,3839);c[62]=d;d=E(B,2);e=d.data;e[0]=C(182);e[1]=I(3840,4095);c[63]=d;d=E(B,2);e=d.data;e[0]=C(183);e[1]=I(4096,4255);c[64]=d;d=E(B,2);e=d.data;e[0]=C(184);e[1]=I(4256,4351);c[65]=d;d=E(B,2);e=d.data;e[0]=C(185);e[1]=I(4352,4607);c[66]=d;d=E(B,2);e=d.data;e[0]=C(186);e[1]=I(4608,4991);c[67]=d;d=E(B,2);e=d.data;e[0]
=C(187);e[1]=I(4992,5023);c[68]=d;d=E(B,2);e=d.data;e[0]=C(188);e[1]=I(5024,5119);c[69]=d;d=E(B,2);e=d.data;e[0]=C(189);e[1]=I(5120,5759);c[70]=d;d=E(B,2);e=d.data;e[0]=C(190);e[1]=I(5760,5791);c[71]=d;d=E(B,2);e=d.data;e[0]=C(191);e[1]=I(5792,5887);c[72]=d;d=E(B,2);e=d.data;e[0]=C(192);e[1]=I(5888,5919);c[73]=d;d=E(B,2);e=d.data;e[0]=C(193);e[1]=I(5920,5951);c[74]=d;d=E(B,2);e=d.data;e[0]=C(194);e[1]=I(5952,5983);c[75]=d;d=E(B,2);e=d.data;e[0]=C(195);e[1]=I(5984,6015);c[76]=d;d=E(B,2);e=d.data;e[0]=C(196);e[1]
=I(6016,6143);c[77]=d;d=E(B,2);e=d.data;e[0]=C(197);e[1]=I(6144,6319);c[78]=d;d=E(B,2);e=d.data;e[0]=C(198);e[1]=I(6400,6479);c[79]=d;d=E(B,2);e=d.data;e[0]=C(199);e[1]=I(6480,6527);c[80]=d;d=E(B,2);e=d.data;e[0]=C(200);e[1]=I(6528,6623);c[81]=d;d=E(B,2);e=d.data;e[0]=C(201);e[1]=I(6624,6655);c[82]=d;d=E(B,2);e=d.data;e[0]=C(202);e[1]=I(6656,6687);c[83]=d;d=E(B,2);e=d.data;e[0]=C(203);e[1]=I(7424,7551);c[84]=d;d=E(B,2);e=d.data;e[0]=C(204);e[1]=I(7552,7615);c[85]=d;d=E(B,2);e=d.data;e[0]=C(205);e[1]=I(7616,
7679);c[86]=d;d=E(B,2);e=d.data;e[0]=C(206);e[1]=I(7680,7935);c[87]=d;d=E(B,2);e=d.data;e[0]=C(207);e[1]=I(7936,8191);c[88]=d;d=E(B,2);e=d.data;e[0]=C(208);e[1]=I(8192,8303);c[89]=d;d=E(B,2);e=d.data;e[0]=C(209);e[1]=I(8304,8351);c[90]=d;d=E(B,2);e=d.data;e[0]=C(210);e[1]=I(8352,8399);c[91]=d;d=E(B,2);e=d.data;e[0]=C(211);e[1]=I(8400,8447);c[92]=d;d=E(B,2);e=d.data;e[0]=C(212);e[1]=I(8448,8527);c[93]=d;d=E(B,2);e=d.data;e[0]=C(213);e[1]=I(8528,8591);c[94]=d;d=E(B,2);e=d.data;e[0]=C(214);e[1]=I(8592,8703);c[95]
=d;d=E(B,2);e=d.data;e[0]=C(215);e[1]=I(8704,8959);c[96]=d;d=E(B,2);e=d.data;e[0]=C(216);e[1]=I(8960,9215);c[97]=d;d=E(B,2);e=d.data;e[0]=C(217);e[1]=I(9216,9279);c[98]=d;d=E(B,2);e=d.data;e[0]=C(218);e[1]=I(9280,9311);c[99]=d;d=E(B,2);e=d.data;e[0]=C(219);e[1]=I(9312,9471);c[100]=d;d=E(B,2);e=d.data;e[0]=C(220);e[1]=I(9472,9599);c[101]=d;d=E(B,2);e=d.data;e[0]=C(221);e[1]=I(9600,9631);c[102]=d;d=E(B,2);e=d.data;e[0]=C(222);e[1]=I(9632,9727);c[103]=d;d=E(B,2);e=d.data;e[0]=C(223);e[1]=I(9728,9983);c[104]=d;d
=E(B,2);e=d.data;e[0]=C(224);e[1]=I(9984,10175);c[105]=d;d=E(B,2);e=d.data;e[0]=C(225);e[1]=I(10176,10223);c[106]=d;d=E(B,2);e=d.data;e[0]=C(226);e[1]=I(10224,10239);c[107]=d;d=E(B,2);e=d.data;e[0]=C(227);e[1]=I(10240,10495);c[108]=d;d=E(B,2);e=d.data;e[0]=C(228);e[1]=I(10496,10623);c[109]=d;d=E(B,2);e=d.data;e[0]=C(229);e[1]=I(10624,10751);c[110]=d;d=E(B,2);e=d.data;e[0]=C(230);e[1]=I(10752,11007);c[111]=d;d=E(B,2);e=d.data;e[0]=C(231);e[1]=I(11008,11263);c[112]=d;d=E(B,2);e=d.data;e[0]=C(232);e[1]=I(11264,
11359);c[113]=d;d=E(B,2);e=d.data;e[0]=C(233);e[1]=I(11392,11519);c[114]=d;d=E(B,2);e=d.data;e[0]=C(234);e[1]=I(11520,11567);c[115]=d;d=E(B,2);e=d.data;e[0]=C(235);e[1]=I(11568,11647);c[116]=d;d=E(B,2);e=d.data;e[0]=C(236);e[1]=I(11648,11743);c[117]=d;d=E(B,2);e=d.data;e[0]=C(237);e[1]=I(11776,11903);c[118]=d;d=E(B,2);e=d.data;e[0]=C(238);e[1]=I(11904,12031);c[119]=d;d=E(B,2);e=d.data;e[0]=C(239);e[1]=I(12032,12255);c[120]=d;d=E(B,2);e=d.data;e[0]=C(240);e[1]=I(12272,12287);c[121]=d;d=E(B,2);e=d.data;e[0]=C(241);e[1]
=I(12288,12351);c[122]=d;d=E(B,2);e=d.data;e[0]=C(242);e[1]=I(12352,12447);c[123]=d;d=E(B,2);e=d.data;e[0]=C(243);e[1]=I(12448,12543);c[124]=d;d=E(B,2);e=d.data;e[0]=C(244);e[1]=I(12544,12591);c[125]=d;d=E(B,2);e=d.data;e[0]=C(245);e[1]=I(12592,12687);c[126]=d;d=E(B,2);e=d.data;e[0]=C(246);e[1]=I(12688,12703);c[127]=d;d=E(B,2);e=d.data;e[0]=C(247);e[1]=I(12704,12735);c[128]=d;d=E(B,2);e=d.data;e[0]=C(248);e[1]=I(12736,12783);c[129]=d;d=E(B,2);e=d.data;e[0]=C(249);e[1]=I(12784,12799);c[130]=d;d=E(B,2);e=d.data;e[0]
=C(250);e[1]=I(12800,13055);c[131]=d;d=E(B,2);e=d.data;e[0]=C(251);e[1]=I(13056,13311);c[132]=d;d=E(B,2);e=d.data;e[0]=C(252);e[1]=I(13312,19893);c[133]=d;d=E(B,2);e=d.data;e[0]=C(253);e[1]=I(19904,19967);c[134]=d;d=E(B,2);e=d.data;e[0]=C(254);e[1]=I(19968,40959);c[135]=d;d=E(B,2);e=d.data;e[0]=C(255);e[1]=I(40960,42127);c[136]=d;d=E(B,2);e=d.data;e[0]=C(256);e[1]=I(42128,42191);c[137]=d;d=E(B,2);e=d.data;e[0]=C(257);e[1]=I(42752,42783);c[138]=d;d=E(B,2);e=d.data;e[0]=C(258);e[1]=I(43008,43055);c[139]=d;d=E(B,
2);e=d.data;e[0]=C(259);e[1]=I(44032,55203);c[140]=d;d=E(B,2);e=d.data;e[0]=C(260);e[1]=I(55296,56191);c[141]=d;d=E(B,2);e=d.data;e[0]=C(261);e[1]=I(56192,56319);c[142]=d;d=E(B,2);e=d.data;e[0]=C(262);e[1]=I(56320,57343);c[143]=d;d=E(B,2);e=d.data;e[0]=C(263);e[1]=I(57344,63743);c[144]=d;d=E(B,2);e=d.data;e[0]=C(264);e[1]=I(63744,64255);c[145]=d;d=E(B,2);e=d.data;e[0]=C(265);e[1]=I(64256,64335);c[146]=d;d=E(B,2);e=d.data;e[0]=C(266);e[1]=I(64336,65023);c[147]=d;d=E(B,2);e=d.data;e[0]=C(267);e[1]=I(65024,65039);c[148]
=d;d=E(B,2);e=d.data;e[0]=C(268);e[1]=I(65040,65055);c[149]=d;d=E(B,2);e=d.data;e[0]=C(269);e[1]=I(65056,65071);c[150]=d;d=E(B,2);e=d.data;e[0]=C(270);e[1]=I(65072,65103);c[151]=d;d=E(B,2);e=d.data;e[0]=C(271);e[1]=I(65104,65135);c[152]=d;d=E(B,2);e=d.data;e[0]=C(272);e[1]=I(65136,65279);c[153]=d;d=E(B,2);e=d.data;e[0]=C(273);e[1]=I(65280,65519);c[154]=d;d=E(B,2);e=d.data;e[0]=C(274);e[1]=I(0,1114111);c[155]=d;d=E(B,2);e=d.data;e[0]=C(275);e[1]=ZD();c[156]=d;d=E(B,2);e=d.data;e[0]=C(276);e[1]=Bb(0,1);c[157]
=d;d=E(B,2);e=d.data;e[0]=C(277);e[1]=EW(62,1);c[158]=d;d=E(B,2);e=d.data;e[0]=C(278);e[1]=Bb(1,1);c[159]=d;d=E(B,2);e=d.data;e[0]=C(279);e[1]=Bb(2,1);c[160]=d;d=E(B,2);e=d.data;e[0]=C(280);e[1]=Bb(3,0);c[161]=d;d=E(B,2);e=d.data;e[0]=C(281);e[1]=Bb(4,0);c[162]=d;d=E(B,2);e=d.data;e[0]=C(282);e[1]=Bb(5,1);c[163]=d;d=E(B,2);e=d.data;e[0]=C(283);e[1]=EW(448,1);c[164]=d;d=E(B,2);e=d.data;e[0]=C(284);e[1]=Bb(6,1);c[165]=d;d=E(B,2);e=d.data;e[0]=C(285);e[1]=Bb(7,0);c[166]=d;d=E(B,2);e=d.data;e[0]=C(286);e[1]=Bb(8,
1);c[167]=d;d=E(B,2);e=d.data;e[0]=C(287);e[1]=EW(3584,1);c[168]=d;d=E(B,2);e=d.data;e[0]=C(288);e[1]=Bb(9,1);c[169]=d;d=E(B,2);e=d.data;e[0]=C(289);e[1]=Bb(10,1);c[170]=d;d=E(B,2);e=d.data;e[0]=C(290);e[1]=Bb(11,1);c[171]=d;d=E(B,2);e=d.data;e[0]=C(291);e[1]=EW(28672,0);c[172]=d;d=E(B,2);e=d.data;e[0]=C(292);e[1]=Bb(12,0);c[173]=d;d=E(B,2);e=d.data;e[0]=C(293);e[1]=Bb(13,0);c[174]=d;d=E(B,2);e=d.data;e[0]=C(294);e[1]=Bb(14,0);c[175]=d;d=E(B,2);e=d.data;e[0]=C(295);e[1]=AAP(983040,1,1);c[176]=d;d=E(B,2);e=d.data;e[0]
=C(296);e[1]=Bb(15,0);c[177]=d;d=E(B,2);e=d.data;e[0]=C(297);e[1]=Bb(16,1);c[178]=d;d=E(B,2);e=d.data;e[0]=C(298);e[1]=Bb(18,1);c[179]=d;d=E(B,2);e=d.data;e[0]=C(299);e[1]=AA6(19,0,1);c[180]=d;d=E(B,2);e=d.data;e[0]=C(300);e[1]=EW(1643118592,1);c[181]=d;d=E(B,2);e=d.data;e[0]=C(301);e[1]=Bb(20,0);c[182]=d;d=E(B,2);e=d.data;e[0]=C(302);e[1]=Bb(21,0);c[183]=d;d=E(B,2);e=d.data;e[0]=C(303);e[1]=Bb(22,0);c[184]=d;d=E(B,2);e=d.data;e[0]=C(304);e[1]=Bb(23,0);c[185]=d;d=E(B,2);e=d.data;e[0]=C(305);e[1]=Bb(24,1);c[186]
=d;d=E(B,2);e=d.data;e[0]=C(306);e[1]=EW(2113929216,1);c[187]=d;d=E(B,2);e=d.data;e[0]=C(307);e[1]=Bb(25,1);c[188]=d;d=E(B,2);e=d.data;e[0]=C(308);e[1]=Bb(26,0);c[189]=d;d=E(B,2);e=d.data;e[0]=C(309);e[1]=Bb(27,0);c[190]=d;d=E(B,2);e=d.data;e[0]=C(310);e[1]=Bb(28,1);c[191]=d;d=E(B,2);e=d.data;e[0]=C(311);e[1]=Bb(29,0);c[192]=d;d=E(B,2);e=d.data;e[0]=C(312);e[1]=Bb(30,0);c[193]=d;ADc=b;}
function L(){var a=this;B.call(a);a.e1=null;a.fB=null;}
function MY(a,b){if(!b&&a.e1===null)a.e1=a.q();else if(b&&a.fB===null)a.fB=CJ(a.q(),1);if(b)return a.fB;return a.e1;}
function GM(){Bo.call(this);this.hW=0;}
function UI(a,b,c){var d,e;d=b+1|0;e=H(c,b);d=H(c,d);return a.hW!=Dy(Ek(CK(e,d)))?(-1):2;}
function Fh(){Bg.call(this);this.c4=0;}
function Rv(a){var b=new Fh();SV(b,a);return b;}
function SV(a,b){Bh(a);a.c4=b;}
function R3(a,b){a.c=b;}
function Ty(a,b,c,d){var e,f;e=b+1|0;if(e>d.t){d.bI=1;return (-1);}f=H(c,b);if(b>d.bu&&BW(H(c,b-1|0)))return (-1);if(a.c4!=f)return (-1);return a.c.a(e,c,d);}
function Us(a,b,c,d,e){var f,g;if(!(d instanceof Ck))return EP(a,b,c,d,e);f=e.bu;g=d;a:{while(true){if(c<b)return (-1);c=DF(g,a.c4,c);if(c<0)break a;if(c<b)break a;if(c>f&&BW(H(g,c-1|0))){c=c+(-2)|0;continue;}if(a.c.a(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function QN(a,b){if(b instanceof CF)return 0;if(b instanceof CI)return 0;if(b instanceof Co)return 0;if(b instanceof Cv)return 0;if(b instanceof Fy)return 0;if(!(b instanceof Fh))return 1;return b.c4!=a.c4?0:1;}
function VP(a,b){return 1;}
function Fy(){Bg.call(this);this.dj=0;}
function Xy(a){var b=new Fy();RJ(b,a);return b;}
function RJ(a,b){Bh(a);a.dj=b;}
function SX(a,b){a.c=b;}
function Qe(a,b,c,d){var e,f,g,h;e=d.t;f=b+1|0;g=BJ(f,e);if(g>0){d.bI=1;return (-1);}h=H(c,b);if(g<0&&Cg(H(c,f)))return (-1);if(a.dj!=h)return (-1);return a.c.a(f,c,d);}
function Uz(a,b,c,d,e){var f,g,h;if(!(d instanceof Ck))return EP(a,b,c,d,e);f=d;g=e.t;a:{while(true){if(c<b)return (-1);c=DF(f,a.dj,c);if(c<0)break a;if(c<b)break a;h=c+1|0;if(h<g&&Cg(H(f,h))){c=c+(-1)|0;continue;}if(a.c.a(h,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function Uf(a,b){if(b instanceof CF)return 0;if(b instanceof CI)return 0;if(b instanceof Co)return 0;if(b instanceof Cv)return 0;if(b instanceof Fh)return 0;if(!(b instanceof Fy))return 1;return b.dj!=a.dj?0:1;}
function SN(a,b){return 1;}
function Cv(){var a=this;Bo.call(a);a.f1=0;a.fo=0;a.ck=0;}
function TW(a,b,c){var d,e;d=b+1|0;e=H(c,b);d=H(c,d);return a.f1==e&&a.fo==d?2:(-1);}
function SW(a,b,c,d,e){var f;if(!(d instanceof Ck))return EP(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);c=DF(f,a.fo,c)+(-1)|0;if(c<0)break a;if(c<b)break a;if(a.f1==H(f,c)&&a.c.a(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function Qg(a){return a.ck;}
function TB(a,b){if(b instanceof Cv)return b.ck!=a.ck?0:1;if(b instanceof Co)return b.g(a.ck);if(b instanceof CF)return 0;if(!(b instanceof CI))return 1;return 0;}
function IE(){C5.call(this);}
function S_(a,b){return b!=10?0:1;}
function TM(a,b,c){return b!=10?0:1;}
function IF(){C5.call(this);}
function U1(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function XC(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function Mq(){var a=this;B.call(a);a.dC=null;a.eD=null;a.bo=0;a.h0=0;}
function Rj(a){var b=new Mq();XV(b,a);return b;}
function XV(a,b){while(b>=a.bo){a.bo=a.bo<<1|1;}a.bo=a.bo<<1|1;a.dC=$rt_createIntArray(a.bo+1|0);a.eD=$rt_createIntArray(a.bo+1|0);a.h0=b;}
function JI(a,b,c){var d,e;d=0;e=b&a.bo;while(a.dC.data[e]&&a.dC.data[e]!=b){d=(d+1|0)&a.bo;e=(e+d|0)&a.bo;}a.dC.data[e]=b;a.eD.data[e]=c;}
function KI(a,b){var c,d,e;c=b&a.bo;d=0;while(true){e=a.dC.data[c];if(!e)break;if(e==b)return a.eD.data[c];d=(d+1|0)&a.bo;c=(c+d|0)&a.bo;}return a.h0;}
function Ko(){Bc.call(this);}
function Lg(){B.call(this);}
function Ff(){L.call(this);}
function AAm(){var a=new Ff();Xp(a);return a;}
function Xp(a){return;}
function OM(a){return BH(Bj(B8(),9,13),32);}
function FU(){L.call(this);}
function AA0(){var a=new FU();VG(a);return a;}
function VG(a){return;}
function Kx(a){return Bj(B8(),48,57);}
function L6(){L.call(this);}
function AAY(){var a=new L6();Wy(a);return a;}
function Wy(a){return;}
function Uq(a){return Bj(B8(),97,122);}
function Ni(){L.call(this);}
function Zm(){var a=new Ni();X3(a);return a;}
function X3(a){return;}
function VR(a){return Bj(B8(),65,90);}
function Nm(){L.call(this);}
function AAh(){var a=new Nm();Sc(a);return a;}
function Sc(a){return;}
function U7(a){return Bj(B8(),0,127);}
function GD(){L.call(this);}
function AAz(){var a=new GD();TN(a);return a;}
function TN(a){return;}
function MG(a){return Bj(Bj(B8(),97,122),65,90);}
function FL(){GD.call(this);}
function Zh(){var a=new FL();XB(a);return a;}
function XB(a){return;}
function N3(a){return Bj(MG(a),48,57);}
function Pr(){L.call(this);}
function AAT(){var a=new Pr();QL(a);return a;}
function QL(a){return;}
function WY(a){return Bj(Bj(Bj(B8(),33,64),91,96),123,126);}
function GE(){FL.call(this);}
function ZA(){var a=new GE();Te(a);return a;}
function Te(a){return;}
function Kv(a){return Bj(Bj(Bj(N3(a),33,64),91,96),123,126);}
function O4(){GE.call(this);}
function Zu(){var a=new O4();Vq(a);return a;}
function Vq(a){return;}
function Qt(a){return BH(Kv(a),32);}
function Px(){L.call(this);}
function ZI(){var a=new Px();UE(a);return a;}
function UE(a){return;}
function T7(a){return BH(BH(B8(),32),9);}
function Nf(){L.call(this);}
function AAi(){var a=new Nf();Xl(a);return a;}
function Xl(a){return;}
function Qn(a){return BH(Bj(B8(),0,31),127);}
function MQ(){L.call(this);}
function ZC(){var a=new MQ();Sy(a);return a;}
function Sy(a){return;}
function XG(a){return Bj(Bj(Bj(B8(),48,57),97,102),65,70);}
function Nr(){L.call(this);}
function ZO(){var a=new Nr();RR(a);return a;}
function RR(a){return;}
function Rg(a){var b;b=new G2;b.j$=a;T(b);b.v=1;return b;}
function PD(){L.call(this);}
function Zj(){var a=new PD();TF(a);return a;}
function TF(a){return;}
function P7(a){var b;b=new GT;b.is=a;T(b);b.v=1;return b;}
function Mr(){L.call(this);}
function AAs(){var a=new Mr();Sj(a);return a;}
function Sj(a){return;}
function Xz(a){var b;b=new Kc;b.jJ=a;T(b);return b;}
function LQ(){L.call(this);}
function AAe(){var a=new LQ();Qq(a);return a;}
function Qq(a){return;}
function TZ(a){var b;b=new Kb;b.jo=a;T(b);return b;}
function NN(){L.call(this);}
function Zf(){var a=new NN();TJ(a);return a;}
function TJ(a){return;}
function T5(a){var b;b=new Jo;b.jy=a;T(b);EY(b.u,0,2048);b.v=1;return b;}
function Lw(){L.call(this);}
function Z_(){var a=new Lw();S7(a);return a;}
function S7(a){return;}
function UG(a){var b;b=new Il;b.iI=a;T(b);b.v=1;return b;}
function K6(){L.call(this);}
function Zg(){var a=new K6();PT(a);return a;}
function PT(a){return;}
function Xw(a){var b;b=new HG;b.jX=a;T(b);b.v=1;return b;}
function MM(){L.call(this);}
function ZN(){var a=new MM();QM(a);return a;}
function QM(a){return;}
function PM(a){var b;b=new Jp;b.ka=a;T(b);return b;}
function M3(){L.call(this);}
function AAK(){var a=new M3();W9(a);return a;}
function W9(a){return;}
function YC(a){var b;b=new GP;b.ig=a;T(b);b.v=1;return b;}
function NG(){L.call(this);}
function Z0(){var a=new NG();QV(a);return a;}
function QV(a){return;}
function US(a){var b;b=new GS;b.iN=a;T(b);b.v=1;return b;}
function Ks(){L.call(this);}
function Zo(){var a=new Ks();Td(a);return a;}
function Td(a){return;}
function Wi(a){var b;b=new Hv;b.jt=a;T(b);b.v=1;return b;}
function O2(){L.call(this);}
function AAg(){var a=new O2();YO(a);return a;}
function YO(a){return;}
function YF(a){var b;b=new IG;b.jL=a;T(b);b.v=1;return b;}
function M0(){L.call(this);}
function Z$(){var a=new M0();Ra(a);return a;}
function Ra(a){return;}
function Wo(a){var b;b=new IM;b.jM=a;T(b);return b;}
function OA(){L.call(this);}
function AAG(){var a=new OA();S8(a);return a;}
function S8(a){return;}
function S3(a){var b;b=new Hu;b.iY=a;T(b);return b;}
function NF(){L.call(this);}
function ZK(){var a=new NF();T1(a);return a;}
function T1(a){return;}
function Q$(a){var b;b=new GI;b.iq=a;T(b);b.v=1;return b;}
function PC(){L.call(this);}
function ZX(){var a=new PC();W6(a);return a;}
function W6(a){return;}
function Ub(a){var b;b=new G1;b.j9=a;T(b);b.v=1;return b;}
function Fs(){L.call(this);}
function Zy(){var a=new Fs();UY(a);return a;}
function UY(a){return;}
function Pz(a){return BH(Bj(Bj(Bj(B8(),97,122),65,90),48,57),95);}
function N1(){Fs.call(this);}
function ZB(){var a=new N1();W_(a);return a;}
function W_(a){return;}
function QP(a){var b;b=CJ(Pz(a),1);b.v=1;return b;}
function O_(){Ff.call(this);}
function Za(){var a=new O_();W4(a);return a;}
function W4(a){return;}
function R5(a){var b;b=CJ(OM(a),1);b.v=1;return b;}
function NB(){FU.call(this);}
function AAt(){var a=new NB();Yj(a);return a;}
function Yj(a){return;}
function WJ(a){var b;b=CJ(Kx(a),1);b.v=1;return b;}
function MW(){var a=this;L.call(a);a.hT=0;a.ic=0;}
function I(a,b){var c=new MW();Xt(c,a,b);return c;}
function Xt(a,b,c){a.hT=b;a.ic=c;}
function Y7(a){return Bj(B8(),a.hT,a.ic);}
function Nu(){L.call(this);}
function ZD(){var a=new Nu();XP(a);return a;}
function XP(a){return;}
function Xc(a){return Bj(Bj(B8(),65279,65279),65520,65533);}
function OV(){var a=this;L.call(a);a.fq=0;a.eq=0;a.g7=0;}
function Bb(a,b){var c=new OV();Tz(c,a,b);return c;}
function AA6(a,b,c){var d=new OV();Xv(d,a,b,c);return d;}
function Tz(a,b,c){a.eq=c;a.fq=b;}
function Xv(a,b,c,d){a.g7=d;a.eq=c;a.fq=b;}
function VK(a){var b;b=AAR(a.fq);if(a.g7)EY(b.u,0,2048);b.v=a.eq;return b;}
function O5(){var a=this;L.call(a);a.fn=0;a.eI=0;a.gz=0;}
function EW(a,b){var c=new O5();UT(c,a,b);return c;}
function AAP(a,b,c){var d=new O5();PO(d,a,b,c);return d;}
function UT(a,b,c){a.eI=c;a.fn=b;}
function PO(a,b,c,d){a.gz=d;a.eI=c;a.fn=b;}
function PN(a){var b;b=new J4;Ls(b,a.fn);if(a.gz)EY(b.u,0,2048);b.v=a.eI;return b;}
function NE(){B.call(this);}
function Iy(){var a=this;B.call(a);a.gO=null;a.hU=0;}
function Ox(){B.call(this);}
function La(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.gO.data;f=b.hU;b.hU=f+1|0;f=e[f];g=f<34?f-32|0:f>=92?(f-32|0)-2|0:(f-32|0)-1|0;h=(g%2|0)!=1?0:1;c=c+CS(d,g/2|0)|0;d=d*46|0;if(!h)break;}h=c/2|0;if(c%2|0)h= -h;return h;}
function DV(){}
function Ho(){var a=this;B.call(a);a.ee=0;a.hx=0;a.hC=0;a.gr=0;a.c$=null;}
function Eq(a){return a.ee>=a.hC?0:1;}
function D3(a){var b,c;if(a.hx<a.c$.O){b=new D0;M(b);F(b);}a.gr=a.ee;b=a.c$;c=a.ee;a.ee=c+1|0;return b.c0(c);}
function Ig(){CX.call(this);this.h3=null;}
function Si(a){var b,c;b=new H8;c=a.h3;b.c8=c;b.gE=c.cT;b.cu=null;return b;}
function FS(){}
function GO(){var a=this;B.call(a);a.df=0;a.e_=0;a.gQ=0;a.i7=0;a.fV=null;}
function Uk(a){return a.df<=0?0:1;}
function U_(a){var b,c;if(a.gQ<a.fV.O){b=new D0;M(b);F(b);}a.e_=a.df-1|0;if(a.e_<0){b=new CL;M(b);F(b);}b=a.fV;c=a.df-1|0;a.df=c;return b.c0(c);}
function FH(){var a=this;B.call(a);a.b_=null;a.bn=null;a.bp=null;}
function CL(){Bc.call(this);}
function Fd(){}
function Gr(){var a=this;B.call(a);a.dl=null;a.cI=null;}
function Xn(a){return a.dl;}
function Yd(a){return a.cI;}
function DA(){var a=this;Gr.call(a);a.eF=0;a.cn=null;}
function FZ(){BZ.call(this);}
function JE(){C1.call(this);}
function G0(){var a=this;B.call(a);a.dg=null;a.ft=null;a.d7=null;a.eo=null;a.cX=0;a.e6=0;a.gx=0;a.f0=0;a.e4=0;a.fP=0;a.dM=0;a.C=null;a.h=0;a.d3=0;}
function ML(a,b){var c,d,e;a.cX=0;a.f0=0;a.e4=0;a.fP=0;a.dM=0;a.d3=1;a.C=b;a.h=0;a.dg=EZ(a,0,0);if(a.h==J(b)){c=new X;d=new P;Q(d);G(d,C(313));G(d,b);U(c,N(d));F(c);}Jv(a,1);a.d7=null;a.eo=null;if(a.h<J(b)&&H(b,a.h)!=59)a.ft=EZ(a,1,0);if(a.h<J(b)){e=a.h;a.h=e+1|0;if(H(b,e)!=59){c=new X;d=new P;Q(d);G(d,C(314));d=W(d,a.h);G(d,C(315));G(d,b);U(c,N(d));F(c);}a.d7=EZ(a,0,1);Jv(a,0);a.eo=EZ(a,1,1);}}
function LR(a,b){b.ce=a.dg;b.cL=a.ft;if(a.d7!==null)b.bR=a.d7;else{b.bR=E(BS,a.dg.data.length+1|0);CN(a.dg,0,b.bR,1,a.dg.data.length);b.bR.data[0]=new Ga;}b.d2=a.eo===null?a.ft:a.eo;b.bi=a.cX;b.fi=a.cX<=0?0:1;Oj(b,!a.dM?a.e6:Bs(1,a.e6));N9(b,a.gx);KK(b,a.f0);KS(b,a.e4);b.dq=a.dM;b.dS=a.fP;b.U=a.d3;}
function EZ(a,b,c){var d,e,f,g;d=DH();e=new P;Q(e);a:{b:{c:while(true){if(a.h>=J(a.C))break a;d:{f=H(a.C,a.h);switch(f){case 35:case 48:if(!b)break a;d=new X;e=new P;Q(e);G(e,C(316));e=W(e,a.h);G(e,C(315));G(e,a.C);U(d,N(e));F(d);case 37:if(e.n>0){Bk(d,E5(N(e)));Eh(e,0);}Bk(d,new JQ);a.h=a.h+1|0;a.d3=100;break d;case 39:a.h=a.h+1|0;g=Hp(a.C,39,a.h);if(g<0){d=new X;e=new P;Q(e);G(e,C(317));e=W(e,a.h);G(e,C(318));G(e,a.C);U(d,N(e));F(d);}if(g==a.h)O(e,39);else G(e,CR(a.C,a.h,g));a.h=g+1|0;break d;case 45:if(e.n
>0){Bk(d,E5(N(e)));Eh(e,0);}Bk(d,new Ga);a.h=a.h+1|0;break d;case 46:case 69:break c;case 59:break b;case 164:if(e.n>0){Bk(d,E5(N(e)));Eh(e,0);}Bk(d,new Jz);a.h=a.h+1|0;break d;case 8240:if(e.n>0){Bk(d,E5(N(e)));Eh(e,0);}Bk(d,new Hh);a.h=a.h+1|0;a.d3=1000;break d;default:}O(e,f);a.h=a.h+1|0;}}d=new X;e=new P;Q(e);G(e,C(316));e=W(e,a.h);G(e,C(315));G(e,a.C);U(d,N(e));F(d);}if(c){d=new X;e=new P;Q(e);G(e,C(316));e=W(e,a.h);G(e,C(315));G(e,a.C);U(d,N(e));F(d);}}if(e.n>0)Bk(d,E5(N(e)));return DW(d,E(BS,d.x));}
function Jv(a,b){var c,d,e,f,g;Ny(a,b);if(a.h<J(a.C)&&H(a.C,a.h)==46){a.h=a.h+1|0;c=0;d=0;e=0;a:{b:while(true){if(a.h>=J(a.C))break a;c:{switch(H(a.C,a.h)){case 35:break;case 44:f=new X;g=new P;Q(g);G(g,C(319));g=W(g,a.h);G(g,C(315));G(g,a.C);U(f,N(g));F(f);case 46:g=new X;f=new P;Q(f);G(f,C(320));f=W(f,a.h);G(f,C(315));G(f,a.C);U(g,N(f));F(g);case 48:if(c)break b;d=d+1|0;e=e+1|0;break c;default:break a;}d=d+1|0;c=1;}a.h=a.h+1|0;}g=new X;f=new P;Q(f);G(f,C(321));f=W(f,a.h);G(f,C(315));G(f,a.C);U(g,N(f));F(g);}if
(b){a.e4=d;a.f0=e;a.dM=d?0:1;}}if(a.h<J(a.C)&&H(a.C,a.h)==69){a.h=a.h+1|0;c=0;d:{e:while(true){if(a.h>=J(a.C))break d;switch(H(a.C,a.h)){case 35:case 44:case 46:case 69:break e;case 48:break;default:break d;}c=c+1|0;a.h=a.h+1|0;}g=new X;f=new P;Q(f);G(f,C(322));f=W(f,a.h);G(f,C(315));G(f,a.C);U(g,N(f));F(g);}if(!c){f=new X;g=new P;Q(g);G(g,C(323));g=W(g,a.h);G(g,C(315));G(g,a.C);U(f,N(g));F(f);}if(b)a.fP=c;}}
function Ny(a,b){var c,d,e,f,g,h,i;c=a.h;d=a.h;e=1;f=0;g=0;a:{b:while(true){if(a.h>=J(a.C))break a;c:{d:{switch(H(a.C,a.h)){case 35:if(!e)break b;f=f+1|0;break c;case 44:break d;case 48:break;default:break a;}e=0;f=f+1|0;g=g+1|0;break c;}if(d==a.h){h=new X;i=new P;Q(i);G(i,C(324));i=W(i,a.h);G(i,C(315));G(i,a.C);U(h,N(i));F(h);}if(b)a.cX=a.h-d|0;d=a.h+1|0;}a.h=a.h+1|0;}h=new X;i=new P;Q(i);G(i,C(325));i=W(i,a.h);G(i,C(315));G(i,a.C);U(h,N(i));F(h);}if(!f){h=new X;i=new P;Q(i);G(i,C(326));i=W(i,a.h);G(i,C(315));G(i,
a.C);U(h,N(i));F(h);}if(d==a.h){h=new X;i=new P;Q(i);G(i,C(327));i=W(i,a.h);G(i,C(315));G(i,a.C);U(h,N(i));F(h);}if(b&&d>c)a.cX=a.h-d|0;if(b){a.gx=f;a.e6=g;}}
function Ky(){var a=this;B.call(a);a.bg=null;a.be=null;a.bB=null;a.co=0;a.dL=0;a.bL=null;}
function LV(a,b,c,d){var e=new Ky();ST(e,a,b,c,d);return e;}
function ST(a,b,c,d,e){a.bL=b;a.dL=a.bL.O;a.bg=c;a.be=d;a.co=e;}
function J1(a){return a.bg===null?0:1;}
function Ew(a){var b;Et(a);if(a.bg===null){b=new CL;M(b);F(b);}b=a.bg.b_;a.bB=a.bg;a.be=a.bg;a.bg=a.bg.bn;a.co=a.co+1|0;return b;}
function E7(a){var b,c;if(a.bB===null){b=new C7;M(b);F(b);}b=a.bL;c=a.bB;if(c.bp===null)b.W=c.bn;else c.bp.bn=c.bn;if(c.bn===null)b.cW=c.bp;else c.bn.bp=c.bp;b.bf=b.bf-1|0;b.O=b.O+1|0;if(a.bB===a.be){a.be=!J1(a)?null:a.bg.bp;a.co=a.co-1|0;}else if(a.bB===a.bg)a.bg=!Ir(a)?null:a.be.bn;a.dL=a.bL.O;a.bB=null;}
function Ir(a){return a.be===null?0:1;}
function GV(a){var b;Et(a);if(a.be===null){b=new CL;M(b);F(b);}a.bB=a.be;b=a.be.b_;a.bg=a.be;a.be=a.be.bp;a.co=a.co-1|0;return b;}
function F7(a,b){if(a.bB===null){b=new C7;M(b);F(b);}Et(a);a.bB.b_=b;a.bB=null;}
function Ge(a,b){var c;Et(a);c=new FH;c.b_=b;c.bp=a.be;c.bn=a.bg;if(a.be!==null)a.be.bn=c;else a.bL.W=c;if(a.bg!==null)a.bg.bp=c;else a.bL.cW=c;a.be=c;b=a.bL;b.bf=b.bf+1|0;b=a.bL;b.O=b.O+1|0;a.dL=a.bL.O;a.bB=null;}
function Et(a){var b;if(a.dL>=a.bL.O)return;b=new D0;M(b);F(b);}
function Ja(){var a=this;K.call(a);a.gH=null;a.jB=null;}
function Vc(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.P^Cf(a.gH,c):0;}
function I$(){var a=this;K.call(a);a.g9=null;a.hu=null;a.i2=null;}
function QA(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.P^Cf(a.g9,c):0;return a.hu.g(b)&&!d?1:0;}
function HU(){var a=this;K.call(a);a.d8=null;a.iw=null;}
function YQ(a,b){return a.y^Cf(a.d8,b);}
function Ws(a){var b,c;b=new P;Q(b);c=Eg(a.d8,0);while(c>=0){Dd(b,Eb(c));O(b,124);c=Eg(a.d8,c+1|0);}if(b.n>0)I3(b,b.n-1|0);return N(b);}
function H0(){var a=this;K.call(a);a.h2=null;a.ip=null;}
function TY(a,b){return a.h2.g(b);}
function HY(){var a=this;K.call(a);a.es=0;a.gZ=null;a.fG=null;}
function UH(a,b){return !(a.es^Cf(a.fG.r,b))&&!(a.es^a.fG.bM^a.gZ.g(b))?0:1;}
function HZ(){var a=this;K.call(a);a.eE=0;a.he=null;a.eU=null;}
function PU(a,b){return !(a.eE^Cf(a.eU.r,b))&&!(a.eE^a.eU.bM^a.he.g(b))?1:0;}
function H3(){var a=this;K.call(a);a.hL=0;a.hl=null;a.hc=null;a.i4=null;}
function UK(a,b){return a.hL^(!a.hl.g(b)&&!a.hc.g(b)?0:1);}
function H4(){var a=this;K.call(a);a.h9=0;a.hZ=null;a.hE=null;a.j0=null;}
function PF(a,b){return a.h9^(!a.hZ.g(b)&&!a.hE.g(b)?0:1)?0:1;}
function H1(){var a=this;K.call(a);a.hs=null;a.j7=null;}
function Wz(a,b){return B0(a.hs,b);}
function H2(){var a=this;K.call(a);a.hr=null;a.ji=null;}
function PX(a,b){return B0(a.hr,b)?0:1;}
function H5(){var a=this;K.call(a);a.gh=null;a.h1=0;a.gX=null;}
function WC(a,b){return !B0(a.gh,b)&&!(a.h1^Cf(a.gX.r,b))?0:1;}
function H6(){var a=this;K.call(a);a.gB=null;a.gF=0;a.gs=null;}
function TR(a,b){return !B0(a.gB,b)&&!(a.gF^Cf(a.gs.r,b))?1:0;}
function HT(){var a=this;K.call(a);a.gV=0;a.hd=null;a.hB=null;a.iz=null;}
function Y9(a,b){return !(a.gV^a.hd.g(b))&&!B0(a.hB,b)?0:1;}
function Is(){var a=this;K.call(a);a.hy=0;a.gp=null;a.gA=null;a.je=null;}
function WF(a,b){return !(a.hy^a.gp.g(b))&&!B0(a.gA,b)?1:0;}
function HR(){var a=this;K.call(a);a.hb=null;a.jl=null;}
function TP(a,b){return B0(a.hb,b);}
function HS(){var a=this;K.call(a);a.hh=null;a.jZ=null;}
function V2(a,b){return B0(a.hh,b)?0:1;}
function HX(){var a=this;K.call(a);a.hI=null;a.gv=0;a.ib=null;}
function X0(a,b){return B0(a.hI,b)&&a.gv^Cf(a.ib.r,b)?1:0;}
function HQ(){var a=this;K.call(a);a.gM=null;a.ia=0;a.gu=null;}
function V1(a,b){return B0(a.gM,b)&&a.ia^Cf(a.gu.r,b)?0:1;}
function HV(){var a=this;K.call(a);a.gY=0;a.gG=null;a.h8=null;a.i1=null;}
function Sv(a,b){return a.gY^a.gG.g(b)&&B0(a.h8,b)?1:0;}
function HW(){var a=this;K.call(a);a.gJ=0;a.gl=null;a.gU=null;a.jp=null;}
function SL(a,b){return a.gJ^a.gl.g(b)&&B0(a.gU,b)?0:1;}
function Ix(){var a=this;B.call(a);a.by=null;a.dw=null;a.f2=null;a.ga=null;a.g4=0;a.f4=0;a.bu=0;a.t=0;a.d4=0;a.dI=0;a.ci=0;a.bI=0;a.jm=0;a.cq=0;a.dp=0;}
function Ba(a,b,c){a.dw.data[b]=c;}
function Ce(a,b){return a.dw.data[b];}
function KE(a){return Pl(a,0);}
function Pl(a,b){var c,d;if(!a.f4){c=new C7;M(c);F(c);}if(b>=0&&b<a.g4)return a.by.data[(b*2|0)+1|0];c=new Br;d=new P;Q(d);U(c,N(W(d,b)));F(c);}
function CW(a,b,c){a.by.data[b*2|0]=c;}
function FD(a,b,c){a.by.data[(b*2|0)+1|0]=c;}
function DP(a,b){return a.by.data[b*2|0];}
function EC(a,b){return a.by.data[(b*2|0)+1|0];}
function Pc(a,b){var c,d;c=DP(a,b);d=EC(a,b);if((d|c|(d-c|0))>=0&&d<=J(a.ga))return CR(a.ga,c,d);return null;}
function KD(a){if(a.by.data[0]==(-1)){a.by.data[0]=a.d4;a.by.data[1]=a.d4;}a.cq=KE(a);}
function GZ(a,b){return a.f2.data[b];}
function CE(a,b,c){a.f2.data[b]=c;}
function OG(a){a.f4=1;}
function JX(a,b,c,d){a.f4=0;a.dp=2;FE(a.by,(-1));FE(a.dw,(-1));if(b!==null)a.ga=b;if(c>=0){a.bu=c;a.t=d;}a.d4=a.bu;}
function M1(a){JX(a,null,(-1),(-1));}
function M9(a,b){a.d4=b;if(a.cq>=0)b=a.cq;a.cq=b;}
function SI(a){return a.bu;}
function P3(a){return a.t;}
function UN(a,b){a.dp=b;}
function V_(a){return a.dp;}
function W0(a){return a.ci;}
function Qu(a){return a.dI;}
function Rq(a){return a.cq;}
function Gz(){var a=this;B.call(a);a.cA=null;a.ds=null;}
function TC(a){return a.ds;}
function GK(a,b){var c;c=a.ds;a.ds=b;return c;}
function Yq(a){return a.cA;}
function J6(){}
function He(){}
function H_(){}
function Ea(){B.call(this);}
function K7(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;Ou(a,f[c]);e=e+1|0;c=g;}}
function Ft(){Ea.call(this);this.f9=null;}
function Jd(){var a=this;Ft.call(a);a.iV=0;a.fO=0;a.b3=null;a.dn=null;a.gW=null;}
function Hl(a,b,c,d){var $$je;if(a.f9===null)a.fO=1;if(!(a.fO?0:1))return;a:{try{K7(a.f9,b,c,d);break a;}catch($$e){$$je=BM($$e);if($$je instanceof HO){}else{throw $$e;}}a.fO=1;}}
function HF(a,b,c,d){var e,f,g,h,i,j,k;e=b.data;d=d-c|0;f=new JH;g=e.length;d=c+d|0;I0(f,g);f.Y=c;f.b7=d;f.hi=0;f.j2=0;f.h6=b;e=$rt_createByteArray(Bs(16,Bm(g,1024)));h=e.data.length;i=new Js;d=0+h|0;I0(i,h);i.kc=ADd;i.hR=0;i.gI=e;i.Y=0;i.b7=d;i.im=0;i.eH=0;j=OL(Kr(OT(a.gW),ADe),ADe);while(true){k=F_(LB(j,f,i,1));Hl(a,e,0,i.Y);HE(i);if(!k)break;}while(true){k=F_(KX(j,i));Hl(a,e,0,i.Y);HE(i);if(!k)break;}}
function Nk(a,b){a.dn.data[0]=b;HF(a,a.dn,0,1);}
function E4(a,b){G(a.b3,b);Hn(a);}
function Pa(a,b){O(Fn(a.b3,b),10);Hn(a);}
function MJ(a){Nk(a,10);}
function Hn(a){var b;b=a.b3.n<=a.dn.data.length?a.dn:$rt_createCharArray(a.b3.n);Nw(a.b3,0,a.b3.n,b,0);HF(a,b,0,a.b3.n);Eh(a.b3,0);}
function IB(){Ea.call(this);}
function Ou(a,b){$rt_putStderr(b);}
function Hq(){var a=this;Gz.call(a);a.X=null;a.V=null;a.cJ=0;a.ch=0;}
function LS(a){var b;b=Fc(a);if(b==2){if(Fc(a.V)<0)a.V=G$(a.V);return Ib(a);}if(b!=(-2))return a;if(Fc(a.X)>0)a.X=Ib(a.X);return G$(a);}
function Fc(a){return (a.V===null?0:a.V.cJ)-(a.X===null?0:a.X.cJ)|0;}
function G$(a){var b;b=a.X;a.X=b.V;b.V=a;Dz(a);Dz(b);return b;}
function Ib(a){var b;b=a.V;a.V=b.X;b.X=a;Dz(a);Dz(b);return b;}
function Dz(a){var b,c;b=a.V===null?0:a.V.cJ;c=a.X===null?0:a.X.cJ;a.cJ=Bs(b,c)+1|0;a.ch=1;if(a.X!==null)a.ch=a.ch+a.X.ch|0;if(a.V!==null)a.ch=a.ch+a.V.ch|0;}
function Lc(a,b){return b?a.V:a.X;}
function KW(a,b){return b?a.X:a.V;}
function Fq(){var a=this;B.call(a);a.ik=null;a.jE=null;}
function MX(b){var c,d;if(C4(b))F(N4(b));if(!MZ(H(b,0)))F(N4(b));c=1;while(c<J(b)){a:{d=H(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(MZ(d))break a;else F(N4(b));}}c=c+1|0;}}
function MZ(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function Kg(){Fq.call(this);}
function OT(a){var b,c,d,e,f;b=new IL;c=$rt_createByteArray(1);d=c.data;d[0]=63;b.e5=ADf;b.fX=ADf;e=d.length;if(e&&e>=b.ge){b.iF=a;b.fH=c.em();b.iL=2.0;b.ge=4.0;return b;}f=new X;U(f,C(328));F(f);}
function M7(){X.call(this);this.iM=null;}
function N4(a){var b=new M7();VQ(b,a);return b;}
function VQ(a,b){M(a);a.iM=b;}
function FP(){var a=this;B.call(a);a.cG=0;a.gE=0;a.cu=null;a.cP=null;a.ht=null;a.c8=null;}
function Ld(a){if(a.cu!==null)return 1;while(a.cG<a.c8.ba.data.length){if(a.c8.ba.data[a.cG]!==null)return 1;a.cG=a.cG+1|0;}return 0;}
function Ne(a){var b;if(a.gE==a.c8.cT)return;b=new D0;M(b);F(b);}
function LM(a){var b,c,d;Ne(a);if(!Ld(a)){b=new CL;M(b);F(b);}if(a.cu===null){c=a.c8.ba.data;d=a.cG;a.cG=d+1|0;a.cP=c[d];a.cu=a.cP.cn;a.ht=null;}else{if(a.cP!==null)a.ht=a.cP;a.cP=a.cu;a.cu=a.cu.cn;}}
function H8(){FP.call(this);}
function KU(a){LM(a);return a.cP;}
function XN(a){return KU(a);}
function G6(){Ee.call(this);}
function YP(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=DP(e,a.J);CW(e,a.J,c);f=a.bs.a(c,d,e);if(f>=0)break;CW(e,a.J,g);c=c+(-1)|0;}}return c;}
function Tw(a){return null;}
function C7(){BZ.call(this);}
function GQ(){B.call(this);this.ix=0;}
function Ga(){B.call(this);}
function Su(a,b,c){O(c,b.G.de);}
function O$(){B.call(this);}
function Kw(b){return 1.0/IX(b);}
function NO(b){return 1.0/JD(b);}
function NJ(b){return Jg(1.0/b);}
function PA(b){return CC(b+J9(1.0+b*b));}
function LC(b){return CC(b+J9(b*b-1.0));}
function Jl(b){return 0.5*CC((1.0+b)/(1.0-b));}
function OX(b){return Jl(1.0/b);}
function D0(){Bc.call(this);}
function IR(){B.call(this);}
function YB(a){return 0;}
function PJ(a){var b;b=new CL;M(b);F(b);}
function G2(){K.call(this);this.j$=null;}
function WT(a,b){return BD(b)!=2?0:1;}
function GT(){K.call(this);this.is=null;}
function R0(a,b){return BD(b)!=1?0:1;}
function Kc(){K.call(this);this.jJ=null;}
function Rl(a,b){return Gi(b);}
function Kb(){K.call(this);this.jo=null;}
function VJ(a,b){return 0;}
function Jo(){K.call(this);this.jy=null;}
function XJ(a,b){return !BD(b)?0:1;}
function Il(){K.call(this);this.iI=null;}
function WW(a,b){return Gu(b);}
function HG(){K.call(this);this.jX=null;}
function RZ(a,b){return D_(b);}
function Jp(){K.call(this);this.ka=null;}
function T8(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function GP(){K.call(this);this.ig=null;}
function Yr(a,b){a:{b:{switch(BD(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=D_(b);}return b;}
function GS(){K.call(this);this.iN=null;}
function Uo(a,b){a:{b:{switch(BD(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=D_(b);}return b;}
function Hv(){K.call(this);this.jt=null;}
function W$(a,b){return D8(b);}
function IG(){K.call(this);this.jL=null;}
function Qi(a,b){return Fx(b);}
function IM(){K.call(this);this.jM=null;}
function Tj(a,b){return IN(b);}
function Hu(){K.call(this);this.iY=null;}
function WD(a,b){return BD(b)!=3?0:1;}
function GI(){K.call(this);this.iq=null;}
function XR(a,b){a:{b:{switch(BD(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=D_(b);}return b;}
function G1(){K.call(this);this.j9=null;}
function T6(a,b){a:{b:{switch(BD(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=D_(b);}return b;}
function Gq(){K.call(this);this.eG=0;}
function AAR(a){var b=new Gq();Ls(b,a);return b;}
function Ls(a,b){T(a);a.eG=b;}
function R2(a,b){return a.y^(a.eG!=BD(b&65535)?0:1);}
function J4(){Gq.call(this);}
function Vj(a,b){return a.y^(!(a.eG>>BD(b&65535)&1)?0:1);}
function I2(){var a=this;B.call(a);a.eu=Long_ZERO;a.f7=0;}
function Hh(){B.call(this);}
function QF(a,b,c){O(c,b.G.eS);}
function Jz(){B.call(this);}
function P_(a,b,c){if(b.dG===null)O(c,164);else G(c,K2(b.dG,b.G.c6));}
function JQ(){B.call(this);}
function QQ(a,b,c){O(c,b.G.eJ);}
function BN(){var a=this;B_.call(a);a.dN=null;a.bx=0;a.bq=Long_ZERO;a.bw=0;a.cQ=0;}
var ABP=null;var ADg=null;var ADh=null;var ADi=null;var ADj=null;var ADk=null;var ADl=null;var ADm=null;var ADn=null;var ADo=null;var ADp=null;var ADq=null;function Db(){Db=Bq(BN);RY();}
function V6(a,b){var c=new BN();LY(c,a,b);return c;}
function DR(a,b){var c=new BN();K0(c,a,b);return c;}
function M5(a,b){var c=new BN();Ll(c,a,b);return c;}
function LY(a,b,c){Db();a.bq=b;a.bw=c;a.bx=F0(b);}
function K0(a,b,c){Db();a.bq=Long_fromInt(b);a.bw=c;if(b<0)b=b^(-1);a.bx=32-C_(b)|0;}
function Ll(a,b,c){Db();if(b===null){b=new CB;M(b);F(b);}a.bw=c;a.dN=b;a.bx=Ke(b);if(a.bx<64)a.bq=Fu(b);}
function Kd(b,c){Db();if(!c)return F5(b);if(Long_eq(b,Long_ZERO)&&c>=0&&c<ADp.data.length)return ADp.data[c];return V6(b,c);}
function F5(b){Db();if(Long_ge(b,Long_ZERO)&&Long_lt(b,Long_fromInt(11)))return ADo.data[b.lo];return V6(b,0);}
function JM(a,b){var c,d;c=Long_add(Long_fromInt(a.bw),Long_fromInt(b.bw));if(!GL(a)&&!GL(b)){if((a.bx+b.bx|0)<64)return Kd(Long_mul(a.bq,b.bq),IJ(c));return M5(Bt(Ci(a),Ci(b)),IJ(c));}d=c.lo;return Long_eq(c,Long_fromInt(d))?Kd(Long_ZERO,d):Long_lt(c,Long_ZERO)?DR(0,(-2147483648)):DR(0,2147483647);}
function IU(a){var b;if(a.bx>=64)return Ci(a).j;b=a.bq;return Long_or(Long_shr(b,63),Long_shru(Long_neg(b),63)).lo;}
function GL(a){return !a.bx&&Long_ne(a.bq,Long_fromInt(-1))?1:0;}
function Xm(a){return a.bw;}
function Fe(a){var b,c,d;if(a.cQ>0)return a.cQ;b=a.bx;c=1.0;if(b>=1024){d=1.0+(b-1|0)*0.3010299956639812|0;if(Bu(Ci(a),Gl(Long_fromInt(d))).j)d=d+1|0;}else{if(b>=64)c=Pi(Ci(a));else if(b>=1)c=Long_toNumber(a.bq);d=1.0+JK(Dp(c))|0;}a.cQ=d;return a.cQ;}
function XZ(a){return Ci(a);}
function KA(a,b){var c,d,e,f,g,h;c=IU(a);d=BJ(c,IU(b));if(d){if(d>=0)return 1;return (-1);}if(a.bw==b.bw&&a.bx<64&&b.bx<64)return Long_lt(a.bq,b.bq)?(-1):Long_le(a.bq,b.bq)?0:1;e=Long_sub(Long_fromInt(a.bw),Long_fromInt(b.bw));f=Long_fromInt(I_(a)-I_(b)|0);if(Long_gt(f,Long_add(e,Long_fromInt(1))))return c;if(Long_lt(f,Long_sub(e,Long_fromInt(1))))return  -c;g=Ci(a);h=Ci(b);c=Long_compare(e,Long_ZERO);if(c<0)g=Bt(g,Gl(Long_neg(e)));else if(c>0)h=Bt(h,Gl(e));return DC(g,h);}
function I_(a){return a.cQ>0?a.cQ:((a.bx-1|0)*0.3010299956639812|0)+1|0;}
function IJ(b){var c;Db();if(Long_lt(b,Long_fromInt(-2147483648))){c=new B7;U(c,C(329));F(c);}if(Long_le(b,Long_fromInt(2147483647)))return b.lo;c=new B7;U(c,C(330));F(c);}
function Ci(a){if(a.dN===null)a.dN=BB(a.bq);return a.dN;}
function F0(b){var c,d;Db();if(Long_lt(b,Long_ZERO))b=Long_xor(b,Long_fromInt(-1));if(Long_eq(b,Long_ZERO))c=64;else{c=0;d=Long_shru(b,32);if(Long_ne(d,Long_ZERO))c=32;else d=b;b=Long_shru(d,16);if(Long_eq(b,Long_ZERO))b=d;else c=c|16;d=Long_shru(b,8);if(Long_eq(d,Long_ZERO))d=b;else c=c|8;b=Long_shru(d,4);if(Long_eq(b,Long_ZERO))b=d;else c=c|4;d=Long_shru(b,2);if(Long_eq(d,Long_ZERO))d=b;else c=c|2;if(Long_ne(Long_shru(d,1),Long_ZERO))c=c|1;c=(64-c|0)-1|0;}return 64-c|0;}
function RY(){var b,c,d,e;ABP=DR(0,0);ADg=DR(1,0);ADh=DR(10,0);b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]
=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);ADk=b;b=$rt_createLongArray(28);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(5);c[2]=Long_fromInt(25);c[3]=Long_fromInt(125);c[4]=Long_fromInt(625);c[5]=Long_fromInt(3125);c[6]=Long_fromInt(15625);c[7]=Long_fromInt(78125);c[8]=Long_fromInt(390625);c[9]=Long_fromInt(1953125);c[10]=Long_fromInt(9765625);c[11]=Long_fromInt(48828125);c[12]=Long_fromInt(244140625);c[13]=
Long_fromInt(1220703125);c[14]=new Long(1808548329, 1);c[15]=new Long(452807053, 7);c[16]=new Long(2264035265, 35);c[17]=new Long(2730241733, 177);c[18]=new Long(766306777, 888);c[19]=new Long(3831533885, 4440);c[20]=new Long(1977800241, 22204);c[21]=new Long(1299066613, 111022);c[22]=new Long(2200365769, 555111);c[23]=new Long(2411894253, 2775557);c[24]=new Long(3469536673, 13877787);c[25]=new Long(167814181, 69388939);c[26]=new Long(839070905, 346944695);c[27]=new Long(4195354525, 1734723475);ADl=b;ADm=$rt_createIntArray(ADl.data.length);ADn
=$rt_createIntArray(ADk.data.length);ADo=E(BN,11);ADp=E(BN,11);ADq=$rt_createCharArray(100);d=0;while(d<ADp.data.length){ADo.data[d]=DR(d,0);ADp.data[d]=DR(0,d);ADq.data[d]=48;d=d+1|0;}while(d<ADq.data.length){ADq.data[d]=48;d=d+1|0;}e=0;while(e<ADm.data.length){ADm.data[e]=F0(ADl.data[e]);e=e+1|0;}e=0;while(e<ADn.data.length){ADn.data[e]=F0(ADk.data[e]);e=e+1|0;}Di();ADj=ADr;ADi=ADs;}
function Bz(){var a=this;B_.call(a);a.f=null;a.k=0;a.j=0;a.cx=0;}
var ABQ=null;var ABR=null;var ABS=null;var ADt=null;var ADu=null;var ADv=null;function BU(a,b){var c=new Bz();L2(c,a,b);return c;}
function BY(a,b,c){var d=new Bz();F6(d,a,b,c);return d;}
function XO(a,b){var c=new Bz();KZ(c,a,b);return c;}
function L2(a,b,c){var d;a.cx=(-2);a.j=b;a.k=1;d=$rt_createIntArray(1);d.data[0]=c;a.f=d;}
function F6(a,b,c,d){a.cx=(-2);a.j=b;a.k=c;a.f=d;}
function KZ(a,b,c){var d,e;a.cx=(-2);a.j=b;if(Long_eq(Long_and(c,new Long(0, 4294967295)),Long_ZERO)){a.k=1;d=$rt_createIntArray(1);d.data[0]=c.lo;a.f=d;}else{a.k=2;d=$rt_createIntArray(2);e=d.data;e[0]=c.lo;e[1]=c.hi;a.f=d;}}
function BB(b){if(Long_lt(b,Long_ZERO)){if(Long_eq(b,Long_fromInt(-1)))return ADt;return XO((-1),Long_neg(b));}if(Long_gt(b,Long_fromInt(10)))return XO(1,b);return ADu.data[b.lo];}
function IH(a){if(a.j<0)a=BY(1,a.k,a.f);return a;}
function F9(a){return !a.j?a:BY( -a.j,a.k,a.f);}
function B$(a,b){return XA(a,b);}
function DB(a,b){var c,d,e,f,g,h,i,j,k;a:{c=a.j;d=b.j;if(d){if(!c)a=F9(b);else{e=a.k;f=b.k;if((e+f|0)==2){g=Long_and(Long_fromInt(a.f.data[0]),new Long(4294967295, 0));h=Long_and(Long_fromInt(b.f.data[0]),new Long(4294967295, 0));if(c<0)g=Long_neg(g);if(d<0)h=Long_neg(h);a=BB(Long_sub(g,h));}else{i=BJ(e,f);i=!i?DY(a.f,b.f,e):i<=0?(-1):1;if(i==(-1)){i= -d;j=c!=d?F8(b.f,f,a.f,e):F1(b.f,f,a.f,e);}else if(c!=d){j=F8(a.f,e,b.f,f);i=c;}else{if(!i){a=ABQ;break a;}j=F1(a.f,e,b.f,f);i=c;}k=j.data;a=BY(i,k.length,j);B6(a);}}}}return a;}
function Xe(a){return a.j;}
function EK(a,b){if(b&&a.j)return b>0?Lz(a,b):K9(a, -b);return a;}
function Cs(a,b){if(b&&a.j)return b>0?K9(a,b):Lz(a, -b);return a;}
function Ke(a){var b,c;if(!a.j)b=0;else{c=a.k<<5;b=a.f.data[a.k-1|0];if(a.j<0&&Hb(a)==(a.k-1|0))b=b+(-1)|0;b=c-C_(b)|0;}return b;}
function IC(a,b){var c,d,e,f;if(!b)return !(a.f.data[0]&1)?0:1;if(b<0){c=new B7;U(c,C(331));F(c);}d=b>>5;if(d>=a.k)return a.j>=0?0:1;e=a.f.data[d];b=1<<(b&31);if(a.j<0){f=Hb(a);if(d<f)return 0;e=f==d? -e:e^(-1);}return !(e&b)?0:1;}
function Em(a){return CS(a.j,a.f.data[0]);}
function Fu(a){var b;b=a.k<=1?Long_and(Long_fromInt(a.f.data[0]),new Long(4294967295, 0)):Long_or(Long_shl(Long_fromInt(a.f.data[1]),32),Long_and(Long_fromInt(a.f.data[0]),new Long(4294967295, 0)));return Long_mul(Long_fromInt(a.j),b);}
function Pi(a){return L1(a);}
function DC(a,b){if(a.j>b.j)return 1;if(a.j<b.j)return (-1);if(a.k>b.k)return a.j;if(a.k<b.k)return  -b.j;return CS(a.j,DY(a.f,b.f,a.k));}
function Ca(a,b){var c;if(a===b)return 1;if(!(b instanceof Bz))return 0;c=b;return a.j==c.j&&a.k==c.k&&Ph(a,c.f)?1:0;}
function Ph(a,b){var c,d;c=a.k-1|0;while(c>=0){d=b.data;if(a.f.data[c]!=d[c])break;c=c+(-1)|0;}return c>=0?0:1;}
function Bt(a,b){if(!b.j)return ABQ;if(!a.j)return ABQ;Di();return E6(a,b);}
function C9(a,b){var c,d,e,f,g,h,i,j,k;if(b<0){c=new B7;U(c,C(332));F(c);}if(!b)return ABR;if(b!=1&&!Ca(a,ABR)&&!Ca(a,ABQ)){if(!IC(a,0)){d=1;while(!IC(a,d)){d=d+1|0;}e=CS(d,b);if(e<ADv.data.length)c=ADv.data[e];else{f=e>>5;g=e&31;h=f+1|0;i=$rt_createIntArray(h);i.data[f]=1<<g;c=BY(1,h,i);}return Bt(c,C9(EK(a,d),b));}Di();c=ABR;while(b>1){if(b&1)c=Bt(c,a);if(a.k==1)a=Bt(a,a);else{j=new Bz;i=Jy(a.f,a.k,$rt_createIntArray(a.k<<1));k=i.data;j.cx=(-2);e=k.length;if(e){j.j=1;j.k=e;j.f=i;B6(j);}else{j.j=0;j.k=1;i=
$rt_createIntArray(1);i.data[0]=0;j.f=i;}a=j;}b=b>>1;}return Bt(c,a);}return a;}
function EQ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=b.j;if(!c){b=new B7;U(b,C(333));F(b);}d=b.k;e=b.f;if(d==1){f=e.data[0];e=a.f;d=a.k;g=a.j;if(d!=1){c=g!=c?(-1):1;h=$rt_createIntArray(d);i=$rt_createIntArray(1);i.data[0]=MN(h,e,d,f);b=BY(c,d,h);j=BY(g,1,i);B6(b);B6(j);h=E(Bz,2);e=h.data;e[0]=b;e[1]=j;}else{k=Long_and(Long_fromInt(e.data[0]),new Long(4294967295, 0));l=Long_and(Long_fromInt(f),new Long(4294967295, 0));m=Long_div(k,l);k=Long_rem(k,l);if(g!=c)m=Long_neg(m);if(g<0)k=Long_neg(k);h=E(Bz,2);e=h.data;e[0]
=BB(m);e[1]=BB(k);}return h;}h=a.f;f=a.k;n=BJ(f,d);if((!n?DY(h,e,f):n<=0?(-1):1)<0){e=E(Bz,2);h=e.data;h[0]=ABQ;h[1]=a;return e;}g=a.j;o=(f-d|0)+1|0;p=g!=c?(-1):1;i=$rt_createIntArray(o);q=Kk(i,o,h,f,e,d);j=BY(p,o,i);r=BY(g,d,q);B6(j);B6(r);e=E(Bz,2);h=e.data;h[0]=j;h[1]=r;return e;}
function Bu(a,b){var c,d,e,f,g,h,i,j,k,l;if(!b.j){b=new B7;U(b,C(333));F(b);}c=b.j;if(On(b)){if(b.j<=0)a=F9(a);return a;}d=a.j;e=a.k;f=b.k;if((e+f|0)==2){g=Long_div(Long_and(Long_fromInt(a.f.data[0]),new Long(4294967295, 0)),Long_and(Long_fromInt(b.f.data[0]),new Long(4294967295, 0)));if(d!=c)g=Long_neg(g);return BB(g);}h=BJ(e,f);h=!h?DY(a.f,b.f,e):h<=0?(-1):1;if(!h)return d!=c?ADt:ABR;if(h==(-1))return ABQ;i=(e-f|0)+1|0;j=$rt_createIntArray(i);k=d!=c?(-1):1;if(f!=1)Kk(j,i,a.f,e,b.f,f);else MN(j,a.f,e,b.f.data[0]);l
=BY(k,i,j);B6(l);return l;}
function DS(a,b){var c,d,e,f,g,h,i,j,k;if(!b.j){b=new B7;U(b,C(333));F(b);}c=a.k;d=b.k;e=BJ(c,d);if((!e?DY(a.f,b.f,c):e<=0?(-1):1)==(-1))return a;f=$rt_createIntArray(d);if(d!=1)f=Kk(null,(c-d|0)+1|0,a.f,c,b.f,d);else{g=a.f;h=b.f.data[0];i=Long_ZERO;c=c-1|0;while(c>=0){j=g.data;i=Long_fromInt(NM(Long_add(Long_shl(i,32),Long_and(Long_fromInt(j[c]),new Long(4294967295, 0))),h).hi);c=c+(-1)|0;}f.data[0]=i.lo;}k=BY(a.j,d,f);B6(k);return k;}
function B6(a){var b,c,d;while(a.k>0){b=a.f.data;c=a.k-1|0;a.k=c;if(b[c])break;}b=a.f.data;d=a.k;a.k=d+1|0;if(!b[d])a.j=0;}
function On(a){return a.k==1&&a.f.data[0]==1?1:0;}
function Hb(a){var b;if(a.cx==(-2)){if(!a.j)b=(-1);else{b=0;while(!a.f.data[b]){b=b+1|0;}}a.cx=b;}return a.cx;}
function Pu(){var b,c,d;ABQ=BU(0,0);ABR=BU(1,1);ABS=BU(1,10);ADt=BU((-1),1);b=E(Bz,11);c=b.data;c[0]=ABQ;c[1]=ABR;c[2]=BU(1,2);c[3]=BU(1,3);c[4]=BU(1,4);c[5]=BU(1,5);c[6]=BU(1,6);c[7]=BU(1,7);c[8]=BU(1,8);c[9]=BU(1,9);c[10]=ABS;ADu=b;ADv=E(Bz,32);d=0;while(d<ADv.data.length){ADv.data[d]=BB(Long_shl(Long_fromInt(1),d));d=d+1|0;}}
function D2(){var a=this;B.call(a);a.hK=0;a.Y=0;a.b7=0;a.dU=0;}
function ADw(a){var b=new D2();I0(b,a);return b;}
function I0(a,b){a.dU=(-1);a.hK=b;a.b7=b;}
function RL(a){return a.Y;}
function Cw(a){return a.b7-a.Y|0;}
function ES(a){return a.Y>=a.b7?0:1;}
function Kn(){}
function Fo(){D2.call(this);}
function Lk(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new Br;i=new P;Q(i);G(i,C(334));j=W(i,g);G(j,C(335));U(h,N(W(j,f)));F(h);}if(Cw(a)<d){i=new I9;M(i);F(i);}if(d<0){i=new Br;h=new P;Q(h);G(h,C(336));h=W(h,d);G(h,C(337));U(i,N(h));F(i);}g=a.Y;k=0;while(k<d){l=c+1|0;m=g+1|0;e[c]=Lu(a,g);k=k+1|0;c=l;g=m;}a.Y=a.Y+d|0;return a;}}b=b.data;h=new Br;i=new P;Q(i);G(i,C(338));i=W(i,c);G(i,C(339));i=W(i,b.length);G(i,C(23));U(h,N(i));F(h);}
function GG(a,b){var c,d;if(b>=0&&b<=a.b7){a.Y=b;if(b<a.dU)a.dU=0;return a;}c=new X;d=new P;Q(d);G(d,C(340));d=W(d,b);G(d,C(339));d=W(d,a.b7);G(d,C(39));U(c,N(d));F(c);}
function FN(){var a=this;D2.call(a);a.hR=0;a.gI=null;a.kc=null;}
function Jt(a,b,c,d){var e,f,g,h,i,j,k;if(!d)return a;if(a.eH){e=new Ka;M(e);F(e);}if(Cw(a)<d){e=new Jq;M(e);F(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new Br;i=new P;Q(i);G(i,C(341));i=W(i,h);G(i,C(335));U(e,N(W(i,g)));F(e);}if(d<0){e=new Br;i=new P;Q(i);G(i,C(336));i=W(i,d);G(i,C(337));U(e,N(i));F(e);}h=a.Y+a.hR|0;j=0;while(j<d){b=a.gI.data;k=h+1|0;g=c+1|0;b[h]=f[c];j=j+1|0;h=k;c=g;}a.Y=a.Y+d|0;return a;}}b=b.data;i=new Br;e=new P;Q(e);G(e,C(338));e=W(e,c);G(e,C(339));e=W(e,b.length);G(e,
C(23));U(i,N(e));F(i);}
function N6(a,b){return Jt(a,b,0,b.data.length);}
function HE(a){a.Y=0;a.b7=a.hK;a.dU=(-1);return a;}
function EG(){B.call(this);this.jC=null;}
var ADx=null;var ADe=null;var ADf=null;function OJ(a){var b=new EG();MP(b,a);return b;}
function MP(a,b){a.jC=b;}
function KO(){ADx=OJ(C(342));ADe=OJ(C(343));ADf=OJ(C(344));}
function Kl(){B.call(this);}
var ABT=null;function QB(){QB=Bq(Kl);YJ();}
function YJ(){var $$je;ABT=$rt_createIntArray(AC4.em().data.length);a:{try{ABT.data[CG(ACZ)]=1;break a;}catch($$e){$$je=BM($$e);if($$je instanceof Ct){}else{throw $$e;}}}b:{try{ABT.data[CG(AC0)]=2;break b;}catch($$e){$$je=BM($$e);if($$je instanceof Ct){}else{throw $$e;}}}c:{try{ABT.data[CG(ACX)]=3;break c;}catch($$e){$$je=BM($$e);if($$je instanceof Ct){}else{throw $$e;}}}d:{try{ABT.data[CG(ACY)]=4;break d;}catch($$e){$$je=BM($$e);if($$je instanceof Ct){}else{throw $$e;}}}e:{try{ABT.data[CG(AC3)]=5;break e;}
catch($$e){$$je=BM($$e);if($$je instanceof Ct){}else{throw $$e;}}}f:{try{ABT.data[CG(AC2)]=6;break f;}catch($$e){$$je=BM($$e);if($$je instanceof Ct){}else{throw $$e;}}}g:{try{ABT.data[CG(AC1)]=7;break g;}catch($$e){$$je=BM($$e);if($$je instanceof Ct){}else{throw $$e;}}}h:{try{ABT.data[CG(ABK)]=8;break h;}catch($$e){$$je=BM($$e);if($$je instanceof Ct){}else{throw $$e;}}}}
function B7(){Bc.call(this);}
function FX(){Fo.call(this);}
function JH(){var a=this;FX.call(a);a.j2=0;a.hi=0;a.h6=null;}
function Lu(a,b){return a.h6.data[b+a.hi|0];}
function E_(){var a=this;B.call(a);a.iF=null;a.fH=null;a.iL=0.0;a.ge=0.0;a.e5=null;a.fX=null;a.cN=0;}
function Kr(a,b){var c;if(b!==null){a.e5=b;return a;}c=new X;U(c,C(345));F(c);}
function X4(a,b){return;}
function OL(a,b){var c;if(b!==null){a.fX=b;return a;}c=new X;U(c,C(345));F(c);}
function Xr(a,b){return;}
function LB(a,b,c,d){var e,f,g,h,$$je;a:{if(a.cN!=3){if(d)break a;if(a.cN!=2)break a;}b=new C7;M(b);F(b);}a.cN=!d?1:2;while(true){try{e=LA(a,b,c);}catch($$e){$$je=BM($$e);if($$je instanceof Bc){f=$$je;b=new HA;b.dY=1;b.el=1;b.dD=f;F(b);}else{throw $$e;}}if(K$(e)){if(!d)return e;g=Cw(b);if(g<=0)return e;e=FB(g);}else if(F_(e))break;h=!Jr(e)?a.e5:a.fX;b:{if(h!==ADe){if(h===ADx)break b;else return e;}if(Cw(c)<a.fH.data.length)return ADy;N6(c,a.fH);}GG(b,b.Y+NI(e)|0);}return e;}
function KX(a,b){var c;if(a.cN!=2&&a.cN!=4){b=new C7;M(b);F(b);}c=ADz;if(c===ADz)a.cN=3;return c;}
function Qb(a,b){return ADz;}
function F4(){var a=this;B.call(a);a.dt=0;a.gL=0;}
var ADz=null;var ADy=null;function LI(a,b){var c=new F4();MU(c,a,b);return c;}
function MU(a,b,c){a.dt=b;a.gL=c;}
function K$(a){return a.dt?0:1;}
function F_(a){return a.dt!=1?0:1;}
function Pj(a){return !Oq(a)&&!Jr(a)?0:1;}
function Oq(a){return a.dt!=2?0:1;}
function Jr(a){return a.dt!=3?0:1;}
function NI(a){var b;if(Pj(a))return a.gL;b=new Dj;M(b);F(b);}
function FB(b){return LI(2,b);}
function Nv(){ADz=LI(0,0);ADy=LI(1,0);}
function Dw(){B.call(this);}
var ADA=null;var ADB=null;var ADr=null;var ADs=null;function Di(){Di=Bq(Dw);Rw();}
function E6(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;Di();if(c.k<=b.k){d=c;c=b;b=d;}if(b.k>=63){e=(c.k&(-2))<<4;d=EK(c,e);f=EK(b,e);g=DB(c,Cs(d,e));h=DB(b,Cs(f,e));i=E6(d,f);j=E6(g,h);b=Cs(B$(B$(E6(DB(d,g),DB(h,f)),i),j),e);return B$(B$(Cs(i,e<<1),b),j);}e=c.k;k=b.k;l=e+k|0;m=c.j==b.j?1:(-1);if(l==2){n=Dq(c.f.data[0],b.f.data[0],0,0);e=n.lo;k=n.hi;if(!k)b=BU(m,e);else{b=new Bz;o=$rt_createIntArray(2);p=o.data;p[0]=e;p[1]=k;F6(b,m,2,o);}}else{q=c.f;r=b.f;s=$rt_createIntArray(l);if(e&&k){if(e==1){o=
q.data;s.data[k]=Jf(s,r,k,o[0]);}else if(k==1){o=r.data;s.data[e]=Jf(s,q,e,o[0]);}else if(q===r&&e==k)Jy(q,e,s);else{p=s.data;t=0;while(t<e){o=q.data;n=Long_ZERO;u=o[t];v=0;while(v<k){w=r.data[v];x=t+v|0;n=Dq(u,w,p[x],n.lo);p[x]=n.lo;n=Long_shru(n,32);v=v+1|0;}p[t+k|0]=n.lo;t=t+1|0;}}}b=BY(m,l,s);B6(b);}return b;}
function Jf(b,c,d,e){var f,g,h;Di();f=Long_ZERO;g=0;while(g<d){h=b.data;f=Dq(c.data[g],e,f.lo,0);h[g]=f.lo;f=Long_shru(f,32);g=g+1|0;}return f.lo;}
function Jy(b,c,d){var e,f,g,h,i,j,k,l,m,n;Di();e=0;while(e<c){f=Long_ZERO;g=e+1|0;h=g;while(h<c){i=b.data;j=d.data;k=i[e];l=i[h];m=e+h|0;f=Dq(k,l,j[m],f.lo);j[m]=f.lo;f=Long_shru(f,32);h=h+1|0;}d.data[e+c|0]=f.lo;e=g;}k=c<<1;l=0;n=0;while(n<k){i=d.data;e=i[n];i[n]=e<<1|l;l=e>>>31;n=n+1|0;}if(l)d.data[k]=l;f=Long_ZERO;k=0;l=0;while(k<c){i=b.data;j=d.data;f=Dq(i[k],i[k],j[l],f.lo);j[l]=f.lo;f=Long_shru(f,32);l=l+1|0;f=Long_add(f,Long_and(Long_fromInt(j[l]),new Long(4294967295, 0)));j[l]=f.lo;f=Long_shru(f,32);k
=k+1|0;l=l+1|0;}return d;}
function Gl(b){var c,d,e,f;Di();c=b.lo;if(Long_lt(b,Long_fromInt(ADr.data.length)))return ADr.data[c];if(Long_le(b,Long_fromInt(50)))return C9(ABS,c);if(Long_le(b,Long_fromInt(1000)))return Cs(C9(ADs.data[1],c),c);if(Long_gt(Long_add(Long_fromInt(1),Long_fromNumber(Long_toNumber(b)/2.4082399653118496)),Long_fromInt(1000000))){d=new B7;U(d,C(346));F(d);}if(Long_le(b,Long_fromInt(2147483647)))return Cs(C9(ADs.data[1],c),c);d=C9(ADs.data[1],2147483647);e=Long_sub(b,Long_fromInt(2147483647));c=Long_rem(b,Long_fromInt(2147483647)).lo;f
=d;b=e;while(Long_gt(b,Long_fromInt(2147483647))){f=Bt(f,d);b=Long_sub(b,Long_fromInt(2147483647));}d=Cs(Bt(f,C9(ADs.data[1],c)),2147483647);while(Long_gt(e,Long_fromInt(2147483647))){d=Cs(d,2147483647);e=Long_sub(e,Long_fromInt(2147483647));}return Cs(d,c);}
function Dq(b,c,d,e){Di();return Long_add(Long_add(Long_mul(Long_and(Long_fromInt(b),new Long(4294967295, 0)),Long_and(Long_fromInt(c),new Long(4294967295, 0))),Long_and(Long_fromInt(d),new Long(4294967295, 0))),Long_and(Long_fromInt(e),new Long(4294967295, 0)));}
function Rw(){var b,c,d,e,f;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;ADA=b;b=$rt_createIntArray(14);c=b.data;c[0]=1;c[1]=5;c[2]=25;c[3]=125;c[4]=625;c[5]=3125;c[6]=15625;c[7]=78125;c[8]=390625;c[9]=1953125;c[10]=9765625;c[11]=48828125;c[12]=244140625;c[13]=1220703125;ADB=b;ADr=E(Bz,32);ADs=E(Bz,32);d=Long_fromInt(1);e=0;while(e<=18){ADs.data[e]=BB(d);ADr.data[e]=BB(Long_shl(d,e));d=Long_mul(d,Long_fromInt(5));e
=e+1|0;}while(e<ADr.data.length){c=ADs.data;b=ADs.data;f=e-1|0;c[e]=Bt(b[f],ADs.data[1]);ADr.data[e]=Bt(ADr.data[f],ABS);e=e+1|0;}}
function Js(){var a=this;FN.call(a);a.im=0;a.eH=0;}
function WG(a){return a.eH;}
function Kh(){B_.call(this);}
var ADC=null;function Or(){ADC=D($rt_longcls());}
function Gf(){B.call(this);this.iR=null;}
var ADd=null;var ADD=null;function UW(a){var b=new Gf();Ku(b,a);return b;}
function Ku(a,b){a.iR=b;}
function Pn(){ADd=UW(C(347));ADD=UW(C(348));}
function MK(){B.call(this);}
function K9(b,c){var d,e,f,g;d=c>>5;c=c&31;e=(b.k+d|0)+(c?1:0)|0;f=$rt_createIntArray(e);G3(f,b.f,d,c);g=BY(b.j,e,f);B6(g);return g;}
function G3(b,c,d,e){var f,g,h,i,j,k;a:{if(!e)CN(c,0,b,d,b.data.length-d|0);else{f=b.data;g=32-e|0;h=f.length-1|0;f[h]=0;while(true){if(h<=d)break a;i=c.data;j=f[h];k=(h-d|0)-1|0;f[h]=j|i[k]>>>g;f[h-1|0]=i[k]<<e;h=h+(-1)|0;}}}j=0;while(j<d){b.data[j]=0;j=j+1|0;}}
function Lz(b,c){var d,e,f,g,h,i,j,k;d=c>>5;c=c&31;if(d>=b.k)return b.j>=0?ABQ:ADt;a:{e=b.k-d|0;f=e+1|0;g=$rt_createIntArray(f);OR(g,e,b.f,d,c);if(b.j>=0)f=e;else{h=0;while(true){i=BJ(h,d);if(i>=0)break;if(b.f.data[h])break;h=h+1|0;}if(i>=0){if(c<=0){f=e;break a;}if(!(b.f.data[h]<<(32-c|0))){f=e;break a;}}j=g.data;c=0;while(true){d=BJ(c,e);if(d>=0)break;if(j[c]!=(-1))break;j[c]=0;c=c+1|0;}if(d)f=e;j[c]=j[c]+1|0;}}k=BY(b.j,f,g);B6(k);return k;}
function OR(b,c,d,e,f){var g,h,i,j,k,l;g=1;h=0;while(h<e){g=g&(d.data[h]?0:1);h=h+1|0;}if(!f)CN(d,e,b,0,c);else{i=d.data;j=32-f|0;g=g&(i[h]<<j?0:1);k=0;l=c-1|0;while(k<l){d=b.data;c=k+e|0;d[k]=i[c]>>>f|i[c+1|0]<<j;k=k+1|0;}b.data[k]=i[k+e|0]>>>f;}return g;}
function KV(){B.call(this);}
function Kk(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;h=f.data;i=$rt_createIntArray(e+1|0);j=$rt_createIntArray(g+1|0);k=g-1|0;l=C_(h[k]);if(l){G3(j,f,0,l);G3(i,d,0,l);}else{CN(d,0,i,0,e);CN(f,0,j,0,g);}h=j.data;d=i.data;m=h[k];n=c-1|0;o=g-2|0;p=Long_and(Long_fromInt(m),new Long(4294967295, 0));while(n>=0){a:{if(d[e]==m)q=(-1);else{r=NM(Long_add(Long_shl(Long_and(Long_fromInt(d[e]),new Long(4294967295, 0)),32),Long_and(Long_fromInt(d[e-1|0]),new Long(4294967295, 0))),m);q=r.lo;s=r.hi;if(q){t=0;q=q+
1|0;while(true){q=q+(-1)|0;if(t)break;u=Long_mul(Long_and(Long_fromInt(q),new Long(4294967295, 0)),Long_and(Long_fromInt(h[o]),new Long(4294967295, 0)));r=Long_fromInt(s);v=Long_add(Long_shl(r,32),Long_and(Long_fromInt(d[e-2|0]),new Long(4294967295, 0)));w=Long_add(Long_and(r,new Long(4294967295, 0)),p);if(C_(w.hi)>=32)s=w.lo;else t=1;if(Long_le(Long_xor(u,new Long(0, 2147483648)),Long_xor(v,new Long(0, 2147483648))))break a;}}}}if(q){s=e-g|0;u=Long_ZERO;w=Long_ZERO;c=0;while(c<g){r=Dq(h[c],q,u.lo,0);x=s+c|
0;v=Long_add(Long_sub(Long_and(Long_fromInt(d[x]),new Long(4294967295, 0)),Long_and(r,new Long(4294967295, 0))),w);d[x]=v.lo;w=Long_shr(v,32);u=Long_shru(r,32);c=c+1|0;}c=s+g|0;v=Long_add(Long_sub(Long_and(Long_fromInt(d[c]),new Long(4294967295, 0)),u),w);d[c]=v.lo;if(v.hi){q=q+(-1)|0;u=Long_ZERO;k=0;while(k<g){c=s+k|0;v=Long_add(u,Long_add(Long_and(Long_fromInt(d[c]),new Long(4294967295, 0)),Long_and(Long_fromInt(h[k]),new Long(4294967295, 0))));d[c]=v.lo;u=Long_shru(v,32);k=k+1|0;}}}if(b!==null)b.data[n]=
q;e=e+(-1)|0;n=n+(-1)|0;}if(l){OR(j,g,i,0,l);return j;}CN(i,0,j,0,g);return i;}
function MN(b,c,d,e){var f,g,h,i,j,k,l,m,n;f=Long_ZERO;g=Long_and(Long_fromInt(e),new Long(4294967295, 0));h=d-1|0;i=Long_fromInt(e>>>1);e=e&1;j=Long_shl(g,1);while(h>=0){k=c.data;l=Long_or(Long_shl(f,32),Long_and(Long_fromInt(k[h]),new Long(4294967295, 0)));if(Long_ge(l,Long_ZERO)){m=Long_div(l,g);f=Long_rem(l,g);}else{n=Long_shru(l,1);m=Long_div(n,i);f=Long_add(Long_shl(Long_rem(n,i),1),Long_and(l,Long_fromInt(1)));if(e){if(Long_le(m,f))f=Long_sub(f,m);else if(Long_gt(Long_sub(m,f),g)){f=Long_add(f,Long_sub(j,
m));m=Long_sub(m,Long_fromInt(2));}else{f=Long_add(f,Long_sub(g,m));m=Long_sub(m,Long_fromInt(1));}}}b.data[h]=Long_and(m,new Long(4294967295, 0)).lo;h=h+(-1)|0;}return f.lo;}
function NM(b,c){var d,e,f,g,h;d=Long_and(Long_fromInt(c),new Long(4294967295, 0));if(Long_ge(b,Long_ZERO)){e=Long_div(b,d);f=Long_rem(b,d);}else{g=Long_shru(b,1);h=Long_fromInt(c>>>1);e=Long_div(g,h);f=Long_add(Long_shl(Long_rem(g,h),1),Long_and(b,Long_fromInt(1)));if(c&1){if(Long_le(e,f))f=Long_sub(f,e);else if(Long_le(Long_sub(e,f),d)){f=Long_add(f,Long_sub(d,e));e=Long_sub(e,Long_fromInt(1));}else{f=Long_add(f,Long_sub(Long_shl(d,1),e));e=Long_sub(e,Long_fromInt(2));}}}return Long_or(Long_shl(f,32),Long_and(e,
new Long(4294967295, 0)));}
function Np(){B.call(this);}
function DY(b,c,d){var e,f;e=d-1|0;while(e>=0){f=c.data;if(b.data[e]!=f[e])break;e=e+(-1)|0;}if(e<0)d=0;else{c=c.data;d=Long_ge(Long_and(Long_fromInt(b.data[e]),new Long(4294967295, 0)),Long_and(Long_fromInt(c[e]),new Long(4294967295, 0)))?1:(-1);}return d;}
function XA(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=b.j;e=c.j;if(!d)return c;if(!e)return b;f=b.k;g=c.k;if((f+g|0)==2){h=Long_and(Long_fromInt(b.f.data[0]),new Long(4294967295, 0));i=Long_and(Long_fromInt(c.f.data[0]),new Long(4294967295, 0));if(d!=e)return BB(d>=0?Long_sub(h,i):Long_sub(i,h));j=Long_add(h,i);k=j.lo;l=j.hi;if(!l)b=BU(d,k);else{b=new Bz;m=$rt_createIntArray(2);n=m.data;n[0]=k;n[1]=l;F6(b,d,2,m);}return b;}if(d==e)m=f<g?F8(c.f,g,b.f,f):F8(b.f,f,c.f,g);else{o=BJ(f,g);o=!o?DY(b.f,c.f,f):o<=0?(-1):
1;if(!o)return ABQ;if(o!=1){m=F1(c.f,g,b.f,f);d=e;}else m=F1(b.f,f,c.f,g);}n=m.data;p=BY(d,n.length,m);B6(p);return p;}
function Tp(b,c,d,e,f){var g,h,i,j;g=b.data;b=e.data;c=c.data;h=Long_add(Long_and(Long_fromInt(c[0]),new Long(4294967295, 0)),Long_and(Long_fromInt(b[0]),new Long(4294967295, 0)));g[0]=h.lo;i=Long_shr(h,32);if(d<f){j=1;while(j<d){h=Long_add(i,Long_add(Long_and(Long_fromInt(c[j]),new Long(4294967295, 0)),Long_and(Long_fromInt(b[j]),new Long(4294967295, 0))));g[j]=h.lo;i=Long_shr(h,32);j=j+1|0;}while(j<f){h=Long_add(i,Long_and(Long_fromInt(b[j]),new Long(4294967295, 0)));g[j]=h.lo;i=Long_shr(h,32);j=j+1|0;}}else
{j=1;while(j<f){h=Long_add(i,Long_add(Long_and(Long_fromInt(c[j]),new Long(4294967295, 0)),Long_and(Long_fromInt(b[j]),new Long(4294967295, 0))));g[j]=h.lo;i=Long_shr(h,32);j=j+1|0;}while(j<d){h=Long_add(i,Long_and(Long_fromInt(c[j]),new Long(4294967295, 0)));g[j]=h.lo;i=Long_shr(h,32);j=j+1|0;}}if(Long_ne(i,Long_ZERO))g[j]=i.lo;}
function F8(b,c,d,e){var f;f=$rt_createIntArray(c+1|0);Tp(f,b,c,d,e);return f;}
function F1(b,c,d,e){var f,g,h,i,j,k,l;f=$rt_createIntArray(c);g=f.data;h=Long_ZERO;i=0;while(i<e){j=b.data;k=d.data;l=Long_add(h,Long_sub(Long_and(Long_fromInt(j[i]),new Long(4294967295, 0)),Long_and(Long_fromInt(k[i]),new Long(4294967295, 0))));g[i]=l.lo;h=Long_shr(l,32);i=i+1|0;}while(i<c){l=Long_add(h,Long_and(Long_fromInt(b.data[i]),new Long(4294967295, 0)));g[i]=l.lo;h=Long_shr(l,32);i=i+1|0;}return f;}
function GC(){E_.call(this);}
function LA(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(Bm(Cw(b),512));e=d.data;f=0;g=0;h=$rt_createByteArray(Bm(Cw(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&ES(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=Bm(Cw(b)+k|0,e.length);Lk(b,d,k,g-k|0);f=0;}if(!ES(c)){l=!ES(b)&&f>=g?ADz:ADy;break a;}k=Bm(Cw(c),i.length);m=new Ht;m.gn=b;m.hH=c;l=Pm(a,d,f,g,h,0,k,m);f=m.fu;if(l===null&&0==m.ei)l=ADz;Jt(c,h,0,m.ei);if(l!==null)break;}}GG(b,b.Y-(g-f|0)|0);return l;}
function IL(){GC.call(this);}
function Pm(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(F3(h,2))break a;i=ADy;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!JJ(l)){if((f+3|0)>g){j=j+(-1)|0;if(F3(h,3))break a;i=ADy;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!BW(l)){i=FB(1);break a;}if
(j>=d){if(Nt(h))break a;i=ADz;break a;}c=j+1|0;j=k[j];if(!Cg(j)){j=c+(-2)|0;i=FB(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(F3(h,4))break a;i=ADy;break a;}k=e.data;n=CK(l,j);j=f+1|0;k[f]=(240|n>>18)<<24>>24;f=j+1|0;k[j]=(128|n>>12&63)<<24>>24;j=f+1|0;k[f]=(128|n>>6&63)<<24>>24;m=j+1|0;k[j]=(128|n&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.fu=j;h.ei=f;return i;}
function HO(){BZ.call(this);}
function LH(){B.call(this);}
function FK(){B.call(this);}
var ADE=null;var ADF=null;function L1(b){var c,d,e,f,g,h,i;a:{if(b.k>=2){if(b.k!=2)break a;if(b.f.data[1]<=0)break a;}return Long_toNumber(Fu(b));}if(b.k>32)return b.j<=0?(-Infinity):Infinity;c=Ke(IH(b));d=Long_fromInt(c-1|0);e=c-54|0;f=Long_and(Fu(EK(IH(b),e)),new Long(4294967295, 2097151));if(Long_eq(d,Long_fromInt(1023))){if(Long_eq(f,new Long(4294967295, 2097151)))return b.j<=0?(-Infinity):Infinity;if(Long_eq(f,new Long(4294967294, 2097151)))return b.j<=0?(-1.7976931348623157E308):1.7976931348623157E308;}b:
{if(!(Long_eq(Long_and(f,Long_fromInt(1)),Long_fromInt(1))&&Long_eq(Long_and(f,Long_fromInt(2)),Long_fromInt(2)))){g=b.f;c=e>>5;e=e&31;h=0;while(true){i=BJ(h,c);if(i>=0)break;if(g.data[h])break;h=h+1|0;}if(!(!i&&!(g.data[h]<<(32-e|0))?0:1))break b;}f=Long_add(f,Long_fromInt(2));}f=Long_shr(f,1);return $rt_longBitsToDouble(Long_or(Long_or(b.j>=0?Long_ZERO:new Long(0, 2147483648),Long_and(Long_shl(Long_add(Long_fromInt(1023),d),52),new Long(0, 2146435072))),f));}
function Ol(){var b,c;b=$rt_createIntArray(37);c=b.data;c[0]=(-1);c[1]=(-1);c[2]=31;c[3]=19;c[4]=15;c[5]=13;c[6]=11;c[7]=11;c[8]=10;c[9]=9;c[10]=9;c[11]=8;c[12]=8;c[13]=8;c[14]=8;c[15]=7;c[16]=7;c[17]=7;c[18]=7;c[19]=7;c[20]=7;c[21]=7;c[22]=6;c[23]=6;c[24]=6;c[25]=6;c[26]=6;c[27]=6;c[28]=6;c[29]=6;c[30]=6;c[31]=6;c[32]=6;c[33]=6;c[34]=6;c[35]=6;c[36]=5;ADE=b;b=$rt_createIntArray(35);c=b.data;c[0]=(-2147483648);c[1]=1162261467;c[2]=1073741824;c[3]=1220703125;c[4]=362797056;c[5]=1977326743;c[6]=1073741824;c[7]
=387420489;c[8]=1000000000;c[9]=214358881;c[10]=429981696;c[11]=815730721;c[12]=1475789056;c[13]=170859375;c[14]=268435456;c[15]=410338673;c[16]=612220032;c[17]=893871739;c[18]=1280000000;c[19]=1801088541;c[20]=113379904;c[21]=148035889;c[22]=191102976;c[23]=244140625;c[24]=308915776;c[25]=387420489;c[26]=481890304;c[27]=594823321;c[28]=729000000;c[29]=887503681;c[30]=1073741824;c[31]=1291467969;c[32]=1544804416;c[33]=1838265625;c[34]=60466176;ADF=b;}
function HA(){C1.call(this);}
function Ht(){var a=this;B.call(a);a.gn=null;a.hH=null;a.fu=0;a.ei=0;}
function Nt(a){return ES(a.gn);}
function F3(a,b){return Cw(a.hH)<b?0:1;}
function VZ(a,b){a.fu=b;}
function Y6(a,b){a.ei=b;}
function Ka(){Dj.call(this);}
function Jq(){Bc.call(this);}
function I9(){Bc.call(this);}
$rt_packages([-1,"java",0,"util",1,"regex",0,"nio",3,"charset",0,"lang"]);
$rt_metadata([B,"Object",5,0,[],0,3,0,["bA",function(){return SU(this);}],Ov,0,B,[],0,3,0,0,G8,0,B,[],3,3,0,0,Jc,0,B,[G8],0,3,0,0,MO,0,B,[],4,0,0,0,LX,0,B,[],4,3,0,0,BF,0,B,[],3,3,0,0,B4,0,B,[],3,3,0,0,E1,0,B,[],3,3,0,0,Ck,0,B,[BF,B4,E1],0,3,0,["eQ",function(b){return Be(this,b);},"fk",function(){return Hr(this);}],Ef,0,B,[],0,3,0,["ev",function(){return Uj(this);}],C1,0,Ef,[],0,3,0,0,Ei,0,C1,[],0,3,0,0,OD,0,Ei,[],0,3,0,0,D7,0,B,[BF,E1],0,0,0,["cR",function(b){FC(this,b);},"bA",function(){return N(this);}],EX,
0,B,[],3,3,0,0,P,0,D7,[EX],0,3,0,["eX",function(b,c,d,e){return Yp(this,b,c,d,e);},"fI",function(b,c,d){return UA(this,b,c,d);},"bA",function(){return FJ(this);},"cR",function(b){YE(this,b);},"fD",function(b,c){return PS(this,b,c);},"fr",function(b,c){return Ps(this,b,c);}],B_,0,B,[BF],1,3,0,0,CY,0,B_,[B4],0,3,0,["fk",function(){return P9(this);},"eQ",function(b){return X9(this,b);}],D1,0,Ei,[],0,3,0,0,Ct,0,D1,[],0,3,0,0,Od,0,D1,[],0,3,0,0,BZ,0,Ef,[],0,3,0,0,Bc,0,BZ,[],0,3,0,0,Fb,0,B,[],3,3,0,0,G5,0,B,[Fb],
3,3,0,0,Id,0,B,[G5],0,3,0,["n_",function(b,c,d){return WX(this,b,c,d);}],M8,0,B,[],4,3,0,0,Ec,0,B,[],3,3,0,0,Hw,0,B,[Ec],0,3,0,0,CD,0,B,[B4],0,3,0,0,Br,"IndexOutOfBoundsException",5,Bc,[],0,3,0,0,Ed,"StringIndexOutOfBoundsException",5,Br,[],0,3,0,0,D$,0,B,[],0,3,0,0,Pv,0,B,[],0,3,0,0,JC,0,B,[BF],4,3,0,0,GU,0,B,[],0,3,0,0,B1,0,B,[],3,3,0,0,Fm,0,B,[BF,B1],1,3,0,0,Fr,0,Fm,[],1,3,0,0,C3,0,Fr,[],0,3,0,0,I4,0,B,[],3,3,0,0,DJ,0,B,[I4],3,3,0,0,Dx,0,B,[DJ],1,3,0,0,GY,0,B,[DJ],3,3,0,0,CU,0,Dx,[GY],1,3,0,["bJ",function(b)
{return DU(this,b);},"di",function(){return DX(this);},"gS",function(b){return UB(this,b);}],HI,0,B,[],3,3,0,0,LD,0,CU,[B1,BF,HI],0,3,0,["c0",function(b){return BL(this,b);},"bt",function(){return R6(this);},"eR",function(b,c){return K5(this,b,c);},"bJ",function(b){return Bk(this,b);},"f3",function(b,c){O3(this,b,c);}],V,0,B,[],0,3,0,0,Bi,0,B,[],1,3,0,0]);
$rt_metadata([CB,"NullPointerException",5,Bc,[],0,3,0,0,Y,0,B,[],1,0,0,["bk",function(b,c,d,e){return EP(this,b,c,d,e);},"dr",function(){return SJ(this);},"w",function(b){Wv(this,b);},"R",function(b){return Wu(this,b);},"cl",function(){return XK(this);},"b1",function(){Fg(this);}],X,"IllegalArgumentException",5,Bc,[],0,3,0,0,Hy,0,B,[B1],0,3,0,0,BG,0,B,[],0,3,0,0,Ly,0,B,[],0,3,0,0,Gb,0,CU,[],1,3,0,["c0",function(b){return UJ(this,b);},"eR",function(b,c){return DT(this,b,c);},"f3",function(b,c){Ih(this,b,c);},
"di",function(){return S6(this);}],GN,0,B,[DJ],3,3,0,0,JY,0,B,[GN],3,3,0,0,L5,0,Gb,[JY],0,3,0,["bt",function(){return TI(this);},"gS",function(b){return EB(this,b);}],DZ,0,Bi,[],0,3,0,["cV",function(){return Y3(this);},"dW",function(b,c,d){VL(this,b,c,d);}],Dn,0,B,[],0,3,0,0,EF,0,B_,[B4],0,3,0,0,Fl,0,B,[],3,3,0,0,CV,0,B,[Fl],1,3,0,0,O9,0,CV,[B1,BF],0,3,0,["hX",function(){return TO(this);}],IV,0,Bi,[],0,3,0,["cV",function(){return WN(this);},"dW",function(b,c,d){PW(this,b,c,d);}],F$,0,B,[],3,3,0,0,GH,0,B,[F$],
4,3,0,0,BQ,0,Y,[],0,0,0,["a",function(b,c,d){return RO(this,b,c,d);},"s",function(b){return Ss(this,b);}],DE,0,B,[],0,0,0,0,Ot,"PatternSyntaxException",2,X,[],0,3,0,["ev",function(){return XE(this);}],Bn,0,B,[B1,BF],4,3,0,0,BS,0,B,[],3,0,0,0,KF,0,B,[BS],0,0,0,["c1",function(b,c){Qj(this,b,c);}],JV,0,B,[Fl],3,3,0,0,G7,0,B,[JV],3,3,0,0,MI,0,CV,[B1,BF,G7],0,3,0,0,Hg,0,B,[],0,3,0,0,ON,0,B,[],4,3,0,0,Cx,0,B,[],3,3,0,0,Iv,0,B,[Cx],0,3,0,["cf",function(b,c){return Q3(this,b,c);},"cd",function(b,c,d){return SM(this,
b,c,d);}],K1,0,B,[Cx],0,3,0,["cf",function(b,c){return Yf(this,b,c);},"cd",function(b,c,d){return QW(this,b,c,d);}],LE,0,B,[Cx],0,3,0,["cf",function(b,c){return YW(this,b,c);},"cd",function(b,c,d){return Yy(this,b,c,d);}],Pk,0,B,[Cx],0,3,0,["cf",function(b,c){return Y0(this,b,c);},"cd",function(b,c,d){return V4(this,b,c,d);}],K8,0,B,[Cx],0,3,0,["cf",function(b,c){return T3(this,b,c);},"cd",function(b,c,d){return WH(this,b,c,d);}],Op,0,B,[Cx],0,3,0,["cf",function(b,c){return S2(this,b,c);},"cd",function(b,c,
d){return Wt(this,b,c,d);}],J_,0,B,[Cx],0,3,0,["cf",function(b,c){return Qv(this,b,c);},"cd",function(b,c,d){return U9(this,b,c,d);}],S,0,B,[],3,3,0,0,NY,0,B,[S],0,3,0,["l",function(b){return RT(this,b);}],NZ,0,B,[S],0,3,0,["l",function(b){return PQ(this,b);}],N0,0,B,[S],0,3,0,["l",function(b){return St(this,b);}],NQ,0,B,[S],0,3,0,["l",function(b){return Vv(this,b);}],NR,0,B,[S],0,3,0,["l",function(b){return SY(this,b);}],NS,0,B,[S],0,3,0,["l",function(b){return P6(this,b);}],NT,0,B,[S],0,3,0,["l",function(b)
{return T4(this,b);}],NU,0,B,[S],0,3,0,["l",function(b){return Ut(this,b);}],NV,0,B,[S],0,3,0,["l",function(b){return T0(this,b);}],NW,0,B,[S],0,3,0,["l",function(b){return Qm(this,b);}],MB,0,B,[S],0,3,0,["l",function(b){return R9(this,b);}]]);
$rt_metadata([MA,0,B,[S],0,3,0,["l",function(b){return Uu(this,b);}],Oe,0,B,[Cx],0,3,0,["cf",function(b,c){return U2(this,b,c);},"cd",function(b,c,d){return VS(this,b,c,d);}],Mx,0,B,[S],0,3,0,["l",function(b){return Sg(this,b);}],Mw,0,B,[S],0,3,0,["l",function(b){return P1(this,b);}],Mz,0,B,[S],0,3,0,["l",function(b){return S0(this,b);}],My,0,B,[S],0,3,0,["l",function(b){return Vg(this,b);}],MD,0,B,[S],0,3,0,["l",function(b){return Sr(this,b);}],MC,0,B,[S],0,3,0,["l",function(b){return RE(this,b);}],MF,0,B,
[S],0,3,0,["l",function(b){return Wn(this,b);}],ME,0,B,[S],0,3,0,["l",function(b){return Wr(this,b);}],Ma,0,B,[S],0,3,0,["l",function(b){return SA(this,b);}],Mc,0,B,[S],0,3,0,["l",function(b){return VE(this,b);}],Mb,0,B,[S],0,3,0,["l",function(b){return SH(this,b);}],L9,0,B,[S],0,3,0,["l",function(b){return P$(this,b);}],L8,0,B,[S],0,3,0,["l",function(b){return RM(this,b);}],L_,0,B,[S],0,3,0,["l",function(b){return WK(this,b);}],L$,0,B,[S],0,3,0,["l",function(b){return Xb(this,b);}],Me,0,B,[S],0,3,0,["l",function(b)
{return PR(this,b);}],Md,0,B,[S],0,3,0,["l",function(b){return XS(this,b);}],Mh,0,B,[S],0,3,0,["l",function(b){return UO(this,b);}],Mn,0,B,[S],0,3,0,["l",function(b){return Q0(this,b);}],Mm,0,B,[S],0,3,0,["l",function(b){return WZ(this,b);}],Mp,0,B,[S],0,3,0,["l",function(b){return VM(this,b);}],Mo,0,B,[S],0,3,0,["l",function(b){return QR(this,b);}],Mj,0,B,[S],0,3,0,["l",function(b){return QT(this,b);}],Mi,0,B,[S],0,3,0,["l",function(b){return Yc(this,b);}],Ml,0,B,[S],0,3,0,["l",function(b){return Yv(this,b);
}],Mk,0,B,[S],0,3,0,["l",function(b){return Yh(this,b);}],Mu,0,B,[S],0,3,0,["l",function(b){return YV(this,b);}],Mt,0,B,[S],0,3,0,["l",function(b){return Yn(this,b);}],Nc,0,B,[S],0,3,0,["l",function(b){return P5(this,b);}],M_,0,B,[S],0,3,0,["l",function(b){return XY(this,b);}],M$,0,B,[S],0,3,0,["l",function(b){return Ve(this,b);}],Na,0,B,[S],0,3,0,["l",function(b){return Xj(this,b);}],Im,0,B,[DJ],3,3,0,0,CX,0,Dx,[Im],1,3,0,0,Nz,0,CX,[B1,BF],0,3,0,0,Dj,"UnsupportedOperationException",5,Bc,[],0,3,0,0,IO,0,CV,
[],4,0,0,["hX",function(){return Wh(this);}],HJ,0,B,[],4,3,0,0,J3,0,BQ,[],0,0,0,["a",function(b,c,d){return QO(this,b,c,d);},"s",function(b){return Ur(this,b);}],J0,0,BQ,[],0,0,0,["a",function(b,c,d){return TD(this,b,c,d);}],IW,0,BQ,[],0,0,0,["a",function(b,c,d){return SG(this,b,c,d);}],GX,0,BQ,[],0,0,0,["a",function(b,c,d){return Q2(this,b,c,d);},"s",function(b){return Sh(this,b);}],C$,0,BQ,[],0,0,0,["a",function(b,c,d){return WV(this,b,c,d);}],Bo,0,Y,[],1,0,0,["a",function(b,c,d){return Yw(this,b,c,d);},"bd",
function(){return VB(this);},"s",function(b){return XT(this,b);}],NH,0,Bo,[],0,0,0,["M",function(b,c){return UU(this,b,c);},"bk",function(b,c,d,e){return Tt(this,b,c,d,e);},"s",function(b){return QX(this,b);}],Bg,0,Y,[],0,0,0,["a",function(b,c,d){return Wx(this,b,c,d);},"w",function(b){R_(this,b);},"R",function(b){return Y2(this,b);},"s",function(b){return Tg(this,b);},"b1",function(){Tl(this);}],E8,0,Bg,[],0,0,0,["a",function(b,c,d){return RW(this,b,c,d);},"s",function(b){return TT(this,b);}],Cq,0,E8,[],0,
0,0,["a",function(b,c,d){return Um(this,b,c,d);},"w",function(b){To(this,b);}]]);
$rt_metadata([GR,0,Cq,[],0,0,0,["a",function(b,c,d){return R4(this,b,c,d);},"s",function(b){return WA(this,b);}],I1,0,Cq,[],0,0,0,["a",function(b,c,d){return Sl(this,b,c,d);},"s",function(b){return VN(this,b);}],JF,0,Cq,[],0,0,0,["a",function(b,c,d){return Tf(this,b,c,d);},"s",function(b){return YY(this,b);}],Hm,0,Cq,[],0,0,0,["a",function(b,c,d){return Qd(this,b,c,d);},"s",function(b){return T9(this,b);}],Ee,0,Bg,[],0,0,0,["a",function(b,c,d){return QD(this,b,c,d);},"bk",function(b,c,d,e){return Uv(this,b,
c,d,e);},"R",function(b){return YT(this,b);},"cl",function(){return Sd(this);},"b1",function(){XM(this);}],Gv,0,B,[B4,BF],1,3,0,0,Cc,0,Gv,[],12,3,0,0,Fv,0,B,[BF],4,3,0,0,M6,0,B,[],4,0,0,0,LW,0,B,[],4,3,0,0,Fa,0,Bi,[],0,3,0,["cV",function(){return V5(this);},"dW",function(b,c,d){X8(this,b,c,d);}],JR,0,B,[S],0,3,0,["l",function(b){return UD(this,b);}],JS,0,B,[S],0,3,0,["l",function(b){return R1(this,b);}],K3,0,B,[],0,0,0,0,IZ,0,B,[Ec],0,3,0,0,IY,0,B,[Ec],0,3,0,0,Lf,0,B,[],4,3,0,0,ET,"ArrayStoreException",5,Bc,
[],0,3,0,0,DL,0,B,[],1,0,0,0,K,0,DL,[],1,0,0,["bE",function(){return Sp(this);},"cb",function(){return Rf(this);},"dO",function(){return Vr(this);},"dh",function(){return XH(this);}],Mv,"CharClass",2,K,[],0,0,0,["g",function(b){return B0(this,b);},"bE",function(){return BT(this);},"cb",function(){return Vf(this);},"dO",function(){return Wd(this);},"bA",function(){return Q5(this);},"dh",function(){return VF(this);}],Fp,"MissingResourceException",1,Bc,[],0,3,0,0,Cu,0,Y,[],1,0,0,["R",function(b){return Ux(this,
b);},"s",function(b){return WL(this,b);},"b1",function(){Qr(this);}],B2,0,Cu,[],0,0,0,["a",function(b,c,d){return Qf(this,b,c,d);}],C8,0,B2,[],0,0,0,["a",function(b,c,d){return RS(this,b,c,d);}],BR,0,Cu,[],0,0,0,["a",function(b,c,d){return QC(this,b,c,d);}],CQ,0,B2,[],0,0,0,["a",function(b,c,d){return P2(this,b,c,d);},"w",function(b){Y5(this,b);}],Jb,0,B2,[],0,0,0,["a",function(b,c,d){return Yl(this,b,c,d);}],DG,0,B,[],4,3,0,0,Gn,0,B,[],4,3,0,0,Km,0,B,[Ec],0,0,0,0,BE,"NumberFormatException",5,X,[],0,3,0,0,IP,
0,CX,[],4,0,0,["di",function(){return YK(this);}],IQ,0,CU,[],4,0,0,0,G4,"Quantifier",2,DL,[B1],0,0,0,["bA",function(){return Rb(this);}],HK,0,Y,[],0,0,0,["a",function(b,c,d){return Yk(this,b,c,d);},"s",function(b){return R$(this,b);}],Ju,0,B,[B1,BF],0,3,0,0,GW,0,Bg,[],0,0,0,0,I7,0,Bg,[],0,0,0,["a",function(b,c,d){return RI(this,b,c,d);},"w",function(b){RU(this,b);},"s",function(b){return SP(this,b);},"R",function(b){return So(this,b);}],Co,0,Bg,[],0,0,0,["a",function(b,c,d){return U6(this,b,c,d);},"g",function(b)
{return VV(this,b);},"R",function(b){return Rx(this,b);},"w",function(b){Vi(this,b);},"s",function(b){return Vk(this,b);}],Fk,0,Co,[],0,0,0,["g",function(b){return XU(this,b);}],LZ,0,Bo,[],0,0,0,["M",function(b,c){return Ym(this,b,c);}],CI,0,Bo,[],0,0,0,["M",function(b,c){return GF(this,b,c);},"R",function(b){return Sb(this,b);}],H9,0,Bg,[],0,0,0,["w",function(b){PZ(this,b);},"a",function(b,c,d){return P0(this,b,c,d);},"R",function(b){return SB(this,b);},"s",function(b){return Wk(this,b);}],CF,0,Bo,[],0,0,0,
["bd",function(){return X7(this);},"M",function(b,c){return WP(this,b,c);},"bk",function(b,c,d,e){return Yb(this,b,c,d,e);},"R",function(b){return V$(this,b);}],OK,0,Bo,[],0,0,0,["M",function(b,c){return PL(this,b,c);}],KP,0,Bo,[],0,0,0,["M",function(b,c){return Qs(this,b,c);}],Dh,0,Bg,[],0,0,0,["w",function(b){XL(this,b);},"a",function(b,c,d){return RV(this,b,c,d);},"R",function(b){return Yo(this,b);},"s",function(b){return Ts(this,b);}],JP,0,Dh,[],0,0,0,0,Hx,0,Dh,[],0,0,0,0]);
$rt_metadata([Kp,0,BR,[],0,0,0,["a",function(b,c,d){return TL(this,b,c,d);}],IS,0,BR,[],0,0,0,["a",function(b,c,d){return QK(this,b,c,d);}],Ds,0,BR,[],0,0,0,["a",function(b,c,d){return U$(this,b,c,d);},"w",function(b){W3(this,b);}],Iz,0,Ds,[],0,0,0,["a",function(b,c,d){return X$(this,b,c,d);},"w",function(b){Rc(this,b);}],Dg,0,BR,[],0,0,0,["a",function(b,c,d){return YR(this,b,c,d);}],G9,0,Dg,[],0,0,0,["a",function(b,c,d){return Xo(this,b,c,d);}],JT,0,BR,[],0,0,0,["a",function(b,c,d){return X6(this,b,c,d);}],Jh,
0,Ds,[],0,0,0,["a",function(b,c,d){return SQ(this,b,c,d);}],Ik,0,Dg,[],0,0,0,["a",function(b,c,d){return Q8(this,b,c,d);}],JU,0,Cu,[],0,0,0,["a",function(b,c,d){return YD(this,b,c,d);}],HP,0,Cu,[],0,0,0,["a",function(b,c,d){return Se(this,b,c,d);}],C5,0,B,[],1,0,0,0,Kq,0,B2,[],0,0,0,["a",function(b,c,d){return Q_(this,b,c,d);}],I8,0,CQ,[],0,0,0,["a",function(b,c,d){return QH(this,b,c,d);}],Ip,0,C8,[],0,0,0,["a",function(b,c,d){return Uy(this,b,c,d);}],Je,0,B2,[],0,0,0,["a",function(b,c,d){return R7(this,b,c,
d);}],HD,0,CQ,[],0,0,0,["a",function(b,c,d){return Ro(this,b,c,d);}],JG,0,C8,[],0,0,0,["a",function(b,c,d){return UX(this,b,c,d);}],OO,0,Y,[],4,0,0,["a",function(b,c,d){return YX(this,b,c,d);},"s",function(b){return XD(this,b);}],Nn,0,Y,[],0,0,0,["a",function(b,c,d){return Sk(this,b,c,d);},"s",function(b){return Sz(this,b);}],LL,0,Y,[],0,0,0,["a",function(b,c,d){return XW(this,b,c,d);},"s",function(b){return YN(this,b);}],JA,0,Y,[],4,0,0,["a",function(b,c,d){return S$(this,b,c,d);},"s",function(b){return Tx(this,
b);}],Om,0,Y,[],0,0,0,["a",function(b,c,d){return RQ(this,b,c,d);},"s",function(b){return PK(this,b);}],Li,0,Y,[],0,0,0,["a",function(b,c,d){return Ti(this,b,c,d);},"s",function(b){return Wg(this,b);}],Og,0,Bg,[],0,0,0,["a",function(b,c,d){return Ya(this,b,c,d);},"w",function(b){SE(this,b);},"dr",function(){return Rn(this);},"s",function(b){return SC(this,b);}],Mg,0,Bg,[],4,0,0,["a",function(b,c,d){return RH(this,b,c,d);},"w",function(b){Ul(this,b);},"dr",function(){return PE(this);},"s",function(b){return Yu(this,
b);}],N5,0,Y,[],4,0,0,["a",function(b,c,d){return Ys(this,b,c,d);},"s",function(b){return V9(this,b);}],KY,0,Y,[],0,0,0,["a",function(b,c,d){return RN(this,b,c,d);},"s",function(b){return VO(this,b);}],KG,0,Y,[],0,0,0,["a",function(b,c,d){return Xu(this,b,c,d);},"s",function(b){return TA(this,b);}],D5,0,Bg,[],0,0,0,["a",function(b,c,d){return Rd(this,b,c,d);},"w",function(b){Tk(this,b);},"s",function(b){return TU(this,b);}],N_,0,D5,[],0,0,0,["a",function(b,c,d){return TK(this,b,c,d);},"bk",function(b,c,d,e)
{return QS(this,b,c,d,e);},"R",function(b){return Qy(this,b);}],OE,0,D5,[],0,0,0,["a",function(b,c,d){return PP(this,b,c,d);}],FF,0,D7,[EX],0,3,0,["eX",function(b,c,d,e){return VH(this,b,c,d,e);},"fI",function(b,c,d){return Sq(this,b,c,d);},"cR",function(b){SZ(this,b);},"fD",function(b,c){return Vz(this,b,c);},"fr",function(b,c){return Qo(this,b,c);}],O8,0,Bo,[],0,0,0,["M",function(b,c){return Ud(this,b,c);},"bk",function(b,c,d,e){return We(this,b,c,d,e);},"R",function(b){return W2(this,b);}],KC,0,Bo,[],0,0,
0,["M",function(b,c){return PV(this,b,c);}],Hd,0,Bo,[],0,0,0,["M",function(b,c){return UC(this,b,c);}],D4,0,B,[],4,0,0,0,L,0,B,[],1,0,0,0,GM,0,Bo,[],0,0,0,["M",function(b,c){return UI(this,b,c);}],Fh,0,Bg,[],0,0,0,["w",function(b){R3(this,b);},"a",function(b,c,d){return Ty(this,b,c,d);},"bk",function(b,c,d,e){return Us(this,b,c,d,e);},"R",function(b){return QN(this,b);},"s",function(b){return VP(this,b);}],Fy,0,Bg,[],0,0,0,["w",function(b){SX(this,b);},"a",function(b,c,d){return Qe(this,b,c,d);},"bk",function(b,
c,d,e){return Uz(this,b,c,d,e);},"R",function(b){return Uf(this,b);},"s",function(b){return SN(this,b);}],Cv,0,Bo,[],0,0,0,["M",function(b,c){return TW(this,b,c);},"bk",function(b,c,d,e){return SW(this,b,c,d,e);},"R",function(b){return TB(this,b);}],IE,0,C5,[],4,0,0,["d1",function(b){return S_(this,b);},"gK",function(b,c){return TM(this,b,c);}],IF,0,C5,[],4,0,0,["d1",function(b){return U1(this,b);},"gK",function(b,c){return XC(this,b,c);}],Mq,0,B,[],0,0,0,0,Ko,"NegativeArraySizeException",5,Bc,[],0,3,0,0,Lg,
0,B,[],0,0,0,0,Ff,0,L,[],0,0,0,["q",function(){return OM(this);}],FU,0,L,[],0,0,0,["q",function(){return Kx(this);}],L6,0,L,[],0,0,0,["q",function(){return Uq(this);}]]);
$rt_metadata([Ni,0,L,[],0,0,0,["q",function(){return VR(this);}],Nm,0,L,[],0,0,0,["q",function(){return U7(this);}],GD,0,L,[],0,0,0,["q",function(){return MG(this);}],FL,0,GD,[],0,0,0,["q",function(){return N3(this);}],Pr,0,L,[],0,0,0,["q",function(){return WY(this);}],GE,0,FL,[],0,0,0,["q",function(){return Kv(this);}],O4,0,GE,[],0,0,0,["q",function(){return Qt(this);}],Px,0,L,[],0,0,0,["q",function(){return T7(this);}],Nf,0,L,[],0,0,0,["q",function(){return Qn(this);}],MQ,0,L,[],0,0,0,["q",function(){return XG(this);
}],Nr,0,L,[],0,0,0,["q",function(){return Rg(this);}],PD,0,L,[],0,0,0,["q",function(){return P7(this);}],Mr,0,L,[],0,0,0,["q",function(){return Xz(this);}],LQ,0,L,[],0,0,0,["q",function(){return TZ(this);}],NN,0,L,[],0,0,0,["q",function(){return T5(this);}],Lw,0,L,[],0,0,0,["q",function(){return UG(this);}],K6,0,L,[],0,0,0,["q",function(){return Xw(this);}],MM,0,L,[],0,0,0,["q",function(){return PM(this);}],M3,0,L,[],0,0,0,["q",function(){return YC(this);}],NG,0,L,[],0,0,0,["q",function(){return US(this);}],Ks,
0,L,[],0,0,0,["q",function(){return Wi(this);}],O2,0,L,[],0,0,0,["q",function(){return YF(this);}],M0,0,L,[],0,0,0,["q",function(){return Wo(this);}],OA,0,L,[],0,0,0,["q",function(){return S3(this);}],NF,0,L,[],0,0,0,["q",function(){return Q$(this);}],PC,0,L,[],0,0,0,["q",function(){return Ub(this);}],Fs,0,L,[],0,0,0,["q",function(){return Pz(this);}],N1,0,Fs,[],0,0,0,["q",function(){return QP(this);}],O_,0,Ff,[],0,0,0,["q",function(){return R5(this);}],NB,0,FU,[],0,0,0,["q",function(){return WJ(this);}],MW,
0,L,[],0,0,0,["q",function(){return Y7(this);}],Nu,0,L,[],0,0,0,["q",function(){return Xc(this);}],OV,0,L,[],0,0,0,["q",function(){return VK(this);}],O5,0,L,[],0,0,0,["q",function(){return PN(this);}],NE,0,B,[Fb],1,3,0,0,Iy,0,B,[],0,3,0,0,Ox,0,B,[],4,3,0,0,DV,0,B,[],3,3,0,0,Ho,0,B,[DV],0,0,0,["dF",function(){return Eq(this);},"c9",function(){return D3(this);}],Ig,0,CX,[],0,0,0,["di",function(){return Si(this);}],FS,0,B,[DV],3,3,0,0,GO,0,B,[FS],0,0,0,["gT",function(){return Uk(this);},"h5",function(){return U_(this);
}],FH,0,B,[],0,0,0,0,CL,"NoSuchElementException",1,Bc,[],0,3,0,0,Fd,0,B,[],3,3,0,0,Gr,0,B,[Fd,B1],0,0,0,0,DA,0,Gr,[],0,0,0,0,FZ,"CloneNotSupportedException",5,BZ,[],0,3,0,0,JE,0,C1,[],0,3,0,0,G0,0,B,[],0,0,0,0]);
$rt_metadata([Ky,0,B,[FS],0,0,0,["dF",function(){return J1(this);},"c9",function(){return Ew(this);},"gT",function(){return Ir(this);},"h5",function(){return GV(this);}],Ja,"AbstractCharClass$1",2,K,[],0,0,0,["g",function(b){return Vc(this,b);}],I$,"AbstractCharClass$2",2,K,[],0,0,0,["g",function(b){return QA(this,b);}],HU,"CharClass$18",2,K,[],0,0,0,["g",function(b){return YQ(this,b);},"bA",function(){return Ws(this);}],H0,0,K,[],0,0,0,["g",function(b){return TY(this,b);}],HY,0,K,[],0,0,0,["g",function(b){
return UH(this,b);}],HZ,0,K,[],0,0,0,["g",function(b){return PU(this,b);}],H3,0,K,[],0,0,0,["g",function(b){return UK(this,b);}],H4,0,K,[],0,0,0,["g",function(b){return PF(this,b);}],H1,0,K,[],0,0,0,["g",function(b){return Wz(this,b);}],H2,0,K,[],0,0,0,["g",function(b){return PX(this,b);}],H5,0,K,[],0,0,0,["g",function(b){return WC(this,b);}],H6,0,K,[],0,0,0,["g",function(b){return TR(this,b);}],HT,0,K,[],0,0,0,["g",function(b){return Y9(this,b);}],Is,0,K,[],0,0,0,["g",function(b){return WF(this,b);}],HR,0,
K,[],0,0,0,["g",function(b){return TP(this,b);}],HS,0,K,[],0,0,0,["g",function(b){return V2(this,b);}],HX,0,K,[],0,0,0,["g",function(b){return X0(this,b);}],HQ,0,K,[],0,0,0,["g",function(b){return V1(this,b);}],HV,0,K,[],0,0,0,["g",function(b){return Sv(this,b);}],HW,0,K,[],0,0,0,["g",function(b){return SL(this,b);}],Ix,0,B,[F$],0,0,0,0,Gz,0,B,[Fd,BF],0,3,0,0,J6,0,B,[],3,3,0,0,He,0,B,[J6],3,3,0,0,H_,0,B,[],3,3,0,0,Ea,0,B,[He,H_],1,3,0,0,Ft,0,Ea,[],0,3,0,0,Jd,0,Ft,[],0,3,0,0,IB,0,Ea,[],0,0,0,0,Hq,0,Gz,[],0,0,
0,0,Fq,0,B,[B4],1,3,0,0,Kg,0,Fq,[],0,3,0,0,M7,"IllegalCharsetNameException",4,X,[],0,3,0,0,FP,0,B,[],0,0,0,["dF",function(){return Ld(this);}],H8,0,FP,[DV],0,0,0,["c9",function(){return XN(this);}],G6,0,Ee,[],0,0,0,["bk",function(b,c,d,e){return YP(this,b,c,d,e);},"cl",function(){return Tw(this);}],C7,"IllegalStateException",5,BZ,[],0,3,0,0,GQ,0,B,[],0,3,0,0,Ga,0,B,[BS],0,0,0,["c1",function(b,c){Su(this,b,c);}],O$,0,B,[],0,3,0,0,D0,"ConcurrentModificationException",1,Bc,[],0,3,0,0,IR,0,B,[DV],4,0,0,["dF",function()
{return YB(this);},"c9",function(){return PJ(this);}],G2,"AbstractCharClass$LazyJavaLowerCase$1",2,K,[],0,0,0,["g",function(b){return WT(this,b);}],GT,"AbstractCharClass$LazyJavaUpperCase$1",2,K,[],0,0,0,["g",function(b){return R0(this,b);}],Kc,"AbstractCharClass$LazyJavaWhitespace$1",2,K,[],0,0,0,["g",function(b){return Rl(this,b);}],Kb,"AbstractCharClass$LazyJavaMirrored$1",2,K,[],0,0,0,["g",function(b){return VJ(this,b);}],Jo,"AbstractCharClass$LazyJavaDefined$1",2,K,[],0,0,0,["g",function(b){return XJ(this,
b);}],Il,"AbstractCharClass$LazyJavaDigit$1",2,K,[],0,0,0,["g",function(b){return WW(this,b);}],HG,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",2,K,[],0,0,0,["g",function(b){return RZ(this,b);}]]);
$rt_metadata([Jp,"AbstractCharClass$LazyJavaISOControl$1",2,K,[],0,0,0,["g",function(b){return T8(this,b);}],GP,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",2,K,[],0,0,0,["g",function(b){return Yr(this,b);}],GS,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",2,K,[],0,0,0,["g",function(b){return Uo(this,b);}],Hv,"AbstractCharClass$LazyJavaLetter$1",2,K,[],0,0,0,["g",function(b){return W$(this,b);}],IG,"AbstractCharClass$LazyJavaLetterOrDigit$1",2,K,[],0,0,0,["g",function(b){return Qi(this,b);}],IM,"AbstractCharClass$LazyJavaSpaceChar$1",
2,K,[],0,0,0,["g",function(b){return Tj(this,b);}],Hu,"AbstractCharClass$LazyJavaTitleCase$1",2,K,[],0,0,0,["g",function(b){return WD(this,b);}],GI,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",2,K,[],0,0,0,["g",function(b){return XR(this,b);}],G1,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",2,K,[],0,0,0,["g",function(b){return T6(this,b);}],Gq,"UnicodeCategory",2,K,[],0,0,0,["g",function(b){return R2(this,b);}],J4,"UnicodeCategoryScope",2,Gq,[],0,0,0,["g",function(b){return Vj(this,b);}],I2,0,
B,[],0,0,0,0,Hh,0,B,[BS],0,0,0,["c1",function(b,c){QF(this,b,c);}],Jz,0,B,[BS],0,0,0,["c1",function(b,c){P_(this,b,c);}],JQ,0,B,[BS],0,0,0,["c1",function(b,c){QQ(this,b,c);}],BN,0,B_,[B4,BF],0,3,Db,0,Bz,0,B_,[B4,BF],0,3,0,0,D2,0,B,[],1,3,0,0,Kn,0,B,[],3,3,0,0,Fo,0,D2,[B4,EX,E1,Kn],1,3,0,0,FN,0,D2,[B4],1,3,0,0,EG,0,B,[],0,3,0,0,Kl,0,B,[],32,0,QB,0,B7,"ArithmeticException",5,Bc,[],0,3,0,0,FX,0,Fo,[],1,0,0,0,JH,0,FX,[],0,0,0,0,E_,0,B,[],1,3,0,0,F4,0,B,[],0,3,0,0,Dw,0,B,[],0,0,Di,0,Js,0,FN,[],0,0,0,0,Kh,0,B_,[B4],
0,3,0,0,Gf,0,B,[],4,3,0,0,MK,0,B,[],0,0,0,0,KV,0,B,[],0,0,0,0,Np,0,B,[],0,0,0,0,GC,0,E_,[],1,3,0,0,IL,0,GC,[],0,3,0,0,HO,0,BZ,[],0,3,0,0,LH,0,B,[],0,0,0,0,FK,0,B,[],0,0,0,0,HA,0,C1,[],0,3,0,0,Ht,0,B,[],0,3,0,0,Ka,"ReadOnlyBufferException",3,Dj,[],0,3,0,0,Jq,"BufferOverflowException",3,Bc,[],0,3,0,0,I9,"BufferUnderflowException",3,Bc,[],0,3,0,0]);
function $rt_array(cls,data){this.rT=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["@","0","UTF-8",": ","    at ","Caused by: ","null","Index out of bounds","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ","=","?","\\operatorname{","\\\\[a-zA-Z]+","[a-zA-Z].*","[a-z]{2,}",".","","#",";(-0",")","E0};(-0","E0})","\\infty","(-\\infty)","E","\\times10^{","\\underline{","}",
"Patter is null","[","^","_","{","\\frac","\\sqrt","]","mfrac","msqrt","mroot","msub","msup","msubsup","mrow","Currency not found: ","-","Can\'t avoid rounding","[0-9\\.]+","|","ln","log","sin","cos","tan","cot","sinh","cosh","tanh","coth","asin","acos","atan","acot","asinh","acosh","atanh","acoth","arcsin","arccos","arctan","arccot","arcsinh","arccosh","arctanh","arccoth","e","\\pi","\\phi","+","\\times","/","\\div",":","!","\\%","This exception should not been thrown","Is","In",", ","en","CA","fr","zh","CN",
"FR","de","DE","it","IT","ja","JP","ko","KR","TW","GB","US","Either src or dest is null","UP","DOWN","CEILING","FLOOR","HALF_UP","HALF_DOWN","HALF_EVEN","UNNECESSARY",",","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase",
"javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement",
"Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures",
"OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters",
"CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A",
"VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Positive number pattern not found in ","Expected \';\' at "," in ","Prefix contains special character at ","Quote opened at "," was not closed in ",
"Group separator found at fractional part at ","Unexpected second decimal separator at ","Unexpected \'0\' at optional digit part at ","Unexpected char at exponent at ","Pattern does not specify exponent digits at ","Two group separators at ","Unexpected \'#\' at non-optional digit part at ","Pattern does not specify integer digits at ","Group separator at the end of number at ","Replacement preconditions do not hold","Overflow","Underflow","Negative bit address","Negative exponent","BigInteger divide by zero",
"The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset "," is outside of range [0;","New position ","The last byte in src ","IGNORE","REPLACE","REPORT","Action must be non-null","power of ten too big","BIG_ENDIAN","LITTLE_ENDIAN"]);
Ck.prototype.toString=function(){return $rt_ustr(this);};
Ck.prototype.valueOf=Ck.prototype.toString;B.prototype.toString=function(){return $rt_ustr(SU(this));};
B.prototype.__teavm_class__=function(){return $dbg_class(this);};
function Long_eq(a,b){return a.hi===b.hi&&a.lo===b.lo;}function Long_ne(a,b){return a.hi!==b.hi||a.lo!==b.lo;}function Long_gt(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);}function Long_ge(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);}function Long_lt(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>
1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);}function Long_le(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);}function Long_add(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_inc(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);}function Long_dec(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);}function Long_neg(a)
{return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));}function Long_sub(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<
16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_compare(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}function Long_mul(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo
+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);}function Long_div(a,b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];}function Long_udiv(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];}function Long_rem(a,
b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];}function Long_urem(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];}function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}function Long_and(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);}function Long_or(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);}function Long_xor(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);}function Long_shl(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}}function Long_shr(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi
<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}}function Long_shru(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}}function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup
=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -
b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF
|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a)
{var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup
=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q
=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}function $rt_startThread(runner,callback){var result;try {result
=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(AAq);
(function(){var c;c=Id.prototype;c.solve=c.n_;})();
})();

//# sourceMappingURL=classes.js.map