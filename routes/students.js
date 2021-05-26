let express = require('express');
let router = express.Router();
let StudentSchema = require('../models/students');

function HandleError(response, reason, message, code){
    console.log('ERROR: ' + reason);
    response.status(code || 500).json({"error": message});
}

router.post('/', (request, response, next) =>{
   let studentJSON = request.body;
   if (!studentJSON.firstName || !studentJSON.lastName)
       HandleError(response, 'Missing Information', 'Form Data Missing', 500);
   else{
       let student = new StudentSchema({
           firstName: studentJSON.firstName,
           lastName: studentJSON.lastName,
           gpa: studentJSON.gpa || 0,
           credits : studentJSON.credits || 0,
           major: studentJSON.major || 'Undecided'
       });
       student.save( (error) => {
           if (error){
               response.send({"error": error});
           }else{
               response.send({"id": student.id});
           }
       })
   }
});
// Check Post with: db.students.find()

module.exports = router;