$(function(){
  $(document).on('turbolinks:load',function(){
   $('select').change(function(){
    //  console.log(this)
     var val = $(this).val();
      console.log(val)
      if( val == 1){
        console.log(33)
        $(function(){
          console.log(33)
          $('.form_menber4_4_2') .css('display','block')
          // $('.form_menber4_5_1') .css('display','none')
          // $('.form_menber4_3_3') .css('display','none')
          // $('.form_menber3_4_3') .css('display','none')
          // $('.form_menber3_5_2') .css('display','none')
          // $('.form_menber3_6_1') .css('display','none')
        })
      }
      if( val == 2){
        $(function(){
          $('.form_menber4_4_2') .css('display','none')
          $('.form_menber4_5_1') .css('display','block')
          $('.form_menber4_3_3') .css('display','none')
          $('.form_menber3_4_3') .css('display','none')
          $('.form_menber3_5_2') .css('display','none')
          $('.form_menber3_6_1') .css('display','none')
        })

      }
   })
 });
});


// $(function(){
//   $(document).on('click', '1', function(){
//    $('.form_menber') .css('display','block')
//   });
// });

