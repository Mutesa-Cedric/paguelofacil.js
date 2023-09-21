interface HeaderStatus {
    code: number,
    description: string
}

export interface BinInfo {
    credit_card: {
        issuer: {
            name: string
        },
        country: string
    }
}

interface Data {
    date: string,
    authStatus: string,
    cardType: string,
    type: string,
    userName: string,
    cardToken: string,
    userLogn: string,
    idUsr: number,
    revisionLevel: any,
    binInfo: BinInfo,
    inRevision: boolean,
    name: string,
    totalPay?: string,
    displayNum: string,
    operationType: string,
    returnUrl: string,
    requestPayAmount: number,
    revisionOptions: any,
    email: string,
    codOper: string,
    status: number,
    messageSys: string
}

export interface ServerResponse {
    headerStatus: HeaderStatus,
    serverTime: string,
    message: string | null,
    data: Data,
    success: boolean
}