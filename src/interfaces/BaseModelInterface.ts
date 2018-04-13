import { ModelsInterface } from "./ModelsInterface";

export interface BaseModelInterface {

    prototype?;
    associates?(models: ModelsInterface);

}