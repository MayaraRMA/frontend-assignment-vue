<template>
  <div class="company-data">
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h5>
      <div class="company-data-item">
          <label for="">Company Name</label>
          <input type="text" placeholder="e.g. Your Company Name">
      </div>
      
      <div class="company-data-item">
          <label for="">Company Spend</label>
          <input type="text" placeholder="e.g. $150,000">
      </div>
      <div class="company-data-item">
          <label for="">Company Spend Ability</label>
          <input type="text" placeholder="e.g. $150,000 - $330,000">
      </div>
      <div class="company-data-item">
          <label for="">Notes</label>
          <textarea name="" id="" cols="30" rows="10" placeholder="e.g. Good Tech Company"></textarea>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.company-data {
    border: 1px solid #D8DCE5;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 80px;
    padding: 20px;
    width: 100%;
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
</style>