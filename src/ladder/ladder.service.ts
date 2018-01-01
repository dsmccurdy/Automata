import { Injectable } from '@angular/core';
import { LadderProgram } from './ladder-program.model';

@Injectable()
export class LadderService {
    private _ladderPrograms: { [id:string]: LadderProgram} = {};

    public getProgramById(id: string):LadderProgram{
        if(!this._ladderPrograms[id]){
            throw "Invalid ladder program id";
        }
        return this._ladderPrograms[id];
    }

    public getProgramByName(name:string):LadderProgram{
        for(let prog in this._ladderPrograms){
            if(this._ladderPrograms[prog].name === name){
                return this._ladderPrograms[prog];
            }
        }
        throw "Ladder program name '"+name+"' not found";
    }

}