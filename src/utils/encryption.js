// import Base64 from "js-base64"
/**
* JS字符串加密和解密
* @date:    2018年06月07日 上午10:03:41
* @author   Senao
* @param    {[string]} [str] [需要加密/解密的字符串（包括中文）]
* @param    {[string]} [pwd] [密码]
* @param    {[string]} [type] [类型：E = 加密 、D = 解密]
* @return   {[string]}   
*/
export function Secret_Key(str, pwd, type) {

  // var b = new Base64(); //需要加载一个Base64.js文件 可以上网自行下载
  if (type == 'E') {   //加密
    // str = b.encode(str);//Base64加密
    str = window.btoa(str);//Base64加密
    var prand = "";
    for (var i = 0; i < pwd.length; i++) {
      prand += pwd.charCodeAt(i).toString();
    }
    var sPos = Math.floor(prand.length / 5);
    var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
    var incr = Math.ceil(pwd.length / 2);
    var modu = Math.pow(2, 31) - 1;
    if (mult < 2) {
      alert("Please choose a more complex or longer password.");
      return null;
    }
    var salt = Math.round(Math.random() * 1000000000) % 100000000;
    prand += salt;
    while (prand.length > 10) {
      prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
    }
    prand = (mult * prand + incr) % modu;
    var enc_chr = "";
    var enc_str = "";
    for (var i = 0; i < str.length; i++) {
      enc_chr = parseInt(str.charCodeAt(i) ^ Math.floor((prand / modu) * 255));
      if (enc_chr < 16) {
        enc_str += "0" + enc_chr.toString(16);
      } else enc_str += enc_chr.toString(16);
      prand = (mult * prand + incr) % modu;
    }
    salt = salt.toString(16);
    while (salt.length < 8) salt = "0" + salt;
    enc_str += salt;
    return enc_str;
  }
  if (type == 'D') {  //解密
    var prand = "";
    for (var i = 0; i < pwd.length; i++) {
      prand += pwd.charCodeAt(i).toString();
    }
    var sPos = Math.floor(prand.length / 5);
    var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
    var incr = Math.round(pwd.length / 2);
    var modu = Math.pow(2, 31) - 1;
    var salt = parseInt(str.substring(str.length - 8, str.length), 16);
    str = str.substring(0, str.length - 8);
    prand += salt;
    while (prand.length > 10) {
      prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
    }
    prand = (mult * prand + incr) % modu;
    var enc_chr = "";
    var enc_str = "";
    for (var i = 0; i < str.length; i += 2) {
      enc_chr = parseInt(parseInt(str.substring(i, i + 2), 16) ^ Math.floor((prand / modu) * 255));
      enc_str += String.fromCharCode(enc_chr);
      prand = (mult * prand + incr) % modu;
    }
    // return b.decode(enc_str);
    return window.atob(enc_str);
  }
}

