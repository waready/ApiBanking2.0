<template><div><h1 id="simular-prestamo-plazo-fijo" tabindex="-1"><a class="header-anchor" href="#simular-prestamo-plazo-fijo"><span>Simular Préstamo Plazo Fijo</span></a></h1>
<p>Método para simular el alta de un préstamo plazo fijo para un crédito individual.</p>
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
<td>BTMicrofinanzas.SimularPlazoFijo</td>
<td>RBTPG424</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Simular Préstamo Plazo Fijo:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.SimularPlazoFijo> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>95</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1571835133CD285A89A23FBE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:sBTSimulacionPlazoFijo> 
            <bts:solicitudUId>10972</bts:solicitudUId> 
            <bts:clienteUId>2</bts:clienteUId> 
            <bts:productoUId>29</bts:productoUId> 
            <bts:fechaVencimiento/> 
            <bts:plazo>365</bts:plazo> 
            <bts:monto>35000</bts:monto> 
            <bts:pizarra/> 
            <bts:tasa/> 
            <bts:destinoCredito>28</bts:destinoCredito> 
            <bts:datosAdicionales/> 
         </bts:sBTSimulacionPlazoFijo> 
      </bts:BTMicrofinanzas.SimularPlazoFijo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?SimularPlazoFijo \ 
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
        "sBTSimulacionPlazoFijo": { 
          "solicitudUId": "10972", 
          "clienteUId": "2", 
          "productoUId": "29", 
          "plazo": "365", 
          "monto": "35000", 
          "destinoCredito": "28" 
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
      <BTMicrofinanzas.SimularPlazoFijoResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>95</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1571835133CD285A89A23FBE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtSimulacion> 
            <operacionUId>18</operacionUId> 
            <producto> 
               <productoUId>29</productoUId> 
               <nombre>PRÉSTAMOS SECTORIALES (PASIVO), Plazo Fijo</nombre> 
               <moneda/> 
               <papel>$</papel> 
            </producto> 
            <capital>35000.00</capital> 
            <valorCuota>40323.00</valorCuota> 
            <intereses>5323.00</intereses> 
            <tasa>15.000000</tasa> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <tasaEfectivaAnual>14.985122</tasaEfectivaAnual> 
            <tasaNominalAnual>15.000000</tasaNominalAnual> 
            <totalPrestamo>40323.00</totalPrestamo> 
            <fechaValor>2020-10-20</fechaValor> 
            <fechaVencimiento>2021-10-20</fechaVencimiento> 
            <fechaPrimerPago>2021-10-20</fechaPrimerPago> 
            <plazo>365</plazo> 
            <otrosConceptos></otrosConceptos> 
            <cronograma> 
               <sBTCuotaPrestamoAlta> 
                  <fechaPago>2021-10-20</fechaPago> 
                  <importe>40323.00</importe> 
                  <redondeo>0.00</redondeo> 
               </sBTCuotaPrestamoAlta> 
            </cronograma> 
         </sdtSimulacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.SimularPlazoFijo</Servicio> 
            <Fecha>2019-10-18</Fecha> 
            <Hora>15:43:17</Hora> 
            <Requerimiento>95</Requerimiento> 
            <Numero>1317</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.SimularPlazoFijoResponse> 
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
        "sdtSimulacion": { 
          "operacionUId": "18", 
          "producto": { 
            "productoUId": "29", 
            "nombre": "PRÉSTAMOS SECTORIALES (PASIVO), Plazo Fijo", 
            "papel": "$" 
          }, 
          "capital": "35000.00", 
          "valorCuota": "40323.00", 
          "intereses": "5323.00", 
          "tasa": "15.000000", 
          "tasaEfectiva": "0.000000", 
          "tasaEfectivaAnual": "14.985122", 
          "tasaNominalAnual": "15.000000", 
          "totalPrestamo": "40323.00", 
          "fechaValor": "2020-10-20", 
          "fechaVencimiento": "2021-10-20", 
          "fechaPrimerPago": "2021-10-20", 
          "plazo": "365", 
          "cronograma": { 
            "sBTCuotaPrestamoAlta": { 
              "fechaPago": "2021-10-20", 
              "importe": "40323.00", 
              "redondeo": "0.00" 
            } 
          } 
        }, 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTMicrofinanzas.SimularPlazoFijo", 
          "Fecha": "2019-10-18", 
          "Hora": "15:43:17", 
          "Requerimiento": "95", 
          "Numero": "1317", 
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
<td>sBTSimulacionPlazoFijo</td>
<td>sBTSimulacionPlazoFijo</td>
<td>Datos de la simulación.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSimulacionPlazoFijo son los siguientes:</p>
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
<td>solicitudUId</td>
<td>Long</td>
<td>Identificador de instancia Workflow.</td>
</tr>
<tr>
<td>clienteUId*</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>productoUId*</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de Vencimiento (Obligatorio si no se carga plazo).</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo (Obligatorio si no se carga Fecha de Vencimiento).</td>
</tr>
<tr>
<td>monto*</td>
<td>Double</td>
<td>Capital solicitado.</td>
</tr>
<tr>
<td>pizarra</td>
<td>Short</td>
<td>Tipo de pizzarra. Si no se indica toma la preseteada para el producto.</td>
</tr>
<tr>
<td>tasa</td>
<td>Double</td>
<td>Tasa. Si no se indica toma la correspondiente al tipo de pizarra.</td>
</tr>
<tr>
<td>destinoCredito</td>
<td>Long</td>
<td>Código de destino del crédito.</td>
</tr>
<tr>
<td>datosAdicionales</td>
<td>sBTConcepto</td>
<td>Importe otros conceptos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTConcepto son los siguientes:</p>
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
<td>concepto</td>
<td>String</td>
<td>Concepto.</td>
</tr>
<tr>
<td>valor</td>
<td>Double</td>
<td>Importe.</td>
</tr>
<tr>
<td>texto</td>
<td>String</td>
<td>Texto.</td>
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
<td>sdtSimulacion</td>
<td>sBTSimulacionPrestamo</td>
<td>Datos del préstamo simulado.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:</p>
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Datos del producto.</td>
</tr>
<tr>
<td>capital</td>
<td>Double</td>
<td>Capital del préstamo.</td>
</tr>
<tr>
<td>valorCuota</td>
<td>Double</td>
<td>Valor cuota.</td>
</tr>
<tr>
<td>intereses</td>
<td>Double</td>
<td>Intereses.</td>
</tr>
<tr>
<td>tasa</td>
<td>Double</td>
<td>Tasa.</td>
</tr>
<tr>
<td>tasaEfectiva</td>
<td>Double</td>
<td>Tasa efectiva.</td>
</tr>
<tr>
<td>tasaEfectivaAnual</td>
<td>Double</td>
<td>Tasa efectiva anual.</td>
</tr>
<tr>
<td>tasaNominalAnual</td>
<td>Double</td>
<td>Tasa nominal anual.</td>
</tr>
<tr>
<td>totalPrestamo</td>
<td>Double</td>
<td>Total a pagar.</td>
</tr>
<tr>
<td>fechaValor</td>
<td>Date</td>
<td>Fecha valor.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento.</td>
</tr>
<tr>
<td>fechaPrimerPago</td>
<td>Date</td>
<td>Fecha de primer pago.</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo.</td>
</tr>
<tr>
<td>otrosConceptos</td>
<td>sBTConcepto</td>
<td>Importe otros conceptos.</td>
</tr>
<tr>
<td>cronograma</td>
<td>sBTCuotaSimulacion</td>
<td>Cronograma del préstamo.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTConcepto son los siguientes:</p>
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
<td>concepto</td>
<td>String</td>
<td>Concepto.</td>
</tr>
<tr>
<td>valor</td>
<td>Double</td>
<td>Importe.</td>
</tr>
<tr>
<td>texto</td>
<td>String</td>
<td>Texto.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCuotaSimulacion son los siguientes:</p>
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
<td>fechaPago</td>
<td>Date</td>
<td>Fecha de pago.</td>
</tr>
<tr>
<td>tipoCuota</td>
<td>String</td>
<td>Tipo de la cuota (Capital/Interés).</td>
</tr>
<tr>
<td>concepto</td>
<td>String</td>
<td>Concepto.</td>
</tr>
<tr>
<td>capital</td>
<td>Double</td>
<td>Monto de capital en la cuota.</td>
</tr>
<tr>
<td>interes</td>
<td>Double</td>
<td>Monto de intereses en la cuota.</td>
</tr>
<tr>
<td>seguros</td>
<td>Double</td>
<td>Monto de seguros en la cuota.</td>
</tr>
<tr>
<td>impuestos</td>
<td>Double</td>
<td>Monto de impuestos en la cuota.</td>
</tr>
<tr>
<td>otrosConceptos</td>
<td>Double</td>
<td>Importe correspondiente a otros conceptos.</td>
</tr>
<tr>
<td>cuota</td>
<td>Double</td>
<td>Importe total de la cuota.</td>
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
<td>No se recibió el identificador de la solicitud.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificador de producto.</td>
</tr>
<tr>
<td>30004</td>
<td>El producto indicado no es válido.</td>
</tr>
<tr>
<td>30005</td>
<td>No se recuperó la cuenta para el Identificador.</td>
</tr>
<tr>
<td>30006</td>
<td>El monto solicitado no puede ser 0.</td>
</tr>
<tr>
<td>30007</td>
<td>Debe ingresar plazo o fecha de vencimiento.</td>
</tr>
</tbody>
</table>
</div></template>


