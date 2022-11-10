import { validateJson } from 'common/util/validators';

class Repository {

  id: number;
  name: string;
  fullName: string;
  stars: number;
  forks: number;
  description?: string;

  constructor(json: any) {
    const requiredProps:string[] = ['id', 'name', 'full_name', 'stargazers_count', 'forks_count'];
    const requiredTypes:string[] = ['number', 'string', 'string', 'number', 'number'];

    // May throw TypeError
    validateJson(json, requiredProps, requiredTypes);

    this.id = json.id;
    this.name = json.name;
    this.fullName = json.full_name;
    this.stars = json.stargazers_count;
    this.forks = json.forks_count;
    this.description = json.description;
  }
}
export default Repository;
