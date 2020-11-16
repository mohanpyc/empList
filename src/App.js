import React from 'react'
import Data from './Data'
import Formui from './Formui'

class App extends React.Component {

    state={
        empData:[],
        View:"tile"
    }

    updateView = (view) =>{
        this.setState({
            View:view
        })
    } 

    addEmp = (emp) =>{
        this.setState({
            empData:[...this.state.empData,emp]
        })
    }

    removeEmp = (emp) =>{
        this.setState({
            empData:[...this.state.empData.filter(i=>i.phNum!=emp.phNum)]
        })
    }

    updateView = (view) =>{
        console.log(view)
        this.setState({
            View:view
        })
    }    


    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-lg-6">
                        <Formui getEmp={this.addEmp} />
                    </div>
                    <div className="col-xs-6 col-lg-6">
                        <div className="row">
                            <div className="col-lg-6 mr-0 pr-0">
                                <button className="btn btn-danger w-100 mr-0" onClick={()=>this.updateView("grid")}>Grid View</button>
                            </div>
                            <div className="col-lg-6 ml-0 pl-0">
                                <button className="btn btn-primary w-100 ml-0" onClick={()=>this.updateView("tile")}>Tile View</button>
                            </div>
                        </div>
                        
                        <Data list={this.state.empData} empGet={this.removeEmp} View={this.state.View}/>
                    </div>
                </div>
            </div>
         );
    }
    
}

export default App
