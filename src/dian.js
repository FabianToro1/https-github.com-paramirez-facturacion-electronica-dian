const SendBillSync = `
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:wcf="http://wcf.dian.colombia">
   <soap:Header xmlns:wsa="http://www.w3.org/2005/08/addressing">
      <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
        xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
         <wsu:Timestamp wsu:Id="TS-__Id">
            <wsu:Created>__Created</wsu:Created>
            <wsu:Expires>__Expires</wsu:Expires>
         </wsu:Timestamp>
         <wsse:BinarySecurityToken
            EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary"
            ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3"
            wsu:Id="X509-__Id">__BinarySecurityToken</wsse:BinarySecurityToken>
      </wsse:Security>
      <wsa:Action>http://wcf.dian.colombia/IWcfDianCustomerServices/SendBillSync</wsa:Action>
      <wsa:To xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"
        wsu:Id="id-__Id">__To</wsa:To>
   </soap:Header>
   <soap:Body>
      <wcf:SendBillSync>
         <wcf:fileName>__fileName</wcf:fileName>
         <wcf:contentFile>__contentFile</wcf:contentFile>
      </wcf:SendBillSync>
   </soap:Body>
</soap:Envelope>
`;

const templates = {
    SendBillSync
}

const globalFuntions = {
    /**
     * @param {Object} values 
     * @param {string} templateName 
     */
    getTemplateXML(values, templateName) {
        /** @type {string} */
        const template = templates[templateName]
        const xml = ""
        for (let key in values)
            xml = template.replace(`__${key}`, values[key])
        return xml
    },
    getXMLSOAPWithSignature(
        xmlString,
        id,
        certificateFile,
        certificatePassword) {
        const wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
        const wsu = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"
        const X509v3 = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3"
    }
}
class DIAN {

}