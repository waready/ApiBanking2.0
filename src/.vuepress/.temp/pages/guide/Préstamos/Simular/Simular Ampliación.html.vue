<template><div><h1 id="simular-ampliacion" tabindex="-1"><a class="header-anchor" href="#simular-ampliacion"><span>Simular Ampliación</span></a></h1>
<p>Método para simular una ampliación de uno o más préstamos.</p>
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
<td>BTPrestamos.SimularAmpliacion</td>
<td>RBTPG232</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Simular Ampliación:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.SimularAmpliacion> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>72e34bcd9d4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:sdtAmpliacion> 
            <bts:productoUId>61</bts:productoUId> 
            <bts:monto>20000</bts:monto> 
            <bts:clienteUId>221</bts:clienteUId> 
            <bts:actividad>1111</bts:actividad> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
            <bts:cantidadCuotas>12</bts:cantidadCuotas> 
            <bts:tasa>0</bts:tasa> 
            <bts:fechaPrimerPago/> 
            <bts:operaciones> 
            	<item>541</item> 
            </bts:operaciones> 
            <bts:pizarra>0</bts:pizarra> 
         </bts:sdtAmpliacion> 
      </bts:BTPrestamos.SimularAmpliacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularAmpliacion=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "72e34bcd9d4A8B5C60A82434" 
	}, 
    "sdtPrestamo": { 
        "clienteUId": 221, 
        "productoUId": 61, 
        "fechaPrimerPago": "", 
        "monto": 20000, 
        "cantidadCuotas": 12, 
        "periodoCuotas": 30, 
		"tasa": 0, 
		"pizarra": 0, 
		"actividad": 11200, 
		"operaciones": { 
			"item":541		 
		} 
<pre><code>} 
</code></pre>
<p>}'</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group> 

> El POST retornará la siguiente estructura: 

&lt;code-group> 
&lt;code-block title="XML" active> 
```xml 
&lt;SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   &lt;SOAP-ENV:Body> 
      &lt;BTPrestamos.SimularAmpliacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         &lt;Btinreq> 
            &lt;Device>AV&lt;/Device> 
            &lt;Usuario>MINSTALADOR&lt;/Usuario> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Token>72e34bcd9d4A8B5C60A82434&lt;/Token> 
         &lt;/Btinreq> 
         &lt;ampliacionId>122&lt;/ampliacionId> 
         &lt;sdtSimulacion> 
            &lt;otrosConceptos>&lt;/otrosConceptos> 
            &lt;cronograma> 
               &lt;sBTCuotaPrestamoAlta> 
                  &lt;importe>2228.53&lt;/importe> 
                  &lt;fechaPago>2019-01-12&lt;/fechaPago> 
               &lt;/sBTCuotaPrestamoAlta> 
               &lt;sBTCuotaPrestamoAlta> 
                  &lt;importe>2228.53&lt;/importe> 
                  &lt;fechaPago>2019-02-12&lt;/fechaPago> 
               &lt;/sBTCuotaPrestamoAlta> 
               &lt;sBTCuotaPrestamoAlta> 
                  &lt;importe>2228.53&lt;/importe> 
                  &lt;fechaPago>2019-03-12&lt;/fechaPago> 
               &lt;/sBTCuotaPrestamoAlta> 
               &lt;sBTCuotaPrestamoAlta> 
                  &lt;importe>2228.53&lt;/importe> 
                  &lt;fechaPago>2019-04-12&lt;/fechaPago> 
               &lt;/sBTCuotaPrestamoAlta> 
               &lt;sBTCuotaPrestamoAlta> 
                  &lt;importe>2228.53&lt;/importe> 
                  &lt;fechaPago>2019-05-12&lt;/fechaPago> 
               &lt;/sBTCuotaPrestamoAlta> 
               &lt;sBTCuotaPrestamoAlta> 
                  &lt;importe>2228.53&lt;/importe> 
                  &lt;fechaPago>2019-06-12&lt;/fechaPago> 
               &lt;/sBTCuotaPrestamoAlta> 
               &lt;sBTCuotaPrestamoAlta> 
                  &lt;importe>2228.53&lt;/importe> 
                  &lt;fechaPago>2019-07-12&lt;/fechaPago> 
               &lt;/sBTCuotaPrestamoAlta> 
               &lt;sBTCuotaPrestamoAlta> 
                  &lt;importe>2228.53&lt;/importe> 
                  &lt;fechaPago>2019-08-12&lt;/fechaPago> 
               &lt;/sBTCuotaPrestamoAlta> 
               &lt;sBTCuotaPrestamoAlta> 
                  &lt;importe>2228.53&lt;/importe> 
                  &lt;fechaPago>2019-09-12&lt;/fechaPago> 
               &lt;/sBTCuotaPrestamoAlta> 
               &lt;sBTCuotaPrestamoAlta> 
                  &lt;importe>2228.53&lt;/importe> 
                  &lt;fechaPago>2019-10-12&lt;/fechaPago> 
               &lt;/sBTCuotaPrestamoAlta> 
               &lt;sBTCuotaPrestamoAlta> 
                  &lt;importe>2228.53&lt;/importe> 
                  &lt;fechaPago>2019-11-12&lt;/fechaPago> 
               &lt;/sBTCuotaPrestamoAlta> 
               &lt;sBTCuotaPrestamoAlta> 
                  &lt;importe>2228.53&lt;/importe> 
                  &lt;fechaPago>2019-12-12&lt;/fechaPago> 
               &lt;/sBTCuotaPrestamoAlta> 
            &lt;/cronograma> 
            &lt;fechaValor>2020-03-13&lt;/fechaValor> 
            &lt;capital>37524.00&lt;/capital> 
            &lt;tasaEfectiva>0.000000&lt;/tasaEfectiva> 
            &lt;intereses>2541.18&lt;/intereses> 
            &lt;tasaNominalAnual>23.000000&lt;/tasaNominalAnual> 
            &lt;totalPrestamo>26742.34&lt;/totalPrestamo> 
            &lt;valorCuota>2228.53&lt;/valorCuota> 
            &lt;tasaEfectivaAnual>25.590075&lt;/tasaEfectivaAnual> 
            &lt;operacionUId>1&lt;/operacionUId> 
            &lt;tasa>23.000000&lt;/tasa> 
            &lt;fechaPrimerPago>2020-04-13&lt;/fechaPrimerPago> 
            &lt;fechaVencimiento>2021-03-13&lt;/fechaVencimiento> 
            &lt;plazo>0&lt;/plazo> 
            &lt;producto> 
               &lt;papel>$&lt;/papel> 
               &lt;moneda>$&lt;/moneda> 
               &lt;productoUId>61&lt;/productoUId> 
               &lt;nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF&lt;/nombre> 
            &lt;/producto> 
         &lt;/sdtSimulacion> 
         &lt;Erroresnegocio>&lt;/Erroresnegocio> 
         &lt;Btoutreq> 
            &lt;Numero>623&lt;/Numero> 
            &lt;Estado>OK&lt;/Estado> 
            &lt;Servicio>BTPrestamos.SimularAmpliacion&lt;/Servicio> 
            &lt;Fecha>2019-11-20&lt;/Fecha> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Hora>09:23:04&lt;/Hora> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
         &lt;/Btoutreq> 
      &lt;/BTPrestamos.SimularAmpliacionResponse> 
   &lt;/SOAP-ENV:Body> 
&lt;/SOAP-ENV:Envelope> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
      "Device": "AV", 
      "Usuario": "MINSTALADOR", 
      "Requerimiento": "1", 
      "Canal": "BTDIGITAL", 
      "Token": "72e34bcd9d4A8B5C60A82434" 
    }, 
    "ampliacionId": "122", 
    "sdtSimulacion": { 
      "otrosConceptos": { 
      }, 
      "cronograma": { 
        "sBTCuotaPrestamoAlta": [ 
          { 
            "importe": "2228.53", 
            "fechaPago": "2019-01-12" 
          }, 
          { 
            "importe": "2228.53", 
            "fechaPago": "2019-02-12" 
          }, 
          { 
            "importe": "2228.53", 
            "fechaPago": "2019-03-12" 
          }, 
          { 
            "importe": "2228.53", 
            "fechaPago": "2019-04-12" 
          }, 
          { 
            "importe": "2228.53", 
            "fechaPago": "2019-05-12" 
          }, 
          { 
            "importe": "2228.53", 
            "fechaPago": "2019-06-12" 
          }, 
          { 
            "importe": "2228.53", 
            "fechaPago": "2019-07-12" 
          }, 
          { 
            "importe": "2228.53", 
            "fechaPago": "2019-08-12" 
          }, 
          { 
            "importe": "2228.53", 
            "fechaPago": "2019-09-12" 
          }, 
          { 
            "importe": "2228.53", 
            "fechaPago": "2019-10-12" 
          }, 
          { 
            "importe": "2228.53", 
            "fechaPago": "2019-11-12" 
          }, 
          { 
            "importe": "2228.53", 
            "fechaPago": "2019-12-12" 
          } 
        ] 
      }, 
      "fechaValor": "2020-03-13", 
      "capital": "37524.00", 
      "tasaEfectiva": "0.000000", 
      "intereses": "2541.18", 
      "tasaNominalAnual": "23.000000", 
      "totalPrestamo": "26742.34", 
      "valorCuota": "2228.53", 
      "tasaEfectivaAnual": "25.590075", 
      "operacionUId": "1", 
      "tasa": "23.000000", 
      "fechaPrimerPago": "2020-04-13", 
      "fechaVencimiento": "2021-03-13", 
      "plazo": "0", 
      "producto": { 
        "papel": "$", 
        "moneda": "$", 
        "productoUId": "61", 
        "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
      } 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Numero": "623", 
      "Estado": "OK", 
      "Servicio": "BTPrestamos.SimularAmpliacion", 
      "Fecha": "2019-11-20", 
      "Requerimiento": "1", 
      "Hora": "09:23:04", 
      "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>
<p>Tiempo de validez de la simulación de una ampliación o refinanciación:</p>
<ul>
<li>Por defecto es 1440 minutos (24 horas). Este valor se puede modificar ingresando los minutos en el valor específico 1 de la guía especial 20100 para los correlativos 1, 2 y 3 igual cero.</li>
</ul>
</li>
</ol>
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
<td>sdtAmpliacion</td>
<td>sBTAmpliacionAlta</td>
<td>Datos de simulación.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTAmpliacionAlta son los siguientes:</p>
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
<td>plazo</td>
<td>Int</td>
<td>Plazo de la operación.</td>
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
<td>operaciones</td>
<td>Long</td>
<td>Lista de idententificares de operaciones a cancelar.</td>
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
<td>ampliacionId</td>
<td>Long</td>
<td>Identificador de ampliación.</td>
</tr>
<tr>
<td>sdtSimulacion</td>
<td>sBTSimulacionPrestamo</td>
<td>Datos del préstamo simulado.</td>
</tr>
<tr>
<td>deudaTotalCancelacion</td>
<td>Double</td>
<td>Monto de cancelación total de los préstamos a consolidar.</td>
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
<td>No se recuperó la cuenta para el Identificador: [Número de Identificador].</td>
</tr>
<tr>
<td>30004</td>
<td>No se indicaron operaciones a ampliar.</td>
</tr>
<tr>
<td>30005</td>
<td>No se recuperó la operación para el identificador [Número de Identificador].</td>
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
<td>La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimiento.</td>
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
<td>No se cumple el período mínimo entre Fecha Valor y Fecha de Primer Pago.</td>
</tr>
<tr>
<td>40148</td>
<td>El Capital indicado debe ser mayor al Valor Cuota.</td>
</tr>
<tr>
<td>40149</td>
<td>No se cumple el período máximo entre Fecha Valor y Fecha de Primer Pago.</td>
</tr>
</tbody>
</table>
</div></template>


