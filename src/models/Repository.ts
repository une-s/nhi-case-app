import { validateJson } from 'common/util/validators';

class Repository {

  id: number;
  name: string;
  fullName: string;
  description?: string;

  constructor(json: any) {
    const requiredProps:string[] = ['id', 'name', 'full_name'];
    const requiredTypes:string[] = ['number', 'string', 'string'];

    // May throw TypeError
    validateJson(json, requiredProps, requiredTypes);

    this.id = json.id;
    this.name = json.name;
    this.fullName = json.full_name;
    this.description = json.description;
  }
}
export default Repository;
