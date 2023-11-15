let form = document.querySelector("form");
let submit = document.querySelector(".submit");
let restart = document.querySelector(".restart");
let packingList = document.querySelector(".packing_list");
let error = document.querySelector(".error");

restart.addEventListener("click", (e) => {
    form.reset();
    packingList.innerHTML = "";
    restart.style.display = "none";
    submit.style.display = "block";
    form.style.display = "block";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    packingList.innerHTML = "";
    error.innerHTML = "";

    if (
        !Number.isInteger(parseFloat(form.night.value)) ||
        parseInt(form.night.value) <= 0
    ) {
        errorNight = document.createElement("p");
        errorNight.innerHTML =
            "La valeur nuit doit être entière et supérieure à 0";
        error.appendChild(errorNight);
    }

    if (
        form.climate.value != "chaud" &&
        form.climate.value != "modéré" &&
        form.climate.value != "froid"
    ) {
        errorClimate = document.createElement("p");
        errorClimate.innerHTML =
            "La valeur climat doit être égale à chaud, froid ou modéré";
        error.appendChild(errorClimate);
    }

    if (error.innerHTML == "") {
        message();
        valise();
        chaussette();
        sous_vetement();
        t_shirt();
        sweat();
        pantalon();
        veste();
        chaussure();
        machine();
        changeButtons();
    }
});

const message = () => {
    let message1 = document.createElement("p");
    let pluriel = "";
    if (form.night.value > 1) pluriel = "s";
    message1.innerHTML = `Voici ce que vous devez prendre pour ${form.night.value} nuit${pluriel} de voyage :`;
    packingList.appendChild(message1);
};

const valise = () => {
    let valiseDiv = document.createElement("div");
    let valiseLabel = document.createElement("label");
    let valiseCheckbox = document.createElement("input");
    valiseLabel.innerHTML = "Un sac à dos/valise";
    valiseCheckbox.type = "checkbox";
    valiseDiv.appendChild(valiseCheckbox);
    valiseDiv.appendChild(valiseLabel);

    packingList.appendChild(valiseDiv);
};

const chaussette = () => {
    let chaussetteDiv = document.createElement("div");

    let chaussetteLabel = document.createElement("label");
    let chaussetteCheckbox = document.createElement("input");

    if (form.night.value > 10) {
        chaussetteLabel.innerHTML = `10 paires de chaussettes`;
    } else if (form.night.value == 1) {
        chaussetteLabel.innerHTML = `${form.night.value} paire de chaussettes`;
    } else {
        chaussetteLabel.innerHTML = `${form.night.value} paires de chaussettes`;
    }

    chaussetteCheckbox.type = "checkbox";

    chaussetteDiv.appendChild(chaussetteCheckbox);
    chaussetteDiv.appendChild(chaussetteLabel);

    packingList.appendChild(chaussetteDiv);
};

const sous_vetement = () => {
    let sous_vetementDiv = document.createElement("div");

    let sous_vetementLabel = document.createElement("label");
    let sous_vetementCheckbox = document.createElement("input");

    if (form.night.value > 10) {
        sous_vetementLabel.innerHTML = `10 sous-vêtements`;
    } else if (form.night.value == 1) {
        sous_vetementLabel.innerHTML = `${form.night.value} sous-vêtement`;
    } else {
        sous_vetementLabel.innerHTML = `${form.night.value} sous-vêtements`;
    }

    sous_vetementCheckbox.type = "checkbox";

    sous_vetementDiv.appendChild(sous_vetementCheckbox);
    sous_vetementDiv.appendChild(sous_vetementLabel);

    packingList.appendChild(sous_vetementDiv);
};

const t_shirt = () => {
    let t_shirtDiv = document.createElement("div");

    let t_shirtLabel = document.createElement("label");
    let t_shirtCheckbox = document.createElement("input");

    if (form.night.value > 10) {
        t_shirtLabel.innerHTML = `10 t-shirts`;
    } else if (form.night.value == 1) {
        t_shirtLabel.innerHTML = `${form.night.value} t-shirt`;
    } else {
        t_shirtLabel.innerHTML = `${form.night.value} t-shirts`;
    }

    t_shirtCheckbox.type = "checkbox";

    t_shirtDiv.appendChild(t_shirtCheckbox);
    t_shirtDiv.appendChild(t_shirtLabel);

    packingList.appendChild(t_shirtDiv);
};

const sweat = () => {
    let nb_sweats = 0;
    let pluriel = "s";

    if (form.night.value < 4) {
        nb_sweats = 1;
        pluriel = "";
    } else if (4 <= form.night.value <= 6) nb_sweats = 2;
    else nb_sweats = 3;

    let sweatDiv = document.createElement("div");

    let sweatLabel = document.createElement("label");
    let sweatCheckbox = document.createElement("input");
    sweatLabel.innerHTML = `${nb_sweats} pull${pluriel}`;
    sweatCheckbox.type = "checkbox";

    sweatDiv.appendChild(sweatCheckbox);
    sweatDiv.appendChild(sweatLabel);

    packingList.appendChild(sweatDiv);
};

const pantalon = () => {
    let nb_pantalon = 0;
    let pluriel = "s";

    if (form.night.value < 4) {
        nb_pantalon = 1;
        pluriel = "";
    } else if (4 <= form.night.value <= 6) nb_pantalon = 2;
    else nb_pantalon = 3;

    let pantalonDiv = document.createElement("div");

    let pantalonLabel = document.createElement("label");
    let pantalonCheckbox = document.createElement("input");
    pantalonLabel.innerHTML = `${nb_pantalon} pantalon${pluriel}`;
    pantalonCheckbox.type = "checkbox";

    pantalonDiv.appendChild(pantalonCheckbox);
    pantalonDiv.appendChild(pantalonLabel);

    packingList.appendChild(pantalonDiv);
};

const veste = () => {
    if (form.climate.value == "chaud") {
        let tongDiv = document.createElement("div");

        let tongLabel = document.createElement("label");
        let tongCheckbox = document.createElement("input");
        tongLabel.innerHTML = "Tongs/Claquettes";
        tongCheckbox.type = "checkbox";

        tongDiv.appendChild(tongCheckbox);
        tongDiv.appendChild(tongLabel);

        packingList.appendChild(tongDiv);
    } else {
        let vesteDiv = document.createElement("div");

        let vesteLabel = document.createElement("label");
        let vesteCheckbox = document.createElement("input");
        vesteLabel.innerHTML = "1 veste";
        vesteCheckbox.type = "checkbox";

        vesteDiv.appendChild(vesteCheckbox);
        vesteDiv.appendChild(vesteLabel);

        packingList.appendChild(vesteDiv);

        if (form.climate.value == "froid") {
            let gantDiv = document.createElement("div");

            let gantLabel = document.createElement("label");
            let gantCheckbox = document.createElement("input");
            gantLabel.innerHTML = "Gants et bonnet";
            gantCheckbox.type = "checkbox";

            gantDiv.appendChild(gantCheckbox);
            gantDiv.appendChild(gantLabel);

            packingList.appendChild(gantDiv);
        }
    }
};

const chaussure = () => {
    if (form.night.value > 6) {
        let chaussureDiv = document.createElement("div");

        let chaussureLabel = document.createElement("label");
        let chaussureCheckbox = document.createElement("input");
        chaussureLabel.innerHTML = "1 paire de chaussures";
        chaussureCheckbox.type = "checkbox";

        chaussureDiv.appendChild(chaussureCheckbox);
        chaussureDiv.appendChild(chaussureLabel);

        packingList.appendChild(chaussureDiv);
    }
};

const machine = () => {
    if (form.night.value > 10) {
        let machine = document.createElement("p");
        machine.innerHTML =
            "Si vous partez en voyage plus de 10 nuits, faites des machines. Voyagez léger";
        packingList.appendChild(machine);
    }
};

const changeButtons = () => {
    form.style.display = "none";
    submit.style.display = "none";

    restart.style.display = "block";
};
