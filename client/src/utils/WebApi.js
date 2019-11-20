    import axios from 'axios';

const WebApi = {
    login(username, password) {
        return axios
            .post(
                '/auth',
                { username: username, password: password },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            )
            .then(function(response) {
                return response.data;
            });
    },
    getAllShipments() {
        return axios.get('/shipments')
    },
    getAllBikers() {
        return axios.get('/bikers')
    },
    updateShipment(shipmentId, shipmentData) {
        return axios.put("/shipments/"+shipmentId, shipmentData)
    }
};

export default WebApi;
