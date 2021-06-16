export class FormContact{
	constructor(
		public _id: string,
		public firstName: string,
		public lastName: string,
		public mail: string,
		public phoneNumber: number,
		public interiorRendering: boolean,
		public exteriorRendering: boolean,
		public aerialRendering: boolean,
		public virtualRendering: boolean,
		public productRendering: boolean,
		public tresDFlorPlan: boolean,
		public tresDVideo: boolean,
		public photomontage: boolean,
		public visto: boolean,
		public description: string,
		public date: string
	){}
}
