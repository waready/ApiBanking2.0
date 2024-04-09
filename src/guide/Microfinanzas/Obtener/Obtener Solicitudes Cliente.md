# Obtener Solicitudes Cliente 

Método para obtener una lista de las solicitudes activas de préstamos de un cliente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTMicrofinanzas.ObtenerSolicitudesCliente | RBTPG416 | Global 

> Ejemplo de invocación al método Obtener Solicitudes Cliente: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.ObtenerSolicitudesCliente> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>95</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>419385365CD285A89A23FBEE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>3</bts:clienteUId> 
      </bts:BTMicrofinanzas.ObtenerSolicitudesCliente> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerSolicitudesCliente \ 
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
    "clienteUId": "3" 
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
      <BTMicrofinanzas.ObtenerSolicitudesClienteResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>95</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>419385365CD285A89A23FBEE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtDatosInstancias> 
            <sBTDatosInstancia> 
               <operacionUId>8</operacionUId> 
               <instancia>10844</instancia> 
               <capital>8000.00</capital> 
               <asesor>ETRIESGO</asesor> 
               <tarea>Solicitud</tarea> 
            </sBTDatosInstancia> 
            <sBTDatosInstancia> 
               <operacionUId>7</operacionUId> 
               <instancia>10856</instancia> 
               <capital>5000.00</capital> 
               <asesor>INSTALADOR</asesor> 
               <tarea>Solicitud</tarea> 
            </sBTDatosInstancia> 
         </sdtDatosInstancias> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.ObtenerSolicitudesCliente</Servicio> 
            <Fecha>2019-09-24</Fecha> 
            <Hora>14:27:00</Hora> 
            <Requerimiento>95</Requerimiento> 
            <Numero>245</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.ObtenerSolicitudesClienteResponse> 
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
        "sdtDatosInstancias": { 
          "sBTDatosInstancia": [ 
            { 
              "operacionUId": "8", 
              "instancia": "10844", 
              "capital": "8000.00", 
              "asesor": "ETRIESGO", 
              "tarea": "Solicitud" 
            }, 
            { 
              "operacionUId": "7", 
              "instancia": "10856", 
              "capital": "5000.00", 
              "asesor": "INSTALADOR", 
              "tarea": "Solicitud" 
            } 
          ] 
        }, 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTMicrofinanzas.ObtenerSolicitudesCliente", 
          "Fecha": "2019-09-24", 
          "Hora": "14:27:00", 
          "Requerimiento": "95", 
          "Numero": "245", 
          "Estado": "OK" 
        } 
      } 
    } 
  } 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtDatosInstancias | sBTDatosInstancia | Listado de solicitudes: 

Los campos del tipo de dato estructurado sBTDatosInstancia son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
instancia | Long | Número de instancia WorkFlow. 
capital | Decimal | Importe capital del crédito. 
asesor | String | Usuario asesor del crédito. 
tarea | String | Tarea en la que se encuentra la instancia. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de cliente. 

 
