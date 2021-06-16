export class Project{
	constructor(
		public _id: string,
		public name: string,
		public description: string,
		public category: string,
		public price: string,
		public subtitle: string,
		public firstP: string,
		public secondP: string,
		public thirdP: string,
		public fourthP: string,
		public video: string,
		public view: Number,
		public image: Array<[]>,
	){}
}