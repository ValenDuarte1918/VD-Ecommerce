export interface Product {
    amiiboSeries: string;
    character:    string;
    gameSeries:   string;
    head:         string;
    image:        string;
    name:         string;
    release?:      Release;
    tail:         string;
    type:         string;
    id?:           number;
    price:        number;
}

export interface Release {
    au: String;
    eu: String;
    jp: String;
    na: String;
}

export interface CartProduct{
    tail: string
    id: number
    name: string
    image: string
    quantity: number
    price: number
}