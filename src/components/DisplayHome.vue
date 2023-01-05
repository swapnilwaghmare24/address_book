<template>
 
<input type="text" v-model="search" placeholder="Search here" class="search"/>

  <table id="display" className="display">
    <tbody>
      <tr>
        <th>FullName</th>
        <th>address</th>
        <th>PhoneNumber</th>
        <th @click="sortContactsByState()">State</th>
        <th @click="sortContacts()">City</th>
        <th>ZipCode</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
      <tr v-for="employee in employees" :key="employee">
        
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
import AddressBookService from "../service/AddressBookService";
export default {
  name: "DisplayHome",
  data() {
    return {
      employees: [],
      sortOrder:'A',
      search:'',
    };
  },

  watch:{
        search(keyword){
            if(keyword.length>0){
            AddressBookService.getContactBySearchString(keyword).then((response) => {
                this.employees = response.data.data;
            });}else{
                this.getEmployees();
            }
        }
    },
  methods: {
    getEmployees() {
      EmployeeService.getAllEmployees().then((response) => {
        console.log(response.data.data);
        this.employees = response.data.data;
      });
    },
   
    sortContacts(){
            if(this.sortOrder == 'A'){
             
              this.sortOrder = 'D'
              AddressBookService.sortAsc().then((response)=>
              {
                this.employees=response.data.data

              })
             
          } else{  
                  
                  this.sortOrder = 'A'

                  AddressBookService.sortDsc().then((response)=>
              {
                this.employees=response.data.data

              })
                            
            }
          },

          sortContactsByState(){
            if(this.sortOrder == 'A'){
             
              this.sortOrder = 'D'
              AddressBookService.sortAscState().then((response)=>
              {
                this.employees=response.data.data

              })
             
          } else{  
                  
                  this.sortOrder = 'A'

                  AddressBookService.sortDscState().then((response)=>
              {
                this.employees=response.data.data

              })
                            
            }
          },
    update(id) {
      this.$router.push({ name: "EditForm", params: { id: id } });
    },
   
        
       
    
    remove(employeeId) {
      var answer = window.confirm(
        "Data once deleted cannot be restored!! Do you wish to continue ?"
      );
      if (answer === true) {
        EmployeeService.deleteEmployee(employeeId)
          .then((data) => {
            console.log(data);
            alert("Employee deleted Successfully!!");
            location.reload();
            this.getEmployees();
          })
          .catch((error) => {
            console.log(error);
            alert("Something Went Wrong!");
          });
      } else {
        alert("Employee Not Deleted!!!");
      }
    },
    displayMessage() {
      console.log("Welcome to Bridgelabz");
    },
  },

  
  created() {
    this.displayMessage();
    this.getEmployees();
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