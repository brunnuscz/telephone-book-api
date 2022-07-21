const Telephone = require('../models/telephone');

module.exports = {
    async add_telephone(request, response) {
        const { name, last_name, telephone, email } = request.body;
        const phone = await Telephone.create({ name, last_name, telephone, email });
        return response.json(phone);
    },
    async all_telephone(request, response) {
        const phones = await Telephone.findAll();
        return response.json(phones);
    },
    async update_telephone(request, response) {
        const { id, name, last_name, telephone, email } = request.body;
        const phone = await Telephone.update({ id, name, last_name, telephone, email }, { where: { id: id } });
        return response.json(phone);
    },
    async delete_telephone(request, response) {
        const { id } = request.params;
        const phone = await Telephone.destroy({ where: { id: id } });
        return response.json(phone);
    },
    async search_telephone(request, response) {
        const { id } = request.params;
        const telephone = await Telephone.findOne({ where: { id: id } });
        return response.json(telephone);
    }
}