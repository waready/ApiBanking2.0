# Obtener Tipos de Texto 

Método para obtener un listado de los tipos de textos ingresados en Bantotal. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTConfiguracionBantotal.ObtenerTiposDeTexto | RBTPG312 | Global 

> Ejemplo de invocación al método Obtener Tipos De Texto: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerTiposDeTexto> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>ccbe8f2e2434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTConfiguracionBantotal.ObtenerTiposDeTexto> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerTiposDeTexto' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	} 
}' 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTConfiguracionBantotal.ObtenerTiposDeTextoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>ccbe8f2e2434</Token> 
         </Btinreq> 
         <sdtTextos> 
            <sBTTipoTexto> 
               <descripcion>OPERACIONES REFINANCIADAS:</descripcion> 
               <Identificador>2</Identificador> 
            </sBTTipoTexto> 
            <sBTTipoTexto> 
               <descripcion>INGRESE N° CUENTA SFB</descripcion> 
               <Identificador>3</Identificador> 
            </sBTTipoTexto> 
            <sBTTipoTexto> 
               <descripcion>NOMBRE Y APELLIDO TITULARES</descripcion> 
               <Identificador>4</Identificador> 
            </sBTTipoTexto> 
            <sBTTipoTexto> 
               <descripcion>NOMBRE</descripcion> 
               <Identificador>5</Identificador> 
            </sBTTipoTexto> 
            <sBTTipoTexto> 
               <descripcion>TIPO Y NUMERO DE DOCUMENTO</descripcion> 
               <Identificador>6</Identificador> 
            </sBTTipoTexto> 
            <sBTTipoTexto> 
               <descripcion>DOMICILIO</descripcion> 
               <Identificador>7</Identificador> 
            </sBTTipoTexto> 
            <sBTTipoTexto> 
               <descripcion>BAJA DE MULTA 50%</descripcion> 
               <Identificador>8</Identificador> 
            </sBTTipoTexto> 
            <sBTTipoTexto> 
               <descripcion>BARRIO</descripcion> 
               <Identificador>9</Identificador> 
            </sBTTipoTexto> 
            <sBTTipoTexto> 
               <descripcion>COMENTARIO SOBRE APERTURA</descripcion> 
               <Identificador>10</Identificador> 
            </sBTTipoTexto> 
            <sBTTipoTexto> 
               <descripcion>NOMBRE DEL BENEFICIARIO:</descripcion> 
               <Identificador>11</Identificador> 
            </sBTTipoTexto> 
            <sBTTipoTexto> 
               <descripcion>MOTIVOS DEL EMBARGO</descripcion> 
               <Identificador>12</Identificador> 
            </sBTTipoTexto> 
            <sBTTipoTexto> 
               <descripcion>JUZGADO:</descripcion> 
               <Identificador>13</Identificador> 
            </sBTTipoTexto> 
            <sBTTipoTexto> 
               <descripcion>DEMANDANTE</descripcion> 
               <Identificador>14</Identificador> 
            </sBTTipoTexto> 
            <sBTTipoTexto> 
               <descripcion>FECHA INICIO DE MORA DD/MM</descripcion> 
               <Identificador>16</Identificador> 
            </sBTTipoTexto> 
         </sdtTextos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8514</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTConfiguracionBantotal.ObtenerTiposDeTexto</Servicio> 
            <Fecha>2019-05-09</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:43:07</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerTiposDeTextoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"sdtTextos": { 
		"sBTTipoTexto": [ 
			{ 
         "descripcion": "OPERACIONES REFINANCIADAS:", 
         "Identificador": "2" 
			}, 
			{ 
         "descripcion": "INGRESE N° CUENTA SFB", 
         "Identificador": "3" 
			}, 
			{ 
         "descripcion": "NOMBRE Y APELLIDO TITULARES", 
         "Identificador": "4" 
			}, 
			{ 
         "descripcion": "NOMBRE", 
         "Identificador": "5" 
			}, 
			{ 
         "descripcion": "TIPO Y NUMERO DE DOCUMENTO", 
         "Identificador": "6" 
			}, 
			{ 
         "descripcion": "DOMICILIO", 
         "Identificador": "7" 
			}, 
			{ 
         "descripcion": "BAJA DE MULTA 50%", 
         "Identificador": "8" 
			}, 
			{ 
         "descripcion": "BARRIO", 
         "Identificador": "9" 
			}, 
			{ 
         "descripcion": "COMENTARIO SOBRE APERTURA", 
         "Identificador": "10" 
			}, 
			{ 
         "descripcion": "NOMBRE DEL BENEFICIARIO:", 
         "Identificador": "11" 
			}, 
			{ 
         "descripcion": "MOTIVOS DEL EMBARGO", 
         "Identificador": "12" 
			}, 
			{ 
         "descripcion": "JUZGADO:", 
         "Identificador": "13" 
			}, 
			{ 
         "descripcion": "DEMANDANTE", 
         "Identificador": "14" 
			}, 
			{ 
         "descripcion": "FECHA INICIO DE MORA DD/MM", 
         "Identificador": "16" 
			} 
		] 
	}, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": 8396, 
      "Estado": "OK", 
      "Servicio": "BTConfiguracionBantotal.ObtenerTiposDeTexto", 
      "Requerimiento": "1", 
      "Fecha": "2019-05-07", 
      "Hora": "15:54:44", 
      "Canal": "BTDIGITAL" 
   } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

No aplica. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtTextos | sBTTipoTexto | Listado de tipos de texto. 

Los campos del tipo de dato estructurado sBTTipoTexto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
descripcion	| String	| Descripción de tipo de texto. 
identificador | Long | Identificador de tipo de texto. 

### Errores 

No aplica. 

 
