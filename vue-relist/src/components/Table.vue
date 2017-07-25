<style scoped>
  .expand-row{
    margin-bottom: 5px;
    margin-left: 2px;
  }
</style>
<template>
  <div>
    <Row class="expand-row">
      <Col span="24" class="expand-col">
      <span class="expand-key">游戏名：</span>
      <span class="expand-value">{{ row.gameName }}</span>
      </Col>
      <!--
      <Col span="8">
      <span class="expand-key">新玩家留存：</span>
      <span class="expand-value">{{ row.interest }}</span>
      </Col>

      <Col span="8">
      <span class="expand-key">生日：</span>
      <span class="expand-value">{{ row.birthday }}</span>
      </Col>
      -->
    </Row>
    <Row>
      <Col span="24">
      <span class="expand-key">新玩家数据：</span>
      <span class="expand-value">{{ row.remainUser }}</span>
      </Col>
      <!--
    <Col span="8">
    <span class="expand-key">最喜欢的音乐：</span>
    <span class="expand-value">{{ row.music }}</span>
    </Col>
    -->
    </Row>
    <Row>
      <Col span="24">
      <span class="expand-key">老玩家数据：</span>
      <span class="expand-value">{{ row.loginRemainUser }}</span>
      </Col>
      <!--
    <Col span="8">
    <span class="expand-key">最喜欢的音乐：</span>
    <span class="expand-value">{{ row.music }}</span>
    </Col>
    -->
    </Row>
  </div>
</template>
<script>
  export default {
    props: {
      row: Object
    }
  };
</script>
