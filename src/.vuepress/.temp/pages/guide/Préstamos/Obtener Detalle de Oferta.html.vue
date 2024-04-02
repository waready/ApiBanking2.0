<template><div><h1 id="obtener-detalle-de-oferta" tabindex="-1"><a class="header-anchor" href="#obtener-detalle-de-oferta"><span>Obtener Detalle de Oferta</span></a></h1>
<p>Método para obtener el detalle de una oferta de préstamo simulada.</p>
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
<td>BTPrestamos.ObtenerDetalleOferta</td>
<td>RBTPG125</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Detalle de Oferta:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerDetalleOferta> 
         <bts:Btinreq> 
            <bts:Device>AC</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>52005b89a6F955E77534D3E0</bts:Token> 
         </bts:Btinreq> 
         <bts:simulacionUId>47</bts:simulacionUId> 
         <bts:clienteUId>1</bts:clienteUId> 
         <bts:cantidadCuotas>12</bts:cantidadCuotas> 
         <bts:actividad>1111</bts:actividad> 
      </bts:BTPrestamos.ObtenerDetalleOferta> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?ObtenerDetalleOferta=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "324915377F955E77534D3E02" 
	}, 
	"simulacionUId": 47, 
    "clienteUId": "1", 
	"cantidadCuotas": "12", 
	"actividad": 1111 
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
      <BTPrestamos.ObtenerDetalleOfertaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AC</Device> 
            <Usuario>BANTOTAL</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>52005b89a6F955E77534D3E0</Token> 
         </Btinreq> 
         <sdtOferta> 
            <otrosConceptos></otrosConceptos> 
            <fechaValor>2019-11-25</fechaValor> 
            <capital>1000.00</capital> 
            <cronograma> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2020-05-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2020-06-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2020-07-06</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2020-08-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2020-09-07</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2020-10-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2020-11-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2020-12-07</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2021-01-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2021-02-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2021-03-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.60</cuota> 
                  <fechaPago>2021-04-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
            </cronograma> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <intereses>279.90</intereses> 
            <tasaNominalAnual>23.000000</tasaNominalAnual> 
            <totalPrestamo>3223.97</totalPrestamo> 
            <valorCuota>268.67</valorCuota> 
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual> 
            <operacionUId>194</operacionUId> 
            <tasa>23.000000</tasa> 
            <fechaPrimerPago>2020-05-05</fechaPrimerPago> 
            <idOperacionBT>0010100000101000000000000000004200000000000418001</idOperacionBT> 
            <fechaVencimiento>2021-04-05</fechaVencimiento> 
            <producto> 
               <moneda>$</moneda> 
               <papel>$</papel> 
               <productoUId>43</productoUId> 
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre> 
            </producto> 
            <plazo>497</plazo> 
         </sdtOferta> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>697</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ObtenerDetalleOferta</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2020-04-24</Fecha> 
            <Hora>12:42:27</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerDetalleOfertaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "BANTOTAL", 
        "Token": "324915377F955E77534D3E02", 
        "Device": "AC" 
    }, 
	"sdtOferta": { 
		"otrosConceptos" : {}, 
		"fechaValor": "2019-11-25", 
		"capital": "1000.00", 
		"cronograma": { 
		  "sBTCuotaSimulacion": [ 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-05-05", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-06-05", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-07-06", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-08-05", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-09-07", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-10-05", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-11-05", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-12-07", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2021-01-05", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2021-02-05", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2021-03-05", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.60", 
			  "fechaPago": "2021-04-05", 
			  "seguros": "0.00" 
			} 
		  ] 
		}, 
		"tasaEfectiva": "0.000000", 
		"intereses": "279.90", 
		"tasaNominalAnual": "23.000000", 
		"totalPrestamo": "3223.97", 
		"valorCuota": "268.67", 
		"tasaEfectivaAnual": "25.590075", 
		"operacionUId": "194", 
		"tasa": "23.000000", 
		"fechaPrimerPago": "2020-05-05", 
		"idOperacionBT": "0010100000101000000000000000004200000000000418001", 
		"fechaVencimiento": "2021-04-05", 
		"producto": { 
		  "moneda": "$", 
		  "papel": "$", 
		  "productoUId": "43", 
		  "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
		}, 
		"plazo": "497" 
	} 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPrestamos.ObtenerDetalleOferta", 
        "Fecha": "2019-11-19", 
        "Hora": "13:05:22", 
        "Requerimiento": "", 
        "Numero": 6924, 
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
<td>simulacionUId</td>
<td>Long</td>
<td>Identificador único de la simulación.</td>
</tr>
<tr>
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único del cliente.</td>
</tr>
<tr>
<td>cantidadCuotas</td>
<td>Int</td>
<td>Cantidad de cuotas.</td>
</tr>
<tr>
<td>actividad</td>
<td>Long</td>
<td>Destino del crédito.</td>
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
<td>sdtOferta</td>
<td>sBTSimulacionPrestamoOferta</td>
<td>Detalle de la oferta de préstamo.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSimulacionPrestamoOferta son los siguientes:</p>
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
<td>otrosConceptos</td>
<td>sBTConcepto</td>
<td>Otros conceptos de la simulación.</td>
</tr>
<tr>
<td>fechaValor</td>
<td>Date</td>
<td>Fecha valor.</td>
</tr>
<tr>
<td>capital</td>
<td>Double</td>
<td>Capital total.</td>
</tr>
<tr>
<td>cronograma</td>
<td>sBTCuotaSimulacion</td>
<td>Cronograma del préstamo.</td>
</tr>
<tr>
<td>tasaEfectiva</td>
<td>Double</td>
<td>Tasa efectiva.</td>
</tr>
<tr>
<td>intereses</td>
<td>Double</td>
<td>Intereses totales.</td>
</tr>
<tr>
<td>tasaNominalAnual</td>
<td>Double</td>
<td>Tasa nominal anual.</td>
</tr>
<tr>
<td>totalPrestamo</td>
<td>Double</td>
<td>Total del préstamo.</td>
</tr>
<tr>
<td>tasaEfectivaAnual</td>
<td>Double</td>
<td>Tasa efectiva anual.</td>
</tr>
<tr>
<td>valorCuota</td>
<td>Double</td>
<td>Valor cuota.</td>
</tr>
<tr>
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de la operación.</td>
</tr>
<tr>
<td>tasa</td>
<td>Double</td>
<td>Tasa del préstamo.</td>
</tr>
<tr>
<td>fechaPrimerPago</td>
<td>Date</td>
<td>Fecha primer pago.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha vencimiento.</td>
</tr>
<tr>
<td>idOperacionBT</td>
<td>String</td>
<td>Identificador String bantotal (concatenación de todos los conceptos claves de la operación).</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo del préstamo.</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Descripción del producto.</td>
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
<td>Nombre de producto.</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Símbolo de moneda.</td>
</tr>
<tr>
<td>papel</td>
<td>String</td>
<td>Símbolo de papel.</td>
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
<td>No se recibió el identificador de simulación.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recuperó la cuenta para el Identificador: [Número de Identificador].</td>
</tr>
<tr>
<td>30004</td>
<td>La simulación no corresponde al cliente: [Número de Cliente].</td>
</tr>
<tr>
<td>30005</td>
<td>La cantidad de cuotas indicada no forma parte de las ofertas.</td>
</tr>
<tr>
<td>30012</td>
<td>La simulación no existe.</td>
</tr>
<tr>
<td>40238</td>
<td>El Código de Actividad indicado es incorrecto.</td>
</tr>
</tbody>
</table>
</div></template>


