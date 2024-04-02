<template><div><h1 id="obtener-prestamos-con-avance" tabindex="-1"><a class="header-anchor" href="#obtener-prestamos-con-avance"><span>Obtener Préstamos con Avance</span></a></h1>
<p>Método para obtener un listado de los préstamos de un cliente con su avance.</p>
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
<td>BTClientes.ObtenerPrestamosConAvance</td>
<td>RBTPG259</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores:</li>
</ol>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Valor</th>
</tr>
</thead>
<tbody>
<tr>
<td>Correlativo 1</td>
<td>3</td>
</tr>
<tr>
<td>Correlativo 2</td>
<td>1</td>
</tr>
<tr>
<td>Valor específico 1</td>
<td>Identificador del módulo a incluir.</td>
</tr>
</tbody>
</table>
<ol start="2">
<li>Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores:</li>
</ol>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Valor</th>
</tr>
</thead>
<tbody>
<tr>
<td>Correlativo 1</td>
<td>3</td>
</tr>
<tr>
<td>Correlativo 2</td>
<td>2</td>
</tr>
<tr>
<td>Valor específico 1</td>
<td>Módulo del tipo de operación a excluir.</td>
</tr>
<tr>
<td>Valor específico 2</td>
<td>Tipo de operación a excluir.</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Prestamos con Avance:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerPrestamosConAvance> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>324915377F955E77534D3E02</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>1</bts:clienteUId> 
      </bts:BTClientes.ObtenerPrestamosConAvance> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPrestamosConAvance=' \ 
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
      <BTClientes.ObtenerPrestamosConAvanceResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>324915377F955E77534D3E02</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtPrestamos> 
            <sBTProgresoPrestamo> 
               <operacionUId>10</operacionUId> 
               <idOperacionFmt>0000000170-000</idOperacionFmt> 
               <idOperacionBT>0010000100101000000000000000002700000000000170003</idOperacionBT> 
               <producto> 
                  <productoUId>0</productoUId> 
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amort. Libre UI_Empresa</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
               <estado>Cobro Judicial</estado> 
               <cantidadCuotas>12</cantidadCuotas> 
               <cantidadCuotasPagas>2</cantidadCuotasPagas> 
               <capitalDesembolsado>100000.00</capitalDesembolsado> 
               <capitalCancelado>16666.67</capitalCancelado> 
            </sBTProgresoPrestamo> 
            <sBTProgresoPrestamo> 
               <operacionUId>11</operacionUId> 
               <idOperacionFmt>0000000048-000</idOperacionFmt> 
               <idOperacionBT>0010100000101000000000000000002700000000000048001</idOperacionBT> 
               <producto> 
                  <productoUId>0</productoUId> 
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
               <estado>Normal</estado> 
               <cantidadCuotas>12</cantidadCuotas> 
               <cantidadCuotasPagas>0</cantidadCuotasPagas> 
               <capitalDesembolsado>515000.00</capitalDesembolsado> 
               <capitalCancelado>16666.67</capitalCancelado> 
            </sBTProgresoPrestamo> 
            <sBTProgresoPrestamo> 
               <operacionUId>12</operacionUId> 
               <idOperacionFmt>0000000080-000</idOperacionFmt> 
               <idOperacionBT>0010100000101000000000000000002700000000000080001</idOperacionBT> 
               <producto> 
                  <productoUId>0</productoUId> 
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
               <estado>Normal</estado> 
               <cantidadCuotas>12</cantidadCuotas> 
               <cantidadCuotasPagas>6</cantidadCuotasPagas> 
               <capitalDesembolsado>765000.00</capitalDesembolsado> 
               <capitalCancelado>142470.83</capitalCancelado> 
            </sBTProgresoPrestamo> 
         </sdtPrestamos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTClientes.ObtenerPrestamosConAvance</Servicio> 
            <Fecha>2019-11-19</Fecha> 
            <Hora>12:58:57</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>6923</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTClientes.ObtenerPrestamosConAvanceResponse> 
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
    "sdtPrestamos": { 
        "sBTProgresoPrestamo": [ 
            { 
                "operacionUId": 10, 
                "idOperacionFmt": "0000000170-000", 
                "idOperacionBT": "0010000100101000000000000000002700000000000170003", 
                "producto": { 
                    "productoUId": 0, 
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amort. Libre UI_Empresa", 
                    "moneda": "$", 
                    "papel": "" 
                }, 
                "sucursal": "Sucursal Beta", 
                "estado": "Cobro Judicial", 
                "cantidadCuotas": 12, 
                "cantidadCuotasPagas": 2, 
                "capitalDesembolsado": 100000.00, 
                "capitalCancelado": 16666.67 
            }, 
            { 
                "operacionUId": 11, 
                "idOperacionFmt": "0000000048-000", 
                "idOperacionBT": "0010100000101000000000000000002700000000000048001", 
                "producto": { 
                    "productoUId": 0, 
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF", 
                    "moneda": "$", 
                    "papel": "" 
                }, 
                "sucursal": "Casa Matriz", 
                "estado": "Normal", 
                "cantidadCuotas": 12, 
                "cantidadCuotasPagas": 0, 
                "capitalDesembolsado": 515000.00, 
                "capitalCancelado": 16666.67 
            }, 
            { 
                "operacionUId": 12, 
                "idOperacionFmt": "0000000080-000", 
                "idOperacionBT": "0010100000101000000000000000002700000000000080001", 
                "producto": { 
                    "productoUId": 0, 
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF", 
                    "moneda": "$", 
                    "papel": "" 
                }, 
                "sucursal": "Casa Matriz", 
                "estado": "Normal", 
                "cantidadCuotas": 12, 
                "cantidadCuotasPagas": 6, 
                "capitalDesembolsado": 765000.00, 
                "capitalCancelado": 142470.83 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTClientes.ObtenerPrestamosConAvance", 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
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
<td>sdtPrestamos</td>
<td>sBTProgresoPrestamo</td>
<td>Listado de préstamos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTProgresoPrestamo son los siguientes:</p>
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
<td>Identificador.</td>
</tr>
<tr>
<td>idOperacionFmt</td>
<td>String</td>
<td>Identificador String (concatenación de algunos conceptos claves de la operación).</td>
</tr>
<tr>
<td>idOperacionBT</td>
<td>String</td>
<td>Identificador String Bantotal (concatenación de todos los conceptos claves de la operación).</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Datos del producto.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Nombre de la sucursal de alta.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Descrición de estado de la operación.</td>
</tr>
<tr>
<td>cantidadCuotas</td>
<td>Short</td>
<td>Cantidad de cuotas del préstamo.</td>
</tr>
<tr>
<td>cantidadCuotasPagas</td>
<td>Short</td>
<td>Cantidad de cuotas pagas del préstamo.</td>
</tr>
<tr>
<td>capitalDesembolsado</td>
<td>Double</td>
<td>Capital desembolsado del préstamo.</td>
</tr>
<tr>
<td>capitalCancelado</td>
<td>Double</td>
<td>Capital cancelado del préstamo.</td>
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
<td>Símbolo de moneda.</td>
</tr>
<tr>
<td>papel</td>
<td>String</td>
<td>Símbolo de papel.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sCTResumenProducto son los siguientes:</p>
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
<td>descripcion</td>
<td>String</td>
<td>Descripción.</td>
</tr>
<tr>
<td>cantidad</td>
<td>Int</td>
<td>Cantidad de operaciones.</td>
</tr>
<tr>
<td>saldoUSD</td>
<td>Double</td>
<td>Saldo disponible en dólares.</td>
</tr>
<tr>
<td>saldoMN</td>
<td>Double</td>
<td>Saldo disponible en moneda nacional.</td>
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
<td>No se recuperó la cuenta para el Identificador: ?</td>
</tr>
</tbody>
</table>
</div></template>


