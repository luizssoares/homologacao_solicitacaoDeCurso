function beforeSendData(customField,customFact){
    customField[0] = hAPI.getCardValue("txt_unidade");

    customField[1] = hAPI.getCardValue("DataSolicita");

    customField[2] = hAPI.getCardValue("tp_solicitacao");

    customField[3] = hAPI.getCardValue("localidade");

    customField[4] = hAPI.getCardValue("txt_evento");

    customField[5] = hAPI.getCardValue("txt_inicio");

    customField[6] = hAPI.getCardValue("txt_termino");

    customField[7] = hAPI.getCardValue("carga_horaria");

    customField[8] = hAPI.getCardValue("TipoEvento");

    customField[9] = hAPI.getCardValue("ta_relato");

    customField[10] = hAPI.getCardValue("ta_estrategia");
    
    customField[11] = hAPI.getCardValue("inscritos");
    
    
    var field0 = hAPI.getCardValue('txt_vtotal');
    field0 = +field0;
    if (!isNaN(field0)) {
        customFact[0] = field0;
    }

    var field1 = hAPI.getCardValue('valor');
    field1 = +field1;
    if (!isNaN(field1)) {
        customFact[1] = field1;
    }
}
