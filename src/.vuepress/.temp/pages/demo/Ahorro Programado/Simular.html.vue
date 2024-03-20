<template><div><h1 id="simular" tabindex="-1"><a class="header-anchor" href="#simular"><span>Simular</span></a></h1>
<p>Método para simular el alta de un ahorro programado</p>
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
<td>BTAhorroProgramado.Simular</td>
<td>RBTPG446</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Simular:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.Simular> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Device>GL</bts:Device> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>01D45E9964612A4C8CCB1055</bts:Token> 
         </bts:Btinreq> 
         <bts:sdtDatos> 
            <bts:abono>10000</bts:abono> 
            <bts:productoUid>82</bts:productoUid> 
            <bts:montoTotalAhorrar>0</bts:montoTotalAhorrar> 
            <bts:clienteUid>61</bts:clienteUid> 
            <bts:personaUid>22</bts:personaUid> 
            <bts:diaIncremento>5</bts:diaIncremento> 
            <bts:depositoInicial>1000</bts:depositoInicial> 
            <bts:fechaInicioAhorro></bts:fechaInicioAhorro> 
            <bts:plazo>360</bts:plazo> 
            <bts:periodicidadIncremento>1</bts:periodicidadIncremento> 
         </bts:sdtDatos> 
      </bts:BTAhorroProgramado.Simular> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?Simular' \ 
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
        "sdtDatos": { 
          "abono": 10000, 
          "productoUid": 82, 
          "montoTotalAhorrar": 0, 
          "clienteUid": 61, 
          "personaUid": 22, 
          "diaIncremento": 5, 
          "depositoInicial": 1000, 
          "fechaInicioAhorro": "", 
          "plazo": 360, 
          "periodicidadIncremento": 1 
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
      <BTAhorroProgramado.SimularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Usuario>MINSTALADOR</Usuario> 
            <Device>GL</Device> 
            <Requerimiento>1</Requerimiento> 
            <Token>01D45E9964612A4C8CCB1055</Token> 
         </Btinreq> 
         <sdtSimulacion> 
            <fechaInicio>2021-01-05</fechaInicio> 
            <cronograma> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>8.49</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>31</plazo> 
                  <fechaPago>2021-01-05</fechaPago> 
                  <capital>1000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>84.38</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>59</plazo> 
                  <fechaPago>2021-02-05</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>178.36</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>90</plazo> 
                  <fechaPago>2021-03-05</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>254.79</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>120</plazo> 
                  <fechaPago>2021-04-05</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>370.68</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>153</plazo> 
                  <fechaPago>2021-05-05</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>391.23</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>181</plazo> 
                  <fechaPago>2021-06-07</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>518.08</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>212</plazo> 
                  <fechaPago>2021-07-05</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>622.47</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>244</plazo> 
                  <fechaPago>2021-08-05</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>643.56</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>273</plazo> 
                  <fechaPago>2021-09-06</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>772.88</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>304</plazo> 
                  <fechaPago>2021-10-05</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>857.81</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>335</plazo> 
                  <fechaPago>2021-11-05</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>760.27</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>360</plazo> 
                  <fechaPago>2021-12-06</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
            </cronograma> 
            <simulacionId>741</simulacionId> 
            <depositoInicial>1000.00</depositoInicial> 
            <tasaOriginal>10.00</tasaOriginal> 
            <totalIntereses>5463.00</totalIntereses> 
            <Abono>10000.00</Abono> 
            <totalAhorro>111000.00</totalAhorro> 
            <fechaVencimiento>2021-12-31</fechaVencimiento> 
            <plazo>360</plazo> 
            <producto> 
               <moneda>$</moneda> 
               <papel>$</papel> 
               <productoUId>82</productoUId> 
               <nombre>Ahorro en Sueldo Pesos</nombre> 
            </producto> 
            <periodicidadIncremento>1</periodicidadIncremento> 
            <sucursal>Casa Matriz</sucursal> 
            <totalImpuestos>0.00</totalImpuestos> 
         </sdtSimulacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Estado>OK</Estado> 
            <Fecha>2022-11-29</Fecha> 
            <Hora>17:21:52</Hora> 
            <Numero>11095</Numero> 
            <Servicio>BTAhorroProgramado.Simular</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTAhorroProgramado.SimularResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Usuario": "MINSTALADOR", 
          "Device": "GL", 
          "Requerimiento": 1, 
          "Token": "01D45E9964612A4C8CCB1055" 
        }, 
        "sdtSimulacion": { 
          "fechaInicio": "2021-01-05", 
          "cronograma": { 
            "SdtsBTCuotaAhorro": [ 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 8.49, 
                "otrosConceptos": "", 
                "plazo": 31, 
                "fechaPago": "2021-01-05", 
                "capital": 1000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 84.38, 
                "otrosConceptos": "", 
                "plazo": 59, 
                "fechaPago": "2021-02-05", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 178.36, 
                "otrosConceptos": "", 
                "plazo": 90, 
                "fechaPago": "2021-03-05", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 254.79, 
                "otrosConceptos": "", 
                "plazo": 120, 
                "fechaPago": "2021-04-05", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 370.68, 
                "otrosConceptos": "", 
                "plazo": 153, 
                "fechaPago": "2021-05-05", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 391.23, 
                "otrosConceptos": "", 
                "plazo": 181, 
                "fechaPago": "2021-06-07", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 518.08, 
                "otrosConceptos": "", 
                "plazo": 212, 
                "fechaPago": "2021-07-05", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 622.47, 
                "otrosConceptos": "", 
                "plazo": 244, 
                "fechaPago": "2021-08-05", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 643.56, 
                "otrosConceptos": "", 
                "plazo": 273, 
                "fechaPago": "2021-09-06", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 772.88, 
                "otrosConceptos": "", 
                "plazo": 304, 
                "fechaPago": "2021-10-05", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 857.81, 
                "otrosConceptos": "", 
                "plazo": 335, 
                "fechaPago": "2021-11-05", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 760.27, 
                "otrosConceptos": "", 
                "plazo": 360, 
                "fechaPago": "2021-12-06", 
                "capital": 10000 
              } 
            ] 
          }, 
          "simulacionId": 741, 
          "depositoInicial": 1000, 
          "tasaOriginal": 10, 
          "totalIntereses": 5463, 
          "Abono": 10000, 
          "totalAhorro": 111000, 
          "fechaVencimiento": "2021-12-31", 
          "plazo": 360, 
          "producto": { 
            "moneda": "$", 
            "papel": "$", 
            "productoUId": 82, 
            "nombre": "Ahorro en Sueldo Pesos" 
          }, 
          "periodicidadIncremento": 1, 
          "sucursal": "Casa Matriz", 
          "totalImpuestos": 0 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Estado": "OK", 
          "Fecha": "2022-11-29", 
          "Hora": "17:21:52", 
          "Numero": 11095, 
          "Servicio": "BTAhorroProgramado.Simular", 
          "Requerimiento": 1, 
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
<td>sBTSolicitudSimulacionAhorroProgramado</td>
<td>sBTSolicitudSimulacionAhorro</td>
<td>Datos de la simulación.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSolicitudSimulacionAhorro son los siguientes:</p>
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
</tr>
<tr>
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>fechaInicioAhorro</td>
<td>Date</td>
<td>Fecha de inicio del ahorro.</td>
</tr>
<tr>
<td>depositoInicial</td>
<td>Double</td>
<td>Depósito inicial.</td>
</tr>
<tr>
<td>montoTotalAhorrar</td>
<td>Double</td>
<td>Monto total del ahorro.</td>
</tr>
<tr>
<td>abono</td>
<td>Double</td>
<td>Abono.</td>
</tr>
<tr>
<td>diaIncremento</td>
<td>Int</td>
<td>Día de incremento.</td>
</tr>
<tr>
<td>periodicidadIncremento</td>
<td>Int</td>
<td>Periodicidad de incremento.</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo.</td>
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
<td>sBTSimulacionAhorroProgramado</td>
<td>sBTSimulacionAhorroProgramado</td>
<td>Simulación de ahorro programado.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSimulacionAhorroProgramado son los siguientes:</p>
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
<td>simulacionId</td>
<td>Long</td>
<td>Identificador de simulación.</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Datos del producto.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Nombre de la sucursal.</td>
</tr>
<tr>
<td>periodicidadIncremento</td>
<td>Int</td>
<td>Periodicidad de incremento.</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo.</td>
</tr>
<tr>
<td>fechaInicio</td>
<td>Date</td>
<td>Fecha de inicio.</td>
</tr>
<tr>
<td>depositoInicial</td>
<td>Double</td>
<td>Depósito inicial.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento.</td>
</tr>
<tr>
<td>tasaOriginal</td>
<td>Double</td>
<td>Tasa original.</td>
</tr>
<tr>
<td>abono</td>
<td>Double</td>
<td>Abono.</td>
</tr>
<tr>
<td>cronograma</td>
<td>sBTCronogramaAhorro</td>
<td>Detalle del cronograma de ahorro.</td>
</tr>
<tr>
<td>totalAhorro</td>
<td>Double</td>
<td>Total del ahorro.</td>
</tr>
<tr>
<td>totalImpuestos</td>
<td>Double</td>
<td>Total de impuestos.</td>
</tr>
<tr>
<td>totalIntereses</td>
<td>Double</td>
<td>Total de intereses.</td>
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
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre del producto.</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Símbolo de la moneda.</td>
</tr>
<tr>
<td>papel</td>
<td>String</td>
<td>Símbolo del papel.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCronogramaAhorro son los siguientes:</p>
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
<td>sBTCronogramaAhorro</td>
<td>sBTCuotaAhorro</td>
<td>Datos de la cuota de ahorro.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCuotaAhorro son los siguientes:</p>
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
<td>plazo</td>
<td>Int</td>
<td>Plazo.</td>
</tr>
<tr>
<td>capital</td>
<td>Double</td>
<td>Capital.</td>
</tr>
<tr>
<td>interes</td>
<td>Double</td>
<td>Interés.</td>
</tr>
<tr>
<td>impuestos</td>
<td>Double</td>
<td>Impuestos.</td>
</tr>
<tr>
<td>tasa</td>
<td>Double</td>
<td>Tasa.</td>
</tr>
<tr>
<td>otrosConceptos</td>
<td>sBTConcepto</td>
<td>Datos de otros conceptos.</td>
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
<td>No se recibió el identificador de la persona.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador del cliente.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificador del producto.</td>
</tr>
<tr>
<td>30008</td>
<td>No se recuperó la persona para el identificador: [Número de Identificador].</td>
</tr>
<tr>
<td>30009</td>
<td>No se recuperó la cuenta para el identificador de cliente: [Número de Identificador].</td>
</tr>
<tr>
<td>30012</td>
<td>No se recuperó el producto de ahorro para el identificador: [Número de Identificador].</td>
</tr>
<tr>
<td>40150</td>
<td>Ocurrio un error al actualizar la información del ahorro.</td>
</tr>
<tr>
<td>40955</td>
<td>El deposito inicial es superior al total a ahorrar.</td>
</tr>
</tbody>
</table>
<p>ECHO está desactivado.</p>
</div></template>


