<template>
    <ion-card v-if="info">
        <ion-card-header>
            <ion-card-subtitle>
                {{info['post code']}}
            </ion-card-subtitle>
            <ion-card-title>
                {{info['places'][0]['place name']}}
            </ion-card-title>
        </ion-card-header>
        <ion-car-content>
            <ion-list>
                <ion-item>
                    <ion-labe>
                        <strong>State:</strong>
                        {{info['places'][0]['state']}}
                        ({{info['places'][0]['state abbreviation']}})
                    </ion-labe>
                </ion-item>
                <ion-item>
                    <ion-labe>
                        <strong>Latitude:</strong>
                        {{info['places'][0]['latitude']}}
                    </ion-labe>
                </ion-item>
                <ion-item>
                    <ion-labe>
                        <strong>Longitude:</strong>
                        {{info['places'][0]['longitude']}}
                    </ion-labe>
                </ion-item>
            </ion-list>
        </ion-car-content>
    </ion-card>
</template>

<script>

export default {
    name: "Zipìnfo",
    props: ["info"]
}
</script>