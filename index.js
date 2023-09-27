const express= require('express');
const app= express();
const cors=require('cors');
const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users=[
    {id:1, name:'sunny', email:'sunny1232@gmail.com'},
    {id:2, name:'Khalek', email:'Khalek1232@gmail.com'},
    {id:3, name:'Malek', email:'Malek1232@gmail.com'},
]

app.get('/',(req, res)=>{
    res.send('user management system')
})

app.get('/users', (req, res)=>{
    res.send(users)
})
app.post('/users',(req,res)=>{
    console.log('post hitting')
    console.log(req.body);
    const newUser=req.body;
    newUser.id=users.length+1;
    users.push(newUser);
    res.send(newUser);  
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})