import { EventEmitter, Injectable, Output } from '@angular/core';

import { Message } from 'primeng/primeng';

@Injectable()
export class GrowlService {

    @Output() newGrowlAdded = new EventEmitter();

    constructor() { }

    addNewGrowl(severity: string, summary: string, detail: string) {
       const growl = { severity: severity, summary: summary, detail: detail };
       this.newGrowlAdded.emit(growl);
    }
}
