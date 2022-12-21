export interface IOptions {
    dragItems: number[];
    dropItems: number[];
    sequence: boolean;
    theme: ITheme;
}

export interface IGameItem {
    value: number;
    img: string;
}

export interface ITheme {
    backGroundImg: string;
    boardImg: string;
    dndItemsImg: string[]; 
}

export type FormProps = {
    onGameStart: (param: IOptions) => void
}