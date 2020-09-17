import snakeize from 'snakeize';
import camelize from 'camelize';
import connection from '../connection';

const TABLE ='contact';
/**
 * create
 * @param {*} payload 
 */
export async function create(payload) {
    const [result]=await connection.insert(snakeize(payload)).
    into(TABLE).returning('*');  
    return camelize(result) 
 }

 /**
 * getAll
 */
export async function getAll() {
    const result = await connection.select("*").from(TABLE)
    return camelize(result);
}

/**
 * getBYId
 * @param {*} id 
 */
export async function getById(id) {
    const [result] = await connection.select("*").from(TABLE).where({id })
    console.log(result)
    return result ? camelize(result) : null;
}


  /**
 * delete
 * @param {*} contactId 
 */
export async function remove(contactId) {
    return connection(TABLE)
      .delete()
      .where({id: contactId});
  }