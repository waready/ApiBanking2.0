<template><div><h1 id="obtener-items-modelo" tabindex="-1"><a class="header-anchor" href="#obtener-items-modelo"><span>Obtener Items Modelo</span></a></h1>
<p>Método para obtener los items de un determinado modelo PAE.</p>
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
<td>BTPAE.ObtenerItemsModelo</td>
<td>RBTPGP52</td>
<td>Global</td>
</tr>
</tbody>
</table>
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
<td>modeloId</td>
<td>Short</td>
<td>Código de modelo.</td>
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
<td>sdtItems</td>
<td>sBTItemPAE</td>
<td>Listado de items de modelo PAE.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTItemPAE son los siguientes:</p>
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
<td>itemId</td>
<td>Short</td>
<td>Código de item.</td>
</tr>
<tr>
<td>tipoDato</td>
<td>String</td>
<td>Descripción de tipo de dato.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre de item.</td>
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
<td>1011050</td>
<td>No se recibio modelo de evaluacion PAE.</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Items Modelo:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPAE.ObtenerItemsModelo> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>86b12d9cbaCD285A89A23FBE</bts:Token> 
         </bts:Btinreq> 
         <bts:modeloId>2</bts:modeloId> 
      </bts:BTPAE.ObtenerItemsModelo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPAE?ObtenerItemsModelo' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "bc8b678bc44A8B5C60A82434" 
    }, 
    "modeloId": 1 
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
      <BTPAE.ObtenerItemsModeloResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>86b12d9cbaCD285A89A23FBE</Token> 
         </Btinreq> 
         <sdtItems> 
            <SdtsBTItemPAE> 
               <tipoDato>N-Numerico</tipoDato> 
               <itemId>105</itemId> 
               <nombre>ANTIG_LABORAL</nombre> 
            </SdtsBTItemPAE> 
            <SdtsBTItemPAE> 
               <tipoDato>N-Numerico</tipoDato> 
               <itemId>115</itemId> 
               <nombre>MONTO_CRED_MN</nombre> 
            </SdtsBTItemPAE> 
            <SdtsBTItemPAE> 
               <tipoDato>N-Numerico</tipoDato> 
               <itemId>116</itemId> 
               <nombre>CANT_AVALES</nombre> 
            </SdtsBTItemPAE> 
            <SdtsBTItemPAE> 
               <tipoDato>N-Numerico</tipoDato> 
               <itemId>117</itemId> 
               <nombre>PLAZO</nombre> 
            </SdtsBTItemPAE> 
            <SdtsBTItemPAE> 
               <tipoDato>N-Numerico</tipoDato> 
               <itemId>118</itemId> 
               <nombre>TASA</nombre> 
            </SdtsBTItemPAE> 
            <SdtsBTItemPAE> 
               <tipoDato>N-Numerico</tipoDato> 
               <itemId>130</itemId> 
               <nombre>MONTO_MIN</nombre> 
            </SdtsBTItemPAE> 
            <SdtsBTItemPAE> 
               <tipoDato>N-Numerico</tipoDato> 
               <itemId>131</itemId> 
               <nombre>MONTO_MAX</nombre> 
            </SdtsBTItemPAE> 
            <SdtsBTItemPAE> 
               <tipoDato>N-Numerico</tipoDato> 
               <itemId>132</itemId> 
               <nombre>PLAZO_MIN</nombre> 
            </SdtsBTItemPAE> 
            <SdtsBTItemPAE> 
               <tipoDato>N-Numerico</tipoDato> 
               <itemId>133</itemId> 
               <nombre>PLAZO_MAX</nombre> 
            </SdtsBTItemPAE> 
            <SdtsBTItemPAE> 
               <tipoDato>N-Numerico</tipoDato> 
               <itemId>134</itemId> 
               <nombre>TASA_PRESETEO</nombre> 
            </SdtsBTItemPAE> 
            <SdtsBTItemPAE> 
               <tipoDato>C-Caracter</tipoDato> 
               <itemId>138</itemId> 
               <nombre>DOC_NOREB</nombre> 
            </SdtsBTItemPAE> 
            <SdtsBTItemPAE> 
               <tipoDato>C-Caracter</tipoDato> 
               <itemId>139</itemId> 
               <nombre>DOC_NOING</nombre> 
            </SdtsBTItemPAE> 
            <SdtsBTItemPAE> 
               <tipoDato>N-Numerico</tipoDato> 
               <itemId>142</itemId> 
               <nombre>SNG001ORI</nombre> 
            </SdtsBTItemPAE> 
            <SdtsBTItemPAE> 
               <tipoDato>N-Numerico</tipoDato> 
               <itemId>145</itemId> 
               <nombre>CAP_PAGO</nombre> 
            </SdtsBTItemPAE> 
            <SdtsBTItemPAE> 
               <tipoDato>N-Numerico</tipoDato> 
               <itemId>161</itemId> 
               <nombre>CPTO_16</nombre> 
            </SdtsBTItemPAE> 
            <SdtsBTItemPAE> 
               <tipoDato>N-Numerico</tipoDato> 
               <itemId>162</itemId> 
               <nombre>VALOR_CUOTA</nombre> 
            </SdtsBTItemPAE> 
         </sdtItems> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>43265</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPAE.ObtenerItemsModelo</Servicio> 
            <Fecha>2022-06-02</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>07:11:36</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPAE.ObtenerItemsModeloResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "c2cfd09eff4A8B5C60A82434" 
    }, 
    "sdtItems": { 
         "SdtsBTItemPAE": [ 
         { 
            "tipoDato": "N-Numerico", 
            "itemId": "105", 
            "nombre": "ANTIG_LABORAL" 
         }, 
         { 
            "tipoDato": "N-Numerico", 
            "itemId": "115", 
            "nombre": "MONTO_CRED_MN" 
         }, 
         { 
            "tipoDato": "N-Numerico", 
            "itemId": "116", 
            "nombre": "CANT_AVALES" 
         }, 
         { 
            "tipoDato": "N-Numerico", 
            "itemId": "117", 
            "nombre": "PLAZO" 
         }, 
         { 
            "tipoDato": "N-Numerico", 
            "itemId": "118", 
            "nombre": "TASA" 
         }, 
         { 
            "tipoDato": "N-Numerico", 
            "itemId": "130", 
            "nombre": "MONTO_MIN" 
         }, 
         { 
            "tipoDato": "N-Numerico", 
            "itemId": "131", 
            "nombre": "MONTO_MAX" 
         }, 
         { 
            "tipoDato": "N-Numerico", 
            "itemId": "132", 
            "nombre": "PLAZO_MIN" 
         }, 
         { 
            "tipoDato": "N-Numerico", 
            "itemId": "133", 
            "nombre": "PLAZO_MAX" 
         }, 
         { 
            "tipoDato": "N-Numerico", 
            "itemId": "134", 
            "nombre": "TASA_PRESETEO" 
         }, 
         { 
            "tipoDato": "C-Caracter", 
            "itemId": "138", 
            "nombre": "DOC_NOREB" 
         }, 
         { 
            "tipoDato": "C-Caracter", 
            "itemId": "139", 
            "nombre": "DOC_NOING" 
         }, 
         { 
            "tipoDato": "N-Numerico", 
            "itemId": "142", 
            "nombre": "SNG001ORI" 
         }, 
         { 
            "tipoDato": "N-Numerico", 
            "itemId": "145", 
            "nombre": "CAP_PAGO" 
         }, 
         { 
            "tipoDato": "N-Numerico", 
            "itemId": "161", 
            "nombre": "CPTO_16" 
         }, 
         { 
            "tipoDato": "N-Numerico", 
            "itemId": "162", 
            "nombre": "VALOR_CUOTA" 
         } 
         ] 
      }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPAE.ObtenerItemsModelo", 
        "Fecha": "2022-06-01", 
        "Hora": "15:38:59", 
        "Requerimiento": "1", 
        "Numero": "8881", 
        "Estado": "OK" 
    } 
} 
``` 
</code-block> 
</code-group> 
</div></template>


