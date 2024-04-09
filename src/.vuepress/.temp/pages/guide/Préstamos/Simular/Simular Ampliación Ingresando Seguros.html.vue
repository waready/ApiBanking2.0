<template><div><h1 id="simular-ampliacion-ingresando-seguros" tabindex="-1"><a class="header-anchor" href="#simular-ampliacion-ingresando-seguros"><span>Simular Ampliación Ingresando Seguros</span></a></h1>
<p>Método para simular una ampliación de uno o más préstamos ingresando los seguros a aplicar. Se permite el ingreso de seguros cualesquiera que se encuentren preseteados para el producto, siempre y cuando los importes de los mismos se resuelvan automáticamente.</p>
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
<td>BTPrestamos.SimularAmpliacionIngresandoSeguros</td>
<td>RBTPG488</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método de Simular Ampliación Ingresando Seguros:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.SimularAmpliacionIngresandoSeguros> 
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
         <bts:sinSeguros>N</bts:sinSeuros> 
         <bts:sdtSeguros> 
            <bts:sBTSegurosSimulacion> 
                <bts:codigo>100</bts:codigo> 
            </bts:sBTSegurosSimulacion> 
         </bts:sdtSeguros> 
      </bts:BTPrestamos.SimularAmpliacionIngresandoSeguros> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularAmpliacionIngresandoSeguros=' \ 
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
   "sdtAmpliacion": { 
      "productoUId": 61, 
      "monto": 20000, 
      "clienteUId": 221, 
      "actividad": 1111, 
      "periodoCuotas": 30, 
      "cantidadCuotas": 12, 
      "tasa": 0, 
      "fechaPrimerPago": "", 
      "operaciones": { 
         "item": 541 
      }, 
      "pizarra": 0 
   }, 
   "sinSeguros": "N", 
   "sdtSeguros": { 
      "sBTSegurosSimulacion": { 
         "codigo": 100 
      } 
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
      <BTPrestamos.SimularAmpliacionIngresandoSegurosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>72e34bcd9d4A8B5C60A82434</Token> 
         </Btinreq> 
         <ampliacionId>122</ampliacionId> 
         <sdtSimulacion> 
            <sBTConceptos> 
               <concepto>100</concepto> 
               <valor>1500.00</valor> 
               <texto>Seguro vida</texto> 
            </sBTConceptos> 
            <cronograma> 
               <sBTCuotaPrestamoAlta> 
                  <importe>2228.53</importe> 
                  <fechaPago>2019-01-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>2228.53</importe> 
                  <fechaPago>2019-02-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>2228.53</importe> 
                  <fechaPago>2019-03-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>2228.53</importe> 
                  <fechaPago>2019-04-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>2228.53</importe> 
                  <fechaPago>2019-05-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>2228.53</importe> 
                  <fechaPago>2019-06-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>2228.53</importe> 
                  <fechaPago>2019-07-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>2228.53</importe> 
                  <fechaPago>2019-08-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>2228.53</importe> 
                  <fechaPago>2019-09-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>2228.53</importe> 
                  <fechaPago>2019-10-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>2228.53</importe> 
                  <fechaPago>2019-11-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>2228.53</importe> 
                  <fechaPago>2019-12-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
            </cronograma> 
            <fechaValor>2020-03-13</fechaValor> 
            <capital>37524.00</capital> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <intereses>2541.18</intereses> 
            <tasaNominalAnual>23.000000</tasaNominalAnual> 
            <totalPrestamo>26742.34</totalPrestamo> 
            <valorCuota>2228.53</valorCuota> 
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual> 
            <operacionUId>1</operacionUId> 
            <tasa>23.000000</tasa> 
            <fechaPrimerPago>2020-04-13</fechaPrimerPago> 
            <fechaVencimiento>2021-03-13</fechaVencimiento> 
            <plazo>0</plazo> 
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
            <Servicio>BTPrestamos.SimularAmpliacionIngresandoSeguros</Servicio> 
            <Fecha>2019-11-20</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>09:23:04</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.SimularAmpliacionIngresandoSegurosResponse> 
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
      "Requerimiento": "1", 
      "Canal": "BTDIGITAL", 
      "Token": "72e34bcd9d4A8B5C60A82434" 
   }, 
   "ampliacionId": 122, 
   "sdtSimulacion": { 
      "sBTConceptos": { 
         "concepto": 100, 
         "valor": 1500, 
         "texto": "Seguro vida" 
      }, 
      "cronograma": { 
         "sBTCuotaPrestamoAlta": [ 
            { 
               "importe": 2228.53, 
               "fechaPago": "2019-01-12" 
            }, 
            { 
               "importe": 2228.53, 
               "fechaPago": "2019-02-12" 
            }, 
            { 
               "importe": 2228.53, 
               "fechaPago": "2019-03-12" 
            }, 
            { 
               "importe": 2228.53, 
               "fechaPago": "2019-04-12" 
            }, 
            { 
               "importe": 2228.53, 
               "fechaPago": "2019-05-12" 
            }, 
            { 
               "importe": 2228.53, 
               "fechaPago": "2019-06-12" 
            }, 
            { 
               "importe": 2228.53, 
               "fechaPago": "2019-07-12" 
            }, 
            { 
               "importe": 2228.53, 
               "fechaPago": "2019-08-12" 
            }, 
            { 
               "importe": 2228.53, 
               "fechaPago": "2019-09-12" 
            }, 
            { 
               "importe": 2228.53, 
               "fechaPago": "2019-10-12" 
            }, 
            { 
               "importe": 2228.53, 
               "fechaPago": "2019-11-12" 
            }, 
            { 
               "importe": 2228.53, 
               "fechaPago": "2019-12-12" 
            } 
         ] 
      }, 
      "fechaValor": "2020-03-13", 
      "capital": 37524, 
      "tasaEfectiva": 0, 
      "intereses": 2541.18, 
      "tasaNominalAnual": 23, 
      "totalPrestamo": 26742.34, 
      "valorCuota": 2228.53, 
      "tasaEfectivaAnual": 25.590075, 
      "operacionUId": 1, 
      "tasa": 23, 
      "fechaPrimerPago": "2020-04-13", 
      "fechaVencimiento": "2021-03-13", 
      "plazo": 0, 
      "producto": { 
      "papel": "$", 
      "moneda": "$", 
      "productoUId": 61, 
      "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
      } 
   }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Numero": "623", 
      "Estado": "OK", 
      "Servicio": "BTPrestamos.SimularAmpliacionIngresandoSeguros", 
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
<tr>
<td>sinSeguros</td>
<td>String</td>
<td>Acción a tomar cuando la lista de seguros a aplicar es vacía (S: Simula sin tener en cuenta ningún seguro, N: Simula con los seguros preseteados).</td>
</tr>
<tr>
<td>sdtSeguros</td>
<td>sBTSegurosSimulacion</td>
<td>Listado de códigos de seguros a aplicar.</td>
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
<p>Los campos del tipo de dato estructurado sBTSegurosSimulacion son los siguientes:</p>
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
<td>codigo</td>
<td>Int</td>
<td>Código de seguro a aplicar.</td>
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


