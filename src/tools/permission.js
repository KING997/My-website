import router from '../router'
//nprogress
import Progress from "nprogress";
import "nprogress/nprogress.css";

Progress.inc(0.2)
Progress.configure({ easing: 'ease', speed: 500, showSpinner: false })

const whiteList = ["/login", "/error"]

router.beforeEach((to, from, next) => {
    Progress.start();
    if (whiteList.indexOf(to.path) !== -1) {
        next()
    } else {
        next()
        Progress.done()
    }
});
router.afterEach(() => {
    Progress.done();
});