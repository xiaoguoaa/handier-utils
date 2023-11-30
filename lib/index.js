"use strict";exports.chunk=function(t,r){r=Math.max(r,0);const e=t.length;if(!e||!r)return[];let n=0,c=0;const s=Array(Math.ceil(e/r));for(;n<e;)s[c++]=t.slice(n,n+=r);return s};
