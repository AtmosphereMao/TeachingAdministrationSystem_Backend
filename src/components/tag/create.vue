<style lang="less"></style>
<template>
  <div class="">
    <div class="table-basic-vue frame-page h-panel">
      <div class="h-panel-bar"><span class="h-panel-title">添加课程标签</span></div>
      <div class="h-panel-body">
        <p>
          <Button class="h-btn h-btn-primary" icon="icon-arrow-left" @click="back()">返回列表</Button>
        </p>

        <Form v-width="400" mode="block" ref="form" :validOnChange="true" :showErrorTip="true" :labelWidth="110" :rules="rules" :model="tag">
          <FormItem label="标签" prop="name">
            <template v-slot:label>标签名</template>
            <input type="text" v-model="tag.name" />
          </FormItem>
          <FormItem label="显示" prop="is_show">
            <template v-slot:label>显示</template>
            <h-switch v-model="tag.is_show" :trueValue="1" :falseValue="0"></h-switch>
          </FormItem>
          <FormItem>
            <Button color="primary" @click="create">添加</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import Tag from 'model/Tag';

export default {
  data() {
    return {
      tag: Tag.parse({}),
      rules: {
        required: ['sort', 'name', 'is_show']
      }
    };
  },
  mounted() {
    this.init();
    this.tag.is_show = 0;
  },
  methods: {
    init() {},
    back() {
      this.$router.push({ name: 'Tag' });
    },
    create() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        R.Tag.Create(this.tag).then(resp => {
          HeyUI.$Message.success('添加成功');
          this.$router.push({ name: 'Tag' });
        });
      }
    }
  }
};
</script>
