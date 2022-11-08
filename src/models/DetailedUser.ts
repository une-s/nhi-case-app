import User from './User';
import { validateJson } from 'common/util/validators';

class DetailedUser extends User {

  githubUrl: string;
  followers: number;
  following: number;
  bio?: string;
  company?: string;
  email?: string;
  blogUrl?: string;

  constructor(json: any) {
    super(json);
    const requiredProps:string[] = ['html_url', 'followers', 'following'];
    const requiredTypes:string[] = ['string', 'number', 'number'];

    // May throw TypeError
    validateJson(json, requiredProps, requiredTypes);

    this.githubUrl = json.html_url;
    this.followers = json.followers;
    this.following = json.following;
  }
}
export default DetailedUser;
