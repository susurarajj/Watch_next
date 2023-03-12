function myFunction1() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  var vo_vala_variable;
  vo_vala_variable=document.getElementById("indexnum").value;
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[vo_vala_variable];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

document.getElementById("logout").onclick = function() {  
myFunction() 
};  
        function myFunction() {

  alert("Registration successful!");
    window.location.href="Login.html";
}