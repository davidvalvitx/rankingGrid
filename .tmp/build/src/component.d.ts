import * as React from "react";
import "./../style/visual.css";
import powerbi from "powerbi-visuals-api";
import ISelectionId = powerbi.visuals.ISelectionId;
interface Data {
    Imagen?: string;
    KPI?: number;
    Ranking?: number;
    secRank?: number;
    Flag?: number;
    selectionId?: ISelectionId;
}
export interface State {
    data?: Data[];
    size?: number;
    color?: string;
    textSize?: number;
    colorText?: string;
    textSizeRank?: number;
    scrollColor?: string;
    turnCards?: boolean;
    tamanoSlicer?: number;
    colorHeader?: string;
}
export declare const initialState: State;
export interface Pole {
    getMoreData: () => void;
}
export declare class RankingGrid extends React.Component<Pole, State> {
    constructor(props: any);
    private static updateCallback;
    static update(newState: State): void;
    state: State;
    componentWillMount(): void;
    componentWillUnmount(): void;
    handleSelection(selectionId: any): void;
    render(): JSX.Element;
}
export default RankingGrid;
