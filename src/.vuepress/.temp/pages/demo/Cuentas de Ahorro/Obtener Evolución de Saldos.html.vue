<template><div><h1 id="obtener-evolucion-de-saldos" tabindex="-1"><a class="header-anchor" href="#obtener-evolucion-de-saldos"><span>Obtener Evolución de Saldos</span></a></h1>
<p>Método para obtener la evolución del saldo de un producto cuenta de ahorro en Bantotal</p>
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
<td>BTCuentasDeAhorro.ObtenerEvolucionDeSaldos</td>
<td>RBTPG005</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Evolución de Saldos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasDeAhorro.ObtenerEvolucionDeSaldos> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>9</bts:operacionUId> 
      </bts:BTCuentasDeAhorro.ObtenerEvolucionDeSaldos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasDeAhorro?ObtenerEvolucionDeSaldos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "operacionUId": 9 
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
      <BTCuentasDeAhorro.ObtenerEvolucionDeSaldosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtEvolucionSaldo> 
            <productoUId>9</productoUId> 
            <saldos> 
               <sBTSaldoMensual> 
                  <anio>2018</anio> 
                  <mes>9</mes> 
                  <saldo>0.00</saldo> 
               </sBTSaldoMensual> 
               <sBTSaldoMensual> 
                  <anio>2018</anio> 
                  <mes>8</mes> 
                  <saldo>0.00</saldo> 
               </sBTSaldoMensual> 
               <sBTSaldoMensual> 
                  <anio>2018</anio> 
                  <mes>7</mes> 
                  <saldo>0.00</saldo> 
               </sBTSaldoMensual> 
               <sBTSaldoMensual> 
                  <anio>2018</anio> 
                  <mes>6</mes> 
                  <saldo>0.00</saldo> 
               </sBTSaldoMensual> 
               <sBTSaldoMensual> 
                  <anio>2018</anio> 
                  <mes>5</mes> 
                  <saldo>0.00</saldo> 
               </sBTSaldoMensual> 
               <sBTSaldoMensual> 
                  <anio>2018</anio> 
                  <mes>4</mes> 
                  <saldo>0.00</saldo> 
               </sBTSaldoMensual> 
               <sBTSaldoMensual> 
                  <anio>2018</anio> 
                  <mes>3</mes> 
                  <saldo>0.00</saldo> 
               </sBTSaldoMensual> 
               <sBTSaldoMensual> 
                  <anio>2018</anio> 
                  <mes>2</mes> 
                  <saldo>0.00</saldo> 
               </sBTSaldoMensual> 
               <sBTSaldoMensual> 
                  <anio>2018</anio> 
                  <mes>1</mes> 
                  <saldo>0.00</saldo> 
               </sBTSaldoMensual> 
               <sBTSaldoMensual> 
                  <anio>2017</anio> 
                  <mes>12</mes> 
                  <saldo>0.00</saldo> 
               </sBTSaldoMensual> 
               <sBTSaldoMensual> 
                  <anio>2017</anio> 
                  <mes>11</mes> 
                  <saldo>0.00</saldo> 
               </sBTSaldoMensual> 
               <sBTSaldoMensual> 
                  <anio>2017</anio> 
                  <mes>10</mes> 
                  <saldo>0.00</saldo> 
               </sBTSaldoMensual> 
            </saldos> 
         </sdtEvolucionSaldo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>930</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasDeAhorro.ObtenerEvolucionDeSaldos</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>17:35:25</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasDeAhorro.ObtenerEvolucionDeSaldosResponse> 
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
    "sdtEvolucionSaldo": { 
        "productoUId": "9", 
        "saldos": { 
            "sBTSaldoMensual": [ 
                { 
                    "saldo": "0.00", 
                    "mes": "9", 
                    "anio": "2018" 
                }, 
                { 
                    "saldo": "0.00", 
                    "mes": "8", 
                    "anio": "2018" 
                }, 
                { 
                    "saldo": "0.00", 
                    "mes": "7", 
                    "anio": "2018" 
                }, 
                { 
                    "saldo": "0.00", 
                    "mes": "6", 
                    "anio": "2018" 
                }, 
                { 
                    "saldo": "0.00", 
                    "mes": "5", 
                    "anio": "2018" 
                }, 
                { 
                    "saldo": "0.00", 
                    "mes": "4", 
                    "anio": "2018" 
                }, 
                { 
                    "saldo": "0.00", 
                    "mes": "3", 
                    "anio": "2018" 
                }, 
                { 
                    "saldo": "0.00", 
                    "mes": "2", 
                    "anio": "2018" 
                }, 
                { 
                    "saldo": "0.00", 
                    "mes": "1", 
                    "anio": "2018" 
                }, 
                { 
                    "saldo": "0.00", 
                    "mes": "12", 
                    "anio": "2017" 
                }, 
                { 
                    "saldo": "0.00", 
                    "mes": "11", 
                    "anio": "2017" 
                }, 
                { 
                    "saldo": "0.00", 
                    "mes": "10", 
                    "anio": "2017" 
                } 
            ] 
        } 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "931", 
        "Estado": "OK", 
        "Servicio": "BTCuentasDeAhorro.ObtenerEvolucionDeSaldos", 
        "Fecha": "2017-12-21", 
        "Requerimiento": "", 
        "Hora": "17:35:37", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  
### Datos de entrada 
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
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
<td>sdtEvolucionSaldo</td>
<td>sBTEvolucionSaldos</td>
<td>Datos de la evolución de saldos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTEvolucionSaldos son los siguientes:</p>
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
<td>saldos</td>
<td>sBTSaldoMensual</td>
<td>Listado de saldo mensual.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSaldoMensual son los siguientes:</p>
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
<td>anio</td>
<td>Short</td>
<td>Año.</td>
</tr>
<tr>
<td>mes</td>
<td>Byte</td>
<td>Mes.</td>
</tr>
<tr>
<td>saldo</td>
<td>Double</td>
<td>Saldo mensual.</td>
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
<td>No se recibió el identificador único de operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó Operación para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30003</td>
<td>La operación ingresada no corresponde a una cuenta de ahorro.</td>
</tr>
</tbody>
</table>
</div></template>


