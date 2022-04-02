import * as React from "react";
import Scrollbar from "./scrollbar/scroll";
import styled from "styled-components";


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
    scrollBar?: string
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
        const { size, color, textSize, colorText, tamanoRank, textSizeRank, scrollBar } = this.state;
        const sizeOk = size + "px";
        const size2 = 95 + "px";
        const alto = (size * 1.5) + "px";

        const Grid = styled.div`
            display: grid;
            gap: 10px;
            justify-content: start;
            grid-template-columns: repeat(auto-fill, minmax(${sizeOk}, 1fr));
        `

        const Producto = styled.div`
            display: flex;
            align-items: flex-start;
            max-width: ${sizeOk};
            width:100%;
            border: 1px solid transparent;
            padding: 1px;
            &:hover {
                border: 1px solid grey;
              }

        `

        const Info = styled.div`
            display: flex;
        `

        const Datos = styled.div`
            position: relative;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: transparent;
            margin-bottom: 6%;
            height: ${sizeOk};
            transform: translateX(-${sizeOk});
        `

        const Rank = styled.div`
            position: relative;
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            box-sizing: border-box;
            min-height: 15px;
            min-width: 15px;
            color: white;
            padding: 0.5em ;
            font-weight: 100;
            margin-bottom: 30%;
            max-width: ${sizeOk};
            background-color: ${color};
            min-width: ${tamanoRank};
            height: ${tamanoRank};
        `

        const Image = styled.img`
            width: ${sizeOk}; 
            min-hHeight: 100%;
            object-fit: cover;
        `

        const KPIBox = styled.div`
            display: block;
            background-color: rgb(255, 255, 255);
            width: fit-content;
            height: fit-content;
            min-width: 55px;
            min-height: 20px;
        `

        const KPIText = styled.div`
            margin: 0;
            text-transform: uppercase;
            vertical-align: middle;
            line-height: 20px;
            font-weight: 700;
            margin-left: 0.6em;
            margin-right: 0.5em;
            padding: 0.2em;
            font-size: ${textSize};
            color: ${colorText};
        `

        const Marcas = styled.div`
            position: relative;
            right: 95px;
            // transform: translateX(-${size2});
            display: flex;
            flex-direction: column;
            max-width: 40px;
            align-self: flex-start;
            justify-content: space-between;
            flex: 1;
            direction: rtl;
            z-index: 10;  
        `
        const Marca = styled.div`
            display: flex;
            height: 20px;
            min-width: 20px;
            width: fit-content;
            background-color: transparent;
            margin-bottom: 20%;
        `



        return (
            <>
                <div className="App">
                    {/* <h1 style={{ "color": scrollBar }}>{scrollBar}</h1> */}
                    <Scrollbar>
                        <Grid>
                            {this.state.Imagen.map(
                                (x, i) => {
                                    return (
                                        <Producto>
                                            <div className="imagen" style={{ "height": alto }}>
                                                <Image key={i} src={x} alt="" />
                                            </div>
                                            <Info>
                                                <Datos key={i}>
                                                    <Rank>
                                                        <p style={{ "fontSize": textSizeRank, "margin": 0, "alignSelf": "center" }}>
                                                            {this.state.Ranking[i]}
                                                        </p>
                                                    </Rank>
                                                    <KPIBox>
                                                        <KPIText>
                                                            {this.state.KPI[i].toLocaleString(undefined,
                                                                { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                                                        </KPIText>
                                                    </KPIBox>
                                                </Datos>
                                                <Marcas>
                                                    <Marca></Marca>
                                                    <Marca></Marca>
                                                </Marcas>
                                            </Info>
                                        </Producto>
                                    )
                                }
                            )}
                        </Grid>
                    </Scrollbar>
                </div >
            </>

        )
    }
}
export default RankingGrid;