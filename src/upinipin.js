import React, { Component } from 'react'

export default class upinipin extends Component {
    state = {
        nama:"",  
        alamat:"",
        umur:"",
        pekerjaan:"",
        status:""
    }
    ganti = (nm, al, um, pk, st)=>{
    this.setState({
        nama: nm,  
        alamat: al,
        umur: um,
        pekerjaan: pk,
        status: st
})    }

    render() {
        return (
            <div>
                <input value = {this.state.nama} />
                <br/>
                <input value = {this.state.alamat} />
                <br/>
                <input value = {this.state.umur} />
                <br/>
                <input value = {this.state.pekerjaan} />
                <br/>
                <input value = {this.state.status} />
                <br/>
                <button onClick = {()=>this.ganti("Upin", "Solo", "22", "PNS", "Menikah")}>upin</button>
                <button onClick = {()=>this.ganti("Ipin", "Semarang", "20", "Mahasiswa", "Jomblo")}>ipin</button>
                <button onClick = {()=>this.ganti("Apin", "Jogja", "18", "Pelajar", "Jomblo")}>apin</button>
            </div>
        )
    }
}
