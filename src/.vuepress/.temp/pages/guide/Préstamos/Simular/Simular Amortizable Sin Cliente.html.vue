<template><div><h1 id="simular-amortizable-sin-cliente" tabindex="-1"><a class="header-anchor" href="#simular-amortizable-sin-cliente"><span>Simular Amortizable Sin Cliente</span></a></h1>
<p>Método para simular el alta de un préstamo amortizable sin cliente.</p>
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
<td>BTPrestamos.SimularAmortizableSinCliente</td>
<td>RBTPG265</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Simular Amortizable Sin Cliente:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.SimularAmortizableSinCliente> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>72e34bcd9d4A8B5C60A82434</bts:Token> 
            <bts:Device>AV</bts:Device>          
         </bts:Btinreq> 
         <bts:sdtDatosAmortizable> 
            <bts:monto>10000</bts:monto> 
            <bts:productoUId>61</bts:productoUId> 
            <bts:fechaPrimerPago>2019-01-12</bts:fechaPrimerPago> 
            <bts:pizarra></bts:pizarra> 
            <bts:tasa></bts:tasa> 
            <bts:actividad>11200</bts:actividad> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
            <bts:cantidadCuotas>12</bts:cantidadCuotas> 
         </bts:sdtDatosAmortizable> 
      </bts:BTPrestamos.SimularAmortizableSinCliente> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularAmortizableSinCliente=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "sdtDatosAmortizable": { 
        "productoUId": 61, 
        "fechaPrimerPago": "2018-12-10", 
        "monto": 1000, 
        "cantidadCuotas": 12, 
        "periodoCuotas": 30, 
		"pizarra": 0, 
		"tasa": 0, 
		"actividad": 11200, 
		"periodoCuotas": 30, 
		"cantidadCuotas": 12 
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
      <BTPrestamos.SimularAmortizableSinClienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>72e34bcd9d4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtSimulacion> 
            <otrosConceptos></otrosConceptos> 
            <cronograma> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-01-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-02-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-03-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-04-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-05-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-06-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-07-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-08-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-09-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-10-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-11-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.04</importe> 
                  <fechaPago>2019-12-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
            </cronograma> 
            <fechaValor>2018-12-11</fechaValor> 
            <capital>10000.00</capital> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <intereses>1288.18</intereses> 
            <tasaNominalAnual>23.000000</tasaNominalAnual> 
            <totalPrestamo>14328.15</totalPrestamo> 
            <valorCuota>1194.01</valorCuota> 
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual> 
            <operacionUId>1</operacionUId> 
            <tasa>23.000000</tasa> 
            <fechaPrimerPago>2019-01-12</fechaPrimerPago> 
            <fechaVencimiento>2019-12-12</fechaVencimiento> 
            <plazo>361</plazo> 
            <producto> 
               <papel>$</papel> 
               <moneda>$</moneda> 
               <productoUId>61</productoUId> 
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre> 
            </producto> 
         </sdtSimulacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>623</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.SimularAmortizableSinCliente</Servicio> 
            <Fecha>2019-11-20</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>09:23:04</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.SimularAmortizableSinClienteResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "1", 
        "Usuario": "BANTOTAL", 
        "Token": "1017966210F955E77534D3E0", 
        "Device": "AC" 
    }, 
    "sdtSimulacionPrestamo": { 
        "operacionUId": 1, 
        "producto": { 
            "productoUId": 61, 
            "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF", 
            "moneda": "$", 
            "papel": "$" 
        }, 
        "capital": 1000.00, 
        "valorCuota": 420.44, 
        "intereses": 87.11, 
        "tasa": 3.052000, 
        "tasaEfectiva": 0.000000, 
        "tasaEfectivaAnual": 3.052000, 
        "tasaNominalAnual": 3.010070, 
        "totalPrestamo": 5045.27, 
        "fechaValor": "2016-08-15", 
        "fechaVencimiento": "2019-11-11", 
        "fechaPrimerPago": "2018-12-10", 
        "plazo": 1183, 
        "otrosConceptos": { 
            "sBTConcepto": [] 
        }, 
        "cronograma": { 
            "sBTCuotaPrestamoAlta": [ 
                { 
                    "fechaPago": "2018-12-10", 
                    "importe": 2934.49 
                }, 
                { 
                    "fechaPago": "2019-01-10", 
                    "importe": 192.14 
                }, 
                { 
                    "fechaPago": "2019-02-11", 
                    "importe": 192.11 
                }, 
                { 
                    "fechaPago": "2019-03-11", 
                    "importe": 192.00 
                }, 
                { 
                    "fechaPago": "2019-04-10", 
                    "importe": 191.98 
                }, 
                { 
                    "fechaPago": "2019-05-10", 
                    "importe": 191.93 
                }, 
                { 
                    "fechaPago": "2019-06-10", 
                    "importe": 191.89 
                }, 
                { 
                    "fechaPago": "2019-07-10", 
                    "importe": 191.83 
                }, 
                { 
                    "fechaPago": "2019-08-12", 
                    "importe": 191.81 
                }, 
                { 
                    "fechaPago": "2019-09-10", 
                    "importe": 191.73 
                }, 
                { 
                    "fechaPago": "2019-10-10", 
                    "importe": 191.69 
                }, 
                { 
                    "fechaPago": "2019-11-11", 
                    "importe": 191.67 
                } 
            ] 
        } 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPrestamos.SimularAmortizableSinCliente", 
        "Fecha": "2019-11-20", 
        "Hora": "11:44:44", 
        "Requerimiento": "1", 
        "Numero": 7048, 
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
<td>sdtDatosAmortizable</td>
<td>sBTDatosAmortizable</td>
<td>Datos de la simulación.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatosAmortizable son los siguientes:</p>
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
<td>actividad**</td>
<td>Long</td>
<td>Código de actividad (Destino del crédito).</td>
</tr>
<tr>
<td>periodoCuotas</td>
<td>Int</td>
<td>Período entre cuotas.</td>
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
<td>Datos del préstamo simulado</td>
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
<td>Plazo del préstamo.</td>
</tr>
<tr>
<td>otrosConceptos</td>
<td>sBTConcepto</td>
<td>Otros conceptos.</td>
</tr>
<tr>
<td>cronograma</td>
<td>sBTCuotaPrestamoAlta</td>
<td>Cronograma del préstamo.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTProducto son los siguientes:</p>
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
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre de producto</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Símbolo de moneda</td>
</tr>
<tr>
<td>papel</td>
<td>String</td>
<td>Símbolo de papel</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo estructurado sBTCuotaPrestamoAlta son los siguientes:</p>
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
<td>Fecha de pago de la cuota.</td>
</tr>
<tr>
<td>importe</td>
<td>Double</td>
<td>Importe de la cuota.</td>
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
<td>No se recibió el identificador de producto.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recuperó la cuenta para el Identificador.</td>
</tr>
<tr>
<td>30004</td>
<td>El Identificador único de Producto es incorrecto.</td>
</tr>
<tr>
<td>30005</td>
<td>No se recibió la Fecha de Primer Pago desde el origen.</td>
</tr>
<tr>
<td>30006</td>
<td>No se recibió el Monto de Capital desde el origen.</td>
</tr>
<tr>
<td>31001</td>
<td>La simulación no está vigente.</td>
</tr>
<tr>
<td>31002</td>
<td>La simulación no existe.</td>
</tr>
<tr>
<td>40001</td>
<td>La Cuenta indicada es incorrecta.</td>
</tr>
<tr>
<td>40012</td>
<td>La Fecha de Primer Pago indicada es menor a la Fecha Valor.</td>
</tr>
<tr>
<td>40013</td>
<td>La Fecha de Vencimiento indicada es menor a la Fecha Valor.</td>
</tr>
<tr>
<td>40014</td>
<td>La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimien.</td>
</tr>
<tr>
<td>40015</td>
<td>El Plazo Total indicado es incorrecto.</td>
</tr>
<tr>
<td>40016</td>
<td>La Cantidad de Cuotas indicada es menor al mínimo permitido.</td>
</tr>
<tr>
<td>40017</td>
<td>La Cantidad de Cuotas indicada es mayor al máximo permitido.</td>
</tr>
<tr>
<td>40018</td>
<td>La Cantidad de Cuotas indicada es incorrecta.</td>
</tr>
<tr>
<td>40019</td>
<td>La Cantidad de Cuotas indicada no está preseteada.</td>
</tr>
<tr>
<td>40020</td>
<td>El período entre Cuotas indicado es menor al mínimo permitido.</td>
</tr>
<tr>
<td>40021</td>
<td>El período entre Cuotas indicado es mayor al máximo permitido.</td>
</tr>
<tr>
<td>40022</td>
<td>El período entre Cuotas indicado es incorrecto.</td>
</tr>
<tr>
<td>40023</td>
<td>El período entre Cuotas indicado no está preseteado.</td>
</tr>
<tr>
<td>40024</td>
<td>El Valor Cuota indicado es incorrecto.</td>
</tr>
<tr>
<td>40025</td>
<td>El Capital indicado es menor al mínimo permitido.</td>
</tr>
<tr>
<td>40026</td>
<td>El Capital indicado es mayor al máximo permitido.</td>
</tr>
<tr>
<td>40027</td>
<td>El Capital indicado es incorrecto.</td>
</tr>
<tr>
<td>40037</td>
<td>La Clase de Tasa indicada es incorrecta.</td>
</tr>
<tr>
<td>40040</td>
<td>La Tasa Fija indicada está fuera de tolerancia.</td>
</tr>
<tr>
<td>40041</td>
<td>La Tasa indicada es mayor a la Tasa de Usura.</td>
</tr>
<tr>
<td>40048</td>
<td>El período indicado es incorrecto.</td>
</tr>
<tr>
<td>40049</td>
<td>El Tipo de Tasa indicado es incorrecto.</td>
</tr>
<tr>
<td>40054</td>
<td>La Tasa indicada es incorrecta.</td>
</tr>
<tr>
<td>40071</td>
<td>El Plazo Total de la Operación es mayor al máximo permitido.</td>
</tr>
<tr>
<td>40072</td>
<td>El Plazo Total de la Operación es menor al mínimo permitido.</td>
</tr>
<tr>
<td>40076</td>
<td>El Producto indicado no está Preseteado.</td>
</tr>
<tr>
<td>40147</td>
<td>No se cumple el período mínimo entre Fecha Valor y Fecha de Prime.</td>
</tr>
<tr>
<td>40148</td>
<td>El Capital indicado debe ser mayor al Valor Cuota.</td>
</tr>
<tr>
<td>40149</td>
<td>No se cumple el período máximo entre Fecha Valor y Fecha de Prime.</td>
</tr>
</tbody>
</table>
</div></template>


