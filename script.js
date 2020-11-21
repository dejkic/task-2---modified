function myFunc(elem) {
    var matrix = [];
    //kreairanje i inicijalizacija matrice
    for (var i = 0; i < 10; i++) {
        matrix[i] = new Array(10);
        for (var j = 0; j < 10; j++) {
            matrix[i][j] = i * 10 + j + 1;
        }
    }

    var suma = 0;
    var index1 = -1;
    var index2 = -1;

    //pronaci indekse elementa
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (elem == matrix[i][j]) {
                index1 = i;
                index2 = j;
            }
        }
    }

    var numbersAround = [];
    var numbersAroundIndex = 0;
    //sumiranje
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if ((index1 - i >= -1 && index1 - i <= 1) && (index2 - j >= -1 && index2 - j <= 1)) {
                suma += matrix[i][j];
                if(elem != matrix[i][j])
                    numbersAround[numbersAroundIndex++] = matrix[i][j];
            }
        }
    }
    //console.log(suma);
    document.getElementById("content").innerHTML = generateMatrixHTML(matrix, numbersAround, elem);
    document.getElementById("popuni").innerHTML="Suma elemenata: "+suma;
}

//generisanje html koda za matricu
function generateMatrixHTML(matrix, numbersAround, target) {
    let html = "";
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            html += "<span style='margin-right:10px; display: inline-block; width: 25px; height: 25px; text-align: center; padding: 5px; font-family: Arial";
            if(numbersAround.includes(matrix[i][j]))
                html+="; background-color:red; color: white; border: 1px solid black; border-radius: 7%;"
            else if(target == matrix[i][j])
                html += "; background-color: green; color: white; border: 1px solid black; border-radius: 7%;"
            html += "'>" + matrix[i][j] + "</span>";
        }
        html += "<br>";
    }

    return html;
}

//myFunc(47);
// myFunc(100);
//myFunc(45);


//dobijanje rezultata sumiranja na klik
function BtnClick() {
    var x=document.getElementById("unosBrojeva").value;
    myFunc(x);
}