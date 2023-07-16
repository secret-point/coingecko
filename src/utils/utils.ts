import _delay from 'lodash/delay';

export const delay = (time: number) => {
  _delay(() => {}, time);
};

export class ErrorResponse<T extends object = {}> {
  public code: string;
  public message: string;
  public status: number;
  public payload?: T;

  constructor(response: any) {
    this.code = response.code;
    this.message = response.message;
    this.status = response.status;
    this.payload = response.payload;
  }
}
