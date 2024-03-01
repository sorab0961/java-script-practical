const path =requier("path")
const express = requier("express")

const app = express()
const port =8000

app.set("view engine","ejs")
app.set("view",path.resolve("./view"))

app.use(expess.json())
app.get("/",(req,res) =>{
    return res.render("homepage")
});
app.listen(PORT,()=>console.log(`server started at port 8000`))