import api from '../lib/axios.js';

export default {
    obtenerCliente(){
        return api.get('/clientes');
    },
    agregarcliente(data){
        api.post("/clientes", data)
    },
    obtieneCliente(id){
       return api.get("/clientes/"+id);
        
    },
    actualizarCliente(id, data){
        return api.patch("/clientes/"+id, data)
    },
    actualizarEstado(id, data){
        return api.patch("/clientes/"+id, data)
    },
    eliminarCliente(id){
        return api.delete("/clientes/"+id)
    }

}