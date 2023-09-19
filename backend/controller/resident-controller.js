const googleSS  = require('../googleSheetService');

const {authorize,listResidents} = googleSS;
const getResidents = async(req,res,next)=>{

    let residents = [];

    try{
        const auth = await authorize();
        response = await listResidents(auth);
        
    }catch(error){
        return next('Error occured')
    }
    if (response.length ===1 ){
        return []        
    }

    headers = response[0]
    response = response.slice(1)
    response.map(row => {
        row =row.map(col => col.replace(/[\n/]/g,"") )
        
        
        const data = `{
            "${headers[0]}": "${row[0] === null? null: row[0]}",
            "${headers[1]}": "${row[0] === null? null: row[1]}",
            "${headers[2]}": "${row[0] === null? null: row[2]}",
            "${headers[3]}": "${row[0] === null? null: row[3]}",
            "${headers[4]}": "${row[0] === null? null: row[4]}",
            "${headers[5]}":" ${row[0] === null? null: row[5]}"
        }`
        residents.push(JSON.parse(data))
    })
    res.json({residents})

}   

exports.getResidents = getResidents;