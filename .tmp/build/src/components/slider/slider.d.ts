import * as React from "react";
export declare const SlideZara: import("@emotion/styled").StyledComponent<{
    color?: "primary" | "secondary";
    classes?: Partial<import("@mui/base").SliderUnstyledClasses> & {
        colorPrimary?: string;
        colorSecondary?: string;
        sizeSmall?: string;
        thumbColorPrimary?: string;
        thumbColorSecondary?: string;
        thumbSizeSmall?: string;
    };
    size?: "small" | "medium";
    sx?: import("@mui/material/styles").SxProps<import("@mui/material/styles").Theme>;
} & {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-valuetext'?: string;
    classes?: Partial<import("@mui/base").SliderUnstyledClasses>;
    components?: {
        Root?: React.ElementType<any>;
        Track?: React.ElementType<any>;
        Rail?: React.ElementType<any>;
        Thumb?: React.ElementType<any>;
        Mark?: React.ElementType<any>;
        MarkLabel?: React.ElementType<any>;
        ValueLabel?: React.ElementType<any>;
        Input?: React.ElementType<any>;
    };
    componentsProps?: {
        root?: Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof React.HTMLAttributes<HTMLSpanElement>> & {
            ref?: React.Ref<HTMLSpanElement>;
        } & import("@mui/base").SliderUnstyledComponentsPropsOverrides;
        track?: Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof React.HTMLAttributes<HTMLSpanElement>> & {
            ref?: React.Ref<HTMLSpanElement>;
        } & import("@mui/base").SliderUnstyledComponentsPropsOverrides;
        rail?: Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof React.HTMLAttributes<HTMLSpanElement>> & {
            ref?: React.Ref<HTMLSpanElement>;
        } & import("@mui/base").SliderUnstyledComponentsPropsOverrides;
        thumb?: Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof React.HTMLAttributes<HTMLSpanElement>> & {
            ref?: React.Ref<HTMLSpanElement>;
        } & import("@mui/base").SliderUnstyledComponentsPropsOverrides;
        mark?: Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof React.HTMLAttributes<HTMLSpanElement>> & {
            ref?: React.Ref<HTMLSpanElement>;
        } & import("@mui/base").SliderUnstyledComponentsPropsOverrides;
        markLabel?: Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof React.HTMLAttributes<HTMLSpanElement>> & {
            ref?: React.Ref<HTMLSpanElement>;
        } & import("@mui/base").SliderUnstyledComponentsPropsOverrides;
        valueLabel?: import("@mui/base").ValueLabelUnstyledProps & import("@mui/base").SliderUnstyledComponentsPropsOverrides;
        input?: Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React.InputHTMLAttributes<HTMLInputElement>> & {
            ref?: React.Ref<HTMLInputElement>;
        } & import("@mui/base").SliderUnstyledComponentsPropsOverrides;
    };
    defaultValue?: number | number[];
    disabled?: boolean;
    disableSwap?: boolean;
    getAriaLabel?: (index: number) => string;
    getAriaValueText?: (value: number, index: number) => string;
    isRtl?: boolean;
    marks?: boolean | import("@mui/base").Mark[];
    max?: number;
    min?: number;
    name?: string;
    onChange?: (event: Event, value: number | number[], activeThumb: number) => void;
    onChangeCommitted?: (event: Event | React.SyntheticEvent<Element, Event>, value: number | number[]) => void;
    orientation?: "vertical" | "horizontal";
    scale?: (value: number) => number;
    step?: number;
    tabIndex?: number;
    track?: false | "normal" | "inverted";
    value?: number | number[];
    valueLabelDisplay?: "on" | "off" | "auto";
    valueLabelFormat?: string | ((value: number, index: number) => React.ReactNode);
} & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof React.HTMLAttributes<HTMLSpanElement>> & {
    ref?: React.Ref<HTMLSpanElement>;
}, "track" | "size" | "color" | "name" | "defaultValue" | "tabIndex" | "aria-label" | "aria-labelledby" | "aria-valuetext" | "onChange" | "max" | "min" | "orientation" | "scale" | "disabled" | "step" | "value" | "classes" | "sx" | "components" | "componentsProps" | "disableSwap" | "getAriaLabel" | "getAriaValueText" | "isRtl" | "marks" | "onChangeCommitted" | "valueLabelDisplay" | "valueLabelFormat"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, {}, {}>;
export declare const GridSlider: (props: any) => JSX.Element;
