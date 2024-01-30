function onSubmitClick() {
    var name = document.getElementById("name").value;
    var salary = document.getElementById("salary").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var notes = document.getElementById("notes").value;

    // var genders = document.getElementById("genders");
    // var selectedGender;
    // for(var i=0; i < genders.gender.length; i++) {
    //     if(genders.gender[i].checked) {
    //         selectedGender = genders.gender[i].value;
    //         break;
    //     }
    // }

    var userDetails = {
        name: name,
        // gender: selectedGender,
        // department: department,
        salary: salary,
        startDate: `${day}/${month}/${year}`,
        notes: notes
    }

    localStorage.setItem(name, JSON.stringify(userDetails));
    alert("Saved");
}

function loadDate() {
    var name = document.getElementById("name").value;
    var userDetails = localStorage.getItem(name);
    var userDetails = JSON.parse(userDetails);
    document.getElementById("salary").value = userDetails.salary;
    var date = userDetails.startDate.split('/');
    document.getElementById("day").value = date[0];
    document.getElementById("month").value = date[1];
    document.getElementById("year").value = date[2];
    document.getElementById("notes").value = userDetails.notes;
}

function onResetClick() {
    document.getElementById("name").value = '';
    document.getElementById("salary").value = '';
    document.getElementById("day").value = '';
    document.getElementById("month").value = '';
    document.getElementById("year").value = '';
    document.getElementById("notes").value = '';
}