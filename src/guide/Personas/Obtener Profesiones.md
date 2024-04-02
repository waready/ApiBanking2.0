# Obtener Profesiones 

Método para obtener un listado de las profesiones registradas. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ObtenerProfesiones | RBTPG036 | Global 

> Ejemplo de invocación al método Obtener Profesiones: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerProfesiones> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
      </bts:BTPersonas.ObtenerProfesiones> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerProfesiones=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 39ee2528-85c0-7c31-3c46-0fac39e369a0' \ 
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
      <BTPersonas.ObtenerProfesionesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtProfesiones> 
            <sBTProfesion> 
               <identificador>1</identificador> 
               <descripcion>Abogado</descripcion> 
            </sBTProfesion> 
            <sBTProfesion> 
               <identificador>2</identificador> 
               <descripcion>Agrimensor</descripcion> 
            </sBTProfesion> 
            <sBTProfesion> 
               <identificador>3</identificador> 
               <descripcion>Analista Sistemas</descripcion> 
            </sBTProfesion> 
            <sBTProfesion> 
               <identificador>4</identificador> 
               <descripcion>Arquitecto</descripcion> 
            </sBTProfesion> 
            <sBTProfesion> 
               <identificador>5</identificador> 
               <descripcion>Asistente Social</descripcion> 
            </sBTProfesion> 
            <sBTProfesion> 
               <identificador>6</identificador> 
               <descripcion>Bachiller</descripcion> 
            </sBTProfesion> 
            <sBTProfesion> 
               <identificador>7</identificador> 
               <descripcion>Bioquímico</descripcion> 
            </sBTProfesion> 
            <sBTProfesion> 
               <identificador>50</identificador> 
               <descripcion>Tec.Laboratorio</descripcion> 
            </sBTProfesion> 
            <sBTProfesion> 
               <identificador>51</identificador> 
               <descripcion>Veterinario</descripcion> 
            </sBTProfesion> 
            <sBTProfesion> 
               <identificador>999</identificador> 
               <descripcion>No corresponde</descripcion> 
            </sBTProfesion> 
         </sdtProfesiones> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>823</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerProfesiones</Servicio> 
            <Fecha>2017-12-17</Fecha> 
            <Requerimiento/> 
            <Hora>18:43:03</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerProfesionesResponse> 
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
    "sdtProfesiones": { 
        "sBTProfesion": [ 
            { 
                "descripcion": "Abogado", 
                "identificador": "1" 
            }, 
            { 
                "descripcion": "Agrimensor", 
                "identificador": "2" 
            }, 
            { 
                "descripcion": "Analista Sistemas", 
                "identificador": "3" 
            }, 
            { 
                "descripcion": "Contador", 
                "identificador": "8" 
            }, 
            { 
                "descripcion": "Comerciante", 
                "identificador": "9" 
            }, 
            { 
                "descripcion": "Comunicador Social", 
                "identificador": "10" 
            }, 
            { 
                "descripcion": "Pediatra", 
                "identificador": "34" 
            }, 
            { 
                "descripcion": "Peluquero", 
                "identificador": "35" 
            }, 
            { 
                "descripcion": "Periodista", 
                "identificador": "36" 
            }, 
            { 
                "descripcion": "Piloto", 
                "identificador": "37" 
            }, 
            { 
                "descripcion": "Policía", 
                "identificador": "38" 
            }, 
            { 
                "descripcion": "Prof.Educación Física", 
                "identificador": "39" 
            }, 
            { 
                "descripcion": "Prof. en Letras", 
                "identificador": "40" 
            }, 
            { 
                "descripcion": "Radiologo", 
                "identificador": "47" 
            }, 
            { 
                "descripcion": "Tec.Mecánico", 
                "identificador": "48" 
            }, 
            { 
                "descripcion": "Tec.Químico", 
                "identificador": "49" 
            }, 
            { 
                "descripcion": "Tec.Laboratorio", 
                "identificador": "50" 
            }, 
            { 
                "descripcion": "Veterinario", 
                "identificador": "51" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "824", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerProfesiones", 
        "Fecha": "2017-12-17", 
        "Requerimiento": "", 
        "Hora": "18:43:38", 
        "Canal": "BTDIGITAL" 
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
sdtProfesiones | sBTProfesion | Listado de profesiones. 

Los campos del tipo de dato estructurado sBTProfesion son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
identificador | Short | Identificador de profesión. 
descripcion | String | Descripción de profesión. 

### Errores 

Código | Descripción 
--------- | ----------- 
40001 | No existen Profesiones ingresadas en el sistema 

 
