<template><div><h1 id="obtener-niveles-educativos" tabindex="-1"><a class="header-anchor" href="#obtener-niveles-educativos"><span>Obtener Niveles Educativos</span></a></h1>
<p>Método para obtener los niveles educativos.</p>
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
<td>BTPersonas.ObtenerNivelesEducativos</td>
<td>RBTPG382</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Niveles Educativos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerNivelesEducativos> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>c2cfd09eff4A8B5C60A82434</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTPersonas.ObtenerNivelesEducativos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerNivelesEducativos' \ 
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
      <BTPersonas.ObtenerNivelesEducativosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>c2cfd09eff4A8B5C60A82434</Token> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
         </Btinreq> 
         <sdtNivelesEducativos> 
            <SdtsBTNivelEducativo> 
               <descripcion>Primario</descripcion> 
               <codigo>1</codigo> 
            </SdtsBTNivelEducativo> 
            <SdtsBTNivelEducativo> 
               <descripcion>Secundario</descripcion> 
               <codigo>2</codigo> 
            </SdtsBTNivelEducativo> 
            <SdtsBTNivelEducativo> 
               <descripcion>Terciario</descripcion> 
               <codigo>3</codigo> 
            </SdtsBTNivelEducativo> 
            <SdtsBTNivelEducativo> 
               <descripcion>Universitario</descripcion> 
               <codigo>4</codigo> 
            </SdtsBTNivelEducativo> 
            <SdtsBTNivelEducativo> 
               <descripcion>Post Grado</descripcion> 
               <codigo>5</codigo> 
            </SdtsBTNivelEducativo> 
            <SdtsBTNivelEducativo> 
               <descripcion>Analfabeto</descripcion> 
               <codigo>6</codigo> 
            </SdtsBTNivelEducativo> 
            <SdtsBTNivelEducativo> 
               <descripcion>No corresponde</descripcion> 
               <codigo>999</codigo> 
            </SdtsBTNivelEducativo> 
         </sdtNivelesEducativos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>16576</Numero> 
            <Hora>12:36:58</Hora> 
            <Fecha>2022-05-26</Fecha> 
            <Servicio>BTPersonas.ObtenerNivelesEducativos</Servicio> 
            <Estado>OK</Estado> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
         </Btoutreq> 
      </BTPersonas.ObtenerNivelesEducativosResponse> 
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
    "sdtNivelesEducativos": { 
        "SdtsBTNivelEducativo": [ 
        { 
            "descripcion": "Primario", 
            "codigo": "1" 
        }, 
        { 
            "descripcion": "Secundario", 
            "codigo": "2" 
        }, 
        { 
            "descripcion": "Terciario", 
            "codigo": "3" 
        }, 
        { 
            "descripcion": "Universitario", 
            "codigo": "4" 
        }, 
        { 
            "descripcion": "Post Grado", 
            "codigo": "5" 
        }, 
        { 
            "descripcion": "Analfabeto", 
            "codigo": "6" 
        }, 
        { 
            "descripcion": "No corresponde", 
            "codigo": "999" 
        } 
        ] 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "839", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerNivelesEducativos", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
        "Canal": "BTDIGITAL" 
    } 
} 
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
<td>sdtNivelesEducativos</td>
<td>sBTNivelEducativo</td>
<td>Listado de niveles educativos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTNivelEducativo son los siguientes:</p>
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
<td>codigo</td>
<td>Short</td>
<td>Código de nivel educativo.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de nivel educativo.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


