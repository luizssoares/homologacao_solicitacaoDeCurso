function validateForm(form){
    var Now_State = parseInt(getValue("WKNumState"));
    var Next_State = parseInt(getValue("WKNextState"));
	var msg = '';

    if(Now_State == 4){
        var fieldsP1 = ['txt_evento','txt_tipoevento','txt_emppromot','txt_cnpj',
                        'txt_inicio','txt_termino','carga_horaria']
        var fieldsP2 = ['ta_relato','ta_objetivo','ta_resultados','ta_relacao','ta_estrategia']

        var contentP1 = ['Nome do Evento','Endereço do Evento','Empresa Promotora',
                         'CNPJ','Data de Início','Data de Término','Carga Horária']
        var contentP2 = ['Relato sobre o Evento','Objetivo da Participação',
                         'Resultados Esperados','Relação com as Atividades Envolvidas',
                         'Estratégia de Disseminação e Aplicação do Conhecimento Adquirido']

        for(var i=0; i<fieldsP1.length; i++){
            if(form.getValue(fieldsP1[i])==''){
                msg += " Erro: campo "+contentP1[i]+"' não preenchido\n"
            }
        }

        for(var i=0; i<fieldsP2.length; i++){
            if(form.getValue(fieldsP2[i])==''){
                msg += "Erro: campo "+contentP2[i]+"' não preenchido\n"
            }
        }
        
        if(form.getValue("tp_solicitacao") == ""){
            msg += "Error : Informe o Tipo de Evento!\n"
        }
        if(form.getValue("tp_solicitacao") == "mercado"){
            if(form.getValue("TipoEvento") == ""){
                msg += "Error : Campo 'Natureza do Evento' não preenchido!\n"
            }
            if(form.getValue("TipoEvento") == "Individual"){
                if(form.getValue("atividade") == ""){
                    msg += "Error : Informar as Principais Atividades que o Solicitante desenvolve na Unidade.\n"
                }
            }
        }
        if(form.getValue("tp_solicitacao") == "in company"){
            if(form.getValue("pb_alvo") == ""){
                msg += "Error : Campo 'Puplico Alvo' não preenchido!\n"
            }
        }

    }
    

    if(Now_State == 67 && Next_State == 68){
       /* var fieldsP3 = ['txt_vinscricao','inscritos','txt_diarias','txt_passagens']
        var contentP3 = ['Valor da Inscrição','Quantidade de Participantes',
                        'Valor das Diárias', 'Valor Passagens']
        for(var i=0; i<fieldsP3.length; i++){
            if(form.getValue(fieldsP3[i])==''){
                msg += "Erro: campo "+contentP3[i]+"' não preenchido\n"
            }
        }
        if(form.getValue("despesa")=='on'){
            if(form.getValue("txt_outras") == ""){
                msg += "Error : Campo 'Outras Despesas' não preenchido!\n"
            }
            if(form.getValue("valor") == "" || form.getValue("valor") == "0,00"){
                msg += "Error : Campo 'Valor das Desepesas' não preenchido!\n"
            }
        }*/
            
        // if(form.getValue("txt_projeto")==''){
        //     msg += "\nError : Campo 'Projeto' não preenchido!\n"
        // }
        // if(form.getValue("txt_acao")==''){
        //     msg += "Error : Campo 'Ação' não preenchido!\n"
        // }
        // if(form.getValue("txt_recursos")==''){
        //     msg += "Error : Campo 'Unidade' não preenchido!\n"
        // }

        if(form.getValue("q1_s")!='on' && form.getValue("q1_n")!='on'){
            msg += "Erro: Responder questão 1!\n"
        }
        if(form.getValue("q2")!='on' && form.getValue("q2_s")!='on' && form.getValue("q2_n")!='on'){
            msg += "Erro: Responder questão 2!\n"
        }
        if(form.getValue("q3")!='on' && form.getValue("q3_s")!='on' && form.getValue("q3_n")!='on'){
            msg += "Erro: Responder questão 3!\n"
        }
        
        if(form.getValue("pb_alvo") == ""){
            if(form.getValue("q4_s")!='on' && form.getValue("q4_n")!='on'){
                msg += "Erro: Responder questão 4!\n"
            }
            if(form.getValue("q5_s")!='on' && form.getValue("q5_n")!='on'){
                msg += "Erro: Responder questão 5!\n"
            }
            
        }
        
        if(form.getValue("q6_s")!='on' && form.getValue("q6_n")!='on'){
            msg += "Erro: Responder se é Favorável ao Pleito ou se não é!\n"
        }
        
        if(form.getValue("q7_s")!='on' && form.getValue("q7_n")!='on'){
            msg += "Erro: Validar Alçada\n"
        }
        
    }

	if(msg!=""){
		throw "\n"+msg;
	}
}