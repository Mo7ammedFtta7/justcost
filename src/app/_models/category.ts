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
        brands:[]
        attributes_group:[]
    }

    export class Report {
      controller_id: number;
      tbl_account_reporter_id: number;
      tbl_account_id: number;
      object_id: number;
      reason_id: number;
      description: string;
      created_at: any;
      updated_at: any;
      deleted_at: any;
    }
    export interface FireBaseNotification {
      notification?: {
        title?: string,
        body?: string,
        icon?: string,
        click_action?: string
      };
    }







