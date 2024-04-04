<template><div><div class="hint-container note">
<p class="hint-container-title">Método para obtener los modelos PAE.</p>
<p><strong>Nombre publicación:</strong> BTPAE.ObtenerModelosPAE</p>
<p><strong>Programa:</strong> RBTPGP51</p>
<p><strong>Global/País:</strong> Global</p>
<Tabs id="10" :data='[{"id":"Datos de Entrada"},{"id":"Datos de Salida"},{"id":"Errores"}]' tab-id="Datos <!--ABRE LA TABLA DE DATOS -->">
<template #title0="{ value, isActive }">Datos de Entrada</template>
<template #title1="{ value, isActive }">Datos de Salida</template>
<template #title2="{ value, isActive }">Errores</template>
<template #tab0="{ value, isActive }">
<p>No aplica.</p>
</template>
<template #tab1="{ value, isActive }">
<table>
<thead>
<tr>
<th style="text-align:center">Nombre</th>
<th style="text-align:center">Tipo</th>
<th style="text-align:center">Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">sdtModelosPAE</td>
<td style="text-align:center">sBTModeloPAE</td>
<td style="text-align:center">Listado de modelos PAE.</td>
</tr>
</tbody>
</table>
<details class="hint-container details"><summary>Los campos del tipo de dato estructurado sBTModeloPAE son los siguientes:</summary>
<table>
<thead>
<tr>
<th style="text-align:center">Nombre</th>
<th style="text-align:center">Tipo</th>
<th style="text-align:center">Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">modeloID</td>
<td style="text-align:center">Short</td>
<td style="text-align:center">Código de modelo.</td>
</tr>
<tr>
<td style="text-align:center">descripcion</td>
<td style="text-align:center">String</td>
<td style="text-align:center">Descripción de modelo.</td>
</tr>
<tr>
<td style="text-align:center">tipoModelo</td>
<td style="text-align:center">String</td>
<td style="text-align:center">Tipo de modelo.</td>
</tr>
</tbody>
</table>
</details>
</template>
<template #tab2="{ value, isActive }">
<p>No aplica.</p>
<Tabs id="102" :data='[]' tab-id="Datos">
</Tabs>
</template>
</Tabs>
</div>
<details class="hint-container details"><summary>Ejemplo de invocación al servicio de Obtener Modelos PAE:</summary>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPAE.ObtenerModelosPAE> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>12106639094A8B5C60A82434</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
      </bts:BTPAE.ObtenerModelosPAE> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPAE?ObtenerModelosPAE' \ 
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
}' 
``` 
</code-block> 
</code-group> 
</details>
<blockquote>
<p>El POST retornará la siguiente estructura:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTPAE.ObtenerModelosPAEResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>12106639094A8B5C60A82434</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtModelosPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>1</modeloID> 
               <descripcion>Politicas - Solicitud</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>2</modeloID> 
               <descripcion>Politicas - Evaluacion/Propuesta</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>3</modeloID> 
               <descripcion>Politicas - Aprobacion</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>4</modeloID> 
               <descripcion>Politicas - Desembolso</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>6</modeloID> 
               <descripcion>Politicas - Evaluacion/Propuesta Grupal</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>7</modeloID> 
               <descripcion>Politicas - Evaluacion/Propuesta Grp Ind</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>10</modeloID> 
               <descripcion>FPC - Evaluación Normativa</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>11</modeloID> 
               <descripcion>Politicas - Solicitud Campaña XX</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>20</modeloID> 
               <descripcion>FPC - Evaluación Normativa Codeudor 1</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>22</modeloID> 
               <descripcion>prueba 2</descripcion> 
               <tipoModelo>S-Scoring</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>23</modeloID> 
               <descripcion>score de seleccion</descripcion> 
               <tipoModelo>S-Scoring</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>30</modeloID> 
               <descripcion>FPC - Evaluación Normativa Codeudor 2</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>33</modeloID> 
               <descripcion>prueba 2</descripcion> 
               <tipoModelo>S-Scoring</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>50</modeloID> 
               <descripcion>FPC - PAE Persona Jurídica</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>80</modeloID> 
               <descripcion>FV -Evaluación Préstamo Vehicular</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>82</modeloID> 
               <descripcion>FV - Evaluación Normativa Codeudor 1</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>84</modeloID> 
               <descripcion>FV - Evaluación Normativa Codeudor 2</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>85</modeloID> 
               <descripcion>FV - PAE Persona Jurídica</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>100</modeloID> 
               <descripcion>FH - Evaluación Normativa</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>110</modeloID> 
               <descripcion>FH - Codeudor 1</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>120</modeloID> 
               <descripcion>FH - Codeudor 2</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>130</modeloID> 
               <descripcion>FH - PAE Persona Jurídica</descripcion> 
               <tipoModelo>P-Politicas</tipoModelo> 
            </SdtsBTModeloPAE> 
            <SdtsBTModeloPAE> 
               <modeloID>900</modeloID> 
               <descripcion>Prueba (scoring)</descripcion> 
               <tipoModelo>S-Scoring</tipoModelo> 
            </SdtsBTModeloPAE> 
         </sdtModelosPAE> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPAE.ObtenerModelosPAE</Servicio> 
            <Fecha>2022-06-01</Fecha> 
            <Hora>15:38:59</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8881</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPAE.ObtenerModelosPAEResponse> 
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
    "sdtModelosPAE": { 
        "SdtsBTModeloPAE": [ 
        { 
            "modeloID": "1", 
            "descripcion": "Politicas - Solicitud", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "2", 
            "descripcion": "Politicas - Evaluacion/Propuesta", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "3", 
            "descripcion": "Politicas - Aprobacion", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "4", 
            "descripcion": "Politicas - Desembolso", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "6", 
            "descripcion": "Politicas - Evaluacion/Propuesta Grupal", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "7", 
            "descripcion": "Politicas - Evaluacion/Propuesta Grp Ind", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "10", 
            "descripcion": "FPC - Evaluación Normativa", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "11", 
            "descripcion": "Politicas - Solicitud Campaña XX", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "20", 
            "descripcion": "FPC - Evaluación Normativa Codeudor 1", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "22", 
            "descripcion": "prueba 2", 
            "tipoModelo": "S-Scoring" 
        }, 
        { 
            "modeloID": "23", 
            "descripcion": "score de seleccion", 
            "tipoModelo": "S-Scoring" 
        }, 
        { 
            "modeloID": "30", 
            "descripcion": "FPC - Evaluación Normativa Codeudor 2", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "33", 
            "descripcion": "prueba 2", 
            "tipoModelo": "S-Scoring" 
        }, 
        { 
            "modeloID": "50", 
            "descripcion": "FPC - PAE Persona Jurídica", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "80", 
            "descripcion": "FV -Evaluación Préstamo Vehicular", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "82", 
            "descripcion": "FV - Evaluación Normativa Codeudor 1", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "84", 
            "descripcion": "FV - Evaluación Normativa Codeudor 2", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "85", 
            "descripcion": "FV - PAE Persona Jurídica", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "100", 
            "descripcion": "FH - Evaluación Normativa", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "110", 
            "descripcion": "FH - Codeudor 1", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "120", 
            "descripcion": "FH - Codeudor 2", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "130", 
            "descripcion": "FH - PAE Persona Jurídica", 
            "tipoModelo": "P-Politicas" 
        }, 
        { 
            "modeloID": "900", 
            "descripcion": "Prueba (scoring)", 
            "tipoModelo": "S-Scoring" 
        } 
        ] 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPAE.ObtenerModelosPAE", 
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
:::
</div></template>


