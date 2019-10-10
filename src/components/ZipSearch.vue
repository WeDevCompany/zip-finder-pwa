<template>
    <ion-grid>
        <form @submit="onSubmit">
            <ion-col>
                <ion-item>
                    <ion-label>ZipCode: </ion-label>
                    <ion-input :value="zip" @input="zip = $event.target.value" placeholder="Enter ES ZipCode" name="zip"></ion-input>
                </ion-item>
            </ion-col>
             <ion-col>
                <ion-button type="submit" color="primary" expand="block">
                    Find
                </ion-button>
            </ion-col>
        </form>
    </ion-grid>
</template>

<script>

export default {
    name: "ZipSearch",
    data() {
        return {
            zip: ""
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            if(!this.isValidZip(this.zip)){
                this.showAlert();
                this.zip = "";
                return;
            }
            this.$emit("get-zip", this.zip);
            this.zip = "";
        },
        isValidZip(zip) {
            return /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(zip);
        },
        showAlert() {
            this.$ionic.alertController.create({
                header: "Wrong zip code",
                message: "Please enter a valid ES zip code",
                buttons: ["OK"]
            }).then(resolve => resolve.present())
        }
    }
}
</script>