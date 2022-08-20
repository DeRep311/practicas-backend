const router=require('express').Router();

let productos=[
    {
        "title": "(nombre del producto)",
        "price": "(precio)aaa",
        "thumbnail": "(url al logo o foto del producto)",
        "id":1
    },
    {
        "title": "(nombre del producto)",
        "price": "(precioeee)",
        "thumbnail": "(url al logo o foto del producto)",
        "id":2
    },
    {
        "title": "(nombre del producto)",
        "price": "(precio000)",
        "thumbnail": "(url al logo o foto del producto)",
        "id":3
    }
    
]





router.get('/',(req,res)=>{
    res.json(productos)
    
    
    
    
    
})
router.get('/:id',(req,res)=>{
    const { id }=req.params;
    const ProduID=productos.filter(productos=>productos.id==id);
    if (ProduID.length===0) {
        res.send("Error Producto no existe").status(400)
    }else{
        res.send(ProduID)
    }
    

})
router.post('/',(req,res)=>{
    let nombre=req.body.title;
    let price=req.body.price;
    let thumbnail=req.body.thumbnail;
    let idnew=(productos.length)+1;

    const ingreso= {
        "title": nombre,
        "price": price,
        "thumbnail": thumbnail,
        "id":idnew
    }
    productos.push(ingreso);
    console.log("ingresado");
    res.json(productos)
    
})
router.put('/:id',(req,res)=>{
    
    const {id}=req.params;
    const ProduID=productos.findIndex(productos=>{
        return productos.id==id;
    });

    
    if (ProduID==-1) {
        res.send("Error Producto no existe").status(400)
    }else{
        productos[ProduID]=req.body;
    
    
        
    

    const ingreso= {
        "title": req.body.nombre,
        "price": req.body.price,
        "thumbnail": req.body.thumbnail,
     }
    productos[ProduID]= ingreso;
    
}
    
   
    
    
})
router.delete('/:id',(req,res)=>{
    const { id }=req.params;
    const ProduID=productos.filter(productos=>productos.id!=id);
    if (ProduID.length===0) {
        res.send("no existe").status(400)
    }else{
        productos=ProduID;
        
        console.log("eliminado");
        
      res.json(productos);
        
    }
})
module.exports=router
