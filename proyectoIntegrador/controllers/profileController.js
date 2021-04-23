let  perfiles = require('../data/profileData')
let profileController = {

  index : (req, res) => { 
    res.render('profile', {perfiles: perfiles }); 
   },
  
  
   porId: (req,res) =>{

    res.render('profile',{
      perfiles : perfiles[req.params.id]
    })

   


  }

}
 
 module.exports = profileController;