function hideExtraSections() {
    hideElement("page2");
    hideElement("page3");
    hideElement("page4");

}


//toggle Show and hide windows
function showAndHide(toHide, toShow) {

    hideElement(toHide);
    showElement(toShow);
    $('#rentalAgreementModal').modal('hide');

}


function hideElement(toHide) {
    var x = document.getElementById(toHide);
    x.style.display = "none";

}

function showElement(toShow) {
    var x = document.getElementById(toShow);
    x.style.display = "block";
}

// Initialize and add the map
function initMap() {
    var locA, locB, locC;

    locA = { lat: 49.92, lng: -97.13 };
    locB = { lat: 49.94, lng: -97.2 };
    locC = { lat: 49.85, lng: -97.15 };

    if (selectedCity == "Winnipeg, MB") {
        locA = { lat: 49.92, lng: -97.13 };
        locB = { lat: 49.94, lng: -97.2 };
        locC = { lat: 49.85, lng: -97.15 };
    } else if (selectedCity == "Calgary, AB") {
        locA = { lat: 51.04, lng: -114.07 };
        locB = { lat: 51, lng: -114.0 };
        locC = { lat: 51.01, lng: -114.15 };
    } else if (selectedCity == "Toronto, ON") {
        locA = { lat: 43.65, lng: -79.38 };
        locB = { lat: 43.7, lng: -79.5 };
        locC = { lat: 43.68, lng: -79.3 };
    }

    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: locA
    });


    new google.maps.Marker(
        {
            position: locA,
            map,
            label: "A",
        }
    );

    new google.maps.Marker(
        {
            position: locB,
            map,
            label: "B",
        }
    );

    new google.maps.Marker(
        {
            position: locC,
            map,
            label: "C",
        }
    );


    openCity()
}

function saveFormInfo() {
    if (selectCity() && selectDate()) {
        //update the next forms info
        document.getElementById('editDate').value = document.getElementById('chosenDate').value;
        showAndHide('page1', 'page2');
        initMap();
    }
}

var selectedCity;
function selectCity() {
    selectedCity = document.getElementById('chosenCity').value;

    if (selectedCity != "Winnipeg, MB" && selectedCity != "Calgary, AB" && selectedCity != "Toronto, ON") {
        clearInput("#chosenCity");
        alert("Invalid or no city entered. Please try again");
        return false;
    }

    return true;
}

function selectDate() {
    var enteredDate = new Date(document.getElementById('chosenDate').value);
    enteredDate = enteredDate.toJSON();

    if (enteredDate == null) {
        alert("No date entered, please try again");
        return false;
    }

    let today = new Date().toJSON();

    if (enteredDate < today) {
        alert("Booking date must be in the future. Please try again");
        return false;
    }

    return true;
}

function editDate() {
    alert("im in editDate");
    // var editedDate = new Date(document.getElementById('editDate').value);

    // alert(editedDate);

    // editedDate = editedDate.toJSON();

    // alert(editedDate);
    // let today = new Date().toJSON();

    // if (editedDate < today) {
    //     alert("Booking date must be in the future. Please try again");
    // } else {
    //     document.getElementById('chosenDate').value = document.getElementById('editDate').value;
    // }

}


function clearInput(elementID) {
    $(elementID).val("");
}


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
