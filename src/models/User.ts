import { validateJson } from 'common/util/validators';

class User {
  username: string;
  id: number;
  avatarUrl: string;

  constructor(json: any) {

    const requiredProps:string[] = ['login', 'id', 'avatar_url'];
    const requiredTypes:string[] = ['string', 'number', 'string'];

    // May throw TypeError
    validateJson(json, requiredProps, requiredTypes);

    this.username = json.login;
    this.id = json.id;
    this.avatarUrl = json.avatar_url;
  }
}
export default User;
