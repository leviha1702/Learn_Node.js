
const getHomepage = (req,res)=>{
    res.send("Hello World");
}
const getLevietha = (req,res)=>{
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,getLevietha
}