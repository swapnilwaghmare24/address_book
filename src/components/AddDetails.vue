<template>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600&display=swap" rel="stylesheet">
    <body>
        <div>
            <!--Header with logo-->
            <header class="header-content header">
                <div class="logo-content">
                    <router-link to="/homeform">
                        <img src="..\assets\logo.png" alt="logo" />
                    </router-link>
                    <div>
                        <span class="emp-text">ADDRESS</span><br />
                        <span class="emp-text emp-payroll">BOOK</span>
                    </div>
                </div>
            </header>
            <!--Form with header and name-->
            <div class="form-content">
                <form class="form" action="#" @submit="submitForm">
                    <div class="form-head">Address Book Form</div>

                    <div class="row-content">
                        <label class="label text" for="name">Name</label>
                        <input class="input" type="text" id="name" name="name" placeholder="Your name.."
                            v-model="formValues.fullName" required />
                        <error-output class="text-error" for="name"></error-output>
                    </div>

                    <div class="row-content">
                        <label class="label text" for="address">Address</label>
                        <input class="input" type="text" id="address" name="address" placeholder="Your address.."
                            v-model="formValues.address" required />
                        <error-output class="text-error" for="name"></error-output>
                    </div>
                    <div class="row-content">
                        <label class="label text" for="phoneNumber">Phone Number</label>
                        <input class="input" type="text" id="phoneNumber" name="phoneNumber" placeholder="Your phone number.."
                            v-model="formValues.phoneNumber" required />
                        <error-output class="text-error" for="name"></error-output>
                    </div>
                    <div class="row-content">
                        <label class="label text" for="city">City</label>
                        <input class="input" type="text" id="city" name="city" placeholder="Your city.."
                            v-model="formValues.city" required />
                        <error-output class="text-error" for="name"></error-output>
                    </div>
                    <div class="row-content">
                        <label class="label text" for="state">State</label>
                        <input class="input" type="text" id="state" name="state" placeholder="Your state.."
                            v-model="formValues.state" required />
                        <error-output class="text-error" for="name"></error-output>
                    </div>
                    <div class="row-content">
                        <label class="label text" for="zipCode">Zip Code</label>
                        <input class="input" type="text" id="zipCode" name="zipCode" placeholder="Your zip.."
                            v-model="formValues.zipCode" required />
                        <error-output class="text-error" for="name"></error-output>
                    </div>

                    <div class="row-content">
                        <label class="label text" for="email">Email</label>
                        <input class="input" type="text" id="email" name="email" placeholder="Your email.."
                            v-model="formValues.email" required />
                        <error-output class="text-error" for="name"></error-output>
                    </div>

                    
                   
                    <div class="buttonParent">
                       <router-link to="/">
                            <button type="submit" class="resetButton button cancelButton">
                                Cancel
                            </button>
                        </router-link>
                        <div class="submit-reset">
                            <button type="submit" class="button submitButton" id="submitButton">
                                Submit
                            </button>
                            <input type="reset" class="resetButton button" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </body>
</template>

<script>
import AddressBookService from "../service/AddressBookService"

export default {
    name: "AddDetails",
    data() {
       
        return {
             
            formValues: {
                fullName: '',
                address: '',
                phoneNumber: '',
                city: '',
                state: '',
                zipCode: '',
                email: '',
            },
        };
    },
    methods: {
       submitForm(event) {
            event.preventDefault();
            const data = this.formValues;

            AddressBookService.addAddress(data)
            .then((response) => {
                console.log(response);
                console.log(response.data.data);
                this.details = response.data.data;
                if(response.data.data==null)
                {
                    alert("Duplicate contact");
                }
                else
                {
                alert("Address Added Successfully!!", response);
                }
            })
            .catch((error) => {
                console.log(error);
                alert("Error while adding address..!");
            });
        },
    },
};
</script>

<style>
body {
    margin: 0;
    height: 100%;
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
    border: 0px solid green;
}

.logo-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 0px solid green;
    width: 80%;
}

.logo-content-img {
    border: solid 0px #42515f;
}

.emp-text {
    font: normal normal bold 20px/25px Montserrat;
    font-family: "Montserrat", sans-serif;
    margin-left: 3px;
    letter-spacing: 0px;
    color: #82a70c;
    text-transform: capitalize;
}

.emp-payroll {
    color: #42515f;
}

* {
    box-sizing: border-box;
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
    margin-top: 10px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #f5f5f5;
    border-radius: 8px;
    opacity: 1;
}

.form-head {
    font: normal normal bold 24px/37px Roboto;
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
}

.label {
    min-width: 140px;
}

label {
    padding: 12px 12px 12px 0;
    display: inline-block;
}

.text {
    font-size: 16px;
    color: #42525f;
    opacity: 1;
    font-family: Roboto;
}

.input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}

.profile-radio-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.profile {
    width: 40px;
    border-radius: 50%;
    margin-left: 5px;
    position: relative;
    margin-right: 30px;
}

.profile-radio-content>label {
    display: flex;
    flex-direction: row;
    align-items: center;
}

select {
    padding: 10px;
    margin-right: 5px;
    border: 1px solid#ccc;
    border-radius: 4px;
    resize: vertical;
    font: normal normal normal 16px Roboto;
    letter-spacing: 2px;
    color: #42515f;
    background-color: transparent;
}

.buttonParent {
    display: flex;
    margin: 10px;
    justify-content: space-between;
    margin: 20px;
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
.button:hover {
  background: lightgreen;
}

.submitButton {
    border: none;
    background-color: #f5f5f5;
    margin-right: 30px;
}

.resetButton {
    border: none;
    background-color: #f5f5f5;
    margin-right: 30px;
}

.cancelButton {
    text-decoration: none;
    text-align: center;
}

error-output {
    margin-left: 10px;
    font-size: 12px;
    font-style: italic;
    color: red;
}
</style>
