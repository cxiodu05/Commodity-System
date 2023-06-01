<template>
    <v-card elevation="9">
        <v-row dense style="background-color: aliceblue;">
            <v-col>
                <v-btn color="error" text dark @click="closeDialog" absolute left top style="z-index: 10;">返回</v-btn>
            </v-col>
            <v-col>
                <v-card-title primary-title >
                    {{ title }}
                </v-card-title>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>


        <v-divider></v-divider>

        <v-card-text style="height: 550px;">
            <CommodityImgCarousel></CommodityImgCarousel>
            <v-divider></v-divider>
            <v-card elevation="2" style="margin: 24px; background-color: azure;">
                <v-card-text>
                    型号: I5BZ8
                </v-card-text>
                <v-card-text>
                    供应商: 河北石家庄钢材有限公司
                </v-card-text>
                <v-card-text>
                    单价: 119.8元
                </v-card-text>
                <v-card-text>
                    颜色: 烟青
                </v-card-text>
            </v-card>
            <v-card elevation="2" style="margin: 24px; background-color: azure;">
                <v-card-text>
                    型号: I5BZ8
                </v-card-text>
                <v-card-text>
                    供应商: 河北石家庄钢材有限公司
                </v-card-text>
                <v-card-text>
                    单价: 119.8元
                </v-card-text>
                <v-card-text>
                    颜色: 烟青
                </v-card-text>
            </v-card>
        </v-card-text>

        <v-divider></v-divider>




        <v-card-actions style="background-color: aliceblue;">
            <AplDialog></AplDialog>
            <v-spacer></v-spacer>
            <PeDialog></PeDialog>

        </v-card-actions>
    </v-card>
</template>

<script>
import CommodityImgCarousel from './CommodityImgCarousel.vue';
import PeDialog from './PeDialog.vue';
import AplDialog from './AplDialog.vue';
export default {
    name: 'CommodityuDetail',
    data: () => ({
        title: 'Vue设计与实现'
    }),
    methods: {
        closeDialog() {
            this.$emit('close')
        }
    },
    components: {
        CommodityImgCarousel,
        PeDialog,
        AplDialog
    }
}
</script>

<style></style>