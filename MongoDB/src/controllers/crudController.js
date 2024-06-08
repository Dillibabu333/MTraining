const post = (model) => async (req, res) => {
  try {
    const item = await model.create(req.body);
    return res.status(201).send(item);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const get = (model) => async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 15;

    // const q= {"age":2}
    const item = await model
      .find()
      .skip((page - 1) * size)
      .limit(size)
      .lean()
      .exec();

    const totaldocs = Math.ceil((await model.find(  ).countDocuments()) / size);
    return res.status(200).send({ item, totaldocs });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getOne = (model) => async (req, res) => {
  try {
    const item = await model.findById(req.params.id);
    return res.status(200).send(item);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const updateOne = (model) => async (req, res) => {
  try {
    const item = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(item);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const deleteOne = (model) => async (req, res) => {
  try {
    const item = await model.findByIdAndDelete(req.params.id, { new: true });
    return res.status(200).send(item);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = (model) => {
  return {
    post: post(model),
    get: get(model),
    getOne: getOne(model),
    updateOne: updateOne(model),
    deleteOne: deleteOne(model),
  };
};
