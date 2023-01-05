import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/addressbookservice';

class EmployeeService{

      getAllEmployees() {
        return axios.get(`${EMPLOYEE_API_BASE_URL}/getall`);
      }

      addEmployees(data){
        return axios.post(`${EMPLOYEE_API_BASE_URL}/postdata`, data)
      }

      deleteEmployee(employee_id) {
        return axios.delete(`${EMPLOYEE_API_BASE_URL}/delete/${employee_id}`); 
      }

      getEmployee(employee_id) {
        return axios.get(`${EMPLOYEE_API_BASE_URL}/getbyid/${employee_id}`);
      }

      updateEmployee(id,data) {
        return axios.put(`${EMPLOYEE_API_BASE_URL}/update/${id}`, data);
      }

      userLogin(email,password)
      {
        return axios.get(`${EMPLOYEE_API_BASE_URL}/login/${email}/${password}`)
      }
}

export default new EmployeeService();