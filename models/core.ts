import { Document } from "mongoose";

export abstract class Core extends Document {
  titulo: string;
  texto: string;
  imagem: string;
  dataPublicacao: Date;
  tags: string;
  links: string;
  ativo: boolean;
}
