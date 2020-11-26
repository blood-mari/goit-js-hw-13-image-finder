export default class LoadMoreBTN {
    constractor({ selector }) {
        this.refs = this.getBtnRefs(selector)
    }

    getBtnRefs(selector) {
        const btnRefs = {};
        btnRefs.button = document.querySelector(selector);
    }

    hideBtn() {
        this.refs.button.classlist.add('hidden');
    }

    showBtn() {
        this.refs.button.classlist.remove('hidden');
    }

    enableBtn() {
        this.refs.button.disabled = false;
        this.refs.spinner.classlist.add('hidden');
        this.refs.label.textContent = 'Load more';
        this.refs.iconLoad.classlist.remove('hidden');
    }

    disableBtn() {
        this.refs.button.disabled = true;
        this.refs.label.textContent = 'Loading...';
        this.refs.iconLoad.classlist.add('hidden');
    }
}