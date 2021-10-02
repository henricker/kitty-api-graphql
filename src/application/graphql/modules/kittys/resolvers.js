import kittyRepository from '../../../repository/kitty-repository'

export default {
  Query: {
    kittys: () => kittyRepository.findAndLoadRelation('owner'), 
    kitty: (_, { id }) => kittyRepository.findByIdWithLoadRelation(id, 'owner')
  },
  Mutation: {
    createKitty: (_, { data }) => kittyRepository.create(data),
    deleteKitty: (_, { id }) => kittyRepository.delete(id)
  },
}