function cal() {
    const inputTemp = document.getElementById("inp").value;
    const tempType = document.getElementById("diff").value;
    let result;
  
    if (tempType === "cel") {
      result = (inputTemp * 9/5) + 32;
    } else {
      result = (inputTemp - 32) * 5/9;
    }
  
    document.getElementById("res").value = result.toFixed(2);
  }
  

