import "@stdlib/deploy";

contract SpinWheel with Deployable {
 
    ItemIndex: Int as uint32;

    init() {
        self.ItemIndex = 0;
    }
 
    get fun winning(): Int {
        let rndNum: Int = random(0,1000);
        if (rndNum>=306) {
            let tempwinindex: Int = random(0,12);
            if (tempwinindex > 10) {
                return 8;
            } else if (tempwinindex > 8) {
                return 6;
            } else if (tempwinindex > 6) {
                return 4;
            } else if (tempwinindex > 4) {
                return 2;
            }else if (tempwinindex > 1) {
                return 0;
            } else {
                return 10;
            }
        } else {
            let tempwinindex: Int = random(0,12);
            if (tempwinindex > 10) {
                return 11;
            } else if (tempwinindex > 8) {
                return 9;
            } else if (tempwinindex > 6) {
                return 7;
            } else if (tempwinindex > 4) {
                return 5;
            } else if (tempwinindex > 2) {
                return 3;
            } else {
                return 1;
            }
        }
    }


}