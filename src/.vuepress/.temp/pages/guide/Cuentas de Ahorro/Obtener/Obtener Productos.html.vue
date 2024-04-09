<template><div><h1 id="obtener-productos" tabindex="-1"><a class="header-anchor" href="#obtener-productos"><span>Obtener Productos</span></a></h1>
<p>Método para obtener un listado de los productos cuentas de ahorro ingresados en Bantotal</p>
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
<td>BTCuentasDeAhorro.ObtenerProductos</td>
<td>RBTPG054</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Productos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCuentasDeAhorro.ObtenerProductos xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>be9fc8708b4A8B5C60A82434</Token> 
         </Btinreq> 
      </BTCuentasDeAhorro.ObtenerProductos> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasDeAhorro?ObtenerProductos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6bd8fd4d-69ed-56f1-79fc-8d458f726066' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
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
      <BTCuentasDeAhorro.ObtenerProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>be9fc8708b4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtProductos> 
            <sBTProducto> 
               <productoUId>1</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>2</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>3</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Jurídica</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>4</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Jurídica</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>5</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja Ahorro P.Física Especie</nombre> 
               <moneda>$</moneda> 
               <papel>UI</papel> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>6</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja Ahorro P.Jurídica Especie</nombre> 
               <moneda>$</moneda> 
               <papel>UI</papel> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>7</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro Junior</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>8</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro Junior</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>9</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro CTS</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>10</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro CTS</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>11</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro c/Orden de Pago</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>12</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro c/Orden de Pago</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>13</productoUId> 
               <nombre>CAJAS DE AHORRO, Cuentas Ahorro Remuneraciones</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>14</productoUId> 
               <nombre>CAJAS DE AHORRO, Cuentas Ahorro Remuneraciones</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>15</productoUId> 
               <nombre>CAJAS DE AHORRO, Cuentas Ahorro Unificadas</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>16</productoUId> 
               <nombre>CAJAS DE AHORRO, Cuentas Ahorro Unificadas</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>17</productoUId> 
               <nombre>CAJAS DE AHORRO, Cuentas Ahorro Judiciales</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>18</productoUId> 
               <nombre>CAJAS DE AHORRO, Cuentas Ahorro Judiciales</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>19</productoUId> 
               <nombre>CAJAS DE AHORRO, Cuentas Gratuita Universal</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>20</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro con Libreta</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>21</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro con Libreta</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
         </sdtProductos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>988</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasDeAhorro.ObtenerProductos</Servicio> 
            <Requerimiento/> 
            <Fecha>2017-12-22</Fecha> 
            <Hora>17:52:40</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasDeAhorro.ObtenerProductosResponse> 
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
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "sdtProductos": { 
        "sBTProducto": [ 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "1", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "2", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "3", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Jurídica" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "4", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Jurídica" 
            }, 
            { 
                "papel": "UI", 
                "moneda": "$", 
                "productoUId": "5", 
                "nombre": "CAJAS DE AHORRO, Caja Ahorro P.Física Especie" 
            }, 
            { 
                "papel": "UI", 
                "moneda": "$", 
                "productoUId": "6", 
                "nombre": "CAJAS DE AHORRO, Caja Ahorro P.Jurídica Especie" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "7", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro Junior" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "8", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro Junior" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "9", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro CTS" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "10", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro CTS" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "11", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro c/Orden de Pago" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "12", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro c/Orden de Pago" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "13", 
                "nombre": "CAJAS DE AHORRO, Cuentas Ahorro Remuneraciones" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "14", 
                "nombre": "CAJAS DE AHORRO, Cuentas Ahorro Remuneraciones" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "15", 
                "nombre": "CAJAS DE AHORRO, Cuentas Ahorro Unificadas" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "16", 
                "nombre": "CAJAS DE AHORRO, Cuentas Ahorro Unificadas" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "17", 
                "nombre": "CAJAS DE AHORRO, Cuentas Ahorro Judiciales" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "18", 
                "nombre": "CAJAS DE AHORRO, Cuentas Ahorro Judiciales" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "19", 
                "nombre": "CAJAS DE AHORRO, Cuentas Gratuita Universal" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "20", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro con Libreta" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "21", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro con Libreta" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "989", 
        "Estado": "OK", 
        "Servicio": "BTCuentasDeAhorro.ObtenerProductos", 
        "Requerimiento": "", 
        "Fecha": "2017-12-22", 
        "Hora": "17:55:13", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada"><span>Datos de entrada</span></a></h3>
<p>No aplica</p>
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
<td>sdtProductos</td>
<td>sBTProducto</td>
<td>Listado de productos</td>
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
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica</p>
<p>ECHO está desactivado.</p>
</div></template>


