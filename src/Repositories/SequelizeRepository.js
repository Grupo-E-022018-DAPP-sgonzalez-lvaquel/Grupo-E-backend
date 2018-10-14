export class SequelizeRepository {

    constructor({
        Sequelize,
        schema
    }) {
        this.op = Sequelize.Op;
        this.schema = schema;
    }

    toModel() {
        throw 'Not Implemented';
    }

    save() {
        throw 'Not Implemented';
    }

    saveAll(models) {
        return Promise.all(models.map(model => this.save(model)));
    }


    getAll() {
        return this.schema.findAll().then(savedModels => savedModels.map(savedModel => this.toModel(savedModel)));
    }

    get(id) {
        return this.schema.findById(id).then(savedModel => this.toModel(savedModel));
    }

    delete(id) {
        return this.schema.destroy({
            where: {
                id: {
                    [this.op.eq]: id
                }
            }
        });
    }
}
