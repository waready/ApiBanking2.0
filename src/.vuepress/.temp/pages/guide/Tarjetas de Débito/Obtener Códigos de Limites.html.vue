<template><div><h1 id="obtener-codigos-de-limites" tabindex="-1"><a class="header-anchor" href="#obtener-codigos-de-limites"><span>Obtener Códigos de Limites</span></a></h1>
<p>Método para obtener los códigos de límites disponibles para tarjetas de débito.</p>
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
<td>BTTarjetasDeDebito.ObtenerCodigosDeLimites</td>
<td>RBTPG147</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Codigos de Limites:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerCodigosDeLimites> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>352296800F955E77534D3E02</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
      </bts:BTTarjetasDeDebito.ObtenerCodigosDeLimites> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X GET \ 
   'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ObtenerCodigosDeLimites' \ 
   -H 'cache-control: no-cache' \ 
   -H 'content-type: application/json' \ 
   -d '{ 
   "Btinreq": { 
        "Device": "AC", 
        "Usuario": "BANTOTAL", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "352296800F955E77534D3E02" 
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
      <BTTarjetasDeDebito.ObtenerCodigosDeLimitesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>352296800F955E77534D3E02</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtLimites> 
            <SdtsBTLimiteTarjeta> 
               <identificador>1</identificador> 
               <moneda>0</moneda> 
               <limiteEMV>30000.00</limiteEMV> 
               <limiteBandaMagnetica>15000.00</limiteBandaMagnetica> 
               <limiteNoPresencial>10000.00</limiteNoPresencial> 
            </SdtsBTLimiteTarjeta> 
            <SdtsBTLimiteTarjeta> 
               <identificador>2</identificador> 
               <moneda>0</moneda> 
               <limiteEMV>12850.00</limiteEMV> 
               <limiteBandaMagnetica>13000.00</limiteBandaMagnetica> 
               <limiteNoPresencial>8000.00</limiteNoPresencial> 
            </SdtsBTLimiteTarjeta> 
            <SdtsBTLimiteTarjeta> 
               <identificador>3</identificador> 
               <moneda>0</moneda> 
               <limiteEMV>0.00</limiteEMV> 
               <limiteBandaMagnetica>30000.00</limiteBandaMagnetica> 
               <limiteNoPresencial>0.00</limiteNoPresencial> 
            </SdtsBTLimiteTarjeta> 
            <SdtsBTLimiteTarjeta> 
               <identificador>4</identificador> 
               <moneda>0</moneda> 
               <limiteEMV>0.00</limiteEMV> 
               <limiteBandaMagnetica>30000.00</limiteBandaMagnetica> 
               <limiteNoPresencial>10000.00</limiteNoPresencial> 
            </SdtsBTLimiteTarjeta> 
            <SdtsBTLimiteTarjeta> 
               <identificador>5</identificador> 
               <moneda>0</moneda> 
               <limiteEMV>50000.00</limiteEMV> 
               <limiteBandaMagnetica>30000.00</limiteBandaMagnetica> 
               <limiteNoPresencial>10000.00</limiteNoPresencial> 
            </SdtsBTLimiteTarjeta> 
         </sdtLimites> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTTarjetasDeDebito.ObtenerCodigosDeLimites</Servicio> 
            <Fecha>2020-11-12</Fecha> 
            <Hora>16:55:23</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7833</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerCodigosDeLimitesResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
	"Btinreq": { 
        "Device": "AC", 
        "Usuario": "BANTOTAL", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "352296800F955E77534D3E02" 
    }, 
	"sdtLimites": { 
		"SdtsBTLimiteTarjeta": [ 
		  { 
			"identificador": "1", 
			"moneda": "0", 
			"limiteEMV": "30000.00", 
			"limiteBandaMagnetica": "15000.00", 
			"limiteNoPresencial": "10000.00" 
		  }, 
		  { 
			"identificador": "2", 
			"moneda": "0", 
			"limiteEMV": "12850.00", 
			"limiteBandaMagnetica": "13000.00", 
			"limiteNoPresencial": "8000.00" 
		  }, 
		  { 
			"identificador": "3", 
			"moneda": "0", 
			"limiteEMV": "0.00", 
			"limiteBandaMagnetica": "30000.00", 
			"limiteNoPresencial": "0.00" 
		  }, 
		  { 
			"identificador": "4", 
			"moneda": "0", 
			"limiteEMV": "0.00", 
			"limiteBandaMagnetica": "30000.00", 
			"limiteNoPresencial": "10000.00" 
		  }, 
		  { 
			"identificador": "5", 
			"moneda": "0", 
			"limiteEMV": "50000.00", 
			"limiteBandaMagnetica": "30000.00", 
			"limiteNoPresencial": "10000.00" 
		  } 
		] 
	} 
    , 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
	"Btoutreq": { 
		"Canal": "BTDIGITAL", 
		"Servicio": "BTTarjetasDeDebito.ObtenerCodigosDeLimites", 
		"Fecha": "2020-11-12", 
		"Hora": "16:55:23", 
		"Requerimiento": "1", 
		"Numero": "7833", 
		"Estado": "OK" 
	} 
}' 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada"><span>Datos de entrada</span></a></h3>
<p>No aplica.</p>
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
<td>sdtLimites</td>
<td>sBTLimiteTarjeta</td>
<td>Listado de códigos de límite.</td>
</tr>
</tbody>
</table>
<p>El tipo de dato estructurado sBTLimiteTarjeta tiene los siguientes campos:</p>
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
<td>identificador</td>
<td>Short</td>
<td>Código de límite.</td>
</tr>
<tr>
<td>moneda</td>
<td>Short</td>
<td>Código de moneda.</td>
</tr>
<tr>
<td>limiteEMV</td>
<td>Double</td>
<td>Monto límite EMV.</td>
</tr>
<tr>
<td>limiteBandaMagnetica</td>
<td>Double</td>
<td>Monto límite en banda magnética.</td>
</tr>
<tr>
<td>limiteNoPresencial</td>
<td>Double</td>
<td>Monto límite no presencial.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


