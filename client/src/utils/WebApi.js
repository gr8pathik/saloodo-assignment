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
    getAllShipments(userId) {
        return axios.get(`/shipments${userId ? "/"+userId:""}`)
    },
    getAllBikers() {
        return axios.get('/bikers')
    },
    updateShipment(shipmentId, shipmentData) {
        return axios.put("/shipments/"+shipmentId, shipmentData)
    }
};

export default WebApi;
