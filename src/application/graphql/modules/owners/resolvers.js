import ownerRepository from '../../../repository/owner-repository'

export default {
  Query: {
    owners: () => ownerRepository.find(), 
    owner: (_, { id }) => ownerRepository.findById(id)
  },
  Mutation: {
    createOwner: (_, { data }) => ownerRepository.create(data),
    deleteOwner: (_, { id }) => ownerRepository.delete(id)
  },
}