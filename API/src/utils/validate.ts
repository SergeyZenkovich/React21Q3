export interface ValidationResult {
  valid: boolean;
  errorText?: string;
}
export const validate = (field: string, value: string): ValidationResult => {
  switch (field) {
    case "problem": {
      return value !== ""
        ? {valid: true}
        : {valid: false, errorText: "Problem field value is not valid"};
    }
    case "date": {
      const [year, month, day] = value.split("-");
      return new Date(Number(year), Number(month) - 1, Number(day)).getTime() -
        new Date().getTime() >
        0
        ? {valid: false, errorText: "Date field value is not valid"}
        : {valid: true};
    }
    default: {
      return {valid: true};
    }
  }
};
