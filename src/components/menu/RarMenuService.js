import { Subject } from 'rxjs';

export default class RarMenuService {

    static _subjectClickMenu = new Subject();

    static onClickMenu() {
        return RarMenuService._subjectClickMenu;
    }

    static sendClickMenu() {
        RarMenuService._subjectClickMenu.next('clickMenu');
    }

}