<template>
<div>
    <div class="modal">
        <div class="modal-header">
            <label for="addNotes">Additional Notes</label>
            <p @click="closeModal">x</p>
        </div>
        <textarea name="addNotes" cols="30" rows="10"></textarea>
        <div class="modal-button">
            <button @click="closeModal">SAVE</button>
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
        }
    },
    methods: {
        closeModal() {
            this.showModal = false
            this.$emit("closeModal", this.showModal)
        }
    },

}
</script>

<style scoped>
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