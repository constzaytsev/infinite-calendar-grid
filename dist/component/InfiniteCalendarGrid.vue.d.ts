
declare const _default: <T extends Record<string, unknown>>(__VLS_props: {
    locale?: string | undefined;
    onChangeInterval?: ((...args: any[]) => any) | undefined;
    firstDayOfWeek?: 0 | 1 | undefined;
    todayLabel?: string | undefined;
    items: T[];
    fieldWithDate: string;
} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    emit: (event: "changeInterval", ...args: any[]) => void;
    slots: {
        default?(_: {
            date: {
                localeDate: string;
                timestamp: number;
                isWeekend: boolean;
                isCurrent: boolean;
                isFirstDay: boolean;
                isCurrentMonth: boolean;
            };
            items: T[];
        }): any;
    };
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        locale?: string | undefined;
        onChangeInterval?: ((...args: any[]) => any) | undefined;
        firstDayOfWeek?: 0 | 1 | undefined;
        todayLabel?: string | undefined;
        items: T[];
        fieldWithDate: string;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        default?(_: {
            date: {
                localeDate: string;
                timestamp: number;
                isWeekend: boolean;
                isCurrent: boolean;
                isFirstDay: boolean;
                isCurrentMonth: boolean;
            };
            items: T[];
        }): any;
    };
    emit: (event: "changeInterval", ...args: any[]) => void;
}>) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            locale?: string | undefined;
            onChangeInterval?: ((...args: any[]) => any) | undefined;
            firstDayOfWeek?: 0 | 1 | undefined;
            todayLabel?: string | undefined;
            items: T[];
            fieldWithDate: string;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {
            default?(_: {
                date: {
                    localeDate: string;
                    timestamp: number;
                    isWeekend: boolean;
                    isCurrent: boolean;
                    isFirstDay: boolean;
                    isCurrentMonth: boolean;
                };
                items: T[];
            }): any;
        };
        emit: (event: "changeInterval", ...args: any[]) => void;
    } | undefined;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
