class Medicamento{
    constructor(id, nombreComercial, nombreDroga, precio, comprimidos){
        this.id = id;
        this.nombreComercial = nombreComercial
        this.nombreDroga = nombreDroga
        this.precio = precio
        this.comprimidos = comprimidos
    }
    
}

const medicamento1 = new Medicamento(1, "penoral", "Fenoximetilpenicilina", 1000, 18)
const medicamento2 = new Medicamento(2, "amoxolduo", "Amoxicilina", 500, 10)
const medicamento3 = new Medicamento(3, "clamoxolduo","AmoxicilinayÁcidoclavulánico", 600, 10)
const medicamento4 = new Medicamento(4, "cotrimox","SulfametoxazolyTrimetoprima", 300, 20)
const medicamento5 = new Medicamento(5, "azitral","Azitromicina", 450, 6)

const medicamentos = [medicamento1, medicamento2, medicamento3, medicamento4, medicamento5]

const divmedicamentos = document.getElementById ("medicamentos")


function imprimirMedicamentos(array){
array.forEach( MedicamentoArray => {
    divmedicamentos.innerHTML += `
    <div class="cardMedicamentos p-1 rounded" id="Medicamento${MedicamentoArray.id}" style="width: 18rem;">
    <div class="card-body"> 
    <h5 href ="#" class="btn btn-tittle"> ${MedicamentoArray.nombreComercial}</h5>
    <p class="card-text"> ${MedicamentoArray.nombreDroga}</p>
    <p class="card-text"> Comp. ${MedicamentoArray.comprimidos}</p>
    <a class="card-text"> $ ${MedicamentoArray.precio}</a>
    </div>
</div>
    `
})}

imprimirMedicamentos(medicamentos)

const buscador = document.getElementById ("buscador")

buscador.addEventListener("keyup", (e) => {
    divmedicamentos.innerHTML = ""

    let filtrado = []

    medicamentos.forEach((medicamento) => {
        medicamento.nombreComercial.includes(e.target.value) && filtrado.push(medicamento)
        
        }
    )
    console.log(e.target.value)

imprimirMedicamentos(filtrado)
localStorage.setItem("medicamentos", medicamentos)})