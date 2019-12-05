    export interface Isub {
        id: number;
        name: string;
        name_ar: string;
        count: number;
        productsCount: number;
    }

    export interface Icategory {
        id: number;
        name: string;
        name_ar: string;
        image: string;
        sort_order: number;
        flag?: number;
        subs: Isub[];
    }







