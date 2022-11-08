import User from './User';
import { validateJson } from 'common/util/validators';

class DetailedUser extends User {

  name: string;
  githubUrl: string;
  followers: number;
  following: number;
  bio?: string;
  company?: string;
  email?: string;
  blogUrl?: string;

  constructor(json: any) {
    super(json);
    const requiredProps:string[] = ['name', 'html_url', 'followers', 'following'];
    const requiredTypes:string[] = ['string', 'string', 'number', 'number'];

    // May throw TypeError
    validateJson(json, requiredProps, requiredTypes);

    this.name = json.name;
    this.githubUrl = json.html_url;
    this.followers = json.followers;
    this.following = json.following;
    this.bio = json.bio;
    this.company = json.company;
    this.email = json.email;
    this.blogUrl = json.blog && !json.blog.match(/^https?:\/\//) ?
      'https://' + json.blog :
      json.blog;
  }
}
export default DetailedUser;
