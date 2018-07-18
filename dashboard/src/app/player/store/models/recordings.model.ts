import { Mutation } from "./mutation.model";

export interface Recordings {
	initialDomState: string,
	mutations: Mutation[]
}