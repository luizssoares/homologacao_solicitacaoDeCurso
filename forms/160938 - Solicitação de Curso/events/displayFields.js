function displayFields(form,customHTML){
	
var Now_State =parseInt(getValue("WKNumState"));
	
	//Define os valores
	var usuario = getValue("WKUser");
	var data =  new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
	
	
				switch(Now_State){
				
							//Solicitação do Usuário
						    case 0:
						
					    	
						    	//Define Dados de Início
						    	form.setValue("Solicitante",usuario);
						    	form.setValue("DataSolicita",data.format(new Date()));
						    	
						    	break;
						    //
						   
						        
						    default:
						    	form.setValue("NmSolicita",getValue("WKNumProces"));
						    	form.setEnabled("Solicitante",false);
					    		form.setEnabled("DataSolicita",false);
					    		form.setEnabled("NmSolicita",false);
					    		form.setEnabled("txt_chapa",false);

					    		
					    		break;	
					    	
					 	}
	
	
	
	
	
	
}