
function generateCard() {
    let name = document.getElementById("name").value.trim();
    let father = document.getElementById("fatherName").value.trim();
    let cnic = document.getElementById("cnic").value.trim();
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value.trim();
    let fileInput = document.getElementById("fileInput");

    let gender = document.querySelector('input[name="gender"]:checked');



    if (!name || !father || !cnic || !email || !course || !gender) {
        alert("All fields are required");
        return;
    }

    if (cnic.length !== 13 || isNaN(cnic)) {
        alert("CNIC must be exactly 13 digits");
        return;
    }

    if (!email.includes("@")) {
        alert("Email must contain @");
        return;
    }


    let reader = new FileReader();

    reader.onload = function () {
        console.log(reader.result);

        let roll = "2026-" + Math.floor(1000 + Math.random() * 9000);


        localStorage.setItem("name", name);
        localStorage.setItem("father", father);
        localStorage.setItem("cnic", cnic);
        localStorage.setItem("course", course);
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
        alert("Please upload image");
    }
}

window.onload = function () {
    document.getElementById("cName").innerText =
        localStorage.getItem("name").toUpperCase() || "NAME NOT FOUND";

    document.getElementById("cFather").innerHTML =
        "<strong>Father Name:</strong> " + (localStorage.getItem("father") || "NAME NOT FOUND");

    document.getElementById("cCourse").innerHTML =
        "<strong>Course:</strong> " + (localStorage.getItem("course") || "COURSE NOT FOUND");

    document.getElementById("cCnic").innerHTML =
        "<strong>CNIC:</strong> " + (localStorage.getItem("cnic") || "CNIC NOT FOUND");

    document.getElementById("cEmail").innerHTML =
        "<strong>Gmail:</strong> " + (localStorage.getItem("email") || "EMAIL NOT FOUND");

    document.getElementById("cGender").innerHTML =
        "<strong>Gender:</strong> " + (localStorage.getItem("gender") || "GENDER NOT FOUND");

    document.getElementById("cId").innerHTML =
        "<strong>ID Card No.:</strong> " + (localStorage.getItem("roll"));

    document.getElementById("cardImage").src =
        localStorage.getItem("image");
};