<template><div><h1 id="simular-libre-amortizacion" tabindex="-1"><a class="header-anchor" href="#simular-libre-amortizacion"><span>Simular Libre Amortización</span></a></h1>
<p>Método para simular el alta de un préstamo libre amortizacion para un crédito individual.</p>
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
<td>BTMicrofinanzas.SimularLibreAmortizacion</td>
<td>RBTPG423</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Simular Libre Amortizacion:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.SimularLibreAmortizacion> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>95</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1001009404CD285A89A23FBE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:sBTSimulacionLibreAmortizacion> 
            <bts:solicitudUId>11077</bts:solicitudUId> 
            <bts:clienteUId>3</bts:clienteUId> 
            <bts:productoUId>21</bts:productoUId> 
            <bts:cantidadCuotas>2</bts:cantidadCuotas> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
            <bts:monto>10000</bts:monto> 
            <bts:pizarra></bts:pizarra> 
            <bts:tasa></bts:tasa> 
            <bts:destinoCredito>2</bts:destinoCredito> 
            <bts:cuotasCapital> 
            	<bts:sBTCuotaPrestamoAlta> 
                    <bts:fechaPago>2021-12-30</bts:fechaPago> 
                    <bts:importe>2000</bts:importe> 
                </bts:sBTCuotaPrestamoAlta> 
                <bts:sBTCuotaPrestamoAlta> 
                    <bts:fechaPago>2022-01-30</bts:fechaPago> 
                    <bts:importe>8000</bts:importe> 
                </bts:sBTCuotaPrestamoAlta> 
            </bts:cuotasCapital> 
            <bts:cuotasInteres/> 
         </bts:sBTSimulacionLibreAmortizacion> 
      </bts:BTMicrofinanzas.SimularLibreAmortizacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?SimularLibreAmortizacion \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
-d '{   
    ":Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "95", 
        "Usuario": "INSTALADOR", 
        "Token": "1001009404CD285A89A23FBE", 
        "Device": "GP" 
        }, 
        "sBTSimulacionLibreAmortizacion": { 
        "solicitudUId": "11077", 
        "clienteUId": "3", 
        "productoUId": "21", 
        "cantidadCuotas": "2", 
        "periodoCuotas": "30", 
        "monto": "10000", 
        "destinoCredito": "2", 
        "cuotasCapital": { 
            "sBTCuotaPrestamoAlta": [ 
            { 
                "fechaPago": "2021-12-30", 
                "importe": "2000" 
            }, 
            { 
                "fechaPago": "2022-01-30", 
                "importe": "8000" 
            } 
            ] 
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
      <BTMicrofinanzas.SimularLibreAmortizacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>95</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1001009404CD285A89A23FBE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtSimulacion> 
            <operacionUId>21</operacionUId> 
            <producto> 
               <productoUId>21</productoUId> 
               <nombre>PRESTAMOS, CADENA DE VALOR CAFE DIF.</nombre> 
               <moneda>Q</moneda> 
               <papel>$</papel> 
            </producto> 
            <fechaValor>2021-11-30</fechaValor> 
            <fechaPrimerPago>2021-12-30</fechaPrimerPago> 
            <fechaVencimiento>2022-01-30</fechaVencimiento> 
            <capital>10000.00</capital> 
            <intereses>548.00</intereses> 
            <impuestos>0.00</impuestos> 
            <comisiones>385.00</comisiones> 
            <totalPrestamo>10000.00</totalPrestamo> 
            <plazo>0</plazo> 
            <tasa>36.000000</tasa> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <tasaEfectivaAnual>42.576089</tasaEfectivaAnual> 
            <tasaNominalAnual>36.000000</tasaNominalAnual> 
            <otrosConceptos></otrosConceptos> 
            <cronograma> 
               <sBTCuotaSimulacion> 
                  <fechaPago>2021-12-30</fechaPago> 
                  <tipoCuota>I</tipoCuota> 
                  <concepto/> 
                  <capital>300.00</capital> 
                  <intereses>0.00</intereses> 
                  <seguros>0.00</seguros> 
                  <impuestos>0.00</impuestos> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <cuota>300.00</cuota> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <fechaPago>2021-12-30</fechaPago> 
                  <tipoCuota>K</tipoCuota> 
                  <concepto/> 
                  <capital>2000.00</capital> 
                  <intereses>0.00</intereses> 
                  <seguros>0.00</seguros> 
                  <impuestos>0.00</impuestos> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <cuota>2000.00</cuota> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <fechaPago>2022-01-30</fechaPago> 
                  <tipoCuota>I</tipoCuota> 
                  <concepto/> 
                  <capital>248.00</capital> 
                  <intereses>0.00</intereses> 
                  <seguros>0.00</seguros> 
                  <impuestos>0.00</impuestos> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <cuota>248.00</cuota> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <fechaPago>2022-01-30</fechaPago> 
                  <tipoCuota>K</tipoCuota> 
                  <concepto/> 
                  <capital>8000.00</capital> 
                  <intereses>0.00</intereses> 
                  <seguros>0.00</seguros> 
                  <impuestos>0.00</impuestos> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <cuota>8000.00</cuota> 
               </sBTCuotaSimulacion> 
            </cronograma> 
         </sdtSimulacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.SimularLibreAmortizacion</Servicio> 
            <Fecha>2019-11-01</Fecha> 
            <Hora>11:36:49</Hora> 
            <Requerimiento>95</Requerimiento> 
            <Numero>1398</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.SimularLibreAmortizacionResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "95", 
      "Usuario": "INSTALADOR", 
      "Token": "1001009404CD285A89A23FBE", 
      "Device": "GP" 
      }, 
      "sdtSimulacion": { 
         "operacionUId": "21", 
         "producto": { 
            "productoUId": "21", 
            "nombre": "PRESTAMOS, CADENA DE VALOR CAFE DIF.", 
            "moneda": "Q", 
            "papel": "$" 
         }, 
         "fechaValor": "2021-11-30", 
         "fechaPrimerPago": "2021-12-30", 
         "fechaVencimiento": "2022-01-30", 
         "capital": "10000.00", 
         "intereses": "548.00", 
         "impuestos": "0.00", 
         "comisiones": "385.00", 
         "totalPrestamo": "10000.00", 
         "plazo": "0", 
         "tasa": "36.000000", 
         "tasaEfectiva": "0.000000", 
         "tasaEfectivaAnual": "42.576089", 
         "tasaNominalAnual": "36.000000", 
         "cronograma": { 
            "sBTCuotaSimulacion": [ 
               { 
               "fechaPago": "2021-12-30", 
               "tipoCuota": "I", 
               "capital": "300.00", 
               "intereses": "0.00", 
               "seguros": "0.00", 
               "impuestos": "0.00", 
               "otrosConceptos": "0.00", 
               "cuota": "300.00" 
               }, 
               { 
               "fechaPago": "2021-12-30", 
               "tipoCuota": "K", 
               "capital": "2000.00", 
               "intereses": "0.00", 
               "seguros": "0.00", 
               "impuestos": "0.00", 
               "otrosConceptos": "0.00", 
               "cuota": "2000.00" 
               }, 
               { 
               "fechaPago": "2022-01-30", 
               "tipoCuota": "I", 
               "capital": "248.00", 
               "intereses": "0.00", 
               "seguros": "0.00", 
               "impuestos": "0.00", 
               "otrosConceptos": "0.00", 
               "cuota": "248.00" 
               }, 
               { 
               "fechaPago": "2022-01-30", 
               "tipoCuota": "K", 
               "capital": "8000.00", 
               "intereses": "0.00", 
               "seguros": "0.00", 
               "impuestos": "0.00", 
               "otrosConceptos": "0.00", 
               "cuota": "8000.00" 
               } 
            ] 
         } 
      }, 
      "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTMicrofinanzas.SimularLibreAmortizacion", 
      "Fecha": "2019-11-01", 
      "Hora": "11:36:49", 
      "Requerimiento": "95", 
      "Numero": "1398", 
      "Estado": "OK" 
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
<td>sBTSimulacionLibreAmortizacion</td>
<td>sBTSimulacionLibreAmortizacion</td>
<td>Datos de la simulación.</td>
</tr>
<tr>
<td>generaCuotaInteres</td>
<td>Character</td>
<td>[Hidden: Valores 'S'/'N' Indica si se generan cuotas de intereses].</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSimulacionLibreAmortizacion son los siguientes:</p>
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
<td>cantidadCuotas</td>
<td>Long</td>
<td>Cantidad de cuotas del préstamo.</td>
</tr>
<tr>
<td>periodoCuotas</td>
<td>Long</td>
<td>Período entre vencimiento de cada cuota.</td>
</tr>
<tr>
<td>monto</td>
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
<td>Código de actividad.</td>
</tr>
<tr>
<td>cuotasCapital</td>
<td>sBTCuotaPrestamoAlta</td>
<td>Cuotas de capital.</td>
</tr>
<tr>
<td>cuotasInteres</td>
<td>sBTCuotaPrestamoAlta</td>
<td>Cuotas de intereses.</td>
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
<td>sBTSimulacionPrestamoLA</td>
<td>Datos del préstamo simulado.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSimulacionPrestamoLA son los siguientes:</p>
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
<td>fechaPrimerPago</td>
<td>Date</td>
<td>Fecha de primer pago.</td>
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
<td>impuestos</td>
<td>Double</td>
<td>Impuestos.</td>
</tr>
<tr>
<td>comisiones</td>
<td>Double</td>
<td>Comisiones.</td>
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
<td>No se recibió el identificador de solicitud.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificadorde producto.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó la cuenta pra el identificador.</td>
</tr>
<tr>
<td>30005</td>
<td>Debe ingresar el monto del préstamo.</td>
</tr>
<tr>
<td>30006</td>
<td>No se recibió la lista de cuotas de capital.</td>
</tr>
<tr>
<td>30007</td>
<td>NO se recibió la lista de cuotas de interes.</td>
</tr>
</tbody>
</table>
</div></template>


