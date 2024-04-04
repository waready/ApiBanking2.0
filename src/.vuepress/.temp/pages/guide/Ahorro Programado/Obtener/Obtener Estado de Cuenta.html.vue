<template><div><h1 id="obtener-estado-de-cuenta" tabindex="-1"><a class="header-anchor" href="#obtener-estado-de-cuenta"><span>Obtener Estado de Cuenta</span></a></h1>
<p>Método para obtener el estado de cuenta del ahorro.</p>
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
<td>BTAhorroProgramado.ObtenerEstadoDeCuenta</td>
<td>RBTPG249</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Estado de Cuenta:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.ObtenerEstadoDeCuenta> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>AC</bts:Device> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>01d52592724A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:ahorroUId>205</bts:ahorroUId> 
         <bts:fechaDesde>2017-03-06</bts:fechaDesde> 
         <bts:fechaHasta>2017-11-30</bts:fechaHasta> 
      </bts:BTAhorroProgramado.ObtenerEstadoDeCuenta> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ObtenerEstadoDeCuenta=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4' \ 
  -d '{ 
	"Btinreq": { 
        "Device": "AV", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "", 
        "Canal": "BTDIGITAL", 
        "Token": "75e20bd1614A8B5C60A82434" 
    }, 
    "ahorroUId": 205, 
	"fechaDesde": "2017-03-06", 
}'  "fechaHasta": "2017-11-30" 
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
      <BTAhorroProgramado.ObtenerEstadoDeCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AC</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>2a721032f94A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtEstadoCuentaAhorro> 
            <ahorroUId>205</ahorroUId> 
            <abonoActual>5000.00</abonoActual> 
            <periodicidad>1</periodicidad> 
            <periodosGraciaUtilizados>0</periodosGraciaUtilizados> 
            <totalInteresesGenerados>0.00</totalInteresesGenerados> 
            <clienteUId>61</clienteUId> 
            <fechaProximoVencimiento>2017-07-07</fechaProximoVencimiento> 
            <productoUId>82</productoUId> 
            <observacion>Se cumplió con la cantidad máxima de periodos de renovación.</observacion> 
            <intentosIncremento>0</intentosIncremento> 
            <diaIncremento>9</diaIncremento> 
            <movimientos> 
               <sBTMovimientoAhorro> 
                  <saldoAhorro>1000.00</saldoAhorro> 
                  <fecha>2017-03-06</fecha> 
                  <interes>0.00</interes> 
                  <capital>1000.00</capital> 
                  <concepto>Depósito inicial</concepto> 
               </sBTMovimientoAhorro> 
               <sBTMovimientoAhorro> 
                  <saldoAhorro>6000.00</saldoAhorro> 
                  <fecha>2017-04-10</fecha> 
                  <interes>0.00</interes> 
                  <capital>5000.00</capital> 
                  <concepto>Incremento de ahorro</concepto> 
               </sBTMovimientoAhorro> 
               <sBTMovimientoAhorro> 
                  <saldoAhorro>6016.77</saldoAhorro> 
                  <fecha>2017-05-08</fecha> 
                  <interes>16.77</interes> 
                  <capital>6000.00</capital> 
                  <concepto>Renovación del ahorro</concepto> 
               </sBTMovimientoAhorro> 
               <sBTMovimientoAhorro> 
                  <saldoAhorro>11016.77</saldoAhorro> 
                  <fecha>2017-05-09</fecha> 
                  <interes>0.00</interes> 
                  <capital>5000.00</capital> 
                  <concepto>Incremento de ahorro</concepto> 
               </sBTMovimientoAhorro> 
               <sBTMovimientoAhorro> 
                  <saldoAhorro>11200.75</saldoAhorro> 
                  <fecha>2017-11-30</fecha> 
                  <interes>183.98</interes> 
                  <capital>11055.89</capital> 
                  <concepto>Acreditación del ahorro</concepto> 
               </sBTMovimientoAhorro> 
            </movimientos> 
            <totalDepositado>11000.00</totalDepositado> 
            <totalInteresesAcreditados>200.75</totalInteresesAcreditados> 
            <renueva>No</renueva> 
            <operacionUIdOrigen>2</operacionUIdOrigen> 
            <operacionUIdDestino>2</operacionUIdDestino> 
            <estado>Cancelado</estado> 
         </sdtEstadoCuentaAhorro> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>9354</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTAhorroProgramado.ObtenerEstadoDeCuenta</Servicio> 
            <Fecha>2019-11-19</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:22:36</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTAhorroProgramado.ObtenerEstadoDeCuentaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "AV", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "", 
        "Canal": "BTDIGITAL", 
        "Token": "2a721032f94A8B5C60A82434" 
    }, 
    "sdtEstadoCuentaAhorro": { 
        "ahorroUId": 205, 
        "abonoActual": 5000, 
        "periodicidad": 1, 
        "periodosGraciaUtilizados": 0, 
        "totalInteresesGenerados": 0, 
        "clienteUId": 61, 
        "fechaProximoVencimiento": "2017-07-07", 
        "productoUId": 82, 
        "observacion": "Se cumplió con la cantidad máxima de periodos de renovación.", 
        "intentosIncremento": 0, 
        "diaIncremento": 9, 
        "movimientos": { 
            "sBTMovimientoAhorro": [ 
                { 
                    "saldoAhorro": 1000, 
                    "fecha": "2017-03-06", 
                    "interes": 0, 
                    "capital": 1000, 
                    "concepto": "Depósito inicial" 
                }, 
                { 
                    "saldoAhorro": 6000, 
                    "fecha": "2017-04-10", 
                    "interes": 0, 
                    "capital": 5000, 
                    "concepto": "Incremento de ahorro" 
                }, 
                { 
                    "saldoAhorro": 6016.77, 
                    "fecha": "2017-05-08", 
                    "interes": 16.77, 
                    "capital": 6000, 
                    "concepto": "Renovación del ahorro" 
                }, 
                { 
                    "saldoAhorro": 11016.77, 
                    "fecha": "2017-05-09", 
                    "interes": 0, 
                    "capital": 5000, 
                    "concepto": "Incremento de ahorro" 
                }, 
                { 
                    "saldoAhorro": 11200.75, 
                    "fecha": "2017-11-30", 
                    "interes": 183.98, 
                    "capital": 11055.89, 
                    "concepto": "Acreditación del ahorro" 
                } 
            ] 
        }, 
        "totalDepositado": 11000, 
        "totalInteresesAcreditados": 200.75, 
        "renueva": "No", 
        "operacionUIdOrigen": 2, 
        "operacionUIdDestino": 2, 
        "estado": "Cancelado" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 9355, 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.ObtenerEstadoDeCuenta", 
        "Fecha": "2019-11-19", 
        "Requerimiento": "", 
        "Hora": "11:26:34", 
        "Canal": "BTDIGITAL" 
    } 
} 
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
<td>ahorroUId</td>
<td>Long</td>
<td>Identificador único del ahorro.</td>
</tr>
<tr>
<td>fechaDesde</td>
<td>Date</td>
<td>Fecha desde la cual se emite el estado de cuenta</td>
</tr>
<tr>
<td>fechaHasta</td>
<td>Date</td>
<td>Fecha hasta la cual se emite el estado de cuenta</td>
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
<td>sdtEstadoCuentaAhorro</td>
<td>sBTEstadoCuentaAhorro</td>
<td>Estado de cuenta del ahorro.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTEstadoCuentaAhorro son los siguientes:</p>
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único del cliente.</td>
</tr>
<tr>
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>ahorroUId</td>
<td>Long</td>
<td>Identificador único del ahorro.</td>
</tr>
<tr>
<td>fechaPróximoVencimiento</td>
<td>Date</td>
<td>Fecha del próximo vencimiento del ahorro.</td>
</tr>
<tr>
<td>periodicidad</td>
<td>Short</td>
<td>Periodicidad del ahorro en días.</td>
</tr>
<tr>
<td>díaIncremento</td>
<td>Short</td>
<td>Día en que se da el incremento.</td>
</tr>
<tr>
<td>abonoActual</td>
<td>Double</td>
<td>Abono actual.</td>
</tr>
<tr>
<td>intentosIncremento</td>
<td>Short</td>
<td>Intentos de incremento permitidos.</td>
</tr>
<tr>
<td>periodosGraciaUtilizados</td>
<td>Short</td>
<td>Períodos de gracia utilizados.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado del ahorro.</td>
</tr>
<tr>
<td>renueva</td>
<td>String</td>
<td>¿Renueva? (S/N).</td>
</tr>
<tr>
<td>observacion</td>
<td>String</td>
<td>Observación.</td>
</tr>
<tr>
<td>operacionUIdOrigen</td>
<td>Long</td>
<td>Identificador único de la operación de origen.</td>
</tr>
<tr>
<td>operacionUIdDestino</td>
<td>Long</td>
<td>Identificador único de la operación de destino.</td>
</tr>
<tr>
<td>movimientos</td>
<td>sBTMovimientoAhorro</td>
<td>Listado de movimientos del ahorro.</td>
</tr>
<tr>
<td>totalDepositado</td>
<td>Double</td>
<td>Saldo total depositado.</td>
</tr>
<tr>
<td>totalInteresesAcreditados</td>
<td>Double</td>
<td>Total de intereses acreditados.</td>
</tr>
<tr>
<td>totalInteresesGenerados</td>
<td>Double</td>
<td>Total de intereses generados.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTMovimientoAhorro son los siguientes:</p>
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
<td>saldoAhorro</td>
<td>Double</td>
<td>Saldo del ahorro.</td>
</tr>
<tr>
<td>fecha</td>
<td>Date</td>
<td>Fecha de movimiento.</td>
</tr>
<tr>
<td>intereses</td>
<td>Double</td>
<td>Intereses del movimiento.</td>
</tr>
<tr>
<td>capital</td>
<td>Double</td>
<td>Capital de movimiento.</td>
</tr>
<tr>
<td>concepto</td>
<td>String</td>
<td>Concepto de movimiento.</td>
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
<td>No se recibió identificador de la operación.</td>
</tr>
<tr>
<td>30011</td>
<td>No se recupero la operación para el identificador recibido.</td>
</tr>
</tbody>
</table>
</div></template>


