<template><div><h1 id="crear" tabindex="-1"><a class="header-anchor" href="#crear"><span>Crear</span></a></h1>
<p>Método para dar de alta un ahorro programado.</p>
<table>
<thead>
<tr>
<th>Nombre publicación</th>
<th>Programa</th>
<th>Global/País</th>
</tr>
</thead>
<tbody>
<tr>
<td>BTAhorroProgramado.Crear</td>
<td>RBTPG118</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Crear:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.Crear> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>f2f7be2ebc4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:sdtAhorroProgramado> 
            <bts:abono>1000</bts:abono> 
            <bts:productoUId>41</bts:productoUId> 
            <bts:fechaMetaAhorro></bts:fechaMetaAhorro> 
            <bts:clienteUId>81</bts:clienteUId> 
            <bts:personaUId>2</bts:personaUId> 
            <bts:diaIncremento>9</bts:diaIncremento> 
            <bts:depositoInicial></bts:depositoInicial> 
            <bts:montoMetaAhorro></bts:montoMetaAhorro> 
            <bts:cuentaOrigenUId>21</bts:cuentaOrigenUId> 
            <bts:cuentaDestinoUId>21</bts:cuentaDestinoUId> 
            <bts:motivoAhorro></bts:motivoAhorro> 
            <bts:fechaInicioAhorro></bts:fechaInicioAhorro> 
            <bts:plazo>360</bts:plazo> 
            <bts:periodicidadIncremento>1</bts:periodicidadIncremento> 
         </bts:sdtAhorroProgramado> 
      </bts:BTAhorroProgramado.Crear> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?Crear' \ 
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
	}, 
	"sdtAhorroProgramado": { 
		"personaUId": 2, 
		"clienteUId": 81, 
		"productoUId": 41, 
		"cuentaOrigenUId":  21, 
		"cuentaDestinoUId": 21, 
		"motivoAhorro": "", 
		"montoMetaAhorro": 0, 
		"fechaMetaAhorro": "0001-01-01", 
		"fechaInicioAhorro": "0001-01-01", 
		"diaIncremento": 9, 
		"abono": 1000, 
		"depositoInicial": 0, 
		"periodicidadIncremento": 1, 
		"plazo": 360 
	} 
}' 
``` 
</code-block> 
</code-group> 
<blockquote>
<p>El POST retornará la siguiente estructura:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
	<SOAP-ENV:Body> 
      <BTAhorroProgramado.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>f2f7be2ebc4A8B5C60A82434</Token> 
         </Btinreq> 
         <ahorroUId>61</ahorroUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>378</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTAhorroProgramado.Crear</Servicio> 
            <Fecha>2018-04-30</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>12:25:08</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTAhorroProgramado.CrearResponse> 
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
    "ahorroUId": "102", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "397", 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.Crear", 
        "Fecha": "2018-05-02", 
        "Requerimiento": "1", 
        "Hora": "18:40:30", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  
<h3 id="datos-de-entrada" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada"><span>Datos de entrada</span></a></h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Tipo</th>
<th>Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td>sdtAhorroProgramado</td>
<td>sBTAhorroProgramadoAlta</td>
<td>Datos de la solicitud de ahorro programado.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTAhorroProgramadoAlta son los siguientes:</p>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Tipo</th>
<th>Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td>abono</td>
<td>Decimal</td>
<td>Monto de abono periódico.</td>
</tr>
<tr>
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>fechaMetaAhorro</td>
<td>Date</td>
<td>Fecha máxima para el cumplimiento del ahorro.</td>
</tr>
<tr>
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
</tr>
<tr>
<td>diaIncremento</td>
<td>Int</td>
<td>Día del mes en el cual se realizara el incremento [1-31].</td>
</tr>
<tr>
<td>depositoInicial</td>
<td>Decimal</td>
<td>Depósito inicial del ahorro.</td>
</tr>
<tr>
<td>montoMetaAhorro</td>
<td>Decimal</td>
<td>Monto de la meta de ahorro.</td>
</tr>
<tr>
<td>cuentaOrigenUId</td>
<td>Long</td>
<td>Identificador único de operación de la cuenta origen del ahorro.</td>
</tr>
<tr>
<td>cuentaDestinoUId</td>
<td>Long</td>
<td>Identificador único de operación de la cuenta destino del ahorro.</td>
</tr>
<tr>
<td>motivoAhorro</td>
<td>String</td>
<td>Motivo por el cual se desea ahorrar.</td>
</tr>
<tr>
<td>fechaInicioAhorro</td>
<td>Date</td>
<td>Fecha de inicio del ahorro.</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo para la acreditación de interes del ahorro en días.</td>
</tr>
<tr>
<td>periodicidadIncremento</td>
<td>Int</td>
<td>Periodicidad del incremento en meses.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida" tabindex="-1"><a class="header-anchor" href="#datos-de-salida"><span>Datos de salida</span></a></h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Tipo</th>
<th>Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td>ahorroUId</td>
<td>Long</td>
<td>Identificador único de operación del ahorro programado.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<table>
<thead>
<tr>
<th>Código</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>30001</td>
<td>No se recibió el identificador de la persona.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador del cliente.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificador del producto.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recibió el identificador de la cuenta de origen del ahorro.</td>
</tr>
<tr>
<td>30005</td>
<td>No se recibió el identificador de la cuenta de destino del ahorro.</td>
</tr>
<tr>
<td>30006</td>
<td>No se recibió el abono para el ahorro.</td>
</tr>
<tr>
<td>30007</td>
<td>No se recibió el día de abono para el ahorro.</td>
</tr>
<tr>
<td>30008</td>
<td>No se recuperó la persona para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30009</td>
<td>No se recuperó la cuenta para el identificador de cliente: [Número de identificador].</td>
</tr>
<tr>
<td>30010</td>
<td>No se recuperó la cuenta origen del ahorro para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30011</td>
<td>No se recuperó la cuenta destino del ahorro para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30012</td>
<td>No se recuperó el producto de ahorro para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>40001</td>
<td>La Sucursal indicada es incorrecta.</td>
</tr>
<tr>
<td>40004</td>
<td>El plazo indicado es menor al mínimo permitido.</td>
</tr>
<tr>
<td>40005</td>
<td>El plazo indicado es mayor al máximo permitido.</td>
</tr>
<tr>
<td>40006</td>
<td>La cuota indicada es menor al mínimo permitido.</td>
</tr>
<tr>
<td>40007</td>
<td>La cuota indicada es mayor al máximo permitido.</td>
</tr>
<tr>
<td>40008</td>
<td>La cantidad de periodos de gracia indicado es menor al mínimo permitido.</td>
</tr>
<tr>
<td>40009</td>
<td>La cantidad de periodos de gracia indicado es mayor al máximo permitido.</td>
</tr>
<tr>
<td>40010</td>
<td>La cantidad máxima de renovaciones indicado es menor al mínimo permitido.</td>
</tr>
<tr>
<td>40011</td>
<td>La cantidad máxima de renovaciones indicado es mayor al máximo permitido.</td>
</tr>
<tr>
<td>40012</td>
<td>La periodicidad de incremento de ahorro ingresado es menor al mínimo permitido.</td>
</tr>
<tr>
<td>40013</td>
<td>La periodicidad de incremento de ahorro ingresado es mayor al máximo permitido.</td>
</tr>
<tr>
<td>40014</td>
<td>El intento de incremento ingresado es menor al mínimo permitido.</td>
</tr>
<tr>
<td>40015</td>
<td>El intento de incremento ingresado es mayor al máximo permitido.</td>
</tr>
<tr>
<td>40016</td>
<td>La tasa ingresada no puede ser nula.</td>
</tr>
<tr>
<td>40018</td>
<td>Se debe modificar la periodicidad o el plazo.</td>
</tr>
<tr>
<td>40023</td>
<td>El abono no puede ser menor al abono vigente.</td>
</tr>
<tr>
<td>40040</td>
<td>La Tasa indicada está fuera de tolerancia.</td>
</tr>
<tr>
<td>40050</td>
<td>El abono no debe superar el máximo permitido.</td>
</tr>
<tr>
<td>40051</td>
<td>El abono no debe ser inferior al minimo permitido.</td>
</tr>
<tr>
<td>40707</td>
<td>La fecha de inicio debe corresponder a un día hábil.</td>
</tr>
<tr>
<td>40708</td>
<td>La fecha de inicio no puede ser menor a la del día.</td>
</tr>
<tr>
<td>40709</td>
<td>El día de incremento debe ser un día hábil según el calendario.</td>
</tr>
<tr>
<td>40710</td>
<td>Debe indicar un plazo válido.</td>
</tr>
<tr>
<td>40711</td>
<td>No se ha ingresado el depósito inicial.</td>
</tr>
<tr>
<td>40712</td>
<td>La periodicidad de incremento no es válida para el plazo indicado.</td>
</tr>
<tr>
<td>40721</td>
<td>La fecha de la meta de ahorro no puede ser menor a la del día.</td>
</tr>
<tr>
<td>40800</td>
<td>Error de configuración: Solicitud de tasa interactiva.</td>
</tr>
<tr>
<td>40950</td>
<td>El depósito inicial es inferior al mínimo permitido (?)</td>
</tr>
<tr>
<td>40951</td>
<td>La fecha del primer incremento debe ser antes del [Fecha]</td>
</tr>
</tbody>
</table>
</div></template>


