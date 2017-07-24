var appServer = 'http://180.168.215.71/b2bwx';
//var appServer = 'http://localhost:2888';

Date.prototype.format = function(format) {
    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}

String.prototype.replaceAll = function(s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}

// 0.00
String.prototype.formatAmount = function(tpl){
    
}

function  formatTime (time) {
	time = time.toString()
    var format = '';
    switch(time.length)
    {
        case 6:
            format = time.substr(0,2) + ":" + time.substr(2,2) + ":" + time.substr(4,2);
            break;
        case 8:
            format = time.substr(0,4) + "-" + time.substr(4,2)+ "-" + time.substr(6,2);
            break;
        case 14:
            format = time.substr(0,4) + "-" + time.substr(4,2)+ "-" + time.substr(6,2) +" "+ time.substr(8,2) + ":" + time.substr(10,2) + ":" + time.substr(12,2);
            break;
        default:

    };
    return format;
}

function parseURL(url) {  
 var a =  document.createElement('a');  
 a.href = url;  
 return {  
 source: url,  
 protocol: a.protocol.replace(':',''),  
 host: a.hostname,  
 port: a.port,  
 query: a.search,  
 params: (function(){  
     var ret = {},  
         seg = a.search.replace(/^\?/,'').split('&'),  
         len = seg.length, i = 0, s;  
     for (;i<len;i++) {  
         if (!seg[i]) { continue; }  
         s = seg[i].split('=');  
         ret[s[0]] = s[1]; 
     }  
     return ret;  
 })(),  
 file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],  
 hash: a.hash.replace('#',''),  
 path: a.pathname.replace(/^([^\/])/,'/$1'),  
 relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],  
 segments: a.pathname.replace(/^\//,'').split('/')  
 };  
}   

// 金额补零
function fillzero(value) {
    var value = Math.round(parseFloat(value) * 100) / 100;
    var xsd = value.toString().split(".");
    if (xsd.length == 1) {
        value = value.toString() + ".00";
        return value;
    }
    if (xsd.length > 1) {
        if (xsd[1].length < 2) {
            value = value.toString() + "0";
        }
        return value;
    }
}

