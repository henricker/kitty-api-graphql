import Repository from "./repository";

class KittyRepository extends Repository {
  #tableName = 'kitty'
  constructor() {
    super('kitty')
  }

  findByIdWithLoadRelation(id, relationName) {
    const database = this._getDatabase()
    const entity = database[this._databaseName].find((usr) => usr.id === Number(id))
    entity[relationName] = database[relationName].find((relation) => relation.id === entity[relationName])
    return entity
  }

  findAndLoadRelation(relationName) {
    const data = this._getDatabase()
    const table = data[this.#tableName]
    table.forEach((entity) => {
      const relationId = entity[relationName]
      const relation = data[relationName].find((entity) => entity.id === relationId)
      entity[relationName] = relation
    })

    return table
  }
}

export default new KittyRepository()