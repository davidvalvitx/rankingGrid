import * as React from "react";
export interface State {
    Imagen: string[];
    KPI: number[];
    Ranking: number[];
}
export declare const initialState: State;
export declare class RankingGrid extends React.Component<{}, State> {
    constructor(props: any);
    private static updateCallback;
    static update(newState: State): void;
    state: State;
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default RankingGrid;
