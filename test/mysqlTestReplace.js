var mysql  = require("mysql")
var connection = mysql.createConnection({
    host     : '106.15.226.6',
    user     : 'root',
    password : 'magpieBridge',
    database : 'estest'
});

connection.connect(function (err,result) {
    console.log("err: " + err);
    console.log("result: " + result);
});
var table = 't_zy_productid2'
//查询


var data = [{"productId":"a27fe387-67a9-49df-b7ea-50812cb32e72","productCode":"AD1806","orgId":"aaf16ec9-ea0f-493a-a36b-115aa8a3d596","orgCode":"1@-4@","productName":"澳币1806"},{"productId":"77f8aac0-eccd-44bc-b11c-d679efd1611d","productCode":"BP1806","orgId":"aaf16ec9-ea0f-493a-a36b-115aa8a3d596","orgCode":"1@-4@","productName":"英镑1806"},{"productId":"7266c1a0-b2c9-406d-a8f5-57d5619a345c","productCode":"CD1806","orgId":"aaf16ec9-ea0f-493a-a36b-115aa8a3d596","orgCode":"1@-4@","productName":"加币1806"},{"productId":"8f932868-6cbd-42b0-9d65-02afeead45e4","productCode":"EC1806","orgId":"aaf16ec9-ea0f-493a-a36b-115aa8a3d596","orgCode":"1@-4@","productName":"欧元1806"},{"productId":"433855e2-8fed-4fa6-b585-a1d6fcab55c5","productCode":"SF1806","orgId":"aaf16ec9-ea0f-493a-a36b-115aa8a3d596","orgCode":"1@-4@","productName":"瑞郎1806"},{"productId":"4c1cf956-3375-4bf7-ab1f-2d2f8cfa28a9","productCode":"ES1806","orgId":"aaf16ec9-ea0f-493a-a36b-115aa8a3d596","orgCode":"1@-4@","productName":"小SP1806"},{"productId":"da3a3cf3-5b89-44cb-baad-b979035b7e12","productCode":"HG1805","orgId":"aaf16ec9-ea0f-493a-a36b-115aa8a3d596","orgCode":"1@-4@","productName":"美铜1805"},{"productId":"3a61b036-3b60-4416-9088-6a178ee8e00b","productCode":"NQ1806","orgId":"aaf16ec9-ea0f-493a-a36b-115aa8a3d596","orgCode":"1@-4@","productName":"小纳指1806"},{"productId":"e5455583-c2e3-4a3e-8222-57a61a3ecdc2","productCode":"SL1805","orgId":"aaf16ec9-ea0f-493a-a36b-115aa8a3d596","orgCode":"1@-4@","productName":"美银1805"},{"productId":"3829be3f-897a-40ea-b235-0679234682ab","productCode":"DAX1806","orgId":"aaf16ec9-ea0f-493a-a36b-115aa8a3d596","orgCode":"1@-4@","productName":"德指1806"},{"productId":"1ad6afa5-759c-4a78-b045-a11c44b4eeeb","productCode":"C1805","orgId":"aaf16ec9-ea0f-493a-a36b-115aa8a3d596","orgCode":"1@-4@","productName":"玉米1805"},{"productId":"85692979-906f-4b2d-800f-a99ffaef75be","productCode":"NE1806","orgId":"aaf16ec9-ea0f-493a-a36b-115aa8a3d596","orgCode":"1@-4@","productName":"纽元1806"},{"productId":"eda47fb0-d7a5-400d-881a-99f97795c51e","productCode":"S1805","orgId":"aaf16ec9-ea0f-493a-a36b-115aa8a3d596","orgCode":"1@-4@","productName":"黄豆1805"},{"productId":"8e47a526-361b-4d6d-bd27-3ee90532f682","productCode":"ZL1805","orgId":"aaf16ec9-ea0f-493a-a36b-115aa8a3d596","orgCode":"1@-4@","productName":"豆油1805"},{"productId":"a4e01481-9258-4ded-85d2-a01f036eec65","productCode":"SIK8","orgId":"3831c6b5-0af0-43ec-b70a-db9d045d6615","orgCode":"1@-5@","productName":"美银1805"},{"productId":"285057f7-1d76-4115-89ca-8632e0f85e03","productCode":"SI05","orgId":"4e4be73d-2388-4ffc-87a3-5dbfb2ee4f3a","orgCode":"1@-7@","productName":"美白银1805"},{"productId":"c0b06c66-4170-4eb8-a971-7d6de21f1cb6","productCode":"HGK8","orgId":"3831c6b5-0af0-43ec-b70a-db9d045d6615","orgCode":"1@-5@","productName":"美铜1805"},{"productId":"e2a00bfc-437b-4a7a-acd3-a2b403af1ff2","productCode":"HG05","orgId":"4e4be73d-2388-4ffc-87a3-5dbfb2ee4f3a","orgCode":"1@-7@","productName":"CMX铜1805"},{"productId":"2fce13fb-a774-41d2-b6ad-49a5ad2cb197","productCode":"ESM8","orgId":"3831c6b5-0af0-43ec-b70a-db9d045d6615","orgCode":"1@-5@","productName":"小标普1806"},{"productId":"9754346d-67b2-4436-b8e6-03ee54499a49","productCode":"6AM8","orgId":"3831c6b5-0af0-43ec-b70a-db9d045d6615","orgCode":"1@-5@","productName":"澳元1806"},{"productId":"17037756-01af-4593-9958-ce202497cded","productCode":"NQM8","orgId":"3831c6b5-0af0-43ec-b70a-db9d045d6615","orgCode":"1@-5@","productName":"小纳指1806"},{"productId":"c1f0305c-b818-41ac-ad12-9323cc1e6917","productCode":"6BM8","orgId":"3831c6b5-0af0-43ec-b70a-db9d045d6615","orgCode":"1@-5@","productName":"英镑1806"},{"productId":"9750c936-ba3c-4616-a72a-132288d60d9b","productCode":"BP06","orgId":"4e4be73d-2388-4ffc-87a3-5dbfb2ee4f3a","orgCode":"1@-7@","productName":"英镑1806"},{"productId":"0e2be685-a12a-48bc-849b-28ce22ce6457","productCode":"6EM8","orgId":"3831c6b5-0af0-43ec-b70a-db9d045d6615","orgCode":"1@-5@","productName":"欧元1806"},{"productId":"864170bf-db8a-47ca-a88a-ea0de302865d","productCode":"EC06","orgId":"4e4be73d-2388-4ffc-87a3-5dbfb2ee4f3a","orgCode":"1@-7@","productName":"欧元1806"},{"productId":"ddec1e0f-99ea-475c-97d6-a2606580d9cf","productCode":"6NM8","orgId":"3831c6b5-0af0-43ec-b70a-db9d045d6615","orgCode":"1@-5@","productName":"纽元1806"},{"productId":"ccfbfb27-9ac5-43ed-a0c5-3d2740be7f59","productCode":"NE06","orgId":"4e4be73d-2388-4ffc-87a3-5dbfb2ee4f3a","orgCode":"1@-7@","productName":"纽元1806"},{"productId":"d3a4dbca-0e0f-40d2-b321-1c7921802dda","productCode":"6SM8","orgId":"3831c6b5-0af0-43ec-b70a-db9d045d6615","orgCode":"1@-5@","productName":"瑞郎1806"},{"productId":"8cc182e3-be9f-4d6d-9a40-eac1ea67d234","productCode":"SF06","orgId":"4e4be73d-2388-4ffc-87a3-5dbfb2ee4f3a","orgCode":"1@-7@","productName":"瑞郎1806"},{"productId":"2a04cb38-c36a-4dc7-9099-6a396f55d45c","productCode":"FDAXM8","orgId":"3831c6b5-0af0-43ec-b70a-db9d045d6615","orgCode":"1@-5@","productName":"德指1806"},{"productId":"1843c1f7-94c8-45e5-bcf1-f0c2c9db9d7b","productCode":"DAX06","orgId":"4e4be73d-2388-4ffc-87a3-5dbfb2ee4f3a","orgCode":"1@-7@","productName":"德指1806"},{"productId":"c13fc98a-a025-4ac4-87d3-1f5e73cf7613","productCode":"CL1805","orgId":"ORG_ADMIN","orgCode":"1@","productName":"美原油1805"},{"productId":"c7126af4-13af-48f3-9bc1-ba4b8b18cda8","productCode":"6CM8","orgId":"3831c6b5-0af0-43ec-b70a-db9d045d6615","orgCode":"1@-5@","productName":"加元1806"},{"productId":"fd5729c8-d510-42ca-be02-b1b325f58dca","productCode":"NG1805","orgId":"ORG_ADMIN","orgCode":"1@","productName":"天然气1805"},{"productId":"b87a6d3f-adfd-4b06-8da9-3ced44ee5d42","productCode":"GC1806","orgId":"ORG_ADMIN","orgCode":"1@","productName":"纽期金1806"},{"productId":"efa9c3ca-41b3-4842-b884-da95a40e6d83","productCode":"CN1804","orgId":"ORG_ADMIN","orgCode":"1@","productName":"新富时1804"},{"productId":"56b4019b-8996-4181-a6ef-621f91d7042f","productCode":"HSI1804","orgId":"ORG_ADMIN","orgCode":"1@","productName":"恒指1804"},{"productId":"584f9e42-038c-4f7b-9f16-abe687924646","productCode":"MHI1804","orgId":"ORG_ADMIN","orgCode":"1@","productName":"小恒指1804"}]
data.forEach(function (t) {
    var qs = 'replace into ' + table + ' ' +
        '( productId,productCode,productName) values ' +
        '('+ "'" + t["productId"] + "','" + t["productCode"] + "','" + t["productName"] + "'" + ')'
    console.log("qs: " + qs);
    connection.query(qs, function(err, result) {
        if (err) {
            console.log(err)
        }
        console.log(result);
    })
})



//connection.query('delete from '+ table +  ' where uuid =' + '"01234567890123456781512893724170"' , function(err, result) {
//    if (err) throw err;
//    console.log(result);
//})