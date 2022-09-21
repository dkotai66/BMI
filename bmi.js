

function testtomegindex(){
    let magassag = parseFloat(document.getElementById("magassag").value);
    let suly = parseFloat(document.getElementById("suly").value);
    let bmieredmeny = suly / (magassag / 100) ** 2;
    let szelso_also = 18.5 * (magassag / 100) ** 2
    let szelso_felso = 24.9 * (magassag / 100) ** 2
    let idealistestsuly = magassag - 100; //én így emlékszem 
    document.getElementById("bmiertek").textContent =  bmieredmeny;
   
    if(bmieredmeny<18.5){
        document.getElementById("sovany").style.backgroundColor= '#c98344';
    }
    else if(bmieredmeny>=18.5 && bmieredmeny<=24.9){
        document.getElementById("normal").style.backgroundColor= '#c98344';
    }
    else if(bmieredmeny>=25 && bmieredmeny<=29.9){
        document.getElementById("tulsuly").style.backgroundColor= '#c98344';
    }
    else if(bmieredmeny>=30 && bmieredmeny<=34.9){
        document.getElementById("elsofoku").style.backgroundColor= '#c98344';
    }
    else if(bmieredmeny>=35 && bmieredmeny<=39.9){
        document.getElementById("masodikfoku").style.backgroundColor= '#c98344';
    }
    else if(bmieredmeny>=40){
        document.getElementById("harmadikfoku").style.backgroundColor= '#c98344';
    }

    document.getElementById("kivanatossuly").textContent = szelso_also.toFixed()+"-"+szelso_felso.toFixed();
    document.getElementById("idealistesttomeg").textContent = idealistestsuly + "kg";
}

document.getElementById("bekuld").addEventListener("click", testtomegindex)