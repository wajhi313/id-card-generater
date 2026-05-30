
function generateCard() {
    let name = document.getElementById("name").value.trim();
    let father = document.getElementById("fatherName").value.trim();
    let cnic = document.getElementById("cnic").value.trim();
    let email = document.getElementById("email").value.trim();
    let fileInput = document.getElementById("fileInput");

    let gender = document.querySelector('input[name="gender"]:checked');


    if (!name || !father || !cnic || !email || !gender) {
        alert("❌ All fields are required");
        return;
    }

    if (cnic.length !== 13 || isNaN(cnic)) {
        alert("❌ CNIC must be exactly 13 digits");
        return;
    }

    if (!email.includes("@")) {
        alert("❌ Email must contain @");
        return;
    }

    
    let reader = new FileReader();

    reader.onload = function () {

       
        let roll = "SMIT-" + Math.floor(1000 + Math.random() * 9000);

   
        localStorage.setItem("name", name);
        localStorage.setItem("father", father);
        localStorage.setItem("cnic", cnic);
        localStorage.setItem("email", email);
        localStorage.setItem("gender", gender.value);
        localStorage.setItem("image", reader.result);
        localStorage.setItem("roll", roll);

        // go to card page
        window.location.href = "card.html";
    };

    if (fileInput.files[0]) {
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        alert("❌ Please upload image");
    }
}

window.onload = function () {
    document.getElementById("cName").innerText = localStorage.getItem("name");
    document.getElementById("cFather").innerText = localStorage.getItem("father");
    document.getElementById("cCnic").innerText = localStorage.getItem("cnic");
    document.getElementById("cEmail").innerText = localStorage.getItem("email");
    document.getElementById("cGender").innerText = localStorage.getItem("gender");
    document.getElementById("cRoll").innerText = localStorage.getItem("roll");

    document.getElementById("cardImg").src = localStorage.getItem("image");
};