import axios from 'axios';

const BASE_URL = 'http://localhost:8080/addressbookservice';

class AddressBookService{

    getAllAddress(){
        return axios.get(`${BASE_URL}/getall`);
    }

    addAddress(data){
        return axios.post(`${BASE_URL}/postdata`, data)
    }

    sortAsc()
    {
        return axios.get(`${BASE_URL}/sortAsc`);

    }

    sortDsc()
    {
        return axios.get(`${BASE_URL}/sortDsc`);
        
    }

    sortAscState()
    {
        return axios.get(`${BASE_URL}/sortAscState`);

    }

    sortDscState()
    {
        return axios.get(`${BASE_URL}/sortDscState`);
        
    }

    getContactBySearchString(searchString){

        return axios.get(`${BASE_URL}/searchData/${searchString}`);

    }
}

export default new AddressBookService();