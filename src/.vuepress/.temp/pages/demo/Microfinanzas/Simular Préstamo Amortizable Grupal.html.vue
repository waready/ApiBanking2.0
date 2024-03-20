<template><div><h1 id="simular-prestamo-amortizable-grupal" tabindex="-1"><a class="header-anchor" href="#simular-prestamo-amortizable-grupal"><span>Simular Préstamo Amortizable Grupal</span></a></h1>
<p>Método para simular la solicitud de un préstamo amortizable grupal.</p>
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
<td>BTMicrofinanzas.SimularAmortizableGrupal</td>
<td>RBTPG439</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Simular Préstamo Amortizable Grupal:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.SimulaAmortizableGrupal> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1973148151CD285A89A23FBE</bts:Token> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
         <bts:sdtSimulacionAmortizableGrupal> 
            <bts:solicitudUId>11341</bts:solicitudUId> 
            <bts:productoUId>17</bts:productoUId> 
            <bts:fechaPrimerPago>2018-08-14</bts:fechaPrimerPago> 
            <bts:cantidadCuotas></bts:cantidadCuotas> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
            <bts:pizarra/> 
            <bts:tasa/> 
            <bts:integrantesGrupo> 
               <bts:sBTIntegranteGrupoSolicitud> 
                  <bts:empresa></bts:empresa> 
                  <bts:clienteUId>91</bts:clienteUId> 
                  <bts:cuenta></bts:cuenta> 
                  <bts:monto>10500</bts:monto> 
                  <bts:destinoCredito>41</bts:destinoCredito> 
                  <bts:destinoCreditoDesc></bts:destinoCreditoDesc> 
                  <bts:valorCuota></bts:valorCuota> 
               </bts:sBTIntegranteGrupoSolicitud> 
               <bts:sBTIntegranteGrupoSolicitud> 
                  <bts:empresa></bts:empresa> 
                  <bts:clienteUId>102</bts:clienteUId> 
                  <bts:cuenta></bts:cuenta> 
                  <bts:monto>15000</bts:monto> 
                  <bts:destinoCredito>42</bts:destinoCredito> 
                  <bts:destinoCreditoDesc></bts:destinoCreditoDesc> 
                  <bts:valorCuota></bts:valorCuota> 
               </bts:sBTIntegranteGrupoSolicitud> 
               <bts:sBTIntegranteGrupoSolicitud> 
                  <bts:empresa></bts:empresa> 
                  <bts:clienteUId>119</bts:clienteUId> 
                  <bts:cuenta></bts:cuenta> 
                  <bts:monto>12500</bts:monto> 
                  <bts:destinoCredito>43</bts:destinoCredito> 
                  <bts:destinoCreditoDesc></bts:destinoCreditoDesc> 
                  <bts:valorCuota></bts:valorCuota> 
               </bts:sBTIntegranteGrupoSolicitud> 
            </bts:integrantesGrupo> 
            <bts:datosAdicionales> 
            </bts:datosAdicionales> 
         </bts:sdtSimulacionAmortizableGrupal> 
      </bts:BTMicrofinanzas.SimulaAmortizableGrupal> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?SimularAmortizableGrupal \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "1", 
        "Usuario": "INSTALADOR", 
        "Token": "669747179CD285A89A23FBEE", 
        "Device": "1" 
    }, 
    "sdtSimulacionAmortizableGrupal": { 
        "solicitudUId": "11341", 
        "productoUId": "17", 
        "fechaPrimerPago": "2018-08-14", 
        "cantidadCuotas": "", 
        "periodoCuotas": "30", 
        "integrantesGrupo": { 
            "sBTIntegranteGrupoSolicitud": [ 
                { 
                "clienteUId": "91", 
                "monto": "10500", 
                "destinoCredito": "41" 
                }, 
                { 
                "clienteUId": "102", 
                "monto": "15000", 
                "destinoCredito": "42" 
                }, 
                { 
                "clienteUId": "119", 
                "monto": "12500", 
                "destinoCredito": "43" 
                } 
            ] 
        }, 
        "datosAdicionales": "" 
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
      <BTMicrofinanzas.SimulaAmortizableGrupalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1973148151CD285A89A23FBE</Token> 
            <Device>1</Device> 
         </Btinreq> 
         <sdtSimulacionPrestamo> 
            <operacionUId>94</operacionUId> 
            <producto> 
               <productoUId>17</productoUId> 
               <nombre>PRESTAMOS, GRUPAL PAGO MENSUAL INT Y CAP</nombre> 
               <moneda>Q</moneda> 
               <papel>$</papel> 
            </producto> 
            <capital>38000.00</capital> 
            <valorCuota>7467.00</valorCuota> 
            <intereses>6802.02</intereses> 
            <tasa>36.000000</tasa> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <tasaEfectivaAnual>42.576089</tasaEfectivaAnual> 
            <tasaNominalAnual>36.000000</tasaNominalAnual> 
            <totalPrestamo>44802.02</totalPrestamo> 
            <fechaValor>2018-07-19</fechaValor> 
            <fechaVencimiento>2019-01-14</fechaVencimiento> 
            <fechaPrimerPago>2018-08-14</fechaPrimerPago> 
            <plazo>179</plazo> 
            <otrosConceptos></otrosConceptos> 
            <cronograma></cronograma> 
         </sdtSimulacionPrestamo> 
         <sdtIntegrantesGrupo> 
            <sBTIntegranteGrupoSolicitud> 
               <empresa>1</empresa> 
               <clienteUId>91</clienteUId> 
               <cuenta>PONTES SILVA GABRIEL</cuenta> 
               <monto>10500.00</monto> 
               <destinoCredito>41</destinoCredito> 
               <destinoCreditoDesc>CAPITAL DE TRABAJO PARA TEMPORADA ALTA</destinoCreditoDesc> 
               <valorCuota>2063.25</valorCuota> 
            </sBTIntegranteGrupoSolicitud> 
            <sBTIntegranteGrupoSolicitud> 
               <empresa>1</empresa> 
               <clienteUId>102</clienteUId> 
               <cuenta>BERGESSIO MARTINEZ GONZALO</cuenta> 
               <monto>15000.00</monto> 
               <destinoCredito>42</destinoCredito> 
               <destinoCreditoDesc>CAPITAL DE TRABAJO P.E.A.</destinoCreditoDesc> 
               <valorCuota>2947.50</valorCuota> 
            </sBTIntegranteGrupoSolicitud> 
            <sBTIntegranteGrupoSolicitud> 
               <empresa>1</empresa> 
               <clienteUId>119</clienteUId> 
               <cuenta>CERON RODRIGUEZ CESAR MAURICIO</cuenta> 
               <monto>12500.00</monto> 
               <destinoCredito>43</destinoCredito> 
               <destinoCreditoDesc>CAPITAL DE TRABAJO PERMANENTE P.E.A.</destinoCreditoDesc> 
               <valorCuota>2456.25</valorCuota> 
            </sBTIntegranteGrupoSolicitud> 
         </sdtIntegrantesGrupo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.SimulaAmortizableGrupal</Servicio> 
            <Fecha>2020-10-28</Fecha> 
            <Hora>11:03:57</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>5417</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.SimulaAmortizableGrupalResponse> 
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
      "Usuario": "INSTALADOR", 
      "Token": "1973148151CD285A89A23FBE", 
      "Device": "1" 
   }, 
   "sdtSimulacionPrestamo": { 
      "operacionUId": "94", 
      "producto": { 
         "productoUId": "17", 
         "nombre": "PRESTAMOS, GRUPAL PAGO MENSUAL INT Y CAP", 
         "moneda": "Q", 
         "papel": "$" 
      }, 
      "capital": "38000.00", 
      "valorCuota": "7467.00", 
      "intereses": "6802.02", 
      "tasa": "36.000000", 
      "tasaEfectiva": "0.000000", 
      "tasaEfectivaAnual": "42.576089", 
      "tasaNominalAnual": "36.000000", 
      "totalPrestamo": "44802.02", 
      "fechaValor": "2018-07-19", 
      "fechaVencimiento": "2019-01-14", 
      "fechaPrimerPago": "2018-08-14", 
      "plazo": "179" 
   }, 
   "sdtIntegrantesGrupo": { 
      "sBTIntegranteGrupoSolicitud": [ 
      { 
         "empresa": "1", 
         "clienteUId": "91", 
         "cuenta": "PONTES SILVA GABRIEL", 
         "monto": "10500.00", 
         "destinoCredito": "41", 
         "destinoCreditoDesc": "CAPITAL DE TRABAJO PARA TEMPORADA ALTA", 
         "valorCuota": "2063.25" 
      }, 
      { 
         "empresa": "1", 
         "clienteUId": "102", 
         "cuenta": "BERGESSIO MARTINEZ GONZALO", 
         "monto": "15000.00", 
         "destinoCredito": "42", 
         "destinoCreditoDesc": "CAPITAL DE TRABAJO P.E.A.", 
         "valorCuota": "2947.50" 
      }, 
      { 
         "empresa": "1", 
         "clienteUId": "119", 
         "cuenta": "CERON RODRIGUEZ CESAR MAURICIO", 
         "monto": "12500.00", 
         "destinoCredito": "43", 
         "destinoCreditoDesc": "CAPITAL DE TRABAJO PERMANENTE P.E.A.", 
         "valorCuota": "2456.25" 
      } 
      ] 
   }, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTMicrofinanzas.SimulaAmortizableGrupal", 
      "Fecha": "2020-10-28", 
      "Hora": "11:03:57", 
      "Requerimiento": "1", 
      "Numero": "5417", 
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
<td>sdtSimulacionAmortizableGrupal</td>
<td>sBTSimulacionAmortizableGrupal</td>
<td>Datos de la simulación grupal.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSimulacionAmortizableGrupal son los siguientes:</p>
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
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>fechaPrimerPago</td>
<td>Date</td>
<td>Fecha de primer pago.</td>
</tr>
<tr>
<td>cantidadCuotas</td>
<td>Int</td>
<td>Cantidad de cuotas.</td>
</tr>
<tr>
<td>periodoCuotas</td>
<td>Int</td>
<td>Período entre vencimiento de cada cuota.</td>
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
<td>integrantesGrupo</td>
<td>sBTIntegranteGrupoSolicitud</td>
<td>Datos de los integrantes del grupo.</td>
</tr>
<tr>
<td>datosAdicionales</td>
<td>sBTConcepto</td>
<td>Importe otros conceptos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTIntegranteGrupoSolicitud son los siguientes:</p>
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
<td>empresa</td>
<td>Short</td>
<td>Identificador de empresa.</td>
</tr>
<tr>
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>cuenta</td>
<td>String</td>
<td>Cuenta del cliente.</td>
</tr>
<tr>
<td>monto</td>
<td>Double</td>
<td>Monto solicitado por el cliente.</td>
</tr>
<tr>
<td>destinoCredito</td>
<td>Int</td>
<td>Identificador del destino del crédito.</td>
</tr>
<tr>
<td>destinoCreditoDesc</td>
<td>String</td>
<td>Nombre del destino del crédito.</td>
</tr>
<tr>
<td>valorCuota</td>
<td>Double</td>
<td>Valor de la cuota.</td>
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
<td>sdtSimulacionPrestamo</td>
<td>sBTSimulacionPrestamo</td>
<td>Datos del préstamo simulado.</td>
</tr>
<tr>
<td>sdtIntegrantesGrupo</td>
<td>sBTIntegranteGrupoSolicitud</td>
<td>Datos de los integrantes del grupo.</td>
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
<p>Los campos del tipo de dato estructurado sBTIntegranteGrupoSolicitud son los siguientes:</p>
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
<td>empresa</td>
<td>Short</td>
<td>Identificador de empresa.</td>
</tr>
<tr>
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>cuenta</td>
<td>String</td>
<td>Cuenta del cliente.</td>
</tr>
<tr>
<td>monto</td>
<td>Double</td>
<td>Monto solicitado por el cliente.</td>
</tr>
<tr>
<td>destinoCredito</td>
<td>Int</td>
<td>Identificador del destino del crédito.</td>
</tr>
<tr>
<td>destinoCreditoDesc</td>
<td>String</td>
<td>Nombre del destino del crédito.</td>
</tr>
<tr>
<td>valorCuota</td>
<td>Double</td>
<td>Valor de la cuota.</td>
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
<td>No se recibió el identificador de producto.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recuperó la cuenta para el Identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30004</td>
<td>No se recibió ningún integrante del grupo.</td>
</tr>
<tr>
<td>40001</td>
<td>El integrante no pertenece al grupo.</td>
</tr>
</tbody>
</table>
</div></template>


