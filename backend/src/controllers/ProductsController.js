import User from "../models/User";
import Product from "../models/Products.js";

class ProductController {
  async index(req, res) {
    try {
      const { user_id } = req.params;
      const {q} = req.query
      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json();
      }

      let query = {}
      
      if(q) {
        query = { url: {$regex: q}}
      }
      const products = await Product.find({
        userId: user_id,
        ...query
      });


      return res.json(products);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "interval server error" });
    }
  }

  async create(req, res) {
    try {
      const { user_id } = req.params;
      const user = await User.findById(user_id);
      const { name, amount, quantity, description } = req.body;
      if (!user) {
        return res.status(404).json();
      }

      const product = await Product.findOne({
        userId: user_id,
        name,
      });
      if (product) {
        return res
          .status(202)
          .json({ message: `${name} already exists.` });
      }

      const newProduct = await Product.create({
        name,
        amount,
        quantity,
        description,
        userId: user_id,
      });
      return res.status(201).json(newProduct);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "interval server error" });
    }
  }

  
  async update(req, res) {
    try{
        const {_id} = req.params;

        const product = await Product.findById(_id) 

        if(!product){
            return res.status(404).json()
        }

      

      const { name, amount, quantity, description } = req.body;
      await product.updateOne({ name, amount, quantity, description })
       res.status(200).json()


    }catch(error){
        console.error(error)
        return res.status(500).json({error: "interval server error"})
    }
  }

  async destroy(req, res) {
    try {
      const { user_id, _id } = req.params;
      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json({message: "sem usuario"});
      }

      const product = await Product.findOne({
        userId: user_id,
        id: _id
      })

      if (!product) {
        return res.status(404).json({message: "sem produto"});
      }
      await product.delete({_id: _id})
      return res.status(200).json({message: "deletado"})


    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "interval server error" });
    }
  }
}

export default new ProductController();
