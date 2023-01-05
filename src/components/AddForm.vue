<template>
  <div>
    <div className="payroll-main">
      <header className="header-content header">
        <div className="logo-content">
          <router-link to="/">
            <img src="../assets/logo.png" alt=""
          /></router-link>
          <div>
            <router-link to="/">
              <span className="emp-text">ADDRESS</span> <br />
              <span className="emp-text emp-payroll">BOOK</span></router-link
            >
          </div>
        </div>
      </header>
      
      <div className="form-content">
        <form className="form-head" action="#" @submit="submitForm">
          <div className="form-head">Address Book form</div>
          <div className="row-content">
            <router-link to="/"
              ><label className="label text" htmlFor="name"
                >FullName</label
              ></router-link
            >
            <input
              className="input"
              type="text"
              id="fullName"
              placeholder="Enter your name"
              v-model="formValues.fullName"
            />
          </div>

           <div className="row-content">
           
          <label className="label text" htmlFor="name">Address</label>
            <input
              className="input"
              type="text"
              id="address"
              placeholder="Enter your address"
              v-model="formValues.address"
            />
          </div>

          
           <div className="row-content">
           
          <label className="label text" htmlFor="name">PhoneNumber</label>
            <input
              className="input"
              type="text"
              id="phoneNumber"
              placeholder="Enter your phone number"
              v-model="formValues.phoneNumber"
            />
          </div>

          

          
           <div className="row-content">
           
          <label className="label text" htmlFor="name">State</label>
            <input
              className="input"
              type="text"
              id="state"
              placeholder="Enter your state"
              v-model="formValues.state"
            />
          </div>

          
           <div className="row-content">
           
          <label className="label text" htmlFor="name">City</label>
            <input
              className="input"
              type="text"
              id="city"
              placeholder="Enter your city"
              v-model="formValues.city"
            />
          </div>

          
           <div className="row-content">
           
          <label className="label text" htmlFor="name">ZipCode</label>
            <input
              className="input"
              type="text"
              id="zipCode"
              placeholder="Enter your zipcode"
              v-model="formValues.zipCode"
            />
          </div>

          
           <div className="row-content">
           
          <label className="label text" htmlFor="name">Email</label>
            <input
              className="input"
              type="text"
              id="email"
              placeholder="Enter your email"
              v-model="formValues.email"
            />
          </div>
          

          <div className="buttonParent">
            <router-link to="/">
              <button type="submit" className="resetButton button cancelButton">
                Cancel
              </button></router-link
            >

            <div className="submit-reset">
              <button
                type="submit"
                className="button submitButton"
                id="submitButton"
              >
                Submit
              </button>
              <button type="button" className="resetButton button">
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeService from "../service/EmployeeService";
export default {
  name: "AddForm",
  
  data() {
  return {
     formValues: {
        fullName: "",
        address: "",
        phoneNumber: "",
        city: "",
        state: "",
        zipCode: "",
        email: "",
        
      },
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      const data = this.formValues;
      EmployeeService.addEmployees(data)
        .then((response) => {
          console.log(response);
          console.log(response.data.data);
          this.employees = response.data.data;
          alert("Address Added Successfully!!", response);
        })
        .catch((error) => {
          console.log(error);
          alert("WARNING!! Error while adding the Address!");
        });
    },
  },
};
</script>

<style scoped>

body {
  margin: 0;
  height: 100%;
}
.payroll-main {
  height: 100%;
  min-height: calc(100% - 80px);
  background-color: #f7f7f7;
  justify-content: center;
  align-items: center;
  padding: 0;
}
.header {
  padding: 15px 0;
  background-color: #ffffff;
}
.header-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
}
.logo-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0px solid green;
  width: 80%;
}
.logo-content-img {
  border: 0px solid #42515f;
}
.emp-text {
  font: normal normal bold 20px/20px Montserrat;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0px;
  color: #82a70c;
  padding-left: 10px;
  text-transform: capitalize;
}
.emp-payroll {
  color: #42515f;
}
.form-content {
  min-height: calc(100% - 80px);
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px solid green;
}
.form {
  width: 65%;
  padding: 44px 60px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #f5f5f5;
  border-radius: 8px;
  opacity: 1;
}
.form-head {
  font: normal normal bold 28px/37px Roboto;
  letter-spacing: 0px;
  color: #42515f;
  text-transform: capitalize;
  opacity: 1;
  padding-bottom: 20px;
}
.row-content {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  border: 0px solid green;
  font-size: 16px;
}
.label {
  min-width: 140px;
}
label {
  padding: 12px 12px 12px 0px;
  display: inline-block;
}
.text {
  height: auto;
  font-size: 16px;
  color: #43515f;
  opacity: 1;
  font-family: Roboto;
}
.input {
  width: 100%;
  height: 40px;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
.profile-radio-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.profile-radio-content > label {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.profile {
  width: 40px;
  border-radius: 50%;
  margin-left: 12px;
}
select {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  font: normal normal normal 16px Roboto;
  letter-spacing: 0px;
  color: #42515f;
  background-color: transparent;
}
.buttonParent {
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  margin-top: 20px;
}
.button {
  font-size: 20px;
  font-family: Roboto;
  letter-spacing: 0px;
  color: #42515f;
  opacity: 1;
  background: transparent;
  border: none;
  font-weight: 400;
  min-width: 140px;
  padding: 7px 7px;
  border: 1px solid #707070;
  cursor: pointer;
}
.submitButton {
  border: none;
  border: 1px solid grey;
  margin-right: 30px;
}
.cancelButton {
  text-decoration: none;
  text-align: center;
}
.resetButton {
  margin-right: 10px;
}
error-output {
  margin-left: 10px;
  font-size: 15px;
  font-style: italic;
  color: rgb(231, 66, 66);
}
@media only screen and (max-width: 600px) {
  .form {
    margin-top: 10px;
  }
  .submit-reset {
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .cancelButton {
    margin-left: 0px;
  }
  .form {
    width: 85%;
    padding: 44ox 20px;
  }
  .profile-lable {
    margin-left: 0px;
  }
}
@media only screen and (max-width: 960px) {
  .cancelButton {
    margin-left: 0px;
  }
  .form {
    width: 85%;
    padding: 44px 20px;
  }
}
a.button:hover {
  background: grey;
  color: white;
}
.submitButton:hover {
  background-color: #82a70c;
  color: white;
}
.resetButton:hover {
  background: grey;
  color: white;
}
.department {
  margin-left: 30px;
}
</style>