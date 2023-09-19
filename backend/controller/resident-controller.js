const googleSS  = require('../googleSheetService');

const {authorize,listResidents} = googleSS;
const getResidents = async(req,res,next)=>{

    let residents;

    try{
        const auth = await authorize();
        residents = await listResidents(auth);
        
    }catch(error){
        return next('Error occured')
    }
    res.json({residents})

}   

exports.getResidents = getResidents;