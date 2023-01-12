const nome = document.getElementById('nome');
const exec = document.getElementById('exec');
const valor = document.getElementById('valor');
const parcela = document.getElementById('parcela');
const entrada = document.getElementById('entrada');


const today = new Date();
const data = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const res = document.getElementById('res')

const prospectar = (event) => {
    event.preventDefault();
    const nomeValue = nome.value;
    const execValue = exec.value;
    const valorValue = valor.value;
    const parcelaValue = parcela.value;
    const entradaValue = entrada.value;

    const dataValue = data.value;
    const timeValue = time.value;

    const txt = `
    Data: ${data} Hora: ${time}  
    Cliente: ${nomeValue}
    Executada: ${execValue}
    Valor: ${valorValue}
    Entrada: ${entradaValue}
    Parcelas: ${parcela}
    
    `
    res.innerHTML = `
   <br> Data: ${data} Hora: ${time} </br>  
   <br> Cliente: ${nomeValue} </br>
   <br> Executada: ${execValue} </br>
   <br> Valor: R$${valorValue} </br>
   <br> Entrada: R$${entradaValue} </br>
   <br> Parcela: ${parcelaValue}x </br>
    `
    //Linha de código que faz a impressão da prospecção em arquivo txt.
    //const blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
    //saveAs(blob, "prospecto.txt");


    const calc1 = valorValue - entradaValue;
    res.innerHTML += `<br> Valor a parcelar é de R$ ${calc1} .</br>`
    const calc2 = calc1 / parcelaValue;
    res.innerHTML += `O valor das parcelas será de ${parcelaValue}x de R$ ${calc2}`

    function divideInParcels(totalParcels, startDate = new Date(), elementId) {
        if (totalParcels < 1) {
            throw new Error("The total number of parcels must be greater than 0");
        }
    
        let date = new Date(startDate);
        date.setDate(1);
        let parcelDates = [];
        for (let i = 1; i <= totalParcels; i++) {
            if(date.getDate() > 1) {
                date.setMonth(date.getMonth() + 1);
            }
            parcelDates.push(new Date(date));
        }
    
        let element = document.getElementById(elementId);
        if (element === null) {
            throw new Error(`No element was found with the ID of ${elementId}`);
        }
        let html = '';
        parcelDates.forEach((parcelDate) => {
            let dateStr = parcelDate.toLocaleDateString();
            html += `<div>${dateStr}</div>`;
        });
        res.innerHTML += html;

    }
    divideInParcels(parcelaValue);
}






