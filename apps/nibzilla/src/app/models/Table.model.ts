import { Model } from '@btdev/ts-lib';
import TableColumn from './TableColumn.model';

export default class Table extends Model {
    public columns: TableColumn[] = [];
    public entries: any[] = [];

    constructor() {
        super();
    }
}
