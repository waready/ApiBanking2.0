<template><div><h1 id="obtener-cantidad-cuotas" tabindex="-1"><a class="header-anchor" href="#obtener-cantidad-cuotas"><span>Obtener Cantidad Cuotas</span></a></h1>
<p>Método para obtener las cantidades de cuotas parametrizadas de un producto de préstamo.</p>
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
<td>BTModeladorPrestamos.ObtenerCantidadCuotas</td>
<td>RBTPG350</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Cantidad Cuotas:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTModeladorPrestamos.ObtenerCantidadCuotas> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>194002532CD285A89A23FBEE</bts:Token> 
            <bts:Device></bts:Device> 
         </bts:Btinreq> 
         <bts:productoUId>105</bts:productoUId> 
      </bts:BTModeladorPrestamos.ObtenerCantidadCuotas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "INSTALADOR", 
        "Token": "1511184612CD285A89A23FBE", 
        "Device": "" 
    }, 
    "productoUId": "105" 
} 
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
      <BTModeladorPrestamos.ObtenerCantidadCuotasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento/> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>194002532CD285A89A23FBEE</Token> 
            <Device/> 
         </Btinreq> 
         <minimo>0</minimo> 
         <maximo>0</maximo> 
         <valorPorDefecto>0</valorPorDefecto> 
         <tipo>Lista</tipo> 
         <sdtListaValores> 
            <SdtsBTValor> 
               <valor>6</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>10</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>12</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>15</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>18</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>20</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>24</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>36</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>60</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>90</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>120</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>180</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>240</valor> 
            </SdtsBTValor> 
         </sdtListaValores> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTModeladorPrestamos.ObtenerCantidadCuotas</Servicio> 
            <Fecha>2021-11-03</Fecha> 
            <Hora>18:08:24</Hora> 
            <Requerimiento/> 
            <Numero>8631</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTModeladorPrestamos.ObtenerCantidadCuotasResponse> 
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
        "Usuario": "INSTALADOR", 
        "Token": "1511184612CD285A89A23FBE", 
        "Device": "" 
    }, 
    "minimo": 0, 
    "maximo": 0, 
    "valorPorDefecto": 0, 
    "tipo": "Lista", 
    "sdtListaValores": { 
        "SdtsBTValor": [ 
            { 
                "valor": 6 
            }, 
            { 
                "valor": 10 
            }, 
            { 
                "valor": 12 
            }, 
            { 
                "valor": 15 
            }, 
            { 
                "valor": 18 
            }, 
            { 
                "valor": 20 
            }, 
            { 
                "valor": 24 
            }, 
            { 
                "valor": 36 
            }, 
            { 
                "valor": 60 
            }, 
            { 
                "valor": 90 
            }, 
            { 
                "valor": 120 
            }, 
            { 
                "valor": 180 
            }, 
            { 
                "valor": 240 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTModeladorPrestamos.ObtenerCantidadCuotas", 
        "Fecha": "2021-11-03", 
        "Hora": "17:30:49", 
        "Requerimiento": "", 
        "Numero": 8556, 
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
<td>productoUId</td>
<td>Long</td>
<td>Identificador de producto.</td>
</tr>
<tr>
<td>parametro</td>
<td>Short</td>
<td>[Hidden: Valor 409 definido por defecto].</td>
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
<td>minimo</td>
<td>Long</td>
<td>Valor mínimo de cantidad de cuotas.</td>
</tr>
<tr>
<td>maximo</td>
<td>Long</td>
<td>Valor máximo de cantidad de cuotas.</td>
</tr>
<tr>
<td>valorPorDefecto</td>
<td>Long</td>
<td>Valor por defecto de cantidad de cuotas.</td>
</tr>
<tr>
<td>tipo</td>
<td>Long</td>
<td>Tipo de cuotas.</td>
</tr>
<tr>
<td>sdtListaValores</td>
<td>sBTValor</td>
<td>Listado de valores.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTValor son los siguientes:</p>
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
<td>valor</td>
<td>Long</td>
<td>Valor de cantidad de cuotas.</td>
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
<td>30002</td>
<td>Existe registro con la cuenta indicada.</td>
</tr>
<tr>
<td>30003</td>
<td>No existe registro para el identificador único.</td>
</tr>
<tr>
<td>30004</td>
<td>No existe registro para el producto indicado.</td>
</tr>
</tbody>
</table>
</div></template>


