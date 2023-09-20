import { DocumentType } from "./document-type";

export class Document {
    constructor(
        public documentId?:number,
         public documentType?: DocumentType,
        public documentNo?: string
        ) {}
}
