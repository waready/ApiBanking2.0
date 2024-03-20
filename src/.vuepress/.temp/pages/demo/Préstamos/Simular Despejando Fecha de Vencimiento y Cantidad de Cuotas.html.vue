<template><div><h1 id="simular-despejando-fecha-de-vencimiento-y-cantidad-de-cuotas" tabindex="-1"><a class="header-anchor" href="#simular-despejando-fecha-de-vencimiento-y-cantidad-de-cuotas"><span>Simular Despejando Fecha de Vencimiento y Cantidad de Cuotas</span></a></h1>
<p>Método para simular un préstamo despejando fecha de vencimiento y cantidad de cuotas.</p>
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
<td>BTPrestamos.SimularDespejandoFechaVtoCantCuotas</td>
<td>RBTPG322</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Simular Despejando Fecha de Vencimiento y Cantidad de Cuotas:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.SimularDespejandoFechaVtoCantCuotas> 
         <bts:Btinreq> 
            <bts:Device>BTDIGITAL</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>d25cdaf98eCD285A89A23FBE</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
         </bts:Btinreq> 
         <bts:sdtPrestamoAlta> 
            <bts:plazoTotal>300</bts:plazoTotal> 
            <bts:productoUId>181</bts:productoUId> 
            <bts:monto>20000</bts:monto> 
            <bts:clienteUId>342</bts:clienteUId> 
            <bts:actividad>1111</bts:actividad> 
            <bts:valorCuota>5000</bts:valorCuota> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
            <bts:cantidadCuotas></bts:cantidadCuotas> 
            <bts:tasa>0</bts:tasa> 
            <bts:fechaPrimerPago>10-10-2021</bts:fechaPrimerPago> 
            <bts:pizarra>0</bts:pizarra> 
         </bts:sdtPrestamoAlta> 
      </bts:BTPrestamos.SimularDespejandoFechaVtoCantCuotas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularDespejandoFechaVtoCantCuotas' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
		"Btinreq": { 
			"Canal": "BTDIGITAL", 
			"Requerimiento": "1", 
			"Usuario": "INSTALADOR", 
			"Token": "d25cdaf98eCD285A89A23FBE", 
			"Device": "BTDIGITAL"		 
		},  
		"sdtPrestamoAlta":{ 
		   "plazoTotal": "300", 
		   "productoUId": "181", 
		   "monto": "20000", 
		   "clienteUId": "342", 
		   "actividad": "1111", 
		   "valorCuota": "5000", 
		   "periodoCuotas": "30", 
		   "cantidadCuotas": [], 
		   "tasa": "0", 
		   "fechaPrimerPago": "10-10-2021", 
		   "pizarra": "0" 
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
      <BTPrestamos.SimularDespejandoFechaVtoCantCuotasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>BTDIGITAL</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>d25cdaf98eCD285A89A23FBE</Token> 
         </Btinreq> 
         <sdtSimulacionPrestamo> 
            <otrosConceptos></otrosConceptos> 
            <fechaValor>2020-01-01</fechaValor> 
            <capital>20000.00</capital> 
            <cronograma> 
               <sBTCuotaPrestamoAlta> 
                  <importe>7059.37</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2020-02-01</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>6656.94</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2020-03-01</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>6247.60</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2020-04-01</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>5831.24</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2020-05-01</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1310.83</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2020-06-01</fechaPago> 
               </sBTCuotaPrestamoAlta> 
            </cronograma> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <intereses>903.09</intereses> 
            <tasaNominalAnual>20.878536</tasaNominalAnual> 
            <totalPrestamo>27105.98</totalPrestamo> 
            <valorCuota>5421.20</valorCuota> 
            <tasaEfectivaAnual>23.000000</tasaEfectivaAnual> 
            <operacionUId>1606</operacionUId> 
            <tasa>23.000000</tasa> 
            <fechaPrimerPago>2020-02-01</fechaPrimerPago> 
            <fechaVencimiento>2020-06-01</fechaVencimiento> 
            <producto> 
               <papel>$</papel> 
               <moneda>$</moneda> 
               <productoUId>181</productoUId> 
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre> 
            </producto> 
            <plazo>150</plazo> 
         </sdtSimulacionPrestamo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>110671</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.SimularDespejandoFechaVtoCantCuotas</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2021-03-18</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>12:33:02</Hora> 
         </Btoutreq> 
      </BTPrestamos.SimularDespejandoFechaVtoCantCuotasResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": "BTDIGITAL", 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "1", 
      "Canal": "BTDIGITAL", 
      "Token": "d25cdaf98eCD285A89A23FBE" 
   }, 
   "sdtSimulacionPrestamo": { 
	  "otrosConceptos": { 
	  	"sBTConcepto": [] 
	  }, 
      "fechaValor": "2020-01-01", 
      "capital": "20000.00", 
      "cronograma": { 
         "sBTCuotaPrestamoAlta": [ 
            { 
               "importe": "7059.37", 
               "redondeo": "0.00", 
               "fechaPago": "2020-02-01" 
            }, 
            { 
               "importe": "6656.94", 
               "redondeo": "0.00", 
               "fechaPago": "2020-03-01" 
            }, 
            { 
               "importe": "6247.60", 
               "redondeo": "0.00", 
               "fechaPago": "2020-04-01" 
            }, 
            { 
               "importe": "5831.24", 
               "redondeo": "0.00", 
               "fechaPago": "2020-05-01" 
            }, 
            { 
               "importe": "1310.83", 
               "redondeo": "0.00", 
               "fechaPago": "2020-06-01" 
            } 
         ] 
      }, 
      "tasaEfectiva": "0.000000", 
      "intereses": "903.09", 
      "tasaNominalAnual": "20.878536", 
      "totalPrestamo": "27105.98", 
      "valorCuota": "5421.20", 
      "tasaEfectivaAnual": "23.000000", 
      "operacionUId": "1606", 
      "tasa": "23.000000", 
      "fechaPrimerPago": "2020-02-01", 
      "fechaVencimiento": "2020-06-01", 
      "producto": { 
         "papel": "$", 
         "moneda": "$", 
         "productoUId": "181", 
         "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
      }, 
      "plazo": "150" 
   }, 
   "Erroresnegocio": { 
        "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "110671", 
      "Estado": "OK", 
      "Servicio": "BTPrestamos.SimularDespejandoFechaVtoCantCuotas", 
      "Requerimiento": "1", 
      "Fecha": "2021-03-18", 
      "Canal": "BTDIGITAL", 
      "Hora": "12:33:02" 
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
<td>sdtPrestamoAlta</td>
<td>sBTPrestamoAltaConDespeje</td>
<td>Datos del préstamo a dar de alta.</td>
</tr>
<tr>
<td>modoDespeje</td>
<td>Short</td>
<td>[Hidden: Valor fijo 4 para este método].</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPrestamoAltaConDespeje son los siguientes:</p>
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
<td>Identificador del cliente.</td>
</tr>
<tr>
<td>productoUId</td>
<td>Long</td>
<td>Identificador del producto.</td>
</tr>
<tr>
<td>fechaPrimerPago</td>
<td>Date</td>
<td>Fecha primer pago.</td>
</tr>
<tr>
<td>cantidadCuotas</td>
<td>Int</td>
<td>Cantidad de cuotas.</td>
</tr>
<tr>
<td>periodoCuotas</td>
<td>Int</td>
<td>Período entre cuotas.</td>
</tr>
<tr>
<td>plazoTotal</td>
<td>Int</td>
<td>Plazo total.</td>
</tr>
<tr>
<td>valorCuota</td>
<td>Double</td>
<td>Valor cuota.</td>
</tr>
<tr>
<td>monto</td>
<td>Double</td>
<td>Monto del préstamo.</td>
</tr>
<tr>
<td>pizarra</td>
<td>Short</td>
<td>Código de pizarra.</td>
</tr>
<tr>
<td>tasa</td>
<td>Double</td>
<td>Tasa.</td>
</tr>
<tr>
<td>actividad</td>
<td>Long</td>
<td>Código de actividad.</td>
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
<td>sdtSimulacionPrestamo</td>
<td>sBTSimulacionPrestamo</td>
<td>Datos de la simulación.</td>
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
<td>sBTCuotaPrestamoAlta</td>
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
<p>Los campos del tipo de dato estructurado sBTCuotaPrestamoAlta son los siguientes:</p>
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
<td>No se recuperó la cuenta para el Identificador:</td>
</tr>
</tbody>
</table>
</div></template>


