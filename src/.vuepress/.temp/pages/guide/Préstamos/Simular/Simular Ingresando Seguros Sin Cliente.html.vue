<template><div><h1 id="simular-ingresando-seguros-sin-cliente" tabindex="-1"><a class="header-anchor" href="#simular-ingresando-seguros-sin-cliente"><span>Simular Ingresando Seguros Sin Cliente</span></a></h1>
<p>Método para simular el alta de un prestamo sin cliente ingresando los seguros a aplicar. Se permite el ingreso de seguros cualesquiera que se encuentren preseteados para el producto, siempre y cuando los importes de los mismos se resuelvan automáticamente.</p>
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
<td>BTPrestamos.SimularIngresandoSegurosSC</td>
<td>RBTPG467</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Simular Ingresando Seguros Sin Clientes:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.SimularIngresandoSegurosSC> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>387E2B35D9F43B80C31D1FF0</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:sdtPrestamoAlta> 
            <bts:plazoTotal>300</bts:plazoTotal> 
            <bts:productoUId>71</bts:productoUId> 
            <bts:monto>20000</bts:monto> 
            <bts:actividad>1111</bts:actividad> 
            <bts:valorCuota>5000</bts:valorCuota> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
            <bts:cantidadCuotas></bts:cantidadCuotas> 
            <bts:tasa></bts:tasa> 
            <bts:fechaPrimerPago>2020-11-13</bts:fechaPrimerPago> 
            <bts:pizarra></bts:pizarra> 
         </bts:sdtPrestamoAlta> 
         <bts:sinSeguros>N</bts:sinSeguros> 
         <bts:sdtSeguros> 
            <bts:sBTSeguroSimulacion> 
               <bts:codigo>100</bts:codigo> 
            </bts:sBTSeguroSimulacion> 
         </bts:sdtSeguros> 
      </bts:BTPrestamos.SimularIngresandoSegurosSC> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularIngresandoSegurosSC' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Usuario": "MINSTALADOR", 
      "Device": "GL", 
      "Requerimiento": 1, 
      "Token": "01D45E9964612A4C8CCB1055" 
   }, 
   "sdtPrestamoAlta": { 
      "plazoTotal": "300", 
      "productoUId": "71", 
      "monto": "20000", 
      "actividad": "1111", 
      "valorCuota": "5000", 
      "periodoCuotas": "30", 
      "cantidadCuotas": "", 
      "tasa": "", 
      "fechaPrimerPago": "2020-11-13", 
      "pizarra": "" 
   }, 
   "sinSeguros": "N", 
   "sdtSeguros": { 
      "sBTSeguroSimulacion": { 
      "codigo": "100" 
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
      <BTPrestamos.SimularIngresandoSegurosSCResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>387E2B35D9F43B80C31D1FF0</Token> 
         </Btinreq> 
         <sdtSimulacionPrestamo> 
            <cft>28.210000</cft> 
            <plazo>360</plazo> 
            <tasa>23.000000</tasa> 
            <impuestos>452.410000</impuestos> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <fechaVencimiento>2021-10-13</fechaVencimiento> 
            <producto> 
               <papel>$</papel> 
               <moneda>$</moneda> 
               <productoUId>71</productoUId> 
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre> 
            </producto> 
            <intereses>2027.72</intereses> 
            <fechaPrimerPago>2020-11-13</fechaPrimerPago> 
            <comisiones>0.000000</comisiones> 
            <valorCuota>5000.00</valorCuota> 
            <otrosConceptos> 
               <SdtsBTConcepto> 
                  <texto>SANCOR - Vida - Variante 1</texto> 
                  <valor>1440.00</valor> 
                  <concepto>100</concepto> 
               </SdtsBTConcepto> 
            </otrosConceptos> 
            <cronograma> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>5000.00</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2020-11-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2020-12-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-01-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-02-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-03-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-04-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-05-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-06-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-07-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-08-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-09-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-10-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
            </cronograma> 
            <totalPrestamo>23942.44</totalPrestamo> 
            <capital>20000.00</capital> 
            <operacionUId>1</operacionUId> 
            <tasaEfectivaAnual>23.000000</tasaEfectivaAnual> 
            <seguros>1440.000000</seguros> 
            <tasaNominalAnual>20.881010</tasaNominalAnual> 
            <fechaValor>2020-10-13</fechaValor> 
         </sdtSimulacionPrestamo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>11921</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.SimularIngresandoSegurosSC</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2023-05-19</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>12:42:21</Hora> 
         </Btoutreq> 
      </BTPrestamos.SimularIngresandoSegurosSCResponse> 
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
      "Requerimiento": 1, 
      "Canal": "BTDIGITAL", 
      "Token": "72e34bcd9d4A8B5C60A82434" 
   }, 
   "sdtSimulacionPrestamo": { 
      "cft": "28.210000", 
      "plazo": "360", 
      "tasa": "23.000000", 
      "impuestos": "452.410000", 
      "tasaEfectiva": "0.000000", 
      "fechaVencimiento": "2021-10-13", 
      "producto": { 
      "papel": "$", 
      "moneda": "$", 
      "productoUId": "71", 
      "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
      }, 
      "intereses": "2027.72", 
      "fechaPrimerPago": "2020-11-13", 
      "comisiones": "0.000000", 
      "valorCuota": "5000.00", 
      "otrosConceptos": { 
      "SdtsBTConcepto": { 
         "texto": "SANCOR - Vida - Variante 1", 
         "valor": "1440.00", 
         "concepto": "100" 
      } 
      }, 
      "cronograma": { 
      "SdtsBTCuotaPrestamoAlta": [ 
         { 
            "importe": "5000.00", 
            "redondeo": "0.00", 
            "fechaPago": "2020-11-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2020-12-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-01-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-02-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-03-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-04-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-05-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-06-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-07-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-08-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-09-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-10-13" 
         } 
      ] 
      }, 
      "totalPrestamo": "23942.44", 
      "capital": "20000.00", 
      "operacionUId": "1", 
      "tasaEfectivaAnual": "23.000000", 
      "seguros": "1440.000000", 
      "tasaNominalAnual": "20.881010", 
      "fechaValor": "2020-10-13" 
   }, 
   "Erroresnegocio": "", 
   "Btoutreq": { 
      "Numero": 623, 
      "Estado": "OK", 
      "Servicio": "BTPrestamos.SimularIngresandoSeguros", 
      "Fecha": "2019-11-20", 
      "Requerimiento": 1, 
      "Hora": "09:23:04", 
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
<td>sdtPrestamoAlta</td>
<td>SdtsBTDatosDespejeSinCliente</td>
<td>Datos de la simulación.</td>
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
<p>Los campos del tipo de dato estructurado SdtsBTDatosDespejeSinCliente  son los siguientes:</p>
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
<td>sBTSimulacionPrestamo</td>
<td>sBTSimulacionPrestamo</td>
<td>Datos de simulación del prestamo.</td>
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
<td>Codigo del seguro.</td>
</tr>
<tr>
<td>valor</td>
<td>Double</td>
<td>Importe del seguro.</td>
</tr>
<tr>
<td>texto</td>
<td>String</td>
<td>Descripcion del seguro.</td>
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
<td>No se recibió el identificador de producto.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la cuenta para el Identificador: [Número de identificador].</td>
</tr>
</tbody>
</table>
</div></template>


