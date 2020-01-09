$(".extraction").change(function() {
  var extraction_val = $(".extraction").val();
  if(extraction_val == "全て") {
      $('.tokyo').css('display', 'nobe');
      $('.osaka').css('display', 'none');
  }else if(extraction_val == "東京") {
      $('.tokyo').css('display', 'block');
      $('.osaka').css('display', 'none');
  }else if(extraction_val == "大阪") {
      $('.tokyo').css('display', 'none');
      $('.osaka').css('display', 'block');
  };
});
