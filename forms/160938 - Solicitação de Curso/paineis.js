//  BOTOES PAGINATACAO
function teste(id) {
    var Now = window.parent.ECM.workflowView.sequence
    var visualizacao = window.parentOBJ.ECM.workflowView.stateDescription
    var painel = ['panel_dadosocup',
        'panel_justificativa',
        'panel_despesas',
        'dotacao',
        'UGP']
    var botoes = document.querySelectorAll(".pani")
    var pro = parseInt(document.getElementById('pro').innerText.split('%')[0])
    console.log(pro)

    if (visualizacao == 'Detalhes da Solicitação') {
        for (var j = 0; j < painel.length; j++) {
            document.getElementById(painel[j]).style.display = 'block';
        }
        for (var j = 0; j < botoes.length; j++) {
            botoes[j].style.display = 'none'
        }
        document.getElementById('mercad').style.display = 'block';
        document.getElementById('company').style.display = 'block';

        document.getElementById('pro').style.cssText = 'width: 100%'
        document.getElementById('pro').innerText = '100%'
        document.getElementById('pro').className = 'progress-bar progress-bar-success progress-bar-striped'
        loadSaldo()
    }

    if (Now == 0 || Now == 4) {
        console.log('tela: ' + id)
        /*var a = document.querySelectorAll('a')
        var corsim = 'background-color: #1ab83f; color: #fff; border-color: gray'
        var cornao = 'background-color: #eee; border-color: gray'*/
        for (var i = 0; i < painel.length; i++) {
            if (id == painel[i]) {
                document.getElementById(id).style.display = 'block';
                if (pro <= (33 * i)) {
                    var width = 33 * (i + 1)
                    console.log(width)
                    document.getElementById('pro').style.cssText = 'width:' + width + '%'
                    document.getElementById('pro').innerText = width + '%'
                    document.getElementById('pro').className = 'progress-bar progress-bar-warning progress-bar-striped'
                }
                //a[i].style.cssText = corsim
            }
            else {
                document.getElementById(painel[i]).style.display = 'none';
                //a[i].style.cssText = cornao
            }

            if (id == 'panel_dadosocup' || id == '[object Event]') {
                window.parent.$("#workflowActions").hide();
                var v = setInterval(a, 5000);
                function a() {
                    window.parent.$(".fixedTopBar").hide()
                }
            }
            else {
                window.parent.$("#workflowActions").show();
            }
        }
        if (id == '[object Event]') {
            document.getElementById('panel_dadosocup').style.display = 'block';
            document.getElementById('pro').style.cssText = 'width:33%'
            document.getElementById('pro').innerText = '33%'
            document.getElementById('pro').className = 'progress-bar progress-bar-danger progress-bar-striped'
            //a[0].style.cssText = corsim
        }
        qtd_paticipantes()
        //console.log(document.getElementsByClassName('col-md-4 text-right'))
    }
    else if (Now == 65 || Now == 66) {
        document.getElementById("UGP").style.display = 'none';
        document.getElementById("panel_despesas").style.display = 'no/ne';
        //document.getElementById("dotacao").style.display = 'none';
        for (var j = 0; j < botoes.length; j++) {
            botoes[j].style.display = 'none'
        }
        if (document.getElementById('_despesa').checked == true) {
            console.log('entrou')
            document.getElementById('outras_despesas').style.display = 'block'
        }

    }
    else {
        document.querySelectorAll('tbody')[0].childNodes[0].childNodes[0].childNodes[0].disabled = true
        document.querySelectorAll('tbody')[0].childNodes[0].childNodes[0].childNodes[0].style.display = 'none'
        var trash = document.getElementsByClassName('fluigicon fluigicon-trash fluigicon-md')
        for (var j = 0; j < trash.length; j++) {
            console.log('apagar botão')
            document.getElementsByClassName('fluigicon fluigicon-trash fluigicon-md')[j].style.display = 'none'
        }
        console.log('passou passou passou')
        if (Now >= 8) {
            loadSaldo()
            document.querySelectorAll('tbody')[0].childNodes[0].childNodes[0].childNodes[0].style.display = 'none'
        }
        document.querySelectorAll('tbody')[0].childNodes[0].childNodes[0].childNodes[0].style.display = 'none'
        for (var j = 0; j < painel.length; j++) {
            document.getElementById(painel[j]).style.display = 'block';
        }
        for (var j = 0; j < botoes.length; j++) {
            botoes[j].style.display = 'none'
        }
        document.getElementById('pro').style.cssText = 'width: 100%'
        document.getElementById('pro').innerText = '100%'
        document.getElementById('pro').className = 'progress-bar progress-bar-success progress-bar-striped'
        console.log('aaaaaaaaaa')

        if (Now == 67) {
            if (document.getElementById('despesa').checked == true) {
                console.log('entrou if')
                document.getElementById('outras_despesas').style.display = 'block'
            }
            if (document.getElementById('q4_s').checked == true) {
                console.log('entrou if')
                document.getElementById('qts').style.display = 'block'
            }
        }
        else {
            if (document.getElementById('_despesa').checked == true) {
                console.log('entrou el')
                document.getElementById('outras_despesas').style.display = 'block'
            }
            if (document.getElementById('_q4_s').checked == true) {
                console.log('entrou el')
                document.getElementById('qts').style.display = 'block'
            }
        }


    }

    document.getElementById("q3").addEventListener("click", function () {
        console.log("q3 click")
        ids = ["txt_vinscricao", "txt_diarias", "txt_passagens", "valor"]
        if (document.getElementById("q3").checked) {
            console.log("q3 true")
            for (i = 0; i < ids.length; i++) {
                document.getElementById(ids[i]).value = "0,00"
                document.getElementById(ids[i]).disabled = true
                document.getElementById("custo").checked = true
            }
        }
        else {
            console.log("q3 false")
            for (i = 0; i < ids.length; i++) {
                document.getElementById(ids[i]).disabled = false
                document.getElementById("custo").checked = false
            }
        }
    })

    document.getElementById("custo").addEventListener("click", function () {
        console.log("custo click")
        ids = ["txt_vinscricao", "txt_diarias", "txt_passagens", "valor"]

        if (document.getElementById("custo").checked) {
            for (i = 0; i < ids.length; i++) {
                document.getElementById(ids[i]).value = "0,00"
                document.getElementById(ids[i]).disabled = true
                document.getElementById("q3").checked = true
            }
        }
        else {
            for (i = 0; i < ids.length; i++) {

                document.getElementById(ids[i]).disabled = false
                document.getElementById("q3").checked = false
            }
        }
    })



}
window.addEventListener('load', teste)

function checkedCusto() {
    var Now_state = window.parent.ECM.workflowView.sequence
    var visualizacao = window.parentOBJ.ECM.workflowView.stateDescription

    if (visualizacao == 'Detalhes da Solicitação') {
        console.log(document.getElementById("custo").checked )
        if (document.getElementById("custo").checked || document.getElementById("q3").checked) {
            id = ["txt_vinscricao", "txt_diarias", "txt_passagens", "valor"]
            for (i = 0; i < id.length; i++) {
                document.getElementById(id[i]).innerText = "0,00"
            }
        }
    }
    else if(Now_state == 0 || Now_state == 4 ||  Now_state == 66 ||  Now_state == 67 ||  Now_state == 86){
    	console.log(document.getElementById("custo").checked )
        if (document.getElementById("custo").checked || document.getElementById("q3").checked) {
            id = ["txt_vinscricao", "txt_diarias", "txt_passagens", "investimento", "valor"]
            for (i = 0; i < id.length; i++) {
                document.getElementById(id[i]).value = "0,00"
            }
        }
    }
    else{
        console.log(document.getElementById("_custo").checked )
        if (document.getElementById("_custo").checked || document.getElementById("q3").checked) {
            id = ["_txt_vinscricao", "_txt_diarias", "_txt_passagens","_valor"]
            for (i = 0; i < id.length; i++) {
                document.getElementById(id[i]).value = "0,00"
            }
        }
    }
    somar()
}
window.addEventListener('load', checkedCusto)

//  PINTAR HEADS
function colors() {
    var fundo = 'background-color: #1ab83f; border-color: black'
    var borda = 'border-color: #1ab83f'

    var head = document.querySelectorAll('.fluig-style-guide .panel-primary>.panel-heading')

    for (var i = 0; i < head.length; i++) {
        document.querySelectorAll('.fluig-style-guide .panel-primary>.panel-heading')[i].style.cssText = fundo
    }

    var pintaBorda =  document.querySelectorAll('.verde')
    for(i=0; i<pintaBorda.length; i++)
    {
        document.querySelectorAll('.verde')[i].style.cssText = borda
    }
    document.querySelectorAll(".ggg ")[0].style.cssText = "background-color: #1ab83f"


    var Now = window.parent.ECM.workflowView.sequence
    if (Now == 0 || Now == 4 || Now == 66) {
        document.querySelectorAll('tbody')[0].childNodes[0].childNodes[0].childNodes[0].style.cssText = 'color: white; background-color: #1ab83f; border-color: #1ab83f;'
    } else { document.querySelectorAll('tbody')[0].childNodes[0].childNodes[0].childNodes[0].style.cssText = "display: none" }
    if (Now == 65 || Now == 66) {
        document.getElementById("dotacao").style.display = 'none';
    }

}
window.addEventListener('load', colors)

// VERIFICA SE PODE AVANÇA A ETAPA
function verificaEtapa(id) {

    var msg = []
    var fieldsP1 = ['tp_solicitacao', 'localidade', 'txt_evento', 'txt_tipoevento',
        'txt_emppromot', 'txt_cnpj', 'txt_inicio', 'txt_termino', 'carga_horaria']
    var fieldsP2 = ['ta_relato', 'ta_objetivo', 'ta_resultados', 'ta_relacao', 'ta_estrategia']

    var contentP1 = ['Tipo de Evento', 'Cidade/UF', 'Nome do Evento', 'Endereço do Evento', 'Empresa Promotora',
        'CNPJ', 'Data de Início', 'Data de Término', 'Carga Horária']
    var contentP2 = ['Relato sobre o Evento', 'Objetivo da Participação',
        'Resultados Esperados', 'Relação com as Atividades Envolvidas',
        'Estratégia de Disseminação e Aplicação do Conhecimento Adquirido']


    var Dhoje = document.getElementById('DataSolicita').value.split(' ')[0].split('/')
    var hoje = Dhoje[2] + '-' + Dhoje[1] + '-' + Dhoje[0]
    console.log('HOJE: ' + hoje)
    var Dinicio = document.getElementById('txt_inicio').value.split('/')
    var inicio = Dinicio[2] + '-' + Dinicio[1] + '-' + Dinicio[0]
    console.log('INICIO: ' + inicio)
    var Dfim = document.getElementById('txt_termino').value.split('/')
    var fim = Dfim[2] + '-' + Dfim[1] + '-' + Dfim[0]
    console.log('FIM: ' + fim)

    for (var i = 0; i < fieldsP1.length; i++) {
        document.getElementById(fieldsP1[i]).style.border = ''
    }
    for (var i = 0; i < fieldsP2.length; i++) {
        document.getElementById(fieldsP2[i]).style.border = ''
    }

    if (id == 'panel_dadosocup') {
        var natureza = document.getElementById('TipoEvento')
        var atividade = document.getElementById('ta_atividades')
        var tipo = document.getElementById('tp_solicitacao')
        var alvo = document.getElementById('pb_alvo')
        var insc = (document.getElementById('Lista_Part').tBodies[0].rows.length) - 1

        alvo.style.border = ''
        natureza.style.border = ''
        atividade.style.border = ''

        if (tipo.value == 'mercado') {
            if (natureza.value == 'Individual') {
                if (atividade.value == '') {
                    msg.push('Falta informar as Principais Atividades do Solicitante!');
                    atividade.style.border = '2px solid #F08080'
                }
            }
            else if (natureza.value == 'Em Grupo') {
                if (insc == 0) {
                    msg.push('Falta informar os Participantes e suas Atividades!');
                    natureza.style.border = '2px solid #F08080'
                }
            }
            else {
                msg.push('Falta informar a Natureza do Evento!');
            }
        } else if (tipo.value == 'in company') {
            if (alvo.value == '') {
                msg.push('Falta preencher o campo: Publico Alvo!');
                alvo.style.border = '2px solid #F08080'
            }
        }
        for (var i = 0; i < fieldsP1.length; i++) {
            //console.log(document.getElementById(fieldsP1[i]).value)
            if (document.getElementById(fieldsP1[i]).value == '') {
                msg.push('Falta preencher o campo: ' + contentP1[i] + '!');
                document.getElementById(fieldsP1[i]).style.border = '2px solid #F08080'
            } else {
                id = 'panel_justificativa'
            }
        }
        if (hoje > inicio) {
            msg.push("Error : Data de 'Inicio' inválida!")
        }
        if (inicio > fim) {
            msg.push("Error : Data de 'Inicio' não pode ser depois da data de termino!");

        }
        var prazo = prazoSocilitacao(inicio)

        if (prazo != '' && tipo.value == 'in company') {
            //msg.push(prazo)
            alert("Atenção: É recomendado solicitar com no minimo 30 dias úteis de antecendência!")
        }

        if (prazo != '' && tipo.value == 'mercado') {
            alert("Atenção: É recomendado solicitar com no minimo 30 dias úteis de antecendência!")
        }

    }
    else if (id == 'panel_justificativa') {
        for (var i = 0; i < fieldsP2.length; i++) {
            if (document.getElementById(fieldsP2[i]).value == '') {
                msg.push('Falta preencher o campo: ' + contentP2[i] + '!');
                document.getElementById(fieldsP2[i]).style.border = '2px solid #F08080'
            } else {
                id = 'panel_despesas'
            }
        }
    }

    if (msg != '') {
        alert(msg.join('\n'))
    }
    else {
        teste(id)
    }
}

// LIMITA DATA
Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
function prazoSocilitacao(inicio) {

    var data = new Date();
    var date = new Date()
    /*if(tipo == 'evento'){
        var dataInicial = new String(Inicio);
        var diaN = 47
        var diaT = 45
    }*/
    //if(tipo == 'servico'){
    var dataInicial = new String(inicio);
    var diaN = 30
    var diaT = 30
    //}

    /*dt1 = dataInicial.split('/')
    dataInicial = dt1[2] + '-' + dt1[1] + '-' + dt1[0]*/
    //msg += dataInicial+"\n";
    for (i = 0; i < diaN; i++) {
        date.setDate(date.getDate() + i);
        var dia_N_Util = new String(date);
        var patt1 = /Sat+/g;
        var patt2 = /Sun+/g;
        if (dia_N_Util.match(patt1) || dia_N_Util.match(patt2)) {
            diaN++;
        }
    }
    var d = data.addDays(diaN);
    var Ano = d.getFullYear();
    var mes = new Array();
    mes[0] = "01"
    mes[1] = "02"
    mes[2] = "03"
    mes[3] = "04"
    mes[4] = "05"
    mes[5] = "06"
    mes[6] = "07"
    mes[7] = "08"
    mes[8] = "09"
    mes[9] = "10"
    mes[10] = "11"
    mes[11] = "12"
    var dia = new Array();
    dia[1] = "01"
    dia[2] = "02"
    dia[3] = "03"
    dia[4] = "04"
    dia[5] = "05"
    dia[6] = "06"
    dia[7] = "07"
    dia[8] = "08"
    dia[9] = "09"
    var Mes = mes[d.getMonth()];
    if (d.getDate() <= 9) {
        var Dia = dia[d.getDate()];
    }
    else { var Dia = d.getDate() }

    var dataFinal = [Ano + "-" + Mes + "-" + Dia];
    console.log("Libera no dia: " + dataFinal)

    if (dataFinal > dataInicial) {
        return "Alerta : Favor preencher com no minimo " + diaT + " dias úteis de antecendência!";
    }
    else {
        return ''
    }
}
//  CALENDARIO COM DATAS MARCADAS
/*function teste2(){
    var array = ['8/07/2022','15/07/2022','22/07/2022','29/07/2022'];
    var dias = document.getElementsByClassName('day')

    var ab =  setInterval(a, 200);
    function a(){
        var ind = 0;
        if(dias != undefined){
            for(var i=0; i<dias.length; i++){
                if(dias[i].className != 'day old disabled' && dias[i].className != 'day new'){
                    for(var j=0; j<array.length; j++){
                        var direx = array[j].split('/')[0]
                        if(dias[i].innerHTML == direx){
                            document.getElementsByClassName('day')[i].style.cssText = 'background-color: #00e600; color: #fff'
                            ind++
                            if(ind == array.length){
                                clearInterval(ab)
                            }
                        }        
                    }
                }
            }
        }
    }
    return array;
}window.addEventListener('load', teste2)*/

//  PEGAR UNIDADE
function unidade() {
    var ds_mat = DatasetFactory.getDataset("colleague", null, null, null);
    var ds_und = DatasetFactory.getDataset("dsc_Unidades", null, null, null);

    var mat = document.getElementById("Solicitante").value;
    console.log(mat)
    document.getElementById('mt_solicit').value = mat

    for (var i = 0; i < ds_mat.values.length; i++) {
        if (mat == ds_mat.values[i]['colleaguePK.colleagueId']) {
            //document.getElementById("mt_solicit").value = mat
            //console.log("sfoksioghfgiufghdflighdfgldfjhgdfklghdfgkldfhgkfljdghdlgdfhgçdflkghgklddjghdflgfhgkdfjgldfghjgjtrouyrtuihnbfdfvmjrntrohndfbm dfbngfo hnfgjntjhmçhgfbknmgçbhçohçfgv")

            var und = ds_mat.values[i]['groupId'];

            console.log(ds_mat.values[i]['groupId'])

            for (var j = 0; j < ds_und.values.length; j++) {
                //console.log(ds_und.values[j]['AntigaSigla'])
                if (und == ds_und.values[j]['AntigaSigla']) {
                    //console.log("sfoksioghfgiufghdflighdfgldfjhgdfklghdfgkldfhgkfljdghdlgdfhgçdflkghgklddjghdflgfhgkdfjgldfghjgjtrouyrtuihnbfdfvmjrntrohndfbm dfbngfo hnfgjntjhmçhgfbknmgçbhçohçfgv")

                    console.log(ds_und.values[j]['Sigla'])
                    document.getElementById("cmb_GerenteSolicitante").value = ds_und.values[j]['NomeGerente']
                    console.log(document.getElementById("cmb_GerenteSolicitante").value)
                    document.getElementById("txt_unidade").value = ds_und.values[j]['NomeUnidade']
                    document.getElementById("numSuperior").value = ds_und.values[j]['Matricula']
                    //document.getElementById("hdn_diretoria").value = ds_und.values[j]['MatSuperior']
                    if (mat == document.getElementById("numSuperior").value) {
                        document.getElementById("cmb_GerenteSolicitante").value = ds_und.values[j]['NomeSuperior']
                        document.getElementById("numSuperior").value = ds_und.values[j]['MatSuperior']
                    }
                }
            }
        }
    }
    getSuper()
}
window.addEventListener("load", unidade);

function getSuper() {
    var hdn_Super = document.getElementById("numSuperior")
    console.log(DatasetFactory.getDataset("dsc_Unidades", null, null, null))
    //setTimeout(hdn_Super.value = document.getElementById("cmb_GerenteSolicitante").value, 6000);
    var dataset = DatasetFactory.getDataset("dsc_Unidades", null, null, null)
    for (i = 0; i < dataset.values.length; i++) {
        var mat = dataset.values[i].Matricula
        if (mat == hdn_Super.value) {
            var un = dataset.values[i].NomeUnidade
            //document.getElementById("zm_UnidadeSolicitante").value = un 
            dir = dataset.values[i].MatSuperior
            if (dir == "80000318") {
                document.getElementById("hdn_diretoria").value = 'Pool:Role:DIRAF'
            } else if (dir == "00000656") {
                document.getElementById("hdn_diretoria").value = 'Pool:Role:DIRAF'
            } else if (dir == "00000428") { 
            	document.getElementById("hdn_diretoria").value = 'Pool:Role:DITEC' 
            }else{document.getElementById("hdn_diretoria").value = '00000527'}
        }
    }
} 
