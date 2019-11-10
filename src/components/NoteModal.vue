<template>
<div>
    <div class="modal">
        <div class="modal-header">
            <label for="addNotes">Additional Notes</label>
            <p class="close-modal" @click="closeModal">x</p>
        </div>
        <textarea v-model="addNotes" name="addNotes" cols="30" rows="10"></textarea>
        <div class="modal-button">
            <button @click="saveModal">SAVE</button>
        </div>
    </div>   
</div>
    
</template>

<script>
export default {
    props: {
        showModal: {
            type: Boolean,
            default: false
        },
        additionalNotes: {
            type: String
        }
    },
    data() {
        return {
            addNotes: this.additionalNotes
        }
    },
    methods: {
        closeModal() {
            this.showModal = false;
            this.$emit("closeModal", this.showModal);
        },
        saveModal() {
            this.$emit("saveModal", this.addNotes);
            this.closeModal();
        }
    },

}
</script>

<style scoped>
.close-modal {
    padding: 5px;
    cursor: pointer;
}

.modal {
   border: 1px solid #D8DCE5;
   background-color: #ffffff;
    border-radius: 8px;
    padding: 30px;
    margin: auto;
    width: 50%;
}

.modal textarea {
    padding: 10px;
    border: 1px solid #D8DCE5;
    border-radius: 5px;
    box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.05);
    resize: none;
    width: 100%;
}
.modal-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    color: #B8B8B8;
    text-transform: uppercase;
    font-size: 0.75rem; 
}

.modal-button {
    text-align: right;
}
.modal .modal-button button {
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.8rem;
    padding: 8px 35px;
    background-color: #394783;
    color: #ffffff;
    margin-top: 20px;
}
</style>