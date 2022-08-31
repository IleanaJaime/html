
// Creo constructor de medicamentos, cada objeto y su array para luego poder optimizar

const medicamentos = []

fetch('./json/medicamentos.json')
.then(response => response.json())
.then((data) => {
    data.medicamentos.forEach((medicamento) => {
        medicamentos.push (new Medicamento(
            medicamento.id,
            medicamento.nombre,
            medicamento.droga,
            medicamento.precio,
            medicamento.comprimidos,
            medicamento.miligramos
        ))
    })
        imprimirMedicamentos(medicamentos)
})

const divmedicamentos = document.getElementById ("medicamentos")

class Medicamento{
    constructor(id, nombreComercial, nombreDroga, precio, comprimidos, miligramos,){
        this.id = id;
        this.nombreComercial = nombreComercial
        this.nombreDroga = nombreDroga
        this.precio = precio
        this.comprimidos = comprimidos
        this.miligramos = miligramos
    }
    
}

//const medicamento1 = new Medicamento(1, "onotran", "Olanzapina", 2270, 28, 5)
// const medicamento2 = new Medicamento(2, "onotran", "Olanzapina", 3775, 28, 10)
// const medicamento3 = new Medicamento(3, "onotran RAPID","Olanzapina odt", 2270, 28, 5)
// const medicamento4 = new Medicamento(4, "onotranRAPID","Olanzapina odt", 3775, 28, 10)
// const medicamento5 = new Medicamento(5, "kenantis","Quetiapina", 2046, 30, 25)
// const medicamento6 = new Medicamento(6, "kenantis","Quetiapina", 1095, 10, 100)
// const medicamento7 = new Medicamento(7, "kenantis","Quetiapina", 2946, 30, 100)
// const medicamento8 = new Medicamento(8, "kenantis","Quetiapina", 1363, 10, 200)
// const medicamento9 = new Medicamento(9, "kenantis","Quetiapina", 4008,30, 200)
// const medicamento10 = new Medicamento(10, "mixegan","Paroxetina", 1064,10, 20)
// const medicamento11 = new Medicamento(11, "mixegan","Paroxetina",1950,30, 20)
// const medicamento12 = new Medicamento(12, "dimena","Sertralina",1361,30, 50)
// const medicamento13 = new Medicamento(13, "dimena","Sertralina",2088,30, 100)
// const medicamento14 = new Medicamento(14, "elevopram","Escitalopram",1331,30, 10)
// const medicamento15 = new Medicamento(15, "elevopram","Escitalopram",1991,30, 20)
// const medicamento16 = new Medicamento(16, "lenepal","Citalopram",1307,30, 20)
// const medicamento17 = new Medicamento(17, "eufotina","Mirtazapina",2134,30, 30)
// const medicamento18 = new Medicamento(18, "epilacam","Topiramato",1491, 28 , 25)
// const medicamento19 = new Medicamento(19, "epilacam","Topiramato",2225, 28 , 100)
// const medicamento20 = new Medicamento(20, "axipel","Gabapentina",1652, 30 , 100)
// const medicamento21 = new Medicamento(21, "axipel","Gabapentina",1973, 30 , 300)
// const medicamento22 = new Medicamento(22, "axipel","Gabapentina",2811, 60 , 300)
// const medicamento23 = new Medicamento(23, "axipel","Gabapentina",2270, 30 , 400)
// const medicamento24 = new Medicamento(24, "acimed","Omeprazol",693, 15 , 20)
// const medicamento25 = new Medicamento(25, "acimed","Omeprazol",1789, 30 , 20)
// const medicamento26 = new Medicamento(26, "acimed","Omeprazol",895, 15 , 40)
// const medicamento27 = new Medicamento(27, "acimed","Omeprazol",1789, 30 , 40)
// const medicamento28 = new Medicamento(28, "acimed L","Lansoprazol",1384, 30 , 30)
// const medicamento29 = new Medicamento(29, "tarusol","Tamsulosina",1764, 30 , 0.4)
// const medicamento30 = new Medicamento(30, "tarusol","Tamsulosina",2772, 60 , 0.4)
// const medicamento31 = new Medicamento(31, "amoxol","Amoxicilina",290, 10 , 500)
// const medicamento32 = new Medicamento(32, "amoxol","Amoxicilina",549, 10 , 1000)
// const medicamento33 = new Medicamento(33, "amoxol DUO","Amoxicilina",428, 10 , 875)
// const medicamento34 = new Medicamento(34, "clamoxol DUO","AmoxicilinayAc.Clavulanico",879,10 ,875)
// const medicamento35 = new Medicamento(35, "clamoxol DUO","AmoxicilinayAc.Clavulanico",879,10 ,125)
// const medicamento36 = new Medicamento(36, "clamoxol DUO","AmoxicilinayAc.Clavulanico",1230,14 ,125)
// const medicamento37 = new Medicamento(37, "clamoxol DUO","AmoxicilinayAc.Clavulanico",1230,14 ,875)
// const medicamento38 = new Medicamento(38, "cotrimox","SulfametoxazolyTrimetroprima",596,20 ,400)
// const medicamento39 = new Medicamento(39, "cotrimox FORTE","SulfametoxazolyTrimetroprima",536,10,800)
// const medicamento40 = new Medicamento(40, "azitral","Azitromicina",602,3 ,500)
// const medicamento41 = new Medicamento(41, "azitral","Azitromicina",1028,6,500)
// const medicamento42 = new Medicamento(42, "cipromed","Ciprofloxacina",554,10 ,500)
// const medicamento43 = new Medicamento(43, "cipromed","Ciprofloxacina",1107,20 ,500)
// const medicamento44 = new Medicamento(44, "floxatral","Norfloxacina",332,10 ,400)
// const medicamento45 = new Medicamento(45, "floxatral","Norfloxacina",664,20 ,400)
// const medicamento46 = new Medicamento(46, "metral","Metronidazol",224, 5 ,500)
// const medicamento47 = new Medicamento(47, "metral","Metronidazol",268,10 ,500)
// const medicamento48 = new Medicamento(48, "rifalep","Rifampicina",681,8, 300)
// const medicamento49 = new Medicamento(49, "rifalepPLUS","RifampicinayIsoniacida",2922, 32 , 150)
// const medicamento50 = new Medicamento(50, "penoral","Fenoximetilpenicilina",977,18 ,1000000)
// const medicamento51 = new Medicamento(51, "penoral","Fenoximetilpenicilina",1465,18 ,1500000)
// const medicamento52 = new Medicamento(52, "polilep","CandesartanHiprocloroyRosu",1991,30 ,16/12.5/10)
// const medicamento53 = new Medicamento(53, "polilep","CandesartanHiprocloroyRosu",3883,60 ,16/12.5/10)
// const medicamento54 = new Medicamento(54, "valsalep","Valsartan",1048,30 ,80)
// const medicamento55 = new Medicamento(55, "valsalep","Valsartan",2096,60 ,80)
// const medicamento56 = new Medicamento(56, "valsalep","Valsartan",1509,30 ,160)
// const medicamento57 = new Medicamento(57, "valsalep","Valsartan",3017,60 ,160)
// const medicamento58 = new Medicamento(58, "prisonil","LosartanPotasico",443,15 ,50)
// const medicamento59 = new Medicamento(59, "prisonil","LosartanPotasico",886,30 ,50)
// const medicamento60 = new Medicamento(60, "prisonil","LosartanPotasico",1772,60 ,50)
// const medicamento61 = new Medicamento(61, "prisonil","LosartanPotasico",1162,30 ,100)
// const medicamento62 = new Medicamento(62, "prisonil","LosartanPotasico",2325,60 ,100)
// const medicamento63 = new Medicamento(63, "biprosol","Bisoprolol",1176,30 ,5)
// const medicamento64 = new Medicamento(64, "biprosol","Bisoprolol",1467,30 ,10)
// const medicamento65 = new Medicamento(65, "vedilep","Carvedilol",476,28 ,6.25)
// const medicamento66 = new Medicamento(66, "vedilep","Carvedilol",543,28 ,12.5)
// const medicamento67 = new Medicamento(67, "vedilep","Carvedilol",786,28 ,25)
// const medicamento68 = new Medicamento(68, "clopilep","Clopidogrel",746,15 ,75)
// const medicamento69 = new Medicamento(69, "clopilep","Clopidogrel",1492,30 ,75)
// const medicamento70 = new Medicamento(70, "clopilep","Clopidogrel",2984,60 ,75)
// const medicamento71 = new Medicamento(71, "rosux","Rosuvastatina",1078,30 ,5)
// const medicamento72 = new Medicamento(72, "rosux","Rosuvastatina",1396,30 ,10)
// const medicamento73 = new Medicamento(73, "rosux","Rosuvastatina",2041,30 ,20)
// const medicamento74 = new Medicamento(74, "normolipol","Atrovastatina",1066,30 ,10)
// const medicamento75 = new Medicamento(75, "normolipol","Atrovastatina",2132,60 ,10)
// const medicamento76 = new Medicamento(76, "normolipol","Atrovastatina",1380,30 ,20)
// const medicamento77 = new Medicamento(77, "normolipol","Atrovastatina",2761,60 ,20)
// const medicamento78 = new Medicamento(78, "normolipol","Atrovastatina",2018,30 ,40)
// const medicamento79 = new Medicamento(79, "normolipol","Atrovastatina",4036,60 ,40)
// const medicamento80 = new Medicamento(80, "furotral","Furosemida",365,30 ,40)//






// const medicamentos = [medicamento1, medicamento2, medicamento3, medicamento4, medicamento5, medicamento6,
// medicamento7,medicamento8,medicamento9,medicamento10,medicamento11,medicamento12,medicamento13,medicamento14,
// medicamento15,medicamento16,medicamento17,medicamento18,medicamento19,medicamento20,medicamento21,medicamento22,
// medicamento23,medicamento24,medicamento25,medicamento26,medicamento27,medicamento28,medicamento29,medicamento30,
// medicamento31,medicamento32,medicamento33,medicamento34,medicamento35,medicamento36,medicamento37,medicamento38,
// medicamento39,medicamento40,medicamento41,medicamento42,medicamento43,medicamento44,medicamento45,medicamento46,
// medicamento47,medicamento48,medicamento49,medicamento50,medicamento51,medicamento52,medicamento53,medicamento54,
// medicamento55,medicamento56,medicamento57,medicamento58,medicamento59,medicamento60,medicamento61,medicamento62,
// medicamento63,medicamento64,medicamento65,medicamento67,medicamento68,medicamento69,medicamento70,medicamento71,
// medicamento72,medicamento73,medicamento74,medicamento75,medicamento76,medicamento77,medicamento78,medicamento79,
// medicamento80]



// Inserto HTML creando una plantilla de texto para ahorrar codigo.
function imprimirMedicamentos(array){
array.forEach( MedicamentoArray => {
    divmedicamentos.innerHTML += `
    <div class="cardMedicamentos p-1 rounded" id="Medicamento${MedicamentoArray.id}" style="width: 18rem;">
    <div class="card-body"> 
    <h5 href ="#" class="btn btn-tittle"> NOMBRE ${MedicamentoArray.nombreComercial}</h5>
    <p class="card-text"> ${MedicamentoArray.nombreDroga}</p>
    <p class="card-text"> Comp. ${MedicamentoArray.comprimidos}</p>
    <p class="card-text"> Mg. ${MedicamentoArray.miligramos}</p>
    <a class="card-text"> $ ${MedicamentoArray.precio}</a>
    </div>
</div>
    `
})}

// imprimirMedicamentos(medicamentos)

// Creo el buscador.
const buscador = document.getElementById ("buscador")

buscador.addEventListener("keyup", (e) => {
    divmedicamentos.innerHTML = ""
    let filtrado = []

//Optimizo el If y Array utilizando &&
    medicamentos.forEach((medicamento) => {
        medicamento.nombreComercial.includes(e.target.value) && filtrado.push(medicamento)
        
        }
    )
    console.log(e.target.value)

imprimirMedicamentos(filtrado)
localStorage.setItem("medicamentos", medicamentos)})

//Agregando libreria (sweet alert)
Swal.fire({
    icon: 'info',
    title: 'BIENVENIDO/A A NUESTRO VADEMECUM',
    text: 'En este sitio web encontraras todos nuestros medicamentos de venta bajo receta!',
})

const divquienessomos = document.getElementById ("quienessomos")
const divencontranos = document.getElementById ("encontranos")
