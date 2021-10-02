import Repository from "./repository";

class OwnerRepository extends Repository {
  constructor() {
    super('owner')
  }
}

export default new OwnerRepository()

