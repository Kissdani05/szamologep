function muveletek(muvelet) {
    var elsoszam = document.getElementById("elsoszam").value;
    var masodikszam = document.getElementById("masodikszam").value;
    if (muvelet=="+") {
        document.getElementById('eredmeny').innerHTML = parseFloat(elsoszam) + parseFloat(masodikszam);
    }
    else if (muvelet=="-") {
        document.getElementById('eredmeny').innerHTML = elsoszam - masodikszam;
    }
    else if (muvelet=="*") {
        document.getElementById('eredmeny').innerHTML = elsoszam * masodikszam;
    }   
    else {
        document.getElementById('eredmeny').innerHTML = elsoszam / masodikszam;
    }
}