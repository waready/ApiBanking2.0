<template><div><h1 id="simular-ofertas" tabindex="-1"><a class="header-anchor" href="#simular-ofertas"><span>Simular Ofertas</span></a></h1>
<p>Método para simular ofertas de préstamos.</p>
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
<td>BTPrestamos.SimularOfertas</td>
<td>RBTPG124</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Simular Ofertas:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.SimularOfertas> 
         <bts:Btinreq> 
            <bts:Device>AC</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>52005b89a6F955E77534D3E0</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>1</bts:clienteUId> 
         <bts:sdtSimulacion> 
            <bts:fechaPrimerPago>2020-05-05</bts:fechaPrimerPago> 
            <bts:monto>1000</bts:monto> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
            <bts:productoUId>43</bts:productoUId> 
            <bts:cuotas> 
               <bts:sBTCuota> 
                  <bts:cantidadCuotas>12</bts:cantidadCuotas> 
               </bts:sBTCuota> 
            </bts:cuotas> 
         </bts:sdtSimulacion> 
      </bts:BTPrestamos.SimularOfertas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularOfertas=' \ 
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
    "clienteUId": "1", 
	"sdtSimulacion": { 
		"fechaPrimerPago": "2020-05-05", 
		"monto": "1000", 
		"periodoCuotas": "30", 
		"productoUId": "43", 
		"cuotas": { 
		  "sBTCuota": {  
			"cantidadCuotas": "12"  
			} 
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
      <BTPrestamos.SimularOfertasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AC</Device> 
            <Usuario>BANTOTAL</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>52005b89a6F955E77534D3E0</Token> 
         </Btinreq> 
         <simulacionUId>39</simulacionUId> 
         <sdtOfertasPrestamo> 
            <sBTOfertaPrestamo> 
               <otrosConceptos>0.00</otrosConceptos> 
               <fechaValor>2019-11-25</fechaValor> 
               <capital>1000.00</capital> 
               <totalComisiones>0.00</totalComisiones> 
               <valorCuota>101.81</valorCuota> 
               <cantidadCuotas>12</cantidadCuotas> 
               <tasa>23.000000</tasa> 
               <totalSeguros>0.00</totalSeguros> 
               <fechaPrimerPago>2020-05-05</fechaPrimerPago> 
               <totalIntereses>221.74</totalIntereses> 
               <fechaVencimiento>2021-04-05</fechaVencimiento> 
               <tea>25.590075</tea> 
               <plazo>497</plazo> 
               <totalAPagar>1221.74</totalAPagar> 
               <totalImpuestos>0.00</totalImpuestos> 
               <cft>25.030000</cft> 
            </sBTOfertaPrestamo> 
         </sdtOfertasPrestamo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>677</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.SimularOfertas</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2020-04-23</Fecha> 
            <Hora>16:17:04</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.SimularOfertasResponse> 
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
	"simulacionUId": 39, 
	"sdtOfertasPrestamo": { 
		"sBTOfertaPrestamo": { 
		  "otrosConceptos": "0.00", 
		  "fechaValor": "2019-11-25", 
		  "capital": "1000.00", 
		  "totalComisiones": "0.00", 
		  "valorCuota": "101.81", 
		  "cantidadCuotas": "12", 
		  "tasa": "23.000000", 
		  "totalSeguros": "0.00", 
		  "fechaPrimerPago": "2020-05-05", 
		  "totalIntereses": "221.74", 
		  "fechaVencimiento": "2021-04-05", 
		  "tea": "25.590075", 
		  "plazo": "497", 
		  "totalAPagar": "1221.74", 
		  "totalImpuestos": "0.00", 
		  "cft": "25.030000" 
		} 
	} 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPrestamos.SimularOfertas", 
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
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>Si la opción general de procesos 3281 se encuentra activada, el servicio considera la sucursal del usuario de conexión, caso contrario, simula con la sucursal de la cuenta cliente.</li>
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único del cliente.</td>
</tr>
<tr>
<td>sdtSimulacion</td>
<td>sBTDatosSimulacion</td>
<td>Datos necesarios para la simulación.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatosSimulacion son los siguientes:</p>
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
<td>fechaPrimerPago</td>
<td>Date</td>
<td>Fecha de primer pago.</td>
</tr>
<tr>
<td>monto</td>
<td>Double</td>
<td>Monto del préstamo.</td>
</tr>
<tr>
<td>periodoCuotas</td>
<td>Int</td>
<td>Período entre cuotas.</td>
</tr>
<tr>
<td>productoUId</td>
<td>Long</td>
<td>Identificador único del producto.</td>
</tr>
<tr>
<td>cuotas</td>
<td>sBTCuota</td>
<td>Colección de cantidad de cuotas para simular.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCuota son los siguientes:</p>
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
<td>cantidadCuotas</td>
<td>Int</td>
<td>Cantidad de cuotas.</td>
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
<td>simulacionUId</td>
<td>Long</td>
<td>Identificador único de la simulación.</td>
</tr>
<tr>
<td>sdtOfertasPrestamo</td>
<td>sBTOfertaPrestamo</td>
<td>Colección de ofertas de préstamo.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTOfertaPrestamo son los siguientes:</p>
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
<td>Double</td>
<td>Monto para otros conceptos.</td>
</tr>
<tr>
<td>fechaValor</td>
<td>Date</td>
<td>Fecha valor.</td>
</tr>
<tr>
<td>capital</td>
<td>Double</td>
<td>Capital del préstamo.</td>
</tr>
<tr>
<td>totalComisiones</td>
<td>Double</td>
<td>Monto total para comisiones.</td>
</tr>
<tr>
<td>valorCuota</td>
<td>Double</td>
<td>Valor cuota.</td>
</tr>
<tr>
<td>cantidadCuotas</td>
<td>Int</td>
<td>Cantidad de las cuotas.</td>
</tr>
<tr>
<td>tasa</td>
<td>Double</td>
<td>Tasa del préstamo.</td>
</tr>
<tr>
<td>totalSeguros</td>
<td>Double</td>
<td>Monto total para seguros.</td>
</tr>
<tr>
<td>fechaPrimerPago</td>
<td>Date</td>
<td>Fecha de primer pago.</td>
</tr>
<tr>
<td>totalIntereses</td>
<td>Double</td>
<td>Monto total para intereses.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento.</td>
</tr>
<tr>
<td>tea</td>
<td>Double</td>
<td>TEA del préstamo.</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo para el préstamo.</td>
</tr>
<tr>
<td>totalAPagar</td>
<td>Double</td>
<td>Total a pagar.</td>
</tr>
<tr>
<td>totalImpuestos</td>
<td>Double</td>
<td>Monto total para impuestos.</td>
</tr>
<tr>
<td>cft</td>
<td>Double</td>
<td>CFT del préstamo.</td>
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
<td>El Identificador único de Producto es incorrecto</td>
</tr>
<tr>
<td>30005</td>
<td>No se recibió Lista de cuotas a simular.</td>
</tr>
<tr>
<td>30006</td>
<td>No se recibió el Monto de Capital desde el origen.</td>
</tr>
</tbody>
</table>
</div></template>


