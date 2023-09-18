import React from "react";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";
import CoffeeForm from "./CoffeeForm";
import CoffeeEdit from "./CoffeeEdit";

class CoffeeControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisible: false,
            mainCoffeeList: [],
            selectedCoffee: null,
            editing: false,
        };
    }

    addNewCoffeeToList = (newCoffee) => {
        const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
        this.setState({
            mainCoffeeList: newMainCoffeeList,
            formVisible: false,
        });
    };

    editSelectedCoffee = (id) => {
        const selectedCoffee = this.state.mainCoffeeList.filter((coffee) =>
            coffee.id === id)[0];
            this.setState({ selectedCoffee: selectedCoffee });
    };

    editCoffeeList = (coffeeToEdit) => {
        if(coffeeToEdit.id === this.state.selectedCoffee.id){
            const editMainCoffeeList = this.state.mainCoffeeList.filter((coffee) =>
            coffee.id !== this.state.selectedCoffee.id).concat(coffeeToEdit);
            this.setState({
                mainCoffeeList: editMainCoffeeList,
                editing: false,
                selectedCoffee: null,
            });
        }
    };

    editCoffeeClick = () => {
        this.setState({
            selectedCoffee: this.state.selectedCoffee,
            editing: true,
        });
    };

    CoffeeClick = () => {
        if (this.state.selectedCoffee != null){
            this.setState({
                formVisible: false,
                selectedCoffee: null,
                editing: false,
            });
        }
        else {
            this.setState((prevState) => ({
                formVisible: !prevState.formVisible,}));
        }
        };

        render() {
            let currentlyVisibleState = null;
            let buttonText = null;
                if (this.state.editing){
                    currentlyVisibleState = (
                        <CoffeeEdit
                            coffee={this.state.selectedCoffee}
                            onEditCoffee={this.editCoffeeList} /> );
                            buttonText = "Return to Coffee List";
                    } else if 
                        (this.state.selectedCoffee != null) {
                            currentlyVisibleState = (
                            <CoffeeDetail
                                coffee={this.state.selectedCoffee}
                                onClickEdit={this.editCoffeeClick} /> );
                        buttonText = "Return to Coffee List";
                    } else if 
                        (this.state.formVisible){
                            currentlyVisibleState = (
                                <CoffeeForm onNewCoffeeCreation={this.addNewCoffeeToList} />
                            );
                        buttonText = "Return to Coffee List";                       
                    } else {
                        currentlyVisibleState = (
                            <CoffeeList
                                coffeeList={this.state.mainCoffeeList}
                                onCoffeeSelection={this.editSelectedCoffee} />
                        );
                        buttonText = "Add Coffee";
                    }
                    return (
                        <React.Fragment>
                            {currentlyVisibleState}
                            <button onClick={this.CoffeeClick}>{buttonText}</button>
                        </React.Fragment>
                    );
                }       
            }

export default CoffeeControl;
