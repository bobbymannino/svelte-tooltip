import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        tip: string;
        background?: string | undefined;
        color?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TooltipProps = typeof __propDef.props;
export type TooltipEvents = typeof __propDef.events;
export type TooltipSlots = typeof __propDef.slots;
export default class Tooltip extends SvelteComponentTyped<TooltipProps, TooltipEvents, TooltipSlots> {
}
export {};
