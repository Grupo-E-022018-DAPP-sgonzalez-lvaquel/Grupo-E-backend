export class UsersService {
    constructor({
        usersRepository,
    }) {
        this.usersRepository = usersRepository;
    }

    findOrCreate(options) {
        return this.usersRepository.findOrCreate(options).then(users => users[0]);
    }
}