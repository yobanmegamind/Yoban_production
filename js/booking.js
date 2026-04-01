async function checkBooking(){
    let res = await fetch("/api/booking/check",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({date:date.value})
    });

    let data = await res.json();
    status.innerText = data.available ? "Available" : "Booked";
}

async function book(){
    window.location.href="login.html";
}