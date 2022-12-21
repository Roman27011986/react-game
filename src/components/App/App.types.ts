import { IOptions } from './../Form/Form.types';

export type SubmitHundlerType = (options: IOptions) => void;
export type HandleShowGameOverModalType = (isShowModal: boolean) => void;

export interface IItemsListWrapper {
    bg?: string
}