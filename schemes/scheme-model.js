const db = require('../data/dbConfig')


async function find() {
    return db('recipes')
  }

 async function findById(id) {
    return  await db('schemes').where('schemes.id', id).first() ;

}
async function findSteps(id){
    return db('schemes')
    .join('steps as st', 'schemes.id','st.scheme_id')
    .select('st.id','schemes.scheme_name','st.step_number','st.instructions')
    .where('st.scheme_id', id)
}

async function add(scheme){
    const [id] = await db('schemes').insert(scheme)
    return findById(id)
}

async function update(changes ,id) {
    await  db('schemes').where('id', id).update(changes)
      return findById(id) ;
  }
  
  async function remove(id) {
 await db('schemes').where('id', id).del()
    return find()
  }
  
  module.exports ={
      find , findById, findSteps ,add , update , remove
  }