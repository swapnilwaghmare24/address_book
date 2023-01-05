<template>
  <table id="display" className="display">
    <tbody>
      <tr>
        <th>FullName</th>
        <th>address</th>
        <th>PhoneNumber</th>
        <th>State</th>
        <th>City</th>
        <th>ZipCode</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
      <tr v-for="employee in employees" :key="employee.id">
        
        <td>{{ employee.fullName }}</td>
        <td>{{ employee.address }}</td>
        <td>{{ employee.phoneNumber }}</td>
        <td>{{ employee.state }}</td>
        <td>{{ employee.city }}</td>
        <td>{{ employee.zipCode }}</td>
        <td>{{ employee.email }}</td>
        <td>
          <img
            @click="remove(employee.id)"
            src="../assets/icons/delete-black-18dp.svg"
            alt="delete"
          />
          <img
            @click="update(employee.id)"
            src="../assets/icons/create-black-18dp.svg"
            alt="edit"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
 import EmployeeService from "../service/EmployeeService";
export default {
   
  name: "DisplayLogin",
  data() {
    return {
      employees: []
    };
  },
  methods: {
    userLogin()
    {
         EmployeeService.userLogin(this.input.fullName,this.input.email).then((response) => {
        console.log(response.data.data);
        console.log(this.input.fullName,this.input.email)
        this.employees = response.data.data;
        });

    },
    displayMessage() {
      console.log("Welcome to Bridgelabz");
    },
  },
  created() {
    this.displayMessage();
    this.userLogin();
  },
};
</script>

<style scoped>
.display {
  width: 99.9%;
  border-collapse: separate;
  border-spacing: 0 7px;
  min-width: 800px;
}
th {
  text-align: left;
  padding: 5px 8px;
}
th {
  background: #42515f 0% 0% no-repeat padding-box;
  border-radius: 0px;
  opacity: 1;
  text-align: left;
  font: normal normal normal 14px/24px Roboto;
  color: #ffffff;
  letter-spacing: 0px;
  text-transform: uppercase;
  border: 0px solid #dddddd;
  padding: 8px;
}
td {
  font: normal normal normal 14px/21px Roboto;
  letter-spacing: 0px;
  color: #3d3d3d;
  opacity: 1;
}
td:first-child {
  display: flex;
  align-items: center;
}
td img:first-child {
  margin-right: 10px;
}
td img {
  cursor: pointer;
}
</style>