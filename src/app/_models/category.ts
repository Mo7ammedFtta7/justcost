    export interface Isub {
        id: number;
        name: string;
        count: number;
    }

    export interface Icategory {
        id: number;
        name: string;
        image: string;
        sort_order: number;
        flag?: number;
        subs: Isub[];
    }



    



