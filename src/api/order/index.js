import axios from 'axios';

const baseURL = 'https://cleanbot-test.choreslamour.com';

const OrderAPI = {
  getReservationOrders: (data) => axios.post(`${baseURL}/a/reservations/serviced`, data)
};

export default OrderAPI;
