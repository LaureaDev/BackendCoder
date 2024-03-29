const mongoose = require('mongoose');
const { getFormatedDate } = require('../helpers/index.js');

module.exports = class ContenedorMongoDB {
  constructor(collection, schema, config = {}) {
    this.collection = collection;
    this.model = mongoose.model(collection, schema);
    this.config = config;
    this.connect();
  }

  async save(item) {
    const allItems = await this.getAll();
    if (!allItems.length) item.id = 1;
    else {
      const lastItemId = allItems[allItems.length - 1].id;
      item.id = lastItemId + 1;
    }
    item.timestamp = getFormatedDate();
    try {
      const itemSaveModel = new this.model(item);
      const savedItem = await itemSaveModel.save();
      return savedItem;
    } catch (error) {
      throw error;
    }
  }

  async dropCollection() {
    try {
      this.connection?.db?.dropCollection(this.collection, (err, result) => console.log(err || result));
    } catch (error) {
      console.log(error);
    }
  }

  async connect() {
    if (this.config?.mongodb) {
      try {
        this.connection = await mongoose.connect(this.config.mongodb.cnxStr, this.config.mongodb.options);
      } catch (error) {
        throw error;
      }
    }
  }

  async updateById(newItem, id) {
    try {
      newItem.timestamp = Date.now();
      await this.model.updateOne({ id: id }, { $set: { ...newItem } });
      return await this.getById(id);
    } catch (error) {
      return error;
    }
  }

  async getById(id) {
    try {
      const item = await this.model.find({ id: id });
      return item[0];
    } catch (error) {
      return error;
    }
  }

  async getAll() {
    try {
      const items = await this.model.find({});
      return items;
    } catch (error) {
      return error;
    }
  }

  async deleteById(id) {
    try {
      await this.model.deleteOne({ id: id });
      return await this.getAll();
    } catch (error) {}
  }
};