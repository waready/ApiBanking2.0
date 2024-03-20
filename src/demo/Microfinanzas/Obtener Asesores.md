# Obtener Asesores 

Método para obtener los usuarios asesores. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTMicrofinanzas.ObtenerAsesores |  RBTPG420  | Global 

> Ejemplo de invocación al método Obtener Asesores: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.ObtenerAsesores> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>95</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>419385365CD285A89A23FBEE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
      </bts:BTMicrofinanzas.ObtenerAsesores> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerAsesores \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	} 
}' 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTMicrofinanzas.ObtenerAsesoresResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>95</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>419385365CD285A89A23FBEE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtAsesores> 
            <Asesor> 
               <identificador>1</identificador> 
               <usuario>INSTALADOR</usuario> 
            </Asesor> 
            <Asesor> 
               <identificador>2</identificador> 
               <usuario>COLOCACION</usuario> 
            </Asesor> 
            <Asesor> 
               <identificador>3</identificador> 
               <usuario>COLOCACION</usuario> 
            </Asesor> 
            <Asesor> 
               <identificador>15</identificador> 
               <usuario>CONSULTAS</usuario> 
            </Asesor> 
            <Asesor> 
               <identificador>16</identificador> 
               <usuario>EJECCUENTA</usuario> 
            </Asesor> 
            <Asesor> 
               <identificador>17</identificador> 
               <usuario>CAJERO</usuario> 
            </Asesor> 
            <Asesor> 
               <identificador>18</identificador> 
               <usuario>CAPTACCONF</usuario> 
            </Asesor> 
            <Asesor> 
               <identificador>90</identificador> 
               <usuario>CONTADOR</usuario> 
            </Asesor> 
            <Asesor> 
               <identificador>91</identificador> 
               <usuario>CONSEJOD</usuario> 
            </Asesor> 
            <Asesor> 
               <identificador>92</identificador> 
               <usuario>ETRIESGO</usuario> 
            </Asesor> 
            <Asesor> 
               <identificador>93</identificador> 
               <usuario>TESORSUC</usuario> 
            </Asesor> 
         </sdtAsesores> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.ObtenerAsesores</Servicio> 
            <Fecha>2019-09-10</Fecha> 
            <Hora>14:45:13</Hora> 
            <Requerimiento>95</Requerimiento> 
            <Numero>122</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.ObtenerAsesoresResponse> 
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
      "sdtAsesores": { 
        "Asesor": [ 
          { 
            "identificador": "1", 
            "usuario": "INSTALADOR" 
          }, 
          { 
            "identificador": "2", 
            "usuario": "COLOCACION" 
          }, 
          { 
            "identificador": "3", 
            "usuario": "COLOCACION" 
          }, 
          { 
            "identificador": "15", 
            "usuario": "CONSULTAS" 
          }, 
          { 
            "identificador": "16", 
            "usuario": "EJECCUENTA" 
          }, 
          { 
            "identificador": "17", 
            "usuario": "CAJERO" 
          }, 
          { 
            "identificador": "18", 
            "usuario": "CAPTACCONF" 
          }, 
          { 
            "identificador": "90", 
            "usuario": "CONTADOR" 
          }, 
          { 
            "identificador": "91", 
            "usuario": "CONSEJOD" 
          }, 
          { 
            "identificador": "92", 
            "usuario": "ETRIESGO" 
          }, 
          { 
            "identificador": "93", 
            "usuario": "TESORSUC" 
          } 
        ] 
      }, 
      "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTMicrofinanzas.ObtenerAsesores", 
        "Fecha": "2019-09-10", 
        "Hora": "14:45:13", 
        "Requerimiento": "95", 
        "Numero": "122", 
        "Estado": "OK" 
      } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

No aplica. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtAsesores | sBTAsesor | Listado de asesores. 

Los campos del tipo de dato estructurado sBTAsesor son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
identificador | Short | Identificador del asesor. 
usuario | String | Nombre de usuario asesor. 

### Errores 

No aplica. 

 
