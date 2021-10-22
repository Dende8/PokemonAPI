import { fetchList } from './api/call-to-api-list';
import { fetchDetail } from './api/call-to-api-detail';
import { expandMenu } from '../app/modules/menu';
import { printData } from '../app/views/print';
import { displayArrows } from '../app/views/print';
import { find } from '../app/modules/finder'


import './styles/styles.scss';




window.onload = () => {
    displayArrows();
    printData();
    expandMenu();
}