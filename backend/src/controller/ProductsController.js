import User from "../models/User";
import Repository from "../models/Repository";

class RepositoriesController {
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
      const repositories = await Repository.find({
        userId: user_id,
        ...query
      });


      return res.json(repositories);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "interval server error" });
    }
  }

  async create(req, res) {
    try {
      const { user_id } = req.params;
      const user = await User.findById(user_id);
      const { name, url } = req.body;
      if (!user) {
        return res.status(404).json();
      }

      const repository = await Repository.findOne({
        userId: user_id,
        url,
      });
      if (repository) {
        return res
          .status(202)
          .json({ message: `Repository ${name} already exists.` });
      }

      const newRepository = await Repository.create({
        name,
        url,
        userId: user_id,
      });
      return res.status(201).json(newRepository);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "interval server error" });
    }
  }

  async destroy(req, res) {
    try {
      const { user_id, _id } = req.params;
      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json();
      }

      const repository = await Repository.findOne({
        userId: user_id,
        id: _id
      })

      if (!repository) {
        return res.status(404).json();
      }
      await Repository.findByIdAndDelete({_id: _id})
      return res.status(200).json()


    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "interval server error" });
    }
  }
}

export default new RepositoriesController();
