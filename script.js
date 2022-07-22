class Medicamento{
    constructor(id, nombreComercial, nombreDroga, precio, comprimidos){
        this.id = id;
        this.nombreComercial = nombreComercial
        this.nombreDroga = nombreDroga
        this.precio = precio
        this.comprimidos = comprimidos
    }
    
}

const medicamento1 = new Medicamento("penoral", "Fenoximetilpenicilina", 1000, 18)
const medicamento2 = new Medicamento("amoxolduo", "Amoxicilina", 500, 10)
const medicamento3 = new Medicamento("clamoxolduo","AmoxicilinayÁcidoclavulánico", 600, 10)
const medicamento4 = new Medicamento("cotrimox","SulfametoxazolyTrimetoprima", 300, 20)
const medicamento5 = new Medicamento("azitral","Azitromicina", 450, 6)

const medicamentos = [medicamento1, medicamento2, medicamento3, medicamento4, medicamento5]

const divmedicamentos = document.getElementById ("medicamentos")

medicamentos.forEach( MedicamentoArray => {
    divmedicamentos.innerHTML += `
    <div class="cardMedicamentos p-1 rounded" id="Medicamento${MedicamentoArray.id}" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title"> Nombre ${MedicamentoArray.nombreComercial}</h5>
    <p class="card-text"> Droga ${MedicamentoArray.nombreDroga}</p>
    <p class="card-text">  ${MedicamentoArray.comprimidos}</p>
    <a href="#" class="btn btn-warning"> $${MedicamentoArray.precio}</a>
    </div>
</div>
    `
})

const boton1 = document.getElementById ("boton1")

boton1.addEventListener("click", () => {
    console.log ("di click")
})