var add = function(q1,q2,q3){
return  q1 + q2 + q3;


}

$("#radio").submit(function(event){
    var q1 = parseInt($("input:radio[name=Q1]:checked").val());
    var q2 = parseInt($("input:radio[name=Q2]:checked").val());
    var q3 = parseInt($("input:radio[name=Q2]:checked").val());

    var result = add(q1,q2,q3);

    $("#display").text( result);

    event.preventDefault();
  });
