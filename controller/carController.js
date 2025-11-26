// criar um carro POST 

const Carro = require("../models/carModel");

const carController = {
    create: async (req,res) => {
        try {

            const {brand, model, year, horsepower, topSpeed, price, isAvailable} = req.body;

            const novoCarro = await Carro.create({
                brand: brand,
                model: model,
                year: year, 
                horsepower: horsepower,
                topSpeed: topSpeed,
                price: price,
                isAvailable: isAvailable
            });

            
            res.status(201).json({sucesso: true, message: 'Ação realizada com sucesso!', data: novoCarro});
           

        } catch(err) {
            res.status(500).json({
                message: "Erro ao criar carro",
                error: err.message
            })
        }
    }
}

module.exports = carController;