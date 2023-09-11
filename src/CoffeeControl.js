import React from "react";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";


class CoffeeControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisible: false,
            mainCoffeeList: []
        };
    }
}

export default CoffeeControl;