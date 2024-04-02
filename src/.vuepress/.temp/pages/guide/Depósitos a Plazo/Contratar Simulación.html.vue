<template><div><h1 id="contratar-simulacion" tabindex="-1"><a class="header-anchor" href="#contratar-simulacion"><span>Contratar Simulación</span></a></h1>
<p>Método para contratar un depósito a plazo fijo a partir de una simulación existente.</p>
<p>Este servicio sirve para contratar simulaciones realizadas desde el servicio BTDepositoAPlazo.SimularConCronograma</p>
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
<td>BTDepositoAPlazo.ContratarSimulacion</td>
<td>RBTPG457</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>
<p>Configuración de productos válidos:</p>
<ul>
<li>Se debe agregar en la guía especial 70101, para cada producto de la siguiente manera:</li>
</ul>
</li>
</ol>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Valor</th>
</tr>
</thead>
<tbody>
<tr>
<td>Correlativo 1</td>
<td>Módulo.</td>
</tr>
<tr>
<td>Correlativo 2</td>
<td>Tipo de operación (El valor 999 indica todos los tipos de operación).</td>
</tr>
<tr>
<td>Correlativo 3</td>
<td>Valor incremental.</td>
</tr>
<tr>
<td>Valor específico 1</td>
<td>Moneda (El valor 9999 indica todas las monedas).</td>
</tr>
<tr>
<td>Valor específico 2</td>
<td>Papel (El valor 999999 indica todos los papeles).</td>
</tr>
<tr>
<td>Valor específico 3</td>
<td>Código de instrucción a habilitar.</td>
</tr>
<tr>
<td>Importe específico 1</td>
<td>Tipo de deposito (1- Deposito al venicmiento, 2- Pago periódico de intereses).</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Contratar Simulacion:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.ContratarSimulacion> 
        <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>30F74741A02C318CEFD55684</bts:Token> 
            <bts:Device>GL</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>10009</bts:clienteUId> 
         <bts:simulacionId>93</bts:simulacionId> 
         <bts:InstruccionVTO>6</bts:InstruccionVTO> 
         <bts:cuentaUIdDestinoVTO></bts:cuentaUIdDestinoVTO> 
         <bts:InstruccionPP>7</bts:InstruccionPP> 
         <bts:cuentaUIdDestinoPP>10120</bts:cuentaUIdDestinoPP> 
         <bts:cuentaUIdDebito>10120</bts:cuentaUIdDebito> 
         <bts:sBTDatosExtendidos/> 
      </bts:BTDepositosAPlazo.ContratarSimulacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Requerimiento": 1, 
          "Usuario": "INSTALADOR", 
          "Token": "30F74741A02C318CEFD55684", 
          "Device": "GL" 
        }, 
        "clienteUId": 10009, 
        "simulacionId": 93, 
        "InstruccionVTO": 6, 
        "cuentaUIdDestinoVTO": "", 
        "InstruccionPP": 7, 
        "cuentaUIdDestinoPP": 10120, 
        "cuentaUIdDebito": 10120, 
        "sBTDatosExtendidos": "" 
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
      <BTDepositosAPlazo.ContratarSimulacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>30F74741A02C318CEFD55684</Token> 
            <Device>GL</Device> 
         </Btinreq> 
         <sBTDatosExtendidos></sBTDatosExtendidos> 
         <operacionUId>15</operacionUId> 
         <movimientoUId>15</movimientoUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTDepositosAPlazo.ContratarSimulacion</Servicio> 
            <Fecha>2022-11-29</Fecha> 
            <Hora>11:35:46</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>507</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTDepositosAPlazo.ContratarSimulacionResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Requerimiento": 1, 
          "Usuario": "INSTALADOR", 
          "Token": "30F74741A02C318CEFD55684", 
          "Device": "GL" 
        }, 
        "sBTDatosExtendidos": "", 
        "operacionUId": 15, 
        "movimientoUId": 15, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTDepositosAPlazo.ContratarSimulacion", 
          "Fecha": "2022-11-29", 
          "Hora": "11:35:46", 
          "Requerimiento": 1, 
          "Numero": 507, 
          "Estado": "OK" 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>simulacionId</td>
<td>Long</td>
<td>Identificador único de la simulación.</td>
</tr>
<tr>
<td>instruccionVTO</td>
<td>Short</td>
<td>Identificador de la intrucción al vencimento</td>
</tr>
<tr>
<td>cuentaUIdDestinoVTO</td>
<td>Long</td>
<td>Identificador único de la operación de la cuenta destino al vencimiento.</td>
</tr>
<tr>
<td>InstruccionPP</td>
<td>Long</td>
<td>Identificador de la instruccion de pago periódico.</td>
</tr>
<tr>
<td>cuentaUIdDestinoPP</td>
<td>Short</td>
<td>Identificador único de la operación de la cuenta destino del pago periodico.</td>
</tr>
<tr>
<td>cuentaUIdDebito</td>
<td>Long</td>
<td>Identificador único de la operación de la cuenta de débito.</td>
</tr>
<tr>
<td>sdtDatosExtendidos</td>
<td>sBTDatoExtendido</td>
<td>Listado de datos complementarios.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes:</p>
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
<td>clave</td>
<td>String</td>
<td>Clave del dato extendido.</td>
</tr>
<tr>
<td>tipo</td>
<td>String</td>
<td>Tipo de dato extendido.</td>
</tr>
<tr>
<td>valor</td>
<td>String</td>
<td>Valor de dato extendido.</td>
</tr>
<tr>
<td>Lista</td>
<td>sBTDatosLista</td>
<td>Lista de datos.</td>
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
<td>sdtDatosExtendidos</td>
<td>sBTDatoExtendido</td>
<td>Listado de datos complementarios.</td>
</tr>
<tr>
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de la operación.</td>
</tr>
<tr>
<td>movimientoUId</td>
<td>Long</td>
<td>Identificador único de movimiento.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes:</p>
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
<td>clave</td>
<td>String</td>
<td>Clave del dato extendido.</td>
</tr>
<tr>
<td>tipo</td>
<td>String</td>
<td>Tipo de dato extendido.</td>
</tr>
<tr>
<td>valor</td>
<td>String</td>
<td>Valor de dato extendido.</td>
</tr>
<tr>
<td>Lista</td>
<td>sBTDatosLista</td>
<td>Lista de datos.</td>
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
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador de la simulación.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió la instrucción de acreditación al vencimiento.</td>
</tr>
<tr>
<td>30005</td>
<td>No se recibió la instrucción de acreditación periodica.</td>
</tr>
<tr>
<td>30007</td>
<td>No se recibió el identificador de cuenta de débito.</td>
</tr>
<tr>
<td>30010</td>
<td>No se recuperaron datos para el identificador de cliente: [Número de identificador].</td>
</tr>
<tr>
<td>30011</td>
<td>No se recuperaron datos para el identificador de cuenta de acreditación al vencimiento: [Número de identificador].</td>
</tr>
<tr>
<td>30012</td>
<td>No se recuperaron datos para el identificador de cuenta de acreditación periodica: [Número de identificador].</td>
</tr>
<tr>
<td>30013</td>
<td>No se recuperaron datos para el identificador de cuenta de debito: [Número de identificador].</td>
</tr>
<tr>
<td>30015</td>
<td>La simulación no esta disponible para su contratación.</td>
</tr>
<tr>
<td>30016</td>
<td>La simulación no se ecuentra vigente para su contratación.</td>
</tr>
<tr>
<td>30017</td>
<td>La simulación no corresponde al cliente.</td>
</tr>
<tr>
<td>30020</td>
<td>Ocurrio un error al generar el Identificador de movimiento.</td>
</tr>
<tr>
<td>30021</td>
<td>Ocurrio un error al generar el Identificador de operación de depósito.</td>
</tr>
<tr>
<td>30100</td>
<td>Error en la contabilización.</td>
</tr>
</tbody>
</table>
</div></template>


