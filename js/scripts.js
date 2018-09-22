function check() {
  var q1 =parseInt( $("input:radio[name=Q1]:checked").val());
  var q2 = parseInt($("input:radio[name=Q2]:checked").val());
  var q3 = parseInt($("input:radio[name=Q2]:checked").val());

  var testResults = function(q1,q2,q3){
return (q1+ q2 + q3);
}

var result = testResults(q1, q2 ,q3);


  document.getElementById("display").style.visibility="visible";
  document.getElementById("number correct").innerHTML=" You got " +  result;


}
