function changeStatus() {
  const status_member = document.getElementById("membership");
  const nonprofit = document.getElementById("nonprofit");
  const bronze = document.getElementById("bronze");
  const silver = document.getElementById("silver");
  const gold = document.getElementById("gold");
  const benefits = document.getElementById("benefits");

  switch (status_member.value) {
    case 'select':
      benefits.style.display = 'none';
      nonprofit.style.display = 'none';
      bronze.style.display = 'none';
      silver.style.display = 'none';
      gold.style.display = 'none';
      break;
    case 'nonprofit':
      benefits.style.display = 'block';
      nonprofit.style.display = 'block';
      bronze.style.display = 'none';
      silver.style.display = 'none';
      gold.style.display = 'none';
      break;
    case 'bronze':
      benefits.style.display = 'block';
      nonprofit.style.display = 'none';
      bronze.style.display = 'block';
      silver.style.display = 'none';
      gold.style.display = 'none';
      break;
    case 'silver':
      benefits.style.display = 'block';
      nonprofit.style.display = 'none';
      bronze.style.display = 'none';
      silver.style.display = 'block';
      gold.style.display = 'none';
      break;
    case 'gold':
      benefits.style.display = 'block';
      nonprofit.style.display = 'none';
      bronze.style.display = 'none';
      silver.style.display = 'none';
      gold.style.display = 'block';
      break;

    default:
      benefits.style.display = "none";

    
  }


}