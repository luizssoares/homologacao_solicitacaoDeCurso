function enableFields(form){ 
    var Now_state = parseInt(getValue("WKNumState"));

    if(Now_state == 0 || Now_state == 4 ||  Now_state == 66 || Now_state == 86){
        fields = ['Solicitante','DataSolicita','NmSolicita']
        disableFieldsFromList(form,fields);
    }
	
	else if(Now_state == 67){
		disableAllFields(form)
		fields = ['custo','txt_vinscricao','inscritos','txt_diarias','txt_passagens',
				  'despesa','investimento','txt_vtotal','txt_outras','valor','txt_projeto',
				  'txt_acao','txt_recursos','q1_s','q1_n','q2','q2_s','q2_n',
				  'q3','q3_s','q3_n','q4_s','q4_n','quantos','q5_s','q5_n',
				  'q6_s','q6_n','q7_s','q7_n','obs']
		enableFieldsFromList(form,fields);
	}
	
	else{
		disableAllFields(form);
	}
}


function disableAllFields(form) {
	var fields =    form.getCardData();
	var iterare =   fields.keySet().iterator();
	while (iterare.hasNext()) {
		var key =   iterare.next();
		form.setEnabled(key, false, false);
	}
}

function enableFieldsFromList(form, fields) {
	for (var i = 0; i < fields.length; i++) {
		form.setEnabled(fields[i], true);
	}
}

function disableFieldsFromList(form,fields){
	for(var i = 0; i<fields.length; i++){
		form.setEnabled(fields[i], false);
	}
}