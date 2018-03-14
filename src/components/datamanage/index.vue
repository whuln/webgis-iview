<template>
    <div class="layout">
      <div class="header">
          <span class="layout-logo">数据管理</span>
      </div>
      <div class="content">
          <Layout>
              <Sider hide-trigger :style="{background: '#fff'}">
                  <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                      <Submenu name="1">
                          <template slot="title">
                              <Icon type="ios-navigate"></Icon>
                              数据录入
                          </template>
                          <MenuItem name="1-1"><router-link to="/batchInput">批量录入</router-link></MenuItem>
                          <MenuItem name="1-2"><router-link to="/groupInput">组信息录入</router-link></MenuItem>
                          <MenuItem name="1-3"><router-link to="/familyInput">户信息录入</router-link></MenuItem>
                          <MenuItem name="1-4"><router-link to="/jitiInput">集体信息录入</router-link></MenuItem>
                          <MenuItem name="1-5"><router-link to="/landInput">土地信息录入</router-link></MenuItem>
                      </Submenu>
                      <Submenu name="2">
                          <template slot="title">
                              <Icon type="ios-keypad"></Icon>
                              数据查改
                          </template>
                          <MenuItem name="2-1">Option 1</MenuItem>
                          <MenuItem name="2-2">Option 2</MenuItem>
                      </Submenu>
                      <Submenu name="3">
                          <template slot="title">
                              <Icon type="ios-analytics"></Icon>
                              数据统计
                          </template>
                          <MenuItem name="3-1">Option 1</MenuItem>
                          <MenuItem name="3-2">Option 2</MenuItem>
                      </Submenu>
                  </Menu>
              </Sider>
              <Layout :style="{padding: '0 24px 24px'}">
                  <transition>
                      <keep-alive>
                          <router-view></router-view>
                      </keep-alive>
                  </transition>

              </Layout>
          </Layout>
      </div>

    </div>
</template>

<script>
    export default {
        name: "data-manager"
    }
</script>

<style scoped lang="scss">
    @import "../common-css.scss";
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
        width: 100%;

        display: -webkit-flex; /* Safari */
        display: flex;
        flex-flow: column nowrap;

    }
    .header{
        flex: 0 0 45px;
        @include bk-dark;
    }
    .content{
        flex: 1 1 auto;
        background-color: lemonchiffon;
    }


    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 1px;
        float: left;
        position: relative;
        top: 5px;
        left: 20px;
        color: white;
        margin-left: 2px;
        font-size: 24px;

    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>