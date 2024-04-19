import { Ref } from 'vue';

interface ElementSize {
    width: number;
    height: number;
}
export declare function useElementSize(target: Ref<HTMLElement | null>, initialSize?: ElementSize): {
    width: Ref<number>;
    height: Ref<number>;
};
export {};
