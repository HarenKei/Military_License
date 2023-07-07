export interface API_DATA{
    RESULT_CODE: number,
    RESULT_MSG: string,
    RESULT_DATA: LICENSE_DATA | LIST_DATA | object
}

export interface LIST_DATA{
    data: Array<BOOK_DATA | LICENSE_LIST_DATA>
}

export interface BOOK_DATA{
    author: string,
    publisher: string,
    title: string
}

export interface LICENSE_DATA{
    content: string,
    schedule: Array<string>,
    strGualgbcd: string,
    strGualgbnm: string,
    strJmfldnm: string,
    strMdobligfldcd: string,
    strMdobligfldnm: string,
    strObligfldcd: string,
    strObligfldnm: string,
    strSeriescd: string,
    strSeriesnm: string
}

export interface LICENSE_LIST_DATA{
    strGualgbcd: string,
    strGualgbnm: string,
    strJmfldnm: string,
    strMdobligfldcd: string,
    strMdobligfldnm: string,
    strObligfldcd: string,
    strObligfldnm: string,
    strSeriescd: string,
    strSeriesnm: string
}

export interface USER_DATA{
    comment: string,
    email: string,
    license_list: Array<USER_LICENSE_ITEM>,
    military_rank: string,
    military_type: string,
    mp: number,
    name: string,
    phone: string,
    unit: string
}

export interface USER_LICENSE_ITEM{
    date: string,
    name: string
}