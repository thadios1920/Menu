import { Commentaire } from "./commentaire";

export class Pizza {
    constructor(public nom?:string,
        public image?:string,
        public prix?:number,
        public vegan?:boolean,
        public comments?: Commentaire[] )
        {

    }
}
