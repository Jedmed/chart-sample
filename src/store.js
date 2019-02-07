import { observable, action } from 'mobx';

class ObservableStore {
    @observable data = [];
    @observable currentData = {};
    @observable secondData = {};

    @action
    addData = newData => {
        this.data = newData
    }

    @action
    setCurrentData = data => {
        this.currentData = data
    }

    @action
    setSecondData = data => {
        if (data) {
            this.secondData = data
        }  
    }
}

export default new ObservableStore();