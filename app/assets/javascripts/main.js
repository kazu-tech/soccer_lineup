function myfunc() {
  var value　= document.getElementById("myselectbox").value;
  var target = document.getElementById("target");
  var text = '';
  if(value === '東京'){
    text = '東京にはスカイツリーがあります';
  }
  else if(value === '神奈川'){
    text = '神奈川には鎌倉があります';
  }
  else if(value === '千葉'){
    text = '千葉にはディズニーランドがあります';
  }
  target.innerHTML = text;
}