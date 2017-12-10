import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import ConsultForm from './components/ConsultForm/ConsultForm'
import Profesional from './components/Profesional/Profesional'

class App extends Component{
    state ={
        profesional: {name: 'victor',
                      lastname:'rodriguez',
                      rut:'18642586-9',
                      compañia:'Clinica Avansalud'
                    }
    }
    render(){
        return (
            <div className="consult-container"> 
                <Profesional data={this.state.profesional} />
                <ConsultForm /> 
            </div>
        )          
    }

}

ReactDOM.render(<App /> , document.getElementById('app'));