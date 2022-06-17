export interface Slip{
    id: string,
    advice: string
}
export interface GetSlip{
    slip: Slip
}

export interface AdviceContainerProps{
    getSlip: ()=>void,
    slip: Slip,
}