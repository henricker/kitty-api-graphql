import path from 'path'
import { readFileSync, writeFileSync } from 'fs'

export default class Repository {
  _databaseName
  _pathDatabase
  constructor(databaseName) {
    this._databaseName = databaseName
    this._pathDatabase = path.resolve(__dirname, '..', '..', 'infra', 'database', 'database.json')
  }

  _getDatabase() {
    const database = JSON.parse(
      readFileSync(this._pathDatabase)
      .toString('utf-8')
    )

    return database
  }

  find() {
    const entities = this._getDatabase()[this._databaseName]
    return entities
  }

  findById(id) {
    const entity = this._getDatabase()[this._databaseName].find((usr) => usr.id === Number(id))
    return entity
  }

  create(data, relationName) {
    const database = this._getDatabase()
    const entity = { ...data, id: database[this._databaseName].length === 0 ? 1 : database[this._databaseName].length + 1 }
    database[this._databaseName].push(entity)

    writeFileSync(this._pathDatabase, JSON.stringify(database, 0, 2))
    return entity
  }

  delete(id) {
    try {
      const database = this._getDatabase()
     
      if(database[this._databaseName].every((entity) => entity.id !== Number(id)))
        throw new Error('entity not found')
      
        database[this._databaseName] = database[this._databaseName].filter((entity) => entity.id !== Number(id))
      console.log(database[this._databaseName])
      writeFileSync(this._pathDatabase, JSON.stringify(database, 0, 2))
      
      return true
    } catch(err) {
      console.log(err.message)
      return false
    }
  }
}