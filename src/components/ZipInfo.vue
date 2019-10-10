<template>
    <ion-grid v-if="info && Object.keys(info).length > 0 ">
        <ion-row expand="block" v-bind:info="info" v-for="place in info['places']">
            <ion-card expand="block">
                <ion-card-header>
                    <ion-card-subtitle><a rel="google-places" v-bind:href="`https://www.google.com/maps/place/${info['post code']}`" target="_blank">
                        {{info['post code']}}</a>
                    </ion-card-subtitle>
                    <ion-card-title>
                        <a v-bind:href="`https://www.google.com/maps/place/${info['post code']}+${place['place name'].replace(/ /g, '+')}`" target="_blank">
                        {{place['place name']}}</a>
                    </ion-card-title>
                </ion-card-header>
                <ion-car-content>
                    <ion-list>
                        <ion-item>
                            <ion-labe>
                                <strong>State:</strong>
                                {{place['state']}}
                                ({{place['state abbreviation']}})
                            </ion-labe>
                        </ion-item>
                        <ion-item>
                            <ion-labe>
                                <strong>Latitude:</strong>
                                {{place['latitude']}}
                            </ion-labe>
                        </ion-item>
                        <ion-item>
                            <ion-labe>
                                <strong>Longitude:</strong>
                                {{place['longitude']}}
                            </ion-labe>
                        </ion-item>
                    </ion-list>
                </ion-car-content>
            </ion-card>
        </ion-row>
    </ion-grid>
</template>

<script>

export default {
    name: "Zipìnfo",
    props: ["info"]
}
</script>