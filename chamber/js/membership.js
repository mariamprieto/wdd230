function changeStatus() {
  var status_member = document.getElementById("membership");
  
  
  if (status_member.value === "nonprofit") {
    document.getElementById("nonprofit").style.display = "block";

  }
  if (status_member.value === "bronze") {
    document.getElementById("bronze").style.display = "block";
  }
  if (status_member.value === "silver") {
    document.getElementById("silver").style.display = "block";
  }
  if (status_member.value === "gold") {
    document.getElementById("gold").style.display = "block";
  }
  else {
    document.getElementById("benefits").style.display = "none";
  }





}