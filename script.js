function buyNow(service, price) {
    alert(`You selected "${service}" for ₹${price}. Please enter your contact info below.`);
  }
  
  function submitForm(event) {
    event.preventDefault();
    const id = document.getElementById('userId').value;
    const service = document.getElementById('serviceType').value;
  
    if (id && service) {
      document.getElementById('confirmationMessage').innerText =
        `Thanks! Your request for "${service}" has been received. We’ll contact you at: ${id}`;
      
      document.getElementById('topupForm').reset();
    }
  }
  function buyNow(service, price) {
    alert(`You selected "${service}" for ₹${price}. Please enter your contact info below.`);
  }
  
  function submitForm(event) {
    event.preventDefault();
    const id = document.getElementById('userId').value;
    const service = document.getElementById('serviceType').value;
  
    if (id && service) {
      document.getElementById('confirmationMessage').innerText =
        `Thanks! Your request for "${service}" has been received. We’ll contact you at: ${id}`;
      
      document.getElementById('topupForm').reset();
    }
  }
    