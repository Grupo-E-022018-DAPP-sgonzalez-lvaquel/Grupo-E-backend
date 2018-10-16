
function isCached(cache, id) {
    return cache[id] && (cache[id].expirationDate < Date.now());
}


export function memoryCache(repository) {
    const get = repository.get;
    repository.cache = {};
    repository.cache.ttl = 10 * 1000;

    repository.get = (id) => {
        if(isCached(repository.cache, id)){
            return repository.cache[id].value;
        }
        repository.cache[id] = {
            expirationDate: Date.now() + repository.cache.ttl,
            value: get(id),
        };
        return repository[id];
    };

    const save = repository.save;
    repository.save = (model) => {
        delete repository.cache[model.id];
        return save(...arguments);
    };

    return repository;
}