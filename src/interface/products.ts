export interface Products {
    amiiboSeries: string;
    character:    string;
    gameSeries:   string;
    head:         string;
    image:        string;
    name:         string;
    release:      Release;
    tail:         string;
    type:         string;
    id:           number;
    price:        number;
}

export interface Release {
    au: String;
    eu: String;
    jp: String;
    na: String;
}
