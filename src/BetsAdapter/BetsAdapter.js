export default class BetsAdapter {
    parse(a) {
        return {
            betDTO: () => a
        };
    }

    serialize(a) {
        return a;
    }
}
