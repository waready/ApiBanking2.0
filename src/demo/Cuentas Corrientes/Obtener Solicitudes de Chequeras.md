# Obtener Solicitudes de Chequeras 

Método para obtener todas las chequeras y solicitudes de chequeras asociadas a una operación. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasCorrientes.ObtenerSolicitudesChequera | RBTPG400 | Global 

> Ejemplo de invocación al servicio de Obtener Solicitudes de Chequera: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.ObtenerSolicitudesChequera> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>b4ae55b35c4A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
         </bts:Btinreq> 
         <bts:operacionUId>101</bts:operacionUId> 
      </bts:BTCuentasCorrientes.ObtenerSolicitudesChequera> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?ObtenerSolicitudesChequera \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
        "operacionUId": "101" 
      } 
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
      <BTCuentasCorrientes.ObtenerSolicitudesChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>b4ae55b35c4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtSolicitudesChequeras> 
            <sBTDatosChequera> 
               <sBTDatosChequera> 
                  <totalCheques>50</totalCheques> 
                  <estado>ENTREGADA AL CLIENTE</estado> 
                  <chequeInicial>1651</chequeInicial> 
                  <titular>PEREZ SOSA JUAN</titular> 
                  <cantidadLibretas>2</cantidadLibretas> 
                  <operacionUId>101</operacionUId> 
                  <empresa>1</empresa> 
                  <tipoId>1</tipoId> 
                  <tipo>Chequera Común 25 / Pesos</tipo> 
                  <solicitud>23</solicitud> 
                  <estadoId>6</estadoId> 
               </sBTDatosChequera> 
               <sBTDatosChequera> 
                  <totalCheques>25</totalCheques> 
                  <estado>SOLICITADA</estado> 
                  <chequeInicial>3051</chequeInicial> 
                  <titular>PEREZ SOSA JUAN</titular> 
                  <cantidadLibretas>1</cantidadLibretas> 
                  <operacionUId>101</operacionUId> 
                  <empresa>1</empresa> 
                  <tipoId>1</tipoId> 
                  <tipo>Chequera Común 25 / Pesos</tipo> 
                  <solicitud>53</solicitud> 
                  <estadoId>1</estadoId> 
               </sBTDatosChequera> 
               <sBTDatosChequera> 
                  <totalCheques>25</totalCheques> 
                  <estado>SOLICITADA</estado> 
                  <chequeInicial>3076</chequeInicial> 
                  <titular>PEREZ SOSA JUAN</titular> 
                  <cantidadLibretas>1</cantidadLibretas> 
                  <operacionUId>101</operacionUId> 
                  <empresa>1</empresa> 
                  <tipoId>1</tipoId> 
                  <tipo>Chequera Común 25 / Pesos</tipo> 
                  <solicitud>54</solicitud> 
                  <estadoId>1</estadoId> 
               </sBTDatosChequera> 
               <sBTDatosChequera> 
                  <totalCheques>25</totalCheques> 
                  <estado>SOLICITADA</estado> 
                  <chequeInicial>3101</chequeInicial> 
                  <titular>PEREZ SOSA JUAN</titular> 
                  <cantidadLibretas>1</cantidadLibretas> 
                  <operacionUId>101</operacionUId> 
                  <empresa>1</empresa> 
                  <tipoId>1</tipoId> 
                  <tipo>Chequera Común 25 / Pesos</tipo> 
                  <solicitud>55</solicitud> 
                  <estadoId>1</estadoId> 
               </sBTDatosChequera> 
               <sBTDatosChequera> 
                  <totalCheques>25</totalCheques> 
                  <estado>SOLICITADA</estado> 
                  <chequeInicial>3126</chequeInicial> 
                  <titular>PEREZ SOSA JUAN</titular> 
                  <cantidadLibretas>1</cantidadLibretas> 
                  <operacionUId>101</operacionUId> 
                  <empresa>1</empresa> 
                  <tipoId>1</tipoId> 
                  <tipo>Chequera Común 25 / Pesos</tipo> 
                  <solicitud>56</solicitud> 
                  <estadoId>1</estadoId> 
               </sBTDatosChequera> 
            </sBTDatosChequera> 
         </sdtSolicitudesChequeras> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>103</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.ObtenerSolicitudesChequera</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-07-22</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>16:00:37</Hora> 
         </Btoutreq> 
      </BTCuentasCorrientes.ObtenerSolicitudesChequeraResponse> 
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
        "sdtSolicitudesChequeras": { 
          "sBTDatosChequera": { 
            "sBTDatosChequera": [ 
              { 
                "totalCheques": "50", 
                "estado": "ENTREGADA AL CLIENTE", 
                "chequeInicial": "1651", 
                "titular": "PEREZ SOSA JUAN", 
                "cantidadLibretas": "2", 
                "operacionUId": "101", 
                "empresa": "1", 
                "tipoId": "1", 
                "tipo": "Chequera Común 25 / Pesos", 
                "solicitud": "23", 
                "estadoId": "6" 
              }, 
              { 
                "totalCheques": "25", 
                "estado": "SOLICITADA", 
                "chequeInicial": "3051", 
                "titular": "PEREZ SOSA JUAN", 
                "cantidadLibretas": "1", 
                "operacionUId": "101", 
                "empresa": "1", 
                "tipoId": "1", 
                "tipo": "Chequera Común 25 / Pesos", 
                "solicitud": "53", 
                "estadoId": "1" 
              }, 
              { 
                "totalCheques": "25", 
                "estado": "SOLICITADA", 
                "chequeInicial": "3076", 
                "titular": "PEREZ SOSA JUAN", 
                "cantidadLibretas": "1", 
                "operacionUId": "101", 
                "empresa": "1", 
                "tipoId": "1", 
                "tipo": "Chequera Común 25 / Pesos", 
                "solicitud": "54", 
                "estadoId": "1" 
              }, 
              { 
                "totalCheques": "25", 
                "estado": "SOLICITADA", 
                "chequeInicial": "3101", 
                "titular": "PEREZ SOSA JUAN", 
                "cantidadLibretas": "1", 
                "operacionUId": "101", 
                "empresa": "1", 
                "tipoId": "1", 
                "tipo": "Chequera Común 25 / Pesos", 
                "solicitud": "55", 
                "estadoId": "1" 
              }, 
              { 
                "totalCheques": "25", 
                "estado": "SOLICITADA", 
                "chequeInicial": "3126", 
                "titular": "PEREZ SOSA JUAN", 
                "cantidadLibretas": "1", 
                "operacionUId": "101", 
                "empresa": "1", 
                "tipoId": "1", 
                "tipo": "Chequera Común 25 / Pesos", 
                "solicitud": "56", 
                "estadoId": "1" 
              } 
            ] 
          } 
        }, 
        "Btoutreq": { 
          "Numero": "103", 
          "Estado": "OK", 
          "Servicio": "BTCuentasCorrientes.ObtenerSolicitudesChequera", 
          "Requerimiento": "1", 
          "Fecha": "2019-07-22", 
          "Canal": "BTDIGITAL", 
          "Hora": "16:00:37" 
        } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador de la operación. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtSolicitudesChequeras | sBTSolicitudesChequeras | Listado de chequeras. 

Los campos del tipo de dato estructurado sBTSolicitudesChequeras son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
sBTDatosChequera | sBTDatosChequera | Listado de chequeras. 

Los campos del tipo de dato estructurado sBTDatosChequera son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
totalCheques | Short | Cantidad de cheques de la chequera. 
estado | String | Estado actual de la solicitud de la chequera. 
chequeInicial | Int | Cheque inicial. 
titular | String | Titular de la cuenta. 
cantidadLibretas | Short | Cantidad de libretas. 
operacionUId | Long | Identificador de la operación de la subcuenta. 
empresa | Short | Empresa de la emisión de la chequera. 
tipoId | Short | Identificador de tipo de chequera. 
tipo | String | Tipo de chequera. 
solicitud | Long | Identificador de la solicitud de chequera. 
estadoId | Short | Identificador de estado actual de la solicitud de la chequera. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el Identificador de la operación. 
30002 | No existe la operación indicada. 
30003 | La operación ingresada no corresponde a una cuenta corriente. 

 
