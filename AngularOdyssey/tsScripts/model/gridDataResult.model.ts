import { User } from '../model/user.model';

export class GridDataResult {
    public data: User[];
    public total: number;

    constructor() { }
}