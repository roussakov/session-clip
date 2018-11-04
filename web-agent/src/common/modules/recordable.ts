export interface Recordable {
    type: string;
    time: number;
    sessionId?: string | null;
    sequenceNum: number
}