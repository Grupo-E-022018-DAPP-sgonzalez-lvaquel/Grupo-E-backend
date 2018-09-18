import { UserRoleStrategy } from './UserRoleStrategy';

export class UserAnonymousRoleStrategy extends UserRoleStrategy {

    isAnonymous(){
        return true;
    }

    newAuction(){
        throw new Error();
    }
}
