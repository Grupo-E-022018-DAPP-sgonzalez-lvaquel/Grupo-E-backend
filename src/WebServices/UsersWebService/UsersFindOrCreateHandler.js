export function UsersFindOrCreateHandler({
    usersService,
    usersAdapter,
}) {
    return (req, res, next) => {
        usersService.findOrCreate(req.body).then(user => {
            res.json(
                usersAdapter.serialize(
                    user
                )
            );
        }).catch(next);
    };
}