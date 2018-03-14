<template>
    <div>

        <table>
            <caption>批量录入</caption>
            <br/>
            <tr>
                <td>数据类型：</td>
                <td>
                    <Select v-model="dataType" style="width:200px">
                        <Option v-for="item in dtList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </td>

            </tr>
            <br/>
            <tr>
                <td>数据文件：</td>
                <td>
                    <Upload name="excelFile"
                            :data="dataParams"
                            :before-upload="onBeforeUpload"
                            :on-success="onUploadSuccess"
                            action="http://localhost:8080/batch/excelTest">
                        <Button type="ghost" icon="ios-cloud-upload-outline">数据上传</Button>
                    </Upload>
                </td>
            </tr>
            <br/>
            <tr>
                <td><label>日志信息：</label></td>
                <td><label id="loginfo"></label></td>
            </tr>
        </table>

    </div>
</template>

<script>
    import dom from "dojo/dom";
    export default {
        name: "batch-input",
        data(){
            return {
                dtList: [
                    {
                        value: 'groupInfo',
                        label: '组信息'
                    },
                    {
                        value: 'familyInfo',
                        label: '户信息'
                    },
                    {
                        value: 'privateHouse',
                        label: '个人房屋'
                    },
                    {
                        value: 'privateAppurtenance',
                        label: '个人附属物'
                    },
                    {
                        value: 'communalHouse',
                        label: '集体房屋'
                    },
                    {
                        value: 'landinfo',
                        label: '土地信息'
                    }
                ],
                dataType: ''
            }
        },
        computed:{
            dataParams(){
                return {
                    dataType: this.dataType
                };
            }
        },
        methods:{
            onBeforeUpload(){
                if (this.dataType == ''){
                    alert("请选项输入数据类型。");
                    return false;
                }
                return true;
            },
            onUploadSuccess(resp, file, fileList){
                console.log("onUploadSuccess")
                dom.byId("loginfo").innerHTML = "log info";
            }
        }
    }
</script>

<style scoped>

</style>