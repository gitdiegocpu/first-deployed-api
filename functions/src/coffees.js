import db from './connectDb.js'

const coll = db.collection('coffee')

export function addCoffee(req, res){
    const newcoffee = req.body
    coll.add(newcoffee)
    .then(() => res.status(201).send({ message: "Success"}))
    .catch(err => res.status(500).send({ message: err.message }))

}

export function getAllCoffees(req, res) {
    coll.get()
    .then(collection => {
        const coffees = collection.docs.map(doc => ({id: doc.id, ...doc.data()}))
        res.send(coffees)
    })
    .catch(err => res.status(500).send({ message: err.message }))
}
