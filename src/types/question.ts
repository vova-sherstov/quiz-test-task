export interface IQuestion {
  type: string;
  title: string;
  description: string;
  answers: {
      smile: string;
      text: string;
  }[]
}
