import { dayjs } from './utils';
import { Ref } from 'vue';

export declare function useCalendarScroll(wrapperRef: Ref<HTMLElement | null>, containerRef: Ref<HTMLElement | null>, firstDayOfWeek: 0 | 1): {
    cellHeight: import('vue').ComputedRef<number>;
    activeMonth: Ref<{
        clone: () => dayjs.Dayjs;
        isValid: () => boolean;
        year: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        month: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        date: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        day: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        hour: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        minute: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        second: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        millisecond: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        set: (unit: dayjs.UnitType, value: number) => dayjs.Dayjs;
        get: (unit: dayjs.UnitType) => number;
        add: (value: number, unit?: dayjs.ManipulateType | undefined) => dayjs.Dayjs;
        subtract: (value: number, unit?: dayjs.ManipulateType | undefined) => dayjs.Dayjs;
        startOf: (unit: dayjs.OpUnitType) => dayjs.Dayjs;
        endOf: (unit: dayjs.OpUnitType) => dayjs.Dayjs;
        format: (template?: string | undefined) => string;
        diff: (date?: string | number | Date | dayjs.Dayjs | null | undefined, unit?: "year" | "month" | "date" | "day" | "hour" | "minute" | "second" | "millisecond" | "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "months" | "years" | "dates" | "d" | "D" | "M" | "y" | "h" | "m" | "s" | "ms" | "week" | "weeks" | "w" | "quarter" | "quarters" | "Q" | undefined, float?: boolean | undefined) => number;
        valueOf: () => number;
        unix: () => number;
        daysInMonth: () => number;
        toDate: () => Date;
        toJSON: () => string;
        toISOString: () => string;
        toString: () => string;
        utcOffset: () => number;
        isBefore: (date?: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        isSame: (date?: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        isAfter: (date?: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        locale: {
            (): string;
            (preset: string | ILocale, object?: Partial<ILocale> | undefined): dayjs.Dayjs;
        };
    }>;
    daysInCalendar: import('vue').ComputedRef<{
        localeDate: string;
        timestamp: number;
        isWeekend: boolean;
        isCurrent: boolean;
        isFirstDay: boolean;
        isCurrentMonth: boolean;
    }[]>;
};
