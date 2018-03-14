<template>
    <div>
        <Form ref="groupForm" :model="groupInfo" :rules="ruleInline" inline>
            <FormItem prop="xian" label="县">
                <Input type="text" v-model="groupInfo.xian" placeholder="所在县...">
                </Input>
            </FormItem>
            <FormItem prop="xiang" label="乡/镇">
                <Input type="text" v-model="groupInfo.xiang" placeholder="所在乡镇...">
                </Input>
            </FormItem>
            <FormItem prop="cun" label="村">
                <Input type="text" v-model="groupInfo.cun" placeholder="所在村...">
                </Input>
            </FormItem>
            <FormItem prop="zu" label="组">
                <Input type="text" v-model="groupInfo.zu" placeholder="所在组...">
                </Input>
            </FormItem>
            <FormItem  label="提交">
                <Button type="primary" @click="handleSubmit('groupForm')">提交</Button>
            </FormItem>
        </Form>

        <br/>
        <label>日志信息：</label>
        <label id="loginfo"></label>



    </div>

</template>

<script>
    export default {
        name: "group-info-input",
        data(){
            return {
                groupInfo:{
                    xian:"",
                    xiang:"",
                    cun:"",
                    zu:""
                },
                ruleInline: {
                    xian: [
                        { required: true, message: 'Please fill in the xian', trigger: 'blur' },
                        { type: 'string', message: 'The xian must be String', trigger: 'blur' }
                    ],
                    xiang: [
                        { required: true, message: 'Please fill in the xiang.', trigger: 'blur' },
                        { type: 'string', message: 'The xiang must be String', trigger: 'blur' }
                    ],
                    cun: [
                        { required: true, message: 'Please fill in the cun', trigger: 'blur' },
                        { type: 'string', message: 'The xian must be String', trigger: 'blur' }
                    ],
                    zu: [
                        { required: true, message: 'Please fill in the zu.', trigger: 'blur' },
                        { type: 'string', message: 'The xiang must be String', trigger: 'blur' }
                    ]
            }


            }
        },
        methods:{
            handleSubmit(myref){

            }
        }
    }
</script>

<style scoped>

</style>