
const googleSS = require('./googleSheetService');

const mainFunc =async()=>{
  const {authorize,listResidents, listPackageInventory }=googleSS
  
try{
  const auth = await authorize();
  
  const data = await listResidents(auth);
  console.log(data)
}catch(error ){
  console.log(error)
}
}

mainFunc();