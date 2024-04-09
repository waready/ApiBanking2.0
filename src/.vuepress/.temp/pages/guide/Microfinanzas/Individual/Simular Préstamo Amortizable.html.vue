<template><div><h1 id="simular-prestamo-amortizable" tabindex="-1"><a class="header-anchor" href="#simular-prestamo-amortizable"><span>Simular Préstamo Amortizable</span></a></h1>
<p>Método para simular la solicitud de un préstamo amortizable.</p>
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
<td>BTMicrofinanzas.SimularAmortizable</td>
<td>RBTPG422</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Simular Préstamo Amortizable:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.SimularAmortizable> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>95</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>987391075CD285A89A23FBEE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:sBTSimulacionAmortizable> 
            <bts:solicitudUId>10896</bts:solicitudUId> 
            <bts:clienteUId>7</bts:clienteUId> 
            <bts:productoUId>23</bts:productoUId> 
            <bts:fechaPrimerPago>2020-12-21</bts:fechaPrimerPago> 
            <bts:cantidadCuotas>3</bts:cantidadCuotas> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
            <bts:monto>30000</bts:monto> 
            <bts:pizarra>0</bts:pizarra> 
            <bts:tasa>0</bts:tasa> 
            <bts:destinoCredito>33</bts:destinoCredito> 
            <bts:datosAdicionales/> 
         </bts:sBTSimulacionAmortizable> 
      </bts:BTMicrofinanzas.SimularAmortizable> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?SimularAmortizable \ 
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
      "sBTSimulacionAmortizable": { 
          "solicitudUId": "10896", 
          "clienteUId": "7", 
          "productoUId": "23", 
          "fechaPrimerPago": "2020-12-21", 
          "cantidadCuotas": "3", 
          "periodoCuotas": "30", 
          "monto": "30000", 
          "pizarra": "0", 
          "tasa": "0", 
          "destinoCredito": "33" 
        } 
      } 
    } 
  } 
} 
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
      <BTMicrofinanzas.SimularAmortizableResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>95</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1571835133CD285A89A23FBE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtSimulacion> 
            <operacionUId>15</operacionUId> 
            <producto> 
               <productoUId>23</productoUId> 
               <nombre>HIPOTECARIOS VIVIENDA, VIVIENDA HIPOTECARIO</nombre> 
               <moneda>Q</moneda> 
               <papel>$</papel> 
            </producto> 
            <capital>30000.00</capital> 
            <valorCuota>10783.16</valorCuota> 
            <intereses>2349.48</intereses> 
            <tasa>30.000000</tasa> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <tasaEfectivaAnual>34.488882</tasaEfectivaAnual> 
            <tasaNominalAnual>30.000000</tasaNominalAnual> 
            <totalPrestamo>32349.48</totalPrestamo> 
            <fechaValor>2020-10-20</fechaValor> 
            <fechaVencimiento>2021-02-20</fechaVencimiento> 
            <fechaPrimerPago>2020-12-21</fechaPrimerPago> 
            <plazo>123</plazo> 
            <otrosConceptos></otrosConceptos> 
            <cronograma> 
               <sBTCuotaPrestamoAlta> 
                  <fechaPago>2020-12-21</fechaPago> 
                  <importe>10783.16</importe> 
                  <redondeo>0.00</redondeo> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <fechaPago>2021-01-21</fechaPago> 
                  <importe>10783.16</importe> 
                  <redondeo>0.00</redondeo> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <fechaPago>2021-02-20</fechaPago> 
                  <importe>10783.16</importe> 
                  <redondeo>0.00</redondeo> 
               </sBTCuotaPrestamoAlta> 
            </cronograma> 
         </sdtSimulacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.SimularAmortizable</Servicio> 
            <Fecha>2019-10-18</Fecha> 
            <Hora>15:48:00</Hora> 
            <Requerimiento>95</Requerimiento> 
            <Numero>1319</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.SimularAmortizableResponse> 
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
          "operacionUId": "15", 
          "producto": { 
            "productoUId": "23", 
            "nombre": "HIPOTECARIOS VIVIENDA, VIVIENDA HIPOTECARIO", 
            "moneda": "Q", 
            "papel": "$" 
          }, 
          "capital": "30000.00", 
          "valorCuota": "10783.16", 
          "intereses": "2349.48", 
          "tasa": "30.000000", 
          "tasaEfectiva": "0.000000", 
          "tasaEfectivaAnual": "34.488882", 
          "tasaNominalAnual": "30.000000", 
          "totalPrestamo": "32349.48", 
          "fechaValor": "2020-10-20", 
          "fechaVencimiento": "2021-02-20", 
          "fechaPrimerPago": "2020-12-21", 
          "plazo": "123", 
          "cronograma": { 
            "sBTCuotaPrestamoAlta": [ 
              { 
                "fechaPago": "2020-12-21", 
                "importe": "10783.16", 
                "redondeo": "0.00" 
              }, 
              { 
                "fechaPago": "2021-01-21", 
                "importe": "10783.16", 
                "redondeo": "0.00" 
              }, 
              { 
                "fechaPago": "2021-02-20", 
                "importe": "10783.16", 
                "redondeo": "0.00" 
              } 
            ] 
          } 
        }, 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTMicrofinanzas.SimularAmortizable", 
          "Fecha": "2019-10-18", 
          "Hora": "15:48:00", 
          "Requerimiento": "95", 
          "Numero": "1319", 
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
<td>sBTSimulacionAmortizable</td>
<td>sBTSimulacionAmortizable</td>
<td>Datos de la simulación.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSimulacionAmortizable son los siguientes:</p>
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
<td>fechaPrimerPago</td>
<td>Date</td>
<td>Fecha de primer pago.</td>
</tr>
<tr>
<td>cantidadCuotas*</td>
<td>Int</td>
<td>Cantidad de cuotas.</td>
</tr>
<tr>
<td>periodoCuotas</td>
<td>Int</td>
<td>Período entre vencimiento de cada cuota.</td>
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
<td>No se recuperó la cuenta para el Identificador</td>
</tr>
</tbody>
</table>
</div></template>


