//FONTE PRETA
function styleFormatDisable(){
    let arrayInput      = document.getElementsByTagName("input");
    let arraySpan       = document.getElementsByTagName("span");
    let arraySelect     = document.getElementsByTagName("select");
    let arrayP          = document.getElementsByTagName("p");
    let arrayTextA      = document.getElementsByTagName("textarea");
    //let arrayStrong     = document.getElementsByTagName("strong");
    let arrayTotal  = [arrayInput, arraySpan, arraySelect, arrayP, arrayTextA/*, arrayStrong*/];
    for(i = 0; i < arrayTotal.length; i++){
        let arrayGo = arrayTotal[i];
        for(y = 0; y < arrayGo.length; y++){
            if(arrayGo[y].getAttribute("class") != "fluigicon fluigicon-zoom-in" && arrayGo[y].getAttribute("class") != "input-group-addon"
            && arrayGo[y].getAttribute("class") != "select2-selection__choice__remove" && arrayGo[y].getAttribute("class") != "Obrigatorio"){
                //console.log(arrayGo[y].getAttribute("class"))
                arrayGo[y].style.color = "black";
            }
        }
    }
}
function controllerTime(){ setTimeout(styleFormatDisable, 200); }
window.addEventListener("load", controllerTime);


// VERIFICA QUESTIONARIO DA UGP
function verifcheck(){
    for(var i = 1;i<=7;i++){
        var ids = "q"+i+"_s"
        var idn = "q"+i+"_n"
        if((document.getElementById(ids).checked)&&(document.getElementById(idn).checked)){
            document.getElementById("q"+i+"_s").checked = false;
            document.getElementById("q"+i+"_n").checked = false;

            if(i==4){
                document.getElementById('qts').style.display = 'none';
            }
              //{
                   /*if((document.getElementById("q"+i).checked)){
                        document.getElementById("q"+i+"_s").checked = false;
                        document.getElementById("q"+i+"_n").checked = false;*/
                    //}
                //}
        }else if(i==2 || i==3){
            if(((document.getElementById(ids).checked)&&(document.getElementById("q"+i).checked))||((document.getElementById(idn).checked)&&(document.getElementById("q"+i).checked))){
                document.getElementById("q"+i+"_s").checked = false;
                document.getElementById("q"+i+"_n").checked = false;
                document.getElementById("q"+i).checked = false
            }
        }
    }
}

//SOMAR VALORES
function somar(){
    var fields = ['txt_vinscricao','txt_diarias','txt_passagens','valor']
    var insc = document.getElementById('inscritos').value   
    var soma = 0


    if(document.getElementById('valor').value == ''){
        fields.pop()
        console.log(fields)
        for(var i=0;i<fields.length;i++){
            var myArray = document.getElementById(fields[i]).value
            myArray = myArray.replace(".","")
            myArray = myArray.replace(",","." )
            var valor = parseFloat(myArray)
            console.log(valor)
            soma = (soma+valor)
            console.log(soma)
        }
    }
    else{
        for(var i=0;i<fields.length;i++){
            console.log(fields)
            var myArray = document.getElementById(fields[i]).value
            myArray = myArray.replace(".","")
            myArray = myArray.replace(",","." )
            var valor = parseFloat(myArray)
            console.log(valor)
            soma = soma+valor
            console.log(soma)
        }
    }
    var vinsc = document.getElementById("txt_vinscricao").value
    vinsc = vinsc.replace(".","")
    vinsc = vinsc.replace(",","." )
    var invest = parseFloat(insc)*parseFloat(vinsc);
    console.log("investimento: "+invest);
    
    
    var Now = window.parent.ECM.workflowView.sequence
    //if(Now>=67){
        if(soma == 'NaN'){
            /*
            document.getElementById('_txt_vtotal').value = "0,00";
            document.getElementById("_investimento").value = "0,00"
            */
            document.getElementById('txt_vtotal').value = "0,00";
            document.getElementById("investimento").value = "0,00"
        }
        else{
            var cvtsoma = moeda.formatar(soma*insc) 
            var cvtinvest = moeda.formatar(invest)
            /*
            document.getElementById('_txt_vtotal').value = cvtsoma
            document.getElementById("_investimento").value = cvtinvest
            */
            document.getElementById('txt_vtotal').value = cvtsoma
            document.getElementById("investimento").value = cvtinvest
        }
    //}
    
}
window.addEventListener("load", somar);

// TROCA PAINEIS = ESCONDE-ESCONDE DE INPUTS
function verificacao(){
    var tipo = document.getElementById('tp_solicitacao').value
    solocit(tipo)
    document.getElementById('tp_solicitacao').addEventListener('change', function(){
        if(document.getElementById('txt_vtotal').value == 'NaN'){
            document.getElementById('txt_vtotal').value = "carregando ...";
        }
        var tp = this.value
        solocit(tp)
        limpar()
        qtd_paticipantes()
    });

    var locali = document.getElementById('cidade').checked;
    localidades(locali)
    document.getElementById('cidade').addEventListener('click', function(){
        var lcldd = this.checked
        localidades(lcldd)
    });

    var desp = document.getElementById('despesa').checked;
    despesas(desp)
    document.getElementById('despesa').addEventListener('click', function(){
        var ds = this.checked
        despesas(ds)
    });
    
    var qnts = document.getElementById('q4_s').checked;
    qt(qnts)
    document.getElementById('q4_s').addEventListener('change', function(){
        var qts = this.checked
        qt(qts)
    })

    var botao = document.querySelectorAll('tbody')[0].childNodes[0].childNodes[0].childNodes[0]
    botao.addEventListener('click', function(){
        console.log('botao clicado')
    });

    var mercado = document.getElementById('TipoEvento').value
    tp_mercaddo(mercado)
    document.getElementById('TipoEvento').addEventListener('change',function(){
        var tpmc = this.value
        tp_mercaddo(tpmc)
        qtd_paticipantes()
    });
    /*console.log(document.getElementById("txt_termino"))
    document.getElementById("txt_termino").addEventListener('change', function(){
        console.log("testes entrou")
        //alertaData();
    });*/
    
}
window.addEventListener("load", verificacao);

function alertaData(){
    var Now = window.parent.ECM.workflowView.sequence

    if(Now==0||Now==4||Now==66){
        var dateFIm = document.getElementById("txt_termino").value;
        var data = dateFIm.split("/");
        dateFIm = data[2]+"-"+data[1]+"-"+data[0];
        var termino =document.getElementById("txt_termino").value
        console.log(termino)
        if(termino!=""){
            console.log("if")
            var prazo = new Date(dateFIm.toString());
            prazo.setDate(prazo.getDate()+91);
            document.getElementsByClassName("ALERTA")[0].innerHTML = "<strong>ATENÇÃO</strong>! O prazo para o envio do <u>Certificado</u>, do <u>Questionário de Avaliação de Eficácia</u> e <u>Relatório de Compartilhamento de Conhecimento</u> é até <strong>" +(prazo.getDate()+'-'+(prazo.getMonth()+1)+'-'+prazo.getFullYear())+"</strong>.";
            document.getElementById("prazo").value = (prazo.getFullYear()+'-'+(prazo.getMonth()+1)+'-'+prazo.getDate());
            document.getElementById("alertDate").style.display = "block";
        }
        else{
            console.log("else")
            document.getElementsByClassName("ALERTA")[0].innerHTML = "<strong>ATENÇÃO</strong>! O prazo para o envio do <u>Certificado</u>, do <u>Questionário de Avaliação de Eficácia</u> e <u>Relatório de Compartilhamento de Conhecimento</u> é até <strong>90 dias</strong> após o término do evento.";
            document.getElementById("alertDate").style.display = "block";
        }
    }
    else if(Now==84){
        var data = (document.getElementById("prazo").value).split("-") 
        document.getElementsByClassName("ALERTA")[0].innerHTML = "<strong>ATENÇÃO</strong>! O prazo para o envio do <u>Certificado</u>, do <u>Questionário de Avaliação de Eficácia</u> e <u>Relatório de Compartilhamento de Conhecimento</u> é até <strong>"+data[2]+"/"+data[1]+"/"+data[0]+"</strong>.";
        document.getElementById("alertDate").style.display = "block";
    }

}
window.addEventListener("load",alertaData)

function tp_mercaddo(tp){
    if(tp=='Individual'){
        document.getElementById('Listacompany').style.display = 'none';
        document.getElementById('atividade').style.display = 'block';
    }
    else if(tp=='Em Grupo'){
        document.getElementById('Listacompany').style.display = 'block';
        document.getElementById('atividade').style.display = 'none';
    }
    else{
        document.getElementById('Listacompany').style.display = 'none';
        document.getElementById('atividade').style.display = 'none';
    }
}

function solocit(tipo){
    if(tipo == 'mercado'){
        document.getElementById('mercad').style.display = 'block';
        document.getElementById('ugp_inmercado').style.display = 'block';
        document.getElementById('company').style.display = 'none';
    }
    else if(tipo == 'in company'){
        document.getElementById('mercad').style.display = 'none';
        document.getElementById('ugp_inmercado').style.display = 'none';
        document.getElementById('company').style.display = 'block';
        document.getElementById('Listacompany').style.display = 'none';
    }
    else{
        document.getElementById('mercad').style.display = 'none';
        document.getElementById('ugp_inmercado').style.display = 'none';
        document.getElementById('company').style.display = 'none';
    }
}

// BLOQUEIA LETRAS NO CAMPO
function  onlynumber(evt){
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
}
window.addEventListener('load',onlynumber)

// MASCARA DO CNPJ
function maskcnpj(){
    var cnpj = document.getElementById('txt_cnpj').value
    var mask = cnpj.replace(/\D/g,"") //Remove tudo o que não é dígito
    mask=mask.replace(/^(\d{2})(\d)/,"$1.$2")             //Coloca ponto entre o segundo e o terceiro dígitos
    mask=mask.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
    mask=mask.replace(/\.(\d{3})(\d)/,".$1/$2")           //Coloca uma barra entre o oitavo e o nono dígitos
    mask=mask.replace(/(\d{4})(\d)/,"$1-$2")
    
    document.getElementById('txt_cnpj').value = mask
}
window.addEventListener('load',maskcnpj)

function localidades(lcldd){
    if(lcldd){
        document.getElementById('localidade').value = 'Manaus/AM'
    }
}

function qt(qts){
    if(qts){
        document.getElementById('qts').style.display = 'block';
    }
    else if(!qts){
        document.getElementById('qts').style.display = 'none';
    }
}

function despesas(ds){
    if(ds){
        document.getElementById('outras_despesas').style.display = 'block';
    }    
    else if(!ds){
        document.getElementById('outras_despesas').style.display = 'none';
        somar()
    }
}

function limpar(){
    var fields = ["ta_atividades","pb_alvo","TipoEvento"]

    for(var i=0;i<fields.length;i++){
        document.getElementById(fields[i]).value = '';
    }
}

// MOSTRA A QUANTIDADE DE PARTICIPANTES AUTOMATICAMENTE
function qtd_paticipantes(){

    var evento = document.getElementById('tp_solicitacao').value
    var natureza = document.getElementById('TipoEvento').value
    var insc = document.getElementById('Lista_Part').tBodies[0].rows.length
    console.log(insc)

    if(evento == 'mercado'){
        if(natureza == 'Individual'){
            document.getElementById('inscritos').value = '1'
            document.getElementById('inscritos').readOnly = true
        }else if(natureza=='Em Grupo'){
            document.getElementById('inscritos').value = insc-1
            document.getElementById('inscritos').readOnly = true
        }
    }
    else if(evento=='in company'){
        document.getElementById('inscritos').readOnly = false
    }
    somar()
}

// FOMARTA VALORES DE MOEDAS
function formatarMoeda(elem) {
	var id = elem.id
	var valor = moeda.desformatar(elem.value)
	var valorDif = moeda.formatar(valor)
	document.getElementById(id).value = valorDif
}

var moeda = {
    desformatar: function(num) {
        num = num.replace(/\./g, "");
        num = num.replace(/\,/g, ".");
        return parseFloat(num);
    },
    formatar: function(num) {
        x = 0;
        if (num<0) {
            num = Math.abs(num);
            x = 1;
        }
        if (isNaN(num)) num = "0";
        cents = Math.floor((num*100+0.5)%100);
        num = Math.floor((num*100+0.5)/100).toString();
        if (cents < 10) cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
            num = num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));
        ret = num + ',' + cents;
        if (x == 1) ret = ' – ' + ret;
        return ret;
    },
    arredondar: function(num) {
        return Math.round(num*Math.pow(10,2))/Math.pow(10,2);
    }
}

// FORMATA MOEDAS 
function formataCasasDecimais(valor) {
    valor = "" + valor;

    if (valor.lastIndexOf(".") == -1) {
        valor = valor + ".00";
    }
    else {
        var casasDecimais = valor.substring(valor.lastIndexOf(".") + 1, valor.length);
        if (casasDecimais.length > 2)
            casasDecimais = casasDecimais.substring(0, 2);
        else {
            while (casasDecimais.length < 2) {
                casasDecimais = casasDecimais + "0";
            }
        }
        valor = valor.substring(0, valor.lastIndexOf(".") + 1) + casasDecimais;
    }

    return valor;
}

// VERIFICA SALDO DO PROJETO
function verifc() {
    var tabela_itens = document.getElementById("dados");
    var itens = tabela_itens.getElementsByTagName("input");
    var valorTotal = 0;
    for (var i = 0; i < itens.length; i++){
        if (itens[i].id != null && itens[i].id.indexOf("txt_Valor___") != -1){
            valorTotal += parseFloat(itens[i].value);
        }       
    }
    var Total = document.getElementById("txt_saldo").value;
    document.getElementById("txt_ValorTotal").value = valorTotal; 
    console.log(Math.floor(valorTotal))
    console.log(Math.floor(Total))
    if(Math.floor(Total) >= Math.floor(valorTotal)){
        document.getElementById("txt_saldo").style = "background-color:#86dc9c";
    }
    else {document.getElementById("txt_saldo").style = "background-color:#ea8989"};

}

// DINAMIZA DOTAÇÃO
function setSelectedZoomItem(selectedItem) 
{
    
    //ok
    if(selectedItem.inputId == "txt_projeto")
    {
        $('#codProjeto').val(selectedItem.CODCCUSTO);
        atualizaZoomFilterAcao(selectedItem.CODCCUSTO);
    }

    //ok
    if(selectedItem.inputId == "txt_acao")
    {
        $('#codAcao').val(selectedItem.CODACAO);
        var codProjeto = $('#codProjeto').val();
        atualizaZoomFilterRecursos(codProjeto, selectedItem.CODACAO);
        
        buscaSaldo(document.getElementById("codProjeto"),document.getElementById("codAcao"))

    }
    
}window.addEventListener('load',setSelectedZoomItem)

function removedZoomItem(removedItem) 
{
    if(removedItem.inputId.startsWith('txt_projeto'))
    {
        $("#txt_acao").val();
        $("#txt_recursos").val();
        
        $("#codProjeto").val();
        $("#codAcao").val();
        $("#codRecurso").val();
    }
}   

function atualizaZoomFilterAcao(codProjeto)
{
    reloadZoomFilterValues("txt_acao", "txt_projeto,"+codProjeto);
}

function atualizaZoomFilterRecursos(codProjeto, codAcao)
{
    reloadZoomFilterValues("txt_recursos", "txt_projeto,"+codProjeto+",txt_acao,"+codAcao);
}

// BUSCA SALDO DO PROJETO
function buscaSaldo(projeto,acao){
        
    var campo = acao;
    var vprojeto = projeto.value
    var vacao = acao.value
    if(campo.value != ""){ 
        var cc1 = new Array(vprojeto+"."+vacao);
        datasetsaldo = DatasetFactory.getDataset("dssaldo", cc1, null, null);
        if (datasetsaldo.values.length > 0){    
            var record = datasetsaldo.values[0];
            saldo = eval("record[\"SALDO\"]");
        }
        saldo = formataCasasDecimais(saldo)
        saldo = moeda.formatar(saldo)
        
        if(saldo == 0 || saldo == "0,00"){
            console.log(saldo)
            document.getElementById("_txt_saldo").value = saldo;
            document.getElementById("_txt_saldo").style = "background-color:#ea8989";
        } 
        else if(saldo != 0 || saldo != "0,00") {
            document.getElementById("_txt_saldo").value = saldo;
            document.getElementById("_txt_saldo").style = "background-color:#86dc9c";
        }
    }
}

// SEGUNDA BUSCA DO SALDO
function loadSaldo(){
    console.log('testestestsetestsetestesestestsetstsesetsete')
    var projeto = document.getElementById('codProjeto');
    var acao =  document.getElementById('codAcao');
    buscaSaldo(projeto,acao)
}

