export interface ISubmitBtn {
    children: string,
    btnType: "button" | "submit" | "reset",
    isDisabled?: boolean;
    onHandleClick?: () => void
}

export interface ISoundBtn {
    $pict: string;
    $sound: boolean;
}