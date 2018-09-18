import { AuctionBuilder } from '../Builders';
import { UserRoleStrategy } from './UserRoleStrategy';

export class UserRegisteredRoleStrategy extends UserRoleStrategy{

    isAnonymous(){
        return false;
    }

    newAuction(){
        return new AuctionBuilder().withOwner(this.user).build();
    }
}
