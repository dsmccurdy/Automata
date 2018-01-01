import * as Guid from 'guid';

import { LadderRung } from './ladder-rung.model';

export class LadderProgram {
    public id: string;
    public name: string;

    public rungs: LadderRung[];
}