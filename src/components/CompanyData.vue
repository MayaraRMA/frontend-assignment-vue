<template>
  <div class="company-data">
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h5>
      <div class="company-data-item">
          <label for="companyName">Company Name</label>
          <input 
            @blur="checkName" 
            type="text" 
            name="companyName" 
            v-model="companyName" 
            placeholder="e.g. Your Company Name">
          <span class="error" v-if="errorName">{{ errorName }}</span>
      </div>
      
      <div class="company-data-item">
          <label for="">Company Spend</label>
          <input
            @blur="checkSpend"
            type="text"
            v-model.number="companySpend"
            min="0"
            placeholder="e.g. $150,000">
          <span class="error" v-if="errorSpend">{{ errorSpend }}</span>
      </div>
      <div class="company-data-item">
          <label for="">Company Spend Ability</label>
          <input 
            @blur="checkSpendAbility"
            type="text" 
            v-model="companySpendAbility" 
            placeholder="e.g. $150,000 - $330,000">
          <span class="error" v-if="errorSpendAbility">{{ errorSpendAbility }}</span>
      </div>
      <div class="company-data-item">
          <label for="">Notes</label>
          <textarea 
            v-model="additionalNotes" 
            @click="openModal" 
            placeholder="e.g. Good Tech Company">
          </textarea>
      </div>
      <note-modal 
        class="note-modal" 
        v-if="showModal"
        :additionalNotes="additionalNotes"
        @closeModal="showModal = $event"
        @saveModal="additionalNotes = $event">
      </note-modal>
  </div>
</template>

<script>
import NoteModal from "./NoteModal.vue";

export default {
    components: {
        NoteModal
    },
    data() {
        return {
            errorName: null,
            errorSpend: null,
            errorSpendAbility: null,
            companyName: null,
            companySpend: null,
            companySpendAbility: null,
            additionalNotes: null,
            showModal: false
        }
    },
    methods: {
        checkName() {
            if (this.companyName) {
                this.errorName = null;
                return true;
            }
            if (!this.companyName) {
                this.errorName = "Company Name must be present";
            } 
        },
        checkSpend() {
            let val = parseFloat(this.companySpend);
            
            if (val > 0) {
                this.errorSpend = null;
                this.companySpend = this.companySpend.toLocaleString('en-US', { style:'currency', currency: 'USD' })
                return true;
            }
            if (val < 0) {
                this.errorSpend = "Company Spend must be positive";
            }
    
        },
        checkSpendAbility() {
            let findIndex = this.companySpendAbility.toString().indexOf("-");

            console.log(findIndex)
            // let valMin = this.companySpendAbility.
        },
        openModal() {
            this.showModal = true;
        }
    }
}
</script>

<style scoped>
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
input[type=number] {
  -moz-appearance:textfield;
}
.company-data {
    border: 1px solid #D8DCE5;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    width: 100%
}
.company-data h5{
    font-weight: 300;
    letter-spacing: 0.5px;
    font-size: 0.875rem;
    line-height: 22px;
    margin-bottom: 20px;
}
.company-data-item {
    display: flex;
    flex-direction: column;
    color: #B8B8B8;
    text-transform: uppercase;
    font-size: 0.75rem;
    margin-bottom: 20px;  
}
.company-data-item:last-child {
    margin-bottom: 0px;
}

.company-data-item label {
    margin-bottom: 5px;
}
.company-data-item input {
    padding: 10px;
    border: 1px solid #D8DCE5;
    border-radius: 5px;
    box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.05);
    width: 50%;
}
.company-data-item input::placeholder{
    color: #CDD1DF
}
.company-data-item textarea {
    padding: 10px;
    border: 1px solid #D8DCE5;
    border-radius: 5px;
    box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.05);
    resize: none;
}
.company-data-item textarea::placeholder {
    color: #CDD1DF;
}
.error {
    color: red;
    text-transform: capitalize;
    margin-top: 3px;
}

.note-modal {
    display: flex;
    position: absolute;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.5)
}


</style>