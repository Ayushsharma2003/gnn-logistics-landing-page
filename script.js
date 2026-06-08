const form = document.getElementById("contact-form");

form.addEventListener("submit", async function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields");
        return;
    }

    try{

        await fetch(
            "https://script.google.com/macros/s/AKfycbzlpX221aCRBTYLFrUAcN_61HXMCX_DDXiC680W4Lx6t0DB4FKa-PQKR6dO0G1QTQuT9A/exec",
            {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            }
        );

        alert("Message submitted successfully!");
        form.reset();

    }catch(error){

        alert("Something went wrong!");

    }

});
