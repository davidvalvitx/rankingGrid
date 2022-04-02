import * as React from "react";;

export interface State {
    Imagen: string[],
    KPI: number[],
    Ranking: number[],
    ISelectionId: number[],
    size?: number,
    color?: string
    textSize?: number,
    colorText?: string,
    tamanoRank?: number
    textSizeRank?: number,

}

export const initialState: State = {
    Imagen: [""],
    KPI: [0],
    Ranking: [],
    ISelectionId: [],
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
        const { size, color, textSize, colorText, tamanoRank, textSizeRank } = this.state;
        const sizeOk = size + "px"

        const grid = {
            display: "grid",
            gap: "10px",
            justifyContent: "start",
            gridTemplateColumns: `repeat(auto-fill, minmax(${sizeOk}, 1fr))`
        }

        const rank = {
            "maxWidth": sizeOk,
            "backgroundColor": color,
            "minWidth": tamanoRank,
            "height": tamanoRank,
        }

        const styleRecuadro = {
            height: sizeOk,
            transform: `translateX(-${sizeOk})`
        }

        const kpi = {
            "fontSize": textSize,
            "color": colorText
        }
        return (
            <>
                <div className="App">
                    <h1>{colorText}</h1>
                    <div className='contenedor' style={grid}>
                        {this.state.Imagen.map(
                            (x, i) => {
                                return (
                                    <div className="producto" style={{ "maxWidth": sizeOk }}>
                                        <div className="imagen">
                                            <img key={i} className='foto' src={x} alt="" style={{ "width": sizeOk }} />
                                        </div>
                                        <div className='recuadro' key={i} style={styleRecuadro}>
                                            <div className='rank' style={rank}>
                                                <p style={{ "fontSize": textSizeRank }}>
                                                    {this.state.Ranking[i]}
                                                </p>
                                            </div>
                                            <div className='label'>
                                                <p style={kpi}>
                                                    {this.state.KPI[i].toLocaleString(undefined,
                                                        { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="marcas">
                                            <div className="dr"></div>
                                            <div className="dr"></div>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>

                </div >
            </>

        )
    }
}
export default RankingGrid;