# Obtener Comisiones por Cuota 

Método para obtener las comisiones parametrizadas por cuota para un producto de préstamos. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTModeladorPrestamos.ObtenerComisionesCuota | RBTPG522 | Global 

> Ejemplo de invocación al servicio de Obtener Comisiones Cuota: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTModeladorPrestamos.ObtenerComisionesCuota> 
         <bts:Btinreq> 
            <bts:Token>e85b0edaecCD285A89A23FBE</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Device>GP</bts:Device> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:productoUId>51</bts:productoUId> 
      </bts:BTModeladorPrestamos.ObtenerComisionesCuota> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTModeladorPrestamos?ObtenerComisionesCuota' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "1", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "16c1cFC33CD93505A5382434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"productoUId": "51" 
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
      <BTModeladorPrestamos.ObtenerComisionesCuotaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>e85b0edaecCD285A89A23FBE</Token> 
         </Btinreq> 
         <sdtComisionesCuota> 
            <sBTComisionPrestamo> 
               <porcentaje>0.0000</porcentaje> 
               <descripcion>Portes</descripcion> 
               <importe>0.00</importe> 
               <codigo>251</codigo> 
            </sBTComisionPrestamo> 
         </sdtComisionesCuota> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>13117</Numero> 
            <Servicio>BTModeladorPrestamos.ObtenerComisionesCuota</Servicio> 
            <Estado>OK</Estado> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2023-05-23</Fecha> 
            <Hora>10:15:42</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTModeladorPrestamos.ObtenerComisionesCuotaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "1", 
        "Usuario": "MINSTALADOR", 
        "Token": "16c1cFC33CD93505A5382434", 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "1" 
    }, 
    "sdtComisionesCuota": { 
        "sBTComisionPrestamo": { 
        "porcentaje": "0.0000", 
        "descripcion": "Portes", 
        "importe": "0.00", 
        "codigo": "251" 
        } 
    }, 
    "Btoutreq": { 
        "Numero": "111399", 
        "Estado": "OK", 
        "Servicio": "BTModeladorPrestamos.ObtenerComisionesCuota", 
        "Requerimiento": "1", 
        "Fecha": "2023-05-10", 
        "Canal": "BTDIGITAL", 
        "Hora": "15:10:52" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtComisionesCuota | sBTComisionPrestamo | Listado de comisiones. 

Los campos del tipo de dato estructurado sBTComisionPrestamo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
porcentaje | Double | Porcentaje de comisión. 
descripcion | String | Descripción de la comisión. 
importe | Double | Importe de la comisión. 
codigo | Int | Código de comisión. 

### Errores 

No aplica. 


 
