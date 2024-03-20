# Obtener Tipos de Chequera 

Método para obtener un listado de los tipos de chequeras. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasCorrientes.ObtenerTiposDeChequera | RBTPG315 | Global 

> Ejemplo de invocación al método Obtener Tipos de Chequera: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.ObtenerTiposDeChequera> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>93f61d299b4A8</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTCuentasCorrientes.ObtenerTiposDeChequera> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?ObtenerTiposDeChequera' \ 
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
      <BTCuentasCorrientes.ObtenerTiposDeChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.118</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>93f61d299b4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtTiposChequera> 
            <sBTTipoChequera> 
               <descripcion>Chequera Común 25 / Pesos</descripcion> 
               <identificador>1</identificador> 
            </sBTTipoChequera> 
            <sBTTipoChequera> 
               <descripcion>Chequeras Diferidas 25 /Pesos</descripcion> 
               <identificador>2</identificador> 
            </sBTTipoChequera> 
            <sBTTipoChequera> 
               <descripcion>Chequera Común 25 / Dólares</descripcion> 
               <identificador>3</identificador> 
            </sBTTipoChequera> 
            <sBTTipoChequera> 
               <descripcion>Chequeras Diferidas 25 /Dólar</descripcion> 
               <identificador>4</identificador> 
            </sBTTipoChequera> 
            <sBTTipoChequera> 
               <descripcion>Chequeras de Gerencia</descripcion> 
               <identificador>10</identificador> 
            </sBTTipoChequera> 
            <sBTTipoChequera> 
               <descripcion>Orden de Pago MN</descripcion> 
               <identificador>20</identificador> 
            </sBTTipoChequera> 
            <sBTTipoChequera> 
               <descripcion>Orden de Pago ME</descripcion> 
               <identificador>21</identificador> 
            </sBTTipoChequera> 
            <sBTTipoChequera> 
               <descripcion>Chequera Fanfold Común MN</descripcion> 
               <identificador>30</identificador> 
            </sBTTipoChequera> 
            <sBTTipoChequera> 
               <descripcion>Chequera Fanfold Diferida MN</descripcion> 
               <identificador>31</identificador> 
            </sBTTipoChequera> 
            <sBTTipoChequera> 
               <descripcion>Chequera Fanfold Común ME</descripcion> 
               <identificador>32</identificador> 
            </sBTTipoChequera> 
            <sBTTipoChequera> 
               <descripcion>Chequera Fanfold Diferida ME</descripcion> 
               <identificador>33</identificador> 
            </sBTTipoChequera> 
         </sdtTiposChequera> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8424</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.ObtenerTiposDeChequera</Servicio> 
            <Fecha>2019-05-07</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>15:25:42</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasCorrientes.ObtenerTiposDeChequeraResponse> 
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
	"sdtTiposChequera": { 
		"sBTTipoChequera": [ 
			{ 
				"descripcion": "Chequera Común 25 / Pesos", 
				"identificador": "1" 
			}, 
			{ 
				"descripcion": "Chequeras Diferidas 25 /Pesos", 
				"identificador": "2" 
			}, 
			{ 
				"descripcion": "Chequera Común 25 / Dólares", 
				"identificador": "3" 
			}, 
			{ 
				"descripcion": "Chequeras Diferidas 25 /Dólar", 
				"identificador": "4" 
			}, 
			{ 
				"descripcion": "Chequeras de Gerencia", 
				"identificador": "10" 
			}, 
			{ 
				"descripcion": "Orden de Pago MN", 
				"identificador": "20" 
			}, 
			{ 
				"descripcion": "Orden de Pago ME", 
				"identificador": "21" 
			}, 
			{ 
				"descripcion": "Chequera Fanfold Común MN", 
				"identificador": "30" 
			}, 
			{ 
				"descripcion": "Chequera Fanfold Diferida MN", 
				"identificador": "31" 
			}, 
			{ 
				"descripcion": "Chequera Fanfold Común ME", 
				"identificador": "32" 
			}, 
			{ 
				"descripcion": "Chequera Fanfold Diferida ME", 
				"identificador": "33" 
			} 
		] 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 8396, 
        "Estado": "OK", 
        "Servicio": "BTCuentasCorrientes.ObtenerTiposDeChequera", 
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

No aplica 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | -----------  
sdtTiposChequera | sBTTiposChequera | Lista de tipos de chequera. 

Los campos del tipo de dato estructurado sBTTipoChequera son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
descripcion | String | Descripción del tipo de chequera. 
identificador | Int | Identificador del tipo de chequera. 

### Errores 

No aplica 

 
