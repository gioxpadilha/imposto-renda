document.querySelector('#button').onclick = function() {


    //Variaveis
    let nome = document.querySelector('.campo_nome').value;
    let salario_bruto = document.querySelector('.campo_renda').value;
    let desconto_INSS;
    let porcentagem_INSS;
    let porcentagem_IRPF;
    let desconto_IRPF;


    if (nome == "" || salario_bruto == "") {
        window.alert("Preencha os Campos para Enviar.");
    } else {
        //Imposto INSS
        if (salario_bruto <= 1659.38) {
            porcentagem_INSS = 0.08;
            desconto_INSS = salario_bruto * porcentagem_INSS;
        } else if (salario_bruto >= 1659.39 && salario_bruto <= 2765.66) {
            porcentagem_INSS = 0.09;
            desconto_INSS = salario_bruto * porcentagem_INSS;
        } else if (salario_bruto >= 2765.67 && salario_bruto <= 5531.31) {
            porcentagem_INSS = 0.11;
            desconto_INSS = salario_bruto * porcentagem_INSS;
        } else {
            salario_bruto
            porcentagem_INSS = "Valor Fixo";
            desconto_INSS = 604.44;
        }

        //Imposto IRPF
        if (salario_bruto <= 1903.98) {
            porcentagem_IRPF = 0;
            desconto_IRPF = 0;
        } else if (salario_bruto >= 1903.99 && salario_bruto <= 2826.65) {
            porcentagem_IRPF = 0.075;
            desconto_IRPF = (salario_bruto - desconto_INSS) * porcentagem_IRPF;
        } else if (salario_bruto >= 2826.66 && salario_bruto <= 3751.05) {
            porcentagem_IRPF = 0.15;
            desconto_IRPF = (salario_bruto - desconto_INSS) * porcentagem_IRPF;
        } else if (salario_bruto >= 3751.06 && salario_bruto <= 4664.68) {
            porcentagem_IRPF = 0.225;
            desconto_IRPF = (salario_bruto - desconto_INSS) * porcentagem_IRPF;
        } else {
            porcentagem_IRPF = 0.275;
            desconto_IRPF = (salario_bruto - desconto_INSS) * porcentagem_IRPF;
        }

        document.querySelector("#tabela").style.display = "block";
        document.querySelector("#pessoas").style.display = "block";

        const tabela_nome = document.createElement("td");
        tabela_nome.innerText = nome;
        document.querySelector("#tab").appendChild(tabela_nome);

        const tabela_salariob = document.createElement("td");
        tabela_salariob.innerText = salario_bruto;
        document.querySelector("#tab").appendChild(tabela_salariob);

        const tdesconto_INSS = document.createElement("td");
        if (porcentagem_INSS == "Valor Fixo") {
            tdesconto_INSS.innerText = porcentagem_INSS
        } else {
            tdesconto_INSS.innerText = Number(porcentagem_INSS * 100).toFixed(2);
        }
        document.querySelector("#tab").appendChild(tdesconto_INSS);

        const vdesconto_INSS = document.createElement("td");
        vdesconto_INSS.innerText = Number(desconto_INSS).toFixed(2);
        document.querySelector("#tab").appendChild(vdesconto_INSS);

        const tdesconto_IRPF = document.createElement("td");
        tdesconto_IRPF.innerText = Number(porcentagem_IRPF * 100).toFixed(2);
        document.querySelector("#tab").appendChild(tdesconto_IRPF);

        const vdesconto_IRPF = document.createElement("td");
        vdesconto_IRPF.innerText = Number(desconto_IRPF).toFixed(2);
        document.querySelector("#tab").appendChild(vdesconto_IRPF);

        const salario_liquido = document.createElement("td");
        salario_liquido.innerText = Number(salario_bruto - desconto_INSS - desconto_IRPF).toFixed(2);
        document.querySelector("#tab").appendChild(salario_liquido);

        let linha = document.createElement("tr");
        document.querySelector("#tab").appendChild(linha);

        document.querySelector('.campo_nome').value = "";
        document.querySelector('.campo_renda').value = "";

    }

    document.querySelector('#clean').onclick = function() {

        window.location.reload()


    }


}
