
export interface CardInformation {
    cardNumber: string,
    expMonth: string,
    expYear: string,
    cvv: string,
    firstName: string,
    lastName: string,
    cardType: 'VISA' | 'MASTERCARD',
}

/**
 * Default laguage 'ES'
 */
export interface PaymentInformation {
    amount: number,
    taxAmount: number,
    email: string,
    phone: string,
    concept: string,
    description: string,
    lang?: string,
    customFieldValues?: Array<[string, string, string]>
}

export interface ReverseInformation {
    codOper: string;
    amount: number;
    description: string;
    lang?: string;
    customFieldValues?: Array<[string, string, string]>;
}

export interface CaptureInformation {
    amount: number,
    taxAmount: number,
    email: string,
    phone: string,
    concept: string,
    description: string,
    lang?: string,
    customFieldValues?: Array<[string, string, string]>
    codOper: string;
}