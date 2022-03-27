import * as React from "react";

export interface State {
    Imagen: string[],
    KPI: number[],
    Ranking: number[]
}

export const initialState: State = {
    Imagen: [""],
    KPI: [0],
    Ranking: [0]
}


export class RankingGrid extends React.Component<{}, State>{
    constructor(props: any) {
        super(props);
        this.state = initialState;
    }

    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        if (typeof RankingGrid.updateCallback === 'function') {
            RankingGrid.updateCallback(newState);
            console.log(newState)
        }
    }

    public state: State = initialState;

    public componentWillMount() {
        RankingGrid.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        RankingGrid.updateCallback = null;
    }

    render() {
        return (
            <div className="App">
                <div className='contenedor'>
                    {this.state.Imagen.map(
                        (x, i) => {
                            return (
                                <div className='recuadro'>
                                    <div className='rank'>
                                        <p>{this.state.Ranking[i]}</p>
                                    </div>
                                    <div className='label'>
                                        <p>{this.state.KPI[i].toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>
                                    </div>
                                    <img key={i} className='foto' src={x} alt="" />
                                </div>
                            )
                        }
                    )}
                </div>
            </div >
        )
    }
}
export default RankingGrid;