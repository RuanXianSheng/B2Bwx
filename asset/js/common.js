var appServer = 'http://180.168.215.71/b2bwx';
//var appServer = 'http://localhost:2888';

//获取url参数
function getRequests(key) {
    var url = window.location.search.split("?"); //获取url中"?"符后的字串  
    var qd = {};
    if (url[1]) {
        unescape(url[1]).split("&").forEach(function(item) {
            (item.split("=")[0] in qd) ? qd[item.split("=")[0]].push(item.split("=")[1]): qd[item.split("=")[0]] = [item.split("=")[1]]
        });
        return qd[key];
    }
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